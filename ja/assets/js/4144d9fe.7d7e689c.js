"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2724],{

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

/***/ 67273:
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
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93054);
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
  id: "mixins",
  title: "\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/mixins",
  "id": "development/ui-development/touchgfx-engine-features/mixins",
  "title": "\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3",
  "description": "",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/mixins.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/mixins",
  "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/mixins",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "mixins",
    "title": "\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u901A\u4FE1",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/backend-communication"
  },
  "next": {
    "title": "\u30C6\u30AD\u30B9\u30C8\u3068\u30D5\u30A9\u30F3\u30C8",
    "permalink": "/4.20/ja/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"
  }
};
const assets = {};





const toc = [{
  value: "Move Animator",
  id: "move-animator",
  level: 2
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306EMove Animator\u306E\u4F7F\u7528",
  id: "using-move-animator-in-user-code",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u5B9F\u88C5",
  id: "callback-implementation-in-user-code",
  level: 3
}, {
  value: "API\u53C2\u7167",
  id: "api-reference",
  level: 3
}, {
  value: "Fade Animator",
  id: "fade-animator",
  level: 2
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306EFade Animator\u306E\u4F7F\u7528",
  id: "using-fade-animator-in-user-code",
  level: 3
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u5B9F\u88C5",
  id: "callback-implementation-in-user-code-1",
  level: 3
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-1",
  level: 3
}, {
  value: "ClickListener",
  id: "clicklistener",
  level: 2
}, {
  value: "\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u5B9F\u88C5",
  id: "callback-implementation-in-user-code-2",
  level: 3
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-2",
  level: 3
}, {
  value: "Draggable",
  id: "draggable",
  level: 2
}, {
  value: "API\u53C2\u7167",
  id: "api-reference-3",
  level: 3
}, {
  value: "Easing Equations",
  id: "easing-equations",
  level: 2
}, {
  value: "Cubic movement",
  id: "easing-cubic",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3068\u306F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u6A5F\u80FD\u3092\u62E1\u5F35\u3059\u308B\u30AF\u30E9\u30B9\u3067\u3001\u79FB\u52D5\u3084\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u5909\u5316\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3059\u308B\u3053\u3068\u306A\u3069\u304C\u3067\u304D\u307E\u3059\u3002 Move Animator\u304A\u3088\u3073Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306F\u3001TouchGFX Designer\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u306E\u57FA\u672C\u3068\u306A\u308B\u3082\u306E\u3067\u3001\u79FB\u52D5\u3084\u30A2\u30EB\u30D5\u30A1\u306E\u5909\u5316\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3059\u308B\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306F\u3001TouchGFX Designer\u3092\u4ECB\u3057\u3066\u3001\u3042\u308B\u3044\u306F\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u624B\u52D5\u3067\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Move and Fade Animators optionally uses easing equations to detail the progression of the animation. Read more about easing equations in the end of this `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#easing-equations"
  }), `section`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "move-animator"
  }), `Move Animator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Move Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306B\u3088\u308A\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u73FE\u5728\u306E\u4F4D\u7F6E\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u6700\u7D42\u4F4D\u7F6E\u307E\u3067\u306E\u79FB\u52D5\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 X\u65B9\u5411\u3068Y\u65B9\u5411\u306E\u79FB\u52D5\u306F\u3069\u3061\u3089\u3082\u3001EasingEquation\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u8A18\u8FF0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u9069\u7528\u53EF\u80FD\u306B\u3059\u308B\u306B\u306F\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u6240\u5B9A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E"Mixins"\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u3053\u308C\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Move Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306F\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u79FB\u52D5\u3055\u305B\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3`), `\u304C\u4F5C\u6210\u3055\u308C\u308B\u3068\u3001\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u81EA\u52D5\u7684\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-move-animator-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u3067Move Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Move Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3001\u6B21\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u751F\u6210\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5BA3\u8A00\u7F72\u540D\u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `\u30DC\u30C3\u30AF\u30B9`), `\u306EMove Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::MoveAnimator< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-move-animator-in-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306EMove Animator\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306BMove Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u9069\u7528\u3055\u308C\u308B\u3068\u3001\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3042\u308B\u4F4D\u7F6E\u304B\u3089\u5225\u306E\u4F4D\u7F6E\u3078\u306E\u79FB\u52D5\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u3053\u306E\u65B0\u6A5F\u80FD\u306E\u4F7F\u7528\u65B9\u6CD5\u306E\u5B9F\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5BFE\u3057\u3066Move Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startMoveAnimation`), `\u30E1\u30BD\u30C3\u30C9\u304C\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F5\u3064\u306E\u5F15\u6570\u3092\u4EE5\u4E0B\u306E\u9806\u5E8F\u3067\u3068\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `endX: \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u79FB\u52D5\u5148\u3068\u306A\u308B\u305D\u306E\u89AA\u3092\u57FA\u6E96\u3068\u3059\u308BX\u4F4D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `endY: \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u79FB\u52D5\u5148\u3068\u306A\u308B\u305D\u306E\u89AA\u3092\u57FA\u6E96\u3068\u3059\u308BY\u4F4D\u7F6E`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `duration: X\u8EF8\u3068Y\u8EF8\u3067\u306E\u79FB\u52D5\u306B\u304B\u304B\u308B\u6642\u9593\uFF08\u30C6\u30A3\u30C3\u30AF\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `xProgressionEquation: X\u8EF8\u3067\u306E\u79FB\u52D5\u306B\u4F7F\u7528\u3055\u308C\u308BEasingEquation`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `yProgressionEquation: Y\u8EF8\u3067\u306E\u79FB\u52D5\u306B\u4F7F\u7528\u3055\u308C\u308BEasingEquation`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001X\u8EF8\u3068Y\u8EF8\u306E\u4E21\u65B9\u3067\u7DDA\u5F62\u306EEasingEquation\u3092\u4F7F\u7528\u3057\u3066\u300140\u30C6\u30A3\u30C3\u30AF\u306E\u9593\u306BX: 0, X: 0\u306E\u5EA7\u6A19\u306B\u79FB\u52D5\u3059\u308B\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    box.startMoveAnimation(0, 0, 40, EasingEquations::linearEaseNone, EasingEquations::linearEaseNone);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "callback-implementation-in-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u5B9F\u88C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Move Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5B8C\u4E86\u3059\u308B\u3068\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u304C\u767A\u884C\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u3053\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306E\u5B9F\u88C5\u65B9\u6CD5\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5BFE\u3057\u3066Move Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316\u3057\u305F\u3089\u3001\u305D\u306E\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3068\u95A2\u6570\u306E\u5BA3\u8A00\u3092\u8FFD\u52A0\u3057\u3066\u3001\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u3042\u308B\u57FA\u5E95\u30AF\u30E9\u30B9\u304B\u3089\u7D99\u627F\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\uFF65\u30D8\u30C3\u30C0\uFF65\u30AF\u30E9\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u51E6\u7406\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-6,9-10}",
    "{5-6,9-10}": true
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    // Declaring callback handler for move animation ended on a Box
    void boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<Box>& comp);

protected:
    // Declaring callback type of MoveAnimator<Box>
    Callback <Screen1View, const touchgfx::MoveAnimator<Box>&> boxMoveAnimationEndedCallback;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30A4\u30D9\u30F3\u30C8\u3092\u51E6\u7406\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u5BA3\u8A00\u3068\u95A2\u6570\u3092\u30D3\u30E5\u30FC\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30D0\u30A4\u30F3\u30C9\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-3}",
    "{2-3}": true
  }), `Screen1View::Screen1View() :
  // In constructor for callback, bind to this view object and bind which function to handle the event.
  boxMoveAnimationEndedCallback(this, &Screen1View::boxMoveAnimationEndedHandler) { }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305D\u306E\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\u3001\u79FB\u52D5\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u7D42\u4E86\u3057\u305F\u3068\u304D\u306B\u3069\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u4F7F\u7528\u3059\u308B\u306E\u304B\u3092\u3001\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u6307\u793A\u3059\u308B\u3053\u3068\u3067\u3059\u3002\u3053\u308C\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), `\u5185\u3067\u5B9F\u884C\u3057\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5165\u308B\u305F\u3073\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u304C\u8A2D\u5B9A\u3055\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-4}",
    "{3-4}": true
  }), `void Screen1View::setupScreen()
{
  // Add the callback to box
  box.setMoveAnimationEndedAction(boxMoveAnimationEndedCallback);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u306E\u30B9\u30C6\u30C3\u30D7\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `boxMoveAnimationEndedHandler`), `\u95A2\u6570\u306E\u5B9F\u88C5\u3067\u3059\u3002\u3053\u306E\u95A2\u6570\u306F\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u51E6\u7406\u3057\u307E\u3059\u3002 \u826F\u3044\u7FD2\u6163\u3068\u3057\u3066\u3001\u79FB\u52D5\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u7D42\u4E86\u3057\u305F\u30DC\u30C3\u30AF\u30B9\u304C\u672C\u5F53\u306B'box'\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<touchgfx::Box>& b)
{
    if (&b == &box)
    {
        //Implement what should happen when move animation on 'box' has ended here.
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "api-reference"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_move_animator",
    mdxType: "Link"
  }, "MoveAnimator\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "fade-animator"
  }), `Fade Animator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306B\u3088\u308A\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3001\u73FE\u5728\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u76EE\u6A19\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u307E\u3067\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u6E1B\u8870\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u6E1B\u8870\u7387\u306FEasingEquation\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u8A18\u8FF0\u3067\u304D\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u30A2\u30EB\u30D5\u30A1\u5024\u3092\u5B9F\u88C5\u3059\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u307F\u304C\u3001Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 \u3064\u307E\u308A\u3001", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../ui-components/containers/container",
    mdxType: "Link"
  }, "\u30B3\u30F3\u30C6\u30CA"), "\u306A\u3069\u3001\u4ED6\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u542B\u3080\u3053\u3068\u304C\u3067\u304D\u308B\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3059\u3079\u3066\u3001Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u9069\u7528\u53EF\u80FD\u306B\u3059\u308B\u306B\u306F\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u6240\u5B9A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E"Mixins"\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u3053\u308C\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306F\u3001\u30BC\u30ED\u3088\u308A\u5927\u304D\u3044\u6642\u9593\u3092\u304B\u3051\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u6E1B\u8870\u3055\u305B\u308B`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3`), `\u304C\u8FFD\u52A0\u3055\u308C\u308B\u3068\u3001\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u81EA\u52D5\u7684\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-fade-animator-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u3067Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3001\u6B21\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u751F\u6210\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5BA3\u8A00\u7F72\u540D\u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `\u30DC\u30C3\u30AF\u30B9`), `\u306EFade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::FadeAnimator< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-fade-animator-in-user-code"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306EFade Animator\u306E\u4F7F\u7528`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306BFade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u9069\u7528\u3055\u308C\u308B\u3068\u3001\u305D\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306F\u3042\u308B\u8A2D\u5B9A\u304B\u3089\u5225\u306E\u8A2D\u5B9A\u3078\u306E\u30A2\u30EB\u30D5\u30A1\u5024\u306E\u5909\u5316\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u3053\u306E\u65B0\u6A5F\u80FD\u306E\u4F7F\u7528\u65B9\u6CD5\u306E\u5B9F\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5BFE\u3057\u3066Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startFadeAnimation`), `\u30E1\u30BD\u30C3\u30C9\u304C\u4F7F\u7528\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F3\u3064\u306E\u5F15\u6570\u3092\u4EE5\u4E0B\u306E\u9806\u5E8F\u3067\u3068\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `endAlpha: \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B8C\u4E86\u6642\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30A2\u30EB\u30D5\u30A1\u5024`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `duration: \u65B0\u3057\u3044\u30A2\u30EB\u30D5\u30A1\u5024\u307E\u3067\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u304B\u304B\u308B\u6642\u9593\uFF08\u30C6\u30A3\u30C3\u30AF\uFF09`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `alphaProgressionEquation: \u30A2\u30EB\u30D5\u30A1\u5024\u306E\u5909\u5316\u7387\u306B\u4F7F\u7528\u3055\u308C\u308BEasingEquation`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u7DDA\u5F62\u306EEasingEquation\u3092\u4F7F\u7528\u3057\u3066\u300140\u30C6\u30A3\u30C3\u30AF\u306E\u9593\u306B\u30A2\u30EB\u30D5\u30A1\u5024\u304C0\u307E\u3067\u5909\u5316\u3059\u308B\u4F8B\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    box.startFadeAnimation(0, 40, EasingEquations::linearEaseNone);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `linearEaseNone`), `\u30A4\u30FC\u30B8\u30F3\u30B0\u5F0F\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306A\u306E\u3067\u3001\u5F15\u6570\u3068\u3057\u3066\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "callback-implementation-in-user-code-1"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u5B9F\u88C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5B8C\u4E86\u3059\u308B\u3068\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u304C\u767A\u884C\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u3053\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306E\u5B9F\u88C5\u65B9\u6CD5\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5BFE\u3057\u3066Fade Animator\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316\u3057\u305F\u3089\u3001\u305D\u306E\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3068\u95A2\u6570\u306E\u5BA3\u8A00\u3092\u8FFD\u52A0\u3057\u3066\u3001\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u3042\u308B\u57FA\u5E95\u30AF\u30E9\u30B9\u304B\u3089\u7D99\u627F\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\uFF65\u30D8\u30C3\u30C0\uFF65\u30AF\u30E9\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u51E6\u7406\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-6,9-10}",
    "{5-6,9-10}": true
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    // Declaring callback handler for fade animation ended on a Box
    void boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<Box>& comp);

