"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8241],{

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

/***/ 79866:
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
  id: "creating-dynamic-l8-images",
  title: "\uB3D9\uC801 L8 \uC774\uBBF8\uC9C0 \uC0DD\uC131"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/creating-dynamic-l8-images",
  "id": "development/ui-development/scenarios/creating-dynamic-l8-images",
  "title": "\uB3D9\uC801 L8 \uC774\uBBF8\uC9C0 \uC0DD\uC131",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/creating-dynamic-l8-images.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/creating-dynamic-l8-images",
  "permalink": "/4.20/ko/docs/development/ui-development/scenarios/creating-dynamic-l8-images",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "creating-dynamic-l8-images",
    "title": "\uB3D9\uC801 L8 \uC774\uBBF8\uC9C0 \uC0DD\uC131"
  },
  "sidebar": "docs",
  "previous": {
    "title": "L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD\uC744 \uD1B5\uD55C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9 \uC808\uAC10",
    "permalink": "/4.20/ko/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"
  },
  "next": {
    "title": "Scenarios",
    "permalink": "/4.20/ko/docs/category/scenarios-2"
  }
};
const assets = {};


const toc = [{
  value: "\uB3D9\uC801 L8 \uC774\uBBF8\uC9C0",
  id: "dynamic-l8-images",
  level: 2
}, {
  value: "24\uBE44\uD2B8 \uD314\uB808\uD2B8\uB97C \uC0AC\uC6A9\uD55C \uB3D9\uC801 L8 \uC774\uBBF8\uC9C0 \uC0DD\uC131",
  id: "creating-a-dynamic-l8-image-with-24-bit-palette",
  level: 3
}, {
  value: "\uD314\uB808\uD2B8 \uC561\uC138\uC2A4",
  id: "accessing-the-palette",
  level: 3
}, {
  value: "\uB3D9\uC801 L8 \uBE44\uD2B8\uB9F5 \uC608\uC2DC",
  id: "dynamic-l8-bitmap-example",
  level: 2
}, {
  value: "\uD314\uB808\uD2B8 \uC870\uC791",
  id: "manipulating-the-palette",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uB3D9\uC801 L8 \uC774\uBBF8\uC9C0\uC758 \uC0AC\uC6A9 \uBC29\uBC95\uACFC \uB354\uBD88\uC5B4 \uD314\uB808\uD2B8 \uC0DD\uC131 \uBC29\uBC95\uC744 \uC911\uC810\uC801\uC73C\uB85C \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-engine-features/dynamic-bitmaps"
  }), `\uB3D9\uC801 \uBE44\uD2B8\uB9F5`), `\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "using-the-l8-image-format-to-reduce-memory-consumption"
  }), `L8 \uC774\uBBF8\uC9C0 \uD615\uC2DD`), `\uC5D0 \uB300\uD55C \uC77C\uBC18 \uC815\uBCF4\uB97C \uC77D\uC5B4\uBCF4\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-l8-images"
  }), `\uB3D9\uC801 L8 \uC774\uBBF8\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 L8 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC740 \uB2E4\uB978 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uACFC \uBE44\uC2B7\uD558\uC9C0\uB9CC \uBE44\uD2B8\uB9F5\uC5D0 \uC0DD\uC131\uD560 \uD314\uB808\uD2B8\uC758 \uC720\uD615\uC744 \uC9C0\uC815\uD574\uC57C \uD55C\uB2E4\uB294 \uC810\uC774 \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 3\uAC00\uC9C0 \uC720\uD615\uC758 \uD314\uB808\uD2B8\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uD314\uB808\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "th"
  }, `\uC124\uBA85`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CLUT_FORMAT_L8_ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `32\uBE44\uD2B8(\uBE68\uAC04\uC0C9, \uB179\uC0C9, \uD30C\uB780\uC0C9, \uD53D\uC140 \uB2E8\uC704 \uC54C\uD30C \uCC44\uB110\uC5D0 \uAC01\uAC01 8\uBE44\uD2B8)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CLUT_FORMAT_L8_RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `24\uBE44\uD2B8(\uBE68\uAC04\uC0C9, \uB179\uC0C9, \uD30C\uB780\uC0C9\uC5D0 \uAC01\uAC01 8\uBE44\uD2B8, \uD53D\uC140 \uB2E8\uC704 \uC54C\uD30C \uCC44\uB110 \uC5C6\uC74C)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CLUT_FORMAT_L8_RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16\uBE44\uD2B8(\uBE68\uAC04\uC0C9\uC5D0 5\uBE44\uD2B8, \uB179\uC0C9\uC5D0 6\uBE44\uD2B8, \uD30C\uB780\uC0C9\uC5D0 5\uBE44\uD2B8, \uD53D\uC140 \uB2E8\uC704 \uC54C\uD30C \uCC44\uB110 \uC5C6\uC74C)`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-dynamic-l8-image-with-24-bit-palette"
  }), `24\uBE44\uD2B8 \uD314\uB808\uD2B8\uB97C \uC0AC\uC6A9\uD55C \uB3D9\uC801 L8 \uC774\uBBF8\uC9C0 \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C\uB294 24\uBE44\uD2B8 \uD314\uB808\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC 100 x100 \uD53D\uC140 L8 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(100, 100, Bitmap::CLUT_FORMAT_L8_RGB888, 256);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uD638\uCD9C\uB85C 100 x100 L8 \uBE44\uD2B8\uB9F5\uACFC 24\uBE44\uD2B8 \uD314\uB808\uD2B8\uAC00 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uC5D0 \uD560\uB2F9\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uD314\uB808\uD2B8\uB294 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC0C9\uC0C1\uC774 256\uAC00\uC9C0\uC774\uC9C0\uB9CC \uC774 \uC218\uCE58\uB97C \uC6D0\uD558\uB294 \uD06C\uAE30\uB85C \uC870\uC815\uD558\uC5EC \uBA54\uBAA8\uB9AC \uB0AD\uBE44\uB97C \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "accessing-the-palette"
  }), `\uD314\uB808\uD2B8 \uC561\uC138\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD53D\uC140 \uBC14\uB85C \uB4A4\uC5D0(\uCCAB \uBC88\uC9F8 32\uBE44\uD2B8 \uC8FC\uC18C\uC5D0\uC11C) L8 \uD314\uB808\uD2B8 \uD615\uC2DD\uC744 \uB098\uD0C0\uB0B4\uB294 2\uBC14\uC774\uD2B8(\uC800\uC7A5\uB41C \uB9AC\uD2C0 \uC5D4\uB514\uC548), \uD314\uB808\uD2B8\uC758 \uD615\uC2DD \uC218\uB97C \uB098\uD0C0\uB0B4\uB294 2\uBC14\uC774\uD2B8(\uC800\uC7A5\uB41C \uB9AC\uD2C0 \uC5D4\uB514\uC548), \uADF8\uB9AC\uACE0 \uC2E4\uC81C \uD314\uB808\uD2B8 \uC0C9\uC0C1\uC774 \uC21C\uC11C\uB300\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD314\uB808\uD2B8 \uC0C9\uC0C1\uC740 \uD53D\uC140\uC5D0\uC11C 4\uBC14\uC774\uD2B8 \uB5A8\uC5B4\uC838 \uC788\uC2B5\uB2C8\uB2E4(32\uBE44\uD2B8 \uC815\uB82C).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uACFC \uAC19\uC774 (\uC544\uC9C1 \uCD08\uAE30\uD654\uB418\uC9C0 \uC54A\uC740) \uD314\uB808\uD2B8\uC5D0 \uB300\uD55C \uD3EC\uC778\uD130\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//Get a pointer to the bitmap data (pixels and palette)
uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);

//1 byte pr pixel, round up to 32-bit
uint32_t byteSize = 100*100;
byteSize = ((byteSize + 3) & ~3);

//Palette size is saved in byte 2 and 3
int palSize = (data[3] << 8) | data[2];

//Palette starts four bytes after the pixels
uint8_t* pal = (data + byteSize + 4);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "dynamic-l8-bitmap-example"
  }), `\uB3D9\uC801 L8 \uBE44\uD2B8\uB9F5 \uC608\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC608\uB97C \uD1B5\uD574\uC11C \uB3D9\uC801 L8 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD558\uACE0 \uD314\uB808\uD2B8\uB97C \uC870\uC791\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uD314\uB808\uD2B8 \uC870\uC791\uC740 \uC77C\uBC18 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD754\uD55C \uC791\uC5C5\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uC774 \uC608\uC2DC\uB294 \uD314\uB808\uD2B8\uC5D0 \uC561\uC138\uC2A4\uD558\uC5EC \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD558\uAE30 \uC704\uD574\uC11C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 TouchGFX Designer\uC5D0\uC11C \uC2A4\uD06C\uB9B0\uC744 \uC0DD\uC131\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uBC30\uACBD\uC5D0 \uD770\uC0C9 Box\uB97C, \uADF8\uB9AC\uACE0 \uC6D0\uD558\uB294 \uC704\uCE58(\uC608: x=140, y=8)\uC5D0 \uC774\uBBF8\uC9C0\uB97C \uC0BD\uC785\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/creating-dynamic-l8-images/designer-img-4.17.png",
    mdxType: "Figure"
  }, "\uC2A4\uD06C\uB9B0 \uC0DD\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uACE0 Screen1View.cpp \uD30C\uC77C\uC744 \uC5FD\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uCF54\uB4DC\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `setupScreen`), `\uC5D0 \uC0BD\uC785\uD558\uC5EC \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uCD08\uAE30\uD654\uD558\uACE0 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `200*256 \uD53D\uC140\uC758 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774\uB54C L8 \uBE44\uD2B8\uB9F5\uC5D0\uC11C \uAC01 \uD53D\uC140\uC740 1\uBC14\uC774\uD2B8\uC785\uB2C8\uB2E4. \uC774\uBBF8\uC9C0\uC758 \uAC01 \uD589\uC744 \uB2E4\uB978 \uC0C9\uC0C1\uC73C\uB85C \uCC44\uC0C9\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCCAB \uD589\uC740 \uC0C9\uC0C1\uC774 0\uC774\uACE0, \uB9C8\uC9C0\uB9C9 \uD589\uC740 \uC0C9\uC0C1\uC774 255\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C \uD314\uB808\uD2B8\uC5D0\uC11C \uC0C9\uC0C1\uC744 \uCD08\uAE30\uD654\uD569\uB2C8\uB2E4. \uD314\uB808\uD2B8\uC758 \uC2DC\uC791 \uC8FC\uC18C\uB97C \uACC4\uC0B0\uD558\uACE0 256\uAC00\uC9C0 \uC0C9\uC0C1\uC758 RGB \uAC12\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uC774\uB54C \uCD08\uB85D\uC0C9\uC5D0\uC11C \uBE68\uAC04\uC0C9\uC73C\uB85C, \uB2E4\uC2DC \uBE68\uAC04\uC0C9\uC5D0\uC11C \uCD08\uB85D\uC0C9\uC73C\uB85C \uC0C9\uC0C1\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
uint32_t cacheBuffer[320*1024/4]; //simulate PSRAM
uint16_t* psram = (uint16_t*)cacheBuffer;
#else
uint16_t* psram = (uint16_t*)(0xd0000000 + 480*272*2*2); //Address after two 16bit framebuffers
#endif

Screen1View::Screen1View()
{
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();

    //Create one dynamic bitmap
    Bitmap::setCache(psram, 320*1024, 1); //320Kb cache
    const uint16_t palSize = 256;
    BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(200, 256, Bitmap::CLUT_FORMAT_L8_RGB888, palSize);
    imageDynamic.setBitmap(Bitmap(dynamicBitmap1));

    if (dynamicBitmap1 == BITMAP_INVALID)
    {
        touchgfx_printf("Unable to create dynamic bitmap\\n");
    }
    else
    {
        uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);

        uint8_t* pixel = data;
        //make colored rows
        for (int y = 0; y<256; y++)
        {
            for (int x = 0; x<200; x++)
            {
                *pixel++ = y;
            }
        }

        uint32_t byteSize = 200*256;
        byteSize = ((byteSize + 3) & ~3);

        //Palette starts four bytes after the pixels
        uint8_t* pal = (data + byteSize + 4);

        //Make palette with 256 colors from green to red to green
        for (int i = 0; i < palSize; i++)
        {
            //BGR
            pal[i * 3 + 0] = 0x00;
            pal[i * 3 + 1] = 127 * (1 + cosf(i * 6.28f / (palSize - 1)));
            pal[i * 3 + 2] = 255 * (sinf(i * 3.14f / (palSize - 1)));
        }
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uC791\uC5C5\uC744 \uB9C8\uCE58\uBA74 \uC2A4\uD06C\uB9B0\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/creating-dynamic-l8-images/img-20200225-151937.bmp",
    mdxType: "Figure"
  }, "L8 \uC774\uBBF8\uC9C0 \uD45C\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "manipulating-the-palette"
  }), `\uD314\uB808\uD2B8 \uC870\uC791`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 L8 \uBE44\uD2B8\uB9F5\uC5D0 \uC0AC\uC6A9\uD560 \uD314\uB808\uD2B8\uC5D0 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC870\uC791\uB3C4 \uC27D\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C\uB294 \uC778\uB371\uC2A4 \uD558\uB098\uC529 \uC544\uB798\uB85C \uC0C9\uC0C1\uC744 \uC21C\uD658\uC2DC\uCF1C \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uAC15\uC81C\uB85C \uB2E4\uC2DC \uB4DC\uB85C\uC789\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
void Screen1View::handleTickEvent()
{
    //get palette address
    uint8_t* data = Bitmap::dynamicBitmapGetAddress(imageDynamic.getBitmap());
    uint32_t byteSize = 200*256;
    byteSize = ((byteSize + 3) & ~3);
    const int palSize = (data[3] << 8) | data[2];
    uint8_t* pal = (data + byteSize + 4);

    //Cycle palette, copy color 0
    int8_t blue = pal[0], green = pal[1], red = pal[2];

    //Move palette down, 1->0, 2->1, ...
    for (int i = 3; i < palSize * 3; i++)
    {
        pal[i - 3] = pal[i];
    }

    //Insert color 0 as color 255
    pal[(palSize - 1) * 3 + 0] = blue;
    pal[(palSize - 1) * 3 + 1] = green;
    pal[(palSize - 1) * 3 + 2] = red;

    //Force redraw by invalidating
    imageDynamic.invalidate();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7EC\uBA74 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC5D0\uC11C \uC0C9\uC0C1\uC774 \u201C\uC704\uB85C\u201D \uC774\uB3D9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "200",
    imageSource: "/img/development/ui-development/scenarios/creating-dynamic-l8-images/demo.gif",
    mdxType: "Figure"
  }, "L8 \uD314\uB808\uD2B8\uC758 \uC21C\uD658"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);