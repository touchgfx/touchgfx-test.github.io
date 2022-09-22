"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2701],{

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

/***/ 12488:
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
  id: "development-introduction",
  title: "\u958B\u767A\u306E\u6982\u8981"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/development-introduction",
  "id": "development/development-introduction",
  "title": "\u958B\u767A\u306E\u6982\u8981",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",
  "sourceDirName": "development",
  "slug": "/development/development-introduction",
  "permalink": "/4.20/ja/docs/development/development-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "development-introduction",
    "title": "\u958B\u767A\u306E\u6982\u8981"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF",
    "permalink": "/4.20/ja/docs/basic-concepts/memory-usage"
  },
  "next": {
    "title": "\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u9078\u629E\u306E\u6982\u8981",
    "permalink": "/4.20/ja/docs/development/hardware-selection/hardware-selection-introduction"
  }
};
const assets = {};



const toc = [{
  value: "\u4E3B\u306A\u4F5C\u696D",
  id: "main-activities",
  level: 2
}, {
  value: "\u898B\u51FA\u3057\u3078\u306E\u76F4\u30EA\u30F3\u30AF",
  id: "main-components",
  level: 2
}, {
  value: "\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u9078\u629E",
  id: "hardware-selection",
  level: 2
}, {
  value: "\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u4F5C\u6210",
  id: "prototyping",
  level: 3
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2",
  id: "custom-hardware",
  level: 3
}, {
  value: "\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052",
  id: "board-bring-up",
  level: 2
}, {
  value: "STM32CubeMX",
  id: "stm32cubemx",
  level: 3
}, {
  value: "TouchGFX Board Setup\uFF08TBS\uFF09",
  id: "application-templates-ats",
  level: 3
}, {
  value: "TouchGFX AL\uFF08\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF09\u958B\u767A",
  id: "touchgfx-al-development",
  level: 2
}, {
  value: "TouchGFX Generator",
  id: "touchgfx-generator",
  level: 3
}, {
  value: "UI\u958B\u767A",
  id: "ui-development",
  level: 2
}, {
  value: "TouchGFX Designer",
  id: "touchgfx-designer",
  level: 3
}, {
  value: "TouchGFX Board Setup",
  id: "application-templates",
  level: 3
}, {
  value: "\u30C7\u30E2\u304A\u3088\u3073\u30B5\u30F3\u30D7\u30EB",
  id: "ui-templates",
  level: 3
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2",
  id: "custom-hardware-1",
  level: 3
}, {
  value: "\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC",
  id: "workflow",
  level: 2
}, {
  value: "\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9",
  id: "generated-code-and-user-code",
  level: 3
}, {
  value: "\u30B3\u30F3\u30D1\u30A4\u30E9 / IDE\u306E\u5909\u66F4",
  id: "change-of-compileride",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This section contains information on how to develop a TouchGFX application including, structure, workflow and tools.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    items: (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */ .jA)().items,
    mdxType: "DocCardList"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "main-activities"
  }), `\u4E3B\u306A\u4F5C\u696D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u958B\u767A\u6BB5\u968E\u306B\u304A\u3044\u3066\u53D6\u308A\u7D44\u3080\u4E00\u9023\u306E\u4F5C\u696D\u304C\u542B\u307E\u308C\u307E\u3059\u3002 \u5404\u4F5C\u696D\u306E\u5DE5\u6570\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u76EE\u6A19\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002 UI\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5927\u90E8\u5206\u306B\u65E2\u88FD\u306E\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3067\u304D\u308B\u305F\u3081\u3001\u4F5C\u696D\u306E\u5927\u534A\u3092\u7701\u7565\u3057\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u958B\u767A\u3092\u52A0\u901F\u3067\u304D\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30DC\u30FC\u30C9\u306B\u57FA\u3065\u304F\u30D5\u30EB\uFF65\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u306F\u3001\u5404\u4F5C\u696D\u306B\u53D6\u308A\u7D44\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-activities.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4E3B\u306A\u4F5C\u696D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "main-components"
  }), `\u898B\u51FA\u3057\u3078\u306E\u76F4\u30EA\u30F3\u30AF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u30015\u3064\u306E\u4E3B\u306A\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u304A\u3088\u3073\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002 \u5404\u4F5C\u696D\u3067\u306F\u3001\u3053\u308C\u3089\u306E\u4E3B\u306A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u751F\u6210\u3057\u307E\u3059\u3002 TouchGFX\u30A8\u30F3\u30B8\u30F3\u306F\u3001\u3044\u305A\u308C\u306E\u4E3B\u8981\u4F5C\u696D\u306E\u51FA\u529B\u3067\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30A8\u30F3\u30B8\u30F3\u306F\u3001TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u51FA\u767A\u70B9\u3068\u306A\u308B\u3082\u306E\u3067\u3042\u308A\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u304A\u3088\u3073\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u5B8C\u4E86\u6B21\u7B2C\u3001\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-components.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4E3B\u306A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u5404\u4F5C\u696D\u304A\u3088\u3073\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u6982\u8981\u3092\u793A\u3057\u3001 \u7AE0\u306E\u5F8C\u534A\u3067\u5404\u4F5C\u696D\u306E\u8A73\u7D30\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-selection"
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u9078\u629E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-004.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F5C\u696D\u306FTouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u6700\u521D\u306E\u5DE5\u7A0B\u3067\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u5FC5\u8981\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u6C7A\u5B9A\u3057\u3001\u305D\u308C\u3089\u304CTouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3092\u5224\u65AD\u3057\u307E\u3059\u3002 \u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3092\u5B8C\u4E86\u3059\u308B\u3068\u3001TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30DC\u30FC\u30C9\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "prototyping"
  }), `\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u3001\u8FC5\u901F\u306B\u7ACB\u3061\u4E0A\u3052\u3001\u5B9F\u884C\u3067\u304D\u308BSTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u304C\u6700\u9069\u306E\u9078\u629E\u80A2\u3067\u3059\u3002 \u3053\u306E\u30AD\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308C\u3070\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u3064\u3044\u3066\u3001\u30DC\u30FC\u30C9\u3078\u306E\u63A5\u7D9A\u65B9\u6CD5\u306A\u3069\u306E\u554F\u984C\u3092\u8003\u616E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u306E\u5834\u5408\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u9078\u629E\u4F5C\u696D\u306F\u3001\u63D0\u4F9B\u4E2D\u306ESTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3092\u9078\u3076\u3060\u3051\u3067\u5B8C\u4E86\u3067\u3059\u3002\u3053\u308C\u306F\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u6027\u80FD\u3001\u30E1\u30E2\u30EA\u306E\u8A2D\u5B9A\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B5\u30A4\u30BA\u3068\u3044\u3046\u89B3\u70B9\u304B\u3089\u3001\u6700\u7D42\u88FD\u54C1\u306B\u6700\u3082\u5408\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u72EC\u81EA\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u306F\u3001\u591A\u6570\u306E\u9078\u629E\u80A2\u3068\u691C\u8A0E\u3059\u3079\u304D\u8AB2\u984C\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u4F5C\u696D\u306B\u95A2\u3057\u3066\u306F\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u9078\u629E`), `\u300D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u591A\u304F\u306E\u7591\u554F\u306B\u5BFE\u3059\u308B\u7B54\u3048\u3068\u3001\u9078\u629E\u304CTouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u306B\u3064\u3044\u3066\u306E\u89E3\u8AAC\u304C\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u7D42\u76E4\u306B\u306A\u308B\u307E\u3067\u3001\u6700\u7D42\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u7528\u610F\u3067\u304D\u306A\u3044\u30B1\u30FC\u30B9\u306F\u5C11\u306A\u304F\u3042\u308A\u307E\u305B\u3093\u3002 \u305D\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u306F\u3001\u307E\u305A\u6700\u7D42\u88FD\u54C1\u306E\u30DC\u30FC\u30C9\u306B\u8FD1\u3044STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3092\u9078\u629E\u3057\u3001UI\u958B\u767A\u306E\u521D\u671F\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3053\u308C\u3092\u4F7F\u7528\u3059\u308B\u3068\u3044\u3046\u65B9\u6CD5\u304C\u4E00\u822C\u7684\u3067\u3059\u3002 \u305D\u306E\u3088\u3046\u306A\u30DC\u30FC\u30C9\u304C\u306A\u3044\u5834\u5408\u306F\u3001PC\u3067\u52D5\u4F5C\u3059\u308BTouchGFX Simulator\u3092\u4F7F\u7528\u3057\u3066\u958B\u767A\u306B\u7740\u624B\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u8A73\u7D30\u306F\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u9078\u629E`), `\u300D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "board-bring-up"
  }), `\u30DC\u30FC\u30C9\u7ACB\u3061\u4E0A\u3052`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-003.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F5C\u696D\u306F\u3001TouchGFX\u3092\u30DC\u30FC\u30C9\u4E0A\u3067\u5B9F\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u306E\u4E2D\u5FC3\u7684\u306A\u30BF\u30B9\u30AF\u3067\u3059\u3002 \u51FA\u529B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3068\u547C\u3070\u308C\u308B\u3082\u306E\u3067\u3059\u3002\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3068\u3059\u3079\u3066\u306E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3092\u8A2D\u5B9A\u3059\u308B\u4E00\u822C\u7684\u306A\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3067\u3042\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5B9F\u884C\u306E\u6E96\u5099\u3092\u6574\u3048\u307E\u3059\u3002 \u3053\u306E\u521D\u671F\u5316\u30B3\u30FC\u30C9\u306FTouchGFX\u304B\u3089\u72EC\u7ACB\u3057\u3066\u304A\u308A\u3001\u7D14\u7C8B\u306B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u8A2D\u5B9A\u306E\u307F\u3092\u884C\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubemx"
  }), `STM32CubeMX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F5C\u696D\u306E\u4E3B\u306A\u30C4\u30FC\u30EB\u306FSTM32CubeMX\u3067\u3059\u3002 \u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u8A2D\u5B9A\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3001\u4E00\u822C\u7684\u306A\u8D77\u52D5\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002 \u5916\u90E8RAM\u3084\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306A\u3069\u306E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u306B\u3064\u3044\u3066\u306F\u3001\u30E6\u30FC\u30B6\u304C\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3068\u7279\u5B9A\u306E\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u7528\u306E\u30C9\u30E9\u30A4\u30D0\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002 STM32CubeMX\u3092\u4F7F\u7528\u305B\u305A\u306B\u3001\u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3092\u3059\u3079\u3066\u81EA\u5206\u3067\u4F5C\u6210\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u304C\u3001STM32\u3084\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u306B\u95A2\u3059\u308B\u5C02\u9580\u77E5\u8B58\u3092\u5099\u3048\u3066\u3044\u306A\u3044\u304B\u304E\u308A\u3001\u3053\u306E\u65B9\u6CD5\u306F\u63A8\u5968\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates-ats"
  }), `TouchGFX Board Setup\uFF08TBS\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u3001\u307E\u305F\u306F\u5358\u306BTouchGFX\u3092\u8A66\u3059\u5834\u5408\u306F\u3001TouchGFX Designer\u3067\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u3044\u305A\u308C\u304B\u306E\u6A19\u6E96STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u5411\u3051\u306E\u65E2\u5B58\u306ETouchGFX Board Setup\uFF08TBS\uFF09\u306B\u57FA\u3065\u3044\u3066\u958B\u767A\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306B\u306F\u3001\u5FC5\u8981\u306A\u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3082\u3059\u3079\u3066\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 TBS\u306FSTM32CubeMX\u306E\u8A2D\u5B9A\u306B\u57FA\u3065\u3044\u3066\u3044\u308B\u305F\u3081\u3001\u8A66\u3057\u3066\u307F\u305F\u3044\u3001\u3042\u308B\u3044\u306F\u3055\u3089\u306B\u30DA\u30EA\u30D5\u30A7\u30E9\u30EB\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u8FFD\u52A0\u3057\u305F\u3044\u5834\u5408\u306F\u3001\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u8A73\u7D30\u306F\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "board-bring-up/board-introduction"
  }), `\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052`), `\u300D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-al-development"
  }), `TouchGFX AL\uFF08\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF09\u958B\u767A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-002.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F5C\u696D\u306F\u3001\u5B8C\u5168\u306B\u521D\u671F\u5316\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30DC\u30FC\u30C9(\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30DC\u30FC\u30C9 + \u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9) \u4E0A\u3067\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u3092\u5B9F\u884C\u3059\u308B\u4E0A\u3067\u91CD\u8981\u3067\u3059\u3002 \u51FA\u529B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\u3001TouchGFX\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF08AL\uFF1AAbstraction Layer\uFF09\u3068\u547C\u3070\u308C\u308B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF65\u30EC\u30A4\u30E4\u3067\u3059\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u62BD\u8C61\u5316\u3057\u3001TouchGFX\u30A8\u30F3\u30B8\u30F3\u304C\u30DC\u30FC\u30C9\u4E0A\u3067\u52D5\u4F5C\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-generator"
  }), `TouchGFX Generator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F5C\u696D\u306E\u4E3B\u306A\u30C4\u30FC\u30EB\u306FTouchGFX Generator\u3067\u3059\u3002\u3053\u308C\u306FSTM32CubeMX\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3067\u3001TouchGFX\u306EAL\u30B3\u30FC\u30C9\u306E\u5927\u90E8\u5206\u3092\u8A2D\u5B9A\u3001\u751F\u6210\u3067\u304D\u307E\u3059\u3002 \u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001TouchGFX AL\u30B3\u30FC\u30C9\u306E\u4E00\u90E8\u306F\u30E6\u30FC\u30B6\u81EA\u8EAB\u3067\u4F5C\u6210\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 TouchGFX Generator\u306F\u3001\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u3001\u30E6\u30FC\u30B6\u304C\u5185\u5BB9\u3092\u5B9F\u88C5\u3059\u308B\u305F\u3081\u306E\u7A7A\u306E\u95A2\u6570\u3092\u4F5C\u6210\u3057\u3066\u30E6\u30FC\u30B6\u3092\u652F\u63F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX AL\u304C\u6A5F\u80FD\u3059\u308B\u306B\u306F\u3001\u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9\u304C\u9069\u5207\u306B\u4F5C\u6210\u3055\u308C\u3001\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u3001\u5916\u90E8RAM\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3001\u305D\u306E\u4ED6\u304C\u9069\u5207\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u3001\u307E\u305F\u306F\u5358\u306BTouchGFX\u3092\u8A66\u3059\u5834\u5408\u306F\u3001TouchGFX Designer\u3067\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u3044\u305A\u308C\u304B\u306E\u6A19\u6E96STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u5411\u3051\u306E\u65E2\u5B58\u306ETouchGFX Board Setup\uFF08TBS\uFF09\u306B\u57FA\u3065\u3044\u3066\u958B\u767A\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306B\u306F\u3001\u5FC5\u8981\u306ATouchGFX AL\u30B3\u30FC\u30C9\u3082\u3059\u3079\u3066\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 TBS\u306FSTM32CubeMX\u3068TouchGFX Generator\u306E\u8A2D\u5B9A\u306B\u57FA\u3065\u3044\u3066\u3044\u308B\u305F\u3081\u3001\u5F8C\u3067\u8A2D\u5B9A\u3092\u5909\u66F4\u3057\u3066\u8A66\u3057\u3066\u307F\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u8A73\u7D30\u306F\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `TouchGFX AL\u306E\u958B\u767A`), `\u300D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ui-development"
  }), `UI\u958B\u767A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-000.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u304A\u305D\u3089\u304F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u958B\u767A\u306E\u6642\u9593\u306E\u307B\u3068\u3093\u3069\u304C\u3001\u3053\u306E\u4F5C\u696D\u306B\u8CBB\u3084\u3055\u308C\u307E\u3059\u3002 \u3053\u3053\u3067\u306F\u30E6\u30FC\u30B6\uFF65\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u308C\u304C\u3001TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30E6\u30FC\u30B6\u306E\u76EE\u306B\u89E6\u308C\u308B\u90E8\u5206\u3067\u3042\u308B\u3001TouchGFX UI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u547C\u3070\u308C\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u69CB\u6210\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer"
  }), `TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u4F5C\u696D\u306E\u4E3B\u306A\u30C4\u30FC\u30EB\u306FTouchGFX Designer\u3068\u3001\u4F7F\u3044\u6163\u308C\u305FIDE\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30C7\u30A3\u30BF\u3067\u3059\u3002 TouchGFX Designer\u3067\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u753B\u9762\u3092\u8A2D\u5B9A\u3001\u8A2D\u8A08\u3001\u4F5C\u6210\u3057\u3001UI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4E3B\u8981\u90E8\u5206\u3092C++\u30B3\u30FC\u30C9\u3068\u3057\u3066\u751F\u6210\u3057\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8AD6\u7406(\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u3001\u30B7\u30B9\u30C6\u30E0\u306EUI\u4EE5\u5916\u306E\u90E8\u5206\u3068\u306E\u3084\u308A\u53D6\u308A) \u306B\u3064\u3044\u3066\u306F\u3001IDE\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30C7\u30A3\u30BF\u3092\u4F7F\u7528\u3057\u3066\u30E6\u30FC\u30B6\u304CC++\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30FC\u30C9\u306FTouchGFX Designer\u304C\u751F\u6210\u3059\u308B\u30B3\u30FC\u30C9\u3068\u5171\u5B58\u3057\u3001\u3084\u308A\u53D6\u308A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-screen-4.17.png",
    noShadow: true,
    width: "300",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates"
  }), `TouchGFX Board Setup`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u4F5C\u6210\u3057\u3066\u3044\u308B\u304B\u3001\u307E\u305F\u306F\u5358\u306BTouchGFX\u3092\u8A66\u3057\u305F\u3044\u3060\u3051\u3067\u3001\u305D\u306E\u4ED6\u306E\u4F5C\u696D\u306B\u6642\u9593\u3092\u5272\u304D\u305F\u304F\u306A\u3044\u5834\u5408\u306F\u3001PC\u30D9\u30FC\u30B9\u306ETouchGFX Simulator\u306B\u57FA\u3065\u3044\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3059\u308B\u304B\u3001\u6A19\u6E96\u306E\u5404STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u5411\u3051\u306B\u7528\u610F\u3055\u308C\u305F\u65E2\u5B58\u306ETouchGFX Board Setup\uFF08TBS\uFF09 \u306E\u3044\u305A\u308C\u304B\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3044\u305A\u308C\u306E\u5834\u5408\u3082\u3001\u305F\u3060\u3061\u306BUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u306B\u7740\u624B\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ui-templates"
  }), `\u30C7\u30E2\u304A\u3088\u3073\u30B5\u30F3\u30D7\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5358\u306B\u4F55\u304B\u3092\u5B9F\u884C\u3057\u305F\u3044\u3001\u3042\u308B\u3044\u306F\u30D2\u30F3\u30C8\u304C\u6B32\u3057\u3044\u3068\u3044\u3046\u5834\u5408\u306F\u3001TouchGFX Designer\u3067\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u969B\u306B\u3001\u63D0\u793A\u3055\u308C\u308BTouchGFX\u306E\u30C7\u30E2\u307E\u305F\u306F\u30B5\u30F3\u30D7\u30EB\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u306B\u5FC5\u8981\u306A\u4F5C\u696D\u306F\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3001\u66F8\u8FBC\u307F\u3001\u5B9F\u884C\u3060\u3051\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware-1"
  }), `\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4ED6\u306E\u4F5C\u696D\u304C\u3059\u3067\u306B\u3059\u3079\u3066\u7D42\u4E86\u3057\u3001TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u7528\u306B\u52D5\u4F5C\u3059\u308B\u30DC\u30FC\u30C9\u304C\u7528\u610F\u3067\u304D\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30BC\u30ED\u304B\u3089\u958B\u59CB\u3059\u308B\u304B\u3001\u3044\u305A\u308C\u304B\u306E\u30B5\u30F3\u30D7\u30EB\u307E\u305F\u306F\u30C7\u30E2\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \u30AB\u30B9\u30BF\u30E0\uFF65\u30DC\u30FC\u30C9\u3068\u30B5\u30F3\u30D7\u30EB\u306E\u89E3\u50CF\u5EA6\u304C\u540C\u3058\u3067\u3042\u308C\u3070\u3001\u30B5\u30F3\u30D7\u30EB\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30DC\u30FC\u30C9\u4E0A\u3067\u3082\u52D5\u4F5C\u3059\u308B\u306F\u305A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u3053\u306E\u30B9\u30C6\u30C3\u30D7\u306E\u8A73\u7D30\u306F\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "ui-development/ui-development-introduction"
  }), `UI\u306E\u958B\u767A`), `\u300D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "workflow"
  }), `\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u898B\u3066\u306E\u3068\u304A\u308A\u3001TouchGFX\u306E\u958B\u767A\u306B\u306F\u3001\u591A\u304F\u306E\u4F5C\u696D\u3068\u30C4\u30FC\u30EB\u304C\u95A2\u4E0E\u3057\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u305D\u3046\u3057\u305F\u4F5C\u696D\u3092\u3059\u3079\u3066\u540C\u6642\u306B\u884C\u3046\u5FC5\u8981\u306F\u306A\u3044\u3053\u3068\u306B\u7559\u610F\u3059\u308B\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002\u5FC5\u305A\u3057\u3082UI\u958B\u767A\u7740\u624B\u307E\u3067\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30DC\u30FC\u30C9\u3001\u30DC\u30FC\u30C9\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3001TouchGFX AL\u304C\u5FC5\u8981\u306B\u306A\u308B\u3068\u306F\u304B\u304E\u308A\u307E\u305B\u3093\u3002 \u3053\u308C\u3089\u306FSTM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u307E\u305F\u306FTouchGFX Simulator\u3067\u4EE3\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",
    noShadow: true,
    width: "700",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306E\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code-and-user-code"
  }), `\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306B\u95A2\u3059\u308B3\u3064\u306E\u4F5C\u696D\u3001\u3064\u307E\u308A\u30DC\u30FC\u30C9\u306E\u7ACB\u3061\u4E0A\u3052\u3001TouchGFX AL\u306E\u958B\u767A\u3001UI\u306E\u958B\u767A\u306E\u305D\u308C\u305E\u308C\u3067\u306F\u3001\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30C4\u30FC\u30EB\u306B\u5171\u901A\u3059\u308B\u306E\u306F\u3001\u5FC5\u8981\u306A\u30B3\u30FC\u30C9\u306E\u3059\u3079\u3066\u304C\u751F\u6210\u3055\u308C\u308B\u308F\u3051\u3067\u306F\u306A\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u30E6\u30FC\u30B6\u304C\u4F5C\u6210\u3059\u308B\u30B3\u30FC\u30C9\u3082\u8FFD\u52A0\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u308C\u30893\u3064\u306E\u30C4\u30FC\u30EB\u3067\u306F\u3001\u30C4\u30FC\u30EB\u306E\u4F7F\u7528\u3068\u30B3\u30FC\u30C9\u4F5C\u6210\u306E\u9593\u3092\u81EA\u7531\u306B\u884C\u304D\u6765\u3067\u304D\u307E\u3059\u3002 \u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3068\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306F\u72EC\u7ACB\u3057\u3066\u304A\u308A\u3001\u5225\u3005\u306B\u66F4\u65B0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F5C\u696D\u3092\u5207\u308A\u66FF\u3048\u308B\u3053\u3068\u3067\u4F7F\u7528\u3059\u308B\u30C4\u30FC\u30EB\u304C\u5909\u308F\u308B\u5834\u5408\u3082\u3042\u308A\u307E\u3059\u3002 \u305D\u3046\u3057\u305F\u72B6\u6CC1\u306F\u3001TouchGFX AL\u306E\u958B\u767A\u306B\u304A\u3044\u3066\u3057\u3070\u3057\u3070\u767A\u751F\u3057\u307E\u3059\u3002\u3053\u3053\u306B\u306F\u3001TouchGFX AL\u3092\u30C6\u30B9\u30C8\u3059\u308B\u305F\u3081\u306E\u3001\u3054\u304F\u5358\u7D14\u306ATouchGFX UI\u304C\u3042\u308A\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\u3053\u306E\u3088\u3046\u306B\u4F5C\u696D\u9593\u3092\u79FB\u52D5\u3057\u3066\u3082\u4F55\u306E\u554F\u984C\u3082\u751F\u3058\u307E\u305B\u3093\u3002\u30C4\u30FC\u30EB\u3001\u751F\u6210\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3001\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u306F\u554F\u984C\u306A\u304F\u5171\u5B58\u3057\u3001\u66F4\u65B0\u3067\u304D\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "change-of-compileride"
  }), `\u30B3\u30F3\u30D1\u30A4\u30E9 / IDE\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F5C\u696D\u4E2D\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30DC\u30FC\u30C9\u5411\u3051\u306E\u30B3\u30FC\u30C9\u3092\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u5FC5\u8981\u304C\u751F\u3058\u307E\u3059\u3002 TouchGFX\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30B3\u30F3\u30D1\u30A4\u30E9\u306F\u3001IAR\u3001ARMCC\u3001ARMCLANG\u3001GCC\uFF08STM32CubeIDE\uFF09\u3067\u3059\u3002 TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7528\u306B\u9078\u629E\u3055\u308C\u305F\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u306FSTM32CubeMX\u3067\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u305D\u308C\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306F\u3001STM32CubeMX\u3067TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E.ioc\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u3044\u3066\u3001\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 TouchGFX Designer\u3067TouchGFX Board Setup\uFF08TBS\uFF09\u3092\u9078\u629E\u3057\u305F\u5834\u5408\u306F\u3001\u3042\u3089\u304B\u3058\u30811\u3064\u306E\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u3044\u305A\u308C\u304B\u306E\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u306E\u307F\u304C\u5B58\u5728\u3057\u307E\u3059\u3002 AT\u306B\u306F.ioc\u30D5\u30A1\u30A4\u30EB\u3082\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u305D\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304D\u3001\u5FC5\u8981\u306B\u5408\u308F\u305B\u3066\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u306B\u5909\u66F4\u3067\u304D\u307E\u3059`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);