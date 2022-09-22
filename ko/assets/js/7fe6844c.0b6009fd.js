"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5923],{

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

/***/ 97429:
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
  id: "custom-triggers-and-actions",
  title: "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "id": "development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "title": "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-triggers-and-actions",
    "title": "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX Engine Features",
    "permalink": "/4.20/ko/docs/category/touchgfx-engine-features"
  },
  "next": {
    "title": "Position and size",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/position-size"
  }
};
const assets = {};




const toc = [{
  value: "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70",
  id: "custom-triggers",
  level: 2
}, {
  value: "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uCD94\uAC00\uD558\uAE30",
  id: "adding-custom-triggers",
  level: 3
}, {
  value: "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC2E4\uD589\uD558\uAE30",
  id: "emitting-custom-triggers-from-interactions",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC2E4\uD589\uD558\uAE30",
  id: "emitting-custom-triggers-from-user-code",
  level: 3
}, {
  value: "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC5D0 \uBC18\uC751\uD558\uAE30",
  id: "reacting-to-custom-triggers-from-interactions",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC5D0 \uBC18\uC751\uD558\uAE30",
  id: "reacting-to-custom-triggers-from-user-code",
  level: 3
}, {
  value: "\uCEE4\uC2A4\uD140 \uC561\uC158",
  id: "custom-actions",
  level: 2
}, {
  value: "\uCEE4\uC2A4\uD140 \uC561\uC158 \uCD94\uAC00\uD558\uAE30",
  id: "adding-custom-actions",
  level: 3
}, {
  value: "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158 \uD638\uCD9C\uD558\uAE30",
  id: "calling-custom-action-from-interactions",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158 \uD638\uCD9C\uD558\uAE30",
  id: "calling-custom-action-from-user-code",
  level: 3
}, {
  value: "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uB3D9\uC791 \uCD94\uAC00\uD558\uAE30",
  id: "adding-behaviour-to-custom-actions-from-interactions",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uB3D9\uC791 \uCD94\uAC00\uD558\uAE30",
  id: "adding-behaviour-to-custom-actions-from-user-code",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C\uB294 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158\uC744 \uC0AC\uC6A9\uD574 \uC790\uC2E0\uB9CC\uC758 \uC0C1\uD638\uC791\uC6A9 \uAD6C\uC131\uC694\uC18C\uB97C \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uAC01 \uC2A4\uD06C\uB9B0\uB9C8\uB2E4 \uC561\uC158 \uADF8\uB8F9(C++\uC5D0\uC11C \uAC04\uB2E8\uD55C void \uBA54\uC18C\uB4DC)\uC744 \uCD94\uAC00\uD55C \uD6C4 TouchGFX Designer\uB294 \uBB3C\uB860\uC774\uACE0 \uCF54\uB4DC\uC5D0\uC11C\uB3C4 \uD638\uCD9C\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C\uB3C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uBC18\uC751\uD558\uB294 \uD2B8\uB9AC\uAC70 \uADF8\uB8F9(C++\uC5D0\uC11C \uCF5C\uBC31\uACFC \uB3D9\uC77C)\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uAE30\uB2A5\uC744 \uC0B4\uD3B4\uBCF4\uBA74\uC11C \uBCF4\uB2E4 \uB9E4\uB044\uB7FD\uACE0 \uB3D9\uC801\uC778 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC81C\uC791\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-triggers"
  }), `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC774\uB294 C++ \uCF5C\uBC31 \uD615\uD0DC\uB85C \uC0DD\uC131\uB418\uBA70, \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C \uB610\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uC2E4\uD589\uB418\uAC70\uB098 \uBC18\uC751\uC744 \uC77C\uC73C\uD0A4\uAE30\uB3C4 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-custom-triggers"
  }), `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uCD94\uAC00\uB294 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 Properties \uD0ED\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Triggers`), ` \uC139\uC158\uC5D0 \uC788\uB294 \u201C+\u201D \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uC218\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-trigger-4.17.png",
    mdxType: "Figure"
  }, "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uAC00 \uC0DD\uC131\uB418\uBA74 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-trigger-4.17.png",
    mdxType: "Figure"
  }, "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uD3B8\uC9D1\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC5EC\uAE30\uC11C \uC9C0\uC815\uB41C \uC774\uB984\uC740 \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC5D0\uC11C, \uADF8\uB9AC\uACE0 \uC0DD\uC131\uB41C \uCF54\uB4DC \uD30C\uC77C\uC5D0\uC11C \uCC38\uC870 \uBAA9\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uBA70, \uCF54\uB4DC \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-14,24-30,37}",
    "{11-14,24-30,37}": true
  }), `class CustomContainer1Base : public touchgfx::Container
{
public:
    CustomContainer1Base();
    virtual ~CustomContainer1Base() {}
    virtual void initialize();

    /*
     * Custom Trigger Callback Setters
     */
    void setTrigger1Callback(touchgfx::GenericCallback<>& callback)
    {
        this->trigger1Callback = &callback;
    }

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Custom Trigger Emitters
     */
    virtual void emitTrigger1Callback()
    {
        if (trigger1Callback && trigger1Callback->isValid())
        {
            this->trigger1Callback->execute();
        }
    }

private:

    /*
     * Custom Trigger Callback Declarations
     */
    touchgfx::GenericCallback<>* trigger1Callback;

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2}",
    "{2}": true
  }), `CustomContainer1Base::CustomContainer1Base() :
    trigger1Callback(0)
{
    setWidth(250);
    setHeight(250);
}

