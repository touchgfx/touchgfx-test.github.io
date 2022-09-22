"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8010],{

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

/***/ 22425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class CodeHeader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "code-header"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, this.props.children)));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (CodeHeader);


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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


/***/ }),

/***/ 37793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  viewBox: "0 0 12 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
}));
class Tip extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-tip)",
      header: "Tip",
      type: "tip",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Tip);


/***/ }),

/***/ 52374:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37793);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31217);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39130);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22425);
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
  id: "scroll-list",
  title: "\u6EFE\u52D5\u5217\u8868"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/ui-components/containers/scroll-list",
  "id": "development/ui-development/ui-components/containers/scroll-list",
  "title": "\u6EFE\u52D5\u5217\u8868",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-list.mdx",
  "sourceDirName": "development/ui-development/ui-components/containers",
  "slug": "/development/ui-development/ui-components/containers/scroll-list",
  "permalink": "/4.20/zh-TW/docs/development/ui-development/ui-components/containers/scroll-list",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scroll-list",
    "title": "\u6EFE\u52D5\u5217\u8868"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5F37\u5236\u56DE\u61C9\u8996\u7A97",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/ui-components/containers/modal-window"
  },
  "next": {
    "title": "\u6EFE\u8F2A",
    "permalink": "/4.20/zh-TW/docs/development/ui-development/ui-components/containers/scroll-wheel"
  }
};
const assets = {};






