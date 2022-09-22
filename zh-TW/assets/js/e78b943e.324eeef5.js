"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8747],{

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

/***/ 6138:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44035);
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
  id: "engine-architecture",
  title: "\u5F15\u64CE\u67B6\u69CB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/engine-architecture",
  "id": "basic-concepts/engine-architecture",
  "title": "\u5F15\u64CE\u67B6\u69CB",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/engine-architecture.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/engine-architecture",
  "permalink": "/4.20/zh-TW/docs/basic-concepts/engine-architecture",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "engine-architecture",
    "title": "\u5F15\u64CE\u67B6\u69CB"
  }
};
const assets = {};



const toc = [{
  value: "\u56DB\u500B\u7D44\u6210\u90E8\u5206",
  id: "the-four-parts",
  level: 2
}, {
  value: "MCU",
  id: "mcu",
  level: 3
}, {
  value: "RAM",
  id: "ram",
  level: 3
}, {
  value: "Flash",
  id: "flash",
  level: 3
}, {
  value: "\u986F\u793A",
  id: "display",
  level: 3
}, {
  value: "\u6027\u80FD",
  id: "performance",
  level: 2
}, {
  value: "\u4E00\u822C\u7B56\u7565",
  id: "general-strategy",
  level: 3
}, {
  value: "\u8A2D\u7F6E\u7279\u5B9A\u7B56\u7565",
  id: "setup-specific-strategy",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u6B78\u6839\u7D50\u5E95\uFF0C\u7E6A\u5716\u7CFB\u7D71\u5C31\u662F\u8B93\u67D0\u4E9B\u5167\u5BB9\u986F\u793A\u5728\u986F\u793A\u5668\u4E0A\u3002  `)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u5D4C\u5165\u5F0F\u7E6A\u5716\u7CFB\u7D71\u201D\u4E00\u8A5E\u6709\u8A31\u591A\u7A2E\u542B\u7FA9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u4E0D\u540C\u7684\u4EBA\u5C0D\u201C\u5D4C\u5165\u5F0F\u7CFB\u7D71\u201D\u4E00\u8A5E\u6709\u4E0D\u540C\u7684\u7406\u89E3\u3002 \u5C0D\u67D0\u4E9B\u4EBA\u4F86\u8AAA\uFF0C\u5D4C\u5165\u5F0F\u7CFB\u7D71\u610F\u5473\u8457\u5341\u5206\u53EF\u9760\u7684\u820A\u5F0F8\u4F4D\u5143\u5FAE\u63A7\u5236\u5668\uFF0C\u7121\u4F5C\u696D\u7CFB\u7D71\uFF0C\u5BE6\u969B\u4E0A\u4E5F\u7121RAM\u3001ROM\u6216GPIO\u3002 \u5C0D\u5176\u4ED6\u4EBA\u4F86\u8AAA\uFF0C\u5B83\u53EF\u80FD\u610F\u5473\u8457\u529F\u80FD\u5F37\u5927\u7684\u73FE\u4EE3\u667A\u6167\u624B\u6A5F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5176\u6B21\uFF0C\u201C\u7E6A\u5716\u7CFB\u7D71\u201D\u4E00\u8A5E\u6709\u8A31\u591A\u7A2E\u89E3\u91CB\u3002 \u5C0D\u67D0\u4E9B\u4EBA\u4F86\u8AAA\uFF0C\u5B83\u8868\u793A\u5728\u559C\u6B61\u7684\u7E6A\u756B\u7A0B\u5F0F\u4E2D\u7E6A\u50CF\u7D20\u9EDE\u3002 \u5C0D\u5176\u4ED6\u4EBA\u4F86\u8AAA\uFF0C\u5B83\u8868\u793A\u904A\u6232\u6A5F\u4E0A\u904B\u884C\u76843D\u6E32\u67D3\u8EDF\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0DTouchGFX\u800C\u8A00\uFF0C\u5D4C\u5165\u5F0F\u7CFB\u7D71\u8868\u793ASTM32\u5FAE\u63A7\u5236\u5668\u4E0A\u7684\u4EFB\u610F\u7CFB\u7D71\u3002 \u7E6A\u5716\u7CFB\u7D71\u8868\u793A\u904B\u884C\u983B\u7387\u70BA60\u5E40\u6BCF\u79D2\u7684\u4E92\u52D5\u5F0F\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-four-parts"
  }), `\u56DB\u500B\u7D44\u6210\u90E8\u5206`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u5728\u6B64\u985E\u5E73\u81FA\u4E0A\u5BE6\u73FE\u7E6A\u5716\u61C9\u7528\uFF0C\u6211\u5011\u63A2\u5957\u56DB\u500B\u76F4\u63A5\u76F8\u95DC\u7684\u4E3B\u8981\u5143\u4EF6\u3002 \u7576\u7136\uFF0C\u5D4C\u5165\u5F0F\u7CFB\u7D71\u53EF\u80FD\u5305\u542B\u8A31\u591A\u5176\u4ED6\u5143\u4EF6\uFF0C\u4F46\u5176\u4ED6\u5143\u4EF6\u8207\u5716\u5F62\u986F\u793A\u7684\u76F8\u95DC\u6027\u8F03\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/four-parts.svg",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "MCU\u3001RAM\u3001\u5FEB\u9583\u8A18\u61B6\u9AD4\u548C\u986F\u793A\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7C21\u800C\u8A00\u4E4B\uFF0CTouchGFX\u4F7F\u7528MCU\uFF0C\u901A\u904E\u5C0D\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u5404\u500B\u90E8\u5206\u9032\u884C\u7D44\u5408\uFF0C\u5275\u5EFA\u548C\u66F4\u65B0RAM\u4E2D\u7684\u5716\u50CF\u3002 \u7D44\u5408\u5716\u50CF\u6703\u88AB\u50B3\u8F38\u5230\u986F\u793A\u5668\u3002 \u7CFB\u7D71\u6703\u8996\u9700\u8981\u76E1\u53EF\u80FD\u591A\u5730\u91CD\u8907\u6B64\u904E\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mcu"
  }), `MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u500B\u904E\u7A0B\u4E2D\uFF0CMCU\u627F\u64D4\u4E86\u6240\u6709\u91CD\u8981\u4EFB\u52D9\u3002 \u5B83\u8B80\u53D6\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u5716\u50CF\uFF0C\u4E26\u5C07\u5B83\u5011\u5BEB\u5165RAM\u3002 \u5728\u5C07\u534A\u900F\u660E\u7D05\u8272\u6587\u5B57\u878D\u5408\u5230\u5716\u50CF\u4E0A\u6642\uFF0C\u5B83\u8A08\u7B97\u5F97\u5230\u7684\u8272\u5F69\u4E26\u5C07\u5176\u5B58\u5132\u5230RAM\u3002 \u5B83\u5C0D\u5713\u7684\u6240\u6709\u50CF\u7D20\u9032\u884C\u6E32\u67D3\u4E26\u5B58\u5132\u5230RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 MCU\u5177\u6709\u7279\u5B9A\u529F\u80FD\uFF0C\u80FD\u5920\u70BA\u7E6A\u5716\u7CFB\u7D71\u7684\u5BE6\u73FE\u63D0\u4F9B\u5354\u52A9\u3002 \u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/hardware-selection/hardware-components/hardware-selection-mcu"
  }), `\u201CMCU\u201D`), `\u90E8\u5206\u77AD\u89E3\u4E0D\u540CMCU\u7684\u8A73\u7D30\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ram"
  }), `RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A08\u7B97\u5F8C\u7684\u5716\u50CF\u5B58\u5132\u5728RAM\u4E2D\u3002 MCU\u5C0DRAM\u57F7\u884C\u8B80\u548C\u5BEB\u64CD\u4F5C\u3002 \u5728\u5C07\u6240\u5F97\u5716\u50CF\u50B3\u8F38\u7D66\u986F\u793A\u5668\u6642\uFF0C\u518D\u6B21\u57F7\u884C\u8B80\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u901A\u5E38\u4F4D\u65BCMCU\u5167\u90E8\u3002 \u5982\u679C\u5C07\u6240\u5F97\u5716\u50CF\u5B58\u5132\u5728\u5167\u90E8RAM\u4E2D\u7684\u65B9\u6CD5\u4E0D\u53EF\u884C\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u5916\u90E8RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash"
  }), `Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6240\u6709\u975C\u614B\u8CC7\u6599\u5747\u5B58\u5132\u5728\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002 \u5716\u50CF\u3001\u5B57\u9AD4\u548C\u6587\u5B57\u3002 \u5FEB\u9583\u8A18\u61B6\u9AD4\u7531MCU\u8B80\u53D6\uFF0C\u5176\u5167\u5BB9\u88AB\u5BEB\u5165RAM\u6216\u8207RAM\u7684\u5167\u5BB9\u9032\u884C\u7D44\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5927\u591A\u6578\u60C5\u6CC1\u4E0B\uFF0C\u7531\u65BC\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u5F88\u5C11\u80FD\u5920\u5BB9\u7D0D\u4E0B\u6240\u6709\u5716\u5F62\u8CC7\u7522\uFF0C\u56E0\u6B64\u8A2D\u7F6E\u4E2D\u6703\u589E\u52A0\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7406\u60F3\u7684\u505A\u6CD5\u662F\u5C0D\u5FEB\u9583\u8A18\u61B6\u9AD4\u9032\u884C\u8A18\u61B6\u9AD4\u6620\u5C04\uFF0C\u4EE5\u4FBF\u5F9E\u5FEB\u9583\u8A18\u61B6\u9AD4\u76F4\u63A5\u8B80\u53D6\u50CF\u7D20\u4E26\u5BEB\u5165RAM\u3002 \u6216\u8005\uFF0C\u53EF\u5C07\u5FEB\u9583\u8A18\u61B6\u9AD4\u5167\u5BB9\u5B58\u5728RAM\u4E2D\uFF0C\u7136\u5F8C\u518D\u5F9ERAM\u8B80\u53D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display"
  }), `\u986F\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u5C07\u5716\u50CF\u5BE6\u969B\u986F\u793A\u51FA\u4F86\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u4E2D\u5132\u5B58\u7684\u5716\u50CF\u7531MCU\u6309\u56FA\u5B9A\u6642\u9593\u9593\u9694\u767C\u9001\u5230\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u5728\u9019\u7A2E\u8A2D\u7F6E\u548C\u6700\u7D42\u7684\u986F\u793A\u5668\u4E0A\u7372\u5F97\u6D41\u66A2\u7684\u52D5\u756B\u6548\u679C\uFF0C\u5728\u5BE6\u73FE\u5D4C\u5165\u5F0F\u7E6A\u5716\u7CFB\u7D71\u6642\u5FC5\u9808\u6CE8\u610F\u4E00\u4E9B\u4E8B\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "general-strategy"
  }), `\u4E00\u822C\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u52D9\u5FC5\u8003\u616E\u7684\u5E7E\u9EDE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u5728\u7121\u8B8A\u5316\u7684\u90E8\u5206\u82B1\u8CBB\u6642\u9593`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F9E\u5FEB\u9583\u8A18\u61B6\u9AD4\u50B3\u8F38\u5230RAM\u7684\u8CC7\u6599\u61C9\u76E1\u53EF\u80FD\u5C11`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F9ERAM\u50B3\u8F38\u5230\u986F\u793A\u5668\u7684\u8CC7\u6599\u61C9\u76E1\u53EF\u80FD\u5C11`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u5716\u5F62\u54C1\u8CEA\u8207\u52D5\u756B\u901F\u5EA6\u4E4B\u9593\u5C0B\u6C42\u9069\u7576\u5E73\u8861`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5229\u7528\u786C\u9AD4\u529F\u80FD`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Engine\u6709\u52A9\u65BC\u89E3\u6C7A\u6240\u6709\u9019\u4E9B\u554F\u984C\uFF0C\u4F46\u958B\u767C\u4EBA\u54E1\u4E5F\u5FC5\u9808\u6CE8\u610F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setup-specific-strategy"
  }), `\u8A2D\u7F6E\u7279\u5B9A\u7B56\u7565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5927\u91CF\u53EF\u80FD\u7684\u5D4C\u5165\u5F0F\u8A2D\u7F6E\u610F\u5473\u8457\u57FA\u65BC\u7279\u5B9A\u8A2D\u7F6E\u8207\u57FA\u65BC\u5176\u4ED6\u8A2D\u7F6E\u80FD\u5920\u5BE6\u73FE\u7684\u6548\u679C\u4E4B\u9593\u53EF\u80FD\u5B58\u5728\u5DE8\u5927\u5DEE\u7570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u80FD\u7684\u8A2D\u7F6E\u6982\u89BD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32 MCU`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `50\u81F3500 MHz\u6642\u9418\u983B\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5716\u5F62\u76F8\u95DCIP\u7684\u53EF\u80FD\u7BC4\u570D\uFF1A`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RAM`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `0\u81F31 MB\uFF08\u5167\u90E8\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `0\u81F3100 MB\uFF08\u5916\u90E8\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `0\u81F31 MB\uFF08\u5167\u90E8\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `0\u81F31 GB\uFF08\u5916\u90E8\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u986F\u793A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1\u81F324\u4F4D\u8272\u5F69`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `100x100\u81F31000x1000\u50CF\u7D20`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u7136\uFF0C\u5728\u4E00\u7A2E\u8A2D\u7F6E\u4E0A\u53EF\u5BE6\u73FE\u7684UI\u61C9\u7528\uFF0C\u5728\u53E6\u4E00\u7A2E\u8A2D\u7F6E\u4E0A\u53EF\u80FD\u6839\u672C\u7121\u6CD5\u5BE6\u73FE\u3002 \u56E0\u6B64\uFF0C\u5FC5\u9808\u6CE8\u610F\u8B93\u9700\u8981\u7684UI\u61C9\u7528\u8207\u5BE6\u969B\u8A2D\u7F6E\u4FDD\u6301\u4E00\u81F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u662F\u70BA\u9019\u4E9B\u8A2D\u7F6E\u91CD\u65B0\u8A2D\u8A08\u7684\uFF0C\u5074\u91CD\u4E8E\u6700\u5927\u7A0B\u5EA6\u5229\u7528STM32 MCU\u7684\u80FD\u529B\u4E26\u76E1\u53EF\u80FD\u6E1B\u5C11\u5C0DRAM\u548C\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u9700\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u8ACB\u53C3\u8003 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
    mdxType: "Link"
  }, "STM32 32\u4F4DArm Cortex MCUs"), " \u77AD\u89E3\u53EF\u7528\u7684STM32\u5FAE\u63A7\u5236\u5668\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u53C3\u898B", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, "\u201C\u986F\u793A\u5668\u201D"), "\u90E8\u5206\u77AD\u89E3\u95DC\u65BC\u53EF\u80FD\u7684\u986F\u793A\u5668\u9078\u9805\u7684\u8A73\u7D30\u8CC7\u8A0A\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u53C3\u898B", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-mcu",
    mdxType: "Link"
  }, "\u201CMCU\u201D"), "\u90E8\u5206\u77AD\u89E3\u95DC\u65BC\u53EF\u80FD\u7684MCU\u9078\u9805\u7684\u8A73\u7D30\u8CC7\u8A0A\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u53C3\u898B", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-external-memories",
    mdxType: "Link"
  }, "\u201C\u5916\u90E8\u8A18\u61B6\u9AD4\u201D"), "\u90E8\u5206\u77AD\u89E3\u95DC\u65BC\u53EF\u80FD\u7684\u5916\u90E8\u8A18\u61B6\u9AD4\u9078\u9805\u7684\u8A73\u7D30\u8CC7\u8A0A\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);