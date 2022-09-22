"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5855],{

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

/***/ 45178:
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
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93054);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39130);
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
  id: "11-flash-loader",
  title: "11. Flash Loader",
  sidebar_label: "11. Flash Loader"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/11-flash-loader",
  "id": "development/board-bring-up/how-to/11-flash-loader",
  "title": "11. Flash Loader",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/11-flash-loader.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/11-flash-loader",
  "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/11-flash-loader",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 11,
  "frontMatter": {
    "id": "11-flash-loader",
    "title": "11. Flash Loader",
    "sidebar_label": "11. Flash Loader"
  },
  "sidebar": "docs",
  "previous": {
    "title": "10. Physical Buttons",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/10-physical-buttons"
  },
  "next": {
    "title": "TouchGFX AL Development Introduction",
    "permalink": "/4.20/ko/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"
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
  value: "STM32CubeProgrammer\uB97C \uC704\uD55C \uD50C\uB798\uC2DC \uB85C\uB354",
  id: "flash-loader-for-stm32cubeprogrammer",
  level: 3
}, {
  value: "\uC804\uC6A9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAE30\uBC18 \uC194\uB8E8\uC158",
  id: "proprietary-application-based-solution",
  level: 3
}, {
  value: "\uD14C\uC2A4\uD2B8",
  id: "testing",
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
  }), `\uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uB85C\uB529\uD558\uB294 \uAC83\uC744 \uB2E4\uB8F9\uB2C8\uB2E4. \uCEF4\uD30C\uC77C\uB7EC\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 \uD14D\uC2A4\uD2B8, \uD3F0\uD2B8 \uBC0F \uC774\uBBF8\uC9C0\uB97C \uCEF4\uD30C\uC77C\uD558\uACE0 \uC774\uB7EC\uD55C \uB370\uC774\uD130\uB97C \uC774\uC6A9\uD574 binary \uB610\uB294 hex \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774 \uB370\uC774\uD130\uB294 \uBCF4\uD1B5 \uC678\uBD80 \uD50C\uB798\uC2DC\uB85C \uB85C\uB4DC\uB429\uB2C8\uB2E4. \uD55C\uD3B8 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB294 \uCF54\uB4DC\uC6A9\uC73C\uB85C \uC608\uC57D\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C \uB2E8\uACC4\uC5D0\uC11C\uB294 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC774 \uD544\uC694\uD558\uC9C0\uB9CC, \uD50C\uB798\uC2DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC624\uAE30\uB9CC \uD558\uB294 \uB7F0\uD0C0\uC784 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uAC83\uC774 \uC544\uB2D9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC1C\uBC1C \uB2E8\uACC4\uC5D0\uC11C\uB294 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC774 \uD544\uC694\uD558\uC9C0\uB9CC, \uD50C\uB798\uC2DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC624\uAE30\uB9CC \uD558\uB294 \uB7F0\uD0C0\uC784 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uAC83\uC774 \uC544\uB2D9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeProgrammer\uB97C \uC704\uD55C \uD50C\uB798\uC2DC \uB85C\uB354 \uC791\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC804\uC6A9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAE30\uBC18\uC758 \uC194\uB8E8\uC158 \uC0AC\uC6A9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC678\uBD80 \uD50C\uB798\uC2DC\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uB2E8\uACC4\uB97C \uAC74\uB108\uB701\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\uBAA9\uD45C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD558\uB294 \uB370\uB294 \uB2E4\uC74C\uC758 \uB450 \uAC00\uC9C0 \uBC29\uBC95\uC774 \uC8FC\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC758 \uBAA9\uD45C\uB294 \uC678\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uB85C\uB4DC\uD558\uAE30 \uC704\uD55C \uBA54\uCEE4\uB2C8\uC998\uC744 \uC120\uD0DD \uBC0F \uAC1C\uBC1C\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `\uB370\uC774\uD130\uC758 \uD50C\uB798\uC2F1 \uAC00\uB2A5 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 \uD50C\uB798\uC2DC\uB97C \uC774\uBBF8\uC9C0 \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uC9C0 \uC5EC\uBD80`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\uC804\uC81C \uC870\uAC74`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uC139\uC158\uC5D0\uC11C \uD655\uC778\uD574\uC57C \uD560 \uC0AC\uD56D\uC785\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD50C\uB798\uC2DC \uC815\uBCF4(\uC77C\uBC18\uC801\uC73C\uB85C \uC81C\uC870\uC0AC \uB370\uC774\uD130 \uC2DC\uD2B8\uC758 \uC815\uBCF4)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MCU\uC640 \uC678\uBD80 \uD50C\uB798\uC2DC \uAC04 \uC5F0\uACB0 \uC815\uBCF4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\uC2E4\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash-loader-for-stm32cubeprogrammer"
  }), `STM32CubeProgrammer\uB97C \uC704\uD55C \uD50C\uB798\uC2DC \uB85C\uB354`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubeprog.html"
  }), `STM32CubeProgrammer`), `\uC5D0\uB294 \uB2E4\uC591\uD55C STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uB97C \uC704\uD55C \uD50C\uB798\uC2DC \uB85C\uB354\uAC00 \uD568\uAED8 \uC81C\uACF5\uB429\uB2C8\uB2E4. \uD50C\uB798\uC2DC \uB85C\uB354\uB780, MCU\uC758 RAM\uC5D0 \uB85C\uB4DC\uB418\uC5B4 \uD50C\uB798\uC2DC\uC758 \uD504\uB85C\uADF8\uB798\uBC0D\uC744 \uAC00\uB2A5\uD558\uAC8C \uD558\uB294 \uC18C\uADDC\uBAA8 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD50C\uB798\uC2DC \uB85C\uB354\uB294 2\uAC1C \uD30C\uD2B8\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD50C\uB798\uC2DC\uB85C \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158\uD558\uB294 \uB370 \uD544\uC694\uD55C GPIO \uBC0F \uD50C\uB798\uC2DC \uC778\uD130\uD398\uC774\uC2A4 \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD50C\uB798\uC2DC\uC5D0\uC11C \uC785\uB825\uD558\uB294 \uB370 \uD544\uC694\uD55C \uBA85\uB839\uC5B4 \uC2DC\uD000\uC2A4\uB97C \uC778\uC2DD\uD558\uB294 \uD50C\uB798\uC2DC \uC54C\uACE0\uB9AC\uC998`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBD80\uBD84\uC740 \uAE30\uC874 \uD50C\uB798\uC2DC \uB85C\uB354\uB97C \uD1A0\uB300\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9 \uC911\uC778 \uD50C\uB798\uC2DC\uC5D0 \uB300\uD55C \uD50C\uB798\uC2DC \uB85C\uB354\uB97C \uCC3E\uC744 \uC218 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC774\uAC83\uC744 \uC2DC\uC791\uC810\uC73C\uB85C \uD574\uC11C GPIO \uBD80\uBD84\uC744 \uC218\uC815\uD558\uC2ED\uC2DC\uC624. \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C \uD50C\uB798\uC2DC \uD68C\uB85C\uB97C \uBCF5\uC0AC\uD558\uB294 \uBC29\uBC95\uC73C\uB85C \uD558\uB4DC\uC6E8\uC5B4\uB97C \uC124\uACC4\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uD0A4\uD2B8\uC5D0 \uB300\uD55C \uD50C\uB798\uC2DC \uB85C\uB354\uB97C \uC9C1\uC811 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. This is the way.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `STM32CubeProgrammer`), `\uB97C \uD1B5\uD574 \uC81C\uACF5\uB418\uB294 \uD50C\uB798\uC2DC \uB85C\uB354 \uD504\uB85C\uC81D\uD2B8\uB294 \uC124\uCE58 \uD3F4\uB354`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `(\uBCF4\uD1B5\xA0C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer\\bin\\ExternalLoader)`), `\uC5D0 \uC704\uCE58\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Flash loader projects can also be found on github:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    to: "https://github.com/STMicroelectronics/stm32-external-loader",
    mdxType: "Link"
  }, "STM32 External Flashloaders on GitHub"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "proprietary-application-based-solution"
  }), `\uC804\uC6A9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAE30\uBC18 \uC194\uB8E8\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610 \uB2E4\uB978 \uD574\uACB0\uCC45\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC790\uCCB4\uC5D0 \uD50C\uB798\uC2DC \uB85C\uB529\uC744 \uD3EC\uD568\uC2DC\uD0A4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB0B4\uC5D0 \uD50C\uB798\uC2DC \uAD6C\uC131\uC744 \uC774\uBBF8 \uAC00\uC9C0\uACE0 \uC788\uACE0(\uC5EC\uAE30\uC5D0\uC11C \uB85C\uB4DC\uAC00 \uAC00\uB2A5\uD558\uB3C4\uB85D), \uC774\uC804 \uD14C\uC2A4\uD2B8\uB97C \uD1B5\uD574 \uD50C\uB798\uC2DC\uC5D0 \uBE14\uB85D\uC744 \uAE30\uB85D\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uACE0 \uC788\uC744 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uD50C\uB798\uC2DC \uB370\uC774\uD130\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC804\uC1A1\uD558\uB294 \uBC29\uBC95\uB9CC \uC54C\uBA74 \uB429\uB2C8\uB2E4. \uD55C \uAC00\uC9C0 \uBC29\uBC95\uC740 UART\uB97C \uC774\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uB370\uC774\uD130 \uC2A4\uD2B8\uB9BC\uC744 \uC218\uC2E0\uD558\uACE0 \uD50C\uB798\uC2DC\uC5D0 \uB370\uC774\uD130\uB97C \uBE14\uB85D \uB2E8\uC704\uB85C \uAE30\uB85D\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC2E4\uD589\uB418\uB294 \uB3D9\uC548\uC5D0\uB294 \uD50C\uB798\uC2DC\uAC00 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uB420 \uC218 \uC5C6\uC73C\uBBC0\uB85C \uBCF4\uD1B5 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uD2B9\uBCC4 \uBAA8\uB4DC\uC5D0 \uB4E4\uC5B4\uAC00\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC14\uC774\uD2B8 \uC804\uC1A1\uC744 \uC704\uD55C \uC624\uD508 \uC18C\uC2A4 \uC194\uB8E8\uC158\uC744 \uC778\uD130\uB137\uC5D0\uC11C \uCC3E\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 Y-\uBAA8\uB380 \uD504\uB85C\uD1A0\uCF5C\uC740 \uB370\uC774\uD130\uC5D0 16\uBE44\uD2B8 CRC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "testing"
  }), `\uD14C\uC2A4\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC14\uC774\uD2B8 \uC804\uC1A1\uC744 \uC704\uD55C \uC624\uD508 \uC18C\uC2A4 \uC194\uB8E8\uC158\uC744 \uC778\uD130\uB137\uC5D0\uC11C \uCC3E\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 Y-\uBAA8\uB380 \uD504\uB85C\uD1A0\uCF5C\uC740 \uB370\uC774\uD130\uC5D0 16\uBE44\uD2B8 CRC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC84\uADF8\uB97C \uC870\uAE30\uC5D0 \uCC3E\uC544\uB0B4\uB824\uBA74 \uD50C\uB798\uC2DC \uC804\uCCB4\uB97C \uBA74\uBC00\uD788 \uD14C\uC2A4\uD2B8\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);