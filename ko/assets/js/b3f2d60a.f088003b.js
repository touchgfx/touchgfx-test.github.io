"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9921],{

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

/***/ 6771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Video extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "videoWrapper"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
      controls: true
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
      src: this.props.url,
      type: "video/mp4"
    }))));
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Video);


/***/ }),

/***/ 36600:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6771);
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
  id: "achieving-better-performance-with-cacheable-container",
  title: "\uCE90\uC2DC(Cacheable) \uCEE8\uD14C\uC774\uB108\uB97C \uD1B5\uD55C \uC131\uB2A5 \uAC1C\uC120"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "id": "development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "title": "\uCE90\uC2DC(Cacheable) \uCEE8\uD14C\uC774\uB108\uB97C \uD1B5\uD55C \uC131\uB2A5 \uAC1C\uC120",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",
  "sourceDirName": "development/ui-development/scenarios",
  "slug": "/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "permalink": "/4.20/ko/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "achieving-better-performance-with-cacheable-container",
    "title": "\uCE90\uC2DC(Cacheable) \uCEE8\uD14C\uC774\uB108\uB97C \uD1B5\uD55C \uC131\uB2A5 \uAC1C\uC120"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Scenarios",
    "permalink": "/4.20/ko/docs/category/scenarios-1"
  },
  "next": {
    "title": "\uB7F0\uD0C0\uC784\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uB85C\uB4DC",
    "permalink": "/4.20/ko/docs/development/ui-development/scenarios/loading-images-at-runtime"
  }
};
const assets = {};





