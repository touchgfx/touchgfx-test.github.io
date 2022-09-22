"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7943],{

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

/***/ 85898:
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
  id: "04-enable-external-ram",
  title: "4. \u5916\u90E8RAM",
  sidebar_label: "4. \u5916\u90E8RAM"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/04-enable-external-ram",
  "id": "development/board-bring-up/how-to/04-enable-external-ram",
  "title": "4. \u5916\u90E8RAM",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/04-enable-external-ram.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/04-enable-external-ram",
  "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/04-enable-external-ram",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 4,
  "frontMatter": {
    "id": "04-enable-external-ram",
    "title": "4. \u5916\u90E8RAM",
    "sidebar_label": "4. \u5916\u90E8RAM"
  },
  "sidebar": "docs",
  "previous": {
    "title": "3. \u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/03-display-internal"
  },
  "next": {
    "title": "5. \u5916\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/05-display-external"
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
  value: "\u8A73\u7D30\u8A2D\u5B9A",
  id: "further-configuration",
  level: 3
}, {
  value: "RAM\u306E\u30C6\u30B9\u30C8",
  id: "testing-the-ram",
  level: 3
}, {
  value: "\u30C7\u30D0\u30C3\u30AC\u3067RAM\u3092\u8A8D\u8B58\u3067\u304D\u308B\u3053\u3068",
  id: "test-ram-is-visible-in-the-debugger",
  level: 4
}, {
  value: "RAM\u306E\u3059\u3079\u3066\u306E\u7BC4\u56F2\u306B\u5BFE\u3057\u3066\u8AAD\u51FA\u3057 / \u66F8\u8FBC\u307F\u304C\u53EF\u80FD\u3067\u3042\u308B\u3053\u3068",
  id: "ram-is-readable-and-writeable-in-the-whole-range",
  level: 4
}, {
  value: "\u671F\u5F85\u901A\u308A\u306E\u6027\u80FD\u304C\u5F97\u3089\u308C\u308B\u3053\u3068",
  id: "performance-is-as-expected",
  level: 4
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
  }), `\u52D5\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u5916\u90E8SDRAM\u3092\u6709\u52B9\u5316\u3057\u307E\u3059\u3002 \u591A\u304F\u306E\u89E3\u50CF\u5EA6\u3067\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u5927\u304D\u3059\u304E\u3066\u5185\u90E8RAM\u306B\u53CE\u307E\u308A\u304D\u3089\u306A\u3044\u305F\u3081\u3001\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u5916\u90E8RAM\u304C\u5FC5\u8981\u306B\u306A\u308B\u3053\u3068\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u306F\u30012\u3064\u307E\u305F\u306F3\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u3001\u5916\u90E8RAM\u304C\u3055\u3089\u306B\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5916\u4ED8\u3051RAM\u304C\u3054\u4F7F\u7528\u306E\u30DC\u30FC\u30C9\u306B\u95A2\u4FC2\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u30B9\u30AD\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5916\u90E8RAM\u306B\u914D\u7F6E\u3059\u308B\u5834\u5408\u3001\u5916\u90E8RAM\u304C\u4E0B\u8A18\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3059\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8AAD\u51FA\u3057 / \u66F8\u8FBC\u307F\u304C\u53EF\u80FD\u3067\u3042\u308B\u3053\u3068\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76EE\u7684\u306E\u901F\u5EA6(\u901A\u5E38\u306F\u6700\u5927) \u3067\u52D5\u4F5C\u3059\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\u76EE\u6A19`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u76EE\u6A19\u306F\u3001\u5916\u90E8RAM\u3092\u6709\u52B9\u5316\u3057\u3001\u30C7\u30FC\u30BF\u306E\u8AAD\u51FA\u3057 / \u66F8\u8FBC\u307F\u3092\u884C\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
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
  }), `\u5916\u90E8RAM\u3092\u8AAD\u307F\u51FA\u305B\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u683C\u7D0D\u5834\u6240\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u306B\u66F8\u304D\u8FBC\u3081\u308B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u3092\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u683C\u7D0D\u5834\u6240\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u308B\u3053\u3068\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u306E\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u5185\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3067\u8A31\u5BB9\u3067\u304D\u308B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u6027\u80FD\u304C\u5F97\u3089\u308C\u308B\u3053\u3068\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\u524D\u63D0\u6761\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306B\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u524D\u63D0\u6761\u4EF6\u3092\u793A\u3057\u307E\u3059`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RAM\u306B\u95A2\u3059\u308B\u60C5\u5831(\u901A\u5E38\u306F\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u5916\u90E8RAM\u306E\u63A5\u7D9A\u306B\u95A2\u3059\u308B\u60C5\u5831`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\u4F5C\u696D\u5185\u5BB9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8SDRAM\u306E\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3001STM32CubeMX\u306E\uFF3BConnectivity\uFF3D> FMC -> \uFF3BSDRAM1\uFF3D\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/external-ram/cubemx-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SDRAM\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AHB\u30AF\u30ED\u30C3\u30AF(HCLK) \u306F\u3001FMC\u30E1\u30E2\u30EA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\uFF65\u30AF\u30ED\u30C3\u30AF\u3067\u3059\u3002 \uFF3BClock Configuration\uFF3D\u3067\u30AF\u30ED\u30C3\u30AF\u5468\u6CE2\u6570\u3092\u78BA\u8A8D\u3057\u3001\u305D\u306E\u5024\u3092\u5404\u7A2ESDRAM\u306E\u30AF\u30ED\u30C3\u30AF\uFF65\u30B5\u30A4\u30AF\u30EB\u306E\u8A08\u7B97\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SDRAM\u3067\u4F7F\u7528\u3059\u308BGPIO\u3092\u3059\u3079\u3066\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/external-ram/cubemx-02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SDRAM\u306EGPIO\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "further-configuration"
  }), `\u8A73\u7D30\u8A2D\u5B9A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u30C1\u30C3\u30D7\u306E\u4E2D\u306B\u306F\u3001\u3055\u3089\u306B\u30C7\u30D0\u30A4\u30B9\u56FA\u6709\u306E\u8A2D\u5B9A\u304C\u5FC5\u8981\u306B\u306A\u308B\u3082\u306E\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u308C\u306FSTM32CubeMX\u3067\u306F\u8A2D\u5B9A\u3067\u304D\u305A\u3001C\u30B3\u30FC\u30C9\u3067\u8A18\u8FF0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059 STM32Cube HAL\u306B\u306F\u3001\u30C7\u30D0\u30A4\u30B9\u306B\u30B3\u30DE\u30F3\u30C9\u3092\u9001\u4FE1\u3059\u308B\u95A2\u6570\u304C\u3042\u308A\u307E\u3059\u3002 \u4EE5\u4E0B\u306B\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FMC_SDRAM_CommandTypeDef Command;

/* Step 1: Configure a clock configuration enable command */
Command.CommandMode            = FMC_SDRAM_CMD_CLK_ENABLE;
Command.CommandTarget          = FMC_SDRAM_CMD_TARGET_BANK1;
Command.AutoRefreshNumber      = 1;
Command.ModeRegisterDefinition = 0;

/* Send the command */
HAL_SDRAM_SendCommand(&hsdram1, &Command, SDRAM_TIMEOUT);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "testing-the-ram"
  }), `RAM\u306E\u30C6\u30B9\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8RAM\u3092\u8A2D\u5B9A\u3057\u305F\u5F8C\u306F\u3001\u30C6\u30B9\u30C8\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002 \u5C11\u306A\u304F\u3068\u3082\u3001\u4EE5\u4E0B\u306E\u9805\u76EE\u306B\u3064\u3044\u3066\u306F\u30C6\u30B9\u30C8\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30D0\u30C3\u30AC\u3067RAM\u3092\u8A8D\u8B58\u3067\u304D\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RAM\u306E\u3059\u3079\u3066\u306E\u7BC4\u56F2\u306B\u5BFE\u3057\u3066\u8AAD\u51FA\u3057 / \u66F8\u8FBC\u307F\u304C\u53EF\u80FD\u3067\u3042\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u671F\u5F85\u901A\u308A\u306E\u6027\u80FD\u304C\u5F97\u3089\u308C\u308B\u3053\u3068`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E1\u30E2\u30EA\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306F\u3001\u30E1\u30E2\u30EA\u306E\u30BF\u30A4\u30D7\u306B\u57FA\u3065\u3044\u3066\u3001\u5916\u90E8\u30E1\u30E2\u30EA\u306E\u56FA\u5B9A\u30A2\u30C9\u30EC\u30B9\uFF65\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30A2\u30C9\u30EC\u30B9\u306B\u3064\u3044\u3066\u306F\u3001\u4F7F\u7528\u3059\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 SDRAM\u306F\u901A\u5E38\u30010xC0000000(\u30D0\u30F3\u30AF1) \u307E\u305F\u306F0xD0000000(\u30D0\u30F3\u30AF2) \u306B\u30DE\u30C3\u30D4\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "test-ram-is-visible-in-the-debugger"
  }), `\u30C7\u30D0\u30C3\u30AC\u3067RAM\u3092\u8A8D\u8B58\u3067\u304D\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u3092\u6709\u52B9\u5316\u3057\u3066\u6700\u521D\u306B\u884C\u3046\u30C6\u30B9\u30C8\u306F\u30C7\u30D0\u30C3\u30AC\u304B\u3089\u306E\u30A2\u30AF\u30BB\u30B9\u3067\u3059\u3002 \u3053\u308C\u3067\u3001\u30E1\u30E2\u30EA\u306B\u5BFE\u3059\u308B\u8AAD\u51FA\u3057 / \u66F8\u8FBC\u307F\u304C\u53EF\u80FD\u304B\u3069\u3046\u304B\u304C\u7C21\u5358\u306B\u308F\u304B\u308A\u307E\u3059\u3002 \u30E1\u30E2\u30EA\uFF65\u30D3\u30E5\u30FC\u30A2\u3092\u958B\u304D\u3001\u8A72\u5F53\u3059\u308B\u30A2\u30C9\u30EC\u30B9\u3092\u8868\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/external-ram/iar-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\u30C7\u30D0\u30C3\u30AC\u306B\u304A\u3051\u308B\u30D0\u30F3\u30AF2\u30010xD0000000\u306E\u30E1\u30E2\u30EA\u306E\u30C6\u30B9\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "ram-is-readable-and-writeable-in-the-whole-range"
  }), `RAM\u306E\u3059\u3079\u3066\u306E\u7BC4\u56F2\u306B\u5BFE\u3057\u3066\u8AAD\u51FA\u3057 / \u66F8\u8FBC\u307F\u304C\u53EF\u80FD\u3067\u3042\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30C6\u30B9\u30C8\u3067\u306F\u3001\u5916\u90E8\u30E1\u30E2\u30EA\u306B\u3088\u308A\u591A\u304F\u306E\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u8FBC\u3080\u5C0F\u3055\u306A\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002 \u306A\u308B\u3079\u304F\u3001\u30E1\u30E2\u30EA\u5168\u4F53\u3092\u30C6\u30B9\u30C8\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u624B\u59CB\u3081\u306B\u3001\u6B21\u306E\u3088\u3046\u306A\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t *externalRAM = 0xC000000;
