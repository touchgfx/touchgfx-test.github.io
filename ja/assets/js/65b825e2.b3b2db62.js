"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7938],{

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

/***/ 95234:
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
  id: "changelog",
  title: "\u66F4\u65B0\u5C65\u6B74"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/changelog",
  "id": "miscellaneous/changelog",
  "title": "\u66F4\u65B0\u5C65\u6B74",
  "description": "Version 4.20.0",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/miscellaneous/changelog.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/changelog",
  "permalink": "/4.20/ja/docs/miscellaneous/changelog",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "changelog",
    "title": "\u66F4\u65B0\u5C65\u6B74"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u65E2\u77E5\u306E\u554F\u984C",
    "permalink": "/4.20/ja/docs/miscellaneous/known-issues"
  },
  "next": {
    "title": "TouchGFX\u306E\u30B5\u30FC\u30C9\uFF65\u30D1\u30FC\u30C6\u30A3\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",
    "permalink": "/4.20/ja/docs/miscellaneous/3rd-party-components-in-touchgfx"
  }
};
const assets = {};
const toc = [{
  value: "Version 4.20.0",
  id: "version-4200",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.19.1",
  id: "version-4191",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.19.0",
  id: "version-4190",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.18.1",
  id: "version-4181",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.18.0",
  id: "version-4180",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.17.0",
  id: "version-4170",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.16.1",
  id: "version-4161",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.16.0",
  id: "version-4160",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.15.0",
  id: "version-4150",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.14.0",
  id: "version-4140",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.13.4",
  id: "version-4134",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.13.3",
  id: "version-4133",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.13.2",
  id: "version-4132",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.13.1",
  id: "version-4131",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.13.0",
  id: "version-4130",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.12.3",
  id: "version-4123",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.12.2",
  id: "version-4122",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.12.1",
  id: "version-4121",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.12.0",
  id: "version-4120",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.11.0",
  id: "version-4110",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.10.0",
  id: "version-4100",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.9.4",
  id: "version-494",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.9.3",
  id: "version-493",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.9.2",
  id: "version-492",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.9.1",
  id: "version-491",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.9.0",
  id: "version-490",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.8.0",
  id: "version-480",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.7.0",
  id: "version-470",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.6.1",
  id: "version-461",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.6.0",
  id: "version-460",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.5.1",
  id: "version-451",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.5.0",
  id: "version-450",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.4.2",
  id: "version-442",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.4.1",
  id: "version-441",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.4.0",
  id: "version-440",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.3.0",
  id: "version-430",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.2.0",
  id: "version-420",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.1.1",
  id: "version-411",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.1.0",
  id: "version-410",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F34.0.0",
  id: "version-400",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F33.1.0",
  id: "version-310",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F33.0.0",
  id: "version-300",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F32.2.0",
  id: "version-220",
  level: 2
}, {
  value: "\u30D0\u30FC\u30B8\u30E7\u30F32.1.0",
  id: "version-210",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4200"
  }), `Version 4.20.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Release date: June 22nd, 2022`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Import and Export of custom containers.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `A new notification will tell why F5- and F6-shortcuts are unavailable.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `A new Code-menu with the ability to run simulator, run target, generate code and open project files.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `New trigger added, with the ability to trigger on every N-tick.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Ability to copy text ressource Id, similar to copying image-Id.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Run-buttons update when validation changes.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Some widgets now support non-int radius, including circle.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed Menu-items being available via shortcuts in the lobby.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed SetShapeColor Action not generating correct code.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed TextArea widget was not showing text when outside its parent, when canvas was set to show clipped content.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed text alignment for auto-generated text not being copied correctly when copying and pasting a widget using the text.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Removed "FileNameImage"-property from the .touchgfx file which appeared by clicking "Image"-button, the "Color"-button and then generating code.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Changed order and categorization ButtonWithLabel of properties.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed rotation of text in TextArea widget not rotating as expected.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed not being able to write a newline in text-fields.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Action SetLanguage will now work without a text area.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed fonts in font picker dropdown not being sorted alphabetically.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed dropdowns not responding to keyboard input to navigate to a desired item.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Canvas Widget Renderer (CWR) is now significantly faster. CWR has been optimized and all painters have been rewritten and optimized to give faster rendering even with less memory. Painters now have a new interface, so old custom painters have to be rewritten, e.g. by altering one of the painters included in TouchGFX or reading the article on the subject. Further, painters for 16bpp and 24bpp will use hardware acceleration (when possible).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `If using CanvasWidgetRenderer::setupBuffer(), remember to include the line #include `, `<`, `touchgfx/canvas_widget_renderer/CanvasWidgetRenderer.hpp`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Function mixColors() has been renamed to alphaBlend() in AbstractPainters for 16bpp and 8bpp.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Text remapping in TextConvert has been changed slightly so "yes" works the same, but "no" will remap texts within a language, not across languages.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Updated Freetype 2.11.0 to 2.12.1 (used by the font convert utility).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Updated zlib 1.2.11 to 1.2.12 (used by the font/image convert utility).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Applications compiled using arm gcc are now approximately 15Kb smaller and 1% faster (due to removal of debug code in the library).`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slide transition did not work in portrait mode on 16bpp and 24bpp.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea::getTypedText(), TextProgress::getTypedText(), GraphTitle::getTitleTypedText() and GraphLabelsBase::getLabelTypedText() now returns a "const TypedText &".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Special fonts, such as wingding.ttf, are now supported.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::snprintf no longer sign extends char values from 128 to 255 in the format string.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u975E\u63A8\u5968\u306B\u306A\u3063\u305FTouchGFX\u30B3\u30A2\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidget::resetMaxRenderLines() has been removed as it has no function with the rewritten CWR.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitRGB() removed. Use Color::getColorFromRGB().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRedColor() removed. Use Color::getRed().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getGreenColor() removed. Use Color::getGreen().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getBlueColor() removed. Use Color::getBlue().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSV() removed. Use Color::getRGBFromHSV().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSVFrom24BitRGB() removed. Use Color::getHSVFromRGB().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSL() removed. Use Color::getRGBFromHSL().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSLFrom24BitRGB() removed. Use Color::getHSLFromRGB().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSVFromHSL(uint8_t, uint8_t&, uint8_t, uint8_t&) removed. Use Color::getHSVFromHSL(uint8_t,uint8_t,int8_t,uint8_t&,uint8_t&,uint8_t&).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSLFromHSV(uint8_t, uint8_t&, uint8_t, uint8_t&) removed. Use Color::getHSLFromHSV(uint8_t,uint8_t,int8_t,uint8_t&,uint8_t&,uint8_t&).`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4191"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.19.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2022\u5E744\u67084\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30C3\u30AF\u30B9\uFF65\u30DC\u30BF\u30F3\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30DC\u30BF\u30F3\uFF65\u30B9\u30BF\u30A4\u30EB\u3067\u3001\u6B20\u843D\u3057\u3066\u3044\u308B\u8272\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30C3\u30AF\u30B9\uFF65\u30DC\u30BF\u30F3\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30DC\u30BF\u30F3\uFF65\u30B9\u30BF\u30A4\u30EB\u3067\u3001\u8AA4\u3063\u305F\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u306E\u30B3\u30FC\u30C9\u751F\u6210\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `InteractionEndedCallBacks\u3067\u30D5\u30EC\u30C3\u30AF\u30B9\uFF65\u30DC\u30BF\u30F3\u3092\u4F7F\u7528\u3059\u308B\u3068\u304D\u306E\u8AA4\u3063\u305F\u30B3\u30FC\u30C9\u751F\u6210\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\u3068\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\u306E\u30E9\u30D9\u30EB\u3067\u3001\u8AA4\u3063\u305F'Text'\u30D7\u30ED\u30D1\u30C6\u30A3\uFF65\u30E9\u30D9\u30EB\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u5F8C\u306B\u3001touchgfx_components\u30D5\u30A9\u30EB\u30C0\u304C\u524A\u9664\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B0\u30EA\u30C3\u30C9\u3067\u30BB\u30EB\u304C\u30D5\u30A9\u30FC\u30AB\u30B9\u304B\u3089\u5916\u308C\u308B\u3068\u3001\u30AF\u30E9\u30C3\u30B7\u30E5\u3092\u5F15\u304D\u8D77\u3053\u3059\u3053\u3068\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7701\u7565\u8A18\u53F7\u306E\u307F\u306E\u5909\u66F4\u306E\u5834\u5408\u306B\u3001FontConvert\u3067\u65B0\u3057\u3044\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3044\u304F\u3064\u304B\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5931\u6557\u306E\u539F\u56E0\u306B\u306A\u308B\u3053\u3068\u304C\u3042\u308B\u3001\u30D3\u30C7\u30AA\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30C7\u30B9\u30C8\u30E9\u30AF\u30BF\u5185\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4190"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.19.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2022\u5E743\u670821\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5927\u5BB9\u91CF\u30C6\u30AD\u30B9\u30C8\u306E\u6982\u8981\u628A\u63E1\u3068\u7BA1\u7406\u3092\u5BB9\u6613\u306B\u3059\u308B\u305F\u3081\u306B\u3001\u30C6\u30AD\u30B9\u30C8\u304A\u3088\u3073\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u51E6\u7406\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u65B0\u3057\u304F\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u304A\u3088\u3073\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u7BA1\u7406\u7528\u306B\u8FFD\u52A0\u3055\u308C\u305F\u6A5F\u80FD\u306B\u306F\u6B21\u306E\u3082\u306E\u304C\u542B\u307E\u308C\u307E\u3059\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30F3\u30B0\u30EB\uFF65\u30E6\u30FC\u30B9\u3068\u30EA\u30BD\u30FC\u30B9\u30921\u3064\u306E\u30B0\u30EA\u30C3\u30C9\u306B\u30DE\u30FC\u30B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u306E\u5BB9\u6613\u306A\u5909\u63DB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B0\u30EB\u30FC\u30D7\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B0\u30EA\u30C3\u30C9\u3067\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u518D\u6574\u5217\u3068\u30B3\u30D4\u30FC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u691C\u7D22`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B0\u30EA\u30C3\u30C9\u3067\u306E\u8A00\u8A9E\u5217\u306E\u975E\u8868\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8A00\u8A9E\u8A2D\u5B9A`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8: \u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8: \u30B0\u30E9\u30D5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044texts.xml\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u30B0\u30EB\u30FC\u30D7\u5316\u3068\u8A00\u8A9E\u56FA\u6709\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u8A2D\u5B9A\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::setAnimationStorage()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30FC\u30AD\u30E5\u30E9\u3067\u306F\u306A\u3044\u30EA\u30B9\u30C8\u306E\u672B\u5C3E\u306E\u30C9\u30E9\u30C3\u30B0\uFF65\u30A4\u30D9\u30F3\u30C8\u7528\u306B\u3001ScrollBase::setOvershootPercentage()\u3001\u304A\u3088\u3073getOvershootPercentage()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u308C\u306F\u3001ScrollLists\u304A\u3088\u3073ScrollWheels\u3067\u6A5F\u80FD\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Event::getEventType()\u304Cconst\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067F5\u30AD\u30FC\u3092\u62BC\u3059\u3068\u3001Application::changeToStartScreen()\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306FFrontendApplication\u3067\u5B9F\u88C5\u53EF\u80FD\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5404\u7121\u52B9\u5316\u9818\u57DF\u3092\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u6A5F\u80FD\u3092\u3001HALSDL2::setFlashInvalidatedAreas()\u3092\u4F7F\u7528\u3057\u3066\u30B3\u30FC\u30C9\u3067\u8A2D\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u8981\u7D20\u3092\u542B\u3080\u90E8\u5206\u306E\u307F\u3092\u7121\u52B9\u5316\u3059\u308B\u65B0\u3057\u3044\u95A2\u6570invalidateContent()\u304C\u3001\u30C9\u30ED\u30FC\u30A2\u30D6\u30EB\u3001\u30B3\u30F3\u30C6\u30CA\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3001\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u306E\u65B0\u3057\u3044\u95A2\u6570\u3092invalidate()\u306E\u4EE3\u308F\u308A\u306B\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5411\u4E0A\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u6642\u306B\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u6B63\u3057\u304F\u66F4\u65B0\u3059\u308B\u305F\u3081\u306B\u7121\u52B9\u5316\u3092\u884C\u3046TextureMapper::updateScale()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u305D\u308C\u306B\u5FDC\u3058\u3066\u3001AnimationTextureMapper\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FadeAnimator\u306F\u30A2\u30EB\u30D5\u30A1\u304C\u5909\u5316\u3057\u305F\u5834\u5408\u306E\u307F\u7121\u52B9\u5316\u3092\u884C\u3044\u307E\u3059\u3002 \u6E1B\u8870\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u306F\u95A2\u6570getAlpha()\u304C\u5FC5\u8981\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u5185\u90E8\u30B0\u30E9\u30D5\uFF65\u30AF\u30E9\u30B9\u306E\u540D\u524D\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AbstractDataGraphWithY -`, `>`, ` DynamicDataGraph`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DataGraphScroll -`, `>`, ` GraphScrollData`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DataGraphWrapAndClear -`, `>`, ` GraphWrapAndClearData`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DataGraphWrapAndOverwrite -`, `>`, ` GraphWrapAndOverwriteData`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B0\u30E9\u30D5\uFF65\u30AF\u30E9\u30B9\u306E\u65B0\u6A5F\u80FD\u306B\u3088\u308A\u3001\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u6E08\u307F\u306E\u5024\u3092\u8FFD\u52A0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u30B9\u30B1\u30FC\u30EB\u304C10\u306E\u5834\u5408\u3001\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3055\u308C\u305F\u502415\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u306F\u3001\u6D6E\u52D5\u5C0F\u6570\u70B9\u50241.5f\u306E\u8FFD\u52A0\u3068\u7B49\u3057\u304F\u306A\u308A\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u6D6E\u52D5\u5C0F\u6570\u70B9\u306B\u3088\u308B\u8A08\u7B97\u3092\u5C0E\u5165\u3057\u306A\u304F\u3066\u3059\u307F\u307E\u3059\u3002 \u3053\u306E\u65B0\u3057\u3044\u95A2\u6570\u306F\u3059\u3079\u3066\u672B\u5C3E\u304C"Scaled"\u3068\u3044\u3046\u5358\u8A9E\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D3\u30C7\u30AA\u5185\u306E\u7279\u5B9A\u306E\u30D5\u30EC\u30FC\u30E0\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u3001Video::showFrame()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD::copyAreaFromTFTToClientBuffer()\u304C\u8FFD\u52A0\u3055\u308C\u3001TFT\u3068\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\uFF65\u30D0\u30C3\u30D5\u30A1\u9593\u3067\u65B0\u3057\u3044\u30D4\u30AF\u30BB\u30EB\u304C\u30B3\u30D4\u30FC\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCDNemaP\u304C\u3001LCDGPU2D\u306B\u540D\u524D\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Microsoft Visual Studio 2022\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E2\u5B58\u306EKeil\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u540D\u524D\u304C\u3001"touchgfx_core.lib"\u304B\u3089"touchgfx_core_wchar32.lib"\u306B\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `short enum/wchar\u7528\u306B\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305FKeil\u30E9\u30A4\u30D6\u30E9\u30EA"touchgfx_core_wchar16.lib"\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u306E\u7701\u7565\u8A18\u53F7\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306E\u51E6\u7406\u304C\u9069\u5207\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bppSerialFlash::blitCopyRGB888()\u3067\u3001\u753B\u50CF\u3092Flash\u304B\u3089\u8AAD\u307F\u51FA\u305B\u308B\u304B\u3069\u3046\u304B\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u306A\u304B\u3063\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::copyFrameBufferRegionToMemory()\u95A2\u6570\u3067\u3001\u8AA4\u3063\u305FSolidRect\u304C\u8A2D\u5B9A\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u56DE\u8EE2\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u9AD8\u3055\u304C\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5E45\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u306B\u3001\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u8AA4\u3063\u305F\u90E8\u5206\u304C\u66F8\u304D\u8FBC\u307E\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollList::setWindowSize()\u304C\u3001\uFF08\u4F59\u767D\u3082\u542B\u3081\uFF09\u5B8C\u5168\u306B\u8868\u793A\u3055\u308C\u305F\u30A2\u30A4\u30C6\u30E0\u306E\u6570\u306B\u5236\u9650\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EasingEquations::backEaseInOut()\u3067\u3001\u5909\u66F4\u304C\u5947\u6570\u306E\u5834\u5408\u306B\u4E38\u3081\u51E6\u7406\u306B\u30D0\u30B0\u304C\u767A\u751F\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u975E\u63A8\u5968\u306B\u306A\u3063\u305FTouchGFX\u30B3\u30A2\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper::invalidateBoundingRect()\u304C\u975E\u63A8\u5968\u306B\u306A\u308A\u307E\u3057\u305F\u3002 invalidateContent()\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::cacheDrawOperations()\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002 clearCachedAreas()\u304A\u3088\u3073drawCachedAreas()\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\u306B\u5BFE\u3059\u308B\u95A2\u6570setXAxisScale()\u304C\u3001setXAxisFactor()\u3068\u3044\u3046\u540D\u524D\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\u306B\u5BFE\u3059\u308B\u95A2\u6570getXAxisScaleAsInt()\u304C\u3001getXAxisFactorAsInt()\u3068\u3044\u3046\u540D\u524D\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\u306B\u5BFE\u3059\u308B\u95A2\u6570getXAxisScaleAsFloat()\u304C\u3001getXAxisFactorAsFloat()\u3068\u3044\u3046\u540D\u524D\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GraphElementArea::setBaseline()\u3068GraphElementHistogram::setBaseline()\u3067\u3001\u30B0\u30E9\u30D5\u304C\u81EA\u52D5\u7684\u306B\u518D\u63CF\u753B\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 invalidateGraphArea()\u306A\u3069\u3092\u660E\u793A\u7684\u306B\u547C\u3073\u51FA\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4181"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.18.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2021\u5E7412\u67087\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3055\u307E\u3056\u307E\u306A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u5B89\u5B9A\u6027\u304C\u78BA\u4FDD\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u3092\u958B\u3044\u3066\u3044\u308B\u3068\u304D\u306B\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u3092\u542B\u3080\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u753B\u50CF\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uFF3BAdd Widget\uFF3D\u30E1\u30CB\u30E5\u30FC\u3067\u3001\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F\u3068\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\uFF65\u30DC\u30C3\u30AF\u30B9\u304C\u30D5\u30A9\u30FC\u30AB\u30B9\u3055\u308C\u306A\u3044\u72B6\u614B\u306B\u306A\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"Set wildcard"\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u30EA\u30BD\u30FC\u30B9\uFF65\u30C6\u30AD\u30B9\u30C8\u3092\u9078\u629E\u3067\u304D\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1bpp\u306E\u8272\u6DF1\u5EA6\u3067BW_RLE\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u6B20\u843D\u3057\u3066\u3044\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u4E0A\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3092\u524A\u9664\u3059\u308B\u3068\u3001\u8AA4\u3063\u305F\u30A8\u30E9\u30FC\u304C\u30EC\u30DD\u30FC\u30C8\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u306E\u8868\u793A\u5207\u308A\u66FF\u3048\u30DC\u30BF\u30F3\u306B\u3001\u30DE\u30A6\u30B9\uFF65\u30DD\u30A4\u30F3\u30BF\u3092\u5408\u308F\u305B\u3066\u3082\u53CD\u5FDC\u3057\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A1\u30A4\u30EB\uFF65\u30E1\u30CB\u30E5\u30FC\u306E\u30C6\u30FC\u30DE\u306E\u5207\u308A\u66FF\u3048\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u3001\u73FE\u5728\u306E\u30C6\u30FC\u30DE\u304C\u6B63\u3057\u304F\u30EC\u30DD\u30FC\u30C8\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Videos.s\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30D3\u30C7\u30AA\u3092\u4F7F\u7528\u3059\u308BKeil\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u306E\u307F\u751F\u6210\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CWR PainterARGB8888Bitmap\u304C\u3001\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3059\u308BRGB565\u753B\u50CF\u306B\u5BFE\u3057\u3066\u6A5F\u80FD\u3057\u306A\u304B\u3063\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30FC\u30DC\u30FC\u30C9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F7F\u7528\u3067\u3001\u30EC\u30A4\u30A2\u30A6\u30C8\u5185\u306E\u30AD\u30FC\u306E\u5916\u5074\u3092\u62BC\u3057\u305F\u3068\u304D\u306B\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u8868\u793A\u4E0A\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Event::getEventType()\u304Cconst\u306B\u306A\u308A\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4180"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.18.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2021\u5E7410\u670820\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8: Video`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044.xml\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `.touchgfx\u30D5\u30A1\u30A4\u30EB\u304B\u3089TextEntries\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `XRGB\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Recent Applications\u30EA\u30B9\u30C8\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D5\u30EB\uFF65\u30D1\u30B9\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30A4\u30B3\u30F3\u306B\u3055\u307E\u3056\u307E\u306A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30AD\u30B7\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Gauge\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u5B9A\u7FA9\u5185\u306B\u914D\u7F6E\u3059\u308B\u3068\u304D\u306E\u30B3\u30FC\u30C9\u751F\u6210\u30A8\u30E9\u30FC\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A1\u30A4\u30EB\u3092\u4ED6\u306E\u30A8\u30C7\u30A3\u30BF\u3067\u958B\u3044\u3066\u3044\u308B\u3068\u304D\u306B\u3001TouchGFX Designer\u304C\u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30D5\u30A1\u30A4\u30EB\u5909\u66F4\u3092\u30EC\u30DD\u30FC\u30C8\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30CA\u30ED\u30B0\uFF65\u30AF\u30ED\u30C3\u30AF\u306E\u30B5\u30A4\u30BA\u5909\u66F4\u304C\u3067\u304D\u308B\u554F\u984C\u3092\u4FEE\u6B63\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30DE\u30CD\u30FC\u30B8\u30E3\u5185\u3067\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\uFF65\u30BB\u30EC\u30AF\u30BF\u304C\u6B63\u3057\u304F\u30B5\u30A4\u30BA\u5909\u66F4\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C9\u30ED\u30C3\u30D7\uFF65\u30C0\u30A6\u30F3\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u81EA\u52D5\u9078\u629E\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30DE\u30CD\u30FC\u30B8\u30E3\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AB\u30E9\u30FC\uFF65\u30D4\u30C3\u30AB\u30FC\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30EB\u30D5\u30A1\uFF65\u30B9\u30E9\u30A4\u30C0\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306EUX\u52D5\u4F5C\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6570\u5024\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4E0A\u4E0B\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u30DE\u30A6\u30B9\uFF65\u30DB\u30A4\u30FC\u30EB\u306E\u4F7F\u7528\u5F8C\u306B\u52D5\u4F5C\u3057\u306A\u304F\u306A\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30D1\u30C6\u30A3\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u9593\u306E\u30BF\u30D6\u79FB\u52D5\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\uFF65\u30BB\u30EC\u30AF\u30BF\uFF65\u30A2\u30A4\u30C6\u30E0\u306B\u540D\u524D\u304C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Selected Style Template\u3067\u4F7F\u7528\u3055\u308C\u308B\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u524A\u9664\u3057\u305F\u5F8C\u3001ScrollWheel\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u8AA4\u3063\u305F\u72B6\u614B\u306B\u306A\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30A3\u30B9\u30AF\u4E0A\u3067\u524A\u9664\u6E08\u307F\u3067\u3042\u308B\u6700\u8FD1\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u3053\u3046\u3068\u3059\u308B\u3068\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u3068\u8A00\u8A9E\uFF08\u7FFB\u8A33\uFF09\u304Ctexts.xlsx\uFF08Excel\u5F62\u5F0F\uFF09\u3067\u306F\u306A\u304Ftexts.xml\u306B\u4FDD\u5B58\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u7FFB\u8A33\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u304A\u3088\u3073\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306E\u30C4\u30FC\u30EB\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\uFF08touchgfx/framework/tools/textconvert/translation.rb\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8: VideoWidget`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `3rdparty/libjpeg\u306BLinux\u304A\u3088\u3073Windows\u7528\u306Elibjpeg\u30E9\u30A4\u30D6\u30E9\u30EA\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\uFF08\u516C\u5F0F\u306Elibjpeg\u3068\u306F\u8D64\u3068\u9752\u306E\u8272\u304C\u7F6E\u304D\u63DB\u308F\u3063\u3066\u3044\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30B5\u30A4\u30BA\u3068\u7B49\u3057\u304F\u306A\u3044\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30B5\u30A4\u30BA\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u51E6\u7406\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 touchgfx_generic_init()\u306E\u547C\u3073\u51FA\u3057\u306E\u5F8C\u3067\u3001HAL::setFrameBufferSize()\u3092\u4F7F\u7528\u3057\u3066\uFF08\u5927\u304D\u306A\uFF09\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30B5\u30A4\u30BA\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::center()\u3001centerX()\u3001centerY()\u304C\u8FFD\u52A0\u3055\u308C\u3001Drawable\u3092\u89AA\u306E\u5185\u90E8\u3067\u4E2D\u592E\u914D\u7F6E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::expand()\u304C\u8FFD\u52A0\u3055\u308C\u3001Drawable\u3092\u89AA\u3068\u540C\u3058\u30B5\u30A4\u30BA\u306B\u3057\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u30A8\u30C3\u30B8\u306E\u5468\u56F2\u306B\u4F59\u767D\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD::fillBuffer()\u304C\u8FFD\u52A0\u3055\u308C\u3001\u4EFB\u610F\u306E\u30E1\u30E2\u30EA\uFF65\u30D0\u30C3\u30D5\u30A1\u5185\u30921\u3064\u306E\u30AB\u30E9\u30FC\uFF65\u30D1\u30BF\u30FC\u30F3\u3067\u57CB\u3081\u3089\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::getChildrenContainedArea()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `16bpp LCD\u3067ARGB8888\u753B\u50CF\u306E\u63CF\u753B\u304C\u9AD8\u901F\u5316\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::getCurrentScreen()\u304C\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u306B\u306A\u308A\u3001\u4F7F\u3044\u3084\u3059\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freetype 2.10.4\u304C2.11.0\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\uFF08\u30D5\u30A9\u30F3\u30C8\u5909\u63DB\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u3067\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `nlohmann json 3.9.1\u304C3.10.2\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\uFF08\u753B\u50CF\u5909\u63DB\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u3067\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Ruby 1.9.3\u304C3.0.2\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\uFF08\u30C6\u30AD\u30B9\u30C8\u5909\u63DB\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u3067\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::doScroll()\u304C\u30D1\u30D6\u30EA\u30C3\u30AF\u306B\u306A\u308A\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u304C\u78BA\u5B9F\u306B\u6709\u52B9\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30AF\u30EA\u30FC\u30F3\u5185\u306E\u30EB\u30FC\u30C8\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u4F4D\u7F6E\u3068\u30B5\u30A4\u30BA\u3092\u8A2D\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3059\u3079\u3066\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30DA\u30A4\u30F3\u30BF\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\u304C\u53EF\u80FD\u306B\u306A\u308A\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30BF\u30A4\u30EB\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\uFF08\u30E1\u30E2\u30EA\u306E\u7BC0\u7D04\u306B\u5F79\u7ACB\u3061\u307E\u3059\uFF09\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u306E\u81EA\u52D5WordWrapping\uFF08WideTextAction\uFF09\u3067\u30A4\u30F3\u30C7\u30F3\u30C8\u304C\u8003\u616E\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u3067\u5225\u306E\u30C9\u30E9\u30A4\u30D6\u3078\u306E\u66F8\u304D\u8FBC\u307F\u3001\u307E\u305F\u306F\u30D5\u30EB\uFF65\u30D1\u30B9\u306E\u66F8\u304D\u8FBC\u307F\u304C\u8A31\u53EF\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextProvider::initialize()\u3067...\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u4E88\u671F\u3057\u306A\u3044\u7D50\u679C\u304C\u751F\u6210\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u751F\u6210\u6E08\u307F\u306E\u30D5\u30A1\u30A4\u30EB\u5185\u306E\u3059\u3079\u3066\u306E\u5916\u90E8\u5BA3\u8A00\u304C\u5B9F\u969B\u306E\u5BA3\u8A00\u3068\u4E00\u81F4\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5411\u304D\u306E\u5909\u66F4\u6642\u306B\u3001FRAME_BUFFER_WIDTH\u3068FRAME_BUFFER_HEIGHT\u304C\u6DF7\u4E71\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u3063\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ProgressIndicator\u3068Gauge\u3092\u30BF\u30A4\u30DE\u306B\u3088\u308B\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3067\u4F7F\u7528\u3067\u304D\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D4\u30AF\u30BB\u30EB\u30C7\u30FC\u30BF\u306E\u30D0\u30C3\u30D5\u30A1\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u3068\u304D\u306B\u3001PixelDataWidget::getSolidRect()\u304C\u7A7A\u306ERect\u3092\u8FD4\u3059\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PixelDataWidget::getPixelData()\u304A\u3088\u3073PixelDataWidget::getBitmapFormat()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30DE\u30A6\u30B9\u304A\u3088\u3073\u30AD\u30FC\u30DC\u30FC\u30C9\uFF65\u30A4\u30D9\u30F3\u30C8\u306B\u5BFE\u3059\u308B\u5FDC\u7B54\u6027\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::moveChildrenRelative()\u3067\u3001getScrolledX()\u304A\u3088\u3073getScrolledY()\u306E\u5024\u304C\u66F4\u65B0\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u304C\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u306F\u66F4\u65B0\u3055\u308C\u307E\u305B\u3093\u3002 \u305F\u3060\u3057\u3001moveChildrenRelative()\u306F\u975E\u63A8\u5968\u306B\u306A\u308B\u4E88\u5B9A\u306A\u306E\u3067\u3001\u4EE3\u308F\u308A\u306BdoScroll()\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u3067\u306E\u76F8\u5BFE\u5EA7\u6A19\u306E\u8AA4\u3063\u305F\u4F7F\u7528\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EasingEquations::elasticEaseIn()\u3001EasingEquations::elasticEaseOut()\u3001EasingEquations::elasticEaseInOut()\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E8bpp\u30DA\u30A4\u30F3\u30BF\u3067\u8AA4\u3063\u305F\u8272\u304C\u4F7F\u7528\u3055\u308C\u3001\u7A00\u306B32bpp\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306EL8_RGB888\u304C\u8AA4\u3063\u305F\u72B6\u614B\u306B\u306A\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp::blitCopy()\u304CRGB888\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp::fillRect()\u304A\u3088\u3073LCD16bpp::drawGlyph()\u304C\u3001\u30CD\u30A4\u30C6\u30A3\u30D6\u306E16\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\u3067\u306F\u306A\u304F24\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\u3092DMA\u306B\u6E21\u3059\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u975E\u63A8\u5968\u306B\u306A\u3063\u305FTouchGFX\u30B3\u30A2\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u3067\u306F\u3001\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3059\u308BRGB565\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u9593\u3082\u306A\u304F\u524A\u9664\u3055\u308C\u307E\u3059\u3002 ARGB8888\u306A\u3069\u3078\u306E\u79FB\u884C\u3092\u624B\u52A9\u3051\u3059\u308B\u305F\u3081\u306B\u3001ImageConvert\u3067\u3053\u306E\u3053\u3068\u304C\u30EC\u30DD\u30FC\u30C8\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u306B\u306FLinux\u7528\u306ESDL2\u304C\u542B\u307E\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 \u30D1\u30C3\u30B1\u30FC\u30B8libsdl2-dev\u304A\u3088\u3073libsdl2-image-dev\u3092Linux\u74B0\u5883\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper::invalidateBoundingRect()\u304C\u975E\u63A8\u5968\u306B\u306A\u308A\u307E\u3057\u305F\u3002 invalidateContent()\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4170"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.17.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2021\u5E746\u670830\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u306EUI\u304C\u5168\u9762\u7684\u306B\u6539\u8A02\u3055\u308C\u307E\u3057\u305F\u3002 \u3059\u3079\u3066\u306E\u65E2\u5B58\u306E\u6A5F\u80FD\u304C\u306A\u304A\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u304C\u3001\u4F7F\u7528\u3057\u3084\u3059\u304F\u76F4\u611F\u7684\u306A\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B9\u30AD\u30FC\u30E0\u3092\u4ECB\u3057\u3066\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u8907\u6570\u306E\u30AB\u30E9\u30FC\uFF65\u30C6\u30FC\u30DE\u306A\u3069\u3001\u3055\u3089\u306A\u308B\u6A5F\u80FD\u3082\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u306B\u3001setAngles()\u3001setXAngle()\u3001setYAngle()\u3001setZAngle()\u306E\u95A2\u6570\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u308C\u3089\u306E\u95A2\u6570\u306F\u7121\u52B9\u5316\u3092\u5B9F\u884C\u3057\u306A\u3044\u306E\u3067\u3001\u5BFE\u5FDC\u3059\u308B\u66F4\u65B0\u95A2\u6570\u3068\u6BD4\u3079\u3066\u5C11\u3057\u3060\u3051\u9AD8\u901F\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30B9\u30B1\u30FC\u30EB\u306E\u8A2D\u5B9A\u3068\uFF08\u6700\u5C0F\u9650\u306E\uFF09\u7121\u52B9\u5316\u3092\u5B9F\u884C\u3059\u308B\u3001TextureMapper::updateScale()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 AnimationTextureMapper\u304C\u3001\u3053\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067F1\u30AD\u30FC\u3092\u62BC\u3059\u3068\u3001\u30D4\u30AF\u30BB\u30EB\u306ERGB\u30AB\u30E9\u30FC\u5024\uFF0816\u9032\u6570\uFF09\u3068\u3001XY\u5EA7\u6A19\u304C\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u30ED\u30C3\u30AF\u5F8C\u306B\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u304C\u30A2\u30B5\u30FC\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer::setPageIndicatorCenteredX()\u306F\u3001\u30DA\u30FC\u30B8\uFF65\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u3092\u30DA\u30FC\u30B8\uFF65\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u306E\u73FE\u5728\u306EY\u5EA7\u6A19\u306E\u4E2D\u592E\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `colortype\u306E\u5B9F\u88C5\u304C\u5909\u66F4\u3055\u308C\u3001\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8272\u6DF1\u5EA6\u306B\u95A2\u4FC2\u306A\u304F\uFF08\u30AF\u30EC\u30FC\u3068\u767D\u9ED2\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u3082\uFF09\u3001\u5E38\u306B\u8D64\u8272\u7528\u306B8\u30D3\u30C3\u30C8\u3001\u7DD1\u8272\u7528\u306B8\u30D3\u30C3\u30C8\u3001\u9752\u8272\u7528\u306B8\u30D3\u30C3\u30C8\u3067\u4FDD\u5B58\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u4E00\u90E8\u306E\u8272\u306E\u95A2\u6570\u304C\u524A\u9664\u307E\u305F\u306F\u540D\u524D\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002\u975E\u63A8\u5968\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Screen::insert()\u3001Screen::invalidate()\u304A\u3088\u3073Screen:invalidateRect()\u304C\u8FFD\u52A0\u3055\u308C\u3001 \u305F\u3068\u3048\u3070\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3067"container.invalidate()"\u306E\u4EE3\u308F\u308A\u306B"invalidate()"\u304C\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CacheableContainer\u304CsetAlpha\u3068getAlpha\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u30D5\u30A7\u30FC\u30C7\u30A3\u30F3\u30B0\uFF08\u6E1B\u8870\uFF09\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp\u304A\u3088\u3073LCD16bppSerialFlash\u304C\u3001RGB888\u753B\u50CF\u306E\u30D6\u30EA\u30C3\u30C8\uFF65\u30B3\u30D4\u30FC\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD\u30C9\u30E9\u30A4\u30D0\u304B\u3089DebugPrinter\u306E\u5B9F\u88C5\u304C\u62BD\u51FA\u3055\u308C\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u5206\u96E2\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Bitmap::dynamicBitmapCreateL8()\u304C\u8FFD\u52A0\u3055\u308C\u3001256\u30A8\u30F3\u30C8\u30EA\u672A\u6E80\u306E\u30D1\u30EC\u30C3\u30C8\u3092\u6301\u3064\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFL8\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u4F5C\u6210\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3057\u305F\uFF08\u9818\u57DF\u524A\u6E1B\u306E\u305F\u3081\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E2\u5B58\u306E\uFF08\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u307E\u305F\u306F\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF09\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30B3\u30D4\u30FC\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u3001Bitmap::dynamicBitmapCreateCopy()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 RGB565\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u306F\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u3092\u6240\u5B9A\u306E\u8272\u3067\u5857\u308A\u3064\u3076\u3059\u305F\u3081\u306B\u3001Bitmap::dynamicBitmapFill()\u304A\u3088\u3073Bitmap::dynamicBitmapFillRect()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Screen::getScreenWidth()\u304A\u3088\u3073Screen::getScreenHeight()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u3089\u306FHAL::DISPLAY_WIDTH\u304A\u3088\u3073HAL::DISPLAY_HEIGHT\u306E\u4EE3\u308F\u308A\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freetype 2.10.2\u304C2.10.4\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\uFF08\u30D5\u30A9\u30F3\u30C8\u5909\u63DB\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u3067\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `OSWrappers::taskYield()\u95A2\u6570\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::initialize()\u304C\u4EEE\u60F3\u5316\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306B\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u6301\u305F\u306A\u304432\u30D3\u30C3\u30C8\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u3067\u63CF\u753B\u3059\u308B\u305F\u3081\u306B\u3001LCD32bpp_XRGB8888\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30C9\u30E9\u30A4\u30D0\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BlitOp L8\u304C\u8FFD\u52A0\u3055\u308C\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u304C\u305D\u308C\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u308C\u3070\u3001DMA\u3092\u4F7F\u7528\u3057\u3066L8\u753B\u50CF\u3092\u63CF\u753B\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL2\u304CSDL_WINDOWEVENT_EXPOSED\u306B\u53CD\u5FDC\u3057\u3066\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u518D\u63CF\u753B\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HSV\u304B\u3089HSL\u3078\u306E\u8272\u306E\u5909\u63DB\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DragAction\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306E\u3001\u30B0\u30E9\u30D5\u306E\u30AF\u30E9\u30C3\u30B7\u30E5\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u63CF\u753B\u53EF\u80FD\u306A\u3082\u306E\u3088\u308A\u5C0F\u3055\u3044\u5834\u5408\u3067\u3082\u3001HAL::drawDrawableInDynamicBitmap()\u304C\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D1\u30B9\u306B\u56FD\u969B\u7684\u306A\u6587\u5B57\u304C\u542B\u307E\u308C\u308B\u30D5\u30A9\u30EB\u30C0\uFF08"Wundersch\xF6n_Projekt"\u3084"L\xE6kkert_Projekt"\u306A\u3069\uFF09\u306B\u3001TouchGFX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer\u30DA\u30FC\u30B8\uFF65\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u3068\u9078\u629E\u3057\u305F\u30DA\u30FC\u30B8\u304C\u3001\u30DA\u30FC\u30B8\u306E\u8FFD\u52A0\u307E\u305F\u306F\u524A\u9664\u5F8C\u306B\u66F4\u65B0\u3055\u308C\u306A\u304B\u3063\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Graph VerticalFrontline\u306E\u518D\u63CF\u753B\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Graph::Line\u3067\u7A00\u306B\u8D77\u3053\u308B\u518D\u63CF\u753B\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u540D\u524D\u306E\u7AF6\u5408\u3092\u907F\u3051\u308B\u305F\u3081\u3001HAL::setRenderingVariant\u304CHAL::setRenderingMethod\u306B\u540D\u524D\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3054\u304F\u7A00\u306BCanvasWidget\u3067\u30AD\u30E3\u30F3\u30D0\u30B9\u5916\u306E\u9818\u57DF\u304C\u7121\u52B9\u5316\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u3001\u3053\u308C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8\u306ETouchGFX #include\u304C\u30AF\u30EA\u30FC\u30F3\u30A2\u30C3\u30D7\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u308C\u306F\u3001`, `<`, `touchgfx/hal/HAL.hpp`, `>`, `\u306A\u3069\u3092\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u4EE5\u524D\u3001\u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306FColor.hpp\u306A\u3069\u306B\u3088\u3063\u3066\u8AA4\u3063\u3066\u542B\u3081\u3089\u308C\u3066\u3044\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD2bpp\u306E\u30A2\u30EB\u30D5\u30A1\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `24 / 32bpp\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\u306B\u5BFE\u3059\u308B\u3001LCD16bpp\u3067\u306E\u30A2\u30EB\u30D5\u30A1\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u975E\u63A8\u5968\u306B\u306A\u3063\u305FTouchGFX\u30B3\u30A2\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901F\u5EA6\u4E0A\u306E\u7406\u7531\u3067\u3001\u3059\u3079\u3066\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30DA\u30A4\u30F3\u30BF\u304B\u3089\u30A2\u30EB\u30D5\u30A1\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002 \u4EE3\u308F\u308A\u306B\u3001Canvas\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u30A2\u30EB\u30D5\u30A1\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\uFF08Circle\u3001Line\u306A\u3069\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `4\u3064\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6301\u3064Color::getHSVFromHSL\u304A\u3088\u3073Color::getHSLFromHSV\u304C\u975E\u63A8\u5968\u306B\u306A\u308A\u307E\u3057\u305F\u3002 6\u3064\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6301\u3064\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u95A2\u6570getColorFrom24BitRGB\u3001getColorFromRGB\u3001getRedColor\u3001getRedFromColor\u3001gerGreenColor\u3001getGreenFromColor\u3001getBlueColor\u3001getBlueFromColor\u304C\u3001LCD\u30AF\u30E9\u30B9\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002 \u3059\u3079\u3066\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30BF\u30A4\u30D7\u3067\u8272\u304C\u540C\u3058\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u4FDD\u5B58\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u306E\u3067\u3001Color\u30AF\u30E9\u30B9\u5185\u306E\u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u540D\u524D\u304C\u5909\u66F4\u3055\u308C\u305F\u95A2\u6570:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitRGB()\u304C\u3001Color::getColorFromRGB()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSV()\u304C\u3001Color::getColorFromHSV()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSL()\u304C\u3001Color::getColorFromHSL()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSV()\u304C\u3001Color::getRGBFromSHV()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSVFrom24BitRGB()\u304C\u3001Color::getHSVFromRGB()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSL()\u304C\u3001Color::getRGBFromHSL()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSLFrom24BitRGB()\u304C\u3001Color::getHSLFromRGB()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRedColor()\u304C\u3001Color::getRed()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getGreenColor()\u304C\u3001Color::getGreen()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getBlueColor()\u304C\u3001Color::getBlue()\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ZoomAnimationImage::setDimension\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002 setWidthHeight()\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `int16_t&\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u4F7F\u7528\u3059\u308BAbstractProgressIndicator::getRange\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Image::getBitmapId()\u304C\u3001@deprecated\uFF08\u975E\u63A8\u5968\uFF09\u3068\u30DE\u30FC\u30AF\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::draw()\u304C\u3001@deprecated\uFF08\u975E\u63A8\u5968\uFF09\u3068\u30DE\u30FC\u30AF\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4161"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.16.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2021\u5E742\u67088\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Direction\u3092East\u4EE5\u5916\u306E\u5024\u306B\u8A2D\u5B9A\u3067\u304D\u306A\u3044\u3068\u3044\u3046\u3001ListLayout\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u65B9\u5411\u30BB\u30EC\u30AF\u30BF\u306E\u8AA4\u3063\u305F\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `NemaP LCD\u3092\u4F7F\u7528\u3059\u308B\u3068\u304D\u306E\u30B3\u30FC\u30C9\u751F\u6210\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Bring Forward\u3068Send Backwards\u306E\u30A2\u30A4\u30B3\u30F3\u304C\u540C\u3058\u3067\u3042\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Gauge\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D8\u30EB\u30D7\uFF65\u30C6\u30AD\u30B9\u30C8\u304C\u7121\u3044\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `NeoChrom\u306B\u3088\u308B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A\u306E\u305F\u3081\u3001LCD::drawQuad\u30E1\u30BD\u30C3\u30C9\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068ScalableImage\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u3001LCD::drawQuad\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B0\u30E9\u30D5\u5185\u306E\u5909\u6570dragAction\u3092\u521D\u671F\u5316\u3057\u306A\u3044\u3068\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BlockTransition\u304C\u3001\u7E26\u5411\u304D\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u4E0A\u3067\u306E\u6A2A\u5411\u304D\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u8868\u793A\u3067\u52D5\u4F5C\u3057\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PartialFrameBufferManager::tryTransmitBlock\u306B\u3088\u308B\u3001\u30A2\u30B5\u30FC\u30C8\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4160"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.16.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2020\u5E7412\u670815\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8: Gauge`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"When Screen Transition Begins"\u3068\u3044\u3046\u65B0\u3057\u3044\u30C8\u30EA\u30AC\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"When Screen Entered"\u30C8\u30EA\u30AC\u304C\u3001"When Screen Transition Ends"\u306B\u540D\u524D\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u304F"Set Language"\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u4E0A\u3067Image Picker\u3092\u4ECB\u3057\u30661\u3064\u306E\u753B\u50CF\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u305D\u306E\u753B\u50CF\u304C\u9078\u629E\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'Help-`, `>`, `Keyboard Shortcuts'\u306B\u3001\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3078\u306E\u30EA\u30F3\u30AF\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'Execute C++ code'\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u305F\u3081\u306B\u3001\u6539\u5584\u3055\u308C\u305F\u30B3\u30FC\u30C9\uFF65\u30A8\u30C7\u30A3\u30BF\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'go to screen'\u30A2\u30AF\u30B7\u30E7\u30F3\u7528\u306B\u65B0\u3057\u3044\u30D6\u30ED\u30C3\u30AF\u9077\u79FB\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'Add Widget'\u30E1\u30CB\u30E5\u30FC\u306E\u3001\u4F7F\u3044\u3084\u3059\u3055 \uFF08 \u30E6\u30FC\u30B6\uFF65\u30A8\u30AF\u30B9\u30DA\u30EA\u30A8\u30F3\u30B9\uFF09\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCDNemaP\u304C\u66AB\u5B9A\u7684\u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'#include `, `<`, `string.h`, `>`, `'\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u751F\u6210\u3055\u308C\u305FmainBase.cpp\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u304CUnix\u4E0A\u3067\u5931\u6557\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A1\u30A4\u30EB\u540D\u306B\u30A2\u30F3\u30C0\u30FC\u30B9\u30B3\u30A2\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u3001\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306E\u691C\u8A3C\u3067\u753B\u50CF\u30A8\u30E9\u30FC\u304C\u30EC\u30DD\u30FC\u30C8\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u540D\u524D\u306B\u30B9\u30DA\u30FC\u30B9\u304C\u542B\u307E\u308C\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3067\u304D\u308B\u3088\u3046\u306B\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u5185\u3067\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30B0\u30E9\u30D5\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\uFF65\u30CF\u30F3\u30C9\u30E9\u304C\u30012\u56DE\u751F\u6210\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7279\u5B9A\u306E\u30A8\u30C3\u30B8\u306E\u30B1\u30FC\u30B9\u3067\u3001Dynamic Graph\u306B\u3088\u3063\u3066TouchGFX Designer\u304C\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30F3\u30B0\u30EB\uFF65\u30E6\u30FC\u30B9\u3068\u30EA\u30BD\u30FC\u30B9\uFF65\u30C6\u30AD\u30B9\u30C8\u9593\u3067\u5207\u308A\u66FF\u3048\u308B\u3068\u304D\u306B\u3001Dynamic Graph\u306E\u30E9\u30D9\u30EB\u304C\u66F4\u65B0\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Dynamic Graph\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3059\u308B\u3068\u304D\u306B\u3001Dynamic Graph\u306E\u30E9\u30D9\u30EB\u306E\u4F4D\u7F6E\u304C\u66F4\u65B0\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A\u306E\u305F\u3081\u306E\u65B0\u3057\u3044\u7121\u52B9\u5316\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30B3\u30F3\u30C6\u30CAGauge\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BoxWithBorder\u304CBox\u306E\u30B5\u30D6\u30AF\u30E9\u30B9\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16\u304A\u3088\u3073LCD8 fillRect\u95A2\u6570\u304C\u300132 / 16\u30D3\u30C3\u30C8\u3092\u4E00\u5EA6\u306B\u66F8\u304D\u8FBC\u3080\u3088\u3046\u306B\u306A\u308A\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidget::resetMaxRenderLines()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD2shiftVal()\u3001LCD2getPixel()\u3001LCD2setPixel()\u304C\u3001\u30AF\u30E9\u30B9LCD2bpp\u306B\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD4getPixel()\u3068LCD4setPixel()\u304C\u3001\u30AF\u30E9\u30B9LCD4bpp\u306B\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::setScrollbarsPermanentlyVisible()\u304C\u30D6\u30FC\u30EB\u306E\u5F15\u6570\u3092\u53D6\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u6C38\u7D9A\u7684\u306B\u8868\u793A\u3092\u7121\u52B9\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u3068ScalableImage\u304C\u3001\u305D\u308C\u305E\u308CImage\u306E\u30B5\u30D6\u30AF\u30E9\u30B9\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage::setEndBitmap()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AbstractClock::getCurrent12Hours\u3068AbstractClock::getCurrentAM()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::itoa()\u304A\u3088\u3073Unicode::utoa()\u3067\u300136\u307E\u3067\u306E\u57FA\u6570\u3092\u51E6\u7406\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnalogClock::setAlpha()\u3068getAlpha()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::setScrollbarsPermanentlyVisible()\u304C\u30D6\u30FC\u30EB\u306E\u5F15\u6570\u3092\u53D6\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u6C38\u7D9A\u7684\u306B\u8868\u793A\u3092\u7121\u52B9\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea::resizeHeightToCurrentTextWithRotation()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setWidthHeight()\u304C\u8FFD\u52A0\u3055\u308C\u3001(width,height)\u3001Drawable\u3001Bitmap\u3001\u307E\u305F\u306FRect\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u308B1\u56DE\u306E\u30B3\u30FC\u30EB\u3067\u3001\u5E45\u3068\u9AD8\u3055\u304C\u8A2D\u5B9A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setXY(Drawable&)\u304C\u8FFD\u52A0\u3055\u308C\u3001Drawable\u306E\u5DE6\u4E0A\u9685\u304C\u3082\u30461\u3064\u306EDrawable\u3068\u540C\u3058\u4F4D\u7F6E\u306B\u8A2D\u5B9A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setPosition(Drawable&)\u304C\u8FFD\u52A0\u3055\u308C\u3001Drawable\u304C\u3082\u30461\u3064\u306EDrawable\u3068\u540C\u3058\u4F4D\u7F6E\u306B\u8A2D\u5B9A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSV()\u3068Color::getHSVFrom24BitRGB()\u304C\u8FFD\u52A0\u3055\u308C\u3001(hue, saturation, value)\u3068(red, green, blue)\u306E\u9593\u306E\u5909\u63DB\u304C\u884C\u308F\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSV()\u3068Color::getHSVFromColor()\u304C\u8FFD\u52A0\u3055\u308C\u3001(hue, saturation, value)\u3068colortype\u306E\u9593\u306E\u5909\u63DB\u304C\u884C\u308F\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSVFromHSL()\u3068Color::getHSLFromHSV()\u304C\u8FFD\u52A0\u3055\u308C\u3001\u5024\u3068\u8F1D\u5EA6\u306E\u9593\u306E\u5909\u63DB\u304C\u884C\u308F\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSL()\u3068Color::getHSLFrom24BitRGB()\u304C\u8FFD\u52A0\u3055\u308C\u3001(hue, saturation, luminance)\u3068(red, green, blue)\u306E\u9593\u306E\u5909\u63DB\u304C\u884C\u308F\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSL()\u3068Color::getHSLFromColor()\u304C\u8FFD\u52A0\u3055\u308C\u3001(hue, saturation, luminance)\u3068colortype\u306E\u9593\u306E\u5909\u63DB\u304C\u884C\u308F\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PainterBW\u304C\u30A2\u30EB\u30D5\u30A1\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SnprintFloat(s)\u304C\u3001NaN ("nan")\u3068Inf ("inf")\u3092\u51E6\u7406\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SnprintFloat(s)\u306E\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5C0F\u6570\u70B9\u4EE5\u4E0B\u306E\u6841\u6570\u304C3\u6841\u304B\u30896\u6841\u306B\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002 ANSI C\u306B\u306F\u3001"If the precision is missing, 6 digits are given"\u3068\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Circle::setPixelCenter()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `updateValue()\u3001setEasingEquation()\u3001setValueSetAction()\u3001setValueUpdatedAction()\u304C\u8FFD\u52A0\u3055\u308C\u3001\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u304C\u9032\u884C\u3057\u30011\u3064\u306E\u5024\u304B\u3089\u5225\u306E\u5024\u3078\u306E\u30B9\u30E0\u30FC\u30BA\u306A\u79FB\u884C\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer::getSelectedPage\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BlockTransition\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CacheableContainer::setSolidRect()\u304A\u3088\u3073getCacheBitmap()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `getGraphAreaPaddingRight()\u306E\u30B9\u30DA\u30EB\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7A00\u306BTextureMapper\u304C\u3044\u304F\u3064\u304B\u306E\u30B9\u30AD\u30E3\u30F3\u30E9\u30A4\u30F3\u3092\u30012\u56DE\u63CF\u753B\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimationTextureMapper\u3001ZoomAnimationImage\u3001MoveAnimation\u3001FadeAnimation\u304C\u3059\u3079\u3066steps=0\u306E\u5834\u5408\u306B\u52D5\u4F5C\u3057\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6700\u5F8C\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u7D42\u4E86\u3092\u901A\u77E5\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u62BC\u3057\u305F\u30AD\u30FC\u304B\u3089\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u30AD\u30FC\u3092\u89E3\u653E\u3057\u305F\u3068\u304D\u306E\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider::getIndicatorMin()\u3067\u30A4\u30F3\u30B8\u30B1\u30FC\u30BFmin\u3067\u306F\u306A\u304Fmax\u304C\u8FD4\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u306B\u3088\u3063\u3066BMP\u753B\u50CF\u3067\u30D2\u30FC\u30D7\u304C\u58CA\u308C\u308B\uFF08\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\uFF09\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u306B\u3088\u3063\u3066bilinear\u30E2\u30FC\u30C9\u3067\u63CF\u753B\u3055\u308C\u305F\u753B\u50CF\u306E\u5883\u754C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30EB\u30D5\u30A1`, `<`, `255\u306E\u3068\u304D\u3001\u975E\u5E38\u306B\u5E45\u306E\u3042\u308B\u5883\u754C\u306B\u3088\u308BBoxWithBorder\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ProgressIndicator\u306E\u7BC4\u56F2\u3068\u5024\u304C\u3001\u3059\u3079\u3066'int'\u306E\u30BF\u30A4\u30D7\u306B\u306A\u308B\u3088\u3046\u306B\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u5411\u304D\u306B\u5BFE\u3059\u308B\u30AD\u30E3\u30C3\u30B7\u30E5\u53EF\u80FD\u30B3\u30F3\u30C6\u30CA\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u975E\u63A8\u5968\u306B\u306A\u3063\u305FTouchGFX\u30B3\u30A2\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D0\u30FC\u30B8\u30E7\u30F34.15\u304A\u3088\u3073\u305D\u308C\u4EE5\u524D\u306B\u975E\u63A8\u5968\u306B\u306A\u3063\u305F\u3059\u3079\u3066\u306E\u6A5F\u80FD\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST1232TouchController\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ZoomAnimationImage::setDimension\u304C\u975E\u63A8\u5968\u306B\u306A\u308A\u307E\u3057\u305F\u3002 setWidthHeight\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setXY\u3068Drawable::setPosition\u304C\u3001\u4EEE\u60F3\u95A2\u6570\u3067\u306F\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 setX\u3001setY\u3001setWidth\u3001\u304A\u3088\u3073setHeight\u306E\u307F\u304C\u4EEE\u60F3\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `int16_t&\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6301\u3064AbstractProgressIndicator::getRange\u30E1\u30BD\u30C3\u30C9\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4150"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.15.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2020\u5E7410\u67085\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8: Dynamic Graph`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `M0\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u306F\u3001\u3059\u3079\u3066\u306E\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u6A5F\u80FD\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30EF\u30A4\u30D7\u9077\u79FB\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Add Widget\u30E1\u30CB\u30E5\u30FC\u304C\u898B\u76F4\u3055\u308C\u307E\u3057\u305F\uFF08\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u5DE6\u4E0A\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u304B\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u306EA\u30AD\u30FC\u3092\u62BC\u3059\u3053\u3068\u3067\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\uFF09\u3002\u691C\u7D22\u304A\u3088\u3073\u30B5\u30A4\u30BA\u5909\u66F4\u6A5F\u80FD\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0B\u90E8\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\uFF65\u30D0\u30FC\u5168\u4F53\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30ED\u30B0\u3092\u9032\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30C6\u30FC\u30BF\u30B9\uFF65\u30D0\u30FC\u304C\u30A8\u30E9\u30FC\u6642\u306B\u306F\u8D64\u8272\u3001\u6210\u529F\u6642\u306B\u306F\u7DD1\u8272\u306B\u5909\u308F\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BA\u30FC\u30E0\u6A5F\u80FD\u304C\u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u53F3\u4E0A\u306B\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30E3\u30F3\u30D0\u30B9\u3092\u30D3\u30E5\u30FC\u30DD\u30FC\u30C8\u306E\u4E2D\u592E\u306B\u914D\u7F6E\u3059\u308B\u30DC\u30BF\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u62E1\u5927\uFF08Ctrl + '+'\uFF09\u3001\u7E2E\u5C0F\uFF08Ctrl + '-'\uFF09\u3001\u30BA\u30FC\u30E0\u306E\u30EA\u30BB\u30C3\u30C8\uFF08Ctrl + 0\uFF09\u306E\u30AD\u30FC\u30DC\u30FC\u30C9\uFF65\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F4D\u7F6E\u3092\u30ED\u30C3\u30AF\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u3053\u308C\u306B\u3088\u308A\u30AD\u30E3\u30F3\u30D0\u30B9\u306E\u9078\u629E\u3082\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\uFF08\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u753B\u50CF\u3001\u30DC\u30C3\u30AF\u30B9\u306B\u5F79\u7ACB\u3061\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7A7A\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u633F\u5165\u3057\u305F\u3068\u304D\u306B\u3001\u30D9\u30FC\u30B9\uFF65\u30D3\u30E5\u30FC\u306B\u9ED2\u8272\u306EBox\u304C\u5E38\u306B\u751F\u6210\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u64CD\u4F5C\u6027\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u591A\u304F\u306E\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7\u306E\u8868\u793A\u304C\u898B\u76F4\u3055\u308C\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\uFF65\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3082\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A9\u30F3\u30C8\u3092\u3001\u30DE\u30C3\u30D7\u30C9\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304B\u975E\u30DE\u30C3\u30D7\u30C9\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304B\u3001\u3069\u3061\u3089\u3067\u8868\u793A\u3059\u308B\u306E\u304B\u3092\u9078\u629E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u540C\u4E00\u306E\u30D5\u30A9\u30F3\u30C8\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u3068\u3001Designer\u304C\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u304C\u3042\u3063\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FrontendHeapBase.hpp\u306E\u751F\u6210\u6E08\u307F\u306E\u30B3\u30FC\u30C9\u306B\u3001\u540C\u3058\u9077\u79FB\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u306E\u8907\u6570\u306E\u30B3\u30D4\u30FC\u304C\u542B\u307E\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C4\u30EA\u30FC\u30D3\u30E5\u30FC\u306E\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30EA\u30B9\u30C8\u307E\u305F\u306F\u30B9\u30AF\u30ED\u30FC\u30EB\uFF65\u30DB\u30A4\u30FC\u30EB\u306B\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30C9\u30E9\u30C3\u30B0\uFF65\u30A2\u30F3\u30C9\uFF65\u30C9\u30ED\u30C3\u30D7\u3067\u304D\u3066\u3057\u307E\u3046\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u8FFD\u52A0\u6642\u306B\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E"Choose button key"\u304C\u30AF\u30EA\u30A2\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8AA4\u3063\u305F\u30C7\u30D5\u30A9\u30EB\u30C8\uFF65\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u3001\u3068\u304D\u3069\u304D\u9078\u629E\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30A3\u30B9\u30AF\u4E0A\u306B\u3059\u3067\u306B\u5B58\u5728\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u3082\u3001\u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u3088\u308A\u3001\u975E\u30DE\u30C3\u30D7\u30C9Flash\u306B\u307B\u3068\u3093\u3069\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u30D6\u30ED\u30C3\u30AF\u8EE2\u9001\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `waitForVSync\u3067\u30D6\u30ED\u30C3\u30AF\u3067\u304D\u306A\u3044\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u3001OSWrapper: isVSyncAvailable()\u3068signalRenderingDone()\u306B\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::SingleBlockAllocator\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002touchgfx::ManyBlockAllocator`, `<`, `block_size, 1, bytes_per_pixel`, `>`, `\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u7121\u52B9\u5316\u3059\u308B\u305F\u3081\u306B\u3001\u65B0\u3057\u3044\u30E1\u30BD\u30C3\u30C9enableDMAAcceleration()\u304CHAL\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper::invalidateBoundingRects()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u306F\u66F4\u65B0\u3055\u308C\u305Fnlohmann-json 3.9.1\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u751F\u6210\u3055\u308C\u308B\u753B\u50CF\u8868\u793A\u306F\u540C\u3058\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306B\u30B7\u30F3\u30B0\u30EB\uFF65\u30B9\u30C6\u30C3\u30D7\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 F9\u30AD\u30FC\u3092\u62BC\u3059\u3068\u5B9F\u884C\u304C\u958B\u59CB / \u505C\u6B62\u3057\u307E\u3059\u3002 F10\u30AD\u30FC\u3092\u62BC\u3059\u30681\u30C6\u30A3\u30C3\u30AF\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u3001HALSDL2::setSingleStepping()\u3001HALSDL2::isSingleStepping()\u3001\u304A\u3088\u3073HALSDL2::singleStep()\u3092\u3001\u4F7F\u7528\u3057\u3066\u5236\u5FA1\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044Graph\u30AF\u30E9\u30B9\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `WipeTransition\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30EB\u30E1\u30CB\u30A2\u8A9E\u306E\u6587\u5B57\uFF08\u304A\u3088\u3073\u4E00\u90E8\u306E\u30AD\u30EA\u30EB\u6587\u5B57\uFF09\u304C\u53F3\u304B\u3089\u5DE6\u306B\u8A18\u8FF0\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30EF\u30A4\u30D7\u5F8C\u306B\u3059\u3070\u3084\u304F\u30BF\u30C3\u30C1\u3057\u3066\u30EA\u30EA\u30FC\u30B9\u3059\u308B\u3068\u3001\u4E0D\u8981\u306AGestureEvent\u304C\u767A\u751F\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u518D\u63CF\u753B\u306E\u307F\u3067\u5FC5\u8981\u3068\u3055\u308C\u308B\u975E\u5E38\u306B\u5927\u304D\u3044\u30B0\u30EA\u30D5\u304C\u3001\u6B63\u3057\u304F\u63CF\u753B\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u306E\u30EA\u30EA\u30FC\u30B9\u3067\u306F\u3001\u8FFD\u52A0\u624B\u9806\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u65E2\u77E5\u306E\u554F\u984C\u306E\u8A18\u4E8B\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues%EF%BC%89%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues\uFF09\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4140"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.14.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2020\u5E747\u67082\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8Web\u30B5\u30A4\u30C8\u306B\u30EA\u30F3\u30AF\u3059\u308B\u3088\u3046\u306B\u3059\u3079\u3066\u30EA\u30F3\u30AF\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SlideMenu\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A8\u30E9\u30FC\u306E\u53EF\u80FD\u6027\u3092\u56DE\u907F\u3059\u308B\u305F\u3081\u306B\u3001FrontendHeap.hpp\u30E2\u30C7\u30EB\u304C\u30A2\u30D7\u30EA\u306E\u524D\u306B\u5BA3\u8A00\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `UI\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\uFF65\u30BB\u30EC\u30AF\u30BF\u304C\u3001\u4F7F\u7528\u53EF\u80FD\u306A\u8272\u6DF1\u5EA6\u3092\u6B63\u3057\u304F\u6BD4\u8F03\u3057\u306A\u3044\u554F\u984C\u3092\u4FEE\u6B63\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `.touchgfx.part\u30D5\u30A1\u30A4\u30EB\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u3001\u8AAD\u8FBC\u307F\u306E\u524D\u306B\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u50CF\u306E\u7279\u5B9A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001L8\u753B\u50CF\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u305F\u3059\u3079\u3066\u306E8\u30D3\u30C3\u30C8LCD\u3092\u9078\u629E\u3059\u308B\u3068\u304D\u306B\u3001\u542B\u307E\u308C\u3066\u3044\u308B\u30DA\u30A4\u30F3\u30BF\u306E\u30B3\u30FC\u30C9\u751F\u6210\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4F5C\u6210\u6642\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u540D\u306E\u691C\u8A3C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C4\u30EA\u30FC\u30D3\u30E5\u30FC\u3067\u30B3\u30F3\u30C6\u30CA\uFF65\u30BF\u30A4\u30D7\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u3001\u305D\u306E\u5185\u90E8\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u305F\u3068\u304D\u306E\u30A8\u30E9\u30FC\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::lockDMAToPorch\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u304C\u3001true\u3067\u306F\u306A\u304Ffalse\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Font::getDataFormatA4()\u304C\u3001Font::getByteAlignRow()\u3068\u3044\u3046\u540D\u524D\u306B\u306A\u308A\u307E\u3057\u305F\u30024bpp\u30D5\u30A9\u30F3\u30C8\u306B\u52A0\u3048\u3066\u30012bpp\u30D5\u30A9\u30F3\u30C8\u30841bpp\u30D5\u30A9\u30F3\u30C8\u306B\u8A2D\u5B9A\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u8CAB\u6027\u3092\u6301\u305F\u305B\u308B\u305F\u3081\u3001GestureType\u304CGestureEventType\u3068\u3044\u3046\u540D\u524D\u306B\u306A\u308A\u307E\u3057\u305F\u3002 GestureType\u306F\u975E\u63A8\u5968\u306B\u306A\u3063\u3066\u304A\u308A\u3001\u9593\u3082\u306A\u304F\u524A\u9664\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u306E\u73FE\u5728\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u7528\u306E\u30DE\u30AF\u30ED\u3092\u542B\u3080Version.hpp\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u304C\u3001\u6570\u5B57\u304B\u3089\u59CB\u307E\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u304C\u3001"image_"\u3068\u3044\u3046\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B9\u4ED8\u304D\u3067.cpp\u30D5\u30A1\u30A4\u30EB\u3092\u51FA\u529B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u306E\u7D44\u8FBC\u307F\u30D8\u30EB\u30D7\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u304Capplication.config\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u66F8\u304D\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::strncmp_ignore_whitespace\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u306F\u30DB\u30EF\u30A4\u30C8\u30B9\u30DA\u30FC\u30B9\uFF08\u7A7A\u767D\u6587\u5B57\uFF09\u3092\u7121\u8996\u3057\u3001\u5358\u306A\u308B\u30B9\u30DA\u30FC\u30B9\u306F\u7121\u8996\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FontConvert\u306F\u66F4\u65B0\u3055\u308C\u305Ffreetype 2.10.2\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u6587\u5B57\u306E\u4E26\u3073\u304C\u5C11\u3057\u3060\u3051\u5411\u4E0A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u306F\u66F4\u65B0\u3055\u308C\u305Flibpng 1.6.37\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u751F\u6210\u3055\u308C\u308B\u753B\u50CF\u8868\u793A\u306F\u540C\u3058\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `setDurationSpeedup\u3001getDurationSpeedup\u3001setDurationSlowdown\u3001getDurationSlowdown\u304CScrollableContainer\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30B9\u30EF\u30A4\u30D7\uFF65\u30B8\u30A7\u30B9\u30C1\u30E3\u3067\u4F7F\u7528\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\uFF65\u30B9\u30C6\u30C3\u30D7\u306E\u6570\u3092\u3046\u307E\u304F\u5236\u5FA1\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SlideMenu\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u62E1\u5F35\u3055\u308C\u3001\u30DC\u30BF\u30F3\u64CD\u4F5C\u3092\u5FC5\u8981\u3068\u3057\u306A\u3044\u3067\u6E08\u3080\u30B1\u30FC\u30B9\u304C\u5897\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `colortype\u5909\u6570\u3092\u6570\u5B57\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u3068\u3001uint16_t\u3067\u306F\u306A\u304Fuint32_t\u306B\u81EA\u52D5\u7684\u306B\u30AD\u30E3\u30B9\u30C8\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067ARMCLANG-6.x\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M33\u306E\u30B5\u30DD\u30FC\u30C8\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BoxWithBorder\u3067\u3001\u30B3\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u3067borderColor\u3068borderSize\u304C\u8A2D\u5B9A\u3055\u308C\u306A\u304B\u3063\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::snprintf()\u306B\u8907\u6570\u306E\u4FEE\u6B63\u304C\u884C\u308F\u308C\u307E\u3057\u305F\u3002\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u6587\u5B57\u5217\u306764\u6587\u5B57\u306E\u5236\u9650\u304C\u5916\u3055\u308C\u307E\u3057\u305F\u3002 %o\u3001%x\u3001%X\u306B\u7B26\u53F7\u6587\u5B57\u304C\u5F37\u5236\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 %05c\u306B\u5148\u884C\u30BC\u30ED\u304C\u9069\u7528\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 %c\u304C\u30010\u3092\u5024\u3068\u3057\u3066\u6B63\u3057\u304F\u51E6\u7406\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 %s (%+s, %0s)\u306E\u7B26\u53F7\u304C\u3001\u6B63\u3057\u304F\u51E6\u7406\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3059\u308B\u3068\u3001ScrollListWithCenterSelect\u304C\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30CA\u30C3\u30D7\u3092\u4F7F\u7528\u3059\u308BScrollList\u3067\u3001\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u30A2\u30A4\u30C6\u30E0\u304C\u6B63\u3057\u304F\u30EC\u30DD\u30FC\u30C8\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30CA\u30C3\u30D7\u3092\u4F7F\u7528\u3057\u306A\u3044ScrollList\u3067\u3001\u975E\u30B5\u30FC\u30AD\u30E5\u30E9\u306E\u5834\u5408\u306B\u8AA4\u3063\u305F\u30A2\u30A4\u30C6\u30E0\u304C\u30EC\u30DD\u30FC\u30C8\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30A4\u30C6\u30E0\u306E\u30AF\u30EA\u30C3\u30AF\u6642\u306BScrollList\u304C\u30D1\u30C7\u30A3\u30F3\u30B0\u3092\u512A\u5148\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `setColor(color,alpha)\u3092\u4F7F\u7528\u3059\u308BCWR\u30DA\u30A4\u30F3\u30BF\u304C\u3001\u8272\uFF08color\uFF09\u306E\u307F\u3092\u53D7\u3051\u5165\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u30A2\u30EB\u30D5\u30A1\uFF08alpha\uFF09\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306FsetAlpha(alpha)\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u3001\u5947\u6570\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306832\u30D3\u30C3\u30C8\u3067\u6574\u5408\u3055\u308C\u3066\u3044\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LED.hpp\u306Blpc_types.h\u304C\u542B\u307E\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u975E\u63A8\u5968\u306B\u306A\u3063\u305FTouchGFX\u30B3\u30A2\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u975E\u63A8\u5968\u306B\u306A\u3063\u305F\u6A5F\u80FD\u304C\u975E\u63A8\u5968\u3068\u3057\u3066\u30DE\u30FC\u30AF\u3055\u308C\u3001\u30B3\u30F3\u30D1\u30A4\u30E9\u304C\u3053\u308C\u3089\u306E\u6A5F\u80FD\u306B\u5BFE\u3057\u3066\u8B66\u544A\u3092\u767A\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u975E\u63A8\u5968\u306B\u306A\u3063\u305F\u6A5F\u80FD\u306F\u4ECA\u5F8C\u524A\u9664\u3055\u308C\u308B\u4E88\u5B9A\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::EMPTY\u306E\u5B9A\u7FA9\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PI\u306E\u5B9A\u7FA9\u304CMath3D.hpp\u304B\u3089Types.hpp\u306B\u79FB\u52D5\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EasingEquation.hpp\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B'pi'\u304C\u3001PI\u306B\u7F6E\u304D\u63DB\u308F\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u3067\u3001-f\u3001-o\u3001-header\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Image::hasTransparentPixels\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u306E\u30EA\u30EA\u30FC\u30B9\u3067\u306F\u3001\u8FFD\u52A0\u624B\u9806\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u65E2\u77E5\u306E\u554F\u984C\u306E\u8A18\u4E8B\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues%EF%BC%89%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues\uFF09\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4134"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.13.4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2020\u5E747\u670827\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30EB\u30E1\u30CB\u30A2\u8A9E\u306E\u6587\u5B57\uFF08\u304A\u3088\u3073\u4E00\u90E8\u306E\u30AD\u30EA\u30EB\u6587\u5B57\uFF09\u304C\u53F3\u304B\u3089\u5DE6\u306B\u8A18\u8FF0\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4133"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.13.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2020\u5E745\u670829\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30E9\u30D3\u30A2\u8A9E\u3001\u30D2\u30F3\u30C7\u30A3\u30FC\u8A9E\u3001\u30BF\u30A4\u8A9E\u3001\u305D\u306E\u4ED6\u306E\u8907\u96D1\u306A\u8A00\u8A9E\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u63CF\u753B\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002 \u8A00\u8A9E\u306B\u5FDC\u3058\u3066\u300120%\uFF5E33%\u306E\u7BC4\u56F2\u3067\u63CF\u753B\u6642\u9593\u304C\u77ED\u7E2E\u3055\u308C\u3066\u3044\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollLists\u304A\u3088\u3073ScrollWheels\u3067\u3001\u975E\u5E38\u306B\u7A00\u306B\u3001\u8AA4\u3063\u305F\u65B9\u5411\u306B\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u305F\u308A\u5927\u304D\u304F\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3059\u304E\u305F\u308A\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4132"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.13.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2020\u5E744\u670828\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Hamza\u306B\u63A5\u7D9A\u3059\u308B\u3068\u304D\u306E\u30A2\u30E9\u30D3\u30A2\u8A9E\u306E\u5408\u5B57\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u30B1\u30FC\u30B9\u3067\u306ELam + Alef\u306B\u5BFE\u3059\u308B\u30A2\u30E9\u30D3\u30A2\u8A9E\u306E\u5408\u5B57\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30E9\u30D3\u30A2\u8A9E\u306E\u30A2\u30AF\u30BB\u30F3\u30C8\u306E\u4F4D\u7F6E\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4131"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.13.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2020\u5E743\u67084\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD24\u3067RGB565\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u63CF\u753B\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u30A2\u30E9\u30D3\u30A2\u6587\u5B57\u306E\u30B7\u30FC\u30B1\u30F3\u30B9\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u3067\u3001\u30D5\u30A9\u30F3\u30C8\u304B\u3089\u5305\u542B\u3055\u308C\u308B\u30B0\u30EA\u30D5\u304C\u591A\u3059\u304E\u308B\u3053\u3068\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode U+200B\uFF08\u30BC\u30ED\u5E45\u30B9\u30DA\u30FC\u30B9\uFF09\u306B\u5BFE\u3059\u308B\u4FEE\u6B63\u304C\u884C\u308F\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4130"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.13.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2019\u5E7412\u670812\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `".touchgfx.part"\u30D5\u30A1\u30A4\u30EB\u306E\u30B5\u30DD\u30FC\u30C8\u3002 \u3053\u308C\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u5916\u90E8\u5165\u529B\uFF08CubeMX\u306E\u7D71\u5408\u306A\u3069\uFF09\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"Config"\u30BF\u30D6\u306E"Framework Features"\u30AB\u30C6\u30B4\u30EA\u306B\u79FB\u52D5\u3059\u308B\u3053\u3068\u3067\u3001TextureMapper\u306B\u5BFE\u3057\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u9078\u629E\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Assets\u3001Post Generate\u3001Compile Simulator\u3001Run Simulator\u3001Compile Target\u3001Flash Target\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u3001Designer\u5185\u304B\u3089\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u306E\u30BA\u30FC\u30E0 / \u30B9\u30AF\u30ED\u30FC\u30EB\u304C\u6539\u5584\u3055\u308C\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30AD\u30E3\u30F3\u30D0\u30B9\u306E\u7AEF\u306E\u65B9\u306B\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3068\u304D\u306B\u81EA\u52D5\u30B9\u30AF\u30ED\u30FC\u30EB\u304C\u6709\u52B9\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Code\u30DC\u30BF\u30F3\u306B\u3001\u73FE\u5728\u306E\u30B3\u30FC\u30C9\u304C\u6700\u65B0\u304B\u3069\u3046\u304B\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u6700\u65B0\u3067\u306A\u3044\u5834\u5408\u306F\u9752\u3044\u30C9\u30C3\u30C8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8Alt + F\u3001Alt + E\u3001Alt + H\u3067\u3001\u305D\u308C\u305E\u308CFile\u3001Edit\u3001Help\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Help\u30E1\u30CB\u30E5\u30FC\u306B\u3001TouchGFX\u30D8\u30EB\u30D7\uFF65\u30BB\u30F3\u30BF\u30FC\u3078\u306E\u76F4\u30EA\u30F3\u30AF\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"Config"\u30BF\u30D6\u3067\u30C6\u30AD\u30B9\u30C8\u8A2D\u5B9A\u3092\u5909\u66F4\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A73\u7D30\u30ED\u30B0\u3092Designer\u5185\u3067\u30D5\u30ED\u30FC\u30C8\u307E\u305F\u306F\u30C9\u30C3\u30AD\u30F3\u30B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8Alt + L\u3067\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30BF\u30A4\u30C8\u30EB\uFF65\u30D0\u30FC\u306BDesigner\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Recent Projects\u30EA\u30B9\u30C8\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\u3060\u3051\u3067\u306A\u304F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30D5\u30EB\uFF65\u30D1\u30B9\u304C\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u79FB\u52D5\u3055\u305B\u308B\u3068\u304D\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Image Manager\u3067\u884C\u3092\u63CF\u753B\u3059\u308B\u3068\u304D\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF65\u30C4\u30EA\u30FC\u3067\u30A2\u30A4\u30C6\u30E0\u3092\u4E26\u3079\u66FF\u3048\u308B\u3068\u304D\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9045\u5EF6\u304A\u3088\u3073\u30DC\u30BF\u30F3\uFF65\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306B\u3088\u308A\u3001\u30B3\u30FC\u30C9\u751F\u6210\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX CLI\u3092\u4F7F\u7528\u3057\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u751F\u6210\u3059\u308B\u3068\u3001\u4F7F\u7528\u3055\u308C\u308BTouchGFX\u30A2\u30BB\u30C3\u30C8\u304C\u6B63\u3057\u304F\u542B\u307E\u308C\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30D0\u30C3\u30D5\u30A1\u304C\u6B63\u3057\u304F\u66F4\u65B0\u3055\u308C\u306A\u3044\u30B1\u30FC\u30B9\u304C\u3042\u308B\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u8868\u793A\u3055\u308C\u308B\u30A8\u30E9\u30FC\uFF65\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306E\u518D\u8A66\u884C\u6642\u306B\u6D88\u3048\u306A\u3044\u3068\u3044\u3046\u8868\u793A\u4E0A\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EEE\u60F3\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u95A2\u6570\u540D\u304C\u3001\u6B63\u3057\u304F\u691C\u8A3C\u3055\u308C\u306A\u304B\u3063\u305F\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u304CDesigner\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u6B63\u3057\u304F\u63CF\u753B\u3055\u308C\u306A\u3044\u30B1\u30FC\u30B9\u304C\u3042\u308B\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3066\u4FDD\u5B58\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3059\u308B\u3068\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u304C\u6D88\u3048\u3066\u3057\u307E\u3046\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30DE\u30CD\u30FC\u30B8\u30E3\u304C\u3001\u8AA4\u3063\u305F\u30BB\u30EB\u306B\u30D5\u30A9\u30FC\u30AB\u30B9\u3057\u7D9A\u3051\u3066\u3044\u308B\u3088\u3046\u306B\u898B\u3048\u308B\u8868\u793A\u4E0A\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306EProperties\u30BF\u30D6\u306B\u3001\u30A8\u30E9\u30FC\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DC\u30BF\u30F3\uFF65\u30AF\u30EA\u30C3\u30AF\uFF65\u30CF\u30F3\u30C9\u30E9\u3092\u751F\u6210\u3059\u308B\u3068\u3001\u7A7A\u306Eif/else\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u304C\u751F\u6210\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u691C\u7D22\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Shape\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30B3\u30D4\u30FC\u3057\u3066\u3001\u305D\u306E\u3044\u305A\u308C\u304B\u306B\u3042\u308B\u30DD\u30A4\u30F3\u30C8\u3092\u7DE8\u96C6\u3059\u308B\u3068\u3001\u4E21\u65B9\u304C\u5909\u66F4\u3055\u308C\u3066\u3057\u307E\u3046\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\uFF65\u30D4\u30C3\u30AB\u30FC\u304B\u3089\u30D5\u30A9\u30F3\u30C8\u3092\u5909\u66F4\u4E2D\u306B\u3001\u30DE\u30A6\u30B9\uFF65\u30DB\u30A4\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u884C\u3046\u3068\u3001\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u304C\u9589\u3058\u3066\u3057\u307E\u3046\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30AF\u30EA\u30FC\u30F3\u3078\u306E\u79FB\u52D5\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u542B\u3080\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u304C\u3001\u6B63\u3057\u304F\u884C\u308F\u308C\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30C4\u30EA\u30FC\uFF65\u30D3\u30E5\u30FC\u3067\u30CE\u30FC\u30C9\u306E\u5C55\u958B / \u6298\u308A\u305F\u305F\u307F\u3092\u884C\u3046\u3068\u3001\u30CE\u30FC\u30C9\u304C\u9078\u629E\u3055\u308C\u3066\u3057\u307E\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `UI\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u3068\u304D\u306B\u3001\u4E00\u90E8\u306E\u5024\u304C\u8AA4\u3063\u3066\u30A4\u30F3\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3057\u307E\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Image Picker\u3067\u306E\u30D5\u30A9\u30EB\u30C0\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u304C\u3046\u307E\u304F\u3044\u304B\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Swipe Container\u5185\u306E\u30DA\u30FC\u30B8\u306E\u9806\u5E8F\u304C\u8AA4\u3063\u3066\u63D0\u793A\u3055\u308C\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u3001\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u306E\u63CF\u753B\u304C\u3046\u307E\u304F\u3044\u304B\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u524A\u9664\u3055\u308C\u305F\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30BD\u30FC\u30B9\u306E\u691C\u8A3C\u306B\u8AA4\u308A\u304C\u3042\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `assets/images\u306B\u914D\u7F6E\u3055\u308C\u305F\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u304C\u3042\u308B\u30D5\u30A9\u30EB\u30C0\u306E\u540D\u524D\u3092\u3001\u5909\u66F4\u3057\u3088\u3046\u3068\u3059\u308B\u3068Designer\u304C\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u3053\u3068\u304C\u3042\u308B\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RadioButton\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u3001\u91CD\u8907\u3059\u308B\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A1\u30A4\u30EB\uFF65\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u304B\u3089Designer\u306B\u3001\u540C\u3058\u753B\u50CF\u30922\u5EA6\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3068\u30A8\u30E9\u30FC\u52D5\u4F5C\u304C\u767A\u751F\u3059\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E9\u30B8\u30AA\uFF65\u30DC\u30BF\u30F3\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u3001\u91CD\u8907\u3059\u308B\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u308B\u5834\u5408\u304C\u3042\u308B\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30D0\u30C3\u30D5\u30A1\u306E\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3067\u3001\u751F\u6210\u3055\u308C\u305F\u30B3\u30FC\u30C9\u306Bnewline\uFF08\u6539\u884C\uFF09\u304C\u6B20\u843D\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C8\u30EB\u30B3\u8A9E\u5730\u57DF\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001Designer\u3067\u8AA4\u3063\u305F\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3 / \u30C8\u30EA\u30AC\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30DC\u30C3\u30AF\u30B9\u3067\u3001\u9577\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3068UI\u306B\u4E0D\u8981\u306A\u30B7\u30D5\u30C8\u304C\u767A\u751F\u3059\u308B\u8868\u793A\u4E0A\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6700\u5F8C\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u524A\u9664\u3057\u305F\u5F8C\u306E\u4E00\u9023\u306E\u624B\u9806\u306B\u3088\u3063\u3066\u3001Designer\u304C\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u304B\u3089\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u5B9A\u7FA9\u306B\u30B3\u30D4\u30FC\u3059\u308B\u52D5\u4F5C\u304C\u6A5F\u80FD\u3057\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Matching UI Templates\u30D5\u30A3\u30EB\u30BF\u304C\u3001\u610F\u56F3\u3057\u305F\u3088\u3046\u306B\u6A5F\u80FD\u3057\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u3067\u3001\u30D4\u30EA\u30AA\u30C9\u3092\u542B\u3080\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u540D\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30BF\u30A4\u30EB\u306E\u3042\u308B\u30B9\u30E9\u30A4\u30C0\u3092\u6A2A\u5411\u304D\u304B\u3089\u7E26\u5411\u304D\u306B\u5909\u66F4\u3059\u308B\u3068\u3001\u30B9\u30BF\u30A4\u30EB\u304C\u6B63\u3057\u304F\u8A2D\u5B9A\u3055\u308C\u306A\u3044\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u5909\u66F4\u3059\u308B\u3068\u3001UI\u306E\u4E00\u90E8\u306E\u5834\u6240\u3067\u30D5\u30A9\u30F3\u30C8\u540D\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u306A\u3044\u3068\u3044\u3046\u8868\u793A\u4E0A\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002 \u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001\u63CF\u753B\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3001\u753B\u50CF\u30EC\u30A4\u30A2\u30A6\u30C8\u306B\u5FDC\u3058\u3066\u300110%\uFF5E60%\u306E\u7BC4\u56F2\u3067\u63CF\u753B\u6642\u9593\u304C\u77ED\u7E2E\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AF\u30B9\u30C1\u30E3\uFF65\u30DE\u30C3\u30D1\u30FC\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u3001\u4F7F\u7528\u524D\u306B\u6709\u52B9\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#texturemapper-is-disabled-by-default%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#texturemapper-is-disabled-by-default\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3059\u3079\u3066\u306ELCD\u30BF\u30A4\u30D7\u3092\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u305F\u3081\u306B\u3001\u5358\u7D14\u306A\u6587\u5B57\u5217\u51FA\u529B\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://touchgfx.zendesk.com/hc/en-us/articles/205074511%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://touchgfx.zendesk.com/hc/en-us/articles/205074511\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u3067\u3001\u30D2\u30F3\u30C7\u30A3\u30FC\u8A9E\u3067\u4F7F\u7528\u3055\u308C\u308BGSUB\u30C6\u30FC\u30D6\u30EB\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/development/ui-development/touchgfx-engine-features/font-cache/#caching-gsub-tables%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://support.touchgfx.com/docs/development/ui-development/touchgfx-engine-features/font-cache/#caching-gsub-tables\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `arm gcc\u30B3\u30F3\u30D1\u30A4\u30E9\u304C\u30D0\u30FC\u30B8\u30E7\u30F37.3.1 2018q2\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `gcc\u30B3\u30F3\u30D1\u30A4\u30E9\u304C\u30D0\u30FC\u30B8\u30E7\u30F37.3.0\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MinGW\u74B0\u5883\u304C\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper: Bilinear\u30E2\u30FC\u30C9\u3067\u30A8\u30C3\u30B8\u4E0A\u306E\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u304C\u4FEE\u6B63 / \u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper: Nearest Neighbor\u30E2\u30FC\u30C9\u306E\u753B\u50CF\u54C1\u8CEA\u304C\u5C11\u3057\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30E9\u30D3\u30A2\u8A9E\u30C6\u30AD\u30B9\u30C8"12:34"\u306E\u30C6\u30AD\u30B9\u30C8\u9806\u5E8F\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002\u4EE5\u524D\u306FRTL\u3067"34:12"\u3068\u63CF\u753B\u3055\u308C\u3066\u3044\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u975E\u63A8\u5968\u306B\u306A\u3063\u305FTouchGFX\u30B3\u30A2\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u975E\u63A8\u5968\u306B\u306A\u3063\u305FTRANSPARENT_COL\u306E\u5B9A\u7FA9\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::getType()\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::blitSetTransparencyKey()\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::registerTextCache()\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::cacheTextString()\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u306E\u30EA\u30EA\u30FC\u30B9\u3067\u306F\u3001\u8FFD\u52A0\u624B\u9806\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u65E2\u77E5\u306E\u554F\u984C\u306E\u8A18\u4E8B\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue%EF%BC%89%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue\uFF09\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4123"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.12.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2019\u5E749\u670825\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD\uFF08##\u30D0\u30FC\u30B8\u30E7\u30F34.12.0 {#version-4120}\u4EE5\u964D\uFF09:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8: \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u30D5\u30A9\u30F3\u30C8\u60C5\u5831\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3068\u30EA\u30F3\u30AF\u306E\u4EE3\u308F\u308A\u3068\u3057\u3066\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306E\u4E3B\u306A\u5229\u70B9\u306F\u3001\u3088\u308A\u5C0F\u3055\u3044\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D0\u30A4\u30CA\u30EA\u304C\u5F97\u3089\u308C\u3001\u30E6\u30FC\u30B6\u306E\u30C7\u30D0\u30A4\u30B9\u3067\u3055\u307E\u3056\u307E\u306A\u30D5\u30A9\u30F3\u30C8\uFF65\u30BB\u30C3\u30C8\u3092\u63D0\u4F9B\u3059\u308B\u305F\u3081\u306E\u67D4\u8EDF\u6027\u304C\u5F97\u3089\u308C\u308B\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5: \u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002\u6587\u5B57\u5217\u3092\u8868\u793A\u3059\u308B\u3068\u304D\u306B\u3001\u30D5\u30A1\u30A4\u30EB\uFF65\u30B7\u30B9\u30C6\u30E0\u304B\u3089\u5FC5\u8981\u306A\u6587\u5B57\u306E\u307F\u3092\u8AAD\u307F\u8FBC\u3080\u306E\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33: \u30D0\u30A4\u30CA\u30EA\u7FFB\u8A33\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002\u7FFB\u8A33\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30EA\u30F3\u30AF\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u30D5\u30A1\u30A4\u30EB\uFF65\u30B7\u30B9\u30C6\u30E0\u304B\u3089\u7FFB\u8A33\u3092\u8AAD\u307F\u8FBC\u3080\u306E\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u6A5F\u80FD\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://touchgfx.zendesk.com/hc/en-us/articles/360024979552%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://touchgfx.zendesk.com/hc/en-us/articles/360024979552\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `16bpp\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u5411\u3051\u306B\u975E\u30E1\u30E2\u30EA\uFF65\u30DE\u30C3\u30D7\u30C9Flash\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u4F4E\u4FA1\u683C\u306ESPI Flash\u306A\u3069\u306B\u753B\u50CF\u3068\u30D5\u30A9\u30F3\u30C8\u3092\u4FDD\u5B58\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30E9\u30D3\u30A2\u8A9E\u5408\u5B57\u306EAllah\u3001Akbar\u3001Mohammad\u3001Salam\u3001Rasoul\u3001Alayhe\u3001Wasallam\u3001Rial Sign\u306EUnicode\u30B7\u30FC\u30B1\u30F3\u30B9\u304C\u8A8D\u8B58\u3055\u308C\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\uFF08bilinear\uFF09\u3067\u300124bpp\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u4E0A\u306BL8_RGB888\u304A\u3088\u3073RGB888\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u6B63\u3057\u304F\u63CF\u753B\u3067\u304D\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306B\u3001RTL\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u542B\u3080\u30C6\u30AD\u30B9\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u3068\u3001\u30AF\u30E9\u30C3\u30B7\u30E5\u304C\u767A\u751F\u3059\u308B\u3053\u3068\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CacheableContainer\u304C\u95A2\u9023\u3059\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3088\u308A\u5C0F\u3055\u3044\u5834\u5408\u3001\u30B3\u30F3\u30C6\u30CA\u306E\u30B5\u30A4\u30BA\u304C\u6B63\u3057\u304F\u306A\u3089\u306A\u3044\u554F\u984C\u304C\u89E3\u6C7A\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `8bpp LCD\u4E0A\u306ESnapshotWidget\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u30A2\u30E9\u30D3\u30A2\u8A9E\u306E\u5408\u5B57\u306E\u63CF\u753B\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u30D2\u30F3\u30C7\u30A3\u30FC\u8A9E\u306E\u5408\u5B57\u306E\u63CF\u753B\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7279\u5B9A\u306EGSUB\u7F6E\u63DB\u30EB\u30FC\u30EB\u3092\u9069\u7528\u3059\u308B\u3068\u304D\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306B\u4F59\u5206\u306A\u30EB\u30FC\u30EB\u304C\u542B\u307E\u308C\u3066\u3044\u305F\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4122"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.12.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2019\u5E748\u670822\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea::setWideTextAction()\u3092\u4F7F\u7528\u3059\u308B\u30EF\u30A4\u30C9\uFF65\u30C6\u30AD\u30B9\u30C8\u306EWordWrapping\u3067\u3001Unicode\u6587\u5B570x200B\uFF08\u30BC\u30ED\u5E45\u30B9\u30DA\u30FC\u30B9\uFF09\u3068\u540C\u69D8\u306B\u6B63\u898F\u30B9\u30DA\u30FC\u30B9\u3067\u3082\u6298\u308A\u8FD4\u3059\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8: \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u8A2D\u5B9A\u3067"binary_fonts"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u6307\u5B9A\u3055\u308C\u305F\u5834\u5408\u3001fontConverter\u30C4\u30FC\u30EB\u304C\u30AB\u30FC\u30CB\u30F3\u30B0\uFF65\u30C7\u30FC\u30BF\u3092\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u8FBC\u307E\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u306E\u30D0\u30B0\u306B\u3088\u308A\u3001\u30D0\u30A4\u30CA\u30EA\uFF65\u30D5\u30A9\u30F3\u30C8\u306E\u4F7F\u7528\u6642\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u4E0D\u6B63\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4121"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.12.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2019\u5E748\u670815\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u66F4\u65B0\u3092\u53CD\u6620\u3057\u305F"Third Party Components.pdf"\u306E\u66F4\u65B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `libpng-1.6.36`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `zlib-1.2.11`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `freetype-2.9.1`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DC\u30BF\u30F3\uFF65\u30AF\u30EA\u30C3\u30AF\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u3068\u4E00\u7DD2\u306B\u9045\u5EF6\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u767A\u751F\u3059\u308B\u3068\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\uFF65\u30A8\u30E9\u30FC\u304C\u8D77\u3053\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Canvas Widget\u3092\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\uFF65\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u8FFD\u52A0\u3059\u308B\u3068\u304D\u306B\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30D0\u30C3\u30D5\u30A1\u304C\u6B63\u3057\u304F\u66F4\u65B0\u3055\u308C\u306A\u3044\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Online Applications\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30A8\u30E9\u30FC\uFF65\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u3001\u8868\u793A\u3055\u308C\u305F\u307E\u307E\u306B\u306A\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3055\u307E\u3056\u307E\u306A\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u306EAlpha\u5024\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001Designer\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u306E\u63CF\u753B\u306B\u4E0D\u5177\u5408\u304C\u751F\u3058\u308B\u3053\u3068\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210\u6642\u306B\u3001\u4FDD\u5B58\u305B\u305A\u306BDesigner\u3092\u9589\u3058\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u518D\u5EA6\u8AAD\u307F\u8FBC\u3080\u3068\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u304C\u306A\u304F\u306A\u308B\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3059\u3067\u306B\u958B\u3044\u3066\u3044\u308BUI\u3092\u5225\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u3088\u3046\u3068\u3059\u308B\u3068\u304D\u306E\u30A8\u30E9\u30FC\uFF65\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u66F4\u65B0\u3055\u308C\u3001\u660E\u78BA\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7279\u5B9A\u306E\u72B6\u6CC1\u3067\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30DE\u30CD\u30FC\u30B8\u30E3\u306B\u8907\u6570\u306E\u30D5\u30A9\u30FC\u30AB\u30B9\u304C\u8868\u793A\u3055\u308C\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u3066\u3044\u308B\u3068\u304D\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306EProperties\u30BF\u30D6\u306B\u8D64\u8272\u306E\u5883\u754C\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Consolas\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u305F\u5F8C\u306B\u3001Designer\u306E\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u3053\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u305F\u63CF\u753B\u304C\u6B63\u3057\u304F\u884C\u308F\u308C\u306A\u3044\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Display Rotation\u4F7F\u7528\u6642\u306ETextureMapper\u306E\u30D0\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CachedFont\u306E\u30AB\u30FC\u30CB\u30F3\u30B0\uFF65\u30C7\u30FC\u30BF\u304C\u7121\u8996\u3055\u308C\u308B\u30D0\u30B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CachedFont\u304C\u3001\u30D5\u30A9\u30FC\u30EB\u30D0\u30C3\u30AF\uFF65\u30D5\u30A9\u30F3\u30C8\u3092\u30D5\u30A9\u30F3\u30C8\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u4E2D\u3067\u63A2\u3055\u306A\u3044\u30D0\u30B0`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4120"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.12.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2019\u5E746\u67087\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u91CD\u8981\u306A\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u60C5\u5831:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `drawGlyph\u306E\u516C\u958B\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002 \u4EE3\u308F\u308A\u306BdrawString\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u900F\u660E\u306A\u753B\u50CF\u306B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8ARGB8888\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001565\u306B\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u3055\u308C\u306A\u304F\u306A\u308A\u3001888\u8272\u304C\u30D5\u30EB\u3067\u4FDD\u6301\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u4E0D\u900F\u660E\u306A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304CRGB565\u306E\u5834\u5408\u306F\u3001\u900F\u660E\u306A\u753B\u50CF\u306BARGB8888\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001565\u306E\u307E\u307E\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BW_RLE\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u3059\u308B\u3068\u5909\u63DB\u5F8C\u306E\u753B\u50CF\u304C\u5927\u304D\u304F\u306A\u308B\u5834\u5408\u3001\u753B\u50CF\u3092BW_RLE\u306B\u5909\u63DB\u3059\u308B\u3068\u3001BW\u306B\u306F\u623B\u305B\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 \u4EE3\u308F\u308A\u306B\u3001\u753B\u50CF\u30B3\u30F3\u30D0\u30FC\u30BF\u306B\u3088\u3063\u3066\u8B66\u544A\u304C\u767A\u305B\u3089\u308C\u307E\u3059\u3002 Designer\uFF08\u307E\u305F\u306F\u65B0\u3057\u3044\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\uFF09\u3092\u4F7F\u7528\u3057\u3066\u3001\u500B\u3005\u306E\u753B\u50CF\u3054\u3068\u306BBW\u307E\u305F\u306FBW_RLE\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3092\u5225\u306E\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u5185\u306B\u30CD\u30B9\u30C8\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u5927\u304D\u306A\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u3067\u7121\u9650\u306B\u69CB\u6210\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u3067\u30AB\u30B9\u30BF\u30E0\uFF65\u30C8\u30EA\u30AC\u3068\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5B9A\u7FA9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3067\u30AB\u30B9\u30BF\u30E0\uFF65\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5B9A\u7FA9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30C8\u30EA\u30AC\u3068\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5225\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u60C5\u5831\u306E\u6D41\u308C\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30C8\u30EA\u30AC\u3068\u30A2\u30AF\u30B7\u30E7\u30F3\u3092Designer\u5185\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001Designer\u306E\u4E0A\u3067\u3088\u308A\u30EA\u30A2\u30EB\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u52D5\u4F5C\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B3\u30F3\u30C6\u30CA\u3092CacheableContainer\u3068\u3057\u3066\u751F\u6210\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u500B\u3005\u306E\u753B\u50CF\u8A2D\u5B9A\uFF08\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3001\u30EC\u30A4\u30A2\u30A6\u30C8\u56DE\u8EE2\u306A\u3069\uFF09\u306E\u305F\u3081\u306B\u3001"Images"\u30BF\u30D6\u304C\u65B0\u3057\u304F\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8A2D\u5B9A\u3068\u4ED6\u306E\u65B0\u3057\u3044\u8A2D\u5B9A\u304C\u3001"Config"\u30BF\u30D6\u306B\u79FB\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\uFF65\u30C4\u30FC\u30EB\u3067\u4F7F\u7528\u3055\u308C\u308B\u30B5\u30FC\u30C9\uFF65\u30D1\u30FC\u30C6\u30A3\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA\u304C\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u306E\u7D50\u679C\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u898B\u6804\u3048\u304C\u975E\u5E38\u306B\u3088\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AB\u30FC\u30CB\u30F3\u30B0\uFF65\u30C6\u30FC\u30D6\u30EB\u304C\u5927\u304D\u304F\u306A\u3063\u3066\u3001\u30AB\u30FC\u30CB\u30F3\u30B0\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BF\u30A4\u8A9E\u30D5\u30A9\u30F3\u30C8\u304C\u72ED\u3044\u884C\u9593\u9694\u3067\u3046\u307E\u304F\u63CF\u753B\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u4E00\u90E8\u306E\u30B1\u30FC\u30B9\u3067Sara Am\u306E\u63CF\u753B\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D2\u30F3\u30C7\u30A3\u30FC\u8A9E\uFF08\u30C7\u30FC\u30F4\u30A1\u30CA\u30FC\u30AC\u30EA\u30FC\uFF09\u304C\u66AB\u5B9A\u7684\u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002 \u6B21\u306EGSUB\u30C6\u30FC\u30D6\u30EB\u304C\u9069\u7528\u3055\u308C\u307E\u3059: nukt (Nukta Forms)\u3001akhn (Akhands)\u3001rkrf (Rakar Forms)\u3001cjct (Conjunct Forms)\u3001vatu (Vattu Variants)\u3001rphf (Reph Forms)\u3001pref (Pre-Base Forms)\u3001half (Half Forms)\u3001blwf (Below-base Forms)\u3001abvf (Above-base Forms)\u3001pstf (Post-base Forms)\u3001cfar (Conjunct Form After Ro)\u3002 \u6B21\u306E\u3082\u306E\u306F\u73FE\u5728\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093: abvs (Above-base Substitutions)\u3001blws (Below-base Substitutions)\u3001psts (Post-base Substitutions)\u3002 \u307E\u305F\u3001\u3059\u3079\u3066\u306EGSUB\u30C6\u30FC\u30D6\u30EB\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Line::updateLengthAndAngle() API\u304C\u65B0\u3057\u304F\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D1\u30FC\u30B7\u30E3\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u306E\u63CF\u753B\u3068\u66F4\u65B0\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30D0\u30C3\u30B0\u7528\u306E\u5358\u7D14\u306A\u6587\u5B57\u5217\u51FA\u529B\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u521D\u671F\u5316\u306E\u5F8C\u306BBitmapCache\u3092\u5909\u66F4\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3067\u3001\u30BB\u30AF\u30B7\u30E7\u30F3\u540D\u3092\u8A2D\u5B9A\u3059\u308B\u65B0\u3057\u3044\u30DE\u30AF\u30ED\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6700\u5C0F\u9650\u306E\u7121\u52B9\u5316\u9818\u57DF\u3067\u5186\u5F27\u306E\u958B\u59CB\u3068\u7D42\u4E86\u3092\u66F4\u65B0\u3059\u308B\u305F\u3081\u306B\u3001Circle::updateArc()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CircleProgress\u304C\u66F4\u65B0\u3055\u308C\u3001\u66F4\u65B0\u306B\u4F7F\u7528\u3055\u308C\u308B\u8A08\u7B97\u7CBE\u5EA6\u304C\u4E0A\u304C\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AA\u30D5\u30B9\u30AF\u30EA\u30FC\u30F3\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u63CF\u753B\u7528\u306BCacheableContainer\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `16\u30D3\u30C3\u30C8\u300124\u30D3\u30C3\u30C8\u3001\u304A\u3088\u307332\u30D3\u30C3\u30C8\u306E\u30D1\u30EC\u30C3\u30C8\u3067\u3001L8\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\uFF65\u30A2\u30BB\u30C3\u30C8\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DMA2D\u3092\u4ECB\u3057\u305FL8\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD32bpp\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30EC\u30F3\u30C0\u30E9\u304C\u65B0\u3057\u304F\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CircleProgress::setStartEndAngle()\u3001ImageProgress::setAnchorAtZero()\u3001TextProgress::setNumberOfDecimals()\u306E\u547C\u3073\u51FA\u3057\u306E\u5F8C\u3001ProgressIndicator\u304C\u81EA\u52D5\u7684\u306B\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u5024\u3092\u8A2D\u5B9A\u3057\u305F\u3068\u304D\u306E\u3001circleProgressIndicator\u306E\u518D\u63CF\u753B\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30AF\u30EA\u30FC\u30F3\u9077\u79FB\u306E\u5B8C\u4E86\u5F8C\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u8FFD\u52A0\u518D\u63CF\u753B\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u306E\u8FFD\u52A0\u518D\u63CF\u753B\u306B\u3088\u308A\u3001\u4E00\u90E8\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u4E0A\u306E\u554F\u984C\u304C\u767A\u751F\u3057\u3066\u3044\u307E\u3057\u305F\u3002 \u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3001Screen::afterTransition()\u3067\u30B9\u30AF\u30EA\u30FC\u30F3\u5168\u4F53\u3092\u7121\u52B9\u5316\u3059\u308B\u3053\u3068\u304C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u8005\u306B\u59D4\u306D\u3089\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u306E\u30EA\u30EA\u30FC\u30B9\u3067\u306F\u3001\u8FFD\u52A0\u624B\u9806\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u65E2\u77E5\u306E\u554F\u984C\u306E\u8A18\u4E8B\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue%EF%BC%89%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue\uFF09\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4110"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.11.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2019\u5E743\u67081\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u91CD\u8981\u306A\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u60C5\u5831:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306BLCD.hpp\u304C\u7D44\u307F\u8FBC\u307E\u308C\u3066\u304A\u308A\u3001HAL\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3088\u3046\u3068\u3057\u3066\u3082\u3001LCD.hpp\u306BHAL.hpp\u304C\u7D44\u307F\u8FBC\u307E\u308C\u306A\u304F\u306A\u3063\u305F\u305F\u3081\u3001\u6A5F\u80FD\u3057\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u306E\u5834\u5408\u306F\u3001\u5FC5\u305AHAL.hpp\u3092\u7D44\u307F\u5165\u308C\u3066\u304F\u3060\u3055\u3044\u3002 \u30B5\u30F3\u30D7\u30EB\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3Demo1\u3068Demo2\u306E\u65E7\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u3053\u306E\u554F\u984C\u304C\u3042\u308A\u307E\u3057\u305F\u306E\u3067\u3001\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `UI\u30DC\u30BF\u30F3\u3068\u30AD\u30FC\u30DC\u30FC\u30C9\uFF65\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\uFF08Ctrl + F\u3001Ctrl + B\uFF09\u306B\u3088\u308B\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5BFE\u3059\u308BBring Forward\u304A\u3088\u3073Send Backwards\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30AF\u30EA\u30FC\u30F3\u3068CustomContainerDefinitons\u306E\u30B3\u30D4\u30FC\u3068\u8CBC\u308A\u4ED8\u3051\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainerDefinitions\u306E\u4E26\u3079\u66FF\u3048\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30AF\u30EA\u30FC\u30F3\u3068CustomContainerDefinitions\u3092\u5207\u308A\u66FF\u3048\u3066\u3082\u3001\u524D\u306B\u9078\u629E\u3057\u305F\u30B9\u30AF\u30EA\u30FC\u30F3\u3068CustomContainerDefinition\u304C\u8A18\u61B6\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3068\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u306B\u3001\u6700\u5F8C\u306B\u4F7F\u7528\u3057\u305F\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u304C\u4F7F\u7528\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainerInstances\u306B\u65B0\u3057\u3044\u30C4\u30EA\u30FC\uFF65\u30A2\u30A4\u30B3\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9023\u7D9A\u7684\u306A\u30B3\u30FC\u30C9\u751F\u6210\u3068\u30B3\u30F3\u30D1\u30A4\u30EB\u304C\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Detailed Log\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u51FA\u529B\u306E\u8AAD\u307F\u3084\u3059\u3055\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Texts\u30BF\u30D6\u306BWidget Wildcard Characters\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u4F55\u304B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3068\u304D\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u6587\u5B57\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u304D\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u751F\u6210\u3059\u308B\u3068\u304D\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u691C\u8A3C\u30A8\u30F3\u30B8\u30F3\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `6\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF088bpp\uFF09\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RadioButtonGroup\u306E\u8A2D\u5B9A\u306B\u3001RadioButtons\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Display Rotation\uFF08Landscape / Portrait\uFF09\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u3067\u306ELandscape / Portrait\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30B9\u30AD\u30F3\u306E\u8A2D\u5B9A\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnalogClock\u3001DigitalClock\u3001TextureMapper\u3001AnimatedTextureMapper\u3001Shape\u3068\u3044\u3046\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u5B9F\u884C\u306B\u4F7F\u7528\u3055\u308C\u308BMakefile\u304A\u3088\u3073Visual Studio\u30D5\u30A1\u30A4\u30EB\u304C\u3001Designer\u3067\u751F\u6210\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `6\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\uFF08RGBA2222\u3001BGRA2222\u3001ARGB2222\u3001ABGR2222\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BF\u30A4\u8A9E\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30E9\u30D3\u30A2\u8A9E\u30C6\u30AD\u30B9\u30C8\u306E\u63CF\u753B\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8CA0\u306E\u884C\u9593\u9694\u306E\u51E6\u7406\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainerDefinitions\u3067\u3001Ctrl + A\uFF08\u3059\u3079\u3066\u9078\u629E\uFF09\u304C\u6A5F\u80FD\u3057\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30EA\u30B9\u30C8\u306E\u6700\u521D\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u9078\u629E\u3057\u3001\u79FB\u52D5\u3057\u305F\u30B9\u30AF\u30EA\u30FC\u30F3\u306Eundo / redo\u306E\u5C65\u6B74\u3092\u524A\u9664\u3059\u308B\u3068\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u4E26\u3079\u66FF\u3048\u304C\u8D77\u3053\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application\u30CE\u30FC\u30C9\u306E\u9078\u629E\u5F8C\u306Bundo / redo\u306E\u5C65\u6B74\u304C\u58CA\u308C\u3066\u3057\u307E\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u540D\u306E\u5148\u982D\u3092\u6570\u5B57\u306B\u3067\u304D\u306A\u3044\u3001\u307E\u305F\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u540D\u306B"-"\u3084"_"\u3092\u542B\u3080\u3053\u3068\u304C\u3067\u304D\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainer\u30BF\u30D6\u306B\u3042\u308B\u3068\u304D\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u3001\u30AD\u30E3\u30F3\u30D0\u30B9\u306B\u8AA4\u3063\u305F\u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u8868\u793A\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8907\u6570\u306E\u8981\u7D20\u3092\u30B3\u30F3\u30C6\u30CA\u306B\u79FB\u52D5\u3057\u305F\u5F8C\u306B\u3001Undo\u3092\u62BC\u3059\u3068\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8AAD\u8FBC\u307F\u6642\u306B\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u30ED\u30C3\u30AF\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u3001\u305D\u306E\u30EA\u30BD\u30FC\u30B9\uFF65\u30C6\u30AD\u30B9\u30C8\u3092\u524A\u9664\u3059\u308B\u3068\u304D\u306B\u3001\u8868\u793A\u3055\u308C\u306A\u3044\u30A8\u30E9\u30FC\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u4E0D\u5177\u5408\u306E\u3042\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u3001\u30B9\u30D7\u30E9\u30C3\u30B7\u30E5\u753B\u9762\u304C\u52D5\u304B\u306A\u304F\u306A\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ModalWindow\u304C\u8AA4\u3063\u305F\u4F4D\u7F6E\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u3001ScrollList\u3001ScrollWheel\u306B\u5BFE\u3057\u3066\u3001"Move widget"\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\uFF65\u30B5\u30DD\u30FC\u30C8\u304C\u6B20\u843D\u3057\u3066\u3044\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Recent Applications\u30EA\u30B9\u30C8\u306E\u9806\u5E8F\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u304F\u3068\u304D\u306B\u3001\u6B63\u3057\u304F\u66F4\u65B0\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u633F\u5165\u306B\u3088\u3063\u3066\u3001undo / redo\u306E\u5C65\u6B74\u306B\u7A7A\u306Eundo\u30A2\u30A4\u30C6\u30E0\u304C\u8FFD\u52A0\u3055\u308C\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainerDefinitions\u306EProperties\u30DA\u30A4\u30F3\u3067\u3001\u30D8\u30C3\u30C0\u306E\u30C6\u30AD\u30B9\u30C8\u3068\u8AAC\u660E\u304C\u6B20\u843D\u3057\u3066\u3044\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CPU\u306E\u30A2\u30A4\u30C9\u30EB\u72B6\u614B\u306E\u4F7F\u7528\u7387\u304C\u60F3\u5B9A\u3088\u308A\u3082\u9AD8\u304F\u306A\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainer\u5185\u3067FlexButton\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u3068\u3001\u8AA4\u3063\u305F\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u306E\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306E\u8A2D\u5B9A\u304C\u3001\u5143\u306B\u623B\u305B\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FlexButton\u3078\u306E\u30B9\u30BF\u30A4\u30EB\u306E\u8FFD\u52A0\u306B\u3001undo / redo\u6A5F\u80FD\u304C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u81A8\u5927\u306A\u6570\u306E\u30B9\u30E9\u30A4\u30C0\uFF65\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u521D\u671F\u5316\u306E\u9806\u5E8F\u304C\u6B63\u3057\u304F\u306A\u304F\u306A\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `4bpp\u30682bpp\u306ECWR\u30DA\u30A4\u30F3\u30BF\u306E\u7CBE\u5EA6\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `8bpp\u300116bpp\u3001\u304A\u3088\u307324bpp\u306E\u30A2\u30EB\u30D5\u30A1\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u5F0F\u306E\u7CBE\u5EA6\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u306E\u30EA\u30EA\u30FC\u30B9\u3067\u306F\u3001\u8FFD\u52A0\u624B\u9806\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u65E2\u77E5\u306E\u554F\u984C\u306E\u8A18\u4E8B\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue%EF%BC%89%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue\uFF09\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4100"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.10.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2018\u5E7411\u67085\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u8981\u4EF6:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u306FSTM32\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u307F\u3067\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B21\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F: ImageProgress\u3001BoxProgress\u3001TextProgress\u3001LineProgress\u3001CircleProgress\u3001Line\u3001Circle\u3001BoxWithBorder\u3001FlexButton\u3001ScrollList\u3001ScrollWheel\u3001SwipeContainer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30E3\u30F3\u30D0\u30B9\u306E\u30D0\u30C3\u30D5\u30A1\u8A2D\u5B9A\u3092\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u3067\u8ABF\u6574\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30AF\u30EA\u30FC\u30F3\u9077\u79FB\u306E\u30B5\u30DD\u30FC\u30C8: CoverTransition`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30DD\u30FC\u30C8\uFF65\u30B7\u30CA\u30EA\u30AA\u3067\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u3001\u4EE5\u4E0B\u306E\u30B7\u30B9\u30C6\u30E0\u60C5\u5831\u304C\u30ED\u30B0\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F: \u30E6\u30FC\u30B6\u540D\u3001Designer\u30D0\u30FC\u30B8\u30E7\u30F3\u3001Designer\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\uFF65\u30D1\u30B9\u3001Windows\u30D0\u30FC\u30B8\u30E7\u30F3\u3001\u30AB\u30EC\u30F3\u30C8\uFF65\u30AB\u30EB\u30C1\u30E3\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B.NET\u30D0\u30FC\u30B8\u30E7\u30F3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EFB\u610F\u306E\u89E3\u50CF\u5EA6\u3067UI\u3092\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\uFF08\u89E3\u50CF\u5EA6\u30C1\u30A7\u30C3\u30AF\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u8868\u793A / \u975E\u8868\u793A\u306E\u30DC\u30BF\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u3067\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30C9\u30E9\u30C3\u30B0\u304A\u3088\u3073\u30B5\u30A4\u30BA\u5909\u66F4\u3059\u308B\u3068\u304D\u306E\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Circle\u3068AbstractShape\u3067\u3001\u5186\u5F27\u306E\u958B\u59CB\u3068\u5186\u5F27\u306E\u7D42\u4E86\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u7CBE\u5EA6\u304C\u9AD8\u304F\u306A\u308A\u3001\u5186\u5F27\u304C\u6ED1\u3089\u304B\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8\u306EQ5\u69CB\u9020\u3067\u300116\u30D3\u30C3\u30C8\u3067\u306F\u306A\u304F32\u30D3\u30C3\u30C8\u304C\u4F7F\u7528\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u5024\u306E\u7BC4\u56F2\u304C\u5E83\u304C\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Circle::getPrecision()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u95A2\u6570FadeAnimator::isFadeAnimationRunning()\u3001MoveAnimator::isMoveAnimationRunning()\u3001AnimatedImage::isAnimatedImageRunning()\u3001ZoomAnimationImage::isZoomAnimationImageRunning()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u53E4\u3044isRunning()\u95A2\u6570\u306F\u975E\u63A8\u5968\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ListLayout::setDirection()\u3068getDirection()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `roo gem\u304C1.13.1\u304B\u30892.7.1\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Shift + F3\u30AD\u30FC\u3092\u62BC\u3059\u3068\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u304C\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\uFF08Windows\u306E\u307F\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Ctrl + F3\u30AD\u30FC\u3092\u62BC\u3059\u3068\u3001\u6B21\u306E50\u30B9\u30AF\u30EA\u30FC\u30F3\u304Cscreenshots\u30D5\u30A9\u30EB\u30C0\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u751F\u6210\u3055\u308C\u305F\u30A2\u30BB\u30C3\u30C8\u304C\u6B63\u3057\u304F\u30A4\u30F3\u30C7\u30F3\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::setScrollbarsPermanentlyVisible()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u306E\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ModalWindow\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3057\u3066\u3082\u30B5\u30A4\u30BA\u5909\u66F4\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u96A0\u3057\u30D5\u30A1\u30A4\u30EB\u306E\u5C5E\u6027\u3092\u975E\u8868\u793A\u306B\u3057\u305F\u3068\u304D\u306B\u3001\u30B3\u30FC\u30C9\u751F\u6210\u306B\u5931\u6557\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30AF\u30EA\u30FC\u30F3\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u540D\u524D\u306E\u5927\u6587\u5B57 / \u5C0F\u6587\u5B57\u3092\u5909\u66F4\u3059\u308B\u3068\u3001\u518D\u30B3\u30F3\u30D1\u30A4\u30EB\u3067\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AA\u30F3\u30E9\u30A4\u30F3\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u307E\u3063\u305F\u304F\u4F7F\u7528\u53EF\u80FD\u3067\u306A\u3044\u5834\u5408\u3067\u3082\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u304C\u5931\u308F\u308C\u308B\u3068Designer\u304C\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u3068\u3044\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u5F8C\u306B\u3001ModalWindow\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u4F4D\u7F6E\u304C\u4E0D\u6B63\u306B\u751F\u6210\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u304D\u306E\u3001\u4E0D\u8981\u306A\u518D\u30B3\u30F3\u30D1\u30A4\u30EB\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u304C\u73FE\u5728\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u3042\u308B\u5834\u5408\u3067\u3082\u3001"empty placeholder"\u304C\u8868\u793A\u3055\u308C\u308B\u3068\u3044\u3046\u3001ImagePicker\u306E\u8868\u793A\u4E0A\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u304C\u30D7\u30ED\u30AD\u30B7\uFF65\u30B5\u30FC\u30D0\u3092\u901A\u3057\u3066\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u8CC7\u683C\u8A3C\u660E\u3092\u4F7F\u7528\u3057\u3066\u3044\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8AA4\u3063\u305F\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u30D5\u30E9\u30C3\u30B7\u30E5\u3057\u3088\u3046\u3068\u3057\u305F\u3068\u304D\u306B\u3001Designer\u304C\u30A8\u30E9\u30FC\u3092\u6B63\u3057\u304F\u30EC\u30DD\u30FC\u30C8\u3057\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9078\u629E\u3057\u305Ftouchgfx\u30D1\u30B9\u3078\u306E\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u4E0D\u5341\u5206\u306A\u5834\u5408\u306B\u3001Designer\u304C\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u304C\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5909\u66F4\u3092\u3001\u4FDD\u5B58\u3055\u308C\u3066\u3044\u306A\u3044\u5909\u66F4\u3068\u3057\u3066\u8AA4\u3063\u3066\u89E3\u91C8\u3057\u3066\u3044\u305F\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B3\u30F3\u30C6\u30CA\u306E\u30B5\u30A4\u30BA\u5909\u66F4\u6642\u306B\u3001\u30B3\u30F3\u30C6\u30CA\u5185\u90E8\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u306A\u3044\u3068\u3044\u3046\u3001\u8868\u793A\u4E0A\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5225\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8AAD\u307F\u8FBC\u307F\u6642\u306B\u3001Designer\u304C\u5B9F\u884C\u4E2D\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30D7\u30ED\u30BB\u30B9\u3092\u9589\u3058\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AB\u30B9\u30BF\u30E0\uFF65\u30B3\u30F3\u30C6\u30CA\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5185\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u3001\u30C9\u30E9\u30C3\u30B0\u3067\u304D\u3066\u3044\u305F\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30FC\u30AF\u30EB\u304C\u6B63\u3057\u304F\u63CF\u753B\u3055\u308C\u306A\u3044\u554F\u984C\u3068\u3001\u7121\u52B9\u5316\u3055\u308C\u305F\u9577\u65B9\u5F62\u304C\u6B63\u3057\u304F\u8A08\u7B97\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30FC\u30AF\u30EB\u3067\u3001\u534A\u76F4\u7DDA\u306E\u5E45\u304C\u534A\u5F84\u3088\u308A\u3082\u5927\u304D\u304F\u306A\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u30B3\u30A2\u306E\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LineProgress.cpp\u3067\u306EsetValue\u306EX\u304A\u3088\u3073Y\u5024\u306E\u8A08\u7B97\u306E\u8AA4\u308A\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30FC\u30AF\u30EB\u304C\u6B63\u3057\u304F\u63CF\u753B\u3055\u308C\u306A\u3044\u554F\u984C\u3068\u3001\u7121\u52B9\u5316\u3055\u308C\u305F\u9577\u65B9\u5F62\u304C\u6B63\u3057\u304F\u8A08\u7B97\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30FC\u30AF\u30EB\u3067\u3001\u534A\u76F4\u7DDA\u306E\u5E45\u304C\u534A\u5F84\u3088\u308A\u3082\u5927\u304D\u304F\u306A\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2047\u30D4\u30AF\u30BB\u30EB\u3088\u308A\u3082\u9577\u3044\u30E9\u30A4\u30F3\u306E\u63CF\u753B\uFF081449\u30D4\u30AF\u30BB\u30EB\u306E\u5E45\u304A\u3088\u30731449\u30D4\u30AF\u30BB\u30EB\u306E\u9AD8\u3055\u306A\u3069\uFF09\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u30A2\u30E9\u30D3\u30A2\u8A9E\u306E\u5408\u5B57\u304C\u6B63\u3057\u304F\u63CF\u753B\u3055\u308C\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u306E\u30EA\u30EA\u30FC\u30B9\u3067\u306F\u3001\u8FFD\u52A0\u624B\u9806\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u65E2\u77E5\u306E\u554F\u984C\u306E\u8A18\u4E8B\uFF08`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue%EF%BC%89%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue\uFF09\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-494"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.9.4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2018\u5E741\u670825\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8AAD\u307F\u8FBC\u3080\u306E\u306B\u304B\u304B\u308B\u6642\u9593\u304C\u77ED\u7E2E\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-493"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.9.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2017\u5E7412\u670815\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u304CWindows\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D7\u30ED\u30AD\u30B7\u8A2D\u5B9A\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D1\u30C3\u30B1\u30FC\u30B8\uFF65\u30DE\u30CD\u30FC\u30B8\u30E3\u304C\u30AA\u30F3\u30E9\u30A4\u30F3\u6642\u306B\u4F7F\u7528\u53EF\u80FD\u306A\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u66F4\u65B0\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AA\u30D5\u30E9\u30A4\u30F3\u6642\u306E\u30A8\u30E9\u30FC\u8AAC\u660E\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Set text\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304C\u30EA\u30BD\u30FC\u30B9\u306E\u30C6\u30AD\u30B9\u30C8\u3068\u9023\u643A\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30A2\u30C3\u30D7\u30C7\u30FC\u30BF\u304C\u3001MSVS\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u6B63\u3057\u3044\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7A00\u306BDesigner\u3067\u30C6\u30AD\u30B9\u30C8\uFF65\u30B5\u30A4\u30BA\u306E\u8A08\u7B97\u306B\u8AA4\u308A\u304C\u751F\u3058\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6700\u8FD1\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u65E5\u4ED8\u9806\u306B\u4E26\u3079\u3089\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Wait For\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u30AB\u30A6\u30F3\u30BF\u304C\u6B63\u3057\u304F\u521D\u671F\u5316\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30A4\u30BA\u5909\u66F4\u6642\u306E\u3001List Layout\u3067\u306E\u5B50\u8981\u7D20\u306E\u63CF\u753B\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `List Layout\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u3088\u308B\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8AAD\u8FBC\u307F\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `.otf\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u304C\u6B63\u3057\u304F\u63CF\u753B\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B3\u30F3\u30C6\u30CA\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3068\u3001\u7A00\u306B\u5EA7\u6A19\u304C\u4E0D\u6B63\u306B\u306A\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\uFF65\u30C6\u30AD\u30B9\u30C8\uFF65\u30D0\u30C3\u30D5\u30A1\u306E\u30CC\u30EB\u7D42\u7AEF\u6587\u5B57\u5217\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Button With Label\u306E\u30C6\u30AD\u30B9\u30C8\u63CF\u753B\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `tgfx.exe\u30D1\u30C3\u30B1\u30FC\u30B8\u30E3\u304C\u3001\u8907\u96D1\u306A\u30D5\u30A1\u30A4\u30EB\uFF65\u30EC\u30A4\u30A2\u30A6\u30C8\u3067\u3082\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B3\u30F3\u30C6\u30CA\u7528\u306E\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u304C\u7D44\u307F\u8FBC\u307E\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer UI\u306B\u3001\u30DE\u30A4\u30CA\u30FC\u306A\u4FEE\u6B63\u3068\u6539\u5584\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-492"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.9.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2017\u5E7411\u670820\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30E3\u30F3\u30D0\u30B9\u3067\u8981\u7D20\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3068\u3001\u4F8B\u5916\u304C\u767A\u751F\u3059\u308B\u3068\u3044\u3046Designer\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-491"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.9.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2017\u5E7411\u670816\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B3\u30F3\u30C6\u30CA\u5185\u90E8\u306BTextArea\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u914D\u7F6E\u3057\u305F\u3068\u304D\u306E\u3001Designer\u306E\u8907\u6570\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"Another interaction is done"\u306B\u3088\u3063\u3066\u30C8\u30EA\u30AC\u3055\u308C\u308B\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u304C\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u304D\u306B\u6D88\u3048\u3066\u3057\u307E\u3046\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7279\u5B9A\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\uFF65\u30DD\u30EA\u30B7\u30FC\u8A2D\u5B9A\u306EPC\u3067\u3001Designer\u304C\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u6B63\u3057\u304F\u4F5C\u6210\u3067\u304D\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30BB\u30C3\u30C8\u751F\u6210\u3001\u30B3\u30FC\u30C9\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u3001\u307E\u305F\u306F\u751F\u6210\u5F8C\u30B3\u30DE\u30F3\u30C9\u304C\u5931\u6557\u3057\u305F\u5834\u5408\u306E\u3001Designer\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u306ETouchgfxPath\u304C\u3001\u6B63\u3057\u304F\u89E3\u91C8\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u3067\u306E\u4E00\u90E8\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u306E\u5909\u66F4\u3067\u3001\u65B0\u3057\u3044\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `assets\u30D5\u30A9\u30EB\u30C0\u304Csvn\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306E\u4E0B\u306B\u3042\u308B\u5834\u5408\u306E\u3001ImageConverter\u306B\u3088\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7279\u5B9A\u306E\u30B1\u30FC\u30B9\u3067\u3001ImageConverter\u304C\u30A2\u30BB\u30C3\u30C8\u5185\u306E\u5909\u66F4\u3092\u691C\u51FA\u3067\u304D\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-490"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.9.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2017\u5E7411\u67088\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DC\u30FC\u30C9\uFF65\u30B5\u30DD\u30FC\u30C8\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u3001\u30C7\u30E2\u3001\u304A\u3088\u3073\u30B5\u30F3\u30D7\u30EB\u3092\u51E6\u7406\u3059\u308B\u305F\u3081\u306E\u30D1\u30C3\u30B1\u30FC\u30B8\uFF65\u30DE\u30CD\u30FC\u30B8\u30E3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 Designer\u306F\u3001\u3053\u308C\u3089\u3092\u30AA\u30F3\u30E9\u30A4\u30F3\uFF65\u30EA\u30DD\u30B8\u30C8\u30EA\u304B\u3089\u30D5\u30A7\u30C3\u30C1\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3055\u307E\u3056\u307E\u306A\u30DC\u30FC\u30C9\u306E\u3059\u3079\u3066\u306E\u53E4\u3044\u30B5\u30F3\u30D7\u30EB\u3001\u30C7\u30E2\u3001\u30DD\u30FC\u30C8\u304C\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u304B\u3089\u524A\u9664\u3055\u308C\u3001\u4EE3\u308F\u308A\u306B\u30D1\u30C3\u30B1\u30FC\u30B8\u3068\u3057\u3066\u63D0\u4F9B\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u306E\u30C6\u30AD\u30B9\u30C8\u51E6\u7406\u304C\u5927\u5E45\u306B\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002 Designer\u3067\u7FFB\u8A33\u304A\u3088\u3073\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3068\u9023\u643A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u3001texts.xlsx\u30D5\u30A1\u30A4\u30EB\u3092\u624B\u52D5\u3067\u7DE8\u96C6\u3059\u308B\u5FC5\u8981\u304C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\uFF65\u30D5\u30A1\u30A4\u30EB\u69CB\u9020\u304C\u975E\u5E38\u306B\u67D4\u8EDF\u306B\u306A\u308A\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u306B\u95A2\u4FC2\u306A\u304FIAR\u304A\u3088\u3073Keil\u306EIDE\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u81EA\u52D5\u66F4\u65B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u304A\u3088\u3073ListLayout\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5BFE\u3059\u308BDesigner\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SW4STM32 IDE\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR Embedded Workbench\u30D0\u30FC\u30B8\u30E7\u30F38.10\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u50CF\u30B3\u30F3\u30D0\u30FC\u30BF\u3092\u3001.png\u30D5\u30A1\u30A4\u30EB\u3054\u3068\u306B1\u56DE\u305A\u3064\u547C\u3073\u51FA\u3059\u306E\u3067\u306F\u306A\u304F\u3001\u30D5\u30A9\u30EB\u30C0\u5358\u4F4D\u3067\u64CD\u4F5C\u3067\u304D\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u753B\u50CF\u5909\u63DB\u30D7\u30ED\u30BB\u30B9\u304C\u5927\u5E45\u306B\u901F\u5EA6\u30A2\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30E2\u30FC\u30C9\u306F\u3001\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3059\u308B\u30C7\u30D5\u30A9\u30EB\u30C8\u52D5\u4F5C\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GNU Arm Embedded\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\uFF08GCC\u30AF\u30ED\u30B9\uFF65\u30B3\u30F3\u30D1\u30A4\u30E9\uFF09\u304C\u3001\u30D0\u30FC\u30B8\u30E7\u30F36-2017-q2-update\uFF08GCC\u30D0\u30FC\u30B8\u30E7\u30F36.3.1\uFF09\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PC\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306EGNU\u30B3\u30F3\u30D1\u30A4\u30E9\u304C\u3001\u30D0\u30FC\u30B8\u30E7\u30F36.3.0\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M4f\u304A\u3088\u3073Cortex-M7\u306B\u5411\u3051\u3066\u3001-mfloat-abi=hard\u3092\u4F7F\u7528\u3057\u3066\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u308Bgcc core lib\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BF\u30A4\u30DE\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u3057\u3066\u767B\u9332\u53EF\u80FD\u306A\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u6570\u304C\u300124\u304B\u308932\u306B\u5897\u3048\u307E\u3057\u305F\u3002 \u73FE\u5728\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306E\u95A2\u6570\u3082\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MoveAnimator::cancelMoveAnimation()\u306B\u3088\u308B\u554F\u984C\u3092\u56DE\u907F\u3059\u308B\u305F\u3081\u3001AnimationTextureMapper::cancelMoveAnimation()\u304CcancelAnimationTextureMapperAnimation()\u306B\u540D\u524D\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ARGB8888\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304B\u3089\u5857\u308A\u3064\u3076\u3057\u306E\u30D4\u30AF\u30BB\u30EB\u3092\u63CF\u753B\u3059\u308B\u3068\u304D\u306E\u3001PainterRGB565Bitmap\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528\u3055\u308C\u305F\u3059\u3079\u3066\u306E\u6587\u5B57\u304C\u30D5\u30A9\u30F3\u30C8\u304B\u3089\u6B20\u843D\u3057\u3066\u3044\u308B\u5834\u5408\u306E\u3001FontConvert\u306B\u7A00\u306B\u767A\u751F\u3059\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DMA\u30AF\u30E9\u30B9\u306E\u5909\u6570\u304C\u521D\u671F\u5316\u3055\u308C\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u306E\u30EA\u30EA\u30FC\u30B9\u3067\u306F\u3001\u8FFD\u52A0\u624B\u9806\u304C\u5FC5\u8981\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-480"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.8.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2017\u5E743\u670810\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD4bpp\u306E\u6587\u5B57\u63CF\u753B\u901F\u5EA6\u304C\u6700\u5927\u306715%\u30A2\u30C3\u30D7\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Canvas Widget\u306E\u63CF\u753B\u304C\u7279\u5B9A\u306E\u72B6\u6CC1\u3067\u5C11\u3057\u901F\u304F\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u304C\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u307E\u3057\u305F\u3002 \u30B3\u30A2\uFF65\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3001Designer\u3001\u74B0\u5883\u30B7\u30A7\u30EB\u304C1\u3064\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u30D0\u30F3\u30C9\u30EB\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DA\u30EB\u30B7\u30A2\u8A9E\u304A\u3088\u3073\u30A2\u30E9\u30D3\u30A2\u8A9E\u306E\u5408\u5B57\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3001\u6700\u59273\u6587\u5B57\u306E\u30B7\u30FC\u30B1\u30F3\u30B9\u304C\u8A8D\u8B58\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Microsoft Visual Studio 2017\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u3068TextAreaWithWildcard(s)\u3067\u3001setWideTextAction()\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u884C\u304C\u9577\u3059\u304E\u308B\u5834\u5408\u306B\u3001\u6539\u884C\u3084\u3001\u884C\u306E\u672B\u5C3E\u3078\u306E\u7701\u7565\u8A18\u53F7\u306E\u633F\u5165\u304C\u81EA\u52D5\u7684\u306B\u884C\u308F\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider\u306B\u30B2\u30C3\u30BF\u30FC\u95A2\u6570\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MoveAnimator\u3068FadeAnimator\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u7D42\u4E86\u6642\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u30AF\u30EA\u30A2\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u3001TextConvert\u3001FontConvert\u304B\u3089\u306E\u30A8\u30E9\u30FC\u304C\u3001Visual Studio\u306EError List\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u3001\u30B3\u30F3\u30BD\u30FC\u30EB\uFF65\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u306F\u306A\u304F\u3001Windows\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AbstractShape::updateAbstractShapeCache()\u304C\u30D1\u30D6\u30EA\u30C3\u30AF\u95A2\u6570\u306B\u306A\u308A\u3001\u30B7\u30A7\u30FC\u30D7\u304C\u6B63\u3057\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u3001AbstractShape::setCorner()\u3078\u306E1\u56DE\u4EE5\u4E0A\u306E\u547C\u3073\u51FA\u3057\u306E\u5F8C\u306B\u3001\u5FC5\u305A\u547C\u3073\u51FA\u3059\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Simulator\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u610F\u56F3\u305B\u305A\u30B5\u30A4\u30BA\u5909\u66F4\u3055\u308C\u308B\u3053\u3068\u304C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `F2\u30AD\u30FC\u306B\u3088\u308B\u7121\u52B9\u5316\u9818\u57DF\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\u304C\u3001\u53E4\u3044HALSDL\u3067\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3042\u308B\u72B6\u6CC1\u3067\u3001\u63CF\u753B\u304C\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30B5\u30A4\u30BA\u5185\u306B\u53CE\u307E\u3063\u3066\u3044\u308B\u3053\u3068\u3092\u691C\u8A3C\u3059\u308B\u306E\u306B\u3001PainterGRAY2Bitmap\u3001PainterGRAY4Bitmap\u3001PainterRGB565Bitmap\u3001PainterRGB888Bitmap\u306E\u3059\u3079\u3066\u304C\u5931\u6557\u3059\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL2\uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF09\u304C\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306724bpp\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u306E\u8272\u304C\u6B63\u3057\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage::setOffset()\u3067\u3001\u7A7A\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u6B63\u3057\u304F\u51E6\u7406\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage::getSolidRect()\u304C\u3001\u4E0D\u6B63\u306Arect\u3092\u30EC\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u304C\u3042\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u56DE\u8EE2\u3057\u305F\u5834\u5408\u306B\u3001resizeToCurrentText()\u304A\u3088\u3073resizeHeightToCurrentText()\u3067\u3001\u5E45 / \u9AD8\u3055\u304C\u30B9\u30EF\u30C3\u30D7\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u95A2\u6570getTextHeight()\u3067\u884C\u9593\u9694\u304C\u8003\u616E\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 getTextHeight()\u95A2\u6570\u3092\u4F7F\u7528\u3059\u308BresizeToCurrentText()\u306A\u3069\u306B\u3088\u308B\u95A2\u6570\u306E\u30B5\u30A4\u30BA\u5909\u66F4\u304C\u3001\u6B63\u3057\u304F\u884C\u308F\u308C\u306A\u3044\u3053\u3068\u304C\u3042\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SlideMenu::setState()\u3067\u3001EXPANDED\u72B6\u614B\u304C\u6B63\u3057\u304F\u51E6\u7406\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u306E\u8FFD\u52A0\u306B\u3088\u308A\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306F.msi\u30A4\u30F3\u30B9\u30C8\u30FC\u30E9\u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E2\u5B58\u306E4.x\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304A\u3088\u3073HAL\u30DD\u30FC\u30C8\u3068\u4E92\u63DB\u6027\u304C\u3042\u308A\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-470"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.7.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2016\u5E7412\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3059\u3079\u3066\u306E\u6A19\u6E96\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u30B3\u30F3\u30C6\u30CA\u306E\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u304C\u3001\u7D44\u307F\u8FBC\u307E\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 touchgfx/framework/source/touchgfx\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3053\u308C\u3089\u306E\u30AF\u30E9\u30B9\u306F\u4F9D\u7136\u3068\u3057\u3066\u30B3\u30A2\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u5B58\u5728\u3057\u3066\u304A\u308A\u3001\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\uFF65\u30D5\u30A1\u30A4\u30EB\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306FIAR / Keil / gcc\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u8FFD\u52A0\u3055\u308C\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TFT\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30D9\u30FC\u30B9\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u3001\u30B7\u30F3\u30B0\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u8A2D\u5B9A\u306E\u51E6\u7406\u304C\u6700\u9069\u5316\u3055\u308C\u3001\u591A\u304F\u306E\u5834\u5408\u3001\u5916\u90E8RAM\u304C\u5FC5\u8981\u3067\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Canvas Widget\u30B7\u30B9\u30C6\u30E0\u3068\u3059\u3079\u3066\u306E\u6A19\u6E96\u30DA\u30A4\u30F3\u30BF\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5927\u304D\u304F\u6700\u9069\u5316\u3055\u308C\u307E\u3057\u305F\u3002 \u591A\u6570\u306E\u30D4\u30AF\u30BB\u30EB\u306E\u63CF\u753B\u3067\u306F\u3001\u5927\u5E45\u306A\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A\u304C\u671F\u5F85\u3067\u304D\u307E\u3059\u3002\u3057\u304B\u3057\u3001\u5C0F\u3055\u3044\u30B7\u30A7\u30FC\u30D7\uFF08\u30B0\u30E9\u30D5\u306E\u30E9\u30A4\u30F3\u306A\u3069\uFF09\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u5411\u4E0A\u306F\u5C0F\u5E45\u306B\u306A\u308B\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u3002 \u30C7\u30E2\u3067\u4F7F\u7528\u3055\u308C\u308B"PainterVerticalAlpha"\u3082\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\uFF65\u30C4\u30FC\u30EB\u3067\u3001\u3059\u3079\u3066\u306E\u8A00\u8A9E\u306B\u304A\u3044\u3066\u540C\u4E00\u306E\u7FFB\u8A33\u3067\u7D50\u5408\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u30D5\u30C3\u30C8\u30D7\u30EA\u30F3\u30C8\u304C\u524A\u6E1B\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u7D50\u679C\u306F\u30A2\u30BB\u30C3\u30C8\u751F\u6210\u4E2D\u306B\u51FA\u529B\u3055\u308C\u307E\u3059\u3002 \u6CE8: \u3053\u306E\u52D5\u4F5C\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u69CB\u9020\u3092\u64CD\u4F5C\uFF081\u3064\u306E\u8A00\u8A9E\u3092RAM\u306B\u8AAD\u307F\u8FBC\u3080\u306A\u3069\uFF09\u3059\u308B\u65E2\u5B58\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u3053\u306E\u6700\u9069\u5316\u306B\u3088\u3063\u3066\u30B3\u30FC\u30C9\u304C\u58CA\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u6700\u9069\u5316\u3092\u7121\u52B9\u306B\u3059\u308B\u306B\u306F\u3001remap_identical_texts := no\uFF08"make"\u30D9\u30FC\u30B9\u751F\u6210\u306E\u5834\u5408\uFF09\u3001
