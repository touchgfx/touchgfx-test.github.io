"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7368],{

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

/***/ 89477:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29415);
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
  id: "touchgfx-architecture",
  title: "\u62BD\u8C61\u5C64\u67B6\u69CB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-architecture",
  "id": "development/touchgfx-hal-development/touchgfx-architecture",
  "title": "\u62BD\u8C61\u5C64\u67B6\u69CB",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-architecture.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-architecture",
  "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/touchgfx-architecture",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-architecture",
    "title": "\u62BD\u8C61\u5C64\u67B6\u69CB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX AL \u958B\u767C\u7C21\u4ECB",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"
  },
  "next": {
    "title": "Generator\u4F7F\u7528\u8005\u6307\u5357",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/touchgfx-generator"
  }
};
const assets = {};





const toc = [{
  value: "\u62BD\u8C61\u5C64\u7269\u4EF6\u985E\u5225",
  id: "abstraction-layer-classes",
  level: 3
}, {
  value: "\u5C07TouchGFX\u5F15\u64CE\u4E3B\u8FF4\u5708\u8207\u986F\u793A\u5668\u7684\u50B3\u8F38\u4F5C\u540C\u6B65",
  id: "synchronize-touchgfx-engine-main-loop-with-display-transfer",
  level: 2
}, {
  value: "\u6E32\u67D3\u7B97\u5716\u5B8C\u6210",
  id: "rendering-done",
  level: 3
}, {
  value: "\u986F\u793A\u5C31\u7DD2",
  id: "display-ready",
  level: 3
}, {
  value: "\u56DE\u5831\u89F8\u6478\u9280\u5E55\u8207\u5BE6\u9AD4\u6309\u9215\u4E8B\u4EF6",
  id: "report-touch-and-physical-button-events",
  level: 2
}, {
  value: "\u9280\u5E55\u89F8\u63A7\u5EA7\u6A19",
  id: "touch-coordinates",
  level: 3
}, {
  value: "\u5176\u4ED6\u7684\u5916\u90E8\u4E8B\u4EF6",
  id: "other-external-events",
  level: 3
}, {
  value: "\u540C\u6B65\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5B58\u53D6",
  id: "synchronize-framebuffer-access",
  level: 2
}, {
  value: "\u56DE\u5831\u4E0B\u4E00\u500B\u53EF\u7528\u7684\u5F71\u50CF\u7DE9\u885D\u5340",
  id: "report-the-next-available-framebuffer-area",
  level: 2
}, {
  value: "\u57F7\u884C\u6E32\u67D3\u7B97\u5716",
  id: "perform-render-operations",
  level: 2
}, {
  value: "\u5F71\u50CF\u7DE9\u885D\u5340\u5230\u5F71\u793A\u5668\u7684\u50B3\u8F38\u8655\u7406",
  id: "handle-framebuffer-transfer-to-display",
  level: 2
}, {
  value: "\u5340\u57DF\u6E32\u67D3\u5B8C\u7562",
  id: "rendering-of-area-complete",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u524D\u4E00\u7BC0\u6240\u8FF0\uFF0CTouchGFX AL\u5177\u6709\u4E00\u5957\u7279\u5B9A\u7684\u8077\u8CAC\u3002 \u9019\u5957\u8077\u8CAC\u4E00\u822C\u662F\u900F\u904ERTOS \uFF08OSAL\uFF09\u4F86\u5BE6\u73FE\uFF0C\u53EF\u4EE5\u5728AL \uFF08HAL\uFF09\u7684\u786C\u9AD4\u90E8\u5206\u5BE6\u73FE\uFF0C\u4E5F\u53EF\u5728\u8207TouchGFX\u5F15\u64CE\u540C\u6B65\u7684AL\u90E8\u5206\u5BE6\u73FE\u3002 \u4E0B\u8868\u7E3D\u7D50\u4E86\u9019\u4E9B\u5728\u524D\u4E00\u7BC0\u4E2D\u6982\u8FF0\u7684\u8077\u8CAC\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8077\u8CAC\uFF08Responsibility\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F5C\u696D\u7CFB\u7D71\u6216\u786C\u9AD4`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#synchronize-touchgfx-engine-main-loop-with-display-transfer"
  }), `\u5C07TouchGFX\u5F15\u64CE\u4E3B\u8FF4\u5708\u8207\u986F\u793A\u5668\u7684\u50B3\u8F38\u4F5C\u540C\u6B65`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F5C\u696D\u7CFB\u7D71\u8207\u786C\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#report-touch-and-physical-button-events"
  }), `\u56DE\u5831\u89F8\u6478\u9280\u5E55\u8207\u5BE6\u9AD4\u6309\u9215\u4E8B\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u786C\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#synchronize-framebuffer-access"
  }), `\u540C\u6B65\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5B58\u53D6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F5C\u696D\u7CFB\u7D71`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#report-the-next-available-framebuffer-area"
  }), `\u56DE\u5831\u4E0B\u4E00\u500B\u53EF\u7528\u7684\u5F71\u50CF\u7DE9\u885D\u5340`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u786C\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#perform-render-operations"
  }), `\u57F7\u884C\u6E32\u67D3\u7B97\u5716\u64CD\u4F5C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u786C\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#handle-framebuffer-transfer-to-display"
  }), `\u5F71\u50CF\u7DE9\u885D\u5340\u5230\u5F71\u793A\u5668\u7684\u50B3\u8F38\u8655\u7406 `)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u786C\u9AD4`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u6BCF\u500B\u5C0F\u7BC0\u5C0D\u70BA\u5BE6\u73FE\u4E0A\u8FF0\u8077\u8CAC\u61C9\u6240\u63A1\u53D6\u7684\u63AA\u65BD\u4F5C\u91CD\u9EDE\u4ECB\u7D39\u3002 \u5C0D\u65BC\u5BA2\u88FD\u5316\u7684\u786C\u9AD4\u5E73\u53F0\uFF0CSTM32CubeMX\u4E2D\u7684TouchGFX Generator\u53EF\u4EE5\u7522\u751F\u5927\u591A\u6578\u7684AL\u7A0B\u5F0F\u78BC\u548C\u8207\u5176\u5C0D\u61C9\u7684TouchGFX\u5C08\u6848\u3002 \u5176\u9918\u90E8\u5206\u5C31\u5FC5\u9808\u7531AL\u7684\u958B\u767C\u4EBA\u54E1\u4F9D\u64DA\u7A0B\u5F0F\u78BC\u7684\u8A3B\u91CB\u6216\u8005\u662F\u4F9D\u64DATouchGFX Generator\u7684\u901A\u77E5\u6307\u793A\u4F86\u81EA\u884C\u624B\u52D5\u5BE6\u4F5C\u3002 \u5728\u4E0B\u4E00\u7BC0\u4E2D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-generator"
  }), `\u95B1\u8B80\u66F4\u591A`), `\u6709\u95DCTouchGFX Generator\u7684\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-classes"
  }), `\u62BD\u8C61\u5C64\u7269\u4EF6\u985E\u5225`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5F15\u64CE\u900F\u904E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL`), `\u7684\u5177\u9AD4\u7269\u4EF6\u5B50\u985E\u5225\u4F86\u5B58\u53D6HAL\u3002 \u9019\u4E9B\u7269\u4EF6\u5B50\u985E\u5225\u7531TouchGFX Generator\u7522\u751F\u3002  \u4F5C\u70BA\u7522\u751F\u62BD\u8C61\u5C64\u7A0B\u5F0F\u78BC\u7684\u4E3B\u8981\u5DE5\u5177\uFF0CTouchGFX Generator\u53EF\u540C\u6642\u7522\u751F\u53CD\u6620STM32CubeMX\u8A2D\u5B9A\u7684HAL\u7A0B\u5F0F\u78BC\u548CCMSIS V1\u548CV2\u7684OSAL\u7A0B\u5F0F\u78BC\u3002 \u8ACB\u95B1\u8B80`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-generator"
  }), `TouchGFX Generator`), `\u7AE0\u7BC0\uFF0C\u4EE5\u53D6\u5F97\u66F4\u591A\u8A73\u7D30\u8CC7\u8A0A\u3002 \u901A\u5E38\uFF0CHAL\u7684\u67B6\u69CB\u5982\u4E0B\u5716\u6240\u793A\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/code-architecture.png",
    noShadow: true,
    width: "200",
    mdxType: "Figure"
  }, `\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u4E4B\u968E\u5C64\u7D50\u69CB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "synchronize-touchgfx-engine-main-loop-with-display-transfer"
  }), `\u5C07TouchGFX\u5F15\u64CE\u4E3B\u8FF4\u5708\u8207\u986F\u793A\u5668\u7684\u50B3\u8F38\u4F5C\u540C\u6B65`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u4E00\u6B65\u9A5F\u80CC\u5F8C\u7684\u4E3B\u8981\u60F3\u6CD5\u662F\u5728\u6E32\u67D3\u7B97\u5716\u5B8C\u6210\u4E4B\u5F8C\u963B\u585E\u64F1\u7F6ETouchGFX\u5F15\u64CE\u4E3B\u8FF4\u5708\u4EE5\u78BA\u4FDD\u4E0D\u518D\u7522\u751F\u5176\u4ED6\u5716\u6846\uFF08frame\uFF09\u3002 \u4E00\u65E6\u986F\u793A\u6E96\u5099\u5C31\u7DD2\uFF0COSAL\u5411\u88AB\u963B\u585E\u64F1\u7F6E\u7684\u5F15\u64CE\u4E3B\u8FF4\u5708\u767C\u51FA\u4FE1\u865F\u4EE5\u7E7C\u7E8C\u7522\u751F\u986F\u793A\u5716\u6846\uFF08frame\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In order to fulfill this responsibility the typical way of a TouchGFX AL is to utilize the engine hook `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Rendering done`), ` and the interrupt `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Display Ready`), `, as outlined in the previous section. OSAL\u5B9A\u7FA9\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u51FD\u5F0F\uFF0C\u958B\u767C\u4EBA\u54E1\u53EF\u900F\u904E\u5B83\u767C\u9001\u65D7\u865F\uFF08semaphore\uFF09\u7D66\u5148\u524D\u5DF2\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), ` \u800C\u7B49\u5F85\u6B64\u65D7\u865F\u7684\u5F15\u64CE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u53EF\u4EE5\u7522\u751F\u57FA\u65BCCMSIS V1\u548CV2\u7684\u5B8C\u6574OSAL\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rendering-done"
  }), `\u6E32\u67D3\u7B97\u5716\u5B8C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6E32\u67D3\u7B97\u5716\u5B8C\u6210\u4E4B\u5F8C\uFF0C TouchGFX Engine\u6703\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6E32\u67D3\u7B97\u5716\u5B8C\u6210`), `\u7684\u9264\u5B50`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5BE6\u4F5C\u6B64AL\u7269\u4EF6\u65B9\u6CD5\u6642\uFF0CAL\u5FC5\u9808\u963B\u585E\u64F1\u7F6E\uFF08block\uFF09\u5716\u5F62\u5F15\u64CE\u76F4\u81F3\u8A72\u6E32\u67D3\u4E0B\u4E00\u500B\u5716\u6846\u7684\u6642\u9593\u3002 The standard method to implement this block is to perform a blocking read from a message queue. \u5982\u679C\u6B64\u65B9\u6CD5\u4E0D\u53EF\u884C\uFF0C\u5247HAL\u958B\u767C\u4EBA\u54E1\u53EF\u81EA\u7531\u4F7F\u7528\u4EFB\u4F55\u65B9\u6CD5\u4F86\u5BE6\u4F5C\u8A72\u963B\u585E\u64F1\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5982\u679C\u6C92\u6709RTOS\uFF0CTouchGFX Generator\u4E5F\u53EF\u4EE5\u7522\u751F\u4E00\u500B\u4F7F\u7528\u81EA\u65CB\u9396\uFF08spinlock\uFF09\u4F5C\u7B49\u5F85\u7684\u7A7A\u767DOSAL\u800C\u4E0D\u4F7F\u7528RTOS\u7269\u4EF6\uFF08primitive\uFF09\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u767C\u51FA\u4FE1\u865F\u6642\uFF08\u6216`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\u6240\u7528\u7684\u65D7\u865F/\u4F47\u5217\u767C\u51FA\u4FE1\u865F\u6642\uFF09\uFF0CTouchGFX\u5373\u958B\u59CB\u6E32\u67D3\u4E0B\u4E00\u500B\u61C9\u7528\u5716\u6846\uFF08application frame\uFF09\u3002 The following code based on CMSIS V2 causes the TouchGFX engine to block until an element is added to the queue by another part of the system, typically an interrupt synchronized with the display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "RTOS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static osMessageQId vsync_queue = 0; //Queue identifier is assigned elsewhere

