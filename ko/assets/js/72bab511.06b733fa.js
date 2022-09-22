"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5966],{

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

/***/ 44601:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39130);
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
  id: "config-view",
  title: "\uAD6C\uC131 \uBDF0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/designer-user-guide/config-view",
  "id": "development/ui-development/designer-user-guide/config-view",
  "title": "\uAD6C\uC131 \uBDF0",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/config-view.mdx",
  "sourceDirName": "development/ui-development/designer-user-guide",
  "slug": "/development/ui-development/designer-user-guide/config-view",
  "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/config-view",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "config-view",
    "title": "\uAD6C\uC131 \uBDF0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD14D\uC2A4\uD2B8 \uBDF0",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/texts-view"
  },
  "next": {
    "title": "\uC0C1\uD638\uC791\uC6A9",
    "permalink": "/4.20/ko/docs/development/ui-development/designer-user-guide/interactions-view"
  }
};
const assets = {};




const toc = [{
  value: "General",
  id: "general",
  level: 2
}, {
  value: "Display",
  id: "display",
  level: 2
}, {
  value: "Default Image Configuration",
  id: "default-image-configuration",
  level: 2
}, {
  value: "Text Configuration",
  id: "text-configuration",
  level: 2
}, {
  value: "Simulator",
  id: "simulator",
  level: 2
}, {
  value: "Build",
  id: "build",
  level: 2
}, {
  value: "Framework Features",
  id: "framework-features",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAD6C\uC131 \uBDF0\uC5D0\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uC5EC\uB7EC \uAC00\uC9C0 \uC124\uC815\uB4E4\uC744 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC139\uC158\uC5D0\uC11C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#general"
  }), `General`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#display"
  }), `Display`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#default-image-configuration"
  }), `Default Image Configuration`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#text-configuration"
  }), `Text Configuration`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#simulator"
  }), `Simulator`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#simulator"
  }), `Build`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#framework-features"
  }), `Framework Features`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.png",
    mdxType: "Figure"
  }, "\uAD6C\uC131 \uBDF0\uC758 General \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "general"
  }), `General`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.png",
    mdxType: "Figure"
  }, "\uAD6C\uC131 \uBDF0\uC758 General \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Application Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Application Name\uC740 \uC77D\uAE30 \uC804\uC6A9 \uD544\uB4DC\uB85C\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uCC98\uC74C \uC0DD\uC131\uD560 \uB54C \uC120\uD0DD\uD55C \uC774\uB984\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `TouchGFX Board Setup`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uD544\uB4DC\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC0DD\uC131\uB41C TouchGFX Board Setup\uC774 \uD45C\uC2DC\uB418\uBA70, \uC774 \uC815\uBCF4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 'N/A'\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uC815\uBCF4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 TouchGFX Board Setup\uC758 \uC774\uB984\uC774 \uBC84\uC804\uACFC \uD568\uAED8 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Selected Language`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "texts-view"
  }), `\uD14D\uC2A4\uD2B8`), ` \uBDF0\uC5D0\uC11C \uAD6C\uC131\uD55C \uC5B8\uC5B4\uB4E4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA70, \uC5EC\uAE30\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8 \uC2E4\uD589 \uC2DC \uD45C\uC2DC\uD560 \uC5B8\uC5B4\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Skin`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C\uB294 \uC2A4\uD0C0\uC77C \uC124\uC815\uC744 \uC9C0\uC6D0\uD558\uB294 \uC704\uC82F\uC5D0 \uC0AC\uC6A9\uD560 \uB450 \uAC00\uC9C0 \uAE30\uBCF8 \uC81C\uACF5 \uC2A4\uD0C0\uC77C \uC911\uC5D0\uC11C \uD558\uB098\uB97C \uC124\uC815\uD558\uBA70, \uC635\uC158\uC73C\uB85C\uB294 'Blue'\uC640 'Dark\u2019\uAC00 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC704\uC82F\uC774 'Blue' \uC2A4\uD0A8 \uC2A4\uD0C0\uC77C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC744 \uB54C \uC2A4\uD0A8\uC744 'Dark'\uB85C \uBCC0\uACBD\uD558\uBA74 \uC704\uC82F\uC774 \uD574\uB2F9 'Dark' \uC2A4\uD0A8 \uC2A4\uD0C0\uC77C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Startup Screen`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uB41C \uBAA8\uB4E0 \uC2A4\uD06C\uB9B0\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA70, \uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791 \uC2DC \uD45C\uC2DC\uD560 \uC2A4\uD06C\uB9B0\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `Display`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uC124\uC815\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.png",
    mdxType: "Figure"
  }, "\uAD6C\uC131 \uBDF0\uC758 Display \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Dimensions`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uB514\uC2A4\uD50C\uB808\uC774 \uD06C\uAE30\uB97C \uB098\uD0C0\uB0B4\uBA70, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `W(\uD3ED)`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `H(\uB192\uC774)`), ` \uC18D\uC131\uC744 \uD1B5\uD574 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, TouchGFX Board Setup\uC5D0\uC11C \uC774\uBBF8 \uD06C\uAE30\uB97C \uAD6C\uC131\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD06C\uAE30 \uAD6C\uC131\uC774 \uBE44\uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Display Orientation`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uB514\uC2A4\uD50C\uB808\uC774 \uBC29\uD5A5\uC744 \uB098\uD0C0\uB0B4\uBA70, \uAC00\uB85C \uBC29\uD5A5\uACFC \uC138\uB85C \uBC29\uD5A5 \uC0AC\uC774\uC5D0\uC11C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774 \uBC29\uD5A5\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9\uD558\uB294 \uC774\uBBF8\uC9C0\uB97C cpp \uD30C\uC77C\uB85C \uBCC0\uD658\uD558\uB294 \uBC29\uC2DD\uC5D0\uB3C4 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Color Depth`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC0C9 \uC2EC\uB3C4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC0C9 \uC2EC\uB3C4\uB294 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uB54C \uC0AC\uC6A9\uD55C TouchGFX Board Setup\uC5D0 \uB530\uB77C \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "default-image-configuration"
  }), `Default Image Configuration`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC774\uBBF8\uC9C0\uC5D0 \uC0AC\uC6A9\uD560 \uAE30\uBCF8 \uAD6C\uC131\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uC124\uC815\uD558\uB294 \uAD6C\uC131\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "images-view"
  }), `\uC774\uBBF8\uC9C0`), ` \uBDF0\uC5D0\uC11C \uB36E\uC5B4\uC4F0\uC5EC\uC9C4 \uACBD\uC6B0\uB97C \uC81C\uC678\uD55C \uBAA8\uB4E0 \uD504\uB85C\uC81D\uD2B8 \uC774\uBBF8\uC9C0\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.png",
    mdxType: "Figure"
  }, "\uAD6C\uC131 \uBDF0\uC758 Default Image Configuration \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Opaque Image Format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C\uB294 \uBD88\uD22C\uBA85\uD55C \uD53D\uC140 \uB370\uC774\uD130\uB9CC \uC788\uB294 \uC774\uBBF8\uC9C0\uB97C \uC0DD\uC131\uD560 \uB54C \uB530\uB77C\uC57C \uD560 \uD615\uC2DD\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC120\uD0DD\uD55C \uC0C9 \uC2EC\uB3C4\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Non Opaque Image Format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C\uB294 \uD22C\uBA85\uD55C \uD53D\uC140 \uB370\uC774\uD130\uAC00 \uC788\uB294 \uC774\uBBF8\uC9C0\uB97C \uC0DD\uC131 \uD560 \uB54C \uB530\uB77C\uC57C \uD560 \uD615\uC2DD\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC120\uD0DD\uD55C \uC0C9 \uC2EC\uB3C4\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Section`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C\uB294 \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uAC00 \uC800\uC7A5\uB418\uB294 \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC139\uC158\uC740 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC0DD\uC131\uB41C TouchGFX Board Setup\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Extra Section`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD560 \uACBD\uC6B0 \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB97C \uC774\uC6A9\uD574 \uC0C9\uC0C1\uD45C\uB97C \uB2E4\uB978 \uC139\uC158\uC5D0 \uC800\uC7A5\uD558\uB3C4\uB85D \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC139\uC158\uC740 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC0DD\uC131\uB41C TouchGFX Board Setup\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Dither Algorithm`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C\uB294 \uC774\uBBF8\uC9C0\uC5D0 \uC0AC\uC6A9\uD560 \uB514\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `No dither: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uC774\uBBF8\uC9C0\uC5D0 \uB514\uB354\uB9C1\uC774 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uAC12\uC740 \uC544\uBB34\uAC83\uB3C4 \uBCC0\uACBD\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC131\uB2A5\uC744 \uAC00\uC7A5 \uB192\uC77C \uC218 \uC788\uB294 \uC124\uC815\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC774\uBBF8\uC9C0\uC5D0 \uB530\uB77C \uC0C9 \uC2EC\uB3C4\uAC00 \uB0AE\uC544\uC9C8\uC218\uB85D \uC774\uBBF8\uC9C0\uC758 \uD488\uC9C8\uC774 \uC2DC\uAC01\uC801\uC73C\uB85C \uB5A8\uC5B4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Floyd-Steinberg: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uC624\uCC28\uB97C \uC778\uC811 \uD53D\uC140\uAE4C\uC9C0 \uD655\uC0B0\uC2DC\uCF1C \uB514\uB354\uB9C1\uC774 \uC138\uBC00\uD574\uC9C0\uC9C0\uB9CC \uC120\uBA85\uB3C4\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Jarvis, Judice and Ninke: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Floyd-Steinberg\uC5D0 \uBE44\uD574 \uC624\uCC28\uB97C \uD55C \uB2E8\uACC4 \uB354 \uBA3C \uAC70\uB9AC\uC758 \uD53D\uC140\uAE4C\uC9C0 \uD655\uC0B0\uC2DC\uD0A4\uBBC0\uB85C \uB514\uB354\uB9C1\uC740 \uAC70\uCE60\uC9C0\uB9CC \uB354\uC6B1 \uC120\uBA85\uD55C \uC774\uBBF8\uC9C0\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C 3\uAC00\uC9C0 \uC624\uCC28 \uD655\uC0B0 \uB514\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998 \uC911\uC5D0\uC11C \uC18D\uB3C4\uAC00 \uAC00\uC7A5 \uB290\uB9BD\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Stucki: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uD3C9\uADE0 \uC624\uCC28\uB97C \uCD5C\uC18C\uD654\uD55C \uB514\uB354\uB9C1\uC5D0 \uAE30\uBC18\uC744 \uB450\uACE0 \uC788\uC9C0\uB9CC \uB354\uC6B1 \uBE60\uB974\uACE0 \uC120\uBA85\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Alpha Dither`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C\uB294 \uC54C\uD30C \uCC44\uB110\uC744 \uD1B5\uD55C \uB514\uB354 \uC54C\uACE0\uB9AC\uC998\uC758 \uC0AC\uC6A9 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Layout Rotaion`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C\uB294 \uC774\uBBF8\uC9C0 \uB370\uC774\uD130 \uC0DD\uC131 \uC2DC \uD68C\uC804\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0 \uBC29\uD5A5\uC774 \uBC14\uB00C\uC5C8\uC744 \uACBD\uC6B0 \uC774 \uBA54\uB274\uB97C \uC0AC\uC6A9\uD574 \uC774\uBBF8\uC9C0\uB97C \uC0C8\uB85C\uC6B4 \uBC29\uD5A5\uC73C\uB85C \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "text-configuration"
  }), `Text Configuration`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8 \uC694\uAC74\uC5D0 \uB9DE\uAC8C \uD655\uC778\uB780\uC744 \uC120\uD0DD\uD558\uC5EC \uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1 \uBC0F \uC800\uC7A5 \uC635\uC158\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.png",
    mdxType: "Figure"
  }, "\uAD6C\uC131 \uBDF0\uC758 Text Configuration \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Remap texts`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uC635\uC158\uC5D0\uC11C\uB294 \uB3D9\uC77C\uD55C \uBC88\uC5ED\uC758 \uB9AC\uB9E4\uD551 \uC5EC\uBD80\uB97C \uC815\uC758\uD569\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8\uB97C \uB9AC\uB9E4\uD551\uD558\uBA74 \uBAA8\uB4E0 \uC5B8\uC5B4, \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uBC0F \uC815\uB82C\uC5D0\uC11C \uB3D9\uC77C\uD55C \uBC88\uC5ED\uACFC \uC811\uBBF8\uC0AC\uAC00 \uACB0\uD569\uB418\uBBC0\uB85C \uACF5\uAC04\uC774 \uD655\uBCF4\uB429\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uB2E8, \uC774 \uC635\uC158\uC740 'Binary translation files\u2019 \uC635\uC158\uACFC \uC0C1\uD638 \uBC30\uD0C0\uC801\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uC635\uC158\uC5D0\uC11C\uB294 glyphs byte \uC5D0\uC11C \uAC00\uB85C \uD53D\uC140 \uB370\uC774\uD130\uC640 A4 \uD615\uC2DD\uC758 \uB9DE\uCDA4 \uC5EC\uBD80\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC774 \uC635\uC158\uC740 4bpp\uB85C \uAD6C\uC131\uB41C \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0\uB9CC \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Binary translation files`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uC635\uC158\uC740 \uD504\uB85C\uC81D\uD2B8 \uBC88\uC5ED\uC744 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uC774\uC9C4 \uD30C\uC77C\uB85C \uBCC0\uD658\uD560 \uAC83\uC778\uC9C0\uC758 \uC5EC\uBD80\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uB2E8, \uC774 \uC635\uC158\uC740 'Remap texts\u2019 \uC635\uC158\uACFC \uC0C1\uD638 \uBC30\uD0C0\uC801\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Binary font files`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uC635\uC158\uC5D0\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8 \uAE00\uAF34 \uD30C\uC77C\uC744 \uB7F0\uD0C0\uC784 \uC2DC \uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uC774\uC9C4 \uD30C\uC77C\uB85C \uBCC0\uD658\uD560 \uAC83\uC778\uC9C0\uC758 \uC5EC\uBD80\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Mapped storage format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uC635\uC158\uC5D0\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8 \uAE00\uAF34 \uD30C\uC77C\uC744 \uB9E4\uD551\uB41C \uC800\uC7A5 \uD615\uC2DD\uC73C\uB85C \uCD9C\uB825\uD560 \uAC83\uC778\uC9C0\uC758 \uC5EC\uBD80\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Unmapped storage format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uC635\uC158\uC5D0\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8 \uAE00\uAF34 \uD30C\uC77C\uC744 \uB9E4\uD551\uB418\uC9C0 \uC54A\uC740 \uC800\uC7A5 \uD615\uC2DD\uC73C\uB85C \uCD9C\uB825\uD560 \uAC83\uC778\uC9C0\uC758 \uC5EC\uBD80\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\uD14D\uC2A4\uD2B8 \uBC0F \uAE00\uAF34")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator"
  }), `Simulator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 Simulator \uC2E4\uD589 \uC2DC \uC2A4\uD0A8\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2A4\uD0A8\uC740 \uAC00\uB85C \uBC29\uD5A5 \uD504\uB85C\uC81D\uD2B8\uC640 \uC138\uB85C \uBC29\uD5A5 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uBAA8\uB450 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `X`), ` \uC18D\uC131\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Y`), ` \uC18D\uC131\uC740 \uC2A4\uD0A8\uC5D0\uC11C Simulator\uC758 \uC704\uCE58\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.png",
    mdxType: "Figure"
  }, "\uAD6C\uC131 \uBDF0\uC758 Simulator \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uB294 \uC2A4\uD0A8\uC744 \uCD94\uAC00\uD558\uC5EC \uC2E4\uD589 \uC911\uC778 Simulator\uB97C \uC2DC\uC5F0\uD55C \uAC83\uC785\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC2A4\uD0A8\uC744 \uCD94\uAC00\uD558\uC5EC Simulator\uB97C \uC2E4\uD589\uD558\uBA74 \uD45C\uC900 \uCC3D \uCEE8\uD2B8\uB864\uC774 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Simulator\uB97C \uB2EB\uC73C\uB824\uBA74`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Esc\uB97C \uB204\uB974\uC2ED\uC2DC\uC624.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.gif",
    mdxType: "Figure"
  }, "\uC2A4\uD0A8\uC744 \uCD94\uAC00\uD558\uC5EC \uC2E4\uD589 \uC911\uC778 Simulator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "build"
  }), `Build`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#run-simulator"
  }), `'Run Simulator'`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#run-target"
  }), `'Run Target'`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "main-window#generate-code"
  }), `'Generate Code'`), `\uB97C \uD074\uB9AD\uD588\uC744 \uB54C \uC2E4\uD589\uB418\uB294 \uBA85\uB839\uC744 \uB36E\uC5B4\uC4F8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA85\uB839\uC744 \uB36E\uC5B4\uC4F0\uB824\uBA74 \uD14D\uC2A4\uD2B8 \uC0C1\uC790\uC5D0 \uC544\uBB34 \uBA85\uB839\uC5B4\uB098 \uC785\uB825\uD558\uBA74 \uB429\uB2C8\uB2E4. \uBA85\uB839\uC744 \uB36E\uC5B4\uC4F4 \uACBD\uC6B0, \uBA85\uB839\uC5B4 \uC774\uB984 \uC606\uC758 \u2018Reset\u2019 \uB77C\uBCA8\uC744 \uD074\uB9AD\uD558\uBA74 \uBA85\uB839\uC774 \uB9AC\uC14B\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.png",
    mdxType: "Figure"
  }, "\uAD6C\uC131 \uBDF0\uC758 Build \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Generate Assets Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBA85\uB839\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uD14D\uC2A4\uD2B8 \uBC0F \uC774\uBBF8\uC9C0 \uC790\uC0B0\uC744 \uC0DD\uC131\uD560 \uB54C \uC124\uC815\uB418\uBA70, TouchGFX Designer\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD55C \uD6C4\uC5D0 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Post Generate Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uBA85\uB839\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C \uC81C\uACF5\uB418\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx update_project`), ` \uBA85\uB839\uC904 \uB3C4\uAD6C\uC5D0\uC11C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC758 \uC5C5\uB370\uC774\uD2B8\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Visual Studio(.vcxproj)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil(.uvprojx)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR(.ewp, .ipcf)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE(.project, .cproject)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX(.ioc)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uCF54\uB4DC \uC0DD\uC131 \uD6C4\uC5D0 \uC2E4\uD589\uD574\uC57C \uD558\uB294 \uBA85\uB839\uC740 \uBAA8\uB450 \uC5EC\uAE30\uC5D0\uC11C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Compile Simulator Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uBA85\uB839\uC740 Simulator\uC5D0 \uB9DE\uCDB0 \uD504\uB85C\uC81D\uD2B8 \uCEF4\uD30C\uC77C\uC744 \uC2E4\uD589\uD558\uBA70, \uC77C\uBC18\uC801\uC73C\uB85C TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB41C Makefile\uC744 \uC2E4\uD589\uD558\uC5EC \uCEF4\uD30C\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Run Simulator Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uBA85\uB839\uC740 simulator.exe \uD30C\uC77C\uC744 \uC2E4\uD589\uD558\uC5EC Simulator\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Post Generate Target Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uBA85\uB839\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uC9C0\uB9CC \uC8FC\uB85C STM32CubeMX(.ioc) \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uCF54\uB4DC \uC0DD\uC131 \uD6C4\uC5D0 \uC2E4\uD589\uD574\uC57C \uD558\uB294 \uBA85\uB839\uC740 \uBAA8\uB450 \uC5EC\uAE30\uC5D0\uC11C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Compile Target Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uBA85\uB839\uC740 \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uB300\uD55C \uD504\uB85C\uC81D\uD2B8 \uCEF4\uD30C\uC77C\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Flash Target Command`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC774 \uBA85\uB839\uC740 \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uB300\uD55C \uD504\uB85C\uC81D\uD2B8 \uD50C\uB798\uC2F1\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "framework-features"
  }), `Framework Features`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uD2B9\uD788 Texture Mapper \uC704\uC82F\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uD3EC\uD568\uD574 \uD504\uB808\uC784\uC6CC\uD06C \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD558\uAC70\uB098 \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC740 \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uAC00 \uCC28\uC9C0\uD558\uB294 \uCF54\uB4DC \uD06C\uAE30\uB97C \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C \uD45C\uC2DC\uB418\uB294 \uC635\uC158\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC120\uD0DD\uD55C \uC0C9 \uC2EC\uB3C4\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uC544\uB798 \uC774\uBBF8\uC9C0\uB294 24\uBE44\uD2B8 \uC0C9 \uC2EC\uB3C4 Texure Mapper\uC5D0 \uB300\uD55C \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.png",
    mdxType: "Figure"
  }, "\uAD6C\uC131 \uBDF0\uC5D0\uC11C 24bpp\uC77C \uB54C Framework Features \uC124\uC815"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);