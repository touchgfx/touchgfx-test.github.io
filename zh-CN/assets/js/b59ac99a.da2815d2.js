"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8394],{

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

/***/ 65250:
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
  title: "\u6559\u7A0B5\uFF1A\u521B\u5EFA\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u548C\u64CD\u4F5C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-05",
  "id": "tutorials/tutorial-05",
  "title": "\u6559\u7A0B5\uFF1A\u521B\u5EFA\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u548C\u64CD\u4F5C",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/tutorial-05.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-05",
  "permalink": "/4.20/zh-CN/docs/tutorials/tutorial-05",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-05",
    "title": "\u6559\u7A0B5\uFF1A\u521B\u5EFA\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u548C\u64CD\u4F5C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6559\u7A0B4\uFF1A\u521B\u5EFA\u5177\u6709\u81EA\u5B9A\u4E49\u884C\u4E3A\u7684\u6EDA\u8F6E\u3002",
    "permalink": "/4.20/zh-CN/docs/tutorials/tutorial-04"
  },
  "next": {
    "title": "AbstractButton",
    "permalink": "/4.20/zh-CN/docs/api/classes/classtouchgfx_1_1_abstract_button"
  }
};
const assets = {};



const toc = [{
  value: "\u5C06\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6DFB\u52A0\u5230\u5C4F\u5E55",
  id: "adding-a-custom-action-to-a-screen",
  level: 2
}, {
  value: "\u5C06\u503C\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u64CD\u4F5C",
  id: "passing-a-value-to-a-custom-action",
  level: 2
}, {
  value: "\u5728\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7TouchGFX Designer\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u5177\u6709\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u548C\u64CD\u4F5C\u7684\u4EA4\u4E92\u7EC4\u4EF6\u3002 \u5E94\u7528\u4E2D\u7684\u6BCF\u4E2A\u5C4F\u5E55\u90FD\u53EF\u80FD\u5305\u542B\u64CD\u4F5C\u96C6\u5408`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uFF08\u8FD9\u4E9B\u662FC++\u4E2D\u7684\u7B80\u5355void\u65B9\u6CD5\uFF09`), `\uFF0C\u60A8\u53EF\u4EE5\u4ECETouchGFX Designer\u5185\u90E8\u548C\u4EE3\u7801\u4E2D\u8C03\u7528\u8FD9\u4E9B\u64CD\u4F5C\uFF0C\u800C\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E5F\u53EF\u80FD\u6709\u60A8\u7684\u5E94\u7528\u53EF\u80FD\u54CD\u5E94\u7684\u89E6\u53D1\u6761\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uFF08\u76F8\u5F53\u4E8EC++\u4E2D\u7684\u56DE\u8C03\uFF09`), `\u96C6\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE5\u6559\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u6B64\u529F\u80FD\uFF0C\u4EE5\u63A2\u7D22\u4F7F\u7528\u5B83\u521B\u5EFA\u66F4\u7B80\u6D01\u3001\u52A8\u6001\u7684TouchGFX\u5E94\u7528\u7684\u53EF\u80FD\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6559\u7A0B\u4E0D\u9002\u5408TouchGFX\u7684\u65B0\u7528\u6237\u3002 \u5EFA\u8BAE\u4EE5\u540E\u518D\u5B66\u4E60\u672C\u6559\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "adding-a-custom-action-to-a-screen"
  }), `\u5C06\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6DFB\u52A0\u5230\u5C4F\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u5EFA\u4E00\u4E2A\u5305\u542B\u80CC\u666F\u65B9\u5757\u548C\u6309\u94AE\u7684\u5E94\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6DFB\u52A0\u5230\u5E94\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6309\u94AE\u88AB\u6309\u4E0B\u65F6\u4F7F\u7528\u81EA\u5B9A\u4E49\u64CD\u4F5C\u4FEE\u6539\u80CC\u666F\u8272`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u7528\u5C3A\u5BF8\u4E3A480x272\u7684\u56FE\u50CF\uFF08\u9002\u7528\u4E8ESTM32F746\u6216\u6A21\u62DF\u5668\u7B49\uFF09\u65B0\u5EFA\u4E00\u4E2A\u7A7A\u767D\u5E94\u7528\uFF0C\u5E76\u63D2\u5165\u4E00\u4E2A\u7528\u4F5C\u80CC\u666F\u7684\u65B9\u5757\uFF08\u5C06\u5176\u547D\u540D\u4E3A\u201Cbackground\u201D\uFF09\u548C\u4E00\u4E2A\u6309\u94AE\uFF08\u5C06\u5176\u547D\u540D\u4E3A\u201Cbutton\u201D\uFF09\u3002 \u7ED3\u679C\u5E94\u7C7B\u4F3C\u4E8E\u4E0B\u56FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 85]],
    imageSource: "/img/tutorials/tutorial-05/white-background-and-button-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u6DFB\u52A0\u4E00\u4E2A\u767D\u8272\u80CC\u666F\u65B9\u5757\u548C\u4E00\u4E2A\u6309\u94AE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u5C06\u4E00\u4E2A\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6DFB\u52A0\u5230\u5C4F\u5E55\u3002 \u60A8\u53EF\u4EE5\u4ECE\u5C4F\u5E55\u7684\u201C\u5C5E\u6027\u201D\u9009\u9879\u5361\u5B8C\u6210\u6B64\u64CD\u4F5C\uFF0C\u65B9\u6CD5\u662F\u9009\u62E9\u201C\u5C4F\u5E55\u201D\u5E76\u6309\u4E0B\u201C\u64CD\u4F5C\u201D\u7EC4\u4E2D\u7684\u201C+\u201D\u6309\u94AE\uFF08\u4E0A\u9762\u7684\u56FE1\uFF09\u3002 \u5C06\u64CD\u4F5C\u547D\u540D\u4E3A\u201CsetBackgroundColor\u201D\uFF0C\u63D0\u4F9B\u8BF8\u5982\u201C\u8BBE\u7F6E\u80CC\u666F\u8272\u201D\u4E4B\u7C7B\u7684\u63CF\u8FF0\u3002 \u4E0D\u8981\u8BBE\u7F6E\u6B64\u64CD\u4F5C\u7684\u7C7B\u578B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/adding-custom-action-to-screen-4-17.png",
    mdxType: "Figure"
  }, "\u5C06\u65B0\u7684\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6DFB\u52A0\u5230\u5C4F\u5E55"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F4`), ` \u952E\u751F\u6210\u9879\u76EE\u4EE3\u7801\u3002 \u8FD9\u5C06\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/generated/gui_generated/include/gui_generated/screen1_screen/Screen1ViewBase.hpp`), `\u4E2D\u751F\u6210\u4E00\u4E2A\u540D\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor()`), `\u7684\u865A\u62DF\u65B9\u6CD5\uFF0C\u5B83\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1ViewBase.cpp`), `\u4E2D\u6709\u4E00\u4E2A\u7A7A\u5B9E\u73B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You can add functionality to this method by overriding it in user code in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.cpp`), ` file or by creating interactions through TouchGFX Designer. Let's try out the latter by going to the interactions tab for the screen and adding an interaction that calls our new method when our button is clicked.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/calling-setbackgroundcolor-on-click-4-17.png",
    mdxType: "Figure"
  }, "\u5728\u70B9\u51FB\u6309\u94AE\u65F6\u8C03\u7528setBackgroundColor"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u6211\u4EEC\u5FC5\u987B\u6307\u5B9A\u5728\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), `\u65F6\u5B9E\u9645\u53D1\u751F\u7684\u64CD\u4F5C\u3002 \u4E3A\u6B64\uFF0C\u5728\u53E6\u4E00\u4E2A\u4EA4\u4E92\u4E2D\u4F7F\u7528\u65B0\u7684\u81EA\u5B9A\u4E49\u64CD\u4F5C (1) \u4F5C\u4E3A\u89E6\u53D1\u6761\u4EF6\u3002 \u9996\u5148\uFF0C\u5728\u89E6\u53D1\u6761\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u8C03\u7528setBackgroundColor\u201D`), `\u53D1\u751F\u65F6\uFF0C\u4F7F\u7528\u64CD\u4F5C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u4FEE\u6539\u65B9\u5757\u8272\u5F69\u201D(2) `), `\u5C06\u80CC\u666F\u65B9\u5757\u7684\u8272\u5F69\u7B80\u5355\u5730\u8BBE\u7F6E\u4E3A\u9ED1\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[355, 60], [410, 76]],
    imageSource: "/img/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5B9E\u73B0\u81EA\u5B9A\u4E49\u64CD\u4F5CsetBackgroundColor\u7684\u529F\u80FD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u8FD0\u884C\u6A21\u62DF\u5668\u5E76\u6309\u4E0B\u6309\u94AE\uFF1B\u80CC\u666F\u5E94\u53D8\u4E3A\u9ED1\u8272\u3002 \u60A8\u5DF2\u6210\u529F\u521B\u5EFA\u7B2C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/black-color-result-4-17.png",
    mdxType: "Figure"
  }, "\u6309\u4E0B\u6309\u94AE\u5C06\u80CC\u666F\u53D8\u4E3A\u9ED1\u8272"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "passing-a-value-to-a-custom-action"
  }), `\u5C06\u503C\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u5C06\u5728\u521A\u521B\u5EFA\u7684\u5E94\u7528\u7684\u57FA\u7840\u4E0A\uFF0C\u57FA\u4E8E\u81EA\u5B9A\u4E49\u64CD\u4F5C\u7684\u6982\u5FF5\u8FDB\u884C\u5982\u4E0B\u62D3\u5C55\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u53C2\u6570\u6DFB\u52A0\u5230setBackgroundColor\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u968F\u673A\u8272\u4F20\u9012\u5230setBackgroundColor`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6309\u4E0B\u6309\u94AE\u65F6\u5C06\u80CC\u666F\u4FEE\u6539\u4E3A\u968F\u673A\u8272`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u8BA9\u8BE5\u5E94\u7528\u66F4\u6709\u8DA3\uFF0C\u6211\u4EEC\u5C06\u4E00\u4E2A\u503C\u4F20\u9012\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), ` \u81EA\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u4F7F\u4E4B\u53D8\u5F97\u66F4\u52A8\u6001\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F6C\u81F3\u5C4F\u5E55\u7684\u201C\u4EA4\u4E92\u201D\u9009\u9879\u5361\uFF0C\u4E3A\u64CD\u4F5C\u6309\u4E0Bx\u6309\u94AE\u5220\u9664\u4E24\u4E2A\u5F53\u524D\u64CD\u4F5C\uFF0C\u7136\u540E\u6211\u4EEC\u5C06\u8BBE\u7F6E\u65B0\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F6C\u81F3\u5C4F\u5E55\u7684\u201C\u5C5E\u6027\u201D\u9009\u9879\u5361\uFF0C\u627E\u5230\u81EA\u5B9A\u4E49\u64CD\u4F5C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), ` \uFF0C\u53D6\u6D88\u9009\u4E2D\u7C7B\u578B\u590D\u9009\u6846\u5E76\u8F93\u5165\u201Ccolortype\u201D\uFF0C\u8FD9\u5C06\u662F\u6211\u4EEC\u8981\u4F20\u9012\u7ED9\u64CD\u4F5C\u7684\u53C2\u6570\u7C7B\u578B\uFF08colortype\u662F\u7528\u4E8E\u63CF\u8FF0\u8272\u5F69\u7684\u81EA\u5E26TouchGFX\u7C7B\u578B\uFF09\u3002 \u4E0D\u80FD\u547D\u540D\u53C2\u6570\uFF0C\u5B83\u7684\u540D\u79F0\u5C06\u662F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201Cvalue\u201D`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/adding-type-to-action-4-17.png",
    mdxType: "Figure"
  }, "\u4E3A\u81EA\u5B9A\u4E49\u64CD\u4F5C\u8BBE\u7F6E\u53C2\u6570"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u6765\u8BBE\u7F6E\u4EA4\u4E92\uFF0C\u5B83\u4F7F\u7528\u6211\u4EEC\u65B0\u6DFB\u52A0\u7684\u53C2\u6570\u503C\u3002 \u6211\u4EEC\u4F7F\u7528\u89E6\u53D1\u6761\u4EF6\u201C\u8C03\u7528setBackgroundColor\u201D\u548C\u64CD\u4F5C\u201C\u6267\u884CC++\u4EE3\u7801\u201D\u8FDB\u884C\u8BBE\u7F6E\u3002 \u6211\u4EEC\u8981\u7528\u65B0\u53C2\u6570\u8BBE\u7F6E\u80CC\u666F\u65B9\u5757\u7684\u8272\u5F69\uFF0C\u56E0\u6B64\u8981\u6267\u884C\u7684\u4EE3\u7801\u5E94\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `background.setColor(value);
