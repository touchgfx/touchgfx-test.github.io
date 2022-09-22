"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1604],{

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

/***/ 29036:
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
;// CONCATENATED MODULE: ./i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx
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
  title: "\u540E\u7AEF\u901A\u4FE1"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/backend-communication",
  "id": "development/ui-development/touchgfx-engine-features/backend-communication",
  "title": "\u540E\u7AEF\u901A\u4FE1",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/backend-communication",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/backend-communication",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "backend-communication",
    "title": "\u540E\u7AEF\u901A\u4FE1"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4E8C\u8FDB\u5236\u7FFB\u8BD1",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"
  },
  "next": {
    "title": "Mixins",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/touchgfx-engine-features/mixins"
  }
};
const assets = {};





const toc = [{
  value: "Model\u7C7B",
  id: "the-model-class",
  level: 2
}, {
  value: "\u7CFB\u7EDF\u63A5\u53E3",
  id: "system-interfacing",
  level: 2
}, {
  value: "\u4ECEGUI\u4EFB\u52A1\u91C7\u6837",
  id: "sampling-from-gui-task",
  level: 3
}, {
  value: "\u4ECE\u5176\u4ED6\u4EFB\u52A1\u91C7\u6837",
  id: "sampling-from-secondary-task",
  level: 3
}, {
  value: "\u5411UI\u4F20\u8F93\u6570\u636E",
  id: "propagating-data-to-ui",
  level: 2
}, {
  value: "UI\u5411\u5468\u56F4\u7CFB\u7EDF\u53D1\u9001\u6570\u636E",
  id: "transmitting-data-from-ui-to-surrounding-system",
  level: 2
}, {
  value: "\u793A\u4F8B",
  id: "examples",
  level: 2
}, {
  value: "\u6765\u81EAGUI\u4EFB\u52A1",
  id: "from-gui-task",
  level: 3
}, {
  value: "\u6765\u81EA\u5176\u4ED6\u4EFB\u52A1",
  id: "from-other-task",
  level: 3
}, {
  value: "\u6765\u81EA\u591A\u4E2A\u4EFB\u52A1",
  id: "from-multiple-tasks",
  level: 3
}, {
  value: "\u6765\u81EA\u4EFB\u52A1\u548C\u5916\u90E8\u4E2D\u65AD",
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
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u5927\u591A\u6570\u5E94\u7528\u4E2D\uFF0CUI\u9700\u4EE5\u67D0\u79CD\u65B9\u5F0F\u8FDE\u63A5\u5230\u7CFB\u7EDF\u7684\u5176\u4F59\u90E8\u5206\uFF0C\u5E76\u53D1\u9001\u548C\u63A5\u6536\u6570\u636E\u3002 \u5B83\u53EF\u80FD\u4F1A\u4E0E\u786C\u4EF6\u5916\u8BBE\uFF08\u4F20\u611F\u5668\u6570\u636E\u3001\u6A21\u6570\u8F6C\u6362\u548C\u4E32\u884C\u901A\u4FE1\u7B49\uFF09\u6216\u5176\u4ED6\u8F6F\u4EF6\u6A21\u5757\u8FDB\u884C\u4EA4\u4E92\u901A\u8BAF\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u672C\u6587\u63CF\u8FF0\u4E86\u5B9E\u73B0\u6B64\u7C7B\u4EA4\u4E92\u901A\u8BAF\u7684\u63A8\u8350\u89E3\u51B3\u65B9\u6848\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u4E00\u79CD`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `\u201C\u5FEB\u800C\u4E0D\u7CBE\u201D`), `\u7684\u65B9\u6CD5\uFF0C\u4E3B\u8981\u7528\u4E8E\u539F\u578B\u5F00\u53D1\uFF0C\u800C`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `\u7B2C\u4E8C\u79CD\u65B9\u6CD5`), `\u662F\u4E00\u79CD\u5728\u67B6\u6784\u4E0A\u8F83\u5B8C\u5584\u7684\u65B9\u6CD5\uFF0C\u53EF\u6B63\u786E\u5730\u8FDE\u63A5UI\u4E0E\u73B0\u5B9E\u4E16\u754C\u4E2D\u7684\u5269\u4F59\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u672C\u6587\u672B\u5C3E\uFF0C\u6211\u4EEC\u4F1A\u4ECB\u7ECD\u4F7F\u7528\u4E24\u79CD\u65B9\u6CD5\u7684\u793A\u4F8B\u94FE\u63A5\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "the-model-class"
  }), `Model\u7C7B`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6240\u6709TouchGFX\u5E94\u7528\u90FD\u6709Model\u7C7B\uFF0CModel\u7C7B\u9664\u4E86\u5B58\u50A8UI\u72B6\u6001\u4FE1\u606F\uFF0C\u8FD8\u53EF\u7528\u4F5C\u9762\u5411\u5468\u56F4\u7CFB\u7EDF\u7684\u63A5\u53E3\u3002 \u8FD9\u91CC\u5468\u56F4\u7CFB\u7EDF\u6211\u4EEC\u6307\u7684\u662F\u5728\u4F60\u6574\u4E2A\u7CFB\u7EDF\u4E2D\u7528\u5230\u7684\u786C\u4EF6\u5916\u8BBE\u4EE5\u53CA\u9700\u8981\u8FDB\u884C\u901A\u8BAF\u7684\u5176\u4ED6\u4EFB\u52A1\u3002 \u901A\u5E38\u6765\u8BB2\uFF0C\u5728\u5404\u81EA\u7684View\u7C7B\u4E2D\u76F4\u63A5\u8BBF\u95EE\u5176\u4ED6\u8F6F\u4EF6\u6A21\u5757\u6216\u8005\u786C\u4EF6\u5916\u8BBE\u5E76\u4E0D\u662F\u4E2A\u597D\u7684\u8BBE\u8BA1\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)(FurtherReading/* default */.Z, {
    mdxType: "FurtherReading"
  }, "\u5982\u9700\u4E86\u89E3\u66F4\u591A\u5173\u4E8EModel\u7684\u77E5\u8BC6\uFF0C\u8BF7\u53C2\u8003\uFF1A", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "../software-architecture/model-view-presenter-design-pattern",
    mdxType: "Link"
  }, "MVP\u6A21\u5F0F")), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Model\u7C7B\u975E\u5E38\u9002\u5408\u653E\u7F6E\u4EFB\u4F55\u6B64\u7C7B\u63A5\u53E3\u4EE3\u7801\uFF0C\u539F\u56E0\u5728\u4E8E\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `Model\u7C7B\u6709 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `tick()`), ` \u51FD\u6570\uFF0C\u4F1A\u5728\u6BCF\u4E00\u5E27\u81EA\u52A8\u8C03\u7528\uFF0C\u5E76\u4E14\u53EF\u5B9E\u73B0\u7528\u4E8E\u67E5\u627E\u6765\u81EA\u5176\u4ED6\u5B50\u6A21\u5757\u7684\u4E8B\u4EF6\u6216\u5BF9\u4E8B\u4EF6\u4F5C\u51FA\u53CD\u5E94\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `Model\u7C7B\u6709\u4E00\u4E2A\u6307\u5411\u5F53\u524D\u6D3B\u52A8Presenter\u7684\u6307\u9488\uFF0C\u5B83\u80FD\u591F\u5C06\u4F20\u5165\u4E8B\u4EF6\u901A\u77E5\u7ED9UI\u3002`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "system-interfacing"
  }), `\u7CFB\u7EDF\u63A5\u53E3`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E0E\u5468\u56F4\u7CFB\u7EDF\u4EA4\u4E92\u901A\u8BAF\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A\u4E00\u79CD\u662F\u4ECEGUI\u4EFB\u52A1\u76F4\u63A5\u91C7\u6837\uFF0C\u53E6\u4E00\u79CD\u662F\u4ECE\u53E6\u5916\u4E00\u4E2A\u4EFB\u52A1\u91C7\u6837\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-gui-task"
  }), `\u4ECEGUI\u4EFB\u52A1\u91C7\u6837`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E0E\u5468\u56F4\u7CFB\u7EDF\u4EA4\u4E92\u901A\u8BAF\u7684\u6700\u4F73\u65B9\u5F0F\u53D6\u51B3\u4E8E\u60A8\u9700\u8981\u7684\u91C7\u6837\u9891\u7387\u3001\u91C7\u6837\u65F6\u95F4\u6D88\u8017\u548C\u65F6\u95F4\u7684\u4E25\u683C\u6027\u8981\u6C42\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u8FD9\u4E9B\u65B9\u9762\u7684\u8981\u6C42\u5E76\u4E0D\u4E25\u683C\uFF0C\u90A3\u4E48\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u5C31\u662F\u5728 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \u51FD\u6570\u4E2D\u76F4\u63A5\u5BF9\u5468\u56F4\u7CFB\u7EDF\u8FDB\u884C\u91C7\u6837\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u91C7\u6837\u9891\u7387\u4F4E\u4E8E\u5E27\u7387\uFF08\u901A\u5E38\u7EA6\u4E3A60Hz\uFF09\uFF0C\u60A8\u53EF\u4EE5\u5EF6\u957F\u8BA1\u6570\u5468\u671F\uFF0C\u4F8B\u5982\u6BCF\u6B21\u53EA\u5728\u7B2CN\u4E2A\u8BA1\u6570\u70B9\u91C7\u6837\u3002 \u5982\u679C\u8FD9\u6837\u505A\uFF0C\u90A3\u4E48\u91C7\u6837\u64CD\u4F5C\u5FC5\u987B\u7A0D\u5FAE\u5FEB\u4E00\u4E9B\uFF08\u901A\u5E38\u4E3A1ms\u6216\u66F4\u77ED\uFF09\uFF0C\u5426\u5219\u4F1A\u5F71\u54CD\u5E27\u7387\u3002\u56E0\u4E3A\u91C7\u6837\u662F\u5728GUI\u4EFB\u52A1\u91CC\u6267\u884C\u7684\uFF0C\u8FD9\u6837\u4F1A\u5EF6\u8FDF\u5E27\u7ED8\u5236\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-secondary-task"
  }), `\u4ECE\u5176\u4ED6\u4EFB\u52A1\u91C7\u6837`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u4E0D\u65B9\u4FBF\u5C06\u4E0E\u5468\u56F4\u7CFB\u7EDF\u4EA4\u4E92\u901A\u8BAF\u7684\u91C7\u6837\u653E\u5728GUI\u4EFB\u52A1\u91CC\uFF0C\u90A3\u4E48\u53EF\u4EE5\u65B0\u5EFA\u8D1F\u8D23\u6267\u884C\u91C7\u6837\u64CD\u4F5C\u7684OS\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u60A8\u53EF\u4EE5\u6839\u636E\u7279\u5B9A\u573A\u666F\u7684\u9700\u8981\uFF0C\u5C06\u8BE5\u4EFB\u52A1\u914D\u7F6E\u4E3A\u4EE5\u51C6\u786E\u7684\u65F6\u95F4\u95F4\u9694\u8FD0\u884C\u3002 \u6B64\u5916\uFF0C\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u6B64\u65B0\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u53EF\u4EE5\u4F4E\u4E8E\u6216\u9AD8\u4E8EGUI\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u65E0\u8BBAGUI\u4EFB\u52A1\u5728\u6267\u884C\u4EC0\u4E48\u64CD\u4F5C\uFF0C\u90FD\u80FD\u786E\u4FDD\u5B83\u4F1A\u5728\u6307\u5B9A\u65F6\u95F4\u51C6\u786E\u8FD0\u884C\u3002 \u6709\u4E00\u4E2A\u7F3A\u70B9\u662F\uFF0C\u5982\u679C\u662FCPU\u5360\u7528\u8FDB\u7A0B\u65F6\u95F4\u957F\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CDUI\u7684\u5E27\u7387\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u91C7\u6837\u5BF9\u65F6\u95F4\u7684\u8981\u6C42\u4E0D\u4E25\u683C\uFF0C\u5219\u53EF\u4EE5\u5206\u914D\u4F4E\u4E8EGUI\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\uFF0C\u8FD9\u6837UI\u5E27\u7387\u5C06\u6C38\u8FDC\u4E0D\u53D7\u5468\u56F4\u7CFB\u7EDF\u91C7\u6837\u7684\u5F71\u54CD\u3002 \u5728\u6E32\u67D3\u65F6\uFF0CGUI\u4EFB\u52A1\u5C06\u4F11\u7720\u5F88\u957F\u65F6\u95F4\uFF08\u5982\u5728\u7B49\u5F85\u57FA\u4E8EDMA\u7684\u50CF\u7D20\u4F20\u8F93\u5B8C\u6210\u65F6\uFF09\uFF0C\u8FD9\u53EF\u5141\u8BB8\u4F18\u5148\u7EA7\u8F83\u4F4E\u7684\u4EFB\u52A1\u9891\u7E41\u8FD0\u884C\uFF0C\u5BF9\u7EDD\u5927\u591A\u6570\u5E94\u7528\u800C\u8A00\u4E5F\u8DB3\u591F\u4E86\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u60A8\u4F7F\u7528\u5176\u4ED6\u4EFB\u52A1\uFF0C\u5EFA\u8BAE\u60A8\u4F7F\u7528RTOS\u63D0\u4F9B\u7684\u4EFB\u52A1\u95F4\u6D88\u606F\u4F20\u9001\u65B9\u6CD5\u3002 \u5927\u591A\u6570RTOS\u5177\u6709\u961F\u5217/\u90AE\u4EF6\u673A\u5236\uFF0C\u53EF\u4ECE\u4E00\u4E2A\u4EFB\u52A1\u5411\u53E6\u4E00\u4E2A\u4EFB\u52A1\u53D1\u9001\u6570\u636E\uFF08\u901A\u5E38\u4E3A\u7528\u6237\u5B9A\u4E49\u7684C\u8BED\u8A00\u7ED3\u6784\u4F53\u3001\u5B57\u8282\u9635\u5217\u6216\u7B80\u5355\u7684\u6574\u6570\uFF09\u3002 \u4E3A\u4E86\u5C06\u65B0\u6570\u636E\u4F20\u9012\u7ED9GUI\u4EFB\u52A1\uFF0C\u9700\u8981\u4E3AUI\u4EFB\u52A1\u8BBE\u7F6E\u90AE\u7BB1\u6216\u6D88\u606F\u961F\u5217\uFF0C\u5E76\u4F7F\u7528\u6B64\u6D88\u606F\u4F20\u9001\u7CFB\u7EDF\u5C06\u6570\u636E\u53D1\u9001\u7ED9GUI\u4EFB\u52A1\u3002 \u7136\u540E\u53EF\u4EE5\u5728 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \u4E2D\u8F6E\u8BE2GUI\u4EFB\u52A1\u7684\u90AE\u7BB1\uFF0C\u67E5\u770B\u662F\u5426\u6709\u4EFB\u4F55\u65B0\u6570\u636E\u5230\u8FBE\u3002 \u5982\u679C\u6709\uFF0C\u8BFB\u53D6\u6570\u636E\u5E76\u76F8\u5E94\u5730\u66F4\u65B0UI\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "propagating-data-to-ui"
  }), `\u5411UI\u4F20\u8F93\u6570\u636E`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u65E0\u8BBA\u60A8\u662F\u4ECE`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `GUI\u4EFB\u52A1\u91C7\u6837`), `\u8FD8\u662F\u4ECE`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `\u4E8C\u7EA7\u4EFB\u52A1\u91C7\u6837`), `\uFF0C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \u51FD\u6570\u90FD\u662FGUI\u4EFB\u52A1\u53D1\u73B0\u8981\u5728UI\u4E2D\u663E\u793A\u7684\u65B0\u6570\u636E\u7684\u5730\u65B9\u3002 \u9664\u4E86\u5145\u5F53\u5468\u56F4\u7CFB\u7EDF\u7684\u63A5\u53E3\uFF0CModel\u7C7B\u8FD8\u8D1F\u8D23\u4FDD\u5B58\u72B6\u6001\u6570\u636E\uFF08\u5982\u524D\u6587\u6240\u8FF0\uFF09\uFF0C\u56E0\u6B64\u53EF\u80FD\u6709\u4E9B\u72B6\u6001\u53D8\u91CF\u4E5F\u9700\u8981\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u6211\u4EEC\u6765\u8003\u8651\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF1A\u6E29\u5EA6\u4F20\u611F\u5668\u8FDE\u63A5\u5230\u7CFB\u7EDF\uFF0C\u5C06\u5F53\u524D\u6E29\u5EA6\u663E\u793A\u5728UI\u4E0A\u3002 \u5728\u51C6\u5907\u9636\u6BB5\u4E2D\uFF0C\u6211\u4EEC\u5728Model\u7C7B\u65B0\u589E\u51FD\u6570\u4EE5\u4FBF\u652F\u6301\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
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
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5728\u4E0A\u8FF0\u60C5\u51B5\u4E0B\uFF0C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Presenter`), ` \u80FD\u591F\u8BE2\u95EEModel\u5F53\u524D\u6E29\u5EA6\uFF0C\u4EE5\u4FBF\u5728\u8FDB\u5165\u663E\u793A\u6E29\u5EA6\u7684\u5C4F\u5E55\u65F6Presenter\u5728UI\uFF08View\uFF09\u4E2D\u8BBE\u7F6E\u6B64\u503C\u3002 \u73B0\u5728\uFF0C\u9700\u8981\u80FD\u591F\u5728\u63A5\u6536\u5230\u65B0\u7684\u6E29\u5EA6\u4FE1\u606F\u65F6\u518D\u6B21\u66F4\u65B0UI\u3002 \u4E3A\u6B64\uFF0C\u6211\u4EEC\u5229\u7528Model\u6709\u6307\u5411\u5F53\u524D\u6D3B\u52A8Presenter\u7684\u6307\u9488\u3002 \u8BE5\u6307\u9488\u7684\u7C7B\u578B\u662F\u63A5\u53E3\uFF08`, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `ModelListener`), `\uFF09\uFF0C\u4E3A\u4E86\u53CD\u6620\u5408\u9002\u7684\u5E94\u7528\u7279\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u8FDB\u884C\u4FEE\u6539\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
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
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u73B0\u5728\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u8FDE\u63A5\u4E86\u6B64\u63A5\u53E3\uFF0C\u5269\u4F59\u7684\u5DE5\u4F5C\u662F\u6267\u884C\u4F20\u5165\u201C\u65B0\u6E29\u5EA6\u201D\u4E8B\u4EF6`, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `\u7684\u5B9E\u9645`), `\u91C7\u6837\u3002 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
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
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4EE5\u4E0A\u65B9\u6CD5\u53EF\u786E\u4FDD\u4E24\u70B9\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "currentTemperature"), " \u53D8\u91CF\u603B\u662F\u6700\u65B0\u503C\uFF0C\u56E0\u6B64Presenter\u53EF\u968F\u65F6\u83B7\u53D6\u5F53\u524D\u6E29\u5EA6\u3002"), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "Presenter"), " \u7ACB\u5373\u901A\u77E5\u6E29\u5EA6\u53D8\u5316\uFF0C\u5E76\u80FD\u91C7\u53D6\u5408\u9002\u63AA\u65BD\u3002")), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `MVP\u6A21\u5F0F\u7684\u4E00\u5927\u4F18\u52BF\u662F\u6839\u636E\u5F53\u524D\u6240\u5728\u5C4F\u5E55\u5B9E\u73B0\u5355\u72EC\u7684\u901A\u77E5\u5904\u7406\u3002 \u4F8B\u5982\uFF0C\u5047\u8BBE\u5728\u663E\u793A\u67D0\u4E9B\u8BBE\u7F6E\u83DC\u5355\uFF08\u4F8B\u5982MainMenuPresenter/MainMenuView\u662F\u6FC0\u6D3B\u7684\uFF09 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `\u65F6\u53D1\u751F\u4E86\u4E00\u4E2A\u6E29\u5EA6\u53D8\u5316\u7684\u4E8B\u4EF6\uFF0C`), ` \u800C\u5F53\u524D\u6E29\u5EA6\u4E0E\u6B64\u65E0\u5173\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u56E0\u4E3A `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` \u51FD\u6570\u5177\u6709\u9ED8\u8BA4\u7684\u7A7A\u5B9E\u73B0\uFF0C\u6B64\u901A\u77E5\u4F1A\u88AB `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `MainMenuPresenter\u5FFD\u7565\u3002`), `. \u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `\u6709TemperatureControlPresenter`), ` \uFF0C\u60A8\u53EF\u4EE5\u5728\u8BE5Presenter\u4E2D\u91CD\u5199 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` notifyTemperatureChanged\u51FD\u6570\uFF0C\u5E76\u901A\u77E5View\u5B83\u5E94\u663E\u793A\u66F4\u65B0\u540E\u7684\u6E29\u5EA6\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
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
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5F53\u7136\uFF0CView\u7C7B `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `TemperatureControlView`), `\u5FC5\u987B\u5B9E\u73B0 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setTemp`), ` \u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "transmitting-data-from-ui-to-surrounding-system"
  }), `UI\u5411\u5468\u56F4\u7CFB\u7EDF\u53D1\u9001\u6570\u636E`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5BF9\u5E94\u7684\u4ECEUI\u5411\u5468\u56F4\u7CFB\u7EDF\u4F20\u8F93\u6570\u636E/\u4E8B\u4EF6\u65F6\uFF0C\u5C06\u901A\u8FC7Model\u4EE5\u5927\u4F53\u4E0A\u76F8\u540C\u7684\u65B9\u5F0F\u6765\u6267\u884C\u3002 \u7EE7\u7EED\u524D\u9762\u7684\u4F8B\u5B50\uFF0C\u5982\u679C\u6211\u4EEC\u9700\u8981\u589E\u52A0\u8BBE\u7F6E\u65B0\u7684\u76EE\u6807\u6E29\u5EA6\u7684\u80FD\u529B\uFF0C\u6211\u4EEC\u5C06\u5411Model\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
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
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u5982\u679C\u7528\u6237\u5728UI\u4E2D\u8BBE\u7F6E\u65B0\u7684\u76EE\u6807\u6E29\u5EA6\uFF0CView\u53EF\u901A\u77E5\u4FDD\u6709\u6307\u5411Model\u5BF9\u8C61\u6307\u9488\u7684Presenter\uFF0C\u4ECE\u800C\u80FD\u591F\u8C03\u7528 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setNewTargetTemperature\u51FD\u6570\u3002`), ` \u51FD\u6570\u4E2D\u76F4\u63A5\u5BF9\u5468\u56F4\u7CFB\u7EDF\u8FDB\u884C\u91C7\u6837\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\u793A\u4F8B`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E0B\u9762\u7684\u793A\u4F8B\u662F\u4E3A\u7279\u5B9A\u4E8E\u677F\u4EF6\u7684\u6F14\u793A\uFF08BSD\uFF09\uFF0C\u4F46\u6F14\u793A\u7684\u8BB8\u591A\u4EE3\u7801\u53EF\u91CD\u590D\u7528\u4E8E\u5176\u4ED6\u6F14\u793A\u677F\u548C\u5B9A\u5236\u786C\u4EF6\u3002 \u5BF9\u4E8E\u8FD9\u4E9B\u793A\u4F8B\uFF0C\u6211\u4EEC\u5728STM32CubeMX\u4E2D\u521B\u5EFA\u4EFB\u52A1\u548C\u961F\u5217\u3002 \u6211\u4EEC\u7136\u540E\u586B\u5145\u751F\u6210\u7684\u4EFB\u52A1\uFF0C\u5E76\u5728 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `main_user.c\u4E2D\u5B9E\u73B0\u793A\u4F8B\u7528\u6237\u4EE3\u7801\u3002`), `. \u793A\u4F8B\u4F7F\u7528STM32CubeMX BSP\u5E93\u6765\u63A7\u5236STM32\u8BC4\u4F30\u5957\u4EF6\u4E0A\u7684LED\u3001\u7528\u6237\u6309\u94AE\u3001\u4EE5\u53CA\u5176\u4ED6\u5916\u8BBE\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-gui-task"
  }), `\u6765\u81EAGUI\u4EFB\u52A1`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u4E2A\u793A\u4F8B\u5E94\u7528\u3001\u4E00\u4E2ABSD\uFF0C\u4F4D\u4E8E\u6700\u65B0\u7248\u672C\u7684TouchGFX\u8BBE\u8BA1\u5668\u4E0B\uFF0C\u5177\u4F53\u8DEF\u5F84> \u6F14\u793A->\u677F\u4EF6\u7279\u5B9A\u6F14\u793A>  STM32F46G\u63A2\u7D22\u5957\u4EF6\u63A7\u5236LED\uFF08\u4ECEGUI\uFF09\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8BE5\u5E94\u7528\u6F14\u793A\u5982\u4F55\u5BF9\u6309\u94AE\u8FDB\u884C\u91C7\u6837\u548C\u63A7\u5236LED\u3002 Model\u7C7B\u5BF9\u6309\u94AE\u91C7\u6837\uFF0C\u5E76\u66F4\u65B0LED\u4EE5\u4E0E\u5E94\u7528\u72B6\u6001\u76F8\u5339\u914D\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-other-task"
  }), `\u6765\u81EA\u5176\u4ED6\u4EFB\u52A1`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u4E2A\u793A\u4F8B\u5E94\u7528\u3001\u4E00\u4E2ABSD\uFF0C\u4F4D\u4E8E\u6700\u65B0\u7248\u672C\u7684TouchGFX\u8BBE\u8BA1\u5668\u4E0B\uFF0C\u5177\u4F53\u8DEF\u5F84\uFF1A\u6F14\u793A-> \u677F\u4EF6\u7279\u5B9A\u6F14\u793A->  STM32H7B3I\u8BC4\u4F30\u677F\u6A21\u62DF\u91C7\u6837\u5668\u4EFB\u52A1\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8BE5\u5E94\u7528\u6F14\u793A\u5982\u4F55\u5728\u5355\u72EC\u7684\u7EBF\u7A0B\u4E2D\u5BF9\u6A21\u62DF\u8F93\u5165\u8FDB\u884C\u91C7\u7528\u3002 \u8BE5\u793A\u4F8B\u4F7F\u7528MVP\u67B6\u6784\u5C06\u6A21\u62DF\u503C\u4F20\u8F93\u5230View\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u4E2A\u793A\u4F8B\u5E94\u7528\u3001\u4E00\u4E2ABSD\uFF0C\u4F4D\u4E8E\u6700\u65B0\u7248\u672C\u7684TouchGFX\u8BBE\u8BA1\u5668\u4E0B\uFF0C\u5177\u4F53\u8DEF\u5F84\uFF1A\u6F14\u793A-> \u677F\u4EF6\u7279\u5B9A\u6F14\u793A-> STM32F46G\u63A2\u7D22\u5957\u4EF6\u4EFB\u52A1\u95F4\u901A\u4FE1\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8BE5\u5E94\u7528\u6F14\u793A\u4E86\u4EFB\u52A1\u95F4\u901A\u4FE1\uFF0C\u4EE5\u53CA\u4E0EUI\u4E4B\u95F4\u7684\u4F20\u64AD\u3002 \u5728\u60A8\u81EA\u5DF1\u8FDB\u884C\u8BBE\u7F6E\u65F6\uFF0C\u5B83\u4E5F\u8BB8\u80FD\u6FC0\u53D1\u60A8\u7684\u7075\u611F\u3002 \u8BE5\u793A\u4F8B\u5728\u540E\u7AEF\u7CFB\u7EDF\u4F7F\u7528C\u4EE3\u7801\u5B9E\u73B0\uFF0C\u5728TouchGFX GUI\u7AEF\u4F7F\u7528C++\u5B9E\u73B0\uFF0C\u540E\u7AEF\u4E0ETouchGFX\u4E4B\u95F4\u76F8\u4E92\u901A\u8BAF\u3002 \u8BE5\u793A\u4F8B\u53EF\u5728\u5305\u542BFreeRTOS\u64CD\u4F5C\u7CFB\u7EDF\u7684STM32F746G-DISCO\u677F\u4E0A\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-multiple-tasks"
  }), `\u6765\u81EA\u591A\u4E2A\u4EFB\u52A1`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u4E2A\u793A\u4F8B\u5E94\u7528\u3001\u4E00\u4E2ABSD\uFF0C\u4F4D\u4E8E\u6700\u65B0\u7248\u672C\u7684TouchGFX\u8BBE\u8BA1\u5668\u4E0B\uFF0C\u5177\u4F53\u8DEF\u5F84\uFF1A\u6F14\u793A->\u677F\u4EF6\u7279\u5B9A\u6F14\u793A->  STM32F769I\u63A2\u7D22\u5957\u4EF6\u591A\u4EFB\u52A1\u901A\u4FE1\u6F14\u793A> \u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8BE5\u5E94\u7528\u5BF9\u6309\u94AE\u72B6\u6001\u8FDB\u884C\u91C7\u6837\uFF0C\u5E76\u5728\u6309\u4E0B\u6309\u94AE\u65F6\u901A\u8FC7GUI\u6D88\u606F\u961F\u5217\u4F20\u9012\u6D88\u606F\u3002 \u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6309\u4F4F\u6309\u94AE\u6765\u63A8\u8FDB\u5E94\u7528\u4E2D\u7684\u52A8\u753B\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8BE5\u5E94\u7528\u4F7F\u7528\u4E863\u4E2AFreeRTOS\u4EFB\u52A1\u3002 \u4E00\u4E2A\u7528\u4E8EGUI\uFF0C\u53E6\u5916\u4E24\u4E2A\u5206\u522B\u7528\u4E8E\u4E24\u4E2A\u5916\u8BBE\uFF08LED\u548C\u7528\u6237\u6309\u94AE\uFF09\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-task-and-external-interrupt-line"
  }), `\u6765\u81EA\u4EFB\u52A1\u548C\u5916\u90E8\u4E2D\u65AD`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u4E00\u4E2A\u793A\u4F8B\u5E94\u7528\u3001\u4E00\u4E2ABSD\uFF0C\u4F4D\u4E8E\u6700\u65B0\u7248\u672C\u7684TouchGFX\u8BBE\u8BA1\u5668\u4E0B\uFF0C\u5177\u4F53\u8DEF\u5F84\uFF1A\u6F14\u793A-> \u677F\u4EF6\u7279\u5B9A\u6F14\u793A-> STM32F769I\u63A2\u7D22\u5957\u4EF6\u591A\u4EFB\u52A1\u901A\u4FE1\u6F14\u793A> \u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8BE5\u5E94\u7528\u4E13\u4E3ASTM32F769I-DISCO\u677F\u800C\u8BBE\u8BA1\uFF0C\u5B83\u4E0ELED\u548C\u7528\u6237\u6309\u94AE\u4EA4\u4E92\uFF0C\u4EE5\u4FBF\u5C55\u793A\u5982\u4F55\u5C06C\u4EE3\u7801\u548C\u786C\u4EF6\u5916\u8BBE\u96C6\u6210\u5230TouchGFX\u5E94\u7528\u4E2D\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8BE5\u5E94\u7528\u4EE5EXTI\u6A21\u5F0F\u914D\u7F6E\u6309\u94AE\uFF08\u5916\u90E8\u4E2D\u65AD\u7EBF\u8DEF0\uFF09\u3002 \u5176\u884C\u4E3A\u662F\u5728\u6309\u4E0B\u6309\u94AE\u65F6\u63A5\u6536\u4E2D\u65AD\uFF0C\u6B64\u540E\u4E2D\u65AD\u6E05\u96F6\u3002 \u8FD9\u4E0D\u5141\u8BB8\u51FA\u73B0\u4E0EGPIO\u6A21\u5F0F\u4E0B\u76F8\u540C\u7684\u884C\u4E3A\uFF0C\u800C\u4F1A\u662F\u5355\u6B65\u52A8\u753B\uFF0C\u539F\u56E0\u5728\u4E8E\u53EA\u5728\u63A5\u6536\u5230\u4E2D\u65AD\u65F6\u901A\u8FC7GUI\u6D88\u606F\u961F\u5217\u53D1\u9001\u6D88\u606F\u3002`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\u8BE5\u5E94\u7528\u4F7F\u7528\u4E24\u4E2AFreeRTOS\u4EFB\u52A1\u3002 \u4E00\u4E2A\u7528\u4E8EGUI\uFF0C\u4E00\u4E2A\u7528\u4E8ELED\u3002 \uFF08`, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#from-multiple-tasks"
  }), `\u591A\u4EFB\u52A1\u6F14\u793A`), `\u4E2D\u7684Button\u4EFB\u52A1\u5728\u8BE5\u5E94\u7528\u4E2D\u4ECD\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001\uFF0C\u5916\u8BBE\u4EA4\u4E92\u4EE3\u7801\u5DF2\u79FB\u81F3\u4E2D\u65AD\u5904\u7406\u51FD\u6570\u4E2D\uFF09\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);