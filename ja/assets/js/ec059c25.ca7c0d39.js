"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4970],{

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

/***/ 82985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Shortcut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: "shortcut"
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Shortcut);


/***/ }),

/***/ 86016:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82985);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39130);
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
  id: "config-view",
  title: "Config View\uFF08\u8A2D\u5B9A\u30D3\u30E5\u30FC\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/config-view",
  "id": "development/ui-development/designer-user-guide/config-view",
  "title": "Config View\uFF08\u8A2D\u5B9A\u30D3\u30E5\u30FC\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/config-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/config-view",
  "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/config-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "config-view",
    "title": "Config View\uFF08\u8A2D\u5B9A\u30D3\u30E5\u30FC\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Texts View\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30D3\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/texts-view"
  },
  "next": {
    "title": "Interactions\uFF08\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/interactions-view"
  }
};
const assets = {};




const toc = [{
  value: "General\uFF08\u4E00\u822C\uFF09",
  id: "general",
  level: 2
}, {
  value: "Display\uFF08\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF09",
  id: "display",
  level: 2
}, {
  value: "Default Image Configuration\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u753B\u50CF\u8A2D\u5B9A\uFF09",
  id: "default-image-configuration",
  level: 2
}, {
  value: "Text Configuration\uFF08\u30C6\u30AD\u30B9\u30C8\u8A2D\u5B9A\uFF09",
  id: "text-configuration",
  level: 2
}, {
  value: "Simulator\uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF09",
  id: "simulator",
  level: 2
}, {
  value: "Build\uFF08\u30D3\u30EB\u30C9\uFF09",
  id: "build",
  level: 2
}, {
  value: "Framework Features\uFF08\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u6A5F\u80FD\uFF09",
  id: "framework-features",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A2D\u5B9A\u30D3\u30E5\u30FC\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#general"
  }), `General`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#display"
  }), `Display`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#default-image-configuration"
  }), `Default Image Configuration`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#text-configuration"
  }), `Text Configuration`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#simulator"
  }), `Simulator`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#simulator"
  }), `Build`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#framework-features"
  }), `Framework Features`), `\u3068\u3044\u3063\u305F\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5F71\u97FF\u3059\u308B\u3055\u307E\u3056\u307E\u306A\u8A2D\u5B9A\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.png",
    mdxType: "Figure"
  }, " Config View\u3067\u306EGeneral\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "general"
  }), `General\uFF08\u4E00\u822C\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.png",
    mdxType: "Figure"
  }, " Config View\u3067\u306EGeneral\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Application Name\u306F\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u6642\u306B\u4ED8\u3051\u3089\u308C\u305F\u540D\u524D\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TouchGFX Board Setup`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u306B\u4F7F\u7528\u3055\u308C\u305FTouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u8A72\u5F53\u3059\u308B\u60C5\u5831\u304C\u306A\u3044\u5834\u5408\u306F'N/A'\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8A72\u5F53\u3059\u308B\u60C5\u5831\u304C\u3042\u308B\u5834\u5408\u306F\u3001TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306E\u540D\u524D\u3068\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Selected Language`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306B\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "texts-view"
  }), `Text View`), `\u3067\u8A2D\u5B9A\u3057\u305F\u8A00\u8A9E\u304C\u542B\u307E\u308C\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB\u6642\u306B\u8868\u793A\u3055\u308C\u308B\u8A00\u8A9E\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Skin`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u306F\u3001\u30B9\u30BF\u30A4\u30EB\u306E\u8A2D\u5B9A\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u30012\u3064\u306E\u7D44\u8FBC\u307F\u30B9\u30BF\u30A4\u30EB\u306E\u3044\u305A\u308C\u304B\u3092\u9078\u629E\u3057\u307E\u3059\u3002\u9078\u629E\u80A2\u306F'Blue'\u3068'Dark'\u3067\u3059\u3002 \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u3001'Blue'\u30B9\u30AD\u30F3\u306B\u3088\u308B\u30B9\u30BF\u30A4\u30EB\u3067\u8A2D\u5B9A\u6E08\u307F\u306E\u5834\u5408\u3001\u30B9\u30AD\u30F3\u304C'Dark'\u306B\u5909\u66F4\u3055\u308C\u308B\u3068\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F'Dark'\u30B9\u30AD\u30F3\u5185\u306E\u5BFE\u5FDC\u3059\u308B\u30B9\u30BF\u30A4\u30EB\u306B\u81EA\u52D5\u7684\u306B\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Startup Screen`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306B\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u8FFD\u52A0\u3055\u308C\u305F\u3059\u3079\u3066\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u304C\u542B\u307E\u308C\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB\u6642\u306B\u8868\u793A\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `Display\uFF08\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8A2D\u5B9A\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.png",
    mdxType: "Figure"
  }, " Config View\u3067\u306EDisplay\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Dimensions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30B5\u30A4\u30BA\u306F\u3001W\uFF08\u5E45\uFF09\u30D7\u30ED\u30D1\u30C6\u30A3\u3068H\uFF08\u9AD8\u3055\uFF09\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u305F\u3060\u3057TouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u3067\u30B5\u30A4\u30BA\u304C\u8A2D\u5B9A\u6E08\u307F\u306E\u5834\u5408\u3001\u30B5\u30A4\u30BA\u306E\u8A2D\u5B9A\u306F\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Display Orientation`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5411\u304D\u3092\u7E26\u5411\u304D\u3068\u6A2A\u5411\u304D\u306E\u9593\u3067\u5207\u308A\u66FF\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u4F7F\u7528\u3055\u308C\u308B\u753B\u50CF\u304Ccpp\u30D5\u30A1\u30A4\u30EB\u306B\u5909\u63DB\u3055\u308C\u308B\u65B9\u6CD5\u306B\u3082\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306B\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u8272\u6DF1\u5EA6\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210\u306B\u4F7F\u7528\u3055\u308C\u308BTouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306B\u3088\u3063\u3066\u6C7A\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "default-image-configuration"
  }), `Default Image Configuration\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u753B\u50CF\u8A2D\u5B9A\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u753B\u50CF\u306B\u4F7F\u7528\u3055\u308C\u308B\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u8A2D\u5B9A\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "images-view"
  }), `Images View`), `\u3067\u4E0A\u66F8\u304D\u3055\u308C\u306A\u3044\u9650\u308A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u3059\u3079\u3066\u306E\u753B\u50CF\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.png",
    mdxType: "Figure"
  }, "Config View\u3067\u306EDefault Image Configuration\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Opaque Image Format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u306F\u3001\u4E0D\u900F\u660E\u306A\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u306E\u307F\u3092\u6301\u3064\u753B\u50CF\u306E\u751F\u6210\u306B\u4F7F\u7528\u3059\u308B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u9078\u629E\u53EF\u80FD\u306A\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u9078\u629E\u3055\u308C\u305F\u8272\u6DF1\u5EA6\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Non Opaque Image Format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u306F\u3001\u900F\u660E\u306A\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092\u6301\u3064\u753B\u50CF\u306E\u751F\u6210\u306B\u4F7F\u7528\u3059\u308B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u9078\u629E\u53EF\u80FD\u306A\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u9078\u629E\u3055\u308C\u305F\u8272\u6DF1\u5EA6\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Section`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u306F\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u306E\u753B\u50CF\u30C7\u30FC\u30BF\u306E\u4FDD\u5B58\u5834\u6240\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u9078\u629E\u53EF\u80FD\u306A\u30BB\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210\u6642\u306ETouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Extra Section`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` L8\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AB\u30E9\u30FC\uFF65\u30C6\u30FC\u30D6\u30EB\u3092\u5225\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u4FDD\u5B58\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u9078\u629E\u53EF\u80FD\u306A\u30BB\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210\u6642\u306ETouchGFX\u30DC\u30FC\u30C9\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u6C7A\u307E\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Dither Algorithm`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u306F\u3001\u753B\u50CF\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3059\u308B\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `No dither: \u753B\u50CF\u306B\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306F\u9069\u7528\u3055\u308C\u307E\u305B\u3093\u3002 \u4F55\u3082\u5909\u66F4\u304C\u884C\u308F\u308C\u306A\u3044\u306E\u3067\u3001\u6700\u3082\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u9AD8\u3044\u8A2D\u5B9A\u3067\u3059\u3002 \u305F\u3060\u3057\u753B\u50CF\u306B\u3088\u3063\u3066\u306F\u3001\u8272\u6DF1\u5EA6\u304C\u4F4E\u3044\u5834\u5408\u306B\u753B\u50CF\u306E\u8996\u899A\u7684\u54C1\u8CEA\u304C\u4F4E\u4E0B\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Floyd-Steinberg: \u96A3\u63A5\u3059\u308B\u30D4\u30AF\u30BB\u30EB\u306B\u8AA4\u5DEE\u3092\u62E1\u6563\u3055\u305B\u3001\u304D\u3081\u7D30\u304B\u3044\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u9BAE\u660E\u3055\u304C\u72A0\u7272\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Jarvis, Judice and Ninke: Floyd-Steinberg\u3088\u308A\u3082\u4E00\u6B69\u5148\u306E\u30D4\u30AF\u30BB\u30EB\u307E\u3067\u8AA4\u5DEE\u3092\u62E1\u6563\u3055\u305B\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306E\u304D\u3081\u304C\u7C97\u304F\u306A\u308A\u307E\u3059\u304C\u3001\u9BAE\u660E\u306A\u753B\u50CF\u306B\u306A\u308A\u307E\u3059\u3002 3\u3064\u306E\u8AA4\u5DEE\u62E1\u6563\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u4E2D\u3067\u6700\u3082\u4F4E\u901F\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Stucki: \u6700\u5C0F\u9650\u306E\u5E73\u5747\u8AA4\u5DEE\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u306B\u57FA\u3065\u3044\u3066\u304A\u308A\u3001\u9AD8\u901F\u3067\u304F\u3063\u304D\u308A\u3068\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Alpha Dither`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u306F\u3001\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u4ECB\u3057\u3066\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F7F\u7528\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Layout Rotaion`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3067\u306F\u3001\u751F\u6210\u6642\u306B\u753B\u50CF\u30C7\u30FC\u30BF\u306E\u56DE\u8EE2\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5411\u304D\u304C\u5909\u66F4\u3055\u308C\u305F\u5834\u5408\u3001\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u5411\u304D\u3067\u6B63\u3057\u304F\u753B\u50CF\u3092\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "text-configuration"
  }), `Text Configuration\uFF08\u30C6\u30AD\u30B9\u30C8\u8A2D\u5B9A\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30CB\u30FC\u30BA\u306B\u5408\u3046\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u30AA\u30F3\u306B\u3059\u308B\u3053\u3068\u3067\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3068\u30B9\u30C8\u30EC\u30FC\u30B8\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.png",
    mdxType: "Figure"
  }, "Config View\u3067\u306EText Configuration\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Remap texts`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u540C\u4E00\u306E\u7FFB\u8A33\u3092\u518D\u5272\u308A\u5F53\u3066\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u3092\u518D\u5272\u308A\u5F53\u3066\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u8A00\u8A9E\u3001\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3001\u30A2\u30E9\u30A4\u30E1\u30F3\u30C8\u3067\u540C\u4E00\u306E\u7FFB\u8A33\u3068\u63A5\u5C3E\u8F9E\u304C\u7D50\u5408\u3055\u308C\u3001\u30D5\u30C3\u30C8\u30D7\u30EA\u30F3\u30C8\u304C\u7E2E\u5C0F\u3057\u307E\u3059\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001Binary translation files\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u306F\u540C\u6642\u306B\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\uFF08\u76F8\u4E92\u6392\u4ED6\u7684\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30B0\u30EA\u30D5\uFF65\u30D0\u30A4\u30C8\u306E\u6C34\u5E73\u65B9\u5411\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\u3092A4\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5408\u308F\u305B\u308B\u304B\u3069\u3046\u304B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u30024bpp\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u307F\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Binary translation files`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u7FFB\u8A33\u3092\u3001\u5B9F\u884C\u6642\u306B\u8AAD\u307F\u8FBC\u307F\u53EF\u80FD\u306A\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u306B\u79FB\u52D5\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001Remap texts\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u306F\u540C\u6642\u306B\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\uFF08\u76F8\u4E92\u6392\u4ED6\u7684\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Binary font files`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u3001\u5B9F\u884C\u6642\u306B\u8AAD\u307F\u8FBC\u307F\u53EF\u80FD\u306A\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A1\u30A4\u30EB\u5185\u306B\u79FB\u52D5\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Mapped storage format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u51FA\u529B\u3059\u308B\u5834\u5408\u306B\u5B9A\u7FA9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Unmapped storage format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30B9\u30C8\u30EC\u30FC\u30B8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u51FA\u529B\u3059\u308B\u5834\u5408\u306B\u5B9A\u7FA9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator"
  }), `Simulator\uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u5B9F\u884C\u6642\u306B\u30B9\u30AD\u30F3\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 \u30B9\u30AD\u30F3\u306F\u7E26\u5411\u304D\u3068\u6A2A\u5411\u304D\u306E\u3069\u3061\u3089\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u3082\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002 X\u304A\u3088\u3073Y\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u30B9\u30AD\u30F3\u4E0A\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u4F4D\u7F6E\u3092\u6C7A\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.png",
    mdxType: "Figure"
  }, " Config View\u3067\u306ESimulator\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B9\u30AD\u30F3\u3092\u4F7F\u7528\u3057\u3066\u5B9F\u884C\u4E2D\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u30C7\u30E2\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30B9\u30AD\u30F3\u3092\u4F7F\u7528\u3057\u3066\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u6A19\u6E96\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306F\u975E\u8868\u793A\u306B\u306A\u308A\u307E\u3059\u3002 \u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3092\u9589\u3058\u308B\u306B\u306F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Esc\u30AD\u30FC\u3092\u62BC\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.gif",
    mdxType: "Figure"
  }, "\u30B9\u30AD\u30F3\u3092\u4F7F\u7528\u3057\u3066\u5B9F\u884C\u4E2D\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "build"
  }), `Build\uFF08\u30D3\u30EB\u30C9\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#run-simulator"
  }), `'Run Simulator'`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#run-target"
  }), `'Run Target'`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#generate-code"
  }), `'Generate Code'`), `\u3092\u62BC\u3057\u305F\u3068\u304D\u306B\u5B9F\u884C\u3055\u308C\u305F\u30B3\u30DE\u30F3\u30C9\u3092\u4E0A\u66F8\u304D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30DE\u30F3\u30C9\u3092\u4E0A\u66F8\u304D\u3059\u308B\u306B\u306F\u3001\u5358\u7D14\u306B\u30C6\u30AD\u30B9\u30C8\uFF65\u30DC\u30C3\u30AF\u30B9\u306B\u4EFB\u610F\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5165\u529B\u3057\u307E\u3059\u3002 \u30B3\u30DE\u30F3\u30C9\u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u306B\u306F\u3001\u4E0A\u66F8\u304D\u6E08\u307F\u306E\u5834\u5408\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u540D\u306E\u6A2A\u306E'Reset'\u30E9\u30D9\u30EB\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.png",
    mdxType: "Figure"
  }, " Config View\u3067\u306EBuild\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Generate Assets Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u901A\u5E38\u306F\u30C6\u30AD\u30B9\u30C8\uFF65\u30A2\u30BB\u30C3\u30C8\u3068\u753B\u50CF\u30A2\u30BB\u30C3\u30C8\u3092\u751F\u6210\u3059\u308B\u305F\u3081\u306B\u8A2D\u5B9A\u3055\u308C\u3001TouchGFX Designer\u304C\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u305F\u5F8C\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Post Generate Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u901A\u5E38\u306F\u3055\u307E\u3056\u307E\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u66F4\u65B0\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u7D44\u8FBC\u306E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx update_project`), `\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\uFF65\u30C4\u30FC\u30EB\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio\uFF08.vcxproj\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil\uFF08.uvprojx\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR\uFF08.ewp & .ipcf\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE\uFF08.project & .cproject\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX\uFF08.ioc\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u3001\u30B3\u30FC\u30C9\u751F\u6210\u5F8C\u306B\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u306E\u3042\u308B\u30B3\u30DE\u30F3\u30C9\u3092\u3001\u3053\u3053\u306B\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Compile Simulator Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u7528\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u901A\u5E38\u306FTouchGFX Designer\u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u305FMakefile\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u3053\u308C\u3092\u884C\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Run Simulator Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001simulator.exe\u306E\u8D77\u52D5\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Post Generate Target Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u901A\u5E38\u306F\u3055\u307E\u3056\u307E\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\uFF08\u4E3B\u306BSTM32CubeMX\uFF08.ioc\uFF09\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\uFF09\u3092\u66F4\u65B0\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305F\u3060\u3057\u3001\u30B3\u30FC\u30C9\u751F\u6210\u5F8C\u306B\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u306E\u3042\u308B\u30B3\u30DE\u30F3\u30C9\u3092\u3001\u3053\u3053\u306B\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Compile Target Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u7528\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Flash Target Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u7528\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D5\u30E9\u30C3\u30B7\u30E5\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "framework-features"
  }), `Framework Features\uFF08\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u6A5F\u80FD\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u5185\u306E\u6A5F\u80FD\uFF08\u7279\u306B\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF09\u3092\u6709\u52B9\u5316 / \u7121\u52B9\u5316\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u5360\u6709\u3059\u308B\u30B3\u30FC\u30C9\u306E\u30B5\u30A4\u30BA\u3092\u6700\u9069\u5316\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u8868\u793A\u3055\u308C\u308B\u9078\u629E\u53EF\u80FD\u306A\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u9078\u629E\u3055\u308C\u305F\u8272\u6DF1\u5EA6\u306B\u5FDC\u3058\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u4E0B\u306E\u753B\u50CF\u306B\u306F\u3001\u8272\u6DF1\u5EA6\u304C24bit\u306E\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u5411\u3051\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.png",
    mdxType: "Figure"
  }, "Config View\u3067\u306E24bpp\u7528\u306EFramework Features\u306E\u8A2D\u5B9A"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);