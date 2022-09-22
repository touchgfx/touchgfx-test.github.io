"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8317],{

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

/***/ 78006:
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
  id: "interactions-view",
  title: "\u4EA4\u4E92"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/interactions-view",
  "id": "development/ui-development/designer-user-guide/interactions-view",
  "title": "\u4EA4\u4E92",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/interactions-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/interactions-view",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/interactions-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "interactions-view",
    "title": "\u4EA4\u4E92"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u914D\u7F6E\u5716",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/designer-user-guide/config-view"
  },
  "next": {
    "title": "Import & Export",
    "permalink": "/4.20/zh-TW/docs/category/import--export"
  }
};
const assets = {};

const toc = [{
  value: "Triggers (\u89F8\u767C\u689D\u4EF6)",
  id: "triggers",
  level: 2
}, {
  value: "Actions (\u64CD\u4F5C)",
  id: "actions",
  level: 2
}, {
  value: "\u4EA4\u4E92\u4E32\u9023",
  id: "chaining-interactions",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u4EE5\u901A\u904E\u4EA4\u4E92\u4F86\u914D\u7F6E\u89F8\u767C\u689D\u4EF6\u767C\u751F\u6642\u8981\u57F7\u884C\u7684\u64CD\u4F5C\u3002 TouchGFX Designer\u4E2D\u7684\u4EA4\u4E92\u7531`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `trigger (\u89F8\u767C)`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `action (\u64CD\u4F5C)`), `\u7D44\u6210\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u89F8\u767C\u662F\u958B\u59CB\u4EA4\u4E92\u7684\u689D\u4EF6 - \u70BA\u4E86\u8B93\u64CD\u4F5C\u767C\u751F\uFF0C\u61C9\u7528\u4E2D\u9700\u8981\u767C\u751F\u7684\u689D\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u64CD\u4F5C`), `\u662F\u89F8\u767C\u689D\u4EF6\u767C\u51FA\u6642\u5C07\u767C\u751F\u7684\u884C\u52D5\u3002 \u5728\u9019\u88E1\uFF0C\u60A8\u53EF\u4EE5\u6C7A\u5B9A\u7576\u6EFF\u8DB3\u60A8\u5B9A\u7FA9\u7684\u89F8\u767C\u689D\u4EF6\u61C9\u7528\u4E2D\u767C\u751F\u7684\u60C5\u6CC1\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u6DFB\u52A0\u4EA4\u4E92\uFF0C\u8F49\u81F3\u4EFB\u610F\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u7684\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\uFF0C\u9EDE\u64CA\u5982\u4E0B\u5716\u6240\u793A\u7684\u201C+\u201D\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/add-interaction-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u7684\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9EDE\u64CA\u201C+\u201D\u6309\u9215\u5F8C\uFF0C\u5C07\u6DFB\u52A0\u4E0B\u5716\u4E2D\u7684\u4EA4\u4E92\u3002 \u201C\u4EA4\u4E92\u8A73\u60C5\u201D\u5217\u8868\uFF08\u5DE6\u5074\uFF09\u5305\u542B\u4EA4\u4E92\u7684\u7D66\u5B9A\u540D\u7A31\u548C\u53EF\u7528\u914D\u7F6E\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u4EA4\u4E92\u6982\u8981\u201D\uFF08\u53F3\u5074\uFF09\u4E2D\u6709\u4E00\u689D\u52D5\u614B\u8AAA\u660E\uFF0C\u6703\u57FA\u65BC\u9078\u64C7\u7684\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C\u9032\u884C\u4FEE\u6539\u3002 \u7531\u65BC\u4E0B\u5716\u4E2D\u6C92\u6709\u9078\u64C7\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C\uFF0C\u56E0\u6B64\u52D5\u614B\u8AAA\u660E\u70BA\u201CWhen none none\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u201C\u4EA4\u4E92\u6982\u8981\u201D\u4E2D\u5E36\u5341\u5B57\u5716\u793A\u7684\u6309\u9215\u5C07\u522A\u9664\u4EA4\u4E92\uFF0C\u522A\u9664\u524D\u986F\u793A\u78BA\u8A8D\u5F48\u7A97\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u201C\u4EA4\u4E92\u8A73\u60C5\u201D\u8996\u5716\u4EE5\u5916\u7684\u4EFB\u4F55\u4F4D\u7F6E\u5C07\u6298\u758A\u8996\u5716\u3002 \u9EDE\u64CA\u201C\u4EA4\u4E92\u6982\u8981\u201D\u8996\u5716\u5C07\u6253\u958B\u201C\u4EA4\u4E92\u8A73\u60C5\u201D\u8996\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/empty-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\u4E2D\u7684\u65B0\u4EA4\u4E92"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "triggers"
  }), `Triggers (\u89F8\u767C\u689D\u4EF6)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7CFB\u7D71\u57FA\u65BC\u6DFB\u52A0\u5230\u7576\u524D\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u7684\u5C0F\u5DE5\u5177\u586B\u5145\u201C\u89F8\u767C\u689D\u4EF6\u201D\u4E0B\u62C9\u6E05\u55AE\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u7A7A\u87A2\u5E55\u5C07\u53EA\u6709\u4E09\u500B\u53EF\u7528\u89F8\u767C\u689D\u4EF6\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u9EDE\u64CA\u201C\u786C\u9AD4\u201D\u6309\u9215`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u87A2\u5E55\u8F49\u63DB\u958B\u59CB`), `\u4EE5\u53CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u87A2\u5E55\u8F49\u63DB\u7D50\u675F`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6DFB\u52A0\u5C0F\u5DE5\u5177\u5C07\u6DFB\u52A0\u8207\u4E4B\u76F8\u95DC\u7684\u89F8\u767C\u689D\u4EF6\u3002 \u4F8B\u5982\uFF0C\u5728\u5411\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u6DFB\u52A0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `\u6309\u9215`), `\u5C0F\u5DE5\u5177\u6642\uFF0C\u6703\u6DFB\u52A0\u89F8\u767C\u689D\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6309\u9215\u9EDE\u64CA`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u89F8\u767C\u689D\u4EF6\uFF08\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6309\u9215\u9EDE\u64CA`), `\uFF09\u8981\u6C42\u9078\u64C7\u5143\u4EF6\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u500B\u5C0F\u5DE5\u5177\u8207\u89F8\u767C\u689D\u4EF6\u76F8\u5339\u914D\uFF0C\u5247\u6703\u81EA\u52D5\u9078\u4E2D\u8A72\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-4.17.png",
    mdxType: "Figure"
  }, "\u5728\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\u4E0A\u9078\u4E2D\u4E86\u89F8\u767C\u689D\u4EF6\u201C\u6309\u9215\u9EDE\u64CA\u201D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u5716\u6240\u793A\uFF0C\u5728\u9078\u4E2D\u89F8\u767C\u689D\u4EF6\u5F8C\uFF0C\u201C\u4EA4\u4E92\u6982\u8981\u201D\u4E2D\u7684\u52D5\u614B\u8AAA\u660E\u5DF2\u5F9EWhen none none\u201D\u66F4\u65B0\u70BA\u201CWhen button1 clicked none\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "actions"
  }), `Actions (\u64CD\u4F5C)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7CFB\u7D71\u4E5F\u57FA\u65BC\u6DFB\u52A0\u5230\u7576\u524D\u87A2\u5E55\u6216\u81EA\u8A02\u5BB9\u5668\u7684\u5C0F\u5DE5\u5177\u586B\u5145\u201C\u64CD\u4F5C\u201D\u4E0B\u62C9\u6E05\u55AE\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u7A7A\u87A2\u5E55\u5C07\u53EA\u6709\u4E94\u500B\u53EF\u7528\u64CD\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u547C\u53EB\u65B0\u7684\u865B\u51FD\u6578`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u66F4\u6539\u87A2\u5E55`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u57F7\u884CC++\u7A0B\u5F0F\u78BC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8A2D\u5B9A\u8A9E\u8A00`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7B49\u5F85`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6DFB\u52A0\u5C0F\u5DE5\u5177\u6703\u6DFB\u52A0\u8207\u4E4B\u76F8\u95DC\u7684\u64CD\u4F5C\u3002 \u6DFB\u52A0\u5C0F\u5DE5\u5177`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `\u6309\u9215`), `\u5C07\u6DFB\u52A0\u4EE5\u4E0B\u64CD\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u79FB\u52D5\u5C0F\u5DE5\u5177`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6F38\u96B1\u5C0F\u5DE5\u5177`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u96B1\u85CF\u5C0F\u5DE5\u5177`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u986F\u793A\u5C0F\u5DE5\u5177`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u64CD\u4F5C\uFF08\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u79FB\u52D5\u5C0F\u5DE5\u5177`), `\uFF09\u8981\u6C42\u9078\u64C7\u5143\u4EF6\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u500B\u5C0F\u5DE5\u5177\u8207\u64CD\u4F5C\u76F8\u5339\u914D\uFF0C\u5247\u6703\u81EA\u52D5\u9078\u4E2D\u8A72\u5C0F\u5DE5\u5177\u3002 \u9078\u4E2D\u64CD\u4F5C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u79FB\u52D5\u5C0F\u5DE5\u5177`), `\u9084\u6703\u6DFB\u52A0\u66F4\u591A\u8207\u79FB\u52D5\u5C0F\u5DE5\u5177\u76F8\u95DC\u7684\u5C6C\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-move-button1-action-4.17.png",
    mdxType: "Figure"
  }, "\u5728\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\u4E0A\u9078\u4E2D\u4E86\u79FB\u52D5\u5C0F\u5DE5\u5177\u64CD\u4F5C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u5716\u6240\u793A\uFF0C\u5728\u9078\u4E2D\u64CD\u4F5C\u5F8C\uFF0C\u201C\u4EA4\u4E92\u6982\u8981\u201D\u4E2D\u7684\u52D5\u614B\u8AAA\u660E\u5DF2\u5F9E\u201CWhen button1 clicked none \u7121\u201D\u66F4\u65B0\u70BA\u201CWhen button1 clicked move button1\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "chaining-interactions"
  }), `\u4EA4\u4E92\u4E32\u9023`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EA4\u4E92\u9084\u53EF\u4EE5\u7531\u53E6\u4E00\u500B\u4EA4\u4E92\u5728\u5B8C\u6210\u5176\u64CD\u4F5C\u6642\u89F8\u767C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u555F\u52D5\u8A72\u529F\u80FD\uFF0C\u6A19\u8A18`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u53EF\u4EE5\u89F8\u767C\u53E6\u4E00\u500B\u4EA4\u4E92`), `\u7684\u6838\u53D6\u65B9\u584A\u9700\u8981\u52FE\u9078\uFF0C\u5982\u4E0B\u5716\u6240\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-can-trigger-another-interaction-enabled-4.17.png",
    mdxType: "Figure"
  }, "\u5728\u201C\u4EA4\u4E92\u201D\u9078\u9805\u5361\u4E0A\u555F\u7528\u4E86\u201C\u53EF\u89F8\u767C\u53E6\u4E00\u500B\u4EA4\u4E92\u201D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u555F\u7528\u6B64\u529F\u80FD\u5F8C\uFF0C\u53EF\u5728\u6B64\u4EA4\u4E92\u5B8C\u6210\u6642\u89F8\u767C\u5176\u4ED6\u4EA4\u4E92\uFF0C\u5982\u4E0B\u5716\u6240\u793A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-triggering-on-another-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u901A\u904E\u53E6\u4E00\u500B\u4EA4\u4E92\u89F8\u767C\u4EA4\u4E92"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);