"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4633],{

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

/***/ 72927:
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
  id: "languages-and-characters",
  title: "\uC5B8\uC5B4 \uBC0F \uBB38\uC790"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/languages-and-characters",
  "id": "development/ui-development/touchgfx-engine-features/languages-and-characters",
  "title": "\uC5B8\uC5B4 \uBC0F \uBB38\uC790",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/languages-and-characters.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/languages-and-characters",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/languages-and-characters",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "languages-and-characters",
    "title": "\uC5B8\uC5B4 \uBC0F \uBB38\uC790"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD14D\uC2A4\uD2B8 \uBC0F \uD3F0\uD2B8",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"
  },
  "next": {
    "title": "MJPEG Video",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/video"
  }
};
const assets = {};
const toc = [{
  value: "\uC5B8\uC5B4",
  id: "languages",
  level: 2
}, {
  value: "\uBB38\uC790",
  id: "characters",
  level: 2
}, {
  value: "\uC791\uC131 \uBC29\uD5A5",
  id: "writing-direction",
  level: 2
}, {
  value: "\uBB38\uB9E5\uC801 \uBAA8\uC591 \uC801\uC6A9",
  id: "contextual-shaping",
  level: 2
}, {
  value: "\uC9C0\uC6D0\uB418\uB294 \uC5B8\uC5B4 \uBAA9\uB85D",
  id: "list-of-supported-languages",
  level: 2
}, {
  value: "\uC6B0\uD5A5 \uC5B8\uC5B4",
  id: "left-to-right-languages",
  level: 3
}, {
  value: "\uC88C\uD5A5 \uC5B8\uC5B4",
  id: "right-to-left-languages",
  level: 3
}, {
  value: "\uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uC5B8\uC5B4",
  id: "unsupported-languages",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uB2E4\uC591\uD55C \uC5B8\uC5B4\uC640 \uBB38\uC790\uB97C \uC9C0\uC6D0\uD558\uACE0 \uBB38\uC790\uC758 \uBC29\uD5A5\uACFC \uBB38\uB9E5\uC758 \uD615\uC131\uACFC \uAC19\uC740 \uD14D\uC2A4\uD2B8 \uB808\uC774\uC544\uC6C3 \uBA54\uCEE4\uB2C8\uC998\uC744 \uC774\uD574\uD568\uC73C\uB85C\uC368 \uC774\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "languages"
  }), `\uC5B8\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C0\uC6D0\uB418\uB294 \uC5B8\uC5B4\uB294 \uC720\uB2C8\uCF54\uB4DC \uB2E4\uAD6D\uC5B4 \uAE30\uBCF8 \uD3C9\uBA74(Basic Multilingual Plane)\uC5D0 \uC18D\uD558\uB294 \uC5B8\uC5B4\uB4E4\uC774\uBA70, \uC6B0\uD5A5(Left-to-Right) \uB610\uB294 \uC88C\uD5A5(Right-to-Left) \uC791\uC131 \uC2DC\uC2A4\uD15C\uB9CC \uC9C0\uC6D0\uB418\uB294 \uD55C\uACC4\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uC544\uB78D\uC5B4, \uC911\uAD6D\uC5B4, \uC601\uC5B4 \uB4F1\uC758 \uC5B8\uC5B4\uAC00 \uC9C0\uC6D0\uB418\uBA70, \uBA87 \uAC00\uC9C0 \uC81C\uC57D\uC774 \uB530\uB97C \uC218 \uC788\uC74C\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC6B0\uB974\uB4DC\uC5B4, \uBBF8\uC580\uB9C8\uC5B4\uB294 \uD604\uC7AC \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "characters"
  }), `\uBB38\uC790`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBB38\uC790 \uC778\uCF54\uB529\uC740 \uC720\uB2C8\uCF54\uB4DC \uD45C\uC900\uC744 \uAE30\uBC18\uC73C\uB85C \uD569\uB2C8\uB2E4.  16-bit Unicodes are supported, i.e. 0x0000 \uC5D0\uC11C 0xFFFF \uAE4C\uC9C0\uC758 \uC720\uB2C8\uCF54\uB4DC\uB4E4\uC774 \uC9C0\uC6D0\uB429\uB2C8\uB2E4.  \uC77C\uBD80 \uC5B8\uC5B4\uB294 \uD2B9\uC218 \uBB38\uC790\uC5D0 \uD55C\uD574 0xE000~0xE3FF\uC5D0\uC11C \uD2B9\uC815 \uD3F0\uD2B8(Devanagari \uB4F1)\uB85C PUA(Private Use Area)\uB97C \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "writing-direction"
  }), `\uC791\uC131 \uBC29\uD5A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC6B0\uD5A5(LTR) \uB610\uB294 \uC88C\uD5A5(RTL) \uC791\uC131 \uC2DC\uC2A4\uD15C\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uD558\uD5A5 \uC791\uC131 \uC2DC\uC2A4\uD15C\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTL\uC774\uB77C\uACE0 \uD574\uC11C LTR\uC5D0 \uB300\uD55C \uC5ED\uBC29\uD5A5\uC73C\uB85C \uC791\uC131\uB418\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C, \uB2E8\uC5B4\uAC00 \uC624\uB978\uCABD\uC5D0\uC11C \uC2DC\uC791\uD574 \uC67C\uCABD\uC73C\uB85C \uC791\uC131\uD55C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC544\uB78D\uC5B4\uC640 \uD788\uBE0C\uB9AC\uC5B4\uB294 RTL\uC774 \uC62C\uBC14\uB978 \uC124\uC815\uC785\uB2C8\uB2E4. "TouchGFX" will not be written "XFGhcuoT" but the direction of words (or collection of words) can be controlled using the RTL/LTR setting.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB0B4\uC5D0\uC11C LTR\uACFC RTL \uCC98\uB9AC\uB294 \uB450 \uAC00\uC9C0\uAC00 \uC5B4\uB290 \uC815\uB3C4 \uD63C\uD569\uC744 \uC778\uC815\uD569\uB2C8\uB2E4.  \uC774\uB97C \uC591\uBC29\uD5A5 \uC2A4\uD06C\uB9BD\uD2B8 \uC9C0\uC6D0\uC774\uB77C\uACE0 \uD569\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C\uB294 \uACF5\uC2DD\uC801\uC778 \uC591\uBC29\uD5A5 \uC791\uC131 \uADDC\uCE59\uC774 \uD558\uC704 \uC9D1\uD569\uAE4C\uC9C0 \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC774 \uB9D0\uC740, \uC608\uB97C \uB4E4\uC5B4 "10:45", "3.14159", "STMicroelectronics TouchGFX" \uB4F1\uC774 RTL \uD14D\uC2A4\uD2B8\uC5D0\uC11C\uB3C4 \uC644\uC804\uD788 LTR\uB85C \uC778\uC2DD\uB418\uC5B4 \uC791\uC131\uB41C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C RTL \uD14D\uC2A4\uD2B8\uC758 \uACBD\uC6B0 \uD14D\uC2A4\uD2B8\uC758 \uC77C\uBD80\uB294 LTR\uB85C \uC791\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.  \uC774 \uD14D\uC2A4\uD2B8\uB97C \uCC3E\uC544 \uC218\uC9D1\uB418\uC5B4\uC57C\uD569\uB2C8\uB2E4. RTL \uBB38\uC790\uAC00 \uC544\uB2CC \uBAA8\uB4E0 \uBB38\uC790\uB4E4\uC774 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uCF5C\uB860(:), \uC810(.), \uCEF4\uB9C8(,), \uACF5\uBC31( ) \uACFC \uAC19\uC740 \uBB38\uC790\uB3C4 \uB450\uAC1C\uC758 \uC5F0\uC18D\uB418\uB294 LTR \uBD80\uBD84\uC744 "\uBB36\uC74C" \uD569\uB2C8\uB2E4. \uC774\uAC83\uC740 "10:45"\uAC00 \uB2E8\uC77C LTR \uAC1C\uCCB4\uB85C \uCC98\uB9AC\uB418\uB3C4\uB85D \uD558\uB294 \uBC18\uBA74 "Mark:"(\uCF5C\uB860\uC73C\uB85C \uB05D\uB098\uB294 \uACBD\uC6B0)\uB294 \uC544\uB78D\uC5B4\uC640 \uD788\uBE0C\uB9AC\uC5B4\uB97C \uC0AC\uC6A9\uD558\uB294 \uAD6D\uAC00\uC5D0\uC11C \uC608\uC0C1\uD558\uB294 \uAC83\uCC98\uB7FC \uC67C\uCABD\uC5D0\uC11C \uCF5C\uB860\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4. \uC989 "`, `<`, `some Arabic message`, `>`, ` :Mark"\uB294 RTL\uC5D0\uC11C \uCF5C\uB860\uC774 \uC67C\uCABD\uC5D0 \uC788\uB294 \uACF3\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB77C\uD2F4 \uBB38\uC790\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC22B\uC790(0~9)\uC640 \uC544\uB78D \uBB38\uC790\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC22B\uC790\uB294 \uBAA8\uB450 LTR \uBB38\uC790\uB85C \uCC98\uB9AC\uB418\uC5B4 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC815\uC0C1\uC801\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uD14D\uC2A4\uD2B8\uC5D0 LRT \uAC1C\uCCB4\uC640 RTL \uAC1C\uCCB4\uAC00 \uB4A4\uC11E\uC5EC \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC791\uC131 \uBC29\uD5A5\uC774 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8\uC5D0 \uD3EC\uD568\uB41C \uBB38\uC790\uB9CC \uBD10\uC11C\uB294 \uD14D\uC2A4\uD2B8\uAC00 RTL\uC778\uC9C0, LTR\uC778\uC9C0 \uC54C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. If a text contains first a Hebrew word (RTL) and then an English word (LTR), the output on display will depend on the writing direction of the text. \uD14D\uC2A4\uD2B8\uAC00 RTL\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uC73C\uBA74 \uC804\uCCB4 \uD14D\uC2A4\uD2B8\uAC00 RTL\uC774\uAE30 \uB54C\uBB38\uC5D0 "English werbeH"\uB85C \uCD9C\uB825\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCCAB \uBC88\uC9F8 \uB2E8\uC5B4\uB97C \uB9E8 \uC624\uB978\uCABD\uC5D0 \uC791\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD14D\uC2A4\uD2B8\uAC00 LTR\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uC73C\uBA74 \uB9E8 \uC67C\uCABD\uBD80\uD130 \uCCAB \uBC88\uC9F8 \uB2E8\uC5B4\uAC00 \uC2DC\uC791\uB418\uAE30 \uB54C\uBB38\uC5D0 "werbeH English"\uB85C \uCD9C\uB825\uB429\uB2C8\uB2E4. LTR \uB300\uBE44 RTL \uC124\uC815\uC740 \uC790\uB3D9\uC73C\uB85C \uACB0\uC815\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC601\uC5B4 \uD14D\uC2A4\uD2B8\uC5D0 \uD788\uBE0C\uB9AC\uC5B4 \uB2E8\uC5B4\uAC00 \uD3EC\uD568\uB420 \uC218\uB3C4 \uC788\uACE0, \uBC18\uB300\uB85C \uD788\uBE0C\uB9AC\uC5B4 \uD14D\uC2A4\uD2B8\uC5D0 \uC601\uC5B4 \uB2E8\uC5B4\uAC00 \uD3EC\uD568\uB420 \uC218\uB3C4 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTL \uD14D\uC2A4\uD2B8\uC640 \uAD00\uB828\uD558\uC5EC \uB610 \uB530\uB978 \uC911\uC694\uD55C \uBB38\uC81C\uB294 \uAD04\uD638 \uBB38\uC790\uC758 \uC790\uB3D9 \uC804\uD658\uC785\uB2C8\uB2E4.  \uC5EC\uAE30\uC5D0\uC11C \uAD04\uD638\uB780 (, ), {, }, `, `[, ]`, `, `, `<`, `, `, `>`, `\uB97C \uB9D0\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uAD04\uD638\uB4E4\uC740 \uBC18\uB300\uCABD \uBB38\uC790\uB85C \uC790\uB3D9 \uC804\uD658\uB418\uC5B4 \uD574\uB2F9 \uD14D\uC2A4\uD2B8\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uBCF4\uC774\uB3C4\uB85D \uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB77C\uD2F4 \uC22B\uC790\uAC00 \uC544\uB78D \uC22B\uC790\uB85C \uC790\uB3D9 \uC804\uD658\uB418\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4. \uB450 \uC22B\uC790\uB97C \uC804\uD658\uD558\uB824\uBA74 \uD14D\uC2A4\uD2B8\uB97C \uD45C\uC2DC\uD558\uAE30 \uC804\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uC804\uD658\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "contextual-shaping"
  }), `\uBB38\uB9E5\uC801 \uBAA8\uC591 \uC801\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uAE00\uC790\uC758 \uBB38\uB9E5\uC5D0 \uB530\uB77C \uD55C\uAC00\uC9C0 \uC774\uC0C1\uC758 \uBB38\uC790/\uAE00\uB9AC\uD504\uB97C \uB2E4\uB978 \uBAA8\uC591\uC73C\uB85C \uC120\uD0DD\uD569\uB2C8\uB2E4.  \uD55C \uC608\uB85C \uC544\uB78D\uC5B4 \uBB38\uC790\uB294 \uB2E8\uC5B4 \uC18D \uBB38\uC790\uC758 \uC704\uCE58\uC5D0 \uB530\uB77C \uC5EC\uB7EC \uAC00\uC9C0 \uBB38\uB9E5\uC801 \uBAA8\uC591\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.  TouchGFX supports such contextual shaping of languages by implementing a simplified set of rules for combining characters. \uB610\uD55C \uC77C\uBD80 \uBC1C\uC74C \uAD6C\uBCC4 \uAE30\uD638\uB294 \uB9DE\uCDA4\uD615 \uB85C\uC9C1\uC744 \uC0AC\uC6A9\uD574 \uC138\uB85C \uBC29\uD5A5 \uC704\uCE58\uB97C \uACB0\uC815\uD558\uC5EC \uC0BD\uC785\uB429\uB2C8\uB2E4. \uD2B9\uD788 \uC544\uB78D\uC5B4, \uD0DC\uAD6D\uC5B4, \uD78C\uB514\uC5B4\uC5D0\uC11C \uADF8\uB807\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "list-of-supported-languages"
  }), `\uC9C0\uC6D0\uB418\uB294 \uC5B8\uC5B4 \uBAA9\uB85D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C0\uC6D0\uB418\uB294 \uBAA8\uB4E0 \uC5B8\uC5B4\uC758 \uC804\uCCB4 \uBAA9\uB85D\uC744 \uC81C\uACF5\uD558\uB294 \uAC83\uC740 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.  \uC77C\uBC18\uC801\uC73C\uB85C, \uD2B9\uBCC4\uD55C \uC21C\uC11C \uC7AC\uBC30\uCE58 \uB610\uB294 \uC704\uCE58 \uACB0\uC815 \uADDC\uCE59\uC774 \uC5C6\uB294 \uD45C\uC900 \uAE00\uB9AC\uD504\uAC00 \uC9C0\uC6D0\uB429\uB2C8\uB2E4.  \uD2B9\uBCC4\uD55C \uADDC\uCE59\uC774 \uC788\uB294 \uC5B8\uC5B4 \uC911\uC5D0\uC11C \uD78C\uB514\uC5B4\uB098 \uC544\uB78D\uC5B4\uC640 \uAC19\uC740 \uC77C\uBD80 \uC5B8\uC5B4\uAC00 TouchGFX\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "left-to-right-languages"
  }), `\uC6B0\uD5A5 \uC5B8\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Simple languages using Latin characters`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C, \uD2B9\uBCC4\uD55C \uC21C\uC11C \uC7AC\uBC30\uCE58\uB098 \uC704\uCE58 \uACB0\uC815\uC774 \uD544\uC694 \uC5C6\uB294 \uBB38\uC790\uC640 \uAE00\uB9AC\uD504\uB97C \uC0AC\uC6A9\uD558\uB294 \uB2E8\uC21C \uC5B8\uC5B4\uAC00 \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC5B8\uC5B4\uB97C \uC608\uB85C \uB4E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Bosnian, Bulgarian, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, Lithuanian, Norwegian, Polish, Portuguese, Romanian, Serbian, Slovenian, Slovak, Spanish, Swedish, Turkish, Ukrainian`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uD2B9\uC218 \uBB38\uC790 \uC9D1\uD569\uC744 \uC0AC\uC6A9\uD558\uB294 \uB2E8\uC21C \uC5B8\uC5B4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uC5B8\uC5B4\uB294 \uC5EC\uC804\uD788 \uB2E8\uC21C\uD55C \uC704\uCE58 \uACB0\uC815 \uADDC\uCE59\uC744 \uB530\uB974\uC9C0\uB9CC \uAC01\uAE30 \uB2E4\uB978 \uBB38\uC790\uC640 \uAE00\uB9AC\uD504\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC5B8\uC5B4\uB4E4\uB3C4 \uC9C0\uC6D0\uB418\uBA70, \uC608\uB97C \uB4E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC911\uAD6D\uC5B4, \uADF8\uB9AC\uC2A4\uC5B4, \uC77C\uBCF8\uC5B4, \uB7EC\uC2DC\uC544\uC5B4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uAE30\uD0C0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD0DC\uAD6D\uC5B4\uB294 \uC81C\uD55C\uC801\uC73C\uB85C \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC131\uC870 \uBD80\uD638\uB294 TouchGFX \uADDC\uCE59\uC5D0 \uB530\uB77C \uC704\uCE58\uAC00 \uACB0\uC815\uB429\uB2C8\uB2E4(\uC138\uB85C \uBC29\uD5A5\uC73C\uB85C).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD78C\uB514\uC5B4(\uB370\uBC14\uB098\uAC00\uB9AC)\uB294 \uC81C\uD55C\uC801\uC73C\uB85C \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC77C\uBD80 \uBB38\uC790\uC758 \uC704\uCE58\uAC00 \uC57D\uAC04 \uD2C0\uB9B4 \uC218\uB294 \uC788\uC9C0\uB9CC \uD14D\uC2A4\uD2B8\uB97C \uC77D\uC9C0 \uBABB\uD560 \uC815\uB3C4\uB294 \uC544\uB2D9\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "right-to-left-languages"
  }), `\uC88C\uD5A5 \uC5B8\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uD2B9\uC218 \uBB38\uC790 \uC9D1\uD569\uC744 \uC0AC\uC6A9\uD558\uB294 \uB2E8\uC21C \uC5B8\uC5B4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Hebrew, Indonesian, Kazakh`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uBAA8\uC591(\uB2E8\uB3C5, \uCCAB \uC74C\uC808, \uAC00\uC6B4\uB370 \uC74C\uC808, \uB05D \uC74C\uC808)\uC5D0 \uB530\uB77C \uD569\uC790\uAC00 \uB2E4\uB978 \uC5B8\uC5B4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC544\uB78D\uC5B4(\uBB38\uC790\uAC00 4\uAC1C \uC774\uC0C1 \uC5F0\uC18D\uB418\uBA74 \uB2E8\uC77C \uD569\uC790\uB85C \uC778\uC2DD\uB418\uC9C0 \uC54A\uC544 \uBCC0\uD658\uB3C4 \uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Sallallahou Alayhe Wasallam, Jallajalalouhou, Rial \uAE30\uD638\uAC00 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4). \uC77C\uBD80 \uBC1C\uC74C \uAD6C\uBCC4 \uAE30\uD638\uC758 \uC704\uCE58\uAC00 \uC798\uBABB\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD398\uB974\uC2DC\uC544\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB9D0\uB808\uC774\uC2DC\uC544\uC5B4("\uC704\uC5D0 \uC810\uC774 \uC788\uB294 \uC544\uB78D \uBB38\uC790" \u0762\uB294 \uB2E8\uB3C5 \uD615\uD0DC\uB85C\uB9CC \uC9C0\uC6D0\uB429\uB2C8\uB2E4).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "unsupported-languages"
  }), `\uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uC5B8\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC5B8\uC5B4\uB294 \uD569\uC790, \uC774\uC911 \uBB38\uC790, \uC138\uB85C \uBC29\uD5A5 \uC704\uCE58 \uACB0\uC815\uC774 \uAD11\uBC94\uC704\uD558\uAC8C \uC0AC\uC6A9\uB418\uC5B4 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uAC83\uC73C\uB85C \uC54C\uB824\uC838 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC6B0\uB974\uB4DC\uC5B4, \uBBF8\uC580\uB9C8\uC5B4`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);