"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[58],{

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

/***/ 5321:
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
  id: "interactions-view",
  title: "Interactions\uFF08\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF09"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/interactions-view",
  "id": "development/ui-development/designer-user-guide/interactions-view",
  "title": "Interactions\uFF08\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF09",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/interactions-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/interactions-view",
  "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/interactions-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "interactions-view",
    "title": "Interactions\uFF08\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF09"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Config View\uFF08\u8A2D\u5B9A\u30D3\u30E5\u30FC\uFF09",
    "permalink": "/4.20/ja/docs/development/ui-development/designer-user-guide/config-view"
  },
  "next": {
    "title": "Import & Export",
    "permalink": "/4.20/ja/docs/category/import--export"
  }
};
const assets = {};

const toc = [{
  value: "Triggers\uFF08\u30C8\u30EA\u30AC\uFF09",
  id: "triggers",
  level: 2
}, {
  value: "Actions\uFF08\u30A2\u30AF\u30B7\u30E7\u30F3\uFF09",
  id: "actions",
  level: 2
}, {
  value: "Chaining Interactions\uFF08\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u30C1\u30A7\u30FC\u30F3\uFF09",
  id: "chaining-interactions",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30C8\u30EA\u30AC\u306E\u767A\u751F\u6642\u306B\u5B9F\u884C\u3055\u308C\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 TouchGFX Designer\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30C8\u30EA\u30AC`), `\u3068`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\u30A2\u30AF\u30B7\u30E7\u30F3`), `\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C8\u30EA\u30AC\u306F\u3001\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u767A\u751F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\u30A2\u30AF\u30B7\u30E7\u30F3`), `\u306F\u3001\u30C8\u30EA\u30AC\u304C\u5B9F\u884C\u3055\u308C\u305F\u5F8C\u306B\u767A\u751F\u3057\u307E\u3059\u3002 \u5B9A\u7FA9\u3057\u305F\u30C8\u30EA\u30AC\u6761\u4EF6\u304C\u6E80\u305F\u3055\u308C\u305F\u6642\u70B9\u3067\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u5B9F\u884C\u3055\u308C\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5185\u5BB9\u3092\u3053\u3053\u3067\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u4EFB\u610F\u306EScreen\u307E\u305F\u306FCustom Container\u306EInteractions\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u3066\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059"+"\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/add-interaction-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306EInteractions\u30BF\u30D6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"+"\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001\u4E0B\u306E\u753B\u50CF\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 Interaction\u306E\u8A73\u7D30\u30D3\u30E5\u30FC\uFF08\u5DE6\u5074\uFF09\u306F\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306B\u4ED8\u3051\u308B\u540D\u524D\u3068\u4F7F\u7528\u53EF\u80FD\u306A\u8A2D\u5B9A\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Interaction\u306E\u30B5\u30DE\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\uFF08\u53F3\u5074\uFF09\u306B\u306F\u3001\u9078\u629E\u3055\u308C\u305F\u30C8\u30EA\u30AC\u304A\u3088\u3073\u30A2\u30AF\u30B7\u30E7\u30F3\u306B\u57FA\u3065\u3044\u3066\u4FEE\u6B63\u3055\u308C\u305F\u52D5\u7684\u306A\u8AAC\u660E\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u4E0B\u306E\u753B\u50CF\u3067\u306F\u3001\u30C8\u30EA\u30AC\u3068\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u52D5\u7684\u306A\u8AAC\u660E\u306F"When none none"\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Interaction\u306E\u30B5\u30DE\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u306B\u3042\u308B"x"\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001\u305D\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304C\u524A\u9664\u3055\u308C\u307E\u3059\uFF08\u524A\u9664\u306E\u524D\u306B\u78BA\u8A8D\u306E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u304C\u8868\u793A\u3055\u308C\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Interaction\u306E\u8A73\u7D30\u30D3\u30E5\u30FC\u306E\u5916\u5074\u306E\u4EFB\u610F\u306E\u5834\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u8A73\u7D30\u30D3\u30E5\u30FC\u304C\u6298\u308A\u305F\u305F\u307E\u308C\u307E\u3059\u3002 Interaction\u306E\u30B5\u30DE\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001Interaction\u306E\u8A73\u7D30\u30D3\u30E5\u30FC\u304C\u958B\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/empty-interaction-4.17.png",
    mdxType: "Figure"
  }, "Interactions\u30BF\u30D6\u306B\u8868\u793A\u3055\u308C\u305F\u65B0\u3057\u3044\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "triggers"
  }), `Triggers\uFF08\u30C8\u30EA\u30AC\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Trigger\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u306F\u3001\u73FE\u5728\u306EScreen\u307E\u305F\u306FCustom Container\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u57FA\u3065\u3044\u3066\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30B9\u30AF\u30EA\u30FC\u30F3\u304C\u7A7A\u306E\u5834\u5408\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Hardware button is clicked`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Screen transition begins`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Screen transition ends`), `\u3068\u3044\u30463\u3064\u306E\u30C8\u30EA\u30AC\u306E\u307F\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u305D\u308C\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u308B\u30C8\u30EA\u30AC\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `Button`), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092Screen\u307E\u305F\u306FCustom Container\u306B\u8FFD\u52A0\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Button is clicked`), `\u30C8\u30EA\u30AC\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Button is clicked`), `\u306A\u3069\u306E\u4E00\u90E8\u306E\u30C8\u30EA\u30AC\u3067\u306F\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u30C8\u30EA\u30AC\u306B\u4E00\u81F4\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C1\u3064\u3060\u3051\u306E\u5834\u5408\u306F\u3001\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u81EA\u52D5\u7684\u306B\u9078\u629E\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-4.17.png",
    mdxType: "Figure"
  }, "Button is Clicked\u306E\u30C8\u30EA\u30AC\u3092Interaction\u3067\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u30C8\u30EA\u30AC\u306E\u9078\u629E\u5F8C\u3001Interaction\u306E\u30B5\u30DE\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u306E\u52D5\u7684\u306A\u8AAC\u660E\u304C"When none none"\u304B\u3089"When button1 clicked none"\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "actions"
  }), `Actions\uFF08\u30A2\u30AF\u30B7\u30E7\u30F3\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Action\u306E\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u3082\u3001\u73FE\u5728\u306EScreen\u307E\u305F\u306FCustom Container\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u57FA\u3065\u3044\u3066\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `Screen\u304C\u7A7A\u306E\u5834\u5408\u306F\u3001\u6B21\u306E5\u3064\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u307F\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Call new virtual function`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Change screen`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Execute C++ code`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Set Language`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Wait for`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u305D\u308C\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `Button`), `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u4EE5\u4E0B\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Move widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Fade widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Hide widget`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Show widget`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Move widget`), `\u306A\u3069\u306E\u4E00\u90E8\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001Action\u306B\u4E00\u81F4\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C1\u3064\u3060\u3051\u306E\u5834\u5408\u306F\u3001\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u81EA\u52D5\u7684\u306B\u9078\u629E\u3055\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Move widget`), `\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u79FB\u52D5\u306B\u95A2\u9023\u3059\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u3082\u3055\u3089\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-move-button1-action-4.17.png",
    mdxType: "Figure"
  }, "Move widget\u30A2\u30AF\u30B7\u30E7\u30F3\u3092Interaction\u3067\u9078\u629E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u306B\u793A\u3059\u3088\u3046\u306B\u3001Action\u306E\u9078\u629E\u5F8C\u3001Interaction\u306E\u30B5\u30DE\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u306E\u52D5\u7684\u306A\u8AAC\u660E\u304C"When button1 clicked none"\u304B\u3089"When button1 clicked move button1"\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "chaining-interactions"
  }), `Chaining Interactions\uFF08\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u30C1\u30A7\u30FC\u30F3\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u5225\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5B8C\u4E86\u306B\u3088\u3063\u3066\u30C8\u30EA\u30AC\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u52D5\u4F5C\u3092\u6709\u52B9\u306B\u3059\u308B\u306B\u306F\u3001Can trigger another interaction\u3068\u3044\u3046\u30E9\u30D9\u30EB\u306E\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u30AA\u30F3\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF08\u4E0B\u306E\u753B\u50CF\u3092\u53C2\u7167\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-can-trigger-another-interaction-enabled-4.17.png",
    mdxType: "Figure"
  }, "Interaction\u3067Can trigger another interaction\u3092\u6709\u52B9\u306B\u3059\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u52D5\u4F5C\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u3053\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u5B8C\u4E86\u306B\u3088\u3063\u3066\u4ED6\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u30C8\u30EA\u30AC\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/interactions-view/interaction-triggering-on-another-interaction-4.17.png",
    mdxType: "Figure"
  }, "Interaction\u3067\u5225\u306EInteraction\u3092\u30C8\u30EA\u30AC"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);