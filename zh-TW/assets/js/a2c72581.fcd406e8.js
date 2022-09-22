"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7630],{

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

/***/ 49079:
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
  id: "memory-usage",
  title: "\u8A18\u61B6\u9AD4\u4F7F\u7528"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/memory-usage",
  "id": "basic-concepts/memory-usage",
  "title": "\u8A18\u61B6\u9AD4\u4F7F\u7528",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/memory-usage.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/memory-usage",
  "permalink": "/4.20/zh-TW/docs/basic-concepts/memory-usage",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "memory-usage",
    "title": "\u8A18\u61B6\u9AD4\u4F7F\u7528"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4F5C\u696D\u7CFB\u7D71",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/operating-system"
  },
  "next": {
    "title": "\u958B\u767C\u7C21\u4ECB",
    "permalink": "/4.20/zh-TW/docs/development/development-introduction"
  }
};
const assets = {};

const toc = [{
  value: "\u524D\u8A00",
  id: "introduction",
  level: 2
}, {
  value: "\u975C\u614B\u5B58\u5132\u5206\u914D",
  id: "static-memory-allocation",
  level: 2
}, {
  value: "Screen\u548CWidget",
  id: "screens-and-widgets",
  level: 3
}, {
  value: "\u61C9\u7528\u7A0B\u5F0F\u7A0B\u5F0F\u78BC",
  id: "application-code",
  level: 3
}, {
  value: "\u8CC7\u7522",
  id: "assets",
  level: 3
}, {
  value: "\u6AA2\u67E5\u5B58\u5132\u7A7A\u9593\u4F7F\u7528\u91CF",
  id: "checking-memory-usage",
  level: 2
}, {
  value: "\u5167\u90E8RAM",
  id: "internal-ram",
  level: 3
}, {
  value: "Internal Flash",
  id: "internal-flash",
  level: 3
}, {
  value: "\u5916\u90E8Flash",
  id: "external-flash",
  level: 3
}, {
  value: "\u7E3D\u7D50",
  id: "summary",
  level: 3
}, {
  value: "Demo 1",
  id: "demo-1",
  level: 2
}, {
  value: "\u7E3D\u7D50",
  id: "summary-1",
  level: 3
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "introduction"
  }), `\u524D\u8A00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u672C\u7BC0\u4E2D\uFF0C\u6211\u5011\u5C07\u8A0E\u8AD6TouchGFX\u61C9\u7528\u7684\u5B58\u5132\u7A7A\u9593\u4F7F\u7528\u91CF\u3002 \u5178\u578B\u7684TouchGFX\u61C9\u7528\u4F7F\u75284\u985E\u8A18\u61B6\u9AD4\uFF0C\u4F46\u9019\u53D6\u6C7A\u65BC\u4F7F\u7528\u7684\u786C\u9AD4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8A18\u61B6\u9AD4\u985E\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u7528`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5167\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5167\u90E8RAM\u7528\u65BC\u5B58\u5132\u914D\u7F6E\u8CC7\u6599\uFF0C\u5982\u6240\u6709Widget\u7684\u5EA7\u6A19\u548C\u8272\u5F69\u3002 \u9019\u88E1\u5B58\u5132\u4E86\u7576\u524D\u87A2\u5E55\u7684\u5E7E\u500B\u7269\u4EF6\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u5305\u542BUI\u4EFB\u52D9\u57F7\u884C\u6642\u9593stack\u7684\u4F5C\u696D\u7CFB\u7D71\u8A18\u61B6\u9AD4\u4E5F\u4F4D\u65BC\u5167\u90E8RAM\u4E2D\u3002 \u5176\u4ED6\u8EDF\u9AD4\u5143\u4EF6\u7684\u6240\u6709\u8CC7\u6599\uFF08\u5982\u6A94\u6848\u7CFB\u7D71\u548C\u986F\u793A\u5668\u9A45\u52D5\uFF09\u540C\u6A23\u4F4D\u65BC\u5167\u90E8RAM\u4E2D\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Internal Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7528\u65BC\u5B58\u5132\u61C9\u7528\u7A0B\u5F0F\u78BC\u3001TouchGFX\u5EAB\u548C\u4F7F\u7528\u7684\u5176\u4ED6\u5EAB\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u901A\u5E38\u7528\u65BC\u63D0\u4F9B\u5F71\u50CF\u7DE9\u885D\uFF0C\u4E5F\u53EF\u4EE5\u662F\u9EDE\u9663\u5716\u5FEB\u53D6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7528\u65BC\u5B58\u5132\u5716\u50CF\u3001\u5B57\u9AD4\u548C\u6587\u5B57\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "static-memory-allocation"
  }), `\u975C\u614B\u5B58\u5132\u5206\u914D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u53EA\u4F7F\u7528\u975C\u614B\u5B58\u5132\u5206\u914D\u3002 \u9019\u610F\u5473\u8457\u6240\u6709\u5B58\u5132\u7A7A\u9593\u90FD\u662F\u9810\u5148\u5206\u914D\u7684\u3002 TouchGFX\u5728\u57F7\u884C\u6642\u9593\u4E2D\u4E0D\u9032\u884C\u5B58\u5132\u7A7A\u9593\u5206\u914D\u3002 \u5982\u679C\u61C9\u7528\u53EF\u4EE5\u4E00\u958B\u59CB\u5C31\u5D4C\u5165\u8A18\u61B6\u9AD4\uFF0C\u5247\u53EF\u78BA\u4FDD\u6C38\u9060\u4E0D\u6703\u7121\u5B58\u5132\u7A7A\u9593\u53EF\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "screens-and-widgets"
  }), `Screen\u548CWidget`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728TouchGFX\u4E2D\uFF0C\u901A\u904E\u958B\u767C\u8A31\u591AC++\u985E\u4F86\u5275\u5EFA\u4F7F\u7528\u8005\u4ECB\u9762\u3002 TouchGFX Designer\u5728\u60A8\u8A2D\u8A08\u4ECB\u9762\u6642\u5275\u5EFA\u985E\u3002 For each screen designed in TouchGFX Designer you automatically get a number of classes (the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/software-architecture/model-view-presenter-design-pattern"
  }), `MVP`), ` architecture). When you show a screen on the display objects of the classes is automatically allocated by TouchGFX in internal RAM.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u5F9E\u4E00\u500B\u4ECB\u9762\u5207\u63DB\u5230\u53E6\u4E00\u500B\u4ECB\u9762\u6642\uFF0C\u4E0D\u518D\u4F7F\u7528\u70BA\u4E0A\u4E00\u500B\u4ECB\u9762\u5206\u914D\u7684\u7269\u4EF6\uFF0C\u800C\u53EA\u4F7F\u7528\u65B0\u4ECB\u9762\u7684\u7269\u4EF6\u3002 \u56E0\u6B64\uFF0C\u5C07\u5728\u5167\u90E8RAM\u4E2D\u820A\u7269\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E\u5206\u914D\u65B0\u7269\u4EF6\uFF08\u820A\u7269\u4EF6\u88AB\u8986\u84CB\uFF09\u3002 \u5167\u90E8RAM\u50C5\u5728\u4E00\u500B\u6642\u9593\u9EDE\u4FDD\u5B58\u4E00\u500B\u986F\u793A\u5668\u7684\u7269\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6839\u64DA\u5B9A\u7FA9\u7684\u985E\uFF0CC++\u7DE8\u8B6F\u5668\u80FD\u5920\u8A08\u7B97\u6700\u5927\u4ECB\u9762\u985E\u7684\u5927\u5C0F\uFF0C\u4E26\u70BA\u9019\u4E9B\u985E\u9810\u7559\u5B58\u5132\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u5167\u90E8RAM\u4E2D\u7684\u5B58\u5132\u7A7A\u9593\u4F7F\u7528\u91CF\u4E0D\u53D6\u6C7A\u65BC\u61C9\u7528\u4E2D\u4ECB\u9762\u7684\u6578\u91CF\uFF0C\u800C\u662F\u53D6\u6C7A\u65BC\u6700\u5927\u4ECB\u9762\u7684\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u9019\u4E9B\u7269\u4EF6\u7559\u51FA\u7684\u5B58\u5132\u7A7A\u9593\u7A31\u70BAFrontendHeap\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-code"
  }), `\u61C9\u7528\u7A0B\u5F0F\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u61C9\u7528\u7A0B\u5F0F\u7A0B\u5F0F\u78BC\u901A\u5E38\u5B58\u5132\u5728\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002 \u61C9\u7528\u7A0B\u5F0F\u7A0B\u5F0F\u78BC\u5305\u62EC\u60A8\u7DE8\u5BEB\u7684\u7A0B\u5F0F\u78BC\u3001TouchGFX Designer\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u3001\u4F86\u81EATouchGFX Designer\u5EAB\u548C\u60A8\u4F7F\u7528\u7684\u5176\u4ED6\u5EAB\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u96A8\u8457\u60A8\u7DE8\u5BEB\u7684\u7A0B\u5F0F\u78BC\u548C\u6DFB\u52A0\u5230\u61C9\u7528\u7684\u4ECB\u9762\u8D8A\u4F86\u8D8A\u591A\uFF0C\u61C9\u7528\u7A0B\u5F0F\u78BC\u7684\u6578\u91CF\u5FC5\u7136\u589E\u52A0\u3002 \u5728\u60A8\u9996\u6B21\u4F7F\u7528\u67D0\u9805\u7279\u6027\u6642\uFF0C\u5F9E\u51FD\u5F0F\u5EAB\u4E2D\u53D6\u51FA\u7684\u7A0B\u5F0F\u78BC\u7684\u91CF\u96A8\u4E4B\u589E\u52A0\u3002 \u4F8B\u5982\uFF0C\u5728\u60A8\u9996\u6B21\u5C07Button\u6DFB\u52A0\u5230\u4ECB\u9762\u6642\uFF0CTouchGFX\u5EAB\u4E2D\u7684Button\u7A0B\u5F0F\u78BC\u5C31\u6703\u5305\u542B\u5728\u60A8\u7684\u61C9\u7528\u4E2D\uFF0C\u5C0E\u81F4\u7A0B\u5F0F\u78BC\u91CF\u589E\u52A0\u3002 \u5728\u60A8\u7B2C\u4E8C\u6B21\u70BA\u540C\u4E00\u500B\u6216\u53E6\u4E00\u500B\u4ECB\u9762\u6DFB\u52A0Button\u6642\uFF0C\u4E0D\u6703\u518D\u6B21\u5F9ETouchGFX\u5EAB\u7372\u53D6\u7A0B\u5F0F\u78BC\uFF0C\u61C9\u7528\u4E2D\u589E\u52A0\u7684\u53EA\u6709\u60A8\u7DE8\u5BEB\u7684\u6216TouchGFX Designer\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "assets"
  }), `\u8CC7\u7522`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8AF8\u5982\u5716\u50CF\u3001\u5B57\u4E32\u548C\u5B57\u9AD4\u4E4B\u985E\u7684\u8CC7\u7522\u6703\u88AB\u8F49\u63DB\u70BAC++\u6A94\u4E26\u9023\u7D50\u5230\u61C9\u7528\u4E2D\u3002 \u8CC7\u7522\u7684\u8CC7\u6599\u901A\u5E38\u5132\u5B58\u5728\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\uFF0C\u4F46\u4E5F\u53EF\u5132\u5B58\u5728\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002 \u9019\u662F\u901A\u904E\u9023\u7D50\u5668\u8173\u672C\u4F86\u63A7\u5236\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6DFB\u52A0\u5716\u50CF\u6642\uFF0C\u61C9\u7528\u7684\u5927\u5C0F\u8207\u5716\u50CF\u5927\u5C0F\u6210\u6B63\u6BD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6DFB\u52A0\u6587\u5B57\u6642\uFF0C\u6587\u5B57\u4E2D\u7684\u6BCF\u500B\u5B57\u5143\u6703\u5C0E\u81F4\u61C9\u7528\u7684\u5927\u5C0F\u589E\u52A0\u5169\u500B\u4F4D\u5143\u7D44\u3002 \u5982\u679C\u540C\u4E00\u500B\u5B57\u4E32\u4F7F\u7528\u4E86\u5169\u6B21\uFF0C\u61C9\u7528\u5927\u5C0F\u53EA\u589E\u52A0\u4E00\u6B21\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EA\u5F9E\u5B57\u9AD4\u6A94\u4E2D\u7372\u53D6\u61C9\u7528\u4F7F\u7528\u7684\u5B57\u5143\u3002 \u9019\u610F\u5473\u8457\u5982\u679C\u61C9\u7528\u4E2D\u53EA\u4F7F\u7528\u5927\u5BEB\u5B57\u6BCDA-Z\uFF0C\u5247\u61C9\u7528\u4E2D\u4E0D\u5305\u542B\u5B57\u9AD4\u4E2D\u7684\u5C0F\u5BEB\u5B57\u6BCDa-z\u3002 \u5982\u679C\u65E5\u5F8C\u6DFB\u52A0\u4F7F\u7528\u9019\u4E9B\u5B57\u6BCD\u7684\u6587\u5B57\uFF0C\u5247\u61C9\u7528\u4E2D\u5B57\u9AD4\u7684\u8CC7\u6599\u91CF\u6703\u589E\u52A0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u5B57\u5143\u7684\u5927\u5C0F\u53D6\u6C7A\u65BC\u9078\u64C7\u7684\u5B57\u9AD4\u5927\u5C0F\u3002 \u5982\u679C\u5B57\u9AD4\u589E\u5927\uFF0C\u61C9\u7528\u5927\u5C0F\u4E5F\u6703\u589E\u52A0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "checking-memory-usage"
  }), `\u6AA2\u67E5\u5B58\u5132\u7A7A\u9593\u4F7F\u7528\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u6AA2\u67E5\u9023\u7D50\u5668\u751F\u6210\u7684\u6620\u5C04\u6A94\uFF0C\u53EF\u4EE5\u627E\u5230\u7279\u5B9A\u61C9\u7528\u7684\u5B58\u5132\u7A7A\u9593\u4F7F\u7528\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u6211\u5011\u4F86\u6AA2\u67E5IAR Embedded Workbench\u751F\u6210\u7684\u6620\u5C04\u6A94\u3002 \u5176\u4ED6\u7DE8\u8B6F\u5668\u4E5F\u6703\u751F\u6210\u985E\u4F3C\u7684\u6620\u5C04\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\u5728TouchGFX Designer\u4E2D\u70BASTM32F746Discovery\u8A55\u4F30\u5957\u4EF6\u5275\u5EFA\u4E00\u500B\u7A7A\u5C08\u6848\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/memory-usage/create-project-4.17.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u5177\u6709\u4E00\u500BBox\u548C\u4E00\u500BButton\u7684STM32F746\u5C08\u6848"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728IAR\u4E2D\u6253\u958B\u5C08\u6848\u5F8C\uFF0C\u67E5\u770B\u95DC\u65BCIAR\u751F\u6210.MAP\u6A94\u7684\u5C6C\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/memory-usage/enable-map-file.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\u751F\u6210\u9023\u7D50\u5668\u6620\u5C04\u6A94"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728IAR\u4E2D\u9032\u884C\u7DE8\u8B6F\u5F8C\uFF0C\u53EF\u4EE5\u6AA2\u67E5\u9023\u7D50\u5668\u6620\u5C04\u6A94STM32F746G_DISCO.map\uFF0C\u8A72\u6587\u4EF6\u4F4D\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `EWARM/STM32F746G_DISCO/List`), `\u8CC7\u6599\u593E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IAR\u9023\u7D50\u5668\u6620\u5C04\u6A94\u5305\u542B\u4E00\u500B\u6975\u4F73\u7684\u7E3D\u7D50\u3002 \u67E5\u627E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u6A21\u7D44\u7E3D\u7D50\u201D`), `\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `*******************************************************************************
