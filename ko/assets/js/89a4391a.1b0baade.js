"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6311],{

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

/***/ 70814:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
}));
class Caution extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-caution)",
      header: "Caution",
      type: "caution",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Caution);


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

/***/ 52452:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37793);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70814);
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
  id: "scenarios-fmc",
  title: "FMC \uBC0F SPI \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "title": "FMC \uBC0F SPI \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-fmc.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-fmc",
    "title": "FMC \uBC0F SPI \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4"
  },
  "sidebar": "docs",
  "previous": {
    "title": "LTDC/Parallel RGB",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"
  },
  "next": {
    "title": "Framebuffer Strategies",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"
  }
};
const assets = {};




const toc = [{
  value: "\uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1",
  id: "transferring-the-framebuffer",
  level: 2
}, {
  value: "FMC",
  id: "fmc",
  level: 3
}, {
  value: "HAL::flushFrameBuffer()\uC5D0\uC11C \uBC18\uD658",
  id: "returning-from-halflushframebuffer",
  level: 2
}, {
  value: "TouchGFX Driver/Te(Tearing Effect) \uC2E0\uD638",
  id: "touchgfx-driver--tearing-effect-signal",
  level: 2
}, {
  value: "\uACB0\uB860",
  id: "conclusion",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC2DC\uB098\uB9AC\uC624\uB4E4\uC740 \uC77C\uBC18\uC801\uC73C\uB85C FMC \uB610\uB294 SPI\uB97C \uD1B5\uD574 \uC5F0\uACB0\uB41C LCD\uC5D0 \uD53D\uC140\uC744 \uC804\uC1A1\uD558\uB294 \uB2E8\uACC4\uB4E4\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uB450 \uBC29\uBC95\uC740 \uBA87 \uAC00\uC9C0 \uC694\uC18C\uB4E4\uC744 \uACF5\uC720\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0 \uAE30\uC220\uB41C \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C\uB294 \uC608\uC99D\uC744 \uC704\uD574 ST7789H2 LCD \uCEE8\uD2B8\uB864\uB7EC\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC758 \uBCF4\uB4DC \uC0AC\uC591\uC5D0 \uB530\uB77C FMC \uB610\uB294 SPI\uAC00 \uAD6C\uC131\uB418\uACE0 \uB098\uBA74, \uAC1C\uBC1C\uC790\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC5C5\uB370\uC774\uD2B8\uB41C \uBD80\uBD84\uC744 \uC5F0\uACB0\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD558\uB294 \uCF54\uB4DC\uB97C \uC791\uC131\uD560 \uC218 \uC788\uB3C4\uB85D TouchGFX Generator\uB97C \uC0AC\uC6A9\uD574 TouchGFX HAL\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uADF8\uB9BC\uC5D0\uB294 Custom Display Interface\uAC00 \uC120\uD0DD\uB41C TouchGFX Generator \uAD6C\uC131\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC740 \uAC1C\uBC1C\uC790\uAC00 \uD53D\uC140\uC744 \uAD6C\uC131\uD558\uC5EC \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC218\uB3D9`), `\uC73C\uB85C \uC804\uC1A1\uD558\uAE30\uB97C \uC6D0\uD55C\uB2E4\uB294 \uAC83\uC744 TouchGFX Generator\uC5D0\uAC8C \uC54C\uB824 \uC8FC\uACE0 \uC774\uB97C \uC218\uD589\uD558\uAE30 \uC704\uD55C \uD578\uB4E4\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/custom-interface.png",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX Generator \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "SPI\uB97C \uD1B5\uD574 \uC5F0\uACB0\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0, \uB9DE\uCDA4\uD615 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C \uC784\uBCA0\uB514\uB4DC GRAM\uC774 \uC7A5\uCC29\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0\uC5D0\uB294 \uC0DD\uC131\uB41C TouchGFX HAL\uC5D0\uC11C \uC0AC\uC6A9\uC790\uAC00 \uC791\uC131\uD55C \uCF54\uB4DC\uAC00 \uB2E4\uC74C \uB2E8\uACC4\uB97C \uC218\uD589\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uB2E4\uC2DC \uADF8\uB9AC\uAC8C \uB420 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC601\uC5ED\uC5D0 \uB530\uB77C "display cursor"\uC640 "active window"\uB97C \uC774 \uC601\uC5ED\uACFC \uC77C\uCE58\uD558\uB294 GRAM\uC758 \uC704\uCE58\uB85C \uC62E\uAE41\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `GRAM\uC5D0 \uC785\uB825\uB418\uB294 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD560 \uC900\uBE44\uB97C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD53D\uC140 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "transferring-the-framebuffer"
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC601\uC5ED\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uBA74 TouchGFX Engine\uC5D0\uC11C\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer(Rect r)`), `\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uAC00 SPI \uBC0F FMC\uC758 \uACBD\uC6B0\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uD53D\uC140\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC218\uB3D9\uC73C\uB85C \uC804\uC1A1\uD558\uB294 \uCF54\uB4DC\uB97C \uAD6C\uD604\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uD568\uC218\uB97C \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC55E\uC73C\uB85C \uC0B4\uD3B4\uBCF4\uACA0\uC9C0\uB9CC, FMC \uBC45\uD06C\uB97C \uD1B5\uD574 \uD53D\uC140\uC744 \uC804\uC1A1\uD558\uB294 \uD568\uC218\uB294 TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC774 \uC139\uC158\uC5D0 \uB098\uC640 \uC788\uB294 ST7789H2\uB97C \uC704\uD55C \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC\uB294 \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5 \uB2E8\uACC4\uC5D0\uC11C \uAC1C\uBC1C\uB418\uC5C8\uACE0, \uC77C\uB2E8 \uC791\uB3D9\uC774 \uB418\uBA74 \uB300\uAC1C\uB294 TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB41C HAL \uD074\uB798\uC2A4\uC5D0 \uBCF5\uC0AC\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4DC\uB77C\uC774\uBC84\uB294 \uD53D\uC140\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD558\uACE0 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uBA54\uBAA8\uB9AC \uC791\uC131 \uC704\uCE58\uB97C \uC81C\uC5B4\uD560 \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uB370\uC774\uD130\uC2DC\uD2B8\uB97C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)
{
    /* Set Cursor */
    ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);

    /* Prepare to write to LCD RAM */
    __ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);

    /* Send Pixels - User defined function */
    this->copyFrameBufferBlockToLCD(rect);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ST7789H2_SetDisplayWindow`), ` \uD568\uC218\uB294 GRAM\uC744 \uC0AC\uC6A9\uD574  \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 \uD2B9\uC815 \uB808\uC9C0\uC2A4\uD130\uC5D0 \uAE30\uB85D\uD558\uB294 \uBC29\uBC95\uC73C\uB85C GRAM\uC758 \uAC00\uC0C1 "\uCEE4\uC11C"\uC5D0 \uB300\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `x`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `y`), ` \uC88C\uD45C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-c"
  }), `extern "C"
void ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)
{
    uint8_t   parameter[4];

    /* CASET: Column Address Set */
    parameter[0] = 0x00;
    parameter[1] = Xpos;
    parameter[2] = 0x00;
    parameter[3] = Xpos + Width - 1;
    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);

    /* RASET: Row Address Set */
    parameter[0] = 0x00;
    parameter[1] = Ypos;
    parameter[2] = 0x00;
    parameter[3] = Ypos + Height - 1;
    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::copyFrameBufferBlockToLCD`), ` \uD568\uC218\uB294 \uC774 \uC608\uC2DC\uC5D0\uC11C \uD55C \uBC88\uC5D0 \uD55C \uC904\uC758 \uC5C5\uB370\uC774\uD2B8\uB41C \uC601\uC5ED(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Rect`), `)\uC744 \uC804\uC1A1\uD558\uACE0 \uC774\uC5D0 \uB530\uB77C \uD504\uB808\uC784 \uBC84\uD37C \uD3EC\uC778\uD130\uAC00 \uC9C4\uD589\uB418\uB3C4\uB85D \uC0AC\uC6A9\uC790\uAC00 \uC815\uC758\uD55C \uD568\uC218\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect& rect)
{
    __IO uint16_t* ptr;
    uint32_t height;

    // This can be accelerated using regular DMA hardware
    for (height = 0; height < rect.height ; height++)
    {
        ptr = getClientFrameBuffer() + rect.x + (height + rect.y) * HAL::DISPLAY_WIDTH;
        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB294`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` ptr`), `\uC744 \uC218\uB3D9\uC73C\uB85C \uC804\uC9C4\uC2DC\uD0A4\uB294 \uB300\uC2E0, \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Rect`), `\uC758 \uC704\uCE58\uC5D0 \uB530\uB77C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ptr`), `\uC744 \uC804\uC9C4\uC2DC\uD0A4\uB3C4\uB85D `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `advanceFrameBufferToRect\xA0`), `\uD568\uC218\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `inline uint8_t* TouchGFXGeneratedHAL::advanceFrameBufferToRect(uint8_t* fbPtr, const touchgfx::Rect& rect) const
{
    //       Advance vertically                   Advance horizontally
    fbPtr += rect.y * lcd().framebufferStride() + rect.x * 2;
    return fbPtr;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "fmc"
  }), `FMC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C, TouchGFX Generator\uB294 FMC \uBC45\uD06C\uAC00 \uD558\uB098 \uC774\uC0C1 \uC62C\uBC14\uB974\uAC8C \uAD6C\uC131\uB41C \uACBD\uC6B0\uC5D0 FMC \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB3C4 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0, TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uD55C \uCF54\uB4DC\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC5F0\uACB0\uB41C FMC \uBC45\uD06C\uB97C \uD1B5\uD574 \uC0C1\uD638 \uC791\uC6A9\uC744 \uD558\uB3C4\uB85D `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD_IO_WriteMultipleData`), ` \uD568\uC218\uAC00 \uC0DD\uC131\uB41C\uB2E4\uB294 \uC810\uC744 \uC81C\uC678\uD558\uACE0  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uB9DE\uCDA4\uD615`), ` \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uCF54\uB4DC\uC640 \uBE44\uC2B7\uD569\uB2C8\uB2E4.  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `copyFrameBufferBlockToLCD`), ` \uD568\uC218\uC5D0 \uB300\uD574 \uC55E\uC11C \uBCF4\uC5EC\uB4DC\uB9B0 \uCF54\uB4DC\uB97C \uB2E4\uC2DC \uBC29\uBB38\uD558\uBA74 \uC0DD\uC131\uB41C \uD568\uC218\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uB294 \uAC83\uC744 \uD655\uC778\uD558\uAC8C \uB420 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "SPI \uBC0F FMC \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4 \uBAA8\uB450\uC5D0\uC11C \uAC1C\uBC1C\uC790\uB294 1) \uCEE4\uC11C \uC124\uC815, 2) GRAM\uC5D0 \uC4F0\uAE30 \uC900\uBE44, 3) \uB9DE\uCDA4\uD615 SPI \uB514\uC2A4\uD50C\uB808\uC774 \uB4DC\uB77C\uC774\uBC84\uB098 \uC0DD\uC131\uB41C FMC \uBC45\uD06C \uD568\uC218\uB97C \uD1B5\uD55C \uD53D\uC140 \uC804\uC1A1\uC744 \uC704\uD574 flushFrameBuffer() \uD568\uC218\uB97C \uC218\uC815\uD558\uAC8C \uB429\uB2C8\uB2E4. "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-c"
  }), `    __weak void LCD_IO_WriteMultipleData(uint16_t* pData, uint32_t Size)
    {
        uint32_t  i;

        for (i = 0; i < Size; i++)
        {
            FMC_BANK1_WriteData(pData[i]);
        }
    }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uADF8\uB9BC\uC740 FMC \uBC45\uD06C 2(\uB458 \uC911 \uD558\uB098 \uC0AC\uC6A9 \uAC00\uB2A5)\uC758 \uC720\uD6A8\uD55C 16\uBE44\uD2B8(\uD544\uC218) \uAD6C\uC131\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration.png",
    width: "600",
    noShadow: false,
    mdxType: "Figure"
  }, "FMC \uBC45\uD06C \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC720\uD6A8\uD55C \uAD6C\uC131\uC774 \uCDA9\uC871\uB418\uBA74 TouchGFX Generator\uC5D0\uC11C \uC774 \uBC45\uD06C\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. MCU\uC5D0 \uB300\uD55C FMC \uBC45\uD06C \uB808\uC9C0\uC2A4\uD130\uC758 \uC2DC\uC791 \uC8FC\uC18C\uB97C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/fmc-interface-selection.png",
    width: "500",
    noShadow: false,
    mdxType: "Figure"
  }, "FMC \uC778\uD130\uD398\uC774\uC2A4 \uC120\uD0DD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB294 FMC \uBC45\uD06C\uC758 \uAD6C\uC131\uC744 \uD655\uC778\uD558\uACE0 \uD655\uC778\uD55C \uBB38\uC81C\uB97C \uBCF4\uACE0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration-8bit.png",
    noShadow: false,
    mdxType: "Figure"
  }, "FMC \uAD6C\uC131 \uC624\uB958"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "returning-from-halflushframebuffer"
  }), `HAL::flushFrameBuffer()\uC5D0\uC11C \uBC18\uD658`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD568\uC218\uAC00 \uAC12\uC744 \uBC18\uD658\uD558\uBA74 TouchGFX Engine\uC740 \uACC4\uC18D\uD574\uC11C \uD504\uB808\uC784\uC758 \uB098\uBA38\uC9C0 \uBD80\uBD84\uC744 \uADF8\uB9BD\uB2C8\uB2E4. DMA\uB97C \uC0AC\uC6A9\uD574 \uD53D\uC140\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD558\uACE0 \uC2F6\uC740 \uAC1C\uBC1C\uC790\uB294 \uC608\uB97C \uB4E4\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `DMA Completed`), `\xA0\uC778\uD130\uB7FD\uD2B8\uC5D0 \uC758\uD574 \uC2DC\uADF8\uB110\uB9C1\uB41C \uC138\uB9C8\uD3EC\uC5B4\uC5D0\uC11C \uB300\uAE30\uB97C \uD558\uB294 \uBC29\uC2DD\uC73C\uB85C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` HAL::flushFrameBuffer(Rect& rect)`), `\uAC00 \uAC12\uC744 \uC989\uC2DC \uBC18\uD658\uD558\uC9C0 \uC54A\uB3C4\uB85D \uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC758 \uC758\uC0AC \uCF54\uB4DC\uB294 DMA\uAC00 \uC0AC\uC6A9\uB418\uB294 \uACBD\uC6B0\uC5D0\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer()`), `\uB97C \uAD6C\uC131\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC608\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uC774 \uCF54\uB4DC\uB294 FreeRTOS \uC138\uB9C8\uD3EC\uC5B4\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `screen_frame_buffer_sem`), `\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)
{
    uint16_t* fb = HAL::lockFrameBuffer();

    //Prepare display: Set cursor, write to display gram as described previously in this scenario

    //Try to take a display semaphore - Always free at this point
    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);

    //Set up DMA
    screenDMAEnable();

    // Wait for the DMA transfer to complete
    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);

    //Unlock framebuffer and give semaphore back
    HAL::unlockFrameBuffer();
    xSemaphoreGive(screen_frame_buffer_sem);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB41C FMC \uCF54\uB4DC\uB294 DMA\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-driver--tearing-effect-signal"
  }), `TouchGFX Driver/Te(Tearing Effect) \uC2E0\uD638`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 TouchGFX Generator \uAD6C\uC131\uC5D0\uC11C \uC54C \uC218 \uC788\uB4EF\uC774 \uC784\uBCA0\uB514\uB4DC TFT \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC7A5\uCC29\uB418\uC9C0 \uC54A\uC740 MCU\uC5D0\uC11C \uBCF4\uD1B5 \uADF8\uB7EC\uD558\uB4EF "Application Tick Source" \uC5ED\uC2DC "Custom"\uC73C\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AL(Abstraction Layer) \uC544\uD0A4\uD14D\uCC98 \uC139\uC158\uC5D0\uC11C \uC124\uBA85\uD588\uB4EF\uC774 TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB294 \uBCF4\uD1B5 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC2DC\uADF8\uB110\uB9C1\uC774 \uC218\uD589\uB420 \uB54C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync()`), `\uB97C \uD638\uCD9C\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uCC28\uB2E8\uC774 \uD574\uC81C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2DC\uB9AC\uC5BC \uB610\uB294 8080 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAC16\uCD98 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0, \uBCF4\uD1B5 \uC784\uBCA0\uB514\uB4DC \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC\uAC00 MCU\uC758 GPIO\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC788\uB294 TE(Tearing Effect) \uC2E0\uD638\uB97C \uBC1C\uC0DD\uC2DC\uD0B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0, \uC77C\uBC18\uC801\uC73C\uB85C GPIO\uAC00 \uC2DC\uADF8\uB110\uB9C1\uB420 \uB54C \uC778\uD130\uB7FD\uD2B8\uB97C \uC0DD\uC131\uD558\uB3C4\uB85D MCU\uAC00 \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C "Tearing Effect" \uC778\uD130\uB7FD\uD2B8\uB294 \uB2E4\uC74C \uD504\uB808\uC784\uC744 \uB80C\uB354\uB9C1\uD558\uB3C4\uB85D TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uC758 \uCC28\uB2E8\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4. \uBC18\uB4DC\uC2DC STM32CubeMX\uC758 \uD540\uC5D0 \uB300\uD55C \uC678\uBD80 \uC778\uD130\uB7FD\uD2B8\uB97C \uC785\uB825\uD558\uACE0 \uD65C\uC131\uD654\uD558\uB3C4\uB85D GPIO\uB97C \uAD6C\uC131\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C"
void TE_Handler(void)
{
    ...
    /* Unblock TouchGFX Engine Main Loop to render next frame */
    OSWrappers::signalVSync();
    ...
}

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\uACB0\uB860`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB97C \uD1B5\uD574`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, ` Custom `), `Display Interface\uB97C \uC120\uD0DD\uD55C\uB2E4\uB294 \uAC83\uC740 \uAC1C\uBC1C\uC790\uAC00 \uC9C1\uC811 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uD53D\uC140\uC744 \uC804\uC1A1\uD558\uB3C4\uB85D \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uACA0\uB2E4\uB294 \uC758\uC0AC\uB97C \uD45C\uD604\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC601\uC5ED\uC744 \uB80C\uB354\uB9C1\uD55C \uC774\uD6C4\uC5D0 TouchGFX\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uD638\uCD9C\uB418\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL::flushFrameBuffer(Rect& rect)`), `\xA0\uD568\uC218\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uB294 \uC601\uD5A5\uC744 \uBC1B\uB294 \uD53D\uC140\uC744 \uB514\uC2A4\uD50C\uB808\uC774, SPI, FMC \uB4F1\uC5D0 \uC804\uC1A1\uD558\uB294 \uB370 \uC774 \uD568\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7FC\uC5D0\uB3C4 \uBD88\uAD6C\uD558\uACE0, \uB450 \uACBD\uC6B0 \uBAA8\uB450 \uC544\uB798\uC758 \uB2E8\uACC4\uB4E4\uC744 \uC644\uB8CC\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uB2E4\uC2DC \uADF8\uB9AC\uAC8C \uB420 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC601\uC5ED\uC5D0 \uB530\uB77C "display cursor"\uC640 "active window"\uB97C \uC774 \uC601\uC5ED\uACFC \uC77C\uCE58\uD558\uB294 GRAM\uC758 \uC704\uCE58\uB85C \uC62E\uAE41\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `GRAM\uC5D0 \uC785\uB825\uB418\uB294 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD560 \uC900\uBE44\uB97C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD53D\uC140 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD569\uB2C8\uB2E4. FMC \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uACBD\uC6B0, \uAC1C\uBC1C\uC790\uB97C \uC704\uD574 \uC774 \uD568\uC218\uAC00 \uC790\uB3D9 \uC0DD\uC131\uB418\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `flushFrameBuffer(Rect& rect)`), ` \uB0B4\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC774 \uBB38\uC11C\uC758 \uC55E\uBD80\uBD84 \uCC38\uC870).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uB9DE\uCDA4\uD615`), ` \uB610\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FMC`), ` \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC120\uD0DD\uD558\uB824\uBA74 \uAC1C\uBC1C\uC790\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync()`), `\uC5D0 \uC2E0\uD638\uB97C \uC804\uC1A1\uD558\uB3C4\uB85D \uB9DE\uCDA4\uD615 TouchGFX Application Tick \uB4DC\uB77C\uC774\uBC84\uB97C \uAD6C\uD604\uD558\uC5EC TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uC5D0 \uB300\uD55C \uCC28\uB2E8\uC744 \uD574\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4.  \uC77C\uBC18\uC801\uC73C\uB85C TFT \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC7A5\uCC29\uB418\uC9C0 \uC54A\uC740 MCU\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uB294 MCU\uC5D0 \uC5F0\uACB0\uB41C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TE `), `\uC2E0\uD638\uB97C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);