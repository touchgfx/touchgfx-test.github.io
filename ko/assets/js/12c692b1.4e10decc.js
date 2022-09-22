"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5987],{

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

/***/ 46206:
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
  id: "running-without-rtos",
  title: "TouchGFX Board Setup \uAE30\uBC18\uC5D0\uC11C RTOS \uC5C6\uC774 \uC2E4\uD589\uD558\uAE30"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/running-without-rtos",
  "id": "development/scenarios/running-without-rtos",
  "title": "TouchGFX Board Setup \uAE30\uBC18\uC5D0\uC11C RTOS \uC5C6\uC774 \uC2E4\uD589\uD558\uAE30",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/running-without-rtos.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/running-without-rtos",
  "permalink": "/4.20/ko/docs/development/scenarios/running-without-rtos",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "running-without-rtos",
    "title": "TouchGFX Board Setup \uAE30\uBC18\uC5D0\uC11C RTOS \uC5C6\uC774 \uC2E4\uD589\uD558\uAE30"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD2B8\uB9AC\uAC70 \uC5ED\uD560\uC744 \uD558\uB294 \uC678\uBD80 \uC774\uBCA4\uD2B8",
    "permalink": "/4.20/ko/docs/development/scenarios/example-gpio"
  },
  "next": {
    "title": "STM32CubeMX \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD30C\uC77C \uCD94\uAC00",
    "permalink": "/4.20/ko/docs/development/scenarios/adding-files-to-stm32cubemx-projet"
  }
};
const assets = {};

