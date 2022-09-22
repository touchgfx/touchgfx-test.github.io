"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4286],{

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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


/***/ }),

/***/ 82985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Shortcut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: "shortcut"
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Shortcut);


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

/***/ 35620:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82985);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37793);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70814);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31217);
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
  id: "installation",
  title: "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "introduction/installation",
  "id": "introduction/installation",
  "title": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/installation.mdx",
  "sourceDirName": "introduction",
  "slug": "/introduction/installation",
  "permalink": "/4.20/ja/docs/introduction/installation",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "installation",
    "title": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u524D\u63D0\u6761\u4EF6",
    "permalink": "/4.20/ja/docs/introduction/prerequisites"
  },
  "next": {
    "title": "\u4F7F\u7528\u65B9\u6CD5",
    "permalink": "/4.20/ja/docs/introduction/getting-started"
  }
};
const assets = {};






const toc = [{
  value: "STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3067\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u4F5C\u6210",
  id: "prototyping-on-stm32-evaluation-kits",
  level: 2
}, {
  value: "TouchGFX Designer\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
  id: "installing-touchgfx-designer",
  level: 3
}, {
  value: "STM32CubeProgrammer\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
  id: "installing-stm32cubeprogrammer",
  level: 3
}, {
  value: "STM32 ST-LINK\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
  id: "installing-stm32-st-link-utility",
  level: 3
}, {
  value: "\u30AB\u30B9\u30BF\u30E0\u88FD\u54C1\u958B\u767A",
  id: "custom-product-development",
  level: 2
}, {
  value: "CubeMX\u3067\u306ETouchGFX Generator\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
  id: "installing-touchgfx-generator-in-stm32cubemx",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u306FX-CUBE-TOUCHGFX zip\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u914D\u5E03\u3055\u308C\u3001\u4EE5\u4E0B\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u542B\u307F\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Designer`), `\uFF1AWindows\u30D9\u30FC\u30B9\u306EGUI\u30D3\u30EB\u30C0\u3092\u901A\u3057\u3066UI\u3092\u69CB\u7BC9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Generator`), ` \uFF1AUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u52D5\u4F5C\u3055\u305B\u308BTouchGFX C++\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX \u30A8\u30F3\u30B8\u30F3`), `\uFF1AUI\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u52D5\u4F5C\u3055\u305B\u308BTouchGFX C++\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prototyping-on-stm32-evaluation-kits"
  }), `STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3067\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u4F5C\u6210`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3092\u4F7F\u7528\u3057\u3066\u3001STM32\u8A55\u4FA1\u30AD\u30C3\u30C8\u3067\u4F55\u3089\u304B\u306E\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u4F5C\u6210\u3057\u3066\u307F\u305F\u3044\u3068\u3092\u304A\u8003\u3048\u306E\u5834\u5408\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#installing-touchgfx-designer"
  }), `TouchGFX Designer\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u3054\u53C2\u7167\u304F\u3060\u3055\u3044\u3002\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-touchgfx-designer"
  }), `TouchGFX Designer\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/embedded-software/x-cube-touchgfx.html",
    target: "_blank",
    mdxType: "Link"
  }, "\u516C\u5F0FWeb\u30B5\u30A4\u30C8\u306Est.com"), "\u304B\u3089\u3001X-CUBE-TOUCHGFX\u3092\u304A\u4F7F\u3044\u306E\u30CF\u30FC\u30C9\uFF65\u30C9\u30E9\u30A4\u30D6\u4E0A\u306E\u4EFB\u610F\u306E\u5834\u6240\u306B\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3001\u62BD\u51FA\u3057\u307E\u3059\u3002", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/get-software.png",
    mdxType: "Figure"
  }, "st.com\u304B\u3089X-CUBE-TOUCHGFX\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u62BD\u51FA\u3057\u305F\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u6B21\u306E\u30D1\u30B9\u306BTouchGFX .msi\u30A4\u30F3\u30B9\u30C8\u30FC\u30E9\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Utilities\\PC_Software\\TouchGFXDesigner
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.msi\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30E9\u304C\u8D77\u52D5\u3057\u307E\u3059\u3002 \u6307\u793A\u306B\u5F93\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\uFF65\u30D7\u30ED\u30BB\u30B9\u3092\u5B8C\u4E86\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/designer-installation.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Designer\u304B\u3089\u30DC\u30FC\u30C9\u306B\u76F4\u63A5Flash\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30C4\u30FC\u30EB\u304C\u5FC5\u8981\u3067\u3059", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeprog.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32CubeProgrammer")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stsw-link004.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32 ST-LINK\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-stm32cubeprogrammer"
  }), `STM32CubeProgrammer\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubeprog.html"
  }), `STM32CubeProgrammer\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9`), `\u304B\u3089STM32CubeProgrammer\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F\u5F8C\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.zip`), `\u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u51CD\u3057\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.exe`), `\u30A4\u30F3\u30B9\u30C8\u30FC\u30E9\uFF65\u30D5\u30A1\u30A4\u30EB\u3092\u8D77\u52D5\u3057\u307E\u3059\u3002 \u305D\u306E\u5F8C\u3001\u6307\u793A\u306B\u5F93\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\uFF65\u30D7\u30ED\u30BB\u30B9\u3092\u5B8C\u4E86\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/cube-programmer-installer.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306BFlash\u3059\u308B\u305F\u3081\u306B\u3001TouchGFX Designer\u3068Makefile\u3067STM32CubeProgrammer\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001\u3053\u308C\u3092\u6B21\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5834\u6240\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-stm32-st-link-utility"
  }), `STM32 ST-LINK\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stsw-link004.html"
  }), `STM32 ST-LINK\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3`), `\u304B\u3089STM32 ST-LINK\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F\u5F8C\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.exe`), `\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304D\u3001\u6307\u793A\u306B\u5F93\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\uFF65\u30D7\u30ED\u30BB\u30B9\u3092\u5B8C\u4E86\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/st-link-utility-installer.png",
    mdxType: "Figure"
  }, "STM32 ST-LINK\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\u30BF\u30FC\u30B2\u30C3\u30C8\uFF65\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u306BFlash\u3059\u308B\u305F\u3081\u306B\u3001TouchGFX Designer\u3068Makefile\u3067STM32 ST-LINK\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001\u3053\u308C\u3092\u6B21\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5834\u6240\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-product-development"
  }), `\u30AB\u30B9\u30BF\u30E0\u88FD\u54C1\u958B\u767A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ST\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\uFF65\u30AD\u30C3\u30C8\u307E\u305F\u306F\u72EC\u81EA\u30AB\u30B9\u30BF\u30E0\u306ESTM32\u30D9\u30FC\u30B9\uFF65\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u3044\u305A\u308C\u304B\u3067TouchGFX\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408\u306F\u3001\u300C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#installing-touchgfx-generator-in-stm32cubemx"
  }), `CubeMX\u3067\u306ETouchGFX Generator\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), `\u300D\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-touchgfx-generator-in-stm32cubemx"
  }), `CubeMX\u3067\u306ETouchGFX Generator\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubemx.html"
  }), `CubeMX`), `\u3092\u4ECB\u3057\u3066X-CUBE-TOUCHGFX\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u306B\u306F\u3001\u307E\u305A\u3001\uFF3BHelp\uFF3D\u306E\u4E0B\u306E\uFF3BManage Embedded Software Packages\uFF3D\u3092\u9078\u629E\u3057\u307E\u3059\uFF08\u307E\u305F\u306FAlt + U\u3092\u62BC\u3057\u307E\u3059\uFF09\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Alt + U`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/manage-packages.png",
    mdxType: "Figure"
  }, "\uFF3BHelp\uFF3D -> \uFF3BManage embedded software packages\uFF3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BRefresh\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u4F7F\u7528\u53EF\u80FD\u306A\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u6700\u65B0\u306E\u30EA\u30B9\u30C8\u3092\u8868\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/refresh.png",
    mdxType: "Figure"
  }, "\uFF3BRefresh\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u4F7F\u7528\u53EF\u80FD\u306A\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u66F4\u65B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uFF3BSTMicroelectronics\uFF3D\u30BF\u30D6\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002 \u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\uFF3BX-CUBE-TOUCHGFX\uFF3D\u3092\u898B\u3064\u3051\u3001\u3053\u306E\u30CE\u30FC\u30C9\u3092\u5C55\u958B\u3057\u307E\u3059\u3002 [TouchGFX Generator\uFF3D\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u3001\uFF3BInstall Now\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u3001\u30E9\u30A4\u30BB\u30F3\u30B9\u5951\u7D04\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/install-now.png",
    mdxType: "Figure"
  }, "TouchGFX Generator\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u898B\u3064\u3051\u308B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30E9\u30A4\u30BB\u30F3\u30B9\u5951\u7D04\u3092\u8AAD\u3093\u3067\u540C\u610F\u3057\u3001\uFF3BFinish\uFF3D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001CubeMX\u5185\u306BTouchGFX Generator\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/license-agreement.png",
    mdxType: "Figure"
  }, "\u30E9\u30A4\u30BB\u30F3\u30B9\u5951\u7D04\u306B\u540C\u610F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `X-CUBE-TOUCHGFX\u30C7\u30A3\u30B9\u30C8\u30EA\u30D3\u30E5\u30FC\u30B7\u30E7\u30F3\u304C\u6B21\u306E\u30D1\u30B9\u306B\u5C55\u958B\u3055\u308C\u307E\u3059\u3002:\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/package-location.png",
    mdxType: "Figure"
  }, "X-CUBE-TOUCHGFX\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u5834\u6240"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);