"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1398],{

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

/***/ 63282:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39130);
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
  id: "using-the-l8-image-format-to-reduce-memory-consumption",
  title: "L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9 \uC808\uAC10"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",
  "id": "development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",
  "title": "L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9 \uC808\uAC10",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",
  "permalink": "/4.20/ko/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "using-the-l8-image-format-to-reduce-memory-consumption",
    "title": "L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9 \uC808\uAC10"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uB7F0\uD0C0\uC784\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB85C\uB4DC",
    "permalink": "/4.20/ko/docs/development/ui-development/scenarios/loading-images-at-runtime"
  },
  "next": {
    "title": "\uB3D9\uC801 L8 \uC774\uBBF8\uC9C0 \uC0DD\uC131",
    "permalink": "/4.20/ko/docs/development/ui-development/scenarios/creating-dynamic-l8-images"
  }
};
const assets = {};




const toc = [{
  value: "L8 \uC774\uBBF8\uC9C0 \uC608",
  id: "example-l8-image",
  level: 2
}, {
  value: "TouchGFX Designer\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 L8 \uC774\uBBF8\uC9C0",
  id: "using--l8-images-in-touchgfx-designer",
  level: 2
}, {
  value: "\uD22C\uBA85\uD55C \uC774\uBBF8\uC9C0",
  id: "transparent-images",
  level: 2
}, {
  value: "\uC774\uBBF8\uC9C0\uB97C 256\uAC00\uC9C0 \uC0C9\uC0C1\uC73C\uB85C \uBCC0\uD658",
  id: "converting-an-image-to-256-colors",
  level: 2
}, {
  value: "Paint.NET",
  id: "paintnet",
  level: 3
}, {
  value: "ImageMagick",
  id: "imagemagick",
  level: 3
}, {
  value: "\uBE44\uAD50",
  id: "comparison",
  level: 3
}, {
  value: "\uC218\uB3D9 \uAD6C\uC131",
  id: "manual-configuration",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `L8 \uD615\uC2DD\uC758 \uC774\uBBF8\uC9C0\uB294 \uB2E4\uB978 \uD615\uC2DD, \uC774\uB97C\uD14C\uBA74 ARGB8888\uC5D0 \uBE44\uD574 \uD50C\uB798\uC2DC \uC800\uC7A5 \uACF5\uAC04\uC744 \uC801\uAC8C \uCC28\uC9C0\uD558\uBA70 \uADF8\uB9AC\uAE30 \uC791\uC5C5 \uC18D\uB3C4\uAC00 \uB354 \uBE60\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `L8 \uD615\uC2DD\uC758 \uC774\uBBF8\uC9C0\uB294 \uC0C9\uC0C1 \uD314\uB808\uD2B8\uC640 \uD53D\uC140 \uBC30\uC5F4\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. \uC0C9\uC0C1 \uD314\uB808\uD2B8\uC5D0\uC11C\uB294 \uCD5C\uB300 256\uAC00\uC9C0\uC758 \uC0C9\uC0C1\uC774 16\uBE44\uD2B8 \uD615\uC2DD RGB565, 24\uBE44\uD2B8 \uD615\uC2DD RGB888, \uB610\uB294 32\uBE44\uD2B8 \uD615\uC2DD ARGB8888\uB85C \uC9C0\uC815\uB429\uB2C8\uB2E4. \uD53D\uC140 \uBC30\uC5F4\uC740 \uAC01 \uD53D\uC140\uB9C8\uB2E4 1\uBC14\uC774\uD2B8\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. \uC774 \uBC14\uC774\uD2B8\uB294 \uC0C9\uC0C1 \uD314\uB808\uD2B8(\uC0C9\uC0C1 \uBAA9\uB85D)\uC5D0 \uB300\uD55C \uC778\uB371\uC2A4\uB85C\uC11C \uD53D\uC140 \uC0C9\uC0C1\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. TouchGFX \uD504\uB808\uC784\uC6CC\uD06C\uB294 \uD53D\uC140\uC744 \uD558\uB098\uC529 \uC77D\uACE0 \uD314\uB808\uD2B8\uC5D0\uC11C \uD574\uB2F9 \uC0C9\uC0C1\uC744 \uCC3E\uC544 \uC774\uB97C \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uC791\uC131\uD568\uC73C\uB85C\uC368 L8 \uC774\uBBF8\uC9C0\uC5D0 \uB300\uD55C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4. \uC774\uB294 \uC790\uB3D9\uC73C\uB85C \uC218\uD589\uB418\uBA70, \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC9C0\uC6D0\uD560 \uACBD\uC6B0\uC5D0\uB294 STM32 Chrom-ART \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uAE30\uB97C \uC0AC\uC6A9\uD574 \uC18D\uB3C4\uB97C \uB192\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `8bpp(\uD53D\uC140\uB2F9 8\uBE44\uD2B8)\uB780, L8 \uC774\uBBF8\uC9C0 1\uAC1C\uAC00 256\uAC00\uC9C0 \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uB610 \uB2E4\uB978 L8 \uC774\uBBF8\uC9C0\uB3C4 256\uAC00\uC9C0\uC758 \uB2E4\uB978 \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uB370, \uC774\uB294 \uB450 \uC774\uBBF8\uC9C0\uAC00 \uAC01\uAC01 \uC790\uCCB4 \uD314\uB808\uD2B8\uB97C \uAC00\uC9C0\uACE0 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/l8-image-with-4x4-pixels-and-palette-with-4-colors.png",
    mdxType: "Figure"
  }, "4 x 4 \uD53D\uC140\uACFC 4\uAC00\uC9C0 \uC0C9\uC0C1\uC758 \uD314\uB808\uD2B8\uB85C \uAD6C\uC131\uB41C L8 \uC774\uBBF8\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD53D\uC140\uC740 \uAC01\uAC01 1\uBC14\uC774\uD2B8(8\uBE44\uD2B8)\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD53D\uC140\uC758 \uD06C\uAE30\uB294 \uAC00\uB85C x \uC138\uB85C \uBC14\uC774\uD2B8\uB85C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uD314\uB808\uD2B8 \uC0C9\uC0C1\uC5D0\uB294 16\uBE44\uD2B8, 24\uBE44\uD2B8 \uB610\uB294 32\uBE44\uD2B8 \uC0C9\uC0C1\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uAC01 \uC0C9\uC0C1\uB9C8\uB2E4 2, 3 \uB610\uB294 4\uBC14\uC774\uD2B8\uB97C \uCC28\uC9C0\uD55C\uB2E4\uACE0 \uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Solid images should be stored in L8_RGB888. \uADF8 \uBC16\uC5D0 \uC774\uBBF8\uC9C0\uAC00 \uD22C\uBA85\uD558\uB2E4\uBA74 \uBC18\uB4DC\uC2DC 32\uBE44\uD2B8 \uD615\uC2DD(ARGB8888)\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD615\uC2DD`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD504\uB808\uC784\uBC84\uD37C \uD615\uC2DD`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD22C\uBA85\uD55C \uD53D\uC140 \uC9C0\uC6D0 \uC5EC\uBD80`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, ` Supported by DMA2D `)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\uBE44\uD2B8 RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB2C8\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB2C8\uC694`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\uBE44\uD2B8 RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC544\uB2C8\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC608`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB458 \uB2E4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC608`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC608`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The L8 format with a RGB565 palette is not supported by DMA2D. This means that drawing images in this format is not hardware accelerated. This format should therefore not be used unless you are on a platform without DMA2D (for example the STM32G0 or STM32F410).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If you are using a serial flash (non-memory-mapped) to store the images and a 16-bit framebuffer (format RGB565), then you should use the L8_RGB565 format, because the color format then matches the framebuffer format and is faster to copy to the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The table below shows the preferred L8 format:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD504\uB808\uC784\uBC84\uD37C \uD615\uC2DD`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `Platform has DMA2D`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, ` Platform without DMA2D `)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Transparent images should always be in L8_ARGB8888.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uD314\uB808\uD2B8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC5EC\uAE30\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624. ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "https://en.wikipedia.org/wiki/Indexed_color",
    mdxType: "Link"
  }, "https://en.wikipedia.org/wiki/Indexed_color"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example-l8-image"
  }), `L8 \uC774\uBBF8\uC9C0 \uC608`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC77C\uBC18\uC801\uC778 \uB85C\uACE0 \uC774\uBBF8\uC9C0\uC785\uB2C8\uB2E4. \uC774 \uC774\uBBF8\uC9C0\uB294 16\uAC00\uC9C0 \uC0C9\uC0C1\uB9CC \uC0AC\uC6A9\uD55C \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-with-16-24bit-colors.png",
    mdxType: "Figure"
  }, "16\uAC00\uC9C0 24\uBE44\uD2B8 \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD55C 200 x 200 \uD53D\uC140 L8 \uC774\uBBF8\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC774\uBBF8\uC9C0\uC758 \uD50C\uB798\uC2DC \uD06C\uAE30\uB294 \uD45C\uC900 24\uBE44\uD2B8 \uD615\uC2DD(RGB888)\uC758 \uC6D0\uBCF8 \uC774\uBBF8\uC9C0\uBCF4\uB2E4 \uD6E8\uC52C \uC791\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uD45C\uB294 \uC138 \uAC00\uC9C0 \uD314\uB808\uD2B8 \uD615\uC2DD\uACFC L8\uC774 \uC544\uB2CC \uB2E4\uB978 \uD615\uC2DD\uC77C \uB54C \uC774\uBBF8\uC9C0\uC758 \uD50C\uB798\uC2DC \uD06C\uAE30\uB97C \uB098\uD0C0\uB0B8 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD615\uC2DD`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD53D\uC140 \uD06C\uAE30(\uBC14\uC774\uD2B8)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD314\uB808\uD2B8 \uD06C\uAE30(\uBC14\uC774\uD2B8)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC804\uCCB4 \uD06C\uAE30(\uBC14\uC774\uD2B8)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uAC10\uC18C\uC728(%)`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `120,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `120,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,032`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `66.6%`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `48`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,048`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `66.6%`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,000`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `64`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,064`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `66.6%`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uD45C\uC5D0\uC11C \uD06C\uAE30 \uAC10\uC18C\uC728\uC774 \uB9E4\uC6B0 \uB192\uC744 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uC911\uAC04 \uD06C\uAE30\uC758 \uC774\uBBF8\uC9C0\uC5D0\uC11C\uB294 \uD314\uB808\uD2B8\uC758 \uD06C\uAE30\uC5D0 \uBCC4 \uCC28\uC774\uAC00 \uC5C6\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using--l8-images-in-touchgfx-designer"
  }), `TouchGFX Designer\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 L8 \uC774\uBBF8\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C\uB294 L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uB9E4\uC6B0 \uC27D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uADF8\uB7A8\uC744 \uAD6C\uC131\uD574 \uC774\uBBF8\uC9C0\uB97C PNG\uC5D0\uC11C L8 \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uD558\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4. \uBCC0\uD658\uD558\uB294 \uD504\uB85C\uC138\uC2A4\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC774 \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C assets/images \uD3F4\uB354\uB85C \uBCF5\uC0AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-assets-images-folder.png",
    mdxType: "Figure"
  }, "TouchGFX project\uC758 \uC774\uBBF8\uC9C0 \uD3F4\uB354"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C TouchGFX Designer\uB85C \uC774\uB3D9\uD558\uC5EC \uC0C1\uB2E8 \uB3C4\uAD6C \uBAA8\uC74C\uC5D0 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/images-view"
  }), `Images \uD0ED`), `\uC744 \uD074\uB9AD\uD558\uC5EC \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-images-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 \uC774\uBBF8\uC9C0 \uBDF0\uC5D0 \uC788\uB294 \uB85C\uACE0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCC3D \uC624\uB978\uCABD\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uD615\uC2DD L8_RGB888\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4(\uC704 \uC608\uC5D0\uC11C\uB294 24\uBE44\uD2B8 \uC0C9\uC0C1\uC744 \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uCE94\uBC84\uC2A4\uC5D0 \uC774\uBBF8\uC9C0 \uC704\uC82F\uC744 \uC0BD\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC5EC\uAE30\uC11C\uB294 \uBC30\uACBD\uC5D0 Box\uB97C \uC0BD\uC785\uD588\uC2B5\uB2C8\uB2E4).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-canvas-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 \uCE94\uBC84\uC2A4\uC5D0 \uC0BD\uC785\uB41C \uC774\uBBF8\uC9C0 \uC704\uC82F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI \uCF54\uB4DC\uC5D0\uC11C\uB294 \uC544\uBB34\uAC83\uB3C4 \uBCC0\uACBD\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. Images \uD0ED\uC5D0\uC11C \uC124\uC815\uD55C \uAD6C\uC131 \uB54C\uBB38\uC5D0 \uC774\uBBF8\uC9C0 \uBCC0\uD658 \uD504\uB85C\uADF8\uB7A8\uC774 PNG \uD30C\uC77C\uC744 \uBCC0\uD658\uD558\uC5EC L8 \uD615\uC2DD\uC758 \uC774\uBBF8\uC9C0\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "transparent-images"
  }), `\uD22C\uBA85\uD55C \uC774\uBBF8\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C \uC5B8\uAE09\uD55C \uAC83\uCC98\uB7FC \uD22C\uBA85\uD55C \uC774\uBBF8\uC9C0\uC5D0\uB3C4 L8 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/button-image-32bit-non-opaque-argb8888.png",
    mdxType: "Figure"
  }, "32\uBE44\uD2B8 ARGB8888 \uD615\uC2DD\uC758 170 x 60 \uD53D\uC140 \uBC84\uD2BC \uC774\uBBF8\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC774\uBBF8\uC9C0\uB294 108\uAC00\uC9C0 \uC0C9\uC0C1(\uB300\uBD80\uBD84 \uD30C\uB780\uC0C9 \uC0C9\uC870)\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC774\uBBF8\uC9C0\uB294 L8_ARGB8888 \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uD06C\uAE30\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD06C\uAC8C \uC904\uC5B4\uB4ED\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD615\uC2DD`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD53D\uC140 \uD06C\uAE30(\uBC14\uC774\uD2B8)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD314\uB808\uD2B8 \uD06C\uAE30(\uBC14\uC774\uD2B8)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC804\uCCB4 \uD06C\uAE30(\uBC14\uC774\uD2B8)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uAC10\uC18C\uC728(%)`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `40,800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `40,800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10,200`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `432`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10,632`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `73.9%`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "converting-an-image-to-256-colors"
  }), `\uC774\uBBF8\uC9C0\uB97C 256\uAC00\uC9C0 \uC0C9\uC0C1\uC73C\uB85C \uBCC0\uD658`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC218\uC758 \uC774\uBBF8\uC9C0\uAC00 256\uAC00\uC9C0 \uC774\uC0C1\uC758 \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD2B9\uD788 \uC2E4\uC0AC \uC774\uBBF8\uC9C0\uB098 \uADF8\uB798\uB514\uC5B8\uD2B8\uAC00 \uC801\uC6A9\uB41C \uC774\uBBF8\uC9C0\uB77C\uBA74 \uB300\uBD80\uBD84\uC774 \uADF8\uB807\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC774\uBBF8\uC9C0\uB294 \uC0C9\uC0C1\uC774 \uB108\uBB34 \uB9CE\uAE30 \uB54C\uBB38\uC5D0 TouchGFX Designer\uC5D0\uC11C L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC73C\uB85C \uBC14\uB85C \uBCC0\uD658\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uB300\uCCB4\uB85C \uD2B9\uC815 \uC774\uBBF8\uC9C0\uC5D0 \uC0AC\uC6A9\uB41C \uC0C9\uC0C1\uC758 \uC218\uB97C \uC904\uC774\uB294 \uAC83\uC740 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uADF8\uB798\uD53D \uC544\uD2F0\uC2A4\uD2B8\uAC00 256\uAC00\uC9C0 \uC0C9\uC0C1\uC73C\uB85C \uC774\uBBF8\uC9C0\uB97C \uBCC0\uD658\uD558\uAC70\uB098 \uC81C\uACF5\uD55C\uB2E4\uBA74 \uB354\uD560 \uB098\uC704 \uC5C6\uACA0\uC9C0\uB9CC \uC774\uBBF8\uC9C0 \uC870\uC791 \uB3C4\uAD6C \uC5ED\uC2DC \uC774\uBBF8\uC9C0 \uD488\uC9C8\uC744 \uCD5C\uB300\uD55C \uC720\uC9C0\uD558\uBA74\uC11C \uC774\uBBF8\uC9C0\uB97C \uBCC0\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "paintnet"
  }), `Paint.NET`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC7A5 \uC26C\uC6B4 \uBC29\uBC95\uC740 Paint.NET\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC6D0\uBCF8 \uC774\uBBF8\uC9C0\uB97C \uC5F4\uACE0 Save As\uB97C \uC0AC\uC6A9\uD574 \uC774\uBBF8\uC9C0\uB97C \uB2E4\uB978 \uD30C\uC77C\uB85C \uC800\uC7A5\uD569\uB2C8\uB2E4. Save Configuration \uB300\uD654 \uC0C1\uC790\uC5D0\uC11C \uD53D\uC140 \uC2EC\uB3C4\uB85C 8\uBE44\uD2B8\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/paint-dot-net-convert-to-8bit.png",
    mdxType: "Figure"
  }, "Paint.NET\uC5D0\uC11C 8\uBE44\uD2B8 \uD615\uC2DD\uC73C\uB85C \uC774\uBBF8\uC9C0\uB97C \uC800\uC7A5\uD558\uB294 \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0C8 PNG\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uB54C TouchGFX Designer\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/images-view"
  }), `Images \uD0ED`), `\uC5D0\uC11C L8_ARGB8888 \uD615\uC2DD\uC744 \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB9BC\uC790 \uCC98\uB9AC\uAC00 \uADF8\uB2E4\uC9C0 \uD6A8\uACFC\uC801\uC774\uC9C0\uB294 \uC54A\uC9C0\uB9CC, \uB300\uCCB4\uB85C \uAC00\uC7A5\uC790\uB9AC\uAC00 \uD22C\uBA85\uD55C \uC544\uC774\uCF58\uC774 \uB69C\uB837\uD558\uAC8C \uBCF4\uC785\uB2C8\uB2E4. \uACBD\uC6B0\uC5D0 \uB530\uB77C\uC11C\uB294 "Transparency threshold" \uAC12\uC744 \uC870\uC815\uD558\uC5EC \uACB0\uACFC\uB97C \uAC1C\uC120\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "imagemagick"
  }), `ImageMagick`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB54C\uC5D0 \uB530\uB77C L8 \uC774\uBBF8\uC9C0\uC758 \uD488\uC9C8\uC774 \uC88B\uC544\uC9C0\uB294 \uBCC0\uD658 \uB3C4\uAD6C\uAC00 \uC788\uB294\uB370, \uBC14\uB85C ImageMagick(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://imagemagick.org/"
  }), `www.imagemagick.org`), `\uC5D0\uC11C \uB2E4\uC6B4\uB85C\uB4DC)\uC785\uB2C8\uB2E4. \uC774 \uB3C4\uAD6C\uB294 \uBA85\uB839\uC904\uC5D0\uC11C\uB3C4 \uC774\uBBF8\uC9C0\uB97C \uBCC0\uD658\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC2A4\uD06C\uB9BD\uD2B8\uB85C \uC0AC\uC6A9\uD558\uAE30 \uC801\uD569\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 clock_bg.png\uB97C \uCD5C\uB300 256\uAC00\uC9C0 \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD558\uB294 \uC774\uBBF8\uC9C0\uB85C \uBCC0\uD658\uD55C\uB2E4\uACE0 \uAC00\uC815\uD560 \uACBD\uC6B0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uBA85\uB839\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `magick convert clock_bg.png -colors 256 clock_bg_l8_256.png
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ImageMagick \uC5ED\uC2DC \uC774\uBBF8\uC9C0\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC0C9\uC0C1\uC758 \uC218\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBA85\uB839\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }), `magick identify -format %k Blue_Buttons_Round_Edge_small.png
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "comparison"
  }), `\uBE44\uAD50`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uAD50\uB97C \uC704\uD574 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC138 \uAC00\uC9C0 \uC774\uBBF8\uC9C0(\uC6D0\uBCF8, Paint.NET\uC744 \uC0AC\uC6A9\uD55C L8, ImageMagick\uC744 \uC0AC\uC6A9\uD55C L8)\uB97C \uC900\uBE44\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/clock-image-original-paint-dot-net-image-magick-comparison.png",
    mdxType: "Figure"
  }, "\uC2DC\uACC4 \uC774\uBBF8\uC9C0 \uBE44\uAD50, \uC67C\uCABD\uC5D0\uC11C \uC624\uB978\uCABD\uC73C\uB85C: \uC6D0\uBCF8, Paint.NET, ImageMagick"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC6B4\uB370 \uC774\uBBF8\uC9C0\uB294 \uACBD\uACC4 \uADF8\uB9BC\uC790\uC5D0\uC11C \uC120\uBA85\uB3C4\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4. In both cases the central part of the clock background looks usable.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "manual-configuration"
  }), `\uC218\uB3D9 \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC740 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uC5D0 \uC788\uB294 application.config \uD30C\uC77C\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "application.config"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json"
  }), `{
  "image_configuration": {
    images": {
      "Blue_Buttons_Round_Edge_small.png": {
        "format": "L8_ARGB8888"
      }
    },
    "dither_algorithm": "2",
    "alpha_dither": "yes",
    "layout_rotation": "0",
    "opaque_image_format": "RGB888",
    "nonopaque_image_format": "ARGB8888",
    "section": "ExtFlashSection",
    "extra_section": "ExtFlashSection"
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"image_configuration" \uC544\uB798 "images\u201D \uC139\uC158\uC5D0\uC11C \uAC01 \uC774\uBBF8\uC9C0\uC758 \uD615\uC2DD\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uC9C0\uC815\uD558\uC9C0 \uC54A\uC73C\uBA74 \uC774\uBBF8\uC9C0\uAC00 \uAE30\uBCF8 \uD615\uC2DD(opaque_image_format \uB610\uB294 nonopaque_image_format)\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uB2A5\uD558\uB2E4\uBA74 TouchGFX Designer\uB97C \uC0AC\uC6A9\uD574 \uC774\uBBF8\uC9C0\uB97C \uAD6C\uC131\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);