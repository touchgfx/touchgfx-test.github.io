"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1378],{

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

/***/ 44077:
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
  id: "framebuffer",
  title: "\uD504\uB808\uC784\uBC84\uD37C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/framebuffer",
  "id": "basic-concepts/framebuffer",
  "title": "\uD504\uB808\uC784\uBC84\uD37C",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/framebuffer.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/framebuffer",
  "permalink": "/4.20/ko/docs/basic-concepts/framebuffer",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "framebuffer",
    "title": "\uD504\uB808\uC784\uBC84\uD37C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC0C9\uC0C1 \uD615\uC2DD",
    "permalink": "/4.20/ko/docs/basic-concepts/color-formats"
  },
  "next": {
    "title": "\uADF8\uB798\uD53D \uC5D4\uC9C4",
    "permalink": "/4.20/ko/docs/basic-concepts/graphics-engine"
  }
};
const assets = {};



const toc = [{
  value: "\uC0C9\uC0C1",
  id: "colors",
  level: 2
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774",
  id: "display",
  level: 2
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C \uC704\uCE58",
  id: "location-of-framebuffer",
  level: 2
}, {
  value: "\uB0B4\uBD80 RAM",
  id: "internal-ram",
  level: 3
}, {
  value: "\uC678\uBD80 RAM",
  id: "external-ram",
  level: 3
}, {
  value: "RAM \uB0B4\uC7A5 \uB514\uC2A4\uD50C\uB808\uC774",
  id: "display-with-embedded-ram",
  level: 3
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C \uD06C\uAE30",
  id: "amount-of-framebuffers",
  level: 2
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C\uAC00 1\uAC1C\uC77C \uB54C",
  id: "one-framebuffer",
  level: 3
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C\uAC00 \uB2E4\uC218\uC77C \uB54C",
  id: "more-than-one-framebuffer",
  level: 3
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C\uAC00 1\uAC1C \uBBF8\uB9CC\uC77C \uB54C",
  id: "less-than-one-framebuffer",
  level: 3
}, {
  value: "\uBA54\uBAA8\uB9AC \uC0AC\uC6A9",
  id: "memory-consumption",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uB780 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD45C\uC2DC\uD560 \uB2E4\uC74C \uC774\uBBF8\uC9C0\uB97C \uC900\uBE44\uD560 \uBAA9\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uBA54\uBAA8\uB9AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uB294 \uC77C\uC815 \uD06C\uAE30\uC758 RAM\uC5D0 \uC778\uC811\uD55C \uBD80\uBD84\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-contiguous-memory.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uD504\uB808\uC784\uBC84\uD37C \uBA54\uBAA8\uB9AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uC5D0\uB294 \uC5F0\uAD00\uB41C \uAC00\uB85C\uC640 \uC138\uB85C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC774\uC720\uB85C \uD504\uB808\uC784\uBC84\uD37C\uB294 x,y \uC88C\uD45C\uB85C \uC778\uB371\uC2F1\uC774 \uAC00\uB2A5\uD55C 2D \uBA54\uBAA8\uB9AC\uB77C\uB294 \uC778\uC2DD\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-2d-memory.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "2D \uD504\uB808\uC784\uBC84\uD37C \uBA54\uBAA8\uB9AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uC5D0\uB294 \uC5F0\uAD00\uB41C \uC0C9\uC0C1 \uD615\uC2DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uC758 \uC2DC\uC791 \uBD80\uBD84\uC740 \uC774\uB7EC\uD55C \uC0C9\uC0C1 \uD615\uC2DD\uC5D0 \uB530\uB978 \uC0C9\uC0C1\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD504\uB808\uC784\uBC84\uD37C\uC758 \uC774\uB7EC\uD55C \uAC01 \uC2DC\uC791 \uBD80\uBD84\uC744 \uD53D\uC140\uC774\uB77C\uACE0 \uCE6D\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uC758 \uD53D\uC140 \uBA54\uBAA8\uB9AC \uC8FC\uC18C\uB97C \uACC4\uC0B0\uD558\uC5EC \uC800\uC7A5\uB41C \uC0C9\uC0C1\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uBA74 \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C x, y \uC704\uCE58\uC758 \uD53D\uC140 \uC0C9\uC0C1\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t pixelAddress = x + y * WIDTH;
framebuffer[ pixelAddress ] = newColor;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uCC2C\uAC00\uC9C0\uB85C \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD53D\uC140 \uC0C9\uC0C1\uC744 \uAC00\uC838\uC640\uC11C \uACC4\uC0B0\uC5D0 \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD53D\uC140 \uC0C9\uC0C1\uC744 \uC5B4\uB461\uAC8C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `darken`), ` \uD568\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uACBD\uC6B0).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint32_t pixelAddress = x + y * WIDTH;
framebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C \uBA54\uBAA8\uB9AC\uB294 \uC704\uC640 \uAC19\uC774 \uD53D\uC140 \uB2E8\uC704\uB85C \uC4F0\uAC70\uB098 \uC77D\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC9C0 \uC54A\uACE0, Chrom-ART DMA\uC640 \uAC19\uC740 \uC2DC\uC2A4\uD15C \uAE30\uBC18 \uD558\uB4DC\uC6E8\uC5B4 \uAE30\uB2A5\uC744 \uC8FC\uB85C \uC774\uC6A9\uD574 \uC4F0\uAC70\uB098 \uC77D\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "colors"
  }), `\uC0C9\uC0C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD53D\uC140 \uC0C9\uC0C1 \uD615\uC2DD\uC740 \uB2E4\uC74C \uC911 \uD55C \uAC00\uC9C0\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uADF8\uB808\uC774\uC2A4\uCF00\uC77C`), ` 1, 2 \uB610\uB294 4bpp(Bits per Pixel) \uADF8\uB808\uC774\uC2A4\uCF00\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uD558\uC774 \uB610\uB294 \uD2B8\uB8E8 \uCEEC\uB7EC`), ` 16, 24 \uB610\uB294 32bpp \uC0C9\uC0C1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `bpp\uB97C \uB9CE\uC774 \uC0AC\uC6A9\uD560\uC218\uB85D \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C \uB098\uD0C0\uB0BC \uC218 \uC788\uB294 \uACE0\uC720 \uC0C9\uC0C1\uB3C4 \uB298\uC5B4\uB0A9\uB2C8\uB2E4. \uB098\uC544\uAC00, bpp\uB97C \uB9CE\uC774 \uC0AC\uC6A9\uD560\uC218\uB85D \uD504\uB808\uC784\uBC84\uD37C\uC758 \uBA54\uBAA8\uB9AC \uC18C\uBE44\uB7C9\uB3C4 \uC99D\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display"
  }), `\uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uC758 \uB0B4\uC6A9\uC740 \uCD5C\uC885\uC801\uC73C\uB85C \uBB3C\uB9AC\uC801 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uB418\uC5B4 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD504\uB808\uC784\uBC84\uD37C\uC640 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uD53D\uC140 \uAC00\uB85C \uBC0F \uC138\uB85C\uAC00 \uC11C\uB85C \uB3D9\uC77C\uD55C \uACBD\uC6B0\uAC00 \uB9CE\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/display-and-framebuffer.svg",
    noShadow: "true",
    mdxType: "Figure"
  }, "24bpp \uD504\uB808\uC784\uBC84\uD37C \uB0B4\uC6A9\uACFC \uADF8\uC5D0 \uB530\uB978 \uB514\uC2A4\uD50C\uB808\uC774 \uACB0\uACFC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC5EC\uB7EC \uAC00\uC9C0 \uB514\uC2A4\uD50C\uB808\uC774 \uC720\uD615\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-display",
    mdxType: "Link"
  }, "\uB514\uC2A4\uD50C\uB808\uC774 \uAE30\uC220"), " \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "location-of-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C \uC704\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC \uAE30\uBC18\uC758 \uADF8\uB798\uD53D \uC2DC\uC2A4\uD15C\uC744 \uD06C\uAC8C \uB2E8\uC21C\uD654\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/simplified-graphics-system.png",
    noShadow: true,
    width: "400",
    mdxType: "Figure"
  }, "\uADF8\uB798\uD53D \uC2DC\uC2A4\uD15C \uAC1C\uB7B5\uB3C4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uB294 MCU \uB0B4\uBD80 \uB610\uB294 \uC678\uBD80 RAM\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/framebuffer-placement.png",
    noShadow: "true",
    width: "600",
    mdxType: "Figure"
  }, "\uAC00\uB2A5\uD55C \uD504\uB808\uC784\uBC84\uD37C \uC704\uCE58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC01 \uC704\uCE58\uB294 \uC7A0\uC7AC\uC801 \uC7A5\uC810\uACFC \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-ram"
  }), `\uB0B4\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uB97C MCU \uB0B4\uBD80 RAM\uC5D0 \uC800\uC7A5\uD558\uBA74 \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uB300\uD55C \uC77D\uAE30/\uC4F0\uAE30 \uC561\uC138\uC2A4 \uC18D\uB3C4\uB97C \uADF9\uB300\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uB3C4 \uCD5C\uB300\uD55C \uC6D0\uD65C\uD558\uAC8C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uBC18\uB300\uB85C \uB0B4\uBD80 RAM\uC740 \uB2E4\uC218\uC758 \uC2DC\uC2A4\uD15C \uAD6C\uC131\uC694\uC18C\uC5D0\uC11C \uC0AC\uC6A9\uD558\uC5EC \uB9E4\uC6B0 \uBD80\uC871\uD55C \uB9AC\uC18C\uC2A4\uC774\uAE30 \uB54C\uBB38\uC5D0 \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uB9CE\uC740 \uC6A9\uB7C9\uC744 \uCC28\uC9C0\uD558\uAE30\uB294 \uC5B4\uB824\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uB9CC\uC57D \uAC00\uB2A5\uD558\uB2E4\uBA74 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uB0B4\uBD80 RAM\uC5D0 \uC800\uC7A5\uD558\uC5EC RAM\uC744 \uCD94\uAC00\uD560 \uD544\uC694\uAC00 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uC2DC\uC2A4\uD15C\uC758 \uC804\uBC18\uC801\uC778 \uBE44\uC6A9\uC744 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "external-ram"
  }), `\uC678\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2DC\uC2A4\uD15C\uC5D0 \uC678\uBD80 RAM\uC774 \uC788\uB2E4\uBA74 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC678\uBD80 RAM\uC5D0 \uC800\uC7A5\uD558\uC5EC \uB0B4\uBD80 RAM\uC744 \uB300\uCCB4\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC678\uBD80 RAM\uC5D0 \uB300\uD55C \uC77D\uAE30/\uC4F0\uAE30 \uC561\uC138\uC2A4 \uC18D\uB3C4\uB294 \uB0B4\uBD80 RAM\uC5D0 \uBE44\uD574 \uB300\uCCB4\uB85C \uB290\uB9B0 \uBC18\uBA74, \uC678\uBD80 RAM\uC758 \uC6A9\uB7C9\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uB0B4\uBD80 RAM\uBCF4\uB2E4 \uD6E8\uC52C \uD07D\uB2C8\uB2E4 \uB530\uB77C\uC11C \uC678\uBD80 RAM\uC774 \uC720\uC77C\uD55C \uD574\uACB0\uCC45\uC77C \uB54C\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\uB294 \uCE90\uC2F1\uACFC \uAC19\uC774 \uC678\uBD80 RAM\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4 \uC18D\uB3C4\uB97C \uB192\uC5EC\uC8FC\uB294 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../development/hardware-selection/hardware-components/hardware-selection-mcu",
    mdxType: "Link"
  }, `MCU`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-with-embedded-ram"
  }), `RAM \uB0B4\uC7A5 \uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2DC\uC2A4\uD15C\uC758 \uB514\uC2A4\uD50C\uB808\uC774 \uC720\uD615\uC5D0 \uB530\uB77C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uBA54\uBAA8\uB9AC\uAC00 \uB0B4\uC7A5\uB418\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBA54\uBAA8\uB9AC\uC5D0\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \u201C\uBB3C\uB9AC\uC801\u201D \uD53D\uC140 \uB0B4\uC6A9\uC774 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uD53D\uC140 \uBA54\uBAA8\uB9AC\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB0B4\uC7A5\uB41C\uB2E4\uB294 \uAC83\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uC791\uB3D9 \uC911\uC77C \uB54C\uB3C4 MCU\uAC00 \uC720\uD734 \uC0C1\uD0DC\uAC00 \uB420 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD504\uB808\uC784\uBC84\uD37C\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC758 RAM\uC5D0 \uC800\uC7A5\uB418\uC9C0 \uC54A\uB294\uB370, \uADF8 \uC774\uC720\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uB0B4\uBD80 \uBA54\uBAA8\uB9AC\uAC00 \uBA54\uBAA8\uB9AC \uB9E4\uD551\uC774 \uB418\uC9C0 \uC54A\uC73C\uBA70 \uB79C\uB364 \uD53D\uC140 \uC77D\uAE30 \uB610\uB294 \uC4F0\uAE30\uC5D0 \uC801\uD569\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB300\uC2E0\uC5D0 TouchGFX\uB294 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uB0B4\uBD80 \uB610\uB294 \uC678\uBD80 RAM\uC5D0 \uC800\uC7A5\uD574\uB450\uACE0 \uD544\uC694\uD560 \uB54C \uC774\uB97C \uB514\uC2A4\uD50C\uB808\uC774 RAM\uC73C\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "amount-of-framebuffers"
  }), `\uD504\uB808\uC784\uBC84\uD37C \uD06C\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uB97C 1\uAC1C \uC774\uC0C1 \uB610\uB294 1\uAC1C \uBBF8\uB9CC\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD06C\uAE30\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC678\uAD00\uACFC \uC131\uB2A5 \uBC0F \uBA54\uBAA8\uB9AC \uC18C\uBE44\uB7C9\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "one-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C\uAC00 1\uAC1C\uC77C \uB54C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C 1\uAC1C\uB9CC\uC73C\uB85C\uB3C4 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uB418\uB294 \uD53D\uC140\uC744 \uBAA8\uB450 \uC815\uD655\uD788 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB0B4\uBD80 RAM\uC774 \uC5C6\uC744 \uB54C \uD504\uB808\uC784\uBC84\uD37C\uAC00 1\uAC1C \uC774\uC0C1 \uD544\uC694\uD569\uB2C8\uB2E4. \uC774\uB54C \uD45C\uC2DC\uB418\uB294 \uADF8\uB798\uD53D\uC774 \uBCF5\uC7A1\uD558\uC5EC \uC2DC\uAC01\uC801 \uC544\uD2F0\uD329\uD2B8(visual artifacts, \uB514\uC9C0\uD138 \uC774\uBBF8\uC9C0\uC758 \uADF8\uB798\uD53D \uACB0\uD568)\uB97C \uC720\uBC1C\uD558\uC9C0 \uC54A\uB294\uB2E4\uBA74 \uD504\uB808\uC784\uBC84\uD37C 1\uAC1C\uAC00 \uC801\uD569\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "more-than-one-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C\uAC00 \uB2E4\uC218\uC77C \uB54C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uB2E4\uC218\uB77C\uB294 \uB9D0\uC740 2\uAC1C\uB77C\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. 1\uAC1C\uB294 \uB2E4\uC74C \uC774\uBBF8\uC9C0\uB97C \uC4F8 \uB54C \uC0AC\uC6A9\uB418\uACE0, \uB098\uBA38\uC9C0 1\uAC1C\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD560 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB2E8, \uD2F0\uC5B4\uB9C1(tearing)\uACFC \uAC19\uC740 \uC2DC\uAC01\uC801 \uC544\uD2F0\uD329\uD2B8\uB294 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC544\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "less-than-one-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C\uAC00 1\uAC1C \uBBF8\uB9CC\uC77C \uB54C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C \uD504\uB808\uC784\uBC84\uD37C\uAC00 1\uAC1C \uBBF8\uB9CC\uC774\uBA74,`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0AC\uC6A9\uB418\uB294 \uBA54\uBAA8\uB9AC\uB3C4 \uC801\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uADF8\uB9AC\uAE30 \uC5F0\uC0B0 \uC131\uB2A5\uC774 \uD5A5\uC0C1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB354 \uB9CE\uC774 \uC804\uC1A1\uD574\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uAC00 1\uAC1C \uBBF8\uB9CC\uC774\uBA74 \uBD80\uBD84\uC801 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uBD80\uBD84\uC801 \uD504\uB808\uC784\uBC84\uD37C \uAE30\uBC95\uC740 RAM\uC774 \uB0B4\uC7A5\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-consumption"
  }), `\uBA54\uBAA8\uB9AC \uC0AC\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uC758 \uBA54\uBAA8\uB9AC \uC18C\uBE44\uB7C9\uC740 \uC0C9\uC0C1 \uD06C\uAE30\uC640 \uD53D\uC140 \uC218\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uBA54\uBAA8\uB9AC\uC758 \uD06C\uAE30\uB294 \uAC00\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, ` \uC138\uB85C`), ` \uC0C9 \uC2EC\uB3C4(\uBE44\uD2B8) / 8\uBC14\uC774\uD2B8\uB85C \uACC4\uC0B0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\uD574\uC0C1\uB3C4(\uD53D\uC140)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\uC0C9\uC0C1(bpp)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\uACC4\uC0B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9(\uBC14\uC774\uD2B8)`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `800 x 480`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `16bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `800 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, ` 480 `), ` 16 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `768.000B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `480 x 272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `24bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `480 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, ` 272 `), ` 24 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `391.680B`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `100 x 100`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `8bpp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `100 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "td"
  }, ` 100 `), ` 8 / 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": "right"
  }), `10.000B`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uAC00 \uB2E4\uC218\uC77C \uACBD\uC6B0\uC5D0\uB294 \uC0AC\uC6A9\uB418\uB294 \uBA54\uBAA8\uB9AC\uC758 \uD06C\uAE30\uB3C4 \uADF8\uB9CC\uD07C \uCEE4\uC9D1\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uD504\uB808\uC784\uBC84\uD37C\uB97C 2\uAC1C \uC0AC\uC6A9\uD558\uB294 \uC774\uC911 \uBC84\uD37C\uB9C1 \uAE30\uBC95\uC744 \uC801\uC6A9\uD558\uBA74 \uC0AC\uC6A9\uB418\uB294 \uBA54\uBAA8\uB9AC \uD06C\uAE30\uB3C4 2\uBC30\uB85C \uB298\uC5B4\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC18\uB300\uB85C \uD504\uB808\uC784\uBC84\uD37C\uB97C 1\uAC1C \uBBF8\uB9CC\uC73C\uB85C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBA54\uBAA8\uB9AC \uD06C\uAE30\uB97C \uBA85\uC2DC\uC801\uC73C\uB85C \uD560\uB2F9\uD558\uACE0 \uC81C\uC5B4\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uC804\uC801\uC73C\uB85C \uB9DE\uCDA4 \uC124\uC815\uD560 \uC218 \uC788\uC9C0\uB9CC \uB108\uBB34 \uC801\uAC8C \uC0AC\uC6A9\uD558\uBA74 \uADF8\uB798\uD53D\uC758 \uC804\uBC18\uC801\uC778 \uC131\uB2A5\uC774 \uB290\uB824\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",
    mdxType: "Link"
  }, "LTDC"), " \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC \uBB38\uC11C\uC5D0 \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uC790\uC138\uD788 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);