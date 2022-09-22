"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1144],{

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

/***/ 31099:
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
  id: "fonts-in-unmapped-flash",
  title: "\u4F7F\u7528\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\u5B58\u50A8\u5B57\u4F53\u6570\u636E"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/fonts-in-unmapped-flash",
  "id": "development/scenarios/fonts-in-unmapped-flash",
  "title": "\u4F7F\u7528\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\u5B58\u50A8\u5B57\u4F53\u6570\u636E",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/fonts-in-unmapped-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/fonts-in-unmapped-flash",
  "permalink": "/4.20/zh-CN/docs/development/scenarios/fonts-in-unmapped-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "fonts-in-unmapped-flash",
    "title": "\u4F7F\u7528\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\u5B58\u50A8\u5B57\u4F53\u6570\u636E"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4F7F\u7528\u4E32\u884C\u95EA\u5B58\u5B58\u50A8\u56FE\u50CF\u548C\u5B57\u4F53",
    "permalink": "/4.20/zh-CN/docs/development/scenarios/using-serial-flash"
  },
  "next": {
    "title": "\u66F4\u6539\u5E94\u7528\u7684\u50CF\u7D20\u683C\u5F0F",
    "permalink": "/4.20/zh-CN/docs/development/scenarios/scenarios-change-pixelformat-bpp"
  }
};
const assets = {};


const toc = [{
  value: "\u5B57\u4F53\u5E03\u5C40",
  id: "font-layouts",
  level: 2
}, {
  value: "\u6620\u5C04\u5B58\u50A8\u683C\u5F0F",
  id: "mapped-storage-format",
  level: 3
}, {
  value: "\u975E\u6620\u5C04\u5B58\u50A8\u683C\u5F0F",
  id: "unmapped-storage-format",
  level: 3
}, {
  value: "\u5B57\u4F53\u6570\u636E\u8BFB\u53D6\u5668",
  id: "font-data-reader",
  level: 4
}, {
  value: "\u603B\u7ED3",
  id: "summary",
  level: 3
}, {
  value: "\u793A\u4F8B",
  id: "example",
  level: 2
}, {
  value: "\u94FE\u63A5\u811A\u672C\u4FEE\u6539",
  id: "linker-script-modifications",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u5C06\u8BA8\u8BBA\u5982\u4F55\u4F7F\u7528\u975E\u5185\u5B58\u6620\u5C04\u7684\u5B57\u4F53\u5B58\u50A8\u683C\u5F0F\uFF0C\u4EE5\u4FBF\u5C06\u51E0\u4E4E\u6240\u6709\u5B57\u4F53\u6570\u636E\u653E\u5165\u975E\u5185\u5B58\u6620\u5C04\u7684\u5916\u90E8Flash\u3002 \u4F7F\u7528\u8BE5\u5B58\u50A8\u683C\u5F0F\u7684\u6548\u679C\u662F\uFF0C\u60A8\u53EF\u4EE5\u5728\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6709\u6570\u5343\u4E2A\u5B57\u6BCD\uFF0C\u800C\u5B57\u4F53\u6570\u636E\u53EA\u970010 KB\u7684\u5185\u90E8flash\u5B58\u50A8\u7A7A\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-layouts"
  }), `\u5B57\u4F53\u5E03\u5C40`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u7F16\u8BD1\u5230\u5E94\u7528\u4E2D\u7684\u5B57\u4F53\uFF0CTouchGFX\u652F\u6301\u4E24\u79CD\u4E0D\u540C\u7684\u5B57\u4F53\u5E03\u5C40\u3002 \u53EF\u5728TouchGFX Designer\u7684\u914D\u7F6E\u9009\u9879\u5361\u4E2D\u9009\u62E9\u8981\u4F7F\u7528\u7684\u5E03\u5C40\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/fonts-in-unmapped-flash/designer-configuration-4.17.png",
    mdxType: "Figure"
  }, "\u914D\u7F6E\u5B57\u4F53\u5E03\u5C40"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u6620\u5C04\u5B58\u50A8\u683C\u5F0F`), `\u662F\u9ED8\u8BA4\u5B57\u4F53\u5E03\u5C40\uFF0C\u5F53\u5B57\u4F53\u6570\u636E\u5B58\u653E\u5728\u5185\u5B58\u6620\u5C04\u95EA\u5B58\uFF08\u5185\u90E8\u6216\u5916\u90E8QSPI\u95EA\u5B58\u7B49\uFF09\u4E2D\u65F6\uFF0C\u5E94\u5F53\u4F7F\u7528\u6620\u5C04\u5B58\u50A8\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u975E\u6620\u5C04\u5B58\u50A8\u683C\u5F0F`), `\u662F\u65B0\u7684\u5B57\u4F53\u5E03\u5C40\u3002 \u5B83\u53EF\u4EE5\u5C06\u5927\u591A\u6570\u5B57\u4F53\u6570\u636E\u5B58\u50A8\u5728\u975E\u6620\u5C04\u95EA\u5B58\u4E2D\u3002 \u901A\u5E38\u5982SPI\u95EA\u5B58\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B\u7684\u5B58\u50A8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mapped-storage-format"
  }), `\u6620\u5C04\u5B58\u50A8\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6620\u5C04\u5B58\u50A8\u683C\u5F0F\u5C06\u5B57\u4F53\u6570\u636E\u4FDD\u5B58\u5728\u4E24\u4E2A\u8868\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E00\u4E2A\u8868\u662F\u4E00\u4E2A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `touchgfx::GlyphNode`), `\u6570\u7EC4\u3002 \u5176\u4E2D\u5305\u542B\u5404\u4E2A\u5B57\u7B26\u7684\u5C5E\u6027\uFF1A\u9AD8\u3001\u5BBD\u548Cunicode\u7F16\u7801\u7B49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/fonts/src/Table_verdana_20_4bpp.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FONT_TABLE_LOCATION_FLASH_PRAGMA