const toc = [{
  value: "\u5C0F\u90E8\u4EF6\u7D44",
  id: "widget-group",
  level: 2
}, {
  value: "\u5C6C\u6027",
  id: "properties",
  level: 2
}, {
  value: "\u5C08\u6848\u7BC4\u672C",
  id: "item-templates",
  level: 3
}, {
  value: "\u4EA4\u4E92",
  id: "interactions",
  level: 2
}, {
  value: "\u64CD\u4F5C",
  id: "actions",
  level: 3
}, {
  value: "\u89F8\u767C\u689D\u4EF6",
  id: "triggers",
  level: 3
}, {
  value: "\u6027\u80FD",
  id: "performance",
  level: 2
}, {
  value: "\u7BC4\u4F8B",
  id: "examples",
  level: 2
}, {
  value: "\u751F\u6210\u7A0B\u5F0F\u78BC",
  id: "generated-code",
  level: 3
}, {
  value: "\u7528\u6236\u7A0B\u5F0F\u78BC",
  id: "user-code",
  level: 3
}, {
  value: "TouchGFX Designer\u7BC4\u4F8B",
  id: "touchgfx-designer-examples",
  level: 3
}, {
  value: "API\u53C3\u8003",
  id: "api-reference",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6EFE\u52D5\u6E05\u55AE(Scroll List)\u662F\u53EF\u6EFE\u52D5\u7684\u83DC\u55AE\uFF0C\u7531\u82E5\u5E72\u5C08\u6848\u548C\u5C0F\u90E8\u4EF6\u69CB\u6210\uFF0C\u9019\u4E9B\u5C08\u6848\u548C\u5C0F\u90E8\u4EF6\u6EFE\u52D5\u5230\u8996\u5716\u4E2D\u6642\u6703\u9032\u884C\u52D5\u614B\u66F4\u65B0\u3002 \u8207\u6EFE\u52D5\u5217\u8868\u4E2D\u7684\u5C08\u6848\u4EA4\u4E92\u6642\uFF0C\u6EFE\u52D5\u5217\u8868\u9084\u80FD\u547C\u53EBcallback\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/scroll-list/widget-appearance.gif",
    mdxType: "Figure"
  }, "\u5728\u6A21\u64EC\u5668\u4E2D\u904B\u884C\u7684\u6EFE\u52D5\u5217\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "widget-group"
  }), `\u5C0F\u90E8\u4EF6\u7D44`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6EFE\u52D5\u5217\u8868\u4F4D\u65BCTouchGFX Designer\u4E2D\u7684Containers\u5C0F\u90E8\u4EF6\u7D44\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/scroll-list/widget-group-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u7684\u6EFE\u52D5\u5217\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "properties"
  }), `\u5C6C\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u4E2D\u6EFE\u52D5\u5217\u8868\u7684\u5C6C\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u5C6C\u6027\u7D44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u5C6C\u6027\u7D44`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Name`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C0F\u90E8\u4EF6\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u540D\u7A31`), `\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Name\u662FTouchGFX Designer\u548C\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528\u7684\u552F\u4E00\u8B58\u5225\u78BC`), `\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Type`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u985E\u578B`), `\u6307\u5B9A\u6EFE\u52D5\u5217\u8868\u65B9\u5411\u70BA\u5782\u76F4\u65B9\u5411\u6216\u6C34\u6E96\u65B9\u5411`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Location`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `X`), ` \u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Y`), ` \u6307\u5B9A\u5C0F\u90E8\u4EF6\u5DE6\u4E0A\u89D2\u76F8\u5C0D\u4E8E\u5176\u7236\u7684\u4F4D\u7F6E\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `W`), ` \u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `H`), ` \u6307\u5B9A\u5C0F\u90E8\u4EF6\u7684\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u9396\u5B9A`), `\u6307\u5B9A\u5C0F\u90E8\u4EF6\u662F\u5426\u61C9\u9396\u5B9A\u70BA\u5176\u7576\u524D\u7684X\u3001Y\u3001W\u548CH\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u5982\u679C\u9396\u5B9A\u5C0F\u90E8\u4EF6\uFF0C\u9084\u6703\u7981\u6B62\u901A\u904E\u87A2\u5E55\u8207\u5C0F\u90E8\u4EF6\u9032\u884C\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u53EF\u898B`), ` \u6307\u5B9A\u5C0F\u90E8\u4EF6\u7684\u53EF\u898B\u6027\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u4F7F\u5C0F\u90E8\u4EF6\u4E0D\u53EF\u898B\u9084\u5C07\u7981\u7528\u8207\u5C0F\u90E8\u4EF6\u4E4B\u9593\u901A\u904E\u87A2\u5E55\u9032\u884C\u7684\u4EA4\u4E92\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Item Template`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u5C08\u6848\u7BC4\u672C`), `\u6307\u5B9A\u7528\u4F5C\u7BC4\u672C\u7684CustomContainer\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u9078\u9805\u6578`), `\u6307\u5B9A\u6EFE\u52D5\u5217\u8868\u4E2D\u5B58\u5728\u7684\u5C08\u6848\u6578\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `List Appearance`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u8FF4\u5708`), `\u6307\u5B9A\u5230\u9054\u5217\u8868\u672B\u5C3E\u5F8C\uFF0C\u6EFE\u52D5\u5217\u8868\u4E2D\u7684\u5C08\u6848\u662F\u5426\u5C07\u8FF4\u5708\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u5C08\u6848\u5C0D\u9F4A`), `\u6307\u5B9A\u5C08\u6848\u662F\u5426\u61C9\u8A72\u5C0D\u9F4A\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u5982\u679C\u5C0D\u9F4A\u70BAFalse\uFF0C\u5247\u5C08\u6848\u53EF\u96A8\u610F\u79FB\u52D5\u3002 \u5982\u679C\u5C0D\u9F4A\u70BATrue\uFF0C\u5C08\u6848\u5C07\u6309\u4F4D\u5C0D\u9F4A\uFF0C\u59CB\u7D42\u4F4D\u65BC\u6240\u9078\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u5C08\u6848\u9593\u8DDD`), `\u6307\u5B9A\u5C08\u6848\u4E4B\u9593\u7684\u9593\u8DDD\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u586B\u5145\u524D`), ` \u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u586B\u5145\u5F8C`), ` \u6307\u5B9A\u6EFE\u52D5\u5217\u8868\u4E2D\u53EF\u898B\u756B\u677F\u524D\u5F8C\u7684\u8DDD\u96E2\u504F\u79FB\u91CF\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Animation`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u7DE9\u52D5`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u7DE9\u52D5\u9078\u9805`), `\u6307\u5B9A\u52D5\u756B\u4F7F\u7528\u7684\u7DE9\u52D5\u65B9\u7A0B\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Swipe Acc.`), ` \u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Drag Acc.`), ` \u6307\u5B9A\u6EFE\u52D5\u6642\u7684\u52A0\u901F\u5EA6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Mixin`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `\u53EF\u62D6\u52D5`), ` \u6307\u5B9A\u5728\u904B\u884C\u6642\u5C0F\u90E8\u4EF6\u662F\u5426\u53EF\u62D6\u52D5\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `ClickListener`), ` \u6307\u5B9A\u5C0F\u90E8\u4EF6\u88AB\u9EDE\u64CA\u6642\u662F\u5426\u6703\u547C\u53EBcallback\u51FD\u6578\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `MoveAnimator`), ` \u6307\u5B9A\u5C0F\u90E8\u4EF6\u662F\u5426\u53EF\u7E6A\u88FD `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `X`), ` \u548C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, `Y`), ` \u503C\u8B8A\u5316\u7684\u52D5\u756B\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "item-templates"
  }), `\u5C08\u6848\u7BC4\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6EFE\u52D5\u5217\u8868\u4E2D\u7684\u5C08\u6848\u57FA\u65BC\u540D\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u201C\u5C08\u6848\u7BC4\u672C\u201D`), `\u7684\u6982\u5FF5\uFF0C\u5C08\u6848\u7BC4\u672C\u5C6C\u65BC`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-engine-features/custom-containers"
  }), `CustomContainer`), `\uFF0C\u7528\u4F5C\u6EFE\u52D5\u6E05\u55AE\u4E2D\u5404\u5C08\u6848\u5716\u5F62\u5143\u7D20\u7684\u57FA\u790E\u3002 \u5275\u5EFA\u6EFE\u52D5\u5217\u8868\u4E4B\u524D\uFF0C\u61C9\u5275\u5EFA\u81EA\u8A02\u5BB9\u5668\uFF0C\u70BA\u6EFE\u52D5\u6E05\u55AE\u63D0\u4F9B\u5C08\u6848\u7BC4\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5275\u5EFA\u6EFE\u52D5\u5217\u8868\u5F8C\uFF0C\u53EF\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5C08\u6848\u7BC4\u672C`), `\u5C6C\u6027\u4E0B\u9078\u64C7CustomContainer\u3002 \u6307\u5B9A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5C08\u6848\u7BC4\u672C`), `\u6703\u8ABF\u6574\u6EFE\u52D5\u6E05\u55AE\u5927\u5C0F\uFF0C\u4EE5\u9069\u61C9\u6240\u9078\u81EA\u8A02\u5BB9\u5668\u4E0D\u5728\u53EF\u6EFE\u52D5\u65B9\u5411\u4E0A\u7684\u7684\u5C3A\u5BF8\u5C6C\u6027\uFF08\u5782\u76F4\u6372\u52D5\u6E05\u55AE\u7684\u5BEC\u5EA6\u3001\u6C34\u6E96\u6EFE\u52D5\u5217\u8868\u7684\u9AD8\u5EA6\uFF09\u3002 \u66F4\u6539\u5176\u4ED6\u5C3A\u5BF8\u5C6C\u6027\uFF08\u5782\u76F4\u6372\u52D5\u6E05\u55AE\u7684\u9AD8\u5EA6\u3001\u6C34\u5E73\u6EFE\u52D5\u5217\u8868\u7684\u5BEC\u5EA6\uFF09\u6C7A\u5B9A\u4E86\u53EF\u898B\u7684\u5C08\u6848\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "interactions"
  }), `\u4EA4\u4E92`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u7684\u90E8\u5206\u4ECB\u7D39\u4E86\u6EFE\u52D5\u6E05\u55AE\u652F\u63F4\u7684\u64CD\u4F5C\u548C\u89F8\u767C\u689D\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "actions"
  }), `\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u6A19\u6E96\u5C0F\u90E8\u4EF6\u64CD\u4F5C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8AAA\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Move widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u96A8\u6642\u9593\u7684\u63A8\u79FB\u5C07\u5C0F\u90E8\u4EF6\u79FB\u52D5\u5230\u65B0\u4F4D\u7F6E\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Hide widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u96B1\u85CF\u5C0F\u90E8\u4EF6\uFF08\u5C07\u53EF\u898B\u6027\u8A2D\u7F6E\u70BAfalse\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Show widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u96B1\u85CF\u7684\u5C0F\u90E8\u4EF6\u53EF\u898B\uFF08\u5C07\u53EF\u898B\u6027\u8A2D\u7F6E\u70BAtrue\uFF09\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "triggers"
  }), `\u89F8\u767C\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6EFE\u52D5\u5217\u8868\u4E0D\u6703\u7522\u751F\u4EFB\u4F55\u89F8\u767C\u689D\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6EFE\u52D5\u5217\u8868\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "container"
  }), `Container`), `\u985E\u578B\uFF0C\u9810\u8A2D\u60C5\u6CC1\u4E0B\u4E0D\u6703\u51FA\u73FE\u5728\u7E6A\u5716\u93C8\u4E2D\u3002 \u56E0\u6B64\uFF0C\u6027\u80FD\u4E3B\u8981\u53D6\u6C7A\u65BC\u5B50\u90E8\u4EF6\u7684\u7E6A\u5716\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u95DC\u65BC\u6587\u5B57\u7E6A\u88FD\u6027\u80FD\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u8ACB\u95B1\u8B80`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../general-ui-component-performance"
  }), `\u901A\u7528UI\u5143\u4EF6\u6027\u80FD`), `\u4E00\u7BC0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code"
  }), `\u751F\u6210\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u751F\u6210\u7684\u8996\u5716\u57FA\u985E\u7684\u7A0B\u5F0F\u78BC\u4E2D\uFF0C\u53EF\u4EE5\u67E5\u770BTouchGFX Designer\u662F\u5982\u4F55\u5275\u5EFA\u6EFE\u52D5\u5217\u8868\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>
