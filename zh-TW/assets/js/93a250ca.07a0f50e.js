"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3549],{

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

/***/ 30673:
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
  id: "using-serial-flash",
  title: "\u4F7F\u7528\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u5B58\u5132\u5716\u50CF\u548C\u5B57\u9AD4"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/using-serial-flash",
  "id": "development/scenarios/using-serial-flash",
  "title": "\u4F7F\u7528\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u5B58\u5132\u5716\u50CF\u548C\u5B57\u9AD4",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/using-serial-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/using-serial-flash",
  "permalink": "/4.20/zh-TW/docs/development/scenarios/using-serial-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-serial-flash",
    "title": "\u4F7F\u7528\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u5B58\u5132\u5716\u50CF\u548C\u5B57\u9AD4"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4F7F\u7528\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u5B58\u5132\u5F71\u50CF",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/using-non-memory-mapped-flash"
  },
  "next": {
    "title": "\u5C0D\u5B57\u9AD4\u8CC7\u6599\u4F7F\u7528\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/fonts-in-unmapped-flash"
  }
};
const assets = {};


const toc = [{
  value: "\u914D\u7F6E",
  id: "configuration",
  level: 2
}, {
  value: "\u5BE6\u73FE",
  id: "implementation",
  level: 2
}, {
  value: "\u5716\u50CF",
  id: "images",
  level: 2
}, {
  value: "\u5B57\u9AD4\u8CC7\u6599",
  id: "font-data",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C07\u8A0E\u8AD6\u5982\u4F55\u4F7F\u7528\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF08\u6216\u5176\u4ED6\u672A\u6620\u5C04\u8A18\u61B6\u9AD4\uFF09\u4F86\u5B58\u5132\u5716\u50CF\u548C\u5B57\u9AD4\u3002 \u9019\u88E1\u4ECB\u7D39\u7684\u6280\u8853\u5728STM32G0\u548C\u5176\u4ED6\u914D\u5099\u6975\u5C0FRAM\u7684\u8A2D\u5099\u4E0A\u7279\u5225\u6709\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `See the article `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "lowering-memory-usage-with-partial-framebuffer"
  }), `Lowering Memory Usage with Partial Framebuffer`), ` for a introduction to partial framebuffers which are often used together with a serial flash. See also the article `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-non-memory-mapped-flash"
  }), `Using Non-Memory Mapped Flash for storing images`), ` for an introduction to caching bitmaps from unmapped flash to RAM.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "configuration"
  }), `\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u8B93TouchGFX\u61C9\u7528\u4F7F\u7528\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF0C\u60A8\u5FC5\u9808\u66F4\u6539TouchGFX Generator\u7684\u914D\u7F6E\uFF0C\u555F\u7528\u201CAdditional Features\u201D\u4E2D\u7684\u201CExternal Data Reader\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.png",
    width: "520",
    noShadow: true,
    mdxType: "Figure"
  }, "\u5176\u5B83\u529F\u80FD\uFF1A\u6578\u64DA\u8B80\u53D6\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u555F\u7528\u6B64\u529F\u80FD\u5F8C\uFF0CTouchGFX Generator\u66F4\u6539\u914D\u7F6E\uFF0C\u4EE5\u4FBF\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), ` LCD\u985E\u3002 \u5B83\u9084\u751F\u6210`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::FlashDataReader`), `\u7684\u5B50\u985E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,8-9}",
    "{2-2,8-9}": true
  }), `static TouchGFXDataReader dataReader;
static LCD16bppSerialFlash display(dataReader);
static ApplicationFontProvider fontProvider;
...
void touchgfx_init()
{
    ...
    hal.setDataReader(&dataReader);
    fontProvider.setFlashReader(&dataReader);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u7A0B\u5F0F\u78BC\u5275\u5EFA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u985E\u7684\u5BE6\u4F8B\uFF0C\u4E26\u5C07\u8A72\u5BE6\u4F8B\u50B3\u905E\u7D66\u986F\u793A\u5668\u7269\u4EF6\u3001HAL\u7269\u4EF6\u548CApplicationFontProvider\u7269\u4EF6\u3002 \u9019\u4E09\u500B\u7269\u4EF6\u5C07\u4F7F\u7528dataReader\u7269\u4EF6\u8A2A\u554F\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7684\u8CC7\u6599\u3002 \u9019\u4E9B\u8CC7\u6599\u53EF\u4EE5\u662F\u5716\u50CF\u548C\u5B57\u9AD4\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7CFB\u7D71\u7A0B\u5F0F\u5E2B\u5FC5\u9808\u5B8C\u6210`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u985E\u7684\u5BE6\u73FE\uFF0C\u624D\u80FD\u771F\u6B63\u5F9E\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u8B80\u53D6\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "implementation"
  }), `\u5BE6\u73FE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u985E\u5BE6\u73FE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_flash_data_reader/#public-functions"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "a"
  }, `touchgfx::FlashDataReader`)), `\u4ECB\u9762\u3002 \u8A72\u4ECB\u9762\u6709\u4E0B\u52174\u7A2E\u65B9\u6CD5\uFF0C\u9700\u8981\u5728\u7279\u5B9A\u786C\u9AD4\u4E0A\u5BE6\u73FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "include/touchgfx/hal/FlashDataReader.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    bool addressIsAddressable(const void* address)
    void copyData(const void* src, void* dst, uint32_t bytes)
    void startFlashLineRead(const void* src, uint32_t bytes)
    const uint8_t* waitFlashReadComplete()
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), `\u985E\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `addressIsAddressable`), `\u6CD5\u4F86\u6C7A\u5B9A\u67D0\u4E9B\u8CC7\u6599\u662F\u5426\u53EF\u4EE5\u76F4\u63A5\u8B80\u53D6\uFF08\u5373\u4F4D\u65BC\u5167\u90E8RAM\u6216\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\uFF09\u6216\u662F\u5426\u61C9\u901A\u904EdataReader\u7269\u4EF6\u8B80\u53D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `copyData`), `*\u6CD5\u7528\u65BC\u5F9E\u5FEB\u9583\u8A18\u61B6\u9AD4\u540C\u6B65\u8907\u88FD\u8CC7\u6599\u5230RAM\u3002 \u7576\u4E0D\u5C0D\u8CC7\u6599\u9032\u884C\u9032\u4E00\u6B65\u8655\u7406\u6642\uFF0C\u5E38\u4F7F\u7528\u6B64\u51FD\u6578\u3002 \u5982 \u5C07\u7ACB\u9AD4\u5F71\u50CF\u8907\u88FD\u5230\u5F71\u50CF\u7DE9\u885D\u6642\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u9700\u8981\u5F9E\u5FEB\u9583\u8A18\u61B6\u9AD4\u7372\u53D6\u591A\u884C\u8CC7\u6599\u6642\uFF0C\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startFlashLineRead`), `\u6CD5\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startFlashLineRead`), `\u6CD5\u958B\u59CB\u8CC7\u6599\u8B80\u53D6\u3002 \u6B64\u65B9\u6CD5\u53EF\u4EE5\u958B\u59CB\u975E\u540C\u6B65\u8B80\u53D6\uFF0C\u4E26\u4E14\u61C9\u5728\u958B\u59CB\u8B80\u53D6\u5F8C\u7ACB\u5373\u8FD4\u56DE\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `waitFlashReadComplete`), `\u6CD5\u61C9\u7B49\u5F85\u8B80\u53D6\u5B8C\u6210\uFF0C\u4E26\u8FD4\u56DE\u6307\u5411\u4FDD\u5B58\u8CC7\u6599\u7684\u7DE9\u885D\u5340\u7684\u6307\u6A19\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), `\u53EF\u4EE5\u5728\u8655\u7406\u4E4B\u524D\u8B80\u53D6\u7684\u8CC7\u6599\u6642\u767C\u8D77\u4E00\u6B21\u5FEB\u9583\u8A18\u61B6\u9AD4\u8B80\u53D6\uFF08\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF09\u3002 \u9019\u610F\u5473\u8457dataReader\u4E2D\u9700\u8981\u81F3\u5C11\u5169\u500B\u7DE9\u885D\u5340\u4F86\u5BE6\u73FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\u751F\u6210\u5206\u5225\u5C6C\u65BC\u5169\u500B\u985E\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FlashDataReader`), `\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u662F\u4E8C\u8005\u7684\u5B50\u985E\uFF0C\u5305\u542B\u9ED8\u8A8D\u5BE6\u73FE\u3002 \u5982\u679C\u8A72\u57F7\u884C\u4E0D\u5408\u9069\uFF0C\u61C9\u7528\u7A0B\u5F0F\u5E2B\u53EF\u4EE5\u66F4\u6539`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\u985E\u4E2D\u865B\u64EC\u51FD\u6578\u7684\u52D5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u5BE6\u73FE\u547C\u53EBC\u51FD\u6578\u4F86\u5B8C\u6210\u5DE5\u4F5C\u3002 \u9019\u4E9B\u61C9\u7528\u7531\u7CFB\u7D71\u7A0B\u5F0F\u5E2B\u5BE6\u73FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C" __weak void DataReader_WaitForReceiveDone();
extern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);
extern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);

void TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)
{
    /* Start transfer using DMA */
    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BE6\u73FE\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MB1642BDataReader.c`), `\u6587\u4EF6\u4E2D\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Core/Src/MB1642BDataReader.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)
{
    readDataDMA(address24, buffer, length);
}

void readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)
{
    // Pull Flash CS pin low
    isReceivingData = 1;
    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;

    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;

    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u5BE6\u73FE\u7279\u5B9A\u65BC\u5FEB\u9583\u8A18\u61B6\u9AD4\u4F7F\u7528\u7684\u5354\u8B70\u4EE5\u53CASPI\u548CCS\u4F7F\u7528\u7684GPIO\u3002 \u5FC5\u9808\u5BE6\u73FE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\u985E\u7684\u5168\u90E8\u4E09\u500BC\u51FD\u6578\u624D\u80FD\u767C\u63EE\u4F5C\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "images"
  }), `\u5716\u50CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u7C21\u4ECB\u4E2D\u6240\u8FF0\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), `\u985E\u53EF\u901A\u904EdataReader\u7269\u4EF6\u8B80\u53D6\u5716\u50CF\u50CF\u7D20\u3002 \u70BA\u6B64\uFF0C\u5FC5\u9808\u66F4\u6539\u9023\u7D50\u5668\u8173\u672C\uFF0C\u4EE5\u4FBF\u5C07\u5716\u50CF\u7684\u5730\u5740\u653E\u5728\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7BC4\u570D\u4E4B\u5916\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728STM32G071\u4E0A\uFF0C\u6211\u5011\u9078\u64C7\u4E86\u4F4D\u57400x90000000\u4F5C\u70BA\u4E32\u5217\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u8D77\u59CB\u4F4D\u5740\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "gcc/STM32G071RBTX_FLASH.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K
  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K
  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M
}

