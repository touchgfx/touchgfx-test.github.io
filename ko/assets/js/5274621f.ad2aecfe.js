"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[3048],{

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

/***/ 88830:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
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
  id: "scenarios-create-at",
  title: "TouchGFX Board Setup \uC0DD\uC131"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/scenarios/scenarios-create-at",
  "id": "development/scenarios/scenarios-create-at",
  "title": "TouchGFX Board Setup \uC0DD\uC131",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-create-at.mdx",
  "sourceDirName": "development/scenarios",
  "slug": "/development/scenarios/scenarios-create-at",
  "permalink": "/4.20/ko/docs/development/scenarios/scenarios-create-at",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scenarios-create-at",
    "title": "TouchGFX Board Setup \uC0DD\uC131"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD53D\uC140 \uD615\uC2DD \uBCC0\uACBD",
    "permalink": "/4.20/ko/docs/development/scenarios/scenarios-change-pixelformat-bpp"
  },
  "next": {
    "title": "\uD2B8\uB9AC\uAC70 \uC5ED\uD560\uC744 \uD558\uB294 \uC678\uBD80 \uC774\uBCA4\uD2B8",
    "permalink": "/4.20/ko/docs/development/scenarios/example-gpio"
  }
};
const assets = {};



const toc = [{
  value: "TouchGFX Board Setup \uC124\uBA85",
  id: "describe-application-template",
  level: 2
}, {
  value: "TouchGFX Board Setup \uC0DD\uC131",
  id: "create-touchgfx-board-setup",
  level: 2
}, {
  value: "\uD14C\uC2A4\uD2B8 \uBC0F \uD655\uC778",
  id: "test-verify",
  level: 2
}, {
  value: "\uCD5C\uC885 \uB178\uD2B8",
  id: "final-notes",
  level: 2
}, {
  value: "\uC77C\uBC18 \uD301",
  id: "general-tips",
  level: 3
}, {
  value: "\uBC84\uC804 \uAD00\uB9AC",
  id: "version-control",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Board Setups`), `(TBS)\uB294 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC2E4\uD589\uB418\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uD50C\uB7AB\uD3FC`), `\uC744 \uC815\uC758\uD558\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), ` \uD30C\uC77C\uC785\uB2C8\uB2E4. \uC774 \uC811\uADFC \uBC29\uC2DD\uC740 \uC2E4\uD589 \uAE30\uBC18\uC774 \uB418\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `UI`), ` \uCF54\uB4DC\uC640 \uBCC4\uB3C4\uB85C \uC0AC\uC6A9\uD558\uAE30 \uC26C\uC6B4 TBS\uB97C \uBC30\uD3EC\uD558\uB824\uB294 \uAC1C\uBC1C\uC790\uB97C \uC704\uD55C \uAC83\uC785\uB2C8\uB2E4. \uC774 \uBB38\uC11C\uC5D0\uC11C\uB294 \uAE30\uBCF8 \uC81C\uACF5 \uB3C4\uAD6C\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tgfx.exe`), `\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAE30\uC874\uC758 TouchGFX \uD504\uB85C\uC81D\uD2B8\uB97C \uC7AC\uBC30\uD3EC\uAC00 \uAC00\uB2A5\uD55C TBS\uB85C \uD328\uD0A4\uC9D5\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4. \uC774 \uBB38\uC11C\uC5D0 \uB098\uC628 \uC608\uC81C\uB4E4\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `"MyApplication"`), `\uC774\uB77C\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAE30\uBC18\uC73C\uB85C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD504\uB85C\uC81D\uD2B8\uAC00 \uC644\uC804\uD788 \uAE30\uB2A5\uD558\uACE0 \uC788\uB294 \uC0C1\uD0DC\uC5D0\uC11C TBS\uB97C \uC0DD\uC131\uD558\uB824\uBA74 \uB2E4\uC74C \uB2E8\uACC4\uB97C \uAC70\uCCD0\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Board Setup \uC124\uBA85`), `  `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `tgfx.exe`), `\uB97C \uD638\uCD9C\uD558\uACE0 json \uD30C\uC77C(.touchgfx\uC5D0\uC11C \uC0C1\uC18D)\uC744 \uD3B8\uC9D1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Board Setup \uC0DD\uC131`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `tgfx.exe`), `\uB97C \uD638\uCD9C\uD558\uC5EC \uCD5C\uC885 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.tpa`), ` \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uD14C\uC2A4\uD2B8 \uBC0F \uD655\uC778`), ` TouchGFX Designer\uB85C \uAC00\uC838\uC640\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131 \uBC0F \uD655\uC778`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "describe-application-template"
  }), `TouchGFX Board Setup \uC124\uBA85`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `tgfx.exe`), ` \uB3C4\uAD6C\uB294 TBS\uC758 \uB0B4\uBD80\uB97C \uC124\uBA85\uD558\uB294 \uAD6C\uC131 \uD30C\uC77C(.json)\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774 \uC815\uBCF4\uB294 TouchGFX Designer\uAC00 \uC77D\uC5B4\uC640\uC11C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uD45C\uC2DC\uB429\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `TouchGFX Environment`), ` \uCF58\uC194\uC744 \uC5F4\uACE0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC0C1\uC704`), ` \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -d MyApplication
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-zip.png",
    width: "550px",
    mdxType: "Figure"
  }, ".tpa\uB97C \uC704\uD55C \uD30C\uC77C \uC900\uBE44"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA85\uB839\uC774 \uC2E4\uD589\uB41C \uB514\uB809\uD1A0\uB9AC\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD30C\uC77C\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-desc-files.png",
    width: "240px",
    mdxType: "Figure"
  }, "\uC0DD\uC131\uB41C \uD30C\uC77C\uC758 \uBAA9\uB85D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCD5C\uC885 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), ` \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uAE30\uC5D0 \uC55E\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication.json`), `\uC744 \uD3B8\uC9D1\uD558\uC5EC TBS\uAC00 TouchGFX Designer\uC5D0\uC11C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uD45C\uC2DC\uB418\uB294 \uBC29\uC2DD\uC744 \uC81C\uC5B4\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uB2E4\uC74C \uC139\uC158\uC744 \uD3B8\uC9D1\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Author`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Author`), ` \uC139\uC158\uC758 \uD544\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC800\uC790 \uC774\uB984, \uC5F0\uB77D\uCC98 \uC774\uBA54\uC77C \uBC0F URL\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Data`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Data`), ` \uC139\uC158\uC758 \uD544\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC TBS \uBC84\uC804, \uC774\uBBF8\uC9C0, \uBCF4\uB4DC \uC774\uB984, \uBCA4\uB354, \uC124\uBA85 \uBC0F \uCD94\uAC00 \uC815\uBCF4\uC5D0 \uB300\uD55C \uB9C1\uD06C\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication.json"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json"
  }), `   ...
    "Author": [
      {
        "Name": "Chad Brody",
        "Contact": "chad.brody@mycompany.com",
        "URL": "http://mycompany.com/"
      }
    ],
  ...
  "Data": {
    "Version": {
      "Major": 1,
      "Minor": 0,
      "Build": 0
    },
    "Name": "MyApplication",
    "HumanFriendlyName": "MyApplication",
    "BoardName": "Custom STM32 Board",
    "Type": "TGAT",
    "Vendor": "MyCompany",
    "Description": "This is a working project on which to base your UI on top of.",
    "DocumentationLink": "",
    "Category": "",
    "Images": [
      "http://mysite.com/MyCustomBoard-front.png",
      "http://mysite.com/MyCustomBoard-back.png"
    ],
    ...
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "'Type' \uC18D\uC131\uC744 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TGAT"), "\uB85C \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uC9C0 \uC54A\uC73C\uBA74 TBS\uAC00 TouchGFX Designer\uC5D0 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "UI \uD15C\uD50C\uB9BF \uB610\uB294 Board Specific Demo\uB97C \uC0DD\uC131\uD560 \uB54C 'Type' \uC18D\uC131\uC740 \uAC01\uAC01 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TGUI"), "\uC640 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("b", null, "TGAPP"), "\uC785\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Designer\uB294 TBS\uC5D0 \uB300\uD55C \uD655\uC7A5 \uC815\uBCF4 \uCE74\uB4DC\uB97C \uD45C\uC2DC\uD560 \uB54C \uC774 \uBAA9\uB85D\uC5D0\uC11C \uCD5C\uB300 \uC138 \uAC1C\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC774\uBBF8\uC9C0 \uCC38\uC870\uB294 \uBC18\uB4DC\uC2DC URL\uC774\uC5B4\uC57C \uD568). \uC774\uBBF8\uC9C0\uC758 \uCD5C\uC801 \uD574\uC0C1\uB3C4\uB294 400 x 280 \uD53D\uC140\uC785\uB2C8\uB2E4. "), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "create-touchgfx-board-setup"
  }), `TouchGFX Board Setup \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uCD5C\uC885 '.tpa' \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uACE0 TouchGFX Board Setup\uC744 \uC644\uB8CC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -rc -d MyApplication
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-tpa.png",
    width: "570px",
    mdxType: "Figure"
  }, "TouchGFX Board Setup \uC0DD\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "test-verify"
  }), `\uD14C\uC2A4\uD2B8 \uBC0F \uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), ` \uD30C\uC77C\uC774 TouchGFX Designer\uC5D0\uC11C TBS\uB85C \uD45C\uC2DC\uB418\uACE0, \uC0C8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uAE30 \uC704\uD574 \uB2E4\uC74C \uB2E8\uACC4\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.tpa`), ` \uD30C\uC77C\uC758 \uC774\uB984\uC744 \uC694\uAD6C \uC0AC\uD56D\uC73C\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.tpa`), ` \uD30C\uC77C\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:\\TouchGFX\\4.13.0\\app\\packages`), `\uB85C \uBCF5\uC0AC\uD558\uAC70\uB098 \uC62E\uAE41\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uB85C\uCEEC \uD3F4\uB354\uC5D0\uC11C TBS\uB97C TouchGFX Designer\uB85C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-mv-to-pkg.png",
    width: "550",
    mdxType: "Figure"
  }, "\uB85C\uCEEC \uD3F4\uB354\uC5D0 TBS \uC124\uCE58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", __spreadValues({}, {
    "start": 3
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX Designer\uB97C \uC5F4\uACE0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `By Partners`), ` \uD0ED\uC5D0\uC11C TBS\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    noShadow: true,
    imageSource: "/img/development/touchgfx-hal-development/scenarios/create-at-designer-main-info-4-17.png",
    width: "550",
    mdxType: "Figure"
  }, "TBS \uC815\uBCF4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "final-notes"
  }), `\uCD5C\uC885 \uB178\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC139\uC158\uC5D0\uB294 TBS\uC6A9 \uCF54\uB4DC\uB97C \uAC1C\uBC1C/\uBC30\uD3EC\uD560 \uB54C \uACE0\uB824\uD574\uC57C \uD560 \uC0AC\uD56D\uC5D0 \uAD00\uD55C \uD301\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "general-tips"
  }), `\uC77C\uBC18 \uD301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\uB97C \uBC30\uD3EC\uD558\uAE30 \uC804\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uACF5\uAE09\uB41C \uBAA8\uB4E0 IDE \uD504\uB85C\uC81D\uD2B8\uAC00 \uC608\uC0C1\uB300\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `build`), `- \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `generated`), ` \uD3F4\uB354\uB97C \uC0AD\uC81C\uD558\uC5EC TBS\uC758 \uD06C\uAE30\uB97C \uC904\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.touchgfx`), `\uC5D0 \uC815\uC758\uB41C \uB9DE\uCDA4\uD615 \uBA85\uB839(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `PostGenerate`), `- \uB4F1)\uC774 \uC608\uC0C1\uB300\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TBS\uAC00 TouchGFX Designer\uC5D0\uC11C \uC77D\uAE30\uAC00 \uAC00\uB2A5\uD558\uACE0 \uC0C8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TBS \uBC84\uC804 \uAC04\uC5D0 \uC5C5\uADF8\uB808\uC774\uB4DC \uC808\uCC28\uB97C \uC989\uAC01\uC801\uC73C\uB85C \uC9C0\uC815\uD558\uB294 \uAC83\uC740 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX \uD504\uB85C\uC81D\uD2B8 \uB610\uB294 `.json` \uD30C\uC77C\uC758 \uB0B4\uC6A9\uC744 \uC218\uC815\uD55C \uD6C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF\uC744 \uB2E4\uC2DC \uD328\uD0A4\uC9D5\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), `\uB97C \uBC30\uD3EC\uD55C \uD6C4\uC5D0\uB294 \uC0AC\uC6A9\uC790\uC5D0\uAC8C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), ` \uD30C\uC77C\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `C:\\TouchGFX\\4.13.0\\app\\packages`), `\uC5D0 \uBCF5\uC0AC\uD558\uB3C4\uB85D \uC9C0\uC2DC\uD558\uACE0, TouchGFX Desinger\uAC00 \uC5F4\uB9AC\uBA74 \uB2E4\uC2DC \uC2DC\uC791\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "version-control"
  }), `\uBC84\uC804 \uAD00\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C \uAC1C\uBC1C\uC790\uB294 \uB3D9\uC77C\uD55C \uB9AC\uD3EC\uC9C0\uD1A0\uB9AC\uC5D0 \uC804\uCCB4 \uAC1C\uBC1C \uD504\uB85C\uC81D\uD2B8(TouchGFX Board Bringup, TouchGFX AL, TouchGFX UI)\uB97C \uBCF4\uAD00\uD558\uAE30 \uB54C\uBB38\uC5D0 \uBC30\uD3EC \uAC00\uB2A5\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), ` \uD30C\uC77C\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD1B5\uD569 \uD50C\uB7AB\uD3FC \uCF54\uB4DC\uB294 \uD300 \uAD6C\uC131\uC6D0\uC774 \uC0C8\uB85C\uC6B4 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2DC\uC791\uD560 \uC218 \uC788\uB3C4\uB85D \uD14C\uC2A4\uD2B8 \uBC0F \uD655\uC778\uC744 \uC218\uD589\uD558\uB294 \uB370 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), ` \uD30C\uC77C\uC744 \uBC30\uD3EC\uD558\uAC70\uB098 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `repo`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `git submodules`), `\uC640 \uAC19\uC740 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD574 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uBAA8\uB4C8\uD654\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 TBS \uBD80\uD488\uC758 \uBC84\uC804\uC774 \uC55E\uC11C \uC124\uBA85\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.json`), ` \uB514\uC2A4\uD06C\uB9BD\uD130\uC5D0 \uC9C0\uC815\uB41C \uBC84\uC804\uC744 \uB530\uB974\uB3C4\uB85D \uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uBAA8\uB4C8\uD654\uB41C \uC811\uADFC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uD50C\uB7AB\uD3FC`), ` \uCF54\uB4DC\uB294 \uBC30\uD3EC \uAC00\uB2A5\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.tpa`), ` \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uB294 \uAC83 \uC678\uC5D0 \uC8FC\uC694 \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870\uC5D0\uC11C \uBAA8\uB4C8\uB85C\uB3C4 \uC0AC\uC6A9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-json"
  }), `  "Data": {
    "Version": {
      "Major": 3,
      "Minor": 0,
      "Build": 0
    },
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ git tag
v1.1.0
v2.0.0
v2.1.0
v3.0.0
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);