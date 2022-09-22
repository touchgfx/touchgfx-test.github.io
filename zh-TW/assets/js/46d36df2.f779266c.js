"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1453],{

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

/***/ 37793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  viewBox: "0 0 12 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
}));
class Tip extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-tip)",
      header: "Tip",
      type: "tip",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Tip);


/***/ }),

/***/ 44662:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37793);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93054);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29415);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22425);
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
  id: "tutorial-02",
  title: "\u6559\u7A0B2\uFF1A\u5275\u5EFA\u60A8\u81EA\u5DF1\u7684\u61C9\u7528"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-02",
  "id": "tutorials/tutorial-02",
  "title": "\u6559\u7A0B2\uFF1A\u5275\u5EFA\u60A8\u81EA\u5DF1\u7684\u61C9\u7528",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-02.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-02",
  "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-02",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-02",
    "title": "\u6559\u7A0B2\uFF1A\u5275\u5EFA\u60A8\u81EA\u5DF1\u7684\u61C9\u7528"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6559\u7A0B1\uFF1A\u5617\u8A66\u4F7F\u7528\u7BC4\u4F8B",
    "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-01"
  },
  "next": {
    "title": "\u6559\u7A0B3\uFF1A\u591A\u500B\u87A2\u5E55\u7684\u61C9\u7528",
    "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-03"
  }
};
const assets = {};







