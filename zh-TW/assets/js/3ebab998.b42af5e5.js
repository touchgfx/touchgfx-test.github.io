"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7022],{

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

/***/ 57708:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
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
  id: "scenarios-framebuffer-strategies",
  title: "\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",
  "id": "development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",
  "title": "\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies.mdx",
  "sourceDirName": "development/touchgfx-hal-development/scenarios",
  "slug": "/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",
  "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-framebuffer-strategies",
    "title": "\u5F71\u50CF\u7DE9\u885D\u5340\u7B56\u7565"
  },
  "sidebar": "docs",
  "previous": {
    "title": "FMC\u8207SPI\u986F\u793A\u4ECB\u9762",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"
  },
  "next": {
    "title": "\u5F71\u7247\u89E3\u78BC",
    "permalink": "/4.20/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"
  }
};
const assets = {};




const toc = [{
  value: "Single Framebuffer",
  id: "single-frame-buffer",
  level: 2
}, {
  value: "\u4F9D\u914D\u7F6E (By Allocation)",
  id: "by-allocation",
  level: 3
}, {
  value: "\u4F9D\u4F4D\u5740",
  id: "by-address",
  level: 3
}, {
  value: "Double Framebuffer",
  id: "double-frame-buffer",
  level: 2
}, {
  value: "\u4F9D\u4F4D\u5740",
  id: "by-address-1",
  level: 3
}, {
  value: "\u4F9D\u914D\u7F6E (By Allocation)",
  id: "by-allocation-1",
  level: 3
}, {
  value: "Partial Framebuffer",
  id: "partial-frame-buffer",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `This section shows how to configure the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../touchgfx-generator"
  }), `TouchGFX Generator`), ` to generate a TouchGFX HAL that uses one of the following Framebuffer strategies:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u96D9\u5F71\u50CF\u7DE9\u885D\u5340`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u90E8\u4EFD\u5F71\u50CF\u7DE9\u885D\u5340`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Read more about framebuffers `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/framebuffer#amount-of-framebuffers"
  }), `here`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/framebuffer-all-options.png",
    width: "500",
    mdxType: "Figure"
  }, "\u6240\u6709\u5F71\u50CF\u7DE9\u885D\u5340\u9078\u9805"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "single-frame-buffer"
  }), `Single Framebuffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9078\u53D6`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u5340(Single Frame Buffer)`), `\u4F5C\u70BA\u7DE9\u885D\u7B56\u7565\uFF0C\u958B\u767C\u4EBA\u54E1\u53EF\u4EE5\u8B93\u7DE8\u8B6F\u5668\u65BC\u5167\u90E8RAM\u4E2D\u914D\u7F6E\u5F71\u50CF\u7DE9\u885D\u5340\u6240\u9700\u7684\u8A18\u61B6\u9AD4\uFF0C\u6216\u8005\u4E5F\u53EF\u4EE5\u81EA\u884C\u5728\u5167\u90E8RAM\u4E2D\u6307\u5B9A\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u5B58\u53D6\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "by-allocation"
  }), `\u4F9D\u914D\u7F6E (By Allocation)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When choosing `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `By Allocation`), ` TouchGFX Generator will allocate an array based on the dimensions and bit depth of the application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/framebuffer-single-alloc.png",
    width: "400",
    mdxType: "Figure"
  }, "\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4F9D\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7522\u751F\u7528\u65BC\u8A2D\u5B9AHAL\u7684\u7A0B\u5F0F\u78BC\uFF0C\u4E26\u5C07\u8A72\u9663\u5217\u7528\u4F5C\u5F71\u50CF\u7DE9\u885D\u5340\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{1-6,12}",
    "{1-6,12}": true
  }), `namespace {
    // Use the section "TouchGFX_Framebuffer" in the linker script
    // to specify the placement of the buffer
    LOCATION_PRAGMA("TouchGFX_Framebuffer")
    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");
}

void TouchGFXGeneratedHAL::initialize()
{
    HAL::initialize();

    setFrameBufferStartAddresses((void*)frameBuf, (void*)0, (void*)0);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "by-address"
  }), `\u4F9D\u4F4D\u5740`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u70BA\u5F71\u50CF\u7DE9\u885D\u5340\u7684\u4F4D\u7F6E\u9078\u64C7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F9D\u4F4D\u5740`), `\u6642\uFF0CTouchGFX Generator\u5C07\u5728HAL\u521D\u59CB\u5316\u968E\u6BB5\u4F7F\u7528\u6240\u6307\u5B9A\u7684\u8D77\u59CB\u4F4D\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/framebuffer-single-addr.png",
    width: "400",
    mdxType: "Figure"
  }, "\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4F9D\u4F4D\u5740"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5}",
    "{5}": true
  }), `void TouchGFXGeneratedHAL::initialize()
{
    HAL::initialize();

    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0, (void*)0);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "double-frame-buffer"
  }), `Double Framebuffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In a double framebuffer configuration, code to swap framebuffers will be generated in the HAL by TouchGFX Generator depending on the selected Framebuffer strategy and display interface. This memory interface to framebuffer location is used by the TouchGFX Engine during the main event loop.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "by-address-1"
  }), `\u4F9D\u4F4D\u5740`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9078\u64C7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F9D\u4F4D\u5740`), `\u6642\uFF0CTouchGFX Generator\u5C07\u5728HAL\u521D\u59CB\u5316\u968E\u6BB5\u4F7F\u7528\u5169\u500B\u6307\u5B9A\u7684\u8D77\u59CB\u4F4D\u5740\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/framebuffer-double.png",
    width: "400",
    mdxType: "Figure"
  }, "\u96D9\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4F9D\u4F4D\u5740"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5}",
    "{5}": true
  }), `void TouchGFXGeneratedHAL::initialize()
{
    HAL::initialize();

    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0xC003FC00, (void*)0);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\u5C07RGB\u4E26\u5217\u986F\u793A\uFF08LTDC\uFF09\u4F5C\u70BA\u986F\u793A\u4ECB\u9762\u6642\uFF0C\u8D77\u59CB\u4F4D\u5740\u5C07\u5F9ELTDC\u5716\u5C64 (layer) \u7684\u8A2D\u5B9A\u4E2D\u7E7C\u627F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "When using Parallel RGB (LTDC) as display interface in 'By Allocation' mode, the generated TouchGFX HAL will automatically configure the LTDC Layer Color Frame Buffer Start Address at runtime, so you should not set a value in LTDC configuration."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "by-allocation-1"
  }), `\u4F9D\u914D\u7F6E (By Allocation)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `When choosing `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `By Allocation`), ` TouchGFX Generator will allocate an array based on the dimensions and bit depth of the application, exactly as with a Single Framebuffer, only twice the size.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/framebuffer-double-alloc.png",
    width: "400",
    mdxType: "Figure"
  }, "\u55AE\u4E00\u5F71\u50CF\u7DE9\u885D\u5340\uFF0C\u4F9D\u914D\u7F6E"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{1-5,11}",
    "{1-5,11}": true
  }), `namespace {
    // Use the section "TouchGFX_Framebuffer" in the linker to specify the placement of the buffer
    LOCATION_PRAGMA("TouchGFX_Framebuffer")
    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4 * 2] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");
}

void TouchGFXGeneratedHAL::initialize()
{
    HAL::initialize();

    setFrameBufferStartAddresses((void*)frameBuf, (void*)(frameBuf + sizeof(frameBuf)/(sizeof(uint32_t)*2)), (void*)0);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "partial-frame-buffer"
  }), `Partial Framebuffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `With the partial framebuffer strategy, TouchGFX does not use a framebuffer in the same size as the display. Instead the user is allowed to choose a number of blocks (of a given size) to be used as framebuffers. TouchGFX uses a `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Frame Buffer Allocator`), ` object to control the use of these block.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `With this strategy you don't supply a pointer to external memory (where the framebuffer would be located), nor allocate a framebuffer array in internal memory.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `See the article on `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/framebuffer"
  }), `Framebuffer`), ` for a general overview of the concept of framebuffers.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "Usually, small microcontrollers like STM32G0 does not have enough internal RAM to fit framebuffer. \u56E0\u6B64\u300C\u5C40\u90E8\u7DE9\u885D (Partial Buffer)\u300D\u5C31\u662F\u9019\u985E\u4F4E\u6210\u672CMCU\u7684\u5B8C\u7F8E\u65B9\u6848"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/generator-partial-fb.png",
    width: "400",
    mdxType: "Figure"
  }, "\u5C40\u90E8\u5F71\u50CF\u7DE9\u885D\u5340"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u5C40\u90E8\u7DE9\u885D\u5340\u901A\u5E38\u50C5\u7528\u65BC\u7121TFT\u63A7\u5236\u5668\u4E14\u5167\u90E8RAM\u5F88\u5C0F\u7684\u4F4E\u6210\u672CMCU\uFF0C\u56E0\u6B64\u5C40\u90E8\u7DE9\u885D\u5340\u7B56\u7565\u5C31\u671F\u671B\u958B\u767C\u4EBA\u54E1\u80FD\u5B8C\u6210\u5C07\u7DE9\u885D\u5167\u5BB9\u50B3\u8F38\u5230\u986F\u793A\u5668\u7684\u5BE6\u4F5C\u3002 \u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "scenarios-fmc"
  }), `FMC/SPI\u65B9\u6848`), `\uFF0C\u4EE5\u77AD\u89E3\u5982\u4F55\u5C07\u50CF\u50B3\u9001\u5230\u4E0D\u5177TFT\u63A7\u5236\u5668\u7684MCU\u6240\u9023\u63A5\u7684\u5E8F\u5217\u50B3\u8F38\u986F\u793A\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In order to link the display with TouchGFX when using the Partial Framebuffer strategy, developers are required to provide implementations for the following two functions. The code displayed below is generated by CubeMX inside `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp`), ` and defines the interface between the TouchGFX Engine and the display driver.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* ******************************************************
