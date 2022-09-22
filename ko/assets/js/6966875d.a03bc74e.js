"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[204],{

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

/***/ 34885:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./components/Figure.js
var Figure = __webpack_require__(44035);
// EXTERNAL MODULE: ./components/Caution.js
var Caution = __webpack_require__(70814);
// EXTERNAL MODULE: ./components/Tip.js
var Tip = __webpack_require__(37793);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/Highlight.js
var Highlight = __webpack_require__(88678);
;// CONCATENATED MODULE: ./components/Try.js


const icon = /* @__PURE__ */ react.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "16",
  viewBox: "0 0 14 16"
}, /* @__PURE__ */ react.createElement("path", {
  fillRule: "evenodd",
  d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
}));
class Try extends react.Component {
  render() {
    return /* @__PURE__ */ react.createElement(Highlight/* default */.Z, {
      color: "var(--highlight-color-try)",
      header: "Things to try",
      type: "try",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ var components_Try = (Try);

// EXTERNAL MODULE: ./components/FurtherReading.js
var FurtherReading = __webpack_require__(29415);
// EXTERNAL MODULE: ./components/InlineCode.js
var InlineCode = __webpack_require__(31217);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./components/CodeHeader.js
var CodeHeader = __webpack_require__(22425);
;// CONCATENATED MODULE: ./i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx
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
  id: "custom-widgets",
  title: "\uCEE4\uC2A4\uD140 \uC704\uC82F"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-widgets",
  "id": "development/ui-development/touchgfx-engine-features/custom-widgets",
  "title": "\uCEE4\uC2A4\uD140 \uC704\uC82F",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-widgets",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/custom-widgets",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-widgets",
    "title": "\uCEE4\uC2A4\uD140 \uC704\uC82F"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBE44\uD2B8\uB9F5 \uCE90\uC2F1",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  },
  "next": {
    "title": "\uCE94\uBC84\uC2A4 \uC704\uC82F",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"
  }
};
const assets = {};








const toc = [{
  value: "\uCEE4\uC2A4\uD140 \uC704\uC82F \uC811\uADFC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0",
  id: "when-to-use-the-custom-widget-approach",
  level: 2
}, {
  value: "TouchGFX Designer\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC704\uC82F \uC0DD\uC131\uD558\uAE30",
  id: "in-touchgfx-designer",
  level: 2
}, {
  value: "\uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC704\uC82F \uC0DD\uC131\uD558\uAE30",
  id: "in-code",
  level: 2
}, {
  value: "\uC0AC\uC6A9\uC790 \uACE0\uC720\uC758 \uCEE4\uC2A4\uD140 \uC704\uC82F",
  id: "your-own-custom-widget",
  level: 3
}, {
  value: "\uBD80\uBD84 \uADF8\uB9AC\uAE30",
  id: "partial-drawing",
  level: 3
}, {
  value: "\uBD88\uD22C\uBA85\uD55C \uC601\uC5ED",
  id: "solid-area",
  level: 3
}, {
  value: "\uC18C\uC2A4 \uCF54\uB4DC \uC608\uC81C",
  id: "example-source-code",
  level: 3
}, {
  value: "\uD45C\uC900 \uC704\uC82F/\uCEE8\uD14C\uC774\uB108 \uC218\uC815\uD558\uAE30",
  id: "modifying-standard-widgetscontainers",
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
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD560 \uB54C TouchGFX \uBC30\uD3EC\uD310\uC5D0 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC740 \uC704\uC82F\uC774 \uD544\uC694\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX\uC5D0\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC790\uC2E0\uB9CC\uC758 \uADF8\uB798\uD53D \uC694\uC18C\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uB294 \uBA87 \uAC00\uC9C0 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uC190\uC26C\uC6B4 \uBC29\uBC95\uC740 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-containers"
  }), `\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uBC29\uC2DD`), `\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAE30\uC874 \uC704\uC82F\uC744 \uC870\uD569\uD558\uC5EC \uC0AC\uC6A9\uC790 \uACE0\uC720\uC758 \uC704\uC82F\uC744 \uC0DD\uC131\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uACE0\uAE09 \uC811\uADFC \uBC29\uC2DD\uC73C\uB85C\uC11C, \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC644\uC804\uD788 \uC81C\uC5B4\uD560 \uC218 \uC788\uB294 \uC704\uC82F\uC744 \uC0DD\uC131\uD558\uC5EC \uC6D0\uD558\uB294 \uAC83\uC744 \uC815\uBC00\uD558\uAC8C \uADF8\uB9AC\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "when-to-use-the-custom-widget-approach"
  }), `\uCEE4\uC2A4\uD140 \uC704\uC82F \uC811\uADFC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uCEE4\uC2A4\uD140 \uC704\uC82F \uC0DD\uC131\uC740 \uC0AC\uC6A9\uC790 \uACE0\uC720\uC758 \uC704\uC82F\uC744 \uC0DD\uC131\uD558\uB294 \uC791\uC5C5\uC73C\uB85C\uC11C \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uBC29\uBC95\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uC694\uAC74\uC5D0 \uBD80\uD569\uD55C\uB2E4\uBA74 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC811\uADFC \uBC29\uC2DD\uC744 \uC120\uD638\uD558\uC9C0\uB9CC \uC774 \uBC29\uBC95\uB9CC\uC73C\uB85C\uB294 \uBD80\uC871\uD55C \uACBD\uC6B0\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC644\uC804\uD788 \uC81C\uC5B4\uD558\uB824\uBA74 \uCEE4\uC2A4\uD140 \uC704\uC82F \uC811\uADFC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uCEE4\uC2A4\uD140 \uC704\uC82F \uC811\uADFC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD574 \uC704\uC82F\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uACE0, \uC0DD\uC131\uD574\uC57C \uD558\uB294 \uC608\uB97C \uB4E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\uC138\uD53C\uC544(Sepia) \uD544\uD130`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\uB9CC\uB378\uBE0C\uB85C \uD504\uB799\uD0C8(Mandelbrot fractal) \uC704\uC82F`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\uD30C\uC77C\uC758 \uB370\uC774\uD130\uB97C \uD45C\uC2DC\uD558\uB294 \uC704\uC82F(\uC608: gif \uC560\uB2C8\uBA54\uC774\uC158 \uB4F1)`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `TouchGFX Designer\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC704\uC82F \uC0DD\uC131\uD558\uAE30`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `TouchGFX Designer\uB294 \uD604\uC7AC \uCEE4\uC2A4\uD140 \uC704\uC82F \uC0DD\uC131\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCEE4\uC2A4\uD140 \uC704\uC82F \uCF54\uB4DC\uB97C \uC9C1\uC811 \uC791\uC131\uD55C \uD6C4(\uC791\uC131 \uBC29\uBC95\uC740 \uBCF8 \uC139\uC158\uC758 \uB098\uBA38\uC9C0 \uBD80\uBD84 \uCC38\uC870), View\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uAD6C\uAC04\uC5D0 \uC704\uC82F\uC744 \uC0BD\uC785\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "in-code"
  }), `\uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC704\uC82F \uC0DD\uC131\uD558\uAE30`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC0AC\uC6A9\uC790 \uACE0\uC720\uC758 \uCEE4\uC2A4\uD140 \uC704\uC82F\uC740 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `Widget`), ` \uD074\uB798\uC2A4\uB97C \uD655\uC7A5\uD558\uC5EC \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774\uB54C \uC0AC\uC6A9\uC790\uC758 \uC218\uC791\uC5C5\uC774 \uB2E4\uC18C \uD544\uC694\uD558\uC9C0\uB9CC, \uC704\uC82F\uC5D0\uC11C \uADF8\uB824\uC9C0\uB294 \uBAA8\uB4E0 \uD53D\uC140\uB4E4\uC744 \uC644\uBCBD\uD558\uAC8C \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uC704\uC82F\uC774 \uBC18\uB4DC\uC2DC \uAE30\uC874 \uC704\uC82F\uC744 \uC774\uC6A9\uD560 \uD544\uC694\uB294 \uC5C6\uC9C0\uB9CC \uD53D\uC140\uC758 \uC0C9\uC0C1\uC744 \uC9C0\uC815\uD558\uC5EC \uADF8\uB9AC\uB294  \uBC29\uC2DD\uC744 \uC815\uC758\uD569\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uC704\uC82F \uC811\uADFC \uBC29\uC2DD\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uCC28\uC9C0\uD558\uB294 \uBA54\uBAA8\uB9AC \uACF5\uAC04\uC774 \uBE44\uAD50\uC801 \uC801\uC5B4\uC11C \uACBD\uC6B0\uC5D0 \uB530\uB77C \uB9E4\uC6B0 \uC911\uC694\uD558\uAC8C \uC0AC\uC6A9\uB418\uAE30\uB3C4 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uCEE4\uC2A4\uD140 \uC704\uC82F\uC758 \uD55C \uAC00\uC9C0 \uC608\uB85C QR \uCF54\uB4DC \uC704\uC82F\uC774 \uC788\uC2B5\uB2C8\uB2E4. QR \uCF54\uB4DC \uC704\uC82F\uC774 \uB300\uD45C\uC801\uC778 \uC608\uC774\uBBC0\uB85C \uB2E4\uC74C \uC139\uC158\uC5D0\uC11C\uB294 \uC774 \uC704\uC82F\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uC608\uC2DC\uC5D0\uC11C QR \uCF54\uB4DC \uC704\uC82F\uC740 \uD751\uBC31 \uD53D\uC140\uC758 NxN \uB9E4\uD2B8\uB9AD\uC2A4\uC785\uB2C8\uB2E4. \uC704\uC82F\uC758 \uD06C\uAE30\uC640 \uAC01 \uD53D\uC140\uC758 \uC0C9\uC0C1\uC740 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uACB0\uC815\uB418\uBA70, QR \uCF54\uB4DC \uB370\uC774\uD130 \uAC1D\uCCB4\uC758 \uC815\uBCF4\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uB2E4\uC74C\uC740 QR \uCF54\uB4DC \uC704\uC82F\uC758 \uD615\uD0DC\uB97C \uB098\uD0C0\uB0B8 \uB450 \uAC00\uC9C0 \uC608\uC2DC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-examples.png",
    noShadow: true,
    mdxType: "Figure"
  }, "QR \uCF54\uB4DC \uC704\uC82F \uC608\uC2DC"), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC811\uADFC \uBC29\uC2DD\uC5D0\uC11C\uB3C4 N*N \uD751\uBC31 \uBC15\uC2A4\uB97C \uD558\uC704 \uC704\uC82F\uC73C\uB85C \uCD94\uAC00\uD558\uBA74 QR \uCF54\uB4DC \uC704\uC82F\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC774\uB807\uAC8C \uD558\uBA74 \uCC28\uC9C0\uD558\uB294 \uBA54\uBAA8\uB9AC \uACF5\uAC04\uC774 \uD06C\uAC8C \uB298\uC5B4\uB098\uAE30 \uB54C\uBB38\uC5D0 \uD6A8\uC728\uC801\uC774\uAC70\uB098 \uC720\uC5F0\uD558\uC9C0 \uBABB\uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,esm/* mdx */.kt)(Tip/* default */.Z, {
    mdxType: "Tip"
  }, "\uD45C\uC900 ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "touchgfx::Button"), " \uBA54\uC18C\uB4DC(\uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD568\uAED8 \uC81C\uACF5\uB428)\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uAC00 \uC544\uB2CC \uCEE4\uC2A4\uD140 \uC704\uC82F\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uBC84\uD2BC\uBCC4 \uBA54\uBAA8\uB9AC \uC810\uC720\uB7C9\uC744 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "your-own-custom-widget"
  }), `\uC0AC\uC6A9\uC790 \uACE0\uC720\uC758 \uCEE4\uC2A4\uD140 \uC704\uC82F`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `Widget`), ` \uD074\uB798\uC2A4\uB97C \uD655\uC7A5\uD558\uB294 \uC704\uC82F\uC744 \uC0DD\uC131\uD558\uB824\uBA74 \uB450 \uAC00\uC9C0\uB97C \uC124\uBA85\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F\uC774 \uADF8\uB824\uC9C0\uB294 \uBC29\uBC95`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F\uC5D0\uC11C \uBD88\uD22C\uBA85\uD55C(solid) \uC601\uC5ED`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "partial-drawing"
  }), `\uBD80\uBD84 \uADF8\uB9AC\uAE30`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uCEE4\uC2A4\uD140 \uC704\uC82F\uC744 \uD3EC\uD568\uD574 \uBAA8\uB4E0 \uC704\uC82F\uC740 \uBD80\uBD84 \uADF8\uB9AC\uAE30\uB97C \uC9C0\uC6D0\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uC704\uC82F\uC774 \uC77C\uBD80\uBD84\uB9CC \uADF8\uB9B4 \uC218 \uC788\uC5B4\uC57C \uD568\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774\uB294 \uB450 \uAC00\uC9C0 \uC0AC\uD56D\uC5D0\uC11C \uAE30\uC778\uD558\uB294\uB370, \uD558\uB098\uB294, \uC2A4\uD06C\uB9B0 \uC804\uCCB4\uB97C \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uAC83 \uBCF4\uB2E4\uB294 \uC77C\uBD80\uBD84\uB9CC \uADF8\uB824\uC57C \uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uAE30 \uB54C\uBB38\uC774\uBA70 \uB098\uBA38\uC9C0 \uD558\uB098\uB294, TouchGFX\uC758 \uC54C\uACE0\uB9AC\uC998\uC740 \uADF8\uB824\uC9C0\uB294 \uC804\uCCB4 \uD53D\uC140 \uC218\uC758 \uCD5C\uC18C\uD654\uB97C \uC704\uD574 \uC2A4\uD06C\uB9B0\uC758 \uADF8\uB9BC\uC744 \uC5EC\uB7EC \uBD80\uBD84\uC758 \uADF8\uB9BC\uC73C\uB85C \uBD84\uB9AC\uD560 \uC218 \uC788\uAE30  \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0\uB294 \uC2A4\uD06C\uB9B0\uC758 \uBD80\uBD84 \uADF8\uB9AC\uAE30\uB294 \uC704\uC82F\uC5D0\uAC8C \uBD80\uBD84\uC801\uC73C\uB85C\uB9CC \uADF8\uB9AC\uB3C4\uB85D \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 QR \uC704\uC82F \uC5ED\uC2DC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC15\uC870\uB41C \uC601\uC5ED\uB9CC \uADF8\uB9AC\uB294 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD560 \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.png",
    noShadow: true,
    mdxType: "Figure"
  }, "QR \uCF54\uB4DC \uC704\uC82F \uBD80\uBD84 \uADF8\uB9AC\uAE30"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uCF54\uB4DC\uC5D0\uC11C \uBD80\uBD84 \uADF8\uB9AC\uAE30\uB97C \uC218\uD589\uD558\uB824\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), ` \uBA54\uC18C\uB4DC\uB97C \uC7AC\uC815\uC758\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual void draw(const touchgfx::Rect& invalidatedArea) const
{
    //run through the pixels of the invalidated area
    //draw a black pixel if the qr data object has a value at this position
    //draw a white pixel otherwise
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `invalidatedArea`), `\uB294 \uC704\uC82F\uC5D0\uC11C \uC5C5\uB370\uC774\uD2B8\uAC00 \uD544\uC694\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4. QR \uCF54\uB4DC \uC608\uC5D0\uC11C \uAC15\uC870\uB41C \uC601\uC5ED\uC774 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. \uC774 \uC601\uC5ED\uC740 \uC704\uC82F\uC758 \uC67C\uCABD \uC0C1\uB2E8 \uBAA8\uD241\uC774\uB97C \uAE30\uC900\uC73C\uB85C \uC88C\uD45C\uB85C \uD45C\uD604\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\uBB34\uD6A8\uD654\uB41C \uC601\uC5ED \uB0B4\uC5D0 \uADF8\uB9AC\uB294 \uAC83\uC740 \uC704\uC82F\uC774 \uD574\uC57C\uD560 \uC77C \uC785\uB2C8\uB2E4. \uBB34\uD6A8\uD654\uB41C \uC601\uC5ED\uC744 \uBC97\uC5B4\uB098\uC11C \uADF8\uB9AC\uAC8C \uB418\uBA74 \uC804\uCCB4\uC801\uC73C\uB85C \uC2A4\uD06C\uB9B0 \uB3D9\uC791\uC758 \uC815\uD655\uB3C4\uAC00 \uB5A8\uC5B4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,esm/* mdx */.kt)(Tip/* default */.Z, {
    mdxType: "Tip"
  }, "\uC704\uC5D0\uC11C ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "draw"), " \uBA54\uC18C\uB4DC\uB294 ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "const\uC785\uB2C8\uB2E4."), " \uCD5C\uC801\uD654\uB41C \uADF8\uB9AC\uAE30 \uC54C\uACE0\uB9AC\uC998\uC774 \uC704\uC82F \uADF8\uB9AC\uAE30\uB97C \uB2E4\uC218\uC758 \uADF8\uB9AC\uAE30 \uD638\uCD9C\uB85C \uBD84\uD560\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC704\uC5D0\uC11C ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "const\uC785\uB2C8\uB2E4."), " \uC774\uB807\uAC8C \uB2E4\uC218\uC758 ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "draw"), " \uBA54\uC18C\uB4DC\uB97C \uC2E4\uD589\uD558\uB294 \uB3C4\uC911 \uC704\uC82F\uC774 \uC6C0\uC9C1\uC774\uAC70\uB098 \uC5C5\uB370\uC774\uD2B8\uB418\uC9C0 \uC54A\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "solid-area"
  }), `\uBD88\uD22C\uBA85\uD55C \uC601\uC5ED`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uB610\uD55C \uC704\uC82F\uC740 \uBD88\uD22C\uBA85\uD55C \uC601\uC5ED\uC774 \uC5BC\uB9C8\uB098 \uD070\uC9C0 \uBCF4\uACE0\uD560 \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uBD88\uD22C\uBA85\uC774\uB780 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uC704\uC82F\uC5D0 \uAC00\uB824\uC9C4 \uBD80\uBD84\uC744 \uBCFC \uC218 \uC5C6\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uBE68\uAC04\uC0C9 \uD45C\uC900 \uBC15\uC2A4\uB294 \uC644\uC804 \uBD88\uD22C\uBA85\uC778 \uBC18\uBA74 \uC54C\uD30C \uAC12\uC774 50%\uC778 \uC774\uBBF8\uC9C0\uB294 \uC644\uC804 \uBD88\uD22C\uBA85\uC774 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC5D0 \uAC00\uB824\uC9C4 \uBD80\uBD84\uC744 \uBAA8\uB450 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uBD88\uD22C\uBA85\uD55C \uC704\uC82F\uC740 TouchGFX\uC5D0\uC11C \uB354\uC6B1 \uBE60\uB974\uAC8C \uADF8\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBD88\uD22C\uBA85\uD55C \uC601\uC5ED \uC544\uB798\uB85C\uB294 \uC704\uC82F\uC744 \uADF8\uB9B4 \uD544\uC694\uAC00 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uADF8\uB824\uC57C \uD560 \uD53D\uC140\uC774 \uBE44\uAD50\uC801 \uC801\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uCF54\uB4DC\uC5D0\uC11C \uBD88\uD22C\uBA85\uD55C \uC601\uC5ED\uC744 \uBCF4\uACE0\uD558\uB824\uBA74 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), ` \uBA54\uC18C\uB4DC\uB97C \uC7AC\uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual Rect getSolidRect() const;
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uADF8\uB7EC\uBA74 QR \uCF54\uB4DC \uC704\uC82F\uC774 \uC644\uC804\uD788 \uBD88\uD22C\uBA85\uD574\uC9D1\uB2C8\uB2E4. \uACB0\uAD6D \uD751\uBC31 \uD53D\uC140\uC5D0 \uAC00\uB824\uC9C4 \uBD80\uBD84\uC740 \uC544\uBB34\uAC83\uB3C4 \uBCFC \uC218 \uC5C6\uAC8C \uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC774 \uBA54\uC18C\uB4DC\uAC00 \uC2E4\uC81C \uC704\uC82F \uD06C\uAE30\uB85C \uC9C1\uC0AC\uAC01\uD615\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual Rect getSolidRect() const
{
    return touchgfx::Rect(0, 0, getWidth(), getHeight());
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "example-source-code"
  }), `\uC18C\uC2A4 \uCF54\uB4DC \uC608\uC81C`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uACB0\uACFC\uC801\uC73C\uB85C \uC81C\uACF5\uB418\uB294 \uB370\uC774\uD130\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uC704\uC82F\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-screenshot.png",
    noShadow: true,
    mdxType: "Figure"
  }, "QR \uCF54\uB4DC \uC704\uC82F \uC2A4\uD06C\uB9B0\uC0F7"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC804\uCCB4 \uC704\uC82F \uCF54\uB4DC\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "gui/include/gui/common/QRCodeWidget.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `
#ifndef QR_CODE_WIDGET_HPP
#define QR_CODE_WIDGET_HPP

#include <touchgfx/widgets/Widget.hpp>

class QRCodeWidget : public touchgfx::Widget
{
public:
    QRCodeWidget();

    virtual void draw(const touchgfx::Rect& invalidatedArea) const;
    virtual touchgfx::Rect getSolidRect() const;

    void setQRCodeData(QRCodeData* data);
    void setScale(uint8_t s);

private:
    void updateSize();

    QRCodeData* data;
    uint8_t scale;
};
#endif
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uD5E4\uB354 \uD30C\uC77C\uC5D0\uC11C \uC704\uC82F\uC744 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Widget`), ` \uD074\uB798\uC2A4\uC758 \uD655\uC7A5\uC73C\uB85C \uC815\uC758\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), ` \uBA54\uC18C\uB4DC\uC640 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), ` \uBA54\uC18C\uB4DC\uB97C \uC7AC\uC815\uC758\uD558\uC5EC \uC704\uC82F\uC758 \uADF8\uB9AC\uAE30 \uBC29\uC2DD\uC744 \uC815\uC758\uD569\uB2C8\uB2E4. QR \uCF54\uB4DC\uC758 \uB370\uC774\uD130\uB97C \uC124\uC815\uD558\uB294 \uBA54\uC18C\uB4DC\uC640 QR \uCF54\uB4DC\uC758 \uC2A4\uCF00\uC77C\uB9C1 \uACC4\uC218\uB97C \uC124\uC815\uD558\uB294 \uBA54\uC18C\uB4DC\uB97C \uC120\uC5B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "gui/src/common/QRCodeWidget.cpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/QRCodeWidget.hpp>