*** MODULE SUMMARY
***

    Module                                   ro code  ro data  rw data
    ------                                   -------  -------  -------
command line/config:
    ------------------------------------------------------------------
    Total:

C:\\TouchGFXProjectsDocumentation\\STM32F746MemoryUsage\\EWARM\\STM32F746G_DISCO\\Obj: [1]
    ApplicationFontProvider.o                              20
    BitmapDatabase.o                              12       40
    Blue_Buttons_Round_Edge_small.o                    40'800
    Blue_Buttons_Round_Edge_small_pressed.o            40'800
    Font_verdana_10_4bpp_0.o                               24
    Font_verdana_20_4bpp_0.o                               72
    Font_verdana_40_4bpp_0.o                              280
    FrontendApplication.o                         46       60
    FrontendApplicationBase.o                    706      816
    GeneratedFont.o                               84       84
    Kerning_verdana_10_4bpp.o                               4
    Kerning_verdana_20_4bpp.o                               4
    Kerning_verdana_40_4bpp.o                               4
    Model.o                                       10
    OSWrappers.o                                 156        1        9
    STM32DMA.o                                   898      176
    STM32TouchController.o                       162       24        4
...
    heap_4.o                                     444            32'792
...
touchgfx_core.a: [7]
    AbstractButton.o                             136
    AbstractPartition.o                            8
    Application.o                              2'218      290       28
    Bitmap.o                                   1'064      604       36
    Box.o                                        108      104
    Button.o                                     276      308
    ConstFont.o                                   62
    Container.o                                  510      396
    DMA.o                                        558      252
    DisplayTransformation.o                      192
    Drawable.o                                   418
    FontManager.o                                 12                 4
    Gestures.o                                   364       60
    HAL.o                                      1'758      544       18
    LCD24bpp.o                                 2'732    1'604       80
    Screen.o                                   1'924      124
    TouchCalibration.o                           252                76
    TypedText.o                                                     14
    ------------------------------------------------------------------
    Total:                                    12'728    4'286      256

    Gaps                                                    4        3
    Linker created                                         36    2'560
