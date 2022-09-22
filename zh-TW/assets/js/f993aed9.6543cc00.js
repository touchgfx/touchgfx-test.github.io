"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7687],{

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

/***/ 78824:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93054);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37793);
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
  id: "08-hardware-acceleration",
  title: "8. \u786C\u9AD4\u52A0\u901F\u5668",
  sidebar_label: "8. \u786C\u9AD4\u52A0\u901F\u5668"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/08-hardware-acceleration",
  "id": "development/board-bring-up/how-to/08-hardware-acceleration",
  "title": "8. \u786C\u9AD4\u52A0\u901F\u5668",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/08-hardware-acceleration.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/08-hardware-acceleration",
  "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/08-hardware-acceleration",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 8,
  "frontMatter": {
    "id": "08-hardware-acceleration",
    "title": "8. \u786C\u9AD4\u52A0\u901F\u5668",
    "sidebar_label": "8. \u786C\u9AD4\u52A0\u901F\u5668"
  },
  "sidebar": "docs",
  "previous": {
    "title": "7. \u5340\u584A\u6A21\u5F0F\u4E0B\u7684\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"
  },
  "next": {
    "title": "9. \u89F8\u63A7\u63A7\u5236\u5668",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/09-touch-controller"
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
  value: "\u9A57\u8B49",
  id: "verification",
  level: 3
}, {
  value: "\u5148\u6C7A\u689D\u4EF6",
  id: "prerequisites",
  level: 2
}, {
  value: "\u57F7\u884C",
  id: "do",
  level: 2
}, {
  value: "\u5BEB\u5165\u5F71\u50CF\u7DE9\u885D\u5340",
  id: "write-to-framebuffer-memory",
  level: 3
}, {
  value: "\u6027\u80FD\u7B26\u5408\u9810\u671F",
  id: "performance-is-as-expected",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "motivation"
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART \uFF08DMA2D\uFF09\u5716\u5F62\u52A0\u901F\u5668\u80FD\u5920\u50B3\u8F38\u4F86\u81EA\u8A18\u61B6\u9AD4\u7684\u8CC7\u6599\uFF0C\u4E26\u5C07\u8CC7\u6599\u79FB\u81F3\u5F71\u50CF\u7DE9\u885D\u5340\u6216\u5728\u5F71\u50CF\u7DE9\u885D\u5340\u6DF7\u5408\u3002 Chrom-ART\u53EF\u5F9E\u5167\u90E8\u6216\u5916\u90E8\u8A18\u61B6\u9AD4\u8B80\u53D6\u8CC7\u6599\u3002  \u540C\u6A23\uFF0C\u5B83\u53EF\u4EE5\u5BEB\u5165\u5167\u90E8\u6216\u5916\u90E8\u5132\u5B58\u9AD4\u3002 \u5728\u7E6A\u88FD\u5716\u5F62\u6642\u53EF\u4F7F\u7528\u6B64\u529F\u80FD\uFF0C\u4EE5\u986F\u8457\u63D0\u9AD8\u986F\u793A\u6027\u80FD\uFF0C\u540C\u6642\u660E\u986F\u964D\u4F4E\u61C9\u7528\u7A0B\u5F0F\u7684MCU\u4F7F\u7528\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A31\u591ASTM32\u63A7\u5236\u5668\u5305\u542BChrom-ART\u52A0\u901F\u5668\uFF0C\u4F46\u4E26\u975E\u5168\u90E8\u90FD\u6709\u3002  \u6AA2\u67E5\u60A8\u7684\u8CC7\u6599\u624B\u518A\u3002  DMA2D\u662FChrom-ART\u7684\u4EE3\u7A31\uFF0C\u4E26\u5728\u7A0B\u5F0F\u78BC\u548C\u6587\u4EF6\u4E2D\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5982\u679C\u7684\u958B\u767C\u7248\u4E0D\u652F\u63F4Chrom-ART\u786C\u9AD4\u52A0\u901F\u5668\uFF0C\u5247\u8DF3\u904E\u6B64\u6B65\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u6B65\u9A5F\u7684\u76EE\u6A19\u662F\u555F\u52D5Chrom-ART\u4E26\u4F7F\u7528\u5B83\u4F86\u8B80\u5BEB\u6578\u64DA\u3002  \u76EE\u6A19`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u4E0D\u5728\u65BC`), `\u6AA2\u67E5Chrom-ART\u6676\u7247\u7684\u529F\u80FD\uFF0C\u800C\u662F\u8981\u5F9EChrom-ART\u7684\u89D2\u5EA6\u9A57\u8B49\u8A18\u61B6\u9AD4\u4ECB\u9762\u662F\u5426\u6B63\u5E38\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u9A57\u8B49`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u672C\u7BC0\u7684\u9A57\u8B49\u9EDE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9A57\u8B49\u9EDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u57FA\u672C\u539F\u7406`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\u5DF2\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\u53EF\u7528\u65BC\u7E6A\u88FD\u6240\u9700\u5716\u5F62`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\u53EF\u8B80\u53D6\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\u53EF\u7528\u65BC\u7E6A\u88FD\u5716\u5F62\uFF08M2M\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\u53EF\u5BEB\u5165\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\u53EF\u7528\u65BC\u7E6A\u88FD\u5716\u5F62\uFF08M2M\u548CR2M\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\u6548\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\u7522\u751F\u6240\u9700\u7684\u5716\u5F62\u6548\u80FD`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u5148\u6C7A\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6B64\u6B65\u9A5F\u7684\u5148\u6C7A\u689D\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E36\u6709Chrom-ART\u7684MCU\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u57F7\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\u5728 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Multimedia -> DMA2D`), ` \u985E\u5225\u4E0B\u7684STM32CubeMX\u4E2D\u9032\u884C\u8A2D\u5B9A\u3002 \u555F\u52D5DMA2D\uFF0C\u4E26\u6839\u64DA\u60A8\u7684\u986F\u793A\u5668\u8A2D\u5B9A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u50B3\u8F38\u6A21\u5F0F`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u984F\u8272\u6A21\u5F0F`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u5716\u4E2D\uFF0C\u555F\u52D5DMA2D\uFF0C\u4E26\u5C07\u5176\u914D\u7F6E\u70BA\u8A18\u61B6\u9AD4\u5230\u8A18\u61B6\u9AD4\u50B3\u8F38\u6A21\u5F0F\u548CRGB565\u984F\u8272\u6A21\u5F0F\u3002  \u9078\u64C7\u8207\u60A8\u7684\u986F\u793A\u5668\u5339\u914D\u7684\u984F\u8272\u6A21\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/hwaccel/cubemx-dma2d.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u8A2D\u5B9AChrom-ART"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DMA2D\u5168\u57DF\u4E2D\u65B7\u5C0D\u65BCTouchGFX\u61C9\u7528\u4E2D\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u8A2A\u554F\u540C\u6B65\u81F3\u95DC\u91CD\u8981\u3002 \u78BA\u4FDD\u5728STM32CubeMX NVIC\u8A2D\u5B9A\u4E2D\u555F\u52D5\u5168\u57DF\u4E2D\u65B7\uFF08NVIC\u9078\u9805\uFF09\uFF0C\u4E26\u70BA\u4E2D\u65B7\u8655\u7406\u7A0B\u5F0F\u555F\u52D5\u4E86\u751F\u6210\u7A0B\u5F0F\u78BC\uFF08\u7A0B\u5F0F\u78BC\u7522\u751F\u9078\u9805\uFF09\uFF0C\u5982\u4E0B\u6240\u793A\u3002 \u73FE\u968E\u6BB5\u512A\u5148\u9806\u5E8F\u4E26\u4E0D\u91CD\u8981\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u4F7F\u80FDChrom-ART\u4E2D\u65B7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d-codegen.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u4F7F\u80FDChrom-ART\u4E2D\u65B7\u8655\u7406\u7A0B\u5F0F\u78BC\u751F\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "write-to-framebuffer-memory"
  }), `\u5BEB\u5165\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u7A0B\u5F0F\u78BC\u63CF\u8FF0\u4E86\u5728\u76EE\u6A19\u8A18\u61B6\u9AD4\u4E2D\u5C07\u7279\u5B9A\u984F\u8272\u586B\u5145\u5230\u77E9\u5F62\u4E2D\uFF08\u66AB\u5B58\u5668\u5230\u8A18\u61B6\u9AD4\uFF09\u3002  \u5728STM32Cube\u97CC\u9AD4\u5957\u4EF6\u4E2D\u5C0B\u627E\u9069\u7528\u65BC\u60A8\u7684MCU\u7684\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include "stm32f7xx_hal.h"