const toc = [{
  value: "\u7B2C1\u6B65\uFF1A\u8A2D\u7F6E\u80CC\u666F\u5716\u50CF",
  id: "step-1-setting-a-background-image",
  level: 2
}, {
  value: "\u65B0\u5EFA\u4E00\u500B\u5C08\u6848",
  id: "starting-a-new-project",
  level: 3
}, {
  value: "\u63D2\u5165\u80CC\u666F",
  id: "inserting-a-background",
  level: 3
}, {
  value: "\u7B2C2\u6B65\uFF1A\u6DFB\u52A0\u6309\u9215",
  id: "step-2-adding-buttons",
  level: 2
}, {
  value: "\u6DFB\u52A0\u6309\u9215",
  id: "adding-the-buttons",
  level: 3
}, {
  value: "\u4FEE\u6539\u5916\u89C0",
  id: "changing-the-look",
  level: 3
}, {
  value: "\u7B2C3\u6B65\uFF1A\u6DFB\u52A0\u6587\u5B57",
  id: "step-3-adding-text",
  level: 2
}, {
  value: "\u6587\u5B57\u80CC\u666F",
  id: "text-background",
  level: 3
}, {
  value: "\u6DFB\u52A0\u6587\u5B57",
  id: "adding-the-text",
  level: 3
}, {
  value: "\u4FEE\u6539\u6587\u5B57\u5B57\u9AD4\u6392\u5370",
  id: "changing-the-text-typography",
  level: 3
}, {
  value: "\u4F7F\u7528\u842C\u7528\u5B57\u5143\u6587\u5B57",
  id: "using-a-wildcard-text",
  level: 3
}, {
  value: "\u7B2C4\u6B65\uFF1A\u6DFB\u52A0\u7A0B\u5F0F\u78BC",
  id: "step-4-adding-code",
  level: 2
}, {
  value: "\u5BE6\u73FE\u865B\u64EC\u51FD\u6578",
  id: "implementing-the-virtual-methods",
  level: 3
}, {
  value: "\u66F4\u65B0\u8A08\u6578\u5668\u503C",
  id: "updating-the-counter-value",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u8DDF\u96A8\u672C\u6559\u7A0B\u5B78\u7FD2TouchGFX\u7684\u66F4\u591A\u57FA\u672C\u77E5\u8B58\u3002 \u60A8\u5C07\u5B78\u7FD2\u5982\u4F55\u5C07\u5716\u50CF\u6DFB\u52A0\u5230\u61C9\u7528\u4EE5\u53CA\u5982\u4F55\u4F7F\u7528\u6309\u9215\u3002 \u60A8\u9084\u5C07\u5B78\u7FD2\u5982\u4F55\u4F7F\u7528\u6587\u5B57\u548C\u8A08\u7B97\u6578\u5B57\u3002 \u5728\u6700\u5F8C\u7684\u6B65\u9A5F\u4E2D\uFF0C\u60A8\u5C07\u7DE8\u5BEB\u7A0B\u5F0F\u78BC\uFF0C\u4EE5\u4FBF\u589E\u5F37\u4F7F\u7528TouchGFX Designer\u5275\u5EFA\u7684UI\u7684\u8996\u89BA\u6548\u679C\u3002 \u672C\u6559\u7A0B\u5047\u8A2D\u60A8\u6C92\u6709TouchGFX\u7684\u76F8\u95DC\u77E5\u8B58\uFF0C\u4F46\u662F\u6709\u4E00\u9EDE\u7A0B\u5F0F\u8A2D\u8A08\u7684\u7D93\u9A57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-1-setting-a-background-image"
  }), `\u7B2C1\u6B65\uFF1A\u8A2D\u7F6E\u80CC\u666F\u5716\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7B2C\u4E00\u500B\u6B65\u9A5F\u4E2D\uFF0C\u60A8\u5C07\u770B\u5230\u5982\u4F55\u63D2\u5165PNG\u5716\u50CF\u4F5C\u70BA\u80CC\u666F\u3002 \u4F46\u9996\u5148\u6211\u5011\u5C07\u65B0\u5EFA\u4E00\u500B\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "starting-a-new-project"
  }), `\u65B0\u5EFA\u4E00\u500B\u5C08\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\u555F\u52D5\u65B0\u5C08\u6848\u3002 \u6211\u5011\u5C07\u8A72\u5C08\u6848\u547D\u540D\u70BA\u201CMyApplication1\u201D\u3002 \u8A72\u5C08\u6848\u57FA\u65BC\u201CSTM32F746G\u63A2\u7D22\u5957\u4EF6\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6709\u5176\u4ED6STM32\u8A55\u4F30\u5957\u4EF6\uFF0C\u8ACB\u67E5\u770BTouchGFX Designer\u63D0\u4F9B\u7684\u652F\u63F4\u7684\u8A2D\u5099\u6E05\u55AE\u4E2D\u662F\u5426\u5305\u542B\u6B64\u5957\u4EF6\u3002 \u5982\u679C\u60A8\u6C92\u6709\u652F\u63F4\u7684\u958B\u767C\u677F\uFF0C\u53EF\u4EE5\u9078\u64C7\u201CSimulator\u201D\uFF0C\u4E26\u76F4\u63A5\u5728Windows\u96FB\u8166\u4E0A\u904B\u884C\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u6CE8\u610F\uFF0C\u672C\u6559\u7A0B\u5728\u89E3\u6790\u5EA6\u70BA480x272\u7684\u986F\u793A\u5668\u4E0A\u904B\u884C\u3002 \u5982\u679C\u60A8\u9078\u64C7\u5177\u6709\u5176\u4ED6\u89E3\u6790\u5EA6\u7684\u61C9\u7528\u7BC4\u672C\uFF0C\u5247\u5716\u5F62\u8207\u87A2\u5E55\u5C07\u4E0D\u5339\u914D\uFF0C\u5118\u7BA1\u5982\u6B64\uFF0C\u60A8\u4ECD\u61C9\u80FD\u5920\u5B8C\u6210\u672C\u6559\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/new-proj-4-17.png",
    mdxType: "Figure"
  }, "\u4F7F\u7528STM32F746\u65B0\u5EFA\u5C08\u6848"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6709\u4E00\u500B\u65B0\u5EFA\u7684\u7A7A\u767D\u5C08\u6848\uFF0C\u6211\u5011\u958B\u59CB\u4FEE\u6539\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u61C9\u7528\u5305\u542B\u8A31\u591A\u87A2\u5E55\u3002 \u87A2\u5E55\u5305\u542B\u8A31\u591A\u5C0F\u90E8\u4EF6\uFF0C\u5B83\u5011\u5171\u540C\u69CB\u6210\u4E86\u4F7F\u7528\u8005\u4ECB\u9762\u3002 \u87A2\u5E55\u8986\u84CB\u6574\u500B\u986F\u793A\u5668\uFF0C\u56E0\u6B64\u4E00\u6B21\u53EA\u80FD\u5411\u4F7F\u7528\u8005\u986F\u793A\u4E00\u500B\u87A2\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\u8981\u505A\u7684\u662F\u5C07\u521D\u59CB\u87A2\u5E55\u7684\u540D\u7A31\u4FEE\u6539\u70BA\u201CMain\u201D\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002 \u5728\u5DE6\u5074\u6E05\u55AE\u4E2D\u9078\u64C7\u8A72\u87A2\u5E55 (1)\uFF0C\u4E26\u5728\u53F3\u5074\u7684\u540D\u7A31\u6B04\u4F4D\u4E2D\u4FEE\u6539\u540D\u7A31 (2)\u3002 \u4E5F\u53EF\u901A\u904E\u6309\u5169\u4E0B\u6216\u6309\u53F3\u9375\u6E05\u55AE\u7684\u87A2\u5E55 (1) \u4F86\u91CD\u547D\u540D\u87A2\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[60, 13], [435, 10]],
    imageSource: "/img/tutorials/tutorial-02/change-name-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u4FEE\u6539\u87A2\u5E55\u540D\u7A31"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "inserting-a-background"
  }), `\u63D2\u5165\u80CC\u666F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528\u4E00\u500B\u6216\u591A\u500B\u5C0F\u90E8\u4EF6\u8986\u84CB\u87A2\u5E55\u7684\u6574\u500B\u80CC\u666F\u901A\u5E38\u662F\u500B\u4E0D\u932F\u7684\u9078\u64C7\u3002 \u4F8B\u5982\uFF0C\u53EF\u4EE5\u662F\u65B9\u584A\u6216\u5716\u50CF\u3002 \u5982\u679C\u4E0D\u8986\u84CB\uFF0C\u80CC\u666F\u5C07\u986F\u793A\u70BA\u9ED1\u8272\u3002 \u5728\u672C\u61C9\u7528\u4E2D\uFF0C\u6211\u5011\u5C07\u4F7F\u7528\u5716\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u9700\u8981\u532F\u5165\u6A94\u6848\uFF0C\u7136\u5F8C\u624D\u80FD\u5728TouchGFX Designer\u4E2D\u4F7F\u7528\u5716\u50CF\u3002 TouchGFX\u652F\u63F4BMP\u548CPNG\u5716\u50CF\uFF08\u5118\u7BA1TouchGFX Designer\u53EA\u652F\u63F4\u532F\u5165PNG\u5716\u50CF\uFF09\u3002 PNG\u6A94\u512A\u5148\u65BCBMP\u6A94\uFF0C\u539F\u56E0\u662F\u524D\u8005\u66F4\u5C0F\u4E14\u652F\u63F4\u900F\u660E\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6559\u7A0B\u5C07\u4F7F\u7528\u7684\u5716\u50CF\u53EF\u5F9E\u6B64`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(77460)/* ["default"] */ .Z)
  }, "\u9023\u7D50"), `\u4E0B\u8F09\u3002 \u5C07\u6A94\u6848\u89E3\u58D3\u7E2E\u5230\u786C\u789F\u4E0A\u7684\u76EE\u9304\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u60F3\u8981\u4F7F\u7528\u540D\u70BA\u201Cbackground.png\u201D\u7684\u6A94\u4F5C\u70BA\u80CC\u666F\u3002 \u70BA\u4E86\u532F\u5165\u8A72\u6587\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9078\u64C7\u201CImages \u201D\u9078\u9805\u5361\u4E26\u9EDE\u64CA\u201C+\u201D\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9078\u53D6\u5230\u89E3\u58D3\u7E2E\u6A94\u593E\u4E26\u9078\u64C7\u201Cbackground.png\u201D\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6309\u4E0B\u201C\u6253\u958B\u201D\u6309\u9215\u532F\u5165\u6A94\u6848\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u5C07\u6A94\u6848\u532F\u5165\u5C08\u6848\uFF0C\u60A8\u9084\u53EF\u4EE5\u5C07\u6A94\u6848\u700F\u89BD\u5668\u4E2D\u7684\u5716\u50CF\u62D6\u653E\u5230\u201C\u5716\u50CF\u201D\u9078\u9805\u5361\u4E0A\uFF0C\u751A\u81F3\u76F4\u63A5\u62D6\u653E\u5230\u756B\u5E03\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u6CE8\u610F\uFF0C\u5C0E\u5165\u5C08\u6848\u7684\u5716\u50CF\u6703\u88AB\u8F49\u63DB\u4E26\u7DE8\u8B6F\u5230\u5C08\u6848\u4E2D\uFF0C\u56E0\u6B64\u6703\u4F54\u7528\u5FEB\u9583\u8A18\u61B6\u9AD4\u7A7A\u9593\u3002 \u8ACB\u53EA\u532F\u5165\u9700\u8981\u7684\u5716\u50CF\u3002  \u70BA\u4E86\u6DFB\u52A0\u5716\u50CF\uFF0C\u9EDE\u64CA\u5DE6\u5074\u7684\u201CImages\u201D\u6309\u9215 (1)\uFF0C\u7136\u5F8C\u9EDE\u64CA\u53F3\u5074\u7684\u201C+\u201D\u6309\u9215 (2)\u3002 TouchGFX Designer\u6253\u958B\u666E\u901A\u7684\u6A94\u6848\u700F\u89BD\u5668\uFF0C\u5728\u9019\u88E1\u60A8\u53EF\u4EE5\u9078\u53D6\u5230\u4E0B\u8F09\u7684\u5716\u50CF\u4E26\u9078\u64C7\u201Cbackground.png\u201D\u6587\u4EF6\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[7, 18], [460, 4]],
    imageSource: "/img/tutorials/tutorial-02/image-import-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u5716\u50CFbackground.png\u88AB\u532F\u5165`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6211\u5011\u53EF\u4EE5\u5728\u61C9\u7528\u4E2D\u4F7F\u7528\u8A72\u5716\u50CF\u3002 \u70BA\u6B64\uFF0C\u6211\u5011\u9700\u8981\u4E00\u500B\u5716\u50CF\u5C0F\u90E8\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9EDE\u64CA\u5DE6\u5074\u7684\u201CCanvas\u201D\u6309\u9215 (1)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u5C0F\u90E8\u4EF6\u6E05\u55AE\u4E2D\u627E\u5230\u5716\u50CF\u5C0F\u90E8\u4EF6 (2)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9EDE\u64CA\u5B83\u5728\u87A2\u5E55\u4E0A\u63D2\u5165\u5716\u50CF\u5C0F\u90E8\u4EF6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u597D\u70BA\u5C0F\u90E8\u4EF6\u6539\u4E00\u500B\u6709\u610F\u7FA9\u7684\u540D\u7A31\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u5011\u4F7F\u7528\u201CbackgroundImage\u201D(3)\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[7, 2], [270, 18], [440, 10]],
    imageSource: "/img/tutorials/tutorial-02/insert-widget-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u63D2\u5165\u5716\u50CF\u5C0F\u90E8\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u63D2\u5165\u5C0F\u90E8\u4EF6\u5F8C\uFF0C\u901A\u5E38\u9700\u8981\u914D\u7F6E\u5B83\u7684\u4E00\u4E9B\u5C6C\u6027\uFF0C\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F4D\u7F6E`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u984F\u8272`), `\u3002 \u5728TouchGFX Designer\u4E2D\uFF0C\u6240\u9078\u5C0F\u90E8\u4EF6\u7684\u5C6C\u6027\u986F\u793A\u5728\u53F3\u5074\u3002 \u87A2\u5E55\u4E2D\u7684\u5C0F\u90E8\u4EF6\u986F\u793A\u5728\u5DE6\u5074\u7684\u6A39\u72C0\u6AA2\u8996\u4E2D (1)\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u5011\u5C0D\u9EDE 0,0 \u6240\u5728\u7684\u4F4D\u7F6E\u611F\u5230\u6EFF\u610F\uFF0C\u4F46\u60F3\u8981\u4FEE\u6539\u5716\u50CF\u5C6C\u6027\uFF0C\u4EE5\u4FBF\u9078\u64C7\u4E4B\u524D\u532F\u5165\u7684\u6A94\u6848\u201Cbackground.png\u201D\u3002 \u9EDE\u64CA\u5716\u50CF\u5C6C\u6027 (2) \u4E26\u9078\u64C7\u201Cbackground.png\u201D\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[55, 20], [435, 75]],
    imageSource: "/img/tutorials/tutorial-02/selecting-image-as-background-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u9078\u64C7\u532F\u5165\u7684\u5F71\u50CF\u6A94\u6848\u4F5C\u70BA\u80CC\u666F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6211\u5011\u5DF2\u7D93\u5275\u5EFA\u4E86\u4E00\u500B\u7C21\u55AE\u7684\u61C9\u7528\uFF0C\u5B83\u6709\u4E00\u500B\u5305\u542B\u4E00\u5F35\u8986\u84CB\u4E86\u6574\u500B\u4F7F\u7528\u8005\u87A2\u5E55\u7684\u80CC\u666F\u5716\u50CF\u7684\u87A2\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7E7C\u7E8C\u64CD\u4F5C\u524D\uFF0C\u5617\u8A66\u6309\u4E0B\u201CRun Simulator\u201D\u6309\u9215\uFF0C\u4EE5\u4FBF\u78BA\u8A8D\u5C08\u6848\u6B63\u5E38\u7DE8\u8B6F\u548C\u904B\u884C\u3002 \u7531\u65BC\u5C1A\u672A\u6DFB\u52A0\u4EFB\u4F55\u6D3B\u52D5\u7684\u5C0F\u90E8\u4EF6\uFF0C\u56E0\u6B64\u73FE\u5728\u9084\u4E0D\u80FD\u8207\u61C9\u7528\u901A\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-2-adding-buttons"
  }), `\u7B2C2\u6B65\uFF1A\u6DFB\u52A0\u6309\u9215`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u4E00\u6B65\u4E2D\uFF0C\u6211\u5011\u5C07\u70BA\u61C9\u7528\u6DFB\u52A0\u5169\u500B\u6309\u9215\uFF0C\u4E26\u7528\u4E0D\u540C\u7684PNG\u6A94\u7D66\u4E88\u5B83\u5011\u81EA\u8A02\u5916\u89C0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-buttons"
  }), `\u6DFB\u52A0\u6309\u9215`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u5C07\u6309\u9215\u6DFB\u52A0\u5230\u87A2\u5E55\uFF0C\u9EDE\u64CA\u201Cwidget\u201D\u9078\u9805\u5361\u4E0A\u7684\u6309\u9215\u5C0F\u90E8\u4EF6 (1)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7528\u6ED1\u9F20\u62D6\u66F3\u65B0\u7684\u5C0F\u90E8\u4EF6\u4EE5\u4FBF\u79FB\u52D5\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u6309\u9215\u5B9A\u4F4D\u5728\u4F4D\u7F6E (x=40, y=60) \u8655\u3002 \u6AA2\u67E5\u53F3\u5074\u5C6C\u6027\u4E2D\u7684\u4F4D\u7F6E (2)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u65B0\u7684\u5C0F\u90E8\u4EF6\u547D\u540D\u70BA\u201CbuttonUp\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u4F4D\u7F6E x=40, y=150 \u8655\u6DFB\u52A0\u53E6\u4E00\u500B\u6309\u9215\u3002 \u5C07\u6B64\u5C0F\u90E8\u4EF6\u547D\u540D\u70BA\u201CbuttonDown\u201D\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u5C08\u6848\u5982\u4E0B\u5716\u6240\u793A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[265, 18], [435, 25]],
    imageSource: "/img/tutorials/tutorial-02/adding-buttons-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u6DFB\u52A0\u5169\u500B\u6309\u9215"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u4F7F\u7528X\u548CY\u5C6C\u6027\u7684\u5411\u4E0A/\u5411\u4E0B\u5C0F\u6309\u9215\u5C0D\u5C0F\u90E8\u4EF6\u7684\u4F4D\u7F6E\u9032\u884C\u5FAE\u8ABF\u3002 \u60A8\u4E5F\u53EF\u4EE5\u9078\u4E2D\u6309\u9215\u5C0F\u90E8\u4EF6\uFF08\u5728\u756B\u5E03\u4E0A\u9EDE\u64CA\u5B83\uFF09\uFF0C\u7136\u5F8C\u7528\u9375\u76E4\u4E0A\u7684\u65B9\u5411\u9375\u8ABF\u6574\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "changing-the-look"
  }), `\u4FEE\u6539\u5916\u89C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6211\u5011\u5C07\u4FEE\u6539\u6309\u9215\u7684\u5916\u89C0\u3002 \u6309\u9215\u7531\u5169\u5E45\u5716\u50CF\u69CB\u6210\u3002 \u4E00\u5E45\u5716\u50CF\u5728\u6309\u9215\u88AB\u6309\u4E0B\u6642\u986F\u793A\uFF0C\u53E6\u4E00\u5E45\u5716\u50CF\u5728\u6309\u9215\u672A\u88AB\u6309\u4E0B\uFF08\u91CB\u653E\uFF09\u6642\u986F\u793A\u3002 \u5927\u591A\u6578\u5C0F\u90E8\u4EF6\u90FD\u9644\u5E36\u4E00\u7D44\u9810\u5B9A\u7FA9\u6A23\u5F0F\uFF0C\u5BE6\u969B\u4E0A\u662F\u63CF\u8FF0\u5C0F\u90E8\u4EF6\u5177\u9AD4\u5916\u89C0\u7684\u4E00\u7D44\u7279\u5B9A\u5C6C\u6027\u503C\u3002 \u9019\u4E9B\u6A23\u5F0F\u6709\u52A9\u65BC\u9032\u884C\u5FEB\u901F\u7684\u539F\u578B\u958B\u767C\uFF0C\u4F46\u5728\u5275\u5EFA\u5BE6\u969B\u61C9\u7528\u6642\uFF0C\u901A\u5E38\u6703\u5C07\u5B83\u5011\u66FF\u63DB\u6389\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u50CF\u4E0A\u4E00\u6B65\u4E00\u6A23\u8F49\u81F3\u201CImages\u201D\u9078\u9805\u5361\uFF0C\u4E26\u9EDE\u64CA\u53F3\u4E0A\u89D2\u7684\u201C+\u201D\u5716\u793A\u532F\u5165\u4E00\u4E9B\u5716\u50CF\u3002 \u6B64\u6B21\u5C0E\u5165\u56DB\u5F35\u5716\u50CF\uFF1A"button_down_pressed.png", "button_down_released.png", "button_up_pressed.png", and "button_up_released.png"\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/image-import-2-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u6DFB\u52A0\u56DB\u5F35\u6309\u9215\u5716\u50CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u770B\u5230\uFF0C\u96D6\u7136\u6211\u5011\u53EA\u532F\u5165\u4E865\u5F35\u5716\u50CF\uFF0C\u4F46\u5C08\u6848\u4E2D\u5171\u67097\u5F35\u5716\u50CF\u3002 \u53E6\u5916\u5169\u5F35\u662F\u6309\u9215\u4E0A\u9810\u8A2D\u4F7F\u7528\u7684\u85CD\u8272\u5716\u50CF\u3002 \u7576\u4E0D\u518D\u4F7F\u7528\u6642\uFF0C\u9019\u4E9B\u5716\u50CF\u6703\u88AB\u81EA\u52D5\u522A\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56DE\u5230\u756B\u5E03\u4E26\u9078\u64C7\u201CbuttonUp\u201D\u6309\u9215\u3002 \u9EDE\u64CA\u201CReleased Image\u201D\u5C6C\u6027 (1)\uFF0C\u7136\u5F8C\u9EDE\u64CA\u201CProject\u201D\u986F\u793A\u5716\u50CF (2)\uFF0C\u6700\u5F8C\u9078\u64C7\u6B63\u78BA\u7684\u5716\u50CF (3)\u3002 \u5C0D\u65BC\u201CbuttonUp\u201D\uFF0C\u70BA\u201C\u91CB\u653E\u5716\u50CF\u201D\u5C6C\u6027\u9078\u64C7\u201Cbutton_up_released.png\u201D\u3002 \u70BA\u201C\u6309\u4E0B\u5716\u50CF\u201D\u5C6C\u6027\u9078\u64C7\u201Cbutton_up_pressed.png\u201D\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[440, 75], [390, 90], [425, 124]],
    imageSource: "/img/tutorials/tutorial-02/button-selecting-up-image-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u8A2D\u7F6E\u6309\u9215\u5716\u50CF`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u7ACB\u5373\u770B\u5230TouchGFX Designer\u4E2D\u756B\u5E03\u4E0A\u6309\u9215\u7684\u5916\u89C0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/bitmap-for-button-4-17.png",
    mdxType: "Figure"
  }, "\u70BA\u6309\u9215\u8A2D\u7F6E\u9EDE\u9663\u5716"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u201CbuttonDown\u201D\uFF0C\u70BA\u91CB\u653E\u5716\u50CF\u9078\u64C7\u201Cbutton_down_released.png\u201D\uFF0C\u70BA\u6309\u4E0B\u5716\u50CF\u9078\u64C7\u201Cbutton_down_pressed.png\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u60A8\u5DF2\u5B8C\u6210\u6309\u9215\u7684\u8A2D\u7F6E\u3002 \u9EDE\u64CA\u201CRun Simulator\u201D\u5617\u8A66\u904B\u884C\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5617\u8A66\u4F7F\u7528\u5169\u500B\u6309\u9215\uFF0C\u4EE5\u4FBF\u78BA\u8A8D\u6309\u9215\u914D\u7F6E\u6B63\u78BA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-4-17.png",
    mdxType: "Figure"
  }, "\u904B\u884C\u6A21\u64EC\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX\u4E2D\u7684\u5927\u591A\u6578\u5C0F\u90E8\u4EF6\u4F7F\u7528\u5716\u50CF\u4F86\u5B9A\u7FA9\u5176\u5927\u5C0F\uFF0C\u9019\u610F\u5473\u8457\u7121\u6CD5\u76F4\u63A5\u8ABF\u6574\u5176\u5927\u5C0F\u3002 \u9019\u6A23\u505A\u662F\u51FA\u65BC\u6027\u80FD\u8003\u616E\uFF08\u53C3\u898B", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/general-ui-component-performance",
    mdxType: "Link"
  }, "\u201C\u4E00\u822CUI\u5143\u4EF6\u6027\u80FD\u201D"), "\uFF09\u3002 \u5982\u9700\u4FEE\u6539\u6B64\u985E\u5C0F\u90E8\u4EF6\u7684\u5927\u5C0F\uFF0C\u5982\u672C\u6559\u7A0B\u4E2D\u7684\u6309\u9215\uFF0C\u65B9\u6CD5\u662F\u70BA\u6309\u9215\u65B0\u5EFA\u4E00\u7D44\u5716\u50CF\u4E26\u5C07\u5B83\u5011\u5206\u5225\u7528\u4F5C\u201C\u91CB\u653E\u5716\u50CF\u201D\u548C\u201C\u6309\u4E0B\u5716\u50CF\u201D\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-3-adding-text"
  }), `\u7B2C3\u6B65\uFF1A\u6DFB\u52A0\u6587\u5B57`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u4E00\u6B65\u4E2D\uFF0C\u6211\u5011\u5C07\u70BA\u61C9\u7528\u6DFB\u52A0\u4E00\u500B\u5927\u5C3A\u5BF8\u7684TextArea\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6240\u6709\u6587\u5B57\u5747\u901A\u904ETextArea\u5DE5\u5177\u4F86\u986F\u793A\uFF0C\u4F46\u5728\u5C07TextArea\u6DFB\u52A0\u5230\u61C9\u7528\u4E4B\u524D\uFF0C\u6211\u5011\u5148\u6DFB\u52A0\u53E6\u4E00\u5F35\u5716\u50CF\uFF0C\u4EE5\u4FBF\u70BA\u6587\u5B57\u63D0\u4F9B\u4E00\u500B\u66F4\u597D\u7684\u80CC\u666F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "text-background"
  }), `\u6587\u5B57\u80CC\u666F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u532F\u5165\u53E6\u4E00\u500B\u5F71\u50CF\u6A94\u201Ccounter_box.png\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u63D2\u5165\u65B0\u7684\u5716\u50CF\u5C0F\u90E8\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u5176\u547D\u540D\u70BA\u201CtextBackground\u201D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u5176\u5B9A\u4F4D\u5728\u4F4D\u7F6E (x=250, y=59) \u8655\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5716\u50CF`), `\u5C6C\u6027\u8A2D\u7F6E\u70BA\u201Ccounter_box\u201D\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/add-background-for-text-4-17.png",
    mdxType: "Figure"
  }, "\u70BA\u6587\u5B57\u6DFB\u52A0\u4E86\u80CC\u666F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-text"
  }), `\u6DFB\u52A0\u6587\u5B57`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6211\u5011\u53EF\u4EE5\u6DFB\u52A0TextArea\u5C0F\u90E8\u4EF6\u3002 \u9EDE\u64CA\u201C\u5C0F\u90E8\u4EF6/\u5176\u4ED6\u201D\u4E0B\u62C9\u5F0F\u529F\u80FD\u8868\u4E2D\u7684TextArea\u5716\u793A\u3002 \u5C07\u5C0F\u90E8\u4EF6\u91CD\u547D\u540D\u70BA\u201CtextCounter\u201D\uFF0C\u4E26\u5C07\u5C0F\u90E8\u4EF6\u79FB\u52D5\u5230\u4F4D\u7F6E (x=250, y=90) \u8655\u3002 \u6211\u5011\u8981\u8B93\u5C0F\u90E8\u4EF6\u986F\u793A\u5927\u6587\u5B57\uFF0C\u56E0\u6B64\u53D6\u6D88\u9078\u4E2D `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Auto-size`), `\u5C6C\u6027\uFF0C\u4E26\u5C07\u5C3A\u5BF8\u8A2D\u7F6E\u70BA\u56FA\u5B9A\u5BEC\u5EA6=152\u548C\u9AD8\u5EA6=90\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/add-textarea-4-17.png",
    mdxType: "Figure"
  }, "\u6DFB\u52A0\u4E86TextArea"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\u5C0F\u90E8\u4EF6\u7684\u9ED8\u8A8D\u8272\u5F69\u662F\u9ED1\u8272\uFF0C\u5728\u80CC\u666F\u4E0A\u986F\u5F97\u5F88\u6697\u3002 \u9078\u64C7\u201CtextCounter\u201D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Color`), `\u5C6C\u6027\uFF0C\u5C07\u984F\u8272\u4FEE\u6539\u70BA\u767D\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/text-color-4-17.png",
    mdxType: "Figure"
  }, "\u4FEE\u6539\u6587\u5B57\u8272\u5F69"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "changing-the-text-typography"
  }), `\u4FEE\u6539\u6587\u5B57\u5B57\u9AD4\u6392\u5370`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u8981\u8B93\u6587\u5B57\u66F4\u5927\u3002 \u70BA\u6B64\uFF0C\u9700\u4FEE\u6539\u6587\u5B57\u4F7F\u7528\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u5B57\u9AD4\u6392\u5370\u201D`), `\u3002 \u5B57\u9AD4\u6392\u5370\u5B9A\u7FA9\u4E86\u6587\u5B57\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u5B57\u9AD4\u201D`), `\uFF08\u5982Verdana\uFF09\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u5C3A\u5BF8\u201D`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u5C0D\u9F4A\u201D`), `\uFF08\u5DE6\u3001\u53F3\u6216\u4E2D\u5FC3\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9078\u64C7TouchGFX Designer\u5DE6\u4E0A\u89D2\u7684\u201CTexts\u201D\u9078\u9805\u5361 (1)\uFF0C\u9EDE\u64CA\u201CTypographies\u201D(2)\uFF0C\u4E26\u5C07\u201CDefault\u201D\u5B57\u9AD4\u6392\u5370\u7684\u5927\u5C0F\u66F4\u65B0\u70BA80 (3)\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[6, 35], [80, 0], [80, 40]],
    imageSource: "/img/tutorials/tutorial-02/typography-size-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u4FEE\u6539\u6587\u5B57\u5927\u5C0F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56DE\u5230\u87A2\u5E55\uFF08\u9EDE\u64CA\u5DE6\u4E0A\u89D2\u7684\u201CCanvas\u201D\u9078\u9805\u5361\uFF09\uFF0C\u73FE\u5728\u6211\u5011\u53EF\u4EE5\u770B\u5230\u6587\u5B57\u5927\u4E86\u8A31\u591A\u3002 \u4E8B\u5BE6\u4E0A\uFF0C\u6211\u5011\u7121\u6CD5\u8B80\u53D6\u5B8C\u6574\u7684\u6587\u5B57\u201CNew Text\u201D\u3002 \u9EDE\u64CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Alignment`), `\u5C6C\u6027\u4E0B\u7684\u4E2D\u5FC3\u5C0D\u9F4A\u5716\u793A\u8B93\u6587\u5B57\u4E2D\u5FC3\u5C0D\u9F4A (1)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[460, 100]],
    imageSource: "/img/tutorials/tutorial-02/text-alignment-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u4FEE\u6539\u6587\u5B57\u5C0D\u9F4A\u65B9\u5F0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-a-wildcard-text"
  }), `\u4F7F\u7528\u842C\u7528\u5B57\u5143\u6587\u5B57`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u8981\u8B93TextArea\u986F\u793A\u4E00\u500B\u53EF\u4EE5\u7528\u6309\u9215\u4FEE\u6539\u7684\u6578\u5B57\u3002 \u70BA\u6B64\uFF0C\u6211\u5011\u5FC5\u9808\u4FEE\u6539\u6587\u5B57\uFF0C\u4EE5\u4FBF\u5305\u542B\u201C\u842C\u7528\u5B57\u5143\u201D\u3002 \u842C\u7528\u5B57\u5143\u662F\u6587\u5B57\u4E2D\u7684\u4E00\u7A2E\u6A19\u8A18\uFF08\u201C`, `<`, `d`, `>`, `\u201D\uFF09\uFF0C\u5728\u904B\u884C\u6642\u53EF\u4EE5\u7528\u5176\u4ED6\u4E00\u4E9B\u5B57\u5143\uFF08\u5982\u6578\u4F4D\uFF09\u4EE3\u66FF\u3002 \u6211\u5011\u53EA\u60F3\u986F\u793A\u4E00\u500B\u6578\u4F4D\uFF0C\u56E0\u6B64\u5C07\u6587\u5B57\u4FEE\u6539\u70BA\u7C21\u55AE\u7684\u201C`, `<`, `d`, `>`, `\u201D\u3002 \u5728\u5176\u4ED6\u5C08\u6848\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u5C07\u52D5\u614B\u90E8\u5206\u8207\u56FA\u5B9A\u6587\u5B57\u9032\u884C\u7D44\u5408\uFF0C\u5982\u201C\u6EAB\u5EA6\uFF1A`, `<`, `temp`, `>`, ` \xB0C"\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "<...> \u842C\u7528\u5B57\u5143\u62EC\u5F27\u5167\u7684\u6587\u5B57\u662F\u96A8\u610F\u7684\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528\u5B83\u5011\u5C07\u842C\u7528\u5B57\u5143\u4E2D\u63D2\u5165\u7684\u8CC7\u8A0A\u985E\u578B\u50B3\u905E\u7D66\u5BE6\u73FE\u5668\u6216\u7FFB\u8B6F\u5668\uFF0C\u6216\u8005\u4E5F\u53EF\u4EE5\u4FDD\u7559\u7A7A\u767D\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u6587\u5B57\u4FEE\u6539\u70BA\u201C`, `<`, `d`, `>`, `\u201D(1)\uFF0C\u9EDE\u64CA\u201CWildcard 1\u201D(2)\uFF0C\u5C07\u9810\u8A2D\u503C\u8A2D\u7F6E\u70BA\u201C0\u201D\uFF0C\u4E26\u9078\u4E2D\u201CUse wildcard buffer\u201D\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[460, 70], [470, 80]],
    imageSource: "/img/tutorials/tutorial-02/wildcard-text-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u914D\u7F6E\u842C\u7528\u5B57\u5143\u6587\u5B57`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u201CRun Simulator\u201D\u5617\u8A66\u904B\u884C\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-2.png",
    mdxType: "Figure"
  }, "\u904B\u884C\u6A21\u64EC\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u95DC\u65BC\u4F7F\u7528\u6587\u5B57\u548C\u5B57\u9AD4\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u8ACB\u95B1\u8B80", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\u201C\u6587\u5B57\u548C\u5B57\u9AD4\u201D"), "\u9801\u9762\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-4-adding-code"
  }), `\u7B2C4\u6B65\uFF1A\u6DFB\u52A0\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528TouchGFX Designer\u6642\uFF0C\u53EF\u8F15\u9B06\u5730\u901A\u904E\u4EA4\u4E92\u5C07\u64CD\u4F5C\u9023\u7D50\u5230\u6309\u9215\u3002 \u4EA4\u4E92\u5C07\u89F8\u767C\u689D\u4EF6\uFF08\u5982\u6309\u9215\u6309\u4E0B\uFF09\u9023\u7D50\u5230\u64CD\u4F5C\uFF08\u5982\u904B\u884C\u7A0B\u5F0F\u78BC\u6216\u79FB\u52D5\u5143\u7D20\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9078\u64C7\u53F3\u4E0A\u89D2\u7684\u201CInteractions \u201D\u9078\u9805\u5361 (1)\uFF0C\u9EDE\u64CA\u201C+\u201D\u6309\u9215\u65B0\u5EFA\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[480, 0]],
    imageSource: "/img/tutorials/tutorial-02/add-interactions-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u6DFB\u52A0\u4EA4\u4E92"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u5C07\u5275\u5EFA\u5169\u500B\u4EA4\u4E92\uFF0C\u6BCF\u500B\u6309\u9215\u4E00\u500B\u3002 \u6211\u5011\u5C07\u5169\u500B\u4EA4\u4E92\u90FD\u8A2D\u7F6E\u7528\u4F86\u5728\u7576\u524D\u87A2\u5E55\u4E0A\u547C\u53EBC++\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u201CTrigger\u201D`), `\u5C6C\u6027\u4FEE\u6539\u70BA\u201CButton is clicked\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u201CChoose clicked source\u201D`), `\u5C6C\u6027\u8A2D\u7F6E\u70BA\u201CbuttonUp\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u201CAction\u201D`), `\u5C6C\u6027\u4FEE\u6539\u70BA\u201C\u547C\u53EB\u65B0\u7684\u865B\u64EC\u51FD\u6578\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u201CFunction Name\u201D`), `\u6B04\u4F4D\u9375\u5165\u201CbuttonUpClicked\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u60A8\u9084\u61C9\u70BA\u4EA4\u4E92\u53D6\u4E00\u500B\u63CF\u8FF0\u6027\u7684\u540D\u7A31\uFF0C\u4EE5\u65B9\u4FBF\u65E5\u5F8C\u8B58\u5225\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/configure-interaction-4-17.png",
    mdxType: "Figure"
  }, "\u914D\u7F6E\u6309\u9215\u4EA4\u4E92"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528\u201CbuttonDown\u201D\u5275\u5EFA\u76F8\u4F3C\u4EA4\u4E92\u201Cclicked source\u201D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9EDE\u64CA\u201C+\u201D\u555F\u52D5\u65B0\u7684\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u201CTrigger\u201D`), `\u5C6C\u6027\u4FEE\u6539\u70BA\u201CButton is clicked\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Choose clicked source`), `\u5C6C\u6027\u8A2D\u7F6E\u70BA\u201CbuttonDown\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u201CAction\u201D`), `\u5C6C\u6027\u4FEE\u6539\u70BA\u201C\u547C\u53EB\u65B0\u7684\u865B\u64EC\u51FD\u6578\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C0D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Function Name`), `\uFF0C\u8F38\u5165"buttonDownClicked"\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u60A8\u9084\u61C9\u70BA\u4EA4\u4E92\u53D6\u4E00\u500B\u63CF\u8FF0\u6027\u7684\u540D\u7A31\uFF0C\u4EE5\u65B9\u4FBF\u65E5\u5F8C\u8B58\u5225\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u9EDE\u64CA\u201C\u751F\u6210\u7A0B\u5F0F\u78BC\u201D\u6309\u9215\u6216\u201C\u904B\u884C\u6A21\u64EC\u5668\u201D\u6309\u9215\uFF0CTouchGFX Designer\u5C07\u7528\u60A8\u5728\u525B\u5275\u5EFA\u7684\u4EA4\u4E92\u4E2D\u8F38\u5165\u7684\u8CC7\u8A0A\u66F4\u65B0\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u3002 \u9019\u610F\u5473\u8457\u5B83\u5C07\u5728View\u57FA\u985E\u4E2D\u70BA\u8A72\u87A2\u5E55\u5275\u5EFA\u5169\u500B\u65B0\u7684\u865B\u64EC\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u9032\u4E00\u6B65\u7814\u7A76\u8981\u5982\u4F55\u57F7\u884C\u81EA\u5DF1\u7684\u7A0B\u5F0F\u78BC\u3002 \u9EDE\u64CA\u53F3\u4E0B\u89D2\u7684\u201CGenerate Code\u201D\u6309\u9215\uFF0C\u7136\u5F8C\u9EDE\u64CA\u5DE6\u4E0B\u89D2\u7684\u201CFiles\u201D\u6309\u9215\u3002 \u6253\u958B\u7684\u6587\u4EF6\u700F\u89BD\u5668\u4E26\u9078\u5230\u5728\u61C9\u7528\u7A0B\u5F0F\u8CC7\u6599\u593E\u3002 \u9078\u53D6\u5230\u4EE5\u4E0B\u8CC7\u6599\u593E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/TouchGFX/generated/gui_generated/include/gui_generated/main_screen/`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E26\u6253\u958B\u6587\u4EF6MainViewBase.hpp\u3002 \u5982\u679C\u60A8\u9858\u610F\uFF0C\u9084\u53EF\u4EE5\u6253\u958B\u4E00\u500B\u5C08\u6848\u6A94\u6848\u4E26\u5728IDE\u4E2D\u627E\u5230\u8A72\u6A94\u6848\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `IDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C08\u6848\u6A94\u6848\u8DEF\u5F91`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MyApplication1/STM32CubeIDE/.project`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Visual Studio`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MyApplication1/TouchGFX/simulator/msvs/Application.sln`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `IAR Embedded Workbench 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MyApplication1/EWARM/Project.eww`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `KEIL uVision v5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MyApplication1/MDK-ARM/STM32F746G_DISCO.uvprojx`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4E26\u975E\u6240\u6709\u5C08\u6848\u6A94\u6848\u90FD\u9810\u8A2D\u986F\u793A\u3002 \u70BA\u4E86\u4FEE\u6539\u5C08\u6848\u7684\u5DE5\u5177\u93C8\uFF0C\u60A8\u9700\u8981\u4F7F\u7528STM32CubeMX\u5DE5\u5177\u3002 \u95DC\u65BC\u9019\u4E00\u9EDE\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u8ACB\u95B1\u8B80", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
    mdxType: "Link"
  }, "\u201C\u4F7F\u7528IDE\u548CTouchGFX\u201D"), "\u9801\u9762\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u7684\u865B\u64EC\u51FD\u6578\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainViewBase`), `\u985E\u7684\u516C\u958B\u90E8\u5206\u3002 \u751F\u6210\u7684\u65B9\u6CD5\u5177\u6709\u7A7A\u5BE6\u73FE\u3002 \u7528\u610F\u662F\u7A0B\u5F0F\u5E2B\u5728\u5B50\u985E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), `\u4E2D\u5BE6\u73FE\u9019\u4E9B\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainViewBase.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{24-27,29-32}",
    "{24-27,29-32}": true
  }), `/*********************************************************************************/
/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/
/*********************************************************************************/
#ifndef MAINVIEWBASE_HPP
#define MAINVIEWBASE_HPP

#include <gui/common/FrontendApplication.hpp>
#include <mvp/View.hpp>
#include <gui/main_screen/MainPresenter.hpp>
#include <touchgfx/widgets/Image.hpp>
#include <touchgfx/widgets/Button.hpp>
#include <touchgfx/widgets/TextAreaWithWildcard.hpp>

class MainViewBase : public touchgfx::View<MainPresenter>
{
public:
  MainViewBase();
  virtual ~MainViewBase() {}
  virtual void setupScreen();

   /*
    * Custom Action Handlers
    */
  virtual void buttonUpClicked()
  {
    // Override and implement this function in MainView
  }

  virtual void buttonDownClicked()
  {
    // Override and implement this function in MainView
  }
...

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "implementing-the-virtual-methods"
  }), `\u5BE6\u73FE\u865B\u64EC\u51FD\u6578`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u5269\u4E0B\u7684\u4EFB\u52D9\u662F\u5BE6\u73FE\u9019\u5169\u7A2E\u65B9\u6CD5\uFF0C\u4EE5\u4FBF\u5728\u4F7F\u7528\u8005\u6309\u4E0B\u6309\u9215\u6642\u4FEE\u6539\u8A08\u6578\u5668\u7684\u503C\u3002 \u70BA\u6B64\uFF0C\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), `\u985E\u4E2D\u518D\u6B21\u5BA3\u544A\u65B9\u6CD5\u3002 \u9019\u500B\u985E\u80FD\u5728\u4EE5\u4E0B\u8DEF\u5F91\u4E2D\u627E\u5230\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/TouchGFX/gui/include/gui/main_screen/MainView.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6253\u958B\u6B64\u6587\u4EF6\uFF0C\u4E26\u5728\u985E\u4E2D\u63D2\u5165\u5169\u500B\u51FD\u5F0F\u5BA3\u544A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14,15}",
    "{14,15}": true
  }), `#ifndef MAIN_VIEW_HPP
#define MAIN_VIEW_HPP

#include <gui_generated/main_screen/MainViewBase.hpp>
#include <gui/main_screen/MainPresenter.hpp>

class MainView : public MainViewBase
{
public:
  MainView();
  virtual ~MainView() {}
  virtual void setupScreen();
  virtual void tearDownScreen();
  virtual void buttonUpClicked();
  virtual void buttonDownClicked();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u4E00\u500B\u4EFB\u52D9\u662F\u5728.cpp\u6A94\u4E2D\u6DFB\u52A0\u5BE6\u73FE\uFF0C\u4EE5\u4FBF\u5BE6\u73FE\u5169\u7A2E\u65B9\u6CD5\u3002 \u6B64\u6A94\u7684\u4F4D\u7F6E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/gui/src/main_screen/MainView.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u9762\u7684\u5BE6\u73FE\u4E2D\uFF0C\u6211\u5011\u5C07\u547C\u53EB\u6DFB\u52A0\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_printf`), `\u3002 \u6B64\u51FD\u6578\u7528\u65BC\u5728\u904B\u884C\u6A21\u64EC\u5668\u6642\u5370\u51FA\u6587\u5B57\u3002 \u70BA\u4E86\u4F7F\u7528\u6B64\u51FD\u6578\uFF0C\u9700\u8981\u5305\u542B\u6A94\u6848utils.hpp\u3002 \u5728\u76EE\u6A19\u4E0A\u904B\u884C\u6642\uFF0C\u6587\u5B57\u884C\u7121\u6548\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,19-22,24-27}",
    "{2-2,19-22,24-27}": true
  }), `#include <gui/main_screen/MainView.hpp>
