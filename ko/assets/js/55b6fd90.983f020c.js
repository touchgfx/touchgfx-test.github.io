"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7876],{

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

/***/ 76056:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93054);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37793);
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
  id: "08-hardware-acceleration",
  title: "8. Hardware acceleration",
  sidebar_label: "8. Hardware acceleration"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/08-hardware-acceleration",
  "id": "development/board-bring-up/how-to/08-hardware-acceleration",
  "title": "8. Hardware acceleration",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/08-hardware-acceleration.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/08-hardware-acceleration",
  "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/08-hardware-acceleration",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 8,
  "frontMatter": {
    "id": "08-hardware-acceleration",
    "title": "8. Hardware acceleration",
    "sidebar_label": "8. Hardware acceleration"
  },
  "sidebar": "docs",
  "previous": {
    "title": "7. External flash in block mode",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"
  },
  "next": {
    "title": "9. Touch Controller",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/09-touch-controller"
  }
};
const assets = {};






const toc = [{
  value: "\uAC1C\uC694",
  id: "motivation",
  level: 2
}, {
  value: "\uBAA9\uD45C",
  id: "goal",
  level: 2
}, {
  value: "\uD655\uC778",
  id: "verification",
  level: 3
}, {
  value: "\uC804\uC81C \uC870\uAC74",
  id: "prerequisites",
  level: 2
}, {
  value: "\uC2E4\uD589",
  id: "do",
  level: 2
}, {
  value: "\uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC\uC5D0 \uC4F0\uAE30",
  id: "write-to-framebuffer-memory",
  level: 3
}, {
  value: "\uC608\uC0C1\uB300\uB85C \uC131\uB2A5\uC774 \uBC1C\uD718\uB418\uB294\uC9C0 \uC5EC\uBD80",
  id: "performance-is-as-expected",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "motivation"
  }), `\uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART(DMA2D) \uADF8\uB798\uD53D \uAC00\uC18D\uAE30\uB294 \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uC758 \uBD80\uBD84\uC744 \uC804\uC1A1\uD558\uACE0 \uC774\uAC83\uC744 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uADF8\uB9AC\uAC70\uB098 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Chrom-ART\uB294 \uB0B4\uBD80 \uB610\uB294 \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uB0B4\uBD80 \uB610\uB294 \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uC4F0\uAE30\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uADF8\uB798\uD53D\uC744 \uC218\uD589\uD560 \uB54C \uD65C\uC6A9\uC774 \uAC00\uB2A5\uD558\uBA70, \uADF8\uB798\uD53D \uC131\uB2A5\uC744 \uD68D\uAE30\uC801\uC73C\uB85C \uAC1C\uC120\uD558\uB294 \uB3D9\uC2DC\uC5D0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 MCU \uC0AC\uC6A9\uB7C9\uC744 \uB300\uD3ED \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 \uC81C\uD488\uC740 \uC544\uB2C8\uC9C0\uB9CC \uB300\uBD80\uBD84\uC758 STM32 \uCEE8\uD2B8\uB864\uB7EC\uC5D0\uB294 Chrom-ART \uAC00\uC18D\uAE30\uB97C \uD3EC\uD568\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130 \uC2DC\uD2B8\uB97C \uD655\uC778\uD558\uC2ED\uC2DC\uC624. DMA2D\uB294 \uCF54\uB4DC\uC640 \uC124\uBA85\uC11C\uC5D0 \uC0AC\uC6A9\uB418\uB294 Chrom-ART\uC758 \uCF54\uB4DC \uC774\uB984\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "Chrom-ART\uB97C \uC0AC\uC6A9\uD558\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC774 \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5\uACFC \uAD00\uB828\uC774 \uC5C6\uB2E4\uBA74 \uC774 \uB2E8\uACC4\uB97C \uAC74\uB108\uB6F0\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\uBAA9\uD45C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC758 \uBAA9\uD45C\uB294 Chrom-ART\uB97C \uD65C\uC131\uD654\uD558\uC5EC \uC774\uB97C \uC774\uC6A9\uD574 \uB370\uC774\uD130 \uC77D\uAE30 \uBC0F \uC4F0\uAE30\uB97C \uC218\uD589\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uBAA9\uD45C\uB294 Chrom-ART \uCE69\uC758 \uAE30\uB2A5\uC744 \uAC80\uD1A0\uD558\uB294 \uAC83\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uC544\uB2C8\uB77C`), `, Chrom-ART \uCE21\uBA74\uC5D0\uC11C \uBA54\uBAA8\uB9AC \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uC81C \uAE30\uB2A5\uC744 \uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uC139\uC158\uC5D0\uC11C \uD655\uC778\uD574\uC57C \uD560 \uC0AC\uD56D\uC785\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD655\uC778\uC0AC\uD56D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD655\uC778\uADFC\uAC70`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\uC758 \uAD6C\uC131 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC6D0\uD558\uB294 \uADF8\uB798\uD53D\uC744 \uADF8\uB9AC\uB294 \uB370 Chrom-ART\uAC00 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C\uC9C0 \uC5EC\uBD80`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\uC5D0\uC11C \uBA54\uBAA8\uB9AC \uC77D\uAE30\uAC00 \uAC00\uB2A5\uD55C\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uADF8\uB798\uD53D(M2M)\uC744 \uADF8\uB9AC\uB294 \uB370 Chrom-ART\uAC00 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C\uC9C0 \uC5EC\uBD80`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\uC5D0\uC11C \uBA54\uBAA8\uB9AC \uC4F0\uAE30\uAC00 \uAC00\uB2A5\uD55C\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uADF8\uB798\uD53D(M2M \uBC0F R2M)\uC744 \uADF8\uB9AC\uB294 \uB370 Chrom-ART\uAC00 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C\uC9C0 \uC5EC\uBD80`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART \uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Chrom-ART\uAC00 \uC6D0\uD558\uB294 \uADF8\uB798\uD53D \uC131\uB2A5\uC744 \uBC1C\uD718\uD558\uB294\uC9C0 \uC5EC\uBD80`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\uC804\uC81C \uC870\uAC74`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uC804\uC81C \uC870\uAC74\uC785\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Chrom-ART\uB97C \uC7A5\uCC29\uD55C MCU`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\uC2E4\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\uB294 STM32CubeMX\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, ` Multimedia -> DMA2D\xA0`), `\uBC94\uC8FC \uC544\uB798\uC5D0\uC11C \uAD6C\uC131\uB429\uB2C8\uB2E4. DMA2D\uB97C \uD65C\uC131\uD654\uD558\uACE0 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB530\uB77C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC804\uC1A1`), ` \uBAA8\uB4DC\uC640\xA0`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC0C9\uC0C1`), ` \uBAA8\uB4DC\uB97C \uAD6C\uC131\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uADF8\uB9BC\uC5D0\uC11C\uB294 DMA2D\uAC00 \uBA54\uBAA8\uB9AC\uAC04 \uC804\uC1A1 \uBAA8\uB4DC \uBC0F RGB565 \uC0C9\uC0C1 \uBAA8\uB4DC\uB97C \uC704\uD574 \uD65C\uC131\uD654 \uBC0F \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB9DE\uB294 \uC0C9\uC0C1 \uBAA8\uB4DC\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/hwaccel/cubemx-dma2d.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "Chrom-ART \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `DMA2D \uC804\uC5ED \uC778\uD130\uB7FD\uD2B8\uB294 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C \uC561\uC138\uC2A4\uB97C \uB3D9\uAE30\uD654\uD558\uB294 \uB370 \uC911\uC694\uD569\uB2C8\uB2E4. \uC544\uB798\uC640 \uAC19\uC774 STM32CubeMX NVIC \uC124\uC815\uC5D0\uC11C \uC804\uC5ED \uC778\uD130\uB7FD\uD2B8\uC758 \uD65C\uC131\uD654(NVIC \uD0ED) \uC5EC\uBD80\uC640 \uC778\uD130\uB7FD\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uC704\uD55C \uCF54\uB4DC \uC0DD\uC131\uC758 \uD65C\uC131\uD654(Code Generation \uD0ED) \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uC774 \uB2E8\uACC4\uC5D0\uC11C \uC6B0\uC120\uC21C\uC704\uB294 \uC911\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "Chrom-ART \uC778\uD130\uB7FD\uD2B8 \uD65C\uC131\uD654"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d-codegen.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "Chrom-ART \uC778\uD130\uB7FD\uD2B8 \uD578\uB4E4\uB7EC \uCF54\uB4DC \uC0DD\uC131 \uD65C\uC131\uD654"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "write-to-framebuffer-memory"
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uBA54\uBAA8\uB9AC\uC5D0 \uC4F0\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uB300\uC0C1 \uBA54\uBAA8\uB9AC(\uB808\uC9C0\uC2A4\uD130\uC5D0\uC11C \uBA54\uBAA8\uB9AC\uB85C)\uC758 \uC0AC\uAC01\uD615\uC5D0 \uD2B9\uC815 \uC0C9\uC0C1\uC744 \uCC44\uC6B0\uB294 \uCF54\uB4DC\uC5D0 \uB300\uD55C \uAC1C\uC694\uC785\uB2C8\uB2E4. MCU\uC5D0\uC11C \uAD6C\uCCB4\uC801\uC778 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD55C STM32Cube \uD38C\uC6E8\uC5B4 \uD329\uC744 \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include "stm32f7xx_hal.h"
#include "stm32f7xx_hal_dma2d.h"
...