/* Sections */
SECTIONS
{
  ...

  ExtFlashSection :
  {
    *(ExtFlashSection ExtFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH

  FontFlashSection :
  {
    *(FontFlashSection FontFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u6703\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ExtFlashSection`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FontFlashSection`), `\u653E\u51650x90000000\u5730\u5740\u7BC4\u570D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5269\u9918\u7684\u4EFB\u52D9\u662F\u7528Flasher\u5DE5\u5177\u5C07\u8CC7\u6599\u5BEB\u5165\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95DC\u65BCSTM32CubeProgrammer\u7684\u5BEB\u5165\u5FEB\u9583\u8A18\u61B6\u9AD4\u8F09\u5165\u5668\u7684\u7C21\u8981\u8AAA\u660E\uFF0C\u53EF\u4EE5\u5728\u4EE5\u4E0B\u6587\u6A94\u7684\u7B2C2.3.3\u7BC0\u4E2D\u627E\u5230\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25"
  }), `UM2237 STMCubeProgrammer\u7528\u6236\u624B\u518A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-data"
  }), `\u5B57\u9AD4\u8CC7\u6599`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0A\u9023\u7D50\u5668\u8173\u672C\u5C07\u5B57\u9AD4\u50CF\u7D20\u8CC7\u6599\u548C\u5B57\u9AD4\u5B57\u5143\u7684\u4E2D\u7E7C\u8CC7\u6599\uFF08\u5BEC\u548C\u9AD8\uFF09\u653E\u5165\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF08\u5169\u985E\u8CC7\u6599\u90FD\u5728FontFlashSection\u4E2D\uFF09\u3002 \u5728\u87A2\u5E55\u4E0A\u7E6A\u88FD\u5B57\u5143\u6642\uFF0C\u4E5F\u901A\u904EdataReader\u7269\u4EF6\u8B80\u53D6\u6B64\u8CC7\u6599`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u672A\u4F7F\u7528\u201C\u672A\u6620\u5C04\u5B58\u5132\u683C\u5F0F\u201D\uFF0C\u5247\u5FC5\u9808\u66F4\u6539\u9023\u7D50\u5668\u8173\u672C\u548C\u6A94\u6848`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `include/touchgfx/hal/Config.hpp`), `\uFF0C\u4EE5\u4FBF\u5C07\u5B57\u9AD4\u5B57\u5143\u4E2D\u7E7C\u8CC7\u6599\u79FB\u52D5\u5230\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "fonts-in-unmapped-flash"
  }), `\u672A\u6620\u5C04\u5B58\u5132\u4E2D\u7684\u5B57\u9AD4`), `\u4E00\u6587\u7372\u53D6\u95DC\u65BC\u5B57\u9AD4\u683C\u5F0F\u7684\u66F4\u591A\u8CC7\u8A0A\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);