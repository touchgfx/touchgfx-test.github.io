"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8579],{

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

/***/ 45431:
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
  id: "hardware-selection-display",
  title: "\u986F\u793A\u5668"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-display",
  "id": "development/hardware-selection/hardware-components/hardware-selection-display",
  "title": "\u986F\u793A\u5668",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-display.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-display",
  "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-display",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-display",
    "title": "\u986F\u793A\u5668"
  },
  "sidebar": "docs",
  "previous": {
    "title": "MCU",
    "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-mcu"
  },
  "next": {
    "title": "\u5916\u90E8\u8A18\u61B6\u9AD4",
    "permalink": "/4.20/zh-TW/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"
  }
};
const assets = {};




const toc = [{
  value: "\u986F\u793A\u5668\u7BC4\u4F8B",
  id: "examples-of-displays",
  level: 2
}, {
  value: "LCD-TFT",
  id: "lcd-tft",
  level: 3
}, {
  value: "MIP",
  id: "mip",
  level: 3
}, {
  value: "ePaper/eInk",
  id: "epapereink",
  level: 3
}, {
  value: "\u986F\u793A\u5668\u4ECB\u9762\u7E3D\u89BD",
  id: "display-interface-overview",
  level: 2
}, {
  value: "\u4EAE\u5EA6\u548C\u80CC\u5149",
  id: "brightness-and-backlight",
  level: 3
}, {
  value: "\u89C0\u770B\u4F4D\u7F6E\u548C\u984F\u8272\u53CD\u8F49",
  id: "viewing-position-and-color-inversion",
  level: 3
}, {
  value: "\u986F\u793A\u5668\u4F7F\u7528\u58FD\u547D",
  id: "display-lifetime",
  level: 3
}, {
  value: "\u50CF\u7D20\u5BC6\u5EA6",
  id: "pixel-density",
  level: 3
}, {
  value: "\u52D5\u614B\u8272\u57DF",
  id: "dynamic-color-range",
  level: 4
}, {
  value: "\u53CD\u92F8\u9F52",
  id: "anti-aliasing",
  level: 4
}, {
  value: "\u74B0\u5883",
  id: "environment",
  level: 3
}, {
  value: "\u89F8\u63A7/\u975E\u89F8\u63A7\u986F\u793A\u5668",
  id: "touch--non-touch-displays",
  level: 3
}, {
  value: "\u96FB\u5BB9\u5F0F\u89F8\u63A7",
  id: "capacitive-touch",
  level: 4
}, {
  value: "\u96FB\u963B\u5F0F\u89F8\u63A7",
  id: "resistive-touch",
  level: 4
}, {
  value: "\u975E\u89F8\u63A7",
  id: "non-touch",
  level: 4
}, {
  value: "\u5177\u6709RAM\u7684\u986F\u793A\u5668",
  id: "displays-with-ram",
  level: 3
}, {
  value: "\u975E\u6B63\u65B9\u5F62\u50CF\u7D20/\u50CF\u7D20\u5BEC\u9AD8\u6BD4",
  id: "non-square-pixels--pixel-aspect-ratio",
  level: 3
}, {
  value: "\u8868\u9762\u84CB\u677F",
  id: "cover-lense",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u524D\u7684\u7522\u54C1\u8D8A\u4F86\u8D8A\u8C50\u5BCC\uFF0C\u4F7F\u7528\u8005\u9AD4\u9A57\u589E\u5F37\uFF0C\u5D4C\u5165\u7684\u986F\u793A\u5668\u66F4\u65B0\u4E14\u66F4\u5927\uFF0C\u800C\u8001\u5F0F\u7684\u5206\u6BB5\u5F0F\u986F\u793A\u5668\u6B63\u5728\u88AB\u4F4E\u5F69\u548C\u9AD8\u5F69\u986F\u793A\u5668\u53D6\u4EE3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7AE0\u5C07\u91CD\u9EDE\u4ECB\u7D39\u5728\u70BA\u5D4C\u5165\u5F0FGUI\u7522\u54C1\u9078\u64C7\u5408\u9069\u7684\u986F\u793A\u5668\u6642\u61C9\u8003\u616E\u7684\u4E00\u4E9B\u6CE8\u610F\u4E8B\u9805\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/displays.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u986F\u793A\u5668\u7684\u4E0D\u540C\u985E\u578B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u7E3D\u9AD4\u800C\u8A00\uFF0CTouchGFX\u53EF\u4EE5\u5728\u4EFB\u4F55\u985E\u578B\u7684\u986F\u793A\u5668\u4E0A\u904B\u884C\uFF0C\u4E0D\u53D7\u986F\u793A\u6280\u8853\u3001\u4ECB\u9762\u3001\u8996\u89D2\u3001\u4EAE\u5EA6\u7B49\u56E0\u7D20\u7684\u5F71\u97FF\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples-of-displays"
  }), `\u986F\u793A\u5668\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u6BCF\u7A2E\u986F\u793A\u5668\u7684\u95DC\u9375\u56E0\u7D20\u4E0D\u540C\uFF0C\u56E0\u6B64\u9078\u64C7\u5408\u9069\u7684\u986F\u793A\u6280\u8853\u53EF\u80FD\u4E26\u4E0D\u90A3\u9EBC\u5BB9\u6613\u3002 \u4E0B\u9762\u4E00\u7AE0\u5C07\u8A73\u7D30\u4ECB\u7D39\u4E0D\u540C\u6280\u8853\uFF0C\u4E5F\u8A31\u80FD\u5E6B\u52A9\u60A8\u627E\u5230\u6B63\u78BA\u7684\u65B9\u5411\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u4E00\u7A2E\u986F\u793A\u5668\u90FD\u5305\u542B\u50CF\u7D20\u884C\u548C\u50CF\u7D20\u5217\uFF08\u5B83\u5011\u7684\u9A45\u52D5\u65B9\u5F0F\u53EF\u80FD\u4E0D\u540C\uFF09\uFF0C\u90FD\u5177\u6709\u5167\u90E8\u548C/\u6216\u5916\u90E8\u986F\u793A\u63A7\u5236\u5668\u548C\u5F71\u50CF\u7DE9\u885DRAM\u3002 \u8207\u5176\u4ED6\u6280\u8853\u76F8\u6BD4\uFF0C\u6709\u4E9B\u6280\u8853\u9700\u8981\u983B\u7E41\u5730\u66F4\u65B0\u6BCF\u500B\u50CF\u7D20\uFF0C\u4F46\u7531\u65BC\u53EA\u5728GUI\u4E2D\u767C\u751F\u8B8A\u5316\u6642\u624D\u66F4\u65B0\uFF0C\u56E0\u6B64\u4E26\u6C92\u6709\u5FC5\u8981\u66F4\u65B0\u6BCF\u500B\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u524D\u6709\u5927\u91CF\u4E0D\u540C\u7684\u986F\u793A\u6280\u8853\u3002 \u4E0B\u9762\u5C07\u4ECB\u7D39\u4E00\u4E9B\u6700\u5E38\u7528\u7684\u986F\u793A\u6280\u8853\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "lcd-tft"
  }), `LCD-TFT`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT\u662F\u6307\u8584\u819C\u96FB\u6676\u9AD4\uFF0C\u662FLCD\u986F\u793A\u5668\u7684\u4E00\u7A2E\u8B8A\u578B\uFF0C\u63A1\u7528\u4E3B\u52D5\u77E9\u9663\u3002 LCD-TFT\u6709\u5404\u7A2E\u4E0D\u540C\u7684\u89E3\u6790\u5EA6\u3001\u5C3A\u5BF8\u3001\u4ECB\u9762\u548C\u50F9\u683C\u5340\u9593\u7B49\uFF0C\u88AB\u5EE3\u6CDB\u61C9\u7528\u5728\u5D4C\u5165\u5F0F\u7522\u54C1\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT-LCD\u7684\u4E00\u4E9B\u8B8A\u578B\u5305\u62ECTN\u548CIPS\u9762\u677F\u3002 \u4EE5IPS TFT-LCD\u70BA\u4F8B\uFF0CSTM32F769 DISCO\u548CSTM32H747 DISCO\u4E8C\u8005\u90FD\u63A1\u7528800*480 MIPI-DSI TFT IPS LCD\u986F\u793A\u5668\u3002 TFT-LCD TN\u986F\u793A\u5668\u7684\u4F8B\u5B50\u6709STM32F746G DISCO\u548CSTM32H7B3I-DK\u3002 \u5169\u7A2E\u6280\u8853\u5E36\u4F86\u4E0D\u540C\u756B\u8CEA\uFF0C\u6709\u4E9B\u5DEE\u7570\u53EF\u80FD\u6E90\u65BC\u984F\u8272\u7684\u5448\u73FE\u53CA\u8996\u89D2\uFF0CIPS\u9762\u677F\u901A\u5E38\u662F\u6700\u597D\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/display-layers.png",
    noShadow: true,
    mdxType: "Figure"
  }, "LCD-TFT\u5C64\u6B21\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mip"
  }), `MIP`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MIP\u8868\u793A\u50CF\u7D20\u8A18\u61B6\u9AD4\uFF0C\u5B83\u4F7F\u7528\u7684\u50CF\u7D20\u6280\u8853\u53EA\u5728\u87A2\u5E55\u5716\u50CF\u767C\u751F\u8B8A\u5316\u6642\u624D\u9700\u8981\u4F7F\u7528\u96FB\u6E90\u53CA\u8CC7\u6599\u3002 MIP\u986F\u793A\u5668\u662F\u4E00\u7A2E\u4F4E\u529F\u8017\u986F\u793A\u5668\uFF0C\u529F\u8017\u5C0F\u65BC\u5168\u5F69GUI\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "epapereink"
  }), `ePaper/eInk`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eInk\u986F\u793A\u5668\u662F\u4F4E\u5F69\u986F\u793A\u5668\uFF0C\u5B83\u662F\u4F4E\u529F\u8017\u3001\u5BEC\u8996\u89D2\u548C\u6613\u8B80\u578B\u61C9\u7528\u7684\u7406\u60F3\u9078\u64C7\u3002 TouchGFX Implementer SDATAWAY\u793A\u7BC4\u4E86\u5728STM32F412\u4E0A\u57F7\u884CTouchGFX\u61C9\u7528\u7684eInk\u986F\u793A\u5668\uFF0C\u8A73\u60C5\u898B\u7DB2\u5740\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.touchgfx.com/cases/e-ink/"
  }), `https://www.touchgfx.com/cases/e-ink/`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/e-ink.png",
    noShadow: true,
    mdxType: "Figure"
  }, "E-Ink"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-interface-overview"
  }), `\u986F\u793A\u5668\u4ECB\u9762\u7E3D\u89BD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u986F\u793A\u5668\u901A\u904E\u4E0D\u540C\u985E\u578B\u7684\u4ECB\u9762\u9023\u63A5\u5230MCU\u3002 \u986F\u793A\u5668\u4ECB\u9762\u7684\u53C3\u6578\u5404\u4E0D\u76F8\u540C\uFF0C\u4E0B\u4E00\u7BC0\u5C07\u4ECB\u7D39\u5716\u50CF\u76F8\u95DC\u53C3\u6578\uFF0C\u4F8B\u5982\u9700\u8981\u7684\u5F15\u8173\u6578\u548C\u652F\u63F4\u4E0D\u540C\u89E3\u6790\u5EA6\u7684\u6700\u5927\u983B\u5BEC\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u53EF\u4F7F\u7528\u4EFB\u4F55\u986F\u793A\u4ECB\u9762\uFF0CSTM32\u5FAE\u63A7\u5236\u5668\u63D0\u4F9B\u53EF\u9023\u63A5Motorola 6800\u3001Intel 8080\u3001SPI\u3001RGB-TFT\u548CMIPI-DSI\u7684\u5404\u7A2E\u986F\u793A\u4ECB\u9762\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4ECB\u9762`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F15\u8173\u6578\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u76EE\u6A19\u89E3\u6790\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u5927\u983B\u5BEC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u512A\u9EDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7F3A\u9EDE`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `SPI`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u9AD8480*272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16 MHz`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7C21\u55AE\u786C\u9AD4\u4ECB\u9762\uFF0C\u6BD4I2C\u5FEB\uFF0C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5E73\u884C8080/6800 (FMC)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8/16*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u9AD8480*272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB-TFT (LTDC)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8/18/24*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u9AD81280*800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9AD8\u6027\u80FD\uFF0C\u4F4E\u6210\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F15\u8173\u6578\u91CF\u591A\uFF0C\u5E73\u884C\u901A\u4FE1\u53EF\u80FD\u5C0E\u81F4EMC\u554F\u984C\uFF0C\u53EF\u80FD\u9700\u8981\u66F4\u9AD8\u6642\u8108\u983B\u7387`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MIPI-DSI (LTDC)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4/10`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u9AD81280*800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `80Mbps-1.5Gbps`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9AD8\u6027\u80FD\uFF0C\u5F15\u8173\u6578\u91CF\u5C11\uFF0C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u8907\u96DC\u7684\u5354\u5B9A\u548C\u9A45\u52D5\u7A0B\u5F0F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LVDS**`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1366*768`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F4EEMC/\u5E72\u64FE\uFF0C\u901F\u5EA6\u5FEB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9700\u8981\u6A4B\u63A5`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u80FD\u9700\u8981\u984D\u5916\u7684\u5F15\u8173\u7528\u65BC\uFF1A\u89F8\u63A7\u3001\u96FB\u6E90\u3001\u63A7\u5236\u4FE1\u865F\u7B49\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `** \u9023\u63A5LVDS\u986F\u793A\u5668\u6642\u9700\u8981\u9032\u884C\u6A4B\u63A5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "brightness-and-backlight"
  }), `\u4EAE\u5EA6\u548C\u80CC\u5149`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EAE\u5EA6\u55AE\u4F4D\u901A\u5E38\u4F7F\u7528\u574E\u5FB7\u62C9/m\xB2\u3002 \u80CC\u5149\u662F\u986F\u793A\u5668\u6700\u8017\u96FB\u7684\u90E8\u5206\u3002 \u5728\u967D\u5149\u4E0B\uFF0C\u986F\u793A\u5668\u9700\u8981\u7D04600 cd/M2\u7684\u4EAE\u5EA6\u3002 \u8F03\u9AD8\u7684\u4EAE\u5EA6\u901A\u5E38\u6703\u4F7F\u6EAB\u5EA6\u4E0A\u5347\uFF0C\u5F9E\u800C\u7E2E\u77EDLED\u7684\u4F7F\u7528\u58FD\u547D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "viewing-position-and-color-inversion"
  }), `\u89C0\u770B\u4F4D\u7F6E\u548C\u984F\u8272\u53CD\u8F49`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5C07\u986F\u793A\u5668\u5D4C\u5165\u7522\u54C1\u6642\uFF0C\u5FC5\u9808\u9810\u6E2C\u4E26\u77AD\u89E3\u7528\u6236\u53EF\u80FD\u8655\u65BC\u7684\u89C0\u770B\u4F4D\u7F6E\u3002 \u4E00\u4E9B\u986F\u793A\u5668\u5728\u5F9E\u7279\u5B9A\u4F4D\u7F6E\u89C0\u770B\u6642\uFF0C\u53EF\u80FD\u767C\u751F\u984F\u8272\u53CD\u8F49\u3002 \u9019\u610F\u5473\u8457\uFF0C\u60F3\u8981\u5C07\u986F\u793A\u5668\u5B89\u88DD\u5728\u5408\u9069\u4F4D\u7F6E\uFF0C\u4E26\u4F7F\u7528\u6236\u80FD\u5920\u5728\u64CD\u4F5C\u548C\u9AD4\u9A57GUI\u7684\u540C\u6642\u9084\u80FD\u770B\u5230\u756B\u9762\u8A2D\u8A08\u5E2B\u8A2D\u8A08\u7684\u6B63\u78BA\u984F\u8272\uFF0C\u4E26\u6C92\u6709\u90A3\u9EBC\u5BB9\u6613\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TN\u9762\u677F\u53EF\u80FD\u767C\u751F\u984F\u8272\u53CD\u8F49\u3002 \u6DFB\u52A0\u4E00\u5C64SWV\u819C\u6709\u52A9\u65BC\u589E\u5927\u8996\u89D2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/viewing-position.png",
    mdxType: "Figure"
  }, "\u5F9E\u4E0D\u540C\u89C0\u770B\u4F4D\u7F6E\u770B\u5230\u7684\u984F\u8272"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-lifetime"
  }), `\u986F\u793A\u5668\u4F7F\u7528\u58FD\u547D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u58FD\u547D\u7684\u5B9A\u7FA9\u662F\u986F\u793A\u5668\u572825\u2103\u689D\u4EF6\u4E0B\u964D\u81F3\u4E00\u534A\u4EAE\u5EA6\u6240\u7D93\u6B77\u7684\u6642\u9593\u3002 \u5982\u679C\u7522\u54C1\u7684\u751F\u547D\u9031\u671F\u9577\uFF0C\u5247\u5FC5\u9808\u8003\u616E\u6B64\u53C3\u6578\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "pixel-density"
  }), `\u50CF\u7D20\u5BC6\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u50CF\u7D20\u5BC6\u5EA6\u5B9A\u7FA9\u4E86\u6BCF\u82F1\u5BF8\u6216\u5E73\u65B9\u82F1\u5BF8\u986F\u793A\u7684\u50CF\u7D20\u6578\u3002 \u53EF\u6839\u64DA\u6700\u7D42\u4F7F\u7528\u8005\u3001\u74B0\u5883\u548C\u8A2D\u8A08\u9700\u6C42\u7B49\u56E0\u7D20\u9078\u64C7\u5408\u9069\u7684\u50CF\u7D20\u5BC6\u5EA6\u3002 \u5177\u9AD4\u4F86\u8AAA\uFF0C\u4E00\u90E8\u9AD8\u968E\u624B\u6A5F\u76842340x1080\u50CF\u7D20\u30016.1\u82F1\u5BF8\u87A2\u5E55\u7684\u50CF\u7D20\u5BC6\u5EA6\u70BA\u6BCF\u5E73\u65B9\u82F1\u5BF8178,500\u500B\u50CF\u7D20\uFF0C\u800C\u5E38\u7528\u7684800x480\u50CF\u7D20\u30015\u82F1\u5BF8TFT\u986F\u793A\u5668\u7684\u50CF\u7D20\u5BC6\u5EA6\u70BA\u6BCF\u5E73\u65B9\u82F1\u5BF834,816\u500B\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/pixel-density.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4F4E\u3001\u4E2D\u3001\u9AD8\u50CF\u7D20\u5BC6\u5EA6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u6A19\u6E96\u89E3\u6790\u5EA6\u3001\u986F\u793A\u5668\u5C3A\u5BF8\u548C\u50CF\u7D20\u5BC6\u5EA6\u662F\u7528\u6BCF\u5E73\u65B9\u82F1\u5BF8\u50CF\u7D20\u6578\uFF08PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `\uFF09\u4F86\u8861\u91CF\u7684\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `QVGA 320*240`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2.4\u201D (27,777 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3.5\u201D (13,061 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `WQVGA 480*272`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4,3\u201D (16,462 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5\u201D (12,175 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `HVGA 480*320`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3.5\u201D (27,167 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `VGA 640*480`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5,7\u201D (19,698 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `6.4 (15,625 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `WVGA 800*480`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4\u201D (54,400 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5\u201D (34,816 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "td"
  }, `WSVGA 1024*600`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `7\u201D (28,746 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10,1\u201D (13,808 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C31\u67D0\u4E9B\u61C9\u7528\u800C\u8A00\uFF0C\u9664\u975E\u89C0\u770B\u6642\u8207\u986F\u793A\u5668\u4E4B\u9593\u7684\u8DDD\u96E2\u975E\u5E38\u8FD1\uFF0C\u5426\u5247\uFF0C\u53EF\u80FD\u96E3\u4EE5\u770B\u51FA\u4EFB\u4F55\u5DEE\u7570\u3002 \u5716\u5143\u5BC6\u5EA6\u7BC4\u4F8B\uFF1ASTM32F476DISCO\u70BA16,462 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `\uFF0CSTM32F769DISCO\u70BA54,400 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u4E0A\u8FF0\u7BC4\u4F8B\u4E2D\u7684\u4E0D\u540C\u5716\u5143\u5BC6\u5EA6\u53EF\u80FD\u6703\u5F71\u97FF\u52D5\u614B\u8272\u57DF\u548C\u53CD\u92F8\u9F52\u6548\u679C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "dynamic-color-range"
  }), `\u52D5\u614B\u8272\u57DF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u52D5\u614B\u8272\u57DF\u662F\u6307\u5169\u7A2E\u5C0D\u6BD4\u8272\uFF08\u5982\u9ED1\u8272\u548C\u767D\u8272\uFF09\u4E4B\u6BD4\u3002 \u5728\u4E0A\u9762\u7684\u7BC4\u4F8B\u4E2D\uFF0C\u85CD\u8272\u548C\u767D\u8272\u5305\u542B\u4E0D\u540C\u5C64\u6B21\u7684\u767D\u8272\u548C\u85CD\u8272\u3002 \u5716\u50CF\u5DE6\u5074\u7684\u50CF\u7D20\u5BC6\u5EA6\u8F03\u4F4E\uFF0C\u800C\u5716\u50CF\u53F3\u5074\u70BA\u4E86\u986F\u793A\u6240\u6709\u984F\u8272\uFF0C\u5305\u542B\u7684\u50CF\u7D20\u66F4\u591A\uFF0C\u56E0\u6B64\u4E0D\u540C\u984F\u8272\u8207\u908A\u7DE3\u4E4B\u9593\u66F4\u52A0\u5E73\u6ED1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "anti-aliasing"
  }), `\u53CD\u92F8\u9F52`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u50CF\u7D20\u5BC6\u5EA6\u904E\u4F4E\u6642\uFF0C\u53EF\u80FD\u7522\u751F\u968E\u68AF\u6548\u61C9\u3002 \u5728\u61C9\u7528\u4E2D\u4F7F\u7528\u53CD\u92F8\u9F52\u6280\u8853\u53EF\u4F7F\u5716\u50CF\u4E2D\u7684\u9019\u4E9B\u968E\u68AF\u908A\u7DE3\u8B8A\u5F97\u5E73\u6ED1\u3002 \u53EF\u4EE5\u770B\u5230\uFF0C\u524D\u5169\u500B\u85CD\u8272\u5713\u5708\u986F\u793A\u51FA\u968E\u68AF\u6548\u61C9\uFF0C\u9019\u662F\u56E0\u70BA\u50CF\u7D20\u5BC6\u5EA6\u4E0D\u5141\u8A31\u986F\u793A\u5668\u986F\u793A\u8DB3\u5920\u591A\u7684\u50CF\u7D20\uFF0C\u4EE5\u81F4\u6C92\u6709\u8DB3\u5920\u9AD8\u7684\u8272\u57DF\u4F86\u5BE6\u73FE\u8DB3\u5920\u9AD8\u7684\u53CD\u92F8\u9F52\u6548\u679C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/anti-aliasing.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u53CD\u92F8\u9F52"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "environment"
  }), `\u74B0\u5883`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u6C7A\u5B9A\u4F7F\u7528\u54EA\u7A2E\u986F\u793A\u5668\u6642\uFF0C\u5FC5\u9808\u8003\u616E\u74B0\u5883\u56E0\u7D20\u3002 \u56E0\u6B64\u8ACB\u601D\u8003\u4EE5\u4E0B\u554F\u984C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u986F\u793A\u5668\u662F\u5426\u53D7\u5230\u967D\u5149\u76F4\u5C04\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u662F\u5426\u5728\u9700\u8981\u6297\u885D\u64CA\u7684\u60E1\u52A3\u74B0\u5883\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u64CD\u4F5C\u54E1\u662F\u5426\u6703\u6234\u624B\u5957\u64CD\u4F5C\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u662F\u5426\u9700\u8981\u9632\u6B62\u60E1\u610F\u7834\u58DE\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u662F\u5426\u53EA\u9700\u901A\u904E\u7269\u7406\u6309\u9215\u64CD\u4F5C\uFF1F`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56DE\u7B54\u9019\u4E9B\u554F\u984C\u5C07\u6709\u52A9\u65BC\u60A8\u66F4\u597D\u5730\u7406\u89E3\u8981\u9078\u64C7\u54EA\u7A2E\u89F8\u63A7\u6280\u8853\uFF0C\u751A\u81F3\u662F\u5426\u9700\u8981\u89F8\u63A7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX\u53EF\u5728\u89F8\u63A7\u548C\u975E\u89F8\u63A7\u986F\u793A\u5668\u4E0A\u904B\u884C\uFF0CTouchGFX GUI\u4EA6\u53EF\u901A\u904E\u6309\u9215\u3001\u624B\u52E2\u548C\u8072\u97F3\u9032\u884C\u63A7\u5236\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch--non-touch-displays"
  }), `\u89F8\u63A7/\u975E\u89F8\u63A7\u986F\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u524D\u5E02\u5834\u4E0A\u6709\u4E0D\u540C\u7684\u89F8\u63A7\u6280\u8853\uFF0C\u4F8B\u5982\uFF1A\u96FB\u963B\u5F0F\u3001\u96FB\u5BB9\u5F0F\uFF08\u8868\u9762\u3001\u6295\u5F71\uFF09\u3001SAW\u89F8\u63A7\u548C\u7D05\u5916\u89F8\u63A7\u3002 \u672C\u7BC0\u5C07\u53EA\u4ECB\u7D39\u5176\u4E2D\u7684\u67D0\u4E9B\u6280\u8853\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "capacitive-touch"
  }), `\u96FB\u5BB9\u5F0F\u89F8\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9019\u662F\u6700\u6D41\u884C\u7684\u89F8\u63A7\u6280\u8853\u4E4B\u4E00\u3002 \u5B83\u6709\u5169\u7A2E\u611F\u61C9\u6280\u8853\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u81EA\u5BB9\u5F0F\u7528\u65BC\u55AE\u6307\u89F8\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E92\u5BB9\u5F0F\u5141\u8A31\u591A\u6307\u89F8\u63A7\uFF0C\u4F46\u66B4\u9732\u5728\u6C34\u4E2D\u6216\u6F6E\u6FD5\u74B0\u5883\u4E2D\u6642\u6703\u9762\u81E8\u56F0\u96E3\uFF08TouchGFX\u4E0D\u652F\u6301\u591A\u6307\u89F8\u63A7\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5927\u591A\u6578STM32 DISCO\u677F\u4F7F\u7528\u96FB\u5BB9\u5F0F\u89F8\u63A7\uFF0C\u5982STM32H7B3I DISCO\u3001STM32H750 DISCO\u548CSTM32F746G DISCO\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "resistive-touch"
  }), `\u96FB\u963B\u5F0F\u89F8\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u96FB\u963B\u5F0F\u89F8\u63A7\u662F\u4E00\u7A2E\u901A\u904E\u6A5F\u68B0\u58D3\u529B\u555F\u52D5\u7684\u7C21\u55AE\u6280\u8853\uFF0C\u53EA\u9700\u8981ADC\u6216\u7C21\u55AE\u7684\u89F8\u6478\u63A7\u5236\u5668\u3002 \u7531\u65BC\u6280\u8853\u6210\u719F\uFF0C\u50F9\u683C\u901A\u5E38\u8F03\u4F4E\u3002 \u96FB\u963B\u5F0F\u89F8\u63A7\u6709\u8F03\u4F73\u7684\u8868\u9762\u7684\u9632\u522E\u64E6\u548C\u9632\u6495\u88C2\u4FDD\u8B77\uFF0C\u4F46\u9632\u6B62\u60E1\u610F\u7834\u58DE\u7684\u80FD\u529B\u8F03\u5DEE\u3002 \u6B64\u5916\uFF0C\u5728\u967D\u5149\u4E0B\u7684\u53EF\u8B80\u6027\u8F03\u4F4E\u3002 STM32F429 DISCO\u677F\u4F7F\u7528\u96FB\u963B\u5F0F\u89F8\u63A7\uFF0C\u5177\u6709TouchGFX\u61C9\u7528\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "non-touch"
  }), `\u975E\u89F8\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u60C5\u6CC1\u4E0B\uFF0C\u5982\u679C\u901A\u904E\u6309\u9215\u63A7\u5236GUI\uFF0C\u4E14\u53EA\u9700\u986F\u793A\u5F71\u50CF/\u5F71\u7247\uFF0C\u6216\u901A\u904E\u53E6\u4E00\u500B\u8A2D\u5099\u9032\u884C\u5916\u90E8\u63A7\u5236\u6642\uFF0C\u662F\u5426\u70BA\u7522\u54C1\u6DFB\u52A0\u89F8\u63A7\u529F\u80FD\u5C07\u7121\u95DC\u7DCA\u8981\u3002 \u4E0D\u70BA\u986F\u793A\u5668\u589E\u52A0\u89F8\u63A7\u5C64\u53EF\u4EE5\u964D\u4F4E\u986F\u793A\u5668\u50F9\u683C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "displays-with-ram"
  }), `\u5177\u6709RAM\u7684\u986F\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u63A1\u7528Motorla 6800\u3001Intel 8080\u3001SPI\u6216MIPI-DSI\u4ECB\u9762\u7684\u986F\u793A\u5668\u901A\u5E38\u5167\u7F6ERAM\uFF08GRAM\uFF09\uFF0C\u5176\u5927\u5C0F\u70BA1\u500B\u5B8C\u6574\u7684\u5F71\u50CF\u7DE9\u885D\u3002 \u9019\u4E9B\u985E\u578B\u7684\u986F\u793A\u5668\u53EF\u901A\u904ESPI\u3001FMC\u6216DSI\u4E3B\u6A5F\uFF08LTDC\uFF09\u9023\u63A5\u5230MCU\u3002 \u986F\u793A\u5668RAM\u9700\u8981\u53E6\u4E00\u500B\u5916\u90E8RAM\uFF08\u5E40\u7DE9\u885D\uFF09\uFF0C\u5B83\u53EF\u4EE5\u4F4D\u65BCMCU\u4E2D\u6216\u5916\u90E8RAM\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/gram-mipi.png",
    noShadow: true,
    mdxType: "Figure"
  }, "MIPI-DSI\u986F\u793A\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\uFF0C\u4E0D\u9700\u8981\u5916\u90E8RAM\uFF08MCU\u4EE5\u5916\uFF09\u4F86\u5B58\u5132\u5E40\u7DE9\u885D\uFF0C\u56E0\u6B64\u4F7F\u7528MCU\u4E2D\u53EF\u7528\u7684\u5167\u90E8RAM\u3002 \u5982\u679CMCU RAM\u5C0F\u65BC1\u500B\u5B8C\u6574\u7684\u5F71\u50CF\u7DE9\u885D\uFF0C\u5247\u53EF\u4EE5\u4F7F\u7528TouchGFX\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u7279\u6027\uFF0C\u9019\u6A23\u53EF\u4F7F\u5F71\u50CF\u7DE9\u885D\u7684\u7A7A\u9593\u5360\u7528\u91CF\u7DAD\u6301\u5728\u6975\u4F4E\u6C34\u6E96\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53C3\u898B ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../../scenarios/lowering-memory-usage-with-partial-framebuffer",
    mdxType: "Link"
  }, "\u90E8\u5206\u5F71\u50CF\u7DE9\u885D\u201D\u4E00\u7BC0\u77AD\u89E3\u66F4\u591A\u5167\u5BB9")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/gram-spi.png",
    noShadow: true,
    mdxType: "Figure"
  }, "SPI \u986F\u793A\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "non-square-pixels--pixel-aspect-ratio"
  }), `\u975E\u6B63\u65B9\u5F62\u50CF\u7D20/\u50CF\u7D20\u5BEC\u9AD8\u6BD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5E38\u898B\u7684\u50CF\u7D20\u5F62\u72C0\u662F\u6B63\u65B9\u5F62\uFF0C\u4F46\u67D0\u4E9B\u986F\u793A\u5668\u4F7F\u7528\u975E\u6B63\u65B9\u5F62\u50CF\u7D20\u3002 \u50CF\u7D20\u5BEC\u9AD8\u6BD4\u662F\u50CF\u7D20\u5BEC\u5EA6\u8207\u50CF\u7D20\u9AD8\u5EA6\u4E4B\u6BD4\u3002 \u56E0\u6B64\uFF0C\u50CF\u7D20\u5BEC\u5EA6\u548C\u9AD8\u5EA6\u5747\u70BA100\u7684\u6B63\u65B9\u5F62\u50CF\u7D20\u7684\u5BEC\u9AD8\u6BD4\u70BA1/1\u3002 \u975E\u6B63\u65B9\u5F62\u5716\u5143\u5247\u6709\u4E0D\u540C\u7684\u5716\u5143\u5BEC\u9AD8\u6BD4\u3002 \u5982\u679C\u756B\u9762\u8A2D\u8A08\u5E2B\u4E0D\u8003\u616E\u9019\u4E00\u9EDE\uFF0C\u5247\u986F\u793A\u7684\u9EDE\u9663\u5716\u53EF\u80FD\u88AB\u62C9\u4F38\uFF0C\u5982\u4E0B\u5716\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/pixel-aspect.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u88AB\u62C9\u4F38\u7684\u9EDE\u9663\u5716"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cover-lense"
  }), `\u8868\u9762\u84CB\u677F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u65BC\u986F\u793A\u5668\u662F\u5D4C\u5165\u5F0F\u5716\u5F62\u5316\u4F7F\u7528\u8005\u4ECB\u9762\u7522\u54C1\u7684\u8868\u5C64\uFF0C\u589E\u52A0\u8868\u9762\u84CB\u677F\u53EF\u4EE5\u6539\u5584\u5916\u89C0\u548C\u89F8\u611F\u3002 \u8868\u9762\u84CB\u677F\u53EF\u4EE5\u6539\u5584\u8A2D\u8A08\u6548\u679C\u3001\u6297\u522E\u64E6\u6027\u3001\u6297\u885D\u64CA\u6027\u548C\u984F\u8272\u7B49\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);