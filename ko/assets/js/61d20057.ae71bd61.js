"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1258],{

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

/***/ 84840:
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
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31217);
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
  id: "canvas-widgets",
  title: "\uCE94\uBC84\uC2A4 \uC704\uC82F"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/canvas-widgets",
  "id": "development/ui-development/touchgfx-engine-features/canvas-widgets",
  "title": "\uCE94\uBC84\uC2A4 \uC704\uC82F",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/canvas-widgets.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/canvas-widgets",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/canvas-widgets",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "canvas-widgets",
    "title": "\uCE94\uBC84\uC2A4 \uC704\uC82F"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uCEE4\uC2A4\uD140 \uC704\uC82F",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/custom-widgets"
  },
  "next": {
    "title": "\uB3D9\uC801 \uBE44\uD2B8\uB9F5",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"
  }
};
const assets = {};



const toc = [{
  value: "Using Canvas Widgets",
  id: "using-canvaswidgets",
  level: 2
}, {
  value: "\uBA54\uBAA8\uB9AC \uD560\uB2F9 \uBC0F \uC0AC\uC6A9",
  id: "memory-allocation-and-usage",
  level: 2
}, {
  value: "TouchGFX Designer\uC758 \uBA54\uBAA8\uB9AC \uD560\uB2F9",
  id: "memory-allocation-in-touchgfx-designer",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC758 \uBA54\uBAA8\uB9AC \uD560\uB2F9",
  id: "memory-allocation-in-user-code",
  level: 3
}, {
  value: "CWR \uC88C\uD45C\uACC4",
  id: "the-cwr-coordinate-system",
  level: 2
}, {
  value: "\uCEE4\uC2A4\uD140 \uCE94\uBC84\uC2A4 \uC704\uC82F",
  id: "custom-canvas-widgets",
  level: 2
}, {
  value: "Painter",
  id: "painters-painters",
  level: 2
}, {
  value: "Painter classes",
  id: "painters-classes",
  level: 3
}, {
  value: "Tiled bitmaps",
  id: "painters-tiled",
  level: 3
}, {
  value: "\uCEE4\uC2A4\uD140 Painter",
  id: "custom-painters",
  level: 2
}, {
  value: "Color painters",
  id: "painters-color",
  level: 3
}, {
  value: "Changing the framebuffer",
  id: "painters-framebuffer",
  level: 3
}, {
  value: "Custom Containers on rotated displays",
  id: "painters-custom",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4 \uC704\uC82F(Canvas Widget)\uACFC \uCE94\uBC84\uC2A4 \uC704\uC82F \uB80C\uB354\uB7EC(Canvas Widget Renderer)\uB294 TouchGFX\uC5D0 \uCD94\uAC00\uB418\uB294 \uAE30\uB2A5\uC73C\uB85C\uC11C \uB192\uC740 \uC131\uB2A5\uC744 \uC720\uC9C0\uD558\uBA74\uC11C \uBE44\uAD50\uC801 \uC801\uC740 \uBA54\uBAA8\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC758 \uBD80\uB4DC\uB7FD\uACE0 \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1(anti-aliasing)\uB41C \uADF8\uB9AC\uAE30\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.  \uD558\uC9C0\uB9CC \uAE30\uD558\uD559\uC801 \uD615\uC0C1 \uB80C\uB354\uB9C1\uC740 \uB9E4\uC6B0 \uBCF5\uC7A1\uD55C \uC791\uC5C5\uC77C \uC218 \uC788\uC5B4\uC11C \uC8FC\uC758\uB97C \uAE30\uC6B8\uC774\uC9C0 \uC54A\uC73C\uBA74 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC \uB9AC\uC18C\uC2A4\uAC00 \uC27D\uAC8C \uACE0\uAC08\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4 \uC704\uC82F \uB80C\uB354\uB7EC(\uC774\uD558 CWR)\uB294 \uC77C\uBC18\uC801\uC778 \uADF8\uB798\uD53D API\uB85C\uC11C \uAC00\uC7A5 \uBD88\uD544\uC694\uD55C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uC790\uB3D9\uC73C\uB85C \uC81C\uAC70\uD558\uC5EC \uD504\uB9AC\uBBF8\uD2F0\uBE0C\uC5D0 \uCD5C\uC801\uD654\uB41C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. CWR\uC740 TouchGFX\uC5D0\uC11C \uBCF5\uC7A1\uD55C \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC744 \uADF8\uB9AC\uAE30 \uC704\uD55C \uBAA9\uC801\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC740 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC5D0\uC11C \uC815\uC758\uD569\uB2C8\uB2E4. TouchGFX\uB294 \uB2E4\uC218\uC758 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC744 \uC9C0\uC6D0\uD558\uC9C0\uB9CC \uC77C\uBC18 \uC704\uC82F\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC0AC\uC6A9\uC790\uC758 \uC694\uAD6C\uC0AC\uD56D\uC5D0 \uB530\uB77C \uCEE4\uC2A4\uD140 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCE94\uBC84\uC2A4 \uC704\uC82F\uC740 CWR\uC5D0\uC11C \uADF8\uB824\uC9C8 \uADF8\uB9BC\uC758 \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC744 \uC815\uC758\uD558\uC9C0\uB9CC \uADF8\uB9BC\uC5D0\uC11C \uAC01 \uD53D\uC140\uC758 \uC2E4\uC81C \uC0C9\uC0C1\uC740 \uAD00\uB828\uB41C Painter \uD074\uB798\uC2A4\uC5D0\uC11C \uC815\uC758\uD569\uB2C8\uB2E4. \uB9C8\uCC2C\uAC00\uC9C0\uB85C TouchGFX\uC5D0\uB294 \uB2E4\uC218\uC758 Painter\uAC00 \uC81C\uACF5\uB418\uC9C0\uB9CC \uC0AC\uC6A9\uC790\uC758 \uC694\uAD6C\uC0AC\uD56D\uC5D0 \uB530\uB77C \uCEE4\uC2A4\uD140 Painter\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-canvaswidgets"
  }), `Using Canvas Widgets`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uB2E4\uB978 \uC704\uC82F\uC740 \uD06C\uAE30\uAC00 \uC790\uB3D9\uC73C\uB85C \uC124\uC815\uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uBE44\uD2B8\uB9F5 \uC704\uC82F\uC740 \uD3EC\uD568\uB41C \uBE44\uD2B8\uB9F5\uC758 \uAC00\uB85C, \uC138\uB85C \uAE38\uC774\uB97C \uC790\uB3D9\uC73C\uB85C \uAC00\uC838\uC635\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBE44\uD2B8\uB9F5 \uC704\uC82F\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setXY()`), ` \uD568\uC218\uB97C \uC0AC\uC6A9\uD574 \uBE44\uD2B8\uB9F5\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uBC30\uCE58\uD574\uB3C4 \uCDA9\uBD84\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4 \uC704\uC82F\uC5D0\uB294 \uC790\uB3D9 \uCE21\uC815\uC744 \uD1B5\uD574 \uCC98\uC74C\uBD80\uD130 \uC124\uC815\uD560 \uC218 \uC788\uB294 \uAE30\uBCF8 \uD06C\uAE30\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC704\uC82F\uC758 \uC704\uCE58\uB294 \uBB3C\uB860\uC774\uACE0 \uD06C\uAE30\uAE4C\uC9C0 \uC815\uD655\uD558\uAC8C \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC758 \uAC00\uB85C, \uC138\uB85C \uAE38\uC774\uAC00 0\uC774 \uB418\uC5B4 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC544\uBB34\uAC83\uB3C4 \uADF8\uB824\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setXY()`), ` \uBA54\uC18C\uB4DC \uB300\uC2E0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setPosition()`), ` \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC744 \uBC30\uCE58\uD558\uACE0 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uB610\uD55C \uCEE4\uC2A4\uD140 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC744 \uC0DD\uC131\uD558\uC5EC \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC608\uB85C\uC11C \uC544\uB798 \uCEE4\uC2A4\uD140 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4 \uC704\uC82F\uC758 \uC704\uCE58\uC640 \uD06C\uAE30 \uC124\uC815\uC744 \uB9C8\uCCE4\uC73C\uBA74 \uC774\uC81C \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC774 \uC704\uC82F \uB0B4\uC5D0 \uADF8\uB824\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC88C\uD45C\uACC4\uB294 \uC704\uC82F(\uB514\uC2A4\uD50C\uB808\uC774 \uC544\uB2D8)\uC758 \uC67C\uCABD \uC0C1\uB2E8 \uBAA8\uD241\uC774\uAC00 (0, 0)\uC774 \uB418\uC5B4 X \uCD95\uC774 \uC624\uB978\uCABD\uC73C\uB85C, \uADF8\uB9AC\uACE0 Y \uCD95\uC774 \uC544\uB798\uB85C \uC5F0\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4 \uC704\uC82F\uC740 TouchGFX Designer\uC5D0\uC11C\uB3C4 \uC9C0\uC6D0\uB418\uBA70, \uC0AC\uC6A9\uC774 \uAC04\uB2E8\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uBA54\uBAA8\uB9AC \uC694\uAD6C \uC0AC\uD56D\uC744 \uC790\uB3D9\uC73C\uB85C \uACC4\uC0B0\uD558\uACE0, \uBA54\uBAA8\uB9AC\uB3C4 \uC790\uB3D9\uC73C\uB85C \uD560\uB2F9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Available Canvas Widgets in the TouchGFX Designer:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/shapes/line"
  }), `Line`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/shapes/circle"
  }), `Circle`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/shapes/shape"
  }), `Shape`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/progress-indicators/line-progress"
  }), `Line Progress`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../ui-components/progress-indicators/circle-progress"
  }), `Circle Progress`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uC704\uC758 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD558\uBA74 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uC704\uC82F\uC758 \uBAA8\uC2B5\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC11C \uC704\uCE58 \uBC0F \uD06C\uAE30 \uC870\uC815\uC774 \uB354 \uC26C\uC6CC\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "memory-allocation-and-usage"
  }), `\uBA54\uBAA8\uB9AC \uD560\uB2F9 \uBC0F \uC0AC\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA4B\uC9C4 \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1\uB41C \uBCF5\uC7A1\uD55C \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC744 \uC0DD\uC131\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uCD94\uAC00\uC801\uC778 \uBA54\uBAA8\uB9AC\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 CWR\uC5D0\uB294 \uB80C\uB354\uB9C1 \uACFC\uC815\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uBCC4\uB3C4\uC758 \uBA54\uBAA8\uB9AC \uBC84\uD37C\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uB098\uBA38\uC9C0 TouchGFX\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C CWR\uC5D0\uB3C4 \uB3D9\uC801 \uBA54\uBAA8\uB9AC \uD560\uB2F9 \uAE30\uB2A5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "memory-allocation-in-touchgfx-designer"
  }), `TouchGFX Designer\uC758 \uBA54\uBAA8\uB9AC \uD560\uB2F9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F\uC744 \uC2A4\uD06C\uB9B0\uC758 \uCE94\uBC84\uC2A4\uC5D0 \uCD94\uAC00\uD558\uBA74 \uBA54\uBAA8\uB9AC \uBC84\uD37C\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC774\uB54C \uBC84\uD37C\uC758 \uD06C\uAE30\uB294 (\uAC00\uB85C \uAE38\uC774 x 3) x 5 \uACF5\uC2DD\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uC2A4\uD06C\uB9B0\uC758 \uAC00\uB85C \uAE38\uC774\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC774 \uACF5\uC2DD\uC73C\uB85C \uACB0\uC815\uB418\uB294 \uBC84\uD37C \uD06C\uAE30\uAC00 \uBAA8\uB4E0 \uC2DC\uB098\uB9AC\uC624\uC5D0 \uC801\uD569\uD55C \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uBC84\uD37C \uD06C\uAE30\uB97C \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/screen-canvas-buffer-override-4.17.png",
    mdxType: "Figure"
  }, "\uC2A4\uD06C\uB9B0 \uC18D\uC131\uC5D0\uC11C \uC7AC\uC815\uC758\uD558\uB294 \uCE94\uBC84\uC2A4 \uBC84\uD37C \uD06C\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "memory-allocation-in-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC758 \uBA54\uBAA8\uB9AC \uD560\uB2F9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The TouchGFX Designer only allocates a memory buffer for screens that uses Canvas Widgets in the Designer. If you add Canvas Widgets in user code in a screen that does not have Canvas Widgets in the Designer you must manually setup a buffer. It is recommended to do this in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen::setupScreen`), ` method.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Add this to your Screen class definition as private members:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `private:
  static const uint16_t CANVAS_BUFFER_SIZE = 3600;
  static uint8_t canvasBuffer[CANVAS_BUFFER_SIZE]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Then in `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), ` method of `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `ScreenView.cpp`), ` the following line setting up the buffer can be added.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void ScreenView::setupScreen()
{
    ...
    CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);
    ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD544\uC694\uD55C CWR \uBA54\uBAA8\uB9AC \uC6A9\uB7C9\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD560 \uBAA8\uC591\uC758 \uCD5C\uB300 \uD06C\uAE30\uC5D0 \uB530\uB77C \uACB0\uC815\uB429\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC608\uC57D\uD560 \uC218 \uC788\uB294 \uBA54\uBAA8\uB9AC\uB294 \uAC00\uC7A5 \uBCF5\uC7A1\uD55C \uD615\uC0C1\uC77C \uB54C \uD544\uC694\uD55C \uC6A9\uB7C9\uBCF4\uB2E4 \uC801\uC2B5\uB2C8\uB2E4. CWR\uC740 \uC774\uB7EC\uD55C \uC0C1\uD669\uC5D0 \uB300\uCC98\uD558\uAE30 \uC704\uD574 \uD615\uC0C1 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uB354 \uC791\uC740 \uD504\uB808\uC784 \uBC84\uD37C \uC601\uC5ED\uC73C\uB85C \uBD84\uD560\uD558\uB294\uB370, \uC774 \uACBD\uC6B0 \uD615\uC0C1\uC744 \uD55C \uBC88 \uC774\uC0C1 \uB80C\uB354\uB9C1 \uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uB2E4\uC18C \uAE38\uC5B4\uC9C0\uAC8C \uB429\uB2C8\uB2E4. \uC2DC\uBBAC\uB808\uC774\uD130 \uBAA8\uB4DC\uC5D0\uC11C \uC2E4\uD589\uD560 \uB54C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uB354\uC6B1 \uC790\uC138\uD788 \uBD84\uC11D\uD558\uC5EC \uC815\uBC00\uD558\uAC8C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBC29\uBC95\uC740 \uAC04\uB2E8\uD569\uB2C8\uB2E4. \uB2E4\uC74C \uD568\uC218 \uD638\uCD9C\uC744 main.cpp\uC5D0 \uCD94\uAC00\uD558\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `CanvasWidgetRenderer::setWriteMemoryUsageReport(true);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uD6C4\uBD80\uD130\uB294 \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC744 \uB9C8\uCE60 \uB54C\uB9C8\uB2E4 CWR\uC774 \uD544\uC694\uD588\uB358 \uBA54\uBAA8\uB9AC \uC6A9\uB7C9\uC744 \uBCF4\uACE0\uD569\uB2C8\uB2E4(\uCF58\uC194\uB85C \uCD9C\uB825\uD569\uB2C8\uB2E4). canvas_widget_example\uC758 \uACBD\uC6B0, \uCCAB \uBC88\uC9F8 \uB4DC\uB85C\uC789 \uC5F0\uC0B0\uC5D0\uC11C \u201CCWR requires 3604 bytes\u201D\uB77C\uACE0 \uCD9C\uB825\uB418\uACE0 \uC774\uC5B4\uC11C \uB450 \uBC88\uC9F8 \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC5D0\uC11C \u201CCWR requires 7932 bytes (4328 bytes missing)\u201D\uB77C\uACE0 \uCD9C\uB825\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB450 \uBC88\uC9F8\uC5D0\uC11C CWR\uC5D0 \uBA54\uBAA8\uB9AC\uAC00 \uBD80\uC871\uD55C \uAC83\uC73C\uB85C(\uC774 \uACBD\uC6B0 4328\uBC14\uC774\uD2B8\uAC00 \uBD80\uC871\uD568) \uD45C\uC2DC\uB418\uB354\uB77C\uB3C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC815\uC0C1\uC801\uC73C\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC774\uB294 \uB2E8\uC77C \uC2E4\uD589\uC73C\uB85C\uB294 \uBCF5\uC7A1\uD55C \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC744 \uC644\uB8CC\uD558\uB294 \uB370 \uD544\uC694\uD55C \uBA54\uBAA8\uB9AC\uAC00 \uBD80\uC871\uD558\uB2E4\uB294 \uAC83\uC744 CWR\uC774 \uAC10\uC9C0\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC744 2\uD68C\uB85C \uB530\uB85C \uBD84\uD560\uD558\uACE0 \uD615\uC0C1\uC740 \uC815\uC0C1\uC801\uC73C\uB85C \uADF8\uB824\uC9C0\uAC8C \uB418\uC9C0\uB9CC \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC740 \uC880 \uB354 \uAE38\uC5B4\uC9C0\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uC62C\uBC14\uB978 \uBA54\uBAA8\uB9AC \uBC84\uD37C \uD06C\uAE30 \uC124\uC815\uC740 \uBA54\uBAA8\uB9AC\uC640 \uC131\uB2A5(\uB80C\uB354\uB9C1 \uC2DC\uAC04)\uC744 \uC11C\uB85C \uC808\uCDA9\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. \uCC98\uC74C\uC5D0 \uC2DC\uC791\uD560 \uB54C \uC720\uD6A8\uD55C \uAC12\uC740 \uC57D 3000\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC704\uC758 \uAE30\uBC95\uC744 \uC0AC\uC6A9\uD558\uBA74 \uB300\uCCB4\uB85C \uB354 \uB098\uC740 \uAC12\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. If the shape is too complex and the allocated memory buffer is way too small, part of the shape will not be drawn (some vertical pixel lines will be skipped) and it is possible that nothing is drawn at all. \uC5B4\uB5A4 \uACBD\uC6B0\uAC00 \uB418\uC5C8\uB4E0 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uD06C\uAC8C \uB298\uC5B4\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB9D0\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C CWR \uB4DC\uB85C\uC789\uC744 \uCD5C\uB300 \uC18D\uB3C4\uB85C \uB80C\uB354\uB9C1\uD558\uB824\uBA74 \uC694\uCCAD\uC5D0 \uB530\uB77C\uC11C \uBA54\uBAA8\uB9AC \uC6A9\uB7C9\uC744 \uD560\uB2F9\uD574\uC57C \uD55C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB354\uC6B1 \uB290\uB9B0 \uB80C\uB354\uB9C1 \uD0C0\uC774\uBA38\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uBA74 \uBA54\uBAA8\uB9AC \uBC84\uD37C\uB97C \uC904\uC77C \uC218 \uC788\uB294 \uBC29\uBC95\uC73C\uB85C \uC190\uC0C9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-cwr-coordinate-system"
  }), `CWR \uC88C\uD45C\uACC4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC758 \uC88C\uD45C\uACC4\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uBE44\uD2B8\uB9F5 \uC704\uCE58\uB97C \uACB0\uC815\uD560 \uBAA9\uC801\uC73C\uB85C \uD53D\uC140\uC744 \uCC98\uB9AC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5, \uD14D\uC2A4\uD2B8, \uAE30\uD0C0 \uADF8\uB798\uD53D \uC694\uC18C\uAC00 \uBAA8\uB450 \uC88C\uD45C\uACC4\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C (0, 0)\uC740 \uC67C\uCABD \uC0C1\uB2E8 \uD53D\uC140\uC5D0 \uD574\uB2F9\uD558\uBA70, x-\uCD95\uC740 \uC624\uB978\uCABD\uC73C\uB85C, y-\uCD95\uC740 \uC544\uB798\uB85C \uC5F0\uC7A5\uB429\uB2C8\uB2E4. CWR\uC5D0\uC11C\uB294 \uC815\uC218\uB9CC\uC73C\uB85C \uD53D\uC140\uC744 \uCC98\uB9AC\uD558\uC9C0 \uBABB\uD569\uB2C8\uB2E4. \uD2B9\uBCC4\uD55C \uACBD\uC6B0\uC5D0\uB294 \uCDA9\uBD84\uD560 \uC218\uB3C4 \uC788\uC9C0\uB9CC \uC77C\uBC18\uC801\uC73C\uB85C\uB294 \uBD80\uC871\uD569\uB2C8\uB2E4. \uC774\uD574\uB97C \uB3D5\uAE30 \uC704\uD574 \uC120 \uD3ED\uC774 1\uC778 \uC6D0\uC774 \uC788\uC73C\uBA70, \uC774 \uC6D0\uC774 5 x 5 \uD53D\uC140\uC758 \uBC15\uC2A4 \uC548\uC5D0 \uC815\uD655\uD558\uAC8C \uB9DE\uC544\uC57C \uD55C\uB2E4\uACE0 \uAC00\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4. The center of this circle must be at (2.5, 2.5) and the radius must be 2 (the line is drawn .5 out from both sides of the circumference), so fractions are required for the center coordinate. \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC6D0\uC774 6 x 6 \uD53D\uC140\uC758 \uBC15\uC2A4\uC5D0 \uC815\uD655\uD558\uAC8C \uB9DE\uC544\uC57C \uD55C\uB2E4\uBA74 \uC911\uC2EC\uC740 (3, 3)\uC774\uACE0, \uBC18\uACBD\uC740 2.5\uAC00 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC5EC\uAE30\uC11C\uB294 \uBC18\uACBD\uC5D0 \uBD84\uC218\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D\uC744 \uADF8\uB9AC\uAE30 \uC704\uD55C \uC774\uB7EC\uD55C \uC88C\uD45C \uC9C0\uC815 \uD558\uB294 \uC0C8\uB85C\uC6B4 \uBC29\uBC95\uC740 (0,0) \uD53D\uC140\uC5D0\uC11C\uB294 \uC911\uC2EC\uC774 CWR \uC88C\uD45C (0.5, 0.5)\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC2A4\uD06C\uB9B0\uC758 \uC67C\uCABD \uC0C1\uB2E8 \uBAA8\uD241\uC774\uC5D0 \uD53D\uC140\uC774 \uD3EC\uD568\uB41C \uBC15\uC2A4\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC724\uACFD\uC120\uC744 \uAC16\uC2B5\uB2C8\uB2E4. (0,0) -> (1,0) -> (1,1) -> (0,1) -> (0,0).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/cwr-coordinate-system.png",
    mdxType: "Figure"
  }, "(0, 0) \uD53D\uC140\uC5D0 \uD574\uB2F9\uD558\uB294 CWR \uC88C\uD45C\uACC4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uBC29\uBC95\uC774 \uCC98\uC74C\uC5D0\uB294 \uD63C\uB780\uC2A4\uB7EC\uC6B8 \uC218\uB3C4 \uC788\uC9C0\uB9CC \uACE7 \uC775\uC219\uD574\uC9C0\uAC8C \uB429\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5 \uC88C\uD45C\uACC4\uAC00 \uD53D\uC140\uC744 \uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uB3D9\uC77C\uD55C \uCE94\uBC84\uC2A4 \uC704\uC82F \uC88C\uD45C\uAC00 \uD53D\uC140 \uBC14\uB85C \uC55E\uACFC \uC704\uC758 \uAC04\uADF9\uC744 \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Since circles are shapes that often will have to be moved half a pixel to place the center correctly, the function `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Circle::setPixelCenter()`), ` will place the circle center at the center of the given pixel, i.e. half a pixel further to the right and down, compared to the coordinates specified.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-canvas-widgets"
  }), `\uCEE4\uC2A4\uD140 \uCE94\uBC84\uC2A4 \uC704\uC82F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uCE94\uBC84\uC2A4 \uC704\uC82F\uC744 \uAD6C\uD604\uD558\uB824\uBA74 \uB2E4\uC74C \uD568\uC218\uB97C \uC0AC\uC6A9\uD574 \uC0C8\uB85C\uC6B4 \uD074\uB798\uC2A4\uB97C \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual bool drawCanvasWidget(const Rect& invalidatedArea) const;
virtual Rect getMinimalRect() const;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `drawCanvasWidget()`), ` \uD568\uC218\uB294 \uCEE4\uC2A4\uD140 \uC704\uC82F\uC5D0 \uD544\uC694\uD55C \uAC83\uC744 \uADF8\uB824\uC57C \uD558\uACE0, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `getMinimalRect()`), ` \uD568\uC218\uB294 \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC774 \uD3EC\uD568\uB418\uB294 \uC704\uC82F\uC5D0 \uC2E4\uC81C \uC9C1\uC0AC\uAC01\uD615\uC744 \uBC18\uD658\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC704\uC5D0\uC11C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "getMinimalRect()"), " \uD568\uC218\uAC00 \uD544\uC694\uD55C \uC774\uC720\uB294 \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC774 \uC704\uC82F \uB0B4\uC5D0\uC11C \uC6C0\uC9C1\uC77C \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB610\uD55C \uD615\uC0C1\uC774 \uBC14\uB014 \uB54C\uB9C8\uB2E4 \uCD5C\uC18C \uC601\uC5ED\uC744 \uBB34\uD6A8\uD654\uD560 \uBAA9\uC801\uC73C\uB85C \uC704\uC82F\uC758 \uD06C\uAE30\uC640 \uC704\uCE58\uB97C \uC870\uC815\uD558\uB294 \uAC83\uC740 \uB300\uCCB4\uB85C \uC2E4\uC6A9\uC801\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `  \uC5EC\uAE30\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, `getMinimalRect()`), ` \uD568\uC218\uC758 \uB354\uBBF8 \uAD6C\uD604\uCCB4\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, `return rect;`), `, \uC989 \uC704\uC82F\uC758 \uD06C\uAE30\uB9CC \uBC18\uD658\uD560 \uC218 \uC788\uC9C0\uB9CC \uCE94\uBC84\uC2A4 \uC704\uC82F\uC774 \uB2E4\uC2DC \uADF8\uB824\uC9C0\uAC8C \uB418\uC5B4 \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC774 \uD3EC\uD568\uB41C \uC601\uC5ED\uC774 \uC544\uB2CC \uC804\uCCB4 \uC601\uC5ED\uC744 \uAC00\uB9AC\uAC8C \uB429\uB2C8\uB2E4. \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC740 \uB300\uCCB4\uB85C \uCE94\uBC84\uC2A4 \uC704\uC82F\uC758 \uC77C\uBD80 \uC601\uC5ED\uB9CC \uCC28\uC9C0\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4 \uC704\uC82F\uC740 \uBAA8\uB450 \uCE94\uBC84\uC2A4 \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uCE94\uBC84\uC2A4 \uD074\uB798\uC2A4\uB294 \uC704\uC5D0\uC11C \uC124\uBA85\uD588\uB4EF\uC774 CWR\uC744 \uC555\uCD95\uD569\uB2C8\uB2E4. CWR \uC740 \uC5EC\uB7EC \uAC00\uC9C0 \uCD5C\uC801\uD654 \uAE30\uB2A5\uC774 \uC790\uB3D9\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uC9C0\uB9CC \uBB34\uD6A8\uD654 \uC601\uC5ED\uB41C \uC601\uC5ED\uACFC \uAD00\uB828\uB41C \uAE30\uD558\uD559\uC801 \uD615\uC0C1\uC744 \uC778\uC2DD\uD558\uC5EC \uBB34\uD6A8\uD654 \uC601\uC5ED \uC678\uBD80\uC5D0\uC11C \uBD88\uD544\uC694\uD558\uAC8C \uADF8\uB824\uC9C0\uB294 \uAC83\uC744 \uD53C\uD558\uB294 \uAC83\uC774 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294\uB370 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 10 x 10 \uBC15\uC2A4 \uC548\uC5D0 \uB2E4\uC774\uC544\uBAAC\uB4DC \uD615\uC0C1\uC758 \uC0AC\uAC01\uD615\uC744 \uB300\uB7B5\uC801\uC73C\uB85C \uAD6C\uD604\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/widgets/canvas/CanvasWidget.hpp>
#include <touchgfx/widgets/canvas/Canvas.hpp>

