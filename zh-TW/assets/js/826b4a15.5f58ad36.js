"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4403],{

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

/***/ 45926:
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
  title: "\u958B\u767C\u7C21\u4ECB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/development-introduction",
  "id": "development/development-introduction",
  "title": "\u958B\u767C\u7C21\u4ECB",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",
  "sourceDirName": "development",
  "slug": "/development/development-introduction",
  "permalink": "/4.20/zh-TW/docs/development/development-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "development-introduction",
    "title": "\u958B\u767C\u7C21\u4ECB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u8A18\u61B6\u9AD4\u4F7F\u7528",
    "permalink": "/4.20/zh-TW/docs/basic-concepts/memory-usage"
  },
  "next": {
    "title": "\u786C\u9AD4\u9078\u64C7\u4ECB\u7D39",
    "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-selection-introduction"
  }
};
const assets = {};



const toc = [{
  value: "\u4E3B\u8981\u64CD\u4F5C",
  id: "main-activities",
  level: 2
}, {
  value: "\u4E3B\u8981\u90E8\u4EF6",
  id: "main-components",
  level: 2
}, {
  value: "\u786C\u9AD4\u9078\u64C7",
  id: "hardware-selection",
  level: 2
}, {
  value: "\u539F\u578B\u8A2D\u8A08",
  id: "prototyping",
  level: 3
}, {
  value: "\u5BA2\u88FD\u5316\u786C\u9AD4",
  id: "custom-hardware",
  level: 3
}, {
  value: "\u958B\u767C\u677F\u642D\u5EFA",
  id: "board-bring-up",
  level: 2
}, {
  value: "STM32CubeMX",
  id: "stm32cubemx",
  level: 3
}, {
  value: "TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\uFF08TBS\uFF09",
  id: "application-templates-ats",
  level: 3
}, {
  value: "TouchGFX AL\u958B\u767C",
  id: "touchgfx-al-development",
  level: 2
}, {
  value: "TouchGFX Generator",
  id: "touchgfx-generator",
  level: 3
}, {
  value: "UI\u958B\u767C",
  id: "ui-development",
  level: 2
}, {
  value: "TouchGFX Designer",
  id: "touchgfx-designer",
  level: 3
}, {
  value: "TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E",
  id: "application-templates",
  level: 3
}, {
  value: "\u6F14\u793A\u548C\u7BC4\u4F8B",
  id: "ui-templates",
  level: 3
}, {
  value: "\u5BA2\u88FD\u5316\u786C\u9AD4",
  id: "custom-hardware-1",
  level: 3
}, {
  value: "\u5DE5\u4F5C\u6D41\u7A0B",
  id: "workflow",
  level: 2
}, {
  value: "\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u548C\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC",
  id: "generated-code-and-user-code",
  level: 3
}, {
  value: "\u66F4\u6539\u7DE8\u8B6F\u5668/IDE",
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
  }), `\u4E3B\u8981\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u500BTouchGFX\u5C08\u6848\u6703\u6D89\u53CA\u5230\u958B\u767C\u968E\u6BB5\u7684\u4E00\u7CFB\u5217\u64CD\u4F5C\u3002 \u6BCF\u500B\u64CD\u4F5C\u7684\u5DE5\u4F5C\u91CF\u53D6\u6C7A\u65BC\u5C08\u6848\u7684\u76EE\u6A19\u3002 \u5982\u679C\u60A8\u6B63\u5728\u57F7\u884CUI\u539F\u578B\u8A2D\u8A08\uFF0C\u5247\u61C9\u7528\u7A0B\u5F0F\u7684\u4E3B\u8981\u90E8\u5206\u53EF\u4F7F\u7528\u9810\u88FD\u7A0B\u5F0F\u78BC\uFF0C\u4EE5\u8DF3\u904E\u5927\u591A\u6578\u6B65\u9A5F\uFF0C\u5F9E\u800C\u52A0\u5FEB\u5C08\u6848\u958B\u767C\u901F\u5EA6\u3002 \u5982\u679C\u60A8\u4EE5\u5BA2\u88FD\u677F\u4F86\u5B8C\u6210\u6574\u500B\u5C08\u6848\uFF0C\u60A8\u5C07\u5728\u5C08\u6848\u958B\u767C\u4E2D\u6D89\u53CA\u9019\u4E9B\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-activities.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX\u5C08\u6848\u7684\u4E3B\u8981\u64CD\u4F5C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "main-components"
  }), `\u4E3B\u8981\u90E8\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u7684TouchGFX\u5C08\u6848\u7531\u4E94\u500B\u4E3B\u8981\u7684\u786C\u9AD4\u548C\u8EDF\u9AD4\u90E8\u4EF6\u7D44\u6210\u3002 \u6BCF\u500B\u64CD\u4F5C\u90FD\u6703\u70BA\u60A8\u7684TouchGFX\u5C08\u6848\u751F\u6210\u4E00\u500B\u4E3B\u8981\u90E8\u4EF6\u3002 TouchGFXEngine\u4E0D\u662F\u4EFB\u4F55\u4E3B\u8981\u64CD\u4F5C\u7684\u8F38\u51FA\uFF0C\u800C\u662FTouchGFX\u5C08\u6848\u7684\u8D77\u9EDE\uFF0C\u4E14\u5728\u4E0B\u8F09\u548C\u5B89\u88DD\u5F8C\u5373\u53EF\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-components.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX\u5C08\u6848\u7684\u4E3B\u8981\u90E8\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u5404\u7BC0\u5C07\u6982\u8FF0\u6BCF\u500B\u64CD\u4F5C\u53CA\u90E8\u4EF6\u3002 \u672C\u7AE0\u7BC0\u7684\u5176\u9918\u5404\u5C0F\u7BC0\u5C07\u9032\u4E00\u6B65\u8A73\u7D30\u63CF\u8FF0\u6BCF\u500B\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-selection"
  }), `\u786C\u9AD4\u9078\u64C7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-004.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u662FTouchGFX\u5C08\u6848\u4E2D\u7684\u521D\u59CB\u64CD\u4F5C\u3002 \u9078\u64C7\u8981\u904B\u884C\u61C9\u7528\u7A0B\u5F0F\u7684\u786C\u9AD4\u3002 \u78BA\u5B9A\u6240\u9700\u7684\u786C\u9AD4\u5143\u4EF6\uFF0C\u4E26\u5F04\u6E05\u9019\u4E9B\u786C\u9AD4\u5C0DTouchGFX\u61C9\u7528\u7A0B\u5F0F\u7684\u5F71\u97FF\u3002 \u5B8C\u6210\u6B64\u6B65\u5F8C\uFF0C\u60A8\u5C31\u64C1\u6709\u4E86\u4E00\u500B\u53EF\u7528\u65BCTouchGFX\u5C08\u6848\u7684\u986F\u793A\u677F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "prototyping"
  }), `\u539F\u578B\u8A2D\u8A08`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u9032\u884CUI\u539F\u578B\u8A2D\u8A08\uFF0CSTM32\u8A55\u4F30\u5957\u4EF6\u662F\u500B\u5FEB\u901F\u4E14\u4FBF\u5229\u7684\u7406\u60F3\u4E4B\u9078\u3002 \u9019\u88E1\u7121\u9700\u8003\u616E\u786C\u9AD4\u5143\u4EF6\u3001\u4E0D\u540C\u5143\u4EF6\u9593\u7684\u9023\u63A5\u6216\u985E\u4F3C\u554F\u984C\u3002 \u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u786C\u9AD4\u64CD\u4F5C\u53EA\u9700\u57FA\u65BCMCU\u6027\u80FD\u3001\u5132\u5B58\u5668\u8A2D\u7F6E\u548C\u986F\u793A\u5668\u5C3A\u5BF8\u65B9\u9762\uFF0C\u4E26\u9078\u64C7\u6700\u8CBC\u8FD1\u60A8\u7684\u6700\u7D42\u7522\u54C1\u7684STM32\u8A55\u4F30\u5957\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware"
  }), `\u5BA2\u88FD\u5316\u786C\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u8981\u5EFA\u7ACB\u81EA\u5DF1\u7684\u786C\u9AD4\u89E3\u6C7A\u65B9\u6848\uFF0C\u9078\u64C7\u5F88\u591A\uFF0C\u540C\u6642\u8981\u8003\u616E\u7684\u554F\u984C\u4E5F\u591A\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `\u786C\u9AD4\u9078\u64C7`), `\u5C07\u5354\u52A9\u60A8\u5B8C\u6210\u6B64\u4EFB\u52D9\u3001\u56DE\u7B54\u8A31\u591A\u554F\u984C\uFF0C\u4E26\u63CF\u8FF0\u60A8\u7684\u9078\u64C7\u5982\u4F55\u5F71\u97FFTouchGFX\u61C9\u7528\u7A0B\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u76F4\u5230\u5C08\u6848\u958B\u767C\u5F8C\u671F\u624D\u6703\u6709\u6700\u7D42\u7684\u786C\u9AD4\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u901A\u5E38\u6703\u9078\u64C7\u4E00\u500B\u985E\u4F3C\u65BC\u6700\u7D42\u677F\u5B50\u7684STM32\u8A55\u4F30\u5957\u4EF6\uFF0C\u4E26\u5728UI\u958B\u767C\u7684\u7B2C\u4E00\u6B65\u4E2D\u4F7F\u7528\u8A72\u5957\u4EF6\u3002 \u5982\u679C\u60A8\u6C92\u6709\u9019\u6A23\u7684\u958B\u767C\u677F\uFF0C\u4E5F\u53EF\u4EE5\u53EA\u4F7F\u7528\u5728PC\u4E0A\u904B\u884C\u7684TouchGFXSimulator\u4F86\u958B\u59CB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u95DC\u6B64\u6B65\u9A5F\u7684\u5B8C\u6574\u8AAA\u660E\uFF0C\u8ACB\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `\u786C\u9AD4\u9078\u64C7`), `\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "board-bring-up"
  }), `\u958B\u767C\u677F\u642D\u5EFA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-003.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u662F\u4E00\u9805\u8B93TOUCHGFX\u904B\u884C\u65BC\u958B\u767C\u677F\u4E0A\u7684\u6838\u5FC3\u4EFB\u52D9\u3002 \u8F38\u51FA\u5143\u4EF6\u88AB\u7A31\u70BA\u958B\u767C\u7248\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\uFF0C\u662F\u4E9B\u901A\u7528\u7684\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\uFF0C\u7528\u65BC\u8A2D\u7F6EMCU\u53CA\u6240\u6709\u5468\u908A\uFF0C\u70BA\u57F7\u884C\u61C9\u7528\u7A0B\u5F0F\u505A\u6E96\u5099\u3002 \u8A72\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\u7368\u7ACB\u65BCTouchGFX\uFF0C\u50C5\u8655\u7406\u7D14\u786C\u9AD4\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubemx"
  }), `STM32CubeMX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u500B\u64CD\u4F5C\u7684\u4E3B\u8981\u5DE5\u5177\u662FSTM32CubeMX\u3002 \u5B83\u53EF\u4EE5\u5354\u52A9\u60A8\u8A2D\u5B9AMCU\u4E26\u751F\u6210\u57FA\u672C\u7684\u7684\u555F\u52D5\u7A0B\u5F0F\u78BC\u3002 \u5C0D\u65BC\u5916\u8A2D\uFF08\u5982\u5916\u90E8RAM\u548C\u986F\u793A\u5668\uFF09\uFF0C\u60A8\u5C07\u81EA\u884C\u6DFB\u52A0\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\u548C\u7279\u5B9A\u5468\u908A\u9A45\u52D5\u7A0B\u5F0F\u3002 \u4E5F\u53EF\u4EE5\u5728\u4E0D\u4F7F\u7528STM32CubeMX\u7684\u60C5\u6CC1\u4E0B\u5B8C\u6210\u6574\u500B\u958B\u767C\u677F\u7684\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\uFF0C\u4E0D\u904E\u9019\u9700\u8981\u60A8\u5C0DSTM32\u548C\u642D\u5EFA\u958B\u767C\u677F\u5177\u5099\u5C08\u5BB6\u7D1A\u6C34\u6E96\uFF0C\u5426\u5247\u4E0D\u5EFA\u8B70\u9019\u6A23\u505A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates-ats"
  }), `TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E\uFF08TBS\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u57F7\u884CUI\u539F\u578B\u8A2D\u8A08\u6216\u53EA\u60F3\u5617\u8A66TouchGFX\uFF0C\u5247\u60A8\u53EF\u4EE5\u8B93\u61C9\u7528\u7A0B\u5F0F\u57FA\u65BCTouchGFX Designer\u4E2D\u7684STM32\u6A19\u6E96\u8A55\u4F30\u5957\u4EF6\u4E2D\u7684\u67D0\u500B\u73FE\u6709TouchGFX\u958B\u767C\u7248\u8A2D\u7F6E\uFF08TBS\uFF09\u4F86\u9032\u884C\u3002TBS\u57FA\u65BCSTM32CubeMX\u914D\u7F6E\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u60F3\u5617\u8A66\u6216\u6DFB\u52A0\u5C0D\u66F4\u591A\u5916\u8A2D\u7684\u5B58\u53D6\u6B0A\u9650\uFF0C\u5247\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u3002 \u9019\u5305\u62EC\u6240\u9700\u7684\u6240\u6709\u958B\u767C\u677F\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\u3002 TBS\u57FA\u65BCSTM32CubeMX\u914D\u7F6E\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u60F3\u5617\u8A66\u6216\u6DFB\u52A0\u5C0D\u66F4\u591A\u5468\u908A\u7684\u5B58\u53D6\u8A31\u53EF\u6B0A\uFF0C\u5247\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u95DC\u6B64\u6B65\u9A5F\u7684\u5B8C\u6574\u8AAA\u660E\uFF0C\u8ACB\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "board-bring-up/board-introduction"
  }), `\u958B\u767C\u677F\u642D\u5EFA\u555F\u52D5`), ` \u7AE0\u7BC0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-al-development"
  }), `TouchGFX AL\u958B\u767C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-002.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u662FTouchGFXEngine\u5728\u5B8C\u5168\u521D\u59CB\u5316\u904E\u7684\u986F\u793A\u677F\uFF08\u986F\u793A\u677F+\u958B\u767C\u677F\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\uFF09\u4E0A\u904B\u884C\u7684\u95DC\u9375\u3002 \u8F38\u51FA\u5143\u4EF6\u88AB\u7A31\u70BATouchGFX\u62BD\u8C61\u5C64\uFF08AL\uFF09\uFF0C\u9019\u662F\u4E00\u500B\u8EDF\u9AD4\u5C64\u4E5F\u4F7F\u786C\u9AD4\u62BD\u8C61\u5316\uFF0C\u4E26\u4F7FTouchGFXEngine\u53EF\u5728\u60A8\u7684\u958B\u767C\u677F\u4E0A\u904B\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-generator"
  }), `TouchGFX Generator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u7684\u4E3B\u8981\u5DE5\u5177\u662FTouchGFXGenerator\uFF0C\u9019\u662FSTM32CubeMX\u5916\u639B\u7A0B\u5F0F\uFF0C\u8A72\u5916\u639B\u7A0B\u5F0F\u8B93\u60A8\u914D\u7F6E\u4E26\u751F\u6210\u5927\u591A\u6578TouchGFXAL\u7A0B\u5F0F\u78BC\u3002 \u60A8\u4E5F\u80FD\u81EA\u884C\u7DE8\u5BEBTouchGFXAL\u7A0B\u5F0F\u78BC\u4E2D\u7684\u67D0\u4E9B\u90E8\u5206\u3002 \u9019\u500B\u6B65\u9A5F\u4E2D\uFF0CTouchGFXGenerator\u5C07\u5354\u52A9\u60A8\u5EFA\u7ACB\u8981\u57F7\u884C\u7684\u7A7A\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u7279\u5225\u6CE8\u610F\uFF0C\u70BA\u4F7FTouchGFXAL\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u6B63\u78BA\u5B8C\u6210\u958B\u767C\u677F\u7684\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\u4E26\u6B63\u78BA\u914D\u7F6EMCU\u3001\u5916\u90E8RAM\u3001\u986F\u793A\u5668\u7B49\u975E\u5E38\u91CD\u8981\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u57F7\u884CUI\u539F\u578B\u8A2D\u8A08\u6216\u53EA\u60F3\u5617\u8A66TouchGFX\uFF0C\u5247\u60A8\u53EF\u4EE5\u8B93\u61C9\u7528\u7A0B\u5F0F\u57FA\u65BCTouchGFX Designer\u4E2D\u7684STM32\u6A19\u6E96\u8A55\u4F30\u5957\u4EF6\u4E2D\u7684\u67D0\u500B\u73FE\u6709TouchGFX\u958B\u767C\u7248\u8A2D\u7F6E\uFF08TBS\uFF09\u4F86\u9032\u884C\u3002TBS\u57FA\u65BCSTM32CubeMX\u914D\u7F6E\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u60F3\u5617\u8A66\u6216\u6DFB\u52A0\u5C0D\u66F4\u591A\u5916\u8A2D\u7684\u5B58\u53D6\u6B0A\u9650\uFF0C\u5247\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u3002 \u9019\u5305\u62EC\u6240\u6709\u60A8\u9700\u8981\u7684TouchGFXAL\u7A0B\u5F0F\u78BC\u3002 TBS\u57FA\u65BCCubeMX\u548CTouchGFXGenerator\u914D\u7F6E\uFF0C\u5982\u679C\u60A8\u672A\u4F86\u60F3\u505A\u5BE6\u9A57\uFF0C\u5247\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u95DC\u6B64\u6B65\u9A5F\u7684\u5B8C\u6574\u8AAA\u660E\uFF0C\u8ACB\u53C3\u898B `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `TouchGFX AL \u958B\u767C`), `\u7AE0\u7BC0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ui-development"
  }), `UI\u958B\u767C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-000.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u53EF\u80FD\u6703\u662F\u958B\u767C\u6B64\u5C08\u6848\u6642\u82B1\u8CBB\u6700\u591A\u6642\u9593\u7684\u90E8\u5206\u3002 \u60A8\u5C07\u5728\u9019\u88E1\u5275\u5EFA\u4F7F\u7528\u8005\u4ECB\u9762\u7684\u7A0B\u5F0F\u78BC\uFF0C\u8A72\u7A0B\u5F0F\u78BC\u5C07\u69CB\u6210TouchGFX\u5C08\u6848\u53EF\u8996\u5316\u7684\u90E8\u5206\uFF0C\u8A72\u5143\u4EF6\u88AB\u7A31\u70BATouchGFXUI\u61C9\u7528\u7A0B\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer"
  }), `TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u7684\u4E3B\u8981\u5DE5\u5177\u662FTouchGFXDesigner\u4EE5\u53CA\u60A8\u6700\u559C\u611B\u7684IDE\u6216\u6587\u5B57\u7DE8\u8F2F\u5668\u3002 \u5728TouchGFXDesigner\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u8A2D\u7F6E\u3001\u8A2D\u8A08\u548C\u5275\u5EFA\u60A8\u7684\u61C9\u7528\u7A0B\u5F0F\u4E2D\u7684\u8996\u7A97\uFF0C\u4E26\u7528C++\u7A0B\u5F0F\u78BC\u751F\u6210UI\u61C9\u7528\u7A0B\u5F0F\u7684\u4E3B\u8981\u90E8\u5206\u3002 \u5C0D\u65BC\u61C9\u7528\u7A0B\u5F0F\u908F\u8F2F\uFF08\u8655\u7406\u4E8B\u4EF6\uFF0C\u8207\u7CFB\u7D71\u7684\u975EUI\u90E8\u5206\u9032\u884C\u901A\u8A0A\uFF09\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528IDE\u6216\u6587\u5B57\u7DE8\u8F2F\u5668\u7DE8\u5BEBC++\u7A0B\u5F0F\u78BC\uFF0C\u8A72\u7A0B\u5F0F\u78BC\u8207TouchGFXDesigner\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u4E92\u901A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-screen-4.17.png",
    noShadow: true,
    width: "300",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates"
  }), `TouchGFX\u958B\u767C\u677F\u8A2D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u57F7\u884CUI\u539F\u578B\u8A2D\u8A08\uFF0C\u6216\u53EA\u662F\u60F3\u5617\u8A66TouchGFX\uFF0C\u800C\u4E0D\u5E0C\u671B\u82B1\u6642\u9593\u505A\u5176\u4ED6\u64CD\u4F5C\uFF0C\u5247\u60A8\u53EF\u4EE5\u57FA\u65BCPC\u4E0A\u7684TouchGFX Simulator\u4F86\u958B\u767C\u61C9\u7528\u7A0B\u5F0F\uFF0C\u4E5F\u53EF\u57FA\u65BC\u67D0\u500B\u6A19\u6E96STM32\u8A55\u4F30\u5957\u4EF6\u4E2D\u7684\u73FE\u6709TouchGFX\u958B\u767C\u7248\u8A2D\u7F6E\uFF08TBS\uFF09\u4F86\u64CD\u4F5C\u3002 \u7121\u8AD6\u5982\u4F55\uFF0C\u60A8\u90FD\u53EF\u4EE5\u7ACB\u5373\u958B\u767CUI\u61C9\u7528\u7A0B\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ui-templates"
  }), `\u6F14\u793A\u548C\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u53EA\u662F\u60F3\u904B\u884C\u67D0\u4E9B\u61C9\u7528\u7A0B\u5F0F\u6216\u56E0\u6B64\u627E\u4E9B\u555F\u767C\uFF0C\u5247\u5728TouchGFX Designer\u4E2D\u5275\u5EFA\u65B0\u5C08\u6848\u6642\uFF0C\u53EF\u4EE5\u9078\u64C7\u5176\u4E2D\u67D0\u500BTouchGFX\u7BC4\u4F8B\u4F86\u958B\u59CB\u3002 \u5982\u679C\u9019\u6A23\u7684\u8A71\uFF0C\u53EA\u9700\u7DE8\u8B6F\u3001\u71D2\u5BEB\u7A0B\u5F0F\u78BC\u4E26\u57F7\u884C\uFF0C\u7121\u9808\u5176\u5B83\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware-1"
  }), `\u5BA2\u88FD\u5316\u786C\u9AD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u5DF2\u7D93\u5B8C\u6210\u6240\u6709\u5176\u4ED6\u64CD\u4F5C\uFF0C\u5373\u5DF2\u7D93\u70BATouchGFX\u61C9\u7528\u7A0B\u5F0F\u6E96\u5099\u597D\u4E86\u958B\u767C\u677F\uFF0C\u5247\u60A8\u53EF\u4EE5\u5F9E\u982D\u958B\u59CB\uFF0C\u6216\u57FA\u65BC\u67D0\u500B\u73FE\u6709\u7BC4\u4F8B\u958B\u59CB\u3002 \u5982\u679C\u5BA2\u88FD\u677F\u7684\u89E3\u6790\u5EA6\u8207\u7BC4\u4F8B\u4E00\u81F4\uFF0C\u5247\u7BC4\u4F8B\u4E5F\u61C9\u8A72\u80FD\u5728\u60A8\u7684\u5BA2\u88FD\u677F\u4E0A\u904B\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u95DC\u6B64\u6B65\u9A5F\u7684\u5B8C\u6574\u8AAA\u660E\uFF0C\u8ACB\u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "ui-development/ui-development-introduction"
  }), `UI\u958B\u767C`), `\u7AE0\u7BC0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "workflow"
  }), `\u5DE5\u4F5C\u6D41\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u60A8\u6240\u898B\uFF0CTouchGFX\u958B\u767C\u6D89\u53CA\u8A31\u591A\u64CD\u4F5C\u548C\u5DE5\u5177\u3002 \u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u60A8\u7121\u9700\u4E00\u6B21\u6027\u5B8C\u6210\u6240\u6709\u64CD\u4F5C\uFF0C\u800C\u4E14\u5728\u958B\u59CB\u9032\u884CUI\u958B\u767C\u4E4B\u524D\uFF0C\u4E0D\u4E00\u5B9A\u9700\u8981\u4F7F\u7528\u986F\u793A\u677F\u3001\u958B\u767C\u7248\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\u548CTouchGFXAL\u3002 \u53EF\u4F7F\u7528STM32\u8A55\u4F30\u5957\u4EF6\u6216TouchGFXSimulator\u4F86\u5B8C\u6210\u9019\u4E9B\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",
    noShadow: true,
    width: "700",
    mdxType: "Figure"
  }, "TouchGFXDesigner\u5DE5\u4F5C\u6D41\u7A0B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code-and-user-code"
  }), `\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u548C\u4F7F\u7528\u8005\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u958B\u767C\u677F\u642D\u5EFA\u555F\u52D5\u3001TouchGFXAL\u958B\u767C\u548CUI\u958B\u767C\u6240\u9700\u7684\u4E09\u500B\u8EDF\u9AD4\u64CD\u4F5C\u4E2D\uFF0C\u60A8\u5C07\u4F7F\u7528\u5DE5\u5177\u4F86\u751F\u6210\u7A0B\u5F0F\u78BC\u3002 \u9019\u4E9B\u5DE5\u5177\u7684\u5171\u540C\u9EDE\u662F\u5B83\u5011\u4E0D\u6703\u751F\u6210\u6240\u6709\u60A8\u6240\u9700\u7684\u7A0B\u5F0F\u78BC\uFF0C\u60A8\u4F9D\u7136\u9700\u8981\u5728\u5C08\u6848\u4E2D\u6DFB\u52A0\u7279\u5B9A\u7528\u6236\u7A0B\u5F0F\u78BC\u3002 \u5C0D\u65BC\u9019\u4E09\u7A2E\u5DE5\u5177\uFF0C\u60A8\u53EF\u4EE5\u5728\u4F7F\u7528\u5DE5\u5177\u548C\u7DE8\u5BEB\u7A0B\u5F0F\u78BC\u4E4B\u9593\u4F86\u56DE\u5207\u63DB\u3002 \u5DE5\u5177\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u548C\u7528\u6236\u7A0B\u5F0F\u78BC\u662F\u7368\u7ACB\u7684\uFF0C\u4E26\u53EF\u4EE5\u500B\u5225\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u6642\uFF0C\u60A8\u9084\u53EF\u4EE5\u5728\u4E0D\u540C\u64CD\u4F5C\u4E4B\u9593\u4F86\u56DE\u5207\u63DB\uFF0C\u56E0\u6B64\u9700\u8981\u4F7F\u7528\u4E0D\u540C\u7684\u5DE5\u5177\u3002 \u5728\u9032\u884CTouchGFXAL\u958B\u767C\u6642\uFF0C\u60A8\u901A\u5E38\u6703\u4F7F\u7528\u975E\u5E38\u7C21\u55AE\u7684TouchGFXUI\u4F86\u6E2C\u8A66TouchGFXAL\u3002 \u800C\u4E14\u5728\u4E0D\u540C\u64CD\u4F5C\u4E4B\u9593\u9032\u884C\u5207\u63DB\u4E0D\u6703\u6709\u554F\u984C\uFF0C\u50CF\u662F\u5DE5\u5177\u3001\u751F\u6210\u7A0B\u5F0F\u78BC\u548C\u60A8\u7684\u7528\u6236\u7A0B\u5F0F\u78BC\u5171\u5B58\uFF0C\u4E26\u5728\u66F4\u65B0\u6642\u4E0D\u6703\u51FA\u73FE\u4EFB\u4F55\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "change-of-compileride"
  }), `\u66F4\u6539\u7DE8\u8B6F\u5668/IDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u4E9B\u64CD\u4F5C\u4E2D\uFF0C\u60A8\u5FC5\u9808\u70BA\u76EE\u6A19\u958B\u767C\u677F\u7DE8\u8B6F\u7A0B\u5F0F\u78BC\u3002 TouchGFX\u652F\u63F4\u7684\u7DE8\u8B6F\u5668\u6709IAR\u3001ARMCC\u3001ARMCLANG\u548CGCC (STM32CubeIDE)\u3002 \u70BATouchGFX\u5C08\u6848\u9078\u64C7\u7684\u5DE5\u5177\u93C8\u5728STM32CubeMX\u4E2D\u914D\u7F6E\uFF0C\u6240\u4EE5\u5982\u679C\u60A8\u8981\u9032\u884C\u66F4\u6539\uFF0C\u5247\u61C9\u5728STM32CubeMX\u4E2D\u6253\u958BTouchGFX project .ioc\u6587\u4EF6\uFF0C\u4E26\u66F4\u6539\u5DE5\u5177\u93C8\u8A2D\u7F6E\u3002 \u5728TouchGFX Designer\u4E2D\u9078\u64C7\u958B\u767C\u7248\u8A2D\u7F6E\uFF08TBS\uFF09\u6642\u8981\u9810\u5148\u9078\u64C7\u4E00\u500B\u5DE5\u5177\u93C8\uFF0C\u56E0\u6B64\u60A8\u53EA\u80FD\u627E\u5230\u57FA\u65BC\u4E00\u500B\u5DE5\u5177\u93C8\u7684\u5C08\u6848\u6A94\u6848\u3002 \u7531\u65BCAT\u8207.ioc\u6A94\u662F\u914D\u5408\u7684\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5C07\u5176\u6253\u958B\u4E26\u66F4\u6539\u5DE5\u5177\u93C8\uFF0C\u4EE5\u9069\u61C9\u5C08\u6848\u9700\u6C42\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);