void CustomContainer1Base::initialize()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Description`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC5EC\uAE30\uC5D0 \uC785\uB825\uD558\uB294 \uD14D\uC2A4\uD2B8\uB294 \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC0AC\uC6A9\uB418\uBA70, \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uD2B8\uB9AC\uAC70\uB97C \uC120\uD0DD\uD560 \uB54C \uB9C8\uC6B0\uC2A4 \uCEE4\uC11C\uB97C \uD2B8\uB9AC\uAC70 \uC704\uB85C \uAC00\uC838\uAC00\uBA74 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC124\uBA85\uC744 \uC785\uB825\uD558\uC9C0 \uC54A\uC73C\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#emitting-custom-triggers-from-interactions"
  }), `\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC2E4\uD589\uD558\uAE30`), ` \uC139\uC158\uC5D0 \uB098\uC640 \uC788\uB294 \uAC83\uCC98\uB7FC \uD45C\uC900 \uC124\uBA85\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Type`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Type\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uD2B9\uC815 \uC720\uD615\uC73C\uB85C \uC9C0\uC815\uB41C \uAC12\uC744 \uBC18\uD658\uD558\uB294 \uD2B8\uB9AC\uAC70\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC720\uD615\uC740 \uBAA9\uB85D\uC5D0\uC11C \uC120\uD0DD\uD558\uAC70\uB098, \uD639\uC740 \uC6D0\uD558\uB294 \uC720\uD615\uC744 \uC9C1\uC811 \uC791\uC131\uD558\uC5EC \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), ` \uC120\uD0DD \uC2DC \uC0DD\uC131\uB418\uB294 \uCF54\uB4DC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-14,24-30,37}",
    "{11-14,24-30,37}": true
  }), `class CustomContainer1Base : public touchgfx::Container
{
public:
    CustomContainer1Base();
    virtual ~CustomContainer1Base() {}
    virtual void initialize();

    /*
     * Custom Trigger Callback Setters
     */
    void setTrigger1Callback(touchgfx::GenericCallback<bool>& callback)
    {
        this->trigger1Callback = &callback;
    }

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Custom Trigger Emitters
     */
    virtual void emitTrigger1Callback(bool value)
    {
        if (trigger1Callback && trigger1Callback->isValid())
        {
            this->trigger1Callback->execute(value);
        }
    }

private:

    /*
     * Custom Trigger Callback Declarations
     */
    touchgfx::GenericCallback<bool>* trigger1Callback;

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "emitting-custom-triggers-from-interactions"
  }), `\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC2E4\uD589\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB294 \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC744 \uC0AC\uC6A9\uD574 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uAC00 \uC18D\uD55C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 Interaction \uD0ED\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uC0C1\uD638\uC791\uC6A9\uC744 \uC0DD\uC131\uD55C \uD6C4 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB97C \uC561\uC158\uC73C\uB85C \uC120\uD0DD\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/emitting-a-custom-trigger-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC2E4\uD589\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 \uCD94\uAC00\uB41C \uBC84\uD2BC\uC744 \uD074\uB9AD\uD560 \uB54C\uB9C8\uB2E4 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC5D0\uC11C Type\uC774 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC73C\uBA74 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uD30C\uB77C\uBBF8\uD130 \uAC12, \uC989 \uBCC0\uC218\uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), `\uC774 Type\uC73C\uB85C \uC9C0\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-emitting-custom-trigger-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uC2E4\uD589\uD560 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC758 \uB9E4\uAC1C\uBCC0\uC218 \uC9C0\uC815\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "emitting-custom-triggers-from-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC2E4\uD589\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB294 \uC0DD\uC131\uB41C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0C1\uC18D\uB418\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4 \uD30C\uC77C\uC5D0\uC11C\uB3C4 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC0DD\uC131\uB41C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC774\uB984\uC774 "trigger1"\uC778 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC5D0 \uB300\uD574 \uC544\uB798 \uBA54\uC18C\uB4DC\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{24-30}",
    "{24-30}": true
  }), `virtual void emitTrigger1Callback(bool value)
{
    if (trigger1Callback && trigger1Callback->isValid())
    {
        this->trigger1Callback->execute(value);
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD568\uC218\uB294 \uC0C1\uC18D\uB418\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4 \uD30C\uC77C\uC5D0\uC11C \uB36E\uC5B4\uC4F0\uAC70\uB098 \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "reacting-to-custom-triggers-from-interactions"
  }), `\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC5D0 \uBC18\uC751\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uAC00 \uD3EC\uD568\uB41C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uD558\uBA74 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB97C \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC2A4\uD06C\uB9B0\uC758 \uC0C1\uD638\uC791\uC6A9\uC5D0 \uC788\uB294 \uD2B8\uB9AC\uAC70\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uD2B8\uB9AC\uAC70\uB85C \uC120\uD0DD\uD560 \uB54C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD558\uB294 \uADDC\uCE59\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<Custom Container Name> <Custom Trigger name> happens`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-trigger-as-trigger-on-interaction-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB97C \uD2B8\uB9AC\uAC70\uB85C \uC120\uD0DD\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD2B8\uB9AC\uAC70\uB97C \uC120\uD0DD\uD55C \uD6C4 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uAC00 \uB3D9\uC77C\uD558\uAC8C \uD3EC\uD568\uB41C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uAC00 \uC5EC\uB7EC \uAC1C\uC778 \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uAD6C\uC131\uC694\uC18C\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC778\uC2A4\uD134\uC2A4\uAC00 \uD558\uB098 \uBC16\uC5D0 \uC5C6\uB2E4\uBA74 \uC790\uB3D9\uC73C\uB85C \uC120\uD0DD\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "reacting-to-custom-triggers-from-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC5D0 \uBC18\uC751\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uCF54\uB4DC \uC608\uC81C\uC640 \uAC19\uC774 \uCF5C\uBC31\uC744 \uAD6C\uD604\uD558\uBA74 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C\uB3C4 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC5D0 \uBC18\uC751\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC774\uB984\uC774 "trigger1"\uC778 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uAC00 \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0\uC73C\uB85C \uBD80\uD130 \uC0C1\uC18D\uB41C \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4 \uD30C\uC77C\uC5D0\uC11C \uAC15\uC870 \uD45C\uC2DC\uB41C \uB77C\uC778\uB4E4\uC740 \uCF5C\uBC31/\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB97C \uAD6C\uD604\uD558\uAE30 \uC704\uD574 \uCD94\uAC00\uB41C \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{10-18}",
    "{10-18}": true
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();

