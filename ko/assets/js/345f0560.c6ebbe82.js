"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8128],{

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

/***/ 93054:
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
  d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
}));
class Note extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-note)",
      header: "Note",
      type: "note",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Note);


/***/ }),

/***/ 82407:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93054);
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
  id: "hardware-selection-mcu",
  title: "MCU"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-mcu",
  "id": "development/hardware-selection/hardware-components/hardware-selection-mcu",
  "title": "MCU",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-mcu.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-mcu",
  "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-components/hardware-selection-mcu",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-mcu",
    "title": "MCU"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Hardware Components",
    "permalink": "/4.20/ko/docs/category/hardware-components"
  },
  "next": {
    "title": "\uB514\uC2A4\uD50C\uB808\uC774",
    "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-components/hardware-selection-display"
  }
};
const assets = {};




const toc = [{
  value: "\uC8FC\uD30C\uC218",
  id: "frequency",
  level: 2
}, {
  value: "\uADF8\uB798\uD53D \uC11C\uBE0C\uC2DC\uC2A4\uD15C \uC8FC\uD30C\uC218",
  id: "graphic-subsystem-frequency",
  level: 3
}, {
  value: "\uC608\uC2DC",
  id: "example",
  level: 3
}, {
  value: "\uC784\uBCA0\uB514\uB4DC \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uAE30\uB2A5",
  id: "embedded-hardware-acceleration-features",
  level: 2
}, {
  value: "Chrom-ART",
  id: "chrom-art",
  level: 3
}, {
  value: "JPEG \uD558\uB4DC\uC6E8\uC5B4 \uCF54\uB371",
  id: "jpeg-hardware-codec",
  level: 3
}, {
  value: "Chrom-GRC",
  id: "chrom-grc",
  level: 3
}, {
  value: "\uB0B4\uBD80 \uD50C\uB798\uC2DC",
  id: "internal-flash",
  level: 2
}, {
  value: "\uB0B4\uBD80 RAM",
  id: "internal-ram",
  level: 2
}, {
  value: "LCD \uCEE8\uD2B8\uB864\uB7EC",
  id: "lcd-controller",
  level: 2
}, {
  value: "\uD328\uD0A4\uC9C0 \uBC0F I/O",
  id: "packages--io",
  level: 2
}, {
  value: "\uBA54\uBAA8\uB9AC \uC5F0\uACB0",
  id: "memory-interfacing",
  level: 2
}, {
  value: "FMC(Flexible Memory Controller) \uBC0F FSMC(Flexible Static Memory Controller)",
  id: "flexible-memory-controller--flexible-static-memory-controller-fmcfsmc",
  level: 3
}, {
  value: "\uC9C1\uB82C \uBA54\uBAA8\uB9AC \uC778\uD130\uD398\uC774\uC2A4",
  id: "serial-memory-interface",
  level: 3
}, {
  value: "STM32 \uBC38\uB958 \uB77C\uC778 \uC81C\uD488",
  id: "stm32-value-line-products",
  level: 3
}, {
  value: "Cortex\xAE-M \uCF54\uC5B4",
  id: "cortex-m-cores",
  level: 2
}, {
  value: "Cortex\xAE-M0+",
  id: "cortex-m0",
  level: 3
}, {
  value: "Cortex\xAE-M4",
  id: "cortex-m4",
  level: 3
}, {
  value: "Cortex\xAE-M7",
  id: "cortex-m7",
  level: 3
}, {
  value: "\uAE30\uB2A5 \uAC1C\uC694",
  id: "feature-overview",
  level: 3
}, {
  value: "Level 1 \uCE90\uC2DC:",
  id: "level-1-cache",
  level: 3
}, {
  value: "\uB4C0\uC5BC \uCF54\uC5B4",
  id: "dual-core",
  level: 3
}, {
  value: "\uBC84\uC2A4 \uC544\uD0A4\uD14D\uCC98",
  id: "bus-architecture",
  level: 2
}, {
  value: "\uAC00\uACA9",
  id: "price",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU(Microcontroller Unit)\uB294 \uBAA8\uB4E0 \uC784\uBCA0\uB514\uB4DC \uC194\uB8E8\uC158\uC758 \uD575\uC2EC \uBD80\uD488\uC73C\uB85C, \uBE44\uC6A9\uACFC \uAE30\uB2A5\uBA74\uC5D0\uC11C \uB2E4\uC591\uD55C \uC635\uC158\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D\uC6A9 MCU\uB97C \uC120\uD0DD\uD560 \uB54C\uB294 \uC9C0\uC6D0\uB418\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC640 MCU \uD328\uD0A4\uC9C0, \uD06C\uAE30 \uBC0F \uB2EC\uC131 \uAC00\uB2A5\uD55C \uADF8\uB798\uD53D \uC131\uB2A5\uC744 \uACE0\uB824\uD574\uC57C \uD558\uBA70, \uADF8\uB798\uD53D \uC131\uB2A5\uC740 \uB450 \uAC00\uC9C0 \uC8FC\uC694 \uC694\uC778\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC774\uBBF8\uC9C0 \uAD6C\uC131`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MCU\uC5D0 \uD1B5\uD569\uB41C \uADF8\uB798\uD53D \uAC00\uC18D\uAE30\uC758 \uAC00\uC6A9\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2DC\uC2A4\uD15C \uB0B4 \uCE90\uC2DC \uBA54\uBAA8\uB9AC\uC758 \uAC00\uC6A9\uC131`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uBA54\uBAA8\uB9AC \uC561\uC138\uC2A4 \uBC0F \uB300\uC5ED\uD3ED`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD074\uB85D \uC8FC\uD30C\uC218\uC640 \uC11C\uBE0C\uC2DC\uC2A4\uD15C \uBC84\uC2A4 \uC8FC\uD30C\uC218`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB0B4\uBD80 \uD50C\uB798\uC2DC \uBC0F RAM \uBA54\uBAA8\uB9AC\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D\uACFC \uB354\uBD88\uC5B4 \uC218\uD589\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB2E4\uB978 \uCE21\uBA74(\uBAA8\uD130 \uC81C\uC5B4, \uBB34\uC120 \uB4F1)\uB3C4 \uC911\uC694\uD558\uAC8C \uACE0\uB824\uD574\uC57C \uD558\uB294\uB370, \uC774\uB4E4 \uC5ED\uC2DC MCU \uC120\uD0DD\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD398\uC774\uC9C0\uC5D0\uC11C\uB294 GUI \uAE30\uBC18 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0AC\uC6A9\uD560 STM32 MCU\uB97C \uC120\uD0DD\uD560 \uB54C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C MCU \uC635\uC158\uACFC \uACE0\uB824\uD574\uC57C \uD560 \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uB300\uD574 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/mcu-portfolio-graphics.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "STM32 MCU"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/st-mcu-finder.html",
    mdxType: "Link"
  }, "\uC5D0\uC11C ST MCU \uD30C\uC778\uB354\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC"), " \uBAA8\uB4E0 \uC81C\uD488 \uB77C\uC778\uACFC \uC8FC\uBCC0 \uC7A5\uCE58, \uAC00\uACA9 \uB4F1\uC758 \uC0C1\uC138\uC815\uBCF4\uB97C \uBAA8\uB450 \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "frequency"
  }), `\uC8FC\uD30C\uC218`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCF54\uC5B4 \uC8FC\uD30C\uC218\uB294 \uD654\uBA74 \uC0C8\uB85C \uACE0\uCE68, \uD654\uBA74\uC758 \uC720\uB3D9\uC131 \uADF8\uB9AC\uACE0 \uC560\uB2C8\uBA54\uC774\uC158 \uCE21\uBA74\uC5D0\uC11C \uADF8\uB798\uD53D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC131\uB2A5\uC5D0 \uC0C1\uB2F9\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uB0B4/\uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774 \uD504\uB808\uC784 \uBC84\uD37C\uB85C \uC804\uC1A1\uD560 \uC218 \uC788\uB294 \uB370\uC774\uD130\uC758 \uC591\uACFC \uC608\uC0C1 \uBC0F \uC560\uB2C8\uBA54\uC774\uC158 \uAC00\uB2A5\uC131\uC5D0\uB3C4 \uC601\uD5A5\uC744 \uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC8FC\uD30C\uC218\uAC00 \uB192\uC744\uC218\uB85D \uC8FC\uC5B4\uC9C4 \uAE30\uAC04 \uB0B4\uC5D0 \uB354 \uB9CE\uC740 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD560 \uC218 \uC788\uACE0 \uC880 \uB354 \uBCF5\uC7A1\uD55C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uC81C\uD488\uC758 \uCF54\uC5B4 \uC8FC\uD30C\uC218\uB294 \uCD5C\uB300 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `480 MHz`), `\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC8FC\uD30C\uC218\uAC00 \uB192\uC744\uC218\uB85D \uC804\uB825 \uC18C\uBAA8\uB7C9\uC774 \uCEE4\uC9D1\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "graphic-subsystem-frequency"
  }), `\uADF8\uB798\uD53D \uC11C\uBE0C\uC2DC\uC2A4\uD15C \uC8FC\uD30C\uC218`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCF54\uC5B4 CPU \uC8FC\uD30C\uC218\uB97C \uADF8\uB798\uD53D \uC11C\uBE0C\uC2DC\uC2A4\uD15C \uC8FC\uD30C\uC218\uC640 \uAD6C\uBCC4\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB798\uD53D \uC11C\uBE0C\uC2DC\uC2A4\uD15C \uC8FC\uD30C\uC218\uC5D0\uB294 \uB0B4\uBD80 \uBC84\uC2A4\uC758 \uC8FC\uD30C\uC218\uC640 \uADF8\uB798\uD53D \uAC00\uC18D\uAE30\uC758 \uC8FC\uD30C\uC218\uB97C \uBE44\uB86F\uD574 \uB0B4/\uC678\uBD80 \uBA54\uBAA8\uB9AC\uC758 \uC561\uC138\uC2A4 \uC18D\uB3C4\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC11C\uBE0C\uC2DC\uC2A4\uD15C \uC8FC\uD30C\uC218 \uC5ED\uC2DC \uC804\uBC18\uC801\uC778 \uADF8\uB798\uD53D \uC131\uB2A5\uC5D0 \uD070 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "example"
  }), `\uC608\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7\uC758 \uB0B4\uBD80 RAM\uC5D0\uC11C \uC2E4\uD589\uD560 \uB54C \uC774\uB860\uC801\uC778 \uCF54\uC5B4 \uBC0F \uC11C\uBE0C\uC2DC\uC2A4\uD15C \uC131\uB2A5\uC744 \uD3C9\uAC00\uD558\uB294 \uC608\uC2DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `CPU \uCF54\uC5B4\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `480 MHz`), `\uC5D0\uC11C \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `64\uBE44\uD2B8 AXI \uBC84\uC2A4 \uC8FC\uD30C\uC218\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `240 MHz`), `\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LTDC(LCD-TFT Display Controller)\uB294 64\uBE44\uD2B8 AXI \uBC84\uC2A4\uB97C \uC0AC\uC6A9\uD558\uACE0 10 \uC0AC\uC774\uD074\uC5D0 8\uD68C \uC804\uC1A1\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB0B4\uBD80 RAM\uC5D0\uC11C\uB294 \uB208\uC5D0 \uB744\uB294 \uC9C0\uC5F0\uC774 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4(\uB300\uAE30 \uC0C1\uD0DC 0\uCD08).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0\uC11C \uC561\uC138\uC2A4\uB97C \uD560 \uB54C \uB0B4\uBD80 RAM\uC758 \uB300\uC5ED\uD3ED\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB300\uC5ED\uD3ED = 240 MHz x 8/10 x 8\uBC14\uC774\uD2B8 = `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1.536 MB/s`), `.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB300\uC5ED\uD3ED\uC774 \uC774\uC640 \uAC19\uC744 \uB54C \uB0B4\uBD80 RAM\uC740 32 bpp \uC0C9 \uAE4A\uC774\uC5D0\uC11C 800x480 \uD574\uC0C1\uB3C4\uC5D0 \uB300\uD574 1000 fps\uB97C \uBCF4\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBCF4\uD1B5\uC740 LTDC\uC640 \uB0B4\uBD80 RAM\uC758 \uB300\uC5ED\uD3ED\uC5D0 \uBCD1\uBAA9\uC774 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB3C4\uB85D \uD53D\uC140 \uD074\uB85D, \uD3EC\uCE58(porch) \uB4F1\uC744 \uC870\uC815\uD558\uC5EC \uB514\uC2A4\uD50C\uB808\uC774\uB85C\uC758 \uC804\uC1A1\uC744 60 fps\uB85C \uC81C\uD55C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "embedded-hardware-acceleration-features"
  }), `\uC784\uBCA0\uB514\uB4DC \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 MCU\uB9C8\uB2E4 \uB0B4\uC7A5\uB41C \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uAE30\uB2A5\uC774 \uC11C\uB85C \uB2E4\uB978\uB370, \uC774\uB7EC\uD55C \uAC00\uC18D \uAE30\uB2A5\uC740 \uACE0\uC131\uB2A5 \uADF8\uB798\uD53D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB2EC\uC131\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "chrom-art"
  }), `Chrom-ART`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\uB294 \uADF8\uB798\uD53D \uC791\uC5C5\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uB294 \uACE0\uAE09 DMA\uB85C, DMA2D\uB77C\uACE0\uB3C4 \uBD88\uB9BD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC218\uC758 STM32 \uD50C\uB7AB\uD3FC\uC5D0 \uD1B5\uD569\uB418\uC5B4 \uC788\uB294 Chrom-ART \uAC00\uC18D\uAE30\uB294 CPU \uBD80\uD558 \uC5C6\uC774 \uC774\uBBF8\uC9C0\uB97C \uC870\uC791 \uBC0F \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC0C9\uC0C1 \uCC44\uC6B0\uAE30, \uC774\uBBF8\uC9C0 \uBCF5\uC0AC, \uD63C\uD569, \uD53D\uC140 \uD615\uC2DD \uBCC0\uD658 \uB4F1 \uB300\uBD80\uBD84\uC758 \uADF8\uB798\uD53D \uC791\uC5C5\uC744 \uAC00\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART \uAC00\uC18D\uAE30\uB294 \uB450 \uACC4\uCE35\uC744 \uBE14\uB80C\uB529\uD558\uC5EC \uCD08\uAE30 \uD53D\uC140 \uD615\uC2DD\uC744 \uC6D0\uD558\uB294 \uCD9C\uB825 \uD53D\uC140 \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uD558\uACE0, \uB2E8 \uD55C \uBC88\uC758 \uC791\uC5C5\uC73C\uB85C \uBA54\uBAA8\uB9AC \uB3C4\uCC29\uC9C0\uC5D0 \uACB0\uACFC\uB97C \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C CLUT(Color Look Up Table)\uB97C \uC0AC\uC6A9\uD558\uB294 \uC0C9\uC0C1 \uD615\uC2DD\uB3C4 \uC9C0\uC6D0\uD558\uBBC0\uB85C \uBA54\uBAA8\uB9AC \uC808\uAC10\uC5D0 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\uAC00 \uD65C\uC131\uD654\uB41C \uC0C1\uD0DC\uC5D0\uC11C CPU \uBD80\uD558\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `82%`), `\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4%`), `\uB85C \uAC10\uC18C\uD558\uB294  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32F496-EVAL`), ` \uBCF4\uB4DC\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC608\uC2DC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/birdeatcoin.gif",
    mdxType: "Figure"
  }, "Bird-Eat-Coin Chrom-ART \uC608\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C STM32H7 \uC81C\uD488\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `YCbCr`), ` \uD615\uC2DD\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `RGB`), ` \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uD558\uB294 \uAE30\uB2A5\uC774 Chrom-ART \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. JPEG \uD558\uB4DC\uC6E8\uC5B4 \uCF54\uB371\uACFC \uC774 \uAE30\uB2A5\uC744 \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 JPEG \uC774\uBBF8\uC9C0\uB97C \uC778\uCF54\uB529 \uBC0F \uB514\uCF54\uB529\uD560 \uB54C CPU\uC758 \uBD80\uB2F4\uC744 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/chrom-art-acceleration.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "YCbCr\uC5D0\uC11C RGB\uB85C\uC758 \uD558\uB4DC\uC6E8\uC5B4 \uC131\uB2A5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0 \uB098\uC5F4\uB41C \uAE30\uB2A5\uC744 \uAC16\uCD98 Chrom-ART \uAC00\uC18D\uAE30\uB294 \uADF8\uB798\uD53D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uD070 \uC774\uC810\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC120\uD0DD\uD55C MCU\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uACBD\uC6B0, TouchGFX\uB294 \uBAA8\uB4E0 Chrom-ART \uAE30\uB2A5\uC744 \uCC98\uB9AC\uD558\uACE0 \uAC00\uB2A5\uD55C \uBAA8\uB4E0 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 CPU\uAC00 \uC544\uB2CC Chrom-ART \uC8FC\uBCC0 \uC7A5\uCE58\uB85C \uB9AC\uB514\uB809\uC158\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART \uC8FC\uBCC0 \uC7A5\uCE58\uB294 \uACE0\uC131\uB2A5 STM32 \uC81C\uD488\uAD70\uC5D0\uC11C \uC81C\uACF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 AN4943 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB178\uD2B8\uC758 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/17/82/73/f8/b8/8a/47/c7/DM00338361/files/DM00338361.pdf/jcr:content/translations/en.DM00338361.pdf",
    mdxType: "Link"
  }, "Chrom-ART \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uD654"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "jpeg-hardware-codec"
  }), `JPEG \uD558\uB4DC\uC6E8\uC5B4 \uCF54\uB371`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32H7`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `STM32F7`), ` \uC81C\uD488\uAD70\uC740 \uC774\uBBF8\uC9C0\uC640 \uBE44\uB514\uC624\uB97C \uC778\uCF54\uB529 \uBC0F \uB514\uCF54\uB529\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB4DC\uC6E8\uC5B4 JPEG \uCF54\uB371\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB294 UI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBE44\uB514\uC624 \uD30C\uC77C\uC744 \uC7AC\uC0DD\uD558\uAC70\uB098 JPEG \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0 \uC911\uC694\uD55C \uAE30\uB2A5\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG \uC774\uBBF8\uC9C0\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uBA54\uBAA8\uB9AC\uB97C \uC801\uAC8C \uCC28\uC9C0\uD569\uB2C8\uB2E4. JPEG \uD558\uB4DC\uC6E8\uC5B4 \uCF54\uB371\uC740 CPU \uACFC\uBD80\uD558 \uC5C6\uC774 \uB7F0\uD0C0\uC784\uC5D0 \uC774\uBBF8\uC9C0\uB97C \uB514\uCF54\uB529\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 TouchGFX \uB370\uBAA8\uC5D0\uC11C\uB294 JPEG \uD558\uB4DC\uC6E8\uC5B4 \uCF54\uB371\uC744 \uC0AC\uC6A9\uD558\uC5EC MJPEG \uBE44\uB514\uC624\uB97C \uC7AC\uC0DD\uD558\uB294 \uB3D9\uC548 CPU\uC758 \uBD80\uD558\uB97C \uC904\uC5EC\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/jpeg-codec-acceleration.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "\uD558\uB4DC\uC6E8\uC5B4 JPEG \uCF54\uB371 \uC131\uB2A5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 AN4996 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB178\uD2B8\uC758 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/a5/9d/22/46/61/6d/4a/ab/DM00356635/files/DM00356635.pdf/jcr:content/translations/en.DM00356635.pdf",
    mdxType: "Link"
  }, "\uD558\uB4DC\uC6E8\uC5B4 JPEG \uCF54\uB371"), "\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "chrom-grc"
  }), `Chrom-GRC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC758 \uACBD\uC6B0 \uC9C1\uC0AC\uAC01\uD615\uC774 \uC544\uB2CC \uC0C8\uB85C\uC6B4 \uD615\uD0DC\uC758 \uB514\uC2A4\uD50C\uB808\uC774 \uCD94\uC138\uC5D0 \uB9DE\uCDB0 STM32 Chrom-GRC\u2122(GFXMMU)\uB97C \uC8FC\uBCC0 \uC7A5\uCE58\uB85C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-GRC\u2122 \uC8FC\uBCC0 \uC7A5\uCE58\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC9C1\uC0AC\uAC01\uD615\uC774 \uC544\uB2CC \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uCC98\uB9AC\uD560 \uB54C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC800\uC7A5\uD558\uB294 \uB370 \uD544\uC694\uD55C RAM\uC758 \uC6A9\uB7C9\uC744 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC6D0\uD615 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0 Chrom-GRC\u2122\uB294 \uBA54\uBAA8\uB9AC \uC694\uAD6C \uC0AC\uD56D\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `20%`), `\uAE4C\uC9C0 \uC904\uC5EC\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC815\uC0AC\uAC01\uD615\uC774 \uC544\uB2CC \uD654\uBA74\uC744 \uC81C\uC5B4\uD560 \uB54C Chrom-GRC\u2122 \uC8FC\uBCC0\uC7A5\uCE58\uB97C \uBC18\uB4DC\uC2DC \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uAC83\uC740 \uC544\uB2C8\uC9C0\uB9CC \uC0AC\uC6A9\uD558\uB294 \uD3B8\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/stm-32-chrom-grc.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "Chrom-GRC \uC8FC\uBCC0 \uC7A5\uCE58\uB97C \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uCD5C\uC801\uD654"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 AN5051 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB178\uD2B8\uC758 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/74/21/86/42/af/d5/4f/58/DM00407777/files/DM00407777.pdf/jcr:content/translations/en.DM00407777.pdf",
    mdxType: "Link"
  }, "\uADF8\uB798\uD53D \uBA54\uBAA8\uB9AC \uCD5C\uC801\uD654"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "internal-flash"
  }), `\uB0B4\uBD80 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uB9AC\uC18C\uC2A4\uB97C \uC0AC\uC6A9\uD558\uB294 GUI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uB294 \uB370 \uBE44\uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0\uC11C\uC758 \uC2E4\uD589 \uBC0F \uC561\uC138\uC2A4 \uC18D\uB3C4\uB294 \uACBD\uC6B0\uC5D0 \uB530\uB77C \uC678\uBD80 \uD50C\uB798\uC2DC\uBCF4\uB2E4 \uCD5C\uB300 2\uBC30\uAC00\uB7C9 \uBE60\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB0B4\uBD80 \uD50C\uB798\uC2DC\uB294 \uD06C\uAE30\uAC00 \uC81C\uD55C\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC5D0 TouchGFX \uD504\uB808\uC784\uC6CC\uD06C\uB098 \uD654\uBA74 \uC815\uC758 \uBC0F UI \uB85C\uC9C1\uC744 \uC800\uC7A5\uD558\uB294 \uB370 \uC8FC\uB85C \uC0AC\uC6A9\uD558\uACE0, \uBE44\uD2B8\uB9F5 \uB370\uC774\uD130\uB294 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB418\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0AC\uC6A9\uB418\uB294 STM32 \uC81C\uD488 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uC758 \uB0B4\uBD80 \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC \uC6A9\uB7C9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC218 KB`), `\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC218 MB`), `\uC0AC\uC774\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uB370\uC774\uD130\uC758 \uC591\uC774 \uB0B4\uBD80 \uD50C\uB798\uC2DC \uC6A9\uB7C9\uC744 \uCD08\uACFC\uD560 \uB54C\uB294 \uC678\uBD80 \uBA54\uBAA8\uB9AC\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-external-memories",
    mdxType: "Link"
  }, "\uC678\uBD80 \uBA54\uBAA8\uB9AC"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uC758 \uC694\uAD6C\uC0AC\uD56D\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB808\uC784\uC6CC\uD06C:                       `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `60 KB`), ` ~ `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `100 KB`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD654\uBA74 \uD574\uC0C1\uB3C4 \uBC0F GUI \uB85C\uC9C1: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1`), ` ~ `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `100 KB`), `.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC218\uCE58\uB294 \uC0AC\uC6A9\uB418\uB294 \uD504\uB808\uC784\uC6CC\uD06C \uAE30\uB2A5 \uADF8\uB9AC\uACE0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD06C\uAE30\uC640 \uBCF5\uC7A1\uC131\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "internal-ram"
  }), `\uB0B4\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C(\uB4E4)\uC758 \uD06C\uAE30\uAC00 \uAC00\uC6A9 \uBA54\uBAA8\uB9AC\uC758 \uC6A9\uB7C9\uC744 \uCD08\uACFC\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uC5D0\uB294 \uB0B4\uBD80 RAM\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uB294 \uC124\uC815\uC5D0 \uC678\uBD80 \uBA54\uBAA8\uB9AC\uB97C \uCD94\uAC00\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD06C\uAE30 \uACC4\uC0B0\uC740 \uB108\uBE44, \uB192\uC774 \uBC0F \uC0C9\uC2EC\uB3C4\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, HVGA \uD574\uC0C1\uB3C4(480x320)\uC640 16\uBE44\uD2B8 \uC0C9\uC0C1\uC774 \uC9C0\uC6D0\uB418\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0 \uD558\uB098\uC758 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uD544\uC694\uD55C \uBA54\uBAA8\uB9AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uB098\uC758 \uD504\uB808\uC784 \uBC84\uD37C \uD06C\uAE30 = `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `480 x 320 x 2`), ` = `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `307.200\uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0AC\uC6A9\uB418\uB294 STM32 \uC81C\uD488\uC758 \uB0B4\uBD80 RAM \uC6A9\uB7C9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC218 KB`), `\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC218 MB`), `\uC0AC\uC774\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC678\uBD80 \uBA54\uBAA8\uB9AC\uC758 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-external-memories",
    mdxType: "Link"
  }, "\uC678\uBD80 \uBA54\uBAA8\uB9AC"), " \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX RAM \uC694\uAD6C \uC0AC\uD56D:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB808\uC784\uC6CC\uD06C:          `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `10 KB`), ` ~ `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `30 KB`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F:            `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `1 KB`), ` ~ `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `15 KB`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uBAA8\uB9AC \uC694\uAD6C \uC0AC\uD56D\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uB9C8\uB2E4 \uB2E4\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "lcd-controller"
  }), `LCD \uCEE8\uD2B8\uB864\uB7EC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU \uC120\uC815 \uC5ED\uC2DC \uC0AC\uC6A9\uD560 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC640 \uD574\uC0C1\uB3C4\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 800x480 \uD574\uC0C1\uB3C4\uB294 \uB370\uC774\uD130 \uC804\uC1A1 \uC18D\uB3C4 \uCE21\uBA74\uC5D0\uC11C \uD6A8\uC728\uC801\uC778 \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C\uB9CC \uB2EC\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. RGB-TFT \uBC0F MPI-DSI \uC778\uD130\uD398\uC774\uC2A4\uB294 SPI\uB098 \uBCD1\uB82C 8080/6800\uBCF4\uB2E4 \uB300\uC5ED\uD3ED\uC774 \uB192\uC740 \uACBD\uC6B0\uAC00 \uB9CE\uAE30 \uB54C\uBB38\uC5D0 \uB192\uC740 \uD574\uC0C1\uB3C4\uB97C \uC704\uD574 \uC8FC\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uD574\uC0C1\uB3C4\uAC00 \uB0AE\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0 \uBCF4\uD1B5 \uCEE8\uD2B8\uB864\uB7EC\uC640 GRAM\uAC00 \uB0B4\uC7A5\uB418\uC5B4 \uC788\uC73C\uBBC0\uB85C \uAC04\uB2E8\uD55C SPI \uB610\uB294 8080/6800 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD1B5\uD574 \uC5F0\uACB0\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uACE0\uD574\uC0C1\uB3C4 \uB514\uC2A4\uD50C\uB808\uC774(WQVGA \uC774\uC0C1)\uC5D0\uB294 \uCEE8\uD2B8\uB864\uB7EC\uC640 GRAM\uC774 \uC8FC\uB85C \uB0B4\uC7A5\uB418\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC \uCABD\uC5D0 \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC124\uCE58\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. RGB-TFT \uBC0F MIPI DSI \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uB0B4\uC7A5\uB41C STM32 MCU\uC5D0\uB294 \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC874\uC7AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/mcu/display-interfaces.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\uC544\uB798 \uADF8\uB9BC\uC740 GRAM \uBC0F \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uB0B4\uC7A5\uB418\uC5B4 \uC788\uAC70\uB098 \uB0B4\uC7A5\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 4\uAC1C\uC758 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uAD00\uD55C \uC608\uC2DC\uC785\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "hardware-selection-display",
    mdxType: "Link"
  }, "\uB514\uC2A4\uD50C\uB808\uC774"), " \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "packages--io"
  }), `\uD328\uD0A4\uC9C0 \uBC0F I/O`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD544\uC694\uD55C I/O\uC758 \uAC1C\uC218\uB294 \uC120\uD0DD\uD55C \uB514\uC2A4\uD50C\uB808\uC774 \uBC0F \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. \uBCD1\uB82C RAM/\uD50C\uB798\uC2DC\uB85C \uBCD1\uB82C \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC2E4\uD589\uD558\uB824\uBA74 \uB9CE\uC740 \uC218\uC758 I/O\uAC00 \uD544\uC694\uD558\uBBC0\uB85C \uD328\uD0A4\uC9C0\uC758 \uD06C\uAE30\uAC00 \uCEE4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-interfacing"
  }), `\uBA54\uBAA8\uB9AC \uC5F0\uACB0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC758 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC640 RAM\uC758 \uC6A9\uB7C9\uC774 \uCDA9\uBD84\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 \uAC00\uC7A5 \uC801\uD569\uD55C \uC678\uBD80 \uBA54\uBAA8\uB9AC \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD0D1\uC7AC\uD55C MCU\uB97C \uC120\uD0DD\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. STM32 \uC81C\uD488\uC740 NOR, NAND, SRAM, SDRAM, LPSDR SDRAM \uBC0F PSRAM \uBA54\uBAA8\uB9AC\uB97C \uC5F0\uACB0\uD560 \uC218 \uC788\uB3C4\uB85D \uB2E4\uC591\uD55C \uBA54\uBAA8\uB9AC \uCEE8\uD2B8\uB864\uB7EC \uC8FC\uBCC0 \uC7A5\uCE58\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flexible-memory-controller--flexible-static-memory-controller-fmcfsmc"
  }), `FMC(Flexible Memory Controller) \uBC0F FSMC(Flexible Static Memory Controller)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FMC\uB294 \uC815\uC801 RAM\uC744 \uC9C0\uC6D0\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4 FSMC\uC5D0 \uB3D9\uC801 RAM \uC9C0\uC6D0(SDRAM)\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uBE60\uB978 \uC678\uBD80 \uC561\uC138\uC2A4 \uC18D\uB3C4\uC640 8\uBE44\uD2B8, 16\uBE44\uD2B8, \uD2B9\uD788 32\uBE44\uD2B8 \uB370\uC774\uD130 \uBC84\uC2A4\uAC00 \uC9C0\uC6D0\uB418\uB294 FMC\uB294 \uC678\uBD80 RAM\uC5D0\uC11C \uB354 \uB192\uC740 \uCC98\uB9AC\uB7C9\uC744 \uC9C0\uC6D0\uD558\uBBC0\uB85C \uB354 \uB192\uC740 \uD574\uC0C1\uB3C4\uB97C \uD6A8\uACFC\uC801\uC73C\uB85C \uC9C0\uC6D0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. FMC\uC5D0\uC11C\uB294 \uAC01 \uBA54\uBAA8\uB9AC \uBC45\uD06C \uBCC4\uB85C \uCE69\uC744 \uB3C5\uB9BD\uC801\uC73C\uB85C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. FMC\uB294 \uADF8\uB798\uD53D \uC2A4\uD0DD\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC704\uD55C \uC678\uBD80 \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uC640 \uD504\uB808\uC784 \uBC84\uD37C \uBC0F \uD799 \uD655\uC7A5\uC744 \uC704\uD55C \uC678\uBD80 RAM \uBA54\uBAA8\uB9AC\uB97C \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "serial-memory-interface"
  }), `\uC9C1\uB82C \uBA54\uBAA8\uB9AC \uC778\uD130\uD398\uC774\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uC81C\uD488\uC5D0 \uB530\uB77C \uC9C1\uB82C \uBA54\uBAA8\uB9AC \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uB0B4\uC7A5\uB418\uC5B4 \uC788\uC5B4\uC11C QSPI, PSRAM, OPI PSRAM \uBC0F \uD558\uC774\uD37C RAM \uBA54\uBAA8\uB9AC\uC640 \uD568\uAED8 \uC2F1\uAE00, \uB354\uBE14, \uCFFC\uB4DC, \uC625\uD0C0 \uBC0F \uD558\uC774\uD37C \uBC84\uC2A4 \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uB97C \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C1\uB82C \uACE0\uC18D \uBA54\uBAA8\uB9AC \uC778\uD130\uD398\uC774\uC2A4\uB294 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uC5D0\uC11C \uCD5C\uB300 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `256 MB`), `, \uAC04\uC811 \uBAA8\uB4DC\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `4 GB`), `\uAE4C\uC9C0 \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCD1\uB82C \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uBE44\uD574 \uC9C1\uB82C \uBA54\uBAA8\uB9AC \uC778\uD130\uD398\uC774\uC2A4\uB294 \uC800\uAC00\uC758 \uC678\uBD80 \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uB97C \uC18C\uD615 \uD328\uD0A4\uC9C0\uC5D0 \uC5F0\uACB0\uD558\uB3C4\uB85D \uD5C8\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uD540 \uC218\uB97C \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 AN4760 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB178\uD2B8\uC758 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/b0/7e/46/a8/5e/c1/48/01/DM00227538/files/DM00227538.pdf/jcr:content/translations/en.DM00227538.pdf",
    mdxType: "Link"
  }, "STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC758 \uCFFC\uB4DC SPI \uC778\uD130\uD398\uC774\uC2A4"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32-value-line-products"
  }), `STM32 \uBC38\uB958 \uB77C\uC778 \uC81C\uD488`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uACA9 \uCD5C\uC801\uD654\uB97C \uC704\uD574 STM32H7 \uBC0F STM32F7 \uD50C\uB7AB\uD3FC\uC740 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC758 \uC6A9\uB7C9\uC774 \uC81C\uD55C\uB41C \uBC38\uB958 \uB77C\uC778 \uC81C\uD488\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC81C\uD488\uC5D0\uC11C\uB294 \uADF8\uB798\uD53D \uB9AC\uC18C\uC2A4\uAC00 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "cortex-m-cores"
  }), `Cortex\xAE-M \uCF54\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 MCU\uB294 \uB2E4\uC591\uD55C ARM Cortex\xAE-M \uC544\uD0A4\uD14D\uCC98\uB85C \uCD9C\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uC740 STM32\uC5D0\uC11C \uADF8\uB798\uD53D\uC744 \uC2E4\uD589\uD558\uB294 \uB370 \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uB418\uB294 \uCF54\uC5B4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m0"
  }), `Cortex\xAE-M0+`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M0+`), `\uB294 \uB2E8\uC21C\uD55C \uC544\uD0A4\uD14D\uCC98\uC640 \uC800\uB834\uD55C \uAC00\uACA9\uC774 \uD2B9\uC9D5\uC73C\uB85C, \uB0AE\uC740 \uD574\uC0C1\uB3C4\uC5D0\uC11C \uC2E4\uD589\uB418\uB294 \uC18C\uD615 \uC815\uC801 \uADF8\uB798\uD53D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC801\uD569\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m4"
  }), `Cortex\xAE-M4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M4`), `\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `M0+`), `\uBCF4\uB2E4 \uB9CE\uC740 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uBA70 \uACC4\uC0B0 \uC18D\uB3C4\uAC00 \uBE60\uB985\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 DSP \uBA85\uB839\uC5B4 \uC138\uD2B8\uC640 \uB2E8\uC815\uB3C4(single precision) FPU \uC7A5\uCE58\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB4E4 \uBA85\uB839\uC5B4\uB294 CPU\uC758 \uBD80\uD558\uB97C \uC904\uC774\uACE0 \uACC4\uC0B0 \uC18D\uB3C4\uB97C \uB192\uC5EC\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cortex-m7"
  }), `Cortex\xAE-M7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Cortex\xAE-M7`), `\uC5D0\uB294 \uB354 \uBCF5\uC7A1\uD55C \uC544\uD0A4\uD14D\uCC98 \uBFD0\uB9CC \uC544\uB2C8\uB77C DSP \uBA85\uB839\uC5B4 \uC138\uD2B8\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA70, \uB370\uC774\uD130\uC640 \uBA85\uB839\uC5B4\uB97C \uC704\uD55C \uCD5C\uB300 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `16 KB`), `\uC758 Level 1 \uCE90\uC2DC \uBA54\uBAA8\uB9AC\uC640 \uBC30\uC815\uB3C4(double precision)\uB97C \uAC16\uCD98 \uBCF4\uB2E4 \uD6A8\uC728\uC801\uC778 FPU \uC7A5\uCE58\uAC00 \uD568\uAED8 \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uCE90\uC2DC \uBA54\uBAA8\uB9AC\uB294 \uD398\uCE58(fetch) \uC2DC\uAC04\uC744 \uCD5C\uC801\uD654\uD558\uAE30 \uC704\uD574 \uB370\uC774\uD130\uC640 \uBA85\uB839\uC5B4\uB97C \uACC4\uC0B0 \uC7A5\uCE58 \uC8FC\uBCC0\uC5D0 \uBC30\uCE58\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "feature-overview"
  }), `\uAE30\uB2A5 \uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Cortex-M0+`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Cortex-M4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Cortex-M7`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMIPS/MHz \uBC94\uC704`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0.95 ~ 1.36`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1.25 ~ 1.95`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2.14 ~ 3.23`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Core Mark\xAE/MHz`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2.46`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3.42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5.01`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DSP(Digital Signal Processing) \uD655\uC7A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB2C8\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC608`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC608`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBD80\uB3D9 \uC18C\uC218\uC810 \uD558\uB4DC\uC6E8\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB2C8\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC608(SP)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC608(SP + DP)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBE4C\uD2B8\uC778 \uCE90\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB2C8\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB2C8\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC608(4 ~ 64KB\uC5D0\uC11C \uC120\uD0DD), I-\uCE90\uC2DC \uBC0F D-\uCE90\uC2DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBC84\uC2A4 \uD504\uB85C\uD1A0\uCF5C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AHB Lite,\uACE0\uC18D I/O`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AHB Lite, APB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `AXI4, AHB Lite, APB, TCM`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB4C0\uC5BC \uCF54\uC5B4 \uC7A0\uAE08 \uB2E8\uACC4 \uC9C0\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB2C8\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB2C8\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC608`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "level-1-cache"
  }), `Level 1 \uCE90\uC2DC:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7 \uBC0F STM32F7 \uC81C\uD488\uAD70\uC5D0\uB294 \uBA85\uB839\uC5B4\uC640 \uB370\uC774\uD130 \uBAA8\uB450\uB97C \uC800\uC7A5\uD558\uB294 \uCD5C\uB300 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `16 KB`), `\uC758 L1-\uCE90\uC2DC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. L1-\uCE90\uC2DC\uB294 CPU\uC640 \uAC00\uAE4C\uC6B4 \uC704\uCE58\uC5D0 \uC77C\uB828\uC758 \uB370\uC774\uD130 \uB610\uB294 \uBA85\uB839\uC5B4\uB97C \uC800\uC7A5\uD558\uBBC0\uB85C CPU\uAC00 \uBC18\uBCF5\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 \uB3D9\uC77C \uB370\uC774\uD130\uB97C \uACC4\uC18D\uD574\uC11C \uAC00\uC838\uC62C \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 AN4839 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB178\uD2B8\uC758 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",
    mdxType: "Link"
  }, "\uB808\uBCA8 1 \uCE90\uC2DC"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dual-core"
  }), `\uB4C0\uC5BC \uCF54\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7 \uC2DC\uB9AC\uC988\uC5D0\uB294 \uB4C0\uC5BC \uCF54\uC5B4 \uB77C\uC778\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Arm\xAE Cortex\xAE-M7 \uCF54\uC5B4\uC640 Cortex\xAE-M4 \uCF54\uC5B4\uB294 \uAC01\uAC01 \uCD5C\uB300 480 MHz\uC640 240 MHz\uB97C \uC2E4\uD589\uD560 \uC218 \uC788\uC5B4 \uB354 \uB9CE\uC740 \uD504\uB85C\uC138\uC2F1\uACFC \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD30C\uD2F0\uC154\uB2DD\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB0B4\uC7A5\uD615 SMPS\uC5D0\uB294 \uB3D9\uC801 \uC804\uB825 \uD6A8\uC728\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uB4C0\uC5BC \uCF54\uC5B4 STM32H7 \uC81C\uD488 \uB77C\uC778\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB450 \uBC88\uC9F8 Cortex\xAE-M4\uB294 \uADF8\uB9AC\uAE30/\uADF8\uB798\uD53D \uC791\uC5C5\uC744 \uC704\uD574 M7 \uCF54\uC5B4\uB97C \uC5F4\uC5B4\uC11C \uACFC\uB3C4\uD55C \uACC4\uC0B0 \uC791\uC5C5\uC744 \uB5A0\uB118\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uB4C0\uC5BC \uCF54\uC5B4 MCU\uC758 \uACBD\uC6B0, \uD2B9\uC815 \uCEE8\uD14D\uC2A4\uD2B8\uC5D0 \uB300\uD574 TouchGFX \uC0DD\uC131\uAE30\uB97C \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uB2E8\uC77C \uB3D9\uC2DC \uCEE8\uD14D\uC2A4\uD2B8\uB9CC \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../touchgfx-hal-development/touchgfx-generator",
    mdxType: "Link"
  }, "TouchGFX \uC0DD\uC131\uAE30 \uC0AC\uC6A9\uC790 \uAC00\uC774\uB4DC"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "bus-architecture"
  }), `\uBC84\uC2A4 \uC544\uD0A4\uD14D\uCC98`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB300\uB2E4\uC218\uC758 STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB294 \uBAA8\uB4E0 \uB9C8\uC2A4\uD130(CPU, DMA \uB4F1)\uC640 \uC2AC\uB808\uC774\uBE0C(\uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC, RAM, FSMC, AHB \uBC0F APB \uC8FC\uBCC0 \uC7A5\uCE58)\uB97C \uC0C1\uD638 \uC5F0\uACB0\uD558\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `32\uBE44\uD2B8 \uBA40\uD2F0 AHB`), ` \uBC84\uC2A4 \uB9E4\uD2B8\uB9AD\uC2A4 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC5EC\uB7EC \uAC1C\uC758 \uACE0\uC18D \uC8FC\uBCC0 \uC7A5\uCE58\uAC00 \uB3D9\uC2DC\uC5D0 \uC791\uB3D9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uC6D0\uD65C\uD558\uACE0 \uD6A8\uC728\uC801\uC778 \uC6B4\uC601\uC774 \uBCF4\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA40\uD2F0 AHB \uC0C1\uD638 \uC5F0\uACB0 \uC678\uC5D0\uB3C4 \uC77C\uBD80 STM32(Cortex\xAE-M7) \uC81C\uD488\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `64\uBE44\uD2B8`), ` AXI\uAC00 \uB0B4\uC7A5\uB418\uC5B4 \uC788\uC5B4 \uB300\uC5ED\uD3ED\uC744 \uD655\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC131\uB2A5\uACFC \uC804\uB825 \uC18C\uBAA8\uB7C9\uC744 \uCD5C\uC801\uC758 \uC0C1\uD0DC\uB85C \uC870\uC728\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "price"
  }), `\uAC00\uACA9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\uC758 \uAC00\uACA9\uC740 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC758 \uD06C\uAE30, \uB0B4\uBD80 RAM, \uADF8\uB9AC\uACE0 \uD328\uD0A4\uC9C0\uC5D0 \uC81C\uACF5\uB418\uB294 \uD540\uC758 \uAC1C\uC218\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uC778\uD130\uD398\uC774\uC2A4, \uD574\uC0C1\uB3C4, \uC131\uB2A5 \uB4F1\uC758 \uC694\uAD6C \uC0AC\uD56D\uC744 \uACE0\uB824\uD558\uC5EC \uC801\uD569\uD55C MCU\uB97C \uCC3E\uACE0 \uAC00\uACA9\uC744 \uCD94\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uAD6C\uB9E4 \uAC00\uB2A5\uD55C STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB294 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
    mdxType: "Link"
  }, "STM32 32\uBE44\uD2B8 Arm Cortex MCU"), "\uC5D0\uC11C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);