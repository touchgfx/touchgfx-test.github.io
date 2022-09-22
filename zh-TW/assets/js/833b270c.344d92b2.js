"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7302],{

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

/***/ 2259:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37793);
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
  id: "scenarios-create-at",
  title: "\u5275\u5EFATouchGFX\u958B\u767C\u677F\u914D\u7F6E"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/scenarios-create-at",
  "id": "development/scenarios/scenarios-create-at",
  "title": "\u5275\u5EFATouchGFX\u958B\u767C\u677F\u914D\u7F6E",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-create-at.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/scenarios-create-at",
  "permalink": "/4.20/zh-TW/docs/development/scenarios/scenarios-create-at",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-create-at",
    "title": "\u5275\u5EFATouchGFX\u958B\u767C\u677F\u914D\u7F6E"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u66F4\u6539\u61C9\u7528\u7A0B\u5F0F\u7684\u50CF\u7D20\u683C\u5F0F",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/scenarios-change-pixelformat-bpp"
  },
  "next": {
    "title": "\u5916\u90E8\u4E8B\u4EF6\u4F5C\u70BA\u89F8\u767C\u5668",
    "permalink": "/4.20/zh-TW/docs/development/scenarios/example-gpio"
  }
};
const assets = {};



const toc = [{
  value: "\u63CF\u8FF0TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E",
  id: "describe-application-template",
  level: 2
}, {
  value: "\u5275\u5EFATouchGFX\u958B\u767C\u677F\u8A2D\u7F6E",
  id: "create-touchgfx-board-setup",
  level: 2
}, {
  value: "\u6E2C\u8A66&amp; \u9A57\u8B49",
  id: "test-verify",
  level: 2
}, {
  value: "\u6700\u7D42\u8AAA\u660E",
  id: "final-notes",
  level: 2
}, {
  value: "\u4E00\u822C\u63D0\u9192",
  id: "general-tips",
  level: 3
}, {
  value: "\u7248\u672C\u63A7\u5236",
  id: "version-control",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX\u958B\u767C\u7248\u914D\u7F6E`), ` \uFF08TBS\uFF09\u662F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), ` \u6587\u4EF6\uFF0C\u5B9A\u7FA9\u4E86\u904B\u884CTouchGFX\u61C9\u7528\u7A0B\u5F0F\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5E73\u81FA`), `\u3002 \u6B64\u65B9\u6CD5\u9069\u7528\u65BC\u5E0C\u671B\u80FD\u5920\u5C07\u6613\u65BC\u4F7F\u7528\u7684 TBS \u8207\u904B\u884C\u5728\u5B83\u5011\u4E4B\u4E0A\u7684 UI \u7A0B\u5F0F\u78BC\u7684\u958B\u767C\u4EBA\u54E1\u3002  \u672C\u6587\u63CF\u8FF0\u4E86\u5982\u4F55\u4F7F\u7528\u5167\u5EFA\u5DE5\u5177`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tgfx.exe`), `\uFF0C\u4E26\u5C07\u73FE\u6709\u7684TouchGFX\u5C08\u6848\u5C01\u88DD\u5230\u53EF\u518D\u5206\u914D\u7684TBS\u4E2D\u3002 \u672C\u6587\u4E2D\u7684\u7BC4\u4F8B\u57FA\u65BC\u540D\u70BA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `"MyApplication"`), `\u7684\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u64C1\u6709\u4E86\u529F\u80FD\u5B8C\u6574\u7684TouchGFX\u5C08\u6848\u5F8C\uFF0C\u9700\u57F7\u884C\u4E0B\u5217\u6B65\u9A5F\u4F86\u5275\u5EFATBS\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u63CF\u8FF0TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E`), `\u547C\u53EB `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `tgfx.exe`), ` \u4E26\u7DE8\u8F2Fjson\u6A94(inherits from .touchgfx)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5275\u5EFATouchGFX\u958B\u767C\u677F\u8A2D\u7F6E`), `\u547C\u53EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `tgfx.exe`), ` \u4EE5\u5B8C\u6210`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.tpa`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u6E2C\u8A2D& \u9A57\u8B49`), ` \u5C0E\u5165\u8A2D\u8A08\u7A0B\u5F0F\uFF0C\u5275\u5EFA\u4E26\u9A57\u8B49\u61C9\u7528`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "describe-application-template"
  }), `\u63CF\u8FF0TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tgfx.exe`), `\u5DE5\u5177\u751F\u6210\u8A2D\u5B9A\u6A94\uFF08.json\uFF09\uFF0C\u8A72\u6587\u4EF6\u63CF\u8FF0TBS\u7684\u5167\u90E8\u69CB\u4EF6\u3002 TouchGFX Designer\u8B80\u53D6\u6B64\u8CC7\u8A0A\u4E26\u5C07\u5176\u5448\u73FE\u7D66\u7528\u6236\u3002 \u6253\u958B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Environment`), ` \u63A7\u5236\u53F0\uFF0C\u4E26\u5728\u61C9\u7528\u7684 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `parent`), `\u76EE\u9304\u4E2D\u57F7\u884C\u4E0B\u5217\u6307\u4EE4\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -d MyApplication
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-zip.png",
    width: "550px",
    mdxType: "Figure"
  }, "\u70BA.tpa\u6E96\u5099\u6587\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u904B\u884C\u6307\u4EE4\u7684\u76EE\u9304\u4E2D\u5275\u5EFA\u4E0B\u5217\u6A94\u6848\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-desc-files.png",
    width: "240px",
    mdxType: "Figure"
  }, "\u751F\u6210\u7684\u6A94\u5217\u8868"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5275\u5EFA\u6700\u7D42\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u6A94\u4E4B\u524D\uFF0C\u5728TouchGFX Designer\u4E2D\u7DE8\u8F2F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication.json`), ` \uFF0C\u4EE5\u4FBF\u63A7\u5236\u5411\u4F7F\u7528\u8005\u986F\u793ATBS\u7684\u65B9\u5F0F\u3002 \u4F7F\u7528\u8005\u61C9\u7DE8\u8F2F\u4EE5\u4E0B\u90E8\u5206\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u4F5C\u8005`), ` \u4F7F\u7528 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u4F5C\u8005`), ` \u90E8\u5206\u4E2D\u7684\u6B04\u4F4D\u6307\u5B9A\u4F5C\u8005\u59D3\u540D\u3001\u96FB\u5B50\u4FE1\u7BB1\u548CURL\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u8CC7\u6599`), ` \u4F7F\u7528 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u8CC7\u6599`), `\u90E8\u5206\u4E2D\u7684\u6B04\u4F4D\u6307\u5B9ATBS\u7248\u672C\u3001\u5716\u7247\u3001\u958B\u767C\u677F\u540D\u7A31\u3001\u4F9B\u61C9\u5546\u3001\u63CF\u8FF0\u548C\u8A73\u7D30\u8CC7\u8A0A\u9023\u7D50\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication.json"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json"
  }), `   ...
    "Author": [
      {
        "Name": "Chad Brody",
        "Contact": "chad.brody@mycompany.com",
        "URL": "http://mycompany.com/"
      }
    ],
  ...
  "Data": {
    "Version": {
      "Major": 1,
      "Minor": 0,
      "Build": 0
    },
    "Name": "MyApplication",
    "HumanFriendlyName": "MyApplication",
    "BoardName": "Custom STM32 Board",
    "Type": "TGAT",
    "Vendor": "MyCompany",
    "Description": "This is a working project on which to base your UI on top of.",
    "DocumentationLink": "",
    "Category": "",
    "Images": [
      "http://mysite.com/MyCustomBoard-front.png",
      "http://mysite.com/MyCustomBoard-back.png"
    ],
    ...
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u52D9\u5FC5\u5C07\u201C\u985E\u578B\u201D\u5C6C\u6027\u8A2D\u7F6E\u70BA", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TGAT"), "\u3002 \u5426\u5247\uFF0C\u8A72TBS\u5C07\u4E0D\u6703\u986F\u793A\u5728TouchGFX Designer\u4E2D\uFF01"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u7576\u5275\u5EFAUI\u7BC4\u672C\u6216\u7279\u5B9A\u65BC\u958B\u767C\u677F\u7684\u6F14\u793A\u6642\uFF0C\u201C\u985E\u578B\u201D\u5C6C\u6027\u5206\u5225\u662F", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TGUI"), "\u548C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TGAPP"), "\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5728\u986F\u793ATBS\u7684\u64F4\u5C55\u8CC7\u8A0A\u5361\u6642\uFF0CTouchGFX Designer\u6700\u591A\u80FD\u5920\u986F\u793A\u8A72\u6E05\u55AE\u4E2D\u7684\u4E09\u5E45\u5716\u7247\uFF08\u5716\u7247\u5F15\u7528\u5FC5\u9808\u662FURL\uFF09\u3002 \u5716\u7247\u7684\u6700\u4F73\u89E3\u6790\u5EA6\u70BA400x280\u50CF\u7D20\u3002 "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "create-touchgfx-board-setup"
  }), `\u5275\u5EFATouchGFX\u958B\u767C\u677F\u8A2D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57F7\u884C\u4EE5\u4E0B\u6307\u4EE4\u5275\u5EFA\u6700\u7D42\u7684\u201C.tpa\u201D\u6A94\uFF0C\u4E26\u78BA\u5B9ATouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -rc -d MyApplication
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-tpa.png",
    width: "570px",
    mdxType: "Figure"
  }, "\u5275\u5EFATouchGFX\u958B\u767C\u677F\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "test-verify"
  }), `\u6E2C\u8A66& \u9A57\u8B49`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70BA\u4E86\u9A57\u8B49`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), ` \u6A94\u80FD\u5920\u4F5C\u70BATBS\u88ABTouchGFX Designer\u8B80\u53D6\u4E26\u7528\u65BC\u5275\u5EFA\u65B0\u7684\u61C9\u7528\uFF0C\u8ACB\u57F7\u884C\u4E0B\u5217\u6B65\u9A5F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6839\u64DA\u81EA\u5DF1\u7684\u8981\u6C42\u91CD\u547D\u540D `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.tpa`), ` \u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5C07 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.tpa`), `\u6A94\u8907\u88FD\u6216\u79FB\u52D5\u5230 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:\\TouchGFX\\4.13.0\\app\\packages`), `\u3002 \u7136\u5F8C\uFF0C\u7528\u6236\u53EF\u4EE5\u5C07TBS\u5F9E\u672C\u5730\u8CC7\u6599\u593E\u5C0E\u5165TouchGFX Designer\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-mv-to-pkg.png",
    width: "550",
    mdxType: "Figure"
  }, "\u5C07TBS\u5B89\u88DD\u5230\u672C\u5730\u8CC7\u6599\u593E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 3
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6253\u958BTouchGFX Designer\uFF0C\u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `By Partners`), ` \u9078\u9805\u5361\u4E0B\u9078\u64C7\u8A72TBS\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-designer-main-info-4-17.png",
    width: "550",
    mdxType: "Figure"
  }, "TBS\u7684\u76F8\u95DC\u8CC7\u8A0A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "final-notes"
  }), `\u6700\u7D42\u8AAA\u660E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u9762\u4E00\u7BC0\u5305\u542B\u5728\u70BATBS\u958B\u767C\u7A0B\u5F0F\u78BC\u6216\u5206\u767CTBS\u6642\u8981\u8003\u616E\u7684\u4E8B\u9805\u7684\u63D0\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "general-tips"
  }), `\u4E00\u822C\u63D0\u9192`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u60C5\u6CC1\u4E0B\uFF0C\u5728\u5206\u767C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u4E4B\u524D\u61C9\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u78BA\u4FDD\u63D0\u4F9B\u7684\u6240\u6709IDE\u5C08\u6848\u6309\u9810\u671F\u6B63\u5E38\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u522A\u9664`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `build`), `-\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `generated`), `\u8CC7\u6599\u593E\uFF0C\u4EE5\u4FBF\u6E1B\u5C11TBS\u7684\u8CC7\u6599\u91CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u78BA\u4FDD\u5728TouchGFX\u5C08\u6848\u6A94\u6848`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.touchgfx`), `\u4E2D\u5B9A\u7FA9\u7684\u81EA\u8A02\u6307\u4EE4\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `PostGenerate`), `-\u7B49\uFF09\u6309\u9810\u671F\u6B63\u5E38\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u78BA\u4FDDTBS\u53EF\u4EE5\u88ABTouchGFX Designer\u8B80\u53D6\u4E26\u7528\u65BC\u5275\u5EFA\u65B0\u7684\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6C92\u6709\u4E00\u7A2E\u76F4\u63A5\u7684\u65B9\u5F0F\u4F86\u6307\u5B9ATBS\u7248\u672C\u4E4B\u9593\u7684\u5347\u7D1A\u6D41\u7A0B\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5728\u4FEE\u6539TouchGFX\u5C08\u6848\u6216\u201C.json\u201D\u6A94\u7684\u5167\u5BB9\u5F8C\uFF0C\u52D9\u5FC5\u91CD\u65B0\u5C01\u5305\u61C9\u7528\u7BC4\u672C\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5206\u767C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u5F8C\uFF0C\u61C9\u6307\u793A\u7528\u6236\u5C07`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u6A94\u8907\u88FD\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `C:\\TouchGFX\\4.13.0\\app\\packages`), `\u4E2D\uFF0C\u4E26\u91CD\u555FTouchGFX Designer\uFF08\u82E5\u5DF2\u6253\u958B\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "version-control"
  }), `\u7248\u672C\u63A7\u5236`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u958B\u767C\u8005\u901A\u5E38\u6703\u5C07\u6574\u500B\u958B\u767C\u5C08\u6848\uFF08\u958B\u767C\u677F\u555F\u52D5\u642D\u5EFA\u3001TouchGFX AL\u548CTouchGFX UI\uFF09\u4FDD\u5B58\u5728\u540C\u4E00\u500B\u5B58\u5132\u5EAB\u4E2D\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u53EF\u5206\u767C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u6587\u4EF6\u3002 \u4F46\u662F\uFF0C\u70BA\u4E86\u8B93\u5718\u968A\u6210\u54E1\u80FD\u5920\u555F\u52D5\u65B0\u7684TouchGFX\u61C9\u7528\uFF0C\u5728\u9032\u884C\u6E2C\u8A66\u548C\u9A57\u8B49\u6642\uFF0C\u7D71\u4E00\u7684\u5E73\u81FA\u7A0B\u5F0F\u78BC\u6703\u5F88\u6709\u5E6B\u52A9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u9700\u901A\u904E\u5206\u767C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u6A94\u548C/\u6216\u4F7F\u7528\u5DE5\u5177\uFF08\u5982`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `repo`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `git\u5B50\u6A21`), `\uFF09\u4F86\u6A21\u7D44\u5316\u7A0B\u5F0F\u78BC\u5EAB\uFF0C\u6700\u597D\u6309\u7167\u524D\u6587\u6240\u8FF0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.json`), `\u63CF\u8FF0\u6A94\u4E2D\u6307\u5B9A\u7684\u7248\u672C\u4F86\u547D\u540DTBS\u7D44\u4EF6\u7248\u672C\u3002 \u5982\u679C\u4F7F\u7528\u6A21\u7D44\u5316\u65B9\u6CD5\uFF0C\u5247`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `platform`), `\u7A0B\u5F0F\u78BC\u5728\u88AB\u7528\u4F5C\u4E3B\u5C08\u6848\u7D50\u69CB\u4E2D\u7684\u6A21\u7D44\u7684\u540C\u6642\uFF0C\u4ECD\u53EF\u7528\u65BC\u5275\u5EFA\u53EF\u5206\u767C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json"
  }), `  "Data": {
    "Version": {
      "Major": 3,
      "Minor": 0,
      "Build": 0
    },
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ git tag
v1.1.0
v2.0.0
v2.1.0
v3.0.0
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);