const uint32_t size = 1000;

//write external RAM
for(int i = 0; i < size; i++)
{
    externalRAM[i] = i;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30D0\u30C3\u30AC\u3067\u518D\u5EA6\u30E1\u30E2\u30EA\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 \u3053\u3053\u3067\u3001\u30A2\u30C9\u30EC\u30B9\uFF65\u30D4\u30F3\u306E\u4E00\u90E8\u304C\u672A\u63A5\u7D9A\u3060\u3063\u305F\u308A\u3001\u5165\u308C\u66FF\u308F\u3063\u305F\u308A\u3057\u3066\u3044\u308B\u306A\u3069\u3001\u3044\u304F\u3064\u304B\u306E\u7A2E\u985E\u306E\u306E\u30A8\u30E9\u30FC\u304C\u660E\u3089\u304B\u306B\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u5024\u306E\u30D1\u30BF\u30FC\u30F3\u3092\u5909\u66F4\u3057\u305F\u30C6\u30B9\u30C8\u3082\u5FC5\u8981\u3067\u3059\u3002 \u307E\u305F\u30010\u30011\u30012\u30013\u306A\u3069\u306E\u5C0F\u3055\u306A\u5024\u3057\u304B\u66F8\u304D\u8FBC\u307E\u306A\u3044\u3068\u3001\u30C7\u30FC\u30BF\uFF65\u30D4\u30F3\u306E\u4E00\u90E8\u306B\u4E0D\u5177\u5408\u304C\u3042\u3063\u3066\u3082\u691C\u51FA\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u3088\u3046\u306A\u3001\u5C0F\u3055\u306A\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3088\u3063\u3066\u30E1\u30E2\u30EA\u306E\u8AAD\u51FA\u3057\u3082\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t *externalRAM = 0xC000000;
const uint32_t size = 1000;

//read external RAM
for(int i = 0; i < size; i++)
{
    ASSERT(externalRAM[i] == i, "external RAM not as expected");
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u3088\u3046\u306A\u30C6\u30B9\u30C8\u3067\u306F\u3001\u30A2\u30C9\u30EC\u30B9\u304C\u4E0D\u6B63\u78BA\u3067\u3042\u308B\u304B\u3069\u3046\u304B\u306F\u308F\u304B\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30EB\u30FC\u30D7\u3092\u9577\u304F\u3059\u308B\u304B\u3001 \u958B\u59CB\u30A2\u30C9\u30EC\u30B9\u3092\u5909\u66F4\u3057\u3066\u3001\u3059\u3079\u3066\u306E\u30E1\u30E2\u30EA\uFF65\u30BB\u30EB\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "performance-is-as-expected"
  }), `\u671F\u5F85\u901A\u308A\u306E\u6027\u80FD\u304C\u5F97\u3089\u308C\u308B\u3053\u3068`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u5916\u90E8RAM\u306E\u6027\u80FD\u3092\u30C6\u30B9\u30C8\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5916\u90E8\u30E1\u30E2\u30EA\u306B\u914D\u7F6E\u3059\u308B\u5834\u5408\u306F\u3001\u6027\u80FD\u304C\u91CD\u8981\u3067\u3059\u3002 \u30E1\u30E2\u30EA\u304C\u9045\u3044\u3068\u3001\u30B7\u30B9\u30C6\u30E0\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u6027\u80FD\u304C\u52A3\u5316\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\u306E\u8AAD\u51FA\u3057\u3001\u66F8\u8FBC\u307F\u3001\u66F8\u63DB\u3048\u306E\u901F\u5EA6\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002 \u901A\u5E38\u3001\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30E1\u30E2\u30EA\u9593\u3067\u5927\u91CF\u306E\u30C7\u30FC\u30BF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002 \u63CF\u753B\u52D5\u4F5C\u6642\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u591A\u6570\u306E\u66F8\u8FBC\u307F\u3092\u5B9F\u884C\u3057\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u9001\u4FE1\u6642\u306B\u3001\u591A\u6570\u306E\u8AAD\u51FA\u3057\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002 \u30C6\u30B9\u30C8\uFF65\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u52D5\u4F5C\u3092\u6A21\u64EC\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `volatile uint32_t *externalRAM = 0xC000000;
uint32_t sourcedata[10000];
const uint32_t size = 10000;

int begin = HAL_GetTick();
//write external RAM
for(int i = 0; i < size; i++)
{
    externalRAM[i] = sourcedata[i];
}
int end = HAL_GetTick();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int begin = HAL_GetTick();
//Read external RAM
for(int i = 0; i < size; i++)
{
    sourcedata[i] = externalRAM[i];
}
int end = HAL_GetTick();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306F\u3001\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u306E\u753B\u50CF\u3092\u30D6\u30EC\u30F3\u30C9\u3059\u308B\u5834\u5408\u306A\u3069\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u5BFE\u3057\u3066\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u66F8\u304D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//Time modifying external RAM
int begin = HAL_GetTick();
for(int i = 0; i < size; i++)
{
    externalRAM[i] += 2;
}
int end = HAL_GetTick();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E1\u30E2\u30EA\u306E\u901F\u5EA6\u304A\u3088\u3073\u5FC5\u8981\u306A\u7CBE\u5EA6\u306B\u5FDC\u3058\u3066\u3001\u30C6\u30B9\u30C8\u3092\u305F\u3068\u3048\u3070100\u56DE\u30EB\u30FC\u30D7\u3055\u305B\u308B\u3053\u3068\u3067\u3001\u7D50\u679C\u306E\u4FE1\u983C\u6027\u3092\u9AD8\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5916\u90E8RAM\u306B\u4F9B\u7D66\u3055\u308C\u308B\u30AF\u30ED\u30C3\u30AF\u304C\u9AD8\u901F\u3059\u304E\u308B\u3068\u3001\u8AAD\u51FA\u3057\u307E\u305F\u306F\u66F8\u8FBC\u307F\u52D5\u4F5C\u4E2D\u306B\u8AA4\u3063\u305F\u5024\u304C\u5F97\u3089\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u3046\u3057\u305F\u30A8\u30E9\u30FC\u306F\u3001\u4E0A\u8A18\u306E\u3088\u3046\u306A\u5358\u7D14\u306A\u30C6\u30B9\u30C8\u3067\u306F\u691C\u51FA\u304C\u56F0\u96E3\u306A\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306F\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);