"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1964],{

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

/***/ 77358:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39130);
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
  id: "adding-files-to-stm32cubemx-projet",
  title: "STM32CubeMX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u8FFD\u52A0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/adding-files-to-stm32cubemx-projet",
  "id": "development/scenarios/adding-files-to-stm32cubemx-projet",
  "title": "STM32CubeMX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u8FFD\u52A0",
  "description": "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u751F\u6210\u306E\u305F\u3081\u306E\u8FFD\u52A0\u8A2D\u5B9A",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/adding-files-to-stm32cubemx-projet.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/adding-files-to-stm32cubemx-projet",
  "permalink": "/4.20/ja/docs/development/scenarios/adding-files-to-stm32cubemx-projet",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "adding-files-to-stm32cubemx-projet",
    "title": "STM32CubeMX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u8FFD\u52A0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX Board Setup\u3067RTOS\u3092\u4F7F\u7528\u305B\u305A\u306B\u5B9F\u884C",
    "permalink": "/4.20/ja/docs/development/scenarios/running-without-rtos"
  },
  "next": {
    "title": "Miscellaneous",
    "permalink": "/4.20/ja/docs/category/miscellaneous-1"
  }
};
const assets = {};






const toc = [{
  value: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u751F\u6210\u306E\u305F\u3081\u306E\u8FFD\u52A0\u8A2D\u5B9A",
  id: "additional-settings-for-project-generation",
  level: 2
}, {
  value: "\u30A8\u30F3\u30C8\u30EA\u3068\u69CB\u6587",
  id: "possible-entries-and-syntax",
  level: 3
}, {
  value: "\u4F8B",
  id: "examples",
  level: 3
}, {
  value: "\u751F\u6210\u6E08\u307F\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u5F71\u97FF",
  id: "impact-on-generated-project",
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
    "id": "additional-settings-for-project-generation"
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u751F\u6210\u306E\u305F\u3081\u306E\u8FFD\u52A0\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3067\u306F\u3001\u30E6\u30FC\u30B6\u304C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.extSettings`), `\u30D5\u30A1\u30A4\u30EB\u3092\u4ECB\u3057\u3066\u8FFD\u52A0\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u8A2D\u5B9A\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 \u8FFD\u52A0\u3055\u308C\u305F\u8A2D\u5B9A\u306F\u3001CubeMX\u30B3\u30FC\u30C9\u306E\u751F\u6210\u6642\u306B\u3001\u6307\u5B9A\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.extSettings`), `\u30D5\u30A1\u30A4\u30EB\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.ioc`), `\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u540C\u3058\u968E\u5C64\u306B\u914D\u7F6E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "possible-entries-and-syntax"
  }), `\u30A8\u30F3\u30C8\u30EA\u3068\u69CB\u6587`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `ProjectFiles`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `ProjectFiles`), `\u30BB\u30AF\u30B7\u30E7\u30F3\u5185\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u8FFD\u52A0\u306E\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF65\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u69CB\u6587\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `HeaderPath = <include directory 1 path>;< include directory 2 path >
`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Groups`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Groups`), `\u30BB\u30AF\u30B7\u30E7\u30F3\u5185\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u65B0\u3057\u3044\u30B0\u30EB\u30FC\u30D7\u3092\u4F5C\u6210\u3057\u305F\u308A\u3001\u30B0\u30EB\u30FC\u30D7\u306B\u30D5\u30A1\u30A4\u30EB\u3092\u8FFD\u52A0\u3057\u305F\u308A\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u69CB\u6587\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `<Group name> = <file pathname1>;< file pathname2>
`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Others`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Others`), `\u30BB\u30AF\u30B7\u30E7\u30F3\u5185\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001HAL\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u6709\u52B9\u306B\u3057\u305F\u308A\u3001\u30D7\u30EA\u30D7\u30ED\u30BB\u30C3\u30B5\u306Edefine\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3092\u6307\u5B9A\u3057\u305F\u308A\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u69CB\u6587\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Define = <define1_name>;<define2_name>
`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "examples"
  }), `\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u4F8B\u3067\u306F\u3001STM32H735G-DK\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8FFD\u52A0\u8A2D\u5B9A\u3092\u6307\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32H735G-DK\u7528\u306E.extSettings\u30D5\u30A1\u30A4\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json",
    "metastring": "{2,4-6,8-9}",
    "{2,4-6,8-9}": true
  }), `[ProjectFiles]
