"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5510],{

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

/***/ 84541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DocCardList; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(99492);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(35096);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"cardContainer":"cardContainer_fWXF","cardTitle":"cardTitle_rnsV","cardDescription":"cardDescription_PWke"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/index.js







function CardContainer({ href, children }) {
  return /* @__PURE__ */ react.createElement(Link/* default */.Z, {
    href,
    className: (0,clsx_m/* default */.Z)("card padding--lg", styles_module.cardContainer)
  }, children);
}
function CardLayout({ href, icon, title, description }) {
  return /* @__PURE__ */ react.createElement(CardContainer, {
    href
  }, /* @__PURE__ */ react.createElement("h2", {
    className: (0,clsx_m/* default */.Z)("text--truncate", styles_module.cardTitle),
    title
  }, icon, " ", title), description && /* @__PURE__ */ react.createElement("p", {
    className: (0,clsx_m/* default */.Z)("text--truncate", styles_module.cardDescription),
    title: description
  }, description));
}
function CardCategory({ item }) {
  const href = (0,docsUtils/* findFirstCategoryLink */.Wl)(item);
  if (!href) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(CardLayout, {
    href,
    icon: "\u{1F5C3}\uFE0F",
    title: item.label,
    description: (0,Translate/* translate */.I)({
      message: "{count} items",
      id: "theme.docs.DocCard.categoryDescription",
      description: "The default description for a category card in the generated index about how many items this category includes"
    }, { count: item.items.length })
  });
}
function CardLink({ item }) {
  var _a;
  const icon = (0,isInternalUrl/* default */.Z)(item.href) ? "\u{1F4C4}\uFE0F" : "\u{1F517}";
  const doc = (0,docsUtils/* useDocById */.xz)((_a = item.docId) != null ? _a : void 0);
  return /* @__PURE__ */ react.createElement(CardLayout, {
    href: item.href,
    icon,
    title: item.label,
    description: doc == null ? void 0 : doc.description
  });
}
function DocCard({ item }) {
  switch (item.type) {
    case "link":
      return /* @__PURE__ */ react.createElement(CardLink, {
        item
      });
    case "category":
      return /* @__PURE__ */ react.createElement(CardCategory, {
        item
      });
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js




function filterItems(items) {
  return items.filter((item) => {
    if (item.type === "category") {
      return !!(0,docsUtils/* findFirstCategoryLink */.Wl)(item);
    }
    return true;
  });
}
function DocCardList({ items, className }) {
  return /* @__PURE__ */ react.createElement("section", {
    className: (0,clsx_m/* default */.Z)("row", className)
  }, filterItems(items).map((item, index) => /* @__PURE__ */ react.createElement("article", {
    key: index,
    className: "col col--6 margin-bottom--lg"
  }, /* @__PURE__ */ react.createElement(DocCard, {
    item
  }))));
}


/***/ }),

/***/ 72478:
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
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84541);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99492);
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
  id: "touchgfx-al-development-introduction",
  title: "TouchGFX AL\uFF08\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF09\u958B\u767A\u306E\u6982\u8981"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "id": "development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "title": "TouchGFX AL\uFF08\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF09\u958B\u767A\u306E\u6982\u8981",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-al-development-introduction",
    "title": "TouchGFX AL\uFF08\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF09\u958B\u767A\u306E\u6982\u8981"
  },
  "sidebar": "docs",
  "previous": {
    "title": "11. Flash\u30ED\u30FC\u30C0",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/11-flash-loader"
  },
  "next": {
    "title": "\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3",
    "permalink": "/4.20/ja/docs/development/touchgfx-hal-development/touchgfx-architecture"
  }
};
const assets = {};



