"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4531],{

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

/***/ 45620:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
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
  id: "preliminary-considerations",
  title: "\uC0AC\uC804 \uACE0\uB824 \uC0AC\uD56D"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/preliminary-considerations",
  "id": "development/hardware-selection/preliminary-considerations",
  "title": "\uC0AC\uC804 \uACE0\uB824 \uC0AC\uD56D",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/hardware-selection/preliminary-considerations.mdx",
  "sourceDirName": "development/hardware-selection",
  "slug": "/development/hardware-selection/preliminary-considerations",
  "permalink": "/4.20/ko/docs/development/hardware-selection/preliminary-considerations",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "preliminary-considerations",
    "title": "\uC0AC\uC804 \uACE0\uB824 \uC0AC\uD56D"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD \uC18C\uAC1C",
    "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-selection-introduction"
  },
  "next": {
    "title": "Hardware Components",
    "permalink": "/4.20/ko/docs/category/hardware-components"
  }
};
const assets = {};



const toc = [{
  value: "\uB514\uC2A4\uD50C\uB808\uC774 \uD574\uC0C1\uB3C4",
  id: "display-resolution",
  level: 2
}, {
  value: "\uC0C9 \uC2EC\uB3C4",
  id: "color-depth",
  level: 2
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C \uD06C\uAE30 \uACC4\uC0B0",
  id: "framebuffer-size-calculation",
  level: 2
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774",
  id: "display",
  level: 2
}, {
  value: "\uC778\uD130\uD398\uC774\uC2A4",
  id: "interface",
  level: 3
}, {
  value: "\uD06C\uAE30",
  id: "size",
  level: 3
}, {
  value: "\uD130\uCE58",
  id: "touch",
  level: 3
}, {
  value: "\uC815\uC804\uC2DD",
  id: "capacitive",
  level: 4
}, {
  value: "\uAC10\uC555\uC2DD",
  id: "resistive",
  level: 4
}, {
  value: "\uC560\uB2C8\uBA54\uC774\uC158",
  id: "animations",
  level: 2
}, {
  value: "\uAE30\uAD6C\uC801 \uC124\uACC4 \uC694\uAD6C\uC0AC\uD56D",
  id: "mechanical-design-requirements",
  level: 2
}, {
  value: "FPS(Frames Per Second)",
  id: "frames-per-second",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uC120\uC815\uC5D0 \uC55E\uC11C \uACE0\uB824\uD574\uC57C \uD560 \uC0AC\uD56D\uC744 \uC54C\uB824\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uC81C\uD488\uC774 \uAC01\uAE30 \uB2E4\uB974\uACE0 \uC800\uB9C8\uB2E4 \uB2E4\uB978 \uAE30\uC900\uACFC \uC694\uAD6C\uC0AC\uD56D\uC744 \uAC00\uC9C0\uACE0 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uACB0\uC815\uC5D0 \uC55E\uC11C \uC544\uB798\uC758 \uD56D\uBAA9\uC744 \uC0DD\uAC01\uD574 \uBCF4\uC544\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/hardware-selection.png",
    noShadow: true,
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC6B0\uC120 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uC678\uAD00, \uC2DC\uC2A4\uD15C\uC758 \uBA54\uBAA8\uB9AC \uC694\uAD6C\uC0AC\uD56D, \uC6D0\uD558\uB294 UI \uC131\uB2A5, \uADF8\uB9AC\uACE0 \uC81C\uD488\uC758 \uBB3C\uB9AC\uC801 \uB514\uC790\uC778\uACFC \uAD00\uB828\uD558\uC5EC \uB2E4\uB8E8\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-resolution"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uD574\uC0C1\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uB294 \uB2E4\uC591\uD55C \uD574\uC0C1\uB3C4\uC640 \uD654\uBA74 \uBE44\uC728\uB85C \uCD9C\uC2DC\uB429\uB2C8\uB2E4. TouchGFX\uB294 \uC774\uB7EC\uD55C \uD30C\uB77C\uBBF8\uD130\uB4E4\uC5D0 \uC758\uC874\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774 \uD574\uC0C1\uB3C4\uB294 \uC801\uD569\uD55C \uD558\uB4DC\uC6E8\uC5B4\uB97C \uC120\uC815\uD560 \uB54C \uACE0\uB824\uD558\uB294 \uC911\uC694 \uC694\uC18C \uC911 \uD558\uB098\uC785\uB2C8\uB2E4. \uD574\uC0C1\uB3C4\uAC00 \uB192\uB2E4\uB294 \uAC83\uC740 \uD53D\uC140 \uC218\uAC00 \uB9CE\uB2E4\uB294 \uB73B\uC774\uACE0, \uB530\uB77C\uC11C \uB354 \uB9CE\uC740 \uB370\uC774\uD130\uB97C \uB80C\uB354\uB9C1 \uBC0F \uC804\uC1A1\uD560 \uC218 \uC788\uB2E4\uB294 \uC758\uBBF8\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB294 \uBCF4\uD1B5 16/24bpp\uC5D0\uC11C \uCD5C\uB300 XGA \uD574\uC0C1\uB3C4(1024*768)\uB97C \uC9C0\uC6D0\uD558\uACE0, \uC640\uC774\uB4DC \uB514\uC2A4\uD50C\uB808\uC774\uB098 \uB77C\uC6B4\uB4DC \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uAC19\uC740 \uBE44\uD45C\uC900 \uD574\uC0C1\uB3C4\uB3C4 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uD574\uC0C1\uB3C4\uAC00 XGA\uBCF4\uB2E4 \uB192\uC73C\uBA74 \uBCF4\uD1B5\uC740 \uC0C9 \uC2EC\uB3C4\uB098 FPS(Frames Per Second)\uAC00 \uB0AE\uC544\uC9C0\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uD45C\uC900 \uD574\uC0C1\uB3C4\uC5D0 \uAD00\uD55C \uC138 \uAC00\uC9C0 \uC608\uC2DC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/display-resolution.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\uB514\uC2A4\uD50C\uB808\uC774 \uD574\uC0C1\uB3C4 \uC608\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD53D\uC140 \uBC00\uB3C4\uAC00 \uD06C\uBA74 \uBCF4\uD1B5 \uBE44\uC6A9\uC774 \uB192\uC544\uC9C0\uC9C0\uB9CC, \uD06C\uAE30\uAC00 \uD070 \uB514\uC2A4\uD50C\uB808\uC774\uB294 \uD574\uC0C1\uB3C4\uAC00 \uB192\uC544\uC57C \uC120\uBA85\uD558\uAC8C \uBCF4\uC774\uAE30 \uB54C\uBB38\uC5D0 \uD53D\uC140 \uBC00\uB3C4\uB3C4 \uD568\uAED8 \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB9DE\uB294 \uD574\uC0C1\uB3C4\uB97C \uC120\uD0DD\uD560 \uB54C\uB294 \uB2E4\uC74C \uC0AC\uD56D\uC744 \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uBAA9\uD45C\uB85C \uD558\uB294 \uCD5C\uC885 \uC0AC\uC6A9\uC790\uCE35\uC740 \uB204\uAD6C\uC778\uAC00?`), ` \uC18C\uBE44\uC790\uB4E4\uC740 \uC8FC\uB85C \uB354 \uB192\uC740 \uD53D\uC140 \uBC00\uB3C4\uB97C \uC694\uAD6C\uD558\uC9C0\uB9CC, \uC77C\uBD80 \uC0B0\uC5C5\uC6A9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uBE44\uC6A9 \uC808\uAC10\uC774\uB098 \uD1B5\uD569 \uD3B8\uC758\uC131\uC744 \uC704\uD574 \uD53D\uC140 \uBC00\uB3C4\uB97C \uD3EC\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC791\uC740 \uD14D\uC2A4\uD2B8\uB97C \uB9CE\uC774 \uC0AC\uC6A9\uD560 \uAC83\uC778\uAC00?`), ` \uC791\uC740 \uD14D\uC2A4\uD2B8\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uD070 \uBE14\uB85D\uB4E4\uC740 \uBCF4\uD1B5 \uD53D\uC140 \uBC00\uB3C4\uAC00 \uB192\uAE30 \uB54C\uBB38\uC5D0 \uD574\uC0C1\uB3C4\uAC00 \uB354 \uB192\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uB354 \uC798 \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uAC01\uAE30 \uB2E4\uB978 \uB2E4\uC218\uC758 \uC694\uC18C\uB97C \uD55C \uBC88\uC5D0 \uD55C \uD654\uBA74\uC5D0 \uD45C\uC2DC\uD560 \uAC83\uC778\uAC00?`), ` \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uB354 \uD06C\uBA74 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC778\uCE58 \uC218\uAC00 \uCEE4\uC9C0\uAE30 \uB54C\uBB38\uC5D0 \uB354 \uB9CE\uC740 \uC694\uC18C\uB97C \uD45C\uC2DC\uD558\uAC70\uB098 \uD2B9\uC815 \uC694\uC18C\uB97C \uBCF4\uB2E4 \uC120\uBA85\uD558\uAC8C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color-depth"
  }), `\uC0C9 \uC2EC\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB450 \uBC88\uC9F8\uB85C \uC911\uC694\uD55C \uC694\uC778\uC740 \uBC14\uB85C \uC0C9 \uC2EC\uB3C4(bpp)\uC785\uB2C8\uB2E4. \uC0C9 \uC2EC\uB3C4\uB294 \uD55C \uC774\uBBF8\uC9C0\uC5D0\uC11C \uD53D\uC140\uB2F9 \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uC815\uBCF4\uC758 \uC591, \uC989 \uB2E8\uC77C \uD53D\uC140\uC5D0 \uD560\uB2F9\uD560 \uC218 \uC788\uB294 \uC0C9\uC0C1\uC758 \uC218\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/1bpp24bpp.png",
    noShadow: true,
    mdxType: "Figure"
  }, "1bpp \uBC0F 24bpp \uC560\uD50C\uB9AC\uCF00\uC774\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uB294 \uB2E4\uC591\uD55C \uC0C9 \uC2EC\uB3C4\uB97C \uC9C0\uC6D0\uD558\uACE0 24bpp \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C 16bpp GUI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uB294 \uAC83\uC774 \uAC00\uB2A5\uD558\uC9C0\uB9CC, 16\uBE44\uD2B8 \uC0C9\uC0C1\uB9CC \uD45C\uC2DC\uD560 \uC218 \uC788\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C 24bpp \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uB54C\uB294 \uC5B4\uB824\uC6C0\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C9\uC0C1\uC774 \uBBF8\uBB18\uD558\uAC8C \uB2E4\uB978 \uBCF5\uC7A1\uD55C \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uC18C\uC2A4 \uC774\uBBF8\uC9C0\uC5D0 \uCD5C\uB300\uD55C \uADFC\uC811\uD558\uB3C4\uB85D \uB354 \uB192\uC740 \uC0C9 \uC2EC\uB3C4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC120\uD0DD\uD55C \uC0C9 \uC2EC\uB3C4\uB294 \uD544\uC694\uD55C \uBA54\uBAA8\uB9AC\uC758 \uC591\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C9 \uC2EC\uB3C4\uB97C \uB0AE\uCDB0\uC11C \uC5BB\uC744 \uC218 \uC788\uB294 \uC774\uC810\uC744 \uACFC\uC18C \uD3C9\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC624\uB298\uB0A0 \uB2E4\uC218\uC758 UI \uC124\uACC4 \uCCA0\uD559\uC774 \uD3C9\uD0C4\uD654\uB418\uACE0 \uC0C9\uC0C1 \uC9D1\uC57D\uB3C4\uAC00 \uB0AE\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158(\uC608: Google\uC758 Material Design)\uC744 \uC911\uC2EC\uC73C\uB85C \uC804\uAC1C\uB418\uACE0 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. TouchGFX\uC758 \uB514\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998 \uC138\uD2B8 \uC911 \uD558\uB098\uB97C \uC801\uC6A9\uD558\uC5EC \uBCF5\uC7A1\uD55C \uC774\uBBF8\uC9C0\uB97C \uB0AE\uC740 \uC0C9 \uC2EC\uB3C4\uB85C \uB354\uC6B1 \uC720\uC6A9\uD558\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uB294 \uC0C9 \uC2EC\uB3C4\uB97C \uB0AE\uCDB0\uC11C \uC5BB\uC744 \uC218 \uC788\uB294 \uC774\uC810\uC5D0 \uB300\uD55C \uBA87 \uAC00\uC9C0 \uC608\uC2DC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/low-color.png",
    noShadow: true,
    width: "300",
    mdxType: "Figure"
  }, "\uB0AE\uC740 \uC0C9 \uC2EC\uB3C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC608\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB9DE\uB294 \uC0C9 \uC2EC\uB3C4\uB97C \uC120\uD0DD\uD560 \uB54C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC0AC\uD56D\uC744 \uC790\uBB38\uD574\uBD10\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC2E4\uC81C \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD574\uC57C \uD558\uB294\uAC00?`), ` \uC2E4\uC81C \uC774\uBBF8\uC9C0\uB098 \uB2E4\uCE35 \uAD6C\uC131 \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uB514\uC2A4\uD50C\uB808\uC774 \uBAA8\uB450 24bpp \uD53D\uC140\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uACBD\uC6B0\uC5D0 \uB530\uB77C 16bpp\uB85C\uB294 \uD544\uC694\uD55C \uC0C9\uC0C1\uC744 \uBAA8\uB450 \uD45C\uC2DC\uD558\uAE30\uC5D0 \uCDA9\uBD84\uD558\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0\uC5D0\uB294 16bpp\uB85C\uB3C4 \uCDA9\uBD84\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC544\uC9C1\uAE4C\uC9C0 \uC5C5\uACC4 \uD45C\uC900 \uC911 \uD558\uB098\uB85C \uC0AC\uC6A9\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uADF8\uB808\uC774 \uC2A4\uCF00\uC77C \uC0C9\uC0C1\uC774\uB098 \uAC04\uB2E8\uD55C 6/8bpp\uB9CC \uC788\uC5B4\uB3C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uD544\uC694\uD55C \uAE30\uB2A5\uC744 \uC804\uB2EC\uD560 \uC218 \uC788\uB294\uAC00?`), ` \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uAE30\uB2A5\uC744 \uC81C\uB300\uB85C \uC804\uB2EC\uD558\uB294 \uB370 \uBB34\uBD84\uBCC4\uD558\uAC8C \uB9CE\uC740 \uC0C9\uC0C1\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uB0AE\uC740 \uC0C9 \uC2EC\uB3C4\uB97C \uC120\uD0DD\uD574\uB3C4 \uB429\uB2C8\uB2E4. \uB610\uD55C \uD504\uB808\uC784\uBC84\uD37C \uD06C\uAE30\uC640 \uADF8\uC5D0 \uB530\uB978 RAM \uC694\uAD6C\uC0AC\uD56D\uB3C4 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `RAM\uACFC \uD50C\uB798\uC2DC\uC5D0 \uC81C\uD55C\uC774 \uC788\uB294\uAC00?`), ` \uC0C9 \uC2EC\uB3C4\uB97C \uC81C\uD55C\uD558\uBA74 \uD544\uC694\uD55C \uBE44\uD2B8\uB9F5\uACFC \uD504\uB808\uC784\uBC84\uD37C(RAM)\uC758 \uD06C\uAE30\uAC00 \uBAA8\uB450 \uC904\uC5B4\uB4E4\uAC8C \uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "framebuffer-size-calculation"
  }), `\uD504\uB808\uC784\uBC84\uD37C \uD06C\uAE30 \uACC4\uC0B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uB294 \uD504\uB808\uC784\uC758 \uD53D\uC140 \uB370\uC774\uD130\uAC00 \uC800\uC7A5\uB418\uC5B4 \uB80C\uB354\uB9C1\uB418\uACE0 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uB418\uB294 \uC7A5\uC18C\uC785\uB2C8\uB2E4. \uD53D\uC140 \uC218\uAC00 \uB9CE\uACE0 \uC0C9 \uC2EC\uB3C4\uAC00 \uB192\uC744\uC218\uB85D RAM\uACFC \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uC694\uAD6C\uB418\uB294 \uCC98\uB9AC\uB7C9\uB3C4 \uB192\uC544\uC9C0\uAE30 \uB54C\uBB38\uC5D0 \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD06C\uAE30\uAC00 \uC911\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uC758 \uD06C\uAE30(\uBC14\uC774\uD2B8)\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uACC4\uC0B0\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\uB514\uC2A4\uD50C\uB808\uC774 \uB108\uBE44 * \uB514\uC2A4\uD50C\uB808\uC774 \uB192\uC774 * (\uD53D\uC140\uB2F9 \uBE44\uD2B8 \uC218/ 8)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 \uC0C9 \uC2EC\uB3C4\uAC00 16bpp\uC774\uACE0 \uB2E8\uC77C \uBC84\uD37C\uD504\uB808\uC784\uC744 \uAC00\uC9C4 800x480 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD560\uB2F9\uB418\uB294 \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD06C\uAE30\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `800 * 480 * (16 / 8) = 768.000 \uBC14\uC774\uD2B8(768.000/1024 = 750KB)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD574\uC0C1\uB3C4\uC640 \uC0C9 \uC2EC\uB3C4\uB97C \uACB0\uC815\uD588\uB2E4\uBA74 \uC774\uB97C \uB4B7\uBC1B\uCE68\uD560 \uC218 \uC788\uB294 \uCDA9\uBD84\uD55C \uC591\uC758 RAM\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uC5B4\uB5A4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 2\uAC1C\uC758 \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uD544\uC694\uD55C\uB370, \uC704\uC758 \uC608\uC2DC\uB85C \uBCF4\uC790\uBA74 750 KB * 2 = 1500 KB\uC758 RAM\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/framebuffer-calculations.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\uD504\uB808\uC784\uBC84\uD37C \uACC4\uC0B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uD504\uB808\uC784\uBC84\uD37C\uB97C \uC9C0\uC6D0\uD558\uB294 \uB370 \uD544\uC694\uD55C \uBA54\uBAA8\uB9AC\uC758 \uC591 \uC5ED\uC2DC \uC120\uD0DD\uD55C \uD504\uB808\uC784\uBC84\uD37C \uC804\uB7B5(\uB2E8\uC77C, \uC774\uC911, \uBD80\uBD84)\uC5D0 \uC758\uD574 \uC804\uC801\uC73C\uB85C \uC88C\uC6B0\uB429\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C \uC804\uB7B5\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../basic-concepts/framebuffer",
    mdxType: "Link"
  }, "\uD504\uB808\uC784\uBC84\uD37C"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. \uC77C\uBD80 STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB4E4\uC740 \uBE44\uC6A9 \uD6A8\uACFC\uC801\uC778 \uC194\uB8E8\uC158\uC744 \uC704\uD574 \uB0B4\uBD80 RAM\uB9CC \uC2E4\uD589\uD558\uB294 \uC0C1\uD0DC\uC5D0\uC11C \uCD5C\uB300 HVGA\uC758 \uD574\uC0C1\uB3C4\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interface"
  }), `\uC778\uD130\uD398\uC774\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4(\uC608: SPI, LTDC, MIPI-DSI)\uAC00 \uAC01\uAE30 \uB2E4\uB978 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC120\uD0DD\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uBAA8\uB4E0 \uC778\uD130\uD398\uC774\uC2A4\uB294 \uD544\uC694\uD55C \uD540\uC758 \uC218, \uB300\uC5ED\uD3ED, \uC9C0\uC6D0\uB418\uB294 \uD574\uC0C1\uB3C4, \uADF8\uB9AC\uACE0 \uD544\uC694\uD55C \uC678\uBD80 RAM\uC758 \uC591\uC5D0 \uAC01\uAE30 \uB2E4\uB978 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4. \uC774\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uACFC \uAC01\uAC01\uC758 \uC7A5\uB2E8\uC810\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, `\uB514\uC2A4\uD50C\uB808\uC774`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "size"
  }), `\uD06C\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uC758 \uBB3C\uB9AC\uC801 \uD06C\uAE30 \uC5ED\uC2DC \uC911\uC694\uD55C \uACE0\uB824 \uC0AC\uD56D\uC785\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uB354 \uD06C\uBA74 \uBCF4\uD1B5 \uC870\uC791\uD558\uAE30\uAC00 \uB354 \uC27D\uACE0 \uC815\uBC00\uD55C \uD130\uCE58 \uBA85\uB839\uC744 \uC27D\uAC8C \uB0B4\uB9B4 \uC218 \uC788\uC9C0\uB9CC, \uB208\uC774 \uD3B8\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uB354 \uB192\uC740 \uD574\uC0C1\uB3C4\uAC00 \uD544\uC694\uD558\uAE30 \uB54C\uBB38\uC5D0 \uBA54\uBAA8\uB9AC\uC640 \uCC98\uB9AC\uB7C9\uC5D0 \uB300\uD55C \uC694\uAD6C\uAC00 \uC99D\uAC00\uD558\uAC8C \uB429\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uC815\uBCF4\uAC00 1 ~ 2\uBBF8\uD130 \uAC70\uB9AC\uC5D0\uC11C\uB3C4 \uBCF4\uC778\uB2E4\uBA74 \uD14D\uC2A4\uD2B8, \uC544\uC774\uCF58 \uB4F1\uC758 \uD06C\uAE30\uAC00 \uCDA9\uBD84\uD788 \uCEE4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch"
  }), `\uD130\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD130\uCE58 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uB294 \uD06C\uAC8C \uB450 \uAC00\uC9C0 \uC720\uD615\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "capacitive"
  }), `\uC815\uC804\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC815\uC804\uC2DD \uD130\uCE58 \uB514\uC2A4\uD50C\uB808\uC774\uB294 \uD130\uCE58 \uAC10\uB3C4\uAC00 \uD6E8\uC52C \uB6F0\uC5B4\uB0A9\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD130\uCE58 \uAC10\uB3C4\uB294 \uB4DC\uB798\uADF8\uB098 \uC2A4\uC640\uC774\uD504\uC640 \uAC19\uC740 \uACE0\uAE09 \uD130\uCE58 \uC870\uC791\uC774 \uD544\uC694\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC911\uC694\uD558\uBA70, \uC774\uB7F0 \uC774\uC720\uB85C \uCD5C\uC2E0 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uAC12\uC774 \uBE44\uC2F8\uBA70 \uC7A5\uAC11\uC744 \uCC29\uC6A9\uD55C \uC0C1\uD0DC\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB2E4\uB294 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB2E8\uC810\uC774 \uBB38\uC81C\uAC00 \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC10\uC555\uC2DD\uC774 \uD574\uACB0\uCC45\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "resistive"
  }), `\uAC10\uC555\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC12\uC774 \uB354 \uC800\uB834\uD55C \uB300\uC548 \uC194\uB8E8\uC158\uC73C\uB85C, \uAC10\uB3C4\uC640 \uD587\uBE5B\uC5D0\uC11C\uC758 \uAC00\uC2DC\uC131\uC774 \uB5A8\uC5B4\uC9C4\uB2E4\uB294 \uB2E8\uC810\uC774 \uC788\uC9C0\uB9CC \uC7A5\uAC11\uC744 \uCC29\uC6A9\uD55C \uC0C1\uD0DC\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC758\uB3C4\uCE58 \uC54A\uC740 \uD130\uCE58\uC5D0 \uB35C \uBBFC\uAC10\uD558\uBA70 \uC77C\uBC18\uC801\uC73C\uB85C \uC800\uD56D\uC774 \uB354 \uAC15\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E8\uC21C\uD558\uAC8C \uBC84\uD2BC\uC744 \uB204\uB974\uB294 \uAC83\uC73C\uB85C \uBAA8\uB4E0 \uD130\uCE58 \uC870\uC791\uC774 \uAC00\uB2A5\uD55C \uACBD\uC6B0\uC5D0\uB294 \uAC10\uC555\uC2DD \uB514\uC2A4\uD50C\uB808\uC774\uB85C\uB3C4 \uCDA9\uBD84\uD569\uB2C8\uB2E4. STM32F429-DISCO \uBCF4\uB4DC\uB294 \uAC10\uC555\uC2DD \uD130\uCE58 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "animations"
  }), `\uC560\uB2C8\uBA54\uC774\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uB4DC\uC6E8\uC5B4\uC758 \uCC98\uB9AC\uB7C9\uACFC \uACC4\uC0B0 \uB2A5\uB825\uC774 \uCDA9\uBD84\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0 \uC804\uCCB4 \uD654\uBA74 \uC804\uD658, \uD68C\uC804 \uBC0F \uD06C\uAE30 \uBCC0\uD658\uACFC \uAC19\uC740 \uBCF5\uC7A1\uD55C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC2E4\uD589\uD558\uBA74 \uC131\uB2A5\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC560\uB2C8\uBA54\uC774\uC158 \uC218\uC900\uC744 \uACB0\uC815\uD560 \uB54C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC0AC\uD56D\uC744 \uACE0\uBBFC\uD574\uBD10\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uACE0\uC18D \uC804\uCCB4 \uD654\uBA74 \uC804\uD658 \uAE30\uB2A5\uC774 \uD544\uC694\uD55C\uAC00?`), ` \uC804\uCCB4 \uD654\uBA74\uC744 \uC804\uD658\uD558\uB824\uBA74 \uC804\uCCB4 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uB80C\uB354\uB9C1\uD574\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0 MCU \uC8FC\uAE30\uAC00 \uCDA9\uBD84\uD55C\uC9C0, \uD53D\uC140 \uB370\uC774\uD130\uC758 \uC561\uC138\uC2A4 \uBC0F \uC804\uC1A1 \uC18D\uB3C4\uAC00 \uCDA9\uBD84\uD788 \uBE60\uB978\uC9C0\uAC00 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4. \uD544\uC694\uD55C \uC2DC\uC2A4\uD15C \uC131\uB2A5\uC740 \uD574\uC0C1\uB3C4\uC640 \uC0C9 \uC2EC\uB3C4\uC5D0 \uB530\uB77C \uACB0\uC815\uB429\uB2C8\uB2E4. STM32 \uACE0\uC131\uB2A5 \uC81C\uD488\uC5D0\uC11C\uB294 \uB300\uCCB4\uB85C \uACE0\uD574\uC0C1\uB3C4 \uC804\uCCB4 \uD654\uBA74 \uC804\uD658\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC77C\uBD80 \uC804\uD658\uC5D0\uC11C\uB294 \uBCC4\uB3C4\uC758 \uC2A4\uD1A0\uB9AC\uC9C0\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uD544\uC694\uD55C \uBA54\uBAA8\uB9AC\uC758 \uC591\uC774 \uB298\uC5B4\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uD68C\uC804\uC774\uB098 \uD06C\uAE30 \uBCC0\uD658\uACFC \uAC19\uC740 \uBCF5\uC7A1\uD55C \uD14D\uC2A4\uCC98 \uB9E4\uD551 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uD544\uC694\uD55C\uAC00?`), ` \uD14D\uC2A4\uCC98 \uB9E4\uD551 \uC560\uB2C8\uBA54\uC774\uC158\uC740 \uACC4\uC0B0 \uBC0F \uBE44\uD2B8\uB9F5 \uC804\uC1A1 \uC2DC \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC0C1\uB2F9\uD788 \uC9D1\uC57D\uC801\uC73C\uB85C \uC774\uB8E8\uC5B4\uC9C8 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC77C\uBC18\uC801\uC73C\uB85C \uB354 \uB192\uC740 MHz\uC640 \uB9CE\uC740 \uBA54\uBAA8\uB9AC \uCC98\uB9AC\uB7C9\uC744 \uC694\uAD6C\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/animations.gif",
    width: "480",
    mdxType: "Figure"
  }, "\uC560\uB2C8\uBA54\uC774\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mechanical-design-requirements"
  }), `\uAE30\uAD6C\uC801 \uC124\uACC4 \uC694\uAD6C\uC0AC\uD56D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC81C\uD488\uC758 \uBB3C\uB9AC\uC801 \uCF00\uC774\uC2A4\uC5D0 \uB300\uD55C \uC694\uAD6C\uC0AC\uD56D\uC740 \uB9E4\uC6B0 \uB2E4\uC591\uD558\uACE0 \uC774\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC00\uC804 \uC81C\uD488\uC740 \uC704\uD5D8\uD55C \uC0B0\uC5C5\uC6A9 \uC81C\uD488\uACFC\uB294 \uB2E4\uB978 \uBCC4\uB3C4\uC758 \uC694\uAD6C\uC0AC\uD56D\uB4E4\uC774 \uC788\uC744 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 \uBB3C\uB9AC\uC801 \uC81C\uC57D\uC0AC\uD56D\uC744 \uBC1D\uD790 \uB54C \uB2E4\uC74C\uC758 \uC0AC\uD56D\uC744 \uAC80\uD1A0\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC81C\uD488\uC774 \uC544\uC8FC \uC791\uC544\uC57C \uD558\uB294\uAC00?`), ` \uD55C \uC608\uB85C \uC2A4\uB9C8\uD2B8\uC6CC\uCE58\uB294 \uCF00\uC774\uC2A4\uC758 \uD06C\uAE30\uAC00 \uC81C\uD55C\uB418\uC5B4 \uC788\uC5B4 PCB \uD06C\uAE30\uC5D0\uB3C4 \uC81C\uD55C\uC774 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC801\uD569\uD55C \uBD80\uD488\uC744 \uC120\uD0DD\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. STM32\uB294 WLCSP \uD328\uD0A4\uC9C0\uC640 \uAC19\uC774 \uAD11\uBC94\uC704\uD55C MCU \uD328\uD0A4\uC9C0\uB97C \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC81C\uD488\uC774 \uADF9\uD55C\uC758 \uC628\uB3C4\uC5D0 \uB178\uCD9C\uB418\uB294\uAC00?`), ` \uC815\uC804\uC2DD \uB514\uC2A4\uD50C\uB808\uC774\uB294 \uC628\uB3C4\uAC00 \uADF9\uC2EC\uD558\uAC8C \uB192\uAC70\uB098 \uB0AE\uC744 \uB54C \uC131\uB2A5\uC774 \uB5A8\uC5B4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB0C9\uC7A5\uC2E4\uC5D0 \uC81C\uD488\uC744 \uC124\uCE58\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC10\uC555\uC2DD \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uB354 \uC801\uD569\uD569\uB2C8\uB2E4. STM32 \uC81C\uD488 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB294 \uC8FC\uBCC0 \uC628\uB3C4 \uBC94\uC704\uAC00 \uCD5C\uB300 85\uB3C4, 105\uB3C4 \uBC0F 125\uB3C4\uC778 \uB9C8\uC774\uD06C\uB85C\uD504\uB85C\uC138\uC11C\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC81C\uD488\uC774 \uBB3C\uC774\uB098 \uBA3C\uC9C0 \uAC19\uC740 \uC2E4\uC678 \uD658\uACBD \uC694\uC778\uC5D0 \uC798 \uACAC\uB38C\uC57C \uD558\uB294\uAC00?`), ` \uAE30\uC220\uC5D0 \uB530\uB77C \uD488\uC9C8\uACFC \uAE30\uB2A5\uC774 \uCC9C\uCC28\uB9CC\uBCC4\uC774\uACE0, \uBCF4\uD638 \uBAA9\uC801\uC73C\uB85C \uCEE4\uBC84 \uB80C\uC988\uB97C \uCD94\uAC00\uD558\uB294 \uAC83\uB3C4 \uD558\uB098\uC758 \uBC29\uBC95\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uD587\uBE5B\uC5D0 \uB9CE\uC774 \uB178\uCD9C\uB41C \uC0C1\uD0DC\uC5D0\uC11C \uAC00\uC2DC\uC131\uC774 \uC911\uC694\uD55C\uAC00?`), ` \uB514\uC2A4\uD50C\uB808\uC774\uB9C8\uB2E4 \uCE78\uB378\uB77C(candela)\uC640 \uB8E8\uBA58(lumen)\uC774 \uC11C\uB85C \uB2E4\uB974\uBA70, \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uB8E8\uBA58\uACFC \uCE78\uB378\uB77C\uAC00 \uB192\uC744\uC218\uB85D \uAC00\uB3C5\uC131\uC774 \uB354 \uB192\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uD2B9\uC218 \uCEE4\uBC84 \uB80C\uC988\uB97C \uCD94\uAC00\uD558\uC5EC \uAC00\uB3C5\uC131\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC73C\uBA70 \uD639\uC740 \uBC18\uC0AC \uAE30\uB2A5\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uB294 \uB610 \uB2E4\uB978 \uB514\uC2A4\uD50C\uB808\uC774 \uAE30\uC220\uC744 \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "frames-per-second"
  }), `FPS(Frames Per Second)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD6E8\uC52C \uB9E4\uB044\uB7FD\uAC8C \uBCF4\uC774\uB3C4\uB85D \uD574\uC900\uB2E4\uB294 \uC810\uC5D0\uC11C \uB354 \uB192\uACE0 \uC548\uC815\uC801\uC778 FPS \uC218\uCE58\uB97C \uC120\uD638\uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FPS\uAC00 \uBE44\uAD50\uC801 \uB35C \uC911\uC694\uD55C \uACBD\uC6B0\uB3C4 \uC788\uB294\uB370, \uB514\uC2A4\uD50C\uB808\uC774 \uC560\uB2C8\uBA54\uC774\uC158 \uC5C5\uB370\uC774\uD2B8\uAC00 \uCD5C\uC18C\uD55C\uC73C\uB85C \uC774\uB8E8\uC5B4\uC9C0\uB294 \uC815\uC801\uC778 GUI\uAC00 \uADF8\uB807\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0\uC5D0\uB294 \uC800\uAC00\uC758 \uD558\uB4DC\uC6E8\uC5B4\uAC00 \uB354 \uC801\uD569\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uD654\uB824\uD55C \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uB2E4\uC218 \uD3EC\uD568\uB41C \uBA4B\uC9C0\uACE0 \uBD80\uB4DC\uB7EC\uC6B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD55C\uB2E4\uB294 \uAC83\uC740 \uB300\uC0C1 \uC0AC\uC6A9\uC790\uCE35\uC5D0 \uB530\uB77C \uC5C4\uCCAD\uB09C \uC140\uB9C1 \uD3EC\uC778\uD2B8\uAC00 \uB420 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD558\uB4DC\uC6E8\uC5B4 \uC120\uD0DD\uACFC \uAD00\uB828\uB41C \uBAA8\uB4E0 \uD30C\uB77C\uBBF8\uD130\uB4E4\uC5D0\uC11C \uADF8\uB7EC\uD558\uB4EF \uCD5C\uC885 \uC0AC\uC6A9\uC790\uC758 \uAE30\uB300\uB97C \uCDA9\uC871\uD558\uACE0 \uD6CC\uB96D\uD55C \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uB294 \uAC83\uC774 \uAC00\uC7A5 \uC911\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `GUI\uC758 \uC804\uBC18\uC801\uC778 \uC131\uB2A5\uC5D0 \uB530\uB77C \uC2DC\uC2A4\uD15C \uC218\uC900\uC758 \uC131\uB2A5\uC774 \uACB0\uC815\uB418\uBA70, \uC774\uB294 MCU, RAM, \uD50C\uB798\uC2DC, \uB514\uC2A4\uD50C\uB808\uC774, \uC778\uD130\uD398\uC774\uC2A4 \uCC98\uB9AC\uB7C9 \uBC0F \uD558\uB4DC\uC6E8\uC5B4 \uAE30\uB2A5(\uC608: STM32 Chrom-ART)\uACFC \uAC19\uC740 \uAD6C\uC131\uC694\uC18C\uB97C \uC124\uBA85\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uADF8\uB9BC\uB4E4\uC740 \uC11C\uB85C \uB2E4\uB978 \uBA87 \uAC00\uC9C0 \uD30C\uB77C\uBBF8\uD130\uB4E4\uC774 \uBBF8\uCE58\uB294 \uC601\uD5A5\uC744 \uC77C\uBC18\uD654\uD55C \uAC83\uC785\uB2C8\uB2E4. \uC801\uD569\uD55C \uD558\uB4DC\uC6E8\uC5B4\uB97C \uC120\uD0DD\uD558\uB824\uBA74 \uC774\uB7EC\uD55C \uD30C\uB77C\uBBF8\uD130\uB4E4\uC744 \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4. \uB610\uD55C STM32 Chrom-ART\uAC00 MCU\uC758 \uBD80\uB2F4\uC744 \uB35C\uC5B4\uC8FC\uACE0 \uC774\uB85C \uC778\uD574 \uC5B4\uB5A4 \uACBD\uC6B0\uC5D0\uB294 \uB192\uC740 MCU \uC8FC\uD30C\uC218\uC758 \uC911\uC694\uC131\uC744 \uB0AE\uCDB0\uC900\uB2E4\uB294 \uC810\uB3C4 \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/preliminary-considerations/fps-figures.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uB2E4\uC591\uD55C \uD30C\uB77C\uBBF8\uD130\uAC00 FPS\uC5D0 \uBBF8\uCE58\uB294 \uC601\uD5A5"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);