using namespace touchgfx;

class Diamond10x10 : public CanvasWidget
{
public:
  virtual Rect getMinimalRect() const
  {
    return Rect(0,0,10,10);
  }
  virtual bool drawCanvasWidget(const Rect& invalidatedArea) const
  {
    Canvas canvas(this, invalidatedArea);
    canvas.moveTo(5,0);
    canvas.lineTo(10,5);
    canvas.lineTo(5,10);
    canvas.lineTo(0,5);
    return canvas.render(); // Shape is automatically closed
  }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC5EC\uAE30\uC11C\uB3C4 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "getMinimalRect()"), " \uD568\uC218\uAC00 \uC9C1\uC0AC\uAC01\uD615\uC744 \uC815\uD655\uD558\uAC8C \uBC18\uD658\uD558\uB294\uC9C0 \uC8FC\uC758\uD574\uC11C \uC0B4\uD3B4\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC2A4\uD06C\uB9B0\uC5D0 \uADF8\uB798\uD53D\uC774 \uC798\uBABB \uD45C\uC2DC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In order to see the Diamond10x10 on the display, the color must be set up by passing a Painter to the diamond. Read more about Painters in the next section. \uB610\uD55C Diamond10x10\uC758 \uC704\uCE58\uC640 \uD06C\uAE30\uAC00 \uC815\uD655\uD574\uC57C \uD569\uB2C8\uB2E4. \uACB0\uACFC\uC801\uC73C\uB85C \uB2E4\uC74C\uACFC \uAC19\uC740 \uBAA8\uC2B5\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD5E4\uB354 \uD30C\uC77C\uC5D0\uC11C \uC544\uB798\uC640 \uAC19\uC774 \uC120\uC5B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Diamond10x10 box;
