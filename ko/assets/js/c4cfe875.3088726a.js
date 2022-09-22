"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5325],{

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

/***/ 21517:
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
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39130);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44035);
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
  id: "embedded-graphics",
  title: "\uC784\uBCA0\uB514\uB4DC \uADF8\uB798\uD53D"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/embedded-graphics",
  "id": "basic-concepts/embedded-graphics",
  "title": "\uC784\uBCA0\uB514\uB4DC \uADF8\uB798\uD53D",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/embedded-graphics.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/embedded-graphics",
  "permalink": "/4.20/ko/docs/basic-concepts/embedded-graphics",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "embedded-graphics",
    "title": "\uC784\uBCA0\uB514\uB4DC \uADF8\uB798\uD53D"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Basic Concepts",
    "permalink": "/4.20/ko/docs/category/basic-concepts"
  },
  "next": {
    "title": "\uC0C9\uC0C1 \uD615\uC2DD",
    "permalink": "/4.20/ko/docs/basic-concepts/color-formats"
  }
};
const assets = {};



const toc = [{
  value: "4\uAC00\uC9C0 \uC8FC\uC694 \uC694\uC18C",
  id: "the-four-main-parts",
  level: 2
}, {
  value: "MCU",
  id: "mcu",
  level: 3
}, {
  value: "RAM",
  id: "ram",
  level: 3
}, {
  value: "\uD50C\uB798\uC2DC",
  id: "flash",
  level: 3
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774",
  id: "display",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC784\uBCA0\uB514\uB4DC \uADF8\uB798\uD53D\uC774\uB780 \uB9CE\uC740 \uC758\uBBF8\uB97C \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 \uC784\uBCA0\uB514\uB4DC\uC5D0 \uB300\uD55C \uD574\uC11D\uC740 \uC0AC\uB78C\uB4E4\uB9C8\uB2E4 \uB2E4\uB985\uB2C8\uB2E4. \uC5B4\uB5A4 \uC0AC\uB78C\uB4E4\uC740 \uC784\uBCA0\uB514\uB4DC \uC2DC\uC2A4\uD15C\uC744 \uC6B4\uC601 \uCCB4\uC81C\uAC00 \uC5C6\uACE0, RAM, ROM \uB610\uB294 GPIO\uB3C4 \uAC70\uC758 \uC5C6\uC774 \uC815\uB9D0\uB85C \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uAD6C\uD615\uC758 8\uBE44\uD2B8 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB77C\uACE0 \uC0DD\uAC01\uD558\uB294\uAC00 \uD558\uBA74, \uB610 \uC5B4\uB5A4 \uC0AC\uB78C\uB4E4\uC740 \uBAA8\uB4E0 \uAC83\uC744 \uAE30\uAC00\uBC14\uC774\uD2B8 \uC218\uC900\uC73C\uB85C \uB192\uC778 \uCD5C\uC2E0 \uC2A4\uB9C8\uD2B8\uD3F0\uC73C\uB85C \uC5EC\uAE41\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB450 \uBC88\uC9F8, \uADF8\uB798\uD53D\uC774\uB77C\uB294 \uD45C\uD604\uC5D0 \uB300\uD574\uC11C\uB3C4 \uD574\uC11D\uC774 \uC5C7\uAC08\uB9BD\uB2C8\uB2E4. \uC990\uACA8 \uC0AC\uC6A9\uD558\uB294 \uD398\uC778\uD305 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uC6D0\uD558\uB294 \uD53D\uC140\uC744 \uADF8\uB9AC\uB294 \uAC83\uC774\uB77C\uACE0 \uD574\uC11D\uD558\uB294 \uC0AC\uB78C\uC774 \uC788\uB294\uAC00 \uD558\uBA74, \uAC8C\uC774\uBC0D \uCF58\uC194\uC5D0\uC11C \uC2E4\uD589\uB418\uB294 3D \uB80C\uB354\uB9C1 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB77C\uACE0 \uD574\uC11D\uD558\uB294 \uC0AC\uB78C\uB4E4\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uAC8C \uC784\uBCA0\uB514\uB4DC \uC2DC\uC2A4\uD15C\uC774\uB780 STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC \uAE30\uBC18\uC758 \uC2DC\uC2A4\uD15C\uC744 \uCD1D\uCE6D\uD569\uB2C8\uB2E4. \uB610\uD55C \uADF8\uB798\uD53D\uC774\uB780 \uCD08\uB2F9 60\uD504\uB808\uC784\uC73C\uB85C \uC2E4\uD589\uB418\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD0D1\uC7AC\uD55C \uB300\uD654\uD615 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-four-main-parts"
  }), `4\uAC00\uC9C0 \uC8FC\uC694 \uC694\uC18C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uADF8\uB798\uD53D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uB824\uBA74 \uBA3C\uC800 \uC9C1\uC811 \uAD00\uB828\uB41C 4\uAC00\uC9C0 \uC8FC\uC694 \uAD6C\uC131\uC694\uC18C\uB97C \uACE0\uB824\uD569\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0\uB3C4 \uC5EC\uB7EC \uAC00\uC9C0 \uAD6C\uC131\uC694\uC18C\uAC00 \uC784\uBCA0\uB514\uB4DC \uC2DC\uC2A4\uD15C\uC5D0 \uD3EC\uD568\uB420 \uC218 \uC788\uC9C0\uB9CC \uADF8\uB798\uD53D \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C \uAD00\uB828\uC131\uC740 \uBE44\uAD50\uC801 \uC801\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/embedded-graphics-primer/4-main-parts.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "MCU, RAM, \uD50C\uB798\uC2DC \uBC0F \uB514\uC2A4\uD50C\uB808\uC774"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC694\uC57D \uD558\uC790\uBA74, TouchGFX\uB294 MCU\uB97C \uC0AC\uC6A9\uD574 \uD50C\uB798\uC2DC\uC5D0\uC11C \uC694\uC18C\uB4E4\uC744 \uC870\uD569\uD558\uC5EC \uC774\uBBF8\uC9C0\uB97C \uC0DD\uC131\uD55C \uD6C4 RAM\uC5D0 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uC870\uD569\uB41C \uC774\uBBF8\uC9C0\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD504\uB85C\uC138\uC2A4\uAC00 \uD544\uC694\uD55C \uB9CC\uD07C \uCD5C\uB300\uD55C \uB9CE\uC774 \uBC18\uBCF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mcu"
  }), `MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\uB294 \uC704\uC758 \uD504\uB85C\uC138\uC2A4\uC5D0\uC11C \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD558\uB294\uB370, \uD50C\uB798\uC2DC\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uC77D\uC5B4\uC640\uC11C RAM\uC5D0 \uC791\uC131\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uBC18\uD22C\uBA85 \uBE68\uAC04\uC0C9 \uD14D\uC2A4\uD2B8\uB97C \uBCD1\uD569\uD560 \uACBD\uC6B0 \uD574\uB2F9\uD558\uB294 \uC0C9\uC0C1\uC744 \uACC4\uC0B0\uD558\uC5EC RAM\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4. \uB610\uD55C \uC6D0\uC758 \uD53D\uC140\uC744 \uBAA8\uB450 \uB80C\uB354\uB9C1\uD558\uC5EC RAM\uC5D0 \uC800\uC7A5\uD558\uACE0, RAM\uC758 \uC774\uBBF8\uC9C0\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/mcu-internal.svg",
    noShadow: "true",
    width: 240,
    mdxType: "Figure"
  }, "MCU\uB294 CPU, \uB0B4\uBD80 \uD50C\uB798\uC2DC, \uB0B4\uBD80 RAM \uB4F1\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 MCU\uB294 LTDC, Chrom-ART, Chrom-GRC \uB4F1 \uADF8\uB798\uD53D\uC744 \uAD6C\uD604\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB294 \uC804\uC6A9 \uAE30\uB2A5\uB4E4\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-mcu",
    mdxType: "Link"
  }, "MCU \uC120\uD0DD \uAC00\uC774\uB4DC"), "\uC640 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/02-cpu-running",
    mdxType: "Link"
  }, "MCU \uC124\uC815\uC5D0 \uB300\uD55C \uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5 \uAC00\uC774\uB4DC"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ram"
  }), `RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RAM\uC740 \uCD5C\uC885\uC801\uC73C\uB85C \uACC4\uC0B0\uB41C \uC774\uBBF8\uC9C0(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C`), `)\uAC00 \uC800\uC7A5\uB418\uB294 \uACF5\uAC04\uC785\uB2C8\uB2E4. \uADF8\uB798\uD53D\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC744 \uB54C \uC774\uB7EC\uD55C RAM\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uB97C \uC77D\uACE0 \uC4F0\uB294 \uAC83\uC740 MCU\uC785\uB2C8\uB2E4. \uC774\uD6C4 \uCD5C\uC885 \uC774\uBBF8\uC9C0\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD560 \uB54C \uD55C \uBC88 \uB354 \uC77D\uC5B4\uC635\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB300\uBD80\uBD84 \uACBD\uC6B0 \uCD5C\uC885 \uC774\uBBF8\uC9C0\uB294 MCU\uC758 \uB0B4\uBD80 RAM\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uC885 \uC774\uBBF8\uC9C0\uB97C \uB0B4\uBD80 RAM\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC678\uBD80 RAM\uC744 \uAD6C\uC131\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-external-memories",
    mdxType: "Link"
  }, "RAM \uC120\uD0DD \uAC00\uC774\uB4DC"), "\uC640 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/04-enable-external-ram",
    mdxType: "Link"
  }, "RAM \uC124\uC815\uC5D0 \uB300\uD55C \uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5 \uAC00\uC774\uB4DC"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash"
  }), `\uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD50C\uB798\uC2DC\uB294 \uBAA8\uB4E0 \uC815\uC801 \uB370\uC774\uD130\uAC00 \uC800\uC7A5\uB418\uB294 \uACF5\uAC04\uC73C\uB85C, \uC774\uBBF8\uC9C0, \uAE00\uAF34, \uD14D\uC2A4\uD2B8\uAC00 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB41C \uB0B4\uC6A9\uC740 MCU\uC5D0\uC11C \uC77D\uC5B4\uC640\uC11C RAM\uC5D0 \uC791\uC131\uB418\uAC70\uB098, RAM\uACFC \uC870\uD569\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB0B4\uBD80 \uD50C\uB798\uC2DC\uB294 \uBCF4\uD1B5 \uADF8\uB798\uD53D \uC560\uC14B\uC744 \uBAA8\uB450 \uC800\uC7A5\uD560 \uB9CC\uD07C \uC6A9\uB7C9\uC774 \uD06C\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC678\uC7A5 \uD50C\uB798\uC2DC\uB97C \uAD6C\uC131\uC5D0 \uCD94\uAC00\uD558\uB294 \uACBD\uC6B0\uAC00 \uB300\uBD80\uBD84\uC785\uB2C8\uB2E4. \uB9E4\uC6B0 \uB2E8\uC21C\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB9CC\uC73C\uB85C\uB3C4 \uCDA9\uBD84\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD50C\uB798\uC2DC\uB294 \uBA54\uBAA8\uB9AC \uB9E4\uD551\uC744 \uC9C0\uC6D0\uD558\uB294 \uAC83\uC774 \uC88B\uC740\uB370, \uC774\uB294 \uD50C\uB798\uC2DC\uC5D0\uC11C \uD53D\uC140\uC744 \uC9C1\uC811 \uC77D\uC5B4\uC640\uC11C RAM\uC5D0 \uC791\uC131\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uACE0 \uD50C\uB798\uC2DC\uAC00 \uBA54\uBAA8\uB9AC \uB9E4\uD551\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294\uB2E4\uBA74 \uD50C\uB798\uC2DC \uB0B4\uC6A9\uC744 RAM\uC73C\uB85C \uC804\uC1A1\uD558\uC5EC \uD574\uB2F9 \uC704\uCE58\uC5D0\uC11C \uC77D\uC5B4\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-external-memories",
    mdxType: "Link"
  }, "\uD50C\uB798\uC2DC \uC120\uD0DD \uAC00\uC774\uB4DC"), "\uC640 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/06-flash-external-addressable",
    mdxType: "Link"
  }, "\uD50C\uB798\uC2DC \uC124\uC815\uC5D0 \uB300\uD55C \uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5 \uAC00\uC774\uB4DC"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display"
  }), `\uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uB294 \uC774\uBBF8\uC9C0\uB97C \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uC2E4\uC81C\uB85C \uBCF4\uC5EC\uC8FC\uB294 \uACF5\uAC04\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uACC4\uC0B0\uB41C \uC774\uBBF8\uC9C0(\uD504\uB808\uC784\uBC84\uD37C)\uAC00 RAM\uC5D0 \uC800\uC7A5\uB41C \uD6C4 MCU\uB97C \uD1B5\uD574 \uC8FC\uAE30\uC801\uC73C\uB85C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, "\uB514\uC2A4\uD50C\uB808\uC774 \uC120\uD0DD \uAC00\uC774\uB4DC"), "\uC640 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/how-to/03-display-internal",
    mdxType: "Link"
  }, "\uB514\uC2A4\uD50C\uB808\uC774 \uC124\uC815\uC5D0 \uB300\uD55C \uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5 \uAC00\uC774\uB4DC"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uAC00\uB2A5\uD55C \uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD \uC635\uC158\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-selection-introduction",
    mdxType: "Link"
  }, "\uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD"), "\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uBCF4\uB4DC \uBC0F \uAD6C\uC131\uC694\uC18C \uC124\uC815\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/board-bring-up/board-introduction",
    mdxType: "Link"
  }, "\uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5"), "\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);