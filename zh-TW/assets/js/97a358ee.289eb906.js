"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9486],{

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

/***/ 36001:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
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
  id: "hardware-selection-external-memories",
  title: "\u5916\u90E8\u8A18\u61B6\u9AD4"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "id": "development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "title": "\u5916\u90E8\u8A18\u61B6\u9AD4",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-external-memories.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-external-memories",
    "title": "\u5916\u90E8\u8A18\u61B6\u9AD4"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u986F\u793A\u5668",
    "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-display"
  },
  "next": {
    "title": "\u642D\u5EFA\u958B\u767C\u677F",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/board-introduction"
  }
};
const assets = {};


const toc = [{
  value: "\u975E\u63EE\u767C\u6027\u8A18\u61B6\u9AD4",
  id: "non-volatile-memories",
  level: 2
}, {
  value: "NOR Flash",
  id: "nor-flash",
  level: 3
}, {
  value: "\u4E32\u5217NOR Flash\u8A18\u61B6\u9AD4",
  id: "serial-nor-flash-memories",
  level: 4
}, {
  value: "NOR\u55AE\u7DDA\u3001\u96D9\u7DDA\u3001\u56DB\u7DDA\u3001\u516B\u7DDA\u5FEB\u9583\u8A18\u61B6\u9AD4",
  id: "nor-single-dual-quad-octo-flash-memories",
  level: 5
}, {
  value: "\u5E73\u884CNOR Flash\u8A18\u61B6\u9AD4",
  id: "parallel-nor-flash-memories",
  level: 4
}, {
  value: "NAND\u5FEB\u9583\u8A18\u61B6\u9AD4",
  id: "nand-flash-memories",
  level: 3
}, {
  value: "eMMC\u8A18\u61B6\u9AD4",
  id: "emmc-memories",
  level: 3
}, {
  value: "\u63EE\u767C\u6027\u8A18\u61B6\u9AD4",
  id: "volatile-memories",
  level: 2
}, {
  value: "SRAM",
  id: "sram",
  level: 3
}, {
  value: "SDRAM",
  id: "sdram",
  level: 3
}, {
  value: "PSRAM",
  id: "psram",
  level: 3
}, {
  value: "\u5176\u4ED6\u8A18\u61B6\u9AD4",
  id: "additional-memories",
  level: 3
}, {
  value: "\u5916\u90E8RAM\u5BC6\u5EA6\u7684\u9078\u64C7",
  id: "selection-of-external-ram-density",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7AE0\u5167\u5BB9\u65E8\u5728\u5354\u52A9\u60A8\u70BA\u5D4C\u5165\u5F0F\u5716\u5F62\u5316\u4F7F\u7528\u8005\u4ECB\u9762\u9078\u64C7\u5916\u90E8\u8A18\u61B6\u9AD4\u3002 \u5728\u95B1\u8B80\u672C\u7AE0\u5167\u5BB9\u4E4B\u524D\uFF0C\u5EFA\u8B70\u60A8\u95B1\u8B80 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../preliminary-considerations"
  }), `\u521D\u6B65\u8003\u616E`), ` \u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection-mcu"
  }), `MCU`), `\uFF0C\u4EE5\u4FBF\u77AD\u89E3\u5728\u9078\u64C7\u5408\u9069\u7684\u5916\u90E8\u8A18\u61B6\u9AD4\u6642\u8981\u6CE8\u610F\u7684\u4E00\u4E9B\u91CD\u8981\u56E0\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57F7\u884CTouchGFX GUI\u61C9\u7528\u6642\uFF0C\u6709\u6642\u9700\u8981\u4F7F\u7528\u5916\u90E8\u8A18\u61B6\u9AD4\u4F86\u5B58\u5132\u5F71\u50CF\u7DE9\u885D\u3001\u9EDE\u9663\u5716\u3001\u5B57\u9AD4\u548C\u8F49\u63DB\u8CC7\u8A0A\u7B49\u3002 TouchGFX GUI\u7684\u57F7\u884C\u4E0D\u4F9D\u8CF4\u5916\u90E8\u8A18\u61B6\u9AD4\uFF0C\u4F46\u9700\u8981\u4F7F\u7528\u5167\u90E8RAM\uFF08\u5728MCU\u4E2D\uFF09\u6216\u5916\u90E8RAM\u4F86\u5B58\u5132\u5F71\u50CF\u7DE9\u885D\uFF0C\u4E26\u7528\u5167\u90E8\u548C/\u6216\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4F86\u5B58\u5132\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7684\u8A18\u61B6\u9AD4\u7E3D\u89BD\u5C55\u793A\u4E86\u4E00\u4E9B\u53EF\u8207STM32 MCU\u4E00\u8D77\u4F7F\u7528\u7684\u5916\u90E8\u8A18\u61B6\u9AD4\u3002 \u4E00\u4E9B\u4E0D\u540C\u7684\u8A18\u61B6\u9AD4\u7BC4\u4F8B\u540C\u6642\u63D0\u4F9B\u4E86\u4E32\u5217\u548C\u5E73\u884C\u4ECB\u9762\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/memory-overview.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u8A18\u61B6\u9AD4\u7E3D\u89BD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0D\u540C\u7684STM32\u5FAE\u63A7\u5236\u5668\u5177\u6709\u4E0D\u540C\u7684\u5916\u90E8\u8A18\u61B6\u9AD4\u4ECB\u9762\uFF0C\u53EF\u4EE5\u9023\u63A5\u4E0D\u540C\u7684\u5916\u90E8\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "non-volatile-memories"
  }), `\u975E\u63EE\u767C\u6027\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728GUI\u61C9\u7528\u4E2D\uFF0C\u975E\u63EE\u767C\u6027\u5B58\u5132\uFF08\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF09\u4E3B\u8981\u7528\u65BC\u5B58\u5132\u4E00\u4E9B\u6216\u5168\u90E8\u5716\u5F62\u8CC7\u6599\u8CC7\u7522\uFF0C\u5982\u9EDE\u9663\u5716\u3001\u5B57\u9AD4\u3001\u8F49\u63DB\u8CC7\u8A0A\u548CTouchGFX\u61C9\u7528\u7A0B\u5F0F\u78BC\u3002 STM32\u7522\u54C1\u652F\u63F4\u975E\u63EE\u767C\u6027\u8A18\u61B6\u9AD4\uFF0C\u53EF\u4F7F\u7528\u5E73\u884C\u6216\u4E32\u5217\u8A18\u61B6\u9AD4\u548C\u4E0D\u540C\u914D\u7F6E\uFF0C\u901A\u904E\u4E0D\u540C\u985E\u578B\u7684MCU\u4ECB\u9762\u9032\u884C\u9023\u63A5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/non-volatile-memory-overview.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u975E\u63EE\u767C\u6027\u8A18\u61B6\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u64DA\u4EE5\u4E0B\u8981\u7D20\u9078\u64C7\u975E\u63EE\u767C\u6027\u5B58\u5132\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BC6\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ECB\u9762\u985E\u5225\u578B\uFF08\u4E26\u884C/\u4E32\u5217\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6750\u6599\u6E05\u55AE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "nor-flash"
  }), `NOR Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR Flash\u662F\u4E00\u7A2E\u975E\u63EE\u767C\u6027\u8A18\u61B6\u9AD4\uFF0C\u5141\u8A31\u5C0D\u8A18\u61B6\u9AD4\u4E2D\u7684\u4EFB\u4F55\u5340\u57DF\u9032\u884C\u96A8\u6A5F\u5B58\u53D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR Flash\u7684\u5927\u5C0F\u901A\u5E38\u4ECB\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `128 Mbits`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `2 Gbits`), `\u4E4B\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F8B\u5982\uFF0C\u7576\u89E3\u6790\u5EA6\u70BA480x320\u3001\u8272\u6DF1\u70BA16\u4F4D\u5143\u6BCF\u50CF\u7D20\u6642\uFF0C\u4F7F\u7528\u8005\u4ECB\u9762\u9700\u8981\u7684\u5168\u5C4F\u80CC\u666F\u5716\u50CF\u7D04\u70BA300 kB\u3002 \u5176\u4E2D\u4E0D\u5305\u62EC\u4F7F\u7528\u7684\u6309\u9215\u3001\u6ED1\u52D5\u689D\u3001\u5716\u793A\u548C\u5B57\u9AD4\u4EE5\u53CA\u8A9E\u8A00\u6578\u91CF\u7B49\u6240\u9700\u7684\u984D\u5916\u9EDE\u9663\u5716\u3002 256 Mbits (32 MB) NOR Flash\u53EF\u5B58\u5132\u6700\u591A\u7D04100\u5F35\u5168\u5C4F\u5716\u50CF\uFF0C\u5982\u679C\u52A0\u4E0A\u5176\u4ED6\u9700\u8981\u7684\u5716\u5F62\uFF0C\u5C07\u5C11\u65BC\u9019\u500B\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8A18\u61B6\u9AD4\u6620\u5C04`), ` \u6A21\u5F0F\u4E0B\u4F7F\u7528NOR Flash\uFF0C\u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u88AB\u8996\u70BA\u8B80\u53D6\u64CD\u4F5C\u7684\u5167\u90E8\u8A18\u61B6\u9AD4\u3002 \u8A72\u6A21\u5F0F\u5141\u8A31\u7CFB\u7D71\u4E3B\u6A5F\uFF08\u5982DMA\u3001LTDC\u3001DMA2D\u3001GFXMMU\u6216SDMMC\uFF09\u81EA\u4E3B\u8A2A\u554F\u8A18\u61B6\u9AD4\uFF0C\u5373\u4F7F\u5728CPU\u505C\u6B62\u6642\u7684\u4F4E\u529F\u8017\u6A21\u5F0F\u4E0B\u4E5F\u4E0D\u4F8B\u5916\uFF0C\u662F\u79FB\u52D5\u548C\u53EF\u7A7F\u6234\u61C9\u7528\u7684\u7406\u60F3\u9078\u64C7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR Flash\u8A18\u61B6\u9AD4\u6709\u4E0D\u540C\u7684\u4ECB\u9762\u9078\u9805\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E73\u884CNOR Flash\uFF08\u5177\u6709x8\u6216x16\u4ECB\u9762\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E32\u5217NOR Flash\uFF08\u4E32\u5217\u8A18\u61B6\u9AD4\u7684\u55AE\u3001\u96D9\u3001\u56DB\u548C\u516B\u8CC7\u6599\u7DDA\uFF0C\u4EE5\u53CAHyperBus\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "serial-nor-flash-memories"
  }), `\u4E32\u5217NOR Flash\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E32\u5217NOR Flash\u8A18\u61B6\u9AD4\u88AB\u5EE3\u6CDB\u7528\u4F5C\u70BA\u5716\u5F62\u61C9\u7528\u4E2D\u7684\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u985E\u5B58\u5132\u5668\u5177\u6709\u8AF8\u5982\u4EE5\u4E0B\u512A\u52E2\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9AD8\u983B\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7C21\u5316\u4E26\u7E2E\u5C0F\u4E86\u5370\u5237\u96FB\u8DEF\u677F\uFF08PCB\uFF09\u7684\u5340\u57DF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F\u7684\u53EF\u5B9A\u5740\u5340\u70BA\u6700\u5927`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `256Mbytes`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9700\u8981\u7684\u5F15\u8173\u6578\u4ECB\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `4`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `12`), `\u500B\u4E4B\u9593`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "nor-single-dual-quad-octo-flash-memories"
  }), `NOR\u55AE\u7DDA\u3001\u96D9\u7DDA\u3001\u56DB\u7DDA\u3001\u516B\u7DDA\u5FEB\u9583\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR Flash\u8A18\u61B6\u9AD4\u6709\u4E0D\u540C\u7684\u8CC7\u6599\u7DDA\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u55AE\u7DDA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u96D9\u7DDA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u56DB\u7DDA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u516B\u7DDA`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5207\u63DB\u81F3\u914D\u5099\u66F4\u591A\u8CC7\u6599\u7DDA\u7684\u4E32\u5217NOR Flash\u8A18\u61B6\u9AD4\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\u548C\u8A18\u61B6\u9AD4\u4ECB\u9762\u983B\u5BEC\uFF0C\u4F46\u4E5F\u9700\u8981\u66F4\u591A\u5F15\u8173\u4F86\u9023\u63A5STM32\u7522\u54C1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u6839\u64DA\u8CC7\u6599\u7DDA\u6578\u91CF\u5217\u51FA\u7684\u4E0D\u540CSPI\u8A18\u61B6\u9AD4\u7E3D\u89BD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/serial-modes.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u5E8F\u5217\u4ECB\u9762\u7E3D\u89BD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "parallel-nor-flash-memories"
  }), `\u5E73\u884CNOR Flash\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6027\u80FD\u548C\u914D\u7F6E\u65B9\u9762\uFF0C\u5E73\u884CNOR Flash\u8A18\u61B6\u9AD4\u5177\u6709\u8207\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u76F8\u540C\u7684\u512A\u52E2\u3002 \u5E73\u884CNOR Flash\u53EF\u914D\u7F6E\u70BA\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F\uFF0C\u4E26\u80FD\u50CF\u5167\u90E8\u8A18\u61B6\u9AD4\u4E00\u6A23\u9032\u884C\u5B58\u53D6\u3002 \u5E73\u884C\u548C\u4E32\u5217NOR Flash\u4E4B\u9593\u7684\u5DEE\u7570\u5728\u65BC\u5F15\u8173\u6578\u548C\u5370\u5237\u96FB\u8DEF\u677F\uFF08PCB\uFF09\u7684\u8907\u96DC\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Up to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `47 pins`), ` are needed for the NOR flash memory with up to 24 pins for address and 16 pins for data.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "nand-flash-memories"
  }), `NAND\u5FEB\u9583\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NAND Flash\u8A18\u61B6\u9AD4\u662F\u9700\u8981\u5927\u91CF\u5716\u5F62\u8CC7\u6599\u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u66F4\u5FEB\u5BEB\u5165\u8207\u64E6\u9664\u64CD\u4F5C`), `\u7684\u5716\u5F62\u61C9\u7528\u7684\u7406\u60F3\u9078\u64C7\u3002 The NAND flash memories cannot be configured in a memory mapped mode and as a consequence, the NAND flash memories are `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `not recommended for code execution`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NAND flash ranges between `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `1 Gbits`), ` to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `512 Gbits`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u7528NAND Flash\u6642\uFF0C\u901A\u5E38\u5FC5\u9808\u4F7F\u7528RAM\u4E2D\u7684\u7DE9\u5B58\u3002 \u5982\u6B64\u4E00\u4F86\uFF0C\u53EF\u4EE5\u5C07\u7576\u524D\u4F7F\u7528\u7684\u5716\u5F62\u8CC7\u6599\u79FB\u52D5\u5230RAM\uFF0C\u4E26\u5F9E\u7DE9\u5B58\u4E2D\u7372\u53D6\u5B83\u5011\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/nand-flash.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "NAND\u5FEB\u9583\u8A18\u61B6\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "emmc-memories"
  }), `eMMC\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eMMC\uFF08\u5D4C\u5165\u5F0F\u591A\u5A92\u9AD4\u5361\uFF09\u7531MMC\u5354\u6703\u8A02\u7ACB\uFF0C\u76F8\u7576\u65BC\u4E00\u500BNAND Flash\u52A0\u4E00\u500B\u4E3B\u96C6\u6210\u63A7\u5236\u5668\u3002 eMMC\u7684\u4E00\u500B\u660E\u986F\u512A\u52E2\u662F\u5728\u5C01\u88DD\u4E2D\u96C6\u6210\u4E86\u63A7\u5236\u5668\uFF0C\u5F9E\u800C\u63D0\u4F9B\u4E86\u6A19\u6E96\u4ECB\u9762\u548C\u5FEB\u9583\u8A18\u61B6\u9AD4\u7BA1\u7406\uFF0C\u4F7F\u88FD\u9020\u5546\u80FD\u5920\u5C07\u7CBE\u529B\u96C6\u4E2D\u5728\u7522\u54C1\u958B\u767C\u7684\u5176\u4ED6\u90E8\u4EFD\uFF0C\u9032\u800C\u7E2E\u77ED\u4E0A\u5E02\u6642\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eMMC Flash\u7684\u5927\u5C0F\u4ECB\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `2 Gbits`), ` \u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `128 Gbits`), `\u4E4B\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76F8\u6BD4\u65BCNAND\u548CNOR\uFF0CeMMC\u7684\u96A8\u6A5F\u8B80\u53D6\u6027\u80FD\u76F8\u5C0D\u8F03\u4F4E\u3002 eMMC\u53EF\u80FD\u9700\u8981\u6DFB\u52A0\u7DE9\u5B58\u4F86\u514B\u670D\u96A8\u6A5F\u8B80\u53D6\u901F\u5EA6\u7DE9\u6162\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eMMC Flash\u8A18\u61B6\u9AD4\u9700\u8981\u6700\u591A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `10\u500B\u5F15\u8173`), ` \uFF0C\u5305\u62EC8\u500B\u8CC7\u6599\u5F15\u8173\u548C2\u500B\u63A7\u5236\u5F15\u8173\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/emmc-flash.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "eMMC\u8A18\u61B6\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "volatile-memories"
  }), `\u63EE\u767C\u6027\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8\u63EE\u767C\u6027\u8A18\u61B6\u9AD4\u4E3B\u8981\u7528\u65BC\u5B58\u5132\u5F71\u50CF\u7DE9\u885D\uFF08\u82E5\u5167\u90E8MCU RAM\u4E0D\u5920\u7528\uFF09\uFF0C\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u7528\u65BC\u7DE9\u5B58\u4F86\u81EA\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u8CC7\u6599\u3002 \u672C\u7BC0\u4E3B\u8981\u4ECB\u7D39SRAM\u3001SDRAM\u548CPSRAM\uFF0C\u5B83\u5011\u901A\u5E38\u7528\u5728\u57F7\u884CGUI\u7684\u5D4C\u5165\u5F0F\u7CFB\u7D71\u4E2D\u3002 \u4F46\u9084\u6709\u5176\u4ED6\u53EF\u7528\u7684\u8B8A\u578B\uFF0C\u8A18\u61B6\u9AD4\u88FD\u9020\u5546\u5C0D\u5176\u8A18\u61B6\u9AD4\u4F7F\u7528\u4E0D\u540C\u547D\u540D\u6A21\u5F0F\uFF0C\u5982\u201Chyper RAM\u201D\u3001\u201CIoT RAM\u201D\u548C\u201Coctal RAM\u201D\u3002 \u5176\u4E2D\u7684\u5927\u591A\u6578\u90FD\u53EF\u4EE5\u627E\u5230\u652F\u63F4\u5B83\u7684STM32 MCU\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/volatile-memory-overview.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u63EE\u767C\u6027\u8A18\u61B6\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9078\u64C7\u5408\u9069\u7684\u5916\u90E8RAM\u6642\uFF0C\u5EFA\u8B70\u6CE8\u610F\u4EE5\u4E0B\u8981\u7D20\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BC6\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u529F\u8017`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ECB\u9762/\u5F15\u8173\u5C3A\u5BF8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../../../basic-concepts/framebuffer#amount-of-framebuffers"
  }), `\u5F71\u50CF\u7DE9\u885D\u5340\u914D\u7F6E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "sram"
  }), `SRAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SRAM\u662F\u975C\u614B\u96A8\u6A5F\u5B58\u53D6\u8A18\u61B6\u9AD4\uFF0C\u53EA\u8981\u6709\u4F9B\u96FB\uFF0C\u5C31\u80FD\u4FDD\u5B58\u4F4D\u5143\u8CC7\u6599\u3002 \u4E00\u822C\u800C\u8A00\uFF0CSRAM\u7684\u5B58\u53D6\u901F\u5EA6\u66F4\u5FEB\uFF0C\u4E14\u5BC6\u5EA6\u66F4\u5C0F\uFF0C\u4F46\u50F9\u683C\u9AD8\u65BCDRAM\u3002 \u76F8\u6BD4\u65BCDRAM\uFF0CSRAM\u7684\u5B58\u53D6\u6642\u9593\u901A\u5E38\u66F4\u77ED\uFF0C\u56E0\u6B64\u66F4\u9069\u5408\u9700\u8981\u66F4\u591A\u52D5\u756B\u3001\u7E2E\u653E\u548C\u65CB\u8F49\u7B49\u64CD\u4F5C\u7684GUI\u3002 SRAM\u5177\u6709\u540C\u6B65\u548C\u975E\u540C\u6B65\u6A21\u5F0F\uFF0C\u540C\u6B65\u6A21\u5F0F\u63D0\u4F9B\u66F4\u9AD8\u7684\u983B\u5BEC\u80FD\u529B\uFF0C\u4F46\u4ECB\u9762\u66F4\u8907\u96DC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u6B64\u5916\uFF0C\u9084\u6709\u975E\u63EE\u767C\u6027\u96A8\u6A5F\u5B58\u53D6\u8A18\u61B6\u9AD4nvSRAM\uFF0C\u4E5F\u80FD\u5B58\u5132\u548C\u63D0\u53D6\u8CC7\u6599\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "sdram"
  }), `SDRAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SDRAM\u662F\u4E00\u7A2E\u52D5\u614B\u96A8\u6A5F\u5B58\u53D6\u8A18\u61B6\u9AD4\uFF0C\u5B83\u4FDD\u5B58\u96FB\u5BB9\u4E0A\u7684\u6BCF\u4E00\u500B\u8CC7\u6599\u4F4D\u5143\u3002\u76F8\u6BD4\u65BCSRAM\uFF0CSDRAM\u80FD\u7528\u66F4\u5C0F\u7684\u7269\u7406\u7A7A\u9593\u5B58\u5132\u76F8\u540C\u6578\u91CF\u7684\u8CC7\u6599\u3002 \u70BA\u4E86\u4FDD\u5B58\u8CC7\u6599\uFF0CSDRAM\u9700\u8981\u4E0D\u65B7\u5237\u65B0\uFF0C\u56E0\u6B64\u5176\u80FD\u8017\u9AD8\u65BCSRAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SDRAM\u7684\u5BC6\u5EA6\u901A\u5E38\u70BA16 Mbits\u81F3512 Mbits\uFF0C\u901A\u904E8\u300116\u548C32\u4F4D\u5143\u4ECB\u9762\u63D0\u4F9B\uFF0C\u904B\u884C\u983B\u7387\u70BA100-200 MHz\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u57F7\u884C24bpp 800*480\u89E3\u6790\u5EA6\u7684\u96D9\u5F71\u50CF\u7DE9\u885D\u7B56\u7565\u4E2D\uFF0C\u9700\u8981\u7D0432 Mbits SDRAM\u4EE5\u53CA\u7D0418 Mbits\u7684RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "psram"
  }), `PSRAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PSRAM\u662F\u865B\u64EC\u975C\u614B\u96A8\u6A5F\u5B58\u53D6\u8A18\u61B6\u9AD4\uFF0C\u5177\u6709DRAM\uFF08\u63A7\u5236\u908F\u8F2F\uFF09\u7684\u5167\u90E8\u7D50\u69CB\u548CSRAM\u4ECB\u9762\u3002 \u5B83\u7684\u5BC6\u5EA6\u901A\u5E38\u70BA8-256 Mbits\u3002 \u76F8\u6BD4\u4E8E\u50B3\u7D71\u7684SDRAM\u548CSRAM\uFF0CPSRAM\u7684\u512A\u52E2\u5728\u65BC\u901F\u5EA6\u66F4\u5FEB\u4E14\u529F\u8017\u66F4\u4F4E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-memories"
  }), `\u5176\u4ED6\u8A18\u61B6\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u7684octal RAM\u548CHyper RAM\u8A18\u61B6\u9AD4\u5728\u55AE\u548C\u96D9\u6578\u64DA\u7387\u6A21\u5F0F\u4E0B\u4F7F\u7528\u4E32\u52178\u4F4D\u5143\u4ECB\u9762\uFF0C\u53EF\u5BE6\u73FE\u9AD8\u541E\u5410\u7387\u548C\u826F\u597D\u7684\u96C6\u6210\u6548\u679C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selection-of-external-ram-density"
  }), `\u5916\u90E8RAM\u5BC6\u5EA6\u7684\u9078\u64C7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u7684\u7B56\u7565\u662F\u5C07\u5F71\u50CF\u7DE9\u885D\u653E\u5728\u5916\u90E8RAM\u4E2D\uFF0C\u6B64\u8868\u662F\u5E02\u9762\u4E0A\u63D0\u4F9B\u7684\u4E0D\u540CRAM\u5BC6\u5EA6\u7684\u7E3D\u89BD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B83\u9084\u63D0\u4F9B\u4E86\u4EE51\u30012\u30014\u30018\u300116\u548C24\u4F4D\u5143\u6BCF\u50CF\u7D20\u7684\u5BC6\u5EA6\uFF08\u9664\u4EE52\u53EF\u5F97\u51FA\u55AE\u500B\u5F71\u50CF\u7DE9\u885D\u6240\u9700\u5BC6\u5EA6\uFF09\u904B\u884C\u96D9\u5F71\u50CF\u7DE9\u885D\u8A2D\u7F6E\u6240\u9700RAM\u7684\u7E3D\u89BD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u55AE\u5F71\u50CF\u7DE9\u885D\u914D\u7F6E\u5DF2\u7D93\u8DB3\u5920\uFF0C\u4E26\u4E14\u5728\u67D0\u4E9BSTM32\u5FAE\u63A7\u5236\u5668\u4E2D\uFF0C\u6703\u6709\u8DB3\u5920\u7684\u5167\u90E8RAM\u7528\u65BC\u5BB9\u7D0D\u5F71\u50CF\u7DE9\u885D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/sdram-octospi-densities.png",
    noShadow: true,
    mdxType: "Figure"
  }, "SDRAM\u548COctoSPI\u5BC6\u5EA6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/required-ram-for-double-framebuffer-setup.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u96D9\u5F71\u50CF\u7DE9\u885D\u8A2D\u7F6E\u6240\u9700RAM"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);