background.invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u884C\u5F3A\u5236\u7528\u65B0\u8272\u5F69\u91CD\u7ED8\u80CC\u666F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/set-color-execute-code-4-17.png",
    mdxType: "Figure"
  }, "\u4F7F\u7528\u4F20\u9012\u7684\u503C\u4FEE\u6539\u80CC\u666F\u8272\u5F69"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u6CE8\u610F\uFF0C\u89E6\u53D1\u6761\u4EF6\u663E\u793A\u4E86\u53C2\u6570\u7684\u540D\u79F0\u548C\u7C7B\u578B\u201Cvalue : colortype\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u6211\u4EEC\u5C06\u8BBE\u7F6E\u5728\u70B9\u51FB\u6309\u94AE\u65F6\u5B9E\u9645\u8C03\u7528setBackgroundColor\u7684\u4EA4\u4E92\u3002 \u6DFB\u52A0\u53E6\u4E00\u4E2A\u5177\u6709\u89E6\u53D1\u6761\u4EF6\u201C\u70B9\u51FB\u6309\u94AE\u201D\u548C\u64CD\u4F5C\u201C\u8C03\u7528Screen1 setBackgroundColor\u201D\u7684\u4EA4\u4E92\uFF0C\u8BF7\u6CE8\u610F\uFF0C\u503C\u5C5E\u6027\u4E5F\u663E\u793A\u4E86\u5B83\u7684\u9884\u671F\u7C7B\u578B\u3002 \u6211\u4EEC\u5C06\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `stdlib.h`), `\u4E2D\u5229\u7528\u968F\u673A\u5316\u65B9\u6CD5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `rand()`), `\u5C06\u968F\u673A\u8272\u4F20\u9012\u7ED9setBackgroundColor\uFF0C\u4EE5\u4FBF\u83B7\u53D6\u4E09\u4E2A0\u81F3255\u4E4B\u95F4\u7684\u968F\u673A\u6570\u5E76\u7528\u5B83\u4EEC\u6307\u5B9A\u8272\u5F69\u3002 \u4E3A\u4E86\u8BBF\u95EE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `rand()`), `\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u5176\u5305\u542B\u5728\u5E94\u7528\u4E2D\u3002 \u8FD8\u53EF\u4EE5\u4ECETouchGFX Designer\u5185\u90E8\u4E3A\u5C4F\u5E55\u548C\u81EA\u5B9A\u4E49\u5BB9\u5668\u63D0\u4F9B\u60A8\u81EA\u5DF1\u7684includes\u51FD\u6570\uFF0C\u5728\u672C\u4F8B\u4E2D\u6211\u4EEC\u9700\u8981\u8FD9\u6837\u505A\u3002 \u8F6C\u81F3\u5C4F\u5E55\u7684\u201C\u5C5E\u6027\u201D\u9009\u9879\u5361\uFF0C\u5728\u201CINCLUDES\u201D\u7EC4\u4E0B\u9762\u8F93\u5165\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <stdlib.h>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/include-stdlib-4-17.png",
    mdxType: "Figure"
  }, "\u5305\u542Bstdlib\u4EE5\u4FBF\u8BBF\u95EErand()"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u5BF9\u4E8E\u503C\u5C5E\u6027\uFF0C\u6211\u4EEC\u5C06\u8F93\u5165 (1)\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[355, 110]],
    imageSource: "/img/tutorials/tutorial-05/pass-random-color-to-action-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5728\u70B9\u51FB\u6309\u94AE\u65F6\u4F20\u9012\u968F\u673A\u8272\u5F69\u503C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u8FD0\u884C\u6A21\u62DF\u5668\u5E76\u5C1D\u8BD5\u591A\u6B21\u6309\u4E0B\u6309\u94AE\u3002 \u60A8\u5E94\u770B\u5230\u80CC\u666F\u53D8\u4E3A\u968F\u673A\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/random-color-result-initial-4-17.png",
    mdxType: "Figure"
  }, "\u70B9\u51FB\u6309\u94AE\u65F6\u5F97\u5230\u7684\u968F\u673A\u8272"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-custom-triggers-in-custom-containers"
  }), `\u5728\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u540E\uFF0C\u81EA\u5B9A\u4E49\u5BB9\u5668\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u96C6\uFF0C\u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u57FA\u4E8E\u5E94\u7528\u8FDB\u884C\u5982\u4E0B\u62D3\u5C55\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u521B\u5EFA\u65B0\u7684\u540D\u4E3AColorEmitter\u7684\u81EA\u5B9A\u4E49\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u540D\u4E3A\u201CcolorChanged\u201D\u7684\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u6DFB\u52A0\u5230ColorEmitter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6309\u4E0B\u6309\u94AE\u65F6\u7528\u89E6\u53D1\u6761\u4EF6colorChanged\u5C06\u968F\u673A\u8272\u4F20\u9012\u7ED9\u5E94\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u5C4F\u5E55\u4E2D\u8BBE\u7F6E\u4EA4\u4E92\u4EE5\u76D1\u542C\u89E6\u53D1\u6761\u4EF6colorChanged`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528ColorEmitter\u53D1\u9001\u7684\u4EFB\u4F55\u8272\u5F69\u8BBE\u7F6E\u80CC\u666F\u65B9\u5757\u7684\u8272\u5F69`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u6211\u4EEC\u5C1D\u8BD5\u7528\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u6765\u6307\u793A\u5E94\u7528\u4E2D\u7684\u4E00\u4E9B\u4E8B\u4EF6\u3002 \u6211\u4EEC\u4E0D\u4F7F\u7528\u5C06\u968F\u673A\u8272\u4F20\u9012\u7ED9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), `\u7684\u6309\u94AE\u4EA4\u4E92\uFF0C\u800C\u662F\u5C1D\u8BD5\u8BA9\u81EA\u5B9A\u4E49\u5BB9\u5668\u5C06\u968F\u673A\u8272\u53D1\u9001\u5230\u5C4F\u5E55\uFF0C\u7136\u540E\u8BA9\u5C4F\u5E55\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BB9\u5668\u4F20\u9012\u7684\u4EFB\u4F55\u503C\u3002 \u8FD9\u4F1A\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u5E94\u7528\u4E2D\u7684\u4E0D\u540CUI\u7EC4\u4EF6\u76F8\u4E92\u901A\u4FE1\uFF0C\u4F7F\u5E94\u7528\u5177\u6709\u66F4\u5C0F\u7684\u4F53\u79EF\u548C\u66F4\u9AD8\u7684\u53EF\u590D\u7528\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5BB9\u5668\u5E76\u5C06\u5176\u547D\u540D\u4E3A\u201CColorEmitter\u201D\u3002 \u63D2\u5165\u4E00\u4E2A\u6309\u94AE\u5E76\u5C06\u5176\u547D\u540D\u4E3A\u201Cbutton\u201D\u3002 \u7ED3\u679C\u5E94\u7C7B\u4F3C\u4E8E\u4E0B\u56FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/color-emitter-custom-container-4-17.png",
    mdxType: "Figure"
  }, "\u81EA\u5B9A\u4E49\u5BB9\u5668ColorEmitter"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\uFF0C\u6211\u4EEC\u8981\u8BA9ColorEmitter\u5728\u6309\u94AE\u88AB\u70B9\u51FB\u65F6\u53D1\u9001\u968F\u673A\u8272\u3002 \u7136\u540E\uFF0C\u4EFB\u4F55\u5BF9\u8C61\u90FD\u53EF\u4EE5\u51B3\u5B9A\u76D1\u542C\u6B64\u7C7B\u53D1\u9001\u5E76\u4F7F\u7528\u6B64\u8272\u5F69\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u53EA\u6A21\u4EFF\u4E4B\u524D\u7684\u884C\u4E3A\uFF0C\u4F7F\u7528\u6B64\u8272\u5F69\u8BBE\u7F6E\u80CC\u666F\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u8BA9\u81EA\u5B9A\u4E49\u5BB9\u5668\u53D1\u9001\u989C\u8272\uFF0C\u9996\u5148\u9700\u8981\u521B\u5EFA\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u3002 \u8F6C\u81F3\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u201C\u5C5E\u6027\u201D\u9009\u9879\u5361\uFF0C\u6309\u4E0B\u201C\u89E6\u53D1\u6761\u4EF6\u201D\u7EC4\u4E2D\u7684\u201C+\u201D\u6309\u94AE (1)\u3002 \u5C06\u89E6\u53D1\u6761\u4EF6\u547D\u540D\u4E3A\u201CcolorChanged\u201D\uFF0C\u8F93\u5165\u8BF4\u660E\u201C\u8272\u5F69\u53D8\u5316\u201D\uFF0C\u5E76\u5C06\u7C7B\u578B\u8BBE\u7F6E\u4E3A\u201Ccolortype\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 78]],
    imageSource: "/img/tutorials/tutorial-05/adding-custom-trigger-to-custom-container-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5C06\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u5BB9\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u540E\uFF0C\u8F6C\u81F3\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u201C\u4EA4\u4E92\u201D\u9009\u9879\u5361\u5E76\u65B0\u5EFA\u4E00\u4E2A\u4EA4\u4E92\u3002 \u4F7F\u7528\u89E6\u53D1\u6761\u4EF6\u201C\u70B9\u51FB\u6309\u94AE\u201D\u548C\u64CD\u4F5C\u201C\u53D1\u9001colorChanged\u201D\u3002 \u73B0\u5728\u6211\u4EEC\u8981\u53D1\u9001\u968F\u673A\u8272\uFF0C\u5BF9\u503C\u5C5E\u6027\u4F7F\u7528\u4E0E\u4E4B\u524D\u76F8\u540C\u7684\u4EE3\u7801\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/emitting-color-changed-4-17.png",
    mdxType: "Figure"
  }, "\u53D1\u9001\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u7531\u4E8E\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E2D\u672A\u81EA\u52A8\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Color`), `\u547D\u540D\u7A7A\u95F4\uFF0C\u56E0\u6B64\u6700\u521D\u5E76\u4E0D\u8D77\u4F5C\u7528\u3002 \u4E0E\u4EE5\u524D\u4E00\u6837\uFF0C\u6211\u4EEC\u5C06\u4E3A\u81EA\u5B9A\u4E49\u5BB9\u5668\u63D0\u4F9B\u81EA\u5DF1\u7684include\u51FD\u6570\u3002 \u8F6C\u81F3\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u201C\u5C5E\u6027\u201D\u9009\u9879\u5361\uFF0C\u5728\u201CIncludes\u201D\u7EC4(1)\u4E0B\u9762\u8F93\u5165\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/Color.hpp>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 115]],
    imageSource: "/img/tutorials/tutorial-05/extra-includes-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u63D0\u4F9B\u989D\u5916\u7684includes\u51FD\u6570"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u6211\u4EEC\u8981\u7528\u65B0\u5EFA\u7684\u81EA\u5B9A\u4E49\u5BB9\u5668ColorEmitter\u66FF\u4EE3\u65E7\u6309\u94AE\u3002 \u9009\u62E9Screen1\u5E76\u5220\u9664\u8FD9\u91CC\u7684\u6309\u94AE\u3002 \u8FD9\u5E94\u5F53\u4F1A\u5728\u4F7F\u7528\u6B64\u6309\u94AE\u7684\u4EA4\u4E92\u4E2D\u751F\u6210\u57DF\u9519\u8BEF\uFF0C\u56E0\u6B64\u8FD8\u9700\u8981\u5220\u9664\u6B64\u4EA4\u4E92\uFF0C\u6211\u4EEC\u5C06\u4E3AColorEmitter\u521B\u5EFA\u65B0\u7684\u4EA4\u4E92\u3002 \u73B0\u5728\uFF0C\u5728Screen1\u4E0A\u63D2\u5165ColorEmitter\u5B9E\u4F8B\uFF0C\u7136\u540E\u5728Screen1\u4E0A\u65B0\u5EFA\u4E00\u4E2A\u4EA4\u4E92\u3002 \u5BF9\u4E8E\u89E6\u53D1\u6761\u4EF6\uFF0C\u60A8\u5E94\u5F53\u4F1A\u770B\u5230\u4E00\u4E2A\u540D\u4E3A\u201CColorEmitter colorChanged\u53D1\u751F\u201D\u7684\u9009\u9879\u3002 \u9009\u62E9\u8BE5\u9009\u9879\uFF0C\u5E76\u4E3A\u64CD\u4F5C\u9009\u62E9\u201C\u8C03\u7528Screen1 setBackgroundColor\u201D\u3002 \u73B0\u5728\uFF0C\u6211\u4EEC\u9700\u4F7F\u7528colorChanged\u53D1\u9001\u7684\u503C\uFF0C\u5176\u540D\u79F0\u59CB\u7EC8\u4E3A\u201Cvalue\u201D\uFF08\u5982\u4E0A\u6587\u6240\u8FF0\uFF09\u3002 \u56E0\u6B64\uFF0C\u5728\u503C\u5C5E\u6027\u4E2D\u8F93\u5165\u201Cvalue\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/emit-colorchanged-happens-interaction-4-17.png",
    mdxType: "Figure"
  }, "\u8BBE\u7F6E\u4EA4\u4E92\u4EE5\u76D1\u6D4BcolorChanged\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u8FD0\u884C\u6A21\u62DF\u5668\u5E76\u518D\u6B21\u5C1D\u8BD5\u6309\u4E0B\u6309\u94AE\u3002 \u5E94\u7528\u5E94\u663E\u793A\u76F8\u540C\u884C\u4E3A\uFF0C\u80CC\u666F\u53D8\u4E3A\u968F\u673A\u8272\u3002 \u73B0\u5728\uFF0C\u6211\u4EEC\u4E0D\u4EC5\u5728\u5C4F\u5E55\u4E0A\u5B9E\u73B0\u4E86\u6240\u6709\u529F\u80FD\uFF0C\u8FD8\u6210\u529F\u5730\u5728\u5C4F\u5E55\u4E0E\u5B83\u7684\u4E00\u4E9B\u8F83\u5C0F\u7684\u53EF\u590D\u7528\u7EC4\u4EF6\uFF08\u5373\u7B80\u5355\u7684ColorEmitter\uFF09\u4E4B\u95F4\u5EFA\u7ACB\u4E86\u901A\u4FE1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/random-color-result-final-4-17.png",
    mdxType: "Figure"
  }, "\u70B9\u51FB\u6309\u94AE\u65F6\u5F97\u5230\u7684\u968F\u673A\u8272"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);