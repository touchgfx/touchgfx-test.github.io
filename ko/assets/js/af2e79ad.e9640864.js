"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6226],{

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

/***/ 80675:
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
  id: "texts-and-fonts",
  title: "\uD14D\uC2A4\uD2B8 \uBC0F \uD3F0\uD2B8"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "id": "development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "title": "\uD14D\uC2A4\uD2B8 \uBC0F \uD3F0\uD2B8",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/texts-and-fonts.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "texts-and-fonts",
    "title": "\uD14D\uC2A4\uD2B8 \uBC0F \uD3F0\uD2B8"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBBF9\uC2A4\uC778",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/mixins"
  },
  "next": {
    "title": "\uC5B8\uC5B4 \uBC0F \uBB38\uC790",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"
  }
};
const assets = {};





const toc = [{
  value: "\uD14D\uC2A4\uD2B8 \uBC0F \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C",
  id: "texts-and-typographies",
  level: 2
}, {
  value: "\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C",
  id: "the-text-converter",
  level: 2
}, {
  value: "\uBC88\uC5ED",
  id: "translations",
  level: 3
}, {
  value: "\uAD8C\uC7A5 \uC0AC\uD56D",
  id: "recommendations",
  level: 4
}, {
  value: "\uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C",
  id: "the-font-converter",
  level: 2
}, {
  value: "\uBB38\uC790 \uBA54\uBAA8\uB9AC \uCD5C\uC801\uD654",
  id: "character-memory-optimization",
  level: 2
}, {
  value: "\uC640\uC77C\uB4DC\uCE74\uB4DC",
  id: "wildcards",
  level: 2
}, {
  value: "TouchGFX Designer\uC5D0\uC11C \uC640\uC77C\uB4DC\uCE74\uB4DC \uC0AC\uC6A9\uD558\uAE30",
  id: "using-wildcards-in-touchgfx-designer",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uC640\uC77C\uB4DC\uCE74\uB4DC \uC0AC\uC6A9\uD558\uAE30",
  id: "using-wildcards-in-user-code",
  level: 3
}, {
  value: "\uD14D\uC2A4\uD2B8 \uBC30\uCE58",
  id: "text-placement",
  level: 2
}, {
  value: "\uC815\uB82C",
  id: "alignment",
  level: 3
}, {
  value: "TextArea\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C\uB97C \uC815\uD655\uD558\uAC8C \uC124\uC815\uD558\uAE30",
  id: "setting-the-correct-width-and-height-of-a-textarea",
  level: 3
}, {
  value: "TextArea\uC758 X \uBC0F Y\uB97C \uC815\uD655\uD558\uAC8C \uC124\uC815\uD558\uAE30",
  id: "setting-the-correct-x-and-y-for-a-textarea",
  level: 3
}, {
  value: "\uAE34 \uD14D\uC2A4\uD2B8 \uB77C\uC778\uC5D0 \uB300\uD55C \uC790\uB3D9 \uB798\uD551",
  id: "automatic-wrapping-of-long-text-lines",
  level: 3
}, {
  value: "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C Wide Text \uC561\uC158",
  id: "available-wide-text-actions",
  level: 4
}, {
  value: "\uC5B8\uC5B4 \uBCC0\uACBD",
  id: "switching-language",
  level: 2
}, {
  value: "TouchGFX Designer\uC5D0\uC11C \uC5B8\uC5B4\uB97C \uBCC0\uACBD\uD560 \uACBD\uC6B0",
  id: "in-touchgfx-designer",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8\uC640 \uD3F0\uD2B8\uB294 GUI\uC5D0\uC11C \uB9E4\uC6B0 \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD558\uB294\uB370, \uADF8 \uC774\uC720\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC9C0\uC6D0\uB418\uB294 \uC5B8\uC5B4\uB9C8\uB2E4 \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1 \uCC98\uB9AC\uB41C \uACE0\uD488\uC9C8\uC758 \uD14D\uC2A4\uD2B8\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 TouchGFX Designer\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/texts-view"
  }), `\uD14D\uC2A4\uD2B8 \uBDF0`), `\uB97C \uD1B5\uD574 \uD14D\uC2A4\uD2B8\uC640 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC758 \uC0DD\uC131 \uBC0F \uC218\uC815\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. TouchGFX Designer\uB294 \uD14D\uC2A4\uD2B8\uC640 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uAD6C\uC131\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/texts/texts.xml`), `\uC5D0 \uC788\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB85C \uCD9C\uB825\uD569\uB2C8\uB2E4. \uC774 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB294 \uD3F0\uD2B8 \uD30C\uC77C\uACFC \uD568\uAED8 \uD3F0\uD2B8/\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uB85C \uC804\uB2EC\uB418\uC5B4 TouchGFX\uC5D0\uC11C \uB80C\uB354\uB9C1\uD560 \uC218 \uC788\uB294 C++ \uCF54\uB4DC \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uD14D\uC2A4\uD2B8 \uBC0F \uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uC5D0 \uB300\uD574 \uC18C\uAC1C\uD558\uACE0 \uC0DD\uC131\uB41C \uD14D\uC2A4\uD2B8\uB97C \uCF54\uB4DC\uC640 TouchGFX Designer\uB97C \uD1B5\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "texts-and-typographies"
  }), `\uD14D\uC2A4\uD2B8 \uBC0F \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD14D\uC2A4\uD2B8\uC640 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/texts/texts.xml`), ` \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC774 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uD14D\uC2A4\uD2B8(\uBC88\uC5ED \uD3EC\uD568)\uC640 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uC774 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C \uC77C\uCEEC\uC5B4 "\uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4"\uB77C\uACE0 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8\uC640 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB294 TouchGFX Designer\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/texts-view"
  }), `Texts View`), `\uB97C \uC0AC\uC6A9\uD574 \uD3B8\uC9D1\uC774 \uAC00\uB2A5\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC27D\uACE0 \uD3B8\uB9AC\uD558\uAC8C \uD3B8\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC texts.xml\uC5D0\uC11C \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC640 \uD14D\uC2A4\uD2B8\uB97C \uBC14\uB85C \uD3B8\uC9D1\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uD3B8\uC9D1\uC744 \uB4B7\uBC1B\uCE68\uD560 \uBAA9\uC801\uC73C\uB85C XML \uC2A4\uD0A4\uB9C8\uAC00 \uAC80\uC99D \uD30C\uC77C\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/texts/texts.xsd`), `\uC5D0 \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC54C\uB824\uC838 \uC788\uB294 \uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uAE30\uB4E4\uC740 \uB300\uBD80\uBD84 XML \uD50C\uB7EC\uADF8\uC778\uC774 \uC788\uC5B4\uC11C XML \uC2A4\uD0A4\uB9C8 \uAC80\uC99D \uD30C\uC77C\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74 VS \uCF54\uB4DC, Notepad++ \uB610\uB294 Emacs, Visual Studio \uB4F1\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C XML \uC2A4\uD0A4\uB9C8\uAC00 \uAC80\uC99D\uD558\uC9C0 \uBABB\uD558\uB294 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uBD88\uC77C\uCE58\uB098 \uBC88\uC5ED \uB204\uB77D\uC744 \uD53C\uD560 \uBAA9\uC801\uC73C\uB85C \uD14D\uC2A4\uD2B8\uC640 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB97C \uD3B8\uC9D1\uD560 \uB54C\uB294 TouchGFX Designer\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC678\uBD80 \uBC88\uC5ED\uAE30\uB97C \uBC88\uC5ED\uC5D0 \uC0AC\uC6A9\uD558\uB294 \uB4F1 TouchGFX Designer \uC678\uBD80\uC5D0\uC11C \uD14D\uC2A4\uD2B8 \uBC88\uC5ED\uC744 \uC9C0\uC6D0\uD560 \uBAA9\uC801\uC73C\uB85C \uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uC5D0 \uB3C5\uB9BD \uC2E4\uD589\uD615 \uB3C4\uAD6C\uAC00 \uC0C8\uB85C \uCD94\uAC00\uB418\uC5B4 \uC774\uC81C \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C Excel \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uB85C \uD14D\uC2A4\uD2B8 \uBC88\uC5ED\uC744 \uB0B4\uBCF4\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB0B4\uBCF4\uB0B4\uACE0 \uB098\uBA74 \uC774 Excel \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uB97C \uC678\uBD80 \uBC88\uC5ED\uAE30\uC640 \uACF5\uC720\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uD6C4 \uBC88\uC5ED\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC744 \uB54C\uB294 \uB3D9\uC77C\uD55C \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD574 Excel \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uB97C \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB85C \uB2E4\uC2DC \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB0B4\uBCF4\uB0B4\uAE30/\uAC00\uC838\uC624\uAE30\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#translations"
  }), `\uBC88\uC5ED`), `\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uD0C0\uC774\uD3EC\uADF8\uB798\uD53C, \uD14D\uC2A4\uD2B8, \uBC88\uC5ED \uBC0F \uC5B8\uC5B4\uB97C \uC0DD\uC131\uD558\uC5EC \uD3B8\uC9D1\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/texts-view",
    mdxType: "Link"
  }, "\uD14D\uC2A4\uD2B8 \uBDF0\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-text-converter"
  }), `\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uD14D\uC2A4\uD2B8 \uC815\uBCF4\uB97C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uB0B4\uBD80 C++ \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4. \uC774 \uB3C4\uAD6C\uB294 \uBE4C\uB4DC \uB3C4\uAD6C \uCCB4\uC778\uC5D0 \uD1B5\uD569\uB418\uC5B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBE4C\uB4DC \uC2DC \uC790\uB3D9\uC73C\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uBC88\uC5ED \uB610\uB294 \uD14D\uC2A4\uD2B8 \uC18D\uC131\uC774 \uC218\uC815\uB418\uC5C8\uAC70\uB098, \uD14D\uC2A4\uD2B8 \uB610\uB294 \uBC88\uC5ED\uC774 \uC0C8\uB85C \uCD94\uAC00\uB418\uBA74 \uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uAC00 C++ \uCF54\uB4DC\uB9CC \uC0C8\uB85C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-converter-4.18.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uC758 \uCD9C\uB825 \uB514\uB809\uD130\uB9AC\uB294 `generated/texts/`\uC785\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uC9C0\uC815\uD55C \uD14D\uC2A4\uD2B8\uB97C TouchGFX\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD14D\uC2A4\uD2B8 \uD615\uC2DD\uC73C\uB85C \uBAA8\uB450 \uBCC0\uD658\uD569\uB2C8\uB2E4. \uD615\uC2DD\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypedText`), `\uB77C\uB294 \uAC1D\uCCB4\uB85C \uB798\uD551\uB429\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TypedText`), `\uB294 \uD14D\uC2A4\uD2B8 \uB0B4\uC6A9 \uC790\uCCB4\uC640 \uD14D\uC2A4\uD2B8 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB97C \uACB0\uD569\uD55C \uAC1D\uCCB4\uC785\uB2C8\uB2E4. \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0\uB294 \uD14D\uC2A4\uD2B8 \uAE00\uAF34\uACFC \uAE00\uAF34 \uD06C\uAE30, \uADF8\uB9AC\uACE0 \uAE00\uAF34 \uAE00\uB9AC\uD504\uB97C \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1 \uCC98\uB9AC\uD560 \uB54C \uC0AC\uC6A9\uB418\uB294 \uD53D\uC140\uB2F9 \uBE44\uD2B8(bpp)\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/texts/include/texts/TextKeysAndLanguages.hpp`), ` \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uB294\uB370, \uC774 \uD30C\uC77C\uC5D0\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uBAA8\uB4E0 \uD14D\uC2A4\uD2B8\uB97C \uCC38\uC870\uD558\uB294 \uC5F4\uAC70\uD615 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TEXTS`), `\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5F4\uAC70\uD615\uC758 \uD56D\uBAA9\uB4E4\uC740 \uBAA8\uB450 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uAC01 \uD14D\uC2A4\uD2B8 \uB178\uB4DC\uC5D0 \uAE30\uB85D\uB41C ID\uC5D0\uC11C \uC0DD\uC131\uB418\uC9C0\uB9CC T_\uAC00 \uC811\uB450\uC0AC\uB85C \uBD99\uC73C\uBA74\uC11C \uB300\uBB38\uC790\uB85C \uBCC0\uD658\uB429\uB2C8\uB2E4. \uC774\uB807\uAC8C \uBCC0\uD658\uB41C \uC5F4\uAC70\uD615 \uAC12\uB4E4\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C TypedTexts\uB97C \uCD08\uAE30\uD654\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextKeysAndLanguages.hpp`), ` \uD30C\uC77C\uC5D0\uB3C4 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uC874\uC7AC\uD558\uB294 \uBAA8\uB4E0 \uC5B8\uC5B4\uB97C \uC9C0\uC815\uD558\uB294 \uC5F4\uAC70\uD615 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LANGUAGES`), `\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB984\uC740 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC5B8\uC5B4 \uC5F4\uC5D0 \uC788\uB294 \uC774\uB984\uACFC \uB3D9\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "generated/texts/include/texts/TextKeysAndLanguages.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* DO NOT EDIT THIS FILE */
/* This file is autogenerated by the text-database code generator */

#ifndef TEXT_KEYS_AND_LANGUAGES_HPP
#define TEXT_KEYS_AND_LANGUAGES_HPP


typedef enum {
    GB,
    DE,
    NUMBER_OF_LANGUAGES
} LANGUAGES;


typedef enum {
    T_TEMPERATURE_READOUT,
    T_TEMPERATURE_HEADLINE,
    NUMBER_OF_TEXT_KEYS
} TEXTS;

#endif /* TEXT_KEYS_AND_LANGUAGES_HPP */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "translations"
  }), `\uBC88\uC5ED`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uD14D\uC2A4\uD2B8 \uBC88\uC5ED\uC744 \uB0B4\uBCF4\uB0B4\uACE0 \uAC00\uC838\uC624\uB294 \uC6CC\uD06C\uD50C\uB85C\uC5D0 \uB300\uD574 \uAC04\uB7B5\uD788 \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 \uAC1C\uBC1C\uC790\uAC00 \uD14D\uC2A4\uD2B8\uAC00 \uD3EC\uD568\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC1C\uBC1C\uD588\uB294\uB370 \uC774 \uD14D\uC2A4\uD2B8\uB97C \uC5EC\uB7EC \uAC1C\uC758 \uC5B8\uC5B4\uB85C \uBC88\uC5ED\uD574\uC57C \uD55C\uB2E4\uACE0 \uAC00\uC815\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uB294 \uC678\uBD80 \uBC88\uC5ED\uAE30\uB97C \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uD14D\uC2A4\uD2B8\uB97C \uB0B4\uBCF4\uB0B4\uC57C \uBC88\uC5ED\uAE30\uB85C \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C\uC790\uB294 \uD14D\uC2A4\uD2B8\uB97C \uB0B4\uBCF4\uB0B4\uAE30 \uC704\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/tools/textconvert/translations.rb`), `\uC5D0 \uC788\uB294 \uC0C8\uB85C\uC6B4 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uB3C4\uAD6C\uB294 TouchGFX \uD658\uACBD\uC5D0\uC11C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC5B4\uB5A4 \uB3C5\uB9BD \uBCC0\uC218 \uC5C6\uC774 \uB3C4\uAD6C\uB97C \uC2E4\uD589\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB3C4\uC6C0\uB9D0 \uD14D\uC2A4\uD2B8\uAC00 \uCD9C\uB825\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb
Export and import the text database for translation using e.g. Excel

Usage: translations.rb {export|import} assets/texts/texts.xml translations.xlsx [language]*

Export: Will create the "translations.xlsx" by extracting the texts for
        all languages from the given assets/texts/texts.xml

Import: Will merge the text translations from "translations.xlsx" into
        the given assets/texts/texts.xml. Only the actual texts are
        imported, not alignment and text direction.

If no languages are specified, all languages will be handled,
otherwise only the specified languages are imported/exported.
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 \uC5B8\uC5B4\uB97C \uB0B4\uBCF4\uB0B4\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb export assets/texts/texts.xml translations.xlsx
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC601\uC5B4, \uD504\uB791\uC2A4\uC5B4, \uC544\uB78D\uC5B4 \uB4F1 \uD2B9\uC815 \uC5B8\uC5B4\uB9CC \uB0B4\uBCF4\uB0B4\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb export assets/texts/texts.xml translations.xlsx English French Arabic
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C Excel \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/framework/tools/textconvert/translations.xlsx`), `\uB97C \uBC88\uC5ED\uAE30\uC640 \uACF5\uC720\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/spreadsheet-empty-translations.png",
    mdxType: "Figure"
  }, "Excel \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8 - \uBE44\uC5B4 \uC788\uB294 \uBC88\uC5ED"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "Excel \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uAC00 \uC544\uB2CC TouchGFX Designer\uC5D0\uC11C \uC5B8\uC5B4\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "Excel \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uAC00 \uC544\uB2CC TouchGFX Designer\uC5D0\uC11C \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC640 \uC815\uB82C \uBC0F \uBC29\uD5A5\uC744 \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "Excel \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uC5D0\uC11C \uBC88\uC5ED\uC774 \uD3EC\uD568\uB41C \uC140\uB9CC \uD3B8\uC9D1\uD560 \uC218 \uC788\uB3C4\uB85D \uC7A0\uAE08\uC774 \uD574\uC81C\uB429\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 \uD574\uB2F9 Texts View\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/texts-view-empty-translations.png",
    mdxType: "Figure"
  }, "Texts View - \uBE44\uC5B4 \uC788\uB294 \uBC88\uC5ED"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC88\uC5ED\uC774 \uC644\uB8CC\uB418\uC5B4 \uAC1C\uBC1C\uC790\uC5D0\uAC8C \uBC18\uD658\uB418\uBA74 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB85C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/spreadsheet-updated-translations.png",
    mdxType: "Figure"
  }, "Excel \uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8 - \uC5C5\uB370\uC774\uD2B8\uB41C \uBC88\uC5ED"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 \uC5B8\uC5B4\uB97C \uAC00\uC838\uC624\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb import assets/texts/texts.xml translations.xlsx
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB791\uC2A4\uC5B4, \uC544\uB78D\uC5B4 \uB4F1 \uD2B9\uC815 \uC5B8\uC5B4\uB9CC \uAC00\uC838\uC624\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `$ translations.rb import assets/texts/texts.xml translations.xlsx French Arabic
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uCD94\uAC00\uB41C \uBC88\uC5ED\uACFC \uD568\uAED8 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/texts-view-updated-translations.png",
    mdxType: "Figure"
  }, "Texts View - \uC5C5\uB370\uC774\uD2B8\uB41C \uBC88\uC5ED"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "recommendations"
  }), `\uAD8C\uC7A5 \uC0AC\uD56D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC88\uC5ED\uC744 \uC704\uD574 \uD14D\uC2A4\uD2B8\uB97C \uB0B4\uBCF4\uB0C8\uB2E4\uAC00 \uB2E4\uC2DC \uAC00\uC838\uC62C \uB54C\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uAE30\uC900\uC744 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uD558\uC5EC \uAC00\uC838\uC624\uB294 \uACFC\uC815\uC5D0\uC11C \uC7A0\uC7AC\uC801 \uCDA9\uB3CC\uC774 \uC77C\uC5B4\uB098\uC9C0 \uC54A\uB3C4\uB85D \uD574\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 Git \uAC19\uC740 \uBC84\uC804 \uAD00\uB9AC \uC2DC\uC2A4\uD15C\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uB2E4\uBA74 \uB0B4\uBCF4\uB0B4\uAE30 \uC804\uC5D0 \uBE0C\uB79C\uCE58\uB97C \uB9CC\uB4E4\uACE0, \uC5EC\uAE30\uC5D0 \uC644\uB8CC\uB41C \uD14D\uC2A4\uD2B8 \uBC88\uC5ED\uC744 \uCD94\uAC00\uD558\uC5EC \uC5C5\uB370\uC774\uD2B8\uD55C \uB2E4\uC74C \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBE0C\uB79C\uCE58\uB97C \uB2E4\uC2DC \uBA54\uC778 \uBE0C\uB79C\uCE58\uB85C \uBCD1\uD569\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uADF8\uB9BC\uC740 \uC544\uB78D\uC5B4 \uBC88\uC5ED\uACFC \uD504\uB791\uC2A4\uC5B4 \uBC88\uC5ED\uC744 \uBC88\uC5ED \uBE0C\uB79C\uCE58\uB85C \uAC00\uC838\uC654\uB2E4\uAC00 \uB2E4\uC2DC \uBA54\uC778 \uBE0C\uB79C\uCE58\uB85C \uBCD1\uD569\uD558\uB294 \uC608\uB97C \uB098\uD0C0\uB0B8 \uAC83\uC785\uB2C8\uB2E4. \uB610\uD55C \uBC88\uC5ED \uBE0C\uB79C\uCE58\uC5D0\uC11C \uC791\uC5C5\uC774 \uC9C4\uD589 \uC911\uC77C \uB54C \uBA54\uC778 \uBE0C\uB79C\uCE58\uC5D0\uC11C \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBCC0\uACBD \uC2DC \uC5B4\uB5BB\uAC8C \uC8FC\uC758\uD574\uC57C \uD558\uB294\uC9C0\uB3C4 \uBCF4\uC5EC\uC8FC\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uBCD1\uD569 \uCDA9\uB3CC\uC774 \uC77C\uC5B4\uB098\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/branch-example.png",
    mdxType: "Figure"
  }, "\uBE0C\uB79C\uCE58 \uC608\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC138 \uAC00\uC9C0 \uACBD\uC6B0\uC5D0 \uBCD1\uD569 \uCDA9\uB3CC\uC774 \uC77C\uC5B4\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBA54\uC778 \uBE0C\uB79C\uCE58\uC5D0 \uC788\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uD14D\uC2A4\uD2B8 ID \uC0AD\uC81C \uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBA54\uC778 \uBE0C\uB79C\uCE58\uC5D0 \uC788\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uD14D\uC2A4\uD2B8 ID \uCD94\uAC00 \uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBA54\uC778 \uBE0C\uB79C\uCE58\uC5D0 \uC788\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uD14D\uC2A4\uD2B8 ID \uBCC0\uACBD \uC2DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "the-font-converter"
  }), `\uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uB294 \uD3F0\uD2B8 \uD30C\uC77C\uC5D0 \uD3EC\uD568\uB41C \uC815\uBCF4\uB97C \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uD3EC\uD568\uB41C \uC815\uBCF4\uC640 \uACB0\uD569\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uD544\uC694\uD55C \uBB38\uC790\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uCD9C\uB825 \uD615\uC2DD\uC740 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uB0B4\uBD80 C++ \uD615\uC2DD\uC744 \uB530\uB985\uB2C8\uB2E4. \uC774 \uB3C4\uAD6C\uB294 \uBE4C\uB4DC \uB3C4\uAD6C \uCCB4\uC778\uC5D0 \uD1B5\uD569\uB418\uC5B4 \uC2DC\uBBAC\uB808\uC774\uD130 \uBE4C\uB4DC \uC2DC \uC790\uB3D9\uC73C\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/font-converter-4.18.png",
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uC5D0\uC11C \uD5C8\uC6A9\uB418\uB294 \uD615\uC2DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TrueType(.ttf)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `OpenType(.otf)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Glyph Bitmap Distribution Format(.bdf).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "Glyph Bitmap Distribution Format \uD3F0\uD2B8(.bdf)\uC758 \uACBD\uC6B0\uC5D0\uB294 \uB80C\uB354\uB9C1\uD558\uC9C0 \uBABB\uD558\uB294 \uD3F0\uD2B8 \uD06C\uAE30\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uC2DC\uD2B8\uC5D0\uC11C \uC9C0\uC815\uD55C \uD06C\uAE30\uAC00 \uD574\uB2F9 \uD3F0\uD2B8\uC640 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uB294 \uC9C0\uC6D0\uB418\uB294 \uD3F0\uD2B8 \uD06C\uAE30\uB97C \uBCF4\uACE0\uD569\uB2C8\uB2E4. \uC774\uB54C\uB294 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uC2DC\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC6D0\uB418\uB294 \uD06C\uAE30 \uC911 \uD558\uB098\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uBA74 \uBB38\uC81C\uAC00 \uD574\uACB0\uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/fonts/`), ` \uD3F4\uB354\uC5D0 \uB123\uAE30\uB9CC \uD558\uBA74 TouchGFX Designer\uC5D0\uC11C \uD3F0\uD2B8\uB97C \uCC38\uC870\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `(TouchGFX Designer \uC2E4\uD589 \uB3C4\uC911 \uD3F0\uD2B8\uAC00 \uCD94\uAC00\uB418\uBA74 \uB2E4\uC2DC \uC2DC\uC791\uD574\uC57C\uB9CC \uD574\uB2F9 \uD3F0\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4)`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C\uB294 Windows\uC5D0 \uC124\uCE58\uB41C \uD3F0\uD2B8\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB4E4 \uD3F0\uD2B8 \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/fonts/`), ` \uD3F4\uB354\uC5D0 \uC790\uB3D9\uC73C\uB85C \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uB294 \uC81C\uACF5\uB418\uB294 \uD3F0\uD2B8\uC5D0\uC11C \uCEE4\uB2DD(kerning) \uC815\uBCF4\uB97C \uC0AC\uC6A9\uD574 \uCEE4\uB2DD\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "TouchGFX\uB97C \uC0AC\uC6A9\uD558\uB354\uB77C\uB3C4 TrueType, OpenType \uB610\uB294 Bitmap \uD3F0\uD2B8\uB97C \uC0C1\uC5C5\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB77C\uC774\uC120\uC2A4\uB97C \uC808\uB300\uB85C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uD3F0\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C\uC758 \uCD9C\uB825 \uB514\uB809\uD130\uB9AC\uB294 generated/fonts/\uC785\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "character-memory-optimization"
  }), `\uBB38\uC790 \uBA54\uBAA8\uB9AC \uCD5C\uC801\uD654`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uC744 \uC904\uC77C \uC218 \uC788\uB3C4\uB85D \uCD5C\uC801\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD2B9\uC815 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uBB38\uC790\uB4E4\uC744 \uBD84\uC11D\uD558\uC5EC \uC0DD\uC131\uB41C \uBB38\uC790(\uB0B4\uBD80 C++ \uD615\uC2DD)\uC758 \uC218\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC2E4\uC81C\uB85C \uC0AC\uC6A9\uB418\uB294 \uBB38\uC790 \uC218\uB85C \uC904\uC5EC\uC11C \uCD5C\uC18C\uD654\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view#text-configuration"
  }), `Text Configuration`), `\uC5D0\uC11C \uD14D\uC2A4\uD2B8\uB97C \uB2E4\uC2DC \uB9E4\uD551\uD558\uB294 \uC635\uC158\uC744 \uD65C\uC131\uD654\uD558\uC5EC \uACF5\uD1B5 \uC811\uBBF8\uC0AC\uB97C \uC0AC\uC6A9\uD558\uB294 \uD14D\uC2A4\uD2B8\uB97C \uC555\uCD95\uD568\uC73C\uB85C\uC368 \uD14D\uC2A4\uD2B8 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "wildcards"
  }), `\uC640\uC77C\uB4DC\uCE74\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB7F0\uD0C0\uC784 \uAC12\uC744 \uD14D\uC2A4\uD2B8\uC758 \uC77C\uBD80\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uB370, \uC774\uB294 \uD14D\uC2A4\uD2B8\uC5D0\uC11C \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uC9C0\uC815\uD560 \uB54C\uB294 \uC77C\uC815\uD55C \uD615\uC2DD\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<*>`), `\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C *\uB294 \uC720\uC6A9\uD55C \uC120\uD0DD\uC801 \uD14D\uC2A4\uD2B8\uB97C \uB098\uD0C0\uB0B4\uB294 \uAC83\uC73C\uB85C, \uACB0\uACFC\uC801 \uD14D\uC2A4\uD2B8\uC5D0\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8 1\uAC1C\uB9C8\uB2E4 \uCD94\uAC00\uD560 \uC218 \uC788\uB294 \uC640\uC77C\uB4DC\uCE74\uB4DC\uB294 \uCD5C\uB300 2\uAC1C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uC784\uC758 \uD14D\uC2A4\uD2B8\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uBC88\uC5ED\uC740 \uB3D9\uC77C\uD55C \uAC1C\uC218\uC758 \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4. \uC640\uC77C\uB4DC\uCE74\uB4DC \uAC12\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 C++ \uCF54\uB4DC\uC758 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uC0BD\uC785\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC640\uC77C\uB4DC\uCE74\uB4DC \uC0AC\uC6A9 \uC608\uC785\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `The temperature is `, `<`, `insert_temperature`, `>`, `\xB0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD55C \uAC00\uC9C0 \uC54C\uC544\uB450\uC5B4\uC57C \uD560 \uC138\uBD80 \uC0AC\uD56D\uC740 \uBB38\uC790 \uBA54\uBAA8\uB9AC \uCD5C\uC801\uD654(\uC704 \uC139\uC158 \uCC38\uC870)\uB85C \uC778\uD574 \uD2B9\uC815 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0 \uB530\uB77C \uC0DD\uC131\uB418\uB294 \uBB38\uC790\uB294 \uD574\uB2F9 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C \uD14D\uC2A4\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uBB38\uC790\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD3F0\uD2B8 \uC0DD\uC131\uAE30\uC5D0 \uD2B9\uC815 \uBB38\uC790\uB97C \uAC15\uC81C\uB85C \uCD94\uAC00\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uAC01 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB9C8\uB2E4 "`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC640\uC77C\uB4DC\uCE74\uB4DC \uBB38\uC790`), `"\uC640 "`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uBB38\uC790 \uBC94\uC704`), `"\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC640\uC77C\uB4DC\uCE74\uB4DC \uD615\uC2DD `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<*>`), `\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\\<not a wildcard`, `>`), `\uC640 \uAC19\uC774 \uBC31\uB798\uC2DC \uAE30\uD638\uB97C \uC0AC\uC6A9\uD574 \uC774\uC2A4\uCF00\uC774\uD504 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uBB38\uC790 \uD14D\uC2A4\uD2B8 \uADF8\uB300\uB85C "`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `<`, `not a wildcard`, `>`), `"\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-wildcards-in-touchgfx-designer"
  }), `TouchGFX Designer\uC5D0\uC11C \uC640\uC77C\uB4DC\uCE74\uB4DC \uC0AC\uC6A9\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C\uB294 \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uC815\uADDC TextArea\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB85C\uC368 \uC774\uC804\uC5D0\uB294 TextAreaWithOneWildcard/TextAreaWithTwoWildcards \uC704\uC82F\uC5D0\uC11C \uCC98\uB9AC\uD588\uC9C0\uB9CC \uC774\uC81C\uB294 TextArea \uC704\uC82F\uC5D0\uC11C \uC774 \uAE30\uB2A5\uC744 \uD6A8\uACFC\uC801\uC73C\uB85C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC TouchGFX\uC758 \uCF54\uB4DC \uC0DD\uC131 \uBC29\uC2DD\uC740 \uBCC0\uD568\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In TouchGFX Designer you can add Wildcards to TextAreas by simply clicking the '+' button `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Add Wildcard`), ` in properties for the selected TextArea. Click the corresponding '-' button to remove wildcards. \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `The temperature is \xB0`), ` TextArea\uC5D0 \uC628\uB3C4 \uC218\uCE58\uB97C \uCD94\uAC00\uD558\uB294 \uC608\uB294 \uC798 \uC54C\uB824\uC838 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0\uC5D0\uB294 \uC2E4\uC678 \uC628\uB3C4 \uC218\uCE58\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uC0BD\uC785\uD558\uC5EC \uC815\uC801 \uC218\uCE58\uB97C \uD45C\uC2DC\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4 \uC628\uB3C4 \uD310\uB3C5\uC5D0 \uB530\uB77C \uC5C5\uB370\uC774\uD2B8\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD604\uC7AC \uD14D\uC2A4\uD2B8 \uB0B4 \uCEE4\uC11C \uC704\uCE58\uC5D0 \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/adding-wild-card-to-text-area-4.17.png",
    mdxType: "Figure"
  }, "\uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C Text Area \uC704\uC82F\uC5D0 \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC18D\uC131\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `The temperature is `, `<`, `value`, `>`, `\xB0`), ` \uD14D\uC2A4\uD2B8\uAC00, \uADF8\uB9AC\uACE0 \uCE94\uBC84\uC2A4\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `The temperature is  \xB0`), ` \uD14D\uC2A4\uD2B8\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/temperature-wildcard-example.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC5D0\uC11C \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uC0AC\uC6A9\uD55C Text Area \uC704\uC82F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD2B9\uC815 \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uC124\uC815\uD558\uB824\uBA74 \uD574\uB2F9\uD558\uB294 Wildcard \uBC84\uD2BC(\uC774 \uC608\uC2DC\uC5D0\uC11C\uB294 Wildcard 1)\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC55E\uC11C \uCD94\uAC00\uD55C \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C \uD3B8\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C \uC640\uC77C\uB4DC\uCE74\uB4DC \uC5C5\uB370\uC774\uD2B8 \uBC29\uC2DD\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB294\uB370, \uC0AC\uC804 \uC124\uC815\uB41C \uB9AC\uC18C\uC2A4 \uD14D\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uACFC \uB3D9\uC801\uC778 \uB7F0\uD0C0\uC784 \uC0DD\uC131 \uD14D\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB450 \uACBD\uC6B0 \uBAA8\uB450 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uD14D\uC2A4\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. To use an auto-generated text, click the '+' `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Create auto-generated text`), ` or select an existing text. Use a wildcard buffer if dynamic text is needed. Such a buffer is created by selecting the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Use wildcard Buffer`), ` check mark. \uD655\uC778\uB780\uC744 \uC120\uD0DD\uD588\uC73C\uBA74 \uBC84\uD37C\uC758 \uD06C\uAE30(\uBB38\uC790 \uC218)\uB3C4 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uBA54\uBAA8\uB9AC \uD6A8\uC728\uC744 \uB192\uC774\uB824\uBA74 \uC5EC\uAE30\uC11C \uC9C0\uC815\uD558\uB294 \uD06C\uAE30\uB97C \uC2E4\uC81C\uB85C \uD544\uC694\uD55C \uD14D\uC2A4\uD2B8 \uD06C\uAE30\uC5D0 \uCD5C\uB300\uD55C \uAC00\uAE5D\uAC8C \uC77C\uCE58\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4. \uC774\uB54C \uBB38\uC790\uC5F4 \uC885\uACB0 \uBB38\uC790(\u2018\\0\u2019)\uB97C \uC704\uD574 \uACF5\uAC04\uC744 \uD558\uB098 \uB354 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/wildcard-add-auto-generated-text.png",
    mdxType: "Figure"
  }, "Add auto-generated text to wildcard in TouchGFX Designer"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You can also set an initial value for the Wildcard, enabling you to see how the final TextArea could look with a temperature reading:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/wildcard-setup-in-touchgfx-deisgner-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 \uC640\uC77C\uB4DC\uCE74\uB4DC \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-wildcards-in-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uC640\uC77C\uB4DC\uCE74\uB4DC \uC0AC\uC6A9\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC640\uC77C\uB4DC\uCE74\uB4DC\uB294 \uC544\uB798 \uCF54\uB4DC \uC608\uC81C\uC640 \uAC19\uC774 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD574 \uCD94\uAC00\uD558\uAC70\uB098 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Unicode::UnicodeChar`), ` \uBC30\uC5F4\uC744 \uAD00\uB9AC\uD558\uACE0 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "gui/include/gui/some_screen/SomeView.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/widgets/TextAreaWithWildcard.hpp>