PainterRGB565 myPainter; // For 16bpp displays
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `and in the code you should have something like this in setupScreen():`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myPainter.setColor(Color::getColorFromRGB(0xFF, 0x0, 0x0));
box.setPosition(100,100,10,10);
box.setPainter(myPainter);
add(box);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "painters-painters"
  }), `Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Painter\uB294 \uCE94\uBC84\uC2A4 \uC704\uC82F \uAC1D\uCCB4\uB97C \uCC44\uC6B0\uB294 \uCC44\uC0C9 \uBC29\uC2DD\uC744 \uC815\uC758\uD558\uAE30 \uB54C\uBB38\uC5D0 \uAC00\uC2DC\uC801 \uD615\uC0C1\uC744 \uB9CC\uB4DC\uB294 \uB370 \uD544\uC694\uD569\uB2C8\uB2E4. Painter\uB294 \uBAA8\uB4E0 \uD53D\uC140\uC5D0 \uB2E8\uC77C \uC0C9\uC0C1\uC744 \uC81C\uACF5\uD558\uAC70\uB098(\uC608: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PainterRGB565`), `), \uD639\uC740 \uC81C\uACF5\uB418\uB294 \uBE44\uD2B8\uB9F5\uC5D0\uC11C \uAC01 \uD53D\uC140\uC744 \uBCF5\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC608: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `PainterRGB565Bitmap`), `). Since a painter writes the pixels directly to the framebuffer, the selected painter must match the format of the framebuffer or dynamic bitmap. TouchGFX\uB294 \uBD88\uD22C\uBA85 \uC0C9\uC0C1 \uC804\uC6A9, \uC989 \uBE44\uD2B8\uB9F5\uC744 \uADF8\uB824\uC57C \uD558\uB294 Painter\uB97C \uD3EC\uD568\uD574 \uC9C0\uC6D0\uB418\uB294 \uBAA8\uB4E0 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC801\uD569\uD55C Painter\uC640 \uD568\uAED8 \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-classes"
  }), `Painter classes`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The following table lists the available painters in TouchGFX. When you use Canvas Widgets with the TouchGFX Designer, the Designer will select the correct painter, but if you write code yourself that uses Canvas Widgets, you must select a suitable painter.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Framebuffer format`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Color Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Bitmap painters`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBW`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBWBitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY2Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY4Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterABGR2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterABGR2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBGRA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBGRA2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGBA2222`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGBA2222Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565Bitmap, PainterRGB565L8Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888Bitmap, PainterRGB888L8Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888Bitmap, PainterARGB8888L8Bitmap`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `XRGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888Bitmap, PainterXRGB8888L8Bitmap`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The bitmap painters support various bitmap formats:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Supported bitmap formats`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBWBitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BW, BW_RLE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY2Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY2`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterGRAY4Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GRAY4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterABGR2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ABGR2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `ARGB2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterBGRA2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `BGRA2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGBA2222Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGBA2222`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB565L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB888, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterRGB888L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565, RGB888, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterARGB8888L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `RGB565 (no transparency), RGB888, ARGB8888`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `PainterXRGB8888L8Bitmap`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `L8_RGB565, L8_RGB888, L8_ARGB8888`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-tiled"
  }), `Tiled bitmaps`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Painters that draw pixels from a bitmap puts the bitmap in upper left corner of the Canvas Widget. The pixels of the shape that are outside of the bitmap dimension is not drawn.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The bitmap painters can be configured to repeat the widget (tiled) to cover the whole shape.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Tiling is enabled by calling the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setTiled(bool)`), ` method on your painter:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    PainterRGB888Bitmap bitmapPainter;
    ...
    bitmapPainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));
    bitmapPainter.setTiled(true);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Tiling can not be enabled in the Designer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/tiled-bitmap-painters.png",
    mdxType: "Figure"
  }, "An application showing an Image, Circle with bitmap painter, and Circle with tiling bitmap painter."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-painters"
  }), `\uCEE4\uC2A4\uD140 Painter`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Even though TouchGFX comes with a set of predefined painter classes covering most use case scenarios, custom painters can also be implemented.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In this section we will give a few examples, that can be used as inspiration. The examples are for 16bpp RGB565 only. Slight modifications must be done for other framebuffer formats.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `A custom painter is just a subclass of the AbstractPainter class. Painters for 16bpp (RGB565) framebuffers can use the AbstractPainterRGB565 class as superclass. Painters for 24bpp (RGB888) framebuffers can use AbstractPainterRGB888 as superclass.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `These super classes are abstract classes. The custom painter class must implement the method:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const = 0;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `destination`), ` points to the start position in the framebuffer (the left edge of the widget).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `offset`), ` is how many pixels from this start position to put the first pixel.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetX`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetY`), ` are the coordinates of the first pixel relative to widget (given in the framebuffer coordinate system).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `count`), ` is the number of pixels to draw with the specified `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `alpha`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Canvas Widgets will call this method many times, so it is very important that the implementation of `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `paint`), ` is not slow. If the Canvas Widget is not updated often, this is less important.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-color"
  }), `Color painters`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The simplest painter just writes a fixed color to the framebuffer. Here is how to implement that:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
using namespace touchgfx;
class RedPainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset; // Address of first pixel to paint
        const uint16_t* const lineend = framebuffer + count; // Address of last pixel to paint
        const uint16_t redColor565 = 0xF800;  // Full red in RGB565
        do
        {
            *framebuffer = redColor565;
        } while (++framebuffer < lineend);
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Remember to create an instance of your painter and assign it to your Canvas widget. Add a member of the painter type to your class:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Circle myCircle;
RedPainter myPainter;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `and in the code you should have something like this in setupScreen():`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
myCircle.setPainter(myPainter);
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/red-painter.png",
    mdxType: "Figure"
  }, "The RedPainter painting a Circle. On the right a magnified part."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `RedPainter`), ` class above ignores the alpha parameter. This makes the edges harsh (no alpha-blending) as all pixels are made fully red. We can improve this with a slight code update where we use the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `alpha`), ` parameter to do blending if needed:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{13-20}",
    "{13-20}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
using namespace touchgfx;
class AlphaRedPainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset; // Address of first pixel to paint
        const uint16_t* const lineend = framebuffer + count;
        const uint16_t redColor565 = 0xF800;  // Full red in RGB565
        do
        {
            if (alpha == 0xFF)
            {
                *framebuffer = redColor565; // Write red to framebuffer
            }
            else
            {
                *framebuffer = alphaBlend(redColor565, *framebuffer, alpha); // Blend red with the framebuffer color
            }
        } while (++framebuffer < lineend);
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The function `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `alphaBlend`), ` blends two RGB565 pixels with a given alpha for the first pixel. The function is provided by the super class `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `AbstractPainterRGB565`), `. The circle now has smooth edges with this code:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/red-alpha-painter.png",
    mdxType: "Figure"
  }, "The RedAlphaPainter painting a Circle. On the right a magnified part showing alpha blending."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetX`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetY`), ` parameters can be used to restrict the drawing to certain areas. Here is for example a painter that only draws on every other horizontal line. The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetY`), ` is used to control that:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-11}",
    "{8-11}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