----------------------------------------------------------------------
    Grand Total:                              38'676   88'973   42'731
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8868\u5305\u542B\u4E09\u5217\u6578\u5B57\uFF0C \u5176\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `ro\u7A0B\u5F0F\u78BC`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `ro\u8CC7\u6599`), `\u70BA\u552F\u8B80\uFF0C\u4F4D\u65BC\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\uFF0C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `rw\u8CC7\u6599`), `\u70BA\u975E\u5E38\u91CF\u8B80\u5BEB\u8B8A\u6578\uFF0C\u4F4D\u65BCRAM\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8868\u4E2D\u7684\u884C\u5283\u5206\u70BA7\u584A\u3002 \u7B2C\u4E00\u584A\u70BA\u5C08\u6848\u4E2D\u7684\u6240\u6709.cpp\u6587\u4EF6\u3002 \u5F8C\u9762\u7684\u516D\u584A\u70BA\u5C08\u6848\u4E2D\u4F7F\u7528\u7684\u51FD\u5F0F\u5EAB\uFF08.a\u6587\u4EF6\uFF09\u3002 \u6700\u5F8C\u4E00\u500B\u662FTouchGFX\u5EAB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u5011\u53EF\u4EE5\u770B\u5230TouchGFX\u5EAB\uFF08\u201Ctouchgfx_core.a:`, `[7]`, `\u201D\u90E8\u5206\uFF09\u70BA\u61C9\u7528\u589E\u52A0\u4E8612,728\u4F4D\u5143\u7D44\u7684\u7A0B\u5F0F\u78BC\uFF08\u548C4,286\u4F4D\u5143\u7D44\u7684\u5E38\u91CF\u8CC7\u6599\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-ram"
  }), `\u5167\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u627E\u5230\u5167\u90E8RAM\u7684\u7E3D\u4F7F\u7528\u91CF\uFF0C\u6211\u5011\u4F86\u770B\u6A21\u7D44\u7E3D\u7D50\u8868\u5E95\u90E8\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u7E3D\u8A08\u201D`), `\u4E00\u884C\u3002 \u7B2C\u4E09\u5217\u662F\u5167\u90E8RAM\u3002 \u9019\u8868\u793A\u5C08\u6848\u4F7F\u7528\u4E86\u5167\u90E8RAM\u768442,731\u4F4D\u5143\u7D44\u7A7A\u9593\u3002 \u6211\u5011\u4F86\u770BTouchGFX\u5EAB\u7684\u7E3D\u503C\uFF0C\u53EF\u4EE5\u770B\u5230TouchGFX\u5EAB`, `[7]`, ` \u4F7F\u7528\u4E86256\u4F4D\u5143\u7D44\u3002 heap_4.o\u4F7F\u7528\u4E8632,792\u4F4D\u5143\u7D44\u3002 \u9019\u662F\u70BAFREERTOS\u9810\u7559\u7684\u52D5\u614B\u8A18\u61B6\u9AD4\u5806\u3002 32Kb\u662F\u9810\u8A2D\u503C\uFF0C\u4F46\u5806\u7684\u5927\u5C0F\u53EF\u5728STM32CubeMX\u4E2D\u914D\u7F6E\u3002 \u5178\u578B\u7684TouchGFX\u7A0B\u5F0F\u4F7F\u7528\u6B64\u5806\u4E2D\u5E7EKb\u7684\u7A7A\u9593\uFF0C\u4E3B\u8981\u7528\u4F86\u70BA\u4F7F\u7528\u8005\u4ECB\u9762\u4EFB\u52D9\u5206\u914D\u68E7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904E\u641C\u7D22FrontendHeap\uFF0C\u6211\u5011\u53EF\u4EE5\u627E\u5230\u4ECB\u9762\u7269\u4EF6\u7684\u5927\u5C0F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FrontendHeap::getInstance()::instance
                        0x2000'95d0   0x240  Data  Gb  TouchGFXConfiguration.o [1]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u8005\u4ECB\u9762\u6240\u9700\u7684\u7269\u4EF6\u4F54\u7528\u4E860x240\u4F4D\u5143\u7D44 = 576\u4F4D\u5143\u7D44\u7684\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-flash"
  }), `Internal Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F9E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201D\u7E3D\u8A08\u201D`), `\u4E00\u884C\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u6B64\u61C9\u7528\u4F7F\u7528\u4E8638,676\u4F4D\u5143\u7D44\u7A0B\u5F0F\u78BC + 88,973\u4F4D\u5143\u7D44\u8CC7\u6599\u3002 \u5176\u4E2D\u53EA\u6709\u4E00\u90E8\u5206\u662F\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002 \u81F3\u5C11\u5169\u5F35Button\u5716\u50CF\u4F4D\u65BC\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u627E\u51FA\u6703\u6709\u591A\u5C11\u7A0B\u5F0F\u78BC\u548C\u8CC7\u6599\u5B58\u5132\u5728\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\uFF0C\u6211\u5011\u9996\u5148\u6AA2\u67E5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u5B58\u5132\u7E3D\u7D50\u201D`), `\uFF08\u522A\u9664\u4E86\u4E00\u4E9B\u7D30\u7BC0\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `*******************************************************************************
*** PLACEMENT SUMMARY
***

"A0":  place at address 0x800'0000 { ro section .intvec };
"P1":  place in [from 0x800'0000 to 0x80f'ffff] { ro };
"P2":  place in [from 0x2000'0000 to 0x2004'ffff] { rw };
"P3":  place in [from 0x9000'0000 to 0x90ff'ffff] {
          section ExtFlashSection, section FontFlashSection,
          section TextFlashSection };
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u8D77\u59CB\u4F4D\u5740\u70BA0x08000000\u3002 \u5B83\u88AB\u5169\u500B\u5340\u57DF\u201CA0\u201D\u548C\u201DP1\u201D\u8986\u84CB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7E7C\u7E8C\u770B\u6620\u5C04\u6A94\uFF0C\u53EF\u4EE5\u770B\u5230\u9019\u4E9B\u5340\u57DF\u4E2D\u7684\u5167\u5BB9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5,15-15}",
    "{5-5,15-15}": true
  }), `  Section                Kind         Address      Size  Object
  -------                ----         -------      ----  ------