* Functions required by Partial Frame Buffer Strategy
* ******************************************************
*
*  int touchgfxDisplayDriverTransmitActive() must return whether or not data is currently being transmitted, over e.g. SPI.
*  void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h) will be called
*  when the framework wants to send a block. The user must then transfer the data represented by the arguments.
*/

extern "C" int touchgfxDisplayDriverTransmitActive();
extern "C" int touchgfxDisplayDriverShouldTransferBlock(uint16_t bottom);
extern "C" void touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h);
extern "C" void touchgfxSignalVSync(void);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `For the STM32G071 TouchGFX Board Setup available in the TouchGFX Designer these functions are implemented in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Core/Src/MB1642BDisplayDriver.c`), ` (only showing one here):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Core/Src/MB1642BDisplayDriver.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int touchgfxDisplayDriverTransmitActive(void)
{
 return IsTransmittingBlock_;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `With this strategy CubeMX also generates the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL::flushFrameBuffer(Rect&)`), ` inside the read-only `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXGeneratedHAL`), ` class in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "The flushFrameBuffer(Rect&) function is generally used for MCUs with no TFT Controller. In the case of Partial Framebuffers the TouchGFX Generator can generate a definition for this method specifically for that framebuffer strategy."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXGeneratedHAL.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)
{
    HAL::flushFrameBuffer(rect);
    // Try transmitting a block
    PartialFrameBufferManager::tryTransmitBlock();
}
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);