"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9478],{

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

/***/ 88150:
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
  id: "screen-definition-and-mvp",
  title: "\uC2A4\uD06C\uB9B0 \uAC1C\uB150"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/screen-definition-and-mvp",
  "id": "development/ui-development/software-architecture/screen-definition-and-mvp",
  "title": "\uC2A4\uD06C\uB9B0 \uAC1C\uB150",
  "description": "'@site/components/Figure'\uC5D0\uC11C \uADF8\uB9BC \uAC00\uC838\uC624\uAE30",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/screen-definition-and-mvp.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/screen-definition-and-mvp",
  "permalink": "/4.20/ko/docs/development/ui-development/software-architecture/screen-definition-and-mvp",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "screen-definition-and-mvp",
    "title": "\uC2A4\uD06C\uB9B0 \uAC1C\uB150"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBAA8\uB378-\uBDF0-\uD504\uB9AC\uC820\uD130 \uC124\uACC4 \uD328\uD134",
    "permalink": "/4.20/ko/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"
  },
  "next": {
    "title": "\uCF54\uB4DC \uAD6C\uC870",
    "permalink": "/4.20/ko/docs/development/ui-development/software-architecture/code-structure"
  }
};
const assets = {};
const toc = [{
  value: "\uC2A4\uD06C\uB9B0 \uC815\uC758",
  id: "defining-screens",
  level: 3
}, {
  value: "\uD604\uC7AC \uD65C\uC131\uD654\uB41C \uC2A4\uD06C\uB9B0",
  id: "currently-active-screen",
  level: 3
}, {
  value: "TouchGFX\uC758 Model-View-Presenter",
  id: "model-view-presenter-in-touchgfx",
  level: 2
}, {
  value: "Model",
  id: "model",
  level: 3
}, {
  value: "View",
  id: "view",
  level: 3
}, {
  value: "Presenter",
  id: "presenter",
  level: 3
}];
const makeShortcode = (name) => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("div", __spreadValues({}, props));
};
const Figure = makeShortcode("Figure");
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `'@site/components/Figure'\uC5D0\uC11C \uADF8\uB9BC \uAC00\uC838\uC624\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 "\uC2A4\uD06C\uB9B0" \uC218\uC758 \uC81C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4(\uC544\uB798 \uC2A4\uD06C\uB9B0\uC774 2\uAC1C\uC778 \uC608\uC2DC \uCC38\uC870). TouchGFX\uC5D0\uC11C \uC2A4\uD06C\uB9B0\uC774\uB780 UI \uC694\uC18C(\uC704\uC82F)\uC640 \uC5EC\uAE30\uC5D0 \uC5F0\uACB0\uB41C \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC758 \uB17C\uB9AC\uC801\uC778 \uADF8\uB8F9\uC744 \uB9D0\uD569\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0\uC740 \uB450 \uAC1C\uC758 \uD074\uB798\uC2A4 \uAD6C\uC131\uB418\uB294\uB370, \uD558\uB098\uB294 \uC774 \uC2A4\uD06C\uB9B0\uC5D0 \uD45C\uC2DC\uB418\uB294 \uBAA8\uB4E0 \uC704\uC82F\uC774 \uD3EC\uD568\uB41C View \uD074\uB798\uC2A4\uC774\uACE0, \uB098\uBA38\uC9C0 \uD558\uB098\uB294 \uC774 \uC2A4\uD06C\uB9B0\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC774 \uD3EC\uD568\uB41C Presenter \uD074\uB798\uC2A4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(Figure, {
    imageSource: "/img/development/ui-development/software-architecture/screen-definition-and-mvp/main-screen.png",
    mdxType: "Figure"
  }, "\uBA54\uC778 \uBDF0(\uC2A4\uD06C\uB9B0 1)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(Figure, {
    imageSource: "/img/development/ui-development/software-architecture/screen-definition-and-mvp/settings-screen.png",
    mdxType: "Figure"
  }, "\uC124\uC815 \uBDF0(\uC2A4\uD06C\uB9B0 2)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E8\uC77C \uC2A4\uD06C\uB9B0(\uD558\uB098\uC758 View\uC640 \uD558\uB098\uC758 Presenter\uB85C \uAD6C\uC131)\uC758  context \uB0B4\uC5D0\uC11C \uC804\uCCB4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uB3C4\uB85D \uC120\uD0DD\uD560 \uC218\uB3C4 \uC788\uC9C0\uB9CC UI\uC5D0\uC11C \uAD00\uB828\uC774 \uC5C6\uB294 \uC694\uC18C\uB97C \uC5EC\uB7EC \uC2A4\uD06C\uB9B0\uC73C\uB85C \uBD84\uD560\uD558\uB294 \uAC83\uC774 \uC88B\uC740\uB370, \uADF8 \uC774\uC720\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX\uC5D0\uB294 RAM\uC744 \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uD558\uB294 \uC2A4\uD06C\uB9B0\uC5D0 \uD544\uC694\uD55C RAM\uC744 \uC790\uB3D9\uC73C\uB85C \uD560\uB2F9\uD558\uB294 \uBA54\uBAA8\uB9AC \uD560\uB2F9 \uAE30\uBC95\uC774 \uC801\uC6A9\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uD544\uC694\uD55C \uC6A9\uB7C9\uB9CC \uD560\uB2F9\uB418\uACE0, \uC774\uD6C4\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBAA8\uB4E0 \uC2A4\uD06C\uB9B0\uC5D0 \uAC78\uCCD0 RAM \uBE14\uB85D\uC774 \uC7AC\uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uC2A4\uD06C\uB9B0\uC774 \uC5EC\uB7EC \uAC1C\uC774\uBA74 UI \uCF54\uB4DC\uB97C \uD6E8\uC52C \uC27D\uAC8C \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "defining-screens"
  }), `\uC2A4\uD06C\uB9B0 \uC815\uC758`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC5EC\uB7EC \uC2A4\uD06C\uB9B0\uC73C\uB85C \uBD84\uD560\uD558\uB294 \uB370 \uC815\uD574\uC9C4 \uADDC\uCE59\uC740 \uC5C6\uC9C0\uB9CC \uD2B9\uC815 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uC131\uD560 \uC2A4\uD06C\uB9B0\uC744 \uACB0\uC815\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uB294 \uAC00\uC774\uB4DC\uB77C\uC778\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC2DC\uAC01\uC801\uC73C\uB85C\uB098 \uAE30\uB2A5\uC801\uC73C\uB85C \uAD00\uB828 \uC5C6\uB294 UI \uC601\uC5ED\uC740 \uB2E4\uB978 \uC2A4\uD06C\uB9B0\uC5D0 \uD3EC\uD568\uC2DC\uCF1C \uAD6C\uBD84\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC628\uB3C4\uB97C \uD310\uB3C5\uD558\uB294 \uBA54\uC778 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uAD6C\uC131 \uBA54\uB274, \uB450 \uAC00\uC9C0\uB85C \uB9E4\uC6B0 \uB2E8\uC21C\uD55C \uC628\uB3C4 \uC870\uC808 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC1C\uBC1C\uD558\uACE0\uC790 \uD560 \uACBD\uC6B0\uC5D0\uB294 \uC628\uB3C4 \uD310\uB3C5\uC744 \uC704\uD55C \u201C\uBA54\uC778 \uC2A4\uD06C\uB9B0\u201D\uACFC \uAD6C\uC131 \uBA54\uB274 \uD45C\uC2DC\uB97C \uC704\uD55C \u201C\uC124\uC815 \uC2A4\uD06C\uB9B0\u201D\uC744 \uC0DD\uC131\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uC778 \uC2A4\uD06C\uB9B0\uC758 View\uC5D0\uB294 \uBC30\uACBD \uC774\uBBF8\uC9C0\uB85C \uC0AC\uC6A9\uD560 \uC704\uC82F, \uC628\uB3C4\uB97C \uB098\uD0C0\uB0B4\uB294 \uD14D\uC2A4\uD2B8 \uC601\uC5ED, \uADF8\uB9AC\uACE0 \uAD6C\uC131 \uBA54\uB274\uB85C \uC804\uD658\uD560 \uC218 \uC788\uB294 \uBC84\uD2BC\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uBC18\uBA74 \uAD6C\uC131 View\uB294 \uAD6C\uC131 \uC635\uC158 \uBAA9\uB85D\uC744 \uBE44\uB86F\uD574 \uC5EC\uB7EC \uAC00\uC9C0 \uBC30\uACBD \uC774\uBBF8\uC9C0\uB97C \uB098\uD0C0\uB0B4\uB294 \uC704\uC82F\uC774 \uD3EC\uD568\uB420 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4. \uAD6C\uC131 \uBA54\uB274\uC5D0\uC11C \uC5EC\uB7EC \uAC00\uC9C0 \uC720\uD615\uC758 \uC124\uC815(\uB0A0\uC9DC, \uD0A4\uBCF4\uB4DC\uAC00 \uD3EC\uD568\uB41C \uC774\uB984, \uC628\uB3C4, \uB2E8\uC704 \uB4F1)\uC744 \uD3B8\uC9D1\uD560 \uC218 \uC788\uB3C4\uB85D \uB9CC\uB4E4\uBA74 \uC2A4\uD06C\uB9B0\uC774 \uB108\uBB34 \uBCF5\uC7A1\uD574\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0\uB294 \uAD6C\uC131 \uBA54\uB274\uB97C \uC2A4\uD06C\uB9B0 2\uAC1C\uB85C \uBD84\uD560\uD558\uC5EC \uD558\uB098\uB294 \uC804\uCCB4 \uBA54\uB274 \uC635\uC158 \uD2B8\uB9AC\uB97C \uB098\uD0C0\uB0B4\uB294 \uC2A4\uD06C\uB9B0\uC73C\uB85C, \uB098\uBA38\uC9C0 \uD558\uB098\uB294 \uD2B9\uC815 \uAC12\uC744 \uD3B8\uC9D1\uD558\uB294 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC720\uB9AC\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBC29\uBC95\uC740 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC9C4\uD589\uB418\uBA74\uC11C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "currently-active-screen"
  }), `\uD604\uC7AC \uD65C\uC131\uD654\uB41C \uC2A4\uD06C\uB9B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uC2A4\uD06C\uB9B0\uC5D0 \uBA54\uBAA8\uB9AC\uB97C \uD560\uB2F9\uD558\uB294 \uBC29\uC2DD(\uC0AC\uC6A9\uB7C9\uC774 \uAC00\uC7A5 \uB9CE\uC740 View\uC640 Presenter\uC5D0\uB9CC \uD560\uB2F9) \uB54C\uBB38\uC5D0 \uD55C \uBC88\uC5D0 \uD65C\uC131\uD654\uD560 \uC218 \uC788\uB294 View\uC640 Presenter\uB294 1\uAC1C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC628\uB3C4 \uC870\uC808 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC628\uB3C4 \uC218\uCE58\uAC00 \uD45C\uC2DC\uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAD6C\uC131 \uBA54\uB274 \uC2A4\uD06C\uB9B0\uC774 \uC5B4\uB514\uC5D0\uC11C\uB3C4 \uC2E4\uD589\uB418\uC9C0 \uC54A\uC73C\uBA70 \uBA54\uBAA8\uB9AC\uAC00 \uD560\uB2F9\uB418\uC9C0\uB3C4 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u201C\uBC31\uC5D4\uB4DC\u201D(\uC2E4\uC81C\uB85C \uC628\uB3C4 \uC870\uC808\uC744 \uB2F4\uB2F9\uD558\uB294 UI\uAC00 \uC544\uB2CC \uCF54\uB4DC)\uC5D0\uC11C, \uD639\uC740 \uD558\uB4DC\uC6E8\uC5B4 \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0\uC11C \uC774\uBCA4\uD2B8\uAC00 \uC218\uC2E0\uB420 \uACBD\uC6B0, \uD604\uC7AC \uD65C\uC131\uD654\uB41C \uC2A4\uD06C\uB9B0\uC73C\uB85C \uC218\uC2E0\uB41C \uC774\uBCA4\uD2B8\uB97C \uC704\uC784\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBCA4\uD2B8 \uC911\uC5D0\uB294 \uD2B9\uC815 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC2A4\uD06C\uB9B0\uC5D0 \uD55C\uD574 \uC720\uD6A8\uD55C \uC774\uBCA4\uD2B8\uAC00 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC774\uB807\uAC8C \uD558\uBA74 \uAD00\uC2EC \uC601\uC5ED\uC744 \uC720\uC6A9\uD558\uAC8C \uBD84\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uD604\uC7AC \uC628\uB3C4\uC758 \uBCC0\uD654\uB97C \uC54C\uB9AC\uB294 \uC774\uBCA4\uD2B8\uAC00 \uC218\uC2E0\uB418\uBA74 \uBA54\uC778 \uC2A4\uD06C\uB9B0\uC5D0\uC11C\uB9CC \uD574\uB2F9 \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uBC18\uBA74(\uD604\uC7AC \uC628\uB3C4\uB97C \uB098\uD0C0\uB0B4\uB294 \uD14D\uC2A4\uD2B8 \uC601\uC5ED \uC5C5\uB370\uC774\uD2B8), \uAD6C\uC131 \uC2A4\uD06C\uB9B0\uC5D0\uC11C\uB294 \uD604\uC7AC \uC628\uB3C4\uB97C \uD45C\uC2DC\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC774\uB97C \uAD00\uB828 \uC5C6\uB294 \uC774\uBCA4\uD2B8\uB85C \uB2E8\uC21C\uD788 \uBB34\uC2DC\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "model-view-presenter-in-touchgfx"
  }), `TouchGFX\uC758 Model-View-Presenter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "model-view-presenter-design-pattern"
  }), `Model-View-Presenter \uC124\uACC4 \uD328\uD134`), `\uC5D0 \uAE30\uC220\uB41C Model-View-Presenter(MVP) \uC124\uACC4 \uD328\uD134\uC744 \uB530\uB985\uB2C8\uB2E4. TouchGFX \uC2A4\uD06C\uB9B0 \uAC1C\uB150\uC740 TouchGFX\uC758 View \uBC0F Presenter \uD074\uB798\uC2A4\uC5D0\uC11C \uC0C1\uC18D\uD558\uB294 \uD074\uB798\uC2A4\uB97C \uD1B5\uD574 \uC804\uCCB4\uC801\uC778 Model-View-Presenter \uC544\uD0A4\uD14D\uCC98\uC640 \uC5F0\uACB0\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C TouchGFX Designer\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0C8 \uC2A4\uD06C\uB9B0\uC744 \uCD94\uAC00\uD558\uBA74 \uD2B9\uC815 View \uD074\uB798\uC2A4\uC640 Presenter \uD074\uB798\uC2A4\uAC00 \uC0C8\uB86D\uAC8C \uC0DD\uC131\uB418\uC5B4 \uD574\uB2F9 \uC2A4\uD06C\uB9B0\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C MVP \uD074\uB798\uC2A4\uC758 \uB0B4\uC6A9\uACFC \uCC45\uC784\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "model"
  }), `Model`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Model \uD074\uB798\uC2A4\uB294 \uD56D\uC0C1 \uD65C\uC131\uD654 \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD558\uB294 \uD558\uB098\uBC16\uC5D0 \uC5C6\uB294 \uD074\uB798\uC2A4\uB85C, \uC5EC\uAE30\uC5D0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB450 \uAC00\uC9C0 \uBAA9\uC801\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `UI \uC0C1\uD0DC \uC815\uBCF4\uB97C \uC800\uC7A5\uD569\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0\uC774 \uC804\uD658\uB418\uBA74 View\uC640 Presenter\uAC00 \uD560\uB2F9 \uD574\uC81C\uB418\uBBC0\uB85C \uC2A4\uD06C\uB9B0 \uC804\uD658 \uC2DC \uC720\uC9C0\uD574\uC57C \uD560 \uC815\uBCF4\uB97C \uC800\uC7A5\uD558\uC9C0 \uBABB\uD558\uAC8C \uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C Model\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC815\uBCF4\uB97C \uC800\uC7A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uBC31\uC5D4\uB4DC \uC2DC\uC2A4\uD15C\uC744 \uD5A5\uD55C \uC778\uD130\uD398\uC774\uC2A4 \uC5ED\uD560\uC744 \uD558\uC5EC \uD604\uC7AC \uD65C\uC131\uD654\uB41C \uC2A4\uD06C\uB9B0\uACFC \uC774\uBCA4\uD2B8\uB97C \uC8FC\uACE0\uBC1B\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Model \uD074\uB798\uC2A4\uB294 \uD604\uC7AC \uD65C\uC131\uD654\uB41C Presenter\uC5D0 \uB300\uD55C \uD3EC\uC778\uD130\uB97C \uAC16\uB3C4\uB85D \uC790\uB3D9\uC73C\uB85C \uC124\uC815\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C Model\uC5D0 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC0DD\uAE30\uBA74 \uD604\uC7AC \uD65C\uC131\uD654\uB41C Presenter\uC5D0 \uBCC0\uACBD \uC0AC\uC2E4\uC774 \uD1B5\uC9C0\uB429\uB2C8\uB2E4. \uC774\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 ModelListener \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uBA54\uC18C\uB4DC\uB97C \uD1B5\uD574 \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Designer\uC5D0\uC11C \uC0C8\uB86D\uAC8C \uC0DD\uC131\uB418\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uB294 UI\uC5D0\uC11C \uC5B8\uC81C\uB4E0\uC9C0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D Model \uD074\uB798\uC2A4\uAC00 \uC790\uB3D9\uC73C\uB85C \uD560\uB2F9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "view"
  }), `View`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `View \uD074\uB798\uC2A4(\uB354 \uC815\uD655\uD558\uAC8C\uB294 TouchGFX View \uD074\uB798\uC2A4\uC5D0\uC11C \uD30C\uC0DD\uB418\uB294 \uD074\uB798\uC2A4)\uB294 \uC774 view\uC5D0\uC11C \uBA64\uBC84 \uAC1D\uCCB4\uB85C \uD45C\uC2DC\uB418\uB294 \uC704\uC82F\uC73C\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. \uB610\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen`), ` \uD568\uC218\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tearDownScreen`), ` \uD568\uC218\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC2A4\uD06C\uB9B0 \uC804\uD658 \uC2DC \uC790\uB3D9\uC73C\uB85C \uD638\uCD9C\uB429\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uC704\uC82F\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen`), ` \uD568\uC218\uC5D0\uC11C \uAD6C\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C View\uC5D0\uB294 \uC5F0\uAD00\uB41C Presenter\uC5D0 \uB300\uD55C \uD3EC\uC778\uD130\uB3C4 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uC774 \uD3EC\uC778\uD130\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uC124\uC815\uB429\uB2C8\uB2E4. \uC774 \uD3EC\uC778\uD130\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBC84\uD2BC \uD074\uB9AD\uACFC \uAC19\uC740 UI \uC774\uBCA4\uD2B8\uB97C Presenter\uC5D0 \uC54C\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "presenter"
  }), `Presenter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Presenter \uD074\uB798\uC2A4(\uB9C8\uCC2C\uAC00\uC9C0\uB85C TouchGFX Presenter\uD074\uB798\uC2A4\uC5D0\uC11C \uD30C\uC0DD\uB41C \uD074\uB798\uC2A4)\uB294 \uD604\uC7AC \uD65C\uC131\uD654\uB41C \uC2A4\uD06C\uB9B0\uC758 \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC744 \uB2F4\uB2F9\uD569\uB2C8\uB2E4. Model\uC5D0\uC11C \u201C\uBC31\uC5D4\uB4DC\u201D \uC774\uBCA4\uD2B8\uB97C, \uADF8\uB9AC\uACE0 View\uC5D0\uC11C UI \uC774\uBCA4\uD2B8\uB97C \uC218\uC2E0\uD558\uC5EC \uC2E4\uD589\uD560 \uC561\uC158\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4. \uC774 \uD3EC\uC778\uD130\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBC84\uD2BC \uD074\uB9AD\uACFC \uAC19\uC740 UI \uC774\uBCA4\uD2B8\uB97C Presenter\uC5D0 \uC54C\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);