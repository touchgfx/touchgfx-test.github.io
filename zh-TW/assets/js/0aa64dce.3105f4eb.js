"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9168],{

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

/***/ 93054:
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
  d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
}));
class Note extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-note)",
      header: "Note",
      type: "note",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Note);


/***/ }),

/***/ 32180:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
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
  id: "06-flash-external-addressable",
  title: "6. \u5916\u90E8\u53EF\u5B9A\u5740\u5FEB\u9583\u8A18\u61B6\u9AD4",
  sidebar_label: "6. \u5916\u90E8\u53EF\u5B9A\u5740\u5FEB\u9583\u8A18\u61B6\u9AD4"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/06-flash-external-addressable",
  "id": "development/board-bring-up/how-to/06-flash-external-addressable",
  "title": "6. \u5916\u90E8\u53EF\u5B9A\u5740\u5FEB\u9583\u8A18\u61B6\u9AD4",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/06-flash-external-addressable.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/06-flash-external-addressable",
  "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/06-flash-external-addressable",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 6,
  "frontMatter": {
    "id": "06-flash-external-addressable",
    "title": "6. \u5916\u90E8\u53EF\u5B9A\u5740\u5FEB\u9583\u8A18\u61B6\u9AD4",
    "sidebar_label": "6. \u5916\u90E8\u53EF\u5B9A\u5740\u5FEB\u9583\u8A18\u61B6\u9AD4"
  },
  "sidebar": "docs",
  "previous": {
    "title": "5. \u986F\u793A\u5916\u90E8RAM\u4E2D\u7684\u5F71\u50CF\u7DE9\u885D\u5340",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/05-display-external"
  },
  "next": {
    "title": "7. \u5340\u584A\u6A21\u5F0F\u4E0B\u7684\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"
  }
};
const assets = {};



const toc = [{
  value: "\u52D5\u6A5F",
  id: "motivation",
  level: 2
}, {
  value: "\u76EE\u6A19",
  id: "goal",
  level: 2
}, {
  value: "\u9A57\u8B49",
  id: "verification",
  level: 3
}, {
  value: "\u5148\u6C7A\u689D\u4EF6",
  id: "prerequisites",
  level: 2
}, {
  value: "\u57F7\u884C",
  id: "do",
  level: 2
}, {
  value: "\u5340\u584A\u6A21\u5F0F",
  id: "block-mode",
  level: 3
}, {
  value: "\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F",
  id: "memory-mapped-mode",
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
    "id": "motivation"
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u4E00\u6B65\uFF0C\u6211\u5011\u5C07\u5728\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F\u4E0B\u4F7F\u80FD\u5916\u90E8\u7684Quad\u6216Octo SPI\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002 \u5C0D\u65BC\u5927\u591A\u6578\u5C08\u6848\uFF0C\u5EFA\u8B70\u4F7F\u7528\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF0C\u56E0\u70BA\u9019\u5141\u8A31\u61C9\u7528\u7A0B\u5F0F\u4F7F\u7528\u591A\u500B\u5927\u578B\u5F71\u50CF\u3002 \u5373\u4FBF\u6700\u666E\u901A\u7684\u61C9\u7528\uFF0C\u5167\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E5F\u53EF\u80FD\u6703\u5F88\u5FEB\u88AB\u7528\u5B8C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u82E5\u958B\u767C\u677F\u4E0D\u652F\u63F4\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF0C\u8ACB\u8DF3\u904E\u6B64\u6B65\u9A5F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u6B32\u5C07\u8CC7\u6599\u5B58\u653E\u5728\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF0C\u5FC5\u9808\u78BA\u4FDDMCU\u53EF\u4EE5\u8B80\u53D6\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u3002 \u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u61C9\u4EE5\u6240\u9700\u7684\u901F\u5EA6\u904B\u884C\uFF08\u901A\u5E38\u70BA\u6700\u5927\u901F\u5EA6\uFF09\uFF0C\u4EE5\u7372\u5F97\u6700\u4F73\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u7684\u76EE\u7684\u70BA\u4F7F\u80FD\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF0C\u4E26\u4F7F\u7528\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F\uFF0C\u5F9E\u4E2D\u8B80\u53D6\u6578\u64DA\u3002 \u7531\u65BC\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u8B80\u53D6\u901F\u5EA6\u5C0D\u5716\u5F62\u7684\u8655\u7406\u975E\u5E38\u91CD\u8981\uFF0C\u56E0\u6B64\u60A8\u61C9\u8A72\u8981\u6E2C\u8A66\u8B80\u53D6\u901F\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u9A57\u8B49`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u672C\u7BC0\u7684\u9A57\u8B49\u9EDE\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9A57\u8B49\u9EDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u57FA\u672C\u539F\u7406`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u53EF\u8B80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u53EF\u7528\u65BC\u5F71\u50CF\u5B58\u5132`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5716\u5F62\u8655\u7406\u6027\u80FD\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u53D6\u6C7A\u65BC\u8A18\u61B6\u9AD4\u6027\u80FD`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u5148\u6C7A\u689D\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u662F\u6B64\u6B65\u9A5F\u7684\u5148\u6C7A\u689D\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u95DC\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u8CC7\u8A0A\uFF0C\u67E5\u95B1\u8CC7\u6599\u624B\u518A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u95DC\u65BCMCU\u8207\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E4B\u9593\u7684\u9023\u63A5\u7684\u8CC7\u8A0A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u57F7\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `QSPI\u63A7\u5236\u5668\u5728 Connectivity -> QUADSPI\u4E2D\u7684STM32CubeMX \u8A2D\u5B9A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/qspi/cubemx-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u8A2D\u5B9AQSPI\u5FEB\u9583\u8A18\u61B6\u9AD4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6A21\u5F0F\u90E8\u5206\uFF0C\u60A8\u53EF\u4EE5\u5C07\u5FEB\u9583\u8A18\u61B6\u9AD4\u914D\u7F6E\u70BA\u55AE/\u96D9/\u56DB\u8CC7\u6599\u7DDA\u3002 \u56DB\u8CC7\u6599\u7DDA\u6700\u5FEB\u3002 \u8207\u5916\u90E8RAM\u76F8\u4F3C\uFF0C\u9019\u88E1\u9084\u9700\u9078\u64C7\u548C\u8A2D\u5B9A\u7528\u65BC\u8CC7\u6599\u7DDA\u3001\u6676\u7247\u9078\u64C7\u548C\u6642\u9418\u8A0A\u865F\u7684GPIO\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "block-mode"
  }), `\u5340\u584A\u6A21\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u80FD\u5FEB\u9583\u8A18\u61B6\u9AD4\u5F8C\uFF0C\u6211\u5011\u53EF\u4EE5\u901A\u904E\u5F9E\u4E2D\u8B80\u53D6\u6578\u64DA\u4F86\u5C0D\u5176\u9032\u884C\u6E2C\u8A66\u3002 STM32Cube\u97CC\u9AD4\u5957\u4EF6\u5305\u542B\u6709\u95DC\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "memory-mapped-mode"
  }), `\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u80FD\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u5340\u584A\u6A21\u5F0F\u4E26\u5C0D\u5176\u9032\u884C\u6E2C\u8A66\u5F8C\uFF0C\u5FC5\u9808\u5C07\u5176\u66F4\u6539\u70BA\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F\u3002 \u9019\u5C07\u5141\u8A31CPU\u76F4\u63A5\u5F9E\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u7372\u53D6\u6578\u64DA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32Cube HAL\u5305\u542B\u8B8A\u66F4\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F\u7684\u51FD\u6578\u3002 \u9019\u88E1\u7D66\u51FA\u4E86\u4E00\u500B\u7BC4\u4F8B\u3002 \u5FC5\u9808\u901A\u904E\u67E5\u95B1\u8CC7\u6599\u624B\u518A\u4F86\u7372\u53D6\u914D\u7F6E\u6578\u64DA\u3002 MCU\u7684STM32Cube\u97CC\u9AD4\u5957\u4EF6\u5305\u542B\u66F4\u591A\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `QSPI_CommandTypeDef      s_command;
