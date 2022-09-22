"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6978],{

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

/***/ 9010:
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
  title: "\u4FEE\u8BA2\u65E5\u5FD7"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/changelog",
  "id": "miscellaneous/changelog",
  "title": "\u4FEE\u8BA2\u65E5\u5FD7",
  "description": "Version 4.20.0",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/miscellaneous/changelog.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/changelog",
  "permalink": "/4.20/zh-CN/docs/miscellaneous/changelog",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "changelog",
    "title": "\u4FEE\u8BA2\u65E5\u5FD7"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u5DF2\u77E5\u95EE\u9898",
    "permalink": "/4.20/zh-CN/docs/miscellaneous/known-issues"
  },
  "next": {
    "title": "TouchGFX\u4E2D\u7684\u7B2C\u4E09\u65B9\u7EC4\u4EF6",
    "permalink": "/4.20/zh-CN/docs/miscellaneous/3rd-party-components-in-touchgfx"
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
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `\u5F03\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `\u5F03\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u89E3\u51B3\u5404\u79CD\u7F51\u7EDC\u7A33\u5B9A\u6027\u95EE\u9898`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728TouchGFX Designer \u6253\u5F00\u65F6\u5411\u5305\u542B\u8FDB\u5EA6\u6307\u793A\u5668\u7684\u5DE5\u7A0B\u6DFB\u52A0\u56FE\u50CF\u65F6\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5D29\u6E83`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u201C\u6DFB\u52A0\u63A7\u4EF6\u83DC\u5355\u201D\u53EF\u80FD\u8FDB\u5165\u67D0\u79CD\u72B6\u6001 - \u5F53\u6253\u5F00\u83DC\u5355\u65F6\uFF0C\u6CA1\u6709\u805A\u7126\u5230\u641C\u7D22\u6587\u672C\u6846`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65E0\u6CD5\u4E3A\u201C\u8BBE\u7F6E\u901A\u914D\u7B26\u201D\u64CD\u4F5C\u9009\u62E9\u201C\u8D44\u6E90\u6587\u672C\u201D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2021\u5E7410\u670820\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u63A7\u4EF6\uFF1A\u89C6\u9891\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u5BF9\u65B0.xml\u6587\u672C\u6570\u636E\u5E93\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ECE.touchgfx\u6587\u4EF6\u79FB\u9664TextEntries\u6570\u636E\u5E93\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9XRGB\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6700\u8FD1\u5E94\u7528\u7A0B\u5E8F\u5217\u8868\u4E2D\u589E\u52A0\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684\u5B8C\u6574\u8DEF\u5F84\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u56FE\u6807\u6DFB\u52A0\u4E86\u5404\u79CD\u52A8\u753B\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u89E3\u51B3\u4E86\u7F51\u7EDC\u4EE3\u7406\u5BF9\u8BDD\u6846\u7F3A\u5931\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F53\u5C06\u4EEA\u8868\u63A7\u4EF6\u653E\u5165\u5B9A\u5236\u5BB9\u5668\u4E2D\u65F6\uFF0C\u4EE3\u7801\u751F\u6210\u51FA\u9519\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F53\u6587\u4EF6\u88AB\u5176\u4ED6\u7F16\u8F91\u5668\u4E2D\u6253\u5F00\u65F6\uFF0CTouchGFX Designer\u62A5\u544A\u78C1\u76D8\u4E0A\u6587\u4EF6\u66F4\u6539\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6A21\u62DF\u65F6\u949F\u80FD\u591F\u8C03\u6574\u5927\u5C0F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6587\u672C\u7BA1\u7406\u5668\u4E2D\u7684\u5B57\u4F53\u6392\u5370\u9009\u62E9\u5668\u4E0D\u80FD\u6B63\u786E\u8C03\u6574\u5927\u5C0F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E0B\u62C9\u63A7\u4EF6\u6709\u65F6\u81EA\u52A8\u9009\u62E9\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u8FDB\u4E86\u6587\u672C\u7BA1\u7406\u5668\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u8FDB\u4E86\u8272\u5F69\u9009\u62E9\u5668\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u8FDB\u4E86alpha\u6ED1\u5757\u63A7\u4EF6\u7684UX\u884C\u4E3A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u540E\uFF0C\u6570\u5B57\u5C5E\u6027\u4E0A/\u4E0B\u63A7\u4EF6\u4E0D\u5DE5\u4F5C\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C5E\u6027\u63A7\u4EF6\u4E4B\u95F4Tab\u8DF3\u8F6C\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6296\u8272\u7B97\u6CD5\u9009\u62E9\u5668\u9879\u7F3A\u5C11\u540D\u79F0\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u590D\u4E86\u5728\u5220\u9664\u7528\u4E8E\u5DF2\u9009\u6837\u5F0F\u6A21\u677F\u7684\u5B9A\u5236\u5BB9\u5668\u540E\uFF0CScrollWheel\u63A7\u4EF6\u5904\u4E8E\u9519\u8BEF\u72B6\u6001\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u590D\u4E86\u8BD5\u56FE\u6253\u5F00\u78C1\u76D8\u4E0A\u5DF2\u5220\u9664\u7684\u6700\u8FD1\u5E94\u7528\u7A0B\u5E8F\u65F6\u5D29\u6E83\u7684\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6587\u672C\u548C\u8BED\u8A00\uFF08\u8BD1\u6587\uFF09\u73B0\u5728\u5B58\u50A8\u5728texts.xml\uFF08\u800C\u975Etexts.xlsx\uFF0CExcel \u683C\u5F0F\uFF09\u4E2D\u3002 \u6DFB\u52A0\u4E86\u7528\u4E8E\u8BD1\u6587\u5BFC\u51FA\u548C\u5BFC\u5165\u7684\u5DE5\u5177\uFF08touchgfx/framework/tools/textconvert/translation.rb\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u63A7\u4EF6\uFF1AVideoWidget\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u57283rdparty/libjpeg\u4E2D\u589E\u52A0\u4E86\u7528\u4E8ELinux\u548CWindows\u7684libjpeg\u5E93\uFF08\u6CE8\u610F\uFF0C\u4E0E\u6B63\u5F0F\u7684libjpeg\u76F8\u6BD4\uFF0CRed(\u7EA2)\u548CBlue(\u84DD)\u88AB\u8C03\u6362\u4E86\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EFF\u771F\u5668\u73B0\u5728\u53EF\u4EE5\u5904\u7406\u4E0D\u7B49\u4E8E\u5E27\u7F13\u5B58\u533A\u5C3A\u5BF8\u7684\u663E\u793A\u5C3A\u5BF8\u3002 \u8C03\u7528touchgfx_generic_init() \u4E4B\u540E\uFF0C\u4F7F\u7528HAL::setFrameBufferSize() \u8BBE\u7F6E\uFF08\u66F4\u5927\uFF09\u7684\u5E27\u7F13\u5B58\u533A\u5C3A\u5BF8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::center(), centerX(), centerY() \uFF0C\u7528\u4E8E\u53EF\u7ED8\u5236\u5BF9\u8C61\u5728\u5176\u7236\u5BF9\u8C61\u4E2D\u5C45\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::expand() \uFF0C\u4F7F\u53EF\u7ED8\u5236\u5BF9\u8C61\u7684\u5927\u5C0F\u4E0E\u5176\u7236\u5BF9\u8C61\u76F8\u540C\uFF0C\u5E76\u53EF\u9009\u62E9\u5728\u8FB9\u7F18\u5468\u56F4\u8BBE\u7F6E\u8FB9\u8DDD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86LCD::fillBuffer() \uFF0C\u53EF\u7528\u4E8E\u5728\u4EFB\u4F55\u5185\u5B58\u7F13\u51B2\u533A\u4E2D\u586B\u5145\u8272\u5F69\u56FE\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86ScrollableContainer::getChildrenContainedArea()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u572816bpp\u6DB2\u6676\u663E\u793A\u5C4F\u4E0A\u66F4\u5FEB\u5730\u7ED8\u5236ARGB8888\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::getCurrentScreen() \u73B0\u5728\u6539\u4E3A\u9759\u6001\u51FD\u6570\uFF0C\u4EE5\u65B9\u4FBF\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freetype 2.10.4\u5DF2\u66F4\u65B0\u81F32.11.0\uFF08\u7531\u5B57\u4F53\u8F6C\u6362\u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `nlohmann json 3.9.1\u5DF2\u66F4\u65B0\u81F33.10.2\uFF08\u7531\u56FE\u50CF\u8F6C\u6362\u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Ruby 1.9.3\u5DF2\u66F4\u65B0\u81F33.0.2\uFF08\u7531\u6587\u672C\u8F6C\u6362\u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::doScroll() \u73B0\u6539\u4E3A\u516C\u6709\u51FD\u6570\uFF0C\u5E76\u786E\u4FDD\u6EDA\u52A8\u662F\u6709\u6548\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\u6839\u5BB9\u5668\u5728\u5C4F\u5E55\u4E2D\u7684\u4F4D\u7F6E\u548C\u5927\u5C0F\u53EF\u4EE5\u8BBE\u7F6E\u4E86\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6240\u6709\u7684Bitmap Painter\u53EF\u4EE5\u504F\u79FB\u4F4D\u56FE\uFF0C\u5E76\u53EF\u4EE5\u5E73\u94FA\u4F4D\u56FE\uFF08\u6709\u52A9\u4E8E\u8282\u7EA6\u5185\u5B58\uFF09\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u81EA\u52A8\u65AD\u884C\uFF08WideTextAction\uFF09\u6CA1\u6709\u8003\u8651\u7F29\u8FDB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4E0D\u5141\u8BB8\u5199\u5165\u5230\u53E6\u4E00\u4E2A\u9A71\u52A8\u5668\u6216\u4E00\u4E2A\u5B8C\u6574\u8DEF\u5F84\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextProvider::initialize() with ... parameter could generate unexpected results.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u751F\u6210\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u5916\u90E8\u58F0\u660E\u73B0\u5728\u5747\u4E0E\u5B9E\u9645\u58F0\u660E\u5339\u914D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F53\u6267\u884C\u663E\u793A\u65B9\u5411\u53D8\u66F4\u65F6\uFF0CFRAME_BUFFER_WIDTH\u548CFRAME_BUFFER_HEIGHT\u53EF\u80FD\u4F1A\u5F15\u8D77\u6DF7\u4E71\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8FDB\u5EA6\u6307\u793A\u548C\u4EEA\u8868\u4E0D\u80FD\u4E0E\u5E26\u5B9A\u65F6\u5668\u7684mixins\u4E00\u8D77\u4F7F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PixelDataWidget::getSolidRect() \u73B0\u5728\u6539\u4E3A\u5F53\u6CA1\u6709\u8BBE\u7F6E\u50CF\u7D20\u6570\u636E\u7F13\u51B2\u533A\u65F6\uFF0C\u8FD4\u56DE\u7A7A\u7684\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86PixelDataWidget::getPixelData() \u548CPixelDataWidget::getBitmapFormat() \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EFF\u771F\u5668\u5E94\u7528\u7A0B\u5E8F\u5BF9\u9F20\u6807\u548C\u952E\u76D8\u4E8B\u4EF6\u54CD\u5E94\u66F4\u8FC5\u901F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::moveChildrenRelative() \u73B0\u5728\u53EF\u4EE5\u66F4\u65B0getScrolledX() \u548C getScrolledY()\u7684\u503C\uFF0C\u4F46\u662F\u6CA1\u6709\u66F4\u65B0\u6EDA\u52A8\u6761\u7684\u503C\u3002 \u4E0D\u8FC7\uFF0C\u5DF2\u6309\u8BA1\u5212\u5F03\u7528\u4E86\u51FD\u6570moveChildrenRelative() \uFF0C\u8BF7\u4F7F\u7528doScroll() \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728ScrollableContainer\u4E2D\u76F8\u5BF9\u5750\u6807\u9519\u8BEF\u4F7F\u7528\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86EasingEquations::elasticEaseIn()\u3001 EasingEquations::elasticEaseOut() \u548CEasingEquations::elasticEaseInOut()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u4E9B8bpp\u7ED8\u56FE\u5668\u4F1A\u4F7F\u7528\u9519\u8BEF\u7684\u989C\u8272\uFF0C\u5728\u6781\u5C11\u89C1\u60C5\u51B5\u4E0B\uFF0C\u572832bpp\u663E\u793A\u5C4F\u4E0AL8_RGB888\u4F1A\u51FA\u9519\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp::blitCopy() \u4E0D\u652F\u6301RGB888\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp::fillRect() and LCD16bpp::drawGlyph() \u73B0\u5728\u752824\u4F4D\u989C\u8272\uFF08\u800C\u975E\u539F\u6765\u768416\u4F4D\u989C\u8272\uFF09\u4F20\u7ED9DMA\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5F03\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u5F88\u5FEB\u4F1A\u652F\u6301\u4E0D\u5E26alpha\u901A\u9053\u7684RGB565\u3002 ImageConvert\u5C06\u62A5\u544A\u8BE5\u60C5\u51B5\uFF0C\u4EE5\u5E2E\u52A9\u7528\u6237\u8F6C\u5230\uFF08\u4F8B\u5982\uFF09ARGB8888\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u4E2D\u4E0D\u518D\u5305\u62EC\u7528\u4E8ELinux\u7684SDL2\u3002 \u8BF7\u5728\u60A8\u7684Linux\u73AF\u5883\u4E2D\u81EA\u884C\u5B89\u88C5\u8F6F\u4EF6\u5305libsdl2-dev\u548Clibsdl2-image-dev\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper::invalidateBoundingRect() is deprecated. Use invalidateContent().`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4170"
  }), `\u7248\u672C4.17.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2021\u5E746\u670830\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u91CD\u65B0\u8BBE\u8BA1\u7684\u754C\u9762\u5DF2\u5168\u90E8\u5B8C\u6210\u3002 \u6240\u6709\u5DF2\u77E5\u7279\u6027\u4F9D\u7136\u53EF\u7528\uFF0C\u4F46\u662F\u901A\u8FC7\u6613\u4E8E\u4F7F\u7528\u4E14\u76F4\u89C2\u7684\u4EA4\u4E92\u65B9\u6848\u63D0\u4F9B\u7684\u3002 \u53E6\u5916\u8FD8\u589E\u52A0\u4E86\u5176\u4ED6\u7279\u6027\uFF0C\u5982\u591A\u4E2A\u8272\u5F69\u4E3B\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u589E\u52A0\u4E86\u51FD\u6570setAngles()\u3001setXAngle()\u3001setYAngle() \u548CsetZAngle()\u3002 \u4E0E\u5BF9\u5E94\u7684update\u51FD\u6570\u76F8\u6BD4\uFF0C\u8FD9\u4E9B\u51FD\u6570\u4E0D\u6267\u884C\u5931\u6548\u64CD\u4F5C\uFF0C\u56E0\u800C\u4F1A\u7A0D\u5FEB\u4E00\u4E9B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86TextureMapper::updateScale()\u51FD\u6570\uFF0C\u7528\u6765\u8BBE\u7F6E\u65B0\u6BD4\u4F8B\u5E76\u6267\u884C\u5931\u6548\u64CD\u4F5C\uFF08\u5C3D\u53EF\u80FD\u5C11\uFF09\u3002 AnimationTextureMapper\u73B0\u5728\u4F7F\u7528\u6B64\u51FD\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5728\u6A21\u62DF\u5668\u4E2D\u6309\u4E0BF1\u952E\u5C06\u663E\u793A\u50CF\u7D20\u7684RGB\u8272\u5F69\u503C\uFF08\u5341\u516D\u8FDB\u5236\uFF09\u548CX\u3001Y\u5750\u6807\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u5E27\u7F13\u51B2\u5728\u9501\u5B9A\u540E\u672A\u89E3\u9501\uFF0C\u6A21\u62DF\u5668\u5C06\u65AD\u8A00\u62A5\u9519\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer::setPageIndicatorCenteredX() \u51FD\u6570\u4F1A\u5728\u4FDD\u6301\u9875\u9762\u6307\u793A\u5668\u5F53\u524DY\u5750\u6807\u4E0D\u53D8\u57FA\u7840\u4E0A\uFF0C\u5C45\u4E2DX\u5750\u6807\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Colortype\u5B9E\u73B0\u5DF2\u4FEE\u6539\u4E3A\u603B\u662F\u5B58\u50A88\u4F4D\u7EA2\u8272\u30018\u4F4D\u7EFF\u8272\u548C8\u4F4D\u84DD\u8272\uFF0C\u65E0\u8BBA\u6D3B\u52A8\u754C\u9762\u7684\u8272\u6DF1\u662F\u591A\u5C11\uFF08\u5373\u4F7F\u662F\u7070\u8272\u6216\u8005\u9ED1\u767D\u754C\u9762\uFF09\u3002 \u53E6\u5220\u9664\u6216\u91CD\u547D\u540D\u4E86\u4E00\u4E9B\u8272\u5F69\u51FD\u6570\uFF0C\u53C2\u89C1\u201C\u5F03\u7528\u201D\u90E8\u5206\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Screen::insert()\u3001Screen::invalidate()\u548CScreen:invalidateRect()\uFF0C\u4EE5\u4FBF\u80FD\u591F\u5728\u663E\u793A\u5C4F\u4EE3\u7801\u4E2D\u4F7F\u7528 \u201Cinvalidate()\u201D\u66FF\u4EE3\u201Ccontainer.invalidate()\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u80FD\u7528\u6E10\u6DE1\u529F\u80FD\uFF0CCacheableContainer\u73B0\u5DF2\u652F\u6301setAlpha\u548CgetAlpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp\u548CLCD16bppSerialFlash\u652F\u6301RGB888\u56FE\u50CF\u7684\u4F4D\u5757\u590D\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Extracted DebugPrinter implementations from LCD drivers to separate files.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u80FD\u591F\u521B\u5EFA\u8C03\u8272\u677F\u6761\u76EE\u5C11\u4E8E256\u4E2A\uFF08\u4E3A\u4E86\u8282\u7EA6\u7A7A\u95F4\uFF09\u7684\u52A8\u6001L8\u4F4D\u56FE\uFF0C\u589E\u52A0\u4E86Bitmap::dynamicBitmapCreateL8()\u51FD\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u521B\u5EFA\u73B0\u6709\uFF08\u9759\u6001\u6216\u52A8\u6001\uFF09\u4F4D\u56FE\u7684\u526F\u672C\uFF0C\u589E\u52A0\u4E86Bitmap::dynamicBitmapCreateCopy()\u51FD\u6570\u3002 RGB565 alpha\u901A\u9053\u4E0D\u80FD\u590D\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u7528\u7ED9\u5B9A\u8272\u5F69\u586B\u5145\u52A8\u6001\u4F4D\u56FE\u7684\u5168\u90E8\u6216\u4E00\u90E8\u5206\uFF0C\u589E\u52A0\u4E86\u51FD\u6570Bitmap::dynamicBitmapFill()\u548CBitmap::dynamicBitmapFillRect()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u51FD\u6570Screen::getScreenWidth()\u548CScreen::getScreenHeight()\uFF0C\u5E94\u4F7F\u7528\u5B83\u4EEC\u4EE3\u66FFHAL::DISPLAY_WIDTH\u548CHAL::DISPLAY_HEIGHT\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freetype \u4ECE2.10.2\u5DF2\u66F4\u65B0\u5230\u4E862.10.4\uFF08\u7531\u5B57\u4F53\u8F6C\u6362\u7A0B\u5E8F\u4F7F\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u51FD\u6570OSWrappers::taskYield()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::initialize()\u6539\u6210\u4E86\u865A\u51FD\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86LCD32bpp_XRGB8888\u663E\u793A\u9A71\u52A8\uFF0C\u4EE5\u4FBF\u5728\u5E27\u7F13\u51B2\u4E2D\u65E0alpha\u901A\u9053\u7684\u60C5\u51B5\u4E0B\u572832\u4F4D\u663E\u793A\u5C4F\u4E0A\u8FDB\u884C\u7ED8\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u786C\u4EF6\u652F\u6301\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u4E86\u4F7F\u7528DMA\u7ED8\u5236L8\u56FE\u50CF\uFF0C\u589E\u52A0\u4E86BlitOp L8\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728HALSDL2\u54CD\u5E94\u6D88\u606FSDL_WINDOWEVENT_EXPOSED\u4EE5\u91CD\u7ED8\u7A97\u53E3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4ECEHSV\u5230HSL\u8272\u5F69\u8F6C\u6362\u4E2D\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u672A\u5B9A\u4E49DragAction\u65F6Graph\u7684\u5D29\u6E83\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::drawDrawableInDynamicBitmap()\u5F53\u4F4D\u56FE\u5C0F\u4E8E\u53EF\u7ED8\u5236\u5BF9\u8C61\u65F6\u53EF\u4EE5\u5DE5\u4F5C\u6B63\u5E38\u4E86\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u5DE5\u7A0B\u53EF\u653E\u7F6E\u5230\u8DEF\u5F84\u4E2D\u5305\u542B\u56FD\u9645\u5B57\u7B26\uFF08\u5982\u201CWundersch\xF6n_Projekt\u201D\u6216\u201CL\xE6kkert_Projekt\u201D\uFF09\u7684\u6587\u4EF6\u5939\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer\u9875\u9762\u6307\u793A\u5668\uFF0C\u5728\u6DFB\u52A0\u6216\u5220\u9664\u9875\u9762\u540E\u9009\u5B9A\u9875\u9762\u672A\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86Graph VerticalFrontline\u4E2D\u7684\u91CD\u7ED8\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6781\u5C11\u51FA\u73B0\u7684Graph::Line\u4E2D\u7684\u91CD\u7ED8\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u907F\u514D\u547D\u540D\u51B2\u7A81\uFF0C\u5C06HAL::setRenderingVariant\u91CD\u547D\u540D\u4E3AHAL::setRenderingMethod\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0CCanvasWidgets\u4F1A\u5C06\u753B\u5E03\u4EE5\u5916\u7684\u67D0\u533A\u57DF\u5931\u6548\u5316\u5904\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8TouchGFX #include\u60C5\u51B5\u5DF2\u6574\u7406\u3002 \u8FD9\u610F\u5473\u7740\u53EF\u80FD\u9700\u8981\u5305\u542B`, `<`, `touchgfx/hal/HAL.hpp`, `>`, `\u548C\u5176\u4ED6\u6587\u4EF6\u3002 \u4E4B\u524D\u8FD9\u4E9B\u6587\u4EF6\u53EF\u80FD\u88AB\u9519\u8BEF\u5730\u5305\u542B\u5728\u5982Color.hpp\u7B49\u6587\u4EF6\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86LCD2bpp\u4E2D\u7684alpha\u6DF7\u5408\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u548C\u6587\u672C\u4E00\u6837\uFF0C\u5BF924/32bpp\u4F4D\u56FE\u6539\u8FDBLCD16bpp\u7684Alpha\u6DF7\u5408\u6548\u679C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5F03\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u51FA\u4E8E\u901F\u5EA6\u65B9\u9762\u7684\u8003\u8651\uFF0C\u4ECE\u6240\u6709Canvas Painter\u4E2D\u5220\u9664\u4E86alpha\uFF0C \u8F6C\u800C\u5728\u753B\u5E03\u63A7\u4EF6\uFF08Circle\u3001Line\u7B49\uFF09\u4E0A\u8BBE\u7F6Ealpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F03\u7528\u4E86\u67094\u4E2A\u53C2\u6570\u7684Color::getHSVFromHSL\u548CColor::getHSLFromHSV\u51FD\u6570\u3002 \u8BF7\u4F7F\u7528\u67096\u4E2A\u53C2\u6570\u7684\u65B0\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ECELCD\u7C7B\u4E2D\u5220\u9664\u4E86\u51FD\u6570getColorFrom24BitRGB\u3001getColorFromRGB\u3001getRedColor\u3001getRedFromColor\u3001gerGreenColor\u3001getGreenFromColor\u3001getBlueColor\u548CgetBlueFromColor\u3002 \u73B0\u5728\uFF0C\u6240\u6709\u663E\u793A\u7C7B\u578B\u7684\u8272\u5F69\u5747\u91C7\u7528\u76F8\u540C\u683C\u5F0F\u5B58\u50A8\uFF0C\u56E0\u800C\u53EA\u9700\u4F7F\u7528Color\u7C7B\u4E2D\u7684\u51FD\u6570\u5373\u53EF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u91CD\u547D\u540D\u7684\u51FD\u6570\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitRGB()\u73B0\u4E3AColor::getColorFromRGB()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSV()\u73B0\u4E3AColor::getColorFromHSV()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSL()\u73B0\u4E3AColor::getColorFromHSL()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSV()\u73B0\u4E3AColor::getRGBFromSHV()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSVFrom24BitRGB()\u73B0\u4E3AColor::getHSVFromRGB()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSL()\u73B0\u4E3AColor::getRGBFromHSL()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSLFrom24BitRGB()\u73B0\u4E3AColor::getHSLFromRGB()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRedColor()\u73B0\u4E3AColor::getRed()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getGreenColor()\u73B0\u4E3AColor::getGreen()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getBlueColor()\u73B0\u4E3AColor::getBlue()`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86ZoomAnimationImage::setDimension\u3002 \u53EF\u4F7F\u7528setWidthHeight()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86\u4F7F\u7528int16_t& \u53C2\u6570\u7684AbstractProgressIndicator::getRange\u51FD\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Image::getBitmapId()\u4E0D\u518D\u6807\u8BB0@deprecated\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::draw()\u4E0D\u518D\u6807\u8BB0@deprecated\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4161"
  }), `\u7248\u672C4.16.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2021\u5E742\u67088\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86ListLayout\u63A7\u4EF6\u4E2D\u7684\u9519\u8BEF\uFF0C\u9632\u6B62\u5C06\u65B9\u5411\u8BBE\u7F6E\u4E3A\u9664\u201C\u4E1C\u201D\u4EE5\u5916\u7684\u5176\u5B83\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5173\u4E8E\u6ED1\u5757\u63A7\u4EF6\u65B9\u5411\u9009\u62E9\u5668\u7684\u9519\u8BEF\u7684\u63A7\u4EF6\u63D0\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528NemaP LCD\u65F6\u7684\u4EE3\u7801\u751F\u6210\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u201C\u524D\u8FDB\u201D\u548C\u201C\u540E\u9000\u201D\u56FE\u6807\uFF0C\u4F7F\u4E4B\u4FDD\u6301\u540C\u610F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4EEA\u8868\u63A7\u4EF6\u7F3A\u5931\u7684\u5E2E\u52A9\u6587\u672C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u83B7\u5F97NeoChrom\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u589E\u52A0\u4E86LCD::drawQuad\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u63A7\u4EF6TextureMapper\u548CScalableImage\u6539\u4E3A\u4F7F\u7528LCD::drawQuad\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Graph\u4E2D\u7684\u53D8\u91CFdragAction\u672A\u521D\u59CB\u5316\u5BFC\u81F4\u7684\u5D29\u6E83\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BlockTransition\u5728\u7AD6\u5C4F\u786C\u4EF6\u4E0A\u7684\u6A2A\u5C4F\u663E\u793A\u65F6\u4E0D\u80FD\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86PartialFrameBufferManager::tryTransmitBlock\u5BFC\u81F4\u7684\u65AD\u8A00\u95EE\u9898\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4160"
  }), `\u7248\u672C4.16.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5F03\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u63A7\u4EF6\uFF1A\u4EEA\u8868\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u4E8B\u4EF6\u89E6\u53D1\u201C\u5F53\u5C4F\u5E55\u5207\u6362\u5F00\u59CB\u65F6\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u4E8B\u4EF6\u89E6\u53D1\u201C\u5F53\u8FDB\u5165\u5C4F\u5E55\u65F6\u201D\u91CD\u547D\u540D\u4E3A\u201C\u5728\u5207\u5C4F\u7ED3\u675F\u65F6\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u64CD\u4F5C\u201C\u8BBE\u7F6E\u8BED\u8A00\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5728\u63A7\u4EF6\u4E0A\u901A\u8FC7Image Picker\u6DFB\u52A0\u4E00\u5F20\u56FE\u50CF\u65F6\u4F1A\u540C\u65F6\u9009\u4E2D\u8BE5\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u201C\u5E2E\u52A9-`, `>`, `\u952E\u76D8\u5FEB\u6377\u952E\u201D\u4E2D\u589E\u52A0\u4E86\u5FEB\u6377\u952E\u6587\u6863\u7684\u94FE\u63A5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u64CD\u4F5C\u201C\u6267\u884CC++\u4EE3\u7801\u201D\u589E\u52A0\u4E86\u66F4\u597D\u7684\u4EE3\u7801\u7F16\u8F91\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u64CD\u4F5C\u201C\u8F6C\u81F3\u5C4F\u5E55\u201D\u589E\u52A0\u4E86\u65B0\u7684Block Transition\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u201C\u6DFB\u52A0\u63A7\u4EF6\u201D\u83DC\u5355\u7684\u53EF\u7528\u6027/\u7528\u6237\u4F53\u9A8C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9LCDNemaP\u7684\u521D\u6B65\u652F\u6301\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u8FC7\u6DFB\u52A0\u2019#include `, `<`, `string.h`, `>`, `\u2019\u4FEE\u6B63\u4E86\u751F\u6210\u7684mainBase.cpp\u6587\u4EF6\u5728unix\u4E0A\u7F16\u8BD1\u5931\u8D25\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u6587\u4EF6\u540D\u5305\u542B\u4E0B\u5212\u7EBF\u65F6\u56FE\u50CF\u6587\u4EF6\u786E\u8BA4\u62A5\u544A\u56FE\u50CF\u6709\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u80FD\u591F\u521B\u5EFA\u5E94\u7528\u540D\u5B57\u4E2D\u5E26\u7A7A\u683C\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed Dynamic Graph callback handlers being generated twice in Custom Containers.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u52A8\u6001\u56FE\u8868\u4E0ETouchGFX Designer\u5728\u7279\u5B9A\u8FB9\u754C\u6761\u4EF6\u4E0B\u53D1\u751F\u51B2\u7A81\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u4E00\u6B21\u6027\u4F7F\u7528\u6587\u672C\u548C\u8D44\u6E90\u6587\u672C\u4E4B\u95F4\u5207\u6362\uFF0C\u52A8\u6001\u56FE\u8868\u4E2D\u7684\u6807\u7B7E\u4E0D\u80FD\u66F4\u65B0\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F53\u4FEE\u6539\u52A8\u6001\u56FE\u8868\u5927\u5C0F\u65F6\uFF0C\u52A8\u6001\u56FE\u8868\u4E2D\u7684\u6807\u7B7E\u4F4D\u7F6E\u4E0D\u66F4\u65B0\u7684\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u6539\u5584\u6027\u80FD\uFF0C\u4F7F\u7528\u4E86\u65B0\u7684\u5931\u6548\u5316\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u5BB9\u5668Gauge\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BoxWithBorder\u73B0\u5DF2\u6539\u4E3ABox\u5B50\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u6539\u5584\u6027\u80FD\uFF0CLCD16\u548CLCD8 fillRect\u51FD\u6570\u73B0\u5728\u4E00\u6B21\u5199\u516532/16\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86CanvasWidget::resetMaxRenderLines()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06LCD2shiftVal()\u3001LCD2getPixel()\u548CLCD2setPixel()\u79FB\u5230\u4E86LCD2bpp\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06LCD4getPixel()\u548CLCD4setPixel()\u79FB\u5230\u4E86LCD4bpp\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::setScrollbarsPermanentlyVisible()\u51FD\u6570\u73B0\u5728\u7528\u4E00\u4E2A\u5E03\u5C14\u53C2\u6570\u6765\u5173\u95ED\u6C38\u4E45\u53EF\u89C1\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u548CScalableImage\u73B0\u5728\u90FD\u6539\u4E3A\u4E86Image\u7684\u5B50\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86AnimatedImage::setEndBitmap()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86AbstractClock::getCurrent12Hours\u548CAbstractClock::getCurrentAM()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::itoa()\u548CUnicode::utoa()\u6700\u591A\u53EF\u4EE5\u5904\u740636\u8FDB\u5236\u7684\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86AnalogClock::setAlpha()\u548CgetAlpha()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::setScrollbarsPermanentlyVisible()\u51FD\u6570\u73B0\u5728\u7528\u4E00\u4E2A\u5E03\u5C14\u53C2\u6570\u6765\u5173\u95ED\u6C38\u4E45\u53EF\u89C1\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86TextArea::resizeHeightToCurrentTextWithRotation()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::setWidthHeight()\uFF0C\u53EF\u4EE5\u4E00\u6B21\u6027\u4EE5(width,height)\u4E3A\u53C2\u6570\uFF0C\u8BBE\u7F6EDrawable\u3001Bitmap\u6216Rect\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::setXY(Drawable&)\u51FD\u6570\uFF0C\u53EF\u4EE5\u5C06Drawable\u7684\u5DE6\u4E0A\u89D2\u8BBE\u7F6E\u5728\u4E0E\u53E6\u4E00\u4E2ADrawable\u76F8\u540C\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Drawable::setPosition(Drawable&)\uFF0C\u53EF\u4EE5\u5C06Drawable\u653E\u7F6E\u5728\u4E0E\u53E6\u4E00\u4E2ADrawable\u76F8\u540C\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getRGBFrom24BitHSV()\u548CColor::getHSVFrom24BitRGB()\uFF0C\u53EF\u4EE5\u5728\uFF08\u8272\u76F8\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\uFF09\u548C\uFF08\u7EA2\u3001\u7EFF\u3001\u84DD\uFF09\u4E4B\u95F4\u8F6C\u6362\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getColorFrom24BitHSV()\u548CColor::getHSVFromColor()\uFF0C\u53EF\u4EE5\u5728\uFF08\u8272\u76F8\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\uFF09\u548Ccolortype\u4E4B\u95F4\u8F6C\u6362\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getHSVFromHSL()\u548CColor::getHSLFromHSV()\uFF0C\u53EF\u4EE5\u8F6C\u6362\u6570\u503C\u548C\u4EAE\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getRGBFrom24BitHSL()\u548CColor::getHSLFrom24BitRGB()\uFF0C\u4EE5\u4FBF\u5728\uFF08\u8272\u76F8\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\uFF09\u548C\uFF08\u7EA2\u3001\u7EFF\u3001\u84DD\uFF09\u4E4B\u95F4\u8F6C\u6362\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Color::getColorFrom24BitHSL()\u548CColor::getHSLFromColor()\uFF0C\u4EE5\u4FBF\u5728\uFF08\u8272\u76F8\u3001\u9971\u548C\u5EA6\u3001\u4EAE\u5EA6\uFF09\u548Ccolortype\u4E4B\u95F4\u8F6C\u6362\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PainterBW\u73B0\u5728\u53EF\u4EE5\u652F\u6301alpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SnprintFloat(s)\u73B0\u5728\u53EF\u4EE5\u5904\u7406NaN (\u201Dnan\u201D)\u548CInf (\u201Dinf\u201D)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SnprintFloat(s)\u73B0\u5728\u9ED8\u8BA4\u4E3A\u5C0F\u6570\u70B9\u540E6\u4F4D\u800C\u4E0D\u662F3\u4F4D\u3002 ANSI C\u4E2D\u662F\u201C\u5982\u679C\u7CBE\u5EA6\u7F3A\u5931\uFF0C\u63D0\u4F9B6\u4F4D\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Circle::setPixelCenter()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u8FDB\u5EA6\u6307\u793A\u6761\u589E\u52A0\u4E86updateValue()\u3001setEasingEquation()\u3001setValueSetAction()\u548CsetValueUpdatedAction()\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4ECE\u4E00\u4E2A\u503C\u5230\u53E6\u4E00\u4E2A\u503C\u7684\u5E73\u6ED1\u8FC7\u6E21\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86SwipeContainer::getSelectedPage\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86BlockTransition\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86CacheableContainer::setSolidRect()\u548CgetCacheBitmap()\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86getGraphAreaPaddingRight()\u7684\u62FC\u5199\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `In rare occasions the TextureMapper would draw some scanlines twice.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F53steps=0\u65F6\uFF0CAnimationTextureMapper\u3001ZoomAnimationImage\u3001MoveAnimation\u548CFadeAnimation\u90FD\u80FD\u5DE5\u4F5C\uFF0C\u5E76\u4F1A\u5728\u6700\u540E\u4E00\u4E2A\u52A8\u753B\u6B65\u9AA4\u7ED3\u675F\u52A8\u753B\u53D1\u51FA\u901A\u77E5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u590D\u4E86\u4ECE\u6309\u952E\u62D6\u79BB\u548C\u91CA\u653E\u65F6\u952E\u76D8\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider::getIndicatorMin()\u8FD4\u56DE\u6307\u793A\u4F4D\u6700\u5927\u503C\u800C\u4E0D\u662F\u6700\u5C0F\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4F1A\u7834\u574FBMP\u56FE\u50CF\u7684\u5806\uFF08\u4E14\u5F88\u53EF\u80FD\u5D29\u6E83\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7EB9\u7406\u6620\u5C04\u5668\u5728\u53CC\u7EBF\u6027\u6A21\u5F0F\u4E0B\u7ED8\u5236\u7684\u56FE\u50CF\u8FB9\u7F18\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F53alpha`, `<`, `255\u65F6BoxWithBorder\u8D85\u5BBD\u8FB9\u754C\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06ProgressIndicator\u7684\u8303\u56F4\u548C\u503C\u4FEE\u6B63\u4E3A\u5168\u90E8\u4E3A\u201Cint\u201D\u7C7B\u578B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u53EF\u7F13\u51B2\u5BB9\u5668\u663E\u793A\u65B9\u5411\u7684\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5F03\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E864.15\u53CA\u4E4B\u524D\u7248\u672C\u7684\u6240\u6709\u5F03\u7528\u51FD\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86ST1232TouchController\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F03\u7528\u4E86ZoomAnimationImage::setDimension\u3002 \u73B0\u4F7F\u7528setWidthHeight\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setXY\u548CDrawable::setPosition\u4E0D\u518D\u662F\u865A\u62DF\u51FD\u6570\u3002 \u53EA\u6709setX\u3001setY\u3001setWidth\u548CsetHeight\u662F\u865A\u62DF\u51FD\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AbstractProgressIndicator::getRange\u65B9\u6CD5\u4F7F\u7528int16_t&\u53C2\u6570`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4150"
  }), `\u7248\u672C4.15.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u63A7\u4EF6\uFF1A\u52A8\u6001\u56FE\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `M0\u5E73\u53F0\u73B0\u5728\u9ED8\u8BA4\u7981\u7528\u6240\u6709\u7EB9\u7406\u6620\u5C04\u5668\u7279\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u6ED1\u52A8-\u8F6C\u6362\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5168\u9762\u4FEE\u6B63\u4E86\u201C\u6DFB\u52A0\u63A7\u4EF6\u201D\u83DC\u5355\uFF08\u73B0\u5728\u53EF\u901A\u8FC7\u70B9\u51FB\u753B\u5E03\u63A7\u4EF6\u680F\u5DE6\u4E0A\u89D2\u7684\u6309\u94AE\u6216\u6309\u4E0B\u952E\u76D8\u4E0A\u7684\u201CA\u201D\u952E\u627E\u5230\u5B83\uFF09\uFF1A\u589E\u52A0\u4E86\u641C\u7D22\u529F\u80FD\u4E14\u53EF\u8C03\u6574\u5C3A\u5BF8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u70B9\u51FB\u5E95\u90E8\u72B6\u6001\u680F\u7684\u4EFB\u4F55\u4F4D\u7F6E\u5747\u53EF\u663E\u793A\u65E5\u5FD7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F53\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u72B6\u6001\u680F\u53D8\u4E3A\u7EA2\u8272\uFF0C\u6210\u529F\u65F6\u5219\u4E3A\u7EFF\u8272\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u7F29\u653E\u529F\u80FD\u79FB\u5230\u4E86\u5DE5\u5177\u680F\u53F3\u4E0A\u89D2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u4F7F\u753B\u5E03\u5728\u89C6\u56FE\u7AEF\u53E3\u4E2D\u5C45\u4E2D\u7684\u6309\u94AE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u952E\u76D8\u5FEB\u6377\u952E\uFF1A\u653E\u5927\uFF08Ctrl + \u2018+\u2019\uFF09\u3001\u7F29\u5C0F\uFF08Ctrl + \u2018-\u2019\uFF09\u548C\u91CD\u7F6E\u7F29\u653E\u6BD4\u4F8B\uFF08Ctrl + 0\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\u53EF\u4EE5\u9501\u5B9A\u63A7\u4EF6\u4F4D\u7F6E\uFF0C\u6B64\u64CD\u4F5C\u8FD8\u5C06\u7981\u7528\u753B\u5E03\u9009\u4E2D\uFF08\u5BF9\u4E8E\u80CC\u666F\u56FE\u50CF\u548C\u65B9\u5757\u5341\u5206\u6709\u7528\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u83B7\u5F97\u66F4\u597D\u7684\u4F53\u9A8C\uFF0C\u5728\u7A7A\u753B\u5E03\u4E0A\u63D2\u5165\u63A7\u4EF6\u65F6\uFF0C\u603B\u662F\u5728\u57FA\u672C\u89C6\u56FE\u4E2D\u751F\u6210\u9ED1\u8272\u65B9\u5757\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BF9\u8BB8\u591A\u5DE5\u5177\u63D0\u793A\u8FDB\u884C\u4E86\u5168\u9762\u7684\u76EE\u89C6\u68C0\u67E5\uFF0C\u5E76\u663E\u793A\u952E\u76D8\u5FEB\u6377\u952E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\u53EF\u4EE5\u9009\u62E9\u662F\u4EE5\u6620\u5C04\u8FD8\u662F\u975E\u6620\u5C04\u683C\u5F0F\u8F93\u51FA\u5B57\u4F53\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u5BFC\u5165\u5305\u542B\u76F8\u540C\u5B57\u4F53\u3001\u4F4D\u56FE\u7684\u5DE5\u7A0B\u65F6\uFF0CTouchGFX Designer\u6709\u65F6\u4F1A\u5D29\u6E83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FrontendHeapBase.hpp\u4E2D\u751F\u6210\u7684\u4EE3\u7801\u4F1A\u5305\u542B\u76F8\u540C\u8F6C\u6362\u5934\u6587\u4EF6\u7684\u591A\u4E2A\u526F\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u4EE5\u5C06\u63A7\u4EF6\u62D6\u653E\u5230\u6811\u89C6\u56FE\u4E2D\u7684\u6EDA\u52A8\u5217\u8868\u6216\u6EDA\u8F6E\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EE5\u5F80\u5728\u6DFB\u52A0\u63A7\u4EF6\u65F6\uFF0C\u4EA4\u4E92\u7684\u201C\u9009\u62E9\u6309\u94AE\u952E\u201D\u4F1A\u88AB\u6E05\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u65F6\u4F1A\u9009\u62E9\u9519\u8BEF\u7684\u9ED8\u8BA4\u8F6F\u4EF6\u5305\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5373\u4F7F\u8F6F\u4EF6\u5305\u5DF2\u5728\u786C\u76D8\u4E0A\u5DF2\u6709\uFF0C\u4ECD\u4F1A\u8FDB\u884C\u4E0B\u8F7D\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5B57\u4F53\u683C\u5F0F\u5141\u8BB8\u5C06\u5927\u591A\u6570\u5B57\u4F53\u6570\u636E\u5B58\u50A8\u5728\u672A\u6620\u5C04\u95EA\u5B58\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u90E8\u5206\u5E27\u7F13\u51B2\u5757\u4F20\u8F93\u7B97\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3AOSWrapper\u589E\u52A0\u4E86\u65B0\u7684\u539F\u578B\uFF1AisVSyncAvailable()\u548CsignalRenderingDone()\uFF0C\u53EF\u7528\u4E8E\u4E0D\u80FD\u5728waitForVSync\u4E2D\u963B\u585E\u7684\u5E73\u53F0\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86touchgfx::SingleBlockAllocator\uFF0C\u6539\u7528touchgfx::ManyBlockAllocator`, `<`, `block_size, 1, bytes_per_pixel`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL\u7684\u65B0\u65B9\u6CD5enableDMAAcceleration()\u53EF\u7981\u7528\u786C\u4EF6\u52A0\u901F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86TextureMapper::invalidateBoundingRects()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4F7F\u7528\u5DF2\u66F4\u65B0\u7684nlohmann-json 3.9.1\u3002 \u751F\u6210\u7684\u56FE\u50CF\u770B\u8D77\u6765\u4E00\u6837\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6A21\u62DF\u5668\u4E2D\u589E\u52A0\u4E86\u5355\u6B65\u6267\u884C\u3002 \u6309\u4E0BF9\u952E\u5C06\u5F00\u59CB/\u505C\u6B62\u6267\u884C\u3002 \u6309\u4E0BF10\u952E\u5C06\u5355\u6B65\u6267\u884C\u3002 \u8FD8\u53EF\u4EE5\u4F7F\u7528HALSDL2::setSingleStepping()\u3001HALSDL2::isSingleStepping()\u548CHALSDL2::singleStep()\u8FDB\u884C\u63A7\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u7684Graph\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86WipeTransition\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E9A\u7F8E\u5C3C\u4E9A\uFF08\u548C\u4E00\u4E9B\u897F\u91CC\u5C14\u8BED\uFF09\u6587\u5B57\u662F\u4ECE\u53F3\u5411\u5DE6\u4E66\u5199\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6ED1\u52A8\u540E\u5FEB\u901F\u89E6\u6478\u5E76\u91CA\u653E\u53EF\u80FD\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684GestureEvent\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u4F1A\u6B63\u786E\u6E32\u67D3\u53EA\u9700\u8981\u90E8\u5206\u91CD\u7ED8\u7684\u5DE8\u5927\u5B57\u5F62\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u6B65\u9AA4\u3002 \u8BF7\u53C2\u9605\u6587\u7AE0\u201C\u5DF2\u77E5\u95EE\u9898\u201D\u4E86\u89E3\u8BE6\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4140"
  }), `\u7248\u672C4.14.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2020\u5E747\u67082\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u6240\u6709\u94FE\u63A5\uFF0C\u4EE5\u4FBF\u5B9A\u5411\u5230\u65B0\u7684\u6587\u6863\u7F51\u7AD9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9SlideMenu\u63A7\u4EF6\u7684\u652F\u6301\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u9632\u6B62\u6F5C\u5728\u9519\u8BEF\uFF0C\u6587\u4EF6FrontendHeap.hpp\u4E2D\u5728app\u4E4B\u524D\u58F0\u660E\u4E86model\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86UI\u6A21\u677F\u9009\u62E9\u5668\u672A\u6B63\u786E\u6BD4\u8F83\u53EF\u7528\u8272\u6DF1\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u52A0\u8F7D\u524D\u6CA1\u6709\u68C0\u67E5.touchgfx.part\u6587\u4EF6\u7248\u672C\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u4E3A\u56FE\u50CF\uFF08\u652F\u6301L8\u56FE\u50CF\u548C\u6240\u67098\u4F4DLCD\uFF09\u9009\u62E9\u7279\u5B9A\u683C\u5F0F\u65F6\u5305\u542B\u7ED8\u56FE\u5668\u4EE3\u7801\u751F\u6210\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u65B0\u5EFA\u5E94\u7528\u65F6\u786E\u8BA4\u5E94\u7528\u540D\u79F0\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u901A\u8FC7\u6811\u89C6\u56FE\u5728\u5BB9\u5668\u7C7B\u578B\u63A7\u4EF6\u5185\u90E8\u62D6\u52A8\u5B83\u4EEC\u65F6\u53D1\u751F\u7684\u9519\u8BEF\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::lockDMAToPorch\u9ED8\u8BA4\u503C\u8BBE\u7F6E\u4E3Afalse\u800C\u975Etrue\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Font::getDataFormatA4()\u73B0\u5728\u547D\u540D\u4E3AFont::getByteAlignRow()\uFF0C\u56E0\u4E3A\u548C4bpp\u5B57\u4F53\u4E00\u6837\uFF0C\u5B83\u53EF\u80FD\u8BBE\u7F6E\u4E3A\u4E862bpp\u5B57\u4F53\u62161bpp\u5B57\u4F53\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4FDD\u6301\u4E00\u81F4\uFF0CGestureType\u73B0\u66F4\u540D\u4E3AGestureEventType\u3002 GestureType\u5DF2\u5F03\u7528\uFF0C\u5F88\u5FEB\u5C06\u5220\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Version.hpp\uFF0C\u542B\u6709\u9488\u5BF9TouchGFX\u5F53\u524D\u7248\u672C\u7684\u5B8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u652F\u6301\u4EE5\u6570\u5B57\u5F00\u5934\u7684\u56FE\u50CF\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u8F93\u51FA\u5E26\u6709\u524D\u7F00\u201Cimage_\u201D\u7684.cpp\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86ImageConvert\u5185\u7F6E\u5E2E\u52A9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u53EF\u4EE5\u7F16\u5199application.config\u6A21\u677F\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Unicode::strncmp_ignore_whitespace\uFF0C\u5C06\u5FFD\u7565\u7A7A\u767D\u5B57\u7B26\u800C\u4E0D\u4EC5\u4EC5\u7A7A\u683C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FontConvert\u4F7F\u7528\u5DF2\u66F4\u65B0\u7684freetype 2.10.2\u3002 \u8FD9\u4F1A\u4F7F\u7684\u5BF9\u9F50\u5B57\u7B26\u66F4\u6574\u9F50\u7F8E\u89C2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4F7F\u7528\u5DF2\u66F4\u65B0\u7684libpng 1.6.37\u3002 \u751F\u6210\u7684\u56FE\u50CF\u770B\u8D77\u6765\u662F\u4E00\u6837\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3AScrollableContainer\u589E\u52A0\u4E86setDurationSpeedup\u3001getDurationSpeedup\u3001setDurationSlowdown\u548CgetDurationSlowdown\u51FD\u6570\u3002 \u8FD9\u6709\u5229\u4E8E\u66F4\u597D\u5730\u63A7\u5236\u5BF9\u6ED1\u52A8\u624B\u52BF\u4F7F\u7528\u7684\u52A8\u753B\u6B65\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Extended SlideMenu\u63A7\u4EF6\u53EF\u80FD\u4E0D\u9700\u8981\u6309\u94AE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u50CF\u6570\u5B57\u7C7B\u578B\u4E00\u6837\u4F7F\u7528colortype\u53D8\u91CF\u4F1A\u81EA\u52A8\u5C06\u5176\u8F6C\u6362\u4E3Auint32_t\u800C\u975Euint16_t\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728Keil\u5DE5\u7A0B\u4E2D\u589E\u52A0\u4E86ARMCLANG-6.x\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301Cortex-M33\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6784\u9020\u51FD\u6570\u4E2DBoxWithBorder\u4E0D\u4F1A\u8BBE\u7F6EborderColor\u548CborderSize\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::snprintf()\u4E2D\u7684\u51E0\u5904\u4FEE\u6B63\uFF1A\u5220\u9664\u4E86\u683C\u5F0F\u5B57\u7B26\u4E32\u768464\u4E2A\u5B57\u7B26\u9650\u5236\u3002 \u4E0D\u5BF9%o\u3001%x\u548C%X\u5F3A\u5236\u4F7F\u7528\u7B26\u53F7\u5B57\u7B26\u3002 %05c\u65E0\u524D\u7F00\u96F6\u3002 \u4EE50\u4E3A\u503C\u4FEE\u6B63\u4E86%c\u7684\u5904\u7406\u3002 \u6B63\u786E\u5904\u7406\u4E86%s (%+s, %0s)\u7684\u7B26\u53F7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u66F4\u6539\u4E86\u5927\u5C0F\uFF0CScrollListWithCenterSelect\u53EF\u80FD\u53D1\u751F\u6545\u969C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u6355\u6349\u529F\u80FD\u7684ScrollList\u4E0D\u62A5\u544A\u6B63\u786E\u7684\u70B9\u51FB\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6CA1\u6709\u6355\u6349\u529F\u80FD\u7684\u975E\u5FAA\u73AFScrollList\u53EF\u80FD\u62A5\u544A\u9519\u8BEF\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollList\u5728\u6761\u76EE\u88AB\u70B9\u51FB\u65F6\u4E0D\u5F71\u54CD\u586B\u5145\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528setColor(color,alpha)\u7684CWR Painter\u73B0\u5728\u53EA\u63A5\u53D7\u8272\u5F69\u53C2\u6570\u3002 \u4F7F\u7528setAlpha(alpha)\u8BBE\u7F6Ealpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7F13\u5B58\u4F4D\u56FE\u672A\u4E0E\u975E\u5076\u6570\u52A8\u6001\u4F4D\u56FE32\u4F4D\u5BF9\u9F50\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LED.hpp\u4E0D\u518D\u5305\u542Blpc_types.h\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5F03\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F03\u7528\u51FD\u6570\u73B0\u5DF2\u6807\u8BB0\u4E3A\u5F03\u7528\uFF0C\u56E0\u6B64\u7F16\u8BD1\u5668\u53EF\u4EE5\u53D1\u51FA\u5173\u4E8E\u8FD9\u4E9B\u51FD\u6570\u7684\u8B66\u544A\u3002 \u5F03\u7528\u51FD\u6570\u5C06\u6765\u4F1A\u5220\u9664\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86Unicode::EMPTY\u7684\u5B9A\u4E49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PI\u7684\u5B9A\u4E49\u5DF2\u4ECEMath3D.hpp\u79FB\u5230\u4E86Types.hpp\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EasingEquation.hpp\u4E2D\u5B9A\u4E49\u7684\u201Cpi\u201D\u5DF2\u7531PI\u53D6\u4EE3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4E0D\u518D\u652F\u6301-f\u3001-o\u548C-header\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86Image::hasTransparentPixels\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u6B65\u9AA4\u3002 \u8BF7\u53C2\u9605\u6587\u7AE0\u201C\u5DF2\u77E5\u95EE\u9898\u201D\u4E86\u89E3\u8BE6\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4134"
  }), `\u7248\u672C4.13.4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A 2020\u5E747\u670827\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E9A\u7F8E\u5C3C\u4E9A\uFF08\u548C\u4E00\u4E9B\u897F\u91CC\u5C14\u8BED\uFF09\u6587\u5B57\u662F\u4ECE\u53F3\u5411\u5DE6\u4E66\u5199\u7684\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4133"
  }), `\u7248\u672C4.13.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A 2020\u5E745\u670829\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u8FDB\u4E86\u963F\u62C9\u4F2F\u8BED\u3001\u5370\u5730\u8BED\u3001\u6CF0\u56FD\u8BED\u548C\u5176\u4ED6\u590D\u6742\u8BED\u8A00\u7684\u6587\u672C\u6E32\u67D3\u6027\u80FD\u3002 \u6E32\u67D3\u65F6\u95F4\u51CF\u5C11\u4E8620%-33%\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u8BED\u8A00\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollList\u548CScrollWheel\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\u4F1A\u671D\u9519\u8BEF\u65B9\u5411\u6EDA\u52A8\uFF0C\u6216\u8005\u6EDA\u52A8\u592A\u591A\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4132"
  }), `\u7248\u672C4.13.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2020\u5E744\u670828\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u8FDE\u63A5\u5230Hamza\u65F6\u7684\u963F\u62C9\u4F2F\u8FDE\u5B57\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u9762\u5411Lam + Alef\u7684\u963F\u62C9\u4F2F\u8FDE\u5B57\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u963F\u62C9\u4F2F\u53E3\u97F3\u7684\u4F4D\u7F6E\u95EE\u9898\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4131"
  }), `\u7248\u672C4.13.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2020\u5E743\u67084\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u80FD\u591F\u5728LCD24\u4E0A\u7ED8\u5236RGB565\u52A8\u6001\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u8FDB\u4E86\u4E00\u4E9B\u963F\u62C9\u4F2F\u5B57\u7B26\u5E8F\u5217\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u590D\u4E86Unicode U+200B\u7684\u95EE\u9898\uFF08\u96F6\u5BBD\u5EA6\u7A7A\u767D\u5B57\u7B26\uFF09\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4130"
  }), `\u7248\u672C4.13.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u201C.touchgfx.part\u201D\u6587\u4EF6\u3002 \u8FD9\u4E9B\u53EF\u7528\u4E8E\u5DE5\u7A0B\u7684\u5916\u90E8\u8F93\u5165\uFF08\u5982CubeMX\u96C6\u6210\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u8FC7\u201C\u914D\u7F6E\u201D\u9009\u9879\u5361\u4E0A\u7684\u201C\u6846\u67B6\u7279\u6027\u201D\u7C7B\u76EE\uFF0C\u4E3ATextureMapper\u9009\u62E9\u652F\u6301\u7684\u56FE\u50CF\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\u53EF\u4EE5\u5728TouchGFX Designer\u5185\u91CD\u5199\u751F\u6210\u8D44\u6E90\u3001\u751F\u6210\u540E\u6307\u4EE4\u3001\u7F16\u8BD1\u4EFF\u771F\u5668\u3001\u8FD0\u884C\u4EFF\u771F\u5668\u3001\u7F16\u8BD1\u76EE\u6807\u548C\u70E7\u5F55\u76EE\u6807\u6307\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u753B\u5E03\u4E0A\u7684\u7F29\u653E/\u6EDA\u52A8\u6548\u679C\uFF0C\u652F\u6301\u5728\u5C06\u63A7\u4EF6\u62D6\u653E\u5230\u753B\u5E03\u8FB9\u7F18\u65F6\u81EA\u52A8\u6EDA\u52A8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u5F53\u524D\u4EE3\u7801\u662F\u6700\u65B0\u7684\uFF0C\u663E\u793A\u201C\u751F\u6210\u4EE3\u7801\u201D\u6309\u94AE\uFF0C\u5982\u679C\u8FC7\u671F\uFF0C\u5219\u663E\u793A\u84DD\u70B9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\u53EF\u4EE5\u7528\u5FEB\u6377\u952EAlt + F\u3001Alt + E\u548CAlt + H\u5206\u522B\u6253\u5F00\u201C\u6587\u4EF6\u201D\u3001\u201C\u7F16\u8F91\u201D\u548C\u201C\u5E2E\u52A9\u201D\u83DC\u5355\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u201C\u5E2E\u52A9\u201D\u83DC\u5355\u5305\u542B\u6307\u5411TouchGFX\u5E2E\u52A9\u4E2D\u5FC3\u7684\u76F4\u63A5\u94FE\u63A5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u8FC7\u201C\u914D\u7F6E\u201D\u9009\u9879\u5361\u4FEE\u6539\u6587\u672C\u914D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8BE6\u7EC6\u65E5\u5FD7\u53EF\u4EE5\u5728TouchGFX Designer\u5185\u90E8\u6D6E\u52A8\u6216\u505C\u9760\uFF0C\u5E76\u4E14\u53EF\u4F7F\u7528\u5FEB\u6377\u952EAlt + L\u6253\u5F00\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\u7248\u672C\u663E\u793A\u5728\u7A97\u53E3\u7684\u6807\u9898\u680F\u4E0A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u201C\u6700\u8FD1\u4F7F\u7528\u7684\u5DE5\u7A0B\u201D\u5217\u8868\u663E\u793A\u5DE5\u7A0B\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u53EA\u6709\u5DE5\u7A0B\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u5728\u753B\u5E03\u4E0A\u79FB\u52A8\u63A7\u4EF6\u65F6\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u5728\u56FE\u50CF\u7BA1\u7406\u5668\u4E2D\u6E32\u67D3\u884C\u65F6\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u5728\u63A7\u4EF6\u6811\u89C6\u56FE\u4E2D\u91CD\u65B0\u6392\u5217\u5DE5\u7A0B\u65F6\u7684\u6027\u80FD\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5EF6\u8FDF\u548C\u6309\u94AE\u56DE\u8C03\u4EA4\u4E92\u53EF\u80FD\u5BFC\u81F4\u751F\u6210\u9519\u8BEF\u4EE3\u7801\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528TouchGFX CLI\u751F\u6210\u5DE5\u7A0B\u672A\u6B63\u786E\u5305\u542B\u4F7F\u7528\u7684TouchGFX\u8D44\u6E90\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6709\u65F6\u4E0D\u80FD\u6B63\u786E\u66F4\u65B0\u5C4F\u5E55\u753B\u5E03\u7F13\u51B2\u533A\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u91CD\u65B0\u5C1D\u8BD5\u4E0B\u8F7D\u65F6\u542F\u52A8\u754C\u9762\u4E0A\u663E\u793A\u7684\u9519\u8BEF\u4FE1\u606F\u4E0D\u80FD\u6D88\u5931\u7684\u89C6\u89C9\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u8C03\u7528\u865A\u62DF\u51FD\u6570\u4EA4\u4E92\u7684\u51FD\u6570\u540D\u672A\u6B63\u786E\u9A8C\u8BC1\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86TouchGFX Designer\u753B\u5E03\u4E0A\u6709\u65F6\u672A\u6B63\u786E\u6E32\u67D3\u8FDB\u5EA6\u6307\u793A\u6761\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u65B0\u5EFA\u5DE5\u7A0B\u4F46\u4E0D\u4FDD\u5B58\u4F1A\u5BFC\u81F4\u5728\u91CD\u8F7D\u5DE5\u7A0B\u65F6\u9ED8\u8BA4\u5B57\u4F53\u6392\u5370\u6D88\u5931\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6587\u672C\u7BA1\u7406\u5668\u770B\u8D77\u6765\u6301\u7EED\u805A\u7126\u4E8E\u9519\u8BEF\u5355\u5143\u683C\u7684\u89C6\u89C9\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u63A7\u4EF6\u7684\u201C\u5C5E\u6027\u201D\u9009\u9879\u5361\u4E0D\u80FD\u6B63\u5E38\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u751F\u6210\u6309\u94AE\u70B9\u51FB\u5904\u7406\u51FD\u6570\u6709\u65F6\u4F1A\u4EA7\u751F\u7A7A\u7684if/else\u8BED\u53E5\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u8FDB\u4E86\u542F\u52A8\u7A97\u53E3\u4E2D\u7684\u641C\u7D22\u5B57\u6BB5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F53\u590D\u5236\u4E86\u4E00\u4E2A\u5F62\u72B6\u63A7\u4EF6\u5E76\u7F16\u8F91\u8FD9\u4E24\u4E2A\u63A7\u4EF6\u4E2D\u7684\u4E00\u4E2A\u4E0A\u7684\u67D0\u70B9\u4F1A\u5BFC\u81F4\u4E24\u8005\u90FD\u53D1\u751F\u53D8\u5316\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u4ECE\u5B57\u4F53\u6392\u5370\u9009\u62E9\u5668\u66F4\u6539\u5B57\u4F53\u65F6\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u6EDA\u52A8\u9009\u9879\u4F1A\u5BFC\u81F4\u5F39\u51FA\u7A97\u53E3\u5173\u95ED\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u52A0\u8F7D\u5305\u542B\u8DF3\u8F6C\u5C4F\u5E55\u64CD\u4F5C\u7684\u5DE5\u7A0B\u65F6\u4E0D\u80FD\u6B63\u786E\u52A0\u8F7D\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u63A7\u4EF6\u6811\u89C6\u56FE\u4E2D\u5C55\u5F00/\u6298\u53E0\u8282\u70B9\u4F1A\u5BFC\u81F4\u8BE5\u8282\u70B9\u88AB\u9009\u4E2D\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C06UI\u5BFC\u5165\u5E94\u7528\u65F6\u9519\u8BEF\u5BFC\u5165\u4E00\u4E9B\u503C\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u56FE\u50CF\u9009\u62E9\u5668\u4E2D\u6D4F\u89C8\u6587\u4EF6\u5939\u65F6\u53D1\u751F\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6ED1\u52A8\u5BB9\u5668\u4E2D\u7684\u9875\u9762\u987A\u5E8F\u663E\u793A\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86TouchGFX Designer\u753B\u5E03\u4E0A\u7EB9\u7406\u6620\u5C04\u5668\u6E32\u67D3\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5DF2\u5220\u9664\u4EA4\u4E92\u6E90\u786E\u8BA4\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u91CD\u547D\u540Dassets/images\u4E0B\u542B\u6709\u5B50\u6587\u4EF6\u5939\u7684\u6587\u4EF6\u5939\u53EF\u80FD\u5BFC\u81F4TouchGFX Designer\u5D29\u6E83\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86RadioButtons\u4E0A\u7684\u4EA4\u4E92\u751F\u6210\u91CD\u590D\u4EE3\u7801\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C06\u540C\u4E00\u56FE\u50CF\u4ECE\u6587\u4EF6\u6D4F\u89C8\u5668\u62D6\u653E\u5230TouchGFX Designer\u4E24\u6B21\u4F1A\u5BFC\u81F4\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5355\u9009\u6309\u94AE\u4EA4\u4E92\u6709\u65F6\u4F1A\u5BFC\u81F4\u91CD\u590D\u4EE3\u7801\u751F\u6210\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u91CD\u5199\u753B\u5E03\u7F13\u51B2\u533A\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6240\u751F\u6210\u4EE3\u7801\u7684\u65B0\u884C\u7F3A\u5931\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u4F7F\u7528\u571F\u8033\u5176\u8BED\u533A\u57DF\u683C\u5F0F\u65F6TouchGFX Designer\u4F1A\u751F\u6210\u9519\u8BEF\u4EE3\u7801\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u81EA\u5B9A\u4E49\u64CD\u4F5C/\u89E6\u53D1\u6761\u4EF6\u6587\u672C\u6846\u4E2D\u6709\u957F\u6587\u672C\u65F6\u4F1A\u5BFC\u81F4UI\u4E2D\u53D1\u751F\u4E0D\u5FC5\u8981\u79FB\u4F4D\u7684\u89C6\u89C9\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5220\u9664\u5E94\u7528\u4E2D\u6700\u540E\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5BB9\u5668\u4E4B\u540E\u7684\u7CFB\u5217\u6B65\u9AA4\u4F1A\u5BFC\u81F4TouchGFX Designer\u5D29\u6E83\u7684\u6545\u969C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C06\u4E00\u4E2A\u5C4F\u5E55\u4E0A\u81EA\u5B9A\u4E49\u5BB9\u5668\u5B9E\u4F8B\u590D\u5236\u5230\u81EA\u5B9A\u4E49\u5BB9\u5668\u5B9A\u4E49\u65F6\u64CD\u4F5C\u65E0\u6548\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5339\u914DUI\u6A21\u677F\u7B5B\u9009\u5668\u975E\u9884\u671F\u5DE5\u4F5C\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CTouchGFX Designer\u53EF\u652F\u6301\u5305\u542B\u53E5\u70B9\u7684\u5E94\u7528\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C06\u5E26\u6837\u5F0F\u7684\u6ED1\u5757\u4ECE\u6C34\u5E73\u4FEE\u6539\u4E3A\u5782\u76F4\u4F1A\u5BFC\u81F4\u6837\u5F0F\u8BBE\u7F6E\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u66F4\u6539\u5B57\u4F53\u6392\u5370\u7684\u5B57\u4F53\u4F1A\u5BFC\u81F4UI\u4E2D\u67D0\u4E9B\u4F4D\u7F6E\u4E0D\u80FD\u663E\u793A\u6B63\u786E\u5B57\u4F53\u540D\u79F0\u7684\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\u6027\u80FD\u6539\u5584\u3002 \u6E32\u67D3\u65F6\u95F4\u7F29\u77ED10%\u81F360%\u4E0D\u7B49\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u56FE\u50CF\u683C\u5F0F\u3001\u6E32\u67D3\u7B97\u6CD5\u3001\u786C\u4EF6\u8BBE\u7F6E\u548C\u56FE\u50CF\u5E03\u5C40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7EB9\u7406\u6620\u5C04\u5668\u9ED8\u8BA4\u7981\u7528\uFF0C\u4F7F\u7528\u524D\u9700\u8981\u542F\u7528\u3002 \u70B9\u51FB\u968F\u540E\u7684\u94FE\u63A5\u9605\u8BFB\u5173\u4E8E\u6B64\u7279\u6027\u7684\u66F4\u591A\u5185\u5BB9\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#texturemapper-is-disabled-by-default"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#texturemapper-is-disabled-by-default`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6240\u6709LCD\u7C7B\u578B\u4E2D\u589E\u52A0\u4E86\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u6253\u5370\u7528\u4E8E\u8C03\u8BD5\u3002 \u53C2\u89C1\uFF1A `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://touchgfx.zendesk.com/hc/en-us/articles/205074511"
  }), `https://touchgfx.zendesk.com/hc/en-us/articles/205074511`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B57\u4F53\u7F13\u5B58\u73B0\u5728\u53EF\u652F\u6301\u5728\u5370\u5730\u6587\u4E2D\u4F7F\u7528\u7684GSUB\u8868\u3002 \u53C2\u89C1\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/development/ui-development/touchgfx-engine-features/font-cache/#caching-gsub-tables"
  }), `https://support.touchgfx.com/docs/development/ui-development/touchgfx-engine-features/font-cache/#caching-gsub-tables`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `arm gcc\u7F16\u8BD1\u5668\u5DF2\u66F4\u65B0\u81F3\u7248\u672C7.3.1 2018q2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `gcc\u7F16\u8BD1\u5668\u5DF2\u66F4\u65B0\u81F3\u7248\u672C7.3.0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528\u6700\u65B0\u7248\u7684\u6587\u4EF6\u5305\u66F4\u65B0\u4E86mingw\u73AF\u5883\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\uFF1A\u4FEE\u6B63/\u6539\u5584\u4E86\u53CC\u7EBF\u6027\u6A21\u5F0F\u4E0B\u7684\u8FB9\u7F18\u6DF7\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\uFF1A\u8FD1\u90BB\u6A21\u5F0F\u4E0B\u7684\u7EC6\u5FAE\u56FE\u50CF\u8D28\u91CF\u6539\u5584\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u963F\u62C9\u4F2F\u8BED\u6587\u672C\u201C12:34\u201D\u4E4B\u524D\u5728RTL\u4E2D\u88AB\u6E32\u67D3\u4E3A\u201C34:12\u201D\u7684\u6587\u672C\u987A\u5E8F\u9519\u8BEF\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5F03\u7528\u7684TouchGFX Core\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86\u5DF2\u5F03\u7528\u7684TRANSPARENT_COL\u7684\u5B9A\u4E49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86Drawable::getType()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86HAL::blitSetTransparencyKey()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86HAL::registerTextCache()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86HAL::cacheTextString()\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u6B65\u9AA4\u3002 \u8BF7\u53C2\u9605\u6587\u7AE0\u201C\u5DF2\u77E5\u95EE\u9898\u201D\u4E86\u89E3\u8BE6\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4123"
  }), `\u7248\u672C4.12.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2019\u5E749\u670825\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7684TouchGFX\u6838\u5FC3\u7279\u6027\uFF08\u81EA## \u7248\u672C4.12.0 {#version-4120}\uFF09\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E8C\u8FDB\u5236\u5B57\u4F53\uFF1A\u4E8C\u8FDB\u5236\u5B57\u4F53\u53EF\u7528\u4F5C\u5C06\u5B57\u4F53\u4FE1\u606F\u7F16\u8BD1\u5E76\u94FE\u63A5\u5230\u5E94\u7528\u7684\u66FF\u4EE3\u65B9\u6848\u3002 \u6B64\u65B9\u6CD5\u7684\u4E3B\u8981\u4F18\u52BF\u662F\u5E94\u7528\u7684\u4E8C\u8FDB\u5236\u6570\u636E\u91CF\u66F4\u5C11\uFF0C\u5728\u4E3A\u8BBE\u5907\u63D0\u4F9B\u4E0D\u540C\u5B57\u4F53\u96C6\u5408\u65B9\u9762\u5177\u6709\u7075\u6D3B\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B57\u4F53\u7F13\u5B58\uFF1A\u652F\u6301\u4E8C\u8FDB\u5236\u5B57\u4F53\u7F13\u5B58\uFF0C\u9002\u5408\u5728\u663E\u793A\u5B57\u7B26\u4E32\u65F6\u53EA\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u52A0\u8F7D\u9700\u8981\u7684\u5B57\u7B26\u7684\u60C5\u51B5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E8C\u8FDB\u5236\u7FFB\u8BD1\uFF1A\u652F\u6301\u4E8C\u8FDB\u5236\u7FFB\u8BD1\uFF0C\u9002\u5408\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u52A0\u8F7D\u7FFB\u8BD1\u6587\u4EF6\u800C\u4E0D\u662F\u5C06\u5B83\u4EEC\u94FE\u63A5\u5230\u5E94\u7528\u4E2D\u3002 \u70B9\u51FB\u6B64\u94FE\u63A5\u9605\u8BFB\u5173\u4E8E\u8FD9\u4E9B\u7279\u6027\u7684\u66F4\u591A\u5185\u5BB9\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://touchgfx.zendesk.com/hc/en-us/articles/360024979552"
  }), `https://touchgfx.zendesk.com/hc/en-us/articles/360024979552`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u630116bpp\u663E\u793A\u7684\u975E\u5B58\u50A8\u5668\u6620\u5C04\u95EA\u5B58\uFF0C\u5141\u8BB8\u5728\u8BF8\u5982\u4EF7\u683C\u4E0D\u8D35\u7684SPI\u95EA\u5B58\u4E2D\u5B58\u50A8\u56FE\u50CF\u548C\u5B57\u4F53\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Arabic ligatures Allah\u3001Akbar\u3001Mohammad\u3001Salam\u3001Rasoul\u3001Alayhe\u3001Wasallam\u548CRial Sign\u7684Uniicode\u7801\u5E8F\u5217\u8BC6\u522B\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\uFF08\u53CC\u7EBF\u6027\uFF09\u65E0\u6CD5\u572824bpp\u663E\u793A\u5C4F\u4E0A\u6B63\u786E\u7ED8\u5236L8_RGB888\u548CRGB888\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u4E0D\u652F\u6301\u901A\u914D\u7B26\u7684TextArea\u4E2D\u4EE5RTL\u6A21\u5F0F\u8BBE\u7F6E\u542B\u901A\u914D\u7B26\u7684\u6587\u672C\u65F6\u53EF\u80FD\u5BFC\u81F4\u5D29\u6E83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679CCacheableContainer\u5C0F\u4E8E\u76F8\u5173\u4F4D\u56FE\uFF0C\u5BB9\u5668\u7684\u5927\u5C0F\u4E0D\u6B63\u786E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E868bpp LCD\u4E0A\u7684SnapshotWidget\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E00\u4E9B\u963F\u62C9\u4F2F\u6587\u8FDE\u5B57\u7684\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E00\u4E9B\u5370\u5730\u6587\u8FDE\u5B57\u7684\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5E94\u7528\u7279\u5B9AGSUB\u7F6E\u6362\u89C4\u5219\u65F6\u7684\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E8C\u8FDB\u5236\u5B57\u4F53\u5305\u542B\u989D\u5916\u89C4\u5219\u7684\u95EE\u9898\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4122"
  }), `\u7248\u672C4.12.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2019\u5E748\u670822\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u4F7F\u7528TextArea::setWideTextAction()\u7684WordWrapping\u5BBD\u6587\u672C\u5728\u666E\u901A\u7A7A\u767D\u5B57\u7B26\u548C\u7EDF\u4E00\u7801\u5B57\u7B260x200B\uFF08\u96F6\u5BBD\u5EA6\u7A7A\u767D\u5B57\u7B26\uFF09\u5904\u6362\u884C\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E8C\u8FDB\u5236\u5B57\u4F53\uFF1A\u5F53\u5E94\u7528\u914D\u7F6E\u4E2D\u6307\u5B9A\u4E86\u201Cbinary_fonts\u201D\u9009\u9879\u65F6\uFF0CfontConverter\u5DE5\u5177\u672A\u5C06\u5B57\u8DDD\u8C03\u6574\u6570\u636E\u5199\u5165\u4E8C\u8FDB\u5236\u5B57\u4F53\u6587\u4EF6\u3002 \u8FD9\u5BFC\u81F4\u4F7F\u7528\u4E8C\u8FDB\u5236\u5B57\u4F53\u65F6\u7684\u6587\u672C\u663E\u793A\u9519\u8BEF\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4121"
  }), `\u7248\u672C4.12.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2019\u5E748\u670815\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u4E86\u201CThird Party Components.pdf\u201D\u4EE5\u663E\u793A\u66F4\u65B0\u7684\u7EC4\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5EF6\u65F6\u64CD\u4F5C\u548C\u6309\u94AE\u70B9\u51FB\u64CD\u4F5C\u540C\u65F6\u53D1\u751F\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C06\u753B\u5E03\u63A7\u4EF6\u6DFB\u52A0\u5230\u81EA\u5B9A\u4E49\u5BB9\u5668\u5B9E\u4F8B\u65F6\u5C4F\u5E55\u7684\u753B\u5E03\u7F13\u51B2\u533A\u672A\u80FD\u6B63\u786E\u66F4\u65B0\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u201C\u5728\u7EBF\u5E94\u7528\u201D\u7A97\u53E3\u4E2D\u7684\u9519\u8BEF\u4FE1\u606F\u4F1A\u53D1\u751F\u5361\u6EDE\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528\u4E0D\u540C\u8FDB\u5EA6\u6307\u793A\u6761\u7684Alpha\u503C\u65F6TouchGFX Designer\u4E2D\u753B\u5E03\u4E0A\u7684\u6E32\u67D3\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u65B0\u5EFA\u5DE5\u7A0B\u3001\u4E0D\u4FDD\u5B58\u5373\u5173\u95EDTouchGFX Designer\u4EE5\u53CA\u91CD\u8F7D\u5DE5\u7A0B\u4F1A\u5BFC\u81F4\u5DE5\u7A0B\u65E0\u53EF\u7528\u5B57\u4F53\u6392\u5370\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u5728\u5C1D\u8BD5\u5C06\u5DF2\u6253\u5F00\u7684UI\u5BFC\u5165\u53E6\u4E00\u5DE5\u7A0B\u65F6\u751F\u6210\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u4F7F\u4E4B\u66F4\u6E05\u6670\u6613\u61C2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u7279\u5B9A\u73AF\u5883\u4E0B\u6587\u672C\u7BA1\u7406\u5668\u770B\u8D77\u6765\u53EF\u80FD\u6709\u591A\u4E2A\u4E2D\u5FC3\u70B9\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F53\u63A7\u4EF6\u4E0A\u51FA\u73B0\u9519\u8BEF\u65F6\uFF0C\u63A7\u4EF6\u201C\u5C5E\u6027\u201D\u9009\u9879\u5361\u4E0D\u80FD\u6B63\u786E\u663E\u793A\u7EA2\u8272\u8FB9\u754C\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u91CD\u65B0\u52A0\u8F7D\u4F7F\u7528Consolas\u5B57\u4F53\u7684\u5DE5\u7A0B\u540E\uFF0C\u4F7F\u7528\u8BE5\u5B57\u4F53\u4F1A\u5BFC\u81F4TouchGFX Designer\u7684\u753B\u5E03\u4E0A\u53D1\u751F\u9519\u8BEF\u6E32\u67D3\u7684\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u663E\u793A\u65CB\u8F6C\u65F6\u7684TextureMapper\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5FFD\u7565CachedFont\u7684\u5B57\u8DDD\u8C03\u6574\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CachedFont\u4E0D\u67E5\u770B\u5B57\u4F53\u7F13\u5B58\u83B7\u53D6\u56DE\u8C03\u5B57\u7B26\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4120"
  }), `\u7248\u672C4.12.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2019\u5E747\u67086\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u91CD\u8981\u5347\u7EA7\u4FE1\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86drawGlyph\u7684\u516C\u5171\u7248\u672C\u3002 \u6539\u4E3A\u4F7F\u7528drawString\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u5BF9\u975E\u900F\u660E\u56FE\u50CF\u4F7F\u7528\u4F4D\u56FE\u683C\u5F0FARGB8888\uFF0C\u5C06\u4E0D\u518D\u5E94\u7528\u6296\u8272\u8F6C\u4E3A565\uFF0C\u800C\u662F\u4FDD\u7559\u5176\u5B8C\u6574\u7684888\u8272\u5F69\u503C\u3002 \u5982\u679C\u5BF9\u900F\u660E\u56FE\u50CF\u4F7F\u7528ARGB8888\uFF0C\u5219\u5F53\u4E0D\u900F\u660E\u683C\u5F0F\u4E3ARGB565\u65F6\uFF0C\u4ECD\u4F1A\u4F7F\u7528\u6296\u8272\u8F6C\u4E3A565\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679CBW_RLE\u683C\u5F0F\u5BFC\u81F4\u8F6C\u6362\u7684\u56FE\u50CF\u53D8\u5927\uFF0C\u56DE\u9000BW_RLE\u7684\u56FE\u50CF\u5C06\u4E0D\u518D\u6062\u590D\u4E3ABW\u683C\u5F0F\uFF0C \u8F6C\u800C\u7531\u56FE\u50CF\u8F6C\u6362\u5668\u751F\u6210\u8B66\u544A\u4FE1\u606F\u3002 \u4F7F\u7528TouchGFX Designer\uFF08\u6216\u65B0\u7684\u914D\u7F6E\u6587\u4EF6\uFF09\u4E3A\u6BCF\u5F20\u56FE\u50CF\u6307\u5B9ABW\u6216BW_RLE\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5B9A\u5236\u5BB9\u5668\u53EF\u4EE5\u5D4C\u5957\u5728\u53E6\u4E00\u4E2A\u5B9A\u5236\u5BB9\u5668\u4E2D\u3002 \u56E0\u6B64\uFF0C\u53EF\u4EE5\u65E0\u9650\u5730\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6784\u6210\u66F4\u5927\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u81EA\u5B9A\u4E49\u5BB9\u5668\u652F\u6301\u81EA\u5B9A\u4E49\u89E6\u53D1\u6761\u4EF6\u548C\u81EA\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u5C4F\u5E55\u652F\u6301\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002 \u8FD9\u4E9B\u89E6\u53D1\u6761\u4EF6\u548C\u64CD\u4F5C\u652F\u6301\u4ECE\u4E00\u4E2A\u7EC4\u4EF6\u5230\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u7684\u4FE1\u606F\u6D41\u3002 \u5728TouchGFX Designer\u5185\u90E8\u7684\u4EA4\u4E92\u4E2D\u4F7F\u7528\u6B64\u7C7B\u89E6\u53D1\u6761\u4EF6\u548C\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u79BB\u5F00TouchGFX Designer\u7684\u60C5\u51B5\u4E0B\u5B9E\u73B0\u66F4\u771F\u5B9E\u7684\u5E94\u7528\u8868\u73B0\u3002 \u8BF7\u67E5\u770B\u6587\u6863\u83B7\u53D6\u66F4\u591A\u4ECB\u7ECD\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\u53EF\u4EE5\u751F\u6210CacheableContainer\u5BB9\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u8BBE\u7F6E\u5355\u5F20\u56FE\u50CF\u7684\u914D\u7F6E\uFF08\u56FE\u50CF\u683C\u5F0F\u3001\u6296\u8272\u7B97\u6CD5\u3001\u5E03\u5C40\u65CB\u8F6C\u7B49\uFF09\uFF0C\u589E\u52A0\u4E86\u65B0\u7684\u201C\u56FE\u50CF\u201D\u9009\u9879\u5361\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E94\u7528\u8BBE\u7F6E\u548C\u5176\u4ED6\u65B0\u8BBE\u7F6E\u5DF2\u79FB\u5230\u201C\u914D\u7F6E\u201D\u9009\u9879\u5361\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u6846\u67B6\u5DE5\u5177\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u5E93\u3002 \u4F7F\u5F97\u6587\u672C\u66F4\u7F8E\u89C2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u8FC7\u66F4\u5927\u7684\u5B57\u8DDD\u8C03\u6574\u8868\u6539\u5584\u4E86\u5B57\u8DDD\u8C03\u6574\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6CF0\u6587\u5B57\u4F53\u7684\u6E32\u67D3\u6548\u679C\u66F4\u4F73\uFF08\u884C\u95F4\u8DDD\u66F4\u5C0F\uFF09\uFF0CSara Am\u7684\u6E32\u67D3\u6548\u679C\u66F4\u4F73\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u521D\u6B65\u652F\u6301\u5370\u5730\u6587\uFF08\u5929\u57CE\u4F53\uFF09\u3002 \u5E94\u7528\u4E86\u4E0B\u5217GSUB\u8868\uFF1Anukt (Nukta Forms)\u3001akhn (Akhands)\u3001rkrf (Rakar Forms)\u3001cjct (Conjunct Forms)\u3001vatu (Vattu Variants)\u3001rphf (Reph Forms)\u3001pref (Pre-Base Forms)\u3001half (Half Forms)\u3001blwf (Below-base Forms)\u3001abvf (Above-base Forms)\u3001pstf (Post-base Forms)\u548Ccfar (Conjunct Form After Ro)\u3002 \u76EE\u524D\u4E0D\u652F\u6301\u4E0B\u5217GSUB\u8868\uFF1Aabvs (Above-base Substitutions)\u3001blws (Below-base Substitutions)\u548Cpsts (Post-base Substitutions)\u3002 \u6B64\u5916\uFF0C\u5E76\u975E\u6240\u6709GSUB\u8868\u7C7B\u578B\u90FD\u80FD\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u7684Line::updateLengthAndAngle() API\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u90E8\u5206\u5E27\u7F13\u51B2\u6E32\u67D3\u548C\u66F4\u65B0\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u6253\u5370\u7528\u4E8E\u8C03\u8BD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5141\u8BB8\u5728\u521D\u59CB\u5316\u540E\u4FEE\u6539BitmapCache\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684\u5B8F\uFF0C\u53EF\u7528\u4E8E\u8BBE\u7F6E\u95EA\u5B58\u70E7\u5F55\u7684\u5206\u533A\u540D\u79F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Circle::updateArc()\uFF0C\u53EF\u4EE5\u7528\u6700\u5C0F\u7684\u65E0\u6548\u533A\u57DF\u66F4\u65B0\u5706\u5F27\u8D77\u70B9\u548C\u5706\u5F27\u7EC8\u70B9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86CircleProgress\uFF0C\u53EF\u4EE5\u7528\u66F4\u7CBE\u5BC6\u7684\u8BA1\u7B97\u8FDB\u884C\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86CacheableContainer\uFF0C\u7528\u4E8E\u5C4F\u5E55\u4E4B\u5916\u63A7\u4EF6\u7684\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u5177\u670916\u4F4D\u300124\u4F4D\u548C32\u4F4D\u8C03\u8272\u677F\u7684L8\u56FE\u5F62\u8D44\u6E90\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u901A\u8FC7DMA2D\u8FDB\u884CL8\u786C\u4EF6\u52A0\u901F\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u65B0\u7684LCD32bpp\u5E27\u7F13\u51B2\u6E32\u67D3\u5668\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u8C03\u7528CircleProgress::setStartEndAngle()\u3001ImageProgress::setAnchorAtZero()\u548CTextProgress::setNumberOfDecimals()\u540E\u81EA\u52A8\u66F4\u65B0ProgressIndicator\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8BBE\u7F6E\u65B0\u503C\u65F6\u91CD\u7ED8circleProgressIndicator\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86\u5C4F\u5E55\u8F6C\u6362\u5B8C\u6210\u540E\u989D\u5916\u7684\u5C4F\u5E55\u91CD\u7ED8\u3002 \u5728\u4E00\u4E9B\u5E73\u53F0\u4E0A\uFF0C\u8FD9\u6837\u7684\u989D\u5916\u91CD\u7ED8\u4F1A\u5E26\u6765\u6027\u80FD\u95EE\u9898\u3002 \u5728Screen::afterTransition()\u4E2D\u4F7F\u6574\u4E2A\u5C4F\u5E55\u5931\u6548\u5316\uFF08\u5982\u6709\u5FC5\u8981\uFF09\u73B0\u5728\u6539\u4E3A\u4E86\u5E94\u7528\u5F00\u53D1\u8005\u7684\u8D23\u4EFB\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u6B65\u9AA4\u3002 \u8BF7\u53C2\u9605\u6587\u7AE0\u201C\u5DF2\u77E5\u95EE\u9898\u201D\u4E86\u89E3\u8BE6\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4110"
  }), `\u7248\u672C4.11.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2019\u5E743\u67081\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u91CD\u8981\u5347\u7EA7\u4FE1\u606F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u5E94\u7528\u5305\u542BLCD.hpp\u5E76\u8981\u6C42\u8BBF\u95EEHAL\uFF0C\u5C06\u4E0D\u518D\u53EF\u884C\uFF0C\u56E0\u4E3ALCD.hpp\u4E0D\u518D\u5305\u542BHAL.hpp\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u52A1\u5FC5\u5305\u542BHAL.hpp\u3002 \u5E94\u7528\u793A\u4F8BDemo1\u548CDemo2\u7684\u8F83\u65E9\u7248\u672C\u5B58\u5728\u8FD9\u4E2A\u95EE\u9898\u5E76\u5DF2\u66F4\u65B0\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u901A\u8FC7UI\u6309\u94AE\u548C\u952E\u76D8\u5FEB\u6377\u952ECtrl + F\u548CCtrl + B\uFF0C\u589E\u52A0\u4E86\u63A7\u4EF6\u7684\u201C\u524D\u8FDB\u201D/\u201C\u540E\u9000\u201D\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u590D\u5236\u548C\u7C98\u8D34\u5C4F\u5E55\u548CCustomContainerDefinitons\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u91CD\u65B0\u6392\u5217CustomContainerDefinitions\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5728\u5C4F\u5E55\u548CCustomContainerDefinitions\u4E4B\u95F4\u5207\u6362\u65F6\u4F1A\u8BB0\u4F4F\u4E4B\u524D\u9009\u62E9\u7684\u5C4F\u5E55\u548CCustomContainerDefinition\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u65B0\u5EFA\u6587\u672C\u548C\u6709\u4F7F\u7528\u6587\u672C\u7684\u63A7\u4EF6\u65F6\u4F1A\u4F7F\u7528\u4E0A\u4E00\u6B21\u4F7F\u7528\u7684\u5B57\u4F53\u6392\u5370\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3ACustomContainerInstances\u589E\u52A0\u4E86\u65B0\u7684\u6811\u56FE\u56FE\u6807\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7981\u7528\u4E86\u8FDE\u7EED\u7684\u4EE3\u7801\u751F\u6210\u548C\u7F16\u8BD1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u201C\u8BE6\u7EC6\u65E5\u5FD7\u201D\u7A97\u53E3\u4E2D\u8F93\u51FA\u7684\u53EF\u8BFB\u6027\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5411\u201C\u6587\u672C\u201D\u9009\u9879\u5361\u589E\u52A0\u4E86\u63A7\u4EF6\u901A\u914D\u7B26\u7B26\uFF0C\u4EE5\u4FBF\u5728\u4F7F\u7528\u4E00\u4E9B\u63A7\u4EF6\u65F6\u6DFB\u52A0\u9ED8\u8BA4\u901A\u914D\u7B26\u5B57\u7B26\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u52A0\u8F7D\u5DE5\u7A0B\u65F6\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u751F\u6210\u5DE5\u7A0B\u65F6\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u786E\u8BA4\u5F15\u64CE\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF96\u4F4D\u8272\u5F69\u663E\u793A\u5C4F\uFF088bpp\uFF09\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u4E3ARadioButtons\u8BBE\u7F6ERadioButtonGroup\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u663E\u793A\u65CB\u8F6C\uFF08\u6A2A\u5C4F/\u7AD6\u5C4F\uFF09\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u5728TouchGFX Designer\u4E2D\u8BBE\u7F6E\u6A2A\u5C4F/\u7AD6\u5C4F\u6A21\u62DF\u5668\u76AE\u80A4\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u4E0B\u5217\u63A7\u4EF6\u7684\u652F\u6301\uFF1AAnalogClock\u3001DigitalClock\u3001TextureMapper\u3001AnimatedTextureMapper&Shape\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CTouchGFX Designer\u53EF\u751F\u6210Makefile\u548CVisual Studio\u6587\u4EF6\u7528\u4E8E\u8FD0\u884C\u4EFF\u771F\u5668\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF96\u4F4D\u8272\u5F69\u663E\u793A\u5668\uFF08RGBA2222\u3001BGRA2222\u3001ARGB2222\u548CABGR2222\u5E27\u7F13\u5B58\u683C\u5F0F\uFF09\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u6CF0\u6587\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u963F\u62C9\u4F2F\u6587\u6587\u672C\u7684\u6E32\u67D3\u6548\u679C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u8D1F\u884C\u8DDD\u5904\u7406\u529F\u80FD\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86 Ctrl + A\uFF08\u5168\u9009\uFF09\u5BF9CustomContainerDefinitions\u4E0D\u8D77\u4F5C\u7528\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C4F\u5E55\u91CD\u65B0\u6392\u5E8F\u4F1A\u9009\u4E2D\u5217\u8868\u4E2D\u7B2C\u4E00\u4E2A\u5C4F\u5E55\u5E76\u5220\u9664\u88AB\u79FB\u52A8\u5C4F\u5E55\u7684\u64A4\u9500/\u91CD\u505A\u5386\u53F2\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u9009\u62E9\u5E94\u7528\u8282\u70B9\u540E\u64A4\u9500/\u91CD\u505A\u5386\u53F2\u4F1A\u635F\u574F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5E94\u7528\u540D\u79F0\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934\u6216\u5305\u542B\u201C-\u201D\u6216\u201C_\u201D\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u201C\u5B9A\u5236\u5BB9\u5668\u201D\u9009\u9879\u5361\u4E0A\u52A0\u8F7D\u5E94\u7528\u4F1A\u5BFC\u81F4\u753B\u5E03\u4E0A\u7684\u5185\u5BB9\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C06\u591A\u4E2A\u5143\u7D20\u79FB\u5165\u5BB9\u5668\u540E\u6309\u4E0B\u64A4\u9500\u6309\u94AE\u4F1A\u5BFC\u81F4\u5D29\u6E83\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u52A0\u8F7D\u5DE5\u7A0B\u65F6\u5B57\u4F53\u6587\u4EF6\u88AB\u9501\u5B9A\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5220\u9664\u8D44\u6E90\u6587\u672C\u65F6\u4F7F\u7528\u6587\u672C\u7684\u7EC4\u4EF6\u4E0A\u6CA1\u6709\u663E\u793A\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u901A\u8FC7\u53CC\u51FBTouchGFX\u6587\u4EF6\u52A0\u8F7D\u9519\u8BEF\u5E94\u7528\u4F1A\u5BFC\u81F4\u542F\u52A8\u753B\u9762\u5361\u987F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86ModalWindow\u7684\u4F4D\u7F6E\u4EE3\u7801\u751F\u6210\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5BF9ScrollableContainer\u3001ScrollList& ScrollWheel\u7684\u201C\u79FB\u52A8\u63A7\u4EF6\u201D\u4EA4\u4E92\u652F\u6301\u7F3A\u5931\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u201C\u6700\u8FD1\u4F7F\u7528\u7684\u5E94\u7528\u201D\u5217\u8868\u4E2D\u7684\u987A\u5E8F\u95EE\u9898\u3002 \u73B0\u5728\uFF0C\u5728\u6253\u5F00\u5E94\u7528\u65F6\u53EF\u4EE5\u6B63\u786E\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u63D2\u5165\u63A7\u4EF6\u53EF\u80FD\u5BFC\u81F4\u7A7A\u64A4\u9500\u9879\u88AB\u6DFB\u52A0\u5230\u64A4\u9500/\u91CD\u505A\u5386\u53F2\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86CustomContainerDefinitions\u7684\u5C5E\u6027\u7A97\u683C\u4E2D\u6807\u9898\u6587\u672C\u548C\u8BF4\u660E\u7F3A\u5931\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7A7A\u95F2CPU\u4F7F\u7528\u7387\u9AD8\u4E8E\u9884\u671F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728CustomContainer\u4E2D\u7684FlexButton\u4E0A\u8BBE\u7F6E\u4EA4\u4E92\u4F1A\u751F\u6210\u9519\u8BEF\u4EE3\u7801\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u63A7\u4EF6\u4E0A\u8BBE\u7F6EMixin\u4E0D\u53EF\u64A4\u9500\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5411FlexButton\u6DFB\u52A0\u6837\u5F0F\u7684\u64A4\u9500/\u91CD\u505A\u529F\u80FD\u7F3A\u5931\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u4EA4\u4E92\u4E2D\u4F7F\u7528\u8BB8\u591A\u6ED1\u5757\u56DE\u8C03\u65F6\u521D\u59CB\u5316\u987A\u5E8F\u9519\u8BEF\u7684\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86CWR Painter\u4E2D4bpp\u548C2bpp\u7684\u7CBE\u5EA6\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E868bpp\u300116bpp\u548C24bpp\u7684alpha\u6DF7\u5408\u516C\u5F0F\u4E2D\u7684\u7CBE\u5EA6\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u6B65\u9AA4\u3002 \u8BF7\u53C2\u9605\u6587\u7AE0\u201C\u5DF2\u77E5\u95EE\u9898\u201D\u4E86\u89E3\u8BE6\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4100"
  }), `\u7248\u672C4.10.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2018\u5E7411\u67085\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u8981\u6C42\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u73B0\u5728\u4EC5\u4F9BSTM32\u5FAE\u63A7\u5236\u5668\u4F7F\u7528\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u65B0\u589E\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u4E0B\u5217\u63A7\u4EF6\u7684\u652F\u6301\uFF1AImageProgress\u3001BoxProgress\u3001TextProgress\u3001LineProgress\u3001CircleProgress\u3001Line\u3001Circle\u3001BoxWithBorder\u3001FlexButton\u3001ScrollList\u3001ScrollWheel\u548CSwipeContainer\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u4EE5\u5728\u5C4F\u5E55\u4E0A\u8C03\u6574\u753B\u5E03\u7F13\u51B2\u533A\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u5C4F\u5E55\u8F6C\u6362\uFF1ACoverTransition\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u4F1A\u8BB0\u5F55\u4E0B\u5217\u7CFB\u7EDF\u4FE1\u606F\u4EE5\u4FBF\u5728\u652F\u6301\u7684\u573A\u666F\u4E2D\u4F7F\u7528\uFF1A\u7528\u6237\u540D\u3001Designer\u7248\u672C\u3001Designer\u5B89\u88C5\u8DEF\u5F84\u3001Windows\u7248\u672C\u3001\u5F53\u524D\u533A\u57DF\u6027\u3001\u5B89\u88C5\u7684.NET\u7248\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\u53EF\u4EE5\u4E3A\u5E94\u7528\u5BFC\u5165\u5177\u6709\u4EFB\u4F55\u5206\u8FA8\u7387\u7684UI\uFF08\u5220\u9664\u4E86\u5206\u8FA8\u7387\u68C0\u67E5\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u7528\u4E8E\u663E\u793A/\u9690\u85CF\u4FEE\u526A\u8FC7\u7684\u63A7\u4EF6\u7684\u6309\u94AE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u5728\u753B\u5E03\u4E0A\u5BF9\u63A7\u4EF6\u8FDB\u884C\u62D6\u66F3\u548C\u5927\u5C0F\u8C03\u6574\u65F6\u7684\u6027\u80FD\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u65B0\u589E\u529F\u80FD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CCircle\u548CAbstractShape\u652F\u6301\u66F4\u9AD8\u7CBE\u5EA6\u7684\u5706\u5F27\u8D77\u70B9\u548C\u5706\u5F27\u7EC8\u70B9\uFF0C\u53EF\u83B7\u5F97\u66F4\u5E73\u6ED1\u7684\u5706\u5F27\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u6269\u5927\u503C\u8303\u56F4\uFF0C\u5185\u90E8Q5\u7ED3\u6784\u4F7F\u752832\u4F4D\u800C\u4E0D\u662F16\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Circle::getPrecision()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u51FD\u6570FadeAnimator::isFadeAnimationRunning()\u3001MoveAnimator::isMoveAnimationRunning()\u3001AnimatedImage::isAnimatedImageRunning()\u548CZoomAnimationImage::isZoomAnimationImageRunning()\u3002 \u539F\u6765\u7684isRunning()\u51FD\u6570\u5DF2\u5F03\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86ListLayout::setDirection()\u548CgetDirection()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `roo gem\u4ECE1.13.1\u66F4\u65B0\u81F32.7.1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6309\u4E0BSHIFT-F3\u4F1A\u5C06\u5C4F\u5E55\u590D\u5236\u5230\u526A\u8D34\u677F\uFF08\u4EC5\u9650Windows\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6309\u4E0BCTRL-F3\u4F1A\u5C06\u63A5\u4E0B\u6765\u768450\u4E2A\u5C4F\u5E55\u4FDD\u5B58\u5230\u5C4F\u5E55\u622A\u56FE\u6587\u4EF6\u5939\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u751F\u6210\u7684\u8D44\u6E90\u53EF\u4EE5\u6B63\u5E38\u7F29\u8FDB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86ScrollableContainer::setScrollbarsPermanentlyVisible()\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u5927\u5C0F\u53D1\u751F\u53D8\u5316\u65F6ModalWindow\u63A7\u4EF6\u4E0D\u4F1A\u8C03\u6574\u5927\u5C0F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F53\u6587\u4EF6\u7684\u9690\u85CF\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u9690\u85CF\u65F6\u751F\u6210\u4EE3\u7801\u5931\u8D25\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4FEE\u6539\u5C4F\u5E55\u6216\u81EA\u5B9A\u4E49\u5BB9\u5668\u540D\u79F0\u7684\u5927\u5C0F\u5199\u5BFC\u81F4\u91CD\u65B0\u7F16\u8BD1\u62A5\u9519\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E92\u8054\u7F51\u4E22\u5931\u65E0\u5728\u7EBF\u5E94\u7528\u53EF\u7528\u65F6\uFF0C\u4F1A\u5BFC\u81F4Designer\u5D29\u6E83\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u52A0\u8F7D\u5DE5\u7A0B\u540EModalWindow\u63A7\u4EF6\u7684\u4F4D\u7F6E\u751F\u6210\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86\u52A0\u8F7DDesigner\u5DE5\u7A0B\u65F6\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u7F16\u8BD1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86ImagePicker\u4E2D\u5C3D\u7BA1\u5F53\u524D\u6587\u4EF6\u5939\u4E0B\u6709\u5B50\u6587\u4EF6\u5939\u4ECD\u7136\u663E\u793A\u201C\u7A7A\u5360\u4F4D\u7B26\u201D\u7684\u89C6\u89C9\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86Designer\u4E0D\u80FD\u901A\u8FC7\u4EE3\u7406\u670D\u52A1\u5668\u4F7F\u7528\u9ED8\u8BA4\u8BA4\u8BC1\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C1D\u8BD5\u70E7\u5F55\u9519\u8BEF\u76EE\u6807\u65F6Designer\u4E0D\u80FD\u6B63\u786E\u62A5\u544A\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u6CA1\u6709\u8DB3\u591F\u6743\u9650\u5199\u5165\u6240\u9009touchgfx\u8DEF\u5F84\u4F1A\u5BFC\u81F4Designer\u5D29\u6E83\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86Designer\u9519\u8BEF\u5730\u5C06\u5C4F\u5E55\u4FEE\u6539\u7406\u89E3\u4E3A\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8C03\u6574\u5BB9\u5668\u5927\u5C0F\u65F6\u4E0D\u80FD\u6B63\u786E\u663E\u793A\u5BB9\u5668\u5185\u63A7\u4EF6\u7684\u89C6\u89C9\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CDesigner\u4F1A\u5728\u60A8\u52A0\u8F7D\u53E6\u4E00\u4E2A\u5E94\u7528\u65F6\u5173\u95ED\u8FD0\u884C\u7684\u4EFF\u771F\u5668\u8FDB\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u53EF\u4EE5\u62D6\u66F3\u81EA\u5B9A\u4E49\u5BB9\u5668\u5B9E\u4F8B\u5185\u90E8\u63A7\u4EF6\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u65F6\u4E0D\u80FD\u6B63\u786E\u6E32\u67D3Circle\uFF0C\u5E76\u4E14\u4E0D\u80FD\u6B63\u786E\u8BA1\u7B97\u65E0\u6548\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u534A\u7EBF\u5BBD\u5927\u4E8E\u534A\u5F84\u65F6\u7684\u5706\u7684\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Core\u4E2D\u7684\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86LineProgress.cpp\u4E2DsetValue\u7684x& y\u503C\u8BA1\u7B97\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6709\u65F6\u4E0D\u80FD\u6B63\u786E\u6E32\u67D3Circle\uFF0C\u5E76\u4E14\u4E0D\u80FD\u6B63\u786E\u8BA1\u7B97\u65E0\u6548\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u534A\u7EBF\u5BBD\u5927\u4E8E\u534A\u5F84\u65F6\u7684\u5706\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u7ED8\u5236\u7EBF\u6761\u957F\u4E8E2047\u50CF\u7D20\uFF08\u59821449\u50CF\u7D20\u5BBD\u548C1449\u50CF\u7D20\u9AD8\uFF09\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u59A8\u788D\u4E00\u4E9B\u963F\u62C9\u4F2F\u6587\u8FDE\u5B57\u6B63\u786E\u6E32\u67D3\u7684\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u6B65\u9AA4\u3002 \u8BF7\u53C2\u9605\u6587\u7AE0\u201C\u5DF2\u77E5\u95EE\u9898\u201D\u4E86\u89E3\u8BE6\u60C5\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-494"
  }), `\u7248\u672C4.9.4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2018\u5E741\u670825\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7F29\u77ED\u4E86\u5728Designer\u4E2D\u52A0\u8F7D\u5E94\u7528\u6240\u9700\u7684\u65F6\u95F4\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-493"
  }), `\u7248\u672C4.9.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2017\u5E7412\u670815\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u73B0\u5728\u4F7F\u7528\u9ED8\u8BA4\u7684Windows\u4EE3\u7406\u8BBE\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\u5728\u5728\u7EBF\u65F6\u66F4\u65B0\u53EF\u7528\u7684\u8F6F\u4EF6\u5305\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F18\u5316\u4E86\u79BB\u7EBF\u65F6\u7684\u9519\u8BEF\u63CF\u8FF0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u8BBE\u7F6E\u4E0E\u8D44\u6E90\u6587\u672C\u914D\u5408\u4F7F\u7528\u7684\u6587\u672C\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9879\u76EE\u66F4\u65B0\u5668\u7528\u6B63\u786E\u7684\u56FE\u50CF\u683C\u5F0F\u66F4\u65B0MSVS\u9879\u76EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0CDesigner\u4E2D\u4F1A\u53D1\u751F\u6587\u672C\u5927\u5C0F\u8BA1\u7B97\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6700\u8FD1\u4F7F\u7528\u7684\u6587\u4EF6\u6309\u65E5\u671F\u6392\u5E8F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u201C\u7B49\u5F85\u201D\u4EA4\u4E92\u4E2D\u7684\u8BA1\u6570\u5668\u521D\u59CB\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u8C03\u6574\u5927\u5C0F\u65F6\u5217\u8868\u5E03\u5C40\u4E2D\u5B50\u5143\u7D20\u7684\u7ED8\u5236\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u542B\u5217\u8868\u5E03\u5C40\u63A7\u4EF6\u7684\u5E94\u7528\u52A0\u8F7D\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5DF2\u80FD\u591F\u6B63\u786E\u6E32\u67D3.otf\u5B57\u4F53\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0C\u62D6\u66F3\u5BB9\u5668\u53EF\u80FD\u5BFC\u81F4\u5750\u6807\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u901A\u914D\u7B26\u6587\u672C\u7F13\u51B2\u533A\u7684null\u7EC8\u6B62\u7B26\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u5E26\u6807\u7B7E\u7684\u6309\u94AE\u7684\u6587\u672C\u6E32\u67D3\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `tgfx.exe\u6253\u5305\u5668\u9002\u7528\u4E8E\u66F4\u590D\u6742\u7684\u6587\u4EF6\u5E03\u5C40\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5305\u542B\u4E86\u5BB9\u5668\u7684\u6E90\u4EE3\u7801\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u989D\u5916\u7684\u7EC6\u5FAEDesigner UI\u4FEE\u6B63\u548C\u6539\u5584\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-492"
  }), `\u7248\u672C4.9.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2017\u5E7411\u670820\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728Designer\u7684\u753B\u5E03\u4E0A\u62D6\u66F3\u7EC4\u4EF6\u6709\u65F6\u4F1A\u5BFC\u81F4\u5F02\u5E38\u7684\u95EE\u9898\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-491"
  }), `\u7248\u672C4.9.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2017\u5E7411\u670816\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5C06TextArea\u63A7\u4EF6\u653E\u5165\u5BB9\u5668\u65F6Designer\u7684\u51E0\u4E2A\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u52A0\u8F7D\u5DE5\u7A0B\u65F6\u7531\u201C\u53E6\u4E00\u4EA4\u4E92\u5B8C\u6210\u201D\u89E6\u53D1\u4EA4\u4E92\u6D88\u5931\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u5177\u6709\u7279\u5B9A\u5B89\u5168\u7B56\u7565\u914D\u7F6E\u7684PC\u4E0A\uFF0CDesigner\u4E0D\u80FD\u6B63\u786E\u5730\u65B0\u5EFA\u5DE5\u7A0B\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u8D44\u6E90\u751F\u6210\u3001\u4EE3\u7801\u7F16\u8BD1\u6216\u751F\u6210\u540E\u547D\u4EE4\u6267\u884C\u5931\u8D25\u65F6Designer\u7684\u9519\u8BEF\u5904\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86Designer\u5DE5\u7A0B\u6587\u4EF6\u4E2DTouchgfxPath\u89E3\u8BFB\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u4E2D\u7684\u4E00\u4E9B\u5B57\u4F53\u6392\u5370\u53D8\u66F4\u672A\u5BFC\u81F4\u65B0\u4EE3\u7801\u7684\u751F\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u8D44\u6E90\u6587\u4EF6\u5939\u53D7svn\u63A7\u5236\u65F6ImageConverter\u53D1\u751F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConverter\u5728\u7279\u5B9A\u60C5\u51B5\u4E0B\u53EF\u80FD\u68C0\u6D4B\u4E0D\u5230\u8D44\u6E90\u4E2D\u7684\u53D8\u5316\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-490"
  }), `\u7248\u672C4.9.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2017\u5E7411\u67088\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\uFF0C\u7528\u4E8E\u5904\u7406\u677F\u652F\u6301\u5305\u3001\u6F14\u793A\u548C\u793A\u4F8B\u3002 \u73B0\u5728\uFF0CDesigner\u53EF\u4ECE\u5728\u7EBF\u5B58\u50A8\u5E93\u83B7\u53D6\u8FD9\u4E9B\u8D44\u6E90\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5404\u79CD\u677F\u4EF6\u7684\u539F\u6709\u793A\u4F8B\u3001\u6F14\u793A\u548C\u7AEF\u53E3\u5747\u5DF2\u5168\u90E8\u4ECE\u6846\u67B6\u4E2D\u5220\u9664\uFF0C\u73B0\u5728\u4EE5\u8F6F\u4EF6\u5305\u7684\u5F62\u5F0F\u63D0\u4F9B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u663E\u8457\u6539\u5584\u4E86Designer\u4E2D\u7684\u6587\u672C\u5904\u7406\u3002 \u73B0\u5728\u53EF\u4EE5\u5728Designer\u4E2D\u4F7F\u7528\u7FFB\u8BD1\u6587\u4EF6\u548C\u901A\u914D\u7B26\uFF0C\u56E0\u6B64\u4E0D\u5FC5\u518D\u624B\u52A8\u7F16\u8F91texts.xlsx\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\u73B0\u5728\u7684\u5E94\u7528\u6587\u4EF6\u7ED3\u6784\u66F4\u52A0\u7075\u6D3B\uFF0C\u80FD\u591F\u81EA\u52A8\u66F4\u65B0IAR\u548CKeil IDE\u5DE5\u7A0B\uFF0C\u65E0\u5173\u6587\u4EF6\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86Designer\u5BF9ScrollableContainer\u548CListLayout\u63A7\u4EF6\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9SW4STM32 IDE\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9IAR Embedded Workbench\u7248\u672C8.10\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u56FE\u50CF\u8F6C\u6362\u5668\u73B0\u5177\u6709\u5BF9\u6587\u4EF6\u5939\u6267\u884C\u64CD\u4F5C\u7684\u9009\u9879\uFF0C\u65E0\u9700\u5BF9\u6BCF\u4E2A.png\u6587\u4EF6\u90FD\u8C03\u7528\u4E00\u6B21\u3002 \u8FD9\u5927\u5E45\u63D0\u9AD8\u4E86\u56FE\u50CF\u8F6C\u6362\u7684\u901F\u5EA6\u3002 \u6B64\u6A21\u5F0F\u662F\u65B0\u5DE5\u7A0B\u7684\u9ED8\u8BA4\u6A21\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GNU Arm Embedded\u5DE5\u5177\u94FE\uFF08GCC\u4EA4\u53C9\u7F16\u8BD1\u5668\uFF09\u5DF2\u66F4\u65B0\u81F3\u7248\u672C6-2017-q2-update\uFF08gcc\u7248\u672C6.3.1\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PC\u4EFF\u771F\u5668\u7684GNU\u7F16\u8BD1\u5668\u5DF2\u66F4\u65B0\u81F3\u7248\u672C6.3.0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3ACortex-M4f\u548CCortex-M7\u589E\u52A0\u4E86\u7528-mfloat-abi=hard\u7F16\u8BD1\u7684gcc\u6838\u5FC3\u5E93\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u53EF\u6CE8\u518C\u4E3A\u5B9A\u65F6\u5668\u63A7\u4EF6\u7684\u6570\u76EE\u4ECE24\u4E2A\u589E\u52A0\u81F332\u4E2A\u3002 \u6B64\u5916\uFF0C\u589E\u52A0\u4E86\u83B7\u53D6\u5173\u4E8E\u5F53\u524D\u6CE8\u518C\u63A7\u4EF6\u7684\u4FE1\u606F\u7684\u51FD\u6570\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u907F\u514DMoveAnimator::cancelMoveAnimation()\u7684\u76F8\u5173\u95EE\u9898\uFF0C\u5C06AnimationTextureMapper::cancelMoveAnimation()\u91CD\u547D\u540D\u4E3AcancelAnimationTextureMapperAnimation()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4ECEARGB8888\u4F4D\u56FE\u6E32\u67D3\u5B9E\u50CF\u7D20\u65F6PainterRGB565Bitmap\u4E2D\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5B57\u4F53\u4E2D\u7F3A\u5931\u6240\u6709\u4F7F\u7528\u7684\u5B57\u7B26\u65F6FontConvert\u4E2D\u7684\u7F55\u89C1\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed uninitialized variables in the DMA class.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6B64\u7248\u672C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u6B65\u9AA4\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-480"
  }), `\u7248\u672C4.8.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2017\u5E743\u670810\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD4bpp\u73B0\u5728\u7ED8\u5236\u5B57\u7B26\u7684\u901F\u5EA6\u6700\u591A\u63D0\u9AD8\u4E8615%\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u5E03\u63A7\u4EF6\u5728\u7279\u5B9A\u60C5\u51B5\u4E0B\u7684\u6E32\u67D3\u901F\u5EA6\u7A0D\u6709\u63D0\u9AD8\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53D1\u5E03\u4E86TouchGFX Designer\u3002 \u6838\u5FC3\u6846\u67B6\u3001Designer\u548C\u73AF\u5883shell\u73B0\u5DF2\u6253\u5305\u5728\u4E00\u4E2A\u5B89\u88C5\u5305\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u6CE2\u65AF\u6587\u548C\u963F\u62C9\u4F2F\u6587\u8FDE\u5B57\uFF0C\u53EF\u8BC6\u522B\u6700\u591A\u4E09\u4E2A\u5B57\u7B26\u7684\u5E8F\u5217\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9Microsoft Visual Studio 2017\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u548CTextAreaWithWildcard(s)\u73B0\u5728\u652F\u6301setWideTextAction()\u5728\u884C\u8FC7\u957F\u65F6\u81EA\u52A8\u6362\u884C\u5E76\u5728\u884C\u5C3E\u63D2\u5165\u7701\u7565\u53F7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u6ED1\u5757\u589E\u52A0\u4E86getter\u51FD\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MoveAnimator\u548CFadeAnimator\u73B0\u5728\u53EF\u4EE5\u5C06\u52A8\u753B\u7ED3\u675F\u7684\u56DE\u8C03\u7F6E\u4F4D\u6E05\u96F6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CImageConvert\u3001TextConvert\u548CFontConvert\u4E2D\u7684\u9519\u8BEF\u663E\u793A\u5728Visual Studio\u7684\u201C\u9519\u8BEF\u5217\u8868\u201D\u7A97\u53E3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u62DF\u5668\u5E94\u7528\u73B0\u5728\u662FWindows\u7A0B\u5E8F\u800C\u975E\u63A7\u5236\u53F0\u7A0B\u5E8F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AbstractShape::updateAbstractShapeCache()\u73B0\u5728\u662F\u516C\u6709\u51FD\u6570\uFF0C\u4E3A\u786E\u4FDD\u5F62\u72B6\u6B63\u786E\uFF0C\u5E94\u5728\u4E00\u6B21\u6216\u591A\u6B21\u8C03\u7528AbstractShape::setCorner()\u540E\u8C03\u7528\u5B83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u62DF\u5668\u7A97\u53E3\u7684\u5927\u5C0F\u4E0D\u518D\u53EF\u80FD\u610F\u5916\u8C03\u6574\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6309F2\u952E\u7A81\u51FA\u663E\u793A\u65E0\u6548\u533A\u57DF\u73B0\u9002\u7528\u4E8E\u65E7\u7248HALSDL\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0CPainterGRAY2Bitmap\u3001PainterGRAY4Bitmap\u3001PainterRGB565Bitmap\u548CPainterRGB888Bitmap\u5747\u672A\u80FD\u9A8C\u8BC1\u7ED8\u56FE\u662F\u5728\u4F4D\u56FE\u5C3A\u5BF8\u8303\u56F4\u5185\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u4E3A\u4F7F\u5C4F\u5E55\u622A\u56FE\u4E0A\u7684\u8272\u5F69\u6B63\u786E\uFF0CHALSDL2\uFF08\u6A21\u62DF\u5668\uFF09\u5728\u5C4F\u5E55\u4E0A\u4F7F\u752824bpp\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage::setOffset()\u73B0\u5728\u80FD\u6B63\u786E\u5904\u7406\u7A7A\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage::getSolidRect()\u6709\u65F6\u4F1A\u62A5\u544A\u9519\u8BEF\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u65CB\u8F6C\u4E86TextArea\u4E2D\u7684\u6587\u672C\uFF0CresizeToCurrentText()\u548CresizeHeightToCurrentText()\u4F1A\u8C03\u6362\u5BBD\u5EA6/\u9AD8\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u51FD\u6570getTextHeight()\u4E0D\u8003\u8651\u884C\u95F4\u8DDD\u3002 \u50CFresizeToCurrentText()\u8FD9\u6837\u7684\u51FD\u6570\u548C\u5176\u4ED6\u4F7F\u7528getTextHeight()\u51FD\u6570\u7684\u51FD\u6570\u4E0D\u4F1A\u6B63\u786E\u5730\u8C03\u6574\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SlideMenu::setState()\u672A\u80FD\u6B63\u786E\u5904\u7406EXPANDED\u72B6\u6001\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u7531\u4E8E\u589E\u52A0\u4E86TouchGFX\u8BBE\u8BA1\u5668\uFF0C\u901A\u8FC7.msi\u5B89\u88C5\u7A0B\u5E8F\u8FDB\u884C\u5B89\u88C5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u517C\u5BB9\u73B0\u67094.x\u5E94\u7528\u548CHAL\u7AEF\u53E3\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-470"
  }), `\u7248\u672C4.7.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2016\u5E7412\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u6240\u6709\u6807\u51C6\u63A7\u4EF6\u548C\u5BB9\u5668\u7684\u6E90\u4EE3\u7801\u5747\u5305\u542B\u5728\u5185\u3002 \u53C2\u89C1\u76EE\u5F55touchgfx/framework/source/touchgfx\u3002 \u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E9B\u7C7B\u4ECD\u7136\u5B58\u5728\u4E8E\u6838\u5FC3\u5E93\u4E2D\uFF0C\u5E76\u4E14\u6E90\u4EE3\u7801\u6587\u4EF6\u9ED8\u8BA4\u4E0D\u6DFB\u52A0\u5230IAR/Keil/gcc\u5DE5\u7A0B\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F18\u5316\u4E86\u57FA\u4E8ETFT\u63A7\u5236\u5668\u7684\u5E73\u53F0\u4E0A\u7684\u5355\u5E27\u7F13\u51B2\u533A\u914D\u7F6E\u7684\u5904\u7406\uFF0C\u8BB8\u591A\u60C5\u51B5\u4E0B\u4E0D\u518D\u9700\u8981\u5916\u90E8RAM\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u663E\u8457\u6539\u5584\u4E86\u753B\u5E03\u63A7\u4EF6\u7CFB\u7EDF\u548C\u6240\u6709\u6807\u51C6\u7ED8\u56FE\u90E8\u4EF6\u7684\u6027\u80FD\u3002 \u5982\u679C\u7ED8\u5236\u8BB8\u591A\u50CF\u7D20\uFF0C\u9884\u671F\u6027\u80FD\u4F1A\u5927\u5E45\u63D0\u5347\uFF0C\u8F83\u5C0F\u7684\u5F62\u72B6\uFF08\u5982\u56FE\u5F62\u7EBF\u6761\uFF09\u4E5F\u4F1A\u6709\u6027\u80FD\u7684\u5C11\u91CF\u63D0\u5347\u3002 \u6F14\u793A\u4E2D\u4F7F\u7528\u7684\u201CPainterVerticalAlpha\u201D\u4E5F\u5DF2\u66F4\u65B0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u6587\u672C\u8F6C\u6362\u5668\u5DE5\u5177\u5C06\u7EC4\u5408\u6240\u6709\u8BED\u8A00\u7684\u552F\u4E00\u7FFB\u8BD1\u6587\u4EF6\uFF0C\u56E0\u800C\u51CF\u5C11\u4E86\u7A7A\u95F4\u5360\u7528\u91CF\u3002 \u5728\u8D44\u6E90\u751F\u6210\u671F\u95F4\u4F1A\u6253\u5370\u8BE5\u8FC7\u7A0B\u7684\u7ED3\u679C\u3002 \u6CE8\u610F\uFF1A\u6B64\u4E3A\u9ED8\u8BA4\u884C\u4E3A\u3002 \u5982\u679C\u60A8\u6709\u81EA\u5DF1\u64CD\u7EB5\u6587\u672C\u6570\u636E\u7ED3\u6784\uFF08\u5982\u5C06\u4E00\u79CD\u8BED\u8A00\u52A0\u8F7D\u5230RAM\u4E2D\uFF09\u7684\u73B0\u6210\u5DE5\u7A0B\uFF0C\u6B64\u4F18\u5316\u53EF\u80FD\u4F1A\u7834\u574F\u60A8\u7684\u4EE3\u7801\u3002 \u53EF\u901A\u8FC7\u6DFB\u52A0\u4E0B\u5217\u4EE3\u7801\u7981\u7528\u4F18\u5316\uFF1Aremap_identical_texts := no\uFF08\u5BF9\u4E8E\u57FA\u4E8E\u201Cmake\u201D\u7684\u751F\u6210\uFF09`, `<`, `RemapIdenticalTexts`, `>`, `no`, `<`, `/RemapIdenticalTexts`, `>`, `\uFF08\u5BF9\u4E8EMSVS\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u6A21\u62DF\u5668\u4F7F\u7528\u7684SDL\u7248\u672C\u4ECE1.2\u66F4\u65B0\u81F32.0.4\u3002 SDL1.2\u4ECD\u5B58\u5728\u4E8E\u53D1\u5E03\u7684\u6587\u4EF6\u4E2D\uFF0C\u4F46\u73B0\u5728\u6240\u6709\u793A\u4F8B\u548C\u9879\u76EE\u5747\u4F7F\u7528SDL2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u7528.png\u6587\u4EF6\u4F5C\u4E3A\u6A21\u62DF\u5668\u76AE\u80A4\u3002 \u5982\u679C.png\u6587\u4EF6\u5305\u542B\u900F\u660E\u533A\u57DF\uFF0C\u6A21\u62DF\u5668\u7A97\u53E3\u5F62\u72B6\u5C06\u53D1\u751F\u76F8\u5E94\u53D8\u5316\u3002 \u53C2\u89C1display_orientation_example\u83B7\u53D6\u4EE3\u7801\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5728\u5177\u6709Chrom-ART\u7684ST\u76EE\u6807\u786C\u4EF6\u4E0A\uFF0CBox\u63A7\u4EF6\u5C06\u7531DMA\u7ED8\u5236\uFF0C\u5373\u4F7Falpha `, `<`, ` 255\uFF08BLIT_OP_FILL_WITH_ALPHA\u652F\u6301\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CTextArea\u548C\u542B\u901A\u914D\u7B26\u7684TextArea\u652F\u6301setWideTextAction()\uFF0C\u53EF\u4F7F\u957F\u6587\u672C\u884C\u81EA\u52A8\u6362\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5728\u8FD0\u884C\u65F6\u95F4\u9047\u5230\u4E0D\u5B58\u5728\u7684\u5B57\u5F62\u65F6\u663E\u793A\u201Cfallback\u201D\u5B57\u7B26\u7684\u80FD\u529B\u3002 \u8FD9\u53EF\u5728\u6587\u672C\u6570\u636E\u5E93\u7684\u5B57\u4F53\u6392\u5370\u8868\u4E2D\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5728\u5B57\u4F53\u4E2D\u5F3A\u5236\u5305\u542B\u989D\u5916\u5B57\u5F62\u7684\u9009\u9879\u3002 \u8FD9\u6781\u5927\u5730\u7B80\u5316\u4E86\u7F16\u8BD1\u65F6\u5B57\u5F62\u672A\u77E5\u7684\u60C5\u51B5\u4E0B\u52A8\u6001\u6587\u672C\u7684\u5904\u7406\u3002 \u5728\u6587\u672C\u6570\u636E\u5E93\u7684\u5B57\u4F53\u6392\u5370\u8868\u4E2D\u914D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CTextConvert\u5B9E\u7528\u7A0B\u5E8F\u7684\u8F93\u51FA\u7ECF\u8FC7\u540E\u5904\u7406\uFF0C\u901A\u8FC7\u5C06\u76F8\u540C\u5B57\u7B26\u4E32\u6620\u5C04\u5230\u540C\u4E00\u5B58\u50A8\u533A\u6765\u8282\u7EA6\u5927\u91CF\u7A7A\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u540D\u4E3ABITMAP_ANIMATION_STORAGE\u7684\u5185\u7F6EBitmapId\uFF0C\u5728\u5C06\u4F4D\u56FE\u5206\u914D\u7ED9\u63A7\u4EF6\u65F6\uFF0C\u53EF\u7528\u6765\u6307\u793A\u52A8\u753B\u5B58\u50A8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86config/gcc/app.mk\u548Cconfig/msvs/Application.props\u4E2D\u7684\u6296\u8272\u7B97\u6CD5\u9009\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u4F7F\u7528\u4E0B\u5217\u4EE3\u7801\uFF0C\u4EE5\u7F16\u7A0B\u7684\u65B9\u5F0F\u4FDD\u5B58\u6A21\u62DF\u5668\u5C4F\u5E55\u622A\u56FE\uFF1A #ifdef SIMULATOR (static_cast`, `<`, `HALSDL2*`, `>`, `(HAL::getInstance()))-`, `>`, `saveScreenshot(); #endif`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CScrollableContainer\u4F1A\u6070\u5F53\u5730\u5FFD\u7565\u4E0D\u53EF\u89C1\u5143\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DigitalClock\u652F\u6301\u5728\u5C0F\u65F6\u6307\u793A\u4F4D\u4E4B\u524D\u663E\u793A\u96F6\uFF08\u82E5\u5C0F\u65F6\u6570 `, `<`, `10\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u62DF\u5668\u73B0\u5728\u53EF\u4EE5\u7A81\u51FA\u663E\u793A\u65E0\u6548\u533A\u57DF\u3002 \u6309\u4E0BF2\u952E\u53EF\u542F\u7528/\u505C\u7528\u6B64\u529F\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u4F7F\u7528va_list\u53C2\u6570\u800C\u975E\u7701\u7565\u53F7\u7684Unicode::vsnprintf\u51FD\u6570\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u683C\u5F0F\u5B57\u7B26\u4E32\u4E3A\u201C% f\u201D\uFF0C\u5219Unicode::sprintfFloat\u4E0D\u6253\u5370 <\u7A7A\u683C>\uFF08\u66FF\u4EE3\u201C+\u201D\uFF09\u3002 \u6B64\u5916\uFF0C\u8303\u56F4`, `[-1..0]`, `\u4EE5\u5185\u7684\u6D6E\u70B9\u503C\u4E0D\u6253\u5370\u7B26\u53F7\uFF0C\u4F8B\u5982-0.5\uFF0C\u5374\u4F1A\u6253\u5370\u4E3A0.5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5BFC\u81F4TextureMapper\u53EF\u80FD\u4F1A\u8BFB\u53D6\u6E90\u4F4D\u56FE\u5B58\u50A8\u533A\u4E4B\u5916\u5185\u5B58\u533A\u57DF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769\u63A2\u7D22\u548C\u8BC4\u4F30\u677F\u7684GPIO.cpp\u6709\u4E00\u4E9B\u9519\u8BEF\u7684GPIO\u5F15\u811A\u64CD\u4F5C\uFF08\u7528\u4E8E\u6027\u80FD\u6D4B\u91CF\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Slider.hpp\u4E2D\u7684\u4E00\u4E9B\u65B9\u6CD5\u7F3A\u5C11\u865A\u51FD\u6570\u58F0\u660E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32F769\u63A2\u7D22\u677FBoardConfiguration\u4E2D\u7684\u95EE\u9898\uFF0C\u8BE5\u95EE\u9898\u5BFC\u81F424bpp\u8272\u5F69\u6A21\u5F0F\u663E\u793A\u4E0D\u6B63\u786E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage - \u4E0D\u5E94\u518D\u4F7F\u7528setBitmap(..)\uFF0C\u5176\u5DF2\u6539\u4E3AAnimatedImage\u7684\u79C1\u6709\u51FD\u6570\uFF0C\u8BF7\u6539\u7528setBitmaps(..)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u5DE5\u7A0B\u6587\u4EF6\u548CMakefile\uFF0C\u4EE5\u4FBF\u80FD\u591F\u5C06TouchGFX\u6846\u67B6\u653E\u5728\u5F00\u53D1\u7684\u5DE5\u7A0B\u6240\u5728\u76D8\u4E4B\u5916\u7684\u5176\u5B83\u76D8\u4E0A\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Environment\uFF08\u7248\u672C2.8\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u201Cmake.exe\u201D\u73B0\u5728\u7684\u7248\u672C\u4E3A4.1\uFF0C\u901A\u8FC7\u6DFB\u52A0make\u547D\u4EE4\u884C\u9009\u9879\u5982\u201C-j8\u201D\u7B49\u6765\u652F\u6301\u5E76\u884C\u7F16\u8BD1\u3002 \u8FD9\u53EF\u4EE5\u663E\u8457\u52A0\u5FEB\u7F16\u8BD1\u901F\u5EA6\u3002 \u5982\u679C\u60A8\u7684makefile\u6765\u81EATouchGFX 4.2.0 {#version-420}\u6216\u66F4\u65E9\u7248\u672C\uFF0C\u60A8\u9700\u8981\u66F4\u65B0\u6216\u4F7F\u7528make-3.81.exe\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `g++\u6709\u65F6\u53EF\u80FD\u4F1A\u62A5\u544A\u201C\u9A71\u52A8\u5668\u4E2D\u65E0\u78C1\u76D8\u3002 \u8BF7\u5C06\u78C1\u76D8\u63D2\u5165\u9A71\u52A8\u5668E:\u3002\u201D \u8BE5\u95EE\u9898\u53EF\u4EE5\u901A\u8FC7\u5C06gcc\u4ECE\u7248\u672C4.8.1\u66F4\u65B0\u81F3\u7248\u672C4.9.3{#version-493} \u6765\u89E3\u51B3\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-461"
  }), `\u7248\u672C4.6.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2016\u5E749\u670812\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BF9Cortex-M4\u548CCortex-M7\u4E0AGCC\u6838\u5FC3\u5E93\u7684\u4F18\u5316\u6539\u5584\uFF0C\u5E26\u6765\u7684\u52A0\u901F\u6548\u679C\u663E\u8457\u4F18\u4E8ETouchGFX 4.6.0 {#version-460}\uFF0C\u7279\u522B\u662F\u5BF9\u4E8ETextureMapper\u548CCanvas\u63A7\u4EF6\u66F4\u662F\u5982\u6B64\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL\u4E2D\u7684\u65B0\u51FD\u6570\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u6A21\u62DF\u5668\u7A97\u53E3\u7684\u6807\u9898\uFF0C\u53C2\u89C1HALSDL::setWindowTitle()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CBW_RLE\u683C\u5F0F\uFF081bpp\u663E\u793A\u5C4F\uFF09\u7684\u538B\u7F29\u6548\u679C\u4F1A\u66F4\u4F73\u3002 \u8BB0\u5F97\u9700\u8981\u5220\u9664\u539F\u6765\u751F\u6210\u7684\u6587\u4EF6\u5E76\u91CD\u65B0\u751F\u6210\u8D44\u6E90\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F7F\u7528IAR\u7684STM32F756G-EVAL\u73B0\u5728\u53EF\u652F\u6301\u5916\u90E8\u5B58\u50A8\u5668\u7684\u5237\u5199\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86IAR\u94FE\u63A5\u5668\u91CD\u5B9A\u5411\u547D\u4EE4\uFF0C\u7528\u4EE5\u4FEE\u4F7F\u7528IAR 7.x\u7F16\u8BD1Cortex-M4\u76EE\u6807\u65F6\u7684\u94FE\u63A5\u5668\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528setupBuffer()\u5C06\u4E0D\u540C\u7684\u5185\u5B58\u7F13\u51B2\u533A\u5206\u914D\u7ED9CanvasWidgetRenderer\u65F6\u53EF\u80FD\u5BFC\u81F4\u5185\u5B58\u5D29\u6E83\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0CTextureMapper\u53EF\u80FD\u5728\u5E27\u7F13\u51B2\u4E4B\u5916\u8FDB\u884C\u7ED8\u5236\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage\u7684\u504F\u79FB\u91CF\u8BBE\u7F6E\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u67D0\u4E9B\u60C5\u51B5\u4E0B\u5220\u9664\u52A8\u6001\u4F4D\u56FE\u65F6\u53EF\u80FD\u5BFC\u81F4\u5185\u5B58\u5D29\u6E83\u7684\u4E24\u4E2A\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86AnalogClock\u4E2D\u7F3A\u5931\u7684\u865A\u51FD\u6570\u58F0\u660E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86GCC\u94FE\u63A5\u5668\u811A\u672C\u4E2DLPC4088\u663E\u793A\u6A21\u5757\u90E8\u5206\u5BFC\u81F4\u6587\u672C\u548C\u5B57\u4F53\u88AB\u653E\u5165\u5916\u90E8\u95EA\u5B58\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u4F7F\u7528\u81EA\u5E26\u7684fontconvert.out\uFF0C\u5F53\u8F93\u51FA\u76EE\u5F55\u4E0D\u5B58\u5728\u65F6\uFF0C\u73B0\u5728\u53EF\u4EE5\u81EA\u52A8\u521B\u5EFA\u8F93\u51FA\u76EE\u5F55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0CScrollableContainers\u53EF\u80FD\u5411\u5B50\u5BB9\u5668\u53D1\u9001\u9519\u8BEF\u62D6\u52A8\u4E8B\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BBD\u5EA6\u4E0D\u53EF\u4EE5\u88AB8\u6574\u9664\u7684\u5355\u8272\uFF081bpp\uFF09\u663E\u793A\u5C4F\u4E0D\u80FD\u6B63\u786E\u663E\u793A\u6587\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G\u63A2\u7D22\u677F\u4E0A\u7684\u9ED8\u8BA4\u89E6\u6478\u91C7\u6837\u7387\u7565\u6709\u589E\u52A0\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-460"
  }), `\u7248\u672C4.6.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2016\u5E746\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF92bpp\u7070\u5EA6\u663E\u793A\u5C4F\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF94bpp\u7070\u5EA6\u663E\u793A\u5C4F\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u63A7\u4EF6TiledImage\u3002 \u5C06\u663E\u793A\u4E00\u5F20\u56FE\u50CF\u6216\u591A\u5F20\u91CD\u590D\u56FE\u50CF\u3002 \u56FE\u50CF\u7684\u91CD\u590D\u6B21\u6570\u53D6\u51B3\u4E8E\u63A7\u4EF6\u7684\u5927\u5C0F\u548C\u56FE\u50CF\u7684\u5927\u5C0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u63A7\u4EF6RepeatButton\u3002 \u662F\u4E00\u4E2A\u5728\u6309\u4E0B\u65F6\u4F1A\u5468\u671F\u6027\u89E6\u53D1\u70B9\u51FB\u4E8B\u4EF6\u7684\u6309\u94AE\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u63A7\u4EF6AnimationTextureMapper\u3002 TextureMapper\u81EA\u5E26\u52A8\u753B\u529F\u80FD\u3002 \u8BF7\u53C2\u89C1animation_texture_mapper_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u5BB9\u5668AnalogClock\u548CDigitalClock\uFF0C\u53C2\u89C1clock_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u5BB9\u5668ProgressIndicators\uFF0C\u53C2\u89C1progress_indicator_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u5BB9\u5668ModalWindow\u3002 \u53EF\u5728\u4E3B\u5C4F\u5E55\u4E0A\u521B\u5EFA\u4E00\u4E2A\u7A97\u53E3\uFF0C\u53EF\u5C4F\u853D\u4E3B\u5C4F\u5E55\u7684\u5176\u4F59\u90E8\u5206\u3002 \u53EA\u8981\u6A21\u6001\u7A97\u53E3\u53EF\u89C1\uFF0C\u70B9\u51FB\u65F6\u5C31\u4E0D\u4F1A\u4F20\u9012\u5230\u4E3B\u5C4F\u5E55\u3002 \u53C2\u89C1\u793A\u4F8Bmodal_window_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u5BB9\u5668SlideMenu\u3002 \u5E26\u6709\u6FC0\u6D3B\u6309\u94AE\u7684\u4FA7\u65B9/\u9876\u90E8/\u5E95\u90E8-\u83DC\u5355\u52A8\u753B\u5316\uFF0C\u53EF\u4F7F\u5176\u6ED1\u5165/\u6ED1\u51FA\u5C4F\u5E55\u3002 \u5982\u9700\u7A7A\u95F2\u4E00\u6BB5\u65F6\u95F4\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u81EA\u52A8\u9690\u85CF\u8D85\u65F6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Canvas Widget Line\u652F\u6301ROUND_CAP_ENDING\u548CsetCapPrecision()\uFF0C\u7528\u6765\u63A7\u5236\u5706\u5F62\u7EBF\u7AEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u62DF\u5668\u73B0\u5728\u53EF\u4EE5\u751F\u6210\u975E\u5E38\u63A5\u8FD1\u4E8E\u786C\u4EF6\u9891\u7387\u7684tick\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6A21\u62DF\u5668\u7A97\u53E3\u7684\u6807\u9898\u4E2D\u653E\u5165\u4E86\u9F20\u6807X\u548CY\u5750\u6807\u3002 \uFF08\u5728\u8FD0\u884C\u6A21\u62DF\u5668\u65F6\u6309F1\u952E\u53EF\u505C\u6B62\u8BE5\u529F\u80FD\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u57FA\u4E8ESTM32F7 MCU\u548CSTM32F7\u7684\u677F\u7684ST Cube\u9A71\u52A8\u7A0B\u5E8F\u66F4\u65B0\u81F3\u7248\u672C1.4.0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u4E86\u5BF9STM32769I-EVAL\u677F\u7684\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u589E\u4E86\u5BF9STM32F769I\u63A2\u7D22\u677F\u7684\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u9632\u6B62\u539F\u6765\u7684\u5C4F\u5E55\u622A\u56FE\u88AB\u610F\u5916\u8986\u76D6\uFF0C\u73B0\u5728\u7528\u5E26\u65F6\u95F4\u6233\u7684\u540D\u5B57\u4FDD\u5B58\u4ECE\u6A21\u62DF\u5668\uFF08F3\uFF09\u5236\u4F5C\u7684\u5C4F\u5E55\u622A\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u627E\u51FA\u6700\u4F73\u7684\u753B\u5E03\u5185\u5B58\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u6A21\u62DF\u5668\u4F1A\u8F93\u51FA\u753B\u5E03\u63A7\u4EF6\u5185\u5B58\u4F7F\u7528\u91CF\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST\u677F\u7684DMA\u9A71\u52A8\u7A0B\u5E8F\uFF1A\u5C55\u73B0STM32F7\u7684DMA2D\u5B9E\u4F8B\u521D\u59CB\u5316\u8FC7\u7A0B\u3002 \u4FEE\u6B63\u4E86\u5BF9F4-Discovery\u9519\u8BEF\u4F7F\u7528CLUT_CM\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5982\u679C\u540C\u65F6\u5728\u4F7F\u7528\u5176\u4ED6DMA\u901A\u9053\uFF0C\u5219LPC17xx\u3001LPC18xx\u548CLPC43xx\u7684DMA\u9A71\u52A8\u7A0B\u5E8F\u4E0D\u80FD\u6B63\u5E38\u8FD0\u4F5C\u3002 \u5B83\u4EEC\u73B0\u5728\u53EA\u9002\u7528\u4E8E\u76D1\u63A7\u901A\u90530\u7684\u6807\u8BB0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST\u677F\u89E6\u6478\u63A7\u5236\u5668\u9A71\u52A8\u7A0B\u5E8F\u5728\u67E5\u8BE2\u524D\u5DF2\u80FD\u6B63\u786E\u5730\u68C0\u67E5\u521D\u59CB\u5316\u662F\u5426\u6B63\u5E38\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u662F\u603B\u80FD\u68C0\u6D4B\u5230\u6A21\u62DF\u5668\u4E2D\u7684\u9F20\u6807\u70B9\u51FB\u4E8B\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert.exe\u7684\u9ED8\u8BA4\u683C\u5F0F\u662FRGB565\uFF08\u4E5F\u662F\u5176\u4ED6\u4E0D\u900F\u660E\u683C\u5F0F\u7684\u5408\u9002\u7684\u9ED8\u8BA4\u683C\u5F0F\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u4E0D\u80FD\u7528\u4E8E\u9884\u5B9A\u8981\u8FDB\u884C\u538B\u7F29\uFF08BW_RLE\uFF09\u548C\u65CB\u8F6C\uFF08\u6587\u4EF6\u540D\u4E2D\u7684\u542B.90.\uFF09 \u7684BW\u56FE\u50CF\uFF08\u538B\u7F29\u540E\u56FE\u50CF\u4F1A\u8FC7\u5927\uFF08\u56DE\u5230BW\u683C\u5F0F\uFF09\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u6240\u6709Makefiles\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u66FF\u4EE3\u771F\u5B9E\u8DEF\u5F84\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage\u73B0\u5728\u5141\u8BB8\u4ECEAnimationEnded\u56DE\u8C03\u51FD\u6570\u91CD\u65B0\u5F00\u59CB\u56FE\u7247\u52A8\u753B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06STM32756G-EVAL\u677F\u7684QSPI\u95EA\u5B58\u5927\u5C0F\u4FEE\u6B63\u4E3A64MBytes\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3ASTM32F7HAL::flushFrameBuffer\u589E\u52A0\u4E86D\u7F13\u5B58\u5931\u6548\u529F\u80FD\u3002 \u6B64\u4E3E\u4FEE\u6B63\u4E86\u5728\u5355\u5E27\u7F13\u51B2\u533A\u6A21\u5F0F\u4E0B\u4E14\u5E27\u7F13\u51B2\u533A\u4F4D\u4E8ESRAM\u4E2D\u65F6STM32F7\u4E0A\u5076\u53D1\u7684\u56FE\u5F62\u9519\u8BEF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `otm8009a\u663E\u793A\u5C4F\uFF08STM32769-DISCO\u3001STM32769-EVAL\u3001STM32469-DISCO\u548CSTM32469-EVAL\uFF09\u73B0\u4F7F\u7528\u6700\u5927\u663E\u793A\u5C4F\u4EAE\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3AIAR 7.50.x\u4E2D\u5173\u4E8Eva_list\u540D\u79F0\u91CD\u6574\u7684\u9519\u8BEF\u589E\u52A0\u4E86\u4E34\u65F6\u89E3\u51B3\u65B9\u6CD5\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u517C\u5BB9\u73B0\u67094.x\u5E94\u7528\u548CHAL\u7AEF\u53E3\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-451"
  }), `\u7248\u672C4.5.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2016\u5E743\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E0E\u89E3\u51B3va_list\u7B26\u53F7\u76F8\u5173\u7684\u4E24\u4E2AIAR\u94FE\u63A5\u5668\u95EE\u9898\uFF0C\u5B83\u4EEC\u4F1A\u5BFC\u81F4\u4E00\u4E9BIAR\u7248\u672C\u4E0D\u80FD\u94FE\u63A5\u5DE5\u7A0B\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F4\u63A2\u7D22\u677F\u4F1A\u572816bpp\u6A21\u5F0F\u4E0B\u7528\u9519\u8BEF\u7684\u989C\u8272\u7ED8\u5236\u5B9E\u5FC3\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u753B\u5E03\u63A7\u4EF6\u6E32\u67D3\u4E0D\u518D\u6267\u884C\u672A\u5BF9\u9F50\u7684\u5185\u5B58\u8BBF\u95EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `vApplicationIdleHook\uFF08\u7279\u5B9A\u4E8EFreeRTOS\uFF09\u8FC7\u53BB\u4F1A\u963B\u6B62FreeRTOS\u5728\u4EFB\u52A1\u88AB\u5220\u9664\u65F6\u91CA\u653E\u5B58\u50A8\u7A7A\u95F4\uFF0C\u73B0\u5728\u4E0D\u518D\u963B\u6B62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u80FD\u6B63\u786E\u5730\u6E32\u67D3\u4E2D\u95F4\u6709\u91CD\u97F3\u7684\u963F\u62C9\u4F2F\u6587\u5B57\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86PixelDataWidget::getAlpha()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EE5char*\u4F5C\u4E3A\u6E90\u5B57\u7B26\u4E32\u7684Unicode::strncpy()\u4E0D\u80FD\u6B63\u786E\u5730\u590D\u5236\u542B\u5927\u4E8E127\u7684ascii\u7801\u7684\u5B57\u7B26\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-450"
  }), `\u7248\u672C4.5.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2016\u5E742\u67082\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u4E24\u79CD\u65B0\u8BED\u8A00\uFF0C\u5373\u963F\u62C9\u4F2F\u8BED\u548C\u5E0C\u4F2F\u6765\u8BED\uFF0C\u4ECE\u53F3\u81F3\u5DE6\u8FDB\u884C\u6587\u672C\u6E32\u67D3\u3002 RTL\u5B57\u7B26\u4E32\u53EF\u4E0ELTR\u6587\u672C\u548C\u6570\u5B57\u76F8\u6DF7\u5408\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u6BCF\u50CF\u7D2024\u4F4D\u7684\u5E27\u7F13\u51B2\u3002 \u56FE\u50CF\u770B\u8D77\u6765\u7EC6\u8282\u66F4\u4E30\u5BCC\uFF0C\u4F46\u4F1A\u4F7F\u7528\u66F4\u591A\u7684\u5185\u5B58\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u4F7F\u7528Bitmap::dynamicBitmapCreate\u65B9\u6CD5\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u521B\u5EFA\u4F4D\u56FE\u3002 \u5728\u8BF8\u5982\u663E\u793A\u4ECESD\u5361\u52A0\u8F7D\u7684.bmp\u6587\u4EF6\u7B49\u60C5\u51B5\u4E0B\u6709\u7528\u3002 \u53C2\u89C1dynamic_bitmap_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5E27\u7387\u8865\u507F\u529F\u80FD\u5728\u5E27\u7387\u5076\u6709\u4E0B\u964D\u65F6\u63D0\u4F9B\u66F4\u6D41\u7545\u7684\u52A8\u753B\u6548\u679C\u3002 \u9ED8\u8BA4\u4E0D\u542F\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F3A\u5316\u4E86\u4F4D\u56FE\u7F13\u5B58\u7BA1\u7406\uFF0C\u5141\u8BB8\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664\u4F4D\u56FE\uFF0C\u53EF\u4E3A\u7F13\u5B58\u5176\u4ED6\u4F4D\u56FE\u817E\u51FA\u7A7A\u95F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F15\u5165\u4E86\u65B0\u63A7\u4EF6PixelDataWidget\u3002 \u6B64\u63A7\u4EF6\u80FD\u591F\u663E\u793A\u5728\u8FD0\u884C\u65F6\u83B7\u5F97\u7684\u539F\u59CB\u50CF\u7D20\u6570\u636E\uFF08\u5982\u89C6\u9891\u6837\u4F8B\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Windows\u4E0A\u53EF\u6267\u884C\u7684\u4EFF\u771F\u5668\u73B0\u5728\u5728\u4EFB\u52A1\u680F\u4E0A\u4F1A\u6709\u4E00\u4E2A\u56FE\u6807\uFF0C\u4EE5\u4FBF\u8BC6\u522B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u652F\u6301\u7684ST\u677F\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u201Cmake intflash\u201D\u6765\u70E7\u5F55\u5185\u90E8\u95EA\u5B58\uFF0C\u524D\u63D0\u662F\u5B89\u88C5\u4E86ST-Link Utility\u7248\u672C3.7+\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u652F\u6301\u66F4\u591A\u6807\u51C6\u683C\u5F0F\u9650\u5B9A\u7B26\uFF08\u5982%02d\uFF09\uFF0C\u5DF2\u5927\u5E45\u6539\u5584\u5E76\u66F4\u65B0\u4E86Unicode::snprintf()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u652F\u6301\u6D6E\u70B9\u578B\u589E\u52A0\u4E86Unicode::snprintfFloat()\uFF08\u5728\u5355\u72EC\u7684\u51FD\u6570\u4E2D\uFF0C\u56E0\u4E3A\u201C%f\u201Dva_args\u65B9\u6CD5\u4F1A\u5F3A\u5236\u5305\u542B\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u56FE\u50CF\u8F6C\u6362\u5668\u6296\u8272\u7B97\u6CD5\uFF08\u6D6E\u70B9\u8FD0\u7B97\uFF09\u3002 \u6B64\u5916\uFF0C\u8FD8\u589E\u52A0\u4E86\u5BF9\u65B0\u6296\u8272\u7B97\u6CD5\u7C7B\u578B\u7684\u652F\u6301\uFF0C\u5E76\u4E14\u8003\u8651\u4E8616/18\u4F4D\u663E\u793A\u5C4F\u4E2D\u5404\u79CD\u4F4E\uFF08\u672A\u4F7F\u7528\uFF09\u4F4D\u8FDE\u7EBF\u7684\u786C\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::ButtonWithLabel\u73B0\u5728\u5305\u542BupdateTextPosition()\u65B9\u6CD5\uFF0C\u53EF\u5728\u4FEE\u6539\u6807\u7B7E\u5185\u5BB9\uFF08\u5982\u4FEE\u6539\u8BED\u8A00\uFF09\u65F6\u786E\u4FDD\u6C34\u5E73\u6587\u672C\u5C45\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::TextArea\u65B0\u589E\u65B0\u65B9\u6CD5setBaselineY()\uFF0C\u5141\u8BB8\u6839\u636E\u6587\u672C\u57FA\u7EBF\u800C\u975E\u5DE6\u4E0A\u89D2\u6765\u5E03\u7F6E\u6587\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5B57\u5F62\u7F16\u7801\u7684\u5185\u90E8\u683C\u5F0F\u5C06\u7B2C\u4E00\u4E2A\u50CF\u7D20\u5B58\u50A8\u5728\u6700\u4F4E\u6709\u6548\u4F4D\u800C\u4E0D\u662F\u6700\u9AD8\u6709\u6548\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u652F\u630116\u4E0E24\u4F4D\u8272\u5F69\u4E4B\u95F4\u7684\u65E0\u7F1D\u5207\u6362\uFF0C\u8272\u5F69\u503C\u7684\u89C4\u683C\u5DF2\u4ECEuint16_t\u5207\u6362\u4E3Acolortype\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0Ctouchgfx::TextArea\u7C7B\u65B0\u589EsetIndentation()\u65B9\u6CD5\uFF0C\u53EF\u9632\u6B62\u5B57\u7B26\u5B57\u5F62\u5728\u5EF6\u4F38\u5230\u524D\u4E00\u4E2A\u5B57\u7B26\u4E0B\u65B9\u65F6\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\u4F1A\u88AB\u5207\u5272\uFF08touchgfx::Keyboard\u7C7B\u4E2D\u65B0\u589E\u7684setTextIndentation()\u65B9\u6CD5\u540C\u6837\u5982\u6B64\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F7xx\u548CSTM32F4x9\u7AEF\u53E3\u73B0\u5728\u652F\u6301touchgfx::Box\u7684DMA\u4F20\u8F93\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E4B\u524D\u53EA\u5BF9\u201CVSYNC\u201D\u4E2D\u65AD\u201C\u5207\u6362\u201DGPIO::VSYNC_FREQ\u4FE1\u53F7 (NXP LPC18xx\u3001NXP LPC43xx\u3001Freescale MK70F12\u548CST stm32f4x9\uFF09\u3002 \u73B0\u5728\uFF0C\u6B64\u4FE1\u53F7\u5728\u201CVSYNC\u201D\u4E2D\u65AD\u4E0A\u4E3A\u9AD8\u7535\u5E73\uFF0C\u5728\u201CFront-Porch-Entered\u201D\u4E2D\u65AD\u4E0A\u4E3A\u4F4E\u7535\u5E73\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M3\u7684GCC\u652F\u6301\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32F7\u4E0A\u6781\u5C11\u53D1\u751F\u7684\u7531\u65E0\u6548QSPI\u5185\u5B58\u533A\u7684\u63A8\u6D4B\u6027\u7F13\u5B58\u8BBF\u95EE\u5BFC\u81F4\u7684\u5D29\u6E83\u95EE\u9898\u3002 \u5982\u679C\u662F\u57FA\u4E8E\u7248\u672C4.4.x\uFF0C\u5219\u66F4\u65B0BoardConfiguration\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32F746G-DISCO\u677F\u4E0A\u5BF9FMC\u5B58\u50A8\u533A1\u7684\u7F13\u5B58\u8BBF\u95EE\u5BFC\u81F4\u7684\u5076\u53D1\u663E\u793A\u5C4F\u95EA\u70C1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u9632\u6B62\u5728\u67D0\u4E9B\u7279\u5B9A\u60C5\u51B5\u4E0B\u63D2\u5165%%\uFF0C\u6539\u8FDB\u4E86touchgfx::TextAreaWithWildcards\u4E2D\u5B57\u7B26\u201C%\u201D\u7684\u5904\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::DragEvent\u548Ctouchgfx::GestureEvent\u73B0\u5728\u4F7F\u7528\u548C\u62A5\u544A\u6709\u7B26\u53F7\u5750\u6807\u800C\u975E\u65E0\u7B26\u53F7\u5750\u6807\u3002 \u7531\u4E8E\u62D6\u66F3/\u624B\u52BF\u662F\u7528\u63A5\u6536\u5B83\u4EEC\u7684\u53EF\u7ED8\u5236\u5BF9\u8C61\u7684\u76F8\u5BF9\u5750\u6807\u8868\u793A\u7684\uFF0C\u56E0\u800C\u66F4\u52A0\u5408\u7406\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `snprintf(\u201D%x\u201D)\u4F1A\u8F93\u51FA\u5927\u5199\u5341\u516D\u8FDB\u5236\u5B57\u7B26\u3002 \u73B0\u5728\uFF0C\u201C%X\u201D\u8F93\u51FA\u5927\u5199\u5341\u516D\u8FDB\u5236\u5B57\u6BCD\uFF0C\u201D%x\u201D\u8F93\u51FA\u5C0F\u5199\u5341\u516D\u8FDB\u5236\u5B57\u6BCD\uFF0C\u5C31\u50CF\u6807\u51C6snprintf()\u4E00\u6837\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728Linux\u4E0A\u6F14\u793A\u7684\u968F\u673A\u6027\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4F7F\u7528\u9AD8\u503E\u659C\u5EA6\u5B57\u4F53\u65F6\u7684\u91CD\u7ED8\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6240\u6709TouchGFX\u5E94\u7528\u7684Model\u7C7B\u4E2D\u6307\u5411ModelListener\u7684\u6307\u9488\u5747\u672A\u6B63\u786E\u521D\u59CB\u5316\uFF08NULL\uFF09\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5BF9touchgfx::TextArea\u4E2D\u9AD8\u503E\u659C\u5EA6\u5B57\u4F53\u7684\u652F\u6301\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u56FE\u50CF\u8F6C\u6362\u5668\u4E2D\u7684\u5C0F\u95EE\u9898\uFF0C\u52170\u53EF\u80FD\u4F1A\u5F97\u5230\u7A0D\u6709\u9519\u8BEF\u7684\u50CF\u7D20\u8272\u5F69\u3002 \u56E0\u6B64\uFF0C\u6574\u4E2A\u56FE\u50CF\u53EF\u80FD\u7A0D\u6709\u9519\u8BEF\uFF0C\u51E0\u4E4E\u6CE8\u610F\u4E0D\u5230\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6ED1\u5757\u4E2D\u7684\u5C0F\u9519\u8BEF\uFF0C\u6570\u503C\u5206\u5E03\u4E0D\u5747\u5300\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u5F03\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD::drawGlyph()\u5DF2\u5F03\u7528\u3002 \u6539\u4E3A\u4F7F\u7528LCD::drawString\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u517C\u5BB9\u73B0\u67094.x\u5E94\u7528\u548CHAL\u7AEF\u53E3\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-442"
  }), `\u7248\u672C4.4.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2015\u5E7411\u670826\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728STM32F7\u76EE\u6807\u677F\u4E0A\u4F7F\u7528IAR 7.x\u7F16\u8BD1\u65F6\u7F55\u89C1\u7684GUI\u4EFB\u52A1\u6302\u8D77\u95EE\u9898\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-441"
  }), `\u7248\u672C4.4.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2015\u5E7410\u670827\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728STM32F7\u76EE\u6807\u786C\u4EF6\u4E0A\u4F7F\u7528Keil 5.x\u7F16\u8BD1\u65F6\u5076\u53D1\u7684GUI\u4EFB\u52A1\u6302\u8D77\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32 F469\u8BC4\u4F30/\u63A2\u7D22\u677F\u4E0A\u5728\u6A2A\u5C4F\u548C\u5355\u5E27\u7F13\u51B2\u6A21\u5F0F\u4E0B\u4F7F\u7528DSI\u65F6\u5076\u53D1\u7684\u6495\u88C2\u6548\u679C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u652F\u6301\u5185\u90E8\u95EA\u5B58\u70E7\u5F55\uFF0C\u4FEE\u6B63\u4E86STM32 F469\u677F\u7684IAR\u95EA\u5B58\u52A0\u8F7D\u5668\u8BBE\u7F6E\uFF08\u6CE8\u610F\uFF1AQuadSPI\u95EA\u5B58\u4ECD\u7136\u5FC5\u987B\u4ECEST-Link Utility\u8FDB\u884C\u70E7\u5F55\uFF0C\u56E0\u4E3A\u8FD8\u6CA1\u6709\u7528\u4E8E\u6B64\u7528\u9014\u7684IAR\u52A0\u8F7D\u5668\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G\u8BC4\u4F30\u677F\u6027\u80FD \u6D4B\u91CF\u7684GPIO\u7C7B\u73B0\u5728\u80FD\u6B63\u5E38\u4F7F\u7528BSP_LED\u51FD\u6570\u3002 \u8BF7\u6CE8\u610F\uFF0C\u7531\u4E8ELED2\u548CLED4\u4F7F\u7528\u7684\u662FIO\u6269\u5C55\u5668\uFF0C\u4E0D\u9002\u5408\u6D4B\u91CF\u6027\u80FD\uFF0C\u56E0\u6B64\u6B64\u677F\u4E0A\u9ED8\u8BA4\u53EA\u6709\u4E24\u4E2A\u4FE1\u53F7\u6709\u6548\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86\u5728\u8C03\u8BD5Cortex-M7\u5E94\u7528\u65F6\uFF0CIAR Workbench\u4E2D\u5F39\u51FA\u7684\u607C\u4EBA\u7684\u201C\u83B7\u53D6\u66FF\u4EE3\u6587\u4EF6\u201D\u5BF9\u8BDD\u6846\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-440"
  }), `\u7248\u672C4.4.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2015\u5E7410\u67086\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9Cortex-M7\u5185\u6838\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u89E6\u6478\u5C4F\u8F93\u5165\u5F15\u5165\u4E86\u201C\u624B\u6307\u5927\u5C0F\u201D\u7684\u6982\u5FF5\u3002 \u5728\u4F7F\u7528\u65F6\uFF0CTouchGFX\u4F1A\u5C1D\u8BD5\u5728\u62A5\u544A\u7684x\u3001y\u5750\u6807\u5468\u56F4\u533A\u57DF\u627E\u5230\u53EF\u89E6\u6478\u7684\u63A7\u4EF6\uFF0C\u56E0\u6B64\u7528\u6237\u4E0D\u5FC5\u518D\u7CBE\u786E\u5730\u70B9\u51FB\u63A7\u4EF6\u3002 \u6B64\u529F\u80FD\u6781\u5927\u5730\u65B9\u4FBF\u4E86\u5C0F\u6309\u94AE\u7684\u70B9\u51FB\u3002 \u53C2\u89C1HAL::setFingerSize()\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301Visual Studio 2015`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u4E3A\u4E86\u5FEB\u901F\u8BBF\u95EE\uFF0C\u6F14\u793A\u548C\u793A\u4F8B\u7684Visual Studio\u5DE5\u7A0B\u5728Resources\u6587\u4EF6\u5939\u4E0B\u5305\u542B\u4E86Application.props\u3002 \u5728\u4FEE\u6539Application.props\u5185\u5BB9\u65F6\uFF0C\u901A\u5E38\u53EF\u80FD\u9700\u8981\u91CD\u5EFA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301BDF\u683C\u5F0F\u7684\u70B9\u9635\u5B57\u4F53\u3002 \u5982\u679C\u5B57\u4F53\u6587\u4EF6\u4E2D\u6CA1\u6709\u8981\u6C42\u7684\u5B57\u53F7\u53EF\u7528\uFF0C\u5B57\u4F53\u8F6C\u6362\u5668\u4F1A\u5728\u9519\u8BEF\u4FE1\u606F\u4E2D\u5199\u5165\u652F\u6301\u7684\u5B57\u53F7\u3002 \u53C2\u89C1\u793A\u4F8Bmonochrome_example\u4E86\u89E3\u4F7F\u7528\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5F53\u5728\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\u4E2D\u68C0\u6D4B\u5230\u7A7A\u683C\u65F6\uFF0C\u751F\u6210\u8D44\u6E90\u4F1A\u53D1\u51FA\u6539\u8FDB\u7684\u9519\u8BEF\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6240\u6709ST\u677F\u73B0\u5728\u90FD\u53EF\u4EE5\u4ECE\u547D\u4EE4\u884C\u8FDB\u884C\u5237\u5199\uFF0C\u524D\u63D0\u662F\u5B89\u88C5\u4E86ST-Link Utility\u7248\u672C3.7\u3002 \u53EA\u9700\u4F7F\u7528\u2018\u2019make -f target/ST/`, `<`, `board`, `>`, `/Makefile flash' \u7F16\u8BD1\u5E94\u7528\u5E76\u5C06\u5176\u5237\u5199\u5230\u8FDE\u63A5\u7684\u677F\u4E0A\u3002 \u5982\u679C\u5237\u5199\u671F\u95F4\u8D85\u65F6\uFF0C\u8F6C\u81F3Windows\u4E2D\u7684\u8BBE\u5907\u7BA1\u7406\u5668\u5E76\u7981\u7528\u201C\u78C1\u76D8\u9A71\u52A8\u5668\u201D\u4E0B\u7684\u201CMBED\u5FAE\u63A7\u5236\u5668USB\u8BBE\u5907\u201D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7684touchgfx-env\u7248\u672C2.5\u4F7F\u7528\u4E86\u65B0\u7684gcc\u4EA4\u53C9\u7F16\u8BD1\u5668\u7248\u672C4.9.3{#version-493}\u3002 \u65E7\u7248\u672C4.8.4\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u751F\u6210Cortex-M7\u5185\u6838\u7684\u65E0\u6548\u4EE3\u7801\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u677F\u4EF6\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9STM32F7xx\u5904\u7406\u5668\u7684\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9STM32F746G-DISCO\u548CSTM32756G-EVAL\u677F\u7684\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u5177\u6709DSI\u663E\u793A\u5C4F\u7684STM32F469\u5904\u7406\u5668\u7684\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9STM32469I-EVAL\u548CSTM32469I\u63A2\u7D22\u677F\u7684\u652F\u6301`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5728\u4F7F\u7528\u201Crotate90\u201D\u65F6\uFF0CTextureMapper\u548CScaleableImage\u80FD\u591F\u6B63\u786E\u5730\u7ED8\u5236\u56FE\u50CF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86STM32F4DMA.cpp\u4E2D\u6F5C\u5728\u7684\u521D\u59CB\u5316\u987A\u5E8F\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u4E00\u79CD\u5B57\u4F53\u4E2D\u5B57\u5F62\u7684\u6570\u91CF\u88AB\u9650\u5236\u572832768\u4E2A\u7684\u95EE\u9898\u3002 \u73B0\u5728\uFF0C\u9884\u8BBE\u652F\u6301\u6BCF\u79CD\u5B57\u4F5365536\u4E2A\u5B57\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5BFC\u81F4hal.lockDMAToFrontPorch(false)\u5728\u5355\u5E27\u7F13\u51B2\u6A21\u5F0F\u4E0B\u65E0\u4EFB\u4F55\u4F5C\u7528\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F53\u6587\u672C\u5305\u542B\u65B0\u6587\u672C\u884C\u65F6\uFF0CButtonWithLabel\u80FD\u6B63\u786E\u5730\u5782\u76F4\u5177\u4E2D\u6587\u672C\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-430"
  }), `\u7248\u672C4.3.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2015\u5E746\u67088\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86TextureMapper\u63A7\u4EF6\u3002 TextureMapper\u662F\u4E00\u79CD\u9AD8\u5EA6\u4F18\u5316\u7684\u56FE\u50CF\u6E32\u67D3\u5668\uFF0C\u5728\u8FD0\u884C\u65F6\uFF0C\u53EF\u7528\u6765\u663E\u793A\u4ECE\u4E24\u4E2A\u6216\u4E09\u4E2A\u7EF4\u5EA6\u7F29\u653E\u548C/\u6216\u65CB\u8F6C\u8FC7\u7684\u56FE\u50CF\u3002 \u8FD9\u53EF\u7528\u4E8E\u5236\u4F5C\u56FE\u50CF\u7684\u9AD8\u7EA7\u65CB\u8F6C\u52A8\u753B\u3002 \u53C2\u89C1\u624B\u518C\u6216texture_mapper_example\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002 LCD\u6709\u65B0\u7684\u7ED8\u5236\u4E09\u89D2\u5F62\u548C\u76F8\u5E94\u626B\u63CF\u7EBF\u7684\u65B9\u6CD5\uFF0C\u5373drawTextureMapTriangle\u548CdrawTextureMapScanLine\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Alpha\u901A\u9053\u6296\u8272\u3002 \u73B0\u5728\uFF0C\u4E3A\u5B9E\u73B0\u66F4\u6D41\u7545\u7684alpha\u6E10\u53D8\u6548\u679C\uFF0C\u53EF\u4EE5\u5BF9\u6709alpha\u901A\u9053\u7684\u56FE\u50CF\u7684alpha\u901A\u9053\u4F7F\u7528\u6296\u8272\u529F\u80FD\uFF0C\u53C2\u89C1\u793A\u4F8B\u6216\u624B\u518C\u4E2D\u7684\u201C\u5E94\u7528\u5F00\u53D1\u201D\u4E00\u8282\u4E86\u89E3\u8BE6\u7EC6\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1BPP\uFF08\u5355\u8272\uFF09\u4F4D\u56FE\u7684\u538B\u7F29\u3002 \u589E\u52A0\u4E86BW_RLE\u7684\u56FE\u50CF\u683C\u5F0F\u9009\u9879\uFF0C\u5982\u679C\u5360\u7528\u7684\u7A7A\u95F4\u5C11\u4E8E\u5E38\u89C4\u7684\u6BCF\u50CF\u7D20\u683C\u5F0F\uFF0C\u5C06\u5BFC\u81F4\u4F4D\u56FE\u81EA\u52A8\u8FD0\u884C\u957F\u5EA6\u7F16\u7801\u3002 \u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u4F4D\u56FE\u7684\u7A7A\u95F4\u5927\u5C0F\u4F1A\u663E\u8457\u51CF\u5C11\u3002 \u53C2\u89C1\u624B\u518C\u4E2D\u7684\u201C\u9AD8\u7EA7\u201D\u4E00\u7AE0\u4E86\u89E3\u8BE6\u7EC6\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u6ED1\u5757\u63A7\u4EF6\u3002 \u53C2\u89C1\u624B\u518C\u6216slider_example\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u914D\u5408make-4.1\uFF0C\u66F4\u65B0\u4E86Makefiles\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9LPC4088\u5904\u7406\u5668\u548CEmbedded Artists LPC4088 Display Module\u677F\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u901A\u8FC7\u5728\u4F4D\u56FE\u6587\u4EF6\u540D\u4E2D\u5305\u542B\u5B57\u7B26\u4E32\u201C.int.\u201D\uFF0C\u53EF\u5C06\u5355\u72EC\u7684\u4F4D\u56FE\u653E\u5165\u5185\u90E8Flash\u800C\u4E0D\u662F\u5916\u90E8Flash\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MoveAnimator\u3001FadeAnimator\u548CZoomAnimationImage\u73B0\u5DF2\u589E\u52A0cancelMoveAnimation/cancelFadeAnimation/cancelZoomAnimation\u65B9\u6CD5\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u517C\u5BB9\u5DF2\u6709\u76844.X\u5E94\u7528\u3002 \u53EA\u9700\u66FF\u6362touchgfx\u6587\u4EF6\u5939\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u68C0\u67E5\u6587\u6863\u4E2D\u7684\u201C\u5DF2\u77E5\u95EE\u9898\u201D\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u4FE1\u606F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u968FTouchGFX\u7684\u8BC4\u4F30\u7248\u672C\u5206\u53D1\u786C\u4EF6\u62BD\u8C61\u5C42\u6E90\u4EE3\u7801\u800C\u975E\u9884\u7F16\u8BD1\u7684\u5E93\u3002 \u56E0\u6B64\uFF0C\u80FD\u591F\u5C06\u8BC4\u4F30\u7248\u672C\u79FB\u690D\u5230\u5B9A\u5236\u786C\u4EF6\uFF0C\u800C\u4E0D\u662F\u4EC5\u9650\u4E8E\u652F\u6301\u7684\u8BC4\u4F30\u677F\u3002 \u76F8\u53CD\u5730\uFF0C\u8BC4\u4F30\u7248\u672C\u73B0\u5728\u6709TouchGFX\u6C34\u5370\uFF0C\u6709\u65F6\u4F1A\u663E\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7531\u4E8E\u6539\u8FDB\u4E86\u6E32\u67D3\u7B97\u6CD5\uFF0C\u5185\u5B58\u4F7F\u7528\u91CF\u4E0B\u964D\u3002 \u76F8\u6BD4\u4E8E\u7248\u672C4.2.0 {#version-420}\uFF0C\u901A\u5E38\u80FD\u591F\u5C06GUI\u4EFB\u52A1\u6808\u7F29\u5C0F\u7EA61400\u5B57\u8282\uFF08\u5177\u4F53\u53D6\u51B3\u4E8E\u5B9E\u9645\u5E94\u7528\uFF09\u3002 \u6B64\u5916\uFF0C\u9759\u6001\u5206\u914D\u5185\u5B58\u7A7A\u95F4\u4E5F\u80FD\u51CF\u5C11\u7EA61KB\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5220\u9664\u4E86\u53EF\u89C1\u63A7\u4EF6\u7684\u6570\u91CF\u4E0A\u9650150\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A640x480\u548C480x272\u5206\u8FA8\u7387\u589E\u52A0\u4E86\u4E24\u4E2A\u65B0\u7684\u6F14\u793A\u4F8B\u7A0B\uFF0C\u5C55\u73B0\u65B0\u7279\u6027\u3001\u56FE\u8868\u3001\u56FD\u9645\u5316\u548C\u81EA\u5B9A\u4E49\u63A7\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CDrawable.setPosition()\u8C03\u7528setXY()\u3001setWidth()\u548CsetHeight()\u4EE5\u4FBF\u4E8E\u5B50\u7C7B\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u5B9E\u73B0\u81EA\u5DF1\u7684\u7ED8\u56FE\u5DE5\u5177\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528AbstractPainterRGB565\u548CAbstractPainterBW\u4F5C\u4E3A\u57FA\u7C7B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidgets\u73B0\u5728\u6709setAlpha()\u548CgetAlpha()\u65B9\u6CD5\u3002 \u60A8\u7684\u81EA\u5B9A\u4E49Painter\u7C7B\u5FC5\u987B\u5B9E\u73B0\uFF0C\u6216\u8005\u4ECEAbstractPainterRGB565\u7C7B\u7EE7\u627F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5DF2\u6CE8\u518C\u5B9A\u65F6\u5668\u63A7\u4EF6\u7684\u6700\u5927\u6570\u91CF\u4ECE16\u589E\u52A0\u81F3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx-env\u66F4\u65B0\u81F32.4\u3002 \u73AF\u5883\u4E0D\u518D\u53D1\u51FA\u8702\u9E23\u58F0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CSTM324x9I-EVAL\u7684\u677F\u652F\u6301\u5957\u4EF6\u57FA\u4E8ESTMCubeF4\u9A71\u52A8\u7A0B\u5E8F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CScreen::handleGestureEvent\u5C06x/y\u8F6C\u6362\u4E3A\u76F8\u5BF9\u5750\u6807\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u540C\u4E00\u753B\u5E03\u4E0A\u591A\u6B21\u4F7F\u7528moveTo()\u7ED8\u5236\u591A\u4E2A\u5BF9\u8C61\u65F6\u53D1\u751F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76F8\u5BF9\u4E8E\u7F29\u653E\u6BD4\u4F8B\u7684ZoomAnimationImage\u79FB\u52A8\u672A\u4F7F\u7528\u6B63\u786E\u7684\u7F13\u52A8\u516C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PainterRGB565\u672A\u6B63\u786E\u6DF7\u5408\u7EFF\u8272alpha\u503C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RadioButtonGroup\u73B0\u5728\u521D\u59CB\u5316\u56DE\u8C03\u51FD\u6570\u4E3A\u96F6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScalableImage\u73B0\u5728\u53EF\u4F7F\u7528\u6709\u900F\u660E\u5EA6\u7684\u4F4D\u56FE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage\u4F1A\u663E\u793A\u52A8\u753B\u7684\u8D77\u70B9\u548C\u7EC8\u70B9\u4E24\u6B21\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidget::getMinimalRect()\u7684\u9ED8\u8BA4\u5B9E\u73B0\u8FD4\u56DE\u4E86\u76F8\u5BF9\u4E8E\u5176\u7236\u7C7B\u800C\u975E\u5176\u81EA\u8EAB\u7684\u5750\u6807\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u5728\u6BCF\u4E2Atick\u9519\u8BEF\u5730\u5C06\u5176\u81EA\u8EAB\u5F53\u4F5C\u5B9A\u65F6\u5668\u63A7\u4EF6\u53D6\u6D88\u6CE8\u518C\uFF0C\u4F7F\u4E4B\u96BE\u4EE5\u4E0E\u5176\u4ED6\u57FA\u4E8E\u5B9A\u65F6\u5668\u7684\u64CD\u4F5C\u4E00\u8D77\u4F7F\u7528\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u4F18\u5316\u4E86ScalableImage\u548CZoomAnimationImage\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-420"
  }), `\u7248\u672C4.2.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2015\u5E741\u670814\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6027\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u663E\u8457\u6539\u5584\u4E86\u6E32\u67D3\u6027\u80FD\uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u6E32\u67D3\u5E27\u6240\u9700\u7684\u65F6\u95F4\u7F29\u77ED\u4E8625%\u3002 \u6CE8\u610F\uFF1A\u6B64\u4F18\u5316\u4E0D\u4E00\u5B9A\u5728\u6240\u6709\u76EE\u6807\u786C\u4EF6\u4E0A\u90FD\u8D77\u4F5C\u7528\uFF0C\u56E0\u6B64\u5FC5\u987B\u624B\u5DE5\u542F\u7528\u3002 \u53C2\u89C1\u79FB\u690D\u6307\u5357\u4E2D\u7684\u201C\u4F18\u5316\u201D\u4E00\u7AE0\u4E86\u89E3\u5982\u4F55\u5BF9\u73B0\u6709\u79FB\u690D\u542F\u7528\u8BE5\u4F18\u5316\u3002 \u5F3A\u70C8\u5EFA\u8BAE\u542F\u7528\u4F18\u5316\u3002 \u6B64\u4F18\u5316\u5BF94.2.0 {#version-420} \u677F\u5957\u4EF6\u4E2D\u7684\u6240\u6709\u5408\u9002\u8BC4\u4F30\u677F\u662F\u6253\u5F00\u7684\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u4E3B\u8981\u7684\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u83B7\u5F97\u5E73\u6ED1\u7684\u6297\u952F\u9F7F\u56FE\u5F62\u7684\u7ED8\u5236\u6548\u679C\uFF0C\u589E\u52A0\u4E86CanvasWidgets\u3002 \u76EE\u524D\uFF0C\u5DF2\u5B9E\u73B0\u4E86Line\u3001Circle\u548C\u66F4\u591A\u666E\u901A\u5F62\u72B6\u3002 CanvasWidgets\u53EF\u7528\u5B9E\u8272\uFF08+ alpha\uFF09\u3001\u4F4D\u56FE\uFF08\u5305\u62ECalpha\uFF09\u6216\u81EA\u5B9A\u4E49\u7ED8\u56FE\u63A7\u4EF6\u8FDB\u884C\u7ED8\u5236\u3002 \u9605\u8BFB\u6587\u6863\u4E2D\u5173\u4E8E\u81EA\u5B9A\u4E49\u63A7\u4EF6\u548C\u7ED8\u56FE\u63A7\u4EF6\u7684\u66F4\u591A\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9Keil\u7F16\u8BD1\u5668\u548CuVision4 IDE\u7684\u652F\u6301\u3002 \u8BF7\u53C2\u9605\u201CTouchGFX\u53D1\u5E03\u201D\u4E00\u7AE0\u4E2D\u201C\u652F\u6301\u7684\u786C\u4EF6\u201D\u4E00\u8282\uFF0C\u83B7\u53D6Keil\u652F\u6301\u7684\u76EE\u6807\u786C\u4EF6\u5217\u8868\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u53EF\u4EE5\u5728ZoomAnimationImage\u3001MoveAnimator\u548CFadeAnimator\u4E0A\u6307\u5B9A\u52A8\u753B\u542F\u52A8\u5EF6\u8FDF\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF94.3\u201D TouchGFX\u6F14\u793A\u677F\u7684\u677F\u4EF6\u652F\u6301\u3002 LPC4350\uFF08\u65E0\u5185\u90E8\u95EA\u5B58\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86RadioButton\u548CRadioButtonGroup\u63A7\u4EF6\u3002 \u53C2\u89C1app/examples/radio_button_example\u548C\u6587\u6863\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LPC43XX\u548CLPC1788\u73B0\u5728\u53EF\u4EE5\u7528DMA\u586B\u5145\u77E9\u5F62\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\u652F\u6301Visual Studio 2013\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BF9Visual Studio 2015\u9884\u89C8\u7248\u672C\u7684\u521D\u6B65\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u751F\u6210\u8D44\u6E90\u65F6\u7684\u6027\u80FD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u793A\u4F8B\u76EE\u5F55\u4E2D\u589E\u52A0\u4E86\u65B0\u7684canvas_widget_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0C\u5B58\u5728\u4E8E\u5404\u79CD\u5934\u6587\u4EF6\u4E2D\u7684\u201C\u4F7F\u7528\u547D\u540D\u7A7A\u95F4touchgfx\u201D\u53EF\u901A\u8FC7\u5728\u5DE5\u7A0B\u4E2D\u5B9A\u4E49\u9009\u9879NO_USING_NAMESPACE_TOUCHGFX\u6765\u907F\u5F00\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX env`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7528\u793A\u4F8B\u7684\u6B63\u786E\u8DEF\u5F84\u4FEE\u6B63\u4E86\u542F\u52A8shell\u65F6\u663E\u793A\u7684\u4FE1\u606F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5F53\u5BBD\u5EA6\u548C/\u6216\u9AD8\u5EA6\u4E0D\u662F8\u7684\u500D\u6570\u65F61bpp\u663E\u793A\u5C4F\u6A21\u62DF\u5668\u4E2D\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86ScrollableContainer\u4E2DCANCEL\u4E8B\u4EF6\u5E76\u975E\u603B\u662F\u6388\u7ED9\u6B63\u786E\u7684\u5B50\u5BB9\u5668\uFF0C\u5BFC\u81F4\u8BF8\u5982\u5728SC\u533A\u57DF\u4E4B\u5916\u62D6\u66F3\u65F6\u6309\u94AE\u7EF4\u6301\u6309\u4E0B\u72B6\u6001\u7B49\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u65CB\u8F6C\u4E86\u663E\u793A\u5C4F\u7684\u60C5\u51B5\u4E0B\u6E32\u67D3chromArt\u5B57\u4F53\u65F6\u53D1\u751F\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u952E\u76D8\u63A7\u4EF6setTouchable(false)\u4E0D\u8D77\u4F5C\u7528\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freescale K70 DMA\u73B0\u5728\u4F1A\u68C0\u67E5TCD0_CSR\u4E2D\u7684\u5408\u9002DONE\u4F4D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728ST\u5904\u7406\u5668\u4E0A\u4FEE\u6B63\u4E86\u5728\u975E\u539F\u672C\u663E\u793A\u5C4F\u65B9\u5411\u4E0BChromArt\u6E32\u67D3\u65CB\u8F6C\u8FC7\u7684\u6587\u672C\u65F6\u53D1\u751F\u7684\u95EE\u9898\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u677F\u4EF6\u652F\u6301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Embedded Artists LPC4357DevKit\u677F\u5957\u4EF6\uFF1ACPU\u65F6\u949F\u9891\u7387\u4E3A204Mhz\uFF08\u4E4B\u524D\u4E3A96Mhz\uFF09\u3002 \u73B0\u5728\uFF0C\u4F7F\u7528SPIFI\u95EA\u5B58\u800C\u4E0D\u662FNOR\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u517C\u5BB9\u5DF2\u6709\u76844.X\u5E94\u7528\u3002 \u53EA\u9700\u66FF\u6362touchgfx\u6587\u4EF6\u5939\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u4FE1\u606F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u4E86\u6587\u6863\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-411"
  }), `\u7248\u672C4.1.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2014\u5E7410\u670829\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Mixin: \u589E\u52A0\u4E86MoveAnimator\u3002 MoveAnimator mixin\u4F7F\u6A21\u677F\u7C7BT\u80FD\u591F\u4ECE\u5176\u5F53\u524D\u4F4D\u7F6E\u5230\u6307\u5B9A\u7ED3\u675F\u4F4D\u7F6E\u7684\u8FD0\u52A8\u52A8\u753B\u5316\u3002 \u53C2\u89C1app/example/move_fade_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Mixin: \u589E\u52A0\u4E86FadeAnimator\u3002 FadeAnimator mixin\u4F7F\u6A21\u677F\u7C7BT\uFF0C\u80FD\u591F\u5C06\u5176\u4ECE\u5F53\u524Dalpha\u503C\u8F6C\u5230\u6307\u5B9A\u7ED3\u675Falpha\u503C\u7684\u6D88\u9690\u52A8\u753B\u5316\u3002 \u53C2\u89C1app/example/move_fade_example\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CScalableImage\u548CZoomAnimationImage\u652F\u6301\u6309\u50CF\u7D20\u8BBE\u7F6Ealpha\u548C\u6309\u4F4D\u56FE\u8BBE\u7F6Ealpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScalableImage\u548CZoomAnimationImage\u73B0\u5728\u652F\u6301ARGB8888\u683C\u5F0F\u4F4D\u56FE\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5BFC\u81F4\u952E\u76D8\u63A7\u4EF6\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\u4E0D\u80FD\u6B63\u5E38\u6E32\u67D3\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6B63\u4E86\u5728\u5C06\u63A7\u4EF6\u653E\u5165coords != {0,0}\u7684Container\uFF08\u5176\u81EA\u8EAB\u88AB\u653E\u5165ScrollableContainer\uFF09\u4E2D\u65F6\u5BFC\u81F4\u62D6\u66F3\u4E8B\u4EF6\u5750\u6807\u9519\u8BEF\u7684\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CApplication\u7C7B\u6B63\u5E38\u8BB0\u5F55\u4E3A\u7ED9\u5B9A\u63A7\u4EF6\u8C03\u7528registerTimerWidget\u548CunregisterTimerWidget\u7684\u6B21\u6570\u5BF9\u6BD4\uFF0C\u610F\u5473\u7740\u5982\u679C\u591A\u6B21\u6CE8\u518C\uFF0C\u5728\u63A7\u4EF6\u4E0D\u518D\u63A5\u6536tick\u4E8B\u4EF6\u524D\uFF0C\u9700\u8981\u76F8\u540C\u6B21\u6570\u7684\u53D6\u6D88\u6CE8\u518C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u4E9BZoomAnimationImage\u51FD\u6570\u5E94\u5F53\u662F\u4F46\u4E0D\u662F\u865A\u51FD\u6570\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E00\u4E9B\u63A7\u4EF6\u7F3A\u5C11\u7279\u5B9A\u7684getter\u51FD\u6570\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u517C\u5BB9\u5DF2\u6709\u76844.X\u5E94\u7528\u3002 \u53EA\u9700\u66FF\u6362touchgfx\u6587\u4EF6\u5939\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-410"
  }), `\u7248\u672C4.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2014\u5E7410\u670817\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\u652F\u6301\u5355\u82721BPP\u663E\u793A\u5C4F\u3002 \u53C2\u89C1\u624B\u518C\u4E86\u89E3\u8BE6\u7EC6\u4FE1\u606F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u52A8\u6001\u5C4F\u5E55\u7684\u65B9\u5411\u53D8\u5316\uFF08\u6A2A\u5C4F/\u7AD6\u5C4F\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u7F29\u653E\u56FE\u50CF\uFF08\u53C2\u89C1ScalableImage\u548CZoomAnimationImage\u53EF\u7ED8\u5236\u5BF9\u8C61\uFF09`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u6F14\u793A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BB6\u5C45\u63A7\u5236\u6F14\u793A\u73B0\u5728\u652F\u6301640x480\u6A21\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5BB6\u5C45\u63A7\u5236\u6F14\u793A\u73B0\u5728\u652F\u6301STM324xI-EVAL 5.7\u201D\u677F\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u677F\u4EF6\u652F\u6301\u53D8\u66F4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9STM324xI-EVAL 5.7\u201D\u677F\uFF08IAR+gcc\uFF09\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9EmbeddedArtists LPC4357DevKit\u677F\u7684gcc\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4F18\u5316\u4E86TouchGFX\u8BC4\u4F30\u677F\u7684SPIFI\u521D\u59CB\u5316\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5411ScrollableContainer\u6DFB\u52A0\u6C38\u4E45\u6027Drawable\u4F1A\u5BFC\u81F4\u65AD\u8A00\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u66F4\u5927\u5B57\u4F53`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u517C\u5BB9\u5DF2\u6709\u76844.X\u5E94\u7528\u3002 \u53EA\u9700\u66FF\u6362touchgfx\u6587\u4EF6\u5939\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-400"
  }), `\u7248\u672C4.0.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u53D1\u5E03\u65E5\u671F\uFF1A2014\u5E749\u670826\u65E5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchEvent\u91CD\u6784\uFF08API\u53D8\u66F4\uFF09\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setActive\u91CD\u547D\u540D\u4E3ADrawable::setTouchable`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::isActive\u91CD\u547D\u540D\u4E3ADrawable::isTouchable`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5F03\u7528\u4E86Drawable::hijackTouchEvent`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable\u73B0\u5728\u9ED8\u8BA4\u4E3A\u975E\u89E6\u6478\u6A21\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchEvents\u603B\u662F\u4F20\u9012\u5230\u6240\u6709\u5B50\u5BB9\u5668`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u6587\u672C\u8F6C\u6362\u5668\u589E\u52A0\u4E86\u8BED\u8A00\u7279\u5B9A\u5B57\u4F53\u6392\u5370\u548C\u5BF9\u9F50\u5217\u7684\u652F\u6301\u3002 \u9605\u8BFB\u6587\u6863\u4E2D\u5173\u4E8E\u6B64\u7279\u6027\u7684\u66F4\u591A\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ECE\u5B57\u4F53\u5F62\u72B6\u548C\u95F4\u8DDD\u8C03\u6574\u65B9\u9762\u5927\u5E45\u6539\u5584\u4E86\u5B57\u4F53\u7684\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6A21\u62DF\u5668 - \u5728\u6267\u884C\u5C4F\u5E55\u8F6C\u6362\u65F6\u751F\u6210\u5BF9\u65B0\u89C6\u56FE/\u8868\u73B0\u5668/\u8F6C\u6362\u5927\u5C0F\u7684\u65AD\u8A00\u68C0\u67E5\u3002 \u672A\u80FD\u751F\u6210\u68C0\u67E5\u7684\u539F\u56E0\u53EF\u80FD\u662FFrontEndHeap\u4E2D\u7F3A\u5C11\u89C6\u56FE/\u8868\u73B0\u5668/\u8F6C\u6362\u7684\u5B9A\u4E49\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\u548CButtonWithLabel\u73B0\u5728\u652F\u6301\u6587\u672C\u65CB\u8F6C0\u300190\u3001180\u6216270\u5EA6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6539\u5584\u4E86\u7279\u6B8A\u60C5\u51B5\u4E0BButtonWithLabel\u4E0A\u7684\u6587\u672C\u5C45\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301\u7684ST\u5E73\u53F0\u4E0A\u7684\u786C\u4EF6\u52A0\u901F\u6587\u672C\u6E32\u67D3\uFF084\u548C8bpp\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u80FD\u591F\u5728\u5916\u90E8RAM\u4E2D\u7F13\u5B58\u4F4D\u56FE\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u6761\u76EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301Freescales K70 MCU\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7FFB\u8BD1\u8868\uFF1A\u5C06\u201C\\`, `<`, `\u201D\u548C\u201C\\`, `>`, `\u201D\u7684\u5B9E\u4F8B\u5206\u522B\u8F6C\u6362\u6210\u4E86\u201C`, `<`, `\u201D\u548C\u201C`, `>`, `\u201D\u3002 \u652F\u6301\u6587\u5B57\u7FFB\u8BD1\u5B57\u7B26\u4E32\uFF0C\u5982\u201C`, `<`, `Not a wildcard`, `>`, `\u201D\uFF08\u4F7F\u7528\u201C`, `<`, `Not a wildcard\\`, `>`, `\u201D\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u652F\u6301MCU\u7684NXP LPC18XX\u7CFB\u5217\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5177\u6709\u5947\u6570\u5BBD\u5EA6\u503C\u4E14alpha\u503C\u5C0F\u4E8E255\u7684\u56FE\u50CF\u7684\u6E32\u67D3\u9519\u8BEF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u672A\u521D\u59CB\u5316textArea\u65F6\u6B63\u786E\u5904\u7406TextArea::getTextHeight`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextAreaWithWildcard::getTextWidth\u73B0\u5728\u5305\u542B\u4E86\u901A\u914D\u7B26\u6587\u672C\u7684\u5BBD\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `gcc Makefiles\u73B0\u5728\u5305\u542B\u56FE\u50CF\u8D44\u6E90\u4E2D\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `.BMP\u548C`), `.PNG\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u8981\u622A\u65AD\u6587\u672C\u8868\u4E2D\u4EFB\u4F55\u7FFB\u8BD1\u5185\u5BB9\u7684\u524D\u5BFC\u7A7A\u683C\u548C\u5C3E\u968F\u7A7A\u683C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5B57\u4F53\u8F6C\u6362\u5668\u672A\u80FD\u6B63\u786E\u751F\u62108bpp\u7684\u5B57\u4F53\u6570\u636E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ButtonWithIcon::setBitmaps - \u4E3A\u4E3B\u52A8\u7684\u865A\u51FD\u6570\u91CD\u5199\u9690\u85CF\u4E86IAR\u8B66\u544A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ButtonWithIcon\u4F18\u5316\u4E86\u7ED8\u5236\u529F\u80FD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0C\u6587\u672C\u53EF\u4EE5\u7A0D\u5FAE\u8D85\u51FA\u6587\u672C\u533A\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u7531\u4E8E\u91CD\u6784\u4E86TouchEvent\uFF0C\u60A8\u5FC5\u987B\u76F8\u5E94\u5730\u4FEE\u6539\u91CD\u547D\u540D\u76F8\u5173\u51FD\u6570\u3002 \u6B64\u5916\uFF0C\u5982\u679C\u4EFB\u4F55\u81EA\u5B9A\u4E49\u63A7\u4EF6\u6216\u5BB9\u5668\u9700\u8981\u63A5\u6536\u89E6\u6478\u4E8B\u4EF6\uFF0C\u60A8\u8FD8\u9700\u8981\u5728\u5176\u4E2D\u58F0\u660E\u3002 \u5982\u679C\u60A8\u8FC7\u53BB\u4F7F\u7528hijackTouchEvent\u9632\u6B62\u5B50\u5BB9\u5668\u6355\u83B7\u89E6\u6478\u4E8B\u4EF6\uFF0C\u73B0\u5728\u5219\u9700\u8981\u786E\u4FDD\u6240\u6709\u5B50\u5BB9\u5668\u4E0D\u53EF\u89E6\u6478\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u9700\u8981\u66F4\u65B0\u6A21\u62DF\u5668\u7684Main.cpp\uFF0C\u65B9\u6CD5\u662F\u7528Texts::setLanguage(0)\u66FF\u6362\u4EE5\u4E0B\u4EE3\u7801\u884C\uFF1A TypedText::registerTypedTextDatabase(TypedTextDatabase::getInstance(), TypedTextDatabase::getInstanceSize()) \u3002 \u60A8\u4E5F\u53EF\u4EE5\u4ECE\u6587\u672C\u6570\u636E\u5E93\u6307\u5B9A\u7279\u5B9A\u8BED\u8A00\uFF0C\u5982Texts::setLanguage(GB)\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u60A8\u8FD8\u9700\u8981\uFF1A #include `, `<`, `texts/TextKeysAndLanguages.hpp`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u91CD\u5EFA\u6574\u4E2A\u5DE5\u7A0B\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u4FE1\u606F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5927\u5E45\u66F4\u65B0\u4E86TouchGFX\u624B\u518C\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-310"
  }), `\u7248\u672C3.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u65B0\u7279\u6027`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9FDI uEZGUI-1788-70WVT\u8BC4\u4F30\u677F\uFF08NXP LPC-1788 Cortex M3\uFF09\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9Mjolner TouchGFX\u6F14\u793A\u677F\u7248\u672C1.1\uFF0C\u8BC4\u4F30\u677F\uFF08NXP LPC-4353 Cortex M4/M0 4.3\u201D\uFF09\u7684\u652F\u6301\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CVisual Studio\u5F53\u6709\u65B0\u56FE\u50CF\u6DFB\u52A0\u5230assets/images\u6587\u4EF6\u5939\u65F6\u91CD\u5EFABitmapDatabase.h\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EC5\u5F53\u4F7F\u7528Visual Studio\u65F6\uFF1A\u66F4\u65B0Visual Studio .props\u6587\u4EF6\u4E2D\u7684TouchGFXReleasePath\u3002 \u4EC5\u9700\u5728\u6587\u672C\u7F16\u8F91\u5668\u4E2D\u7F16\u8F91\u6587\u4EF6\u3002 \u5E94\u4F7F\u7528\u201Ctouchgfx\\\u201D\u6269\u5C55\u8DEF\u5F84\u3002 \u53C2\u89C1template_application\u4EE5\u83B7\u53D6\u7075\u611F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EC5\u5F53\u4F7F\u7528Visual Studio\u65F6\uFF1A\u66F4\u65B0Visual Studio\u5DE5\u7A0B\u6587\u4EF6\uFF08.vcxproj\u6587\u4EF6\uFF09\u3002 \u4EC5\u9700\u5728\u6587\u672C\u7F16\u8F91\u5668\u4E2D\u7F16\u8F91\u6587\u4EF6\u3002 \u7528\u201C$(TouchGFXReleasePath)\\config\\msvs\\touchgfx_prebuild.targets\u201D\u66FF\u6362\u201C$(TouchGFXReleasePath)\\framework\\config\\msvs\\touchgfx_prebuild.targets\u201D\u5F62\u5F0F\u7684\u6240\u6709\u8DEF\u5F84\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u4FE1\u606F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u786C\u4EF6\u62BD\u8C61\u5C42\u67B6\u6784\u5DF2\u91CD\u6784\uFF0C\u56E0\u6B64\u5404\u79CD\u786C\u4EF6\u7EC4\u4EF6\uFF08MCU\u548C\u9A71\u52A8\u5668\uFF09\u7684\u6240\u6709\u5171\u7528\u4EE3\u7801\u5DF2\u5728\u4E0D\u540C\u76EE\u6807\u677F\u4EF6\u4E0A\u5171\u4EAB\u3002 \u56E0\u6B64\uFF0C\u53EA\u8981\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2ATouchGFX\u652F\u6301\u7684\u786C\u4EF6\u7EC4\u4EF6\uFF0C\u5C31\u80FD\u5927\u5E45\u7B80\u5316\u65B0\u677F/\u81EA\u5B9A\u4E49\u677F\u7684\u79FB\u690D\u5DE5\u4F5C\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
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
  }, `\u589E\u52A0\u4E86\u5BF9\u6709alpha\u901A\u9053\u7684png\u56FE\u50CF\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9assets/bitmaps\u6587\u4EF6\u5939\u4E2D\u5305\u542B\u5B50\u6587\u4EF6\u5939\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9ST STM32F4X9I-EVAL\u8BC4\u4F30\u677F\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9Robert Penners\u7F13\u52A8\u516C\u5F0F\u7684\u652F\u6301\uFF08\u53C2\u89C1touchgfx/EasingEquations.hpp\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u56FE\u50CF\u8F6C\u6362\u5668\uFF1A\u589E\u52A0\u4E86\u8F93\u5165\u56FE\u50CF\u6587\u4EF6\u540D\u7684\u5B8C\u6574\u6027\u68C0\u67E5\uFF0C\u6587\u4EF6\u540D\u4E0D\u5F97\u4EE5\u6570\u5B57\u5F00\u5934\u4E14\u5FC5\u987B\u7531\u5B57\u6BCD\u6570\u5B57\u7EC4\u6210\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u56FE\u50CF\u8F6C\u6362\u5668\uFF1A\u589E\u52A0\u4E86\u5BF9\u8F93\u5165\u5217\u8868\u4E2D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6587\u4EF6\u540D\u7684\u91CD\u540D\u68C0\u67E5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6587\u672C\u8F6C\u6362\u5668\uFF1A\u589E\u52A0\u4E86\u6784\u5EFA\u505C\u6B62\u5BF9bpp\u548Cfont_size\u503C\u7684\u5B8C\u6574\u6027\u68C0\u67E5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\uFF1A\u73B0\u5728\u53EF\u652F\u6301setScrollbarPadding\u3001setScrollbarWidth\u3001setScrollbarColor\u548CsetScrollbarAlpha\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\uFF1A\u5C06ScrollThreshold\u7684\u9ED8\u8BA4\u503C\u8BBE\u7F6E\u4E3A5\u50CF\u7D20\uFF0C\u800C\u975E1\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u5B57\u4F53\u7684alpha\u6DF7\u5408\u7684\u652F\u6301\uFF08TextArea::setAlpha(uint8_t alpha)\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\u652F\u6301\u4E24\u79CD\u4E0D\u540C\u7684\u8F93\u51FA\u683C\u5F0F\uFF1ARGB565\u548CARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert - \u589E\u52A0\u4E86\u4E24\u4E2A\u9009\u9879\uFF0C\u7528\u4E8E\u63A7\u5236\u6709/\u65E0alpha\u901A\u9053\u7684\u56FE\u50CF\u7684\u8F93\u51FA\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u4FEE\u6B63\u5927\u5DE5\u7A0B\u7684\u94FE\u63A5\u5668\u9519\u8BEF\uFF0C\u66F4\u65B0\u4E86MinGW\u4E0B\u7684Touchgfx\u73AF\u5883\u3002 g++\u7248\u672C\u4ECE4.6.2->\u81F34.8.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5185\u90E8RAM\u7A7A\u95F4\u5360\u7528\u7684\u6539\u8FDB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u76EE\u6807\u5E93\u548C\u786C\u4EF6\u62BD\u8C61\u5C42\u7684\u7ED3\u6784\u6027\u4FEE\u6539`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u9519\u8BEF\u4FEE\u6B63`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5728lpc4357_emb_artist\u677F\u4E0A\u586B\u5145\u64CD\u4F5C\uFF08Box\u63A7\u4EF6\uFF09\u5BFC\u81F4\u7684\u5D29\u6E83\u95EE\u9898\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Textconvert & fontconvert\uFF1A \u73B0\u5728\uFF0C\u4E0D\u540C\u5B57\u4F53\u6392\u5370\u53EF\u80FD\u4F1A\u5177\u6709\u76F8\u540C\u7684\u5C5E\u6027\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Imageconvert & fontconvert\uFF1APOSIX\u517C\u5BB9\u5E73\u53F0\u4E0A\u7684\u9519\u8BEF\u5904\u7406\u4F18\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL\uFF1A\u4E0D\u8BA9\u5173\u952E\u6570\u636E\u7C7B\u578B\u6EA2\u51FA\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u73B0\u5728\uFF0CLanguageXX.cpp\u6587\u4EF6\u65B0\u589E\u4E00\u884C\u7ED3\u5C3E\uFF08\u4EE5\u53BB\u9664\u8B66\u544A\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea::draw\u73B0\u5728\u80FD\u6B63\u786E\u5730\u5904\u7406\u672A\u521D\u59CB\u5316\u7684TypedText\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u66F4\u65B0\u8FC7\u7A0B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u6587\u4EF6\u5939assets/bitmaps\u548Cgenerated/bitmaps\u5FC5\u987B\u91CD\u547D\u540D\u4E3Aassets/images\u548Cgenerated/images\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5347\u7EA7TouchGFX\u73AF\u5883\u81F3\u7248\u672C2.0\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u66F4\u65B0\u6240\u6709\u5E94\u7528\u7684Makefile\uFF0C\u4EE5\u4E0E\u66F4\u65B0\u7684template_application\u4E2D\u6307\u5B9A\u7684Makefile\u4FDD\u6301\u4E00\u81F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u91CD\u5EFA\u6574\u4E2A\u5DE5\u7A0B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5C06\u5305\u542B\u900F\u660E\u539F\u8272\u7684bmp\u56FE\u50CF\u8F6C\u6362\u4E3A\u4F7F\u7528alpha\u901A\u9053\u7684png\u56FE\u50CF\u3002 \u53EF\u7528\u514D\u8D39\u5DE5\u5177imagemagick\u81EA\u52A8\u5B8C\u6210\u3002 \u5982\u9700\u66F4\u591A\u4FE1\u606F\u548C\u63D0\u793A\uFF0C\u8BF7\u8BBF\u95EE\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "mailto:touchgfx-support@mjolner.com"
  }), `touchgfx-support@mjolner.com`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u5FC5\u987B\u66F4\u65B0\u81EA\u5B9A\u4E49HAL\u5B9E\u73B0\uFF0C\u4EE5\u9002\u5408\u65B0\u7684\u7ED3\u6784\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\u4FE1\u606F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E0D\u518D\u652F\u6301\u4E4B\u524D\u5BF9bmp\u683C\u5F0F\u900F\u660E\u8272\u4F7F\u7528\u7684\u201C\u795E\u5947\u201D\u900F\u660E\u8272\u3002 \u6539\u4E3A\u4F7F\u7528\u6709\u5E26alpha\u901A\u9053\u7684png\u56FE\u50CF\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-220"
  }), `\u7248\u672C2.2.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u65B0\u7279\u6027`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4EE5\u96F6\u6210\u672C\u589E\u52A0\u4E86\u5BF9\u6A2A\u5411\u663E\u793A\u5C4F\u7AD6\u5C4F\u6A21\u5F0F\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u5BF9\u5B57\u8DDD\u8C03\u6574\u7684\u652F\u6301\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u589E\u52A0\u4E86\u952E\u76D8\u793A\u4F8B\u7A0B\u5E8F\uFF08Energy Micro DK3750\u8BC4\u4F30\u677F\u7684IAR\u9879\u76EE\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4FEE\u6539\u4E86LCD\u4E2DblitCopy\u65B9\u6CD5\u7684\u63A5\u53E3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ECEHAL\u4E2D\u5220\u9664\u4E86SyncBackBuffer\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ECELCD\u4E2D\u5220\u9664\u4E86clearLCD\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4ECELCD\u4E2D\u5220\u9664\u4E86fillGradientRect\u65B9\u6CD5\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\u652F\u6301\u51FD\u6570setScrollbarsVisible(bool visible)\u3002`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-210"
  }), `\u7248\u672C2.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\u9996\u6B21\u4F5C\u4E3A\u5546\u7528\u6846\u67B6\u53D1\u5E03\u3002`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);