"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1871],{

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

/***/ 38379:
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
  title: "TouchGFX\u5F00\u53D1\u7B80\u4ECB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "id": "development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "title": "TouchGFX\u5F00\u53D1\u7B80\u4ECB",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-al-development-introduction",
    "title": "TouchGFX\u5F00\u53D1\u7B80\u4ECB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "11. \u95EA\u5B58\u4E0B\u8F7D",
    "permalink": "/4.20/zh-CN/docs/development/board-bring-up/how-to/11-flash-loader"
  },
  "next": {
    "title": "\u62BD\u8C61\u5C42\u67B6\u6784",
    "permalink": "/4.20/zh-CN/docs/development/touchgfx-hal-development/touchgfx-architecture"
  }
};
const assets = {};



const toc = [{
  value: "\u62BD\u8C61\u5C42\u7684\u804C\u8D23",
  id: "responsibilities-of-the-abstraction-layer",
  level: 2
}, {
  value: "\u793A\u4F8B\u8BBE\u7F6E: \u4E24\u4E2A\u5E27\u7F13\u5B58\u5E76\u5185\u7F6ELTDC\u7684MCU",
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
  }, "\u9879\u76EE\u6D3B\u52A8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684TouchGFX\u62BD\u8C61\u5C42\uFF08AL\uFF09\u662F\u4F4D\u4E8E\u677F\u542F\u52A8\u9636\u6BB5\u5F00\u53D1\u7684\u677F\u7EA7\u521D\u59CB\u5316\u4EE3\u7801\u4E0ETouchGFX Engine\u4E4B\u95F4\u7684\u8F6F\u4EF6\u7EC4\u4EF6\u3002 \u5176\u4E3B\u8981\u4EFB\u52A1\u662F\u5C06\u5F15\u64CE\u4E0E\u5E95\u5C42\u786C\u4EF6\u548C\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u7ED3\u5408\u3002 \u8FD9\u901A\u8FC7\u62BD\u8C61\u5E95\u5C42\u786C\u4EF6\u548C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7279\u6027\u6765\u5B8C\u6210\uFF0C\u4EE5\u4FBF\u5F15\u64CE\u53EF\u5BF9\u5176\u8FDB\u884C\u7EDF\u4E00\u8BBF\u95EE\u53CA\u5904\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AL\u7531\u4E24\u4E2A\u4E0D\u540C\u7684\u90E8\u5206\u7EC4\u6210\uFF0C\u5206\u522B\u4E3A\u786C\u4EF6\u62BD\u8C61\u5C42\uFF08HAL\uFF09\u548C\u64CD\u4F5C\u7CFB\u7EDF\u62BD\u8C61\u5C42\uFF08OSAL\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/components-selected-002.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u9879\u76EE\u7EC4\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u5C06\u6982\u8FF0\u62BD\u8C61\u5C42\u7684\u539F\u7406\u548C\u804C\u8D23\uFF0C\u4EE5\u53CA\u5B83\u4E0ETouchGFX Engine\u7684\u4EA4\u4E92\u65B9\u5F0F\u3002 \u4EE5\u4E0B\u5404\u8282\u4ECB\u7ECD\u4E86\u5982\u4F55\u9488\u5BF9\u7279\u5B9A\u786C\u4EF6\u5B9E\u73B0\u4E0A\u8FF0\u76EE\u7684\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    items: (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */ .jA)().items,
    mdxType: "DocCardList"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "responsibilities-of-the-abstraction-layer"
  }), `\u62BD\u8C61\u5C42\u7684\u804C\u8D23`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u5728\u57FA\u672C\u6982\u5FF5\u7AE0\u8282\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../basic-concepts/rendering"
  }), `\u4E3B\u5FAA\u73AF`), `\u90E8\u5206\u6240\u8FF0\uFF0CTouchGFX Engine\u5177\u6709\u6267\u884C\u4E09\u4E2A\u57FA\u672C\u6B65\u9AA4\u7684\u4E3B\u5FAA\u73AF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6536\u96C6\u8F93\u5165\uFF08\u89E6\u6478\u5750\u6807\u3001\u6309\u94AE\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u66F4\u65B0\u573A\u666F\u6A21\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5C06\u573A\u666F\u6A21\u578B\u6E32\u67D3\u5230\u5E27\u7F13\u5B58`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u4E09\u4E2A\u6B65\u9AA4\u4E3A\u5C65\u884CTouchGFX Engine\u7684\u4E3B\u8981\u804C\u8D23\u63D0\u4F9B\u4E86\u4FDD\u969C\uFF0C\u5373\u901A\u8FC7\u66F4\u65B0\u5E27\u7F13\u5B58\u6765\u63ED\u793A\u5E94\u7528\u7A0B\u5E8F\u7684\u5F53\u524D\u72B6\u6001\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5E27\u7F13\u5B58\u6570\u636E\u5230\u663E\u793A\u5668\u7684\u5B9E\u9645\u4F20\u8F93\u4EE5\u53CA\u5BF9\u5916\u90E8\u8F93\u5165\u7684\u6536\u96C6\u5E76\u975E\u7531\u5F15\u64CE\u76F4\u63A5\u5904\u7406\uFF0C\u800C\u540E\u7531\u5F15\u64CE\u59D4\u6258\u7ED9TouchGFX AL\u5B9E\u73B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u5FAA\u73AF\u5C06\u53CD\u590D\u4E0D\u65AD\u5730\u66F4\u65B0\u5E27\u7F13\u5B58\u6570\u636E\u3002 \u6B64\u8FC7\u7A0B\u5FC5\u987B\u4E0E\u5B9E\u9645\u66F4\u65B0\u9891\u7387\u548C\u663E\u793A\u5668\u5C31\u7EEA\u72B6\u6001\u4FDD\u6301\u540C\u6B65\uFF0C\u4EE5\u786E\u4FDD\u6240\u6709\u5E27\u5747\u88AB\u4F20\u8F93\u5E76\u663E\u793A\u5728\u663E\u793A\u5668\u4E0A\u3002 \u5982\u679C\u6CA1\u6709\u53D1\u751F\u540C\u6B65\uFF0C\u5219\u4E3B\u5FAA\u73AF\u5C06\u4E0D\u65AD\u66F4\u65B0\uFF0C\u5E76\u6709\u53EF\u80FD\u5728\u4F20\u8F93\u4E4B\u524D\u8986\u76D6\u5E27\u7F13\u5B58\u3002 \u6B64\u540C\u6B65\u7531AL\u8D1F\u8D23\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX AL\u8FD8\u8D1F\u8D23\u63A7\u5236\u548C\u8BBF\u95EE\u5E27\u7F13\u51B2\u5B58\u50A8\u533A\u3002 \u8FD9\u610F\u5473\u7740\u5E27\u7F13\u51B2\u7684\u6240\u6709\u8BBF\u95EE\u90FD\u901A\u8FC7AL\u8FDB\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5177\u4F53\u800C\u8A00\uFF0CTouchGFX AL\u7684\u804C\u8D23\u4E3A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u804C\u8D23`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BF4\u660E`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C06TouchGFX Engine\u4E3B\u5FAA\u73AF\u4E0E\u663E\u793A\u5668\u4F20\u8F93\u540C\u6B65`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F53\u4E0B\u4E00\u5E27\u5DF2\u8BA1\u7B97\u5E76\u5728\u53EF\u7528\u7684\u5E27\u7F13\u5B58\u4E2D\u6E32\u67D3\u65F6\uFF0C\u5F15\u64CE\u4E3B\u5FAA\u73AF\u5FC5\u987B\u505C\u6B62\uFF0C\u4ECE\u800C\u786E\u4FDD\u66F4\u65B0\u7684\u5E27\u7F13\u5B58\u5185\u5BB9\u5728\u88AB\u4F20\u8F93\u5230\u663E\u793A\u5668\u4E4B\u524D\u4E0D\u4F1A\u88AB\u8986\u76D6\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u62A5\u544A\u89E6\u6478\u4E0E\u7269\u7406\u6309\u94AE\u4E8B\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u901A\u8FC7\u91C7\u6837\u6765\u786E\u5B9A\u89E6\u6478\u4E8B\u4EF6\u7684\u53D1\u751F\u53CA\u5750\u6807\u4FE1\u606F\u7684\u83B7\u53D6\u3002 \u901A\u8FC7\u91C7\u6837\u6765\u786E\u5B9A\u7269\u7406\u6309\u94AE\u6216\u7C7B\u4F3C\u90E8\u5206\u662F\u5426\u88AB\u6FC0\u6D3B\u3002 \u5411\u5F15\u64CE\u62A5\u544A\u8FD9\u4E9B\u4E8B\u4EF6\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u8BF7\u6CE8\u610F\uFF0C\u53EF\u901A\u8FC7\u4E0D\u540C\u7684\u673A\u5236\u5C06\u5176\u4ED6\u5916\u90E8\u4E8B\u4EF6\u4F20\u64AD\u5230TouchGFX\u5E94\u7528\u7A0B\u5E8F\u3002 \u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "../ui-development/touchgfx-engine-features/backend-communication"
  }), `\u540E\u7AEF\u901A\u4FE1`), `\u7AE0\u8282\u4E86\u89E3\u6709\u5173\u8BE5\u4E3B\u9898\u7684\u66F4\u591A\u4FE1\u606F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u540C\u6B65\u5E27\u7F13\u51B2\u8BBF\u95EE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5E27\u7F13\u5B58\u7531TouchGFX AL\u8D1F\u8D23\uFF0C\u7531\u4E8E\u5B83\u53EF\u80FD\u88AB\u4E0D\u540C\u7684\u6267\u884C\u5355\u5143\uFF08\u5982\u4E3B\u5FAA\u73AF\u7EBF\u7A0B\u548CDMA\uFF09\u8BBF\u95EE\uFF0CTouchGFX AL\u5FC5\u987B\u63D0\u4F9B\u4E00\u79CD\u4FDD\u62A4\u8BE5\u5B58\u50A8\u5668\u7684\u65B9\u5F0F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u62A5\u544A\u4E0B\u4E00\u4E2A\u53EF\u7528\u7684\u5E27\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AL\u5FC5\u987B\u80FD\u591F\u56DE\u7B54\u63A5\u4E0B\u6765\u53EF\u66F4\u65B0\u5F53\u524D\u5E27\u7F13\u51B2\u7684\u54EA\u4E00\u90E8\u5206\u3002 \u5728\u6807\u51C6\u7684\u53CC\u5E27\u7F13\u51B2\u8BBE\u7F6E\u4E2D\uFF0C\u59CB\u7EC8\u6709\u4E2A\u5B8C\u6574\u7684\u5E27\u7F13\u51B2\u533A\uFF0C\u56E0\u4E3A\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u59CB\u7EC8\u6709\u4E00\u4E2A\u5B8C\u6574\u7684\u5E27\u7F13\u51B2\u533A\u4E13\u7528\u4E8E\u6E32\u67D3\uFF0C\u53E6\u4E00\u4E2A\u5E27\u7F13\u51B2\u533A\u7528\u4E8E\u5230\u663E\u793A\u5668\u7684\u4F20\u8F93\u3002 \u5728\u5355\u5E27\u7F13\u5B58\u533A\u6216\u90E8\u5206\u5E27\u7F13\u5B58\u8BBE\u7F6E\u4E2D\uFF0C\u60C5\u51B5\u66F4\u590D\u6742\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6267\u884C\u6E32\u67D3\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u6E32\u67D3\u573A\u666F\u6A21\u578B\u65F6\uFF0C\u5F15\u64CE\u4E3B\u5FAA\u73AF\u8BF7\u6C42AL\u6E32\u67D3\u4E00\u90E8\u5206\u3002 \u7279\u5B9ATouchGFX AL\u5B9E\u73B0\u5C06\u5229\u7528\u5E95\u5C42\u786C\u4EF6\u6765\u6E32\u67D3\u56FE\u5F62\u57FA\u5143\u3002 \u4E00\u4E2A\u793A\u4F8B\u4F7F\u7528Chrom-ART\u56FE\u5F62\u52A0\u901F\u5668\u6765\u6E32\u67D3MCU\u4E0A\u7684\u4F4D\u56FE\u3002 TouchGFX\u968F\u9644\u4E13\u4E3A\u6240\u6709\u53EF\u7528\u5E73\u53F0\u800C\u6784\u5EFA\u7684\u4F18\u5316\u6E32\u67D3\u65B9\u6CD5\uFF0C\u56E0\u6B64\u65E0\u9700\u5BF9\u5176\u8FDB\u884C\u5B9A\u5236\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5904\u7406\u5C06\u5E27\u7F13\u51B2\u4F20\u8F93\u5230\u663E\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F15\u64CE\u901A\u77E5AL\u5FC5\u987B\u4F20\u8F93\u54EA\u4E2A\u5E27\u7F13\u51B2\u7684\u54EA\u4E00\u90E8\u5206\u3002 AL\u542F\u52A8\u6B64\u4F20\u8F93\uFF0C\u786E\u4FDD\u50CF\u7D20\u6700\u7EC8\u51FA\u73B0\u5728\u663E\u793A\u5668\u4E0A\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8ETouchGFX AL\u662F\u4E00\u79CD\u6CA1\u6709\u81EA\u8EAB\u7EBF\u7A0B\u6216\u7C7B\u4F3C\u7EBF\u7A0B\u7684\u88AB\u52A8\u8F6F\u4EF6\u6A21\u5757\uFF0C\u56E0\u6B64\u5B83\u5FC5\u987B\u901A\u8FC7\u4ECETouchGFX Engine\u4E3B\u5FAA\u73AF\u8C03\u7528\u7279\u5B9A\u94A9\u5B50\uFF08\u51FD\u6570\uFF09\u6216\u901A\u8FC7\u4E2D\u65AD\u6765\u6267\u884C\u5176\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u7528\u7684\u94A9\u5B50\u548C\u4E2D\u65AD\u96C6\u5982\u4E0B\u6240\u8FF0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u53EF\u7528\u7684\u94A9\u5B50\u548C\u4E2D\u65AD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531AL\u5F00\u53D1\u4EBA\u5458\u6765\u5B9E\u73B0\u8FD9\u4E9B\u94A9\u5B50\uFF0C\u4EE5\u4FBF\u5728\u7ED9\u5B9A\u5E95\u5C42\u786C\u4EF6\u548C\u64CD\u4F5C\u7CFB\u7EDF\u4E0B\u4F53\u73B0AL\u7684\u804C\u80FD\u3002 \u5982\u679CAL\u5F00\u53D1\u4EBA\u5458\u9700\u8981\u5176\u4ED6\u65B9\u6CD5\u6765\u652F\u6301\u804C\u80FD\uFF0C\u5219\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u8BBE\u7F6E\u4E2D\u65AD\uFF0C\u5E76\u5728\u7279\u5B9A\u65F6\u523B\u6FC0\u6D3B\u3002 \u8FD9\u65B9\u9762\u7684\u793A\u4F8B\u901A\u8FC7\u786C\u4EF6\u5B9A\u65F6\u5668\u7ED3\u5408LTDC\u573A\u540C\u6B65\u4E2D\u65AD\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u663E\u793A\u5C31\u7EEA`), `\u4E2D\u65AD\u4E3A\u573A\u540C\u6B65\u4E2D\u65AD\u7684\u4E00\u4E2A\u793A\u4F8B\u3002 \u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E9B\u4E2D\u65AD\u7684\u8BBE\u7F6E\u88AB\u89C6\u4E3AAL\u5F00\u53D1\u7684\u4E00\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example-setup-two-framebuffers---mcu-with-ltdc"
  }), `\u793A\u4F8B\u8BBE\u7F6E: \u4E24\u4E2A\u5E27\u7F13\u5B58\u5E76\u5185\u7F6ELTDC\u7684MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u79CD\u5E38\u89C1\u8BBE\u7F6E\u662F\u4F7F\u7528\u5177\u6709LTDC\u7684MCU\u7684\u4E24\u4E2A\u5E27\u7F13\u5B58\u3002 \u5728\u8BE5\u8BBE\u7F6E\u4E2D\uFF0C\u6BCF\u4E2A\u94A9\u5B50\u7684AL\u64CD\u4F5C\u901A\u5E38\u5982\u4E0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BBE\u7F6EAL\u4EE5\u54CD\u5E94LTDC VSYNC\u4E2D\u65AD\uFF0C\u4EE5\u4FBF\u663E\u793A\u5668\u6BCF\u6B21\u51C6\u5907\u63A5\u6536\u65B0\u5E27\u65F6\u90FD\u6267\u884CI1\u3002 \u8FD9\u7528\u4E8E\u5C06\u4E3B\u5FAA\u73AF\u4E0E\u663E\u793A\u540C\u6B65\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u94A9\u5B50\u548C\u4E2D\u65AD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u52A8\u4F5C`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `I1: \u663E\u793A\u5C31\u7EEA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8BBE\u7F6ELTDC VSYNC\u4E2D\u65AD\uFF0C\u4EE5\u89E6\u53D1\u8BE5\u64CD\u4F5C\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u53D6\u6D88\u963B\u585E\u4E3B\u5FAA\u73AF\uFF0C\u5E76\u542F\u52A8\u5728\u4E0A\u4E00\u5E27\u4E2D\u51C6\u5907\u597D\u7684\u5E27\u7F13\u5B58\u6570\u636E\u4F20\u8F93`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H1: \u62A5\u544A\u89E6\u6478\u4E0E\u7269\u7406\u6309\u94AE\u4E8B\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8FD4\u56DE\u6709\u5173\u89E6\u6478\u4E8B\u4EF6\u6216\u7269\u7406\u6309\u94AE\u5355\u51FB\u7684\u4EFB\u4F55\u4FE1\u606F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H2: \u83B7\u53D6\u4E0B\u4E00\u4E2A\u53EF\u7528\u7684\u5E27\u7F13\u51B2\u533A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F7F\u7528\u53CC\u7F13\u51B2\u8BBE\u7F6E\uFF0C\u53EA\u9700\u8FD4\u56DE\u5F53\u524D\u672A\u4F20\u8F93\u81F3\u663E\u793A\u5668\u7684\u5E27\u7F13\u51B2\u7684\u6574\u4E2A\u5E27\u7F13\u51B2\u533A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H3: \u6267\u884C\u6E32\u67D3\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u53D6\u51B3\u4E8EMCU\u7684\u6027\u80FD\u3002 \u6267\u884C\u5176\u4F59\u7684\u786C\u4EF6\u8F85\u52A9\u6E32\u67D3\u64CD\u4F5C\u548C\u8F6F\u4EF6\u56DE\u9000`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H4: \u533A\u57DF\u6E32\u67D3\u5B8C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u65E0\u64CD\u4F5C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H5: \u6E32\u67D3\u5B8C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u963B\u585E\u4E3B\u5FAA\u73AF`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B64\u8BBE\u7F6E\u63D0\u4F9B\u4EE5\u4E0B\u6267\u884C\u6D41\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/al-introduction/al-actions-00.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4F7F\u7528\u4E24\u4E2A\u5E27\u7F13\u5B58\u548C\u5E26\u6709LTDC\u7684MCU\u7684\u8BBE\u7F6E\u4E2D\u7684\u6267\u884C\u6D41\u7A0B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u91CC\u63CF\u8FF0\u4E86AL\u8BBE\u7F6E\u7684\u603B\u4F53\u8BBE\u8BA1\u3002 \u4EE5\u4E0B\u5404\u8282\u6DF1\u5165\u4ECB\u7ECD\u4E86\u5982\u4F55\u5B9E\u73B0\u62BD\u8C61\u5C42\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);