"A0":                                             0x1c8
  .intvec                ro code   0x800'0000     0x1c8  startup_stm32f746xx.o [1]
                                 - 0x800'01c8     0x1c8

"P1":                                             0xb05d
  .text                   ro code   0x800'01c8     0x9b8  main.o [1]
  .text                   ro code   0x800'0b80      0x14  memset.o [5]
...
  .text                   ro code   0x800'b17a       0x2  AbstractButton.o [7]
  .rodata                 const     0x800'b17c       0x1  unwind_debug.o [6]
  .rodata                 const     0x800'b17d       0x0  zero_init3.o [5]
  .rodata                 const     0x800'b17d       0x0  lz77_init_single.o [5]
  Initializer bytes       const     0x800'b17d      0xa8  <for P2-1>
                                  - 0x800'b225    0xb05d
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u8868\u793A\u201DA0\u201D\u4F7F\u7528\u4E860x1c8\u4F4D\u5143\u7D44 = 456\u4F4D\u5143\u7D44\uFF0C\u201DP1\u201D\u4F7F\u7528\u4E860xb05d\u4F4D\u5143\u7D44 = 45,149\u4F4D\u5143\u7D44\u3002 \u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u7E3D\u4F7F\u7528\u91CF\u70BA45,605\u4F4D\u5143\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "external-flash"
  }), `\u5916\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u70BA\u201DP3\u201D\u5340\u57DF\uFF08\u8D77\u59CB\u4F4D\u5740\u70BA0x90000000\uFF09\u3002 \u4E0B\u9762\u662F\u8A72\u5340\u57DF\u7684\u5167\u5BB9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-14}",
    "{14-14}": true
  }), `"P3":                                          0x1'4076
  ExtFlashSection        const    0x9000'0000    0x9f60  Blue_Buttons_Round_Edge_small.o [1]
  ExtFlashSection        const    0x9000'9f60    0x9f60  Blue_Buttons_Round_Edge_small_pressed.o [1]
  FontFlashSection       const    0x9001'3ec0     0x118  Font_verdana_40_4bpp_0.o [1]
  FontFlashSection       const    0x9001'3fd8      0x48  Font_verdana_20_4bpp_0.o [1]
  FontFlashSection       const    0x9001'4020      0x18  Font_verdana_10_4bpp_0.o [1]
  FontFlashSection       const    0x9001'4038      0x10  Table_verdana_10_4bpp.o [1]
  FontFlashSection       const    0x9001'4048      0x10  Table_verdana_20_4bpp.o [1]
  FontFlashSection       const    0x9001'4058      0x10  Table_verdana_40_4bpp.o [1]
  FontFlashSection       const    0x9001'4068       0x4  Kerning_verdana_10_4bpp.o [1]
  FontFlashSection       const    0x9001'406c       0x4  Kerning_verdana_20_4bpp.o [1]
  FontFlashSection       const    0x9001'4070       0x4  Kerning_verdana_40_4bpp.o [1]
  TextFlashSection       const    0x9001'4074       0x2  Texts.o [1]
                                - 0x9001'4076  0x1'4076
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u770B\u5230\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u7E3D\u4F7F\u7528\u91CF\u70BA0x14076\u4F4D\u5143\u7D44 = 82,038\u4F4D\u5143\u7D44\u3002 \u5169\u5F35Button\u5716\u50CF\uFF082 x 0x9f60\u4F4D\u5143\u7D44 = 40,800\u4F4D\u5143\u7D44\uFF09\u4F7F\u7528\u4E86\u5176\u4E2D\u7684\u5927\u90E8\u5206\u3002 \u5176\u9918\u8CC7\u6599\u5C6C\u65BC3\u7A2E\u5B57\u9AD4\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u7531\u65BC\u4E0D\u4F7F\u7528\u4EFB\u4F55\u6587\u5B57\uFF0C\u53EA\u5305\u542B\u201C?\u201D\u5B57\u5143\uFF0C\u56E0\u6B64\u5B83\u5011\u7528\u4E0D\u4E86\u591A\u5C11\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "summary"
  }), `\u7E3D\u7D50`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8RAM\u4E2D\u53EA\u6709\u5F71\u50CF\u7DE9\u885D\u3002 \u7531\u65BC\u5B83\u5011\u672A\u88AB\u5B9A\u7FA9\u70BA\u61C9\u7528\u4E2D\u7684\u8B8A\u6578\uFF0C\u56E0\u6B64\u5728\u9023\u7D50\u5668\u8173\u672C\u4E2D\u627E\u4E0D\u5230\u5B83\u5011\u3002 \u89E3\u6790\u5EA6\u70BA480x272\u50CF\u7D20\uFF0824\u4F4D\u5143\uFF09\u3002 \u6709\u5169\u500B\u5F71\u50CF\u7DE9\u885D\uFF0C\u7E3D\u4F7F\u7528\u91CF\u70BA480 `, `*`, ` 272 `, `*`, ` 3 * 2 = 786,360\u4F4D\u5143\u7D44\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8A18\u61B6\u9AD4\u985E\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u7528`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5167\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `42.731 \u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u4ECB\u9762\u7269\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `576 \u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Internal Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `45605 \u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u6846\u67B6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `12,728\u4F4D\u5143\u7D44\u7A0B\u5F0F\u78BC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `786.360 \u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `82.028 \u4F4D\u5143\u7D44`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "demo-1"
  }), `Demo 1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u53E6\u4E00\u500B\u7BC4\u4F8B\uFF1ATouchGFX Designer\u4E2D\u53EF\u4EE5\u627E\u5230\u7684TouchGFX Demo1\u7684\u8CC7\u6599\u91CF\u3002 \u5B83\u5305\u542B5\u500B\u4ECB\u9762\u548C100\u591A\u5F35\u5716\u50CF\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/memory-usage/demo1.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "STM32F746 Demo 1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "summary-1"
  }), `\u7E3D\u7D50`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8A18\u61B6\u9AD4\u985E\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u7528`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5167\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `51.387 \u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u4ECB\u9762\u7269\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10.772 \u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Internal Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `187.768 \u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\u6846\u67B6\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `85.174\u4F4D\u5143\u7D44\u7A0B\u5F0F\u78BC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `786.360 \u4F4D\u5143\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5.281.812 \u4F4D\u5143\u7D44`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);