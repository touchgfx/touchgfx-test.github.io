"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4987],{

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

/***/ 9844:
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
  title: "\u4E3B\u4ECB\u9762"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/startup-window",
  "id": "development/ui-development/designer-user-guide/startup-window",
  "title": "\u4E3B\u4ECB\u9762",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/startup-window.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/startup-window",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/startup-window",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "startup-window",
    "title": "\u4E3B\u4ECB\u9762"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Designer User Guide",
    "permalink": "/4.20/zh-TW/docs/category/designer-user-guide"
  },
  "next": {
    "title": "\u6A94\u6848\u9078\u55AE",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/file-menu"
  }
};
const assets = {};


const toc = [{
  value: "Home (\u4E3B\u9801)",
  id: "home",
  level: 2
}, {
  value: "Create (\u5275\u5EFA)",
  id: "create",
  level: 2
}, {
  value: "Examples (\u7BC4\u4F8B)",
  id: "examples",
  level: 2
}, {
  value: "Demos (\u6F14\u793A)",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u4ECB\u9762\u662F\u555F\u52D5TouchGFX Designer\u6642\u51FA\u73FE\u7684\u7B2C\u4E00\u500B\u8996\u7A97\u3002 \u5F9E\u4E3B\u4ECB\u9762\u53EF\u4EE5\u5275\u5EFA\u65B0\u7684\u5C08\u6848\u3001\u63A2\u7D22\u6F14\u793A\u5C08\u6848\u4EE5\u53CA\u6253\u958B\u73FE\u6709\u5C08\u6848\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\u6309CTRL + N\u5F9E\u6253\u958B\u7684\u5C08\u6848\u4E2D\u9032\u5165\u4E3B\u4ECB\u9762`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E00\u6B21\u904B\u884CTouchGFX Designer\u6642\uFF0C\u5728\u9032\u5165\u4E3B\u4ECB\u9762\u524D\u6703\u5F48\u51FA\u6B61\u8FCE\u8996\u7A97\u4E26\u986F\u793A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#theme"
  }), `\u6DFA\u8272\u548C\u6DF1\u8272\u4E3B\u984C`), `\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-welcome-pop-up.png",
    width: "630",
    height: "455",
    mdxType: "Figure"
  }, "\u6B61\u8FCE\u8996\u7A97"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-theme-selector-pop-up.png",
    width: "630",
    height: "420",
    mdxType: "Figure"
  }, "\u4E3B\u984C\u9078\u64C7\u8996\u7A97"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "home"
  }), `Home (\u4E3B\u9801)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201CHome\u201D\u9078\u9805\u5361\u4E2D\uFF0C\u53EF\u4EE5\u57FA\u65BC\u6700\u8FD1\u4F7F\u7528\u7684TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\uFF08TBS\uFF09\u5275\u5EFA\u65B0\u5C08\u6848\uFF0C\u4E5F\u53EF\u4EE5\u6253\u958B\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-home.png",
    mdxType: "Figure"
  }, "\u4E3B\u4ECB\u9762\u4E2D\u7684\u201CHome\u201D\u9078\u9805\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Recently used TouchGFX Board Setups`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u5728\u8A72\u5340\u57DF\uFF0C\u53EF\u4EE5\u9078\u64C7\u5728\u6700\u8FD1\u7684\u5C08\u6848\u4E2D\u4F7F\u7528\u7684TBS\uFF0C\u4E26\u53EF\u7D50\u5408\u7A7A\u767DUI\u7528\u65BC\u5275\u5EFA\u65B0\u5C08\u6848\u3002 \u9078\u64C7TBS\u6642\u6240\u986F\u793A\u7684\u9078\u9805\u8207\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#create"
  }), `\u201CCreate\u201D`), `\u4E0B\u9078\u64C7TBS\u6642\u6240\u986F\u793A\u7684\u9078\u9805\u76F8\u540C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `My Recent Projects`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u4F7F\u7528\u8005\u53EF\u5728\u9019\u500B\u5340\u57DF\u5FEB\u901F\u6253\u958B\u6700\u8FD1\u7684\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Open`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6309\u4E0B\u201COpen\u201D\u6309\u9215\u5C07\u6253\u958B\u4E00\u500B\u6A94\u6848\u700F\u89BD\u5668\uFF0C\u53EF\u4EE5\u624B\u52D5\u700F\u89BD\u4E26\u6253\u958B. touchfx\u5C08\u6848\u6A94\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create New`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6309\u4E0B\u201CCreate New\u201D\u6309\u9215\u5C07\u4E3B\u4ECB\u9762\u4E2D\u7684\u201CHome\u201D\u9078\u9805\u5361\u6539\u70BA\u201CCreate\u201D\u9078\u9805\u5361\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "create"
  }), `Create (\u5275\u5EFA)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201CCreate \u201D\u9078\u9805\u5361\u4E2D\uFF0C\u53EF\u4EE5\u9078\u64C7TBS\u8207\u7A7A\u767DUI\u4E00\u8D77\u7528\u65BC\u65B0\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create.png",
    mdxType: "Figure"
  }, "\u4E3B\u4ECB\u9762\u4E2D\u7684\u201CCreate\u201D\u9078\u9805\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u641C\u7D22\u6B04`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u641C\u7D22\u6B04\u7528\u65BC\u6839\u64DA\u958B\u767C\u677F\u540D\u7A31\u7BE9\u9078TBS\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "\u641C\u7D22\u6B04"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u751F\u7522\u5546\u7BE9\u9078\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u751F\u7522\u5546\u7BE9\u9078\u5668\u5206\u70BA\u4E09\u500B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-filter.png",
    mdxType: "Figure"
  }, "\u751F\u7522\u5546\u7BE9\u9078\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6839\u64DA\u9078\u5B9A\u7684\u7BE9\u9078\u5668\uFF0C\u986F\u793ATBS\u6E05\u55AE\u3002 \u6BCF\u500BTBS\u4E2D\u986F\u793A\u7684\u5C6C\u6027\u5305\u62EC\u540D\u7A31\u3001\u4F5C\u696D\u7CFB\u7D71\u548C\u89E3\u6790\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-list.png",
    mdxType: "Figure"
  }, "TBS\u5217\u8868\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9078\u5B9A\u7684TBS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9078\u64C7\u67D0\u500BTBS\u6642\uFF0C\u53F3\u5074\u90E8\u5206\u986F\u793A\u95DC\u65BC\u8A72TBS\u7684\u8A73\u7D30\u8CC7\u8A0A\uFF0C\u4EE5\u53CA\u57FA\u65BCTBS\u5275\u5EFA\u65B0\u5C08\u6848\u7684\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-info-and-create.png",
    mdxType: "Figure"
  }, "\u9078\u5B9A\u7684TBS\u4EE5\u53CA\u63CF\u8FF0\u548C\u9078\u9805"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u9019\u5C07\u78BA\u5B9A\u65B0\u5C08\u6848\u7684\u540D\u7A31\uFF0C\u4EE5\u53CA\u5305\u542B\u65B0\u5C08\u6848\u7684\u8CC7\u6599\u593E\u7684\u540D\u7A31\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Directory`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9019\u5C07\u6C7A\u5B9A\u65B0\u5C08\u6848\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u4E0B\u62C9\u6E05\u55AE\u5305\u542B\u6240\u9078TBS\u652F\u63F4\u7684\u8272\u5F69\u6DF1\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Versions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u4E0B\u62C9\u6E05\u55AE\u5305\u542B\u6240\u9078TBS\u652F\u63F4\u7684\u4E0D\u540C\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Resolution`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u89E3\u6790\u5EA6\u7684\u8ABF\u6574\u53D6\u6C7A\u65BC\u6240\u9078\u64C7\u7684TBS\u3002 \u6A21\u64EC\u5668TBS\u652F\u63010 x 0\u548C2000 x 2000\u4E4B\u9593\u7684\u4EFB\u4F55\u89E3\u6790\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Pressing the Create button, creates a new project based on the selected TBS and Blank UI, with the settings from above.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `Examples (\u7BC4\u4F8B)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201CExamples\u201D\u9078\u9805\u5361\u4E2D\uFF0C\u53EF\u4EE5\u57FA\u65BC\u7BC4\u4F8B\u548CTBS\u5275\u5EFA\u65B0\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples.png",
    mdxType: "Figure"
  }, "\u4E3B\u4ECB\u9762\u4E2D\u7684\u201CExamples\u201D\u9078\u9805\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u641C\u7D22\u6B04`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u641C\u7D22\u6B04\u7528\u65BC\u6309\u540D\u7A31\u7BE9\u9078\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "\u641C\u7D22\u6B04"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u7BC4\u4F8B\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6839\u64DA\u9078\u5B9A\u7684\u7BE9\u9078\u5668\uFF0C\u986F\u793A\u7BC4\u4F8B\u6E05\u55AE\u3002 \u6BCF\u500B\u7BC4\u4F8B\u4E2D\u986F\u793A\u7684\u5C6C\u6027\u5305\u62EC\u540D\u7A31\u4EE5\u53CA\u7BC4\u4F8B\u76F8\u5BB9\u7684\u89E3\u6790\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-example-list.png",
    mdxType: "Figure"
  }, "\u7BC4\u4F8B\u5217\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Select Board Setup`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u201CSelect Board Setup\u201D\u6309\u9215\u53EF\u6253\u958B\u4E00\u500B\u8996\u7A97\uFF0C\u53EF\u5728\u5176\u4E2D\u9078\u64C7TBS\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",
    mdxType: "Figure"
  }, "\u201CSelect Board Setup\u201D\u8996\u7A97"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u641C\u7D22\u6B04`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u641C\u7D22\u6B04\u7528\u65BC\u6309\u540D\u7A31\u7BE9\u9078TBS\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u751F\u7522\u5546\u7BE9\u9078\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u751F\u7522\u5546\u7BE9\u9078\u5668\u5206\u70BA\u4E09\u500B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS\u5217\u8868`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6839\u64DA\u9078\u5B9A\u7684\u7BE9\u9078\u5668\uFF0C\u986F\u793ATBS\u6E05\u55AE\u3002 \u6BCF\u500BTBS\u4E2D\u986F\u793A\u7684\u5C6C\u6027\u5305\u62EC\u540D\u7A31\u3001\u4F5C\u696D\u7CFB\u7D71\u548C\u89E3\u6790\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS\u8CC7\u8A0A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9078\u64C7\u67D0\u500BTBS\u6642\uFF0C\u53F3\u5074\u90E8\u5206\u986F\u793A\u95DC\u65BC\u8A72TBS\u7684\u8A73\u7D30\u8CC7\u8A0A\uFF0C\u4EE5\u53CA\u7528\u65BC\u8A2D\u7F6E\u7248\u672C\u7684\u9078\u9805\u3002\u6309\u201CSelect \u201D\u6309\u9215\u4F86\u9078\u64C7TBS\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u9078\u5B9A\u7684TBS\uFF0C\u800C\u4E0D\u662F\u201CSelect Board Setup\u201D\u6309\u9215\uFF0C\u89E3\u6790\u5EA6\u4E0D\u5339\u914D\u7684\u7BC4\u4F8B\u986F\u793A\u70BA\u7070\u8272\u72C0\u614B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-board.png",
    mdxType: "Figure"
  }, "\u9802\u90E8\u986F\u793A\u7BC4\u4F8B\u6E05\u55AE\u8207\u9078\u5B9A\u7684TBS\uFF0C\u89E3\u6790\u5EA6\u8207TBS\u4E0D\u76F8\u5BB9\u7684\u7BC4\u4F8B\u5247\u986F\u793A\u70BA\u7070\u8272\u72C0\u614B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9078\u5B9A\u7684\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u9078\u64C7\u67D0\u500B\u7BC4\u4F8B\u6642\uFF0C\u53F3\u5074\u90E8\u5206\u986F\u793A\u8CC7\u8A0A\uFF0C\u4EE5\u53CA\u57FA\u65BC\u7BC4\u4F8B\u5275\u5EFA\u65B0\u5C08\u6848\u7684\u9078\u9805\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-example.png",
    mdxType: "Figure"
  }, "\u986F\u793A\u9078\u5B9A\u7BC4\u4F8B\u7684\u8CC7\u8A0A\u548C\u9078\u9805"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u9019\u5C07\u78BA\u5B9A\u65B0\u5C08\u6848\u7684\u540D\u7A31\uFF0C\u4EE5\u53CA\u5305\u542B\u65B0\u5C08\u6848\u7684\u8CC7\u6599\u593E\u7684\u540D\u7A31\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Directory`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9019\u5C07\u6C7A\u5B9A\u65B0\u5C08\u6848\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u4E0B\u62C9\u6E05\u55AE\u5305\u542B\u6240\u9078\u7BC4\u4F8B\u548CTBS\u652F\u63F4\u7684\u8272\u5F69\u6DF1\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Versions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u4E0B\u62C9\u6E05\u55AE\u5305\u542B\u7BC4\u4F8B\u7684\u4E0D\u540C\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Resolution`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u89E3\u6790\u5EA6\u7684\u8ABF\u6574\u53D6\u6C7A\u65BC\u6240\u9078\u64C7\u7684\u7BC4\u4F8B\u548CTBS\u3002 \u7A7A\u767DUI+\u6A21\u64EC\u5668\u652F\u63F40 x 0\u52302000 x 2000\u4E4B\u9593\u7684\u4EFB\u4F55\u89E3\u6790\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6309\u4E0B\u201CCreate\u201D\u6309\u9215\uFF0C\u57FA\u65BC\u9078\u5B9A\u7684\u7BC4\u4F8B\u3001TBS\u4EE5\u53CA\u4E0A\u8FF0\u8A2D\u7F6E\u5275\u5EFA\u4E00\u500B\u65B0\u7684\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "demos"
  }), `Demos (\u6F14\u793A)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u201CDemos\u201D\u9078\u9805\u5361\u4E2D\uFF0C\u53EF\u4EE5\u57FA\u65BC\u6F14\u793A\u548CTBS\u6216\u958B\u767C\u677F\u7279\u5B9A\u6F14\u793A\uFF08BSD\uFF09\u5275\u5EFA\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo.png",
    mdxType: "Figure"
  }, "\u4E3B\u4ECB\u9762\u4E2D\u201C\u6F14\u793A\u201D\u9078\u9805\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6F14\u793A\u7BE9\u9078\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u5728\u9802\u90E8\u7684\u7BE9\u9078\u5668\u4E2D\uFF0C\u53EF\u4EE5\u9078\u64C7\u201CDemo \u201D\u6216\u201CBoard Specific Demo (BSD)\u201D\uFF0C\u9032\u800C\u986F\u793A\u6F14\u793A\u6216BSD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-filter.png",
    mdxType: "Figure"
  }, "\u6F14\u793A\u7BE9\u9078\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u641C\u7D22\u6B04`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u641C\u7D22\u6B04\u7528\u65BC\u6309\u540D\u7A31\u7BE9\u9078\u6F14\u793A\u6216BSD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "\u641C\u7D22\u6B04"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6F14\u793A\u6E05\u55AE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6839\u64DA\u9078\u5B9A\u7684\u7BE9\u9078\u5668\uFF0C\u986F\u793A\u6F14\u793A\u6E05\u55AE\u3002 \u6BCF\u500B\u6F14\u793A\u6216BSD\u4E2D\u986F\u793A\u7684\u5C6C\u6027\u5305\u62EC\u540D\u7A31\u548C\u8981\u6C42\u7684\u89E3\u6790\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo-list.png",
    mdxType: "Figure"
  }, "\u61C9\u7528\u4E86\u6F14\u793A\u7BE9\u9078\u5668\u7684\u6F14\u793A\u6E05\u55AE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-board-specific-demo-list.png",
    mdxType: "Figure"
  }, "\u61C9\u7528\u4E86\u201CBoard Specific Demo (BSD)\u201D\u7BE9\u9078\u5668\u7684\u6F14\u793A\u6E05\u55AE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Select Board Setup`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u201CSelect Board Setup\u201D\u6309\u9215\u53EF\u6253\u958B\u4E00\u500B\u8996\u7A97\uFF0C\u53EF\u5728\u5176\u4E2D\u9078\u64C7TBS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",
    mdxType: "Figure"
  }, "\u201CSelect Board Setup\u201D\u8996\u7A97"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9078\u5B9A\u7684\u6F14\u793A\u6216BSD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9078\u64C7\u67D0\u500B\u7BC4\u4F8B\u6642\uFF0C\u53F3\u5074\u90E8\u5206\u986F\u793A\u63CF\u8FF0\u8CC7\u8A0A\uFF0C\u4EE5\u53CA\u57FA\u65BC\u7BC4\u4F8B\u5275\u5EFA\u65B0\u5C08\u6848\u7684\u9078\u9805\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-selected-demo-or-bsd.png",
    mdxType: "Figure"
  }, "\u9078\u5B9A\u7684\u6F14\u793A\u6216BSD\uFF0C\u4EE5\u53CA\u8CC7\u8A0A\u548C\u9078\u9805"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u9019\u5C07\u78BA\u5B9A\u65B0\u5C08\u6848\u7684\u540D\u7A31\uFF0C\u4EE5\u53CA\u5305\u542B\u65B0\u5C08\u6848\u7684\u8CC7\u6599\u593E\u7684\u540D\u7A31\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Directory`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u9019\u5C07\u6C7A\u5B9A\u65B0\u5C08\u6848\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u4E0B\u62C9\u6E05\u55AE\u5305\u542B\u6240\u9078\u6F14\u793A\u548CTBS\u6216BSD\u652F\u63F4\u7684\u8272\u5F69\u6DF1\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Versions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u4E0B\u62C9\u6E05\u55AE\u5305\u542B\u6F14\u793A\u6216BSD\u7684\u4E0D\u540C\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Resolution`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u89E3\u6790\u5EA6\u7684\u8ABF\u6574\u53D6\u6C7A\u65BC\u6240\u9078\u64C7\u7684TBS\u6216BSD\u3002 \u7A7A\u767DUI+\u6A21\u64EC\u5668\u652F\u63F40 x 0\u52302000 x 2000\u4E4B\u9593\u7684\u4EFB\u4F55\u89E3\u6790\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6309\u4E0B\u201CCreate\u201D\u6309\u9215\uFF0C\u57FA\u65BC\u9078\u5B9A\u7684\u6F14\u793A\u548CTBS\u6216BSD\uFF0C\u4EE5\u53CA\u4E0A\u8FF0\u8A2D\u7F6E\u5275\u5EFA\u4E00\u500B\u65B0\u7684\u5C08\u6848\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);