private:
    /*
     * Callback Declarations
     */
    touchgfx::Callback<Screen1View> customContainer1Trigger1Callback;

    /*
     * Callback Handler Declarations
     */
    void customContainer1Trigger1CallbackHandler();
};

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4,6,19-22}",
    "{4,6,19-22}": true
  }), `#include <gui/screen1_screen/Screen1View.hpp>

Screen1View::Screen1View():
    customContainer1Trigger1Callback(this, &Screen1View::customContainer1Trigger1CallbackHandler)
{
    customContainer1.setTrigger1Callback(customContainer1Trigger1Callback);
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
}

void Screen1View::tearDownScreen()
{
    Screen1ViewBase::tearDownScreen();
}

void Screen1View::customContainer1Trigger1CallbackHandler()
{
    //Your code here.
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-actions"
  }), `\uCEE4\uC2A4\uD140 \uC561\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uC561\uC158\uC740 \uC2A4\uD06C\uB9B0\uACFC \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC774\uB294 \uAC00\uC0C1 C++ \uBA54\uC18C\uB4DC \uD615\uD0DC\uB85C \uC0DD\uC131\uB418\uBA70, \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C \uB610\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uC561\uC158\uC758 \uAD6C\uD604 \uBC0F \uB3D9\uC791\uC740 \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uAD6C\uC131\uD558\uAC70\uB098, \uD639\uC740 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4 \uD30C\uC77C\uC5D0\uC11C \uC0DD\uC131\uB41C C++ \uBA54\uC18C\uB4DC\uB97C \uB36E\uC5B4\uC368\uC11C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-custom-actions"
  }), `\uCEE4\uC2A4\uD140 \uC561\uC158 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uCD94\uAC00\uB294 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 Properties \uD0ED\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Actions`), ` \uC139\uC158\uC5D0 \uC788\uB294 \u201C+\u201D \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uC218\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-action-4.17.png",
    mdxType: "Figure"
  }, "\uCEE4\uC2A4\uD140 \uC561\uC158 \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uC561\uC158\uC774 \uC0DD\uC131\uB418\uBA74 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-action-4.17.png",
    mdxType: "Figure"
  }, "\uCEE4\uC2A4\uD140 \uC561\uC158 \uD3B8\uC9D1\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Name`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC5EC\uAE30\uC5D0 \uC9C0\uC815\uB41C \uC774\uB984\uC740 \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC5D0\uC11C, \uADF8\uB9AC\uACE0 \uC0DD\uC131\uB41C \uCF54\uB4DC \uD30C\uC77C\uC5D0\uC11C \uCD94\uAC00\uB85C \uCC38\uC870\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uBA70, \uCF54\uB4DC \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11}",
    "{11}": true
  }), `class CustomContainer1Base : public touchgfx::Container
{
public:
    CustomContainer1Base();
    virtual ~CustomContainer1Base() {}
    virtual void initialize();

    /*
     * Custom Actions
     */
    virtual void action1();

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

private:

};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{12-15}",
    "{12-15}": true
  }), `CustomContainer1Base::CustomContainer1Base()
{
    setWidth(250);
    setHeight(250);
}

