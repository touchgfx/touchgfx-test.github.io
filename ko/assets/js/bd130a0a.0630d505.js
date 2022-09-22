"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7892],{

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

/***/ 22425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class CodeHeader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "code-header"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, this.props.children)));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (CodeHeader);


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

/***/ 28868:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
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
  id: "touchgfx-on-lowcost-hardware",
  title: "\uC800\uAC00 \uD558\uB4DC\uC6E8\uC5B4 \uAE30\uBC18\uC758 TouchGFX"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/touchgfx-on-lowcost-hardware",
  "id": "development/scenarios/touchgfx-on-lowcost-hardware",
  "title": "\uC800\uAC00 \uD558\uB4DC\uC6E8\uC5B4 \uAE30\uBC18\uC758 TouchGFX",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-lowcost-hardware.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/touchgfx-on-lowcost-hardware",
  "permalink": "/4.20/ko/docs/development/scenarios/touchgfx-on-lowcost-hardware",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-on-lowcost-hardware",
    "title": "\uC800\uAC00 \uD558\uB4DC\uC6E8\uC5B4 \uAE30\uBC18\uC758 TouchGFX"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/ko/docs/category/scenarios-2"
  },
  "next": {
    "title": "TouchGFX on NeoChrom",
    "permalink": "/4.20/ko/docs/development/scenarios/touchgfx-on-gpu2d"
  }
};
const assets = {};



