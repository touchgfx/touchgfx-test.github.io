"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6020],{

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

/***/ 47581:
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
  id: "scenarios-change-pixelformat-bpp",
  title: "\u66F4\u6539\u5E94\u7528\u7684\u50CF\u7D20\u683C\u5F0F"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/scenarios-change-pixelformat-bpp",
  "id": "development/scenarios/scenarios-change-pixelformat-bpp",
  "title": "\u66F4\u6539\u5E94\u7528\u7684\u50CF\u7D20\u683C\u5F0F",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-change-pixelformat-bpp.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/scenarios-change-pixelformat-bpp",
  "permalink": "/4.20/zh-CN/docs/development/scenarios/scenarios-change-pixelformat-bpp",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-change-pixelformat-bpp",
    "title": "\u66F4\u6539\u5E94\u7528\u7684\u50CF\u7D20\u683C\u5F0F"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u4F7F\u7528\u975E\u5185\u5B58\u6620\u5C04\u95EA\u5B58\u5B58\u50A8\u5B57\u4F53\u6570\u636E",
    "permalink": "/4.20/zh-CN/docs/development/scenarios/fonts-in-unmapped-flash"
  },
  "next": {
    "title": "\u521B\u5EFATouchGFX\u5E94\u7528\u6A21\u677F",
    "permalink": "/4.20/zh-CN/docs/development/scenarios/scenarios-create-at"
  }
};
const assets = {};




