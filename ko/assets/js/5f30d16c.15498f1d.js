"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6452],{

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

/***/ 29070:
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
  id: "caching-bitmaps",
  title: "\uBE44\uD2B8\uB9F5 \uCE90\uC2F1"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "id": "development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "title": "\uBE44\uD2B8\uB9F5 \uCE90\uC2F1",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/caching-bitmaps.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "caching-bitmaps",
    "title": "\uBE44\uD2B8\uB9F5 \uCE90\uC2F1"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/custom-containers"
  },
  "next": {
    "title": "\uCEE4\uC2A4\uD140 \uC704\uC82F",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/custom-widgets"
  }
};
const assets = {};


const toc = [{
  value: "\uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uC124\uC815",
  id: "setup-the-bitmap-cache",
  level: 2
}, {
  value: "\uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uAD6C\uC131",
  id: "bitmap-cache-configuration",
  level: 3
}, {
  value: "TouchGFX Generator\uB85C \uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uD65C\uC131\uD654\uD558\uAE30",
  id: "enabling-bitmap-cache-with-touchgfx-generator",
  level: 4
}, {
  value: "\uD50C\uB798\uC2DC\uC5D0\uC11C \uCE90\uC2DC\uB85C \uB370\uC774\uD130\uB97C \uBCF5\uC0AC\uD558\uB294 BlockCopy",
  id: "blockcopy-copies-data-from-flash-to-the-cache",
  level: 3
}, {
  value: "\uCE90\uC2DC \uC5F0\uC0B0",
  id: "cache-operations",
  level: 2
}, {
  value: "\uCE90\uC2DC \uC804\uB7B5",
  id: "cache-strategies",
  level: 2
}, {
  value: "\uC2A4\uD06C\uB9B0 \uAE30\uC900 \uBE44\uD2B8\uB9F5 \uCE90\uC2F1",
  id: "cache-bitmap-on-a-screen-basis",
  level: 3
}, {
  value: "\uCE90\uC2DC\uC5D0\uC11C \uBC30\uACBD \uBE44\uD2B8\uB9F5 \uB300\uCCB4\uD558\uAE30",
  id: "replace-the-background-bitmaps-in-the-cache",
  level: 3
}, {
  value: "\uCE90\uC2DC \uBA54\uBAA8\uB9AC \uAD00\uB9AC",
  id: "cache-memory-management",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX\uC758 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBE44\uD2B8\uB9F5\uC744 \uC800\uC7A5(\uB610\uB294 \uCE90\uC2F1)\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 \uC804\uC6A9 RAM \uBC84\uD37C\uC785\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5\uC774 \uCE90\uC2F1\uB418\uBA74 TouchGFX\uAC00 \uBE44\uD2B8\uB9F5\uC744 \uB4DC\uB85C\uC789\uD560 \uB54C \uC790\uB3D9\uC73C\uB85C RAM \uCE90\uC2DC\uB97C \uD53D\uC140 \uC18C\uC2A4\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2F1\uC740 \uC5EC\uB7EC \uACBD\uC6B0\uC5D0 \uC720\uC6A9\uD558\uAC8C \uC0AC\uC6A9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. RAM\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC624\uBA74 \uD50C\uB798\uC2DC\uC5D0\uC11C \uC77D\uC5B4\uC624\uB294 \uAC83\uBCF4\uB2E4 \uB300\uCCB4\uB85C \uC18D\uB3C4\uAC00 \uB354 \uBE60\uB985\uB2C8\uB2E4(\uBE44\uC120\uD615 \uBA54\uBAA8\uB9AC \uC561\uC138\uC2A4\uB97C \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uD2B9\uD788 Texturemapper\uB97C \uC0AC\uC6A9\uD560 \uB54C \uB354\uC6B1 \uADF8\uB807\uC2B5\uB2C8\uB2E4). \uB530\uB77C\uC11C RAM\uC73C\uB85C \uCE90\uC2F1\uD558\uBA74 UI\uC758 \uC131\uB2A5\uC744 \uB192\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB0B4\uC7A5 \uD50C\uB798\uC2DC\uC5D0\uC11C \uC678\uC7A5 RAM\uC73C\uB85C \uCE90\uC2F1\uD558\uBA74 \uC624\uD788\uB824 \uC131\uB2A5\uC774 \uB5A8\uC5B4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C RAM\uC73C\uB85C \uCE90\uC2F1\uD558\uBA74 UI\uB97C \uD45C\uC2DC\uD558\uB294 \uB3D9\uC2DC\uC5D0 \uD50C\uB798\uC2DC\uB97C \uB2E4\uB978 \uC6A9\uB3C4(\uC608: \uB85C\uADF8 \uD30C\uC77C)\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uB370, \uC774\uB294 \uBE44\uD2B8\uB9F5\uC744 RAM\uC5D0\uC11C \uC77D\uC5B4\uC624\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4(\uC77C\uBD80 \uACBD\uC6B0 \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uC4F0\uB824\uBA74 \uBE44 \uBA54\uBAA8\uB9AC \uB9E4\uD551\uC774 \uD544\uC694\uD569\uB2C8\uB2E4).  \uADF8 \uBC16\uC5D0 \uBE44\uD2B8\uB9F5 \uD53D\uC140\uC5D0 \uB300\uD55C \uC218\uC815\uC774 \uD544\uC694\uD574\uC11C \uBE44\uD2B8\uB9F5\uC744 \uC218\uC815 \uAC00\uB2A5\uD55C \uBA54\uBAA8\uB9AC\uC5D0 \uC800\uC7A5\uD574\uC57C \uD560 \uB54C\uC5D0\uB3C4 \uC720\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC131\uB2A5\uC0C1\uC758 \uC774\uC720\uB85C \uC678\uC7A5 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB41C \uADF8\uB798\uD53D \uB370\uC774\uD130\uC5D0 \uB4DC\uB77C\uC774\uBC84 \uACC4\uCE35\uC744 \uD1B5\uD558\uC9C0 \uC54A\uACE0 (\uD3EC\uC778\uD130\uB97C \uD1B5\uD574) \uC9C1\uC811 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC774 \uB9D0\uC740 TouchGFX\uB294 \uBE44 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uD50C\uB798\uC2DC(SD-\uCE74\uB4DC\uC640 \uAC19\uC740 Non-memory mapped flash)\uC5D0\uC11C \uC9C1\uC811 \uB80C\uB354\uB9C1\uD558\uC9C0 \uBABB\uD55C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB294 \uC804\uC6D0\uC774 \uCF1C\uC838 \uC788\uC744 \uB54C \uBE44\uD2B8\uB9F5 \uB370\uC774\uD130\uC758 \uC77C\uBD80 \uB610\uB294 \uC804\uBD80\uB97C RAM\uC5D0 \uCE90\uC2F1\uD558\uB294 \uBA54\uCEE4\uB2C8\uC998\uC744 \uD1B5\uD574 \uC774\uB7EC\uD55C \uC81C\uC57D\uC744 \uD574\uACB0\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBE44\uD2B8\uB9F5 \uCE90\uC2F1\uC740 \uBE44\uD2B8\uB9F5\uC744 USB \uB514\uC2A4\uD06C\uB098 SD-\uCE74\uB4DC \uAC19\uC774 \uC18D\uB3C4\uAC00 \uB290\uB9B0 \uC678\uC7A5 \uC800\uC7A5 \uC7A5\uCE58\uC5D0 \uC800\uC7A5\uD574\uC57C \uD560 \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "setup-the-bitmap-cache"
  }), `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uC124\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2F1 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uBA3C\uC800 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uAD6C\uC131 \uC815\uBCF4\uB97C TouchGFX\uC5D0 \uC81C\uACF5\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C (\uC77C\uBD80 \uACBD\uC6B0) \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uB530\uB77C \uC678\uC7A5 \uC800\uC7A5 \uC7A5\uCE58\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC62C \uC218 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BlockCopy`), ` \uD568\uC218\uC758 \uAD6C\uD604\uCCB4\uB97C \uC81C\uACF5\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "bitmap-cache-configuration"
  }), `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uAD6C\uC131\uC740 \uBC84\uD37C\uB97C \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uC640 \uBC84\uD37C \uD06C\uAE30\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. Bitmap::setCache\uB97C \uD638\uCD9C\uD574\uC11C \uC774 \uB450 \uAC12\uC744 TouchGFX\uC5D0 \uC81C\uACF5\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uD568\uC218 \uD638\uCD9C\uC740 \uC77C\uBC18\uC801\uC73C\uB85C FrontendApplication.cpp \uD30C\uC77C\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    // Place cache start address in SDRAM at address 0xC0008000;
    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;
    const uint32_t cacheSize = 0x300000; //3 MB, as example
    Bitmap::setCache(cacheStartAddr, cacheSize);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC608\uC81C\uC5D0\uC11C\uB294 \uC678\uC7A5 \uBA54\uBAA8\uB9AC\uC758 3MB \uBC84\uD37C\uAC00 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB85C TouchGFX\uC5D0 \uC804\uB2EC\uB429\uB2C8\uB2E4. \uC8FC\uC18C\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD504\uB85C\uADF8\uB798\uBA38\uAC00 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uB2E4\uC74C \uC608\uC81C\uC5D0\uC11C\uB294 \uBC30\uC5F4\uC744 \uC120\uC5B8\uD55C \uD6C4 \uBC30\uC5F4\uC758 \uC8FC\uC18C\uC640 \uD06C\uAE30\uB9CC \uC804\uB2EC\uD569\uB2C8\uB2E4. \uBC30\uC5F4\uC758 \uAD6C\uCCB4\uC801\uC778 \uC704\uCE58\uB294 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uC774 \uBA54\uC18C\uB4DC\uB294 \uB0B4\uC7A5 RAM\uC5D0\uC11C (\uC791\uC740) \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uC0DD\uC131\uD560 \uB54C \uC8FC\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "FrontendApplication.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/Bitmap.hpp>

