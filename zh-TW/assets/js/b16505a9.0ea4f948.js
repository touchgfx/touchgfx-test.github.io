"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6928],{

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

/***/ 46807:
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
  title: "TouchGFX AL \u958B\u767C\u7C21\u4ECB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "id": "development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "title": "TouchGFX AL \u958B\u767C\u7C21\u4ECB",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-al-development-introduction",
    "title": "TouchGFX AL \u958B\u767C\u7C21\u4ECB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "11. \u5FEB\u9583\u8A18\u61B6\u9AD4\u4E0B\u8F09",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/11-flash-loader"
  },
  "next": {
    "title": "\u62BD\u8C61\u5C64\u67B6\u69CB",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/touchgfx-architecture"
  }
};
const assets = {};



const toc = [{
  value: "\u62BD\u8C61\u5C64\u7684\u8077\u8CAC",
  id: "responsibilities-of-the-abstraction-layer",
  level: 2
}, {
  value: "\u7BC4\u4F8B\u8A2D\u5B9A\uFF1A\u96D9\u5F71\u50CF\u7DE9\u885D\u5340\u2013\u5167\u5EFALTDC\u7684MCU",
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
  }, "\u5C08\u6848\u6D3B\u52D5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F4D\u65BCTouchGFX\u61C9\u7528\u7A0B\u5F0F\u4E2D\u7684TouchGFX\u62BD\u8C61\u5C64\uFF08AL\uFF09\u662F\u4F4D\u65BC\u521D\u555F\u7528\u958B\u767C\u677F\u968E\u6BB5\uFF08Board Bring-Up phase\uFF09\u6240\u958B\u767C\u7684\u958B\u767C\u677F\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\uFF08Board Initialization Code\uFF09\u8207TouchGFX\u5F15\u64CE\u4E4B\u9593\u7684\u8EDF\u9AD4\u5143\u4EF6\u3002 \u5176\u4E3B\u8981\u4EFB\u52D9\u662F\u5C07\u5F15\u64CE\u8207\u5E95\u5C64\u786C\u9AD4\u548C\u4F5C\u696D\u7CFB\u7D71\u76F8\u7D50\u5408\u3002 \u9019\u662F\u85C9\u7531\u5C07\u5E95\u5C64\u786C\u9AD4\u4F5C\u696D\u7CFB\u7D71\u4F5C\u62BD\u8C61\u5316\u4F86\u9054\u6210\uFF0C\u56E0\u6B64\u5F15\u64CE\u4FBF\u53EF\u5C0DAL\u4F5C\u4E00\u81F4\u7684\u8655\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AL\u7531\u5169\u500B\u4E0D\u540C\u7684\u90E8\u5206\u7D44\u6210\uFF0C\u5206\u5225\u70BA\u786C\u9AD4\u62BD\u8C61\u5C64\uFF08HAL\uFF09\u548C\u4F5C\u696D\u7CFB\u7D71\u62BD\u8C61\u5C64\uFF08OSAL\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/components-selected-002.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u5C08\u6848\u5143\u4EF6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7BC0\u5C07\u7C21\u4ECB\u62BD\u8C61\u5C64\u7684\u539F\u7406\u548C\u5176\u6240\u626E\u6F14\u7684\u89D2\u8272\uFF0C\u4EE5\u53CA\u5B83\u5982\u4F55\u8207TouchGFX\u5F15\u64CE\u4E92\u52D5\u3002 \u5E95\u4E0B\u7684\u7AE0\u7BC0\u8A73\u8FF0\u4E86\u5982\u4F55\u5728\u7279\u5B9A\u7684\u786C\u9AD4\u4E0A\u9054\u6210\u62BD\u8C61\u5C64\u7684\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    items: (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */ .jA)().items,
    mdxType: "DocCardList"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "responsibilities-of-the-abstraction-layer"
  }), `\u62BD\u8C61\u5C64\u7684\u8077\u8CAC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u540C\u5728\u57FA\u672C\u6982\u5FF5\u7AE0\u7BC0\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../basic-concepts/rendering"
  }), `\u4E3B\u8FF4\u5708`), `\u90E8\u5206\u6240\u8FF0\uFF0CTouchGFX \u5F15\u64CE\u5177\u6709\u57F7\u884C\u4E09\u500B\u57FA\u672C\u6B65\u9A5F\u7684\u4E3B\u8FF4\u5708\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u6536\u96C6\u8F38\u5165\u4FE1\u865F\uFF08\u89F8\u63A7\u5EA7\u6A19\u3001\u6309\u9215\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u66F4\u65B0\u5834\u666F\u6A21\u578B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u5C07\u5834\u666F\u6A21\u578B\u6E32\u67D3\u5230\u5E40\u7DE9\u5B58`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u4E09\u500B\u6B65\u9A5F\u78BA\u4FDD\u4E86TouchGFX\u5F15\u64CE\u7684\u4E3B\u8981\u8077\u8CAC\uFF0C\u5373\u900F\u904E\u66F4\u65B0\u5F71\u50CF\u7DE9\u885D\u5340\u4F86\u53CD\u6620\u61C9\u7528\u7A0B\u5F0F\u7684\u7576\u524D\u72C0\u614B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F15\u64CE\u4E26\u4E0D\u76F4\u63A5\u8655\u7406\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u8CC7\u6599\u5230\u986F\u793A\u5668\u4E4B\u9593\u7684\u5BE6\u969B\u50B3\u8F38\u4EE5\u53CA\u5C0D\u5916\u90E8\u8F38\u5165\u4FE1\u865F\u7684\u6536\u96C6\uFF0C\u800C\u662F\u5F15\u64CE\u59D4\u8A17\u7D66TouchGFX AL\u4F86\u9054\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E3B\u8FF4\u5708\u5C07\u53CD\u5FA9\u4E0D\u65B7\u5730\u66F4\u65B0\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u8CC7\u6599\u3002 \u9019\u500B\u904E\u7A0B\u5FC5\u9808\u4EE5\u300C\u5BE6\u969B\u66F4\u65B0\u983B\u7387\u300D\u548C\u300C\u986F\u793A\u5668\u5C31\u7DD2\u72C0\u614B\u300D\u4FDD\u6301\u540C\u6B65\uFF0C\u4EE5\u78BA\u4FDD\u6240\u6709\u5716\u6846\u756B\u9762\u5747\u88AB\u50B3\u8F38\u4E26\u986F\u793A\u5728\u986F\u793A\u5668\u4E0A\u3002 \u5982\u679C\u4E8C\u8005\u4E4B\u9593\u4E0D\u540C\u6B65\uFF0C\u5247\u4E3B\u8FF4\u5708\u5C07\u4E0D\u65B7\u66F4\u65B0\u4E14\u6709\u53EF\u80FD\u5728\u66F4\u65B0\u904E\u7A0B\u4E2D\u5F71\u50CF\u7DE9\u885D\u5340\u5728\u50B3\u8F38\u4E4B\u524D\u88AB\u8986\u5BEB\u3002 \u9019\u9805\u540C\u6B65\u7684\u5DE5\u4F5C\u7531AL\u8CA0\u8CAC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX AL\u9084\u8CA0\u8CAC\u63A7\u5236\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u8A18\u61B6\u9AD4\u5340\u57DF\u53CA\u5176\u5B58\u53D6\u3002 \u9019\u610F\u5473\u8457\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u6240\u6709\u5B58\u53D6\u90FD\u900F\u904EAL\u4F86\u5B8C\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5177\u9AD4\u800C\u8A00\uFF0CTouchGFX AL\u7684\u8077\u8CAC\u70BA\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8077\u8CAC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u63CF\u8FF0`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C07\u300CTouchGFX\u5F15\u64CE\u4E3B\u8FF4\u5708\u300D\u8207\u300C\u986F\u793A\u50B3\u8F38\u300D\u540C\u6B65`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7576\u4E0B\u4E00\u500B\u5716\u6846\u5DF2\u5B8C\u6210\u8A08\u7B97\u4E26\u5728\u53EF\u7528\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u4E2D\u5B8C\u6210\u6E32\u67D3\u7B97\u5716\u6642\uFF0C\u5F15\u64CE\u4E3B\u8FF4\u5708\u5FC5\u9808\u505C\u6B62\u4EE5\u78BA\u4FDD\u5F71\u50CF\u7DE9\u885D\u5340\u5728\u88AB\u50B3\u8F38\u5230\u986F\u793A\u5668\u4E4B\u524D\u4E0D\u6703\u88AB\u8986\u5BEB\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u56DE\u5831\u89F8\u63A7\u53CA\u5BE6\u9AD4\u6309\u9215\u4E8B\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4EE5\u53D6\u6A23\u7684\u65B9\u5F0F\u4F86\u78BA\u77E5\u89F8\u63A7\u4E8B\u4EF6\u7684\u767C\u751F\u53CA\u4E26\u53D6\u5F97\u5176\u5EA7\u6A19\u8CC7\u8A0A\u3002 \u900F\u904E\u53D6\u6A23\u7684\u65B9\u5F0F\u4F86\u78BA\u5B9A\u5BE6\u9AD4\u6309\u9215\u6216\u985E\u4F3C\u7684\u5143\u4EF6\u662F\u5426\u88AB\u555F\u52D5\uFF08activated\uFF09\u3002 \u5411\u5F15\u64CE\u56DE\u5831\u9019\u4E9B\u4E8B\u4EF6\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u8981\u6CE8\u610F\u7684\u662F\u5176\u5B83\u7684\u5916\u90E8\u4E8B\u4EF6\u662F\u85C9\u7531\u4E0D\u540C\u7684\u6A5F\u5236\u50B3\u64AD\u5230TouchGFX\u61C9\u7528\u7A0B\u5F0F\u3002 \u5728`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "../ui-development/touchgfx-engine-features/backend-communication"
  }), `\u5F8C\u7AEF\u901A\u8A0A\uFF08backend communication\uFF09`), `\u7AE0\u7BC0\u6709\u66F4\u591A\u8CC7\u8A0A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u540C\u6B65\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5B58\u53D6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F71\u50CF\u7DE9\u885D\u5340\u8A18\u61B6\u9AD4\u662F\u7531TouchGFX AL\u6240\u8CA0\u8CAC\uFF0C\u7531\u65BC\u6703\u88AB\u5176\u5B83\u57F7\u884C\u55AE\u5143\uFF08\u5982\u4E3B\u8FF4\u5708\u57F7\u884C\u7DD2\u548CDMA\uFF09\u4F7F\u7528\uFF0C\u56E0\u6B64TouchGFX AL\u5FC5\u9808\u63D0\u4F9B\u4FDD\u8B77\u6B64\u8A18\u61B6\u9AD4\u7684\u65B9\u5F0F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u56DE\u5831\u4E0B\u4E00\u500B\u53EF\u7528\u7684\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AL\u5FC5\u9808\u80FD\u56DE\u7B54\u7576\u524D\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u6709\u90A3\u4E00\u500B\u90E8\u4EFD\u53EF\u5728\u4E0B\u4E00\u500B\u53EF\u7528\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u7576\u4E2D\u66F4\u65B0\u3002 \u9019\u5728\u6A19\u6E96\u7684\u96D9\u5F71\u50CF\u7DE9\u885D\u914D\u7F6E\u4E2D\u5373\u70BA\u5B8C\u6574\u7684\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u56E0\u70BA\u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\u4E00\u76F4\u6709\u4E00\u500B\u5B8C\u6574\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u5C08\u9580\u7528\u65BC\u6E32\u67D3\u7B97\u5716\uFF0C\u53E6\u4E00\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u7528\u65BC\u986F\u793A\u5668\u7684\u50B3\u8F38\u3002 \u4F46\u5728\u55AE\u4E00\u6216\u662F\u5C40\u90E8\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u914D\u7F6E\u4E0B\u60C5\u6CC1\u5C31\u6BD4\u8F03\u8907\u96DC\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u57F7\u884C\u6E32\u67D3\u7B97\u5716\uFF08render\uFF09\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u5C0D\u5834\u666F\u6A21\u578B\uFF08scene model\uFF09\u4F5C\u6E32\u67D3\u7B97\u5716\uFF08render\uFF09\u6642\uFF0C\u5F15\u64CE\u4E3B\u8FF4\u5708\u6703\u8981\u6C42AL\u6E32\u67D3\u5C0D\u61C9\u7684\u90E8\u5206\u3002 \u6709\u4E00\u500B\u7279\u5B9A\u7684TouchGFX AL\u5BE6\u4F5C\u6703\u5229\u7528\u5E95\u5C64\u786C\u9AD4\u4F86\u6E32\u67D3\u5716\u5143\uFF08graphic primitive\uFF09\u3002 \u7576\u4E2D\u7684\u7BC4\u4F8B\u662F\u5728\u5E36\u6709Chrom-ART\u5716\u5F62\u52A0\u901F\u5668\u7684MCU\u4E0A\u6E32\u67D3\u9EDE\u9663\u5716\u3002 TouchGFX\u5167\u542B\u70BA\u6240\u6709\u53EF\u7528\u5E73\u53F0\u6240\u6700\u4F73\u5316\u7684\u6E32\u67D3\u7B97\u5716\u65B9\u6CD5\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u505A\u5BA2\u88FD\u5316\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F71\u50CF\u7DE9\u885D\u5340\u5230\u5F71\u793A\u5668\u7684\u50B3\u8F38\u8655\u7406`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F15\u64CE\u6703\u901A\u77E5AL\u5FC5\u9808\u50B3\u8F38\u54EA\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u54EA\u4E00\u90E8\u5206\u3002 AL\u9700\u8981\u555F\u52D5\u6B64\u50B3\u8F38\u4F86\u78BA\u4FDD\u50CF\u7D20\u6700\u7D42\u51FA\u73FE\u5728\u5BE6\u9AD4\u986F\u793A\u5668\u4E0A\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BCTouchGFX AL\u662F\u4E00\u7A2E\u88AB\u52D5\u8EDF\u9AD4\u6A21\u7D44\uFF0C\u6C92\u6709\u81EA\u5DF1\u57F7\u884C\u7DD2\u6216\u985E\u4F3C\u7684\u57F7\u884C\u7DD2\uFF0C\u56E0\u6B64\u5B83\u5FC5\u9808\u900F\u904E\u5F9ETouchGFX\u5F15\u64CE\u4E3B\u8FF4\u5708\u547C\u53EB\u7279\u5B9A\u7684\u639B\u9264\uFF08\u51FD\u5F0F\uFF09\u6216\u900F\u904E\u4E2D\u65B7\u4F86\u57F7\u884C\u5176\u64CD\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u7528\u7684\u639B\u9264\u548C\u4E2D\u65B7\u96C6\u7D44\u5982\u4E0B\u6240\u8FF0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u53EF\u7528\u7684\u639B\u9264\u548C\u4E2D\u65B7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531AL\u958B\u767C\u4EBA\u54E1\u4F86\u5BE6\u4F5C\u9019\u4E9B\u639B\u9264\uFF0C\u4EE5\u4FBF\u5728\u7D66\u5B9A\u5E95\u5C64\u786C\u9AD4\u548C\u4F5C\u696D\u7CFB\u7D71\u7684\u689D\u4EF6\u4E0B\u542B\u84CBAL\u7684\u8077\u8CAC\u3002 \u5982\u679CAL\u958B\u767C\u4EBA\u54E1\u9700\u8981\u5176\u4ED6\u65B9\u5F0F\u4F86\u652F\u63F4AL\u7684\u8077\u8CAC\uFF0C\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u8A2D\u7F6E\u4E2D\u65B7\u4EE5\u4FBF\u5728\u7279\u5B9A\u6642\u523B\u555F\u52D5\u3002 \u9019\u65B9\u9762\u7684\u7BC4\u4F8B\u70BA\u900F\u904E\u300C\u786C\u9AD4\u8A08\u6642\u5668\u300D\u548C\u300CLTDC\u5782\u76F4\u540C\u6B65\u4E2D\u65B7\u300D\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `I1: \u986F\u793A\u5C31\u7DD2`), `\u4E2D\u65B7\u662F\u5782\u76F4\u540C\u6B65\u4E2D\u65B7\u7684\u4E00\u500B\u7BC4\u4F8B\u3002 \u8981\u6CE8\u610F\u7684\u662F\u9019\u4E9B\u4E2D\u65B7\u7684\u914D\u7F6E\u4E5F\u662FAL\u958B\u767C\u7684\u4E00\u90E8\u4EFD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example-setup-two-framebuffers---mcu-with-ltdc"
  }), `\u7BC4\u4F8B\u8A2D\u5B9A\uFF1A\u96D9\u5F71\u50CF\u7DE9\u885D\u5340\u2013\u5167\u5EFALTDC\u7684MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5177\u6709LTDC\u7684MCU\u7684\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u662F\u5E38\u898B\u7684\u914D\u7F6E\u3002 \u5728\u6B64\u914D\u7F6E\u7576\u4E2D\u6BCF\u500B\u639B\u9264\u7684AL\u64CD\u4F5C\u901A\u5E38\u5982\u4E0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8A2D\u5B9AAL\u4EE5\u56DE\u61C9LTDC VSYNC\u4E2D\u65B7\uFF0C\u5982\u6B64\u53EF\u8B93\u986F\u793A\u5668\u6BCF\u6B21\u6E96\u5099\u597D\u63A5\u6536\u65B0\u7684\u5716\u6846\uFF08frame\uFF09\u6642\u90FD\u80FD\u57F7\u884CI1\u3002 \u9019\u7528\u65BC\u5C07\u4E3B\u8FF4\u5708\u8207\u986F\u793A\u4E4B\u9593\u7684\u540C\u6B65\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u639B\u9264\u548C\u4E2D\u65B7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u52D5\u4F5C`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `I1\uFF1A\u986F\u793A\u5C31\u7DD2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u89E3\u9664\uFF08unblock\uFF09TouchGFX\u5F15\u64CE\u4E3B\u8FF4\u5708\uFF08main loop\uFF09\u7684\u963B\u585E\u72C0\u614B\uFF0C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\u4E26\u555F\u52D5\u4E0A\u4E00\u500B\u5DF2\u6E96\u5099\u597D\u7684\u5716\u6846\u5F71\u50CF\u7DE9\u885D\u5340\u50B3\u8F38\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H1\uFF1A\u56DE\u5831\u89F8\u63A7\u53CA\u5BE6\u9AD4\u6309\u9215\u4E8B\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u56DE\u50B3\u6709\u95DC\u89F8\u63A7\u4E8B\u4EF6\u6216\u9EDE\u6309\u5BE6\u9AD4\u6309\u9215\u7684\u4EFB\u4F55\u8CC7\u8A0A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H2\uFF1A\u7372\u53D6\u4E0B\u4E00\u500B\u53EF\u7528\u7684\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8981\u4F7F\u7528\u96D9\u7DE9\u885D\u5340\u7684\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u56DE\u50B3\u7576\u524D\u6240\u6709\u672A\u50B3\u8F38\u81F3\u986F\u793A\u5668\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u57DF`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H3\uFF1A\u57F7\u884C\u6E32\u67D3\u7B97\u5716\u64CD\u4F5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F9DMCU\u7684\u6027\u80FD\uFF0C \u57F7\u884C\u7531\u786C\u9AD4\u8F14\u52A9\u7684\u6E32\u67D3\u7B97\u5716\uFF0C\u82E5\u7121\u786C\u9AD4\u7684\u8F14\u52A9\u5247\u9032\u884C\u7D14\u8EDF\u9AD4\u7684\u7B97\u5716`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H4\uFF1A\u5340\u57DF\u6E32\u67D3\u5B8C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7121\u64CD\u4F5C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H5\uFF1A\u6E32\u67D3\u5B8C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u64F1\u7F6E\u4E3B\u8FF4\u5708`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u500B\u8A2D\u5B9A\u63D0\u4F9B\u4EE5\u4E0B\u57F7\u884C\u6D41\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/al-introduction/al-actions-00.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u300C\u4F7F\u7528\u5169\u500B\u5F71\u50CF\u7DE9\u885D\u5340\u300D\u548C\u300C\u5E36\u6709LTDC\u7684MCU\u300D\u7684\u8A2D\u5B9A\u4E0B\u5176\u57F7\u884C\u6D41\u7A0B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u88E1\u63CF\u8FF0\u4E86AL\u914D\u7F6E\u7684\u6574\u9AD4\u8A2D\u8A08\u3002 \u4EE5\u4E0B\u5404\u7BC0\u6DF1\u5165\u4ECB\u7D39\u4E86\u5982\u4F55\u5BE6\u4F5C\u62BD\u8C61\u5C64\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);