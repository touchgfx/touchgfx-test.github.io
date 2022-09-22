"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9007],{

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

/***/ 38551:
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
  id: "texts-view",
  title: "\uD14D\uC2A4\uD2B8 \uBDF0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/texts-view",
  "id": "development/ui-development/designer-user-guide/texts-view",
  "title": "\uD14D\uC2A4\uD2B8 \uBDF0",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/texts-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/texts-view",
  "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/texts-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "texts-view",
    "title": "\uD14D\uC2A4\uD2B8 \uBDF0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC774\uBBF8\uC9C0 \uBDF0",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/images-view"
  },
  "next": {
    "title": "\uAD6C\uC131 \uBDF0",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/config-view"
  }
};
const assets = {};

const toc = [{
  value: "Texts",
  id: "texts",
  level: 2
}, {
  value: "Auto-generated ID",
  id: "auto-generated-id",
  level: 3
}, {
  value: "Defined ID",
  id: "defined-id",
  level: 3
}, {
  value: "Texts tab features",
  id: "texts-tab-features",
  level: 3
}, {
  value: "\uBC88\uC5ED",
  id: "translations",
  level: 3
}, {
  value: "\uBC88\uC5ED \uC138\uBD80 \uC124\uC815",
  id: "translations-specifics",
  level: 3
}, {
  value: "\uC5B8\uC5B4 \uCD94\uAC00",
  id: "adding-languages",
  level: 3
}, {
  value: "\uD0C0\uC774\uD3EC\uADF8\uB798\uD53C",
  id: "typographies",
  level: 2
}, {
  value: "Add Typography",
  id: "add-new-typography",
  level: 3
}, {
  value: "Delete Typography",
  id: "delete-typography",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uD14D\uC2A4\uD2B8 \uBDF0\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uD14D\uC2A4\uD2B8, \uBC88\uC5ED \uBC0F \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB97C \uAD6C\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. The view consists of two tabs: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#texts"
  }), `Texts`), `, and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#typographies"
  }), `Typographies`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "texts"
  }), `Texts`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Texts tab gives an overview of all texts elements. A text element can either have an `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#auto-generated-id"
  }), `auto-generated ID`), ` or a `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#defined-id"
  }), `defined ID`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view.png",
    mdxType: "Figure"
  }, "\uD14D\uC2A4\uD2B8 \uBDF0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "auto-generated-id"
  }), `Auto-generated ID`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texts with an auto-generated ID (also known as Single Use texts) are only used once, and cannot be used by more than one widget or action at a time. They are added automatically when used on a widget or action, and are deleted automatically when the widget or action is deleted.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When auto-generated texts are initially created, they are added to a text group named `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `"Unsorted"`), `. if this group does not exist, it will be created.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The auto-generated ID can easily be renamed thereby enabling the use of the text on any number of widgets and actions.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-auto-generated.png",
    mdxType: "Figure"
  }, "Auto-generated texts in Texts View"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "defined-id"
  }), `Defined ID`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texts with a defined ID (also known as Resources) can be reused on any number of widgets and actions in the TouchGFX Designer. To add a new text with a defined ID, click the button labeled 'ADD NEW TEXT' in the Texts tab or rename a text with an auto-generated ID. One or more texts with a defined ID can be deleted in the Texts tab by selecting in grid or tree view and right clicking to open the shortcut menu or use the keyboard shortcut.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "texts-tab-features"
  }), `Texts tab features`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Search:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Use the search bar to locate a specific text element or translation. All available input in text columns is searched.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Tree view:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` The Texts tab contain a tree giving an overview of groups and text elements.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Groups:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Every group in the tree, that contains one or more texts can be collapsed by pressing the chevron next to the group's name. Groups can have text added to them either by dragging a text in tree view or by right clicking a text in grid. To add a new group simply click the add button in tree view.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-groups.png",
    mdxType: "Figure"
  }, "Text Groups"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Header context menu:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Right click the header in grid to see the header context menu. From here you can hide, edit, delete, and show a column (not all options are available for all columns).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-header-context-menu.png",
    mdxType: "Figure"
  }, "Header context menu"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Grid context menu:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Right click a text in grid to see the context menu. From here you can delete, copy, paste, and move a text to another group.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-text-context-menu.png",
    mdxType: "Figure"
  }, "Text context menu"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations"
  }), `\uBC88\uC5ED`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Typography:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Specifies which typography the text and all its translations should use. Typographies can be added and configured in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#typographies"
  }), `Typographies`), ` tab.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Alignment:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uD14D\uC2A4\uD2B8\uC640 \uD14D\uC2A4\uD2B8\uC758 \uBAA8\uB4E0 \uBC88\uC5ED\uC5D0\uC11C \uAE30\uBCF8\uC801\uC73C\uB85C \uC0AC\uC6A9\uD574\uC57C \uD560 \uAC00\uB85C \uC815\uB82C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uAC00\uB2A5\uD55C \uAC12\uC740 Left, Right, Center\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations-specifics"
  }), `\uBC88\uC5ED \uC138\uBD80 \uC124\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Each translation can overwrite the default Alignment. To reveal this control double click a translation. Setting a translation specific alignment is easily done through the inline Alignment selector, as shown in the figure below.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-edit-language-specific-text-alignment.png",
    mdxType: "Figure"
  }, "\uBC88\uC5ED\uBCC4 \uC815\uB82C \uC124\uC815 \uBC29\uBC95"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-languages"
  }), `\uC5B8\uC5B4 \uCD94\uAC00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `To add a new language, simply press the add button in the header menu. \uADF8\uB7EC\uBA74 \uC544\uB798 \uADF8\uB9BC\uACFC \uAC19\uC774 \uD31D\uC5C5 \uCC3D\uC774 \uB098\uD0C0\uB098\uB294\uB370, \uC5EC\uAE30\uC11C \uC5B8\uC5B4 \uC774\uB984\uC744 \uAD6C\uC131\uD558\uAC70\uB098 \uB2E4\uB978 \uC5B8\uC5B4\uC758 \uBC88\uC5ED \uC0AC\uC6A9 \uC5EC\uBD80\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-add-language.png",
    mdxType: "Figure"
  }, "Add New Language \uD31D\uC5C5 \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "typographies"
  }), `\uD0C0\uC774\uD3EC\uADF8\uB798\uD53C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Typographies \uD0ED\uC5D0\uB294 \uC544\uB798 \uADF8\uB9BC\uACFC \uAC19\uC774 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uBAA8\uB4E0 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC758 \uAC1C\uC694\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view.png",
    mdxType: "Figure"
  }, "Typographies view"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Typography ID:`), ` The name of the typography.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Language Settings:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Contains the language settings of the typography. Default applies to all unspecified languages. To specify settings for a specific language click the add button and choose the desired language from the menu.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-language-setting.png",
    mdxType: "Figure"
  }, "Add Language Setting to Typography"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A language setting can be deleted by right clicking the desired language setting tab.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-language-setting.png",
    mdxType: "Figure"
  }, "Delete Language Setting to Typography"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Font:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uD2B9\uC815 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0 \uC0AC\uC6A9\uD560 \uAE00\uAF34\uC758 \uC774\uB984\uC785\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Windows\uC5D0 \uC124\uCE58\uB41C \uAE00\uAF34 \uC911\uC5D0\uC11C \uC120\uD0DD\uD558\uAC70\uB098, \uD639\uC740 \uC6D0\uD558\uB294 \uAE00\uAF34\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/fonts`), ` \uD3F4\uB354\uC5D0 \uCD94\uAC00\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC774 \uD3F4\uB354\uC5D0 \uAE00\uAF34\uC744 \uCD94\uAC00\uD560 \uACBD\uC6B0 TouchGFX Designer\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD574\uC57C \uCD94\uAC00\uB41C \uAE00\uAF34\uC744 \uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Size:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` The font size of the typography.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Bpp:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Bits per pixel\uC758 \uC57D\uC5B4\uC785\uB2C8\uB2E4. \uD53D\uC140\uB2F9 \uC0AC\uC6A9\uB418\uB294 \uBE44\uD2B8 \uC218\uB85C, \uAE00\uAF34\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uD5C8\uC6A9\uB418\uB294 \uAC12\uC740 1, 2, 4, 8\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Direction:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Specifies which text direction the text should use. \uAC00\uB2A5\uD55C \uAC12\uC740 LTR(\uC67C\uCABD\uC5D0\uC11C \uC624\uB978\uCABD\uC73C\uB85C)\uACFC RTL(\uC624\uB978\uCABD\uC5D0\uC11C \uC67C\uCABD\uC73C\uB85C)\uC774\uBA70, \uAE30\uBCF8\uAC12\uC740 LTR\uC785\uB2C8\uB2E4. RTL \uC635\uC158\uC740 \uC8FC\uB85C \uC544\uB78D\uC5B4\uC640 \uD788\uBE0C\uB9AC\uC5B4, \uB610\uB294 \uC624\uB978\uCABD\uC5D0\uC11C \uC67C\uCABD\uC73C\uB85C \uC4F0\uC5EC\uC9C0\uB294 \uC5B8\uC5B4\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Fallback Character:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` TouchGFX\uC5D0\uC11C \uBB38\uC790\uB97C \uB80C\uB354\uB9C1\uD574\uC57C \uD558\uC9C0\uB9CC \uAE00\uB9AC\uD504\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0 \uC774 \uC5F4\uC5D0 \uC9C0\uC815\uB41C \uBB38\uC790\uAC00 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAC12\uC740 \uB2E8\uC77C \uBB38\uC790, \uC720\uB2C8\uCF54\uB4DC \uAC12 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `(10\uC9C4\uBC95 \uB610\uB294 16\uC9C4\uBC95, \uC608: 0xABCD)`), `, \uD2B9\uC218 \uD0A4\uC6CC\uB4DC 'skip' \uB610\uB294 \uACF5\uBC31\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Wildcard Characters:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD45C\uC2DC\uD560 \uC218 \uC788\uB294 \uBB38\uC790\uC785\uB2C8\uB2E4. \uB354\uBBF8 \uD14D\uC2A4\uD2B8 \uB300\uC2E0 \uC774 \uBB38\uC790\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uB354\uBBF8 \uD14D\uC2A4\uD2B8\uB294 \uBAA8\uB4E0 \uAE00\uB9AC\uD504\uB294 \uBB3C\uB860\uC774\uACE0 \uC2E4\uC81C \uBB38\uC790\uC5F4\uAE4C\uC9C0 \uC0DD\uC131\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4(\uC608: "0123456789-"). \uC774 \uC5F4\uC5D0 "0123456789-"\uC744 \uC785\uB825\uD558\uBA74 \uBB38\uC790\uC5F4\uC744 \uC81C\uC678\uD55C \uAE00\uB9AC\uD504\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Widget Wildcard Characters:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC640\uC77C\uB4DC\uCE74\uB4DC\uAC00 \uD544\uC694\uD55C \uC704\uC82F\uC5D0\uC11C \uCD94\uAC00\uD558\uB294 \uBB38\uC790\uC785\uB2C8\uB2E4. As an example the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/digital-clock"
  }), `Digital Clock`), ` widget will add "0123456789 :APM" to this field. The field is read only.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Wildcard Ranges:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774\uB294 Wildcard Characters\uC640 \uC720\uC0AC\uD558\uC9C0\uB9CC \uBC94\uC704 \uC9C0\uC815\uC774 \uC27D\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 "0-9,A-F"\uB294 Wildcard Characters \uC5F4\uC5D0 "0123456789ABCDEF\u201D\uB97C \uC785\uB825\uD558\uB294 \uAC83\uACFC \uAC19\uC2B5\uB2C8\uB2E4. \uC22B\uC790\uB85C\uB3C4 \uBC94\uC704\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 "0-9"\uB97C "48-57" \uB610\uB294 "0x30-0x39"\uB85C \uC9C0\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uC778\uC6A9 \uBD80\uD638\uB294 \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Ellipsis Character:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uBB38\uC790\uB294 \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC5D0\uC11C \uAE34 \uBB38\uC790\uB97C \uC790\uB974\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "add-new-typography"
  }), `Add Typography`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `To add a new typography, simply press the add button in tree view. A new typography containing default settings will be added to the bottom of the list.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-typography.png",
    mdxType: "Figure"
  }, "Add Typography"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "delete-typography"
  }), `Delete Typography`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A typography can be deleted by right clicking the desired typography in tree view to open the shortcut menu or use the keyboard shortcut.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-typography.png",
    mdxType: "Figure"
  }, "Delete Typography"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);