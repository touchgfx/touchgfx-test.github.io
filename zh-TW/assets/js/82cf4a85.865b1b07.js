"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7217],{

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

/***/ 68904:
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
  title: "\u914D\u7F6E\u5716"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/config-view",
  "id": "development/ui-development/designer-user-guide/config-view",
  "title": "\u914D\u7F6E\u5716",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/config-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/config-view",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/config-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "config-view",
    "title": "\u914D\u7F6E\u5716"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6587\u5B57\u8996\u5716",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/texts-view"
  },
  "next": {
    "title": "\u4EA4\u4E92",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/interactions-view"
  }
};
const assets = {};




const toc = [{
  value: "General (\u4E00\u822C)",
  id: "general",
  level: 2
}, {
  value: "Display (\u986F\u793A\u5668)",
  id: "display",
  level: 2
}, {
  value: "Default Image Configuration (\u9810\u8A2D\u5716\u50CF\u914D\u7F6E)",
  id: "default-image-configuration",
  level: 2
}, {
  value: "Text Configuration (\u6587\u5B57\u914D\u7F6E)",
  id: "text-configuration",
  level: 2
}, {
  value: "Simulator (\u6A21\u64EC\u5668)",
  id: "simulator",
  level: 2
}, {
  value: "Build (\u5EFA\u69CB)",
  id: "build",
  level: 2
}, {
  value: "Framework Features (\u6846\u67B6\u7279\u6027)",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201C\u914D\u7F6E\u5716\u201D\u4E2D\u7684\u4EE5\u4E0B\u90E8\u5206\uFF0C\u53EF\u4EE5\u914D\u7F6E\u4F5C\u7528\u65BC\u5C08\u6848\u7684\u5404\u7A2E\u8A2D\u7F6E\uFF1A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#general"
  }), `General (\u4E00\u822C)`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#display"
  }), `Display (\u986F\u793A\u5668)`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#default-image-configuration"
  }), `Default Image Configuration (\u9810\u8A2D\u5716\u50CF\u914D\u7F6E)`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#text-configuration"
  }), `Text Configuration (\u6587\u5B57\u914D\u7F6E)`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#simulator"
  }), `Simulator (\u6A21\u64EC\u5668)`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#simulator"
  }), `Build (\u69CB\u5EFA)`), ` \u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#framework-features"
  }), `Framework Features (\u6846\u67B6\u7279\u6027)`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u5716\u201D\u4E2D\u7684\u4E00\u822C\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "general"
  }), `General (\u4E00\u822C)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u5716\u201D\u4E2D\u7684\u4E00\u822C\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name (\u61C9\u7528\u540D\u7A31)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u61C9\u7528\u540D\u7A31\u662F\u4E00\u500B\u552F\u8B80\u6B04\u4F4D\uFF0C\u986F\u793A\u5275\u5EFA\u61C9\u7528\u6642\u70BA\u61C9\u7528\u9078\u64C7\u7684\u540D\u7A31\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TouchGFX Board Setup (\u958B\u767C\u677F\u8A2D\u7F6E)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u8A72\u6B04\u4F4D\u986F\u793A\u5275\u5EFA\u61C9\u7528\u6642\u4F7F\u7528\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\uFF0C\u5982\u679C\u6B64\u8CC7\u8A0A\u672A\u4F7F\u7528\uFF0C\u5C07\u986F\u793A\u201CN/A\u201D\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u5982\u679C\u4F7F\u7528\u6B64\u8CC7\u8A0A\uFF0C\u5C07\u986F\u793ATouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u7684\u540D\u7A31\u548C\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Selected Language (\u9078\u64C7\u7684\u8A9E\u8A00)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u6E05\u55AE\u5305\u542B\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "texts-view"
  }), `Texts (\u6587\u5B57)`), `\u4E2D\u914D\u7F6E\u7684\u8A9E\u8A00\uFF0C\u7528\u65BC\u9078\u64C7\u5C08\u6848\u555F\u52D5\u6642\u61C9\u986F\u793A\u7684\u8A9E\u8A00\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Skin (\u76AE\u819A)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u6E05\u55AE\u8A2D\u7F6E\u5169\u7A2E\u5167\u5EFA\u7684\u98A8\u683C\u4EE5\u652F\u63F4\u98A8\u683C\u8A2D\u7F6E\u7684\u5C0F\u5DE5\u5177\u4F7F\u7528\uFF0C\u53EF\u4EE5\u9078\u64C7\u201C\u85CD\u8272\u201D\u6216\u201C\u9ED1\u8272\u201D\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5982\u679C\u5C0F\u5DE5\u5177\u5DF2\u914D\u7F6E\u201C\u85CD\u8272\u201D\u76AE\u819A\u7684\u98A8\u683C\uFF0C\u5C07\u76AE\u819A\u66F4\u6539\u70BA\u201C\u9ED1\u8272\u201D\uFF0C\u5C0F\u5DE5\u5177\u5C07\u81EA\u52D5\u5207\u63DB\u81F3\u201C\u9ED1\u8272\u201D\u76AE\u819A\u7684\u76F8\u61C9\u98A8\u683C\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Startup Screen (\u555F\u52D5\u756B\u9762)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u6E05\u55AE\u5305\u542B\u6240\u6709\u5DF2\u6DFB\u52A0\u5230\u5C08\u6848\u7684\u87A2\u5E55\uFF0C\u7528\u65BC\u9078\u64C7\u5728\u5C08\u6848\u555F\u52D5\u6642\u8981\u986F\u793A\u7684\u87A2\u5E55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `Display (\u986F\u793A\u5668)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A72\u5340\u57DF\uFF0C\u53EF\u4EE5\u914D\u7F6E\u986F\u793A\u5668\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u5716\u201D\u4E2D\u7684\u986F\u793A\u5668\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Dimensions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u986F\u793A\u7684\u5927\u5C0F\u53EF\u4EE5\u900F\u904E `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `W(\u5BEC\u5EA6) `), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `H(\u9AD8\u5EA6)`), ` \u5C6C\u6027\u9032\u884C\u8A2D\u7F6E\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u5DF2\u7D93\u901A\u904ETouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u914D\u7F6E\u4E86\u5C3A\u5BF8\uFF0C\u5C3A\u5BF8\u914D\u7F6E\u6703\u88AB\u7981\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Display Orientation (\u986F\u793A\u5668\u65B9\u5411)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u986F\u793A\u5668\u65B9\u5411\u53EF\u4EE5\u5728\u6A6B\u5C4F\u548C\u8C4E\u5C4F\u4E4B\u9593\u5207\u63DB\u3002 \u9019\u9084\u6703\u5F71\u97FF\u5C08\u6848\u4E2D\u6240\u7528\u5716\u50CF\u8F49\u63DB\u70BAcpp\u6A94\u7684\u65B9\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth (\u8272\u6DF1)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u6B64\u4E0B\u62C9\u6E05\u55AE\u5305\u542B\u53EF\u4F9B\u5C08\u6848\u4F7F\u7528\u7684\u8272\u6DF1\u3002 \u9019\u4E9B\u90FD\u53D6\u6C7A\u65BC\u5275\u5EFA\u5C08\u6848\u6642\u4F7F\u7528\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "default-image-configuration"
  }), `Default Image Configuration (\u9810\u8A2D\u5716\u50CF\u914D\u7F6E)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A72\u5340\u57DF\uFF0C\u53EF\u4EE5\u8A2D\u7F6E\u5C08\u6848\u4E2D\u7684\u5716\u50CF\u4F7F\u7528\u7684\u9810\u8A2D\u8A2D\u7F6E\u3002 \u9019\u4E9B\u8A2D\u7F6E\u5C07\u4F5C\u7528\u65BC\u5C08\u6848\u4E2D\u7684\u6240\u6709\u5716\u50CF\uFF0C\u9664\u975E\u5B83\u5011\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "images-view"
  }), `\u5716\u50CF`), `\u8996\u5716\u4E2D\u88AB\u8986\u84CB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u5716\u201D\u4E2D\u7684\u201C\u9810\u8A2D\u5716\u50CF\u914D\u7F6E\u201D\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Opaque Image Format (\u4E0D\u900F\u660E\u5716\u50CF\u683C\u5F0F)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u6E05\u55AE\u8A2D\u7F6E\u751F\u6210\u51FA\u7684\u4E0D\u900F\u660E\u50CF\u7D20\u8CC7\u6599\u7684\u5716\u50CF\u683C\u5F0F\u3002 \u6B64\u4E0B\u62C9\u6E05\u55AE\u4E2D\u7684\u53EF\u7528\u5716\u50CF\u683C\u5F0F\u53D6\u6C7A\u65BC\u5C08\u6848\u7684\u9078\u5B9A\u8272\u6DF1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Non Opaque Image Format (\u900F\u660E\u5716\u50CF\u683C\u5F0F)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u6E05\u55AE\u8A2D\u7F6E\u61C9\u4EE5\u54EA\u7A2E\u683C\u5F0F\u751F\u6210\u900F\u660E\u50CF\u7D20\u8CC7\u6599\u7684\u5716\u50CF\u3002 \u6B64\u4E0B\u62C9\u6E05\u55AE\u4E2D\u7684\u53EF\u7528\u5716\u50CF\u683C\u5F0F\u53D6\u6C7A\u65BC\u5C08\u6848\u7684\u9078\u5B9A\u8272\u6DF1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Section (\u5340\u6BB5)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u6E05\u55AE\u8A2D\u7F6E\u5716\u50CF\u8CC7\u6599\u5728\u76EE\u6A19\u786C\u9AD4\u4E0A\u7684\u5B58\u5132\u4F4D\u7F6E\u3002 \u6B64\u4E0B\u62C9\u6E05\u55AE\u4E2D\u7684\u53EF\u7528\u5206\u5340\u53D6\u6C7A\u65BC\u5275\u5EFA\u5C08\u6848\u6642\u4F7F\u7528\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Extra Section (\u984D\u5916\u5340\u6BB5)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5728\u4F7F\u7528L8\u5716\u50CF\u683C\u5F0F\u6642\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u4F7F\u7528\u6B64\u4E0B\u62C9\u6E05\u55AE\u5C07\u984F\u8272\u8868\u5B58\u5132\u5728\u53E6\u4E00\u500B\u5206\u5340\u3002 \u6B64\u4E0B\u62C9\u6E05\u55AE\u4E2D\u7684\u53EF\u7528\u5206\u5340\u53D6\u6C7A\u65BC\u5275\u5EFA\u5C08\u6848\u6642\u4F7F\u7528\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Dither Algorithm (\u6296\u52D5\u6F14\u7B97\u6CD5)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u6E05\u55AE\u8A2D\u7F6E\u5716\u50CF\u4F7F\u7528\u7684\u6296\u52D5\u6F14\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `No dither: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5C0D\u5716\u50CF\u4E0D\u4F7F\u7528\u6296\u8272\u6F14\u7B97\u6CD5\uFF0C \u7531\u65BC\u4E0D\u505A\u4EFB\u4F55\u6539\u8B8A\uFF0C\u56E0\u6B64\u9019\u662F\u6027\u80FD\u6700\u9AD8\u7684\u8A2D\u7F6E\u3002 \u4F46\u662F\uFF0C\u8272\u6DF1\u8F03\u4F4E\u6642\u53EF\u80FD\u6703\u770B\u5230\u5716\u50CF\u54C1\u8CEA\u4E0B\u964D\uFF0C\u5177\u9AD4\u53D6\u6C7A\u65BC\u5716\u50CF\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Floyd-Steinberg\u6F14\u7B97\u6CD5: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u5C07\u8AA4\u5DEE\u64F4\u6563\u5230\u76F8\u9130\u50CF\u7D20\uFF0C\u5C0E\u81F4\u7D30\u7D30\u5FAE\u6027\u6296\u52D5\uFF0C\u4F46\u6703\u72A7\u7272\u6E05\u6670\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Jarvis\u3001Judice\u548CNinke\u6F14\u7B97\u6CD5: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u8207Floyd-Steinberg\u6F14\u7B97\u6CD5\u76F8\u6BD4\uFF0C\u5C07\u8AA4\u5DEE\u9032\u4E00\u6B65\u64F4\u6563\u5230\u66F4\u9060\u50CF\u7D20\uFF0C\u56E0\u6B64\u6296\u52D5\u66F4\u7C97\u7CD9\uFF0C\u4F46\u5716\u50CF\u66F4\u6E05\u6670\u3002 3\u7A2E\u8AA4\u5DEE\u64F4\u6563\u6296\u52D5\u6F14\u7B97\u6CD5\u4E2D\u6700\u6162\u7684\u4E00\u7A2E\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Stucki\u6F14\u7B97\u6CD5: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u57FA\u65BC\u6700\u5C0F\u5E73\u5747\u8AA4\u5DEE\u6296\u52D5\uFF0C\u4F46\u66F4\u5FEB\u66F4\u6E05\u6670\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Alpha Dither (Alpha\u6296\u52D5)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u6E05\u55AE\u8A2D\u7F6E\u662F\u5426\u901A\u904EAlpha\u901A\u9053\u4F7F\u7528\u6296\u52D5\u6F14\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Layout Rotaion`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u4E0B\u62C9\u6E05\u55AE\u6307\u5B9A\u5716\u50CF\u8CC7\u6599\u751F\u6210\u6642\u7684\u65CB\u8F49\u3002 \u5982\u679C\u87A2\u5E55\u65B9\u5411\u767C\u751F\u8B8A\u5316\uFF0C\u4F7F\u7528\u6B64\u4E0B\u62C9\u6E05\u55AE\u6309\u65B0\u65B9\u5411\u6B63\u78BA\u6E32\u67D3\u5716\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "text-configuration"
  }), `Text Configuration (\u6587\u5B57\u914D\u7F6E)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A72\u5340\u57DF\uFF0C\u53EF\u901A\u904E\u9078\u64C7\u7B26\u5408\u5C08\u6848\u9700\u6C42\u7684\u9078\u9805\u4F86\u914D\u7F6E\u6587\u5B57\u6E32\u67D3\u548C\u5B58\u5132\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u5716\u201D\u4E2D\u7684\u201CText Configuration (\u6587\u5B57\u914D\u7F6E)\u201D\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Remap texts (\u91CD\u65B0\u6620\u5C04\u6587\u5B57)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9078\u9805\u5B9A\u7FA9\u76F8\u540C\u8F49\u63DB\u662F\u5426\u61C9\u91CD\u65B0\u6620\u5C04\u3002 \u91CD\u65B0\u6620\u5C04\u6587\u5B57\u5C07\u5728\u6240\u6709\u8A9E\u8A00\uFF0C\u5B57\u5143\u8868\u4EE5\u53CA\u5C0D\u9F4A\u65B9\u5F0F\u4E2D\u5C07\u76F8\u540C\u7684\u7FFB\u8B6F\u53CA\u5C3E\u78BC\u7D71\u4E00\u8D77\u4F86\uFF0C\u9019\u5C07\u7E2E\u6E1B\u8CC7\u6599\u5927\u5C0F\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8A72\u9078\u9805\u8207'\u4E8C\u9032\u4F4D\u7FFB\u8B6F\u6A94'\u9078\u9805\u4E92\u65A5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9078\u9805\u5B9A\u7FA9\u5B57\u5F62\u7684\u6C34\u5E73\u50CF\u7D20\u8CC7\u6599\u662F\u5426\u63A1\u7528A4\u683C\u5F0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8A72\u9078\u9805\u53EA\u5F71\u97FF\u914D\u7F6E\u70BA4bp\u7684\u5B57\u5F62\u8868`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Binary translation files\uFF08\u4E8C\u9032\u4F4D\u7FFB\u8B6F\u6A94\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9078\u9805\u5B9A\u7FA9\u662F\u5426\u5C07\u5C08\u6848\u4E2D\u7684\u8B6F\u6587\u79FB\u52D5\u5230\u53EF\u5728\u57F7\u884C\u6642\u9593\u8F09\u5165\u7684\u4E8C\u9032\u4F4D\u6A94\u6848\u4E2D\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8A72\u9078\u9805\u8207\u2018\u91CD\u65B0\u6620\u5C04\u6587\u5B57\u2019\u9078\u9805\u4E92\u65A5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Binary font files (\u4E8C\u9032\u4F4D\u5B57\u9AD4\u6A94)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9078\u9805\u5B9A\u7FA9\u662F\u5426\u61C9\u5C07\u5C08\u6848\u4E2D\u7684\u5B57\u9AD4\u6A94\u79FB\u52D5\u5230\u53EF\u5728\u57F7\u884C\u6642\u9593\u8F09\u5165\u7684\u4E8C\u9032\u4F4D\u6A94\u6848\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Mapped storage format (\u6620\u5C04\u5B58\u5132\u683C\u5F0F)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9078\u9805\u5B9A\u7FA9\u662F\u5426\u61C9\u5C07\u5C08\u6848\u4E2D\u7684\u5B57\u9AD4\u6A94\u4EE5\u6620\u5C04\u5B58\u5132\u683C\u5F0F\u8F38\u51FA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Unmapped storage format (\u672A\u6620\u5C04\u5B58\u5132\u683C\u5F0F)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u9078\u9805\u5B9A\u7FA9\u662F\u5426\u61C9\u5C07\u5C08\u6848\u4E2D\u7684\u5B57\u9AD4\u6A94\u4EE5\u672A\u6620\u5C04\u5B58\u5132\u683C\u5F0F\u8F38\u51FA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\u6587\u5B57\u548C\u5B57\u9AD4")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator"
  }), `Simulator (\u6A21\u64EC\u5668)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A72\u5340\u57DF\uFF0C\u53EF\u4EE5\u5728\u904B\u884C\u6A21\u64EC\u5668\u6642\u70BA\u5176\u6DFB\u52A0\u76AE\u819A\u3002 \u53EF\u4EE5\u70BA\u6A6B\u5C4F\u548C\u8C4E\u5C4F\u986F\u793A\u5C08\u6848\u6DFB\u52A0\u76AE\u819A\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `X `), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Y `), `\u5C6C\u6027\u6C7A\u5B9A\u6A21\u64EC\u5668\u5728\u76AE\u819A\u4E2D\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u5716\u201D\u4E2D\u7684\u6A21\u64EC\u5668\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u5C31\u662F\u4E00\u500B\u5E36\u76AE\u819A\u6A21\u64EC\u5668\u904B\u884C\u6642\u7684\u7BC4\u4F8B\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u7576\u5E36\u76AE\u819A\u7684\u6A21\u64EC\u5668\u904B\u884C\u6642\uFF0C\u6A19\u6E96\u8996\u7A97\u63A7\u5236\u9805\u6703\u88AB\u96B1\u85CF\u8D77\u4F86\u3002 \u95DC\u9589\u6A21\u64EC\u5668\u8ACB\u6309`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Esc\u9375`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.gif",
    mdxType: "Figure"
  }, "\u904B\u884C\u4E2D\u7684\u6709\u76AE\u819A\u7684\u6A21\u64EC\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "build"
  }), `Build (\u5EFA\u69CB)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A72\u5340\u57DF\uFF0C\u53EF\u4EE5\u91CD\u5BEB\u9EDE\u64CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#run-simulator"
  }), `\u201CRun Simulator (\u904B\u884C\u6A21\u64EC\u5668)\u201D`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#run-target"
  }), `\u201CRun Target (\u904B\u884C\u76EE\u6A19)\u201D`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#generate-code"
  }), `\u201CGenerate Code (\u751F\u6210\u7A0B\u5F0F\u78BC)\u201D`), `\u6642\u57F7\u884C\u7684\u6307\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u91CD\u5BEB\u6307\u4EE4\uFF0C\u53EA\u9700\u5728\u6587\u5B57\u65B9\u584A\u4E2D\u5BEB\u5165\u4EFB\u610F\u6307\u4EE4\u3002 \u5982\u9700\u5728\u91CD\u5BEB\u5F8C\u91CD\u7F6E\u6307\u4EE4\uFF0C\u9EDE\u64CA\u6307\u4EE4\u540D\u7A31\u65C1\u908A\u7684\u201CReset (\u91CD\u7F6E)\u201D\u6A19\u7C64\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u5716\u201D\u4E2D\u7684\u5EFA\u69CB\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Generate Assets Command (\u751F\u6210\u8CC7\u7522\u6307\u4EE4)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u8A2D\u7F6E\u6B64\u6307\u4EE4\u4F86\u751F\u6210\u6587\u5B57\u548C\u5716\u50CF\uFF0C\u5728TouchGFX Designer\u751F\u6210\u7A0B\u5F0F\u78BC\u5F8C\u57F7\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Post Generate Command (\u767C\u4F48\u751F\u6210\u6307\u4EE4)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6B64\u6307\u4EE4\u901A\u5E38\u7528\u65BC\u66F4\u65B0\u5404\u7A2E\u5C08\u6848\u6A94\u6848\u3002 \u5167\u7F6E\u6307\u4EE4\u5217\u5DE5\u5177`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx update_project`), `\u652F\u63F4\u66F4\u65B0\u4EE5\u4E0B\u5C08\u6848\u6A94\u6848\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio (.vcxproj)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil (.uvprojx)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR (.ewp & .ipcf)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE (.project & .cproject)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX (.ioc)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u53EF\u4EE5\u5728\u9019\u88E1\u5BEB\u5165\u4EFB\u4F55\u9700\u8981\u5728\u751F\u6210\u7A0B\u5F0F\u78BC\u5F8C\u57F7\u884C\u7684\u6307\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Compile Simulator Command (\u7DE8\u8B6F\u6A21\u64EC\u5668\u6307\u4EE4)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u6307\u4EE4\u901A\u5E38\u901A\u904E\u57F7\u884CTouchGFX Designer\u751F\u6210\u7684Makefile\u4F86\u57F7\u884C\u6A21\u64EC\u5668\u7684\u5C08\u6848\u7DE8\u8B6F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Run Simulator Command (\u904B\u884C\u6A21\u64EC\u5668\u6307\u4EE4)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u6307\u4EE4\u57F7\u884Csimulator.exe\u7684\u555F\u52D5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Post Generate Target Command (\u767C\u4F48\u751F\u6210\u76EE\u6A19\u6307\u4EE4)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u6307\u4EE4\u901A\u5E38\u7528\u65BC\u66F4\u65B0\u5404\u7A2E\u5C08\u6848\u6A94\u6848\uFF0C\u591A\u6578\u70BASTM32CubeMX (.ioc) \u5C08\u6848\u6A94\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F46\u662F\uFF0C\u53EF\u4EE5\u5728\u9019\u88E1\u5BEB\u5165\u4EFB\u4F55\u9700\u8981\u5728\u751F\u6210\u7A0B\u5F0F\u78BC\u5F8C\u57F7\u884C\u7684\u6307\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Compile Target Command (\u7DE8\u8B6F\u76EE\u6A19\u6307\u4EE4)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u6307\u4EE4\u57F7\u884C\u76EE\u6A19\u786C\u9AD4\u7684\u5C08\u6848\u7DE8\u8B6F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Flash Target Command (\u5FEB\u9583\u8A18\u61B6\u9AD4\u76EE\u6A19\u6307\u4EE4)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u8A72\u6307\u4EE4\u57F7\u884C\u5C08\u6848\u5230\u76EE\u6A19\u786C\u9AD4\u7684\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "framework-features"
  }), `Framework Features (\u6846\u67B6\u7279\u6027)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8A72\u5340\u57DF\uFF0C\u53EF\u4EE5\u555F\u7528/\u7981\u7528\u6846\u67B6\u4E2D\u7684\u7279\u6027\uFF0C\u7279\u5225\u662F\u7D0B\u7406\u6620\u5C04\u5668\u5C0F\u5DE5\u5177\u652F\u63F4\u7684\u5716\u50CF\u683C\u5F0F\u3002 \u53EF\u7528\u65BC\u512A\u5316\u76EE\u6A19\u786C\u9AD4\u4E0A\u5C08\u6848\u4F54\u7528\u7684\u7A0B\u5F0F\u78BC\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u90E8\u5206\u986F\u793A\u7684\u53EF\u7528\u9078\u9805\u53D6\u6C7A\u65BC\u70BA\u5C08\u6848\u9078\u64C7\u7684\u8272\u6DF1\u3002 \u4E0B\u5716\u986F\u793A\u4E8624\u4F4D\u5143\u8272\u6DF1\u7D0B\u7406\u6620\u5C04\u5668\u7684\u5716\u50CF\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u914D\u7F6E\u5716\u201D\u4E2D24bpp\u7684\u6846\u67B6\u7279\u6027\u8A2D\u7F6E"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);