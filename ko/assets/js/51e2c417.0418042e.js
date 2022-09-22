"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4993],{

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

/***/ 45135:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class YouTube extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const id = GetIdFromUrl(this.props.url);
    var embedUrl = `https://www.youtube.com/embed/${id}`;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "videoWrapper"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
      src: embedUrl,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }));
  }
}
function GetIdFromUrl(url) {
  const regex1 = /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;
  if (regex1.test(url)) {
    return regex1.exec(url)[1];
  }
  const regex2 = /https:\/\/youtu\.be\/(\w+)/;
  if (regex2.test(url)) {
    return regex2.exec(url)[1];
  }
  return url;
}
/* harmony default export */ __webpack_exports__["Z"] = (YouTube);


/***/ }),

/***/ 62794:
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
/* harmony import */ var _site_components_YouTube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45135);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44035);
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
  id: "custom-containers",
  title: "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-containers",
  "id": "development/ui-development/touchgfx-engine-features/custom-containers",
  "title": "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-containers.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-containers",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/custom-containers",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-containers",
    "title": "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Position and size",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/position-size"
  },
  "next": {
    "title": "\uBE44\uD2B8\uB9F5 \uCE90\uC2F1",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  }
};
const assets = {};





const toc = [{
  value: "TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uD558\uC5EC \uC0AC\uC6A9\uD560 \uACBD\uC6B0",
  id: "in-touchgfx-designer",
  level: 2
}, {
  value: "\uBCF5\uD569 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108",
  id: "composite-custom-containers",
  level: 3
}, {
  value: "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158",
  id: "custom-triggers-and-actions",
  level: 3
}, {
  value: "\uCF54\uB4DC\uB85C \uC0DD\uC131\uD560 \uACBD\uC6B0",
  id: "in-code",
  level: 2
}, {
  value: "touchgfx::Container \xA0\uD074\uB798\uC2A4\uB97C \uD655\uC7A5\uD558\uB294 \uD074\uB798\uC2A4 \uC0DD\uC131",
  id: "create-a-class-that-extends-the-touchgfxcontainer-class",
  level: 3
}, {
  value: "\uCEE8\uD14C\uC774\uB108\uC758 \uD558\uC704 \uC704\uC82F\uC744 \uBAA8\uB450 \uBA64\uBC84 \uBC88\uC218\uB85C \uC120\uC5B8",
  id: "declaring-all-children-of-the-container-as-member-variables",
  level: 3
}, {
  value: "\uCEE8\uD14C\uC774\uB108\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C \uAE38\uC774 \uC124\uC815",
  id: "setting-the-width-and-height-of-the-container",
  level: 3
}, {
  value: "\uAC01 \uD558\uC704 \uC704\uC82F \uC124\uC815",
  id: "setting-up-each-of-the-children",
  level: 3
}, {
  value: "\uAC01 \uD558\uC704 \uC704\uC82F\uC744 \uC62C\uBC14\uB978 \uC21C\uC11C\uB300\uB85C \uACC4\uCE35\uC5D0 \uCD94\uAC00",
  id: "adding-each-of-the-children-to-the-hierarchy-in-the-right-order",
  level: 3
}, {
  value: "\uBA54\uC18C\uB4DC\uC640 \uCF5C\uBC31\uC744 \uD1B5\uD574 \uC6D0\uD558\uB294 \uB3D9\uC791 \uAD6C\uD604",
  id: "implementing-the-desired-behaviour-via-methods-and-callbacks",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD560 \uB54C TouchGFX\uC758 \uD45C\uC900 \uC704\uC82F \uC138\uD2B8\uC5D0 \uC5C6\uB294 \uC704\uC82F\uC774 \uD544\uC694\uD560 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC704\uC82F\uC744 \uC0DD\uC131\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uBC14\uB85C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC785\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB780 \uB2E4\uB978 \uAE30\uC874 \uC704\uC82F\uB4E4\uC744 \uD3EC\uD568\uD558\uBA70 \uC774\uB4E4 \uC704\uC82F\uC758 \uC2DC\uAC01\uC801 \uD615\uD0DC\uC640 \uB3D9\uC791\uC744 \uBAA8\uC544 \uB193\uC740 \uAC1D\uCCB4\uB97C \uB9D0\uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC778 \uBCF5\uD569 \uB514\uC790\uC778 \uD328\uD134\uACFC\uB294 \uB2E4\uB974\uC9C0\uB9CC \uC5EC\uAE30\uC5D0 \uD3EC\uD568\uB41C \uC704\uC82F\uC744 \uCEE8\uD14C\uC774\uB108\uC758 \uD558\uC704 \uC704\uC82F\uC774\uB77C\uACE0\uB3C4 \uBD80\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uADF8\uB9AC\uAE30 \uC131\uB2A5\uC774 \uB9E4\uC6B0 \uB192\uC2B5\uB2C8\uB2E4. TouchGFX\uC758 \uAE30\uBCF8\uC801\uC778 \uADF8\uB9AC\uAE30 \uBA54\uCEE4\uB2C8\uC998\uC744 \uC774\uC6A9\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uCEE8\uD14C\uC774\uB108\uC640 \uD558\uC704 \uC704\uC82F\uC5D0\uC11C \uC5B4\uB5A4 \uBD80\uBD84\uC744 \uB2E4\uC2DC \uADF8\uB824\uC57C \uD560\uC9C0\uB97C \uC790\uB3D9\uC73C\uB85C \uACB0\uC815\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCEE8\uD14C\uC774\uB108\uB97C \uC0AC\uC6A9\uD560 \uB54C \uADF8\uB9AC\uAE30 \uC131\uB2A5\uC5D0 \uB300\uD574 \uAC71\uC815\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uC704\uC82F\uC758 \uACF5\uAC04\uC744 \uC904\uC5EC\uC57C \uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uB294\uB370, \uC774\uB7EC\uD55C \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-widgets"
  }), `\uCEE4\uC2A4\uD140 \uC704\uC82F`), `\uC774\uB77C\uACE0 \uD558\uB294 \uACE0\uAE09 \uC811\uADFC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uD558\uC5EC \uC0AC\uC6A9\uD560 \uACBD\uC6B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD574 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC544\uB798 \uB3D9\uC601\uC0C1\uC5D0\uC11C \uC885\uD569\uC801\uC73C\uB85C \uC18C\uAC1C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_YouTube__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    url: "https://youtu.be/nX1nCAA4pyA",
    mdxType: "YouTube"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "composite-custom-containers"
  }), `\uBCF5\uD569 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uB978 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB85C \uAD6C\uC131\uB41C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uB354\uC6B1 \uC791\uC740 \uAD6C\uC131\uC694\uC18C\uB4E4\uC744 \uBAA8\uC544 \uAD6C\uC131\uC694\uC18C\uB97C \uC0DD\uC131\uD55C\uB2E4\uB294 \uC810\uC5D0\uC11C \uAC15\uB825\uD55C \uBC29\uBC95\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0DD\uC131 \uBC29\uBC95\uC740 \uC704\uC82F \uBA54\uB274\uC5D0\uC11C \uC774\uBBF8 \uC815\uC758\uB418\uC5B4 \uC788\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 \uC778\uC2A4\uD134\uC2A4\uB97C \uCD94\uAC00\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-containers/composite-custom-containers-4.17.png",
    mdxType: "Figure"
  }, "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4 \uC0BD\uC785\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uB97C \uC815\uC758 \uC790\uCCB4\uC5D0 \uCD94\uAC00\uD558\uB294 \uB4F1 \uC21C\uD658 \uCC38\uC870\uB97C \uC77C\uC73C\uD0A4\uB294 \uC778\uC2A4\uD134\uC2A4\uC758 \uC0BD\uC785\uC744 \uBC29\uC9C0\uD558\uB294 \uB370 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-containers/circular-reference-4.17.png",
    mdxType: "Figure"
  }, "\uC778\uC2A4\uD134\uC2A4 \uC0BD\uC785\uC744 \uBE44\uD65C\uC131\uD654\uB294 \uC7A0\uC7AC\uC801 \uC21C\uD658 \uCC38\uC870"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "custom-triggers-and-actions"
  }), `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uAC15\uB825\uD55C \uC694\uC18C \uC911 \uD558\uB098\uB294 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70(\uCF5C\uBC31)\uC640 \uCEE4\uC2A4\uD140 \uC561\uC158(\uBA54\uC18C\uB4DC)\uC744 \uC815\uC758\uD560 \uC218 \uC788\uB2E4\uB294 \uC810\uC785\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uAC8C \uC5C6\uC5B4\uC11C\uB294 \uC548 \uB420 \uB3D9\uC791\uC744 \uC815\uC758\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB2E8\uC21C\uD788 \uC7AC\uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD55C \uC704\uC82F \uBAA8\uC74C\uC5D0 \uADF8\uCE58\uC9C0 \uC54A\uACE0 \uB098\uBA38\uC9C0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC\uB3C4 \uD1B5\uC2E0\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC774 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "custom-triggers-and-actions",
    mdxType: "Link"
  }, "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158"), " \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "in-code"
  }), `\uCF54\uB4DC\uB85C \uC0DD\uC131\uD560 \uACBD\uC6B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.  \uC808\uCC28\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `touchgfx::Container \xA0\uD074\uB798\uC2A4\uB97C \uD655\uC7A5\uD558\uB294 \uD074\uB798\uC2A4 \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE8\uD14C\uC774\uB108\uC758 \uD558\uC704 \uC704\uC82F\uC744 \uBAA8\uB450 \uBA64\uBC84 \uBC88\uC218\uB85C \uC120\uC5B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCEE8\uD14C\uC774\uB108\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C \uAE38\uC774 \uC124\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAC01 \uD558\uC704 \uC704\uC82F \uC124\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uAC01 \uD558\uC704 \uC704\uC82F\uC744 \uC62C\uBC14\uB978 \uC21C\uC11C\uB300\uB85C \uACC4\uCE35\uC5D0 \uCD94\uAC00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBA54\uC18C\uB4DC\uC640 \uCF5C\uBC31\uC744 \uD1B5\uD574 \uC6D0\uD558\uB294 \uB3D9\uC791 \uAD6C\uD604`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC5D0\uC11C\uB294 \uCC98\uC74C\uBD80\uD130 \uC2DC\uC791\uD574 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uC5EC \uB2E8\uC21C\uD558\uC9C0\uB9CC \uC644\uC804\uD55C \uAE30\uB2A5\uC744 \uAC16\uCD98 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "create-a-class-that-extends-the-touchgfxcontainer-class"
  }), `touchgfx::Container \xA0\uD074\uB798\uC2A4\uB97C \uD655\uC7A5\uD558\uB294 \uD074\uB798\uC2A4 \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 \uC544\uB798 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.hpp`), ` \uD5E4\uB354 \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. C++ \uC0C1\uC18D\uC744 \uD1B5\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Container`), `\uC758 \uBA54\uC18C\uB4DC\uC640 \uBA64\uBC84\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4 \uAD8C\uD55C\uC744 \uC5BB\uC2B5\uB2C8\uB2E4(\uC774\uB54C \uD5E4\uB354 \uD30C\uC77C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Container.hpp`), `\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2,4}",
    "{2,4}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/containers/Container.hpp>

class MyCustomContainer : public touchgfx::Container
{
public:
    MyCustomContainer();
    virtual ~MyCustomContainer() {}
    virtual void initialize();

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

private:

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "declaring-all-children-of-the-container-as-member-variables"
  }), `\uCEE8\uD14C\uC774\uB108\uC758 \uD558\uC704 \uC704\uC82F\uC744 \uBAA8\uB450 \uBA64\uBC84 \uBC88\uC218\uB85C \uC120\uC5B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD5E4\uB354 \uD30C\uC77C\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uAD6C\uC131\uD560 \uC704\uC82F\uC744 \uC120\uC5B8\uD569\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uC5D0\uC11C\uB294 \uBC15\uC2A4\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myBox`), `\uC640 \uBC84\uD2BC\uC73C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myButton`), `\uB9CC \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{19-20}",
    "{19-20}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/containers/Container.hpp>