#include <touchgfx/utils.hpp>

MainView::MainView()
{

}

void MainView::setupScreen()
{
  MainViewBase::setupScreen();
}

void MainView::tearDownScreen()
{
  MainViewBase::tearDownScreen();
}

void MainView::buttonUpClicked()
{
  touchgfx_printf("buttonUpClicked\\n");
}

void MainView::buttonDownClicked()
{
  touchgfx_printf("buttonDownClicked\\n");
}

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\u518D\u6B21\u9EDE\u64CA\u201CRun Simulator\u201D\u904B\u884C\u65B0\u7A0B\u5F0F\u78BC\u3002 \u591A\u6B21\u9EDE\u64CA\u6309\u9215\uFF0C\u78BA\u8A8D\u4EA4\u4E92\u548C\u65B9\u6CD5\u7684\u904B\u4F5C\u7B26\u5408\u9810\u671F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-3-4-17.png",
    mdxType: "Figure"
  }, "\u904B\u884C\u6709\u5217\u5370\u8F38\u51FA\u7684\u6A21\u64EC\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "updating-the-counter-value"
  }), `\u66F4\u65B0\u8A08\u6578\u5668\u503C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u4E00\u500B\u4EFB\u52D9\u662F\u5728\u65B0\u65B9\u6CD5\u4E2D\u5BEB\u5165C++\u7A0B\u5F0F\u78BC\uFF0C\u4EE5\u4FBF\u5728\u4F7F\u7528\u8005\u6309\u4E0B\u6309\u9215\u6642\u66F4\u65B0\u8A08\u6578\u5668\u503C\u3002 \u70BA\u6B64\uFF0C\u6211\u5011\u9996\u5148\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), `\u985E\u4E2D\u6DFB\u52A0\u65B0\u7684\u6574\u6578\u8B8A\u6578`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `counter`), `\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{17}",
    "{17}": true
  }), `#ifndef MAIN_VIEW_HPP
#define MAIN_VIEW_HPP

#include <gui_generated/main_screen/MainViewBase.hpp>
#include <gui/main_screen/MainPresenter.hpp>

class MainView : public MainViewBase
{
public:
  MainView();
  virtual ~MainView() {}
  virtual void setupScreen();
  virtual void tearDownScreen();
  virtual void buttonUpClicked();
  virtual void buttonDownClicked();
protected:
  int counter;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonUpClicked`), `\u65B9\u6CD5\u4E2D\u4F7F\u8A08\u6578\u5668\u503C\u905E\u589E\uFF1A \u65B0\u7684\u503C\u96A8\u5F8C\u88AB\u8F49\u63DB\u70BA\u5B57\u4E32\u4E26\u8907\u88FD\u5230\u6211\u5011\u5728\u4E0A\u4E00\u6B65\u4E2D\u70BATextArea\u914D\u7F6E\u7684\u842C\u7528\u5B57\u5143\u7DE9\u885D\u5340\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{22-25,32-35}",
    "{22-25,32-35}": true
  }), `#include <gui/main_screen/MainView.hpp>

