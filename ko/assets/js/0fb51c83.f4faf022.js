"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7932],{

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

/***/ 45842:
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
  title: "\uAC1C\uBC1C \uD65C\uB3D9 \uC18C\uAC1C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/development-introduction",
  "id": "development/development-introduction",
  "title": "\uAC1C\uBC1C \uD65C\uB3D9 \uC18C\uAC1C",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",
  "sourceDirName": "development",
  "slug": "/development/development-introduction",
  "permalink": "/4.20/ko/docs/development/development-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "development-introduction",
    "title": "\uAC1C\uBC1C \uD65C\uB3D9 \uC18C\uAC1C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9",
    "permalink": "/4.20/ko/docs/basic-concepts/memory-usage"
  },
  "next": {
    "title": "\uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD \uC18C\uAC1C",
    "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-selection-introduction"
  }
};
const assets = {};



const toc = [{
  value: "\uC8FC\uC694 \uD65C\uB3D9",
  id: "main-activities",
  level: 2
}, {
  value: "\uC8FC\uC694 \uAD6C\uC131 \uC694\uC18C",
  id: "main-components",
  level: 2
}, {
  value: "\uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD",
  id: "hardware-selection",
  level: 2
}, {
  value: "\uD504\uB85C\uD1A0\uD0C0\uC774\uD551",
  id: "prototyping",
  level: 3
}, {
  value: "\uB9DE\uCDA4\uD615 \uD558\uB4DC\uC6E8\uC5B4",
  id: "custom-hardware",
  level: 3
}, {
  value: "\uBCF4\uB4DC \uBE0C\uB9C1\uC5C5",
  id: "board-bring-up",
  level: 2
}, {
  value: "STM32CubeMX",
  id: "stm32cubemx",
  level: 3
}, {
  value: "TBS(TouchGFX Board Setup)",
  id: "application-templates-ats",
  level: 3
}, {
  value: "TouchGFX AL \uAC1C\uBC1C",
  id: "touchgfx-al-development",
  level: 2
}, {
  value: "TouchGFX Generator",
  id: "touchgfx-generator",
  level: 3
}, {
  value: "UI \uAC1C\uBC1C",
  id: "ui-development",
  level: 2
}, {
  value: "TouchGFX Designer",
  id: "touchgfx-designer",
  level: 3
}, {
  value: "TBS(TouchGFX Board Setup)",
  id: "application-templates",
  level: 3
}, {
  value: "\uB370\uBAA8 \uBC0F \uC608\uC2DC",
  id: "ui-templates",
  level: 3
}, {
  value: "\uB9DE\uCDA4\uD615 \uD558\uB4DC\uC6E8\uC5B4",
  id: "custom-hardware-1",
  level: 3
}, {
  value: "\uC791\uC5C5 \uD750\uB984",
  id: "workflow",
  level: 2
}, {
  value: "\uC0DD\uC131\uB41C \uCF54\uB4DC \uBC0F \uC0AC\uC6A9\uC790 \uCF54\uB4DC",
  id: "generated-code-and-user-code",
  level: 3
}, {
  value: "\uCEF4\uD30C\uC77C\uB7EC/IDE \uBCC0\uACBD",
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
  }), `\uC8FC\uC694 \uD65C\uB3D9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD504\uB85C\uC81D\uD2B8\uC5D0\uB294 \uAC1C\uBC1C \uB2E8\uACC4\uC5D0\uC11C \uC218\uD589\uD558\uAC8C \uB420 \uC77C\uB828\uC758 \uD65C\uB3D9\uB4E4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uAC01 \uD65C\uB3D9\uC5D0\uC11C \uC5B4\uB5A4 \uB178\uB825\uC744 \uAE30\uC6B8\uC774\uB0D0\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 \uBAA9\uD45C\uC5D0 \uB2EC\uB824 \uC788\uC2B5\uB2C8\uB2E4. UI \uD504\uB85C\uD1A0\uD0C0\uC774\uD551\uC744 \uC218\uD589\uD558\uB294 \uACBD\uC6B0, \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC8FC\uC694 \uBD80\uBD84\uC5D0\uC11C \uBBF8\uB9AC \uC81C\uC791\uB41C \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC774\uB7EC\uD55C \uD65C\uB3D9\uC758 \uB300\uBD80\uBD84\uC744 \uAC74\uB108\uB6F0\uC5B4\uC11C \uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C\uC744 \uAC00\uC18D\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9DE\uCDA4\uD615 \uBCF4\uB4DC\uB97C \uAE30\uBC18\uC73C\uB85C \uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC218\uD589\uD558\uB294 \uACBD\uC6B0, \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uAC01 \uD65C\uB3D9\uC744 \uCC98\uB9AC\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-activities.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX \uD504\uB85C\uC81D\uD2B8\uC758 \uC8FC\uC694 \uD65C\uB3D9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "main-components"
  }), `\uC8FC\uC694 \uAD6C\uC131 \uC694\uC18C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD504\uB85C\uC81D\uD2B8\uB294 5\uAC1C\uC758 \uC8FC\uC694 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBC0F \uD558\uB4DC\uC6E8\uC5B4\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uAC01\uAC01\uC758 \uD65C\uB3D9\uC740 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC758 \uC8FC\uC694 \uAD6C\uC131 \uC694\uC18C \uC911 \uD558\uB098\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. TouchGFX \uC5D4\uC9C4\uC740 \uC8FC\uC694 \uD65C\uB3D9\uC758 \uACB0\uACFC\uBB3C\uC774 \uC544\uB2C8\uACE0 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC758 \uC2DC\uC791\uC810\uC73C\uB85C, \uB2E4\uC6B4\uB85C\uB4DC \uBC0F \uC124\uCE58 \uC2DC\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-components.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "TouchGFX \uD504\uB85C\uC81D\uD2B8\uC758 \uC8FC\uC694 \uAD6C\uC131 \uC694\uC18C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC139\uC158\uC5D0\uC11C\uB294 \uD65C\uB3D9 \uBC0F \uAD6C\uC131 \uC694\uC18C \uAC01\uAC01\uC5D0 \uB300\uD574 \uAC04\uB7B5\uD558\uAC8C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uAC01\uAC01\uC758 \uD65C\uB3D9\uC740 \uC774 \uCC55\uD130\uC758 \uB098\uBA38\uC9C0 \uC139\uC158\uC5D0 \uC790\uC138\uD788 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-selection"
  }), `\uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-004.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD65C\uB3D9\uC740 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC758 \uCD08\uAE30 \uD65C\uB3D9\uC785\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uC120\uD0DD\uD558\uACE0, \uD544\uC694\uD55C \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131 \uC694\uC18C\uC640 \uC774\uB4E4\uC774 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uBBF8\uCE58\uB294 \uC601\uD5A5\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4. \uC774 \uB2E8\uACC4\uB97C \uB9C8\uCE58\uBA74 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uBCF4\uB4DC\uAC00 \uC0DD\uAE41\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "prototyping"
  }), `\uD504\uB85C\uD1A0\uD0C0\uC774\uD551`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI \uD504\uB85C\uD1A0\uD0C0\uC774\uD551\uC744 \uC218\uD589\uD558\uB294 \uACBD\uC6B0\uC5D0 \uC2E0\uC18D\uD55C \uC2DC\uC791\uACFC \uC2E4\uD589\uC744 \uC704\uD574\uC11C\uB294 STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uB97C \uC120\uD0DD\uD558\uB294 \uAC83\uC774 \uAC00\uC7A5 \uC801\uD569\uD569\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131 \uC694\uC18C, \uBCF4\uB4DC\uB97C \uC5F0\uACB0\uD558\uB294 \uBC29\uBC95 \uB610\uB294 \uC720\uC0AC \uBB38\uC81C\uC5D0 \uB300\uD574 \uACE0\uB824\uD574\uC57C \uD560 \uC0AC\uD56D\uC740 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0, \uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD \uD65C\uB3D9\uC5D0\uC11C\uB294 \uC81C\uACF5\uB418\uB294 STM32 \uD3C9\uAC00 \uD0A4\uD2B8 \uAC00\uC6B4\uB370 MCU \uC131\uB2A5, \uBA54\uBAA8\uB9AC \uC124\uC815 \uBC0F \uB514\uC2A4\uD50C\uB808\uC774 \uD06C\uAE30 \uCE21\uBA74\uC5D0\uC11C \uCD5C\uC885 \uC81C\uD488\uACFC \uAC00\uC7A5 \uC798 \uC77C\uCE58\uD558\uB294 \uAC83\uC744 \uC120\uD0DD\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware"
  }), `\uB9DE\uCDA4\uD615 \uD558\uB4DC\uC6E8\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC790\uCCB4 \uD558\uB4DC\uC6E8\uC5B4 \uC194\uB8E8\uC158\uC744 \uAC1C\uBC1C\uD558\uACE0 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC120\uD0DD \uC0AC\uD56D\uACFC \uACE0\uB824 \uC0AC\uD56D\uC774 \uB9CE\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `\uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD`), ` \uC139\uC158\uC740 \uB2E4\uC591\uD55C \uC9C8\uBB38\uC5D0 \uB300\uD55C \uB2F5\uC744 \uC81C\uACF5\uD558\uACE0 \uC5EC\uB7EC\uBD84\uC774 \uC120\uD0DD\uD55C \uD558\uB4DC\uC6E8\uC5B4\uAC00 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5B4\uB5A4 \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294\uC9C0 \uC124\uBA85\uD558\uB294 \uB4F1 \uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD \uC791\uC5C5\uC5D0 \uB3C4\uC6C0\uC774 \uB420 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uCD5C\uC885 \uD558\uB4DC\uC6E8\uC5B4\uAC00 \uB108\uBB34 \uB2A6\uAC8C \uC900\uBE44\uB418\uB294 \uACBD\uC6B0\uAC00 \uC885\uC885 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC885 \uBCF4\uB4DC\uC640 \uC720\uC0AC\uD55C STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uB97C \uC120\uD0DD\uD558\uACE0, \uC774\uB97C UI \uAC1C\uBC1C\uC758 \uCCAB \uB2E8\uACC4\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uB9E4\uC6B0 \uC77C\uBC18\uC801\uC785\uB2C8\uB2E4. \uCD5C\uC885 \uBCF4\uB4DC\uAC00 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 PC\uC5D0\uC11C \uC2E4\uD589\uB418\uB294 TouchGFX Simulator\uB97C \uC0AC\uC6A9\uD574 \uC2DC\uC791\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uC804\uCCB4 \uC124\uBA85\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `\uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD`), ` \uC139\uC158\uC5D0\uC11C \uCC3E\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "board-bring-up"
  }), `\uBCF4\uB4DC \uBE0C\uB9C1\uC5C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-003.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD65C\uB3D9\uC740 TouchGFX\uAC00 \uBCF4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uB420 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uD575\uC2EC \uC791\uC5C5\uC785\uB2C8\uB2E4. \uCD9C\uB825 \uAD6C\uC131 \uC694\uC18C\uB97C \uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC\uB77C\uACE0 \uD558\uB294\uB370, MCU\uC640 \uBAA8\uB4E0 \uC8FC\uBCC0 \uC7A5\uCE58\uB97C \uC124\uC815\uD574\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC2E4\uD589 \uC900\uBE44\uB97C \uC2DC\uD0A4\uB294 \uC77C\uBC18 \uCD08\uAE30\uD654 \uCF54\uB4DC\uC785\uB2C8\uB2E4. \uC774 \uCD08\uAE30\uD654 \uCF54\uB4DC\uB294 TouchGFX\uC640 \uB3C5\uB9BD\uC801\uC774\uBA70 \uC21C\uC218 \uD558\uB4DC\uC6E8\uC5B4 \uC124\uC815\uB9CC \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubemx"
  }), `STM32CubeMX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD65C\uB3D9\uC758 \uC8FC\uC694 \uB3C4\uAD6C\uC778 STM32CubeMX\uB294 MCU\uB97C \uAD6C\uC131\uD558\uACE0 \uC77C\uBC18 \uC2A4\uD0C0\uD2B8\uC5C5 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4. \uC678\uBD80 RAM \uBC0F \uB514\uC2A4\uD50C\uB808\uC774 \uAC19\uC740 \uC8FC\uBCC0 \uC7A5\uCE58\uC758 \uACBD\uC6B0, \uCD08\uAE30\uD654 \uCF54\uB4DC\uC640 \uD2B9\uC815 \uC8FC\uBCC0 \uC7A5\uCE58 \uB4DC\uB77C\uC774\uBC84\uB97C \uC9C1\uC811 \uCD94\uAC00\uD558\uAC8C \uB429\uB2C8\uB2E4. STM32CubeMX\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC804\uCCB4 \uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC\uB97C \uC2E4\uD589\uD560 \uC218\uB3C4 \uC788\uC9C0\uB9CC, STM32 \uBC0F \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5\uC5D0 \uB300\uD55C \uC804\uBB38\uAC00\uC801 \uC9C0\uC2DD\uC774 \uC5C6\uB2E4\uBA74 \uC774 \uBC29\uBC95\uC744 \uAD8C\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates-ats"
  }), `TBS(TouchGFX Board Setup)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI \uD504\uB85C\uD1A0\uD0C0\uC774\uD551\uC744 \uC218\uD589 \uC911\uC774\uAC70\uB098 TouchGFX\uB97C \uC2DC\uD5D8 \uC0AC\uC6A9\uD574\uBCF4\uACE0 \uC2F6\uC740 \uACBD\uC6B0\uC5D0\uB294 TouchGFX Designer\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD45C\uC900 STM32 \uD3C9\uAC00 \uD0A4\uD2B8 \uC911 \uD558\uB098\uC5D0\uC11C \uAE30\uC874 TBS\uB97C \uAE30\uBC18\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 \uD544\uC694\uD55C \uBAA8\uB4E0 \uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4. TBS\uB294 STM32CubeMX \uAD6C\uC131\uC744 \uAE30\uBC18\uC73C\uB85C \uD558\uAE30 \uB54C\uBB38\uC5D0 \uB354 \uB9CE\uC740 \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uB97C \uC2E4\uD5D8\uD558\uAC70\uB098 \uCD94\uAC00\uD558\uB824\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAD6C\uC131\uC744 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uC804\uCCB4 \uC124\uBA85\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "board-bring-up/board-introduction"
  }), `Board Bring Up`), ` \uC139\uC158\uC5D0\uC11C \uCC3E\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-al-development"
  }), `TouchGFX AL \uAC1C\uBC1C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-002.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD65C\uB3D9\uC740 \uC644\uC804\uD788 \uCD08\uAE30\uD654\uB41C \uB514\uC2A4\uD50C\uB808\uC774 \uBCF4\uB4DC(\uB514\uC2A4\uD50C\uB808\uC774 \uBCF4\uB4DC + \uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC)\uB97C \uAE30\uBC18\uC73C\uB85C TouchGFX Engine\uC744 \uC2E4\uD589\uC2DC\uD0A4\uB294 \uB370 \uC788\uC5B4 \uC911\uC694\uD569\uB2C8\uB2E4. TouchGFX AL(Abstraction Layer)\uC774\uB77C\uACE0 \uD558\uB294 \uCD9C\uB825 \uAD6C\uC131 \uC694\uC18C\uB294 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uCD94\uC0C1\uD654\uD55C \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uACC4\uCE35\uC73C\uB85C\uC11C TouchGFX Engine\uC744 \uBCF4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-generator"
  }), `TouchGFX Generator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD65C\uB3D9\uC758 \uC8FC\uC694 \uB3C4\uAD6C\uC778 TouchGFX Generator\uB294 TouchGFX AL \uCF54\uB4DC\uC758 \uB300\uBD80\uBD84\uC744 \uAD6C\uC131 \uBC0F \uC0DD\uC131\uD560 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 STM32CubeMX \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uAC00 TouchGFX AL\uC758 \uC77C\uBD80\uB97C \uCF54\uB4DC\uB85C \uC9C1\uC811 \uC791\uC131\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX Generator\uB294 \uAD6C\uD604\uD560 \uBE48 \uD568\uC218\uB97C \uC0DD\uC131\uD568\uC73C\uB85C\uC368 \uC774 \uB2E8\uACC4\uC5D0\uC11C \uB3C4\uC6C0\uC744 \uC904 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX AL\uC774 \uC791\uB3D9\uD558\uB824\uBA74 \uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC\uAC00 \uC62C\uBC14\uB974\uAC8C \uC218\uD589\uB418\uACE0 MCU, \uC678\uBD80 RAM, \uB514\uC2A4\uD50C\uB808\uC774 \uB4F1\uC774 \uC62C\uBC14\uB974\uAC8C \uAD6C\uC131\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI \uD504\uB85C\uD1A0\uD0C0\uC774\uD551\uC744 \uC218\uD589 \uC911\uC774\uAC70\uB098 TouchGFX\uB97C \uC2DC\uD5D8 \uC0AC\uC6A9\uD574\uBCF4\uACE0 \uC2F6\uC740 \uACBD\uC6B0\uC5D0\uB294 TouchGFX Designer\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD45C\uC900 STM32 \uD3C9\uAC00 \uD0A4\uD2B8 \uC911 \uD558\uB098\uC5D0\uC11C \uAE30\uC874 TBS\uB97C \uAE30\uBC18\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 \uD544\uC694\uD55C TouchGFX AL \uCF54\uB4DC\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB429\uB2C8\uB2E4. TBS\uB294 CubeMX \uBC0F TouchGFX Generator \uAD6C\uC131\uC744 \uAE30\uBC18\uC73C\uB85C \uD558\uAE30 \uB54C\uBB38\uC5D0 \uB098\uC911\uC5D0 \uC2E4\uD5D8\uC744 \uD574\uBCF4\uACE0 \uC2F6\uC740 \uACBD\uC6B0\uC5D0 \uAD6C\uC131\uC744 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uC804\uCCB4 \uC124\uBA85\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `TouchGFX AL Development`), ` \uC139\uC158\uC5D0\uC11C \uCC3E\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ui-development"
  }), `UI \uAC1C\uBC1C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-000.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB9C8\uB3C4 \uAC1C\uBC1C\uC790\uB294 \uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C \uC2DC\uAC04\uC758 \uB300\uBD80\uBD84\uC744 \uC774 \uD65C\uB3D9\uC5D0 \uD560\uC560\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 TouchGFX UI Application\uC774\uB77C\uB294 \uAD6C\uC131 \uC694\uC18C\uC640 \uAC19\uC774 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uB208\uC5D0 \uBCF4\uC774\uB294 \uBD80\uBD84\uC744 \uAD6C\uC131\uD558\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer"
  }), `TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC640 \uAC1C\uBC1C\uC790\uAC00 \uC990\uACA8 \uC0AC\uC6A9\uD558\uB294 IDE \uB610\uB294 \uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uAE30\uAC00 \uC774 \uD65C\uB3D9\uC758 \uC8FC\uC694 \uB3C4\uAD6C\uC785\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD654\uBA74\uC744 \uC124\uC815, \uB514\uC790\uC778 \uBC0F \uC0DD\uC131\uD558\uACE0 TouchGFX UI Application\uC758 \uC8FC\uC694 \uBD80\uBD84\uC744 C++ \uCF54\uB4DC\uB85C \uC791\uC131\uD569\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB85C\uC9C1(\uC774\uBCA4\uD2B8 \uCC98\uB9AC, \uC2DC\uC2A4\uD15C\uC5D0\uC11C UI\uAC00 \uC544\uB2CC \uBD80\uBD84\uACFC\uC758 \uD1B5\uC2E0)\uC5D0\uC11C IDE \uB610\uB294 \uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uAE30\uB97C \uC0AC\uC6A9\uD574 TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB41C \uCF54\uB4DC\uC640 \uACF5\uC874 \uBC0F \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 C++ \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-screen-4.17.png",
    noShadow: true,
    width: "300",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates"
  }), `TBS(TouchGFX Board Setup)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI \uD504\uB85C\uD1A0\uD0C0\uC774\uD551\uC744 \uC218\uD589 \uC911\uC774\uAC70\uB098 TouchGFX\uB97C \uC2DC\uD5D8 \uC0AC\uC6A9\uD558\uACE0 \uB2E4\uB978 \uD65C\uB3D9\uB4E4\uC744 \uC218\uD589\uD558\uB294 \uB370 \uC2DC\uAC04\uC744 \uC18C\uC694\uD558\uACE0 \uC2F6\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 PC \uAE30\uBC18 TouchGFX Simulator\uB97C \uD1A0\uB300\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC1C\uBC1C\uD558\uAC70\uB098, \uD45C\uC900 STM32 \uD3C9\uAC00 \uD0A4\uD2B8 \uC911 \uD558\uB098\uC5D0\uC11C \uAE30\uC874 TBS \uC911 \uD558\uB098\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5B4\uB5A4 \uACBD\uC6B0\uB4E0 TouchGFX UI Application \uAC1C\uBC1C\uC744 \uC989\uC2DC \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ui-templates"
  }), `\uB370\uBAA8 \uBC0F \uC608\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5B4\uB5A4 \uAC83\uC744 \uC2E4\uD589\uD574\uBCF4\uACE0 \uC2F6\uAC70\uB098 \uB2E4\uB978 \uC0AC\uB840\uB97C \uCC38\uC870\uD558\uACE0 \uC2F6\uC740 \uACBD\uC6B0\uC5D0\uB294 TouchGFX Designer\uC5D0\uC11C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uB54C \uB098\uD0C0\uB098\uB294 TouchGFX \uB370\uBAA8 \uB610\uB294 \uC608\uC2DC \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uB2E4\uB978 \uC791\uC5C5 \uC5C6\uC774 \uCEF4\uD30C\uC77C \uBC0F \uD50C\uB798\uC2F1\uC744 \uD574\uC11C \uC2E4\uD589\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware-1"
  }), `\uB9DE\uCDA4\uD615 \uD558\uB4DC\uC6E8\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uB978 \uBAA8\uB4E0 \uD65C\uB3D9\uC744 \uC774\uBBF8 \uC644\uB8CC\uD558\uC5EC TouchGFX Application\uC5D0\uC11C \uC2E4\uD589\uD560 \uBCF4\uB4DC\uAC00 \uC900\uBE44\uB41C \uACBD\uC6B0\uC5D0\uB294 \uCC98\uC74C\uBD80\uD130 \uC2DC\uC791\uD558\uAC70\uB098, \uC608\uC2DC \uB610\uB294 \uB370\uBAA8 \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9DE\uCDA4\uD615 \uBCF4\uB4DC\uC758 \uD574\uC0C1\uB3C4\uC640 \uC608\uC2DC\uAC00 \uC77C\uCE58\uD558\uBA74 \uC608\uC2DC\uB098 \uB370\uBAA8\uAC00 \uB9DE\uCDA4\uD615 \uBCF4\uB4DC\uC5D0\uC11C\uB3C4 \uC2E4\uD589\uC774 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uC804\uCCB4 \uC124\uBA85\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "ui-development/ui-development-introduction"
  }), `UI Development`), ` \uC139\uC158\uC5D0\uC11C \uCC3E\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "workflow"
  }), `\uC791\uC5C5 \uD750\uB984`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCF4\uC2DC\uB2E4\uC2DC\uD53C TouchGFX \uAC1C\uBC1C\uC5D0\uB294 \uB9CE\uC740 \uD65C\uB3D9\uACFC \uB3C4\uAD6C\uAC00 \uAD00\uC5EC\uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC, \uD55C \uBC88\uC5D0 \uBAA8\uB4E0 \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uD544\uC694\uAC00 \uC5C6\uACE0 UI \uAC1C\uBC1C\uC744 \uC2DC\uC791\uD558\uAE30 \uC804\uC5D0 \uB514\uC2A4\uD50C\uB808\uC774 \uBCF4\uB4DC, \uBCF4\uB4DC \uCD08\uAE30\uD654 \uCF54\uB4DC \uBC0F TouchGFX AL\uC774 \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uAC83\uC740 \uC544\uB2C8\uB77C\uB294 \uC810\uC5D0 \uC720\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uB098 TouchGFX Simulator\uB97C \uC0AC\uC6A9\uD574 \uC774\uB97C \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",
    noShadow: true,
    width: "700",
    mdxType: "Figure"
  }, "TouchGFX Designer \uC791\uC5C5 \uD750\uB984"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code-and-user-code"
  }), `\uC0DD\uC131\uB41C \uCF54\uB4DC \uBC0F \uC0AC\uC6A9\uC790 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCF4\uB4DC \uBE0C\uB9C1\uC5C5, TouchGFX AL \uAC1C\uBC1C, UI \uAC1C\uBC1C \uB4F1 \uC138 \uAC00\uC9C0 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uD65C\uB3D9\uC5D0\uC11C \uAC01\uAE30 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uB294 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB3C4\uAD6C\uB4E4\uC740 \uBCF4\uD1B5 \uAC1C\uBC1C\uC790\uAC00 \uD544\uC694\uB85C \uD558\uB294 \uBAA8\uB4E0 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uC9C0 \uC54A\uC73C\uBA70, \uAC1C\uBC1C\uC790\uAC00 \uC0AC\uC6A9\uC790 \uC791\uC131 \uCF54\uB4DC\uB97C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC138 \uAC00\uC9C0 \uB3C4\uAD6C \uBAA8\uB450\uC5D0\uC11C \uB3C4\uAD6C \uC0AC\uC6A9 \uBAA8\uB4DC\uC640 \uCF54\uB4DC \uC791\uC131 \uBAA8\uB4DC \uAC04\uC744 \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0DD\uC131\uB41C \uCF54\uB4DC\uC640 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB294 \uB3C5\uB9BD\uC801\uC774\uAE30 \uB54C\uBB38\uC5D0 \uBCC4\uB3C4\uB85C \uC5C5\uB370\uC774\uD2B8\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uB294 \uB54C\uC5D0 \uB530\uB77C \uD65C\uB3D9 \uAC04\uC744 \uC804\uD658\uD558\uBA74\uC11C \uC11C\uB85C \uB2E4\uB978 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uB9E4\uC6B0 \uAC04\uB2E8\uD55C TouchGFX UI\uB97C \uC0AC\uC6A9\uD574 TouchGFX AL\uC744 \uD14C\uC2A4\uD2B8\uD558\uB294 TouchGFX AL \uAC1C\uBC1C \uD65C\uB3D9\uC744 \uC218\uD589\uD560 \uB54C \uC885\uC885 \uC774\uB7F0 \uACBD\uC6B0\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uB3C4\uAD6C, \uC0DD\uC131 \uCF54\uB4DC \uBC0F \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uAC00 \uC11C\uB85C \uACF5\uC874\uD558\uACE0 \uC5B4\uB5A4 \uBB38\uC81C\uB3C4 \uC5C6\uC774 \uC5C5\uB370\uC774\uD2B8\uAC00 \uAC00\uB2A5\uD558\uAE30 \uB54C\uBB38\uC5D0 \uD65C\uB3D9 \uAC04\uC744 \uC804\uD658\uD558\uB294 \uB370 \uC544\uBB34\uB7F0 \uBB38\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "change-of-compileride"
  }), `\uCEF4\uD30C\uC77C\uB7EC/IDE \uBCC0\uACBD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uB294 \uD65C\uB3D9 \uC911\uC5D0 \uB300\uC0C1 \uBCF4\uB4DC\uC5D0\uC11C \uCF54\uB4DC\uB97C \uCEF4\uD30C\uC77C\uD574\uC57C \uD569\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C \uC9C0\uC6D0\uB418\uB294 \uCEF4\uD30C\uC77C\uB7EC\uB85C\uB294 IAR, ARMCC, ARMCLANG \uBC0F GCC(STM32CubeIDE)\uAC00 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC120\uD0DD\uD55C \uD234\uCCB4\uC778\uC740 STM32CubeMX\uC5D0 \uAD6C\uC131\uC774 \uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC774\uB97C \uBCC0\uACBD\uD558\uACE0 \uC2F6\uC73C\uBA74 STM32CubeMX\uC5D0\uC11C TouchGFX \uD504\uB85C\uC81D\uD2B8 .ioc \uD30C\uC77C\uC744 \uC5F4\uACE0 \uD234\uCCB4\uC778 \uC124\uC815\uC744 \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C TBS\uB97C \uC120\uD0DD\uD558\uBA74 \uD558\uB098\uC758 \uD234\uCCB4\uC778\uC774 \uBBF8\uB9AC \uC120\uD0DD\uB418\uAE30 \uB54C\uBB38\uC5D0 \uD234\uCCB4\uC778 \uC911 \uD558\uB098\uC5D0 \uB300\uD55C \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uB9CC \uBCF4\uC77C \uAC83\uC785\uB2C8\uB2E4. AT\uC5D0\uB294 .ioc\uAC00 \uD568\uAED8 \uC81C\uACF5\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC774\uAC83\uC744 \uC5F4\uC5B4\uC11C \uD544\uC694\uC5D0 \uB9DE\uAC8C \uD234\uCCB4\uC778\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);