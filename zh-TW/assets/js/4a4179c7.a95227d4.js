"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8637],{

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

/***/ 26685:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
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
  id: "widgets-and-containers",
  title: "\u5C0F\u90E8\u4EF6\u548C\u5BB9\u5668"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/widgets-and-containers",
  "id": "development/ui-development/working-with-touchgfx/widgets-and-containers",
  "title": "\u5C0F\u90E8\u4EF6\u548C\u5BB9\u5668",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/widgets-and-containers",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "widgets-and-containers",
    "title": "\u5C0F\u90E8\u4EF6\u548C\u5BB9\u5668"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5C07IDE\u8207TouchGFX\u7D44\u5408\u4F7F\u7528",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"
  },
  "next": {
    "title": "\u6A21\u64EC\u5668",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/working-with-touchgfx/simulator"
  }
};
const assets = {};



const toc = [{
  value: "\u5C0F\u90E8\u4EF6",
  id: "widgets",
  level: 2
}, {
  value: "\u5BB9\u5668",
  id: "containers",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C07\u4ECB\u7D39\u69CB\u5EFATouchGFX\u61C9\u7528\u7A0B\u5F0F\u6642\u7684\u5169\u500B\u6700\u57FA\u672C\u6982\u5FF5\uFF1A\u5C0F\u90E8\u4EF6\u548C\u5BB9\u5668\u3002 \u9019\u662F\u60A8\u5C07\u5728\u6574\u500BUI\u958B\u767C\u904E\u7A0B\u4E2D\u4F7F\u7528\u7684\u5169\u500B\u69CB\u5EFA\u55AE\u5143\u3002 \u5169\u8005\u90FD\u5305\u542BTouchGFX\u63D0\u4F9B\u7684\u9810\u88FD\u5143\u4EF6\uFF0C\u540C\u6642\u4E5F\u8DB3\u5920\u958B\u653E\uFF0C\u53EF\u652F\u63F4\u5275\u5EFA\u81EA\u8A02\u5BE6\u73FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "widgets"
  }), `\u5C0F\u90E8\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u548CTouchGFX Designer\u5DE5\u5177\u63D0\u4F9B\u4E86\u8A31\u591A\u6A19\u6E96\u5C0F\u90E8\u4EF6\uFF0C\u7528\u6236\u53EF\u4EE5\u81EA\u7531\u5730\u4F7F\u7528\u9019\u4E9B\u5C0F\u90E8\u4EF6\u4F86\u69CB\u5EFA\u81EA\u5DF1\u7684UI\uFF0C\u4F8B\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/text-area"
  }), `Text Area`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `Button`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/images/texture-mapper"
  }), `Texture Mapper`), `. \u4F46\u5728\u57FA\u672C\u5C64\u9762\u4E0A\uFF0CTouchGFX\u4E2D\u7684\u5C0F\u90E8\u4EF6\u53EA\u662F\u4E00\u500B\u62BD\u8C61\u7684\u5B9A\u7FA9\uFF0C\u53EF\u4EE5\u5728\u87A2\u5E55\u4E0A\u7E6A\u88FD\uFF0C\u4E5F\u53EF\u4EE5\u8207\u4E4B\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/button/widget-appearance.png",
    mdxType: "Figure"
  }, "\u4E00\u500B\u4EE5\u5716\u50CF\u5C0F\u90E8\u4EF6\u4F5C\u70BA\u80CC\u666F\u7684\u6309\u9215\u5C0F\u90E8\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u4E86TouchGFX Designer\uFF0C\u7528\u6236\u53EF\u4EE5\u5C07\u4EFB\u4F55\u60F3\u8981\u7684\u5C0F\u90E8\u4EF6\u6DFB\u52A0\u5230\u87A2\u5E55\u4E0A\uFF0C\u4E26\u4F7F\u7528\u6240\u63D0\u4F9B\u7684\u7279\u5B9A\u65BC\u6BCF\u500B\u5C0F\u90E8\u4EF6\u7684\u5C6C\u6027\u9032\u884C\u5B9A\u5236\u3002 \u9084\u53EF\u4EE5\u901A\u904E\u4F7F\u7528TouchGFX\u63D0\u4F9B\u7684\u4E0D\u540C\u985E\u578B\u7684\u5BB9\u5668\u5C0D\u5C0F\u90E8\u4EF6\u9032\u884C\u5206\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u4E5F\u53EF\u4EE5\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u4E2D\u6DFB\u52A0\u5C0F\u90E8\u4EF6\uFF0C\u65B9\u6CD5\u662F\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `add(widget_instance_name);`), `\u51FD\u6578\uFF0C\u6216\u5C07\u5C0F\u90E8\u4EF6\u6DFB\u52A0\u5230\u5BB9\u5668\u4E2D\uFF0C\u65B9\u6CD5\u662F\u4F7F\u7528\u5BB9\u5668\u6DFB\u52A0\u51FD\u6578\uFF0C\u4F8B\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myContainer.add(widget_instance_name);`), `\u3002 \u6DFB\u52A0\u5C0F\u90E8\u4EF6\u7684\u9806\u5E8F\u5C07\u6C7A\u5B9AZ\u8EF8\u4E0A\u7684\u9806\u5E8F\u3002 \u6700\u5F8C\u6DFB\u52A0\u7684\u5C0F\u90E8\u4EF6\u5C07\u51FA\u73FE\u5728\u87A2\u5E55\u7684\u6700\u524D\u9762\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0F\u90E8\u4EF6\u7684\u5EA7\u6A19\u7E3D\u662F\u76F8\u5C0D\u4E8E\u5176\u7236\u7BC0\u9EDE\uFF0C\u5373\u6839\u5BB9\u5668\uFF08\u87A2\u5E55\uFF09\u6216\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u60A8\u53EF\u4EE5\u5275\u5EFA\u81EA\u5DF1\u7684\u5C0F\u90E8\u4EF6\uFF0C\u4EE5\u6EFF\u8DB3\u81EA\u5DF1\u53EF\u80FD\u6709\u7684\u4EFB\u4F55\u7279\u5B9A\u9700\u6C42\u3002 \u5982\u9700\u8A73\u7D30\u8CC7\u8A0A\uFF0C\u8ACB\u53C3\u95B1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/custom-widgets",
    mdxType: "Link"
  }, "\u81EA\u8A02\u5C0F\u90E8\u4EF6"), "\u4E00\u7BC0\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "containers"
  }), `\u5BB9\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BB9\u5668\u662FTouchGFX\u4E2D\u7684\u4E00\u7A2E\u5143\u4EF6\uFF0C\u53EF\u4EE5\u5305\u542B\u5B50\u7BC0\u9EDE\uFF08\u6BD4\u5982\u5C0F\u90E8\u4EF6\u548C\u5176\u4ED6\u5BB9\u5668\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX Designer\u4E2D\uFF0C\u53EF\u4EE5\u5728Widgets\uFF08\u5C0F\u90E8\u4EF6\uFF09\u9078\u9805\u5361\u4E2D\u7684containers\uFF08\u5BB9\u5668\uFF09\u985E\u5225\u4E0B\u627E\u5230\u5BB9\u5668\uFF0C\u5411\u5BB9\u5668\u4E2D\u6DFB\u52A0\u5C0F\u90E8\u4EF6\u7684\u65B9\u6CD5\u5C07\u5C0F\u90E8\u4EF6\u62D6\u653E\u5230\u6A39\u72C0\u6AA2\u8996\u4E2D\u7684\u5BB9\u5668\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B50\u5BB9\u5668\u5728Z\u8EF8\u4E0A\u7684\u9806\u5E8F\u7531\u5411\u5BB9\u5668\u4E2D\u6DFB\u52A0\u5B50\u5BB9\u5668\u6642\u7684\u9806\u5E8F\u6C7A\u5B9A - \u6700\u5F8C\u6DFB\u52A0\u7684\u5B50\u5BB9\u5668\u5C07\u986F\u793A\u5728\u87A2\u5E55\u7684\u6700\u524D\u9762\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BCTouchGFX\u4E2D\u5C0F\u90E8\u4EF6\u7684\u4F4D\u7F6E\u662F\u76F8\u5C0D\u4E8E\u5176\u7236\u5BB9\u5668\u800C\u78BA\u5B9A\u7684\uFF0C\u56E0\u6B64\u6539\u8B8A\u7236\u5BB9\u5668\u7684\u4F4D\u7F6E\u4E5F\u6703\u76F8\u61C9\u5730\u79FB\u52D5\u5B50\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BB9\u5668\u5145\u7576\u8996\u7A97\uFF0C\u9019\u610F\u5473\u8457\u53EA\u6709\u8207\u5BB9\u5668\u5E7E\u4F55\u5716\u5F62\u76F8\u4EA4\u7684\u5B50\u5BB9\u5668\u90E8\u5206\u624D\u53EF\u898B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4E0B\u9762\u7684\u52D5\u756B\u4E2D\uFF0C\u60A8\u5C07\u770B\u5230\u5BB9\u5668\u7684\u8996\u7A97\u90E8\u5206\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002 \u9996\u5148\uFF0C\u6211\u5011\u770B\u5230\u9019\u500B\u6309\u9215\u7684\u7236\u5BB9\u5668\u7684\u8F2A\u5ED3\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.gif",
    mdxType: "Figure"
  }, "\u5145\u7576\u8996\u7A97\u7684\u5BB9\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u60A8\u53EF\u4EE5\u5275\u5EFA\u81EA\u5DF1\u7684\u5BB9\u5668\uFF0C\u4EE5\u6EFF\u8DB3\u81EA\u5DF1\u53EF\u80FD\u6709\u7684\u4EFB\u4F55\u7279\u5B9A\u9700\u6C42\u3002 \u5982\u9700\u8A73\u7D30\u8CC7\u8A0A\uFF0C\u8ACB\u53C3\u95B1", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/custom-containers",
    mdxType: "Link"
  }, "\u81EA\u8A02\u5BB9\u5668"), "\u4E00\u7BC0\u3002"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);