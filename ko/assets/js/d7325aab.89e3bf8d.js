"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4475],{

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

/***/ 6771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Video extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "videoWrapper"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
      controls: true
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
      src: this.props.url,
      type: "video/mp4"
    }))));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Video);


/***/ }),

/***/ 4680:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6771);
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
  id: "lowering-memory-usage-with-partial-framebuffer",
  title: "\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9 \uC808\uAC10"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "id": "development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "title": "\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9 \uC808\uAC10",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/lowering-memory-usage-with-partial-framebuffer.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "permalink": "/4.20/ko/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "lowering-memory-usage-with-partial-framebuffer",
    "title": "\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9 \uC808\uAC10"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX on NeoChrom",
    "permalink": "/4.20/ko/docs/development/scenarios/touchgfx-on-gpu2d"
  },
  "next": {
    "title": "\uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0 \uC800\uC7A5",
    "permalink": "/4.20/ko/docs/development/scenarios/using-non-memory-mapped-flash"
  }
};
const assets = {};



const toc = [{
  value: "\uD480 \uC0AC\uC774\uC988 \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC",
  id: "full-size-frame-buffer-memory",
  level: 2
}, {
  value: "\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC",
  id: "partial-frame-buffer-memory",
  level: 2
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774 \uAE68\uC9D0 \uD604\uC0C1",
  id: "display-tearing",
  level: 2
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774 \uC5C5\uB370\uC774\uD2B8 \uC608\uC81C",
  id: "display-update-example",
  level: 2
}, {
  value: "\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uAD6C\uC131",
  id: "configuring-partial-frame-buffers",
  level: 2
}, {
  value: "\uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD654\uBA74\uC73C\uB85C \uC804\uC1A1",
  id: "transferring-frame-buffers-to-the-screen",
  level: 2
}, {
  value: "X-NUCLEO-GFX01M1 SPI \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1",
  id: "transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display",
  level: 3
}, {
  value: "DSI \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1",
  id: "transferring-frame-buffers-on-dsi-display",
  level: 3
}, {
  value: "SPI \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1",
  id: "transferring-frame-buffers-on-spi-display",
  level: 3
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uD074\uB85D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC608\uB85C \uB4E4\uC5B4 \uC57D\uAC04\uC758 \uC131\uB2A5 \uC800\uD558\uB97C \uAC10\uC218\uD558\uACE0 \uBA54\uBAA8\uB9AC \uC694\uAD6C \uC0AC\uD56D\uC744 \uB0AE\uCD94\uAE30 \uC704\uD574 \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAD6C\uC131 \uBC0F \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC124\uBA85\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32L4R9Discovery \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C \uC2E4\uD589\uB418\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB300\uD55C \uB3D9\uC601\uC0C1\uC740 \uC544\uB798\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Video__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Partial%20framebuffer/Partial%20framebuffer.mp4",
    mdxType: "Video"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "full-size-frame-buffer-memory"
  }), `\uD480 \uC0AC\uC774\uC988 \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C \uD504\uB808\uC784 \uBC84\uD37C\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBAA8\uB4E0 \uD53D\uC140\uC744 \uC218\uC6A9\uD560 \uB9CC\uD07C \uCDA9\uBD84\uD55C \uC6A9\uB7C9\uC744 \uAC16\uCD98 \uB300\uD615 \uBA54\uBAA8\uB9AC \uBC30\uC5F4\uC785\uB2C8\uB2E4. \uD574\uC0C1\uB3C4\uAC00 480 x 272\uC778 24\uBE44\uD2B8 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uACBD\uC6B0, \uD480 \uC0AC\uC774\uC988 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC6A9\uB7C9\uC740 480 x 272 x 3\uBC14\uC774\uD2B8 = 391.680\uBC14\uC774\uD2B8\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uB450 \uAC1C("\uC774\uC911 \uBC84\uD37C\uB9C1") \uB0B4\uC9C0 \uC138 \uAC1C\uAE4C\uC9C0 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uCD1D \uBA54\uBAA8\uB9AC \uC694\uAD6C \uC0AC\uD56D\uC740 783.360\uBC14\uC774\uD2B8 \uBC0F 1.175.040\uBC14\uC774\uD2B8\uAC00 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 UI\uC758 \uC5B4\uB5A4 \uBD80\uBD84\uC744 \uADF8\uB9B4 \uB54C \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uD53D\uC140 \uAC12\uC744 \uAE30\uB85D\uD569\uB2C8\uB2E4. \uBAA8\uB4E0 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC774 \uC644\uB8CC\uB41C \uD6C4\uC5D0\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4. \uBCF4\uD1B5 UI\uC758 \uC77C\uBD80\uB9CC \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uC804\uCCB4 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uB2E4\uC218\uC758 \uC18C\uD615 \uBE14\uB85D\uC5D0\uC11C \uC5C5\uB370\uC774\uD2B8\uD55C \uD6C4 \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC5C5\uB370\uC774\uD2B8 1, \uC5C5\uB370\uC774\uD2B8 2, \uC5C5\uB370\uC774\uD2B8 3, ..., \uC5C5\uB370\uC774\uD2B8 N, \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uACBD\uC6B0\uC5D0 \uB530\uB77C \uD2B9\uD788 \uC678\uBD80 RAM\uC774 \uC5C6\uB294 \uC800\uAC00 \uC194\uB8E8\uC158\uC5D0\uC11C\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB098\uBA38\uC9C0 \uBD80\uBD84\uC774 \uD504\uB808\uC784 \uBC84\uD37C\uC640 \uD568\uAED8 \uB0B4\uBD80 RAM\uC5D0 \uB4E4\uC5B4\uAC08 \uC218 \uC788\uC744 \uB9CC\uD07C \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uCDA9\uBD84\uD788 \uC791\uC544\uC57C \uD569\uB2C8\uB2E4. \uC774\uB7F0 \uC810\uC5D0\uC11C\uB294 \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uC720\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "partial-frame-buffer-memory"
  }), `\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD558\uBA74 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD480 \uC0AC\uC774\uC988\uBCF4\uB2E4 \uC791\uC740 \uBA87 \uAC1C\uC758 \uD504\uB808\uC784 \uBC84\uD37C\uB85C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC218\uC640 \uD06C\uAE30\uB294 \uAD6C\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774 \uAE30\uBC95\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBA54\uBAA8\uB9AC \uC694\uAD6C \uC0AC\uD56D\uC744 \uC0C1\uB2F9 \uBD80\uBD84 \uB0AE\uCD9C \uC218 \uC788\uC9C0\uB9CC, \uB2E4\uC74C\uACFC \uAC19\uC740 \uBA87 \uAC00\uC9C0 \uC81C\uC57D\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB294 \uB0B4\uC7A5 \uBA54\uBAA8\uB9AC\uAC00 \uC788\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C\uB9CC \uC791\uB3D9\uD569\uB2C8\uB2E4. \uBCF4\uD1B5\uC740 DSI \uB514\uC2A4\uD50C\uB808\uC774\uB098, \uBCD1\uB82C \uBC84\uC2A4 \uC5F0\uACB0(DBI \uC720\uD615 A/B, 8080/6800) \uB610\uB294 SPI \uBC84\uC2A4 \uC5F0\uACB0\uC774 \uC788\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC791\uB3D9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBCF5\uC7A1\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uAE68\uC9D0 \uD604\uC0C1\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD574 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uBAA8\uB4E0 \uD53D\uC140\uC744 \uD45C\uC2DC\uD558\uAE30 \uBCF4\uB2E4\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uB354 \uC791\uC740 \uBD80\uBD84\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC774 \uBB38\uC11C\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uD074\uB85D \uC608\uC81C\uC5D0\uC11C\uB294 \uAC01\uAE30 11.700\uBC14\uC774\uD2B8\uC758 \uD504\uB808\uC784 \uBC84\uD37C \uC138 \uAC1C\uAC00 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uBA54\uBAA8\uB9AC \uC810\uC720 \uACF5\uAC04\uC740 35.100\uBC14\uC774\uD2B8\uAC00 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C UI\uC758 \uC77C\uBD80\uB97C \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD560 \uB54C\uB9C8\uB2E4 TouchGFX\uB294 \uAD6C\uC131\uB41C \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD558\uACE0, \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uC644\uB8CC\uD55C \uB2E4\uC74C, \uD574\uB2F9 \uBD80\uBD84\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD569\uB2C8\uB2E4. \uB80C\uB354\uB9C1\uC774 \uD544\uC694\uD55C UI\uC758 \uBAA8\uB4E0 \uC601\uC5ED\uC5D0\uC11C \uC774 \uC791\uC5C5\uC774 \uBC18\uBCF5\uB429\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uB370\uC774\uD130 \uC5C5\uB370\uC774\uD2B8 \uBC0F \uC804\uC1A1 \uACF5\uC2DD\uC774 \uB2E4\uC74C\uACFC \uAC19\uC774 \uBCC0\uACBD\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Update1, Transfer1, Update2, Transfer2, Update3, Transfer3, ..., UpdateN, TransferN`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5B4\uB5A4 \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uC74C \uBC84\uD37C\uC758 \uC5C5\uB370\uC774\uD2B8\uAC00 \uC2E4\uD589\uB418\uB294 \uB3D9\uC548 \uD55C \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC804\uC1A1\uC774 \uC2E4\uD589\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-tearing"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uAE68\uC9D0 \uD604\uC0C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD480 \uC0AC\uC774\uC988 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0 \uBC18\uD574 \uBD80\uBD84 \uD504\uB808\uC784\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 TouchGFX\uAC00 \uC5C5\uB370\uC774\uD2B8 \uB418\uB294 \uC989\uC2DC UI\uC758 \uC77C\uBD80\uB97C \uC804\uC1A1\uD558\uAC8C \uB429\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uC8FC\uAE30\uC801\uC73C\uB85C \uC0C8\uB85C \uACE0\uCE68\uC774 \uB418\uC5B4\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0 \uCD5C\uB300 16ms(60fps \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0) \uD6C4\uC5D0 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uD45C\uBA74\uC5D0 \uC218\uC2E0\uB41C \uC5C5\uB370\uC774\uD2B8\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC774\uB85C \uC778\uD574 \uBAA8\uB4E0 \uC5C5\uB370\uC774\uD2B8\uAC00 \uC804\uC1A1\uB418\uAE30 \uC804\uC5D0 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C \uCCAB \uBC88\uC9F8 \uC5C5\uB370\uC774\uD2B8\uAC00 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uD45C\uC2DC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB9AC\uAE30 \uC791\uC5C5 \uBC0F \uC804\uC1A1\uC758 \uC804\uCCB4 \uC2DC\uD000\uC2A4\uB97C \uC644\uB8CC\uD558\uB294 \uB370 \uC2DC\uAC04\uC774 \uC624\uB798 \uAC78\uB9AC\uB294 \uACBD\uC6B0(> 16ms) \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC774\uC804 \uD504\uB808\uC784\uACFC \uC77C\uBD80 \uC0C8\uB85C\uC6B4 \uC5C5\uB370\uC774\uD2B8\uC758 \uC870\uD569\uC774 \uD45C\uC2DC\uB420 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uB514\uC2A4\uD50C\uB808\uC774 \uAE68\uC9D0 \uD604\uC0C1\uC774\uB77C\uACE0 \uD558\uBA70, \uC774\uB7EC\uD55C \uD604\uC0C1\uC774 \uBC1C\uC0DD\uD558\uB294 \uAC83\uC740 \uBC14\uB78C\uC9C1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC774\uC720\uB85C \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB294 \uB80C\uB354\uB9C1\uC5D0 \uC624\uB79C \uC2DC\uAC04\uC774 \uAC78\uB9AC\uB294 \uBCF5\uC7A1\uD55C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC0AC\uC6A9\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uB294 \uC801\uD569\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-update-example"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uC5C5\uB370\uC774\uD2B8 \uC608\uC81C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAD6C\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uAE30 \uC804\uC5D0 \uC6D0\uD638\uAC00 \uCD08 \uB2E8\uC704\uB85C \uC6C0\uC9C1\uC774\uB294 \uB514\uC9C0\uD138 \uC2DC\uACC4\uB97C \uC608\uB85C \uB4E4\uC5B4 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uB179\uC0C9 \uC6D0\uD638\uB294 \uCD08\uB2F9 6\uB3C4\uC529 \uC6C0\uC9C1\uC774\uBA70, 1\uBD84 \uD6C4\uC5D0 \uC644\uC804\uD788 \uD68C\uC804\uD569\uB2C8\uB2E4. \uC544\uB798 \uC774\uBBF8\uC9C0\uC5D0\uC11C\uC640 \uAC19\uC774 UI\uB294 4\uAC1C\uC758 \uC704\uC82F\uC73C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/shapes/line"
  }), `\uC120`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/shapes/circle"
  }), `\uC6D0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/miscellaneous/digital-clock"
  }), `\uB514\uC9C0\uD138 \uC2DC\uACC4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-development/ui-components/shapes/box"
  }), `Box`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/touchgfx-designer-with-widgets-4.17.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uB514\uC9C0\uD138 \uC2DC\uACC4\uC640 \uC6D0\uD638\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uCF54\uB4DC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{21-25}",
    "{21-25}": true
  }), `void MainView::handleTickEvent()
{
  ticks++;
  if (ticks == 10)
  {
      ticks = 0;
      secs += 1;
      if (secs == 60)  //increment minutes
      {
        secs = 0;
        min += 1;
        if (min == 60) //increment hours
        {
          min = 0;
          hour += 1;
          if (hour == 24)
          {
            hour = 0;
          }
        }
        //Only update digital clock when minutes or hours change
        digitalClock.setTime24Hour(hour, min, secs);
      }
    //Always update seconds
    circleSeconds.updateArc(secs*6 - 20, secs*6);
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC774\uBBF8\uC9C0\uB294 \uC6D0\uD638\uAC00 \uC0C1\uB2E8\uC5D0 \uC811\uADFC\uD558\uACE0 \uB514\uC9C0\uD138 \uC2DC\uACC4\uAC00 \uC5C5\uB370\uC774\uD2B8\uB420 \uB54C \uCC98\uC74C \uBA87 \uCD08 \uB3D9\uC548 \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uC601\uC5ED\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4(\uD68C\uC0C9 \uC9C1\uC0AC\uAC01\uD615). \uCC98\uC74C \uB450 \uD504\uB808\uC784\uC5D0\uC11C\uB294 \uCD08\uB9CC \uBCC0\uACBD\uB429\uB2C8\uB2E4(58\uCD08 \uBC0F 59\uCD08). \uC138 \uBC88\uC9F8 \uD504\uB808\uC784\uC5D0\uC11C 60\uCD08\uC5D0 \uB3C4\uB2EC\uD558\uBA74 \uC2DC\uC640 \uBD84 \uD14D\uC2A4\uD2B8\uAC00 \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-1.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-2.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-3.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-4.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC138 \uBC88\uC9F8 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uC5C5\uB370\uC774\uD2B8\uB41C \uC0AC\uAC01\uD615\uC740 154 x 60 \uD53D\uC140, 20 x 12 \uD53D\uC140 \uBC0F 33 x 8 \uD53D\uC140\uC785\uB2C8\uB2E4. \uD45C\uC900 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD560 \uB54C \uC774\uB7EC\uD55C \uC138 \uAC1C\uC758 \uC9C1\uC0AC\uAC01\uD615\uC774 \uC804\uCCB4 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uADF8\uB824\uC9C0\uACE0(\uC774\uC804 \uD53D\uC140 \uB36E\uC5B4\uC4F0\uAE30), \uB098\uC911\uC5D0 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4. \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD560 \uB54C \uC774\uB4E4 \uC138 \uAC1C\uC758 \uC9C1\uC0AC\uAC01\uD615\uC740 \uC790\uCCB4\uC758 \uC791\uC740 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uADF8\uB824\uC9C4 \uB2E4\uC74C, \uC989\uC2DC \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uB418\uC5B4 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "configuring-partial-frame-buffers"
  }), `\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB2E8\uACC4\uB97C \uAC70\uCCD0\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uBA54\uBAA8\uB9AC \uBC84\uD37C\uB97C \uC774\uC6A9\uD574 \uD504\uB808\uC784 \uBC84\uD37C \uD560\uB2F9\uC790 \uAC1D\uCCB4 \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD574\uB2F9 \uD560\uB2F9\uC790\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D TouchGFX HAL \uD074\uB798\uC2A4\uB97C \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uBC84\uD37C\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD558\uB294 \uCF54\uB4DC\uB97C \uC791\uC131`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\uB2E8\uACC4\uC640 2\uB2E8\uACC4\uB294 STM32CubeMX\uB97C \uD1B5\uD574 TouchGFX Generator\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uB294 \uBC18\uBA74, 3\uB2E8\uACC4\uB294 \uD53D\uC140\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD558\uB294 \uB3C5\uC810 \uB4DC\uB77C\uC774\uBC84\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/scenarios/touchgfx-on-lowcost-hardware/partial-strategy.png",
    width: "450",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uAD6C\uC131\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `// Block Allocator for Partial Framebuffer strategy
static ManyBlockAllocator<1920, /* block size */
                          3,    /* number of blocks */
                          2     /* bytes per pixel */
                          > blockAllocator;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD504\uB808\uC784 \uBC84\uD37C \uD560\uB2F9\uC790\uB294 \uC138 \uAC1C\uC758 \uBE14\uB85D(\uAC01\uAC01 1920\uBC14\uC774\uD2B8)\uC744 \uD560\uB2F9\uD569\uB2C8\uB2E4. TouchGFX HAL\uC740 \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5\uC744 \uC0AC\uC6A9\uD558\uBA70 \uBE14\uB85D \uD560\uB2F9\uC790\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uC790\uB3D9 \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-10}",
    "{8-10}": true
  }), `void TouchGFXGeneratedHAL::initialize()
{
    HAL::initialize();

    registerEventListener(*(Application::getInstance()));
    enableLCDControllerInterrupt();
    enableInterrupts();
    // Partial framebuffer strategy
    setFrameBufferAllocator(&blockAllocator);
    setFrameRefreshStrategy(HAL::REFRESH_STRATEGY_PARTIAL_FRAMEBUFFER);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uAD6C\uC131\uC5D0\uC11C\uB294 TouchGFX\uAC00 \uC791\uC740 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD560\uB2F9\uD558\uACE0 \uADF8 \uC548\uC5D0 UI\uB97C \uADF8\uB9BD\uB2C8\uB2E4. \uC774\uC81C \uB0A8\uC740 \uC791\uC5C5\uC740 \uC791\uC740 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800, \uC791\uC740 \uC6D0 \uC5C5\uB370\uC774\uD2B8\uB97C \uADF8\uB9AC\uAE30 \uC704\uD574 \uD560\uB2F9\uB41C \uB450 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC704\uCE58\uC640 \uD06C\uAE30\uB97C \uD655\uC778\uD569\uB2C8\uB2E4(\uC704\uC758 \uB450 \uBC88\uC9F8 \uC774\uBBF8\uC9C0).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC9C1\uC0AC\uAC01\uD615`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `x`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `y`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uB108\uBE44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uB192\uC774`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD53D\uC140`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC9C1\uC0AC\uAC01\uD615 1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `112`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `56`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `22`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `14`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `308 \uD53D\uC140 = 924 \uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC9C1\uC0AC\uAC01\uD615 2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `153`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `29`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `11`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `319 \uD53D\uC140 = 957 \uBC14\uC774\uD2B8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB450 \uC9C1\uC0AC\uAC01\uD615 \uBAA8\uB450 \uD06C\uAE30\uAC00 \uC791\uAE30 \uB54C\uBB38\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C \uD560\uB2F9\uC790\uAC00 \uD560\uB2F9\uD55C \uBE14\uB85D\uC5D0 \uB4E4\uC5B4\uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC138 \uBC88\uC9F8 \uC774\uBBF8\uC9C0\uC5D0\uB294 \uC6D0\uC5D0 \uB300\uD55C \uC791\uC740 \uC5C5\uB370\uC774\uD2B8\uC640 \uD14D\uC2A4\uD2B8\uB97C \uB36E\uB294 \uB354 \uD070 \uC9C1\uC0AC\uAC01\uD615 \uB4F1 \uC138 \uAC1C\uC758 \uC5C5\uB370\uC774\uD2B8\uB41C \uC9C1\uC0AC\uAC01\uD615\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC9C1\uC0AC\uAC01\uD615`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `x`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `y`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uB108\uBE44`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uB192\uC774`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD53D\uC140`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC9C1\uC0AC\uAC01\uD615 1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `126`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `51`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `20`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `12`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `240 \uD53D\uC140 = 720 \uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC9C1\uC0AC\uAC01\uD615 2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `165`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `33`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `264 \uD53D\uC140 = 792 \uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC9C1\uC0AC\uAC01\uD615 3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `118`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `165`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `154`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `60`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `9.240 \uD53D\uC140 = 27.720 \uBC14\uC774\uD2B8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC2DC \uB9D0\uD574, \uC9C1\uC0AC\uAC01\uD615 1\uACFC 2\uB294 \uB108\uBB34 \uC791\uC544\uC11C \uD504\uB808\uC784 \uBC84\uD37C \uD560\uB2F9\uC790\uAC00 \uD560\uB2F9\uD55C \uBE14\uB85D\uC5D0 \uB4E4\uC5B4\uAC08 \uC218 \uC788\uC9C0\uB9CC \uD504\uB808\uC784 \uBC84\uD37C 3\uC740 \uD06C\uAE30\uAC00 \uB108\uBB34 \uD07D\uB2C8\uB2E4. \uC774 \uC9C1\uC0AC\uAC01\uD615\uC740 \uD06C\uAE30\uAC00 \uB108\uBB34 \uCEE4\uC11C \uD504\uB808\uC784 \uBC84\uD37C(11,700\uBC14\uC774\uD2B8)\uC5D0 \uB4E4\uC5B4\uAC08 \uC218 \uC788\uB294 \uC5EC\uB7EC \uAC1C\uC758 \uC9C1\uC0AC\uAC01\uD615\uC73C\uB85C \uBD84\uD560\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C \uC6B0\uB9AC\uB294 \uC138 \uAC1C\uC758 \uC9C1\uC0AC\uAC01\uD615\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uC9C0\uB9CC, \uD560\uB2F9\uC790\uB294 \uB450 \uAC1C\uC758 \uBE14\uB85D\uB9CC \uAC16\uAC8C \uB429\uB2C8\uB2E4. \uC774 \uC0C1\uD669\uC5D0\uC11C TouchGFX\uB294 \uCCAB \uBC88\uC9F8 \uBE14\uB85D\uB4E4\uC774 \uC804\uC1A1\uB420 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB838\uB2E4\uAC00 \uBE14\uB85D\uC744 \uC7AC\uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "transferring-frame-buffers-to-the-screen"
  }), `\uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD654\uBA74\uC73C\uB85C \uC804\uC1A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC9C1\uC0AC\uAC01\uD615\uC744 \uB2E4\uC2DC \uADF8\uB824\uC57C \uD560 \uB54C FrameBufferAllocator\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uD560\uB2F9\uD569\uB2C8\uB2E4. \uBC84\uD37C\uC5D0 \uADF8\uB9AC\uAE30\uB97C \uD55C \uD6C4 TouchGFX\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBA54\uC11C\uB4DC\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void HAL::flushFrameBuffer(const Rect& rect);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD568\uC218\uB294 \uD654\uBA74\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC804\uC1A1\uD558\uB3C4\uB85D HAL \uD558\uC704 \uD074\uB798\uC2A4\uC5D0\uC11C \uC7AC\uC815\uC758\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uC791\uB3D9\uD558\uB824\uBA74 \uC774\uB7EC\uD55C \uD2B9\uBCC4\uD55C \uAD6C\uD604\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uB2E4\uC74C \uC139\uC158\uC5D0\uC11C\uB294 SPI \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uD3EC\uD568\uB41C STM32G071 \uD3C9\uAC00 \uD0A4\uD2B8 \uBC0F DSI \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uD3EC\uD568\uB41C STM32L4R9Discovery \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C \uC774\uB97C \uAD6C\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display"
  }), `X-NUCLEO-GFX01M1 SPI \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 X-Nucleo-GFX01M1 \uD655\uC7A5 \uBCF4\uB4DC\uAC00 \uD3EC\uD568\uB41C STM32G071 nucleo \uBCF4\uB4DC\uC5D0\uC11C TouchGFX \uBCF4\uB4DC\uB97C \uC124\uC815\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uD655\uC7A5 \uBCF4\uB4DC MB1642B\uC5D0\uB294 2.2\uC778\uCE58 240 x 320 SPI \uB514\uC2A4\uD50C\uB808\uC774\uC640 64MB\uC758 SPI NOR \uD50C\uB798\uC2DC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",
    width: "400px",
    mdxType: "Figure"
  }, "X-Nucleo-GFX01M1 \uD655\uC7A5 \uBCF4\uB4DC\uAC00 \uD3EC\uD568\uB41C Nucleo-G071RB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 TouchGFX \uBCF4\uB4DC \uC124\uC815\uC5D0\uC11C \uD504\uB808\uC784\uC6CC\uD06C\uC758 C++ \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uBE14\uB85D\uC744 \uAD00\uB9AC\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 TouchGFX \uBCF4\uB4DC \uC124\uC815\uC758 \uCF54\uB4DC\uAC00 \uC57D\uAC04 \uB354 \uC9E7\uC544\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uBCF4\uB4DC \uC124\uC815\uC740 TouchGFX Generator\uB97C \uC0AC\uC6A9\uD574 \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4. \uC774\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-hal-development/touchgfx-generator#display"
  }), `\uC5EC\uAE30`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC7A5 \uC911\uC694\uD55C \uBD80\uBD84\uC740 flushFrameBuffer \uD568\uC218\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)
{
    HAL::flushFrameBuffer(rect);
    // Try transmitting a block
    PartialFrameBufferManager::tryTransmitBlock();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `PartialFrameBufferManager`), ` \uD504\uB808\uC784\uC6CC\uD06C \uD074\uB798\uC2A4\uB97C \uD638\uCD9C\uD558\uC5EC \uBE14\uB85D\uC744 \uC804\uC1A1\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFXGeneratedHAL::endFrame \uD568\uC218\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `PartialFrameBufferManager`), `\uB97C \uD638\uCD9C\uD558\uBA74 \uB098\uBA38\uC9C0 \uBAA8\uB4E0 \uD504\uB808\uC784 \uBC84\uD37C \uBE14\uB85D\uB4E4\uB3C4 \uC804\uC1A1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `void TouchGFXGeneratedHAL::endFrame()
{
    // We must guard the next frame until we're done transferring all blocks over our display interface
    // through either a semaphore if user is running an OS or a simple variable if not
    PartialFrameBufferManager::transmitRemainingBlocks();

    HAL::endFrame();
    touchgfx::OSWrappers::signalRenderingDone();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `PartialFrameBufferManager`), `\uB294 \uC138 \uAC1C\uC758 \uD568\uC218\uB97C \uC0AC\uC6A9\uD574 \uB514\uC2A4\uD50C\uB808\uC774 \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC\uC640 \uC778\uD130\uB799\uC158\uC744 \uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD568\uC218\uB4E4\uC740 TouchGFX \uBCF4\uB4DC \uC124\uC815\uC5D0 \uAD6C\uD604\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-4,12-12,20-20}",
    "{4-4,12-12,20-20}": true
  }), `/**
 * Check if a Frame Buffer Block is beeing transmitted.
 */
__weak int transmitActive()
{
    return touchgfxDisplayDriverTransmitActive();
}

/**
 * Check if a Frame Buffer Block ending at bottom may be sent.
 */
__weak int shouldTransferBlock(uint16_t bottom)
{
    return touchgfxDisplayDriverShouldTransferBlock(bottom);
}

/**
 * Transmit a Frame Buffer Block.
 */
__weak void transmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)
{
    touchgfxDisplayDriverTransmitBlock(pixels, x, y, w, h);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uCF54\uB4DC\uB294 \uB2E8\uC21C\uD788 MB1642B \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC\uC5D0\uC11C C\uD568\uC218\uC5D0 \uD638\uCD9C\uC744 \uC804\uB2EC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MB1642BDisplayDriver.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int touchgfxDisplayDriverTransmitActive(void)
{
  return IsTransmittingBlock_;
}

void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)
{
  Display_Bitmap((uint16_t*)pixels, x, y, w, h);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC\uC758 \uAD6C\uD604\uC740 \uC0AC\uC6A9\uD558\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB530\uB77C \uCC9C\uCC28\uB9CC\uBCC4\uC785\uB2C8\uB2E4. MB1642B \uBAA8\uB4C8\uC758 \uACBD\uC6B0, SPI \uCE69 \uC120\uD0DD \uBC0F \uB370\uC774\uD130/\uBA85\uB839 \uBAA8\uB4DC\uB97C \uC81C\uC5B4\uD558\uB824\uBA74 \uB450 \uAC1C\uC758 GPIO\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC804\uC1A1 \uC0C1\uD0DC\uB294 \uD718\uBC1C\uC131 uint8`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `t \uBCC0\uC218\uC778 *IsTransmittingBlock`), `*\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAD6C\uD604\uB429\uB2C8\uB2E4. \uC804\uC1A1\uC774 \uC2DC\uC791\uB418\uACE0 DMA \uCF5C\uBC31\uC5D0\uC11C 0\uC73C\uB85C \uC124\uC815\uB420 \uACBD\uC6B0, \uC774 \uBCC0\uC218\uB294 1\uB85C \uC124\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MB1642BDisplayDriver.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void MB1642BDisplayDriver_DMACallback(void)
{
  /* Transfer Complete Interrupt management ***********************************/
  if ((0U != (DMA1->ISR & (DMA_FLAG_TC1))) && (0U != (hdma_spi1_tx.Instance->CCR & DMA_IT_TC)))
  {
    /* Disable the transfer complete and error interrupt */
    __HAL_DMA_DISABLE_IT(&hdma_spi1_tx, DMA_IT_TE | DMA_IT_TC);

    /* Clear the transfer complete flag */
    __HAL_DMA_CLEAR_FLAG(&hdma_spi1_tx, DMA_FLAG_TC1);

    IsTransmittingBlock_ = 0;

    ...

    // Signal Transfer Complete to TouchGFX
    DisplayDriver_TransferCompleteCallback();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C \uC54C \uC218 \uC788\uB4EF\uC774, DMA \uCF5C\uBC31\uC740 \uC804\uC1A1 \uC644\uB8CC \uCF5C\uBC31\uC744 \uD638\uCD9C\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 \uC0DD\uC131\uB41C HAL\uC5D0\uC11C \uAD6C\uD604\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C"
void DisplayDriver_TransferCompleteCallback()
{
    // After completed transmission start new transfer if blocks are ready.
    PartialFrameBufferManager::tryTransmitBlockFromIRQ();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `PartialFrameBufferManager`), `\uB97C \uD638\uCD9C\uD558\uBA74 \uAC00\uB2A5\uD55C \uACBD\uC6B0 \uC0C8\uB85C\uC6B4 \uC804\uC1A1\uC774 \uC2DC\uC791\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transferring-frame-buffers-on-dsi-display"
  }), `DSI \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32L4R9Discovery \uD3C9\uAC00 \uD0A4\uD2B8\uB294 DSI \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC77C\uBC18 HAL \uD074\uB798\uC2A4\uB294 STM32HAL_DSI(STM32HAL_DSI.cpp\uC5D0 \uC704\uCE58)\uB77C\uACE0 \uBD88\uB9BD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FrameBufferAllocator\uC5D0 \uBE14\uB85D\uC774 \uADF8\uB824\uC84C\uC74C\uC744 \uC54C\uB9AC\uAE30 \uC704\uD574 HAL::flushFrameBuffer \uBA54\uC11C\uB4DC\uB97C \uC7AC\uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3}",
    "{3-3}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const Rect& rect)
{
    frameBufferAllocator->markBlockReadyForTransfer();
    HAL::flushFrameBuffer(rect); //call normal implementation
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FrameBufferAllocator \uD558\uC704 \uD074\uB798\uC2A4 ManyBlockAllocator\uB294 \uBE14\uB85D\uC774 \uC804\uC1A1 \uC900\uBE44\uAC00 \uB418\uC5C8\uC744 \uB54C \uC804\uC5ED \uD568\uC218 FrameBufferAllocatorSignalBlockDrawn()\uC744 \uD638\uCD9C\uD558\uAC8C \uB429\uB2C8\uB2E4. \uC774 \uBA54\uC18C\uB4DC\uB294 \uBC18\uB4DC\uC2DC BSP \uACC4\uCE35\uC5D0 \uAD6C\uD604\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5}",
    "{5-5}": true
  }), `void FrameBufferAllocatorSignalBlockDrawn()
  {
    if (!dsiIsTransferring)
    {
      sendBlock();
    }
  }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DSI\uC5D0\uC11C \uC774\uBBF8 \uC804\uC1A1\uC774 \uC9C4\uD589\uB418\uACE0 \uC788\uC9C0 \uC54A\uB294 \uD55C, \uC774 \uD568\uC218\uB294 sendBlock \uD568\uC218\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C \uADF8\uB9B0 \uCCAB \uBC88\uC9F8 \uBE14\uB85D\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uACBD\uC6B0\uAC00 \uC808\uB300 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC804\uC1A1\uC774 \uC2DC\uC791\uB429\uB2C8\uB2E4. DSI \uC804\uC1A1\uC774 \uC5EC\uC804\uD788 \uC9C4\uD589 \uC911\uC778 \uC0C1\uD0DC\uC5D0\uC11C \uB2E4\uB978 \uBE14\uB85D \uADF8\uB9AC\uAE30\uAC00 \uC644\uB8CC\uB418\uBA74 \uD574\uB2F9 \uBE14\uB85D\uC740 "\uC804\uC1A1 \uC900\uBE44 \uC0C1\uD0DC"\uB85C \uC720\uC9C0\uB418\uACE0, \uB610 \uB2E4\uB978 \uC790\uC720 \uBE14\uB85D(\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uACBD\uC6B0)\uC5D0\uC11C \uADF8\uB9AC\uAE30\uAC00 \uACC4\uC18D\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DSI \uC804\uC1A1\uC774 \uC644\uB8CC\uB418\uBA74 \uB2E4\uB978 \uC9C1\uC0AC\uAC01\uD615\uC5D0\uC11C \uC7AC\uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D \uBA3C\uC800 \uC804\uC1A1\uB41C \uBE14\uB85D\uC758 \uC0AC\uC6A9\uC744 \uD574\uC81C\uD558\uACE0, \uB2E4\uC74C \uBE14\uB85D\uC774 \uC804\uC1A1\uD560 \uC900\uBE44\uAC00 \uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uAC83\uC740 \uBAA8\uB450 ER \uC778\uD130\uB7FD\uD2B8\uC5D0\uC11C \uC218\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-8,11-11}",
    "{8-8,11-11}": true
  }), `__irq void DSI_IRQHandler(void) {
  if (__HAL_DSI_GET_FLAG(&hdsi, DSI_IT_ER))
  {
    // End-of-refresh interrupt. Meaning last DSI transfer is complete
    __HAL_DSI_CLEAR_FLAG(&hdsi, DSI_IT_ER);
    if (dsiIsTransferring)
    {
      HAL::getInstance()->getFrameBufferAllocator()->freeBlockAfterTransfer();
      dsiIsTransferring = 0;
    }
    sendBlock(); //transfer next block if availble
  }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `sendBlock \uD568\uC218\uB294 \uB354 \uBCF5\uC7A1\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC804\uC1A1\uD558\uB3C4\uB85D LTDC \uBC0F DSI \uC8FC\uBCC0 \uC7A5\uCE58\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4. \uB610\uD55C \uC804\uC1A1\uB41C \uB370\uC774\uD130\uB97C \uB514\uC2A4\uD50C\uB808\uC774 \uBA54\uBAA8\uB9AC\uC758 \uC62C\uBC14\uB978 \uC704\uCE58\uC5D0 \uC800\uC7A5\uD558\uB3C4\uB85D \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4. \uCF54\uB4DC\uC758 \uC774 \uBD80\uBD84\uC740 \uD2B9\uC815 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. \uBA85\uB839 \uC0AC\uC591\uC740 \uB514\uC2A4\uD50C\uB808\uC774 \uB370\uC774\uD130 \uC2DC\uD2B8\uB97C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{18-18,40-40,51-51}",
    "{18-18,40-40,51-51}": true
  }), `static void sendBlock()
{
    FrameBufferAllocator* fbAllocator = HAL::getInstance()->getFrameBufferAllocator();

    //Is a block ready for transfer?
    if (fbAllocator->hasBlockReadyForTransfer())
    {
        Rect transfer_rect;
        const uint8_t* src = fbAllocator->getBlockForTransfer(transfer_rect);
        dsiIsTransferring = 1;

        //1. Setup LTDC and layer address and dimension
        //2. Configure display active area
        //3. Start DSI

        __HAL_DSI_WRAPPER_DISABLE(&hdsi);

        //1: Setup LTDC
        LTDC_Layer1->CFBAR = (uint32_t)src;

        const uint32_t width = transfer_rect.width;
        const uint32_t height = transfer_rect.height;

        LTDC->AWCR = ((width + 1) << 16) | (height + 1);
        LTDC->TWCR = ((width + 1 + 1) << 16) | (height + 1 + 1);

        const uint16_t layer_x0 = 2 + 0;
        const uint16_t layer_x1 = 2 + width - 1;
        LTDC_Layer1->WHPCR = (layer_x1 << 16) | layer_x0;

        const uint16_t layer_y0 = 2 + 0;
        const uint16_t layer_y1 = 2 + height - 1;
        LTDC_Layer1->WVPCR = (layer_y1 << 16) | layer_y0;

        LTDC_Layer1->CFBLR = ((width * 3) << 16) | (width * 3 + 3);
        LTDC_Layer1->CFBLNR = height;

        LTDC->SRCR = (uint32_t)LTDC_SRCR_IMR;

        //2: Configure display
        const int16_t x = transfer_rect.x + 4;
        const int16_t x2 = transfer_rect.x + 4 + width - 1;
        uint8_t InitParam1[4] = { (uint8_t)(x >> 8), (uint8_t)(x & 0xFF), (uint8_t)(x2 >> 8), (uint8_t)(x2 & 0xFF)};
        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_COLUMN_ADDRESS, InitParam1);

        const int16_t y = transfer_rect.y;
        const int16_t y2 = transfer_rect.y + height - 1;
        uint8_t InitParam2[4] = { (uint8_t)(y >> 8), (uint8_t)(y & 0xFF), (uint8_t)(y2 >> 8), (uint8_t)(y2 & 0xFF) };
        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_PAGE_ADDRESS, InitParam2);

        //3: Start DSI transfer
        __HAL_DSI_WRAPPER_ENABLE(&hdsi);
        HAL_DSI_Refresh(&hdsi);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "transferring-frame-buffers-on-spi-display"
  }), `SPI \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C1\uC0AC\uAC01\uD615\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD558\uB294 \uC6D0\uB9AC\uB294 DSI\uC640 \uB3D9\uC77C\uD558\uC9C0\uB9CC, \uBA87 \uAC00\uC9C0 \uC138\uBD80 \uC0AC\uD56D\uC774 \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800, \uC9C1\uC0AC\uAC01\uD615\uC774 \uADF8\uB824\uC9C8 \uB54C \uC9C4\uD589 \uC911\uC778 \uC804\uC1A1\uC774 \uC544\uC9C1 \uC5C6\uC73C\uBA74 \uC804\uC1A1\uC774 \uC2DC\uC791\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-4,10-10}",
    "{4-4,10-10}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)
{
    HAL::flushFrameBuffer(rect);
    frameBufferAllocator->markBlockReadyForTransfer();
    //start transfer if not running already!
    if (!LCDManager_IsTransmittingData())
    {
        touchgfx::Rect r;
        const uint8_t* pixels = frameBufferAllocator->getBlockForTransfer(r);
        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `LCDManager_SendFrameBufferBlockWithPosition`), ` \uD568\uC218\uB294 DMA\uB97C \uC0AC\uC6A9\uD574 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C SPI \uC804\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC804\uC1A1\uC774 \uC644\uB8CC\uB418\uBA74 SPI \uC804\uC1A1 \uC644\uB8CC \uD578\uB4E4\uB7EC\uAC00 \uD568\uC218\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-11}",
    "{11-11}": true
  }), `void HAL_SPI_TxCpltCallback(SPI_HandleTypeDef *hspi)
{
    UNUSED(hspi);
    LCD_CS_HIGH();
    isTransmittingData = 0;

    //Change to SPI datasize to 8 bit from 16 bit
    heval_Spi.Instance->CR2 &= ~(SPI_DATASIZE_16BIT - SPI_DATASIZE_8BIT);

    //signal transfer complete
    LCDManager_TransferComplete();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LCDManager_TransferComplete \uD568\uC218\uAC00 \uC0C8\uB85C\uC6B4 \uC804\uC1A1\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-3,16-16}",
    "{3-3,16-16}": true
  }), `void LCDManager_TransferComplete()
{
    touchgfx::startNewTransfer();
}

void startNewTransfer()
{
    FrameBufferAllocator* fba = HAL::getInstance()->getFrameBufferAllocator();
    fba->freeBlockAfterTransfer();
    blockIsTransferred = true;

    if (fba->hasBlockReadyForTransfer())
    {
        touchgfx::Rect r;
        const uint8_t* pixels = fba->getBlockForTransfer(r);
        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
}

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\uACB0\uB860`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBB38\uC11C\uC5D0\uC11C\uB294 \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5\uC774 \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC\uAC00 \uD1B5\uD569\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uAC16\uCD98 \uD50C\uB7AB\uD3FC\uC758 \uBA54\uBAA8\uB9AC \uC694\uAD6C \uC0AC\uD56D\uC744 \uB0AE\uCD94\uB294 \uB370 \uC5B4\uB5A4 \uB3C4\uC6C0\uC774 \uB418\uB294\uC9C0 \uC0B4\uD3B4\uBD24\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAD6C\uC131 \uBC0F \uC124\uC815\uD558\uB294 \uBA54\uC11C\uB4DC\uB294 \uBAA8\uB4E0 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uB3D9\uC77C\uD558\uC9C0\uB9CC, \uBE14\uB85D\uC758 \uB0B4\uC6A9\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD558\uB294 \uBA54\uC11C\uB4DC\uB294 \uAC01\uAE30 \uB2E4\uB985\uB2C8\uB2E4. \uC774\uB807\uAC8C LTDC/DSI \uAE30\uBC18 \uD50C\uB7AB\uD3FC(STM32L4R9-DISCO)\uC5D0\uC11C\uB294 DSI\uC5D0\uC11C \uC804\uC1A1\uD560 \uC900\uBE44\uAC00 \uB41C \uB2E4\uC74C \uBE14\uB85D\uC5D0 \uB9DE\uAC8C LTDC \uACC4\uCE35\uC744 \uC7AC\uAD6C\uC131\uD560 \uC218 \uC788\uC5C8\uB358 \uBC18\uBA74, LCD \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC5C6\uB294 \uD50C\uB7AB\uD3FC(STM32G071)\uC5D0\uC11C\uB294 SPI\uB97C \uC0AC\uC6A9\uD574 \uB514\uC2A4\uD50C\uB808\uC5D0 \uBE14\uB85D\uC744 \uC804\uC1A1\uD560 \uC218 \uC788\uC5C8\uB294\uC9C0 \uADF8 \uBC29\uC2DD\uC744 \uC0B4\uD3B4\uBD24\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);