// Define an array for the bitmap cache
uint16_t cache[128*1024]; //256 KB cache

FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : FrontendApplicationBase(m, heap)
{
    Bitmap::setCache(cache, sizeof(cache));
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "enabling-bitmap-cache-with-touchgfx-generator"
  }), `TouchGFX Generator\uB85C \uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uD65C\uC131\uD654\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `CubeMX\uC640 TouchGFX Generator\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0, TouchGFXHAL.cpp\uC5D0\uC11C\uB3C4 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uD65C\uC131\uD654 \uBC0F \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::initialize()
{
    /* Initialize TouchGFX Engine */
    TouchGFXGeneratedHAL::initialize();

    uint16_t* cacheStartAddr = (uint16_t*)0xC0008000;
    uint32_t cacheSize = 0x300000; //3 MB, as example

    touchgfx::Bitmap::setCache(cache, sizeof(cache));
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE90\uC2DC\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uC0C8\uB85C\uC6B4 \uCE90\uC2DC\uB97C \uC124\uC815\uD558\uAE30 \uC804\uC5D0 \uC774\uC804 \uCE90\uC2DC\uB97C \uC0AD\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB54C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Bitmap::removeCache()`), `\uB97C \uD638\uCD9C\uD558\uBA74 \uC0AD\uC81C\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD55C \uBC88\uB9CC \uC124\uC815\uD55C \uACBD\uC6B0\uC5D0\uB294 \uCE90\uC2DC\uB97C \uC0AD\uC81C\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD574\uC57C \uD55C\uB2E4\uBA74 \uB2F9\uC5F0\uD788 \uCE90\uC2DC\uC758 \uD06C\uAE30\uB3C4 \uBE44\uD2B8\uB9F5 \uB370\uC774\uD130\uB97C \uBAA8\uB450 \uC800\uC7A5\uD560 \uC218 \uC788\uC744 \uB9CC\uD07C \uCEE4\uC57C \uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uAE30\uB85D\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uBA54\uBAA8\uB9AC \uC6A9\uB7C9(8\uBC14\uC774\uD2B8 x \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBE44\uD2B8\uB9F5 \uC218)\uC740 \uB9CE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC2E4\uC81C\uB85C \uC6D0\uC2DC \uD53D\uC140 \uB370\uC774\uD130\uC5D0 \uD544\uC694\uD55C \uC6A9\uB7C9\uBCF4\uB2E4 \uC57D\uAC04 \uB354 \uB9CE\uC740 \uBA54\uBAA8\uB9AC\uB97C \uD560\uB2F9\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uC6A9\uB7C9\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBE44\uD2B8\uB9F5 \uC218\uC5D0 \uB530\uB77C \uB2E4\uB974\uC9C0\uB9CC, \uBCF4\uD1B5 \uBA87 \uD0AC\uB85C\uBC14\uC774\uD2B8\uC758 \uBA54\uBAA8\uB9AC\uB9CC \uCD94\uAC00\uB85C \uC0AC\uC6A9\uD574\uB3C4 \uCDA9\uBD84\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "blockcopy-copies-data-from-flash-to-the-cache"
  }), `\uD50C\uB798\uC2DC\uC5D0\uC11C \uCE90\uC2DC\uB85C \uB370\uC774\uD130\uB97C \uBCF5\uC0AC\uD558\uB294 BlockCopy`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD558\uBA74 TouchGFX\uAC00 HAL \uD074\uB798\uC2A4\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `BlockCopy`), ` \uD568\uC218\uB97C \uC0AC\uC6A9\uD574 \uD53D\uC140\uC744 \uC6D0\uBCF8 \uC704\uCE58\uC5D0\uC11C \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB85C \uBCF5\uC0AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5\uC744 \uC8FC\uC18C \uC9C0\uC815\uC774 \uAC00\uB2A5\uD55C \uC77C\uBC18 \uD50C\uB798\uC2DC(\uB0B4\uC7A5 \uD50C\uB798\uC2DC \uB610\uB294 QSPI-\uD50C\uB798\uC2DC\uC640 \uAC19\uC740 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uC678\uC7A5 \uD50C\uB798\uC2DC)\uC5D0 \uC800\uC7A5\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC544\uBB34 \uC791\uC5C5\uB3C4 \uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uADF8 \uC774\uC720\uB294 \uB0B4\uC7A5\uB41C \uAD6C\uD604\uCCB4\uB9CC\uC73C\uB85C\uB3C4 \uCDA9\uBD84\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC18\uBA74, \uBE44\uD2B8\uB9F5\uC744 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC774\uB098 \uBE44 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uD50C\uB798\uC2DC\uC640 \uAC19\uC774 \uC8FC\uC18C \uC9C0\uC815\uC774 \uBD88\uAC00\uB2A5\uD55C \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD45C\uC900 \uBCF5\uC0AC \uBA54\uC18C\uB4DC\uB9CC\uC73C\uB85C\uB294 \uBD80\uC871\uD558\uAE30 \uB54C\uBB38\uC5D0 \uD2B9\uC815 \uD50C\uB798\uC2DC \uC800\uC7A5 \uC7A5\uCE58\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC62C \uC218 \uC788\uB294 \uC5C5\uB370\uC774\uD2B8 \uBC84\uC804\uC744 \uC81C\uACF5\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../scenarios/using-non-memory-mapped-flash"
  }), `\uBE44 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD574 \uC774\uBBF8\uC9C0 \uC800\uC7A5\uD558\uAE30`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cache-operations"
  }), `\uCE90\uC2DC \uC5F0\uC0B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2F1 \uC5F0\uC0B0\uC740 \uBAA8\uB450 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Bitmap`), ` \uD074\uB798\uC2A4\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "strong"
  }, `Bitmap`), ` \uCE90\uC2F1 \uBA54\uC18C\uB4DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC124\uBA85`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `bool Bitmap::cache(BitmapId id)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774 \uBA54\uC18C\uB4DC\uB294 \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD569\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5\uC740 \uCE90\uC2DC\uC5D0\uC11C \uBBF8\uC0AC\uC6A9 \uBA54\uBAA8\uB9AC\uAC00 \uCDA9\uBD84\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uCE90\uC2F1\uB429\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5\uC774 \uCE90\uC2F1\uB418\uBA74 true\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. \uC774\uBBF8 \uCE90\uC2F1\uB41C \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD558\uBA74 \uC544\uBB34 \uD6A8\uACFC\uB3C4 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `bool Bitmap::cacheReplaceBitmap(BitmapId out, BitmapId in)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774 \uBA54\uC18C\uB4DC\uB294 \uCE90\uC2DC\uC5D0 \uC800\uC7A5\uB41C \uBE44\uD2B8\uB9F5\uC744 \uB2E4\uB978 \uBE44\uD2B8\uB9F5\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4. \uB2E8, \uB300\uCCB4\uD560 \uBE44\uD2B8\uB9F5\uC774 \uC774\uBBF8 \uCE90\uC2F1\uB418\uC5B4 \uC788\uB294 \uC0C1\uD0DC\uC5D0\uC11C \uD06C\uAE30(\uBC14\uC774\uD2B8)\uAC00 \uB3D9\uC77C\uD574\uC57C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `This method replaces a bitmap (out) in the cache with another bitmap (in).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774 \uBA54\uC18C\uB4DC\uB294 \uCE90\uC2DC\uC5D0\uC11C \uBE44\uD2B8\uB9F5\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4. \uC0AD\uC81C\uB41C \uBE44\uD2B8\uB9F5\uC5D0\uC11C \uC0AC\uC6A9\uD588\uB358 \uBA54\uBAA8\uB9AC\uB294 \uC774\uD6C4 \uB2E4\uB978 \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `void Bitmap::clearCache()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774 \uBA54\uC18C\uB4DC\uB294 \uCE90\uC2F1\uB41C \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2DC\uC5D0\uC11C \uBAA8\uB450 \uC0AD\uC81C\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `void Bitmap::cacheAll()`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774 \uBA54\uC18C\uB4DC\uB294 \uBAA8\uB4E0 \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD569\uB2C8\uB2E4. \uB2E8 \uCE90\uC2DC\uC5D0 \uD560\uB2F9\uB41C RAM \uC6A9\uB7C9\uC774 \uC804\uCCB4 \uBE44\uD2B8\uB9F5 \uD06C\uAE30\uBCF4\uB2E4 \uC791\uC73C\uBA74 \uC774 \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cache-strategies"
  }), `\uCE90\uC2DC \uC804\uB7B5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uC5D0 \uD560\uB2F9\uB418\uB294 RAM \uC6A9\uB7C9\uC774 \uCD1D \uBE44\uD2B8\uB9F5 \uD06C\uAE30\uBCF4\uB2E4 \uC791\uC73C\uBA74 \uC2DC\uC791 \uC2DC \uBAA8\uB4E0 \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uB54C\uB294 \uCCAB \uBC88\uC9F8 \uC2A4\uD06C\uB9B0\uC5D0 \uD544\uC694\uD55C \uBE44\uD2B8\uB9F5\uB9CC \uCE90\uC2F1\uD558\uB294 \uB4F1 \uB2E4\uB978 \uBC29\uBC95\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0\uC744 \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uCE90\uC2F1\uB41C \uBE44\uD2B8\uB9F5\uC744 \uC77C\uBD80 \uB610\uB294 \uBAA8\uB450 \uC0AD\uC81C\uD55C \uD6C4 \uB2E4\uC74C \uC2A4\uD06C\uB9B0\uC5D0 \uD544\uC694\uD55C \uBE44\uD2B8\uB9F5\uC744 \uCE90\uC2F1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uB0B4\uC6A9\uC740 \uB2E4\uC74C \uC139\uC158\uC5D0\uC11C \uC608\uB97C \uB4E4\uC5B4 \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cache-bitmap-on-a-screen-basis"
  }), `\uC2A4\uD06C\uB9B0 \uAE30\uC900 \uBE44\uD2B8\uB9F5 \uCE90\uC2F1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB294 View\uB4E4\uC758 \uC138\uD2B8\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uAC01 View \uB9C8\uB2E4 \uBE44\uD2B8\uB9F5\uC744 \uC0AC\uC6A9\uD560 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4.  \uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0 \uB2E8\uC21C\uD55C \uCE90\uC2F1 \uC804\uB7B5\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View::setupScreen`), ` \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD574 View\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uBE44\uD2B8\uB9F5\uC744 \uBAA8\uB450 \uCE90\uC2F1\uD558\uACE0, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View::tearDownScreen`), ` \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uCE90\uC2DC\uB97C \uC18C\uAC70\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp (extract)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::setupScreen()
{
    //ensure background is cached
    Bitmap::cache(BITMAP_SCREEN2_ID);
    //cache some icons
    Bitmap::cache(BITMAP_ICON10_ID);
    Bitmap::cache(BITMAP_ICON11_ID);
    Bitmap::cache(BITMAP_ICON12_ID);
}