HeaderPath=../Drivers/BSP/Components/Common;../Drivers/BSP/STM32H735G-DK
[Groups]
Drivers/BSP/STM32H735G-DK=../Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ospi.c;../Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ts.c;../Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_bus.c
Drivers/BSP/Components=../Drivers/BSP/Components/s70kl1281/s70kl1281.c;../Drivers/BSP/Components/mx25lm51245g/mx25lm51245g.c;../Drivers/BSP/Components/ft5336/ft5336.c;../Drivers/BSP/Components/ft5336/ft5336_reg.c
Application/User/TouchGFX/target=../TouchGFX/target/CortexMMCUInstrumentation.cpp
[Others]
Define=USE_STM32H735G_DK
HALModule=I2C
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u4F8B\u3067\u306F\u3001STM32H747I-DK\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8FFD\u52A0\u8A2D\u5B9A\u306E\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u30DE\u30EB\u30C1\u30B3\u30A2\u69CB\u6210\u306B\u5BFE\u3059\u308B\u8A2D\u5B9A\u306E\u5834\u5408\u3001\u30D5\u30A1\u30A4\u30EB\u307E\u305F\u306F\u8A2D\u5B9A\u3092\u8FFD\u52A0\u3059\u308B\u30B3\u30A2\u3092\u30E6\u30FC\u30B6\u304C\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32H747I-DISCO\u7528\u306E.extSettings\u30D5\u30A1\u30A4\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json",
    "metastring": "{2,4-6,8-9}",
    "{2,4-6,8-9}": true
  }), `[CortexM7:ProjectFiles]
HeaderPath=../Drivers/BSP/Components/Common;../Drivers/BSP/STM32H747I-Discovery
[CortexM7:Groups]
Application/User/CM7/TouchGFX/target=../CM7/TouchGFX/target/STM32H7Instrumentation.cpp
Drivers/BSP/Components=../Drivers/BSP/Components/otm8009a/otm8009a.c;../Drivers/BSP/Components/otm8009a/otm8009a_reg.c;../Drivers/BSP/Components/ft6x06/ft6x06.c;../Drivers/BSP/Components/ft6x06/ft6x06_reg.c;../Drivers/BSP/Components/mt25tl01g/mt25tl01g.c;../Drivers/BSP/Components/is42s32800j/is42s32800j.c
Drivers/BSP/STM32H747I-Discovery=../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_bus.c;../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_qspi.c;../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_sdram.c;../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_ts.c;
[CortexM7:Others]
Define=USE_STM32H747I_DISCO
HALModule=I2C
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "impact-on-generated-project"
  }), `\u751F\u6210\u6E08\u307F\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u5F71\u97FF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CubeMX\u304B\u3089\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u751F\u6210\u6642\u306B\u3001\u3053\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.extSettings`), `\u30D5\u30A1\u30A4\u30EB\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u306F\u4EE5\u4E0B\u306E\u66F4\u65B0\u304C\u30C8\u30EA\u30AC\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308BIDE\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.project`), `\u30D5\u30A1\u30A4\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E `.project` \u30D5\u30A1\u30A4\u30EB\uFF08STM32CubeIDE IDE\uFF09\u306E\u66F4\u65B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-xml",
    "metastring": "{2,7,12,17,22,27,32,38}",
    "{2,7,12,17,22,27,32,38}": true
  }), `        <link>
            <name>Drivers/BSP/Components/ft5336.c</name>
            <type>1</type>
            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/ft5336/ft5336.c</locationURI>
        </link>
        <link>
            <name>Drivers/BSP/Components/ft5336_reg.c</name>
            <type>1</type>
            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/ft5336/ft5336_reg.c</locationURI>
        </link>
        <link>
            <name>Drivers/BSP/Components/mx25lm51245g.c</name>
            <type>1</type>
            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/mx25lm51245g/mx25lm51245g.c</locationURI>
        </link>
        <link>
            <name>Drivers/BSP/Components/s70kl1281.c</name>
            <type>1</type>
            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/s70kl1281/s70kl1281.c</locationURI>
        </link>
        <link>
            <name>Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_bus.c</name>
            <type>1</type>
            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_bus.c</locationURI>
        </link>
        <link>
            <name>Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ospi.c</name>
            <type>1</type>
            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ospi.c</locationURI>
        </link>
        <link>
            <name>Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ts.c</name>
            <type>1</type>
            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ts.c</locationURI>
        </link>
    ...
        <link>
            <name>Application/User/TouchGFX/target/CortexMMCUInstrumentation.cpp</name>
            <type>1</type>
            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/TouchGFX/target/CortexMMCUInstrumentation.cpp</locationURI>
        </link>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `Inc`), `\uFF08\u30A4\u30F3\u30AF\u30EB\u30FC\u30C9\uFF09\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `stm32h7xx_hal_conf.h`), `\u30D5\u30A1\u30A4\u30EB\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.extsettings`), `\u30D5\u30A1\u30A4\u30EB\u306BI2C\u30E2\u30B8\u30E5\u30FC\u30EB\u304C\u5B58\u5728\u3059\u308B\u305F\u3081\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32h7xx_hal_conf.h\u30D5\u30A1\u30A4\u30EB\u3092\u3001\u9078\u629E\u3055\u308C\u305FHAL\u30E2\u30B8\u30E5\u30FC\u30EB\uFF08I2C\uFF09\u3092\u6709\u52B9\u5316\u3059\u308B\u305F\u3081\u306B\u66F4\u65B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-c",
    "metastring": "{10}",
    "{10}": true
  }), `/* #define HAL_PSSI_MODULE_ENABLED */