...
class SomeView : public View<SomePresenter>
{
  TextAreaWithOneWildcard txt;
  Unicode::UnicodeChar txtBuffer[10];
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "gui/src/some_screen/SomeView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <texts/TextKeysAndLanguages.hpp>

void SomeView::setupScreen()
{
  txt.setTypedText(TypedText(T_TEMPERATURE_READOUT));
  txt.setXY(10, 20);
  txt.setWildcard(txtBuffer);
  add(txt);

  updateTxt(5);
}

void SomeView::updateTxt(int newValue)
{
  Unicode::snprintf(txtBuffer, 10, "%d", newValue);
  txt.invalidate();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "text-placement"
  }), `\uD14D\uC2A4\uD2B8 \uBC30\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 TouchGFX \uC704\uC82F\uC774 \uADF8\uB807\uB4EF\uC774 TextArea\uB294 \uC704\uCE58(X, Y)\uC640 \uD06C\uAE30(\uAC00\uB85C, \uC138\uB85C)\uB97C \uC9C0\uC815\uD558\uC5EC \uC2A4\uD06C\uB9B0\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uAC12\uC740 TouchGFX Designer\uC5D0\uC11C \uC704\uC82F \uC18D\uC131\uC744 \uD1B5\uD574 \uC27D\uAC8C \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC TouchGFX Designer\uC758 \uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1\uC740 TouchGFX\uC758 \uD14D\uC2A4\uD2B8 \uB80C\uB354\uB9C1 \uBC29\uC2DD\uC5D0 \uBE44\uD574 \uD56D\uC0C1 100% \uC815\uD655\uD55C \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C \uC124\uBA85\uD558\uACA0\uC9C0\uB9CC \uD14D\uC2A4\uD2B8\uB97C \uB2E4\uB8F0 \uB54C \uC54C\uACE0 \uC788\uC5B4\uC57C \uD560 \uBA87 \uAC00\uC9C0 \uC138\uBD80 \uC0AC\uD56D\uACFC \uAC00\uB2A5\uC131\uC774 \uB354 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "alignment"
  }), `\uC815\uB82C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea \uB0B4 \uD14D\uC2A4\uD2B8\uB294 \uD14D\uC2A4\uD2B8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uC11C \uC120\uD0DD\uD55C \uD14D\uC2A4\uD2B8 \uD56D\uBAA9\uC5D0 \uB300\uD574 \uC9C0\uC815\uD558\uB294 \uC815\uB82C\uC5D0 \uB530\uB77C \uC815\uB82C\uB429\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8\uB294 TextArea \uC601\uC5ED\uC5D0 \uB300\uD574 \uC815\uB82C\uB429\uB2C8\uB2E4. \uC544\uB798 \uC2A4\uD06C\uB9B0\uC0F7\uC5D0\uC11C \uD30C\uB780\uC0C9\uC73C\uB85C \uAC15\uC870 \uD45C\uC2DC\uB41C \uAC83\uC774 TextArea \uC601\uC5ED\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-left-align.png",
    mdxType: "Figure"
  }, "\uC67C\uCABD \uC815\uB82C \uD14D\uC2A4\uD2B8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-center-align.png",
    mdxType: "Figure"
  }, "\uAC00\uC6B4\uB370 \uC815\uB82C \uD14D\uC2A4\uD2B8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-right-align.png",
    mdxType: "Figure"
  }, "\uC624\uB978\uCABD \uC815\uB82C \uD14D\uC2A4\uD2B8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uD14D\uC2A4\uD2B8 \uC815\uB82C\uC740 TouchGFX Designer\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/texts-view"
  }), `\uD14D\uC2A4\uD2B8 \uBDF0`), `\uC5D0\uC11C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-the-correct-width-and-height-of-a-textarea"
  }), `TextArea\uC758 \uAC00\uB85C \uBC0F \uC138\uB85C\uB97C \uC815\uD655\uD558\uAC8C \uC124\uC815\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\uB294 \uD604\uC7AC \uC120\uD0DD\uD55C \uD14D\uC2A4\uD2B8\uC5D0 \uB530\uB77C \uAC00\uB85C\uC640 \uC138\uB85C\uB97C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC00\uB85C \uBC0F \uC138\uB85C \uC870\uC815\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::resizeToCurrentText()`), ` \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uC5EC \uC218\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "`resizeToCurrentText()`\uB294 \uAC00\uB85C\uC640 \uC138\uB85C\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC5D0\uC11C TextArea\uB97C \uC0C8\uB85C\uC6B4 TypedText\uB85C \uC778\uC2A4\uD134\uC2A4\uD654\uD588\uC744 \uB54C \uC790\uB3D9\uC73C\uB85C \uD638\uCD9C\uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC6B4\uB370/\uC624\uB978\uCABD \uC815\uB82C \uD14D\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD560 \uACBD\uC6B0\uC5D0\uB294 \uD14D\uC2A4\uD2B8\uB97C \uACE0\uC815\uB41C \uC601\uC5ED\uC5D0\uC11C \uAC00\uC6B4\uB370/\uC624\uB978\uCABD\uC73C\uB85C \uC815\uB82C\uD574\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0 \uAC00\uB85C \uBC0F \uC138\uB85C \uAE38\uC774\uB97C \uBCC0\uACBD\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uAC00 \uB300\uBD80\uBD84\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0\uB294 \uAC00\uB85C\uC640 \uC138\uB85C\uB97C \uC218\uB3D9\uC73C\uB85C \uC124\uC815\uD558\uC2ED\uC2DC\uC624. \uADF8 \uBC29\uBC95\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setPosition(x, y, width, height)`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setWidth(width)`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setHeight(height)`), ` \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uB85C \uBC0F/\uB610\uB294 \uC138\uB85C \uAE38\uC774\uAC00 \uB108\uBB34 \uC791\uC544\uC11C \uD14D\uC2A4\uD2B8 \uD06C\uAE30\uC5D0 \uB9DE\uC9C0 \uC54A\uC73C\uBA74 \uD14D\uC2A4\uD2B8\uAC00 \uC798\uB824\uC11C \uC544\uB798\uC640 \uAC19\uC774 \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-cutoff.png",
    mdxType: "Figure"
  }, "TextArea \uC704\uC82F \uD06C\uAE30\uC758 \uACBD\uACC4\uC5D0\uC11C \uC798\uB824 \uBCF4\uC774\uB294 \uD14D\uC2A4\uD2B8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-the-correct-x-and-y-for-a-textarea"
  }), `TextArea\uC758 X \uBC0F Y\uB97C \uC815\uD655\uD558\uAC8C \uC124\uC815\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\uB97C \uC815\uD655\uD55C X \uBC0F Y \uC704\uCE58\uC5D0 \uBC30\uCE58\uD558\uB824\uBA74 \uC0AC\uC6A9\uB41C \uD3F0\uD2B8\uB294 \uBB38\uC790 \uC704\uC5D0 \uB300\uBB38\uC790\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC57D\uAC04\uC758 \uCD94\uAC00 \uAC04\uACA9\uC774 \uC0DD\uAE34\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC54C\uACE0 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.  \uD558\uC9C0\uB9CC \uD14D\uC2A4\uD2B8 \uC704\uC758 \uC815\uD655\uD55C \uAC04\uACA9\uC744 \uBAA8\uB974\uAE30 \uB54C\uBB38\uC5D0 \uC0C1\uB2E8 \uC67C\uCABD \uBAA8\uD241\uC774\uC758 Y \uC704\uCE58\uC5D0 \uB530\uB77C TextArea\uB97C \uBC30\uCE58\uD558\uB294 \uB370 \uB2E4\uC18C \uC5B4\uB824\uC6C0\uC774 \uB530\uB985\uB2C8\uB2E4. \uD55C \uAC00\uC9C0 \uBC29\uBC95\uC740 \uD14D\uC2A4\uD2B8\uB97C \uBC30\uCE58\uD560 \uB54C \uBC18\uB4DC\uC2DC \uD544\uC694\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD558\uB294 \uC704\uCE58\uB97C \uBA3C\uC800 \uC9C0\uC815\uD55C \uB2E4\uC74C \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uBC30\uCE58\uB97C \uAC80\uC0AC\uD558\uC5EC \uC704\uCE58\uB97C \uBBF8\uC138\uD558\uAC8C \uC870\uC815\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC740 \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 \uB9E4\uC6B0 \uAC04\uB2E8\uD574 \uBCF4\uC774\uC9C0\uB9CC \uD5A5\uD6C4 \uD3F0\uD2B8\uB098 \uD3F0\uD2B8 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uC2DC \uC791\uC5C5\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uB354\uC6B1 \uC548\uC815\uC801\uC778 \uBC29\uBC95\uC73C\uB85C \uD14D\uC2A4\uD2B8 \uAE30\uC900\uC120\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uAE30\uC900\uC120\uC774\uB780 \uB300\uBD80\uBD84 \uBB38\uC790\uAC00 \uC704\uB85C \u201C\uC548\uCC29\u201D\uB418\uB294 \uB3D9\uC2DC\uC5D0 \uB0B4\uB9BC \uBB38\uC790(p, j \uB4F1)\uB294 \uBC11\uC73C\uB85C \uBED7\uB294 \uC120\uC744 \uB9D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/texts-and-fonts/text-baseline.png",
    mdxType: "Figure"
  }, "\uD14D\uC2A4\uD2B8 \uAE30\uC900\uC120"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8 \uAE30\uC900\uC120\uC744 \uC124\uC815\uD558\uB824\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setBaselineY(y)`), ` \uB610\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::setXBaselineY(x, y)`), ` \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBA54\uC18C\uB4DC\uC5D0\uC11C\uB294 TextArea\uC758 \uC0C1\uB2E8 \uC67C\uCABD \uBAA8\uD241\uC774\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0, \uCCAB \uBC88\uC9F8 \uD14D\uC2A4\uD2B8 \uB77C\uC778\uC758 \uAE30\uC900\uC120\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uC774\uB54C \uD3F0\uD2B8 \uD06C\uAE30\uC640 \uAC04\uACA9\uC744 \uACE0\uB824\uD558\uBBC0\uB85C, \uADF8\uC5D0 \uB9DE\uAC8C TextArea\uC758 Y \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C\uB294 \uAE30\uC900\uC120 \uAE30\uB2A5\uC774 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. TouchGFX Designer \uCE94\uBC84\uC2A4\uB97C \uC0AC\uC6A9\uD558\uBA74 TextArea \uC704\uC82F\uC744 \uC27D\uAC8C \uBC30\uCE58\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC774\uBA70, \uC774\uC5D0 \uB530\uB77C \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C\uB9CC \uAE30\uC900\uC120 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "setBaselineY\uB97C \uD638\uCD9C\uD558\uB824\uBA74 TextArea\uC5D0\uC11C TypedText\uB97C \uC124\uC815\uD574\uC57C \uD558\uB294\uB370, \uADF8 \uC774\uC720\uB294 \uD3F0\uD2B8\uC5D0 \uB530\uB77C \uB2E4\uB974\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB610\uD55C TextAreas TypedText\uB97C \uD3F0\uD2B8 \uB610\uB294 \uD3EC\uD2B8 \uD06C\uAE30\uAC00 \uB2E4\uB978 \uAC83\uC73C\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB3C4 `setBaselineY`\uB97C \uB2E4\uC2DC \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "automatic-wrapping-of-long-text-lines"
  }), `\uAE34 \uD14D\uC2A4\uD2B8 \uB77C\uC778\uC5D0 \uB300\uD55C \uC790\uB3D9 \uB798\uD551`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC04\uD639 TextArea\uC5D0 \uC7A5\uBB38\uC758 \uD14D\uC2A4\uD2B8\uAC00 \uD3EC\uD568\uB418\uC5B4\uC57C \uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC7A5\uBB38\uC758 \uD14D\uC2A4\uD2B8\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uD55C \uC904\uB85C \uC791\uC131\uB418\uBA70, TextArea\uB97C \uBC97\uC5B4\uB098\uB294 \uD14D\uC2A4\uD2B8\uB294 \uBAA8\uB450 \uC798\uB9AC\uAC8C \uB429\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uACE0 \uD14D\uC2A4\uD2B8\uB97C \uAC04\uACA9\uC5D0\uC11C \uB798\uD551 \uCC98\uB9AC\uD558\uC5EC \uBA87 \uC904\uB85C \uCC44\uC6B0\uB3C4\uB85D \uB9AC\uD50C\uB85C\uC6B0\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD638\uCD9C\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myTextArea.setWideTextAction(WIDE_TEXT_WORDWRAP); // Default is WIDE_TEXT_NONE
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "available-wide-text-actions"
  }), `\uC0AC\uC6A9 \uAC00\uB2A5\uD55C Wide Text \uC561\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_NONE`), `: \uC544\uBB34\uAC83\uB3C4 \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. TextArea\uC758 \uAC00\uB85C \uAE38\uC774\uC5D0\uC11C \uBC97\uC5B4\uB098\uB294 \uD14D\uC2A4\uD2B8\uB294 \uB3C4\uC911\uC5D0 \uC784\uC758 \uBB38\uC790\uC5D0\uC11C \uC798\uB824\uC11C \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_WORDWRAP`), `: \uB2E8\uC5B4 \uC0AC\uC774\uC5D0\uC11C \uB798\uD551 \uCC98\uB9AC\uB418\uC5B4 \uC5B4\uB514\uB4E0\uC9C0 \uC904\uC784\uD45C\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4("Very long t...").`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_WORDWRAP_ELLIPSIS_AFTER_SPACE`), `: \uB2E8\uC5B4 \uC0AC\uC774\uC5D0\uC11C \uB798\uD551 \uCC98\uB9AC\uB418\uC5B4 \uAC04\uACA9 \uC774\uD6C4\uC5D0 \uD55C\uD574 \uC5B4\uB514\uB4E0\uC9C0 \uC904\uC784\uD45C\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4("Very long t...").`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_CHARWRAP`), `: \uB450 \uBB38\uC790 \uC0AC\uC774\uC5D0\uC11C \uB798\uD551 \uCC98\uB9AC\uB418\uC5B4 \uC911\uAD6D\uC5B4\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uAC83\uCC98\uB7FC \uC5B4\uB514\uB4E0\uC9C0 \uC904\uC784\uD45C\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `WIDE_TEXT_CHARWRAP_DOUBLE_ELLIPSIS`), `: \uB450 \uBB38\uC790 \uC0AC\uC774\uC5D0\uC11C \uB798\uD551 \uCC98\uB9AC\uB418\uC5B4 \uC911\uAD6D\uC5B4\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uAC83\uCC98\uB7FC \uC5B4\uB514\uB4E0\uC9C0 \uC774\uC911 \uC904\uC784\uD45C\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/namespacetouchgfx#ad7afabd7637aed4278f7e26434b860c7",
    mdxType: "Link"
  }, "WideTextAction \uC5F4\uAC70\uD615\uC5D0 \uB300\uD55C API \uCC38\uC870")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB807\uAC8C \uD558\uBA74 TextArea\uC5D0 \uC138\uB85C \uBC29\uD5A5\uC73C\uB85C \uACF5\uAC04\uC774 \uB354 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Designer\uC5D0\uC11C TextArea\uC758 \uC138\uB85C \uAE38\uC774\uB97C \uB298\uB9AC\uAC70\uB098, \uB2E4\uC74C\uACFC \uAC19\uC774 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uACF5\uAC04\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myTextArea.setWidth(200);
myTextArea.resizeHeightToCurrentText(); // Will set height by wrapping text at 200px long lines
myTextArea.invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E8, \uD14D\uC2A4\uD2B8 \uC601\uC5ED \uD06C\uAE30\uB97C \uC904\uC774\uB294 \uACBD\uC6B0\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myTextArea`), ` \uD06C\uAE30\uB97C \uC870\uC815\uD558\uAE30 \uC804\uC5D0 \uBA3C\uC800 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myTextArea.invalidate()`), ` \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC0C8\uB85C\uC6B4 \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC758 \uD06C\uAE30\uAC00 \uC791\uC544\uC11C \uC644\uC804\uD788 \uAC00\uB9AC\uC9C0 \uBABB\uD574 \uC774\uC804 \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC758 \uC77C\uBD80\uAC00 \uACC4\uC18D \uBCF4\uC774\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "switching-language"
  }), `\uC5B8\uC5B4 \uBCC0\uACBD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uB2E4\uC218\uC758 \uC5B8\uC5B4 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uD604\uC7AC \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uC0AC\uC6A9 \uC911\uC778 \uC5B8\uC5B4\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Texts::setLanguage`), ` \uC815\uC801 \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uC5EC \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Texts::setLanguage(GB);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `GB`), ` \uAC12\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#the-text-converter"
  }), `\uD14D\uC2A4\uD2B8 \uBCC0\uD658 \uB3C4\uAD6C`), ` \uC139\uC158\uC5D0 \uC788\uB294 \uC608\uC81C\uC640 \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextKeysAndLanguages.hpp`), ` \uD30C\uC77C\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `LANGUAGES`), ` \uC5F4\uAC70\uD615\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uBA74 \uD14D\uC2A4\uD2B8\uB97C \uD45C\uC2DC\uD558\uB294 \uC704\uC82F\uC774 \uBAA8\uB450 \uBB34\uD6A8\uD654\uB418\uBA70(\uB610\uB294 \uC804\uCCB4 \uC2A4\uD06C\uB9B0\uC774 \uBB34\uD6A8\uD654\uB428) \uC0C8\uB86D\uAC8C \uC120\uD0DD\uD55C \uC5B8\uC5B4\uB85C \uD14D\uC2A4\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `TouchGFX Designer\uC5D0\uC11C \uC5B8\uC5B4\uB97C \uBCC0\uACBD\uD560 \uACBD\uC6B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 \uBC88\uC5ED\uC5D0 \uB300\uD55C \uD14C\uC2A4\uD2B8\uB97C \uD65C\uC131\uD654\uD558\uC5EC \uC5B8\uC5B4\uB97C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC5B8\uC5B4 \uC804\uD658\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view#general"
  }), `\uAD6C\uC131 \uBDF0\uC758 \uC77C\uBC18 \uC139\uC158`), `\uC5D0\uC11C \uC218\uD589\uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Selected Language`), ` \uC635\uC158 \uBCC0\uACBD\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC2DC\uC791 \uC5B8\uC5B4\uB9CC \uBC14\uAFD4\uC8FC\uBA74 \uB429\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);