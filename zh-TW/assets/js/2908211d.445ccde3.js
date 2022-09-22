"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9716],{

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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


/***/ }),

/***/ 12809:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./components/FurtherReading.js
var FurtherReading = __webpack_require__(29415);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/InlineNote.js

class InlineNote extends react.Component {
  render() {
    return /* @__PURE__ */ react.createElement("i", null, this.props.children);
  }
}
/* harmony default export */ var components_InlineNote = (InlineNote);

// EXTERNAL MODULE: ./components/InlineCode.js
var InlineCode = __webpack_require__(31217);
// EXTERNAL MODULE: ./components/CodeHeader.js
var CodeHeader = __webpack_require__(22425);
;// CONCATENATED MODULE: ./i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx
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
  id: "backend-communication",
  title: "\u5F8C\u7AEF\u901A\u4FE1"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/backend-communication",
  "id": "development/ui-development/touchgfx-engine-features/backend-communication",
  "title": "\u5F8C\u7AEF\u901A\u4FE1",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/backend-communication",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/backend-communication",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "backend-communication",
    "title": "\u5F8C\u7AEF\u901A\u4FE1"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4E8C\u9032\u4F4D\u7FFB\u8B6F",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"
  },
  "next": {
    "title": "Mixins",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/mixins"
  }
};
const assets = {};





