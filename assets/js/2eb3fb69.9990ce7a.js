"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2379],{

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

/***/ 51912:
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
  title: "Development Introduction"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/development-introduction",
  "id": "development/development-introduction",
  "title": "Development Introduction",
  "description": "",
  "source": "@site/docs/development/development-introduction.mdx",
  "sourceDirName": "development",
  "slug": "/development/development-introduction",
  "permalink": "/4.20/docs/development/development-introduction",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "development-introduction",
    "title": "Development Introduction"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Memory Usage",
    "permalink": "/4.20/docs/basic-concepts/memory-usage"
  },
  "next": {
    "title": "Hardware Selection Introduction",
    "permalink": "/4.20/docs/development/hardware-selection/hardware-selection-introduction"
  }
};
const assets = {};



const toc = [{
  value: "Main Activities",
  id: "main-activities",
  level: 2
}, {
  value: "Main Components",
  id: "main-components",
  level: 2
}, {
  value: "Hardware Selection",
  id: "hardware-selection",
  level: 2
}, {
  value: "Prototyping",
  id: "prototyping",
  level: 3
}, {
  value: "Custom Hardware",
  id: "custom-hardware",
  level: 3
}, {
  value: "Board Bring Up",
  id: "board-bring-up",
  level: 2
}, {
  value: "STM32CubeMX",
  id: "stm32cubemx",
  level: 3
}, {
  value: "TouchGFX Board Setups (TBSs)",
  id: "application-templates-ats",
  level: 3
}, {
  value: "TouchGFX AL Development",
  id: "touchgfx-al-development",
  level: 2
}, {
  value: "TouchGFX Generator",
  id: "touchgfx-generator",
  level: 3
}, {
  value: "UI Development",
  id: "ui-development",
  level: 2
}, {
  value: "TouchGFX Designer",
  id: "touchgfx-designer",
  level: 3
}, {
  value: "TouchGFX Board Setups",
  id: "application-templates",
  level: 3
}, {
  value: "Demos and Examples",
  id: "ui-templates",
  level: 3
}, {
  value: "Custom Hardware",
  id: "custom-hardware-1",
  level: 3
}, {
  value: "Workflow",
  id: "workflow",
  level: 2
}, {
  value: "Generated Code and User Code",
  id: "generated-code-and-user-code",
  level: 3
}, {
  value: "Change of Compiler/IDE",
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
  }), `Main Activities`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A TouchGFX project involves a set of activities that you will be addressing during the development phase. The effort in each of them are dependent on what the goal of your project is. If you are doing a UI prototype you can use premade code for major parts of the application and thus speed up your project development by skipping most of these activities. If you are doing a full project based on a custom made board, you will be addressing each of these activities in your project.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-activities.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "A TouchGFX projects main activities"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "main-components"
  }), `Main Components`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Your TouchGFX project is made up of five main software and hardware components. Each of the activities will generate one of the main component for your TouchGFX project. The TouchGFX Engine is not an output of any main activity, this is the starting point for your TouchGFX project and is available when you have downloaded and installed.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/tgfx-components.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "A TouchGFX projects main components"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The following sections will give an overview of each of the activities and components. Each of the activities are further described in full details in this chapters remaining sections.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-selection"
  }), `Hardware Selection`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-004.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This activity is the initial activity in your TouchGFX project. Selecting the hardware on which  your application will run. Deciding on which hardware components you need and what influences these have on your TouchGFX application. When you are done with this step you have a Display Board available for your TouchGFX project.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "prototyping"
  }), `Prototyping`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you are doing a UI prototype an STM32 Evaluation Kit will be the perfect choice to get up and running quickly. Here there are no considerations to be done about the hardware components, how to connect to the board or similar issues. In this case the Hardware Selection activity is only a matter of selecting an available STM32 Evaluation kit, which is the best match with your final product in terms of MCU performance, memory setup and display size.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware"
  }), `Custom Hardware`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you are creating your own hardware solution there are a lot of choices to be made and issues to consider. The section `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `Hardware Selection`), ` will help you in this task, answering a lot of questions and describe how your choices influence a TouchGFX application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Often in your project you will not have the final hardware ready before late in the project. In this case it is very common to select an STM32 Evaluation Kit that resembles your final board and use this in the first steps of UI Development. If you do not have such board, you can also start out by just using the TouchGFX Simulator that runs on your PC.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A full description of this step can be found in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection/hardware-selection-introduction"
  }), `Hardware Selection`), ` section.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "board-bring-up"
  }), `Board Bring Up`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-003.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This activity is a central task to enable TouchGFX to be executed on your board. The output component is called Board Initialization Code which is a general initialization code that setup your MCU and all peripherals, preparing it for application execution. This initialization code is independent of TouchGFX, it is only handling pure hardware setup.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubemx"
  }), `STM32CubeMX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The main tool for this activity is STM32CubeMX. It helps you configuring the MCU and generate general startup code. For peripherals, such as external RAM and Display, you will add initialization code and specific peripheral drivers yourself. It is also possible to do the entire Board Initialization Code without use of STM32CubeMX, but is not recommended unless you have expert knowledge on STM32 and board bring up.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates-ats"
  }), `TouchGFX Board Setups (TBSs)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. These include all the Board Initialization Code needed. The TBSs are based on a STM32CubeMX configuration, so it is possible for you to modify the configuration if you want to experiment or add access to more peripherals.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A full description of this step can be found in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "board-bring-up/board-introduction"
  }), `Board Bring Up`), ` section.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-al-development"
  }), `TouchGFX AL Development`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-002.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This activity is key in making the TouchGFX Engine run on top of your fully initialized Display Board (Display Board + Board Initialization Code). The output component is called TouchGFX Abstraction Layer (AL) and is a software layer that is an abstraction of your hardware and enables the TouchGFX Engine to run on your board.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-generator"
  }), `TouchGFX Generator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The main tool in this activity is TouchGFX Generator which is a STM32CubeMX plugin that allows you to configure and generate most of the TouchGFX AL code. You will most probably also write some part of the TouchGFX AL in code by yourself. The TouchGFX Generator will assist you in this step by creating empty functions for you to implement.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `It is important to notice that for your TouchGFX AL to work it is important that your Board Initialization Code is done correctly and that the MCU, External RAM, Display and so on is configured correctly.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. This includes all the TouchGFX AL code you need. The TBSs are based on a CubeMX and TouchGFX Generator configuration, so it is possible for you to modify the configuration if you want to experiment later on.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A full description of this step can be found in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `TouchGFX AL Development`), ` section.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ui-development"
  }), `UI Development`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/activity-puzzle-000.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This activity is where you probably will spend most of your project development time. Here you will create the User Interface code that will make up the visible part of your TouchGFX project, the component which is called the TouchGFX UI Application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer"
  }), `TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The main tools in this activity are TouchGFX Designer and your favorite IDE or text editor. In TouchGFX Designer you will setup, design and create the screens in your application and generate main parts of the UI Application as C++ code. For the application logic (handling events, communicating with the non-UI part of the system) you will use an IDE or text editor to write C++ code, that coexists and interacts with the generated code from TouchGFX Designer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-screen-4.17.png",
    noShadow: true,
    width: "300",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-templates"
  }), `TouchGFX Board Setups`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you are doing a UI Prototype or just want to try out TouchGFX and do not want to spend time doing the other activities, you can either base your application on the PC based TouchGFX Simulator or you can use one of the existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits. In any case you are ready to start developing your UI Application right away.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ui-templates"
  }), `Demos and Examples`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you just want something to run or want to be inspired you can select one of the TouchGFX demos or examples which can be found when creating a new project in TouchGFX Designer. IF you do so, nothing has to be done, just compile, flash and run.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-hardware-1"
  }), `Custom Hardware`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you have already done all the other activities and thus have a running board ready for a TouchGFX Application you can either start from scratch or select one of the examples or demo. If the resolutions of your custom board and the example match then they should run on your custom board as well.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A full description of this step can be found in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "ui-development/ui-development-introduction"
  }), `UI Development`), ` section.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "workflow"
  }), `Workflow`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As you can see TouchGFX development involves a lot of activites and tools. It is, however, important to notice that you do not need to do them all at once, and you do not necessarily need your Display Board, Board Initialization Code and TouchGFX AL before starting your UI development. This can be done using STM32 Evaluation Kits or the TouchGFX Simulator.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",
    noShadow: true,
    width: "700",
    mdxType: "Figure"
  }, "TouchGFX Designer workflow"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generated-code-and-user-code"
  }), `Generated Code and User Code`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In each of the three software activities, Board Bring Up, TouchGFX AL Development and UI Development, you will use tools that generate code for you. Common for these tools is that they do not generate all the code you need, you will be adding user written code to the project as well. For all three tools you can go back and forth between using the tool and writing code. The generated code and the user code are independent and can be updated separately.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Sometimes you will also be switching back and forth between the activities and thus using different tools. This is often the case when doing TouchGFX AL Development, where you have a very simple TouchGFX UI to test your TouchGFX AL. There is, however, no problem shifting between activities, as the tools, the generate code and your user code coexists and can be updated without any problem.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "change-of-compileride"
  }), `Change of Compiler/IDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `During the activities you will have to compile your code for your target board. The compilers supported by TouchGFX are IAR, ARMCC, ARMCLANG and GCC(STM32CubeIDE). The toolchain selected for your TouchGFX project is configured in STM32CubeMX, so if you want to change it you should open the TouchGFX project .ioc file in STM32CubeMX and change the toolchain setting.
When selecting an TouchGFX Board Setup (TBS) in TouchGFX Designer it will have one toolchain preselected, so you will only find a project file for one of the toolchains. As the AT comes with an .ioc as well, you can open it and change the toolchain to match your needs.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);