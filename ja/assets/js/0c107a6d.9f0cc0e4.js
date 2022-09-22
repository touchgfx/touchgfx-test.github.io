"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5851],{

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

/***/ 94489:
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
  title: "\u30B3\u30FC\u30C9\u69CB\u9020"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/code-structure",
  "id": "development/ui-development/software-architecture/code-structure",
  "title": "\u30B3\u30FC\u30C9\u69CB\u9020",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/code-structure.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/code-structure",
  "permalink": "/4.20/ja/docs/development/ui-development/software-architecture/code-structure",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "code-structure",
    "title": "\u30B3\u30FC\u30C9\u69CB\u9020"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6982\u5FF5",
    "permalink": "/4.20/ja/docs/development/ui-development/software-architecture/screen-definition-and-mvp"
  },
  "next": {
    "title": "Working with TouchGFX",
    "permalink": "/4.20/ja/docs/category/working-with-touchgfx"
  }
};
const assets = {};





const toc = [{
  value: "\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9",
  id: "generated-code-vs-user-code",
  level: 2
}, {
  value: "TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30D5\u30A1\u30A4\u30EB",
  id: "files-generated-by-touchgfx-designer",
  level: 2
}, {
  value: "\u4F8B",
  id: "example",
  level: 2
}, {
  value: "TouchGFX Designer\u306E\u30D3\u30E5\u30FC",
  id: "touchgfx-designer-view",
  level: 3
}, {
  value: "\u30EC\u30A4\u30E4",
  id: "layers",
  level: 3
}, {
  value: "\u30B3\u30FC\u30C9",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u304B\u3089\u30E6\u30FC\u30B6\u304C\u8A18\u8FF0\u3059\u308B\u62E1\u5F35\u30B3\u30FC\u30C9\u307E\u3067\u3001TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u69CB\u9020\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generated-code-vs-user-code"
  }), `\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306F\u3001\u30E6\u30FC\u30B6\u304C\u8A18\u8FF0\u3057\u305F\u30B3\u30FC\u30C9\u3068\u5B8C\u5168\u306B\u5207\u308A\u96E2\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u5B9F\u969B\u3001\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/gui_generated`), `\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3055\u308C\u3001\u30E6\u30FC\u30B6\u304C\u8A18\u8FF0\u3057\u305F\u30B3\u30FC\u30C9\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gui`), `\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gui_generated`), `\u30B3\u30FC\u30C9\u306F\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30AF\u30E9\u30B9\u306E\u57FA\u5E95\u30AF\u30E9\u30B9\u3068\u3057\u3066\u6A5F\u80FD\u3057\u307E\u3059\u3002 \u57FA\u5E95\u30AF\u30E9\u30B9\u306B\u306F\u3001TouchGFX Designer\u3067\u8A2D\u5B9A\u3055\u308C\u305F\u3059\u3079\u3066\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\uFF65\u30B3\u30FC\u30C9\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u6B21\u306E\u30AF\u30E9\u30B9\u56F3\u306F\u30AF\u30E9\u30B9\u306E\u95A2\u9023\u6027\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/code-levels.png",
    mdxType: "Figure"
  }, "\u30A8\u30F3\u30B8\u30F3\uFF65\u30AF\u30E9\u30B9\u3001\u751F\u6210\u30AF\u30E9\u30B9\u3001\u30E6\u30FC\u30B6\uFF65\u30AF\u30E9\u30B9\u306E\u968E\u5C64"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306B\u793A\u3059\u3088\u3046\u306B\u3001TouchGFX Designer\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30013\u3064\u306E\u7570\u306A\u308B\u30B3\u30FC\u30C9\uFF65\u30EC\u30A4\u30E4\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Engine\uFF08\u30A8\u30F3\u30B8\u30F3\uFF09`), `: \u3053\u308C\u3089\u306E\u30AF\u30E9\u30B9\u306FTouchGFX\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u308B\u6A19\u6E96\u306E\u30AF\u30E9\u30B9\u3067\u3059\u3002 \u751F\u6210\u30AF\u30E9\u30B9\u306E\u57FA\u5E95\u30AF\u30E9\u30B9\u3068\u3057\u3066\u6A5F\u80FD\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Generated\uFF08\u751F\u6210\uFF09`), `: \u3053\u308C\u3089\u306E\u30AF\u30E9\u30B9\u3068\u305D\u308C\u306B\u5BFE\u5FDC\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306F\u3001TouchGFX Designer\u3067\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u308B\u3068\u5E38\u306B\u518D\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u3053\u308C\u3089\u306E\u30AF\u30E9\u30B9\u3068\u30D5\u30A1\u30A4\u30EB\u306F\u7DE8\u96C6\u3057\u3066\u306F\u306A\u3089\u305A\u3001\u5909\u66F4\u306F\u30B3\u30FC\u30C9\uFF65\u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u306E\u6B21\u56DE\u5B9F\u884C\u6642\u306B\u3059\u3079\u3066\u4E0A\u66F8\u304D\u3055\u308C\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30AF\u30E9\u30B9\u306E\u57FA\u5E95\u30AF\u30E9\u30B9\u3068\u3057\u3066\u6A5F\u80FD\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `User\uFF08\u30E6\u30FC\u30B6\uFF09`), `: \u3053\u308C\u3089\u306E\u30AF\u30E9\u30B9\u306F\u30E6\u30FC\u30B6\u304C\u8A18\u8FF0\u3059\u308B\u30B3\u30FC\u30C9\u306E\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002 \u3053\u306E\u30EC\u30A4\u30E4\u306B\u306F\u3001\u30E6\u30FC\u30B6\u304C\u4EFB\u610F\u306E\u30B3\u30FC\u30C9\u3092\u81EA\u7531\u306B\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002 \u30E6\u30FC\u30B6\uFF65\u30AF\u30E9\u30B9\u306F\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u304C\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u5909\u66F4\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u30E6\u30FC\u30B6\u306B\u5C5E\u3059\u308B\u3082\u306E\u3067\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306F\u3001\u30AA\u30FC\u30D7\u30F3\u306A\u306E\u3067\u30E6\u30FC\u30B6\u304C\u4F5C\u6210\u3059\u308B\u5185\u5BB9\u306B\u5236\u9650\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u4F5C\u6210\u3057\u305F\u3082\u306E\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3001\u30A8\u30D5\u30A7\u30AF\u30C8\u306A\u3069\uFF09\u304CTouchGFX Designer\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u305D\u308C\u3092\u30E6\u30FC\u30B6\uFF65\u30AF\u30E9\u30B9\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306F\u3001\u8A2D\u8A08\u4E0A\u3001\u30E6\u30FC\u30B6\u306B\u3088\u308BTouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u65B9\u6CD5\u3092\u3001\u5236\u9650\u3067\u304D\u306A\u3044\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "files-generated-by-touchgfx-designer"
  }), `TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u308B\u30D5\u30A1\u30A4\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u539F\u5247\u3068\u3057\u3066\u3001TouchGFX Designer\u306FTouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated`), `\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u518D\u751F\u6210`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u306E\u307F`), `\u3092\u884C\u3046\u306E\u3067\u3001\u30E6\u30FC\u30B6\u306F\u3053\u308C\u3089\u3092\u7DE8\u96C6\u3057\u306A\u3044\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002\u4E0A\u66F8\u304D\u3055\u308C\u3066\u3057\u307E\u3046\u304B\u3089\u3067\u3059\u3002 \u305F\u3060\u3057\u3001TouchGFX Designer\u306F\u30B3\u30F3\u30D1\u30A4\u30EB\u306B\u5FC5\u8981\u306A\u30D5\u30A1\u30A4\u30EB\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `application.config`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `simulator/main.cpp`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/images/__designer`), `\u306B\u3042\u308B\u30B9\u30AD\u30F3\uFF65\u30A4\u30E1\u30FC\u30B8\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos/__designer`), `\u306B\u3042\u308B\u30B5\u30F3\u30D7\u30EB\uFF65\u30D3\u30C7\u30AA\u306A\u3069\uFF09\u304C\u898B\u3064\u304B\u3089\u306A\u3051\u308C\u3070\u3001\u305D\u308C\u3092\u751F\u6210\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u5B9F\u969B\u306B\u3001TouchGFX Designer\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u3082\u306E\u3055\u3048\u3042\u308C\u3070\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u751F\u6210\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3001\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u8A18\u8FF0\u3057\u305F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.touchgfx`), `\u30D5\u30A1\u30A4\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `gui`), `\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3055\u308C\u305F\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF08\u3042\u308B\u5834\u5408\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/images`), `\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3055\u308C\u305F\u30E6\u30FC\u30B6\u753B\u50CF\uFF08\u3042\u308B\u5834\u5408\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/texts/texts.xml`), `\u30D5\u30A1\u30A4\u30EB\u306B\u914D\u7F6E\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\uFF08\u3042\u308B\u5834\u5408\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/fonts`), `\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\uFF08\u3042\u308B\u5834\u5408\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/videos`), `\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3055\u308C\u305F\u30D3\u30C7\u30AA\uFF08\u3042\u308B\u5834\u5408\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "Git\u306A\u3069\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u5B9F\u969B\u306B\u306F\u4E0A\u8A18\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u307F\u3092\u30EA\u30DD\u30B8\u30C8\u30EA\u306B\u914D\u7F6E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u6B8B\u308A\u306FTouchGFX Designer\u305D\u306E\u3082\u306E\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example"
  }), `\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306E\u4E21\u65B9\u304C\u3042\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B7\u30F3\u30D7\u30EB\u306A\u4F8B\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u3063\u3066\u3001\u4E0A\u3067\u8AAC\u660E\u3057\u305F\u5185\u5BB9\u3092\u5177\u4F53\u7684\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer-view"
  }), `TouchGFX Designer\u306E\u30D3\u30E5\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u4F8B\u306F1\u753B\u9762\u306E\u307F\u3067\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyScreen`), `\u3068\u3044\u3046\u30B9\u30AF\u30EA\u30FC\u30F3\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `\u30DC\u30C3\u30AF\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `box1`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `\u30DC\u30BF\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `button1`), `\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `button1`), `\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306B\u3001\u4EEE\u60F3\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor()`), `\u3092\u547C\u3073\u51FA\u3059\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/designer-application-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u5FC5\u305A\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\uFF65\u30DC\u30C3\u30AF\u30B9\u306E\u8272\u304C\u65B0\u3057\u3044\u30E9\u30F3\u30C0\u30E0\u306A\u8272\u306B\u5909\u66F4\u3055\u308C\u308B\u3088\u3046\u306B\u3057\u305F\u3044\u3068\u8003\u3048\u3066\u3044\u307E\u3059\u3002 \u72EC\u81EA\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30FC\u30C9\u306E\u4F5C\u6210\u65B9\u6CD5\u306E\u5B9F\u4F8B\u3092\u793A\u3059\u305F\u3081\u306B\u3001\u3053\u306E\u52D5\u4F5C\u3092\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u5B9F\u88C5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "layers"
  }), `\u30EC\u30A4\u30E4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F8B\u306B\u5FC5\u8981\u306A\u3055\u307E\u3056\u307E\u306A\u30AF\u30E9\u30B9\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/code-levels-detailed.png",
    mdxType: "Figure"
  }, "\u30AF\u30E9\u30B9\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenViewBase`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendApplicationBase`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendHeapBase`), `\u306F\u751F\u6210\u3055\u308C\u305F\u30B9\u30DA\u30FC\u30B9\u5185\u306B\u3042\u308A\u3001\u4EE5\u4E0B\u3092\u610F\u5473\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u308C\u3089\u306FTouchGFX Designer\u3067\u5909\u66F4\u304C\u884C\u308F\u308C\u308B\u3068\u3001\u5FC5\u305A\u518D\u751F\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E6\u30FC\u30B6\u304C\u3053\u308C\u3089\u306E\u30AF\u30E9\u30B9\u3092\u7DE8\u96C6\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenView`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenPresenter`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendApplication`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendHeap`), `\u306F\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306E\u30B9\u30DA\u30FC\u30B9\u306B\u4F5C\u6210\u3055\u308C\u3001\u4EE5\u4E0B\u3092\u610F\u5473\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u308C\u3089\u306FTouchGFX Designer\u3067\u5909\u66F4\u304C\u884C\u308F\u308C\u3066\u3082\u3001\u518D\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E6\u30FC\u30B6\u306F\u3053\u3053\u306B\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30FC\u30C9\u3092\u81EA\u7531\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `box1`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `button1`), `\u306E\u3059\u3079\u3066\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306F\u3001\u751F\u6210\u3055\u308C\u305F\u30D3\u30E5\u30FC\u306E\u57FA\u5E95\u30AF\u30E9\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenViewBase`), `\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30AF\u30EA\u30FC\u30F3\u9593\u306E\u9077\u79FB\u306E\u305F\u3081\u306E\u3059\u3079\u3066\u306E\u95A2\u6570\u306F\u3001\u751F\u6210\u3055\u308C\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u57FA\u5E95\u30AF\u30E9\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendApplicationBase`), `\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9069\u5207\u306A\u91CF\u306E\u30E1\u30E2\u30EA\u3092\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306E\u3001\u3059\u3079\u3066\u306E\u8A18\u9332\u306F\u3001\u751F\u6210\u3055\u308C\u305F\u30D2\u30FC\u30D7\u306E\u57FA\u5E95\u30AF\u30E9\u30B9`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendHeapBase`), `\u306B\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u306F\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\uFF65\u30AF\u30E9\u30B9\u3092\u81EA\u7531\u306B\u7DE8\u96C6\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u3055\u3089\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `box1`), `\u306E\u8272\u3092\u5B9F\u969B\u306B\u5909\u66F4\u3059\u308B\u305F\u3081\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), `\u95A2\u6570\u3092\u5B9F\u88C5\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "code"
  }), `\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\uFF65\u30D9\u30FC\u30B9\u306E\u30B3\u30FC\u30C9\u3092\u898B\u3066\u307F\u308B\u3068\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u30DC\u30C3\u30AF\u30B9\u3068\u30DC\u30BF\u30F3\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 \u307E\u305F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonCallbackHandler`), `\u5185\u3067\u3001\u4EEE\u60F3\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), `\u3092\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3057\u3066\u547C\u3073\u51FA\u3057\u3066\u3044\u308B\u306E\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u304C\u3001\u73FE\u6642\u70B9\u3067\u3053\u306E\u95A2\u6570\u306F\u4F55\u3082\u5B9F\u884C\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\u306E\u57FA\u5E95\u30AF\u30E9\u30B9\u306E\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u898B\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), `\u306E\u5BA3\u8A00\u3068\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u5185\u3067\u3053\u306E\u95A2\u6570\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u3066\u5B9F\u88C5\u3059\u308B\u305F\u3081\u306E\u547D\u4EE4\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3067\u306F\u3001\u3053\u308C\u3092\u5B9F\u884C\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002 \u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306E\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyScreenView.hpp`), `\u306B\u79FB\u52D5\u3057\u3066\u3001\u95A2\u6570\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyScreenView`), `\u306Ecpp\u30D5\u30A1\u30A4\u30EB\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), `\u306E\u5B9F\u969B\u306E\u52D5\u4F5C\u3092\u5B9F\u88C5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u3053\u3067\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C\u3057\u3066\u307F\u308B\u3068\u3001\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306E\u4E21\u65B9\u3092\u6D3B\u7528\u3057\u3066\u30B7\u30F3\u30D7\u30EB\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u6B63\u5E38\u306B\u4F5C\u6210\u3067\u304D\u305F\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u305F\u3073\u306B\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\uFF65\u30DC\u30C3\u30AF\u30B9\u306E\u8272\u304C\u30E9\u30F3\u30C0\u30E0\u306B\u5909\u308F\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/simulator-random-color.gif",
    mdxType: "Figure"
  }, "\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u52D5\u304D\u3092\u793A\u3059\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u3082\u3061\u308D\u3093\u3001TouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306E\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u306F\u306A\u3044\u306E\u3067\u3059\u304C\u3001\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u6642\u9593\u3092\u5927\u5E45\u306B\u77ED\u7E2E\u3067\u304D\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u5FC5\u8981\u306A\u30D5\u30A1\u30A4\u30EB\u3092\u624B\u52D5\u3067\u8FFD\u52A0\u3057\u3066\u3044\u304F\u65E7\u6765\u306E\u65B9\u6CD5\u3067\u5B9F\u884C\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), "\u30DF\u30C3\u30AF\u30B9\uFF65\u30A2\u30F3\u30C9\uFF65\u30DE\u30C3\u30C1\uFF08\u5FC5\u8981\u306A\u6A5F\u80FD\u3092\u7D44\u307F\u5408\u308F\u305B\u3066\u5B9F\u884C\u3059\u308B\u3053\u3068\uFF09\u3082\u53EF\u80FD\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001TouchGFX Designer\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u306B\u306F\u3001 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "gotoXYZ"), " \u95A2\u6570\u3092 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "FrontendApplication"), " \u30AF\u30E9\u30B9\u306B\u8FFD\u52A0\u3057\u3066\u3001\u671B\u3080\u30B9\u30AF\u30EA\u30FC\u30F3\u3067\u5FC5\u8981\u306A\u30D3\u30E5\u30FC\u3001\u30D7\u30EC\u30BC\u30F3\u30BF\u3001\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u3092 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "FrontendHeap"), "\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);