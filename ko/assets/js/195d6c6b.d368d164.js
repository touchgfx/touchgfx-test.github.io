"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2428],{

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

/***/ 4524:
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
  id: "using-binary-translations",
  title: "\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/using-binary-translations",
  "id": "development/ui-development/touchgfx-engine-features/using-binary-translations",
  "title": "\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-translations.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/using-binary-translations",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-translations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-binary-translations",
    "title": "\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD3F0\uD2B8 \uCE90\uC2F1",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/font-cache"
  },
  "next": {
    "title": "\uBC31\uC5D4\uB4DC \uD1B5\uC2E0",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/backend-communication"
  }
};
const assets = {};

const toc = [{
  value: "\uBC88\uC5ED",
  id: "translations",
  level: 3
}, {
  value: "\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C \uAD6C\uC131\uD558\uAE30",
  id: "configuring-the-text-converter",
  level: 3
}, {
  value: "\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED \uC124\uCE58",
  id: "installing-a-binary-translation",
  level: 3
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX\uC5D0\uC11C \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uD14D\uC2A4\uD2B8 \uBC88\uC5ED\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uCEF4\uD30C\uC77C\uB429\uB2C8\uB2E4. This principle is efficient and easy to use. Binary translations keep the text translation out of the application. \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC740 \uBCC4\uB3C4\uC758 \uBC14\uC774\uB108\uB9AC \uD30C\uC77C\uC5D0\uC11C \uC0DD\uC131\uB418\uC5B4 \uD50C\uB798\uC2F1\uD560 \uC218 \uC788\uB3C4\uB85D \uD504\uB85C\uADF8\uB798\uBC0D\uB418\uAC70\uB098, \uC608\uB97C \uB4E4\uC5B4 SD \uCE74\uB4DC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.  \uC774\uB7EC\uD55C \uBC29\uC2DD\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790\uAC00 \uB9CE\uC740 \uC591\uC758 \uBC88\uC5ED\uC744 \uCC98\uB9AC\uD560 \uB54C \uB354\uC6B1 \uB192\uC740 \uC720\uC5F0\uC131\uC744 \uBC1C\uD718\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations"
  }), `\uBC88\uC5ED`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC758 \uD14D\uC2A4\uD2B8 \uD074\uB798\uC2A4\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uAC01 \uC5B8\uC5B4\uC758 \uBC88\uC5ED \uD14C\uC774\uBE14\uC744 \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uAC00 \uC788\uB294 \uD3EC\uC778\uD130 \uC5B4\uB808\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uBC88\uC5ED \uD14C\uC774\uBE14\uC774\uB780 \uC6D0\uCE59\uC801\uC73C\uB85C \uD574\uB2F9 \uC5B8\uC5B4\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uBAA8\uB4E0 \uBB38\uC790\uC5F4\uC744 \uBAA8\uC544 \uB193\uC740 \uAC83\uC744 \uB9D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",
    noShadow: "true",
    width: "420",
    mdxType: "Figure"
  }, "\uD14D\uC2A4\uD2B8\uB97C \uD2B9\uC815 \uC5B8\uC5B4\uB85C \uB9E4\uD551\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC774 \uD14C\uC774\uBE14\uC744 \uD1B5\uD574 \uC120\uD0DD\uD55C \uC5B8\uC5B4\uC5D0\uC11C \uC9C0\uC815\uB41C \uD14D\uC2A4\uD2B8\uB97C \uCC3E\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-translations/binary-translation.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC73C\uB85C \uB9E4\uD551\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB7F0\uD0C0\uC784\uC5D0\uC11C \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC744 \uC0AC\uC6A9\uD558\uBA74 \uCEF4\uD30C\uC77C\uB41C \uBC88\uC5ED\uC5D0\uC11C \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC73C\uB85C \uB9E4\uD551\uC774 \uBC14\uB01D\uB2C8\uB2E4. \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC740 \uC8FC\uC18C \uC9C0\uC815\uC774 \uAC00\uB2A5\uD55C \uBA54\uBAA8\uB9AC(\uD50C\uB798\uC2DC \uB610\uB294 RAM)\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC0DD\uC131 \uACFC\uC815\uC5D0\uC11C \uB514\uC2A4\uD06C\uC5D0\uC11C \uC77D\uC5B4\uC624\uAC70\uB098, \uD50C\uB798\uC2DC\uB85C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "configuring-the-text-converter"
  }), `\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C \uAD6C\uC131\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uB294 \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC744 \uC0DD\uC131\uD558\uB3C4\uB85D \uAD6C\uC131\uD560 \uC218 \uC788\uB294\uB370, TouchGFX Designer 4.13\uC5D0\uC11C \uC774\uB97C \uC27D\uAC8C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC774 Config \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC "Text Configuration"\uC744 \uC120\uD0DD\uD55C \uB2E4\uC74C "Binary translation files"\uB97C \uD074\uB9AD\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/using-binary-translations/designer-text-config-4.17.png",
    noShadow: "true",
    width: "900",
    mdxType: "Figure"
  }, "\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED \uD65C\uC131\uD654\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7EC\uBA74 \uB2E4\uC74C\uC5D0 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uBA74 generated/texts/binary \uD3F4\uB354\uC5D0 \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC774 \uC0DD\uC131\uB418\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCEF4\uD30C\uC77C\uB41C \uBC88\uC5ED\uC740 \uBE44\uC6CC\uC9D1\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC744 \uB85C\uB4DC\uD574\uC57C\uB9CC \uD14D\uC2A4\uD2B8\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-a-binary-translation"
  }), `\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED \uC124\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBA54\uBAA8\uB9AC\uC5D0 \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC774 \uC788\uC73C\uBA74 TouchGFX\uC5D0 \uC124\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uD6C4\uBD80\uD130\uB294 TouchGFX\uAC00 \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB530\uB77C \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC744 \uC0AC\uC6A9\uD558\uB294 \uC704\uCE58\uB098 \uC2DC\uAC04\uC774 \uB2E4\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC608\uB97C \uB4E4\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `gui/src/common/FrontApplication.cpp`), `\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)`), ` \uC0DD\uC131\uC790\uB97C \uC0AC\uC6A9\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC601\uC5B4 \uBC88\uC5ED\uC744 \uC77D\uC5B4\uC640\uC11C "GB\u201D \uC5B8\uC5B4\uB85C \uC124\uCE58\uD558\uB294 \uC608\uC81C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-11,15-15,19-19}",
    "{11-11,15-15,19-19}": true
  }), `//read the translation into this global array
