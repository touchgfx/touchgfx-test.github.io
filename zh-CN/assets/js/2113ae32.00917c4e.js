"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5999],{

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

/***/ 53381:
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
  id: "startup-window",
  title: "\u8D77\u59CB\u754C\u9762"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/startup-window",
  "id": "development/ui-development/designer-user-guide/startup-window",
  "title": "\u8D77\u59CB\u754C\u9762",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/startup-window.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/startup-window",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/startup-window",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "startup-window",
    "title": "\u8D77\u59CB\u754C\u9762"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Designer User Guide",
    "permalink": "/4.20/zh-CN/docs/category/designer-user-guide"
  },
  "next": {
    "title": "\u6587\u4EF6\u83DC\u5355",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/file-menu"
  }
};
const assets = {};


const toc = [{
  value: "\u4E3B\u9875",
  id: "home",
  level: 2
}, {
  value: "\u521B\u5EFA",
  id: "create",
  level: 2
}, {
  value: "\u793A\u4F8B",
  id: "examples",
  level: 2
}, {
  value: "\u6F14\u793A",
  id: "demos",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8D77\u59CB\u754C\u9762\u662F\u542F\u52A8TouchGFX Designer\u65F6\u51FA\u73B0\u7684\u7B2C\u4E00\u4E2A\u7A97\u53E3\u3002 \u901A\u8FC7\u8D77\u59CB\u754C\u9762\u53EF\u4EE5\u521B\u5EFA\u65B0\u7684\u5DE5\u7A0B\uFF0C\u63A2\u7D22\u6F14\u793A\u5DE5\u7A0B\u4EE5\u53CA\u6253\u5F00\u5DF2\u6709\u5DE5\u7A0B\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5728\u5DF2\u7ECF\u6253\u5F00\u4E86\u4E00\u4E2A\u5DE5\u7A0B\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u53EF\u4EE5\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684TouchGFX\u56FE\u6807\uFF0C\u6216\u901A\u8FC7\u5FEB\u6377\u952E`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + N`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8FDB\u5165\u8D77\u59CB\u7A97\u53E3\u3002\u5728\u5DF2\u7ECF\u6253\u5F00\u4E00\u4E2A\u5DE5\u7A0B\u7684\u60C5\u51B5\u4E0B\uFF0C\u518D\u521B\u5EFA\u4E00\u4E2A\u5DE5\u7A0B\u5C06\u4F1A\u6253\u5F00\u4E00\u4E2A\u65B0\u7684TouchgGFX Designer\u5B9E\u4F8B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E00\u6B21\u8FD0\u884CTouchGFX Designer\u65F6\uFF0C\u5728\u8FDB\u5165\u8D77\u59CB\u754C\u9762\u524D\u4F1A\u5F39\u51FA\u6B22\u8FCE\u7A97\u53E3\uFF0C\u5E76\u6709`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#theme"
  }), `\u6D45\u8272\u8C03\u548C\u6DF1\u8272\u8C03\u4E3B\u9898`), `\u9009\u9879\u4F9B\u7528\u6237\u9009\u62E9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-welcome-pop-up.png",
    width: "630",
    height: "455",
    mdxType: "Figure"
  }, '"\u6B22\u8FCE"\u5F39\u51FA\u7A97'), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-theme-selector-pop-up.png",
    width: "630",
    height: "420",
    mdxType: "Figure"
  }, '"\u4E3B\u9898\u9009\u62E9"\u5F39\u51FA\u7A97'), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "home"
  }), `\u4E3B\u9875`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201C\u4E3B\u9875\u201D\u9009\u9879\u5361\u4E2D\uFF0C\u53EF\u4EE5\u57FA\u4E8E\u6700\u8FD1\u4F7F\u7528\u7684TouchGFX\u677F\u8BBE\u7F6E\uFF08TBS\uFF09\u521B\u5EFA\u65B0\u5DE5\u7A0B\uFF0C\u4E5F\u53EF\u4EE5\u6253\u5F00\u5DE5\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-home.png",
    mdxType: "Figure"
  }, "\u8D77\u59CB\u754C\u9762\u4E2D\u7684\u201C\u4E3B\u9875\u201D\u9009\u9879\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6700\u8FD1\u4F7F\u7528\u7684TouchGFX\u677F\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u9009\u62E9\u5728\u6700\u8FD1\u7684\u5DE5\u7A0B\u4E2D\u4F7F\u7528\u7684TBS\uFF0C\u5E76\u53EF\u7ED3\u5408\u7A7A\u767DUI\u7528\u4E8E\u521B\u5EFA\u65B0\u5DE5\u7A0B\u3002 \u9009\u62E9TBS\u65F6\u6240\u663E\u793A\u7684\u9009\u9879\u4E0E\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#create"
  }), `\u201C\u521B\u5EFA\u201D`), `\u4E0B\u9009\u62E9TBS\u65F6\u6240\u663E\u793A\u7684\u9009\u9879\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6700\u8FD1\u7684\u5DE5\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u7528\u6237\u5728\u8FD9\u91CC\u53EF\u4EE5\u5FEB\u901F\u6253\u5F00\u6700\u8FD1\u6253\u5F00\u8FC7\u7684\u5DE5\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6253\u5F00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6309\u4E0B\u201C\u6253\u5F00\u201D\u6309\u94AE\u5C06\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u6D4F\u89C8\u5668\uFF0C\u53EF\u4EE5\u6D4F\u89C8\u76EE\u5F55\u5E76\u6253\u5F00. touchfx\u9879\u76EE\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u65B0\u5EFA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6309\u4E0B\u201C\u65B0\u5EFA\u201D\u6309\u94AE\u5C06\u4ECE\u542F\u52A8\u754C\u9762\u4E2D\u7684\u201C\u4E3B\u9875\u201D\u9009\u9879\u5361\u5207\u6362\u5230\u201C\u521B\u5EFA\u201D\u9009\u9879\u5361\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "create"
  }), `\u521B\u5EFA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201C\u521B\u5EFA\u201D\u9009\u9879\u5361\u4E2D\uFF0C\u53EF\u4EE5\u9009\u62E9TBS\u7ED3\u5408\u7A7A\u767DUI\u4E00\u8D77\u7528\u4E8E\u65B0\u5DE5\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create.png",
    mdxType: "Figure"
  }, "\u8D77\u59CB\u754C\u9762\u4E2D\u7684\u201C\u521B\u5EFA\u201D\u9009\u9879\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u641C\u7D22\u680F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u641C\u7D22\u680F\u53EF\u4EE5\u901A\u8FC7\u5F00\u53D1\u677F\u540D\u79F0\u7B5B\u9009TBS\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "\u641C\u7D22\u680F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u751F\u4EA7\u5546\u7B5B\u9009`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u7B5B\u9009\u751F\u4EA7\u5546\u60A8\u6709\u4E09\u79CD\u9009\u62E9\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u663E\u793A\u6240\u6709\u201D`), `\uFF0C\u4F1A\u663E\u793A\u6240\u6709\u7684TBS\uFF1B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `ST`), `\uFF0C\u4EC5\u663E\u793AST\u751F\u4EA7\u7684TBS\uFF1B\u53CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `ST\u5408\u4F5C\u4F19\u4F34`), `\uFF0C\u4F1A\u663E\u793AST\u5408\u4F5C\u4F19\u4F34\u751F\u4EA7\u7684TBS\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-filter.png",
    mdxType: "Figure"
  }, "\u751F\u4EA7\u5546\u7B5B\u9009"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6839\u636E\u7B5B\u9009\uFF0C\u663E\u793ATBS\u5217\u8868\u3002 \u6BCF\u4E2ATBS\u4E2D\u663E\u793A\u7684\u5C5E\u6027\u5305\u62EC\u540D\u79F0\u3001\u64CD\u4F5C\u7CFB\u7EDF\u548C\u5206\u8FA8\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-list.png",
    mdxType: "Figure"
  }, "TBS\u5217\u8868\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9009\u5B9A\u7684TBS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5F53\u9009\u4E2D\u67D0\u4E2ATBS\u65F6\uFF0C\u7A97\u53E3\u53F3\u4FA7\u4F1A\u663E\u793A\u8BE5TBS\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5\u53CA\u57FA\u4E8ETBS\u521B\u5EFA\u65B0\u5DE5\u7A0B\u7684\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-info-and-create.png",
    mdxType: "Figure"
  }, "\u9009\u5B9A\u7684TBS\u4EE5\u5176\u63CF\u8FF0\u548C\u9009\u9879"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E94\u7528\u7A0B\u5E8F\u540D\u79F0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u7528\u4E8E\u786E\u5B9A\u65B0\u5DE5\u7A0B\u7684\u540D\u79F0\uFF0C\u4EE5\u53CA\u65B0\u5DE5\u7A0B\u6587\u4EF6\u5939\u7684\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E94\u7528\u7A0B\u5E8F\u76EE\u5F55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u7528\u4E8E\u786E\u5B9A\u65B0\u5DE5\u7A0B\u6587\u4EF6\u76EE\u5F55\u5B58\u50A8\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8272\u6DF1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u4E0B\u62C9\u5217\u8868\u5305\u542B\u6240\u9009TBS\u652F\u6301\u7684\u8272\u6DF1\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u7248\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u4E0B\u62C9\u5217\u8868\u5305\u542B\u6240\u9009TBS\u652F\u6301\u7684\u4E0D\u540C\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5206\u8FA8\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5206\u8FA8\u7387\u7684\u53EF\u9009\u8303\u56F4\u53D6\u51B3\u4E8E\u6240\u9009\u62E9\u7684TBS\u3002 \u4EFF\u771F\u5668TBS\u652F\u63010 x 0\u548C2000 x 2000\u4E4B\u95F4\u7684\u4EFB\u4F55\u5206\u8FA8\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Pressing the Create button, creates a new project based on the selected TBS and Blank UI, with the settings from above.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201C\u793A\u4F8B\u201D\u9009\u9879\u5361\u4E2D\uFF0C\u53EF\u4EE5\u57FA\u4E8E\u793A\u4F8B\u548CTBS\u521B\u5EFA\u65B0\u5DE5\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples.png",
    mdxType: "Figure"
  }, "\u8D77\u59CB\u754C\u9762\u4E2D\u7684\u201C\u793A\u4F8B\u201D\u9009\u9879\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u641C\u7D22\u680F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u641C\u7D22\u680F\u53EF\u7528\u4E8E\u6309\u540D\u79F0\u7B5B\u9009\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "\u641C\u7D22\u680F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u793A\u4F8B\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6839\u636E\u9009\u5B9A\u7684\u7B5B\u9009\u6761\u4EF6\uFF0C\u663E\u793A\u793A\u4F8B\u5217\u8868\u3002 \u793A\u4F8B\u7684\u5C5E\u6027\u6709\u540D\u79F0\u4EE5\u53CA\u5176\u517C\u5BB9\u7684\u5206\u8FA8\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-example-list.png",
    mdxType: "Figure"
  }, "\u793A\u4F8B\u5217\u8868\u6837\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9009\u62E9\u677F\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u201C\u9009\u62E9\u677F\u8BBE\u7F6E\u201D\u6309\u94AE\u53EF\u6253\u5F00\u4E00\u4E2A\u5F39\u51FA\u7A97\u53E3\uFF0C\u53EF\u5728\u5176\u4E2D\u9009\u62E9TBS\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",
    mdxType: "Figure"
  }, "\u201C\u9009\u62E9\u677F\u8BBE\u7F6E\u201D\u5F39\u51FA\u7A97\u53E3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u641C\u7D22\u680F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u641C\u7D22\u680F\u53EF\u7528\u4E8E\u6309\u540D\u79F0\u7B5B\u9009TBS\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u751F\u4EA7\u5546\u7B5B\u9009`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u7B5B\u9009\u751F\u4EA7\u5546\u60A8\u6709\u4E09\u79CD\u9009\u62E9\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u663E\u793A\u6240\u6709\u201D`), `\uFF0C\u4F1A\u663E\u793A\u6240\u6709\u7684TBS\uFF1B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `ST`), `\uFF0C\u4EC5\u663E\u793AST\u751F\u4EA7\u7684TBS\uFF1B\u53CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `ST\u5408\u4F5C\u4F19\u4F34`), `\uFF0C\u4F1A\u663E\u793AST\u5408\u4F5C\u4F19\u4F34\u751F\u4EA7\u7684TBS\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6839\u636E\u9009\u5B9A\u7684\u7B5B\u9009\u6761\u4EF6\uFF0C\u663E\u793ATBS\u5217\u8868\u3002 \u6BCF\u4E2ATBS\u4E2D\u663E\u793A\u7684\u5C5E\u6027\u5305\u62EC\u540D\u79F0\u3001\u64CD\u4F5C\u7CFB\u7EDF\u548C\u5206\u8FA8\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9009\u5B9A\u7684TBS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5F53\u9009\u4E2D\u67D0\u4E2ATBS\u65F6\uFF0C\u7A97\u53E3\u53F3\u4FA7\u4F1A\u663E\u793A\u8BE5TBS\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5\u53CA\u57FA\u4E8ETBS\u521B\u5EFA\u65B0\u5DE5\u7A0B\u7684\u9009\u9879\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u663E\u793A\u9009\u5B9A\u7684TBS\uFF0C\u800C\u4E0D\u662F\u201C\u9009\u62E9\u677F\u4EF6\u8BBE\u7F6E\u201D\u6309\u94AE\uFF0C\u4E0D\u5339\u914D\u5206\u8FA8\u7387\u7684\u793A\u4F8B\u4E3A\u7070\u663E\u72B6\u6001\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-board.png",
    mdxType: "Figure"
  }, "\u9009\u5B9A\u4E86TBS\u7684\u793A\u4F8B\u5217\u8868\uFF0C\u5176\u4E2D\u5206\u8FA8\u7387\u4E0ETBS\u4E0D\u517C\u5BB9\u7684\u793A\u4F8B\u4E3A\u7070\u8272\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9009\u5B9A\u7684\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9009\u62E9\u67D0\u4E2A\u793A\u4F8B\u65F6\uFF0C\u53F3\u4FA7\u663E\u793A\u5176\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4EE5\u53CA\u57FA\u4E8E\u793A\u4F8B\u521B\u5EFA\u65B0\u5DE5\u7A0B\u7684\u9009\u9879\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-example.png",
    mdxType: "Figure"
  }, "\u663E\u793A\u63CF\u8FF0\u548C\u9009\u9879\u7684\u9009\u5B9A\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E94\u7528\u7A0B\u5E8F\u540D\u79F0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u7528\u4E8E\u786E\u5B9A\u65B0\u5DE5\u7A0B\u7684\u540D\u79F0\uFF0C\u4EE5\u53CA\u65B0\u5DE5\u7A0B\u6587\u4EF6\u5939\u7684\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E94\u7528\u7A0B\u5E8F\u76EE\u5F55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u7528\u4E8E\u786E\u5B9A\u65B0\u5DE5\u7A0B\u6587\u4EF6\u76EE\u5F55\u5B58\u50A8\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8272\u6DF1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u4E0B\u62C9\u5217\u8868\u5305\u542B\u6240\u9009TBS\u652F\u6301\u7684\u8272\u6DF1\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u7248\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u4E0B\u62C9\u5217\u8868\u5305\u542B\u793A\u4F8B\u7684\u4E0D\u540C\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5206\u8FA8\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5206\u8FA8\u7387\u7684\u53EF\u9009\u8303\u56F4\u53D6\u51B3\u4E8E\u6240\u9009\u62E9\u7684\u793A\u4F8B\u53CATBS\u3002 \u7A7A\u767DUI+\u4EFF\u771F\u5668\u652F\u63010 x 0\u548C2000 x 2000\u4E4B\u95F4\u7684\u4EFB\u4F55\u5206\u8FA8\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u521B\u5EFA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6309\u4E0B\u201C\u521B\u5EFA\u201D\u6309\u94AE\uFF0C\u5C06\u57FA\u4E8E\u9009\u5B9A\u7684\u793A\u4F8B\u3001TBS\u4EE5\u53CA\u4E0A\u8FF0\u8BBE\u7F6E\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5DE5\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "demos"
  }), `\u6F14\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201C\u6F14\u793A\u201D\u9009\u9879\u5361\u4E2D\uFF0C\u53EF\u4EE5\u57FA\u4E8E\u6F14\u793A\u548CTBS\u6216\u677F\u7279\u5B9A\u6F14\u793A\uFF08BSD\uFF09\u521B\u5EFA\u5DE5\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo.png",
    mdxType: "Figure"
  }, "\u8D77\u59CB\u754C\u9762\u4E2D\u7684\u201C\u6F14\u793A\u201D\u9009\u9879\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6F14\u793A\u4F8B\u7A0B\u7B5B\u9009`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5728\u9876\u90E8\u7684\u7B5B\u9009\u6761\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u9009\u62E9\u201C\u6F14\u793A\u201D\u6216\u201C\u677F\u7279\u5B9A\u6F14\u793A\u201D\uFF0C\u4ECE\u800C\u663E\u793A\u6F14\u793A\u6216BSD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-filter.png",
    mdxType: "Figure"
  }, "\u201C\u6F14\u793A\u201C\u7B5B\u9009"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u641C\u7D22\u680F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u641C\u7D22\u680F\u770B\u7528\u4E8E\u6309\u540D\u79F0\u7B5B\u9009\u201C\u6F14\u793A\u201D\u4F8B\u7A0B\u6216BSD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "\u641C\u7D22\u680F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6F14\u793A\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6839\u636E\u9009\u5B9A\u7684\u7B5B\u9009\u6761\u4EF6\uFF0C\u663E\u793A\u6F14\u793A\u5217\u8868\u3002 \u6BCF\u4E2A\u6F14\u793A\u6216BSD\u4E2D\u663E\u793A\u7684\u5C5E\u6027\u5305\u62EC\u540D\u79F0\u548C\u8981\u6C42\u7684\u5206\u8FA8\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo-list.png",
    mdxType: "Figure"
  }, "\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u6F14\u793A\u5217\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-board-specific-demo-list.png",
    mdxType: "Figure"
  }, "\u7B26\u5408\u201C\u677F\u7279\u5B9A\u6F14\u793A\u201D\u7B5B\u9009\u6761\u4EF6\u7684\u6F14\u793A\u5217\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9009\u62E9\u677F\u4EF6\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u201C\u9009\u62E9\u677F\u8BBE\u7F6E\u201D\u6309\u94AE\u53EF\u6253\u5F00\u4E00\u4E2A\u5F39\u51FA\u7A97\u53E3\uFF0C\u53EF\u5728\u5176\u4E2D\u9009\u62E9TBS\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u9009\u62E9\u677F\u8BBE\u7F6E\u201D\u6309\u94AE\u53EA\u5728\u201C\u6F14\u793A\u201D\u7B5B\u9009\u6761\u4EF6\u4E0B\u53EF\u7528\uFF0C\u56E0\u4E3ABSD\u662F\u5DF2\u7ECF\u9009\u5B9A\u4E86TBS\u7684\u6F14\u793A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",
    mdxType: "Figure"
  }, "\u201C\u9009\u62E9\u677F\u8BBE\u7F6E\u201D\u5F39\u51FA\u7A97\u53E3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9009\u5B9A\u7684\u6F14\u793A\u6216BSD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u9009\u62E9\u67D0\u4E2A\u793A\u4F8B\u65F6\uFF0C\u53F3\u4FA7\u90E8\u5206\u663E\u793A\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4EE5\u53CA\u57FA\u4E8E\u793A\u4F8B\u521B\u5EFA\u65B0\u5DE5\u7A0B\u7684\u9009\u9879\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-selected-demo-or-bsd.png",
    mdxType: "Figure"
  }, "\u9009\u5B9A\u7684\u6F14\u793A\u6216BSD\uFF0C\u4EE5\u5176\u63CF\u8FF0\u548C\u9009\u9879"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E94\u7528\u7A0B\u5E8F\u540D\u79F0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u7528\u4E8E\u786E\u5B9A\u65B0\u5DE5\u7A0B\u7684\u540D\u79F0\uFF0C\u4EE5\u53CA\u65B0\u5DE5\u7A0B\u6587\u4EF6\u5939\u7684\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5E94\u7528\u7A0B\u5E8F\u76EE\u5F55`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u7528\u4E8E\u786E\u5B9A\u65B0\u5DE5\u7A0B\u6587\u4EF6\u76EE\u5F55\u5B58\u50A8\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u8272\u6DF1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u4E0B\u62C9\u5217\u8868\u5305\u542B\u6240\u9009\u6F14\u793A\u548CTBS\u6216BSD\u652F\u6301\u7684\u8272\u6DF1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u7248\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8BE5\u4E0B\u62C9\u5217\u8868\u5305\u542B\u6F14\u793A\u6216BSD\u7684\u4E0D\u540C\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5206\u8FA8\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5206\u8FA8\u7387\u7684\u53EF\u9009\u8303\u56F4\u53D6\u51B3\u4E8E\u6240\u9009\u62E9\u7684\u6F14\u793A\u548CTBS\u6216BSD\u3002 \u7A7A\u767DUI+\u4EFF\u771F\u5668\u652F\u63010 x 0\u548C2000 x 2000\u4E4B\u95F4\u7684\u4EFB\u4F55\u5206\u8FA8\u7387\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u521B\u5EFA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6309\u4E0B\u201C\u521B\u5EFA\u201D\u6309\u94AE\uFF0C\u5C06\u57FA\u4E8E\u9009\u5B9A\u6F14\u793A\u4F8B\u7A0B\u548CTBS\u6216BSD\uFF0C\u4EE5\u53CA\u4E0A\u8FF0\u8BBE\u7F6E\u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u5DE5\u7A0B\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);