"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4612],{

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

/***/ 27912:
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
  id: "model-view-presenter-design-pattern",
  title: "\uBAA8\uB378-\uBDF0-\uD504\uB9AC\uC820\uD130 \uC124\uACC4 \uD328\uD134"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "id": "development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "title": "\uBAA8\uB378-\uBDF0-\uD504\uB9AC\uC820\uD130 \uC124\uACC4 \uD328\uD134",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/model-view-presenter-design-pattern.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "permalink": "/4.20/ko/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "model-view-presenter-design-pattern",
    "title": "\uBAA8\uB378-\uBDF0-\uD504\uB9AC\uC820\uD130 \uC124\uACC4 \uD328\uD134"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Software Architecture",
    "permalink": "/4.20/ko/docs/category/software-architecture"
  },
  "next": {
    "title": "\uC2A4\uD06C\uB9B0 \uAC1C\uB150",
    "permalink": "/4.20/ko/docs/development/ui-development/software-architecture/screen-definition-and-mvp"
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB294 Model-View-Controller(MVC) \uD328\uD134\uC5D0\uC11C \uD30C\uC0DD\uB41C Model-View-Presenter(MVP)\uB77C\uB294 \uC544\uD0A4\uD14D\uCC98 \uD328\uD134\uC744 \uB530\uB985\uB2C8\uB2E4. \uB458 \uB2E4 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD560 \uB54C \uB110\uB9AC \uC0AC\uC6A9\uB418\uB294 \uD328\uD134\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MVP \uD328\uD134\uC758 \uAC00\uC7A5 \uD070 \uC774\uC810\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uAD00\uC2EC \uC601\uC5ED \uBD84\uB9AC`), `: \uCF54\uB4DC\uB97C \uAC01\uC790\uC758 \uCC45\uC784\uC744 \uAC00\uC9C4 \uBCC4\uAC1C\uC758 \uC601\uC5ED\uC73C\uB85C \uBD84\uD560\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uCF54\uB4DC\uAC00 \uB354 \uB2E8\uC21C\uD574\uC838\uC11C \uC7AC\uC0AC\uC6A9\uD558\uAE30 \uC27D\uACE0 \uC720\uC9C0 \uAD00\uB9AC\uB3C4 \uC26C\uC6CC\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC720\uB2DB \uD14C\uC2A4\uD2B8`), `: UI \uB85C\uC9C1(presenter)\uC774 \uC2DC\uAC01\uC801 \uACC4\uCE35(view)\uACFC \uBD84\uB9AC\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC774\uB7EC\uD55C \uBD80\uBD84\uC744 \uD6E8\uC52C \uC27D\uAC8C \uB2E8\uB3C5\uC73C\uB85C \uD14C\uC2A4\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MVP\uC5D0\uC11C\uB294 \uC138 \uAC00\uC9C0 \uD074\uB798\uC2A4\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC815\uC758\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `model`), `\uC740 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uD45C\uC2DC\uD558\uAC70\uB098, \uADF8 \uBC16\uC5D0 \uC2E4\uD589\uD560 \uB370\uC774\uD130\uB97C \uC815\uC758\uD558\uB294 \uC778\uD130\uD398\uC774\uC2A4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `view`), `\uB294 (model\uC5D0\uC11C) \uB370\uC774\uD130\uB97C \uD45C\uC2DC\uD558\uACE0 \uD574\uB2F9 \uB370\uC774\uD130\uB97C \uC2E4\uD589\uD560 \uD504\uB9AC\uC820\uD130\uC5D0\uAC8C \uC0AC\uC6A9\uC790 \uBA85\uB839(\uC774\uBCA4\uD2B8)\uC744 \uC804\uB2EC\uD558\uB294 \uD328\uC2DC\uBE0C \uC778\uD130\uD398\uC774\uC2A4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `presenter`), `\uB294 model\uACFC view\uC5D0 \uB530\uB77C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC800\uC7A5\uC18C(\uBAA8\uB378)\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC628 \uD6C4 \uBDF0\uC5D0 \uD45C\uC2DC\uD560 \uC218 \uC788\uB3C4\uB85D \uD615\uC2DD\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/software-architecture-mvp/mvp.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uBAA8\uB378-\uBDF0-\uD504\uB9AC\uC820\uD130 \uC124\uACC4 \uD328\uD134"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C\uB294 Model \uD074\uB798\uC2A4\uB97C \uD1B5\uD574\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBC31\uC5D4\uB4DC \uC2DC\uC2A4\uD15C\uC73C\uB85C \uBD88\uB9AC\uB294 UI\uAC00 \uC544\uB2CC \uC601\uC5ED\uACFC \uD1B5\uC2E0\uC774 \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4. \uBC31\uC5D4\uB4DC \uC2DC\uC2A4\uD15C\uC740 \uC0C8\uB85C\uC6B4 \uC13C\uC11C \uCE21\uC815 \uAC12\uACFC \uAC19\uC740 \uC774\uBCA4\uD2B8\uB97C UI\uB85C\uBD80\uD130 \uC218\uC2E0\uD558\uAC70\uB098 UI\uB85C \uC804\uC1A1\uD558\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAD6C\uC131\uC694\uC18C\uC785\uB2C8\uB2E4. \uBC31\uC5D4\uB4DC \uC2DC\uC2A4\uD15C\uC740 \uB3D9\uC77C\uD55C MCU\uC5D0\uC11C, \uD639\uC740 \uBD84\uB9AC\uB41C \uD504\uB85C\uC138\uC11C, \uD074\uB77C\uC6B0\uB4DC \uBAA8\uB4C8 \uB610\uB294 \uADF8 \uBC16\uC5D0 \uB2E4\uB978 \uC704\uCE58\uC5D0\uC11C \uBCC4\uB3C4 \uC791\uC5C5\uC73C\uB85C \uC2E4\uD589\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX\uC758 \uAD00\uC810\uC5D0\uC11C \uBCFC \uB54C, \uD1B5\uC2E0\uC774 \uAC00\uB2A5\uD55C \uAD6C\uC131\uC694\uC18C\uB77C\uBA74 \uBD84\uB9AC \uC5EC\uBD80\uB294 \uC911\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uD1B5\uC2E0 \uD504\uB85C\uD1A0\uCF5C\uC740 TouchGFX\uC5D0\uC11C \uAD00\uB9AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E8\uC21C\uD788 TouchGFX\uB97C \uC2E4\uD589\uD560 \uB54C\uB9C8\uB2E4 \uD638\uCD9C\uB418\uB294 \uD568\uC218\uB97C \uC81C\uACF5\uD558\uC5EC \uC5EC\uAE30\uC5D0 \uD544\uC694\uD55C \uD1B5\uC2E0\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/backend-communication"
  }), `\uBC31\uC5D4\uB4DC \uD1B5\uC2E0`), `\uC5D0\uC11C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/software-architecture-mvp/mvp-2.png",
    noShadow: true,
    mdxType: "Figure"
  }, "Model-View-Presenter \uBC0F \uC678\uBD80 \uD1B5\uC2E0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX UI \uAC1C\uBC1C \uC2DC MVP \uAD6C\uD604 \uBC0F \uC0AC\uC6A9 \uBC29\uC2DD\uC5D0 \uAD00\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "code-structure"
  }), `\uCF54\uB4DC \uAD6C\uC870`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);