void OSWrappers::waitForVSync()
{
    uint32_t dummyGet;
    // First make sure the queue is empty, by trying to remove an element with 0 timeout.
    osMessageQueueGet(vsync_queue, &dummyGet, 0, 0);

    // Then, wait for next VSYNC to occur.
    osMessageQueueGet(vsync_queue, &dummyGet, 0, osWaitForever);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E0D\u4F7F\u7528RTOS\uFF0CTouchGFX Generator\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `waitForVSync`), `\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4F7F\u7528\u63EE\u767C\u6027\u6613\u5931\u8B8A\u6578\uFF08volatile variable\uFF09\u65B9\u5F0F\u7684\u5BE6\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "NO_OS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static volatile uint8_t vsync_sem = 0;

void OSWrappers::waitForVSync()
{
    while(!vsync_sem)
    {
        // Perform other work while waiting
        ...
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "\u5728")), "TouchGFX \u5F15\u64CE\u7B49\u5F85\u7522\u751F\u4E0B\u4E00\u500B\u5716\u6846\u6642\uFF0C\u5176\u4ED6\u4EFB\u52D9\u53EF\u4EE5\u57F7\u884C\u91CD\u8981\u7684\u5DE5\u4F5C\u3002")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-ready"
  }), `\u986F\u793A\u5C31\u7DD2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528\u65BC\u89E3\u9664\u4E3B\u8FF4\u5708\u963B\u585E\u64F1\u7F6E\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u986F\u793A\u5C31\u7DD2`), `\u4FE1\u865F\u61C9\u8A72\u4F86\u81EA\u986F\u793A\u63A7\u5236\u5668\u7684\u4E2D\u65B7\u3001\u986F\u793A\u5668\u672C\u8EAB\u7684\u4E2D\u65B7\u6216\u662F\u786C\u9AD4\u5B9A\u6642\u5668\u7684\u4E2D\u65B7\u3002 The source of the signal is dependent on the type of display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\u7269\u4EF6\u985E\u5225\u70BA\u6B64\u4FE1\u865F\u5B9A\u7FA9\u4E86\u4E00\u500B\u51FD\u5F0F\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVsync`), `\u3002 \u8A72\u51FD\u5F0F\u7684\u5BE6\u4F5C\u5FC5\u9808\u900F\u904E\u6EFF\u8DB3`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\u4E2D\u6240\u4F7F\u7528\u7684\u7B49\u5F85\u689D\u4EF6\u4F86\u89E3\u9664\u4E3B\u8FF4\u5708\u7684\u963B\u585E\u64F1\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63A5\u7E7C\u4E0A\u9762\u7684CMSIS RTOS\u7BC4\u4F8B\uFF0C\u4EE5\u4E0B\u7A0B\u5F0F\u78BC\u5C07\u8A0A\u606F\u653E\u5165\u8A0A\u606F\u4F47\u5217`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `vsync_queue`), `\u4E2D\u4EE5\u89E3\u9664TouchGFX\u5F15\u64CE\u7684\u963B\u585E\u64F1\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "RTOS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void OSWrappers::signalVSync()
{
    if (vsync_queue)
    {
        osMessagePut(vsync_queue, dummy, 0);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u500B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\u7269\u4EF6\u65B9\u6CD5\u5FC5\u9808\u5728\u786C\u9AD4\u5C64\u9762\u4E0A\u900F\u904ELTDC\u4E2D\u65B7\uFF0C\u986F\u793A\u5668\u7684\u5916\u90E8\u4E2D\u65B7\u6216\u786C\u9AD4\u8A08\u6642\u5668\u4E2D\u65B7\u4F86\u547C\u53EB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E0D\u4F7F\u7528RTOS\uFF0C\u5247\u4F7F\u7528\u8B8A\u6578\uFF0C\u4E26\u5206\u914D\u4E00\u500B\u975E\u96F6\u503C\u4EE5\u6253\u7834while\u5FAA\u74B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "NO_OS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void OSWrappers::signalVSync()
{
    vsync_sem = 1;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "report-touch-and-physical-button-events"
  }), `\u56DE\u5831\u89F8\u6478\u9280\u5E55\u8207\u5BE6\u9AD4\u6309\u9215\u4E8B\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6E32\u67D3\u8A08\u7B97\uFF08render\uFF09\u65B0\u7684\u756B\u9762\u5716\u6846\uFF08frame\uFF09\u4E4B\u524D\uFF0CTouchGFX\u5F15\u64CE\u5F9E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchController`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ButtonController`), `\u4ECB\u9762\u6536\u96C6\u5916\u90E8\u8F38\u5165\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch-coordinates"
  }), `\u9280\u5E55\u89F8\u63A7\u5EA7\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F15\u64CE\u5C07\u89F8\u63A7\u63A7\u5236\u5668\u7684\u5EA7\u6A19\u8F49\u63DB\u70BA\u300C\u9EDE\u6309\uFF08click\uFF09\u300D\u3001\u300C\u62D6\u66F3\uFF08drag\uFF09\u300D\u548C\u300C\u624B\u52E2\uFF08gesture\uFF09\u300D\u4E8B\u4EF6\uFF0C\u4E26\u5C07\u5176\u50B3\u905E\u81F3\u61C9\u7528\u7A0B\u5F0F\u3002 \u4EE5\u4E0B\u7A0B\u5F0F\u78BC\u7531TouchGFX Generator\u7522\u751F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{1-1,6-6}",
    "{1-1,6-6}": true
  }), `static STM32TouchController tc;
static STM32L4DMA dma;
static LCD24bpp display;
static ApplicationFontProvider fontProvider;
static Texts texts;
static TouchGFXHAL hal(dma, display, tc, 390, 390);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Engine\u6E32\u67D3\u7B97\u5716\uFF08render\uFF09\u7684\u904E\u7A0B\u4E2D\uFF0C\u5F15\u64CE\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `tc`), `\u7269\u4EF6\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `sampleTouch()`), `\u51FD\u5F0F\u4F86\u6536\u96C6\u8F38\u5165\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AL\u958B\u767C\u4EBA\u54E1\u63D0\u4F9B\u7684\u5BE6\u4F5C\u61C9\u8A72\u8B80\u53D6\u9280\u5E55\u89F8\u63A7\u5EA7\u6A19\u7684x\u548Cy\u503C\uFF0C\u4E26\u56DE\u50B3\u662F\u5426\u5075\u6E2C\u5230\u9280\u5E55\u89F8\u63A7\uFF08\u771F\u6216\u507D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u5C07\u7522\u751F\u4E00\u500B\u7269\u4EF6\u985E\u5225\uFF0C\u6B64\u7269\u4EF6\u985E\u5225\u5C07TouchController\u4ECB\u9762\u5B9A\u7FA9\u70BA\u7A7A\u51FD\u5F0F\u3002 HAL\u958B\u767C\u4EBA\u54E1\u5FC5\u9808\u5728\u6B64\u7A7A\u51FD\u5F0F\u4E2D\u586B\u5165\u5177\u9AD4\u7684\u5BE6\u4F5C\u7A0B\u5F0F\u78BC\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u591A\u7A2E\u5BE6\u4F5C\u6B64\u51FD\u5F0F\u7684\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `\u5728sampleTouch() \u4E2D\u8F2A\u8A62\uFF08polling\uFF09`)), `\uFF1A\u900F\u904E\u767C\u9001\u8ACB\u6C42\u4E26\u7B49\u5F85\u8F2A\u8A62\u7D50\u679C\uFF0C\u53EF\u5F9E\u786C\u9AD4\u89F8\u63A7\u63A7\u5236\u5668\uFF08\u901A\u5E38\u70BAI2C\uFF09\u8B80\u53D6\u87A2\u5E55\u89F8\u6478\u72C0\u614B\u3002 This impacts the overall render time of the application as the I2C round-trip is often up to 1 ms during which the graphics engine is blocked.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `\u4F7F\u7528\u4E2D\u65B7`)), `\uFF1A\u53E6\u4E00\u7A2E\u53EF\u80FD\u662F\u4F7F\u7528\u4E2D\u65B7\u3002 I2C\u8B80\u53D6\u7684\u6307\u4EE4\u7531\u5B9A\u6642\u5668\u5B9A\u671F\u555F\u52D5\uFF0C\u6216\u8005\u4EE5\u56DE\u61C9\u89F8\u63A7\u786C\u9AD4\u63A7\u5236\u5668\u7684\u5916\u90E8\u4E2D\u65B7\u4F86\u555F\u52D5\u3002 \u7576I2C\u8CC7\u6599\u5C31\u7DD2\u6642\uFF08\u53EF\u8996\u70BA\u53E6\u4E00\u500B\u4E2D\u65B7\uFF09\uFF0C\u6B64\u8CC7\u6599\u53EF\u900F\u904E\u8A0A\u606F\u4F47\u5217\uFF08message queue\uFF09\u6216\u5168\u57DF\u8B8A\u6578\u5C07\u8CC7\u6599\u63D0\u4F9B\u7D66`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController`), `\u3002 \u4EE5\u4E0B\u5C55\u793A\u4E86\u7531TouchGFX Generator\u6240\u7522\u751F\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController.cpp`), `\u7A0B\u5F0F\u78BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `sampleTouch`), `\u5728RTOS\u7CFB\u7D71\u4E2D\u7684\u53EF\u80FD\u6A23\u8C8C\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32TouchController.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)
{
    if (osMessageQueueGet(mid_MsgQueue, &msg, NULL, 0U) == osOK)
    {
        x = msg.x;
        y = msg.y;
        return true;
    }
    return false;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u6A94\u6848\u7684\u4F4D\u7F6E\u5C07\u5728\u4E0B\u4E00\u7AE0\u7684TouchGFX Generator\u4E2D\u8AAA\u660E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "other-external-events"
  }), `\u5176\u4ED6\u7684\u5916\u90E8\u4E8B\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u9215\u63A7\u5236\u5668\u4ECB\u9762`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::ButtonController`), `\u53EF\u7528\u65BC\u5C07\u786C\u9AD4\u8A0A\u865F\uFF08\u6309\u9215\u6216\u5176\u4ED6\uFF09\u6620\u5C04\u5230\u61C9\u7528\u7A0B\u5F0F\u4E8B\u4EF6\u3002 \u53EF\u5728TouchGFX Designer\u4E2D\u8A2D\u5B9A\u5C0D\u9019\u4E9B\u4E8B\u4EF6\u7684\u53CD\u61C9\u65B9\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A72\u4ECB\u9762\u7684\u4F7F\u7528\u8207\u4E0A\u8FF0\u89F8\u63A7\u63A7\u5236\u5668\u985E\u4F3C\uFF0C\u53EA\u662F\u4E26\u4E0D\u4E00\u5B9A\u8981\u5177\u6709ButtonController\u3002 \u8981\u4F7F\u7528\u6B64\u4ECB\u9762\uFF0C\u8ACB\u5EFA\u7ACB\u4E00\u500B\u5177\u6709`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ButtonController`), `\u4ECB\u9762\u5BE6\u4F5C\u7684\u5BE6\u9AD4\u7269\u4EF6\uFF0C\u4E26\u5C07\u6307\u5411\u6B64\u5BE6\u9AD4\u7269\u4EF6\u7684\u53C3\u7167\uFF08reference\uFF09\u50B3\u905E\u81F3HAL`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyButtonController.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-6}",
    "{3-6}": true
  }), `class MyButtonController : public touchgfx::ButtonController
{
  bool sample(uint8_t& key)
  {
    ... //Sample IO, set key, return true/false
  }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static MyButtonController bc;
void touchgfx_init()
{
  ...
  hal.initialize();
  hal.setButtonController(&bc);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6BCF\u500B\u5716\u6846\u4E4B\u524D\u90FD\u6703\u547C\u53EB\u4E0A\u8FF0ButtonController\u7269\u4EF6\u985E\u5225\u7576\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6A23\u672C`), `\u65B9\u6CD5\u3002 \u7576\u56DE\u50B3\u771F\u503C\u6642\uFF0C\u9375\u503C\uFF08key value\uFF09\u5C07\u88AB\u50B3\u905E\u81F3\u76EE\u524D\u87A2\u5E55\uFF08screen\uFF09\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `handleKeyEvent`), `\u4E8B\u4EF6\u8655\u7406\u7A0B\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u95DC\u65BC\u5982\u4F55\u4EE5ButtonController\u53D6\u6A23\u800C\u5F97\u5230\u7684\u6578\u503C\u4F5C\u70BA\u8A2D\u8A08\u5DE5\u5177\u4E2D\u4E92\u52D5\u884C\u70BA\u7684\u89F8\u767C\u6E90\uFF0C\u8ACB\u53C3\u898B", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../ui-development/designer-user-guide/interactions-view",
    mdxType: "Link"
  }, "\u4E92\u52D5"), "\u6587\u7AE0\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "synchronize-framebuffer-access"
  }), `\u540C\u6B65\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5B58\u53D6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u591A\u500B\u57F7\u884C\u55AE\u5143\uFF08actors\uFF09\u53EF\u80FD\u90FD\u6703\u5C0D\u5F71\u50CF\u7DE9\u885D\u5340\u9032\u884C\u5B58\u53D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CPU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u6E32\u67D3\u7B97\u5716\u671F\u9593\u8B80\u53D6\u548C\u5BEB\u5165\u50CF\u7D20`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMA2D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `*`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u786C\u9AD4\u8F14\u52A9\u7684\u6E32\u67D3\u7B97\u5716\u671F\u9593\u8B80\u53D6\u548C\u5BEB\u5165\u50CF\u7D20`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u50B3\u8F38\u5230\u4E26\u5217RGB\u986F\u793A\u5668\u671F\u9593\u8B80\u53D6\u50CF\u7D20`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u50B3\u8F38\u5230SPI\u986F\u793A\u5668\u671F\u9593\u8B80\u53D6\u50CF\u7D20`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5F15\u64CE\u900F\u904E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\u4ECB\u9762\u4F86\u540C\u6B65\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5B58\u53D6\uFF0C\u800C\u5C0D\u65BC\u540C\u6642\u4E5F\u5E0C\u671B\u5B58\u53D6\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u9031\u908A\uFF08\u5982DMA2D\uFF09\u4E5F\u5FC5\u9808\u57F7\u884C\u76F8\u540C\u64CD\u4F5C\uFF08\u900F\u904EOSWrapper\u5C0D\u5F71\u50CF\u7DE9\u885D\u5340\u9032\u884C\u5B58\u53D6\uFF09\u3002 \u5E38\u898B\u7684\u8A2D\u8A08\u662F\u4F7F\u7528\u65D7\u865F\uFF08semaphore\uFF09\u4F86\u78BA\u4FDD\uFF08guard\uFF09\u5C0D\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5B58\u53D6\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u5B83\u7684\u540C\u6B65\u6A5F\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u8868\u986F\u793A\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\u7269\u4EF6\u985E\u5225\uFF08OSWrappers.cpp\uFF09\u4E2D\u7684\u51FD\u5F0F\u5217\u8868\uFF0C\u5305\u542B\u4E86\u7531TouchGFX Generator\u7522\u751F\u7684\u51FD\u5F0F\u6216\u7531\u4F7F\u7528\u8005\u624B\u52D5\u751F\u6210\u7684\u51FD\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7269\u4EF6\u65B9\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Description`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `takeFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7531\u5716\u5F62\u5F15\u64CE\u547C\u53EB\u4EE5\u7372\u53D6\u5C0D\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u7368\u4F54\u5B58\u53D6\u3002 \u9019\u5C07\u963B\u585E\u64F1\u7F6E\u5F15\u64CE\u76F4\u5230DMA2D\u5B8C\u6210\uFF08\u82E5\u6B63\u5728\u57F7\u884C\u7684\u8A71\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `tryTakeFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u78BA\u4FDD\u5DF2\u53D6\u5F97\u65D7\u865F\u9396\u5B9A\uFF08lock\uFF09\u3002 \u6B64\u65B9\u6CD5\u4E0D\u6703\u963B\u585E\u64F1\u7F6E\uFF0C\u4F46\u4E0B\u4E00\u6B21\u547C\u53EBtakeFrameBufferSemaphore\u6642\u6703\u963B\u585E\u64F1\u7F6E\u547C\u53EB\u8005`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `giveFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u91CB\u653E\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u65D7\u865F\u9396\u5B9A\uFF08lock\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `giveFrameBufferSemaphoreFromISR`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u4E2D\u65B7\u7A0B\u5F0F\u7576\u4E2D\u91CB\u653E\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u65D7\u865F\u9396\u5B9A\uFF08lock\uFF09`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u53EF\u7522\u751F\u4F7F\u7528OSWrappers\u4ECB\u9762\u4F86\u4F5C\u540C\u6B65\u7684ChromART\u9A45\u52D5\u7A0B\u5F0F\uFF0C\u4EE5\u53CA\u7522\u751F\u8207\u6240\u9078\u7684RTOS\u5C0D\u61C9\u4E4B\u540C\u6B65\u529F\u80FD\u7684\u51FD\u5F0F\u5BE6\u4F5C\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "report-the-next-available-framebuffer-area"
  }), `\u56DE\u5831\u4E0B\u4E00\u500B\u53EF\u7528\u7684\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7121\u8AD6\u63A1\u7528\u54EA\u7A2E\u6E32\u67D3\u7B97\u5716\u7684\u7B56\u7565\uFF0CTouchGFX\u5F15\u64CE\u5728\u6BCF\u500B\u6642\u6A19\uFF08tick\uFF09\u90FD\u5FC5\u9808\u77E5\u9053\u61C9\u5C07\u50CF\u7D20\u6E32\u67D3\u5230\u54EA\u500B\u8A18\u61B6\u9AD4\u5340\u57DF\u3002 \u4F7F\u7528\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u6216\u96D9\u5F71\u50CF\u7DE9\u885D\u7B56\u7565\u6642\uFF0CTouchGFX\u5F15\u64CE\u5C07\u6839\u64DA\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5BEC\u5EA6\u3001\u9AD8\u5EA6\u548C\u4F4D\u5143\u6DF1\u5EA6\uFF08bit depth\uFF09\u5C07\u50CF\u7D20\u8CC7\u6599\u5BEB\u5165\u8A18\u61B6\u9AD4\u5340\u57DF\u3002 \u5716\u5F62\u5F15\u64CE\u8CA0\u8CAC\u96D9\u5F71\u50CF\u7DE9\u885D\u5340\u914D\u7F6E\u7576\u4E2D\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u4E4B\u9593\u7684\u4EA4\u63DB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5B58\u53D6\u5C40\u9650\u5728\u90E8\u5206\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u53EF\u5728HAL\u7269\u4EF6\u5B50\u985E\u5225\u4E2D\u91CD\u65B0\u5BE6\u4F5C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::getTFTCurrentLine()`), `\u7269\u4EF6\u65B9\u6CD5\uFF08method\uFF09\u3002 \u56DE\u50B3\u4E0A\u9762\u7528\u65BC\u5716\u5F62\u5F15\u64CE\u7E6A\u88FD\u800C\u4FDD\u5B58\u7684\u884C\u865F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u5C40\u90E8\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565\u6642\uFF0C\u958B\u767C\u4EBA\u54E1\u9700\u5B9A\u7FA9TouchGFX\u5F15\u64CE\u5728\u6E32\u67D3\u7B97\u5716\u6642\u4F7F\u7528\u7684\u8A18\u61B6\u9AD4\u5340\u584A\uFF08\u4E00\u500B\u6216\u591A\u500B\uFF09\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/lowering-memory-usage-with-partial-framebuffer"
  }), `\u7531\u6B64`), `\u95B1\u8B80\u66F4\u591A\u76F8\u95DC\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\u70BA\u6240\u6709\u652F\u63F4\u7684\u5F71\u50CF\u7DE9\u885D\u7B56\u7565\u63D0\u4F9B\u914D\u7F6E\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "perform-render-operations"
  }), `\u57F7\u884C\u6E32\u67D3\u7B97\u5716`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u7528\u7A0B\u5F0F\u4E0D\u662F\u53EA\u9700\u8981\u4F5C\u6E32\u67D3\u7B97\u5716\u6216\u662F\u53EA\u4F5C\u5716\u50CF\u986F\u793A\u3002 \u9084\u6709\u5176\u4ED6\u5DE5\u4F5C\u4E5F\u9700\u8981\u4F7F\u7528CPU\u3002 TouchGFX\u7684\u76EE\u6A19\u4E4B\u4E00\u662F\u76E1\u53EF\u80FD\u964D\u4F4ECPU\u8CC7\u6E90\u7684\u4F7F\u7528\u4F86\u7E6A\u88FD\u4F7F\u7528\u8005\u4ECB\u9762\u3002 HAL\u7269\u4EF6\u985E\u5225\u5C0D\u8A31\u591ASTM32\u5FAE\u63A7\u5236\u5668\uFF08\u6216\u5176\u4ED6\u786C\u9AD4\u529F\u80FD\uFF09\u4E0A\u7684DMA2D\u529F\u80FD\u9032\u884C\u62BD\u8C61\u5316\u4EE5\u5229\u5716\u5F62\u5F15\u64CE\u7684\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u5716\u8CC7\uFF08\u5982\u9EDE\u9663\u5716\uFF09\u6E32\u67D3\u6F14\u7B97\u81F3\u5F71\u50CF\u7DE9\u885D\u5340\u6642\uFF0CTouchGFX\u5F15\u64CE\u6AA2\u67E5HAL\u662F\u5426\u6709\u80FD\u529B\u5C0D\u5C40\u90E8\u6216\u8005\u5168\u90E8\u7684\u9EDE\u9663\u5716\u9032\u884C\u9EDE\u9663\u758A\u5716\uFF08blit\uFF09\u81F3\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u5982\u679C\u6709\u6B64\u529F\u80FD\uFF0C\u5247\u5C07\u7E6A\u5716\u64CD\u4F5C\u59D4\u8A17\u7D66HAL\u800C\u4E0D\u662F\u7531CPU\u76F4\u63A5\u8655\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F15\u64CE\u547C\u53EB\u7269\u4EF6\u65B9\u6CD5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::getBlitCaps()`), `\u4EE5\u53D6\u5F97\u786C\u9AD4\u80FD\u529B\u7684\u63CF\u8FF0\u3002 \u53EF\u5728HAL\u7269\u4EF6\u5B50\u985E\u5225\u7576\u4E2D\u91CD\u65B0\u5BE6\u4F5C\u6B64\u547C\u53EB\u4EE5\u6DFB\u52A0\u786C\u9AD4\u80FD\u529B\u7684\u63CF\u8FF0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F15\u64CE\u5728\u7E6A\u88FD\u4F7F\u7528\u8005\u4ECB\u9762\u6642\u547C\u53EBHAL\u7269\u4EF6\u985E\u5225\u4E0A\u7684\u64CD\u4F5C\uFF08\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::blitCopy`), `\uFF09\u5C07\u5176\u6392\u5165DMA\u64CD\u4F5C\u4F47\u5217\u3002 \u5982\u679CHAL\u56DE\u5831\u4E0D\u5177\u5099\u6240\u9700\u7684\u80FD\u529B\uFF0C\u5247\u5716\u5F62\u5F15\u64CE\u5C07\u9000\u800C\u4F7F\u7528\u8EDF\u9AD4\u65B9\u5F0F\u4F86\u6E32\u67D3\u7B97\u5716\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, ` \u8A31\u591ASTM32 MCU\u5177\u6709ChromART\uFF0C\u56E0\u6B64\u5728\u5C0D\u50CF\u7D20\u9032\u884CAlpha\u50CF\u7D20\u6DF7\u5408\uFF08Alpha blending\uFF09\u7684\u540C\u6642\u5C07\u8CC7\u6599\u7531\u5916\u90E8Flash\u8A18\u61B6\u9AD4\u642C\u79FB\u81F3\u5F71\u50CF\u7DE9\u885D\u5340\u3002 \u5C0D\u65BC\u8A31\u591AMCU\u4F86\u8AAA\uFF0CTouchGFX Generator\u53EF\u7522\u751FChromART\u9A45\u52D5\u7A0B\u5F0F\u4EE5\u4F7F\u7528ChromART\u4F86\u589E\u52A0\u591A\u500B\u9EDE\u9663\u758A\u5716\uFF08blit\uFF09\u64CD\u4F5C\u3002 `)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "handle-framebuffer-transfer-to-display"
  }), `\u5F71\u50CF\u7DE9\u885D\u5340\u5230\u5F71\u793A\u5668\u7684\u50B3\u8F38\u8655\u7406`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5167\u5BB9\u50B3\u8F38\u5230\u986F\u793A\u5668\uFF0CTouchGFX AL\u7D93\u5E38\u4F7F\u7528\u300C\u5340\u57DF\u6E32\u67D3\u5B8C\u7562\uFF08Rendering of area complete\uFF09\u300D\u7684\u639B\u9264\u3002 \u4E00\u65E6\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u6E32\u67D3\u7B97\u5716\u5B8C\u6210\u5F8C\uFF0C\u5F15\u64CE\u5C31\u6703\u5411AL\u767C\u9001\u4FE1\u865F\u3002 AL\u53EF\u9078\u64C7\u5982\u4F55\u5C07\u6B64\u5F71\u50CF\u7DE9\u885D\u5340\u9019\u90E8\u5206\u7684\u5167\u5BB9\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rendering-of-area-complete"
  }), `\u5340\u57DF\u6E32\u67D3\u5B8C\u7562`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7A0B\u5F0F\u78BC\u7576\u4E2D\u7684\u639B\u9264\uFF08hook\uFF09\u70BA\u865B\u64EC\u51FD\u5F0F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer(Rect& rect)`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5E36\u6709LTDC\u63A7\u5236\u5668\u7684STM32\u5FAE\u63A7\u5236\u5668\u4E0A\u6211\u5011\u4E0D\u9700\u8981\u5728\u6BCF\u6B21\u6E32\u67D3\u7B97\u5716\u4E4B\u5F8C\u57F7\u884C\u4EFB\u4F55\u7528\u65BC\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u7684\u64CD\u4F5C\u3002 \u5728\u5B8C\u6210LTDC\u521D\u59CB\u5316\u4E4B\u5F8C\uFF0C\u8A72\u50B3\u8F38\u5C07\u4EE5\u7D66\u5B9A\u7684\u983B\u7387\u9023\u7E8C\u57F7\u884C\uFF0C\u56E0\u6B64\u6211\u5011\u53EF\u4EE5\u5728\u6B64\u7269\u4EF6\u65B9\u6CD5\u7684\u5BE6\u4F5C\u7559\u767D\u4E0D\u4F5C\u4EFB\u4F55\u8655\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u5C0D\u65BC\u5176\u4ED6\u985E\u578B\u7684\u986F\u793A\u5668\uFF08\u5982SPI\u62168080\uFF09\u4F86\u8AAA\u5C31\u9700\u8981\u81EA\u884C\u624B\u52D5\u4F86\u5BE6\u4F5C\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u50B3\u8F38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u51FD\u5F0F\u8B93\u958B\u767C\u8005\u53EF\u4EE5\u767C\u8D77\u8A72\u5F71\u50CF\u7DE9\u885D\u5340\u57DF\u5411\u986F\u793A\u5668GRAM\u7684\u624B\u52D5\u50B3\u8F38\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-9}",
    "{9-9}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& r)
{
    HAL::flushFrameBuffer(rect); //call superclass

    //start transfer if not running already!
    if (!IsTransmittingData())
    {
        const uint8_t* pixels = ...; // Calculate pixel address
        SendFrameBufferRect((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
    else
    {
       ... // Queue rect for later or wait here
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u900F\u904E\u95B1\u8B80\u4F7F\u7528\u60C5\u5883\uFF08Scenarios\uFF09\u7AE0\u7BC0\u4EE5\u7372\u53D6\u5982\u4F55\u652F\u63F4\u5404\u7A2E\u986F\u793A\u4ECB\u9762\u7684\u5177\u9AD4\u7BC4\u4F8B\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);