const toc = [{
  value: "\u677F\u5361\u8C03\u8BD5\u4E0E\u542F\u52A8",
  id: "board-bring-up",
  level: 2
}, {
  value: "HAL\u5F00\u53D1",
  id: "hal-development",
  level: 2
}, {
  value: "TouchGFX Designer",
  id: "touchgfx-designer",
  level: 2
}, {
  value: "\u7ED3\u8BBA",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u6587\u5C06\u4ECB\u7ECD\u5728\u521B\u5EFA\u9879\u76EE\u540E\uFF0C\u5982\u4F55\u66F4\u6539\u5E94\u7528\u7684\u50CF\u7D20\u683C\u5F0F\u3002 \u5177\u4F53\u5730\u8BF4\uFF0C\u672C\u6587\u5C06\u4E3E\u4F8B\u8BF4\u660E\u5982\u4F55\u901A\u8FC7TouchGFX Generator\u5C0624\u4F4DRGB888\u5E94\u7528\u4FEE\u6539\u4E3A16\u4F4DRGB565\uFF0C\u8FD8\u5C06\u4ECB\u7ECD\u5BF9TouchGFX\u9879\u76EE\u914D\u7F6E\u7684\u5F71\u54CD\u3002 \u66F4\u6539\u50CF\u7D20\u683C\u5F0F\u7684\u539F\u56E0\u53EF\u80FD\u662F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4FEE\u6539\u4E86\u663E\u793A\u5668\u8981\u6C42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u4FEE\u6539\u4E86\u5E94\u7528\u8981\u6C42`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\u9879\u76EE\u6700\u521D\u521B\u5EFA\u671F\u95F4\u7684\u9519\u8BEF`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8BF7\u9605\u8BFB\u5173\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../../basic-concepts/color-formats",
    mdxType: "Link"
  }, "\u989C\u8272\u6A21\u5F0F"), "\u7684\u6587\u7AE0\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E00\u822C\u800C\u8A00\uFF0C\u66F4\u6539\u4E86\u5E94\u7528\u7684\u50CF\u7D20\u683C\u5F0F\uFF0C\u8FD8\u9700\u8981\u8FDB\u884C\u4E0B\u5217\u66F4\u6539\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\u677F\u542F\u52A8\u642D\u5EFA\uFF1A`), `\u66F4\u6539LTDC\u7684\u50CF\u7D20\u683C\u5F0F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `HAL\u5F00\u53D1\uFF1A`), `\u4FEE\u6539TouchGFX Generator\u8BBE\u7F6E\uFF0C\u4EE5\u53CD\u6620LTDC\u8BBE\u7F6E\u6216\u5E27\u7F13\u51B2\u5728\u5B58\u50A8\u5668\u4E2D\u7684\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Designer`), `: \u786E\u4FDD\u6240\u6709\u56FE\u50CF\u90FD\u4F7F\u7528\u65B0\u8F6C\u6362\u7684\u4F4D\u6DF1\uFF0C\u4EE5\u53CA\u4F7F\u7528\u6B63\u786E\u683C\u5F0F\u3002`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6211\u4EEC\u53EF\u4EE5\u4ECEdesigner\u8F6F\u4EF6\u5F00\u59CB\uFF0C\u68C0\u67E5`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u663E\u793A\u5C4F`), `\u548C`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u56FE\u50CF`), `\u7684\u5F53\u524D\u914D\u7F6E\uFF0C\u7A0D\u540E\u518D\u8FD4\u56DE\u8FD9\u4E9B\u5C4F\u5E55\u8FDB\u884C\u786E\u8BA4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/designer-config-image-4-17.png",
    width: "600",
    mdxType: "Figure"
  }, "\u56FE\u50CF\u914D\u7F6ERGB888"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/designer-config-display-4-17.png",
    width: "600",
    mdxType: "Figure"
  }, "\u663E\u793A\u5C4F\u914D\u7F6E24\u4F4D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "board-bring-up"
  }), `\u677F\u5361\u8C03\u8BD5\u4E0E\u542F\u52A8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679CSTM32CubeMX\u9879\u76EE\u4E2D\u7684\u7279\u5B9A\u8BBE\u7F6E\u53EF\u80FD\u5F71\u54CD\u5E94\u7528\u9700\u8981\u7684\u50CF\u7D20\u683C\u5F0F\uFF0C\u5C31\u50CFLTDC\u4E00\u6837\uFF0C\u5219\u5F00\u53D1\u8005\u9700\u8981\u5728\u6B64\u8FDB\u884C\u9002\u5F53\u66F4\u6539\uFF0C\u4EE5\u4F7FTouchGFX\u4EE5LTDC\u671F\u671B\u7684\u683C\u5F0F\u8FDB\u884C\u6E32\u67D3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\u8BF7\u9605\u8BFB\u5173\u4E8E", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",
    mdxType: "Link"
  }, "LTDC"), "\u7684\u6587\u7AE0\u4E86\u89E3TouchGFX\u5E94\u7528\u6709\u6548\u50CF\u7D20\u683C\u5F0F\u8BBE\u7F6E\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "hal-development"
  }), `HAL\u5F00\u53D1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u5E94\u7528\u7684\u4F4D\u6DF1\u968F\u5E27\u7F13\u51B2\u7684\u50CF\u7D20\u683C\u5F0F\u800C\u53D8\u5316\uFF08\u4F8B\u5982\uFF0C\u5C06ARGB2222\u66F4\u6539\u4E3ABRGA2222\u540E\u4ECD\u5C06\u5F97\u52308\u4F4D\u5E94\u7528\uFF09\uFF0C\u5219\u5F00\u53D1\u8005`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u53EF\u80FD`), `\u9700\u8981\u4FEE\u6539\u5E27\u7F13\u51B2\u7684\u5B58\u50A8\u4F4D\u7F6E\u3002 \u5728\u4EE5\u4E0B\u60C5\u51B5\u4E0B\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/framebuffer-chage-px-fmt.png",
    width: "400",
    mdxType: "Figure"
  }, "\u4FEE\u6539\u50CF\u7D20\u683C\u5F0F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4F7F\u7528\u6B64\u914D\u7F6E\u751F\u6210\u4EE3\u7801\u5C06\u751F\u6210\u4F7F\u752816\u4F4DTouchGFX `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LCD`), `\u7C7B\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFXConfiguration`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFXConfiguration.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), ` static LCD16bpp display;\`\`\`

\u5982\u679C\u9879\u76EE\u5DF2\u5728TouchGFX Designer\u4E2D\u6253\u5F00\uFF0C\u5C06\u63D0\u793A\u5F00\u53D1\u8005\u66F4\u65B0\uFF0C\u4EE5\u53CD\u6620\u65B0\u751F\u6210\u7684\u914D\u7F6E\u66F4\u6539\u3002

\`\`\`json {7-8}
{
  "image_configuration": {
    "images": {},
    "dither_algorithm": "2",
    "alpha_dither": "yes",
    "layout_rotation": "0",
    "opaque_image_format": "RGB565",
    "nonopaque_image_format": "ARGB8888",
    "section": "ExtFlashSection",
    "extra_section": "ExtFlashSection"
  },
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E0B\u8868\u5217\u51FA\u4E86\u5728\u7ED9\u5B9A\u50CF\u7D20\u683C\u5F0F\u4E0B\u5BF9\u4E0D\u900F\u660E\u548C\u900F\u660E\u56FE\u50CF\u683C\u5F0F\u7684\u5F71\u54CD\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u5E27\u7F13\u51B2\u50CF\u7D20\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u4E0D\u900F\u660E\u683C\u5F0F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\u900F\u660E\u683C\u5F0F`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Gray2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Gray2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Gray2`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Gray4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Gray4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Gray4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "touchgfx-designer"
  }), `TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u57FA\u4E8E\u65B0\u7684TouchGFX Generator\u8BBE\u7F6E\uFF08\u5728STM32CubeMX\u4E2D\u5B9A\u4E49\uFF09\u66F4\u65B0\u4E86TouchGFX\u9879\u76EE\u540E\uFF0C\u5F00\u53D1\u8005\u4F1A\u53D1\u73B0TouchGFX Designer\u7684\u914D\u7F6E\u5DF2\u7ECF\u66F4\u6539\uFF0C\u4EE5\u4FBF\u4E0E\u4E4B\u5339\u914D\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/designer-config-image-16bpp-4-17.png",
    width: "600",
    mdxType: "Figure"
  }, "\u56FE\u50CF\u914D\u7F6ERGB565"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/designer-config-display-16bpp-4-17.png",
    width: "600",
    mdxType: "Figure"
  }, "\u663E\u793A\u5C4F\u914D\u7F6E16\u4F4D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4ECETouchGFX Designer\u5185\u90E8\u751F\u6210\u4EE3\u7801\u540E\uFF0C\u56FE\u50CF\u8D44\u6E90\u7684\u4EE3\u7801\u73B0\u5DF2\u53CD\u6620\u4E86\u66F4\u65B0\u540E\u7684\u50CF\u7D20\u683C\u5F0F\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX\\generated\\images\\src\\my_image.png"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `LOCATION_PRAGMA("ExtFlashSection")
KEEP extern const unsigned char my_image[] LOCATION_ATTRIBUTE("ExtFlashSection") = // 320x240 RGB565 pixels.
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\u7ED3\u8BBA`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EA\u9700\u4F7F\u7528TouchGFX Generator\u5373\u53EF\u4FEE\u6539\u5E94\u7528\u7684\u5F53\u524D\u50CF\u7D20\u683C\u5F0F\u3002 \u5BF9\u4E8E\u5177\u6709LTDC\u7684MCU\uFF0C\u8FD0\u884CTouchGFX\u7684\u5C42\u5FC5\u987B\u4E0E\u5728TouchGFX Generator\uFF08\u5C31LTDC\u800C\u8A00\uFF0C\u4EC5\u9650\u4E8ERGB565\u548CRGB888\uFF09\u8BBE\u7F6E\u4E2D\u5B9A\u4E49\u7684\u5E27\u7F13\u51B2\u50CF\u7D20\u683C\u5F0F\u76F8\u5339\u914D\uFF0C\u4EE5\u786E\u4FDD\u4E0ETouchGFX Core\u6E32\u67D3\u7684\u683C\u5F0F\u76F8\u4E00\u81F4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u4ECESTM32CubeMX\u751F\u6210\u4EE3\u7801\u540E\uFF0C\u5C06\u66F4\u65B0TouchGFX\u9879\u76EE\uFF0C\u540E\u7EED\u5728TouchGFX Designer\u4E2D\u751F\u6210\u4EE3\u7801\u540E\uFF0C\u56FE\u50CF\u8D44\u6E90\u548C\u5E27\u7F13\u51B2\u9A71\u52A8\u7A0B\u5E8F\u90FD\u5C06\u5177\u6709\u6307\u5B9A\u7684\u683C\u5F0F\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);