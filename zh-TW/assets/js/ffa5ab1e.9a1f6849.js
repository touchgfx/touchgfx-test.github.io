"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4224],{

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

/***/ 68896:
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
  title: "1. \u5275\u5EFA\u5C08\u6848",
  sidebar_label: "1. \u5275\u5EFA\u5C08\u6848"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/01-create-project",
  "id": "development/board-bring-up/how-to/01-create-project",
  "title": "1. \u5275\u5EFA\u5C08\u6848",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/01-create-project.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/01-create-project",
  "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/01-create-project",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "id": "01-create-project",
    "title": "1. \u5275\u5EFA\u5C08\u6848",
    "sidebar_label": "1. \u5275\u5EFA\u5C08\u6848"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u642D\u5EFA\u958B\u767C\u677F",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/board-introduction"
  },
  "next": {
    "title": "2. CPU\u7684\u57F7\u884C",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/02-cpu-running"
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
  value: "\u4F7F\u7528\u8005\u4EE3\u7A0B\u5F0F\u78BC\u5340\u6BB5",
  id: "user-code-sections",
  level: 3
}, {
  value: "\u9032\u4E00\u6B65\u95B1\u8B80",
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
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u7BC0\u4E2D\uFF0C\u6211\u5011\u5C07\u4F7F\u7528STM32CubeMX\u751F\u6210\u7279\u5B9AMCU\u7684\u5DE5\u7A0B\u5C08\u6848\u3002 \u8A72\u5C08\u6848\u5C07\u4F5C\u70BA\u672C\u4F7F\u7528\u6307\u5357\u4E2D\u7684\u5176\u9918\u6B65\u9A5F\u7684\u57FA\u790E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u5C07\u5728\u63A5\u4E0B\u4F86\u7684\u6B65\u9A5F\u4E2D\u4F7F\u7528STM32CubeMX\u6539\u5584\u5C08\u6848\uFF0C\u4E26\u7DE8\u5BEB\u548C\u6574\u5408\u7A0B\u5F0F\u78BC\uFF0C\u4EE5\u4F7F\u6240\u6709\u5FC5\u9700\u7684\u5468\u908A\u90FD\u6B63\u5E38\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u500B\u5C08\u6848\u6703\u5C07\u9577\u671F\u5B58\u5728\u4EE5\u4F9B\u53CD\u8986\u4F7F\u7528\u3002 \u60A8\u73FE\u5728\u61C9\u78BA\u5B9A\u4E00\u7A2E\u7B56\u7565\uFF0C\u4F7F\u5F97\u4E0D\u540C\u7684\u7248\u672C\u4FDD\u6301\u53EF\u7528\uFF0C\u4EE5\u4FBF\u53EF\u4EE5\u8FD4\u56DE\u4E26\u518D\u6B21\u57F7\u884C\u3002 \u6216\u8005\u5728\u65B0\u786C\u9AD4\u4E0A\u9032\u884C\uFF0C\u6216\u8005\u53EA\u662F\u91CD\u65B0\u6AA2\u67E5\u786C\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E5F\u8A31\u60A8\u9700\u8981\u8A31\u591A\u5C0F\u578B\u6E2C\u8A66\u7A0B\u5F0F\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u8A72\u5C08\u6848\u662F\u4E00\u500B\u5F88\u597D\u7684\u8D77\u9EDE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5176\u76EE\u6A19\u662F\u5728STM32CubeMX\u4E2D\u5275\u5EFA\u4E00\u500B\u53EF\u71D2\u9304\u5230\u60A8\u7684\u958B\u767C\u677F\u4E0A\u4E26\u57F7\u884C\u7684\u5C08\u6848\u3002 \u5982\u679C\u60A8\u6709\u5E36\u9664\u932F\u5668\u7684IDE\uFF08\u5982STM32CubeIDE\u6216IAR Embedded Workbench\uFF09\uFF0C\u5247\u9084\u61C9\u6AA2\u67E5\u662F\u5426\u53EF\u4EE5\u9664\u932F\u4E26\u9010\u6B65\u5B8C\u6210MCU\u4E0A\u7684\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6C92\u6709\u9664\u932F\u5668\uFF0C\u5247\u61C9\u627E\u5230\u4E00\u7A2E\u5F9E\u5C08\u6848\u7684\u5404\u500B\u4F4D\u7F6E\u5217\u5370\u51FA\u8ABF\u8A66\u8A9E\u53E5\u7684\u65B9\u6CD5\u3002 \u5982 \u4E32\u5217\u9023\u63A5\u57E0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
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
  }), `\u5728IDE\u4E2D\u958B\u555F\u5C08\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C08\u6848\u7531STM32CubeMX\u751F\u6210\uFF0C\u4E26\u53EF\u4EE5\u7528\u4F5C\u5F8C\u7E8C\u958B\u767C\u677F\u958B\u767C\u7684\u8D77\u9EDE\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C08\u6848\u7DE8\u8B6F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B64\u5C08\u6848\u9032\u884C\u9A45\u52D5\u7A0B\u5F0F\u5305\u542B\u985E\u5225\u8DEF\u5F91\u7684\u6B63\u78BA\u8A2D\u5B9A\u3002 \u6211\u5011\u53EF\u4EE5\u7DE8\u5BEB\u66F4\u591A\u7A0B\u5F0F\u78BC\u4E26\u91CD\u8907\u7DE8\u8B6F\u8A72\u5C08\u6848\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9032\u5165\u65B7\u9EDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C08\u6848\u53EF\u4EE5\u8ABF\u8A66\u904B\u884C\u4E26\u5728\u65B7\u9EDE\u8655\u505C\u6B62\u3002 \u6211\u5011\u53EF\u4EE5\u6AA2\u67E5\u5C08\u6848\u72C0\u614B\u4E26\u8ABF\u67E5\u932F\u8AA4\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u5148\u6C7A\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6B64\u6B65\u9A5F\u7684\u5148\u6C7A\u689D\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u57FA\u65BCSTM32\u958B\u767C\u677F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7A0B\u5F0F\u78BC/\u9664\u932F\u4ECB\u9762 - ST-LINK\uFF0CJLINK\u6216\u985E\u4F3C\u4ECB\u9762`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B89\u88DDSTM32CubeMX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B89\u88DDIDE - STM32CubeIDE\uFF0CIAR Embedded Workbench\uFF0CKeil uVision\u6216\u985E\u4F3C\u8EDF\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u57F7\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6211\u5011\u5C07\u5B8C\u6210\u5728STM32CubeMX\u4E2D\u5275\u5EFA\u65B0\u5C08\u6848\u7684\u6B65\u9A5F\u3002 \u5728\u8A72\u7BC4\u4F8B\u4E2D\uFF0C\u6211\u5011\u5C07\u4F7F\u7528STM32F429 MCU\u3002 \u7576\u7136\uFF0C\u60A8\u61C9\u5728\u786C\u9AD4\u4E0A\u9078\u64C7MCU\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32CubeMX\u4E2D\uFF0C\u6309\u4E0B\u300C\u5F9EMCU\u555F\u52D5\u6211\u7684\u5C08\u6848\u300D\u7684\u300C\u5B58\u53D6MCU\u9078\u64C7\u5668\u300D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u5275\u5EFA\u65B0\u5C08\u6848"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E5F\u53EF\u4EE5\u57FA\u65BCSTM32\u8A55\u4F30\u5957\u4EF6\u555F\u52D5\u4E00\u500B\u65B0\u5C08\u6848\uFF0C\u5982STM32F429\u63A2\u7D22\u677F\u3002 \u5982\u679C\u60A8\u7684\u786C\u9AD4\u8A2D\u8A08\u57FA\u65BC\u8A55\u4F30\u5957\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u6216\u8AAA\u61C9\u7576\u57F7\u884C\u8A72\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u5F8C\uFF0C\u6211\u5011\u9078\u64C7\u76F8\u95DCMCU\u3002 \u5728\u9019\u88E1\u6211\u5011\u9078\u64C7STM32F429ZIT6U\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u9078\u64C7MCU"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8DF3\u5230\u5C08\u6848\u7BA1\u7406\u54E1\u9078\u9805\uFF0C\u4E26\u70BA\u5C08\u6848\u547D\u540D\u3002 \u7576\u7136\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u9078\u64C7\u65B0\u7684\u5C08\u6848\u5132\u5B58\u4F4D\u7F6E\u3002 \u5728\u300C\u61C9\u7528\u7D50\u69CB\u300D\u4E0B\uFF0C\u9078\u64C7\u300C\u9032\u968E\u300D\u3002 \u5728\u300C\u5DE5\u5177\u93C8/IDE\u300D\u4E0B\uFF0C\u60A8\u5FC5\u9808\u9078\u64C7\u8981\u4F7F\u7528\u7684IDE\u3002 \u5728\u7BC4\u4F8B\u4E2D\uFF0C\u6211\u5011\u9078\u64C7IAR\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u8A2D\u5B9A\u5C08\u6848\u540D\u7A31\u8207IDE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u6309\u4E0B\u53F3\u4E0A\u89D2\u7684\u300C\u7522\u751F\u7A0B\u5F0F\u78BC\u300D\u6309\u9215\u3002 \u5982\u679C\u9019\u662F\u60A8\u9078\u53D6MCU\u7CFB\u5217\uFF08F4/F7/H7\uFF09\u4E2D\u7684\u9996\u500B\u5C08\u6848\uFF0C\u5247STM32CubeMX\u81EA\u52D5\u5EFA\u8B70\u4E0B\u8F09\u76F8\u95DCSTM32Cube\u97CC\u9AD4\u5957\u4EF6\u3002 \u63A5\u53D7\u8A72\u9078\u9805\uFF0C\u4EE5\u7372\u53D6\u4F9B\u4EE5\u5F8C\u4F7F\u7528\u7684\u6700\u65B0\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "STM32CubeMX\u53EF\u4E0B\u8F09STM32Cube\u97CC\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0B\u300C\u958B\u555F\u5C08\u6848\u300D\uFF0C\u4EE5\u958B\u555FIDE\u4E2D\u7684\u5C08\u6848\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u5C08\u6848\u5DF2\u751F\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u5C08\u6848\u5728IAR Embedded Workbench\u958B\u555F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u751F\u6210\u7684\u5C08\u6848\u5305\u542B\u7279\u5B9AMCU\u555F\u52D5\u7A0B\u5F0F\u78BC\u3001\u4E2D\u65B7\u5411\u91CF\u8868\u3001\u7CFB\u7D71\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\u4EE5\u53CAMCU\u4E2D\u6240\u6709\u5916\u8A2D\u9031\u908A\u7684HAL\u9A45\u52D5\u7A0B\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u53EF\u901A\u904EIDE\u7DE8\u8B6F\u548C\u9664\u932F\u5C08\u6848\u3002 \u5728IAR\u4E2D\uFF0C\u9EDE\u9078\u300C\u5C08\u6848\u300D->\u300C\u7DE8\u8B6F\u300D\u4F86\u7DE8\u8B6F\u5C08\u6848\uFF0C\u9EDE\u9078\u300C\u5C08\u6848\u300D->\u300C\u4E0B\u8F09\u4E26\u9664\u932F\u300D\u4F86\u9664\u932F\u5C08\u6848\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx07.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u5728IAR Embedded Workbench\u4E2D\u9664\u932F\u5C08\u6848"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A2D\u7F6EIAR\u5C08\u6848\uFF0C\u4F7F\u7528STLink\u9664\u932F\u5668\u3002 \u5982\u679C\u60A8\u4F7F\u7528\u5176\u4ED6\u9664\u932F\u5668\uFF0C\u8ACB\u5728IDE\u4E2D\u66F4\u6539\u5C08\u6848\u7684\u300C\u9664\u932F\u5668\u300D\u5C6C\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx08.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u4E3B\u8FF4\u5708\u7E7C\u7E8C\u904B\u884C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7121\u4F5C\u696D\u7CFB\u7D71\u7684\u60C5\u6CC1\u4E0B\u904B\u884C\u7684\u5C08\u6848\uFF0Cmain\u7684while\u8FF4\u5708\u901A\u5E38\u5F88\u91CD\u8981\u3002 \u901A\u904E\u8A2D\u7F6E\u65B7\u9EDE\u4F86\u6AA2\u67E5\u662F\u5426\u57F7\u884C\u5230\u67D0\u500B\u4F4D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FF4\u5708\u4E2D\u6DFB\u52A0\u4E00\u4E9B\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5EFA\u8B70\u700F\u89BDIDE\u4E2D\u7684\u5C08\u6848\uFF0C\u4EE5\u719F\u6089\u7A0B\u5F0F\u78BC\u7D50\u69CB\u3002 \u53E6\u5916\uFF0C\u53EF\u4EE5\u5617\u8A66\u4E00\u4E0B\u8FFD\u8E28SystemInit\u5230main\u7684\u52D5\u4F5C\u6B65\u9A5F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "user-code-sections"
  }), `\u4F7F\u7528\u8005\u4EE3\u7A0B\u5F0F\u78BC\u5340\u6BB5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u6B64\u6B65\u9A5F\uFF0C\u5728\u958B\u59CB\u7DE8\u8F2F\u5C08\u6848\u4E4B\u524D\uFF0C\u81F3\u95DC\u91CD\u8981\u7684\u662F\u77AD\u89E3STM32CubeMX\u4F7F\u7528\u7684\u300C\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u5340\u6BB5\u300D\u9019\u4E00\u6982\u5FF5\u3002 \u5C08\u6848\u7684Core/Src\u8CC7\u6599\u593E\u4E2D\u7684\u6240\u6709\u4F86\u6E90\u6A94\u5747\u7531STM32CubeMX\u7522\u751F\u3002 \u5728\u60A8\u4EE5\u5F8C\u66F4\u6539STM32CubeMX\u4E2D\u7684\u5C08\u6848\u8A2D\u5B9A\u6642\uFF08\u5982\u555F\u7528UART\uFF09\uFF0C\u5C07\u91CD\u65B0\u751F\u6210\u5176\u4E2D\u7684\u4E00\u4E9B\u6A94\u6848\u3002 \u60A8\u53EF\u80FD\u4E5F\u5728\u5176\u4E2D\u7684\u4E00\u4E9B\u6A94\u4E2D\u63D2\u5165\u7A0B\u5F0F\u78BC\u3002 \u9664\u975E\u4F7F\u7528\u5E95\u4E0B\u898F\u5247\uFF0C\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u5728\u4F7F\u7528STM32CubeMX\u91CD\u65B0\u7522\u751F\u5C08\u6848\u6642\u6703\u88AB\u79FB\u9664\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5C07\u7A0B\u5F0F\u78BC\u5BEB\u5728\u4F7F\u7528\u8005\u7A0B\u5F0F\u5340\u6BB5`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BEB\u5728\u4F7F\u7528\u8005\u7A0B\u5F0F\u5340\u6BB5\u4EE5\u5916\u7684\u4EFB\u4F55\u7A0B\u5F0F\u78BC\u90FD\u5C07\u88ABSTM32CubeMX\u522A\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u500B\u7BC4\u4F8B\u4E2D\uFF0C\u8B93\u6211\u5011\u770B\u4E00\u4E0BCore/Src/main.c\u4E2D\u7684\u524D\u5E7E\u884C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u5E0C\u671B\u5728main\u51FD\u6578\u7684\u958B\u982D\u63D2\u5165\u7A0B\u5F0F\u78BC\uFF0C\u5FC5\u9808\u5C07\u5176\u653E\u5728\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u958B\u59CB1\u8207\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u7D50\u675F1\u4E4B\u9593\u3002 \u5982\u679C\u5C07\u7A0B\u5F0F\u78BC\u653E\u5728\u6B64\u5340\u4E4B\u5916\uFF0C\u5B83\u5C07\u88ABSTM32CubeMX\u522A\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u8ACB\u52FF\u5728\u4F7F\u7528\u8005\u7A0B\u5F0F\u5340\u6BB5\u4EE5\u5916\u5BEB\u7A0B\u5F0F\u78BC\u3002 \u7576STM32CubeMX\u751F\u6210\u7A0B\u5F0F\u78BC\u6642\uFF0C\u5C07\u522A\u9664\u6B64\u985E\u7A0B\u5F0F\u78BC\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "further-reading"
  }), `\u9032\u4E00\u6B65\u95B1\u8B80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8655\u7684\u9023\u7D50\u6587\u4EF6\u5305\u542B\u6709\u95DCCubeMX\u7684\u66F4\u591A\u8CC7\u8A0A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",
    mdxType: "Link"
  }, "STM32CubeMX\u4F7F\u7528\u8005\u624B\u518A")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeide.html#resource",
    mdxType: "Link"
  }, "STM32CubeIDE\u8CC7\u6E90")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",
    mdxType: "Link"
  }, "\u6709\u95DCSTM32CubeMX\u548CSTM32Cube\u7684\u516C\u958B\u7DDA\u4E0A\u8AB2\u7A0B")))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);