#include "BitmapDatabase.hpp"

Screen1ViewBase::Screen1ViewBase() :
    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)
{
    scrollList.setPosition(140, 10, 200, 252);
    scrollList.setHorizontal(false);
    scrollList.setCircular(false);
    scrollList.setEasingEquation(touchgfx::EasingEquations::backEaseOut);
    scrollList.setSwipeAcceleration(10);
    scrollList.setDragAcceleration(10);
    scrollList.setNumberOfItems(20);
    scrollList.setPadding(0, 0);
    scrollList.setSnapping(false);
    scrollList.setDrawableSize(50, 2);
    scrollList.setDrawables(scrollListListItems, updateItemCallback);

    add(scrollList);
}

void Screen1ViewBase::setupScreen()
{
    scrollList.initialize();
    for (int i = 0; i < scrollListListItems.getNumberOfDrawables(); i++)
    {
        scrollListListItems[i].initialize();
    }
}

void Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)
{
    if (items == &scrollListListItems)
    {
        touchgfx::Drawable* d = items->getDrawable(containerIndex);
        TextContainer* cc = (TextContainer*)d;
        scrollListUpdateItem(*cc, itemIndex);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u60A8\u53EF\u4EE5\u5728\u7528\u6236\u7A0B\u5F0F\u78BC\u4E2D\u4F7F\u7528ScrollList\u985E\u4E2D\u7684\u9019\u4E9B\u51FD\u6578\u548C\u5176\u4ED6\u53EF\u7528\u51FD\u6578\u3002 \u5982\u679C\u4FEE\u6539\u4E86\u5C0F\u90E8\u4EF6\u7684\u5916\u89C0\uFF0C\u8A18\u5F97\u547C\u53EB ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "scrollList.invalidate()"), " \u4EE5\u5F37\u5236\u91CD\u7E6A\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "user-code"
  }), `\u7528\u6236\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A2D\u7F6E\u5B8C\u6EFE\u52D5\u6E05\u55AE\u7684\u5716\u5F62\u5143\u7D20\u53CA\u5176\u5C6C\u6027\u5F8C\uFF0C\u53EF\u7DE8\u5BEB\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC\u66F4\u65B0\u6EFE\u52D5\u5217\u8868\u4E2D\u7684\u5C08\u6848\u3002 \u4E0B\u6587\u7D66\u51FA\u4E86\u7531TouchGFX Designer\u751F\u6210\u7684 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1ViewBase`), ` \u985E\u7684\u6A19\u982D\u6A94\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "ScreenViewBase.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-11}",
    "{8-11}": true
  }), `class ScreenViewBase : public touchgfx::View
{
public:
    ScreenViewBase();
    virtual ~ScreenViewBase() {}
    virtual void setupScreen();

    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)
    {
        // Override and implement this function in Screen
    }

