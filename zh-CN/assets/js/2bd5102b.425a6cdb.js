"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9108],{

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

/***/ 39487:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function FigureWithPoints(props) {
  const width = props.width;
  const height = props.height;
  const points_array = props.points || [];
  const imgSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.imageSource);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "figure"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: imgSrc,
    target: "_blank"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    width,
    height,
    src: imgSrc
  })), points_array.map(function(point, index) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" },
      viewBox: "0 0 500 500"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      transform: "translate(" + point[0] + ", " + point[1] + ")"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      id: "p1",
      d: "M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",
      fill: "white",
      stroke: "black"
    }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
      x: "11.7",
      y: "9.5",
      "font-size": "x-small",
      "dominant-baseline": "middle",
      "text-anchor": "middle"
    }, index + 1)));
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children)));
}
/* harmony default export */ __webpack_exports__["Z"] = (FigureWithPoints);


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

/***/ 93580:
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
/* harmony import */ var _site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39487);
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82985);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93054);
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
  id: "tutorial-01",
  title: "\u6559\u7A0B1\uFF1A\u5C1D\u8BD5\u4F7F\u7528\u793A\u4F8B"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-01",
  "id": "tutorials/tutorial-01",
  "title": "\u6559\u7A0B1\uFF1A\u5C1D\u8BD5\u4F7F\u7528\u793A\u4F8B",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorials/tutorial-01.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-01",
  "permalink": "/4.20/zh-CN/docs/tutorials/tutorial-01",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-01",
    "title": "\u6559\u7A0B1\uFF1A\u5C1D\u8BD5\u4F7F\u7528\u793A\u4F8B"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Tutorials",
    "permalink": "/4.20/zh-CN/docs/category/tutorials"
  },
  "next": {
    "title": "\u6559\u7A0B2\uFF1A\u521B\u5EFA\u60A8\u81EA\u5DF1\u7684\u5E94\u7528",
    "permalink": "/4.20/zh-CN/docs/tutorials/tutorial-02"
  }
};
const assets = {};





