"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4173],{

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

/***/ 79665:
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
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84541);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99492);
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
  id: "board-introduction",
  title: "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306E\u6982\u8981"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/board-introduction",
  "id": "development/board-bring-up/board-introduction",
  "title": "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306E\u6982\u8981",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/board-introduction.mdx",
  "sourceDirName": "development/board-bring-up",
  "slug": "/development/board-bring-up/board-introduction",
  "permalink": "/4.20/ja/docs/development/board-bring-up/board-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "board-introduction",
    "title": "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306E\u6982\u8981"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5916\u90E8\u30E1\u30E2\u30EA",
    "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"
  },
  "next": {
    "title": "1. \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210",
    "permalink": "/4.20/ja/docs/development/board-bring-up/how-to/01-create-project"
  }
};
const assets = {};




const toc = [{
  value: "\u4F5C\u696D\u7528\u30C4\u30FC\u30EB",
  id: "tools-of-the-trade",
  level: 2
}, {
  value: "\u6A5F\u80FD\u306E\u691C\u8A3C",
  id: "verification-of-functionality",
  level: 2
}, {
  value: "\u5168\u4F53\u306E\u30D7\u30ED\u30BB\u30B9",
  id: "overall-process",
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
    imageSource: "/img/development/board-bring-up/activities-selected-001.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u696D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u7AE0\u3067\u306F\u3001\u65B0\u3057\u3044\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067TouchGFX\u306E\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3092\u958B\u59CB\u3059\u308B\u3001\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u30D5\u30A7\u30FC\u30BA\u306B\u3064\u3044\u3066\u89E3\u8AAC\u3057\u307E\u3059\u3002 \u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u3068\u306F\u3001\u30DC\u30FC\u30C9\u306E\u5FC5\u8981\u90E8\u54C1\u3059\u3079\u3066\u3068\u5BFE\u5FDC\u3059\u308B\u30C9\u30E9\u30A4\u30D0\u304C\u6B63\u5E38\u306B\u6A5F\u80FD\u3059\u308B\u3053\u3068\u3092\u3001TouchGFX\u306E\u5C0E\u5165\u524D\u306B\u78BA\u8A8D\u3059\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u3068\u3082\u306B\u6B63\u5E38\u306B\u6A5F\u80FD\u3059\u308B\u30DC\u30FC\u30C9\u304C\u3059\u3067\u306B\u3042\u308B\u5834\u5408\u3001\u3053\u306E\u30D5\u30A7\u30FC\u30BA\u306E\u4F5C\u696D\u306E\u591A\u304F\u306F\u7C21\u5358\u3067\u3059\u3002 \u5B8C\u5168\u306B\u65B0\u898F\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30DC\u30FC\u30C9\u306E\u5834\u5408\u306F\u3001\u3053\u306E\u30D5\u30A7\u30FC\u30BA\u3092\u5B8C\u4E86\u3059\u308B\u306B\u306F\u6570\u65E5\u3092\u8981\u3059\u308B\u3053\u3068\u304C\u4E88\u60F3\u3055\u308C\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u4E0D\u5B89\u5B9A\u3067\u306F\u3001\u512A\u308C\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u304C\u56F0\u96E3\u306B\u306A\u308B\u305F\u3081\u3001\u901A\u5E38\u3001\u3053\u306E\u4F5C\u696D\u306F\u52B9\u679C\u3092\u3082\u305F\u3089\u3057\u307E\u3059\u3002 \u9006\u306B\u3001\u5B89\u5B9A\u3057\u3066\u5B9F\u7E3E\u306E\u3042\u308B\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u304C\u3042\u308C\u3070\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F5C\u6210\u306B\u96C6\u4E2D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u7AE0\u306F\u3001\u30DC\u30FC\u30C9\u4E0A\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u304A\u3088\u3073\u4F4E\u30EC\u30D9\u30EB\uFF65\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u671F\u5F85\u901A\u308A\u306B\u52D5\u4F5C\u3059\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u30BF\u30B9\u30AF\u3092\u62C5\u5F53\u3059\u308B\u958B\u767A\u8005\u5411\u3051\u3067\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u969B\u306EUI\u958B\u767A\u306E\u307F\u306B\u643A\u308F\u308B\u958B\u767A\u8005\u306F\u5BFE\u8C61\u3068\u3057\u3066\u3044\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u6642\u306B\u306F\u3001\u30DC\u30FC\u30C9\u4E0A\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3001\u305D\u308C\u3089\u3059\u3079\u3066\u306E\u9593\u306E\u63A5\u7D9A\u3001\u305D\u308C\u3089\u306E\u901A\u4FE1\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D7\u30ED\u30C8\u30B3\u30EB\u3068\u305D\u308C\u305E\u308C\u3067\u4F7F\u7528\u3067\u304D\u308B / \u5FC5\u8981\u3068\u306A\u308B\u30C9\u30E9\u30A4\u30D0\uFF65\u30B3\u30FC\u30C9\u306B\u3064\u3044\u3066\u3001\u6DF1\u304F\u7406\u89E3\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    items: (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentSidebarCategory */ .jA)().items,
    mdxType: "DocCardList"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u7AE0\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `TouchGFX AL\uFF08\u62BD\u8C61\u5316\u30A2\u30D6\u30B9\u30C8\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30EC\u30A4\u30E4\uFF09\u958B\u767A`), `\u300D\u3067\u306F\u3001\u4F7F\u7528\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u304A\u3088\u3073\u30C9\u30E9\u30A4\u30D0\u4E0A\u3067\u306ETouchGFX\u306E\u52D5\u4F5C\u3092\u53EF\u80FD\u306B\u3059\u308B\u305F\u3081\u306E\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u4F5C\u6210\u65B9\u6CD5\u306B\u3064\u3044\u3066\u89E3\u8AAC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tools-of-the-trade"
  }), `\u4F5C\u696D\u7528\u30C4\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u8868\u306F\u3001STM32\u30D9\u30FC\u30B9\u306E\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u306B\u4F7F\u7528\u3059\u308B\u91CD\u8981\u306A\u30C4\u30FC\u30EB\u306E\u4E00\u90E8\u3092\u793A\u3057\u305F\u3082\u306E\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C4\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `STM32CubeMX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A2D\u5B9A\u3068\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304A\u3088\u3073\u5185\u90E8\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306E\u521D\u671F\u5316\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u306E\u751F\u6210\u306E\u305F\u3081\u306E\u4F7F\u3044\u3084\u3059\u3044\u30C4\u30FC\u30EB\u3067\u3059`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u7528\u3059\u308B\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30D5\u30A1\u30DF\u30EA\u5411\u3051\u306ESTM32Cube\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u306B\u306F\u3001\u5404\u7A2E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306E\u4F7F\u7528\u6CD5\u304C\u308F\u304B\u308B\u591A\u6570\u306E\u30B5\u30F3\u30D7\u30EB\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304A\u3088\u3073\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D9\u30F3\u30C0\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3084Flash\u306A\u3069\u306E\u5916\u90E8\u30C7\u30D0\u30A4\u30B9\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u306B\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9(\u4F8B: STM32CubeMX\u306B\u3088\u308B)\u3068\u5916\u90E8\u30C7\u30D0\u30A4\u30B9\u3092\u9069\u5207\u306B\u521D\u671F\u5316\u3059\u308B\u305F\u3081\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\u3084\u96FB\u5727\u306A\u3069\u3001\u91CD\u8981\u306A\u60C5\u5831\u304C\u8A18\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D9\u30F3\u30C0\u306E\u30C9\u30E9\u30A4\u30D0\uFF65\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6642\u9593\u3092\u7BC0\u7D04\u3059\u308B\u305F\u3081\u3001\u5916\u90E8\u30C7\u30D0\u30A4\u30B9\u306E\u30B5\u30F3\u30D7\u30EB\uFF65\u30B3\u30FC\u30C9\u3092\u30D9\u30F3\u30C0\u306B\u8981\u6C42\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30C9\u30E9\u30A4\u30D0\uFF65\u30B3\u30FC\u30C9\u306F\u3001\u591A\u304F\u306E\u5834\u5408\u3001STM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3078\u306E\u79FB\u690D\u304C\u5FC5\u8981\u3067\u3059\u304C\u3001\u3053\u306E\u65B9\u304C\u30BC\u30ED\u304B\u3089\u4F5C\u6210\u3059\u308B\u3088\u308A\u3082\u7C21\u5358\u306B\u306A\u308B\u3053\u3068\u3082\u3088\u304F\u3042\u308A\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u30D5\u30A7\u30FC\u30BA\u3067\u5B9F\u65BD\u3059\u308B\u4F5C\u696D\u306F\u3001\u3044\u305A\u308C\u3082TouchGFX\u304B\u3089\u306F\u72EC\u7ACB\u3057\u3066\u3044\u308B\u305F\u3081\u3001TouchGFX\u306E\u30B3\u30FC\u30C9\u306F\u542B\u3081\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 \u3053\u3053\u3067\u306E\u4F5C\u696D\u304A\u3088\u3073\u5F97\u3089\u308C\u308B\u30B3\u30FC\u30C9\u306F\u3001TouchGFX\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u958B\u767A\u306E\u78BA\u56FA\u3068\u3057\u305F\u57FA\u76E4\u3068\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7B2C\u4E00\u306E\u76EE\u6A19\u306F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3068\u4F4E\u30EC\u30D9\u30EB\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u304C\u6700\u7D42\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3059\u308B\u671F\u5F85\u901A\u308A\u306B\u5B9F\u969B\u306B\u52D5\u4F5C\u3059\u308B\u3053\u3068\u306E\u78BA\u8A8D\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "verification-of-functionality"
  }), `\u6A5F\u80FD\u306E\u691C\u8A3C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u306B\u304A\u3044\u3066\u30011\u3064\u4EE5\u4E0A\u306E\u30C6\u30B9\u30C8\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3068\u3044\u3046\u5F62\u3067\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306B\u306F2\u3064\u306E\u76EE\u7684\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u62BD\u8C61\u5316\u30EC\u30A4\u30E4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9\u306F\u3001TouchGFX AL\u3001\u304A\u3088\u3073\u6700\u7D42\u7684\u306B\u6A5F\u80FD\u3059\u308BUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u7BC9\u306E\u305F\u3081\u306E\u57FA\u76E4\u3068\u306A\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30C6\u30B9\u30C8\uFF65\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3068\u3068\u3082\u306B\u4F5C\u6210\u3055\u308C\u308B\u691C\u8A3C\u30B3\u30FC\u30C9\u306F\u3001\u671F\u5F85\u901A\u308A\u306E\u52D5\u4F5C\u304C\u5F97\u3089\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u306E\u6700\u5F8C\u306E\u3088\u308A\u3069\u3053\u308D\u306B\u306A\u308A\u307E\u3059\u3002 \u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u30D5\u30A7\u30FC\u30BA\u3067\u306F\u3001\u30DC\u30FC\u30C9\u3068\u5404\u7279\u5B9A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u671F\u5F85\u901A\u308A\u52D5\u4F5C\u3059\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u3001\u5C0F\u3055\u306A\u691C\u8A3C\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u591A\u6570\u4F5C\u6210\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u691C\u8A3C\u30D7\u30ED\u30B0\u30E9\u30E0\u306F\u3001\u958B\u767A\u3092\u9032\u3081\u308B\u4E0A\u3067\u6975\u3081\u3066\u8CB4\u91CD\u306A\u3082\u306E\u3068\u306A\u308A\u3001\u4F55\u3089\u304B\u306E\u4E0D\u78BA\u304B\u306A\u6319\u52D5\u304C\u898B\u3089\u308C\u305F\u3068\u304D\u306B\u518D\u5229\u7528\u3057\u305F\u308A\u3001\u5F37\u5316\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0A\u8A18\u306E2\u3064\u306E\u7406\u7531\u304B\u3089\u3001\u691C\u8A3C\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u4F53\u7CFB\u7684\u306B\u4FDD\u5B58\u3057\u3066\u304A\u304F\u3053\u3068\u306F\u6975\u3081\u3066\u6709\u52B9\u3067\u3059\u3002 \u3053\u308C\u306B\u3088\u3063\u3066\u3001\u5F8C\u3067\u3001\u30C6\u30B9\u30C8\uFF65\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u518D\u5229\u7528\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u65B0\u3057\u3044\u30EA\u30D3\u30B8\u30E7\u30F3\u3092\u30C6\u30B9\u30C8\u3059\u308B\u5834\u5408\u3084\u3001\u3088\u308A\u5927\u898F\u6A21\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u4E88\u671F\u305B\u306C\u969C\u5BB3\u304C\u767A\u751F\u3057\u305F\u3068\u304D\u306B\u6839\u672C\u539F\u56E0\u3092\u7A76\u660E\u3059\u308B\u5834\u5408\u306A\u3069\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002 \u307E\u305F\u3001\u958B\u767A\u4E2D\u306B\u5F97\u3089\u308C\u305F\u6E2C\u5B9A\u5024\uFF08\u305F\u3068\u3048\u3070\u30E1\u30E2\u30EA\u5E2F\u57DF\u5E45\uFF09\u3092\u3001\u7CFB\u7D71\u7684\u306B\u30E1\u30E2\u3057\u3066\u304A\u304F\u3053\u3068\u3082\u63A8\u5968\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/components-selected-001.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX AL\u306E\u57FA\u76E4\u3068\u306A\u308B\u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "overall-process"
  }), `\u5168\u4F53\u306E\u30D7\u30ED\u30BB\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E6\u30FC\u30B6\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u5177\u4F53\u7684\u306A\u69CB\u6210\u304C\u4E0D\u660E\u3067\u3042\u308B\u305F\u3081\u3001\u4EE5\u4E0B\u306E\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "how-to/01-create-project"
  }), `\u7ACB\u3061\u4E0A\u3052\u65B9\u6CD5`), `\u300D\u30AC\u30A4\u30C9\u3067\u306F\u3001TouchGFX\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306E\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u3068\u6E96\u5099\u306B\u5FC5\u8981\u306A\u4E00\u822C\u7684\u306A\u30B9\u30C6\u30C3\u30D7\u3092\u3001\u6BB5\u968E\u3092\u8FFD\u3063\u3066\u793A\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AC\u30A4\u30C9\u306E\u5404\u30B9\u30C6\u30C3\u30D7\u304C\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3084\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u7279\u5B9A\u306E1\u7B87\u6240\u306E\u7ACB\u3061\u4E0A\u3052\u65B9\u6CD5\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002 \u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u90E8\u5206\u306E\u4E00\u4F8B\u304C\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3067\u3059\u3002 \u5168\u4F53\u7684\u306A\u76EE\u6A19\u306F\u3001\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3092\u64CD\u4F5C\u3057\u3066\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306E\u4EFB\u610F\u306E\u30BF\u30C3\u30C1\u3067\u60C5\u5831\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u9001\u4FE1\u3059\u308B\u5177\u4F53\u7684\u306A\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3067\u4F7F\u7528\u3057\u3066\u3044\u308B\u7279\u5B9A\u306E\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306B\u3088\u3063\u3066\u6C7A\u307E\u308B\u305F\u3081\u3001\u3053\u306E\u30AC\u30A4\u30C9\u3067\u306F\u305D\u306E\u3059\u3079\u3066\u306E\u65B9\u6CD5\u3092\u793A\u3059\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u672C\u30AC\u30A4\u30C9\u306E\u60C5\u5831\u3068\u3001\u4F7F\u7528\u3059\u308B\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8\u306E\u60C5\u5831\u3092\u7D44\u307F\u5408\u308F\u305B\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30AB\u30B9\u30BF\u30E0\uFF65\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052\u306E\u305F\u3081\u306B\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u30D0\u30A4\u30B9\u30C6\u30C3\u30D7\u30AC\u30A4\u30C9\u3092\u8AAD\u307F\u3001\u5B9F\u884C\u3059\u308B\u969B\u306F\u3001\u4EE5\u4E0B\u3092\u63A8\u5968\u3057\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u4E00\u5EA6\u306B1\u30B9\u30C6\u30C3\u30D7\u305A\u3064\u5B9F\u884C\u3059\u308B\u3053\u3068"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u6B21\u306B\u9032\u3080\u524D\u306B\u5404\u30B9\u30C6\u30C3\u30D7\u3092\u5FB9\u5E95\u7684\u306B\u691C\u8A3C\u3059\u308B\u3053\u3068"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u610F\u56F3\u3059\u308B\u52D5\u4F5C\u304C\u5F97\u3089\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30AC\u30A4\u30C9\u3092\u30C7\u30D0\u30C3\u30B0\u306E\u624B\u6BB5\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u304B\u3001\u524D\u306E\u30B9\u30C6\u30C3\u30D7\u306B\u623B\u3063\u3066\u30DF\u30B9\u304C\u306A\u3044\u304B\u3092\u78BA\u8A8D\u3059\u308B\u3053\u3068"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u4E88\u60F3\u5916\u306E\u6319\u52D5\u3092\u793A\u3057\u3066\u3082\u614C\u3066\u306A\u3044\u3053\u3068 - \u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u306F\u305D\u308C\u307B\u3069\u7C21\u5358\u306A\u30BF\u30B9\u30AF\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30AC\u30A4\u30C9\u306E\u5404\u30B9\u30C6\u30C3\u30D7\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u76EE\u7684`), `: \u3053\u306E\u30D1\u30FC\u30C8\u3067\u306F\u3001\u30B9\u30C6\u30C3\u30D7\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3067TouchGFX\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306E\u6E96\u5099\u3068\u3057\u3066\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u304C\u91CD\u8981\u3067\u3042\u308B\u7406\u7531\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u76EE\u6A19`), `: \u3053\u306E\u30D1\u30FC\u30C8\u3067\u306F\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u76EE\u6A19\u306E\u4E00\u89A7\u3092\u793A\u3057\u307E\u3059\u3002 \u691C\u8A3C\u30DD\u30A4\u30F3\u30C8\u306E\u4E00\u89A7\u3067\u306F\u3001\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5177\u4F53\u7684\u306A\u30C6\u30B9\u30C8\u306B\u3064\u3044\u3066\u8A73\u8FF0\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u691C\u8A3C\u30DD\u30A4\u30F3\u30C8\u306B\u3088\u308A\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3067TouchGFX\u3092\u9069\u5207\u306B\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u8981\u4EF6\u3092\u3001\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u304C\u5B9F\u65BD\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u524D\u63D0\u6761\u4EF6`), `: \u3053\u3053\u306B\u306F\u3001\u30BF\u30B9\u30AF\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u9805\u76EE\u304C\u5217\u6319\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u4F5C\u696D\u5185\u5BB9`), `: \u3053\u306E\u30D1\u30FC\u30C8\u3067\u306F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u8A2D\u5B9A\u3068\u4F7F\u7528\u306B\u5FC5\u8981\u306A\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u4F5C\u6210\u65B9\u6CD5\u3092\u3001\u53EF\u80FD\u306A\u9650\u308A\u5177\u4F53\u7684\u306B\u8AAC\u660E\u3057\u307E\u3059\u3002 \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306F\u3001\u4F7F\u7528\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u5927\u304D\u304F\u4F9D\u5B58\u3059\u308B\u305F\u3081\u3001\u305D\u308C\u307B\u3069\u53B3\u5BC6\u306B\u306F\u8AAC\u660E\u3067\u304D\u306A\u3044\u30B9\u30C6\u30C3\u30D7\u3082\u3042\u308A\u307E\u3059\u3002 \u305D\u306E\u3088\u3046\u306A\u5834\u5408\u306F\u3001\u3088\u308A\u304A\u304A\u307E\u304B\u306B\u30B9\u30C6\u30C3\u30D7\u3092\u8A18\u8F09\u3057\u3066\u3044\u308B\u306E\u3067\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u95A2\u9023\u3059\u308B\u8A73\u7D30\u60C5\u5831\u306F\u30E6\u30FC\u30B6\u304C\u81EA\u3089\u53CE\u96C6\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u500B\u3005\u306E\u30CF\u30A6\u30C4\u30FC\uFF65\u30B9\u30C6\u30C3\u30D7\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30B9\u30C6\u30C3\u30D7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u5BB9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/01-create-project"
  }), `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u4F5C\u6210`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\u306B\u7A7A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/02-cpu-running"
  }), `CPU\u52D5\u4F5C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304C\u76EE\u7684\u306E\u30B9\u30D4\u30FC\u30C9\u3067\u52D5\u4F5C\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/03-display-internal"
  }), `\u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5185\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5272\u308A\u5F53\u3066\u3001\u3053\u308C\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u9001\u4FE1\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/04-enable-external-ram"
  }), `\u5916\u90E8RAM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8RAM\u3092\u6709\u52B9\u5316\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/05-display-external"
  }), `\u5916\u90E8RAM\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u914D\u7F6E\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u3092\u5916\u90E8RAM\u306B\u79FB\u52D5\u3057\u3066\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u9001\u4FE1\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/06-flash-external-addressable"
  }), `\u5916\u90E8Flash\uFF08\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8\u306E\u30E1\u30E2\u30EA\u30DE\u30C3\u30D7\u30C9Flash\u3092\u6709\u52B9\u5316\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/07-flash-external-nonaddressable"
  }), `\u5916\u90E8Flash\uFF08\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9\uFF65\u30E2\u30FC\u30C9\uFF09`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8\u306E\u30D6\u30ED\u30C3\u30AF\u30E2\u30FC\u30C9Flash\u3092\u6709\u52B9\u5316\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/08-hardware-acceleration"
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrome-ART\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30BF\u3092\u6709\u52B9\u5316\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/09-touch-controller"
  }), `\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u306E\u901A\u4FE1\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/10-physical-buttons"
  }), `\u7269\u7406\u30DC\u30BF\u30F3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7269\u7406\u30DC\u30BF\u30F3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/11-flash-loader"
  }), `Flash\u30ED\u30FC\u30C0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8Flash\u306B\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u8FBC\u3080\u65B9\u6CD5\u3092\u958B\u767A\u3057\u307E\u3059\u3002`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);