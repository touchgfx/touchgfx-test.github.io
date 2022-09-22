"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6972],{

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

/***/ 48868:
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
  title: "\u7F16\u8BD1& \u70E7\u5F55"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "id": "development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "title": "\u7F16\u8BD1& \u70E7\u5F55",
  "description": "",
  "source": "@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/compiling-and-flashing.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "compiling-and-flashing",
    "title": "\u7F16\u8BD1& \u70E7\u5F55"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\u6A21\u62DF\u5668",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/simulator"
  },
  "next": {
    "title": "\u8C03\u8BD5",
    "permalink": "/4.20/zh-CN/docs/development/ui-development/working-with-touchgfx/debugging"
  }
};
const assets = {};


const toc = [{
  value: "\u7F16\u8BD1TouchGFX\u5E94\u7528\u7A0B\u5E8F",
  id: "compiling-touchgfx-applications",
  level: 2
}, {
  value: "\u9762\u5411PC\u6A21\u62DF\u5668\u8FDB\u884C\u7F16\u8BD1",
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
  value: "\u9762\u5411\u76EE\u6807\u786C\u4EF6\u8FDB\u884C\u7F16\u8BD1",
  id: "compiling-for-target-hardware",
  level: 3
}, {
  value: "\u70E7\u5F55STM32\u8BC4\u4F30\u5957\u4EF6",
  id: "flashing-stm32-evaluation-kits",
  level: 2
}, {
  value: "GCC\u4E0ETouchGFX Designer",
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
  value: "\u70E7\u5F55\u81EA\u5B9A\u4E49\u786C\u4EF6",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u672C\u8282\u63CF\u8FF0\u5982\u4F55\u5B8C\u6210\u4ECETouchGFX\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u5230\u7A0B\u5E8F\u6267\u884C\u8FD9\u4E00\u8FC7\u7A0B\uFF0C\u5373\u5982\u4F55\u5728\u7279\u5B9A\u7684\u8BBE\u7F6E\u4E2D\u8FDB\u884C\u7F16\u8BD1\u548C\u70E7\u5F55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "compiling-touchgfx-applications"
  }), `\u7F16\u8BD1TouchGFX\u5E94\u7528\u7A0B\u5E8F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5F53\u7F16\u8BD1\u4E00\u4E2ATouchGFX\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u6709\u4E24\u4E2A\u9009\u9879\uFF1A\u9762\u5411PC\u6A21\u62DF\u5668\u8FDB\u884C\u7F16\u8BD1\uFF0C\u6216\u9762\u5411\u76EE\u6807\u786C\u4EF6\u8FDB\u884C\u7F16\u8BD1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiling-for-pc-simulator"
  }), `\u9762\u5411PC\u6A21\u62DF\u5668\u8FDB\u884C\u7F16\u8BD1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u9762\u5411PC\u6A21\u62DF\u5668\u7F16\u8BD1\u9879\u76EE\u65F6\u6709\u4E24\u4E2A\u9009\u9879\uFF1AGCC\u548CVisual Studio\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), ` \u8FD9\u4E24\u4E2A\u9009\u9879\u59CB\u7EC8\u53EF\u7528\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u7531TouchGFX Designer\u751F\u6210\u7684\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "gcc"
  }), `GCC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Makefile\u7684\u4F4D\u7F6E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<touchgfx_application_root_folder>/simulator/gcc/Makefile`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5305\u542B\u4E00\u4E2AMinGW\u73AF\u5883\uFF0C\u8BE5\u73AF\u5883\u9884\u88C5\u4E86\u4E00\u4E2AGCC\u7F16\u8BD1\u5668\u548CGNU Make\uFF0C\u53EF\u4EE5\u8F7B\u677E\u6267\u884C\u9762\u5411PC\u6A21\u62DF\u5668\u751F\u6210\u7684Makefile\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Environment\u53EF\u4EE5\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat`), `\u542F\u52A8\uFF0C\u6216\u8005\u4ECE\u6DFB\u52A0\u5230Windows\u542F\u52A8\u83DC\u5355\u7684\u5FEB\u6377\u65B9\u5F0F\uFF08\u540D\u4E3A\u201CTouchGFX x.y.z Environment\u201D\uFF0C\u5176\u4E2Dx\u3001y\u548Cz\u63CF\u8FF0\u7248\u672C\u53F7\uFF09\u542F\u52A8\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u542F\u52A8TouchGFX Environment\u5E76\u5BFC\u822A\u5230TouchGFX Application\u6839\u6587\u4EF6\u5939\u540E\uFF0C\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u7684\u7B80\u5355\u547D\u4EE4\u4EE5\u751F\u6210\u4E00\u4E2Asimulator.exe\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f simulator/gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u7136\u540E\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u4ECETouchGFX Environment\u542F\u52A8\u6A21\u62DF\u5668\u53EF\u6267\u884C\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `./build/bin/simulator.exe
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E5F\u53EF\u4EE5\u4ECETouchGFX Designer\u7F16\u8BD1\u548C\u542F\u52A8PC\u6A21\u62DF\u5668\uFF0C\u65B9\u6CD5\u662F\u4F7F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/main-window#run-simulator",
    mdxType: "Link"
  }, `Run Simulator`), `\u547D\u4EE4\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "visual-studio"
  }), `Visual Studio`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u8981\u4F7F\u7528Visual Studio\u7F16\u8BD1PC Simulator\uFF0C\u53EA\u9700\u4F7F\u7528Visual Studio\u6253\u5F00\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<touchgfx_application_root_folder>/simulator/msvs/Application.sln`), `\u7684\u5DF2\u751F\u6210\u89E3\u51B3\u65B9\u6848\u6587\u4EF6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u53EF\u4EE5\u76F4\u63A5\u4ECEVisual Studio\u542F\u52A8PC \u6A21\u62DF\u5668\uFF0C\u542F\u7528`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "debugging"
  }), `\u4EE3\u7801\u8C03\u8BD5`), `\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5728\u8FD0\u7528GCC\u6216Visual Studio\u8FDB\u884C\u7F16\u8BD1\u4E4B\u524D\uFF0C\u4ECETouchGFX Designer\u8FD0\u884C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/main-window#generate-code",
    mdxType: "Link"
  }, "Generate"), "\u547D\u4EE4\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compiling-for-target-hardware"
  }), `\u9762\u5411\u76EE\u6807\u786C\u4EF6\u8FDB\u884C\u7F16\u8BD1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5BF9\u4E8E\u57FA\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../introduction/getting-started#application-template--ui-template"
  }), `TouchGFX\u677F\u5361\u8BBE\u7F6E`), `\u7684\u5E94\u7528\u7A0B\u5E8F\u6765\u8BF4\uFF0C\u9762\u5411STM32\u8BC4\u4F30\u5957\u4EF6\u8FDB\u884C\u9879\u76EE\u7F16\u8BD1\u662F\u975E\u5E38\u7B80\u5355\u7684\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u4E2ATouchGFX\u677F\u5361\u8BBE\u7F6E\u5305\u542B\u9762\u5411GCC\u3001STM32CubeIDE\u3001IAR\u548CKeil\u7684\u9879\u76EE\u6587\u4EF6\uFF1A`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
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
  }, `<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>.uvprojx`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\u9ED8\u8BA4\u8BBE\u7F6E\u7684\u6D3B\u52A8\u5DE5\u5177\u94FE\u4E3ASTM32CubeIDE\u3002 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u8BF7\u6CE8\u610F\uFF01\u6240\u6709\u9879\u76EE\u6587\u4EF6\u4E0D\u4F1A\u540C\u65F6\u51FA\u73B0\u3002 \u751F\u6210\u7684\u9879\u76EE\u6587\u4EF6\u53D6\u51B3\u4E8E\u5728STM32CubeMX\u4E2D\u9009\u62E9\u7684\u5DE5\u5177\u94FE`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u5305\u542B\u4E00\u4E2AMinGW\u73AF\u5883\uFF0C\u8BE5\u73AF\u5883\u9884\u88C5\u4E86\u9762\u5411Arm \u548CGNU Make\u7684GNU\u5D4C\u5165\u5F0F\u5DE5\u5177\u94FE\uFF0C\u53EF\u4EE5\u8F7B\u677E\u6267\u884C\u6240\u5305\u542B\u7684\u9762\u5411\u76EE\u6807\u786C\u4EF6\u7684Makefile\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Environment\u53EF\u4EE5\u4ECE`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat`), `\u542F\u52A8\uFF0C\u6216\u8005\u4ECE\u6DFB\u52A0\u5230Windows\u542F\u52A8\u83DC\u5355\u7684\u5FEB\u6377\u65B9\u5F0F\u201CTouchGFX x.y.z Environment\u201D\u542F\u52A8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5728\u542F\u52A8TouchGFX Environment\u5E76\u5BFC\u822A\u5230\u9879\u76EE\u6839\u6587\u4EF6\u5939\u540E\uFF0C\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u7684\u7B80\u5355\u547D\u4EE4\uFF0C\u9762\u5411\u76EE\u6807\u786C\u4EF6\u8FDB\u884C\u9879\u76EE\u7F16\u8BD1\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f gcc/Makefile
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\u5728\u8FD0\u7528GCC\u3001STM32CubeIDE\u3001IAR\u6216Keil\u8FDB\u884C\u7F16\u8BD1\u4E4B\u524D\uFF0C\u4ECETouchGFX Designer\u8FD0\u884C", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../designer-user-guide/main-window#generate-code",
    mdxType: "Link"
  }, "Generate"), "\u547D\u4EE4\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-stm32-evaluation-kits"
  }), `\u70E7\u5F55STM32\u8BC4\u4F30\u5957\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u4E3A\u9879\u76EE\u57FA\u4E8E\u9884\u5148\u5B8C\u6210\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../introduction/getting-started#application-template--ui-template"
  }), `TouchGFX\u677F\u5361\u8BBE\u7F6E`), `\uFF0C\u5C06\u9879\u76EE\u70E7\u5F55\u5230STM32\u8BC4\u4F30\u5957\u4EF6\u662F\u975E\u5E38\u8F7B\u677E\u7684\u3002`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u6BCF\u4E2A\u9879\u76EE\u5728\u6784\u5EFA\u4E4B\u540E\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u53EF\u4EE5\u901A\u8FC7`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stsw-link004.html"
  }), `ST Link Utility`), `\u6216`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubeprog.html"
  }), `STM32CubeProgrammer`), `\u5237\u5199\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u56E0\u6B64\uFF0C\u5FC5\u987B\u5B89\u88C5\u8FD9\u4E9B\u5DE5\u5177\uFF0C\u624D\u80FD\u8FDB\u884C\u70E7\u5F55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5EFA\u8BAE\u5C06\u8FD9\u4E9B\u5DE5\u5177\u5B89\u88C5\u5230\u9ED8\u8BA4\u4F4D\u7F6E\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ST Link Utility\u9ED8\u8BA4\u5B89\u88C5\u4F4D\u7F6E\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/Program Files (x86)/STMicroelectronics/STM32 ST-LINK Utility/ST-LINK Utility`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeProgrammer\u9ED8\u8BA4\u5B89\u88C5\u4F4D\u7F6E\uFF1A`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/Program Files/STMicroelectronics/STM32Cube/STM32CubeProgrammer`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "TouchGFX\u677F\u5361\u8BBE\u7F6E\u4E0D\u63D0\u4F9B\u4EFB\u4F55flash loader\uFF0C\u7528\u4E8E\u76F4\u63A5\u4ECEIAR\u3001Keil\u3001STM32CubeIDE\u6216\u5176\u4ED6IDE\u8FDB\u884C\u70E7\u5F55\u3002"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "gcc--touchgfx-designer"
  }), `GCC\u4E0ETouchGFX Designer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Makefile\uFF08\u5305\u542B\u5728\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/gcc/MakeFile`), `\u7684TouchGFX\u677F\u4EF6\u8BBE\u7F6E\u4E2D\uFF09\u5185\u7F6E\u4E00\u6761\u70E7\u5F55\u547D\u4EE4\uFF08\u5982\u4E0B\u6240\u793A\uFF09\uFF0C\u4F7F\u7528ST Link Utility\u6216STM32CubeProgrammer\uFF08\u53D6\u51B3\u4E8EAT\uFF09\u6765\u5237\u5199 STM32\u8BC4\u4F30\u5957\u4EF6\u3002 \u4E5F\u53EF\u4EE5\u4F7F\u7528\u684C\u9762\u7248\u70E7\u5F55\u5DE5\u5177\uFF0C\u901A\u8FC7\u751F\u6210\u7684.hex\u6587\u4EF6\u70E7\u5F55\u677F\u5361\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f gcc/Makefile flash
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex\u6587\u4EF6\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/TouchGFX/build/bin/target.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u4E5F\u53EF\u4EE5\u53EA\u5199\u5165\u5185\u90E8flash\u5B58\u50A8\u5668\uFF0C\u4ECE\u800C\u8DF3\u8FC7\u5916\u90E8flash\u5B58\u50A8\u5668\u3002 \u5982\u679C\u60A8\u6709\u5927\u91CF\u7684\u56FE\u7247\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u70E7\u5F55\u65F6\u95F4\u3002 \u4F46\u662F\uFF0C\u60A8\u9700\u8981\u786E\u4FDD\u81EA\u4ECE\u4E0A\u6B21\u5199\u5165\u5916\u90E8flash\u5B58\u50A8\u5668\u4EE5\u6765\uFF0C\u5916\u90E8flash\u5B58\u50A8\u5668\u7684\u5185\u5BB9\u6CA1\u6709\u6539\u53D8\u3002 \u5982\u679C\u5916\u90E8flash\u5B58\u50A8\u5668\u7684\u5185\u5BB9\u5DF2\u7ECF\u6539\u53D8\uFF0C\u800C\u53C8\u4E0D\u91CD\u65B0\u70E7\u5F55\uFF0C\u60A8\u4F1A\u770B\u5230\u5947\u602A\u7684\u884C\u4E3A\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u540C\u65F6\u91CD\u65B0\u70E7\u5F55\u5185\u90E8\u548C\u5916\u90E8flash\u5B58\u50A8\u5668\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `make -f gcc/Makefile intflash
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex\u6587\u4EF6\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/TouchGFX/build/bin/intflash.hex`), `\u4E2D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u677F\u4EF6\u8BBE\u7F6E\u540C\u6837\u4E3ATouchGFX Designer\u63D0\u4F9B\u4E86\u914D\u7F6E\uFF0C\u4EE5\u4FBF\u80FD\u591F`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/main-window#run-target"
  }), `Run Target\u547D\u4EE4`), `\u70E7\u5F55\u9879\u76EE\u3002 \u88ABTouchGFX Designer\u7528\u4E8E\u8FDB\u884C\u70E7\u5F55\u7684\u547D\u4EE4\u53EF\u4EE5\u5728TouchGFX Designer\u4E2D`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view"
  }), `\u914D\u7F6E\u89C6\u56FE`), `\u7684`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/config-view#build"
  }), `\u6784\u5EFA\u90E8\u5206`), `\u770B\u89C1\u5E76\u8986\u76D6\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "stm32cubeide"
  }), `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u677F\u5361\u8BBE\u7F6E\u4F7F\u7528STM32CubeIDE\u8F93\u51FA\u7684.elf\u6587\u4EF6\u652F\u6301\u901A\u8FC7STM32CubeProgrammer\u5BF9\u7528STM32CubeIDE\u7F16\u8BD1\u7684\u9879\u76EE\u8FDB\u884C\u70E7\u5F55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.elf\u6587\u4EF6\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/STM32CubeIDE/Debug/<STM32_evaluation_kit_name>.elf`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `e.g. C:/TouchGFXProjects/MyApplication/STM32CubeIDE/Debug/STM32F746G_DISCO.elf`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "iar"
  }), `IAR`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u677F\u5361\u8BBE\u7F6E\u4F7F\u7528IAR\u8F93\u51FA\u7684.hex\u6587\u4EF6\u652F\u6301\u901A\u8FC7STM32CubeProgrammer\u5BF9\u7528IAR\u7F16\u8BD1\u7684\u9879\u76EE\u8FDB\u884C\u70E7\u5F55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex\u6587\u4EF6\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/EWARM/<STM32_evaluation_kit_name>/Exe/<STM32_evaluation_kit_name>.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\u4F8B\u5982\uFF0CC:/TouchGFXProjects/MyApplication/EWARM/STM32F469I-DISCO/STM32F469I-DISCO.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "keil"
  }), `Keil`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\u677F\u5361\u8BBE\u7F6E\u4F7F\u7528Keil\u8F93\u51FA\u7684.hex\u6587\u4EF6\u652F\u6301\u901A\u8FC7STM32CubeProgrammer\u5BF9\u7528Keil\u7F16\u8BD1\u7684\u9879\u76EE\u8FDB\u884C\u70E7\u5F55\u3002`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.hex\u6587\u4EF6\u4F4D\u4E8E`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>/<STM32_evaluation_kit_name>.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `e.g. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "flashing-custom-hardware"
  }), `\u70E7\u5F55\u81EA\u5B9A\u4E49\u786C\u4EF6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\u5982\u679C\u9700\u8981\u5237\u5199\u7684\u662F\u81EA\u5B9A\u4E49\u786C\u4EF6\uFF0C\u800C\u4E0D\u662FSTM32\u8BC4\u4F30\u5957\u4EF6\u8FD9\u6837\u7684\u9884\u5B9A\u4E49\u786C\u4EF6\u8BBE\u7F6E\uFF0C\u5219\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528STM32CubeProgrammer\u3002 STM32CubeProgrammer\u4E0D\u4E00\u5B9A\u5E26\u6709\u9488\u5BF9\u4F60\u7684\u7279\u5B9A\u5916\u90E8\u5B58\u50A8\u5668\u7684flash\u52A0\u8F7D\u673A\u5236\u3002 \u7136\u800C\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684flash loader\u3002 \u53C2\u9605`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf"
  }), `\u5173\u4E8E\u5982\u4F55\u4E3A\u5916\u90E8\u5B58\u50A8\u5668\u5F00\u53D1\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5668\u7684\u7528\u6237\u624B\u518C`), `\u53EF\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);