const toc = [{
  value: "\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u5F79\u5272",
  id: "responsibilities-of-the-abstraction-layer",
  level: 2
}, {
  value: "\u8A2D\u5B9A\u4F8B: 2\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1 - LTDC\u4ED8\u304D\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9",
  id: "example-setup-two-framebuffers---mcu-with-ltdc",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/activities-selected-002.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u696D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306ETouchGFX\u62BD\u8C61\u5316\u30EC\u30A4\u30E4(AL) \u306F\u3001\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u30D5\u30A7\u30FC\u30BA\u3067\u958B\u767A\u3055\u308C\u308B\u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3068TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u9593\u306B\u5B58\u5728\u3059\u308B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u3059\u3002 \u4E3B\u306A\u30BF\u30B9\u30AF\u306F\u3001\u30A8\u30F3\u30B8\u30F3\u3068\u57FA\u76E4\u3068\u306A\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u304A\u3088\u3073\u30AA\u30DA\u30EC\u30FC\u30B7\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u3092\u3064\u306A\u304E\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u3059\u3002 \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u57FA\u76E4\u3068\u306A\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3068OS\u306E\u8A73\u7D30\u4ED5\u69D8\u3092\u62BD\u8C61\u5316\u3057\u3001\u30A8\u30F3\u30B8\u30F3\u304C\u7D71\u4E00\u3055\u308C\u305F\u65B9\u6CD5\u3067\u51E6\u7406\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AL(\u62BD\u8C61\u5316\u30EC\u30A4\u30E4) \u306F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u62BD\u8C61\u5316\u30EC\u30A4\u30E4(HAL) \u3068\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u62BD\u8C61\u5316\u30EC\u30A4\u30E4(OSAL) \u3068\u3044\u30462\u3064\u306E\u7570\u306A\u308B\u90E8\u5206\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/components-selected-002.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u539F\u7406\u3084\u5F79\u5272\u3068\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u3068\u3084\u308A\u53D6\u308A\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u6982\u7565\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002 \u7279\u5B9A\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u5BFE\u3057\u3066\u3053\u308C\u3092\u5B9F\u73FE\u3059\u308B\u65B9\u6CD5\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u4EE5\u964D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    items: (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */ .jA)().items,
    mdxType: "DocCardList"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "responsibilities-of-the-abstraction-layer"
  }), `\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u5F79\u5272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u300C\u57FA\u672C\u6982\u5FF5\u300D\u306E\u7AE0\u306E\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../basic-concepts/rendering"
  }), `\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u8AAC\u660E\u3057\u305F\u3088\u3046\u306B\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306B\u306F\u3001\u4EE5\u4E0B\u306E3\u3064\u306E\u57FA\u672C\u30B9\u30C6\u30C3\u30D7\u3092\u5B9F\u884C\u3059\u308B\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5165\u529B\u306E\u53CE\u96C6(\u30BF\u30C3\u30C1\u5EA7\u6A19\u3001\u30DC\u30BF\u30F3)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30B7\u30FC\u30F3\uFF65\u30E2\u30C7\u30EB\u306E\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u30B7\u30FC\u30F3\uFF65\u30E2\u30C7\u30EB\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E3\u3064\u306E\u30B9\u30C6\u30C3\u30D7\u306B\u3088\u3063\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u73FE\u5728\u306E\u72B6\u614B\u3092\u53CD\u6620\u3059\u308B\u3088\u3046\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u66F4\u65B0\u3059\u308B\u3068\u3044\u3046TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u4E3B\u306A\u5F79\u5272\u304C\u679C\u305F\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30C7\u30FC\u30BF\u306E\u5B9F\u969B\u306E\u8EE2\u9001\u3084\u5916\u90E8\u5165\u529B\u306E\u53CE\u96C6\u306F\u3001\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u76F4\u63A5\u51E6\u7406\u3055\u308C\u308B\u308F\u3051\u3067\u306F\u306A\u304F\u3001\u30A8\u30F3\u30B8\u30F3\u304B\u3089TouchGFX AL\u306B\u59D4\u8B72\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u7E70\u308A\u8FD4\u3057\u66F4\u65B0\u3057\u307E\u3059\u3002 \u3059\u3079\u3066\u306E\u30D5\u30EC\u30FC\u30E0\u304C\u8EE2\u9001\u3055\u308C\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001\u3053\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5B9F\u969B\u306E\u66F4\u65B0\u983B\u5EA6\u304A\u3088\u3073\u30EC\u30C7\u30A3\u72B6\u614B\u3068\u540C\u671F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u540C\u671F\u304C\u884C\u308F\u308C\u306A\u3044\u5834\u5408\u3001\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306F\u66F4\u65B0\u3092\u7E70\u308A\u8FD4\u3059\u306E\u3067\u3001\u8EE2\u9001\u3055\u308C\u308B\u524D\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u4E0A\u66F8\u304D\u3055\u308C\u3066\u3057\u307E\u3046\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u540C\u671F\u3092\u884C\u3046\u306E\u306FAL\u306E\u5F79\u5272\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX AL\u306F\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA\u9818\u57DF\u3068\u305D\u306E\u30E1\u30E2\u30EA\u9818\u57DF\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u5236\u5FA1\u3059\u308B\u5F79\u5272\u3082\u62C5\u3063\u3066\u3044\u307E\u3059\u3002 \u3064\u307E\u308A\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u3059\u3079\u3066\u306E\u30A2\u30AF\u30BB\u30B9\u306FAL\u3092\u4ECB\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX AL\u306E\u5F79\u5272\u3092\u8A73\u3057\u304F\u8AAC\u660E\u3059\u308B\u3068\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F79\u5272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u8EE2\u9001\u306E\u540C\u671F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u304C\u8A08\u7B97\u3055\u308C\u3001\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u305F\u6642\u70B9\u3067\u3001\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u505C\u6B62\u3057\u3066\u3001\u65B0\u305F\u306B\u30A2\u30BB\u30F3\u30D6\u30EB\u3055\u308C\u305F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3055\u308C\u308B\u524D\u306B\u4E0A\u66F8\u304D\u3055\u308C\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30BF\u30C3\u30C1\u304A\u3088\u3073\u7269\u7406\u30DC\u30BF\u30F3\u306E\u30A4\u30D9\u30F3\u30C8\u306E\u30EC\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30BF\u30C3\u30C1\uFF65\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3057\u305F\u304B\u3069\u3046\u304B\u3068\u3001\u305D\u306E\u5EA7\u6A19\u3092\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3057\u307E\u3059\u3002 \u7269\u7406\u30DC\u30BF\u30F3\u3084\u305D\u308C\u306B\u985E\u4F3C\u3059\u308B\u3082\u306E\u304C\u30A2\u30AF\u30C6\u30A3\u30D6\u5316\u3055\u308C\u305F\u304B\u3069\u3046\u304B\u3092\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u30A8\u30F3\u30B8\u30F3\u306B\u30EC\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u305D\u306E\u4ED6\u306E\u5916\u90E8\u30A4\u30D9\u30F3\u30C8\u306F\u3001\u5225\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u901A\u3057\u3066TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4F1D\u64AD\u3055\u308C\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "../ui-development/touchgfx-engine-features/backend-communication"
  }), `\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u901A\u4FE1\u306B\u95A2\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306E\u540C\u671F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E1\u30E2\u30EA\u306FTouchGFX AL\u306E\u62C5\u5F53\u7BC4\u56F2\u3067\u3042\u308A\u3001\u3053\u3053\u306B\u306F\u3055\u307E\u3056\u307E\u306A\u30A2\u30AF\u30BF\u30FC(\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\uFF65\u30B9\u30EC\u30C3\u30C9\u3084DMA\u306A\u3069) \u304C\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u306E\u3067\u3001TouchGFX AL\u306F\u3053\u306E\u30E1\u30E2\u30EA\u3092\u4FDD\u8B77\u3059\u308B\u65B9\u6CD5\u3092\u63D0\u4F9B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B21\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u9818\u57DF\u306E\u30EC\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AL\u306F\u3001\u6B21\u306B\u66F4\u65B0\u53EF\u80FD\u306A\u306E\u306F\u73FE\u5728\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u3069\u306E\u90E8\u5206\u306A\u306E\u304B\u3092\u56DE\u7B54\u3067\u304D\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u6A19\u6E96\u306E2\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u8A2D\u5B9A\u3067\u306F\u3001\u5E38\u306B1\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5168\u4F53\u304C\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u5C02\u7528\u306B\u306A\u308A\u3001\u3082\u30461\u3064\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u8EE2\u9001\u7528\u306B\u306A\u308B\u305F\u3081\u3001\u3053\u308C\u306F\u5E38\u306B\u5B8C\u5168\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u306A\u308A\u307E\u3059\u3002 1\u3064\u307E\u305F\u306F\u90E8\u5206\u7684\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u8A2D\u5B9A\u3067\u306F\u3001\u3082\u3063\u3068\u8907\u96D1\u306B\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u64CD\u4F5C\u306E\u5B9F\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30B7\u30FC\u30F3\uFF65\u30E2\u30C7\u30EB\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u6642\u306B\u3001\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u306FAL\u306B\u90E8\u5206\u7684\u306A\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3092\u884C\u3046\u3088\u3046\u306B\u8981\u6C42\u3057\u307E\u3059\u3002 \u7279\u5B9A\u306ETouchGFX AL\u5B9F\u88C5\u3067\u306F\u3001\u57FA\u76E4\u3068\u306A\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u5229\u7528\u3057\u3066\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3092\u884C\u3044\u307E\u3059\u3002 \u4E00\u4F8B\u3068\u3057\u3066\u306F\u3001Chrom-ART\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u306B\u3088\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u4E0A\u3067\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002 TouchGFX\u306B\u306F\u3001\u3059\u3079\u3066\u306E\u4F7F\u7528\u53EF\u80FD\u306A\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u5BFE\u3057\u3066\u6700\u9069\u5316\u3055\u308C\u305F\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u624B\u6CD5\u304C\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u306E\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3078\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8EE2\u9001\u51E6\u7406`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A8\u30F3\u30B8\u30F3\u306FAL\u306B\u3001\u8EE2\u9001\u306E\u5FC5\u8981\u304C\u3042\u308B\u306E\u306F\u3069\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u3069\u306E\u90E8\u5206\u306A\u306E\u304B\u3092\u901A\u77E5\u3057\u307E\u3059\u3002 AL\u306F\u3053\u306E\u8EE2\u9001\u3092\u958B\u59CB\u3057\u3066\u3001\u6700\u7D42\u7684\u306B\u306F\u30D4\u30AF\u30BB\u30EB\u3092\u7269\u7406\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306B\u8868\u793A\u3055\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX AL\u306F\u30D1\u30C3\u30B7\u30D6\u306A\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30E2\u30B8\u30E5\u30FC\u30EB\u3067\u3001\u72EC\u81EA\u306E\u30B9\u30EC\u30C3\u30C9\u3084\u305D\u308C\u306B\u985E\u4F3C\u3059\u308B\u3082\u306E\u3092\u6301\u305F\u306A\u3044\u305F\u3081\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u306E\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u305F\u7279\u5B9A\u306E\u30D5\u30C3\u30AF(\u6A5F\u80FD) \u307E\u305F\u306F\u5272\u8FBC\u307F\u3092\u4ECB\u3057\u3066\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u53EF\u80FD\u306A\u4E00\u9023\u306E\u30D5\u30C3\u30AF\u3068\u5272\u8FBC\u307F\u3092\u4EE5\u4E0B\u306E\u56F3\u306B\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30C3\u30AF\u3068\u5272\u8FBC\u307F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u57FA\u76E4\u3068\u306A\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u304A\u3088\u3073\u30AA\u30DA\u30EC\u30FC\u30B7\u30F3\u30B0\uFF65\u30B7\u30B9\u30C6\u30E0\u304C\u4E0E\u3048\u3089\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u3001AL\u306E\u5F79\u5272\u304C\u679C\u305F\u3055\u308C\u308B\u3088\u3046\u306B\u3053\u308C\u3089\u306E\u30D5\u30C3\u30AF\u3092\u5B9F\u88C5\u3059\u308B\u304B\u3069\u3046\u304B\u306F\u3001AL\u958B\u767A\u8005\u306E\u5224\u65AD\u306B\u59D4\u306D\u3089\u308C\u307E\u3059\u3002 \u5F79\u5272\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306BAL\u958B\u767A\u8005\u304C\u4ED6\u306E\u624B\u6BB5\u3092\u5FC5\u8981\u3068\u3059\u308B\u5834\u5408\u3001\u958B\u767A\u8005\u306F\u7279\u5B9A\u306E\u30DD\u30A4\u30F3\u30C8\u3067\u30A2\u30AF\u30C6\u30A3\u30D6\u5316\u3059\u308B\u3088\u3046\u306B\u5272\u8FBC\u307F\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3068\u3057\u3066\u306F\u3001LTDC\u5782\u76F4\u540C\u671F\u5272\u8FBC\u307F\u3084\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30BF\u30A4\u30DE\u304C\u6319\u3052\u3089\u308C\u307E\u3059\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30EC\u30C7\u30A3`), `\u5272\u8FBC\u307F\u306F\u3001\u5782\u76F4\u540C\u671F\u5272\u8FBC\u307F\u306E\u4F8B\u3067\u3059\u3002 \u3053\u308C\u3089\u306E\u5272\u8FBC\u307F\u306E\u8A2D\u5B9A\u306F\u3001AL\u958B\u767A\u306E\u4E00\u90E8\u3068\u898B\u306A\u3055\u308C\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example-setup-two-framebuffers---mcu-with-ltdc"
  }), `\u8A2D\u5B9A\u4F8B: 2\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1 - LTDC\u4ED8\u304D\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u7684\u306A\u8A2D\u5B9A\u306E\u4E00\u3064\u306F\u30012\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068LTDC\u4ED8\u304D\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u3088\u308B\u3082\u306E\u3067\u3059\u3002 \u5404\u30D5\u30C3\u30AF\u306EAL\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u3053\u306E\u8A2D\u5B9A\u3067\u306F\u4E3B\u306B\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC VSYNC\u5272\u8FBC\u307F\u306B\u53CD\u5FDC\u3059\u308B\u3088\u3046\u306BAL\u3092\u8A2D\u5B9A\u3057\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u65B0\u3057\u3044\u30D5\u30EC\u30FC\u30E0\u3092\u53D7\u4FE1\u3059\u308B\u6E96\u5099\u304C\u3067\u304D\u308B\u305F\u3073\u306BI1\u304C\u5B9F\u884C\u3055\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002 \u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3068\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u540C\u671F\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30C3\u30AF\u3068\u5272\u8FBC\u307F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A2\u30AF\u30B7\u30E7\u30F3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `I1: \u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30EC\u30C7\u30A3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u3053\u308C\u3092\u30C8\u30EA\u30AC\u3059\u308B\u306B\u306F\u3001LTDC VSYNC\u5272\u8FBC\u307F\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u30D6\u30ED\u30C3\u30AF\u89E3\u9664\u3057\u3001\u524D\u306E\u30D5\u30EC\u30FC\u30E0\u3067\u6E96\u5099\u3055\u308C\u305F\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u8EE2\u9001\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H1: \u30BF\u30C3\u30C1\u304A\u3088\u3073\u7269\u7406\u30DC\u30BF\u30F3\u306E\u30A4\u30D9\u30F3\u30C8\u306E\u30EC\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30BF\u30C3\u30C1\uFF65\u30A4\u30D9\u30F3\u30C8\u307E\u305F\u306F\u7269\u7406\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H2: \u6B21\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u9818\u57DF\u306E\u53D6\u5F97`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C0\u30D6\u30EB\uFF65\u30D0\u30C3\u30D5\u30A1\u8A2D\u5B9A\u3092\u4F7F\u7528\u3057\u3066\u3001\u5358\u306B\u3001\u73FE\u5728\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8EE2\u9001\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u5168\u9818\u57DF\u3092\u8FD4\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H3: \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u64CD\u4F5C\u306E\u5B9F\u884C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u6A5F\u80FD\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 \u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u652F\u63F4\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u64CD\u4F5C\u3068\u305D\u308C\u4EE5\u5916\u306B\u5BFE\u3059\u308B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30D5\u30A9\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H4: \u9818\u57DF\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u5B8C\u4E86`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30A2\u30AF\u30B7\u30E7\u30F3\u306A\u3057`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H5: \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u7D42\u4E86`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30E1\u30A4\u30F3\uFF65\u30EB\u30FC\u30D7\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u8A2D\u5B9A\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5B9F\u884C\u30D5\u30ED\u30FC\u3068\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/al-introduction/al-actions-00.png",
    noShadow: true,
    mdxType: "Figure"
  }, "2\u3064\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3068LTDC\u4ED8\u304D\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u3088\u308B\u8A2D\u5B9A\u306E\u5B9F\u884C\u30D5\u30ED\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u308C\u306F\u3001\u3053\u306E\u8A2D\u5B9A\u306EAL\u306E\u5168\u4F53\u8A2D\u8A08\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002 \u4EE5\u964D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u5B9F\u88C5\u65B9\u6CD5\u306B\u8A73\u3057\u304F\u8E0F\u307F\u8FBC\u3093\u3067\u8AAC\u660E\u3057\u307E\u3059\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);