#include "stm32f7xx_hal_dma2d.h"
...

uint32_t color = 0xF800; //Red in RGB565

hdma2d.Init.Mode = DMA2D_R2M;
hdma2d.Init.ColorMode = DMA2D_RGB565;

MODIFY_REG(hdma2d.Instance->CR, DMA2D_CR_MODE, DMA2D_R2M);
MODIFY_REG(hdma2d.Instance->OPFCCR, DMA2D_OPFCCR_CM, DMA2D_RGB565);
MODIFY_REG(hdma2d.Instance->OOR, DMA2D_OOR_LO, displayWidth - rectangleWidth);

hdma2d.LayerCfg[1].InputColorMode = CM_RGB565;
hdma2d.LayerCfg[1].InputOffset = 0;

HAL_DMA2D_ConfigLayer(&hdma2d, 1);

HAL_DMA2D_Start_IT(&hdma2d, color, (unsigned int)dstPtr, rectangleWidth, rectangleHeight);

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5728STM32CubeMX\u4E2D\u6B63\u78BA\u8A2D\u5B9A\u4E86\u300C\u50B3\u8F38\u5B8C\u6210\u300D\u8A2D\u5B9A\uFF0C\u5247\u53EF\u4EE5\u5206\u914D\u4E00\u500B\u81EA\u8A02\u8655\u7406\u7A0B\u5F0F\u4F86\u8655\u7406\u8A72\u4E8B\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    hdma2d.XferCpltCallback = DMA2D_XferCpltCallback;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u6309\u4EE5\u4E0B\u65B9\u5F0F\u5B9A\u7FA9\u8655\u7406\u7A0B\u5F0F\uFF0C\u4EE5\u9A57\u8B49\u300C\u50B3\u8F38\u5B8C\u6210\u300D\u4E2D\u65B7\u8A2D\u5B9A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C" {
    static void DMA2D_XferCpltCallback(DMA2D_HandleTypeDef* handle)
    {
        //Ensure that you this callback is called
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `More examples of using ChromART can be found in the CubeFW examples. Link to examples for the STM32F429 Discovery board is given below.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "https://github.com/STMicroelectronics/STM32CubeF4/tree/master/Projects/STM32F429I-Discovery/Examples/DMA2D",
    mdxType: "Link"
  }, "STM32F429I-Discovery Examples for DMA2D on GitHub"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "performance-is-as-expected"
  }), `\u6027\u80FD\u7B26\u5408\u9810\u671F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07Chrom-ART\u7684\u6027\u80FD\u8207\u524D\u4E00\u500B\u6B65\u9A5F\u7684\u8B80\u5BEB\u8A18\u61B6\u9AD4\u7684\u6027\u80FD\u7D50\u679C\u9032\u884C\u6BD4\u8F03\u3002  \u6211\u5011\u53EF\u4EE5\u671F\u5F85\u4F7F\u7528Chrom-ART\u7684\u7A0B\u5F0F\u78BC\u6703\u6BD4\u4E4B\u524DCPU\u8B80\u5BEB\u64CD\u4F5C\u7684\u6027\u80FD\u66F4\u9AD8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u76F8\u8F03\u65BCsysTick\uFF0C\u4F7F\u7528CCSTEP\u6642\u9418\u9031\u671F\u66AB\u5B58\u5668\u53EF\u4EE5\u66F4\u7CBE\u78BA\u7684\u6E2C\u91CF\u4E2D\u65B7\u4E4B\u9593\u6240\u82B1\u8CBB\u7684\u6642\u9418\u9031\u671F\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);