QSPI_MemoryMappedTypeDef s_mem_mapped_cfg;

/* Configure the command for the read instruction */
s_command.InstructionMode   = QSPI_INSTRUCTION_1_LINE;
s_command.Instruction       = QUAD_INOUT_FAST_READ_CMD;
s_command.AddressMode       = QSPI_ADDRESS_4_LINES;
s_command.AddressSize       = QSPI_ADDRESS_24_BITS;
s_command.AlternateByteMode = QSPI_ALTERNATE_BYTES_NONE;
s_command.DataMode          = QSPI_DATA_4_LINES;
s_command.DummyCycles       = N25Q128A_DUMMY_CYCLES_READ_QUAD;
s_command.DdrMode           = QSPI_DDR_MODE_DISABLE;
s_command.DdrHoldHalfCycle  = QSPI_DDR_HHC_ANALOG_DELAY;
s_command.SIOOMode          = QSPI_SIOO_INST_EVERY_CMD;

/* Configure the memory mapped mode */
s_mem_mapped_cfg.TimeOutActivation = QSPI_TIMEOUT_COUNTER_DISABLE;

if (HAL_QSPI_MemoryMapped(&QSPIHandle, &s_command, &s_mem_mapped_cfg) != HAL_OK)
{
  return QSPI_ERROR;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u4F7F\u7528\u8207\u67D0STM32\u8A55\u4F30\u5957\u4EF6\u76F8\u540C\u7684\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF0C\u9019\u4E9B\u958B\u767C\u677F\u7684BSP\u5957\u4EF6\uFF08\u4E5F\u5728STM32Cube\u97CC\u9AD4\u4E2D\uFF09\u88E1\u6574\u5408\u4E86\u4F9B\u60A8\u4FEE\u6539\u786C\u9AD4\u7684\u53C3\u8003\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u5FEB\u9583\u8A18\u61B6\u9AD4\u8655\u65BC\u8A18\u61B6\u9AD4\u6620\u5C04\u6A21\u5F0F\u6642\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u50CF\u5916\u90E8RAM\u4E2D\u7684\u7A0B\u5F0F\u78BC\u90A3\u6A23\u5C0D\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u9032\u884C\u6E2C\u8A66\uFF08\u5728MCU\u8CC7\u6599\u8868\u624B\u518A\u4E2D\u5C0B\u627E\u4F4D\u5740\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `volatile uint32_t *externalFlash = 0x90000000;
const uint32_t size = 1000;
volatile uint32_t result = 0;

//read external Flash
for(int i = 0; i < size; i++)
{
    result += externalFlash[i];
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u91CD\u65B0\u4F7F\u7528\u5148\u524D\u8A18\u61B6\u9AD4\u6548\u80FD\u6E2C\u8A66\u7684\u6B65\u9A5F\uFF0C\u4EE5\u6E2C\u8A66\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4\u7684\u6027\u80FD\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);