"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1542],{

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

/***/ 59046:
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
  id: "color-formats",
  title: "\uC0C9\uC0C1 \uD615\uC2DD"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/color-formats",
  "id": "basic-concepts/color-formats",
  "title": "\uC0C9\uC0C1 \uD615\uC2DD",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/color-formats.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/color-formats",
  "permalink": "/4.20/ko/docs/basic-concepts/color-formats",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "color-formats",
    "title": "\uC0C9\uC0C1 \uD615\uC2DD"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC784\uBCA0\uB514\uB4DC \uADF8\uB798\uD53D",
    "permalink": "/4.20/ko/docs/basic-concepts/embedded-graphics"
  },
  "next": {
    "title": "\uD504\uB808\uC784\uBC84\uD37C",
    "permalink": "/4.20/ko/docs/basic-concepts/framebuffer"
  }
};
const assets = {};



const toc = [{
  value: "\uC0C9\uC0C1",
  id: "color",
  level: 2
}, {
  value: "\uADF8\uB808\uC774\uC2A4\uCF00\uC77C",
  id: "grayscale",
  level: 3
}, {
  value: "\uBD88\uD22C\uBA85\uB3C4",
  id: "opacity",
  level: 3
}, {
  value: "\uC0C9 \uC2EC\uB3C4",
  id: "color-depth",
  level: 2
}, {
  value: "\uD615\uC2DD",
  id: "formats",
  level: 2
}, {
  value: "\uD53D\uC140 \uC0C9\uC0C1 \uD615\uC2DD",
  id: "pixel-color-formats",
  level: 3
}, {
  value: "RGB888",
  id: "rgb888",
  level: 4
}, {
  value: "RGB565",
  id: "rgb565",
  level: 4
}, {
  value: "RGBx2222, xRGB2222, BGRx2222, xBGR2222",
  id: "rgbx2222-xrgb2222-bgrx2222-xbgr2222",
  level: 4
}, {
  value: "GRAY4, GRAY2, BW",
  id: "gray4-gray2-bw",
  level: 4
}, {
  value: "\uC774\uBBF8\uC9C0 \uD615\uC2DD",
  id: "image-formats",
  level: 3
}, {
  value: "Framebuffer formats",
  id: "framebuffer-formats",
  level: 3
}, {
  value: "Byte and pixel order",
  id: "byte-and-pixel-order",
  level: 4
}, {
  value: "\uD14D\uC2A4\uD2B8 \uD615\uC2DD",
  id: "text-formats",
  level: 3
}, {
  value: "\uC2DC\uAC01\uC801 \uD488\uC9C8",
  id: "visual-quality",
  level: 2
}, {
  value: "\uB514\uB354\uB9C1",
  id: "dithering",
  level: 3
}, {
  value: "\uC131\uB2A5",
  id: "performance",
  level: 2
}, {
  value: "\uC54C\uD30C \uBE14\uB80C\uB529",
  id: "alpha-blending",
  level: 3
}, {
  value: "\uAE30\uD0C0 \uC774\uBBF8\uC9C0 \uD615\uC2DD",
  id: "other-image-formats",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C9\uC0C1\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uD53D\uC140\uC744 \uD1B5\uD574 \uBCF4\uC774\uB294 \uAC83\uC744 \uB9D0\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC0C9\uC0C1\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "framebuffer",
    mdxType: "Link"
  }, `\uD504\uB808\uC784\uBC84\uD37C`), `\uC5D0 \uC800\uC7A5\uB41C \uAC12\uC5D0\uC11C \uBE44\uB86F\uB429\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uADF8\uB798\uD53D \uC2DC\uC2A4\uD15C\uC740 \uD45C\uD604, \uC0AC\uC6A9 \uBC0F \uD45C\uC2DC\uD560 \uC218 \uC788\uB294 \uC0C9\uC0C1\uC758 \uD06C\uAE30\uAC00 \uC81C\uD55C\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 TouchGFX\uC640 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uAC00\uB2A5\uD55C \uD53D\uC140 \uC0C9\uC0C1 \uC218\uC5D0 \uB530\uB77C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB9CE\uC740 \uBD80\uBD84\uC774 \uC601\uD5A5\uC744 \uBC1B\uB294\uB370, \uC774\uB97C\uD14C\uBA74 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB098\uD0C0\uB098\uB294 \uC2DC\uAC01\uC801\uC778 \uBAA8\uC2B5\uBD80\uD130 \uD504\uB808\uC784\uBC84\uD37C\uC758 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9, \uADF8\uB9AC\uACE0 \uC804\uBC18\uC801\uC778 \uC131\uB2A5\uC774 \uB2EC\uB77C\uC9C0\uAC8C \uB429\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC0C9\uC0C1\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uACE0 TouchGFX\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC0C9\uC0C1 \uD615\uC2DD\uC744 \uBE44\uB86F\uD55C \uC7A5\uB2E8\uC810\uC744 \uC9D1\uC911\uC801\uC73C\uB85C \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color"
  }), `\uC0C9\uC0C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C\uB294 RGB \uC0C9\uC0C1\uC774\uB77C\uACE0 \uC54C\uB824\uC9C4 \uBE68\uAC04\uC0C9, \uB179\uC0C9, \uD30C\uB780\uC0C9 \uC131\uBD84\uC774 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uAC01 \uC0C9\uC0C1 \uC131\uBD84\uC740 0\uBD80\uD130 255\uAE4C\uC9C0 \uB2E4\uC591\uD569\uB2C8\uB2E4. 0\uC740 \uD574\uB2F9 \uC131\uBD84\uC774 \uC804\uD600 \uC5C6\uB294 \uAC83\uC744, \uADF8\uB9AC\uACE0 255\uB294 \uD574\uB2F9 \uC131\uBD84\uC774 \uAC00\uB4DD\uD55C \uAC83\uC744 \uB9D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RGB\uC5D0\uC11C \uC644\uC804\uD55C \uAC80\uC740\uC0C9\uC740 (0,0,0), \uC644\uC804\uD55C \uD770\uC0C9\uC740 (255,255,255)\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uBC1D\uC740 \uB179\uC0C9\uC740 (0,255,0), \uC911\uAC04 \uBC1D\uAE30\uC758 \uBE68\uAC04\uC0C9\uC740 (128,0,0), \uC5B4\uB450\uC6B4 \uBCF4\uB77C\uC0C9\uC740 (64,0,64)\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgb-colors.svg",
    noShadow: "true",
    height: "70",
    mdxType: "Figure"
  }, "\uC77C\uBD80 RGB \uC0C9\uC0C1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "grayscale"
  }), `\uADF8\uB808\uC774\uC2A4\uCF00\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB808\uC774\uC2A4\uCF00\uC77C(grayscale) \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uAC80\uC740\uC0C9\uC5D0\uC11C \uD770\uC0C9\uAE4C\uC9C0 \uBAA8\uB4E0 \uC0C9\uC0C1\uC774 \uD68C\uC0C9\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C RGB \uAC12\uC774 \uC544\uB2C8\uB77C \uD68C\uC0C9 \uAC15\uB3C4\uB85C \uD45C\uD604\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uADF8\uB808\uC774\uC2A4\uCF00\uC77C \uC0C9\uC0C1\uC740 R\uACFC G, B\uAC00 \uB3D9\uC77C\uD55C RGB \uC0C9\uC0C1\uC774\uB77C\uACE0 \uBCFC \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "opacity"
  }), `\uBD88\uD22C\uBA85\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uD658\uACBD\uC5D0\uC11C\uB294 \uC0C9\uC0C1\uC5D0 \uBD88\uD22C\uBA85\uB3C4\uB97C \uC9C0\uC815\uD558\uB294 \uC131\uBD84\uC744 \uCD94\uAC00\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uBD88\uD22C\uBA85\uB3C4 \uC5ED\uC2DC \uB098\uBA38\uC9C0 \uC0C9\uC0C1 \uC131\uBD84\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C 0\uBD80\uD130 255\uAE4C\uC9C0 \uB2E4\uC591\uD569\uB2C8\uB2E4. \uBD88\uD22C\uBA85\uB3C4\uAC00 \uC9C0\uC815\uB41C \uC0C9\uC0C1\uC744 RGBA \uC0C9\uC0C1\uC774\uB77C\uACE0 \uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C A\uB294 \uC54C\uD30C\uAC12\uC73C\uB85C, \uBD88\uD22C\uBA85\uB3C4\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uBA85\uCE6D\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C \uC644\uC804\uD788 \uBD88\uD22C\uBA85\uD55C \uAC80\uC740\uC0C9\uC740 (0,0,0,255)\uC774\uACE0, \uB2E4\uC218 \uD22C\uBA85\uD55C \uBE68\uAC04\uC0C9\uC740 (255,0,0,128)\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgba-colors.svg",
    noShadow: "true",
    height: "70",
    mdxType: "Figure"
  }, "\uD770\uC0C9\uACFC \uD68C\uC0C9 \uC704\uC5D0 \uACB9\uCE5C \uC77C\uBD80 RGBA \uC0C9\uC0C1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C9\uC0C1\uC774 \uC644\uC804\uD788 \uBD88\uD22C\uBA85\uD558\uC9C0 \uC54A\uC744 \uB54C\uB294 \uAE30\uC874 \uC0C9\uC0C1\uACFC \uD568\uAED8 \uD63C\uD569\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC0C9\uC0C1 \uD63C\uD569\uC744 \uC54C\uD30C \uBE14\uB80C\uB529\uC774\uB77C\uACE0 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "color-depth"
  }), `\uC0C9 \uC2EC\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C9 \uC2EC\uB3C4(color depth)\uB780 \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uC800\uC7A5\uB41C \uC0C9\uC0C1\uB4E4\uC744 \uD558\uB098\uC529 \uB098\uD0C0\uB0BC \uB54C \uC0AC\uC6A9\uB418\uB294 \uBE44\uD2B8 \uC218\uB97C \uB9D0\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC218\uCE58\uB294 \uD53D\uC140\uB2F9 \uBE44\uD2B8\uB85C \uB098\uD0C0\uB0B4\uBA70, \uC904\uC5EC\uC11C bpp\uB77C\uACE0 \uD45C\uAE30\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uB418\uB294 \uBE44\uD2B8 \uC218\uAC00 \uB9CE\uC744\uC218\uB85D \uB354 \uB9CE\uC740 \uC0C9\uC0C1\uC744 \uD45C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9CE\uC774 \uC0AC\uC6A9\uB418\uB294 \uC0C9 \uC2EC\uB3C4\uB294 24bpp\uC785\uB2C8\uB2E4. \uAC01 \uBE44\uD2B8\uB97C \uD45C\uC2DC\uD560 \uC218\uB3C4 \uC788\uACE0, \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uD45C\uD604 \uAC00\uB2A5\uD55C \uC0C9\uC0C1 \uC218\uB294 2`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `24`), `, \uC989 16777216\uAC1C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uBE44\uAD50\uC801 \uC801\uAC8C \uC0AC\uC6A9\uB418\uB294 \uC0C9 \uC2EC\uB3C4\uB294 1bpp\uC785\uB2C8\uB2E4. \uC774 \uC0C9 \uC2EC\uB3C4\uB294 \uD751\uBC31 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uD45C\uD604 \uAC00\uB2A5\uD55C \uC0C9\uC0C1\uC774 2`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `1`), `, \uC989 2\uAC1C\uC5D0 \uBD88\uACFC\uD558\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uAE30\uBCF8\uC801\uC73C\uB85C \uC9C0\uC6D0\uB418\uB294 \uC0C9 \uC2EC\uB3C4\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `32bpp - \uC0C9\uC0C1 16777216\uAC1C\uC640 \uD574\uB2F9\uD558\uB294 \uBD88\uD22C\uBA85\uB3C4 \uAC12`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `24bpp - \uC0C9\uC0C1 16777216\uAC1C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `16bpp - \uC0C9\uC0C1 65536\uAC1C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `6/8 bpp - 64 colors`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `4bpp - \uADF8\uB808\uC774\uC2A4\uCF00\uC77C \uC0C9\uC0C1 16\uAC1C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `2bpp - \uADF8\uB808\uC774\uC2A4\uCF00\uC77C \uC0C9\uC0C1 4\uAC1C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `1bpp - \uADF8\uB808\uC774\uC2A4\uCF00\uC77C \uC0C9\uC0C1 2\uAC1C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C9\uC0C1 \uC131\uBD84 \uBC94\uC704\uC5D0 \uB300\uD574 \uC54C\uC544\uC57C \uD560 \uAC83\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC0C9 \uC2EC\uB3C4\uAC00 24bpp \uBBF8\uB9CC\uC77C \uACBD\uC6B0 \uBE68\uAC04\uC0C9, \uB179\uC0C9 \uBC0F \uD30C\uB780\uC0C9 \uC131\uBD84\uC758 \uAC01 \uBC94\uC704\uB294 0~255\uAC00 \uC544\uB2D9\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uBE68\uAC04\uC0C9\uC758 \uC2EC\uB3C4\uAC00 16bpp\uB77C\uACE0 \uAC00\uC815\uD560 \uACBD\uC6B0 \uBE68\uAC04\uC0C9 \uC131\uBD84\uC758 \uBC94\uC704\uB294 0~31\uC785\uB2C8\uB2E4. 24bpp\uC5D0\uC11C 255\uC778 \uAC83\uCC98\uB7FC 16bpp\uC5D0\uC11C \uAC00\uC7A5 \uC9C4\uD55C \uBE68\uAC04 \uC0C9\uC0C1\uC744 \uD45C\uD604\uD558\uB824\uBA74 \uAC12\uC740 31\uC774 \uB429\uB2C8\uB2E4. \uC774\uB807\uAC8C \uC0DD\uAC01\uD560 \uC218 \uC788\uB294 \uC774\uC720\uB294 \uC0C9 \uC2EC\uB3C4\uAC00 16bpp\uC778 \uC0C9\uC0C1\uB4E4\uC740 24bpp\uC5D0\uC11C \uAC00\uB2A5\uD55C \uC0C9\uC0C1\uC758 \uD558\uC704 \uC9D1\uD569\uB9CC \uD45C\uD604\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In 6/8 bpp color depts, each pixels uses 6 bits for the color information (2 bits each for red, green, and blue). To simplify the framebuffer access each pixel is increased from 6 bits to 8 bits (1 byte). The extra two bits in the framebuffer are unused.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "formats"
  }), `\uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C0\uAE08\uAE4C\uC9C0 \uC0C9\uC0C1\uC744 \uD45C\uD604\uD558\uB294 \uB370 \uD544\uC694\uD55C \uBE44\uD2B8\uC758 \uD06C\uAE30\uC5D0 \uB300\uD574 \uC0B4\uD3B4\uBCF4\uC558\uC73C\uB2C8, \uC774\uC81C \uBE44\uD2B8\uC758 \uB0B4\uC6A9\uC5D0 \uB300\uD574 \uB354 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. A color will have some bits describing the red component, some the green and some the blue, but the color depth alone does not specify the order (format) of the bits in a pixel. E.g. blue first, then green, then red, or maybe in the reverse order.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "pixel-color-formats"
  }), `\uD53D\uC140 \uC0C9\uC0C1 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC0C9 \uC2EC\uB3C4\uC5D0 \uB530\uB77C\uC11C \uBA87 \uAC00\uC9C0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC0C9\uC0C1 \uD615\uC2DD\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "rgb888"
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uC0C9 \uC2EC\uB3C4\uAC00 24bpp\uC778 \uC0C9\uC0C1\uC758 \uD615\uC2DD\uC740 RGB888\uC785\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uBE68\uAC04\uC0C9, \uB179\uC0C9 \uBC0F \uD30C\uB780\uC0C9 \uC131\uBD84\uB9C8\uB2E4 8\uBE44\uD2B8\uAC00 \uC0AC\uC6A9\uB41C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC0C9\uC0C1, \uC608\uB97C \uB4E4\uC5B4 \uBC1D\uC740 \uBCF4\uB77C\uC0C9 rgb(255,0,255)\uB97C \uCF54\uB4DC\uB85C \uD45C\uD604\uD558\uB824\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uAC01 \uC131\uBD84\uC744 \uC0C9\uC0C1 \uAC12\uC73C\uB85C \uC870\uD569\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t brightPurpleRGB888 = 255 << 16 | 0 << 8 | 255 << 0;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this format, red is in the highest 8 bits, then green, and blue in the low 8 bit.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "rgb565"
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `16bpp \uC0C9\uC0C1\uC5D0\uC11C TouchGFX\uAC00 \uC0AC\uC6A9\uD558\uB294 \uC0C9\uC0C1 \uD615\uC2DD\uC740 RGB565\uC785\uB2C8\uB2E4. \uC989, \uBE68\uAC04\uC0C9\uC740 5\uBE44\uD2B8, \uB179\uC0C9\uC740 6\uBE44\uD2B8, \uD30C\uB780\uC0C9\uC740 5\uBE44\uD2B8\uC785\uB2C8\uB2E4. As we have 5 bits for red, fully lit is 31, so the bright purple in code is`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint16_t brightPurpleRGB565 = 31 << 11 | 0 << 5 | 31 << 0;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "rgbx2222-xrgb2222-bgrx2222-xbgr2222"
  }), `RGBx2222, xRGB2222, BGRx2222, xBGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `6bpp \uC0C9\uC0C1\uC5D0\uC11C\uB294 TouchGFX\uAC00 4\uAC00\uC9C0 \uB2E4\uB978 \uD615\uC2DD, \uC989 RGBx2222, xRGB2222, BGRx2222, xBGR222\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD615\uC2DD\uC5D0 x\uAC00 \uC788\uB294 \uC774\uC720\uB294 6\uBE44\uD2B8 \uC0C9\uC0C1\uC774 \uBC14\uC774\uD2B8\uB85C \uC800\uC7A5\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC0C9\uC0C1\uC740 2\uBE44\uD2B8\uC529 \uCC44\uC6CC\uC838 1\uBC14\uC774\uD2B8\uB97C \uD615\uC131\uD569\uB2C8\uB2E4. \uB610\uD55C RGB\uC640 BGR\uC744 \uBAA8\uB450 \uC9C0\uC6D0\uD558\uB294 \uC774\uC720\uB294 \uC77C\uBD80 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 BGR\uC774 \uD544\uC694\uD558\uB354\uB77C\uB3C4 \uC774\uB7EC\uD55C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD558\uAE30 \uC804\uC5D0 \uD53D\uC140\uC744 \uBCC0\uD658\uD558\uC9C0 \uC54A\uAE30 \uC704\uD574\uC11C\uC785\uB2C8\uB2E4. \uBC1D\uC740 \uB178\uB780\uC0C9\uC744 RGBx2222\uB85C \uD45C\uD604\uD558\uB294 \uCF54\uB4DC\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t brightYellowRGBx2222 = 3 << 6 | 3 << 4 | 0 << 2;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "gray4-gray2-bw"
  }), `GRAY4, GRAY2, BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uADF8\uB808\uC774\uC2A4\uCF00\uC77C \uC0C9\uC0C1 \uC2EC\uB3C4\uC5D0 \uB530\uB77C \uD574\uB2F9\uD558\uB294 \uD55C \uAC00\uC9C0 \uC0C9\uC0C1 \uD615\uC2DD\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 4bpp\uC77C \uB54C \uC0C9\uC0C1 \uD615\uC2DD\uC740 GRAY4\uC774\uACE0, 2bpp\uC77C \uB54C\uB294 GRAY2\uC774\uBA70, 1bpp\uC77C \uB54C\uB294 \uD751\uBC31\uC744 \uC758\uBBF8\uD558\uB294 BW\uC785\uB2C8\uB2E4. 4bpp\uC77C \uB54C \uC644\uC804\uD788 \uD770\uC0C9\uC740 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t whiteGRAY4 = 15;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uB294 \uC0C9\uC0C1 \uD615\uC2DD\uC5D0 \uB530\uB77C \uC815\uD655\uD55C \uC0C9\uC0C1 \uD45C\uD604\uC744 \uBC18\uD658\uD558\uB294 \uD5EC\uD37C \uD568\uC218\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/Color.hpp>
...
aColor = Color::getColorFromRGB(255,0,128);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "image-formats"
  }), `\uC774\uBBF8\uC9C0 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0\uB294 \uB300\uBD80\uBD84\uC758 UI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB9E4\uC6B0 \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD558\uBA70, \uC5EC\uB7EC \uAC00\uC9C0 \uC0C9\uC0C1\uC73C\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C\uB294 \uC774\uBBF8\uC9C0\uAC00 \uBA54\uBAA8\uB9AC\uC5D0 \uC800\uC7A5\uB418\uBA70, \uD2B9\uC815 \uD615\uC2DD\uC758 \uC0C9\uC0C1\uC73C\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#pixel-color-formats"
  }), `\uC9C0\uC6D0\uB418\uB294 \uD53D\uC140 \uC0C9\uC0C1 \uD615\uC2DD`), ` \uC911 \uD558\uB098\uB97C \uC0AC\uC6A9\uD558\uC9C0\uB9CC \uADF8 \uBC16\uC5D0 \uB2E4\uB978 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uC815 \uC774\uBBF8\uC9C0 \uC0C9\uC0C1 \uD615\uC2DD\uC758 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uD53D\uC140\uC740 \uD574\uB2F9\uD558\uB294 \uD53D\uC140 \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uB41C \uD6C4 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774\uBBF8\uC9C0 \uC0C9\uC0C1 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD45C\uD604`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\uBE44\uD2B8, \uC131\uBD84\uB2F9 8\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8 \uC778\uB371\uC2A4 \uD615\uC2DD, ARGB8888 \uD314\uB808\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\uBE44\uD2B8, \uC131\uBD84\uB2F9 8\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8 \uC778\uB371\uC2A4 \uD615\uC2DD, RGB888 \uD314\uB808\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB666`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\uBE44\uD2B8, \uC131\uBD84\uB2F9 6\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\uBE44\uD2B8, \uBE68\uAC04\uC0C9 5\uBE44\uD2B8, \uB179\uC0C9 6\uBE44\uD2B8, \uD30C\uB780\uC0C9 5\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8 \uC778\uB371\uC2A4 \uD615\uC2DD, RGB565 \uD314\uB808\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8, \uC131\uBD84\uB2F9 2\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8, \uC131\uBD84\uB2F9 2\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8, \uC131\uBD84\uB2F9 2\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8, \uC131\uBD84\uB2F9 2\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\uBE44\uD2B8 \uADF8\uB808\uC774\uC2A4\uCF00\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2\uBE44\uD2B8 \uADF8\uB808\uC774\uC2A4\uCF00\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\uBE44\uD2B8 \uADF8\uB808\uC774\uC2A4\uCF00\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW_RLE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\uBE44\uD2B8 \uADF8\uB808\uC774\uC2A4\uCF00\uC77C \uB7F0 \uAE38\uC774 \uC778\uCF54\uB529(RLE)`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC774\uBBF8\uC9C0 \uD615\uC2DD \uC911\uC5D0\uC11C L8 \uD615\uC2DD\uC740 \uD574\uB2F9\uD558\uB294 \uC774\uBBF8\uC9C0\uB97C \uC0C9\uC0C1 \uB8E9\uC5C5 \uD14C\uC774\uBE14(CLUT)\uACFC \uD14C\uC774\uBE14\uC5D0 \uB300\uD55C \uC778\uB371\uC2A4\uB85C \uD45C\uD604\uD569\uB2C8\uB2E4. L8 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uAC00\uB2A5\uD55C \uCD5C\uB300 \uC0C9\uC0C1 \uC218\uB294 2`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `8`), `\uAC1C, \uC989 256\uAC1C\uC785\uB2C8\uB2E4. L8 \uD615\uC2DD\uC740 \uB2E4\uB978 \uD615\uC2DD\uC5D0 \uBE44\uD574 \uCC28\uC9C0\uD558\uB294 \uACF5\uAC04\uC774 \uBE44\uAD50\uC801 \uC801\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 100x100 \uC774\uBBF8\uC9C0\uC5D0 200\uAC00\uC9C0 \uC0C9\uC0C1\uC774 \uC788\uB2E4\uACE0 \uAC00\uC815\uD560 \uACBD\uC6B0 ARGB8888 \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uD558\uBA74 100x100x32\uBE44\uD2B8, \uC989 40000\uBC14\uC774\uD2B8\uC758 \uACF5\uAC04\uC744 \uCC28\uC9C0\uD558\uC9C0\uB9CC L8_ARGB8888 \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uD558\uBA74 100x100x8\uBE44\uD2B8 + 200x32\uBE44\uD2B8, \uC989 10800\uBC14\uC774\uD2B8\uC758 \uACF5\uAC04\uC744 \uCC28\uC9C0\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `BW_RLE \uD615\uC2DD\uC740 \uB2E8\uC77C \uD53D\uC140 \uC0C9\uC0C1\uC774 \uC544\uB2CC \uC5F0\uC18D\uB41C \uD751\uBC31 \uC774\uBBF8\uC9C0\uB85C \uC0C9\uC0C1\uC744 \uC800\uC7A5\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uB300\uBD80\uBD84 \uACBD\uC6B0 \uACF5\uAC04\uC744 \uB354\uC6B1 \uD6A8\uC728\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB098\uBA38\uC9C0 \uD615\uC2DD\uB4E4\uC740 \uC704\uC758 \uD53D\uC140 \uC0C9\uC0C1 \uD615\uC2DD\uACFC \uB3D9\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "framebuffer-formats"
  }), `Framebuffer formats`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Not all image formats are available as framebuffer formats. The L8 formats cannot be used as framebuffer formats in TouchGFX. This is because it is not practical blend to two images in the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "byte-and-pixel-order"
  }), `Byte and pixel order`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The 24 bits format RGB888, and 32 bits format ARGB888, is often accessed using a byte pointer. When doing that it is necessary to understand that the pixels are stored in little endian order.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Take as an example the 32 bits color 0xFFFF7700 (alpha = 0xFF, red = 0xFF, green = 0x77, blue = 0x00). When the color is in a 32 bit variable or register, the value is 0xFFFF7700. When the color is stored in memory the bytes stored are { 0x00, 0x77, 0xFF, 0xFF }. This corresponds to the order BGRA.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Similarly, the 16 bits format, RGB565, is always accessed through a 16 bit pointer, so the byte order is not interesting, but it is swapped in memory.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `For the 8 bits formats, e.g. ARGB2222, the color fits into a byte (alpha in the two highest bits), which is stored without change.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The smaller formats, GRAY4, GRAY2, and BW, can be stored in two orders. The low bits can be the leftmost pixel or the rightmost pixel. If the low bits are the leftmost we call this LSB-mode, otherwise it is MSB-mode.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Framebuffer format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Order`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD45C\uD604`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\uBE44\uD2B8, \uC131\uBD84\uB2F9 8\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `XRGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32 bits, 8 bits per component, alpha byte ignored`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGR`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\uBE44\uD2B8, \uC131\uBD84\uB2F9 8\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\uBE44\uD2B8, \uBE68\uAC04\uC0C9 5\uBE44\uD2B8, \uB179\uC0C9 6\uBE44\uD2B8, \uD30C\uB780\uC0C9 5\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8, \uC131\uBD84\uB2F9 2\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8, \uC131\uBD84\uB2F9 2\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8, \uC131\uBD84\uB2F9 2\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8, \uC131\uBD84\uB2F9 2\uBE44\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LSB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\uBE44\uD2B8 \uADF8\uB808\uC774\uC2A4\uCF00\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LSB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2\uBE44\uD2B8 \uADF8\uB808\uC774\uC2A4\uCF00\uC77C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MSB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\uBE44\uD2B8 \uADF8\uB808\uC774\uC2A4\uCF00\uC77C`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "text-formats"
  }), `\uD14D\uC2A4\uD2B8 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8\uB294, \uB354\uC6B1 \uC5C4\uBC00\uD788 \uC598\uAE30\uD558\uBA74 \uAE00\uB9AC\uD504(glyph) \uC5ED\uC2DC \uD2B9\uC815 \uC0C9\uC0C1 \uD615\uC2DD\uC73C\uB85C \uBA54\uBAA8\uB9AC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD14D\uC2A4\uD2B8 \uC0C9\uC0C1 \uD615\uC2DD\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD14D\uC2A4\uD2B8 \uC0C9\uC0C1 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD45C\uD604`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8\uBE44\uD2B8, \uBD88\uD22C\uBA85\uB3C4 \uC804\uC6A9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\uBE44\uD2B8, \uBD88\uD22C\uBA85\uB3C4 \uC804\uC6A9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2\uBE44\uD2B8, \uBD88\uD22C\uBA85\uB3C4 \uC804\uC6A9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `A1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\uBE44\uD2B8, \uBD88\uD22C\uBA85\uB3C4 \uC804\uC6A9`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE00\uB9AC\uD504 \uD615\uC2DD\uC740 \uC791\uC740 \uC774\uBBF8\uC9C0\uC640 \uBE44\uC2B7\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 \uC0C9\uC0C1 \uD56D\uBAA9\uB9C8\uB2E4 \uAC01 \uD53D\uC140\uC758 \uBD88\uD22C\uBA85\uB3C4\uAC00 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uC2E4\uC81C \uC0C9\uC0C1, \uC989 \uBE68\uAC04\uC0C9, \uB179\uC0C9 \uBC0F \uD30C\uB780\uC0C9 \uC131\uBD84\uC744 \uB098\uC911\uC5D0 \uC801\uC6A9\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB97C\uD14C\uBA74 \uC800\uC7A5\uB41C \uAE00\uB9AC\uD504 \u2018A\u2019\uB97C \uD30C\uB780\uC0C9 \uBC84\uC804\uACFC \uBE68\uAC04\uC0C9 \uBC84\uC804\uC73C\uB85C \uADF8\uB9AC\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC01 \uAE00\uB9AC\uD504\uB9C8\uB2E4 \uC0AC\uC6A9\uB418\uB294 \uBE44\uD2B8 \uC218\uAC00 \uB9CE\uC744\uC218\uB85D \uD14D\uC2A4\uD2B8\uAC00 \uB354\uC6B1 \uC790\uC5F0\uC2A4\uB7FD\uACE0 \uC120\uBA85\uD558\uAC8C \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "visual-quality"
  }), `\uC2DC\uAC01\uC801 \uD488\uC9C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC784\uBCA0\uB514\uB4DC \uADF8\uB798\uD53D\uC744 \uCC98\uB9AC\uD560 \uB54C\uB294 \uC2DC\uAC01\uC801 \uD488\uC9C8\uC744 \uCD5C\uB300\uD55C \uB192\uC774\uACE0 \uC2F6\uC740 \uB9C8\uC74C\uC774 \uB2F9\uC5F0\uD558\uACA0\uC9C0\uB9CC \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uB3C4 \uD568\uAED8 \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uC0C9\uC0C1\uC774 \uB354 \uD48D\uBD80\uD55C RGB888\uBCF4\uB2E4\uB294 RGB565 \uC0C9\uC0C1 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uB354 \uBC14\uB78C\uC9C1\uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uBA54\uBAA8\uB9AC \uC694\uAC74\uC744 \uAC10\uC548\uD558\uC5EC \uC2DC\uAC01\uC801 \uD488\uC9C8\uC744 \uCD5C\uB300\uD55C \uB192\uC77C \uC218 \uC788\uB294 \uC0C9\uC0C1 \uD615\uC2DD\uC744 \uB530\uB974\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dithering"
  }), `\uB514\uB354\uB9C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC774\uBBF8\uC9C0\uB97C \uC5EC\uB7EC \uAC00\uC9C0 \uC0C9\uC0C1 \uD615\uC2DD\uC73C\uB85C \uD45C\uD604\uD560 \uB54C \uC2DC\uAC01\uC801 \uD488\uC9C8\uC744 \uB192\uC5EC\uC8FC\uB294 \uB514\uB354\uB9C1\uC774\uB77C\uACE0 \uD558\uB294 \uAE30\uBC95\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uB354\uB9C1(Dithering)\uC740 \uC774\uBBF8\uC9C0\uC758 \uC0C9\uC0C1\uC744 \uC2E4\uC81C\uBCF4\uB2E4 \uB354 \uB9CE\uC544 \uBCF4\uC774\uAC8C \uB9CC\uB4DC\uB294 \uAE30\uBC95\uC73C\uB85C \uC798 \uC54C\uB824\uC838 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAE30\uBC95\uC740 \uC774\uBBF8\uC9C0\uC758 \uC0C9\uC0C1\uC5D0 \uC57D\uAC04\uC758 \uB178\uC774\uC988\uB97C \uCD94\uAC00\uD558\uB294 \uBC29\uC2DD\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 \uAC01 \uC0C9\uC0C1 \uC131\uBD84\uC5D0\uC11C \uB0AE\uC740 \uBE44\uD2B8\uB97C \uC798\uB77C\uB0B4\uC9C0 \uC54A\uACE0 RGB888 \uC774\uBBF8\uC9C0\uB97C RGB565 \uC774\uBBF8\uC9C0\uB85C \uBCC0\uD658\uD55C\uB2E4\uACE0 \uAC00\uC815\uD560 \uACBD\uC6B0 \uBCC0\uD658 \uD504\uB85C\uC138\uC2A4\uC5D0\uC11C \uB178\uC774\uC988\uAC00 \uAC01 \uC0C9\uC0C1\uC5D0 \uCD94\uAC00\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uBCC0\uD658\uB41C \uC774\uBBF8\uC9C0\uC758 \uC0C9\uC0C1\uC774 \uB354\uC6B1 \uD48D\uBD80\uD574\uC838 \uC6D0\uBCF8\uC778 RGB888\uACFC \uBE44\uC2B7\uD558\uAC8C \uBCF4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 RGB888 \uC6D0\uBCF8 \uC774\uBBF8\uC9C0\uC640 \uBCC0\uD658\uB41C \uC774\uBBF8\uC9C0\uB4E4\uC744 \uAC00\uC9C0\uACE0 \uC774\uBBF8\uC9C0\uB97C \uBCF4\uBA74\uC11C \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uBCC0\uD658\uB41C \uC774\uBBF8\uC9C0\uC758 \uD615\uC2DD\uC740 \uAC01\uAC01 \uB514\uB354\uB9C1\uC744 \uC801\uC6A9\uD55C/\uC801\uC6A9\uD558\uC9C0 \uC54A\uC740 RGB565\uC640 xRGB2222, \uADF8\uB9AC\uACE0 GRAY4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgb888.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "RGB888 \uC6D0\uBCF8 \uC774\uBBF8\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/rgb565.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\uB514\uB354\uB9C1\uC744 \uC801\uC6A9\uD558\uACE0/\uC801\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uBCC0\uD658\uB41C RGB565 \uC774\uBBF8\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/xrgb2222.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\uB514\uB354\uB9C1\uC744 \uC801\uC6A9\uD558\uACE0/\uC801\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uBCC0\uD658\uB41C xRGB2222 \uC774\uBBF8\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/gray4.png",
    noShadow: "true",
    width: "480",
    mdxType: "Figure"
  }, "\uB514\uB354\uB9C1\uC744 \uC801\uC6A9\uD558\uACE0/\uC801\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uBCC0\uD658\uB41C GRAY4 \uC774\uBBF8\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C\uB3C4 \uC54C \uC218 \uC788\uB4EF\uC774 \uB514\uB354\uB9C1\uC740 \uC778\uC9C0\uD560 \uC218 \uC788\uB294 \uC774\uBBF8\uC9C0\uC758 \uD488\uC9C8\uC744 \uD06C\uAC8C \uAC1C\uC120\uD558\uB294 \uD6A8\uACFC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB514\uB354\uB9C1\uC774 \uC801\uC6A9\uB41C RGB565 \uC774\uBBF8\uC9C0\uC640 \uADF8\uB807\uC9C0 \uC54A\uC740 \uC774\uBBF8\uC9C0\uB97C \uC790\uC138\uD788 \uBCF4\uBA74 \uB514\uB354\uB9C1\uC774 \uC801\uC6A9\uB41C \uBC84\uC804\uC740 \uC6D0\uBCF8\uACFC \uAC70\uC758 \uCC28\uC774\uAC00 \uC5C6\uC9C0\uB9CC \uB514\uB354\uB9C1\uC774 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC740 \uBC84\uC804\uC740 \uC77C\uBD80 \uC601\uC5ED\uC5D0\uC11C \uC0C9\uC0C1 \uBC34\uB529 \uD604\uC0C1\uC774 \uD655\uC5F0\uD558\uAC8C \uBCF4\uC785\uB2C8\uB2E4. \uC774\uB85C\uC368 \uB300\uBD80\uBD84 \uACBD\uC6B0 16\uBE44\uD2B8 \uC0C9\uC0C1\uC73C\uB85C\uB3C4 \uADF8\uB798\uD53D\uC744 \uCDA9\uBD84\uD788 \uC120\uBA85\uD558\uAC8C \uD45C\uD604\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC798 \uBCF4\uC5EC\uC8FC\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC560\uC14B(asset)\uC5D0 \uCEE4\uB2E4\uB780 \uADF8\uB798\uB514\uC5B8\uD2B8(\uB450 \uC601\uC5ED\uAC04 \uC0C9\uC758 \uBCC0\uD654\uB3C4)\uAC00 \uC788\uB2E4\uBA74 \uB514\uB354\uB9C1\uC774 \uC801\uC6A9\uB41C \uC774\uBBF8\uC9C0\uC5D0\uC11C\uB3C4 \uC0C9\uC0C1 \uBC34\uB529 \uD604\uC0C1\uC774 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30 \uB450 \uAC00\uC9C0 \uC608\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uB098\uB294 RGB888(64,190,222)\uC5D0\uC11C \uAC80\uC740\uC0C9\uC5D0 \uC774\uB974\uB294 \uD30C\uB780\uC0C9 \uADF8\uB798\uB514\uC5B8\uD2B8\uC640 \uB514\uB354\uB9C1\uC744 \uC801\uC6A9\uD558\uACE0/\uC801\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uBCC0\uD658\uB41C RGB565 \uC774\uBBF8\uC9C0\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/bluish.png",
    noShadow: "true",
    width: "800",
    mdxType: "Figure"
  }, "RGB888 \uC6D0\uBCF8 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uACE0 \uB514\uB354\uB9C1\uC744 \uC801\uC6A9\uD55C \uBCC0\uD658\uB41C RGB565 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uACE0 \uB514\uB354\uB9C1\uC744 \uC801\uC6A9\uD558\uC9C0 \uC54A\uC740 \uBCC0\uD658\uB41C RGB565 \uC774\uBBF8\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610 \uD558\uB098\uB294 (255,0,0)\uC5D0\uC11C \uAC80\uC740\uC0C9\uC5D0 \uC774\uB974\uB294 \uBE68\uAC04\uC0C9 \uADF8\uB798\uB514\uC5B8\uD2B8\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/color-formats/red.png",
    noShadow: "true",
    width: "800",
    mdxType: "Figure"
  }, "RGB888 \uC6D0\uBCF8 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uACE0 \uB514\uB354\uB9C1\uC744 \uC801\uC6A9\uD55C \uBCC0\uD658\uB41C RGB565 \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uACE0 \uB514\uB354\uB9C1\uC744 \uC801\uC6A9\uD558\uC9C0 \uC54A\uC740 \uBCC0\uD658\uB41C RGB565 \uC774\uBBF8\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC790\uC138\uD788 \uBCF4\uBA74 \uB514\uB354\uB9C1\uC774 \uC801\uC6A9\uB41C RGB565 \uBC84\uC804\uACFC \uADF8\uB807\uC9C0 \uC54A\uC740 \uBC84\uC804 \uBAA8\uB450\uC5D0\uC11C \uC0C9\uC0C1 \uBC34\uB529 \uD604\uC0C1\uC774 \uC788\uB2E4\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBC34\uB529 \uD604\uC0C1\uC740 \uBE68\uAC04\uC0C9 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uAC00\uC7A5 \uB450\uB4DC\uB7EC\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uBCC0\uD658\uB41C \uC774\uBBF8\uC9C0\uC640 \uC0C9\uC0C1 \uD615\uC2DD\uC5D0 \uD56D\uC0C1 \uC8FC\uC758\uB97C \uAE30\uC6B8\uC774\uACE0, \uD544\uC694\uD560 \uACBD\uC6B0 \uC6D0\uBCF8 \uC774\uBBF8\uC9C0\uB97C \uBCC0\uACBD\uD558\uAC70\uB098 \uB2E4\uB978 \uC0C9\uC0C1 \uD615\uC2DD\uC744 \uC120\uD0DD\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance"
  }), `\uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC5D0\uC11C \uC5B8\uAE09\uD55C \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC740 \uBAA8\uB450 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC758  \u201C\uC6A9\uC774\uC131\u201D\uC5D0 \uCD5C\uC801\uD654\uB41C \uAC83\uC785\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uBCC4\uB2E4\uB978 \uBCC0\uD658 \uC5C6\uC774\uB3C4 \uC774\uBBF8\uC9C0\uB97C \uD504\uB808\uC784\uBC84\uD37C\uB85C \uC5B4\uB290 \uC815\uB3C4 \uBCF5\uC0AC\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB294 \uC758\uB3C4\uC801\uC778 \uAC83\uC73C\uB85C, TouchGFX\uAC00 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uADF8\uB798\uD53D\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uB294 \uC774\uC720 \uC911 \uD558\uB098\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB97C \uC0AC\uC6A9\uD574 UI\uB97C \uC124\uACC4\uD560 \uB54C\uB294 .png \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uC9C0\uB9CC \uC774\uD6C4 \uAC01 \uC774\uBBF8\uC9C0\uB294 \uC704\uC5D0\uC11C \uC790\uC138\uD788 \uC124\uBA85\uD55C \uAC83\uCC98\uB7FC \uCEF4\uD30C\uC77C \uB2E8\uACC4\uC5D0\uC11C \uD6A8\uC728\uC801\uC778 \uC774\uBBF8\uC9C0 \uD615\uC2DD \uC911 \uD558\uB098\uB85C \uBCC0\uD658\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "alpha-blending"
  }), `\uC54C\uD30C \uBE14\uB80C\uB529`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB7F0\uD0C0\uC784\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB370\uC774\uD130 \uBCF5\uC0AC\uB294 \uC77C\uBC18\uC801\uC778 CPU \uBCF5\uC0AC \uC791\uC5C5\uC744 \uD1B5\uD574, \uD639\uC740 MCU \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD574 \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4. \uC774\uB54C \uC774\uBBF8\uC9C0\uC5D0 \uC644\uC804\uD788 \uD22C\uBA85\uD558\uC9C0 \uC54A\uAC70\uB098 \uBD88\uD22C\uBA85\uD55C \uD53D\uC140\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA74 \uD574\uB2F9 \uD53D\uC140\uC744 \uBC30\uACBD\uC5D0 \uC54C\uD30C \uBE14\uB80C\uB529 \uCC98\uB9AC\uD574\uC57C \uD569\uB2C8\uB2E4. \uC77C\uBD80 STM32 MCU\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uBE14\uB80C\uB529 \uAE30\uB2A5\uC774 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uD1B5\uD574 \uC9C0\uC6D0\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "other-image-formats"
  }), `\uAE30\uD0C0 \uC774\uBBF8\uC9C0 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB7F0\uD0C0\uC784\uC5D0\uC11C \uB2E4\uB978 \uC774\uBBF8\uC9C0 \uD615\uC2DD, \uC608\uB97C \uB4E4\uC5B4 .jpg\uB098 .png \uAC19\uC740 \uC555\uCD95 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC774 \uD544\uC694\uD558\uB2E4\uBA74 TouchGFX\uC5D0\uC11C \uC9C0\uC6D0\uB418\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/dynamic-bitmaps"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5 \uAE30\uB2A5\uC744 \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://en.wikipedia.org/wiki/Color_depth",
    mdxType: "Link"
  }, "\uC0C9 \uC2EC\uB3C4"), "\uC5D0 \uB300\uD55C Wikipedia \uAE00\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);