"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[504],{

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

/***/ 40981:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39130);
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
  id: "touchgfx-architecture",
  title: "Abstraction Layer Architecture"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/touchgfx-hal-development/touchgfx-architecture",
  "id": "development/touchgfx-hal-development/touchgfx-architecture",
  "title": "Abstraction Layer Architecture",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-architecture.mdx",
  "sourceDirName": "development/touchgfx-hal-development",
  "slug": "/development/touchgfx-hal-development/touchgfx-architecture",
  "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/touchgfx-architecture",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "touchgfx-architecture",
    "title": "Abstraction Layer Architecture"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX AL Development Introduction",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"
  },
  "next": {
    "title": "Generator User Guide",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/touchgfx-generator"
  }
};
const assets = {};





const toc = [{
  value: "AL(Abstraction Layer) \uD074\uB798\uC2A4",
  id: "abstraction-layer-classes",
  level: 3
}, {
  value: "TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB97C \uB514\uC2A4\uD50C\uB808\uC774 \uC804\uC1A1\uACFC \uB3D9\uAE30\uD654",
  id: "synchronize-touchgfx-engine-main-loop-with-display-transfer",
  level: 2
}, {
  value: "Rendering Done",
  id: "rendering-done",
  level: 3
}, {
  value: "Display ready",
  id: "display-ready",
  level: 3
}, {
  value: "\uD130\uCE58 \uBC0F \uBB3C\uB9AC\uC801 \uBC84\uD2BC \uC774\uBCA4\uD2B8 \uBCF4\uACE0",
  id: "report-touch-and-physical-button-events",
  level: 2
}, {
  value: "\uD130\uCE58 \uC88C\uD45C",
  id: "touch-coordinates",
  level: 3
}, {
  value: "\uAE30\uD0C0 \uC678\uBD80 \uC774\uBCA4\uD2B8",
  id: "other-external-events",
  level: 3
}, {
  value: "\uD504\uB808\uC784 \uBC84\uD37C \uC561\uC138\uC2A4 \uB3D9\uAE30\uD654",
  id: "synchronize-framebuffer-access",
  level: 2
}, {
  value: "\uCC28\uAE30 \uAC00\uC6A9 \uD504\uB808\uC784 \uBC84\uD37C \uC601\uC5ED \uBCF4\uACE0",
  id: "report-the-next-available-framebuffer-area",
  level: 2
}, {
  value: "\uB80C\uB354\uB9C1 \uC791\uC5C5 \uC218\uD589",
  id: "perform-render-operations",
  level: 2
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1 \uCC98\uB9AC",
  id: "handle-framebuffer-transfer-to-display",
  level: 2
}, {
  value: "\uC804\uCCB4 \uC601\uC5ED \uB80C\uB354\uB9C1",
  id: "rendering-of-area-complete",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804 \uC139\uC158\uC5D0\uC11C \uC124\uBA85\uD588\uB4EF\uC774 TouchGFX AL\uC740 \uD2B9\uC815\uD55C \uCC45\uC784\uC744 \uB9E1\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uBCF4\uD1B5\uC740 RTOS(OSAL) \uB97C \uD1B5\uD574 AL(HAL)\uC758 \uD558\uB4DC\uC6E8\uC5B4 \uBD80\uBD84\uC774\uB098 TouchGFX Engine\uC5D0 \uB3D9\uAE30\uD654\uB418\uB294 AL \uBD80\uBD84\uC5D0\uC11C \uCC45\uC784\uC774 \uC774\uD589\uB429\uB2C8\uB2E4. \uC774\uC804 \uC139\uC158\uC5D0\uC11C \uAC04\uB7B5\uD788 \uC18C\uAC1C\uD55C \uC774\uB7EC\uD55C \uCC45\uC784\uC774 \uC544\uB798 \uD45C\uC5D0 \uC694\uC57D\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCC45\uC784`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC6B4\uC601 \uCCB4\uC81C \uB610\uB294 \uD558\uB4DC\uC6E8\uC5B4`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#synchronize-touchgfx-engine-main-loop-with-display-transfer"
  }), `TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB97C \uB514\uC2A4\uD50C\uB808\uC774 \uC804\uC1A1\uACFC \uB3D9\uAE30\uD654`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC6B4\uC601 \uCCB4\uC81C \uBC0F \uD558\uB4DC\uC6E8\uC5B4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#report-touch-and-physical-button-events"
  }), `\uD130\uCE58 \uBC0F \uBB3C\uB9AC\uC801 \uBC84\uD2BC \uC774\uBCA4\uD2B8 \uBCF4\uACE0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD558\uB4DC\uC6E8\uC5B4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#synchronize-framebuffer-access"
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uC561\uC138\uC2A4 \uB3D9\uAE30\uD654`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC6B4\uC601 \uCCB4\uC81C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#report-the-next-available-framebuffer-area"
  }), `\uCC28\uAE30 \uAC00\uC6A9 \uD504\uB808\uC784 \uBC84\uD37C \uC601\uC5ED \uBCF4\uACE0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD558\uB4DC\uC6E8\uC5B4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#perform-render-operations"
  }), `\uB80C\uB354\uB9C1 \uC791\uC5C5 \uC218\uD589`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD558\uB4DC\uC6E8\uC5B4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "td"
  }, {
    "href": "#handle-framebuffer-transfer-to-display"
  }), `\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1 \uCC98\uB9AC `)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD558\uB4DC\uC6E8\uC5B4`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC758 \uAC01 \uD558\uC704 \uC139\uC158\uC5D0\uB294 \uC704\uC758 \uCC45\uC784\uB4E4\uC744 \uC774\uD589\uD558\uAE30 \uC704\uD574 \uC218\uD589\uD574\uC57C \uD558\uB294 \uC791\uC5C5\uC774 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC81C\uC791 \uD558\uB4DC\uC6E8\uC5B4 \uD50C\uB7AB\uD3FC\uC744 \uC704\uD574 STM32CubeMX \uB0B4\uC758 TouchGFX Generator\uB294 AL\uC640 \uC774\uC5D0 \uC218\uBC18\uB418\uB294 TouchGFX \uD504\uB85C\uC81D\uD2B8\uB97C \uB300\uBD80\uBD84 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. AL \uAC1C\uBC1C\uC790\uAC00 \uC218\uB3D9\uC73C\uB85C \uAD6C\uD604\uD574\uC57C \uD558\uB294 \uB098\uBA38\uC9C0 \uBD80\uBD84\uB4E4\uC740 TouchGFX Generator\uB97C \uD1B5\uD55C \uCF54\uB4DC \uC8FC\uC11D \uBC0F \uC54C\uB9BC\uC744 \uD1B5\uD574 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uC139\uC158\uC5D0\uC11C TouchGFX Generator\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-generator"
  }), `\uD655\uC778\uD558\uC2ED\uC2DC\uC624`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "abstraction-layer-classes"
  }), `AL(Abstraction Layer) \uD074\uB798\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL`), `\uC740 \uAD6C\uC0C1 \uD558\uC704 \uD074\uB798\uC2A4\uB97C \uD1B5\uD574 TouchGFX Engine\uC5D0\uC11C \uC561\uC138\uC2A4\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD558\uC704 \uD074\uB798\uC2A4\uB294 TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4.  AL \uC0DD\uC131\uC744 \uC704\uD55C __\uAE30\uBCF8 \uB3C4\uAD6C\uC778 TouchGFX Generator\uB294 STM32CubeMX\uC758 \uAD6C\uC131\uC744 \uBC18\uC601\uD558\uB294 HAL \uBD80\uBD84, \uADF8\uB9AC\uACE0 CMSIS V1 \uBC0F V2\uB97C \uC704\uD55C OSAL\uC744 \uBAA8\uB450 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "touchgfx-generator"
  }), `TouchGFX Generator`), `\uC5D0 \uB300\uD55C \uC139\uC158\uC5D0\uC11C \uD655\uC778\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C HAL\uC758 \uC544\uD0A4\uD14D\uCC98\uB294 \uC544\uB798 \uADF8\uB9BC\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/touchgfx-hal-development/code-architecture.png",
    noShadow: true,
    width: "200",
    mdxType: "Figure"
  }, `\uC0DD\uC131\uB41C \uCF54\uB4DC\uC758 \uACC4\uCE35 \uAD6C\uC870`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "synchronize-touchgfx-engine-main-loop-with-display-transfer"
  }), `TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB97C \uB514\uC2A4\uD50C\uB808\uC774 \uC804\uC1A1\uACFC \uB3D9\uAE30\uD654`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC758 \uC8FC \uBAA9\uC801\uC740 \uB80C\uB354\uB9C1\uC774 \uC218\uD589\uB420 \uB54C TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB97C \uCC28\uB2E8\uD558\uC5EC \uCD94\uAC00\uC801\uC778 \uD504\uB808\uC784\uC774 \uC0DD\uC131\uB418\uC9C0 \uC54A\uB3C4\uB85D \uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uC900\uBE44\uB418\uBA74 OSAL\uC740 \uCC28\uB2E8\uB41C TouchGFX Engine \uBA54\uC778 \uB8E8\uD504\uB97C \uC2DC\uADF8\uB110\uB9C1 \uD558\uC5EC \uD504\uB808\uC784\uC744 \uACC4\uC18D \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In order to fulfill this responsibility the typical way of a TouchGFX AL is to utilize the engine hook `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Rendering done`), ` and the interrupt `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Display Ready`), `, as outlined in the previous section. OSAL\uC740 \uAC1C\uBC1C\uC790\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\uB97C \uD638\uCD9C\uD560 \uB54C TouchGFX Engine\uC774 \uB300\uAE30\uD558\uB294 \uC138\uB9C8\uD3EC\uC5B4(semaphore)\uB97C  \uC2DC\uADF8\uB110\uB9C1 \uD560 \uC218 \uC788\uB3C4\uB85D \uD568\uC218`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` OSWrappers::signalVSync`), `\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\uB294 CMSIS V1 \uBC0F V2\uC5D0 \uB300\uD574 \uC644\uBCBD\uD55C OSAL\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rendering-done"
  }), `Rendering Done`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Rendering done\xA0`), `\uD6C4\uD06C\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\uB294 \uB80C\uB354\uB9C1\uC774 \uC644\uB8CC\uB41C \uD6C4\uC5D0 TouchGFX Engine\uC5D0\uC11C \uD638\uCD9C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C AL \uBA54\uC11C\uB4DC\uB97C \uAD6C\uD604\uD560 \uB54C AL\uC740 \uB2E4\uC74C \uD504\uB808\uC784\uC744 \uB80C\uB354\uB9C1\uD558\uB294 \uC2DC\uAC04\uC774 \uB420 \uB54C\uAE4C\uC9C0 TouchGFX Engine\uC744 \uCC28\uB2E8\uD574\uC57C \uD569\uB2C8\uB2E4. The standard method to implement this block is to perform a blocking read from a message queue. \uC774\uAC83\uC774 \uC5B4\uB824\uC6B8 \uACBD\uC6B0, HAL \uAC1C\uBC1C\uC790\uB294 \uCC28\uB2E8\uC744 \uC2E4\uD589\uD558\uAE30 \uC704\uD574 \uC5B4\uB5A4 \uBA54\uC18C\uB4DC\uB4E0 \uC790\uC720\uB86D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uB610\uD55C TouchGFX Generator\uB294 \uC774\uB7EC\uD55C \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\uC5D0 RTOS\uC758 \uAE30\uBCF8 \uC694\uC18C\uB4E4\uC774 \uC544\uB2CC \uC2A4\uD540\uB77D(spinlock) \uC744 \uC0AC\uC6A9\uD574 \uB300\uAE30\uD558\uB3C4\uB85D \uBE48 OSAL\uC744 \uC0DD\uC131\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync`), `\uAC00 \uC2DC\uADF8\uB110\uB9C1 \uB418\uBA74`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `(OSWrappers::waitForVSync`), `\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC138\uB9C8\uD3EC\uC5B4/\uB300\uAE30\uC5F4\uC774 \uC2DC\uADF8\uB110\uB9C1\uB428) TouchGFX\uB294 \uB2E4\uC74C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD504\uB808\uC784\uC744 \uB80C\uB354\uB9C1\uD558\uAE30 \uC2DC\uC791\uD569\uB2C8\uB2E4. The following code based on CMSIS V2 causes the TouchGFX engine to block until an element is added to the queue by another part of the system, typically an interrupt synchronized with the display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "RTOS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static osMessageQId vsync_queue = 0; //Queue identifier is assigned elsewhere

