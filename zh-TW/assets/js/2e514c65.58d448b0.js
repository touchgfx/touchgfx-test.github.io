"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2584],{

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

/***/ 84290:
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
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93054);
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84541);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99492);
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
  title: "\u642D\u5EFA\u958B\u767C\u677F"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/board-introduction",
  "id": "development/board-bring-up/board-introduction",
  "title": "\u642D\u5EFA\u958B\u767C\u677F",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/board-introduction.mdx",
  "sourceDirName": "development/board-bring-up",
  "slug": "/development/board-bring-up/board-introduction",
  "permalink": "/4.20/zh-TW/docs/development/board-bring-up/board-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "board-introduction",
    "title": "\u642D\u5EFA\u958B\u767C\u677F"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5916\u90E8\u8A18\u61B6\u9AD4",
    "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"
  },
  "next": {
    "title": "1. \u5275\u5EFA\u5C08\u6848",
    "permalink": "/4.20/zh-TW/docs/development/board-bring-up/how-to/01-create-project"
  }
};
const assets = {};





const toc = [{
  value: "\u884C\u696D\u5DE5\u5177\u5DE5\u5177\u4ECB\u7D39",
  id: "tools-of-the-trade",
  level: 2
}, {
  value: "\u529F\u80FD\u9A57\u8B49",
  id: "verification-of-functionality",
  level: 2
}, {
  value: "\u7E3D\u9AD4\u6D41\u7A0B",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/activities-selected-001.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u5C08\u6848\u8A2D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7AE0\u5C07\u5354\u52A9\u60A8\u5728\u65B0\u5E73\u81FA\u4E0A\u642D\u5EFATouchGFX\u3002 \u642D\u5EFA\u958B\u767C\u677F\u610F\u5473\u8457\u5728\u5C07TouchGFX\u6DFB\u52A0\u9032\u4F86\u4E4B\u524D\uFF0C\u5FC5\u9808\u78BA\u4FDD\u6240\u6709\u5FC5\u8981\u7684\u677F\u8F09\u90E8\u4EF6\u548C\u76F8\u61C9\u7684\u9A45\u52D5\u7A0B\u5F0F\u5747\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u5DF2\u64C1\u6709\u4E00\u500B\u5E36\u6709\u986F\u793A\u5668\u7684\u958B\u767C\u677F\uFF0C\u5247\u6B64\u968E\u6BB5\u7684\u8A31\u591A\u64CD\u4F5C\u5C07\u5F88\u5BB9\u6613\u3002 \u5982\u679C\u60A8\u64C1\u6709\u7684\u662F\u584A\u5168\u65B0\u7684\u5B9A\u88FD\u677F\uFF0C\u5247\u6B64\u968E\u6BB5\u53EF\u80FD\u9700\u8981\u82B1\u8CBB\u597D\u5E7E\u5929\u624D\u80FD\u5B8C\u6210\u3002 \u7531\u65BC\u5728\u4E0D\u7A69\u5B9A\u7684\u5E73\u81FA\u4E0A\u5F88\u96E3\u7DE8\u5BEB\u51FA\u826F\u597D\u7684\u7A0B\u5F0F\uFF0C\u56E0\u6B64\u524D\u671F\u6E96\u5099\u5DE5\u4F5C\u662F\u5F88\u91CD\u8981\u7684\u3002 \u6B64\u5916\uFF0C\u7A69\u5B9A\u53EF\u9760\u7684\u5E73\u53F0\u8B93\u60A8\u66F4\u5C08\u6CE8\u65BC\u61C9\u7528\u7A0B\u5F0F\u7684\u958B\u767C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u5C31\u662F\u8CA0\u8CAC\u677F\u4E0A\u786C\u9AD4\u548C\u5E95\u5C64\u8EDF\u9AD4\u7684\u958B\u767C\u4EBA\u54E1\uFF0C\u5247\u672C\u7AE0\u5F88\u9069\u5408\u60A8\u3002 \u5982\u679C\u60A8\u53EA\u95DC\u6CE8\u61C9\u7528\u7A0B\u5F0F\u7684\u5BE6\u969BUI\u4ECB\u9762\u958B\u767C\uFF0C\u5247\u672C\u7AE0\u4E0D\u592A\u9069\u5408\u60A8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u642D\u5EFA\u958B\u767C\u677F\u6642\uFF0C\u60A8\u61C9\u5B8C\u5168\u77AD\u89E3\u677F\u7684\u5143\u4EF6\u548C\u5916\u8A2D\u3001\u5143\u4EF6\u4E4B\u9593\u7684\u9023\u63A5\u3001\u6240\u7528\u5230\u7684\u901A\u8A0A\u5354\u5B9A\u4EE5\u53CA\u5404\u500B\u53EF\u7528\u548C/\u6216\u6240\u9700\u7684\u9A45\u52D5\u7A0B\u5F0F\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    items: (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useCurrentSidebarCategory */ .jA)().items,
    mdxType: "DocCardList"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u4E00\u7AE0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../touchgfx-hal-development/touchgfx-al-development-introduction",
    mdxType: "Link"
  }, `TouchGFX AL\u958B\u767C`), `\u5C07\u8A0E\u8AD6\u5982\u4F55\u5275\u5EFA\u5141\u8A31TouchGFX\u5728\u786C\u9AD4\u548C\u9A45\u52D5\u7A0B\u5F0F\u4E4B\u4E0A\u904B\u884C\u7684\u62BD\u8C61\u5C64\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tools-of-the-trade"
  }), `\u884C\u696D\u5DE5\u5177\u5DE5\u5177\u4ECB\u7D39`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u8868\u5217\u51FA\u4E86\u642D\u5EFASTM32\u7684\u958B\u767C\u677F\u6642\u6240\u9700\u7684\u4E00\u4E9B\u91CD\u8981\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5DE5\u5177`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Description`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\u4E00\u7A2E\u6613\u65BC\u4F7F\u7528\u7684\u5DE5\u5177\uFF0C\u7528\u65BC\u914D\u7F6EMCU\u4E26\u751F\u6210\u5305\u62EC\u5167\u90E8\u5468\u908A\u7684\u6574\u500B\u5C08\u6848\u521D\u59CB\u5316\u539F\u59CB\u7A0B\u5F0F\u78BC\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32Cube\u97CC\u9AD4\u5957\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU\u5404\u7CFB\u5217\u7684STM32Cube\u97CC\u9AD4\u5305\u542B\u5468\u908A\u7684\u7BC4\u4F8B\u4EE5\u53CA\u5404\u7A2E\u61C9\u7528\u5C08\u6848\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F9B\u61C9\u5546\u8CC7\u6599\u624B\u518A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5916\u90E8\u88DD\u7F6E\uFF08\u5982\u986F\u793A\u5668\u6216\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF09\u7684\u8CC7\u6599\u624B\u518A\u5305\u542B\u6B63\u78BA\u8A2D\u5B9AMCU\uFF08\u6BD4\u5982\u901A\u904ESTM32CubeMX\uFF09\u6216\u5916\u90E8\u8A2D\u5099\u7684\u91CD\u8981\u8CC7\u6599\uFF0C\u4F8B\u5982\u96FB\u58D3\u3001\u6642\u8108\u7684\u8A2D\u5B9A\u7B49\u2026\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F9B\u61C9\u5546\u7684\u9A45\u52D5\u7A0B\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u70BA\u4E86\u7BC0\u7701\u6642\u9593\uFF0C\u60A8\u61C9\u5411\u4F9B\u61C9\u5546\u7D22\u53D6\u5916\u90E8\u8A2D\u5099/\u5143\u4EF6\u7684\u9A45\u52D5\u7A0B\u5F0F\u78BC\u3002 \u901A\u5E38\u9700\u8981\u5C07\u4F9B\u61C9\u5546\u7684\u9A45\u52D5\u7A0B\u5F0F\u7A0B\u5F0F\u78BC\u79FB\u690D\u5230STM32\u7684MCU\u4E2D\uFF0C\u9019\u81F3\u5C11\u6BD4\u5F9E\u982D\u958B\u59CB\u7DE8\u5BEB\u9A45\u52D5\u7A0B\u5F0F\u7A0B\u5F0F\u78BC\u66F4\u7C21\u55AE\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u958B\u767C\u677F\u642D\u5EFA\u968E\u6BB5\u7684\u6240\u6709\u6E96\u5099\u5DE5\u4F5C\u5747\u8207TouchGFX\u7121\u95DC\uFF0C\u4E5F\u4E0D\u61C9\u6D89\u53CA\u4EFB\u4F55TouchGFX\u7A0B\u5F0F\u78BC\u3002 \u76F8\u53CD\uFF0C\u6240\u505A\u7684\u5DE5\u4F5C\u548C\u6240\u7522\u751F\u7684\u7A0B\u5F0F\u78BC\u5C07\u70BA\u958B\u767CTouchGFX\u62BD\u8C61\u5C64\u5960\u5B9A\u5805\u5BE6\u7684\u57FA\u790E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5176\u4E3B\u8981\u76EE\u6A19\u5728\u65BC\u78BA\u4FDD\u786C\u9AD4\u548C\u5E95\u5C64\u8EDF\u9AD4\u5BE6\u969B\u4E0A\u6309\u7167\u6700\u7D42\u61C9\u7528\u7684\u9810\u671F\u904B\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "verification-of-functionality"
  }), `\u529F\u80FD\u9A57\u8B49`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u958B\u767C\u677F\u4E2D\u57F7\u884C\u7684\u7A0B\u5F0F\u78BC\uFF08\u57FA\u65BC\u4E00\u500B\u6216\u591A\u500B\u6E2C\u8A66\u5C08\u6848\uFF09\u5C07\u7528\u65BC\u5169\u500B\u76EE\u7684\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `\u62BD\u8C61\u5C64`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u958B\u767C\u677F\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\u662F\u5EFA\u69CBTouchGFXAL\u4EE5\u53CA\u6700\u7D42\u57F7\u884C\u7684UI\u61C9\u7528\u7A0B\u5F0F\u7684\u57FA\u790E`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6E2C\u8A66\u7A0B\u5F0F\u78BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5982\u679C\u6700\u7D42\u57F7\u884C\u60C5\u6CC1\u4E0D\u7B26\u5408\u9810\u671F\uFF0C\u5247\u9700\u8981\u6839\u64DA\u73FE\u6709\u958B\u767C\u677F\u7684\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\u7DE8\u5BEB\u9A57\u8B49\u7A0B\u5F0F\u3002 \u5728\u958B\u767C\u677F\u642D\u5EFA\u968E\u6BB5\uFF0C\u5C07\u6703\u5275\u5EFA\u8A31\u591A\u5C0F\u7A0B\u5F0F\uFF0C\u4EE5\u9A57\u8B49\u6574\u500B\u958B\u767C\u677F\u548C\u6BCF\u500B\u5143\u4EF6\u6309\u7167\u9810\u671F\u5DE5\u4F5C\u3002 \u9019\u4E9B\u9A57\u8B49\u7A0B\u5F0F\u5728\u6574\u500B\u642D\u5EFA\u904E\u7A0B\u4E2D\u5F88\u6709\u50F9\u503C\uFF0C\u5C24\u5176\u5728\u6E2C\u8A66\u60C5\u6CC1\u8B8A\u5F97\u4E0D\u78BA\u5B9A\u6642\uFF0C\u53EF\u4EE5\u5C0D\u5176\u91CD\u65B0\u4FEE\u6539\u4E26\u4E88\u4EE5\u5B8C\u5584\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9452\u65BC\u4E0A\u8FF0\u5169\u500B\u539F\u56E0\uFF0C\u6709\u7CFB\u7D71\u5730\u4FDD\u5B58\u5404\u985E\u9A57\u8B49\u7A0B\u5F0F\u6703\u975E\u5E38\u6709\u76CA\u3002 \u60A8\u4EE5\u5F8C\u53EF\u4EE5\u518D\u6B21\u4F7F\u7528\u9019\u4E9B\u6E2C\u8A66\u7A0B\u5F0F\u3002 \u4F8B\u5982\uFF0C\u7576\u66F4\u8907\u96DC\u7684\u61C9\u7528\u610F\u5916\u5931\u6557\u6642\uFF0C\u53EF\u4F7F\u7528\u9019\u4E9B\u6E2C\u8A66\u7A0B\u5F0F\u9A57\u8B49\u65B0\u7248\u672C\u786C\u9AD4\u6216\u7528\u4F86\u67E5\u627E\u554F\u984C\u3002 \u9084\u5EFA\u8B70\u7CFB\u7D71\u6027\u5730\u8A18\u9304\u5728\u958B\u767C\u671F\u9593\u5B8C\u6210\u7684\u4EFB\u4F55\u6E2C\u91CF\u8CC7\u6599\uFF0C\u5982\u8A18\u61B6\u9AD4\u983B\u5BEC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/components-selected-001.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\u958B\u767C\u677F\u521D\u59CB\u5316\u7A0B\u5F0F\u78BC\u662FTouchGFXAL\u7684\u57FA\u790E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "overall-process"
  }), `\u7E3D\u9AD4\u6D41\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u6211\u5011\u7121\u6CD5\u77AD\u89E3\u60A8\u786C\u9AD4\u7684\u5177\u9AD4\u69CB\u9020\uFF0C\u56E0\u6B64\u4EE5\u4E0B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "how-to/01-create-project",
    mdxType: "Link"
  }, `\u64CD\u4F5C`)), `\u6307\u5357\u5C07\u4F5C\u70BA\u555F\u52D5\u548C\u6E96\u5099\u7528\u65BC\u904B\u884CTouchGFX\u958B\u767C\u677F\u7684\u4E00\u822C\u6027\u5206\u6B65\u6307\u5357\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6307\u5357\u7684\u6BCF\u4E00\u6B65\u90FD\u6D89\u53CA\u60A8\u7684\u786C\u9AD4\u548C/\u6216\u8EDF\u9AD4\u5143\u4EF6\u7684\u4E00\u500B\u7279\u5B9A\u90E8\u5206\u53CA\u5176\u555F\u52D5\u3002 \u786C\u9AD4\u7684\u81EA\u5B9A\u7FA9\u5143\u4EF6\u90E8\u5206\u7684\u4E00\u500B\u7BC4\u4F8B\u53EF\u4EE5\u662F\u89F8\u63A7\u63A7\u5236\u5668\u3002 \u7E3D\u9AD4\u76EE\u6A19\u662F\u8207\u89F8\u63A7\u63A7\u5236\u5668\u9032\u884C\u901A\u4FE1\uFF0C\u4EE5\u7372\u53D6\u6709\u95DC\u986F\u793A\u5668\u4E0A\u7684\u4EFB\u4F55\u89F8\u63A7\u8CC7\u8A0A\u3002 \u767C\u9001\u7D66\u89F8\u63A7\u63A7\u5236\u5668\u7684\u7279\u5B9A\u6307\u4EE4\u53D6\u6C7A\u65BC\u60A8\u5728\u786C\u9AD4\u4E0A\u4F7F\u7528\u7684\u7279\u5B9A\u63A7\u5236\u5668\uFF0C\u56E0\u6B64\u672C\u6307\u5357\u7121\u6CD5\u63D0\u4F9B\u5B8C\u6574\u7684\u9A45\u52D5\u7A0B\u5F0F\u3002 \u70BA\u6B64\uFF0C\u958B\u767C\u6642\u9700\u8981\u5C07\u6307\u5357\u8207\u89F8\u6478\u63A7\u5236\u5668\u6578\u64DA\u624B\u518A\u4E2D\u7684\u8CC7\u8A0A\u76F8\u7D50\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u95B1\u8B80\u4E26\u57F7\u884C\u6709\u95DC\u5B9A\u88FD\u958B\u767C\u677F\u7684\u642D\u5EFA\u555F\u52D5\u7684\u5206\u6B65\u6307\u5357\u6642\uFF0C\u6211\u5011\u5EFA\u8B70\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u6BCF\u6B21\u50C5\u57F7\u884C\u4E00\u6B65"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u5728\u7E7C\u7E8C\u4E0B\u4E00\u6B65\u4E4B\u524D\uFF0C\u8ACB\u5FB9\u5E95\u9A57\u8B49\u6BCF\u500B\u6B65\u9A5F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u7576\u67D0\u90E8\u5206\u672A\u80FD\u6309\u9810\u671F\u5DE5\u4F5C\u6642\uFF0C\u672C\u6307\u5357\u5C07\u4F5C\u70BA\u9664\u932F\u65B9\u6CD5\uFF0C\u6216\u8005\u8FD4\u56DE\u4E26\u91CD\u65B0\u57F7\u884C\u5148\u524D\u7684\u6B65\u9A5F\uFF0C\u4EE5\u78BA\u4FDD\u6C92\u6709\u9055\u53CD\u9019\u4E9B\u6B65\u9A5F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\u5982\u679C\u60A8\u9047\u5230\u610F\u5916\u60C5\u6CC1\uFF0C\u8ACB\u4E0D\u5FC5\u9A5A\u614C\uFF0C\u7562\u7ADF\u958B\u767C\u677F\u7684\u555F\u52D5\u642D\u5EFA\u4E26\u4E0D\u662F\u4E00\u4EF6\u5BB9\u6613\u7684\u4E8B"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6307\u5357\u4E2D\u7684\u6BCF\u4E00\u6B65\u90FD\u5C07\u9075\u5FAA\u4EE5\u4E0B\u7D50\u69CB\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Motivation`), ` This part will explain the step and motivate why the step is an important step in preparing for running TouchGFX on your hardware.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Goal`), ` The goal part lists the goals for this step. \u9A57\u8B49\u9EDE\u5217\u8868\u8A73\u8FF0\u4E86\u60A8\u61C9\u57F7\u884C\u7684\u7279\u5B9A\u6E2C\u8A66\u3002 \u9019\u4E9B\u9A57\u8B49\u9EDE\u78BA\u4FDD\u60A8\u7684\u8EDF\u9AD4\u6EFF\u8DB3\u5728\u786C\u9AD4\u4E0A\u6210\u529F\u904B\u884CTouchGFX\u7684\u689D\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Prerequisites`), ` Here we list items that are required to perform the tasks.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Do`), ` This part explains as concrete as possible how to write the software required to configure and use the hardware. \u7531\u65BC\u8EDF\u9AD4\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u53D6\u6C7A\u65BC\u60A8\u6240\u4F7F\u7528\u7684\u786C\u9AD4\uFF0C\u67D0\u4E9B\u6B65\u9A5F\u4E0D\u53EF\u80FD\u975E\u5E38\u6E96\u78BA\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u6B64\u90E8\u5206\u5728\u66F4\u9AD8\u968E\u5C64\u9762\u4E0A\u5217\u51FA\u4E86\u6B65\u9A5F\uFF0C\u60A8\u9084\u5FC5\u9808\u627E\u5230\u8207\u60A8\u81EA\u5DF1\u7684\u786C\u9AD4\u76F8\u95DC\u7684\u8A73\u7D30\u8CC7\u8A0A\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5404\u500B\u52D5\u4F5C\u6B65\u9A5F\u5982\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6B65\u9A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5167\u5BB9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\u5275\u5EFA\u5C08\u6848`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728STM32CubeMX\u5EFA\u7ACB\u4E00\u500B\u7A7A\u5C08\u6848`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/02-cpu-running"
  }), `CPU\u7684\u57F7\u884C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u78BA\u4FDDMCU\u4EE5\u9700\u8981\u7684\u901F\u5EA6\u57F7\u884C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/03-display-internal"
  }), `\u986F\u793A\u4F4D\u65BC\u5167\u90E8RAM\u4E2D\u7684\u5F71\u50CF\u7DE9\u885D\u5340`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5728\u5167\u90E8RAM\u4E2D\u5206\u914D\u5F71\u50CF\u7DE9\u885D\u5340\u4E26\u5C07\u5167\u5BB9\u50B3\u8F38\u5230\u986F\u793A\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\u555F\u52D5\u5916\u90E8RAM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/05-display-external"
  }), `\u986F\u793A\u4F4D\u65BC\u5916\u90E8RAM\u4E2D\u7684\u5F71\u50CF\u7DE9\u885D\u5340`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5C07\u5F71\u50CF\u7DE9\u885D\u5340\u79FB\u81F3\u5916\u90E8RAM\uFF0C\u4E26\u5C07\u50B3\u8F38\u5230\u986F\u793A\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/06-flash-external-addressable"
  }), `\u5916\u90E8\u53EF\u5B9A\u5740\u5FEB\u9583\u8A18\u61B6\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u555F\u52D5\u5916\u90E8\u5B58\u5132\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/07-flash-external-nonaddressable"
  }), `\u5916\u90E8\u584A\u6A21\u5F0F\u5FEB\u9583\u8A18\u61B6\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u555F\u52D5\u5916\u90E8\u584A\u6A21\u5F0F\u5FEB\u9583\u8A18\u61B6\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/08-hardware-acceleration"
  }), `\u786C\u9AD4\u52A0\u901F\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u555F\u52D5Chrom-ART\u5716\u5F62\u52A0\u901F\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/09-touch-controller"
  }), `\u89F8\u63A7\u63A7\u5236\u5668`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8A2D\u7F6E\u8207\u89F8\u63A7\u63A7\u5236\u5668\u7684\u901A\u4FE1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/10-physical-buttons"
  }), `\u6309\u9215`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u914D\u7F6E\u5C0D\u6309\u9215\u7684\u8A2A\u554F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/11-flash-loader"
  }), `\u5FEB\u9583\u8A18\u61B6\u9AD4\u88DD\u8F09\u8EDF\u9AD4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u958B\u767C\u4E00\u7A2E\u65B9\u6CD5\u5C07\u6578\u64DA\u5BEB\u5165\u5916\u90E8\u5FEB\u9583\u8A18\u61B6\u9AD4`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);