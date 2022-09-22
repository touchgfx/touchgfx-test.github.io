"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6062],{

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

/***/ 46291:
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
  title: "\uB514\uC2A4\uD50C\uB808\uC774"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-display",
  "id": "development/hardware-selection/hardware-components/hardware-selection-display",
  "title": "\uB514\uC2A4\uD50C\uB808\uC774",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-display.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-display",
  "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-components/hardware-selection-display",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-display",
    "title": "\uB514\uC2A4\uD50C\uB808\uC774"
  },
  "sidebar": "docs",
  "previous": {
    "title": "MCU",
    "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-components/hardware-selection-mcu"
  },
  "next": {
    "title": "\uC678\uBD80 \uBA54\uBAA8\uB9AC",
    "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"
  }
};
const assets = {};




const toc = [{
  value: "\uB514\uC2A4\uD50C\uB808\uC774 \uC608\uC2DC",
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
  value: "\uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4 \uAC1C\uC694",
  id: "display-interface-overview",
  level: 2
}, {
  value: "\uBC1D\uAE30 \uBC0F \uBC31\uB77C\uC774\uD2B8",
  id: "brightness-and-backlight",
  level: 3
}, {
  value: "\uC2DC\uC57C \uC704\uCE58 \uBC0F \uC0C9 \uBC18\uC804",
  id: "viewing-position-and-color-inversion",
  level: 3
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774 \uC218\uBA85(lifetime)",
  id: "display-lifetime",
  level: 3
}, {
  value: "\uD53D\uC140 \uBC00\uB3C4",
  id: "pixel-density",
  level: 3
}, {
  value: "\uB3D9\uC801 \uC0C9\uC0C1 \uBC94\uC704",
  id: "dynamic-color-range",
  level: 4
}, {
  value: "\uC548\uD2F0 \uC568\uB9AC\uC5B4\uC2F1",
  id: "anti-aliasing",
  level: 4
}, {
  value: "\uD658\uACBD",
  id: "environment",
  level: 3
}, {
  value: "\uD130\uCE58\uC2DD/\uBE44\uD130\uCE58\uC2DD \uB514\uC2A4\uD50C\uB808\uC774",
  id: "touch--non-touch-displays",
  level: 3
}, {
  value: "\uC815\uC804\uC2DD \uD130\uCE58",
  id: "capacitive-touch",
  level: 4
}, {
  value: "\uAC10\uC555\uC2DD \uD130\uCE58",
  id: "resistive-touch",
  level: 4
}, {
  value: "\uBE44\uD130\uCE58\uC2DD",
  id: "non-touch",
  level: 4
}, {
  value: "RAM \uB0B4\uC7A5 \uB514\uC2A4\uD50C\uB808\uC774",
  id: "displays-with-ram",
  level: 3
}, {
  value: "\uBE44(Non)\uC815\uC0AC\uAC01\uD615 \uD53D\uC140/\uD53D\uC140 \uC885\uD6A1\uBE44",
  id: "non-square-pixels--pixel-aspect-ratio",
  level: 3
}, {
  value: "\uCEE4\uBC84 \uB80C\uC988",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD5A5\uC0C1\uB41C \uC0AC\uC6A9\uC790 \uACBD\uD5D8, \uB354 \uD06C\uACE0 \uC0C8\uB85C\uC6CC\uC9C4 \uB514\uC2A4\uD50C\uB808\uC774 \uB0B4\uC7A5 \uADF8\uB9AC\uACE0 \uAD6C\uD615 \uC138\uADF8\uBA3C\uD2B8 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC800\uD574\uC0C1\uB3C4 \uBC0F \uACE0\uD574\uC0C1\uB3C4 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uAD50\uCCB4\uD568\uC73C\uB85C\uC368 \uC81C\uD488\uC774 \uB354\uC6B1 \uB2E4\uCC44\uB85C\uC6CC\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uCC55\uD130\uC5D0\uC11C\uB294 \uC784\uBCA0\uB514\uB4DC GUI \uC81C\uD488\uC5D0 \uC0AC\uC6A9\uD560 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC120\uD0DD\uD560 \uB54C \uACE0\uB824\uD574\uC57C \uD560 \uC0AC\uD56D\uC744 \uC911\uC810\uC801\uC73C\uB85C \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/displays.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uB2E4\uC591\uD55C \uC720\uD615\uC758 \uB514\uC2A4\uD50C\uB808\uC774"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC77C\uBC18\uC801\uC73C\uB85C TouchGFX\uB294 \uBAA8\uB4E0 \uC885\uB958\uC758 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC2E4\uD589\uB418\uBA70 \uB514\uC2A4\uD50C\uB808\uC774 \uAE30\uC220\uC774\uB098 \uC778\uD130\uD398\uC774\uC2A4, \uC2DC\uC57C\uAC01, \uBC1D\uAE30 \uB4F1\uC5D0 \uC601\uD5A5\uC744 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "examples-of-displays"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uC608\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uC758 \uD575\uC2EC \uC694\uC778\uC774 \uAC01\uAE30 \uB2E4\uB974\uAE30 \uB54C\uBB38\uC5D0 \uC801\uD569\uD55C \uB514\uC2A4\uD50C\uB808\uC774 \uAE30\uC220\uC744 \uC120\uD0DD\uD558\uAE30\uAC00 \uC27D\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uCC55\uD130\uC5D0\uC11C\uB294 \uC62C\uBC14\uB978 \uC120\uD0DD\uC744 \uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB3C4\uB85D \uB2E4\uC591\uD55C \uAE30\uC220\uB4E4\uC744 \uAC1C\uB7B5\uC801\uC73C\uB85C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC01 \uC720\uD615\uC758 \uB514\uC2A4\uD50C\uB808\uC774\uB294 \uB0B4/\uC678\uBD80 \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC\uC640 \uD504\uB808\uC784 \uBC84\uD37C\uC6A9 RAM\uC744 \uAC00\uC9C0\uACE0 \uC788\uC73C\uBA70 \uC11C\uB85C \uB2E4\uB978 \uBC29\uC2DD\uC73C\uB85C \uAD6C\uB3D9\uC774 \uAC00\uB2A5\uD55C \uD53D\uC140\uC758 \uD589\uACFC \uC5F4\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. GUI\uC5D0\uC11C \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uC744 \uB54C\uB9CC \uC5C5\uB370\uC774\uD2B8\uAC00 \uC9C4\uD589\uB418\uAE30 \uB54C\uBB38\uC5D0 \uBE48\uBC88\uD55C \uC5C5\uB370\uC774\uD2B8\uB97C \uD544\uC694\uB85C \uD558\uC9C0 \uC54A\uB294 \uAE30\uC220\uC774 \uC788\uB294 \uBC18\uBA74\uC5D0 \uAC01 \uD53D\uC140\uC744 \uC218\uC2DC\uB85C \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD558\uB294 \uAE30\uC220\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uC8FC \uB2E4\uC591\uD55C \uB514\uC2A4\uD50C\uB808\uC774 \uAE30\uC220\uB4E4\uC774 \uCD9C\uC2DC\uB418\uC5B4 \uC788\uB294\uB370, \uADF8\uC911 \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uB418\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uAE30\uC220\uB4E4\uC744 \uC18C\uAC1C\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "lcd-tft"
  }), `LCD-TFT`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT\uB294 Thin-Film-Transistor \uC758 \uC57D\uC790\uB85C, \uC561\uD2F0\uBE0C \uB9E4\uD2B8\uB9AD\uC2A4\uAC00 \uC788\uB294 LCD \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uBCC0\uD615\uC785\uB2C8\uB2E4. LCD-TFT\uB294 \uD574\uC0C1\uB3C4, \uD06C\uAE30, \uC778\uD130\uD398\uC774\uC2A4, \uAC00\uACA9\uB300 \uB4F1\uC774 \uB2E4\uC591\uD558\uBBC0\uB85C \uC784\uBCA0\uB514\uB4DC \uC81C\uD488\uC5D0 \uB110\uB9AC \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TFT-LCD\uC758 \uBCC0\uD615 \uC81C\uD488\uC73C\uB85C\uB294 TN \uD328\uB110\uACFC IPS \uD328\uB110\uC774 \uC788\uC2B5\uB2C8\uB2E4. IPS TFT-LCD \uC81C\uD488\uC5D0\uB294 STM32F769 DISCO\uC640 STM32H747 DISCO\uAC00 \uC788\uC73C\uBA70, \uB450 \uD328\uB110 \uBAA8\uB450 800*480 MIPI-DSI TFT IPS LCD \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4. TFT-LCD TN \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uB294 STM32F746G DISCO\uC640 STM32H7B3I-DK\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB450 \uAE30\uC220 \uBAA8\uB450 \uB2E4\uC591\uD55C \uD488\uC9C8\uC758 \uC81C\uD488\uC774 \uCD9C\uC2DC\uB418\uC5B4 \uC788\uACE0 \uC0C9\uC0C1 \uD45C\uD604\uACFC \uC2DC\uC57C\uAC01\uC5D0\uC11C \uC57D\uAC04\uC758 \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC9C0\uB9CC IPS \uD328\uB110\uC774 \uC8FC\uB85C \uC131\uB2A5\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/display-layers.png",
    noShadow: true,
    mdxType: "Figure"
  }, "LCD-TFT \uACC4\uCE35 \uC608\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "mip"
  }), `MIP`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MIP\uB294 Memory In Pixel\uC758 \uC57D\uC790\uB85C, \uD654\uBA74\uC5D0\uC11C \uBCC0\uACBD\uC774 \uC788\uC744 \uB54C\uB9CC \uC804\uC6D0/\uB370\uC774\uD130\uAC00 \uD544\uC694\uD55C \uD53D\uC140 \uAE30\uC220\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. MIP \uB514\uC2A4\uD50C\uB808\uC774\uB294 \uC800\uC804\uB825 \uC81C\uD488\uC73C\uB85C, \uC800\uC0C9\uC0C1\uBD80\uD130 \uD480 \uCEEC\uB7EC\uAE4C\uC9C0 \uBAA8\uB4E0 GUI\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "epapereink"
  }), `ePaper/eInk`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eInk \uB514\uC2A4\uD50C\uB808\uC774\uB294 \uC800\uC0C9\uC0C1 \uB514\uC2A4\uD50C\uB808\uC774\uB85C, \uC804\uB825 \uC18C\uBE44\uAC00 \uC801\uACE0 \uC2DC\uC57C\uAC01\uC774 \uB113\uC73C\uBA70 \uAC00\uB3C5\uC131\uC774 \uB192\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uAC00\uC7A5 \uC801\uD569\uD569\uB2C8\uB2E4. TouchGFX \uC758 \uAC1C\uBC1C \uD30C\uD2B8\uB108\uC778 SDATAWAY\uC5D0\uC11C\uB294 STM32F412\uC5D0\uC11C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uB294 eInk \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC2DC\uC5F0\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. (`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.touchgfx.com/cases/e-ink/"
  }), `https://www.touchgfx.com/cases/e-ink/`), ` \uCC38\uC870).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/e-ink.png",
    noShadow: true,
    mdxType: "Figure"
  }, "E-Ink"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "display-interface-overview"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4 \uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uB294 \uB2E4\uC591\uD55C \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD1B5\uD574 MCU\uC5D0 \uC5F0\uACB0\uB429\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB294 \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. \uC544\uB798 \uC139\uC158\uC5D0\uC11C\uB294 \uD544\uC694\uD55C \uD540\uC758 \uAC1C\uC218\uB098 \uAC16\uAC00\uC9C0 \uD574\uC0C1\uB3C4\uB97C \uC9C0\uC6D0\uD558\uB294 \uCD5C\uB300 \uB300\uC5ED\uD3ED\uACFC \uAC19\uC740 \uADF8\uB798\uD53D \uAD00\uB828 \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uB300\uD574 \uC0B4\uD3B4\uBD05\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uBAA8\uB4E0 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC73C\uBA70, STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB294 Motorola 6800, Intel 8080, SPI, RGB-TFT \uBC0F MIPI-DSI\uC5D0 \uC5F0\uACB0\uB418\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uB2E4\uC591\uD558\uAC8C \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC778\uD130\uD398\uC774\uC2A4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD540 \uAC1C\uC218`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBAA9\uD45C \uD574\uC0C1\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCD5C\uB300 \uB300\uC5ED\uD3ED`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC7A5\uC810`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB2E8\uC810`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
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
  }), `\uCD5C\uB300 480*272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16 MHz`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `I2C\uBCF4\uB2E4 \uBE60\uB978 \uAC04\uB2E8\uD55C \uD558\uB4DC\uC6E8\uC5B4 \uC778\uD130\uD398\uC774\uC2A4,`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBCD1\uB82C 8080/6800 (FMC)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `8/16*`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCD5C\uB300 480*272`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
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
  }), `\uCD5C\uB300 1280*800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  })), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uACE0\uC131\uB2A5, \uB0AE\uC740 \uBE44\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB9CE\uC740 \uD540 \uAC1C\uC218, \uBCD1\uB82C \uD1B5\uC2E0\uC740 EMC \uBB38\uC81C\uB97C \uC77C\uC73C\uD0AC \uC218 \uC788\uC73C\uBA70 \uB354 \uB192\uC740 \uD074\uB85D \uC8FC\uD30C\uC218\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC74C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\uCD5C\uB300 1280*800`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `80Mbps ~ 1.5Gbps`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uACE0\uC131\uB2A5, \uC801\uC740 \uD540 \uAC1C\uC218`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBCF5\uC7A1\uD55C \uD504\uB85C\uD1A0\uCF5C \uBC0F \uB4DC\uB77C\uC774\uBC84`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
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
  }), `\uB0AE\uC740 EMC/\uAC04\uC12D, \uBE60\uB978 \uC18D\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBE0C\uB9AC\uC9C0 \uD544\uC694\uD568`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD130\uCE58, \uC804\uC6D0, \uC81C\uC5B4 \uC2E0\uD638 \uB4F1\uC744 \uC704\uD574 \uBCC4\uB3C4\uC758 \uD540\uC774 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `** LVDS \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uC5F0\uACB0\uD558\uB824\uBA74 \uBE0C\uB9AC\uC9C0\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "brightness-and-backlight"
  }), `\uBC1D\uAE30 \uBC0F \uBC31\uB77C\uC774\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC1D\uAE30\uB294 \uC8FC\uB85C cd/m\xB2 \uB2E8\uC704\uB85C \uCE21\uC815\uB429\uB2C8\uB2E4. \uBC31\uB77C\uC774\uD2B8\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC804\uB825 \uC18C\uBAA8\uAC00 \uAC00\uC7A5 \uD070 \uBD80\uBD84\uC785\uB2C8\uB2E4. \uD587\uBE5B\uC5D0\uC11C\uB294 600cd/m\xB2 \uC815\uB3C4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uBC1D\uAE30\uB97C \uB192\uC774\uAC8C \uB418\uBA74 \uC628\uB3C4\uAC00 \uB192\uC544\uC838\uC11C LED\uC758 \uC218\uBA85\uC774 \uC904\uC5B4\uB4ED\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "viewing-position-and-color-inversion"
  }), `\uC2DC\uC57C \uC704\uCE58 \uBC0F \uC0C9 \uBC18\uC804`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC81C\uD488\uC5D0 \uB0B4\uC7A5\uD560 \uB54C\uB294 \uC0AC\uC6A9\uC790\uAC00 \uAC00\uC9C8 \uC218 \uC788\uB294 \uC2DC\uC57C \uC704\uCE58\uB97C \uC608\uC0C1 \uBC0F \uD30C\uC545\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uC77C\uBD80 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0 \uD2B9\uC815\uD55C \uC2DC\uC57C \uC704\uCE58\uC5D0\uC11C \uC0C9 \uBC18\uC804\uC774 \uC77C\uC5B4\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC989, \uC0AC\uC6A9\uC790\uAC00 \uADF8\uB798\uD53D \uB514\uC790\uC774\uB108\uC5D0 \uC758\uD574 \uB514\uC790\uC778\uB41C \uC815\uD655\uD55C \uC0C9\uC0C1\uC744 \uBCF4\uBA74\uC11C GUI\uB97C \uC6B4\uC6A9\uD558\uACE0 \uACBD\uD5D8\uD560 \uC218 \uC788\uB3C4\uB85D \uC62C\uBC14\uB978 \uC704\uCE58\uC5D0 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC124\uCE58\uD558\uB294 \uAC83\uC774 \uAE4C\uB2E4\uB85C\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TN \uD328\uB110\uC5D0\uC11C\uB294 \uC0C9 \uBC18\uC804\uC774 \uC77C\uC5B4\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4. SWV \uD544\uB984\uC744 \uCD94\uAC00\uD558\uBA74 \uC2DC\uC57C\uAC01\uC744 \uB192\uC774\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/viewing-position.png",
    mdxType: "Figure"
  }, "\uC2DC\uC57C \uC704\uCE58\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C0\uB294 \uC0C9\uC0C1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "display-lifetime"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uC218\uBA85(lifetime)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC218\uBA85(lifetime)\uC774\uB780 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 25\uB3C4\uC5D0\uC11C \uC808\uBC18 \uBC1D\uAE30\uC5D0 \uB3C4\uB2EC\uD560 \uB54C\uAE4C\uC9C0\uC758 \uC2DC\uAC04\uC73C\uB85C \uC815\uC758\uB429\uB2C8\uB2E4. \uC81C\uD488\uC758 \uB77C\uC774\uD504 \uC0AC\uC774\uD074(life cycle)\uC774 \uAE34 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uBC18\uB4DC\uC2DC \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "pixel-density"
  }), `\uD53D\uC140 \uBC00\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD53D\uC140 \uBC00\uB3C4\uB294 \uC778\uCE58 \uB610\uB294 \uD3C9\uBC29 \uC778\uCE58\uB2F9 \uD45C\uC2DC\uB418\uB294 \uD53D\uC140\uC758 \uC218\uB85C \uC815\uC758\uB429\uB2C8\uB2E4. \uC801\uD569\uD55C \uD53D\uC140 \uBC00\uB3C4\uB294 \uCD5C\uC885 \uC0AC\uC6A9\uC790\uC758 \uAE30\uB300\uCE58, \uD658\uACBD, \uB514\uC790\uC778 \uC694\uAD6C\uC0AC\uD56D \uB4F1\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uC774\uB7F0 \uC810\uC744 \uACE0\uB824\uD574 \uBCFC \uB54C \uACE0\uC0AC\uC591 \uD734\uB300\uD3F0\uC740 6.1\uC778\uCE58 2340x1080\uC5D0\uC11C \uC81C\uACF1 \uC778\uCE58\uB2F9 \uD53D\uC140 \uBC00\uB3C4\uAC00 178,500\uC778 \uBC18\uBA74, \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 5\uC778\uCE58 TFT \uB514\uC2A4\uD50C\uB808\uC774\uB294 800x480\uC5D0\uC11C \uC81C\uACF1 \uC778\uCE58\uB2F9 \uD53D\uC140 \uBC00\uB3C4\uAC00 34.816\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/pixel-density.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uC800/\uC911/\uACE0 \uD53D\uC140 \uBC00\uB3C4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC81C\uACF1 \uC778\uCE58\uB2F9 \uD53D\uC140 \uB2E8\uC704\uB85C \uCE21\uC815\uB418\uB294 \uC77C\uBD80 \uD45C\uC900 \uD574\uC0C1\uB3C4, \uB514\uC2A4\uD50C\uB808\uC774 \uD06C\uAE30 \uBC0F \uD53D\uC140 \uBC00\uB3C4(PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `10,1\u201D (13,808 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uACBD\uC6B0 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC544\uC8FC \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uC9C0 \uC54A\uB294 \uD55C\uC740 \uADF8 \uCC28\uC774\uB97C \uC2DD\uBCC4\uD558\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uD53D\uC140 \uBC00\uB3C4\uC758 \uC608\uB85C STM32F476DISCO(16,462 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)\uC640 STM32F769DISCO(54,400 PPI`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("sup", null, `2`), `)\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0 \uB098\uC640 \uC788\uB294 \uC5EC\uB7EC \uD53D\uC140 \uBC00\uB3C4\uB294 \uACBD\uC6B0\uC5D0 \uB530\uB77C \uB3D9\uC801 \uC0C9\uC0C1 \uBC94\uC704\uC640 \uC548\uD2F0 \uC568\uB9AC\uC5B4\uC2F1\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "dynamic-color-range"
  }), `\uB3D9\uC801 \uC0C9\uC0C1 \uBC94\uC704`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 \uC0C9\uC0C1 \uBC94\uC704\uB294 \uD751\uC0C9 \uBC0F \uBC31\uC0C9\uACFC \uAC19\uC774 \uB300\uC870\uB418\uB294 \uB450 \uC0C9\uC0C1 \uAC04\uC758 \uBE44\uC728\uC785\uB2C8\uB2E4. \uC704\uC758 \uC608\uC5D0\uC11C \uD30C\uB780\uC0C9\uACFC \uD770\uC0C9\uC5D0\uB294 \uB2E4\uB978 \uC218\uC900\uC758 \uD770\uC0C9\uACFC \uD30C\uB780\uC0C9\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC67C\uCABD \uADF8\uB9BC\uC740 \uD53D\uC140 \uBC00\uB3C4\uAC00 \uB0AE\uACE0 \uC624\uB978\uCABD \uADF8\uB9BC\uC740 \uD45C\uD604\uB418\uB294 \uBAA8\uB4E0 \uC0C9\uC0C1\uC744 \uBCF4\uC5EC\uC8FC\uAE30 \uC704\uD574 \uB9CE\uC740 \uD53D\uC140\uC744 \uAC00\uC9C0\uACE0 \uC788\uC5B4 \uB2E4\uB978 \uC0C9\uC0C1\uACFC \uAC00\uC7A5\uC790\uB9AC \uC0AC\uC774\uC758 \uC804\uD658\uC774 \uB354 \uBD80\uB4DC\uB7FD\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "anti-aliasing"
  }), `\uC548\uD2F0 \uC568\uB9AC\uC5B4\uC2F1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD53D\uC140 \uBC00\uB3C4\uAC00 \uB108\uBB34 \uB0AE\uC73C\uBA74 \uACC4\uB2E8 \uD6A8\uACFC\uAC00 \uB098\uD0C0\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC548\uD2F0 \uC568\uB9AC\uC5B4\uC2F1\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uC774\uB7EC\uD55C \uACC4\uB2E8 \uD6A8\uACFC\uAC00 \uB098\uD0C0\uB098\uB294 \uAC00\uC7A5\uC790\uB9AC\uB97C \uB9E4\uB044\uB7FD\uAC8C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCC98\uC74C \uB450 \uAC1C\uC758 \uD30C\uB780\uC0C9 \uC6D0\uC744 \uBCF4\uBA74 \uACC4\uB2E8 \uD6A8\uACFC\uAC00 \uB098\uD0C0\uB09C \uAC83\uC744 \uC54C \uC218 \uC788\uB294\uB370, \uC774\uB294 \uD53D\uC140 \uBC00\uB3C4\uB85C \uC778\uD574 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD53D\uC140\uC744 \uCDA9\uBD84\uD788 \uD45C\uD604\uD560 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uC548\uD2F0 \uC568\uB9AC\uC5B4\uC2F1\uC744 \uCDA9\uBD84\uD788 \uC801\uC6A9\uD560 \uB9CC\uD07C \uC0C9\uC0C1 \uBC94\uC704\uB97C \uD3ED\uB113\uAC8C \uC801\uC6A9\uD558\uC9C0 \uBABB\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/anti-aliasing.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uC548\uD2F0 \uC568\uB9AC\uC5B4\uC2F1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "environment"
  }), `\uD658\uACBD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD658\uACBD\uC740 \uC0AC\uC6A9\uD560 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uACB0\uC815\uD560 \uB54C \uBC18\uB4DC\uC2DC \uACE0\uB824\uD574\uC57C \uD560 \uC694\uC778\uC785\uB2C8\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC740 \uC0AC\uD56D\uC744 \uC790\uBB38\uD574\uBD10\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uC9C1\uC0AC\uAD11\uC120\uC5D0 \uB178\uCD9C\uB418\uB294\uAC00?`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uCDA9\uACA9\uC5D0 \uAC15\uD574\uC57C \uD558\uB294 \uAC70\uCE5C \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294\uAC00?`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC7A5\uAC11\uC744 \uB07C\uACE0 \uCDE8\uAE09\uD558\uACE0 \uC788\uB294\uAC00?`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uD30C\uC190 \uBC29\uC9C0\uAC00 \uD544\uC694\uD55C\uAC00?`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uBB3C\uB9AC\uC801 \uBC84\uD2BC\uC73C\uB85C\uB9CC \uC791\uB3D9\uB418\uACE0 \uC788\uB294\uAC00?`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC9C8\uBB38\uC5D0 \uB2F5\uD558\uB2E4 \uBCF4\uBA74 \uC5B4\uB5A4 \uD130\uCE58 \uAE30\uC220\uC774 \uC801\uD569\uD55C\uC9C0, \uB354 \uB098\uC544\uAC00 \uD130\uCE58 \uAE30\uC220 \uC790\uCCB4\uAC00 \uD544\uC694\uD55C\uC9C0 \uC5EC\uBD80\uB97C \uC798 \uD310\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX\uB294 \uD130\uCE58\uC2DD/\uBE44\uD130\uCE58\uC2DD \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC2E4\uD589\uC774 \uB418\uBA70, TouchGFX GUI\uB294 \uBC84\uD2BC, \uC190 \uBC0F \uC74C\uC131 \uC81C\uC2A4\uCC98\uB85C\uB3C4 \uC81C\uC5B4\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touch--non-touch-displays"
  }), `\uD130\uCE58\uC2DD/\uBE44\uD130\uCE58\uC2DD \uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD604\uC7AC \uAC10\uC555\uC2DD, \uC815\uC801\uC2DD(\uD45C\uBA74\uD615, \uD22C\uC601\uD615), SAW \uD130\uCE58\uC2DD, \uC801\uC678\uC120 \uD130\uCE58\uC2DD \uB4F1 \uB2E4\uC591\uD55C \uD130\uCE58 \uAE30\uC220\uC774 \uCD9C\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uAE30\uC220\uB4E4 \uC911 \uC77C\uBD80\uB9CC \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "capacitive-touch"
  }), `\uC815\uC804\uC2DD \uD130\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC7A5 \uC778\uAE30 \uC788\uB294 \uD130\uCE58 \uAE30\uC220 \uC911 \uD558\uB098\uB85C, \uC544\uB798\uC640 \uAC19\uC740 \uB450 \uAC00\uC9C0 \uC13C\uC2F1 \uAE30\uC220\uB85C \uAD6C\uD604\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD55C \uC190\uAC00\uB77D\uC73C\uB85C \uD130\uCE58\uD560 \uC218 \uC788\uB294 \uC790\uCCB4 \uC815\uC804\uC2DD \uD130\uCE58 \uAE30\uC220`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBA40\uD2F0 \uD130\uCE58\uB97C \uC9C0\uC6D0\uD558\uC9C0\uB9CC \uBB3C\uC774\uB098 \uC2B5\uAE30\uC5D0 \uB178\uCD9C\uB418\uBA74 \uD130\uCE58 \uAC10\uB3C4\uAC00 \uB5A8\uC5B4\uC9C0\uB294 \uC0C1\uD638 \uC815\uC804\uC2DD \uD130\uCE58 \uAE30\uC220(TouchGFX\uC5D0\uC11C\uB294 \uBA40\uD2F0 \uD130\uCE58\uAC00 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC74C)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32H7B3I DISCO, STM32H750 DISCO, STM32F746G DISCO\uC640 \uAC19\uC774 \uB300\uB2E4\uC218\uC758 STM32 DISCO \uBCF4\uB4DC\uB4E4\uC740 \uC815\uC804\uC2DD \uD130\uCE58 \uAE30\uC220\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "resistive-touch"
  }), `\uAC10\uC555\uC2DD \uD130\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC10\uC555\uC2DD \uD130\uCE58\uB294 \uAE30\uACC4\uC2DD \uC555\uB825\uC73C\uB85C \uB3D9\uCC29\uD558\uB294 \uAC04\uB2E8\uD55C \uAE30\uC220\uC774\uBA70 ADC\uB098 \uAC04\uB2E8\uD55C \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uB9CC\uC744 \uD544\uC694\uB85C\uD569\uB2C8\uB2E4. \uAE30\uC220 \uC131\uC219\uB3C4\uB85C \uC778\uD574 \uAC00\uACA9\uC774 \uC800\uB834\uD569\uB2C8\uB2E4. \uD45C\uBA74\uC774 \uAE01\uD798\uACFC \uB9C8\uBAA8\uC5D0 \uB354 \uC798 \uBCF4\uD638\uB418\uAE30 \uB54C\uBB38\uC5D0 \uD30C\uC190 \uBC29\uC9C0\uAC00 \uB354 \uC5B4\uB824\uC6B0\uBA70 \uD0DC\uC591\uAD11 \uC544\uB798 \uAC00\uB3C5\uC131\uC774 \uB354 \uB0AE\uC2B5\uB2C8\uB2E4. STM32F429 DISCO \uBCF4\uB4DC\uB294TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC9C0\uC6D0\uB418\uB294 \uAC10\uC555\uC2DD \uD130\uCE58\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "non-touch"
  }), `\uBE44\uD130\uCE58\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `GUI\uAC00 \uBC84\uD2BC\uC73C\uB85C \uC81C\uC5B4\uB418\uC5B4 \uC774\uBBF8\uC9C0/\uBE44\uB514\uC624\uB9CC \uD45C\uC2DC\uB418\uAC70\uB098 \uB2E4\uB978 \uC7A5\uCE58\uB97C \uD1B5\uD574 \uC678\uBD80\uC5D0\uC11C \uC81C\uC5B4\uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C\uD488\uC5D0 \uD130\uCE58 \uAE30\uC220\uC744 \uCD94\uAC00\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD130\uCE58 \uACC4\uCE35\uC744 \uCD94\uAC00\uD558\uC9C0 \uC54A\uC73C\uBA74 \uAC00\uACA9\uC774 \uB0AE\uC544\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "displays-with-ram"
  }), `RAM \uB0B4\uC7A5 \uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Motorla 6800, Intel 8080, SPI \uB610\uB294 MIPI-DSI \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uD3EC\uD568\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uB294 \uBCF4\uD1B5 \uD558\uB098\uC758 \uC804\uCCB4 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD06C\uAE30\uB97C \uAC00\uC9C0\uB294 RAM(GRAM)\uC774 \uB0B4\uC7A5\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC720\uD615\uC758 \uB514\uC2A4\uD50C\uB808\uC774\uB294 SPI, FMC \uB610\uB294 DSI-\uD638\uC2A4\uD2B8(LTDC)\uB97C \uD1B5\uD574 MCU\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB450 \uBC88\uC9F8 RAM(\uD504\uB808\uC784 \uBC84\uD37C)\uC740 \uB514\uC2A4\uD50C\uB808\uC774 RAM \uC678\uBD80\uC5D0 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4(MCU \uB610\uB294 \uC678\uBD80 RAM).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/gram-mipi.png",
    noShadow: true,
    mdxType: "Figure"
  }, "MIPI-DSI \uB514\uC2A4\uD50C\uB808\uC774"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC800\uC7A5\uD558\uAE30 \uC704\uD55C \uC678\uBD80 RAM(MCU \uC678\uBD80)\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uACE0 MCU\uC5D0\uC11C \uB0B4\uBD80 RAM\uC774 \uC0AC\uC6A9\uB418\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. MCU RAM\uC774 \uD558\uB098\uC758 \uC804\uCCB4 \uD504\uB808\uC784 \uBC84\uD37C \uD06C\uAE30 \uBCF4\uB2E4 \uC791\uC740 \uACBD\uC6B0, \uD5C8\uC6A9\uD558\uB294 \uD504\uB808\uC784 \uBC84\uD37C \uC810\uC720\uB7C9\uC774 \uB9E4\uC6B0 \uC801\uC740 TouchGFX \uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uB3C4 \uD55C \uBC29\uBC95\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "../../scenarios/lowering-memory-usage-with-partial-framebuffer",
    mdxType: "Link"
  }, "\uBD80\uBD84 \uD504\uB808\uC784 \uBC84\uD37C \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/gram-spi.png",
    noShadow: true,
    mdxType: "Figure"
  }, "SPI \uB514\uC2A4\uD50C\uB808\uC774"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "non-square-pixels--pixel-aspect-ratio"
  }), `\uBE44(Non)\uC815\uC0AC\uAC01\uD615 \uD53D\uC140/\uD53D\uC140 \uC885\uD6A1\uBE44`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uD53D\uC140 \uBAA8\uC591\uC740 \uC815\uC0AC\uAC01\uD615\uC774\uC9C0\uB9CC \uC77C\uBD80 \uB514\uC2A4\uD50C\uB808\uC774\uB294 \uC815\uC0AC\uAC01\uD615\uC774 \uC544\uB2CC \uD53D\uC140\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD53D\uC140 \uBE44\uC728\uC740 \uD53D\uC140 \uB108\uBE44\uC640 \uD53D\uC140 \uB192\uC774 \uAC04\uC758 \uBE44\uC728\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB108\uBE44\uAC00 100 \uD53D\uC140\uC774\uACE0 \uB192\uC774\uAC00 100 \uD53D\uC140\uC778 \uC815\uC0AC\uAC01\uD615 \uD53D\uC140\uC744 \uC0AC\uC6A9\uD560 \uACBD\uC6B0 \uC885\uD6A1\uBE44\uB294 1/1\uC774 \uB429\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC815\uC0AC\uAC01\uD615\uC774 \uC544\uB2CC \uD53D\uC140\uC740 \uD53D\uC140 \uC885\uD6A1\uBE44\uAC00 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uADF8\uB798\uD53D \uB514\uC790\uC774\uB108\uAC00 \uC774\uB97C \uACE0\uB824\uD558\uC9C0 \uC54A\uC73C\uBA74 \uBE44\uD2B8\uB9F5\uC774 \uC544\uB798 \uC608\uC2DC\uC640 \uAC19\uC774 \uD655\uC7A5\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/display/pixel-aspect.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uD655\uC7A5\uB41C \uBE44\uD2B8\uB9F5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cover-lense"
  }), `\uCEE4\uBC84 \uB80C\uC988`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uB294 \uB0B4\uC7A5\uD615 GUI \uC81C\uD488\uC758 \uC5BC\uAD74\uC774\uBBC0\uB85C, \uCEE4\uBC84 \uB80C\uC988\uB97C \uCD94\uAC00\uD558\uBA74 \uC678\uAD00\uACFC \uB290\uB08C\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCEE4\uBC84 \uB80C\uC988\uB85C \uB514\uC790\uC778, \uAE01\uD798 \uBC29\uC9C0, \uCDA9\uACA9 \uAC15\uB3C4, \uC0C9\uC0C1 \uB4F1\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);