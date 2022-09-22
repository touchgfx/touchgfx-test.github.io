"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7057],{

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

/***/ 58491:
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
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37793);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31217);
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
  id: "code-structure",
  title: "\uCF54\uB4DC \uAD6C\uC870"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/software-architecture/code-structure",
  "id": "development/ui-development/software-architecture/code-structure",
  "title": "\uCF54\uB4DC \uAD6C\uC870",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/code-structure.mdx",
  "sourceDirName": "development/ui-development/software-architecture",
  "slug": "/development/ui-development/software-architecture/code-structure",
  "permalink": "/4.20/ko/docs/development/ui-development/software-architecture/code-structure",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "code-structure",
    "title": "\uCF54\uB4DC \uAD6C\uC870"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC2A4\uD06C\uB9B0 \uAC1C\uB150",
    "permalink": "/4.20/ko/docs/development/ui-development/software-architecture/screen-definition-and-mvp"
  },
  "next": {
    "title": "Working with TouchGFX",
    "permalink": "/4.20/ko/docs/category/working-with-touchgfx"
  }
};
const assets = {};





const toc = [{
  value: "\uC0DD\uC131 \uCF54\uB4DC vs \uC0AC\uC6A9\uC790 \uCF54\uB4DC",
  id: "generated-code-vs-user-code",
  level: 2
}, {
  value: "TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uD30C\uC77C",
  id: "files-generated-by-touchgfx-designer",
  level: 2
}, {
  value: "\uC608\uC2DC",
  id: "example",
  level: 2
}, {
  value: "TouchGFX Designer View",
  id: "touchgfx-designer-view",
  level: 3
}, {
  value: "\uACC4\uCE35",
  id: "layers",
  level: 3
}, {
  value: "\uCF54\uB4DC",
  id: "code",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uCF54\uB4DC\uC5D0\uC11C\uBD80\uD130 \uC0AC\uC6A9\uC790\uAC00 \uC791\uC131\uD558\uB294 \uD655\uC7A5 \uCF54\uB4DC\uC5D0 \uC774\uB974\uAE30\uAE4C\uC9C0 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC758 \uAD6C\uC870\uC5D0 \uB300\uD574 \uC124\uBA85\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "generated-code-vs-user-code"
  }), `\uC0DD\uC131 \uCF54\uB4DC vs \uC0AC\uC6A9\uC790 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uCF54\uB4DC\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC791\uC131\uD558\uB294 \uCF54\uB4DC\uC640 \uC644\uC804\uD788 \uBD84\uB9AC\uB429\uB2C8\uB2E4. \uC2E4\uC81C\uB85C \uC0DD\uC131 \uCF54\uB4DC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/gui_generated`), ` \uD3F4\uB354\uC5D0 \uC788\uB294 \uBC18\uBA74, \uC791\uC131 \uCF54\uB4DC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gui`), ` \uD3F4\uB354\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `gui_generated`), ` \uCF54\uB4DC\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4\uB97C \uC704\uD55C \uAE30\uBCF8 \uD074\uB798\uC2A4 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4. \uAE30\uBCF8 \uD074\uB798\uC2A4\uC5D0\uB294 TouchGFX Designer\uC5D0\uC11C \uAD6C\uC131\uB41C \uBAA8\uB4E0 \uC124\uC815 \uCF54\uB4DC\uB97C \uD3EC\uD568\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uD074\uB798\uC2A4 \uB2E4\uC774\uC5B4\uADF8\uB7A8\uC740 \uAC01 \uD074\uB798\uC2A4\uC758 \uAD00\uACC4\uB97C \uB098\uD0C0\uB0B8 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/code-levels.png",
    mdxType: "Figure"
  }, "\uC5D4\uC9C4, \uC0DD\uC131 \uBC0F \uC0AC\uC6A9\uC790 \uD074\uB798\uC2A4\uC758 \uACC4\uCE35 \uAD6C\uC870"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uADF8\uB9BC\uACFC \uAC19\uC774 TouchGFX Designer \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 3\uAC00\uC9C0 \uCF54\uB4DC \uACC4\uCE35\uC73C\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC5D4\uC9C4`), `: \uC5D4\uC9C4 \uD074\uB798\uC2A4\uB294 TouchGFX\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD45C\uC900 \uD074\uB798\uC2A4\uB85C, \uC0DD\uC131 \uD074\uB798\uC2A4\uB97C \uC704\uD55C \uAE30\uBCF8 \uD074\uB798\uC2A4 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC0DD\uC131`), `: \uC0DD\uC131 \uD074\uB798\uC2A4\uC640 \uD574\uB2F9\uD558\uB294 \uD30C\uC77C\uC740 TouchGFX Designer\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uB54C\uB9C8\uB2E4 \uB2E4\uC2DC \uC0DD\uC131\uB429\uB2C8\uB2E4. \uCF54\uB4DC \uC0DD\uC131\uAE30\uAC00 \uB2E4\uC74C \uBC88\uC5D0 \uC2E4\uD589\uB420 \uB54C \uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uBCC0\uACBD\uD588\uB358 \uB0B4\uC6A9\uC744 \uB36E\uC5B4\uC4F0\uAC8C \uB418\uAE30 \uB54C\uBB38\uC5D0 \uC774 \uD074\uB798\uC2A4\uC640 \uD30C\uC77C\uC740 \uC9C1\uC811 \uD3B8\uC9D1\uD558\uC9C0 \uC54A\uC544\uC57C \uD569\uB2C8\uB2E4. \uC774 \uD074\uB798\uC2A4\uB294 \uC0AC\uC6A9\uC790 \uD074\uB798\uC2A4\uB97C \uC704\uD55C \uAE30\uBCF8 \uD074\uB798\uC2A4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC0AC\uC6A9\uC790`), `: \uC0AC\uC6A9\uC790 \uD074\uB798\uC2A4\uB780 \uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uC791\uC131\uD558\uB294 \uCF54\uB4DC\uB97C \uC704\uD55C \uAC83\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uC774 \uACC4\uCE35\uC5D0\uC11C \uC6D0\uD558\uB294 \uCF54\uB4DC\uB97C \uC790\uC720\uB86D\uAC8C \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uD074\uB798\uC2A4\uAC00 \uC5C6\uB294 \uACBD\uC6B0 TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uC9C0\uB9CC \uC808\uB300 \uBCC0\uACBD\uB418\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uD074\uB798\uC2A4\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uC0AC\uC6A9\uC790\uC758 \uC18C\uC720`), `\uC774\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC544\uD0A4\uD14D\uCC98\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC0DD\uC131\uD560 \uC218 \uC788\uB294 \uCF54\uB4DC\uC5D0 \uC81C\uD55C\uC774 \uC5C6\uB2E4\uB294 \uC810\uC5D0\uC11C \uAC1C\uBC29\uC801\uC785\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uAC83(\uC704\uC82F, \uC560\uB2C8\uBA54\uC774\uC158, \uD6A8\uACFC \uB4F1)\uB3C4 \uC0AC\uC6A9\uC790 \uD074\uB798\uC2A4\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uCF54\uB4DC\uB294 \uC0AC\uC6A9\uC790\uAC00 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC124\uACC4\uD558\uB294 \uBC29\uC2DD\uC744 \uC81C\uD55C\uD560 \uC218 \uC5C6\uB3C4\uB85D \uAD6C\uC131\uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "files-generated-by-touchgfx-designer"
  }), `TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uD30C\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C TouchGFX Designer\uB294 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC624\uC9C1`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated`), ` \uD3F4\uB354\uC5D0\uB9CC \uD30C\uC77C\uC744 \uC7AC\uC0DD\uC131\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774 \uD30C\uC77C\uB4E4\uC740 \uB36E\uC5B4\uC4F0\uC774\uAC8C \uB418\uBBC0\uB85C \uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uD3B8\uC9D1\uD574\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4. \uD558\uC9C0\uB9CC TouchGFX Designer\uB294 \uCEF4\uD30C\uC77C\uC5D0 \uD544\uC694\uD558\uC9C0\uB9CC \uB204\uB77D\uB41C \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uAE30\uB3C4 \uD558\uB294\uB370, \uC608\uB97C \uB4E4\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `application.config`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `simulator/main.cpp`), `, \uADF8\uB9AC\uACE0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/images/__designer`), `\uC5D0 \uC788\uB294 \uC2A4\uD0A8 \uC774\uBBF8\uC9C0, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos/__designer`), `\uC5D0 \uC788\uB294 \uBE44\uB514\uC624 \uC0D8\uD50C \uB4F1\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C\uB85C TouchGFX Designer\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC694\uC18C\uB9CC \uC788\uC73C\uBA74 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131, \uCEF4\uD30C\uC77C \uBC0F \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD574 \uC124\uBA85\uD558\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `.touchgfx`), ` \uD30C\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `gui`), ` \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB418\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC(\uC788\uB294 \uACBD\uC6B0)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/images`), ` \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB418\uB294 \uC0AC\uC6A9\uC790 \uC774\uBBF8\uC9C0(\uC788\uB294 \uACBD\uC6B0)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/texts/texts.xml`), ` \uD30C\uC77C\uC5D0 \uD3EC\uD568\uB418\uB294 \uD14D\uC2A4\uD2B8(\uC788\uB294 \uACBD\uC6B0)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/fonts`), ` \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB418\uB294 \uAE00\uAF34(\uC788\uB294 \uACBD\uC6B0)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `assets/videos`), ` \uD3F4\uB354\uC5D0 \uC800\uC7A5\uB418\uB294 \uBE44\uB514\uC624(\uC788\uB294 \uACBD\uC6B0)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "Git\uC640 \uAC19\uC740 \uBC84\uC804 \uAD00\uB9AC \uC2DC\uC2A4\uD15C\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB3C4 \uC2E4\uC81C\uB85C \uC704\uC5D0 \uC5F4\uAC70\uD55C \uD30C\uC77C\uB9CC \uC800\uC7A5\uC18C\uB85C \uCEE4\uBC0B\uD558\uBA74 \uB429\uB2C8\uB2E4. \uB098\uBA38\uC9C0\uB294 TouchGFX Designer \uC790\uCCB4\uC5D0\uC11C \uC0DD\uC131\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "example"
  }), `\uC608\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC5D0\uB294 \uC0DD\uC131 \uCF54\uB4DC\uC640 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uBAA8\uB450 \uC0AC\uC6A9\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uAD00\uD55C \uAC04\uB2E8\uD55C \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC774 \uC608\uC2DC\uB97C \uD1B5\uD574 \uC704\uC5D0\uC11C \uC124\uBA85\uD55C \uB0B4\uC6A9\uC744 \uB354\uC6B1 \uC790\uC138\uD788 \uC54C\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-designer-view"
  }), `TouchGFX Designer View`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC608\uB294 \uC2A4\uD06C\uB9B0\uC774 \uD558\uB098\uBFD0\uC778 \uACBD\uC6B0\uC785\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyScreen`), ` \uC2A4\uD06C\uB9B0\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `box1`), `\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `Button`), ` `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `button1`), `\uC73C\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. \uB610\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `button1`), `\uC744 \uD074\uB9AD\uD588\uC744 \uB54C \uAC00\uC0C1 \uD568\uC218 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor()`), `\uB97C \uD638\uCD9C\uD558\uB294 \uC0C1\uD638\uC791\uC6A9\uC744 \uC124\uC815\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/designer-application-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer \uC560\uD50C\uB9AC\uCF00\uC774\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC84\uD2BC\uC744 \uB204\uB97C \uB54C\uB9C8\uB2E4 \uBC30\uACBD \uBC15\uC2A4\uC758 \uC0C9\uC0C1\uC774 \uC0C8\uB85C\uC6B4 \uC0C9\uC0C1\uC73C\uB85C \uBB34\uC791\uC704\uB85C \uBC14\uB00C\uB3C4\uB85D \uB9CC\uB4E4\uC5B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB3D9\uC791\uC744 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0 \uAD6C\uD604\uD558\uC5EC \uC0AC\uC6A9\uC790 \uC815\uC758 \uCF54\uB4DC\uC758 \uC791\uC131 \uBC29\uBC95\uC744 \uC2DC\uC5F0\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "layers"
  }), `\uACC4\uCE35`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC608\uC5D0\uC11C \uC5F0\uAD00\uB41C \uC5EC\uB7EC \uD074\uB798\uC2A4\uAC00 \uC544\uB798\uC640 \uAC19\uC774 \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/code-levels-detailed.png",
    mdxType: "Figure"
  }, "\uD074\uB798\uC2A4 \uC608\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uADF8\uB9BC\uC5D0\uC11C,`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenViewBase`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendApplicationBase`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendHeapBase`), `\uAC00 \uC0DD\uC131 \uACC4\uCE35\uC5D0 \uC788\uB294\uB370, \uC774\uB294 \uB2E4\uC74C\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `TouchGFX Designer\uC5D0\uC11C \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC0DD\uAE38 \uB54C\uB9C8\uB2E4 \uC774 \uAE30\uBCF8 \uD074\uB798\uC2A4\uB4E4\uC774 \uB2E4\uC2DC \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0AC\uC6A9\uC790\uAC00 \uC774 \uD074\uB798\uC2A4\uB97C \uC9C1\uC811 \uD3B8\uC9D1\uD574\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenView`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenPresenter`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendApplication`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendHeap`), `\uC774 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uACF5\uAC04\uC5D0 \uC0DD\uC131\uB418\uB294\uB370, \uC774\uB294 \uB2E4\uC74C\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774 \uCF54\uB4DC\uB4E4\uC740 TouchGFX Designer\uC5D0\uC11C \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC0DD\uAE30\uB354\uB77C\uB3C4 \uB2E4\uC2DC \uC0DD\uC131\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0AC\uC6A9\uC790\uB294 \uC5EC\uAE30\uC11C \uC0AC\uC6A9\uC790 \uC815\uC758 \uCF54\uB4DC\uB97C \uC790\uC720\uB86D\uAC8C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `box1`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `button1`), ` \uC124\uC815\uC740 \uBAA8\uB450 \uC0DD\uC131\uB41C view \uAE30\uBC18 \uD074\uB798\uC2A4\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `MyScreenViewBase`), `\uC5D0\uC11C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD06C\uB9B0 \uC804\uD658 \uC2DC \uD638\uCD9C\uB418\uB294 \uBAA8\uB4E0 \uD568\uC218\uB294 \uC0DD\uC131\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAE30\uBC18 \uD074\uB798\uC2A4\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendApplicationBase`), `\uC5D0 \uC704\uCE58\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC801\uC815\uB7C9\uC758 \uBA54\uBAA8\uB9AC\uAC00 \uD560\uB2F9\uB418\uB3C4\uB85D \uD558\uB294 \uBAA8\uB4E0 \uAE30\uB85D\uC740 \uC0DD\uC131\uB41C \uD799 \uAE30\uBC18 \uD074\uB798\uC2A4\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `FrontendHeapBase`), `\uC5D0 \uC704\uCE58\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uC790\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD074\uB798\uC2A4\uB97C \uC790\uC720\uB86D\uAC8C \uD3B8\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC704\uC82F\uC744 \uB354 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), ` \uD568\uC218\uB9CC \uC2E4\uD589\uD558\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `box1`), `\uC758 \uC0C9\uC0C1\uC758 \uBCC0\uACBD\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "code"
  }), `\uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `view \uAE30\uBC18 \uCF54\uB4DC\uB97C \uBCF4\uBA74 TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uBC15\uC2A4\uC640 \uBC84\uD2BC\uC5D0 \uB300\uD55C \uC124\uC815\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonCallbackHandler`), `\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), ` \uAC00\uC0C1 \uD568\uC218\uC5D0 \uB300\uD55C \uC124\uC815\uACFC \uD638\uCD9C\uB3C4 \uC788\uC9C0\uB9CC \uC5EC\uAE30\uC11C\uB294 \uC774 \uD568\uC218\uAC00 \uC544\uBB34\uB7F0 \uAE30\uB2A5\uB3C4 \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{27-37}",
    "{27-37}": true
  }), `/*********************************************************************************/