void CustomContainer1Base::initialize()
{

}

void CustomContainer1Base::action1()
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Description`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uC5EC\uAE30\uC5D0 \uC785\uB825\uD558\uB294 \uD14D\uC2A4\uD2B8\uB294 \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC0AC\uC6A9\uB418\uBA70, \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC561\uC158\uC744 \uC120\uD0DD\uD560 \uB54C \uB9C8\uC6B0\uC2A4 \uCEE4\uC11C\uB97C \uC561\uC158 \uC704\uB85C \uAC00\uC838\uAC00\uBA74 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC124\uBA85\uC744 \uC785\uB825\uD558\uC9C0 \uC54A\uC73C\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#calling-custom-action-from-interactions"
  }), `\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC2E4\uD589\uD558\uAE30`), ` \uC139\uC158\uC5D0 \uB098\uC640 \uC788\uB294 \uAC83\uCC98\uB7FC \uD45C\uC900 \uC124\uBA85\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Call <Name> on <Screen or Custom Container Name>`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `Type`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` Type\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uD2B9\uC815 \uC720\uD615\uC73C\uB85C \uC9C0\uC815\uB41C \uD30C\uB77C\uBBF8\uD130\uAC00 \uD544\uC694\uD55C \uC561\uC158\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC720\uD615\uC740 \uBAA9\uB85D\uC5D0\uC11C \uC120\uD0DD\uD558\uAC70\uB098, \uD639\uC740 \uC6D0\uD558\uB294 \uC720\uD615\uC744 \uC9C1\uC811 \uC791\uC131\uD558\uC5EC \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), ` \uC120\uD0DD \uC2DC \uC0DD\uC131\uB418\uB294 \uCF54\uB4DC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11}",
    "{11}": true
  }), `/*
 * Custom Actions
 */
