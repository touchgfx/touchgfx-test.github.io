"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5421],{

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

/***/ 90016:
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
  id: "using-serial-flash",
  title: "\uC774\uBBF8\uC9C0\uC640 \uAE00\uAF34\uC5D0\uC11C \uC9C1\uB82C \uD50C\uB798\uC2DC \uC0AC\uC6A9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/using-serial-flash",
  "id": "development/scenarios/using-serial-flash",
  "title": "\uC774\uBBF8\uC9C0\uC640 \uAE00\uAF34\uC5D0\uC11C \uC9C1\uB82C \uD50C\uB798\uC2DC \uC0AC\uC6A9",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/using-serial-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/using-serial-flash",
  "permalink": "/4.20/ko/docs/development/scenarios/using-serial-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-serial-flash",
    "title": "\uC774\uBBF8\uC9C0\uC640 \uAE00\uAF34\uC5D0\uC11C \uC9C1\uB82C \uD50C\uB798\uC2DC \uC0AC\uC6A9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0 \uC800\uC7A5",
    "permalink": "/4.20/ko/docs/development/scenarios/using-non-memory-mapped-flash"
  },
  "next": {
    "title": "\uAE00\uAF34 \uB370\uC774\uD130\uC5D0 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC \uC0AC\uC6A9",
    "permalink": "/4.20/ko/docs/development/scenarios/fonts-in-unmapped-flash"
  }
};
const assets = {};


const toc = [{
  value: "\uAD6C\uC131",
  id: "configuration",
  level: 2
}, {
  value: "\uAD6C\uD604",
  id: "implementation",
  level: 2
}, {
  value: "\uC774\uBBF8\uC9C0",
  id: "images",
  level: 2
}, {
  value: "\uAE00\uAF34 \uB370\uC774\uD130",
  id: "font-data",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC9C1\uB82C \uD50C\uB798\uC2DC(\uB610\uB294 \uAE30\uD0C0 \uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC2A4\uD1A0\uB9AC\uC9C0)\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0\uC640 \uAE00\uAF34\uC744 \uC800\uC7A5\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uC124\uBA85\uB41C \uAE30\uC220\uC740 STM32G0\uACFC RAM \uC6A9\uB7C9\uC774 \uB9E4\uC6B0 \uC791\uC740 \uAE30\uD0C0 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uD2B9\uD788 \uC720\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `See the article `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "lowering-memory-usage-with-partial-framebuffer"
  }), `Lowering Memory Usage with Partial Framebuffer`), ` for a introduction to partial framebuffers which are often used together with a serial flash. See also the article `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-non-memory-mapped-flash"
  }), `Using Non-Memory Mapped Flash for storing images`), ` for an introduction to caching bitmaps from unmapped flash to RAM.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "configuration"
  }), `\uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC9C1\uB82C \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 "Additional Features"\uC5D0\uC11C "External Data Reader"\uB97C \uD65C\uC131\uD654\uD558\uB3C4\uB85D TouchGFX Generator \uAD6C\uC131\uC744 \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.png",
    width: "520",
    noShadow: true,
    mdxType: "Figure"
  }, "Additional Features: Data Reader"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD558\uBA74 TouchGFX Generator\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), ` LCD \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uAD6C\uC131\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4. \uB610\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::FlashDataReader`), `\uC758 \uD558\uC704 \uD074\uB798\uC2A4\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,8-9}",
    "{2-2,8-9}": true
  }), `static TouchGFXDataReader dataReader;
