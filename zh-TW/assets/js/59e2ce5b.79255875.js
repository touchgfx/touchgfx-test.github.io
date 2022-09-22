"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[495],{

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

/***/ 29909:
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
  title: "\u4FEE\u8A02\u7D00\u9304"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/changelog",
  "id": "miscellaneous/changelog",
  "title": "\u4FEE\u8A02\u7D00\u9304",
  "description": "Version 4.20.0",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/miscellaneous/changelog.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/changelog",
  "permalink": "/4.20/zh-TW/docs/miscellaneous/changelog",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "changelog",
    "title": "\u4FEE\u8A02\u7D00\u9304"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5DF2\u77E5\u554F\u984C",
    "permalink": "/4.20/zh-TW/docs/miscellaneous/known-issues"
  },
  "next": {
    "title": "TouchGFX\u4E2D\u7684\u5354\u529B\u5EE0\u5546\u7D44\u4EF6",
    "permalink": "/4.20/zh-TW/docs/miscellaneous/3rd-party-components-in-touchgfx"
  }
};
const assets = {};
const toc = [{
  value: "Version 4.20.0",
  id: "version-4200",
  level: 2
}, {
  value: "Version 4.19.1",
  id: "version-4191",
  level: 2
}, {
  value: "Version 4.19.0",
  id: "version-4190",
  level: 2
}, {
  value: "\u7248\u672C4.18.1",
  id: "version-4181",
  level: 2
}, {
  value: "Version 4.18.0",
  id: "version-4180",
  level: 2
}, {
  value: "\u7248\u672C4.17.0",
  id: "version-4170",
  level: 2
}, {
  value: "\u7248\u672C4.16.1",
  id: "version-4161",
  level: 2
}, {
  value: "\u7248\u672C4.16.0",
  id: "version-4160",
  level: 2
}, {
  value: "\u7248\u672C4.15.0",
  id: "version-4150",
  level: 2
}, {
  value: "\u7248\u672C4.14.0",
  id: "version-4140",
  level: 2
}, {
  value: "\u7248\u672C4.13.4",
  id: "version-4134",
  level: 2
}, {
  value: "\u7248\u672C4.13.3",
  id: "version-4133",
  level: 2
}, {
  value: "\u7248\u672C4.13.2",
  id: "version-4132",
  level: 2
}, {
  value: "\u7248\u672C4.13.1",
  id: "version-4131",
  level: 2
}, {
  value: "\u7248\u672C4.13.0",
  id: "version-4130",
  level: 2
}, {
  value: "\u7248\u672C4.12.3",
  id: "version-4123",
  level: 2
}, {
  value: "\u7248\u672C4.12.2",
  id: "version-4122",
  level: 2
}, {
  value: "\u7248\u672C4.12.1",
  id: "version-4121",
  level: 2
}, {
  value: "\u7248\u672C4.12.0",
  id: "version-4120",
  level: 2
}, {
  value: "\u7248\u672C4.11.0",
  id: "version-4110",
  level: 2
}, {
  value: "\u7248\u672C4.10.0",
  id: "version-4100",
  level: 2
}, {
  value: "\u7248\u672C4.9.4",
  id: "version-494",
  level: 2
}, {
  value: "\u7248\u672C4.9.3",
  id: "version-493",
  level: 2
}, {
  value: "\u7248\u672C4.9.2",
  id: "version-492",
  level: 2
}, {
  value: "\u7248\u672C4.9.1",
  id: "version-491",
  level: 2
}, {
  value: "\u7248\u672C4.9.0",
  id: "version-490",
  level: 2
}, {
  value: "\u7248\u672C4.8.0",
  id: "version-480",
  level: 2
}, {
  value: "\u7248\u672C4.7.0",
  id: "version-470",
  level: 2
}, {
  value: "\u7248\u672C4.6.1",
  id: "version-461",
  level: 2
}, {
  value: "\u7248\u672C4.6.0",
  id: "version-460",
  level: 2
}, {
  value: "\u7248\u672C4.5.1",
  id: "version-451",
  level: 2
}, {
  value: "\u7248\u672C4.5.0",
  id: "version-450",
  level: 2
}, {
  value: "\u7248\u672C4.4.2",
  id: "version-442",
  level: 2
}, {
  value: "\u7248\u672C4.4.1",
  id: "version-441",
  level: 2
}, {
  value: "\u7248\u672C4.4.0",
  id: "version-440",
  level: 2
}, {
  value: "\u7248\u672C4.3.0",
  id: "version-430",
  level: 2
}, {
  value: "\u7248\u672C4.2.0",
  id: "version-420",
  level: 2
}, {
  value: "\u7248\u672C4.1.1",
  id: "version-411",
  level: 2
}, {
  value: "\u7248\u672C4.1.0",
  id: "version-410",
  level: 2
}, {
  value: "\u7248\u672C4.0.0",
  id: "version-400",
  level: 2
}, {
  value: "\u7248\u672C3.1.0",
  id: "version-310",
  level: 2
}, {
  value: "\u7248\u672C3.0.0",
  id: "version-300",
  level: 2
}, {
  value: "\u7248\u672C2.2.0",
  id: "version-220",
  level: 2
}, {
  value: "\u7248\u672C2.1.0",
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
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `\u68C4\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }), `Version 4.19.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Release date: April 4th, 2022`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed missing color properties for Text Button Style on a Flex Button Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed erroneous wildcard code generation for Text Button Style on a Flex Button Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed erroneous code generation when using a Flex Button in InteractionEndedCallBacks.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed erroneous 'Text' property label for Dynamic- & Static Graph labels.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed touchgfx_components folder not being deleted after version upgrade.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `When a cell lost focus in the text grid, it would sometimes result in a crash`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed FontConvert not generating new code if only change was ellipsis character.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed bug in Video Widget destructor that could cause failure in some applications.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4190"
  }), `Version 4.19.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Release date: March 21st, 2022`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `New and improved interface for text and typography handling for easier overview and management of large amounts of text.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Added features for text and typography management include:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Merging of single use and resources to one grid.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Easy conversion of texts.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Grouping.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Rearrange and copy texts in grid.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Search.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Hide language columns in grid.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Language settings for typographies.`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `New widget: Static Graph`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `New widget: Graph.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `New texts.xml format supporting texts in groups and language specific settings for typographies.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Added HAL::setAnimationStorage().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Added ScrollBase::setOvershootPercentage(), and getOvershootPercentage(), for drag events at end of lists that are not circular. This works for ScrollLists and ScrollWheels.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Event::getEventType() is now const.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Pressing F5 in the simulator will call Application::changeToStartScreen() which can be implemented in FrontendApplication.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `The simulator ability to flash each invalidated area can be set from code using HALSDL2::setFlashInvalidatedAreas().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `New function invalidateContent() to only invalidate the part of a widget that contains a graphical element, has been added to Drawable, Containers, Widgets and Mixins. Using this new function instead of invalidate() can result in performance improvements.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Added TextureMapper::updateScale() which will invalidate to ensure correct update of the screen when scaling. AnimationTextureMapper has been updated accordingly.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FadeAnimator only invalidates if the alpha changes. The Widget being faded must have function getAlpha().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Some internal graph classes have been renamed:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `New functions in graph classes allow an already scaled value to be added. If scale is 10, adding a scaled value of 15 is equivalent to adding the floating point value 1.5f. This can avoid introducing floating point arithmetics. The new functions all end in the word "Scaled".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Added Video::showFrame() to show a specific frame in a video.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Added LCD::copyAreaFromTFTToClientBuffer() copy new pixels between TFT and client buffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCDNemaP renamed to LCDGPU2D.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Added support for Microsoft Visual Studio 2022.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Renamed existing Keil libraries from "touchgfx_core.lib" to "touchgfx_core_wchar32.lib".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Added Keil libraries compiled for short enum/wchar: "touchgfx_core_wchar16.lib".`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Proper handling if the ellipsis character for a text does not exist.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bppSerialFlash::blitCopyRGB888() did not check if the image could be read from flash.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Function HAL::copyFrameBufferRegionToMemory() would sometimes set a wrong SolidRect.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `On rotated display with a framebuffer height larger than the display width, the wrong part of the framebuffer would be written to.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollList::setWindowSize() will be limited to the number of entirely visible items (including margins).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EasingEquations::backEaseInOut() had a rounding bug when the change was an odd number.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u68C4\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper::invalidateBoundingRect() is deprecated. Use invalidateContent().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::cacheDrawOperations() is removed. Use clearCachedAreas() and drawCachedAreas().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Function setXAxisScale() on Dynamic Graphs is now called setXAxisFactor().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Function getXAxisScaleAsInt() on Dynamic Graphs is now called getXAxisFactorAsInt().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Function getXAxisScaleAsFloat() on Dynamic Graphs is now called getXAxisFactorAsFloat().`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GraphElementArea::setBaseline() and GraphElementHistogram::setBaseline() no longer automatically redraws the graph. An explicit call to e.g. invalidateGraphArea() is required.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4181"
  }), `\u7248\u672C4.18.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Release date: December 7th, 2021`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u89E3\u6C7A\u5404\u7A2E\u7DB2\u8DEF\u7A69\u5B9A\u6027\u554F\u984C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728TouchGFX Designer\u6253\u958B\u6642\u6DFB\u52A0\u5305\u542B\u9032\u5EA6\u6307\u793A\u5668\u7684\u5716\u50CF\u5C08\u6848\u53EF\u80FD\u6703\u5C0E\u81F4\u7576\u6A5F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u201C\u6DFB\u52A0\u5C0F\u5DE5\u5177\u529F\u80FD\u8868\u201D\u53EF\u80FD\u9032\u5165\u9019\u6A23\u7684\u72C0\u614B - \u5728\u6253\u958B\u529F\u80FD\u8868\u6642\uFF0C\u641C\u7D22\u6587\u5B57\u65B9\u584A\u6C92\u6709\u805A\u7126`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7121\u6CD5\u70BA\u201C\u8A2D\u7F6E\u842C\u7528\u5B57\u5143\u201D\u64CD\u4F5C\u9078\u64C7\u201C\u8CC7\u6E90\u6587\u5B57\u201D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Missing BW_RLE format for 1bpp color depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Wrong error reporting when deleting a typography being used on a text`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Toggle Visibility button in Widget Tree View did not respond to mouse over`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Switch theme option in file menu did not report the current theme correctly`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Videos.s file is only generated for Keil projects with videos.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CWR PainterARGB8888Bitmap would not work with RGB565 images with alpha channel`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed possible display bug using Keyboard widget when pressing outside a key in the layout.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Event::getEventType() is now const.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4180"
  }), `Version 4.18.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2021\u5E7410\u670820\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5C0F\u5DE5\u5177\uFF1A\u5F71\u7247\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u5C0D\u65B0.xml\u6587\u5B57\u8CC7\u6599\u5EAB\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F9E.touchgfx\u6A94\u79FB\u9664TextEntries\u8CC7\u6599\u5EAB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DXRGB\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6700\u8FD1\u61C9\u7528\u7A0B\u5F0F\u6E05\u55AE\u4E2D\u589E\u52A0\u4E86\u61C9\u7528\u7A0B\u5F0F\u7684\u5B8C\u6574\u8DEF\u5F91\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u5716\u793A\u6DFB\u52A0\u4E86\u5404\u7A2E\u52D5\u756B\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u89E3\u6C7A\u4E86\u4EE3\u7406\u5C0D\u8A71\u65B9\u584A\u7F3A\u5931\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7576\u7F6E\u65BC\u5B9A\u5236\u5BB9\u5668\u5B9A\u7FA9\u4E2D\u5F8C\uFF0C\u5100\u9336\u5C0F\u5DE5\u5177\u7A0B\u5F0F\u78BC\u751F\u6210\u51FA\u932F\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7576\u6A94\u6848\u5728\u5176\u4ED6\u7DE8\u8F2F\u5668\u4E2D\u6253\u958B\u6642\uFF0CTouchGFX Designer\u5831\u544A\u78C1\u7247\u4E0A\u6A94\u66F4\u6539\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u985E\u6BD4\u6642\u9418\u80FD\u5920\u8ABF\u6574\u5927\u5C0F\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6587\u5B57\u7BA1\u7406\u5668\u4E2D\u7684\u5B57\u9AD4\u6392\u5370\u9078\u64C7\u5668\u4E0D\u80FD\u6B63\u78BA\u8ABF\u6574\u5927\u5C0F\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E0B\u62C9\u5C0F\u5DE5\u5177\u6709\u6642\u81EA\u52D5\u9078\u64C7\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u9032\u4E86\u6587\u5B57\u7BA1\u7406\u5668\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u9032\u4E86\u8272\u5F69\u9078\u64C7\u5668\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u9032\u4E86alpha\u6ED1\u584A\u5C0F\u5DE5\u5177\u7684UX\u884C\u70BA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528\u6ED1\u9F20\u6EFE\u8F2A\u5F8C\uFF0C\u6578\u4F4D\u5C6C\u6027\u4E0A/\u4E0B\u5C0F\u5DE5\u5177\u4E0D\u5DE5\u4F5C\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C6C\u6027\u5C0F\u5DE5\u5177\u4E4B\u9593\u8DF3\u52D5\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6296\u52D5\u6F14\u7B97\u6CD5\u9078\u64C7\u5668\u7F3A\u5C11\u540D\u7A31\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u5FA9\u4E86\u5728\u522A\u9664\u7528\u65BC\u5DF2\u9078\u6A23\u5F0F\u7BC4\u672C\u7684\u5BA2\u88FD\u5BB9\u5668\u5F8C\uFF0CScrollWheel\u5C0F\u5DE5\u5177\u8655\u65BC\u932F\u8AA4\u72C0\u614B\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u5FA9\u4E86\u8A66\u5716\u6253\u958B\u5DF2\u5728\u78C1\u7247\u4E0A\u88AB\u522A\u9664\u7684\u6700\u8FD1\u61C9\u7528\u7A0B\u5F0F\u6642\uFF0C\u5C0E\u81F4\u7576\u6A5F\u7684\u554F\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6587\u5B57\u548C\u8A9E\u8A00\uFF08\u8B6F\u6587\uFF09\u73FE\u5728\u5B58\u5132\u5728texts.xml\uFF08\u800C\u4E0D\u662Ftexts.xlsx\uFF0CExcel \u683C\u5F0F\uFF09\u4E2D\u3002 \u6DFB\u52A0\u4E86\u7528\u65BC\u8B6F\u6587\u532F\u51FA\u548C\u5C0E\u5165\u7684\u5DE5\u5177\uFF08touchgfx/framework/tools/textconvert/translation.rb\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5C0F\u5DE5\u5177\uFF1AVideoWidget\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u57283rdparty/libjpeg\u4E2D\u589E\u52A0\u4E86\u7528\u65BCLinux\u548CWindows\u7684libjpeg\u5EAB\uFF08\u6CE8\u610F\uFF0C\u8207\u6B63\u5F0F\u7684libjpeg\u76F8\u6BD4\uFF0CRed\uFF08\u7D05\uFF09\u548CBlue\uFF08\u85CD\uFF09\u88AB\u8ABF\u63DB\u4E86\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u64EC\u5668\u73FE\u5728\u53EF\u4EE5\u8655\u7406\u4E0D\u7B49\u65BC\u5F71\u50CF\u7DE9\u885D\u5340\u5C3A\u5BF8\u7684\u986F\u793A\u5C3A\u5BF8\u3002 \u547C\u53EBtouchgfx_generic_init() \u4E4B\u5F8C\uFF0C\u4F7F\u7528HAL::setFrameBufferSize() \u8A2D\u7F6E\uFF08\u66F4\u5927\uFF09\u7684\u5F71\u50CF\u7DE9\u885D\u5340\u5C3A\u5BF8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::center(), centerX(), centerY() \uFF0C\u4F7F\u53EF\u7E6A\u88FD\u5C0D\u8C61\u5728\u5176\u7236\u7269\u4EF6\u4E2D\u5C45\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::expand() \uFF0C\u4F7F\u53EF\u7E6A\u88FD\u7269\u4EF6\u7684\u5927\u5C0F\u8207\u5176\u7236\u7269\u4EF6\u76F8\u540C\uFF0C\u4E26\u53EF\u9078\u64C7\u5728\u908A\u7DE3\u5468\u570D\u8A2D\u7F6E\u908A\u8DDD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86LCD::fillBuffer() \uFF0C\u5728\u4EFB\u4F55\u8A18\u61B6\u9AD4\u7DE9\u885D\u5340\u4E2D\u586B\u5145\u8272\u5F69\u5716\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86ScrollableContainer::getChildrenContainedArea()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u572816bpp\u6DB2\u6676\u986F\u793A\u5668\u4E0A\u66F4\u5FEB\u5730\u7E6A\u88FDARGB8888\u5716\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::getCurrentScreen() \u73FE\u5728\u662F\u975C\u614B\u7684\uFF0C\u4FBF\u65BC\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freetype 2.10.4\u5DF2\u66F4\u65B0\u81F32.11.0\uFF08\u7531\u5B57\u9AD4\u8F49\u63DB\u5BE6\u7528\u7A0B\u5F0F\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `nlohmann json 3.9.1\u5DF2\u66F4\u65B0\u81F33.10.2\uFF08\u7531\u5716\u50CF\u8F49\u63DB\u5BE6\u7528\u7A0B\u5F0F\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Ruby 1.9.3\u5DF2\u66F4\u65B0\u81F33.0.2\uFF08\u7531\u6587\u5B57\u8F49\u63DB\u5BE6\u7528\u7A0B\u5F0F\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::doScroll() \u73FE\u5728\u662F\u516C\u5171\u7684\uFF0C\u4E26\u78BA\u4FDD\u6EFE\u52D5\u662F\u6709\u6548\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\u53EF\u4EE5\u8A2D\u7F6E\u6839\u5BB9\u5668\u5728\u87A2\u5E55\u4E2D\u7684\u4F4D\u7F6E\u548C\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6240\u6709\u7684Bitmap Painter\u53EF\u4EE5\u88DC\u511F\u9EDE\u9663\u5716\uFF0C\u4E26\u53EF\u4EE5\u5E73\u92EA\u4F4D\u5716\uFF08\u6709\u52A9\u65BC\u7BC0\u7D04\u8A18\u61B6\u9AD4\uFF09\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u81EA\u52D5\u65B7\u884C\uFF08WideTextAction\uFF09\u6C92\u6709\u8003\u616E\u7E2E\u9032\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4E0D\u5141\u8A31\u5BEB\u5165\u5230\u53E6\u4E00\u500B\u9A45\u52D5\u5668\u6216\u5B8C\u6574\u8DEF\u5F91\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextProvider::initialize() with ... parameter could generate unexpected results.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u751F\u6210\u6A94\u4E2D\u7684\u6240\u6709\u5916\u90E8\u5BA3\u544A\u73FE\u5728\u5747\u8207\u5BE6\u969B\u5BA3\u544A\u5339\u914D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7576\u57F7\u884C\u986F\u793A\u65B9\u5411\u8B8A\u66F4\u6642\uFF0CFRAME_BUFFER_WIDTH\u548CFRAME_BUFFER_HEIGHT\u53EF\u80FD\u9677\u5165\u6DF7\u4E82\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9032\u5EA6\u6307\u793A\u548C\u5100\u9336\u4E0D\u80FD\u8207\u5E36\u8A08\u6642\u5668\u7684mixins\u4E00\u8D77\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PixelDataWidget::getSolidRect() \u73FE\u5728\u7576\u6C92\u6709\u8A2D\u7F6E\u50CF\u7D20\u8CC7\u6599\u7DE9\u885D\u5340\u6642\uFF0C\u8FD4\u56DE\u7A7A\u7684\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86PixelDataWidget::getPixelData() \u548CPixelDataWidget::getBitmapFormat() \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u6A21\u64EC\u5668\u61C9\u7528\u7A0B\u5F0F\u5C0D\u6ED1\u9F20\u548C\u9375\u76E4\u4E8B\u4EF6\u56DE\u61C9\u66F4\u8FC5\u901F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::moveChildrenRelative() \u73FE\u5728\u66F4\u65B0\u4E86getScrolledX() \u548C getScrolledY()\u7684\u503C\uFF0C\u4F46\u662F\u6C92\u6709\u66F4\u65B0\u6372\u8EF8\u7684\u503C\u3002 \u4E0D\u904E\uFF0CmoveChildrenRelative() \u5DF2\u6309\u8A08\u5283\u88AB\u68C4\u7528\uFF0C\u8ACB\u4F7F\u7528doScroll() \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728ScrollableContainer\u4E2D\u4E0D\u6B63\u78BA\u4F7F\u7528\u76F8\u5C0D\u5EA7\u6A19\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86EasingEquations::elasticEaseIn()\u3001 EasingEquations::elasticEaseOut() \u548CEasingEquations::elasticEaseInOut()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u4E9B8bpp\u7E6A\u5716\u5668\u6703\u4F7F\u7528\u932F\u8AA4\u7684\u984F\u8272\uFF0C\u5728\u7F55\u898B\u60C5\u6CC1\u4E0B\uFF0C\u572832bpp\u986F\u793A\u5668\u7684L8_RGB888\u6703\u51FA\u932F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp::blitCopy() \u4E0D\u652F\u63F4RGB888\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp::fillRect() and LCD16bpp::drawGlyph() \u73FE\u5728\u5C0724\u4F4D\u984F\u8272\uFF08\u800C\u4E0D\u662F\u539F\u751F\u768416\u4F4D\u984F\u8272\uFF09\u50B3\u905E\u7D66DMA\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u68C4\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u5C07\u5F88\u5FEB\u652F\u63F4RGB565\uFF0C\u522A\u9664alpha\u901A\u9053\u3002 ImageConvert\u5C07\u5831\u544A\u9019\u4E00\u60C5\u6CC1\uFF0C\u4EE5\u8AAC\u660E\u8F49\u79FB\u5230\uFF08\u4F8B\u5982\uFF09ARGB8888\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u4E2D\u4E0D\u518D\u5305\u62EC\u7528\u65BCLinux\u7684SDL2\u3002 \u8ACB\u5728\u60A8\u7684Linux\u74B0\u5883\u4E2D\u5B89\u88DD\u5957\u88DD\u8EDF\u9AD4libsdl2-dev\u548Clibsdl2-image-dev\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper::invalidateBoundingRect() is deprecated. Use invalidateContent().`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4170"
  }), `\u7248\u672C4.17.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2021\u5E746\u670830\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u7684UI\u5DF2\u5B8C\u5168\u91CD\u505A\u3002 \u6240\u6709\u5DF2\u77E5\u7279\u6027\u4ECD\u7136\u53EF\u7528\uFF0C\u4F46\u901A\u904E\u6613\u65BC\u4F7F\u7528\u4E14\u76F4\u89C0\u7684\u4EA4\u4E92\u65B9\u6848\u63D0\u4F9B\u3002 \u9084\u589E\u52A0\u4E86\u5176\u4ED6\u7279\u6027\uFF0C\u5982\u591A\u500B\u8272\u5F69\u4E3B\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BATextureMapper\u589E\u52A0\u4E86\u51FD\u6578setAngles()\u3001setXAngle()\u3001setYAngle() \u548CsetZAngle()\u3002 \u8207\u76F8\u61C9\u7684\u66F4\u65B0\u51FD\u6578\u76F8\u6BD4\uFF0C\u9019\u4E9B\u51FD\u6578\u7531\u65BC\u4E0D\u57F7\u884C\u4EFB\u4F55\u7121\u6548\u5316\u64CD\u4F5C\uFF0C\u56E0\u6B64\u904B\u884C\u8D77\u4F86\u7A0D\u5FAE\u5FEB\u4E00\u4E9B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86TextureMapper::updateScale()\uFF0C\u5B83\u5C07\u8A2D\u7F6E\u65B0\u6BD4\u4F8B\u4E26\u57F7\u884C\u7121\u6548\u5316\u64CD\u4F5C\uFF08\u76E1\u53EF\u80FD\u5C11\uFF09\u3002 AnimationTextureMapper\u73FE\u5728\u4F7F\u7528\u6B64\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u5728\u6A21\u64EC\u5668\u4E2D\u6309\u4E0BF1\u9375\u5C07\u986F\u793A\u50CF\u7D20\u7684RGB\u8272\u5F69\u503C\uFF08\u5341\u516D\u9032\u4F4D\uFF09\u548CX\u3001Y\u5EA7\u6A19\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u5F71\u50CF\u7DE9\u885D\u5728\u9396\u5B9A\u5F8C\u672A\u89E3\u9396\uFF0C\u6A21\u64EC\u5668\u5C07\u7F6E\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer::setPageIndicatorCenteredX() \u5C07\u9801\u9762\u6307\u793A\u5668\u4E2D\u5FC3\u5C0D\u6E96\u9801\u9762\u6307\u793A\u5668\u7576\u524DY\u5EA7\u6A19\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Colortype\u5BE6\u73FE\u5DF2\u66F4\u6539\u70BA\u7E3D\u662F\u5B58\u51328\u4F4D\u5143\u7D05\u8272\u30018\u4F4D\u5143\u7DA0\u8272\u548C8\u4F4D\u5143\u85CD\u8272\uFF0C\u7121\u8AD6\u6D3B\u52D5\u4ECB\u9762\u7684\u8272\u6DF1\u662F\u591A\u5C11\uFF08\u5373\u4F7F\u662F\u7070\u8272\u548C\u9ED1\u767D\u4ECB\u9762\uFF09\u3002 \u5DF2\u522A\u9664\u6216\u91CD\u547D\u540D\u4E00\u4E9B\u8272\u5F69\u51FD\u6578\uFF0C\u53C3\u898B\u201C\u68C4\u7528\u201D\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Screen::insert()\u3001Screen::invalidate()\u548CScreen:invalidateRect()\uFF0C \u4EE5\u4FBF\u80FD\u5920\u5728\u87A2\u5E55\u4E2D\u4F7F\u7528\u201Cinvalidate()\u201D\u800C\u4E0D\u662F\u201Ccontainer.invalidate()\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u5BE6\u73FE\u6F38\u96B1\uFF0CCacheableContainer\u73FE\u5728\u652F\u63F4setAlpha\u548CgetAlpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp\u548CLCD16bppSerialFlash\u652F\u63F4RGB888\u5716\u50CF\u7684\u4F4D\u5143\u8907\u88FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Extracted DebugPrinter implementations from LCD drivers to separate files.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u80FD\u5920\u5275\u5EFA\u8ABF\u8272\u677F\u689D\u76EE\u5C11\u65BC256\u500B\uFF08\u70BA\u4E86\u7BC0\u7D04\u7A7A\u9593\uFF09\u7684\u52D5\u614BL8\u9EDE\u9663\u5716\uFF0C\u589E\u52A0\u4E86Bitmap::dynamicBitmapCreateL8()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u5275\u5EFA\u73FE\u6709\uFF08\u975C\u614B\u6216\u52D5\u614B\uFF09\u9EDE\u9663\u5716\u7684\u526F\u672C\uFF0C\u589E\u52A0\u4E86Bitmap::dynamicBitmapCreateCopy()\u3002 RGB565 alpha\u901A\u9053\u4E0D\u80FD\u8907\u88FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u7528\u7D66\u5B9A\u8272\u5F69\u586B\u5145\u52D5\u614B\u9EDE\u9663\u5716\u7684\u5168\u90E8\u6216\u4E00\u90E8\u5206\uFF0C\u589E\u52A0\u4E86Bitmap::dynamicBitmapFill()\u548CBitmap::dynamicBitmapFillRect()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Screen::getScreenWidth()\u548CScreen::getScreenHeight()\uFF0C\u61C9\u4F7F\u7528\u5B83\u5011\u4EE3\u66FFHAL::DISPLAY_WIDTH\u548CHAL::DISPLAY_HEIGHT\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freetype 2.10.2\u5DF2\u66F4\u65B0\u81F32.10.4\uFF08\u7531\u5B57\u9AD4\u8F49\u63DB\u5BE6\u7528\u7A0B\u5F0F\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u51FD\u6578OSWrappers::taskYield()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::initialize()\u5DF2\u6210\u70BA\u865B\u64EC\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86LCD32bpp_XRGB8888\u986F\u793A\u5668\u9A45\u52D5\uFF0C\u4EE5\u4FBF\u5728\u5F71\u50CF\u7DE9\u885D\u4E2D\u7121alpha\u901A\u9053\u7684\u60C5\u6CC1\u4E0B\u572832\u4F4D\u5143\u986F\u793A\u5668\u4E0A\u9032\u884C\u7E6A\u88FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u5728\u786C\u9AD4\u652F\u63F4\u6642\u4F7F\u7528DMA\u7E6A\u88FDL8\u5716\u50CF\uFF0C\u589E\u52A0\u4E86BlitOp L8\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728HALSDL2\u56DE\u61C9SDL_WINDOWEVENT_EXPOSED\u4EE5\u91CD\u7E6A\u8996\u7A97\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F9EHSV\u5230HSL\u7684\u8272\u5F69\u8F49\u63DB\u4E2D\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6C92\u6709\u5B9A\u7FA9DragAction\u6642Graph\u4E2D\u7684\u6545\u969C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CHAL::drawDrawableInDynamicBitmap()\u5728\u9EDE\u9663\u5716\u5C0F\u65BC\u53EF\u7E6A\u88FD\u7269\u4EF6\u6642\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u5C08\u6848\u53EF\u653E\u7F6E\u5728\u8DEF\u5F91\u4E2D\u5305\u542B\u570B\u969B\u5B57\u5143\uFF08\u5982\u201CWundersch\xF6n_Projekt\u201D\u6216\u201CL\xE6kkert_Projekt\u201D\uFF09\u7684\u8CC7\u6599\u593E\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer\u9801\u9762\u6307\u793A\u5668\uFF0C\u5728\u6DFB\u52A0\u6216\u522A\u9664\u9801\u9762\u5F8C\u9078\u5B9A\u9801\u9762\u672A\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86Graph VerticalFrontline\u4E2D\u7684\u91CD\u7E6A\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86Graph::Line\u4E2D\u6975\u5C11\u7684\u91CD\u7E6A\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u907F\u514D\u540D\u7A31\u885D\u7A81\uFF0C\u5C07HAL::setRenderingVariant\u91CD\u547D\u540D\u70BAHAL::setRenderingMethod\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\uFF0CCanvasWidgets\u6703\u4F7F\u756B\u5E03\u4EE5\u5916\u7684\u5340\u57DF\u7121\u6548\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5167\u90E8TouchGFX #include\u51FD\u6578\u5DF2\u6E05\u7406\u3002 \u9019\u610F\u5473\u8457\u53EF\u80FD\u9700\u8981\u5305\u542B`, `<`, `touchgfx/hal/HAL.hpp`, `>`, `\u548C\u5176\u4ED6\u6587\u4EF6\u3002 \u4E4B\u524D\u9019\u4E9B\u6A94\u53EF\u80FD\u932F\u8AA4\u5730\u5305\u542B\u5728\u5982Color.hpp\u7B49\u6587\u4EF6\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86LCD2bpp\u4E2D\u7684alpha\u6DF7\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C0D\u65BC24/32bpp\u9EDE\u9663\u5716\u548C\u6587\u5B57\uFF0CLCD16bpp\u7684Alpha\u6DF7\u5408\u6548\u679C\u66F4\u597D\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u68C4\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u51FA\u65BC\u901F\u5EA6\u65B9\u9762\u7684\u8003\u616E\uFF0C\u5F9E\u6240\u6709Canvas Painter\u4E2D\u522A\u9664\u4E86alpha\uFF0C \u8F49\u800C\u5728\u756B\u5E03\u5C0F\u90E8\u4EF6\uFF08Circle\u3001Line\u7B49\uFF09\u4E0A\u8A2D\u7F6Ealpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u68C4\u7528\u4E86\u67094\u500B\u53C3\u6578\u7684Color::getHSVFromHSL\u548CColor::getHSLFromHSV\u3002 \u8ACB\u4F7F\u7528\u67096\u500B\u53C3\u6578\u7684\u65B0\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F9ELCD\u985E\u4E2D\u522A\u9664\u4E86\u51FD\u6578getColorFrom24BitRGB\u3001getColorFromRGB\u3001getRedColor\u3001getRedFromColor\u3001gerGreenColor\u3001getGreenFromColor\u3001getBlueColor\u548CgetBlueFromColor\u3002 \u73FE\u5728\uFF0C\u6240\u6709\u986F\u793A\u5668\u985E\u578B\u7684\u8272\u5F69\u5747\u7528\u76F8\u540C\u683C\u5F0F\u5B58\u5132\uFF0C\u56E0\u6B64\u53EA\u4F7F\u7528Color\u985E\u4E2D\u7684\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u91CD\u547D\u540D\u51FD\u6578\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitRGB()\u73FE\u70BAColor::getColorFromRGB()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSV()\u73FE\u70BAColor::getColorFromHSV()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSL()\u73FE\u70BAColor::getColorFromHSL()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSV()\u73FE\u70BAColor::getRGBFromSHV()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSVFrom24BitRGB()\u73FE\u70BAColor::getHSVFromRGB()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSL()\u73FE\u70BAColor::getRGBFromHSL()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSLFrom24BitRGB()\u73FE\u70BAColor::getHSLFromRGB()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRedColor()\u73FE\u70BAColor::getRed()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getGreenColor()\u73FE\u70BAColor::getGreen()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getBlueColor()\u73FE\u70BAColor::getBlue()`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86ZoomAnimationImage::setDimension\u3002 \u4F7F\u7528setWidthHeight()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86\u5177\u6709int16_t&\u53C3\u6578\u7684AbstractProgressIndicator::getRange\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Image::getBitmapId()\u4E0D\u518D\u6A19\u8A18@deprecated\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::draw()\u4E0D\u518D\u6A19\u8A18@deprecated\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4161"
  }), `\u7248\u672C4.16.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2021\u5E742\u67088\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86ListLayout\u5C0F\u5DE5\u5177\u4E2D\u7684\u932F\u8AA4\uFF0C\u9632\u6B62\u5C07\u65B9\u5411\u8A2D\u7F6E\u70BA\u9664\u201C\u6771\u201D\u4EE5\u5916\u7684\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u95DC\u65BC\u6ED1\u584A\u5C0F\u90E8\u4EF6\u65B9\u5411\u9078\u64C7\u5668\u7684\u932F\u8AA4\u7684\u90E8\u4EF6\u63D0\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528NemaP LCD\u6642\u7684\u7A0B\u5F0F\u78BC\u751F\u6210\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u201C\u524D\u9032\u201D\u548C\u201C\u5F8C\u9000\u201D\u5716\u793A\u4F7F\u4E4B\u4FDD\u6301\u4E00\u81F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5100\u9336\u5C0F\u90E8\u4EF6\u7F3A\u5931\u7684\u8AAC\u660E\u6587\u5B57\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u8B93NeoChrom\u6709\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u589E\u52A0\u4E86LCD::drawQuad\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C0F\u90E8\u4EF6TextureMapper\u548CScalableImage\u6539\u70BA\u4F7F\u7528LCD::drawQuad\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Graph\u4E2D\u7684\u8B8A\u6578dragAction\u672A\u521D\u59CB\u5316\u5C0E\u81F4\u7684\u6545\u969C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BlockTransition\u4E0D\u9069\u7528\u65BC\u8C4E\u5C4F\u786C\u9AD4\u4E0A\u7684\u6A6B\u5C4F\u986F\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86PartialFrameBufferManager::tryTransmitBlock\u5C0E\u81F4\u7684\u7F6E\u4F4D\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4160"
  }), `\u7248\u672C4.16.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2020\u5E7412\u670815\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5C0F\u90E8\u4EF6\uFF1A\u5100\u9336\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u7684\u89F8\u767C\u689D\u4EF6\u201C\u5728\u87A2\u5E55\u8F49\u63DB\u958B\u59CB\u6642\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u89F8\u767C\u689D\u4EF6\u201C\u5728\u9032\u5165\u87A2\u5E55\u6642\u201D\u91CD\u547D\u540D\u70BA\u201C\u5728\u87A2\u5E55\u8F49\u63DB\u7D50\u675F\u6642\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u7684\u64CD\u4F5C\u201C\u8A2D\u7F6E\u8A9E\u8A00\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u5728\u5C0F\u90E8\u4EF6\u4E0A\u901A\u904EImage Picker\u6DFB\u52A0\u4E00\u5F35\u5716\u50CF\u6703\u9078\u4E2D\u8A72\u5716\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u201C\u8AAC\u660E-`, `>`, `\u9375\u76E4\u5FEB\u901F\u9375\u201D\u4E2D\u589E\u52A0\u4E86\u5FEB\u901F\u9375\u6587\u4EF6\u7684\u9023\u7D50\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u64CD\u4F5C\u201C\u57F7\u884CC++\u7A0B\u5F0F\u78BC\u201D\u589E\u52A0\u4E86\u66F4\u597D\u7684\u7A0B\u5F0F\u78BC\u7DE8\u8F2F\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u64CD\u4F5C\u201C\u8F49\u81F3\u87A2\u5E55\u201D\u589E\u52A0\u4E86\u65B0\u7684Block Transition\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u201C\u6DFB\u52A0\u5C0F\u90E8\u4EF6\u201D\u529F\u80FD\u8868\u7684\u53EF\u7528\u6027/\u4F7F\u7528\u8005\u9AD4\u9A57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DLCDNemaP\u7684\u521D\u6B65\u652F\u63F4\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u904E\u6DFB\u52A0'#include `, `<`, `string.h`, `>`, `'\u4FEE\u6B63\u4E86\u751F\u6210\u7684mainBase.cpp\u5728unix\u4E0A\u7DE8\u8B6F\u5931\u6557\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u6A94\u6848\u540D\u5305\u542B\u5E95\u7DDA\u6642\u5F71\u50CF\u6A94\u78BA\u8A8D\u5831\u544A\u5716\u50CF\u6709\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u80FD\u5920\u5275\u5EFA\u540D\u5B57\u4E2D\u5E36\u7A7A\u683C\u7684\u61C9\u7528\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed Dynamic Graph callback handlers being generated twice in Custom Containers.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u52D5\u614B\u5716\u8868\u8207TouchGFX Designer\u5728\u7279\u5B9A\u908A\u754C\u689D\u4EF6\u4E0B\u767C\u751F\u885D\u7A81\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u4E00\u6B21\u6027\u4F7F\u7528\u548C\u8CC7\u6E90\u6587\u5B57\u4E4B\u9593\u5207\u63DB\u6642\u52D5\u614B\u5716\u8868\u4E2D\u7684\u6A19\u7C64\u4E0D\u66F4\u65B0\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u4FEE\u6539\u52D5\u614B\u5716\u8868\u5927\u5C0F\u6642\u52D5\u614B\u5716\u8868\u4E2D\u7684\u6A19\u7C64\u4F4D\u7F6E\u4E0D\u66F4\u65B0\u7684\u554F\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u6539\u5584\u6027\u80FD\uFF0C\u4F7F\u7528\u4E86\u65B0\u7684\u7121\u6548\u5316\u6F14\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u5BB9\u5668Gauge\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BoxWithBorder\u73FE\u5728\u662FBox\u7684\u5B50\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u6539\u5584\u6027\u80FD\uFF0CLCD16\u548CLCD8 fillRect\u51FD\u6578\u73FE\u5728\u540C\u6642\u5BEB\u516532/16\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86CanvasWidget::resetMaxRenderLines()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07LCD2shiftVal()\u3001LCD2getPixel() \u548CLCD2setPixel() \u79FB\u52D5\u5230\u4E86LCD2bpp\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07LCD4getPixel() \u548CLCD4setPixel() \u79FB\u52D5\u5230\u4E86LCD4bpp\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::setScrollbarsPermanentlyVisible()\u73FE\u5728\u63A1\u7528\u5E03\u6797\u53C3\u6578\u4F86\u6C38\u4E45\u7981\u7528\u53EF\u898B\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u548CScalableImage\u73FE\u5728\u90FD\u662FImage\u7684\u5B50\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86AnimatedImage::setEndBitmap()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86AbstractClock::getCurrent12Hours\u548CAbstractClock::getCurrentAM()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::itoa()\u548CUnicode::utoa()\u6700\u591A\u53EF\u4EE5\u8655\u740636\u9032\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86AnalogClock::setAlpha()\u548CgetAlpha()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::setScrollbarsPermanentlyVisible()\u73FE\u5728\u63A1\u7528\u5E03\u6797\u53C3\u6578\u4F86\u6C38\u4E45\u7981\u7528\u53EF\u898B\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86TextArea::resizeHeightToCurrentTextWithRotation()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::setWidthHeight()\uFF0C\u4EE5\u4FBF\u5728(width,height)\u3001Drawable\u3001Bitmap\u6216Rect\u7D66\u51FA\u7684\u4E00\u6B21\u547C\u53EB\u4E2D\u8A2D\u7F6E\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::setXY(Drawable&)\uFF0C\u4EE5\u4FBF\u5C07Drawable\u7684\u5DE6\u4E0A\u89D2\u8A2D\u7F6E\u5728\u8207\u53E6\u4E00\u500BDrawable\u76F8\u540C\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::setPosition(Drawable&)\uFF0C\u4EE5\u4FBF\u5C07Drawable\u653E\u7F6E\u5728\u8207\u53E6\u4E00\u500BDrawable\u76F8\u540C\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getRGBFrom24BitHSV()\u548CColor::getHSVFrom24BitRGB()\uFF0C\u4EE5\u4FBF\u5728\uFF08\u8272\u76F8\u3001\u98FD\u548C\u5EA6\u3001\u660E\u5EA6\uFF09\u548C\uFF08\u7D05\u3001\u7DA0\u3001\u85CD\uFF09\u4E4B\u9593\u8F49\u63DB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getColorFrom24BitHSV()\u548CColor::getHSVFromColor()\uFF0C\u4EE5\u4FBF\u5728\uFF08\u8272\u76F8\u3001\u98FD\u548C\u5EA6\u3001\u660E\u5EA6\uFF09\u548Ccolortype\u4E4B\u9593\u8F49\u63DB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getHSVFromHSL()\u548CColor::getHSLFromHSV()\uFF0C\u4EE5\u4FBF\u5728\u660E\u5EA6\u548C\u4EAE\u5EA6\u4E4B\u9593\u8F49\u63DB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getRGBFrom24BitHSL()\u548CColor::getHSLFrom24BitRGB()\uFF0C\u4EE5\u4FBF\u5728\uFF08\u8272\u76F8\u3001\u98FD\u548C\u5EA6\u3001\u4EAE\u5EA6\uFF09\u548C\uFF08\u7D05\u3001\u7DA0\u3001\u85CD\uFF09\u4E4B\u9593\u8F49\u63DB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getColorFrom24BitHSL()\u548CColor::getHSLFromColor()\uFF0C\u4EE5\u4FBF\u5728\uFF08\u8272\u76F8\u3001\u98FD\u548C\u5EA6\u3001\u4EAE\u5EA6\uFF09\u548Ccolortype\u4E4B\u9593\u8F49\u63DB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PainterBW\u73FE\u5728\u652F\u6301alpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SnprintFloat(s)\u73FE\u5728\u8655\u7406NaN (\u201Dnan\u201D)\u548CInf (\u201Dinf\u201D)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SnprintFloat(s)\u73FE\u5728\u9ED8\u8A8D\u70BA\u5C0F\u6578\u9EDE\u5F8C6\u4F4D\u800C\u4E0D\u662F3\u4F4D\u3002 ANSI C\u6307\u51FA\u201C\u5982\u679C\u7CBE\u5EA6\u7F3A\u5931\uFF0C\u63D0\u4F9B6\u4F4D\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Circle::setPixelCenter()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u9032\u5EA6\u6307\u793A\u689D\u589E\u52A0\u4E86updateValue()\u3001setEasingEquation()\u3001setValueSetAction()\u548CsetValueUpdatedAction()\uFF0C\u4EE5\u4FBF\u5BE6\u73FE\u5F9E\u4E00\u500B\u503C\u5230\u53E6\u4E00\u500B\u503C\u7684\u5E73\u6ED1\u904E\u6E21\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86SwipeContainer::getSelectedPage\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86BlockTransition\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86CacheableContainer::setSolidRect()\u548CgetCacheBitmap()\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86getGraphAreaPaddingRight()\u7684\u62FC\u5BEB\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `In rare occasions the TextureMapper would draw some scanlines twice.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679Csteps=0\uFF0CAnimationTextureMapper\u3001ZoomAnimationImage\u3001MoveAnimation\u548CFadeAnimation\u90FD\u5C07\u5DE5\u4F5C\uFF0C\u4E26\u5C07\u901A\u77E5\u5DF2\u5728\u6700\u5F8C\u4E00\u500B\u52D5\u756B\u6B65\u9A5F\u7D50\u675F\u52D5\u756B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u5FA9\u4E86\u5F9E\u6309\u9375\u62D6\u96E2\u548C\u91CB\u653E\u6642\u9375\u76E4\u4E2D\u767C\u751F\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider::getIndicatorMin()\u8FD4\u56DE\u6307\u793A\u4F4D\u6700\u5927\u503C\u800C\u4E0D\u662F\u6700\u5C0F\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u6703\u7834\u58DEBMP\u5716\u50CF\u7684\u5806\uFF08\u4E14\u5F88\u53EF\u80FD\u5D29\u6F70\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7D0B\u7406\u6620\u5C04\u5668\u5728\u96D9\u7DDA\u6027\u6A21\u5F0F\u4E0B\u7E6A\u88FD\u7684\u5716\u50CF\u908A\u7DE3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86alpha`, `<`, `255\u6642BoxWithBorder\u7684\u6975\u5BEC\u908A\u754C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07ProgressIndicator\u7684\u7BC4\u570D\u548C\u503C\u4FEE\u6B63\u70BA\u5168\u90E8\u70BA\u201Cint\u201D\u985E\u578B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7528\u65BC\u986F\u793A\u65B9\u5411\u7684\u53EF\u7DE9\u885D\u5BB9\u5668\u554F\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u68C4\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E864.15\u53CA\u4E4B\u524D\u7248\u672C\u7684\u6240\u6709\u68C4\u7528\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86ST1232TouchController\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u68C4\u7528\u4E86ZoomAnimationImage::setDimension\u3002 \u4F7F\u7528setWidthHeight\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setXY\u548CDrawable::setPosition\u4E0D\u518D\u662F\u865B\u64EC\u51FD\u6578\u3002 \u53EA\u6709setX\u3001setY\u3001setWidth\u548CsetHeight\u662F\u865B\u64EC\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5177\u6709int16_t&\u53C3\u6578\u7684AbstractProgressIndicator::getRange\u65B9\u6CD5\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4150"
  }), `\u7248\u672C4.15.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2020\u5E7410\u67085\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5C0F\u90E8\u4EF6\uFF1A\u52D5\u614B\u5716\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `M0\u5E73\u81FA\u73FE\u5728\u9ED8\u8A8D\u7981\u7528\u6240\u6709\u7D0B\u7406\u6620\u5C04\u5668\u7279\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u6ED1\u52D5-\u8F49\u63DB\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5168\u9762\u4FEE\u6B63\u4E86\u201C\u6DFB\u52A0\u5C0F\u90E8\u4EF6\u201D\u529F\u80FD\u8868\uFF08\u73FE\u5728\u53EF\u901A\u904E\u9EDE\u64CA\u756B\u5E03\u90E8\u4EF6\u6B04\u5DE6\u4E0A\u89D2\u7684\u6309\u9215\u6216\u6309\u4E0B\u9375\u76E4\u4E0A\u7684\u201CA\u201D\u9375\u627E\u5230\u5B83\uFF09\uFF1A\u589E\u52A0\u4E86\u641C\u7D22\u529F\u80FD\u4E14\u53EF\u8ABF\u6574\u5C3A\u5BF8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u9EDE\u64CA\u5E95\u90E8\u72C0\u614B\u5217\u7684\u4EFB\u4F55\u4F4D\u7F6E\u5747\u53EF\u986F\u793A\u65E5\u8A8C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7576\u767C\u751F\u932F\u8AA4\u6642\uFF0C\u72C0\u614B\u5217\u8B8A\u70BA\u7D05\u8272\uFF0C\u6210\u529F\u5247\u70BA\u7DA0\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u7E2E\u653E\u529F\u80FD\u79FB\u5230\u4E86\u5DE5\u5177\u5217\u53F3\u4E0A\u89D2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u4F7F\u756B\u5E03\u5728\u8996\u53E3\u4E2D\u5C45\u4E2D\u7684\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u9375\u76E4\u5FEB\u901F\u9375\uFF1A\u653E\u5927\uFF08Ctrl + \u2018+\u2019\uFF09\u3001\u7E2E\u5C0F\uFF08Ctrl + \u2018-\u2019\uFF09\u548C\u91CD\u7F6E\u7E2E\u653E\u6BD4\u4F8B\uFF08Ctrl + 0\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\u53EF\u4EE5\u9396\u5B9A\u5C0F\u90E8\u4EF6\u4F4D\u7F6E\uFF0C\u6B64\u64CD\u4F5C\u9084\u5C07\u7981\u7528\u756B\u5E03\u9078\u4E2D\uFF08\u5C0D\u65BC\u80CC\u666F\u5716\u50CF\u548C\u65B9\u584A\u5341\u5206\u6709\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u7372\u5F97\u66F4\u597D\u7684\u9AD4\u9A57\uFF0C\u5728\u7A7A\u756B\u5E03\u4E0A\u63D2\u5165\u5C0F\u90E8\u4EF6\u6642\uFF0C\u7E3D\u662F\u5728\u57FA\u672C\u8996\u5716\u4E2D\u751F\u6210\u9ED1\u8272\u65B9\u584A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C0D\u8A31\u591A\u5DE5\u5177\u63D0\u793A\u9032\u884C\u4E86\u5168\u9762\u7684\u76EE\u8996\u6AA2\u67E5\uFF0C\u4E26\u986F\u793A\u9375\u76E4\u5FEB\u901F\u9375\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\u53EF\u4EE5\u9078\u64C7\u662F\u4EE5\u6620\u5C04\u9084\u662F\u672A\u6620\u5C04\u683C\u5F0F\u8F38\u51FA\u5B57\u9AD4\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u5C0E\u5165\u5305\u542B\u76F8\u540C\u5B57\u9AD4\u3001\u9EDE\u9663\u5716\u7684\u5C08\u6848\u6642\uFF0CTouchGFX Designer\u6709\u6642\u6703\u5D29\u6F70\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FrontendHeapBase.hpp\u4E2D\u751F\u6210\u7684\u7A0B\u5F0F\u78BC\u6703\u5305\u542B\u76F8\u540C\u8F49\u63DB\u6A19\u982D\u6A94\u7684\u591A\u500B\u526F\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u4EE5\u5C07\u5C0F\u90E8\u4EF6\u62D6\u653E\u5230\u6A39\u72C0\u6AA2\u8996\u4E2D\u7684\u6EFE\u52D5\u5217\u8868\u6216\u6EFE\u8F2A\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EE5\u5F80\u5728\u6DFB\u52A0\u5C0F\u90E8\u4EF6\u6642\uFF0C\u4EA4\u4E92\u7684\u201C\u9078\u64C7\u6309\u9215\u9375\u201D\u6703\u88AB\u6E05\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u6642\u9078\u64C7\u4E86\u932F\u8AA4\u7684\u9810\u8A2D\u5957\u88DD\u8EDF\u9AD4\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5373\u4F7F\u5957\u88DD\u8EDF\u9AD4\u5DF2\u5B58\u5728\u65BC\u78C1\u7247\u4E0A\uFF0C\u4ECD\u7136\u9032\u884C\u4E0B\u8F09\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5B57\u9AD4\u683C\u5F0F\u5141\u8A31\u5C07\u5927\u591A\u6578\u5B57\u9AD4\u8CC7\u6599\u5B58\u5132\u5728\u672A\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u90E8\u5206\u5E40\u7DE9\u885D\u584A\u50B3\u8F38\u6F14\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BAOSWrapper\u589E\u52A0\u4E86\u65B0\u7684\u539F\u578B\uFF1AisVSyncAvailable()\u548CsignalRenderingDone()\uFF0C\u4EE5\u4FBF\u5728\u4E0D\u80FD\u5728waitForVSync\u4E2D\u95DC\u9589\u7684\u5E73\u81FA\u4E0A\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86touchgfx::SingleBlockAllocator\uFF0C\u6539\u7528touchgfx::ManyBlockAllocator`, `<`, `block_size, 1, bytes_per_pixel`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL\u4E0A\u7684\u65B0\u65B9\u6CD5enableDMAAcceleration()\u53EF\u7981\u7528\u786C\u9AD4\u52A0\u901F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86TextureMapper::invalidateBoundingRects()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4F7F\u7528\u5DF2\u66F4\u65B0\u7684nlohmann-json 3.9.1\u3002 \u751F\u6210\u7684\u5716\u50CF\u770B\u8D77\u4F86\u4E00\u6A23\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6A21\u64EC\u5668\u4E2D\u589E\u52A0\u4E86\u55AE\u6B65\u57F7\u884C\u3002 \u6309\u4E0BF9\u9375\u5C07\u958B\u59CB/\u505C\u6B62\u57F7\u884C\u3002 \u6309\u4E0BF10\u9375\u5C07\u57F7\u884C\u4E00\u500Btick\u3002 \u9084\u53EF\u4EE5\u4F7F\u7528HALSDL2::setSingleStepping()\u3001HALSDL2::isSingleStepping()\u548CHALSDL2::singleStep()\u9032\u884C\u63A7\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u7684Graph\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86WipeTransition\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E9E\u7F8E\u5C3C\u4E9E\uFF08\u548C\u4E00\u4E9B\u897F\u745E\u723E\u8A9E\uFF09\u6587\u5B57\u662F\u5F9E\u53F3\u5411\u5DE6\u66F8\u5BEB\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6ED1\u52D5\u5F8C\u5FEB\u901F\u89F8\u6478\u4E26\u91CB\u653E\u53EF\u80FD\u5C0E\u81F4\u4E0D\u5FC5\u8981\u7684GestureEvent\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u6703\u6B63\u78BA\u6E32\u67D3\u53EA\u9700\u8981\u90E8\u5206\u91CD\u7E6A\u7684\u6975\u5927\u5B57\u5F62\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u984D\u5916\u7684\u6B65\u9A5F\u3002 \u8ACB\u53C3\u95B1\u6587\u7AE0\u201C\u5DF2\u77E5\u554F\u984C\u201D\u77AD\u89E3\u8A73\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4140"
  }), `\u7248\u672C4.14.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2020\u5E747\u67082\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u6240\u6709\u9023\u7D50\uFF0C\u4EE5\u4FBF\u5B9A\u5411\u5230\u65B0\u7684\u6587\u6A94\u7DB2\u7AD9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DSlideMenu\u5C0F\u90E8\u4EF6\u7684\u652F\u6301\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u9632\u6B62\u6F5B\u5728\u932F\u8AA4\uFF0C\u5728app\u4E4B\u524D\u5BA3\u544A\u4E86FrontendHeap.hpp\u6A21\u578B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86UI\u7BC4\u4F8B\u9078\u64C7\u5668\u672A\u6B63\u78BA\u6BD4\u8F03\u53EF\u7528\u8272\u6DF1\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8F09\u5165\u524D\u4E0D\u6AA2\u67E5.touchgfx.part\u6587\u4EF6\u7248\u672C\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u70BA\u5716\u50CF\uFF08\u652F\u63F4L8\u5716\u50CF\u548C\u6240\u67098\u4F4D\u5143LCD\uFF09\u9078\u64C7\u7279\u5B9A\u683C\u5F0F\u6642\u6240\u542B\u7E6A\u5716\u5668\u7A0B\u5F0F\u78BC\u751F\u6210\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u65B0\u5EFA\u61C9\u7528\u6642\u78BA\u8A8D\u61C9\u7528\u540D\u7A31\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u901A\u904E\u6A39\u72C0\u6AA2\u8996\u5728\u5BB9\u5668\u985E\u578B\u5C0F\u5DE5\u5177\u5167\u90E8\u62D6\u52D5\u5B83\u5011\u6642\u767C\u751F\u7684\u932F\u8AA4\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::lockDMAToPorch\u9810\u8A2D\u503C\u8A2D\u7F6E\u70BAfalse\u800C\u4E0D\u662Ftrue\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Font::getDataFormatA4()\u73FE\u5728\u540D\u70BAFont::getByteAlignRow()\uFF0C\u53EF\u4EE5\u70BA2bpp\u5B57\u9AD4\u30011bpp\u5B57\u9AD4\u548C4bpp\u5B57\u9AD4\u8A2D\u7F6E\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4FDD\u6301\u4E00\u81F4\uFF0CGestureType\u73FE\u5728\u540D\u70BAGestureEventType\u3002 GestureType\u5DF2\u88AB\u68C4\u7528\uFF0C\u5F88\u5FEB\u6703\u88AB\u522A\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Version.hpp\uFF0C\u5177\u6709\u91DD\u5C0DTouchGFX\u7576\u524D\u7248\u672C\u7684\u5B8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u652F\u63F4\u4EE5\u6578\u5B57\u958B\u982D\u7684\u5F71\u50CF\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u8F38\u51FA\u5E36\u6709\u9996\u78BC\u201Cimage_\u201D\u7684.cpp\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86ImageConvert\u5167\u7F6E\u5E6B\u52A9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u53EF\u4EE5\u7DE8\u5BEBapplication.config\u7BC4\u672C\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Unicode::strncmp_ignore_whitespace\uFF0C\u5C07\u5FFD\u7565\u7A7A\u767D\u5B57\u5143\u800C\u4E0D\u50C5\u50C5\u662F\u7A7A\u683C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FontConvert\u4F7F\u7528\u5DF2\u66F4\u65B0\u7684freetype 2.10.2\u3002 \u9019\u6703\u4F7F\u5B57\u5143\u66F4\u6574\u9F4A\u7F8E\u89C0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4F7F\u7528\u5DF2\u66F4\u65B0\u7684libpng 1.6.37\u3002 \u751F\u6210\u7684\u5716\u50CF\u770B\u8D77\u4F86\u4E00\u6A23\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BAScrollableContainer\u589E\u52A0\u4E86setDurationSpeedup\u3001getDurationSpeedup\u3001setDurationSlowdown\u548CgetDurationSlowdown\u3002 \u9019\u4FBF\u65BC\u66F4\u597D\u5730\u63A7\u5236\u8981\u5C0D\u6ED1\u52D5\u624B\u52E2\u4F7F\u7528\u7684\u52D5\u756B\u6B65\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Extended SlideMenu\u5C0F\u5DE5\u5177\u53EF\u80FD\u4E0D\u9700\u8981\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u50CF\u6578\u4F4D\u4E00\u6A23\u4F7F\u7528colortype\u8B8A\u6578\u6703\u81EA\u52D5\u5C07\u5176\u8F49\u63DB\u70BAuint32_t\u800C\u4E0D\u662Fuint16_t\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728Keil\u5C08\u6848\u4E2D\u589E\u52A0\u4E86ARMCLANG-6.x\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301Cortex-M33\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BoxWithBorder\u4E0D\u6703\u5728\u69CB\u9020\u51FD\u6578\u4E2D\u8A2D\u7F6EborderColor\u548CborderSize\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::snprintf()\u4E2D\u7684\u5E7E\u8655\u4FEE\u6B63\uFF1A\u522A\u9664\u4E86\u683C\u5F0F\u5B57\u4E32\u768464\u5B57\u5143\u9650\u5236\u3002 \u4E0D\u8981\u5C0D%o\u3001%x\u548C%X\u5F37\u5236\u4F7F\u7528\u7B26\u865F\u5B57\u5143\u3002 %05c\u7121\u9996\u78BC\u96F6\u3002 \u4EE50\u70BA\u503C\u4FEE\u6B63\u4E86%c\u7684\u8655\u7406\u3002 \u6B63\u78BA\u8655\u7406\u4E86%s (%+s, %0s) \u7684\u7B26\u865F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u4FEE\u6539\u4E86\u5927\u5C0F\uFF0CScrollListWithCenterSelect\u53EF\u80FD\u767C\u751F\u6545\u969C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u6355\u6349\u6280\u8853\u7684ScrollList\u4E0D\u5831\u544A\u6B63\u78BA\u7684\u9EDE\u64CA\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7121\u6355\u6349\u6280\u8853\u7684\u975E\u8FF4\u5708ScrollList\u53EF\u80FD\u5831\u544A\u932F\u8AA4\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollList\u5728\u689D\u76EE\u88AB\u9EDE\u64CA\u6642\u4E0D\u5F71\u97FF\u586B\u5145\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528setColor(color,alpha)\u7684CWR Painter\u73FE\u5728\u53EA\u63A5\u53D7\u8272\u5F69\u3002 \u4F7F\u7528setAlpha(alpha) \u8A2D\u7F6Ealpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7DE9\u5B58\u7684\u9EDE\u9663\u5716\u672A\u8207\u975E\u5076\u6578\u5F35\u52D5\u614B\u9EDE\u9663\u571632\u4F4D\u5143\u5C0D\u9F4A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LED.hpp\u4E0D\u518D\u5305\u542Blpc_types.h\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u68C4\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u68C4\u7528\u51FD\u6578\u73FE\u5DF2\u6A19\u8A18\u70BA\u68C4\u7528\uFF0C\u56E0\u6B64\u7DE8\u8B6F\u5668\u53EF\u4EE5\u767C\u4F48\u95DC\u65BC\u9019\u4E9B\u51FD\u6578\u7684\u8B66\u544A\u3002 \u68C4\u7528\u51FD\u6578\u5C07\u4F86\u6703\u88AB\u522A\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86Unicode::EMPTY\u7684\u5B9A\u7FA9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PI\u7684\u5B9A\u7FA9\u5DF2\u5F9EMath3D.hpp\u79FB\u5230\u4E86Types.hpp\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EasingEquation.hpp\u4E2D\u5B9A\u7FA9\u7684\u201Cpi\u201D\u5DF2\u88ABPI\u53D6\u4EE3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4E0D\u518D\u652F\u6301-f\u3001-o\u548C-header\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86Image::hasTransparentPixels\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u984D\u5916\u7684\u6B65\u9A5F\u3002 \u8ACB\u53C3\u95B1\u6587\u7AE0\u201C\u5DF2\u77E5\u554F\u984C\u201D\u77AD\u89E3\u8A73\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4134"
  }), `\u7248\u672C4.13.4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2020\u5E747\u670827\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E9E\u7F8E\u5C3C\u4E9E\uFF08\u548C\u4E00\u4E9B\u897F\u745E\u723E\u8A9E\uFF09\u6587\u5B57\u662F\u5F9E\u53F3\u5411\u5DE6\u66F8\u5BEB\u7684\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4133"
  }), `\u7248\u672C4.13.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2020\u5E745\u670829\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u9032\u4E86\u963F\u62C9\u4F2F\u8A9E\u3001\u5370\u5730\u8A9E\u3001\u6CF0\u570B\u8A9E\u548C\u5176\u4ED6\u8907\u96DC\u8A9E\u8A00\u7684\u6587\u5B57\u6E32\u67D3\u6027\u80FD\u3002 \u6E32\u67D3\u6642\u9593\u6E1B\u5C11\u4E8620%-33%\uFF0C\u5177\u9AD4\u53D6\u6C7A\u65BC\u8A9E\u8A00\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollList\u548CScrollWheel\u5728\u7F55\u898B\u60C5\u6CC1\u4E0B\u6703\u671D\u932F\u8AA4\u65B9\u5411\u6EFE\u52D5\uFF0C\u6216\u8005\u6EFE\u52D5\u592A\u591A\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4132"
  }), `\u7248\u672C4.13.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2020\u5E744\u670828\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u9023\u63A5\u5230Hamza\u6642\u7684\u963F\u62C9\u4F2F\u9023\u5B57\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u9762\u5411Lam + Alef\u7684\u963F\u62C9\u4F2F\u9023\u5B57\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u963F\u62C9\u4F2F\u53E3\u97F3\u7684\u4F4D\u7F6E\u554F\u984C\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4131"
  }), `\u7248\u672C4.13.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2020\u5E743\u67084\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u80FD\u5920\u5728LCD24\u4E0A\u7E6A\u88FDRGB565\u52D5\u614B\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u9032\u4E86\u4E00\u4E9B\u963F\u62C9\u4F2F\u5B57\u5143\u5E8F\u5217\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B57\u9AD4\u8F49\u63DB\u5668\u6709\u6642\u6703\u5305\u542B\u592A\u591A\u4F86\u81EA\u5B57\u9AD4\u7684\u5B57\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u5FA9\u4E86Unicode U+200B\u7684\u554F\u984C\uFF08\u96F6\u5BEC\u5EA6\u7A7A\u767D\u5B57\u5143\uFF09\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4130"
  }), `\u7248\u672C4.13.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2019\u5E7412\u670812\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u201C.touchgfx.part\u201D\u6587\u4EF6\u3002 \u9019\u4E9B\u53EF\u7528\u65BC\u5C08\u6848\u7684\u5916\u90E8\u8F38\u5165\uFF08\u5982CubeMX\u96C6\u6210\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C0E\u822A\u5230\u201C\u914D\u7F6E\u201D\u9078\u9805\u5361\u4E0A\u7684\u985E\u5225\u201C\u6846\u67B6\u7279\u6027\u201D\uFF0C\u70BATextureMapper\u9078\u64C7\u652F\u63F4\u7684\u5716\u50CF\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\u53EF\u4EE5\u5728TouchGFX Designer\u5167\u90E8\u91CD\u5BEB\u751F\u6210\u8CC7\u6E90\u3001\u751F\u6210\u5F8C\u3001\u7DE8\u8B6F\u6A21\u64EC\u5668\u3001\u904B\u884C\u6A21\u64EC\u5668\u3001\u7DE8\u8B6F\u76EE\u6A19\u548C\u5237\u5BEB\u76EE\u6A19\u6307\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u756B\u5E03\u4E0A\u7684\u7E2E\u653E/\u6EFE\u52D5\u6548\u679C\uFF0C\u652F\u63F4\u5728\u5C07\u5C0F\u5DE5\u5177\u62D6\u52D5\u5230\u756B\u5E03\u908A\u7DE3\u6642\u81EA\u52D5\u6EFE\u52D5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u7576\u524D\u7A0B\u5F0F\u78BC\u662F\u6700\u65B0\u7684\uFF0C\u986F\u793A\u201C\u751F\u6210\u7A0B\u5F0F\u78BC\u201D\u6309\u9215\uFF0C\u5982\u679C\u904E\u671F\uFF0C\u5247\u986F\u793A\u85CD\u9EDE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\u53EF\u4EE5\u7528\u5FEB\u901F\u9375Alt + F\u3001Alt + E\u548CAlt + H\u5206\u5225\u6253\u958B\u201C\u6A94\u201D\u3001\u201C\u7DE8\u8F2F\u201D\u548C\u201C\u8AAC\u660E\u201D\u529F\u80FD\u8868\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u201C\u8AAC\u660E\u201D\u529F\u80FD\u8868\u5305\u542B\u6307\u5411TouchGFX\u8AAC\u660E\u4E2D\u5FC3\u7684\u5B9A\u5411\u9023\u7D50\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u904E\u201C\u914D\u7F6E\u201D\u9078\u9805\u5361\u4FEE\u6539\u6587\u5B57\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A73\u7D30\u65E5\u8A8C\u53EF\u4EE5\u5728TouchGFX Designer\u5167\u90E8\u6D6E\u52D5\u6216\u505C\u9760\uFF0C\u4E26\u4E14\u53EF\u4F7F\u7528\u5FEB\u901F\u9375Alt + L\u6253\u958B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u7248\u672C\u986F\u793A\u5728\u8996\u7A97\u7684\u6A19\u984C\u5217\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u201C\u6700\u8FD1\u4F7F\u7528\u7684\u5C08\u6848\u201D\u6E05\u55AE\u986F\u793A\u5C08\u6848\u7684\u5B8C\u6574\u8DEF\u5F91\uFF0C\u800C\u4E0D\u53EA\u662F\u5C08\u6848\u540D\u7A31\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u5728\u756B\u5E03\u4E0A\u79FB\u52D5\u5C0F\u90E8\u4EF6\u6642\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u5728\u6E32\u67D3\u5716\u50CF\u7BA1\u7406\u5668\u4E2D\u7684\u884C\u6642\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u5728\u91CD\u65B0\u6392\u5217\u5C0F\u90E8\u4EF6\u6A39\u4E2D\u7684\u5C08\u6848\u6642\u7684\u6027\u80FD\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5EF6\u9072\u548C\u6309\u9215\u56DE\u6A94\u4EA4\u4E92\u53EF\u80FD\u5C0E\u81F4\u751F\u6210\u932F\u8AA4\u7A0B\u5F0F\u78BC\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528TouchGFX CLI\u751F\u6210\u5C08\u6848\u672A\u6B63\u78BA\u5305\u542B\u4F7F\u7528\u7684TouchGFX\u8CC7\u7522\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6709\u6642\u5019\u4E0D\u6703\u6B63\u78BA\u5730\u66F4\u65B0\u87A2\u5E55\u7684\u756B\u5E03\u7DE9\u885D\u5340\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u91CD\u65B0\u5617\u8A66\u4E0B\u8F09\u6642\u555F\u52D5\u4ECB\u9762\u4E0A\u986F\u793A\u7684\u932F\u8AA4\u8CC7\u8A0A\u4E0D\u6703\u6D88\u5931\u7684\u8996\u89BA\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u672A\u6B63\u78BA\u78BA\u8A8D\u547C\u53EB\u865B\u64EC\u51FD\u6578\u4EA4\u4E92\u7684\u51FD\u6578\u540D\u7A31\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86TouchGFX Designer\u756B\u5E03\u4E0A\u6709\u6642\u672A\u6B63\u78BA\u6E32\u67D3\u9032\u5EA6\u6307\u793A\u689D\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u65B0\u5EFA\u5C08\u6848\u4F46\u4E0D\u4FDD\u5B58\u6703\u5C0E\u81F4\u5728\u91CD\u8F09\u5C08\u6848\u6642\u9810\u8A2D\u5B57\u9AD4\u6392\u5370\u6D88\u5931\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6587\u5B57\u7BA1\u7406\u5668\u770B\u8D77\u4F86\u6301\u7E8C\u805A\u7126\u65BC\u932F\u8AA4\u5132\u5B58\u683C\u7684\u8996\u89BA\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C0F\u5DE5\u5177\u7684\u201C\u5C6C\u6027\u201D\u9078\u9805\u5361\u6703\u932F\u8AA4\u5730\u986F\u793A\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u751F\u6210\u6309\u9215\u9EDE\u64CA\u8655\u7406\u51FD\u6578\u6709\u6642\u6703\u7522\u751F\u7A7A\u7684if/else\u8A9E\u53E5\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u555F\u52D5\u8996\u7A97\u4E2D\u7684\u641C\u7D22\u6B04\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u8907\u88FD\u5F62\u72C0\u5C0F\u5DE5\u5177\u4E26\u7DE8\u8F2F\u5176\u4E2D\u4E00\u500B\u4E2D\u7684\u4E00\u9EDE\u6703\u5C0E\u81F4\u5169\u8005\u90FD\u767C\u751F\u8B8A\u5316\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5F9E\u5B57\u9AD4\u6392\u5370\u9078\u64C7\u5668\u66F4\u6539\u5B57\u9AD4\u6642\u4F7F\u7528\u6ED1\u9F20\u6EFE\u8F2A\u6EFE\u52D5\u9078\u9805\u6703\u5C0E\u81F4\u5FEB\u986F\u8996\u7A97\u95DC\u9589\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8F09\u5165\u5305\u542B\u8DF3\u8F49\u87A2\u5E55\u64CD\u4F5C\u7684\u5C08\u6848\u6642\u4E0D\u6703\u6B63\u78BA\u8F09\u5165\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C0F\u5DE5\u5177\u6A39\u72C0\u6AA2\u8996\u4E2D\u5C55\u958B/\u6298\u758A\u7BC0\u9EDE\u6703\u5C0E\u81F4\u8A72\u7BC0\u9EDE\u88AB\u9078\u4E2D\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C07UI\u5C0E\u5165\u61C9\u7528\u6642\u932F\u8AA4\u5730\u5C0E\u5165\u4E00\u4E9B\u503C\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5716\u50CF\u9078\u64C7\u5668\u4E2D\u6D41\u89BD\u8CC7\u6599\u593E\u6642\u767C\u751F\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6ED1\u52D5\u5BB9\u5668\u4E2D\u7684\u9801\u9762\u9806\u5E8F\u986F\u793A\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86TouchGFX Designer\u756B\u5E03\u4E0A\u7D0B\u7406\u6620\u5C04\u5668\u6E32\u67D3\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5DF2\u522A\u9664\u4EA4\u4E92\u6E90\u78BA\u8A8D\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u91CD\u547D\u540Dassets/images\u4E0B\u6709\u5B50\u8CC7\u6599\u593E\u7684\u8CC7\u6599\u593E\u53EF\u80FD\u5C0E\u81F4TouchGFX Designer\u5D29\u6F70\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86RadioButtons\u4E0A\u7684\u4EA4\u4E92\u751F\u6210\u91CD\u8907\u7A0B\u5F0F\u78BC\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C07\u540C\u4E00\u5716\u50CF\u5F9E\u6A94\u6D41\u89BD\u5668\u62D6\u653E\u5230TouchGFX Designer\u5169\u6B21\u6703\u5C0E\u81F4\u932F\u8AA4\u884C\u70BA\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u9078\u9805\u6309\u9215\u4EA4\u4E92\u6709\u6642\u6703\u5C0E\u81F4\u751F\u6210\u91CD\u8907\u7A0B\u5F0F\u78BC\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u91CD\u5BEB\u756B\u5E03\u7DE9\u885D\u5340\u53EF\u80FD\u5C0E\u81F4\u6240\u751F\u6210\u7A0B\u5F0F\u78BC\u7684\u65B0\u884C\u7F3A\u5931\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u4F7F\u7528\u571F\u8033\u5176\u8A9E\u5340\u57DF\u683C\u5F0F\u6642TouchGFX Designer\u6703\u751F\u6210\u932F\u8AA4\u7A0B\u5F0F\u78BC\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5BA2\u88FD\u64CD\u4F5C/\u89F8\u767C\u689D\u4EF6\u6587\u5B57\u65B9\u584A\u4E2D\u6709\u9577\u6587\u5B57\u6703\u5C0E\u81F4UI\u4E2D\u767C\u751F\u4E0D\u5FC5\u8981\u79FB\u4F4D\u5143\u7684\u8996\u89BA\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u522A\u9664\u61C9\u7528\u4E2D\u6700\u5F8C\u4E00\u500B\u5BA2\u88FD\u5BB9\u5668\u5F8C\u7684\u4E00\u7CFB\u5217\u6B65\u9A5F\u6703\u5C0E\u81F4TouchGFX Designer\u5D29\u6F70\u7684\u6545\u969C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C07\u5BA2\u88FD\u5BB9\u5668\u5BE6\u4F8B\u5F9E\u87A2\u5E55\u8907\u88FD\u5230\u5BA2\u88FD\u5BB9\u5668\u5B9A\u7FA9\u7684\u64CD\u4F5C\u7121\u6548\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5339\u914DUI\u7BC4\u672C\u7BE9\u9078\u5668\u4E0D\u6309\u9810\u671F\u5DE5\u4F5C\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CTouchGFX Designer\u652F\u63F4\u5305\u542B\u53E5\u9EDE\u7684\u61C9\u7528\u540D\u7A31\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C07\u5E36\u6A23\u5F0F\u7684\u6ED1\u584A\u5F9E\u6C34\u6E96\u4FEE\u6539\u70BA\u5782\u76F4\u6703\u5C0E\u81F4\u6A23\u5F0F\u8A2D\u7F6E\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u66F4\u6539\u5B57\u9AD4\u6392\u5370\u7684\u5B57\u9AD4\u6703\u5C0E\u81F4UI\u4E2D\u67D0\u4E9B\u4F4D\u7F6E\u4E0D\u986F\u793A\u6B63\u78BA\u5B57\u9AD4\u540D\u7A31\u7684\u554F\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u6027\u80FD\u6539\u5584\u3002 \u6E32\u67D3\u6642\u9593\u7E2E\u77ED-10%\u81F3-60%\u4E0D\u7B49\uFF0C\u5177\u9AD4\u53D6\u6C7A\u65BC\u5716\u50CF\u683C\u5F0F\u3001\u6E32\u67D3\u6F14\u7B97\u6CD5\u3001\u786C\u9AD4\u8A2D\u7F6E\u548C\u5716\u50CF\u4F48\u5C40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7D0B\u7406\u6620\u5C04\u5668\u9ED8\u8A8D\u7981\u7528\uFF0C\u5FC5\u9808\u5728\u4F7F\u7528\u524D\u555F\u7528\u3002 \u9EDE\u64CA\u6B64\u9023\u7D50\u95B1\u8B80\u95DC\u65BC\u6B64\u7279\u6027\u7684\u66F4\u591A\u5167\u5BB9\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#texturemapper-is-disabled-by-default"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#texturemapper-is-disabled-by-default`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6240\u6709LCD\u985E\u578B\u4E2D\u589E\u52A0\u4E86\u7C21\u55AE\u7684\u5B57\u4E32\u5217\u5370\u7528\u65BC\u8ABF\u8A66\u3002 \u53C3\u898B\uFF1A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://touchgfx.zendesk.com/hc/en-us/articles/205074511"
  }), `https://touchgfx.zendesk.com/hc/en-us/articles/205074511`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B57\u9AD4\u7DE9\u5B58\u73FE\u5728\u652F\u63F4\u5728\u5370\u5730\u6587\u4E2D\u4F7F\u7528\u7684GSUB\u8868\u3002 \u53C3\u898B\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/development/ui-development/touchgfx-engine-features/font-cache/#caching-gsub-tables"
  }), `https://support.touchgfx.com/docs/development/ui-development/touchgfx-engine-features/font-cache/#caching-gsub-tables`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `arm gcc\u7DE8\u8B6F\u5668\u5DF2\u66F4\u65B0\u81F3\u7248\u672C7.3.1 2018q2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `gcc\u7DE8\u8B6F\u5668\u5DF2\u66F4\u65B0\u81F3\u7248\u672C7.3.0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7528\u6700\u65B0\u7248\u7684\u6A94\u5305\u66F4\u65B0\u4E86mingw\u74B0\u5883\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\uFF1A\u4FEE\u6B63/\u6539\u5584\u4E86\u96D9\u7DDA\u6027\u6A21\u5F0F\u4E0B\u7684\u908A\u7DE3\u6DF7\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\uFF1A\u6700\u8FD1\u9130\u6A21\u5F0F\u4E0B\u7684\u7D30\u5FAE\u5716\u50CF\u54C1\u8CEA\u6539\u5584\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u963F\u62C9\u4F2F\u8A9E\u6587\u5B57\u201C12:34\u201D\u4E4B\u524D\u5728RTL\u4E2D\u88AB\u6E32\u67D3\u70BA\u201C34:12\u201D\u7684\u6587\u5B57\u9806\u5E8F\u932F\u8AA4\u4FEE\u6B63\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u68C4\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86\u5DF2\u68C4\u7528\u7684TRANSPARENT_COL\u7684\u5B9A\u7FA9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86Drawable::getType()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86HAL::blitSetTransparencyKey()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86HAL::registerTextCache()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86HAL::cacheTextString()\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u984D\u5916\u7684\u6B65\u9A5F\u3002 \u8ACB\u53C3\u95B1\u6587\u7AE0\u201C\u5DF2\u77E5\u554F\u984C\u201D\u77AD\u89E3\u8A73\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4123"
  }), `\u7248\u672C4.12.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2019\u5E749\u670825\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7684TouchGFX\u6838\u5FC3\u7279\u6027\uFF08\u81EA## \u7248\u672C4.12.0 {#version-4120}\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E8C\u9032\u4F4D\u5B57\u9AD4\uFF1A\u4E8C\u9032\u4F4D\u5B57\u9AD4\u53EF\u7528\u4F5C\u5C07\u5B57\u9AD4\u8CC7\u8A0A\u7DE8\u8B6F\u4E26\u9023\u7D50\u5230\u61C9\u7528\u7684\u66FF\u4EE3\u65B9\u6848\u3002 \u6B64\u65B9\u6CD5\u7684\u4E3B\u8981\u512A\u52E2\u662F\u61C9\u7528\u7684\u4E8C\u9032\u4F4D\u8CC7\u6599\u91CF\u66F4\u5C11\uFF0C\u5728\u70BA\u8A2D\u5099\u63D0\u4F9B\u4E0D\u540C\u5B57\u9AD4\u96C6\u5408\u65B9\u9762\u5177\u6709\u9748\u6D3B\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B57\u9AD4\u7DE9\u5B58\uFF1A\u652F\u63F4\u4E8C\u9032\u4F4D\u5B57\u9AD4\u7DE9\u5B58\uFF0C\u9069\u5408\u5728\u986F\u793A\u5B57\u4E32\u6642\u53EA\u5F9E\u6A94\u6848\u7CFB\u7D71\u8F09\u5165\u9700\u8981\u7684\u5B57\u5143\u7684\u60C5\u6CC1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E8C\u9032\u4F4D\u7FFB\u8B6F\uFF1A\u652F\u63F4\u4E8C\u9032\u4F4D\u7FFB\u8B6F\uFF0C\u9069\u5408\u5F9E\u6A94\u6848\u7CFB\u7D71\u8F09\u5165\u7FFB\u8B6F\u6A94\u800C\u4E0D\u662F\u5C07\u5B83\u5011\u9023\u7D50\u5230\u61C9\u7528\u4E2D\u3002 \u9EDE\u64CA\u6B64\u9023\u7D50\u95B1\u8B80\u95DC\u65BC\u9019\u4E9B\u7279\u6027\u7684\u66F4\u591A\u5167\u5BB9\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://touchgfx.zendesk.com/hc/en-us/articles/360024979552"
  }), `https://touchgfx.zendesk.com/hc/en-us/articles/360024979552`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F416bpp\u986F\u793A\u5668\u7684\u975E\u8A18\u61B6\u9AD4\u6620\u5C04\u5FEB\u9583\u8A18\u61B6\u9AD4\uFF0C\u5141\u8A31\u5728\u8AF8\u5982\u5BE6\u60E0\u7684SPI\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E4B\u985E\u7684\u5FEB\u9583\u8A18\u61B6\u9AD4\u4E2D\u5B58\u5132\u5716\u50CF\u548C\u5B57\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Arabic ligatures Allah\u3001Akbar\u3001Mohammad\u3001Salam\u3001Rasoul\u3001Alayhe\u3001Wasallam\u548CRial Sign\u7684\u7D71\u4E00\u78BC\u5E8F\u5217\u8B58\u5225\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\uFF08\u96D9\u7DDA\u6027\uFF09\u7121\u6CD5\u572824bpp\u986F\u793A\u5668\u4E0A\u6B63\u78BA\u5730\u7E6A\u88FDL8_RGB888\u548CRGB888\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u4E0D\u652F\u63F4\u842C\u7528\u5B57\u5143\u7684TextArea\u4E2D\u4EE5RTL\u6A21\u5F0F\u8A2D\u7F6E\u542B\u842C\u7528\u5B57\u5143\u7684\u6587\u5B57\u53EF\u80FD\u5C0E\u81F4\u6545\u969C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679CCacheableContainer\u5C0F\u65BC\u76F8\u95DC\u9EDE\u9663\u5716\uFF0C\u5BB9\u5668\u7684\u5927\u5C0F\u5C07\u4E0D\u6B63\u78BA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E868bpp LCD\u4E0A\u7684SnapshotWidget\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E00\u4E9B\u963F\u62C9\u4F2F\u6587\u9023\u5B57\u7684\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E00\u4E9B\u5370\u5730\u6587\u9023\u5B57\u7684\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u61C9\u7528\u7279\u5B9AGSUB\u7F6E\u63DB\u898F\u5247\u6642\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E8C\u9032\u4F4D\u5B57\u9AD4\u5305\u542B\u984D\u5916\u898F\u5247\u7684\u554F\u984C\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4122"
  }), `\u7248\u672C4.12.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2019\u5E748\u670822\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u4F7F\u7528TextArea::setWideTextAction()\u7684WordWrapping\u5BEC\u6587\u5B57\u5728\u666E\u901A\u7A7A\u767D\u5B57\u5143\u548C\u7D71\u4E00\u78BC\u5B57\u51430x200B\uFF08\u96F6\u5BEC\u5EA6\u7A7A\u767D\u5B57\u5143\uFF09\u8655\u63DB\u884C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E8C\u9032\u4F4D\u5B57\u9AD4\uFF1A\u7576\u61C9\u7528\u914D\u7F6E\u4E2D\u6307\u5B9A\u4E86\u201Cbinary_fonts\u201D\u9078\u9805\u6642\uFF0CfontConverter\u5DE5\u5177\u672A\u5C07\u5B57\u8DDD\u8ABF\u6574\u8CC7\u6599\u5BEB\u5165\u4E8C\u9032\u4F4D\u5B57\u9AD4\u6A94\u3002 \u9019\u5C0E\u81F4\u4E86\u4F7F\u7528\u4E8C\u9032\u4F4D\u5B57\u9AD4\u6642\u7684\u6587\u5B57\u986F\u793A\u932F\u8AA4\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4121"
  }), `\u7248\u672C4.12.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2019\u5E748\u670815\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u4E86\u201CThird Party Components.pdf\u201D\u4EE5\u53CD\u6620\u66F4\u65B0\u7684\u7D44\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5EF6\u9072\u64CD\u4F5C\u548C\u6309\u9215\u9EDE\u64CA\u64CD\u4F5C\u540C\u6642\u767C\u751F\u6703\u5C0E\u81F4\u7DE8\u8B6F\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C07\u756B\u5E03\u5C0F\u5DE5\u5177\u6DFB\u52A0\u5230\u5BA2\u88FD\u5BB9\u5668\u5BE6\u4F8B\u6642\u87A2\u5E55\u7684\u756B\u5E03\u7DE9\u885D\u5340\u672A\u6B63\u78BA\u66F4\u65B0\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u201C\u7DDA\u4E0A\u61C9\u7528\u201D\u8996\u7A97\u4E2D\u7684\u932F\u8AA4\u8CC7\u8A0A\u6703\u767C\u751F\u5361\u6EEF\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528\u4E0D\u540C\u9032\u5EA6\u6307\u793A\u689D\u7684Alpha\u503C\u6642TouchGFX Designer\u4E2D\u756B\u5E03\u4E0A\u7684\u6E32\u67D3\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u65B0\u5EFA\u5C08\u6848\u3001\u4E0D\u4FDD\u5B58\u5373\u95DC\u9589TouchGFX Designer\u4EE5\u53CA\u91CD\u8F09\u5C08\u6848\u6703\u5C0E\u81F4\u5C08\u6848\u7121\u53EF\u7528\u5B57\u9AD4\u6392\u5370\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u5728\u5617\u8A66\u5C07\u5DF2\u6253\u958B\u7684UI\u5C0E\u5165\u53E6\u4E00\u500B\u5C08\u6848\u6642\u751F\u6210\u7684\u932F\u8AA4\u8CC7\u8A0A\uFF0C\u4F7F\u4E4B\u66F4\u6E05\u6670\u6613\u61C2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u7279\u5B9A\u74B0\u5883\u4E0B\u6587\u5B57\u7BA1\u7406\u5668\u770B\u8D77\u4F86\u53EF\u80FD\u6709\u591A\u500B\u4E2D\u5FC3\u9EDE\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7576\u5C0F\u5DE5\u5177\u4E0A\u51FA\u73FE\u932F\u8AA4\u6642\uFF0C\u5C0F\u5DE5\u5177\u7684\u201C\u5C6C\u6027\u201D\u9078\u9805\u5361\u4E0D\u6B63\u78BA\u986F\u793A\u7D05\u8272\u908A\u754C\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u91CD\u8F09\u4F7F\u7528Consolas\u5B57\u9AD4\u7684\u5C08\u6848\u5F8C\u4F7F\u7528\u8A72\u5B57\u9AD4\u6703\u5C0E\u81F4TouchGFX Designer\u7684\u756B\u5E03\u4E0A\u767C\u751F\u932F\u8AA4\u6E32\u67D3\u7684\u554F\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528\u986F\u793A\u5668\u65CB\u8F49\u6642\u7684TextureMapper\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5FFD\u7565CachedFont\u7684\u5B57\u8DDD\u8ABF\u6574\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CachedFont\u4E0D\u67E5\u770B\u5B57\u9AD4\u7DE9\u5B58\u7372\u53D6\u56DE\u6A94\u5B57\u5143\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4120"
  }), `\u7248\u672C4.12.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A06-07-2019`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u91CD\u8981\u5347\u7D1A\u8CC7\u8A0A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86drawGlyph\u7684\u516C\u5171\u7248\u672C\u3002 \u6539\u70BA\u4F7F\u7528drawString\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u5C0D\u4E0D\u900F\u660E\u5716\u50CF\u4F7F\u7528\u9EDE\u9663\u5716\u683C\u5F0FARGB8888\uFF0C\u5C07\u4E0D\u518D\u4F7F\u7528\u6296\u52D5\u6280\u8853\u8F49\u70BA565\uFF0C\u800C\u662F\u4FDD\u7559\u5B8C\u6574\u7684888\u8272\u5F69\u3002 \u5982\u679C\u5C0D\u900F\u660E\u5716\u50CF\u4F7F\u7528ARGB8888\uFF0C\u5247\u7576\u4E0D\u900F\u660E\u683C\u5F0F\u70BARGB565\u6642\uFF0C\u4ECD\u6703\u4F7F\u7528\u6296\u52D5\u6280\u8853\u8F49\u70BA565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679CBW_RLE\u683C\u5F0F\u5C0E\u81F4\u8F49\u63DB\u7684\u5716\u50CF\u8B8A\u5927\uFF0C\u8F49\u63DB\u70BABW_RLE\u7684\u5716\u50CF\u5C07\u4E0D\u518D\u6062\u5FA9\u70BABW\uFF0C \u800C\u662F\u7531\u5716\u50CF\u8F49\u63DB\u5668\u751F\u6210\u8B66\u544A\u3002 \u4F7F\u7528TouchGFX Designer\uFF08\u6216\u65B0\u7684\u8A2D\u5B9A\u6A94\uFF09\u70BA\u6BCF\u5F35\u5716\u50CF\u6307\u5B9ABW\u6216BW_RLE\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u5BA2\u88FD\u5BB9\u5668\u53EF\u4EE5\u5D4C\u5957\u5728\u53E6\u4E00\u500B\u5BA2\u88FD\u5BB9\u5668\u4E2D\u3002 \u56E0\u6B64\uFF0C\u80FD\u5920\u7121\u9650\u5730\u7528\u5BA2\u88FD\u7FA4\u7D44\u4EF6\u69CB\u6210\u66F4\u5927\u7684\u5BA2\u88FD\u7FA4\u7D44\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BA2\u88FD\u5BB9\u5668\u652F\u6301\u5BA2\u88FD\u89F8\u767C\u689D\u4EF6\u548C\u5BA2\u88FD\u64CD\u4F5C\u7684\u5B9A\u7FA9\uFF0C\u87A2\u5E55\u652F\u63F4\u5BA2\u88FD\u64CD\u4F5C\u7684\u5B9A\u7FA9\u3002 \u9019\u4E9B\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C\u652F\u63F4\u5F9E\u4E00\u500B\u5143\u4EF6\u5230\u53E6\u4E00\u500B\u5143\u4EF6\u7684\u8CC7\u8A0A\u6D41\u52D5\u3002 \u5728TouchGFX Designer\u5167\u90E8\u7684\u4EA4\u4E92\u4E2D\u4F7F\u7528\u6B64\u985E\u89F8\u767C\u689D\u4EF6\u548C\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u96E2\u958BTouchGFX Designer\u7684\u60C5\u6CC1\u4E0B\u5BE6\u73FE\u66F4\u771F\u5BE6\u7684\u61C9\u7528\u884C\u70BA\u3002 \u8ACB\u67E5\u770B\u6587\u6A94\u7372\u53D6\u66F4\u591A\u4ECB\u7D39\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\u53EF\u4EE5\u751F\u6210CacheableContainer\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u8A2D\u7F6E\u55AE\u5F35\u5716\u50CF\u7684\u914D\u7F6E\uFF08\u5716\u50CF\u683C\u5F0F\u3001\u6296\u52D5\u6F14\u7B97\u6CD5\u3001\u4F48\u5C40\u65CB\u8F49\u7B49\uFF09\uFF0C\u589E\u52A0\u4E86\u65B0\u7684\u201C\u5716\u50CF\u201D\u9078\u9805\u5361\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u61C9\u7528\u8A2D\u7F6E\u548C\u5176\u4ED6\u65B0\u7684\u8A2D\u7F6E\u5DF2\u9077\u79FB\u5230\u201C\u914D\u7F6E\u201D\u9078\u9805\u5361\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u6846\u67B6\u5DE5\u5177\u4F7F\u7528\u7684\u5354\u529B\u5EE0\u5546\u5EAB\u3002 \u9019\u4F7F\u5F97\u6587\u5B57\u66F4\u7F8E\u89C0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u904E\u66F4\u5927\u7684\u5B57\u8DDD\u8ABF\u6574\u8868\u6539\u5584\u4E86\u5B57\u8DDD\u8ABF\u6574\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u6CF0\u6587\u5B57\u9AD4\u7684\u6E32\u67D3\u6548\u679C\u66F4\u4F73\uFF08\u884C\u9593\u8DDD\u66F4\u5C0F\uFF09\uFF0CSara Am\u7684\u6E32\u67D3\u6548\u679C\u66F4\u4F73\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u521D\u6B65\u652F\u6301\u5370\u5730\u6587\uFF08\u5929\u57CE\u9AD4\uFF09\u3002 \u61C9\u7528\u4E86\u4E0B\u5217GSUB\u8868\uFF1Anukt (Nukta Forms)\u3001akhn (Akhands)\u3001rkrf (Rakar Forms)\u3001cjct (Conjunct Forms)\u3001vatu (Vattu Variants)\u3001rphf (Reph Forms)\u3001pref (Pre-Base Forms)\u3001half (Half Forms)\u3001blwf (Below-base Forms)\u3001abvf (Above-base Forms)\u3001pstf (Post-base Forms) \u548Ccfar (Conjunct Form After Ro)\u3002 \u76EE\u524D\u4E0D\u652F\u6301\u4E0B\u5217GSUB\u8868\uFF1Aabvs (Above-base Substitutions)\u3001blws (Below-base Substitutions) \u548Cpsts (Post-base Substitutions)\u3002 \u6B64\u5916\uFF0C\u4E26\u975E\u6240\u6709GSUB\u8868\u985E\u578B\u90FD\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u7684Line::updateLengthAndAngle() API\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u90E8\u5206\u5E40\u7DE9\u885D\u6E32\u67D3\u548C\u66F4\u65B0\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u7C21\u55AE\u7684\u5B57\u4E32\u5217\u5370\u7528\u65BC\u8ABF\u8A66\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5141\u8A31\u5728\u521D\u59CB\u5316\u5F8C\u4FEE\u6539BitmapCache\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5B8F\uFF0C\u7528\u65BC\u8A2D\u7F6E\u5FEB\u9583\u8A18\u61B6\u9AD4\u7A0B\u5F0F\u8A2D\u8A08\u7684\u5206\u5340\u540D\u7A31\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Circle::updateArc()\uFF0C\u4EE5\u4FBF\u7528\u6700\u5C0F\u7684\u7121\u6548\u5340\u57DF\u66F4\u65B0\u5713\u5F27\u8D77\u9EDE\u548C\u5713\u5F27\u7D42\u9EDE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86CircleProgress\uFF0C\u4EE5\u4FBF\u7528\u66F4\u7CBE\u5BC6\u7684\u8A08\u7B97\u9032\u884C\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86CacheableContainer\uFF0C\u7528\u65BC\u87A2\u5E55\u4E4B\u5916\u5C0F\u90E8\u4EF6\u7684\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u5177\u670916\u4F4D\u300124\u4F4D\u548C32\u4F4D\u8ABF\u8272\u677F\u7684L8\u5716\u5F62\u8CC7\u7522\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u901A\u904EDMA2D\u9032\u884CL8\u786C\u9AD4\u52A0\u901F\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u7684LCD32bpp\u5E40\u7DE9\u885D\u6E32\u67D3\u5668\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u547C\u53EBCircleProgress::setStartEndAngle()\u3001ImageProgress::setAnchorAtZero()\u548CTextProgress::setNumberOfDecimals()\u5F8C\u81EA\u52D5\u66F4\u65B0ProgressIndicator\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8A2D\u7F6E\u65B0\u503C\u6642\u91CD\u7E6AcircleProgressIndicator\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86\u87A2\u5E55\u8F49\u63DB\u5B8C\u6210\u5F8C\u984D\u5916\u7684\u87A2\u5E55\u91CD\u7E6A\u3002 \u5728\u4E00\u4E9B\u5E73\u81FA\u4E0A\uFF0C\u9019\u6A23\u984D\u5916\u7684\u91CD\u7E6A\u5C0E\u81F4\u4E86\u6027\u80FD\u554F\u984C\u3002 \u5728Screen::afterTransition()\u4E2D\u4F7F\u6574\u500B\u87A2\u5E55\u7121\u6548\u5316\uFF08\u5982\u6709\u5FC5\u8981\uFF09\u73FE\u5728\u662F\u61C9\u7528\u958B\u767C\u8005\u7684\u8CAC\u4EFB\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u984D\u5916\u7684\u6B65\u9A5F\u3002 \u8ACB\u53C3\u95B1\u6587\u7AE0\u201C\u5DF2\u77E5\u554F\u984C\u201D\u77AD\u89E3\u8A73\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4110"
  }), `\u7248\u672C4.11.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2019\u5E743\u67081\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u91CD\u8981\u5347\u7D1A\u8CC7\u8A0A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u61C9\u7528\u5305\u542BLCD.hpp\u4E26\u8981\u6C42\u8A2A\u554FHAL\uFF0C\u5C07\u4E0D\u518D\u53EF\u884C\uFF0C\u56E0\u70BALCD.hpp\u4E0D\u518D\u5305\u542BHAL.hpp\u3002 \u5728\u9019\u7A2E\u60C5\u6CC1\u4E0B\uFF0C\u52D9\u5FC5\u5305\u542BHAL.hpp\u3002 \u61C9\u7528\u7BC4\u4F8BDemo1\u548CDemo2\u7684\u8F03\u65E9\u7248\u672C\u5B58\u5728\u9019\u500B\u554F\u984C\u4E26\u5DF2\u66F4\u65B0\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u904EUI\u6309\u9215\u548C\u9375\u76E4\u5FEB\u901F\u9375Ctrl + F\u548CCtrl + B\uFF0C\u589E\u52A0\u4E86\u5C0F\u90E8\u4EF6\u7684\u201C\u524D\u9032\u201D/\u201C\u5F8C\u9000\u201D\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u8907\u88FD\u548C\u7C98\u8CBC\u87A2\u5E55\u548CCustomContainerDefinitons\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u91CD\u65B0\u6392\u5217CustomContainerDefinitions\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u5728\u87A2\u5E55\u548CCustomContainerDefinitions\u4E4B\u9593\u5207\u63DB\u6642\u6703\u8A18\u4F4F\u4E4B\u524D\u9078\u64C7\u7684\u87A2\u5E55\u548CCustomContainerDefinition\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u65B0\u5EFA\u6587\u5B57\u548C\u4F7F\u7528\u6587\u5B57\u7684\u5C0F\u5DE5\u5177\u6642\u6703\u4F7F\u7528\u4E0A\u4E00\u6B21\u4F7F\u7528\u7684\u5B57\u9AD4\u6392\u5370\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BACustomContainerInstances\u589E\u52A0\u4E86\u65B0\u7684\u6A39\u5716\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7981\u7528\u4E86\u9023\u7E8C\u7A0B\u5F0F\u78BC\u751F\u6210\u548C\u7DE8\u8B6F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u201C\u8A73\u7D30\u65E5\u8A8C\u201D\u8996\u7A97\u4E2D\u8F38\u51FA\u7684\u53EF\u8B80\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5411\u201C\u6587\u5B57\u201D\u9078\u9805\u5361\u589E\u52A0\u4E86\u5C0F\u5DE5\u5177\u842C\u7528\u5B57\u5143\u5B57\u5143\uFF0C\u4EE5\u4FBF\u5728\u4F7F\u7528\u4E00\u4E9B\u5C0F\u5DE5\u5177\u6642\u6DFB\u52A0\u9810\u8A2D\u842C\u7528\u5B57\u5143\u5B57\u5143\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u8F09\u5165\u5C08\u6848\u6642\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u751F\u6210\u5C08\u6848\u6642\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u78BA\u8A8D\u5F15\u64CE\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D6\u4F4D\u8272\u5F69\u986F\u793A\u5668\uFF088bpp\uFF09\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u70BARadioButtons\u8A2D\u7F6ERadioButtonGroup\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u986F\u793A\u5668\u65CB\u8F49\uFF08\u6A6B\u5C4F/\u8C4E\u5C4F\uFF09\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u5728TouchGFX Designer\u4E2D\u8A2D\u7F6E\u6A6B\u5C4F/\u8C4E\u5C4F\u6A21\u64EC\u5668\u76AE\u819A\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnalogClock\u3001DigitalClock\u3001TextureMapper\u3001AnimatedTextureMapper& Shape\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CTouchGFX Designer\u751F\u6210Makefile\u548CVisual Studio\u6A94\u7528\u65BC\u904B\u884C\u6A21\u64EC\u5668\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D6\u4F4D\u8272\u5F69\u986F\u793A\u5668\uFF08RGBA2222\u3001BGRA2222\u3001ARGB2222\u548CABGR2222\u5F71\u50CF\u7DE9\u885D\u5340\u683C\u5F0F\uFF09\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u6CF0\u6587\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u963F\u62C9\u4F2F\u6587\u6587\u5B57\u7684\u6E32\u67D3\u6548\u679C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u8CA0\u884C\u8DDD\u8655\u7406\u529F\u80FD\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86 Ctrl + A\uFF08\u5168\u9078\uFF09\u5C0DCustomContainerDefinitions\u4E0D\u8D77\u4F5C\u7528\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u87A2\u5E55\u91CD\u6392\u5E8F\u6703\u9078\u4E2D\u6E05\u55AE\u4E2D\u7B2C\u4E00\u500B\u87A2\u5E55\u4E26\u522A\u9664\u88AB\u79FB\u52D5\u87A2\u5E55\u7684\u64A4\u92B7/\u91CD\u505A\u6B77\u53F2\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u9078\u64C7\u61C9\u7528\u7BC0\u9EDE\u5F8C\u64A4\u92B7/\u91CD\u505A\u6B77\u53F2\u6703\u640D\u58DE\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u61C9\u7528\u540D\u7A31\u4E0D\u80FD\u4EE5\u6578\u5B57\u958B\u982D\u6216\u5305\u542B\u201C-\u201D\u6216\u201C_\u201D\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u201C\u5BA2\u88FD\u5BB9\u5668\u201D\u9078\u9805\u5361\u4E0A\u8F09\u5165\u61C9\u7528\u6703\u5C0E\u81F4\u756B\u5E03\u4E0A\u7684\u5167\u5BB9\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C07\u591A\u500B\u5143\u7D20\u79FB\u5165\u5BB9\u5668\u5F8C\u6309\u4E0B\u64A4\u92B7\u6309\u9215\u6703\u5C0E\u81F4\u5D29\u6F70\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8F09\u5165\u5C08\u6848\u6642\u5B57\u9AD4\u6A94\u88AB\u9396\u5B9A\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u522A\u9664\u8CC7\u6E90\u6587\u5B57\u6642\u4F7F\u7528\u6587\u5B57\u7684\u5143\u4EF6\u4E0A\u4E0D\u986F\u793A\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u901A\u904E\u6309\u5169\u4E0BTouchGFX\u6A94\u8F09\u5165\u932F\u8AA4\u61C9\u7528\u6703\u5C0E\u81F4\u555F\u52D5\u756B\u9762\u5361\u6EEF\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86ModalWindow\u7684\u4F4D\u7F6E\u7A0B\u5F0F\u78BC\u751F\u6210\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C0DScrollableContainer\u3001ScrollList& ScrollWheel\u7684\u201C\u79FB\u52D5\u5C0F\u5DE5\u5177\u201D\u4EA4\u4E92\u652F\u6301\u7F3A\u5931\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u201C\u6700\u8FD1\u4F7F\u7528\u7684\u61C9\u7528\u201D\u6E05\u55AE\u4E2D\u7684\u9806\u5E8F\u554F\u984C\u3002 \u73FE\u5728\uFF0C\u5728\u6253\u958B\u61C9\u7528\u6642\u53EF\u4EE5\u6B63\u78BA\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u63D2\u5165\u5C0F\u5DE5\u5177\u53EF\u80FD\u5C0E\u81F4\u7A7A\u7684\u64A4\u92B7\u9805\u88AB\u6DFB\u52A0\u5230\u64A4\u92B7/\u91CD\u505A\u6B77\u53F2\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86CustomContainerDefinitions\u7684\u5C6C\u6027\u7A97\u683C\u4E2D\u6A19\u984C\u6587\u5B57\u548C\u8AAA\u660E\u7F3A\u5931\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7A7A\u9592CPU\u4F7F\u7528\u7387\u9AD8\u65BC\u9810\u671F\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728CustomContainer\u4E2D\u7684FlexButton\u4E0A\u8A2D\u7F6E\u4EA4\u4E92\u6703\u751F\u6210\u932F\u8AA4\u7A0B\u5F0F\u78BC\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C0F\u90E8\u4EF6\u4E0A\u8A2D\u7F6EMixin\u4E0D\u53EF\u64A4\u92B7\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5411FlexButton\u6DFB\u52A0\u6A23\u5F0F\u7684\u64A4\u92B7/\u91CD\u505A\u529F\u80FD\u7F3A\u5931\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u4EA4\u4E92\u4E2D\u4F7F\u7528\u8A31\u591A\u6ED1\u584A\u56DE\u6A94\u6642\u521D\u59CB\u5316\u9806\u5E8F\u932F\u8AA4\u7684\u554F\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86CWR Painter\u4E2D4bpp\u548C2bpp\u7684\u7CBE\u5EA6\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E868bpp\u300116bpp\u548C24bpp\u7684alpha\u6DF7\u5408\u516C\u5F0F\u4E2D\u7684\u7CBE\u5EA6\u554F\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u984D\u5916\u7684\u6B65\u9A5F\u3002 \u8ACB\u53C3\u95B1\u6587\u7AE0\u201C\u5DF2\u77E5\u554F\u984C\u201D\u77AD\u89E3\u8A73\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4100"
  }), `\u7248\u672C4.10.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2018\u5E7411\u67085\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u8981\u6C42\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u73FE\u5728\u50C5\u4F9BSTM32\u5FAE\u63A7\u5236\u5668\u4F7F\u7528\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u4E0B\u5217\u5C0F\u5DE5\u5177\u7684\u652F\u63F4\uFF1AImageProgress\u3001BoxProgress\u3001TextProgress\u3001LineProgress\u3001CircleProgress\u3001Line\u3001Circle\u3001BoxWithBorder\u3001FlexButton\u3001ScrollList\u3001ScrollWheel\u548CSwipeContainer\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u4EE5\u5728\u87A2\u5E55\u4E0A\u8ABF\u6574\u756B\u5E03\u7DE9\u885D\u5340\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F4\u87A2\u5E55\u8F49\u63DB\uFF1ACoverTransition\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u6703\u8A18\u9304\u4E0B\u5217\u7CFB\u7D71\u8CC7\u8A0A\u4EE5\u4FBF\u5728\u652F\u63F4\u7684\u5834\u666F\u4E2D\u4F7F\u7528\uFF1A\u7528\u6236\u540D\u3001Designer\u7248\u672C\u3001Designer\u5B89\u88DD\u8DEF\u5F91\u3001Windows\u7248\u672C\u3001\u7576\u524D\u5340\u57DF\u6027\u3001\u5B89\u88DD\u7684.NET\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\u53EF\u4EE5\u70BA\u61C9\u7528\u5C0E\u5165\u5177\u6709\u4EFB\u4F55\u89E3\u6790\u5EA6\u7684UI\uFF08\u522A\u9664\u4E86\u89E3\u6790\u5EA6\u6AA2\u67E5\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u7528\u65BC\u986F\u793A/\u96B1\u85CF\u4FEE\u526A\u904E\u7684\u5C0F\u90E8\u4EF6\u7684\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u5728\u756B\u5E03\u4E0A\u5C0D\u5C0F\u5DE5\u5177\u9032\u884C\u62D6\u52D5\u548C\u5927\u5C0F\u8ABF\u6574\u6642\u7684\u6027\u80FD\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CCircle\u548CAbstractShape\u652F\u6301\u66F4\u9AD8\u7CBE\u5EA6\u7684\u5713\u5F27\u8D77\u9EDE\u548C\u5713\u5F27\u7D42\u9EDE\uFF0C\u53EF\u7372\u5F97\u66F4\u5E73\u6ED1\u7684\u5713\u5F27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u64F4\u5927\u503C\u7BC4\u570D\uFF0C\u5167\u90E8Q5\u7D50\u69CB\u4F7F\u752832\u4F4D\u5143\u800C\u4E0D\u662F16\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Circle::getPrecision()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u51FD\u6578FadeAnimator::isFadeAnimationRunning()\u3001MoveAnimator::isMoveAnimationRunning()\u3001AnimatedImage::isAnimatedImageRunning()\u548CZoomAnimationImage::isZoomAnimationImageRunning()\u3002 \u539F\u4F86\u7684isRunning() \u51FD\u6578\u5DF2\u68C4\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86ListLayout::setDirection()\u548CgetDirection()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `roo gem\u5F9E1.13.1\u66F4\u65B0\u81F32.7.1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6309\u4E0BSHIFT-F3\u6703\u5C07\u87A2\u5E55\u8907\u88FD\u5230\u526A\u8CBC\u677F\uFF08\u50C5\u9650Windows\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6309\u4E0BCTRL-F3\u6703\u5C07\u63A5\u4E0B\u4F86\u768450\u500B\u87A2\u5E55\u4FDD\u5B58\u5230\u87A2\u5E55\u622A\u5716\u8CC7\u6599\u593E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u751F\u6210\u7684\u8CC7\u7522\u6B63\u5E38\u7E2E\u9032\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86ScrollableContainer::setScrollbarsPermanentlyVisible()\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u87A2\u5E55\u6216\u5BA2\u88FD\u5BB9\u5668\u5927\u5C0F\u767C\u751F\u8B8A\u5316\u6642ModalWindow\u5C0F\u5DE5\u5177\u4E0D\u8ABF\u6574\u5927\u5C0F\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7576\u6A94\u7684\u96B1\u85CF\u5C6C\u6027\u8A2D\u7F6E\u70BA\u96B1\u85CF\u6642\u751F\u6210\u7A0B\u5F0F\u78BC\u5931\u6557\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4FEE\u6539\u87A2\u5E55\u6216\u5BA2\u88FD\u5BB9\u5668\u540D\u7A31\u7684\u5927\u5C0F\u5BEB\u5C0E\u81F4\u91CD\u65B0\u7DE8\u8B6F\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7121\u7DDA\u4E0A\u61C9\u7528\u53EF\u7528\u6642\u4E92\u806F\u7DB2\u4E1F\u5931\u6703\u5C0E\u81F4Designer\u5D29\u6F70\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8F09\u5165\u5C08\u6848\u5F8CModalWindow\u5C0F\u5DE5\u5177\u7684\u4F4D\u7F6E\u751F\u6210\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86\u8F09\u5165Designer\u5C08\u6848\u6642\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u7DE8\u8B6F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86ImagePicker\u4E2D\u5118\u7BA1\u7576\u524D\u8CC7\u6599\u593E\u4E0B\u6709\u5B50\u8CC7\u6599\u593E\u4ECD\u7136\u986F\u793A\u201C\u7A7A\u9810\u7559\u4F4D\u7F6E\u201D\u7684\u8996\u89BA\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86Designer\u4E0D\u901A\u904E\u4EE3\u7406\u4F3A\u670D\u5668\u4F7F\u7528\u9810\u8A2D\u6191\u8B49\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5617\u8A66\u5237\u5BEB\u5230\u932F\u8AA4\u76EE\u6A19\u6642Designer\u4E0D\u6B63\u78BA\u5831\u544A\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6C92\u6709\u8DB3\u5920\u8A31\u53EF\u6B0A\u5BEB\u5165\u6240\u9078touchgfx\u8DEF\u5F91\u6703\u5C0E\u81F4Designer\u5D29\u6F70\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86Designer\u932F\u8AA4\u5730\u5C07\u87A2\u5E55\u66F4\u6539\u7406\u89E3\u70BA\u672A\u4FDD\u5B58\u7684\u66F4\u6539\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8ABF\u6574\u5BB9\u5668\u5927\u5C0F\u6642\u4E0D\u6B63\u78BA\u986F\u793A\u5BB9\u5668\u5167\u7684\u5C0F\u5DE5\u5177\u7684\u8996\u89BA\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CDesigner\u6703\u5728\u60A8\u8F09\u5165\u53E6\u4E00\u500B\u61C9\u7528\u6642\u95DC\u9589\u904B\u884C\u7684\u6A21\u64EC\u5668\u9032\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u53EF\u4EE5\u62D6\u52D5\u5BA2\u88FD\u5BB9\u5668\u5BE6\u4F8B\u5167\u90E8\u7684\u5C0F\u5DE5\u5177\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u6642\u4E0D\u80FD\u6B63\u78BA\u6E32\u67D3Circle\uFF0C\u4E26\u4E14\u4E0D\u80FD\u6B63\u78BA\u8A08\u7B97\u7121\u6548\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u534A\u7DDA\u5BEC\u5927\u4E8E\u534A\u5F91\u6642\u7684Circle\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86LineProgress.cpp\u4E2DsetValue\u7684x&y\u503C\u8A08\u7B97\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u6642\u4E0D\u80FD\u6B63\u78BA\u6E32\u67D3Circle\uFF0C\u4E26\u4E14\u4E0D\u80FD\u6B63\u78BA\u8A08\u7B97\u7121\u6548\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u534A\u7DDA\u5BEC\u5927\u4E8E\u534A\u5F91\u6642\u7684Circle\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7E6A\u88FD\u7DDA\u689D\u9577\u65BC2047\u50CF\u7D20\uFF08\u59821449\u50CF\u7D20\u5BEC\u548C1449\u50CF\u7D20\u9AD8\uFF09\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u59A8\u7919\u4E00\u4E9B\u963F\u62C9\u4F2F\u6587\u9023\u5B57\u7684\u6B63\u78BA\u6E32\u67D3\u7684\u554F\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u984D\u5916\u7684\u6B65\u9A5F\u3002 \u8ACB\u53C3\u95B1\u6587\u7AE0\u201C\u5DF2\u77E5\u554F\u984C\u201D\u77AD\u89E3\u8A73\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-494"
  }), `\u7248\u672C4.9.4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2018\u5E741\u670825\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7E2E\u77ED\u4E86\u5728Designer\u4E2D\u8F09\u5165\u61C9\u7528\u6240\u9700\u7684\u6642\u9593\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-493"
  }), `\u7248\u672C4.9.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2017\u5E7412\u670815\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u73FE\u5728\u4F7F\u7528\u9810\u8A2D\u7684Windows\u4EE3\u7406\u8A2D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5957\u88DD\u8EDF\u9AD4\u7BA1\u7406\u5668\u7DDA\u4E0A\u66F4\u65B0\u53EF\u7528\u7684\u5957\u88DD\u8EDF\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u512A\u5316\u4E86\u96E2\u7DDA\u6642\u7684\u932F\u8AA4\u8AAA\u660E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8A2D\u7F6E\u8207\u8CC7\u6E90\u6587\u5B57\u914D\u5408\u4F7F\u7528\u7684\u6587\u5B57\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C08\u6848\u66F4\u65B0\u5668\u7528\u6B63\u78BA\u7684\u5716\u50CF\u683C\u5F0F\u66F4\u65B0MSVS\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\uFF0CDesigner\u4E2D\u6703\u767C\u751F\u6587\u5B57\u5927\u5C0F\u8A08\u7B97\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6700\u8FD1\u4F7F\u7528\u7684\u6A94\u6309\u65E5\u671F\u6392\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u201C\u7B49\u5F85\u201D\u4EA4\u4E92\u4E2D\u7684\u8A08\u6578\u5668\u521D\u59CB\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u8ABF\u6574\u5927\u5C0F\u6642\u6E05\u55AE\u4F48\u5C40\u4E2D\u5B50\u5143\u7D20\u7684\u7E6A\u88FD\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5177\u6709\u5217\u8868\u4F48\u5C40\u5C0F\u90E8\u4EF6\u7684\u61C9\u7528\u7684\u8F09\u5165\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5DF2\u80FD\u5920\u6B63\u78BA\u6E32\u67D3.otf\u5B57\u9AD4\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\uFF0C\u62D6\u66F3\u5BB9\u5668\u53EF\u80FD\u5C0E\u81F4\u5EA7\u6A19\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u842C\u7528\u5B57\u5143\u6587\u5B57\u7DE9\u885D\u5340\u7684null\u7D50\u675F\u5B57\u5143\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E36\u6A19\u7C64\u7684\u6309\u9215\u7684\u6587\u5B57\u6E32\u67D3\u4FEE\u6B63\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `tgfx.exe\u6253\u5305\u5668\u9069\u7528\u65BC\u66F4\u8907\u96DC\u7684\u6A94\u4F48\u5C40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5305\u542B\u4E86\u5BB9\u5668\u7684\u539F\u59CB\u7A0B\u5F0F\u78BC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u984D\u5916\u7684\u7D30\u5FAEDesigner UI\u4FEE\u6B63\u548C\u6539\u5584\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-492"
  }), `\u7248\u672C4.9.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `2017\u5E7411\u670820\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728Designer\u7684\u756B\u5E03\u4E0A\u62D6\u52D5\u5143\u7D20\u6709\u6642\u6703\u5C0E\u81F4\u7570\u5E38\u7684\u554F\u984C\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-491"
  }), `\u7248\u672C4.9.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2017\u5E7411\u670816\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C07TextArea\u5C0F\u5DE5\u5177\u653E\u5165\u5BB9\u5668\u6642Designer\u7684\u5E7E\u500B\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8F09\u5165\u5C08\u6848\u6642\u201C\u53E6\u4E00\u500B\u4EA4\u4E92\u5B8C\u6210\u201D\u6D88\u5931\u89F8\u767C\u4EA4\u4E92\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u5177\u6709\u7279\u5B9A\u5B89\u5168\u6027\u539F\u5247\u914D\u7F6E\u7684PC\u4E0A\uFF0CDesigner\u4E0D\u80FD\u6B63\u78BA\u5730\u65B0\u5EFA\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u8CC7\u7522\u751F\u6210\u3001\u7A0B\u5F0F\u78BC\u7DE8\u8B6F\u6216\u751F\u6210\u5F8C\u6307\u4EE4\u5931\u6557\u6642Designer\u4E2D\u7684\u932F\u8AA4\u8655\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86Designer\u5C08\u6848\u6A94\u6848\u4E2DTouchgfxPath\u89E3\u8B80\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u4E2D\u7684\u4E00\u4E9B\u5B57\u9AD4\u6392\u5370\u8B8A\u66F4\u672A\u5C0E\u81F4\u65B0\u7A0B\u5F0F\u78BC\u7684\u751F\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8CC7\u7522\u8CC7\u6599\u593E\u53D7svn\u63A7\u5236\u6642ImageConverter\u767C\u751F\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConverter\u5728\u7279\u5B9A\u60C5\u6CC1\u4E0B\u53EF\u80FD\u6AA2\u6E2C\u4E0D\u5230\u8CC7\u7522\u4E2D\u7684\u8B8A\u5316\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-490"
  }), `\u7248\u672C4.9.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2017\u5E7411\u67088\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5957\u88DD\u8EDF\u9AD4\u7BA1\u7406\u5668\uFF0C\u7528\u65BC\u8655\u7406\u677F\u652F\u63F4\u5305\u3001\u6F14\u793A\u548C\u7BC4\u4F8B\u3002 \u73FE\u5728\uFF0CDesigner\u5F9E\u7DDA\u4E0A\u5B58\u5132\u5EAB\u7372\u53D6\u9019\u4E9B\u8CC7\u6E90\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5404\u7A2E\u958B\u767C\u677F\u7684\u6240\u6709\u539F\u6709\u7BC4\u4F8B\u3001\u6F14\u793A\u548C\u57E0\u5747\u5DF2\u5F9E\u6846\u67B6\u4E2D\u522A\u9664\uFF0C\u73FE\u5728\u4EE5\u5957\u88DD\u8EDF\u9AD4\u7684\u5F62\u5F0F\u63D0\u4F9B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u986F\u8457\u6539\u5584\u4E86Designer\u4E2D\u7684\u6587\u5B57\u8655\u7406\u3002 \u73FE\u5728\u53EF\u4EE5\u5728Designer\u4E2D\u4F7F\u7528\u7FFB\u8B6F\u6A94\u548C\u842C\u7528\u5B57\u5143\uFF0C\u56E0\u6B64\u4E0D\u5FC5\u518D\u624B\u52D5\u7DE8\u8F2Ftexts.xlsx\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u73FE\u5728\u7684\u61C9\u7528\u6587\u4EF6\u7D50\u69CB\u66F4\u52A0\u9748\u6D3B\uFF0C\u80FD\u5920\u81EA\u52D5\u66F4\u65B0IAR\u548CKeil IDE\u5C08\u6848\uFF0C\u7121\u8AD6\u6A94\u4F4D\u7F6E\u5728\u54EA\u88E1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Designer\u5C0DScrollableContainer\u548CListLayout\u5C0F\u5DE5\u5177\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DSW4STM32 IDE\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DIAR Embedded Workbench\u7248\u672C8.10\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5716\u50CF\u8F49\u63DB\u5668\u73FE\u5177\u6709\u5C0D\u8CC7\u6599\u593E\u57F7\u884C\u64CD\u4F5C\u7684\u9078\u9805\uFF0C\u7121\u9700\u6BCF\u500B.png\u6A94\u547C\u53EB\u4E00\u6B21\u3002 \u9019\u5927\u5E45\u63D0\u9AD8\u4E86\u5716\u50CF\u8F49\u63DB\u7684\u901F\u5EA6\u3002 \u6B64\u6A21\u5F0F\u662F\u65B0\u5C08\u6848\u7684\u9810\u8A2D\u884C\u70BA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GNU Arm Embedded\u5DE5\u5177\u93C8\uFF08GCC\u4EA4\u53C9\u7DE8\u8B6F\u5668\uFF09\u5DF2\u66F4\u65B0\u81F3\u7248\u672C6-2017-q2-update\uFF08gcc\u7248\u672C6.3.1\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PC\u6A21\u64EC\u5668\u7684GNU\u7DE8\u8B6F\u5668\u5DF2\u66F4\u65B0\u81F3\u7248\u672C6.3.0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BACortex-M4f\u548CCortex-M7\u589E\u52A0\u4E86\u7528-mfloat-abi=hard\u7DE8\u8B6F\u7684gcc\u6838\u5FC3\u5EAB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u53EF\u8A3B\u518A\u70BA\u8A08\u6642\u5668\u5C0F\u5DE5\u5177\u7684\u5C0F\u5DE5\u5177\u6578\u76EE\u5F9E24\u500B\u589E\u52A0\u81F332\u500B\u3002 \u6B64\u5916\uFF0C\u589E\u52A0\u4E86\u7372\u53D6\u95DC\u65BC\u7576\u524D\u8A3B\u518A\u5C0F\u5DE5\u5177\u7684\u8CC7\u8A0A\u7684\u51FD\u6578\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u907F\u514DMoveAnimator::cancelMoveAnimation()\u7684\u76F8\u95DC\u554F\u984C\uFF0C\u5C07AnimationTextureMapper::cancelMoveAnimation()\u91CD\u547D\u540D\u70BAcancelAnimationTextureMapperAnimation()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F9EARGB8888\u9EDE\u9663\u5716\u6E32\u67D3\u5BE6\u5FC3\u50CF\u7D20\u6642PainterRGB565Bitmap\u4E2D\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5B57\u9AD4\u4E2D\u7F3A\u5931\u6240\u6709\u4F7F\u7528\u7684\u5B57\u5143\u6642FontConvert\u4E2D\u7684\u7F55\u898B\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed uninitialized variables in the DMA class.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u984D\u5916\u7684\u6B65\u9A5F\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-480"
  }), `\u7248\u672C4.8.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2017\u5E743\u670810\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD4bpp\u73FE\u5728\u7E6A\u88FD\u5B57\u5143\u7684\u901F\u5EA6\u6700\u591A\u63D0\u9AD8\u4E8615%\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u756B\u5E03\u5C0F\u90E8\u4EF6\u5728\u7279\u5B9A\u60C5\u6CC1\u4E0B\u7684\u6E32\u67D3\u901F\u5EA6\u7A0D\u6709\u63D0\u9AD8\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u767C\u4F48\u4E86TouchGFX Designer\u3002 \u6838\u5FC3\u6846\u67B6\u3001Designer\u548C\u74B0\u5883shell\u73FE\u5DF2\u6346\u7D81\u5728\u4E00\u500B\u5B89\u88DD\u5305\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u6CE2\u65AF\u6587\u548C\u963F\u62C9\u4F2F\u6587\u9023\u5B57\uFF0C\u53EF\u8B58\u5225\u6700\u591A\u4E09\u500B\u5B57\u5143\u7684\u5E8F\u5217\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DMicrosoft Visual Studio 2017\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u548CTextAreaWithWildcard(s) \u73FE\u5728\u652F\u6301setWideTextAction() \u5728\u884C\u904E\u9577\u6642\u81EA\u52D5\u63DB\u884C\u4E26\u5728\u884C\u5C3E\u63D2\u5165\u7701\u7565\u865F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u6ED1\u584A\u589E\u52A0\u4E86getter\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MoveAnimator\u548CFadeAnimator\u73FE\u5728\u53EF\u4EE5\u5C07\u52D5\u756B\u7D50\u675F\u7684\u56DE\u6A94\u7F6E\u4F4D\u6E05\u96F6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CImageConvert\u3001TextConvert\u548CFontConvert\u4E2D\u7684\u932F\u8AA4\u986F\u793A\u5728Visual Studio\u7684\u201C\u932F\u8AA4\u6E05\u55AE\u201D\u8996\u7A97\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u64EC\u5668\u61C9\u7528\u73FE\u5728\u662FWindows\u7A0B\u5F0F\u800C\u4E0D\u662F\u63A7\u5236\u53F0\u7A0B\u5F0F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AbstractShape::updateAbstractShapeCache()\u73FE\u5728\u662F\u516C\u5171\u51FD\u6578\uFF0C\u70BA\u78BA\u4FDD\u5F62\u72C0\u6B63\u78BA\uFF0C\u61C9\u5728\u4E00\u6B21\u6216\u591A\u6B21\u547C\u53EBAbstractShape::setCorner()\u5F8C\u547C\u53EB\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u64EC\u5668\u8996\u7A97\u7684\u5927\u5C0F\u518D\u4E0D\u53EF\u80FD\u610F\u5916\u8ABF\u6574\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6309F2\u9375\u7A81\u51FA\u986F\u793A\u7121\u6548\u5340\u57DF\u73FE\u9069\u7528\u65BC\u820A\u7248HALSDL\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0CPainterGRAY2Bitmap\u3001PainterGRAY4Bitmap\u3001PainterRGB565Bitmap\u548CPainterRGB888Bitmap\u5168\u90E8\u672A\u80FD\u78BA\u8A8D\u7E6A\u5716\u5728\u9EDE\u9663\u5716\u5C3A\u5BF8\u7BC4\u570D\u5167\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u70BA\u4F7F\u87A2\u5E55\u622A\u5716\u4E0A\u7684\u8272\u5F69\u6B63\u78BA\uFF0CHALSDL2\uFF08\u6A21\u64EC\u5668\uFF09\u5728\u87A2\u5E55\u4E0A\u4F7F\u752824bpp\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage::setOffset()\u73FE\u5728\u80FD\u6B63\u78BA\u8655\u7406\u7A7A\u4F4D\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage::getSolidRect()\u6709\u6642\u6703\u5831\u544A\u932F\u8AA4\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u65CB\u8F49\u4E86TextArea\u4E2D\u7684\u6587\u5B57\uFF0CresizeToCurrentText()\u548CresizeHeightToCurrentText()\u6703\u8ABF\u63DB\u5BEC\u5EA6/\u9AD8\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u51FD\u6578getTextHeight() \u4E0D\u8003\u616E\u884C\u9593\u8DDD\u3002 \u50CFresizeToCurrentText() \u9019\u6A23\u7684\u51FD\u6578\u548C\u5176\u4ED6\u4F7F\u7528getTextHeight() \u51FD\u6578\u7684\u51FD\u6578\u4E0D\u6703\u6B63\u78BA\u5730\u8ABF\u6574\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SlideMenu::setState()\u672A\u6B63\u78BA\u8655\u7406EXPANDED\u72C0\u614B\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u7531\u65BC\u589E\u52A0\u4E86TouchGFX Designer\uFF0C\u901A\u904E.msi\u5B89\u88DD\u7A0B\u5F0F\u9032\u884C\u5B89\u88DD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u5BB9\u73FE\u67094.x\u61C9\u7528\u548CHAL\u57E0\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-470"
  }), `\u7248\u672C4.7.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2016\u5E7412\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u6240\u6709\u6A19\u6E96\u5C0F\u5DE5\u5177\u548C\u5BB9\u5668\u7684\u539F\u59CB\u7A0B\u5F0F\u78BC\u5747\u5305\u542B\u5728\u5167\u3002 \u53C3\u898B\u76EE\u9304touchgfx/framework/source/touchgfx\u3002 \u8ACB\u6CE8\u610F\uFF0C\u9019\u4E9B\u985E\u4ECD\u7136\u5B58\u5728\u65BC\u6838\u5FC3\u5EAB\u4E2D\uFF0C\u4E26\u4E14\u539F\u59CB\u7A0B\u5F0F\u78BC\u6A94\u9ED8\u8A8D\u4E0D\u6DFB\u52A0\u5230IAR/Keil/gcc\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u512A\u5316\u4E86\u57FA\u65BCTFT\u63A7\u5236\u5668\u7684\u5E73\u81FA\u4E0A\u7684\u55AE\u4E00\u6846\u67B6\u5F71\u50CF\u7DE9\u885D\u5340\u914D\u7F6E\u7684\u8655\u7406\uFF0C\u8A31\u591A\u60C5\u6CC1\u4E0B\u4E0D\u518D\u9700\u8981\u5916\u90E8RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u986F\u8457\u6539\u5584\u4E86\u756B\u5E03\u5C0F\u5DE5\u5177\u7CFB\u7D71\u548C\u6240\u6709\u6A19\u6E96\u7E6A\u5716\u90E8\u4EF6\u7684\u6027\u80FD\u3002 \u5982\u679C\u7E6A\u88FD\u8A31\u591A\u50CF\u7D20\uFF0C\u9810\u671F\u6027\u80FD\u6703\u5927\u5E45\u63D0\u5347\uFF0C\u8F03\u5C0F\u7684\u5F62\u72C0\uFF08\u5982\u5716\u5F62\u7DDA\u689D\uFF09\u4E5F\u6703\u6709\u6027\u80FD\u7684\u5C11\u91CF\u63D0\u5347\u3002 \u6F14\u793A\u4E2D\u4F7F\u7528\u7684\u201CPainterVerticalAlpha\u201D\u4E5F\u5DF2\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u6587\u5B57\u8F49\u63DB\u5668\u5DE5\u5177\u5C07\u7D44\u5408\u6240\u6709\u8A9E\u8A00\u7684\u76F8\u540C\u7FFB\u8B6F\u6A94\uFF0C\u56E0\u6B64\u6E1B\u5C11\u4E86\u7A7A\u9593\u5360\u7528\u91CF\u3002 \u5C07\u5728\u8CC7\u7522\u751F\u6210\u671F\u9593\u5217\u5370\u6B64\u904E\u7A0B\u7684\u7D50\u679C\u3002 \u6CE8\u610F\uFF1A\u6B64\u884C\u70BA\u9ED8\u8A8D\u555F\u7528\u3002 \u5982\u679C\u60A8\u6709\u81EA\u5DF1\u64CD\u7E31\u6587\u5B57\u8CC7\u6599\u7D50\u69CB\uFF08\u5982\u5C07\u4E00\u7A2E\u8A9E\u8A00\u8F09\u5165\u5230RAM\u4E2D\uFF09\u7684\u73FE\u6210\u5C08\u6848\uFF0C\u6B64\u512A\u5316\u53EF\u80FD\u7834\u58DE\u60A8\u7684\u7A0B\u5F0F\u78BC\u3002 \u53EF\u901A\u904E\u6DFB\u52A0\u4E0B\u5217\u7A0B\u5F0F\u78BC\u7981\u7528\u512A\u5316\uFF1Aremap_identical_texts := no\uFF08\u5C0D\u65BC\u57FA\u65BC\u201Cmake\u201D\u7684\u751F\u6210\uFF09 `, `<`, `RemapIdenticalTexts`, `>`, `no`, `<`, `/RemapIdenticalTexts`, `>`, ` \uFF08\u5C0D\u65BCMSVS\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u6A21\u64EC\u5668\u4F7F\u7528\u7684SDL\u7248\u672C\u5F9E1.2\u66F4\u65B0\u81F32.0.4\u3002 SDL1.2\u4ECD\u5B58\u5728\u65BC\u5206\u767C\u6A94\u4E2D\uFF0C\u4F46\u73FE\u5728\u6240\u6709\u7BC4\u4F8B\u548C\u5C08\u6848\u5747\u4F7F\u7528SDL2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u7528.png\u6A94\u4F5C\u70BA\u6A21\u64EC\u5668\u76AE\u819A\u3002 \u5982\u679C.png\u6A94\u5305\u542B\u900F\u660E\u5340\u57DF\uFF0C\u6A21\u64EC\u5668\u8996\u7A97\u5F62\u72C0\u5C07\u767C\u751F\u76F8\u61C9\u8B8A\u5316\u3002 \u53C3\u898Bdisplay_orientation_example\u7372\u53D6\u7A0B\u5F0F\u78BC\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u5728\u5177\u6709Chrom-ART\u7684ST\u76EE\u6A19\u786C\u9AD4\u4E0A\uFF0CBox\u5C0F\u90E8\u4EF6\u5C07\u7531DMA\u7E6A\u88FD\uFF0C\u5373\u4F7Falpha`, `<`, ` 255\uFF08BLIT_OP_FILL_WITH_ALPHA\u652F\u63F4\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CTextArea\u548C\u542B\u842C\u7528\u5B57\u5143\u7684TextArea\u652F\u6301setWideTextAction()\uFF0C\u53EF\u4F7F\u9577\u6587\u5B57\u884C\u81EA\u52D5\u63DB\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5728\u57F7\u884C\u6642\u9593\u9047\u5230\u4E0D\u5B58\u5728\u7684\u5B57\u5F62\u6642\u986F\u793A\u201Cfallback\u201D\u5B57\u5143\u7684\u80FD\u529B\u3002 \u9019\u662F\u5728\u6587\u5B57\u8CC7\u6599\u5EAB\u7684\u5B57\u9AD4\u6392\u5370\u8868\u4E2D\u914D\u7F6E\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5728\u5B57\u9AD4\u4E2D\u5F37\u5236\u5305\u542B\u984D\u5916\u5B57\u5F62\u7684\u9078\u9805\u3002 \u9019\u6975\u5927\u5730\u7C21\u5316\u4E86\u7DE8\u8B6F\u6642\u5B57\u5F62\u672A\u77E5\u7684\u60C5\u6CC1\u4E0B\u52D5\u614B\u6587\u5B57\u7684\u8655\u7406\u3002 \u9019\u662F\u5728\u6587\u5B57\u8CC7\u6599\u5EAB\u7684\u5B57\u9AD4\u6392\u5370\u8868\u4E2D\u914D\u7F6E\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CTextConvert\u5BE6\u7528\u7A0B\u5F0F\u7684\u8F38\u51FA\u7D93\u904E\u5F8C\u8655\u7406\uFF0C\u901A\u904E\u5C07\u76F8\u540C\u5B57\u4E32\u6620\u5C04\u5230\u540C\u4E00\u5B58\u5132\u5340\u4F86\u7BC0\u7D04\u5927\u91CF\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u540D\u70BABITMAP_ANIMATION_STORAGE\u7684\u5167\u7F6EBitmapId\uFF0C\u5728\u5C07\u9EDE\u9663\u5716\u5206\u914D\u7D66\u5C0F\u5DE5\u5177\u6642\uFF0C\u53EF\u7528\u4F86\u8868\u793A\u52D5\u756B\u5B58\u5132\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86config/gcc/app.mk\u548Cconfig/msvs/Application.props\u4E2D\u7684\u6296\u52D5\u6F14\u7B97\u6CD5\u9078\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u4F7F\u7528\u4E0B\u5217\u7A0B\u5F0F\u78BC\uFF0C\u4EE5\u7A0B\u5F0F\u8A2D\u8A08\u7684\u65B9\u5F0F\u4FDD\u5B58\u6A21\u64EC\u5668\u87A2\u5E55\u622A\u5716\uFF1A(static_cast`, `<`, `HALSDL2*`, `>`, `(HAL::getInstance()))-`, `>`, `saveScreenshot(); #endif`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CScrollableContainer\u6703\u6070\u7576\u5730\u5FFD\u7565\u4E0D\u53EF\u898B\u5143\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DigitalClock\u652F\u63F4\u5728\u5C0F\u6642\u6307\u793A\u4F4D\u5143\u4E4B\u524D\u986F\u793A\u96F6\uFF08\u82E5\u5C0F\u6642\u6578`, `<`, ` 10\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u64EC\u5668\u73FE\u5728\u53EF\u4EE5\u7A81\u51FA\u986F\u793A\u7121\u6548\u5316\u5340\u57DF\u3002 \u6309\u4E0BF2\u9375\u53EF\u555F\u7528/\u505C\u7528\u6B64\u7279\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u4F7F\u7528va_list\u53C3\u6578\u800C\u975E\u7701\u7565\u865F\u7684Unicode::vsnprintf\u51FD\u6578\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u683C\u5F0F\u5B57\u4E32\u70BA\u201C% f\u201D\uFF0C\u5247Unicode::sprintfFloat\u4E0D\u5217\u5370 `, `<`, `ltspace`, `>`, `\u800C\u4E0D\u662F\u201C+\u201D\u3002 \u6B64\u5916\uFF0C\u7BC4\u570D`, `[-1..0]`, `\u4EE5\u5167\u7684\u6D6E\u9EDE\u503C\u4E0D\u5217\u5370\u7B26\u865F\uFF0C\u4F8B\u5982-0.5\uFF0C\u5C07\u6703\u5217\u5370\u70BA0.5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u53EF\u80FD\u5C0E\u81F4TextureMapper\u8B80\u53D6\u6E90\u9EDE\u9663\u5716\u5B58\u5132\u5340\u4EE5\u5916\u5340\u57DF\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769\u63A2\u7D22\u548C\u8A55\u4F30\u677F\u7684GPIO.cpp\u6709\u4E00\u4E9B\u932F\u8AA4\u7684GPIO\u5F15\u8173\u64CD\u4F5C\uFF08\u7528\u65BC\u6027\u80FD\u6E2C\u91CF\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider.hpp\u4E2D\u7684\u4E00\u4E9B\u65B9\u6CD5\u7F3A\u5C11\u865B\u64EC\u5BA3\u544A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32F769\u63A2\u7D22\u677F\u7684BoardConfiguration\u4E2D\u7684\u554F\u984C\uFF0C\u8A72\u554F\u984C\u5C0E\u81F424bpp\u8272\u5F69\u6A21\u5F0F\u986F\u793A\u4E0D\u6B63\u78BA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage - \u4E0D\u61C9\u4F7F\u7528setBitmap(..)\uFF0C\u73FE\u5DF2\u70BA\u79C1\u6709 \u5C0D\u65BCAnimatedImage\uFF0C\u6539\u70BA\u4F7F\u7528setBitmaps(..)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u5C08\u6848\u6A94\u6848\u548CMakefile\uFF0C\u4EE5\u4FBF\u80FD\u5920\u5C07TouchGFX\u6846\u67B6\u653E\u5728\u5C08\u6848\u958B\u767C\u6240\u5728\u78C1\u789F\u6A5F\u4E4B\u5916\u7684\u53E6\u4E00\u500B\u78C1\u789F\u6A5F\u4E0A\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Environment\uFF08\u7248\u672C2.8\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u201Cmake.exe\u201D\u73FE\u5728\u7684\u7248\u672C\u70BA4.1\uFF0C\u901A\u904E\u5C07\u5982\u201C-j8\u201D\u7B49\u5B57\u5143\u6DFB\u52A0\u5230make\u6307\u4EE4\u4F86\u652F\u63F4\u4E26\u884C\u7DE8\u8B6F\u3002 \u6B64\u8209\u986F\u8457\u52A0\u5FEB\u4E86\u7DE8\u8B6F\u901F\u5EA6\u3002 \u5982\u679C\u60A8\u7684makefile\u4F86\u81EATouchGFX 4.2.0\u6216\u66F4\u65E9\u7248\u672C\uFF0C\u60A8\u5C07\u9700\u8981\u66F4\u65B0\u5B83\u6216\u4F7F\u7528make-3.81.exe\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `g++\u6709\u6642\u53EF\u80FD\u6703\u5831\u544A\u201C\u9A45\u52D5\u5668\u4E2D\u7121\u78C1\u7247\u3002 \u8ACB\u5C07\u78C1\u7247\u63D2\u5165\u9A45\u52D5\u5668E:."\u3002 \u901A\u904E\u5C07gcc\u5F9E\u7248\u672C4.8.1\u66F4\u65B0\u81F3\u7248\u672C4.9.3\u4FEE\u6B63\u4E86\u6B64\u554F\u984C\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-461"
  }), `\u7248\u672C4.6.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2016\u5E749\u670812\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M4\u548CCortex-M7\u4E0AGCC\u6838\u5FC3\u5EAB\u7684\u512A\u5316\u6539\u5584\uFF0C\u63D0\u4F9B\u7684\u52A0\u901F\u6548\u679C\u986F\u8457\u512A\u65BCTouchGFX 4.6.0\uFF0C\u7279\u5225\u662F\u5C0D\u65BCTextureMapper\u548CCanvas\u5C0F\u5DE5\u5177\u800C\u8A00\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL\u4E2D\u7684\u65B0\u51FD\u6578\uFF0C\u7528\u65BC\u8A2D\u7F6E\u6A21\u64EC\u5668\u8996\u7A97\u7684\u6A19\u984C\uFF0C\u53C3\u898BHALSDL::setWindowTitle()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CBW_RLE\u683C\u5F0F\uFF081bpp\u986F\u793A\u5668\uFF09\u7684\u58D3\u7E2E\u6548\u679C\u66F4\u4F73\u3002 \u8A18\u5F97\u522A\u9664\u539F\u4F86\u751F\u6210\u7684\u6A94\u4E26\u91CD\u65B0\u751F\u6210\u8CC7\u7522\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528IAR\u7684STM32F756G-EVAL\u73FE\u5728\u652F\u63F4\u5916\u90E8\u8A18\u61B6\u9AD4\u7684\u5237\u5BEB\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86IAR\u9023\u7D50\u5668\u91CD\u5B9A\u5411\u6307\u4EE4\uFF0C\u4EE5\u4FBF\u4FEE\u6B63\u7528IAR 7.x\u7DE8\u8B6F\u57FA\u65BCCortex-M4\u7684\u76EE\u6A19\u6642\u7684\u9023\u7D50\u5668\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\uFF0C\u7528setupBuffer()\u5C07\u4E0D\u540C\u5B58\u5132\u7DE9\u885D\u5340\u5206\u914D\u7D66CanvasWidgetRenderer\u53EF\u80FD\u5C0E\u81F4\u8A18\u61B6\u9AD4\u6545\u969C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\uFF0CTextureMapper\u53EF\u80FD\u5728\u5E40\u7DE9\u885D\u4E4B\u5916\u9032\u884C\u7E6A\u88FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage\u7684\u504F\u79FB\u91CF\u8A2D\u7F6E\u672A\u6B63\u5E38\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u67D0\u4E9B\u60C5\u6CC1\u4E0B\u5728\u522A\u9664\u52D5\u614B\u9EDE\u9663\u5716\u6642\u53EF\u80FD\u5C0E\u81F4\u8A18\u61B6\u9AD4\u6545\u969C\u7684\u5169\u500B\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86AnalogClock\u4E2D\u7F3A\u5931\u7684\u865B\u64EC\u65B9\u6CD5\u5BA3\u544A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86LPC4088DisplayModule\u7684GCC\u9023\u7D50\u5668\u8173\u672C\u4E2D\u5C0E\u81F4\u6587\u5B57\u548C\u5B57\u9AD4\u88AB\u653E\u5165\u5916\u90E8Flash\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u4F7F\u7528\u81EA\u5E36\u7684fontconvert.out\uFF0C\u7576\u8F38\u51FA\u76EE\u9304\u4E0D\u5B58\u5728\u6642\uFF0C\u73FE\u5728\u53EF\u4EE5\u81EA\u52D5\u5275\u5EFA\u8F38\u51FA\u76EE\u9304\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\uFF0CScrollableContainers\u53EF\u80FD\u5411\u5B50\u5BB9\u5668\u767C\u9001\u932F\u8AA4\u62D6\u52D5\u4E8B\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BEC\u5EA6\u4E0D\u53EF\u4EE5\u88AB8\u6574\u9664\u7684\u55AE\u8272\uFF081bpp\uFF09\u986F\u793A\u5668\u4E0D\u6703\u6B63\u78BA\u986F\u793A\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G\u63A2\u7D22\u677F\u4E0A\u7684\u9ED8\u8A8D\u89F8\u6478\u53D6\u6A23\u901F\u7387\u7565\u5FAE\u4E0A\u5347\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-460"
  }), `\u7248\u672C4.6.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2016\u5E746\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D2bpp\u7070\u5EA6\u986F\u793A\u5668\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D4bpp\u7070\u5EA6\u986F\u793A\u5668\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5C0F\u90E8\u4EF6TiledImage\u3002 \u5C07\u986F\u793A\u5716\u50CF\u7684\u4E00\u5F35\u6216\u591A\u5F35\u8907\u88FD\u5716\u50CF\u3002 \u8907\u88FD\u5716\u50CF\u7684\u6578\u91CF\u53D6\u6C7A\u65BC\u5C0F\u5DE5\u5177\u7684\u5927\u5C0F\u548C\u5716\u50CF\u7684\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5C0F\u90E8\u4EF6RepeatButton\u3002 \u4E00\u500B\u5728\u6309\u4E0B\u6642\u6703\u53CD\u5FA9\u89F8\u767C\u9EDE\u64CA\u4E8B\u4EF6\u7684\u6309\u9215\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5C0F\u90E8\u4EF6AnimationTextureMapper\u3002 TextureMapper\u5177\u6709\u81EA\u5E36\u7684\u52D5\u756B\u7279\u6027\u3002 \u53C3\u898Banimation_texture_mapper_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u5BB9\u5668AnalogClock\u548CDigitalClock\uFF0C\u53C3\u898Bclock_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u5BB9\u5668ProgressIndicators\uFF0C\u53C3\u898Bprogress_indicator_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u5BB9\u5668ModalWindow\u3002 \u5728\u4E3B\u87A2\u5E55\u4E0A\u65B9\u5275\u5EFA\u4E00\u500B\u8996\u7A97\uFF0C\u5728\u4E3B\u87A2\u5E55\u5176\u9918\u90E8\u5206\u6295\u4E0B\u9670\u5F71\u3002 \u53EA\u8981\u6A21\u614B\u8996\u7A97\u53EF\u898B\uFF0C\u9EDE\u64CA\u5C31\u4E0D\u6703\u50B3\u905E\u5230\u4E3B\u87A2\u5E55\u3002 \u53C3\u898B\u7BC4\u4F8Bmodal_window_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u5BB9\u5668SlideMenu\u3002 \u5C07\u6709\u555F\u52D5\u6309\u9215\u7684\u5074\u908A/\u9802\u90E8/\u5E95\u90E8-\u83DC\u55AE\u52D5\u756B\u5316\uFF0C\u4F7F\u5176\u6ED1\u5165/\u51FA\u87A2\u5E55\u3002 \u5982\u9700\u7A7A\u9592\u4E00\u6BB5\u6642\u9593\uFF0C\u53EF\u4EE5\u70BA\u81EA\u52D5\u96B1\u85CF\u8A2D\u7F6E\u8D85\u6642\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Canvas Widget Line\u652F\u6301ROUND_CAP_ENDING\u548CsetCapPrecision()\uFF0C\u4EE5\u4FBF\u63A7\u5236\u5713\u5F62\u7B46\u7AEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u64EC\u5668\u73FE\u5728\u53EF\u4EE5\u751F\u6210\u975E\u5E38\u63A5\u8FD1\u65BC\u786C\u9AD4\u983B\u7387\u7684tick\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6ED1\u9F20X\u548CY\u5EA7\u6A19\u653E\u5728\u6A21\u64EC\u5668\u8996\u7A97\u7684\u6A19\u984C\u4E2D\u3002 \uFF08\u5728\u904B\u884C\u6A21\u64EC\u5668\u6642\u6309\u4E0BF1\u9375\u53EF\u505C\u7528\u6B64\u7279\u6027\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u57FA\u65BCSTM32F7 MCU\u548CSTM32F7\u7684\u677F\u7684ST Cube\u9A45\u52D5\u7A0B\u5F0F\u66F4\u65B0\u81F3\u7248\u672C1.4.0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u4E86\u5C0DSTM32769I-EVAL\u677F\u7684\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u4E86\u5C0DSTM32F769I\u63A2\u7D22\u677F\u7684\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u9632\u6B62\u539F\u4F86\u7684\u87A2\u5E55\u622A\u5716\u88AB\u610F\u5916\u8986\u84CB\uFF0C\u73FE\u5728\u7528\u5E36\u6642\u9593\u6233\u8A18\u7684\u540D\u5B57\u4FDD\u5B58\u5F9E\u6A21\u64EC\u5668\uFF08F3\uFF09\u88FD\u4F5C\u7684\u87A2\u5E55\u622A\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u70BA\u65B9\u4FBF\u627E\u51FA\u6700\u4F73\u756B\u5E03\u5B58\u5132\u7DE9\u885D\u5340\u5927\u5C0F\uFF0C\u6A21\u64EC\u5668\u8F38\u51FA\u756B\u5E03\u5C0F\u5DE5\u5177\u5B58\u5132\u7A7A\u9593\u4F7F\u7528\u91CF\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST\u677F\u7684DMA\u9A45\u52D5\u7A0B\u5F0F\uFF1A\u8868\u73FESTM32F7\u7684DMA2D\u5BE6\u4F8B\u521D\u59CB\u5316\u3002 \u4FEE\u6B63\u4E86\u5C0DF4-Discovery\u932F\u8AA4\u4F7F\u7528CLUT_CM\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u540C\u6642\u5728\u4F7F\u7528\u5176\u4ED6DMA\u901A\u9053\uFF0C\u5247LPC17xx\u3001LPC18xx\u548CLPC43xx\u7684DMA\u9A45\u52D5\u7A0B\u5F0F\u4E0D\u80FD\u6B63\u5E38\u904B\u4F5C\u3002 \u5B83\u5011\u73FE\u5728\u53EA\u9069\u7576\u5730\u76E3\u63A7\u901A\u90530\u7684\u6A19\u8A18\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST\u677F\u7684\u89F8\u6478\u63A7\u5236\u5668\u9A45\u52D5\u7A0B\u5F0F\u73FE\u5DF2\u80FD\u5728\u67E5\u8A62\u524D\u6B63\u5E38\u5730\u6AA2\u67E5\u521D\u59CB\u5316\u662F\u5426\u6B63\u5E38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u64EC\u5668\u4E2D\u7684\u6ED1\u9F20\u9EDE\u64CA\u4E0D\u662F\u7E3D\u80FD\u88AB\u6AA2\u6E2C\u5230\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert.exe\u7684\u9ED8\u8A8D\u683C\u5F0F\u70BARGB565\uFF08\u4E5F\u662F\u5176\u4ED6\u4E0D\u900F\u660E\u683C\u5F0F\u7684\u5408\u7406\u9ED8\u8A8D\u683C\u5F0F\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4E0D\u9069\u7528\u65BC\u9810\u5B9A\u8981\u9032\u884C\u58D3\u7E2E\uFF08BW_RLE\uFF09\u548C\u65CB\u8F49\uFF08\u6A94\u6848\u540D\u4E2D\u7684.90.\uFF09 \u7684BW\u5716\u50CF\uFF08\u58D3\u7E2E\u5F8C\u5716\u50CF\u6703\u904E\u5927\uFF08\u56DE\u5230BW\u683C\u5F0F\uFF09\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u6240\u6709Makefiles\u4F7F\u7528abspath\u800C\u4E0D\u662Frealpath\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage\u73FE\u5728\u5141\u8A31\u5F9EAnimationEnded\u56DE\u547C\u51FD\u6578\u91CD\u65B0\u958B\u59CB\u81EA\u52D5\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07STM32756G-EVAL\u677F\u7684QSPI\u5FEB\u9583\u8A18\u61B6\u9AD4\u5927\u5C0F\u4FEE\u6B63\u70BA64MBytes\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BASTM32F7HAL::flushFrameBuffer\u589E\u52A0\u4E86D\u7DE9\u5B58\u7121\u6548\u7279\u6027\u3002 \u6B64\u8209\u4FEE\u6B63\u4E86\u5728\u55AE\u4E00\u6846\u67B6\u7DE9\u885D\u5340\u6A21\u5F0F\u4E0B\u4E14fb\u4F4D\u65BCSRAM\u4E2D\u6642STM32F7\u4E0A\u5076\u767C\u7684\u5716\u5F62\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Otm8009a\u986F\u793A\u5668\uFF08STM32769-DISCO\u3001STM32769-EVAL\u3001STM32469-DISCO\u548CSTM32469-EVAL\uFF09\u73FE\u4F7F\u7528\u6700\u5927\u986F\u793A\u5668\u4EAE\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BAIAR 7.50.x\u4E2D\u95DC\u65BCva_list\u540D\u7A31\u6539\u5BEB\u7684\u932F\u8AA4\u589E\u52A0\u4E86\u6B0A\u5B9C\u63AA\u65BD\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u5BB9\u73FE\u67094.x\u61C9\u7528\u548CHAL\u57E0\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-451"
  }), `\u7248\u672C4.5.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2016\u5E743\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u8207\u89E3\u6C7Ava_list\u7B26\u865F\u76F8\u95DC\u7684\u5169\u500BIAR\u9023\u7D50\u5668\u554F\u984C\uFF0C\u5B83\u5011\u6703\u5C0E\u81F4\u4E00\u4E9BIAR\u7248\u672C\u4E0D\u80FD\u9023\u7D50\u5C08\u6848\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F4\u63A2\u7D22\u677F\u6703\u572816bpp\u6A21\u5F0F\u4E0B\u7528\u932F\u8AA4\u7684\u984F\u8272\u7E6A\u88FD\u5BE6\u5FC3\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Canvas Widget Renderer\u4E0D\u518D\u57F7\u884C\u672A\u5C0D\u9F4A\u7684\u8A18\u61B6\u9AD4\u8A2A\u554F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `vApplicationIdleHook\uFF08\u7279\u5B9A\u65BCFreeRTOS\uFF09\u904E\u53BB\u6703\u963B\u6B62FreeRTOS\u5728\u4EFB\u52D9\u88AB\u522A\u9664\u6642\u91CB\u653E\u5B58\u5132\u7A7A\u9593\uFF0C\u73FE\u5728\u4E0D\u518D\u963B\u6B62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u80FD\u6B63\u78BA\u5730\u6E32\u67D3\u4E2D\u9593\u6709\u91CD\u97F3\u7684\u963F\u62C9\u4F2F\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86PixelDataWidget::getAlpha()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EE5char*\u4F5C\u70BA\u6E90\u7684Unicode::strncpy()\u4E0D\u80FD\u6B63\u78BA\u5730\u8907\u88FD\u542B\u5927\u65BC127\u7684ascii\u78BC\u7684\u5B57\u5143\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-450"
  }), `\u7248\u672C4.5.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2016\u5E742\u67082\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F4\u5169\u7A2E\u65B0\u8A9E\u8A00\uFF0C\u5373\u963F\u62C9\u4F2F\u8A9E\u548C\u5E0C\u4F2F\u4F86\u8A9E\uFF0C\u5F9E\u53F3\u81F3\u5DE6\u9032\u884C\u6587\u5B57\u6E32\u67D3\u3002 RTL\u5B57\u4E32\u53EF\u8207LTR\u6587\u5B57\u548C\u6578\u4F4D\u76F8\u6DF7\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F4\u6BCF\u5716\u514324\u4F4D\u5143\u7684\u5E40\u7DE9\u885D\u3002 \u5716\u50CF\u770B\u8D77\u4F86\u7D30\u7BC0\u66F4\u8C50\u5BCC\uFF0C\u4F46\u6703\u6D88\u8017\u66F4\u591A\u5B58\u5132\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u53EF\u4EE5\u5728\u57F7\u884C\u6642\u9593\u4F7F\u7528Bitmap::dynamicBitmapCreate\u65B9\u6CD5\u5275\u5EFA\u9EDE\u9663\u5716\u3002 \u5728\u8AF8\u5982\u986F\u793A\u5F9ESD\u5361\u8F09\u5165\u7684.bmp\u6A94\u7B49\u60C5\u6CC1\u4E0B\u6709\u7528\u3002 \u53C3\u898Bdynamic_bitmap_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E40\u7387\u88DC\u511F\u7279\u6027\u5728\u5E40\u7387\u5076\u723E\u4E0B\u964D\u6642\u63D0\u4F9B\u66F4\u9806\u66A2\u7684\u52D5\u756B\u3002 \u9ED8\u8A8D\u4E0D\u555F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F37\u5316\u4E86\u9EDE\u9663\u5716\u7DE9\u5B58\uFF0C\u4EE5\u4FBF\u80FD\u5920\u5F9E\u7DE9\u5B58\u4E2D\u522A\u9664\u9EDE\u9663\u5716\uFF0C\u70BA\u7DE9\u5B58\u5176\u4ED6\u4F4D\u5716\u9A30\u51FA\u7A7A\u9593\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F15\u5165\u4E86\u65B0\u7684\u5C0F\u90E8\u4EF6PixelDataWidget\u3002 \u6B64\u5C0F\u90E8\u4EF6\u80FD\u5920\u986F\u793A\u5728\u57F7\u884C\u6642\u9593\u7372\u5F97\u7684\u539F\u59CB\u5716\u5143\u8CC7\u6599\uFF08\u5982\u5F71\u7247\u6A23\u4F8B\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Windows\u4E0A\u53EF\u57F7\u884C\u7684\u6A21\u64EC\u5668\u73FE\u5728\u6709\u4E00\u500B\u5716\u793A\uFF0C\u65B9\u4FBF\u5728\u5DE5\u4F5C\u5217\u4E2D\u8B58\u5225\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u652F\u63F4\u7684ST\u677F\u73FE\u5728\u53EF\u4EE5\u4F7F\u7528\u201Cmake intflash\u201D\u5F9E\u6307\u4EE4\u7A0B\u5F0F\u8A2D\u8A08\u5167\u90E8Flash\uFF0C\u524D\u63D0\u662F\u5B89\u88DD\u4E86ST-Link Utility\u7248\u672C3.7+\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u652F\u6301\u66F4\u591A\u6A19\u6E96\u683C\u5F0F\u8AAA\u660E\u7B26\uFF08\u5982%02d\uFF09\uFF0C\u5DF2\u5927\u5E45\u6539\u5584\u4E26\u66F4\u65B0\u4E86Unicode::snprintf()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u652F\u6301\u6D6E\u9EDE\u578B\u589E\u52A0\u4E86Unicode::snprintfFloat()\uFF08\u5728\u55AE\u7368\u7684\u51FD\u6578\u4E2D\uFF0C\u56E0\u70BA\u201C%f\u201Dva_args\u65B9\u6CD5\u6703\u5F37\u5236\u5305\u542B\u96D9\u7CBE\u5EA6\u6D6E\u9EDE\u578B\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u5716\u50CF\u8F49\u63DB\u5668\u6296\u52D5\u54C1\u8CEA\uFF08\u6D6E\u9EDE\u904B\u7B97\uFF09\u3002 \u6B64\u5916\uFF0C\u9084\u589E\u52A0\u4E86\u5C0D\u65B0\u7684\u6296\u52D5\u6F14\u7B97\u6CD5\u985E\u578B\u7684\u652F\u63F4\uFF0C\u4E26\u4E14\u53EF\u8003\u616E\u5177\u670916/18\u4F4D\u986F\u793A\u5668\u4E2D\u5404\u7A2E\u4F4E\uFF08\u672A\u4F7F\u7528\uFF09\u4F4D\u5143\u9023\u7DDA\u7684\u786C\u9AD4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::ButtonWithLabel\u73FE\u5728\u5305\u542BupdateTextPosition()\u65B9\u6CD5\uFF0C\u53EF\u5728\u4FEE\u6539\u6A19\u7C64\u5167\u5BB9\uFF08\u5982\u4FEE\u6539\u8A9E\u8A00\uFF09\u6642\u78BA\u4FDD\u6C34\u6E96\u6587\u5B57\u5C45\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::TextArea\u5177\u6709\u65B0\u7684setBaselineY()\u65B9\u6CD5\uFF0C\u5141\u8A31\u6839\u64DA\u6587\u5B57\u57FA\u7DDA\u800C\u4E0D\u662F\u5DE6\u4E0A\u89D2\u4F48\u7F6E\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u5B57\u5F62\u7DE8\u78BC\u7684\u5167\u90E8\u683C\u5F0F\u5C07\u7B2C\u4E00\u500B\u50CF\u7D20\u5B58\u5132\u5728\u6700\u4F4E\u6709\u6548\u4F4D\u5143\u800C\u4E0D\u662F\u6700\u9AD8\u6709\u6548\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u652F\u630116\u820724\u4F4D\u8272\u5F69\u4E4B\u9593\u7684\u7121\u7E2B\u5207\u63DB\uFF0C\u8272\u5F69\u503C\u7684\u898F\u683C\u5DF2\u5F9Euint16_t\u5207\u63DB\u70BAcolortype\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0Ctouchgfx::TextArea\u985E\u6709setIndentation()\u65B9\u6CD5\uFF0C\u53EF\u9632\u6B62\u5B57\u5143\u5B57\u5F62\u5728\u5EF6\u4F38\u5230\u524D\u4E00\u500B\u5B57\u5143\u4E0B\u65B9\u7684\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\u88AB\u5207\u5272\uFF08\u5177\u6709\u65B0\u7684setTextIndentation()\u65B9\u6CD5\u7684touchgfx::Keyboard\u985E\u540C\u6A23\u5982\u6B64\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F7xx\u548CSTM32F4x9\u57E0\u73FE\u5728\u652F\u63F4touchgfx::Box\u7684DMA\u50B3\u8F38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E4B\u524D\u53EA\u5C0D\u201CVSYNC\u201D\u4E2D\u65B7\u201C\u5207\u63DB\u201DGPIO::VSYNC_FREQ\u4FE1\u865F (NXP LPC18xx\u3001NXP LPC43xx\u3001Freescale MK70F12\u548CST stm32f4x9\uFF09\u3002 \u73FE\u5728\uFF0C\u6B64\u4FE1\u865F\u5728\u201CVSYNC\u201D\u4E2D\u65B7\u4E0A\u70BA\u9AD8\u96FB\u5E73\uFF0C\u5728\u201CFront-Porch-Entered\u201D\u4E2D\u65B7\u4E0A\u70BA\u4F4E\u96FB\u5E73\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M3\u7684GCC\u652F\u6301\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32F7\u4E0A\u6975\u5C11\u767C\u751F\u7684\u7531\u7121\u6548QSPI\u5B58\u5132\u5340\u7684\u63A8\u6E2C\u6027\u7DE9\u5B58\u5C0E\u81F4\u7684\u6545\u969C\u3002 \u5982\u679C\u57FA\u65BC\u7248\u672C4.4.x\uFF0C\u5247\u66F4\u65B0BoardConfiguration\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32F746G-DISCO\u677F\u4E0A\u5C0DFMC\u5B58\u5132\u53401\u7684\u7DE9\u5B58\u8A2A\u554F\u5C0E\u81F4\u7684\u5076\u767C\u986F\u793A\u5E55\u9583\u720D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u9632\u6B62\u5728\u67D0\u4E9B\u7279\u6B8A\u60C5\u6CC1\u4E0B\u63D2\u5165%%\uFF0C\u6539\u5584\u4E86touchgfx::TextAreaWithWildcards\u4E2D\u5B57\u5143\u201C%\u201D\u201D\u7684\u8655\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::DragEvent\u548Ctouchgfx::GestureEvent\u73FE\u5728\u4F7F\u7528\u548C\u5831\u544A\u6709\u7B26\u865F\u800C\u4E0D\u662F\u7121\u7B26\u865F\u7684\u5EA7\u6A19\u3002 \u7531\u65BC\u62D6\u52D5/\u624B\u52E2\u662F\u7528\u76F8\u5C0D\u65BC\u63A5\u6536\u5B83\u5011\u7684\u53EF\u7E6A\u88FD\u7269\u4EF6\u7684\u5EA7\u6A19\u8868\u793A\u7684\uFF0C\u56E0\u6B64\u9019\u6A23\u66F4\u52A0\u5408\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `snprintf(\u201D%x\u201D)\u6703\u751F\u6210\u5927\u5BEB\u5B57\u6BCD\u5341\u516D\u9032\u4F4D\u3002 \u73FE\u5728\uFF0C\u201C%X\u201D\u751F\u6210\u5927\u5BEB\u5B57\u6BCD\u5341\u516D\u9032\u4F4D\uFF0C\u201D%x\u201D\u751F\u6210\u5C0F\u5BEB\u5B57\u6BCD\u5341\u516D\u9032\u4F4D\uFF0C\u5C31\u50CF\u6A19\u6E96snprintf() \u4E00\u6A23\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728Linux\u4E0A\u904B\u884C\u6642\u6F14\u793A\u7684\u96A8\u6A5F\u6027\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528\u56B4\u91CD\u50BE\u659C\u5B57\u9AD4\u6642\u7684\u91CD\u7E6A\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6240\u6709TouchGFX\u61C9\u7528\u7684Model\u985E\u4E2D\u6307\u5411ModelListener\u7684\u6307\u6A19\u5747\u672A\u6B63\u78BA\u521D\u59CB\u5316\uFF08NULL\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C0Dtouchgfx::TextArea\u4E2D\u56B4\u91CD\u50BE\u659C\u5B57\u9AD4\u7684\u652F\u63F4\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5716\u50CF\u8F49\u63DB\u5668\u4E2D\u7684\u7D30\u5FAE\u932F\u8AA4\uFF0C\u52170\u53EF\u80FD\u7372\u5F97\u7A0D\u6709\u932F\u8AA4\u7684\u50CF\u7D20\u8272\u5F69\u3002 \u56E0\u6B64\uFF0C\u6574\u500B\u5716\u50CF\u53EF\u80FD\u7A0D\u6709\u932F\u8AA4\uFF0C\u53EF\u80FD\u4E0D\u660E\u986F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6ED1\u584A\u4E2D\u7684\u7D30\u5FAE\u932F\u8AA4\uFF0C\u503C\u7684\u5206\u4F48\u4E0D\u5747\u52FB\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u68C4\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD::drawGlyph()\u5DF2\u68C4\u7528\u3002 \u6539\u70BA\u4F7F\u7528LCD::drawString\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u5BB9\u73FE\u67094.x\u61C9\u7528\u548CHAL\u57E0\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-442"
  }), `\u7248\u672C4.4.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2015\u5E7411\u670826\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728STM32F7\u76EE\u6A19\u4E0A\u7528IAR 7.x\u7DE8\u8B6F\u6642\u7F55\u898B\u7684GUI\u4EFB\u52D9\u639B\u8D77\u554F\u984C\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-441"
  }), `\u7248\u672C4.4.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2015\u5E7410\u670827\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u932F\u8AA4\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728STM32F7\u76EE\u6A19\u786C\u9AD4\u4E0A\u7528Keil 5.x\u7DE8\u8B6F\u6642\u5076\u767C\u7684GUI\u4EFB\u52D9\u639B\u8D77\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32 F469\u8A55\u4F30/\u63A2\u7D22\u677F\u4E0A\u5728\u6A6B\u5C4F\u548C\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u5340\u6A21\u5F0F\u4E0B\u4F7F\u7528DSI\u6642\u5076\u767C\u7684\u6495\u88C2\u6548\u61C9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u652F\u6301\u5167\u90E8Flash\u7A0B\u5F0F\u8A2D\u8A08\uFF0C\u4FEE\u6B63\u4E86STM32 F469\u677F\u7684IAR\u5FEB\u9583\u8A18\u61B6\u9AD4\u8F09\u5165\u5668\u8A2D\u7F6E\uFF08\u6CE8\u610F\uFF1AQuadSPI Flash\u4ECD\u7136\u5FC5\u9808\u5F9EST-Link Utility\u9032\u884C\u7A0B\u5F0F\u8A2D\u8A08\uFF0C\u56E0\u70BA\u6C92\u6709\u7528\u65BC\u6B64\u7528\u9014\u7684IAR\u8F09\u5165\u5668\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G\u8A55\u4F30\u677Fperf.\u6E2C\u91CF\u7684GPIO\u985E \u73FE\u5728\u80FD\u6B63\u78BA\u4F7F\u7528BSP_LED\u51FD\u6578\u3002 \u8ACB\u6CE8\u610F\uFF0C\u7531\u65BCLED2\u548CLED4\u4F7F\u7528IO\u64F4\u5C55\u5668\uFF0C\u4F7F\u4E4B\u4E0D\u9069\u5408\u6E2C\u91CF\u6027\u80FD\uFF0C\u56E0\u6B64\u6B64\u677F\u4E0A\u9810\u8A2D\u53EA\u6709\u5169\u500B\u4FE1\u865F\u6709\u6548\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86\u5728\u8ABF\u8A66Cortex-M7\u61C9\u7528\u6642\uFF0CIAR Workbench\u4E2D\u5F48\u51FA\u7684\u60F1\u4EBA\u7684\u201C\u7372\u53D6\u66FF\u4EE3\u6587\u4EF6\u201D\u5C0D\u8A71\u65B9\u584A\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-440"
  }), `\u7248\u672C4.4.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2015\u5E7410\u67086\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DCortex-M7\u5167\u6838\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u89F8\u5C4F\u8F38\u5165\u5F15\u5165\u4E86\u201C\u624B\u6307\u5927\u5C0F\u201D\u7684\u6982\u5FF5\u3002 \u5728\u4F7F\u7528\u6642\uFF0CTouchGFX\u6703\u5617\u8A66\u5728\u5831\u544A\u7684x\u3001y\u5EA7\u6A19\u5468\u570D\u5340\u57DF\u627E\u5230\u53EF\u89F8\u6478\u7684\u5C0F\u5DE5\u5177\uFF0C\u56E0\u6B64\u7528\u6236\u4E0D\u5FC5\u518D\u7CBE\u78BA\u5730\u9EDE\u64CA\u5C0F\u5DE5\u5177\u3002 \u6B64\u7279\u6027\u6975\u5927\u5730\u65B9\u4FBF\u4E86\u5C0F\u6309\u9215\u7684\u9EDE\u64CA\u3002 \u53C3\u898BHAL::setFingerSize()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301Visual Studio 2015`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u70BA\u4FBF\u65BC\u5FEB\u901F\u8A2A\u554F\uFF0C\u6F14\u793A\u548C\u7BC4\u4F8B\u7684Visual Studio\u5C08\u6848\u5728Resources\u4E0B\u5305\u542B\u4E86Application.props\u3002 \u5728\u4FEE\u6539Application.props\u5167\u5BB9\u6642\uFF0C\u901A\u5E38\u53EF\u80FD\u9700\u8981\u91CD\u5EFA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F4BDF\u683C\u5F0F\u7684\u9EDE\u9663\u5B57\u9AD4\u3002 \u5982\u679C\u5B57\u9AD4\u6A94\u4E2D\u6C92\u6709\u8981\u6C42\u7684\u5B57\u578B\u5927\u5C0F\u53EF\u7528\uFF0C\u5B57\u9AD4\u8F49\u63DB\u5668\u6703\u5728\u932F\u8AA4\u8CC7\u8A0A\u4E2D\u5BEB\u5165\u652F\u63F4\u7684\u5B57\u578B\u5927\u5C0F\u3002 \u53C3\u898B\u7BC4\u4F8Bmonochrome_example\u77AD\u89E3\u4F7F\u7528\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u7576\u5728\u8DEF\u5F91\u548C\u6A94\u6848\u540D\u4E2D\u6AA2\u6E2C\u5230\u7A7A\u683C\u6642\uFF0C\u751F\u6210\u8CC7\u7522\u6703\u767C\u51FA\u66F4\u512A\u8CEA\u7684\u932F\u8AA4\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6240\u6709ST\u677F\u73FE\u5728\u90FD\u53EF\u4EE5\u5F9E\u6307\u4EE4\u884C\u9032\u884C\u5237\u5BEB\uFF0C\u524D\u63D0\u662F\u5B89\u88DD\u4E86ST-Link Utility\u7248\u672C3.7\u3002 \u53EA\u9700\u4F7F\u7528\u201Cmake -f target`, `<`, `ST/`, `<`, `board>`, `>`, `Makefile flash\u201D \u69CB\u5EFA\u61C9\u7528\u4E26\u5C07\u5176\u5237\u5BEB\u5230\u9023\u63A5\u7684\u677F\u3002 \u5982\u679C\u5237\u5BEB\u671F\u9593\u767C\u751F\u8D85\u6642\uFF0C\u8F49\u81F3Windows\u4E2D\u7684\u88DD\u7F6E\u7BA1\u7406\u54E1\u4E26\u7981\u7528\u201C\u78C1\u789F\u6A5F\u201D\u4E0B\u7684\u201CMBED\u5FAE\u63A7\u5236\u5668USB\u8A2D\u5099\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684touchgfx-env\u7248\u672C2.5\u5177\u6709\u65B0\u7684gcc\u4EA4\u53C9\u7DE8\u8B6F\u5668\u7248\u672C4.9.3\u3002 \u820A\u7248\u672C4.8.4\u5728\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\u53EF\u80FD\u751F\u6210Cortex-M7\u5167\u6838\u7684\u7121\u6548\u7A0B\u5F0F\u78BC\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u958B\u767C\u677F\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DSTM32F7xx\u8655\u7406\u5668\u7684\u652F\u63F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DSTM32F746G-DISCO\u548CSTM32756G-EVAL\u677F\u7684\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u5177\u6709DSI\u986F\u793A\u5668\u7684STM32F469\u8655\u7406\u5668\u7684\u652F\u63F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DSTM32469I-EVAL\u548CSTM32469I\u63A2\u7D22\u677F\u7684\u652F\u6301`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u5728\u4F7F\u7528\u201Crotate90\u201D\u6642\uFF0CTextureMapper\u548CScaleableImage\u80FD\u5920\u6B63\u78BA\u5730\u7E6A\u88FD\u5716\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32F4DMA.cpp\u4E2D\u6F5B\u5728\u7684\u521D\u59CB\u5316\u9806\u5E8F\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E00\u7A2E\u5B57\u9AD4\u4E2D\u5B57\u5F62\u7684\u6578\u91CF\u88AB\u9650\u5236\u572832768\u500B\u7684\u554F\u984C\u3002 \u73FE\u5728\uFF0C\u6839\u64DA\u9810\u5B9A\u652F\u63F4\u6BCF\u7A2E\u5B57\u9AD465536\u500B\u5B57\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C0E\u81F4hal.lockDMAToFrontPorch(false)\u5728\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u5340\u6A21\u5F0F\u4E0B\u7121\u4EFB\u4F55\u4F5C\u7528\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7576\u6587\u5B57\u5305\u542B\u65B0\u6587\u5B57\u884C\u6642\uFF0CButtonWithLabel\u80FD\u6B63\u78BA\u5730\u5782\u76F4\u5C0D\u4E2D\u6587\u5B57\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-430"
  }), `\u7248\u672C4.3.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2015\u5E746\u67088\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86TextureMapper\u5C0F\u90E8\u4EF6\u3002 TextureMapper\u662F\u4E00\u7A2E\u9AD8\u5EA6\u512A\u5316\u7684\u5716\u50CF\u6E32\u67D3\u5668\uFF0C\u53EF\u7528\u65BC\u986F\u793A\u5728\u57F7\u884C\u6642\u9593\u5728\u5169\u500B\u6216\u4E09\u500B\u7DAD\u5EA6\u4E0A\u7E2E\u653E\u548C/\u6216\u65CB\u8F49\u904E\u7684\u5716\u50CF\u3002 \u9019\u53EF\u7528\u65BC\u88FD\u4F5C\u5716\u50CF\u7684\u9AD8\u7D1A\u65CB\u8F49\u52D5\u756B\u3002 \u53C3\u898B\u624B\u518A\u6216texture_mapper_example\u77AD\u89E3\u66F4\u591A\u8CC7\u8A0A\u3002 LCD\u6709\u65B0\u7684\u7E6A\u88FD\u4E09\u89D2\u5F62\u548C\u76F8\u61C9\u6383\u63CF\u7DDA\u7684\u65B9\u6CD5\uFF0C\u5373drawTextureMapTriangle\u548CdrawTextureMapScanLine\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Alpha\u901A\u9053\u6296\u52D5\u3002 \u73FE\u5728\uFF0C\u70BA\u5BE6\u73FE\u66F4\u6D41\u66A2\u7684alpha\u6F38\u8B8A\uFF0C\u53EF\u4EE5\u5C0D\u6709alpha\u901A\u9053\u7684\u5716\u50CF\u7684alpha\u901A\u9053\u4F7F\u7528\u6296\u52D5\u529F\u80FD\uFF0C\u53C3\u898B\u7BC4\u4F8B\u6216\u624B\u518A\u4E2D\u7684\u201C\u61C9\u7528\u958B\u767C\u201D\u4E00\u7BC0\u77AD\u89E3\u8A73\u7D30\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1BPP\uFF08\u55AE\u8272\uFF09\u9EDE\u9663\u5716\u58D3\u7E2E\u3002 \u589E\u52A0\u4E86BW_RLE\u7684\u5716\u50CF\u683C\u5F0F\u9078\u9805\uFF0C\u5982\u679C\u4F54\u7528\u7684\u7A7A\u9593\u5C11\u65BC\u5E38\u898F\u6BCF\u5716\u5143\u683C\u5F0F\uFF0C\u5C07\u5C0E\u81F4\u9EDE\u9663\u5716\u7684\u81EA\u52D5\u904B\u884C\u9577\u5EA6\u7DE8\u78BC\u3002 \u5728\u8A31\u591A\u60C5\u6CC1\u4E0B\uFF0C\u9EDE\u9663\u5716\u7684\u7A7A\u9593\u5360\u7528\u91CF\u6703\u986F\u8457\u6E1B\u5C11\u3002 \u53C3\u898B\u624B\u518A\u4E2D\u7684\u201C\u9AD8\u7D1A\u201D\u4E00\u7AE0\u77AD\u89E3\u8A73\u7D30\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u6ED1\u584A\u5C0F\u90E8\u4EF6\u3002 \u53C3\u898B\u624B\u518A\u6216slider_example\u77AD\u89E3\u66F4\u591A\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u914D\u5408make-4.1\uFF0C\u66F4\u65B0\u4E86Makefiles\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DLPC4088\u8655\u7406\u5668\u548CEmbedded Artists LPC4088 Display Module\u677F\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u901A\u904E\u5728\u9EDE\u9663\u5716\u6A94\u6848\u540D\u4E2D\u5305\u542B\u5B57\u4E32\u201C.int.\u201D\uFF0C\u53EF\u5C07\u55AE\u7368\u7684\u9EDE\u9663\u5716\u653E\u5165\u5167\u90E8\u800C\u4E0D\u662F\u5916\u90E8Flash\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MoveAnimator\u3001FadeAnimator\u548CZoomAnimationImage\u73FE\u5728\u6709cancelMoveAnimation/cancelFadeAnimation/cancelZoomAnimation\u65B9\u6CD5\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u5BB9\u73FE\u67094.X\u61C9\u7528\u3002 \u53EA\u9700\u66FF\u63DBtouchgfx\u8CC7\u6599\u593E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6AA2\u67E5\u6587\u6A94\u4E2D\u7684\u201C\u5DF2\u77E5\u554F\u984C\u201D\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Info`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u96A8TouchGFX\u7684\u8A55\u4F30\u7248\u672C\u5206\u767C\u786C\u9AD4\u62BD\u8C61\u5C64\u539F\u59CB\u7A0B\u5F0F\u78BC\u800C\u4E0D\u662F\u9810\u7DE8\u8B6F\u5EAB\u3002 \u56E0\u6B64\uFF0C\u80FD\u5920\u5C07\u8A55\u4F30\u7248\u672C\u79FB\u690D\u5230\u5BA2\u88FD\u786C\u9AD4\uFF0C\u800C\u4E0D\u662F\u50C5\u9650\u65BC\u652F\u6301\u7684\u8A55\u4F30\u677F\u3002 \u76F8\u53CD\u5730\uFF0C\u8A55\u4F30\u7248\u672C\u73FE\u5728\u6709TouchGFX\u6D6E\u6C34\u5370\uFF0C\u6709\u6642\u6703\u986F\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7531\u65BC\u6539\u9032\u4E86\u6E32\u67D3\u6F14\u7B97\u6CD5\uFF0C\u5B58\u5132\u7A7A\u9593\u6D88\u8017\u91CF\u4E0B\u964D\u3002 \u76F8\u6BD4\u65BC\u7248\u672C4.2.0\uFF0C\u901A\u5E38\u80FD\u5920\u5C07GUI\u4EFB\u52D9\u68E7\u7E2E\u5C0F\u7D041400\u4F4D\u5143\u7D44\uFF08\u5177\u9AD4\u53D6\u6C7A\u65BC\u5BE6\u969B\u61C9\u7528\uFF09\u3002 \u6B64\u5916\uFF0C\u975C\u614B\u914D\u7F6E\u5B58\u5132\u7A7A\u9593\u4E5F\u80FD\u6E1B\u5C11\u7D041KB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u522A\u9664\u4E86\u53EF\u898B\u5C0F\u90E8\u4EF6\u7684\u6578\u91CF\u4E0A\u9650150\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA640x480\u548C480x272\u89E3\u6790\u5EA6\u589E\u52A0\u4E86\u5169\u500B\u65B0\u7684\u6F14\u793A\uFF0C\u5C55\u73FE\u65B0\u7279\u6027\u3001\u5716\u8868\u3001\u570B\u969B\u5316\u548C\u5BA2\u88FD\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CDrawable.setPosition()\u547C\u53EBsetXY()\u3001setWidth()\u548CsetHeight()\u4EE5\u65B9\u4FBF\u5B50\u985E\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u5BE6\u73FE\u81EA\u5DF1\u7684\u7E6A\u5716\u5DE5\u5177\u6642\uFF0C\u63A8\u85A6\u4F7F\u7528AbstractPainterRGB565\u548CAbstractPainterBW\u4F5C\u70BA\u57FA\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidgets\u73FE\u5728\u6709setAlpha()\u548CgetAlpha()\u65B9\u6CD5\u3002 \u60A8\u7684\u5BA2\u88FDPainter\u985E\u5FC5\u9808\u5BE6\u73FE\u9019\u4E00\u9EDE\uFF0C\u6216\u8005\u7E7C\u627F\u81EAAbstractPainterRGB565\u985E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5DF2\u8A3B\u518A\u8A08\u6642\u5668\u5C0F\u5DE5\u5177\u7684\u6700\u5927\u6578\u91CF\u5F9E16\u589E\u52A0\u81F324\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx-env\u66F4\u65B0\u81F32.4\u3002 \u74B0\u5883\u4E0D\u518D\u767C\u51FA\u8702\u9CF4\u8072\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CSTM324x9I-EVAL\u7684\u677F\u652F\u63F4\u5957\u4EF6\u57FA\u65BCSTMCubeF4\u9A45\u52D5\u7A0B\u5F0F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CScreen::handleGestureEvent\u5C07x/y\u8F49\u63DB\u70BA\u76F8\u5C0D\u5EA7\u6A19\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u540C\u4E00\u756B\u5E03\u4E0A\u591A\u6B21\u4F7F\u7528moveTo() \u7E6A\u88FD\u591A\u500B\u7269\u4EF6\u6642\u767C\u751F\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u5C0D\u65BC\u7E2E\u653E\u6BD4\u4F8B\u7684ZoomAnimationImage\u79FB\u52D5\u672A\u4F7F\u7528\u6B63\u78BA\u7684\u7DE9\u52D5\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PainterRGB565\u672A\u6B63\u78BA\u6DF7\u5408\u7DA0\u8272alpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RadioButtonGroup\u73FE\u5728\u5C07\u56DE\u6A94\u521D\u59CB\u5316\u70BA\u96F6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScalableImage\u73FE\u5728\u53EF\u4F7F\u7528\u6709\u900F\u660E\u5EA6\u7684\u9EDE\u9663\u5716\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage\u6703\u5169\u6B21\u986F\u793A\u52D5\u756B\u7684\u8D77\u9EDE\u548C\u7D42\u9EDE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidget::getMinimalRect()\u7684\u9ED8\u8A8D\u5BE6\u73FE\u8FD4\u56DE\u4E86\u76F8\u5C0D\u4E8E\u5176\u7236\u800C\u975E\u5176\u81EA\u8EAB\u7684\u5EA7\u6A19\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u932F\u8AA4\u5730\u5728\u6BCF\u500Btick\u5C07\u5176\u81EA\u8EAB\u4F5C\u70BA\u8A08\u6642\u5668\u5C0F\u5DE5\u5177\u53D6\u6D88\u8A3B\u518A\uFF0C\u4F7F\u4E4B\u96E3\u4EE5\u8207\u5176\u4ED6\u57FA\u65BC\u8A08\u6642\u5668\u7684\u64CD\u4F5C\u4E00\u8D77\u4F7F\u7528\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u7372\u5F97\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u512A\u5316\u4E86ScalableImage\u548CZoomAnimationImage\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-420"
  }), `\u7248\u672C4.2.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2015\u5E741\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u986F\u8457\u6539\u5584\u4E86\u6E32\u67D3\u6027\u80FD\uFF0C\u5728\u5927\u591A\u6578\u60C5\u6CC1\u4E0B\u6703\u5C0E\u81F4\u6E32\u67D3\u5E40\u6240\u9700\u7684\u6642\u9593\u7E2E\u77ED25%\u3002 \u6CE8\u610F\uFF1A\u6B64\u512A\u5316\u4E0D\u4E00\u5B9A\u5728\u6240\u6709\u76EE\u6A19\u786C\u9AD4\u4E0A\u90FD\u8D77\u4F5C\u7528\uFF0C\u56E0\u6B64\u5FC5\u9808\u624B\u52D5\u555F\u7528\u3002 \u53C3\u898B\u79FB\u690D\u6307\u5357\u4E2D\u7684\u201C\u512A\u5316\u201D\u4E00\u7AE0\u77AD\u89E3\u5982\u4F55\u5C0D\u73FE\u6709\u79FB\u690D\u555F\u7528\u6B64\u512A\u5316\u3002 \u5F37\u70C8\u5EFA\u8B70\u555F\u7528\u512A\u5316\u3002 \u6B64\u512A\u5316\u5C0D4.2.0\u677F\u5957\u4EF6\u4E2D\u7684\u6240\u6709\u5408\u9069\u8A55\u4F30\u677F\u555F\u7528\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u4E3B\u8981\u7684\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u7372\u5F97\u5E73\u6ED1\u7684\u6297\u92F8\u9F52\u5716\u5F62\u5F62\u72C0\u7E6A\u88FD\u6548\u679C\uFF0C\u589E\u52A0\u4E86CanvasWidgets\u3002 \u76EE\u524D\uFF0C\u5DF2\u5BE6\u73FE\u4E86Line\u3001Circle\u548C\u66F4\u591A\u666E\u901A\u5F62\u72C0\u3002 CanvasWidgets\u53EF\u7528\u5BE6\u8272\uFF08+ alpha\uFF09\u3001\u9EDE\u9663\u5716\uFF08\u5305\u62ECalpha\uFF09\u6216\u5BA2\u88FD\u7E6A\u5716\u90E8\u4EF6\u9032\u884C\u7E6A\u88FD\u3002 \u95B1\u8B80\u6587\u6A94\u4E2D\u95DC\u65BC\u756B\u5E03\u5C0F\u5DE5\u5177\u548C\u7E6A\u5716\u5DE5\u5177\u7684\u66F4\u591A\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DKeil\u7DE8\u8B6F\u5668\u548CuVision4 IDE\u7684\u652F\u6301\u3002 \u8ACB\u53C3\u95B1\u201CTouchGFX\u5206\u767C\u201D\u4E00\u7AE0\u4E2D\u201C\u652F\u63F4\u7684\u786C\u9AD4\u201D\u4E00\u7BC0\u7372\u53D6Keil\u652F\u63F4\u7684\u76EE\u6A19\u786C\u9AD4\u6E05\u55AE\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u53EF\u4EE5\u5728ZoomAnimationImage\u3001MoveAnimator\u548CFadeAnimator\u4E0A\u6307\u5B9A\u52D5\u756B\u555F\u52D5\u5EF6\u9072\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D4.3\u201D TouchGFX\u6F14\u793A\u677F\u7684\u958B\u767C\u677F\u652F\u63F4\u3002 LPC4350\uFF08\u7121\u5167\u90E8Flash\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86RadioButton\u548CRadioButtonGroup\u5C0F\u90E8\u4EF6\u3002 \u53C3\u898Bapp/examples/radio_button_example\u548C\u6587\u6A94\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LPC43XX\u548CLPC1788\u73FE\u5728\u53EF\u4EE5\u7528DMA\u586B\u5145\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\u652F\u6301Visual Studio 2013\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C0DVisual Studio 2015\u9810\u89BD\u7248\u672C\u7684\u521D\u6B65\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u751F\u6210\u8CC7\u7522\u6642\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5411\u7BC4\u4F8B\u76EE\u9304\u4E2D\u589E\u52A0\u4E86\u65B0\u7684canvas_widget_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0C\u5B58\u5728\u65BC\u5404\u7A2E\u6A19\u982D\u6A94\u4E2D\u7684\u201C\u4F7F\u7528\u547D\u540D\u7A7A\u9593touchgfx\u201D\u53EF\u901A\u904E\u5728\u5C08\u6848\u4E2D\u5B9A\u7FA9\u7B26\u865FNO_USING_NAMESPACE_TOUCHGFX\u4F86\u907F\u514D\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX env`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7528\u7BC4\u4F8B\u7684\u6B63\u78BA\u8DEF\u5F91\u4FEE\u6B63\u4E86\u555F\u52D5shell\u6642\u986F\u793A\u7684\u8CC7\u8A0A\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7576\u5BEC\u5EA6\u548C/\u6216\u9AD8\u5EA6\u4E0D\u662F8\u7684\u500D\u6578\u66421bpp\u986F\u793A\u5668\u6A21\u64EC\u5668\u4E2D\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86ScrollableContainer\u4E2DCANCEL\u4E8B\u4EF6\u4E26\u975E\u7E3D\u662F\u59D4\u8A17\u7D66\u6B63\u78BA\u7684\u5B50\u5BB9\u5668\uFF0C\u5C0E\u81F4\u8AF8\u5982\u5728SC\u5340\u57DF\u4E4B\u5916\u62D6\u52D5\u6642\u6309\u9215\u7DAD\u6301\u6309\u4E0B\u72C0\u614B\u7B49\u554F\u984C\u7684\u932F\u8AA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u65CB\u8F49\u4E86\u986F\u793A\u5668\u7684\u60C5\u6CC1\u4E0B\u6E32\u67D3chromArt\u5B57\u9AD4\u6642\u767C\u751F\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u9375\u76E4\u5C0F\u90E8\u4EF6setTouchable(false)\u4E0D\u8D77\u4F5C\u7528\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freescale K70 DMA\u73FE\u5728\u6703\u6AA2\u67E5TCD0_CSR\u4E2D\u7684\u5408\u9069DONE\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728ST\u8655\u7406\u5668\u4E0A\u4FEE\u6B63\u4E86\u5728\u975E\u539F\u751F\u986F\u793A\u5668\u65B9\u5411\u4E0BChromArt\u6E32\u67D3\u65CB\u8F49\u904E\u7684\u6587\u5B57\u6642\u767C\u751F\u7684\u554F\u984C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u958B\u767C\u677F\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Embedded Artists LPC4357DevKit\u677F\u5957\u4EF6\uFF1ACPU\u6642\u9418\u983B\u7387\u70BA204Mhz\uFF08\u4E4B\u524D\u70BA96Mhz\uFF09\u3002 \u73FE\u5728\uFF0C\u4F7F\u7528SPIFI\u5FEB\u9583\u8A18\u61B6\u9AD4\u800C\u4E0D\u662FNOR\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u5BB9\u73FE\u67094.X\u61C9\u7528\u3002 \u53EA\u9700\u66FF\u63DBtouchgfx\u8CC7\u6599\u593E\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Info`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u6587\u6A94\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-411"
  }), `\u7248\u672C4.1.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2014\u5E7410\u670829\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Mixin\uFF1A\u589E\u52A0\u4E86MoveAnimator\u3002 MoveAnimator mixin\u4F7F\u7BC4\u672C\u985ET\u80FD\u5920\u5C07\u5F9E\u5176\u7576\u524D\u4F4D\u7F6E\u5230\u6307\u5B9A\u7D50\u675F\u4F4D\u7F6E\u7684\u904B\u52D5\u52D5\u756B\u5316\u3002 \u53C3\u898Bapp/example/move_fade_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Mixin\uFF1A\u589E\u52A0\u4E86FadeAnimator\u3002 FadeAnimator mixin\u4F7F\u7BC4\u672C\u985ET\u80FD\u5920\u5C07\u5F9E\u5176\u7576\u524Dalpha\u503C\u5230\u6307\u5B9A\u7D50\u675Falpha\u503C\u7684alpha\u6D88\u96B1\u52D5\u756B\u5316\u3002 \u53C3\u898Bapp/example/move_fade_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CScalableImage\u548CZoomAnimationImage\u652F\u63F4\u6309\u50CF\u7D20\u8A2D\u7F6Ealpha\u548C\u6309\u9EDE\u9663\u5716\u8A2D\u7F6Ealpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScalableImage\u548CZoomAnimationImage\u73FE\u5728\u652F\u6301ARGB8888\u683C\u5F0F\u9EDE\u9663\u5716\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C0E\u81F4\u9375\u76E4\u5C0F\u5DE5\u5177\u5728\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\u4E0D\u80FD\u6B63\u5E38\u6E32\u67D3\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C07\u5C0F\u5DE5\u5177\u653E\u5165coords != {0,0} \u7684Container\uFF08\u5176\u81EA\u8EAB\u88AB\u653E\u5165ScrollableContainer\uFF09\u4E2D\u6642\u5C0E\u81F4\u62D6\u52D5\u4E8B\u4EF6\u5EA7\u6A19\u932F\u8AA4\u7684\u554F\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CApplication\u985E\u6B63\u5E38\u8A18\u9304\u70BA\u7D66\u5B9A\u5C0F\u5DE5\u5177\u547C\u53EBregisterTimerWidget\u548CunregisterTimerWidget\u7684\u6B21\u6578\u5C0D\u6BD4\uFF0C\u610F\u5473\u8457\u5982\u679C\u591A\u6B21\u8A3B\u518A\uFF0C\u5728\u5C0F\u5DE5\u5177\u4E0D\u518D\u63A5\u6536tick\u4E8B\u4EF6\u524D\uFF0C\u9700\u8981\u76F8\u540C\u6B21\u6578\u7684\u53D6\u6D88\u8A3B\u518A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u4E9BZoomAnimationImage\u51FD\u6578\u61C9\u7576\u662F\u4F46\u4E0D\u662F\u865B\u64EC\u51FD\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u4E9B\u5C0F\u90E8\u4EF6\u7F3A\u5C11\u7279\u5B9A\u7684getter\u51FD\u6578\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u5BB9\u73FE\u67094.X\u61C9\u7528\u3002 \u53EA\u9700\u66FF\u63DBtouchgfx\u8CC7\u6599\u593E\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-410"
  }), `\u7248\u672C4.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2014\u5E7410\u670817\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\u652F\u63F4\u55AE\u82721BPP\u986F\u793A\u5668\u3002 \u53C3\u898B\u624B\u518A\u77AD\u89E3\u8A73\u7D30\u8CC7\u8A0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F4\u52D5\u614B\u87A2\u5E55\u65B9\u5411\u8B8A\u5316\uFF08\u6A6B\u5C4F/\u8C4E\u5C4F\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F4\u7E2E\u653E\u5716\u50CF\uFF08\u53C3\u898BScalableImage\u548CZoomAnimationImage\u53EF\u7E6A\u88FD\u5C0D\u8C61\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6F14\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BB6\u5C45\u63A7\u5236\u6F14\u793A\u73FE\u5728\u652F\u63F4640x480\u6A21\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BB6\u5C45\u63A7\u5236\u6F14\u793A\u73FE\u5728\u652F\u63F4STM324xI-EVAL 5.7\u201D\u677F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u958B\u767C\u677F\u652F\u6301\u8B8A\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DSTM324xI-EVAL 5.7\u201D\u677F\uFF08IAR+gcc\uFF09\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DEmbeddedArtists LPC4357DevKit\u677F\u7684gcc\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u512A\u5316\u4E86TouchGFX\u8A55\u4F30\u677F\u7684SPIFI\u521D\u59CB\u5316\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5411ScrollableContainer\u6DFB\u52A0\u6C38\u4E45Drawable\u53EF\u80FD\u5C0E\u81F4\u7F6E\u4F4D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F4\u66F4\u5927\u5B57\u9AD4`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u5BB9\u73FE\u67094.X\u61C9\u7528\u3002 \u53EA\u9700\u66FF\u63DBtouchgfx\u8CC7\u6599\u593E\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-400"
  }), `\u7248\u672C4.0.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u767C\u4F48\u65E5\u671F\uFF1A2014\u5E749\u670826\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchEvent\u91CD\u69CB\uFF08API\u640D\u58DE\uFF09\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setActive\u91CD\u547D\u540D\u70BADrawable::setTouchable`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::isActive\u91CD\u547D\u540D\u70BADrawable::isTouchable`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u68C4\u7528\u4E86Drawable::hijackTouchEvent`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable\u73FE\u5728\u9ED8\u8A8D\u4E0D\u53EF\u89F8\u6478`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchEvents\u7E3D\u662F\u50B3\u64AD\u5230\u6240\u6709\u5B50\u5BB9\u5668`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u6587\u5B57\u8F49\u63DB\u5668\u589E\u52A0\u4E86\u8A9E\u8A00\u7279\u5B9A\u7684\u5B57\u9AD4\u6392\u5370\u548C\u5C0D\u9F4A\u5217\u652F\u63F4\u3002 \u95B1\u8B80\u6587\u6A94\u4E2D\u95DC\u65BC\u6B64\u7279\u6027\u7684\u66F4\u591A\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F9E\u5B57\u9AD4\u5F62\u72C0\u548C\u9593\u8DDD\u8ABF\u6574\u65B9\u9762\u5927\u5E45\u6539\u5584\u4E86\u5B57\u9AD4\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u64EC\u5668 - \u5728\u57F7\u884C\u87A2\u5E55\u8F49\u63DB\u6642\u751F\u6210\u5C0D\u65B0\u7684\u8996\u5716/\u8868\u73FE\u5668/\u8F49\u63DB\u5927\u5C0F\u7684\u6AA2\u67E5\u3002 \u672A\u80FD\u751F\u6210\u6AA2\u67E5\u7684\u539F\u56E0\u53EF\u80FD\u662FFrontEndHeap\u4E2D\u7F3A\u5C11\u8996\u5716/\u8868\u73FE\u5668/\u8F49\u63DB\u7684\u5B9A\u7FA9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u548CButtonWithLabel\u73FE\u5728\u652F\u6301\u65CB\u8F49\u4E860\u300190\u3001180\u6216270\u5EA6\u7684\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u7279\u6B8A\u60C5\u6CC1\u4E0BButtonWithLabel\u4E0A\u7684\u6587\u5B57\u5C45\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F4\u7684ST\u5E73\u81FA\u4E0A\u7684\u786C\u9AD4\u52A0\u901F\u6587\u5B57\u6E32\u67D3\uFF084\u548C8bpp\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u80FD\u5920\u5728\u5916\u90E8RAM\u4E2D\u7DE9\u5B58\u9EDE\u9663\u5716\u8CC7\u6599\u5EAB\u4E2D\u7684\u6240\u6709\u689D\u76EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301Freescales K70 MCU\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7FFB\u8B6F\u8868\uFF1A\u5C07\u201C\\<\u201D\u548C\u201C`, `>`, `\u201D\u7684\u5BE6\u4F8B\u5206\u5225\u8F49\u63DB\u6210\u4E86\u201C<\u201D\u548C\u201C>\u201D\u3002 \u652F\u63F4\u6587\u5B57\u7FFB\u8B6F\u5B57\u4E32\uFF0C\u5982\u201C`, `<`, `Not awildcard`, `>`, `\u201D\uFF08\u4F7F\u7528\u201C`, `<`, `Not a wildcard\\`, `>`, `\u201D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u63F4MCU\u7684NXP LPC18XX\u7CFB\u5217\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5177\u6709\u5947\u6578\u5BEC\u5EA6\u4E14alpha\u503C\u5C0F\u65BC255\u7684\u5716\u50CF\u7684\u6E32\u67D3\u932F\u8AA4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u672A\u521D\u59CB\u5316textArea\u6642\u6B63\u78BA\u8655\u7406TextArea::getTextHeight`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextAreaWithWildcard::getTextWidth\u73FE\u5728\u5305\u542B\u842C\u7528\u5B57\u5143\u6587\u5B57\u7684\u5BEC\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `gcc Makefiles\u73FE\u5728\u5305\u542B\u5716\u50CF\u8CC7\u7522\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `.BMP\u548C`), `.PNG\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u8981\u4FEE\u526A\u6587\u5B57\u8868\u4E2D\u4EFB\u4F55\u7FFB\u8B6F\u5167\u5BB9\u7684\u524D\u5C0E\u7A7A\u683C\u548C\u5C3E\u96A8\u7A7A\u683C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B57\u9AD4\u8F49\u63DB\u5668\u672A\u6B63\u78BA\u751F\u62108bpp\u7684\u5B57\u9AD4\u8CC7\u6599\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ButtonWithIcon::setBitmaps - \u70BA\u6709\u610F\u7684\u865B\u64EC\u51FD\u6578\u91CD\u5BEB\u96B1\u85CFIAR\u8B66\u544A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ButtonWithIcon\u512A\u5316\u4E86\u7E6A\u88FD\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6975\u5C11\u6578\u60C5\u6CC1\u4E0B\uFF0C\u6587\u5B57\u53EF\u4EE5\u7A0D\u5FAE\u8D85\u51FA\u6587\u5B57\u5340\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7531\u65BCTouchEvent\u91CD\u69CB\uFF0C\u60A8\u5FC5\u9808\u76F8\u61C9\u5730\u91CD\u547D\u540D\u51FD\u6578\u3002 \u6B64\u5916\uFF0C\u5982\u679C\u4EFB\u4F55\u5BA2\u88FD\u5C0F\u5DE5\u5177\u6216\u5BB9\u5668\u9700\u8981\u63A5\u6536\u89F8\u6478\u4E8B\u4EF6\uFF0C\u60A8\u9084\u9700\u8981\u5728\u5176\u4E2D\u5BA3\u544A\u3002 \u5982\u679C\u60A8\u904E\u53BB\u4F7F\u7528hijackTouchEvent\u9632\u6B62\u5B50\u5BB9\u5668\u7372\u5F97\u89F8\u6478\u4E8B\u4EF6\uFF0C\u73FE\u5728\u5247\u9700\u8981\u78BA\u4FDD\u6240\u6709\u5B50\u5BB9\u5668\u4E0D\u53EF\u89F8\u6478\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Main.cpp for simulators need to be updated by replacing the line: TypedText::registerTypedTextDatabase(TypedTextDatabase::getInstance(), TypedTextDatabase::getInstanceSize()) with: Texts::setLanguage(0) You can also specify a specific language from your text database e.g. Texts::setLanguage(GB) In that case you also need to: #include `, `<`, `texts/TextKeysAndLanguages.hpp`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u91CD\u5EFA\u6574\u500B\u5C08\u6848\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Info`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5927\u5E45\u66F4\u65B0\u4E86TouchGFX\u624B\u518A\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-310"
  }), `\u7248\u672C3.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DFDI uEZGUI-1788-70WVT\u8A55\u4F30\u677F\uFF08NXP LPC-1788 Cortex M3\uFF09\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DMjolner TouchGFX\u6F14\u793A\u677F\u7248\u672C1.1\u8A55\u4F30\u677F\uFF08NXP LPC-4353 Cortex M4/M0 4.3\u201D\uFF09\u7684\u652F\u6301\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CVisual Studio\u6703\u5728\u6709\u65B0\u5716\u50CF\u6DFB\u52A0\u5230assets/images\u8CC7\u6599\u593E\u6642\u91CD\u5EFABitmapDatabase.h\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u50C5\u7576\u4F7F\u7528Visual Studio\u6642\uFF1A\u66F4\u65B0Visual Studio .props\u6587\u4EF6\u4E2D\u7684TouchGFXReleasePath\u3002 \u53EA\u9700\u5728\u6587\u5B57\u7DE8\u8F2F\u5668\u4E2D\u7DE8\u8F2F\u6A94\u3002 \u61C9\u7528\u201Ctouchgfx\\\u201D\u64F4\u5C55\u8DEF\u5F91\u3002 \u53C3\u898Btemplate_application\u7372\u53D6\u9748\u611F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u50C5\u7576\u4F7F\u7528Visual Studio\u6642\uFF1A\u66F4\u65B0Visual Studio\u5C08\u6848\u6A94\u6848\uFF08.vcxproj\u6587\u4EF6\uFF09\u3002 \u53EA\u9700\u5728\u6587\u5B57\u7DE8\u8F2F\u5668\u4E2D\u7DE8\u8F2F\u6A94\u3002 \u7528\u201C$(TouchGFXReleasePath)\\config\\msvs\\touchgfx_prebuild.targets\u201D\u66FF\u63DB\u201C$(TouchGFXReleasePath)\\framework\\config\\msvs\\touchgfx_prebuild.targets\u201D\u5F62\u5F0F\u7684\u6240\u6709\u8DEF\u5F91\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Info`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u786C\u9AD4\u62BD\u8C61\u5C64\u67B6\u69CB\u5DF2\u91CD\u69CB\uFF0C\u56E0\u6B64\u5404\u7A2E\u786C\u9AD4\u5143\u4EF6\uFF08MCU\u548C\u9A45\u52D5\u5668\uFF09\u7684\u6240\u6709\u5171\u7528\u7A0B\u5F0F\u78BC\u5DF2\u5728\u4E0D\u540C\u76EE\u6A19\u958B\u767C\u677F\u4E0A\u5171\u7528\u3002 \u56E0\u6B64\uFF0C\u53EA\u8981\u5305\u542B\u4E00\u500B\u6216\u591A\u500BTouchGFX\u652F\u63F4\u7684\u786C\u9AD4\u5143\u4EF6\uFF0C\u5C31\u80FD\u5927\u5E45\u7C21\u5316\u65B0/\u81EA\u8A02\u677F\u7684\u79FB\u690D\u5DE5\u4F5C\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-300"
  }), `\u7248\u672C3.0.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301Visual Studio 2010/2012\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u6709alpha\u901A\u9053\u7684png\u5716\u50CF\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0Dassets/bitmaps\u8CC7\u6599\u593E\u4E2D\u5B50\u8CC7\u6599\u593E\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DST STM32F4X9I-EVAL\u8A55\u4F30\u677F\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0DRobert Penners\u7DE9\u52D5\u65B9\u7A0B\u7684\u652F\u6301\uFF08\u53C3\u898Btouchgfx/EasingEquations.hpp\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5716\u50CF\u8F49\u63DB\u5668\uFF1A\u589E\u52A0\u4E86\u8F38\u5165\u5F71\u50CF\u6A94\u540D\u7684\u5B8C\u6574\u6027\u6AA2\u67E5\uFF0C\u6A94\u6848\u540D\u4E0D\u5F97\u4EE5\u6578\u4F4D\u958B\u982D\u4E14\u5FC5\u9808\u7531\u5B57\u6BCD\u6578\u4F4D\u7D44\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5716\u50CF\u8F49\u63DB\u5668\uFF1A\u589E\u52A0\u4E86\u91DD\u5C0D\u8F38\u5165\u5217\u8868\u4E2D\u5340\u5206\u5927\u5C0F\u5BEB\u7684\u6A94\u6848\u540D\u7684\u91CD\u540D\u6AA2\u67E5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6587\u5B57\u8F49\u63DB\u5668\uFF1A\u589E\u52A0\u4E86\u69CB\u5EFA\u505C\u6B62\u5C0Dbpp\u548Cfont_size\u503C\u7684\u5B8C\u6574\u6027\u6AA2\u67E5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\uFF1A\u73FE\u5728\u652F\u6301setScrollbarPadding\u3001setScrollbarWidth\u3001setScrollbarColor\u548CsetScrollbarAlpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\uFF1A\u5C07ScrollThreshold\u7684\u9810\u8A2D\u503C\u8A2D\u7F6E\u70BA5\u800C\u4E0D\u662F1\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u5B57\u9AD4\u7684alpha\u6DF7\u5408\u7684\u652F\u63F4\uFF08TextArea::setAlpha(uint8_t alpha)\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u652F\u63F4\u5169\u7A2E\u4E0D\u540C\u7684\u8F38\u51FA\u683C\u5F0F\uFF1ARGB565\u548CARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert - \u589E\u52A0\u4E86\u5169\u500B\u9078\u9805\uFF0C\u7528\u65BC\u63A7\u5236\u6709/\u7121alpha\u901A\u9053\u7684\u5716\u50CF\u7684\u8F38\u51FA\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u4FEE\u6B63\u5927\u5C08\u6848\u7684\u9023\u7D50\u5668\u932F\u8AA4\uFF0C\u66F4\u65B0\u4E86MinGW\u4E0B\u7684Touchgfx\u74B0\u5883\u3002 g++\u7248\u672C\u5F9E4.6.2\u66F4\u65B0\u81F34.8.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5167\u90E8RAM\u7A7A\u9593\u5360\u7528\u91CF\u6539\u5584`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76EE\u6A19\u5EAB\u548C\u786C\u9AD4\u62BD\u8C61\u5C64\u7684\u7D50\u69CB\u4FEE\u6539`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Bugfixes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u586B\u5145\u64CD\u4F5C\uFF08Box\u5C0F\u90E8\u4EF6\uFF09\u5C0E\u81F4\u4E86lpc4357_emb_artist\u677F\u6545\u969C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Textconvert & fontconvert\uFF1A\u73FE\u5728\uFF0C\u4E0D\u540C\u5B57\u9AD4\u6392\u5370\u53EF\u80FD\u6709\u76F8\u540C\u5C6C\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Imageconvert & fontconvert\uFF1APOSIX\u76F8\u5BB9\u5E73\u81FA\u7684\u932F\u8AA4\u8655\u7406\u512A\u5316`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL\uFF1A\u4E0D\u8B93\u95DC\u9375\u8CC7\u6599\u985E\u578B\u6EA2\u51FA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73FE\u5728\uFF0CLanguageXX.cpp\u6A94\u4EE5\u65B0\u7684\u6587\u5B57\u884C\u7D50\u5C3E\uFF08\u522A\u9664\u8B66\u544A\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea::draw\u73FE\u5728\u80FD\u6B63\u78BA\u5730\u8655\u7406\u672A\u521D\u59CB\u5316\u7684TypedText\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u904E\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8CC7\u6599\u593Eassets/bitmaps\u548Cgenerated/bitmaps\u5FC5\u9808\u91CD\u547D\u540D\u70BAassets/images\u548Cgenerated/images\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5347\u7D1ATouchGFX\u74B0\u5883\u81F3\u7248\u672C2.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4EFB\u4F55\u61C9\u7528Makefile\uFF0C\u4EE5\u8207\u66F4\u65B0\u5F8C\u7684template_application\u4E2D\u6307\u5B9A\u7684Makefile\u4E00\u81F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u91CD\u5EFA\u6574\u500B\u5C08\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C07\u5305\u542B\u900F\u660E\u539F\u8272\u7684bmp\u5716\u50CF\u8F49\u63DB\u70BA\u4F7F\u7528alpha\u901A\u9053\u7684png\u5716\u50CF\u3002 \u4F7F\u7528\u540D\u70BAimagemagick\u7684\u514D\u8CBB\u5DE5\u5177\u53EF\u81EA\u52D5\u5B8C\u6210\u6B64\u64CD\u4F5C\u3002 \u5982\u9700\u66F4\u591A\u8CC7\u8A0A\u548C\u63D0\u793A\uFF0C\u53EF\u8A2A\u554F\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "mailto:touchgfx-support@mjolner.com"
  }), `touchgfx-support@mjolner.com`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5FC5\u9808\u66F4\u65B0\u81EA\u8A02HAL\u5BE6\u73FE\u4EE5\u7B26\u5408\u65B0\u7684\u7D50\u69CB`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Info`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u518D\u652F\u6301\u4E4B\u524D\u5C0Dbmp\u683C\u5F0F\u4E2D\u7684\u900F\u660E\u8272\u4F7F\u7528\u7684\u201C\u795E\u5947\u7684\u201D\u900F\u660E\u8272\u3002 \u6539\u70BA\u4F7F\u7528\u6709alpha\u901A\u9053\u7684png\u5716\u50CF\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-220"
  }), `\u7248\u672C2.2.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7279\u6027`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EE5\u96F6\u6027\u80FD/\u8CC7\u6E90\u6210\u672C\u589E\u52A0\u4E86\u5C0D\u6A6B\u5C4F\u986F\u793A\u5668\u8C4E\u5C4F\u6A21\u5F0F\u7684\u652F\u63F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5C0D\u5B57\u8DDD\u8ABF\u6574\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u9375\u76E4\u7BC4\u4F8B\uFF08Energy Micro DK3750\u8A55\u4F30\u677F\u7684IAR\u5C08\u6848\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6539\u4E86LCD\u4E2DblitCopy\u65B9\u6CD5\u7684\u4ECB\u9762\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F9EHAL\u4E2D\u522A\u9664\u4E86SyncBackBuffer\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F9ELCD\u4E2D\u522A\u9664\u4E86clearLCD\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F9ELCD\u4E2D\u522A\u9664\u4E86fillGradientRect\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u652F\u6301setScrollbarsVisible(bool visible)\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-210"
  }), `\u7248\u672C2.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u9996\u6B21\u4F5C\u70BA\u5546\u7528\u6846\u67B6\u767C\u4F48\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);