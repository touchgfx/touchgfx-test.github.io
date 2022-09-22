"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6566],{

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

/***/ 37771:
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
  title: "\uBCC0\uACBD \uB85C\uADF8"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/changelog",
  "id": "miscellaneous/changelog",
  "title": "\uBCC0\uACBD \uB85C\uADF8",
  "description": "Version 4.20.0",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/miscellaneous/changelog.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/changelog",
  "permalink": "/4.20/ko/docs/miscellaneous/changelog",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "changelog",
    "title": "\uBCC0\uACBD \uB85C\uADF8"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC54C\uB824\uC9C4 \uBB38\uC81C",
    "permalink": "/4.20/ko/docs/miscellaneous/known-issues"
  },
  "next": {
    "title": "TouchGFX\uC758 \uD0C0\uC0AC \uAD6C\uC131\uC694\uC18C",
    "permalink": "/4.20/ko/docs/miscellaneous/3rd-party-components-in-touchgfx"
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
  value: "\uBC84\uC804 4.18.1",
  id: "version-4181",
  level: 2
}, {
  value: "Version 4.18.0",
  id: "version-4180",
  level: 2
}, {
  value: "\uBC84\uC804 4.17.0",
  id: "version-4170",
  level: 2
}, {
  value: "\uBC84\uC804 4.16.1",
  id: "version-4161",
  level: 2
}, {
  value: "\uBC84\uC804 4.16.0",
  id: "version-4160",
  level: 2
}, {
  value: "\uBC84\uC804 4.15.0",
  id: "version-4150",
  level: 2
}, {
  value: "\uBC84\uC804 4.14.0",
  id: "version-4140",
  level: 2
}, {
  value: "\uBC84\uC804 4.13.4",
  id: "version-4134",
  level: 2
}, {
  value: "\uBC84\uC804 4.13.3",
  id: "version-4133",
  level: 2
}, {
  value: "\uBC84\uC804 4.13.2",
  id: "version-4132",
  level: 2
}, {
  value: "\uBC84\uC804 4.13.1",
  id: "version-4131",
  level: 2
}, {
  value: "\uBC84\uC804 4.13.0",
  id: "version-4130",
  level: 2
}, {
  value: "\uBC84\uC804 4.12.3",
  id: "version-4123",
  level: 2
}, {
  value: "\uBC84\uC804 4.12.2",
  id: "version-4122",
  level: 2
}, {
  value: "\uBC84\uC804 4.12.1",
  id: "version-4121",
  level: 2
}, {
  value: "\uBC84\uC804 4.12.0",
  id: "version-4120",
  level: 2
}, {
  value: "\uBC84\uC804 4.11.0",
  id: "version-4110",
  level: 2
}, {
  value: "\uBC84\uC804 4.10.0",
  id: "version-4100",
  level: 2
}, {
  value: "\uBC84\uC804 4.9.4",
  id: "version-494",
  level: 2
}, {
  value: "\uBC84\uC804 4.9.3",
  id: "version-493",
  level: 2
}, {
  value: "\uBC84\uC804 4.9.2",
  id: "version-492",
  level: 2
}, {
  value: "\uBC84\uC804 4.9.1",
  id: "version-491",
  level: 2
}, {
  value: "\uBC84\uC804 4.9.0",
  id: "version-490",
  level: 2
}, {
  value: "\uBC84\uC804 4.8.0",
  id: "version-480",
  level: 2
}, {
  value: "\uBC84\uC804 4.7.0",
  id: "version-470",
  level: 2
}, {
  value: "\uBC84\uC804 4.6.1",
  id: "version-461",
  level: 2
}, {
  value: "\uBC84\uC804 4.6.0",
  id: "version-460",
  level: 2
}, {
  value: "\uBC84\uC804 4.5.1",
  id: "version-451",
  level: 2
}, {
  value: "\uBC84\uC804 4.5.0",
  id: "version-450",
  level: 2
}, {
  value: "\uBC84\uC804 4.4.2",
  id: "version-442",
  level: 2
}, {
  value: "\uBC84\uC804 4.4.1",
  id: "version-441",
  level: 2
}, {
  value: "\uBC84\uC804 4.4.0",
  id: "version-440",
  level: 2
}, {
  value: "\uBC84\uC804 4.3.0",
  id: "version-430",
  level: 2
}, {
  value: "\uBC84\uC804 4.2.0",
  id: "version-420",
  level: 2
}, {
  value: "\uBC84\uC804 4.1.1",
  id: "version-411",
  level: 2
}, {
  value: "\uBC84\uC804 4.1.0",
  id: "version-410",
  level: 2
}, {
  value: "\uBC84\uC804 4.0.0",
  id: "version-400",
  level: 2
}, {
  value: "\uBC84\uC804 3.1.0",
  id: "version-310",
  level: 2
}, {
  value: "\uBC84\uC804 3.0.0",
  id: "version-300",
  level: 2
}, {
  value: "\uBC84\uC804 2.2.0",
  id: "version-220",
  level: 2
}, {
  value: "\uBC84\uC804 2.1.0",
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
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `\uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C TouchGFX \uCF54\uC5B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `\uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C TouchGFX \uCF54\uC5B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }), `\uBC84\uC804 4.18.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Release date: December 7th, 2021`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB124\uD2B8\uC6CC\uD06C \uC548\uC815\uC131\uACFC \uAD00\uB828\uB41C \uAC01\uC885 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 TouchGFX Designer\uAC00 \uC5F4\uB824 \uC788\uC744 \uB54C \uC9C4\uD589\uB960 \uD45C\uC2DC\uAE30\uAC00 \uD3EC\uD568\uB41C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC774\uBBF8\uC9C0\uB97C \uCD94\uAC00\uD558\uBA74 \uCDA9\uB3CC\uC774 \uC77C\uC5B4\uB0A0 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 Add Widget \uBA54\uB274\uAC00 \uBA54\uB274\uB97C \uC5F4 \uB54C \uAC80\uC0C9 \uD14D\uC2A4\uD2B8 \uC785\uB825\uCC3D\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCD94\uC9C0 \uBABB\uD558\uB294 \uC0C1\uD0DC\uB85C \uC804\uD658\uB420 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4,`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 "Set wildcard" \uC561\uC158\uC5D0\uC11C Resource \uD14D\uC2A4\uD2B8\uB97C \uC120\uD0DD\uD560 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2021\uB144 10\uC6D4 20\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC704\uC82F: Video`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 .xml \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `.touchgfx \uD30C\uC77C\uC5D0\uC11C TextEntries \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `XRGB\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCD5C\uADFC \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBAA9\uB85D\uC5D0 \uC804\uCCB4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uACBD\uB85C\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC544\uC774\uCF58\uC5D0 \uAC01\uC885 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85D\uC2DC \uB300\uD654\uC0C1\uC790\uAC00 \uB204\uB77D\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Custom Container \uC815\uC758\uC5D0 \uCD94\uAC00\uD560 \uB54C \uBC1C\uC0DD\uD588\uB358 Gauge \uC704\uC82F \uCF54\uB4DC \uC0DD\uC131 \uC624\uB958\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD30C\uC77C\uC744 \uB2E4\uB978 \uD3B8\uC9D1\uAE30\uB85C \uC5F4\uC5C8\uC744 \uB54C \uB514\uC2A4\uD06C\uC5D0 \uC800\uC7A5\uB41C \uD30C\uC77C\uC774 \uBCC0\uACBD\uB418\uC5C8\uB2E4\uACE0 \uBCF4\uACE0\uD558\uB294 TouchGFX Designer \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Analog Clock\uC5D0\uC11C \uD06C\uAE30\uB97C \uC870\uC815\uD560 \uC218 \uC788\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uD2B8 \uAD00\uB9AC\uC790\uC758 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uC120\uD0DD \uB3C4\uAD6C\uC5D0\uC11C \uD06C\uAE30\uB97C \uC62C\uBC14\uB974\uAC8C \uC870\uC815\uD558\uC9C0 \uBABB\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB4DC\uB86D\uB2E4\uC6B4 \uCEE8\uD2B8\uB864\uC774 \uAC04\uD639 \uC790\uB3D9\uC73C\uB85C \uC120\uD0DD\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uD2B8 \uAD00\uB9AC\uC790\uC758 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C9\uC0C1 \uC120\uD0DD \uB3C4\uAD6C\uC758 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC54C\uD30C \uC2AC\uB77C\uC774\uB354 \uCEE8\uD2B8\uB864\uC758 UX \uB3D9\uC791\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB9C8\uC6B0\uC2A4 \uD720\uC744 \uC0AC\uC6A9\uD55C \uD6C4 \uC218\uCE58 \uC18D\uC131 \uC704/\uC544\uB798 \uCEE8\uD2B8\uB864\uC774 \uC791\uB3D9\uD558\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC18D\uC131 \uCEE8\uD2B8\uB864 \uAC04 \uD0ED \uC774\uB3D9 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB514\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998 \uC120\uD0DD \uB3C4\uAD6C \uD56D\uBAA9\uC5D0\uC11C \uC774\uB984\uC774 \uB204\uB77D\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Selected Style \uD15C\uD50C\uB9BF\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0AD\uC81C\uD558\uBA74 ScrollWheel \uC704\uC82F\uC774 \uC624\uB958 \uC0C1\uD0DC\uB85C \uBC14\uB00C\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB514\uC2A4\uD06C\uC5D0\uC11C \uCD5C\uADFC\uC5D0 \uC0AD\uC81C\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC5F4\uB824\uACE0 \uD560 \uB54C \uBC1C\uC0DD\uD558\uB294 \uCDA9\uB3CC \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Texts and Language(\uBC88\uC5ED)\uAC00 \uC774\uC81C texts.xlsx(Excel \uD615\uC2DD)\uAC00 \uC544\uB2CC texts.xml\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uBC88\uC5ED \uB0B4\uBCF4\uB0B4\uAE30/\uAC00\uC838\uC624\uAE30 \uB3C4\uAD6C\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4(touchgfx/framework/tools/textconvert/translation.rb).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC704\uC82F: VideoWidget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC81C3\uC790/libjpeg\uC5D0\uC11C Linux \uBC0F Windows\uC6A9 libjpeg \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4(\uACF5\uC2DD libjpeg\uC640 \uBE44\uAD50\uD588\uC744 \uB54C Red\uACFC Blue\uAC00 \uBC14\uB01C).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130\uAC00 \uD504\uB808\uC784 \uBC84\uD37C \uD06C\uAE30\uC640 \uB2E4\uB978 \uB514\uC2A4\uD50C\uB808\uC774 \uD06C\uAE30\uB3C4 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C touchgfx_generic_init()\uB97C \uD638\uCD9C \uD55C \uD6C4 HAL::setFrameBufferSize()\uB97C \uC0AC\uC6A9\uD574 (\uB354 \uD070) \uD504\uB808\uC784 \uBC84\uD37C \uD06C\uAE30\uB97C \uC124\uC815\uD574\uB3C4 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C1\uC704 \uB178\uB4DC\uC5D0\uC11C drawable\uC744 \uC911\uC559\uC5D0 \uBC30\uCE58\uD560 \uC218 \uC788\uB3C4\uB85D Drawable::center(), centerX(), centerY()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable\uC744 \uC0C1\uC704 \uB178\uB4DC\uC640 \uB3D9\uC77C\uD55C \uD06C\uAE30\uB85C \uC9C0\uC815\uD558\uACE0, \uC635\uC158\uC73C\uB85C \uAC00\uC7A5\uC790\uB9AC\uB97C \uB530\uB77C \uC5EC\uBC31\uAE4C\uC9C0 \uC124\uC815\uD560 \uC218 \uC788\uB3C4\uB85D Drawable::expand()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBA54\uBAA8\uB9AC \uBC84\uD37C\uC5D0 \uC0C9\uC0C1 \uD328\uD134\uC744 \uCC44\uC6B8 \uC218 \uC788\uB3C4\uB85D LCD::fillBuffer()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::getChildrenContainedArea()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `16bpp LCD\uC5D0\uC11C ARGB8888 \uC774\uBBF8\uC9C0\uB97C \uB354\uC6B1 \uBE60\uB974\uAC8C \uB4DC\uB85C\uC789\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::getCurrentScreen()\uC774 \uC774\uC81C \uACE0\uC815\uB418\uC5B4 \uC27D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freetype 2.10.4\uC5D0\uC11C 2.11.0\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4(\uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C\uC5D0\uC11C \uC0AC\uC6A9).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `nlohmann json 3.9.1\uC5D0\uC11C 3.10.2\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4(\uC774\uBBF8\uC9C0 \uBCC0\uD658 \uB3C4\uAD6C\uC5D0\uC11C \uC0AC\uC6A9).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Ruby 1.9.3\uC5D0\uC11C 3.0.2\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4(\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uC5D0\uC11C \uC0AC\uC6A9).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::doScroll()\uC774 \uC774\uC81C \uD37C\uBE14\uB9AD \uD568\uC218\uC774\uBBC0\uB85C \uC2A4\uD06C\uB864\uC758 \uC720\uD6A8\uC131\uC774 \uBCF4\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Screen\uC5D0\uC11C \uB8E8\uD2B8 Container\uC758 \uC704\uCE58\uC640 \uD06C\uAE30\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBAA8\uB4E0 Bitmap Painters\uC5D0\uC11C \uBE44\uD2B8\uB9F5 \uC624\uD504\uC14B\uC744 \uC124\uC815\uD558\uACE0, \uBE44\uD2B8\uB9F5 \uD0C0\uC77C\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uBA54\uBAA8\uB9AC\uB97C \uC544\uB07C\uB294 \uB370 \uC720\uC6A9\uD568).`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 TextArea \uC790\uB3D9 \uC904\uBC14\uAFC8(WideTextAction) \uAE30\uB2A5\uC774 \uB4E4\uC5EC\uC4F0\uAE30\uB97C \uACE0\uB824\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 ImageConvert\uAC00 \uB2E4\uB978 \uB4DC\uB77C\uC774\uBE0C\uC5D0 \uC4F0\uB294 \uAE30\uB2A5\uC774\uB098 \uC804\uCCB4 \uACBD\uB85C\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextProvider::initialize() with ... parameter could generate unexpected results.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC0DD\uC131\uB41C \uD30C\uC77C\uC5D0\uC11C \uBAA8\uB4E0 extern \uC120\uC5B8\uC774 \uC2E4\uC81C \uC120\uC5B8\uACFC \uC77C\uCE58\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uBC29\uD5A5\uC744 \uBCC0\uACBD\uD560 \uACBD\uC6B0 FRAME_BUFFER_WIDTH\uC640 FRAME_BUFFER_HEIGHT\uC5D0 \uBB38\uC81C\uB97C \uC77C\uC73C\uD0AC \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 ProgressIndicator\uC640 Gauges\uB97C \uD0C0\uC774\uBA38\uAC00 \uC788\uB294 \uBBF9\uC2A4\uC778\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uD53D\uC140 \uB370\uC774\uD130 \uBC84\uD37C\uAC00 \uC124\uC815\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC73C\uBA74 PixelDataWidget::getSolidRect()\uAC00 \uBE48 Rect\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PixelDataWidget::getPixelData()\uC640 PixelDataWidget::getBitmapFormat()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB9C8\uC6B0\uC2A4 \uBC0F \uD0A4\uBCF4\uB4DC \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C \uC2DC\uBBAC\uB808\uC774\uD130 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC751\uB2F5\uC131\uC774 \uD5A5\uC0C1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C ScrollableContainer::moveChildrenRelative()\uAC00 getScrolledX() \uAC12\uACFC getScrolledY() \uAC12\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uC9C0\uB9CC \uC2A4\uD06C\uB864\uBC14\uB294 \uC5C5\uB370\uC774\uD2B8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 moveChildrenRelative()\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uC911\uB2E8\uB420 \uC608\uC815\uC774\uBBC0\uB85C doScroll()\uC744 \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\uC5D0\uC11C \uC798\uBABB\uB41C \uC0C1\uB300 \uC88C\uD45C \uC0AC\uC6A9\uC774 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EasingEquations::elasticEaseIn(), EasingEquations::elasticEaseOut() \uBC0F EasingEquations::elasticEaseInOut() \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC77C\uBD80 8bpp \uD398\uC778\uD130\uAC00 \uC798\uBABB\uB41C \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD588\uACE0, \uAC04\uD639 32bpp \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C L8_RGB888\uC774 \uC798\uBABB \uC0AC\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 LCD16bpp::blitCopy()\uAC00 RGB888\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C LCD16bpp::fillRect()\uC640 LCD16bpp::drawGlyph()\uAC00 \uAE30\uBCF8 16\uBE44\uD2B8 \uC0C9\uC0C1\uC774 \uC544\uB2CC 24\uBE44\uD2B8 \uC0C9\uC0C1\uC744 DMA\uB85C \uC804\uB2EC\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C TouchGFX \uCF54\uC5B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\uAC00 \uC54C\uD30C \uCC44\uB110\uC774 \uC0AD\uC81C\uB41C RGB565\uB97C \uACE7 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. ImageConvert\uC5D0\uC11C ARGB8888 \uB4F1\uC73C\uB85C \uBCC0\uD658\uD560 \uC218 \uC788\uB3C4\uB85D \uC9C0\uC6D0 \uB0B4\uC6A9\uC744 \uC54C\uB9B4 \uC608\uC815\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Linux\uC6A9 SDL2\uB294 TouchGFX\uC5D0 \uB354\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD328\uD0A4\uC9C0 libsdl2-dev\uC640 libsdl2-image-dev\uB97C Linux \uD658\uACBD\uC5D0 \uC124\uCE58\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper::invalidateBoundingRect() is deprecated. Use invalidateContent().`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4170"
  }), `\uBC84\uC804 4.17.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2021\uB144 6\uC6D4 30\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\uC758 UI\uAC00 \uC644\uC804\uD788 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4. \uC9C1\uAD00\uC801\uC774\uACE0 \uC0AC\uC6A9\uD558\uAE30 \uC26C\uC6B4 \uB300\uD654\uC2DD \uAD6C\uC870\uB97C \uBC14\uD0D5\uC73C\uB85C \uAE30\uC874\uC758 \uAE30\uB2A5\uC744 \uADF8\uB300\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0 \uB2E4\uC591\uD55C \uC0C9\uC0C1 \uD14C\uB9C8 \uB4F1 \uC5EC\uB7EC \uAC00\uC9C0 \uAE30\uB2A5\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `setAngles(), setXAngle(), setYAngle() \uBC0F setZAngle() \uD568\uC218\uAC00 TextureMapper\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uD568\uC218\uB4E4\uC740 \uBB34\uD6A8\uD654\uB97C \uC2E4\uD589\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uD574\uB2F9\uD558\uB294 \uC5C5\uB370\uC774\uD2B8 \uD568\uC218\uC640 \uBE44\uAD50\uD588\uC744 \uB54C \uC57D\uAC04 \uB354 \uBE60\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uD655\uB300/\uCD95\uC18C\uB97C \uC124\uC815\uD558\uACE0 \uCD5C\uB300\uD55C \uC801\uAC8C \uBB34\uD6A8\uD654\uD558\uB294 TextureMapper::updateScale()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. AnimationTextureMapper\uB294 \uC774\uC81C \uC774 \uD568\uC218\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C F1\uC744 \uB204\uB974\uBA74 \uD53D\uC140\uC758 RGB \uC0C9\uC0C1 \uAC12(16\uC9C4\uC218)\uACFC X,Y \uC88C\uD45C\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB808\uC784\uBC84\uD37C\uAC00 \uC7A0\uAE08 \uC774\uD6C4 \uB2E4\uC2DC \uC7A0\uAE08 \uD574\uC81C\uB418\uC9C0 \uC54A\uC73C\uBA74 \uC2DC\uBBAC\uB808\uC774\uD130\uAC00 \uC5B4\uC124\uC158\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer::setPageIndicatorCenteredX()\uAC00 \uD604\uC7AC \uD398\uC774\uC9C0 \uD45C\uC2DC\uAE30\uC758 y \uC88C\uD45C\uC5D0\uC11C \uD398\uC774\uC9C0 \uD45C\uC2DC\uAE30\uC758 \uC704\uCE58\uB97C \uC911\uC2EC\uC73C\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD604\uC7AC \uD65C\uC131\uD654\uB41C \uB514\uC2A4\uD50C\uB808\uC774(\uADF8\uB808\uC774 \uBC0F \uD751\uBC31 \uB514\uC2A4\uD50C\uB808\uC774 \uD3EC\uD568)\uC758 \uC0C9 \uC2EC\uB3C4\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uD56D\uC0C1 \uBE68\uAC04\uC0C9 8\uBE44\uD2B8, \uB179\uC0C9 8\uBE44\uD2B8, \uD30C\uB780\uC0C9 8\uBE44\uD2B8\uB97C \uC800\uC7A5\uD558\uB3C4\uB85D \uC0C9\uC0C1 \uC720\uD615 \uAD6C\uD604\uCCB4\uAC00 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC77C\uBD80 \uC0C9\uC0C1 \uD568\uC218\uAC00 \uC0AD\uC81C\uB418\uAC70\uB098 \uC774\uB984\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC9C0\uC6D0 \uC885\uB8CC \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Screen::insert(), Screen::invalidate() \uBC0F Screen:invalidateRect()\uAC00 \uCD94\uAC00\uB418\uC5B4 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uC608\uB97C \uB4E4\uC5B4 "container.invalidate()\u201D \uB300\uC2E0\uC5D0 "invalidate()\u201D\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C CacheableContainer\uC5D0\uC11C setAlpha\uC640 getAlpha\uB97C \uC9C0\uC6D0\uD558\uC5EC \uD398\uC774\uB4DC \uD6A8\uACFC\uB97C \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16bpp\uC640 LCD16bppSerialFlash\uAC00 RGB888 \uC774\uBBF8\uC9C0\uC758 blit \uBCF5\uC0AC\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Extracted DebugPrinter implementations from LCD drivers to separate files.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD314\uB808\uD2B8\uC758 \uC0C9\uC0C1 \uD56D\uBAA9\uC774 256\uAC1C \uBBF8\uB9CC\uC778(\uACF5\uAC04 \uC808\uC57D\uC744 \uC704\uD574) \uB3D9\uC801 L8 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uB294 Bitmap::dynamicBitmapCreateL8()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uC874(\uC815\uC801 \uB610\uB294 \uB3D9\uC801) \uBE44\uD2B8\uB9F5\uC758 \uC0AC\uBCF8\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uB294 Bitmap::dynamicBitmapCreateCopy()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E8, RGB565 \uC54C\uD30C \uCC44\uB110\uC740 \uBCF5\uC0AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uC804\uCCB4 \uB610\uB294 \uC77C\uBD80\uB97C \uC9C0\uC815\uB41C \uC0C9\uC0C1\uC73C\uB85C \uCC44\uC6B8 \uC218 \uC788\uB294 Bitmap::dynamicBitmapFill()\uACFC Bitmap::dynamicBitmapFillRect()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Screen::getScreenWidth()\uC640 Screen::getScreenHeight()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C\uB294 HAL::DISPLAY_WIDTH\uC640 HAL::DISPLAY_HEIGHT \uB300\uC2E0\uC5D0 \uCD94\uAC00\uB41C \uB450 \uD568\uC218\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freetype 2.10.2\uC5D0\uC11C 2.10.4\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4(\uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C\uC5D0\uC11C \uC0AC\uC6A9).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `OSWrappers::taskYield() \uD568\uC218\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::initialize()\uAC00 \uAC00\uC0C1\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uC54C\uD30C \uCC44\uB110\uC774 \uC5C6\uB294 32\uBE44\uD2B8 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uB4DC\uB85C\uC789\uD560 \uC218 \uC788\uB294 LCD32bpp_XRGB8888 \uB514\uC2A4\uD50C\uB808\uC774 \uB4DC\uB77C\uC774\uBC84\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BlitOp L8\uC774 \uCD94\uAC00\uB418\uC5B4, \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uACBD\uC6B0 DMA\uB97C \uC0AC\uC6A9\uD574 L8 \uC774\uBBF8\uC9C0\uB97C \uADF8\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL2\uAC00 \uC774\uC81C SDL_WINDOWEVENT_EXPOSED\uC5D0 \uBC18\uC751\uD558\uC5EC \uCC3D\uC744 \uB2E4\uC2DC \uB4DC\uB85C\uC789\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HSV\uC5D0\uC11C HSL\uB85C \uC0C9\uC0C1\uC774 \uBCC0\uD658\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DragAction\uC744 \uC815\uC758\uD558\uC9C0 \uC54A\uC558\uC744 \uB54C Graph\uC5D0\uC11C \uCDA9\uB3CC\uC774 \uC77C\uC5B4\uB098\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uBE44\uD2B8\uB9F5\uC774 \uB4DC\uB85C\uC5B4\uBE14\uBCF4\uB2E4 \uC791\uC544\uB3C4 HAL::drawDrawableInDynamicBitmap()\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD3F4\uB354 \uACBD\uB85C\uC5D0 "Wundersch\xF6n_Projekt", "L\xE6kkert_Projekt\u201D \uAC19\uC740 \uAD6D\uC81C \uBB38\uC790\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uB3C4 \uD574\uB2F9 \uD3F4\uB354\uC5D0 TouchGFX \uD504\uB85C\uC81D\uD2B8\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer \uD398\uC774\uC9C0 \uD45C\uC2DC\uAE30. \uC774\uC804\uC5D0\uB294 \uD398\uC774\uC9C0\uB97C \uCD94\uAC00\uD558\uAC70\uB098 \uC0AD\uC81C\uD574\uB3C4 \uC120\uD0DD\uD55C \uD398\uC774\uC9C0\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Graph VerticalFrontline\uC5D0\uC11C \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Graph::Line\uC5D0\uC11C \uB4DC\uBB3C\uC9C0\uB9CC \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::setRenderingVariant\uC758 \uC774\uB984\uC774 HAL::setRenderingMethod\uB85C \uBC14\uB00C\uC5B4 \uC774\uB984\uC774 \uCDA9\uB3CC\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC774 \uCE94\uBC84\uC2A4 \uC678\uBD80 \uC601\uC5ED\uC744 \uBB34\uD6A8\uD654\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB0B4\uBD80 TouchGFX #include's\uAC00 \uC18C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uB9D0\uC740 `, `<`, `touchgfx/hal/HAL.hpp`, `>`, `\uB97C \uBE44\uB86F\uD55C \uAE30\uD0C0 \uD30C\uC77C\uC744 \uCD94\uAC00\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC774\uC804\uC5D0\uB294 Color.hpp\uC5D0\uC11C \uC2E4\uC218\uB85C \uC774\uB7EC\uD55C \uD30C\uC77C\uB4E4\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD2bpp\uC5D0 \uB300\uD55C \uC54C\uD30C \uBE14\uB80C\uB529 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `24/32bpp \uBE44\uD2B8\uB9F5\uACFC \uD14D\uC2A4\uD2B8\uC5D0\uC11C LCD16bpp\uC5D0 \uB300\uD55C \uC54C\uD30C \uBE14\uB80C\uB529\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C TouchGFX \uCF54\uC5B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC18D\uB3C4 \uB54C\uBB38\uC5D0 \uC54C\uD30C\uAC00 \uBAA8\uB4E0 \uCE94\uBC84\uC2A4 \uD398\uC778\uD130\uC5D0\uC11C \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB300\uC2E0\uC5D0 \uCE94\uBC84\uC2A4 \uC704\uC82F(\uC6D0, \uB77C\uC778 \uB4F1)\uC5D0\uC11C \uC54C\uD30C\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB9E4\uAC1C\uBCC0\uC218\uAC00 4\uAC1C\uC778 Color::getHSVFromHSL\uACFC Color::getHSLFromHSV\uC758 \uC9C0\uC6D0\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB9E4\uAC1C\uBCC0\uC218\uAC00 6\uAC1C\uC778 \uC0C8 \uBC84\uC804\uC744 \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `getColorFrom24BitRGB, getColorFromRGB, getRedColor, getRedFromColor, gerGreenColor, getGreenFromColor, getBlueColor, getBlueFromColor \uD568\uC218\uAC00 LCD \uD074\uB798\uC2A4\uC5D0\uC11C \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C\uB294 \uC0C9\uC0C1\uC774 \uB514\uC2A4\uD50C\uB808\uC774 \uC720\uD615\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uB3D9\uC77C\uD55C \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uB418\uBBC0\uB85C Color \uD074\uB798\uC2A4 \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uB984\uC774 \uBC14\uB010 \uD568\uC218:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitRGB()\uAC00 Color::getColorFromRGB()\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSV()\uAC00 Color::getColorFromHSV()\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getColorFrom24BitHSL()\uC774 Color::getColorFromHSL()\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSV()\uAC00 Color::getRGBFromSHV()\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSVFrom24BitRGB()\uAC00 Color::getHSVFromRGB()\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRGBFrom24BitHSL()\uC774 Color::getRGBFromHSL()\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getHSLFrom24BitRGB()\uAC00 Color::getHSLFromRGB()\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getRedColor()\uAC00 Color::getRed()\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getGreenColor()\uAC00 Color::getGreen()\uC73C\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Color::getBlueColor()\uAC00 Color::getBlue()\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ZoomAnimationImage::setDimension\uC774 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. setWidthHeight()\uB97C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `int16_t& \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uD3EC\uD568\uB41C AbstractProgressIndicator::getRange\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Image::getBitmapId()\uC5D0 @deprecated\uAC00 \uB354\uB294 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Application::draw()\uC5D0 @deprecated\uAC00 \uB354\uB294 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4161"
  }), `\uBC84\uC804 4.16.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2021\uB144 2\uC6D4 8\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ListLayout \uC704\uC82F\uC5D0\uC11C Direction\uC744 East \uC774\uC678\uC758 \uAC12\uC73C\uB85C \uC124\uC815\uD558\uC9C0 \uBABB\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2AC\uB77C\uC774\uB354 \uC704\uC82F \uBC29\uD5A5 \uC120\uD0DD \uB3C4\uAD6C\uC5D0\uC11C \uC798\uBABB\uB41C \uD234\uD301 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `NemaP LCD \uC0AC\uC6A9 \uC2DC \uCF54\uB4DC \uC0DD\uC131 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC55E\uC73C\uB85C \uBCF4\uB0B4\uAE30 \uC544\uC774\uCF58\uACFC \uB4A4\uB85C \uBCF4\uB0B4\uAE30 \uC544\uC774\uCF58\uC774 \uB3D9\uC77C\uD55C \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAC8C\uC774\uC9C0 \uC704\uC82F\uC5D0\uC11C \uB3C4\uC6C0\uB9D0 \uD14D\uC2A4\uD2B8\uAC00 \uB204\uB77D\uB41C \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `NeoChrom\uC744 \uC0AC\uC6A9\uD574 \uC131\uB2A5\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uB294 LCD::drawQuad \uBA54\uC18C\uB4DC\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uCC98 \uB9E4\uD37C \uC704\uC82F\uACFC \uC2A4\uCF00\uC77C\uB7EC\uBE14 \uC774\uBBF8\uC9C0 \uC704\uC82F\uC5D0\uC11C LCD::drawQuad\uB97C \uC0AC\uC6A9\uD558 \uC218 \uC788\uB3C4\uB85D \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Graph\uC5D0\uC11C dragAction \uBCC0\uC218\uAC00 \uCD08\uAE30\uD654\uB418\uC9C0 \uC54A\uC544 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uCF30\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC138\uB85C \uBAA8\uB4DC \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uAC00\uB85C \uBAA8\uB4DC \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC0AC\uC6A9\uD588\uC744 \uB300 BlockTransition\uC774 \uC2E4\uD589\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PartialFrameBufferManager::tryTransmitBlock\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uC5B4\uC124\uC158 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4160"
  }), `\uBC84\uC804 4.16.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2020\uB144 12\uC6D4 15\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC704\uC82F: \uAC8C\uC774\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uD2B8\uB9AC\uAC70\uB85C "When Screen Transition Begins"\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"When Screen Entered" \uD2B8\uB9AC\uAC70\uC758 \uC774\uB984\uC774 "When Screen Transition Ends"\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 "Set Language" \uC561\uC158\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC774\uBBF8\uC9C0 \uC120\uD0DD \uB3C4\uAD6C\uB97C \uD1B5\uD574 \uC704\uC82F\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uD55C \uAC1C\uB97C \uCD94\uAC00\uD558\uBA74 \uD574\uB2F9 \uC774\uBBF8\uC9C0\uAC00 \uC120\uD0DD\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'Help-`, `>`, `Keyboard Shortcuts'\uC5D0 \uB2E8\uCD95\uD0A4 \uC124\uBA85\uC11C \uB9C1\uD06C\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'Execute C++ code' \uC561\uC158\uC5D0 \uC720\uC6A9\uD55C \uCF54\uB4DC \uD3B8\uC9D1\uAE30\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'go to screen' \uC561\uC158\uC5D0 \uB300\uD55C \uBE14\uB85D \uC804\uD658\uC774 \uC0C8\uB86D\uAC8C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'Add Widget' \uBA54\uB274\uC758 \uD3B8\uC758\uC131/\uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCDNemaP\uC5D0 \uB300\uD55C \uC608\uBE44 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `'#include `, `<`, `string.h`, `>`, `'\uC744 \uCD94\uAC00\uD574\uB3C4 \uC0DD\uC131\uB41C mainBase.cpp\uB97C Unix\uC5D0\uC11C \uCEF4\uD30C\uC77C\uD558\uC9C0 \uBABB\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD30C\uC77C \uC774\uB984\uC5D0 \uBC11\uC904\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC744 \uB54C \uC774\uBBF8\uC9C0 \uC624\uB958\uB97C \uBCF4\uACE0\uD558\uB294 \uC774\uBBF8\uC9C0 \uD30C\uC77C \uAC80\uC99D \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uB984\uC5D0 \uACF5\uBC31\uC774 \uC788\uC5B4\uB3C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC0DD\uC131\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed Dynamic Graph callback handlers being generated twice in Custom Containers.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB3D9\uC801 \uADF8\uB798\uD504\uAC00 \uC77C\uBD80 \uAC00\uC7A5\uC790\uB9AC\uC5D0\uC11C TouchGFX Designer\uC640 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uD0A4\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Single Use \uD14D\uC2A4\uD2B8\uC640 Resource \uD14D\uC2A4\uD2B8 \uC0AC\uC774\uC5D0\uC11C \uC804\uD658\uD560 \uB54C Dynamic Graph\uC758 \uB77C\uBCA8\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Dynamic Graph\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD560 \uB54C Dynamic Graph\uC758 \uB77C\uBCA8 \uC704\uCE58\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC131\uB2A5 \uAC1C\uC120\uC744 \uC704\uD574 \uBB34\uD6A8\uD654 \uC54C\uACE0\uB9AC\uC998\uC774 \uC0C8\uB86D\uAC8C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uCEE8\uD14C\uC774\uB108\uC778 \uAC8C\uC774\uC9C0\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BoxWithBorder\uB294 \uC774\uC81C \uBC15\uC2A4\uC758 \uC11C\uBE0C \uD074\uB798\uC2A4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD16 \uD568\uC218\uC640 LCD8 fillRect \uD568\uC218\uAC00 \uC774\uC81C \uC131\uB2A5 \uAC1C\uC120\uC744 \uC704\uD574 \uD55C \uBC88\uC5D0 32/16\uBE44\uD2B8\uB97C \uC791\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidget::resetMaxRenderLines()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD2shiftVal(), LCD2getPixel()\uACFC LCD2setPixel()\uC774 LCD2bpp \uD074\uB798\uC2A4\uB85C \uC774\uB3D9\uD558\uC600\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD4getPixel()\uACFC LCD4setPixel()\uC774 LCD4bpp \uD074\uB798\uC2A4\uB85C \uC774\uB3D9\uD558\uC600\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C ScrollableContainer::setScrollbarsPermanentlyVisible()\uC5D0 \uBD88\uB9B0 \uC778\uC218\uAC00 \uC0AC\uC6A9\uB418\uC5B4 \uAC00\uC2DC\uC131\uC744 \uC601\uAD6C\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C TextureMapper\uC640 ScalableImage\uB294 \uAC01\uAC01 \uC774\uBBF8\uC9C0\uC758 \uC11C\uBE0C \uD074\uB798\uC2A4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage::setEndBitmap()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AbstractClock::getCurrent12Hours\uC640 AbstractClock::getCurrentAM()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::itoa()\uC640 Unicode::utoa()\uAC00 \uAE30\uC218(radix)\uB97C \uCD5C\uB300 36\uAC1C\uAE4C\uC9C0 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnalogClock::setAlpha()\uC640 getAlpha()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C ScrollableContainer::setScrollbarsPermanentlyVisible()\uC5D0 \uBD88\uB9B0 \uC778\uC218\uAC00 \uC0AC\uC6A9\uB418\uC5B4 \uAC00\uC2DC\uC131\uC744 \uC601\uAD6C\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea::resizeHeightToCurrentTextWithRotation()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `(width,height), Drawable, Bitmap \uB610\uB294 Rect\uC5D0\uC11C \uC9C0\uC815\uD558\uC5EC \uD638\uCD9C \uD55C \uBC88\uC73C\uB85C \uAC00\uB85C\uC640 \uC138\uB85C\uB97C \uC124\uC815\uD560 \uC218 \uC788\uB294 Drawable::setWidthHeight()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E4\uB978 \uB4DC\uB85C\uC5B4\uBE14\uACFC \uB3D9\uC77C\uD55C \uC704\uCE58\uC5D0 \uB4DC\uB85C\uC5B4\uBE14\uC758 \uC0C1\uB2E8 \uC67C\uCABD \uBAA8\uD241\uC774\uB97C \uC124\uC815\uD560 \uC218 \uC788\uB294 Drawable::setXY(Drawable&)\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E4\uB978 \uB4DC\uB85C\uC5B4\uBE14\uACFC \uB3D9\uC77C\uD55C \uC704\uCE58\uC5D0 \uB4DC\uB85C\uC5B4\uBE14\uC744 \uBC30\uCE58\uD560 \uC218 \uC788\uB294 Drawable::setPosition(Drawable&)\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `(\uC0C9\uC870, \uCC44\uB3C4, \uAC12)\uACFC (\uBE68\uAC04\uC0C9, \uB179\uC0C9, \uD30C\uB780\uC0C9) \uC0AC\uC774\uC5D0\uC11C \uBCC0\uD658\uD560 \uC218 \uC788\uB294 Color::getRGBFrom24BitHSV()\uC640 Color::getHSVFrom24BitRGB()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `(\uC0C9\uC870, \uCC44\uB3C4, \uAC12)\uACFC \uC0C9\uC0C1 \uC720\uD615 \uC0AC\uC774\uC5D0\uC11C \uBCC0\uD658\uD560 \uC218 \uC788\uB294 Color::getColorFrom24BitHSV()\uC640 Color::getHSVFromColor()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAC12\uACFC \uD718\uB3C4 \uC0AC\uC774\uC5D0\uC11C \uBCC0\uD658\uD560 \uC218 \uC788\uB294 Color::getHSVFromHSL()\uACFC Color::getHSLFromHSV()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `(\uC0C9\uC870, \uCC44\uB3C4, \uD718\uB3C4)\uC640 (\uBE68\uAC04\uC0C9, \uB179\uC0C9, \uD30C\uB780\uC0C9) \uC0AC\uC774\uC5D0\uC11C \uBCC0\uD658\uD560 \uC218 \uC788\uB294 Color::getRGBFrom24BitHSL()\uC640 Color::getHSLFrom24BitRGB()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `(\uC0C9\uC870, \uCC44\uB3C4, \uD718\uB3C4)\uC640 \uC0C9\uC0C1 \uC720\uD615 \uC0AC\uC774\uC5D0\uC11C \uBCC0\uD658\uD560 \uC218 \uC788\uB294 Color::getColorFrom24BitHSL()\uACFC Color::getHSLFromColor()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PainterBW\uAC00 \uC774\uC81C \uC54C\uD30C\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C SnprintFloat(s)\uAC00 NaN("nan")\uACFC Inf("inf")\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C SnprintFloat(s)\uAC00 \uC18C\uC218\uC810 3\uC790\uB9AC\uAC00 \uC544\uB2CC 6\uC790\uB9AC\uAE4C\uC9C0 \uAE30\uBCF8\uC801\uC73C\uB85C \uC124\uC815\uB429\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C ANSI C\uC5D0\uB3C4 "If the precision is missing, 6 digits are given"\uB77C\uACE0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Circle::setPixelCenter()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAC12\uC744 \uC6D0\uD65C\uD558\uAC8C \uC804\uD658\uD560 \uC218 \uC788\uB294 updateValue(), setEasingEquation(), setValueSetAction() \uBC0F setValueUpdatedAction()\uC774 \uC9C4\uD589\uB960 \uD45C\uC2DC\uAE30\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SwipeContainer::getSelectedPage\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BlockTransition\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CacheableContainer::setSolidRect()\uC640 getCacheBitmap()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `getGraphAreaPaddingRight()\uC758 \uCCA0\uC790\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `In rare occasions the TextureMapper would draw some scanlines twice.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `steps=0\uC774\uBA74 AnimationTextureMapper, ZoomAnimationImage, MoveAnimation \uBC0F FadeAnimation\uC774 \uBAA8\uB450 \uC720\uD6A8\uD558\uACE0 \uB9C8\uC9C0\uB9C9 \uC560\uB2C8\uBA54\uC774\uC158 \uB2E8\uACC4\uC5D0\uC11C \uC885\uB8CC\uB418\uB294 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uBCF4\uACE0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0A4\uB97C \uB204\uB974\uACE0 \uB04C\uC5B4\uC640\uC11C \uC190\uC744 \uB5BC\uC5C8\uC744 \uB54C \uD0A4\uBCF4\uB4DC\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB358 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 Slider::getIndicatorMin()\uC774 \uD45C\uC2DC\uAE30 \uCD5C\uC18C\uAC12\uC774 \uC544\uB2CC \uCD5C\uB300\uAC12\uC744 \uBC18\uD658\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 ImageConvert\uAC00 BMP \uC774\uBBF8\uC9C0\uC5D0\uC11C \uD799\uC744 \uC190\uC0C1\uC2DC\uD0A4\uAC70\uB098 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uD0AC \uAC00\uB2A5\uC131\uC774 \uB9E4\uC6B0 \uB192\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uCC98 \uB9E4\uD37C\uAC00 \uC591\uC120\uD615 \uBAA8\uB4DC\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uACBD\uACC4\uB97C \uB4DC\uB85C\uC789\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC54C\uD30C\uAC00 255\uBCF4\uB2E4 \uC791\uC744 \uB54C BoxWithBorder\uC5D0\uC11C \uACBD\uACC4\uB97C \uB9E4\uC6B0 \uB113\uAC8C \uADF8\uB9AC\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ProgressIndicators\uC758 \uBC94\uC704\uC640 \uAC12\uC774 \uBAA8\uB450 'int'\uB85C \uC785\uB825\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cacheable Container\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774 \uBC29\uD5A5\uC5D0 \uB300\uD55C \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C TouchGFX \uCF54\uC5B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `4.15 \uC774\uC804\uC5D0\uC11C \uC9C0\uC6D0 \uC885\uB8CC\uB41C \uD568\uC218\uAC00 \uBAA8\uB450 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST1232TouchController\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ZoomAnimationImage::setDimension\uC774 \uC9C0\uC6D0 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. setWidthHeight\uB97C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setXY\uC640 Drawable::setPosition\uC740 \uC774\uC81C \uAC00\uC0C1 \uD568\uC218\uAC00 \uC544\uB2C8\uBA70, setX, setY, setWidth \uBC0F setHeight\uB9CC \uAC00\uC0C1 \uD568\uC218\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `int16_t& \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uD3EC\uD568\uB41C AbstractProgressIndicator::getRange \uBA54\uC18C\uB4DC`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4150"
  }), `\uBC84\uC804 4.15.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2020\uB144 10\uC6D4 5\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC704\uC82F: \uB3D9\uC801 \uADF8\uB798\uD504`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C M0 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uBAA8\uB4E0 \uD14D\uC2A4\uCC98 \uB9E4\uD37C \uAE30\uB2A5\uC774 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC640\uC774\uD504-\uC804\uD658\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Add Widget \uBA54\uB274(\uC774\uC81C \uCE94\uBC84\uC2A4 \uB3C4\uAD6C \uBAA8\uC74C\uC758 \uC0C1\uB2E8 \uC67C\uCABD\uC5D0 \uC788\uB294 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uAC70\uB098 \uD0A4\uBCF4\uB4DC\uC5D0\uC11C \u2018A\u2019\uB97C \uB204\uB974\uBA74 \uD45C\uC2DC\uB428)\uB97C \uC815\uBC00 \uAC80\uC0AC\uD558\uC5EC \uAC80\uC0C9 \uAE30\uB2A5\uACFC \uD06C\uAE30 \uC870\uC815 \uAE30\uB2A5\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uD558\uB2E8\uC5D0 \uC788\uB294 \uC0C1\uD0DC \uD45C\uC2DC\uC904\uC744 \uD074\uB9AD\uD558\uC5EC \uB85C\uADF8\uB97C \uC55E\uC73C\uB85C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC0C1\uD0DC \uD45C\uC2DC\uC904\uC774 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uBA74 \uBE68\uAC04\uC0C9\uC73C\uB85C, \uC131\uACF5\uD558\uBA74 \uB179\uC0C9\uC73C\uB85C \uBC14\uB01D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD655\uB300/\uCD95\uC18C \uAE30\uB2A5\uC758 \uC704\uCE58\uAC00 \uB3C4\uAD6C \uBAA8\uC74C\uC758 \uC0C1\uB2E8 \uC624\uB978\uCABD\uC73C\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4\uC758 \uC704\uCE58\uB97C \uBDF0\uD3EC\uD2B8 \uC911\uC559\uC73C\uB85C \uC774\uB3D9\uC2DC\uD0AC \uC218 \uC788\uB294 \uBC84\uD2BC\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD655\uB300(Ctrl + '+'), \uCD95\uC18C(Ctrl + '-') \uBC0F \uD655\uB300/\uCD95\uC18C \uB9AC\uC14B(Ctrl + 0)\uC744 \uC704\uD55C \uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC704\uC82F\uC758 \uC704\uCE58\uB97C \uC7A0\uAE00 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uCE94\uBC84\uC2A4\uC5D0\uC11C \uC120\uD0DD \uD56D\uBAA9\uC774 \uBE44\uD65C\uC131\uD654\uB418\uACE0, \uC774\uB294 \uBC30\uACBD \uC774\uBBF8\uC9C0, \uBC15\uC2A4 \uB4F1\uC5D0 \uC720\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC704\uC82F\uC744 \uBE48 \uCE94\uBC84\uC2A4\uC5D0 \uC0BD\uC785\uD558\uBA74 \uAC80\uC740\uC0C9 \uBC15\uC2A4\uAC00 \uAE30\uBCF8 \uBDF0\uC5D0 \uD56D\uC0C1 \uC0DD\uC131\uB418\uC5B4 \uD5A5\uC0C1\uB41C \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E4\uC218\uC758 \uD234\uD301\uC5D0 \uB300\uD55C \uC2DC\uAC01\uC801 \uC815\uBC00 \uAC80\uC0AC\uB97C \uC2E4\uC2DC\uD558\uC5EC \uC774\uC81C \uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4\uB3C4 \uD45C\uC2DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE00\uAF34\uC774 \uB9E4\uD551\uB41C \uB610\uB294 \uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uD615\uC2DD\uC73C\uB85C \uCD9C\uB825\uB418\uB3C4\uB85D \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uAE00\uAF34\uACFC \uBE44\uD2B8\uB9F5\uC774 \uB3D9\uC77C\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uAC00\uC838\uC624\uBA74 Designer\uAC00 \uAC04\uD639 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uCF30\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 FrontendHeapBase.hpp\uC758 \uC0DD\uC131 \uCF54\uB4DC\uC5D0 \uB3D9\uC77C\uD55C \uC804\uD658 \uD5E4\uB354 \uD30C\uC77C\uC758 \uC0AC\uBCF8\uC774 \uB2E4\uC218 \uD3EC\uD568\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uD2B8\uB9AC\uBDF0\uC5D0\uC11C \uC704\uC82F\uC744 \uC2A4\uD06C\uB864 \uB9AC\uC2A4\uD2B8 \uB610\uB294 \uC2A4\uD06C\uB864 \uD720\uB85C \uB04C\uC5B4\uB2E4 \uB193\uC744 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC704\uC82F\uC744 \uCD94\uAC00\uD558\uBA74 \uC778\uD130\uB799\uC158\uC744 \uC704\uD55C "Choose button key"\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uAE30\uBCF8 \uD328\uD0A4\uC9C0 \uBC84\uC804\uC774 \uAC04\uD639 \uC798\uBABB \uC120\uD0DD\uB418\uB294 \uACBD\uC6B0\uAC00 \uC774\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uB514\uC2A4\uD06C\uC5D0 \uD328\uD0A4\uC9C0\uAC00 \uC774\uBBF8 \uC788\uB294\uB370\uB3C4 \uD328\uD0A4\uC9C0\uAC00 \uB2E4\uC6B4\uB85C\uB4DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB300\uBD80\uBD84\uC758 \uAE00\uAF34 \uB370\uC774\uD130\uB97C \uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uAE00\uAF34 \uD615\uC2DD\uC774 \uC0C8\uB86D\uAC8C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBD80\uBD84\uC801\uC778 \uD504\uB808\uC784\uBC84\uD37C \uBE14\uB85D \uC804\uC1A1 \uC54C\uACE0\uB9AC\uC998\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `waitForVSync\uB85C \uCC28\uB2E8\uB418\uC9C0 \uC54A\uB294 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC0C8\uB85C\uC6B4 \uD504\uB85C\uD1A0\uD0C0\uC785\uC774 OSWrapper: isVSyncAvailable()\uACFC signalRenderingDone()\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::SingleBlockAllocator\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. touchgfx::ManyBlockAllocator`, `<`, `block_size, 1, bytes_per_pixel`, `>`, `\uB97C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uAE30\uB2A5\uC744 \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uB294 HAL \uAD00\uB828 \uBA54\uC18C\uB4DC\uC778 enableDMAAcceleration()\uC774 \uC0C8\uB86D\uAC8C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper::invalidateBoundingRects()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\uAC00 \uC5C5\uB370\uC774\uD2B8\uB41C nlohmann-json 3.9.1\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC0DD\uC131\uB41C \uC774\uBBF8\uC9C0\uC758 \uBAA8\uC2B5\uC740 \uB3D9\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uBBAC\uB808\uC774\uD130\uC5D0 \uB2E8\uC77C \uC2A4\uD15D\uD551\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. F9\uB97C \uB204\uB974\uBA74 \uC2E4\uD589\uC774 \uC2DC\uC791 \uBC0F \uC815\uC9C0\uB429\uB2C8\uB2E4. F10\uC744 \uB204\uB974\uBA74 tick\uC774 1\uD68C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uB2E8\uC77C \uC2A4\uD15D\uD551\uC740 HALSDL2::setSingleStepping(), HALSDL2::isSingleStepping() \uBC0F HALSDL2::singleStep()\uC744 \uD1B5\uD574\uC11C\uB3C4 \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Graph \uD074\uB798\uC2A4\uAC00 \uC0C8\uB85C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `WipeTransition\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC544\uB974\uBA54\uB2C8\uC548(\uBC0F \uC77C\uBD80 \uD0A4\uB9B4) \uBB38\uC790\uAC00 \uC6B0\uCE21\uC5D0\uC11C \uC88C\uCE21\uC73C\uB85C \uC791\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC2A4\uC640\uC774\uD504 \uD6C4 \uBE60\uB974\uAC8C \uD130\uCE58\uD588\uB2E4 \uC190\uC744 \uB5BC\uBA74 GestureEvent\uAC00 \uC6D0\uCE58 \uC54A\uAC8C \uCD94\uAC00\uB85C \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uAE00\uB9AC\uD504\uC758 \uD06C\uAE30\uAC00 \uB9E4\uC6B0 \uCEE4\uC11C \uC77C\uBD80\uBD84\uB9CC \uB2E4\uC2DC \uB4DC\uB85C\uC789\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774 \uB9B4\uB9AC\uC2A4\uC5D0\uC11C\uB294 \uCD94\uAC00\uC801\uC778 \uB2E8\uACC4\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC54C\uB824\uC9C4 \uBB38\uC81C \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4140"
  }), `\uBC84\uC804 4.14.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2020\uB144 7\uC6D4 2\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC124\uBA85\uC11C \uC6F9\uC0AC\uC774\uD2B8\uB85C \uC5F0\uACB0\uB418\uB294 \uB9C1\uD06C\uAC00 \uBAA8\uB450 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SlideMenu \uC704\uC82F\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC7A0\uC7AC\uC801 \uC624\uB958\uB97C \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 \uC571\uC5D0 \uC55E\uC11C FrontendHeap.hpp \uBAA8\uB378\uC774 \uC120\uC5B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `UI \uD15C\uD50C\uB9BF \uC120\uD0DD \uB3C4\uAD6C\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC0C9 \uC2EC\uB3C4\uB97C \uC815\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC9C0 \uBABB\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB85C\uB529 \uC804\uC5D0 .touchgfx.part \uD30C\uC77C \uBC84\uC804\uC744 \uD655\uC778\uD558\uC9C0 \uBABB\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD2B9\uC815 \uC774\uBBF8\uC9C0 \uD615\uC2DD, \uC989 L8 \uC774\uBBF8\uC9C0\uB97C \uBE44\uB86F\uD574 \uC9C0\uC6D0\uB418\uB294 8\uBE44\uD2B8 LCD\uB97C \uBAA8\uB450 \uC120\uD0DD\uD588\uC744 \uB54C \uD3EC\uD568\uB41C \uD398\uC778\uD130\uC758 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD588\uC744 \uB54C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\uC744 \uAC80\uC99D\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE8\uD14C\uC774\uB108 \uC720\uD615 \uC704\uC82F\uC744 \uC790\uCCB4 \uB0B4\uC5D0\uC11C \uD2B8\uB9AC\uBDF0\uB97C \uD1B5\uD574 \uB04C\uC5B4\uC62C \uB54C \uBC1C\uC0DD\uD558\uB294 \uC624\uB958\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::lockDMAToPorch \uAE30\uBCF8\uAC12\uC774 true\uAC00 \uC544\uB2CC false\uB85C \uC124\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Font::getDataFormatA4()\uAC00 2bpp, 1bpp, 4bpp \uAE00\uAF34\uB85C \uBAA8\uB450 \uC124\uC815\uC774 \uAC00\uB2A5\uD558\uC5EC \uC774\uC81C Font::getByteAlignRow()\uB85C \uD638\uCD9C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GestureType\uC774 \uC774\uC81C \uC77C\uAD00\uC131\uC744 \uC704\uD574 GestureEventType\uC73C\uB85C \uD638\uCD9C\uB429\uB2C8\uB2E4. GestureType\uC774 \uC9C0\uC6D0 \uC911\uB2E8\uB418\uC5B4 \uACE7 \uC81C\uAC70\uB420 \uC608\uC815\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD604\uC7AC TouchGFX \uBC84\uC804\uC5D0 \uB300\uD55C \uB9E4\uD06C\uB85C\uC640 \uD568\uAED8 Version.hpp\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\uAC00 \uD55C \uC790\uB9BF\uC218\uB85C \uC2DC\uC791\uD558\uB294 \uC774\uBBF8\uC9C0 \uD30C\uC77C\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\uAC00 "image_" \uC811\uB450\uC0AC\uB97C \uAC00\uC9C4 .cpp \uD30C\uC77C\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\uC5D0 \uB0B4\uC7A5\uB41C \uB3C4\uC6C0\uB9D0\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\uAC00 application.config \uD15C\uD50C\uB9BF \uD30C\uC77C\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC5EC\uBC31\uC744 \uBB34\uC2DC\uD560 \uBFD0 \uACF5\uAC04\uB9CC \uBB34\uC2DC\uD558\uC9C0 \uC54A\uB294 Unicode::strncmp_ignore_whitespace\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FontConvert\uAC00 \uC5C5\uB370\uC774\uD2B8\uB41C freetype 2.10.2\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uBB38\uC790\uAC00 \uB354 \uBCF4\uAE30 \uC88B\uAC8C \uC815\uB82C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\uAC00 \uC5C5\uB370\uC774\uD2B8\uB41C libpng 1.6.37\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC0DD\uC131\uB41C \uC774\uBBF8\uC9C0\uC758 \uBAA8\uC2B5\uC740 \uB3D9\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `setDurationSpeedup, getDurationSpeedup, setDurationSlowdown \uBC0F getDurationSlowdown\uC774 ScrollableContainer\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uC2A4\uC640\uC774\uD504 \uC81C\uC2A4\uCC98\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC560\uB2C8\uBA54\uC774\uC158 \uB2E8\uACC4 \uC218\uB97C \uBCF4\uB2E4 \uD6A8\uACFC\uC801\uC73C\uB85C \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SlideMenu \uC704\uC82F\uC774 \uD655\uC7A5\uB418\uC5B4 \uBC84\uD2BC\uC774 \uD544\uC694 \uC5C6\uC5B4\uC9C8 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C9\uC0C1 \uC720\uD615 \uBCC0\uC218\uB97C \uC22B\uC790\uB85C \uC0AC\uC6A9\uD558\uC5EC uint16_t\uAC00 \uC544\uB2CC uint32_t\uB85C \uC790\uB3D9 \uBCC0\uD658\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil \uD504\uB85C\uC81D\uD2B8\uC5D0 ARMCLANG-6.x \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M33\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 BoxWithBorder\uAC00 \uC0DD\uC131\uC790\uC5D0\uC11C borderColor\uC640 borderSize\uB97C \uC124\uC815\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::snprintf()\uC5D0\uC11C \uC218\uC815\uB41C \uBA87 \uAC00\uC9C0 \uBC84\uADF8: \uD615\uC2DD \uBB38\uC790\uC5F4\uC5D0 \uC801\uC6A9\uB418\uB294 64\uC790 \uC81C\uD55C\uC774 \uC5C6\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. %o, %x \uBC0F %X\uC5D0\uC11C \uBD80\uD638\uB97C \uBB38\uC790\uC5D0 \uAC15\uC81C\uB85C \uCD94\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. %05c\uC5D0 \uC811\uB450\uC0AC 0\uC744 \uBD99\uC77C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uAC12\uC774 0\uC778 %c\uB97C \uC815\uD655\uD558\uAC8C \uCC98\uB9AC\uD569\uB2C8\uB2E4. %s\uC5D0 \uBD99\uC740 \uBD80\uD638(%+s, %0s)\uB97C \uC62C\uBC14\uB974\uAC8C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD558\uBA74 ScrollListWithCenterSelect\uAC00 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uD0A4\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 ScrollList\uC5D0 snapping\uC774 \uC124\uC815\uB418\uC5B4 \uC788\uC73C\uBA74 \uD074\uB9AD\uD55C \uD56D\uBAA9\uC744 \uC815\uD655\uD558\uAC8C \uBCF4\uACE0\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 ScrollList\uC5D0 snapping\uACFC non-circular\uAC00 \uC124\uC815\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC73C\uBA74 \uD56D\uBAA9\uC744 \uC798\uBABB \uBCF4\uACE0\uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD56D\uBAA9\uC744 \uD074\uB9AD\uD558\uBA74 ScrollList\uAC00 \uB0B4\uBD80 \uC5EC\uBC31\uC744 \uAC10\uC548\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C CWR \uD398\uC778\uD130\uC5D0 setColor(color,alpha)\uAC00 \uC124\uC815\uB418\uC5B4 \uC788\uC5B4, \uC0C9\uC0C1\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC54C\uD30C\uB97C \uC124\uC815\uD558\uB824\uBA74 setAlpha(alpha)\uB97C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uCE90\uC2F1\uB41C \uBE44\uD2B8\uB9F5\uC774 \uD640\uC218\uC778 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uACFC 32\uBE44\uD2B8\uB85C \uC815\uB82C\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LED.hpp\uC5D0 lpc_types.h\uAC00 \uB354\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C TouchGFX \uCF54\uC5B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C \uD568\uC218\uB294 \uC774\uC81C deprecated\uB77C\uACE0 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCEF4\uD30C\uC77C\uB7EC\uAC00 \uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C \uD568\uC218\uC5D0 \uB300\uD574 \uACBD\uACE0 \uBA54\uC2DC\uC9C0\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uC6D0 \uC885\uB8CC\uB41C \uD568\uC218\uB294 \uC55E\uC73C\uB85C \uC81C\uAC70\uB420 \uC608\uC815\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::EMPTY\uC5D0 \uB300\uD55C \uC815\uC758\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PI\uC5D0 \uB300\uD55C \uC815\uC758\uAC00 Math3D.hpp\uC5D0\uC11C Types.hpp\uB85C \uC774\uB3D9\uD558\uC600\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EasingEquation.hpp\uC5D0 \uC815\uC758\uB41C \u2018pi\u2019\uAC00 PI\uB85C \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\uAC00 -f, -o \uBC0F -header\uB97C \uB354\uB294 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Image::hasTransparentPixels\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774 \uB9B4\uB9AC\uC2A4\uC5D0\uC11C\uB294 \uCD94\uAC00\uC801\uC778 \uB2E8\uACC4\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC54C\uB824\uC9C4 \uBB38\uC81C \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4134"
  }), `\uBC84\uC804 4.13.4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2020\uB144 7\uC6D4 27\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC544\uB974\uBA54\uB2C8\uC548(\uBC0F \uC77C\uBD80 \uD0A4\uB9B4) \uBB38\uC790\uAC00 \uC6B0\uCE21\uC5D0\uC11C \uC88C\uCE21\uC73C\uB85C \uC791\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4133"
  }), `\uBC84\uC804 4.13.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2020\uB144 5\uC6D4 29\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC544\uB78D\uC5B4, \uD78C\uB514\uC5B4, \uD0DC\uAD6D\uC5B4 \uBC0F \uAE30\uD0C0 \uBCF5\uD569 \uC5B8\uC5B4\uC5D0\uC11C \uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC5B8\uC5B4\uC5D0 \uB530\uB77C \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 -20~-33% \uBC94\uC704\uB85C \uC904\uC5B4\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollList\uC640 ScrollWheel\uC774 \uAC04\uD639 \uC798\uBABB\uB41C \uBC29\uD5A5\uC73C\uB85C \uC2A4\uD06C\uB864\uB418\uAC70\uB098 \uB108\uBB34 \uBA40\uB9AC \uC2A4\uD06C\uB864\uB418\uB294 \uD604\uC0C1\uC774 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4132"
  }), `\uBC84\uC804 4.13.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2020\uB144 4\uC6D4 28\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Hamza\uC5D0 \uC5F0\uACB0\uD560 \uB54C \uBC1C\uC0DD\uD588\uB358 \uC544\uB78D\uC5B4 \uD569\uC790 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC77C\uBD80 \uACBD\uC6B0 Lam + Alef\uC5D0\uC11C \uBC1C\uC0DD\uD588\uB358 \uC544\uB78D\uC5B4 \uD569\uC790 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC544\uB78D\uC5B4 \uC545\uC13C\uD2B8\uB97C \uC785\uB825\uD560 \uB54C \uBC1C\uC0DD\uD588\uB358 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4131"
  }), `\uBC84\uC804 4.13.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2020\uB144 3\uC6D4 4\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD24\uC5D0\uC11C RGB565 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uB4DC\uB85C\uC789\uD560 \uC218 \uC788\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC77C\uBD80 \uC544\uB78D\uC5B4 \uBB38\uC790 \uC2DC\uD000\uC2A4\uAC00 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C\uC5D0 \uAE00\uAF34 \uAE00\uB9AC\uD504\uAC00 \uAC04\uD639 \uC9C0\uB098\uCE58\uAC8C \uB9CE\uC774 \uD3EC\uD568\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode U+200B(\uD3ED\uC774 0\uC778 \uACF5\uBC31)\uC5D0 \uB300\uD55C \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4130"
  }), `\uBC84\uC804 4.13.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2019\uB144 12\uC6D4 12\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `".touchgfx.part" \uD30C\uC77C\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC774 \uC9C0\uC6D0\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD55C \uC678\uBD80 \uC785\uB825(\uC608: CubeMX \uD1B5\uD569) \uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u201CConfig" \uD0ED\uC5D0 \uC788\uB294 "Framework Features" \uCE74\uD14C\uACE0\uB9AC\uB85C \uC774\uB3D9\uD558\uC5EC TextureMapper\uC5D0 \uC9C0\uC6D0\uB418\uB294 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Designer\uC5D0\uC11C Generate Assets, Post Generate, Compile Simulator, Run Simulator, Compile Target and Flash Target \uBA85\uB839\uC744 \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4\uC0C1\uC758 \uD655\uB300 \uBC0F \uCD95\uC18C/\uC2A4\uD06C\uB864\uC774 \uAC1C\uC120\uB418\uC5B4 \uC774\uC81C\uB294 \uC704\uC82F\uC744 \uCE94\uBC84\uC2A4 \uC678\uAC01\uC73C\uB85C \uB04C\uC5B4\uC624\uBA74 \uC790\uB3D9 \uC2A4\uD06C\uB864\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Code \uBC84\uD2BC\uC774 \uD604\uC7AC \uCF54\uB4DC\uC758 \uCD5C\uC2E0 \uC0C1\uD0DC \uC5EC\uBD80\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uC774\uC804 \uC0C1\uD0DC\uB77C\uBA74 \uD30C\uB780\uC0C9 \uC810\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C File, Edit \uBC0F Help \uBA54\uB274\uB97C \uAC01\uAC01 \uB2E8\uCD95\uD0A4 Alt + F, Alt + E \uBC0F Alt + H\uB85C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB3C4\uC6C0\uB9D0 \uBA54\uB274\uC5D0 TouchGFX \uC9C0\uC6D0 \uC13C\uD130\uC5D0 \uB300\uD55C \uBC14\uB85C\uAC00\uAE30 \uB9C1\uD06C\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"Config" \uD0ED\uC744 \uD1B5\uD574 \uD14D\uC2A4\uD2B8 \uAD6C\uC131\uC744 \uC218\uC815\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C1\uC138 \uB85C\uADF8\uAC00 Designer \uB0B4\uC5D0\uC11C \uD50C\uB85C\uD305 \uB610\uB294 \uB3C4\uD0B9\uC774 \uAC00\uB2A5\uD558\uBA70, \uB2E8\uCD95\uD0A4 Alt + L\uC744 \uC0AC\uC6A9\uD574 \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer \uBC84\uC804\uC774 \uCC3D\uC758 \uC81C\uBAA9 \uD45C\uC2DC\uC904\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCD5C\uADFC \uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D\uC5D0 \uD504\uB85C\uC81D\uD2B8 \uC774\uB984 \uC678\uC5D0 \uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4 \uACBD\uB85C\uAC00 \uD568\uAED8 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4\uC5D0\uC11C \uC704\uC82F\uC744 \uC62E\uAE38 \uB54C\uC758 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBBF8\uC9C0 \uAD00\uB9AC\uC790\uC5D0\uC11C \uD589\uC744 \uB80C\uB354\uB9C1\uD560 \uB54C\uC758 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F \uD2B8\uB9AC\uC5D0\uC11C \uD56D\uBAA9\uC744 \uB80C\uB354\uB9C1\uD560 \uB54C\uC758 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC9C0\uC5F0 \uC2DC\uAC04\uACFC \uBC84\uD2BC \uCF5C\uBC31 \uC0C1\uD638\uC791\uC6A9\uC5D0 \uC758\uD574 \uCF54\uB4DC\uAC00 \uC798\uBABB \uC0DD\uC131\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX CLI\uB97C \uC0AC\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uACBD\uC6B0 \uC774\uC804\uC5D0 \uC0AC\uC6A9\uB41C TouchGFX \uC560\uC14B\uC774 \uC62C\uBC14\uB974\uAC8C \uD3EC\uD568\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD06C\uB9B0\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uCE94\uBC84\uC2A4 \uBC84\uD37C\uAC00 \uACBD\uC6B0\uC5D0 \uB530\uB77C \uC62C\uBC14\uB974\uAC8C \uC5C5\uB370\uC774\uD2B8\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uC791 \uCC3D\uC5D0 \uD45C\uC2DC\uB41C \uC624\uB958 \uBA54\uC2DC\uC9C0\uAC00 \uB2E4\uC6B4\uB85C\uB4DC\uB97C \uC7AC\uC2DC\uB3C4\uD560 \uB54C \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uB294 \uC2DC\uAC01\uC801 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD638\uCD9C \uAC00\uC0C1 \uD568\uC218 \uC0C1\uD638\uC791\uC6A9\uC758 \uD568\uC218 \uC774\uB984\uC774 \uC62C\uBC14\uB974\uAC8C \uAC80\uC99D\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC9C4\uD589\uB960 \uD45C\uC2DC\uAE30\uAC00 \uACBD\uC6B0\uC5D0 \uB530\uB77C Designer \uCE94\uBC84\uC2A4\uC5D0 \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1 \uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD55C \uD6C4 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC73C\uBA74 \uD504\uB85C\uC81D\uD2B8\uB97C \uB2E4\uC2DC \uB85C\uB4DC\uD560 \uB54C \uAE30\uBCF8 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uAC00 \uC0AC\uB77C\uC9C0\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uD2B8 \uAD00\uB9AC\uC790\uAC00 \uC798\uBABB\uB41C \uC140\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCD94\uB294 \uAC83\uCC98\uB7FC \uBCF4\uC774\uB294 \uC2DC\uAC01\uC801 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F\uC758 Properties \uD0ED\uC5D0 \uC624\uB958\uAC00 \uC81C\uB300\uB85C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBC84\uD2BC \uD074\uB9AD \uD578\uB4E4\uB7EC\uB97C \uC0DD\uC131\uD560 \uB54C \uAC04\uD639 \uBE48 if/else \uBB38\uC774 \uC0B0\uCD9C\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uC791 \uCC3D\uC758 \uAC80\uC0C9 \uD544\uB4DC\uAC00 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC250\uC774\uD504 \uC704\uC82F\uC744 \uBCF5\uC0AC\uD55C \uD6C4 \uC774 \uC911 \uD558\uB098\uC5D0\uC11C \uC810\uC744 \uD3B8\uC9D1\uD560 \uACBD\uC6B0 \uBCC0\uACBD \uB0B4\uC6A9\uC774 \uB450 \uC704\uC82F\uC5D0 \uBAA8\uB450 \uC801\uC6A9\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uC120\uD0DD \uB3C4\uAD6C\uC5D0\uC11C \uAE00\uAF34\uC744 \uBCC0\uACBD\uD558\uBA74\uC11C \uB9C8\uC6B0\uC2A4 \uD720\uC744 \uC0AC\uC6A9\uD574 \uC2A4\uD06C\uB864\uD560 \uACBD\uC6B0 \uD31D\uC5C5 \uCC3D\uC774 \uB2EB\uD788\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `go to screen \uC561\uC158\uC774 \uD3EC\uD568\uB41C \uD504\uB85C\uC81D\uD2B8\uB97C \uB85C\uB4DC\uD560 \uACBD\uC6B0 \uC62C\uBC14\uB974\uAC8C \uB85C\uB4DC\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F \uD2B8\uB9AC \uBDF0\uC5D0\uC11C \uB178\uB4DC\uB97C \uD3BC\uCE58\uACE0 \uC811\uC73C\uBA74 \uB178\uB4DC\uAE4C\uC9C0 \uC120\uD0DD\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `UI\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uAC00\uC838\uC62C \uB54C \uC77C\uBD80 \uAC12\uC744 \uC798\uBABB \uAC00\uC838\uC624\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBBF8\uC9C0 \uC120\uD0DD \uB3C4\uAD6C\uC5D0\uC11C \uD3F4\uB354\uB85C \uC774\uB3D9\uD558\uBA74 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uC640\uC774\uD504 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uD398\uC774\uC9C0 \uC21C\uC11C\uAC00 \uC798\uBABB \uD45C\uC2DC\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer \uCE94\uBC84\uC2A4\uC5D0\uC11C \uD14D\uC2A4\uCC98 \uB9E4\uD37C \uB80C\uB354\uB9C1 \uC2DC \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC81C\uAC70\uB41C \uC778\uD130\uB799\uC158 \uC18C\uC2A4\uB97C \uAC80\uC99D\uD560 \uB54C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC11C\uBE0C \uD3F4\uB354\uAC00 \uC560\uC14B/\uC774\uBBF8\uC9C0 \uC544\uB798 \uC704\uCE58\uD55C \uD3F4\uB354\uC758 \uC774\uB984\uC744 \uBCC0\uACBD\uD558\uBA74 Designer\uC640 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uD0A4\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RadioButtons\uC5D0\uC11C \uC911\uBCF5 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uB294 \uC778\uD130\uB799\uC158\uC774 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD30C\uC77C \uD0D0\uC0C9\uAE30\uC5D0\uC11C \uB3D9\uC77C\uD55C \uC774\uBBF8\uC9C0\uB97C Designer\uB85C \uB450 \uBC88 \uB04C\uC5B4\uC624\uBA74 \uB3D9\uC791 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB77C\uB514\uC624 \uBC84\uD2BC \uC778\uD130\uB799\uC158\uC5D0\uC11C \uAC04\uD639 \uC911\uBCF5 \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4 \uBC84\uD37C\uB97C \uC7AC\uC815\uC758\uD558\uBA74 \uC0DD\uC131\uB41C \uCF54\uB4DC\uC5D0\uC11C \uAC1C\uD589 \uBB38\uC790\uAC00 \uB204\uB77D\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD130\uD0A4 \uC9C0\uC5ED \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD558\uBA74 Designer\uC5D0\uC11C \uC798\uBABB\uB41C \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE4\uC2A4\uD140 \uC561\uC158/\uD2B8\uB9AC\uAC70 \uD14D\uC2A4\uD2B8 \uC0C1\uC790\uC5D0 \uAE34 \uD14D\uC2A4\uD2B8\uAC00 \uC788\uC744 \uACBD\uC6B0 UI\uC5D0\uC11C \uC6D0\uCE58 \uC54A\uB294 \uC804\uD658\uC774 \uC77C\uC5B4\uB098\uB294 \uC2DC\uAC01\uC801 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB9C8\uC9C0\uB9C9 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0AD\uC81C\uD55C \uD6C4 \uC774\uC5B4\uC9C0\uB294 \uD6C4\uC18D \uB2E8\uACC4\uC5D0\uC11C Designer\uAC00 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uD0A4\uB294 \uCDA9\uB3CC \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uB97C \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC815\uC758\uB85C \uBCF5\uC0AC\uD560 \uB54C \uBCF5\uC0AC\uAC00 \uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Matching UI Templates \uD544\uD130\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC2E4\uD589\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Designer\uAC00 \uB9C8\uCE68\uD45C\uAC00 \uD3EC\uD568\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD0C0\uC77C\uC774 \uC124\uC815\uB41C \uC2AC\uB77C\uC774\uB354\uB97C \uAC00\uB85C \uBC29\uD5A5\uC5D0\uC11C \uC138\uB85C \uBC29\uD5A5\uC73C\uB85C \uBCC0\uACBD\uD560 \uB54C \uC2A4\uD0C0\uC77C\uC774 \uC62C\uBC14\uB974\uAC8C \uC124\uC815\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC758 \uAE00\uAF34\uC744 \uBCC0\uACBD\uD560 \uB54C \uC77C\uBD80 UI \uC601\uC5ED\uC5D0\uC11C \uAE00\uAF34 \uC774\uB984\uC774 \uC2DC\uAC01\uC801\uC73C\uB85C \uC815\uD655\uD558\uAC8C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\uC758 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uD615\uC2DD, \uB80C\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998, \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131, \uC774\uBBF8\uC9C0 \uB808\uC774\uC544\uC6C3 \uB4F1\uC5D0 \uB530\uB77C \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 -10~-60% \uC904\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uCC98 \uB9E4\uD37C\uAC00 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC0AC\uC6A9\uD558\uB824\uBA74 \uBC18\uB4DC\uC2DC \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC5EC\uAE30\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#texturemapper-is-disabled-by-default"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#texturemapper-is-disabled-by-default`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBAA8\uB4E0 LCD \uC720\uD615\uC5D0\uC11C \uB514\uBC84\uAE45\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D \uB2E8\uC21C \uBB38\uC790\uC5F4 \uCD9C\uB825\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB2E4\uC74C URL\uC744 \uCC38\uACE0\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://touchgfx.zendesk.com/hc/en-us/articles/205074511"
  }), `https://touchgfx.zendesk.com/hc/en-us/articles/205074511`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uAE00\uAF34 \uCE90\uC2F1\uC5D0\uC11C \uD78C\uB514\uC5B4\uB85C \uC0AC\uC6A9\uB418\uB294 GSUB \uD14C\uC774\uBE14\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC5EC\uAE30\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/development/ui-development/touchgfx-engine-features/font-cache/#caching-gsub-tables"
  }), `https://support.touchgfx.com/docs/development/ui-development/touchgfx-engine-features/font-cache/#caching-gsub-tables`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `arm gcc \uCEF4\uD30C\uC77C\uB7EC\uAC00 \uBC84\uC804 7.3.1 2018q2\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `gcc \uCEF4\uD30C\uC77C\uB7EC\uAC00 \uBC84\uC804 7.3.0\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCD5C\uC2E0 \uBC84\uC804\uC758 \uD328\uD0A4\uC9C0\uAC00 \uCD94\uAC00\uB418\uBA74\uC11C mingw \uD658\uACBD\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper: \uC30D\uC120\uD615 \uBAA8\uB4DC\uC5D0\uC11C \uAC00\uC7A5\uC790\uB9AC\uC758 \uBE14\uB80C\uB529\uC774 \uAD50\uC815 \uBC0F \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper: \uCD5C\uADFC\uC811 \uC774\uC6C3 \uBAA8\uB4DC\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uD488\uC9C8\uC774 \uB2E4\uC18C \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0 \uC544\uB78D\uC5B4 \uD14D\uC2A4\uD2B8 \u201C12:34\u201D\uC758 \uD14D\uC2A4\uD2B8 \uC21C\uC11C\uAC00 RTL \uBC29\uD5A5\uC778 "34:12"\uB85C \uB80C\uB354\uB9C1\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C TouchGFX \uCF54\uC5B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC9C0\uC6D0\uC774 \uC885\uB8CC\uB41C TRANSPARENT_COL\uC758 \uC815\uC758\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::getType()\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::blitSetTransparencyKey()\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::registerTextCache()\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL::cacheTextString()\uC774 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774 \uB9B4\uB9AC\uC2A4\uC5D0\uC11C\uB294 \uCD94\uAC00\uC801\uC778 \uB2E8\uACC4\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC54C\uB824\uC9C4 \uBB38\uC81C \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4123"
  }), `\uBC84\uC804 4.12.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2019\uB144 9\uC6D4 25\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5(## Version 4.12.0 {#version-4120} \uC774\uD6C4):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC9C4 \uAE00\uAF34: \uC774\uC9C4 \uAE00\uAF34\uC740 \uAE00\uAF34 \uC815\uBCF4\uB97C \uCEF4\uD30C\uC77C\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5F0\uACB0\uD558\uB294 \uBC29\uC2DD \uB300\uC2E0\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC9C4 \uAE00\uAF34\uC758 \uAC00\uC7A5 \uD070 \uC774\uC810\uC740 \uC6A9\uB7C9\uC774 \uB354 \uC791\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uC9C4 \uD30C\uC77C\uC744 \uAC00\uC838\uC640\uC11C \uC0AC\uC6A9\uD558\uB294 \uC7A5\uCE58\uC5D0 \uB2E4\uC591\uD55C \uAE00\uAF34 \uC138\uD2B8\uB97C \uC720\uC5F0\uD558\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uB2E4\uB294 \uC810\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE00\uAF34 \uCE90\uC2F1: \uC774\uC9C4 \uAE00\uAF34 \uCE90\uC2F1\uC774 \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC740 \uBB38\uC790\uC5F4\uC744 \uD45C\uC2DC\uD560 \uB54C \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uD544\uC694\uD55C \uBB38\uC790\uB9CC \uB85C\uB4DC\uD558\uB294 \uB370 \uC801\uD569\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC9C4 \uBC88\uC5ED: \uC774\uC9C4 \uBC88\uC5ED\uC774 \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC740 \uBC88\uC5ED\uC744 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uC54A\uACE0 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uB85C\uB4DC\uD558\uB294 \uB370 \uC801\uD569\uD569\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC5EC\uAE30\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://touchgfx.zendesk.com/hc/en-us/articles/360024979552"
  }), `https://touchgfx.zendesk.com/hc/en-us/articles/360024979552`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `16bpp \uB514\uC2A4\uD50C\uB808\uC774\uC77C \uB54C \uBE44-\uBA54\uBAA8\uB9AC \uB9E4\uD551 \uD50C\uB798\uC2DC \uC800\uC7A5\uC18C\uB97C \uC9C0\uC6D0\uD558\uC5EC \uC774\uBBF8\uC9C0\uC640 \uAE00\uAF34\uC744 \uC800\uB834\uD55C SPI \uD50C\uB798\uC2DC \uB4F1\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC544\uB78D\uC5B4 \uD569\uC790\uC778 Allah, Akbar, Mohammad, Salam, Rasoul, Alayhe, Wasallam, Rial Sign \uB4F1\uC5D0 \uB300\uD55C Unicode \uC2DC\uD000\uC2A4\uB97C \uC778\uC2DD\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 TextureMapper(\uC591\uC120\uD615)\uAC00 L8_RGB888 \uBC0F RGB888 \uBE44\uD2B8\uB9F5\uC744 24bpp \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC815\uD655\uD558\uAC8C \uB4DC\uB85C\uC789\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC640\uC77C\uB4DC\uCE74\uB4DC\uAC00 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 TextArea\uC5D0\uC11C RTL \uBC29\uD5A5\uC73C\uB85C \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uD14D\uC2A4\uD2B8\uB97C \uC124\uC815\uD558\uBA74 \uCDA9\uB3CC\uC774 \uC77C\uC5B4\uB098\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 CacheableContainer\uAC00 \uC5F0\uACB0\uB41C \uBE44\uD2B8\uB9F5\uBCF4\uB2E4 \uC791\uC73C\uBA74 \uCEE8\uD14C\uC774\uB108\uC758 \uD06C\uAE30\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `8bpp LCD\uC5D0\uC11C SnapshotWidget \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC77C\uBD80 \uC544\uB78D\uC5B4 \uD569\uC790\uC758 \uB80C\uB354\uB9C1 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC77C\uBD80 \uD78C\uB514\uC5B4 \uD569\uC790\uC758 \uB80C\uB354\uB9C1 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD2B9\uC815 GSUB \uB300\uCCB4 \uADDC\uCE59\uC744 \uC801\uC6A9\uD560 \uB54C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC9C4 \uAE00\uAF34\uC5D0 \uCD94\uAC00 \uADDC\uCE59\uC774 \uD3EC\uD568\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4122"
  }), `\uBC84\uC804 4.12.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2019\uB144 8\uC6D4 22\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea::setWideTextAction()\uC744 \uC0AC\uC6A9\uD558\uB294 WordWrapping \uC640\uC774\uB4DC \uD14D\uC2A4\uD2B8\uAC00 \uC774\uC81C \uC815\uC0C1\uC801\uC778 \uACF5\uBC31\uACFC Unicode \uBB38\uC790 0x200B(\uD3ED\uC774 0\uC778 \uACF5\uBC31)\uB97C \uBAA8\uB450 \uB798\uD551\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC9C4 \uAE00\uAF34: \uC774\uC804\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAD6C\uC131\uC5D0\uC11C "binary_fonts" \uC635\uC158\uC774 \uC9C0\uC815\uB418\uC5B4 \uC788\uC73C\uBA74 fontConverter \uB3C4\uAD6C\uAC00 \uCEE4\uB2DD \uB370\uC774\uD130\uB97C \uC774\uC9C4 \uAE00\uAF34 \uD30C\uC77C\uC5D0 \uC791\uC131\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uC774\uC9C4 \uAE00\uAF34\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD14D\uC2A4\uD2B8\uAC00 \uC798\uBABB \uD45C\uC2DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4121"
  }), `\uBC84\uC804 4.12.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2019\uB144 8\uC6D4 15\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `"Third Party Components.pdf"\uAC00 \uC5C5\uB370\uC774\uD2B8\uB41C \uAD6C\uC131\uC694\uC18C\uB97C \uBC18\uC601\uD558\uC5EC \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
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
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC9C0\uC5F0 \uC2DC\uAC04 \uC561\uC158\uACFC \uBC84\uD2BC \uD074\uB9AD \uC561\uC158\uC744 \uD568\uAED8 \uC120\uD0DD\uD558\uBA74 \uCEF4\uD30C\uC77C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4 \uC704\uC82F\uC744 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uCD94\uAC00\uD560 \uB54C \uC2A4\uD06C\uB9B0\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uCE94\uBC84\uC2A4 \uBC84\uD37C\uAC00 \uC62C\uBC14\uB974\uAC8C \uC5C5\uB370\uC774\uD2B8\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC628\uB77C\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCC3D\uC758 \uC624\uB958 \uBA54\uC2DC\uC9C0\uAC00 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC5EC\uB7EC \uC9C4\uD589\uB960 \uD45C\uC2DC\uAE30\uC5D0\uC11C \uC54C\uD30C \uAC12\uC744 \uC0AC\uC6A9\uD558\uBA74 Designer\uC758 \uCE94\uBC84\uC2A4\uC5D0 \uC798\uBABB \uB80C\uB354\uB9C1\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD588\uB2E4\uAC00 \uC800\uC7A5\uD558\uC9C0 \uC54A\uACE0 Designer\uB97C \uC885\uB8CC\uD55C \uB2E4\uC74C \uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8\uB97C \uB2E4\uC2DC \uB85C\uB4DC\uD560 \uACBD\uC6B0 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uAC00 \uC5C6\uC5B4\uC9C0\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBBF8 \uC5F4\uB824 \uC788\uB294 UI\uB97C \uB2E4\uB978 \uD504\uB85C\uC81D\uD2B8\uB85C \uAC00\uC838\uC624\uB824\uACE0 \uD560 \uB54C \uD45C\uC2DC\uB418\uB294 \uC624\uB958 \uBA54\uC2DC\uC9C0\uAC00 \uB354\uC6B1 \uC774\uD574\uD558\uAE30 \uC27D\uAC8C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD2B9\uC815 \uD658\uACBD\uC5D0\uC11C \uD14D\uC2A4\uD2B8 \uAD00\uB9AC\uC790\uC5D0 \uC2DC\uAC01\uC801\uC73C\uB85C \uB2E4\uC218\uC758 \uD3EC\uC2DC(foci)\uAC00 \uB098\uD0C0\uB098\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F\uC5D0\uC11C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC744 \uB54C \uC704\uC82F\uC758 Properties \uD0ED\uC5D0 \uBE68\uAC04\uC0C9 \uACBD\uACC4\uAC00 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Consolas \uAE00\uAF34\uC744 \uC0AC\uC6A9\uD560 \uACBD\uC6B0 \uD574\uB2F9 \uAE00\uAF34\uC744 \uC0AC\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uB2E4\uC2DC \uB85C\uB4DC\uD558\uBA74 Designer\uC758 \uCE94\uBC84\uC2A4\uC5D0 \uC798\uBABB \uB80C\uB354\uB9C1\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 Display Rotation\uC774 \uC0AC\uC6A9 \uC911\uC774\uBA74 TextureMapper \uBC84\uADF8\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CachedFont\uC5D0 \uB300\uD55C \uCEE4\uB2DD \uB370\uC774\uD130\uB294 \uBB34\uC2DC\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 CachedFont\uAC00 \uAE00\uAF34 \uCE90\uC2DC\uC5D0\uC11C \uD3F4\uBC31 \uBB38\uC790 \uC720\uBB34\uB97C \uD655\uC778\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4120"
  }), `\uBC84\uC804 4.12.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2019\uB144 6\uC6D4 7\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC911\uC694 \uC5C5\uADF8\uB808\uC774\uB4DC \uC815\uBCF4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `drawGlyph\uC758 \uACF5\uAC1C \uBC84\uC804\uC774 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB300\uC2E0\uC5D0 drawString\uC744 \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBD88\uD22C\uBA85 \uC774\uBBF8\uC9C0\uC5D0 \uBE44\uD2B8\uB9F5 \uD615\uC2DD ARGB8888\uC744 \uC0AC\uC6A9\uD574\uB3C4 565\uB85C \uB354\uB294 \uB514\uB354\uB9C1\uB418\uC9C0 \uC54A\uACE0 888 \uC0C9\uC0C1\uC744 \uC804\uBD80 \uC720\uC9C0\uD569\uB2C8\uB2E4. \uBD88\uD22C\uBA85 \uD615\uC2DD\uC774 RGB565\uC77C \uB54C ARGB8888\uC744 \uBE44\uBD88\uD22C\uBA85 \uC774\uBBF8\uC9C0\uC5D0 \uC0AC\uC6A9\uD558\uBA74 565\uB85C \uACC4\uC18D \uB514\uB354\uB9C1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BW_RLE \uD615\uC2DD\uC73C\uB85C \uC778\uD574 \uBCC0\uD658\uB41C \uC774\uBBF8\uC9C0\uC758 \uD06C\uAE30\uAC00 \uCEE4\uC9C0\uBA74 BW_RLE\uB85C \uBCC0\uD658\uB41C \uC774\uBBF8\uC9C0\uB294 BW\uB85C \uB354\uB294 \uB3CC\uC544\uAC00\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB300\uC2E0\uC5D0 \uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uADF8\uB7A8\uC5D0\uC11C \uACBD\uACE0 \uBA54\uC2DC\uC9C0\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4. Designer(\uB610\uB294 \uC0C8\uB85C\uC6B4 \uAD6C\uC131 \uD30C\uC77C)\uB97C \uC0AC\uC6A9\uD574 \uAC01 \uC774\uBBF8\uC9C0\uB9C8\uB2E4 BW \uB610\uB294 BW_RLE\uB97C \uC9C0\uC815\uD558\uC2ED\uC2DC\uC624.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uAC00 \uB2E4\uB978 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uB0B4\uC5D0\uC11C \uC911\uCCA9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uCEE4\uC2A4\uD140 \uAD6C\uC131\uC694\uC18C\uB97C \uB354 \uD070 \uCEE4\uC2A4\uD140 \uAD6C\uC131\uC694\uC18C\uC5D0 \uBB34\uC81C\uD55C\uC73C\uB85C \uAD6C\uC131\uD560 \uC218 \uC788\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB294 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC640 \uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uB300\uD55C \uC815\uC758\uB97C \uC9C0\uC6D0\uD558\uACE0 \uC2A4\uD06C\uB9B0\uC740 \uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uB300\uD55C \uC815\uC758\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uC815\uC758\uB41C \uD2B8\uB9AC\uAC70\uC640 \uC561\uC158\uC740 \uAD6C\uC131\uC694\uC18C \uC0AC\uC774\uC5D0\uC11C \uC815\uBCF4\uC758 \uD750\uB984\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. Designer \uB0B4 \uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uC774\uB7EC\uD55C \uD2B8\uB9AC\uAC70\uC640 \uC561\uC158\uC744 \uC0AC\uC6A9\uD558\uBA74 Designer\uB97C \uB5A0\uB098\uC9C0 \uC54A\uACE0\uB3C4 \uC2E4\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB3D9\uC791\uC744 \uB354 \uB9CE\uC774 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC124\uBA85\uC11C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uCEE8\uD14C\uC774\uB108\uB97C CacheableContainer\uB85C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAC1C\uBCC4 \uC774\uBBF8\uC9C0 \uAD6C\uC131(\uC774\uBBF8\uC9C0 \uD615\uC2DD, \uB514\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998, \uB808\uC774\uC544\uC6C3 \uD68C\uC804 \uB4F1)\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB294 "Images" \uD0ED\uC774 \uC0C8\uB85C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC124\uC815\uACFC \uAE30\uD0C0 \uC0C8\uB85C\uC6B4 \uC124\uC815\uC774 "Config" \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC600\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB808\uC784\uC6CC\uD06C \uB3C4\uAD6C\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD0C0\uC0AC \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC5C5\uADF8\uB808\uC774\uB4DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uD14D\uC2A4\uD2B8\uAC00 \uB354\uC6B1 \uC120\uBA85\uD558\uAC8C \uD45C\uD604\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE4\uB2DD \uD14C\uC774\uBE14\uC758 \uD06C\uAE30\uAC00 \uCEE4\uC9C0\uBA74\uC11C \uCEE4\uB2DD\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB354\uC6B1 \uBC00\uB3C4 \uB192\uC740 \uC120 \uAC04\uACA9\uC73C\uB85C \uD0DC\uAD6D\uC5B4 \uAE00\uAF34\uC758 \uB80C\uB354\uB9C1\uC774 \uAC1C\uC120\uB418\uC5C8\uC73C\uBA70, \uC77C\uBD80 \uACBD\uC6B0\uC5D0 Sara AM\uC758 \uB80C\uB354\uB9C1\uB3C4 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD78C\uB514\uC5B4(\uB370\uBC14\uB098\uAC00\uB9AC)\uC5D0 \uB300\uD55C \uC608\uBE44 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C GSUB \uD14C\uC774\uBE14\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4. nukt(Nukta Forms), akhn(Akhands), rkrf(Rakar Forms), cjct(Conjunct Forms), vatu(Vattu Variants), rphf(Reph Forms), pref(Pre-Base Forms), half(Half Forms), blwf(Below-base Forms), abvf(Above-base Forms), pstf(Post-base Forms), cfar(Conjunct Form After Ro) \uB2E4\uC74C \uD14C\uC774\uBE14\uC740 \uD604\uC7AC \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. abvs(Above-base Substitutions), blws(Below-base Substitutions), psts(Post-base Substitutions) \uB610\uD55C GSUB \uD14C\uC774\uBE14 \uC911 \uC77C\uBD80 \uC720\uD615\uC740 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 Line::updateLengthAndAngle() API\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBD80\uBD84\uC801\uC778 \uD504\uB808\uC784\uBC84\uD37C \uB80C\uB354\uB9C1 \uBC0F \uC5C5\uB370\uC774\uD2B8\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB514\uBC84\uAE45\uC744 \uC704\uD55C \uB2E8\uC21C \uBB38\uC790\uC5F4 \uCD9C\uB825\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCD08\uAE30\uD654 \uD6C4 BitmapCache\uB97C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD50C\uB798\uC2DC\uB97C \uD504\uB85C\uADF8\uB798\uBC0D\uD560 \uB54C \uC139\uC158 \uC774\uB984\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB294 \uB9E4\uD06C\uB85C\uAC00 \uC0C8\uB85C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCD5C\uC18C\uD55C\uC758 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC73C\uB85C \uC6D0\uD638 \uC2DC\uC791 \uC704\uCE58\uC640 \uC6D0\uD638 \uB05D \uC704\uCE58\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uB294 Circle::updateArc()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC5C5\uB370\uC774\uD2B8\uD560 \uB54C \uB354\uC6B1 \uB192\uC740 \uC815\uBC00\uB3C4 \uACC4\uC0B0\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D CircleProgress\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC624\uD504\uC2A4\uD06C\uB9B0 \uC704\uC82F \uB80C\uB354\uB9C1\uC744 \uC704\uD574 CacheableContainer\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `16\uBE44\uD2B8, 24\uBE44\uD2B8 \uBC0F 32\uBE44\uD2B8 \uD314\uB808\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 L8 \uADF8\uB798\uD53D \uC560\uC14B\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DMA2D\uB97C \uD1B5\uD55C L8 \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 LCD32bpp \uD504\uB808\uC784\uBC84\uD37C \uB80C\uB354\uB7EC\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CircleProgress::setStartEndAngle(), ImageProgress::setAnchorAtZero() \uBC0F TextProgress::setNumberOfDecimals()\uB97C \uD638\uCD9C\uD558\uBA74 ProgressIndicator\uAC00 \uC790\uB3D9\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uAC12\uC744 \uC124\uC815\uD558\uBA74 circleProgressIndicator\uAC00 \uB2E4\uC2DC \uB4DC\uB85C\uC789\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD06C\uB9B0 \uC804\uD658\uC774 \uC644\uB8CC\uB418\uBA74 \uC2A4\uD06C\uB9B0\uC774 \uCD94\uAC00\uB85C \uB2E4\uC2DC \uB4DC\uB85C\uC789\uB418\uB294 \uBC84\uADF8\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC804\uC5D0\uB294 \uCD94\uAC00\uB85C \uB2E4\uC2DC \uB4DC\uB85C\uC789\uD558\uB294 \uBC84\uADF8\uB85C \uC778\uD574 \uC77C\uBD80 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC131\uB2A5 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uD544\uC694\uD55C \uACBD\uC6B0 Screen::afterTransition()\uC5D0\uC11C \uC804\uCCB4 \uC2A4\uD06C\uB9B0\uC744 \uBB34\uD6A8\uD654\uD558\uB294 \uAC83\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790\uC758 \uCC45\uC784\uC785\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774 \uB9B4\uB9AC\uC2A4\uC5D0\uC11C\uB294 \uCD94\uAC00\uC801\uC778 \uB2E8\uACC4\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC54C\uB824\uC9C4 \uBB38\uC81C \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4110"
  }), `\uBC84\uC804 4.11.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2019\uB144 3\uC6D4 1\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC911\uC694 \uC5C5\uADF8\uB808\uC774\uB4DC \uC815\uBCF4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 LCD.hpp\uAC00 \uD3EC\uD568\uB418\uC5B4 HAL\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uAC00 \uAC00\uB2A5\uD558\uB354\uB77C\uB3C4 LCD.hpp\uC5D0 HAL.hpp\uAC00 \uB354\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC544\uBB34 \uC18C\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 HAL.hpp\uB97C \uBC18\uB4DC\uC2DC \uD3EC\uD568\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4. \uC0D8\uD50C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC778 Demo1\uACFC Demo2\uC758 \uC774\uC804 \uBC84\uC804\uC5D0\uC11C \uC774\uB7EC\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC5EC \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `UI \uBC84\uD2BC\uACFC \uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4(Ctrl + F, Ctrl + B)\uB97C \uD1B5\uD55C \uC704\uC82F \uC55E\uC73C\uB85C \uBCF4\uB0B4\uAE30/\uB4A4\uB85C \uBCF4\uB0B4\uAE30 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD06C\uB9B0\uACFC CustomContainerDefinitons\uC5D0 \uB300\uD55C \uBCF5\uC0AC \uBC0F \uBD99\uC5EC\uB123\uAE30 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainerDefinitions\uC5D0 \uB300\uD55C \uB80C\uB354\uB9C1 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC2A4\uD06C\uB9B0\uACFC CustomContainerDefinitions \uC0AC\uC774\uC5D0\uC11C \uC804\uD658\uD558\uBA74 \uC774\uC804\uC5D0 \uC120\uD0DD\uD588\uB358 \uC2A4\uD06C\uB9B0\uACFC CustomContainerDefinition\uC744 \uAE30\uC5B5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC0C8\uB85C\uC6B4 \uD14D\uC2A4\uD2B8\uC640 \uD14D\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD560 \uC704\uC82F\uC744 \uC0DD\uC131\uD560 \uB54C \uB9C8\uC9C0\uB9C9\uC5D0 \uC0AC\uC6A9\uD588\uB358 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uAC00 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainerInstances\uB97C \uB098\uD0C0\uB0B4\uB294 \uD2B8\uB9AC \uC544\uC774\uCF58\uC774 \uC0C8\uB85C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC5F0\uC18D \uCF54\uB4DC \uC0DD\uC131 \uBC0F \uCEF4\uD30C\uC77C\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Detailed Log \uCC3D\uC758 \uCD9C\uB825 \uB0B4\uC6A9\uC5D0 \uB300\uD55C \uAC00\uB3C5\uC131\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Widget Wildcard Characters\uAC00 Texts \uD0ED\uC5D0 \uCD94\uAC00\uB418\uC5B4, \uC77C\uBD80 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD560 \uB54C \uAE30\uBCF8 \uC640\uC77C\uB4DC\uCE74\uB4DC \uBB38\uC790\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uC81D\uD2B8 \uB85C\uB529 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAC80\uC99D \uC5D4\uC9C4\uC758 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `6\uBE44\uD2B8 \uC0C9\uC0C1 \uB514\uC2A4\uD50C\uB808\uC774(8bpp)\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RadioButtons\uC5D0 \uB300\uD574 RadioButtonGroup\uB97C \uC124\uC815\uD560 \uC218 \uC788\uB294 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB514\uC2A4\uD50C\uB808\uC774 \uD68C\uC804(\uAC00\uB85C \uBAA8\uB4DC/\uC138\uB85C \uBAA8\uB4DC)\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\uC5D0\uC11C \uAC00\uB85C \uBAA8\uB4DC/\uC138\uB85C \uBAA8\uB4DC \uC2DC\uBBAC\uB808\uC774\uD130 \uC2A4\uD0A8\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB294 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E4\uC74C \uC704\uC82F\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. AnalogClock, DigitalClock, TextureMapper, AnimatedTextureMapper & Shape`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Designer\uC5D0\uC11C \uC2DC\uBBAC\uB808\uC774\uC158\uC744 \uC2E4\uD589\uD558\uB294 \uB370 \uD544\uC694\uD55C Makefile \uD30C\uC77C\uACFC Visual Studio \uD30C\uC77C\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `6\uBE44\uD2B8 \uC0C9\uC0C1 \uB514\uC2A4\uD50C\uB808\uC774(RGBA2222, BGRA2222, ARGB2222 \uBC0F ABGR2222 \uD504\uB808\uC784\uBC84\uD37C \uD615\uC2DD)\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0DC\uAD6D\uC5B4 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC544\uB78D\uC5B4 \uD14D\uC2A4\uD2B8\uC5D0 \uB300\uD55C \uB80C\uB354\uB9C1\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC74C\uC218 \uC904 \uAC04\uACA9\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainerDefinitions\uC5D0\uC11C Ctrl + A(\uBAA8\uB450 \uC120\uD0DD)\uAC00 \uC2E4\uD589\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBAA9\uB85D\uC5D0\uC11C \uCCAB \uBC88\uC9F8 \uC2A4\uD06C\uB9B0\uC744 \uC120\uD0DD\uD55C \uD6C4 \uC704\uCE58\uAC00 \uBC14\uB010 \uC2A4\uD06C\uB9B0\uC758 \uC2E4\uD589 \uCDE8\uC18C/\uC7AC\uC2E4\uD589 \uAE30\uB85D\uC744 \uC0AD\uC81C\uD558\uBA74 \uC2A4\uD06C\uB9B0\uC758 \uC21C\uC11C\uAC00 \uBC14\uB00C\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB178\uB4DC\uB97C \uC120\uD0DD\uD55C \uD6C4 \uC2E4\uD589 \uCDE8\uC18C/\uC7AC\uC2E4\uD589 \uAE30\uB85D\uC774 \uC190\uC0C1\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\uC758 \uCCAB \uC790\uB9AC\uC5D0 \uC22B\uC790\uAC00 \uC624\uC9C0 \uBABB\uD558\uAC70\uB098, \uC774\uB984\uC5D0 "-" \uB610\uB294 "_"\uAC00 \uD3EC\uD568\uB418\uC9C0 \uBABB\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainer \uD0ED\uC5D0 \uC788\uC744 \uB54C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB85C\uB4DC\uD558\uBA74 \uCE94\uBC84\uC2A4\uC758 \uB0B4\uC6A9\uC5D0 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E4\uC218\uC758 \uC694\uC18C\uB97C \uCEE8\uD14C\uC774\uB108\uB85C \uC62E\uAE34 \uD6C4 \uC2E4\uD589 \uCDE8\uC18C\uB97C \uB204\uB974\uBA74 \uCDA9\uB3CC\uC774 \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uC81D\uD2B8\uB97C \uB85C\uB4DC\uD558\uBA74 \uAE00\uAF34 \uD30C\uC77C\uC774 \uC7A0\uAE30\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Resource \uD14D\uC2A4\uD2B8\uB97C \uC0AD\uC81C\uD574\uB3C4 \uD14D\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uAD6C\uC131\uC694\uC18C\uC5D0 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX \uD30C\uC77C\uC744 \uB354\uBE14 \uD074\uB9AD\uD558\uBA74 \uC2A4\uD50C\uB798\uC2DC \uC2A4\uD06C\uB9B0\uC774 \uBA48\uCDB0\uC11C \uC798\uBABB\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB85C\uB4DC\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ModalWindow\uC5D0\uC11C \uC798\uBABB\uB41C \uC704\uCE58 \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer, ScrollList \uBC0F ScrollWheel\uC5D0\uC11C "Move widget" \uC778\uD130\uB799\uC158 \uC9C0\uC6D0\uC774 \uB204\uB77D\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCD5C\uADFC \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBAA9\uB85D\uC758 \uC21C\uC11C\uAC00 \uBC14\uB00C\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC5F4 \uB54C \uC62C\uBC14\uB974\uAC8C \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F\uC744 \uC0BD\uC785\uD558\uBA74 \uBE44\uC5B4\uC788\uB294 \uC2E4\uD589 \uCDE8\uC18C \uD56D\uBAA9\uC774 \uC2E4\uD589 \uCDE8\uC18C/\uC7AC\uC2E4\uD589 \uAE30\uB85D\uC5D0 \uCD94\uAC00\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainerDefinitions\uC758 Properties \uCC3D\uC5D0\uC11C \uD5E4\uB354 \uD14D\uC2A4\uD2B8\uC640 \uC124\uBA85\uC774 \uB204\uB77D\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC720\uD734 CPU \uC0AC\uC6A9\uB7C9\uC774 \uC608\uC0C1\uBCF4\uB2E4 \uC99D\uAC00\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CustomContainer\uC5D0\uC11C FlexButton\uC5D0 \uB300\uD55C \uC0C1\uD638\uC791\uC6A9\uC744 \uC124\uC815\uD560 \uACBD\uC6B0 \uC798\uBABB\uB41C \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F\uC5D0 \uB300\uD55C \uBBF9\uC2A4\uC778\uC744 \uC124\uC815\uD588\uC744 \uB54C \uC2E4\uD589 \uCDE8\uC18C\uB97C \uD560 \uC218 \uC5C6\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FlexButton\uC5D0 \uC2A4\uD0C0\uC77C\uC744 \uCD94\uAC00\uD588\uC744 \uB54C \uC2E4\uD589 \uCDE8\uC18C/\uC7AC\uC2E4\uD589 \uAE30\uB2A5\uC774 \uB204\uB77D\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC778\uD130\uB799\uC158\uC5D0\uC11C \uB2E4\uC218\uC758 \uC2AC\uB77C\uC774\uB354 \uCF5C\uBC31\uC744 \uC0AC\uC6A9\uD588\uC744 \uB54C \uCD08\uAE30\uD654 \uC21C\uC11C\uAC00 \uC798\uBABB\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `4bpp\uC640 2bpp\uC77C \uB54C CWR \uD398\uC778\uD130\uC758 \uC815\uBC00\uB3C4 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `8bpp, 16bpp \uBC0F 24bpp\uC77C \uB54C \uC54C\uD30C \uBE14\uB80C\uB529 \uACF5\uC2DD\uC758 \uC815\uBC00\uB3C4 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774 \uB9B4\uB9AC\uC2A4\uC5D0\uC11C\uB294 \uCD94\uAC00\uC801\uC778 \uB2E8\uACC4\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC54C\uB824\uC9C4 \uBB38\uC81C \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-4100"
  }), `\uBC84\uC804 4.10.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2018\uB144 11\uC6D4 5\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC694\uAD6C \uC0AC\uD56D:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\uB294 \uC774\uC81C STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E4\uC74C \uC704\uC82F\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. ImageProgress, BoxProgress, TextProgress, LineProgress, CircleProgress, Line, Circle, BoxWithBorder, FlexButton, ScrollList, ScrollWheel, SwipeContainer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD06C\uB9B0\uC5D0\uC11C \uCE94\uBC84\uC2A4 \uBC84\uD37C \uC124\uC815\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD06C\uB9B0 \uC804\uD658(CoverTransition)\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC9C0\uC6D0 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC0AC\uC6A9\uC790 \uC774\uB984, Designer \uBC84\uC804, Designer \uC124\uCE58 \uACBD\uB85C, Windows \uBC84\uC804, \uD604\uC7AC \uBB38\uD654\uAD8C, \uC124\uCE58\uB41C .NET \uBC84\uC804 \uB4F1\uC758 \uC2DC\uC2A4\uD15C \uC815\uBCF4\uAC00 \uAE30\uB85D\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uD574\uC0C1\uB3C4\uAC00 \uC124\uC815\uB41C UI\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uD574\uC0C1\uB3C4 \uAC80\uC0AC\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC798\uB9B0 \uC704\uC82F\uC744 \uD45C\uC2DC\uD558\uAC70\uB098 \uC228\uAE30\uB294 \uBC84\uD2BC\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4\uC5D0\uC11C \uC704\uC82F\uC744 \uB04C\uC5B4\uC624\uAC70\uB098 \uD06C\uAE30\uB97C \uC870\uC815\uD558\uB294 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC6D0 \uBC0F AbstractShape\uAC00 \uC6D0\uD638 \uC2DC\uC791 \uC704\uCE58\uC640 \uC6D0\uD638 \uB05D \uC704\uCE58\uC5D0\uC11C \uB354\uC6B1 \uB192\uC740 \uC815\uBC00\uB3C4\uB97C \uC9C0\uC6D0\uD558\uC5EC \uC6D0\uD638\uB97C \uBCF4\uB2E4 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uB4DC\uB85C\uC789\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uB0B4\uBD80 Q5 \uAD6C\uC870\uAC00 16\uBE44\uD2B8\uAC00 \uC544\uB2CC 32\uBE44\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC12\uC758 \uBC94\uC704\uAC00 \uB113\uC5B4\uC84C\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Circle::getPrecision()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FadeAnimator::isFadeAnimationRunning(), MoveAnimator::isMoveAnimationRunning(), AnimatedImage::isAnimatedImageRunning() \uBC0F ZoomAnimationImage::isZoomAnimationImageRunning() \uD568\uC218\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC804 \uD568\uC218\uC778 isRunning()\uC740 \uC9C0\uC6D0\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ListLayout::setDirection()\uACFC getDirection()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `roo gem\uC774 1.13.1\uC5D0\uC11C 2.7.1\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SHIFT-F3\uC744 \uD22C\uB974\uBA74 \uC2A4\uD06C\uB9B0\uC774 \uD074\uB9BD\uBCF4\uB4DC\uB85C \uBCF5\uC0AC\uB429\uB2C8\uB2E4(Windows \uC804\uC6A9).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CTRL-F3\uC744 \uB204\uB974\uBA74 \uB2E4\uC74C\uC5D0 \uB098\uC624\uB294 50\uAC1C\uC758 \uC2A4\uD06C\uB9B0\uC774 \uC2A4\uD06C\uB9B0\uC0F7 \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC0DD\uC131\uB41C \uC560\uC14B\uC774 \uC801\uC808\uD558\uAC8C \uB4E4\uC5EC \uC4F0\uAE30 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer::setScrollbarsPermanentlyVisible()\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 \uD06C\uAE30\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC744 \uB54C ModalWindow \uC704\uC82F\uC758 \uD06C\uAE30\uAC00 \uC870\uC815\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD30C\uC77C\uC758 \uC228\uC740 \uC18D\uC131\uC774 hidden\uC73C\uB85C \uC124\uC815\uB418\uC5C8\uC744 \uB54C \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC774\uB984\uC5D0\uC11C \uB300\uC18C\uBB38\uC790\uB97C \uBCC0\uACBD\uD588\uC744 \uB54C \uB2E4\uC2DC \uCEF4\uD30C\uC77C\uB418\uB294 \uC624\uB958\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC628\uB77C\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC5C6\uC744 \uB54C \uC778\uD130\uB137 \uC5F0\uACB0\uC774 \uC911\uB2E8\uB418\uC5B4 Designer\uC640 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uD0A4\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uC81D\uD2B8\uB97C \uB85C\uB4DC\uD55C \uD6C4 ModalWindow \uC704\uC82F\uC758 \uC704\uCE58\uAC00 \uC798\uBABB \uC0DD\uC131\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer \uD504\uB85C\uC81D\uD2B8\uB97C \uB85C\uB4DC\uD588\uC744 \uB54C \uBD88\uD544\uC694\uD558\uAC8C \uB2E4\uC2DC \uCEF4\uD30C\uC77C\uD574\uC57C \uD558\uB294 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImagePicker\uC5D0\uC11C \uD604\uC7AC \uD3F4\uB354\uC5D0 \uD558\uC704 \uD3F4\uB354\uAC00 \uC788\uB354\uB77C\uB3C4 "empty placeholder\u201D\uB85C \uD45C\uC2DC\uB418\uB294 \uC2DC\uAC01\uC801 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\uAC00 \uD504\uB85D\uC2DC \uC11C\uBC84\uB97C \uD1B5\uD574 \uAE30\uBCF8 \uC790\uACA9 \uC99D\uBA85\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\uAC00 \uC798\uBABB\uB41C \uD0C0\uAC9F\uC5D0 \uD50C\uB798\uC2F1\uC744 \uC2DC\uB3C4\uD560 \uB54C \uC624\uB958\uB97C \uC815\uD655\uD558\uAC8C \uBCF4\uACE0\uD558\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC120\uD0DD\uD55C Touchgfx \uACBD\uB85C\uB85C \uC791\uC131\uD560 \uAD8C\uD55C\uC774 \uCDA9\uBD84\uD558\uC9C0 \uC54A\uC744 \uB54C Designer\uC640 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uD0A4\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\uAC00 \uC2A4\uD06C\uB9B0 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC740 \uBCC0\uACBD \uC0AC\uD56D\uC73C\uB85C \uC798\uBABB \uC778\uC2DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE8\uD14C\uC774\uB108 \uD06C\uAE30\uB97C \uC870\uC815\uD588\uC744 \uB54C \uCEE8\uD14C\uC774\uB108 \uB0B4\uBD80\uC758 \uC704\uC82F\uC774 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uC2DC\uAC01\uC801 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uB2E4\uB978 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB85C\uB4DC\uD558\uBA74 Designer\uAC00 \uC2E4\uD589 \uC911\uC778 \uC2DC\uBBAC\uB808\uC774\uD130 \uD504\uB85C\uC138\uC2A4\uB97C \uB2EB\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4 \uB0B4\uC5D0\uC11C \uC704\uC82F\uC744 \uB04C\uC5B4\uC62C \uC218 \uC788\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC6D0\uC774 \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uB418\uC9C0 \uC54A\uC744 \uB54C\uB3C4 \uC788\uC5C8\uACE0, \uBB34\uD6A8\uD654\uB41C \uC9C1\uC0AC\uAC01\uD615\uB3C4 \uC62C\uBC14\uB974\uAC8C \uACC4\uC0B0\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC120 \uB108\uBE44\uC758 1/2\uC774 \uBC18\uACBD\uBCF4\uB2E4 \uD074 \uB54C \uC6D0\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uCF54\uC5B4\uC758 \uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LineProgress.cpp\uC758 setValue\uC5D0\uC11C x \uAC12\uACFC y \uAC12\uC744 \uC798\uBABB \uACC4\uC0B0\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC6D0\uC774 \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uB418\uC9C0 \uC54A\uC744 \uB54C\uB3C4 \uC788\uC5C8\uACE0, \uBB34\uD6A8\uD654\uB41C \uC9C1\uC0AC\uAC01\uD615\uB3C4 \uC62C\uBC14\uB974\uAC8C \uACC4\uC0B0\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC120 \uB108\uBE44\uC758 1/2\uC774 \uBC18\uACBD\uBCF4\uB2E4 \uD074 \uB54C \uC6D0\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC120\uC744 2047 \uD53D\uC140(\uC608: \uAC00\uB85C 1449 \uD53D\uC140 x \uC138\uB85C 1449 \uD53D\uC140)\uBCF4\uB2E4 \uAE38\uAC8C \uB4DC\uB85C\uC789\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC77C\uBD80 \uC544\uB78D\uC5B4 \uD569\uC790\uAC00 \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uB418\uC9C0 \uC54A\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774 \uB9B4\uB9AC\uC2A4\uC5D0\uC11C\uB294 \uCD94\uAC00\uC801\uC778 \uB2E8\uACC4\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC54C\uB824\uC9C4 \uBB38\uC81C \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue"
  }), `https://support.touchgfx.com/docs/miscellaneous/known-issues/#project-updater-issue`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-494"
  }), `\uBC84\uC804 4.9.4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2018\uB144 1\uC6D4 25\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB85C\uB4DC\uD558\uB294 \uC2DC\uAC04\uC774 \uC904\uC5B4\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-493"
  }), `\uBC84\uC804 4.9.3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2017\uB144 12\uC6D4 15\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Designer\uAC00 Windows \uD504\uB85D\uC2DC \uAE30\uBCF8 \uC124\uC815\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD328\uD0A4\uC9C0 \uAD00\uB9AC\uC790\uAC00 \uC628\uB77C\uC778 \uC0C1\uD0DC\uAC00 \uB418\uBA74 \uAC00\uB2A5\uD55C \uD328\uD0A4\uC9C0\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC624\uD504\uB77C\uC778 \uC0C1\uD0DC\uC77C \uB54C \uC624\uB958\uC5D0 \uB300\uD55C \uC124\uBA85\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC124\uC815\uB41C \uD14D\uC2A4\uD2B8 \uC778\uD130\uB799\uC158\uC774 Resource \uD14D\uC2A4\uD2B8\uC640 \uD638\uD658\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uC81D\uD2B8 \uC5C5\uB370\uC774\uD130\uAC00 \uC62C\uBC14\uB978 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC73C\uB85C MSVS \uD504\uB85C\uC81D\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 Designer\uC5D0\uC11C \uD14D\uC2A4\uD2B8 \uD06C\uAE30\uAC00 \uC798\uBABB \uAC8C\uC0B0\uB418\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCD5C\uADFC \uD30C\uC77C\uC774 \uB0A0\uC9DC \uC21C\uC73C\uB85C \uC815\uB82C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Wait For \uC778\uD130\uB799\uC158\uC5D0\uC11C \uCE74\uC6B4\uD130 \uCD08\uAE30\uD654\uAC00 \uAD50\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD06C\uAE30 \uC870\uC815 \uC2DC \uB9AC\uC2A4\uD2B8 \uB808\uC774\uC544\uC6C3\uC5D0\uC11C \uD558\uC704 \uC694\uC18C\uB97C \uB4DC\uB85C\uC789\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB9AC\uC2A4\uD2B8 \uB808\uC774\uC544\uC6C3 \uC704\uC82F\uACFC \uD568\uAED8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB85C\uB4DC\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C .otf \uAE00\uAF34 \uD30C\uC77C\uC774 \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uCEE8\uD14C\uC774\uB108\uB97C \uB04C\uC5B4\uC624\uBA74 \uC88C\uD45C\uB97C \uC798\uBABB \uAC00\uC838\uC624\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC640\uC77C\uB4DC\uCE74\uB4DC \uD14D\uC2A4\uD2B8 \uBC84\uD37C\uC758 null \uC885\uB2E8 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB77C\uBCA8 \uBC84\uD2BC \uD14D\uC2A4\uD2B8\uAC00 \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `tgfx.exe \uD328\uD0A4\uC9C0 \uC791\uC131 \uB3C4\uAD6C\uAC00 \uB354\uC6B1 \uBCF5\uC7A1\uD55C \uD30C\uC77C \uB808\uC774\uC544\uC6C3\uC5D0\uC11C\uB3C4 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE8\uD14C\uC774\uB108\uC5D0 \uC18C\uC2A4 \uCF54\uB4DC\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uD0C0 Designer UI \uBC84\uADF8 \uC218\uC815\uC744 \uD1B5\uD574 \uAE30\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-492"
  }), `\uBC84\uC804 4.9.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2017\uB144 11\uC6D4 20\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4\uC5D0\uC11C \uC694\uC18C\uB97C \uB04C\uC5B4\uC62C \uB54C \uC608\uC678\uAC00 \uBC1C\uC0DD\uD558\uB294 Designer \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-491"
  }), `\uBC84\uC804 4.9.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2017\uB144 11\uC6D4 16\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE8\uD14C\uC774\uB108 \uB0B4\uBD80\uC5D0 \uBC30\uCE58\uD588\uC744 \uB54C TextArea \uC704\uC82F\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uC77C\uBD80 Designer \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uC81D\uD2B8 \uB85C\uB4DC \uC2DC "Another interaction is done" \uBA54\uC2DC\uC9C0\uAC00 \uC0AC\uB77C\uC9C0\uBA74\uC11C \uD2B8\uB9AC\uAC70\uB418\uB294 \uC778\uD130\uB799\uC158 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uD2B9\uC815 \uBCF4\uC548 \uC815\uCC45\uC774 \uAD6C\uC131\uB41C PC\uC5D0\uC11C Designer\uAC00 \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC62C\uBC14\uB974\uAC8C \uC0DD\uC131\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uC14B \uC0DD\uC131, \uCF54\uB4DC \uCEF4\uD30C\uC77C \uB610\uB294 \uC0DD\uC131 \uC774\uD6C4 \uBA85\uB839\uB4E4\uC774 \uC911\uB2E8\uB418\uC5C8\uC744 \uB54C Designer\uC758 \uC624\uB958 \uCC98\uB9AC\uAC00 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC5D0\uC11C TouchgfxPath\uAC00 \uC62C\uBC14\uB974\uAC8C \uD574\uC11D\uB418\uC9C0 \uC54A\uB294 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 Designer\uC5D0\uC11C \uC77C\uBD80 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB97C \uBCC0\uACBD\uD558\uBA74 \uC0C8\uB85C\uC6B4 \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uC14B \uD3F4\uB354\uAC00 svn\uC758 \uC81C\uC5B4\uB97C \uBC1B\uC744 \uB54C ImageConverter\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 ImageConverter\uAC00 \uC560\uC14B\uC758 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uAC10\uC9C0\uD558\uC9C0 \uBABB\uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-490"
  }), `\uBC84\uC804 4.9.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2017\uB144 11\uC6D4 8\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBCF4\uB4DC \uC9C0\uC6D0 \uD328\uD0A4\uC9C0, Demo \uBC0F Example\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uD328\uD0A4\uC9C0 \uAD00\uB9AC\uC790\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C Designer\uAC00 \uC628\uB77C\uC778 \uC800\uC7A5\uC18C\uC5D0\uC11C \uC774\uB7EC\uD55C \uD328\uD0A4\uC9C0\uC640 Demo \uBC0F Example\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E4\uC591\uD55C \uBCF4\uB4DC\uC5D0 \uC0AC\uC6A9\uB418\uB358 Example\uACFC Demo \uBC0F \uD3EC\uD2B8\uAC00 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uBAA8\uB450 \uC81C\uAC70\uB418\uC5B4, \uC774\uC81C \uD328\uD0A4\uC9C0\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\uC758 \uD14D\uC2A4\uD2B8 \uCC98\uB9AC\uAC00 \uD06C\uAC8C \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C Designer\uC5D0\uC11C \uBC88\uC5ED\uACFC \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uC791\uC5C5\uD560 \uC218 \uC788\uC73C\uBBC0\uB85C texts.xlsx \uD30C\uC77C\uC744 \uC218\uB3D9\uC73C\uB85C \uD3B8\uC9D1\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Designer\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD30C\uC77C \uAD6C\uC870\uC640 \uAD00\uB828\uD558\uC5EC \uB354\uC6B1 \uC720\uC5F0\uD574\uC84C\uC744 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uD30C\uC77C \uC704\uCE58\uC640 \uC0C1\uAD00\uC5C6\uC774 IAR \uBC0F Keil IDE \uD504\uB85C\uC81D\uD2B8\uB97C \uC790\uB3D9\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer \uBC0F ListLayout \uC704\uC82F\uC5D0 \uB300\uD55C Designer \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SW4STM32 IDE\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR Embedded Workbench \uBC84\uC804 8.10\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `.png \uD30C\uC77C\uB9C8\uB2E4 \uC77C\uC77C\uC774 \uD638\uCD9C\uD560 \uD544\uC694 \uC5C6\uC774 \uD3F4\uB354\uC5D0\uC11C \uC791\uC5C5\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC774 \uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB85C\uC368 \uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uC138\uC2A4\uC758 \uC18D\uB3C4\uAC00 \uD06C\uAC8C \uD5A5\uC0C1\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uBAA8\uB4DC\uB294 \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GNU Arm Embedded Toolchain(GCC \uD06C\uB85C\uC2A4 \uCEF4\uD30C\uC77C\uB7EC)\uC774 6--2017-q2-update(gcc \uBC84\uC804 6.3.1)\uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PC \uC2DC\uBBAC\uB808\uC774\uD130\uC6A9 GNU \uCEF4\uD30C\uC77C\uB7EC\uAC00 6.3.0 \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M4f\uC640 Cortex-M7\uC5D0\uC11C -mfloat-abi=hard\uB85C \uCEF4\uD30C\uC77C\uB41C gcc core lib\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0C0\uC774\uBA38 \uC704\uC82F\uC73C\uB85C \uB4F1\uB85D \uAC00\uB2A5\uD55C \uC704\uC82F\uC758 \uC218\uAC00 24\uAC1C\uC5D0\uC11C 32\uAC1C\uB85C \uB298\uC5B4\uB0AC\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uD604\uC7AC \uB4F1\uB85D\uB41C \uC704\uC82F\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uB294 \uD568\uC218\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MoveAnimator::cancelMoveAnimation() \uBB38\uC81C\uB97C \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 AnimationTextureMapper::cancelMoveAnimation()\uC5D0\uC11C cancelAnimationTextureMapperAnimation()\uC73C\uB85C \uC774\uB984\uC774 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ARGB8888 \uBE44\uD2B8\uB9F5\uC5D0\uC11C \uBD88\uD22C\uBA85 \uD53D\uC140\uC744 \uB80C\uB354\uB9C1\uD560 \uB54C PainterRGB565Bitmap\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0AC\uC6A9\uD588\uB358 \uBAA8\uB4E0 \uBB38\uC790\uAC00 \uAE00\uAF34\uC5D0\uC11C \uB204\uB77D\uB418\uC5C8\uC744 \uB54C FontConvert\uC5D0\uC11C \uAC04\uD639 \uBC1C\uC0DD\uD558\uB358 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Fixed uninitialized variables in the DMA class.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774 \uB9B4\uB9AC\uC2A4\uC5D0\uC11C\uB294 \uCD94\uAC00\uC801\uC778 \uB2E8\uACC4\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-480"
  }), `\uBC84\uC804 4.8.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2017\uB144 3\uC6D4 10\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C LCD4bpp\uAC00 \uBB38\uC790\uB97C \uCD5C\uB300 15% \uBE60\uB974\uAC8C \uB4DC\uB85C\uC789\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4 \uC704\uC82F\uC774 \uD2B9\uC815 \uC0C1\uD669\uC5D0\uC11C \uC57D\uAC04 \uB354 \uBE60\uB974\uAC8C \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\uAC00 \uB9B4\uB9AC\uC2A4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uCF54\uC5B4 \uD504\uB808\uC784\uC6CC\uD06C, Designer \uBC0F \uD658\uACBD \uC258\uC774 \uBC88\uB4E4\uB85C \uC81C\uACF5\uB418\uC5B4 \uD55C \uBC88\uC5D0 \uC124\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD398\uB974\uC2DC\uC544\uC5B4\uC640 \uC544\uB78D\uC5B4 \uD569\uC790\uAC00 \uC9C0\uC6D0\uB418\uC5B4 \uCD5C\uB300 3\uAC1C \uBB38\uC790\uAE4C\uC9C0 \uC2DC\uD000\uC2A4\uB97C \uC778\uC2DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Microsoft Visual Studio 2017\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\uC640 TextAreaWithWildcard\uAC00 setWideTextAction()\uC744 \uC9C0\uC6D0\uD558\uC5EC, \uC904\uC774 \uB108\uBB34 \uAE38\uBA74 \uC790\uB3D9\uC73C\uB85C \uC904\uC744 \uBC14\uAFB8\uACE0 \uC904 \uB05D\uC5D0 \uC904\uC784\uD45C\uB97C \uC0BD\uC785\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2AC\uB77C\uC774\uB354\uC5D0 getter \uD568\uC218\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C MoveAnimator\uC640 FadeAnimator\uAC00 \uC885\uB8CC\uB41C \uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uC124\uC815\uB418\uB294 \uCF5C\uBC31\uC744 \uD574\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C ImageConvert, TextConvert \uBC0F FontConvert\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uC624\uB958\uAC00 Visual Studio\uC758 \uC624\uB958 \uBAA9\uB85D \uCC3D\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uCF58\uC194 \uD504\uB85C\uADF8\uB7A8\uC774 \uC544\uB2CC Windows \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C AbstractShape::updateAbstractShapeCache()\uB294 \uD37C\uBE14\uB9AD \uD568\uC218\uC774\uBBC0\uB85C, \uC815\uD655\uD55C \uD615\uC0C1\uC744 \uC704\uD574 AbstractShape::setCorner()\uB97C \uD55C \uBC88 \uC774\uC0C1 \uD638\uCD9C\uD55C \uD6C4 \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130 \uCC3D\uC758 \uD06C\uAE30\uAC00 \uC6B0\uBC1C\uC801\uC73C\uB85C \uC870\uC815\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBB34\uD6A8\uD654 \uC601\uC5ED\uC744 \uAC15\uC870 \uD45C\uC2DC\uD558\uB294 F2\uAC00 \uC774\uC81C \uC774\uC804 HALSDL\uC5D0\uC11C\uB3C4 \uC720\uD6A8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0 PainterGRAY2Bitmap, PainterGRAY4Bitmap, PainterRGB565Bitmap \uBC0F PainterRGB888Bitmap\uC740 \uBAA8\uB450 \uC77C\uBD80 \uC0C1\uD669\uC5D0\uC11C \uD398\uC778\uD305\uC774 \uBE44\uD2B8\uB9F5 \uD06C\uAE30\uB97C \uBC97\uC5B4\uB098\uC9C0 \uC54A\uB294\uC9C0 \uAC80\uC99D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL2(\uC2DC\uBBAC\uB808\uC774\uD130)\uAC00 \uC774\uC81C\uB294 \uC2A4\uD06C\uB9B0\uC5D0\uC11C 24bpp\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2A4\uD06C\uB9B0\uC0F7 \uC0C9\uC0C1\uC744 \uC815\uD655\uD558\uAC8C \uD45C\uD604\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TiledImage::setOffset()\uC774 \uC774\uC81C \uBE48 \uBE44\uD2B8\uB9F5\uC744 \uC62C\uBC14\uB974\uAC8C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 TiledImage::getSolidRect()\uAC00 \uAC04\uD639 \uC798\uBABB\uB41C \uC9C1\uC0AC\uAC01\uD615\uC744 \uBCF4\uACE0\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 TextArea\uC758 \uD14D\uC2A4\uD2B8\uAC00 \uD68C\uC804\uD558\uB294 \uACBD\uC6B0 resizeToCurrentText()\uC640 resizeHeightToCurrentText()\uC5D0\uC11C \uAC00\uB85C/\uC138\uB85C\uAC00 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 getTextHeight() \uD568\uC218\uAC00 \uC904 \uAC04\uACA9\uC744 \uACE0\uB824\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC774\uC804\uC5D0 resizeToCurrentText() \uAC19\uC740 \uD568\uC218\uC640 getTextHeight() \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uD568\uC218\uB4E4\uC740 \uD06C\uAE30\uB97C \uC815\uD655\uD558\uAC8C \uC870\uC815\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0 SlideMenu::setState()\uB294 EXPANDED \uC0C1\uD0DC\uB97C \uC62C\uBC14\uB974\uAC8C \uCC98\uB9AC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\uAC00 \uCD94\uAC00\uB418\uC5B4 \uC774\uC81C .msi \uC124\uCE58 \uD504\uB85C\uADF8\uB7A8\uC744 \uD1B5\uD574 \uC124\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uC874\uC758 4.x \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBC0F HAL \uD3EC\uD2B8\uC640 \uD638\uD658\uB429\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-470"
  }), `\uBC84\uC804 4.7.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2016\uB144 12\uC6D4 14\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uBAA8\uB4E0 \uD45C\uC900 \uC704\uC82F\uACFC \uCEE8\uD14C\uC774\uB108\uC758 \uC18C\uC2A4 \uCF54\uB4DC\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4. touchgfx/framework/source/touchgfx \uB514\uB809\uD130\uB9AC\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. \uB2E4\uB9CC \uC774\uB7EC\uD55C \uD074\uB798\uC2A4\uB4E4\uC740 \uCF54\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0 \uB0A8\uC544\uC788\uAC8C \uB418\uBA70, \uAE30\uBCF8\uC801\uC73C\uB85C IAR/Keil/gcc \uD504\uB85C\uC81D\uD2B8\uC5D0\uB294 \uC18C\uC2A4 \uCF54\uB4DC \uD30C\uC77C\uC774 \uCD94\uAC00\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TFT \uCEE8\uD2B8\uB864\uB7EC \uAE30\uBC18 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uB2E8\uC77C \uD504\uB808\uC784 \uBC84\uD37C \uAD6C\uC131\uC744 \uCC98\uB9AC\uD558\uB294 \uB370 \uCD5C\uC801\uD654\uB418\uC5B4 \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 \uC678\uBD80 RAM\uC744 \uC0AC\uC6A9\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4 \uC704\uC82F \uC2DC\uC2A4\uD15C\uC744 \uBE44\uB86F\uD55C \uBAA8\uB4E0 \uD45C\uC900 \uD398\uC778\uD130\uC758 \uC131\uB2A5\uC774 \uCD5C\uC801\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB2E4\uC218\uC758 \uD53D\uC140\uC744 \uB4DC\uB85C\uC789\uD558\uB294 \uACBD\uC6B0\uC5D0 \uC0C1\uB2F9\uD55C \uC131\uB2A5 \uAC1C\uC120\uC744 \uAE30\uB300\uD560 \uC218 \uC788\uC73C\uBA70, \uC77C\uBD80 \uD615\uC0C1(\uADF8\uB798\uD504 \uC120 \uB4F1)\uC5D0\uC11C\uB3C4 \uC131\uB2A5\uC774 \uB2E4\uC18C \uD5A5\uC0C1\uB429\uB2C8\uB2E4. Demo\uC5D0 \uC0AC\uC6A9\uB41C "PainterVerticalAlpha"\uB3C4 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C\uB294 \uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uAC00 \uBAA8\uB4E0 \uC5B8\uC5B4\uB97C \uD1B5\uD2C0\uC5B4 \uB3D9\uC77C\uD55C \uBC88\uC5ED\uC73C\uB85C \uD1B5\uD569\uB418\uC5B4 \uCC28\uC9C0\uD558\uB294 \uACF5\uAC04\uC774 \uC904\uC5B4\uB4ED\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD504\uB85C\uC138\uC2A4 \uACB0\uACFC\uB294 \uC560\uC14B \uC0DD\uC131 \uACFC\uC815\uC5D0\uC11C \uCD9C\uB825\uB429\uB2C8\uB2E4. \uCC38\uACE0: \uC774 \uB3D9\uC791\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uD65C\uC131\uD654\uB429\uB2C8\uB2E4. \uAE30\uC874 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130 \uAD6C\uC870\uB97C \uC870\uC791\uD560 \uACBD\uC6B0(\uC608: \uB2E8\uC77C \uC5B8\uC5B4\uB97C RAM\uC73C\uB85C \uB85C\uB4DC) \uC774 \uCD5C\uC801\uD654 \uAE30\uB2A5\uC73C\uB85C \uC778\uD574 \uCF54\uB4DC\uAC00 \uAE68\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uCD5C\uC801\uD654 \uAE30\uB2A5\uC740 remap_identical_texts := no("make\u201D \uAE30\uBC18 \uC0DD\uC131 \uC2DC) `, `<`, `RemapIdenticalTexts`, `>`, `no`, `<`, `/RemapIdenticalTexts`, `>`, `(MSVS\uC77C \uB54C)\uB97C \uCD94\uAC00\uD558\uC5EC \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 SDL \uBC84\uC804\uC774 1.2\uC5D0\uC11C 2.0.4\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. SDL1.2\uB3C4 \uACC4\uC18D \uBC30\uD3EC\uB418\uACE0 \uC788\uC9C0\uB9CC, \uD604\uC7AC \uBAA8\uB4E0 Example\uACFC \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C SDL2\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `.png \uD30C\uC77C\uB85C \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2A4\uD0A4\uB2DD\uD558\uB294 \uAE30\uB2A5\uC774 \uC9C0\uC6D0\uB429\uB2C8\uB2E4. .png \uD30C\uC77C\uC5D0 \uBE44\uBD88\uD22C\uBA85 \uC601\uC5ED\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA74 \uC2DC\uBBAC\uB808\uC774\uD130 \uCC3D\uB3C4 \uC774\uC5D0 \uB530\uB77C \uD615\uC131\uB429\uB2C8\uB2E4. \uCF54\uB4DC \uC608\uC81C\uB294 display_orientation_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Chrom-ART\uAC00 \uD3EC\uD568\uB41C ST \uD0C0\uAC9F\uC5D0\uC11C\uB294 \uC774\uC81C \uC54C\uD30C\uAC00 255\uBCF4\uB2E4 \uC791\uC544\uB3C4 DMA\uAC00 \uBC15\uC2A4 \uC704\uC82F\uC744 \uB4DC\uB85C\uC789\uD569\uB2C8\uB2E4(BLIT_OP_FILL_WITH_ALPHA \uC9C0\uC6D0).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextArea\uB97C \uBE44\uB86F\uD574 \uC640\uC77C\uB4DC\uCE74\uB4DC\uAC00 \uD3EC\uD568\uB41C TextArea\uB294 \uC774\uC81C setWideTextAction()\uC744 \uC9C0\uC6D0\uD558\uC5EC \uAE34 \uC904\uC744 \uC790\uB3D9\uC73C\uB85C \uB798\uD551\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB7F0\uD0C0\uC784 \uC2DC \uAE30\uC874\uC5D0 \uC5C6\uB358 \uAE00\uB9AC\uD504\uAC00 \uC788\uC744 \uACBD\uC6B0 \u201C\uD3F4\uBC31\u201D \uBB38\uC790\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uAE00\uB9AC\uD504\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uC2DC\uD2B8\uC5D0 \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE00\uAF34\uC5D0 \uAE00\uB9AC\uD504\uB97C \uAC15\uC81C\uB85C \uB354 \uD3EC\uD568\uC2DC\uD0AC \uC218 \uC788\uB294 \uC635\uC158\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uCEF4\uD30C\uC77C \uC2DC \uAE00\uB9AC\uD504\uB97C \uC54C \uC218 \uC5C6\uB294 \uB3D9\uC801 \uD14D\uC2A4\uD2B8\uB97C \uB354\uC6B1 \uC27D\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uAE00\uB9AC\uD504\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uC2DC\uD2B8\uC5D0 \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C TextConvert \uB3C4\uAD6C\uC758 \uCD9C\uB825\uC774 \uD6C4\uCC98\uB9AC\uB418\uC5B4 \uB3D9\uC77C\uD55C \uBB38\uC790\uC5F4\uC744 \uAE30\uC874 \uBA54\uBAA8\uB9AC \uC601\uC5ED\uC73C\uB85C \uB9E4\uD551\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC2DC\uAC04\uC744 \uB300\uD3ED \uC808\uAC10\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BITMAP_ANIMATION_STORAGE\uB77C\uB294 \uB0B4\uC7A5\uD615 BitmapId\uAC00 \uCD94\uAC00\uB418\uC5B4 \uBE44\uD2B8\uB9F5\uC744 \uC704\uC82F\uC5D0 \uD560\uB2F9\uD560 \uB54C \uC560\uB2C8\uBA54\uB2C8\uC158 \uC800\uC7A5\uC18C\uB97C \uCC38\uC870\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `config/gcc/app.mk\uC640 config/msvs/Application.props\uC5D0\uC11C \uB514\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uD56D\uBAA9\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E4\uC74C\uACFC \uAC19\uC740 \uD504\uB85C\uADF8\uB798\uBC0D \uBC29\uC2DD\uC73C\uB85C \uC2DC\uBBAC\uB808\uC774\uD130 \uC2A4\uD06C\uB9B0\uC0F7\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. #ifdef SIMULATOR (static_cast`, `<`, `HALSDL2*`, `>`, `(HAL::getInstance()))-`, `>`, `saveScreenshot(); #endif`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C ScrollableContainer\uAC00 \uBCF4\uC774\uC9C0 \uC54A\uB294 \uC694\uC18C\uB97C \uC801\uC808\uD558\uAC8C \uBB34\uC2DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C DigitalClock\uC774 \uC2DC\uAC04 \uD45C\uC2DC\uC790 \uC55E\uC5D0 0\uC744 \uD45C\uC2DC\uD560 \uC218 \uC788\uB3C4\uB85D \uC9C0\uC6D0\uD569\uB2C8\uB2E4(\uC2DC\uAC04\uC774 `, `<`, ` 10\uC778 \uACBD\uC6B0).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130\uAC00 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC744 \uAC15\uC870\uD558\uC5EC \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. F2\uB97C \uB204\uB974\uBA74 \uC774 \uAE30\uB2A5\uC774 \uD65C\uC131\uD654/\uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC904\uC784\uD45C\uAC00 \uC544\uB2CC va_list \uC778\uC218\uB97C \uAC16\uB294 Unicode::vsnprintf \uD568\uC218\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uD615\uC2DD \uBB38\uC790\uC5F4\uC774 "% f"\uC778 \uACBD\uC6B0 Unicode::sprintfFloat\uAC00 '+' \uB300\uC2E0\uC5D0 `, `<`, `space`, `>`, `\uB97C \uCD9C\uB825\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uB610\uD55C `, `[-1..0]`, ` \uBC94\uC704\uC5D0 \uD3EC\uD568\uB41C \uBD80\uB3D9 \uC18C\uC218\uC810\uC774 \uAE30\uD638\uC640 \uD568\uAED8 \uCD9C\uB825\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4(-0.5\uAC00 0.5\uB85C \uCD9C\uB825).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper\uAC00 \uC18C\uC2A4 \uBE44\uD2B8\uB9F5 \uBA54\uBAA8\uB9AC \uC601\uC5ED \uC678\uBD80\uB97C \uC77D\uC5B4\uC624\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 STM32F769-Discovery\uC640 Eval \uBCF4\uB4DC\uC5D0 \uC0AC\uC6A9\uB418\uB294 GPIO.cpp \uD30C\uC77C\uC5D0 \uC798\uBABB\uB41C GPIO \uD540 \uC870\uC791\uC774 \uC788\uC5C8\uC2B5\uB2C8\uB2E4(\uC131\uB2A5 \uCE21\uC815\uC5D0 \uC0AC\uC6A9\uB428).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 Slider.hpp\uC5D0\uC11C \uC77C\uBD80 \uBA54\uC18C\uB4DC\uAC00 \uAC00\uC0C1 \uC120\uC5B8\uC744 \uBE60\uB728\uB838\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769-Discovery \uBCF4\uB4DC\uC5D0\uC11C 24bpp \uC0C9\uC0C1 \uBAA8\uB4DC\uAC00 \uC798\uBABB \uD45C\uC2DC\uB418\uB294 BoardConfiguration \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `AnimatedImage - setBitmap(..)\uC740 \uC0AC\uC6A9\uD574\uC11C\uB294 \uC548 \uB418\uBA70, \uC774\uC81C \uD504\uB77C\uC774\uBE57 \uD568\uC218\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C AnimatedImage\uC5D0\uC11C\uB294 setBitmaps(..)\uB97C \uB300\uC2E0 \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uACFC Makefile\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5B4 TouchGFX \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uAC1C\uBC1C \uC911\uC778 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC544\uB2CC \uB2E4\uB978 \uB514\uC2A4\uD06C \uB4DC\uB77C\uC774\uBE0C\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX \uD658\uACBD(\uBC84\uC804 2.8)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C "make.exe"\uC758 \uBC84\uC804\uC774 4.1\uC774 \uB418\uC5B4, \uC608\uB97C \uB4E4\uC5B4 "-j8"\uC744 make \uBA85\uB839\uC5D0 \uCD94\uAC00\uD558\uBA74 \uBCD1\uB82C \uCEF4\uD30C\uC77C\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uCEF4\uD30C\uC77C \uC18D\uB3C4\uAC00 \uD06C\uAC8C \uBE68\uB77C\uC84C\uC2B5\uB2C8\uB2E4. Makefile\uC774 TouchGFX ## Version 4.2.0 {#version-420} \uC774\uC804 \uBC84\uC804\uC5D0\uC11C \uAC00\uC838\uC628 \uAC83\uC774\uB77C\uBA74 \uC5C5\uB370\uC774\uD2B8\uD558\uAC70\uB098, make-3.81.exe\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 g++\uAC00 "There is no disk in the drive. Please insert a disk into drive E:."\uB77C\uB294 \uBA54\uC2DC\uC9C0\uB97C \uBCF4\uACE0\uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C\uB294 gcc \uBC84\uC804\uC744 4.8.1\uC5D0\uC11C \uBC84\uC804 ## Version 4.9.3 {#version-493}\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uC5EC \uC774\uB7EC\uD55C \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-461"
  }), `\uBC84\uC804 4.6.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2016\uB144 9\uC6D4 12\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `OptiCortex-M4\uC640 Cortex-M7\uC5D0\uC11C GCC \uCF54\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uCD5C\uC801\uD654 \uAE30\uB2A5\uC774 \uAC1C\uC120\uB418\uC5B4 TouchGFX ## Version 4.6.0 {#version-460}\uC5D0 \uBE44\uD574 \uD2B9\uD788 TextureMapper\uC640 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC758 \uC18D\uB3C4\uAC00 \uD06C\uAC8C \uBE68\uB77C\uC84C\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uBBAC\uB808\uC774\uD130 \uCC3D\uC758 \uC81C\uBAA9\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB294 \uD568\uC218\uAC00 HALSDL\uC5D0 \uC0C8\uB86D\uAC8C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. HALSDL::setWindowTitle()\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BW_RLE \uD615\uC2DD(1bpp \uB514\uC2A4\uD50C\uB808\uC774)\uC758 \uC555\uCD95\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uC774\uC804\uC5D0 \uC0DD\uC131\uB41C \uD30C\uC77C\uC744 \uC81C\uAC70\uD558\uACE0 \uC560\uC14B\uC744 \uB2E4\uC2DC \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR\uC744 \uC0AC\uC6A9\uD558\uB294 STM32F756G-EVAL\uC774 \uC774\uC81C \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC758 \uD50C\uB798\uC2DC\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR 7.x\uC744 \uC0AC\uC6A9\uD574 Cortex-M4 \uAE30\uBC18 \uD0C0\uAC9F\uC744 \uCEF4\uD30C\uC77C\uD560 \uB54C \uB9C1\uCEE4 \uC624\uB958\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uB294 IAR \uB9C1\uCEE4 \uB9AC\uB514\uB809\uC158 \uBA85\uB839\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 setupBuffer()\uB97C \uC0AC\uC6A9\uD574 \uC5EC\uB7EC \uBA54\uBAA8\uB9AC \uBC84\uD37C\uB97C CanvasWidgetRenderer\uC5D0 \uD560\uB2F9\uD558\uBA74 \uBA54\uBAA8\uB9AC\uAC00 \uC190\uC0C1\uB418\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 TextureMapper\uAC00 \uD504\uB808\uC784\uBC84\uD37C \uC678\uBD80\uC5D0 \uB4DC\uB85C\uC789\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 TiledImage\uC758 \uC624\uD504\uC14B \uC124\uC815\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uC2E4\uD589\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0AD\uC81C\uD560 \uB54C \uACBD\uC6B0\uC5D0 \uB530\uB77C \uBA54\uBAA8\uB9AC \uC190\uC0C1\uC744 \uC77C\uC73C\uD0A4\uB294 \uB450 \uAC00\uC9C0 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uCD94\uAC00\uB41C AnalogClock\uC5D0 \uAC00\uC0C1 \uBA54\uC18C\uB4DC \uC120\uC5B8\uC774 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LPC4088DisplayModule\uC758 GCC \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uD14D\uC2A4\uD2B8\uC640 \uAE00\uAF34\uC774 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB418\uB294 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C fontconvert.out\uC744 \uC9C1\uC811 \uC0AC\uC6A9\uD558\uB294 \uAC1C\uBC1C\uC790\uB4E4\uC744 \uC704\uD574 \uCD9C\uB825 \uB514\uB809\uD130\uB9AC\uAC00 \uC5C6\uC73C\uBA74 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 ScrollableContainers\uAC00 \uC798\uBABB\uB41C \uB4DC\uB798\uADF8 \uC774\uBCA4\uD2B8\uB97C \uD558\uC704 \uB178\uB4DC\uB85C \uC804\uC1A1\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uD3ED\uC744 8\uBD84\uD560\uD558\uC9C0 \uBABB\uD558\uB294 \uBAA8\uB178\uD06C\uB86C(1bpp) \uB514\uC2A4\uD50C\uB808\uC774\uB294 \uD14D\uC2A4\uD2B8\uB97C \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G Discovery \uBCF4\uB4DC\uC5D0\uC11C \uAE30\uBCF8 \uD130\uCE58 \uC0D8\uD50C \uC18D\uB3C4\uAC00 \uC18C\uD3ED \uC0C1\uC2B9\uD588\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-460"
  }), `\uBC84\uC804 4.6.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2016\uB144 6\uC6D4 14\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2bpp \uADF8\uB808\uC774\uC2A4\uCF00\uC77C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `4bpp \uADF8\uB808\uC774\uC2A4\uCF00\uC77C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC704\uC82F TiledImage\uAC00 \uCD94\uAC00\uB418\uC5B4 \uC774\uBBF8\uC9C0 1\uAC1C\uB97C \uC5EC\uB7EC \uCC28\uB840 \uBC18\uBCF5\uD574\uC11C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uBC18\uBCF5 \uD69F\uC218\uB294 \uC704\uC82F \uD06C\uAE30\uC640 \uC774\uBBF8\uC9C0 \uD06C\uAE30\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC704\uC82F RepeatButton\uC774 \uCD94\uAC00\uB418\uC5B4 \uB204\uB97C \uB54C \uBC18\uBCF5\uC801\uC73C\uB85C \uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uC2E4\uD589\uD558\uB294 \uBC84\uD2BC\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC704\uC82F AnimationTextureMapper\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. TextureMapper\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. animation_texture_mapper_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uCEE8\uD14C\uC774\uB108\uC778 AnalogClock\uACFC DigitalClock\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. clock_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uCEE8\uD14C\uC774\uB108\uC778 ProgressIndicators\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. progress_indicator_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uCEE8\uD14C\uC774\uB108\uC778 ModalWindow\uAC00 \uCD94\uAC00\uB418\uC5B4 \uBA54\uC778 \uC2A4\uD06C\uB9B0 \uC704\uC5D0 \uCC3D\uC774, \uADF8\uB9AC\uACE0 \uBA54\uC778 \uC2A4\uD06C\uB9B0\uC758 \uB098\uBA38\uC9C0 \uC601\uC5ED\uC5D0 \uC74C\uC601\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uBAA8\uB2EC \uCC3D\uC774 \uD45C\uC2DC\uB418\uC5B4 \uC788\uB294 \uB3D9\uC548\uC5D0\uB294 \uD074\uB9AD\uC774 \uBA54\uC778 \uC2A4\uD06C\uB9B0\uC5D0 \uC77C\uCCB4 \uC804\uB2EC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. modal_window_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uCEE8\uD14C\uC774\uB108\uC778 SlideMenu\uAC00 \uCD94\uAC00\uB418\uC5B4 \uCE21\uBA74/\uC0C1\uB2E8/\uD558\uB2E8 \uBA54\uB274\uC5D0 \uC2A4\uD06C\uB9B0 \uB0B4/\uC678\uBD80\uB85C \uBC00 \uC218 \uC788\uB294 \uD65C\uC131\uD654 \uBC84\uD2BC\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA74 \uAC01 \uBA54\uB274\uB97C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uC81C\uD55C \uC2DC\uAC04\uC744 \uC124\uC815\uD558\uC5EC \uC77C\uC815 \uC2DC\uAC04 \uB3D9\uC548 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uC790\uB3D9\uC73C\uB85C \uC228\uAE38 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4 \uC704\uC82F \uB77C\uC778\uC774 ROUND_CAP_ENDING\uACFC setCapPrecision()\uC744 \uC9C0\uC6D0\uD558\uC5EC \uC120 \uB05D\uC744 \uB465\uAE00\uAC8C \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130\uAC00 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uC8FC\uD30C\uC218\uC5D0 \uB9E4\uC6B0 \uAC00\uAE5D\uAC8C \uD2F1(tick)\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uBBAC\uB808\uC774\uD130\uC758 \uCC3D \uC81C\uBAA9\uC5D0 \uB9C8\uC6B0\uC2A4 X \uBC0F Y \uC88C\uD45C\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4. (\uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD560 \uB54C F1\uC744 \uB204\uB974\uBA74 \uC774 \uAE30\uB2A5\uC774 \uD65C\uC131\uD654/\uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F7 MCU \uBC0F STM32F7 \uAE30\uBC18 \uBCF4\uB4DC\uC77C \uB54C ST Cube \uB4DC\uB77C\uC774\uBC84\uAC00 \uBC84\uC804 1.4.0\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32769I-EVAL \uBCF4\uB4DC\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769I-Discovery \uBCF4\uB4DC\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804 \uC2A4\uD06C\uB9B0\uC0F7\uC744 \uC6B0\uBC1C\uC801\uC73C\uB85C \uB36E\uC5B4\uC4F0\uC9C0 \uC54A\uB3C4\uB85D \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uC0DD\uC131\uB41C \uC2A4\uD06C\uB9B0\uC0F7(F3)\uC774 \uD0C0\uC784\uC2A4\uD0EC\uD504\uAC00 \uD3EC\uD568\uB41C \uC774\uB984\uC73C\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uBBAC\uB808\uC774\uD130\uAC00 \uC774\uC81C \uCE94\uBC84\uC2A4 \uC704\uC82F \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uCD9C\uB825\uD558\uC5EC \uCD5C\uC801\uC758 \uCE94\uBC84\uC2A4 \uBA54\uBAA8\uB9AC \uBC84\uD37C \uD06C\uAE30\uB97C \uC27D\uAC8C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST \uBCF4\uB4DC\uC5D0 \uC0AC\uC6A9\uB418\uB294 DMA \uB4DC\uB77C\uC774\uBC84: STM32F7\uC5D0 \uB300\uD55C \uBA85\uC2DC\uC801 DMA2D \uC778\uC2A4\uD134\uC2A4 \uCD08\uAE30\uD654 F4-Discovery\uC77C \uB54C \uC798\uBABB\uB41C CLUT_CM \uC0AC\uC6A9 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uB2E4\uB978 DMA \uCC44\uB110\uC774 \uB3D9\uC2DC\uC5D0 \uC0AC\uC6A9 \uC911\uC774\uBA74 LPC17xx, LPC18xx, LPC43xx\uC5D0\uC11C DMA \uB4DC\uB77C\uC774\uBC84\uAC00 \uC62C\uBC14\uB974\uAC8C \uC791\uB3D9\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC774\uC81C\uB294 \uCC44\uB110 0\uC5D0\uC11C\uB9CC \uD50C\uB798\uADF8\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uB098\uD0C0\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C\uB294 ST \uBCF4\uB4DC\uC5D0\uC11C \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC \uB4DC\uB77C\uC774\uBC84\uAC00 \uCFFC\uB9AC \uC774\uC804\uC5D0 \uCD08\uAE30\uD654\uC5D0 \uC544\uBB34\uB7F0 \uBB38\uC81C\uAC00 \uC5C6\uB294\uC9C0 \uC815\uC0C1\uC801\uC73C\uB85C \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC2DC\uBBAC\uB808\uC774\uD130\uC758 \uB9C8\uC6B0\uC2A4 \uD074\uB9AD\uC744 \uAC10\uC9C0\uD558\uC9C0 \uBABB\uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert.exe\uAC00 \uAE30\uBCF8\uAC12\uC73C\uB85C RGB565\uB97C \uAC16\uC2B5\uB2C8\uB2E4(\uAE30\uD0C0 \uBD88\uD22C\uBA85 \uD615\uC2DD\uC5D0 \uB530\uB77C \uAE30\uBCF8\uAC12 \uC801\uC6A9).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC774\uBBF8\uC9C0\uAC00 \uC555\uCD95\uB418\uC5C8\uB294\uB370\uB3C4 \uB108\uBB34 \uD070 \uACBD\uC6B0\uC5D0\uB294(BW \uD615\uC2DD\uC73C\uB85C \uB2E4\uC2DC \uBC14\uB01C) \uC555\uCD95(BW_RLE) \uBC0F \uD68C\uC804( \uD30C\uC77C \uC774\uB984\uC5D0.90. \uD3EC\uD568)\uB420 BW \uC774\uBBF8\uC9C0\uC5D0 ImageConvert\uAC00 \uC544\uBB34\uB7F0 \uD6A8\uACFC\uAC00 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uBAA8\uB4E0 Makefile\uC774 realpath\uAC00 \uC544\uB2CC abspath\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C AnimatedImage\uB97C \uC0AC\uC6A9\uD558\uBA74 AnimationEnded \uCF5C\uBC31 \uD568\uC218\uC5D0\uC11C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uB2E4\uC2DC \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32756G-EVAL \uBCF4\uB4DC\uC5D0\uC11C QSPI \uD50C\uB798\uC2DC \uD06C\uAE30\uAC00 64MByte\uB85C \uAD50\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `D-cache \uBB34\uD6A8\uD654\uAC00 STM32F7HAL::flushFrameBuffer\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uB2E8\uC77C \uD504\uB808\uC784 \uBC84\uD37C \uBAA8\uB4DC\uC77C \uB54C, \uADF8\uB9AC\uACE0 fb\uAC00 SRAM\uC5D0 \uC788\uC744 \uB54C STM32F7\uC5D0\uC11C \uAC04\uD639 \uBC1C\uC0DD\uD558\uB358 \uADF8\uB798\uD53D \uC624\uB958\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `otm8009a \uB514\uC2A4\uD50C\uB808\uC774(STM32769-DISCO, STM32769-EVAL, STM32469-DISCO, STM32469-EVAL)\uAC00 \uC774\uC81C \uCD5C\uB300 \uB514\uC2A4\uD50C\uB808\uC774 \uBC1D\uAE30\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR 7.50.x\uC5D0\uC11C va_list \uB124\uC784 \uB9F9\uAE00\uB9C1\uACFC \uAD00\uB828\uB41C \uBC84\uADF8\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uC874\uC758 4.x \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBC0F HAL \uD3EC\uD2B8\uC640 \uD638\uD658\uB429\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-451"
  }), `\uBC84\uC804 4.5.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2016\uB144 3\uC6D4 14\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `va_list \uAE30\uD638\uC758 \uC774\uB984 \uD655\uC778\uACFC \uAD00\uB828\uD558\uC5EC \uC77C\uBD80 IAR \uBC84\uC804\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8 \uC608\uC81C\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD558\uB294 \uB450 \uAC00\uC9C0 IAR \uB9C1\uCEE4 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 STM32F4-Discovery \uBCF4\uB4DC\uAC00 16bpp \uBAA8\uB4DC\uC5D0\uC11C \uC798\uBABB\uB41C \uC0C9\uC0C1\uC73C\uB85C \uBD88\uD22C\uBA85 \uC9C1\uC0AC\uAC01\uD615\uC744 \uB4DC\uB85C\uC789\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCE94\uBC84\uC2A4 \uC704\uC82F \uB80C\uB354\uB7EC\uAC00 \uC815\uB82C\uB418\uC9C0 \uC54A\uC740 \uBA54\uBAA8\uB9AC \uC561\uC138\uC2A4\uB97C \uB354\uB294 \uC218\uD589\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC791\uC5C5\uC774 \uC0AD\uC81C\uB418\uC5B4\uB3C4 FreeRTOS\uAC00 \uBA54\uBAA8\uB9AC\uB97C \uD574\uC81C\uD558\uC9C0 \uBABB\uD588\uC9C0\uB9CC \uC774\uC81C\uB294 vApplicationIdleHook(FreeRTOS \uC804\uC6A9)\uAC00 \uBA54\uBAA8\uB9AC \uD574\uC81C\uB97C \uB354\uB294 \uCC28\uB2E8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uAC00\uC6B4\uB370 \uC545\uC13C\uD2B8\uAC00 \uC788\uB294 \uC544\uB78D\uC5B4\uAC00 \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PixelDataWidget::getAlpha()\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 Unicode::strncpy()\uC5D0 \uC18C\uC2A4\uB85C char* \uD615\uC2DD\uC774 \uC124\uC815\uB418\uC5B4 \uC788\uC73C\uBA74 ascii \uCF54\uB4DC\uAC00 127\uAC1C \uB118\uAC8C \uD3EC\uD568\uB41C \uBB38\uC790\uB97C \uC62C\uBC14\uB974\uAC8C \uBCF5\uC0AC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-450"
  }), `\uBC84\uC804 4.5.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2016\uB144 2\uC6D4 2\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC5B8\uC5B4\uC778 \uC544\uB78D\uC5B4\uC640 \uD788\uBE0C\uB9AC\uC5B4\uB97C \uC88C\uD5A5 \uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1\uC73C\uB85C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. RTL \uBB38\uC790\uC5F4\uC744 LTR \uD14D\uC2A4\uD2B8 \uBC0F \uC22B\uC790\uC640 \uD63C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `24bpp \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC774\uBBF8\uC9C0\uAC00 \uB354\uC6B1 \uC138\uBC00\uD558\uAC8C \uB4DC\uB85C\uC789\uB418\uC9C0\uB9CC \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uB3C4 \uADF8\uB9CC\uD07C \uC99D\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uB7F0\uD0C0\uC784 \uC2DC Bitmap::dynamicBitmapCreate \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC608\uB97C \uB4E4\uC5B4 SD \uCE74\uB4DC\uC5D0\uC11C .bmp \uD30C\uC77C\uC744 \uB85C\uB4DC\uD558\uC5EC \uD45C\uC2DC\uD558\uB294 \uB370 \uC720\uC6A9\uD569\uB2C8\uB2E4. dynamic_bitmap_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB808\uC784 \uC18D\uB3C4 \uBCF4\uC0C1 \uAE30\uB2A5\uC774 \uC0C8\uB85C \uCD94\uAC00\uB418\uC5B4 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uB5A8\uC5B4\uC9C8 \uACBD\uC6B0 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBE44\uD2B8\uB9F5 \uCE90\uC2F1\uC774 \uAC1C\uC120\uB418\uC5B4 \uCE90\uC2DC\uC5D0\uC11C \uBE44\uD2B8\uB9F5\uC744 \uC0AD\uC81C\uD558\uC5EC \uB2E4\uB978 \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD560 \uACF5\uAC04\uC744 \uD655\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC704\uC82F\uC778 PixelDataWidget\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uC704\uC82F\uC740 \uB7F0\uD0C0\uC784 \uC2DC \uAC00\uACF5\uB418\uC9C0 \uC54A\uC740 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640\uC11C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uB3D9\uC601\uC0C1 \uC0D8\uD50C \uB4F1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uCC3D\uC5D0\uC11C \uC2E4\uD589\uB418\uB294 \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0 \uC544\uC774\uCF58\uC774 \uC0DD\uACA8\uC11C \uC791\uC5C5 \uD45C\uC2DC\uC904\uC5D0\uC11C \uC27D\uAC8C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C TouchGFX\uC5D0\uC11C \uC9C0\uC6D0\uB418\uB294 ST \uBCF4\uB4DC\uB294 ST-Link Utility Release 3.7+\uAC00 \uC124\uCE58\uB418\uC5B4 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD574 'make intflash\u2019\uB97C \uC0AC\uC6A9\uD558\uB294 \uBA85\uB839\uC73C\uB85C \uB0B4\uBD80 \uD50C\uB798\uC2DC\uAC00 \uD504\uB85C\uADF8\uB798\uBC0D\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Unicode::snprintf()\uAC00 \uC5C5\uB370\uC774\uD2B8\uB97C \uD1B5\uD574 \uD06C\uAC8C \uAC1C\uC120\uB418\uC5B4 %02d \uAC19\uC740 \uD45C\uC900 \uD615\uC2DD \uC9C0\uC815\uC790\uB97C \uB354 \uB9CE\uC774 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 "%f" va_args \uBC29\uC2DD\uC73C\uB85C \uBD80\uB3D9 \uC18C\uC218\uC810\uC744 \uAC15\uC81C\uB85C \uD3EC\uD568\uC2DC\uCF30\uAE30 \uB54C\uBB38\uC5D0 \uBD80\uB3D9 \uC18C\uC218\uC810\uC744 \uC9C0\uC6D0\uD558\uB294 Unicode::snprintfFloat()\uAC00 \uBCC4\uB3C4\uC758 \uD568\uC218\uB85C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uADF8\uB7A8\uC758 \uB514\uB354\uB9C1 \uD488\uC9C8\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4(\uBD80\uB3D9 \uC18C\uC218\uC810 \uC5F0\uC0B0). \uB610\uD55C \uC0C8\uB85C\uC6B4 \uC720\uD615\uC758 \uC5EC\uB7EC \uAC00\uC9C0 \uB514\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5B4 16/18\uBE44\uD2B8 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD558\uC704(\uBBF8\uC0AC\uC6A9) \uBE44\uD2B8\uAC00 \uB2E4\uC591\uD558\uAC8C \uBC30\uC120\uB418\uB294 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uACE0\uB824\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C touchgfx::ButtonWithLabel\uC5D0 updateTextPosition() \uBA54\uC18C\uB4DC\uAC00 \uCD94\uAC00\uB418\uC5B4 \uB77C\uBCA8 \uB0B4\uC6A9 \uBCC0\uACBD \uC2DC(\uC608: \uC5B8\uC5B4 \uBCC0\uACBD) \uAC00\uB85C \uBC29\uD5A5 \uD14D\uC2A4\uD2B8\uB97C \uC911\uC559\uC5D0 \uBC30\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::TextArea\uC5D0 \uC0C8\uB85C\uC6B4 \uBA54\uC18C\uB4DC\uC778 setBaselineY()\uAC00 \uCD94\uAC00\uB418\uC5B4 \uC0C1\uB2E8 \uC67C\uCABD \uBAA8\uD241\uC774\uAC00 \uC544\uB2CC \uD14D\uC2A4\uD2B8 \uAE30\uC900\uC120\uC5D0 \uB530\uB77C \uD14D\uC2A4\uD2B8\uB97C \uBC30\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uB0B4\uBD80 \uAE00\uB9AC\uD504 \uC778\uCF54\uB529 \uD615\uC2DD\uC774 \uCCAB \uBC88\uC9F8 \uD53D\uC140\uC744 \uCD5C\uC0C1\uC704 \uBE44\uD2B8\uAC00 \uC544\uB2CC \uCD5C\uD558\uC704 \uBE44\uD2B8\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C9\uC0C1 \uAC12 \uC0AC\uC591\uC774 uint16_t\uC5D0\uC11C colortype\uC73C\uB85C \uBC14\uB00C\uC5B4 16\uBE44\uD2B8 \uC0C9\uC0C1\uACFC 24\uBE44\uD2B8 \uC0C9\uC0C1\uC774 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC804\uD658\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C touchgfx::TextArea \uD074\uB798\uC2A4\uC5D0 setIndentation() \uBA54\uC18C\uB4DC\uAC00 \uCD94\uAC00\uB418\uC5B4 \uC774\uC804 \uBB38\uC790 \uBC11\uC73C\uB85C \uD655\uC7A5\uB418\uB294 \uACBD\uC6B0\uC5D0 \uBB38\uC790 \uAE00\uB9AC\uD504\uAC00 \uC798\uB9AC\uB294 \uAC83\uC744 \uBC29\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(setTextIndentation() \uBA54\uC18C\uB4DC\uAC00 \uC0C8\uB86D\uAC8C \uCD94\uAC00\uB41C touchgfx::Keyboard \uD074\uB798\uC2A4\uC640 \uC720\uC0AC).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F7xx \uD3EC\uD2B8\uC640 STM32F4x9 \uD3EC\uD2B8\uAC00 \uC774\uC81C touchgfx::Box\uC758 DMA \uC804\uC1A1\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 GPIO::VSYNC_FREQ \uC2E0\uD638\uAC00 \uC624\uC9C1 "VSYNC" \uC778\uD130\uB7FD\uD2B8\uC5D0\uC11C\uB9CC \u201C\uD1A0\uAE00\u201D\uB418\uC5C8\uC2B5\uB2C8\uB2E4(NXP LPC18xx, NXP LPC43xx, Freescale MK70F12, ST stm32f4x9). \uD558\uC9C0\uB9CC \uC774\uC81C\uB294 \uC2E0\uD638\uAC00 "VSYNC" \uC778\uD130\uB7FD\uD2B8\uC5D0\uC11C \uD558\uC774\uB85C, \uADF8\uB9AC\uACE0 "Front-Porch-Entered" \uC778\uD130\uB7FD\uD2B8\uC5D0\uC11C \uB85C\uC6B0\uB85C \uC804\uD658\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M3\uC5D0 \uB300\uD55C GCC \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB4DC\uBB3C\uC9C0\uB9CC STM32F7\uC5D0\uC11C \uCD94\uCE21\uC744 \uAE30\uBC18\uC73C\uB85C \uC798\uBABB\uB41C QSPI \uBA54\uBAA8\uB9AC \uC601\uC5ED\uC744 \uCE90\uC2F1\uD558\uC5EC \uBC1C\uC0DD\uD558\uB294 \uCDA9\uB3CC \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4. 4.4.x\uB97C \uC0AC\uC6A9 \uC911\uC774\uB77C\uBA74 BoardConfiguration\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G-DISCO \uBCF4\uB4DC\uC5D0\uC11C FMC \uBC45\uD06C 1\uC744 \uD1B5\uD574 \uCE90\uC2DC\uC5D0 \uC561\uC138\uC2A4\uD560 \uB54C \uAC04\uD639 \uBC1C\uC0DD\uD558\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uAE5C\uBC15\uC784 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::TextAreaWithWildcards\uC5D0\uC11C "%"" \uBB38\uC790 \uCC98\uB9AC\uAC00 \uAC1C\uC120\uB418\uC5B4 \uD2B9\uC218\uD55C \uACBD\uC6B0\uC5D0 %%\uAC00 \uC0BD\uC785\uB418\uB294 \uAC83\uC744 \uBC29\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C touchgfx::DragEvent\uC640 touchgfx::GestureEvent\uAC00 \uBD80\uD638\uAC00 \uC5C6\uB294 \uC88C\uD45C \uB300\uC2E0\uC5D0 \uBD80\uD638\uAC00 \uC788\uB294 \uC88C\uD45C\uB97C \uC0AC\uC6A9\uD558\uACE0 \uBCF4\uACE0\uD569\uB2C8\uB2E4. \uC774\uB85C\uC368 \uB4DC\uB798\uADF8/\uC81C\uC2A4\uCC98\uAC00 \uD574\uB2F9\uD558\uB294 \uB4DC\uB85C\uC5B4\uBE14\uACFC \uAD00\uB828\uB41C \uC88C\uD45C\uB85C \uD45C\uD604\uB418\uAE30 \uB54C\uBB38\uC5D0 \uB354 \uC27D\uAC8C \uC774\uD574\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 snprintf("%x")\uAC00 \uB300\uBB38\uC790 16\uC9C4\uC218\uB97C \uC0DD\uC131\uD588\uC2B5\uB2C8\uB2E4. \uC774\uC81C\uB294 \uD45C\uC900 snprintf()\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C "%X"\uAC00 \uB300\uBB38\uC790 16\uC9C4\uC218\uB97C, \uADF8\uB9AC\uACE0 "%x"\uAC00 \uC18C\uBB38\uC790 16\uC9C4\uC218\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Linux\uC5D0\uC11C \uC2E4\uD589\uD560 \uB54C Demo\uC758 \uBB34\uC791\uC704\uC131 \uBC84\uADF8\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC9C0\uB098\uCE58\uAC8C \uAE30\uC6B8\uC778 \uAE00\uAF34\uC744 \uC0AC\uC6A9\uD560 \uB54C \uB2E4\uC2DC \uB4DC\uB85C\uC789\uB418\uB294 \uBC84\uADF8\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uBAA8\uB4E0 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C Model \uD074\uB798\uC2A4\uC758 ModelListener\uB97C \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uCD08\uAE30\uD654(NULL)\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::TextArea\uC5D0\uC11C \uC9C0\uB098\uCE58\uAC8C \uAE30\uC6B8\uC778 \uAE00\uAF34\uC5D0 \uB300\uD55C \uC9C0\uC6D0 \uBC84\uADF8\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uADF8\uB7A8\uC5D0\uC11C \uCEEC\uB7FC 0\uC774 \uC0B4\uC9DD \uB2E4\uB978 \uD53D\uC140 \uC0C9\uC0C1\uC744 \uAC00\uC838\uC624\uB294 \uBBF8\uBB18\uD55C \uC624\uB958\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uACB0\uACFC\uC801\uC73C\uB85C \uC54C\uC544\uBCF4\uC9C0 \uBABB\uD558\uB354\uB77C\uB3C4 \uC804\uCCB4 \uC774\uBBF8\uC9C0\uAC00 \uB2E4\uC18C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC2AC\uB77C\uC774\uB354\uC5D0\uC11C \uAC12\uC774 \uACE0\uB974\uAC8C \uBD84\uBC30\uB418\uC9C0 \uC54A\uB294 \uC624\uB958\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC9C0\uC6D0 \uC885\uB8CC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD::drawGlyph()\uB294 \uC9C0\uC6D0\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB300\uC2E0\uC5D0 LCD::drawString\uC744 \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uC874\uC758 4.x \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBC0F HAL \uD3EC\uD2B8\uC640 \uD638\uD658\uB429\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-442"
  }), `\uBC84\uC804 4.4.2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2015\uB144 11\uC6D4 26\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR 7.x\uB97C \uC0AC\uC6A9\uD574 \uCEF4\uD30C\uC77C\uD560 \uB54C \uB4DC\uBB3C\uC9C0\uB9CC STM32F7 \uD0C0\uAC9F\uC5D0\uC11C GUI \uC791\uC5C5\uC774 \uC911\uB2E8\uB418\uB294 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-441"
  }), `\uBC84\uC804 4.4.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2015\uB144 10\uC6D4 27\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil 5.x\uB97C \uC0AC\uC6A9\uD574 \uCEF4\uD30C\uC77C\uD560 \uB54C \uAC04\uD639 STM32F7 \uD0C0\uAC9F\uC5D0\uC11C GUI \uC791\uC5C5\uC774 \uC911\uB2E8\uB418\uB294 \uBB38\uC81C\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DSI\uB97C \uB2E8\uC77C \uD504\uB808\uC784\uBC84\uD37C \uBAA8\uB4DC\uC5D0\uC11C \uAC00\uB85C \uBC29\uD5A5\uC73C\uB85C \uC0AC\uC6A9\uD560 \uB54C STM32 F469 EVAL/Discovery \uBCF4\uB4DC\uC5D0\uC11C \uAC04\uD639 \uD2F0\uC5B4\uB9C1(tearing) \uD604\uC0C1\uC774 \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR \uD50C\uB798\uC2DC \uB85C\uB354 \uC124\uC815\uC774 \uC218\uC815\uB418\uC5B4 STM32 F469 \uBCF4\uB4DC\uC5D0\uC11C \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB97C \uD504\uB85C\uADF8\uB798\uBC0D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uCC38\uACE0: QuadSPI \uD50C\uB798\uC2DC\uC758 \uACBD\uC6B0 IAR \uB85C\uB354\uAC00 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 ST-Link Utility\uC5D0\uC11C \uACC4\uC18D \uD504\uB85C\uADF8\uB798\uBC0D\uD574\uC57C \uD569\uB2C8\uB2E4.)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G-EVAL \uBCF4\uB4DC\uC758 \uC131\uB2A5 \uCE21\uC815\uC5D0 \uD544\uC694\uD55C GPIO \uD074\uB798\uC2A4\uAC00 \uC774\uC81C BSP_LED \uD568\uC218\uB97C \uC815\uC0C1\uC801\uC73C\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uB2E8, LED2\uC640 LED4\uB294 IO Expander\uB97C \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC774 \uBCF4\uB4DC\uC5D0\uC11C\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uB450 \uAC00\uC9C0 \uC2E0\uD638\uB9CC \uD65C\uC131\uD654\uB418\uC5B4 \uC131\uB2A5\uC744 \uCE21\uC815\uD558\uB294 \uB370 \uBD80\uC801\uD569\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M7 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB514\uBC84\uAE45\uD560 \uB54C IAR Workbench\uC5D0\uC11C \uBC88\uAC70\uB85C\uC6E0\uB358 \u201CGet Alternative File\u201D \uB300\uD654 \uD31D\uC5C5\uCC3D\uC774 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-440"
  }), `\uBC84\uC804 4.4.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2015\uB144 10\uC6D4 6\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Cortex-M7 \uCF54\uC5B4\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD130\uCE58 \uC785\uB825\uC5D0 "\uD551\uAC70 \uC0AC\uC774\uC988" \uAC1C\uB150\uC774 \uB3C4\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uAC1C\uB150\uC774 \uC0AC\uC6A9\uB418\uBA74 TouchGFX\uAC00 \uBCF4\uACE0\uB41C x,y \uC88C\uD45C \uC8FC\uBCC0 \uC601\uC5ED\uC5D0\uC11C \uD130\uCE58\uAC00 \uAC00\uB2A5\uD55C \uC704\uC82F\uC744 \uCC3E\uC73C\uB824\uACE0 \uC2DC\uB3C4\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uC704\uC82F\uC744 \uC815\uD655\uD558\uAC8C \uD074\uB9AD\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uC791\uC740 \uBC84\uD2BC\uB3C4 \uD6E8\uC52C \uC27D\uAC8C \uD130\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. HAL::setFingerSize()\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio 2015\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Visual Studio\uC758 Demo \uBC0F Example \uD504\uB85C\uC81D\uD2B8\uC5D0 \uBE60\uB974\uAC8C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uB3C4\uB85D Resources \uC544\uB798\uC5D0 Application.props\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uD56D\uC0C1 \uADF8\uB807\uB4EF\uC774 Application.props\uC758 \uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uBA74 \uB2E4\uC2DC \uBE4C\uB4DC\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BDF \uD615\uC2DD\uC758 \uBE44\uD2B8\uB9F5 \uAE00\uAF34\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uAE00\uAF34 \uD30C\uC77C\uC5D0\uC11C \uC694\uCCAD\uD55C \uAE00\uAF34 \uD06C\uAE30\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C\uAC00 \uC624\uB958 \uBA54\uC2DC\uC9C0\uC5D0 \uC9C0\uC6D0\uB418\uB294 \uAE00\uAF34 \uD06C\uAE30\uB97C \uC791\uC131\uD569\uB2C8\uB2E4. \uC0AC\uC6A9 \uBC29\uBC95\uC740 monochrome_example \uC608\uC81C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC560\uC14B\uC744 \uC0DD\uC131\uD560 \uB54C \uACBD\uB85C\uC640 \uD30C\uC77C \uC774\uB984\uC5D0\uC11C \uACF5\uBC31\uC774 \uAC10\uC9C0\uB418\uBA74 \uC880 \uB354 \uC27D\uAC8C \uC774\uD574\uD560 \uC218 \uC788\uB294 \uC624\uB958 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C ST-Link Utility Release 3.7\uC774 \uC124\uCE58\uB418\uC5B4 \uC788\uB2E4\uB294 \uAC00\uC815 \uD558\uC5D0 \uBAA8\uB4E0 ST \uBCF4\uB4DC\uB97C \uBA85\uB839\uC904\uC744 \uD1B5\uD574 \uD50C\uB798\uC2F1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. 'make -f target/ST/`, `<`, `board`, `>`, `/Makefile flash'\uB97C \uC0AC\uC6A9\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC04\uD3B8\uD558\uAC8C \uBE4C\uB4DC\uD558\uC5EC \uC5F0\uACB0\uB41C \uBCF4\uB4DC\uB85C \uD50C\uB798\uC2F1\uD558\uBA74 \uB429\uB2C8\uB2E4. \uD50C\uB798\uC2F1 \uACFC\uC815\uC5D0\uC11C \uC2DC\uAC04 \uC81C\uD55C\uC5D0 \uAC78\uB9AC\uBA74 Windows\uC5D0\uC11C \uC7A5\uCE58 \uAD00\uB9AC\uC790\uB85C \uC774\uB3D9\uD558\uC5EC \u201CDisk drives\u201D \uC544\uB798\uC5D0 \uC788\uB294 "MBED microcontroller USB Device"\uB97C \uBE44\uD65C\uC131\uD654\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 gcc cross \uCEF4\uD30C\uC77C\uB7EC \uBC84\uC804 ## Version 4.9.3 {#version-493}\uACFC \uD568\uAED8 touchgfx-env 2.5\uBC84\uC804\uC774 \uC0C8\uB86D\uAC8C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC804 \uBC84\uC804\uC778 4.8.4\uB294 \uB4DC\uBB3C\uC9C0\uB9CC Cortex-M7 \uCF54\uC5B4\uC5D0\uC11C \uC798\uBABB\uB41C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBCF4\uB4DC \uC9C0\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F7xx \uD504\uB85C\uC138\uC11C\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746G-DISCO \uBC0F STM32756G-EVAL \uBCF4\uB4DC\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `DSI \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uD0D1\uC7AC\uB41C STM32F469 \uD504\uB85C\uC138\uC11C\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32469I-EVAL \uBC0F STM32469I-Discovery \uBCF4\uB4DC\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C "rotate90"\uC744 \uC0AC\uC6A9\uD560 \uB54C TextureMapper\uC640 ScaleableImage\uAC00 \uC774\uBBF8\uC9C0\uB97C \uC815\uD655\uD558\uAC8C \uB4DC\uB85C\uC789\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F4DMA.cpp\uC5D0\uC11C \uC7A0\uC7AC\uC801 \uCD08\uAE30\uD654 \uC21C\uC11C \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E8\uC77C \uAE00\uAF34\uC5D0\uC11C \uAE00\uB9AC\uD504 \uC218\uAC00 32768\uAC1C\uB85C \uC81C\uD55C\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC758\uB3C4\uD55C \uB300\uB85C \uAE00\uAF34 1\uAC1C\uB2F9 \uAE00\uB9AC\uD504 \uC218\uB97C 65536\uAC1C\uAE4C\uC9C0 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E8\uC77C \uD504\uB808\uC784\uBC84\uD37C \uBAA8\uB4DC\uC5D0\uC11C hal.lockDMAToFrontPorch(false)\uAC00 \uC544\uBB34\uB7F0 \uD6A8\uACFC\uAC00 \uC5C6\uB358 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uD2B8\uC5D0 \uAC1C\uD589 \uBB38\uC790\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA74 ButtonWithLabel\uC774 \uD14D\uC2A4\uD2B8\uB97C \uC138\uB85C \uBC29\uD5A5\uC73C\uB85C \uC815\uD655\uD788 \uC911\uC559\uC5D0 \uBC30\uCE58\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-430"
  }), `\uBC84\uC804 4.3.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2015\uB144 6\uC6D4 8\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TextureMapper \uC704\uC82F\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. TextureMapper\uB294 \uB7F0\uD0C0\uC784 \uC2DC 2D \uB610\uB294 3D\uB85C \uD655\uB300/\uCD95\uC18C\uB418\uAC70\uB098 \uD68C\uC804\uD558\uB294 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uACE0\uB3C4\uB85C \uCD5C\uC801\uD654\uB41C \uC774\uBBF8\uC9C0 \uB80C\uB354\uB7EC\uC785\uB2C8\uB2E4. \uC774 \uC704\uC82F\uC740 \uC774\uBBF8\uC9C0\uC758 \uACE0\uAE09 \uD68C\uC804 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uCC98\uB9AC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB9E4\uB274\uC5BC \uB610\uB294 texture_mapper_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. \uC0BC\uAC01\uD615\uACFC \uD574\uB2F9\uD558\uB294 \uC8FC\uC0AC\uC120\uC744 \uB4DC\uB85C\uC789\uD560 \uC218 \uC788\uB294 \uBA54\uC18C\uB4DC\uB85C drawTextureMapTriangle\uACFC drawTextureMapScanLine\uC774 LCD\uC5D0 \uC0C8\uB86D\uAC8C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC54C\uD30C \uCC44\uB110 \uB514\uB354\uB9C1 \uC54C\uD30C \uCC44\uB110\uC774 \uD3EC\uD568\uB41C \uC774\uBBF8\uC9C0\uB294 \uC54C\uD30C \uCC44\uB110\uC5D0 \uB514\uB354\uB9C1\uC774 \uC801\uC6A9\uB418\uC5B4 \uC54C\uD30C \uADF8\uB798\uB514\uC5B8\uD2B8\uAC00 \uB354\uC6B1 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uD45C\uD604\uB429\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uCF54\uB4DC \uC608\uC81C \uB610\uB294 \uB9E4\uB274\uC5BC\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1BPP(\uBAA8\uB178\uD06C\uB86C) \uBE44\uD2B8\uB9F5 \uC555\uCD95. \uC774\uBBF8\uC9C0 \uD615\uC2DD \uC635\uC158\uC73C\uB85C BW_RLE\uAC00 \uCD94\uAC00\uB418\uC5B4 \uC77C\uBC18\uC801\uC778 \uD53D\uC140 \uB2E8\uC704 \uD615\uC2DD\uBCF4\uB2E4 \uCC28\uC9C0\uD558\uB294 \uACF5\uAC04\uC774 \uC801\uC744 \uACBD\uC6B0 \uBE44\uD2B8\uB9F5\uC774 \uC790\uB3D9\uC73C\uB85C \uB7F0 \uAE38\uC774\uB85C \uC778\uCF54\uB529\uB429\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 \uBE44\uD2B8\uB9F5\uC774 \uCC28\uC9C0\uD558\uB294 \uACF5\uAC04\uC774 \uD06C\uAC8C \uC904\uC5B4\uB4ED\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB9E4\uB274\uC5BC\uC5D0\uC11C \uACE0\uAE09 \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2AC\uB77C\uC774\uB354 \uC704\uC82F\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB9E4\uB274\uC5BC \uB610\uB294 slider_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Makefiles\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC5B4 make-4.1\uC5D0\uC11C\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LPC4088 \uD504\uB85C\uC138\uC11C\uC640 Embedded Artists LPC4088 Display Module \uBAA8\uB4DC\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uBE44\uD2B8\uB9F5 \uD30C\uC77C \uC774\uB984\uC5D0 \u201C.int.\u201D \uBB38\uC790\uC5F4\uC744 \uCD94\uAC00\uD558\uC5EC \uAC01 \uBE44\uD2B8\uB9F5\uC744 \uC678\uBD80\uAC00 \uC544\uB2CC \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C MoveAnimator, FadeAnimator \uBC0F ZoomAnimationImage\uC5D0 cancelMoveAnimation/cancelFadeAnimation/cancelZoomAnimation \uBA54\uC18C\uB4DC\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uC874\uC758 4.X \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uD638\uD658\uB429\uB2C8\uB2E4. touchgfx \uD3F4\uB354\uB9CC \uBCC0\uACBD\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC124\uBA85\uC11C\uC5D0\uC11C \uC54C\uB824\uC9C4 \uBB38\uC81C\uB97C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC815\uBCF4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\uC758 \uD3C9\uAC00 \uBC84\uC804\uC740 \uC0AC\uC804\uC5D0 \uCEF4\uD30C\uC77C\uB41C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC544\uB2CC, \uD558\uB4DC\uC6E8\uC5B4 \uCD94\uC0C1\uD654 \uACC4\uCE35\uC5D0 \uD544\uC694\uD55C \uC18C\uC2A4 \uCF54\uB4DC\uC640 \uD568\uAED8 \uBC30\uD3EC\uB429\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uD3C9\uAC00 \uBC84\uC804\uC744 \uC9C0\uC6D0\uB418\uB294 \uD3C9\uAC00 \uBCF4\uB4DC\uB85C \uC81C\uD55C\uD558\uC9C0 \uC54A\uACE0 \uB9DE\uCDA4\uD615 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uC774\uC2DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD3C9\uAC00 \uBC84\uC804\uC5D0\uB294 TouchGFX \uC6CC\uD130\uB9C8\uD06C\uAC00 \uAC04\uAC04\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB80C\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998\uC774 \uAC1C\uC120\uB418\uC5B4 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC774 \uC904\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 \uBC84\uC804 ## Version 4.2.0 {#version-420} \uC5D0 \uBE44\uD574 GUI \uC791\uC5C5 \uC2A4\uD0DD\uC744 \uC57D 1400\uBC14\uC774\uD2B8\uAE4C\uC9C0 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC2E4\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB530\uB77C \uB2E4\uB984). \uADF8 \uBC16\uC5D0 \uACE0\uC815 \uD560\uB2F9\uB418\uB294 \uBA54\uBAA8\uB9AC\uB3C4 1KB\uAC00\uB7C9 \uAC10\uC18C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD45C\uC2DC\uD560 \uC218 \uC788\uB294 \uC704\uC82F\uC758 \uCD5C\uB300 \uAC1C\uC218\uC778 150\uC774 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `640x480 \uD574\uC0C1\uB3C4\uC640 480x272 \uD574\uC0C1\uB3C4\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB450 \uAC00\uC9C0 Deom\uAC00 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5, \uADF8\uB798\uD504, \uAD6D\uC81C\uD654, \uCEE4\uC2A4\uD140 \uC704\uC82F\uACFC \uD568\uAED8 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Drawable.setPosition()\uC774 setXY(), setWidth() \uBC0F setHeight()\uB97C \uD638\uCD9C\uD558\uC5EC \uC11C\uBE0C \uD074\uB798\uC2F1(subclassing)\uC774 \uB354\uC6B1 \uC26C\uC6CC\uC84C\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC790\uCCB4 \uD398\uC778\uD130\uB97C \uAD6C\uD604\uD560 \uB54C\uB294 \uAE30\uBCF8 \uD074\uB798\uC2A4\uB85C AbstractPainterRGB565\uC640 AbstractPainterBW\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CanvasWidgets\uC5D0 setAlpha() \uBA54\uC18C\uB4DC\uC640 getAlpha() \uBA54\uC18C\uB4DC\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 Painter \uD074\uB798\uC2A4\uB294 \uC774\uAC83\uC744 \uAD6C\uD604\uD558\uAC70\uB098 AbstractPainterRGB565 \uD074\uB798\uC2A4\uC5D0\uC11C \uC0C1\uC18D\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB4F1\uB85D \uAC00\uB2A5\uD55C \uD0C0\uC774\uBA38 \uC704\uC82F\uC758 \uCD5C\uB300 \uAC1C\uC218\uAC00 16\uAC1C\uC5D0\uC11C 24\uAC1C\uB85C \uB298\uC5B4\uB0AC\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx-env\uAC00 2.4\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD658\uACBD\uC5D0\uC11C \uB354 \uC774\uC0C1 \uC2E0\uD638\uC74C\uC774 \uC6B8\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C STM324x9I-EVAL \uBCF4\uB4DC \uC9C0\uC6D0 \uD328\uD0A4\uC9C0\uB294 STMCubeF4 \uB4DC\uB77C\uC774\uBC84\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Screen::handleGestureEvent\uAC00 x/y\uB97C \uC0C1\uB300 \uC88C\uD45C\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB3D9\uC77C\uD55C \uCE94\uBC84\uC2A4\uC5D0\uC11C moveTo()\uB97C 2\uD68C \uC774\uC0C1 \uC0AC\uC6A9\uD574 \uC5EC\uB7EC \uAC1D\uCCB4\uB97C \uB4DC\uB85C\uC789\uD560 \uB54C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uD655\uB300/\uCD95\uC18C\uC5D0 \uB530\uB978 ZoomAnimationImage \uC774\uB3D9 \uC2DC \uC815\uD655\uD55C \uC644\uD654 \uBC29\uC815\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 PainterRGB565\uAC00 \uB179\uC0C9 \uC54C\uD30C\uB97C \uC815\uD655\uD558\uAC8C \uBE14\uB80C\uB529\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C RadioButtonGroup\uC774 \uCF5C\uBC31\uC744 0\uC73C\uB85C \uCD08\uAE30\uD654\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uD22C\uBA85\uB3C4\uAC00 \uC124\uC815\uB41C \uBE44\uD2B8\uB9F5\uC5D0\uC11C ScalableImage\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 AnimatedImage\uAC00 \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uC2DC\uC791\uACFC \uB05D\uC744 \uB450 \uBC88 \uD45C\uC2DC\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 CanvasWidget::getMinimalRect()\uC758 \uAE30\uBCF8 \uAD6C\uD604\uCCB4\uAC00 \uC0C1\uC704 \uB178\uB4DC\uC5D0 \uB300\uD55C \uC88C\uD45C\uB97C \uBC18\uD658\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 ScrollableContainer\uAC00 \uC624\uB958\uB85C \uC778\uD574 \uBAA8\uB4E0 \uC2E4\uD589 \uC774\uBCA4\uD2B8(tick)\uC5D0\uC11C \uD0C0\uC774\uBA38 \uC704\uC82F\uC73C\uB85C \uB4F1\uB85D\uB418\uC9C0 \uC54A\uC544\uC11C \uB2E4\uB978 \uD0C0\uC774\uBA38 \uAE30\uBC18 \uC791\uC5C5\uC5D0 \uC0AC\uC6A9\uD558\uAE30\uAC00 \uC5B4\uB824\uC6E0\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScalableImage\uC640 ZoomAnimationImage\uAC00 \uC131\uB2A5\uC744 \uB192\uC774\uB294 \uB370 \uCD5C\uC801\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-420"
  }), `\uBC84\uC804 4.2.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2015\uB144 1\uC6D4 14\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB80C\uB354\uB9C1 \uC131\uB2A5\uC774 \uD06C\uAC8C \uAC1C\uC120\uB418\uC5B4 \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 \uD504\uB808\uC784\uC744 \uB80C\uB354\uB9C1\uD558\uB294 \uC2DC\uAC04\uC774 25% \uAC10\uC18C\uD569\uB2C8\uB2E4. \uCC38\uACE0: \uC774 \uCD5C\uC801\uD654 \uAE30\uB2A5\uC740 \uBAA8\uB4E0 \uD0C0\uAC9F\uC5D0\uC11C \uC720\uD6A8\uD55C \uAC83\uC740 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC5D0 \uC218\uB3D9\uC73C\uB85C \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4. \uAE30\uC874 \uC774\uC2DD\uC5D0 \uC774 \uCD5C\uC801\uD654 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD558\uB294 \uBC29\uBC95\uC740 \uC774\uC2DD \uAC00\uC774\uB4DC\uC5D0\uC11C "\uCD5C\uC801\uD654" \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. \uC774 \uCD5C\uC801\uD654 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD560 \uAC83\uC744 \uC801\uADF9 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uC774 \uCD5C\uC801\uD654 \uAE30\uB2A5\uC740 ## Version 4.2.0 {#version-420} \uBCF4\uB4DC \uD328\uD0A4\uC9C0\uC5D0\uC11C \uD574\uB2F9\uD558\uB294 \uBAA8\uB4E0 \uD3C9\uAC00 \uBCF4\uB4DC\uC5D0 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8\uB85C\uC6B4 \uC8FC\uC694 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uD558\uD615\uC0C1\uC744 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1 \uCC98\uB9AC\uD558\uC5EC \uB4DC\uB85C\uC789\uD560 \uC218 \uC788\uB294 CanvasWidgets\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD604\uC7AC\uB294 \uB77C\uC778\uACFC \uC6D0 \uADF8\uB9AC\uACE0 \uC880 \uB354 \uD3EC\uAD04\uC801\uC778 \uD615\uC0C1\uC774 \uAD6C\uD604\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. CanvasWidgets\uC740 \uBD88\uD22C\uBA85 \uC0C9\uC0C1(+ \uC54C\uD30C), \uBE44\uD2B8\uB9F5(\uC54C\uD30C \uD3EC\uD568) \uB610\uB294 \uCEE4\uC2A4\uD140 \uD398\uC778\uD130\uB85C \uD398\uC778\uD305\uB429\uB2C8\uB2E4. \uC124\uBA85\uC11C\uC5D0\uC11C \uCE94\uBC84\uC2A4 \uC704\uC82F\uACFC \uD398\uC778\uD130\uC5D0 \uB300\uD55C \uB0B4\uC6A9\uC744 \uC77D\uC5B4\uBCF4\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil \uCEF4\uD30C\uC77C\uB7EC\uC640 uVision4 IDE\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. Keil\uAC00 \uC9C0\uC6D0\uB418\uB294 \uD0C0\uAC9F \uBAA9\uB85D\uC740 \uC124\uBA85\uC11C\uC758 TouchGFX \uBC30\uD3EC\uC5D0\uC11C \u201C\uC9C0\uC6D0\uB418\uB294 \uD558\uB4DC\uC6E8\uC5B4\u201D \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C ZoomAnimationImage, MoveAnimator \uBC0F FadeAnimator\uC5D0\uC11C \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uC791 \uC9C0\uC5F0 \uC2DC\uAC04\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LPC4350(\uB0B4\uBD80 \uD50C\uB798\uC2DC \uC5C6\uC74C)\uC774 \uD0D1\uC7AC\uB41C 4.3" TouchGFX Demo \uBCF4\uB4DC\uC5D0 \uC5D0 \uB300\uD55C \uBCF4\uB4DC \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `RadioButton \uBC0F RadioButtonGroup \uC704\uC82F\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. app/examples/radio_button_example\uACFC \uC124\uBA85\uC11C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C LPC43XX\uACFC LPC1788\uC774 DMA\uB97C \uC0AC\uC6A9\uD574 \uC9C1\uC0AC\uAC01\uD615\uC744 \uCC44\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Visual Studio 2013\uC774 \uC9C0\uC6D0\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio 2015 \uD504\uB9AC\uBDF0 \uBC84\uC804\uC5D0 \uB300\uD55C \uC608\uBE44 \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uC14B \uC0DD\uC131 \uC131\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `canvas_widget_example\uC774 \uC608\uC81C \uB514\uB809\uD130\uB9AC\uC5D0 \uC0C8\uB85C \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C NO_USING_NAMESPACE_TOUCHGFX \uAE30\uD638\uB97C \uC815\uC758\uD558\uC5EC \uAC01\uC885 \uD5E4\uB354 \uD30C\uC77C\uC5D0 \uC874\uC7AC\uD558\uB294 "using namespace touchgfx\u201D\uB97C \uD53C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `TouchGFX env`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC258\uC744 \uC2DC\uC791\uD560 \uB54C \uD45C\uC2DC\uB418\uB294 \uBA54\uC2DC\uC9C0\uAC00 \uC815\uD655\uD55C \uC608\uC81C \uACBD\uB85C\uB85C \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1bpp \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uAC00\uB85C \uBC0F/\uB610\uB294 \uC138\uB85C\uAC00 8\uC758 \uBC30\uC218\uAC00 \uC544\uB2D0 \uB54C \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\uC5D0\uC11C CANCEL \uC774\uBCA4\uD2B8\uAC00 \uC815\uD655\uD55C \uD558\uC704 \uB178\uB4DC\uB85C \uAC04\uD639 \uC704\uC784\uB418\uC9C0 \uC54A\uC544\uC11C \uC608\uB97C \uB4E4\uC5B4 SC \uC601\uC5ED \uBC16\uC73C\uB85C \uB04C\uC5B4\uC62C \uB54C \uBC84\uD2BC\uC774 \uB204\uB984 \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD68C\uC804\uD615 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC0AC\uC6A9\uD574 chromArt \uAE00\uAF34\uC744 \uB80C\uB354\uB9C1\uD560 \uB54C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0A4\uBCF4\uB4DC \uC704\uC82F\uC778 setTouchable(false)\uC774 \uC544\uBB34 \uD6A8\uACFC\uAC00 \uC5C6\uB358 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Freescale K70 DMA\uAC00 TCD0_CSR\uC5D0\uC11C \uD574\uB2F9\uD558\uB294 DONE \uBE44\uD2B8\uB97C \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST \uD504\uB85C\uC138\uC11C\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uAE30\uBCF8 \uBC29\uD5A5\uC774 \uC544\uB2CC \uB2E4\uB978 \uBC29\uD5A5\uC77C \uB54C ChromArt\uAC00 \uD68C\uC804\uD558\uB294 \uD14D\uC2A4\uD2B8\uB97C \uB80C\uB354\uB9C1\uD558\uBA74\uC11C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBCF4\uB4DC \uC9C0\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Embedded Artists LPC4357DevKit \uBCF4\uB4DC \uD328\uD0A4\uC9C0: CPU\uAC00 204Mhz\uB85C \uD074\uB7ED\uD0B9\uB429\uB2C8\uB2E4(\uC774\uC804 96Mhz). \uC774\uC81C\uB294 NOR\uC774 \uC544\uB2CC SPIFI \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uC874\uC758 4.X \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uD638\uD658\uB429\uB2C8\uB2E4. touchgfx \uD3F4\uB354\uB9CC \uBCC0\uACBD\uD558\uBA74 \uB429\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC815\uBCF4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC124\uBA85\uC11C\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-411"
  }), `\uBC84\uC804 4.1.1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2014\uB144 10\uC6D4 29\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBBF9\uC2A4\uC778: MoveAnimator\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. MoveAnimator \uBBF9\uC2A4\uC778\uC758 \uCD94\uAC00\uB85C \uC774\uC81C \uD15C\uD50C\uB9BF \uD074\uB798\uC2A4 T\uAC00 \uD604\uC7AC \uC704\uCE58\uC5D0\uC11C \uC9C0\uC815\uB41C \uCD5C\uC885 \uC704\uCE58\uB85C \uC774\uB3D9\uD558\uB294 \uD6A8\uACFC\uB97C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. app/example/move_fade_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBBF9\uC2A4\uC778: FadeAnimator\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. FadeAnimator \uBBF9\uC2A4\uC778\uC758 \uCD94\uAC00\uB85C \uC774\uC81C \uD15C\uD50C\uB9BF \uD074\uB798\uC2A4 T\uAC00 \uC54C\uD30C \uD398\uC774\uB4DC\uB97C \uD604\uC7AC \uC54C\uD30C \uAC12\uC5D0\uC11C \uC9C0\uC815\uB41C \uCD5C\uC885 \uC54C\uD30C \uAC12\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. app/example/move_fade_example\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C ScalableImage\uC640 ZoomAnimationImage\uAC00 \uD53D\uC140 \uBE44\uD2B8\uB9F5\uB2F9 \uC54C\uD30C\uC640 \uBE44\uD2B8\uB9F5\uB2F9 \uC54C\uD30C\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C ScalableImage\uC640 ZoomAnimationImage\uAC00 ARGB8888 \uD615\uC2DD \uBE44\uD2B8\uB9F5\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0A4\uBCF4\uB4DC \uC704\uC82F\uC758 \uB80C\uB354\uB9C1\uC774 \uC798\uBABB\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\uC5D0 \uBC30\uCE58\uB418\uB294 coords != {0,0}\uC744 \uC0AC\uC6A9\uD574 \uCEE8\uD14C\uC774\uB108\uC5D0 \uBC30\uCE58\uD560 \uB54C \uC704\uC82F\uC5D0\uC11C \uB4DC\uB798\uADF8 \uC774\uBCA4\uD2B8 \uC88C\uD45C\uAC00 \uC798\uBABB\uB418\uB294 \uBC84\uADF8\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Application \uD074\uB798\uC2A4\uAC00 registerTimerWidget\uACFC unregisterTimerWidget\uC774 \uD2B9\uC815 \uC704\uC82F\uC5D0\uC11C \uD638\uCD9C\uB418\uB294 \uD69F\uC218\uB97C \uC815\uD655\uD558\uAC8C \uCD94\uC801\uD569\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uC55E\uC11C \uBA87 \uCC28\uB840 \uB4F1\uB85D\uB418\uC5C8\uB2E4\uBA74 \uB3D9\uC77C\uD55C \uD69F\uC218\uC758 \uBBF8\uB4F1\uB85D\uC774 \uC788\uC5B4\uC57C\uB9CC \uC704\uC82F\uC774 \uB354 \uC774\uC0C1 tick \uC774\uBCA4\uD2B8\uB97C \uC218\uC2E0\uD558\uC9C0 \uC54A\uB294\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC77C\uBD80 ZoomAnimationImage \uD568\uC218\uAC00 \uAC00\uC0C1 \uD568\uC218\uC774\uC5B4\uC57C \uD558\uB294\uB370\uB3C4 \uAC00\uC0C1 \uD568\uC218\uAC00 \uC544\uB2C8\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC77C\uBD80 \uC704\uC82F\uC5D0\uC11C getter \uD568\uC218\uAC00 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uC874\uC758 4.X \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uD638\uD658\uB429\uB2C8\uB2E4. touchgfx \uD3F4\uB354\uB9CC \uBCC0\uACBD\uD558\uBA74 \uB429\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-410"
  }), `\uBC84\uC804 4.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2014\uB144 10\uC6D4 17\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uBAA8\uB178\uD06C\uB86C 1BPP \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB9E4\uB274\uC5BC\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB3D9\uC801\uC778 \uC2A4\uD06C\uB9B0 \uD654\uBA74 \uBCC0\uACBD\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4(\uAC00\uB85C/\uC138\uB85C \uBAA8\uB4DC).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBBF8\uC9C0 \uD655\uB300/\uCD95\uC18C\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4(ScalableImage \uBC0F ZoomAnimationImage \uB4DC\uB85C\uC5B4\uBE14 \uCC38\uC870)`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `Demo`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Home Control Demo\uAC00 640x480 \uBAA8\uB4DC\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C Home Control Demo\uAC00 STM324xI-EVAL 5.7" \uBCF4\uB4DC\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBCF4\uB4DC \uC9C0\uC6D0 \uBCC0\uACBD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM324xI-EVAL 5.7" \uBCF4\uB4DC(IAR+gcc)\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `EmbeddedArtists LPC4357DevKit \uBCF4\uB4DC\uC5D0 \uB300\uD55C gcc \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX eval \uBCF4\uB4DC\uC5D0 \uB300\uD55C SPIFI \uCD08\uAE30\uD654\uAC00 \uCD5C\uC801\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uC601\uAD6C\uC801\uC778 \uB4DC\uB85C\uC5B4\uBE14\uC744 ScrollableContainer\uC5D0 \uCD94\uAC00\uD558\uBA74 \uC5B4\uC124\uC158\uC774 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB354 \uD070 \uAE00\uAF34\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE30\uC874\uC758 4.X \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uD638\uD658\uB429\uB2C8\uB2E4. touchgfx \uD3F4\uB354\uB9CC \uBCC0\uACBD\uD558\uBA74 \uB429\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-400"
  }), `\uBC84\uC804 4.0.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB9B4\uB9AC\uC2A4 \uB0A0\uC9DC: 2014\uB144 9\uC6D4 26\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchEvent \uB9AC\uD399\uD1A0\uB9C1(API \uBCC0\uACBD \uC0AC\uD56D):`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::setActive\uC5D0\uC11C Drawable::setTouchable\uB85C \uC774\uB984\uC774 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::isActive\uC5D0\uC11C Drawable::isTouchable\uB85C \uC774\uB984\uC774 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Drawable::hijackTouchEvent\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB4DC\uB85C\uC5B4\uBE14\uC740 \uC774\uC81C \uAE30\uBCF8\uC801\uC73C\uB85C \uD130\uCE58\uAC00 \uAC00\uB2A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C TouchEvent\uB294 \uD56D\uC0C1 \uBAA8\uB4E0 \uCEE8\uD14C\uC774\uB108\uC758 \uD558\uC704 \uB178\uB4DC\uC5D0\uAC8C \uC804\uD30C\uB429\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC5B8\uC5B4\uBCC4 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC640 \uC815\uB82C \uC5F4\uC744 \uC9C0\uC6D0\uD558\uB294 \uAE30\uB2A5\uC774 \uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC124\uBA85\uC11C\uC5D0\uC11C \uC774 \uAE30\uB2A5\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE00\uAF34 \uD615\uC0C1 \uBC0F \uCEE4\uB2DD\uACFC \uAD00\uB828\uD558\uC5EC \uAE00\uAF34 \uB80C\uB354\uB9C1\uC774 \uB300\uD3ED \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uBBAC\uB808\uC774\uD130\uAC00 \uC2A4\uD06C\uB9B0 \uC804\uD658 \uC2DC \uC0C8\uB85C\uC6B4 \uBDF0/\uD504\uB9AC\uC820\uD130/\uC804\uD658 \uD06C\uAE30\uC5D0 \uB300\uD574 \uC5B4\uC124\uC158\uC744 \uD655\uC778\uD569\uB2C8\uB2E4. FrontEndHeap\uC5D0 \uBDF0/\uD504\uB9AC\uC820\uD130/\uC804\uD658\uC5D0 \uB300\uD55C \uC815\uC758\uAC00 \uB204\uB77D\uB418\uC5B4 \uC788\uC73C\uBA74 \uC5B4\uC124\uC158 \uD655\uC778\uC5D0 \uC2E4\uD328\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C TextArea\uC640 ButtonWithLabel\uC774 0\uB3C4, 90\uB3C4, 180\uB3C4 \uB610\uB294 270\uB3C4\uB85C \uD68C\uC804\uD558\uB294 \uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD2B9\uBCC4\uD55C \uACBD\uC6B0\uC5D0 ButtonWithLabel\uC5D0\uC11C \uD14D\uC2A4\uD2B8\uB97C \uC911\uC559\uC5D0 \uBC30\uCE58\uD558\uB294 \uAE30\uB2A5\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC9C0\uC6D0\uB418\uB294 ST \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1(4 \uBC0F 8bpp) \uAE30\uB2A5\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBE44\uD2B8\uB9F5 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uC800\uC7A5\uB41C \uBAA8\uB4E0 \uD56D\uBAA9\uC744 \uC678\uBD80 RAM\uC5D0 \uCE90\uC2F1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Freescales K70 MCU\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBC88\uC5ED \uC2DC\uD2B8: "\\`, `<`, `"\uC640 "\\`, `>`, `"\uC758 \uC778\uC2A4\uD134\uC2A4\uAC00 \uAC01\uAC01 "`, `<`, `"\uC640 "`, `>`, `"\uB85C \uBCC0\uD658\uB429\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C "\\`, `<`, `Not a wildcard\\`, `>`, `"\uB97C \uC0AC\uC6A9\uD558\uC5EC "`, `<`, `Not a wildcard`, `>`, `\u201D \uAC19\uC740 \uB9AC\uD130\uB7F4 \uD574\uC11D \uBB38\uC790\uC5F4\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `NXP LPC18XX \uC2DC\uB9AC\uC988 MCU\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 \uD640\uC218 \uB108\uBE44\uC774\uACE0 \uC54C\uD30C \uAC12\uC774 255 \uBBF8\uB9CC\uC778 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uBC1C\uC0DD\uD588\uB358 \uB80C\uB354\uB9C1 \uC624\uB958\uAC00 \uD574\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCD08\uAE30\uD654\uB418\uC9C0 \uC54A\uB294 textArea\uAC00 \uC788\uC744 \uB54C TextArea::getTextHeight\uB97C \uC815\uD655\uD558\uAC8C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C TextAreaWithWildcard::getTextWidth\uC5D0 \uC640\uC77C\uB4DC\uCE74\uB4DC \uD14D\uC2A4\uD2B8\uC758 \uB108\uBE44\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C gcc Makefiles\uC5D0 \uC774\uBBF8\uC9C0 \uC560\uC14B\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `.BMP\uC640 `), `.PNG\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uD2B8 \uC2DC\uD2B8\uC5D0\uC11C \uC5B4\uB5A4 \uBC88\uC5ED\uC774\uB4E0\uC9C0 \uC120\uD589 \uBC0F \uD6C4\uD589 \uACF5\uBC31\uC744 \uC790\uB974\uC9C0 \uB9C8\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 8bpp\uC77C \uB54C \uAE00\uAF34 \uBCC0\uD658 \uB3C4\uAD6C\uAC00 \uAE00\uAF34 \uB370\uC774\uD130\uB97C \uC62C\uBC14\uB974\uAC8C \uC0DD\uC131\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ButtonWithIcon::setBitmaps - \uC758\uB3C4\uC801\uC778 \uAC00\uC0C1 \uD568\uC218 \uC7AC\uC815\uC758\uB97C \uC704\uD574 IAR \uACBD\uACE0\uB97C \uBB34\uC2DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 ButtonWithIcon\uC774 \uB4DC\uB85C\uC6B0 \uAE30\uB2A5\uC744 \uCD5C\uC801\uD654\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB9E4\uC6B0 \uB4DC\uBB38 \uACBD\uC6B0\uC9C0\uB9CC \uC774\uC804\uC5D0\uB294 \uD14D\uC2A4\uD2B8\uAC00 \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC744 \uB2E4\uC18C \uBC97\uC5B4\uB098\uC11C \uC791\uC131\uB418\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchEvent \uB9AC\uD329\uD1A0\uB9C1\uC73C\uB85C \uC778\uD574 \uD568\uC218 \uC774\uB984\uC744 \uC0C1\uD669\uC5D0 \uB530\uB77C \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uC704\uC82F \uB610\uB294 \uCEE8\uD14C\uC774\uB108\uAC00 \uD130\uCE58 \uC774\uBCA4\uD2B8\uB97C \uC218\uC2E0\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCEE4\uC2A4\uD140 \uC704\uC82F \uB610\uB294 \uCEE8\uD14C\uC774\uB108\uC5D0\uB3C4 \uBA85\uC2DC\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uC804\uC5D0\uB294 hijackTouchEvent\uB97C \uC0AC\uC6A9\uD574 \uD558\uC704 \uB178\uB4DC\uAC00 \uD130\uCE58 \uC774\uBCA4\uD2B8\uB97C \uC218\uC2E0\uD558\uC9C0 \uBABB\uD558\uB3C4\uB85D \uD588\uB2E4\uBA74 \uC774\uC81C\uB294 \uADF8\uB807\uC9C0 \uC54A\uACE0 \uBAA8\uB4E0 \uD558\uC704 \uB178\uB4DC\uB97C \uD130\uCE58\uD560 \uC218 \uC5C6\uB3C4\uB85D \uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uBBAC\uB808\uC774\uD130\uC758 Main.cpp\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uB824\uBA74 TypedText::registerTypedTextDatabase(TypedTextDatabase::getInstance(), TypedTextDatabase::getInstanceSize())\uB97C Texts::setLanguage(0)\uB85C \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. \uB610\uD55C \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uD2B9\uC815 \uC5B8\uC5B4\uB97C \uC9C0\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4(\uC608: Texts::setLanguage(GB)). \uC774\uB54C #include `, `<`, `texts/TextKeysAndLanguages.hpp`, `>`, `\uB3C4 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8\uB97C \uB2E4\uC2DC \uBE4C\uB4DC\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC815\uBCF4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX \uB9E4\uB274\uC5BC\uC5D0\uC11C \uB9CE\uC740 \uBD80\uBD84\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-310"
  }), `\uBC84\uC804 3.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `FDI uEZGUI-1788-70WVT \uD3C9\uAC00 \uBCF4\uB4DC(NXP LPC-1788 Cortex M3)\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Mjolner TouchGFX Demo Board Rev. 1.1 \uD3C9\uAC00 \uBCF4\uB4DC(NXP LPC-4353 Cortex M4/M0 4.3")\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C \uC560\uC14B/\uC774\uBBF8\uC9C0 \uD3F4\uB354\uC5D0 \uC0C8\uB85C\uC6B4 \uC774\uBBF8\uC9C0\uAC00 \uCD94\uAC00\uB418\uBA74 Visual Studio \uBE4C\uB4DC\uAC00 BitmapDatabase.h\uB97C \uB2E4\uC2DC \uBE4C\uB4DC\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD574 Visual Studio .props \uD30C\uC77C\uC5D0\uC11C TouchGFXReleasePath\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uAE30\uC5D0\uC11C \uD30C\uC77C\uC744 \uD3B8\uC9D1\uD569\uB2C8\uB2E4. "touchgfx\\"\uB97C \uCD94\uAC00\uD574 \uACBD\uB85C\uB97C \uD655\uC7A5\uD574\uC57C \uD569\uB2C8\uB2E4. template_application\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD574 Visual Studio \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C(.vcxproj file)\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uAE30\uC5D0\uC11C \uD30C\uC77C\uC744 \uD3B8\uC9D1\uD569\uB2C8\uB2E4. \uC591\uC2DD\uC5D0 \uC788\uB294 \uBAA8\uB4E0 \uACBD\uB85C\uB97C "$(TouchGFXReleasePath)\\framework\\config\\msvs\\touchgfx_prebuild.targets"\uC5D0\uC11C "$(TouchGFXReleasePath)\\config\\msvs\\touchgfx_prebuild.targets"\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC815\uBCF4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD558\uB4DC\uC6E8\uC5B4 \uCD94\uC0C1\uD654 \uACC4\uCE35 \uC544\uD0A4\uD14D\uCC98\uAC00 \uBC14\uB00C\uC5B4\uC11C \uC774\uC81C\uB294 \uB2E4\uC591\uD55C \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131\uC694\uC18C(MCU \uBC0F \uB4DC\uB77C\uC774\uBC84)\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uBAA8\uB4E0 \uACF5\uD1B5 \uCF54\uB4DC\uB97C \uC5EC\uB7EC \uD0C0\uAC9F \uBCF4\uB4DC \uC0AC\uC774\uC5D0\uC11C \uACF5\uC720\uD569\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C TouchGFX\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131\uC694\uC18C\uAC00 \uC774\uBBF8 1\uAC1C \uC774\uC0C1 \uD3EC\uD568\uB418\uC5B4 \uC788\uB2E4\uBA74 \uC0C8\uB85C\uC6B4/\uCEE4\uC2A4\uD140 \uBCF4\uB4DC\uB97C \uB9E4\uC6B0 \uC27D\uAC8C \uC774\uC2DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-300"
  }), `\uBC84\uC804 3.0.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC0C8 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio 2010/2012\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC54C\uD30C \uCC44\uB110\uC774 \uD3EC\uD568\uB41C png \uC774\uBBF8\uC9C0\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uC14B/\uBE44\uD2B8\uB9F5 \uD3F4\uB354\uC758 \uD558\uC704 \uD3F4\uB354\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST STM32F4X9I-EVAL \uD3C9\uAC00 \uBCF4\uB4DC\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Robert Penner\uC758 \uC644\uD654 \uBC29\uC815\uC2DD\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4(touchgfx/EasingEquations.hpp \uCC38\uC870).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uADF8\uB7A8: \uC785\uB825\uB418\uB294 \uC774\uBBF8\uC9C0 \uD30C\uC77C \uC774\uB984\uC5D0 \uB300\uD55C \uC720\uD6A8\uC131 \uAC80\uC0AC\uAC00 \uCD94\uAC00\uB418\uC5B4 \uC774\uB984\uC774 \uC22B\uC790\uB85C \uC2DC\uC791\uB418\uC5B4\uC11C\uB294 \uC548 \uB418\uACE0, \uC54C\uD30C\uBCB3\uACFC \uC22B\uC790\uC758 \uC870\uD569\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uADF8\uB7A8: \uB300\uC18C\uBB38\uC790\uB97C \uAD6C\uBD84\uD558\uC9C0 \uC54A\uB294 \uD30C\uC77C \uC774\uB984\uC744 \uAC80\uC0AC\uD558\uC5EC \uC785\uB825 \uBAA9\uB85D\uC5D0 \uBCF5\uC0AC\uD558\uB294 \uAE30\uB2A5\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C: bpp \uBC0F font_size \uAC12\uC5D0 \uB300\uD55C \uC720\uD6A8\uC131 \uAC80\uC0AC\uB97C \uC911\uB2E8\uD558\uB294 \uBE4C\uB4DC\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer: \uC774\uC81C setScrollbarPadding, setScrollbarWidth, setScrollbarColor \uBC0F setScrollbarAlpha\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer: ScrollThreshold\uC758 \uAE30\uBCF8\uAC12\uC744 1\uC774 \uC544\uB2CC 5\uD53D\uC140\uB85C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAE00\uAF34 \uC54C\uD30C \uBE14\uB80C\uB529\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4(TextArea::setAlpha(uint8_t alpha))`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert\uAC00 \uB450 \uAC1C\uC758 \uB2E4\uB978 \uCD9C\uB825 \uD615\uC2DD\uC778 RGB565\uC640 ARGB8888\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ImageConvert - \uC54C\uD30C \uCC44\uB110\uC774 \uD3EC\uD568\uB41C \uC774\uBBF8\uC9C0\uC640 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC740 \uC54A\uC740 \uC774\uBBF8\uC9C0\uC5D0 \uB300\uD574 \uCD9C\uB825 \uD615\uC2DD\uC744 \uC81C\uC5B4\uD560 \uC218 \uC788\uB294 \uB450 \uAC00\uC9C0 \uC635\uC158\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB300\uADDC\uBAA8 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD55C \uB9C1\uCEE4 \uC624\uB958\uB85C \uC778\uD574 MinGW\uAC00 \uC124\uCE58\uB41C Touchgfx \uD658\uACBD\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. g++ \uBC84\uC804\uC774 4.6.2\uC5D0\uC11C 4.8.1\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB0B4\uBD80 RAM \uACF5\uAC04\uC774 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0C0\uAC9F \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uD558\uB4DC\uC6E8\uC5B4 \uCD94\uC0C1\uD654 \uACC4\uCE35\uC758 \uAD6C\uC870\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uBC84\uADF8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0\uB294 lpc4357_emb_artist \uBCF4\uB4DC\uC5D0\uC11C \uCC44\uC6B0\uAE30 \uC5F0\uC0B0(\uBC15\uC2A4 \uC704\uC82F)\uC774 \uCDA9\uB3CC\uC744 \uC77C\uC73C\uCF30\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uBC0F \uAE00\uAF34 \uBCC0\uD658: \uC774\uC81C \uC11C\uB85C \uB2E4\uB978 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uAC00 \uB3D9\uC77C\uD55C \uC18D\uC131\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBBF8\uC9C0 \uBCC0\uD658 \uBC0F \uAE00\uAF34 \uBCC0\uD658: POSIX \uD638\uD658 \uD50C\uB7AB\uD3FC\uC5D0 \uB300\uD55C \uC624\uB958 \uCC98\uB9AC\uAC00 \uAC1C\uC120\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HALSDL: \uC911\uC694\uD55C \uB370\uC774\uD130 \uC720\uD615\uC744 \uC624\uBC84\uD50C\uB85C\uD558\uC9C0 \uB9C8\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C LanguageXX.cpp \uD30C\uC77C\uC774 \uAC1C\uD589 \uBB38\uC790\uB85C \uB05D\uB0A9\uB2C8\uB2E4(\uACBD\uACE0 \uC81C\uAC70).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC81C TextArea::draw\uAC00 \uCD08\uAE30\uD654\uB418\uC9C0 \uC54A\uB294 TypedText\uB97C \uC62C\uBC14\uB974\uAC8C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC5C5\uB370\uC774\uD2B8 \uC808\uCC28`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `assets/bitmaps \uD3F4\uB354\uC640 generated/bitmaps \uD3F4\uB354\uC758 \uC774\uB984\uC744 \uAC01\uAC01 assets/images\uC640 generated/images\uB85C \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX \uD658\uACBD\uC744 \uBC84\uC804 2.0\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC5C5\uB370\uC774\uD2B8\uB41C template_application\uC5D0 \uBA85\uC2DC\uB41C Makefile\uC744 \uB530\uB974\uB3C4\uB85D \uC560\uD50C\uB9AC\uCF00\uC774\uC158 Makefile\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8\uB97C \uB2E4\uC2DC \uBE4C\uB4DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804 \uD22C\uBA85 \uC0C9\uC0C1\uC774 \uD3EC\uD568\uB41C bmp \uC774\uBBF8\uC9C0\uB97C \uC54C\uD30C \uCC44\uB110\uC744 \uC0AC\uC6A9\uD558\uB294 png \uC774\uBBF8\uC9C0\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4. \uC774 \uC791\uC5C5\uC740 imagemagick\uB77C\uACE0 \uD558\uB294 \uBB34\uB8CC \uB3C4\uAD6C\uB97C \uC774\uC6A9\uD574 \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uACFC \uC815\uBCF4\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "mailto:touchgfx-support@mjolner.com"
  }), `touchgfx-support@mjolner.com`), `\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB9DE\uCDA4\uD615 HAL \uAD6C\uD604\uCCB4\uB97C \uC0C8\uB85C\uC6B4 \uAD6C\uC870\uC5D0 \uB9DE\uAC8C \uBC18\uB4DC\uC2DC \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uC815\uBCF4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uC804\uC5D0 bmp \uD615\uC2DD\uC5D0\uC11C \uD22C\uBA85 \uC0C9\uC0C1\uC5D0 \uC0AC\uC6A9\uB418\uC5C8\uB358 "\uB9E4\uC9C1" \uD22C\uBA85 \uC0C9\uC0C1\uC740 \uB354 \uC774\uC0C1 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB300\uC2E0\uC5D0 \uC54C\uD30C \uCC44\uB110\uC774 \uD3EC\uD568\uB41C png \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-220"
  }), `\uBC84\uC804 2.2.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8 \uAE30\uB2A5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAC00\uB85C \uBAA8\uB4DC \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC131\uB2A5/\uB9AC\uC18C\uC2A4 \uBE44\uC6A9 \uC5C6\uC774 \uC138\uB85C \uBAA8\uB4DC\uC5D0 \uB300\uD55C \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE4\uB2DD \uC9C0\uC6D0\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0A4\uBCF4\uB4DC \uC608\uC81C(Energy Micro DK3750 \uD3C9\uAC00 \uBCF4\uB4DC\uB97C \uC704\uD55C IAR \uD504\uB85C\uC81D\uD2B8 \uD3EC\uD568)\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD\uC5D0\uC11C blitCopy \uBA54\uC18C\uB4DC\uB97C \uC704\uD55C \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `HAL\uC5D0\uC11C SyncBackBuffer \uBA54\uC18C\uB4DC\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD\uC5D0\uC11C clearLCD \uBA54\uC18C\uB4DC\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LCD\uC5D0\uC11C fillGradientRect \uBA54\uC18C\uB4DC\uAC00 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ScrollableContainer\uAC00 setScrollbarsVisible(\uBD80\uC6B8 \uD45C\uC2DC \uAC00\uB2A5)\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "version-210"
  }), `\uBC84\uC804 2.1.0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\uAC00 \uC0C1\uC6A9 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uCD9C\uC2DC\uB41C \uCCAB \uBC88\uC9F8 \uB9B4\uB9AC\uC2A4\uC785\uB2C8\uB2E4.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);