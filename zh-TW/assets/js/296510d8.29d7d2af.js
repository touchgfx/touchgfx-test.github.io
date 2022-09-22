"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1887],{

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

/***/ 68179:
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
  title: "\u6559\u7A0B1\uFF1A\u5617\u8A66\u4F7F\u7528\u7BC4\u4F8B"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-01",
  "id": "tutorials/tutorial-01",
  "title": "\u6559\u7A0B1\uFF1A\u5617\u8A66\u4F7F\u7528\u7BC4\u4F8B",
  "description": "",
  "source": "@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-01.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-01",
  "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-01",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-01",
    "title": "\u6559\u7A0B1\uFF1A\u5617\u8A66\u4F7F\u7528\u7BC4\u4F8B"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Tutorials",
    "permalink": "/4.20/zh-TW/docs/category/tutorials"
  },
  "next": {
    "title": "\u6559\u7A0B2\uFF1A\u5275\u5EFA\u60A8\u81EA\u5DF1\u7684\u61C9\u7528",
    "permalink": "/4.20/zh-TW/docs/tutorials/tutorial-02"
  }
};
const assets = {};





const toc = [{
  value: "\u5165\u9580",
  id: "getting-started",
  level: 2
}, {
  value: "\u4F7F\u7528TouchGFX Simulator\u904B\u884C\u7BC4\u4F8B",
  id: "running-an-example-using-touchgfx-simulator",
  level: 2
}, {
  value: "\u9078\u64C7\u4E3B\u984C",
  id: "selecting-theme",
  level: 3
}, {
  value: "\u9078\u64C7UI\u7BC4\u672C",
  id: "selecting-a-ui-template",
  level: 3
}, {
  value: "\u5275\u5EFA\u5C08\u6848",
  id: "creating-a-project",
  level: 3
}, {
  value: "\u904B\u884CTouchGFX Simulator",
  id: "running-touchgfx-simulator",
  level: 3
}, {
  value: "\u5728STM32\u8A55\u4F30\u5957\u4EF6\u4E0A\u904B\u884C\u7BC4\u4F8B",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8ACB\u8DDF\u96A8\u672C\u6559\u7A0B\u5B78\u7FD2TouchGFX\u7684\u57FA\u790E\u77E5\u8B58\u3002 \u672C\u6559\u7A0B\u5C07\u5C55\u793A\u5982\u4F55\u5B89\u88DDTouchGFX\uFF0C\u4EE5\u53CA\u5982\u4F55\u904B\u884C\u96A8\u9644\u7684TouchGFX Simulator\u548CSTM32\u8A55\u4F30\u5957\u4EF6\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "getting-started"
  }), `\u5165\u9580`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9996\u5148\uFF0C\u78BA\u4FDD\u60A8\u5DF2\u5B89\u88DD\u4E86TouchGFX Designer\u3002 \u9EDE\u64CA`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../introduction/installation"
  }), `\u6B64\u8655`), `\u95B1\u8B80\u95DC\u65BC\u5982\u4F55\u4E0B\u8F09\u548C\u5B89\u88DDTouchGFX\u7684\u66F4\u591A\u5167\u5BB9\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "running-an-example-using-touchgfx-simulator"
  }), `\u4F7F\u7528TouchGFX Simulator\u904B\u884C\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u901A\u904ETouchGFX Designer\u53EF\u7372\u53D6TouchGFX\u7684\u8A31\u591AUI\u7BC4\u4F8B\u3002 \u9019\u4E9B\u7BC4\u4F8B\u53EF\u4EE5\u5E6B\u52A9\u60A8\u5B78\u7FD2\u66F4\u591A\u5177\u9AD4\u7684TouchGFX\u4E3B\u984C\uFF0C\u5B83\u5011\u90FD\u5C08\u6CE8\u65BC\u4E00\u500B\u7279\u5B9A\u7684TouchGFX\u4E3B\u984C\u6216\u5C0F\u5DE5\u5177\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selecting-theme"
  }), `\u9078\u64C7\u4E3B\u984C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u6709\u6DFA\u8272\u548C\u6DF1\u8272\u5169\u7A2E\u8272\u5F69\u4E3B\u984C\u3002 \u5728\u60A8\u7B2C\u4E00\u6B21\u555F\u52D5TouchGFX Designer\u6642\uFF0C\u60A8\u6703\u88AB\u8981\u6C42\u9078\u64C7\u4E00\u500B\u4E3B\u984C\u3002 \u9078\u64C7\u662F\u53EF\u4EE5\u65E5\u5F8C\u66F4\u6539\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[270, 172]],
    imageSource: "/img/tutorials/tutorial-01/select-theme.png",
    mdxType: "FigureWithPoints"
  }, "\u9078\u64C7\u4E3B\u984C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9078\u64C7\u4E00\u500B\u4E3B\u984C\u4E26\u9EDE\u64CA \u201C\u78BA\u5B9A\u201D (1)\u3002 \u5728\u672C\u6559\u7A0B\u4E2D\uFF0C\u6211\u5011\u5C07\u4F7F\u7528\u6DFA\u8272\u4E3B\u984C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selecting-a-ui-template"
  }), `\u9078\u64C7UI\u7BC4\u672C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u65E2\u53EF\u4EE5\u5C07\u7BC4\u4F8B\u4F5C\u70BA\u5C08\u6848\u7684\u8D77\u9EDE\uFF0C\u4E5F\u53EF\u4EE5\u5C07\u5B83\u5011\u4F5C\u70BA\u53C3\u8003\u7BC4\u4F8B\u3002 \u60A8\u53EF\u4EE5\u5728PC\u4E0A\uFF08\u4F7F\u7528TouchGFX Simulator\uFF09\u3001STM32\u8A55\u4F30\u5957\u4EF6\u4E0A\u751A\u81F3\u662F\u57FA\u65BCSTM32\u7684\u5BA2\u88FD\u5316\u786C\u9AD4\u4E0A\u904B\u884C\u7BC4\u4F8B\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\u70BA\u4E86\u5F9E\u7BC4\u4F8B\u555F\u52D5\u5C08\u6848\uFF0C\u9EDE\u64CA\u5DE6\u4E0A\u89D2\u7684\u201CExamples\u201D\u5716\u793A (1)\uFF1A`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[10, 30]],
    imageSource: "/img/tutorials/tutorial-01/select-examples.png",
    mdxType: "FigureWithPoints"
  }, "\u6253\u958B\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0CTouchGFX Designer\u5C07\u986F\u793A\u5305\u542B\u53EF\u7528UI\u7BC4\u4F8B\u7684\u8996\u7A97\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[110, 50]],
    imageSource: "/img/tutorials/tutorial-01/all-examples.png",
    mdxType: "FigureWithPoints"
  }, "\u9078\u64C7\u4E00\u500B\u7BC4\u4F8B"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9078\u64C7\u201CAnimated Image Example\u201D(1)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 200]],
    imageSource: "/img/tutorials/tutorial-01/animated-image-selected.png",
    mdxType: "FigureWithPoints"
  }, "\u52D5\u756B\u5716\u50CF\u7BC4\u4F8B\u5DF2\u9078\u4E2D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-project"
  }), `\u5275\u5EFA\u5C08\u6848`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\uFF0C\u60A8\u53EF\u4EE5\u7528TouchGFX Designer\u5275\u5EFA\u5C08\u6848\u3002 \u6211\u5011\u5728\u53F3\u5074\u8A2D\u5B9A\u4E86\u5C08\u6848\u540D\u7A31\u201CMyAnimatedImageExample\u201D\u3002 \u8ACB\u6CE8\u610F\uFF0C\u60A8\u9084\u53EF\u4EE5\u9078\u64C7\u5C08\u6848\u6240\u5C6C\u7684\u8CC7\u6599\u593E (1)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9EDE\u64CA\u201CCreate\u201D\u5275\u5EFA\u5C08\u6848\u3002 \u73FE\u5728\uFF0CTouchGFX Designer\u5C07\u57FA\u65BC\u7BC4\u4F8B\u5275\u5EFA\u5B8C\u6574\u5C08\u6848\u3002 \u6B64\u904E\u7A0B\u9700\u8981\u7684\u6642\u9593\u96A8\u4E0B\u8F09\u901F\u5EA6\u800C\u8B8A\u5316\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "running-touchgfx-simulator"
  }), `\u904B\u884CTouchGFX Simulator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u73FE\u5DF2\u986F\u793A\u7D44\u5408\u5C08\u6848\u3002 \u70BA\u4E86\u904B\u884CWindows\u6A21\u64EC\u5668\uFF0C\u9EDE\u64CA\u53F3\u4E0B\u89D2\u7684\u201CRun Simulator\u201D\u6309\u9215 (1) \u6216\u8005\u6309\u4E0B\u9375\u76E4\u4E0A\u7684 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F5\u9375`), ` \u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[463, 245]],
    imageSource: "/img/tutorials/tutorial-01/the-project-is-ready-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5C08\u6848\u5C31\u7DD2"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Simulator\u73FE\u5728\u986F\u793A\u70BA\u5E38\u898F\u7684Windows\u61C9\u7528\u3002 \u6A19\u984C\u5217\u986F\u793A\u61C9\u7528\u540D\u7A31\u3002 \u9EDE\u64CA\u201CStart\u201D\u6309\u9215\u53EF\u8207\u7BC4\u4F8B\u4EA4\u4E92\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/tutorials/tutorial-01/the-touchgfx-simulator-4-17.png",
    mdxType: "Figure"
  }, "The TouchGFX Simulator"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u7E7C\u7E8C\u5B78\u7FD2\u6559\u7A0B\u4E4B\u524D\uFF0C\u5982\u679C\u60A8\u9858\u610F\uFF0C\u53EF\u4EE5\u518D\u5617\u8A66\u4E00\u4E9B\u7BC4\u4F8B\u3002 \u8207\u4E4B\u524D\u4E00\u6A23\uFF0C\u53EA\u9700\u9EDE\u64CA\u201CFile\u201D>\u201CNew \u201D\u4E26\u9078\u64C7\u65B0\u7684UI\u7BC4\u672C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "running-an-example-on-an-stm32-evaluation-kit"
  }), `\u5728STM32\u8A55\u4F30\u5957\u4EF6\u4E0A\u904B\u884C\u7BC4\u4F8B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u9019\u4E00\u6B65\u4E2D\uFF0C\u60A8\u5C07\u5B78\u7FD2\u5982\u4F55\u555F\u52D5STM32F746-Disco\u958B\u767C\u677F\u7684\u5C08\u6848\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u8A72\u958B\u767C\u677F\u4E0A\u904B\u884C\u4E00\u500BTouchGFX\u7BC4\u4F8B\u3002 \u5982\u679C\u60A8\u6C92\u6709STM32\u8A55\u4F30\u5957\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8DF3\u904E\u9019\u4E00\u6B65\u3002 \u5982\u679C\u60A8\u6709\u5176\u4ED6SMT32\u8A55\u4F30\u5957\u4EF6\uFF0C\u8ACB\u67E5\u770B\u652F\u63F4\u7684\u958B\u767C\u677F\u5217\u8868\u4E2D\u662F\u5426\u5305\u542B\u60A8\u7684\u5957\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u6709\u4E00\u500B\u9810\u88FD\u61C9\u7528\u7BC4\u672C\u6E05\u55AE\uFF0C\u5176\u4E2D\u5305\u542B\u5404\u7A2E\u4E0D\u540CSMT32\u8A55\u4F30\u5957\u4EF6\u7684\u5C0D\u61C9\u7BC4\u672C\u3002 \u70BA\u4E86\u57FA\u65BC\u9019\u6A23\u7684\u7BC4\u672C\u5275\u5EFA\u5C08\u6848\uFF0C\u9EDE\u64CA\u5DE6\u4E0A\u89D2\u7684\u201C\u7BC4\u4F8B\u201D\u5716\u793A\uFF0C\u5728TouchGFX Designer\u4E2D\u91CD\u65B0\u958B\u59CB\u65B0\u5EFA\u5C08\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[10, 30]],
    imageSource: "/img/tutorials/tutorial-01/select-examples.png",
    mdxType: "FigureWithPoints"
  }, "\u5F9E\u7BC4\u4F8B\u958B\u59CB"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9078\u64C7\u201CAnimated Image Example\u201D\uFF08\u82E5\u5C1A\u672A\u9078\u4E2D\uFF09\u3002 \u9EDE\u64CA\u201CSelect Hardware\u201D\u6309\u9215\u9078\u64C7\u7279\u5B9A\u786C\u9AD4\u3002 \u9810\u8A2D\u7684\u201CSimulator\u201D\u53EA\u5141\u8A31\u5728Windows\u4E0A\u904B\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[70, 10]],
    imageSource: "/img/tutorials/tutorial-01/animated-image-selected.png",
    mdxType: "FigureWithPoints"
  }, "\u52D5\u756B\u5716\u50CF\u7BC4\u4F8B\u5DF2\u9078\u4E2D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u73FE\u5DF2\u986F\u793A\u53EF\u7528\u7684\u786C\u9AD4\u8A2D\u5B9A\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[176, 140], [440, 215]],
    imageSource: "/img/tutorials/tutorial-01/select-hardware.png",
    mdxType: "FigureWithPoints"
  }, "\u52D5\u756B\u5716\u50CF\u7BC4\u4F8B\u5DF2\u9078\u4E2D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C0D\u65BC\u9019\u4E00\u6B65\uFF0C\u6211\u5011\u5C07\u4F7F\u7528STM32F746-Disco\u958B\u767C\u677F\uFF0C\u56E0\u6B64\u9EDE\u64CA\u201CSTM32F746GDiscovery Kit\u201D(1) \u4E26\u9EDE\u64CA\u201CSelect\u201D(2)\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u73FE\u5728\u53EF\u4EE5\u5275\u5EFA\u5C08\u6848\u3002 \u5982\u679C\u60A8\u9858\u610F\uFF0C\u53EF\u4EE5\u66F4\u6539\u61C9\u7528\u540D\u7A31\u3002 \u9019\u88E1\u6211\u5011\u5C07\u5B83\u6539\u6210\u4E86\u201CMyAnimatedImageExample746\u201D\u3002 \u9EDE\u64CA\u201CCreate\u201D\u6309\u9215\u7E7C\u7E8C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[460, 240]],
    imageSource: "/img/tutorials/tutorial-01/create-the-final-project-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5275\u5EFA\u5C08\u6848"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5C08\u6848\u7684\u5916\u89C0\u8207\u6211\u5011\u5728\u4E0A\u4E00\u6B65\u4E2D\u770B\u5230\u7684\u985E\u4F3C\u3002 \u552F\u4E00\u7684\u5340\u5225\u662F\uFF0C\u73FE\u5728\u201CRun Simulator\u201D\u6309\u9215 (2) \u7684\u65C1\u908A\u591A\u4E86\u4E00\u500B\u201CRun Target\u201D\u6309\u9215 (1)\u3002 \u5728\u60A8\u6309\u4E0B\u6B64\u6309\u9215\uFF08\u6216\u9375\u76E4\u4E0A\u7684 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F6`), ` />\uFF09\u6642\uFF0CTouchGFX Designer\u4F7F\u7528GNU ARM C++\u7DE8\u8B6F\u5668\u7DE8\u8B6F\u5C08\u6848\uFF0C\u4E26\u5C07\u61C9\u7528\u71D2\u9304\u5230\u76EE\u6A19\u786C\u9AD4\u3002 \u6B64\u904E\u7A0B\u53EF\u80FD\u9700\u8981\u5E7E\u5206\u9418\uFF0C\u5177\u9AD4\u53D6\u6C7A\u65BC\u96FB\u8166\u7684\u901F\u5EA6\u548C\u61C9\u7528\u7684\u8907\u96DC\u5EA6\u3002 TouchGFX Designer\u5E95\u90E8\u7684\u72C0\u614B\u5217\u5C07\u8F38\u51FA\u9032\u5EA6\u3002 \u5982\u9700\u95DC\u65BC\u5EFA\u69CB\u548C\u71D2\u9304\u6B65\u9A5F\u7684\u66F4\u591A\u8CC7\u8A0A\uFF0C\u53EF\u6309\u4E0B\u201CDetailed Log\u201D\u6309\u9215 (3) `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + L`), ` \u9375\uFF09\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[480, 250], [465, 250], [100, 250], [0, 240]],
    imageSource: "/img/tutorials/tutorial-01/the-project-is-ready-2-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\u5C08\u6848\u5C31\u7DD2"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7576\u71D2\u9304\u5B8C\u6210\u6642\uFF0CTouchGFX Designer\u5C07\u5728\u72C0\u614B\u5217\u4E2D\u5BEB\u5165\u201C\u71D2\u9304\u5B8C\u6210\u201D\u3002 \u73FE\u5728\uFF0C\u60A8\u61C9\u770B\u5230\u61C9\u7528\u5728\u958B\u767C\u677F\u4E0A\u904B\u884C\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u70BA\u4E86\u71D2\u9304\u76EE\u6A19\u786C\u9AD4\uFF0C\u60A8\u9700\u8981\u5B89\u88DDSTM32CubeProgrammer / ST-Link Utility\uFF1A", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeprog.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32CubeProgrammer")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stsw-link004.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32ST-LINKUtility")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u60A8\u9EDE\u64CA\u53F3\u4E0B\u89D2\u7684\u201CFiles\u201D\u6309\u9215 (4)\uFF0CTouchGFX Designer\u5C07\u6253\u958B\u6A94\u6848\u700F\u89BD\u5668\uFF0C\u5176\u4E2D\u986F\u793A\u4E86\u65B0\u5C08\u6848\u6240\u5728\u7684\u76EE\u9304\u3002 \u5C0E\u822A\u5230 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `build\\bin`), ` \uFF0C\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u6A94\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-01/the-projects-binary-files.png",
    mdxType: "Figure"
  }, "\u5C08\u6848\u7684\u4E8C\u9032\u4F4D\u6A94\u6848\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `target.hex`), ` \u6587\u4EF6\u662F\u958B\u767C\u677F\u7684STM32\u61C9\u7528\u3002 \u9019\u662FTouchGFX Designer\u525B\u624D\u7A0B\u5F0F\u8A2D\u8A08\u5230\u958B\u767C\u677F\u4E0A\u7684\u6A94\u6848\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u60A8\u9084\u53EF\u4EE5\u4F7F\u7528STM32CubeProgrammer\u6216ST-Link Utility\u624B\u52D5\u71D2\u9304\u958B\u767C\u677F\u3002 \u53C3\u898B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/working-with-touchgfx/compiling-and-flashing"
  }), `\u201C\u7DE8\u8B6F&\u71D2\u9304\u201D`), `\u9801\u9762\u77AD\u89E3\u8A73\u7D30\u8CC7\u8A0A\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);