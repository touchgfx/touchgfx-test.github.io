"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9781],{

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

/***/ 54677:
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
  id: "03-display-internal",
  title: "3. \u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  sidebar_label: "3. \u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/03-display-internal",
  "id": "development/board-bring-up/how-to/03-display-internal",
  "title": "3. \u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/03-display-internal.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/03-display-internal",
  "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/03-display-internal",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "id": "03-display-internal",
    "title": "3. \u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
    "sidebar_label": "3. \u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4"
  },
  "sidebar": "docs",
  "previous": {
    "title": "2. CPU\u52D5\u4F5C",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/02-cpu-running"
  },
  "next": {
    "title": "4. \u5916\u90E8RAM",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/04-enable-external-ram"
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
  value: "\u691C\u8A3C",
  id: "verification",
  level: 3
}, {
  value: "\u524D\u63D0\u6761\u4EF6",
  id: "prerequisites",
  level: 2
}, {
  value: "\u4F5C\u696D\u5185\u5BB9",
  id: "do",
  level: 2
}, {
  value: "\u30D1\u30E9\u30EC\u30EBRGB\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  id: "parallel-rgb-displays",
  level: 3
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306EGPIO",
  id: "display-gpio",
  level: 4
}, {
  value: "LTDC\u306E\u8A2D\u5B9A",
  id: "ltdc-configuration",
  level: 4
}, {
  value: "\u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A",
  id: "clock-configuration",
  level: 4
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30A2\u30C9\u30EC\u30B9\u8A2D\u5B9A",
  id: "setting-the-framebuffer-address",
  level: 4
}, {
  value: "LTDC\u5272\u8FBC\u307F\u306E\u6709\u52B9\u5316",
  id: "enabling-ltdc-interrupt",
  level: 4
}, {
  value: "\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u306E\u78BA\u8A8D",
  id: "check-the-framerate",
  level: 4
}, {
  value: "SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  id: "spi-display",
  level: 3
}, {
  value: "SPI\u306E\u8A2D\u5B9A",
  id: "spi-configuration",
  level: 4
}, {
  value: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8272\u306E\u78BA\u8A8D",
  id: "checking-the-display-colors",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "motivation"
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u5185\u8535RAM\u304B\u3089\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092\u8EE2\u9001\u3059\u308B\u3053\u3068\u3067\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u6A5F\u80FD\u3059\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u3001\u30C7\u30FC\u30BF\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u9001\u4FE1\u3067\u304D\u308B\u3053\u3068\u3001\u304A\u3088\u3073\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5185\u5BB9\u3092\u7D99\u7D9A\u7684\u306B\u66F4\u65B0\u3067\u304D\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u753B\u50CF\u30C7\u30FC\u30BF\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u4E0D\u5177\u5408\u304C\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u306A\u304F\u3001\u7D99\u7D9A\u7684\u306B\u65B0\u3057\u3044\u30C7\u30FC\u30BF\u3092\u9001\u4FE1\u3067\u304D\u308B\u3053\u3068\u3082\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u8EE2\u9001\u901F\u5EA6\u3082\u6E2C\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u5F97\u3089\u308C\u308B\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306F\u5185\u90E8RAM\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002\u524D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8FF0\u3079\u305F\u3088\u3046\u306B\u3001\u3053\u306ERAM\u306F\u8AAD\u51FA\u3057\u3068\u66F8\u8FBC\u307F\u306E\u4E21\u65B9\u304C\u53EF\u80FD\u3060\u304B\u3089\u3067\u3059\u3002 \u3053\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u7E70\u308A\u8FD4\u3057\u66F4\u65B0\u3057\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/framebuffer"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1`), `\u306E\u30B5\u30A4\u30BA\u306F\u6B21\u5F0F\u3067\u8A08\u7B97\u3055\u308C\u308B\u3053\u3068\u3092\u601D\u3044\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u5E45 x \u9AD8\u3055 x \u30D3\u30C3\u30C8/\u30D4\u30AF\u30BB\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3057\u305F\u304C\u3063\u3066\u3001\u305F\u3068\u3048\u3070\u89E3\u50CF\u5EA6480 x 272\u306E\u4E00\u822C\u7684\u306A16bit\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306F\u3001480 x 272 x 16/8\u30D0\u30A4\u30C8 = 261120\u30D0\u30A4\u30C8\u3092\u5360\u6709\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u5927\u304D\u304F\u306A\u308A\u3059\u304E\u3066\u3001\u5185\u90E8RAM\u306B\u683C\u7D0D\u3067\u304D\u306A\u3044\u3088\u3046\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B5\u30A4\u30BA\u3067\u3082\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u30B9\u30AD\u30C3\u30D7\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 \u305D\u306E\u5834\u5408\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4E00\u90E8\u306E\u307F\u3092\u66F4\u65B0\u3059\u308B\u3088\u3046\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u65B9\u6CD5\u306B\u3088\u308A\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u5FC5\u8981\u306ARAM\u306E\u5BB9\u91CF\u3092\u5185\u90E8RAM\u306B\u5408\u308F\u305B\u3066\u8ABF\u6574\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u306E\u30BF\u30A4\u30D7\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001\u306B\u5FC5\u8981\u306A\u8A2D\u5B9A\u3068\u30B3\u30FC\u30C9\u306B\u5927\u304D\u306A\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u307E\u305ALTDC\u306B\u63A5\u7D9A\u3059\u308B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30B3\u30FC\u30C9\u306F\u5927\u304D\u304F\u5909\u308F\u308A\u307E\u3059\u304C\u3001\u30BF\u30B9\u30AF\u3084\u76EE\u6A19\u306F\u540C\u3058\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u76EE\u6A19\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5185\u5BB9\u3092\u7D99\u7D9A\u7684\u306B\u5909\u66F4\u3057\u3066\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u518D\u9001\u4FE1\u3067\u304D\u308B\u3053\u3068\u3082\u691C\u8A3C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\u691C\u8A3C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u8868\u306B\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u691C\u8A3C\u30DD\u30A4\u30F3\u30C8\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u691C\u8A3C\u30DD\u30A4\u30F3\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u691C\u8A3C\u5185\u5BB9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u8868\u793A\u3055\u308C\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u307E\u305F\u306FSPI\u304C\u8A2D\u5B9A\u3055\u308C\u52D5\u4F5C\u3057\u3066\u3044\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u66F4\u65B0\u3055\u308C\u305F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u8868\u793A\u3055\u308C\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u7E70\u308A\u8FD4\u3057\u9001\u4FE1\u3059\u308B\u4ED5\u7D44\u307F\u304C\u308F\u304B\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8272\u304C\u6B63\u3057\u3044`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GPIO\u304C\u6B63\u3057\u3044\u3053\u3068\uFF08LTDC\uFF09\u3084\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30C7\u30FC\u30BF\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068\u4E00\u81F4\u3059\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u304C\u6B63\u3057\u3044`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D4\u30AF\u30BB\u30EB\uFF65\u30AF\u30ED\u30C3\u30AF\u3068\u30DD\u30FC\u30C1\u304C\u5FC5\u8981\u306A\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3092\u5F97\u3089\u308C\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u524D\u63D0\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306B\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u524D\u63D0\u6761\u4EF6\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u95A2\u3059\u308B\u60C5\u5831(\u901A\u5E38\u306F\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u63A5\u7D9A\u306B\u95A2\u3059\u308B\u60C5\u5831`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u4F5C\u696D\u5185\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5FC5\u8981\u306A\u8A2D\u5B9A\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30BF\u30A4\u30D7\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\u3069\u306E\u30BF\u30A4\u30D7\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u3082\u3001\u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u5FC5\u8981\u3067\u3059\u3002 \u3053\u306E\u30E1\u30E2\u30EA\u3092\u5272\u308A\u5F53\u3066\u308B\u7C21\u5358\u306A\u65B9\u6CD5\u306F\u3001\u5358\u306B\u9069\u5207\u306A\u30B5\u30A4\u30BA\u306E\u30B0\u30ED\u30FC\u30D0\u30EB\u914D\u5217\u3092\u5BA3\u8A00\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* USER CODE BEGIN PV */
uint16_t framebuffer[480*272];  //16 bpp framebuffer
/* USER CODE END PV */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5185\u90E8RAM\u304C\u3053\u306E\u914D\u5217\u3092\u4FDD\u6301\u3059\u308B\u306E\u306B\u5341\u5206\u306A\u5927\u304D\u3055\u3067\u306F\u306A\u3044\u5834\u5408\u306F\u3001480 x 200\u306A\u3069\u4F4E\u3044\u89E3\u50CF\u5EA6\u306B\u5BFE\u5FDC\u3059\u308B\u914D\u5217\u3092\u5BA3\u8A00\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3059\u308B\u65B9\u6CD5\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30BF\u30A4\u30D7\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u6B21\u306E\u4ECA\u5EA6\u306F\u3053\u306E\u70B9\u306B\u3064\u3044\u3066\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "parallel-rgb-displays"
  }), `\u30D1\u30E9\u30EC\u30EBRGB\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u306F\u3058\u3081\u306B\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306ELTDC\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u63A5\u7D9A\u3055\u308C\u305F\u30D1\u30E9\u30EC\u30EBRGB\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u3088\u3046\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8A2D\u5B9A\u4F5C\u696D\u306F\u3001\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306EGPIO\u63A5\u7D9A\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LTDC\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LTDC\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30AF\u30ED\u30C3\u30AF\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30A2\u30C9\u30EC\u30B9\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u306E\u78BA\u8A8D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8AAC\u660E\u4F8B\u3068\u3057\u3066\u3001STM32F746Discovery\u8A55\u4FA1\u30AD\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u30DC\u30FC\u30C9\u306F\u3001480 x 272\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u642D\u8F09\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "display-gpio"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306EGPIO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F24BPP\u30E2\u30FC\u30C9\u3067\u52D5\u4F5C\u3059\u308B\u305F\u3081\u3001LTDC\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u63A5\u7D9A\u3059\u308B\u305F\u3081\u306B24\u306EGPIO\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u6700\u3082\u7C21\u5358\u306B\u8A2D\u5B9A\u3059\u308B\u306B\u306F\u3001STM32CubeMX\u306E\uFF3BMultimedia\uFF3D>\uFF3BLTDC\uFF3D>\uFF3BGPIO Settings\uFF3D\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306EGPIO\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D4\u30AF\u30BB\u30EB\u8EE2\u9001\u306E\u305F\u3081\u306E24\u306EGPIO(LTDC_B0\u306A\u3069)\u306B\u52A0\u3048\u30014\u3064\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u5236\u5FA1\u4FE1\u53F7\u3082\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4FE1\u53F7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6A5F\u80FD`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_CLK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D4\u30AF\u30BB\u30EB\uFF65\u30AF\u30ED\u30C3\u30AF\u3002 24\u672C\u306E\u30E9\u30A4\u30F3\u304B\u3089\u30D4\u30AF\u30BB\u30EB\u3092\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3059\u308B\u30BF\u30A4\u30DF\u30F3\u30B0\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u77E5\u3089\u305B\u308B\u4FE1\u53F7\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_DE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30FC\u30BF\uFF65\u30A4\u30CD\u30FC\u30D6\u30EB\u3002 \u3053\u306E\u4FE1\u53F7\u304C\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u5834\u5408\u306B\u30D4\u30AF\u30BB\u30EB\u304C\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_HSYNC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6C34\u5E73\u540C\u671F\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u30D4\u30AF\u30BB\u30EB\uFF65\u30E9\u30A4\u30F3\u306E\u958B\u59CB\u3092\u691C\u51FA\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_VSYNC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5782\u76F4\u540C\u671F\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u30D5\u30EC\u30FC\u30E0\u306E\u958B\u59CB\u3092\u691C\u51FA\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u8A2D\u8A08\u3092\u78BA\u8A8D\u3057\u3001\u5BFE\u5FDC\u3059\u308B\u8A2D\u5B9A\u3092\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "ltdc-configuration"
  }), `LTDC\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u306E\u8A2D\u5B9A\u306F\u3001STM32CubeMX\u306E\uFF3BMultimedia\uFF3D>\uFF3BLTDC\uFF3D>\uFF3BParameter Settings\uFF3D\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "LTDC\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5E45\u3068\u9AD8\u3055\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u89E3\u50CF\u5EA6\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002 \u540C\u671F\u30D1\u30EB\u30B9\u306E\u5E45\u3068\u30DD\u30FC\u30C1\u306E\u5E45\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u4FE1\u53F7\u306E\u6975\u6027\u306B\u3082\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002 \u7070\u8272\u3067\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u5024\u306F\u3001\u4ED6\u306E\u5024\u304B\u3089\u8A08\u7B97\u3055\u308C\u308B\u3082\u306E\u3067\u3059\u3002 \u3053\u308C\u3089\u306E\u5024\u306F\u3001LTDC\u306E\u30EC\u30B8\u30B9\u30BF\u306B\u66F8\u304D\u8FBC\u307E\u308C\u307E\u3059(\u30B3\u30FC\u30C9\u5185\u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u30EC\u30A4\u30E4\u306E\u8A2D\u5B9A\u306B\u79FB\u52D5\u3057\u307E\u3059\uFF08\uFF3BMultimedia\uFF3D>\uFF3BLTDC\uFF3D>\uFF3BLayer Settings\uFF3D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "LTDC\u30EC\u30A4\u30E4\uFF65\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30C6\u30B9\u30C8\u304A\u3088\u3073\u4E00\u822C\u7684\u306ATouchGFX\u3067\u4F7F\u7528\u3059\u308B\u306E\u306F\u30011\u30EC\u30A4\u30E4\u306E\u307F\u3067\u3059\u3002 \u30EC\u30A4\u30E40\u306E\u89E3\u50CF\u5EA6\u3092\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5BF8\u6CD5\u306B\u5408\u308F\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30A2\u30C9\u30EC\u30B9\u306F\u5F8C\u307B\u3069\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u3053\u3053\u3067\u306F\u5909\u66F4\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u89E3\u50CF\u5EA6\u3088\u308A\u3082\u5C0F\u3055\u3044\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u914D\u5217\u3092\u5BA3\u8A00\u3057\u305F\u5834\u5408\u306F\u3001\u305D\u306E\u5BF8\u6CD5\u306B\u4E00\u81F4\u3059\u308B\u3088\u3046\u306B\u30EC\u30A4\u30E4\u306E\u30B5\u30A4\u30BA\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002 LTDC\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3067\u4F7F\u7528\u3067\u304D\u306A\u3044\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30D4\u30AF\u30BB\u30EB\u306E\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u30AB\u30E9\u30FC\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u30AB\u30E9\u30FC\u306F\u3001\u8D64(B: 0x00, G: 0x00, R: 0xFF) \u306A\u3069\u306E\u8B58\u5225\u3057\u3084\u3059\u3044\u5024\u306B\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "clock-configuration"
  }), `\u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A\u3082\u91CD\u8981\u3067\u3059\u3002 \u3059\u3079\u3066\u306EGPIO\u3068LTDC\u3067\u30AF\u30ED\u30C3\u30AF\u3092\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30D4\u30AF\u30BB\u30EB\uFF65\u30AF\u30ED\u30C3\u30AF\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u8A31\u5BB9\u3067\u304D\u308B\u7BC4\u56F2\u306B\u53CE\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u30AF\u30ED\u30C3\u30AF\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u306F3\u3064\u306E\u30AF\u30ED\u30C3\u30AF\u3001HCLK\u3001PCLK2\u3001LCD_CLK\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "setting-the-framebuffer-address"
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30A2\u30C9\u30EC\u30B9\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3067\u3001\u30EC\u30A4\u30E40\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30A2\u30C9\u30EC\u30B9\u30920xC0000000\u306B\u8A2D\u5B9A\u3057\u307E\u3057\u305F\u3002 \u3053\u308C\u3092\u3001\u5185\u90E8RAM\u306E\u914D\u5217\u306E\u30A2\u30C9\u30EC\u30B9\u306B\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 STM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306E\u3044\u305A\u308C\u304B\u306EHAL\u95A2\u6570\u3092\u4F7F\u7528\u3059\u308C\u3070\u7C21\u5358\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `  /* USER CODE BEGIN 2 */
  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);
  /* USER CODE END 2 */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `HAL\u95A2\u6570\u3067\u306F\u30EC\u30A4\u30E4\u306E\u756A\u53F7\u306F1\u30012\u3001\u3067\u3059\u304C\u3001STM32CubeMX\u3067\u306F0\u30011\u3067\u3059\u3002 LTDC\u306E\u4ED6\u306E\u90E8\u5206\u306F\u3001STM32CubeMX\u304C\u751F\u6210\u3059\u308B\u30B3\u30FC\u30C9\u306E\u95A2\u6570`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `MX_LTDC_Init(void)`), `\u3067\u5B8C\u5168\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u7E70\u308A\u8FD4\u3057\u9001\u4FE1\u3057\u307E\u3059\u3002 \u8868\u793A\u3055\u308C\u308B\u753B\u50CF\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\u5024\u3067\u6C7A\u307E\u308A\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5185\u306E\u5024\u307E\u305F\u306F\u30D1\u30BF\u30FC\u30F3\u3092\u5909\u66F4\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002 \u305F\u3068\u3048\u3070\u3001memset\u3092\u4F7F\u7528\u3057\u3066\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u30920xFF\u306B\u30AF\u30EA\u30A2\u3059\u308B\u3068\u3001\u767D\u3044\u753B\u9762\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4E00\u90E8\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u30D0\u30C3\u30AF\u30E9\u30A4\u30C8\u306E\u70B9\u706F\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "enabling-ltdc-interrupt"
  }), `LTDC\u5272\u8FBC\u307F\u306E\u6709\u52B9\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u30D5\u30EC\u30FC\u30E0\u3054\u3068\u306B\u5272\u8FBC\u307F\u3092\u767A\u751F\u3055\u305B\u307E\u3059\u3002\u3053\u306E\u5272\u8FBC\u307F\u3092NVIC\uFF08\u30B3\u30A2\u5272\u8FBC\u307F\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF09\u3067\u6709\u52B9\u5316\u3057\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u51E6\u7406\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-ltdc-interrupt-config.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "LTCD\u5272\u8FBC\u307F\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5272\u8FBC\u307F\u30CF\u30F3\u30C9\u30E9\u3067\u306F\u3001\u5272\u8FBC\u307F\u304C\u767A\u751F\u6BCE\u306B\u5272\u8FBC\u307F\u3092\u518D\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32f7xx_it.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{7}",
    "{7}": true
  }), `void LTDC_IRQHandler(void)
{
  /* USER CODE BEGIN LTDC_IRQn 0 */
  /* USER CODE END LTDC_IRQn 0 */
  HAL_LTDC_IRQHandler(&hltdc);
  /* USER CODE BEGIN LTDC_IRQn 1 */
  HAL_LTDC_ProgramLineEvent(&hltdc,0);
  /* USER CODE END LTDC_IRQn 1 */
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "check-the-framerate"
  }), `\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u306E\u78BA\u8A8D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306ELTDC\u5272\u8FBC\u307F\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u99C6\u52D5\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30C7\u30D0\u30C3\u30AC\u3092\u4F7F\u7528\u3057\u3066\u3001\u3053\u306E\u5272\u8FBC\u307F\u304C\u767A\u751F\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5272\u8FBC\u307F\u9593\u9694\u306F\u3001\u3059\u3079\u3066\u306E\u30D4\u30AF\u30BB\u30EB\u3068\u30DD\u30FC\u30C1\u306E\u30AF\u30ED\u30C3\u30AD\u30F3\u30B0\u306E\u5408\u8A08\u6642\u9593\u306B\u306A\u308A\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3092\u8ABF\u6574\u3059\u308B\u306B\u306F\u3001\u30DD\u30FC\u30C1\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002 \u30DD\u30FC\u30C1\u306FLTDC\u8A2D\u5B9A\u306E\u4E00\u90E8\u3067\u3057\u305F\u3002 \u7FD2\u6163\u7684\u306B\u3001\u5782\u76F4\u30D5\u30ED\u30F3\u30C8\uFF65\u30DD\u30FC\u30C1\u5E45\u3092\u62E1\u5F35\u3057\u3066\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3092\u4E0B\u3052\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3092\u7C21\u5358\u306B\u6E2C\u5B9A\u3059\u308B\u306B\u306F\u3001\u5272\u8FBC\u307F\u30CF\u30F3\u30C9\u30E9\u3067HAL_GetTick() \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32f7xx_it.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6-8}",
    "{6-8}": true
  }), `volatile int last = 0;
