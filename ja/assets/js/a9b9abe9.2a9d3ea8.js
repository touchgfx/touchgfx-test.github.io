"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7013],{

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

/***/ 71160:
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
  id: "static-graph",
  title: "Static Graph\uFF08\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/ui-components/miscellaneous/static-graph",
  "id": "development/ui-development/ui-components/miscellaneous/static-graph",
  "title": "Static Graph\uFF08\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/static-graph.mdx",
  "sourceDirName": "development/ui-development/ui-components/miscellaneous",
  "slug": "/development/ui-development/ui-components/miscellaneous/static-graph",
  "permalink": "/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/static-graph",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "static-graph",
    "title": "Static Graph\uFF08\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Digital Clock\uFF08\u30C7\u30B8\u30BF\u30EB\uFF65\u30AF\u30ED\u30C3\u30AF\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/digital-clock"
  },
  "next": {
    "title": "Dynamic Graph\uFF08\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"
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
  value: "\u7CBE\u5EA6",
  id: "precision",
  level: 3
}, {
  value: "Static Graph\u3078\u306E\u30C7\u30FC\u30BF\u306E\u8FFD\u52A0",
  id: "static-graph\u3078\u306E\u30C7\u30FC\u30BF\u306E\u8FFD\u52A0",
  level: 3
}, {
  value: "\u30B0\u30E9\u30D5\u9818\u57DF\u3001Margin\uFF08\u5916\u5074\u4F59\u767D\uFF09\u3001Padding\uFF08\u5185\u5074\u4F59\u767D\uFF09",
  id: "graph-area-margin-and-padding",
  level: 3
}, {
  value: "Elements",
  id: "elements",
  level: 3
}, {
  value: "Area\uFF08\u9818\u57DF\uFF09",
  id: "area",
  level: 4
}, {
  value: "API\u53C2\u7167",
  id: "api-reference",
  level: 5
}, {
  value: "Boxes\uFF08\u30DC\u30C3\u30AF\u30B9\uFF09",
  id: "boxes",
  level: 4
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-1",
  level: 5
}, {
  value: "Diamonds\uFF08\u3072\u3057\u5F62\uFF09",
  id: "diamonds",
  level: 4
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-2",
  level: 5
}, {
  value: "Dots\uFF08\u30C9\u30C3\u30C8\uFF09",
  id: "dots",
  level: 4
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-3",
  level: 5
}, {
  value: "Histogram\uFF08\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\uFF09",
  id: "histogram",
  level: 4
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-4",
  level: 5
}, {
  value: "Line\uFF08\u30E9\u30A4\u30F3\uFF09",
  id: "line",
  level: 4
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-5",
  level: 5
}, {
  value: "Grid Line\uFF08\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\uFF09",
  id: "grid-lines",
  level: 3
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-6",
  level: 4
}, {
  value: "Labels\uFF08\u30E9\u30D9\u30EB\uFF09",
  id: "labels",
  level: 3
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-7",
  level: 4
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
  value: "TouchGFX Designer\u306E\u4F8B",
  id: "touchgfx-designer-examples",
  level: 3
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-8",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306EStatic Graph\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u5EA7\u6A19\u7CFB\u306B\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u3092\u8868\u793A\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Static Graph\u306E\u5916\u89B3\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#elements"
  }), `\u30B0\u30E9\u30D5\u306E\u8981\u7D20`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#grid-lines"
  }), `\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#labels"
  }), `\u30E9\u30D9\u30EB`), `\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/static-graph/widget-appearance.png",
    mdxType: "Figure"
  }, "\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u5B9F\u884C\u3055\u308C\u308BStatic Graph"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F5C\u6210\u3055\u308C\u308B\u30C7\u30FC\u30BF\u3092\u6642\u7CFB\u5217\u3067\u8868\u793A\u3059\u308B\u5834\u5408\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "dynamic-graph"
  }), `Dynamic Graph`), `\u306E\u65B9\u304C\u9069\u3057\u3066\u3044\u307E\u3059\u3002\u3055\u307E\u3056\u307E\u306A\u66F4\u65B0\u30E2\u30FC\u30C9\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "widget-group"
  }), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Static Graph\u306F\u3001TouchGFX Designer\u306EMiscellaneous\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7\u5185\u306B\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/static-graph/widget-group-v4.19.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EStatic Graph"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "properties"
  }), `\u30D7\u30ED\u30D1\u30C6\u30A3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306EStatic Graph\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `X\u304A\u3088\u3073Y\u306F\u3001\u89AA\u3092\u57FA\u6E96\u3068\u3057\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5DE6\u4E0A\u9685\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `W\u304A\u3088\u3073H\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5E45\u3068\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Lock\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u73FE\u5728\u306EX\u3001Y\u3001W\u3001H\u3067\u30ED\u30C3\u30AF\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30ED\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u901A\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3082\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Visible\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u53EF\u8996\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u975E\u8868\u793A\u306B\u3059\u308B\u3068\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u901A\u3057\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3082\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Graph Area Margin`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Margin\u306F\u3001\u30B0\u30E9\u30D5\u306E\u30E9\u30D9\u30EB\u306B\u5FC5\u8981\u306A\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Top\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u4E0A\u306E\u5916\u5074\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Bottom\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u4E0B\u306E\u5916\u5074\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Left\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u5DE6\u306E\u5916\u5074\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Right\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u53F3\u306E\u5916\u5074\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Graph Area Padding`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Padding\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u5185\u5074\u3067\u30B0\u30E9\u30D5\u306E\u8981\u7D20\u306E\u5468\u56F2\u306B\u8A2D\u3051\u308B\u5FC5\u8981\u304C\u3042\u308B\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Top\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u4E0A\u306E\u5185\u5074\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Bottom\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u4E0B\u306E\u5185\u5074\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Left\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u5DE6\u306E\u5185\u5074\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Top\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u53F3\u306E\u5185\u5074\u4F59\u767D\u306E\u5927\u304D\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Data Points`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Number of Data Points\u306F\u3001\u30B0\u30E9\u30D5\u306B\u8868\u793A\u3067\u304D\u308B\u5024\u306E\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `X-axis range\u306F\u3001X\u8EF8\u306B\u8868\u793A\u3055\u308C\u308B\u5024\u306E\u7BC4\u56F2\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `X-axis Precision\u306F\u3001\u30B0\u30E9\u30D5\u3067X\u8EF8\u306B\u8868\u793A\u3067\u304D\u308B\u5C0F\u6570\u70B9\u4EE5\u4E0B\u306E\u6841\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Y-axis range\u306F\u3001Y\u8EF8\u306B\u8868\u793A\u3055\u308C\u308B\u5024\u306E\u7BC4\u56F2\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Y-axis Precision\u306F\u3001\u30B0\u30E9\u30D5\u3067Y\u8EF8\u306B\u8868\u793A\u3067\u304D\u308B\u5C0F\u6570\u70B9\u4EE5\u4E0B\u306E\u6841\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Generate Random Values\u306F\u3001\u30B3\u30FC\u30C9\u751F\u6210\u3067\u30E9\u30F3\u30C0\u30E0\u5024\u3092\u521D\u671F\u5316\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059 \uFF08\u30E9\u30F3\u30C0\u30E0\u5024\u306FTouchGFX Designer\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u5E38\u306B\u8868\u793A\u3055\u308C\u307E\u3059\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Elements`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Area\u3001Boxes\u3001Diamonds\u3001Dots\u3001Histogram\u3001Line\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5916\u89B3\u3092\u69CB\u6210\u3059\u308B\u8981\u7D20\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u5404\u30BF\u30A4\u30D7\u8907\u6570\u306E\u8981\u7D20\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Vertical Grid Lines`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Major Division\u306F\u3001\u7E26\u65B9\u5411\u306E\u5927\u5206\u5272\u306E\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Minor Division\u306F\u3001\u7E26\u65B9\u5411\u306E\u5C0F\u5206\u5272\u306E\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u5927\u5206\u5272\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Horizontal Grid Lines`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Major Division\u306F\u3001\u6A2A\u65B9\u5411\u306E\u5927\u5206\u5272\u306E\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Minor Division\u306F\u3001\u6A2A\u65B9\u5411\u306E\u5C0F\u5206\u5272\u306E\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u5927\u5206\u5272\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `X-Axis Labels`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Major Division\u306F\u3001X\u8EF8\u4E0A\u306E\u5927\u5206\u5272\u306E\u30E9\u30D9\u30EB\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Minor Division\u306F\u3001X\u8EF8\u4E0A\u306E\u5C0F\u5206\u5272\u306E\u30E9\u30D9\u30EB\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u5927\u5206\u5272\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Y-Axis Labels`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Major Division\u306F\u3001Y\u8EF8\u4E0A\u306E\u5927\u5206\u5272\u306E\u30E9\u30D9\u30EB\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Minor Division\u306F\u3001Y\u8EF8\u4E0A\u306E\u5C0F\u5206\u5272\u306E\u30E9\u30D9\u30EB\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u5927\u5206\u5272\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `Alpha\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `Draggable\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u5B9F\u884C\u6642\u306B\u30C9\u30E9\u30C3\u30B0\u53EF\u80FD\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `ClickListener\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u767A\u884C\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `FadeAnimator\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304CAlpha\u5024\u3078\u306E\u5909\u66F4\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `MoveAnimator\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304CX\u304A\u3088\u3073Y\u5024\u3078\u306E\u5909\u66F4\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "precision"
  }), `\u7CBE\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Static Graph\u3067\u306F\u5185\u90E8\u7684\u306B\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u304C32\u30D3\u30C3\u30C8\u6574\u6570\u3067\u4FDD\u5B58\u3055\u308C\u308B\u306E\u3067\u3001\u7CBE\u5EA6\u3092\u793A\u3059\u7279\u5B9A\u306E\u5C0F\u6570\u70B9\u4EE5\u4E0B\u6841\u6570\u3092\u6301\u3064\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u3092\u8FFD\u52A0\u3057\u3066\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u3001\u7CBE\u5EA6\u306E\u30EC\u30D9\u30EB\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3068\u3048\u3070\u3001\u7CBE\u5EA6\u30EC\u30D9\u30EB\u30920.1\u306B\u8A2D\u5B9A\u3057\u305F\u5834\u5408\u3001Static Graph\u306B\u8FFD\u52A0\u3055\u308C\u308B\u5404\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u306B\u306F\u5185\u90E8\u7684\u306B10\u304C\u4E57\u7B97\u3055\u308C\u3001\u305D\u308C\u306B\u3088\u3063\u30661\u6841\u306E\u7CBE\u5EA6\u304C\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3055\u308C\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u7CBE\u5EA6\u30EC\u30D9\u30EB\u3092\u4E0A\u3052\u308B\u3068\u3001\u6307\u5B9A\u3057\u305F\u7CBE\u5EA6\u306E\u4FC2\u6570\u306B\u3088\u3063\u3066\u6307\u5B9A\u53EF\u80FD\u306A\u6700\u9AD8\u5024\uFF08\u6700\u4F4E\u5024\uFF09\u304C\u5C0F\u3055\u304F\uFF08\u5927\u304D\u304F\uFF09\u306A\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u7CBE\u5EA6\u306FX\u8EF8\u3068Y\u8EF8\u306B\u5BFE\u3057\u3066\u500B\u5225\u306B\u9078\u629E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u7CBE\u5EA6\u30EC\u30D9\u30EB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u53EF\u80FD\u306A\u6700\u4F4E\u5024`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u53EF\u80FD\u306A\u6700\u9AD8\u5024`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-10\u5104`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10\u5104`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-1\u5104`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\u5104`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0.01`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-1000\u4E07`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1000\u4E07`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0.001`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-100\u4E07`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `100\u4E07`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0.0001`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-10\u4E07`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10\u4E07`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4E0A\u306B\u793A\u3059\u6700\u4F4E\u5024 / \u6700\u9AD8\u5024\u306F\u6982\u7B97\u306E\u63A8\u5B9A\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "static-graph\u3078\u306E\u30C7\u30FC\u30BF\u306E\u8FFD\u52A0"
  }), `Static Graph\u3078\u306E\u30C7\u30FC\u30BF\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30FC\u30C9\u5185\u3067addDataPoint\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u3092\u30B0\u30E9\u30D5\u306B\u7C21\u5358\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u3092\u30B0\u30E9\u30D5\u306B\u8FFD\u52A0\u3059\u308B\u3068\u3001\u8EF8\u306B\u8A2D\u5B9A\u3057\u305F\u7CBE\u5EA6\u306B\u5FDC\u3058\u3066\u5185\u90E8\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001X\u8EF8\u3068Y\u8EF8\u306B\u7CBE\u5EA6"0.1"\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u3001\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8(10, 20)\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3057\u307E\u3059\u3002 \u3053\u306E\u5024\u306F\u30B0\u30E9\u30D5\u5185\u3067x=100\u304A\u3088\u3073y=200\u306B\u5185\u90E8\u5909\u63DB\u3055\u308C\u3001x=10.0\u304A\u3088\u3073y=20.0\u3092\u8868\u3059\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6D6E\u52D5\u5C0F\u6570\u70B9\u5024\u3082\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u5024\u306F\u3001\u7CBE\u5EA6\u3068\u4E00\u81F4\u3059\u308B\u3088\u3046\u306B\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3055\u308C\u3001\u4E38\u3081\u3089\u308C\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001 x=10.12f\u304A\u3088\u3073y=10.18f\u3068\u3044\u3046\u5024\u306F\u3001\u5185\u90E8\u3067\u306Fx=101\u3001y=102\u3068\u8868\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `3\u3064\u76EE\u306B\u53EF\u80FD\u306A\u65B9\u6CD5\u306F\u3001\u3059\u3067\u306B\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3055\u308C\u305F\u5024\u306E\u8FFD\u52A0\u3067\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u5024\u306F\u5909\u63DB\u3055\u308C\u307E\u305B\u3093\u3002 x=101\u304A\u3088\u3073y=202\u3068\u3044\u3046\u5024\u306F\u5909\u63DB\u3055\u308C\u308B\u3053\u3068\u306A\u304F\u5185\u90E8\u4FDD\u5B58\u3055\u308C\u3001x=10.1\u304A\u3088\u3073y=20.2\u3092\u8868\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30E1\u30BD\u30C3\u30C9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `int16_t addDataPoint(int x, int y)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8(x,y)\u3092\u30B0\u30E9\u30D5\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u30B0\u30E9\u30D5\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u7CBE\u5EA6\u306B\u5FDC\u3058\u3066\u5024\u304C\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `int16_t addDataPoint(float x, float y)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8(x,y)\u3092\u30B0\u30E9\u30D5\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u30B0\u30E9\u30D5\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u7CBE\u5EA6\u306B\u5FDC\u3058\u3066\u5024\u304C\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `int16_t addDataPointScaled(int x, int y)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8(x,y)\u3092\u30B0\u30E9\u30D5\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u5024\u306F\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3055\u308C\u307E\u305B\u3093\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u30014\u3064\u306E\u30DD\u30A4\u30F3\u30C8\u3092\u30B0\u30E9\u30D5\uFF080\uFF5E100\u306E\u8EF8\u3067\u7CBE\u5EA6\u304C0.1\uFF09\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    graph1.addDataPointScaled(100, 300); // x=10.0, y=30.0
    graph1.addDataPoint(40,40);          // x=40.0, y=40.0
    graph1.addDataPointScaled(720,802);  // x=72.0, y=80.2
    graph1.addDataPoint(90.0f,30.0f);    // x=90.0, y=30.0
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/static-graph/data-example.png",
    mdxType: "Figure"
  }, "\u30C7\u30FC\u30BF\u8FFD\u52A0\u5F8C\u306EStatic Graph"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `addDataPoint\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30B0\u30E9\u30D5\u306E\u305D\u306E\u30C7\u30FC\u30BF\u306B\u95A2\u9023\u3059\u308B\u90E8\u5206\u304C\u81EA\u52D5\u7684\u306B\u518D\u63CF\u753B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "graph-area-margin-and-padding"
  }), `\u30B0\u30E9\u30D5\u9818\u57DF\u3001Margin\uFF08\u5916\u5074\u4F59\u767D\uFF09\u3001Padding\uFF08\u5185\u5074\u4F59\u767D\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Static Graph\u306F\u3001\u3059\u3079\u3066\u306E\u30B0\u30E9\u30D5\u8981\u7D20\u3068\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u3092\u30B0\u30E9\u30D5\u9818\u57DF\u306B\u63CF\u753B\u3057\u307E\u3059\u304C\u3001\u3053\u306E\u9818\u57DF\u306F\u5185\u5074\u4F59\u767D\uFF08Padding\uFF09\u3068\u5916\u5074\u4F59\u767D\uFF08Margin\uFF09\u306B\u5305\u307E\u308C\u3066\u3044\u307E\u3059\u3002 Padding\u3068Margin\u3092\u3069\u3061\u3089\u3082\u30BC\u30ED\u306B\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306FStatic Graph\u306B\u6307\u5B9A\u3055\u308C\u305F\u30B5\u30A4\u30BA\u306B\u5F93\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `X\u8EF8\u3068Y\u8EF8\u306B\u6CBF\u3063\u3066\u30E9\u30D9\u30EB\u306B\u4F59\u767D\u3092\u6301\u305F\u305B\u308B\u306B\u306F\u3001Margin\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 Margin\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u5185\u90E8\u3067\u30B0\u30E9\u30D5\u8981\u7D20\uFF08\u9818\u57DF\u3001\u30DC\u30C3\u30AF\u30B9\u3001\u3072\u3057\u5F62\u306A\u3069\uFF09\u3092\u542B\u3080\u30B0\u30E9\u30D5\u9818\u57DF\u304C\u79FB\u52D5\u3057\u3001X\u8EF8\u3068Y\u8EF8\u306B\u6CBF\u3063\u3066\u30E9\u30D9\u30EB\u7528\u306E\u4F59\u767D\u304C\u78BA\u4FDD\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u306E\u56F3\u306E\u8D64\u3044\u9818\u57DF\u306F\u3001\u4E0A\u4E0B\u5DE6\u53F3\u306B\u8FFD\u52A0\u3055\u308C\u305F20\u30D4\u30AF\u30BB\u30EB\u306EMargin\uFF08\u5916\u5074\u4F59\u767D\uFF09\u3092\u8868\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B5\u30A4\u30BA\u306B\u3088\u3063\u3066\u306F\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u7AEF\u306B\u8FD1\u3044\u4F4D\u7F6E\u306E\u8981\u7D20\u304C\u5B8C\u5168\u306B\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308B\u3053\u3068\u3082\u3042\u308B\u306E\u3067\u3001Padding\uFF08\u5185\u5074\u4F59\u767D\uFF09\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 Padding\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u3001\u30B0\u30E9\u30D5\u8981\u7D20\uFF08\u9818\u57DF\u3001\u30DC\u30C3\u30AF\u30B9\u3001\u3072\u3057\u5F62\u306A\u3069\uFF09\u3092\u542B\u3080\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u5185\u5074\u306B\u3044\u304F\u3089\u304B\u4F59\u767D\u304C\u8FFD\u52A0\u3055\u308C\u3001\u30B0\u30E9\u30D5\u9818\u57DF\u306E\u7AEF\u306B\u63CF\u753B\u3057\u305F\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u3001\u30DC\u30C3\u30AF\u30B9\u3001\u30C9\u30C3\u30C8\u3001\u3072\u3057\u5F62\u3001\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u3001\u30E9\u30A4\u30F3\u3068\u3044\u3063\u305F\u8981\u7D20\u304C\u5B8C\u5168\u306B\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Padding\u3092\u4F7F\u7528\u3057\u3066\u3001\u8EF8\u3084\u30B0\u30E9\u30D5\u9818\u57DF\u306B\u6CBF\u3063\u3066\u30E9\u30D9\u30EB\u9593\u306B\u4F59\u767D\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u306E\u56F3\u306E\u30AA\u30EC\u30F3\u30B8\u8272\u306E\u9818\u57DF\u306F\u3001\u4E0A\u4E0B\u5DE6\u53F3\u306B\u8FFD\u52A0\u3055\u308C\u305F20\u30D4\u30AF\u30BB\u30EB\u306EPadding\uFF08\u5916\u5074\u4F59\u767D\uFF09\u3092\u8868\u3057\u3066\u3044\u307E\u3059\u3002 \u5185\u5074\u4F59\u767D\u3092\u8A2D\u3051\u305F\u9818\u57DF\u306B\u30DC\u30C3\u30AF\u30B9\u8981\u7D20\u304C\u63CF\u753B\u3055\u308C\u308B\u69D8\u5B50\u3082\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: "true",
    imageSource: "/img/development/ui-development/ui-components/dynamic-graph/dynamic-graph-margin-padding-example.png",
    mdxType: "Figure"
  }, "Static Graph\u306EMargin\uFF08\u5916\u5074\u4F59\u767D\uFF09\u3068Padding\uFF08\u5185\u5074\u4F59\u767D\uFF09\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "elements"
  }), `Elements`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Static Graph\u3067\u306F\u3001\u30C7\u30FC\u30BF\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306BArea\uFF08\u9818\u57DF\uFF09\u3001Boxes\uFF08\u30DC\u30C3\u30AF\u30B9\uFF09\u3001Diamonds\uFF08\u3072\u3057\u5F62\uFF09\u3001Dots\uFF08\u30C9\u30C3\u30C8\uFF09\u3001Histogram\uFF08\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\uFF09\u3001Line\uFF08\u30E9\u30A4\u30F3\uFF09\u3068\u3044\u30466\u3064\u306E\u30BF\u30A4\u30D7\u306E\u8981\u7D20\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "area"
  }), `Area\uFF08\u9818\u57DF\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Area\u8981\u7D20\u306F\u3001\u30B0\u30E9\u30E0\u5185\u306E\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u3092\u7D50\u3076\u30E9\u30A4\u30F3\u306E\u4E0B\u306E\u9818\u57DF\u3092\u5857\u308A\u3064\u3076\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/dynamic-graph/dynamic-graph-area-example.png",
    mdxType: "Figure"
  }, "Static Graph\u306EArea\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }, `Image`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9818\u57DF\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Color`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9818\u57DF\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Baseline`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u63CF\u753B\u3059\u308B\u9818\u57DF\u306E\u57FA\u5E95\uFF08\u30D9\u30FC\u30B9\uFF09\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u901A\u5E38\u3001\u57FA\u5E95\u304C0\u3067\u3042\u308C\u3070\u3001\u9818\u57DF\u306F\u6B63\u306EY\u5024\u306E\u4E0B\u3068\u8CA0\u306EY\u5024\u306E\u4E0A\u306B\u63CF\u753B\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Alpha`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9818\u57DF\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "api-reference"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_element_area",
    mdxType: "Link"
  }, "GraphElementArea\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "boxes"
  }), `Boxes\uFF08\u30DC\u30C3\u30AF\u30B9\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Boxes\u8981\u7D20\u306F\u3001\u30B0\u30E9\u30D5\u5185\u306E\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u306B\u56DB\u89D2\u5F62\u306E\u30DC\u30C3\u30AF\u30B9\u3092\u63CF\u753B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/dynamic-graph/dynamic-graph-boxes-example.png",
    mdxType: "Figure"
  }, "Static Graph\u306EBoxes\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }, `Color`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DC\u30C3\u30AF\u30B9\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Box Size`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DC\u30C3\u30AF\u30B9\u306E\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Alpha`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DC\u30C3\u30AF\u30B9\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "api-reference-1"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_element_boxes",
    mdxType: "Link"
  }, "GraphElementBoxes\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "diamonds"
  }), `Diamonds\uFF08\u3072\u3057\u5F62\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Diamonds\u8981\u7D20\u306F\u3001\u30B0\u30E9\u30D5\u5185\u306E\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u306B\u3072\u3057\u5F62\uFF08\u9685\u304C\u4E0A\u4E0B\u5DE6\u53F3\u306B\u3042\u308B\u56DB\u89D2\u5F62\uFF09\u3092\u63CF\u753B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/dynamic-graph/dynamic-graph-diamonds-example.png",
    mdxType: "Figure"
  }, "Static Graph\u306EDiamonds\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }, `Image`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3072\u3057\u5F62\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Color`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3072\u3057\u5F62\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Diamond Size`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3072\u3057\u5F62\u306E\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Alpha`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3072\u3057\u5F62\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "api-reference-2"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_element_diamonds",
    mdxType: "Link"
  }, "Graph Element Diamonds\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "dots"
  }), `Dots\uFF08\u30C9\u30C3\u30C8\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Dots\u8981\u7D20\u306F\u3001\u30B0\u30E9\u30D5\u5185\u306E\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u306B\u5186\u5F62\u306E\u30C9\u30C3\u30C8\u3092\u63CF\u753B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/dynamic-graph/dynamic-graph-dots-example.png",
    mdxType: "Figure"
  }, "Static Graph\u306EDots\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }, `Image`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C9\u30C3\u30C8\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Color`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C9\u30C3\u30C8\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Dot Size`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C9\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Alpha`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C9\u30C3\u30C8\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "api-reference-3"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_element_dots",
    mdxType: "Link"
  }, "GraphElementDots\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "histogram"
  }), `Histogram\uFF08\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Histogram\u8981\u7D20\u3092\u4F7F\u7528\u3057\u3066\u3001X\u8EF8\u304B\u3089\u30B0\u30E9\u30D5\u5185\u306E\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u307E\u3067\u30D6\u30ED\u30C3\u30AF\u3092\u63CF\u753B\u3057\u307E\u3059\u3002 \u91CD\u306A\u308A\u5408\u3063\u3066\u914D\u7F6E\u3055\u308C\u308B\u30B0\u30E9\u30D5\u304C\u5897\u3048\u305F\u5834\u5408\u3001\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u3092\u5C11\u3057\u3060\u3051\u5DE6\u53F3\u306B\u79FB\u52D5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/dynamic-graph/dynamic-graph-histogram-example.png",
    mdxType: "Figure"
  }, "Static Graph\u306EHistogram\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }, `Image`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Color`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Bar Width`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u306E\u30D0\u30FC\u306E\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Bar Offset`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u306E\u8EF8\u306B\u6CBF\u3063\u3066\u30D0\u30FC\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Baseline`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u63CF\u753B\u3059\u308B\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u306E\u57FA\u5E95\uFF08\u30D9\u30FC\u30B9\uFF09\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u901A\u5E38\u3001\u57FA\u5E95\u304C0\u3067\u3042\u308C\u3070\u3001\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u306F\u6B63\u306EY\u5024\u306E\u4E0B\u3068\u8CA0\u306EY\u5024\u306E\u4E0A\u306B\u63CF\u753B\u3055\u308C\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Alpha`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "api-reference-4"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_element_histogram",
    mdxType: "Link"
  }, "GraphElementHistogram\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "line"
  }), `Line\uFF08\u30E9\u30A4\u30F3\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Line\u8981\u7D20\u306F\u3001\u30B0\u30E9\u30D5\u5185\u306E\u30C7\u30FC\u30BF\uFF65\u30DD\u30A4\u30F3\u30C8\u3092\u901A\u308B\u6240\u5B9A\u306E\u592A\u3055\u306E\u30E9\u30A4\u30F3\u3092\u63CF\u753B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/dynamic-graph/dynamic-graph-line-example.png",
    mdxType: "Figure"
  }, "Static Graph\u306ELine\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }, `Image`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30A4\u30F3\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Color`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30A4\u30F3\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Line Width`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30A4\u30F3\u306E\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Alpha`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30A4\u30F3\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "api-reference-5"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_element_line",
    mdxType: "Link"
  }, "GraphElementLine\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "grid-lines"
  }), `Grid Line\uFF08\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Static Graph\u306B\u306F\u3001\u5927\u5206\u5272\u3068\u5C0F\u5206\u5272\u304C\u3042\u308B\u6A2A\u65B9\u5411\u304A\u3088\u3073\u7E26\u65B9\u5411\u306E\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0F\u5206\u5272\u306F\u5927\u5206\u5272\u306B\u5438\u53CE\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u5927\u5206\u5272\u306E\u5B58\u5728\u3059\u308B\u4F4D\u7F6E\u306B\u306F\u5C0F\u5206\u5272\u306F\u63CF\u753B\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/dynamic-graph/dynamic-graph-grid-lines-example.png",
    mdxType: "Figure"
  }, "Static Graph\u306E\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }, `Color`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Interval`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u306E\u63CF\u753B\u306E\u9593\u9694\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Line Width`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30B0\u30EA\u30C3\u30C9\uFF65\u30E9\u30A4\u30F3\u306E\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Alpha`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30A4\u30F3\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "api-reference-6"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_element_grid_base",
    mdxType: "Link"
  }, "GraphElementGridBase\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_element_grid_x",
    mdxType: "Link"
  }, "GraphElementGridX\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_element_grid_y",
    mdxType: "Link"
  }, "GraphElementGridY\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "labels"
  }), `Labels\uFF08\u30E9\u30D9\u30EB\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `. Static Graph\u3067\u306F\u3001X\u8EF8\u3068Y\u8EF8\u306E\u30E9\u30D9\u30EB\u306B\u5927\u5206\u5272\u3068\u5C0F\u5206\u5272\u306E\u5024\u3092\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0F\u5206\u5272\u306F\u5927\u5206\u5272\u306B\u5438\u53CE\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u5927\u5206\u5272\u306E\u5B58\u5728\u3059\u308B\u4F4D\u7F6E\u306B\u306F\u5C0F\u5206\u5272\u306F\u63CF\u753B\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/dynamic-graph/dynamic-graph-labels-example.png",
    mdxType: "Figure"
  }, "Static Graph\u306E\u30E9\u30D9\u30EB\u306E\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }, `Position`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30D9\u30EB\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `X\u8EF8\u306E\u30E9\u30D9\u30EB\u306B\u6307\u5B9A\u53EF\u80FD\u306A\u4F4D\u7F6E\u306F"Top"\u3068"Bottom"\u3067\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Y\u8EF8\u306E\u30E9\u30D9\u30EB\u306B\u6307\u5B9A\u53EF\u80FD\u306A\u4F4D\u7F6E\u306F"Left"\u3068"Right"\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `ID\u306F\u3001\u4F7F\u7528\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u81EA\u52D5\u751F\u6210\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001ID\u306B\u306F'Auto-generated'\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Translation\u306F\u3001\u8868\u793A\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Typography\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Alignment\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u6C34\u5E73\u65B9\u5411\u306E\u914D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30C6\u30AD\u30B9\u30C8\u8A2D\u5B9A\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
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
  }, `Text Rotation`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30D9\u30EB\u306E\u56DE\u8EE2\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u6307\u5B9A\u53EF\u80FD\u306A\u5024\u306F\u3001"0"\u3001"90"\u3001"180"\u3001"270"\u3067\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Text Color`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30D9\u30EB\u306E\u5857\u308A\u3064\u3076\u3057\u306B\u4F7F\u7528\u3059\u308B\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Interval`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30D9\u30EB\u306E\u63CF\u753B\u306E\u9593\u9694\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Number of Decimals`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8EF8\u306B\u6CBF\u3063\u3066\u30E9\u30D9\u30EB\u304C\u8868\u793A\u3059\u308B\u5C0F\u6570\u70B9\u4EE5\u4E0B\u306E\u6841\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Decimal Separator`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C0F\u6570\u70B9\u306E\u8A18\u53F7\u3068\u3057\u3066\u3001','\uFF08\u30AB\u30F3\u30DE\uFF09\u3068'.'\uFF08\u30D4\u30EA\u30AA\u30C9\uFF09\u306E\u3069\u3061\u3089\u3092\u4F7F\u7528\u3059\u308B\u306E\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Alpha`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E9\u30A4\u30F3\u306E\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u7BC4\u56F2\u306F\u30010\uFF5E255\u3067\u3059\u3002 0\u306F\u5B8C\u5168\u306B\u900F\u660E\u3067\u3001255\u306F\u5857\u308A\u3064\u3076\u3055\u308C\u305F\u72B6\u614B\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "api-reference-7"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_labels_base",
    mdxType: "Link"
  }, "GraphLabelsBase\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_labels_x",
    mdxType: "Link"
  }, "GraphLabelX\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_labels_y",
    mdxType: "Link"
  }, "GraphLabelsY\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "interactions"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067Static Graph\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u3068\u30C8\u30EA\u30AC\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
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
  }), `\u30C8\u30EA\u30AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\u30C8\u30EA\u30AC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }, `Graph Clicked`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Static Graph\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u307E\u3057\u305F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `Graph Dragged`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Static Graph\u304C\u30C9\u30E9\u30C3\u30B0\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Static Graph\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u7279\u5B9A\u306E\u30B0\u30E9\u30D5\u8981\u7D20\u306F\u3001\u4ED6\u306E\u8981\u7D20\u3088\u308A\u9AD8\u901F\u3067\u63CF\u753B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#boxes"
  }), `Boxes`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#histogram"
  }), `Histogram`), `\u306F\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u308A\u8907\u96D1\u306A\u8A08\u7B97\u3092\u884C\u3063\u305F\u308A\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u306E\u3067\u3001\u6700\u3082\u9AD8\u901F\u306B\u51E6\u7406\u3055\u308C\u308B\u30B0\u30E9\u30D5\u8981\u7D20\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#area"
  }), `Area`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#diamonds"
  }), `Diamonds`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#dots"
  }), `Dots`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#line"
  }), `Line`), `\u306F\u3001CanvasWidget\u306A\u306E\u3067\u3001\u63CF\u753B\u306B\u95A2\u3057\u3066\u306F\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u5927\u304D\u304F\u4F9D\u5B58\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../general-ui-component-performance"
  }), `\u4E00\u822C\u7684\u306AUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code"
  }), `\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D3\u30E5\u30FC\u306E\u57FA\u5E95\u30AF\u30E9\u30B9\u306E\u751F\u6210\u6E08\u307F\u30B3\u30FC\u30C9\u3092\u898B\u308B\u3068\u3001TouchGFX Designer\u306B\u3088\u308BStatic Graph\u306E\u8A2D\u5B9A\u65B9\u6CD5\u304C\u308F\u304B\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `graph1.setScaleX(10);
graph1.setScaleY(10);
graph1.setPosition(80, 16, 320, 240);
graph1.setGraphAreaMargin(0, 20, 0, 22);
graph1.setGraphAreaPadding(15, 0, 20, 0);
graph1.setGraphRangeX(0, 100);
graph1.setGraphRangeY(0, 100);

graph1Line1Painter.setColor(touchgfx::Color::getColorFromRGB(20, 151, 197));
graph1Line1.setPainter(graph1Line1Painter);
graph1Line1.setLineWidth(2);
graph1.addGraphElement(graph1Line1);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u95A2\u6570\u3084\u3001DynamicGraph\u30AF\u30E9\u30B9\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u305D\u306E\u4ED6\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5916\u89B3\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306B\u306F\u3001 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "dynamicGraph.invalidate()"), " \u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u518D\u63CF\u753B\u3092\u884C\u3046\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer-examples"
  }), `TouchGFX Designer\u306E\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Static Graph\u3092\u3055\u3089\u306B\u63A2\u7D22\u3059\u308B\u306B\u306F\u3001\u6B21\u306EUI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65B0\u3057\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-templates/static-graph-example-v4.19.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EStatic Graph Example UI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "api-reference-8"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph",
    mdxType: "Link"
  }, "Graph\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_graph_data",
    mdxType: "Link"
  }, "GraphData\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_static_data_graph",
    mdxType: "Link"
  }, "StaticDataGraph\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../../api/classes/classtouchgfx_1_1_abstract_data_graph",
    mdxType: "Link"
  }, "AbstractDataGraph\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);