const toc = [{
  value: "\uC131\uB2A5\uC5D0 \uBBF8\uCE58\uB294 \uC601\uD5A5",
  id: "performance-impact",
  level: 2
}, {
  value: "\uD14C\uC2A4\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158",
  id: "test-application",
  level: 2
}, {
  value: "\uBCF5\uC7A1\uD55C \uCEE8\uD14C\uC774\uB108\uB97C \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uD558\uB294 \uC131\uB2A5",
  id: "performance-of-redrawing-complex-containers",
  level: 2
}, {
  value: "\uCE90\uC2F1\uC744 \uD1B5\uD55C \uC131\uB2A5 \uAC1C\uC120",
  id: "improving-performance-through-caching",
  level: 2
}, {
  value: "\uACB0\uB860",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC77C\uBD80 \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C RAM\uC744 \uC0AC\uC6A9\uD574 \uC7AC\uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD55C \uC774\uBBF8\uC9C0\uB97C \uC800\uC7A5\uD558\uC5EC \uC131\uB2A5\uC744 \uAC1C\uC120\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158(Image, TextArea \uB4F1)\uC5D0\uC11C \uB4DC\uB798\uADF8\uB098 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uD1B5\uD574 \uC704\uC82F \uC704\uCE58\uB97C \uC870\uC815\uD560 \uACBD\uC6B0 TouchGFX\uAC00 \uBAA8\uB4E0 \uD504\uB808\uC784\uB9C8\uB2E4 \uC0C8\uB85C\uC6B4 \uC704\uCE58\uC5D0\uC11C \uD574\uB2F9 \uC704\uC82F\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD574\uC57C \uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C, \uC870\uC815 \uC774\uC804\uC5D0 \uBC30\uACBD\uC5D0\uC11C \uC704\uC82F\uC73C\uB85C \uAC00\uB824\uC84C\uB358 \uBD80\uBD84\uAE4C\uC9C0 \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Texture Mapper \uC704\uC82F\uACFC Shapes, \uADF8\uB9AC\uACE0 \uD22C\uBA85\uD558\uACE0 \uD070 \uC774\uBBF8\uC9C0\uAE4C\uC9C0 \uC774\uB7EC\uD55C \uC704\uC82F\uB4E4\uC740 \uACC4\uC0B0\uC774 \uBCF5\uC7A1\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC5C6\uC774 \uB80C\uB354\uB9C1\uB418\uAE30 \uB54C\uBB38\uC5D0 MCU\uC5D0\uC11C \uD6A8\uC728\uC801\uC73C\uB85C \uB80C\uB354\uB9C1\uD558\uAE30\uAC00 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uACB0\uACFC\uC801\uC73C\uB85C \uC2A4\uD06C\uB9B0\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD558\uB290\uB77C \uC2DC\uAC04(\uC218 \uBC00\uB9AC\uCD08)\uC774 \uAC78\uB9AC\uBA70 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC131\uB2A5\uC5D0\uB3C4 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uBE44\uC6A9\uC774 \uB9CE\uC774 \uB4DC\uB294 \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uC9C0 \uC54A\uACE0, \uCE90\uC2DC\uC5B4\uBE14 \uCEE8\uD14C\uC774\uB108\uB97C \uC0AC\uC6A9\uD574 \uACC4\uC0B0\uC774 \uBCF5\uC7A1\uD55C \uC694\uC18C\uAC00 \uD3EC\uD568\uB41C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uAC00\uC18D\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.  \uC774 \uAE00\uC5D0\uC11C \uCE21\uC815\uC740 STM32F429Discovery \uBCF4\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uC774\uB8E8\uC5B4\uC9C0\uC9C0\uB9CC \uCE90\uC2DC \uCEE8\uD14C\uC774\uB108 \uAE30\uBC95\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uB2E4\uB978 \uD558\uB4DC\uC6E8\uC5B4 \uD50C\uB7AB\uD3FC\uC5D0\uB3C4 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0 \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uC0DD\uC131\uD558\uB824\uBA74 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C RAM\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\uB3D9\uC801 \uBE44\uD2B8\uB9F5"), "\uC5D0 \uAD00\uD55C \uB0B4\uC6A9\uB3C4 \uC77D\uC5B4\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance-impact"
  }), `\uC131\uB2A5\uC5D0 \uBBF8\uCE58\uB294 \uC601\uD5A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\uB97C \uC0AC\uC6A9\uD574 \uACC4\uC0B0\uC774 \uBCF5\uC7A1\uD55C \uC704\uC82F\uC758 \uC704\uCE58\uB97C \uBCC0\uACBD\uD558\uBA74 \uC131\uB2A5\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uBBC0\uB85C \uC5EC\uB7EC \uB2E8\uACC4\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uC560\uB2C8\uBA54\uC774\uC158\uC740 \uAC01 \uD504\uB808\uC784\uB9C8\uB2E4 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uC624\uB798 \uAC78\uB824 \uC18D\uB3C4\uAC00 \uB290\uB824\uC9C0\uAC8C \uB429\uB2C8\uB2E4. \uADF8\uB807\uB2E4\uACE0 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC2DC\uAC04\uC801\uC73C\uB85C \uB354 \uBE68\uB9AC \uB05D\uB098\uB3C4\uB85D \uD504\uB85C\uADF8\uB798\uBC0D\uD558\uAC8C \uB418\uBA74 \uAC01 \uB2E8\uACC4\uC758 \uD06C\uAE30\uAC00 \uCEE4\uC838\uC11C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uBD80\uB4DC\uB7FD\uAC8C \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 STM32F429-DISCO \uBCF4\uB4DC(240x320)\uC5D0\uC11C \uC2E4\uD589\uD558\uB294 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uC804\uCCB4 \uD654\uBA74 \uCEE8\uD14C\uC774\uB108\uB294 \uC218\uC9C1 \uBC29\uD5A5\uC73C\uB85C \uC6C0\uC9C1\uC774\uB294 \uBC18\uBA74 \uC720\uC0AC\uD55C \uCEE8\uD14C\uC774\uB108\uB294 \uD558\uB2E8\uC5D0\uC11C \uC6C0\uC9C1\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uB3D9\uC601\uC0C1\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/toggle-button"
  }), `ToggleButton`), `\uC774 \uCE90\uC2DC \uCEE8\uD14C\uC774\uB108\uB97C \uD65C\uC131\uD654\uC640 \uBE44\uD65C\uC131\uD654 \uC0AC\uC774\uC5D0\uC11C \uC804\uD658\uD569\uB2C8\uB2E4. \uC774\uB54C \uD655\uC5F0\uD55C \uC131\uB2A5 \uCC28\uC774\uB97C \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Video__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    url: "http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",
    mdxType: "Video"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC6C0\uC9C1\uC774\uB294 \uB450 \uCEE8\uD14C\uC774\uB108\uB294 \uAC01\uAC01 \uBC30\uACBD `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), `, a `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/text-area"
  }), `TextArea`), `, and a `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/images/texture-mapper"
  }), `Texture Mapper`), `\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uD788 Texture Mapper\uB294 \uC774\uC911 \uC120\uD615 \uB80C\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC804\uC5ED \uC54C\uD30C \uAC12\uC73C\uB85C 174\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uAD6C\uC131\uB418\uC5B4 \uC788\uC5B4 \uADF8\uB9AC\uAE30\uB97C \uC704\uD574 \uB9CE\uC740 \uC791\uC5C5\uB7C9\uC744 \uD544\uC694\uB85C \uD569\uB2C8\uB2E4.  STM32F429-DISCO \uBCF4\uB4DC\uC5D0\uC11C \uC804\uCCB4 \uD654\uBA74\uC77C \uB54C \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC740 \uC57D 100ms\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "test-application"
  }), `\uD14C\uC2A4\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC11C\uB85C \uAD00\uB828\uC774 \uC788\uB294 \uB450 \uC694\uC18C\uB97C \uC774\uB3D9\uC2DC\uD0A4\uAE30 \uC704\uD574 \uB450 \uC694\uC18C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\uB77C\uB294 \uC0C1\uC704 \uCEE8\uD14C\uC774\uB108\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uC0C1\uC704 \uCEE8\uD14C\uC774\uB108\uC758 \uC138\uB85C \uAE38\uC774\uB294 \uAC01 \uD558\uC704 \uCEE8\uD14C\uC774\uB108\uC758 2\uBC30\uAC00 \uB418\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `240 x 640 (2*320)`), `\uC774 \uB429\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C \uCEE8\uD14C\uC774\uB108\uB97C \uC704\uCE58 \uBCC0\uACBD \uC560\uB2C8\uBA54\uC774\uD130\uB85C \uC120\uC5B8\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD2F1(application ticks)\uC744 \uC218\uC2E0\uD558\uC5EC \uC131\uB2A5\uC744 \uCE21\uC815\uD558\uB294 \uB3D9\uC548 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview-4.17.png",
    mdxType: "Figure"
  }, "\uCE90\uC2DC(Cacheable) \uCEE8\uD14C\uC774\uB108 \uD14C\uC2A4\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uC694"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\uC774\uB77C\uB294 \uC774\uB984\uC758 \uC0C1\uBD80 \uCEE8\uD14C\uC774\uB108\uB294 x=0, y=0 \uC704\uCE58\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\uB77C\uB294 \uC774\uB984\uC758 \uD558\uBD80 \uCEE8\uD14C\uC774\uB108\uB294 \uC0C1\uC704 \uCEE8\uD14C\uC774\uB108\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\uC5D0\uC11C container1 \uBC14\uB85C \uC544\uB798 x=0, y=320 \uC704\uCE58\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\uC5D0 \uBC30\uCE58\uB418\uBBC0\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\uC758 \uC704\uCE58\uB97C \uBCC0\uACBD\uD558\uBA74 \uB450 \uC694\uC18C\uC758 \uC704\uCE58\uB3C4 \uBC14\uB00C\uAC8C \uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\uC758 \uC704\uCE58\uB97C x=0, y=-320\uC73C\uB85C \uBCC0\uACBD\uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\uC740 \uBCF4\uC774\uC9C0 \uC54A\uC9C0\uB9CC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\uB294 \uC644\uC804\uD788 \uBCF4\uC774\uAC8C \uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB450 \uC0C1\uD0DC \uC0AC\uC774\uC5D0\uC11C\uB3C4 TouchGFX Designer\uC758 \uC0C1\uD638\uC791\uC6A9 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uCF54\uB4DC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\uAC00 \uC544\uB798\uB85C \uB0B4\uB824\uAC04 \uACBD\uC6B0 \uC704\uB85C, \uADF8\uB9AC\uACE0 \uC704\uB85C \uC62C\uB77C\uAC04 \uACBD\uC6B0 \uC544\uB798\uB85C \uC704\uCE58\uB97C \uBCC0\uACBD\uD569\uB2C8\uB2E4. \uC774\uD574\uB97C \uB3D5\uAE30 \uC704\uD574 \uCF54\uB4DC\uB97C \uBDF0\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleClickEvent`), ` \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uC5D0 \uC0BD\uC785\uD588\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC0AC\uC6A9\uC790\uAC00 \uD654\uBA74 \uC5B4\uB290 \uACF3\uC744(ToggleButton \uC544\uB798) \uD130\uCE58\uD558\uB354\uB77C\uB3C4 \uCF54\uB4DC\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9-12}",
    "{9-12}": true
  }), `void Screen1View::handleClickEvent(const ClickEvent& evt)
{
    //Forward event to base View (for the ToggleButton to work)
    View::handleClickEvent(evt);
    //If touch is released and y > 50 (below the ToggleButton), move masterContainer
    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)
    {
        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;
        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,
                            20 /* ticks */,
                            EasingEquations::cubicEaseInOut,
                            EasingEquations::cubicEaseInOut);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "performance-of-redrawing-complex-containers"
  }), `\uBCF5\uC7A1\uD55C \uCEE8\uD14C\uC774\uB108\uB97C \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uD558\uB294 \uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC11C \uC5B8\uAE09\uD588\uB4EF\uC774, MCU\uAC00 \uAC01 \uC560\uB2C8\uBA54\uC774\uC158 \uB2E8\uACC4\uB9C8\uB2E4 \uBCF5\uC7A1\uD558\uACE0 \uC2DC\uAC04\uB3C4 \uC624\uB798 \uAC78\uB9AC\uB294 Texture Mapper\uB97C \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD574\uC57C \uD55C\uB2E4\uBA74 \uD55C \uD504\uB808\uC784\uB9C8\uB2E4 \uC18C\uC694\uB418\uB294 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC740 \uC57D 100ms\uAC00 \uB429\uB2C8\uB2E4. \uACB0\uAD6D \uCD08\uB2F9 10 \uD504\uB808\uC784(fps)\uC758 \uADF8\uB9AC\uAE30 \uD574\uC57C \uD558\uB294 \uC148\uC785\uB2C8\uB2E4. \uC804\uCCB4 \uC560\uB2C8\uBA54\uC774\uC158\uC774 20\uD504\uB808\uC784\uC774\uBBC0\uB85C \uC57D 2\uCD08\uAC00 \uAC78\uB9BD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32F429-DISCO \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C\uB294 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 GPIO G14\uB97C \uD1B5\uD574 \uB514\uC9C0\uD138 \uC2E0\uD638\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. VSYNC \uC2E0\uD638\uB294 G13\uC744 \uD1B5\uD574 \uC81C\uACF5\uB429\uB2C8\uB2E4. GPIO \uAD6C\uC131\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `GPIO.cpp`), ` \uD30C\uC77C\uC5D0\uC11C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `masterContainer`), `\uB97C \uC704\uB85C \uC62C\uB838\uC744 \uB54C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 VSYNC\uC640 RENDER_TIME\uC744 \uCE21\uC815\uD558\uB294 \uC774\uBBF8\uC9C0\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.png",
    mdxType: "Figure"
  }, "Saleae Logic \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC758 vsync \uBC0F \uB80C\uB354\uB9C1 \uC2DC\uAC04 \uCE21\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCCAB \uBC88\uC9F8 \uC2E0\uD638\uB294 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC785\uB2C8\uB2E4(active low). \uC704\uCE58 \uBCC0\uACBD \uC560\uB2C8\uBA54\uC774\uC158\uC5D0\uC11C \uCCAB \uBC88\uC9F8 \uD504\uB808\uC784\uC758 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 99.29ms\uC778 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uC2E0\uD638\uB294 VSYNC\uC785\uB2C8\uB2E4. \uC774 \uC2E0\uD638\uB294 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uD53D\uC140\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uD074\uB7ED \uC544\uC6C3\uB420 \uB54C high\uC5D0\uC11C low\uB85C \uC804\uD658\uB429\uB2C8\uB2E4. \uC704 \uCE21\uC815\uC5D0\uC11C \uB2E8\uC77C \uD504\uB808\uC784\uC758 \uADF8\uB9AC\uAE30\uB97C \uC218\uD589 \uD558\uB824\uBA74 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C 7 \uD504\uB808\uC784\uB9CC\uD07C\uC758 \uC2DC\uAC04\uC774 \uAC78\uB9B0\uB2E4\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uD504\uB808\uC784 \uB80C\uB354\uB9C1\uC774 8\uBC88\uC9F8 VSYNC \uC2E0\uD638\uC5D0\uC11C \uC2DC\uC791\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB80C\uB354\uB9C1 \uACFC\uC815\uC5D0\uC11C (\uB2E4\uB978 \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C) \uC774\uC804\uC5D0 \uADF8\uB9AC\uAE30\uAC00 \uC644\uB8CC\uB41C \uD504\uB808\uC784\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uBC18\uBCF5\uC801\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "improving-performance-through-caching"
  }), `\uCE90\uC2F1\uC744 \uD1B5\uD55C \uC131\uB2A5 \uAC1C\uC120`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE8\uD14C\uC774\uB108 \uB79C\uB354\uB9C1\uC744 \uBA54\uBAA8\uB9AC\uC5D0 \uCE90\uC2F1\uD558\uBA74 \uC704\uC758 \uC704\uCE58 \uBCC0\uACBD \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uC131\uB2A5\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 MCU\uB97C \uC0AC\uC6A9\uD574 \uBCF5\uC7A1\uD55C \uC704\uC82F\uC758 \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD560 \uD544\uC694 \uC5C6\uC774(DMA\uB97C \uC0AC\uC6A9\uD574) \uD574\uB2F9 \uBA54\uBAA8\uB9AC\uC5D0 \uC800\uC7A5\uB41C \uD53D\uC140\uC744 \uD504\uB808\uC784\uBC84\uD37C\uB85C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. MCU\uB9CC \uC0AC\uC6A9\uD574\uB3C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uCD08\uB2F9 60 \uD504\uB808\uC784\uC744 \uC5BB\uC744 \uC218 \uC788\uC9C0\uB9CC \uB354 \uC911\uC694\uD55C \uC791\uC5C5\uC744 \uC218\uD589\uD558\uC9C0 \uC54A\uACE0 \uB3D9\uC77C\uD55C \uACC4\uC0B0\uC744 \uBC18\uBCF5\uD560 \uACBD\uC6B0 \uC5F0\uC0B0 \uC791\uC5C5\uC774 \uB9CE\uC544\uC838 \uBD80\uD558\uAC00 \uC99D\uAC00\uD558\uAC8C \uB429\uB2C8\uB2E4(MCU \uBD80\uD558\uAC00 100%\uC5D0 \uC774\uB97C \uC218 \uC788\uC74C).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C\uB294 \uCEE8\uD14C\uC774\uB108\uB97C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uD560 \uD544\uC694 \uC5C6\uC774 \uCEE8\uD14C\uC774\uB108\uC758 "in-memory-image"\uB97C \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uB2E4\uC591\uD55C \uC704\uCE58\uC5D0 \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 TouchGFX Designer\uC5D0\uC11C \uB450 \uCEE8\uD14C\uC774\uB108\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Cacheable`), ` \uC18D\uC131\uC744 \uC120\uD0DD\uD558\uC5EC \uCE90\uC2F1\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer-4.17.png",
    mdxType: "Figure"
  }, "Container \uC704\uC82F\uC758 Cacheable Container \uC635\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C RAM\uC5D0\uC11C \uB450 \uCEE8\uD14C\uC774\uB108\uB97C \uCE90\uC2F1\uD560 2\uAC1C\uC758 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uAC00 \uC800\uC7A5\uB418\uB294 RAM\uC758 \uC8FC\uC18C\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uC5D0\uC11C\uB294 \uD504\uB808\uC784\uBC84\uD37C \uBC14\uB85C \uB4A4\uC5D0 \uC788\uB294 SDRAM(STM32F429\uC5D0\uC11C 0xd0000000 \uC8FC\uC18C\uB85C \uC2DC\uC791)\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Windows \uC2DC\uBBAC\uB808\uC774\uD130\uC758 \uACBD\uC6B0\uC5D0\uB294 \uCE90\uC2DC\uAC00 \uC804\uC5ED \uBCC0\uC218\uB85C \uD560\uB2F9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
    uint32_t sdramBuffer[8*1024*1024/4];
    uint16_t* sdram = (uint16_t*)sdramBuffer;
