"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3012],{

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

/***/ 92802:
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
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/interactions-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/interactions-view",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/interactions-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "interactions-view",
    "title": "\u4EA4\u4E92"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u914D\u7F6E\u89C6\u56FE",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/designer-user-guide/config-view"
  },
  "next": {
    "title": "Import & Export",
    "permalink": "/4.20/zh-CN/docs/category/import--export"
  }
};
const assets = {};

const toc = [{
  value: "\u89E6\u53D1\u6761\u4EF6",
  id: "triggers",
  level: 2
}, {
  value: "\u52A8\u4F5C",
  id: "actions",
  level: 2
}, {
  value: "\u4EA4\u4E92\u94FE\u63A5",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EA4\u4E92\u7528\u6765\u8BBE\u7F6E\u89E6\u53D1\u6761\u4EF6\u6EE1\u8DB3\u65F6\u8981\u6267\u884C\u7684\u52A8\u4F5C\u3002 TouchGFX Designer\u4E2D\u7684\u4EA4\u4E92\u7531`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u89E6\u53D1\u6761\u4EF6`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u52A8\u4F5C`), `\u7EC4\u6210\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u89E6\u53D1\u6761\u4EF6`), `\u662F\u5F15\u8D77\u201C\u4EA4\u4E92\u201D\u7684\u6761\u4EF6 - \u662F\u4E3A\u4E86\u8BA9\u201C\u52A8\u4F5C\u201D\u53D1\u751F\uFF0C\u5E94\u7528\u4E2D\u9700\u8981\u53D1\u751F\u7684\u6761\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u52A8\u4F5C`), `\u662F\u89E6\u53D1\u6761\u4EF6\u53D1\u51FA\u65F6\u5C06\u53D1\u751F\u7684\u884C\u52A8\u3002 \u8FD9\u91CC\uFF0C\u60A8\u53EF\u4EE5\u8BBE\u5B9A\u5F53\u6EE1\u8DB3\u60A8\u5B9A\u4E49\u7684\u89E6\u53D1\u6761\u4EF6\u65F6\u5E94\u7528\u8981\u505A\u7684\u4E8B\u60C5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6DFB\u52A0\u4EA4\u4E92\uFF0C\u9700\u8981\u5230\u4EFB\u610F\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u201C\u4EA4\u4E92\u201D\u9009\u9879\u5361\uFF0C\u70B9\u51FB\u5982\u4E0B\u56FE\u6240\u793A\u7684\u201C+\u201D\u6309\u94AE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/add-interaction-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u7684\u201C\u4EA4\u4E92\u201D\u9009\u9879\u5361"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u70B9\u51FB\u201C+\u201D\u6309\u94AE\u540E\uFF0C\u4E0B\u56FE\u6240\u793A\u7684\u4EA4\u4E92\u5185\u5BB9\u5C06\u6DFB\u52A0\u3002 \u201C\u4EA4\u4E92\u8BE6\u60C5\u201D\u89C6\u56FE\uFF08\u5DE6\u4FA7\uFF09\u5305\u542B\u4EA4\u4E92\u7684\u540D\u79F0\u53CA\u53EF\u7528\u914D\u7F6E\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\u4EA4\u4E92\u6982\u8981\u201D\u89C6\u56FE\uFF08\u53F3\u4FA7\uFF09\u4E2D\u6709\u4E00\u6761\u52A8\u6001\u8BF4\u660E\uFF0C\u57FA\u4E8E\u9009\u62E9\u7684\u89E6\u53D1\u6761\u4EF6\u548C\u52A8\u4F5C\u800C\u53D8\u5316\u3002 \u7531\u4E8E\u4E0B\u56FE\u4E2D\u6CA1\u6709\u9009\u5B9A\u89E6\u53D1\u6761\u4EF6\u548C\u52A8\u4F5C\uFF0C\u56E0\u6B64\u52A8\u6001\u8BF4\u660E\u4E3A\u201C\u5F53  \u65E0  \u65E0\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u201C\u4EA4\u4E92\u6982\u8981\u201D\u89C6\u56FE\u4E2D\u5E26\u201Cx\u201D\u56FE\u6807\u7684\u6309\u94AE\u5C06\u5220\u9664\u4EA4\u4E92\uFF0C\u5220\u9664\u524D\u6709\u786E\u8BA4\u7A97\u53E3\u5F39\u51FA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u201C\u4EA4\u4E92\u8BE6\u60C5\u201D\u89C6\u56FE\u4EE5\u5916\u7684\u4EFB\u4F55\u4F4D\u7F6E\u5C06\u6298\u53E0\u89C6\u56FE\u3002 \u70B9\u51FB\u201C\u4EA4\u4E92\u6982\u8981\u201D\u89C6\u56FE\u5C06\u6253\u5F00\u201C\u4EA4\u4E92\u8BE6\u60C5\u201D\u89C6\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/empty-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u4EA4\u4E92\u201D\u9009\u9879\u5361\u4E2D\u7684\u65B0\u4EA4\u4E92"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "triggers"
  }), `\u89E6\u53D1\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7CFB\u7EDF\u57FA\u4E8E\u5F53\u524D\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E2D\u7684\u63A7\u4EF6\u786E\u5B9A\u201C\u89E6\u53D1\u6761\u4EF6\u201D\u4E0B\u62C9\u5217\u8868\u5185\u5BB9\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u7A7A\u5C4F\u5E55\u53EA\u6709\u4E09\u4E2A\u53EF\u7528\u89E6\u53D1\u6761\u4EF6\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u70B9\u51FB\u201C\u786C\u4EF6\u201D\u6309\u94AE`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5C4F\u5E55\u8F6C\u6362\u5F00\u59CB`), `\u4EE5\u53CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5C4F\u5E55\u8F6C\u6362\u7ED3\u675F`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6DFB\u52A0\u63A7\u4EF6\u5C06\u6DFB\u52A0\u4E0E\u8BE5\u63A7\u4EF6\u76F8\u5173\u7684\u89E6\u53D1\u6761\u4EF6\u3002 \u4F8B\u5982\uFF0C\u5728\u5411\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u6DFB\u52A0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `\u6309\u94AE`), `\u63A7\u4EF6\u65F6\uFF0C\u4F1A\u589E\u52A0\u89E6\u53D1\u6761\u4EF6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6309\u94AE\u70B9\u51FB`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u89E6\u53D1\u6761\u4EF6\uFF08\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u6309\u94AE\u70B9\u51FB`), `\uFF09\u8981\u6C42\u9009\u62E9\u7EC4\u4EF6\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u63A7\u4EF6\u4E0E\u89E6\u53D1\u6761\u4EF6\u76F8\u5339\u914D\uFF0C\u5219\u4F1A\u81EA\u52A8\u9009\u4E2D\u8BE5\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-4.17.png",
    mdxType: "Figure"
  }, "\u9009\u62E9\u89E6\u53D1\u6761\u4EF6\u201C\u6309\u94AE\u70B9\u51FB\u201D\u7684\u4EA4\u4E92"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u5728\u9009\u597D\u89E6\u53D1\u6761\u4EF6\u540E\uFF0C\u201C\u4EA4\u4E92\u6982\u8981\u201D\u89C6\u56FE\u4E2D\u7684\u52A8\u6001\u8BF4\u660E\u5DF2\u4ECE\u201C\u5F53 \u65E0 \u65E0\u201D\u66F4\u65B0\u4E3A\u201C\u70B9\u51FB\u6309\u94AE1\u65F6 \u65E0\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "actions"
  }), `\u52A8\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7CFB\u7EDF\u57FA\u4E8E\u6DFB\u52A0\u5230\u5F53\u524D\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u63A7\u4EF6\u786E\u5B9A\u201C\u52A8\u4F5C\u201D\u4E0B\u62C9\u5217\u8868\u5185\u5BB9\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u7A7A\u5C4F\u5E55\u53EA\u6709\u4E94\u79CD\u53EF\u7528\u52A8\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8C03\u7528\u65B0\u7684\u865A\u51FD\u6570`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u66F4\u6362\u5C4F\u5E55`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6267\u884CC++\u4EE3\u7801`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8BBE\u7F6E\u8BED\u8A00`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u7B49\u5F85`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6DFB\u52A0\u63A7\u4EF6\u540E\u4F1A\u589E\u52A0\u4E0E\u4E4B\u76F8\u5173\u7684\u52A8\u4F5C\u3002 \u6DFB\u52A0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `\u6309\u94AE`), `\u63A7\u4EF6\u5C06\u589E\u52A0\u4EE5\u4E0B\u52A8\u4F5C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u79FB\u52A8\u63A7\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6E10\u9690\u63A7\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u9690\u85CF\u63A7\u4EF6`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u663E\u793A\u63A7\u4EF6`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u52A8\u4F5C\uFF08\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u79FB\u52A8\u63A7\u4EF6`), `\uFF09\u8981\u6C42\u9009\u62E9\u7EC4\u4EF6\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u63A7\u4EF6\u4E0E\u8BE5\u52A8\u4F5C\u76F8\u5339\u914D\uFF0C\u5219\u4F1A\u81EA\u52A8\u9009\u4E2D\u8BE5\u63A7\u4EF6\u3002 \u9009\u4E2D\u52A8\u4F5C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u79FB\u52A8\u63A7\u4EF6`), `\u8FD8\u4F1A\u6DFB\u52A0\u66F4\u591A\u4E0E\u63A7\u4EF6\u76F8\u5173\u7684\u5C5E\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-move-button1-action-4.17.png",
    mdxType: "Figure"
  }, "\u201C\u79FB\u52A8\u63A7\u4EF6\u201D\u52A8\u4F5C\u7684\u4EA4\u4E92\u5185\u5BB9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u5728\u9009\u4E2D\u64CD\u4F5C\u540E\uFF0C\u201C\u4EA4\u4E92\u6982\u8981\u201D\u89C6\u56FE\u4E2D\u7684\u52A8\u6001\u8BF4\u660E\u5DF2\u4ECE\u201C\u70B9\u51FB\u6309\u94AE1\u65F6 \u65E0\u201D\u66F4\u65B0\u4E3A\u201C\u70B9\u51FB\u6309\u94AE1\u65F6 \u79FB\u52A8\u6309\u94AE1\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "chaining-interactions"
  }), `\u4EA4\u4E92\u94FE\u63A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EA4\u4E92\u8FD8\u53EF\u4EE5\u7531\u53E6\u4E00\u4E2A\u4EA4\u4E92\u5728\u5B8C\u6210\u5176\u52A8\u4F5C\u65F6\u89E6\u53D1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u4F7F\u80FD\u8BE5\u529F\u80FD\uFF0C\u6807\u8BB0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u53EF\u4EE5\u89E6\u53D1\u53E6\u4E00\u4E2A\u4EA4\u4E92\u201D`), `\u7684\u590D\u9009\u6846\u9700\u8981\u52FE\u9009\uFF0C\u5982\u4E0B\u56FE\u6240\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-can-trigger-another-interaction-enabled-4.17.png",
    mdxType: "Figure"
  }, "\u201D\u542F\u7528\u4E86\u201C\u53EF\u89E6\u53D1\u53E6\u4E00\u4E2A\u4EA4\u4E92\u201D\u7684\u201C\u4EA4\u4E92"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u542F\u7528\u8BE5\u529F\u80FD\u540E\uFF0C\u53EF\u5728\u6B64\u4EA4\u4E92\u5B8C\u6210\u65F6\u89E6\u53D1\u5176\u4ED6\u4EA4\u4E92\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-triggering-on-another-interaction-4.17.png",
    mdxType: "Figure"
  }, "\u4EA4\u4E92\u89E6\u53D1\u53E6\u4E00\u4E2A\u4EA4\u4E92"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);