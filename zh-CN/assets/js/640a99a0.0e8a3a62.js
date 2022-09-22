"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7084],{

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

/***/ 94499:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93054);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39130);
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
  id: "11-flash-loader",
  title: "11. \u95EA\u5B58\u4E0B\u8F7D",
  sidebar_label: "11. \u95EA\u5B58\u4E0B\u8F7D"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/11-flash-loader",
  "id": "development/board-bring-up/how-to/11-flash-loader",
  "title": "11. \u95EA\u5B58\u4E0B\u8F7D",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/11-flash-loader.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/11-flash-loader",
  "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/11-flash-loader",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 11,
  "frontMatter": {
    "id": "11-flash-loader",
    "title": "11. \u95EA\u5B58\u4E0B\u8F7D",
    "sidebar_label": "11. \u95EA\u5B58\u4E0B\u8F7D"
  },
  "sidebar": "docs",
  "previous": {
    "title": "10. \u6309\u94AE",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/10-physical-buttons"
  },
  "next": {
    "title": "TouchGFX\u5F00\u53D1\u7B80\u4ECB",
    "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }
};
const assets = {};


const toc = [{
  value: "\u52A8\u673A",
  id: "motivation",
  level: 2
}, {
  value: "\u76EE\u6807",
  id: "goal",
  level: 2
}, {
  value: "\u9A8C\u8BC1",
  id: "verification",
  level: 3
}, {
  value: "\u5148\u51B3\u6761\u4EF6",
  id: "prerequisites",
  level: 2
}, {
  value: "\u6267\u884C",
  id: "do",
  level: 2
}, {
  value: "STM32CubeProgrammer\u7684\u95EA\u5B58\u88C5\u8F7D\u8F6F\u4EF6",
  id: "flash-loader-for-stm32cubeprogrammer",
  level: 3
}, {
  value: "\u57FA\u4E8E\u5E94\u7528\u7A0B\u5E8F\u7684\u4E13\u6709\u89E3\u51B3\u65B9\u6848",
  id: "proprietary-application-based-solution",
  level: 3
}, {
  value: "\u6D4B\u8BD5",
  id: "testing",
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
  }), `\u52A8\u673A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE5\u6B65\u9AA4\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u5982\u4F55\u628A\u6570\u636E\u52A0\u8F7D\u5230\u5916\u90E8\u95EA\u5B58\u3002 \u7F16\u8BD1\u5668\u5C06\u7F16\u8BD1\u9879\u76EE\u4E2D\u7684\u6587\u5B57\u3001\u5B57\u5E93\u548C\u56FE\u50CF\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u6570\u636E\u751F\u6210\u4E8C\u8FDB\u5236\u6216\u5341\u516D\u8FDB\u5236\u6587\u4EF6\u3002 \u6B64\u6570\u636E\u901A\u5E38\u88AB\u653E\u5165\u5916\u90E8\u95EA\u5B58\u3002 \u5185\u90E8\u95EA\u5B58\u88AB\u4FDD\u7559\u7528\u4E8E\u7A0B\u5E8F\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u65B9\u6CD5\u5C06\u6570\u636E\u5199\u5165\u5916\u90E8\u95EA\u5B58\uFF0C\u5F53\u7136\uFF0C\u4ECE\u95EA\u5B58\u8BFB\u53D6\u6570\u636E\u6267\u884C\u7A0B\u5E8F\u65F6\u5C31\u6CA1\u5FC5\u8981\u505A\u5199\u5165\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u65B9\u6CD5\u5C06\u6570\u636E\u5199\u5165\u5916\u90E8\u95EA\u5B58\uFF0C\u5F53\u7136\uFF0C\u4ECE\u95EA\u5B58\u8BFB\u53D6\u6570\u636E\u6267\u884C\u7A0B\u5E8F\u65F6\u5C31\u6CA1\u5FC5\u8981\u505A\u5199\u5165\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3ASTM32CubeProgrammer\u7F16\u5199\u95EA\u5B58\u88C5\u8F7D\u8F6F\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528\u57FA\u4E8E\u5E94\u7528\u7A0B\u5E8F\u7684\u4E13\u6709\u89E3\u51B3\u65B9\u6848`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5982\u679C\u4F60\u7684\u5F00\u53D1\u677F\u6CA1\u6709\u5916\u90E8\u95EA\u5B58\uFF0C\u8BF7\u8DF3\u8FC7\u6B64\u6B65\u9AA4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6807`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E24\u79CD\u5C06\u6570\u636E\u5199\u5165\u5916\u90E8\u95EA\u5B58\u7684\u5E38\u89C1\u65B9\u6CD5\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u9A8C\u8BC1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u65E8\u5728\u9009\u62E9\u5E76\u5F00\u53D1\u4E00\u79CD\u5C06\u6570\u636E\u52A0\u8F7D\u5230\u5916\u90E8\u95EA\u5B58\u7684\u673A\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9A8C\u8BC1\u70B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `\u6570\u636E\u53EF\u4EE5\u5237\u5165`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8\u95EA\u5B58\u53EF\u7528\u4E8E\u56FE\u50CF\u5B58\u50A8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u5148\u51B3\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u672C\u8282\u7684\u9A8C\u8BC1\u70B9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u5173\u95EA\u5B58\u7684\u4FE1\u606F\uFF0C\u67E5\u9605\u6570\u636E\u624B\u518C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u5173MCU\u548C\u5916\u90E8\u95EA\u5B58\u4E4B\u95F4\u7684\u8FDE\u63A5\u7684\u4FE1\u606F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u6267\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash-loader-for-stm32cubeprogrammer"
  }), `STM32CubeProgrammer\u7684\u95EA\u5B58\u88C5\u8F7D\u8F6F\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubeprog.html"
  }), `STM32CubeProgrammer`), `\u5E26\u6709\u7528\u4E8E\u5404\u79CDSTM32\u8BC4\u4F30\u5957\u4EF6\u7684\u95EA\u5B58\u88C5\u8F7D\u7A0B\u5E8F\u3002 \u95EA\u5B58\u88C5\u8F7D\u8F6F\u4EF6\u662F\u53EF\u88C5\u8F7D\u5230MCU\u7684RAM\u4E2D\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u4EE5\u4FBF\u5BF9\u95EA\u5B58\u8FDB\u884C\u7F16\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95EA\u5B58\u88C5\u8F7D\u8F6F\u4EF6\u5305\u62EC\u4E24\u90E8\u5206:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u914D\u7F6E\u4E0E\u95EA\u5B58\u901A\u4FE1\u6240\u9700\u7684GPIO\u548C\u95EA\u5B58\u63A5\u53E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9002\u914D\u95EA\u5B58\u7F16\u7A0B\u6240\u9700\u7684\u6307\u4EE4\u5E8F\u5217\u7684\u95EA\u5B58\u7B97\u6CD5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4E9B\u901A\u5E38\u57FA\u4E8E\u73B0\u6709\u7684\u95EA\u5B58\u88C5\u8F7D\u7A0B\u5E8F\u3002 \u5982\u679C\u60A8\u53EF\u4EE5\u4E3A\u6B63\u5728\u4F7F\u7528\u7684\u95EA\u5B58\u627E\u5230\u95EA\u5B58\u88C5\u8F7D\u8F6F\u4EF6\uFF0C\u6700\u597D\u5C06\u8BE5\u8F6F\u4EF6\u4F5C\u4E3A\u84DD\u672C\u5E76\u4FEE\u6539GPIO\u90E8\u5206\u3002 \u5982\u679C\u60A8\u901A\u8FC7\u590D\u5236\u8BC4\u4F30\u5957\u4EF6\u4E2D\u7684\u95EA\u5B58\u7535\u8DEF\u6765\u8BBE\u8BA1\u786C\u4EF6\uFF0C\u5219\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8BE5\u5957\u4EF6\u7684\u95EA\u5B58\u88C5\u8F7D\u8F6F\u4EF6\u3002 This is the way.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `STM32CubeProgrammer`), `\u968F\u9644\u7684\u95EA\u5B58\u88C5\u8F7D\u8F6F\u4EF6\u9879\u76EE\u4F4D\u4E8E\u5B89\u88C5\u6587\u4EF6\u5939\u4E2D\uFF0C\u5176\u8DEF\u5F84\u901A\u5E38\u4E3A\uFF1A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer\\bin\\ExternalLoader`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash loader projects can also be found on github:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    to: "https://github.com/STMicroelectronics/stm32-external-loader",
    mdxType: "Link"
  }, "STM32 External Flashloaders on GitHub"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "proprietary-application-based-solution"
  }), `\u57FA\u4E8E\u5E94\u7528\u7A0B\u5E8F\u7684\u4E13\u6709\u89E3\u51B3\u65B9\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\u662F\u5C06\u95EA\u5B58\u52A0\u8F7D\u4EE3\u7801\u5305\u542B\u5230\u5E94\u7528\u7A0B\u5E8F\u672C\u8EAB\u3002 \u8BE5\u7406\u5FF5\u662F\uFF0C\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5DF2\u5B58\u5728\u95EA\u5B58\u914D\u7F6E(\u4EE5\u4FBF\u53EF\u4EE5\u4ECE\u5176\u52A0\u8F7D) \uFF0C\u4E5F\u8BB8\u60A8\u901A\u8FC7\u4E4B\u524D\u7684\u6D4B\u8BD5\u5DF2\u7ECF\u77E5\u9053\u5982\u4F55\u5199\u4E00\u5757\u4EE3\u7801\u5230\u95EA\u5B58\u4E2D\u3002 \u7136\u540E\uFF0C\u60A8\u53EA\u9700\u4E00\u79CD\u5C06\u65B0\u7684\u95EA\u5B58\u6570\u636E\u4F20\u8F93\u5230\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u65B9\u6CD5\u3002 \u4E00\u79CD\u65B9\u6CD5\u662F\u901A\u8FC7UART\u3002 \u5E94\u7528\u7A0B\u5E8F\u63A5\u6536\u6570\u636E\u6D41\uFF0C\u5E76\u5C06\u6570\u636E\u9010\u5757\u5199\u5165\u95EA\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE5\u64CD\u4F5C\u6267\u884C\u671F\u95F4\uFF0C\u95EA\u5B58\u65E0\u6CD5\u5904\u4E8E\u5B58\u50A8\u5668\u6620\u5C04\u6A21\u5F0F\uFF0C\u56E0\u6B64\u901A\u5E38\u5FC5\u987B\u5C06\u5E94\u7528\u7A0B\u5E8F\u7F6E\u4E8E\u7279\u6B8A\u6A21\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5728\u4E92\u8054\u7F51\u4E0A\u627E\u5230\u7528\u4E8E\u5B57\u8282\u4F20\u8F93\u7684\u5F00\u6E90\u89E3\u51B3\u65B9\u6848\u3002 \u4F8B\u5982\uFF0CY-modem\u534F\u8BAE\u5728\u6570\u636E\u4E0A\u63D0\u4F9B16\u4F4DCRC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "testing"
  }), `\u6D4B\u8BD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5728\u4E92\u8054\u7F51\u4E0A\u627E\u5230\u7528\u4E8E\u5B57\u8282\u4F20\u8F93\u7684\u5F00\u6E90\u89E3\u51B3\u65B9\u6848\u3002 \u4F8B\u5982\uFF0CY-modem\u534F\u8BAE\u5728\u6570\u636E\u4E0A\u63D0\u4F9B16\u4F4DCRC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5EFA\u8BAE\u7ACB\u5373\u5F7B\u5E95\u6D4B\u8BD5\u6574\u4E2A\u95EA\u5B58\uFF0C\u4EE5\u5C3D\u65E9\u53D1\u73B0\u53EF\u80FD\u5B58\u5728\u7684\u95EE\u9898\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);