const toc = [{
  value: "TouchGFX Board Setup\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791\uD558\uAE30",
  id: "starting-a-project-from-a-touchgfx-board-setup",
  level: 2
}, {
  value: "\uBC31\uB77C\uC774\uD2B8 \uCF1C\uAE30",
  id: "turning-on-the-backlight",
  level: 3
}, {
  value: "\uCF54\uB4DC \uC0AD\uC81C\uD558\uAE30",
  id: "cleaning-the-code",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX Designer\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 ST \uAC1C\uBC1C \uD0A4\uD2B8 \uC911 \uD558\uB098\uC5D0\uC11C TouchGFX Board Setup \uAE30\uBC18\uC5D0\uC11C \uC6B4\uC601 \uCCB4\uC81C \uC5C6\uC774 TouchGFX \uD504\uB85C\uC81D\uD2B8\uB97C \uC2E4\uD589\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4. STM32CubeMX\uB098 STM32CubeIDE\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uCEE4\uC2A4\uD140 \uD504\uB85C\uC81D\uD2B8\uB294 \uC774 \uC139\uC158\uC5D0\uC11C \uB2E4\uB8E8\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "starting-a-project-from-a-touchgfx-board-setup"
  }), `TouchGFX Board Setup\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uB300\uBD80\uBD84\uC758 TouchGFX Board Setup\uC5D0\uC11C\uB294 OS FreeRTOS\uAC00 \uAE30\uBCF8\uC801\uC73C\uB85C \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uC6B4\uC601 \uCCB4\uC81C \uC5C6\uC774 \uC2E4\uD589\uD558\uB824\uBA74 \uBA87 \uB2E8\uACC4\uB97C \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 STM32H7B3-DK \uBCF4\uB4DC\uC5D0 TouchGFX Board Setup\uC744 \uC0AC\uC6A9\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `STM32H7B3-DK \uBCF4\uB4DC\uC5D0 TouchGFX Board Setup\uC744 \uC0AC\uC6A9\uD574 TouchGFX Designer \uD504\uB85C\uC81D\uD2B8\uB97C \uB9CC\uB4E4\uACE0 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `STM32CubeMX\uB97C \uC0AC\uC6A9\uD574 \uC81C\uACF5\uB418\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.ioc`), ` \uD30C\uC77C\uC744 \uC5FD\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `STM32CubeMX \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Middleware`), ` -> `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `FreeRTOS`), ` \uC124\uC815\uC73C\uB85C \uC774\uB3D9\uD55C \uD6C4 FreeRTOS\uB97C \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/running-without-rtos/disable-freertos-stm32cubemx-417.png",
    mdxType: "Figure"
  }, "STM32H7B3-DK\uC5D0 \uB300\uD55C STM32CubeMX\uC758 FreeRTOS \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "turning-on-the-backlight"
  }), `\uBC31\uB77C\uC774\uD2B8 \uCF1C\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\uC5D0\uC11C\uB294 \uB300\uCCB4\uB85C \uB514\uC2A4\uD50C\uB808\uC774 \uBC31\uB77C\uC774\uD2B8\uAC00 \uCC98\uC74C\uBD80\uD130 \uAEBC\uC838 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC720\uB294 \uBCF4\uB4DC\uB97C \uCC98\uC74C \uC2E4\uD589\uD558\uC5EC \uBD80\uD305\uD560 \uB54C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uAE00\uB9AC\uCE58\uAC00 \uBC1C\uC0DD\uD558\uB294 \uAC83\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574\uC11C\uC600\uC2B5\uB2C8\uB2E4. \uC774\uD6C4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXHAL.cpp`), `(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target`), ` \uD3F4\uB354 \uC544\uB798)\uC5D0 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `taskEntry()`), ` \uD568\uC218\uC5D0\uC11C \uCCAB \uBC88\uC9F8 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uC900\uBE44 \uB418\uBA74 \uBC31\uB77C\uC774\uD2B8\uAC00 \uCF1C\uC9D1\uB2C8\uB2E4. \uD558\uC9C0\uB9CC OS \uC5C6\uC774 \uC2E4\uD589\uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `taskEntry()`), ` \uD568\uC218\uAC00 \uD638\uCD9C\uB418\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uB354\uB77C\uB3C4 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uCF1C\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uB54C\uB294 LTDC_HSYNC \uD540\uACFC VSYNC \uD540\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `HIGH`), `\uB85C \uC124\uC815\uD558\uBA74 \uC2DC\uC791\uD560 \uB54C \uBC31\uB77C\uC774\uD2B8\uAC00 \uCF1C\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 4
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `System Core`), ` -> `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `GPIO`), ` \uC139\uC158\uC5D0 \uC788\uB294 GPIO \uC124\uC815\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774 \uBC31\uB77C\uC774\uD2B8\uC5D0 \uC5F0\uACB0\uB41C \uD540\uC744 \uCC3E\uC544 GPIO \uCD9C\uB825 \uB808\uBCA8\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `HIGH`), `\uB85C \uC124\uC815\uD569\uB2C8\uB2E4. STM32H7B3-DK \uBCF4\uB4DC\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `PA1`), `(User label: LCD_BL_CTRL)\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `PA2`), `(User label: LCD_ON/OFF)\uAC00 \uD540\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/running-without-rtos/set-pins-high-417.png",
    mdxType: "Figure"
  }, "STM32H7B3-DK\uC5D0\uC11C \uBC31\uB77C\uC774\uD2B8 \uCF1C\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 5
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `STM32CubeMX\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD55C \uB2E4\uC74C TouchGFX Designer\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cleaning-the-code"
  }), `\uCF54\uB4DC \uC0AD\uC81C\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC640 TouchGFX Generator\uB294 "USER CODE" \uC139\uC158\uC5D0 \uC788\uC744 \uACBD\uC6B0 RTOS \uD568\uC218\uC758 \uC7A0\uC7AC\uC801 \uD638\uCD9C \uCF54\uB4DC\uB97C \uC0AD\uC81C\uD558\uC9C0 \uBABB\uD569\uB2C8\uB2E4. \uC774\uB54C\uB294 \uCF54\uB4DC\uB97C \uC218\uB3D9\uC73C\uB85C \uC0AD\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC, STM32H7B3-DK TBS\uC5D0 \uD55C\uD574\uC11C \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uB97C \uC218\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 6
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uD504\uB85C\uC81D\uD2B8\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target`), ` \uD3F4\uB354\uC5D0 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `STM32TouchController.cpp`), ` \uD30C\uC77C\uC744 \uC5FD\uB2C8\uB2E4. if \uBB38\uC5D0 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#include <cmsis_os.h>`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `configASSERT(0)`), `\uB97C \uC9C1\uC811 \uC0AD\uC81C\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Core/src`), ` \uD3F4\uB354\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Freertos.c`), ` \uD30C\uC77C\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 \uBCF4\uB4DC\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uD50C\uB798\uC2F1\uD558\uB824\uBA74 \uBA3C\uC800 OS \uAD00\uB828 \uC885\uC18D\uC131\uACFC \uACBD\uB85C\uB97C \uC0AD\uC81C\uD558\uAC70\uB098 \uC8FC\uC11D \uCC98\uB9AC\uD558\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gcc`), ` \uD3F4\uB354\uC5D0 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Makefile`), `\uC744 \uC0AD\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4. \uB610\uD55C \uB3C4\uAD6C \uCCB4\uC778/IDE\uB97C \uC0AC\uC6A9\uD55C \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uB978 \uD504\uB85C\uC81D\uD2B8\uC758 OS \uAD00\uB828 \uC885\uC18D \uAD00\uACC4\uC640 \uACBD\uB85C\uAE4C\uC9C0 \uBAA8\uB450 \uC0AD\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C TouchGFX Board Setup\uC5D0\uC11C \uC2DC\uC791\uB41C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB3C4 OS \uC5C6\uC774 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);