KEEP extern const touchgfx::GlyphNode glyphs_verdana_20_4bpp[] FONT_TABLE_LOCATION_FLASH_ATTRIBUTE =
{
    {     0, 0x0020,   0,   0,   0,   0,   7,   0,   0, 0x00 },
    {     0, 0x002C,   5,   7,   3,   1,   7,   0,   2, 0x00 },
    {    21, 0x0030,  11,  14,  14,   1,  13,   0,   0, 0x00 },
    {   105, 0x0032,  11,  14,  14,   1,  13,   0,   0, 0x00 },
    {   189, 0x0033,  11,  14,  14,   1,  13,   0,   0, 0x00 },
    {   273, 0x0034,  12,  14,  14,   0,  13,   0,   0, 0x00 },
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E8C\u4E2A\u8868\uFF08\u6BD4\u8F83\u5927\u7684\u5B57\u4F53\u4F1A\u62C6\u5206\u4E3A\u591A\u4E2A\u6587\u4EF6\uFF09\u5305\u542B\u5B57\u7B26\u7684\u50CF\u7D20\u6837\u5F0F\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/fonts/src/Font_verdana_20_4bpp_0.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FONT_GLYPH_LOCATION_FLASH_PRAGMA
KEEP extern const uint8_t unicodes_verdana_20_4bpp_0[] FONT_GLYPH_LOCATION_FLASH_ATTRIBUTE =
{
    // Unicode: [0x0020]
    // (Has no glyph data)
    // Unicode: [0x002C]
    0x00, 0x87, 0x04, 0x20, 0xFF, 0x03, 0x60, 0xBF, 0x00, 0xA0, 0x5F, 0x00, 0xE0, 0x0D, 0x00, 0xF3,
    0x07, 0x00, 0xF6, 0x01, 0x00,
    // Unicode: [0x0030]
    0x00, 0xA3, 0xFE, 0x9D, 0x01, 0x00, 0x40, 0xFF, 0x9B, 0xFC, 0x1D, 0x00, 0xD0, 0x4F, 0x00, 0x80,
    0x9F, 0x00, 0xF3, 0x0B, 0x00, 0x10, 0xEE, 0x00, 0xF7, 0x07, 0x00, 0x00, 0xFB, 0x03, 0xF9, 0x06,
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6587\u672C\u5E03\u5C40\u8FC7\u7A0B\u4E2D\uFF0CTouchGFX\u5F15\u64CE\u5C06\u4F7F\u7528GlyphNodes\u3002 \u5728\u7ED8\u56FE\u8FC7\u7A0B\u4E2D\uFF0C\u7531DMA2D\u6216\u8F6F\u4EF6\u7A0B\u5E8F\u8BFB\u53D6\u50CF\u7D20\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u7528\u666E\u901ALCD\u7C7B\uFF08\u5982LCD16bpp\u6216LCD24bpp\uFF09\u7684\u5E73\u53F0\u4E0A\uFF0C\u5FC5\u987B\u5C06\u8FD9\u4E9B\u8868\u4FDD\u5B58\u5728\u5185\u90E8Flash\u6216\u5185\u5B58\u6620\u5C04\u7684\u5916\u90E8Flash\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u7528LCD16bppSerialFlash\u7684\u5E73\u53F0\u4E0A\uFF0C\u6E32\u67D3\u8F6F\u4EF6\u53EF\u4EE5\u4ECE\u975E\u5185\u5B58\u6620\u5C04\u7684\u4E32\u884Cflash\u4E2D\u8BFB\u53D6\u50CF\u7D20\u6837\u5F0F\uFF0C\u4F46GlyphNodes\u8868\u5FC5\u987B\u4F4D\u4E8E\u5185\u90E8flash\u4E2D(\u7528\u4E8E\u76F4\u63A5\u641C\u7D22)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u5E03\u5C40\u4E3A\u6BCF\u4E2A\u5B57\u7B26\u4F7F\u752814\u4E2A\u5B57\u8282\u7684\u5185\u90E8flash\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "unmapped-storage-format"
  }), `\u975E\u6620\u5C04\u5B58\u50A8\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u975E\u5185\u5B58\u6620\u5C04\u5B58\u50A8\u683C\u5F0F\u5C06\u5B57\u4F53\u6570\u636E\u4FDD\u5B58\u5728\u4E09\u4E2A\u8868\u4E2D\u3002 \u590D\u7528\u4E86\u6765\u81EA\u6620\u5C04\u5B58\u50A8\u5E03\u5C40\u7684\u4E24\u4E2A\u8868\uFF0C\u4F46\u589E\u52A0\u4E86\u7B2C\u4E09\u4E2A\u8868\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/fonts/src/Table_verdana_20_4bpp.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FONT_SEARCHTABLE_LOCATION_FLASH_PRAGMA
KEEP extern const uint16_t unicodelist_verdana_20_4bpp[] FONT_SEARCHTABLE_LOCATION_FLASH_ATTRIBUTE =
{
    0x0020,
    0x002E,
    0x003F,
    0x004E,
    0x0054,
    ....
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u7B2C\u4E09\u4E2A\u8868\u53EA\u5305\u542B\u5B57\u4F53\u4E2D\u51FA\u73B0\u5B57\u7B26\u7684unicode\u7F16\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4F7F\u7528\u6B64\u5B57\u4F53\u5E03\u5C40\u65F6\uFF0C\u7B2C\u4E09\u4E2A\u8868\u5FC5\u987B\u4F4D\u4E8E\u5185\u90E8Flash\u4E2D\uFF0C\u4F46\u53EF\u4EE5\u5C06\u53E6\u5916\u4E24\u4E2A\u8868\u79FB\u52A8\u5230\u5916\u90E8Flash\u4E2D\u3002 \u7531\u4E8E\u7B2C\u4E09\u4E2A\u8868\u5BF9\u6BCF\u4E2A\u5B57\u7B26\u4F7F\u7528\u4E24\u4E2A\u5B57\u8282\uFF0C\u800CGlyphNode\u8868\u4F7F\u752814\u4E2A\u5B57\u8282\uFF0C\u56E0\u6B64\u5927\u5927\u8282\u7EA6\u4E86\u5B58\u50A8\u7A7A\u95F4\u3002 \u8FD9\u53EF\u4EE5\u964D\u4F4E\u5BF9\u5185\u90E8\u95EA\u5B58\u7684\u5B58\u50A8\u9700\u6C42\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "font-data-reader"
  }), `\u5B57\u4F53\u6570\u636E\u8BFB\u53D6\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u5B57\u4F53\u6570\u636E\u4F4D\u4E8E\u975E\u6620\u5C04\u95EA\u5B58\u4E2D\u65F6\uFF0CMcu\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE\u5B83\u3002 We therefore have to provide a flash reader object to the font subsystem. The code for this is automatically generated by TouchGFX Generator:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{12-12}",
    "{12-12}": true
  }), `static TouchGFXDataReader dataReader;
static LCD16bppSerialFlash display(dataReader);
static ApplicationFontProvider fontProvider;
static Texts texts;
static TouchGFXHAL hal(dma, display, tc, 240, 320);
void touchgfx_init()
{
  Bitmap::registerBitmapDatabase(BitmapDatabase::getInstance(), BitmapDatabase::getInstanceSize());
  TypedText::registerTexts(&texts);
  Texts::setLanguage(0);
  hal.setDataReader(&dataReader);
  fontProvider.setFlashReader(&dataReader);
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u4E0D\u4F7F\u7528\u751F\u6210\u5668\uFF0C\u5219\u5FC5\u987B\u624B\u52A8\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6CE8\u610F\uFF0C\u5E94\u5B9E\u73B0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u4E2D\u7684\u51FD\u6570\uFF0C\u4ECE\u800C\u5B9E\u9645\u4E0A\u4ECE\u95EA\u5B58\u4E2D\u8BFB\u53D6\u5B57\u4F53\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "summary"
  }), `\u603B\u7ED3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B57\u4F53\u6570\u636E\u4FDD\u5B58\u5728\u4E24\u4E2A\u6216\u4E09\u4E2A\u8868\u4E2D\u3002 \u4E0B\u8868\u663E\u793A\u4E86flash\u4E2D\u7684\u4F4D\u7F6E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8868\uFF08\u793A\u4F8B\u540D\u79F0\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6620\u5C04\u5B58\u50A8\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u975E\u6620\u5C04\u5B58\u50A8\u683C\u5F0F`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GlyphNodes\u4F4D\u4E8Eglyphs_verdana_20_4bpp\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u50CF\u7D20\u6570\u636E\u4F4D\u4E8Eunicodes_verdana_20_4bpp_0\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Unicodes\u4F4D\u4E8Eunicodelist_verdana_20_4bpp\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u672A\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example"
  }), `\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u662F\u4F7F\u7528\u65B0\u5B57\u4F53\u5E03\u5C40\u7684\u5E94\u7528\u7684\u5C4F\u5E55\u622A\u56FE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/fonts-in-unmapped-flash/example1.png",
    mdxType: "Figure"
  }, "\u5177\u67094000\u4E2A\u4E2D\u6587\u5B57\u7B26\u7684\u5E94\u7528\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5E94\u7528\u8FD0\u884C\u5728STM32G071 Nucleo\u677F\u4E0A\uFF0C\u5E76\u4F7F\u7528\u4E86MB1642A\u663E\u793A\u6A21\u5757\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/fonts-in-unmapped-flash/g071.png",
    width: "400",
    mdxType: "Figure"
  }, "\u5728STM32G071 Nucleo\u4E0A\u8FD0\u884C\u7684\u793A\u4F8B\u5E94\u7528"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5E94\u7528\u5305\u542B4000\u4E2A\u4E2D\u6587\u5B57\u7B26\uFF0C\u5B57\u4F53\u5927\u5C0F\u4E3A20\uFF0C\u6BCF\u50CF\u7D20\u4E3A4bit\u3002 \u5E94\u7528\u548C\u6570\u636E\u5360\u7528\u4E86STM32G071\u4E0A128 Kb\u53EF\u7528\u5B58\u50A8\u7A7A\u95F4\u4E2D\u768461Kb\u3002 \u5B57\u4F53\u6570\u636E\u5206\u914D\u5982\u4E0B\uFF08\u4E0D\u5305\u62EC\u6B21\u8981\u5BF9\u8C61\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F4D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5927\u5C0F`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GlyphNodes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8SPI\u95EA\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `57.372\u5B57\u8282`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u50CF\u7D20\u6A21\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8SPI\u95EA\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3.116.296\u5B57\u8282`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Unicode\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8\u95EA\u5B58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8.000\u5B57\u8282`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker-script-modifications"
  }), `\u94FE\u63A5\u811A\u672C\u4FEE\u6539`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3A\u4E86\u6B63\u786E\u5730\u4F7F\u7528\u672A\u6620\u5C04\u5B57\u4F53\u5E03\u5C40\uFF0C\u60A8\u5FC5\u987B\u66F4\u65B0\u94FE\u63A5\u811A\u672C\uFF0C\u4EE5\u4FBF\u6B63\u786E\u5730\u653E\u7F6E\u8868\u683C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `define symbol __ICFEDIT_region_ROM_start__ = 0x08000000;
