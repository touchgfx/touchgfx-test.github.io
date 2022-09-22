"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9258],{

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

/***/ 37841:
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
  id: "09-touch-controller",
  title: "9. Touch Controller",
  sidebar_label: "9. Touch Controller"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/09-touch-controller",
  "id": "development/board-bring-up/how-to/09-touch-controller",
  "title": "9. Touch Controller",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/09-touch-controller.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/09-touch-controller",
  "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/09-touch-controller",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 9,
  "frontMatter": {
    "id": "09-touch-controller",
    "title": "9. Touch Controller",
    "sidebar_label": "9. Touch Controller"
  },
  "sidebar": "docs",
  "previous": {
    "title": "8. Hardware acceleration",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/08-hardware-acceleration"
  },
  "next": {
    "title": "10. Physical Buttons",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/10-physical-buttons"
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
  value: "\uC608\uC0C1\uB300\uB85C \uC131\uB2A5\uC774 \uBC1C\uD718\uB418\uB294\uC9C0 \uC5EC\uBD80",
  id: "performance-is-as-expected",
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
  }), `\uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uC790\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uC0C1\uD638 \uC791\uC6A9\uC744 \uD560 \uC218 \uC788\uC73C\uB824\uBA74 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uD130\uCE58 \uC88C\uD45C\uB97C \uC77D\uC5B4\uC62C \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC774 \uB2E8\uACC4\uC5D0\uC11C \uAC1C\uBC1C\uB41C \uCF54\uB4DC\uB294 \uC774\uD6C4 \uB2E8\uACC4\uC5D0\uC11C TouchGFX \uCD94\uC0C1\uD654 \uACC4\uCE35(Al) \uC744 \uAC1C\uBC1C\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5\uACFC \uAD00\uB828\uC774 \uC5C6\uB2E4\uBA74 \uC774 \uB2E8\uACC4\uB97C \uAC74\uB108\uB6F0\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\uBAA9\uD45C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uC758 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uD130\uCE58 \uC88C\uD45C\uB97C \uC77D\uC5B4\uC62C \uC218 \uC788\uAC8C \uD558\uB294 \uAC83\uC774 \uC774 \uB2E8\uACC4\uC758 \uBAA9\uD45C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uC139\uC158\uC5D0\uC11C \uD655\uC778\uD574\uC57C \uD560 \uC0AC\uD56D\uC785\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC \uBC0F MCU\uC758 \uAD6C\uC131 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `MCU\uB294 I2C \uAC19\uC740 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uC77D\uC5B4\uC62C \uC218 \uC788\uB3C4\uB85D \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC \uB808\uC9C0\uC2A4\uD130\uC758 \uD310\uB3C5 \uAC00\uB2A5 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX \uCD94\uC0C1\uD654 \uACC4\uCE35(Al)\uC740 \uC774 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uD130\uCE58 \uC88C\uD45C\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC77D\uAE30 \uC791\uC5C5\uC774 \uC608\uC0C1\uB300\uB85C \uC218\uD589\uB418\uB294\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uD3F4\uB9C1 \uC2DC\uAC04\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uD3F4\uB9C1\uC5D0 \uB108\uBB34 \uB9CE\uC740 \uC2DC\uAC04\uC774 \uC18C\uC694\uB418\uB294 \uACBD\uC6B0 \uD130\uCE58 \uD3F4\uB9C1\uC744 \uB2E4\uB978 \uC2A4\uB808\uB4DC\uB85C \uC62E\uAE30\uAC70\uB098 \uC778\uD130\uB7FD\uD2B8 \uAE30\uBC18\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC57C \uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\uC804\uC81C \uC870\uAC74`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC7A5\uCC29\uB41C \uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uC77D\uC5B4\uC624\uAE30 \uC704\uD55C \uB4DC\uB77C\uC774\uBC84`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\uC2E4\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uB294 \uB450 \uAC00\uC9C0 \uC694\uC18C\uB85C \uC774\uB8E8\uC5B4\uC838 \uC788\uB294\uB370, \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC640 \uD1B5\uC2E0\uD558\uB3C4\uB85D MCU\uB97C \uAD6C\uC131\uD558\uB294 \uBD80\uBD84\uACFC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC640 \uB370\uC774\uD130\uB97C \uC8FC\uACE0 \uBC1B\uB3C4\uB85D \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uB294 \uBD80\uBD84\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB300\uBD80\uBD84\uC758 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uB294 I2C \uBC84\uC2A4\uC5D0 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. I2C \uD1B5\uC2E0\uC740 STM32CubeMX\uC5D0 Connectivity -> I2C1 \uC544\uB798\uC5D0\uC11C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/touch/cubemx-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "I2C \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB300\uB2E4\uC218\uC758 STM32 MCU\uB4E4\uC774 I2C \uCEE8\uD2B8\uB864\uB7EC\uB97C 1\uAC1C \uC774\uC0C1 \uAC00\uC9C0\uACE0 \uC788\uC73C\uBBC0\uB85C \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uC5F0\uACB0\uB41C \uAC83\uC744 \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624. \uD574\uB2F9 GPIO\uB3C4 \uBC18\uB4DC\uC2DC \uAD6C\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uB97C \uC704\uD55C \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC\uAC00 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCC98\uC74C\uBD80\uD130 \uC0C8\uB85C \uC791\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. MCU\uB97C \uC704\uD55C STM32Cube \uD38C\uC6E8\uC5B4\uC5D0\uB294 I2C \uD1B5\uC2E0\uC744 \uC704\uD55C \uC608\uC2DC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294\uB370, \uC774\uAC83\uC774 \uC2DC\uC791\uC810\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD130\uCE58 \uC88C\uD45C\uB97C \uC5BB\uAE30 \uC704\uD574 \uC77D\uC5B4\uC640\uC57C \uD560 \uB808\uC9C0\uC2A4\uD130\uC758 \uC815\uBCF4\uB294 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC758 \uB370\uC774\uD130 \uC2DC\uD2B8\uC5D0\uC11C \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uAC00\uC7A5 \uBA3C\uC800 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC758 I2C \uC8FC\uC18C\uB97C \uD655\uC778\uD55C \uB2E4\uC74C, \uD14C\uC2A4\uD2B8\uB97C \uC704\uD574 'device id' \uB808\uC9C0\uC2A4\uD130\uB97C \uC77D\uC5B4\uC635\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE30\uBCF8 I2C\uB97C \uC2E4\uD589\uD558\uACE0 \uC788\uB2E4\uBA74 \uCD94\uD6C4\uC5D0 TouchGFX\uC5D0 \uD1B5\uD569\uD560 \uB54C \uD544\uC694\uD55C \uB4DC\uB77C\uC774\uBC84 \uD568\uC218\uB97C \uAC1C\uBC1C\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 \uD130\uCE58\uAC00 \uC788\uC73C\uBA74 true\uB97C, \uC5C6\uC73C\uBA74 false\uB97C \uBC18\uD658\uD558\uBA70 \uC88C\uD45C\uB97C \uC81C\uACF5\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC758 \uCF54\uB4DC \uC608\uC2DC\uC5D0\uB294 myTouchController_GetState \uD568\uC218\uB97C \uD1B5\uD574 \uCD94\uC0C1\uD654\uB418\uACE0 \uC788\uB294 \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC\uC758 \uC815\uBCF4\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    uint16_t x;
    uint16_t y;

    TouchControllerState state;
    if (myTouchController_GetState(&state))
    {
        x = state.touchY;
        y = state.touchX;
        //break point here
    }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uC62C\uBC14\uB978 x, y \uAC12\uC774 \uC218\uC2E0\uB418\uC5C8\uB294\uC9C0 \uB514\uBC84\uAC70\uB97C \uD1B5\uD574 \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA87\uBA87 \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uB294 \uC5EC\uB7EC \uAC1C\uC758 \uD130\uCE58 \uD3EC\uC778\uD2B8\uB97C \uBCF4\uACE0\uD560 \uC218 \uC788\uB294\uB370, TouchGFX\uC5D0\uC11C\uB294 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uAE30\uB2A5\uC774\uBBC0\uB85C \uBB34\uC2DC\uD558\uC154\uB3C4 \uC88B\uC2B5\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0\uB294 \uCCAB \uBC88\uC9F8 \uD130\uCE58 \uD3EC\uC778\uD2B8\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"TouchGFX AL \uAC1C\uBC1C" \uBB38\uC11C\uC758`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-architecture"
  }), `AL(Abstraction Layer)`), `\uC5D0\uB294 \uC774\uB7EC\uD55C \uAC12\uB4E4\uC744 TouchGFX\uC5D0 \uC804\uC1A1\uD558\uB294 \uBC29\uBC95\uC774 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "performance-is-as-expected"
  }), `\uC608\uC0C1\uB300\uB85C \uC131\uB2A5\uC774 \uBC1C\uD718\uB418\uB294\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uB3D9\uC77C\uD55C \uC2A4\uB808\uB4DC\uC5D0\uC11C \uCF54\uB4DC\uAC00 \uC2E4\uD589\uB418\uB294 \uACBD\uC6B0, 1ms \uB0B4\uC5D0 \uD130\uCE58\uB97C \uC0D8\uD50C\uB9C1\uD558\uB294 \uAC83\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC18D\uB3C4\uAC00 \uB9CC\uC871\uC2A4\uB7FD\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC774\uD6C4 \uB2E8\uACC4\uC5D0\uC11C \uCF54\uB4DC\uB97C \uBCC4\uB3C4\uC758 \uC791\uC5C5\uC73C\uB85C \uC62E\uAE30\uB294 \uBC29\uC548\uC744 \uACE0\uB824\uD574\uBCF4\uC2ED\uC2DC\uC624.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);