QRCodeWidget::QRCodeWidget() :
    data(0),
    scale(1)
{
}

void QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const
{
    if (!data)
    {
        return;
    }

    touchgfx::Rect absolute = getAbsoluteRect();

    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();

    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)
    {
        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)
        {
            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] =
              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;
        }
    }

    touchgfx::HAL::getInstance()->unlockFrameBuffer();
}

touchgfx::Rect QRCodeWidget::getSolidRect() const
{
    return touchgfx::Rect(0, 0, getWidth(), getHeight());
}

void QRCodeWidget::setQRCodeData(QRCodeData* qrCode)
{
    data = qrCode;
    updateSize();
}

void QRCodeWidget::setScale(uint8_t s)
{
    scale = s;
    updateSize();
}

void QRCodeWidget::updateSize()
{
    if (data)
    {
        setWidth(data->getSize() * scale);
        setHeight(data->getSize() * scale);
    }
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC18C\uC2A4 \uD30C\uC77C\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), ` \uBA54\uC18C\uB4DC\uB97C \uC815\uC758\uD569\uB2C8\uB2E4. \uC774 \uBA54\uC18C\uB4DC\uB294 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC758 \uAC01 \uD53D\uC140\uC744 \uD655\uC778\uD55C \uD6C4 \uB370\uC774\uD130 \uAC1D\uCCB4\uC758 \uB0B4\uC6A9\uACFC \uC2A4\uCF00\uC77C\uB9C1 \uACC4\uC218\uC5D0 \uB530\uB77C \uD504\uB808\uC784\uBC84\uD37C\uC758 \uC0C9\uC0C1\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), ` \uBA54\uC18C\uB4DC\uB294 \uC704\uC82F\uC774 \uC644\uC804\uD788 \uBD88\uD22C\uBA85\uD55C \uAC83\uC73C\uB85C \uBCF4\uACE0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\uC704 \uC608\uC81C\uB97C \uBCF4\uBA74 ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "draw"), " \uBA54\uC18C\uB4DC\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC7A0\uADFC \uD6C4 \uB2E4\uC2DC \uC7A0\uAE08 \uD574\uC81C\uD588\uC2B5\uB2C8\uB2E4. \uC774\uC720\uB294 \uADF8\uB9AC\uAE30\uB97C \uC2DC\uC791\uD560 \uB54C DMA\uB97C \uC0AC\uC6A9\uD574 \uADF8\uB9AC\uAE30\uB97C \uB9C8\uCE58\uAE30 \uC704\uD574\uC11C\uC785\uB2C8\uB2E4."), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uCF54\uB4DC \uC5ED\uC2DC \uC791\uC740 \uD074\uB798\uC2A4/\uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD574 QR \uCF54\uB4DC \uB370\uC774\uD130\uC5D0 \uC561\uC138\uC2A4\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class QRCodeData
{
public:
    uint8_t getSize();
    bool at(uint8_t x, uint8_t y);
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)(FurtherReading/* default */.Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "/download/widgets/qr-code.zip",
    target: "_blank",
    mdxType: "Link"
  }, "QRCode"), " \uBC0F ", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "/download/widgets/lens.zip",
    target: "_blank",
    mdxType: "Link"
  }, "Lens"), " \uC704\uC82F\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC \uD655\uC778\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_Try, {
    mdxType: "Try"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "\uD770\uC0C9 \uD53D\uC140\uC774 \uC644\uC804\uD788 \uD22C\uBA85\uD574\uC9C8 \uB54C\uAE4C\uC9C0 QR \uCF54\uB4DC \uC704\uC82F\uC744 \uC218\uC815\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "\uC138\uD53C\uC544 \uD544\uD130, \uB9CC\uB378\uBE0C\uB85C \uD504\uB799\uD0C8, gif \uC774\uBBF8\uC9C0 \uB4F1\uC744 \uD45C\uC2DC\uD558\uB294 \uCEE4\uC2A4\uD140 \uC704\uC82F\uC744 \uC0DD\uC131\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0AC\uC6A9\uD560 \uB54C \uC5B4\uB5A4 \uC704\uC82F\uC744 \uAC00\uC7A5 \uC27D\uAC8C \uC0DD\uC131\uD560 \uC218 \uC788\uB294\uC9C0, \uADF8\uB9AC\uACE0 \uCEE4\uC2A4\uD140 \uC704\uC82F \uC811\uADFC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD560 \uB54C \uC5B4\uB5A4 \uC704\uC82F\uC744 \uAC00\uC7A5 \uC27D\uAC8C \uC0DD\uC131\uD560 \uC218 \uC788\uB294\uC9C0 \uACE0\uB824\uD558\uC2ED\uC2DC\uC624.")), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "modifying-standard-widgetscontainers"
  }), `\uD45C\uC900 \uC704\uC82F/\uCEE8\uD14C\uC774\uB108 \uC218\uC815\uD558\uAE30`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `TouchGFX\uB97C \uC124\uCE58\uD558\uBA74 \uD45C\uC900 \uC704\uC82F\uC758 \uC18C\uC2A4 \uCF54\uB4DC\uB3C4 \uD568\uAED8 \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC774\uB4E4 \uCF54\uB4DC\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC694\uAC74\uC5D0 \uB9DE\uAC8C \uC218\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uD45C\uC900 \uC704\uC82F\uACFC \uCEE8\uD14C\uC774\uB108\uC758 \uC18C\uC2A4 \uCF54\uB4DC\uB294 \uC544\uB798 \uD3F4\uB354\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uCF54\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uB294 \uD558\uC704 \uD638\uD658\uC131\uC744 \uC720\uC9C0\uD558\uAE30 \uC704\uD574 \uD45C\uC900\uACFC \uCEE8\uD14C\uC774\uB108\uC758 \uCEF4\uD30C\uC77C \uBC84\uC804\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC774\uB7EC\uD55C \uD30C\uC77C\uC744 \uCEF4\uD30C\uC77C\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "\uD45C\uC900 \uC704\uC82F/\uCEE8\uD14C\uC774\uB108\uB97C \uC9C1\uC811 \uC218\uC815\uD558\uB294 \uAC83\uC740 \uAD8C\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC18C\uC2A4 \uCF54\uB4DC\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uC544\uC774\uB514\uC5B4\uB97C \uC81C\uACF5\uD558\uB294 \uB3D9\uC2DC\uC5D0 TouchGFX \uC704\uC82F\uC758 \uB0B4\uBD80 \uC2E4\uD589 \uC54C\uC544\uBCF4\uB294 \uB370 \uBAA9\uC801\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uD45C\uC900 \uAD6C\uD604\uCCB4\uC640 \uB2E4\uB978 \uB3D9\uC791\uC744 \uC6D0\uD55C\uB2E4\uBA74 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uD558\uC704 \uBD84\uB958\uD558\uAC70\uB098 \uC0DD\uC131\uD558\uC5EC \uC6D0\uD558\uB294 \uB3D9\uC791\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uC73C\uBA70, \uC774 \uC5ED\uC2DC \uAD8C\uC7A5\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774\uB7EC\uD55C \uBC29\uC2DD\uC744 \uAD8C\uC7A5\uD558\uB294 \uC774\uC720\uB294 \uB450 \uAC00\uC9C0\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\uCCAB\uC9F8, \uC0AC\uC6A9\uC790 \uBCC0\uACBD \uC0AC\uD56D\uC740 \uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uBCD1\uD569\uD574\uC57C \uD558\uBBC0\uB85C \uCD5C\uC2E0 TouchGFX \uBC84\uC804\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uAE30\uAC00 \uB354\uC6B1 \uC5B4\uB824\uC6CC\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `\uB458\uC9F8, \uD2B9\uC815 \uB3D9\uC791\uC5D0 \uB530\uB77C \uD45C\uC900 \uC704\uC82F\uACFC \uCEE8\uD14C\uC774\uB108\uAC00 \uC798\uBABB\uB420 \uC704\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uB530\uB77C\uC11C \uD45C\uC900 \uC704\uC82F/\uCEE8\uD14C\uC774\uB108\uB97C \uC218\uC815\uD574\uC57C \uD55C\uB2E4\uBA74 \uC18C\uC2A4 \uCF54\uB4DC\uB97C \uC9C1\uC811 \uBCC0\uACBD\uD558\uC9C0 \uB9D0\uACE0 \uBA3C\uC800 \uBCF5\uC0AC\uD558\uC5EC \uC774\uB984\uC744 \uBCC0\uACBD\uD55C \uD6C4 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uADF8\uB807\uAE30\uB294 \uD574\uB3C4 \uC633\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uC791\uC5C5\uC774\uBA74 \uBB34\uC5C7\uC774\uB4E0 \uC790\uC720\uB86D\uAC8C \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD45C\uC900 \uC704\uC82F\uC758 \uC18C\uC2A4 \uCF54\uB4DC\uB97C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD558\uBA74 \uB9C1\uCEE4\uAC00 \uCF54\uC5B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0 \uC788\uB294 \uBC84\uC804\uC774 \uC544\uB2CC \uC774 \uBC84\uC804\uC744 \uC120\uD0DD\uD558\uAC8C \uB429\uB2C8\uB2E4. \uACB0\uACFC\uC801\uC73C\uB85C \uC18C\uC2A4 \uCF54\uB4DC\uB97C \uCEF4\uD30C\uC77C \uBC84\uC804\uC5D0 \uCD94\uAC00\uD558\uC5EC \uD45C\uC900 \uC704\uC82F\uC744 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);