"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8101],{

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

/***/ 86988:
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
  id: "texts-view",
  title: "Texts View\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30D3\u30E5\u30FC\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/texts-view",
  "id": "development/ui-development/designer-user-guide/texts-view",
  "title": "Texts View\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30D3\u30E5\u30FC\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/texts-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/texts-view",
  "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/texts-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "texts-view",
    "title": "Texts View\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30D3\u30E5\u30FC\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Images View\uFF08\u753B\u50CF\u30D3\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/images-view"
  },
  "next": {
    "title": "Config View\uFF08\u8A2D\u5B9A\u30D3\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/config-view"
  }
};
const assets = {};

const toc = [{
  value: "Texts\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09",
  id: "texts",
  level: 2
}, {
  value: "\u81EA\u52D5\u751F\u6210\u306EID",
  id: "auto-generated-id",
  level: 3
}, {
  value: "\u5B9A\u7FA9\u3055\u308C\u305FID",
  id: "defined-id",
  level: 3
}, {
  value: "Texts\u30BF\u30D6\u306E\u6A5F\u80FD",
  id: "texts-tab-features",
  level: 3
}, {
  value: "Translations\uFF08\u7FFB\u8A33\uFF09",
  id: "translations",
  level: 3
}, {
  value: "Translations Specifics\uFF08\u7FFB\u8A33\u56FA\u6709\u306E\u8A2D\u5B9A\uFF09",
  id: "translations-specifics",
  level: 3
}, {
  value: "Adding languages\uFF08\u8A00\u8A9E\u306E\u8FFD\u52A0\uFF09",
  id: "adding-languages",
  level: 3
}, {
  value: "Typographies\uFF08\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\uFF09",
  id: "typographies",
  level: 2
}, {
  value: "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8FFD\u52A0",
  id: "add-new-typography",
  level: 3
}, {
  value: "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u524A\u9664",
  id: "delete-typography",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u306ETexts View\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u3001\u7FFB\u8A33\u3001\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8A2D\u5B9A\u3092\u884C\u3044\u307E\u3059\u3002 \u3053\u306E\u30D3\u30E5\u30FC\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#texts"
  }), `Texts`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#typographies"
  }), `Typographies`), `\u3068\u3044\u30462\u3064\u306E\u30BF\u30D6\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "texts"
  }), `Texts\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texts\u30BF\u30D6\u306B\u306F\u3001\u3059\u3079\u3066\u306E\u30C6\u30AD\u30B9\u30C8\u8981\u7D20\u306E\u6982\u8981\u304C\u793A\u3055\u308C\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u8981\u7D20\u306B\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#auto-generated-id"
  }), `\u81EA\u52D5\u751F\u6210\u306EID`), `\u307E\u305F\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#defined-id"
  }), `\u5B9A\u7FA9\u3055\u308C\u305FID`), `\u304C\u542B\u307E\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view.png",
    mdxType: "Figure"
  }, "Texts View\uFF08\u30C6\u30AD\u30B9\u30C8\uFF65\u30D3\u30E5\u30FC\uFF09"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "auto-generated-id"
  }), `\u81EA\u52D5\u751F\u6210\u306EID`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u81EA\u52D5\u751F\u6210\u306EID\u3092\u6301\u3064\u30C6\u30AD\u30B9\u30C8\uFF08\u30B7\u30F3\u30B0\u30EB\uFF65\u30E6\u30FC\u30B9\uFF65\u30C6\u30AD\u30B9\u30C8\u3068\u3082\u547C\u3070\u308C\u308B\uFF09\u306F\u4E00\u5EA6\u3060\u3051\u4F7F\u7528\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u3067\u3001\u4E00\u5EA6\u306B\u8907\u6570\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u307E\u305F\u306F\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u3053\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u307E\u305F\u306F\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3059\u308B\u3068\u304D\u306B\u81EA\u52D5\u7684\u306B\u8FFD\u52A0\u3055\u308C\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u307E\u305F\u306F\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u524A\u9664\u6642\u306B\u81EA\u52D5\u7684\u306B\u524A\u9664\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u81EA\u52D5\u751F\u6210\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u6700\u521D\u306B\u4F5C\u6210\u3055\u308C\u305F\u3068\u304D\u306B\u3001"Unsorted"\u3068\u3044\u3046\u540D\u524D\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30B0\u30EB\u30FC\u30D7\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30B0\u30EB\u30FC\u30D7\u304C\u5B58\u5728\u3057\u306A\u3051\u308C\u3070\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u81EA\u52D5\u751F\u6210\u306EID\u306F\u7C21\u5358\u306B\u540D\u524D\u3092\u5909\u66F4\u3067\u304D\u308B\u306E\u3067\u3001\u305D\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304A\u3088\u3073\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u4F55\u5EA6\u3067\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-auto-generated.png",
    mdxType: "Figure"
  }, "Texts View\u306E\u81EA\u52D5\u751F\u6210\u306E\u30C6\u30AD\u30B9\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "defined-id"
  }), `\u5B9A\u7FA9\u3055\u308C\u305FID`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5B9A\u7FA9\u3055\u308C\u305FID\u3092\u6301\u3064\u30C6\u30AD\u30B9\u30C8\uFF08\u30EA\u30BD\u30FC\u30B9\u3068\u3082\u547C\u3070\u308C\u308B\uFF09\u306F\u3001TouchGFX Designer\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304A\u3088\u3073\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u4F55\u5EA6\u3067\u3082\u518D\u5229\u7528\u3067\u304D\u307E\u3059\u3002 \u5B9A\u7FA9\u3055\u308C\u305FID\u3092\u6301\u3064\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001Texts\u30BF\u30D6\u306E\uFF3BADD NEW TEXT\uFF3D\u3068\u3044\u3046\u30E9\u30D9\u30EB\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u304B\u3001\u81EA\u52D5\u751F\u6210\u306EID\u3092\u6301\u3064\u30C6\u30AD\u30B9\u30C8\u306E\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059\u3002 \u5B9A\u7FA9\u3055\u308C\u305FID\u3092\u6301\u30641\u3064\u4EE5\u4E0A\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u524A\u9664\u3059\u308B\u306B\u306F\u3001Texts\u30BF\u30D6\u3067\u30B0\u30EA\u30C3\u30C9\u307E\u305F\u306F\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u3092\u9078\u629E\u3057\u3001\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F\u304B\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\uFF65\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "texts-tab-features"
  }), `Texts\u30BF\u30D6\u306E\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u691C\u7D22:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u691C\u7D22\u30D0\u30FC\u3092\u4F7F\u7528\u3057\u3066\u3001\u7279\u5B9A\u306E\u30C6\u30AD\u30B9\u30C8\u8981\u7D20\u307E\u305F\u306F\u7FFB\u8A33\u3092\u898B\u3064\u3051\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\u5217\u306E\u4F7F\u7528\u53EF\u80FD\u306A\u5165\u529B\u304C\u3059\u3079\u3066\u691C\u7D22\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Texts\u30BF\u30D6\u306B\u306F\u3001\u30B0\u30EB\u30FC\u30D7\u3068\u30C6\u30AD\u30B9\u30C8\u8981\u7D20\u306E\u6982\u8981\u3092\u793A\u3059\u30C4\u30EA\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30B0\u30EB\u30FC\u30D7:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30C4\u30EA\u30FC\u306E\u5404\u30B0\u30EB\u30FC\u30D7\u306B\u306F1\u3064\u4EE5\u4E0A\u306E\u30C6\u30AD\u30B9\u30C8\u304C\u542B\u307E\u308C\u3066\u304A\u308A\u3001\u30B0\u30EB\u30FC\u30D7\u540D\u306E\u6A2A\u306E\u30B7\u30A7\u30D6\u30ED\u30F3\uFF08\u5C71\u5F62\u306E\u77E2\u5370\uFF09\u3092\u62BC\u3059\u3068\u30B0\u30EB\u30FC\u30D7\u3092\u6298\u308A\u305F\u305F\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30B0\u30EB\u30FC\u30D7\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u3067\u30C6\u30AD\u30B9\u30C8\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u304B\u3001\u30B0\u30EA\u30C3\u30C9\u5185\u3067\u30C6\u30AD\u30B9\u30C8\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u65B0\u3057\u3044\u30B0\u30EB\u30FC\u30D7\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u5358\u7D14\u306B\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u306E\u8FFD\u52A0\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-groups.png",
    mdxType: "Figure"
  }, "\u30C6\u30AD\u30B9\u30C8\u306E\u30B0\u30EB\u30FC\u30D7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30D8\u30C3\u30C0\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30B0\u30EA\u30C3\u30C9\u5185\u306E\u30D8\u30C3\u30C0\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30D8\u30C3\u30C0\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3057\u307E\u3059\u3002 \u3053\u3053\u304B\u3089\u5217\u306E\u975E\u8868\u793A\u3001\u7DE8\u96C6\u3001\u524A\u9664\u3001\u8868\u793A\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\uFF08\u3059\u3079\u3066\u306E\u5217\u3067\u3059\u3079\u3066\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u4F7F\u7528\u3067\u304D\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-header-context-menu.png",
    mdxType: "Figure"
  }, "\u30D8\u30C3\u30C0\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30B0\u30EA\u30C3\u30C9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30B0\u30EA\u30C3\u30C9\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3057\u307E\u3059\u3002 \u3053\u3053\u304B\u3089\u30C6\u30AD\u30B9\u30C8\u306E\u524A\u9664\u3001\u30B3\u30D4\u30FC\u3001\u8CBC\u308A\u4ED8\u3051\u3001\u5225\u306E\u30B0\u30EB\u30FC\u30D7\u3078\u306E\u79FB\u52D5\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-text-context-menu.png",
    mdxType: "Figure"
  }, "\u30C6\u30AD\u30B9\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations"
  }), `Translations\uFF08\u7FFB\u8A33\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Typography:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30C6\u30AD\u30B9\u30C8\u3068\u305D\u306E\u3059\u3079\u3066\u306E\u7FFB\u8A33\u304C\u4F7F\u7528\u3059\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#typographies"
  }), `Typographies`), `\u30BF\u30D6\u3067\u8FFD\u52A0\u304A\u3088\u3073\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Alignment:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30C6\u30AD\u30B9\u30C8\u3068\u305D\u306E\u3059\u3079\u3066\u306E\u7FFB\u8A33\u304C\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u6C34\u5E73\u65B9\u5411\u306E\u4F4D\u7F6E\u5408\u305B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u4F7F\u7528\u3067\u304D\u308B\u4F4D\u7F6E\u5408\u305B\u306F\u3001Left\uFF08\u5DE6\u63C3\u3048\uFF09\u3001Right\uFF08\u53F3\u63C3\u3048\uFF09\u3001Center\uFF08\u4E2D\u592E\u63C3\u3048\uFF09\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations-specifics"
  }), `Translations Specifics\uFF08\u7FFB\u8A33\u56FA\u6709\u306E\u8A2D\u5B9A\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5404\u7FFB\u8A33\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A2\u30E9\u30A4\u30E1\u30F3\u30C8\u3092\u4E0A\u66F8\u304D\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3092\u8868\u793A\u3059\u308B\u306B\u306F\u3001\u7FFB\u8A33\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u7FFB\u8A33\u56FA\u6709\u306E\u30A2\u30E9\u30A4\u30E1\u30F3\u30C8\u306E\u8A2D\u5B9A\u306F\u3001\u4E0B\u306E\u56F3\u306B\u793A\u3059\u3088\u3046\u306B\u30A4\u30F3\u30E9\u30A4\u30F3\u306EAlignment\u30BB\u30EC\u30AF\u30BF\u3067\u7C21\u5358\u306B\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-edit-language-specific-text-alignment.png",
    mdxType: "Figure"
  }, "Translation Specific Alignment\u306E\u8A2D\u5B9A"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-languages"
  }), `Adding languages\uFF08\u8A00\u8A9E\u306E\u8FFD\u52A0\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044\u8A00\u8A9E\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u5358\u7D14\u306B\u30D8\u30C3\u30C0\uFF65\u30E1\u30CB\u30E5\u30FC\u306E\u8FFD\u52A0\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002 \u4E0B\u306E\u56F3\u306B\u793A\u3059\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u304C\u8868\u793A\u3055\u308C\u3001\u3053\u3053\u3067\u8A00\u8A9E\u306E\u540D\u524D\u3068\u3001\u5225\u306E\u8A00\u8A9E\u304B\u3089\u306E\u7FFB\u8A33\u3092\u4F7F\u7528\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-add-language.png",
    mdxType: "Figure"
  }, "Add New Language\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "typographies"
  }), `Typographies\uFF08\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Typographies\u30BF\u30D6\u306B\u306F\u3001\u4E0B\u306E\u56F3\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u3059\u3079\u3066\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u6982\u8981\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view.png",
    mdxType: "Figure"
  }, "Typographies\u30D3\u30E5\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Typography ID:`), ` \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u540D\u524D\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Language Settings:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8A00\u8A9E\u8A2D\u5B9A\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u672A\u6307\u5B9A\u306E\u8A00\u8A9E\u306B\u306F\u3059\u3079\u3066\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u304C\u9069\u7528\u3055\u308C\u307E\u3059\u3002 \u7279\u5B9A\u306E\u8A00\u8A9E\u306E\u8A2D\u5B9A\u3092\u6307\u5B9A\u3059\u308B\u306B\u306F\u3001\u8FFD\u52A0\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30E1\u30CB\u30E5\u30FC\u304B\u3089\u5FC5\u8981\u306A\u8A00\u8A9E\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-language-setting.png",
    mdxType: "Figure"
  }, "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306B\u8A00\u8A9E\u8A2D\u5B9A\u3092\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A00\u8A9E\u8A2D\u5B9A\u3092\u524A\u9664\u3059\u308B\u306B\u306F\u3001\u5BFE\u8C61\u306E\u8A00\u8A9E\u8A2D\u5B9A\u30BF\u30D6\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-language-setting.png",
    mdxType: "Figure"
  }, "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8A00\u8A9E\u8A2D\u5B9A\u3092\u524A\u9664"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Font:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u6240\u5B9A\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\u306E\u540D\u524D\u3067\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Windows\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30D5\u30A9\u30F3\u30C8\u304B\u3089\u9078\u629E\u3059\u308B\u304B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets / fonts`), `\u30D5\u30A9\u30EB\u30C0\u306B\u72EC\u81EA\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u30D5\u30A9\u30F3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u5834\u5408\u3001\u305D\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u3080\u305F\u3081\u306BTouchGFX Designer\u3092\u518D\u8D77\u52D5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Size:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Bpp:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Bits per pixel\u306E\u7565\u3067\u3059\u3002 \u30D5\u30A9\u30F3\u30C8\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D4\u30AF\u30BB\u30EB\u3042\u305F\u308A\u306E\u30D3\u30C3\u30C8\u6570\u3067\u3059\u3002 \u9069\u5207\u306A\u5024\u306F1\u30012\u30014\u30018\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Direction:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30C6\u30AD\u30B9\u30C8\u304C\u4F7F\u7528\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u5411\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u4F7F\u7528\u3067\u304D\u308B\u5411\u304D\u306F\u3001LTR\uFF08\u5DE6\u304B\u3089\u53F3\uFF09\u3068RTL\uFF08\u53F3\u304B\u3089\u5DE6\uFF09\u3067\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306FLTR\u3067\u3059\u3002 RTL\u306F\u4E3B\u306B\u30A2\u30E9\u30D3\u30A2\u8A9E\u3084\u30D8\u30D6\u30E9\u30A4\u8A9E\u306A\u3069\u3001\u53F3\u304B\u3089\u5DE6\u306B\u8A18\u8FF0\u3059\u308B\u8A00\u8A9E\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Fallback Character:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` TouchGFX\u3067\u6587\u5B57\u3092\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u306E\u306B\u3001\u30B0\u30EA\u30D5\u304C\u4F7F\u7528\u3067\u304D\u306A\u3044\u5834\u5408\u3001\u3053\u306E\u5217\u3067\u6307\u5B9A\u3055\u308C\u305F\u5024\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u5024\u3068\u3057\u3066\u306F\u30011\u3064\u306E\u6587\u5B57\u3001Unicode\u5024\uFF0810\u9032\u6570\u307E\u305F\u306F16\u9032\u6570\u30010xABCD\u306A\u3069\uFF09\u3001\u307E\u305F\u306F\u7279\u5225\u306A\u30AD\u30FC\u30EF\u30FC\u30C9skip\u3092\u4F7F\u7528\u3059\u308B\u304B\u3001\u5358\u7D14\u306B\u7A7A\u767D\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Wildcard Characters:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3001\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u5FC5\u8981\u306A\u6587\u5B57\u3067\u3059\u3002 \u30C0\u30DF\u30FC\uFF65\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3088\u308A\u3082\u3053\u3061\u3089\u306E\u65B9\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 \u30C0\u30DF\u30FC\uFF65\u30C6\u30AD\u30B9\u30C8\u3067\u306F\u3059\u3079\u3066\u306E\u30B0\u30EA\u30D5\u3060\u3051\u3067\u306A\u304F\u3001\u5B9F\u969B\u306E\u6587\u5B57\u5217\uFF08"0123456789-"\u306A\u3069\uFF09\u3082\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u5217\u306B"0123456789-"\u3068\u5165\u529B\u3059\u308B\u3068\u3001\u30B0\u30EA\u30D5\u306F\u751F\u6210\u3055\u308C\u307E\u3059\u304C\u6587\u5B57\u5217\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Widget Wildcard Characters:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u5FC5\u8981\u3068\u3059\u308B\u4E00\u90E8\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u8FFD\u52A0\u3055\u308C\u308B\u6587\u5B57\u5217\u3067\u3059\u3002 \u4F8B\u306B\u793A\u3059\u3088\u3046\u306B\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/digital-clock"
  }), `\u30C7\u30B8\u30BF\u30EB\u6642\u8A08`), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u306F\u3001\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B"0123456789 :APM"\u3068\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u8AAD\u51FA\u3057\u5C02\u7528\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Wildcard Ranges:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Wildcard Characters\u3068\u4F3C\u3066\u3044\u307E\u3059\u304C\u3001\u7BC4\u56F2\u3092\u7C21\u5358\u306B\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001"0-9,A-F"\u306F\u3001Wildcard Characters\u5217\u3067"0123456789ABCDEF"\u3068\u6307\u5B9A\u3059\u308B\u306E\u3068\u540C\u3058\u306B\u306A\u308A\u307E\u3059\u3002 \u7BC4\u56F2\u306F\u6570\u5024\u3067\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001"0-9"\u306F\u3001"48-57"\u307E\u305F\u306F"0x30-0x39"\u3068\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u5F15\u7528\u7B26\u306F\u542B\u307E\u308C\u307E\u305B\u3093\u306E\u3067\u3001\u5165\u529B\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Ellipsis Character:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u3053\u306E\u6587\u5B57\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u9818\u57DF\u5185\u3067\u9577\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u5207\u308A\u8A70\u3081\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "add-new-typography"
  }), `\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8FFD\u52A0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u65B0\u3057\u3044\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u5358\u7D14\u306B\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u306E\u8FFD\u52A0\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u3092\u542B\u3080\u65B0\u3057\u3044\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u304C\u30EA\u30B9\u30C8\u306E\u4E00\u756A\u4E0B\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-typography.png",
    mdxType: "Figure"
  }, "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8FFD\u52A0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "delete-typography"
  }), `\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u524A\u9664`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3092\u524A\u9664\u3059\u308B\u306B\u306F\u3001\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u3067\u5BFE\u8C61\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\uFF65\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F\u304B\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\uFF65\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-typography.png",
    mdxType: "Figure"
  }, "\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u524A\u9664"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);