static LCD16bppSerialFlash display(dataReader);
static ApplicationFontProvider fontProvider;
...
void touchgfx_init()
{
    ...
    hal.setDataReader(&dataReader);
    fontProvider.setFlashReader(&dataReader);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uCF54\uB4DC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), ` \uD074\uB798\uC2A4\uC758 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0DD\uC131\uD558\uACE0, \uD574\uB2F9 \uC778\uC2A4\uD134\uC2A4\uB97C \uB514\uC2A4\uD50C\uB808\uC774 \uAC1D\uCCB4, HAL \uAC1D\uCCB4 \uBC0F ApplicationFontProvider \uAC1D\uCCB4\uC5D0 \uC804\uB2EC\uD569\uB2C8\uB2E4. \uC774\uB4E4 \uC138 \uAC00\uC9C0 \uAC1D\uCCB4\uB294 dataReader \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC9C1\uB82C \uD50C\uB798\uC2DC\uC758 \uB370\uC774\uD130\uC5D0 \uC561\uC138\uC2A4\uD569\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uC640 \uAE00\uAF34 \uB370\uC774\uD130 \uBAA8\uB450 \uB370\uC774\uD130\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2DC\uC2A4\uD15C \uD504\uB85C\uADF8\uB798\uBA38\uAC00 \uC2E4\uC81C\uB85C \uD50C\uB798\uC2DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC744 \uC218 \uC788\uC73C\uB824\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), ` \uD074\uB798\uC2A4\uC758 \uAD6C\uD604\uC744 \uC644\uB8CC\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "implementation"
  }), `\uAD6C\uD604`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFXDataReader`), ` \uD074\uB798\uC2A4\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../api/classes/classtouchgfx_1_1_flash_data_reader/#public-functions"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "a"
  }, `touchgfx::FlashDataReader`)), ` \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uD604\uD569\uB2C8\uB2E4. \uC774 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uACBD\uC6B0, \uD2B9\uC815 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 4\uAC1C\uC758 \uBA54\uC18C\uB4DC\uB97C \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "include/touchgfx/hal/FlashDataReader.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    bool addressIsAddressable(const void* address)
    void copyData(const void* src, void* dst, uint32_t bytes)
    void startFlashLineRead(const void* src, uint32_t bytes)
    const uint8_t* waitFlashReadComplete()
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `addressIsAddressable`), ` \uBA54\uC18C\uB4DC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), ` \uD074\uB798\uC2A4\uAC00 \uC77C\uBD80 \uB370\uC774\uD130\uC5D0 \uB300\uD574 \uC9C1\uC811 \uC77D\uAE30\uB97C \uC218\uD589\uD560 \uC218 \uC788\uB294\uC9C0(\uB0B4\uBD80 RAM \uB610\uB294 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB418\uC5B4 \uC788\uB294\uC9C0), \uC544\uB2C8\uBA74 dataReader \uAC1D\uCCB4\uB97C \uD1B5\uD574 \uC77D\uAE30\uB97C \uC218\uD589\uD574\uC57C \uD558\uB294\uC9C0\uB97C \uACB0\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `copyData`), `*\` \uBA54\uC18C\uB4DC\uB294 \uD50C\uB798\uC2DC\uC5D0\uC11C RAM\uC73C\uB85C \uB370\uC774\uD130\uB97C \uB3D9\uAE30\uC2DD\uC73C\uB85C \uBCF5\uC0AC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 \uBCF4\uD1B5 \uB370\uC774\uD130\uAC00 \uCD94\uAC00 \uCC98\uB9AC\uB418\uC9C0 \uC54A\uC744 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74  \uC194\uB9AC\uB4DC \uC774\uBBF8\uC9C0\uB97C \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uBCF5\uC0AC\uD560 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startFlashLineRead`), ` \uBA54\uC18C\uB4DC\uB294 \uD50C\uB798\uC2DC\uC5D0\uC11C \uC5EC\uB7EC \uB77C\uC778\uC758 \uB370\uC774\uD130\uAC00 \uD544\uC694\uD560 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startFlashLineRead`), ` \uBA54\uC18C\uB4DC\uB294 \uB370\uC774\uD130 \uC77D\uAE30\uB97C \uAC1C\uC2DC\uD569\uB2C8\uB2E4. \uC774 \uBA54\uC18C\uB4DC\uB294 \uBE44\uB3D9\uAE30\uC2DD \uC77D\uAE30 \uC791\uC5C5\uC744 \uAC1C\uC2DC\uD560 \uC218 \uC788\uC73C\uBA70, \uC77D\uAE30\uAC00 \uC2DC\uC791\uB418\uBA74 \uC989\uC2DC \uAC12\uC744 \uBC18\uD658\uD574\uC57C \uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `waitFlashReadComplete`), ` \uBA54\uC18C\uB4DC\uB294 \uC77D\uAE30\uAC00 \uC644\uB8CC\uB420 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB824\uC57C \uD558\uBA70, \uB370\uC774\uD130\uB97C \uBCF4\uC720\uD558\uACE0 \uC788\uB294 \uBC84\uD37C\uC5D0 \uD3EC\uC778\uD130\uB97C \uBC18\uD658\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), `\uB294 \uC0C1\uD669\uC5D0 \uB530\uB77C \uC774\uC804\uC5D0 \uC77D\uC740 \uB370\uC774\uD130\uB97C \uCC98\uB9AC\uD558\uB294 \uB3D9\uC548 \uD558\uB098\uC758 \uD50C\uB798\uC2DC \uC77D\uAE30\uB97C \uBC1C\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC644\uC804\uD55C \uB3D9\uC2DC\uC131\uC744 \uB2EC\uC131\uD558\uAE30 \uC704\uD574\uC11C\uB294 dataReader\uC5D0 \uBC84\uD37C\uAC00 \uB450 \uAC1C \uC774\uC0C1 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), `\uC758 \uB450 \uAC00\uC9C0 \uD074\uB798\uC2A4\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FlashDataReader`), `\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), `\uB294 \uB450 \uD074\uB798\uC2A4\uC758 \uC288\uD37C \uD074\uB798\uC2A4\uB85C, \uAE30\uBCF8 \uC2E4\uD589\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4. \uC774 \uC2E4\uD589\uC774 \uC801\uD569\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD504\uB85C\uADF8\uB798\uBA38\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXDataReader`), ` \uD074\uB798\uC2A4\uC5D0\uC11C \uAD6C\uD604\uB41C \uAC00\uC0C1 \uD568\uC218\uB97C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), ` \uC2E4\uD589\uC740 \uC774 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uAE30 \uC704\uD574 C \uD568\uC218\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. \uC774\uB4E4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC2DC\uC2A4\uD15C \uD504\uB85C\uADF8\uB798\uBA38\uAC00 \uAD6C\uD604\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C" __weak void DataReader_WaitForReceiveDone();
extern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);
extern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);

void TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)
{
    /* Start transfer using DMA */
    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAD6C\uD604\uB41C \uACB0\uACFC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MB1642BDataReader.c`), ` \uD30C\uC77C\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Core/Src/MB1642BDataReader.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)
{
    readDataDMA(address24, buffer, length);
}

void readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)
{
    // Pull Flash CS pin low
    isReceivingData = 1;
    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;

    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;

    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uAD6C\uD604\uC740 \uD50C\uB798\uC2DC\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD504\uB85C\uD1A0\uCF5C\uACFC SPI \uBC0F CS\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 GPIO\uC5D0 \uD55C \uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedDataReader`), ` \uD074\uB798\uC2A4\uAC00 \uC791\uB3D9\uD558\uB824\uBA74 \uC138 \uAC00\uC9C0 C \uD568\uC218\uB97C \uBAA8\uB450 \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "images"
  }), `\uC774\uBBF8\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC11C\uB860\uC5D0\uC11C \uC5B8\uAE09\uD588\uB4EF\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD16bppSerialFlash`), ` \uD074\uB798\uC2A4\uB294 dataReader \uAC1D\uCCB4\uB97C \uD1B5\uD574 \uC774\uBBF8\uC9C0 \uD53D\uC140\uC744 \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 \uB0B4\uBD80 \uD50C\uB798\uC2DC \uBC94\uC704 \uBC16\uC758 \uC8FC\uC18C \uBC94\uC704\uC5D0 \uC774\uBBF8\uC9C0\uB97C \uC800\uC7A5\uD558\uB3C4\uB85D \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32G071\uC5D0\uC11C\uB294 \uC9C1\uB82C \uD50C\uB798\uC2DC\uC758 \uC2DC\uC791 \uC8FC\uC18C\uB85C 0x90000000 \uC8FC\uC18C\uB97C \uC120\uD0DD\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "gcc/STM32G071RBTX_FLASH.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K
  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K
  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M
}

/* Sections */
SECTIONS
{
  ...

  ExtFlashSection :
  {
    *(ExtFlashSection ExtFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH

  FontFlashSection :
  {
    *(FontFlashSection FontFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB807\uAC8C \uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ExtFlashSection`), `\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `FontFlashSection`), `\uC774 0x90000000 \uC8FC\uC18C \uBC94\uC704 \uB0B4\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uD50C\uB798\uC2DC \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD558\uB294 \uC791\uC5C5\uB9CC \uB0A8\uC558\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeProgrammer\uC6A9 \uD50C\uB798\uC2DC \uB85C\uB354\uB97C \uC791\uC131\uD558\uB294 \uBC29\uBC95\uC740 \uC774 \uBB38\uC11C\uC758 \uC139\uC158 2.3.3 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25"
  }), `UM2237 STMCubeProgrammer \uC0AC\uC6A9\uC790 \uB9E4\uB274\uC5BC\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-data"
  }), `\uAE00\uAF34 \uB370\uC774\uD130`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uAE00\uAF34 \uD53D\uC140 \uB370\uC774\uD130\uC640 \uAE00\uAF34 \uBB38\uC790 \uBA54\uD0C0 \uB370\uC774\uD130(\uB108\uBE44 \uBC0F \uB192\uC774)\uB97C \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4(\uB450 \uC720\uD615\uC758 \uB370\uC774\uD130 \uBAA8\uB450 FontFlashSection\uC5D0 \uC800\uC7A5). \uD654\uBA74\uC5D0 \uBB38\uC790\uB97C \uADF8\uB824 \uB123\uC744 \uB54C dataReader \uAC1D\uCCB4\uB97C \uD1B5\uD574\uC11C\uB3C4 \uC774 \uB370\uC774\uD130\uB97C \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Unmapped Storage Format"\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `include/touchgfx/hal/Config.hpp`), ` \uD30C\uC77C\uC744 \uBCC0\uACBD\uD574 \uAE00\uAF34 \uBB38\uC790 \uBA54\uD0C0 \uB370\uC774\uD130\uB97C \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB85C \uC62E\uACA8\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE00\uAF34 \uD615\uC2DD\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "fonts-in-unmapped-flash"
  }), `\uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC2A4\uD1A0\uB9AC\uC9C0\uC758 \uAE00\uAF34`), `\uC5D0 \uB300\uD55C \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);