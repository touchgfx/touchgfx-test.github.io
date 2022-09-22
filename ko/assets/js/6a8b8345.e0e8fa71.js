"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1184],{

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

/***/ 47331:
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
  id: "scenarios-spi",
  title: "SPI"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-spi",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-spi",
  "title": "SPI",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-spi.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-spi",
  "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-spi",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-spi",
    "title": "SPI"
  }
};
const assets = {};

const toc = [{
  value: "\uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1",
  id: "transfering-the-framebuffer",
  level: 2
}, {
  value: "flushFrameBuffer\uC5D0\uC11C \uBC18\uD658",
  id: "returning-from-flushframebuffer",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC2DC\uB098\uB9AC\uC624\uB294 SPI\uB97C \uC0AC\uC6A9\uD574 TouchGFX Generator\uC5D0\uC11C "Custom" \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC120\uD0DD\uD560 \uB54C TouchGFX \uB4DC\uB77C\uC774\uBC84 \uC0DD\uC131\uACFC \uAD00\uB828\uB41C \uB2E8\uACC4\uB4E4\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB2E8\uACC4\uB4E4\uC740 MCU\uC5D0 \uC784\uBCA0\uB514\uB4DC \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC7A5\uCC29\uB418\uC9C0 \uC54A\uC740 \uB2E4\uB978 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uB2E8\uACC4\uB4E4\uACFC \uB3D9\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uB2E8 STM32CubeMX\uC5D0\uC11C SPI \uC8FC\uBCC0 \uC7A5\uCE58\uAC00 \uAD6C\uC131\uB418\uBA74 TouchGFX Generator\uC5D0\uC11C "Custom" \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC774\uC6A9\uD574 HAL\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uAC1C\uBC1C\uC790\uB294 \uC9C1\uC811 \uC791\uC131\uD55C \uB3C5\uC810 \uB4DC\uB77C\uC774\uBC84\uB97C \uC0AC\uC6A9\uD574 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC5C5\uB370\uC774\uD2B8\uB41C \uBD80\uBD84\uC744 \uC5F0\uACB0\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB9BC X\uB294 Custom \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC120\uD0DD\uD558\uBA74 \uC0DD\uC131\uB41C \uCF54\uB4DC\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC5C5\uB370\uC774\uD2B8\uB41C \uBD80\uBD84\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uB420 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 TouchGFX Generator \uAD6C\uC131\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/scenarios/custom-interface.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uD504\uB85C\uC81D\uD2B8 \uD65C\uB3D9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C, 8080 \uB610\uB294 SPI \uB514\uC2A4\uD50C\uB808\uC774 \uAC19\uC774 \uC784\uBCA0\uB514\uB4DC GRAM\uC774 \uC7A5\uCC29\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0\uC5D0\uB294 \uB4DC\uB77C\uC774\uBC84\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC774 \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uB2E4\uC2DC \uADF8\uB9AC\uACE0\uC790 \uD558\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC601\uC5ED\uC744 \uAE30\uC900\uC73C\uB85C \uC774\uC640 \uC77C\uCE58\uD558\uB294 GRAM\uC758 \uD55C \uC7A5\uC18C\uB85C "\uB514\uC2A4\uD50C\uB808\uC774 \uCEE4\uC11C"\uB97C \uC774\uB3D9\uC2DC\uD0B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `GRAM\uC5D0 \uC785\uB825\uB418\uB294 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD560 \uC900\uBE44\uB97C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD53D\uC140 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "transfering-the-framebuffer"
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC601\uC5ED\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uBA74 TouchGFX Engine\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer`), `\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Engine\uC5D0\uC11C \uB098\uC628 \uC2E0\uD638(S?)\uC5D0 \uBC18\uC751\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)
{
    /* Set Cursor */
    __ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);

    /* Prepare to write to LCD RAM */
    ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);

    /* Send Pixels */
    this->copyFrameBufferBlockToLCD(rect);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC758`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\xA0__ST7789H2_SetDisplayWindow\xA0`), `\uD568\uC218\uB294 GRAM\uC744 \uC0AC\uC6A9\uD558\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uBCF4\uD1B5 \uADF8\uB7EC\uD558\uB4EF\uC774 \uD2B9\uC815 \uB808\uC9C0\uC2A4\uD130\uC5D0 \uAE30\uB85D\uD558\uC5EC GRAM\uC758 \uAC00\uC0C1 "cursor"\uC5D0 \uB300\uD55C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` x`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `y`), ` \uC88C\uD45C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-c"
  }), `extern "C"
void __ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)
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
  }, `TouchGFXHAL::copyFrameBufferBlockToLCD `), `\uD568\uC218\uB294 \uC5C5\uB370\uC774\uD2B8\uB41C \uC601\uC5ED(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Rect`), `)\uC758 \uB77C\uC778\uC744 \uD55C\uBC88\uC5D0 \uD558\uB098\uC529 \uC804\uC1A1\uD558\uACE0 \uD504\uB808\uC784 \uBC84\uD37C \uD3EC\uC778\uD130\uB97C \uADF8\uC5D0 \uB9DE\uAC8C \uC9C4\uD589\uB418\uAC8C \uD558\uB294 \uBE44\uACF5\uAC1C \uD568\uC218\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect rect)
{
    __IO uint16_t* ptr;
    uint32_t height;

    // Use default implementation (CPU copy!).
    // This can be accelerated using regular DMA hardware
    for (height = 0; height < rect.height ; height++)
    {
        ptr = getClientFrameBuffer() + rect.x + (height + rect.y)  * BSP_LCD_GetXSize();
        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "returning-from-flushframebuffer"
  }), `flushFrameBuffer\uC5D0\uC11C \uBC18\uD658`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD568\uC218\uAC00 \uBC18\uD658\uB418\uBA74 TouchGFX Engine\uC740 \uD574\uB2F9 \uD568\uC218\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4. DMA\uB97C \uC0AC\uC6A9\uD574 \uC804\uC1A1\uC744 \uD558\uACE0 \uC2F6\uC740 \uAC1C\uBC1C\uC790\uB294 DMA Completed \uC778\uD130\uB7FD\uD2B8\uC5D0\uC11C \uC2E0\uD638\uAC00 \uC804\uC1A1\uB418\uB294 \uC138\uB9C8\uD3EC\uC5B4\uC5D0\uC11C \uB300\uAE30\uD568\uC73C\uB85C\uC368 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer(Rect& rect)`), `\uAC00 \uBC18\uD658\uB418\uC9C0 \uC54A\uB3C4\uB85D \uD574\uC57C \uD569\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);