void Screen1View::tearDownScreen()
{
    //Remove all bitmaps from the cache
    Bitmap::clearCache();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE90\uC2DC\uC5D0 \uD560\uB2F9\uB418\uB294 \uBA54\uBAA8\uB9AC \uC694\uAC74\uC73C\uB85C\uB294 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uBE44\uD2B8\uB9F5\uC758 \uD06C\uAE30\uC640 \uBE44\uD2B8\uB9F5\uC758 \uC8FC\uC694 \uC6A9\uB3C4\uC785\uB2C8\uB2E4. \uC774 \uBA54\uC18C\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB450 \uAC1C\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View`), ` \uBAA8\uB450 \uBE44\uD2B8\uB9F5\uC744 \uC0AC\uC6A9\uD560 \uACBD\uC6B0 \uCCAB \uBC88\uC9F8 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View`), `\uC5D0\uC11C \uB098\uAC08 \uB54C \uD574\uB2F9 \uBE44\uD2B8\uB9F5\uC774 \uCE90\uC2DC\uC5D0\uC11C \uC0AD\uC81C\uB418\uACE0, \uB450 \uBC88\uC9F8 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View`), `\uB85C \uC804\uD658\uD558\uBA74 \uB2E4\uC2DC \uCE90\uC2F1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB54C\uB294 Bitmap::cacheRemoveBitmap\uC744 \uC0AC\uC6A9\uD574 \uBE44\uD2B8\uB9F5\uC744 \uC120\uBCC4\uC801\uC73C\uB85C \uC5B8\uCE90\uC2F1\uD558\uC5EC \uC774\uB7EC\uD55C \uC624\uBC84\uD5E4\uB4DC\uB97C \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. cacheRemoveBitmap\uC5D0\uC11C\uB294 \uCE90\uC2DC \uBA54\uBAA8\uB9AC\uAC00 \uD30C\uD3B8\uD654\uB41C\uB2E4\uB294 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0 UI\uB97C \uBCC0\uACBD\uD558\uBA74(\uBC84\uD2BC \uCD94\uAC00 \uB4F1) \uCE90\uC2F1 \uCF54\uB4DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC5EC \uC0C8 \uBE44\uD2B8\uB9F5\uC744 \uCD94\uAC00\uD574\uC57C \uD558\uB294 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "replace-the-background-bitmaps-in-the-cache"
  }), `\uCE90\uC2DC\uC5D0\uC11C \uBC30\uACBD \uBE44\uD2B8\uB9F5 \uB300\uCCB4\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC18C\uD615 \uBE44\uD2B8\uB9F5(\uC544\uC774\uCF58 \uB4F1) \uC138\uD2B8\uC640 \uC804\uCCB4 \uD654\uBA74 \u201C\uBC30\uACBD\u201D \uBE44\uD2B8\uB9F5\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uB2E4\uB978 \uC804\uB7B5\uC744 \uACE0\uB824\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 \uCCAB \uBC88\uC9F8 \uC2A4\uD06C\uB9B0\uC744 \uC2DC\uC791\uD558\uAE30 \uC804\uC5D0 \uC791\uC740 \uBE44\uD2B8\uB9F5\uC744 \uBAA8\uB450 \uCE90\uC2F1\uD569\uB2C8\uB2E4. \uC774\uB54C\uB294 FrontendApplication \uC0DD\uC131\uC790\uAC00 \uC801\uD569\uD569\uB2C8\uB2E4. \uB610\uD55C \uCCAB \uBC88\uC9F8 \uC2A4\uD06C\uB9B0\uC5D0 \uC0AC\uC6A9\uD560 \uBC30\uACBD \uBE44\uD2B8\uB9F5\uB3C4 \uCE90\uC2F1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)
    : touchgfx::MVPApplication(),
      transitionCallback(),
      frontendHeap(heap),
      model(m)
{
    //cache some icons
    Bitmap::cache(BITMAP_ICON10_ID);
    Bitmap::cache(BITMAP_ICON11_ID);
    Bitmap::cache(BITMAP_ICON12_ID);

    //cache first background
    Bitmap::cache(BITMAP_SCREEN1_ID);
    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember ID in a variable
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `View::setupScreen`), ` \uBA54\uC18C\uB4DC\uC5D0\uC11C \uCE90\uC2F1\uB41C \uBC30\uACBD \uBE44\uD2B8\uB9F5\uC744 \uD544\uC694\uD55C \uBE44\uD2B8\uB9F5\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Screen1View::setupScreen()
{
    //ensure background is cached
    Bitmap::cacheReplaceBitmap(backgroundBitmapCached, BITMAP_SCREEN1_ID);
    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember new ID of cached bitmap
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::tearDownScreen()
{
    //nothing cache related
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC804\uB7B5\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB294 \uCE90\uC2F1\uB41C \uBE44\uD2B8\uB9F5\uC758 \uD06C\uAE30\uC640 \uBC30\uACBD \uBE44\uD2B8\uB9F5\uC5D0 \uB530\uB77C \uCE90\uC2DC\uC5D0 \uD560\uB2F9\uB418\uB294 \uBA54\uBAA8\uB9AC\uAC00 \uACB0\uC815\uB429\uB2C8\uB2E4. \uC774\uC804 \uBC29\uBC95\uC5D0 \uBE44\uD574 View\uC758 \uCF54\uB4DC\uAC00 \uC9E7\uAE30 \uB54C\uBB38\uC5D0 \uCF54\uB4DC\uAC00 \uB2E8\uC21C\uD574\uC9D1\uB2C8\uB2E4. \uCE90\uC2DC\uC5D0\uC11C \uCD94\uAC00\uD558\uAC70\uB098 \uC0AD\uC81C\uD560 \uBE44\uD2B8\uB9F5\uC774 \uC904\uC5B4\uB4E4\uAE30 \uB54C\uBB38\uC5D0 \uC131\uB2A5\uB3C4 \uD5A5\uC0C1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uBAA8\uB9AC \uD30C\uD3B8\uD654 \uD604\uC0C1\uB3C4 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 cacheReplaceBitmap \uC5F0\uC0B0\uC774 cacheRemoveBitmap \uBA54\uC18C\uB4DC\uBCF4\uB2E4 \uB9CE\uC774 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cache-memory-management"
  }), `\uCE90\uC2DC \uBA54\uBAA8\uB9AC \uAD00\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2F1\uC744 \uCD5C\uB300\uD55C \uD65C\uC6A9\uD558\uB824\uBA74 \uCE90\uC2DC\uC758 \uB0B4\uBD80 \uC5F0\uC0B0 \uBC29\uC2DD\uC744 \uC774\uD574\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE90\uC2DC\uB294 \uC2A4\uD0DD \uD615\uD0DC\uB85C \uAD6C\uD604\uB429\uB2C8\uB2E4. \uC774\uC804\uC5D0 \uCE90\uC2F1\uB41C \uBE44\uD2B8\uB9F5\uC5D0 \uC774\uC5B4 \uC0C8\uB85C\uC6B4 \uBE44\uD2B8\uB9F5\uC774 \uCE90\uC2F1\uB429\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5\uC774 \uCE90\uC2DC\uC5D0\uC11C \uC0AD\uC81C\uB418\uBA74 \uD574\uB2F9 \uBE44\uD2B8\uB9F5\uC5D0\uC11C \uC0AC\uC6A9\uD588\uB358 \uBA54\uBAA8\uB9AC\uB294 "free"\uB85C \uD45C\uC2DC\uB418\uC9C0\uB9CC, \uC0AD\uC81C\uB41C \uBE44\uD2B8\uB9F5\uC774 \uC2A4\uD0DD \uCD5C\uC0C1\uB2E8\uC5D0 \uB3C4\uB2EC\uD574\uC57C\uB9CC \uD574\uB2F9 \uBA54\uBAA8\uB9AC\uB97C \uC989\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBE44\uD2B8\uB9F5\uC774 \uCE90\uC2DC "\uC911\uAC04"\uC5D0 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uC74C \uBC88\uC5D0 Bitmap::cache\uB97C \uD638\uCD9C\uD560 \uB54C \uC555\uCD95 \uC5F0\uC0B0\uC774 \uC2E4\uD589\uB418\uC5B4 \uD574\uB2F9 \uBA54\uBAA8\uB9AC\uB97C \uD68C\uC218\uD569\uB2C8\uB2E4. \uCE90\uC2DC\uC5D0 \u201C\uBBF8\uC0AC\uC6A9 \uBA54\uBAA8\uB9AC\u201D\uAC00 \uC788\uC744 \uB54C Bitmap::cache\uB97C \uD638\uCD9C\uD558\uC9C0 \uC54A\uB294\uB2E4\uBA74 \uC774\uB807\uAC8C \u201C\uC190\uC2E4\uC774 \uD070\u201D \uBC29\uBC95\uC744 \uD53C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uADF8\uB9BC\uC740 \uC774\uB7EC\uD55C \uC6D0\uB9AC\uB97C \uB098\uD0C0\uB0B8 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uCE90\uC2F1\uD558\uBA74 \uC774\uC804\uC5D0 \uD560\uB2F9\uB41C \uBE44\uD2B8\uB9F5 \uC704\uC5D0 \uD560\uB2F9\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-cache.png",
    noShadow: "true",
    width: "340",
    mdxType: "Figure"
  }, "\uBA54\uBAA8\uB9AC\uC758 \uBE44\uD2B8\uB9F5 \uD560\uB2F9 \uC21C\uC11C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 2
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uC0AD\uC81C\uD558\uC5EC \uBBF8\uC0AC\uC6A9 \uBA54\uBAA8\uB9AC\uB77C\uACE0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache.png",
    noShadow: "true",
    width: "340",
    mdxType: "Figure"
  }, "\uCE90\uC2F1\uB41C \uBE44\uD2B8\uB9F5 \uC0AD\uC81C \uD6C4 \uCE90\uC2DC\uC5D0 \uB0A8\uC740 \uBBF8\uC0AC\uC6A9 \uBA54\uBAA8\uB9AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 3
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uB2E4\uC74C \uBE44\uD2B8\uB9F5\uC744 \uD560\uB2F9\uD558\uBA74 \uCE90\uC2DC\uAC00 \uC555\uCD95\uB418\uBA74\uC11C \uCD5C\uC0C1\uB2E8\uC5D0 \uD560\uB2F9\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-compact.png",
    noShadow: "true",
    width: "340",
    mdxType: "Figure"
  }, "\uBE44\uD2B8\uB9F5 \uCE90\uC2F1 \uC774\uC804\uC5D0 \uCE90\uC2DC\uC5D0\uC11C \uBBF8\uC0AC\uC6A9 \uBA54\uBAA8\uB9AC\uB97C \uD68C\uC218\uD568"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 4
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uCD5C\uC0C1\uB2E8\uC758 (\uB9C8\uC9C0\uB9C9\uC5D0 \uD560\uB2F9\uD55C) \uBE44\uD2B8\uB9F5\uC744 \uC0AD\uC81C\uD558\uBA74 \uBC14\uB85C \uC544\uB798\uC5D0 \uC788\uB358 \uC5EC\uC720 \uBA54\uBAA8\uB9AC\uC640 \uD568\uAED8 \uD574\uB2F9 \uBA54\uBAA8\uB9AC\uAC00 \uBC14\uB85C \uD68C\uC218\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache-top.png",
    noShadow: "true",
    width: "700",
    mdxType: "Figure"
  }, "\uCD5C\uC0C1\uB2E8 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC \uC0AD\uC81C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB54C\uB294 \uB2E4\uC74C \uCE90\uC2DC \uC5F0\uC0B0\uC5D0\uC11C \uC555\uCD95\uC774 \uC218\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uC560\uB2C8\uBA54\uC774\uC158\uC740 \uC774\uB7EC\uD55C \uCF54\uB4DC\uAC00 \uC2E4\uD589\uB418\uB294 \uC804\uCCB4 \uC21C\uC11C\uB97C \uB098\uD0C0\uB0B8 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Bitmap::cache(BITMAP_BITMAP1_ID);
Bitmap::cache(BITMAP_BITMAP2_ID);
Bitmap::cache(BITMAP_BITMAP3_ID);
...
Bitmap::cacheRemoveBitmap(BITMAP_BITMAP2_ID);
...
Bitmap::cache(BITMAP_BITMAP4_ID);
...
Bitmap::cacheRemoveBitmap(BITMAP_BITMAP3_ID);
Bitmap::cacheRemoveBitmap(BITMAP_BITMAP4_ID);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "600",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-bitmap-animation.gif",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uBE44\uD2B8\uB9F5 \uCE90\uC2F1 \uBC0F \uCE90\uC2F1 \uD574\uC81C"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);