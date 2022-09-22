"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7059],{

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

/***/ 90460:
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
  title: "TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u4F5C\u6210"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/scenarios-create-at",
  "id": "development/scenarios/scenarios-create-at",
  "title": "TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u4F5C\u6210",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-create-at.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/scenarios-create-at",
  "permalink": "/4.20/ja/docs/development/scenarios/scenarios-create-at",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-create-at",
    "title": "TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u4F5C\u6210"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u5909\u66F4",
    "permalink": "/4.20/ja/docs/development/scenarios/scenarios-change-pixelformat-bpp"
  },
  "next": {
    "title": "\u30C8\u30EA\u30AC\u3068\u3057\u3066\u306E\u5916\u90E8\u30A4\u30D9\u30F3\u30C8",
    "permalink": "/4.20/ja/docs/development/scenarios/example-gpio"
  }
};
const assets = {};



const toc = [{
  value: "TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u8A18\u8FF0",
  id: "describe-application-template",
  level: 2
}, {
  value: "TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u4F5C\u6210",
  id: "create-touchgfx-board-setup",
  level: 2
}, {
  value: "\u30C6\u30B9\u30C8\u3068\u691C\u8A3C",
  id: "test-verify",
  level: 2
}, {
  value: "\u6700\u5F8C\u306E\u6CE8\u610F\u70B9",
  id: "final-notes",
  level: 2
}, {
  value: "\u4E00\u822C\u7684\u306A\u6CE8\u610F\u70B9",
  id: "general-tips",
  level: 3
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\uFF08TBS\uFF09\u3068\u306F\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u5B9F\u884C\u3055\u308C\u308B\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u5B9A\u7FA9\u3059\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u30D5\u30A1\u30A4\u30EB\u306E\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u3001\u4F7F\u3044\u3084\u3059\u3044TBS\u3092\u3001\u305D\u306E\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u308BUI\u30B3\u30FC\u30C9\u3068\u306F\u5225\u306B\u914D\u5E03\u3057\u305F\u3044\u958B\u767A\u8005\u306B\u5411\u3051\u305F\u3082\u306E\u3067\u3059\u3002 \u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001\u7D44\u8FBC\u307F\u30C4\u30FC\u30EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tgfx.exe`), `\u3092\u4F7F\u7528\u3057\u3066\u3001\u65E2\u5B58\u306ETouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u518D\u914D\u5E03\u53EF\u80FD\u306ATBS\u306B\u30D1\u30C3\u30B1\u30FC\u30B8\u5316\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002 \u3053\u306E\u8A18\u4E8B\u3067\u306F\u3001"MyApplication"\u3068\u3044\u3046\u540D\u524D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30D9\u30FC\u30B9\u306B\u3057\u3066\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B8C\u5168\u306B\u6A5F\u80FD\u3059\u308BTouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7528\u610F\u3057\u305F\u5F8C\u3001TBS\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u6B21\u306E\u624B\u9806\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u8A18\u8FF0`), `  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `tgfx.exe`), `\u3092\u547C\u3073\u51FA\u3057\u3066\u3001json\u30D5\u30A1\u30A4\u30EB\uFF08.touchgfx\u304B\u3089\u5F15\u304D\u7D99\u3050\uFF09\u3092\u7DE8\u96C6\u3059\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u4F5C\u6210`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `tgfx.exe`), `\u3092\u547C\u3073\u51FA\u3057\u3066`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.tpa`), `\u3092\u5B8C\u6210\u3055\u305B\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u30C6\u30B9\u30C8\u3068\u691C\u8A3C`), ` \u30C7\u30B6\u30A4\u30CA\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3066\u691C\u8A3C\u3059\u308B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "describe-application-template"
  }), `TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u8A18\u8FF0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tgfx.exe`), `\u30C4\u30FC\u30EB\u306B\u3088\u308A\u3001TBS\u306E\u5185\u90E8\u69CB\u6210\u3092\u8A18\u8FF0\u3059\u308B\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\uFF08.json\uFF09\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u60C5\u5831\u304CTouchGFX Designer\u306B\u3088\u3063\u3066\u8AAD\u307F\u53D6\u3089\u308C\u3001\u30E6\u30FC\u30B6\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 TouchGFX Environment\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u958B\u304D\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u89AA\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -d MyApplication
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-zip.png",
    width: "550px",
    mdxType: "Figure"
  }, ".tpa\u306E\u305F\u3081\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u6E96\u5099"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u305F\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u3001\u4EE5\u4E0B\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-desc-files.png",
    width: "240px",
    mdxType: "Figure"
  }, "\u751F\u6210\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u30EA\u30B9\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u7D42\u7684\u306A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u524D\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication.json`), `\u3092\u7DE8\u96C6\u3057\u3066\u3001TouchGFX Designer\u3067TBS\u304C\u30E6\u30FC\u30B6\u306B\u3069\u306E\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u308B\u304B\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u306F\u4EE5\u4E0B\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u7DE8\u96C6\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Author`), `\uFF1A Author\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u4F5C\u8005\u540D\u3001\u9023\u7D61\u5148\u306E\u96FB\u5B50\u30E1\u30FC\u30EB\u3001URL\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Data`), `\uFF1A Data\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001TBS\u30D0\u30FC\u30B8\u30E7\u30F3\u3001\u753B\u50CF\u3001\u30DC\u30FC\u30C9\u540D\u3001\u30D9\u30F3\u30C0\u3001\u8AAC\u660E\u3001\u8A73\u7D30\u60C5\u5831\u3078\u306E\u30EA\u30F3\u30AF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
  }, "'Type'\u5C5E\u6027\u306F\u5FC5\u305A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TGAT"), "\u3068\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u3001TouchGFX Designer\u306BTBS\u304C\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u306E\u3067\u3001\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "UI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u307E\u305F\u306FBoard Specific Demo\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u3001\u305D\u306E\u300CType\u300D\u5C5E\u6027\u306F\u305D\u308C\u305E\u308C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TGUI"), "\u3068", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TGAPP"), "\u3067\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TBS\u306E\u62E1\u5F35\u60C5\u5831\u30AB\u30FC\u30C9\u3092\u8868\u793A\u3059\u308B\u3068\u304D\u306B\u3001TouchGFX Designer\u306B\u306F\u3053\u306E\u30EA\u30B9\u30C8\u304B\u3089\u6700\u59273\u3064\u306E\u753B\u50CF\uFF08\u753B\u50CF\u306E\u53C2\u7167\u306FURL\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF09\u3092\u8868\u793A\u3067\u304D\u307E\u3059\u3002 \u753B\u50CF\u306E\u6700\u9069\u306A\u89E3\u50CF\u5EA6\u306F400x280\u30D4\u30AF\u30BB\u30EB\u3067\u3059\u3002 "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "create-touchgfx-board-setup"
  }), `TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u3001\u6700\u7D42\u7684\u306A'.tpa'\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u3001TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u3092\u5B8C\u4E86\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -rc -d MyApplication
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-tpa.png",
    width: "570px",
    mdxType: "Figure"
  }, "TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u4F5C\u6210"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "test-verify"
  }), `\u30C6\u30B9\u30C8\u3068\u691C\u8A3C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u30D5\u30A1\u30A4\u30EB\u304CTouchGFX Designer\u306BTBS\u3068\u3057\u3066\u8868\u793A\u3055\u308C\u3001\u65B0\u3057\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u306B\u4F7F\u7528\u3055\u308C\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u624B\u9806\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.tpa`), `\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u3092\u8981\u4EF6\u306B\u5408\u308F\u305B\u3066\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.tpa`), `\u30D5\u30A1\u30A4\u30EB\u3092\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:\\TouchGFX\\4.13.0\\app\\packages`), `\u306B\u30B3\u30D4\u30FC\u307E\u305F\u306F\u79FB\u52D5\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30E6\u30FC\u30B6\u304CTBS\u3092\u30ED\u30FC\u30AB\u30EB\uFF65\u30D5\u30A9\u30EB\u30C0\u304B\u3089TouchGFX Designer\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-mv-to-pkg.png",
    width: "550",
    mdxType: "Figure"
  }, "TBS\u3092\u30ED\u30FC\u30AB\u30EB\uFF65\u30D5\u30A9\u30EB\u30C0\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 3
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Designer\u3092\u958B\u304D\u3001By Partners\u30BF\u30D6\u306E\u4E0B\u3067TBS\u3092\u9078\u629E\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-designer-main-info-4-17.png",
    width: "550",
    mdxType: "Figure"
  }, "TBS\u306B\u95A2\u3059\u308B\u60C5\u5831"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "final-notes"
  }), `\u6700\u5F8C\u306E\u6CE8\u610F\u70B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30B3\u30FC\u30C9\u306E\u958B\u767A\u307E\u305F\u306FTBS\u306E\u914D\u5E03\u3092\u884C\u3046\u3068\u304D\u306E\u6CE8\u610F\u70B9\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "general-tips"
  }), `\u4E00\u822C\u7684\u306A\u6CE8\u610F\u70B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u3092\u914D\u5E03\u3059\u308B\u524D\u306B\u306F\u6B21\u306E\u3053\u3068\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u3059\u3079\u3066\u306EIDE\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u671F\u5F85\u3069\u304A\u308A\u306B\u52D5\u4F5C\u3059\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `build\u30D5\u30A9\u30EB\u30C0\u3068generated\u30D5\u30A9\u30EB\u30C0\u3092\u524A\u9664\u3057\u3066\u3001TBS\u306E\u30B5\u30A4\u30BA\u3092\u524A\u6E1B\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.touchgfx`), `\u3067\u5B9A\u7FA9\u3057\u305F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30DE\u30F3\u30C9\uFF08PostGenerate\u306A\u3069\uFF09\u304C\u671F\u5F85\u3069\u304A\u308A\u306B\u52D5\u4F5C\u3059\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TBS\u304CTouchGFX Designer\u306B\u3088\u3063\u3066\u8AAD\u307F\u53D6\u308A\u53EF\u80FD\u3067\u3001\u65B0\u3057\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u306B\u4F7F\u7528\u3067\u304D\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TBS\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u9593\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u624B\u9806\u3092\u6307\u5B9A\u3059\u308B\u76F4\u63A5\u7684\u306A\u65B9\u6CD5\u306F\u3042\u308A\u307E\u305B\u3093\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F.json\u30D5\u30A1\u30A4\u30EB\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u5909\u66F4\u3057\u305F\u5F8C\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u5FC5\u305A\u518D\u30D1\u30C3\u30AF\u3057\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u306E\u914D\u5E03\u5F8C\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u30D5\u30A1\u30A4\u30EB\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `C:\\TouchGFX\\4.13.0\\app\\packages`), `\u306B\u30B3\u30D4\u30FC\u3057\u3066\u3001Designer\u304C\u958B\u3044\u3066\u3044\u308B\u5834\u5408\u306F\u518D\u8D77\u52D5\u3059\u308B\u3088\u3046\u306B\u3001\u30E6\u30FC\u30B6\u306B\u6307\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "version-control"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u3001\u958B\u767A\u8005\u306F\u958B\u767A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5168\u4F53\uFF08Board bringup\u3001TouchGFX AL\u3001TouchGFX UI\uFF09\u3092\u540C\u3058\u30EA\u30DD\u30B8\u30C8\u30EA\u5185\u306B\u4FDD\u6301\u3059\u308B\u306E\u3067\u3001\u914D\u5E03\u53EF\u80FD\u306A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u30D5\u30A1\u30A4\u30EB\u306F\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002 \u305F\u3060\u3057\u3001\u30C1\u30FC\u30E0\u306E\u30E1\u30F3\u30D0\u30FC\u304C\u65B0\u3057\u3044TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001\u7D71\u4E00\u3055\u308C\u305F\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\uFF65\u30B3\u30FC\u30C9\u304C\u30C6\u30B9\u30C8\u3084\u691C\u8A3C\u306E\u969B\u306B\u5F79\u306B\u7ACB\u3061\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u30D5\u30A1\u30A4\u30EB\u3092\u914D\u5E03\u3057\u305F\u308A\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `repo`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `git submodules`), `\u306A\u3069\u306E\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u30B3\u30FC\u30C9\u30D9\u30FC\u30B9\u3092\u30E2\u30B8\u30E5\u30E9\u30FC\u5316\u3057\u305F\u308A\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u3053\u306E\u8A18\u4E8B\u306E\u524D\u3067\u53D6\u308A\u4E0A\u3052\u305F\u3088\u3046\u306B\u3001TBS\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.json`), `\u30C7\u30A3\u30B9\u30AF\u30EA\u30D7\u30BF\u3067\u6307\u5B9A\u3055\u308C\u305F\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u5408\u308F\u305B\u308B\u65B9\u304C\u8CE2\u660E\u3067\u3059\u3002 \u30E2\u30B8\u30E5\u30E9\u30FC\u578B\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001platform\u306E\u30B3\u30FC\u30C9\u306F\u3001\u914D\u5E03\u53EF\u80FD\u306A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u304C\u3001\u30E1\u30A4\u30F3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u69CB\u6210\u5185\u306E\u30E2\u30B8\u30E5\u30FC\u30EB\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
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