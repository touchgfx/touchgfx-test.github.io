"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1078],{

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

/***/ 8926:
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
  id: "text-area",
  title: "Text Area\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/ui-components/miscellaneous/text-area",
  "id": "development/ui-development/ui-components/miscellaneous/text-area",
  "title": "Text Area\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/text-area.mdx",
  "sourceDirName": "development/ui-development/ui-components/miscellaneous",
  "slug": "/development/ui-development/ui-components/miscellaneous/text-area",
  "permalink": "/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/text-area",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "text-area",
    "title": "Text Area\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Slider\uFF08\u30B9\u30E9\u30A4\u30C0\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/slider"
  },
  "next": {
    "title": "Analog Clock\uFF08\u30A2\u30CA\u30ED\u30B0\uFF65\u30AF\u30ED\u30C3\u30AF\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/analog-clock"
  }
};
const assets = {};






const toc = [{
  value: "\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7",
  id: "widget-group",
  level: 2
}, {
  value: "\u30D7\u30ED\u30D1\u30C6\u30A3",
  id: "properties",
  level: 2
}, {
  value: "\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3",
  id: "interactions",
  level: 2
}, {
  value: "\u30A2\u30AF\u30B7\u30E7\u30F3",
  id: "actions",
  level: 3
}, {
  value: "\u30C8\u30EA\u30AC",
  id: "triggers",
  level: 3
}, {
  value: "\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",
  id: "performance",
  level: 2
}, {
  value: "\u4F8B",
  id: "examples",
  level: 2
}, {
  value: "\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9",
  id: "generated-code",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9",
  id: "user-code",
  level: 3
}, {
  value: "TouchGFX Designer\u306E\u4F8B",
  id: "touchgfx-designer-examples",
  level: 3
}, {
  value: "API\u53C2\u7167",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Text Area\u306F\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u793A\u3057\u307E\u3059\u3002 Text Area\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u3001\u30B5\u30A4\u30BA\u3001\u8272\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30D5\u30A9\u30F3\u30C8\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30C6\u30AD\u30B9\u30C8\u306A\u3069\u3067\u5B8C\u5168\u306B\u8A2D\u5B9A\u53EF\u80FD\u3067\u3059\u3002 TouchGFX Designer\u3067\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u51E6\u7406\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-engine-features/texts-and-fonts"
  }), `\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8`), `\u300D\u306E\u8A18\u4E8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/text-area/widget-appearance.gif",
    mdxType: "Figure"
  }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u5B9F\u884C\u3055\u308C\u308BText Area"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "widget-group"
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Text Area\u306F\u3001TouchGFX Designer\u306EMiscellaneous\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7\u5185\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/text-area/widget-group-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EText Area"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "properties"
  }), `\u30D7\u30ED\u30D1\u30C6\u30A3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306EText Area\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3\uFF65\u30B0\u30EB\u30FC\u30D7`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8AAC\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u540D\u524D\u3002 Name\u306F\u3001TouchGFX Designer\u304A\u3088\u3073\u30B3\u30FC\u30C9\u3067\u4F7F\u7528\u3055\u308C\u308B\u4E00\u610F\u306E\u8B58\u5225\u5B50\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `X\u304A\u3088\u3073Y\u306F\u3001\u89AA\u3092\u57FA\u6E96\u3068\u3057\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5DE6\u4E0A\u9685\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `W\u304A\u3088\u3073H\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5E45\u3068\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `<br/Auto-size\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u5165\u529B\u306B\u5F93\u3063\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u3092\u81EA\u52D5\u7684\u306B\u8A2D\u5B9A\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Lock\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u73FE\u5728\u306EX\u3001Y\u3001W\u3001H\u3067\u30ED\u30C3\u30AF\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30ED\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u901A\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3082\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Visible\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u53EF\u8996\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u975E\u8868\u793A\u306B\u3059\u308B\u3068\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u901A\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3082\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Text`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ID\u306F\u3001\u4F7F\u7528\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u81EA\u52D5\u751F\u6210\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001ID\u306B\u306F'Auto-generated'\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Translation\u306F\u3001\u8868\u793A\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Typography\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Alignment\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u6C34\u5E73\u65B9\u5411\u306E\u914D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30C6\u30AD\u30B9\u30C8\u5165\u529B\u7528\u306B\u6700\u59272\u3064\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306F'`, `<`, `tag`, `>`, `'\u3068\u793A\u3055\u308C\u307E\u3059\uFF08'tag'\u306B\u306F\u4EFB\u610F\u306E\u6587\u5B57\u5217\u3092\u5165\u308C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF09\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30C6\u30AD\u30B9\u30C8\u8A2D\u5B9A\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "../../touchgfx-engine-features/texts-and-fonts"
  }), `\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Appearance`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Color\u306F\u3001\u8868\u793A\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Alpha\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F0\u301C255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Line Spacing\u306F\u3001\u30E9\u30A4\u30F3\u9593\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Text Rotation\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u56DE\u8EE2\u89D2\u5EA6\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Mixins`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Draggable\u306F\u3001\u5B9F\u884C\u6642\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30C9\u30E9\u30C3\u30B0\u53EF\u80FD\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `ClickListener\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u767A\u884C\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `FadeAnimator\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304CAlpha\u5024\u3078\u306E\u5909\u66F4\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `MoveAnimator\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304CX\u304A\u3088\u3073Y\u5024\u3078\u306E\u5909\u66F4\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "interactions"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001Text Area\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u3068\u30C8\u30EA\u30AC\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "actions"
  }), `\u30A2\u30AF\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u56FA\u6709\u306E\u30A2\u30AF\u30B7\u30E7\u30F3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8AAC\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Set text`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Resize widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Set wildcard`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u6A5F\u80FD\u3055\u305B\u308B\u305F\u3081\u306B\u306F\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092Text Area\u306B\u8FFD\u52A0\u3057\u3066\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u6A19\u6E96\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u8AAC\u660E`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\u6642\u9593\u306E\u7D4C\u904E\u306B\u4F34\u3063\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u65B0\u3057\u3044\u4F4D\u7F6E\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Fade widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6642\u9593\u306E\u7D4C\u904E\u306B\u4F34\u3063\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u3092\u5909\u66F4\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u975E\u8868\u793A\u306B\u3057\u307E\u3059\uFF08\u53EF\u8996\u6027\u3092false\u306B\u8A2D\u5B9A\u3057\u307E\u3059\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\u975E\u8868\u793A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8868\u793A\u3057\u307E\u3059\uFF08\u53EF\u8996\u6027\u3092true\u306B\u8A2D\u5B9A\u3057\u307E\u3059\uFF09\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "triggers"
  }), `\u30C8\u30EA\u30AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Text Area\u306F\u30C8\u30EA\u30AC\u3092\u767A\u884C\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Text Area\u306F\u30C6\u30AD\u30B9\u30C8\u63CF\u753B\u306B\u4F9D\u5B58\u3057\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u63CF\u753B\u306F\u4E00\u822C\u7684\u306A\u753B\u50CF\u63CF\u753B\u3068\u975E\u5E38\u306B\u3088\u304F\u4F3C\u3066\u3044\u307E\u3059\uFF08\u305F\u3060\u3057\u3001\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u306E\u7279\u6027\u304B\u3089\u3001\u304B\u306A\u308A\u306E\u91CF\u306E\u30A2\u30EB\u30D5\u30A1\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u304C\u884C\u308F\u308C\u307E\u3059\uFF09\u3002 \u3053\u306E\u305F\u3081\u3001Text Area\u306F\u307B\u3068\u3093\u3069\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u9AD8\u901F\u51E6\u7406\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3042\u308B\u3068\u898B\u306A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C6\u30AD\u30B9\u30C8\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../general-ui-component-performance"
  }), `\u4E00\u822C\u7684\u306AUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code"
  }), `\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `View\u57FA\u5E95\u30AF\u30E9\u30B9\u306E\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9\u3092\u898B\u308B\u3068\u3001TouchGFX Designer\u306B\u3088\u308BText Area\u306E\u8A2D\u5B9A\u65B9\u6CD5\u304C\u308F\u304B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::TextAreaWithOneWildcard textArea;

/*
 * Wildcard Buffers
 */
static const uint16_t TEXTAREA_SIZE = 20;
touchgfx::Unicode::UnicodeChar textAreaBuffer[TEXTAREA_SIZE];
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `textArea.setPosition(40, 111, 400, 50);
textArea.setColor(touchgfx::Color::getColorFromRGB(60, 180, 230));
textArea.setLinespacing(0);
Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());
textArea.setWildcard(textAreaBuffer);
textArea.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u95A2\u6570\u3084\u3001TextArea\u30AF\u30E9\u30B9\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u305D\u306E\u4ED6\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5916\u89B3\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306B\u306F\u3001 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "textArea.invalidate()"), " \u307E\u305F\u306F", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "textArea.invalidateContent()"), " \u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u518D\u63CF\u753B\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u5206\u7BC0\u4E0D\u5099`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, `textArea.invalidateContent()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u8868\u793A\u306E\u5909\u66F4\u524D\u5F8C\u306B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, `textArea.invalidateContent()`), ` \u3092\u547C\u3073\u51FA\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF08\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\uFF65\u30D0\u30C3\u30D5\u30A1\u306E\u5185\u5BB9\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306A\u3069\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A00\u8A9E\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u5883\u754C\u9818\u57DF\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u9818\u57DF\uFF09\u306E\u518D\u8A08\u7B97\u3092\u30C8\u30EA\u30AC\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u8A00\u8A9E\u306E\u5909\u66F4\u304C\u5B8C\u4E86\u3057\u305F\u5F8C\u306B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, `textArea.setTypedText(...)`), `
\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u4F8B\u306F\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5B9F\u884C\u6642\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleTickEvent()`), `\u95A2\u6570\u3092\u5B9F\u88C5\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "text-area"
  }), `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u5192\u982D`), `\u3067\u793A\u3057\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();

    virtual void handleTickEvent();
protected:
    uint8_t counter;
    bool flag;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Screen1View::Screen1View():
    counter(0),
    flag(true)
{}

void Screen1View::handleTickEvent()
{
    counter++;
    if(counter%120 == 0) // every 2s
    {
        if(flag)
        {
            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_STMICROID).getText());
            flag = false;
        }
        else
        {
            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());
            flag = true;
        }
        textArea.invalidate();
        counter = 0;
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer-examples"
  }), `TouchGFX Designer\u306E\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Text Area\u3092\u3055\u3089\u306B\u63A2\u7D22\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u4F8B\u306E\u3044\u305A\u308C\u304B\u3092\u4F7F\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65B0\u3057\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-templates/text-example-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EText Example"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-templates/arabic-text-example-v4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EArabic Text Example"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "api-reference"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_text_area",
    mdxType: "Link"
  }, "TextArea\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);