virtual void action1(bool value);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1Base.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void CustomContainer1Base::action1(bool value)
{

}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "calling-custom-action-from-interactions"
  }), `\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158 \uD638\uCD9C\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uC561\uC158\uC774 \uC0DD\uC131\uB418\uBA74 \uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC0DD\uC131\uB41C \uC561\uC158\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC561\uC158\uC744 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0DD\uC131\uD55C \uD6C4 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uD588\uB2E4\uBA74 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC2A4\uD06C\uB9B0\uC758 Interaction \uD0ED\uC5D0\uC11C \uC561\uC158\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/executing-custom-action-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158 \uC2E4\uD589\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC561\uC158\uC744 \uC120\uD0DD\uD55C \uD6C4 \uB3D9\uC77C\uD55C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uAC00 \uC5EC\uB7EC \uAC1C\uC778 \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uAD6C\uC131\uC694\uC18C\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC778\uC2A4\uD134\uC2A4\uAC00 \uD558\uB098 \uBC16\uC5D0 \uC5C6\uB2E4\uBA74 \uC790\uB3D9\uC73C\uB85C \uC120\uD0DD\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0\uC11C Type\uC774 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC73C\uBA74 \uD30C\uB77C\uBBF8\uD130 \uAC12, \uC989 \uBCC0\uC218\uB97C \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `bool`), ` Type\uC73C\uB85C \uC9C0\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-executing-custom-action-from-interaction-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uC2E4\uD589\uD560 \uCEE4\uC2A4\uD140 \uC561\uC158\uC758 \uB9E4\uAC1C\uBCC0\uC218 \uC9C0\uC815\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "calling-custom-action-from-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158 \uD638\uCD9C\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uC561\uC158\uC740 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uC9C1\uC811 \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uCF54\uB4DC \uC608\uC81C\uC5D0\uC11C\uB294 \uC774\uB984\uC774 "action1"\uC778 \uCEE4\uC2A4\uD140 \uC561\uC158\uC774 \uD3EC\uD568\uB41C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC740 \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1ViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-6}",
    "{4-6}": true
  }), `Screen1ViewBase::Screen1ViewBase()
{

    customContainer11.setXY(50, 11);

    add(customContainer11);
}

void Screen1ViewBase::setupScreen()
{
    customContainer11.initialize();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4 \uD30C\uC77C\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View`), `\uC5D0\uC11C \uC544\uB798\uC640 \uAC19\uC774 \uCEE4\uC2A4\uD140 \uC561\uC158 \u201Caction1\u201D\uC744 \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4 \uD30C\uC77C\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1ViewBase`), `\uC5D0\uC11C \uC0C1\uC18D\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3}",
    "{3}": true
  }), `Screen1View::Screen1View()
{
    customContainer11.action1();
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();
}

void Screen1View::tearDownScreen()
{
    Screen1ViewBase::tearDownScreen();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-behaviour-to-custom-actions-from-interactions"
  }), `\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uB3D9\uC791 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uD638\uC791\uC6A9 \uC2DC\uC2A4\uD15C\uC744 \uC0AC\uC6A9\uD558\uBA74 \uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uB3D9\uC791\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uC561\uC158\uC774 \uC18D\uD55C \uC2A4\uD06C\uB9B0 \uB610\uB294 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 Interaction \uD0ED\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uC0C1\uD638\uC791\uC6A9\uC744 \uC0DD\uC131\uD55C \uD6C4 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uCEE4\uC2A4\uD140 \uC561\uC158\uC744 \uD2B8\uB9AC\uAC70\uB85C \uC120\uD0DD\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-action-as-trigger-on-interaction-4.17.png",
    mdxType: "Figure"
  }, "\uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158\uC744 \uD2B8\uB9AC\uAC70\uB85C \uC120\uD0DD\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uCEE4\uC2A4\uD140 \uC561\uC158\uC744 \uD638\uCD9C\uD560 \uB54C\uB9C8\uB2E4 \uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uC815\uC758\uB41C \uBAA8\uB4E0 \uC561\uC158\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-behaviour-to-custom-actions-from-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uB3D9\uC791 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uC561\uC158\uC740 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CustomContainer1`), `\uC5D0\uC11C\uB3C4 \uC561\uC158\uC744 \uB36E\uC5B4\uC368\uC11C \uB3D9\uC791\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `CustomContainer1Base`), `\uC5D0\uC11C \uC0C1\uC18D\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{9}",
    "{9}": true
  }), `class CustomContainer1 : public CustomContainer1Base
{
public:
    CustomContainer1();
    virtual ~CustomContainer1() {}

    virtual void initialize();

    void action1();

protected:
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "CustomContainer1.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{11-14}",
    "{11-14}": true
  }), `CustomContainer1::CustomContainer1()
{

}

void CustomContainer1::initialize()
{
    CustomContainer1Base::initialize();
}

void CustomContainer1::action1()
{
    //Your code here
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../../../tutorials/tutorial-05",
    mdxType: "Link"
  }, "\uC790\uC2B5\uC11C 5: \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158 \uC0DD\uC131\uD558\uAE30"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);