class MyCustomContainer : public touchgfx::Container
{
public:
    MyCustomContainer();
    virtual ~MyCustomContainer() {}
    virtual void initialize();

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Member Declarations
     */
    touchgfx::Box myBox;
    touchgfx::Button myButton;

private:

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-the-width-and-height-of-the-container"
  }), `\uCEE8\uD14C\uC774\uB108\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C \uAE38\uC774 \uC124\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC5D0\uC11C \uC0DD\uC131\uD55C \uD5E4\uB354 \uD30C\uC77C\uC744 \uCD94\uAC00\uD558\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.cpp`), ` \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774\uB54C \uC0DD\uC131\uC790\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setWidth()`), ` \uBA54\uC18C\uB4DC\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setHeight()`), ` \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uC6D0\uD558\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{1,5-6}",
    "{1,5-6}": true
  }), `#include <gui/include/containers/MyCustomContainer.hpp>

MyCustomContainer::MyCustomContainer()
{
    setWidth(250);
    setHeight(250);
}

void MyCustomContainer::initialize()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-up-each-of-the-children"
  }), `\uAC01 \uD558\uC704 \uC704\uC82F \uC124\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC0DD\uC131\uC790\uC5D0\uC11C \uAC01 \uC704\uC82F\uC758 \uC18D\uC131\uC744 \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{8-12}",
    "{8-12}": true
  }), `#include <gui/include/containers/MyCustomContainer.hpp>

