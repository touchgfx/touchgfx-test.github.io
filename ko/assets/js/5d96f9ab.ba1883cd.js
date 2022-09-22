"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[622],{

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

/***/ 29415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "16",
  viewBox: "0 0 14 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
}));
class FurtherReading extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-further-reading)",
      header: "Further reading",
      type: "further-reading",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (FurtherReading);


/***/ }),

/***/ 88678:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Highlight extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const className = `highlight highlight-${this.props.type}`;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "highlight-heading"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "highlight-icon"
    }, this.props.icon), this.props.header)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "highlight-content"
    }, this.props.children));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Highlight);


/***/ }),

/***/ 65407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function LoopVideo(props) {
  var _a, _b;
  const videoSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.url);
  const width = (_a = props.width) != null ? _a : "100%";
  const height = (_b = props.height) != null ? _b : "100%";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loop-video"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    width,
    height
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: videoSrc,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children));
}
/* harmony default export */ __webpack_exports__["Z"] = (LoopVideo);


/***/ }),

/***/ 24150:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39130);
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65407);
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
  id: "examples",
  title: "Example \uBC0F Board Specific Demo"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/examples",
  "id": "development/ui-development/working-with-touchgfx/examples",
  "title": "Example \uBC0F Board Specific Demo",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/examples",
  "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/examples",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "examples",
    "title": "Example \uBC0F Board Specific Demo"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uB514\uBC84\uAE45",
    "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/debugging"
  },
  "next": {
    "title": "\uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4",
    "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"
  }
};
const assets = {};



