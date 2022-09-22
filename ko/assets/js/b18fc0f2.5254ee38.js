"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4647],{

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

/***/ 73584:
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
  title: "\uAC1C\uBC1C \uC18C\uAC1C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/board-introduction",
  "id": "development/board-bring-up/board-introduction",
  "title": "\uAC1C\uBC1C \uC18C\uAC1C",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/board-introduction.mdx",
  "sourceDirName": "development/board-bring-up",
  "slug": "/development/board-bring-up/board-introduction",
  "permalink": "/4.20/ko/docs/development/board-bring-up/board-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "board-introduction",
    "title": "\uAC1C\uBC1C \uC18C\uAC1C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC678\uBD80 \uBA54\uBAA8\uB9AC",
    "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"
  },
  "next": {
    "title": "1. Create Project",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/01-create-project"
  }
};
const assets = {};





const toc = [{
  value: "\uC791\uC5C5 \uB3C4\uAD6C",
  id: "tools-of-the-trade",
  level: 2
}, {
  value: "\uAE30\uB2A5 \uD655\uC778",
  id: "verification-of-functionality",
  level: 2
}, {
  value: "\uC804\uBC18\uC801\uC778 \uD504\uB85C\uC138\uC2A4",
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
  }, "\uD504\uB85C\uC81D\uD2B8 \uD65C\uB3D9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uCC55\uD130\uC5D0\uC11C\uB294 \uC0C8 \uD50C\uB7AB\uD3FC\uC5D0\uC11C TouchGFX \uD504\uB85C\uADF8\uB798\uBC0D\uC744 \uC2DC\uC791\uD558\uB294 \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5 \uACFC\uC815\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uBCF4\uB4DC\uB97C \uBE0C\uB9C1\uC5C5\uD558\uB294 \uAC83\uC740 TouchGFX\uB97C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD558\uAE30 \uC55E\uC11C \uBCF4\uB4DC\uC758 \uBAA8\uB4E0 \uD544\uC218 \uBD80\uD488\uACFC \uD574\uB2F9\uD558\uB294 \uB4DC\uB77C\uC774\uBC84\uAC00 \uC62C\uBC14\uB974\uAC8C \uB3D9\uC791\uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC774\uBBF8 \uC791\uB3D9 \uC911\uC778 \uBCF4\uB4DC\uAC00 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uB2E8\uACC4\uC758 \uB9CE\uC740 \uD65C\uB3D9\uB4E4\uC774 \uC26C\uC6CC\uC9D1\uB2C8\uB2E4. \uC644\uC804\uD788 \uC0C8\uB85C\uC6B4 \uC0AC\uC6A9\uC790 \uC81C\uC791 \uBCF4\uB4DC\uB97C \uAC00\uC9C0\uACE0 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uB2E8\uACC4\uB97C \uC644\uB8CC\uD558\uB294 \uB370 \uBA70\uCE60\uC774 \uC18C\uC694\uB41C\uB2E4\uB294 \uAC83\uC744 \uAC10\uC548\uD574\uC57C \uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD50C\uB7AB\uD3FC\uC774 \uBD88\uC548\uC815\uD558\uBA74 \uC88B\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC791\uC131\uD558\uAE30 \uC5B4\uB835\uB2E4\uB294 \uC810\uC5D0\uC11C \uC774\uB7EC\uD55C \uC791\uC5C5\uC740 \uC2DC\uAC04\uC744 \uD22C\uC790\uD560 \uAC00\uCE58\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uBC18\uBA74, \uC548\uC815\uC801\uC774\uACE0 \uC785\uC99D\uB41C \uD50C\uB7AB\uD3FC\uC5D0\uC11C\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC9D1\uC911\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uCC55\uD130\uB294 \uBCF4\uB4DC\uC5D0\uC11C \uD558\uB4DC\uC6E8\uC5B4 \uBC0F \uD558\uC704 \uB808\uBCA8\uC758 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAD6C\uC131 \uC694\uC18C\uAC00 \uC608\uC0C1\uB300\uB85C \uC791\uB3D9\uD558\uB294 \uAC83\uC744 \uBCF4\uC7A5 \uD558\uB294 \uC5C5\uBB34\uB97C \uB2F4\uB2F9\uD558\uB294 \uAC1C\uBC1C\uC790\uB97C \uC704\uD574 \uC791\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC2E4\uC81C UI\uB97C \uAC1C\uBC1C\uD558\uB294\uB370\uB9CC \uAD00\uC2EC\uC774 \uC788\uB294 \uAC1C\uBC1C\uC790\uB97C \uC704\uD55C \uAC83\uC774 \uC544\uB2D9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCF4\uB4DC\uB97C \uBE0C\uB9C1\uC5C5\uD560 \uB54C\uB294 \uBCF4\uB4DC \uC0C1\uC758 \uAD6C\uC131 \uC694\uC18C \uBC0F \uC8FC\uBCC0 \uC7A5\uCE58\uC640 \uC774\uB4E4 \uAC04\uC758 \uC5F0\uACB0, \uC774\uB4E4\uC774 \uD1B5\uC2E0\uC5D0 \uC0AC\uC6A9\uD558\uB294 \uD504\uB85C\uD1A0\uCF5C, \uAC01\uAC01\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD558\uAC70\uB098 \uD544\uC694\uD55C \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC \uB4F1\uC5D0 \uB300\uD574 \uC644\uBCBD\uD788 \uC774\uD574\uD558\uACE0 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    items: (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useCurrentSidebarCategory */ .jA)().items,
    mdxType: "DocCardList"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C8 \uCC55\uD130\uC778`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../touchgfx-hal-development/touchgfx-al-development-introduction",
    mdxType: "Link"
  }, `\xA0TouchGFX AL \uAC1C\uBC1C`), ` \uC5D0\uC11C\uB294 TouchGFX\uAC00 \uD558\uB4DC\uC6E8\uC5B4\uC640 \uB4DC\uB77C\uC774\uBC84\uB97C \uD1A0\uB300\uB85C \uC2E4\uD589\uB418\uB3C4\uB85D AL\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC124\uBA85\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tools-of-the-trade"
  }), `\uC791\uC5C5 \uB3C4\uAD6C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uAE30\uBC18 \uBCF4\uB4DC\uB97C \uBE0C\uB9C1\uC5C5\uD560 \uB54C \uC911\uC694\uD55C \uBA87 \uAC00\uC9C0 \uB3C4\uAD6C\uAC00 \uC544\uB798 \uD45C\uC5D0 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB3C4\uAD6C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC124\uBA85`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\uD504\uB85C\uC81D\uD2B8\uC640 \uB0B4\uBD80 \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0\uC11C MCU\uB97C \uAD6C\uC131\uD558\uACE0 \uCD08\uAE30\uD654 \uC18C\uC2A4 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uB54C \uC190\uC27D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB3C4\uAD6C\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32Cube \uD38C\uC6E8\uC5B4 \uD328\uD0A4\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU \uC81C\uD488\uAD70\uC744 \uC704\uD55C STM32Cube \uD38C\uC6E8\uC5B4\uC5D0\uB294 \uB2E4\uC591\uD55C \uC8FC\uBCC0 \uC7A5\uCE58\uC758 \uC0AC\uC6A9 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uC608\uC81C \uD504\uB85C\uC81D\uD2B8\uC640 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uB2E4\uC218 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uACF5\uAE09\uC5C5\uCCB4 \uB370\uC774\uD130 \uC2DC\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774\uB098 \uD50C\uB798\uC2DC \uAC19\uC740 \uC678\uBD80 \uC7A5\uCE58\uC5D0 \uB300\uD55C \uB370\uC774\uD130 \uC2DC\uD2B8\uC5D0\uB294 MCU(\uC608: STM32CubeMX\uB97C \uD1B5\uD55C)\uC640 \uC678\uBD80 \uC7A5\uCE58 \uBAA8\uB450\uB97C \uC62C\uBC14\uB974\uAC8C \uCD08\uAE30\uD654\uD558\uAE30 \uC704\uD55C \uD0C0\uC774\uBC0D\uC774\uB098 \uC804\uC555 \uB4F1 \uC911\uC694 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uACF5\uAE09\uC5C5\uCCB4 \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC2DC\uAC04 \uC808\uC57D\uC744 \uC704\uD574 \uACF5\uAE09\uC5C5\uCCB4\uC5D0\uAC8C \uC678\uBD80 \uC7A5\uCE58\uC5D0 \uB300\uD55C \uC608\uC81C \uCF54\uB4DC\uB97C \uC694\uCCAD\uD574\uC57C \uD569\uB2C8\uB2E4. \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC\uB294 STM32 MCU\uC5D0 \uD3EC\uD305\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC9C0\uB9CC, \uADF8\uB798\uB3C4 \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC\uB97C \uCC98\uC74C\uBD80\uD130 \uC0C8\uB85C \uC791\uC131\uD558\uB294 \uAC83\uBCF4\uB2E4\uB294 \uAC04\uB2E8\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCF4\uB4DC \uBE0C\uB9C1\uC5C5 \uB2E8\uACC4\uC5D0\uC11C \uC218\uD589\uB418\uB294 \uBAA8\uB4E0 \uC791\uC5C5\uC740 TouchGFX\uC640 \uBB34\uAD00\uD558\uAC8C \uC774\uB8E8\uC5B4\uC9C0\uAE30 \uB54C\uBB38\uC5D0 TouchGFX \uCF54\uB4DC\uAC00 \uC77C\uCCB4 \uAD00\uC5EC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB300\uC2E0, \uC774\uB7EC\uD55C \uC791\uC5C5\uACFC \uADF8 \uACB0\uACFC\uB85C \uC0DD\uC131\uB41C \uCF54\uB4DC\uB294 TouchGFX Abstraction Layer\uB97C \uAC1C\uBC1C\uD558\uAE30 \uC704\uD55C \uACAC\uACE0\uD55C \uD1A0\uB300 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uB4DC\uC6E8\uC5B4 \uBC0F \uD558\uC704 \uB808\uBCA8\uC758 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uAC00 \uC2E4\uC81C\uB85C \uCD5C\uC885 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uAE30\uB300\uC5D0 \uBD80\uD569\uD558\uAC8C \uC791\uB3D9\uD558\uAC8C \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC8FC\uB41C \uBAA9\uC801\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "verification-of-functionality"
  }), `\uAE30\uB2A5 \uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCF4\uB4DC \uBE0C\uB9C1\uC5C5 \uB2E8\uACC4\uC5D0\uC11C \uC0DD\uC131\uB41C \uCF54\uB4DC\uB294 1\uAC1C \uC774\uC0C1\uC758 \uD14C\uC2A4\uD2B8 \uD504\uB85C\uC81D\uD2B8 \uD615\uD0DC\uB97C \uAC00\uC9C0\uACE0 \uC788\uC73C\uBA70, \uB450 \uAC00\uC9C0 \uC6A9\uB3C4\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `AL(Abstraction Layer)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC\uB294 TouchGFX AL\uACFC \uAD81\uADF9\uC801\uC73C\uB85C \uC791\uB3D9\uD558\uAC8C \uB420 UI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uB294 \uD1A0\uB300\uAC00 \uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD14C\uC2A4\uD2B8 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC\uC640 \uD568\uAED8 \uC791\uC131\uB41C \uC778\uC99D \uCF54\uB4DC\uB294 \uBCF4\uB4DC\uAC00 \uC608\uC0C1\uB300\uB85C \uC791\uB3D9\uD558\uC9C0 \uC54A\uC744 \uB54C \uAD81\uADF9\uC801\uC73C\uB85C \uD655\uC778\uD574 \uBCF4\uB294 \uCF54\uB4DC\uC785\uB2C8\uB2E4. \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uBCF4\uB4DC\uC640 \uAC01\uAC01\uC758 \uD2B9\uC815 \uAD6C\uC131 \uC694\uC18C\uAC00 \uC608\uC0C1\uB300\uB85C \uC791\uB3D9 \uC911\uC778\uC9C0 \uD655\uC778\uD558\uAE30 \uC704\uD574 \uC18C\uADDC\uBAA8 \uAC80\uC99D \uD504\uB85C\uADF8\uB7A8\uC744 \uB2E4\uC218 \uC0DD\uC131\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uAC80\uC99D \uD504\uB85C\uADF8\uB7A8\uB4E4\uC740 \uC791\uC5C5\uC774 \uC9C4\uD589 \uC911\uC77C \uB54C \uD070 \uAC00\uCE58\uAC00 \uC788\uC73C\uBA70, \uBB34\uC5B8\uAC00\uAC00 \uBD88\uD655\uC2E4\uD574\uC9C4 \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uC2DC \uCC3E\uC544\uAC00\uC11C \uAE30\uB2A5\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uB450 \uAC00\uC9C0 \uC774\uC720\uB85C \uC778\uD574 \uD655\uC778 \uD504\uB85C\uADF8\uB7A8\uC744 \uCCB4\uACC4\uC801\uC73C\uB85C \uC800\uC7A5\uD558\uBA74 \uB9E4\uC6B0 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCD94\uD6C4\uC5D0 \uD14C\uC2A4\uD2B8 \uD504\uB85C\uADF8\uB7A8\uC744 \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB300\uC0C1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uB54C \uC0C8\uB86D\uAC8C \uC218\uC815\uB41C \uBC84\uC804\uC758 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uD14C\uC2A4\uD2B8\uD558\uAC70\uB098 \uADFC\uBCF8 \uC6D0\uC778\uC744 \uD30C\uC545\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC1C\uBC1C \uB2E8\uACC4\uC5D0\uC11C \uC218\uD589\uB41C \uCE21\uC815 \uC791\uC5C5(\uC608: \uBA54\uBAA8\uB9AC \uB300\uC5ED\uD3ED)\uC744 \uCCB4\uACC4\uC801\uC73C\uB85C \uAE30\uB85D\uD574 \uB193\uB294 \uAC83\uB3C4 \uC88B\uC740 \uBC29\uBC95\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/components-selected-001.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX AL\uC758 \uD1A0\uB300\uC778 \uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "overall-process"
  }), `\uC804\uBC18\uC801\uC778 \uD504\uB85C\uC138\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC6B0\uB9AC\uB294 \uD558\uB4DC\uC6E8\uC5B4\uC758 \uAD6C\uCCB4\uC801\uC778 \uAD6C\uC131\uC744 \uC54C \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uC544\uB798\uC640 \uAC19\uC740 \uC0AC\uC6A9\xA0\uAC00\uC774\uB4DC\uAC00 TouchGFX\uC758 \uC2E4\uD589 \uC2DC, \uBCF4\uB4DC\uB97C \uBE0C\uB9C1\uC5C5 \uBC0F \uC900\uBE44\uD558\uAE30 \uC704\uD55C \uB2E8\uACC4\uBCC4 \uAC00\uC774\uB4DC \uC5ED\uD560\uC744 \uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC774\uB4DC\uC758 \uAC01 \uB2E8\uACC4\uB294 \uD558\uB4DC\uC6E8\uC5B4\uC640 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAD6C\uC131 \uC694\uC18C\uC5D0\uC11C \uD2B9\uC815\uD55C \uD55C \uBD80\uBD84\uACFC \uC774\uC5D0 \uB300\uD55C \uBE0C\uB9C1\uC5C5\uC5D0 \uAD00\uB828\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uD558\uB4DC\uC6E8\uC5B4\uC758 \uC0AC\uC6A9\uC790 \uC81C\uC791 \uAD6C\uC131 \uC694\uC18C \uBD80\uBD84\uC73C\uB85C \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC804\uBC18\uC801\uC778 \uBAA9\uD45C\uB294 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC640 \uD1B5\uC2E0\uD558\uC5EC \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C\uC758 \uBAA8\uB4E0 \uD130\uCE58\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uC804\uC1A1\uD560 \uBA85\uB839\uC740 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC0AC\uC6A9 \uC911\uC778 \uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uB530\uB77C \uB2E4\uB974\uBBC0\uB85C \uAC00\uC774\uB4DC\uC5D0\uC11C\uB294 \uC644\uBCBD\uD55C \uB4DC\uB77C\uC774\uBC84\uB97C \uC81C\uC2DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574\uC11C\uB294 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC \uB370\uC774\uD130 \uC2DC\uD2B8\uC758 \uC815\uBCF4\uC5D0 \uAC00\uC774\uB4DC\uB97C \uACB0\uD569\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC790\uCCB4 \uC81C\uC791 \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5\uC744 \uC704\uD55C \uB2E8\uACC4\uBCC4 \uAC00\uC774\uB4DC\uB97C \uC219\uC9C0\uD558\uACE0 \uC218\uD589\uD560 \uB54C\uB294 \uB2E4\uC74C \uC0AC\uD56D\uC744 \uC720\uC758\uD574\uC57C \uD569\uB2C8\uB2E4:", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uD55C \uBC88\uC5D0 \uD55C \uB2E8\uACC4\uC529 \uC218\uD589"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uB2E4\uC74C \uB2E8\uACC4\uB85C \uB118\uC5B4\uAC00\uAE30 \uC804\uC5D0 \uAC01 \uB2E8\uACC4\uB97C \uCCA0\uC800\uD558\uAC8C \uD655\uC778"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uBB34\uC5B8\uAC00\uAC00 \uC758\uB3C4\uD55C \uB300\uB85C \uC791\uB3D9\uD558\uC9C0 \uC54A\uC744 \uB54C \uAC00\uC774\uB4DC\uB97C \uB514\uBC84\uAE45 \uC218\uB2E8\uC73C\uB85C \uD65C\uC6A9\uD558\uAC70\uB098 \uC774\uC804 \uB2E8\uACC4\uB85C \uB3CC\uC544\uAC00\uC11C \uC798\uBABB \uC9C4\uD589\uD55C \uBD80\uBD84\uC774 \uC5C6\uB294\uC9C0 \uD655\uC778"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uBCF4\uB4DC \uBE0C\uB9C1\uC5C5\uC740 \uC0AC\uC18C\uD55C \uC791\uC5C5\uC774 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC5D0 \uC608\uAE30\uCE58 \uC54A\uC740 \uB3D9\uC791\uC774 \uBC1C\uC0DD\uD558\uB354\uB77C\uB3C4 \uACBD\uACE0\uB97C \uBC1B\uC9C0 \uC54A\uC74C"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC774\uB4DC\uC758 \uAC01 \uB2E8\uACC4\uB294 \uB2E4\uC74C\uC758 \uAD6C\uC870\uB97C \uB530\uB974\uAC8C \uB429\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Motivation`), ` This part will explain the step and motivate why the step is an important step in preparing for running TouchGFX on your hardware.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Goal`), ` The goal part lists the goals for this step. \uD655\uC778 \uC0AC\uD56D \uBAA9\uB85D\uC5D0\uB294 \uC218\uD589\uD574\uC57C \uD558\uB294 \uD2B9\uC815 \uD14C\uC2A4\uD2B8\uAC00 \uC790\uC138\uD788 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD655\uC778 \uC0AC\uD56D\uC744 \uD1B5\uD574 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uAC00 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C TouchGFX\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uC2E4\uD589\uD558\uB294 \uB370 \uD544\uC694\uD55C \uAE30\uB2A5\uB4E4\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Prerequisites`), ` Here we list items that are required to perform the tasks.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Do`), ` This part explains as concrete as possible how to write the software required to configure and use the hardware. \uC77C\uBD80 \uB2E8\uACC4\uC758 \uACBD\uC6B0, \uC18C\uD504\uD2B8\uC6E8\uC5B4\uAC00 \uC0AC\uC6A9 \uC911\uC778 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uC0C1\uB2F9 \uBD80\uBD84 \uC758\uC874\uD558\uACE0 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC815\uD655\uB3C4\uAC00 \uB5A8\uC5B4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0\uB97C \uC704\uD574 \uC774 \uBD80\uBD84\uC5D0\uB294 \uC0C1\uC704 \uB808\uBCA8\uC5D0\uC11C \uB2E8\uACC4\uB4E4\uC744 \uB098\uC5F4\uD558\uACE0 \uC788\uC5B4 \uD558\uB4DC\uC6E8\uC5B4\uC640 \uAD00\uB828\uC774 \uC788\uB294 \uC138\uBD80 \uC815\uBCF4\uB97C \uC9C1\uC811 \uCC3E\uC544\uBD10\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC01\uAC01\uC758 \uBC29\uBC95 \uB2E8\uACC4\uB4E4\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB2E8\uACC4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uC6A9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\uC5D0\uC11C \uBE48 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/02-cpu-running"
  }), `\uC2E4\uD589 \uC911\uC778 CPU`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU\uAC00 \uC6D0\uD558\uB294 \uC18D\uB3C4\uB85C \uC2E4\uD589 \uC911\uC778\uC9C0 \uD655\uC778`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/03-display-internal"
  }), `\uB0B4\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294 \uB514\uC2A4\uD50C\uB808\uC774`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD560\uB2F9\uD558\uACE0 \uC774\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/04-enable-external-ram"
  }), `\uC678\uBD80 RAM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 RAM \uD65C\uC131\uD654`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/05-display-external"
  }), `\uC678\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294 \uB514\uC2A4\uD50C\uB808\uC774`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 RAM\uC73C\uB85C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC62E\uAE30\uACE0 \uC774\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/06-flash-external-addressable"
  }), `\uC8FC\uC18C \uC9C0\uC815\uC774 \uAC00\uB2A5\uD55C \uC678\uBD80 \uD50C\uB798\uC2DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBA54\uBAA8\uB9AC \uB9E4\uD551\uB41C \uC678\uBD80 \uD50C\uB798\uC2DC \uD65C\uC131\uD654`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/07-flash-external-nonaddressable"
  }), `\uBE14\uB85D \uBAA8\uB4DC\uC758 \uC678\uBD80 \uD50C\uB798\uC2DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBE14\uB85D \uBAA8\uB4DC\uC758 \uC678\uBD80 \uD50C\uB798\uC2DC \uD65C\uC131\uD654`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/08-hardware-acceleration"
  }), `\uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART \uADF8\uB798\uD53D \uAC00\uC18D\uAE30 \uD65C\uC131\uD654`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/09-touch-controller"
  }), `\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uB300\uD55C \uD1B5\uC2E0 \uC124\uC815`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/10-physical-buttons"
  }), `\uBB3C\uB9AC\uC801 \uBC84\uD2BC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBB3C\uB9AC\uC801 \uBC84\uD2BC\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4 \uAD6C\uC131`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "how-to/11-flash-loader"
  }), `\uD50C\uB798\uC2DC \uB85C\uB354`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD558\uB294 \uBC29\uBC95 \uAC1C\uBC1C`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);