MyCustomContainer::MyCustomContainer()
{
    setWidth(250);
    setHeight(250);

    myBox.setPosition(0, 0, 250, 250);
    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));

    myButton.setXY(40, 95);
    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));
}

void MyCustomContainer::initialize()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-each-of-the-children-to-the-hierarchy-in-the-right-order"
  }), `\uAC01 \uD558\uC704 \uC704\uC82F\uC744 \uC62C\uBC14\uB978 \uC21C\uC11C\uB300\uB85C \uACC4\uCE35\uC5D0 \uCD94\uAC00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0DD\uC131\uC790\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `add()`), ` \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uC704\uC82F\uC744 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 \uD558\uC704 \uC704\uC82F\uC73C\uB85C \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-15}",
    "{14-15}": true
  }), `#include <gui/containers/MyCustomContainer.hpp>

MyCustomContainer::MyCustomContainer()
{
    setWidth(250);
    setHeight(250);

    myBox.setPosition(0, 0, 250, 250);
    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));

    myButton.setXY(40, 95);
    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));

    add(myBox);
    add(myButton);
}

void MyCustomContainer::initialize()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "implementing-the-desired-behaviour-via-methods-and-callbacks"
  }), `\uBA54\uC18C\uB4DC\uC640 \uCF5C\uBC31\uC744 \uD1B5\uD574 \uC6D0\uD558\uB294 \uB3D9\uC791 \uAD6C\uD604`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 \uB3D9\uC791\uC744 \uCD94\uAC00\uD558\uB824\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.hpp`), `\uC5D0\uC11C \uBA87 \uAC00\uC9C0 \uBA54\uC18C\uB4DC\uC640 \uCF5C\uBC31\uC744 \uC815\uC758\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `somethingHappened`), ` \uCF5C\uBC31 \uC2E4\uD589\uC774 \uC720\uC77C\uD55C \uBAA9\uC801\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `doSomething()`), ` \uBA54\uC18C\uB4DC\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-17,22,32-38,51}",
    "{14-17,22,32-38,51}": true
  }), `#include <gui/common/FrontendApplication.hpp>