/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/
/*********************************************************************************/
#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>
#include <touchgfx/Color.hpp>
#include "BitmapDatabase.hpp"

MyScreenViewBase::MyScreenViewBase() :
    buttonCallback(this, &MyScreenViewBase::buttonCallbackHandler)
{
    box1.setPosition(0, 0, 800, 480);
    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));

    button1.setXY(155, 106);
    button1.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));
    button1.setAction(buttonCallback);

    add(box1);
    add(button1);
}

void MyScreenViewBase::setupScreen()
{

}

void MyScreenViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)
{
    if (&src == &button1)
    {
        //Interaction1
        //When button1 clicked call virtual function
        //Call setRandomColor
        setRandomColor();
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `view \uAE30\uBC18 \uD074\uB798\uC2A4\uC5D0\uC11C \uD5E4\uB354 \uD30C\uC77C\uC744 \uBCF4\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), ` \uC120\uC5B8\uACFC \uB354\uBD88\uC5B4, \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uD568\uC218\uB97C \uC7AC\uC815\uC758\uD558\uACE0 \uC2E4\uD589\uD558\uB294 \uBC29\uBC95\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{23-26}",
    "{23-26}": true
  }), `/*********************************************************************************/
/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/
/*********************************************************************************/
#ifndef MYSCREENVIEWBASE_HPP
#define MYSCREENVIEWBASE_HPP

#include <gui/common/FrontendApplication.hpp>
#include <mvp/View.hpp>
#include <gui/myscreen_screen/MyScreenPresenter.hpp>
#include <touchgfx/widgets/Box.hpp>
#include <touchgfx/widgets/Button.hpp>

class MyScreenViewBase : public touchgfx::View<MyScreenPresenter>
{
public:
    MyScreenViewBase();
    virtual ~MyScreenViewBase() {}
    virtual void setupScreen();

    /*
     * Virtual Action Handlers
     */
    virtual void setRandomColor()
    {
        // Override and implement this function in MyScreen
    }

protected:
    FrontendApplication& application() {
        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());
    }

    /*
     * Member Declarations
     */
    touchgfx::Box box1;
    touchgfx::Button button1;

private:

    /*
     * Callback Declarations
     */
    touchgfx::Callback<MyScreenViewBase, const touchgfx::AbstractButton&> buttonCallback;

    /*
     * Callback Handler Declarations
     */
    void buttonCallbackHandler(const touchgfx::AbstractButton& src);

};

#endif // MYSCREENVIEWBASE_HPP
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC9C1\uC811 \uC2E4\uD589\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uD5E4\uB354 \uD30C\uC77C\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyScreenView.hpp`), `\uB85C \uC774\uB3D9\uD558\uC5EC \uD568\uC218\uB97C \uC7AC\uC815\uC758\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication/generated/gui_generated/src/my_screen/MyScreenView.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14}",
    "{14}": true
  }), `#ifndef MYSCREENVIEW_HPP
