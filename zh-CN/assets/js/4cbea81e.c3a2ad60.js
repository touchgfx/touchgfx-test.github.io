"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8183],{

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

/***/ 80766:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93054);
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
  id: "debugging",
  title: "\u8C03\u8BD5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/debugging",
  "id": "development/ui-development/working-with-touchgfx/debugging",
  "title": "\u8C03\u8BD5",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/debugging.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/debugging",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/debugging",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "debugging",
    "title": "\u8C03\u8BD5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u7F16\u8BD1& \u70E7\u5F55",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"
  },
  "next": {
    "title": "\u793A\u4F8B\u548C\u7279\u5B9A\u677F\u5361\u7684\u6F14\u793A",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/examples"
  }
};
const assets = {};



const toc = [{
  value: "\u76EE\u6807\u677F\u5361\u8C03\u8BD5",
  id: "target-debugging",
  level: 2
}, {
  value: "\u6A21\u62DF\u5668\u8C03\u8BD5",
  id: "simulator-debugging",
  level: 2
}, {
  value: "\u4F7F\u7528DebugPrinter",
  id: "using-the-debugprinter",
  level: 2
}, {
  value: "DebugPrinter\u7C7B",
  id: "debugprinter-classes",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8ETouchGFX\u5E94\u7528\u7A0B\u5E8F\u662F\u4E00\u7EC4\u7531TouchGFX Designer\u3001TouchGFX Generator\u751F\u6210\u5E76\u7531\u5F00\u53D1\u4EBA\u5458\u7F16\u5199\u7684C++\u6587\u4EF6\uFF0C\u56E0\u6B64\u53EF\u4EE5\u50CF\u4EFB\u4F55\u5176\u4ED6C++\u5E94\u7528\u7A0B\u5E8F\u4E00\u6837\u8C03\u8BD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "target-debugging"
  }), `\u76EE\u6807\u677F\u5361\u8C03\u8BD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u4F7F\u7528\u50CFIAR Workbench\u3001Keil uVision\u6216STM32CubeIDE\u8FD9\u6837\u7684IDE\uFF0C\u5219\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528IDE\u7684\u53EF\u7528\u673A\u5236\u8FDB\u884C\u76EE\u6807\u677F\u5361\u8C03\u8BD5\u3002 \u7531TouchGFX Generator\u6216\u76F4\u63A5\u4ECETouchGFX\u677F\u4EF6\u8BBE\u7F6E\u751F\u6210\u7684TouchGFX\u9879\u76EE\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u9009\u5B9A\u7684\u5DE5\u5177\u94FE\u8FDB\u884C\u8C03\u8BD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Board bring up\u4EE3\u7801\u548CTouchGFX AL\u53EA\u5728\u76EE\u6807\u677F\u5361\u4E0A\u6267\u884C\uFF0C\u56E0\u6B64\u9700\u8981\u5728\u90A3\u90E8\u5206\u8FDB\u884C\u8C03\u8BD5\u3002 \u5E94\u7528\u7A0B\u5E8F\u7684UI\u90E8\u5206\u53EF\u4EE5\u5728\u76EE\u6807\u677F\u5361\u6216\u4F7F\u7528\u6A21\u62DF\u5668\u8FDB\u884C\u8C03\u8BD5\u3002 \u5728\u76EE\u6807\u677F\u5361\u4E0A\uFF0C\u60A8\u901A\u5E38\u4F1A\u8C03\u8BD5\u6027\u80FD\u95EE\u9898\u7B49\uFF0C\u5982\u52A8\u753B\u901F\u5EA6\u3001\u66F4\u65B0\u9891\u7387\u548C\u54CD\u5E94\u80FD\u529B\u3002 \u5176\u4ED6\u7279\u5B9A\u4E8EUI\u7684\u95EE\u9898\u53EF\u4EE5\u5728\u76EE\u6807\u4E0A\u8C03\u8BD5\uFF0C\u4F46\u4F7F\u7528\u6A21\u62DF\u5668\u8C03\u8BD5\u901A\u5E38\u4F1A\u66F4\u5FEB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-debugging"
  }), `\u6A21\u62DF\u5668\u8C03\u8BD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8C03\u8BD5\u4E0EUI\u76F8\u5173\u7684\u95EE\u9898\uFF0C\u5982\u52A8\u753B\u52A8\u4F5C\u3001\u8F6C\u6362\u3001\u5143\u7D20\u66F4\u65B0\u3001\u7A0B\u5E8F\u903B\u8F91\u7B49\u7B49\uFF1B\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u6A21\u62DF\u5668\u8FDB\u884C\u6D4B\u8BD5\u548C\u8C03\u8BD5\u6BD4\u6BCF\u6B21\u70E7\u5F55\u677F\u5361\u8981\u9AD8\u6548\u5F97\u591A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5E94\u7528\u7A0B\u5E8F\u8FD8\u652F\u6301Visual Studio\uFF0C\u5E76\u4E3A\u5176\u63D0\u4F9B\u548C\u7EF4\u62A4\u4E00\u4E2A\u9879\u76EE\u6587\u4EF6\u3002 \u4F7F\u7528Visual Studio\u65F6\uFF0C\u53EF\u4EE5\u5728\u8C03\u8BD5\u6A21\u5F0F\u4E0B\u8FD0\u884C\u6A21\u62DF\u5668\uFF0C\u53EF\u4EE5\u5229\u7528IDE\u7684\u6240\u6709\u8C03\u8BD5\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60F3\u8981\u4F7F\u7528\u6A21\u62DF\u5668\u8FDB\u884C\u8C03\u8BD5\uFF0C\u60A8\u53EF\u4EE5\u4E0D\u5C40\u9650\u4E8EVisual Studio\u3002 \u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u901A\u8FC7GCC\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5982\u679C\u4F60\u5728\u4F7F\u7528\u4E00\u4E2A\u4E0D\u540C\u7684IDE, \u53EF\u80FD\u5728\u914D\u7F6E\u8C03\u8BD5\u4E00\u4E2AGCC\u7F16\u8BD1\u901A\u8FC7\u8FC7\u7684\u9879\u76EE\u3002 \u7136\u800C, \u5BF9\u4E8E\u4F60\u9009\u62E9\u7684IDE, \u4F60\u9700\u8981\u81EA\u5DF1\u8FDB\u884C\u914D\u7F6E.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/debugging/visual-studio.png",
    width: "640",
    mdxType: "Figure"
  }, "\u5728Visual Studio\u4E2D\u8C03\u8BD5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-the-debugprinter"
  }), `\u4F7F\u7528DebugPrinter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DebugPrinter\u7C7B\u662F\u4E00\u79CD\u5728\u663E\u793A\u5668\u4E0A\u6253\u5370\u8C03\u8BD5\u6D88\u606F\u7684\u7B80\u5355\u65B9\u6CD5\uFF0C\u65E0\u9700\u5411\u5C4F\u5E55\u6DFB\u52A0TextArea\u6216\u5176\u4ED6\u5C0F\u90E8\u4EF6\u3002 \u4F8B\u5982\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u53EF\u7528\u4E8E\u663E\u793A\u6765\u81EA\u540E\u7AEF\u7684\u4E8B\u4EF6\u3001\u6216FPS\u6216\u6E32\u67D3\u65F6\u95F4\u7B49\u6D4B\u91CF\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u7528DebugPrinter\u4E4B\u524D\uFF0C\u9700\u8981\u5206\u914D\u4E00\u4E2A\u5B9E\u4F8B\u5E76\u5C06\u5176\u4F20\u9012\u7ED9Application\u7C7B\u3002 This can be done e.g. in the constructor of FrontendApplication.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The debug printer needs to be compatible with the framebuffer format. The table below shows the available class names. Here we add a 16bpp debug printer (compatible with LCD16bpp) in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gui/src/common/FrontendApplication.cpp`), `:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/lcd/LCD16DebugPrinter.hpp>

LCD16DebugPrinter lcd16DebugPrinter; // Global object

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
  : FrontendApplicationBase(m, heap)
{
  lcd16DebugPrinter.setPosition(0, 0, 240, 40);
  lcd16DebugPrinter.setScale(2);
  lcd16DebugPrinter.setColor(0x00); //black
  Application::setDebugPrinter(&lcd16DebugPrinter);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Here we have configured the DebugPrinter to write in the upper left 240 x 40 pixels. In your application you can now print a string using:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <stdio.h>

char debugStringBuffer[30];
void updateDebugString()
{
  static int count = 0;
  count++;
  snprintf(debugStringBuffer, sizeof(debugStringBuffer), "tick: %d", count);
  Application::getDebugPrinter()->setString(debugStringBuffer);
  Application::invalidateDebugRegion();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You don't have to call the DebugPrinter::setString method more than once in your application. But call the invalidateDebugRegion when you have changed the content of your buffer. This will make the DebugPrinter draw the new content. The DebugPrinter will also redraw if the ordinary Widgets in the area covered by DebugPrinter are redrawn.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "Characters from ASCII 32 (space) to ASCII 126 ('~') are available."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/debugging/debugprinter.png",
    mdxType: "Figure"
  }, "\u4F7F\u7528DebugPrinter"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "debugprinter-classes"
  }), `DebugPrinter\u7C7B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DebugPrinter\u5B9E\u4F8B\u5FC5\u987B\u517C\u5BB9\u6240\u4F7F\u7528\u7684LCD\u7C7B\u3002 \u8BE5\u8868\u5217\u51FA\u4E86DebugPrinter\u7C7B\u540D\u79F0\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD \u7C7B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DebugPrinter\u7C7B`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD1bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD1DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD2bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD2DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD4bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD4DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8bpp_ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8ARGB2222DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8bpp_ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8ABGR2222DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8bpp_RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8RGBA2222DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8bpp_BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD8BGRA2222DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD16bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD16DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD16bppSerialFlash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD16DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD24bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD24DebugPrinter`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD32bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LCD32DebugPrinter`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u4E0E\u6B63\u5728\u4F7F\u7528\u7684LCD\u7C7B\u5339\u914D\u7684DebugPrinter\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `For Simulator projects the LCD instance is created in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `generated/simulator/src/mainBase.cpp`), `. For target projects the instance is created in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX/target/generated/TouchGFXConfiguration.cpp`), `:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/target/generated/TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `...
static LCD16bpp display;
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You can check these files to verify your LCD class name.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);