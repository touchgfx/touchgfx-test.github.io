"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6079],{

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

/***/ 47353:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
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
  id: "02-cpu-running",
  title: "2. CPU\u8FD0\u884C",
  sidebar_label: "2. CPU\u8FD0\u884C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/02-cpu-running",
  "id": "development/board-bring-up/how-to/02-cpu-running",
  "title": "2. CPU\u8FD0\u884C",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/02-cpu-running.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/02-cpu-running",
  "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/02-cpu-running",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "id": "02-cpu-running",
    "title": "2. CPU\u8FD0\u884C",
    "sidebar_label": "2. CPU\u8FD0\u884C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "1. \u521B\u5EFA\u9879\u76EE",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/01-create-project"
  },
  "next": {
    "title": "3. \u663E\u793A\u5668\u7684\u5E27\u7F13\u5B58\u4F4D\u4E8E\u5185\u90E8RAM\u4E2D",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/03-display-internal"
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
  value: "\u7CFB\u7EDF\u65F6\u949F",
  id: "system-clock",
  level: 3
}, {
  value: "\u95EA\u5B58\u4E0ERAM\u5927\u5C0F\u548C\u901F\u5EA6",
  id: "flash-and-ram-size-and-speed",
  level: 3
}, {
  value: "\u94FE\u63A5\u5668\u811A\u672C",
  id: "linker-script",
  level: 3
}, {
  value: "F7\u548CH7\u4E0A\u7684\u7F13\u5B58",
  id: "cache-on-f7-and-h7",
  level: 3
}, {
  value: "TouchGFX\u5185\u90E8DCache\u72B6\u6001\u673A",
  id: "touchgfx-internal-dcache-state-machine",
  level: 4
}, {
  value: "\u66F4\u591A\u8BFB\u7269",
  id: "further-readings",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "motivation"
  }), `\u52A8\u673A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u8981\u786E\u4FDDMCU\u5185\u6838\u3001\u5185\u90E8RAM\u548C\u95EA\u5B58\u4EE5\u6240\u9700\u7684\u65F6\u949F\u901F\u5EA6\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u53EF\u5728\u4EFB\u4F55MCU\u901F\u5EA6\u4E0B\u8FD0\u884C\uFF0C\u4F46\u9519\u8BEF\u7684\u65F6\u949F\u914D\u7F6E\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4F4E\u4E8E\u5FC5\u8981\u7684\u6027\u80FD\u3002 \u968F\u540E\uFF0C\u57FA\u4E8E\u60A8\u7684\u5F00\u53D1\u677F\uFF0C\u9700\u8981\u914D\u7F6E\u7279\u5B9A\u65F6\u5E8F\u53C2\u6570\uFF0C\u5982\u89E6\u6478\u63A7\u5236\u5668\u7684I2C\u65F6\u949F\u3002 \u82E5\u4E0D\u80FD\u786E\u4FDDMCU\u4EE5\u6B63\u786E\u7684\u901F\u5EA6\u8FD0\u884C\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u65E0\u6CD5\u751F\u6548\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8ESTM32\u5FAE\u63A7\u5236\u5668\uFF0C\u60A8\u9700\u8981\u8BBE\u7F6E\u7CFB\u7EDF\u65F6\u949F\u3002 \u7136\u540E\u5BF9\u8BE5\u65F6\u949F\u8FDB\u884C\u5206\u9891\uFF0C\u4EE5\u751F\u6210FCLK\u5185\u6838\u65F6\u949F\u548C\u5404\u79CD\u5916\u8BBE\u65F6\u949F\uFF0C\u5982APB1\u5916\u8BBE\u65F6\u949F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6807`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u7684\u76EE\u6807\u4E3A\u4FEE\u6539\u9879\u76EE\uFF0C\u4EE5\u83B7\u5F97\u6B63\u786E\u7684\u65F6\u949F\u914D\u7F6E\u3002 \u60A8\u8FD8\u5E94\u9A8C\u8BC1\u5185\u90E8RAM\u548C\u95EA\u5B58\u662F\u5426\u4EE5\u9884\u671F\u901F\u5EA6\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u9A8C\u8BC1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u672C\u8282\u7684\u9A8C\u8BC1\u70B9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `SystemCoreClock\u7684\u53D8\u91CF\u503C\u6B63\u786E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5FAE\u63A7\u5236\u5668\u88AB\u914D\u7F6E\u4E3A\u6309\u6240\u9700\u9891\u7387\u8FD0\u884C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8RAM\u53EF\u8BFB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5FAE\u63A7\u5236\u5668\u5177\u6709\u9884\u671F\u7684\u5185\u90E8RAM\u5BB9\u91CF\uFF0C\u8BE5\u533A\u53EF\u8BFB\uFF0C\u5E76\u53EF\u4EE5\u6D4B\u91CF\u901F\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u53EF\u8BFB\u7684\u5185\u90E8\u95EA\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5FAE\u63A7\u5236\u5668\u5177\u6709\u9884\u671F\u7684\u5185\u90E8\u95EA\u5B58\u5BB9\u91CF\uFF0C\u8BE5\u533A\u53EF\u8BFB\uFF0C\u5E76\u53EF\u4EE5\u6D4B\u91CF\u901F\u5EA6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7981\u7528Cache\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u7981\u7528Cache\u7F13\u5B58\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C,\u53EF\u4F7F\u7CFB\u7EDF\u66F4\u7B80\u5355\u4E14\u6613\u4E8E\u7406\u89E3\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u5148\u51B3\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6B64\u6B65\u9AA4\u7684\u5148\u51B3\u6761\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u5173\u786C\u4EF6\u4E0A\u7684\u65F6\u949F\u6E90\u7684\u4FE1\u606F\u3002 \u901A\u5E38\u4F7F\u7528\u6676\u632F\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u89E3\u51B3\u65B9\u6848\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u6267\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u6211\u4EEC\u5C06\u9010\u6B65\u8C03\u6574\u9879\u76EE\u65F6\u949F\u914D\u7F6E\uFF0C\u4EE5\u83B7\u53D6\u6240\u9700\u7684MCU\u9891\u7387\u3002 \u7136\u540E\uFF0C\u6211\u4EEC\u5C06\u8BA8\u8BBA\u5982\u4F55\u6D4B\u91CF\u5185\u90E8\u95EA\u5B58\u7684\u8BFB\u53D6\u901F\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "system-clock"
  }), `\u7CFB\u7EDF\u65F6\u949F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u4E2D\uFF0C\u5355\u51FB\u201C\u65F6\u949F\u914D\u7F6E\u201D\u9009\u9879\u5361\u3002 \u8FD9\u5C06\u4E3A\u60A8\u63D0\u4F9B\u7279\u5B9AMCU\u7684\u65F6\u949F\u6570\u6982\u8FF0\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u65F6\u949F\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u9009\u62E9HSI\u4F5C\u4E3A\u65F6\u949F\u6E90\u3002 \u8BB8\u591A\u9879\u76EE\u4F7F\u7528\u5916\u90E8\u6676\u632FHSE\uFF0C\u540C\u65F6\u9009\u62E9\u5408\u9002\u7684\u5206\u9891(/M) \u548C\u500D\u9891(/N) \u53C2\u6570\u3002 \u672C\u6307\u5357\u4E0D\u505A\u6709\u5173\u65F6\u949F\u914D\u7F6E\u7684\u4ECB\u7ECD\u3002 \u66F4\u6539\u65F6\u949F\u914D\u7F6E\u540E\uFF0C\u5FC5\u987B\u5728STM32CubeMX\u4E2D\u91CD\u65B0\u751F\u6210\u9879\u76EE\uFF08\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u201C\u751F\u6210\u4EE3\u7801\u201D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u6838\u65F6\u949F(HCLK) \u53EF\u5728\u8FD0\u884C\u65F6\u901A\u8FC7\u751F\u6210\u7684\u4EE3\u7801\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5E76\u4FDD\u5B58\u5728\u53D8\u91CF\u4E2D\u3002 \u5E94\u7528\u4EE3\u7801\u53EF\u4F7F\u7528\u6B64\u53D8\u91CF\u5728\u65F6\u949F\u5468\u671F\u548C\u79D2\u5355\u4F4D\u4E4B\u95F4\u8FDB\u884C\u6B63\u786E\u8F6C\u6362\uFF0C\u5982\u542F\u52A8\u5B9A\u65F6\u5668\u3002 \u8981\u91CD\u65B0\u8BA1\u7B97\u65F6\u949F\u53C2\u6570\uFF0C\u60A8\u987B\u8C03\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `SystemCoreClockUpdate()`), `\u51FD\u6570\u3002 \u5728main.c(\u7528\u6237\u4EE3\u7801\u6BB5) \u4E2D\u63D2\u5165\u4E00\u4E2A\u8C03\u7528\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SystemCoreClockUpdate"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5728\u6B64\u51FD\u6570\u7684\u672B\u5C3E\u8BBE\u7F6E\u65AD\u70B9\uFF0C\u5219\u53EF\u4EE5\u770B\u5230\u57FA\u4E8E\u914D\u7F6E\u7684\u5185\u6838\u65F6\u949F:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SystemCoreClock"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u4E2A\u6D4B\u8BD5\u91CD\u70B9\u4E3A\u7CFB\u7EDF\u5B9A\u65F6\u5668\u3002 \u8BE5\u5B9A\u65F6\u5668\u6309HCLK\u65F6\u949F\u8FD0\u884C\uFF0C\u8BE5\u65F6\u949F\u7ECF\u8FC7\u5206\u9891\uFF0C\u4EE5\u6BCF\u96941 ms\u4EA7\u751F\u4E00\u6B21\u4E2D\u65AD\u3002 \u8BE5\u5B9A\u65F6\u5668\u7528\u4E8ESTM32Cube\u56FA\u4EF6\uFF0C\u4EE5\u5B9E\u73B0\u6BEB\u79D2\u5EF6\u8FDF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u53EF\u901A\u8FC7\u5728main\u4E2D\u63D2\u5165\u8BF8\u59825\u79D2\u7684\u5EF6\u8FDF\u6765\u5BF9\u6B64\u8FDB\u884C\u6D4B\u8BD5\u3002 \u7528\u79D2\u8868\u6216\u7C7B\u4F3C\u7684\u65B9\u6CD5\u6765\u9A8C\u8BC1\u8FD9\u4E00\u70B9:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u6D4B\u91CF\u5EF6\u8FDF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash-and-ram-size-and-speed"
  }), `\u95EA\u5B58\u4E0ERAM\u5927\u5C0F\u548C\u901F\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u7CFB\u7EDF\u5B9A\u65F6\u5668\u53EF\u8F7B\u677E\u68C0\u67E5\u5B58\u50A8\u5668\u7684\u8BFB\u53D6\u901F\u5EA6\u3002 \u7CFB\u7EDF\u5B9A\u65F6\u5668\u4E2D\u65AD\u6BCF\u6BEB\u79D2\u5BF9\u8BA1\u6570\u53D8\u91CF\u52A0\u4E00\u3002 \u901A\u8FC7\u5728\u4E00\u6BB5\u4EE3\u7801\u4E4B\u524D\u548C\u4E4B\u540E\u8BFB\u53D6\u6B64\u53D8\u91CF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6D4B\u91CF\u4EE3\u7801\u7684\u8FD0\u884C\u65F6\u95F4(\u5206\u8FA8\u7387\u4E3A1 ms) \u3002 \u6B64\u65B9\u6848\u53EF\u7528\u4E8E\u6D4B\u91CF\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u8BB8\u591A\u4E0D\u540C\u4F4D\u7F6E\u7684\u65F6\u95F4\u5468\u671F\u3002 \u8BE5\u6D4B\u91CF\u4E0D\u662F\u5F88\u7CBE\u786E\uFF0C\u4F46\u53EF\u4EE5\u5728\u6CA1\u6709\u793A\u6CE2\u5668\u7B49\u5916\u90E8\u8BBE\u5907\u7684\u60C5\u51B5\u4E0B\u5B8C\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u6B64\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u4E24\u4E2A\u6613\u5931\u6027\u53D8\u91CF\u6765\u4FDD\u5B58\u7ED3\u679C\u3002 \u5982\u679C\u6211\u4EEC\u4E0D\u5728\u6B64\u5904\u4FDD\u5B58\u7ED3\u679C\uFF0C\u5219\u7F16\u8BD1\u5668\u5728\u67D0\u4E9B\u4F18\u5316\u60C5\u51B5\u4E0B\u4F1A\u5220\u9664\u6D4B\u91CF\u4EE3\u7801\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u5373\u7528\u4E8E\u4FDD\u5B58\u6D4B\u91CF\u7ED3\u679C\u7684\u6613\u5931\u6027\u5168\u5C40\u53D8\u91CF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u91CC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u793A\u4F8B\uFF0C\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u8BFB\u53D6\u4E86\u4ECE0x08000000\u52300x08020000\uFF08128 Kb\uFF09\u7684\u95EA\u5B58\uFF0C\u5E76\u5BF9\u4EE3\u7801\u8FDB\u884C\u8BA1\u65F6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u5BF9\u8BFB\u53D6\u5FAA\u73AF\u8FDB\u884C\u8BA1\u65F6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u4F7F\u7528\u50CF\u8FD9\u6837\u7684\u4EE3\u7801\u6765\u9A8C\u8BC1\u4E0D\u540C\u5B58\u50A8\u5668\u7684\u901F\u5EA6\u3002 \u5728STM32CubeMX\u4E2D\u521B\u5EFA\u8BBE\u7F6E\u540E\uFF0C\u60A8\u53EF\u4EE5\u6D4B\u91CF\u8BFB\u53D6\u901F\u5EA6\uFF0C\u5E76\u8BB0\u5F55\u7ED3\u679C\u3002 \u968F\u540E\u53EF\u4EE5\u91CD\u590D\u6D4B\u91CF\u5E76\u9A8C\u8BC1\u3002  \u5982\u679C\u8981\u6D4B\u91CF\u5B58\u50A8\u5668\u5E26\u5BBD(\u5373\u4EE5kb\u4E3A\u5355\u4F4D\u7684\u8BFB\u53D6\u901F\u5EA6) \uFF0C\u60A8\u53EF\u4EE5\u5C06\u6570\u636E\u91CF\u4E0E\u6D4B\u91CF\u65F6\u95F4\u8FDB\u884C\u6BD4\u8F83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u572816 MHz\u7684STM32F429\u4E0A\uFF0C\u5982\u679C\u4EE3\u7801\u7684\u8FD0\u884C\u65F6\u95F4\u4E3A12 ms\uFF0C\u5219\u5185\u90E8\u95EA\u5B58\u7684\u8BFB\u53D6\u901F\u5EA6(\u4F7F\u7528\u6B64\u65B9\u6CD5) \u4E3A128kb/0.012s = 10,666 kb/s\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u8F7B\u677E\u66F4\u6539\u4E0A\u9762\u7684\u6D4B\u8BD5\u4EE3\u7801\u6BB5\uFF0C\u4EE5\u9A8C\u8BC1\u6240\u6709\u5185\u90E8\u95EA\u5B58\u662F\u5426\u4F7F\u80FD\u5E76\u4E14\u53EF\u8BFB\u3002 \u53EA\u9700\u66F4\u6539\u8D77\u59CB\u548C\u7ED3\u675F\u5730\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u4EE3\u7801\u8FD8\u53EF\u4EE5\u68C0\u67E5\u5185\u90E8RAM\u3002 \u5728F429\uFF0CRAM\u4ECE\u5730\u57400x20000000\u5F00\u59CB\u3002 \u5185\u6838\u8026\u5408\u5B58\u50A8\u533A\u4ECE0x10000000\u5F00\u59CB\u3002 \u68C0\u67E5\u7279\u5B9AMCU\u7684\u6570\u636E\u624B\u518C\uFF0C\u4EE5\u83B7\u53D6\u76F8\u5173\u5B58\u50A8\u5668\u5730\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u5E94\u8BE5\u5BF9\u4E0D\u540C\u7684\u5B58\u50A8\u5668\u8FDB\u884C\u4E00\u4E9B\u6D4B\u91CF\uFF0C\u5E76\u8BB0\u4E0B\u7ED3\u679C\u3002 \u5BF9\u4E8ERAM\uFF0C\u8BF7\u6D4B\u8BD5\u8BFB\u53D6\u548C\u5199\u5165\u901F\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker-script"
  }), `\u94FE\u63A5\u5668\u811A\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53E6\u4E00\u4E2A\u5173\u6CE8\u70B9\u4E3A\u94FE\u63A5\u5668\u811A\u672C\u3002 \u8BE5\u914D\u7F6E\u6587\u4EF6\u5C06RAM\u548C\u95EA\u5B58\u5728\u7CFB\u7EDF\u4E2D\u7684\u5730\u5740\u544A\u77E5\u94FE\u63A5\u5668\u3002 \u94FE\u63A5\u5668\u811A\u672C\u7531CubeMX\u4E0E\u9879\u76EE\u4E00\u8D77\u751F\u6210\uFF0C\u4F46\u5BF9\u5176\u8FDB\u884C\u7814\u7A76\u53EF\u80FD\u4F1A\u6709\u4E00\u4E9B\u597D\u5904\u3002 \u968F\u540E\uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u60A8\u5FC5\u987B\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539\uFF0C\u4EE5\u9002\u5E94\u9879\u76EE\u9700\u8981\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cache-on-f7-and-h7"
  }), `F7\u548CH7\u4E0A\u7684\u7F13\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57FA\u4E8EARM Cortex-M7\u7684STM32F7\u548CSTM32H7\u5FAE\u63A7\u5236\u5668\u5305\u62EC\u6570\u636E\u548C\u6307\u4EE4\u7F13\u5B58\u3002 \u5728\u5E73\u53F0\u7A33\u5B9A\u4E4B\u524D\uFF0C\u5EFA\u8BAE\u81F3\u5C11\u7981\u7528\u6570\u636E\u7F13\u5B58\u3010D-Cache\u3011\u3002 \u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u6570\u636E\u7F13\u5B58\u53EF\u663E\u8457\u63D0\u9AD8\u6027\u80FD\uFF0C\u4F46\u4E5F\u4F1A\u4F7F\u6D4B\u8BD5\u53D8\u5F97\u590D\u6742\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u62E5\u6709\u7A33\u5B9A\u7684\u5E73\u53F0\u540E\uFF0C\u53EF\u542F\u7528\u6570\u636E\u7F13\u5B58\u3002 \u6B64\u65F6\uFF0C\u7531\u4E8E\u5E73\u53F0\u5728\u5176\u4ED6\u65B9\u9762\u6B63\u5E38\uFF0C\u56E0\u6B64\u53EF\u4EE5\u66F4\u8F7B\u677E\u5730\u9501\u5B9A\u95EE\u9898\u6E90\u81EA\u6570\u636E\u7F13\u5B58\u7BA1\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8EMCU\u5185\u6838\u8BFB\u53D6\u548C\u5199\u5165\u7F13\u5B58\uFF0C\u800C\u8BF8\u5982DMA2\u548CLTDC\u4E4B\u7C7B\u7684\u5916\u8BBE\u5219\u76F4\u63A5\u4ECE\u5B58\u50A8\u5668\u8BFB\u53D6(\u800C\u4E0D\u662F\u8BFB\u53D6Cache\u7F13\u5B58) \uFF0C\u8FD9\u4F7F\u6570\u636E\u7F13\u5B58\u53D8\u5F97\u590D\u6742\u3002 \u56E0\u6B64\uFF0C\u60A8\u53EF\u80FD\u4F1A\u9047\u5230\u5C06\u6570\u636E\u867D\u5199\u5165\u5E27\u7F13\u51B2\uFF0C\u4F46\u5728\u663E\u793A\u5668\u4E0A\u770B\u4E0D\u5230\u67D0\u4E9B\u6570\u636E\u7684\u60C5\u51B5\u3002 \u56E0\u4E3A\u8FD9\u4E9B\u6570\u636E\u8FD8\u5728\u9AD8\u901F\u7F13\u5B58\uFF0C\u6240\u4EE5LTDC\u5728RAM\u4E2D\u627E\u4E0D\u5230\u65B0\u6570\u636E\uFF0C \u89E3\u51B3\u65B9\u6848\u5C31\u662F\u5728\u67D0\u4E00\u65F6\u523B\u5237\u65B0\u9879\u76EE\u4E2D\u7684\u7F13\u5B58\uFF0C\u4F46\u6211\u4EEC\u5EFA\u8BAE\u7A0D\u540E\u518D\u505A\u5904\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u5728STM32CubeMX\u914D\u7F6E\u4E2D\u7684\u7CFB\u7EDF\u5185\u6838\u90E8\u5206\u7981\u7528/\u4F7F\u80FD\u7F13\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "touchgfx-internal-dcache-state-machine"
  }), `TouchGFX\u5185\u90E8DCache\u72B6\u6001\u673A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5F15\u64CE\u8BB0\u5F55\u5F53\u524D\u548C\u6700\u8FD1\u4E00\u6B21\u6E32\u67D3\u64CD\u4F5C\uFF0C\u4E00\u5171\u6709\u4E24\u79CD\u72B6\u6001\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HARDWARE`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `SOFTWARE`), `\u3002 \u521D\u59CB\u72B6\u6001\u8BBE\u4E3A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` HARDWARE`), ` \uFF0C\u56E0\u4E3A\u5927\u90E8\u5206\u7ED8\u56FE\u64CD\u4F5C\u7531\u786C\u4EF6\u5B8C\u6210\u3002 \u5F53\u53D1\u751F\u72B6\u6001\u5207\u6362\u65F6\uFF0C\u72B6\u6001\u673A\u5C06\u8C03\u7528\u9002\u5F53\u7684\u865A\u51FD\u6570\u6765\u5904\u7406\u7F13\u5B58\u5931\u6548\u673A\u5236\u3002 \u5F53\u72B6\u6001\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` HARDWARE`), ` \u8F6C\u6362\u6210`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `SOFTWARE`), `\u65F6\uFF0C\u72B6\u6001\u673A\u5C06\u8C03\u7528\u865A\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` void touchgfx::HAL::InvalidateCache()`), ` \uFF0C\u5F53\u72B6\u6001\u4ECE `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `SOFTWARE`), ` \u8F6C\u6362\u6210`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` HARDWARE`), ` \u65F6\uFF0C\u72B6\u6001\u673A\u5C06\u8C03\u7528\u865A\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `void touchgfx::HAL::FlushCache()`), `\u3002 \u8FD9\u4E24\u4E2A\u51FD\u6570\u7684\u529F\u80FD\u7531\u7528\u6237\u5728\u6D3E\u751F\u7684HAL\u7C7B\u4E2D\u5B9E\u73B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/cm7-cache-invalidation-statemachine.svg",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX\u5F15\u64CE\u5185\u90E8DCache\u72B6\u6001\u673A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4F7F\u7528TouchGFX Generator\uFF0C\u5219\u4F1A\u5728TouchGFXGeneratedHAL\u7C7B\u4E2D\u521B\u5EFA\u8FD9\u4E9B\u6D3E\u751F\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0C\u901A\u8FC7\u51FD\u6570\u8C03\u7528DCache\u5931\u6548\u673A\u5236\uFF0C\u4E14\u65E0\u987B\u4EFB\u4F55\u5176\u4ED6\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "further-readings"
  }), `\u66F4\u591A\u8BFB\u7269`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5904\u7684\u94FE\u63A5\u6587\u6863\u5305\u542B\u6709\u5173STM32CubeMX\u548CSTM32\u7F13\u5B58\u7684\u66F4\u591A\u4FE1\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32CubeMX", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",
    mdxType: "Link"
  }, "\u7528\u6237\u624B\u518C\u4E2D\u7684\u65F6\u949F\u914D\u7F6E\u90E8\u5206")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",
    mdxType: "Link"
  }, "STM32F7\u548CSTM32H7\u4E0A\u76841\u7EA7\u7F13\u5B58")))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);