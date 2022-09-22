"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2309],{

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

/***/ 40576:
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
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65407);
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
  id: "getting-started",
  title: "Getting Started"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "introduction/getting-started",
  "id": "introduction/getting-started",
  "title": "Getting Started",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",
  "sourceDirName": "introduction",
  "slug": "/introduction/getting-started",
  "permalink": "/4.20/ko/docs/introduction/getting-started",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "getting-started",
    "title": "Getting Started"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Installation",
    "permalink": "/4.20/ko/docs/introduction/installation"
  },
  "next": {
    "title": "Basic Concepts",
    "permalink": "/4.20/ko/docs/category/basic-concepts"
  }
};
const assets = {};


const toc = [{
  value: "TouchGFX Designer Quick Start",
  id: "touchgfx-designer-quick-start",
  level: 2
}, {
  value: "TouchGFX \uBCF4\uB4DC \uC124\uC815 + \uC608\uC2DC \uBC0F \uB370\uBAA8",
  id: "application-template--ui-template",
  level: 3
}, {
  value: "Board Specific Demo",
  id: "online-applications",
  level: 3
}, {
  value: "\uB2E4\uC74C \uB2E8\uACC4",
  id: "whats-next",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC124\uCE58\xA0\uC139\uC158\uC5D0 \uC124\uBA85\uB418\uC5B4 \uC788\uB4EF\uC774, TouchGFX \uC0AC\uC6A9\uC744 \uC2DC\uC791\uD558\uB824\uBA74 \uBA3C\uC800 \uCD5C\uC2E0 \uBC84\uC804\uC758 TouchGFX\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "installation"
  }), `\uC124\uCE58`), ` \uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/getting-started/computer-2-screens.png",
    noShadow: true,
    mdxType: "Figure"
  }, " "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC124\uCE58\uAC00 \uC644\uB8CC\uB418\uBA74 TouchGFX\uC758 \uCCAB \uBC88\uC9F8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD560 \uC900\uBE44\uAC00 \uB410\uC2B5\uB2C8\uB2E4. \uBCF8 \uC124\uBA85\uC11C\uC758 \uC8FC\uC694 \uC139\uC158\uB4E4\uC744 \uAF2D \uC77D\uC5B4\uBCF4\uC2DC\uACE0 \uAE30\uBCF8\uC801\uC778 TouchGFX \uAC1C\uB150\uC744 \uC219\uC9C0\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uC139\uC158\uC740`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/development-introduction"
  }), `\xA0\uAC1C\uBC1C \uC18C\uAC1C(Development Introduction)`), `\uB85C, \uC644\uBCBD\uD55C TouchGFX \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD544\uC694\uD55C \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBC0F \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131 \uC694\uC18C\uB97C \uBE44\uB86F\uD574 \uC774\uB4E4\uC744 \uC0DD\uC131\uD558\uAE30 \uC704\uD55C \uD65C\uB3D9 \uBC0F \uB3C4\uAD6C\uB4E4\uC774 \uC18C\uAC1C\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC678\uC5D0\uB3C4 \uC0AC\uC804 \uC81C\uC791\uB41C \uAD6C\uC131 \uC694\uC18C\uB97C \uC0AC\uC6A9\uD558\uB294 \uBE60\uB978 \uD504\uB85C\uD1A0\uD0C0\uC774\uD551 \uBC29\uBC95\uB3C4 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-designer-quick-start"
  }), `TouchGFX Designer Quick Start`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-template--ui-template"
  }), `TouchGFX \uBCF4\uB4DC \uC124\uC815 + \uC608\uC2DC \uBC0F \uB370\uBAA8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB97C \uD14C\uC2A4\uD2B8\uD574 \uBCF4\uACE0 \uC2F6\uC740 \uBD84\uB4E4\uC740 UI \uD504\uB85C\uC81D\uD2B8 \uC608\uC2DC\uB97C \uD65C\uC6A9\uD574\uBCF4\uC138\uC694. STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C \uC2E4\uD589\uD558\uBA74 TouchGFX Designer\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",
    mdxType: "LoopVideo"
  }, "TBS(TouchGFX Board Setup) \uBC0F \uC608\uC2DC\uB97C \uD1B5\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 \uC2DC\uC791 \uCC3D\uC758 \uB2E4\uC591\uD55C UI \uC608\uC2DC \uC911 \uC6D0\uD558\uB294 \uAC83\uC744 \uC120\uD0DD\uD558\uC5EC \uC2DC\uC791\uD558\uC2ED\uC2DC\uC624. \uC774\uB97C STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC758 \uC5EC\uB7EC\uAC00\uC9C0 \uBCF4\uB4DC\uBCC4 \uCF54\uB4DC\uB97C \uD1B5\uD569\uD558\uC5EC \uC784\uBCA0\uB514\uB4DC \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC608\uC2DC\uB97C \uC989\uC2DC \uC2E4\uD589\uD574 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uAC00 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 PC\uC5D0\uC11C \uAC04\uB2E8\uD558\uAC8C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uAC00\uC774\uB4DC\uB294 \uD29C\uD1A0\uB9AC\uC5BC\xA0\uCC55\uD130\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8\uB97C \uC124\uCE58 \uBC0F \uC2E4\uD589\uD558\uC5EC \uBCF5\uC7A1\uD55C UI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "online-applications"
  }), `Board Specific Demo`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uB294 TouchGFX Board Setup\uC5D0 \uC608\uC2DC\uC640 \uB370\uBAA8\uB97C \uD558\uB098\uC529 \uACB0\uD569\uD558\uB294 \uBC29\uC2DD \uC678\uB85C, \uD2B9\uC815 STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uB97C \uC704\uD55C \uD2B9\uBCC4 \uB370\uBAA8\uB4E4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uC815 \uBCF4\uB4DC \uB370\uBAA8(Board Specific Demo)\uC758 \uB370\uBAA8 \uC139\uC158\uC744 \uD655\uC778\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",
    mdxType: "LoopVideo"
  }, "\uBCF4\uB4DC\uBCC4 \uB370\uBAA8\uB97C \uC774\uC6A9\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "whats-next"
  }), `\uB2E4\uC74C \uB2E8\uACC4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC124\uBA85\uC11C \uC804\uCCB4\uB97C \uC0B4\uD3B4\uBCF4\uBA74\uC11C \uC790\uC2E0\uC5D0\uAC8C \uD544\uC694\uD55C \uCC55\uD130\uB4E4\uC744 \uD655\uC778\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uC774\uB807\uAC8C \uC804\uCCB4 \uC124\uBA85\uC11C\uC758 \uAC1C\uC694\uB97C \uD655\uC778\uD558\uC5EC \uC790\uC138\uD55C \uC815\uBCF4\uC758 \uC704\uCE58\uB97C \uC54C \uC218 \uC788\uC73C\uBA70, TouchGFX \uC8FC\uC694 \uAC1C\uB150\uB4E4\uC744 \uC219\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC8FC\uC694 \uCC55\uD130\uB4E4\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../basic-concepts/embedded-graphics"
  }), `Basic Concepts`), `: \uC774 \uCC55\uD130\uB294 \uC124\uBA85\uC11C\uC758 \uB098\uBA38\uC9C0 \uBD80\uBD84\uB4E4\uC5D0 \uB300\uD55C \uBC30\uACBD \uC9C0\uC2DD\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uCC28\uD6C4\uC5D0 \uB808\uD37C\uB7F0\uC2A4\uAC00 \uB418\uB294 \uC8FC\uC694 \uADF8\uB798\uD53D \uAC1C\uB150\uB4E4\uC744 \uBAA8\uB450 \uC18C\uAC1C\uD569\uB2C8\uB2E4. \uD604\uC7AC \uAC16\uCD94\uACE0 \uC788\uB294 \uC9C0\uC2DD\uACFC \uC55E\uC73C\uB85C \uC218\uD589\uD558\uAC8C \uB420 TouchGFX \uAC1C\uBC1C\uC5D0 \uB530\uB77C \uBA87\uBA87 \uC139\uC158\uB4E4\uC740 \uAC74\uB108 \uB6F0\uACE0 \uB098\uC911\uC5D0 \uC138\uBD80\uC801\uC778 \uB0B4\uC6A9\uC774 \uAD81\uAE08\uD560 \uB54C \uCC38\uC870\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/development-introduction"
  }), `Development`), `: \uBCF8 \uC124\uBA85\uC11C\uC758 \uBA54\uC778 \uCC55\uD130\uC785\uB2C8\uB2E4. TouchGFX \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870\uB97C \uBE44\uB86F\uD574 \uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C \uC8FC\uAE30\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \uC6CC\uD06C\uD50C\uB85C\uC640 \uB3C4\uAD6C\uB4E4\uC774 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC6CC\uD06C\uD50C\uB85C\uC758 \uAC01 \uB2E8\uACC4\uB294 \uC790\uCCB4\uC801\uC778 \uC139\uC158\uC73C\uB85C \uBD84\uB958\uB418\uC5B4 \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 TouchGFX \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uBAA8\uB4E0 \uAE30\uB2A5\uACFC \uAD6C\uC131 \uC694\uC18C\uC5D0 \uB300\uD55C \uC124\uBA85\uC744 \uD3EC\uD568\uD574 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uB294 \uBC29\uBC95\uACFC UI \uAC1C\uBC1C \uBC29\uBC95\uC744 \uC774\uD574\uD558\uB294 \uB370 \uD544\uC694\uD55C \uBAA8\uB4E0 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);