`, `<`, `RemapIdenticalTexts`, `>`, `no`, `<`, `/RemapIdenticalTexts`, `>`, `\uFF08MSVS\u306E\u5834\u5408\uFF09\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u4F7F\u7528\u3059\u308BSDL\u30D0\u30FC\u30B8\u30E7\u30F3\u304C1.2\u304B\u30892.0.4\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002 SDL1.2\u306F\u914D\u5E03\u3055\u308C\u308B\u30B5\u30F3\u30D7\u30EB\uFF65\u30C4\u30FC\u30EB\u5185\u306B\u306F\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u3059\u3079\u3066\u306E\u30B5\u30F3\u30D7\u30EB\u3068\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067SDL2\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `.png\u30D5\u30A1\u30A4\u30EB\u306B\u3088\u308B\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u30B9\u30AD\u30F3\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 .png\u30D5\u30A1\u30A4\u30EB\u306B\u900F\u660E\u306A\u9818\u57DF\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\u306F\u305D\u308C\u306B\u5FDC\u3058\u3066\u5F62\u6210\u3055\u308C\u307E\u3059\u3002 \u30B3\u30FC\u30C9\u4F8B\u306B\u3064\u3044\u3066\u306F\u3001display_orientation_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Chrom-ART\u306B\u3088\u308BST\u30BF\u30FC\u30B2\u30C3\u30C8\u3067\u3001alpha `, `<`, ` 255\uFF08BLIT_OP_FILL_WITH_ALPHA\u30B5\u30DD\u30FC\u30C8\uFF09\u306E\u5834\u5408\u3067\u3082\u3001Box\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304CDMA\u306B\u3088\u3063\u3066\u63CF\u753B\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u304A\u3088\u3073\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u4F7F\u7528\u306ETextArea\u3067\u3001setWideTextAction()\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3001\u9577\u3044\u884C\u304C\u81EA\u52D5\u7684\u306B\u6298\u308A\u8FD4\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B9F\u884C\u6642\u306B\u5B58\u5728\u3057\u306A\u3044\u30B0\u30EA\u30D5\u306B\u906D\u9047\u3057\u305F\u5834\u5408\u306B\u3001"\u30D5\u30A9\u30FC\u30EB\u30D0\u30C3\u30AF"\u6587\u5B57\u3092\u8868\u793A\u3059\u308B\u6A5F\u80FD\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u308C\u306F\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\uFF65\u30B7\u30FC\u30C8\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A9\u30F3\u30C8\u306B\u8FFD\u52A0\u306E\u30B0\u30EA\u30D5\u3092\u5305\u542B\u3055\u305B\u308B\u3053\u3068\u3092\u5F37\u5236\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u6642\u306B\u30B0\u30EA\u30D5\u304C\u4E0D\u660E\u306A\u5834\u5408\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30C6\u30AD\u30B9\u30C8\u306E\u51E6\u7406\u304C\u975E\u5E38\u306B\u5BB9\u6613\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u308C\u306F\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\uFF65\u30B7\u30FC\u30C8\u3067\u8A2D\u5B9A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextConvert\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u304B\u3089\u306E\u51FA\u529B\u306E\u5F8C\u51E6\u7406\u3067\u3001\u540C\u4E00\u306E\u6587\u5B57\u5217\u3092\u540C\u3058\u30E1\u30E2\u30EA\u9818\u57DF\u306B\u30DE\u30C3\u30D4\u30F3\u30B0\u3059\u308B\u3053\u3068\u3067\u3001\u30E1\u30E2\u30EA\u306E\u5927\u5E45\u306A\u7BC0\u6E1B\u304C\u884C\u308F\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BITMAP_ANIMATION_STORAGE\u3068\u3044\u3046\u540D\u524D\u306E\u7D44\u8FBC\u307F\u306EBitmapId\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5272\u308A\u5F53\u3066\u308B\u3068\u304D\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30C8\u30EC\u30FC\u30B8\u3092\u53C2\u7167\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `config/gcc/app.mk\u304A\u3088\u3073config/msvs/Application.props\u304B\u3089\u306E\u3001\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u9078\u629E\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `#ifdef SIMULATOR (static_cast`, `<`, `HALSDL2*`, `>`, `(HAL::getInstance()))-`, `>`, `saveScreenshot(); #endif\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u3092\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3088\u3063\u3066\u4FDD\u5B58\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u304C\u975E\u8868\u793A\u306E\u8981\u7D20\u3092\u6B63\u3057\u304F\u7121\u8996\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DigitalClock\u3067\u3001\u6642\u9593\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u306E\u524D\u306E\u30BC\u30ED\u8868\u793A\uFF08hour `, `<`, ` 10\u306E\u5834\u5408\uFF09\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u3001\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u9818\u57DF\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u8868\u793A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u306E\u6A5F\u80FD\u3092\u5207\u308A\u66FF\u3048\u308B\u306B\u306F\u3001F2\u30AD\u30FC\u3092\u62BC\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::vsnprintf\u95A2\u6570\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u306F\u7701\u7565\u8A18\u53F7\u306E\u4EE3\u308F\u308A\u306Bva_list\u5F15\u6570\u3092\u53D6\u308A\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u6587\u5B57\u5217\u304C"% f"\u306E\u5834\u5408\u306B\u3001Unicode::sprintfFloat\u304C'+'\u306E\u4EE3\u308F\u308A\u306B`, `<`, `space`, `>`, `\u3092\u51FA\u529B\u3057\u306A\u304B\u3063\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 \u307E\u305F\u3001]-1..0[\u306E\u7BC4\u56F2\u306E\u6D6E\u52D5\u5C0F\u6570\u70B9\u306E\u7B26\u53F7\u304C\u6B63\u3057\u304F\u51FA\u529B\u3055\u308C\u306A\u304B\u3063\u305F\uFF08\u305F\u3068\u3048\u3070\u3001-0.5\u304C0.5\u3068\u51FA\u529B\u3055\u308C\u308B\uFF09\u554F\u984C\u3082\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u304C\u30BD\u30FC\u30B9\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30E1\u30E2\u30EA\u9818\u57DF\u5916\u3092\u8AAD\u307F\u53D6\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769-Discovery\u304A\u3088\u3073Eval\u30DC\u30FC\u30C9\u306EGPIO.cpp\u306B\u3001\u3044\u304F\u3064\u304B\u4E0D\u6B63\u306AGPIO\u30D4\u30F3\u64CD\u4F5C\uFF08\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u6E2C\u5B9A\u306B\u4F7F\u7528\uFF09\u304C\u5B58\u5728\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider.hpp\u306E\u4E00\u90E8\u306E\u30E1\u30BD\u30C3\u30C9\u306B\u3001\u4EEE\u60F3\u5BA3\u8A00\u304C\u6B20\u843D\u3057\u3066\u3044\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769-Discovery\u30DC\u30FC\u30C9\u306EBoardConfiguration\u306B\u3088\u3063\u3066\u300124bpp\u30AB\u30E9\u30FC\uFF65\u30E2\u30FC\u30C9\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage - setBitmap(..)\u306F\u4F7F\u7528\u3067\u304D\u306A\u304F\u306A\u308A\u3001\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u306B\u306A\u308A\u307E\u3057\u305F\u3002AnimatedImage\u306B\u306F\u3001\u4EE3\u308F\u308A\u306BsetBitmaps(..)\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u3068Makefile\u304C\u66F4\u65B0\u3055\u308C\u3001\u958B\u767A\u4E2D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3068\u306F\u5225\u306E\u30C7\u30A3\u30B9\u30AF\uFF65\u30C9\u30E9\u30A4\u30D6\u306B\u3001TouchGFX\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u914D\u7F6E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u74B0\u5883\uFF08\u30D0\u30FC\u30B8\u30E7\u30F32.8\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"make.exe"\u304C\u30D0\u30FC\u30B8\u30E7\u30F34.1\u306B\u306A\u308A\u3001make\u30B3\u30DE\u30F3\u30C9\u306B"-j8"\u306A\u3069\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u4E26\u5217\u30B3\u30F3\u30D1\u30A4\u30EB\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u308C\u306B\u3088\u3063\u3066\u30B3\u30F3\u30D1\u30A4\u30EB\u901F\u5EA6\u304C\u5927\u5E45\u306B\u30A2\u30C3\u30D7\u3057\u307E\u3059\u3002 makefile\u304CTouchGFX ##\u30D0\u30FC\u30B8\u30E7\u30F34.2.0 {#version-420}\u4EE5\u524D\u306E\u3082\u306E\u3067\u3042\u308B\u5834\u5408\u306F\u3001\u3053\u308C\u3092\u66F4\u65B0\u3059\u308B\u304B\u3001make-3.81.exe\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u30B1\u30FC\u30B9\u3067\u3001g++\u306B\u3088\u3063\u3066"There is no disk in the drive. Please insert a disk into drive E:."\u3068\u30EC\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3057\u305F\u3002 \u3053\u308C\u306F\u3001gcc\u306E\u30D0\u30FC\u30B8\u30E7\u30F34.8.1\u304B\u3089##\u30D0\u30FC\u30B8\u30E7\u30F34.9.3 {#version-493}\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306B\u3088\u3063\u3066\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-461"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.6.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2016\u5E749\u670812\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M4\u304A\u3088\u3073Cortex-M7\u306B\u304A\u3051\u308BGCC\u306E\u30B3\u30A2\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u6700\u9069\u5316\u304C\u6539\u5584\u3055\u308C\u3001TouchGFX ##\u30D0\u30FC\u30B8\u30E7\u30F34.6.0 {#version-460}\u3068\u6BD4\u3079\u3066\u7279\u306BTextureMapper\u3068Canvas\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u901F\u5EA6\u304C\u5927\u5E45\u306B\u30A2\u30C3\u30D7\u3057\u3066\u3044\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30BF\u30A4\u30C8\u30EB\u8A2D\u5B9A\u306E\u305F\u3081\u306EHALSDL\u306E\u65B0\u6A5F\u80FD\u3002HALSDL::setWindowTitle()\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BW_RLE\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF081bpp\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF09\u306E\u5727\u7E2E\u7387\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002 \u53E4\u3044\u751F\u6210\u6E08\u307F\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\u3057\u3001\u30A2\u30BB\u30C3\u30C8\u3092\u518D\u751F\u6210\u3059\u308B\u3053\u3068\u3092\u5FD8\u308C\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR\u3092\u4F7F\u7528\u3059\u308BSTM32F756G-EVAL\u3067\u3001\u5916\u90E8\u30E1\u30E2\u30EA\u306E\u30D5\u30E9\u30C3\u30B7\u30E5\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR\u30EA\u30F3\u30AB\u306E\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\uFF65\u30B3\u30DE\u30F3\u30C9\u304C\u8FFD\u52A0\u3055\u308C\u3001Cortex-M4\u30D9\u30FC\u30B9\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u3092IAR 7.x\u3067\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u3068\u304D\u306E\u3001\u30EA\u30F3\u30AB\uFF65\u30A8\u30E9\u30FC\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `setupBuffer()\u3092\u4F7F\u7528\u3057\u3066\u3001\u7570\u306A\u308B\u30E1\u30E2\u30EA\uFF65\u30D0\u30C3\u30D5\u30A1\u3092CanvasWidgetRenderer\u306B\u5272\u308A\u5F53\u3066\u308B\u3068\u3001\u7A00\u306B\u30E1\u30E2\u30EA\u7834\u58CA\u304C\u767A\u751F\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u3067\u7A00\u306B\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u5916\u306B\u63CF\u753B\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\u8A2D\u5B9A\u304C\u6B63\u3057\u304F\u52D5\u4F5C\u3057\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u524A\u9664\u6642\u306B\u3001\u30E1\u30E2\u30EA\u7834\u58CA\u3092\u767A\u751F\u3055\u305B\u308B\u3053\u3068\u304C\u3042\u308B2\u3064\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnalogClock\u3067\u6B20\u843D\u3057\u3066\u3044\u305F\u4EEE\u60F3\u30E1\u30BD\u30C3\u30C9\u5BA3\u8A00\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8\u304C\u5916\u90E8Flash\u306B\u914D\u7F6E\u3055\u308C\u3066\u3057\u307E\u3046\u3001LPC4088DisplayModule\u306EGCC\u30EA\u30F3\u30AB\uFF65\u30B9\u30AF\u30EA\u30D7\u30C8\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `fontconvert.out\u3092\u5358\u72EC\u3067\u4F7F\u7528\u3059\u308B\u3082\u306E\u306B\u3064\u3044\u3066\u3001\u51FA\u529B\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u81EA\u52D5\u7684\u306B\u4F5C\u6210\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainers\u304C\u7A00\u306B\u8AA4\u3063\u305F\u30C9\u30E9\u30C3\u30B0\uFF65\u30A4\u30D9\u30F3\u30C8\u3092\u3001\u5B50\u306B\u9001\u4FE1\u3059\u308B\u3053\u3068\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E45\u30928\u5206\u5272\u3067\u304D\u306A\u3044\u30E2\u30CE\u30AF\u30ED\uFF081bpp\uFF09\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3001\u30C6\u30AD\u30B9\u30C8\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G Discovery\u30DC\u30FC\u30C9\u3067\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30C3\u30C1\uFF65\u30B5\u30F3\u30D7\u30EB\uFF65\u30EC\u30FC\u30C8\u304C\u308F\u305A\u304B\u306B\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-460"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.6.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2016\u5E746\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2bpp\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `4bpp\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8TiledImage\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u753B\u50CF\u304C1\u56DE\u4EE5\u4E0A\u7E70\u308A\u8FD4\u3057\u3066\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u7E70\u308A\u8FD4\u3057\u56DE\u6570\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30B5\u30A4\u30BA\u3068\u753B\u50CF\u30B5\u30A4\u30BA\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8RepeatButton\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u308B\u3068\u3001\u30AF\u30EA\u30C3\u30AF\uFF65\u30A4\u30D9\u30F3\u30C8\u304C\u7E70\u308A\u8FD4\u3057\u767A\u51FA\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8AnimationTextureMapper\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6A5F\u80FD\u304C\u7D44\u307F\u8FBC\u307E\u308C\u305FTextureMapper\u3067\u3059\u3002 animation_texture_mapper_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30B3\u30F3\u30C6\u30CAAnalogClock\u304A\u3088\u3073DigitalClock\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002clock_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30B3\u30F3\u30C6\u30CAProgressIndicators\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002progress_indicator_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30B3\u30F3\u30C6\u30CAModalWindow\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u30E1\u30A4\u30F3\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u4E0A\u306B\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u4F5C\u6210\u3057\u3001\u305D\u306E\u30E1\u30A4\u30F3\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u6B8B\u308A\u306E\u90E8\u5206\u3092\u30B7\u30A7\u30FC\u30C7\u30A3\u30F3\u30B0\u3057\u307E\u3059\u3002 \u30E2\u30FC\u30C0\u30EB\uFF65\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u9650\u308A\u3001\u30E1\u30A4\u30F3\uFF65\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u30AF\u30EA\u30C3\u30AF\u306F\u6E21\u3055\u308C\u307E\u305B\u3093\u3002 \u30B5\u30F3\u30D7\u30EB\u306Emodal_window_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30B3\u30F3\u30C6\u30CASlideMenu\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u30A2\u30AF\u30C6\u30A3\u30D6\u5316\u30DC\u30BF\u30F3\u306E\u3042\u308B\u30B5\u30A4\u30C9 / \u4E0A\u90E8 / \u4E0B\u90E8\u30E1\u30CB\u30E5\u30FC\u3092\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5185\u5916\u306B\u30B9\u30E9\u30A4\u30C9\u3055\u305B\u308B\u3088\u3046\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3057\u307E\u3059\u3002 \u30A2\u30A4\u30C9\u30EB\u72B6\u614B\u304C\u3057\u3070\u3089\u304F\u7D9A\u304F\u3068\u3001\u81EA\u52D5\u7684\u306B\u975E\u8868\u793A\u306B\u306A\u308B\u3088\u3046\u306B\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Canvas Widget Line\u304C\u3001ROUND_CAP_ENDING\u304A\u3088\u3073setCapPrecision()\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3001\u30E9\u30A6\u30F3\u30C9\uFF65\u30AD\u30E3\u30C3\u30D7\u3092\u5236\u5FA1\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306E\u5468\u6CE2\u6570\u306B\u975E\u5E38\u306B\u8FD1\u3044\u30C6\u30A3\u30C3\u30AF\u3092\u751F\u6210\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30BF\u30A4\u30C8\u30EB\u5185\u306B\u3001\u30DE\u30A6\u30B9\u306EXY\u5EA7\u6A19\u304C\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F \uFF08\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u5B9F\u884C\u4E2D\u306B\u3053\u308C\u3092\u30A2\u30AF\u30C6\u30A3\u30D6 / \u975E\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u3059\u308B\u306B\u306F\u3001F1\u30AD\u30FC\u3092\u62BC\u3057\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST Cube\u30C9\u30E9\u30A4\u30D0\u304C\u30D0\u30FC\u30B8\u30E7\u30F31.4.0\u306B\u66F4\u65B0\u3055\u308C\u3001STM32F7\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304A\u3088\u3073STM32F7\u30D9\u30FC\u30B9\u306E\u30DC\u30FC\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32769I-EVAL\u30DC\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769I-Discovery\u30DC\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u304B\u3089\u4F5C\u6210\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\uFF08F3\uFF09\u304C\u3001\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u542B\u3080\u540D\u524D\u3067\u4FDD\u5B58\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u53E4\u3044\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8\u304C\u8AA4\u3063\u3066\u4E0A\u66F8\u304D\u3055\u308C\u306A\u3044\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u304CCanvas Widget\u306E\u30E1\u30E2\u30EA\u4F7F\u7528\u7387\u3092\u51FA\u529B\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u6700\u9069\u306A\u30AD\u30E3\u30F3\u30D0\u30B9\uFF65\u30E1\u30E2\u30EA\u306E\u30D0\u30C3\u30D5\u30A1\uFF65\u30B5\u30A4\u30BA\u3092\u5BB9\u6613\u306B\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST\u30DC\u30FC\u30C9\u7528\u306EDMA\u30C9\u30E9\u30A4\u30D0: STM32F7\u5411\u3051\u306BDMA2D\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u521D\u671F\u5316\u3092\u8868\u793A\u3002 F4-Discovery\u306B\u5BFE\u3059\u308B\u3001CLUT_CM\u306E\u8AA4\u4F7F\u7528\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ED6\u306EDMA\u30C1\u30E3\u30CD\u30EB\u3092\u540C\u6642\u306B\u4F7F\u7528\u4E2D\u306E\u5834\u5408\u3001LPC17xx\u3001LPC18xx\u3001LPC43xx\u7528\u306EDMA\u30C9\u30E9\u30A4\u30D0\u304C\u6B63\u3057\u304F\u52D5\u4F5C\u3057\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 \u30C1\u30E3\u30CD\u30EB0\u306E\u307F\u3067\u6B63\u3057\u304F\u30D5\u30E9\u30B0\u3092\u78BA\u8A8D\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST\u30DC\u30FC\u30C9\u306E\u30BF\u30C3\u30C1\uFF65\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\uFF65\u30C9\u30E9\u30A4\u30D0\u304C\u3001\u30AF\u30A8\u30EA\u30FC\u3092\u884C\u3046\u524D\u306B\u521D\u671F\u5316\u304COK\u304B\u3069\u3046\u304B\u6B63\u3057\u304F\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u306E\u30DE\u30A6\u30B9\uFF65\u30AF\u30EA\u30C3\u30AF\u304C\u3001\u5FC5\u305A\u3057\u3082\u691C\u51FA\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert.exe\u306B\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u3057\u3066RGB565\u304C\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u3059\uFF08\u4ED6\u306E\u4E0D\u900F\u660E\u306A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5BFE\u3057\u3066\u306F\u9069\u5207\u306A\u30C7\u30D5\u30A9\u30EB\u30C8\u304C\u9069\u7528\u3055\u308C\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5727\u7E2E\u6642\uFF08BW\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u30D5\u30A9\u30FC\u30EB\u30D0\u30C3\u30AF\u3057\u305F\u3068\u304D\uFF09\u306B\u753B\u50CF\u304C\u5927\u304D\u3059\u304E\u308B\u5834\u5408\u306B\u3001\u5727\u7E2E\uFF08BW_RLE\uFF09\u304A\u3088\u3073\u56DE\u8EE2\uFF08\u30D5\u30A1\u30A4\u30EB\u540D\u306B.90.\uFF09\u304C\u3001\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3055\u308C\u305FBW\u753B\u50CF\u306B\u5BFE\u3057\u3066ImageConvert\u304C\u6A5F\u80FD\u3057\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5206\u7BC0\u4E0D\u5099`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3059\u3079\u3066\u306EMakefile\u3067\u3001realpath\u3067\u306F\u306A\u304Fabspath\u304C\u4F7F\u7528\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage\u3067\u3001AnimationEnded\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u304B\u3089\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u518D\u958B\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32756G-EVAL\u30DC\u30FC\u30C9\u306B\u5BFE\u3057\u3066\u3001QSPI Flash\u30B5\u30A4\u30BA\u304C64MB\u306B\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `D\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u7121\u52B9\u5316\u304C\u3001STM32F7HAL::flushFrameBuffer\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u30B7\u30F3\u30B0\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E2\u30FC\u30C9\u3067\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304CSRAM\u306B\u914D\u7F6E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u3001STM32F7\u3067\u6642\u6298\u767A\u751F\u3059\u308B\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\uFF65\u30A8\u30E9\u30FC\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `otm8009a\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF08STM32769-DISCO\u3001STM32769-EVAL\u3001STM32469-DISCO\u3001STM32469-EVAL\uFF09\u3067\u3001\u6700\u5927\u9650\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u8F1D\u5EA6\u304C\u4F7F\u7528\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `va_list\u306E\u540D\u524D\u4FEE\u98FE\u306B\u95A2\u3059\u308BIAR 7.50.x\u306B\u304A\u3051\u308B\u3001\u30D0\u30B0\u306B\u5BFE\u3059\u308B\u56DE\u907F\u7B56\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E2\u5B58\u306E4.x\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304A\u3088\u3073HAL\u30DD\u30FC\u30C8\u3068\u4E92\u63DB\u6027\u304C\u3042\u308A\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-451"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.5.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2016\u5E743\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `va_list\u30B7\u30F3\u30DC\u30EB\u306E\u89E3\u6C7A\u306B\u95A2\u9023\u3059\u308B\u30012\u3064\u306EIAR\u30EA\u30F3\u30AB\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u3089\u306F\u3001\u3044\u304F\u3064\u304B\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306EIAR\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30B5\u30F3\u30D7\u30EB\u3092\u30EA\u30F3\u30AF\u3067\u304D\u306A\u3044\u539F\u56E0\u3068\u306A\u308B\u3082\u306E\u3067\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F4-Discovery\u30DC\u30FC\u30C9\u3067\u300116bpp\u30E2\u30FC\u30C9\u3067\u9577\u65B9\u5F62\u304C\u8AA4\u3063\u305F\u8272\u3067\u63CF\u5199\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Canvas Widget Renderer\u304C\u3001\u30A2\u30F3\u30A2\u30E9\u30A4\u30F3\u30C9\uFF65\u30E1\u30E2\u30EA\uFF65\u30A2\u30AF\u30BB\u30B9\u3092\u5B9F\u884C\u3057\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `vApplicationIdleHook\uFF08FreeRTOS\u56FA\u6709\uFF09\u304C\u30D6\u30ED\u30C3\u30AF\u3057\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002\u4EE5\u524D\u306F\u3001\u30BF\u30B9\u30AF\u306E\u524A\u9664\u6642\u306BFreeRTOS\u304C\u30E1\u30E2\u30EA\u3092\u89E3\u653E\u3059\u308B\u3053\u3068\u3092\u59A8\u3052\u3066\u3044\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9014\u4E2D\u306B\u30A2\u30AF\u30BB\u30F3\u30C8\u306E\u3042\u308B\u30A2\u30E9\u30D3\u30A2\u8A9E\u306E\u5358\u8A9E\u304C\u3001\u6B63\u3057\u304F\u63CF\u753B\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PixelDataWidget::getAlpha()\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `char*\u3092\u30BD\u30FC\u30B9\u3068\u3057\u3066\u4F7F\u7528\u3059\u308BUnicode::strncpy()\u304C\u3001127\u3088\u308A\u4E0A\u306EASCII\u30B3\u30FC\u30C9\u306E\u6587\u5B57\u3092\u6B63\u3057\u304F\u30B3\u30D4\u30FC\u3057\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-450"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.5.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2016\u5E742\u67082\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u3092\u53F3\u304B\u3089\u5DE6\u3078\uFF08RTL\uFF09\u306E\u63CF\u753B\u3092\u4F7F\u7528\u3057\u3066\u3001\u65B0\u3057\u304F\u30A2\u30E9\u30D3\u30A2\u8A9E\u3068\u30D8\u30D6\u30E9\u30A4\u8A9E\u306E2\u3064\u306E\u8A00\u8A9E\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 RTL\u306E\u6587\u5B57\u5217\u3092\u3001LTR\u306E\u30C6\u30AD\u30B9\u30C8\u304A\u3088\u3073\u6570\u5B57\u3068\u6DF7\u5728\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `24bpp\u306E\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u753B\u50CF\u306E\u8868\u793A\u304C\u7CBE\u7D30\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u3082\u5897\u3048\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E1\u30BD\u30C3\u30C9Bitmap::dynamicBitmapCreate\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u5B9F\u884C\u6642\u306B\u4F5C\u6210\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 SD\u30AB\u30FC\u30C9\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060.bmp\u30D5\u30A1\u30A4\u30EB\u3092\u8868\u793A\u3059\u308B\u5834\u5408\u306A\u3069\u306B\u4FBF\u5229\u3067\u3059\u3002 dynamic_bitmap_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u304C\u305F\u307E\u306B\u4F4E\u4E0B\u3057\u305F\u3068\u304D\u306B\u3001\u975E\u5E38\u306B\u30B9\u30E0\u30FC\u30BA\u306A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u63D0\u4F9B\u3059\u308B\u30D5\u30EC\u30FC\u30E0\uFF65\u30EC\u30FC\u30C8\u88DC\u6B63\u6A5F\u80FD\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u6709\u52B9\u306B\u306A\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u5F37\u5316\u3055\u308C\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u524A\u9664\u3057\u3066\u4ED6\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u7528\u30B9\u30DA\u30FC\u30B9\u3092\u4F5C\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8PixelDataWidget\u304C\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u306F\u3001\u5B9F\u884C\u6642\u306B\u53D6\u5F97\u3057\u305F\u751F\u306E\u30D4\u30AF\u30BB\u30EB\uFF65\u30C7\u30FC\u30BF\uFF08\u30D3\u30C7\u30AA\uFF65\u30B5\u30F3\u30D7\u30EB\u306A\u3069\uFF09\u3092\u8868\u793A\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u5B9F\u884C\u53EF\u80FD\u30D5\u30A1\u30A4\u30EB\u304C\u30A2\u30A4\u30B3\u30F3\u3067\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u3001\u30BF\u30B9\u30AF\uFF65\u30D0\u30FC\u3067\u7C21\u5358\u306B\u8B58\u5225\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308BST\u30DC\u30FC\u30C9\u306F\u3001ST-Link\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u306E\u30EA\u30EA\u30FC\u30B93.7\u4EE5\u4E0A\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308C\u3070\u3001'make intflash'\u3092\u4F7F\u7528\u3057\u3066\u30B3\u30DE\u30F3\u30C9\u304B\u3089\u5185\u90E8Flash\u306E\u307F\u3067\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::snprintf()\u304C\u5927\u5E45\u306B\u6539\u5584\u304A\u3088\u3073\u66F4\u65B0\u3055\u308C\u3001%02d\u306E\u3088\u3046\u306A\u3055\u3089\u306B\u591A\u304F\u306E\u6A19\u6E96\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u6307\u5B9A\u5B50\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::snprintfFloat()\u304C\u8FFD\u52A0\u3055\u308C\u3001\u6D6E\u52D5\u5C0F\u6570\u70B9\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\uFF08"%f" va_args\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u500D\u7CBE\u5EA6\u306E\u5305\u542B\u3092\u5F37\u5236\u3059\u308B\u3053\u3068\u304C\u3042\u308B\u306E\u3067\u3001\u500B\u5225\u306E\u95A2\u6570\u3067\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u50CF\u30B3\u30F3\u30D0\u30FC\u30BF\u306E\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u54C1\u8CEA\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\uFF08\u6D6E\u52D5\u5C0F\u6570\u70B9\u306B\u3088\u308B\u8A08\u7B97\uFF09\u3002 \u65B0\u3057\u3044\u30BF\u30A4\u30D7\u306E\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\uFF65\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u30B5\u30DD\u30FC\u30C8\u3082\u8FFD\u52A0\u3055\u308C\u300116 / 18\u30D3\u30C3\u30C8\uFF65\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4F4E\u4F4D\uFF08\u672A\u4F7F\u7528\uFF09\u30D3\u30C3\u30C8\u306B\u5BFE\u3059\u308B\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3067\u306E\u3055\u307E\u3056\u307E\u306A\u914D\u7DDA\u65B9\u6CD5\u3092\u691C\u8A0E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::ButtonWithLabel\u306B\u30E1\u30BD\u30C3\u30C9updateTextPosition()\u304C\u52A0\u308F\u308A\u3001\u3053\u308C\u3092\u4F7F\u7528\u3057\u3066\u3001\u30E9\u30D9\u30EB\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u5909\u66F4\u6642\uFF08\u8A00\u8A9E\u5909\u66F4\u6642\u306A\u3069\uFF09\u306B\u3001\u6A2A\u5411\u304D\u30C6\u30AD\u30B9\u30C8\u3092\u4E2D\u592E\u63C3\u3048\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::TextArea\u306B\u65B0\u3057\u3044\u30E1\u30BD\u30C3\u30C9setBaselineY()\u304C\u52A0\u308F\u308A\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u5DE6\u4E0A\u9685\u3067\u306F\u306A\u304F\u30C6\u30AD\u30B9\u30C8\u306E\u30D9\u30FC\u30B9\u30E9\u30A4\u30F3\u306B\u5F93\u3063\u3066\u914D\u7F6E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B0\u30EA\u30D5\uFF65\u30A8\u30F3\u30B3\u30FC\u30C9\u306E\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u3001\u6700\u4E0A\u4F4D\u30D3\u30C3\u30C8\u3067\u306F\u306A\u304F\u6700\u4E0B\u4F4D\u30D3\u30C3\u30C8\u306E\u6700\u521D\u306E\u30D4\u30AF\u30BB\u30EB\u304C\u4FDD\u5B58\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8272\u306E\u5024\u306E\u4ED5\u69D8\u304Cuint16_t\u304B\u3089colortype\u306B\u5207\u308A\u66FF\u3048\u3089\u308C\u300116\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\u306824\u30D3\u30C3\u30C8\uFF65\u30AB\u30E9\u30FC\u306E\u30B7\u30FC\u30E0\u30EC\u30B9\u306A\u5207\u308A\u66FF\u3048\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::TextArea\u30AF\u30E9\u30B9\u306BsetIndentation()\u30E1\u30BD\u30C3\u30C9\u304C\u52A0\u308F\u308A\u3001\u6587\u5B57\u306E\u30B0\u30EA\u30D5\u304C\u524D\u306E\u6587\u5B57\u306E\u4E0B\u306B\u4F38\u3073\u308B\u5834\u5408\u306B\u3001\u7A00\u306B\u5207\u308A\u53D6\u3089\u308C\u3066\u3044\u305F\u306E\u304C\u56DE\u907F\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\uFF08\u540C\u69D8\u306B\u3001touchgfx::Keyboard\u30AF\u30E9\u30B9\u306B\u3001\u65B0\u3057\u304FsetTextIndentation()\u30E1\u30BD\u30C3\u30C9\u304C\u52A0\u308F\u308A\u307E\u3057\u305F\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F7xx\u304A\u3088\u3073STM32F4x9\u30DD\u30FC\u30C8\u3067\u3001touchgfx::Box\u306EDMA\u8EE2\u9001\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GPIO::VSYNC_FREQ\u4FE1\u53F7\u306F\u3001\u4EE5\u524D\u306F"VSYNC"\u5272\u8FBC\u307F\u306E\u307F\u3067"toggled"\uFF08\u5207\u66FF\uFF09\u3057\u3066\u3044\u307E\u3057\u305F\uFF08NXP LPC18xx\u3001NXP LPC43xx\u3001Freescale MK70F12\u3001ST stm32f4x9\uFF09\u3002 \u3053\u306E\u4FE1\u53F7\u304C\u3001\u30CF\u30A4\u306E\u5834\u5408"VSYNC"\u5272\u8FBC\u307F\u3001\u30ED\u30FC\u306E\u5834\u5408"Front-Porch-Entered"\u5272\u8FBC\u307F\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M3\u306B\u5BFE\u3059\u308BGCC\u30B5\u30DD\u30FC\u30C8\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7121\u52B9\u306AQSPI\u30E1\u30E2\u30EA\u9818\u57DF\u306B\u304A\u3051\u308B\u6295\u6A5F\u7684\u306A\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u3088\u3063\u3066\u3001\u7A00\u306B\u8D77\u3053\u308BSTM32F7\u306E\u30AF\u30E9\u30C3\u30B7\u30E5\u306B\u95A2\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 \u304A\u4F7F\u3044\u306EBoardConfiguration\u304C4.4.x\u3092\u30D9\u30FC\u30B9\u306B\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u66F4\u65B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FMC\u30D0\u30F3\u30AF1\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\uFF65\u30A2\u30AF\u30BB\u30B9\u304C\u539F\u56E0\u3067\u3001STM32F746G-DISCO\u30DC\u30FC\u30C9\u4E0A\u3067\u6642\u6298\u3061\u3089\u3064\u304D\u304C\u767A\u751F\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::TextAreaWithWildcards\u306B\u304A\u3051\u308B\u6587\u5B57"%"\u306E\u51E6\u7406\u304C\u6539\u5584\u3055\u308C\u3001\u7279\u6B8A\u306A\u30B1\u30FC\u30B9\u3067%%\u304C\u633F\u5165\u3055\u308C\u308B\u554F\u984C\u304C\u56DE\u907F\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::DragEvent\u304A\u3088\u3073touchgfx::GestureEvent\u3067\u3001\u7B26\u53F7\u306A\u3057\u3067\u306F\u306A\u304F\u7B26\u53F7\u4ED8\u304D\u306E\u5EA7\u6A19\u304C\u4F7F\u7528\u304A\u3088\u3073\u30EC\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u30C9\u30E9\u30C3\u30B0 / \u30B8\u30A7\u30B9\u30C1\u30E3\u306F\u3001\u305D\u308C\u305E\u308C\u304C\u53D7\u3051\u53D6\u308B\u63CF\u753B\u3067\u304D\u308B\u5EA7\u6A19\u3092\u57FA\u6E96\u3068\u3057\u3066\u8868\u3055\u308C\u308B\u306E\u3067\u3001\u3053\u308C\u306F\u7406\u306B\u304B\u306A\u3063\u305F\u65B9\u6CD5\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `snprintf("%x")\u3067\u3001\u5927\u6587\u5B57\u306E16\u9032\u6570\u304C\u751F\u6210\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 \u6A19\u6E96\u306Esnprintf()\u3068\u540C\u69D8\u306B\u3001"%X"\u3067\u306F\u5927\u6587\u5B57\u306E16\u9032\u6570\u3001"%x"\u3067\u306F\u5C0F\u6587\u5B57\u306E16\u9032\u6570\u304C\u751F\u6210\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30E2\u3092Linux\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u3068\u304D\u306E\u3001\u5076\u767A\u7684\u306A\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u659C\u4F53\u306E\u304D\u3064\u3044\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u969B\u306E\u3001\u518D\u63CF\u753B\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3059\u3079\u3066\u306ETouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308B\u3001Model\u30AF\u30E9\u30B9\u5185\u306EModelListener\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u304C\u6B63\u3057\u304F\u521D\u671F\u5316\u3055\u308C\u306A\u3044\uFF08NULL\uFF09\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::TextArea\u306B\u304A\u3051\u308B\u3001\u659C\u4F53\u306E\u304D\u3064\u3044\u30D5\u30A9\u30F3\u30C8\u3078\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u50CF\u30B3\u30F3\u30D0\u30FC\u30BF\u3067\u3001\u52170\u304C\u5C11\u3057\u9069\u5207\u3067\u306A\u3044\u30D4\u30AF\u30BB\u30EB\uFF65\u30AB\u30E9\u30FC\u306B\u306A\u308B\u5FAE\u5999\u306A\u30A8\u30E9\u30FC\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u306E\u30A8\u30E9\u30FC\u306B\u3088\u308A\u3001\u753B\u50CF\u5168\u4F53\u304C\u308F\u305A\u304B\u306B\u9069\u5207\u3067\u306A\u304F\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3057\u305F\u304C\u3001\u76EE\u7ACB\u3064\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider\u3067\u5024\u304C\u5747\u7B49\u306B\u914D\u5206\u3055\u308C\u306A\u3044\u5C0F\u3055\u306A\u30A8\u30E9\u30FC\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u975E\u63A8\u5968`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD::drawGlyph()\u304C\u975E\u63A8\u5968\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u4EE3\u308F\u308A\u306BLCD::drawString\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E2\u5B58\u306E4.x\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304A\u3088\u3073HAL\u30DD\u30FC\u30C8\u3068\u4E92\u63DB\u6027\u304C\u3042\u308A\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-442"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.4.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2015\u5E7411\u670826\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR 7.x\u3067\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u969B\u306B\u3001\u7A00\u306BSTM32F7\u30BF\u30FC\u30B2\u30C3\u30C8\u4E0A\u3067GUI\u30BF\u30B9\u30AF\u304C\u30CF\u30F3\u30B0\u30A2\u30C3\u30D7\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-441"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.4.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2015\u5E7410\u670827\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil 5.x\u3067\u30B3\u30F3\u30D1\u30A4\u30EB\u3059\u308B\u969B\u306B\u3001\u6642\u6298STM32F7\u30BF\u30FC\u30B2\u30C3\u30C8\u4E0A\u306EGUI\u30BF\u30B9\u30AF\u304C\u30CF\u30F3\u30B0\u30A2\u30C3\u30D7\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DSI\u3092\u6A2A\u5411\u304D\u304A\u3088\u3073\u30B7\u30F3\u30B0\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E2\u30FC\u30C9\u3067\u4F7F\u7528\u3059\u308B\u3068\u304D\u306B\u3001STM32 F469 EVAL / Discovery\u30DC\u30FC\u30C9\u4E0A\u3067\u3001\u6642\u6298\u30C6\u30A3\u30A2\u30EA\u30F3\u30B0\u304C\u767A\u751F\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32 F469\u30DC\u30FC\u30C9\u306EIAR\u30D5\u30E9\u30C3\u30B7\u30E5\uFF65\u30ED\u30FC\u30C0\u8A2D\u5B9A\u304C\u5909\u66F4\u3055\u308C\u3001\u5185\u90E8Flash\u306E\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3057\u305F\uFF08\u6CE8: QuadSPI Flash\u306B\u306FIAR\u30ED\u30FC\u30C0\u304C\u5B58\u5728\u3057\u306A\u3044\u305F\u3081\u3001\u3053\u3061\u3089\u306F\u307E\u3060ST-Link\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u3067\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5206\u7BC0\u4E0D\u5099`), ` STM32F746G-EVAL\u30DC\u30FC\u30C9\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u6E2C\u5B9A\u7528\u306EGPIO\u30AF\u30E9\u30B9\u3067\u3001BSP_LED\u95A2\u6570\u304C\u6B63\u3057\u304F\u4F7F\u7528\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u306E\u30DC\u30FC\u30C9\u3067\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u30672\u3064\u306E\u4FE1\u53F7\u306E\u307F\u304C\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u306A\u308A\u307E\u3059\u3002LED2\u3068LED4\u306FIO Expander\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u6E2C\u5B9A\u306B\u9069\u3055\u306A\u3044\u304B\u3089\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30C7\u30D0\u30C3\u30B0\u6642\u306BIAR Workbench\u306B\u8868\u793A\u3055\u308C\u308B\u3001\u7169\u308F\u3057\u3044"Get Alternative File"\u30C0\u30A4\u30A2\u30ED\u30B0\uFF65\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-440"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.4.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2015\u5E7410\u67086\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M7\u30B3\u30A2\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BF\u30C3\u30C1\u5165\u529B\u306B"finger size"\uFF08\u6307\u306E\u30B5\u30A4\u30BA\uFF09\u306E\u6982\u5FF5\u304C\u5C0E\u5165\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u308C\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001TouchGFX\u306F\u30EC\u30DD\u30FC\u30C8\u3055\u308C\u305FXY\u5EA7\u6A19\u306E\u5468\u8FBA\u9818\u57DF\u306B\u3042\u308B\u30BF\u30C3\u30C1\u53EF\u80FD\u306A\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u898B\u3064\u3051\u3088\u3046\u3068\u3059\u308B\u306E\u3067\u3001\u30E6\u30FC\u30B6\u304C\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u6B63\u78BA\u306B\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u5FC5\u8981\u304C\u306A\u304F\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306B\u3088\u308A\u3001\u5C0F\u3055\u3044\u30DC\u30BF\u30F3\u306E\u30D2\u30C3\u30C8\u304C\u975E\u5E38\u306B\u7C21\u5358\u306B\u306A\u308A\u307E\u3059\u3002 HAL::setFingerSize()\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio 2015\u306E\u30B5\u30DD\u30FC\u30C8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C7\u30E2\u304A\u3088\u3073\u30B5\u30F3\u30D7\u30EB\u7528\u306EVisual Studio\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u3059\u3070\u3084\u304F\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u3088\u3046\u306B\u3001Resources\u306E\u4E0B\u306BApplication.props\u304C\u7F6E\u304B\u308C\u307E\u3057\u305F\u3002 \u901A\u5E38\u3069\u304A\u308A\u3001Application.props\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u5909\u66F4\u6642\u306B\u306F\u3001\u518D\u30D3\u30EB\u30C9\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BDF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30D5\u30A9\u30F3\u30C8\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002 \u8981\u6C42\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u304C\u30D5\u30A9\u30F3\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\u306B\u7528\u610F\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30D5\u30A9\u30F3\u30C8\uFF65\u30B5\u30A4\u30BA\u3092\u30A8\u30E9\u30FC\uFF65\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u66F8\u304D\u8FBC\u307F\u307E\u3059\u3002 \u4F7F\u7528\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001monochrome_example\u306E\u4F8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30BB\u30C3\u30C8\u306E\u751F\u6210\u6642\u306B\u3001\u30D1\u30B9\u3084\u30D5\u30A1\u30A4\u30EB\u540D\u306B\u30B9\u30DA\u30FC\u30B9\u304C\u691C\u51FA\u3055\u308C\u305F\u5834\u5408\u306B\u767A\u884C\u3055\u308C\u308B\u30A8\u30E9\u30FC\uFF65\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST-Link\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u306E\u30EA\u30EA\u30FC\u30B93.7\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308C\u3070\u3001\u3059\u3079\u3066\u306EST\u30DC\u30FC\u30C9\u3092\u30B3\u30DE\u30F3\u30C9\uFF65\u30E9\u30A4\u30F3\u304B\u3089\u30D5\u30E9\u30C3\u30B7\u30E5\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30D3\u30EB\u30C9\u3057\u3001\u63A5\u7D9A\u3055\u308C\u305F\u30DC\u30FC\u30C9\u306B\u30D5\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u306B\u306F\u3001\u5358\u7D14\u306B'make -f target/ST/`, `<`, `board`, `>`, `/Makefile flash'\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30D5\u30E9\u30C3\u30B7\u30E5\u4E2D\u306B\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306F\u3001Windows\u306E\u30C7\u30D0\u30A4\u30B9\uFF65\u30DE\u30CD\u30FC\u30B8\u30E3\u306B\u79FB\u52D5\u3057\u3001"Disk drives"\u306E\u4E0B\u306E"MBED microcontroller USB Device"\u3092\u7121\u52B9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044touchgfx-env\u30D0\u30FC\u30B8\u30E7\u30F32.5\u304C\u3001\u65B0\u3057\u3044GCC\u30AF\u30ED\u30B9\uFF65\u30B3\u30F3\u30D1\u30A4\u30E9\u306E\u30D0\u30FC\u30B8\u30E7\u30F3##\u30D0\u30FC\u30B8\u30E7\u30F34.9.3 {#version-493}\u3068\u5171\u306B\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u65E7\u30D0\u30FC\u30B8\u30E7\u30F3\u306E4.8.4\u3067\u306F\u3001\u7A00\u306BCortex-M7\u30B3\u30A2\u306B\u5BFE\u3057\u3066\u7121\u52B9\u306A\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30DC\u30FC\u30C9\u306E\u30B5\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F7xx\u30D7\u30ED\u30BB\u30C3\u30B5\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G-DISCO\u304A\u3088\u3073STM32756G-EVAL\u30DC\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F469\u30D7\u30ED\u30BB\u30C3\u30B5\u3068DSI\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32469I-EVAL\u304A\u3088\u3073STM32469I-Discovery\u30DC\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u304A\u3088\u3073ScaleableImage\u3067\u3001"rotate90"\u306E\u4F7F\u7528\u6642\u306B\u6B63\u3057\u304F\u63CF\u753B\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F4DMA.cpp\u3067\u3001\u521D\u671F\u5316\u306E\u9806\u5E8F\u306B\u30D0\u30B0\u306E\u53EF\u80FD\u6027\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1\u3064\u306E\u30D5\u30A9\u30F3\u30C8\u306E\u30B0\u30EA\u30D5\u306E\u6570\u304C\u300132768\u306B\u5236\u9650\u3055\u308C\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002 \u610F\u56F3\u3057\u305F\u3068\u304A\u308A\u306B\u3001\u30D5\u30A9\u30F3\u30C8\u3042\u305F\u308A65536\u500B\u306E\u30B0\u30EA\u30D5\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30F3\u30B0\u30EB\uFF65\u30D5\u30EC\u30FC\u30E0\u30D0\u30C3\u30D5\u30A1\uFF65\u30E2\u30FC\u30C9\u3067\u3001hal.lockDMAToFrontPorch(false)\u304C\u52B9\u529B\u3092\u6301\u305F\u306A\u304F\u306A\u3063\u3066\u3057\u307E\u3046\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u306Bnewline\uFF08\u6539\u884C\uFF09\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u306B\u3001ButtonWithLabel\u3067\u30C6\u30AD\u30B9\u30C8\u304C\u7E26\u65B9\u5411\u306B\u6B63\u3057\u304F\u4E2D\u592E\u63C3\u3048\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-430"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.3.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2015\u5E746\u67088\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 TextureMapper\u306F\u9AD8\u5EA6\u306B\u6700\u9069\u5316\u3055\u308C\u305F\u753B\u50CF\u30EC\u30F3\u30C0\u30E9\u3067\u3001\u5B9F\u884C\u6642\u306B2\u6B21\u5143\u307E\u305F\u306F3\u6B21\u5143\u3067\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u3084\u56DE\u8EE2\u304C\u884C\u308F\u308C\u308B\u753B\u50CF\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u753B\u50CF\u306E\u9AD8\u5EA6\u306A\u56DE\u8EE2\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30DE\u30CB\u30E5\u30A2\u30EB\u307E\u305F\u306Ftexture_mapper_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 LCD\u306B\u3001\u4E09\u89D2\u5F62\u3068\u305D\u308C\u306B\u5BFE\u5FDC\u3059\u308B\u30B9\u30AD\u30E3\u30F3\uFF65\u30E9\u30A4\u30F3\u3092\u63CF\u753B\u3059\u308B\u305F\u3081\u306E\u65B0\u3057\u3044\u30E1\u30BD\u30C3\u30C9\u3001drawTextureMapTriangle\u3068drawTextureMapScanLine\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\uFF65\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u3002 \u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3059\u308B\u753B\u50CF\u3067\u3001\u30A2\u30EB\u30D5\u30A1\uFF65\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3092\u6ED1\u3089\u304B\u306B\u3059\u308B\u305F\u3081\u306B\u3001\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u30C7\u30A3\u30B6\u30EA\u30F3\u30B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30B5\u30F3\u30D7\u30EB\u307E\u305F\u306F\u30DE\u30CB\u30E5\u30A2\u30EB\u306B\u3042\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1BPP\uFF08\u30E2\u30CE\u30AF\u30ED\uFF09\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u5727\u7E2E\u3002 BW_RLE\u306E\u753B\u50CF\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF65\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u901A\u5E38\u306E\u30D4\u30AF\u30BB\u30EB\u6BCE\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u5727\u7E2E\u3059\u308B\u3088\u308A\u30B5\u30A4\u30BA\u304C\u5C0F\u3055\u304F\u306A\u308B\u5834\u5408\u306B\u306F\u3001\u81EA\u52D5\u7684\u306B\u30E9\u30F3\u30EC\u30F3\u30B0\u30B9\u3067\u30B3\u30FC\u30C9\u5316\u3057\u307E\u3059\u3002 \u591A\u304F\u306E\u5834\u5408\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u306E\u30D5\u30C3\u30C8\u30D7\u30EA\u30F3\u30C8\u304C\u5927\u5E45\u306B\u5C11\u306A\u304F\u306A\u308A\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30DE\u30CB\u30E5\u30A2\u30EB\u306E\u8A73\u7D30\u4E8B\u9805\u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30DE\u30CB\u30E5\u30A2\u30EB\u307E\u305F\u306Fslider_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Makefiles\u304C\u66F4\u65B0\u3055\u308C\u3001make-4.1\u3067\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LPC4088\u30D7\u30ED\u30BB\u30C3\u30B5\u304A\u3088\u3073Embedded Artists LPC4088 Display Module\u30DC\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30D5\u30A1\u30A4\u30EB\u540D\u306B\u6587\u5B57\u5217".int"\u3092\u5165\u308C\u308B\u3053\u3068\u3067\u3001\u500B\u3005\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u5916\u90E8\u3067\u306F\u306A\u304F\u5185\u90E8Flash\u306B\u914D\u7F6E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MoveAnimator\u3001FadeAnimator\u3001\u304A\u3088\u3073ZoomAnimationImage\u306B\u3001cancelMoveAnimation / cancelFadeAnimation / cancelZoomAnimation\u30E1\u30BD\u30C3\u30C9\u304C\u52A0\u308F\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E2\u5B58\u306E4.X\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u4E92\u63DB\u6027\u304C\u3042\u308A\u307E\u3059\u3002 touchgfx\u30D5\u30A9\u30EB\u30C0\u3092\u7F6E\u304D\u63DB\u3048\u308B\u3060\u3051\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3067\u65E2\u77E5\u306E\u554F\u984C\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u60C5\u5831`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u306E\u8A55\u4FA1\u7248\u306F\u3001\u30D7\u30EA\u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u305F\u30E9\u30A4\u30D6\u30E9\u30EA\u3067\u306F\u306A\u304F\u3001\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u30BD\u30FC\u30B9\uFF65\u30B3\u30FC\u30C9\u304C\u542B\u307E\u308C\u3066\u914D\u5E03\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3053\u306E\u8A55\u4FA1\u7248\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u305F\u8A55\u4FA1\u30DC\u30FC\u30C9\u306B\u9650\u5B9A\u3055\u308C\u305A\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306B\u79FB\u690D\u3067\u304D\u307E\u3059\u3002 \u305D\u306E\u4EE3\u308F\u308A\u3001\u3053\u306E\u8A55\u4FA1\u7248\u3067\u306FTouchGFX\u30A6\u30A9\u30FC\u30BF\u30FC\u30DE\u30FC\u30AF\uFF08\u900F\u304B\u3057\u30DE\u30FC\u30AF\uFF09\u304C\u6642\u6298\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u63CF\u753B\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u6539\u5584\u306B\u3088\u308A\u3001\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u304C\u524A\u6E1B\u3057\u307E\u3057\u305F\u3002 \u4E00\u822C\u7684\u306B\u3001GUI\u30BF\u30B9\u30AF\u306E\u30B9\u30BF\u30C3\u30AF\u3092\u3001\u30D0\u30FC\u30B8\u30E7\u30F3##\u30D0\u30FC\u30B8\u30E7\u30F34.2.0 {#version-420}\u3068\u6BD4\u3079\u3066\u7D041400\u30D0\u30A4\u30C8\u524A\u6E1B\u3067\u304D\u307E\u3059\uFF08\u5B9F\u969B\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u308A\u307E\u3059\uFF09\u3002 \u3055\u3089\u306B\u3001\u9759\u7684\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u308B\u30E1\u30E2\u30EA\u3082\u304A\u3088\u305D1KB\u524A\u6E1B\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8868\u793A\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u6700\u5927\u6570\u306E\u5236\u9650150\u304C\u5916\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u6A5F\u80FD\u3001\u30B0\u30E9\u30D5\u3001\u56FD\u969B\u5316\u3001\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u793A\u3059\u305F\u3081\u3001\u89E3\u50CF\u5EA6\u304C640 x 480\u304A\u3088\u3073480 x 272\u306E\u65B0\u3057\u3044\u30C7\u30E2\u304C2\u3064\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable.setPosition()\u304C\u3001setXY()\u3001setWidth()\u3001setHeight()\u3092\u547C\u3073\u51FA\u3059\u3088\u3046\u306B\u306A\u308A\u3001\u30B5\u30D6\u30AF\u30E9\u30B9\u5316\u304C\u5BB9\u6613\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u30DA\u30A4\u30F3\u30BF\u3092\u5B9F\u88C5\u3059\u308B\u969B\u306B\u306F\u3001\u57FA\u5E95\u30AF\u30E9\u30B9\u3068\u3057\u3066AbstractPainterRGB565\u304A\u3088\u3073AbstractPainterBW\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidget\u306BsetAlpha()\u304A\u3088\u3073getAlpha()\u30E1\u30BD\u30C3\u30C9\u304C\u52A0\u308F\u308A\u307E\u3057\u305F\u3002 \u30E6\u30FC\u30B6\u306E\u30AB\u30B9\u30BF\u30E0Painter\u30AF\u30E9\u30B9\u3067\u306F\u3053\u308C\u3092\u5B9F\u88C5\u3059\u308B\u304B\u3001AbstractPainterRGB565\u30AF\u30E9\u30B9\u304B\u3089\u7D99\u627F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u767B\u9332\u53EF\u80FD\u306A\u30BF\u30A4\u30DE\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u6700\u5927\u6570\u304C16\u304B\u308924\u306B\u5897\u3048\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx-env\u304C2.4\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002 \u74B0\u5883\u306B\u3088\u308B\u30D3\u30FC\u30D7\u97F3\u306F\u767A\u305B\u3089\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM324x9I-EVAL\u306E\u30DC\u30FC\u30C9\uFF65\u30B5\u30DD\u30FC\u30C8\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u3001STMCubeF4\u30C9\u30E9\u30A4\u30D0\u3092\u30D9\u30FC\u30B9\u306B\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Screen::handleGestureEvent\u306B\u3088\u3063\u3066\u3001x/y\u304C\u76F8\u5BFE\u5EA7\u6A19\u306B\u5909\u63DB\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `moveTo()\u3092\u8907\u6570\u56DE\u4F7F\u7528\u3057\u3066\u3001\u540C\u3058\u30AD\u30E3\u30F3\u30D0\u30B9\u4E0A\u306B\u8907\u6570\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u63CF\u753B\u3059\u308B\u3068\u304D\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u306B\u95A2\u9023\u3059\u308BZoomAnimationImage\u306E\u52D5\u304D\u3067\u3001\u7C21\u7D20\u5316\u306E\u305F\u3081\u306E\u6B63\u3057\u3044\u5F0F\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u306A\u304B\u3063\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PainterRGB565\u3067\u3001\u7DD1\u8272\u30A2\u30EB\u30D5\u30A1\u304C\u6B63\u3057\u304F\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RadioButtonGroup\u3067\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u304C\u30BC\u30ED\u306B\u521D\u671F\u5316\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScalableImage\u3067\u3001\u900F\u904E\u6027\u306E\u3042\u308B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3092\u64CD\u4F5C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u59CB\u3068\u7D42\u4E86\u304C2\u5EA6\u8868\u793A\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidget::getMinimalRect()\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5B9F\u88C5\u3067\u3001\u305D\u306E\u3082\u306E\u3067\u306F\u306A\u304F\u89AA\u3092\u57FA\u6E96\u3068\u3059\u308B\u5EA7\u6A19\u304C\u8FD4\u3055\u308C\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u304C\u3001\u305D\u308C\u81EA\u8EAB\u3092\u30BF\u30A4\u30DE\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u3057\u3066\u30C6\u30A3\u30C3\u30AF\u3054\u3068\u306B\u8AA4\u3063\u3066\u767B\u9332\u89E3\u9664\u3059\u308B\u305F\u3081\u3001\u4ED6\u306E\u30BF\u30A4\u30DE\uFF65\u30D9\u30FC\u30B9\u306E\u64CD\u4F5C\u3067\u4F7F\u7528\u3059\u308B\u306E\u304C\u96E3\u3057\u304F\u306A\u3063\u3066\u3044\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScalableImage\u304A\u3088\u3073ZoomAnimationImage\u304C\u6700\u9069\u5316\u3055\u308C\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-420"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.2.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2015\u5E741\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u63CF\u753B\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5927\u5E45\u306B\u5411\u4E0A\u3057\u3001\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u30011\u30D5\u30EC\u30FC\u30E0\u306E\u63CF\u753B\u306B\u304B\u304B\u308B\u6642\u9593\u304C25%\u524A\u6E1B\u3055\u308C\u307E\u3059\u3002 \u6CE8: \u3053\u306E\u6700\u9069\u5316\u306F\u5FC5\u305A\u3057\u3082\u3059\u3079\u3066\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u6A5F\u80FD\u3059\u308B\u308F\u3051\u3067\u306F\u306A\u3044\u306E\u3067\u3001\u624B\u52D5\u3067\u6709\u52B9\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u65E2\u5B58\u306E\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0\uFF08\u79FB\u690D\uFF09\u306B\u5BFE\u3057\u3066\u3053\u306E\u6700\u9069\u5316\u3092\u6709\u52B9\u5316\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0\u30AC\u30A4\u30C9\u306E\u300C\u6700\u9069\u5316\u300D\u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u3053\u306E\u6700\u9069\u5316\u3092\u6709\u52B9\u5316\u3059\u308B\u3053\u3068\u3092\u5F37\u304F\u63A8\u5968\u3057\u307E\u3059\u3002 \u3053\u306E\u6700\u9069\u5316\u306F\u3001##\u30D0\u30FC\u30B8\u30E7\u30F34.2.0 {#version-420}\u30DC\u30FC\u30C9\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u3059\u3079\u3066\u306E\u8A72\u5F53\u3059\u308B\u8A55\u4FA1\u30DC\u30FC\u30C9\u306B\u5BFE\u3057\u3066\u6709\u52B9\u3067\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u4E3B\u8981\u306A\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E7E\u4F55\u5B66\u5F62\u72B6\u306E\u30B9\u30E0\u30FC\u30BA\u3067\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B9\u3055\u308C\u305F\u63CF\u753B\u306E\u305F\u3081\u306B\u3001CanvasWidget\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u73FE\u6642\u70B9\u3067\u306F\u3001\u30E9\u30A4\u30F3\u3001\u30B5\u30FC\u30AF\u30EB\u3001\u304A\u3088\u3073\u3088\u308A\u6C4E\u7528\u7684\u306A\u30B7\u30A7\u30FC\u30D7\u304C\u5B9F\u88C5\u3055\u308C\u3066\u3044\u307E\u3059\u3002 CanvasWidget\u306F\u3001\u5857\u308A\u3064\u3076\u3057\u8272\uFF08+\u30A2\u30EB\u30D5\u30A1\uFF09\u3001\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF08\u30A2\u30EB\u30D5\u30A1\u3092\u542B\u3080\uFF09\u3001\u307E\u305F\u306F\u30AB\u30B9\u30BF\u30E0\uFF65\u30DA\u30A4\u30F3\u30BF\u3067\u30DA\u30A4\u30F3\u30C8\u3067\u304D\u307E\u3059\u3002 Canvas Widget\u3068Painter\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil\u30B3\u30F3\u30D1\u30A4\u30E9\u3068uVision4 IDE\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002 Keil\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u30EA\u30B9\u30C8\u306B\u3064\u3044\u3066\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306ETouchGFX Distribution\u306E\u7AE0\u306E\u300CSupported Hardware\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ZoomAnimationImage\u3001MoveAnimator\u3001\u304A\u3088\u3073FadeAnimator\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u59CB\u9045\u5EF6\u3092\u6307\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LPC4350\uFF08\u5185\u90E8Flash\u306A\u3057\uFF09\u306B\u3088\u308A\u30014.3\u30A4\u30F3\u30C1TouchGFX Demo\u30DC\u30FC\u30C9\u306B\u5BFE\u3059\u308B\u30DC\u30FC\u30C9\uFF65\u30B5\u30DD\u30FC\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u5206\u7BC0\u4E0D\u5099`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RadioButton\u304A\u3088\u3073RadioButtonGroup\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 app/examples/radio_button_example\u304A\u3088\u3073\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LPC43XX\u304A\u3088\u3073LPC1788\u3067\u3001DMA\u3092\u4F7F\u7528\u3059\u308B\u9577\u65B9\u5F62\u306E\u5857\u308A\u3064\u3076\u3057\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio 2013\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio 2015\u30D7\u30EC\u30D3\u30E5\u30FC\u7248\u304C\u3001\u66AB\u5B9A\u7684\u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30BB\u30C3\u30C8\u3092\u751F\u6210\u3059\u308B\u3068\u304D\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u5411\u4E0A\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `example\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u3001\u65B0\u3057\u304Fcanvas_widget_example\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u3001NO_USING_NAMESPACE_TOUCHGFX\u30B7\u30F3\u30DC\u30EB\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3067\u3001\u3055\u307E\u3056\u307E\u306A\u30D8\u30C3\u30C0\uFF65\u30D5\u30A1\u30A4\u30EB\u306B\u5B58\u5728\u3059\u308B"using namespace touchgfx"\u3092\u56DE\u907F\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX\u74B0\u5883`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30A7\u30EB\u306E\u958B\u59CB\u6642\u306B\u8868\u793A\u3055\u308C\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u4FEE\u6B63\u3055\u308C\u3001\u30B5\u30F3\u30D7\u30EB\u3078\u306E\u6B63\u3057\u3044\u30D1\u30B9\u3092\u8868\u793A\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E45\u304A\u3088\u3073 / \u307E\u305F\u306F\u9AD8\u3055\u304C8\u306E\u500D\u6570\u3067\u306A\u3044\u5834\u5408\u306E\u30011bpp\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CANCEL\u30A4\u30D9\u30F3\u30C8\u304C\u6B63\u3057\u3044\u5B50\u306B\u5F15\u304D\u7D99\u304C\u308C\u306A\u3044\u3053\u3068\u304C\u3042\u308B\u305F\u3081\u306B\u3001SC\u9818\u57DF\u5916\u3067\u306E\u30C9\u30E9\u30C3\u30B0\u4E2D\u306B\u30DC\u30BF\u30F3\u304C\u62BC\u4E0B\u72B6\u614B\u306E\u307E\u307E\u306B\u306A\u308B\u306A\u3069\u306E\u73FE\u8C61\u304C\u8D77\u304D\u308B\u3001ScrollableContainer\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u56DE\u8EE2\u3057\u305F\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067chromArt\u30D5\u30A9\u30F3\u30C8\u3092\u63CF\u753B\u3059\u308B\u3068\u304D\u306E\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keyboard\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306EsetTouchable(false)\u304C\u3001\u52B9\u529B\u3092\u6301\u305F\u306A\u3044\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freescale K70 DMA\u304C\u3001TCD0_CSR\u3067\u8A72\u5F53\u3059\u308BDONE\u30D3\u30C3\u30C8\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST\u30D7\u30ED\u30BB\u30C3\u30B5\u3067\u3001\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u975E\u30CD\u30A4\u30C6\u30A3\u30D6\u306E\u5411\u304D\u306E\u3068\u304D\u306B\u3001ChromArt\u306B\u3088\u3063\u3066\u63CF\u753B\u3055\u308C\u308B\u56DE\u8EE2\u3057\u305F\u30C6\u30AD\u30B9\u30C8\u306B\u3088\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30DC\u30FC\u30C9\u306E\u30B5\u30DD\u30FC\u30C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Embedded Artists LPC4357DevKit\u30DC\u30FC\u30C9\uFF65\u30D1\u30C3\u30B1\u30FC\u30B8\u3067\u3001CPU\u30AF\u30ED\u30C3\u30AF\u304C204MHz\u306B\u306A\u308A\u307E\u3057\u305F\uFF08\u4EE5\u524D\u306F96MHz\uFF09\u3002 NOR\u3067\u306F\u306A\u304F\u3001SPIFI Flash\u304C\u4F7F\u7528\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E2\u5B58\u306E4.X\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u4E92\u63DB\u6027\u304C\u3042\u308A\u307E\u3059\u3002 touchgfx\u30D5\u30A9\u30EB\u30C0\u3092\u7F6E\u304D\u63DB\u3048\u308B\u3060\u3051\u3067\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u60C5\u5831`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-411"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.1.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2014\u5E7410\u670829\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3: MoveAnimator\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 MoveAnimator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306B\u3088\u308A\u3001\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\uFF65\u30AF\u30E9\u30B9T\u3067\u3001\u73FE\u5728\u306E\u4F4D\u7F6E\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u76EE\u6A19\u4F4D\u7F6E\u307E\u3067\u306E\u79FB\u52D5\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 app/example/move_fade_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3: FadeAnimator\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 FadeAnimator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306B\u3088\u308A\u3001\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\uFF65\u30AF\u30E9\u30B9T\u3067\u3001\u73FE\u5728\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u76EE\u6A19\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u307E\u3067\u306E\u30D5\u30A7\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 app/example/move_fade_example\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScalableImage\u304A\u3088\u3073ZoomAnimationImage\u3067\u3001\u30D4\u30AF\u30BB\u30EB\uFF65\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3054\u3068\u306E\u30A2\u30EB\u30D5\u30A1\u3068\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u3054\u3068\u306E\u30A2\u30EB\u30D5\u30A1\u304C\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScalableImage\u304A\u3088\u3073ZoomAnimationImage\u3067\u3001ARGB8888\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7A00\u306BKeyboard\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3001\u4E0D\u6B63\u306B\u63CF\u753B\u3059\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `coords != {0,0}\uFF08\u305D\u308C\u81EA\u4F53\u306FScrollableContainer\u5185\u306B\u914D\u7F6E\uFF09\u3092\u4F7F\u7528\u3057\u3066\u3001\u30B3\u30F3\u30C6\u30CA\u5185\u306B\u914D\u7F6E\u3055\u308C\u305F\u5834\u5408\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3067\u3001\u30C9\u30E9\u30C3\u30B0\uFF65\u30A4\u30D9\u30F3\u30C8\u306E\u5EA7\u6A19\u304C\u4E0D\u6B63\u306B\u306A\u308B\u30D0\u30B0\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application\u30AF\u30E9\u30B9\u3067\u3001\u7279\u5B9A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5BFE\u3057\u3066registerTimerWidget\u3068unregisterTimerWidget\u304C\u547C\u3073\u51FA\u3055\u308C\u305F\u56DE\u6570\u304C\u6B63\u3057\u304F\u8FFD\u8DE1\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u3064\u307E\u308A\u3001\u8907\u6570\u56DE\u306E\u767B\u9332\u304C\u884C\u308F\u308C\u305F\u5834\u5408\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30C6\u30A3\u30C3\u30AF\uFF65\u30A4\u30D9\u30F3\u30C8\u3092\u53D7\u4FE1\u3057\u306A\u304F\u306A\u308B\u524D\u306B\u3001\u540C\u3058\u56DE\u6570\u306E\u767B\u9332\u89E3\u9664\u304C\u5FC5\u8981\u306B\u306A\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EEE\u60F3\u3067\u3042\u308B\u3079\u304D\u4E00\u90E8\u306EZoomAnimationImage\u95A2\u6570\u304C\u3001\u4EEE\u60F3\u3067\u306F\u306A\u3044\u3068\u3044\u3046\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u90E8\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u7279\u5B9A\u306E\u30B2\u30C3\u30BF\u30FC\u95A2\u6570\u304C\u3001\u6B20\u843D\u3057\u3066\u3044\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E2\u5B58\u306E4.X\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u4E92\u63DB\u6027\u304C\u3042\u308A\u307E\u3059\u3002 touchgfx\u30D5\u30A9\u30EB\u30C0\u3092\u7F6E\u304D\u63DB\u3048\u308B\u3060\u3051\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-410"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2014\u5E7410\u670817\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30E2\u30CE\u30AF\u30ED\u306E1bpp\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u52D5\u7684\u306A\u30B9\u30AF\u30EA\u30FC\u30F3\u306E\u5411\u304D\uFF08\u6A2A\u5411\u304D / \u7E26\u5411\u304D\uFF09\u306E\u5909\u66F4\u304C\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0\u753B\u50CF\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\uFF08ScalableImage\u304A\u3088\u3073ZoomAnimationImage\u30C9\u30ED\u30FC\u30A2\u30D6\u30EB\u3092\u53C2\u7167\uFF09\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30C7\u30E2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Home Control Demo\u3067640 x 480\u30E2\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Home Control Demo\u3067STM324xI-EVAL 5.7\u30A4\u30F3\u30C1\uFF65\u30DC\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30DC\u30FC\u30C9\uFF65\u30B5\u30DD\u30FC\u30C8\u306E\u5909\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM324xI-EVAL 5.7\u30A4\u30F3\u30C1\uFF65\u30DC\u30FC\u30C9\uFF08IAR+gcc\uFF09\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EmbeddedArtists LPC4357DevKit\u30DC\u30FC\u30C9\u306B\u5BFE\u3059\u308Bgcc\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX eval\u30DC\u30FC\u30C9\u306B\u5BFE\u3059\u308BSPIFI\u306E\u521D\u671F\u5316\u304C\u6700\u9069\u5316\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u306B\u6301\u7D9A\u7684\u30C9\u30ED\u30FC\u30A2\u30D6\u30EB\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u30A2\u30B5\u30FC\u30C8\u767A\u751F\u306E\u53EF\u80FD\u6027\u304C\u3042\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u975E\u5E38\u306B\u5927\u304D\u3044\u30D5\u30A9\u30F3\u30C8\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E2\u5B58\u306E4.X\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u4E92\u63DB\u6027\u304C\u3042\u308A\u307E\u3059\u3002 touchgfx\u30D5\u30A9\u30EB\u30C0\u3092\u7F6E\u304D\u63DB\u3048\u308B\u3060\u3051\u3067\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-400"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F34.0.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30EA\u30EA\u30FC\u30B9\u65E5\u4ED8: 2014\u5E749\u670826\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchEvent\u306E\u30EA\u30D5\u30A1\u30AF\u30BF\u30EA\u30F3\u30B0\uFF08API\u30D6\u30EC\u30FC\u30AD\u30F3\u30B0\uFF09:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setActive\u304C\u3001Drawable::setTouchable\u306B\u540D\u524D\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::isActive\u304C\u3001Drawable::isTouchable\u306B\u540D\u524D\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::hijackTouchEvent\u304C\u975E\u63A8\u5968\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C9\u30ED\u30FC\u30A2\u30D6\u30EB\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u975E\u30BF\u30C3\u30C1\u53EF\u80FD\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchEvent\u304C\u3059\u3079\u3066\u306E\u30B3\u30F3\u30C6\u30CA\u306E\u5B50\u306B\u5E38\u306B\u4F1D\u64AD\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A00\u8A9E\u56FA\u6709\u306E\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u3068\u5217\u306E\u914D\u7F6E\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u3001\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002 \u3053\u306E\u6A5F\u80FD\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A9\u30F3\u30C8\u306E\u30B7\u30A7\u30FC\u30D7\u3084\u30AB\u30FC\u30CB\u30F3\u30B0\u306B\u95A2\u3057\u3066\u3001\u30D5\u30A9\u30F3\u30C8\u63CF\u753B\u304C\u5927\u304D\u304F\u6539\u5584\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u3067\u30B9\u30AF\u30EA\u30FC\u30F3\u9077\u79FB\u5B9F\u884C\u4E2D\u306E\u3001\u65B0\u3057\u3044\u30D3\u30E5\u30FC / \u30D7\u30EC\u30BC\u30F3\u30BF / \u9077\u79FB\u306E\u30B5\u30A4\u30BA\u306B\u95A2\u3059\u308B\u30A2\u30B5\u30FC\u30C8\uFF65\u30C1\u30A7\u30C3\u30AF\u3002 FrontEndHeap\u306B\u30D3\u30E5\u30FC / \u30D7\u30EC\u30BC\u30F3\u30BF / \u9077\u79FB\u306E\u5B9A\u7FA9\u304C\u6B20\u843D\u3057\u3066\u3044\u308B\u3053\u3068\u3067\u3001\u30A2\u30B5\u30FC\u30C8\uFF65\u30C1\u30A7\u30C3\u30AF\u304C\u5931\u6557\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u304A\u3088\u3073ButtonWithLabel\u3067\u30010\u5EA6\u300190\u5EA6\u3001180\u5EA6\u3001270\u5EA6\u306E\u30C6\u30AD\u30B9\u30C8\u56DE\u8EE2\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7279\u6B8A\u306A\u30B1\u30FC\u30B9\u3067\u3001ButtonWithLabel\u4E0A\u3067\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u4E2D\u592E\u63C3\u3048\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u305FST\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u306E\u3001\u30C6\u30AD\u30B9\u30C8\u63CF\u753B\uFF084bpp\u30688bpp\uFF09\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5916\u90E8RAM\u306B\u30D3\u30C3\u30C8\u30DE\u30C3\u30D7\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5185\u306E\u3059\u3079\u3066\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u30AD\u30E3\u30C3\u30B7\u30E5\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freescales K70\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30B5\u30DD\u30FC\u30C8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7FFB\u8A33\u30B7\u30FC\u30C8: "\\`, `<`, `"\u304A\u3088\u3073 "\\`, `>`, `"\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C\u3001\u305D\u308C\u305E\u308C"`, `<`, `"\u304A\u3088\u3073"`, `>`, `"\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001"\\`, `<`, `Not a wildcard\\`, `>`, `"\u3092\u4F7F\u7528\u3057\u3066\u3001"`, `<`, `Not a wildcard`, `>`, `"\u306A\u3069\u306E\u9010\u8A9E\u7684\u306B\u7FFB\u8A33\u3055\u308C\u308B\u6587\u5B57\u5217\u306E\u4F7F\u7528\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `NXP LPC18XX\u30B7\u30EA\u30FC\u30BA\u306E\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u306E\u30B5\u30DD\u30FC\u30C8\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E45\u304C\u5947\u6570\u3067\u30A2\u30EB\u30D5\u30A1\u5024\u304C255\u3088\u308A\u4F4E\u3044\u753B\u50CF\u306E\u3001\u63CF\u753B\u30A8\u30E9\u30FC\u306E\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u304C\u521D\u671F\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306E\u3001TextArea::getTextHeight\u306E\u51E6\u7406\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextAreaWithWildcard::getTextWidth\u306B\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\uFF65\u30C6\u30AD\u30B9\u30C8\u306E\u5E45\u304C\u542B\u307E\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `gcc Makefile\u306B\u3001\u753B\u50CF\u30A2\u30BB\u30C3\u30C8\u306B\u3042\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `.BMP\u304A\u3088\u3073`), `.PNG\u304C\u542B\u307E\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B7\u30FC\u30C8\u306E\u3069\u306E\u7FFB\u8A33\u306B\u304A\u3044\u3066\u3082\u3001\u5148\u884C\u304A\u3088\u3073\u672B\u5C3E\u306E\u30DB\u30EF\u30A4\u30C8\uFF65\u30B9\u30DA\u30FC\u30B9\u306F\u30C8\u30EA\u30DF\u30F3\u30B0\u3055\u308C\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A9\u30F3\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF\u30678bpp\u306E\u30D5\u30A9\u30F3\u30C8\uFF65\u30C7\u30FC\u30BF\u304C\u6B63\u3057\u304F\u751F\u6210\u3055\u308C\u306A\u3044\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ButtonWithIcon::setBitmaps - \u610F\u56F3\u7684\u306B\u4EEE\u60F3\u95A2\u6570\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3059\u308B\u5834\u5408\u306E\u3001IAR\u8B66\u544A\u304C\u6291\u5236\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ButtonWithIcon\u3067\u63CF\u753B\u6A5F\u80FD\u304C\u6700\u9069\u5316\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u975E\u5E38\u306B\u7A00\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30EA\u30A2\u306E\u5C11\u3057\u3060\u3051\u5916\u306B\u66F8\u304D\u8FBC\u307E\u308C\u308B\u3053\u3068\u304C\u3042\u3063\u305F\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchEvent\u306E\u30EA\u30D5\u30A1\u30AF\u30BF\u30EA\u30F3\u30B0\u306B\u5FDC\u3058\u3066\u3001\u95A2\u6570\u3092\u540D\u524D\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30BF\u30C3\u30C1\uFF65\u30A4\u30D9\u30F3\u30C8\u3092\u53D7\u4FE1\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u30AB\u30B9\u30BF\u30E0\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3084\u30B3\u30F3\u30C6\u30CA\u3092\u3001\u5BA3\u8A00\u3059\u308B\u5FC5\u8981\u3082\u3042\u308A\u307E\u3059\u3002 hijackTouchEvent\u3092\u4F7F\u7528\u3057\u3066\u5B50\u304C\u30BF\u30C3\u30C1\uFF65\u30A4\u30D9\u30F3\u30C8\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u3092\u56DE\u907F\u3057\u3066\u3044\u305F\u5834\u5408\u3001\u4ECA\u5EA6\u306F\u3001\u3059\u3079\u3066\u306E\u5B50\u304C\u30BF\u30C3\u30C1\u53EF\u80FD\u306B\u306A\u3063\u3066\u3044\u306A\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EE5\u4E0B\u306E\u7F6E\u63DB\u306B\u3088\u3063\u3066\u3001\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u306EMain.cpp\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002    TypedText::registerTypedTextDatabase(TypedTextDatabase::getInstance(), TypedTextDatabase::getInstanceSize())\u3092\u3001Texts::setLanguage(0)\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002\u307E\u305F\u3001Texts::setLanguage(GB)\u306E\u3088\u3046\u306B\u3001\u30E6\u30FC\u30B6\u306E\u30C6\u30AD\u30B9\u30C8\uFF65\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u7279\u5B9A\u306E\u8A00\u8A9E\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u306F\u6B21\u306E\u8A18\u8FF0\u3082\u5FC5\u8981\u3067\u3059: #include `, `<`, `texts/TextKeysAndLanguages.hpp`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5168\u4F53\u3092\u518D\u69CB\u7BC9\u3057\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u60C5\u5831`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u306E\u30DE\u30CB\u30E5\u30A2\u30EB\u304C\u5927\u5E45\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-310"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F33.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FDI uEZGUI-1788-70WVT eval\u30DC\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\uFF08NXP LPC-1788 Cortex M3\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Mjolner TouchGFX Demo Board Rev. 1.1 eval\u30DC\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\uFF08NXP LPC-4353 Cortex M4/M0 4.3\u30A4\u30F3\u30C1\uFF09\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u753B\u50CF\u304Cassets/images\u30D5\u30A9\u30EB\u30C0\u306B\u8FFD\u52A0\u3055\u308C\u305F\u3068\u304D\u306B\u3001Visual Studio\u30D3\u30EB\u30C9\u3067BitmapDatabase.h\u304C\u518D\u30D3\u30EB\u30C9\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio\u306E\u4F7F\u7528\u6642\u306E\u307F: Visual Studio .props\u30D5\u30A1\u30A4\u30EB\u306ETouchGFXReleasePath\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002 \u5358\u7D14\u306B\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30C7\u30A3\u30BF\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30D1\u30B9\u306F"touchgfx\\"\u3092\u4ED8\u3051\u3066\u62E1\u5F35\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 template_application\u306B\u30D2\u30F3\u30C8\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio\u306E\u4F7F\u7528\u6642\u306E\u307F: Visual Studio\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF65\u30D5\u30A1\u30A4\u30EB\uFF08.vcxproj\u30D5\u30A1\u30A4\u30EB\uFF09\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002 \u5358\u7D14\u306B\u30C6\u30AD\u30B9\u30C8\uFF65\u30A8\u30C7\u30A3\u30BF\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u7DE8\u96C6\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30D5\u30A9\u30FC\u30E0\u306E\u3059\u3079\u3066\u306E\u30D1\u30B9\u3092\u3001"$(TouchGFXReleasePath)\\framework\\config\\msvs\\touchgfx_prebuild.targets"\u304B\u3089\u3001"$(TouchGFXReleasePath)\\config\\msvs\\touchgfx_prebuild.targets"\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u60C5\u5831`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\uFF65\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u304C\u6539\u8A02\u3055\u308C\u3001\u3055\u307E\u3056\u307E\u306A\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08\u30DE\u30A4\u30AF\u30ED\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9\u304A\u3088\u3073\u30C9\u30E9\u30A4\u30D0\uFF09\u306E\u3059\u3079\u3066\u306E\u5171\u901A\u30B3\u30FC\u30C9\u304C\u3001\u5404\u7A2E\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30DC\u30FC\u30C9\u3067\u5171\u6709\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u308C\u306B\u3088\u308A\u3001TouchGFX\u306B\u3088\u3063\u3066\u3059\u3067\u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\uFF65\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u30921\u3064\u4EE5\u4E0A\u542B\u3093\u3067\u3055\u3048\u3044\u308C\u3070\u3001\u65B0\u898F / \u30AB\u30B9\u30BF\u30E0\u306E\u30DC\u30FC\u30C9\u306E\u79FB\u690D\u4F5C\u696D\u304C\u5927\u5E45\u306B\u7C21\u7565\u5316\u3055\u308C\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-300"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F33.0.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u6A5F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio 2010 / 2012\u306E\u30B5\u30DD\u30FC\u30C8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3059\u308Bpng\u753B\u50CF\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `assets/bitmaps\u30D5\u30A9\u30EB\u30C0\u306E\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST STM32F4X9I-EVAL\u30DC\u30FC\u30C9\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Robert Penner\u306E\u30A4\u30FC\u30B8\u30F3\u30B0\u5F0F\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\uFF08touchgfx/EasingEquations.hpp\u3092\u53C2\u7167\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u50CF\u30B3\u30F3\u30D0\u30FC\u30BF: \u5165\u529B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u30B5\u30CB\u30C6\u30A3\uFF65\u30C1\u30A7\u30C3\u30AF\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002\u6700\u521D\u306E\u6587\u5B57\u3092\u6570\u5B57\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u305A\u3001\u82F1\u6570\u5B57\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u50CF\u30B3\u30F3\u30D0\u30FC\u30BF: \u5165\u529B\u30EA\u30B9\u30C8\u306E\u5927\u6587\u5B57\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3057\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u91CD\u8907\u306B\u5BFE\u3059\u308B\u30C1\u30A7\u30C3\u30AF\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\uFF65\u30B3\u30F3\u30D0\u30FC\u30BF: bpp\u304A\u3088\u3073font_size\u306E\u5024\u306B\u5BFE\u3059\u308B\u30D3\u30EB\u30C9\u505C\u6B62\u306E\u30B5\u30CB\u30C6\u30A3\uFF65\u30C1\u30A7\u30C3\u30AF\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer: setScrollbarPadding\u3001setScrollbarWidth\u3001setScrollbarColor\u3001setScrollbarAlpha\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer: ScrollThreshold\u306E\u5024\u304C1\u30D4\u30AF\u30BB\u30EB\u3067\u306F\u306A\u304F5\u30D4\u30AF\u30BB\u30EB\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D5\u30A9\u30F3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u30D6\u30EC\u30F3\u30C7\u30A3\u30F3\u30B0\u306B\u5BFE\u3059\u308B\u30B5\u30DD\u30FC\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\uFF08TextArea::setAlpha(uint8_t alpha)\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u304C2\u3064\u306E\u7570\u306A\u308B\u51FA\u529B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001RGB565\u3068ARGB8888\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert - \u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3059\u308B / \u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306E\u753B\u50CF\u306E\u51FA\u529B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u5236\u5FA1\u3059\u308B\u305F\u3081\u306B\u30012\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5927\u304D\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EA\u30F3\u30AB\uFF65\u30A8\u30E9\u30FC\u306E\u305F\u3081\u3001MinGW\u306E\u4E0B\u306ETouchgfx\u74B0\u5883\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002 g++\u30D0\u30FC\u30B8\u30E7\u30F3\u304C4.6.2\u304B\u30894.8.1\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8RAM\u306E\u30D5\u30C3\u30C8\u30D7\u30EA\u30F3\u30C8\u304C\u6539\u5584\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u306E\u69CB\u9020\u5909\u66F4\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u30D0\u30B0\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5857\u308A\u3064\u3076\u3057\u64CD\u4F5C\uFF08Box\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09\u306B\u3088\u3063\u3066\u3001lpc4357_emb_artist\u30DC\u30FC\u30C9\u304C\u30AF\u30E9\u30C3\u30B7\u30E5\u3059\u308B\u554F\u984C\u304C\u4FEE\u6B63\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30C6\u30AD\u30B9\u30C8\u5909\u63DB\u3068\u30D5\u30A9\u30F3\u30C8\u5909\u63DB: \u7570\u306A\u308B\u30BF\u30A4\u30DD\u30B0\u30E9\u30D5\u30A3\u304C\u540C\u4E00\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3066\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u50CF\u5909\u63DB\u3068\u30D5\u30A9\u30F3\u30C8\u5909\u63DB: POSIX\u6E96\u62E0\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u304C\u6539\u5584\u3057\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL: \u30AD\u30FC\u306E\u30C7\u30FC\u30BF\uFF65\u30BF\u30A4\u30D7\u304C\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u3057\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LanguageXX.cpp\u30D5\u30A1\u30A4\u30EB\u304C\u6539\u884C\u3057\u3066\u7D42\u4E86\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\uFF08\u8B66\u544A\u3092\u524A\u9664\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea::draw\u3067\u521D\u671F\u5316\u3055\u308C\u3066\u3044\u306A\u3044TypedText\u304C\u6B63\u3057\u304F\u51E6\u7406\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u624B\u9806`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `assets/bitmaps\u304A\u3088\u3073generated/bitmaps\u30D5\u30A9\u30EB\u30C0\u306E\u540D\u524D\u3092\u3001assets/images\u304A\u3088\u3073generated/images\u306B\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u74B0\u5883\u3092\u30D0\u30FC\u30B8\u30E7\u30F32.0\u306B\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3059\u3079\u3066\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3Makefile\u3092\u3001\u66F4\u65B0\u5F8C\u306Etemplate_application\u3067\u6307\u5B9A\u3055\u308C\u305FMakefile\u306B\u6E96\u62E0\u3059\u308B\u3088\u3046\u306B\u66F4\u65B0\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5168\u4F53\u3092\u518D\u69CB\u7BC9\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EE5\u524D\u306E\u900F\u660E\u306A\u8272\u3092\u542B\u3080bmp\u753B\u50CF\u3092\u3001\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3059\u308Bpng\u753B\u50CF\u306B\u5909\u63DB\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u3001imagemagick\u3068\u3044\u3046\u30D5\u30EA\u30FC\uFF65\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3059\u308B\u3068\u81EA\u52D5\u7684\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u8A73\u7D30\u306A\u60C5\u5831\u3084\u30D2\u30F3\u30C8\u306B\u3064\u3044\u3066\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "mailto:touchgfx-support@mjolner.com"
  }), `touchgfx-support@mjolner.com`), `\u307E\u3067\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u3057\u3044\u69CB\u9020\u306B\u6E96\u62E0\u3059\u308B\u3088\u3046\u306B\u3001\u30AB\u30B9\u30BF\u30E0HAL\u5B9F\u88C5\u3092\u66F4\u65B0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u60C5\u5831`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u3053\u308C\u307E\u3067bmp\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u900F\u660E\u8272\u306B\u4F7F\u7528\u3055\u308C\u3066\u3044\u305F"magic"\u900F\u660E\u8272\u304C\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002 \u4EE3\u308F\u308A\u306B\u3001\u30A2\u30EB\u30D5\u30A1\uFF65\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3059\u308Bpng\u753B\u50CF\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-220"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F32.2.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u6A5F\u80FD`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A2A\u5411\u304D\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u3088\u308B\u7E26\u5411\u304D\u30E2\u30FC\u30C9\u306B\u5BFE\u3059\u308B\u30B5\u30DD\u30FC\u30C8\u304C\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9 / \u30EA\u30BD\u30FC\u30B9\u306E\u72A0\u7272\u306A\u3057\u3067\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AB\u30FC\u30CB\u30F3\u30B0\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u4F8B\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\uFF08Energy Micro DK3750 eval\u30DC\u30FC\u30C9\u7528\u306EIAR\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u3088\u308B\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD\u3067blitCopy\u30E1\u30BD\u30C3\u30C9\u306E\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SyncBackBuffer\u30E1\u30BD\u30C3\u30C9\u304CHAL\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `clearLCD\u30E1\u30BD\u30C3\u30C9\u304CLCD\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `fillGradientRect\u30E1\u30BD\u30C3\u30C9\u304CLCD\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u304CsetScrollbarsVisible(bool visible)\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-210"
  }), `\u30D0\u30FC\u30B8\u30E7\u30F32.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E02\u8CA9\u306E\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3068\u3057\u3066TouchGFX\u304C\u521D\u3081\u3066\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u307E\u3057\u305F\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);