#define MYSCREENVIEW_HPP

#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>
#include <gui/myscreen_screen/MyScreenPresenter.hpp>

class MyScreenView : public MyScreenViewBase
{
public:
    MyScreenView();
    virtual ~MyScreenView() {}
    virtual void setupScreen();
    virtual void tearDownScreen();
    virtual void setRandomColor();
protected:
};

#endif // MYSCREENVIEW_HPP
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyScreenView`), ` cpp \uD30C\uC77C\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setRandomColor`), `\uC758 \uC2E4\uC81C \uB3D9\uC791\uC744 \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MyApplication/gui/src/my_screen/MyScreenView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{19-23}",
    "{19-23}": true
  }), `#include <gui/myscreen_screen/MyScreenView.hpp>
#include <touchgfx/Color.hpp>
#include <stdlib.h>

MyScreenView::MyScreenView()
{

}

void MyScreenView::setupScreen()
{
    MyScreenViewBase::setupScreen();
}

void MyScreenView::tearDownScreen()
{
    MyScreenViewBase::tearDownScreen();
}

void MyScreenView::setRandomColor()
{
    box1.setColor(touchgfx::Color::getColorFromRGB(rand()&0xff, rand()&0xff, rand()&0xff));
    box1.invalidate();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD574 \uBCF4\uBA74 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD560 \uB54C\uB9C8\uB2E4 \uBC30\uACBD \uBC15\uC2A4\uC758 \uC0C9\uC0C1\uC774 \uBB34\uC791\uC704\uB85C \uBC14\uB00C\uBA74\uC11C \uC0DD\uC131 \uCF54\uB4DC\uC640 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uC774\uC6A9\uD574 \uAC04\uB2E8\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uB294 \uB370 \uC131\uACF5\uD55C \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/software-architecture/code-structure/simulator-random-color.gif",
    mdxType: "Figure"
  }, "\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2DC\uC5F0\uD558\uB294 \uC2DC\uBBAC\uB808\uC774\uD130"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "\uBB3C\uB860 TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uCF54\uB4DC \uAE30\uB2A5\uC744 \uAF2D \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uAC83\uC740 \uC544\uB2C8\uC9C0\uB9CC \uC774 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC0C1\uB2F9\uD55C \uC2DC\uAC04\uC744 \uC544\uB084 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD544\uC694\uD55C \uD30C\uC77C\uB9CC \uC9C1\uC811 \uCD94\uAC00\uD574\uC11C \uAE30\uC874\uC758 \uBC29\uC2DD\uC73C\uB85C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), "\uB610\uD55C \uC5EC\uB7EC \uAC00\uC9C0\uB97C \uD63C\uD569\uD574\uC11C \uC870\uD654\uB86D\uAC8C \uC0DD\uC131\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 TouchGFX Designer \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC815\uC758\uD558\uC9C0 \uC54A\uB294 \uC2A4\uD06C\uB9B0\uB3C4 \uB123\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "gotoXYZ"), " \uD568\uC218\uB97C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "FrontendApplication"), " \uD074\uB798\uC2A4\uC5D0 \uCD94\uAC00\uD558\uAC70\uB098 \uC0AC\uC6A9\uC790 \uC2A4\uD06C\uB9B0\uC5D0 \uD544\uC694\uD55C view, presenter \uADF8\uB9AC\uACE0 \uC804\uD658\uC744  ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "FrontendHeap \uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4"), "."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);