uint32_t color = 0xF800; //Red in RGB565

hdma2d.Init.Mode = DMA2D_R2M;
hdma2d.Init.ColorMode = DMA2D_RGB565;

MODIFY_REG(hdma2d.Instance->CR, DMA2D_CR_MODE, DMA2D_R2M);
MODIFY_REG(hdma2d.Instance->OPFCCR, DMA2D_OPFCCR_CM, DMA2D_RGB565);
MODIFY_REG(hdma2d.Instance->OOR, DMA2D_OOR_LO, displayWidth - rectangleWidth);

hdma2d.LayerCfg[1].InputColorMode = CM_RGB565;
hdma2d.LayerCfg[1].InputOffset = 0;

HAL_DMA2D_ConfigLayer(&hdma2d, 1);

HAL_DMA2D_Start_IT(&hdma2d, color, (unsigned int)dstPtr, rectangleWidth, rectangleHeight);

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC5D0 Transfer Completed \uC124\uC815\uC774 \uC62C\uBC14\uB974\uAC8C \uAD6C\uC131\uB418\uC5B4 \uC788\uC73C\uBA74 \uC774 \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uD578\uB4E4\uB7EC\uB97C \uD560\uB2F9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    hdma2d.XferCpltCallback = DMA2D_XferCpltCallback;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uD578\uB4E4\uB7EC\uB97C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC815\uC758\uD558\uC5EC Transfer Completed \uC778\uD130\uB7FD\uD2B8 \uAD6C\uC131\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `extern "C" {
    static void DMA2D_XferCpltCallback(DMA2D_HandleTypeDef* handle)
    {
        //Ensure that you this callback is called
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `More examples of using ChromART can be found in the CubeFW examples. Link to examples for the STM32F429 Discovery board is given below.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    to: "https://github.com/STMicroelectronics/STM32CubeF4/tree/master/Projects/STM32F429I-Discovery/Examples/DMA2D",
    mdxType: "Link"
  }, "STM32F429I-Discovery Examples for DMA2D on GitHub"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "performance-is-as-expected"
  }), `\uC608\uC0C1\uB300\uB85C \uC131\uB2A5\uC774 \uBC1C\uD718\uB418\uB294\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\uC758 \uC131\uB2A5\uC744 \uBA54\uBAA8\uB9AC \uC77D\uAE30 \uBC0F \uC4F0\uAE30\uB97C \uC218\uD589\uD55C \uC774\uC804 \uB2E8\uACC4\uC5D0\uC11C \uB098\uC628 \uC131\uB2A5 \uACB0\uACFC\uC640 \uBE44\uAD50\uD558\uC2ED\uC2DC\uC624. Chrom-ART\uB97C \uD65C\uC6A9\uD558\uB294 \uCF54\uB4DC\uB294 \uC774\uC804\uC758 CPU \uC77D\uAE30/\uC4F0\uAE30 \uC791\uC5C5\uBCF4\uB2E4 \uC131\uB2A5\uC774 \uB6F0\uC5B4\uB0A0 \uAC83\uC73C\uB85C \uAE30\uB300\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uBC00\uB9AC\uCD08\uB85C \uCE74\uC6B4\uD305\uD558\uB294 sysTick\uBCF4\uB2E4 \uC815\uD655\uD558\uAC8C \uC911\uB2E8\uC810 \uAC04\uC5D0 \uC18C\uC694\uB41C \uD074\uB85D \uC0AC\uC774\uD074\uC744 \uCE21\uC815\uD558\uB824\uBA74 `CCSTEP` \uD074\uB85D \uC0AC\uC774\uD074 \uB808\uC9C0\uC2A4\uD130\uC758 \uAC12\uC744 \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);