using namespace touchgfx;
class StripePainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        if ((widgetY & 2) == 0)
        {
            return; // Do not draw anything on line 0,1, 4,5, 8,9, etc.
        }
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset;
        const uint16_t* const lineend = framebuffer + count;
        if (alpha == 0xFF)
        {
            do
            {
                *framebuffer = 0xF800;
            } while (++framebuffer < lineend);
        }
        else
        {
            do
            {
                *framebuffer = alphaBlend(0xF800, *framebuffer, alpha);
            } while (++framebuffer < lineend);
        }
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/stripe-painter.png",
    mdxType: "Figure"
  }, "The StripePainter painting a Circle. On the right a magnified part."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-framebuffer"
  }), `Changing the framebuffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The painter in this section does not paint a specific content to the framebuffer, but changes the framebuffer to be gray-scale. It does this by reading the pixel value in the framebuffer (written by the Widgets that are in the background of the Circle), extracting the green component, using this to create a gray color (same value for red, green, blue), and writing that back to the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Many similar techniques can be developed using this principle of reading and modifying the framebuffer.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{13-14}",
    "{13-14}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
#include <touchgfx/Color.hpp>
using namespace touchgfx;
class GrayscalePainter : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset;
        const uint16_t* const lineend = framebuffer + count;
        do
        {
            const uint8_t green = Color::getGreenFromRGB565(*framebuffer) & 0xF8; // Keep only 5 bits of the green
            const uint16_t color565 = LCD16bpp::getNativeColorFromRGB(green, green, green);
            if (alpha == 0xFF)
            {
                *framebuffer = color565;
            }
            else
            {
                *framebuffer = alphaBlend(color565, *framebuffer, alpha);
            }
        } while (++framebuffer < lineend);
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/gray-painter.png",
    mdxType: "Figure"
  }, "Original background on the left. On the right the Circle painter has changed the inner pixels in the circle to gray-scale."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "painters-custom"
  }), `Custom Containers on rotated displays`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If your application is using a rotated display, the custom container code must take this into account, if it is using the coordinates in the painting.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Here is the StripePainter used with a rotated display:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/stripe-painter-rotate90.png",
    mdxType: "Figure"
  }, "The StripePainter painting a Circle. On the right a magnified part."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Image, text, and the Button has been rotated by the TouchGFX engine, but we see that the stripes are now perpendicular to the text, where it is supposed to parallel. The lines have not been rotated.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", {
    parentName: "p"
  }), `
