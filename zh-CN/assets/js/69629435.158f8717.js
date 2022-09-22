"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2568],{

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

/***/ 18524:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31217);
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
  id: "code-structure",
  title: "\u4EE3\u7801\u7ED3\u6784"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/code-structure",
  "id": "development/ui-development/software-architecture/code-structure",
  "title": "\u4EE3\u7801\u7ED3\u6784",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/code-structure.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/code-structure",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/software-architecture/code-structure",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "code-structure",
    "title": "\u4EE3\u7801\u7ED3\u6784"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5C4F\u5E55\u6982\u5FF5",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/software-architecture/screen-definition-and-mvp"
  },
  "next": {
    "title": "Working with TouchGFX",
    "permalink": "/4.20/zh-CN/docs/category/working-with-touchgfx"
  }
};
const assets = {};





const toc = [{
  value: "\u751F\u6210\u7684\u4EE3\u7801\u548C\u7528\u6237\u4EE3\u7801",
  id: "generated-code-vs-user-code",
  level: 2
}, {
  value: "TouchGFX Designer\u751F\u6210\u7684\u6587\u4EF6",
  id: "files-generated-by-touchgfx-designer",
  level: 2
}, {
  value: "\u793A\u4F8B",
  id: "example",
  level: 2
}, {
  value: "TouchGFX Designer\u89C6\u56FE",
  id: "touchgfx-designer-view",
  level: 3
}, {
  value: "\u5C42",
  id: "layers",
  level: 3
}, {
  value: "\u4EE3\u7801",
  id: "code",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u4ECB\u7ECD\u4E86TouchGFX\u9879\u76EE\u7684\u7ED3\u6784\u2014\u2014\u4ECETouchGFX Designer\u751F\u6210\u7684\u4EE3\u7801\u5230\u7528\u6237\u7F16\u5199\u7684\u6269\u5C55\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generated-code-vs-user-code"
  }), `\u751F\u6210\u7684\u4EE3\u7801\u548C\u7528\u6237\u4EE3\u7801`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u751F\u6210\u7684\u4EE3\u7801\u5C06\u4E0E\u7528\u6237\u7F16\u5199\u7684\u4EE3\u7801\u5B8C\u5168\u5206\u79BB\u3002 \u4E8B\u5B9E\u4E0A\uFF0C\u751F\u6210\u7684\u4EE3\u7801\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/gui_generated`), `\u6587\u4EF6\u5939\u4E2D\uFF0C\u800C\u624B\u5199\u4EE3\u7801\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gui`), `\u6587\u4EF6\u5939\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gui_generated`), `\u4EE3\u7801\u5145\u5F53\u7528\u6237\u4EE3\u7801\u7C7B\u7684\u57FA\u7C7B\u3002 \u57FA\u7C7B\u5305\u542B\u5728TouchGFX Designer\u4E2D\u914D\u7F6E\u7684\u6240\u6709\u8BBE\u7F6E\u4EE3\u7801\u3002 \u4E0B\u9762\u7684\u7C7B\u793A\u610F\u56FE\u663E\u793A\u4E86\u7C7B\u7684\u5173\u7CFB\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/code-levels.png",
    mdxType: "Figure"
  }, "\u5F15\u64CE\u7C7B\u3001\u751F\u6210\u7C7B\u548C\u7528\u6237\u7C7B\u7684\u7C7B\u5C42\u6B21\u7ED3\u6784"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u56FE\u6240\u793A\uFF0CTouchGFX Designer\u5E94\u7528\u5305\u542B3\u4E2A\u4E0D\u540C\u4EE3\u7801\u5C42\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5F15\u64CE`), `\uFF1A\u8FD9\u4E9B\u7C7B\u662FTouchGFX\u63D0\u4F9B\u7684\u6807\u51C6\u7C7B\u3002 \u5B83\u4EEC\u5145\u5F53\u751F\u6210\u7C7B\u7684\u57FA\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u751F\u6210`), `\uFF1A\u5F53TouchGFX Designer\u751F\u6210\u4EE3\u7801\u65F6\uFF0C\u5C06\u751F\u6210\u8FD9\u4E9B\u7C7B\u548C\u76F8\u5E94\u6587\u4EF6\u3002 \u56E0\u6B64\uFF0C\u4E0D\u5E94\u624B\u52A8\u7F16\u8F91\u8FD9\u4E9B\u7C7B\u548C\u6587\u4EF6\uFF0C\u56E0\u4E3A\u4EFB\u4F55\u624B\u52A8\u4FEE\u6539\u90FD\u4F1A\u5728\u4E0B\u4E00\u6B21\u8FD0\u884C\u4EE3\u7801\u751F\u6210\u5668\u65F6\u88AB\u91CD\u5199\u3002 \u8FD9\u4E9B\u7C7B\u662F\u7528\u6237\u7C7B\u7684\u57FA\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7528\u6237`), `\uFF1A\u8FD9\u4E9B\u7C7B\u9884\u5B9A\u4F9B\u624B\u5199\u4EE3\u7801\u4F7F\u7528\u3002 \u7528\u6237\u53EF\u4EE5\u81EA\u7531\u5730\u5C06\u4EFB\u4F55\u4EE3\u7801\u653E\u5165\u8BE5\u5C42\u3002 \u5982\u679C\u6CA1\u6709\u7528\u6237\u7C7B\uFF0C\u5C06\u751F\u6210\u7528\u6237\u7C7B\uFF0C\u5E76\u4E14\u6C38\u8FDC\u4E0D\u4F1A\u88ABTouchGFX Designer\u4FEE\u6539\u3002 \u5B83\u4EEC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5C5E\u4E8E\u7528\u6237`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX Designer\u751F\u6210\u7684\u5E94\u7528\u7684\u67B6\u6784\u662F\u5F00\u653E\u5F0F\u7684\uFF0C\u5728\u67D0\u79CD\u610F\u4E49\u4E0A\uFF0C\u5BF9\u60A8\u7684\u521B\u5EFA\u5185\u5BB9\u5E94\u5F53\u6CA1\u6709\u4EFB\u4F55\u9650\u5236\u3002 \u5982\u679CTouchGFX Designer\u4E0D\u652F\u6301\u67D0\u4E9B\u5BF9\u8C61\uFF08\u5982\u5C0F\u5DE5\u5177\u3001\u52A8\u753B\u6216\u6548\u679C\uFF09\uFF0C\u60A8\u53EF\u4EE5\u5C06\u5B83\u4EEC\u6DFB\u52A0\u5230\u7528\u6237\u7C7B\u3002 TouchGFX Designer\u751F\u6210\u7684\u4EE3\u7801\u5728\u8BBE\u8BA1\u4E0A\u4E0D\u4F1A\u5BF9\u5236\u4F5CTouchGFX\u5E94\u7528\u7684\u65B9\u5F0F\u52A0\u4EE5\u9650\u5236\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "files-generated-by-touchgfx-designer"
  }), `TouchGFX Designer\u751F\u6210\u7684\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u636E\u89C4\u5219\uFF0CTouchGFX Designer\u5C06`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u53EA`), `\u5728TouchGFX\u9879\u76EE\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated`), `\u6587\u4EF6\u5939\u4E2D\u91CD\u65B0\u751F\u6210\u6587\u4EF6\uFF0C\u56E0\u6B64\u4E0D\u5F97\u5728\u8BE5\u6587\u4EF6\u8FDB\u884C\u624B\u52A8\u7F16\u8F91\uFF0C\u56E0\u4E3A\u4F1A\u88AB\u8986\u76D6\u3002 \u7136\u800C\uFF0CTouchGFX\u8BBE\u8BA1\u5668\u4E5F\u53EF\u4EE5\u751F\u6210\u7F16\u8BD1\u6240\u9700\u7684\u7F3A\u5931\u6587\u4EF6\uFF0C\u4F8B\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `application.config`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `simulator/main.cpp`), `, \u3001\u76AE\u80A4\u56FE\u7247\uFF08\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/images/__designer`), `\u4E2D\uFF09\u3001\u4EE5\u53CA\u793A\u4F8B\u89C6\u9891\uFF08\u4F4D\u4E8E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos/__designer`), `\u4E2D\uFF09\u3002 \u4E8B\u5B9E\u4E0A\uFF0CTouchGFX Designer\u53EA\u9700\u8981\u4E0B\u5217\u6587\u4EF6\u5C31\u80FD\u751F\u6210\u3001\u7F16\u8BD1\u548C\u8FD0\u884C\u9879\u76EE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u63CF\u8FF0\u9879\u76EE\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.touchgfx`), `\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `gui`), `\u6587\u4EF6\u5939\u7684\u7528\u6237\u4EE3\u7801\uFF08\u5982\u679C\u6709\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/images`), `\u6587\u4EF6\u5939\u7684\u7528\u6237\u56FE\u50CF\uFF08\u5982\u679C\u6709\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/texts/texts.xml`), `\u6587\u4EF6\u4E2D\u7684\u6587\u672C\uFF08\u5982\u679C\u6709\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/fonts`), `\u6587\u4EF6\u5939\u7684\u5B57\u4F53\uFF08\u5982\u679C\u6709\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/videos`), `\u6587\u4EF6\u5939\u4E2D\u7684\u89C6\u9891\uFF08\u5982\u679C\u6709\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5728\u4F7F\u7528\u7248\u672C\u63A7\u5236\uFF08\u5982Git\uFF09\u65F6\uFF0C\u8FD9\u610F\u5473\u7740\u5B9E\u9645\u4E0A\u53EA\u9700\u8981\u5C06\u4E0A\u9762\u5217\u51FA\u7684\u6587\u4EF6\u63D0\u4EA4\u5230\u5B58\u50A8\u5E93\u3002 \u5176\u4F59\u7684\u7531TouchGFX Designer\u81EA\u5DF1\u751F\u6210\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example"
  }), `\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4E00\u4E2A\u540C\u65F6\u62E5\u6709\u751F\u6210\u4EE3\u7801\u548C\u7528\u6237\u4EE3\u7801\u7684\u5E94\u7528\u7684\u7B80\u5355\u793A\u4F8B\u3002 \u8BE5\u793A\u4F8B\u5E94\u80FD\u66F4\u8BE6\u7EC6\u5730\u8BF4\u660E\u4EE5\u4E0A\u60C5\u51B5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer-view"
  }), `TouchGFX Designer\u89C6\u56FE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7684\u793A\u4F8B\u53EA\u6709\u4E00\u4E2A\u5C4F\u5E55\u3002 \u5C4F\u5E55`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyScreen`), `\u5305\u542B\u4E00\u4E2A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `\u65B9\u6846`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `box1`), `\u548C\u4E00\u4E2A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `\u6309\u94AE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `button1`), `\u3002 \u6211\u4EEC\u8BBE\u7F6E\u4E86\u5728\u70B9\u51FB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `button1`), `\u65F6\u8C03\u7528\u865A\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor()`), `\u7684\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/designer-application-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u5E94\u7528"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u6309\u4E0B\u6309\u94AE\u65F6\uFF0C\u6211\u4EEC\u60F3\u8981\u8BA9\u80CC\u666F\u6846\u7684\u989C\u8272\u53D8\u4E3A\u65B0\u7684\u968F\u673A\u8272\u3002 \u4E3A\u4E86\u6F14\u793A\u5982\u4F55\u7F16\u5199\u60A8\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49\u4EE3\u7801\uFF0C\u6211\u4EEC\u5C06\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u5B9E\u73B0\u6B64\u884C\u4E3A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "layers"
  }), `\u5C42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u8BE5\u793A\u4F8B\u4E2D\u6D89\u53CA\u7684\u4E0D\u540C\u7C7B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/code-levels-detailed.png",
    mdxType: "Figure"
  }, "\u7C7B\u7684\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenViewBase`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendApplicationBase`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendHeapBase`), `\u4F4D\u4E8E\u751F\u6210\u7A7A\u95F4\uFF0C\u8FD9\u8868\u660E\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728TouchGFX Designer\u4E2D\u6267\u884C\u66F4\u6539\u65F6\uFF0C\u4F1A\u91CD\u65B0\u751F\u6210\u8FD9\u4E9B\u7C7B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7528\u6237\u4E0D\u5E94\u624B\u52A8\u7F16\u8F91\u8FD9\u4E9B\u7C7B`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenView`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenPresenter`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendApplication`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendHeap`), `\u662F\u5728\u7528\u6237\u4EE3\u7801\u4E2D\u521B\u5EFA\u7684\uFF0C\u8FD9\u8868\u660E\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728TouchGFX Designer\u4E2D\u6267\u884C\u66F4\u6539\u65F6\uFF0C\u4E0D\u4F1A\u91CD\u65B0\u751F\u6210\u8FD9\u4E9B\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u81EA\u7531\u5730\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4EE3\u7801`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `box1`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `button1`), `\u7684\u6240\u6709\u8BBE\u7F6E\u90FD\u5728\u751F\u6210\u7684\u89C6\u56FE\u57FA\u7C7B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenViewBase`), `\u4E2D\u5B8C\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7528\u4E8E\u5C4F\u5E55\u4E4B\u95F4\u8FC7\u6E21\u7684\u6240\u6709\u51FD\u6570\u90FD\u4F4D\u4E8E\u751F\u6210\u7684\u5E94\u7528\u57FA\u7C7B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendApplicationBase`), `\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7528\u4E8E\u786E\u4FDD\u5206\u914D\u4E86\u9002\u91CF\u5B58\u50A8\u7A7A\u95F4\u7684\u6240\u6709\u8BB0\u5E10\u5747\u4F4D\u4E8E\u751F\u6210\u7684\u5806\u57FA\u7C7B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendHeapBase`), `\u4E2D\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u5730\u7F16\u8F91\u7528\u6237\u4EE3\u7801\u7C7B\u3002 \u4F8B\u5982\uFF0C\u60A8\u53EF\u4EE5\u6DFB\u52A0\u66F4\u591A\u5C0F\u5DE5\u5177\u3002 \u76EE\u524D\uFF0C\u6211\u4EEC\u53EA\u5B9E\u73B0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), `\u51FD\u6570\u6765\u5B9E\u9645\u66F4\u6539`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `box1`), `\u7684\u989C\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "code"
  }), `\u4EE3\u7801`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u89C6\u56FE\u57FA\u7840\u4EE3\u7801\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230TouchGFX Designer\u751F\u6210\u7684\u65B9\u6846\u548C\u6309\u94AE\u8BBE\u7F6E\u3002 \u6211\u4EEC\u8FD8\u770B\u5230\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonCallbackHandler`), `\u4E2D\u865A\u51FD\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), `\u7684\u8BBE\u7F6E\u548C\u8C03\u7528\uFF0C\u4F46\u6B64\u523B\u8BE5\u51FD\u6570\u8FD8\u6CA1\u6709\u4EFB\u4F55\u64CD\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{27-37}",
    "{27-37}": true
  }), `/*********************************************************************************/