void OSWrappers::waitForVSync()
{
    uint32_t dummyGet;
    // First make sure the queue is empty, by trying to remove an element with 0 timeout.
    osMessageQueueGet(vsync_queue, &dummyGet, 0, 0);

    // Then, wait for next VSYNC to occur.
    osMessageQueueGet(vsync_queue, &dummyGet, 0, osWaitForever);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uC5D0\uB294 TouchGFX Generator\uAC00 \uD718\uBC1C\uC131 \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD574`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, ` waitForVSync`), `\uC5D0 \uB300\uD574 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD568\uC218\uB97C \uAD6C\uD604\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "NO_OS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static volatile uint8_t vsync_sem = 0;

void OSWrappers::waitForVSync()
{
    while(!vsync_sem)
    {
        // Perform other work while waiting
        ...
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "While\xA0")), "TouchGFX Engine\uC740 \uB2E4\uB978 \uC791\uC5C5\uB4E4\uC744 \uD1B5\uD574 \uC911\uC694\uD55C \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC788\uB294 \uB2E4\uC74C \uD504\uB808\uC784\uC744 \uC0DD\uC131\uD560 \uB54C\uAE4C\uC9C0 \uB300\uAE30\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-ready"
  }), `Display ready`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uC778 \uD504\uB808\uC784\uC758 \uCC28\uB2E8\uC744 \uD574\uC81C\uD558\uAE30 \uC704\uD55C\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Display ready\xA0`), `\uC2E0\uD638\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC, \uB514\uC2A4\uD50C\uB808\uC774 \uC790\uCCB4 \uB610\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uD0C0\uC774\uBA38\uC758 \uC778\uD130\uB7FD\uD2B8\uC5D0\uC11C \uB098\uC640\uC57C \uD569\uB2C8\uB2E4. The source of the signal is dependent on the type of display.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\xA0\uD074\uB798\uC2A4\uB294 \uC774 \uC2E0\uD638\uC5D0 \uB300\uD574 \uD568\uC218`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\xA0OSWrappers::signalVsync`), `\uB97C \uC815\uC758\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uAD6C\uD604\uB41C \uD568\uC218\uB294\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::waitForVSync`), `\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uB300\uAE30 \uC870\uAC74\uC744 \uCDA9\uC871\uD568\uC73C\uB85C\uC368 \uBA54\uC778 \uB8E8\uD504\uC758 \uCC28\uB2E8\uC744 \uD574\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 CMSIS RTOS \uC608\uB97C \uACC4\uC18D \uC0B4\uD3B4\uBCF4\uC790\uBA74, \uC544\uB798 \uCF54\uB4DC\uB294 \uBA54\uC2DC\uC9C0 \uB300\uAE30\uC5F4\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `vsync_queue`), `\uC5D0 \uBA54\uC2DC\uC9C0\uB97C \uB123\uC5B4\uC11C TouchGFX Engine\uC758 \uCC28\uB2E8\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "RTOS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void OSWrappers::signalVSync()
{
    if (vsync_queue)
    {
        osMessagePut(vsync_queue, dummy, 0);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers::signalVSync `), `\uBA54\uC11C\uB4DC\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uB098 \uD558\uB4DC\uC6E8\uC5B4 \uD0C0\uC774\uBA38\uC5D0\uC11C \uB098\uC628 \uC678\uBD80 \uC2E0\uD638\uC778 LTDC\uB97C \uC704\uD55C \uC778\uD130\uB7FD\uD2B8\uB85C\uBD80\uD130 \uD558\uB4DC\uC6E8\uC5B4 \uB808\uBCA8\uC5D0\uC11C \uD638\uCD9C\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uACE0 0\uC774 \uC544\uB2CC \uAC12\uC744 \uD560\uB2F9\uD574\uC11C while \uB8E8\uD504\uB97C \uC885\uB8CC\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "NO_OS_OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void OSWrappers::signalVSync()
{
    vsync_sem = 1;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "report-touch-and-physical-button-events"
  }), `\uD130\uCE58 \uBC0F \uBB3C\uB9AC\uC801 \uBC84\uD2BC \uC774\uBCA4\uD2B8 \uBCF4\uACE0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C8 \uD504\uB808\uC784\uC744 \uB80C\uB354\uB9C1\uD558\uAE30 \uC804\uC5D0 TouchGFX Engine\uC740\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchController`), `\xA0\uBC0F\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ButtonController\xA0`), `\uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uC678\uBD80 \uC785\uB825\uC744 \uC218\uC9D1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch-coordinates"
  }), `\uD130\uCE58 \uC88C\uD45C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uB098\uC628 \uC88C\uD45C\uB294 TouchGFX Engine\uC5D0 \uC758\uD574 \uD074\uB9AD, \uB4DC\uB798\uADF8 \uBC0F \uC81C\uC2A4\uCC98 \uC774\uBCA4\uD2B8\uB85C \uBCC0\uD658\uB418\uC5B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC804\uB2EC\uB429\uB2C8\uB2E4. TouchGFX Generator\uC5D0\uC11C \uC544\uB798 \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{1-1,6-6}",
    "{1-1,6-6}": true
  }), `static STM32TouchController tc;
static STM32L4DMA dma;
static LCD24bpp display;
static ApplicationFontProvider fontProvider;
static Texts texts;
static TouchGFXHAL hal(dma, display, tc, 390, 390);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Engine\uB294 \uB80C\uB354\uB9C1 \uC8FC\uAE30 \uB3D9\uC548 \uC785\uB825\uC744 \uC218\uC9D1\uD560 \uB54C\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `tc\xA0`), `\uAC1D\uCCB4\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `sampleTouch()\xA0`), `\uD568\uC218\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `AL \uAC1C\uBC1C\uC790\uAC00 \uC81C\uACF5\uD558\uB294 \uD568\uC218\uB294 \uC77D\uAE30 \uD130\uCE58 \uC88C\uD45C \uAC12\uC744 x\uC640 y\uB85C \uD560\uB2F9\uD558\uACE0 \uD130\uCE58 \uAC10\uC9C0 \uC5EC\uBD80(true \uB610\uB294 false)\uB97C \uBC18\uD658\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\uB294 TouchController \uC778\uD130\uD398\uC774\uC2A4 \uD568\uC218\uB97C \uBE48 \uD568\uC218\uB85C \uC815\uC758\uD558\uB294 \uD074\uB798\uC2A4\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. Hal \uAC1C\uBC1C\uC790\uB294 \uD568\uC218\uB97C \uCC44\uC6CC\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uD568\uC218\uB97C \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC5D0\uB294 \uBA87 \uAC00\uC9C0\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `sampleTouch() \uC5D0\uC11C \uD3F4\uB9C1`), `: \uC694\uCCAD\uC744 \uC804\uC1A1\uD558\uACE0 \uACB0\uACFC\uC5D0 \uB300\uD574 \uD3F4\uB9C1\uC744 \uC218\uD589\uD568\uC73C\uB85C\uC368 \uD558\uB4DC\uC6E8\uC5B4 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC(\uBCF4\uD1B5 I2C)\uC5D0\uC11C \uD130\uCE58 \uC0C1\uD0DC\uB97C \uC77D\uC5B4\uC635\uB2C8\uB2E4. This impacts the overall render time of the application as the I2C round-trip is often up to 1 ms during which the graphics engine is blocked.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "strong"
  }, `\uC778\uD130\uB7FD\uD2B8 \uAE30\uBC18`)), `: \uC778\uD130\uB7FD\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. I2C \uC77D\uAE30 \uBA85\uB839\uC740 \uD0C0\uC774\uBA38\uC5D0 \uC758\uD574, \uB610\uB294 \uD130\uCE58 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uB098\uC628 \uC678\uBD80 \uC778\uD130\uB7FD\uD2B8\uC5D0 \uB300\uD55C \uC751\uB2F5\uC73C\uB85C\uC11C \uC8FC\uAE30\uC801\uC73C\uB85C \uC2DC\uC791\uB429\uB2C8\uB2E4. I2C \uB370\uC774\uD130\uAC00 \uAC00\uC6A9 \uC0C1\uD0DC\uAC00 \uB418\uBA74(\uB610 \uB2E4\uB978 \uC778\uD130\uB7FD\uD2B8) \uC774\uB97C \uBA54\uC2DC\uC9C0 \uB300\uAE30\uC5F4\uC774\uB098 \uC804\uC5ED \uBCC0\uC218\uB97C \uD1B5\uD574 STM32TouchController\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `STM32TouchController.cpp`), `(TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB428)\uC5D0\uC11C \uB098\uC628 \uC544\uB798 \uCF54\uB4DC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `sampleTouch`), `\uAC00 RTOS\uB97C \uC774\uC6A9\uD574 \uC2DC\uC2A4\uD15C\uC744 \uAC80\uC0C9\uD558\uB294 \uBC29\uC2DD\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "STM32TouchController.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `bool STM32TouchController::sampleTouch(int32_t& x, int32_t& y)
{
    if (osMessageQueueGet(mid_MsgQueue, &msg, NULL, 0U) == osOK)
    {
        x = msg.x;
        y = msg.y;
        return true;
    }
    return false;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD30C\uC77C\uC758 \uC704\uCE58\uB294 TouchGFX Generator\uC5D0 \uB300\uD55C \uB2E4\uC74C \uC7A5\uC5D0 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "other-external-events"
  }), `\uAE30\uD0C0 \uC678\uBD80 \uC774\uBCA4\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC84\uD2BC \uCEE8\uD2B8\uB864\uB7EC \uC778\uD130\uD398\uC774\uC2A4\uC778`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\xA0touchgfx::ButtonController`), `\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uC2E0\uD638(\uBC84\uD2BC \uB610\uB294 \uAE30\uD0C0)\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB300\uD55C \uC774\uBCA4\uD2B8\uB85C \uB9E4\uD551\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C \uBC18\uC751\uC744 TouchGFX Designer \uB0B4\uC5D0 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC0AC\uC6A9 \uBC29\uBC95\uC740 ButtonController\uB97C \uAC16\uB294 \uAC83\uC774 \uD544\uC218\uAC00 \uC544\uB2C8\uB77C\uB294 \uC810\uC744 \uC81C\uC678\uD558\uACE0 \uC704\uC758 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC640 \uC720\uC0AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC0AC\uC6A9 \uBC29\uBC95\uC740 ButtonController\uB97C \uAC16\uB294 \uAC83\uC774 \uD544\uC218\uAC00 \uC544\uB2C8\uB77C\uB294 \uC810\uC744 \uC81C\uC678\uD558\uACE0 \uC704\uC758 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC640 \uC720\uC0AC\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC744 \uC704\uD574 \uD074\uB798\uC2A4\uC758 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0DD\uC131\uD558\uC5EC\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ButtonController`), `\xA0\uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uD604\uD558\uACE0 HAL\uC5D0 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uB300\uD55C \uCC38\uC870\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyButtonController.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-6}",
    "{3-6}": true
  }), `class MyButtonController : public touchgfx::ButtonController
{
  bool sample(uint8_t& key)
  {
    ... //Sample IO, set key, return true/false
  }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static MyButtonController bc;
void touchgfx_init()
{
  ...
  hal.initialize();
  hal.setButtonController(&bc);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ButtonController \uD074\uB798\uC2A4\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `sample`), `\xA0\uBA54\uC11C\uB4DC\uB294 \uAC01 \uD504\uB808\uC784\uC5D0 \uC55E\uC11C \uD638\uCD9C\uB429\uB2C8\uB2E4. True\uB97C \uBC18\uD658\uD558\uBA74 \uC774 \uAC12\uC774 \uD604\uC7AC \uD654\uBA74\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `handleKeyEvent`), `\xA0\uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uC5D0 \uC804\uB2EC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "ButtonController\uB97C \uD1B5\uD574 \uC0D8\uD50C\uB9C1\uB41C \uAC12\uC744 TouchGFX Designer\uC758 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../ui-development/designer-user-guide/interactions-view",
    mdxType: "Link"
  }, "\uC0C1\uD638 \uC791\uC6A9"), "\uC744 \uC704\uD55C \uD2B8\uB9AC\uAC70\uB85C \uC0AC\uC6A9\uD558\uB294 \uC790\uC138\uD55C \uBC29\uBC95\uC740 \uC0C1\uD638 \uC791\uC6A9\xA0\uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "synchronize-framebuffer-access"
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uC561\uC138\uC2A4 \uB3D9\uAE30\uD654`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC218\uC758 \uB3D9\uC791\uB4E4\uC774 \uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC\uB97C \uC561\uC138\uC2A4\uD558\uB294 \uB370 \uAD00\uC2EC\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `CPU`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB80C\uB354\uB9C1 \uB3D9\uC548 \uD53D\uC140 \uC77D\uAE30 \uBC0F \uC4F0\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMA2D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `*`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD558\uB4DC\uC6E8\uC5B4 \uC9C0\uC6D0 \uB80C\uB354\uB9C1 \uB3D9\uC548 \uD53D\uC140 \uC77D\uAE30 \uBC0F \uC4F0\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBCD1\uB82C RGB \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD558\uB294 \uB3D9\uC548 \uD53D\uC140 \uC77D\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `DMA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `SPI \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD558\uB294 \uB3D9\uC548 \uD53D\uC140 \uC77D\uAE30`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Engine\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers `), `\uC778\uD130\uD398\uC774\uC2A4\uB97C \uD1B5\uD574 \uD504\uB808\uC784 \uBC84\uD37C \uC561\uC138\uC2A4\uB97C \uB3D9\uAE30\uD654\uD558\uBA70, \uB3D9\uC77C\uD55C \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uC561\uC138\uC2A4\uD558\uACE0 \uC2F6\uC740 \uC8FC\uBCC0 \uC7A5\uCE58(\uC608: DMA2D)\uB294 \uC774\uC640 \uB611\uAC19\uC774 \uD574\uC57C \uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC778 \uC124\uACC4\uC5D0\uC11C\uB294 \uC138\uB9C8\uD3EC\uC5B4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uB97C \uBCF4\uD638\uD558\uC9C0\uB9CC, \uB2E4\uB978 \uB3D9\uAE30\uD654 \uBA54\uCEE4\uB2C8\uC998\uC744 \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uD45C\uC5D0\uB294 TouchGFX Generator\uB97C \uD1B5\uD574\uC11C \uC0DD\uC131\uD558\uAC70\uB098 \uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uC0DD\uC131\uD560 \uC218 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `OSWrappers`), `\xA0\uD074\uB798\uC2A4(OSWrappers.cpp)\uC758 \uD568\uC218 \uBAA9\uB85D\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBA54\uC11C\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `takeFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uB300\uD55C \uB3C5\uC810 \uC561\uC138\uC2A4 \uAD8C\uD55C\uC744 \uC5BB\uAE30 \uC704\uD574 TouchGFX Engine\uC5D0\uC11C \uD638\uCD9C\uB429\uB2C8\uB2E4. \uC774 \uBA54\uC11C\uB4DC\uB294 DMA2D\uAC00 \uC218\uD589\uB420 \uB54C\uAE4C\uC9C0(\uC2E4\uD589\uB418\uB294 \uACBD\uC6B0) TouchGFX Engine\uC744 \uCC28\uB2E8\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `tryTakeFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC7A0\uAE08\uC774 \uC2E4\uD589\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4. \uC774 \uBA54\uC11C\uB4DC\uB294 \uCC28\uB2E8\uC744 \uC9C1\uC811 \uD558\uC9C0 \uC54A\uACE0 takeFrameBufferSemaphore\uC5D0 \uB300\uD55C \uB2E4\uC74C \uD638\uCD9C\uC774 \uD638\uCD9C\uC790\uB97C \uCC28\uB2E8\uD558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `giveFrameBufferSemaphore`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uC7A0\uAE08\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `giveFrameBufferSemaphoreFromISR`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC778\uD130\uB7FD\uD2B8 \uCEE8\uD14D\uC2A4\uD2B8\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C \uC7A0\uAE08\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\uB294 OSWrappers \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD574 \uB3D9\uAE30\uD654\uD558\uB294 ChromART \uB4DC\uB77C\uC774\uBC84\uB97C \uBE44\uB86F\uD574, \uC120\uD0DD\uD55C RTOS\uC5D0 \uB530\uB77C \uC774\uB7EC\uD55C \uB3D9\uAE30\uD654\uB97C \uC218\uD589\uD558\uB294 \uD568\uC218\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "report-the-next-available-framebuffer-area"
  }), `\uCC28\uAE30 \uAC00\uC6A9 \uD504\uB808\uC784 \uBC84\uD37C \uC601\uC5ED \uBCF4\uACE0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB80C\uB354\uB9C1 \uC804\uB7B5\uC5D0 \uAD00\uACC4\uC5C6\uC774 TouchGFX Engine\uC740 \uAC01\uAC01\uC758 \uD2F1\uC5D0\uC11C \uD53D\uC140\uC744 \uB80C\uB354\uB9C1\uD574\uC57C \uD558\uB294 \uBA54\uBAA8\uB9AC \uC601\uC5ED\uC744 \uC54C\uC544\uC57C \uD569\uB2C8\uB2E4. TouchGFX Engine\uC740 \uB2E8\uC77C \uB610\uB294 \uC774\uC911 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC804\uCCB4 \uB108\uBE44, \uB192\uC774 \uBC0F \uBE44\uD2B8 \uC2EC\uB3C4\uC5D0 \uB530\uB77C \uBA54\uBAA8\uB9AC \uC601\uC5ED\uC5D0 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD569\uB2C8\uB2E4. \uB610\uD55C \uC774\uC911 \uBC84\uD37C \uC124\uC815\uC5D0\uC11C \uB450 \uBC84\uD37C \uAC04\uC758 \uC2A4\uC651\uB3C4 \uAD00\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4 \uAD8C\uD55C\uC744 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC77C\uBD80\uB85C \uC81C\uD55C\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::getTFTCurrentLine()`), `\xA0\uBA54\uC18C\uB4DC\uB294 HAL \uD558\uC704 \uD074\uB798\uC2A4\uC5D0\uC11C \uC7AC\uAD6C\uD604\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. TouchGFX Engine\uC774 \uADF8\uB9AC\uAE30\uB97C \uC704\uD574 \uC800\uC7A5\uD55C \uBA54\uC18C\uB4DC \uC704\uC758 \uB77C\uC778 \uBC88\uD638\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uB294 \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5\uC744 \uC0AC\uC6A9\uD574 TouchGFX Engine\uC774 \uB80C\uB354\uB9C1 \uC2DC \uC0AC\uC6A9\uD558\uAC8C \uB420 \uBA54\uBAA8\uB9AC\uC758 \uBE14\uB85D\uC744 1\uAC1C \uC774\uC0C1 \uC815\uC758\uD569\uB2C8\uB2E4. \uC774\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../scenarios/lowering-memory-usage-with-partial-framebuffer"
  }), `\uC5EC\uAE30`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Generator\uB294 \uC9C0\uC6D0\uB418\uB294 \uBAA8\uB4E0 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5\uC744 \uC704\uD55C \uAD6C\uC131\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "perform-render-operations"
  }), `\uB80C\uB354\uB9C1 \uC791\uC5C5 \uC218\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uB80C\uB354\uB9C1 \uBC0F \uD45C\uC2DC\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC720\uC77C\uD55C \uBAA9\uC801\uC778 \uACBD\uC6B0\uB294 \uAC70\uC758 \uC5C6\uC2B5\uB2C8\uB2E4. CPU\uB97C \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uB2E4\uB978 \uC791\uC5C5\uB4E4\uB3C4 \uD544\uC694\uD569\uB2C8\uB2E4. TouchGFX\uC758 \uBAA9\uD45C \uC911 \uD558\uB098\uB294 \uAC00\uB2A5\uD55C \uC801\uC740 CPU \uC8FC\uAE30\uB97C \uC0AC\uC6A9\uD574 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uADF8\uB9AC\uB294 \uAC83\uC785\uB2C8\uB2E4. HAL \uD074\uB798\uC2A4\uB294 \uB9CE\uC740 STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2C0\uB85C\uB7EC(\uB610\uB294 \uAE30\uD0C0 \uD558\uB4DC\uC6E8\uC5B4 \uAE30\uB2A5)\uC5D0\uC11C \uB098\uD0C0\uB098\uB294 DMA2D\uB97C \uCD94\uC0C1\uD654\uD558\uC5EC \uC774\uB97C TouchGFX Engine\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Engine\uC740 \uBE44\uD2B8\uB9F5 \uAC19\uC740 \uC790\uC0B0\uC744 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uB80C\uB354\uB9C1\uD560 \uB54C HAL\uC5D0 \uBE44\uD2B8\uB9F5\uC758 \uC77C\uBD80 \uB610\uB294 \uC804\uCCB4\uB97C \uD504\uB808\uC784 \uBC84\uD37C\uB85C '\uBE14\uB9BF(blit, block transfer)' \uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC774 \uC788\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4. \uBE14\uB9BF \uAE30\uB2A5\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC774 CPU\uC5D0\uC11C \uCC98\uB9AC\uB418\uB294 \uB300\uC2E0 HAL\uC5D0 \uC704\uC784\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Engine\uC740\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::getBlitCaps()`), `\xA0\uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uC5EC \uD558\uB4DC\uC6E8\uC5B4\uC758 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC124\uBA85\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4. HAL \uD558\uC704 \uD074\uB798\uC2A4\uB294 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD558\uAE30 \uC704\uD574 \uC774\uB97C \uB2E4\uC2DC \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Engine\uC740 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uADF8\uB9AC\uB294 \uB3D9\uC548 HAL \uD074\uB798\uC2A4\uC5D0\uC11C \uC5F0\uC0B0(\uC608: DMA\uC5D0 \uB300\uD55C \uC5F0\uC0B0\uC744 \uB300\uAE30\uC5F4\uC5D0 \uC800\uC7A5\uD558\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::blitCopy)`), `\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. HAL\uC774 \uD544\uC694\uD55C \uAE30\uB2A5\uC744 \uBCF4\uACE0\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0, TouchGFX Engine\uC740 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB80C\uB354\uB9C1 \uD3F4\uBC31(fallback)\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, ` \uB9CE\uC740 STM32 MCU\uB4E4\uC774 ChromART \uCE69\uC744 \uAC00\uC9C0\uACE0 \uC788\uC5B4\uC11C \uD53D\uC140\uC5D0 \uB300\uD55C \uC54C\uD30C \uBE14\uB80C\uB529\uC744 \uC218\uD589\uD558\uB294 \uB3D9\uC548 \uC608\uB97C \uB4E4\uBA74 \uC678\uBD80 \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB85C \uB370\uC774\uD130\uB97C \uC62E\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9CE\uC740 MCU\uC5D0\uC11C TouchGFX Generator\uB294 ChromART \uCE69\uC744 \uC0AC\uC6A9\uD574 \uBA87\uBA87 "\uBE14\uB9BF(blit)" \uC5F0\uC0B0 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD558\uB294 ChromART \uB4DC\uB77C\uC774\uBC84\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "handle-framebuffer-transfer-to-display"
  }), `\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1 \uCC98\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uB2EC\uD558\uAE30 \uC704\uD574 TouchGFX AL\uC5D0\uC11C\uB294 "Rendering of area complete" \uD6C4\uD06C\uAC00 \uC8FC\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. TouchGFX Engine\uC740 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC77C\uBD80\uC5D0 \uB300\uD55C \uB80C\uB354\uB9C1\uC774 \uC644\uB8CC\uB418\uBA74 AL\uC744 \uC2DC\uADF8\uB110\uB9C1\uD569\uB2C8\uB2E4. AL\uC740 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC774 \uBD80\uBD84\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD558\uB294 \uBC29\uBC95\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "rendering-of-area-complete"
  }), `\uC804\uCCB4 \uC601\uC5ED \uB80C\uB354\uB9C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCF54\uB4DC\uC5D0\uC11C \uC774\uB7EC\uD55C \uD6C4\uD06C\uB294 \uAC00\uC0C1 \uD568\uC218 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HAL::flushFrameBuffer(Rect& rect)`), `\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC \uCEE8\uD2B8\uB864\uB7EC\uB97C \uC7A5\uCC29\uD55C STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C\uB294 \uBAA8\uB4E0 \uB80C\uB354\uB9C1 \uC774\uD6C4\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC804\uC1A1\uD558\uAE30 \uC704\uD55C \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. LTDC\uAC00 \uAC1C\uC2DC\uB41C \uC774\uD6C4\uC5D0 \uC77C\uC815\uD55C \uC8FC\uAE30\uB85C \uC804\uC1A1\uC774 \uACC4\uC18D \uC774\uB8E8\uC5B4\uC9C0\uAE30 \uB54C\uBB38\uC5D0 \uC774 \uBA54\uC11C\uB4DC\uB97C \uBE48 \uC0C1\uD0DC\uB85C \uB0A8\uACA8\uB458 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SPI\uB098 8080 \uAC19\uC740 \uB2E4\uB978 \uB514\uC2A4\uD50C\uB808\uC774 \uC720\uD615\uC5D0\uC11C\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC218\uB3D9\uC73C\uB85C \uC804\uC1A1\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD568\uC218\uB97C \uAD6C\uD604\uD558\uBA74 \uAC1C\uBC1C\uC790\uAC00 GRAM\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD574\uB2F9 \uC601\uC5ED\uC744 \uC218\uB3D9 \uC804\uC1A1\uD558\uB294 \uC791\uC5C5\uC744 \uAC1C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-9}",
    "{9-9}": true
  }), `void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& r)
{
    HAL::flushFrameBuffer(rect); //call superclass

    //start transfer if not running already!
    if (!IsTransmittingData())
    {
        const uint8_t* pixels = ...; // Calculate pixel address
        SendFrameBufferRect((uint8_t*)pixels, r.x, r.y, r.width, r.height);
    }
    else
    {
       ... // Queue rect for later or wait here
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uB2E4\uC591\uD55C \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC9C0\uC6D0\uD558\uB294 \uBC29\uBC95\uC758 \uAD6C\uCCB4\uC801\uC778 \uC608\uB294 \uC2DC\uB098\uB9AC\uC624\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);