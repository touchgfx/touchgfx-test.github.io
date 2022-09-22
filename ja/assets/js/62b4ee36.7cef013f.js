"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5834],{

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

/***/ 92632:
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
  title: "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB2: \u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-02",
  "id": "tutorials/tutorial-02",
  "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB2: \u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/tutorial-02.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-02",
  "permalink": "/4.20/ja/docs/tutorials/tutorial-02",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-02",
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB2: \u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB1: \u30B5\u30F3\u30D7\u30EB\u3092\u8A66\u3059",
    "permalink": "/4.20/ja/docs/tutorials/tutorial-01"
  },
  "next": {
    "title": "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB3: \u8907\u6570\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3",
    "permalink": "/4.20/ja/docs/tutorials/tutorial-03"
  }
};
const assets = {};







const toc = [{
  value: "\u30B9\u30C6\u30C3\u30D71: \u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u306E\u8A2D\u5B9A",
  id: "step-1-setting-a-background-image",
  level: 2
}, {
  value: "\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB",
  id: "starting-a-new-project",
  level: 3
}, {
  value: "\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u633F\u5165",
  id: "inserting-a-background",
  level: 3
}, {
  value: "\u30B9\u30C6\u30C3\u30D72: \u30DC\u30BF\u30F3\u306E\u8FFD\u52A0",
  id: "step-2-adding-buttons",
  level: 2
}, {
  value: "\u30DC\u30BF\u30F3\u306E\u8FFD\u52A0",
  id: "adding-the-buttons",
  level: 3
}, {
  value: "\u5916\u89B3\u306E\u5909\u66F4",
  id: "changing-the-look",
  level: 3
}, {
  value: "\u30B9\u30C6\u30C3\u30D73: \u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0",
  id: "step-3-adding-text",
  level: 2
}, {
  value: "\u30C6\u30AD\u30B9\u30C8\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9",
  id: "text-background",
  level: 3
}, {
  value: "\u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0",
  id: "adding-the-text",
  level: 3
}, {
  value: "\u30C6\u30AD\u30B9\u30C8\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u5909\u66F4",
  id: "changing-the-text-typography",
  level: 3
}, {
  value: "\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\uFF65\u30C6\u30AD\u30B9\u30C8\u306E\u4F7F\u7528",
  id: "using-a-wildcard-text",
  level: 3
}, {
  value: "\u30B9\u30C6\u30C3\u30D74: \u30B3\u30FC\u30C9\u306E\u8FFD\u52A0",
  id: "step-4-adding-code",
  level: 2
}, {
  value: "\u4EEE\u60F3\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u88C5",
  id: "implementing-the-virtual-methods",
  level: 3
}, {
  value: "\u30AB\u30A6\u30F3\u30BF\u306E\u5024\u306E\u66F4\u65B0",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306F\u3001TouchGFX\u306E\u57FA\u672C\u306B\u3064\u3044\u3066\u3055\u3089\u306B\u8A73\u3057\u304F\u5B66\u3073\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u753B\u50CF\u3092\u8FFD\u52A0\u3057\u3066\u3001\u30DC\u30BF\u30F3\u3092\u4F7F\u7528\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u5B66\u7FD2\u3057\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u3084\u8A08\u7B97\u3055\u308C\u305F\u6570\u5024\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u3082\u5B66\u3073\u307E\u3059\u3002 \u6700\u7D42\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001TouchGFX Designer\u3067\u4F5C\u6210\u3057\u305FUI\u306E\u898B\u6804\u3048\u3092\u3088\u304F\u3059\u308B\u305F\u3081\u306E\u3001\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u306FTouchGFX\u306E\u77E5\u8B58\u306F\u524D\u63D0\u3068\u3057\u3066\u3044\u307E\u305B\u3093\u304C\u3001\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u7D4C\u9A13\u304C\u5C11\u3057\u3042\u308B\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-1-setting-a-background-image"
  }), `\u30B9\u30C6\u30C3\u30D71: \u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u521D\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001PNG\u753B\u50CF\u3092\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3068\u3057\u3066\u633F\u5165\u3059\u308B\u65B9\u6CD5\u3092\u5B66\u3073\u307E\u3059\u3002 \u307E\u305A\u306F\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "starting-a-new-project"
  }), `\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u59CB\u3057\u307E\u3059\u3002 "MyApplication1"\u3068\u3044\u3046\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F"STM32F746G Discovery Kit"\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5225\u306ESTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u5148\u3078\u9032\u307F\u3001TouchGFX Designer\u306B\u8868\u793A\u3055\u308C\u308B\u30EA\u30B9\u30C8\u3092\u898B\u3066\u3001\u4F7F\u7528\u3057\u3066\u3044\u308B\u30AD\u30C3\u30C8\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u305F\u30DC\u30FC\u30C9\u3092\u6301\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001"Simulator"\u3092\u9078\u629E\u3057\u3001Windows\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u4E0A\u3067\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u306F\u3001\u89E3\u50CF\u5EA6480 x 272\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u5B9F\u884C\u3055\u308C\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u5225\u306E\u89E3\u50CF\u5EA6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u9078\u629E\u3057\u305F\u5834\u5408\u306F\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u304C\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u9069\u5408\u3057\u307E\u305B\u3093\u304C\u3001\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u306F\u5B8C\u4E86\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/new-proj-4-17.png",
    mdxType: "Figure"
  }, "STM32F746\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7A7A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u65B0\u3057\u304F\u4F5C\u6210\u3055\u308C\u305F\u306E\u3067\u3001\u6B21\u306F\u5909\u66F4\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u591A\u6570\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u306F\u591A\u6570\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u542B\u307E\u308C\u3001\u305D\u308C\u3089\u304C\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3092\u5F62\u6210\u3057\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u5168\u4F53\u3092\u30AB\u30D0\u30FC\u3059\u308B\u306E\u3067\u3001\u30E6\u30FC\u30B6\u306B\u306F\u4E00\u5EA6\u306B1\u3064\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u307F\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u521D\u306B\u884C\u3046\u306E\u306F\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u6700\u521D\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u540D\u524D\u3092"Main"\u306B\u5909\u66F4\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u5DE6\u306E\u30EA\u30B9\u30C8\u3067\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u9078\u629E\u3057\uFF081\uFF09\u3001\u53F3\u5074\u306E\u540D\u524D\u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059\uFF082\uFF09\u3002 \u30EA\u30B9\u30C8\u5185\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\uFF081\uFF09\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u307E\u305F\u306F\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u540D\u524D\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[60, 13], [435, 10]],
    imageSource: "/img/tutorials/tutorial-02/change-name-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u540D\u524D\u3092\u5909\u66F4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "inserting-a-background"
  }), `\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u633F\u5165`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u30921\u3064\u4EE5\u4E0A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3001\u5B8C\u5168\u306B\u30AB\u30D0\u30FC\u3059\u308B\u3068\u826F\u3044\u3067\u3057\u3087\u3046\u3002 \u305F\u3068\u3048\u3070\u3001\u30DC\u30C3\u30AF\u30B9\u3084\u753B\u50CF\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30AB\u30D0\u30FC\u3059\u308B\u3082\u306E\u304C\u306A\u3051\u308C\u3070\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306F\u9ED2\u8272\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u30011\u3064\u306E\u753B\u50CF\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u753B\u50CF\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u307E\u305A\u305D\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX\u306FBMP\u753B\u50CF\u3068PNG\u753B\u50CF\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\uFF08\u305F\u3060\u3057TouchGFX Designer\u3067\u306FPNG\u753B\u50CF\u306E\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u304B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\uFF09\u3002 PNG\u30D5\u30A1\u30A4\u30EB\u306E\u65B9\u304C\u3001\u30B5\u30A4\u30BA\u304C\u5C0F\u3055\u304F\u3001\u900F\u660E\u306A\u30D4\u30AF\u30BB\u30EB\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u306E\u3067\u3001BMP\u30D5\u30A1\u30A4\u30EB\u3088\u308A\u3082\u63A8\u5968\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u4F7F\u7528\u3059\u308B\u753B\u50CF\u306F\u3001\u3053\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(77460)/* ["default"] */ .Z)
  }, "\u30EA\u30F3\u30AF"), `\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3067\u304D\u307E\u3059\u3002 \u3054\u4F7F\u7528\u306E\u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u51CD\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001"background.png"\u3068\u3044\u3046\u540D\u524D\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3068\u3057\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u624B\u9806\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Images\u30BF\u30D6\u3092\u9078\u629E\u3057\u3001"+"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u89E3\u51CD\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u306B\u79FB\u52D5\u3057\u3066\u3001"background.png"\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `open\u3092\u62BC\u3057\u3066\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u3092\u30D5\u30A1\u30A4\u30EB\uFF65\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u304B\u3089Images\u30BF\u30D6\u306B\u3001\u3042\u308B\u3044\u306F\u76F4\u63A5\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u306B\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u305F\u753B\u50CF\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u5909\u63DB\u304A\u3088\u3073\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u308B\u305F\u3081\u3001Flash\u306E\u9818\u57DF\u304C\u5360\u6709\u3055\u308C\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u5FC5\u8981\u306A\u753B\u50CF\u306E\u307F\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002  \u5DE6\u5074\u306E"Images"\u30DC\u30BF\u30F3\uFF081\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u6B21\u306B\u53F3\u5074\u306E"+"\u30DC\u30BF\u30F3\uFF082\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u753B\u50CF\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002 TouchGFX Designer\u306B\u3088\u3063\u3066\u901A\u5E38\u306E\u30D5\u30A1\u30A4\u30EB\uFF65\u30D6\u30E9\u30A6\u30B6\u304C\u958B\u304F\u306E\u3067\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F\u753B\u50CF\u306B\u79FB\u52D5\u3057\u3066\u3001"background.png"\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[7, 18], [460, 4]],
    imageSource: "/img/tutorials/tutorial-02/image-import-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u753B\u50CFbackground.png\u304C\u30A4\u30F3\u30DD\u30FC\u30C8\u3055\u308C\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u753B\u50CF\u3092\u4F7F\u7528\u3059\u308B\u6E96\u5099\u304C\u3067\u304D\u307E\u3057\u305F\u3002 \u753B\u50CF\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001Image\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5DE6\u5074\u306ECanvas\u30DC\u30BF\u30F3\uFF081\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30EA\u30B9\u30C8\u3067Image\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF082\uFF09\u3092\u898B\u3064\u3051\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u308C\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306BImage\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u633F\u5165\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u540D\u524D\u3092\u610F\u5473\u306E\u308F\u304B\u308B\u3082\u306E\u306B\u5909\u66F4\u3059\u308B\u3068\u826F\u3044\u3067\u3057\u3087\u3046\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001"backgroundImage"\uFF083\uFF09\u306A\u3069\u304C\u8003\u3048\u3089\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[7, 2], [270, 18], [440, 10]],
    imageSource: "/img/tutorials/tutorial-02/insert-widget-4-17.png",
    mdxType: "FigureWithPoints"
  }, `Image\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u633F\u5165`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u633F\u5165\u5F8C\u3001\u901A\u5E38\u306F\u3001\u4F4D\u7F6E\u3084\u8272\u3068\u3044\u3063\u305F\u3044\u304F\u3064\u304B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u9078\u629E\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001TouchGFX Designer\u306E\u53F3\u5074\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u5185\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u5DE6\u5074\u306B\u30C4\u30EA\u30FC\u8868\u793A\u3055\u308C\u307E\u3059\uFF081\uFF09\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001\u30DD\u30A4\u30F3\u30C8\uFF080,0\uFF09\u306E\u4F4D\u7F6E\u306F\u305D\u306E\u307E\u307E\u3067\u554F\u984C\u3042\u308A\u307E\u305B\u3093\u304C\u3001Image\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5909\u66F4\u3057\u3066\u3001\u524D\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u305F"background.png"\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 Image\u30D7\u30ED\u30D1\u30C6\u30A3\uFF082\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001"background.png"\u3092\u9078\u629E\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[55, 20], [435, 75]],
    imageSource: "/img/tutorials/tutorial-02/selecting-image-as-background-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u305F\u753B\u50CF\u3092\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306B\u9078\u629E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u30011\u3064\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u3088\u308B\u3001\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u5168\u4F53\u3092\u30AB\u30D0\u30FC\u3059\u308B\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u306E\u307F\u3067\u69CB\u6210\u3055\u308C\u305F\u3001\u5358\u7D14\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5148\u306B\u9032\u3080\u524D\u306B\u3001"Run Simulator"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u5B9F\u884C\u3092\u78BA\u8A8D\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002 \u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u307E\u3060\u4F55\u3082\u8FFD\u52A0\u3057\u3066\u3044\u306A\u3044\u306E\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u5BFE\u8A71\u3059\u308B\u3053\u3068\u306F\u307E\u3060\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-2-adding-buttons"
  }), `\u30B9\u30C6\u30C3\u30D72: \u30DC\u30BF\u30F3\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B2\u3064\u306E\u30DC\u30BF\u30F3\u3092\u8FFD\u52A0\u3057\u3001\u7570\u306A\u308BPNG\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u3066\u305D\u306E\u30DC\u30BF\u30F3\u306E\u5916\u89B3\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-buttons"
  }), `\u30DC\u30BF\u30F3\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Widgets\u30BF\u30D6\uFF081\uFF09\u3067Button\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30DC\u30BF\u30F3\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u306E\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u3001\u30DE\u30A6\u30B9\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `x=40, y=60\u306E\u4F4D\u7F6E\u306B\u30DC\u30BF\u30F3\u3092\u914D\u7F6E\u3057\u307E\u3059\u3002 \u53F3\u5074\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\uFF082\uFF09\u3067\u4F4D\u7F6E\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B"buttonUp"\u3068\u3044\u3046\u540D\u524D\u3092\u4ED8\u3051\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `x=40, y=150\u306E\u4F4D\u7F6E\u306B\u5225\u306E\u30DC\u30BF\u30F3\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u3053\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u306F"buttonDown"\u3068\u3044\u3046\u540D\u524D\u3092\u4ED8\u3051\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u6B21\u306E\u3088\u3046\u306A\u5916\u89B3\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[265, 18], [435, 25]],
    imageSource: "/img/tutorials/tutorial-02/adding-buttons-4-17.png",
    mdxType: "FigureWithPoints"
  }, "2\u3064\u306E\u30DC\u30BF\u30F3\u3092\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `X\u304A\u3088\u3073Y\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u5C0F\u3055\u306A\u4E0A\u4E0B\u30DC\u30BF\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F4D\u7F6E\u3092\u5FAE\u8ABF\u6574\u3067\u304D\u307E\u3059\u3002 \u307E\u305F\u3001\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u30AF\u30EA\u30C3\u30AF\u3057\u3066\uFF09\u30DC\u30BF\u30F3\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u9078\u629E\u3057\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u77E2\u5370\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u3066\u4F4D\u7F6E\u3092\u8ABF\u6574\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "changing-the-look"
  }), `\u5916\u89B3\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30DC\u30BF\u30F3\u306E\u5916\u89B3\u3092\u5909\u66F4\u3057\u307E\u3059\u3002 \u30DC\u30BF\u30F3\u306F2\u3064\u306E\u753B\u50CF\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002 1\u3064\u306E\u753B\u50CF\u306F\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u3068\u304D\u306B\u8868\u793A\u3055\u308C\u3001\u3082\u30461\u3064\u306E\u753B\u50CF\u306F\u3001\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u3066\u3044\u306A\u3044\u3068\u304D\uFF08\u89E3\u653E\u3055\u308C\u3066\u3044\u308B\u3068\u304D\uFF09\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u5927\u90E8\u5206\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u306F\u3001\u4E8B\u524D\u5B9A\u7FA9\u3055\u308C\u305F\u4E00\u9023\u306E\u30B9\u30BF\u30A4\u30EB\u306E\u30BB\u30C3\u30C8\u304C\u4ED8\u968F\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306F\u57FA\u672C\u7684\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u7279\u5B9A\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u5024\u306E\u30BB\u30C3\u30C8\u3067\u3001\u7279\u5B9A\u306E\u5916\u89B3\u3092\u793A\u3059\u3082\u306E\u3067\u3059\u3002 \u3053\u308C\u3089\u306E\u30B9\u30BF\u30A4\u30EB\u306F\u3001\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u3059\u3070\u3084\u304F\u4F5C\u6210\u3059\u308B\u306E\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u304C\u3001\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001\u5B9F\u969B\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u969B\u306B\u306F\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u524D\u306E\u30B9\u30C6\u30C3\u30D7\u3068\u540C\u69D8\u306BImages\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001\u53F3\u4E0A\u9685\u306E "plus" \uFF08+\uFF09\u30A2\u30A4\u30B3\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u3044\u304F\u3064\u304B\u753B\u50CF\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 \u4ECA\u56DE\u306F\u3001"button_down_pressed.png"\u3001"button_down_released.png"\u3001"button_up_pressed.png"\u3001"button_up_released.png"\u3068\u3044\u30464\u3064\u306E\u753B\u50CF\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/image-import-2-4-17.png",
    mdxType: "FigureWithPoints"
  }, "4\u3064\u306E\u30DC\u30BF\u30F3\u306E\u753B\u50CF\u3092\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `5\u3064\u306E\u753B\u50CF\u3057\u304B\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u3066\u3044\u306A\u3044\u306E\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u5408\u8A08\u30677\u3064\u753B\u50CF\u304C\u3042\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002 \u4F59\u5206\u306E2\u3064\u306E\u753B\u50CF\u306F\u3001\u30DC\u30BF\u30F3\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u4F7F\u7528\u3055\u308C\u305F\u9752\u8272\u306E\u753B\u50CF\u3067\u3059\u3002 \u3053\u308C\u4EE5\u4E0A\u4F7F\u7528\u3055\u308C\u306A\u3044\u5834\u5408\u3001\u3053\u308C\u3089\u306F\u81EA\u52D5\u7684\u306B\u524A\u9664\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u623B\u308A\u3001"buttonUp"\u30DC\u30BF\u30F3\u3092\u9078\u629E\u3057\u307E\u3059\u3002 "Released Image"\u30D7\u30ED\u30D1\u30C6\u30A3\uFF081\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u3055\u3089\u306B"Project to show your images"\uFF082\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u6700\u7D42\u7684\u306B\u6B63\u3057\u3044\u753B\u50CF\uFF083\uFF09\u3092\u9078\u629E\u3057\u307E\u3059\u3002 "buttonUp"\u306B\u5BFE\u3057\u3066\u306F\u3001Released Image\u30D7\u30ED\u30D1\u30C6\u30A3\u3067"button_up_released.png"\u3092\u9078\u629E\u3057\u307E\u3059\u3002 Pressed Image\u306B\u306F\u3001"button_up_pressed.png"\u3092\u9078\u629E\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[440, 75], [390, 90], [425, 124]],
    imageSource: "/img/tutorials/tutorial-02/button-selecting-up-image-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u30DC\u30BF\u30F3\u306E\u753B\u50CF\u306E\u8A2D\u5B9A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DC\u30BF\u30F3\u306E\u5916\u89B3\u306F\u3001TouchGFX Designer\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u3059\u3050\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/bitmap-for-button-4-17.png",
    mdxType: "Figure"
  }, "\u30DC\u30BF\u30F3\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"buttonDown"\u306B\u5BFE\u3057\u3066\u306F\u3001Released Image\u306B"button_down_released.png"\u3001Pressed Image\u306B"button_down_pressed.png"\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u30DC\u30BF\u30F3\u306E\u8A2D\u5B9A\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002 "Run Simulator"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8A66\u3057\u3066\u307F\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E21\u65B9\u306E\u30DC\u30BF\u30F3\u3092\u8A66\u3057\u3066\u307F\u3066\u3001\u30DC\u30BF\u30F3\u304C\u6B63\u3057\u304F\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-4-17.png",
    mdxType: "Figure"
  }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX\u306E\u5927\u90E8\u5206\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u753B\u50CF\u3092\u4F7F\u7528\u3057\u3066\u30B5\u30A4\u30BA\u3092\u6C7A\u3081\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u76F4\u63A5\u30B5\u30A4\u30BA\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u3053\u308C\u306F\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u4E0A\u306E\u7406\u7531\u306B\u3088\u308B\u3082\u306E\u3067\u3059\uFF08\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/general-ui-component-performance",
    mdxType: "Link"
  }, "\u4E00\u822C\u7684\u306AUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9"), "\u300D\u3092\u53C2\u7167\uFF09\u3002 \u3053\u3046\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u305F\u3068\u3048\u3070\u3053\u306E\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u306E\u30DC\u30BF\u30F3\u3067\u3042\u308C\u3070\u3001\u30DC\u30BF\u30F3\u306E\u753B\u50CF\u306E\u65B0\u3057\u3044\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3057\u3001\u305D\u308C\u3092Released Image\u304A\u3088\u3073Pressed Image\u3068\u3057\u3066\u4EE3\u308F\u308A\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-3-adding-text"
  }), `\u30B9\u30C6\u30C3\u30D73: \u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u5927\u304D\u306ATextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3059\u3079\u3066\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u3001TextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306BTextArea\u3092\u8FFD\u52A0\u3059\u308B\u524D\u306B\u3001\u30C6\u30AD\u30B9\u30C8\u306B\u9069\u3057\u305F\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u3092\u63D0\u4F9B\u3059\u308B\u305F\u3081\u306B\u5225\u306E\u753B\u50CF\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "text-background"
  }), `\u30C6\u30AD\u30B9\u30C8\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5225\u306E\u753B\u50CF\u30D5\u30A1\u30A4\u30EB"counter_box.png"\u3092\u3001\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044Image\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u3001\u633F\u5165\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u305D\u308C\u306B"textBackground"\u3068\u3044\u3046\u540D\u524D\u3092\u4ED8\u3051\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `x=250, y=59\u306E\u4F4D\u7F6E\u306B\u3001\u3053\u308C\u3092\u914D\u7F6E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Image\u30D7\u30ED\u30D1\u30C6\u30A3\u3092"counter_box"\u306B\u3001\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/add-background-for-text-4-17.png",
    mdxType: "Figure"
  }, "\u30C6\u30AD\u30B9\u30C8\u7528\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-text"
  }), `\u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u6E96\u5099\u304C\u3067\u304D\u307E\u3057\u305F\u3002 Widgets / Miscellaneous\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\uFF65\u30E1\u30CB\u30E5\u30FC\u3067\u3001TextArea\u30A2\u30A4\u30B3\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u540D\u524D\u3092"textCounter"\u306B\u5909\u66F4\u3057\u3001\u3053\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092x=250, y=90\u306E\u4F4D\u7F6E\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u5927\u304D\u306A\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u793A\u3055\u305B\u305F\u3044\u306E\u3067\u3001**Auto-size\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30AA\u30D5\u306B\u3057\u3066\u3001\u5E45152\u3001\u9AD8\u305590\u306E\u56FA\u5B9A\u30B5\u30A4\u30BA\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/add-textarea-4-17.png",
    mdxType: "Figure"
  }, "TextArea\u3092\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u8272\u306F\u9ED2\u8272\u3067\u3042\u308A\u3001\u3053\u3053\u3067\u4F7F\u7528\u3059\u308B\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u4E0A\u3067\u306F\u6FC3\u3059\u304E\u307E\u3059\u3002 "textCounter"\u306E**Color\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u9078\u629E\u3057\u3066\u3001\u767D\u8272\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/text-color-4-17.png",
    mdxType: "Figure"
  }, "\u30C6\u30AD\u30B9\u30C8\u306E\u8272\u306E\u5909\u66F4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "changing-the-text-typography"
  }), `\u30C6\u30AD\u30B9\u30C8\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u5927\u304D\u304F\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306B\u4F7F\u7528\u3055\u308C\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3`), `\u3092\u5909\u66F4\u3057\u307E\u3059\u3002 \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u30D5\u30A9\u30F3\u30C8\uFF08Verdana\u306A\u3069\uFF09\u3001\u30B5\u30A4\u30BA\u3001\u914D\u7F6E\uFF08\u5DE6\u3001\u53F3\u3001\u307E\u305F\u306F\u4E2D\u592E\uFF09\u3092\u5B9A\u7FA9\u3059\u308B\u3082\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306E\u5DE6\u4E0A\u306ETexts\u30BF\u30D6\uFF081\uFF09\u3092\u9078\u629E\u3057\u3001Typographies\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\uFF082\uFF09\u3001"Default"\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u30B5\u30A4\u30BA\u309280\u306B\u66F4\u65B0\u3057\u307E\u3059\uFF083\uFF09\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[6, 35], [80, 0], [80, 40]],
    imageSource: "/img/tutorials/tutorial-02/typography-size-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B5\u30A4\u30BA\u306E\u5909\u66F4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF08\u5DE6\u4E0A\u306E"Canvas"\u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\uFF09\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u623B\u308B\u3068\u3001\u30C6\u30AD\u30B9\u30C8\u304C\u3068\u3066\u3082\u5927\u304D\u304F\u306A\u3063\u3066\u3044\u308B\u306E\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 \u5B9F\u969B\u3001"New Text"\u3068\u3044\u3046\u30C6\u30AD\u30B9\u30C8\u304C\u5B8C\u5168\u306B\u306F\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3002 **Alignment\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4E0B\u306E\u3001\u4E2D\u592E\u63C3\u3048\u306E\u30A2\u30A4\u30B3\u30F3\uFF081\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u4E2D\u592E\u306B\u79FB\u52D5\u3055\u305B\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[460, 100]],
    imageSource: "/img/tutorials/tutorial-02/text-alignment-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30C6\u30AD\u30B9\u30C8\u306E\u914D\u7F6E\u306E\u5909\u66F4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-a-wildcard-text"
  }), `\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\uFF65\u30C6\u30AD\u30B9\u30C8\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\u306B\u306F\u3001\u30DC\u30BF\u30F3\u306B\u3088\u3063\u3066\u5909\u66F4\u3067\u304D\u308B\u6570\u5B57\u3092\u8868\u793A\u3055\u305B\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306B"wildcard"\u304C\u542B\u307E\u308C\u308B\u3088\u3046\u306B\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u5185\u306E\u30DE\u30FC\u30AB\u30FC\uFF08"`, `<`, `d`, `>`, `"\uFF09\u3067\u3001\u5B9F\u884C\u6642\u306B\u6570\u5B57\u306A\u3069\u4F55\u304B\u5225\u306E\u3082\u306E\u3067\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u5358\u7D14\u306B\u6570\u5B57\u3092\u8868\u793A\u3055\u305B\u308B\u306E\u3067\u3001\u30C6\u30AD\u30B9\u30C8\u3092"`, `<`, `d`, `>`, `"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002 \u4ED6\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001\u52D5\u7684\u306A\u30D1\u30FC\u30C4\u3092\u56FA\u5B9A\u30C6\u30AD\u30B9\u30C8\u3068\u7D50\u5408\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF08\u4F8B: "Temperature: `, `<`, `temp`, `>`, ` \xB0C"\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "<...>\u3068\u3044\u3046\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u304B\u3063\u3053\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u3059\u3002 \u3053\u308C\u3089\u3092\u4F7F\u7528\u3057\u3066\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u5185\u306B\u633F\u5165\u3059\u308B\u60C5\u5831\u306E\u7A2E\u985E\u3092\u3001\u5B9F\u88C5\u307E\u305F\u306F\u5909\u63DB\u3059\u308B\u30E1\u30AB\u30CB\u30BA\u30E0\u3068\u3084\u308A\u53D6\u308A\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u306F\u7A7A\u306E\u307E\u307E\u306B\u3057\u3066\u304A\u304F\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u3092"`, `<`, `d`, `>`, `"\u306B\u5909\u66F4\uFF081\uFF09\u3057\u3001"Wildcard 1"\uFF082\uFF09\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092"0"\u306B\u8A2D\u5B9A\u3057\u3001"Use wildcard buffer"\u3092\u30AA\u30F3\u306B\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[460, 70], [470, 80]],
    imageSource: "/img/tutorials/tutorial-02/wildcard-text-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\uFF65\u30C6\u30AD\u30B9\u30C8\u306E\u8A2D\u5B9A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Run Simulator"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8A66\u3057\u3066\u307F\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-2.png",
    mdxType: "Figure"
  }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u30C6\u30AD\u30B9\u30C8\u304A\u3088\u3073\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8"), "\u300D\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-4-adding-code"
  }), `\u30B9\u30C6\u30C3\u30D74: \u30B3\u30FC\u30C9\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u306F\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4ECB\u3057\u3066\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30DC\u30BF\u30F3\u306B\u7C21\u5358\u306B\u30EA\u30F3\u30AF\u3067\u304D\u307E\u3059\u3002 \u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u30C8\u30EA\u30AC\uFF08\u30DC\u30BF\u30F3\u306E\u62BC\u4E0B\u306A\u3069\uFF09\u3092\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u3084\u8981\u7D20\u306E\u79FB\u52D5\u306A\u3069\uFF09\u3068\u30EA\u30F3\u30AF\u3055\u305B\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53F3\u4E0A\u9685\u306B\u3042\u308BInteractions\u30BF\u30D6\uFF081\uFF09\u3092\u9078\u629E\u3057\u3001"+"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u65B0\u3057\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[480, 0]],
    imageSource: "/img/tutorials/tutorial-02/add-interactions-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u306F\u3001\u5404\u30DC\u30BF\u30F3\u306B1\u3064\u305A\u3064\u30012\u3064\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u3069\u3061\u3089\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3082\u3001\u73FE\u5728\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3067C++\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `**Trigger\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u3001"Button is clicked"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `**Choose clicked source\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u3001"buttonUp"\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Action\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u3001"Call new virtual function"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `**Function Name\u306B\u3001"buttonUpClicked"\u3068\u5165\u529B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306B\u306F\u3001\u5F8C\u3067\u5224\u5225\u3067\u304D\u308B\u3088\u3046\u306B\u5185\u5BB9\u306E\u308F\u304B\u308B\u540D\u524D\u3092\u4ED8\u3051\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/configure-interaction-4-17.png",
    mdxType: "Figure"
  }, "\u30DC\u30BF\u30F3\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u540C\u3058\u3088\u3046\u306B\u3001"buttonDown"\u3092"clicked source"\u3068\u3057\u3066\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"+"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u65B0\u3057\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `**Trigger\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u3001"Button is clicked"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `**Choose clicked source\u30D7\u30ED\u30D1\u30C6\u30A3\u3092"buttonDown"\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Action\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u3001"Call new virtual function"\u306B\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `**Function Name\u306B\u3001\u300CbuttonDownClicked\u300D\u3068\u5165\u529B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306B\u306F\u3001\u5F8C\u3067\u5224\u5225\u3067\u304D\u308B\u3088\u3046\u306B\u5185\u5BB9\u306E\u308F\u304B\u308B\u540D\u524D\u3092\u4ED8\u3051\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Generate Code"\u30DC\u30BF\u30F3\u307E\u305F\u306F"Run Simulator"\u30DC\u30BF\u30F3\u306E\u3044\u305A\u308C\u304B\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001TouchGFX Designer\u306F\u3001\u751F\u6210\u6E08\u307F\u306E\u30B3\u30FC\u30C9\u3092\u3001\u3053\u3053\u3067\u4F5C\u6210\u3057\u305F\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306B\u5165\u529B\u3057\u305F\u60C5\u5831\u3067\u66F4\u65B0\u3057\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u3053\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30D3\u30E5\u30FC\u57FA\u5E95\u30AF\u30E9\u30B9\u306B\u306F\u30012\u3064\u306E\u65B0\u3057\u3044\u4EEE\u60F3\u95A2\u6570\u304C\u4F5C\u6210\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3092\u3055\u3089\u306B\u6398\u308A\u4E0B\u3052\u3066\u3001\u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u30B3\u30FC\u30C9\u3092\u3069\u306E\u3088\u3046\u306B\u5B9F\u884C\u3067\u304D\u308B\u306E\u304B\u78BA\u8A8D\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002 \u53F3\u4E0B\u306E"Generate Code"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u6B21\u306B\u5DE6\u4E0B\u306E"Files"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30D5\u30A1\u30A4\u30EB\uFF65\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u304C\u30E6\u30FC\u30B6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/TouchGFX/generated/gui_generated/include/gui_generated/main_screen/`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3055\u3089\u306B\u3001\u30D5\u30A1\u30A4\u30EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainViewBase.hpp`), `\u3092\u958B\u304D\u307E\u3059\u3002 \u5FC5\u8981\u3067\u3042\u308C\u3070\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u306E1\u3064\u3092\u958B\u304D\u3001\u30E6\u30FC\u30B6\u306EIDE\u5185\u3067\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D1\u30B9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }, "\u3059\u3079\u3066\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u5B58\u5728\u3059\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u3001STM32CubeMX\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
    mdxType: "Link"
  }, "TouchGFX\u306B\u3088\u308BIDE\u306E\u4F7F\u7528"), "\u300D\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044\u4EEE\u60F3\u30E1\u30BD\u30C3\u30C9\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainViewBase`), `\u30AF\u30E9\u30B9\u306E\u30D1\u30D6\u30EA\u30C3\u30AF\uFF65\u30D1\u30FC\u30C8\u306B\u3042\u308A\u307E\u3059\u3002 \u751F\u6210\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306B\u306F\u7A7A\u5B9F\u88C5\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u3064\u307E\u308A\u30B5\u30D6\u30AF\u30E9\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), `\u5185\u3067\u3001\u30D7\u30ED\u30B0\u30E9\u30DE\u304C\u3053\u308C\u3089\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u88C5\u3059\u308B\u308F\u3051\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
  }), `\u4EEE\u60F3\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u88C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B8B\u3063\u3066\u3044\u308B\u30BF\u30B9\u30AF\u306F\u3001\u30E6\u30FC\u30B6\u304C\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306B\u30AB\u30A6\u30F3\u30BF\u306E\u5024\u304C\u5909\u66F4\u3055\u308C\u308B\u3088\u3046\u306B\u3001\u3053\u308C\u30892\u3064\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), `\u30AF\u30E9\u30B9\u5185\u3067\u30E1\u30BD\u30C3\u30C9\u3092\u518D\u5EA6\u5BA3\u8A00\u3057\u307E\u3059\u3002 \u3053\u306E\u30AF\u30E9\u30B9\u306F\u6B21\u306E\u5834\u6240\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/TouchGFX/gui/include/gui/main_screen/MainView.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304D\u3001\u30AF\u30E9\u30B9\u5185\u306B2\u3064\u306E\u95A2\u6570\u306E\u5BA3\u8A00\u3092\u633F\u5165\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30BF\u30B9\u30AF\u306F\u3001.cpp\u30D5\u30A1\u30A4\u30EB\u5185\u306B\u5B9F\u88C5\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u30012\u3064\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u6B21\u306E\u5834\u6240\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/gui/src/main_screen/MainView.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u5B9F\u88C5\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_printf`), `\u3078\u306E\u547C\u3073\u51FA\u3057\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u95A2\u6570\u306F\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u5B9F\u884C\u6642\u306B\u30C6\u30AD\u30B9\u30C8\u884C\u3092\u51FA\u529B\u3059\u308B\u305F\u3081\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002 \u3053\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001utils.hpp\u3092include\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30BF\u30FC\u30B2\u30C3\u30C8\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u3068\u304D\u306B\u3001\u3053\u308C\u3089\u306E\u884C\u306E\u5F71\u97FF\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067"Run Simulator"\u3092\u3082\u3046\u4E00\u5EA6\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u65B0\u3057\u3044\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002 \u30DC\u30BF\u30F3\u3092\u4F55\u5EA6\u304C\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3068\u30E1\u30BD\u30C3\u30C9\u304C\u671F\u5F85\u3069\u304A\u308A\u306B\u52D5\u4F5C\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-3-4-17.png",
    mdxType: "Figure"
  }, "\u51FA\u529B\u3057\u306A\u304C\u3089\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "updating-the-counter-value"
  }), `\u30AB\u30A6\u30F3\u30BF\u306E\u5024\u306E\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u306E\u30BF\u30B9\u30AF\u306F\u3001\u30E6\u30FC\u30B6\u304C\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306B\u30AB\u30A6\u30F3\u30BF\u306E\u5024\u304C\u66F4\u65B0\u3055\u308C\u308B\u3088\u3046\u306B\u3001\u65B0\u3057\u3044\u30E1\u30BD\u30C3\u30C9\u306BC++\u30B3\u30FC\u30C9\u3092\u8A18\u8FF0\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u307E\u305A\u65B0\u3057\u3044\u6574\u6570\u5909\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `counter`), `\u3092\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), `\u30AF\u30E9\u30B9\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonUpClicked`), `\u30E1\u30BD\u30C3\u30C9\u3067\u3001\u30AB\u30A6\u30F3\u30BF\u306E\u5024\u3092\u5897\u52A0\u3055\u305B\u307E\u3059\u3002 \u3055\u3089\u306B\u3001\u3053\u306E\u65B0\u3057\u3044\u5024\u3092\u6587\u5B57\u5217\u306B\u5909\u63DB\u3057\u3001\u524D\u306E\u30B9\u30C6\u30C3\u30D7\u306ETextArea\u3067\u8A2D\u5B9A\u3057\u305F\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\uFF65\u30D0\u30C3\u30D5\u30A1\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u306FUnicode\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001Unicode\u306E\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u66F8\u8FBC\u307F\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u7279\u6B8A\u306Asnprintf\u95A2\u6570\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u66F4\u65B0\u5F8C\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `textCounter`), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `invalidate()`), `\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30AB\u30A6\u30F3\u30BF\u306E\u5024\u306E\u66F4\u65B0\u5F8C\u306BTextArea\u304C\u78BA\u5B9F\u306B\u518D\u63CF\u753B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7D42\u4E86\u3059\u308B\u524D\u306B\u3001\u3082\u30461\u3064\u5FC5\u8981\u306A\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX\u306B\u306F\u5FC5\u8981\u3068\u3055\u308C\u308B\u6587\u5B57\u3057\u304B\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u306E\u3067\u3001TouchGFX Designer\u306B\u5BFE\u3057\u3066\u30010\uFF5E9\u306E\u6587\u5B57\u3092"Default"\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3067\u542B\u3080\u3088\u3046\u306B\u6307\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001TouchGFX Designer\u306B\u623B\u308A\u3001"Texts"\u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001"Typographies"\u30BF\u30D6\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 Default\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E"Wildcard Ranges"\u5217\u306B\u3001\u7BC4\u56F2"0-9"\uFF081\uFF09\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[190, 40]],
    imageSource: "/img/tutorials/tutorial-02/set-wildcard-range-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Default\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u7BC4\u56F2\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B"Run Simulator"\u3092\u3082\u3046\u4E00\u5EA6\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u4E0A\u5411\u304D\u306E\u30DC\u30BF\u30F3\u3092\u6570\u56DE\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-4-4-17.png",
    mdxType: "Figure"
  }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u6642\u70B9\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u306F\u3001\u8CA0\u306E\u6570\u5024\u306F\u6B63\u3057\u304F\u51E6\u7406\u3055\u308C\u307E\u305B\u3093\u3002 \u3053\u308C\u3092\u4FEE\u6B63\u3059\u308B\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonDownClicked()`), `\u95A2\u6570\u306B\u30AC\u30FC\u30C9\u3092\u633F\u5165\u3057\u3066\u30AB\u30A6\u30F3\u30BF\u304C0\u3092\u4E0B\u56DE\u3089\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u304B\u3001\u4F7F\u7528\u3059\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306B"-"\u3068\u3044\u3046\u6587\u5B57\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u5F8C\u8005\u306F\u3001Default\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306EWildcard Characters\u30BB\u30EB\u306B\u3001\u30DE\u30A4\u30CA\u30B9\uFF08"-"\uFF09\u3092\u8FFD\u52A0\u3059\u308B\u3060\u3051\u3067\u7C21\u5358\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u3067\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB2\u306F\u7D42\u4E86\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u30C6\u30AD\u30B9\u30C8\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8"), "\u300D\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 77460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/touchgfx-tutorial-02-fdc5f18c6ee29e0a96fa608460f4d03a.zip");

/***/ })

}]);