protected:
    FrontendApplication& application() {
         return *static_cast<FrontendApplication*>(Application::getInstance());
    }
    touchgfx::BoxWithBorder boxWithBorder;
    touchgfx::ScrollList scrollList;
    touchgfx::DrawableListItems<CustomContainer, 6> scrollListListItems;
private:
    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);
    touchgfx::Callback<ScreenViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u751F\u6210\u6EFE\u52D5\u5217\u8868\u7A0B\u5F0F\u78BC\u6642\uFF0C\u6703\u5275\u5EFA\u4E0A\u6587\u4E2D\u7A81\u51FA\u986F\u793A\u7684\u51FD\u6578 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollListUpdateItem`), `\uFF0C\u4F7F\u7528\u8005\u53EF\u4F7F\u7528\u6B64\u51FD\u6578\u8986\u84CB\u548C\u66F4\u65B0\u6EFE\u52D5\u6E05\u55AE\u4E2D\u7684\u5C08\u6848\u3002 \u6BCF\u7576\u6EFE\u52D5\u6E05\u55AE\u4E2D\u7684\u5C08\u6848\u9700\u8981\u66F4\u65B0\u6642\uFF0C\u90FD\u6703\u547C\u53EB\u6B64\u51FD\u6578\uFF0C\u56E0\u6B64\uFF0C\u8ACB\u5148\u78BA\u4FDD\u5C08\u6848\u8B8A\u70BA\u53EF\u898B\u72C0\u614B\u524D\u5DF2\u66F4\u65B0\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollListUpdateItem`), ` \u5305\u542B\u5169\u500B\u53C3\u6578\uFF0C\u7528\u65BC\u6A19\u8B58\u6B63\u5728\u66F4\u65B0\u7684\u5C08\u6848\u4E26\u7528\u65BC\u5C0D\u8A72\u5C08\u6848\u9032\u884C\u66F4\u65B0\u3002 \u53C3\u6578 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), ` \u5305\u542B\u5C08\u6848\u7684\u7D22\u5F15\u503C\uFF0C\u8A72\u503C\u7528\u65BC\u6A19\u8B58\u6B63\u5728\u66F4\u65B0\u7684\u5C08\u6848\u3002 \u53C3\u6578 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `item`), ` \u662F\u5C0DCustomContainer\u7269\u4EF6\u7684\u53C3\u7167\uFF0C\u8A72\u7269\u4EF6\u5C6C\u65BC\u6EFE\u52D5\u6E05\u55AE\u4E2D\u7684\u53EF\u898B\u5C08\u6848\u3002 \u66F4\u65B0\u53C3\u6578 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `item`), ` \u7684\u5716\u5F62\u6703\u66F4\u65B0\u70BA\u6EFE\u52D5\u6E05\u55AE\u4E2D\u53EF\u898B\u5C08\u6848\u7684\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u70BA `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollListUpdateItem`), ` \u7684\u7BC4\u4F8B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifndef SCREEN1_VIEW_HPP
