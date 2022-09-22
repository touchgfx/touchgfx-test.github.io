"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6049],{

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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


/***/ }),

/***/ 37793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  viewBox: "0 0 12 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
}));
class Tip extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-tip)",
      header: "Tip",
      type: "tip",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Tip);


/***/ }),

/***/ 42019:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37793);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31217);
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
  id: "general-ui-component-performance",
  title: "\uC77C\uBC18 UI \uAD6C\uC131\uC694\uC18C \uC131\uB2A5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/ui-components/general-ui-component-performance",
  "id": "development/ui-development/ui-components/general-ui-component-performance",
  "title": "\uC77C\uBC18 UI \uAD6C\uC131\uC694\uC18C \uC131\uB2A5",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/general-ui-component-performance.mdx",
  "sourceDirName": "development/ui-development/ui-components",
  "slug": "/development/ui-development/ui-components/general-ui-component-performance",
  "permalink": "/4.20/ko/docs/development/ui-development/ui-components/general-ui-component-performance",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "general-ui-component-performance",
    "title": "\uC77C\uBC18 UI \uAD6C\uC131\uC694\uC18C \uC131\uB2A5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Video",
    "permalink": "/4.20/ko/docs/development/ui-development/ui-components/miscellaneous/video"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/ko/docs/category/scenarios-1"
  }
};
const assets = {};


