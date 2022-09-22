"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2257],{

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

/***/ 74861:
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
  id: "getting-help",
  title: "\uC9C0\uC6D0 \uC694\uCCAD"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/getting-help",
  "id": "miscellaneous/getting-help",
  "title": "\uC9C0\uC6D0 \uC694\uCCAD",
  "description": "TouchGFX\uC640 \uAD00\uB828\uD558\uC5EC \uC5B4\uB824\uC6C0\uC744 \uACAA\uAC70\uB098 \uD2B9\uC815 \uC601\uC5ED\uC5D0 \uB300\uD55C \uC815\uBCF4\uAC00 \uD544\uC694\uD560 \uB54C \uC5EC\uB7EC \uAC00\uC9C0 \uBC29\uBC95\uC73C\uB85C \uBB38\uC81C \uD574\uACB0\uC744 \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uC774 TouchGFX \uC124\uBA85\uC11C\uB97C \uC0B4\uD3B4\uBD10\uC57C \uD569\uB2C8\uB2E4. \uC774 \uC124\uBA85\uC11C\uB294 TouchGFX \uAD00\uB828 \uBB38\uC81C\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uBA70 \uBC29\uB300\uD55C \uC601\uC5ED\uC744 \uB2E4\uB8E8\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uC6D0\uD558\uB294 \uD574\uB2F5\uC744 \uCC3E\uC9C0 \uBABB\uD55C\uB2E4\uBA74 \uC544\uB798\uC5D0\uC11C \uCD94\uAC00 \uC815\uBCF4\uB97C \uCC3E\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/miscellaneous/getting-help.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/getting-help",
  "permalink": "/4.20/ko/docs/miscellaneous/getting-help",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "getting-help",
    "title": "\uC9C0\uC6D0 \uC694\uCCAD"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC0C8\uB85C\uC6B4 TouchGFX \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uAE30",
    "permalink": "/4.20/ko/docs/miscellaneous/updating-to-a-new-touchgfx-version"
  },
  "next": {
    "title": "\uC54C\uB824\uC9C4 \uBB38\uC81C",
    "permalink": "/4.20/ko/docs/miscellaneous/known-issues"
  }
};
const assets = {};
const toc = [];
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC640 \uAD00\uB828\uD558\uC5EC \uC5B4\uB824\uC6C0\uC744 \uACAA\uAC70\uB098 \uD2B9\uC815 \uC601\uC5ED\uC5D0 \uB300\uD55C \uC815\uBCF4\uAC00 \uD544\uC694\uD560 \uB54C \uC5EC\uB7EC \uAC00\uC9C0 \uBC29\uBC95\uC73C\uB85C \uBB38\uC81C \uD574\uACB0\uC744 \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uC774 TouchGFX \uC124\uBA85\uC11C\uB97C \uC0B4\uD3B4\uBD10\uC57C \uD569\uB2C8\uB2E4. \uC774 \uC124\uBA85\uC11C\uB294 TouchGFX \uAD00\uB828 \uBB38\uC81C\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uBA70 \uBC29\uB300\uD55C \uC601\uC5ED\uC744 \uB2E4\uB8E8\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uC6D0\uD558\uB294 \uD574\uB2F5\uC744 \uCC3E\uC9C0 \uBABB\uD55C\uB2E4\uBA74 \uC544\uB798\uC5D0\uC11C \uCD94\uAC00 \uC815\uBCF4\uB97C \uCC3E\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX \uCEE4\uBBA4\uB2C8\uD2F0`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `ST \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0\uC11C GUI/TouchGFX \uAD00\uB828 \uC8FC\uC81C\uB97C \uC804\uBB38\uC801\uC73C\uB85C \uB2E4\uB8E8\uB294 \uACF5\uAC1C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx"
  }), `\uD3EC\uB7FC`), ` \uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 \uAC01\uC885 \uAC1C\uBC1C \uBB38\uC81C\uC640 \uAD00\uB828\uD558\uC5EC \uB2E4\uC591\uD55C Q&A\uB97C \uBE44\uB86F\uD574 \uBA87 \uAC00\uC9C0 \uC790\uC2B5\uC11C\uC640 \uB3D9\uC601\uC0C1\uC744 \uCC3E\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C myST \uACC4\uC815(\uC190\uC26C\uC6B4 \uBB34\uB8CC \uB4F1\uB85D)\uC744 \uC0AC\uC6A9\uD574 \uAE30\uC220\uC801\uC778 \uC9C8\uBB38\uC744 \uBB3B\uACE0 \uB2F5\uBCC0\uC744 \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC6E8\uBE44\uB098 \uBC0F \uB3D9\uC601\uC0C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.youtube.com/playlist?list=PLnMKNibPkDnHPh5mWtYkSLntmhvtZ4GyU"
  }), `MOOC TouchGFX \uC6E8\uBE44\uB098`), `(\uAD50\uC721 \uB3D9\uC601\uC0C1)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.touchgfx.com/resources/demo-videos/webinar-videos/"
  }), `\uAE30\uD0C0 TouchGFX \uC6E8\uBE44\uB098`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.youtube.com/playlist?list=PLnMKNibPkDnGoZA9veTEC4rFSE7xRAGgZ"
  }), `ST Youtube \uCC44\uB110`), `(TouchGFX \uC7AC\uC0DD \uBAA9\uB85D)`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC628\uB77C\uC778 \uC9C0\uC6D0`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\uC6F9 \uC591\uC2DD\uC744 \uD1B5\uD574 \uC9C0\uC6D0\uC744 \uC694\uCCAD\uD560 \uC218 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://community.st.com/s/onlinesupport"
  }), `\uC628\uB77C\uC778 \uC9C0\uC6D0 \uC0AC\uC774\uD2B8`), `\uC785\uB2C8\uB2E4. \uCEE4\uBBA4\uB2C8\uD2F0\uB098 TouchGFX \uC124\uBA85\uC11C\uC5D0\uC11C \uC6D0\uD558\uB294 \uC815\uBCF4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC744 \uB54C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uD604\uC9C0 ST \uC9C0\uC6D0 \uCC44\uB110`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\uD604\uC9C0 ST \uB2F4\uB2F9\uC790\uAC00 \uC9C1\uC811 \uC9C0\uC6D0\uD558\uAC70\uB098, \uD639\uC740 \uD544\uC694\uD55C \uD6C4\uC120 \uC9C0\uC6D0\uC744 \uBC1B\uC744 \uC218 \uC788\uB3C4\uB85D \uD611\uB825\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Implementer (ST partner)`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Get assistance in any stage of your UI project from one of our dedicated and highly skilled `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.st.com/content/st_com/en/stm32-graphic-user-interface.html"
  }), `TouchGFX Implementers`), ` (scroll down the webpage for a list of implementers). \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC801\uC6A9\uD560 \uB514\uC2A4\uD50C\uB808\uC774 \uC194\uB8E8\uC158\uC5D0\uC11C\uBD80\uD130 \uADF8\uB798\uD53D \uB514\uC790\uC778 \uC11C\uBE44\uC2A4, \uD558\uB4DC\uC6E8\uC5B4 \uAC1C\uBC1C \uBC0F \uC81C\uC791, \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C \uC11C\uBE44\uC2A4\uC5D0 \uC774\uB974\uAE30\uAE4C\uC9C0 \uB2E4\uC591\uD55C \uBD80\uBB38\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uD601\uC2E0\uC801\uC778 \uC811\uADFC\uBC95\uACFC TouchGFX \uBC0F STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uB300\uD55C \uBC29\uB300\uD55C \uC815\uBCF4\uB97C \uBC14\uD0D5\uC73C\uB85C \uD5A5\uD6C4 \uC784\uBCA0\uB514\uB4DC \uC81C\uD488\uC744 \uC704\uD55C \uCD5C\uC801\uC758 \uD30C\uD2B8\uB108\uAC00 \uB418\uC5B4 \uC904 \uAC83\uC785\uB2C8\uB2E4. \uAD6C\uD604\uC5C5\uCCB4\uB97C \uCC3E\uC544 \uC544\uC774\uB514\uC5B4\uB97C \uC27D\uACE0 \uBE60\uB974\uAC8C \uCD5C\uC885 \uC81C\uD488\uC73C\uB85C \uC2E4\uD604\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `ST blog`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://blog.st.com/?s=touchgfx&submit="
  }), `Technical news`), ` on STM32 graphics and TouchGFX.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `ST \uADF8\uB798\uD53D \uC6F9\uC0AC\uC774\uD2B8`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `ST \uADF8\uB798\uD53D \uAD00\uB828 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "https://www.st.com/content/st_com/en/stm32-graphic-user-interface.html"
  }), `\uC6F9\uC0AC\uC774\uD2B8`), `\uC785\uB2C8\uB2E4.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);