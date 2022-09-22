"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4035],{

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

/***/ 22425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class CodeHeader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "code-header"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, this.props.children)));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (CodeHeader);


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

/***/ 61396:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
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
  id: "using-binary-fonts",
  title: "\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "id": "development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "title": "\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-binary-fonts",
    "title": "\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uB3D9\uC801 \uBE44\uD2B8\uB9F5",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"
  },
  "next": {
    "title": "\uD3F0\uD2B8 \uCE90\uC2F1",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/font-cache"
  }
};
const assets = {};


const toc = [{
  value: "\uD3F0\uD2B8 \uBC0F \uD14D\uC2A4\uD2B8 \uC2DC\uC2A4\uD15C \uD074\uB798\uC2A4",
  id: "the-font-and-text-system-classes",
  level: 2
}, {
  value: "\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8 \uC0AC\uC6A9",
  id: "using-binary-fonts",
  level: 2
}, {
  value: "\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB97C \uC0DD\uC131\uD558\uB3C4\uB85D \uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C \uAD6C\uC131\uD558\uAE30",
  id: "configuring-the-font-converter-to-generate-binary-fonts",
  level: 3
}, {
  value: "\uC218\uB3D9 \uAD6C\uC131",
  id: "manual-configuration",
  level: 3
}, {
  value: "\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8 \uC124\uCE58",
  id: "installing-the-binary-font",
  level: 3
}, {
  value: "\uD3F0\uD2B8 \uB9AC\uC14B\uD558\uAE30",
  id: "resetting-a-font",
  level: 3
}, {
  value: "Generating binary fonts in another project",
  id: "generating-binary-fonts-in-another-project",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX\uC5D0\uC11C \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4. The first section contains some in-depth information about the font and text system in TouchGFX that can be beneficial to understand when working with binary fonts. The second section explains how to use binary fonts.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB294 \uD3F0\uD2B8 \uC815\uBCF4\uB97C \uCEF4\uD30C\uC77C\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/src`), `\uC758 .cpp \uD30C\uC77C)\uC5D0 \uC5F0\uACB0\uD558\uB294 \uAE30\uC874 \uBC29\uC2DD\uC744 \uB300\uCCB4\uD560 \uBAA9\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. The main advantages of this approach is to get a smaller application binary and get flexibility in form of providing different sets of fonts with your devices. For example you can pack the Chinese font with devices going to China, and the Japanese font with devices going there.  The drawback of this approach is that the whole binary font needs to be loaded to RAM (or memory-mapped flash) which can be a problem if the font is large.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C \uD3F0\uD2B8\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5F0\uACB0\uD588\uC744 \uB54C\uC758 \uAC00\uC7A5 \uD070 \uC774\uC810\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uD14D\uC2A4\uD2B8\uC640 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC744 \uB54C \uD56D\uC0C1 \uC790\uB3D9\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00\uB41C\uB2E4\uB294 \uC810\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC0AC\uC6A9\uBC95\uC774 \uB9E4\uC6B0 \uC27D\uACE0 \uC548\uC804\uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD3F0\uD2B8\uB85C \uC778\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD06C\uAE30\uAC00 \uCEE4\uC9C8 \uC218 \uC788\uB2E4\uB294 \uAC83\uC774 \uB2E8\uC810\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-font-and-text-system-classes"
  }), `\uD3F0\uD2B8 \uBC0F \uD14D\uC2A4\uD2B8 \uC2DC\uC2A4\uD15C \uD074\uB798\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uAE30\uBCF8 \uAD6C\uC131\uC77C \uB54C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uBAA8\uB4E0 \uD14D\uC2A4\uD2B8\uC640 \uD3F0\uD2B8\uC5D0 .cpp \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uB4E4\uC740 \uCEF4\uD30C\uC77C\uB41C \uD6C4, \uC0DD\uC131\uB41C UI \uBC0F \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC640 \uD568\uAED8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5F0\uACB0\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When you show a text on the UI with e.g. a TextArea, you reference the text with a TypedTextId. This TypedTextId is used by the Widgets to find the actual letters in the text. The Widgets will access the texts through the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `touchgfx::Texts`), ` class in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `framework/include/touchgfx/Texts.hpp`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8 \uD074\uB798\uC2A4\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uAC01 \uC5B8\uC5B4\uC758 \uBC88\uC5ED \uD14C\uC774\uBE14\uC744 \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uAC00 \uBC30\uC5F4\uB41C \uD3EC\uC778\uD130 \uBC30\uC5F4\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uBC88\uC5ED \uD14C\uC774\uBE14\uC774\uB780 \uC6D0\uCE59\uC801\uC73C\uB85C \uD574\uB2F9 \uC5B8\uC5B4\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uBAA8\uB4E0 \uBB38\uC790\uC5F4\uC744 \uBAA8\uC544 \uB193\uC740 \uAC83\uC744 \uB9D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",
    noShadow: "true",
    width: "420",
    mdxType: "Figure"
  }, "\uD14D\uC2A4\uD2B8\uB97C \uD2B9\uC815 \uC5B8\uC5B4\uB85C \uB9E4\uD551\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC774 \uD14C\uC774\uBE14\uC744 \uD1B5\uD574 \uC120\uD0DD\uD55C \uC5B8\uC5B4\uC5D0\uC11C \uC9C0\uC815\uB41C \uD14D\uC2A4\uD2B8\uB97C \uCC3E\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The tables are regenerated whenever you change a text in TouchGFX Designer or directly in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `texts.xml`), ` file and generate your application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Before we can draw the text on the screen we need to know which font to use for the text. This mapping between texts and fonts is controlled by the TypedTextDatabase class found in (`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/texts/include/texts/TypedTextDatabase.hpp`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 Texts \uD0ED\uC5D0\uC11C \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C, \uC791\uC131 \uBC29\uD5A5(Left-to-right \uB610\uB294 Right-to-left), \uAC01 \uD14D\uC2A4\uD2B8 \uC815\uB82C(Left, Right, Center)\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC640 \uC21C\uC11C \uBC0F \uC815\uB82C\uC740 \uAC01 \uD14D\uC2A4\uD2B8 \uBC88\uC5ED\uB9C8\uB2E4 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uC124\uC815\uD55C \uC815\uBCF4\uB294 \uAC01 \uC5B8\uC5B4\uBCC4 \uD14C\uC774\uBE14\uC5D0 \uCEF4\uD30C\uC77C\uB429\uB2C8\uB2E4. This makes it easy for TouchGFX to find out what font to use for a given text, how to align it, and in what order to  write the letters.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\uC5B8\uC5B4\uBCC4 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uC815\uBCF4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uADF8\uB9BC\uC5D0\uC11C TypedTextData \uD14C\uC774\uBE14\uC5D0\uB294 \uC138 \uAC1C\uC758 \uBC30\uC5F4\uC744 \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uAC00 \uC788\uB294\uB370, \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uAC01 \uC5B8\uC5B4\uB9C8\uB2E4 \uD558\uB098\uC529 \uCD1D \uC138 \uAC1C\uC785\uB2C8\uB2E4. Each of the arrays have 3 elements, one for each text in the system. Each element describes a font, a reading order, and the alignment. We see that in this example the texts use the same font in the three languages, but the texts use different fonts (F1 or F2). The Fonts table has two pointers because two fonts are used in the application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uAC00 \uC2A4\uD06C\uB9B0\uC5D0 \uD14D\uC2A4\uD2B8\uB97C \uADF8\uB9AC\uAE30 \uC704\uD574\uC11C\uB294 \uBA3C\uC800 TypedTextData\uC5D0\uC11C \uC9C0\uC815\uB41C \uD14D\uC2A4\uD2B8\uB97C \uCC3E\uC2B5\uB2C8\uB2E4. This data contains the font index, letter order (LTR/RTL), and the horizontal alignment (Left, Right, Center) of the text as specified in the TouchGFX Designer or the xml document. TouchGFX\uB294 TypedTextData(F1 \uB610\uB294 F2)\uC758 \uD3F0\uD2B8 \uC778\uB371\uC2A4\uB97C \uC0AC\uC6A9\uD574 \uC62C\uBC14\uB978 \uD14D\uC2A4\uD2B8 \uD3F0\uD2B8\uB97C \uCC3E\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uCEF4\uD30C\uC77C\uB418\uBA74 \uC774 \uBAA8\uB4E0 \uACFC\uC815\uC774 \uC790\uB3D9\uC73C\uB85C \uC77C\uC5B4\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-binary-fonts"
  }), `\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8 \uC0AC\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD3F0\uD2B8\uC640 \uBB38\uC790\uAC00 \uB9CE\uACE0 \uB2E4\uC591\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD06C\uAE30\uAC00 \uC5C4\uCCAD\uB098\uAC8C \uCEE4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC774\uB7EC\uD55C \uBB38\uC81C\uB97C \uC904\uC774\uAE30 \uC704\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC9C0\uB9CC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uBCC4\uB3C4\uB85C \uD30C\uC77C\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4. These files can be loaded and provided to TouchGFX by the application at runtime. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC608\uB97C \uB4E4\uC5B4 SD \uCE74\uB4DC \uAC19\uC740 \uC678\uC7A5 \uC800\uC7A5 \uC7A5\uCE58\uC5D0\uC11C \uD3F0\uD2B8\uB97C \uB85C\uB4DC\uD558\uAC70\uB098, \uC778\uD130\uB137\uC5D0\uC11C \uD3F0\uD2B8\uB97C  \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD3F0\uD2B8\uB97C \uB85C\uB4DC\uD558\uBA74 TouchGFX\uC5D0\uAC8C \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB97C \uD3F0\uD2B8 \uC2DC\uC2A4\uD15C\uC5D0 \uC124\uCE58\uD560\uC9C0 \uC5EC\uBD80\uB97C \uBB3C\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\uD3F0\uD2B8 \uD14C\uC774\uBE14\uC5D0 \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8 \uC124\uCE58\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Here the built-in Font2 is replaced by the binary font loaded by the application. \uB530\uB77C\uC11C \uC5F0\uACB0\uB41C Font2\uB294 \uC774\uC81C TouchGFX\uC5D0\uC11C \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Note that nothing changed in the text tables. These still refer to the same fonts (F1 and F2) by index.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "configuring-the-font-converter-to-generate-binary-fonts"
  }), `\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB97C \uC0DD\uC131\uD558\uB3C4\uB85D \uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C \uAD6C\uC131\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uB294 \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB97C \uC0DD\uC131\uD558\uB3C4\uB85D \uAD6C\uC131\uD574\uC57C \uD558\uB294\uB370, TouchGFX Designer\uC5D0\uC11C \uC774\uB97C \uC27D\uAC8C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC774 Config \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC "Text Configuration"\uC744 \uC120\uD0DD\uD55C \uB2E4\uC74C "Binary font files"\uB97C \uD074\uB9AD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.png",
    mdxType: "Figure"
  }, "\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8 \uC120\uD0DD\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When you regenerate the code, TouchGFX will generate binary fonts in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/bin/`), ` folder, and empty fonts in the normal files in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/src/`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The generated code will configure TouchGFX to use the empty font. The application is required to install the binary font at runtime.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "manual-configuration"
  }), `\uC218\uB3D9 \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `application.config`), ` \uD30C\uC77C\uC758 text_configuration \uAD6C\uAC04\uC5D0 \uC788\uB294 "binary_fonts"\uB97C \u201Cyes\u201D\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "application.config"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `  "text_configuration": {
    "remap": "yes",
    "a4": "yes",
    "binary_translations": "no",
    "binary_fonts": "yes",
    "framebuffer_bpp": "16"
  }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uB2E4\uC74C \uBC88\uC5D0 \uC790\uC0B0\uC744 \uC0DD\uC131\uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/fonts/bin`), ` \uD3F4\uB354\uC5D0 \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-the-binary-font"
  }), `\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8 \uC124\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Before TouchGFX can use a binary font the font data must be made available in addressable memory like RAM or QSPI flash (where it can be directly accessed through a pointer). Typically this involves copying the data from a file or block storage like emmc flash. This can also happen during production where the binary font is flashed to a predefined address in a memory-mapped flash.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When the application has loaded the binary font to memory (if not available already), the application must create and install a `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BinaryFont`), ` object referring the data in TouchGFX. After this, TouchGFX will use that font and not the compiled in font.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The binary font needs to be installed before it is used to draw the text that refers to the font, but it does not need to be installed immediately after booting. The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)`), ` constructor in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FrontApplication.cpp`), ` can be used to install fonts. This constructor is executed once before anything is drawn.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fonts can also be installed in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), ` methods. This is useful if you have a font that is only used in a specific screen. The font can then be un-installed in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tearDownScreen()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Here is an example of loading a binary font from a file-system to internal RAM:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5,19-19,22-22}",
    "{5-5,19-19,22-22}": true
  }), `//read the file into this array in internal RAM
uint8_t fontdata[10000];

//binary font object using the data
BinaryFont bf;

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    //read the binary font from a file
    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");
    if (font)
    {
        //read data from the file
        fread(fontdata, 1, 10000, font);
        fclose(font);

        //initialize BinaryFont object in bf using placement new
        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);

        //replace application font 'DEFAULT' with the binary font
        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD30C\uC77C\uC744 \uC5F4\uACE0 \uB370\uC774\uD130\uB97C \uC77D\uB294 \uCF54\uB4DC\uB294 \uC0AC\uC6A9\uD558\uB294 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uACFC \uC6B4\uC601 \uCCB4\uC81C\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. The basic steps are to make the font data available in memory, initialize a BinaryFont object with a pointer to the data, and finally pass the BinaryFont object to the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypedTextDatabase`), ` of TouchGFX.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `After the call to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `setFont`), ` TouchGFX will use the binary font to draw text on the screen instead of the compiled in font (DEFAULT).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "resetting-a-font"
  }), `\uD3F0\uD2B8 \uB9AC\uC14B\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC04\uD639 \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB2E4\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uCEF4\uD30C\uC77C\uB41C \uC6D0\uBCF8 \uD3F0\uD2B8\uB85C \uB3CC\uC544\uAC00\uC57C \uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uB294\uB370, \uC608\uB97C \uB4E4\uBA74 \uC5B8\uC5B4\uB97C \uBCC0\uACBD\uD558\uBA74\uC11C \uAE30\uBCF8 \uD3F0\uD2B8\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC2F6\uC744 \uB54C\uAC00 \uADF8\uB807\uC2B5\uB2C8\uB2E4. \uC774\uB54C\uB294 TypedTextDatabase\uC5D0\uC11C \uB2E4\uC74C\uACFC \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `resetFont()`), ` \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 \uD3F0\uD2B8 \uD3EC\uC778\uD130\uAC00 \uAE30\uBCF8\uC801\uC73C\uB85C \uC81C\uACF5\uB418\uB294 \uD3F0\uD2B8\uB97C \uAC00\uB9AC\uD0A4\uB3C4\uB85D \uB9AC\uC14B\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//reset to original font
TypedTextDatabase::resetFont(DEFAULT);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uD568\uC218\uB97C \uD638\uCD9C\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC0C8 \uD3F0\uD2B8\uB97C \uD560\uB2F9\uD558\uAC70\uB098, \uADF8 \uBC16\uC5D0 \uB2E4\uB978 \uBAA9\uC801\uC73C\uB85C \uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8\uC5D0\uC11C \uCC28\uC9C0\uD558\uACE0 \uC788\uB294 \uBA54\uBAA8\uB9AC\uB97C \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generating-binary-fonts-in-another-project"
  }), `Generating binary fonts in another project`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In some cases you want to have both normal fonts and binary fonts in a project. For example you want to have English letters in a normal compiled-in font, but Chinese and Japanese characters in binary fonts for optional inclusion in the device. This setup is not configurable in TouchGFX Designer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this case it is advised to create two TouchGFX projects. In the first project (your normal application) you have all your application code and UI with normal fonts. In the second project you have only enough texts (or wildcard characters) to generate the binary fonts.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In the first project, you deselect "Binary font files". In the second project you select "Binary font files".`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When you generate code in the second TouchGFX project the binary fonts are generated. The binary fonts can then be copied to the first project (in a folder of your convenience), and be used in the code as shown above.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);