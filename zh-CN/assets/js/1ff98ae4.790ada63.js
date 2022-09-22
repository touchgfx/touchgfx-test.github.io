"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9013],{

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

/***/ 70814:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
}));
class Caution extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-caution)",
      header: "Caution",
      type: "caution",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Caution);


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

/***/ 11290:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70814);
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
  id: "01-create-project",
  title: "1. \u521B\u5EFA\u9879\u76EE",
  sidebar_label: "1. \u521B\u5EFA\u9879\u76EE"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/01-create-project",
  "id": "development/board-bring-up/how-to/01-create-project",
  "title": "1. \u521B\u5EFA\u9879\u76EE",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/01-create-project.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/01-create-project",
  "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/01-create-project",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "id": "01-create-project",
    "title": "1. \u521B\u5EFA\u9879\u76EE",
    "sidebar_label": "1. \u521B\u5EFA\u9879\u76EE"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u542F\u52A8\u5F00\u53D1\u677F\u4ECB\u7ECD",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/board-introduction"
  },
  "next": {
    "title": "2. CPU\u8FD0\u884C",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/02-cpu-running"
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
  value: "\u7528\u6237\u4EE3\u7801\u6BB5",
  id: "user-code-sections",
  level: 3
}, {
  value: "\u66F4\u591A\u8BFB\u7269",
  id: "further-reading",
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
  }), `\u52A8\u673A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528STM32CubeMX\u751F\u6210\u7279\u5B9AMCU\u7684\u5DE5\u7A0B\u9879\u76EE\u3002 \u8BE5\u9879\u76EE\u5C06\u4F5C\u4E3A\u672C\u4F7F\u7528\u6307\u5357\u4E2D\u7684\u5176\u4F59\u6B65\u9AA4\u7684\u57FA\u7840\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u5C06\u5728\u63A5\u4E0B\u6765\u7684\u6B65\u9AA4\u4E2D\u4F7F\u7528STM32CubeMX\u5B8C\u5584\u9879\u76EE\uFF0C\u5E76\u7F16\u5199\u548C\u6574\u5408\u4EE3\u7801\uFF0C\u4EE5\u4F7F\u6240\u6709\u5FC5\u9700\u7684\u5916\u8BBE\u90FD\u6B63\u5E38\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u9879\u76EE\u5C06\u957F\u671F\u5B58\u5728\u4EE5\u4F9B\u53CD\u590D\u4F7F\u7528\u3002 \u60A8\u73B0\u5728\u5E94\u786E\u5B9A\u4E00\u79CD\u7B56\u7565\uFF0C\u4F7F\u5F97\u4E0D\u540C\u7684\u7248\u672C\u4FDD\u6301\u53EF\u7528\uFF0C\u4EE5\u4FBF\u53EF\u4EE5\u8FD4\u56DE\u5E76\u518D\u6B21\u8FD0\u884C\u3002 \u6216\u8005\u5728\u65B0\u786C\u4EF6\u4E0A\u8FDB\u884C\uFF0C\u6216\u8005\u53EA\u662F\u91CD\u65B0\u68C0\u67E5\u786C\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E5F\u8BB8\u60A8\u9700\u8981\u8BB8\u591A\u5C0F\u578B\u6D4B\u8BD5\u7A0B\u5E8F\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u9879\u76EE\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u8D77\u70B9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6807`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5176\u76EE\u6807\u662F\u5728STM32CubeMX\u4E2D\u521B\u5EFA\u4E00\u4E2A\u53EF\u70E7\u5F55\u5230\u60A8\u7684\u677F\u4E0A\u5E76\u6267\u884C\u7684\u9879\u76EE\u3002 \u5982\u679C\u60A8\u6709\u5E26\u8C03\u8BD5\u5668\u7684IDE (\u5982STM32CubeIDE\u6216IAR Embedded Workbench) \uFF0C\u5219\u8FD8\u5E94\u68C0\u67E5\u662F\u5426\u53EF\u4EE5\u8C03\u8BD5\u5E76\u9010\u6B65\u5B8C\u6210MCU\u4E0A\u7684\u9879\u76EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6CA1\u6709\u8C03\u8BD5\u5668\uFF0C\u5219\u5E94\u627E\u5230\u4E00\u79CD\u4ECE\u9879\u76EE\u7684\u5404\u4E2A\u4F4D\u7F6E\u6253\u5370\u51FA\u8C03\u8BD5\u8BED\u53E5\u7684\u65B9\u6CD5\u3002 \u5982 \u4E32\u884C\u7AEF\u53E3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
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
  }), `\u5728IDE\u4E2D\u6253\u5F00\u9879\u76EE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9879\u76EE\u7531STM32CubeMX\u6B63\u786E\u751F\u6210\uFF0C\u5E76\u53EF\u4EE5\u7528\u4F5C\u540E\u7EED\u677F\u5361\u542F\u52A8\u5F00\u53D1\u7684\u8D77\u70B9\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9879\u76EE\u7F16\u8BD1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5BF9\u9879\u76EE\u8FDB\u884C\u9A71\u52A8\u7A0B\u5E8F\u53CA\u5305\u542B\u7C7B\u8DEF\u5F84\u7684\u6B63\u786E\u8BBE\u7F6E\u3002 \u6211\u4EEC\u53EF\u4EE5\u7F16\u5199\u66F4\u591A\u4EE3\u7801\u5E76\u91CD\u590D\u7F16\u8BD1\u8BE5\u9879\u76EE\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u547D\u4E2D\u65AD\u70B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9879\u76EE\u53EF\u4EE5\u8C03\u8BD5\u8FD0\u884C\u5E76\u5728\u65AD\u70B9\u5904\u505C\u6B62\u3002 \u6211\u4EEC\u53EF\u4EE5\u68C0\u67E5\u9879\u76EE\u72B6\u6001\u5E76\u8C03\u67E5\u9519\u8BEF\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u5148\u51B3\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6B64\u6B65\u9AA4\u7684\u5148\u51B3\u6761\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u57FA\u4E8ESTM32\u5F00\u53D1\u677F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7F16\u7A0B/\u8C03\u8BD5\u63A5\u53E3 - ST-LINK\u3001JLINK\u6216\u7C7B\u4F3C\u63A5\u53E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\u5DF2\u5B89\u88C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5DF2\u5B89\u88C5IDE - STM32CubeIDE\u3001IAR Embedded Workbench\u3001Keil uVision\u6216\u7C7B\u4F3C\u8F6F\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u6267\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u6211\u4EEC\u5C06\u5728STM32CubeMX\u4E2D\u5B8C\u6210\u521B\u5EFA\u65B0\u9879\u76EE\u7684\u6240\u6709\u6B65\u9AA4\u3002 \u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528STM32F429 MCU\u3002 \u5F53\u7136\uFF0C\u60A8\u5E94\u5728\u786C\u4EF6\u4E0A\u9009\u62E9MCU\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u4E2D\uFF0C\u5355\u51FB\u201C\u4ECEMCU\u542F\u52A8\u6211\u7684\u9879\u76EE\u201D\u4E2D\u7684\u201C\u8BBF\u95EEMCU\u9009\u62E9\u5668\u201D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u521B\u5EFA\u65B0\u9879\u76EE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E5F\u53EF\u4EE5\u57FA\u4E8ESTM32\u8BC4\u4F30\u5957\u4EF6\u542F\u52A8\u4E00\u4E2A\u65B0\u9879\u76EE\uFF0C\u5982STM32F429\u63A2\u7D22\u677F\u3002 \u5982\u679C\u60A8\u7684\u786C\u4EF6\u8BBE\u8BA1\u57FA\u4E8E\u8BC4\u4F30\u5957\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u6216\u8BF4\u5E94\u5F53\u6267\u884C\u8BE5\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u540E\uFF0C\u6211\u4EEC\u9009\u62E9\u76F8\u5173MCU\u3002 \u5728\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9STM32F429ZIT6U\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u9009\u62E9MCU"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8F6C\u5230\u201C\u9879\u76EE\u7BA1\u7406\u5668\u201D\u9009\u9879\uFF0C\u5E76\u4E3A\u9879\u76EE\u547D\u540D\u3002 \u5F53\u7136\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u9009\u62E9\u65B0\u7684\u9879\u76EE\u5B58\u50A8\u4F4D\u7F6E\u3002 \u5728\u201C\u5E94\u7528\u7ED3\u6784\u201D\u4E0B\uFF0C\u9009\u62E9\u201C\u9AD8\u7EA7\u201D\u3002 \u5728\u201C\u5DE5\u5177\u94FE/IDE\u201D\u4E0B\uFF0C\u60A8\u5FC5\u987B\u9009\u62E9IDE\u3002 \u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u9009\u62E9IAR\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u8BBE\u7F6E\u9879\u76EE\u540D\u79F0\u548CIDE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u201C\u751F\u6210\u4EE3\u7801\u201D\u6309\u94AE\u3002 \u5982\u679C\u8FD9\u662F\u60A8\u6240\u9009MCU\u7CFB\u5217\uFF08F4/F7/H7\uFF09\u4E2D\u7684\u9996\u4E2A\u9879\u76EE\uFF0C\u5219STM32CubeMX\u81EA\u52A8\u5EFA\u8BAE\u4E0B\u8F7D\u76F8\u5173STM32Cube\u56FA\u4EF6\u5305\u3002 \u63A5\u53D7\u8BE5\u9009\u9879\uFF0C\u4EE5\u83B7\u53D6\u4F9B\u4EE5\u540E\u4F7F\u7528\u7684\u6700\u65B0\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "STM32CubeMX\u53EF\u4EE5\u4E0B\u8F7DSTM32Cube\u56FA\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5355\u51FB\u201C\u6253\u5F00\u9879\u76EE\u201D\uFF0C\u4EE5\u6253\u5F00IDE\u4E2D\u7684\u9879\u76EE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u9879\u76EE\u5DF2\u751F\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u9879\u76EE\u5728IAR Embedded Workbench\u4E2D\u6253\u5F00"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u751F\u6210\u7684\u9879\u76EE\u5305\u542B\u7279\u5B9AMCU\u542F\u52A8\u4EE3\u7801\u3001\u4E2D\u65AD\u77E2\u91CF\u8868\u3001\u7CFB\u7EDF\u521D\u59CB\u5316\u4EE3\u7801\u4EE5\u53CAMCU\u4E2D\u6240\u6709\u5916\u8BBE\u7684HAL\u9A71\u52A8\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u53EF\u901A\u8FC7IDE\u7F16\u8BD1\u548C\u8C03\u8BD5\u9879\u76EE\u3002 \u5728IAR\u4E2D\uFF0C\u70B9\u51FB\u201C\u9879\u76EE\u201D->\u6765\u7F16\u8BD1\u9879\u76EE\uFF0C\u70B9\u51FB\u201C\u9879\u76EE\u201D->\u6765\u8C03\u8BD5\u9879\u76EE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx07.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u5728IAR Embedded Workbench\u4E2D\u8C03\u8BD5\u9879\u76EE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BBE\u7F6EIAR\u9879\u76EE\uFF0C\u4F7F\u7528STLink\u8C03\u8BD5\u5668\u3002 \u5982\u679C\u60A8\u4F7F\u7528\u5176\u4ED6\u8C03\u8BD5\u5668\uFF0C\u8BF7\u5728IDE\u4E2D\u66F4\u6539\u9879\u76EE\u7684\u201C\u8C03\u8BD5\u5668\u201D\u5C5E\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx08.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u4E3B\u5FAA\u73AF\u7EE7\u7EED\u8FD0\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u65E0\u64CD\u4F5C\u7CFB\u7EDF\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C\u7684\u9879\u76EE\uFF0Cmain\u7684while\u5FAA\u73AF\u901A\u5E38\u5F88\u91CD\u8981\u3002 \u901A\u8FC7\u8BBE\u7F6E\u65AD\u70B9\u6765\u68C0\u67E5\u662F\u5426\u6267\u884C\u5230\u67D0\u4E2A\u4F4D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5FAA\u73AF\u4E2D\u6DFB\u52A0\u4E00\u4E9B\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5EFA\u8BAE\u6D4F\u89C8IDE\u4E2D\u7684\u9879\u76EE\uFF0C\u4EE5\u719F\u6089\u4EE3\u7801\u7ED3\u6784\u3002 \u53E6\u5916\u4E5F\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B\u4ECESystemInit\u5230main\u7684\u64CD\u4F5C\u6B65\u9AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "user-code-sections"
  }), `\u7528\u6237\u4EE3\u7801\u6BB5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u4E00\u6B65\uFF0C\u91CD\u8981\u7684\u662F\u5148\u7406\u89E3STM32CubeMX\u6240\u7528\u7684\u201C\u7528\u6237\u4EE3\u7801\u6BB5\u201D\u8FD9\u4E00\u6982\u5FF5\uFF0C\u7136\u540E\u518D\u5F00\u59CB\u7F16\u8F91\u81EA\u5DF1\u7684\u9879\u76EE\u3002 \u9879\u76EE\u4E2DCore/Src\u6587\u4EF6\u5939\u4E2D\u7684\u6240\u6709\u6E90\u6587\u4EF6\u90FD\u662F\u7531STM32CubeMX\u751F\u6210\u7684\u3002 \u5728\u60A8\u4EE5\u540E\u66F4\u6539STM32CubeMX\u4E2D\u7684\u9879\u76EE\u914D\u7F6E\u65F6\uFF08\u5982\u4F7F\u80FDUART\uFF09\uFF0C\u5C06\u91CD\u65B0\u751F\u6210\u5176\u4E2D\u7684\u4E00\u4E9B\u6587\u4EF6\u3002 \u60A8\u53EF\u80FD\u4E5F\u5728\u5176\u4E2D\u7684\u4E00\u4E9B\u6587\u4EF6\u4E2D\u63D2\u5165\u4EE3\u7801\u3002 \u9664\u975E\u9075\u5FAA\u4E0B\u9762\u7684\u89C4\u5219\uFF0C\u5426\u5219\u5728\u5229\u7528STM32CubeMX\u91CD\u65B0\u751F\u6210\u9879\u76EE\u65F6\uFF0C\u60A8\u7684\u7528\u6237\u4EE3\u7801\u5C06\u4E22\u5931\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u4EC5\u5728\u7528\u6237\u4EE3\u7801\u533A\u5199\u5165\u4EE3\u7801`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5199\u5728\u7528\u6237\u4EE3\u7801\u533A\u4EE5\u5916\u7684\u4EFB\u4F55\u4EE3\u7801\u90FD\u5C06\u88ABSTM32CubeMX\u5220\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F5C\u4E3A\u4E00\u4E2A\u793A\u4F8B\uFF0C\u8BA9\u6211\u4EEC\u770B\u4E00\u4E0BCore/Src/main.c\u4E2D\u7684\u524D\u51E0\u884C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-5}",
    "{3-5}": true
  }), `int main(void)
{
  /* USER CODE BEGIN 1 */

  /* USER CODE END 1 */


  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();
  ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u5E0C\u671B\u5728main\u51FD\u6570\u7684\u5F00\u5934\u63D2\u5165\u4EE3\u7801\uFF0C\u5FC5\u987B\u5C06\u5176\u653E\u5728\u7528\u6237\u4EE3\u7801\u5F00\u59CB1\u4E0E\u7528\u6237\u4EE3\u7801\u7ED3\u675F1\u4E4B\u95F4\u3002 \u5982\u679C\u5C06\u4EE3\u7801\u653E\u5728\u6B64\u533A\u4E4B\u5916\uFF0C\u5B83\u5C06\u88ABSTM32CubeMX\u5220\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u8BF7\u52FF\u5728\u7528\u6237\u4EE3\u7801\u533A\u4EE5\u5916\u5199\u4EE3\u7801\u3002 \u5F53STM32CubeMX\u751F\u6210\u4EE3\u7801\u65F6\uFF0C\u5C06\u5220\u9664\u6B64\u7C7B\u4EE3\u7801\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "further-reading"
  }), `\u66F4\u591A\u8BFB\u7269`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5904\u7684\u94FE\u63A5\u6587\u6863\u5305\u542B\u6709\u5173CubeMX\u7684\u66F4\u591A\u4FE1\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",
    mdxType: "Link"
  }, "STM32CubeMX\u7528\u6237\u624B\u518C")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeide.html#resource",
    mdxType: "Link"
  }, "STM32CubeIDE\u8D44\u6E90")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",
    mdxType: "Link"
  }, "\u6709\u5173STM32CubeMX\u548CSTM32Cube\u7684\u516C\u5F00\u5728\u7EBF\u8BFE\u7A0B")))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);