MainView::MainView()
{

}

void MainView::setupScreen()
{
  MainViewBase::setupScreen();
}

void MainView::tearDownScreen()
{
  MainViewBase::tearDownScreen();
}

void MainView::buttonUpClicked()
{
  touchgfx_printf("buttonUpClicked\\n");

  counter++;
  Unicode::snprintf(textCounterBuffer, TEXTCOUNTER_SIZE, "%d", counter);
  // Invalidate text area, which will result in it being redrawn in next tick.
  textCounter.invalidate();
}

void MainView::buttonDownClicked()
{
  touchgfx_printf("buttonDownClicked\\n");

  counter--;
  Unicode::snprintf(textCounterBuffer, TEXTCOUNTER_SIZE, "%d", counter);
  // Invalidate text area, which will result in it being redrawn in next tick.
  textCounter.invalidate();
}

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\u5C0F\u90E8\u4EF6\u4F7F\u7528Unicode\uFF0C\u56E0\u6B64\u6211\u5011\u5FC5\u9808\u4F7F\u7528\u652F\u63F4\u5BEB\u5165Unicode\u7DE9\u885D\u5340\u7684\u7279\u6B8Asnprintf\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u6CE8\u610F\uFF0C\u6211\u5011\u6703\u5728\u66F4\u65B0\u5F8C\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `textCounter`), `\u5C0F\u90E8\u4EF6\u4E0A\u547C\u53EB `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `invalidate()`), ` \u3002 \u5982\u6B64\u53EF\u78BA\u4FDD\u5728\u8A08\u6578\u5668\u503C\u66F4\u65B0\u5F8C\u91CD\u7E6ATextArea\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u61C9\u7528\u5B8C\u6210\u524D\uFF0C\u9084\u9700\u8981\u505A\u4E00\u4EF6\u4E8B\u3002 TouchGFX\u53EA\u5305\u542B\u9700\u8981\u7684\u5B57\u5143\uFF0C\u56E0\u6B64\u9700\u544A\u77E5TouchGFX Designer\u5728\u201CDefault\u201D\u5B57\u9AD4\u6392\u5370\u4E2D\u5305\u542B\u5B57\u51430-9\u3002 \u70BA\u6B64\uFF0C\u8FD4\u56DETouchGFX Designer\u4E26\u9EDE\u64CA\u201CTexts\u201D\u9078\u9805\u5361\uFF0C\u7136\u5F8C\u9EDE\u64CA\u201CTypographies\u201D\u9078\u9805\u5361\u3002 \u5728\u201CDefault \u201D\u5B57\u9AD4\u6392\u5370\u7684\u201CWildcard Ranges\u201D\u5217\u4E2D\u6DFB\u52A0\u7BC4\u570D\u201C0-9\u201D(1)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[190, 40]],
    imageSource: "/img/tutorials/tutorial-02/set-wildcard-range-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u70BA\u201CDefault \u201D\u5B57\u9AD4\u6392\u5370\u8A2D\u7F6E\u201CWildcard Range\u201D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u518D\u6B21\u9EDE\u64CA\u201CRun Simulator\u201D\uFF0C\u7136\u5F8C\u9EDE\u64CA\u5E7E\u6B21\u201C\u5411\u4E0A\u201D\u6309\u9215\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-4-4-17.png",
    mdxType: "Figure"
  }, "\u904B\u884C\u6A21\u64EC\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7A0B\u5F0F\u73FE\u5728\u9084\u4E0D\u80FD\u6B63\u78BA\u5730\u8655\u7406\u8CA0\u6578\u3002 \u70BA\u4E86\u89E3\u6C7A\u9019\u500B\u554F\u984C\uFF0C\u53EF\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonDownClicked()`), `\u51FD\u6578\u4E2D\u63D2\u5165guard\u4EE5\u78BA\u4FDD\u8A08\u6578\u5668\u503C\u4E0D\u6703\u5C0F\u65BC0\uFF0C\u6216\u8005\u5C07\u5B57\u5143\u201C-\u201D\u6DFB\u52A0\u5230\u4F7F\u7528\u7684\u5B57\u9AD4\u6392\u5370\u3002 \u70BA\u6B64\uFF0C\u53EA\u9700\u5728\u201CDefault\u201D\u5B57\u9AD4\u6392\u5370\u7684\u201CWildcard Characters\u201D\u5132\u5B58\u683C\u4E2D\u6DFB\u52A0\u8CA0\u865F\uFF08\u201C-\u201D\uFF09\u5373\u53EF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6559\u7A0B2\u5230\u6B64\u7D50\u675F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u95DC\u65BC\u6587\u5B57\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u8ACB\u95B1\u8B80", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\u201C\u6587\u5B57\u548C\u5B57\u9AD4\u201D"), "\u9801\u9762\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 77460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/touchgfx-tutorial-02-fdc5f18c6ee29e0a96fa608460f4d03a.zip");

/***/ })

}]);