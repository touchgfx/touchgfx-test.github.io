"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6741],{

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

/***/ 19378:
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
  id: "font-cache",
  title: "\uD3F0\uD2B8 \uCE90\uC2F1"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/font-cache",
  "id": "development/ui-development/touchgfx-engine-features/font-cache",
  "title": "\uD3F0\uD2B8 \uCE90\uC2F1",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/font-cache.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/font-cache",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/font-cache",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "font-cache",
    "title": "\uD3F0\uD2B8 \uCE90\uC2F1"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBC14\uC774\uB108\uB9AC \uD3F0\uD2B8",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"
  },
  "next": {
    "title": "\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"
  }
};
const assets = {};


const toc = [{
  value: "\uD3F0\uD2B8 \uCE90\uC2F1",
  id: "font-caching",
  level: 2
}, {
  value: "\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uB85C \uD3F0\uD2B8 \uCE90\uC2DC \uC0AC\uC6A9\uD558\uAE30",
  id: "using-the-font-cache-in-application-code",
  level: 2
}, {
  value: "\uBB38\uC790 \uCE90\uC2F1",
  id: "caching-letters",
  level: 2
}, {
  value: "\uD569\uC790(Ligature) \uCE90\uC2F1",
  id: "caching-ligatures",
  level: 2
}, {
  value: "\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9",
  id: "memory-usage",
  level: 2
}, {
  value: "GSUB \uD14C\uC774\uBE14 \uCE90\uC2F1",
  id: "caching-gsub-tables",
  level: 2
}, {
  value: "\uD3F0\uD2B8 \uD30C\uC77C \uB9AC\uB354 \uAD6C\uD604\uD558\uAE30",
  id: "implementing-the-font-file-reader",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX\uC5D0\uC11C \uD3F0\uD2B8 \uCE90\uC2DC\uB97C \uC0AC\uC6A9\uD574 \uC774\uC9C4 \uD3F0\uD2B8\uB97C \uCC98\uB9AC\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-binary-fonts"
  }), `\uC774\uC9C4 \uD3F0\uD2B8`), ` \uC139\uC158\uC744 \uC77D\uC5B4\uBCF4\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "font-caching"
  }), `\uD3F0\uD2B8 \uCE90\uC2F1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC11C \uC774\uC9C4 \uD3F0\uD2B8\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uD3F0\uD2B8 \uC804\uCCB4\uB97C \uBA54\uBAA8\uB9AC\uC5D0 \uB85C\uB4DC\uD574\uC57C \uD55C\uB2E4\uACE0 \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD070 \uC911\uAD6D\uC5B4 \uD3F0\uD2B8\uCC98\uB7FC \uD3F0\uD2B8\uAC00 \uD070 \uACBD\uC6B0\uC5D0\uB294 \uBC14\uB78C\uC9C1\uD55C \uBC29\uBC95\uC774 \uC544\uB2D9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uCE90\uC2F1\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC678\uC7A5 \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uBB38\uC790\uC5F4\uC744 \uD45C\uC2DC\uD558\uB294 \uB370 \uD544\uC694\uD55C \uBB38\uC790\uB9CC \uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uC989, \uC804\uCCB4 \uD3F0\uD2B8\uB97C \uC8FC\uC18C \uC9C0\uC815\uC774 \uAC00\uB2A5\uD55C \uD50C\uB798\uC2DC\uB098 RAM\uC5D0 \uC800\uC7A5\uD558\uC9C0 \uC54A\uACE0 \uB300\uC6A9\uB7C9 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uADF8\uB9BC\uC5D0\uC11C \uCEF4\uD30C\uC77C\uB41C \uD3F0\uD2B8\uC778 Font2\uAC00 \uD3F0\uD2B8 \uCE90\uC2DC\uB85C \uB300\uCCB4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 TouchGFX\uAC00 Font2\uB97C \uC0AC\uC6A9\uD558\uB294 \uD14D\uC2A4\uD2B8\uB97C \uADF8\uB824\uC57C\uD560 \uB54C \uD3F0\uD2B8 \uD14C\uC774\uBE14\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CachedFont`), ` \uAC1D\uCCB4\uB97C \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uB97C \uCC3E\uC2B5\uB2C8\uB2E4. \uC774 \uD2B9\uC218 \uD3F0\uD2B8\uB294 FontCache \uAC1D\uCCB4\uC5D0\uC11C \uD574\uB2F9\uD558\uB294 \uBB38\uC790\uB97C \uC870\uD68C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-font-cache/fontcache1.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\uCE90\uC2F1\uB41C \uD3F0\uD2B8 \uC0AC\uC6A9\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CachedFont\uB294 \uC5F0\uACB0\uB41C \uD3F0\uD2B8(\uC704\uC758 Font2)\uB97C \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uC640 \uD568\uAED8 \uC124\uC815\uB429\uB2C8\uB2E4. TouchGFX\uAC00 CachedFont\uC5D0\uAC8C \uD2B9\uC815 \uBB38\uC790\uB97C \uC694\uCCAD\uD558\uBA74 CachedFont\uAC00 \uBA3C\uC800 \uB300\uCCB4\uD558\uB294 \uC77C\uBC18 \uD3F0\uD2B8(Font2)\uB97C \uD655\uC778\uD569\uB2C8\uB2E4. \uC774 \uD3F0\uD2B8\uB294 \uBE48 \uD3F0\uD2B8\uC77C \uC218 \uC788\uC9C0\uB9CC, \uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uBB38\uC790\uAC00 \uD3EC\uD568\uB41C \u201C\uC77C\uBC18\u201D \uD3F0\uD2B8\uAC00 \uB420 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uD3F0\uD2B8\uC5D0 \uD544\uC694\uD55C \uBB38\uC790\uAC00 \uC5C6\uC73C\uBA74 CachedFont\uAC00 FontCache\uB97C \uBCF4\uACE0 \uD574\uB2F9 \uBB38\uC790\uAC00 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uB85C\uB4DC\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18 \uD3F0\uD2B8\uC5D0\uC11C \uC774\uBBF8 \uCC3E\uC544\uB0B8 \uBB38\uC790\uB294 \uCE90\uC2F1\uD560 \uD544\uC694\uAC00 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uC774\uB7EC\uD55C \uC6D0\uB9AC\uB294 \uCE90\uC2F1\uD574\uC57C \uD560 \uBB38\uC790 \uC218\uB97C \uCD5C\uC18C\uD654\uD558\uB294 \uD6A8\uACFC\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-the-font-cache-in-application-code"
  }), `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uB85C \uD3F0\uD2B8 \uCE90\uC2DC \uC0AC\uC6A9\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 CachedFont\uB97C \uC124\uCE58\uD558\uB824\uBA74 \uBA3C\uC800 FontCache, \uBA54\uBAA8\uB9AC \uBC84\uD37C, \uADF8\uB9AC\uACE0 \uD30C\uC77C \uC2DC\uC2A4\uD15C \uB9AC\uB354 \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t fontdata[5120]; //Memory buffer for the font cache, 5Kb
FontCache fontCache;
CachedFont cachedFont;  //Cached Font object
FileDataReader reader;  //Filesystem reader object
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FontCache\uAC00 \uBC84\uD37C\uC640 \uB9AC\uB354\uC5D0 \uC5F0\uACB0\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//setup the font cache with buffer and size; and file reader object
fontCache.setMemory(fontdata, 5120);
fontCache.setReader(&reader);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD3F0\uD2B8 \uCE90\uC2DC\uB97C \uC124\uC815\uD558\uACE0, CachedFont\uB97C \uCD08\uAE30\uD654\uD558\uC5EC TouchGFX\uB85C \uC804\uB2EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uCE90\uC2DC\uC5D0\uC11C CachedFont \uAC1D\uCCB4\uB97C \uCD08\uAE30\uD654\uD558\uB824\uBA74 TextId\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. TextId\uB294 CachedFont\uAC00 \uAC00\uB9AC\uCF1C\uC57C \uD560 \uD3F0\uD2B8\uB97C \uC870\uD68C\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD14D\uC2A4\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD3F0\uD2B8\uB97C \uC548\uC2EC\uD558\uACE0 \uB300\uCCB4\uD558\uC5EC \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//initialize the cachedFont object to the font used by T_SINGLEUSEID1
TypedText text = TypedText(T_SINGLEUSEID1);
fontCache.initializeCachedFont(text, &cachedFont);

//replace the linked in font in TouchGFX with cachedFont
TypedTextDatabase::setFont(DEFAULT, &cachedFont);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uCF54\uB4DC\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC5B4\uB514\uB4E0\uC9C0 \uC0BD\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uCE90\uC2F1\uB41C \uD3F0\uD2B8\uAC00 \uD2B9\uC815 View\uC5D0\uC11C\uB9CC \uC0AC\uC6A9\uB41C\uB2E4\uBA74 \uD574\uB2F9 View\uAC00 \uCF54\uB4DC\uB97C \uC0BD\uC785\uD558\uAE30\uC5D0 \uC801\uD569\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-letters"
  }), `\uBB38\uC790 \uCE90\uC2F1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uCE90\uC2DC\uAC00 \uC544\uC9C1 \uBE48 \uC0C1\uD0DC\uC785\uB2C8\uB2E4. \uBB38\uC790\uB97C \uD45C\uC2DC\uD558\uB824\uBA74 \uBA3C\uC800 \uD574\uB2F9 \uBB38\uC790\uB97C \uD3F0\uD2B8 \uCE90\uC2DC\uC5D0\uC11C \uC77D\uC5B4\uC640\uC57C \uD569\uB2C8\uB2E4. \uADF8 \uBC29\uBC95\uC740 \uC720\uB2C8\uCF54\uB4DC \uBC30\uC5F4(\uBB38\uC790\uC5F4)\uC744 \uD3F0\uD2B8 \uCE90\uC2DC\uB85C \uC804\uB2EC\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uC5D0\uC11C\uB294 T_SINGLEUSEID1\uC5D0\uC11C \uD14D\uC2A4\uD2B8\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//cache the glyphs used by the text T_SINGLEUSEID1
Unicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());
bool b = fontCache.cacheString(text, str);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uCE90\uC2DC\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `str`), ` \uBC30\uC5F4\uC5D0\uC11C \uCC3E\uC740 \uBB38\uC790\uB97C \uB9AC\uB354 \uAC1D\uCCB4\uB97C \uD1B5\uD574 \uB85C\uB4DC\uD569\uB2C8\uB2E4. \uC77D\uC5B4\uC628 \uC720\uB2C8\uCF54\uB4DC\uB294 TextId `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `text`), ` \uC778\uC218\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD3F0\uD2B8\uB85C \uC5F0\uACB0\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC815\uD655\uD55C \uD30C\uC77C\uC5D0\uC11C \uB85C\uB4DC\uD560 \uC218 \uC788\uB3C4\uB85D \uB9AC\uB354 \uAC1D\uCCB4\uB97C \uAD6C\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-ligatures"
  }), `\uD569\uC790(Ligature) \uCE90\uC2F1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD45C\uC2DC\uD558\uAE30 \uC804\uC5D0 \uC5F0\uC18D\uB418\uB294 \uC720\uB2C8\uCF54\uB4DC\uB97C \uB2E4\uB978 \uC720\uB2C8\uCF54\uB4DC\uB85C \uBCC0\uD658\uD558\uB294 \uC5B8\uC5B4(\uC544\uB78D\uC5B4, \uD78C\uB514\uC5B4 \uB4F1)\uC758 \uACBD\uC6B0 \uC704\uC758 \uBC29\uBC95\uC740 \uD6A8\uACFC\uC801\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC6D0\uBCF8 \uC720\uB2C8\uCF54\uB4DC\uB9CC \uCE90\uC2F1\uD560 \uBFD0 \uBCC0\uD658 \uD6C4 \uD45C\uC2DC\uB418\uB294 \uC720\uB2C8\uCF54\uB4DC\uB294 \uCE90\uC2F1\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC544\uB798 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC9C0\uC815\uB41C \uC720\uB2C8\uCF54\uB4DC\uB97C \uBCC0\uD658\uD55C \uD6C4 \uD544\uC694\uD55C \uC720\uB2C8\uCF54\uB4DC\uB97C \uCE90\uC2F1\uD569\uB2C8\uB2E4(\uBCC0\uD658 \uD6C4).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//cache the glyphs used by the text T_SINGLEUSEID1 after conversion
Unicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());
bool b = fontCache.cacheLigatures(cachedFont, text, str);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-usage"
  }), `\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uCE90\uC2DC\uB294 \uD604\uC7AC \uC0AC\uC6A9\uB41C \uBA54\uBAA8\uB9AC \uC6A9\uB7C9\uC744 \uACC4\uC0B0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx_printf("Memory usage %d\\n", fontCache.getMemoryUsage());
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "caching-gsub-tables"
  }), `GSUB \uD14C\uC774\uBE14 \uCE90\uC2F1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uD3F0\uD2B8\uB294 \uB80C\uB354\uB9C1 \uC2DC GSUB \uD14C\uC774\uBE14\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC911\uB3D9 \uC5B8\uC5B4\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC77C\uBD80 \uD3F0\uD2B8(Devanagari \uD3F0\uD2B8 \uB4F1)\uAC00 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. GSUB \uD14C\uC774\uBE14\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD3F0\uD2B8 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uBB38\uC790 \uC21C\uC11C\uB97C \uC870\uC815\uD558\uC5EC \uC5F0\uC18D\uB418\uB294 \uBB38\uC790\uB97C \uB2E4\uB978 "\uACB0\uD569" \uBB38\uC790\uB85C \uB300\uCCB4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uCE90\uC2DC\uB294 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC774 GSUB \uD14C\uC774\uBE14\uC744 \uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC73C\uBA74 GSUB \uD14C\uC774\uBE14\uC744 \uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1 \uC2DC\uC2A4\uD15C\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uD3F0\uD2B8\uAC00 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE90\uC2F1\uB41C \uD3F0\uD2B8\uB97C \uCD08\uAE30\uD654\uD560 \uB54C \uB2E4\uC74C\uACFC \uAC19\uC774 \uBCC4\uB3C4\uC758 \uC778\uC218\uB97C \uCD94\uAC00\uD558\uBA74 GSUB \uD14C\uC774\uBE14\uC774 \uB85C\uB4DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3}",
    "{3-3}": true
  }), `//initialize the cachedFont and load the GSUB table
text = TypedText(T_SINGLEUSEID1);
fontCache.initializeCachedFont(text, &cachedFont, true);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "implementing-the-font-file-reader"
  }), `\uD3F0\uD2B8 \uD30C\uC77C \uB9AC\uB354 \uAD6C\uD604\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uC608\uC81C \uCF54\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 FileDataReader \uD074\uB798\uC2A4\uB294 \uC0AC\uC6A9\uD558\uB294 \uC6B4\uC601 \uCCB4\uC81C\uC5D0 \uB530\uB77C \uB2E4\uB974\uAE30 \uB54C\uBB38\uC5D0 TouchGFX\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC77C\uBC18 "stdio" \uD638\uD658 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC744 \uC704\uD55C \uC608\uC81C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5,13-13,17-17,21-21}",
    "{5-5,13-13,17-17,21-21}": true
  }), `class FileDataReader : public FontDataReader
{
public:
    virtual ~FileDataReader() { }
    virtual void open()
    {
        fp = fopen("Font_verdana_20_4bpp.bin", "rb");
        if (!fp)
        {
            touchgfx_printf("Unable to open font file!!!\\n");
        }
    }
    virtual void close()
    {
        fclose(fp);
    }
    virtual void setPosition(uint32_t position)
    {
        fseek(fp, position, SEEK_SET);
    }
    virtual void readData(void* out, uint32_t numberOfBytes)
    {
        fread(out, numberOfBytes, 1, fp);
    }
private:
    FILE* fp;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FileDataReader \uD074\uB798\uC2A4\uB294 FontCache.hpp\uC5D0\uC11C FontDataReader \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uD604\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FontCache.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-8}",
    "{5-8}": true
  }), `class FontDataReader
{
public:
    virtual ~FontDataReader() { }
    virtual void open() = 0;
    virtual void close() = 0;
    virtual void setPosition(uint32_t position) = 0;
    virtual void readData(void* out, uint32_t numberOfBytes) = 0;
};
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);