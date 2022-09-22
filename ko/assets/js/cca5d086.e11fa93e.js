"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1611],{

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

/***/ 9543:
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
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70814);
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
  id: "scenarios-ltdc-parallel-rgb",
  title: "LTDC/Parallel RGB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "title": "LTDC/Parallel RGB",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-ltdc-parallel-rgb",
    "title": "LTDC/Parallel RGB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/ko/docs/category/scenarios"
  },
  "next": {
    "title": "FMC \uBC0F SPI \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"
  }
};
const assets = {};



const toc = [{
  value: "\uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4",
  id: "display-interface",
  level: 3
}, {
  value: "STM32CubeMX\uC5D0\uC11C \uC124\uC815 \uC77D\uAE30",
  id: "reading-settings-from-stm32cubemx",
  level: 2
}, {
  value: "TouchGFX \uB4DC\uB77C\uC774\uBC84/VSYNC \uC2E0\uD638",
  id: "touchgfx-driver--vsync-signal",
  level: 2
}, {
  value: "LTDC Frame Buffer configuration",
  id: "ltdc-frame-buffer-configuration",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC7A5\uCC29\uB41C MCU(\uC608: STM32F429, STM32F746, STM32H7)\uC758 \uACBD\uC6B0, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Generator`), `\uB294 \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uD53D\uC140\uC744 \uC804\uC1A1\uD558\uB3C4\uB85D LTDC\uB97C \uAD6C\uC131\uD558\uB294 HAL\uC758 \uBD80\uBD84\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0DD\uC131\uB41C \uCF54\uB4DC\uB294 \uC62C\uBC14\uB978 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1\uC744 \uAC1C\uC2DC\uD558\uACE0, LTDC\uC5D0\uC11C VSYNC \uC778\uD130\uB7FD\uD2B8\uAC00 \uBC1C\uC0DD\uD558\uBA74\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync()`), `\uB97C \uD638\uCD9C\uD558\uC5EC TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uC758 \uCC28\uB2E8\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-interface"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uAC00 LTDC\uC5D0 \uB300\uD55C \uC804\uCCB4 \uB4DC\uB77C\uC774\uBE0C\uB97C \uC9C1\uC811 \uAD6C\uD604\uD574\uC57C \uD558\uB294 "Custom" \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC640 \uB2EC\uB9AC, TouchGFX Generator\uB294 LTDC \uAD6C\uC131\uC744 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 TouchGFX HAL\uC5D0 \uD544\uC694\uD55C \uBAA8\uB4E0 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB97C \uD1B5\uD574 "Parallel RGB(LTDC)"\uB97C \uC120\uD0DD \uAC00\uB2A5\uD55C \uC635\uC158\uC73C\uB85C \uB9CC\uB4E4\uB824\uBA74 STM32CubeMX \uBC94\uC8FC \uBAA9\uB85D\uC758`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, ` Multimedia`), `\xA0\uADF8\uB8F9\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `LTDC`), `\uAC00 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-modes.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\uAC00 \uD65C\uC131\uD654\uB418\uBA74 TouchGFX Generator\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Display`), ` \uC139\uC158\uC744 \uD1B5\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Parallel  RGB(LTDC)`), `\xA0\uC635\uC158\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/display-if-options.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uB97C \uD1B5\uD574 LTDC\uB97C \uD65C\uC131\uD654\uD55C \uD6C4\uC5D0\uB3C4 \uB2E4\uC74C\uC744 \uC704\uD574\uC11C\uB294 \uBA87 \uAC00\uC9C0 \uC791\uC5C5\uC774 \uD544\uC694\uD569\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uC5F0\uACB0\uB41C \uB514\uC2A4\uD50C\uB808\uC774 \uC0AC\uC591\uACFC \uC77C\uCE58\uD558\uB3C4\uB85D LTDC(GPIO \uBC0F \uD0C0\uC774\uBC0D) \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uC6D0\uD558\uB294 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0AC\uC591\uACFC \uC77C\uCE58\uD558\uB3C4\uB85D LTDC \uAD6C\uC131`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB294 STM32CubeMX\uC5D0\uC11C \uB2E4\uC591\uD55C \uAD6C\uC131\uC744 \uC77D\uC5B4\uC640\uC11C \uACBD\uACE0, \uAD8C\uC7A5 \uC0AC\uD56D, \uC624\uB958 \uB4F1 \uC77C\uBA85 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC885\uC18D\uC131`), `\uC774\uB77C\uACE0 \uD558\uB294 \uC694\uC18C\uC758 \uBAA9\uB85D\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC544\uB798 \uADF8\uB9BC\uC740 \uC5B4\uB5A4 MCU(\uC774 \uC608\uC5D0\uC11C\uB294 F429 \uC0AC\uC6A9)\uC5D0\uC11C\uB4E0 CubeMX\uC5D0\uC11C LTDC\uB97C \uCC98\uC74C \uD65C\uC131\uD654\uD560 \uB54C \uC874\uC7AC\uD558\uB294 \uC885\uC18D\uC131\uC758 \uBAA9\uB85D\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/ltdc-dependencies.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "STM32CubeMX\uB97C \uD1B5\uD574 LTDC\uAC00 \uD65C\uC131\uD654\uB418\uB294 \uC989\uC2DC LTDC \uAD8C\uC7A5 \uC0AC\uD56D, \uACBD\uACE0 \uBC0F \uC624\uB958\uAC00 TouchGFX Generator \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC885\uC18D\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC124\uBA85`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uACC4\uCE35 \uC218`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX\uB294 \uB2E8\uC77C \uACC4\uCE35\uB9CC \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 2\uAC1C\uC758 \uACC4\uCE35\uC774 \uD65C\uC131\uD654\uB41C \uC0C1\uD0DC\uC5D0\uC11C \uC791\uB3D9\uD560 \uC218 \uC788\uC9C0\uB9CC, \uC774 \uACBD\uC6B0 LTDC\uC5D0\uC11C \uAD6C\uC131 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC74C\uC744 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC54C\uB9AC\uB294 \uACBD\uACE0\uAC00 \uBC1C\uD589\uB429\uB2C8\uB2E4. LTDC \uBE14\uB85D\uC5D0\uC11C \uACC4\uCE35 \uC218\uB97C \uBCC0\uACBD\uD558\uC2ED\uC2DC\uC624.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCC3D \uC704\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uAE30\uBCF8\uC801\uC73C\uB85C LTDC \uACC4\uCE35\uC5D0\uC11C Horizontal \uBC0F Vertical \uCC3D \uC704\uCE58\uB294 \uAC01\uAC01 0\uC785\uB2C8\uB2E4. \uCC3D\uC758 Horizontal \uBC0F Vertical \uB05D \uAC12\uC740 \uB514\uC2A4\uD50C\uB808\uC774 \uCE58\uC218\uC640 \uB3D9\uC77C\uD558\uAC8C \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Alpha Constant\uB294 0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC \uACC4\uCE35\uC758 \uC54C\uD30C \uC0C1\uC218(alpha constant)\uB294 0\uC73C\uB85C \uAE30\uBCF8 \uC124\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD56D\uC0C1 \uC804\uC5ED \uC54C\uD30C\uB97C \uC720\uC9C0\uD560 \uC758\uB3C4\uAC00 \uC544\uB2C8\uB77C\uBA74 0 \uC774\uC0C1\uC73C\uB85C \uC124\uC815\uD574\uC57C \uD558\uACE0 \uB418\uB3C4\uB85D\uC774\uBA74 255\uB85C \uC124\uC815\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Multimedia \uC139\uC158\uC5D0\uC11C LTDC \uC8FC\uBCC0 \uC7A5\uCE58\uB97C \uD65C\uC131\uD654\uD55C \uC774\uD6C4\uC5D0 Parallel RGB(LTDC) \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC2E4\uC81C\uB85C \uC120\uD0DD\uD574\uC57C \uD55C\uB2E4\uB294 \uC810\uC5D0 \uC720\uC758\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/dependencies.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uADF8\uB9BC\uC740 TouchGFX Generator \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C Dependencies \uADF8\uB8F9\uC774 \uC0AC\uB77C\uC9C0\uB294 \uC6D0\uC778\uC774 \uB420 \uC218 \uC788\uB2E4\uB294 \uACBD\uACE0 \uC870\uAC74\uC744 \uCDA9\uC871\uD558\uB294 LTDC \uAD6C\uC131\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "reading-settings-from-stm32cubemx"
  }), `STM32CubeMX\uC5D0\uC11C \uC124\uC815 \uC77D\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB97C \uD1B5\uD574 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Parallel RGB(LTDC)`), `\uB97C \uC120\uD0DD\uD558\uBA74 \uD504\uB808\uC784 \uBC84\uD37C\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `width\xA0`), `\uC640\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `height`), `\uAC00 LTDC \uAD6C\uC131`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\xA0horizontal start/stop `), `\uBC0F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\xA0vertical start/stop`), `\uC5D0\uC11C \uC0C1\uC18D\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-window-position.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uBC0F \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD06C\uAE30\uC5D0 \uB530\uB77C Layer\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `0`), `\uC758 \uD06C\uAE30\uB97C \uC815\uC758\uD558\uBA74\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Dependency`), `\xA0\uCC3D\uC758 \uC0C8 \uC5D4\uD2B8\uB9AC\uAC00 \uB098\uD0C0\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/dependency-ltdc-image.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Framebuffer\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Image Width\xA0`), `\uBC0F\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Image Height`), `\uAC00 \uC2E4\uC81C \uC6D0\uD558\uB294 \uCC3D\uC758 \uD06C\uAE30\uC640 \uC77C\uCE58\uD558\uB294\uC9C0 \uD655\uC778\uD558\uBA74 \uACBD\uACE0 \uC870\uAC74\uC744 \uCDA9\uC871\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config-fixed.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "LTDC\uAC00 \uD65C\uC131\uD654\uB41C \uACBD\uC6B0, TouchGFX Generator\uB294 LTDC \uAD6C\uC131\uC5D0\uC11C\xA0", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Width"), "\xA0\uBC0F\xA0", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Height\xA0"), "\uAC12\uC744 \uC0C1\uC18D\uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC\xA0", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Width"), "\xA0\uC640\xA0", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "Height"), "\uB294 TouchGFX Generator \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uC5EC\uC804\uD788 \uC218\uC815\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uAC12\uC744 \uBCC0\uACBD\uD558\uAC8C \uB418\uBA74 Window LTDC \uACC4\uCE35 \uAD6C\uC131\uC5D0 \uB9DE\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uAD6C\uC131 \uBD88\uC77C\uCE58\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-driver--vsync-signal"
  }), `TouchGFX \uB4DC\uB77C\uC774\uBC84/VSYNC \uC2E0\uD638`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Parallel RGB(LTDC)`), `\uAC00 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB85C \uC120\uD0DD\uB418\uBA74 \uAC1C\uBC1C\uC790\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `LTDC`), `\xA0Application Tick Driver \uB610\uB294 TouchGFX \uB4DC\uB77C\uC774\uBC84\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4 \uAD8C\uD55C\uC744 \uD68D\uB4DD\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/ltdc-application-tick-source.png",
    width: "500",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uCF54\uB4DC\uB294 LTDC \uAD6C\uC131\uC5D0 \uB530\uB77C \uC0DD\uC131\uB41C LTDC \uC778\uD130\uB7FD\uD2B8\uC5D0 \uB300\uD55C \uC778\uD130\uB7FD\uD2B8 \uD578\uB4E4\uB7EC(STM32F7) \uC785\uB2C8\uB2E4. \uC0DD\uC131\uB41C \uD578\uB4E4\uB7EC\uB294 TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uC758 \uCC28\uB2E8\uC744 \uC790\uB3D9\uC73C\uB85C \uD574\uC81C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11}",
    "{11}": true
  }), `extern "C"
irq void LTDC_IRQHandler(void)
{
    if (LTDC->ISR & 1)
    {
        LTDC->ICR = 1;
        if (LTDC->LIPCR == (LTDC->AWCR & 0x7FF) - 1)
        {
            //entering active area
            OSWrappers::signalVSync();
        }
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "LTDC \uB4DC\uB77C\uC774\uBC84\uB97C \uC791\uB3D9\uC2DC\uD0A4\uB824\uBA74 \uC0AC\uC6A9\uC790\uAC00 LTDC NVIC \uC124\uC815 \uB610\uB294 Global NVIC \uC124\uC815\uC744 \uD1B5\uD574 LTDC \uC804\uC5ED \uC778\uD130\uB7FD\uD2B8\uB97C \uD65C\uC131\uD654\uD558\uACE0, \uD578\uB4E4\uB7EC \uCF54\uB4DC\uC758 \uC0DD\uC131\uB3C4 \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/touchgfx-generator/nvic-global-interrupt-enable.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "ltdc-frame-buffer-configuration"
  }), `LTDC Frame Buffer configuration`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The generated TouchGFX HAL will automatically configure the LTDC Layer Color Frame Buffer Start Address at runtime, so you should not set a value in LTDC configuration.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\uACB0\uB860`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB97C \uD1B5\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Parallel RGB(LTDC)\xA0`), `\uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4 \uC635\uC158\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uD544\uC694\uD55C \uBAA8\uB4E0 HAL \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX LTDC \uAD6C\uC131\uC5D0 \uB530\uB77C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB108\uBE44, \uB192\uC774 \uBC0F \uD53D\uC140 \uD615\uC2DD\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. LTDC \uACC4\uCE35\uC758\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `width`), `\xA0\uC640\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `height`), `\uB294 TouchGFX Designer\uC5D0\uC11C \uCE94\uBC84\uC2A4 \uD06C\uAE30\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uBA70, LTDC \uD53D\uC140 \uD615\uC2DD\uC740 \uD544\uC694\uD55C TouchGFX \uD504\uB808\uC784 \uBC84\uD37C \uB4DC\uB77C\uC774\uBC84\uB97C \uBE44\uB86F\uD574 \uC0DD\uC131\uB41C \uC790\uC0B0\uC758 \uD615\uC2DD\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LTDC \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD2F1 \uC18C\uC2A4\uB97C \uC120\uD0DD\uD574\uC11C TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB97C \uAD6C\uB3D9\uD558\uB3C4\uB85D \uD578\uB4E4\uB7EC\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C LTDC \uAD6C\uC131\uC5D0\uC11C \uAC1C\uBC1C\uC790\uB294 \uC81C\uACF5\uB41C Application Tick Driver\uB97C \uD56D\uC0C1 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);