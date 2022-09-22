"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[46],{

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

/***/ 36579:
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
  title: "\u663E\u793A\u5C4F"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-display",
  "id": "development/hardware-selection/hardware-components/hardware-selection-display",
  "title": "\u663E\u793A\u5C4F",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-display.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-display",
  "permalink": "/4.20/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-display",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-display",
    "title": "\u663E\u793A\u5C4F"
  },
  "sidebar": "docs",
  "previous": {
    "title": "MCU",
    "permalink": "/4.20/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-mcu"
  },
  "next": {
    "title": "\u5916\u90E8\u5B58\u50A8\u5668",
    "permalink": "/4.20/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"
  }
};
const assets = {};




const toc = [{
  value: "\u663E\u793A\u5C4F\u793A\u4F8B",
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
  value: "\u663E\u793A\u5668\u63A5\u53E3\u603B\u89C8",
  id: "display-interface-overview",
  level: 2
}, {
  value: "\u4EAE\u5EA6\u548C\u80CC\u5149",
  id: "brightness-and-backlight",
  level: 3
}, {
  value: "\u89C2\u770B\u4F4D\u7F6E\u548C\u989C\u8272\u53CD\u8F6C",
  id: "viewing-position-and-color-inversion",
  level: 3
}, {
  value: "\u663E\u793A\u5668\u4F7F\u7528\u5BFF\u547D",
  id: "display-lifetime",
  level: 3
}, {
  value: "\u50CF\u7D20\u5BC6\u5EA6",
  id: "pixel-density",
  level: 3
}, {
  value: "\u52A8\u6001\u8272\u57DF",
  id: "dynamic-color-range",
  level: 4
}, {
  value: "\u6297\u952F\u9F7F",
  id: "anti-aliasing",
  level: 4
}, {
  value: "\u73AF\u5883",
  id: "environment",
  level: 3
}, {
  value: "\u89E6\u63A7/\u975E\u89E6\u63A7\u663E\u793A\u5668",
  id: "touch--non-touch-displays",
  level: 3
}, {
  value: "\u7535\u5BB9\u5F0F\u89E6\u63A7",
  id: "capacitive-touch",
  level: 4
}, {
  value: "\u7535\u963B\u5F0F\u89E6\u63A7",
  id: "resistive-touch",
  level: 4
}, {
  value: "\u975E\u89E6\u63A7",
  id: "non-touch",
  level: 4
}, {
  value: "\u5177\u6709RAM\u7684\u663E\u793A\u5C4F",
  id: "displays-with-ram",
  level: 3
}, {
  value: "\u975E\u6B63\u65B9\u5F62\u50CF\u7D20/\u50CF\u7D20\u5BBD\u9AD8\u6BD4",
  id: "non-square-pixels--pixel-aspect-ratio",
  level: 3
}, {
  value: "\u76D6\u677F\u73BB\u7483",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u524D\u7684\u8D8B\u52BF\u662F\u4EA7\u54C1\u8D8A\u6765\u8D8A\u4E30\u5BCC\uFF0C\u7528\u6237\u4F53\u9A8C\u589E\u5F3A\uFF0C\u5D4C\u5165\u65B0\u7684\u66F4\u5927\u7684\u663E\u793A\u5C4F\uFF0C\u800C\u8001\u5F0F\u7684\u5206\u6BB5\u5F0F\u663E\u793A\u5668\u6B63\u5728\u88AB\u5404\u79CD\u663E\u793A\u5668\u53D6\u4EE3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u7AE0\u5C06\u91CD\u70B9\u5728\u4ECB\u7ECD\u5D4C\u5165\u5F0FGUI\u4EA7\u54C1\u65F6\u9009\u62E9\u5408\u9002\u7684\u663E\u793A\u5C4F\u5E94\u8003\u8651\u7684\u4E00\u4E9B\u6CE8\u610F\u4E8B\u9879\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/displays.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u663E\u793A\u5C4F\u7684\u4E0D\u540C\u7C7B\u578B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u603B\u4F53\u800C\u8A00\uFF0CTouchGFX\u53EF\u4EE5\u5728\u4EFB\u4F55\u7C7B\u578B\u7684\u663E\u793A\u5C4F\u4E0A\u8FD0\u884C\uFF0C\u4E0D\u53D7\u663E\u793A\u6280\u672F\u3001\u63A5\u53E3\u3001\u89C6\u89D2\u3001\u4EAE\u5EA6\u7B49\u56E0\u7D20\u7684\u5F71\u54CD\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples-of-displays"
  }), `\u663E\u793A\u5C4F\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u6BCF\u79CD\u663E\u793A\u5C4F\u7684\u5173\u952E\u56E0\u7D20\u4E0D\u540C\uFF0C\u9009\u62E9\u5408\u9002\u7684\u663E\u793A\u6280\u672F\u53EF\u80FD\u5E76\u4E0D\u90A3\u4E48\u5BB9\u6613\u3002 \u4E0B\u9762\u4E00\u7AE0\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u4E0D\u540C\u6280\u672F\uFF0C\u4E5F\u8BB8\u80FD\u5E2E\u52A9\u60A8\u627E\u5230\u6B63\u786E\u7684\u65B9\u5411\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u4E00\u79CD\u663E\u793A\u5668\u90FD\u5305\u542B\u50CF\u7D20\u884C\u548C\u50CF\u7D20\u5217\uFF08\u5B83\u4EEC\u7684\u9A71\u52A8\u65B9\u5F0F\u53EF\u80FD\u4E0D\u540C\uFF09\uFF0C\u90FD\u5177\u6709\u5185\u90E8\u548C/\u6216\u5916\u90E8\u663E\u793A\u63A7\u5236\u5668\u548C\u5E27\u7F13\u51B2RAM\u3002 \u4E0E\u5176\u4ED6\u6280\u672F\u76F8\u6BD4\uFF0C\u6709\u4E9B\u6280\u672F\u9700\u8981\u9891\u7E41\u5730\u66F4\u65B0\u6BCF\u4E2A\u50CF\u7D20\uFF0C\u800C\u8FD9\u79CD\u6280\u672F\u53EA\u5728GUI\u4E2D\u53D1\u751F\u53D8\u5316\u65F6\u624D\u66F4\u65B0\uFF0C\u56E0\u6B64\u5E76\u6CA1\u6709\u5FC5\u8981\u66F4\u65B0\u6BCF\u4E2A\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u524D\u6709\u5927\u91CF\u4E0D\u540C\u7684\u663E\u793A\u6280\u672F\u3002 \u4E0B\u9762\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u6700\u5E38\u7528\u7684\u663E\u793A\u6280\u672F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "lcd-tft"
  }), `LCD-TFT`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT\u662F\u6307\u8584\u819C\u6676\u4F53\u7BA1\uFF0C\u662FLCD\u663E\u793A\u5668\u7684\u4E00\u79CD\u53D8\u578B\uFF0C\u91C7\u7528\u6709\u6E90\u77E9\u9635\u3002 LCD-TFT\u6709\u5404\u79CD\u4E0D\u540C\u7684\u5206\u8FA8\u7387\u3001\u5C3A\u5BF8\u3001\u63A5\u53E3\u548C\u4EF7\u683C\u533A\u95F4\u7B49\uFF0C\u88AB\u5E7F\u6CDB\u5E94\u7528\u5728\u5D4C\u5165\u5F0F\u4EA7\u54C1\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT-LCD\u7684\u4E00\u4E9B\u53D8\u578B\u5305\u62ECTN\u548CIPS\u9762\u677F\u3002 IPS TFT-LCD\u7684\u4F8B\u5B50\u6709STM32F769 DISCO\u677F\u548CSTM32H747 DISCO\u677F\uFF0C\u4E8C\u8005\u90FD\u642D\u914D800*480 MIPI-DSI TFT IPS LCD\u663E\u793A\u5C4F\u3002 TFT-LCD TN\u663E\u793A\u5C4F\u7684\u4F8B\u5B50\u6709STM32F746G DISCO\u677F\u548CSTM32H7B3I-DK\u677F\u3002 \u4E24\u79CD\u6280\u672F\u5E26\u6765\u4E0D\u540C\u753B\u8D28\uFF0C\u6709\u4E9B\u5DEE\u5F02\u53EF\u80FD\u6765\u6E90\u4E8E\u989C\u8272\u5448\u73B0\u548C\u89C6\u89D2\uFF0CIPS\u9762\u677F\u901A\u5E38\u662F\u6700\u597D\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/display-layers.png",
    noShadow: true,
    mdxType: "Figure"
  }, "LCD-TFT\u56FE\u5C42\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mip"
  }), `MIP`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MIP\u8868\u793A\u50CF\u7D20\u5B58\u50A8\uFF0C\u5B83\u4F7F\u7528\u7684\u50CF\u7D20\u6280\u672F\u53EA\u5728\u5C4F\u5E55\u56FE\u50CF\u53D1\u751F\u53D8\u5316\u65F6\u624D\u9700\u8981\u7535\u6E90/\u6570\u636E\u3002 MIP\u663E\u793A\u5C4F\u662F\u4E00\u79CD\u4F4E\u529F\u8017\u663E\u793A\u5668\uFF0C\u529F\u8017\u5C0F\u4E8E\u5168\u5F69GUI\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "epapereink"
  }), `ePaper/eInk`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eInk\u663E\u793A\u5668\u662F\u4F4E\u5F69\u663E\u793A\u5668\uFF0C\u5B83\u662F\u4F4E\u529F\u8017\u3001\u5BBD\u89C6\u89D2\u548C\u6613\u8BFB\u578B\u5E94\u7528\u7684\u7406\u60F3\u9009\u62E9\u3002 TouchGFX Implementer SDATAWAY\u6F14\u793A\u4E86\u5728STM32F412\u4E0A\u8FD0\u884CTouchGFX\u5E94\u7528\u7684eInk\u663E\u793A\u5668\uFF0C\u8BE6\u60C5\u89C1\u7F51\u5740\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.touchgfx.com/cases/e-ink/"
  }), `https://www.touchgfx.com/cases/e-ink/`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/e-ink.png",
    noShadow: true,
    mdxType: "Figure"
  }, "E-Ink"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-interface-overview"
  }), `\u663E\u793A\u5668\u63A5\u53E3\u603B\u89C8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u663E\u793A\u5668\u901A\u8FC7\u4E0D\u540C\u7C7B\u578B\u7684\u63A5\u53E3\u8FDE\u63A5\u5230MCU\u3002 \u663E\u793A\u5668\u63A5\u53E3\u7684\u53C2\u6570\u5404\u4E0D\u76F8\u540C\uFF0C\u4E0B\u4E00\u8282\u5C06\u4ECB\u7ECD\u56FE\u50CF\u76F8\u5173\u53C2\u6570\uFF0C\u4F8B\u5982\u9700\u8981\u7684\u5F15\u811A\u6570\u548C\u652F\u6301\u4E0D\u540C\u5206\u8FA8\u7387\u7684\u6700\u5927\u5E26\u5BBD\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u53EF\u4F7F\u7528\u4EFB\u4F55\u663E\u793A\u63A5\u53E3\uFF0CSTM32\u5FAE\u63A7\u5236\u5668\u63D0\u4F9B\u53EF\u8FDE\u63A5Motorola 6800\u3001Intel 8080\u3001SPI\u3001RGB-TFT\u548CMIPI-DSI\u7684\u5404\u79CD\u663E\u793A\u63A5\u53E3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u63A5\u53E3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5F15\u811A\u6570\u91CF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u76EE\u6807\u5206\u8FA8\u7387`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u6700\u5927\u5E26\u5BBD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4F18\u70B9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u7F3A\u70B9`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\u7B80\u5355\u786C\u4EF6\u63A5\u53E3\uFF0C\u6BD4I2C\u5FEB\uFF0C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5E76\u884C8080/6800 (FMC)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\u5F15\u811A\u6570\u91CF\u591A\uFF0C\u5E76\u884C\u901A\u4FE1\u53EF\u80FD\u5BFC\u81F4EMC\u95EE\u9898\uFF0C\u53EF\u80FD\u9700\u8981\u66F4\u9AD8\u65F6\u949F\u9891\u7387`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\u9AD8\u6027\u80FD\uFF0C\u5F15\u811A\u6570\u91CF\u5C11\uFF0C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u590D\u6742\u7684\u534F\u8BAE\u548C\u9A71\u52A8\u7A0B\u5E8F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\u4F4EEMC/\u5E72\u6270\uFF0C\u901F\u5EA6\u5FEB`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u9700\u8981\u6865\u63A5`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u5F15\u811A\u7528\u4E8E\uFF1A\u89E6\u5C4F\u3001\u7535\u6E90\u3001\u63A7\u5236\u4FE1\u53F7\u7B49\u3002`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `** \u8FDE\u63A5LVDS\u663E\u793A\u5668\u65F6\u9700\u8981\u8FDB\u884C\u6865\u63A5\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "brightness-and-backlight"
  }), `\u4EAE\u5EA6\u548C\u80CC\u5149`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4EAE\u5EA6\u5355\u4F4D\u901A\u5E38\u4F7F\u7528\u582A\u5FB7\u62C9\u6BCF\u5E73\u7C73\u3002 \u4EAE\u5EA6\u662F\u663E\u793A\u5668\u6700\u8017\u7535\u7684\u90E8\u5206\u3002 \u5728\u9633\u5149\u4E0B\uFF0C\u663E\u793A\u5668\u9700\u8981\u7EA6600 cd/M2\u7684\u4EAE\u5EA6\u3002 \u66F4\u9AD8\u7684\u4EAE\u5EA6\u901A\u5E38\u4F1A\u4F7F\u6E29\u5EA6\u4E0A\u5347\uFF0C\u4ECE\u800C\u7F29\u77EDLED\u7684\u4F7F\u7528\u5BFF\u547D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "viewing-position-and-color-inversion"
  }), `\u89C2\u770B\u4F4D\u7F6E\u548C\u989C\u8272\u53CD\u8F6C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u5C06\u663E\u793A\u5668\u5D4C\u5165\u4EA7\u54C1\u65F6\uFF0C\u5FC5\u987B\u9884\u89C1\u5E76\u4E86\u89E3\u7528\u6237\u53EF\u80FD\u5904\u4E8E\u7684\u89C2\u770B\u4F4D\u7F6E\u3002 \u4E00\u4E9B\u663E\u793A\u5668\u5728\u4ECE\u7279\u5B9A\u4F4D\u7F6E\u89C2\u770B\u65F6\uFF0C\u53EF\u80FD\u53D1\u751F\u989C\u8272\u53CD\u8F6C\u3002 \u8FD9\u610F\u5473\u7740\uFF0C\u60F3\u8981\u5C06\u663E\u793A\u5C4F\u5B89\u88C5\u5728\u5408\u9002\u4F4D\u7F6E\uFF0C\u5E76\u4F7F\u7528\u6237\u80FD\u591F\u5728\u64CD\u4F5C\u548C\u4F53\u9A8CGUI\u7684\u540C\u65F6\u8FD8\u80FD\u770B\u5230\u753B\u9762\u8BBE\u8BA1\u5E08\u8BBE\u8BA1\u7684\u6B63\u786E\u989C\u8272\uFF0C\u5E76\u6CA1\u6709\u90A3\u4E48\u5BB9\u6613\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TN\u9762\u677F\u53EF\u80FD\u53D1\u751F\u989C\u8272\u53CD\u8F6C\u3002 \u6DFB\u52A0\u4E00\u5C42SWV\u819C\u6709\u52A9\u4E8E\u589E\u5927\u89C6\u89D2\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/viewing-position.png",
    mdxType: "Figure"
  }, "\u4ECE\u4E0D\u540C\u89C2\u770B\u4F4D\u7F6E\u770B\u5230\u7684\u989C\u8272"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-lifetime"
  }), `\u663E\u793A\u5668\u4F7F\u7528\u5BFF\u547D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u5BFF\u547D\u7684\u5B9A\u4E49\u662F\u663E\u793A\u5668\u572825\u2103\u6761\u4EF6\u4E0B\u964D\u81F3\u4E00\u534A\u4EAE\u5EA6\u6240\u7ECF\u5386\u7684\u65F6\u95F4\u3002 \u5982\u679C\u4EA7\u54C1\u7684\u751F\u547D\u5468\u671F\u957F\uFF0C\u5219\u5FC5\u987B\u8003\u8651\u6B64\u53C2\u6570\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "pixel-density"
  }), `\u50CF\u7D20\u5BC6\u5EA6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u50CF\u7D20\u5BC6\u5EA6\u5B9A\u4E49\u4E86\u6BCF\u82F1\u5BF8\u6216\u5E73\u65B9\u82F1\u5BF8\u663E\u793A\u7684\u50CF\u7D20\u6570\u3002 \u53EF\u6839\u636E\u6700\u7EC8\u7528\u6237\u3001\u73AF\u5883\u548C\u8BBE\u8BA1\u9700\u6C42\u7B49\u56E0\u7D20\u9009\u62E9\u5408\u9002\u7684\u50CF\u7D20\u5BC6\u5EA6\u3002 \u5177\u4F53\u6765\u8BF4\uFF0C\u4E00\u90E8\u9AD8\u7AEF\u624B\u673A\u76842340x1080\u50CF\u7D206.1\u82F1\u5BF8\u5C4F\u5E55\u7684\u50CF\u7D20\u5BC6\u5EA6\u4E3A\u6BCF\u5E73\u65B9\u82F1\u5BF8178,500\u4E2A\u50CF\u7D20\uFF0C\u800C\u5E38\u7528\u7684800x480\u50CF\u7D205\u82F1\u5BF8TFT\u663E\u793A\u5668\u7684\u50CF\u7D20\u5BC6\u5EA6\u4E3A\u6BCF\u5E73\u65B9\u82F1\u5BF834,816\u4E2A\u50CF\u7D20\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/pixel-density.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u4F4E\u3001\u4E2D\u3001\u9AD8\u50CF\u7D20\u5BC6\u5EA6"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u4E9B\u6807\u51C6\u5206\u8FA8\u7387\u3001\u663E\u793A\u5668\u5C3A\u5BF8\u548C\u50CF\u7D20\u5BC6\u5EA6\u662F\u7528\u6BCF\u5E73\u65B9\u82F1\u5BF8\u50CF\u7D20\u6570(PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `) \u6765\u8861\u91CF\u7684\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `10,1\u201D (13,808 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C31\u67D0\u4E9B\u5E94\u7528\u800C\u8A00\uFF0C\u9664\u975E\u89C2\u770B\u65F6\u4E0E\u663E\u793A\u5C4F\u4E4B\u95F4\u7684\u8DDD\u79BB\u975E\u5E38\u8FD1\uFF0C\u5426\u5219\uFF0C\u53EF\u80FD\u96BE\u4EE5\u770B\u51FA\u4EFB\u4F55\u5DEE\u5F02\u3002 \u50CF\u7D20\u5BC6\u5EA6\u793A\u4F8B\uFF1ASTM32F476DISCO\u4E3A16,462 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `\uFF0CSTM32F769DISCO\u4E3A54,400 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4E0A\u8FF0\u793A\u4F8B\u4E2D\u7684\u4E0D\u540C\u50CF\u7D20\u5BC6\u5EA6\u53EF\u80FD\u4F1A\u5F71\u54CD\u52A8\u6001\u8272\u57DF\u548C\u6297\u952F\u9F7F\u6548\u679C\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "dynamic-color-range"
  }), `\u52A8\u6001\u8272\u57DF`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u52A8\u6001\u8272\u57DF\u662F\u6307\u4E24\u79CD\u5BF9\u6BD4\u8272\uFF08\u5982\u9ED1\u8272\u548C\u767D\u8272\uFF09\u4E4B\u6BD4\u3002 \u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u84DD\u8272\u548C\u767D\u8272\u5305\u542B\u4E0D\u540C\u5C42\u6B21\u7684\u767D\u8272\u548C\u84DD\u8272\u3002 \u56FE\u50CF\u5DE6\u4FA7\u7684\u50CF\u7D20\u5BC6\u5EA6\u8F83\u4F4E\uFF0C\u800C\u56FE\u50CF\u53F3\u4FA7\u4E3A\u4E86\u663E\u793A\u6240\u6709\u989C\u8272\uFF0C\u5305\u542B\u7684\u50CF\u7D20\u66F4\u591A\uFF0C\u56E0\u6B64\u4E0D\u540C\u989C\u8272\u4E0E\u8FB9\u7F18\u4E4B\u95F4\u7684\u8FC7\u6E21\u66F4\u5E73\u6ED1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "anti-aliasing"
  }), `\u6297\u952F\u9F7F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u50CF\u7D20\u5BC6\u5EA6\u8FC7\u4F4E\u65F6\uFF0C\u53EF\u80FD\u4EA7\u751F\u9636\u68AF\u6548\u5E94\u3002 \u5728\u5E94\u7528\u4E2D\u4F7F\u7528\u6297\u952F\u9F7F\u6280\u672F\u53EF\u4F7F\u56FE\u50CF\u4E2D\u7684\u8FD9\u4E9B\u9636\u68AF\u8FB9\u7F18\u53D8\u5F97\u5E73\u6ED1\u3002 \u53EF\u4EE5\u770B\u5230\uFF0C\u524D\u4E24\u4E2A\u84DD\u8272\u5706\u5708\u663E\u793A\u51FA\u9636\u68AF\u6548\u5E94\uFF0C\u8FD9\u662F\u56E0\u4E3A\u50CF\u7D20\u5BC6\u5EA6\u4E0D\u5141\u8BB8\u663E\u793A\u5C4F\u663E\u793A\u8DB3\u591F\u591A\u7684\u50CF\u7D20\uFF0C\u4EE5\u81F4\u6CA1\u6709\u8DB3\u591F\u9AD8\u7684\u8272\u57DF\u6765\u5B9E\u73B0\u8DB3\u591F\u9AD8\u7684\u53CD\u952F\u9F7F\u6548\u679C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/anti-aliasing.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u6297\u952F\u9F7F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "environment"
  }), `\u73AF\u5883`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u51B3\u5B9A\u4F7F\u7528\u54EA\u79CD\u663E\u793A\u5C4F\u65F6\uFF0C\u5FC5\u987B\u8003\u8651\u73AF\u5883\u56E0\u7D20\u3002 \u56DE\u7B54\u4EE5\u4E0B\u95EE\u9898\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u662F\u5426\u663E\u793A\u5C4F\u53D7\u5230\u9633\u5149\u76F4\u5C04\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u662F\u5426\u7528\u5728\u9700\u8981\u6297\u51B2\u51FB\u7684\u6076\u52A3\u73AF\u5883\u4E0B\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u662F\u5426\u64CD\u4F5C\u5458\u4F1A\u6234\u624B\u5957\u64CD\u4F5C\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u662F\u5426\u9700\u8981\u9632\u6B62\u6076\u610F\u7834\u574F\uFF1F`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u662F\u5426\u53EA\u901A\u8FC7\u7269\u7406\u6309\u94AE\u64CD\u4F5C\uFF1F`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56DE\u7B54\u8FD9\u4E9B\u95EE\u9898\u5C06\u6709\u52A9\u4E8E\u60A8\u66F4\u597D\u5730\u7406\u89E3\u8981\u9009\u62E9\u54EA\u79CD\u89E6\u63A7\u6280\u672F\uFF0C\u751A\u81F3\u662F\u5426\u9700\u8981\u89E6\u63A7\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX\u5728\u89E6\u63A7\u548C\u975E\u89E6\u63A7\u663E\u793A\u5668\u4E0A\u8FD0\u884C\uFF0CTouchGFX GUI\u53EF\u901A\u8FC7\u6309\u94AE\u3001\u624B\u52BF\u548C\u58F0\u97F3\u8FDB\u884C\u63A7\u5236\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch--non-touch-displays"
  }), `\u89E6\u63A7/\u975E\u89E6\u63A7\u663E\u793A\u5668`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u76EE\u524D\u5E02\u573A\u4E0A\u6709\u4E0D\u540C\u7684\u89E6\u63A7\u6280\u672F\uFF0C\u4F8B\u5982\uFF1A\u7535\u963B\u5F0F\u3001\u7535\u5BB9\u5F0F\uFF08\u8868\u9762\u3001\u6295\u5F71\uFF09\u3001SAW(\u8868\u9762\u58F0\u6CE2\u5F0F)\u89E6\u63A7\u548C\u7EA2\u5916\u89E6\u63A7\u3002 \u672C\u8282\u5C06\u53EA\u4ECB\u7ECD\u5176\u4E2D\u7684\u67D0\u4E9B\u6280\u672F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "capacitive-touch"
  }), `\u7535\u5BB9\u5F0F\u89E6\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8FD9\u662F\u6700\u6D41\u884C\u7684\u89E6\u63A7\u6280\u672F\u4E4B\u4E00\u3002 \u5B83\u6709\u4E24\u79CD\u611F\u5E94\u6280\u672F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u81EA\u5BB9\u5F0F\u7528\u4E8E\u5355\u6307\u89E6\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E92\u7535\u5BB9\u5F0F\u5141\u8BB8\u591A\u6307\u89E6\u63A7\uFF0C\u4F46\u66B4\u9732\u5728\u6C34/\u6F6E\u6E7F\u73AF\u5883\u4E2D\u65F6\u4F1A\u9762\u4E34\u56F0\u96BE\uFF08TouchGFX\u4E0D\u652F\u6301\u591A\u6307\u89E6\u63A7\uFF09\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5927\u591A\u6570STM32 \u63A2\u7D22\u677F\u4F7F\u7528\u7535\u5BB9\u5F0F\u89E6\u63A7\uFF0C\u5982STM32H7B3I \u63A2\u7D22\u677F\u3001STM32H750 \u63A2\u7D22\u677F\u548CSTM32F746G \u63A2\u7D22\u677F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "resistive-touch"
  }), `\u7535\u963B\u5F0F\u89E6\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7535\u963B\u5F0F\u89E6\u63A7\u662F\u4E00\u79CD\u901A\u8FC7\u673A\u68B0\u538B\u529B\u6FC0\u6D3B\u7684\u7B80\u5355\u6280\u672F\uFF0C\u53EA\u9700\u8981ADC\u6216\u7B80\u5355\u7684\u89E6\u6478\u63A7\u5236\u5668\u3002 \u7531\u4E8E\u6280\u672F\u6210\u719F\uFF0C\u4EF7\u683C\u901A\u5E38\u8F83\u4F4E\u3002 \u52A0\u5F3A\u4E86\u8868\u9762\u7684\u9632\u522E\u64E6\u548C\u9632\u6495\u88C2\u4FDD\u62A4\uFF0C\u4F46\u9632\u6B62\u6076\u610F\u7834\u574F\u7684\u80FD\u529B\u8F83\u5DEE\u3002 \u6B64\u5916\uFF0C\u5728\u9633\u5149\u4E0B\u7684\u53EF\u8BFB\u6027\u8F83\u4F4E\u3002 STM32F429 DISCO\u677F\u4F7F\u7528\u7535\u963B\u5F0F\u89E6\u63A7\uFF0C\u63D0\u4F9B\u53EF\u7528\u7684TouchGFX\u5E94\u7528\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "non-touch"
  }), `\u975E\u89E6\u63A7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u901A\u8FC7\u6309\u94AE\u63A7\u5236GUI\uFF0C\u53EA\u9700\u663E\u793A\u56FE\u50CF/\u89C6\u9891\uFF0C\u800C\u5982\u679C\u901A\u8FC7\u53E6\u4E00\u4E2A\u8BBE\u5907\u8FDB\u884C\u5916\u90E8\u63A7\u5236\uFF0C\u662F\u5426\u4E3A\u4EA7\u54C1\u6DFB\u52A0\u89E6\u63A7\u529F\u80FD\u751A\u81F3\u90FD\u65E0\u5173\u7D27\u8981\u3002 \u4E0D\u4E3A\u663E\u793A\u5C4F\u589E\u52A0\u89E6\u63A7\u5C42\u53EF\u4EE5\u964D\u4F4E\u663E\u793A\u5668\u4EF7\u683C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "displays-with-ram"
  }), `\u5177\u6709RAM\u7684\u663E\u793A\u5C4F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u91C7\u7528Motorla 6800\u3001Intel 8080\u3001SPI\u6216MIPI-DSI\u63A5\u53E3\u7684\u663E\u793A\u5668\u901A\u5E38\u5185\u7F6ERAM\uFF08GRAM\uFF09\uFF0C\u5176\u5927\u5C0F\u4E3A1\u4E2A\u5B8C\u6574\u7684\u5E27\u7F13\u51B2\u3002 \u8FD9\u4E9B\u7C7B\u578B\u7684\u663E\u793A\u5668\u53EF\u901A\u8FC7SPI\u3001FMC\u6216DSI\u4E3B\u673A\uFF08LTDC\uFF09\u8FDE\u63A5\u5230MCU\u3002 \u663E\u793A\u5668RAM\u9700\u8981\u53E6\u4E00\u4E2A\u5916\u90E8RAM\uFF08\u5E27\u7F13\u51B2\uFF09\uFF0C\u5B83\u53EF\u4EE5\u4F4D\u4E8EMCU\u4E2D\u6216\u5916\u90E8RAM\u4E2D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/gram-mipi.png",
    noShadow: true,
    mdxType: "Figure"
  }, "MIPI-DSI\u663E\u793A\u5668"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u9700\u8981\u5916\u90E8RAM\uFF08MCU\u4EE5\u5916\uFF09\u6765\u5B58\u50A8\u5E27\u7F13\u51B2\uFF0C\u56E0\u6B64\u4F7F\u7528MCU\u4E2D\u53EF\u7528\u7684\u5185\u90E8RAM\u3002 \u5982\u679CMCU RAM\u5C0F\u4E8E1\u4E2A\u5B8C\u6574\u7684\u5E27\u7F13\u51B2\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528TouchGFX\u90E8\u5206\u5E27\u7F13\u51B2\u7279\u6027\uFF0C\u8FD9\u6837\u53EF\u4F7F\u5E27\u7F13\u51B2\u7684\u7A7A\u95F4\u5360\u7528\u91CF\u7EF4\u6301\u5728\u6781\u4F4E\u6C34\u5E73\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u53C2\u89C1\u201C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../../scenarios/lowering-memory-usage-with-partial-framebuffer",
    mdxType: "Link"
  }, "\u90E8\u5206\u5E27\u7F13\u51B2\u201D\u4E00\u8282\u4E86\u89E3\u66F4\u591A\u5185\u5BB9")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/gram-spi.png",
    noShadow: true,
    mdxType: "Figure"
  }, "SPI \u663E\u793A\u5C4F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "non-square-pixels--pixel-aspect-ratio"
  }), `\u975E\u6B63\u65B9\u5F62\u50CF\u7D20/\u50CF\u7D20\u5BBD\u9AD8\u6BD4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5E38\u89C1\u7684\u50CF\u7D20\u5F62\u72B6\u662F\u6B63\u65B9\u5F62\uFF0C\u4F46\u67D0\u4E9B\u663E\u793A\u5668\u4F7F\u7528\u975E\u6B63\u65B9\u5F62\u50CF\u7D20\u3002 \u50CF\u7D20\u5BBD\u9AD8\u6BD4\u662F\u50CF\u7D20\u5BBD\u5EA6\u4E0E\u50CF\u7D20\u9AD8\u5EA6\u4E4B\u6BD4\u3002 \u56E0\u6B64\uFF0C\u50CF\u7D20\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5747\u4E3A100\u7684\u6B63\u65B9\u5F62\u50CF\u7D20\u7684\u5BBD\u9AD8\u6BD4\u4E3A1/1\u3002 \u975E\u6B63\u65B9\u5F62\u50CF\u7D20\u5219\u6709\u4E0D\u540C\u7684\u50CF\u7D20\u5BBD\u9AD8\u6BD4\u3002 \u5982\u679C\u753B\u9762\u8BBE\u8BA1\u5E08\u4E0D\u8003\u8651\u8FD9\u4E00\u70B9\uFF0C\u5219\u663E\u793A\u7684\u4F4D\u56FE\u53EF\u80FD\u88AB\u62C9\u4F38\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/pixel-aspect.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\u88AB\u62C9\u4F38\u7684\u4F4D\u56FE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cover-lense"
  }), `\u76D6\u677F\u73BB\u7483`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7531\u4E8E\u663E\u793A\u5668\u662F\u5D4C\u5165\u5F0F\u56FE\u5F62\u7528\u6237\u754C\u9762\u4EA7\u54C1\u7684\u8868\u5C42\uFF0C\u589E\u52A0\u76D6\u677F\u73BB\u7483\u53EF\u4EE5\u6539\u5584\u5916\u89C2\u548C\u89E6\u611F\u3002 \u76D6\u677F\u73BB\u7483\u53EF\u4EE5\u6539\u5584\u8BBE\u8BA1\u6548\u679C\u3001\u6297\u522E\u64E6\u6027\u3001\u6297\u51B2\u51FB\u6027\u548C\u989C\u8272\u7B49\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);