/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/
/*********************************************************************************/
#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>
#include <touchgfx/Color.hpp>
#include "BitmapDatabase.hpp"

MyScreenViewBase::MyScreenViewBase() :
    buttonCallback(this, &MyScreenViewBase::buttonCallbackHandler)
{
    box1.setPosition(0, 0, 800, 480);
    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));

    button1.setXY(155, 106);
    button1.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));
    button1.setAction(buttonCallback);

    add(box1);
    add(button1);
}

void MyScreenViewBase::setupScreen()
{

}

void MyScreenViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)
{
    if (&src == &button1)
    {
        //Interaction1
        //When button1 clicked call virtual function
        //Call setRandomColor
        setRandomColor();
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u89C6\u56FE\u57FA\u7C7B\u7684\u5934\u6587\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u770B\u5230\u4E86`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), `\u7684\u58F0\u660E\u548C\u91CD\u5199\u5E76\u5B9E\u73B0\u7528\u6237\u4EE3\u7801\u4E2D\u51FD\u6570\u7684\u6307\u4EE4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{23-26}",
    "{23-26}": true
  }), `/*********************************************************************************/
/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/
/*********************************************************************************/
#ifndef MYSCREENVIEWBASE_HPP
#define MYSCREENVIEWBASE_HPP

#include <gui/common/FrontendApplication.hpp>
#include <mvp/View.hpp>
#include <gui/myscreen_screen/MyScreenPresenter.hpp>
#include <touchgfx/widgets/Box.hpp>
#include <touchgfx/widgets/Button.hpp>

class MyScreenViewBase : public touchgfx::View<MyScreenPresenter>
{
public:
    MyScreenViewBase();
    virtual ~MyScreenViewBase() {}
    virtual void setupScreen();

    /*
     * Virtual Action Handlers
     */
    virtual void setRandomColor()
    {
        // Override and implement this function in MyScreen
    }

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Member Declarations
     */
    touchgfx::Box box1;
    touchgfx::Button button1;

private:

    /*
     * Callback Declarations
     */
    touchgfx::Callback<MyScreenViewBase, const touchgfx::AbstractButton&> buttonCallback;

    /*
     * Callback Handler Declarations
     */
    void buttonCallbackHandler(const touchgfx::AbstractButton& src);

};

#endif // MYSCREENVIEWBASE_HPP
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u8FDB\u884C\u5177\u4F53\u64CD\u4F5C\u3002 \u5BFC\u822A\u5230\u7528\u6237\u4EE3\u7801\u5934\u6587\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyScreenView.hpp`), `\u5E76\u91CD\u5199\u51FD\u6570\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication/generated/gui_generated/src/my_screen/MyScreenView.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14}",
    "{14}": true
  }), `#ifndef MYSCREENVIEW_HPP