const toc = [{
  value: "\u5165\u95E8",
  id: "getting-started",
  level: 2
}, {
  value: "\u4F7F\u7528TouchGFX Simulator\u8FD0\u884C\u793A\u4F8B",
  id: "running-an-example-using-touchgfx-simulator",
  level: 2
}, {
  value: "\u9009\u62E9\u4E3B\u9898",
  id: "selecting-theme",
  level: 3
}, {
  value: "\u9009\u62E9UI\u6A21\u677F",
  id: "selecting-a-ui-template",
  level: 3
}, {
  value: "\u521B\u5EFA\u9879\u76EE",
  id: "creating-a-project",
  level: 3
}, {
  value: "\u8FD0\u884CTouchGFX Simulator",
  id: "running-touchgfx-simulator",
  level: 3
}, {
  value: "\u5728STM32\u8BC4\u4F30\u5957\u4EF6\u4E0A\u8FD0\u884C\u793A\u4F8B",
  id: "running-an-example-on-an-stm32-evaluation-kit",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8BF7\u8DDF\u968F\u672C\u6559\u7A0B\u5B66\u4E60TouchGFX\u7684\u57FA\u672C\u77E5\u8BC6\u3002 \u672C\u6559\u7A0B\u5C06\u5C55\u793A\u5982\u4F55\u5B89\u88C5TouchGFX\uFF0C\u4EE5\u53CA\u5982\u4F55\u8FD0\u884C\u968F\u9644\u7684TouchGFX Simulator\u548CSTM32\u8BC4\u4F30\u5957\u4EF6\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "getting-started"
  }), `\u5165\u95E8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u5DF2\u5B89\u88C5\u4E86TouchGFX Designer\u3002 \u70B9\u51FB`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../introduction/installation"
  }), `\u6B64\u5904`), `\u9605\u8BFB\u5173\u4E8E\u5982\u4F55\u4E0B\u8F7D\u548C\u5B89\u88C5TouchGFX\u7684\u66F4\u591A\u5185\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "running-an-example-using-touchgfx-simulator"
  }), `\u4F7F\u7528TouchGFX Simulator\u8FD0\u884C\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u8FC7TouchGFX Designer\u53EF\u83B7\u53D6TouchGFX\u7684\u8BB8\u591AUI\u793A\u4F8B\u3002 \u8FD9\u4E9B\u793A\u4F8B\u53EF\u4EE5\u5E2E\u52A9\u60A8\u5B66\u4E60\u66F4\u591A\u5177\u4F53\u7684TouchGFX\u4E3B\u9898\uFF0C\u5B83\u4EEC\u90FD\u4E13\u6CE8\u4E8E\u4E00\u4E2A\u7279\u5B9A\u7684TouchGFX\u4E3B\u9898\u6216\u63A7\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selecting-theme"
  }), `\u9009\u62E9\u4E3B\u9898`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u6709\u6D45\u8272\u548C\u6DF1\u8272\u4E24\u79CD\u8272\u5F69\u65B9\u6848\u3002 \u5728\u60A8\u7B2C\u4E00\u6B21\u542F\u52A8TouchGFX Designer\u65F6\uFF0C\u60A8\u4F1A\u88AB\u8981\u6C42\u9009\u62E9\u4E00\u4E2A\u65B9\u6848\u3002 \u9009\u62E9\u65B9\u6848\u5728\u4EE5\u540E\u662F\u53EF\u4EE5\u66F4\u6539\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[270, 172]],
    imageSource: "/img/tutorials/tutorial-01/select-theme.png",
    mdxType: "FigureWithPoints"
  }, "\u9009\u62E9\u4E3B\u9898"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9009\u62E9\u4E00\u4E2A\u4E3B\u9898\u5E76\u70B9\u51FB \u201C\u786E\u5B9A\u201D (1)\u3002 \u5728\u672C\u6559\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u6D45\u8272\u65B9\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selecting-a-ui-template"
  }), `\u9009\u62E9UI\u6A21\u677F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u65E2\u53EF\u4EE5\u5C06\u793A\u4F8B\u4F5C\u4E3A\u9879\u76EE\u7684\u8D77\u70B9\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u5B83\u4EEC\u4F5C\u4E3A\u53C2\u8003\u793A\u4F8B\u3002 \u60A8\u53EF\u4EE5\u5728PC\u4E0A\uFF08\u4F7F\u7528TouchGFX Simulator\uFF09\u3001STM32\u8BC4\u4F30\u5957\u4EF6\u4E0A\u751A\u81F3\u662F\u57FA\u4E8ESTM32\u7684\u5B9A\u5236\u786C\u4EF6\u4E0A\u8FD0\u884C\u793A\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u4E3A\u4E86\u4ECE\u793A\u4F8B\u542F\u52A8\u9879\u76EE\uFF0C\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684\u201C\u793A\u4F8B\u201D\u56FE\u6807 (1)\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[10, 30]],
    imageSource: "/img/tutorials/tutorial-01/select-examples.png",
    mdxType: "FigureWithPoints"
  }, "\u6253\u5F00\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0CTouchGFX Designer\u5C06\u663E\u793A\u5305\u542B\u53EF\u7528UI\u793A\u4F8B\u7684\u7A97\u53E3\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[110, 50]],
    imageSource: "/img/tutorials/tutorial-01/all-examples.png",
    mdxType: "FigureWithPoints"
  }, "\u9009\u62E9\u4E00\u4E2A\u793A\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9009\u62E9\u201C\u52A8\u753B\u56FE\u50CF\u793A\u4F8B\u201D(1)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 200]],
    imageSource: "/img/tutorials/tutorial-01/animated-image-selected.png",
    mdxType: "FigureWithPoints"
  }, "\u52A8\u753B\u56FE\u50CF\u793A\u4F8B\u5DF2\u9009\u4E2D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-project"
  }), `\u521B\u5EFA\u9879\u76EE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\uFF0C\u60A8\u53EF\u4EE5\u7528TouchGFX Designer\u521B\u5EFA\u9879\u76EE\u3002 \u6211\u4EEC\u5728\u53F3\u4FA7\u7ED9\u51FA\u4E86\u9879\u76EE\u540D\u79F0\u201CMyAnimatedImageExample\u201D\u3002 \u8BF7\u6CE8\u610F\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u9009\u62E9\u9879\u76EE\u6240\u5C5E\u7684\u6587\u4EF6\u5939 (1)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u70B9\u51FB\u201C\u521B\u5EFA\u201D\u521B\u5EFA\u9879\u76EE\u3002 \u73B0\u5728\uFF0CTouchGFX Designer\u5C06\u57FA\u4E8E\u793A\u4F8B\u521B\u5EFA\u5B8C\u6574\u9879\u76EE\u3002 \u6B64\u8FC7\u7A0B\u9700\u8981\u7684\u65F6\u95F4\u968F\u4E0B\u8F7D\u901F\u5EA6\u800C\u53D8\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "running-touchgfx-simulator"
  }), `\u8FD0\u884CTouchGFX Simulator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u73B0\u5DF2\u663E\u793A\u7EC4\u5408\u9879\u76EE\u3002 \u4E3A\u4E86\u8FD0\u884CWindows\u6A21\u62DF\u5668\uFF0C\u70B9\u51FB\u53F3\u4E0B\u89D2\u7684\u201C\u8FD0\u884C\u6A21\u62DF\u5668\u201D\u6309\u94AE (1) \u6216\u8005 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\u6309\u4E0B`), ` \u952E\u76D8\u4E0A\u7684F5\u952E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[463, 245]],
    imageSource: "/img/tutorials/tutorial-01/the-project-is-ready-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u9879\u76EE\u5C31\u7EEA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Simulator\u73B0\u5728\u663E\u793A\u4E3A\u5E38\u89C4\u7684Windows\u5E94\u7528\u3002 \u6807\u9898\u680F\u663E\u793A\u5E94\u7528\u540D\u79F0\u3002 \u70B9\u51FB\u201C\u5F00\u59CB\u201D\u6309\u94AE\u53EF\u4E0E\u793A\u4F8B\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/tutorials/tutorial-01/the-touchgfx-simulator-4-17.png",
    mdxType: "Figure"
  }, "TouchGFX Simulator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7EE7\u7EED\u5B66\u4E60\u6559\u7A0B\u4E4B\u524D\uFF0C\u5982\u679C\u60A8\u613F\u610F\uFF0C\u53EF\u4EE5\u518D\u5C1D\u8BD5\u4E00\u4E9B\u793A\u4F8B\u3002 \u4E0E\u4E4B\u524D\u4E00\u6837\uFF0C\u53EA\u9700\u70B9\u51FB\u201C\u6587\u4EF6->\u65B0\u5EFA\u201D\u5E76\u9009\u62E9\u65B0\u7684UI\u6A21\u677F\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "running-an-example-on-an-stm32-evaluation-kit"
  }), `\u5728STM32\u8BC4\u4F30\u5957\u4EF6\u4E0A\u8FD0\u884C\u793A\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u8FD9\u4E00\u6B65\u4E2D\uFF0C\u60A8\u5C06\u5B66\u4E60\u5982\u4F55\u542F\u52A8STM32F746-Disco\u677F\u7684\u9879\u76EE\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u8BE5\u677F\u5361\u4E0A\u8FD0\u884C\u4E00\u4E2ATouchGFX\u793A\u4F8B\u3002 \u5982\u679C\u60A8\u6CA1\u6709STM32\u8BC4\u4F30\u5957\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8FC7\u8FD9\u4E00\u6B65\u3002 \u5982\u679C\u60A8\u6709\u5176\u4ED6SMT32\u8BC4\u4F30\u5957\u4EF6\uFF0C\u8BF7\u67E5\u770B\u652F\u6301\u7684\u677F\u5361\u5217\u8868\u4E2D\u662F\u5426\u5305\u542B\u60A8\u7684\u5957\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u6709\u4E00\u4E2A\u9884\u5236\u5E94\u7528\u6A21\u677F\u5217\u8868\uFF0C\u5176\u4E2D\u5305\u542B\u5404\u79CD\u4E0D\u540CSMT32\u8BC4\u4F30\u5957\u4EF6\u7684\u5BF9\u5E94\u6A21\u677F\u3002 \u4E3A\u4E86\u57FA\u4E8E\u8FD9\u6837\u7684\u6A21\u677F\u521B\u5EFA\u9879\u76EE\uFF0C\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684\u201C\u793A\u4F8B\u201D\u56FE\u6807\uFF0C\u5728TouchGFX Designer\u4E2D\u91CD\u65B0\u5F00\u59CB\u65B0\u5EFA\u9879\u76EE\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[10, 30]],
    imageSource: "/img/tutorials/tutorial-01/select-examples.png",
    mdxType: "FigureWithPoints"
  }, "\u4ECE\u793A\u4F8B\u5F00\u59CB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9009\u62E9\u201C\u52A8\u753B\u56FE\u50CF\u793A\u4F8B\u201D\uFF08\u82E5\u5C1A\u672A\u9009\u4E2D\uFF09\u3002 \u70B9\u51FB\u201C\u9009\u62E9\u786C\u4EF6\u201D\u6309\u94AE\u9009\u62E9\u5177\u4F53\u786C\u4EF6\u3002 \u9ED8\u8BA4\u7684\u201C\u6A21\u62DF\u5668\u201D\u53EA\u5141\u8BB8\u5728Windows\u4E0A\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[70, 10]],
    imageSource: "/img/tutorials/tutorial-01/animated-image-selected.png",
    mdxType: "FigureWithPoints"
  }, "\u52A8\u753B\u56FE\u50CF\u793A\u4F8B\u5DF2\u9009\u4E2D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u73B0\u5DF2\u663E\u793A\u53EF\u7528\u7684\u786C\u4EF6\u914D\u7F6E\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[176, 140], [440, 215]],
    imageSource: "/img/tutorials/tutorial-01/select-hardware.png",
    mdxType: "FigureWithPoints"
  }, "\u52A8\u753B\u56FE\u50CF\u793A\u4F8B\u5DF2\u9009\u4E2D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u8FD9\u4E00\u6B65\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528STM32F746-Disco\u677F\uFF0C\u56E0\u6B64\u70B9\u51FB\u201CSTM32F746G\u63A2\u7D22\u5957\u4EF6\u201D(1) \u5E76\u70B9\u51FB\u201C\u9009\u62E9\u201D(2)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73B0\u5728\u53EF\u4EE5\u521B\u5EFA\u9879\u76EE\u3002 \u5982\u679C\u60A8\u613F\u610F\uFF0C\u53EF\u4EE5\u66F4\u6539\u5E94\u7528\u540D\u79F0\u3002 \u8FD9\u91CC\u6211\u4EEC\u5C06\u5B83\u6539\u6210\u4E86\u201CMyAnimatedImageExample746\u201D\u3002 \u70B9\u51FB\u201C\u521B\u5EFA\u201D\u6309\u94AE\u7EE7\u7EED\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[460, 240]],
    imageSource: "/img/tutorials/tutorial-01/create-the-final-project-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u521B\u5EFA\u9879\u76EE"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9879\u76EE\u7684\u5916\u89C2\u4E0E\u6211\u4EEC\u5728\u4E0A\u4E00\u6B65\u4E2D\u770B\u5230\u7684\u7C7B\u4F3C\u3002 \u552F\u4E00\u7684\u533A\u522B\u662F\uFF0C\u73B0\u5728\u201C\u8FD0\u884C\u6A21\u62DF\u5668\u201D\u6309\u94AE (2) \u7684\u65C1\u8FB9\u591A\u4E86\u4E00\u4E2A\u201C\u8FD0\u884C\u76EE\u6807\u201D\u6309\u94AE (1)\u3002 \u5728\u60A8\u6309\u4E0B\u6B64\u6309\u94AE\uFF08\u6216 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\u952E\u76D8\u4E0A\u7684F6`), ` >\u65F6\uFF0CTouchGFX Designer\u4F7F\u7528GNU ARM C++\u7F16\u8BD1\u5668\u7F16\u8BD1\u9879\u76EE\uFF0C\u5E76\u5C06\u5E94\u7528\u5237\u5199\u5230\u76EE\u6807\u786C\u4EF6\u3002 \u6B64\u8FC7\u7A0B\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u8BA1\u7B97\u673A\u7684\u901F\u5EA6\u548C\u5E94\u7528\u7684\u590D\u6742\u5EA6\u3002 TouchGFX Designer\u5E95\u90E8\u7684\u72B6\u6001\u680F\u5C06\u8F93\u51FA\u8FDB\u5EA6\u3002 \u5982\u9700\u5173\u4E8E\u6784\u5EFA\u548C\u5237\u5199\u6B65\u9AA4\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u53EF\u6309\u4E0B\u201C\u8BE6\u7EC6\u65E5\u5FD7\u201D\u6309\u94AE (3)\uFF08\u6216 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + L`), ` \u7684Alt + L\u952E\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[480, 250], [465, 250], [100, 250], [0, 240]],
    imageSource: "/img/tutorials/tutorial-01/the-project-is-ready-2-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u9879\u76EE\u5C31\u7EEA"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u70E7\u5F55\u5B8C\u6210\u65F6\uFF0CTouchGFX Designer\u5C06\u5728\u72B6\u6001\u680F\u4E2D\u5199\u5165\u201C\u70E7\u5F55\u5B8C\u6210\u201D\u3002 \u73B0\u5728\uFF0C\u60A8\u5E94\u770B\u5230\u5E94\u7528\u5728\u677F\u4E0A\u8FD0\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u4E3A\u4E86\u70E7\u5F55\u76EE\u6807\u786C\u4EF6\uFF0C\u60A8\u9700\u8981\u5B89\u88C5STM32CubeProgrammer \u6216\u8005 ST-Link Utility\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeprog.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32CubeProgrammer")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stsw-link004.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32 ST-LINK Utility")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u70B9\u51FB\u53F3\u4E0B\u89D2\u7684\u201C\u6587\u4EF6\u201D\u6309\u94AE (4)\uFF0CTouchGFX Designer\u5C06\u6253\u5F00\u6587\u4EF6\u6D4F\u89C8\u5668\uFF0C\u5176\u4E2D\u663E\u793A\u4E86\u65B0\u9879\u76EE\u6240\u5728\u7684\u76EE\u5F55\u3002 \u5BFC\u822A\u5230`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `build\\bin`), `\uFF0C\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u6587\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-01/the-projects-binary-files.png",
    mdxType: "Figure"
  }, "\u9879\u76EE\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `target.hex`), `\u6587\u4EF6\u662F\u76EE\u6807\u677F\u7684STM32\u5E94\u7528\u3002 \u8FD9\u662FTouchGFX Designer\u521A\u624D\u7F16\u7A0B\u5230\u677F\u5361\u4E0A\u7684\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528STM32CubeProgrammer\u6216ST-Link Utility\u624B\u52A8\u70E7\u5F55\u677F\u5361\u3002 \u53C2\u89C1`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/working-with-touchgfx/compiling-and-flashing"
  }), `\u201C\u7F16\u8BD1&\u70E7\u5F55\u201D\u9875\u9762`), `\u4E86\u89E3\u8BE6\u7EC6\u4FE1\u606F\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);