"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8394],{

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

/***/ 91501:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93054);
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
  id: "compiling-and-flashing",
  title: "\uCEF4\uD30C\uC77C \uBC0F \uD50C\uB798\uC2F1"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "id": "development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "title": "\uCEF4\uD30C\uC77C \uBC0F \uD50C\uB798\uC2F1",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/compiling-and-flashing.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "compiling-and-flashing",
    "title": "\uCEF4\uD30C\uC77C \uBC0F \uD50C\uB798\uC2F1"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC2DC\uBBAC\uB808\uC774\uD130",
    "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/simulator"
  },
  "next": {
    "title": "\uB514\uBC84\uAE45",
    "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/debugging"
  }
};
const assets = {};


const toc = [{
  value: "TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCEF4\uD30C\uC77C",
  id: "compiling-touchgfx-applications",
  level: 2
}, {
  value: "PC \uC2DC\uBBAC\uB808\uC774\uD130 \uCEF4\uD30C\uC77C",
  id: "compiling-for-pc-simulator",
  level: 3
}, {
  value: "GCC",
  id: "gcc",
  level: 4
}, {
  value: "Visual Studio",
  id: "visual-studio",
  level: 4
}, {
  value: "\uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4 \uCEF4\uD30C\uC77C",
  id: "compiling-for-target-hardware",
  level: 3
}, {
  value: "STM32 \uD3C9\uAC00 \uD0A4\uD2B8 \uD50C\uB798\uC2F1",
  id: "flashing-stm32-evaluation-kits",
  level: 2
}, {
  value: "GCC \uBC0F TouchGFX Designer",
  id: "gcc--touchgfx-designer",
  level: 3
}, {
  value: "STM32CubeIDE",
  id: "stm32cubeide",
  level: 3
}, {
  value: "IAR",
  id: "iar",
  level: 3
}, {
  value: "Keil",
  id: "keil",
  level: 3
}, {
  value: "\uCEE4\uC2A4\uD140 \uD558\uB4DC\uC6E8\uC5B4 \uD50C\uB798\uC2F1",
  id: "flashing-custom-hardware",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC5D0\uC11C\uBD80\uD130 \uD504\uB85C\uADF8\uB7A8 \uC2E4\uD589\uAE4C\uC9C0, \uD2B9\uC815 \uC124\uC815\uC5D0 \uB530\uB978 \uCEF4\uD30C\uC77C \uBC0F \uD50C\uB798\uC2F1 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "compiling-touchgfx-applications"
  }), `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCEF4\uD30C\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uCEF4\uD30C\uC77C\uD560 \uB54C\uB294 PC \uC2DC\uBBAC\uB808\uC774\uD130 \uCEF4\uD30C\uC77C\uACFC \uD0C0\uAC9F \uD558\uB4DC\uC6E8\uC5B4 \uCEF4\uD30C\uC77C\uC758 \uB450 \uAC00\uC9C0 \uC635\uC158\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiling-for-pc-simulator"
  }), `PC \uC2DC\uBBAC\uB808\uC774\uD130 \uCEF4\uD30C\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PC \uC2DC\uBBAC\uB808\uC774\uD130 \uD504\uB85C\uC81D\uD2B8\uB97C \uCEF4\uD30C\uC77C\uD558\uB294 \uB370\uB294 GCC\uC640 Visual Studio\uC758 \uB450 \uAC00\uC9C0 \uC635\uC158\uC774 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \uB450 \uC635\uC158 \uBAA8\uB450 TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "gcc"
  }), `GCC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Makefile\uC758 \uC704\uCE58\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<touchgfx_application_root_folder>/simulator/gcc/Makefile`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 GCC \uCEF4\uD30C\uC77C\uB7EC\uC640 GNU Make\uAC00 \uC0AC\uC804 \uC124\uCE58\uB41C MinGW \uD658\uACBD\uC744 \uC81C\uACF5\uD558\uBBC0\uB85C PC \uC2DC\uBBAC\uB808\uC774\uD130 \uC6A9\uB3C4\uB85C \uC0DD\uC131\uB41C Makefile\uC744 \uC27D\uAC8C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD658\uACBD\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat`), `\uC5D0\uC11C, \uD639\uC740 Windows \uC2DC\uC791 \uBA54\uB274\uC5D0 \uCD94\uAC00\uB418\uB294 \uBC14\uB85C \uAC00\uAE30\uC778 "TouchGFX x.y.z \uD658\uACBD"\uC5D0\uC11C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C x, y, z\uB294 \uBC84\uC804 \uBC88\uD638\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD658\uACBD\uC744 \uC2E4\uD589\uD558\uC5EC TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB8E8\uD2B8 \uD3F4\uB354\uB85C \uC774\uB3D9\uD55C \uD6C4 \uC544\uB798\uC640 \uAC19\uC774 \uAC04\uB2E8\uD55C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uBA74 simulator.exe \uD30C\uC77C\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f simulator/gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C TouchGFX \uD658\uACBD\uC5D0\uC11C \uB2E4\uC74C \uBA85\uB839\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589 \uD30C\uC77C\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `./build/bin/simulator.exe
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PC \uC2DC\uBBAC\uB808\uC774\uD130\uB294 TouchGFX Designer\uC5D0\uC11C\uB3C4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/main-window#run-simulator",
    mdxType: "Link"
  }, `Run Simulator`), ` \uBA85\uB839\uC744 \uC0AC\uC6A9\uD574 \uCEF4\uD30C\uC77C\uD558\uC5EC \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "visual-studio"
  }), `Visual Studio`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Visual Studio\uB97C \uC0AC\uC6A9\uD574 PC \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uCEF4\uD30C\uC77C\uD558\uB824\uBA74 Visual Studio\uB97C \uC0AC\uC6A9\uD558\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<touchgfx_application_root_folder>/simulator/msvs/Application.sln`), ` \uC704\uCE58\uC5D0 \uC0DD\uC131\uB41C \uC194\uB8E8\uC158 \uD30C\uC77C\uC744 \uC5F4\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PC \uC2DC\uBBAC\uB808\uC774\uD130\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "debugging"
  }), `\uCF54\uB4DC \uB514\uBC84\uAE45`), `\uC744 \uD65C\uC131\uD654\uD558\uC5EC Visual Studio\uC5D0\uC11C \uBC14\uB85C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "GCC \uB610\uB294 Visual Studio\uB97C \uC0AC\uC6A9\uD574 \uCEF4\uD30C\uC77C\uD558\uB824\uBA74 \uBA3C\uC800 TouchGFX Designer\uC5D0\uC11C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/main-window#generate-code",
    mdxType: "Link"
  }, "Generate"), " \uBA85\uB839\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiling-for-target-hardware"
  }), `\uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4 \uCEF4\uD30C\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uD3C9\uAC00 \uD0A4\uD2B8 \uD504\uB85C\uC81D\uD2B8 \uCEF4\uD30C\uC77C\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../introduction/getting-started#application-template--ui-template"
  }), `TouchGFX Board Setup`), ` \uAE30\uBC18 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC77C \uB54C \uB9E4\uC6B0 \uAC04\uB2E8\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC01 TouchGFX Board Setup\uC5D0\uB294 GCC, STM32CubeIDE, IAR \uBC0F Keil\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `GCC: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `<project_root_folder>/gcc/MakeFile`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeIDE: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `<project_root_folder>/STM32CubeIDE/.cproject`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IAR: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `<project_root_folder>/EWARM/Project.eww`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Keil: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>.uvprojx`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD65C\uC131 \uB3C4\uAD6C \uCCB4\uC778\uC740 STM32CubeMX\uC5D0\uC11C \uC124\uC815\uB418\uBA70, \uAE30\uBCF8\uC801\uC73C\uB85C STM32CubeIDE\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uB2E8, \uC77C\uBD80 \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC740 \uD55C \uBC88\uC5D0 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC0DD\uC131\uB418\uB294 \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC740 STM32CubeMX\uC5D0\uC11C \uC120\uD0DD\uB41C \uB3C4\uAD6C \uCCB4\uC778\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 GNU Embedded Toolchain for Arm\uACFC GNU Make\uAC00 \uC0AC\uC804 \uC124\uCE58\uB41C MinGW \uD658\uACBD\uC744 \uC81C\uACF5\uD558\uBBC0\uB85C \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4 \uC6A9\uB3C4\uB85C \uD3EC\uD568\uB418\uB294 Makefile\uC744 \uC27D\uAC8C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD658\uACBD\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat`), `\uC5D0\uC11C, \uD639\uC740 Windows \uC2DC\uC791 \uBA54\uB274\uC5D0 \uCD94\uAC00\uB418\uB294 \uBC14\uB85C \uAC00\uAE30\uC778 "TouchGFX x.y.z \uD658\uACBD"\uC5D0\uC11C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD658\uACBD\uC744 \uC2E4\uD589\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8 \uD3F4\uB354\uB85C \uC774\uB3D9\uD55C \uD6C4 \uC544\uB798\uC640 \uAC19\uC774 \uAC04\uB2E8\uD55C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uBA74 \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4 \uD504\uB85C\uC81D\uD2B8\uAC00 \uCEF4\uD30C\uC77C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "GCC, STM32CubeIDE, IAR \uB610\uB294 Keil\uB97C \uC0AC\uC6A9\uD574 \uCEF4\uD30C\uC77C\uD558\uB824\uBA74 \uBA3C\uC800 TouchGFX Designer\uC5D0\uC11C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/main-window#generate-code",
    mdxType: "Link"
  }, "Generate"), " \uBA85\uB839\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-stm32-evaluation-kits"
  }), `STM32 \uD3C9\uAC00 \uD0A4\uD2B8 \uD50C\uB798\uC2F1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uD3C9\uAC00 \uD0A4\uD2B8 \uD504\uB85C\uC81D\uD2B8 \uD50C\uB798\uC2F1\uC740 \uC0AC\uC804 \uC81C\uC791\uB41C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../introduction/getting-started#application-template--ui-template"
  }), `TouchGFX Board Setup`), ` \uAE30\uBC18 \uD504\uB85C\uC81D\uD2B8\uC77C \uB54C \uB9E4\uC6B0 \uAC04\uB2E8\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC01 \uD504\uB85C\uC81D\uD2B8\uB9C8\uB2E4 \uBE4C\uB4DC\uB418\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stsw-link004.html"
  }), `ST Link Utility`), ` \uB610\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubeprog.html"
  }), `STM32CubeProgrammer`), `\uB97C \uC0AC\uC6A9\uD574 \uD50C\uB798\uC2F1\uD560 \uC218 \uC788\uB294 \uBC14\uC774\uB108\uB9AC\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uD50C\uB798\uC2F1\uC744 \uC9C4\uD589\uD558\uB824\uBA74 \uC774 \uB450 \uAC00\uC9C0 \uB3C4\uAD6C\uB97C \uBA3C\uC800 \uC124\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB450 \uB3C4\uAD6C\uB294 \uAE30\uBCF8 \uC704\uCE58\uC5D0 \uC124\uCE58\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST Link Utility\uC758 \uAE30\uBCF8 \uC124\uCE58 \uC704\uCE58: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/Program Files (x86)/STMicroelectronics/STM32 ST-LINK Utility/ST-LINK Utility`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeProgrammer\uC758 \uAE30\uBCF8 \uC124\uCE58 \uC704\uCE58: `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/Program Files/STMicroelectronics/STM32Cube/STM32CubeProgrammer`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX Board Setup\uC740 IAR, Keil, STM32CubeIDE \uB610\uB294 \uAE30\uD0C0 IDE\uC5D0\uC11C \uBC14\uB85C \uD50C\uB798\uC2F1\uD560 \uC218 \uC788\uB294 \uD50C\uB798\uC2DC \uB85C\uB354\uB97C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "gcc--touchgfx-designer"
  }), `GCC \uBC0F TouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 Makefile\uC740`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/gcc/MakeFile`), ` \uC5D0 \uC704\uCE58\uD558\uBA70, \uC5EC\uAE30\uC5D0\uB294 \uC544\uB798\uC640 \uAC19\uC774 ST Link Utility \uB610\uB294 STM32CubeProgrammer(AT\uC5D0 \uB530\uB77C \uB2E4\uB984)\uB97C \uC0AC\uC6A9\uD574 STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uB97C \uD50C\uB798\uC2F1\uD558\uB294 flash \uBA85\uB839\uC774 \uB0B4\uC7A5\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uBB3C\uB860 \uB370\uC2A4\uD06C\uD1B1 \uBC84\uC804 \uD50C\uB798\uC2DC \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD574 .hex \uD30C\uC77C\uB85C \uBCF4\uB4DC\uB97C \uD50C\uB798\uC2F1\uD558\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f gcc/Makefile flash
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex \uD30C\uC77C\uC758 \uC704\uCE58\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/TouchGFX/build/bin/target.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0\uB9CC \uB370\uC774\uD130\uB97C \uC791\uC131\uD558\uACE0 \uC678\uBD80 \uD50C\uB798\uC2DC\uB97C \uAC74\uB108\uB6F0\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uD2B9\uD788 \uC774\uBBF8\uC9C0\uAC00 \uB9CE\uC744 \uB54C \uC774\uB7EC\uD55C \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD50C\uB798\uC2DC \uC2DC\uAC04\uC744 \uD06C\uAC8C \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uB9C8\uC9C0\uB9C9\uC5D0 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC791\uC131\uD55C \uC774\uD6C4\uB85C \uC678\uBD80 \uD50C\uB798\uC2DC\uC758 \uB0B4\uC6A9\uC774 \uBC14\uB00C\uC9C0 \uC54A\uC558\uB294\uC9C0 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4. \uB9CC\uC57D \uBC14\uB00C\uC5C8\uB294\uB370\uB3C4 \uB2E4\uC2DC \uD50C\uB798\uC2F1\uD558\uC9C0 \uC54A\uC73C\uBA74 \uC774\uC0C1\uD55C \uB3D9\uC791\uC774 \uC77C\uC5B4\uB098\uAC8C \uB429\uB2C8\uB2E4. \uC774\uB54C\uB294 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC640 \uC678\uBD80 \uD50C\uB798\uC2DC\uB97C \uBAA8\uB450 \uD50C\uB798\uC2F1\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f gcc/Makefile intflash
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex \uD30C\uC77C\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/TouchGFX/build/bin/intflash.hex`), `\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\uC740 TouchGFX Designer\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/main-window#run-target"
  }), `Run Target \uBA85\uB839`), `\uC744 \uD1B5\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uD50C\uB798\uC2F1\uD560 \uC218 \uC788\uB294 \uAD6C\uC131\uB3C4 \uC81C\uACF5\uD569\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C \uD50C\uB798\uC2F1\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC774 \uBA85\uB839\uC740 TouchGFX Designer\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view"
  }), `Config View`), `\uC5D0 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view#build"
  }), `Build Section`), `\uC5D0\uC11C \uD655\uC778 \uBC0F \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubeide"
  }), `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\uC740 STM32CubeProgrammer\uB97C \uD1B5\uD574 STM32CubeIDE\uC5D0\uC11C \uCD9C\uB825\uB418\uB294 .elf \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD574 \uCEF4\uD30C\uC77C\uB41C \uD504\uB85C\uC81D\uD2B8\uC758 \uD50C\uB798\uC2F1\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.elf \uD30C\uC77C\uC758 \uC704\uCE58\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/STM32CubeIDE/Debug/<STM32_evaluation_kit_name>.elf`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC608\uB97C \uB4E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. C:/TouchGFXProjects/MyApplication/STM32CubeIDE/Debug/STM32F746G_DISCO.elf`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "iar"
  }), `IAR`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\uC740 STM32CubeProgrammer\uB97C \uD1B5\uD574 IAR\uC5D0\uC11C \uCD9C\uB825\uB418\uB294 .hex \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD574 \uCEF4\uD30C\uC77C\uB41C \uD504\uB85C\uC81D\uD2B8\uC758 \uD50C\uB798\uC2F1\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex \uD30C\uC77C\uC758 \uC704\uCE58\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/EWARM/<STM32_evaluation_kit_name>/Exe/<STM32_evaluation_kit_name>.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC608\uB97C \uB4E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. C:/TouchGFXProjects/MyApplication/EWARM/STM32F469I-DISCO/STM32F469I-DISCO.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "keil"
  }), `Keil`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Board Setup\uC740 STM32CubeProgrammer\uB97C \uD1B5\uD574 Keil\uC5D0\uC11C \uCD9C\uB825\uB418\uB294 .hex \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD574 \uCEF4\uD30C\uC77C\uB41C \uD504\uB85C\uC81D\uD2B8\uC758 \uD50C\uB798\uC2F1\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex \uD30C\uC77C\uC758 \uC704\uCE58\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>/<STM32_evaluation_kit_name>.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC608\uB97C \uB4E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-custom-hardware"
  }), `\uCEE4\uC2A4\uD140 \uD558\uB4DC\uC6E8\uC5B4 \uD50C\uB798\uC2F1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0 \uD50C\uB798\uC2F1\uD574\uC57C \uD558\uB294 \uB300\uC0C1\uC774 STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC640 \uAC19\uC774 \uC0AC\uC804 \uC815\uC758\uB41C \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131\uC774 \uC544\uB2CC \uCEE4\uC2A4\uD140 \uD558\uB4DC\uC6E8\uC5B4\uB77C\uACE0 \uD574\uB3C4 STM32CubeProgrammer\uB97C \uACC4\uC18D \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. STM32CubeProgrammer\uB294 \uD2B9\uC815 \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uD544\uC694\uD55C \uD50C\uB798\uC2DC \uB85C\uB529 \uBA54\uCEE4\uB2C8\uC998\uC744 \uD56D\uC0C1 \uC81C\uACF5\uD558\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uCEE4\uC2A4\uD140 \uD50C\uB798\uC2DC \uB85C\uB354\uB294 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf"
  }), `\uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uD544\uC694\uD55C \uCEE4\uC2A4\uD140 \uB85C\uB354 \uAC1C\uBC1C \uC0AC\uC6A9\uC790 \uB9E4\uB274\uC5BC`), `\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);