const toc = [{
  value: "Example\uACFC Demo",
  id: "ui-templates",
  level: 2
}, {
  value: "Board Specific Demo",
  id: "online-applications",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC5EC\uB7EC \uAC00\uC9C0 \uAC00\uB2A5\uC131\uACFC \uAE30\uB2A5\uC744 \uB354 \uC0B4\uD3B4\uBCFC \uC218 \uC788\uB3C4\uB85D \uB2E4\uC218\uC758 Example\uACFC Demo\uB97C \uC0AC\uC804 \uC81C\uC791\uD558\uC5EC \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD569\uB2C8\uB2E4. TouchGFX Designer\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/startup-window"
  }), `Lobby`), `\uB97C \uD1B5\uD574 \uC774\uB7EC\uD55C Example\uACFC Demo\uC5D0 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC73C\uBA70, \uC5EC\uAE30\uC5D0\uB294 \uBB34\uB8CC \uC774\uBBF8\uC9C0, \uCF54\uB4DC \uB4F1\uC774 \uD3EC\uD568\uB418\uC5B4 \uC790\uCCB4\uC801\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC1C\uBC1C\uD560 \uB54C \uAE30\uCD08 \uC790\uB8CC\uB85C\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Example\uACFC Demo\uC5D0\uB294 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../development-introduction#application-templates-ats"
  }), `TouchGFX Board Setup`), `\uC774 \uD568\uAED8 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C TouchGFX\uB97C \uCC98\uC74C \uC0AC\uC6A9\uD558\uB294 \uCD08\uBCF4\uC790\uB77C\uBA74 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC544\uC774\uB514\uC5B4\uC640 \uC815\uBCF4\uB97C \uC5BB\uC744 \uC218 \uC788\uB294 \uCD9C\uBC1C\uC810\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Example\uACFC Demo \uC911\uC5D0\uB294 \uB2E8\uC77C \uAE30\uB2A5\uC5D0 \uCD08\uC810\uC744 \uB454 \uAC83\uC774 \uC788\uB294 \uBC18\uBA74 TouchGFX\uC5D0\uC11C \uC5EC\uB7EC \uAC00\uC9C0 \uB2E4\uC591\uD55C \uAE30\uB2A5\uC744 \uAD6C\uD604\uD558\uB294 \uAC83\uB4E4\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. Demo\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#ui-templates"
  }), `Demo`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#online-applications"
  }), `Board Specific Demo`), `\uB85C \uAD6C\uBD84\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ui-templates"
  }), `Example\uACFC Demo`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Example\uC774\uB780 \uC77C\uBC18\uC801\uC73C\uB85C \uC6A9\uB7C9\uC774 \uC791\uC740 \uC790\uB9BD\uD615 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9D0\uD558\uBA70, \uC8FC\uB85C \uAC01\uC885 \uC704\uC82F \uB4F1 \uD2B9\uC815 \uAE30\uB2A5\uC5D0 \uC911\uC810\uC744 \uB450\uACE0 \uC788\uC2B5\uB2C8\uB2E4. Example\uC740 \uBAA8\uB4E0 STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC640 PC \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uC2E4\uD589\uB418\uC9C0\uB9CC \uCD5C\uC0C1\uC758 \uACBD\uD5D8\uC744 \uC6D0\uD55C\uB2E4\uBA74 Example\uC758 \uD574\uC0C1\uB3C4\uAC00 \uBCF4\uB4DC\uC758 \uD574\uC0C1\uB3C4\uC5D0 \uB9DE\uB294 \uACBD\uC6B0\uC5D0 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC77C\uBD80 Example\uC740 \uD2B9\uC815 \uC0C9 \uC2EC\uB3C4\uB97C \uC5FC\uB450\uC5D0 \uB450\uACE0 \uBE4C\uB4DC\uB418\uC5B4 \uC0C9 \uC2EC\uB3C4\uAC00 \uB0AE\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C\uB294 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Demo\uC5D0\uB294 TouchGFX \uD300\uC5D0\uC11C \uD488\uC9C8 \uB192\uC740 UI \uC124\uACC4\uC640 \uD568\uAED8 \uB354\uC6B1 \uB2E4\uC591\uD55C \uAE30\uB2A5\uC744 \uC120\uBCF4\uC77C \uBAA9\uC801\uC73C\uB85C \uC0DD\uC131\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uB4E4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCC98\uC74C\uC5D0 TouchGFX\uC758 \uAE30\uB2A5\uC744 \uC54C\uC544\uBCF4\uB294 \uB370 \uD6A8\uACFC\uC801\uC778 \uCD9C\uBC1C\uC810\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Example\uC774\uB098 Demo\uB97C \uC0AC\uC6A9\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uB824\uBA74 \uBA3C\uC800 \uB85C\uBE44\uC5D0\uC11C \uC67C\uCABD \uC0C1\uB2E8\uC5D0 \uC788\uB294 "Examples" \uB610\uB294 "Demos"\uB97C \uD074\uB9AD\uD558\uC5EC \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC788\uB294\uC9C0 \uD655\uC778\uD55C \uD6C4 \uC6D0\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4. \uC635\uC158\uC73C\uB85C \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C \uB2E4\uB978 \uD574\uC0C1\uB3C4\uC640 \uC0C9 \uC2EC\uB3C4\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uC6D0\uB418\uB294 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC2E4\uD589\uD558\uB824\uBA74 \uCC3D \uC0C1\uB2E8\uC5D0 \uC788\uB294 "Select Hardware"\uB97C \uD074\uB9AD\uD558\uACE0 \uC6D0\uD558\uB294 \uBCF4\uB4DC\uB97C \uC120\uD0DD\uD55C \uB2E4\uC74C "Select"\uB97C \uB204\uB985\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9\uC73C\uB85C 'Create'\uB97C \uD074\uB9AD\uD558\uBA74 \uC120\uD0DD\uD55C TouchGFX Board Setup \uBC0F Example \uB610\uB294 Demo\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC774\uC81C 'Run Simulator' \uB610\uB294 'Run Target'\uC744 \uD074\uB9AD\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC2E4\uD589\uB418\uB294 \uBAA8\uC2B5\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C \uC124\uBA85\uD55C \uC0DD\uC131 \uB2E8\uACC4\uB97C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD558\uBA74 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",
    mdxType: "LoopVideo"
  }, "Example\uC744 \uC0AC\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "online-applications"
  }), `Board Specific Demo`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Board Specific Demo\uB294 \uD2B9\uC815 \uD558\uB4DC\uC6E8\uC5B4 \uC194\uB8E8\uC158\uC5D0 \uB9DE\uCDB0 \uD2B9\uBCC4\uD558\uAC8C \uC0DD\uC131\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774\uBBC0\uB85C \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4\uAC00 \uC544\uB2CC STM32 \uD3C9\uAC00 \uD0A4\uD2B8(PC \uC2DC\uBBAC\uB808\uC774\uD130 \uC81C\uC678)\uC5D0\uC11C\uB294 \uC2E4\uD589\uB418\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uC6A9\uB7C9\uC774 \uD6E8\uC52C \uCEE4\uC11C TouchGFX \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uAC01\uC885 \uAE30\uB2A5\uC744 \uC0B4\uD3B4\uBCFC \uC218 \uC788\uC744 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uD558\uB4DC\uC6E8\uC5B4 \uD1B5\uD569\uC774 \uC0D8\uD50C\uB85C \uD3EC\uD568\uB418\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Board Specific Demo\uB97C \uC0AC\uC6A9\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uB824\uBA74 \uBA3C\uC800 \uB85C\uBE44\uC5D0\uC11C \uC67C\uCABD \uC0C1\uB2E8\uC5D0 \uC788\uB294 'Demos' \uD0ED\uC744 \uD074\uB9AD\uD558\uC5EC \uC561\uC138\uC2A4\uD569\uB2C8\uB2E4. \uCC3D \uC0C1\uB2E8\uC5D0 \uC788\uB294 "Board Specific Demo" \uB77C\uBCA8\uC744 \uD074\uB9AD\uD558\uC5EC \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD655\uC778\uD569\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC6D0\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC 'Create'\uB97C \uCC28\uB840\uB85C \uD074\uB9AD\uD558\uC5EC \uC644\uB8CC\uD569\uB2C8\uB2E4. \uC774\uC81C 'Run Simulator' \uB610\uB294 'Run Target'\uC744 \uD074\uB9AD\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC2E4\uD589\uB418\uB294 \uBAA8\uC2B5\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C \uC124\uBA85\uD55C \uC0DD\uC131 \uB2E8\uACC4\uB97C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD558\uBA74 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",
    mdxType: "LoopVideo"
  }, "Board Specific Demo\uB97C \uC0AC\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "Example\uC774\uB098 Demo\uB97C \uD1B5\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uACE0 \uC2F6\uB2E4\uBA74 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    to: "../designer-user-guide/startup-window",
    mdxType: "Link"
  }, "Lobby \uC139\uC158"), "\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);