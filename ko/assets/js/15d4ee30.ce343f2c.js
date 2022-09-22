"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9192],{

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

/***/ 82985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Shortcut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: "shortcut"
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Shortcut);


/***/ }),

/***/ 13383:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82985);
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
  id: "main-window",
  title: "\uBA54\uC778 \uCC3D"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/main-window",
  "id": "development/ui-development/designer-user-guide/main-window",
  "title": "\uBA54\uC778 \uCC3D",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/main-window.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/main-window",
  "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/main-window",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "main-window",
    "title": "\uBA54\uC778 \uCC3D"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD30C\uC77C \uBA54\uB274",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/file-menu"
  },
  "next": {
    "title": "\uCE94\uBC84\uC2A4 \uBDF0",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/canvas-view"
  }
};
const assets = {};



const toc = [{
  value: "\uD0D0\uC0C9 \uBAA8\uC74C",
  id: "navigation-bar",
  level: 2
}, {
  value: "\uBA85\uB839",
  id: "commands",
  level: 2
}, {
  value: "Generate Code",
  id: "generate-code",
  level: 3
}, {
  value: "Run Simulator",
  id: "run-simulator",
  level: 3
}, {
  value: "Run Target",
  id: "run-target",
  level: 3
}, {
  value: "\uC54C\uB9BC \uD45C\uC2DC\uC904",
  id: "notification-bar",
  level: 2
}, {
  value: "\uC0C1\uC138 \uB85C\uADF8",
  id: "detailed-log",
  level: 2
}, {
  value: "\uD14C\uB9C8",
  id: "theme",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 \uBA54\uC778 \uCC3D\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#navigation-bar"
  }), `\uD0D0\uC0C9 \uBAA8\uC74C`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#commands"
  }), `\uBA85\uB839 \uBC84\uD2BC`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#notification-bar"
  }), `\uC54C\uB9BC \uD45C\uC2DC\uC904`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#detailed-log"
  }), `\uC0C1\uC138 \uB85C\uADF8`), `\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uBA54\uC778 \uCC3D\uC740 '\uBDF0'\uB97C \uC911\uC2EC\uC73C\uB85C \uD558\uB098\uC758 \uD504\uB808\uC784\uC744 \uD615\uC131\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `('\uBDF0' \uC601\uC5ED\uC740 \uC544\uB798 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uD750\uB9BF\uD558\uAC8C \uD45C\uC2DC\uB41C \uC601\uC5ED\uC744 \uB9D0\uD569\uB2C8\uB2E4)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 \uBA54\uC778 \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "navigation-bar"
  }), `\uD0D0\uC0C9 \uBAA8\uC74C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uD0D0\uC0C9\uC740 \uD0D0\uC0C9 \uBAA8\uC74C\uC744 \uD1B5\uD574 \uC774\uB8E8\uC5B4\uC9C0\uBA70(\uC544\uB798 \uC774\uBBF8\uC9C0 \uCC38\uC870), \uC5EC\uAE30\uC11C \uB2E4\uC74C \uC911 \uD55C \uAC00\uC9C0 \uBDF0\uB85C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "canvas-view"
  }), `Canvas`), ` \uBE4C\uB4DC \uC911\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB4DC\uB798\uADF8 \uC564 \uB4DC\uB86D\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "images-view"
  }), `Images`), ` \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC774\uBBF8\uC9C0\uB97C \uAD00\uB9AC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "texts-view"
  }), `Texts`), ` \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uD14D\uC2A4\uD2B8\uC640 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB97C \uAD00\uB9AC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "config-view"
  }), `Config`), ` \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uC124\uC815\uC744 \uAD6C\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0\uB3C4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Files`), `\uB97C \uD074\uB9AD\uD558\uBA74 \uC0C8 \uD30C\uC77C \uD0D0\uC0C9\uAE30 \uCC3D\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8 \uB514\uB809\uD130\uB9AC\uAC00 \uC5F4\uB824\uC11C \uC190\uC27D\uAC8C \uC6D0\uD558\uB294 \uCF54\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-navigation-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 \uD0D0\uC0C9 \uBAA8\uC74C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "commands"
  }), `\uBA85\uB839`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 \uBA85\uB839 \uC139\uC158\uC5D0\uB294 'Generate Code', 'Run Simulator', 'Run Target\u2019\uC758 \uC138 \uAC00\uC9C0 \uBC84\uD2BC\uC774 \uC788\uC2B5\uB2C8\uB2E4(\uC544\uB798 \uC774\uBBF8\uC9C0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `(\uCC38\uC870).`), ` \uC774\uB4E4 \uBC84\uD2BC\uC740 \uAC01\uAC01 \uC5EC\uB7EC \uBA85\uB839\uB4E4\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-actions-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 \uBA85\uB839 \uBC84\uD2BC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB4E4 \uBC84\uD2BC\uC73C\uB85C \uC2E4\uD589\uD560 \uBA85\uB839\uB4E4\uC740 Config\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "config-view#build"
  }), `Build`), ` \uC139\uC158\uC5D0\uC11C \uB36E\uC5B4\uC4F8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "generate-code"
  }), `Generate Code`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Generate Code \uBA85\uB839\uC740 \uC804\uCCB4 \uCF54\uB4DC \uC0DD\uC131\uC744 \uD2B8\uB9AC\uAC70\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC740 \uBA85\uB839\uB4E4\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Assets Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Post Generate Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Post Generate Target Command`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "run-simulator"
  }), `Run Simulator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Run Simulator \uBA85\uB839\uC740 \uC804\uCCB4 \uCF54\uB4DC \uC0DD\uC131\uC744 \uD2B8\uB9AC\uAC70\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC740 \uBA85\uB839\uB4E4\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Assets Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Post Generate Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Compile Simulator Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Run Simulator command`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Run Simulator \uBA85\uB839\uC740 F5\uB97C \uB20C\uB7EC\uC11C \uD2B8\uB9AC\uAC70\uD560 \uC218\uB3C4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "run-target"
  }), `Run Target`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Run Target \uBA85\uB839\uC740 \uC804\uCCB4 \uCF54\uB4DC \uC0DD\uC131\uC744 \uD2B8\uB9AC\uAC70\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC740 \uBA85\uB839\uB4E4\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Assets Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Post Generate Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Generate Target Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Compile Target Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Flash Target command`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Run Target \uBA85\uB839\uC740 F6\uC744 \uB20C\uB7EC\uC11C \uD2B8\uB9AC\uAC70\uD560 \uC218\uB3C4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Generate Code \uBA85\uB839\uC740 F7\uC744 \uB20C\uB7EC\uC11C \uD2B8\uB9AC\uAC70\uD560 \uC218\uB3C4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "notification-bar"
  }), `\uC54C\uB9BC \uD45C\uC2DC\uC904`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uC778 \uCC3D \uD558\uB2E8\uC5D0 \uC788\uB294 \uC54C\uB9BC \uD45C\uC2DC\uC904\uC5D0\uB294 \uD604\uC7AC \uC2E4\uD589 \uC911\uC778 \uBA85\uB839\uC758 \uC0C1\uD0DC\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC624\uB958\uB85C \uC778\uD574 \uBA85\uB839\uC774 \uC911\uB2E8\uB418\uBA74 \uD45C\uC2DC\uC904\uC758 \uD14D\uC2A4\uD2B8\uAC00 \uBE68\uAC04\uC0C9\uC73C\uB85C \uBC14\uB00C\uACE0 \uC911\uB2E8\uB41C \uBA85\uB839\uACFC \uD568\uAED8 \uC624\uB958 \uC544\uC774\uCF58\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uBA85\uB839\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC2E4\uD589\uB418\uBA74 \uBA3C\uC800 \uB179\uC0C9\uC73C\uB85C \uBC14\uB00C\uC5C8\uB2E4\uAC00 \uC54C\uB9BC \uD45C\uC2DC\uC904\uC5D0\uC11C \uC81C\uAC70\uB429\uB2C8\uB2E4. \uBC18\uBA74 \uC911\uB2E8\uB41C \uBA85\uB839\uC740 \uB2E4\uB978 \uBA85\uB839\uC774 \uC2DC\uC791\uB420 \uB54C\uAE4C\uC9C0 \uACC4\uC18D \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/main-window/notification-bar-success.mp4",
    mdxType: "LoopVideo"
  }, "TouchGFX Designer\uC5D0\uC11C \uBA85\uB839 \uC131\uACF5\uC744 \uC54C\uB9AC\uB294 \uC54C\uB9BC \uD45C\uC2DC\uC904"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/main-window/notification-bar-fail.mp4",
    mdxType: "LoopVideo"
  }, "TouchGFX Designer\uC5D0\uC11C \uBA85\uB839 \uC911\uB2E8\uC744 \uC54C\uB9AC\uB294 \uC54C\uB9BC \uD45C\uC2DC\uC904"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "detailed-log"
  }), `\uC0C1\uC138 \uB85C\uADF8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC54C\uB9BC \uD45C\uC2DC\uC904\uC5D0\uC11C \uC784\uC758\uC758 \uC601\uC5ED\uC744 \uD074\uB9AD\uD558\uBA74 \uC0C1\uC138 \uB85C\uADF8 \uCC3D\uC774 \uC5F4\uB9AC\uBA74\uC11C Designer\uC5D0\uC11C \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC2E4\uD589\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uC804\uCCB4 \uB85C\uADF8\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uBA85\uB839\uC758 \uCD9C\uB825\uC774 \uC774 \uCC3D\uC73C\uB85C \uC2A4\uD2B8\uB9AC\uBC0D\uB418\uBA70`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `(\uC544\uB798 GIF \uCC38\uC870)`), `, \uC0C1\uC138 \uB85C\uADF8 \uCC3D\uC758 \uC0C1\uB2E8 \uC624\uB978\uCABD \uBAA8\uC11C\uB9AC\uC5D0 \uC788\uB294 \uB3C4\uD0B9 \uD574\uC81C/\uB3C4\uD0B9 \uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD558\uBA74 \uC774 \uCC3D\uC744 \uBA54\uC778 \uCC3D\uC5D0\uC11C \uB3C4\uD0B9 \uD574\uC81C\uD558\uAC70\uB098 \uB3C4\uD0B9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0 ALT + L\uC744 \uB20C\uB7EC\uC11C \uC0C1\uC138 \uB85C\uADF8 \uCC3D\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + L`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/designer-user-guide/main-window/designer-main-window-log.mp4",
    mdxType: "LoopVideo"
  }, "TouchGFX Designer\uC758 \uC0C1\uC138 \uB85C\uADF8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "theme"
  }), `\uD14C\uB9C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uB294 \uB77C\uC774\uD2B8 \uD14C\uB9C8\uC640 \uB2E4\uD06C \uD14C\uB9C8\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4(\uC544\uB798 \uC774\uBBF8\uC9C0 \uCC38\uC870). \uD14C\uB9C8\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "file-menu#file"
  }), `\uD30C\uC77C \uBA54\uB274`), `\uC5D0\uC11C \uC6D0\uD558\uB294 \uAC83\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-light.png",
    mdxType: "Figure"
  }, "TouchGFX Designer \uB77C\uC774\uD2B8 \uD14C\uB9C8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/main-window/designer-main-window-dark.png",
    mdxType: "Figure"
  }, "TouchGFX Designer \uB2E4\uD06C \uD14C\uB9C8"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);