const toc = [{
  value: "Model\u985E",
  id: "the-model-class",
  level: 2
}, {
  value: "\u7CFB\u7D71\u4ECB\u9762",
  id: "system-interfacing",
  level: 2
}, {
  value: "\u5F9EGUI\u4EFB\u52D9\u63A1\u6A23",
  id: "sampling-from-gui-task",
  level: 3
}, {
  value: "\u5F9E\u4E8C\u7D1A\u4EFB\u52D9\u63A1\u6A23",
  id: "sampling-from-secondary-task",
  level: 3
}, {
  value: "\u5411UI\u50B3\u64AD\u8CC7\u6599",
  id: "propagating-data-to-ui",
  level: 2
}, {
  value: "\u5F9EUI\u5411\u5468\u570D\u7CFB\u7D71\u767C\u9001\u8CC7\u6599",
  id: "transmitting-data-from-ui-to-surrounding-system",
  level: 2
}, {
  value: "\u7BC4\u4F8B",
  id: "examples",
  level: 2
}, {
  value: "\u4F86\u81EAGUI\u4EFB\u52D9",
  id: "from-gui-task",
  level: 3
}, {
  value: "\u4F86\u81EA\u5176\u4ED6\u4EFB\u52D9",
  id: "from-other-task",
  level: 3
}, {
  value: "\u4F86\u81EA\u591A\u500B\u4EFB\u52D9",
  id: "from-multiple-tasks",
  level: 3
}, {
  value: "\u4F86\u81EA\u4EFB\u52D9\u548C\u5916\u90E8\u4E2D\u65B7\u7DDA\u8DEF",
  id: "from-task-and-external-interrupt-line",
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
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u5927\u591A\u6578\u61C9\u7528\u4E2D\uFF0CUI\u9700\u4EE5\u67D0\u7A2E\u65B9\u5F0F\u9023\u63A5\u5230\u7CFB\u7D71\u7684\u5176\u9918\u90E8\u5206\uFF0C\u4E26\u767C\u9001\u548C\u63A5\u6536\u8CC7\u6599\u3002 \u9019\u53EF\u80FD\u6703\u9023\u63A5\u786C\u9AD4\u5916\u8A2D\uFF08\u611F\u6E2C\u5668\u8CC7\u6599\u3001\u985E\u6BD4/\u6578\u4F4D\u8F49\u63DB\u548C\u4E32\u5217\u901A\u4FE1\u7B49\uFF09\u6216\u5176\u4ED6\u8EDF\u9AD4\u6A21\u7D44\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u672C\u6587\u5C07\u4ECB\u7D39\u5BE6\u73FE\u6B64\u985E\u9023\u63A5\u7684\u63A8\u85A6\u89E3\u6C7A\u65B9\u6848\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u7B2C\u4E00\u7A2E\u65B9\u6CD5\u662F\u4E00\u7A2E`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `\u201C\u5FEB\u800C\u4E0D\u7CBE\u201D`), `\u7684\u65B9\u6CD5\uFF0C\u4E3B\u8981\u7528\u65BC\u539F\u578B\u958B\u767C\uFF0C\u800C`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `\u7B2C\u4E8C\u7A2E\u65B9\u6CD5`), `\u662F\u4E00\u7A2E\u5728\u67B6\u69CB\u4E0A\u8F03\u5B8C\u5584\u7684\u65B9\u6CD5\uFF0C\u53EF\u6B63\u78BA\u5730\u9023\u63A5UI\u8207\u73FE\u5BE6\u4E16\u754C\u4E2D\u7684\u5269\u9918\u5143\u4EF6\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u672C\u6587\u672B\uFF0C\u6211\u5011\u5C07\u9023\u7D50\u4F7F\u7528\u5169\u7A2E\u65B9\u6CD5\u7684\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "the-model-class"
  }), `Model\u985E`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6240\u6709TouchGFX\u61C9\u7528\u90FD\u6709Model\u985E\uFF0C\u9664\u4E86\u5B58\u5132UI\u72C0\u614B\u8CC7\u8A0A\uFF0C\u9084\u7528\u4F5C\u9762\u5411\u5468\u570D\u7CFB\u7D71\u7684\u4ECB\u9762\u3002 \u9019\u88E1\u6211\u5011\u6307\u7684\u662F\u5169\u7A2E\u786C\u9AD4\u5916\u8A2D\uFF0C\u4F46\u4E5F\u8207\u7CFB\u7D71\u4E2D\u7684\u5176\u4ED6OS\u4EFB\u52D9\u9032\u884C\u901A\u4FE1\u3002 \u597D\u7684\u8A2D\u8A08\u901A\u5E38\u4E0D\u6703\u5728\u5404\u81EA\u7684View\u985E\u4E2D\u8A2A\u554F\u5176\u4ED6\u8EDF\u9AD4\u6A21\u7D44\u6216\u786C\u9AD4\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(FurtherReading/* default */.Z, {
    mdxType: "FurtherReading"
  }, "\u5982\u9700\u77AD\u89E3\u66F4\u591A\u95DC\u65BCModel\u7684\u77E5\u8B58\uFF0C\u8ACB\u53C3\u8003\uFF1A", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "../software-architecture/model-view-presenter-design-pattern",
    mdxType: "Link"
  }, "MVP\u6A21\u5F0F")), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Model\u985E\u975E\u5E38\u9069\u5408\u653E\u7F6E\u4EFB\u4F55\u6B64\u985E\u4ECB\u9762\u7A0B\u5F0F\u78BC\uFF0C\u539F\u56E0\u5728\u65BC\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `Model\u985E\u6709 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `tick()`), ` \u51FD\u6578\uFF0C\u6703\u5728\u6BCF\u4E00\u5E40\u81EA\u52D5\u547C\u53EB\uFF0C\u4E26\u4E14\u53EF\u5BE6\u73FE\u7528\u65BC\u67E5\u627E\u4F86\u81EA\u5176\u4ED6\u5B50\u6A21\u7D44\u7684\u4E8B\u4EF6\u6216\u5C0D\u4E8B\u4EF6\u4F5C\u51FA\u53CD\u61C9\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `Model\u985E\u5177\u6709\u6307\u5411\u7576\u524D\u6D3B\u52D5Presenter\u7684\u6307\u6A19\uFF0C\u70BA\u7684\u662F\u80FD\u5920\u5C07\u50B3\u5165\u4E8B\u4EF6\u901A\u77E5UI\u3002`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "system-interfacing"
  }), `\u7CFB\u7D71\u4ECB\u9762`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8207\u5468\u570D\u7CFB\u7D71\u9023\u63A5\u7684\u65B9\u5F0F\u6709\u5169\u7A2E\uFF1A\u4E00\u7A2E\u662F\u5F9EGUI\u4EFB\u52D9\u76F4\u63A5\u63A1\u6A23\uFF0C\u53E6\u4E00\u7A2E\u662F\u5F9E\u4E8C\u7D1A\u4EFB\u52D9\u63A1\u6A23`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-gui-task"
  }), `\u5F9EGUI\u4EFB\u52D9\u63A1\u6A23`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u9023\u63A5\u5468\u570D\u7CFB\u7D71\u7684\u6700\u4F73\u65B9\u5F0F\u53D6\u6C7A\u65BC\u60A8\u9700\u8981\u7684\u63A1\u6A23\u983B\u7387\u3001\u6642\u9593\u6D88\u8017\u548C\u6642\u9593\u56B4\u683C\u6027\u7684\u8981\u6C42\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u9019\u4E9B\u65B9\u9762\u7684\u8981\u6C42\u4E26\u4E0D\u56B4\u683C\uFF0C\u90A3\u9EBC\u6700\u7C21\u55AE\u7684\u65B9\u6CD5\u5C31\u662F\u5728 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \u51FD\u6578\u4E2D\u76F4\u63A5\u5C0D\u5468\u570D\u7CFB\u7D71\u9032\u884C\u63A1\u6A23\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u63A1\u6A23\u983B\u7387\u4F4E\u65BC\u5E40\u7387\uFF08\u901A\u5E38\u7D04\u70BA60Hz\uFF09\uFF0C\u60A8\u53EF\u4EE5\u6DFB\u52A0\u8A08\u6578\u5668\uFF0C\u4E26\u4E14\u53EA\u5728\u6BCF\u6B21\u7684\u7B2CN\u500B\u8A08\u6578\u9EDE\u63A1\u6A23\u3002 \u5982\u679C\u9019\u6A23\u505A\uFF0C\u5247\u63A1\u6A23\u64CD\u4F5C\u5FC5\u9808\u7A0D\u5FAE\u5FEB\u4E00\u4E9B\uFF08\u901A\u5E38\u70BA1ms\u6216\u66F4\u77ED\uFF09\uFF0C\u5426\u5247\u6703\u5F71\u97FF\u5E40\u7387\uFF0C\u56E0\u70BA\u63A1\u6A23\u662F\u5728GUI\u4EFB\u52D9\u7684\u80CC\u666F\u4E0B\u57F7\u884C\u7684\u4E26\u4E14\u6703\u5EF6\u9072\u5E40\u7E6A\u88FD\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-secondary-task"
  }), `\u5F9E\u4E8C\u7D1A\u4EFB\u52D9\u63A1\u6A23`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6216\u8005\uFF0C\u5982\u679C\u4E0D\u65B9\u4FBF\u5C07\u8207\u5468\u570D\u7CFB\u7D71\u7684\u4EA4\u4E92\u76F4\u63A5\u653E\u5728GUI\u4EFB\u52D9\u7684\u80CC\u666F\u4E0B\uFF0C\u53EF\u4EE5\u65B0\u5EFA\u8CA0\u8CAC\u57F7\u884C\u63A1\u6A23\u7684OS\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u60A8\u53EF\u4EE5\u6839\u64DA\u7279\u5B9A\u5834\u666F\u7684\u9700\u8981\uFF0C\u5C07\u8A72\u4EFB\u52D9\u914D\u7F6E\u70BA\u4EE5\u6E96\u78BA\u7684\u6642\u9593\u9593\u9694\u904B\u884C\u3002 \u6B64\u5916\uFF0C\u6839\u64DA\u60A8\u7684\u9700\u6C42\uFF0C\u6B64\u65B0\u4EFB\u52D9\u7684\u512A\u5148\u9806\u5E8F\u53EF\u4EE5\u4F4E\u65BC\u6216\u9AD8\u65BCGUI\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u512A\u5148\u9806\u5E8F\u66F4\u9AD8\uFF0C\u5247\u53EF\u4EE5\u78BA\u4FDD\u5B83\u6703\u6E96\u78BA\u5730\u5728\u6307\u5B9A\u6642\u9593\u904B\u884C\uFF0C\u7121\u8AD6GUI\u4EFB\u52D9\u5728\u57F7\u884C\u4EC0\u9EBC\u64CD\u4F5C\u3002 \u6709\u4E00\u500B\u7F3A\u9EDE\u662F\uFF0C\u5982\u679C\u662FCPU\u5360\u7528\u91CF\u5927\u7684\u9032\u7A0B\uFF0C\u53EF\u80FD\u6703\u5F71\u97FFUI\u7684\u5E40\u7387\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u63A1\u6A23\u5C0D\u6642\u9593\u7684\u8981\u6C42\u4E0D\u56B4\u683C\uFF0C\u5247\u53EF\u4EE5\u5206\u914D\u4F4E\u65BCGUI\u4EFB\u52D9\u7684\u512A\u5148\u9806\u5E8F\uFF0C\u9019\u6A23UI\u5E40\u7387\u5C07\u6C38\u9060\u4E0D\u53D7\u5468\u570D\u7CFB\u7D71\u63A1\u6A23\u7684\u5F71\u97FF\u3002 \u5728\u6E32\u67D3\u6642\uFF0CGUI\u4EFB\u52D9\u5C07\u4F11\u7720\u5F88\u9577\u6642\u9593\uFF08\u5982\u5728\u7B49\u5F85\u57FA\u65BCDMA\u7684\u50CF\u7D20\u50B3\u8F38\u5B8C\u6210\u6642\uFF09\uFF0C\u5141\u8A31\u512A\u5148\u9806\u5E8F\u8F03\u4F4E\u7684\u4EFB\u52D9\u983B\u7E41\u904B\u884C\uFF0C\u9019\u5C0D\u7D55\u5927\u591A\u6578\u61C9\u7528\u800C\u8A00\u8DB3\u5920\u4E86\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u60A8\u4F7F\u7528\u4E8C\u7D1A\u4EFB\u52D9\u6CD5\uFF0C\u5EFA\u8B70\u60A8\u4F7F\u7528RTOS\u63D0\u4F9B\u7684\u4EFB\u52D9\u9593\u6D88\u606F\u50B3\u9001\u7CFB\u7D71\u3002 \u5927\u591A\u6578\uFF08\u5982\u679C\u4E0D\u662F\u5168\u90E8\uFF09RTOSes\u5177\u6709\u4F47\u5217/\u90F5\u4EF6\u6A5F\u5236\uFF0C\u53EF\u5F9E\u4E00\u500B\u4EFB\u52D9\u5411\u53E6\u4E00\u500B\u4EFB\u52D9\u767C\u9001\u8CC7\u6599\uFF08\u901A\u5E38\u70BA\u4F7F\u7528\u8005\u5B9A\u7FA9\u7684C\u8A9E\u8A00\u7D50\u69CB\u9AD4\u3001\u4F4D\u5143\u7D44\u9663\u5217\u6216\u7C21\u55AE\u7684\u6574\u6578\uFF09\u3002 \u70BA\u4E86\u5C07\u65B0\u8CC7\u6599\u50B3\u905E\u7D66GUI\u4EFB\u52D9\uFF0C\u70BAUI\u4EFB\u52D9\u8A2D\u7F6E\u90F5\u7BB1\u6216\u8A0A\u606F\u4F47\u5217\uFF0C\u4E26\u4F7F\u7528\u6B64\u6D88\u606F\u50B3\u9001\u7CFB\u7D71\u5C07\u8CC7\u6599\u767C\u9001\u7D66GUI\u4EFB\u52D9\u3002 \u7136\u5F8C\u53EF\u4EE5 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \u8F2A\u8A62GUI\u4EFB\u52D9\u7684\u90F5\u7BB1\uFF0C\u67E5\u770B\u662F\u5426\u6709\u4EFB\u4F55\u65B0\u8CC7\u6599\u5230\u9054\u3002 \u5982\u679C\u6709\uFF0C\u8B80\u53D6\u8CC7\u6599\u4E26\u76F8\u61C9\u5730\u66F4\u65B0UI\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "propagating-data-to-ui"
  }), `\u5411UI\u50B3\u64AD\u8CC7\u6599`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u7121\u8AD6\u60A8\u4F7F\u7528`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `\u5F9EGUI\u4EFB\u52D9\u63A1\u6A23`), `\u9084\u662F`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `\u5F9E\u4E8C\u7D1A\u4EFB\u52D9\u63A1\u6A23`), `\uFF0C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \u51FD\u6578\u90FD\u662FGUI\u4EFB\u52D9\u767C\u73FE\u8981\u5728UI\u4E2D\u986F\u793A\u7684\u65B0\u8CC7\u6599\u7684\u5730\u65B9\u3002 \u9664\u4E86\u5145\u7576\u5468\u570D\u7CFB\u7D71\u7684\u4ECB\u9762\uFF0CModel\u985E\u9084\u8CA0\u8CAC\u4FDD\u5B58\u72C0\u614B\u8CC7\u6599\uFF08\u5982\u524D\u6587\u6240\u8FF0\uFF09\uFF0C\u56E0\u6B64\u53EF\u80FD\u6709\u4E9B\u72C0\u614B\u8B8A\u6578\u4E5F\u9700\u8981\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6211\u5011\u4F86\u8003\u616E\u4E00\u500B\u7C21\u55AE\u7684\u7BC4\u4F8B\uFF1A\u6EAB\u5EA6\u611F\u6E2C\u5668\u9023\u63A5\u5230\u7CFB\u7D71\uFF0C\u7576\u524D\u6EAB\u5EA6\u5C07\u986F\u793A\u5728UI\u4E0A\u3002 \u5728\u6E96\u5099\u4E2D\uFF0C\u6211\u5011\u5C07\u589E\u52A0Model\u985E\u4EE5\u4FBF\u652F\u63F4\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class Model
{
public:
  // Function that allow your Presenters to read current temperature.
  int getCurrentTemperature() const { return currentTemperature; }

  // Called automatically by framework every tick.
  void tick();
  ...
private:
  // Variable storing last received temperature;
  int currentTemperature;
  ...
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u4E0A\u8FF0\u60C5\u6CC1\u4E0B\uFF0C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Presenter`), ` \u80FD\u5920\u8A62\u554FModel\u7576\u524D\u6EAB\u5EA6\uFF0C\u4EE5\u4FBF\u5728\u9032\u5165\u986F\u793A\u6EAB\u5EA6\u7684\u87A2\u5E55\u6642Presenter\u5728UI\uFF08View\uFF09\u4E2D\u8A2D\u7F6E\u6B64\u503C\u3002 \u73FE\u5728\uFF0C\u9700\u8981\u80FD\u5920\u5728\u63A5\u6536\u5230\u65B0\u7684\u6EAB\u5EA6\u8CC7\u8A0A\u6642\u518D\u6B21\u66F4\u65B0UI\u3002 \u70BA\u6B64\uFF0C\u6211\u5011\u5229\u7528Model\u6709\u6307\u5411\u7576\u524D\u6D3B\u52D5Presenter\u6307\u6A19\u7684\u7279\u6027\u3002 \u8A72\u6307\u6A19\u7684\u985E\u578B\u662F\u4ECB\u9762\uFF08`, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `ModelListener`), `\uFF09\uFF0C\u70BA\u4E86\u53CD\u6620\u5408\u9069\u7684\u61C9\u7528\u7279\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u9032\u884C\u4FEE\u6539\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "ModelListener.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class ModelListener
{
public:
  // Call this function to notify that temperature has changed.
  // Per default, use an empty implementation so that only those
  // Presenters interested in this specific event need to
  // override this function.
  virtual void notifyTemperatureChanged(int newTemperature) {}
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u73FE\u5728\uFF0C\u6211\u5011\u5DF2\u7D93\u9023\u63A5\u4E86\u6B64\u4ECB\u9762\uFF0C\u5269\u9918\u7684\u5DE5\u4F5C\u662F\u57F7\u884C\u50B3\u5165\u201C`, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `\u65B0\u6EAB\u5EA6`), `\u201D\u4E8B\u4EF6\u7684\u5BE6\u969B\u63A1\u6A23 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`)), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.cpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
  // Pseudo-code for sampling data
  if (OS_Poll(GuiTaskMBox))
  {
    // Here we assume that you have defined a "Message" struct containing type and data,
    // along with some event definitions.
    struct Message msg = OS_Read(GuiTaskMBox);
    if (msg.eventType == EVT_TEMP_CHANGED)
    {
       // We received information that temperature has changed.
       // First, update Model state variable
       currentTemperature = msg.data;

      // Second, notify the currently active Presenter that temperature has changed.
      // The modelListener pointer points to the currently active Presenter.
      if (modelListener != 0)
      {
        modelListener->notifyTemperatureChanged(currentTemperature);
      }
    }
  }
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4EE5\u4E0A\u65B9\u6CD5\u53EF\u78BA\u4FDD\u5169\u9EDE\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "currentTemperature"), " \u8B8A\u6578\u7E3D\u662F\u6700\u65B0\u503C\uFF0C\u56E0\u6B64Presenter\u53EF\u96A8\u6642\u7372\u53D6\u7576\u524D\u6EAB\u5EA6\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "Presenter"), " \u7ACB\u5373\u901A\u77E5\u6EAB\u5EA6\u8B8A\u5316\uFF0C\u4E26\u80FD\u63A1\u53D6\u5408\u9069\u63AA\u65BD\u3002")), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `MVP\u6A21\u5F0F\u7684\u4E00\u5927\u512A\u52E2\u662F\u6839\u64DA\u7576\u524D\u6240\u5728\u87A2\u5E55\u5BE6\u73FE\u55AE\u7368\u7684\u901A\u77E5\u8655\u7406\u3002 \u4F8B\u5982\uFF0C\u5047\u8A2D\u5728\u986F\u793A\u67D0\u985E\u8A2D\u7F6E\u529F\u80FD\u8868 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `\uFF08\u5982MainMenuPresenter/MainMenuView\u70BA\u555F\u52D5\u72C0\u614B\uFF09`), ` \u6642\u767C\u751F\u4E86\u6EAB\u5EA6\u8B8A\u5316\u4E8B\u4EF6\uFF0C\u6B64\u6642\u7576\u524D\u6EAB\u5EA6\u7121\u95DC\u7DCA\u8981\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u7531\u65BC `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` \u51FD\u6578\u5177\u6709\u9810\u8A2D\u7684\u7A7A\u57F7\u884C\uFF0C\u6B64\u901A\u77E5\u50C5\u6703\u88AB `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `MainMenuPresenter\u5FFD\u7565\u3002`), `. \u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u6709 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `TemperatureControlPresenter`), ` \uFF0C\u60A8\u53EF\u4EE5\u5728\u8A72Presenter\u4E2D\u91CD\u5BEB `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` \u51FD\u6578\uFF0C\u4E26\u901A\u77E5View\u5B83\u61C9\u986F\u793A\u66F4\u65B0\u5F8C\u7684\u6EAB\u5EA6\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "TemperatureControlPresenter.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TemperatureControlPresenter : public ModelListener
{
public:
  // override the empty function.
  virtual void notifyTemperatureChanged(int newTemperature) {
    view.setTemp(newTemperature);
  }
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u7576\u7136\uFF0CView\u985E `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `TemperatureControlView`), `\u5FC5\u9808\u5BE6\u73FE `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setTemp`), ` \u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "transmitting-data-from-ui-to-surrounding-system"
  }), `\u5F9EUI\u5411\u5468\u570D\u7CFB\u7D71\u767C\u9001\u8CC7\u6599`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u53CD\u65B9\u5411\u5F9EUI\u5411\u5468\u570D\u7CFB\u7D71\u50B3\u8F38\u8CC7\u6599/\u4E8B\u4EF6\u6642\uFF0C\u5C07\u901A\u904EModel\u4EE5\u5927\u81F4\u4E0A\u76F8\u540C\u7684\u65B9\u5F0F\u4F86\u57F7\u884C\u3002 \u7E7C\u7E8C\u524D\u9762\u7684\u4F8B\u5B50\uFF0C\u5982\u679C\u6211\u5011\u9700\u8981\u589E\u52A0\u914D\u7F6E\u65B0\u7684\u76EE\u6A19\u6EAB\u5EA6\u7684\u80FD\u529B\uFF0C\u6211\u5011\u5C07\u5411Model\u6DFB\u52A0\u4EE5\u4E0B\u5167\u5BB9\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void setNewTargetTemperature(int newTargetTemp)
{
  // Pseudo-code for sending an event to a task responsible for controlling temperature.
  struct Message msg;
  msg.eventType = EVT_SET_TARGET_TEMP;
  msg.data = newTargetTemp;
  OS_Send(SystemTaskMBox, &msg);
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u4F7F\u7528\u8005\u5728UI\u4E2D\u8A2D\u7F6E\u65B0\u7684\u76EE\u6A19\u6EAB\u5EA6\uFF0CView\u53EF\u901A\u77E5\u4FDD\u6709\u6307\u5411Model\u7269\u4EF6\u6307\u6A19\u7684Presenter\uFF0C\u5F9E\u800C\u80FD\u5920\u547C\u53EB `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setNewTargetTemperature`), ` \u51FD\u6578\u4E2D\u76F4\u63A5\u5C0D\u5468\u570D\u7CFB\u7D71\u9032\u884C\u63A1\u6A23\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\u7BC4\u4F8B`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E0B\u9762\u7684\u7BC4\u4F8B\u662F\u70BA\u7279\u5B9A\u65BC\u958B\u767C\u677F\u7684\u6F14\u793A\uFF08BSD\uFF09\uFF0C\u4F46\u6F14\u793A\u7684\u8A31\u591A\u7A0B\u5F0F\u78BC\u53EF\u91CD\u8907\u7528\u65BC\u5176\u4ED6\u6F14\u793A\u677F\u548C\u81EA\u8A02\u786C\u9AD4\u3002 \u5C0D\u65BC\u9019\u4E9B\u7BC4\u4F8B\uFF0C\u6211\u5011\u5728STM32CubeMX\u4E2D\u5275\u5EFA\u4EFB\u52D9\u548C\u4F47\u5217\u3002 \u6211\u5011\u7136\u5F8C\u586B\u5145\u751F\u6210\u7684\u4EFB\u52D9\uFF0C\u4E26\u5728 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `main_user.c\u4E2D\u5BE6\u73FE\u7BC4\u4F8B\u7528\u6236\u7A0B\u5F0F\u78BC\u3002`), `. \u7BC4\u4F8B\u4F7F\u7528STM32CubeMX BSP\u5EAB\u4F86\u63A7\u5236STM32\u8A55\u4F30\u5957\u4EF6\u4E0A\u7684LED\u3001\u4F7F\u7528\u8005\u6309\u9215\u3001\u4EE5\u53CA\u5176\u4ED6\u5916\u8A2D\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-gui-task"
  }), `\u4F86\u81EAGUI\u4EFB\u52D9`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u500B\u7BC4\u4F8B\u61C9\u7528\u3001\u4E00\u500BBSD\uFF0C\u4F4D\u65BC\u6700\u65B0\u7248\u672C\u7684TouchGFX Designer\u4E0B\uFF0C\u5177\u9AD4\u8DEF\u5F91\uFF1A\u6F14\u793A-> \u958B\u767C\u677F\u7279\u5B9A\u6F14\u793A-> STM32F46G\u63A2\u7D22\u5957\u4EF6\u63A7\u5236LED\uFF08\u5F9EGUI\uFF09\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8A72\u61C9\u7528\u6F14\u793A\u5982\u4F55\u5C0D\u6309\u9215\u9032\u884C\u63A1\u6A23\u548C\u63A7\u5236LED\u3002 Model\u985E\u5C0D\u6309\u9215\u63A1\u6A23\uFF0C\u4E26\u66F4\u65B0LED\u4EE5\u8207\u61C9\u7528\u72C0\u614B\u76F8\u5339\u914D\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-other-task"
  }), `\u4F86\u81EA\u5176\u4ED6\u4EFB\u52D9`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u500B\u7BC4\u4F8B\u61C9\u7528\u3001\u4E00\u500BBSD\uFF0C\u4F4D\u65BC\u6700\u65B0\u7248\u672C\u7684TouchGFX Designer\u4E0B\uFF0C\u5177\u9AD4\u8DEF\u5F91\uFF1A\u6F14\u793A-> \u958B\u767C\u677F\u7279\u5B9A\u6F14\u793A-> STM32H7B3I\u8A55\u4F30\u677F\u6A21\u64EC\u63A1\u6A23\u5668\u4EFB\u52D9\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8A72\u61C9\u7528\u6F14\u793A\u5982\u4F55\u5728\u55AE\u7368\u7684\u57F7\u884C\u7DD2\u4E2D\u5C0D\u6A21\u64EC\u8F38\u5165\u9032\u884C\u63A1\u7528\u3002 \u8A72\u7BC4\u4F8B\u4F7F\u7528MVP\u67B6\u69CB\u5C07\u6A21\u64EC\u503C\u50B3\u8F38\u5230View\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u500B\u7BC4\u4F8B\u61C9\u7528\u3001\u4E00\u500BBSD\uFF0C\u4F4D\u65BC\u6700\u65B0\u7248\u672C\u7684TouchGFX Designer\u4E0B\uFF0C\u5177\u9AD4\u8DEF\u5F91\uFF1A\u6F14\u793A-> \u958B\u767C\u677F\u7279\u5B9A\u6F14\u793A-> STM32F46G\u63A2\u7D22\u5957\u4EF6\u4EFB\u52D9\u9593\u901A\u4FE1\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8A72\u61C9\u7528\u6F14\u793A\u4E86\u4EFB\u52D9\u9593\u901A\u4FE1\uFF0C\u4EE5\u53CA\u8207UI\u4E4B\u9593\u7684\u50B3\u64AD\u3002 \u5728\u60A8\u81EA\u5DF1\u9032\u884C\u8A2D\u7F6E\u6642\uFF0C\u5B83\u4E5F\u8A31\u80FD\u6FC0\u767C\u60A8\u7684\u9748\u611F\u3002 \u8A72\u7BC4\u4F8B\u5728\u7528C\u7A0B\u5F0F\u78BC\u5BE6\u73FE\u7684\u5F8C\u7AEF\u7CFB\u7D71\u8207C++ TouchGFX GUI\u4E4B\u9593\u9032\u884C\u901A\u4FE1\u3002 \u8A72\u7BC4\u4F8B\u5728FreeRTOS\u4E4B\u4E0A\u7684STM32F746G-DISCO\u677F\u4E0A\u904B\u884C\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-multiple-tasks"
  }), `\u4F86\u81EA\u591A\u500B\u4EFB\u52D9`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u500B\u7BC4\u4F8B\u61C9\u7528\u3001\u4E00\u500BBSD\uFF0C\u4F4D\u65BC\u6700\u65B0\u7248\u672C\u7684TouchGFX Designer\u4E0B\uFF0C\u5177\u9AD4\u8DEF\u5F91\uFF1A\u6F14\u793A-> \u958B\u767C\u677F\u7279\u5B9A\u6F14\u793A-> STM32F769I\u63A2\u7D22\u5957\u4EF6\u591A\u5DE5\u901A\u4FE1\u6F14\u793A\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8A72\u61C9\u7528\u5C0D\u6309\u9215\u72C0\u614B\u9032\u884C\u63A1\u6A23\uFF0C\u4E26\u5728\u6309\u4E0B\u6309\u9215\u6642\u901A\u904EGUI\u8A0A\u606F\u4F47\u5217\u50B3\u905E\u6D88\u606F\u3002 \u56E0\u6B64\uFF0C\u6211\u5011\u53EF\u4EE5\u901A\u904E\u6309\u4F4F\u6309\u9215\u4F86\u63A8\u9032\u61C9\u7528\u4E2D\u7684\u52D5\u756B\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8A72\u61C9\u7528\u4F7F\u7528\u4E09\u500BFreeRTOS\u4EFB\u52D9\u3002 \u4E00\u500B\u7528\u65BCGUI\uFF0C\u53E6\u5916\u5169\u500B\u5206\u5225\u7528\u65BC\u5169\u500B\u5916\u8A2D\uFF08LED\u548C\u4F7F\u7528\u8005\u6309\u9215\uFF09\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-task-and-external-interrupt-line"
  }), `\u4F86\u81EA\u4EFB\u52D9\u548C\u5916\u90E8\u4E2D\u65B7\u7DDA\u8DEF`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u500B\u7BC4\u4F8B\u61C9\u7528\u3001\u4E00\u500BBSD\uFF0C\u4F4D\u65BC\u6700\u65B0\u7248\u672C\u7684TouchGFX Designer\u4E0B\uFF0C\u5177\u9AD4\u8DEF\u5F91\uFF1A\u6F14\u793A-> \u958B\u767C\u677F\u7279\u5B9A\u6F14\u793A-> STM32F769I\u63A2\u7D22\u5957\u4EF6\u5916\u90E8\u4E2D\u65B7\u7DDA\u8DEF\u6F14\u793A\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8A72\u61C9\u7528\u5C08\u70BASTM32F769I-DISCO\u958B\u767C\u677F\u800C\u8A2D\u8A08\uFF0C\u5B83\u8207LED\u548C\u4F7F\u7528\u8005\u6309\u9215\u4EA4\u4E92\uFF0C\u4EE5\u4FBF\u5C55\u793A\u5982\u4F55\u5C07C\u7A0B\u5F0F\u78BC\u548C\u786C\u9AD4\u5916\u8A2D\u96C6\u6210\u5230TouchGFX\u61C9\u7528\u4E2D\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8A72\u61C9\u7528\u4EE5EXTI\u6A21\u5F0F\u914D\u7F6E\u6309\u9215\uFF08\u5916\u90E8\u4E2D\u65B7\u7DDA\u8DEF0\uFF09\u3002 \u5176\u884C\u70BA\u662F\u5728\u6309\u4E0B\u6309\u9215\u6642\u63A5\u6536\u4E2D\u65B7\uFF0C\u6B64\u5F8C\u4E2D\u65B7\u6E05\u96F6\u3002 \u9019\u4E0D\u5141\u8A31\u51FA\u73FE\u8207GPIO\u6A21\u5F0F\u4E0B\u76F8\u540C\u7684\u884C\u70BA\uFF0C\u800C\u6703\u662F\u55AE\u6B65\u52D5\u756B\uFF0C\u539F\u56E0\u5728\u65BC\u53EA\u5728\u63A5\u6536\u5230\u4E2D\u65B7\u6642\u901A\u904EGUI\u8A0A\u606F\u4F47\u5217\u767C\u9001\u6D88\u606F\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8A72\u61C9\u7528\u4F7F\u7528\u5169\u500BFreeRTOS\u4EFB\u52D9\u3002 \u4E00\u500B\u7528\u65BCGUI\uFF0C\u4E00\u500B\u7528\u65BCLED\u3002 \uFF08`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#from-multiple-tasks"
  }), `\u591A\u5DE5\u6F14\u793A`), `\u4E2D\u7684Button\u4EFB\u52D9\u5728\u8A72\u61C9\u7528\u4E2D\u4ECD\u8655\u65BC\u6D3B\u52D5\u72C0\u614B\uFF0C\u7528\u65BC\u8209\u4F8B\u8AAA\u660E\u5916\u8A2D\u4EA4\u4E92\u7A0B\u5F0F\u78BC\u5DF2\u79FB\u81F3\u4E2D\u65B7\u8655\u7406\u51FD\u6578\u4E2D\uFF09\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);