"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5086],{

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

/***/ 82985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Shortcut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: "shortcut"
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Shortcut);


/***/ }),

/***/ 73082:
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
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70814);
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82985);
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
  id: "updating-to-a-new-touchgfx-version",
  title: "\u66F4\u65B0\u81F3\u65B0\u7684TouchGFX\u7248\u672C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/updating-to-a-new-touchgfx-version",
  "id": "miscellaneous/updating-to-a-new-touchgfx-version",
  "title": "\u66F4\u65B0\u81F3\u65B0\u7684TouchGFX\u7248\u672C",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/miscellaneous/updating-to-a-new-touchgfx-version.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/updating-to-a-new-touchgfx-version",
  "permalink": "/4.20/zh-CN/docs/miscellaneous/updating-to-a-new-touchgfx-version",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "updating-to-a-new-touchgfx-version",
    "title": "\u66F4\u65B0\u81F3\u65B0\u7684TouchGFX\u7248\u672C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Miscellaneous",
    "permalink": "/4.20/zh-CN/docs/category/miscellaneous-1"
  },
  "next": {
    "title": "\u83B7\u53D6\u5E2E\u52A9",
    "permalink": "/4.20/zh-CN/docs/miscellaneous/getting-help"
  }
};
const assets = {};



const toc = [{
  value: "\u66F4\u65B0TouchGFX Generator",
  id: "update-touchgfx-generator",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u521B\u5EFATouchGFX Designer\u5E94\u7528\u65F6\uFF0C\u521B\u5EFA\u7684.touchgfx\u5DE5\u7A0B\u6587\u4EF6\u7248\u672C\u4E0E\u7528\u6765\u521B\u5EFA\u5E94\u7528\u7684TouchGFX\u7248\u672C\u76F8\u540C\u3002 \u4F46\u662F\uFF0C\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u60A8\u53EA\u80FD\u4F7F\u7528TouchGFX\u7684\u7279\u5B9A\u7248\u672C\u7EE7\u7EED\u5F00\u53D1\u5E94\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5728\u8BBE\u8BA1\u4E0A\u5411\u540E\u517C\u5BB9\uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4EC5\u9700\u4E00\u4E2A\u6781\u7B80\u5355\u7684\u6D41\u7A0B\u4F7F\u65E7\u7248\u672C\u5E94\u7528\u80FD\u591F\u5DE5\u4F5C\u5728TouchGFX\u65B0\u7248\u672C\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EA\u9700\u6253\u5F00\u65B0\u5B89\u88C5\u7684TouchGFX Designer\u7248\u672C\uFF0C\u5E76\u5C1D\u8BD5\u901A\u8FC7\u6700\u8FD1\u4F7F\u7528\u7684\u5E94\u7528\u6216\u201C\u6253\u5F00\u201D\u5BF9\u8BDD\u6846\u6253\u5F00\u65E7\u7248\u672C\u5E94\u7528\u3002 \u60A8\u5C06\u770B\u5230\u4E0B\u9762\u7684\u5F39\u7A97\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup-4-17.png",
    mdxType: "Figure"
  }, "\u7248\u672C\u66F4\u65B0\u5F39\u7A97"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u5F39\u7A97\u5185\u5BB9\u4F1A\u5148\u5EFA\u8BAE\u60A8\u5728\u8FD0\u884C\u66F4\u65B0\u7A0B\u5E8F\u524D\u5907\u4EFD\u60A8\u7684\u5E94\u7528\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u4E0B\u201C\u662F\u201D\u6309\u94AE\uFF0C\u66F4\u65B0\u7A0B\u5E8F\u542F\u52A8\u3002 \u5B8C\u6210\u66F4\u65B0\u540E\uFF0C\u5728TouchGFX Designer\u4E2D\u7167\u5E38\u6253\u5F00\u60A8\u7684\u5E94\u7528\uFF0C\u73B0\u5728\u60A8\u53EF\u4EE5\u4F7F\u7528\u65B0\u7248\u672C\u4E86\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0C\u60A8\u5FC5\u987B\u5BF9\u60A8\u7684\u5E94\u7528\u8FDB\u884C\u4E00\u4E9B\u624B\u52A8\u4FEE\u6539\uFF0C\u4EE5\u4F7F\u60A8\u7684\u5E94\u7528\u5B8C\u5168\u66F4\u65B0\u81F3\u65B0\u7684TouchGFX\u7248\u672C\u3002 \u5982\u679C\u60A8\u5BF9\u5C06\u5E94\u7528\u66F4\u65B0\u81F3\u65B0\u7248\u672C\u8FD8\u6709\u7591\u95EE\uFF0C\u8BF7\u53C2\u9605`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "known-issues"
  }), `\u201C\u5DF2\u77E5\u95EE\u9898\u201D`), `\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "update-touchgfx-generator"
  }), `\u66F4\u65B0TouchGFX Generator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6309\u7167`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../introduction/installation#installing-touchgfx-generator-in-stm32cubemx"
  }), `\u201C\u5728STM32CubeMX\u4E2D\u5B89\u88C5TouchGFX Generator\u201D\u6307\u5F15\uFF0C\u5728STM32CubeMX `), `6.2.1\u6216\u66F4\u9AD8\u7248\u672C\u4E2D\u5B89\u88C5X-Cube-TouchGFX-4.17.0\u540E\uFF0C\u6253\u5F00\u5DE5\u7A0B\u5E76\u5BFC\u822A\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u201C\u8F6F\u4EF6\u5305\u201D`), `->`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\u201C\u9009\u62E9\u7EC4\u4EF6\u201D`), `\uFF08\u6216\u6309\u4E0B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Alt + U\u5FEB\u6377\u952E`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.png",
    mdxType: "Figure"
  }, "\u8F6F\u4EF6\u5305\u7EC4\u4EF6\u9009\u62E9\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE6\u60C5\u4E0E\u8B66\u544A\u7A97\u53E3\u4E2D\uFF0C\u9009\u62E9\u8981\u8FC1\u79FB\u5230\u7684\u7248\u672C\u5E76\u6309\u4E0B\u201C\u5C1D\u8BD5\u201D\u6309\u94AE\u3002 STM32CubeMX\u5C06\u6267\u884C\u53EF\u8FFD\u8E2A\u7684\u8FC1\u79FB\u5E76\u663E\u793A\u7ED3\u679C\uFF0C\u4E00\u4E9Bref\u53C2\u6570\u4E0D\u80FD\u8FC1\u79FB\u5230\u65B0\u7248\u672C\uFF0C\u56E0\u6B64\u4F1A\u663E\u793A\u4E3Anull\u503C\u3002 \u9009\u62E9\u201C\u63A5\u53D7\u201D\u4FDD\u5B58\u8FC1\u79FB\uFF0C\u7136\u540E\u6309\u4E0B\u201C\u786E\u5B9A\u201D\u5173\u95ED\u8F6F\u4EF6\u5305\u7EC4\u4EF6\u9009\u62E9\u7A97\u53E3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.png",
    mdxType: "Figure"
  }, "\u8F6F\u4EF6\u5305\u7EC4\u4EF6\u9009\u62E9\u5668: \u8FC1\u79FBTouchGFX Generator\u7684\u9009\u9879"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0CTouchGFX Generator\u5DF2\u8FC1\u79FB\u81F3\u65B0\u7248\u672C\uFF0C\u4FEE\u6539\u5DF2\u4FDD\u5B58\u5728.ioc\u6587\u4EF6\u4E2D\u3002 \u5728\u7528STM32CubeMX\u751F\u6210\u4EE3\u7801\u524D\uFF0C\u8BF7\u786E\u8BA4TouchGFX Generator\u7684\u914D\u7F6E\u3002 \u5728\u7528STM32CubeMX\u751F\u6210\u4EE3\u7801\u540E\uFF0C\u6253\u5F00TouchGFX Designer\u5E76\u9A8C\u8BC1UI\uFF0C\u7136\u540E\u518D\u4ECETouchGFX Designer\u751F\u6210\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u5C06TouchGFX\u66F4\u65B0\u81F3\u65B0\u7248\u672C\u7684\u8FC1\u79FB\u8FC7\u7A0B\u5305\u542B\u4E24\u4E2A\u6B65\u9AA4\u3002 \u9700\u8981\u4ECESTM32CubeMX\u548CTouchGFX Designer\u751F\u6210\u4EE3\u7801\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u5728STM32CubeMX\u4E2D\u6309\u4E0B\u201C\u751F\u6210\u4EE3\u7801\u201D\u6309\u94AE\u540E\uFF0C\u4F1A\u5148\u5C06TouchGFX Generator\u63D0\u4F9B\u7684C++\u4EE3\u7801\u5B58\u76D8\u4FDD\u5B58\u3002")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);