volatile int diff = 0;
void LTDC_IRQHandler(void)
{
  /* USER CODE BEGIN LTDC_IRQn 0 */
  int now = HAL_GetTick();
  diff = now - last;
  last = now;
  /* USER CODE END LTDC_IRQn 0 */
  HAL_LTDC_IRQHandler(&hltdc);
  ...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCE\u79D260\u30D5\u30EC\u30FC\u30E0\u306E\u5834\u5408\u3001\u30D5\u30EC\u30FC\u30E0\u9593\u306E\u6642\u9593\u306F1000ms / 60 = 16ms\u306B\u306A\u308B\u3053\u3068\u3092\u899A\u3048\u3066\u304A\u3044\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "spi-display"
  }), `SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ECA\u5EA6\u306FSPI\u30D0\u30B9\u3067\u63A5\u7D9A\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u3088\u3046\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8A2D\u5B9A\u4F5C\u696D\u306F\u3001\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SPI\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3068GPIO\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AF\u30ED\u30C3\u30AF\u306E\u78BA\u8A8D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5FC5\u8981\u306A\u30C9\u30E9\u30A4\u30D0\uFF65\u30B3\u30FC\u30C9\u306E\u4F5C\u6210\u307E\u305F\u306F\u5165\u624B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "spi-configuration"
  }), `SPI\u306E\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u3067\u958B\u59CB\u3057\u3001SPI\u3092\u6709\u52B9\u5316\u3057\u307E\u3059\u3002 \u4E0B\u56F3\u306F\u3001STM32G081\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F8B\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI \u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u3059\u308BSPI\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8(\u30C7\u30FC\u30BF\uFF65\u30B5\u30A4\u30BA\u3068\u30D3\u30C3\u30C8\u9806) \u306B\u3064\u3044\u3066\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3067\u306F\u300116bit\u306E\u30EF\u30FC\u30C9\u306F\u30EA\u30C8\u30EB\uFF65\u30A8\u30F3\u30C7\u30A3\u30A2\u30F3\u306E\u30D0\u30A4\u30C8\u9806\u3067\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u53D7\u3051\u4ED8\u3051\u308B\u3088\u3046\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u8A2D\u5B9A\u3067\u304D\u308B\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 \u8A2D\u5B9A\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u3001\u9001\u4FE1\u6642\u306B\u30C7\u30FC\u30BF\u3092\u5909\u63DB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30AF\u30ED\u30C3\u30AF\u306E\u6975\u6027\u3068\u4F4D\u76F8\u306B\u3064\u3044\u3066\u3082\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3053\u308C\u3089\u3082\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u306B\u898F\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SPI\u30AF\u30ED\u30C3\u30AF(\u30D3\u30C3\u30C8\uFF65\u30EC\u30FC\u30C8) \u306F\u3001FCLK\u306E\u5206\u5468\u56DE\u8DEF\u3067\u5236\u5FA1\u3057\u307E\u3059\u3002 \u6700\u5C0F\u5206\u5468\u6BD4\u306F2\u3067\u3059\u3002 \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u305F\u3068\u3048\u307064MHz\u3067\u52D5\u4F5C\u3059\u308B\u5834\u5408\u3001SPI\u306E\u6700\u5927\u30D3\u30C3\u30C8\uFF65\u30EC\u30FC\u30C8\u306F32Mb/s\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BGPIO\uFF3D\u30BF\u30D6\u3067\u3001SPI\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u7528\u306EGPIO\u306E\u9078\u629E\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI\u306EGPIO\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BPinout\uFF3D\u30D3\u30E5\u30FC\u306E\u53F3\u5074\u306B\u3042\u308BGPIO\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-07.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI\u306EGPIO\u306E\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B8B\u308B\u4F5C\u696D\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8A2D\u5B9A\u3068\u3001SPI\u30C1\u30E3\u30CD\u30EB\u3067\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001\u3067\u3059\u3002 \u305D\u306E\u305F\u3081\u306E\u30B3\u30FC\u30C9\u306F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u5927\u304D\u304F\u4F9D\u5B58\u3059\u308B\u305F\u3081\u3001STM32CubeMX\u3067\u306F\u81EA\u52D5\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002 \u591A\u304F\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u3001\u30B3\u30DE\u30F3\u30C9\uFF65\u30B7\u30FC\u30B1\u30F3\u30B9\u306E\u9001\u4FE1\u3068\u3001\u56FA\u6709\u306E\u96FB\u6E90\u6295\u5165\u30B7\u30FC\u30B1\u30F3\u30B9\u306E\u5B9F\u884C\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u305D\u306E\u5F8C\u3001\u901A\u5E38\u306F\u30AB\u30E9\u30FC\uFF65\u30E2\u30FC\u30C9\u3092\u8A2D\u5B9A\u3057\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u30AA\u30F3\u306B\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u3059\u3079\u3066\u3001\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u307E\u305F\u306F\u30D9\u30F3\u30C0\u304C\u63D0\u4F9B\u3059\u308B\u30B5\u30F3\u30D7\u30EB\u306B\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306B\u306F\u3001SPI\u901A\u4FE1\u3092\u4F7F\u7528\u3057\u305F\u30B5\u30F3\u30D7\u30EB\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 STM32Cube HAL\u306B\u306F\u5404\u7A2E\u30D8\u30EB\u30D1\u95A2\u6570\u304C\u3042\u308A\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u9001\u4FE1\u306E\u57FA\u672C\u7684\u306A\u95A2\u6570\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32g0xx_hal_spi.h"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `HAL_StatusTypeDef HAL_SPI_Transmit(SPI_HandleTypeDef *hspi, uint8_t *pData, uint16_t Size, uint32_t Timeout);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u4FE1\u304C\u5B89\u5B9A\u3057\u3066\u52D5\u4F5C\u3059\u308B\u307E\u3067\u3001\u3053\u308C\u3089\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002 \u5B89\u5B9A\u3057\u305F\u5F8C\u306F\u3001\u5C02\u7528\u306E\u95A2\u6570\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3067\u6027\u80FD\u304C\u5411\u4E0A\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SPI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30C9\u30E9\u30A4\u30D0\u3092\u4F5C\u6210\u3059\u308B\u5DE5\u7A0B\u3067\u306F\u3001SPI\u5BFE\u5FDC\u306E\u30AA\u30B7\u30ED\u30B9\u30B3\u30FC\u30D7\u307E\u305F\u306FSPI-USB\u30ED\u30AC\u30FC\u304C\u975E\u5E38\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30CE\u30A4\u30BA\u306E\u554F\u984C\u3092\u907F\u3051\u308B\u305F\u3081\u3001SPI\u3067\u306F\u4F4E\u5468\u6CE2\u6570\u304B\u3089\u958B\u59CB\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "checking-the-display-colors"
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8272\u306E\u78BA\u8A8D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u9001\u4FE1\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3053\u306E\u6BB5\u968E\u3067\u3001\u8868\u793A\u8272\u3092\u5341\u5206\u306B\u78BA\u8A8D\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u8272\u3092\u66F8\u304D\u8FBC\u307F\u3001\u76EE\u8996\u3067\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u78BA\u8A8D\u3059\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u4EE5\u4E0B\u306B\u3044\u304F\u3064\u304B\u306E\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C6\u30B9\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8AAC\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8D64`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u8D64\u8272\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3082\u8D64\u304F\u306A\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7DD1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u7DD1\u8272\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3082\u7DD1\u8272\u306B\u306A\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9752`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u9752\u8272\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3082\u9752\u304F\u306A\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6697\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `50%\u8D64\u306A\u3069\u306E\u6697\u8272(0x8000\u306A\u3069)\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u6697\u304F\u8868\u793A\u3055\u308C\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5909\u5316\u3059\u308B\u8272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u6BCE\u79D2\u5909\u66F4\u3057\u3066\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3082\u66F4\u65B0\u3055\u308C\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RGB565\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u8272\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u65B9\u5F0F\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t r    = 0xff, g = 0x00, b = 0x00;             // Solid red
uint16_t col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565
// Put colors into the framebuffer
for(int i = 0; i < W*H; i++)
{
  framebuffer[i] = col;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `24BPP\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5834\u5408\u3001\u30D0\u30A4\u30C8\uFF65\u30DD\u30A4\u30F3\u30BF\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30B3\u30FC\u30C9\u304C\u3088\u308A\u9069\u5207\u306B\u69CB\u7BC9\u3055\u308C\u307E\u3059(\u8272\u306FBGR\u306E\u9806\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t* framebuffer[480*272*3];  //24 bit framebuffer
...
uint8_t *fb = framebuffer;
while(fb < (uint8_t*)(framebuffer + (480*272*3)))
{
  *fb++ = 0x00; // Write blue color and increment pointer by one byte
  *fb++ = 0x00; // Write green color
  *fb++ = 0xFF; // Write red color
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/red-display-test.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u8272\u4ED8\u304D\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8868\u793A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\u306E\u30E9\u30A4\u30F3\uFF65\u30A4\u30D9\u30F3\u30C8\uFF65\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u6BCE\u79D2\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* USER CODE BEGIN 4 */
uint8_t r = 0x00, g = 0x00, b = 0x00;
uint16_t col = 0;
uint8_t color = 1;
void HAL_LTDC_LineEventCallback(LTDC_HandleTypeDef* hltdc)
{
  static int count = 0;
  count++;
  if (count >= 60)
  {
    count = 0;
      switch (color)
      {
      case 1:
        r = 0xFF; g = 0x00; b = 0x00;
        color = 2;
        break;
      case 2:
        r = 0x00; g = 0xFF; b = 0x00;
        color = 3;
        break;
      case 3:
        r = 0x00; g = 0x00; b = 0xFF;
        color = 1;
        break;
      default:
        break;
    }
    col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565
    // Put colors into the framebuffer
    for(int i = 0; i < W*H; i++)
    {
      framebuffer[i] = col;
    }
  }
}
/* USER CODE END 4 */
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);