uint8_t translation[10000];
...

//read the translation from a file, or change array to a pointer that points
//to the translation data in internal or addressable external flash
FILE* file = fopen("generated/texts/binary/LanguageGb.bin", "rb");
if (file)
{
    //read data from file
    fread(translation, 1, 10000, file);
    fclose(file);

    //replace empty translation with the binary data
    Texts::setTranslation(GB, translation);

    //always change language to get TouchGFX changed from the
    //empty translation compiled in to the binary translation
    Texts::setLanguage(GB);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC88\uC5ED\uC744 \uC124\uCE58\uD55C \uD6C4 \uC5B8\uC5B4\uB97C \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 TouchGFX\uAC00 \uBC14\uC774\uB108\uB9AC \uBC88\uC5ED\uC744 \uACC4\uC18D \uC0AC\uC6A9\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC5B8\uC5B4 \uBCC0\uACBD\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "texts-and-fonts#switching-language"
  }), `\uC5EC\uAE30`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uC0C8\uB85C\uC6B4 \uD14D\uC2A4\uD2B8\uB97C \uD45C\uC2DC\uD558\uB824\uBA74 \uD604\uC7AC \uC2A4\uD06C\uB9B0\uC744 \uAC15\uC81C\uB85C \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD558\uAC70\uB098 \uC2A4\uD06C\uB9B0\uC744 \uBCC0\uACBD\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4(\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC5B8\uC5B4\uC758 \uBC88\uC5ED\uC744 \uB85C\uB4DC\uD558\uB294 \uACBD\uC6B0). TouchGFX\uB294 \uC5B4\uB5A4 \uAC83\uB3C4 \uC790\uB3D9\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB8E8\uD2B8 \uCEE8\uD14C\uC774\uB108\uB97C \uB2E4\uC74C\uACFC \uAC19\uC774 \uBB34\uD6A8\uD654\uD558\uBA74 \uD604\uC7AC \uC2A4\uD06C\uB9B0\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7EC\uBA74 \uAC15\uC81C\uB85C \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD558\uAC8C \uB429\uB2C8\uB2E4. \uACBD\uC6B0\uC5D0 \uB530\uB77C \uBAA8\uB4E0 \uAC83\uC744 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC124\uC815\uD574\uC57C \uD55C\uB2E4\uBA74(TextArea \uD06C\uAE30 \uC7AC\uACC4\uC0B0 \uB4F1) \uC2A4\uD06C\uB9B0\uC744 \uBCC0\uACBD\uD558\uB294 \uAC83\uC774 \uB354 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C "\uC2A4\uD06C\uB9B0 \uBCC0\uACBD" \uC561\uC158\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC0C1\uD638\uC791\uC6A9\uC744 \uC0DD\uC131\uD558\uC5EC \uC2A4\uD06C\uB9B0\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\uC5EC\uAE30`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);