#define MYSCREENVIEW_HPP

#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>
#include <gui/myscreen_screen/MyScreenPresenter.hpp>

class MyScreenView : public MyScreenViewBase
{
public:
    MyScreenView();
    virtual ~MyScreenView() {}
    virtual void setupScreen();
    virtual void tearDownScreen();
    virtual void setRandomColor();
protected:
};

#endif // MYSCREENVIEW_HPP
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyScreenView`), `\u7684cpp\u6587\u4EF6\u4E2D\u5B9E\u73B0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), `\u7684\u5B9E\u9645\u884C\u4E3A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication/gui/src/my_screen/MyScreenView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{19-23}",
    "{19-23}": true
  }), `#include <gui/myscreen_screen/MyScreenView.hpp>
#include <touchgfx/Color.hpp>
#include <stdlib.h>

MyScreenView::MyScreenView()
{

}

void MyScreenView::setupScreen()
{
    MyScreenViewBase::setupScreen();
}

void MyScreenView::tearDownScreen()
{
    MyScreenViewBase::tearDownScreen();
}

void MyScreenView::setRandomColor()
{
    box1.setColor(touchgfx::Color::getColorFromRGB(rand()&0xff, rand()&0xff, rand()&0xff));
    box1.invalidate();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u8FD0\u884C\u6A21\u62DF\u5668\uFF0C\u7ED3\u679C\u663E\u793A\u6211\u4EEC\u5DF2\u6210\u529F\u5229\u7528\u751F\u6210\u4EE3\u7801\u548C\u7528\u6237\u4EE3\u7801\u521B\u5EFA\u4E86\u4E00\u4E2A\u7B80\u5355\u5E94\u7528 - \u73B0\u5728\u6BCF\u6B21\u60A8\u70B9\u51FB\u6309\u94AE\u65F6\uFF0C\u80CC\u666F\u6846\u90FD\u4F1A\u53D8\u4E3A\u968F\u673A\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/simulator-random-color.gif",
    mdxType: "Figure"
  }, "\u5C55\u793A\u5E94\u7528\u7684\u6A21\u62DF\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5F53\u7136\uFF0C\u60A8\u65E0\u9700\u4F7F\u7528TouchGFX Designer\u751F\u6210\u7684\u4EE3\u7801\u7684\u4EFB\u4F55\u7279\u6027\uFF0C\u4F46\u5B83\u6709\u53EF\u80FD\u8282\u7EA6\u5F88\u591A\u65F6\u95F4\u3002 \u53EF\u4EE5\u7528\u4F20\u7EDF\u7684\u65B9\u5F0F\u5236\u4F5CTouchGFX\u5E94\u7528\uFF0C\u53EA\u9700\u624B\u52A8\u6DFB\u52A0\u5FC5\u8981\u7684\u6587\u4EF6\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), "\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u8FDB\u884C\u6DF7\u5408\u548C\u5339\u914D\u3002 \u4F8B\u5982\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5E76\u975E\u5728TouchGFX Designer\u9879\u76EE\u4E2D\u5B9A\u4E49\u7684\u5C4F\u5E55\u3002 \u60A8\u53EF\u4EE5\u5C06 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "gotoXYZ"), " \u51FD\u6570\u6DFB\u52A0\u5230", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "FrontendApplication"), "\u7C7B\uFF0C\u5E76\u5C06\u60A8\u7684\u5C4F\u5E55\u9700\u8981\u7684\u89C6\u56FE\u3001\u5448\u73B0\u5668\u548C\u8F6C\u6362\u6DFB\u52A0\u5230 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "FrontendHeap\u3002"), "."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);