/* #define HAL_DTS_MODULE_ENABLED */
#define HAL_GPIO_MODULE_ENABLED
#define HAL_DMA_MODULE_ENABLED
#define HAL_MDMA_MODULE_ENABLED
#define HAL_RCC_MODULE_ENABLED
#define HAL_FLASH_MODULE_ENABLED
#define HAL_EXTI_MODULE_ENABLED
#define HAL_PWR_MODULE_ENABLED
#define HAL_I2C_MODULE_ENABLED
#define HAL_CORTEX_MODULE_ENABLED
/* #define HAL_HSEM_MODULE_ENABLED */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32CubeIDE`), `\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D3\u30E5\u30FC\u306F\u3001\u6B21\u306E\u56F3\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/adding-files-to-stm32cubemx-projet-bsp.png",
    width: "400px",
    mdxType: "Figure"
  }, "BSP Drivers\u306E\u30B0\u30EB\u30FC\u30D7\u3068\u30D5\u30A1\u30A4\u30EB\u304C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7\u306B\u65B0\u3057\u304F\u8FFD\u52A0\u3055\u308C\u308B"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/adding-files-to-stm32cubemx-projet-instrumentation.png",
    width: "399px",
    mdxType: "Figure"
  }, "MCU Instrumentation\u306E\u30B0\u30EB\u30FC\u30D7\u3068\u30D5\u30A1\u30A4\u30EB\u304C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7\u306B\u65B0\u3057\u304F\u8FFD\u52A0\u3055\u308C\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, ".extSettings\u30D5\u30A1\u30A4\u30EB\u306B\u3088\u3063\u3066\u53C2\u7167\u3055\u308C\u308B\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30E6\u30FC\u30B6\u304CSTM32CubeMX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u624B\u52D5\u3067\u8FFD\u52A0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u306ESTM32H735G-DK\u306E\u4F8B\u3067\u306F\u3001CortexMMCUInstrumentation.cpp\u30D5\u30A1\u30A4\u30EB\u304C\u6307\u5B9A\u3055\u308C\u305F\u5834\u6240\uFF08/TouchGFX/target/CortexMMCUInstrumentation.cpp\uFF09\u306B\u5B58\u5728\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "UM1718 : ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    to: "https://www.st.com/resource/en/user_manual/dm00104712-stm32cubemx-for-stm32-configuration-and-initialization-c-code-generation-stmicroelectronics.pdf",
    mdxType: "Link"
  }, "STM32CubeMX for STM32 configuration and initialization C code generation"), "\u306E\u30BB\u30AF\u30B7\u30E7\u30F36.4\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);