const toc = [{
  value: "\uD558\uB4DC\uC6E8\uC5B4 \uAC1C\uC694",
  id: "hardware-overview",
  level: 2
}, {
  value: "GPIO \uD560\uB2F9",
  id: "gpio-allocation",
  level: 3
}, {
  value: "\uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791",
  id: "starting-a-project",
  level: 3
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774 \uC5C5\uB370\uC774\uD2B8",
  id: "display-updates",
  level: 2
}, {
  value: "\uADF8\uB9AC\uAE30 \uC18D\uB3C4",
  id: "drawing-speed",
  level: 3
}, {
  value: "\uC9C1\uB82C \uD50C\uB798\uC2DC\uB97C \uD0D1\uC7AC\uD55C TouchGFX\uC758 \uC81C\uD55C \uC0AC\uD56D",
  id: "touchgfx-limitations-with-serial-flash",
  level: 2
}, {
  value: "\uD14D\uC2A4\uCC98 \uB9E4\uD37C",
  id: "texture-mapper",
  level: 3
}, {
  value: "\uBE44\uD2B8\uB9F5 \uD398\uC778\uD130",
  id: "bitmap-painter",
  level: 3
}, {
  value: "L8 \uD314\uB808\uD2B8",
  id: "l8-palette",
  level: 3
}, {
  value: "\uB4DC\uB77C\uC774\uBC84",
  id: "drivers",
  level: 2
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774",
  id: "display",
  level: 3
}, {
  value: "Initialization",
  id: "initialization",
  level: 4
}, {
  value: "TE(Tearing Effect)",
  id: "tearing-effect",
  level: 4
}, {
  value: "\uC678\uBD80 \uD50C\uB798\uC2DC",
  id: "external-flash",
  level: 3
}, {
  value: "\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8",
  id: "linker-script",
  level: 4
}, {
  value: "Flash Loader",
  id: "flash-loader",
  level: 4
}, {
  value: "\uBC84\uD2BC",
  id: "buttons",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This section discusses how to use TouchGFX on low cost hardware with limited amount of RAM and flash, no acceleration and "slow" SPI connection to external flash and display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD574\uB2F9 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uB300\uD574 \uCD5C\uACE0\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC791\uC131\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uBA87 \uAC00\uC9C0 \uC870\uC5B8\uC744 \uC81C\uACF5\uD558\uACE0\uC790 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Throughout this section we will use the TouchGFX board setup for the STM32G071 Nucleo board with the X-Nucleo-GFX01M1 expansion board as example hardware. The expansion board features a 16-bit display and a serial flash.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",
    mdxType: "Figure"
  }, "X-Nucleo-GFX01M1 \uD655\uC7A5 \uBCF4\uB4DC\uAC00 \uD3EC\uD568\uB41C Nucleo-G071RB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hardware-overview"
  }), `\uD558\uB4DC\uC6E8\uC5B4 \uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD0A4\uD2B8\uC758 \uD558\uB4DC\uC6E8\uC5B4 \uC124\uC815\uC740 STM32G071 MCU, SPI NOR \uD50C\uB798\uC2DC, SPI \uB514\uC2A4\uD50C\uB808\uC774 \uBC0F \uC870\uC774\uC2A4\uD2F1 \uBC84\uD2BC\uC73C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uBD80\uD488`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\xA0`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `STM32G071RB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `32KB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `128KB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `Displaytech DT022CTFT`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uD574\uC0C1\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `240 x 320`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Display format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `16-bit RGB565`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `ILI9341V`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uC5F0\uACB0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `SPI`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uC5F0\uACB0 \uC18D\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `32MHz`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `NOR \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `Macronix MX25L6433F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `NOR \uD50C\uB798\uC2DC \uD06C\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `64MB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `NOR \uD50C\uB798\uC2DC \uC5F0\uACB0 \uC18D\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `32MHz`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uB294 SPI1 \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0 \uC5F0\uACB0\uB418\uACE0, \uD50C\uB798\uC2DC\uB294 SPI2 \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C MCU\uB294 \uB370\uC774\uD130\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD558\uB294 \uB3D9\uC548 \uD50C\uB798\uC2DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-gfx01m1-architecture.png",
    width: "500px",
    mdxType: "Figure"
  }, "X-Nucleo-GFX01M1 \uC544\uD0A4\uD14D\uCC98\uB97C \uAC16\uCD98 Nucleo-G071RB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "gpio-allocation"
  }), `GPIO \uD560\uB2F9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC2E0\uD638`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `GPIO \uD540`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 CS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 DCX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 SCK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PA5`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 MOSI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PA7`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 TE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PA0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD50C\uB798\uC2DC CS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD50C\uB798\uC2DC SCK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PB13`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD50C\uB798\uC2DC MOSI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PC3`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD50C\uB798\uC2DC MISO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PC2`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uD45C\uC5D0\uB294 \uD50C\uB798\uC2DC\uC640 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C GPIO \uD560\uB2F9 \uC2E0\uD638 \uBAA9\uB85D\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC2E0\uD638\uB294 \uC624\uC2E4\uB85C\uC2A4\uCF54\uD504\uB098 \uB85C\uC9C1 \uBD84\uC11D\uAE30\uB97C \uD1B5\uD574 \uBAA8\uB2C8\uD130\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. This is very useful during debugging of e.g. performance problems.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "starting-a-project"
  }), `\uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Desinger\uC5D0\uC11C STM32G071RB Nucleo \uD3C9\uAC00 \uD0A4\uD2B8\uB97C \uC704\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uC190\uC27D\uAC8C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. "Create New" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uACE0 STM32G071 Nucleo\uB97C \uAC80\uC0C9\uD569\uB2C8\uB2E4.  \uC774\uB7EC\uD55C \uBCF4\uB4DC \uC124\uC815\uC740 X-Nucleo-GFX01M1 \uB514\uC2A4\uD50C\uB808\uC774 \uC2E4\uB4DC\uAC00 \uC788\uB294 Nucleo-G071RB \uD0A4\uD2B8\uC6A9\uC73C\uB85C \uD2B9\uBCC4\uD788 \uAC1C\uBC1C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-start-new-project-4.17.png",
    mdxType: "Figure"
  }, "Nucleo-G071RB\uB97C \uC704\uD55C \uC0C8 \uD504\uB85C\uC81D\uD2B8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uBCF4\uB4DC \uC124\uC815\uC740 NOR \uD50C\uB798\uC2DC, \uB514\uC2A4\uD50C\uB808\uC774 \uBC0F \uBC84\uD2BC\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. The display can be used both in portrait and horizontal mode.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uBC29\uD5A5\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Config -> Display`), ` \uC139\uC158\uC758 TouchGFX Designer\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/portrait-4.17.png",
    mdxType: "Figure"
  }, "\uB514\uC2A4\uD50C\uB808\uC774 \uBC29\uD5A5\uC73C\uB85C \uC138\uB85C \uB610\uB294 \uAC00\uB85C \uC120\uD0DD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The display on the X-Nucleo-GFX01M1 shield is natively portrait oriented (higher than wide), but it can easily be used with horizontal orientation.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-updates"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uC5C5\uB370\uC774\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C \uC5B8\uAE09\uD588\uB4EF\uC774 \uB514\uC2A4\uD50C\uB808\uC774 \uD574\uC0C1\uB3C4\uB294 240 x 320 \uD53D\uC140\uB85C, \uCD1D 76.800 \uD53D\uC140 \uB610\uB294 153.600 \uBC14\uC774\uD2B8\uC785\uB2C8\uB2E4. MCU\uC640 \uB514\uC2A4\uD50C\uB808\uC774 \uAC04\uC758 SPI \uC5F0\uACB0\uC740 32MHz\uC758 \uC18D\uB3C4\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCD08\uB2F9 4MB \uB610\uB294 \uCD08\uB2F9 2M \uD53D\uC140\uC744 \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uC758 \uD654\uBA74 \uC7AC\uC0DD\uB960\uC740 76.1Hz\uC774\uACE0, \uD504\uB808\uC784 \uC2DC\uAC04\uC740 13.14ms\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/display-te.png",
    mdxType: "Figure"
  }, "\uB514\uC2A4\uD50C\uB808\uC774\uC758 TE(Tearing Effect) \uC2E0\uD638"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB294 \uB2E4\uC74C \uD504\uB808\uC784\uC5D0\uC11C \uCD5C\uB300 \uB370\uC774\uD130 \uC804\uC1A1 \uC18D\uB3C4\uAC00 13ms\uAC00 \uB428\uC744 \uC758\uBBF8\uC785\uB2C8\uB2E4. In that time we can send 2.000.000 pixels/s / 76 fps = 26.280 pixels / frame or 34% of a full screen. In practice we cannot sustain that transfer speed on the SPI bus because of the protocol overhead so we cannot expect to send more than approximately 30% of a full frame.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD574\uB2F9 \uD53D\uC140 \uC218\uBCF4\uB2E4 \uB9CE\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD558\uB4DC\uC6E8\uC5B4\uAC00 \uD504\uB808\uC784 \uC2DC\uAC04 \uB0B4\uC5D0 \uC804\uC1A1\uC744 \uC644\uB8CC\uD560 \uC218 \uC5C6\uAC8C \uB429\uB2C8\uB2E4. \uACB0\uACFC\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uAC00 \uC644\uB8CC\uB418\uAE30 \uC804\uC5D0 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC5C5\uB370\uC774\uD2B8\uB41C \uD504\uB808\uC784\uC774 \uD45C\uC2DC\uB418\uAE30 \uC2DC\uC791\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774\uC804 \uD504\uB808\uC784\uACFC \uC0C8 \uD504\uB808\uC784\uC774 \uD63C\uD569\uB418\uC5B4 \uD45C\uC2DC\uB418\uB294 \uACBD\uC6B0\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uD604\uC0C1\uC740 \uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uB530\uB77C \uC0AC\uC6A9\uC790\uC758 \uB208\uC5D0 \uB744\uC9C0 \uC54A\uC744 \uB54C\uB3C4 \uC788\uACE0, \uC6A9\uB0A9\uD560 \uC218 \uC5C6\uC744 \uB9CC\uD07C \uC790\uC8FC \uB098\uD0C0\uB0A0 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uC5C5\uB370\uC774\uD2B8 \uC218\uC900\uC744 30% \uBBF8\uB9CC\uC73C\uB85C \uC720\uC9C0\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74  \uD504\uB808\uC784\uC744 \uB2E8\uACC4\uBCC4\uB85C, \uC810\uC9C4\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uACBD\uC6B0, \uBCF4\uD1B5\uC740 \uD56D\uBAA9\uC744 \uC774\uB3D9\uC2DC\uD0A4\uB294 \uAC83\uBCF4\uB2E4\uB294 \uD654\uBA74\uC5D0\uC11C \uD56D\uBAA9\uC744 \uD655\uC7A5\uD558\uB294 \uAC83\uC774 \uB354 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/star.png",
    width: "400",
    mdxType: "Figure"
  }, "\uB514\uC2A4\uD50C\uB808\uC774\uC758 TE(Tearing Effect) \uC2E0\uD638"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCC4 \uBAA8\uC591\uC774 \uC624\uB978\uCABD\uC73C\uB85C \uC774\uB3D9\uD560 \uB54C\uB294 \uBCC4 \uBAA8\uC591\uC5D0 \uAC00\uB824\uC838 \uC788\uB358 \uBAA8\uB4E0 \uD53D\uC140\uC744 \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4. \uBCC4 \uBAA8\uC591\uC744 \uD655\uC7A5\uD560 \uB54C\uB294 \uC0C8 \uD53D\uC140\uB9CC \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uC804 \uD504\uB808\uC784\uC5D0\uC11C \uC5C5\uB370\uC774\uD2B8\uB41C \uD53D\uC140\uC740 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "drawing-speed"
  }), `\uADF8\uB9AC\uAE30 \uC18D\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uC804\uC1A1\uC740 \uCD5C\uB300 32MHz\uC758 \uC18D\uB3C4\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C1\uB82C \uD50C\uB798\uC2DC\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uC804\uC1A1\uACFC \uB3D9\uC77C\uD55C \uC18D\uB3C4\uB85C \uC2E4\uD589\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774\uB294 \uC9C1\uB82C \uD50C\uB798\uC2DC\uAC00 \uCD5C\uB300 \uC18D\uB3C4\uB85C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uBE44\uD2B8\uB97C \uACF5\uAE09\uD560 \uB9CC\uD07C \uCDA9\uBD84\uD788 \uBE60\uB974\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E8, \uD50C\uB798\uC2DC\uC5D0 \uC788\uB294 \uC774\uBBF8\uC9C0\uC758 \uD53D\uC140 \uD615\uC2DD\uC774 RGB565\uC778 \uACBD\uC6B0\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. In this case is two bytes read from the flash equal to 1 pixel, which is also two bytes on the display. If the pixel format in the flash is ARGB8888, we need to read double the amount of data from the flash to produce a pixel on the display, and the serial flash will not be able to keep up with the display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When this happens we are not sending data to the display continuously and it will not be possible to update all 30% of the display in a frame. \uC774\uBBF8\uC9C0\uB97C \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB85C \uC62E\uAE30\uACE0 \uD53D\uC140 \uD615\uC2DD\uC744 \uBCC0\uACBD\uD558\uB294 \uAC83\uC740 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uB978 \uC704\uC82F\uC740 \uD50C\uB798\uC2DC\uC758 \uC18D\uB3C4\uC5D0 \uAD6C\uC560\uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74  \uC720\uC0C9\uC758 \uC0AC\uAC01\uD615\uC744 \uADF8\uB9AC\uB294 Box Widget\uC774 \uADF8\uB807\uC2B5\uB2C8\uB2E4. \uBB3C\uB860 \uC774 \uC704\uC82F\uC740 \uC18D\uB3C4\uAC00 \uB9E4\uC6B0 \uBE60\uB974\uBA70 \uB514\uC2A4\uD50C\uB808\uC774 \uC804\uC1A1\uBCF4\uB2E4 \uD6E8\uC52C \uBE60\uB985\uB2C8\uB2E4. \uC120\uC774\uB098 \uC6D0\uACFC \uAC19\uC740 \uB2E4\uB978 \uC704\uC82F\uB4E4\uC740 CPU \uB9AC\uC18C\uC2A4\uB97C \uD6E8\uC52C \uB354 \uB9CE\uC774 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uB4E4 \uC704\uC82F\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1 \uB418\uB294 \uC18D\uB3C4\uB85C \uD53D\uC140\uC744 \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC704\uC82F\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB9E4 \uD504\uB808\uC784\uB9C8\uB2E4 \uB514\uC2A4\uD50C\uB808\uC774\uC758 30%\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uAC83\uC774 \uBD88\uAC00\uB2A5\uD574\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD53D\uC140 \uB80C\uB354\uB9C1\uC758 \uBCF5\uC7A1\uC131\uC5D0 \uB300\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../basic-concepts/performance#the-complexity-of-rendering-the-pixels"
  }), `\uC5EC\uAE30`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-limitations-with-serial-flash"
  }), `\uC9C1\uB82C \uD50C\uB798\uC2DC\uB97C \uD0D1\uC7AC\uD55C TouchGFX\uC758 \uC81C\uD55C \uC0AC\uD56D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C1\uB82C \uD50C\uB798\uC2DC\uB97C \uD0D1\uC7AC\uD55C STM32G0 \uAE30\uBC18\uC758 TouchGFX\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD504\uB85C\uADF8\uB798\uBA38\uAC00 \uBC18\uB4DC\uC2DC \uC219\uC9C0\uD574\uC57C \uD560 \uBA87 \uAC00\uC9C0 \uC81C\uD55C \uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "texture-mapper"
  }), `\uD14D\uC2A4\uCC98 \uB9E4\uD37C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uCC98 \uB9E4\uD37C \uC704\uC82F(Texture Mapper, Animation Texture Mapper, Scalable Image)\uC740 \uC678\uBD80 SPI \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uB97C \uADF8\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC9C1\uB82C \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uB97C \uD68C\uC804\uD560 \uB54C \uD5C8\uC6A9 \uAC00\uB2A5\uD55C \uC131\uB2A5\uC744 \uC5BB\uC744 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uCC98 \uB9E4\uD37C\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uC774\uBBF8\uC9C0\uB97C \uBC18\uB4DC\uC2DC \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB098 RAM\uC5D0 \uC800\uC7A5\uD574\uC57C \uD569\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uAD6C\uC131\uC744 \uC218\uC815\uD558\uB294 \uBC29\uBC95\uC73C\uB85C \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC774\uBBF8\uC9C0\uB97C \uC27D\uAC8C \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Images \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. \uCC3D\uC758 \uC624\uB978\uCABD\uC5D0\uC11C "Section" \uC18D\uC131\uC744 "IntFlashSection"\uC73C\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/image-internal-4.17.png",
    mdxType: "Figure"
  }, "\uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC774\uBBF8\uC9C0 \uC800\uC7A5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uCC98 \uB9E4\uD37C \uCF54\uB4DC\uB294 \uD06C\uAE30\uAC00 \uB108\uBB34 \uCEE4\uC11C \uBAA8\uB4E0 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD3EC\uD568\uC2DC\uD0A4\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C STM32G0 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC989, STM32G0 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uD14D\uC2A4\uCC98 \uB9E4\uD37C\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uBA3C\uC800 \uD14D\uC2A4\uCC98 \uB9E4\uD37C\uB97C \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Config" \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC "Framework Features"\uB97C \uC120\uD0DD\uD558\uACE0 \uD574\uB2F9 \uD14D\uC2A4\uCC98 \uB9E4\uD37C \uB610\uB294 \uD14D\uC2A4\uCC98 \uB9E4\uD37C \uADF8\uB8F9\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/enabling-texture-mapper-4.17.png",
    mdxType: "Figure"
  }, "\uD2B9\uC815 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC5D0 \uB300\uD574 \uD14D\uC2A4\uCC98 \uB9E4\uD37C \uD65C\uC131\uD654"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  }), `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC`), `\uB97C \uC0AC\uC6A9\uD574 \uC774\uBBF8\uC9C0\uB97C RAM\uC5D0 \uC77C\uC2DC\uC801\uC73C\uB85C \uC62E\uAE38 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "bitmap-painter"
  }), `\uBE44\uD2B8\uB9F5 \uD398\uC778\uD130`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Line, Circle \uADF8\uB9AC\uACE0 Dynamic Graph \uC704\uC82F\uC740 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uC0C9\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. SPI \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB41C \uC774\uBBF8\uC9C0\uC5D0\uC11C\uB294 \uC774\uAC83\uC774 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774\uB4E4 \uC704\uC82F\uACFC \uD568\uAED8 \uC0AC\uC6A9\uB418\uB294 \uC774\uBBF8\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB098 RAM\uC5D0 \uC800\uC7A5\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "l8-palette"
  }), `L8 \uD314\uB808\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `L8 \uD615\uC2DD\uC758 \uC774\uBBF8\uC9C0\uB294 \uC9C1\uB82C \uD50C\uB798\uC2DC\uB97C \uD0D1\uC7AC\uD55C \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uD314\uB808\uD2B8 \uB370\uC774\uD130\uAC00 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4(\uC774 \uC5ED\uC2DC \uC131\uB2A5 \uC0C1\uC758 \uC774\uC720\uB85C).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C "Extra Section"\uC744 "IntFlashSection"\uC73C\uB85C \uBCC0\uACBD\uD558\uB294 \uBC29\uBC95\uC73C\uB85C \uC774\uB7EC\uD55C \uD314\uB808\uD2B8\uB97C \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB85C \uC62E\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "drivers"
  }), `\uB4DC\uB77C\uC774\uBC84`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uBCF4\uB4DC \uC124\uC815\uC740 TouchGFX Generator\uB97C \uC0AC\uC6A9\uD574 \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4. TouchGFX Generator\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "/4.20/ko/docs/development/touchgfx-hal-development/touchgfx-generator"
  }), `\uC5EC\uAE30`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. TouchGFX Generator\uB294 TouchGFX \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC800\uC218\uC900 \uB4DC\uB77C\uC774\uBC84 \uC138\uD2B8(\uC774 TouchGFX \uBCF4\uB4DC \uC124\uC815 \uC2DC \uC774\uBBF8 \uAD6C\uD604\uB428)\uC5D0 \uC5F0\uACB0\uD558\uB294 HAL \uACC4\uCE35\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF\uC758 \uD558\uC704 \uC218\uC900 \uB4DC\uB77C\uC774\uBC84\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Core/Src`), ` \uD3F4\uB354\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4DC\uB77C\uC774\uBC84\uB294 \uC138 \uAC1C\uC758 \uD30C\uC77C\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uB4DC\uB77C\uC774\uBC84`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD30C\uC77C`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core/Src/MB1642BDisplayDriver.c`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core/Src/MB1642BDataReader.c`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core/Src/MB1642BButtonController.cpp`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display"
  }), `\uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uB294 \uD45C\uC900 SPI \uD504\uB85C\uD1A0\uCF5C\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. A number of registers is the display can be written to configure the display. \uB370\uC774\uD130\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uB420 \uB54C \uC120\uD0DD\uD55C \uCE69\uC774 \uC5B4\uC124\uC158\uB429\uB2C8\uB2E4. \uCD94\uAC00 GPIO\uC778 DCX\uB294 \uBA85\uB839 \uBC14\uC774\uD2B8\uC640 \uB370\uC774\uD130 \uBC14\uC774\uD2B8\uB97C \uAD6C\uBCC4\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4DC\uB77C\uC774\uBC84\uB294 DMA \uCC44\uB110\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB514\uC2A4\uD50C\uB808\uC774 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C MCU\uAC00 \uD53D\uC140\uC744 \uACC4\uC0B0\uD558\uB294 \uB3D9\uC548 \uC804\uC1A1\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. DMA \uC644\uB8CC \uC778\uD130\uB7FD\uD2B8\uB294 \uD5A5\uD6C4 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC5D0\uC11C \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC804\uC1A1\uB41C \uBA54\uBAA8\uB9AC\uB97C \uD655\uBCF4\uD558\uAC70\uB098, \uC0C8 \uB370\uC774\uD130\uAC00 \uC774\uBBF8 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uC804\uC1A1\uC744 \uC7AC\uC2DC\uC791\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Configuration data is not send with DMA, because the CS and CDX pins must be toggled between and in the small configuration packages according to the protocol of this display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4DC\uB77C\uC774\uBC84\uB294 \uAD6C\uC131 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD560 \uB54C 8\uBE44\uD2B8 \uBAA8\uB4DC\uC5D0\uC11C SPI\uB97C \uC0AC\uC6A9\uD558\uC9C0\uB9CC, \uD53D\uC140 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD560 \uB54C\uB294 16\uBE44\uD2B8 \uBAA8\uB4DC\uB85C \uBC14\uB01D\uB2C8\uB2E4. \uC65C\uB0D0\uD558\uBA74 \uB9AC\uD2C0 \uC5D4\uB514\uC548(little endian) \uBAA8\uB4DC\uC5D0\uC11C MCU \uBA54\uBAA8\uB9AC\uB97C \uC77D\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. RGB565 \uD615\uC2DD\uC758 \uD53D\uC140\uC740 \uB0AE\uC740 \uBC14\uC774\uD2B8(G, B)\uC5D0\uC11C \uB192\uC740 \uBC14\uC774\uD2B8(R, G)\uC21C\uC73C\uB85C RAM\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. 8\uBE44\uD2B8 SPI\uAC00 \uC804\uC1A1\uC744 \uC704\uD574 \uBA54\uBAA8\uB9AC \uC77D\uAE30 \uC791\uC5C5\uC744 \uD560 \uB54C \uC774\uB7EC\uD55C \uC21C\uC11C\uAC00 \uC720\uC9C0\uB429\uB2C8\uB2E4. SPI\uAC00 16\uBE44\uD2B8 \uBAA8\uB4DC\uC77C \uB54C \uB370\uC774\uD130\uB294 \uBA54\uBAA8\uB9AC\uC5D0\uC11C 16\uBE44\uD2B8 RGB565\uB85C \uC77D\uD788\uACE0 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC62C\uBC14\uB978 \uC21C\uC11C\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `16\uBE44\uD2B8 DMA\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uB4DC\uB77C\uC774\uBC84\uB294 \uC804\uC1A1\uC5D0 \uC55E\uC11C \uD53D\uC140\uC5D0\uC11C \uBC14\uC774\uD2B8\uB97C \uAD50\uD658\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "initialization"
  }), `Initialization`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The display initialization is found in the function `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MB1642BDisplayDriver_DisplayInit(void)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4DC\uB77C\uC774\uBC84\uB294 \uAD8C\uC7A5\uB418\uB294 \uC804\uC6D0 \uCF1C\uAE30 \uC21C\uC11C\uC5D0 \uB530\uB77C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 6\uAC1C\uC758 \uBA85\uB839\uC744 \uC804\uC1A1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Exit Sleep Mode (11h)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Enter Normal Mode (13h)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Set Memory Access Control (36h) with MX and BGR bits set`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Set Pixel Format (3Ah) with format 16 bits`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Tearing Effect Line On (35h)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `Set Tear Scanline (44h) with line = 0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4DC\uB77C\uC774\uBC84\uB294 \uBA85\uB839\uB4E4 \uAC04\uC5D0 100ms \uB3D9\uC548 \uD734\uBA74 \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "tearing-effect"
  }), `TE(Tearing Effect)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uC758 TE(Tearing Effect) \uC2E0\uD638\uB294 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4. It allows the application to synchronize the update of the display memory correctly with the display refresh rate. This helps the application to avoid tearing on the display. The display asserts the signal whenever it starts an update cycle. The MCU uses this signal to start sending data to the display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TE \uC2E0\uD638\uB294 MCU\uC758 \uC678\uBD80 \uC778\uD130\uB7FD\uD2B8 \uC785\uB825\uC5D0 \uC5F0\uACB0\uB429\uB2C8\uB2E4. CubeMx\uB294 \uC774 \uD540\uC5D0\uC11C \uC778\uD130\uB7FD\uD2B8\uB97C \uC0DD\uC131 \uBC0F \uAD6C\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uACFC \uAC19\uC774 \uB4DC\uB77C\uC774\uBC84\uC5D0\uC11C \uCF5C\uBC31 \uD568\uC218\uB97C \uC2E4\uD589\uD558\uBA74 TouchGFX\uC5D0\uC11C \uADF8\uB9AC\uAE30\uAC00 \uC2DC\uC791\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MB1642BDisplayDriver.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void HAL_GPIO_EXTI_Rising_Callback(uint16_t GPIO_Pin)
{
  ...
  touchgfxSignalVSync();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "external-flash"
  }), `\uC678\uBD80 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uC2E4\uB4DC\uC758 SPI NOR \uD50C\uB798\uC2DC\uB294 \uD45C\uC900 SPI \uD50C\uB798\uC2DC\uC785\uB2C8\uB2E4. \uB4DC\uB77C\uC774\uBC84\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uB4DC\uB77C\uC774\uBC84\uBCF4\uB2E4 \uAC04\uB2E8\uD569\uB2C8\uB2E4. No special initialization is required to read data from the flash.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The driver can read data using polled SPI (busy waiting for all the bytes) or use DMA. The time to start a DMA reception is similar to the time it takes to read 20 bytes in polled mode, so it is often slower for short reads. On the other hand, the DMA continues to run during interrupts (e.g. sysTick or application interrupts) and can run in the background when the MCU is busy rendering pixels. For this reason both methods are used.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The flash driver is using another DMA channel than the display driver, so both reception of new data and transmission of already drawn pixels can run concurrently.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "linker-script"
  }), `\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C1\uCEE4\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB2E4\uC591\uD55C \uB370\uC774\uD130\uAC00 \uC800\uC7A5\uB418\uB294 \uC704\uCE58\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4. \uC774\uB294 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC9C0\uC815\uB429\uB2C8\uB2E4. \uB2E4\uC74C\uC740 gcc \uCEF4\uD30C\uC77C\uB7EC\uC6A9 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC758 \uCCAB \uBD80\uBD84\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `MEMORY
{
  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K
  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K
  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `It declares the NOR flash as starting from the address 0x90000000. The flash driver in the target application reads data in the 0x90000000 addresses from the SPI flash (using the lower 24-bits as address in the flash).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The External Flash Loader used in STM32CubeProgrammer can flash data in this range to the SPI flash (see below).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uBBF8\uC9C0(ExtFlashSection) \uBC0F \uAE00\uAF34(FontFlashSection) \uB370\uC774\uD130\uB97C SPI \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `  ExtFlashSection :
  {
    *(ExtFlashSection ExtFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH

  FontFlashSection :
  {
    *(FontFlashSection FontFlashSection.*)
    *(.gnu.linkonce.r.*)
    . = ALIGN(0x4);
  } >SPI_FLASH
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0 \uBE44\uC2B7\uD55C \uC139\uC158\uC744 \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uC73C\uB85C SPI \uD50C\uB798\uC2DC\uC5D0 \uB2E4\uB978 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "flash-loader"
  }), `Flash Loader`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `G071 TouchGFX \uBCF4\uB4DC \uC124\uC815\uC5D0\uB294 STM32CubeProgrammer\uC6A9 \uD50C\uB798\uC2DC \uB85C\uB354\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uD50C\uB798\uC2DC \uB85C\uB354\uB294 SPI NOR \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD50C\uB798\uC2DC \uB85C\uB354\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gcc/S25FL032P_STM32G071B-NUCLEO.stldr`), ` \uD30C\uC77C\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A STM32CubeIDE project can be flashed directly from the CubeIDE, but an IAR or Keil application must be flashed from STM32CubeProgrammer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The flash loader is not available in STM32CubeProgrammer initially, so it must be installed by copying the stldr file to the installation:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/copying-stldr.png",
    mdxType: "Figure"
  }, "\uC124\uCE58\uB41C STM32CubeProgrammer\uC5D0 \uD50C\uB798\uC2DC \uB85C\uB354 \uBCF5\uC0AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Now the flash loader can be selected in STM32CubeProgrammer as normal:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/select-stldr.png",
    mdxType: "Figure"
  }, "\uC124\uCE58\uB41C STM32CubeProgrammer\uC5D0 \uD50C\uB798\uC2DC \uB85C\uB354 \uBCF5\uC0AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uD50C\uB798\uC2DC \uB85C\uB354\uB294 Nucleo-G071RB \uBCF4\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uD2B9\uC815 GPIO \uAD6C\uC131\uC5D0\uC11C\uB9CC \uC791\uB3D9\uD569\uB2C8\uB2E4.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C1\uB82C \uD50C\uB798\uC2DC\uC5D0 \uB300\uD574 \uB2E4\uB978 GPIO \uAD6C\uC131\uC774 \uB9DE\uCDA4\uD615 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uACBD\uC6B0, \uD50C\uB798\uC2DC \uB85C\uB354\uB3C4 \uC774\uC640 \uC720\uC0AC\uD558\uAC8C \uC218\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "buttons"
  }), `\uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC84\uD2BC \uB4DC\uB77C\uC774\uBC84\uB294 \uB9E4\uC6B0 \uAC04\uB2E8\uD569\uB2C8\uB2E4. MB1642B\uC758 \uC870\uC774\uC2A4\uD2F1\uACFC Nucleo \uBCF4\uB4DC\uC758 \uD30C\uB780\uC0C9 \uC0AC\uC6A9\uC790 \uBC84\uD2BC\uC5D0 \uC0AC\uC6A9\uB418\uB294 5\uAC1C GPIO\uC758 \uC0C1\uD0DC\uB97C \uC0D8\uD50C\uB9C1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBC84\uD2BC \uB4DC\uB77C\uC774\uBC84\uB294 TouchGFX\uC5D0\uC11C BottonController\uB85C \uC124\uCE58\uB429\uB2C8\uB2E4. \uC989, TouchGFX Designer\uC5D0\uC11C \uBC14\uB85C \uBC84\uD2BC\uC744 \uB20C\uB7EC \uC0C1\uD638 \uC791\uC6A9\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC774 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::handleKeyEvent(uint8_t key)
{
    if (key == '6')
    {
        application().gotoScreen2Screen();
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uB418\uB294 \uD0A4 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD0A4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uCF54\uB4DC`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC67C\uCABD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'4'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC624\uB978\uCABD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'6'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'8'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB798`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'2'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC911\uC559`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'5'`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD30C\uB780\uC0C9 \uC0AC\uC6A9\uC790 \uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `'0'`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `These keys are also usable when you run the Simulator (hit `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `F5`), ` in the TouchGFX Designer) by using the keyboard numpad.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);