define symbol __ICFEDIT_region_ROM_end__   = 0x0801FFFF;
define symbol __ICFEDIT_region_RAM_start__ = 0x20000000;
define symbol __ICFEDIT_region_RAM_end__   = 0x20008FFF;
define symbol __ICFEDIT_region_SERIAL_FLASH_start__ = 0x90000000;
define symbol __ICFEDIT_region_SERIAL_FLASH_end__   = 0x91000000;

place in ROM_region   { readonly };
place in RAM_region   { readwrite,
                        block CSTACK, block HEAP };

place in SERIAL_FLASH_region {section ExtFlashSection, section FontFlashSection };
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE5\u94FE\u63A5\u811A\u672C\u4E2D\uFF0C\u6211\u4EEC\u5C06ExtFlashSection\uFF08\u56FE\u50CF\u548C\u5B57\u4F53\u50CF\u7D20\uFF09\u548CFontFlashSection\uFF08GlyphNodes\uFF09\u90FD\u653E\u5728\u5916\u90E8\u95EA\u5B58\u4E2D\u3002 \u4EFB\u4F55\u5176\u4ED6\u53EA\u8BFB\u6570\u636E\u90FD\u4F4D\u4E8E\u5185\u90E8\u95EA\u5B58\uFF08ROM_region\uFF09\u4E2D\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);