#define SCREEN1_VIEW_HPP

#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>
#include <gui/screen1_screen/ScreenPresenter.hpp>

class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();

    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex);
protected:
};

#endif // SCREEN1_VIEW_HP
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/screen1_screen/Screen1View.hpp>

Screen1View::Screen1View()
{

}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
}

void Screen1View::tearDownScreen()
{
    Screen1ViewBase::tearDownScreen();
}

void Screen1View::scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)
{
    item.setValue(itemIndex);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6A19\u982D\u6A94 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.hpp`), ` \u4E2D\uFF0C\u6703\u8986\u84CB `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollListUpdateItem`), ` \u51FD\u6578\uFF0C\u96A8\u5F8C\u6703\u5728 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.cpp`), ` \u4E2D\u5BE6\u73FE\u8A72\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u4F8B\u7684\u76EE\u6A19\u662F\u66F4\u65B0\u5177\u6709\u53EF\u898B\u5C08\u6848\u7D22\u5F15\u503C\u7684\u5C08\u6848\u7BC4\u672C\u4E2D\u7684\u6587\u5B57\uFF0C\u8207`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "scroll-list"
  }), `\u672C\u90E8\u5206\u958B\u982D`), `\u4E2D\u7684\u7BC4\u4F8B\u76F8\u4F3C\u3002 \u7531\u65BC\u5C08\u6848\u7BC4\u672C\u662F\u57FA\u65BCCustomContainer\u7684\uFF0C\u56E0\u6B64\u6703\u70BACustomContainer\u5275\u5EFA\u4E00\u500B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setValue`), ` \u51FD\u6578\u3002 setValue\u51FD\u6578\u80FD\u5920\u7372\u53D6 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), ` \u53C3\u6578\u4E26\u66F4\u65B0\u5C08\u6848\u7BC4\u672C\u4E2D\u7684\u6587\u5B57\u3002 \u70BA\u53C3\u6578\u9805\u547C\u53EBsetvalue\u6703\u4F7F\u5C08\u6848\u66F4\u65B0\u5176\u5916\u89C0\uFF0C\u5F9E\u800C\u6703\u986F\u793A\u5176\u7D22\u5F15\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer-examples"
  }), `TouchGFX Designer\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u9032\u4E00\u6B65\u77AD\u89E3\u6EFE\u52D5\u5217\u8868\uFF0C\u8ACB\u5617\u8A66\u5728TouchGFX Designer\u4E2D\u4F7F\u7528\u4E0B\u5217UI\u7BC4\u672C\u4E4B\u4E00\u5275\u5EFA\u65B0\u61C9\u7528\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u4E2D\u7684\u6EFE\u8F2A\u548C\u6E05\u55AEUI\u7BC4\u672C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "api-reference"
  }), `API\u53C3\u8003`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_scroll_list",
    mdxType: "Link"
  }, "ScrollList\u985E\u7684API\u53C3\u8003"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);