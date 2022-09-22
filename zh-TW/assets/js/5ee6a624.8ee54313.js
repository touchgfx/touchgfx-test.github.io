"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9321],{

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

/***/ 7913:
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
  id: "model-view-presenter-design-pattern",
  title: "Model-View-Presenter\u8A2D\u8A08\u6A21\u5F0F"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "id": "development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "title": "Model-View-Presenter\u8A2D\u8A08\u6A21\u5F0F",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/model-view-presenter-design-pattern.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "model-view-presenter-design-pattern",
    "title": "Model-View-Presenter\u8A2D\u8A08\u6A21\u5F0F"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Software Architecture",
    "permalink": "/4.20/zh-TW/docs/category/software-architecture"
  },
  "next": {
    "title": "\u87A2\u5E55\u6982\u5FF5",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/software-architecture/screen-definition-and-mvp"
  }
};
const assets = {};

const toc = [];
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u4F7F\u7528\u8005\u4ECB\u9762\u9075\u5FAAModel-View-Presenter\uFF08MVP\uFF09\u67B6\u69CB\u6A21\u5F0F\uFF0C\u5B83\u662FModel-View-Controller\uFF08MVC\uFF09\u6A21\u5F0F\u7684\u884D\u751F\u6A21\u5F0F\u3002 \u5169\u8005\u90FD\u5EE3\u6CDB\u7528\u65BC\u69CB\u5EFA\u4F7F\u7528\u8005\u4ECB\u9762\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MVP\u6A21\u5F0F\u7684\u4E3B\u8981\u512A\u52E2\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u95DC\u6CE8\u9EDE\u5206\u96E2`), `\uFF1A\u7A0B\u5F0F\u78BC\u5206\u6210\u4E0D\u540C\u7684\u90E8\u5206\u63D0\u4F9B\uFF0C\u6BCF\u90E8\u5206\u6709\u81EA\u5DF1\u7684\u4EFB\u52D9\u3002 \u9019\u4F7F\u5F97\u7A0B\u5F0F\u78BC\u66F4\u7C21\u55AE\u3001\u53EF\u91CD\u8907\u4F7F\u7528\u6027\u66F4\u9AD8\u4E14\u66F4\u6613\u65BC\u7DAD\u8B77\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u55AE\u5143\u6E2C\u8A66`), `\uFF1A\u7531\u65BCUI\u7684\u908F\u8F2F\uFF08Presenter\uFF09\u7368\u7ACB\u65BC\u865B\u64EC\u5C64\uFF08View\uFF09\uFF0C\u56E0\u6B64\uFF0C\u55AE\u7368\u6E2C\u8A66\u9019\u4E9B\u90E8\u5206\u6703\u5BB9\u6613\u5F88\u591A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MVP\u4E2D\u5B9A\u7FA9\u4E86\u4E0B\u5217\u4E09\u500B\u985E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Model`), `\u662F\u4E00\u7A2E\u4ECB\u9762\uFF0C\u7528\u65BC\u5B9A\u7FA9\u8981\u5728\u4F7F\u7528\u8005\u4ECB\u9762\u4E0A\u986F\u793A\u6216\u6709\u5176\u4ED6\u5F62\u5F0F\u64CD\u4F5C\u7684\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `View`), `\u662F\u4E00\u7A2E\u88AB\u52D5\u4ECB\u9762\uFF0C\u7528\u65BC\u986F\u793A\u8CC7\u6599\uFF08\u4F86\u81EAModel\uFF09\uFF0C\u4E26\u5C07\u4F7F\u7528\u8005\u6307\u4EE4\uFF08\u4E8B\u4EF6\uFF09\u50B3\u9001\u5230Presenter\u4EE5\u4FBF\u6839\u64DA\u8A72\u8CC7\u6599\u9032\u884C\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Presenter`), `\u7684\u64CD\u4F5C\u53D6\u6C7A\u65BCModel\u548CView\u3002 \u5B83\u5F9E\u5B58\u5132\u5EAB\uFF08Model\uFF09\u6AA2\u7D22\u8CC7\u6599\uFF0C\u4E26\u5C07\u5176\u683C\u5F0F\u5316\u4EE5\u4FBF\u5728\u8996\u5716\u4E2D\u986F\u793A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/software-architecture-mvp/mvp.png",
    noShadow: true,
    mdxType: "Figure"
  }, "Model-View-Presenter\u8A2D\u8A08\u6A21\u5F0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E2D\uFF0C\u5F9EModel\u985E\u57F7\u884C\u8207\u61C9\u7528\u975EUI\u90E8\u5206\uFF08\u9019\u88E1\u7A31\u70BA\u5F8C\u7AEF\u7CFB\u7D71\uFF09\u7684\u901A\u4FE1\u3002 \u5F8C\u7AEF\u7CFB\u7D71\u662F\u5F9EUI\u63A5\u6536\u4E8B\u4EF6\uFF08\u5982\u611F\u6E2C\u5668\u7684\u65B0\u6E2C\u91CF\u503C\uFF09\u548C\u5C07\u4E8B\u4EF6\u8F38\u5165UI\u7684\u8EDF\u9AD4\u5143\u4EF6\u3002 \u5F8C\u7AEF\u7CFB\u7D71\u53EF\u4F5C\u70BA\u55AE\u7368\u7684\u4EFB\u52D9\u5728\u540C\u4E00MCU\u3001\u55AE\u7368\u7684\u8655\u7406\u5668\u3001\u96F2\u6A21\u7D44\u6216\u5176\u4ED6\u786C\u9AD4\u4E0A\u904B\u884C\u3002 \u5F9ETouchGFX\u7684\u89D2\u5EA6\u4F86\u770B\uFF0C\u9019\u4E26\u4E0D\u662F\u5341\u5206\u91CD\u8981\uFF0C\u5B83\u53EA\u8981\u662F\u80FD\u5920\u8207\u4E4B\u901A\u4FE1\u7684\u7D44\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u7684\u7279\u5B9A\u901A\u4FE1\u5354\u5B9A\u4E0D\u53D7TouchGFX\u7BA1\u7406\u3002 \u5B83\u53EA\u63D0\u4F9B\u4E00\u500B\u5728\u6BCF\u500BTouchGFX\u6A19\u8A18\u547C\u53EB\u4E00\u6B21\u7684\u51FD\u6578\uFF0C\u53EF\u4EE5\u5728\u5176\u4E2D\u8655\u7406\u9700\u8981\u7684\u901A\u4FE1\u3002 \u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/backend-communication"
  }), `\u5F8C\u7AEF\u901A\u4FE1`), ` \u77AD\u89E3\u6709\u95DC\u8A72\u4E3B\u984C\u7684\u66F4\u591A\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/software-architecture-mvp/mvp-2.png",
    noShadow: true,
    mdxType: "Figure"
  }, "Model-View-Presenter\u548C\u5916\u90E8\u901A\u4FE1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95DC\u65BC\u5982\u4F55\u5728TouchGFX UI\u958B\u767C\u4E2D\u5BE6\u73FE\u548C\u4F7F\u7528MVP\u7684\u66F4\u591A\u5177\u9AD4\u7D30\u7BC0\uFF0C\u8ACB\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "code-structure"
  }), `\u7A0B\u5F0F\u78BC\u7D50\u69CB`), `\u4E00\u7BC0\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);