const toc = [{
  value: "\uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30",
  id: "image-drawing",
  level: 2
}, {
  value: "\uB370\uC774\uD130 \uBCF5\uC0AC\uC5D0 \uB300\uD55C \uD558\uB4DC\uC6E8\uC5B4 \uC9C0\uC6D0",
  id: "hardware-support-for-data-copy",
  level: 3
}, {
  value: "\uC774\uBBF8\uC9C0 \uD615\uC2DD",
  id: "image-format",
  level: 3
}, {
  value: "\uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4",
  id: "access-to-the-image-data",
  level: 3
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4",
  id: "access-to-the-framebuffer",
  level: 3
}, {
  value: "\uC774\uBBF8\uC9C0 \uD574\uC0C1\uB3C4",
  id: "image-resolution",
  level: 3
}, {
  value: "\uD22C\uBA85\uB3C4",
  id: "transparency",
  level: 3
}, {
  value: "MCU\uC758 \uADF8\uB9AC\uAE30 \uC791\uC5C5",
  id: "mcu-drawing",
  level: 2
}, {
  value: "Canvas Widgets",
  id: "canvas-widgets",
  level: 2
}, {
  value: "\uD14D\uC2A4\uD2B8",
  id: "texts",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uB300\uBD80\uBD84\uC758 UI \uAD6C\uC131\uC694\uC18C\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC77C\uBC18 TouchGFX \uB80C\uB354\uB9C1 \uC5F0\uC0B0\uC758 \uC131\uB2A5\uC5D0 \uB300\uD574 \uC54C\uC544\uBD05\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "image-drawing"
  }), `\uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30\uB294 TouchGFX\uC5D0\uC11C \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uADF8\uB9AC\uAE30 \uC5F0\uC0B0 \uC911 \uD558\uB098\uC785\uB2C8\uB2E4. \uAC70\uC758 \uBAA8\uB4E0 UI \uAD6C\uC131\uC694\uC18C\uAC00 \uC774\uBBF8\uC9C0\uB97C \uC5B4\uB290 \uC815\uB3C4\uAE4C\uC9C0 1\uAC1C \uC774\uC0C1 \uADF8\uB824\uC57C \uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uD6A8\uC728\uC801\uC73C\uB85C \uBE60\uB974\uAC8C \uADF8\uB9B4 \uC218 \uC788\uB294 \uC131\uB2A5\uC774 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30\uC758 \uC131\uB2A5\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uC694\uC778\uC740 \uB9CE\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uAC70\uC758 \uBAA8\uB4E0 \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131\uC5D0\uC11C TouchGFX \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30\uB294 \uB2E4\uB978 \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC5D0 \uBE44\uD574 \uBE60\uB978 \uC5F0\uC0B0\uC73C\uB85C \uC54C\uB824\uC838 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "hardware-support-for-data-copy"
  }), `\uB370\uC774\uD130 \uBCF5\uC0AC\uC5D0 \uB300\uD55C \uD558\uB4DC\uC6E8\uC5B4 \uC9C0\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uBE44\uC555\uCD95 \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uB97C \uC120\uD0DD\uB41C \uC774\uBBF8\uC9C0 \uD615\uC2DD(\uC608: RGB565, L8, ARGB8888)\uC73C\uB85C \uC800\uC7A5\uD569\uB2C8\uB2E4. \uBE44\uC555\uCD95 \uD615\uC2DD\uC740 \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 TouchGFX\uAC00 \uC774\uBBF8\uC9C0\uB97C \uC9C1\uC811 \uC0AC\uC6A9\uD574 \uC218\uC815 \uC5C6\uC774 \uD504\uB808\uC784\uBC84\uD37C\uB85C \uC804\uC1A1\uD560 \uC218 \uC788\uB2E4\uB294 \uC774\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4. MCU\uC5D0 DMA\uAC00 \uC788\uC73C\uBA74 \uC804\uC1A1 \uC18D\uB3C4\uAC00 \uBE68\uB77C\uC9C0\uACE0 MCU \uBD80\uD558\uAC00 \uCD5C\uC18C\uD654\uB418\uBBC0\uB85C DMA\uB97C \uBA54\uBAA8\uB9AC \uBCF5\uC0AC\uC5D0 \uD65C\uC6A9\uD560 \uC218 \uC788\uACE0, \uB610 \uD65C\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E8, \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC5D0 \uC54C\uD30C \uCC44\uB110\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uB2E4\uBA74 \uC774\uB7EC\uD55C \uBC29\uC2DD\uB3C4 \uC81C\uC57D\uC774 \uB530\uB985\uB2C8\uB2E4. \uC774\uB54C\uB294 \uC815\uC0C1\uC801\uC778 DMA \uC804\uC1A1\uC744 \uC774\uC6A9\uD560 \uC218 \uC5C6\uB294\uB370, MCU\uAC00 \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uC640 \uD504\uB808\uC784\uBC84\uD37C \uD53D\uC140\uC744 \uD63C\uD569\uD558\uB294 \uD53D\uC140 \uBE14\uB80C\uB529\uC744 \uC218\uD589\uD574\uC57C \uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC Chrom-ART / DMA2D\uC640 \uAC19\uC740 \uADF8\uB798\uD53D \uAC00\uC18D \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD558\uB294 STM32\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uBA74 \uC774\uB7EC\uD55C \uC720\uD615\uC758 \uC774\uBBF8\uC9C0\uC5D0\uC11C\uB3C4 DMA\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. DMA\uAC00 \uB2E8\uC21C\uD788 \uB370\uC774\uD130\uB97C \uBCF5\uC0AC\uD558\uB294 \uB370 \uADF8\uCE58\uC9C0 \uC54A\uACE0 \uBCF5\uC0AC\uC640 \uBE14\uB80C\uB529 \uC5F0\uC0B0\uC744 \uD55C \uBC88\uC5D0 \uCC98\uB9AC\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC18D\uB3C4\uB97C \uAC1C\uC120\uD558\uACE0 MCU \uBD80\uD558\uB97C \uD06C\uAC8C \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "image-format"
  }), `\uC774\uBBF8\uC9C0 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0 \uD615\uC2DD\uC740 \uD558\uB4DC\uC6E8\uC5B4 \uC9C0\uC6D0\uC5D0 \uB530\uB77C \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30 \uC131\uB2A5\uC5D0\uB3C4 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4. \uB300\uCCB4\uB85C, \uC804\uC1A1\uD560 \uB370\uC774\uD130\uC758 \uC591\uC774 \uC801\uC744\uC218\uB85D \uBE60\uB974\uAC8C \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBE44\uC2B7\uD55C RGB888\uACFC \uBE44\uAD50\uD588\uC744 \uB54C RGB565 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC758 \uC804\uC1A1 \uC18D\uB3C4\uAC00 \uB354 \uBE60\uB978\uB370, \uC774\uB294 RGB565 \uC774\uBBF8\uC9C0\uAC00 RGB888 \uC774\uBBF8\uC9C0 \uD06C\uAE30\uC758 2/3\uC5D0 \uBD88\uACFC\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "access-to-the-image-data"
  }), `\uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0\uB97C \uB80C\uB354\uB9C1\uD560 \uB54C\uB9C8\uB2E4 \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uC5D0 \uC561\uC138\uC2A4\uD558\uAC8C \uB418\uBBC0\uB85C \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uC5D0 \uC561\uC138\uC2A4\uD558\uB294 \uB370 \uC18C\uC694\uB418\uB294 \uC2DC\uAC04\uC774 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4.  TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uB294 \uC561\uC138\uC2A4 \uC18C\uC694 \uC2DC\uAC04\uC5D0 \uB530\uB77C \uAC01\uAE30 \uB2E4\uB978 \uD558\uB4DC\uC6E8\uC5B4 \uC704\uCE58\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC774\uBBF8\uC9C0 \uB370\uC774\uD130 \uC704\uCE58`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC124\uBA85`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `\uC678\uC7A5 \uD50C\uB798\uC2DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uC7A5 \uD50C\uB798\uC2DC\uB294 \uAC00\uACA9\uC774 \uC800\uB834\uD558\uACE0 \uD06C\uAE30\uAC00 \uC791\uB2E4\uB294 \uC774\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uC6A9\uB7C9\uC778 \uACBD\uC6B0\uAC00 \uB9CE\uAE30 \uB54C\uBB38\uC5D0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC774\uBBF8\uC9C0\uB97C \uB9CE\uC774 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBB3C\uB860 \uC561\uC138\uC2A4 \uC2DC\uAC04\uC5D0\uB294 \uD070 \uCC28\uC774\uAC00 \uC788\uC9C0\uB9CC QSPI\uB098 \uBE44\uC2B7\uD55C \uB300\uC548\uC744 \uC120\uD0DD\uD55C\uB2E4\uBA74 \uCC98\uB9AC\uB7C9\uC744 \uB192\uC5EC \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30 \uC131\uB2A5\uC744 \uD06C\uAC8C \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `\uC678\uC7A5 RAM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uACBD\uC6B0\uC5D0 \uB530\uB77C \uC774\uBBF8\uC9C0\uB97C \uC678\uC7A5 RAM\uC5D0 \uCE90\uC2F1\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB80C\uB354\uB9C1\uC5D0 \uBC14\uB85C \uC0AC\uC6A9\uD560 \uC218\uB294 \uC5C6\uC9C0\uB9CC \uC5B4\uCA54 \uC218 \uC5C6\uC774 \uBE44 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uD50C\uB798\uC2DC(NAND, EMMC \uB4F1)\uB97C \uC0AC\uC6A9\uD574\uC57C \uD560 \uB54C\uAC00 \uADF8\uB807\uC2B5\uB2C8\uB2E4. \uC774\uB54C\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30 \uC131\uB2A5\uC744 \uC704\uD574 \uC678\uC7A5 RAM\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `\uB0B4\uC7A5 \uD50C\uB798\uC2DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC800\uC7A5 \uACF5\uAC04\uC774 \uB9E4\uC6B0 \uD55C\uC815\uC801\uC774\uC9C0\uB9CC \uC774\uBBF8\uC9C0 \uC77C\uBD80 \uB610\uB294 \uC804\uBD80\uB97C \uB0B4\uC7A5 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC561\uC138\uC2A4\uAC00 \uB9E4\uC6B0 \uBE60\uB974\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uC774\uBBF8\uC9C0\uAC00 \uC788\uC9C0\uB9CC \uC131\uB2A5\uC774 \uC911\uC694\uD558\uB2E4\uBA74(\uC608: Texture Mapper\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uACBD\uC6B0) \uAC00\uAE09\uC801 \uB0B4\uC7A5 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `\uB0B4\uC7A5 RAM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB9E4\uC6B0 \uB4DC\uBB3C\uC9C0\uB9CC \uB0B4\uC7A5 RAM\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uB80C\uB354\uB9C1\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uC800\uC7A5 \uACF5\uAC04\uC740 \uB9E4\uC6B0 \uD55C\uC815\uC801\uC774\uC9C0\uB9CC \uC561\uC138\uC2A4 \uC18D\uB3C4\uAC00 \uB9E4\uC6B0 \uBE60\uB974\uAE30 \uB54C\uBB38\uC5D0 \uC5EC\uAE30\uC5D0 \uC800\uC7A5\uB418\uB294 \uC774\uBBF8\uC9C0(TouchGFX \uC774\uBBF8\uC9C0 \uCE90\uC2F1 \uAE30\uB2A5 \uC0AC\uC6A9)\uB294 \uC544\uC8FC \uBE60\uB974\uAC8C \uB80C\uB354\uB9C1 \uB429\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "access-to-the-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0 \uB80C\uB354\uB9C1\uC740 \uD56D\uC0C1 \uD504\uB808\uC784\uBC84\uD37C\uC758 \uC5C5\uB370\uC774\uD2B8\uB85C \uC774\uC5B4\uC9D1\uB2C8\uB2E4. \uC774\uBBF8\uC9C0\uC5D0 \uC54C\uD30C \uCC44\uB110\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA74 \uB370\uC774\uD130 \uC791\uC131\uC5D0\uC11C \uADF8\uCE58\uC9C0 \uC54A\uACE0 \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC640\uC11C \uBE14\uB80C\uB529\uAE4C\uC9C0 \uC2E4\uD589\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB192\uC740 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30 \uC131\uB2A5\uC744 \uB2EC\uC131\uD558\uB824\uBA74 \uD504\uB808\uC784\uBC84\uD37C \uC800\uC7A5\uC5D0 \uC0AC\uC6A9\uB418\uB294 RAM\uC5D0 \uB300\uD55C \uC77D\uAE30/\uC4F0\uAE30 \uC561\uC138\uC2A4 \uC2DC\uAC04\uC774 \uAD00\uAC74\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "image-resolution"
  }), `\uC774\uBBF8\uC9C0 \uD574\uC0C1\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC804\uC1A1\uD560 \uB370\uC774\uD130\uB294 \uC774\uBBF8\uC9C0\uC758 \uD574\uC0C1\uB3C4\uC5D0 \uBE44\uB840\uD558\uBBC0\uB85C \uC774\uBBF8\uC9C0 \uD574\uC0C1\uB3C4\uB294 \uC790\uC5F0\uD788 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transparency"
  }), `\uD22C\uBA85\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0 \uBD88\uD22C\uBA85\uB3C4\uB294 \uC774\uBBF8\uC9C0 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4. \uC54C\uD30C \uAC12\uC774 \uC788\uB294 \uC774\uBBF8\uC9C0\uB294 \uD504\uB808\uC784\uBC84\uD37C\uC640 \uBE14\uB80C\uB529\uB418\uC5B4\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0 \uC54C\uD30C \uAC12\uC774 \uC5C6\uB294 \uC774\uBBF8\uC9C0\uBCF4\uB2E4 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uAE41\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBE14\uB80C\uB529 \uC5F0\uC0B0\uC744 \uC704\uD574 \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC640\uC57C \uD558\uB294 \uBC18\uBA74, \uBD88\uD22C\uBA85 \uC774\uBBF8\uC9C0\uC77C \uB54C\uB294 \uB2E8\uC21C\uD788 \uB370\uC774\uD130\uB97C \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uB36E\uC5B4\uC4F0\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4. \uC774\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uAE30\uB2A5\uC774 \uC9C0\uC6D0\uB418\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC785\uB2C8\uB2E4. \uB2E4\uB9CC, \uBD88\uD22C\uBA85 \uC774\uBBF8\uC9C0\uC640 \uBC18\uD22C\uBA85 \uC774\uBBF8\uC9C0\uC758 \uBE44\uC728\uC740 \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131\uC5D0 \uB530\uB77C \uB2E4\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mcu-drawing"
  }), `MCU\uC758 \uADF8\uB9AC\uAE30 \uC791\uC5C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uC704\uC82F\uC740 \uC9C1\uC811 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC870\uC791\uD558\uB294 \uB370\uC5D0 \uC758\uC874\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBC29\uC2DD\uC5D0\uC11C\uB294 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC758 \uAC01 \uD53D\uC140\uB9C8\uB2E4 \uACC4\uC0B0\uC744 1\uD68C \uC774\uC0C1 \uC218\uD589\uD558\uC5EC \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD53D\uC140\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uC5F0\uC0B0 \uC18D\uB3C4\uAC00 \uB2E4\uC18C \uB290\uB9B0\uB370, \uAC01 \uD53D\uC140\uB9C8\uB2E4 \uACC4\uC0B0\uC774 \uBCF5\uC7A1\uD55C \uACBD\uC6B0\uC5D0\uB294 \uB354\uC6B1 \uADF8\uB807\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\uC758 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC5D0\uC11C \uACC4\uC0B0 \uC791\uC5C5\uC774 \uB9CE\uB2E4\uBA74 MCU \uCC98\uB9AC \uC131\uB2A5\uC774 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4(\uB0B4\uC7A5 \uB610\uB294 \uC678\uC7A5 RAM\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4) \uC5ED\uC2DC \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294\uB370, \uC774\uB294 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC5D0\uC11C \uAC01 \uD53D\uC140\uB9C8\uB2E4 \uD504\uB808\uC784\uBC84\uD37C \uB370\uC774\uD130\uB97C \uC791\uC131\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4(\uD310\uB3C5\uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC74C).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "canvas-widgets"
  }), `Canvas Widgets`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/canvas-widgets"
  }), `\uCE94\uBC84\uC2A4 \uC704\uC82F`), `\uC740 \uD2B9\uC218\uD55C \uC720\uD615\uC758 TouchGFX \uC704\uC82F\uC73C\uB85C, \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1 \uCC98\uB9AC\uB41C \uAE30\uD558 \uD615\uC0C1\uC744 \uB4DC\uB85C\uC789\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC774\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uC0C1\uB2F9\uD788 \uBCF5\uC7A1\uD558\uAE30 \uB54C\uBB38\uC5D0 \uB80C\uB354\uB9C1 \uC18D\uB3C4\uAC00 \uB9E4\uC6B0 \uB290\uB824\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC740 \uAE30\uD558 \uD615\uC0C1\uC5D0\uC11C \uBB34\uD6A8\uD654 \uC601\uC5ED\uC758 \uD06C\uAE30\uC5D0 \uBE44\uB840\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4 \uC704\uC82F\uC5D0\uB294 \uC911\uAC04 \uACC4\uC0B0 \uACB0\uACFC\uB97C \uC800\uC7A5\uD558\uB294 \uBA54\uBAA8\uB9AC \uBE14\uB85D\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uD06C\uAE30\uC640 \uC131\uB2A5\uC774 \uBBF8\uCE58\uB294 \uC601\uD5A5\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/canvas-widgets"
  }), `\uCE94\uBC84\uC2A4 \uC704\uC82F \uC139\uC158`), `\uC5D0 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uB300\uBD80\uBD84\uC758 \uD45C\uC900 TouchGFX \uCE94\uBC84\uC2A4 \uC704\uC82F(Circle \uB4F1)\uC5D0\uB294 \uC704\uC82F\uC5D0\uC11C \uBC14\uB010 \uC601\uC5ED\uB9CC \uBB34\uD6A8\uD654\uD558\uB294 \uC5C5\uB370\uC774\uD2B8 \uBA54\uC18C\uB4DC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C Circle\uACFC \uAC19\uC740 \uC704\uC82F\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uACBD\uC6B0 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "circle::updateArc(...)"), "\uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC804\uCCB4 \uC601\uC5ED\uC774 \uC544\uB2CC \uBC14\uB010 \uC601\uC5ED\uB9CC \uBB34\uD6A8\uD654\uB429\uB2C8\uB2E4. \uCD5C\uC801\uC758 \uC131\uB2A5\uC744 \uC6D0\uD55C\uB2E4\uBA74 \uBC18\uB4DC\uC2DC \uC774\uB7EC\uD55C \uC720\uD615\uC758 \uC5F0\uC0B0\uC744 \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "texts"
  }), `\uD14D\uC2A4\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1\uC740 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30\uC758 \uC601\uD5A5\uC744 \uB9CE\uC774 \uBC1B\uB294\uB370, \uADF8 \uC774\uC720\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/texts-and-fonts"
  }), `\uD14D\uC2A4\uD2B8 \uC139\uC158`), `\uC5D0 \uC124\uBA85\uB41C \uAC83\uCC98\uB7FC, \uC0AC\uC6A9\uB41C \uBB38\uC790\uAC00 \uC804\uBD80 \uC774\uBBF8\uC9C0\uB85C \uBCC0\uD658\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.  \uC774\uBBF8\uC9C0\uB294 A4 \uD615\uC2DD\uC73C\uB85C, \uAE30\uBCF8\uC801\uC73C\uB85C \uAC01 \uC774\uBBF8\uC9C0 \uD53D\uC140\uB9C8\uB2E4 4\uBE44\uD2B8 \uC54C\uD30C \uAC12\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uC774 \uD328\uD134\uC5D0 \uC0C9\uC0C1\uC744 \uC801\uC6A9\uD558\uBA74 \uBB38\uC790 \uC774\uBBF8\uC9C0\uAC00 \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1 \uCC98\uB9AC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1\uC740 \uAC01 \uBB38\uC790\uB9C8\uB2E4 \uD558\uB098\uC529 \uC2E4\uD589\uB418\uB294 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC758 \uC9D1\uD569\uC774\uBBC0\uB85C, Chrom-ART / DMA2D\uC640 \uAC19\uC740 \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD55C \uC131\uB2A5 \uAC1C\uC120\uC744 \uD3EC\uD568\uD574 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30\uC5D0 \uB300\uD55C \uC131\uB2A5 \uD2B9\uC131\uC774 \uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1\uC5D0\uB3C4 \uC801\uC6A9\uB429\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);