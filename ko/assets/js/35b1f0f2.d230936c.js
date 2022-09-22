"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7246],{

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

/***/ 61677:
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
  id: "dynamic-bitmaps",
  title: "\uB3D9\uC801 \uBE44\uD2B8\uB9F5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "id": "development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "title": "\uB3D9\uC801 \uBE44\uD2B8\uB9F5",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/dynamic-bitmaps.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "dynamic-bitmaps",
    "title": "\uB3D9\uC801 \uBE44\uD2B8\uB9F5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uCE94\uBC84\uC2A4 \uC704\uC82F",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"
  },
  "next": {
    "title": "\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"
  }
};
const assets = {};


const toc = [{
  value: "\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uAD6C\uC131",
  id: "dynamic-bitmap-configuration",
  level: 2
}, {
  value: "\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC0AC\uC6A9 \uC608",
  id: "using-a-dynamic-bitmap-example",
  level: 2
}, {
  value: "\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC5F0\uC0B0",
  id: "dynamic-bitmap-operations",
  level: 2
}, {
  value: "\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC0DD\uC131\uD558\uAE30",
  id: "creating-a-dynamic-bitmap",
  level: 3
}, {
  value: "\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC0AD\uC81C\uD558\uAE30",
  id: "deleting-a-dynamic-bitmap",
  level: 3
}, {
  value: "\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uD53D\uC140 \uC8FC\uC18C \uAC00\uC838\uC624\uAE30",
  id: "get-the-address-of-the-pixels-in-a-dynamic-bitmap",
  level: 3
}, {
  value: "\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uBD88\uD22C\uBA85\uD55C \uC601\uC5ED \uC124\uC815\uD558\uAE30",
  id: "set-the-solid-area-of-a-dynamic-bitmap",
  level: 3
}, {
  value: "\uC138\uB85C \uBAA8\uB4DC\uC758 \uB3D9\uC801 \uBE44\uD2B8\uB9F5",
  id: "dynamic-bitmap-in-portrait-mode",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uCEF4\uD30C\uC77C\uB418\uB294 \uAC83\uC740 \uD45C\uC900 \uBE44\uD2B8\uB9F5\uC774\uAE30 \uB54C\uBB38\uC5D0 \uCEF4\uD30C\uC77C\uD560 \uB54C\uB294 \uD45C\uC900 \uBE44\uD2B8\uB9F5\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5\uC740 PNG \uD30C\uC77C \uB4F1\uC5D0\uC11C \uBCC0\uD658\uB418\uC5B4 \uD06C\uAE30 \uBC0F \uD615\uC2DD \uC815\uBCF4\uC640 \uD568\uAED8 \uB0B4\uBD80 \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uB7F0\uD0C0\uC784\uC5D0\uC11C\uB294 \uBE44\uD2B8\uB9F5\uC744 RAM\uC5D0\uC11C \uC0DD\uC131\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5`), `\uC774\uB77C\uACE0 \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCEF4\uD30C\uC77C\uB418\uB294 \uC815\uC801 \uBE44\uD2B8\uB9F5\uC73C\uB85C\uB9CC \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 Image \uC704\uC82F\uACFC Button \uC704\uC82F\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-bitmap-configuration"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD558\uBA74 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uC5D0\uC11C \uD53D\uC140 \uBA54\uBAA8\uB9AC\uAC00 \uD560\uB2F9\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD558\uB824\uBA74 \uBA3C\uC800 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uAD6C\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB294 TouchGFX Designer\uB098 Generator\uC5D0\uC11C \uAD6C\uC131\uD560 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uC9C1\uC811 \uAD6C\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC790\uC138\uD55C \uAD6C\uC131 \uBC29\uBC95\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "caching-bitmaps"
  }), `\uBE44\uD2B8\uB9F5 \uCE90\uC2F1`), `\uC5D0\uC11C \uD574\uB2F9 \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uCD5C\uB300 \uC218\uB97C \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uCD5C\uB300 \uAC12\uC740 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uC8FC\uC18C \uBC0F \uD06C\uAE30\uC640 \uD568\uAED8 TouchGFX\uB85C \uC804\uB2EC\uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uCD5C\uB300 \uC218\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4`), `\uB85C \uC9C0\uC815\uD558\uC5EC \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC788\uB294 \uBAA8\uB4E0 \uD30C\uC77C\uC5D0\uC11C \uC774\uB7EC\uD55C \uAD6C\uC131\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8 \uD55C \uBC88\uB9CC \uAD6C\uC131\uD574\uC57C \uD55C\uB2E4\uBA74 FrontendApplication.cpp \uD30C\uC77C\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,10-10}",
    "{2-2,10-10}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    // Place cache start address in SDRAM at address 0xC0008000;
    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;
    const uint32_t cacheSize = 0x300000; //3 MB, as example
    Bitmap::setCache(cacheStartAddr, cacheSize, 4);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Windows \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uC5EC\uAE30\uC5D0\uC11C \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. Windows\uC5D0\uC11C\uB294 \uD070 \uBC30\uC5F4\uC744 \uC120\uC5B8\uD558\uAC70\uB098 malloc\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC27D\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-10}",
    "{9-10}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
#ifdef SIMULATOR
    const uint32_t cacheSize = 0x300000; //3 MB, as example
    uint16_t* const cacheStartAddr = (uint16_t*)malloc(cacheSize);
    Bitmap::setCache(cacheStartAddr, cacheSize, 4);
#else
    // Place cache start address in SDRAM at address 0xC0008000;
    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;
    const uint32_t cacheSize = 0x300000; //3 MB, as example
    Bitmap::setCache(cacheStartAddr, cacheSize, 4);
#endif
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-a-dynamic-bitmap-example"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC0AC\uC6A9 \uC608`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uD45C\uC2DC\uD560 \uC704\uC82F\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC774 Image \uC704\uC82F\uC744 View\uC5D0 \uC0BD\uC785\uD569\uB2C8\uB2E4(\uCF54\uB4DC \uB610\uB294 Designer\uC5D0\uC11C).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6-6}",
    "{6-6}": true
  }), `#include <touchgfx/widgets/Image.hpp>
using namespace touchgfx;
class TemplateView : public View
{
private:
    Image image;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC774 \uC704\uC82F\uC5D0 \uC0AC\uC6A9\uD558\uB294 \uD504\uB85C\uC138\uC2A4\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 3\uB2E8\uACC4\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uC5D0\uC11C \uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uBA54\uBAA8\uB9AC \uC18C\uAC70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uBE44\uD2B8\uB9F5\uC744 \uC704\uC82F\uC5D0 \uD560\uB2F9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `setupScreen\uC5D0\uC11C \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 16bpp RGB565 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uB9CC\uC57D \uD504\uB808\uC784\uBC84\uD37C\uAC00 24\uBE44\uD2B8\uB77C\uBA74 RGB888 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD558\uACE0, \uD22C\uBA85\uD55C \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD558\uB824\uBA74 ARGB8888 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uD53D\uC140 \uC8FC\uC18C\uB294 dynamicBitmapGetAddress \uD568\uC218\uC5D0\uC11C \uBC18\uD658\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-9,14-14}",
    "{9-9,14-14}": true
  }), `#include <touchgfx/Bitmap.hpp>
void TemplateView::setupScreen()
{
    BitmapId bmpId;

    //Create (16bit) dynamic bitmap of size 100x150
    const int width = 100;
    const int height = 150;
    bmpId = Bitmap::dynamicBitmapCreate(100, 150, Bitmap::RGB565);

    //set all pixels white
    if (bmpId != BITMAP_INVALID)
    {
       memset(Bitmap::dynamicBitmapGetAddress(bmpId), 0xFF, width*height*2);
    }

    //Make Image widget show the dynamic bitmap
    image.setBitmap(Bitmap(bmpId));

    //Position image and add to View
    image.setXY(20, 20);
    add(image);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uC5D0\uC11C \uAC00\uC838\uC624\uB294 \uD53D\uC140 \uBA54\uBAA8\uB9AC\uB294 \uC18C\uAC70\uB418\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uBC14\uB85C \uC18C\uAC70\uD558\uAC70\uB098 \uB36E\uC5B4\uC4F0\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD30C\uC77C\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uB85C\uB4DC\uD558\uACE0 \uC2F6\uB2E4\uBA74 memset \uD638\uCD9C\uC744 \uB85C\uB354 \uCF54\uB4DC\uB85C \uB300\uCCB4\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/loading-images-at-runtime"
  }), `\uB7F0\uD0C0\uC784\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB85C\uB4DC`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-bitmap-operations"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC5F0\uC0B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC5F0\uC0B0\uC740 \uBAA8\uB450 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../api/classes/classtouchgfx_1_1_bitmap"
  }), `\uBE44\uD2B8\uB9F5`), ` \uD074\uB798\uC2A4\uC5D0\uC11C \uCC98\uB9AC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-dynamic-bitmap"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC0DD\uC131\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uBA54\uC18C\uB4DC\uB294 \uC9C0\uC815\uB41C \uAC00\uB85C, \uC138\uB85C \uBC0F \uBE44\uD2B8\uB9F5 \uD615\uC2DD\uC73C\uB85C \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5\uC740 \uBBF8\uC0AC\uC6A9 \uBA54\uBAA8\uB9AC\uAC00 \uCDA9\uBD84\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC0DD\uC131\uB429\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5\uC774 \uC0DD\uC131\uB418\uC9C0 \uC54A\uC73C\uBA74 \uBA54\uC18C\uB4DC\uAC00 BITMAP_INVALID\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static BitmapId Bitmap::dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format, ClutFormat clutFormat)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "deleting-a-dynamic-bitmap"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uC0AD\uC81C\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uBA54\uC18C\uB4DC\uB294 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static bool Bitmap::dynamicBitmapDelete(BitmapId id)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "get-the-address-of-the-pixels-in-a-dynamic-bitmap"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uD53D\uC140 \uC8FC\uC18C \uAC00\uC838\uC624\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uBA54\uC18C\uB4DC\uB294 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uC8FC\uC18C\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. \uC774 \uBA54\uC18C\uB4DC\uB294 \uD30C\uC77C \uB85C\uB354\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uB97C \uBE44\uD2B8\uB9F5\uC73C\uB85C \uBCF5\uC0AC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static uint8_t* dynamicBitmapGetAddress(BitmapId id)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "set-the-solid-area-of-a-dynamic-bitmap"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uBD88\uD22C\uBA85\uD55C \uC601\uC5ED \uC124\uC815\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uBA54\uC18C\uB4DC\uB294 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC758 \uBD88\uD22C\uBA85\uD55C \uC9C1\uC0AC\uAC01\uD615\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\uBD88\uD22C\uBA85\uD55C \uC601\uC5ED\u201D \uAC1C\uB150\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-widgets#solid-area"
  }), `\uCEE4\uC2A4\uD140 \uC704\uC82F`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE30\uBCF8\uC801\uC73C\uB85C \uBD88\uD22C\uBA85\uD55C \uC601\uC5ED\uC740 RGB565\uB098 RGB888\uACFC \uAC19\uC774 \uD22C\uBA85\uD558\uC9C0 \uC54A\uC740 \uD615\uC2DD\uC77C \uB54C \uC804\uCCB4 \uBE44\uD2B8\uB9F5\uC73C\uB85C \uC124\uC815\uB429\uB2C8\uB2E4. ARGB8888\uACFC \uAC19\uC774 \uD22C\uBA85\uD55C \uD615\uC2DD\uC77C \uB54C\uB294 \uBE44\uC5B4 \uC788\uB3C4\uB85D \uC124\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-bitmap-in-portrait-mode"
  }), `\uC138\uB85C \uBAA8\uB4DC\uC758 \uB3D9\uC801 \uBE44\uD2B8\uB9F5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC138\uB85C \uBAA8\uB4DC\uC5D0\uC11C\uB3C4 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC138\uB85C \uBAA8\uB4DC\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uAE30\uBCF8 \uBC29\uD5A5\uC5D0\uC11C 90\uB3C4 \uD68C\uC804\uD558\uC5EC \uC7A5\uCC29\uB418\uB294 \uACBD\uC6B0\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC138\uB85C \uBAA8\uB4DC\uC5D0\uC11C \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB294 \uC880 \uB354 \uC8FC\uC758\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 STM32F746 \uD504\uB85C\uC81D\uD2B8 \uC608\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uAC00\uB85C \uD53D\uC140\uC740 480\uC774\uACE0, \uC138\uB85C \uD53D\uC140\uC740 272\uC785\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD06C\uAE30\uB3C4 \uB3D9\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/designer-portrait.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\uC138\uB85C \uBAA8\uB4DC \uD504\uB85C\uC81D\uD2B8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `image1 Image \uC704\uC82F\uC5D0\uB294 \uC5B4\uB5A0\uD55C \uBE44\uD2B8\uB9F5\uB3C4 \uD560\uB2F9\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC774 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD574 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uD45C\uC2DC\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC138\uB85C \uBAA8\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC88C\uD45C\uACC4\uAC00 \uC2DC\uACC4 \uBC18\uB300 \uBC29\uD5A5\uC73C\uB85C 90\uB3C4 \uD68C\uC804\uD569\uB2C8\uB2E4. \uC774\uB54C \u2018D\u2019\uC640 \uAC00\uAE4C\uC6B4 \uC67C\uCABD \uC0C1\uB2E8 \uBAA8\uD241\uC774\uAC00 (0, 0) \uC88C\uD45C\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uD504\uB808\uC784\uBC84\uD37C\uC758 (\uC2A4\uD06C\uB9B0\uC5D0\uC11C \uCCAB \uBC88\uC9F8 \uD53D\uC140\uC744 \uCC44\uC0C9\uD558\uB294) \uCCAB \uBC88\uC9F8 \uBC14\uC774\uD2B8\uB294 \uC624\uB978\uCABD \uC0C1\uB2E8 \uBAA8\uD241\uC774\uAC00 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uD504\uB808\uC784\uBC84\uD37C\uB294 \uC138\uB85C \uBAA8\uB4DC\uB85C \uC2E4\uD589\uD574\uB3C4 \uD68C\uC804\uD558\uC9C0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC54A\uC2B5\uB2C8\uB2E4`), `. This is also true for dynamic bitmaps. But the pixels we want to be shown on first line on the display (as mounted) must be drawn on the left edge in the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uD568\uC218\uC5D0\uC11C\uB294 \uC0C1\uB2E8 \uD589\uC744 \uB179\uC0C9\uC73C\uB85C, \uC624\uB978\uCABD \uAC00\uC7A5\uC790\uB9AC\uB97C \uBE68\uAC04\uC0C9\uC73C\uB85C \uCC44\uC0C9\uD558\uC5EC \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{13-14,16-21}",
    "{13-14,16-21}": true
  }), `void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
    BitmapId bmpId;
    bmpId = Bitmap::dynamicBitmapCreate(100, 100, Bitmap::RGB565);

    if (bmpId != BITMAP_INVALID)
    {
        //set all pixels white
        uint16_t* const bitmapPixels = (uint16_t*)Bitmap::dynamicBitmapGetAddress(bmpId);
        memset(bitmapPixels, 0xFF, 100*100*2);

        //first 200 pixels red, => two column on the right on display
        for (int i = 0; i<200; i++) bitmapPixels[i] = 0xF800;

        //first two pixels in all rows green in bitmap => top two rows on display
        for (int i = 0; i<100; i++)
        {
            bitmapPixels[i*100]     = 0x07E0;
            bitmapPixels[i*100 + 1] = 0x07E0;
        }
    }

    image1.setBitmap(bmpId);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC544\uB798\uC640 \uAC19\uC740 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/stm32f746-portrait.png",
    noShadow: "true",
    width: "272",
    mdxType: "Figure"
  }, "\uC138\uB85C \uBAA8\uB4DC \uD504\uB85C\uC81D\uD2B8 \uD504\uB808\uC784\uBC84\uD37C \uB0B4\uC6A9"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);