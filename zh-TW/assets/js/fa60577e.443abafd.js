"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7530],{

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

/***/ 2089:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
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
  id: "using-binary-fonts",
  title: "\u4E8C\u9032\u4F4D\u5B57\u9AD4"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "id": "development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "title": "\u4E8C\u9032\u4F4D\u5B57\u9AD4",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-binary-fonts",
    "title": "\u4E8C\u9032\u4F4D\u5B57\u9AD4"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u52D5\u614B\u9EDE\u9663\u5716",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"
  },
  "next": {
    "title": "\u5B57\u9AD4\u5FEB\u53D6",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/touchgfx-engine-features/font-cache"
  }
};
const assets = {};


const toc = [{
  value: "\u5B57\u9AD4\u548C\u6587\u5B57\u7CFB\u7D71\u985E",
  id: "the-font-and-text-system-classes",
  level: 2
}, {
  value: "\u4F7F\u7528\u4E8C\u9032\u4F4D\u5B57\u9AD4",
  id: "using-binary-fonts",
  level: 2
}, {
  value: "\u914D\u7F6E\u5B57\u9AD4\u8F49\u63DB\u5668\u4EE5\u751F\u6210\u4E8C\u9032\u4F4D\u5B57\u9AD4",
  id: "configuring-the-font-converter-to-generate-binary-fonts",
  level: 3
}, {
  value: "\u624B\u52D5\u914D\u7F6E",
  id: "manual-configuration",
  level: 3
}, {
  value: "\u5B89\u88DD\u4E8C\u9032\u4F4D\u5B57\u9AD4",
  id: "installing-the-binary-font",
  level: 3
}, {
  value: "\u91CD\u7F6E\u5B57\u9AD4",
  id: "resetting-a-font",
  level: 3
}, {
  value: "Generating binary fonts in another project",
  id: "generating-binary-fonts-in-another-project",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u63CF\u8FF0\u5982\u4F55\u5728TouchGFX\u4E2D\u4F7F\u7528\u4E8C\u9032\u4F4D\u5B57\u9AD4\u3002 The first section contains some in-depth information about the font and text system in TouchGFX that can be beneficial to understand when working with binary fonts. The second section explains how to use binary fonts.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E8C\u9032\u4F4D\u5B57\u9AD4\u53EF\u7528\u4F5C\u5C07\u5B57\u9AD4\u8CC7\u8A0A\u7DE8\u8B6F\u4E26\u9023\u7D50\u5230\u61C9\u7528\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/src`), `\u4E2D\u7684.cpp\u6A94\uFF09\u7684\u50B3\u7D71\u65B9\u5F0F\u7684\u66FF\u4EE3\u65B9\u6848\u3002 The main advantages of this approach is to get a smaller application binary and get flexibility in form of providing different sets of fonts with your devices. For example you can pack the Chinese font with devices going to China, and the Japanese font with devices going there.  The drawback of this approach is that the whole binary font needs to be loaded to RAM (or memory-mapped flash) which can be a problem if the font is large.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C07\u5B57\u9AD4\u9023\u7D50\u5230\u61C9\u7528\u7684\u4E3B\u8981\u512A\u52E2\u662F\u61C9\u7528\u59CB\u7D42\u6703\u81EA\u52D5\u5305\u542B\u61C9\u7528\u4E2D\u4F7F\u7528\u7684\u66F4\u65B0\u6587\u5B57\u548C\u5B57\u9AD4\u6392\u5370\u3002 \u56E0\u6B64\uFF0C\u4F7F\u7528\u8D77\u4F86\u5341\u5206\u5BB9\u6613\u4E14\u5B89\u5168\u3002 \u5176\u7F3A\u9EDE\u5728\u65BC\u5B57\u9AD4\u6703\u4F7F\u61C9\u7528\u7684\u9AD4\u7A4D\u8B8A\u5927\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-font-and-text-system-classes"
  }), `\u5B57\u9AD4\u548C\u6587\u5B57\u7CFB\u7D71\u985E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9810\u8A2D\u914D\u7F6E\u4E2D\uFF0CTouchGFX\u70BA\u61C9\u7528\u4E2D\u4F7F\u7528\u7684\u6240\u6709\u6587\u5B57\u548C\u5B57\u9AD4\u751F\u6210.cpp\u6587\u4EF6\u3002 \u9019\u4E9B\u6A94\u6848\u9023\u540C\u751F\u6210\u7684UI\u548C\u61C9\u7528\u7A0B\u5F0F\u78BC\u4E00\u8D77\u88AB\u7DE8\u8B6F\u548C\u9023\u7D50\u5230\u61C9\u7528\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When you show a text on the UI with e.g. a TextArea, you reference the text with a TypedTextId. This TypedTextId is used by the Widgets to find the actual letters in the text. The Widgets will access the texts through the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `touchgfx::Texts`), ` class in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `framework/include/touchgfx/Texts.hpp`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Text\u985E\u5305\u542B\u6307\u6A19\u9663\u5217\uFF0C\u6307\u6A19\u6307\u5411\u61C9\u7528\u4E2D\u6BCF\u7A2E\u8A9E\u8A00\u7684\u7FFB\u8B6F\u8868\u3002 \u7FFB\u8B6F\u8868\u57FA\u672C\u4E0A\u662F\u8A9E\u8A00\u4E2D\u4F7F\u7528\u7684\u6240\u6709\u5B57\u4E32\u7684\u96C6\u5408\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",
    noShadow: "true",
    width: "420",
    mdxType: "Figure"
  }, "\u5C07\u6587\u5B57\u6620\u5C04\u5230\u7279\u5B9A\u8A9E\u8A00"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8868\u4F7FTouchGFX\u80FD\u5920\u627E\u5230\u4EE5\u9078\u4E2D\u8A9E\u8A00\u66F8\u5BEB\u7684\u7D66\u5B9A\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The tables are regenerated whenever you change a text in TouchGFX Designer or directly in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `texts.xml`), ` file and generate your application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Before we can draw the text on the screen we need to know which font to use for the text. This mapping between texts and fonts is controlled by the TypedTextDatabase class found in (`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/texts/include/texts/TypedTextDatabase.hpp`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u7684\u6587\u5B57\u9078\u9805\u5361\u4E0A\uFF0C\u53EF\u4EE5\u6307\u5B9A\u6BCF\u7A2E\u6587\u5B57\u7684\u5B57\u9AD4\u6392\u5370\u3001\u66F8\u5BEB\u65B9\u5411\uFF08\u5F9E\u5DE6\u5411\u53F3\u6216\u5F9E\u53F3\u5411\u5DE6\uFF09\u548C\u5C0D\u9F4A\u65B9\u5F0F\uFF08\u5DE6\u3001\u53F3\u548C\u4E2D\u5FC3\uFF09\u3002 \u6587\u5B57\u7684\u6BCF\u7A2E\u7FFB\u8B6F\u6A94\u7684\u5B57\u9AD4\u6392\u5370\u3001\u66F8\u5BEB\u9806\u5E8F\u548C\u5C0D\u9F4A\u65B9\u5F0F\u53EF\u80FD\u4E0D\u540C\u3002 \u6B64\u8CC7\u8A0A\u88AB\u7DE8\u8B6F\u5230\u6BCF\u7A2E\u8A9E\u8A00\u7279\u5B9A\u7684\u8868\u683C\u4E2D\u3002 This makes it easy for TouchGFX to find out what font to use for a given text, how to align it, and in what order to  write the letters.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u5B57\u9AD4\u6392\u5370\u8CC7\u8A0A\u7279\u5B9A\u65BC\u8A9E\u8A00"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0A\u5716\u4E2D\uFF0CTypedTextData\u8868\u6709\u6307\u5411\u4E09\u500B\u9663\u5217\u7684\u6307\u6A19\u3002 \u6BCF\u500B\u5C0D\u61C9\u65BC\u61C9\u7528\u4E2D\u7684\u4E00\u7A2E\u8A9E\u8A00\u3002 Each of the arrays have 3 elements, one for each text in the system. Each element describes a font, a reading order, and the alignment. We see that in this example the texts use the same font in the three languages, but the texts use different fonts (F1 or F2). The Fonts table has two pointers because two fonts are used in the application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576TouchGFX\u8981\u5728\u87A2\u5E55\u4E0A\u7E6A\u88FD\u6587\u5B57\u6642\uFF0C\u6703\u67E5\u627ETypedTextData\u7372\u53D6\u7D66\u5B9A\u6587\u5B57\u3002 This data contains the font index, letter order (LTR/RTL), and the horizontal alignment (Left, Right, Center) of the text as specified in the TouchGFX Designer or the xml document. TouchGFX\u4F7F\u7528TypedTextData\uFF08F1\u6216F2\uFF09\u4E2D\u7684\u5B57\u9AD4\u7D22\u5F15\u67E5\u627E\u6587\u5B57\u7684\u6B63\u78BA\u5B57\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5C07\u5B57\u9AD4\u7DE8\u8B6F\u5230\u61C9\u7528\u4E2D\u6642\uFF0C\u6240\u6709\u9019\u4E9B\u64CD\u4F5C\u90FD\u6703\u81EA\u52D5\u767C\u751F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-binary-fonts"
  }), `\u4F7F\u7528\u4E8C\u9032\u4F4D\u5B57\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u61C9\u7528\u4F7F\u7528\u8A31\u591A\u4E0D\u540C\u5B57\u9AD4\u7684\u8A31\u591A\u5B57\u6BCD\u6642\uFF0C\u61C9\u7528\u7684\u5927\u5C0F\u6703\u5927\u5927\u589E\u52A0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u7DE9\u89E3\u9019\u500B\u554F\u984C\uFF0CTouchGFX\u5141\u8A31\u61C9\u7528\u4F7F\u7528\u4E8C\u9032\u4F4D\u5B57\u9AD4\u3002 \u9019\u4E9B\u5B57\u9AD4\u4E0D\u9023\u7D50\u5230\u61C9\u7528\uFF0C\u800C\u662F\u7368\u7ACB\u4E8E\u61C9\u7528\u4E26\u4FDD\u5B58\u70BA\u55AE\u7368\u7684\u6587\u4EF6\u3002 These files can be loaded and provided to TouchGFX by the application at runtime. \u8209\u4F8B\u4F86\u8AAA\uFF0C\u61C9\u7528\u53EF\u4EE5\u5F9E\u5916\u90E8\u8A18\u61B6\u9AD4\uFF08\u5982SD\u5361\uFF09\u8F09\u5165\u5B57\u9AD4\uFF0C\u4E5F\u53EF\u4EE5\u5F9E\u4E92\u806F\u7DB2\u4E0B\u8F09\u5B57\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8F09\u5165\u5B57\u9AD4\u5F8C\uFF0C\u61C9\u7528\u53EF\u4EE5\u8981\u6C42TouchGFX\u5B89\u88DD\u5B57\u9AD4\u7CFB\u7D71\u4E2D\u7684\u4E8C\u9032\u4F4D\u5B57\u9AD4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\u5728\u5B57\u9AD4\u8868\u4E2D\u5B89\u88DD\u4E8C\u9032\u4F4D\u5B57\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Here the built-in Font2 is replaced by the binary font loaded by the application. \u6B64\u5F8C\uFF0CTouchGFX\u5C07\u4E0D\u4F7F\u7528\u5167\u9023Font2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Note that nothing changed in the text tables. These still refer to the same fonts (F1 and F2) by index.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "configuring-the-font-converter-to-generate-binary-fonts"
  }), `\u914D\u7F6E\u5B57\u9AD4\u8F49\u63DB\u5668\u4EE5\u751F\u6210\u4E8C\u9032\u4F4D\u5B57\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u751F\u6210\u4E8C\u9032\u4F4D\u5B57\u9AD4\uFF0C\u5FC5\u9808\u914D\u7F6E\u5B57\u9AD4\u8F49\u63DB\u5668\u3002 \u9019\u5728TouchGFX Designer\u4E2D\u5F88\u5BB9\u6613\u5BE6\u73FE\u3002 \u8F49\u81F3\u201CConfig\u201D\u9078\u9805\u5361\uFF0C\u9078\u64C7\u201CText Configuration\u201D\uFF0C\u7136\u5F8C\u9EDE\u64CA\u201CBinary font files\u201D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.png",
    mdxType: "Figure"
  }, "\u9078\u64C7\u4E8C\u9032\u4F4D\u5B57\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When you regenerate the code, TouchGFX will generate binary fonts in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/bin/`), ` folder, and empty fonts in the normal files in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/src/`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The generated code will configure TouchGFX to use the empty font. The application is required to install the binary font at runtime.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "manual-configuration"
  }), `\u624B\u52D5\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u4E0D\u4F7F\u7528TouchGFX Designer\uFF0C\u4ECD\u7136\u53EF\u4EE5\u751F\u6210\u4E8C\u9032\u4F4D\u5B57\u9AD4\u3002 \u5728\u5C08\u6848\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `application.config`), `\u6A94\u7684text_configuration\u90E8\u5206\u5C07\u9078\u9805\u201Cbinary_fonts\u201D\u66F4\u6539\u70BA\u201Cyes\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "application.config"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `  "text_configuration": {
    "remap": "yes",
    "a4": "yes",
    "binary_translations": "no",
    "binary_fonts": "yes",
    "framebuffer_bpp": "16"
  }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u4E00\u6B21\u751F\u6210\u6642\uFF0C\u4E8C\u9032\u4F4D\u5B57\u9AD4\u5C07\u6703\u51FA\u73FE\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/bin`), `\u8CC7\u6599\u593E\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-the-binary-font"
  }), `\u5B89\u88DD\u4E8C\u9032\u4F4D\u5B57\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Before TouchGFX can use a binary font the font data must be made available in addressable memory like RAM or QSPI flash (where it can be directly accessed through a pointer). Typically this involves copying the data from a file or block storage like emmc flash. This can also happen during production where the binary font is flashed to a predefined address in a memory-mapped flash.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When the application has loaded the binary font to memory (if not available already), the application must create and install a `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BinaryFont`), ` object referring the data in TouchGFX. After this, TouchGFX will use that font and not the compiled in font.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The binary font needs to be installed before it is used to draw the text that refers to the font, but it does not need to be installed immediately after booting. The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)`), ` constructor in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FrontApplication.cpp`), ` can be used to install fonts. This constructor is executed once before anything is drawn.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fonts can also be installed in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), ` methods. This is useful if you have a font that is only used in a specific screen. The font can then be un-installed in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tearDownScreen()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Here is an example of loading a binary font from a file-system to internal RAM:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5,19-19,22-22}",
    "{5-5,19-19,22-22}": true
  }), `//read the file into this array in internal RAM
uint8_t fontdata[10000];

//binary font object using the data
BinaryFont bf;

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    //read the binary font from a file
    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");
    if (font)
    {
        //read data from the file
        fread(fontdata, 1, 10000, font);
        fclose(font);

        //initialize BinaryFont object in bf using placement new
        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);

        //replace application font 'DEFAULT' with the binary font
        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6253\u958B\u6A94\u6848\u548C\u8B80\u53D6\u8CC7\u6599\u7684\u5177\u9AD4\u7A0B\u5F0F\u78BC\u5C07\u53D6\u6C7A\u65BC\u6A94\u6848\u7CFB\u7D71\u548C\u4F5C\u696D\u7CFB\u7D71\u3002 The basic steps are to make the font data available in memory, initialize a BinaryFont object with a pointer to the data, and finally pass the BinaryFont object to the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypedTextDatabase`), ` of TouchGFX.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `After the call to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `setFont`), ` TouchGFX will use the binary font to draw text on the screen instead of the compiled in font (DEFAULT).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "resetting-a-font"
  }), `\u91CD\u7F6E\u5B57\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u7528\u4E8C\u9032\u4F4D\u5B57\u9AD4\u5F8C\uFF0C\u6709\u6642\u6703\u60F3\u8981\u6062\u5FA9\u7DE8\u8B6F\u5230\u61C9\u7528\u4E2D\u7684\u539F\u59CB\u5B57\u9AD4\u3002 \u4F8B\u5982\uFF0C\u5728\u66F4\u6539\u8A9E\u8A00\u6642\uFF0C\u60F3\u8981\u4F7F\u7528\u9810\u8A2D\u5B57\u9AD4\u3002 TypedTextDatabase\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `resetFont()`), `\u51FD\u6578\u5C07\u91CD\u7F6E\u6307\u5411\u5167\u5EFA\u5B57\u9AD4\u7684\u5B57\u9AD4\u6307\u6A19\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//reset to original font
TypedTextDatabase::resetFont(DEFAULT);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u547C\u53EB\u5F8C\uFF0C\u61C9\u7528\u53EF\u4EE5\u91CD\u8907\u4F7F\u7528\u88AB\u4E8C\u9032\u4F4D\u5B57\u9AD4\u4F54\u7528\u7684\u5B58\u5132\u7A7A\u9593\uFF0C\u4EE5\u4FBF\u5206\u914D\u65B0\u5B57\u9AD4\u6216\u7528\u65BC\u5176\u4ED6\u7528\u9014\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generating-binary-fonts-in-another-project"
  }), `Generating binary fonts in another project`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In some cases you want to have both normal fonts and binary fonts in a project. For example you want to have English letters in a normal compiled-in font, but Chinese and Japanese characters in binary fonts for optional inclusion in the device. This setup is not configurable in TouchGFX Designer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this case it is advised to create two TouchGFX projects. In the first project (your normal application) you have all your application code and UI with normal fonts. In the second project you have only enough texts (or wildcard characters) to generate the binary fonts.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In the first project, you deselect "Binary font files". In the second project you select "Binary font files".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When you generate code in the second TouchGFX project the binary fonts are generated. The binary fonts can then be copied to the first project (in a folder of your convenience), and be used in the code as shown above.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);