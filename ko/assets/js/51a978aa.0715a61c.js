"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4201],{

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

/***/ 80435:
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
  id: "using-non-memory-mapped-flash",
  title: "\uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0 \uC800\uC7A5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/using-non-memory-mapped-flash",
  "id": "development/scenarios/using-non-memory-mapped-flash",
  "title": "\uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0 \uC800\uC7A5",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/using-non-memory-mapped-flash.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/using-non-memory-mapped-flash",
  "permalink": "/4.20/ko/docs/development/scenarios/using-non-memory-mapped-flash",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-non-memory-mapped-flash",
    "title": "\uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0 \uC800\uC7A5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9 \uC808\uAC10",
    "permalink": "/4.20/ko/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"
  },
  "next": {
    "title": "\uC774\uBBF8\uC9C0\uC640 \uAE00\uAF34\uC5D0\uC11C \uC9C1\uB82C \uD50C\uB798\uC2DC \uC0AC\uC6A9",
    "permalink": "/4.20/ko/docs/development/scenarios/using-serial-flash"
  }
};
const assets = {};


const toc = [{
  value: "\uD50C\uB798\uC2DC\uC5D0\uC11C \uCE90\uC2DC\uB85C \uBE44\uD2B8\uB9F5 \uB370\uC774\uD130 \uBCF5\uC0AC",
  id: "copying-bitmap-data-from-flash-to-cache",
  level: 3
}, {
  value: "BitmapDatabase \uD14C\uC774\uBE14",
  id: "the-bitmapdatabase-table",
  level: 2
}, {
  value: "\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8 \uC218\uC815",
  id: "linker-script-modifications",
  level: 2
}, {
  value: "BlockCopy \uD568\uC218 \uC218\uC815",
  id: "modifying-the-blockcopy-function",
  level: 2
}, {
  value: "RAM\uC5D0 \uC774\uBBF8\uC9C0 \uB9C1\uD06C",
  id: "linking-images-to-ram",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uBC14\uC774\uB108\uB9AC \uD30C\uC77C\uC5D0 \uBAA8\uB4E0 \uC774\uBBF8\uC9C0\uB97C \uC5F0\uACB0\uD558\uB294 \uBC29\uBC95\uACFC \uB7F0\uD0C0\uC784\uC5D0\uC11C \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uC640 \uD568\uAED8 \uD574\uB2F9 \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBD05\uB2C8\uB2E4. TouchGFX\uB294 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB41C \uBE44\uD2B8\uB9F5\uC5D0 \uB300\uD574 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC5C6\uC9C0\uB9CC, RAM\uC5D0 \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBE44\uD2B8\uB9F5\uC744 \uC0AC\uC6A9 \uAC00\uB2A5\uD558\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uC5D0 \uB300\uD55C \uC77C\uBC18\uC801\uC778 \uC124\uBA85\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `\uBE44\uD2B8\uB9F5 \uCE90\uC2F1`), `\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBB38\uC11C\uC5D0\uC11C\uB294 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uC124\uC815\uD588\uACE0 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC\uC5D0 \uBE44\uD2B8\uB9F5\uC744 \uC800\uC7A5\uD55C\uB2E4\uACE0 \uAC00\uC815\uD569\uB2C8\uB2E4. USB \uC2A4\uD1A0\uB9AC\uC9C0, NAND \uD50C\uB798\uC2DC \uB4F1\uC774 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0\uB97C \uD2B9\uC815 \uC8FC\uC18C\uC5D0 \uC5F0\uACB0\uD558\uACE0, \uC774\uBBF8\uC9C0\uB97C \uD30C\uC77C\uB85C \uBCF5\uC0AC\uD558\uBA70, TouchGFX\uAC00 \uD30C\uC77C\uC744 \uCE90\uC2DC\uB85C \uBCF5\uC0AC\uD558\uB3C4\uB85D \uB3D5\uB294 \uAC83\uC774 \uBAA9\uC801\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "copying-bitmap-data-from-flash-to-cache"
  }), `\uD50C\uB798\uC2DC\uC5D0\uC11C \uCE90\uC2DC\uB85C \uBE44\uD2B8\uB9F5 \uB370\uC774\uD130 \uBCF5\uC0AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD560 \uB54C TouchGFX\uB294 \uC6D0\uB798 \uC704\uCE58\uC5D0\uC11C \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB85C \uD53D\uC140\uC744 \uBCF5\uC0AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uBCF5\uC0AC \uC791\uC5C5\uC740 HAL \uD074\uB798\uC2A4\uC5D0\uC11C \uC774 \uBA54\uC11C\uB4DC\uB97C \uD638\uCD9C\uD558\uC5EC \uC218\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "HAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5\uC774 \uC8FC\uC18C \uC9C0\uC815\uC774 \uAC00\uB2A5\uD55C \uC77C\uBC18 \uD50C\uB798\uC2DC(\uC608: \uB0B4\uBD80 \uD50C\uB798\uC2DC \uB610\uB294 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uC758 \uC678\uBD80 \uD50C\uB798\uC2DC)\uC5D0 \uC800\uC7A5\uB418\uC5B4 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uC11C \uC81C\uACF5\uB418\uB294 \uC77C\uBC18\uC801\uC778 blockCopy \uD568\uC218\uB85C\uB3C4 \uCDA9\uBD84\uD558\uAE30 \uB54C\uBB38\uC5D0 \uB2E4\uB978 \uC870\uCE58\uB97C \uCDE8\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC18\uBA74\uC5D0 \uBE44\uD2B8\uB9F5\uC774 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uACFC \uAC19\uC774 \uC8FC\uC18C \uC9C0\uC815\uC774 \uBD88\uAC00\uB2A5\uD55C \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC77C\uBC18\uC801\uC778 \uAD6C\uD604\uC73C\uB85C\uB294 \uBD88\uCDA9\uBD84\uD558\uBBC0\uB85C \uD2B9\uC815 \uD50C\uB798\uC2DC \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0\uC11C \uC77D\uAE30\uAC00 \uAC00\uB2A5\uD558\uB3C4\uB85D \uC5C5\uB370\uC774\uD2B8\uB41C \uBC84\uC804\uC744 \uC81C\uACF5\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uC6B0\uC120\uC740 \uBE44\uD2B8\uB9F5\uC774 \uACE0\uC815 \uC8FC\uC18C\uC5D0 \uB9C1\uD06C\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-bitmapdatabase-table"
  }), `BitmapDatabase \uD14C\uC774\uBE14`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC758 \uBAA8\uB4E0 \uBE44\uD2B8\uB9F5\uC740 generated/images/src \uD3F4\uB354\uC758 .cpp \uD30C\uC77C\uC5D0 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uBE44\uD2B8\uB9F5\uC740 \uBC14\uC774\uD2B8 \uBC30\uC5F4\uB4E4\uC758 \uD615\uD0DC\uB85C \uD45C\uD604\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBC30\uC5F4\uB4E4\uC740 C++ \uCEF4\uD30C\uC77C\uB7EC\uC5D0 \uC758\uD574 \uB2E4\uB978 \uC18C\uC2A4 \uCF54\uB4DC \uD30C\uC77C\uB85C \uCEF4\uD30C\uC77C\uB41C \uB2E4\uC74C, \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB9C1\uD06C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uD68C\uC804\uD558\uB294 \uB85C\uACE0\uB97C \uBCF4\uC5EC\uC8FC\uB294 \uBC84\uD2BC\uACFC \uD14D\uC2A4\uCC98 \uB9E4\uD37C\uAC00 \uD3EC\uD568\uB41C \uAC04\uB2E8\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC2A4\uD06C\uB9B0\uC0F7\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",
    mdxType: "Figure"
  }, "\uBC84\uD2BC\uACFC \uD14D\uC2A4\uCC98 \uB9E4\uD37C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 Button_Pressed, Button_Released, Logo\uC758 \uC138 \uAC00\uC9C0 \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC138 \uAC1C\uC758 \uBE44\uD2B8\uB9F5\uC740 .cpp \uD30C\uC77C\uB85C \uBCC0\uD658\uB418\uACE0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC77C\uBD80\uB85C\uC11C \uB9C1\uD06C\uB429\uB2C8\uB2E4. \uC774\uBBF8\uC9C0\uB294 bitmap_database\uB77C\uB294 \uD14C\uC774\uBE14\uC5D0\uC11C \uCC38\uC870\uB429\uB2C8\uB2E4. \uC774 \uD14C\uC774\uBE14\uC740 BitmapDatabase.cpp \uD30C\uC77C\uC5D0 \uC800\uC7A5\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uC740 \uC704\uC758 \uC608\uC81C\uC5D0\uC11C \uAC00\uC838\uC628 \uD14C\uC774\uBE14\uC785\uB2C8\uB2E4(\uC77C\uBD80 \uC138\uBD80 \uC815\uBCF4\uB294 \uC81C\uAC70).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "BitmapDatabase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `extern const unsigned char _blue_buttons_round_edge_small[];
extern const unsigned char _blue_buttons_round_edge_small_pressed[];
extern const unsigned char _blue_logo_touchgfx_logo[];

const touchgfx::Bitmap::BitmapData bitmap_database[] =
{
    { _blue_buttons_round_edge_small, ... },
    { _blue_buttons_round_edge_small_pressed, ... },
    { _blue_logo_touchgfx_logo, ... }
};

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 \uC120\uC5B8\uB41C \uBC30\uC5F4\uB4E4\uC740 \uAC1C\uBCC4 \uBE44\uD2B8\uB9F5\uC758 \uD53D\uC140\uC744 \uD3EC\uD568\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBC30\uC5F4\uB4E4\uC740 \uB2E4\uB978 .cpp \uD30C\uC77C\uC5D0 \uC815\uC758\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. bitmap_database \uBC30\uC5F4\uC5D0\uB294 \uC774 \uBC30\uC5F4\uB4E4\uC758 \uC8FC\uC18C\uAC00 \uBCF4\uAD00\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX\uB294 \uC774 \uBC30\uC5F4\uC744 \uC0AC\uC6A9\uD558\uC5EC \uBE44\uD2B8\uB9F5\uC758 \uD53D\uC140\uC758 \uC8FC\uC18C\uB97C \uCC3E\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB85C\uADF8\uB798\uBA38\uAC00 \uBE44\uD2B8\uB9F5 \uCE90\uC2F1\uC744 \uC694\uCCAD\uD558\uBA74 TouchGFX\uB294 \uD50C\uB798\uC2DC(bitmap_database \uBC30\uC5F4)\uC5D0\uC11C \uBE44\uD2B8\uB9F5\uC758 \uC8FC\uC18C\uB97C \uCC3E\uC544\uC11C \uC5EC\uAE30\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBCF5\uC0AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "linker-script-modifications"
  }), `\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C1\uCEE4\uB294 \uBE44\uD2B8\uB9F5\uC758 \uC8FC\uC18C\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. \uC774\uB294 \uBE44\uD2B8\uB9F5\uC774 \uC800\uC7A5\uB41C \uC139\uC158\uC744 \uD1A0\uB300\uB85C \uD569\uB2C8\uB2E4. TouchGFX\uC758 \uBAA8\uB4E0 \uBE44\uD2B8\uB9F5\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `ExtFlashSection`), `\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD45C\uC900 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8(\uC5EC\uAE30\uC11C\uB294 GCC\uC6A9)\uB294 \uB2E4\uB978 \uC77D\uAE30 \uC804\uC6A9 \uB370\uC774\uD130\uC640 \uD568\uAED8 \uC774 \uC139\uC158\uC744 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC608\uC81C\uC5D0\uC11C\uB294 \uC8FC\uC18C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `0x24000000`), `\uC758 ExtFlashSection\uC5D0 \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uB418\uACE0 \uC788\uC9C0 \uC54A\uC740(\uCF54\uB4DC \uB610\uB294 \uB370\uC774\uD130 \uC8FC\uC18C \uACF5\uAC04\uC5D0 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC740) \uC8FC\uC18C\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800, \uC77C\uBC18\uC801\uC778 \uB0B4\uBD80 FLASH \uBC0F RAM \uC601\uC5ED\uC5D0 \uB354\uD574 \uC0C8 \uBA54\uBAA8\uB9AC \uC601\uC5ED(\uC8FC\uC18C 0x24000000\uC758 USB \uD50C\uB798\uC2DC)\uC744 \uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K
  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K
  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C, USB \uC601\uC5ED\uC5D0 ExtFlashSection\uC744 \uC800\uC7A5\uD558\uB3C4\uB85D \uB9C1\uCEE4\uC5D0 \uC9C0\uC2DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32F746.ld"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ExtFlashSection :
{
   *(ExtFlashSection ExtFlashSection.*)
} >USB
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C1\uD06C \uC774\uD6C4\uC5D0 \uB9F5 \uD30C\uC77C(application.map)\uC744 \uAC80\uC0AC\uD558\uC5EC \uBE44\uD2B8\uB9F5\uC758 \uC8FC\uC18C\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD574\uB2F9 \uBD80\uBD84\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "application.map"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ExtFlashSection
                0x24000000    0x23ec0
 *(ExtFlashSection ExtFlashSection.*)
 ExtFlashSection
                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o
                0x24000000                _blue_logo_touchgfx_logo
 ExtFlashSection
                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o
                0x24010000                _blue_buttons_round_edge_small
 ExtFlashSection
                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o
                0x24019f60                _blue_buttons_round_edge_small_pressed
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uB97C \uBCF4\uBA74 \uC774\uBBF8\uC9C0\uC758 \uC804\uCCB4 \uD06C\uAE30\uAC00 0x23ec0 = 147.136 \uBC14\uC774\uD2B8\uC784\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5\uC744 \uBCF4\uC720\uD558\uACE0 \uC788\uB294 \uC138 \uAC1C\uC758 \uBC30\uC5F4\uC774 \uC8FC\uC18C 0x24000000\uBD80\uD130 \uC21C\uCC28\uC801\uC73C\uB85C \uC704\uCE58\uD574 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uB370\uC774\uD130\uB97C SD \uCE74\uB4DC\uB85C \uC62E\uAE34\uB2E4\uACE0 \uAC00\uC815\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uAC04\uB2E8\uD55C objcopy \uBA85\uB839\uC744 \uC0AC\uC6A9\uD558\uC5EC .elf \uD30C\uC77C\uC5D0\uC11C \uBE44\uD2B8\uB9F5\uC5D0 \uB300\uD55C \uC774\uC9C4 \uB370\uC774\uD130\uB97C \uCD94\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf
$ ls -l images.bin
-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB807\uAC8C \uD558\uBA74 \uC774\uBBF8\uC9C0 \uBC14\uC774\uD2B8 \uBC30\uC5F4\uB9CC \uD3EC\uD568\uD558\uB294 \uD30C\uC77C(images.bin)\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC740 SD \uCE74\uB4DC\uC778 USB \uD50C\uB798\uC2DC\uC5D0 \uBCF5\uC0AC\uD558\uAC70\uB098, \uD50C\uB798\uC2DC \uCE69\uC5D0 \uD504\uB85C\uADF8\uB798\uBC0D\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C\uB294 TouchGFX\uAC00 \uC8FC\uC18C\uAC00 0x24000000\uBCF4\uB2E4 \uC704\uC778 \uB370\uC774\uD130\uB97C \uC694\uCCAD\uD560 \uB54C SD \uCE74\uB4DC\uC758 images.bin \uD30C\uC77C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "modifying-the-blockcopy-function"
  }), `BlockCopy \uD568\uC218 \uC218\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5\uC744 RAM\uC5D0 \uCE90\uC2F1\uD558\uBA74 TouchGFX\uAC00 HAL::BlockCopy\uB97C \uD638\uCD9C\uD558\uC5EC \uB370\uC774\uD130\uB97C \uAC00\uC838\uC628\uB2E4\uB294 \uC810\uC744 \uAE30\uC5B5\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB97C SD \uCE74\uB4DC\uC758 \uB370\uC774\uD130\uC5D0 \uB9C1\uD06C\uC2DC\uD0A4\uAE30 \uC704\uD574 \uD2B9\uC815 HAL \uD074\uB798\uC2A4\uC5D0\uC11C \uC0C8\uB85C\uC6B4 BlockCopy\uB97C \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uC774 \uD074\uB798\uC2A4\uB97C TouchGFXHAL(TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131)\uC774\uB77C\uACE0 \uCE6D\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHal.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TouchGFXHAL : public TouchGFXGeneratedHAL
{
public:
    ...
    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHal.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source
// to the cache.
bool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)
{
  // If requested data is located within the memory block we have assigned for ExtFlashSection,
  // provide an implementation for data copying.
  if (src >= 0x24000000 && src < 0x24100000)
  {
    void* dataOffset = src - 0x24000000;
    // In this example we assume graphics is placed in SD card, and that we have an appropriate function
    // for copying data from there.
    sdcard_read(dest, dataOffset, numBytes);
    return true;
  }
  else
  {
    // For all other addresses, just use the default implementation.
    // This is important, as blockCopy is also used for other things in the core framework.
    return HAL::blockCopy(dest, src, numBytes);
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C SD \uCE74\uB4DC\uC5D0\uC11C \uBE44\uD2B8\uB9F5 \uCE90\uC2F1\uC744 \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uAC00 \uCE90\uC2F1\uB418\uC9C0 \uC54A\uC740 \uBE44\uD2B8\uB9F5\uC5D0 \uB300\uD55C \uADF8\uB9AC\uAE30\uB97C \uC2DC\uB3C4\uD558\uB294 \uACBD\uC6B0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bitmap_database`), ` \uD14C\uC774\uBE14\uC5D0 \uC788\uB294 \uC8FC\uC18C\uC5D0\uC11C \uD53D\uC140\uC744 \uC77D\uC5B4\uC62C \uAC83\uC785\uB2C8\uB2E4. \uC774 \uC8FC\uC18C\uB294 0x24000000 - 0x24100000 \uBC94\uC704 \uB0B4\uC5D0 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC77D\uAE30 \uC791\uC5C5\uC5D0\uC11C \uC608\uC678\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "linking-images-to-ram"
  }), `RAM\uC5D0 \uC774\uBBF8\uC9C0 \uB9C1\uD06C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC6A9 RAM\uC758 \uC6A9\uB7C9\uC774 \uBAA8\uB4E0 \uC774\uBBF8\uC9C0\uB97C \uC800\uC7A5\uD560 \uB9CC\uD07C \uCDA9\uBD84\uD788 \uD070 \uACBD\uC6B0(\uC704\uC758 \uC608\uC81C\uC758 \uACBD\uC6B0 147,136\uBC14\uC774\uD2B8 \uC774\uC0C1), \uC774\uBBF8\uC9C0\uB97C \uBCF5\uC0AC\uD558\uAE30 \uC704\uD574 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uC0AC\uC6A9\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC804\uB7B5\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBBF8\uC9C0\uC5D0 \uB300\uD55C \uACE0\uC815 \uC8FC\uC18C \uBC0F RAM \uBC94\uC704 \uC120\uD0DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC758 RAM \uC601\uC5ED\uC5D0\uC11C \uD574\uB2F9 \uBC94\uC704\uB97C \uC81C\uAC70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC120\uD0DD\uD55C \uC8FC\uC18C\uC640 \uD06C\uAE30\uB85C \uC0C8\uB85C\uC6B4 IMAGES \uC601\uC5ED \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IMAGES \uC601\uC5ED\uC5D0 ExtFlashSection\uC744 \uBC30\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9C1\uD06C\uD558\uACE0 .map \uD30C\uC77C\uC744 \uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `application.elf\uC5D0\uC11C images.bin \uD30C\uC77C \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX\uAC00 \uC2DC\uC791\uB418\uAE30 \uC804\uC5D0 \uC804\uCCB4 images.bin \uD30C\uC77C\uC744 SD \uCE74\uB4DC\uC5D0\uC11C RAM\uC758 \uC120\uD0DD \uC8FC\uC18C\uB85C \uBCF5\uC0AC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC194\uB8E8\uC158\uC740 \uAC04\uB2E8\uD558\uC9C0\uB9CC \uB2E4\uC74C\uACFC \uAC19\uC774 \uBA87 \uAC00\uC9C0 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAC00\uC6A9 RAM\uC758 \uC6A9\uB7C9\uC774 \uBAA8\uB4E0 \uC774\uBBF8\uC9C0\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uC744 \uB9CC\uD07C \uCEE4\uC57C \uD568`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SD \uCE74\uB4DC\uC5D0\uC11C \uBCF5\uC0AC\uAC00 \uC774\uB904\uC9C0\uAE30 \uB54C\uBB38\uC5D0 \uC2DC\uC791 \uC2DC\uAC04\uC774 \uB354 \uAE38\uC5B4\uC9D0(\uBA54\uAC00 \uBC14\uC774\uD2B8\uC778 \uACBD\uC6B0 \uBA87 \uCD08\uAC00 \uC18C\uC694\uB428)`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);