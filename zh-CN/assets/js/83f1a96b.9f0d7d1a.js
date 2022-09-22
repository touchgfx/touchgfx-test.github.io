"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2211],{

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

/***/ 83833:
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
  title: "\u5F00\u53D1\u7B80\u4ECB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/development-introduction",
  "id": "development/development-introduction",
  "title": "\u5F00\u53D1\u7B80\u4ECB",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",
  "sourceDirName": "development",
  "slug": "/development/development-introduction",
  "permalink": "/4.20/zh-CN/docs/development/development-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "development-introduction",
    "title": "\u5F00\u53D1\u7B80\u4ECB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5185\u5B58\u4F7F\u7528",
    "permalink": "/4.20/zh-CN/docs/basic-concepts/memory-usage"
  },
  "next": {
    "title": "\u786C\u4EF6\u9009\u62E9\u4ECB\u7ECD",
    "permalink": "/4.20/zh-CN/docs/development/hardware-selection/hardware-selection-introduction"
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
  value: "\u786C\u4EF6\u9009\u62E9",
  id: "hardware-selection",
  level: 2
}, {
  value: "\u539F\u578B\u8BBE\u8BA1",
  id: "prototyping",
  level: 3
}, {
  value: "\u5B9A\u5236\u786C\u4EF6",
  id: "custom-hardware",
  level: 3
}, {
  value: "\u677F\u542F\u52A8\u642D\u5EFA",
  id: "board-bring-up",
  level: 2
}, {
  value: "STM32CubeMX",
  id: "stm32cubemx",
  level: 3
}, {
  value: "TouchGFX\u677F\u5361\u8BBE\u7F6E\uFF08TBS\uFF09",
  id: "application-templates-ats",
  level: 3
}, {
  value: "TouchGFX AL\u5F00\u53D1",
  id: "touchgfx-al-development",
  level: 2
}, {
  value: "TouchGFX Generator",
  id: "touchgfx-generator",
  level: 3
}, {
  value: "UI\u5F00\u53D1",
  id: "ui-development",
  level: 2
}, {
  value: "TouchGFX Designer",
  id: "touchgfx-designer",
  level: 3
}, {
  value: "TouchGFX\u677F\u5361\u8BBE\u7F6E",
  id: "application-templates",
  level: 3
}, {
  value: "\u6F14\u793A\u548C\u793A\u4F8B",
  id: "ui-templates",
  level: 3
}, {
  value: "\u5B9A\u5236\u786C\u4EF6",
  id: "custom-hardware-1",
  level: 3
}, {
  value: "\u5DE5\u4F5C\u6D41\u7A0B",
  id: "workflow",
  level: 2
}, {
  value: "\u751F\u6210\u7684\u4EE3\u7801\u548C\u7528\u6237\u4EE3\u7801",
  id: "generated-code-and-user-code",
  level: 3
}, {
  value: "\u66F4\u6539\u7F16\u8BD1\u5668/IDE",
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
  }), `\u4E3B\u8981\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E2ATouchGFX\u9879\u76EE\u4F1A\u6D89\u53CA\u5230\u5F00\u53D1\u9636\u6BB5\u7684\u4E00\u7CFB\u5217\u64CD\u4F5C\u3002 \u6BCF\u4E2A\u64CD\u4F5C\u7684\u5DE5\u4F5C\u91CF\u53D6\u51B3\u4E8E\u9879\u76EE\u7684\u76EE\u6807\u3002 \u5982\u679C\u60A8\u6B63\u5728\u6267\u884CUI\u539F\u578B\u8BBE\u8BA1\uFF0C\u5219\u5E94\u7528\u7A0B\u5E8F\u7684\u4E3B\u8981\u90E8\u5206\u53EF\u4F7F\u7528\u9884\u5236\u4EE3\u7801\uFF0C\u4EE5\u8DF3\u8FC7\u5927\u591A\u6570\u6B65\u9AA4\uFF0C\u4ECE\u800C\u52A0\u5FEB\u9879\u76EE\u5F00\u53D1\u901F\u5EA6\u3002 \u5982\u679C\u60A8\u57FA\u4E8E\u5B9A\u5236\u677F\u6765\u5B8C\u6210\u6574\u4E2A\u9879\u76EE\uFF0C\u60A8\u5C06\u5728\u9879\u76EE\u5F00\u53D1\u4E2D\u6D89\u53CA\u6240\u6709\u8FD9\u4E9B\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-activities.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX\u9879\u76EE\u7684\u4E3B\u8981\u64CD\u4F5C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "main-components"
  }), `\u4E3B\u8981\u90E8\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u7684TouchGFX\u9879\u76EE\u7531\u4E94\u4E2A\u4E3B\u8981\u7684\u786C\u4EF6\u548C\u8F6F\u4EF6\u90E8\u4EF6\u7EC4\u6210\u3002 \u6BCF\u4E2A\u64CD\u4F5C\u90FD\u4F1A\u4E3A\u60A8\u7684TouchGFX\u9879\u76EE\u751F\u6210\u4E00\u4E2A\u4E3B\u8981\u90E8\u4EF6\u3002 TouchGFX Engine\u4E0D\u662F\u4EFB\u4F55\u4E3B\u8981\u64CD\u4F5C\u7684\u8F93\u51FA\uFF0C\u800C\u662FTouchGFX\u9879\u76EE\u7684\u8D77\u70B9\uFF0C\u5728\u4E0B\u8F7D\u548C\u5B89\u88C5\u540E\u5373\u53EF\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-components.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX\u9879\u76EE\u7684\u4E3B\u8981\u90E8\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EE5\u4E0B\u5404\u8282\u5C06\u6982\u8FF0\u6BCF\u4E2A\u64CD\u4F5C\u53CA\u90E8\u4EF6\u3002 \u672C\u7AE0\u5176\u4F59\u5404\u8282\u5C06\u8FDB\u4E00\u6B65\u8BE6\u7EC6\u63CF\u8FF0\u6BCF\u4E2A\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-selection"
  }), `\u786C\u4EF6\u9009\u62E9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-004.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u662FTouchGFX\u9879\u76EE\u4E2D\u7684\u521D\u59CB\u9879\u3002 \u9009\u62E9\u8981\u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u7684\u786C\u4EF6\u3002 \u786E\u5B9A\u6240\u9700\u7684\u786C\u4EF6\u7EC4\u4EF6\uFF0C\u5E76\u5F04\u6E05\u8FD9\u4E9B\u786C\u4EF6\u5BF9TouchGFX\u5E94\u7528\u7A0B\u5E8F\u7684\u5F71\u54CD\u3002 \u5B8C\u6210\u6B64\u6B65\u540E\uFF0C\u60A8\u5C31\u62E5\u6709\u4E86\u4E00\u4E2A\u53EF\u7528\u4E8ETouchGFX\u9879\u76EE\u7684\u663E\u793A\u677F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "prototyping"
  }), `\u539F\u578B\u8BBE\u8BA1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u6267\u884CUI\u539F\u578B\u8BBE\u8BA1\uFF0C STM32\u8BC4\u4F30\u5957\u4EF6\u5219\u662F\u5FEB\u901F\u542F\u52A8\u5E76\u8FD0\u884C\u7684\u7406\u60F3\u4E4B\u9009\u3002 \u8FD9\u91CC\u65E0\u9700\u8003\u8651\u786C\u4EF6\u7EC4\u4EF6\u3001\u4E0D\u540C\u7EC4\u4EF6\u95F4\u7684\u8FDE\u63A5\u6216\u7C7B\u4F3C\u95EE\u9898\u3002 \u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u786C\u4EF6\u9009\u62E9\u64CD\u4F5C\u53EA\u9700\u57FA\u4E8EMCU\u6027\u80FD\u3001\u5B58\u50A8\u5668\u8BBE\u7F6E\u548C\u663E\u793A\u5668\u5C3A\u5BF8\u65B9\u9762\u9009\u62E9\u6700\u8D34\u8FD1\u60A8\u7684\u6700\u7EC8\u4EA7\u54C1\u7684STM32\u8BC4\u4F30\u5957\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware"
  }), `\u5B9A\u5236\u786C\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u8981\u521B\u5EFA\u81EA\u5DF1\u7684\u786C\u4EF6\u89E3\u51B3\u65B9\u6848\uFF0C\u9009\u62E9\u5F88\u591A\uFF0C\u540C\u65F6\u8981\u8003\u8651\u7684\u95EE\u9898\u4E5F\u591A\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `\u786C\u4EF6\u9009\u62E9`), `\u5C06\u5E2E\u52A9\u60A8\u5B8C\u6210\u6B64\u4EFB\u52A1\u3001\u56DE\u7B54\u8BB8\u591A\u95EE\u9898\uFF0C\u5E76\u63CF\u8FF0\u60A8\u7684\u9009\u62E9\u5982\u4F55\u5F71\u54CDTouchGFX\u5E94\u7528\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u5E38\u76F4\u5230\u9879\u76EE\u5F00\u53D1\u540E\u671F\uFF0C\u5C06\u4E0D\u4F1A\u6709\u5B8C\u5907\u7684\u6700\u7EC8\u786C\u4EF6\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u901A\u5E38\u4F1A\u9009\u62E9\u4E00\u4E2A\u7C7B\u4F3C\u4E8E\u6700\u7EC8\u677F\u5B50\u7684STM32\u8BC4\u4F30\u5957\u4EF6\uFF0C\u5E76\u5728UI\u5F00\u53D1\u7684\u7B2C\u4E00\u6B65\u4E2D\u4F7F\u7528\u8BE5\u5957\u4EF6\u3002 \u5982\u679C\u60A8\u6CA1\u6709\u8FD9\u6837\u7684\u677F\uFF0C\u4E5F\u53EF\u4EE5\u53EA\u4F7F\u7528\u5728PC\u4E0A\u8FD0\u884C\u7684TouchGFX Simulator\u6765\u5F00\u59CB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u5173\u6B64\u6B65\u9AA4\u7684\u5B8C\u6574\u8BF4\u660E\uFF0C\u8BF7\u53C2\u89C1<`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `\u786C\u4EF6\u9009\u62E9`), `\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "board-bring-up"
  }), `\u677F\u542F\u52A8\u642D\u5EFA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-003.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u662F\u4E00\u9879\u8BA9TOUCHGFX\u8FD0\u884C\u4E8E\u4F60\u677F\u4E0A\u7684\u4E2D\u5FC3\u4EFB\u52A1\u3002 \u8F93\u51FA\u7EC4\u4EF6\u88AB\u79F0\u4E3A\u677F\u7EA7\u521D\u59CB\u5316\u4EE3\u7801\uFF0C\u662F\u4E9B\u901A\u7528\u521D\u59CB\u5316\u4EE3\u7801\uFF0C\u7528\u4E8E\u8BBE\u7F6EMCU\u53CA\u6240\u6709\u5916\u8BBE\uFF0C\u4E3A\u6267\u884C\u5E94\u7528\u7A0B\u5E8F\u505A\u51C6\u5907\u3002 \u8BE5\u521D\u59CB\u5316\u4EE3\u7801\u72EC\u7ACB\u4E8ETouchGFX\uFF0C\u4EC5\u5904\u7406\u7EAF\u786C\u4EF6\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubemx"
  }), `STM32CubeMX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BE5\u64CD\u4F5C\u7684\u4E3B\u8981\u5DE5\u5177\u662FSTM32CubeMX\u3002 \u5B83\u53EF\u4EE5\u5E2E\u52A9\u60A8\u914D\u7F6EMCU\u5E76\u751F\u6210\u57FA\u7840\u6027\u7684\u542F\u52A8\u4EE3\u7801\u3002 \u5BF9\u4E8E\u5916\u8BBE\uFF08\u5982\u5916\u90E8RAM\u548C\u663E\u793A\u5668\uFF09\uFF0C\u60A8\u5C06\u81EA\u884C\u6DFB\u52A0\u521D\u59CB\u5316\u4EE3\u7801\u548C\u7279\u5B9A\u5916\u8BBE\u9A71\u52A8\u7A0B\u5E8F\u3002 \u4E5F\u53EF\u4EE5\u5728\u4E0D\u4F7F\u7528STM32CubeMX\u7684\u60C5\u51B5\u4E0B\u5B8C\u6210\u6574\u4E2A\u677F\u7684\u521D\u59CB\u5316\u4EE3\u7801\uFF0C\u4E0D\u8FC7\u8FD9\u9700\u8981\u60A8\u5BF9STM32\u548C\u642D\u5EFA\u542F\u52A8\u5F00\u53D1\u677F\u5177\u5907\u4E13\u5BB6\u7EA7\u6C34\u51C6\uFF0C\u5426\u5219\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates-ats"
  }), `TouchGFX\u677F\u5361\u8BBE\u7F6E\uFF08TBS\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u6267\u884CUI\u539F\u578B\u8BBE\u8BA1\u6216\u53EA\u60F3\u5C1D\u8BD5TouchGFX\uFF0C\u5219\u60A8\u53EF\u4EE5\u8BA9\u5E94\u7528\u7A0B\u5E8F\u57FA\u4E8ETouchGFX Designer\u4E2D\u7684STM32\u6807\u51C6\u8BC4\u4F30\u5957\u4EF6\u4E2D\u7684\u67D0\u4E2A\u73B0\u6709TouchGFX\u677F\u5361\u8BBE\u7F6E\uFF08TBS\uFF09\u6765\u8FDB\u884C\u3002 \u8FD9\u5305\u62EC\u6240\u9700\u7684\u6240\u6709\u677F\u7EA7\u521D\u59CB\u5316\u4EE3\u7801\u3002 TBS\u57FA\u4E8ESTM32CubeMX\u914D\u7F6E\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u60F3\u5C1D\u8BD5\u6216\u6DFB\u52A0\u5BF9\u66F4\u591A\u5916\u8BBE\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u5219\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u5173\u6B64\u6B65\u9AA4\u7684\u5B8C\u6574\u8BF4\u660E\uFF0C\u8BF7\u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "board-bring-up/board-introduction"
  }), `\u5F00\u53D1\u677F\u642D\u5EFA\u542F\u52A8`), `\u7AE0\u8282\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-al-development"
  }), `TouchGFX AL\u5F00\u53D1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-002.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u662FTouchGFX Engine\u5728\u5B8C\u5168\u521D\u59CB\u5316\u8FC7\u7684\u663E\u793A\u677F\uFF08\u663E\u793A\u677F + \u677F\u521D\u59CB\u5316\u4EE3\u7801\uFF09\u4E0A\u8FD0\u884C\u7684\u5173\u952E\u3002 \u8F93\u51FA\u7EC4\u4EF6\u88AB\u79F0\u4E3ATouchGFX\u62BD\u8C61\u5C42\uFF08AL\uFF09\uFF0C\u8FD9\u662F\u4E00\u4E2A\u8F6F\u4EF6\u5C42\uFF0C\u662F\u786C\u4EF6\u7684\u62BD\u8C61\uFF0C\u5E76\u4F7FTouchGFX Engine\u53EF\u5728\u60A8\u7684\u5F00\u53D1\u677F\u4E0A\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-generator"
  }), `TouchGFX Generator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u7684\u4E3B\u8981\u5DE5\u5177\u662FTouchGFX Generator\uFF0C\u8FD9\u662F\u4E00\u4E2ASTM32CubeMX\u63D2\u4EF6\uFF0C\u8BE5\u63D2\u4EF6\u8BA9\u60A8\u914D\u7F6E\u5E76\u751F\u6210\u5927\u591A\u6570TouchGFX AL\u4EE3\u7801\u3002 \u60A8\u4E5F\u5F88\u53EF\u80FD\u81EA\u884C\u7F16\u5199TouchGFX AL\u4EE3\u7801\u4E2D\u7684\u67D0\u4E9B\u90E8\u5206\u3002 TouchGFX Generator\u901A\u8FC7\u521B\u5EFA\u8981\u5B9E\u73B0\u7684\u7A7A\u51FD\u6570\u6765\u5E2E\u52A9\u60A8\u5B8C\u6210\u6B64\u6B65\u9AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u7279\u522B\u6CE8\u610F\uFF0C\u4E3A\u4F7FTouchGFX AL\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u6B63\u786E\u5B8C\u6210\u677F\u7EA7\u521D\u59CB\u5316\u4EE3\u7801\u5E76\u6B63\u786E\u914D\u7F6EMCU\u3001\u5916\u90E8RAM\u3001\u663E\u793A\u5668\u7B49\u975E\u5E38\u91CD\u8981\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u6267\u884CUI\u539F\u578B\u8BBE\u8BA1\u6216\u53EA\u60F3\u5C1D\u8BD5TouchGFX\uFF0C\u5219\u60A8\u53EF\u4EE5\u8BA9\u5E94\u7528\u7A0B\u5E8F\u57FA\u4E8ETouchGFX Designer\u4E2D\u7684STM32\u6807\u51C6\u8BC4\u4F30\u5957\u4EF6\u4E2D\u7684\u67D0\u4E2A\u73B0\u6709TouchGFX\u677F\u5361\u8BBE\u7F6E\uFF08TBS\uFF09\u6765\u8FDB\u884C\u3002 \u8FD9\u5305\u62EC\u60A8\u9700\u8981\u7684\u6240\u6709TouchGFX AL\u4EE3\u7801\u3002 TBS\u57FA\u4E8ECubeMX\u548CTouchGFX Generator\u914D\u7F6E\uFF0C\u5982\u679C\u60A8\u4EE5\u540E\u60F3\u505A\u5B9E\u9A8C\uFF0C\u5219\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u5173\u6B64\u6B65\u9AA4\u7684\u5B8C\u6574\u8BF4\u660E\uFF0C\u8BF7\u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `TouchGFX AL\u5F00\u53D1`), `\u7AE0\u8282\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ui-development"
  }), `UI\u5F00\u53D1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-000.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u53EF\u80FD\u4F1A\u5728\u6B64\u64CD\u4F5C\u4E2D\u82B1\u8D39\u5927\u90E8\u5206\u7684\u9879\u76EE\u5F00\u53D1\u65F6\u95F4\u3002 \u60A8\u5C06\u5728\u8FD9\u91CC\u521B\u5EFA\u7528\u6237\u754C\u9762\u4EE3\u7801\uFF0C\u8BE5\u4EE3\u7801\u5C06\u6784\u6210TouchGFX\u9879\u76EE\u7684\u53EF\u89C6\u90E8\u5206\uFF0C\u8BE5\u7EC4\u4EF6\u88AB\u79F0\u4E3ATouchGFX UI\u5E94\u7528\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer"
  }), `TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u64CD\u4F5C\u7684\u4E3B\u8981\u5DE5\u5177\u662FTouchGFX Designer\u4EE5\u53CA\u60A8\u6700\u559C\u7231\u7684IDE\u6216\u6587\u672C\u7F16\u8F91\u5668\u3002 \u5728TouchGFX Designer\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u8BBE\u7F6E\u3001\u8BBE\u8BA1\u548C\u521B\u5EFA\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u89C6\u7A97\uFF0C\u5E76\u7528C++\u4EE3\u7801\u751F\u6210UI\u5E94\u7528\u7A0B\u5E8F\u7684\u4E3B\u8981\u90E8\u5206\u3002 \u5BF9\u4E8E\u5E94\u7528\u7A0B\u5E8F\u903B\u8F91\uFF08\u5904\u7406\u4E8B\u4EF6\uFF0C\u4E0E\u7CFB\u7EDF\u7684\u975EUI\u90E8\u5206\u8FDB\u884C\u901A\u4FE1\uFF09\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528IDE\u6216\u6587\u672C\u7F16\u8F91\u5668\u7F16\u5199C++\u4EE3\u7801\uFF0C\u8BE5\u4EE3\u7801\u4E0ETouchGFX Designer\u751F\u6210\u7684\u4EE3\u7801\u4EA4\u4E92\u5171\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-screen-4.17.png",
    noShadow: true,
    width: "300",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates"
  }), `TouchGFX\u677F\u5361\u8BBE\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u6B63\u5728\u6267\u884CUI\u539F\u578B\u8BBE\u8BA1\uFF0C\u6216\u53EA\u662F\u60F3\u5C1D\u8BD5TouchGFX\uFF0C\u800C\u4E0D\u5E0C\u671B\u82B1\u65F6\u95F4\u505A\u5176\u4ED6\u64CD\u4F5C\uFF0C\u5219\u60A8\u53EF\u4EE5\u57FA\u4E8EPC\u4E0A\u7684TouchGFX Simulator\u6765\u5F00\u53D1\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4E5F\u53EF\u57FA\u4E8E\u67D0\u4E2A\u6807\u51C6STM32\u8BC4\u4F30\u5957\u4EF6\u4E2D\u7684\u73B0\u6709TouchGFX\u677F\u5361\u8BBE\u7F6E\uFF08TBS\uFF09\u6765\u64CD\u4F5C\u3002 \u65E0\u8BBA\u5982\u4F55\uFF0C\u60A8\u90FD\u53EF\u4EE5\u7ACB\u5373\u7740\u624B\u5F00\u53D1UI\u5E94\u7528\u7A0B\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ui-templates"
  }), `\u6F14\u793A\u548C\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u53EA\u662F\u60F3\u8FD0\u884C\u67D0\u4E9B\u5E94\u7528\u7A0B\u5E8F\u6216\u56E0\u6B64\u627E\u4E9B\u542F\u53D1\uFF0C\u5219\u5728TouchGFX Designer\u4E2D\u521B\u5EFA\u65B0\u9879\u76EE\u65F6\uFF0C\u53EF\u4EE5\u9009\u62E9\u5176\u4E2D\u67D0\u4E2ATouchGFX\u793A\u4F8B\u6765\u5F00\u59CB\u3002 \u5982\u679C\u8FD9\u6837\u7684\u8BDD\uFF0C\u53EA\u9700\u7F16\u8BD1\u3001\u70E7\u5199\u4EE3\u7801\u5E76\u8FD0\u884C\uFF0C\u65E0\u987B\u5176\u5B83\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware-1"
  }), `\u5B9A\u5236\u786C\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u5DF2\u7ECF\u5B8C\u6210\u6240\u6709\u5176\u4ED6\u64CD\u4F5C\uFF0C\u5373\u5DF2\u7ECF\u4E3ATouchGFX\u5E94\u7528\u7A0B\u5E8F\u51C6\u5907\u597D\u4E86\u8FD0\u884C\u677F\uFF0C\u5219\u60A8\u53EF\u4EE5\u4ECE\u5934\u5F00\u59CB\uFF0C\u6216\u57FA\u4E8E\u67D0\u4E2A\u73B0\u6709\u793A\u4F8B\u5F00\u59CB\u3002 \u5982\u679C\u5B9A\u5236\u677F\u7684\u5206\u8FA8\u7387\u4E0E\u793A\u4F8B\u4E00\u81F4\uFF0C\u5219\u793A\u4F8B\u4E5F\u5E94\u8BE5\u80FD\u5728\u60A8\u7684\u5B9A\u5236\u677F\u4E0A\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u5173\u6B64\u6B65\u9AA4\u7684\u5B8C\u6574\u8BF4\u660E\uFF0C\u8BF7\u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "ui-development/ui-development-introduction"
  }), `UI\u5F00\u53D1`), `\u7AE0\u8282\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "workflow"
  }), `\u5DE5\u4F5C\u6D41\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u60A8\u6240\u89C1\uFF0CTouchGFX\u5F00\u53D1\u6D89\u53CA\u8BB8\u591A\u64CD\u4F5C\u548C\u5DE5\u5177\u3002 \u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u60A8\u65E0\u9700\u4E00\u6B21\u6027\u5B8C\u6210\u6240\u6709\u64CD\u4F5C\uFF0C\u800C\u4E14\u5728\u5F00\u59CB\u8FDB\u884CUI\u5F00\u53D1\u4E4B\u524D\uFF0C\u4E0D\u4E00\u5B9A\u9700\u8981\u4F7F\u7528\u663E\u793A\u677F\u3001\u677F\u7EA7\u521D\u59CB\u5316\u4EE3\u7801\u548CTouchGFX AL\u3002 \u53EF\u4F7F\u7528STM32\u8BC4\u4F30\u5957\u4EF6\u6216TouchGFX Simulator\u6765\u5B8C\u6210\u8FD9\u4E9B\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",
    noShadow: true,
    width: "700",
    mdxType: "Figure"
  }, "TouchGFX Designer\u5DE5\u4F5C\u6D41\u7A0B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code-and-user-code"
  }), `\u751F\u6210\u7684\u4EE3\u7801\u548C\u7528\u6237\u4EE3\u7801`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5F00\u53D1\u677F\u642D\u5EFA\u542F\u52A8\u3001TouchGFX AL\u5F00\u53D1\u548CUI\u5F00\u53D1\u6240\u9700\u7684\u4E09\u4E2A\u8F6F\u4EF6\u64CD\u4F5C\u4E2D\uFF0C\u60A8\u5C06\u4F7F\u7528\u5DE5\u5177\u6765\u751F\u6210\u4EE3\u7801\u3002 \u8FD9\u4E9B\u5DE5\u5177\u7684\u5171\u540C\u70B9\u662F\u5B83\u4EEC\u4E0D\u4F1A\u751F\u6210\u60A8\u6240\u9700\u7684\u6240\u6709\u4EE3\u7801\uFF0C\u60A8\u8FD8\u5C06\u5728\u9879\u76EE\u4E2D\u6DFB\u52A0\u7279\u5B9A\u7528\u6237\u4EE3\u7801\u3002 \u5BF9\u4E8E\u8FD9\u4E09\u79CD\u5DE5\u5177\uFF0C\u60A8\u53EF\u4EE5\u5728\u4F7F\u7528\u5DE5\u5177\u548C\u7F16\u5199\u4EE3\u7801\u4E4B\u95F4\u6765\u56DE\u5207\u6362\u3002 \u5DE5\u5177\u751F\u6210\u7684\u4EE3\u7801\u548C\u7528\u6237\u4EE3\u7801\u662F\u72EC\u7ACB\u7684\uFF0C\u5E76\u53EF\u4EE5\u5206\u522B\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6709\u65F6\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u5728\u4E0D\u540C\u64CD\u4F5C\u4E4B\u95F4\u6765\u56DE\u5207\u6362\uFF0C\u56E0\u6B64\u9700\u8981\u4F7F\u7528\u4E0D\u540C\u7684\u5DE5\u5177\u3002 \u5728\u8FDB\u884CTouchGFX AL\u5F00\u53D1\u65F6\uFF0C\u60A8\u901A\u5E38\u4F1A\u4F7F\u7528\u975E\u5E38\u7B80\u5355\u7684TouchGFX UI\u6765\u6D4B\u8BD5TouchGFX AL\u3002 \u800C\u4E14\uFF0C\u5728\u4E0D\u540C\u64CD\u4F5C\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u6CA1\u6709\u95EE\u9898\uFF0C\u5DE5\u5177\u3001\u751F\u6210\u4EE3\u7801\u548C\u60A8\u7684\u7528\u6237\u4EE3\u7801\u5171\u5B58\uFF0C\u5E76\u5728\u66F4\u65B0\u65F6\u4E0D\u4F1A\u51FA\u73B0\u4EFB\u4F55\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "change-of-compileride"
  }), `\u66F4\u6539\u7F16\u8BD1\u5668/IDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u4E9B\u64CD\u4F5C\u4E2D\uFF0C\u60A8\u5FC5\u987B\u4E3A\u76EE\u6807\u677F\u7F16\u8BD1\u4EE3\u7801\u3002 TouchGFX\u652F\u6301\u7684\u7F16\u8BD1\u5668\u6709IAR\u3001ARMCC\u3001ARMCLANG\u548CGCC(STM32CubeIDE)\u3002 \u4E3ATouchGFX\u9879\u76EE\u9009\u62E9\u7684\u5DE5\u5177\u94FE\u5728STM32CubeMX\u4E2D\u914D\u7F6E\uFF0C\u6240\u4EE5\u5982\u679C\u60A8\u8981\u8FDB\u884C\u66F4\u6539\uFF0C\u5219\u5E94\u5728STM32CubeMX\u4E2D\u6253\u5F00TouchGFX project .ioc\u6587\u4EF6\uFF0C\u5E76\u66F4\u6539\u5DE5\u5177\u94FE\u8BBE\u7F6E\u3002 \u5728TouchGFX Designer\u4E2D\u9009\u62E9\u677F\u4EF6\u8BBE\u7F6E\uFF08TBS\uFF09\u65F6\u8981\u9884\u5148\u9009\u62E9\u4E00\u4E2A\u5DE5\u5177\u94FE\uFF0C\u56E0\u6B64\u60A8\u53EA\u80FD\u627E\u5230\u57FA\u4E8E\u4E00\u4E2A\u5DE5\u5177\u94FE\u7684\u9879\u76EE\u6587\u4EF6\u3002 \u7531\u4E8EAT\u4E0E.ioc\u6587\u4EF6\u662F\u914D\u5957\u7684\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5C06\u5176\u6253\u5F00\u5E76\u66F4\u6539\u5DE5\u5177\u94FE\uFF0C\u4EE5\u9002\u5E94\u9879\u76EE\u9700\u6C42\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);