#include <touchgfx/containers/Container.hpp>

class MyCustomContainer : public touchgfx::Container
{
public:
    MyCustomContainerBase();
    virtual ~MyCustomContainerBase() {}
    virtual void initialize();

    /*
     * Callback Setters
     */
    void setSomethingHappenedCallback(touchgfx::GenericCallback<>& callback)
    {
        somethingHappenedCallback = &callback;
    }

    /*
     * Methods
     */
    virtual void doSomething();

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Callback Emitters
     */
    virtual void emitSomethingHappenedCallback()
    {
        if (somethingHappenedCallback && somethingHappenedCallback->isValid())
        {
            somethingHappenedCallback->execute();
        }
    }

    /*
     * Member Declarations
     */
    touchgfx::Box myBox;
    touchgfx::Button myButton;

private:

    /*
     * Callback Declarations
     */
    touchgfx::GenericCallback<>* somethingHappenedCallback;

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyCustomContainer.cpp`), ` \uD30C\uC77C\uC5D0\uC11C \uC6D0\uD558\uB294 \uB3D9\uC791\uC744 \uBA54\uC18C\uB4DC\uC640 \uCF5C\uBC31\uC5D0 \uCD94\uAC00\uD558\uC5EC \uAD6C\uD604\uD569\uB2C8\uB2E4. \uC774 \uC608\uC81C\uC5D0\uC11C\uB294 \uB2E8\uC21C\uD558\uAC8C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `somethingHappened`), ` \uCF5C\uBC31\uC744 \uC2E4\uD589\uD558\uC9C0\uB9CC \uC6D0\uD558\uB294 \uB300\uB85C \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyCustomContainer.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{23-26}",
    "{23-26}": true
  }), `#include <gui/containers/MyCustomContainer.hpp>

MyCustomContainer::MyCustomContainer()
{
    setWidth(250);
    setHeight(250);

    myBox.setPosition(0, 0, 250, 250);
    myBox.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));

    myButton.setXY(40, 95);
    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));

    add(myBox);
    add(myButton);
}

void MyCustomContainer::initialize()
{

}

void MyCustomContainer::doSomething()
{
    MyCustomContainer::emitSomethingHappenedCallback();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD558\uC5EC \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC608\uC81C\uB97C \uBCF4\uACE0 \uC2F6\uB2E4\uBA74 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "../../../tutorials/tutorial-04",
    mdxType: "Link"
  }, "\uC790\uC2B5\uC11C 4: \uCEE4\uC2A4\uD140 \uB3D9\uC791\uC744 \uD1B5\uD574 \uC2A4\uD06C\uB864 \uD720 \uC0DD\uC131\uD558\uAE30"), "\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);