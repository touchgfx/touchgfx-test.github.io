"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[776],{

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

/***/ 82558:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82985);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39130);
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
  id: "config-view",
  title: "\u914D\u7F6E\u89C6\u56FE"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/config-view",
  "id": "development/ui-development/designer-user-guide/config-view",
  "title": "\u914D\u7F6E\u89C6\u56FE",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/config-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/config-view",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/config-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "config-view",
    "title": "\u914D\u7F6E\u89C6\u56FE"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6587\u672C\u89C6\u56FE",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/texts-view"
  },
  "next": {
    "title": "\u4EA4\u4E92",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/interactions-view"
  }
};
const assets = {};




const toc = [{
  value: "\u5E38\u89C4\u8BBE\u7F6E",
  id: "general",
  level: 2
}, {
  value: "\u5C4F\u663E\u8BBE\u7F6E",
  id: "display",
  level: 2
}, {
  value: "\u9ED8\u8BA4\u56FE\u50CF\u8BBE\u7F6E",
  id: "default-image-configuration",
  level: 2
}, {
  value: "\u6587\u672C\u8BBE\u7F6E",
  id: "text-configuration",
  level: 2
}, {
  value: "\u4EFF\u771F\u5668\u8BBE\u7F6E",
  id: "simulator",
  level: 2
}, {
  value: "\u521B\u5EFA\u8BBE\u7F6E",
  id: "build",
  level: 2
}, {
  value: "\u6846\u67B6\u7279\u6027",
  id: "framework-features",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201C\u914D\u7F6E\u89C6\u56FE\u201D\u4E2D\uFF0C\u5305\u542B\u5DE5\u7A0B\u7684\u5404\u79CD\u8BBE\u7F6E\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#general"
  }), `\u5E38\u89C4`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#display"
  }), `\u5C4F\u663E`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#default-image-configuration"
  }), `\u9ED8\u8BA4\u56FE\u50CF\u8BBE\u7F6E`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#text-configuration"
  }), `\u6587\u672C\u8BBE\u7F6E`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#simulator"
  }), `\u4EFF\u771F\u5668`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#simulator"
  }), `\u521B\u5EFA`), ` \u4EE5\u53CA `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#framework-features"
  }), `\u6846\u67B6\u7279\u6027`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u89C6\u56FE\u201D\u4E2D\u7684\u5E38\u89C4\u8BBE\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "general"
  }), `\u5E38\u89C4\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u89C6\u56FE\u201D\u4E2D\u7684\u5E38\u89C4\u8BBE\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E94\u7528\u540D\u79F0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5E94\u7528\u540D\u79F0\u662F\u4E00\u4E2A\u53EA\u8BFB\u5B57\u6BB5\uFF0C\u663E\u793A\u521B\u5EFA\u5E94\u7528\u65F6\u4E3A\u5E94\u7528\u9009\u5B9A\u7684\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TouchGFX\u677F\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u5B57\u6BB5\u663E\u793A\u521B\u5EFA\u5E94\u7528\u65F6\u4F7F\u7528\u7684TouchGFX\u677F\u8BBE\u7F6E\uFF0C\u5982\u679C\u6B64\u4FE1\u606F\u4E0D\u53EF\u7528\uFF0C\u5C06\u663E\u793A\u201CN/A\u201D\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5982\u679C\u6B64\u4FE1\u606F\u53EF\u7528\uFF0C\u5219\u663E\u793ATouchGFX\u677F\u8BBE\u7F6E\u7684\u540D\u79F0\u548C\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8BED\u8A00\u9009\u62E9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u5305\u542B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "texts-view"
  }), `\u6587\u672C`), `\u89C6\u56FE\u4E2D\u914D\u7F6E\u7684\u8BED\u8A00\uFF0C\u7528\u4E8E\u9009\u62E9\u5DE5\u7A0B\u542F\u52A8\u65F6\u4F7F\u7528\u7684\u8BED\u8A00\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u76AE\u80A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u542B\u6709\u4E24\u79CD\u5185\u7F6E\u7684\u98CE\u683C\u8BBE\u7F6E\uFF0C\u4F9B\u652F\u6301\u98CE\u683C\u8BBE\u7F6E\u7684\u63A7\u4EF6\u4F7F\u7528\uFF0C\u53EF\u4EE5\u9009\u62E9\u201C\u84DD\u8272\u201D\u6216\u201C\u9ED1\u8272\u201D\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5982\u679C\u63A7\u4EF6\u914D\u7F6E\u4E3A\u201C\u84DD\u8272\u201D\u76AE\u80A4\u7684\u98CE\u683C\uFF0C\u5F53\u66F4\u6539\u4E3A\u201C\u9ED1\u8272\u201D\u76AE\u80A4\u65F6\uFF0C\u8BE5\u63A7\u4EF6\u5C06\u81EA\u52A8\u5207\u6362\u81F3\u201C\u9ED1\u8272\u201D\u76AE\u80A4\u7684\u76F8\u5E94\u98CE\u683C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u542F\u52A8\u5C4F\u5E55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u542B\u6709\u6240\u6709\u5DF2\u6DFB\u52A0\u5230\u9879\u76EE\u7684\u5C4F\u5E55\uFF0C\u7528\u4E8E\u914D\u7F6E\u5728\u5DE5\u7A0B\u542F\u52A8\u65F6\u663E\u793A\u7684\u5C4F\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\u5C4F\u663E\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u90E8\u5206\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5C4F\u663E\u53C2\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u89C6\u56FE\u201D\u4E2D\u7684\u5C4F\u663E\u8BBE\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5C3A\u5BF8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u663E\u793A\u7684\u5927\u5C0F\u53EF\u4EE5\u901A\u8FC7 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `W(\u5BBD\u5EA6)`), ` \u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `H(\u9AD8\u5EA6)`), ` \u5C5E\u6027\u8FDB\u884C\u8BBE\u7F6E\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u5DF2\u7ECF\u901A\u8FC7TouchGFX\u677F\u8BBE\u7F6E\u914D\u7F6E\u4E86\u5C3A\u5BF8\uFF0C\u6B64\u5904\u7684\u5C3A\u5BF8\u914D\u7F6E\u529F\u80FD\u5C06\u4F1A\u88AB\u7981\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5C4F\u663E\u65B9\u5411`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5C4F\u663E\u65B9\u5411\u53EF\u4EE5\u5728\u6A2A\u5C4F\u548C\u7AD6\u5C4F\u4E4B\u95F4\u5207\u6362\u3002 \u8BE5\u5C5E\u6027\u4F1A\u5F71\u54CD\u5230\u5DE5\u7A0B\u4E2D\u7684\u6240\u7528\u56FE\u50CF\u8F6C\u6362\u4E3Acpp\u6587\u4EF6\u7684\u65B9\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8272\u6DF1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u63D0\u4F9B\u53EF\u4F9B\u5DE5\u7A0B\u4F7F\u7528\u7684\u8272\u6DF1\u9009\u9879\u3002 \u8FD9\u4E9B\u8BBE\u7F6E\u53D6\u51B3\u4E8E\u5DE5\u7A0B\u521B\u5EFA\u65F6\u4F7F\u7528\u7684TouchGFX\u677F\u7EA7\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "default-image-configuration"
  }), `\u9ED8\u8BA4\u56FE\u50CF\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE5\u90E8\u5206\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5DE5\u7A0B\u4F7F\u7528\u7684\u56FE\u50CF\u9ED8\u8BA4\u8BBE\u7F6E\u3002 \u8FD9\u4E9B\u8BBE\u7F6E\u5C06\u5BF9\u5DE5\u7A0B\u4E2D\u7684\u6240\u6709\u56FE\u50CF\u751F\u6548\uFF0C\u9664\u975E\u5B83\u4EEC\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "images-view"
  }), `\u56FE\u50CF`), `\u89C6\u56FE\u4E2D\u88AB\u8986\u76D6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u89C6\u56FE\u201D\u4E2D\u7684\u201C\u9ED8\u8BA4\u56FE\u50CF\u8BBE\u7F6E\u201D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u4E0D\u900F\u660E\u56FE\u50CF\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u7528\u4E8E\u8BBE\u7F6E\u53EA\u6709\u4E0D\u900F\u660E\u50CF\u7D20\u6570\u636E\u7684\u56FE\u50CF\u5E94\u4EE5\u54EA\u79CD\u683C\u5F0F\u751F\u6210\u3002 \u6B64\u4E0B\u62C9\u5217\u8868\u4E2D\u7684\u53EF\u7528\u56FE\u50CF\u683C\u5F0F\u53D6\u51B3\u4E8E\u5DE5\u7A0B\u9009\u5B9A\u7684\u8272\u6DF1\u53C2\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u900F\u660E\u56FE\u50CF\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u7528\u4E8E\u8BBE\u7F6E\u62E5\u6709\u900F\u660E\u50CF\u7D20\u6570\u636E\u7684\u56FE\u50CF\u5E94\u4EE5\u54EA\u79CD\u683C\u5F0F\u751F\u6210\u3002 \u6B64\u4E0B\u62C9\u5217\u8868\u4E2D\u7684\u53EF\u7528\u56FE\u50CF\u683C\u5F0F\u53D6\u51B3\u4E8E\u5DE5\u7A0B\u9009\u5B9A\u7684\u8272\u6DF1\u53C2\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5B58\u50A8\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u8BBE\u7F6E\u56FE\u50CF\u6570\u636E\u5728\u76EE\u6807\u786C\u4EF6\u4E0A\u7684\u5B58\u50A8\u4F4D\u7F6E\u3002 \u6B64\u4E0B\u62C9\u5217\u8868\u4E2D\u7684\u53EF\u4F9B\u9009\u62E9\u7684\u5B58\u50A8\u533A\u53D6\u51B3\u4E8E\u521B\u5EFA\u5DE5\u7A0B\u65F6\u4F7F\u7528\u7684TouchGFX\u677F\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u989D\u5916\u5B58\u50A8\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5F53\u4F7F\u7528L8\u56FE\u50CF\u683C\u5F0F\u65F6\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u8BE5\u4E0B\u62C9\u5217\u8868\u7684\u9009\u9879\u5C06\u989C\u8272\u8868\u5B58\u50A8\u5230\u4E0D\u540C\u7684\u5B58\u50A8\u533A\u3002 \u6B64\u4E0B\u62C9\u5217\u8868\u4E2D\u7684\u53EF\u4F9B\u9009\u62E9\u7684\u5B58\u50A8\u533A\u53D6\u51B3\u4E8E\u521B\u5EFA\u5DE5\u7A0B\u65F6\u4F7F\u7528\u7684TouchGFX\u677F\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6296\u8272\u7B97\u6CD5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u8BBE\u7F6E\u56FE\u50CF\u4F7F\u7528\u7684\u6296\u8272\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u6296\u8272: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5BF9\u56FE\u50CF\u4E0D\u4F7F\u7528\u6296\u8272\u7B97\u6CD5\uFF0C \u7531\u4E8E\u4E0D\u4F7F\u7528\u56FE\u50CF\u5904\u7406\uFF0C\u6240\u4EE5\u8BE5\u8BBE\u7F6E\u6027\u80FD\u6700\u9AD8\u3002 \u7136\u800C\uFF0C\u5F53\u8272\u6DF1\u8F83\u4F4E\u65F6\u53EF\u80FD\u4F1A\u770B\u5230\u56FE\u50CF\u8D28\u91CF\u4E0B\u964D\uFF0C\u8FD9\u5177\u4F53\u53D6\u51B3\u4E8E\u56FE\u50CF\u672C\u8EAB\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F17\u6D1B\u4F0A\u5FB7-\u65AF\u5766\u4F2F\u683C\u7B97\u6CD5: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5C06\u8BEF\u5DEE\u6269\u6563\u4E8E\u76F8\u90BB\u50CF\u7D20\uFF0C\u7EC6\u7C92\u5EA6\u6296\u8272\uFF0C\u4F46\u4F1A\u727A\u7272\u6E05\u6670\u5EA6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8D3E\u7EF4\u65AF, \u6731\u8FEA\u65AF\u548C\u5C3C\u514B\u7B97\u6CD5\uFF1A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u4E0E\u5F17\u6D1B\u4F0A\u5FB7-\u65AF\u5766\u4F2F\u683C\u7B97\u6CD5\u76F8\u6BD4\uFF0C\u4F1A\u5C06\u8BEF\u5DEE\u8FDB\u4E00\u6B65\u6269\u6563\u5230\u66F4\u8FDC\u50CF\u7D20\uFF0C\u56E0\u6B64\u6296\u8272\u66F4\u7C97\u7CD9\uFF0C\u4F46\u56FE\u50CF\u66F4\u6E05\u6670\u3002 \u662F3\u79CD\u8BEF\u5DEE\u6269\u6563\u6296\u8272\u7B97\u6CD5\u4E2D\u6700\u6162\u7684\u4E00\u79CD\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65AF\u5854\u57FA\u7B97\u6CD5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u57FA\u4E8E\u6700\u5C0F\u5E73\u5747\u8BEF\u5DEE\u6296\u8272\uFF0C\u4F46\u66F4\u5FEB\u66F4\u6E05\u6670\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u963F\u5C14\u6CD5\u6296\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u8BBE\u7F6E\u662F\u5426\u901A\u8FC7\u963F\u5C14\u6CD5\u901A\u9053\u4F7F\u7528\u6296\u8272\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E03\u5C40\u65CB\u8F6C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u5217\u8868\u6307\u5B9A\u56FE\u50CF\u6570\u636E\u751F\u6210\u65F6\u7684\u65CB\u8F6C\u89D2\u5EA6\u3002 \u5982\u679C\u5C4F\u663E\u65B9\u5411\u53D1\u751F\u6539\u53D8\uFF0C\u4F7F\u7528\u6B64\u9009\u9879\u6309\u65B0\u5C4F\u663E\u65B9\u5411\u6B63\u786E\u6E32\u67D3\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "text-configuration"
  }), `\u6587\u672C\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u90E8\u5206\u9009\u9879\uFF0C\u4EE5\u590D\u9009\u6846\u5F62\u5F0F\u5C55\u73B0\uFF0C\u7528\u6237\u53EF\u4EE5\u9009\u62E9\u6765\u8BBE\u7F6E\u6587\u672C\u6E32\u67D3\u548C\u5B58\u50A8\u5F62\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u89C6\u56FE\u201D\u4E2D\u7684\u201C\u6587\u672C\u8BBE\u7F6E\u201D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u91CD\u65B0\u6620\u5C04\u6587\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9009\u9879\u5B9A\u4E49\u76F8\u540C\u8F6C\u6362\u662F\u5426\u5E94\u91CD\u65B0\u6620\u5C04\u3002 \u91CD\u65B0\u6620\u5C04\u6587\u672C\u5C06\u5728\u6240\u6709\u8BED\u8A00\uFF0C\u5B57\u7B26\u8868\u4EE5\u53CA\u5BF9\u9F50\u65B9\u5F0F\u4E2D\u5C06\u76F8\u540C\u7684\u7FFB\u8BD1\u53CA\u540E\u7F00\u7EDF\u4E00\u8D77\u6765\uFF0C\u8FD9\u5C06\u7F29\u51CF\u6570\u636E\u5927\u5C0F\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8BE5\u9009\u9879\u4E0E'\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u6587\u4EF6'\u9009\u9879\u4E92\u65A5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9009\u9879\u5B9A\u4E49\u5B57\u5F62\u7684\u6C34\u5E73\u50CF\u7D20\u6570\u636E\u662F\u5426\u91C7\u7528A4\u683C\u5F0F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8BE5\u9009\u9879\u53EA\u5F71\u54CD\u914D\u7F6E\u4E3A4bp\u7684\u5B57\u5F62\u8868`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u4E8C\u8FDB\u5236\u7FFB\u8BD1\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9009\u9879\u5B9A\u4E49\u662F\u5426\u5C06\u9879\u76EE\u4E2D\u7684\u8BD1\u6587\u79FB\u52A8\u5230\u53EF\u5728\u8FD0\u884C\u65F6\u95F4\u52A0\u8F7D\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8BE5\u9009\u9879\u4E0E\u2018\u91CD\u65B0\u6620\u5C04\u6587\u672C\u2019\u9009\u9879\u4E92\u65A5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u4E8C\u8FDB\u5236\u5B57\u4F53\u6587\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9009\u9879\u5B9A\u4E49\u662F\u5426\u5E94\u5C06\u9879\u76EE\u4E2D\u7684\u5B57\u4F53\u6587\u4EF6\u79FB\u5230\u53EF\u5728\u8FD0\u884C\u65F6\u95F4\u52A0\u8F7D\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6620\u5C04\u5B58\u50A8\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9009\u9879\u786E\u5B9A\u662F\u5426\u5E94\u5C06\u9879\u76EE\u4E2D\u7684\u5B57\u4F53\u6587\u4EF6\u4EE5\u6620\u5C04\u5B58\u50A8\u683C\u5F0F\u8F93\u51FA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u975E\u6620\u5C04\u5B58\u50A8\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9009\u9879\u786E\u5B9A\u662F\u5426\u5E94\u5C06\u9879\u76EE\u4E2D\u7684\u5B57\u4F53\u6587\u4EF6\u4EE5\u975E\u6620\u5C04\u5B58\u50A8\u683C\u5F0F\u8F93\u51FA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\u6587\u672C\u548C\u5B57\u4F53")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator"
  }), `\u4EFF\u771F\u5668\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8BE5\u90E8\u5206\uFF0C\u53EF\u4EE5\u5728\u8FD0\u884C\u4EFF\u771F\u5668\u65F6\u4E3A\u5176\u6DFB\u52A0\u76AE\u80A4\u3002 \u6A2A\u5C4F\u548C\u7AD6\u5C4F\u663E\u793A\u9879\u76EE\u5747\u53EF\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `X`), ` \u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Y`), ` \u5C5E\u6027\u51B3\u5B9A\u4EFF\u771F\u5668\u5728\u76AE\u80A4\u4E2D\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u89C6\u56FE\u201D\u4E2D\u7684\u4EFF\u771F\u5668\u8BBE\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u5C31\u662F\u4E00\u4E2A\u5E26\u76AE\u80A4\u4EFF\u771F\u5668\u8FD0\u884C\u65F6\u7684\u793A\u4F8B\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5F53\u5E26\u76AE\u80A4\u7684\u4EFF\u771F\u5668\u8FD0\u884C\u65F6\uFF0C\u6807\u51C6\u7A97\u53E3\u63A7\u4EF6\u4F1A\u88AB\u9690\u85CF\u8D77\u6765\u3002 \u5173\u95ED\u4EFF\u771F\u5668\u8BF7\u6309`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Esc\u952E\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.gif",
    mdxType: "Figure"
  }, "\u5E26\u76AE\u80A4\u7684\u4EFF\u771F\u5668\u8FD0\u884C\u5C55\u793A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "build"
  }), `\u521B\u5EFA\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u66F4\u6539\u5F53\u70B9\u51FB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#run-simulator"
  }), `\u201C\u4EFF\u771F\u5668\u8FD0\u884C\u201D`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#run-target"
  }), `\u201C\u76EE\u6807\u677F\u8FD0\u884C\u201D`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#generate-code"
  }), `\u201C\u751F\u6210\u4EE3\u7801\u201D`), `\u65F6\u6267\u884C\u7684\u6307\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u91CD\u5199\u6307\u4EE4\uFF0C\u53EF\u5728\u6587\u672C\u6846\u4E2D\u5199\u5165\u3002 \u5982\u9700\u590D\u539F\uFF0C\u70B9\u51FB\u6307\u4EE4\u540D\u79F0\u65C1\u8FB9\u7684\u201C\u91CD\u7F6E\u201D\u6807\u7B7E\u5373\u53EF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u89C6\u56FE\u201D\u4E2D\u7684\u521B\u5EFA\u8BBE\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u751F\u6210\u8D44\u6E90\u6307\u4EE4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u8BBE\u7F6E\u6B64\u6307\u4EE4\u6765\u751F\u6210\u6587\u672C\u548C\u56FE\u50CF\u8D44\u6E90\uFF0C\u5728TouchGFX Designer\u751F\u6210\u4EE3\u7801\u540E\u6267\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u751F\u6210\u4EE3\u7801\u6307\u4EE4\u7684\u8DDF\u968F\u6307\u4EE4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u6307\u4EE4\u901A\u5E38\u5728\u751F\u6210\u4EE3\u7801\u6307\u4EE4\u8FD0\u884C\u540E\u8FD0\u884C\uFF0C\u7528\u4E8E\u66F4\u65B0\u5404\u79CD\u9879\u76EE\u6587\u4EF6\u3002 \u5185\u7F6E\u547D\u4EE4\u884C\u5DE5\u5177`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx update_project`), `\u652F\u6301\u66F4\u65B0\u4EE5\u4E0B\u9879\u76EE\u6587\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio (.vcxproj)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil (.uvprojx)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR (.ewp & .ipcf)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE (.project & .cproject)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX (.ioc)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u7136\uFF0C\u5728\u8FD9\u91CC\u53EF\u4EE5\u5199\u5165\u4EFB\u4F55\u9700\u8981\u5728\u751F\u6210\u4EE3\u7801\u540E\u6267\u884C\u7684\u6307\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u7F16\u8BD1\u4EFF\u771F\u5668\u6307\u4EE4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u6307\u4EE4\u901A\u5E38\u901A\u8FC7\u6267\u884CTouchGFX Designer\u751F\u6210\u7684Makefile\u6765\u6267\u884C\u5DE5\u7A0B\u7684\u4EFF\u771F\u5668\u7F16\u8BD1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8FD0\u884C\u4EFF\u771F\u5668\u6307\u4EE4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u6307\u4EE4\u542F\u52A8\u6267\u884Csimulator.exe\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u751F\u6210\u76EE\u6807\u4EE3\u7801\u6307\u4EE4\u7684\u8DDF\u968F\u8D28\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u6307\u4EE4\u5728\u751F\u6210\u76EE\u6807\u4EE3\u7801\u6307\u4EE4\u8FD0\u884C\u540E\u6267\u884C\uFF0C\u901A\u5E38\u7528\u4E8E\u66F4\u65B0\u5404\u79CD\u9879\u76EE\u6587\u4EF6\uFF0C\u591A\u6570\u4E3ASTM32CubeMX (.ioc) \u9879\u76EE\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u7136\uFF0C\u5728\u8FD9\u91CC\u53EF\u4EE5\u5199\u5165\u4EFB\u4F55\u9700\u8981\u5728\u751F\u6210\u4EE3\u7801\u540E\u6267\u884C\u7684\u6307\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u7F16\u8BD1\u76EE\u6807\u6307\u4EE4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u6307\u4EE4\u7528\u4E8E\u6267\u884C\u76EE\u6807\u786C\u4EF6\u7684\u5DE5\u7A0B\u7F16\u8BD1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u70E7\u5F55\u76EE\u6807\u95EA\u5B58\u6307\u4EE4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u6307\u4EE4\u6267\u884C\u70E7\u5F55\u5DE5\u7A0B\u5230\u76EE\u6807\u786C\u4EF6\u95EA\u5B58\u547D\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "framework-features"
  }), `\u6846\u67B6\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u542F\u7528/\u7981\u7528\u6846\u67B6\u4E2D\u7684\u7279\u6027\uFF0C\u7279\u522B\u662F\u7EB9\u7406\u6620\u5C04\u5668\u63A7\u4EF6\u652F\u6301\u7684\u56FE\u50CF\u683C\u5F0F\u7279\u6027\u3002 \u53EF\u7528\u4E8E\u4F18\u5316\u76EE\u6807\u786C\u4EF6\u5DE5\u7A0B\u4EE3\u7801\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u91CC\u663E\u793A\u51FA\u6765\u7684\u53EF\u7528\u9009\u9879\u53D6\u51B3\u4E8E\u4E3A\u5DE5\u7A0B\u9009\u62E9\u7684\u8272\u6DF1\u3002 \u4E0B\u56FE\u663E\u793A\u4E8624\u4F4D\u8272\u6DF1\u7EB9\u7406\u6620\u5C04\u5668\u7684\u56FE\u50CF\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u89C6\u56FE\u201D\u4E2D24bpp\u7684\u6846\u67B6\u7279\u6027\u8BBE\u7F6E"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);