#else
    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uB97C \uCD08\uAE30\uD654\uD55C \uD6C4 \uCE90\uC2F1\uC5D0 \uD544\uC694\uD55C 2\uAC1C\uC758 \uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2}",
    "{2-2}": true
  }), `//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb
Bitmap::setCache(sdram, 320*1024, 2); //320Kb cache
dynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);
dynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB3D9\uC801 \uBE44\uD2B8\uB9F5\uC744 \uCEE8\uD14C\uC774\uB108\uC5D0 \uD560\uB2F9\uD55C \uD6C4 \uCE90\uC2F1 \uBAA8\uB4DC\uB85C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `//Assign the bitmaps to the Cacheable Containers
container1.setCacheBitmap(dynamicBitmap1);
container2.setCacheBitmap(dynamicBitmap2);

//Enable caching
container1.enableCachedMode(true);
container2.enableCachedMode(true);

//Finally update the cached bitmaps
container1.updateCache();
container2.updateCache();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Container::updateCache()`), `\uB97C \uD638\uCD9C\uD558\uBA74 \uCEE8\uD14C\uC774\uB108 2\uAC1C\uAC00 \uAC01 \uBE44\uD2B8\uB9F5\uC73C\uB85C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uC774\uC81C \uCEE8\uD14C\uC774\uB108\uB97C \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD560 \uB54C\uB9C8\uB2E4 \uC774 \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. \uB2E8, \uAC1C\uBC1C\uC790\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC5D0\uC11C \uCC98\uB9AC\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container1`), `\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `container2`), `\uC5D0\uC11C \uCE90\uC2F1\uC744 \uD65C\uC131\uD654\uD55C \uD6C4 \uC131\uB2A5\uC744 \uCE21\uC815\uD558\uBA74 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 99ms\uC5D0\uC11C 5ms\uB85C 20\uBC30\uAE4C\uC9C0 \uAC1C\uC120\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCD08\uB2F9 60 \uD504\uB808\uC784\uC73C\uB85C \uC190\uC27D\uAC8C \uB80C\uB354\uB9C1\uD558\uC5EC \uC804\uCCB4 \uC560\uB2C8\uBA54\uC774\uC158\uC744 20 \uD504\uB808\uC784 \uB0B4\uC5D0 \uC644\uB8CC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.png",
    mdxType: "Figure"
  }, "Saleae Logic \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC758 vsync \uBC0F \uB80C\uB354\uB9C1 \uC2DC\uAC04 \uCE21\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "conclusion"
  }), `\uACB0\uB860`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD53C\uC0AC\uCCB4 \uACC4\uC0B0\uC774 \uBCF5\uC7A1\uD558\uC5EC \uC560\uB2C8\uBA54\uC774\uC158 \uB2E8\uACC4\uB9C8\uB2E4 \uBCC0\uACBD\uC774 \uC5B4\uB824\uC6B4 \uACBD\uC6B0\uC5D0 \uCE90\uC2DC \uCEE8\uD14C\uC774\uB108\uB97C DynamicBitmap\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD558\uC5EC \uC560\uB2C8\uBA54\uC774\uC158(\uC7A6\uC740 \uC704\uCE58 \uBCC0\uACBD) \uCC98\uB9AC\uD558\uBA74 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uD06C\uAC8C \uB2E8\uCD95\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCE90\uC2DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB3C4(\uC2DC\uAC04 \uC5C5\uB370\uC774\uD2B8 \uC2DC \uC2DC\uACC4\uC758 \uC22B\uC790\uD310 \uB4F1) \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC81C\uC5B4\uD558\uB294 \uC77C\uC815 \uC2DC\uC810\uC5D0 \uCE90\uC2DC\uC758 \uB0B4\uC6A9\uC744 \uB2E4\uC2DC \uACC4\uC0B0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/dynamic-bitmaps",
    mdxType: "Link"
  }, "\uB3D9\uC801 \uBE44\uD2B8\uB9F5")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "loading-images-at-runtime",
    mdxType: "Link"
  }, "\uB3D9\uC801 \uBE44\uD2B8\uB9F5: \uB7F0\uD0C0\uC784 \uC2DC \uC774\uBBF8\uC9C0 \uB85C\uB4DC"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);