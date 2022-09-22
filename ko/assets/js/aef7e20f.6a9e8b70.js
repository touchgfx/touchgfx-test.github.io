"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2569],{

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

/***/ 68078:
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
  id: "startup-window",
  title: "\uB85C\uBE44"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/startup-window",
  "id": "development/ui-development/designer-user-guide/startup-window",
  "title": "\uB85C\uBE44",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/startup-window.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/startup-window",
  "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/startup-window",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "startup-window",
    "title": "\uB85C\uBE44"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Designer User Guide",
    "permalink": "/4.20/ko/docs/category/designer-user-guide"
  },
  "next": {
    "title": "\uD30C\uC77C \uBA54\uB274",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/file-menu"
  }
};
const assets = {};


const toc = [{
  value: "Home",
  id: "home",
  level: 2
}, {
  value: "Create",
  id: "create",
  level: 2
}, {
  value: "Examples",
  id: "examples",
  level: 2
}, {
  value: "Demos",
  id: "demos",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB85C\uBE44\uB294 TouchGFX Designer\uB97C \uC2DC\uC791\uD560 \uB54C \uAC00\uC7A5 \uBA3C\uC800 \uD45C\uC2DC\uB418\uB294 \uCC3D\uC785\uB2C8\uB2E4. \uB85C\uBE44\uC5D0\uC11C\uB294 \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uAC70\uB098, \uB370\uBAA8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0B4\uD3B4\uBCF4\uAC70\uB098, \uAE30\uC874 \uD504\uB85C\uC81D\uD2B8\uB97C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + N\uC744 \uB20C\uB7EC \uB85C\uBE44\uB85C \uB4E4\uC5B4\uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), `.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Creating a project from an opened project results in an new instance of the TouchGFX Designer being opened.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uB97C \uCC98\uC74C \uC2E4\uD589\uD558\uBA74 \uB85C\uBE44\uC5D0 \uB4E4\uC5B4\uAC00\uAE30 \uC804\uC5D0 Welcome \uD31D\uC5C5 \uCC3D\uACFC \uD568\uAED8 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#theme"
  }), `\uB77C\uC774\uD2B8 \uD14C\uB9C8\uC640 \uB2E4\uD06C \uD14C\uB9C8`), `\uC758 \uC120\uD0DD \uC635\uC158\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-welcome-pop-up.png",
    width: "630",
    height: "455",
    mdxType: "Figure"
  }, "Welcome \uD31D\uC5C5 \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-theme-selector-pop-up.png",
    width: "630",
    height: "420",
    mdxType: "Figure"
  }, "\uD14C\uB9C8 \uC120\uD0DD \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "home"
  }), `Home`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Home \uD0ED\uC5D0\uC11C\uB294 \uCD5C\uADFC\uC5D0 \uC0AC\uC6A9\uB41C TouchGFX Board Setups(TBS)\uB97C \uAE30\uC900\uC73C\uB85C \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uAC70\uB098, \uD504\uB85C\uC81D\uD2B8\uB97C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-home.png",
    mdxType: "Figure"
  }, "\uB85C\uBE44\uC758 Home \uD0ED"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Recently used TouchGFX Board Setups`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uAC00\uC7A5 \uCD5C\uADFC\uC5D0 \uC9C4\uD589\uD55C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uB41C TBS\uB97C \uC120\uD0DD\uD558\uAC70\uB098, Blank UI\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TBS\uB97C \uC120\uD0DD\uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#create"
  }), `Create`), `\uC5D0\uC11C TBS\uB97C \uC120\uD0DD\uD560 \uB54C\uC640 \uB3D9\uC77C\uD55C \uC635\uC158\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `My Recent Projects`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uC790\uAC00 \uCD5C\uADFC \uD504\uB85C\uC81D\uD2B8\uB97C \uBE60\uB974\uAC8C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Open`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Open \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uD30C\uC77C \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC5F4\uB9AC\uB294\uB370, \uC5EC\uAE30\uC11C \uC218\uB3D9\uC73C\uB85C \uD0D0\uC0C9\uD558\uC5EC .touchgfx \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC744 \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create New`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Create New \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uB85C\uBE44\uC758 \uD0ED\uC774 Home\uC5D0\uC11C Create\uB85C \uBC14\uB01D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "create"
  }), `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Create \uD0ED\uC5D0\uC11C\uB294 \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C Blank UI\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD560 TBS\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create.png",
    mdxType: "Figure"
  }, "\uB85C\uBE44\uC758 Create \uD0ED"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uAC80\uC0C9 \uCC3D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uAC80\uC0C9 \uCC3D\uC740 TBS\uB97C \uBCF4\uB4DC \uC774\uB984\uC73C\uB85C \uD544\uD130\uB9C1\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "\uAC80\uC0C9 \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC0DD\uC131\uC790 \uD544\uD130`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC0DD\uC131\uC790 \uD544\uD130\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC138 \uAC00\uC9C0 \uD544\uD130\uB85C \uAD6C\uBD84\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-filter.png",
    mdxType: "Figure"
  }, "\uC0DD\uC131\uC790 \uD544\uD130"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS \uBAA9\uB85D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC120\uD0DD\uD55C \uD544\uD130\uC5D0 \uB530\uB77C TBS \uBAA9\uB85D\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uAC01 TBS \uB9C8\uB2E4 \uC774\uB984, \uC6B4\uC601 \uCCB4\uC81C \uBC0F \uD574\uC0C1\uB3C4 \uC18D\uC131\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-list.png",
    mdxType: "Figure"
  }, "TBS \uBAA9\uB85D \uC608\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC120\uD0DD\uB41C TBS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` TBS\uB97C \uC120\uD0DD\uD558\uBA74 \uD574\uB2F9 TBS\uC5D0 \uB300\uD55C \uC138\uBD80 \uC815\uBCF4\uC640 \uD568\uAED8 TBS\uB97C \uAE30\uC900\uC73C\uB85C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC774 \uC624\uB978\uCABD \uC139\uC158\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-tbs-info-and-create.png",
    mdxType: "Figure"
  }, "\uC120\uD0DD\uB41C TBS\uC758 \uC124\uBA85\uACFC \uC635\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\uC5D0 \uB530\uB77C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC758 \uC774\uB984\uACFC \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC800\uC7A5\uD560 \uD3F4\uB354 \uC774\uB984\uC774 \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Directory`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB514\uB809\uD130\uB9AC\uC5D0 \uB530\uB77C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC758 \uC704\uCE58\uAC00 \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uB294 \uC120\uD0DD\uD55C TBS\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uC0C9 \uC2EC\uB3C4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Versions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uB294 \uC120\uD0DD\uD55C TBS\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uC5EC\uB7EC \uBC84\uC804\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Resolution`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uD574\uC0C1\uB3C4 \uC870\uC815\uC740 \uC120\uD0DD\uD55C TBS\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. Simulator TBS\uB294 0 x 0\uBD80\uD130 2000 x 2000\uAE4C\uC9C0 \uBAA8\uB4E0 \uD574\uC0C1\uB3C4\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Pressing the Create button, creates a new project based on the selected TBS and Blank UI, with the settings from above.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `Examples`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Examples \uD0ED\uC5D0\uC11C\uB294 \uC608\uC2DC\uC640 TBS\uB97C \uAE30\uBC18\uC73C\uB85C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples.png",
    mdxType: "Figure"
  }, "\uB85C\uBE44\uC758 Examples \uD0ED"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uAC80\uC0C9 \uCC3D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uAC80\uC0C9 \uCC3D\uC740 Example\uC744 \uC774\uB984\uC73C\uB85C \uD544\uD130\uB9C1\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "\uAC80\uC0C9 \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Example \uBAA9\uB85D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC120\uD0DD\uD55C \uD544\uD130\uC5D0 \uB530\uB77C Example \uBAA9\uB85D\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uAC01 Example \uC758 \uC774\uB984\uACFC \uD638\uD658\uB418\uB294 \uD574\uC0C1\uB3C4 \uC18D\uC131\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-example-list.png",
    mdxType: "Figure"
  }, "Example \uBAA9\uB85D \uC608\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Select Board Setup`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Select Board Setup \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 TBS\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uD31D\uC5C5 \uCC3D\uC774 \uC5F4\uB9BD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",
    mdxType: "Figure"
  }, "Select Board Setup \uD31D\uC5C5 \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uAC80\uC0C9 \uCC3D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uAC80\uC0C9 \uCC3D\uC740 TBS\uB97C \uC774\uB984\uC73C\uB85C \uD544\uD130\uB9C1\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC0DD\uC131\uC790 \uD544\uD130`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC0DD\uC131\uC790 \uD544\uD130\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC138 \uAC00\uC9C0 \uD544\uD130\uB85C \uAD6C\uBD84\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS \uBAA9\uB85D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC120\uD0DD\uD55C \uD544\uD130\uC5D0 \uB530\uB77C TBS \uBAA9\uB85D\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uAC01 TBS \uB9C8\uB2E4 \uC774\uB984, \uC6B4\uC601 \uCCB4\uC81C \uBC0F \uD574\uC0C1\uB3C4 \uC18D\uC131\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TBS \uC815\uBCF4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` TBS\uB97C \uC120\uD0DD\uD558\uBA74 \uD574\uB2F9 TBS\uC5D0 \uB300\uD55C \uC138\uBD80 \uC815\uBCF4, \uBC84\uC804\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB294 \uC635\uC158, TBS\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 Select \uBC84\uD2BC\uC774 \uC624\uB978\uCABD \uC139\uC158\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC120\uD0DD\uD55C TBS\uAC00 Select Board Setup \uBC84\uD2BC \uB300\uC2E0\uC5D0 \uD45C\uC2DC\uB418\uACE0, \uD574\uC0C1\uB3C4\uC5D0 \uB9DE\uC9C0 \uC54A\uB294 Example\uC740 \uD68C\uC0C9\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-board.png",
    mdxType: "Figure"
  }, "\uC120\uD0DD\uD55C TBS\uAC00 \uC0C1\uB2E8\uC5D0 \uD45C\uC2DC\uB41C Example \uBAA9\uB85D, \uD574\uC0C1\uB3C4\uAC00 \uD574\uB2F9 TBS\uC640 \uD638\uD658\uB418\uC9C0 \uC54A\uC544 \uD68C\uC0C9\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB41C Example"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC120\uD0DD\uB41C Example`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Example\uC744 \uC120\uD0DD\uD558\uBA74 \uAD00\uB828 \uC124\uBA85\uACFC \uD568\uAED8 \uD574\uB2F9 Example\uC744 \uAE30\uC900\uC73C\uB85C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC774 \uC624\uB978\uCABD \uC139\uC158\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-selected-example.png",
    mdxType: "Figure"
  }, "\uC120\uD0DD\uB41C Example\uC758 \uC124\uBA85\uACFC \uC635\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\uC5D0 \uB530\uB77C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC758 \uC774\uB984\uACFC \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC800\uC7A5\uD560 \uD3F4\uB354 \uC774\uB984\uC774 \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Directory`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB514\uB809\uD130\uB9AC\uC5D0 \uB530\uB77C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC758 \uC704\uCE58\uAC00 \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uB294 \uC120\uD0DD\uD55C Example\uACFC TBS\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uC0C9 \uC2EC\uB3C4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Versions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uB294 Example\uC758 \uC5EC\uB7EC \uBC84\uC804\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Resolution`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uD574\uC0C1\uB3C4 \uC870\uC815\uC740 \uC120\uD0DD\uD55C Example\uACFC TBS\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. Simulator\uAC00 \uACB0\uD569\uB41C Blank UI\uB294 0 x 0\uBD80\uD130 2000 x 2000\uAE4C\uC9C0 \uBAA8\uB4E0 \uD574\uC0C1\uB3C4 \uD06C\uAE30\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Create \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC120\uD0DD\uD55C Example\uACFC TBS\uB97C \uAE30\uC900\uC73C\uB85C \uC704\uC758 \uC124\uC815\uC5D0 \uB530\uB77C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "demos"
  }), `Demos`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Demos \uD0ED\uC5D0\uC11C\uB294 Demo\uC640 TBS \uB610\uB294 BSD(Board Specific Demo)\uB97C \uAE30\uC900\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo.png",
    mdxType: "Figure"
  }, "\uB85C\uBE44\uC758 Demos \uD0ED"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Demo \uD544\uD130`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC0C1\uB2E8\uC5D0 \uC788\uB294 \uD544\uD130\uC5D0\uC11C Demo \uB610\uB294 BSD(Board Specific Demo)\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC73C\uBA70, \uC120\uD0DD\uD55C \uD56D\uBAA9\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-filter.png",
    mdxType: "Figure"
  }, "Demos \uD544\uD130"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uAC80\uC0C9 \uCC3D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uAC80\uC0C9 \uCC3D\uC740 Demo \uB610\uB294 BSD\uB97C \uC774\uB984\uC73C\uB85C \uD544\uD130\uB9C1\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-create-searchbar.png",
    mdxType: "Figure"
  }, "\uAC80\uC0C9 \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Demo \uBAA9\uB85D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC120\uD0DD\uD55C \uD544\uD130\uC5D0 \uB530\uB77C Demo \uBAA9\uB85D\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uAC01 Demo \uB610\uB294 BSD\uC758 \uC774\uB984\uACFC \uD544\uC694\uD55C \uD574\uC0C1\uB3C4 \uC18D\uC131\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-demo-list.png",
    mdxType: "Figure"
  }, "Demo \uD544\uD130\uAC00 \uC801\uC6A9\uB41C Demo \uBAA9\uB85D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-board-specific-demo-list.png",
    mdxType: "Figure"
  }, "Board Specific Demo \uD544\uD130\uAC00 \uC801\uC6A9\uB41C Demo \uBAA9\uB85D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Select Board Setup`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Select Board Setup \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 TBS\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uD31D\uC5C5 \uCC3D\uC774 \uC5F4\uB9BD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-examples-select-board-setup.png",
    mdxType: "Figure"
  }, "Select Board Setup \uD31D\uC5C5 \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Demo \uB610\uB294 BSD \uC120\uD0DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Demo \uB610\uB294 BSD\uB97C \uC120\uD0DD\uD558\uBA74 \uAD00\uB828 \uC124\uBA85\uACFC \uD568\uAED8 \uD574\uB2F9 Demo \uB610\uB294 BSD\uB97C \uAE30\uC900\uC73C\uB85C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC774 \uC624\uB978\uCABD \uC139\uC158\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/startup-window/designer-lobby-demos-selected-demo-or-bsd.png",
    mdxType: "Figure"
  }, "\uC120\uD0DD\uB41C Demo \uB610\uB294 BSD\uC758 \uC124\uBA85\uACFC \uC635\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\uC5D0 \uB530\uB77C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC758 \uC774\uB984\uACFC \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC800\uC7A5\uD560 \uD3F4\uB354 \uC774\uB984\uC774 \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Directory`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB514\uB809\uD130\uB9AC\uC5D0 \uB530\uB77C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC758 \uC704\uCE58\uAC00 \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uB294 \uC120\uD0DD\uD55C Demo\uC640 TBS \uB610\uB294 BSD\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uC0C9 \uC2EC\uB3C4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Versions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uB294 Demo \uB610\uB294 BSD\uC758 \uC5EC\uB7EC \uBC84\uC804\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Resolution`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uD574\uC0C1\uB3C4 \uC870\uC815\uC740 \uC120\uD0DD\uD55C Demo\uC640 TBS \uB610\uB294 BSD\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. Simulator\uAC00 \uACB0\uD569\uB41C Blank UI\uB294 0 x 0\uBD80\uD130 2000 x 2000\uAE4C\uC9C0 \uBAA8\uB4E0 \uD574\uC0C1\uB3C4 \uD06C\uAE30\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Create`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Create \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC120\uD0DD\uD55C Demo\uC640 TBS \uB610\uB294 BSD\uB97C \uAE30\uC900\uC73C\uB85C \uC704\uC758 \uC124\uC815\uC5D0 \uB530\uB77C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);