`, `The problem is that the framebuffer is not rotated, so as the painter paints in sequential addresses (pixels in the framebuffer), the lines are oriented as before (not rotated).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `We can fix that by using the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `WidgetX`), ` to decide if we are painting or not. The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetX`), ` and `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetY`), ` parameters are given in the framebuffer coordinate system. This means that `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `widgetX`), ` grows when we go down on the display and corresponds to y in the display coordinate system.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{15-18,25-28}",
    "{15-18,25-28}": true
  }), `#include <touchgfx/widgets/canvas/AbstractPainterRGB565.hpp>
#include <touchgfx/Color.hpp>
using namespace touchgfx;
class StripePainterRotate90 : public AbstractPainterRGB565
{
public:
    virtual void paint(uint8_t* destination, int16_t offset, int16_t widgetX, int16_t widgetY, int16_t count, uint8_t alpha) const
    {
        uint16_t* framebuffer = reinterpret_cast<uint16_t*>(destination) + offset;
        const uint16_t* const lineend = framebuffer + count;
        if (alpha == 0xFF)
        {
            do
            {
                if (widgetX++ & 2)
                {
                    *framebuffer = 0xF800;
                }
            } while (++framebuffer < lineend);
        }
        else
        {
            do
            {
                if (widgetX++ & 2)
                {
                    *framebuffer = alphaBlend(0xF800, *framebuffer, alpha);
                }
            } while (++framebuffer < lineend);
        }
    }
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The stripes are now correctly oriented:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/canvas-widgets/stripe-painter-rotate90-fixed.png",
    mdxType: "Figure"
  }, "The StripePainterRotate90 painting a Circle."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);