protected:
    // Declaring callback type of FadeAnimator<Box>
    Callback <Screen1View, const touchgfx::FadeAnimator<Box>&> boxFadeAnimationEndedCallback;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30A4\u30D9\u30F3\u30C8\u3092\u51E6\u7406\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u5BA3\u8A00\u3068\u95A2\u6570\u3092\u30D3\u30E5\u30FC\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30D0\u30A4\u30F3\u30C9\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-3}",
    "{2-3}": true
  }), `Screen1View::Screen1View() :
  // In constructor for callback, bind to this view object and bind which function to handle the event.
  boxFadeAnimationEndedCallback(this, &Screen1View::boxFadeAnimationEndedHandler) { }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305D\u306E\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\u3001\u79FB\u52D5\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u7D42\u4E86\u3057\u305F\u3068\u304D\u306B\u3069\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u4F7F\u7528\u3059\u308B\u306E\u304B\u3092\u3001\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u6307\u793A\u3059\u308B\u3053\u3068\u3067\u3059\u3002\u3053\u308C\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), `\u5185\u3067\u5B9F\u884C\u3057\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5165\u308B\u305F\u3073\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u304C\u8A2D\u5B9A\u3055\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-4}",
    "{3-4}": true
  }), `void Screen1View::setupScreen()
{
  // Add the callback to box
  box.setFadeAnimationEndedAction(boxFadeAnimationEndedCallback);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u306E\u30B9\u30C6\u30C3\u30D7\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `boxFadeAnimationEndedHandler`), `\u95A2\u6570\u306E\u5B9F\u88C5\u3067\u3059\u3002\u3053\u306E\u95A2\u6570\u306F\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u51E6\u7406\u3057\u307E\u3059\u3002 \u826F\u3044\u7FD2\u6163\u3068\u3057\u3066\u3001\u6E1B\u8870\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u7D42\u4E86\u3057\u305F\u30DC\u30C3\u30AF\u30B9\u304C\u672C\u5F53\u306B'box'\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<touchgfx::Box>& b)
{
    if (&b == &box)
    {
        //Implement what should happen when fade animation on 'box' has ended here.
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "api-reference-1"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_fade_animator",
    mdxType: "Link"
  }, "FadeAnimator\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "clicklistener"
  }), `ClickListener`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click Listener\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306B\u3088\u308A\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3067\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u62E1\u5F35\u3059\u308B\u3053\u3068\u3067\u3001\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u30BF\u30C3\u30C1\u5165\u529B\u306B\u5FDC\u7B54\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u9069\u7528\u53EF\u80FD\u306B\u3059\u308B\u306B\u306F\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u6240\u5B9A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E"Mixins"\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u3053\u308C\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-click-listener-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u3067Click Listener\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click Listener\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3001\u6B21\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u751F\u6210\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5BA3\u8A00\u7F72\u540D\u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `\u30DC\u30C3\u30AF\u30B9`), `\u306EClick Listener\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::ClickListener< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "callback-implementation-in-user-code-2"
  }), `\u30E6\u30FC\u30B6\uFF65\u30B3\u30FC\u30C9\u3067\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u5B9F\u88C5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click Listener\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u30BF\u30C3\u30C1\uFF65\u30A4\u30D9\u30F3\u30C8\u3092\u53D7\u4FE1\u3059\u308B\u3068\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u304C\u767A\u884C\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u3001\u3053\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306E\u5B9F\u88C5\u65B9\u6CD5\u3092\u793A\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u5BFE\u3057\u3066Click Listener\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316\u3057\u305F\u3089\u3001\u305D\u306E\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u3067\u306F\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3068\u95A2\u6570\u306E\u5BA3\u8A00\u3092\u8FFD\u52A0\u3057\u3066\u3001\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u304C\u3042\u308B\u57FA\u5E95\u30AF\u30E9\u30B9\u304B\u3089\u7D99\u627F\u3055\u308C\u308B\u30B9\u30AF\u30EA\u30FC\u30F3\uFF65\u30D8\u30C3\u30C0\uFF65\u30AF\u30E9\u30B9\uFF65\u30D5\u30A1\u30A4\u30EB\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u51E6\u7406\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3067\u306F\u3001\u30D0\u30A4\u30F3\u30C9\u5148\u306E\u30AF\u30E9\u30B9\uFF65\u30BF\u30A4\u30D7\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306E\u767A\u751F\u5143\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3001\u767A\u751F\u3057\u305F\u30A4\u30D9\u30F3\u30C8\u306E\u30BF\u30A4\u30D7\u3001\u3068\u3044\u30463\u3064\u306E\u5185\u5BB9\u3092\u5BA3\u8A00\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u4F8B\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View`), `\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `const Box& \u304A\u3088\u3073<code>const ClickEvent&`), `\u3067\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-6,9-10}",
    "{5-6,9-10}": true
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    // Declaring callback handler for Box
    void boxClickHandler(const Box& b, const ClickEvent& e);

protected:
    // Declaring callback type of box and clickEvent
    Callback<Screen1View, const Box&, const ClickEvent&> boxClickedCallback;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6B21\u306B\u3001\u30A4\u30D9\u30F3\u30C8\u3092\u51E6\u7406\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u5BA3\u8A00\u3068\u95A2\u6570\u3092\u30D3\u30E5\u30FC\uFF65\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30D0\u30A4\u30F3\u30C9\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-3}",
    "{2-3}": true
  }), `Screen1View::Screen1View() :
    // In constructor for callback, bind to this view object and bind which function to handle the event.
    boxClickedCallback(this, &Screen1View::boxClickHandler) { }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u305D\u306E\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\u3001\u30BF\u30C3\u30C1\u3055\u308C\u305F\u3068\u304D\u306B\u3069\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u4F7F\u7528\u3059\u308B\u306E\u304B\u3092\u3001\u30DC\u30C3\u30AF\u30B9\uFF65\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306B\u6307\u793A\u3059\u308B\u3053\u3068\u3067\u3059\u3002\u3053\u308C\u306F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), `\u5185\u3067\u5B9F\u884C\u3057\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u5165\u308B\u305F\u3073\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u304C\u8A2D\u5B9A\u3055\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-4}",
    "{3-4}": true
  }), `void Screen1View::setupScreen()
{
    // Add the callback to box
    box.setClickAction(boxClickedCallback);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6700\u5F8C\u306E\u30B9\u30C6\u30C3\u30D7\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `boxClickHandler`), `\u95A2\u6570\u306E\u5B9F\u88C5\u3067\u3059\u3002\u3053\u306E\u95A2\u6570\u306F\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u51E6\u7406\u3057\u307E\u3059\u3002 \u826F\u3044\u7FD2\u6163\u3068\u3057\u3066\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u958B\u59CB\u3057\u305F\u30DC\u30C3\u30AF\u30B9\u304C\u672C\u5F53\u306B'box'\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::boxClickHandler(const Box& b, const ClickEvent& evt)
{
    if (&b == &box)
    {
        //Implement what should happen when 'box' is touched/clicked here.
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "api-reference-2"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_click_listener",
    mdxType: "Link"
  }, "ClickListener\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "draggable"
  }), `Draggable`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Draggable\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u306B\u3088\u308A\u3001\u30BF\u30C3\u30C1\u5165\u529B\u3092\u4ECB\u3057\u3066\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\u3067\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u9069\u7528\u53EF\u80FD\u306B\u3059\u308B\u306B\u306F\u3001\u4E0B\u306E\u753B\u50CF\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u6240\u5B9A\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E"Mixins"\u30BB\u30AF\u30B7\u30E7\u30F3\u3067\u3053\u308C\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-draggable-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\u3067Draggable\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Draggable\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u3092\u6709\u52B9\u5316\u3059\u308B\u3068\u3001\u6B21\u306B\u793A\u3059\u3088\u3046\u306B\u3001\u751F\u6210\u3055\u308C\u305F\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u306E\u5BA3\u8A00\u7F72\u540D\u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `\u30DC\u30C3\u30AF\u30B9`), `\u306EClick Listener\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Draggable< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "api-reference-3"
  }), `API\u53C2\u7167`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_draggable",
    mdxType: "Link"
  }, "Draggable\u30AF\u30E9\u30B9\u306EAPI\u53C2\u7167"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "easing-equations"
  }), `Easing Equations`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `By default the Move and Fade animations uses a linear progression between two values. For example, if we change an alpha value from 0 to 100 in 50 steps, the alpha value will go through the steps 0, 2, 4, 6, 8, ..., 98, 100. The rate of change will be the same in all steps.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The linear progression can look a bit simple or unnatural, and the UI can often be improved by using another algorithm. TouchGFX comes with 30 algorithms each with different characteristics. The list of all the easing equations can be found in the API reference (see link at the end of this section).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The easing equations are implemented as static functions in the EasingEquations class. These functions can easily be passed to the MoveAnimator when you start an animation:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    box.startMoveAnimation(0, 0, 40, EasingEquations::cubicEaseIn, EasingEquations::cubicEaseIn);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The first easing argument is the easing equation used for the movement in x (horizontal), the second for the movement in y. Be aware, if you only pass one function it will be used for the x movement and the linear progression will be used for the y movement.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "easing-cubic"
  }), `Cubic movement`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Cubic easing equations are popular in user interfaces. It is available in three editions in TouchGFX. It is important to use the correct. The images below shows the three variants. In all cases we have time on the horizontal axis (0-400) and the value of the easing equation upwards (0-200):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-in.png",
    mdxType: "Figure"
  }, "The cubicEaseIn easing equation. Moving slowly in the beginning, ending fast."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The cubicEaseIn is very good when you animate something that is already visible on the display out of the screen. The slow start looks very natural. It gains speed and get out of the display within a short time.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-out.png",
    mdxType: "Figure"
  }, "The cubicEaseOut easing equation. Moving fast in the beginning, ending slow."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The cubicEaseOut is very good when you animate something in to the screen. It slows down as it approaches the final position, but has a high initial off-screen speed.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-inout.png",
    mdxType: "Figure"
  }, "The cubicEaseInOut easing equation. Moving slowly in the beginning, also ending slow."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The cubicEaseInOut is a combination of the cubicEaseIn and cubicEaseOut. It starts slow and ends slow. This is a natural choice when moving elements on the screen.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `For some short quick movements on screen (like a toggle button), the linear movement can look better because of the simplicity.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_easing_equations",
    mdxType: "Link"
  }, "\u4F7F\u7528\u53EF\u80FD\u306AEasingEquation\u306EAPI\u53C2\u7167")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://easings.net/",
    mdxType: "Link"
  }, "EasingEquation\u306E\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\u306A\u5B9F\u4F8B"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);