"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8279],{

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

/***/ 40908:
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
  title: "TouchGFX AL Development Introduction"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "id": "development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "title": "TouchGFX AL Development Introduction",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-al-development-introduction",
    "title": "TouchGFX AL Development Introduction"
  },
  "sidebar": "docs",
  "previous": {
    "title": "11. Flash Loader",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/11-flash-loader"
  },
  "next": {
    "title": "Abstraction Layer Architecture",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/touchgfx-architecture"
  }
};
const assets = {};



const toc = [{
  value: "AL(Abstraction Layer) \uC758 \uCC45\uC784",
  id: "responsibilities-of-the-abstraction-layer",
  level: 2
}, {
  value: "\uC124\uC815 \uC608: LTDC\uAC00 \uC7A5\uCC29\uB41C MCU\uB97C \uAC16\uCD98 2\uAC1C\uC758 \uD504\uB808\uC784 \uBC84\uD37C",
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
  }, "\uD504\uB85C\uC81D\uD2B8 \uD65C\uB3D9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 TouchGFX Abstraction Layer(AL, \uCD94\uC0C1\uD654 \uACC4\uCE35) \uB294 \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5 \uB2E8\uACC4\uC5D0\uC11C \uAC1C\uBC1C\uB41C \uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC\uC640 TouchGFX Engine \uC0AC\uC774\uC5D0 \uC704\uCE58\uD55C \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAD6C\uC131 \uC694\uC18C\uC785\uB2C8\uB2E4. \uC8FC\uC694 \uC784\uBB34\uB294 TouchGFX Engine\uC744 \uAE30\uBC18 \uD558\uB4DC\uC6E8\uC5B4\uC640 \uC6B4\uC601 \uCCB4\uC81C\uC5D0 \uC5F0\uACB0\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 TouchGFX Engine\uC5D0\uC11C \uD1B5\uD569\uB41C \uBC29\uC2DD\uC73C\uB85C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uAE30\uBC18 \uD558\uB4DC\uC6E8\uC5B4\uC640 OS\uC758 \uC138\uBD80 \uC0AC\uD56D\uC744 \uCD94\uC0C1\uD654\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AL\uC740 HAL(Hardware Abstraction Layer) \uACFC OSAL(Operating System Abstraction Layer) \uC774\uB77C\uB294 \uB450 \uAC00\uC9C0 \uBD80\uBD84\uC73C\uB85C \uC774\uB8E8\uC5B4\uC838 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/components-selected-002.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\uD504\uB85C\uC81D\uD2B8 \uAD6C\uC131 \uC694\uC18C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 AL\uC758 \uC6D0\uCE59 \uBC0F \uCC45\uC784, \uADF8\uB9AC\uACE0 \uC774\uAC83\uC774 TouchGFX Engine\uACFC \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uBC29\uC2DD\uC744 \uC804\uBC18\uC801\uC73C\uB85C \uC18C\uAC1C\uD569\uB2C8\uB2E4. \uD2B9\uC815 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC774\uAC83\uC774 \uC2E4\uD604\uB418\uB294 \uBC29\uC2DD\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB2E4\uC74C \uC139\uC158\uC5D0 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    items: (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */ .jA)().items,
    mdxType: "DocCardList"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "responsibilities-of-the-abstraction-layer"
  }), `AL(Abstraction Layer) \uC758 \uCC45\uC784`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"\uAE30\uBCF8 \uAC1C\uB150" \uC7A5\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../basic-concepts/rendering"
  }), `\uBA54\uC778 \uB8E8\uD504`), ` \uC139\uC158\uC5D0 \uC124\uBA85\uB418\uC5B4 \uC788\uB4EF\uC774, TouchGFX Engine\uC5D0\uB294 \uC138 \uAC00\uC9C0 \uAE30\uBCF8 \uB2E8\uACC4\uB97C \uC218\uD589\uD558\uB294 \uBA54\uC778 \uB8E8\uD504\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uC785\uB825(\uD130\uCE58 \uC88C\uD45C, \uBC84\uD2BC) \uC218\uC9D1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uC7A5\uBA74 \uBAA8\uB378 \uC5C5\uB370\uC774\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD504\uB808\uC784 \uBC84\uD37C\uB85C \uC7A5\uBA74 \uBAA8\uB378 \uB80C\uB354\uB9C1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30 \uB098\uC628 \uC138 \uAC00\uC9C0 \uB2E8\uACC4\uB294 TouchGFX Engine\uC758 \uC8FC\uB41C \uCC45\uC784\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD604\uC7AC \uC0C1\uD0DC\uB97C \uBC18\uC601\uD558\uB3C4\uB85D \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uC791\uC5C5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C \uB370\uC774\uD130\uB97C \uC2E4\uC81C \uC804\uC1A1\uD558\uB294 \uAC83\uC744 \uBE44\uB86F\uD574 \uC678\uBD80 \uC785\uB825\uC744 \uC218\uC9D1\uD558\uB294 \uC791\uC5C5\uC744 TouchGFX Engine\uC774 \uC9C1\uC811 \uCC98\uB9AC\uD558\uB294 \uB300\uC2E0\uC5D0 TouchGFX AL\uC5D0 \uC704\uC784\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uC778 \uB8E8\uD504\uB294 \uC2DC\uAC04 \uACBD\uACFC\uC5D0 \uB530\uB77C \uD504\uB808\uC784 \uBC84\uD37C(\uB4E4) \uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uBAA8\uB4E0 \uD504\uB808\uC784\uC744 \uC62C\uBC14\uB974\uAC8C \uC804\uC1A1\uD558\uC5EC \uD45C\uC2DC\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uB7EC\uD55C \uD504\uB85C\uC138\uC2A4\uAC00 \uC2E4\uC81C \uC5C5\uB370\uC774\uD2B8 \uC8FC\uAE30\uC640 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uC900\uBE44 \uC0C1\uD0DC\uC5D0 \uB9DE\uAC8C \uB3D9\uAE30\uD654\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uB3D9\uAE30\uD654\uAC00 \uC774\uB8E8\uC5B4\uC9C0\uC9C0 \uC54A\uC73C\uBA74 \uBA54\uC778 \uB8E8\uD504\uAC00 \uACC4\uC18D\uD574\uC11C \uC5C5\uB370\uC774\uD2B8\uB418\uBA74\uC11C \uC804\uC1A1 \uC804\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C(\uB4E4) \uAC00 \uB36E\uC5B4 \uC4F0\uAE30\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB3D9\uAE30\uD654\uB294 TouchGFX AL\uC758 \uCC45\uC784\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C TouchGFX AL\uC740 \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC \uC601\uC5ED\uACFC \uC774\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uB97C \uC81C\uC5B4\uD558\uB294 \uCC45\uC784\uB3C4 \uB9E1\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uBAA8\uB4E0 \uC561\uC138\uC2A4\uB294 TouchGFX AL\uC744 \uD1B5\uD574 \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uC790\uBA74 TouchGFX AL\uC758 \uCC45\uC784\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCC45\uC784`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB97C \uB514\uC2A4\uD50C\uB808\uC774 \uC804\uC1A1\uACFC \uB3D9\uAE30\uD654`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uAC00\uC6A9 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uCC28\uAE30 \uD504\uB808\uC784\uC774 \uACC4\uC0B0 \uBC0F \uB80C\uB354\uB9C1\uB420 \uB54C TouchGFX Engine\uC758 \uBA54\uC778 \uB8E8\uD504\uB294 \uC911\uB2E8\uB418\uC5B4\uC57C\uD569\uB2C8\uB2E4. \uADF8\uB798\uC57C\uB9CC \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uB418\uAE30 \uC804\uC5D0 \uC0C8\uB86D\uAC8C \uC5B4\uC148\uBE14\uB9C1\uB41C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uB36E\uC5B4 \uC4F0\uB294 \uC77C\uC774 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD130\uCE58 \uBC0F \uBB3C\uB9AC\uC801 \uBC84\uD2BC \uC774\uBCA4\uD2B8 \uBCF4\uACE0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD130\uCE58 \uC774\uBCA4\uD2B8\uC758 \uBC1C\uC0DD \uC5EC\uBD80\uC640 \uC774\uC5D0 \uD574\uB2F9\uD558\uB294 \uC88C\uD45C\uB97C \uC0D8\uD50C\uB9C1\uD569\uB2C8\uB2E4. \uBB3C\uB9AC\uC801 \uBC84\uD2BC \uB610\uB294 \uC720\uC0AC \uBC84\uD2BC\uC758 \uD65C\uC131\uD654 \uC5EC\uBD80\uB97C \uC0D8\uD50C\uB9C1\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC774\uBCA4\uD2B8\uB97C TouchGFX Engine\uC5D0 \uBCF4\uACE0\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\uB2E4\uB978 \uC678\uBD80 \uC774\uBCA4\uD2B8\uB294 \uB2E4\uB978 \uBA54\uCEE4\uB2C8\uC998\uC744 \uD1B5\uD574 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC804\uB2EC\uB41C\uB2E4\uB294 \uC0AC\uC2E4\uC5D0 \uC720\uC758\uD558\uC2ED\uC2DC\uC624. \uC774\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "../ui-development/touchgfx-engine-features/backend-communication"
  }), `\uBC31\uC5D4\uB4DC \uD1B5\uC2E0`), `\uAD00\uB828 \uC139\uC158\uC5D0\uC11C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uC561\uC138\uC2A4 \uB3D9\uAE30\uD654`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC\uB294 TouchGFX AL\uC758 \uCC45\uC784\uC785\uB2C8\uB2E4. \uBA54\uC778 \uB8E8\uD504 \uC2A4\uB808\uB4DC\uB098 DMA\uCC98\uB7FC \uB2E4\uB978 \uAD00\uB828 \uB3D9\uC791\uB4E4\uC774 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC73C\uBBC0\uB85C TouchGFX AL\uC740 \uC774\uB7EC\uD55C \uBA54\uBAA8\uB9AC\uB97C \uBCF4\uD638\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC744 \uC81C\uACF5\uD574\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCC28\uAE30 \uAC00\uC6A9 \uD504\uB808\uC784 \uBC84\uD37C \uC601\uC5ED \uBCF4\uACE0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX AL\uC740 \uD604\uC7AC \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uB2E4\uC74C\uC5D0 \uC5C5\uB370\uC774\uD2B8\uAC00 \uAC00\uB2A5\uD55C \uBD80\uBD84\uC744 \uB2F5\uD574\uC904 \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uD45C\uC900\uC778 2\uAC1C \uD504\uB808\uC784 \uBC84\uD37C \uC124\uC815\uC5D0\uC11C\uB294 \uD56D\uC0C1 \uC804\uCCB4 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uB370, \uD558\uB098\uC758 \uC804\uCCB4 \uD504\uB808\uC784 \uBC84\uD37C\uB294 \uB80C\uB354\uB9C1\uC744 \uC804\uB2F4\uD558\uB3C4\uB85D \uD558\uACE0, \uB2E4\uB978 \uD558\uB098\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C \uC804\uC1A1\uC744 \uC804\uB2F4\uD558\uB3C4\uB85D \uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB2E8\uC77C \uB610\uB294 \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uC124\uC815\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uC791\uC5C5\uC774 \uB354 \uBCF5\uC7A1\uD574\uC9D1\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB80C\uB354\uB9C1 \uC791\uC5C5 \uC218\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB294 \uC7A5\uBA74 \uBAA8\uB378\uC744 \uB80C\uB354\uB9C1\uD558\uBA74\uC11C TouchGFX AL\uC5D0\uAC8C \uD574\uB2F9\uD558\uB294 \uBD80\uBD84\uC744 \uB80C\uB354\uB9C1\uD558\uB3C4\uB85D \uC694\uCCAD\uD569\uB2C8\uB2E4. \uD2B9\uC815 TouchGFX AL \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uAE30\uBC18 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uC0AC\uC6A9\uD574 \uADF8\uB798\uD53D \uAE30\uBCF8 \uC694\uC18C\uB4E4\uC744 \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4. \uD55C \uC608\uB85C Chrom-ART \uADF8\uB798\uD53D \uAC00\uC18D\uAE30\uAC00 \uC7A5\uCC29\uB41C MCU\uC5D0\uC11C \uBE44\uD2B8\uB9F5\uC744 \uB80C\uB354\uB9C1\uD558\uB294 \uACBD\uC6B0\uB97C \uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX\uC5D0\uB294 \uBAA8\uB4E0 \uAC00\uC6A9 \uD50C\uB7AB\uD3FC\uC5D0 \uCD5C\uC801\uD654\uB41C \uB80C\uB354\uB9C1 \uBC29\uBC95\uC774 \uB0B4\uC7A5\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uC790 \uC9C0\uC815\uC744 \uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1 \uCC98\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX Engine\uC740 TouchGFX AL\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uC804\uC1A1\uC774 \uD544\uC694\uD55C \uBD80\uBD84\uC744 \uC54C\uB9BD\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 TouchGFX AL\uC740 \uC774\uB7EC\uD55C \uC804\uC1A1\uC744 \uAC1C\uC2DC\uD558\uC5EC \uACB0\uAD6D\uC5D0\uB294 \uBB3C\uB9AC\uC801 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD53D\uC140\uC774 \uC704\uCE58\uD558\uB3C4\uB85D \uD574\uC57C \uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX AL\uC740 \uC790\uCCB4 \uC2A4\uB808\uB4DC \uB610\uB294 \uC774\uC640 \uC720\uC0AC\uD55C \uAC83\uC744 \uAC16\uCD94\uC9C0 \uC54A\uC740 \uC218\uB3D9\uC801\uC778 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBAA8\uB4C8\uC774\uBBC0\uB85C TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uC5D0\uC11C \uD638\uCD9C\uB41C \uD2B9\uC815 \uD6C4\uD06C(\uD568\uC218) \uB610\uB294 \uC778\uD130\uB7FD\uD2B8\uB97C \uD1B5\uD574 \uB3D9\uC791\uC744 \uC218\uD589\uD574\uC57C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD6C4\uD06C \uBC0F \uC778\uD130\uB7FD\uD2B8 \uC138\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD6C4\uD06C \uBC0F \uC778\uD130\uB7FD\uD2B8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE30\uBC18 \uD558\uB4DC\uC6E8\uC5B4\uC640 OS\uC5D0\uC11C TouchGFX AL\uC758 \uCC45\uC784\uC774 \uC218\uD589\uB418\uB3C4\uB85D \uC774\uB7EC\uD55C \uD6C4\uD06C\uB97C \uAD6C\uD604\uD558\uB294 \uAC83\uC740 TouchGFX AL \uAC1C\uBC1C\uC790\uC758 \uBAAB\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uCC45\uC784\uC744 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 \uB2E4\uB978 \uBC29\uBC95\uC774 \uD544\uC694\uD55C \uACBD\uC6B0, TouchGFX AL \uAC1C\uBC1C\uC790\uB294 \uD2B9\uC815 \uC9C0\uC810\uC744 \uD65C\uC131\uD654\uD558\uB3C4\uB85D \uC778\uD130\uB7FD\uD2B8\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. LTDC \uC218\uC9C1 \uB3D9\uAE30\uD654 \uC778\uD130\uB7FD\uD2B8\uC640 \uD558\uB4DC\uC6E8\uC5B4 \uD0C0\uC774\uBA38\uAC00 \uBC14\uB85C \uC774\uB7EC\uD55C \uC608\uC785\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `I1: Display ready `), `\uC778\uD130\uB7FD\uD2B8\uB294 \uC218\uC9C1 \uB3D9\uAE30\uD654 \uC778\uD130\uB7FD\uD2B8\uC758 \uC608\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC778\uD130\uB7FD\uD2B8\uC758 \uC124\uC815\uC740 Al \uAC1C\uBC1C\uC758 \uC77C\uD658\uC73C\uB85C \uC5EC\uACA8\uC9C4\uB2E4\uB294 \uC810\uC5D0 \uC720\uC758\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example-setup-two-framebuffers---mcu-with-ltdc"
  }), `\uC124\uC815 \uC608: LTDC\uAC00 \uC7A5\uCC29\uB41C MCU\uB97C \uAC16\uCD98 2\uAC1C\uC758 \uD504\uB808\uC784 \uBC84\uD37C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC778 \uBC29\uBC95\uC740 LTDC\uB97C \uC7A5\uCC29\uD55C MCU\uB97C \uAC16\uCD98 2\uAC1C\uC758 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC124\uC815\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC124\uC815\uC5D0\uC11C \uAC01 \uD6C4\uD06C\uC5D0 \uB300\uD55C TouchGFX AL\uC758 \uB3D9\uC791\uC740 \uD754\uD788 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC744 \uC218\uC2E0\uD560 \uC900\uBE44\uAC00 \uB420 \uB54C\uB9C8\uB2E4 I1\uC774 \uC2E4\uD589\uB420 \uC218 \uC788\uB3C4\uB85D TouchGFX AL\uC774 LTDC VSYNC \uC778\uD130\uB7FD\uD2B8\uC5D0 \uBC18\uC751\uD558\uAC8C \uC124\uC815\uD569\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uBA54\uC778 \uB8E8\uD504\uB97C \uB3D9\uAE30\uD654\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD6C4\uD06C \uBC0F \uC778\uD130\uB7FD\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC870\uCE58`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `I1: \uB514\uC2A4\uD50C\uB808\uC774 \uB808\uB514`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774 \uC791\uC5C5\uC744 \uD2B8\uB9AC\uAC70\uD558\uB3C4\uB85D LTDC VSYNC \uC778\uD130\uB7FD\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\uBA54\uC778 \uB8E8\uD504\uC758 \uC7A0\uAE08\uC744 \uD574\uC81C\uD558\uACE0 \uC774\uC804 \uD504\uB808\uC784\uC5D0\uC11C \uC900\uBE44\uB41C \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC804\uC1A1\uC744 \uAC1C\uC2DC\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H1: \uD130\uCE58 \uBC0F \uBB3C\uB9AC\uC801 \uBC84\uD2BC \uC774\uBCA4\uD2B8\uB97C \uBCF4\uACE0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD130\uCE58 \uC774\uBCA4\uD2B8 \uB610\uB294 \uBB3C\uB9AC\uC801 \uBC84\uD2BC \uD074\uB9AD \uC2DC \uC815\uBCF4\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H2: \uCC28\uAE30 \uAC00\uC6A9 \uD504\uB808\uC784 \uBC84\uD37C \uC601\uC5ED\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774\uC911 \uBC84\uD37C \uC124\uC815\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD604\uC7AC \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uB418\uACE0 \uC788\uC9C0 \uC54A\uC740 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC804\uCCB4 \uC601\uC5ED\uC774 \uBC18\uD658\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H3: \uB80C\uB354\uB9C1 \uC791\uC5C5 \uC218\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU\uC758 \uAE30\uB2A5\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC9C0\uC6D0\uB418\uB294 \uB80C\uB354\uB9C1 \uC791\uC5C5\uACFC \uB098\uBA38\uC9C0 \uBD80\uBD84\uC5D0 \uB300\uD55C \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uD3F4\uBC31(fallback) \uC744 \uC218\uD589\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H4: \uC804\uCCB4 \uC601\uC5ED \uB80C\uB354\uB9C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC218\uD589\uD560 \uC870\uCE58\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `H5: \uB80C\uB354\uB9C1 \uC644\uB8CC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBA54\uC778 \uB8E8\uD504\uB97C \uCC28\uB2E8\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC124\uC815\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC2E4\uD589 \uD750\uB984\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/al-introduction/al-actions-00.png",
    noShadow: true,
    mdxType: "Figure"
  }, "LTDC\uAC00 \uC7A5\uCC29\uB41C MCU\uB97C \uAC16\uCD98 2\uAC1C\uC758 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC124\uC815 \uC791\uC5C5 \uC2E4\uD589 \uD750\uB984\uB3C4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD750\uB984\uB3C4\uB294 \uC774\uB7EC\uD55C \uC124\uC815\uC5D0 \uB300\uD55C TouchGFX AL\uC758 \uC804\uBC18\uC801\uC778 \uC124\uACC4\uB97C \uC124\uBA85\uD569\uB2C8\uB2E4. \uC544\uB798 \uC139\uC158\uC5D0\uB294 Al\uC744 \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC774 \uC790\uC138\uD788 \uC18C\uAC1C\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);