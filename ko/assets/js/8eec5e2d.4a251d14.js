"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1792],{

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

/***/ 46247:
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
  id: "hardware-selection-external-memories",
  title: "\uC678\uBD80 \uBA54\uBAA8\uB9AC"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "id": "development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "title": "\uC678\uBD80 \uBA54\uBAA8\uB9AC",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-external-memories.mdx",
  "sourceDirName": "development/hardware-selection/hardware-components",
  "slug": "/development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "hardware-selection-external-memories",
    "title": "\uC678\uBD80 \uBA54\uBAA8\uB9AC"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uB514\uC2A4\uD50C\uB808\uC774",
    "permalink": "/4.20/ko/docs/development/hardware-selection/hardware-components/hardware-selection-display"
  },
  "next": {
    "title": "\uAC1C\uBC1C \uC18C\uAC1C",
    "permalink": "/4.20/ko/docs/development/board-bring-up/board-introduction"
  }
};
const assets = {};


const toc = [{
  value: "\uBE44\uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC",
  id: "non-volatile-memories",
  level: 2
}, {
  value: "NOR \uD50C\uB798\uC2DC",
  id: "nor-flash",
  level: 3
}, {
  value: "\uC9C1\uB82C NOR \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC",
  id: "serial-nor-flash-memories",
  level: 4
}, {
  value: "NOR \uC2F1\uAE00, \uB4C0\uC5BC, \uCFFC\uB4DC \uBC0F \uC625\uD0C0 \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC",
  id: "nor-single-dual-quad-octo-flash-memories",
  level: 5
}, {
  value: "\uBCD1\uB82C NOR \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC",
  id: "parallel-nor-flash-memories",
  level: 4
}, {
  value: "NAND \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC",
  id: "nand-flash-memories",
  level: 3
}, {
  value: "eMMC \uBA54\uBAA8\uB9AC",
  id: "emmc-memories",
  level: 3
}, {
  value: "\uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC",
  id: "volatile-memories",
  level: 2
}, {
  value: "SRAM",
  id: "sram",
  level: 3
}, {
  value: "SDRAM",
  id: "sdram",
  level: 3
}, {
  value: "PSRAM",
  id: "psram",
  level: 3
}, {
  value: "\uCD94\uAC00 \uBA54\uBAA8\uB9AC",
  id: "additional-memories",
  level: 3
}, {
  value: "\uC678\uBD80 RAM \uBC00\uB3C4 \uC120\uD0DD",
  id: "selection-of-external-ram-density",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uCC55\uD130\uC5D0\uC11C\uB294 \uB0B4\uC7A5\uD615 GUI\uB97C \uC704\uD55C \uC678\uBD80 \uBA54\uBAA8\uB9AC\uB97C \uC120\uD0DD\uD560 \uB54C \uB3C4\uC6C0\uC774 \uB420\uB9CC\uD55C \uB0B4\uC6A9\uC744 \uC911\uC810\uC801\uC73C\uB85C \uC0B4\uD3B4\uBD05\uB2C8\uB2E4. \uC774 \uCC55\uD130\uB97C \uC77D\uAE30 \uC804\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../preliminary-considerations"
  }), `\uC0AC\uC804 \uACE0\uB824 \uC0AC\uD56D`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "hardware-selection-mcu"
  }), `MCU`), `\uB97C \uC77D\uC5B4\uBCF4\uBA74 \uC801\uD569\uD55C \uC678\uBD80 \uBA54\uBAA8\uB9AC\uB97C \uC120\uD0DD\uD560 \uB54C \uC911\uC694\uD558\uAC8C \uACE0\uB824\uD574\uC57C \uD560 \uC694\uC778\uC744 \uD30C\uC545\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX GUI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uB54C\uB294 \uD504\uB808\uC784 \uBC84\uD37C(\uB4E4), \uBE44\uD2B8\uB9F5, \uAE00\uAF34, \uBC88\uC5ED \uB4F1\uC744 \uC800\uC7A5\uD558\uAE30 \uC704\uD55C \uC678\uBD80 \uBA54\uBAA8\uB9AC\uAC00 \uD544\uC694\uD55C \uACBD\uC6B0\uAC00 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX GUI\uB97C \uC2E4\uD589\uD558\uB294 \uB370 \uC678\uBD80 \uBA54\uBAA8\uB9AC\uAC00 \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uAC83\uC740 \uC544\uB2C8\uC9C0\uB9CC, \uD504\uB808\uC784 \uBC84\uD37C(\uB4E4)\uB97C \uC800\uC7A5\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uB0B4\uBD80 RAM(MCU \uB0B4)\uC774\uB098 \uC678\uBD80 RAM\uC774 \uD544\uC694\uD558\uACE0 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uB0B4/\uC678\uBD80 \uD50C\uB798\uC2DC\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uAC1C\uC694\uC5D0\uB294 STM32 MCU\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC678\uBD80 \uBA54\uBAA8\uB9AC\uAC00 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uC2DC\uB85C \uB098\uC640 \uC788\uB294 \uBA54\uBAA8\uB9AC \uC911 \uC77C\uBD80\uB294 \uC9C1\uB82C \uBC0F \uBCD1\uB82C \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uBAA8\uB450 \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/memory-overview.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uBA54\uBAA8\uB9AC \uAC1C\uC694"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB9C8\uB2E4 \uC678\uBD80 \uBA54\uBAA8\uB9AC \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uB2E4\uB974\uBBC0\uB85C \uC11C\uB85C \uB2E4\uB978 \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "non-volatile-memories"
  }), `\uBE44\uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `GUI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBE44\uD718\uBC1C\uC131 \uC2A4\uD1A0\uB9AC\uC9C0(\uD50C\uB798\uC2DC)\uB294 \uC8FC\uB85C \uBE44\uD2B8\uB9F5, \uAE00\uAF34, \uBC88\uC5ED \uBC0F TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC640 \uAC19\uC740 \uADF8\uB798\uD53D \uB370\uC774\uD130 \uC790\uC0B0\uC758 \uC77C\uBD80 \uB610\uB294 \uC804\uCCB4\uB97C \uC800\uC7A5\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uBE44\uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC\uB294 STM32 \uC81C\uD488\uC5D0\uC11C \uC9C0\uC6D0\uB418\uBA70, \uBCD1\uB82C/\uC9C1\uB82C \uBA54\uBAA8\uB9AC\uC640 \uC11C\uB85C \uB2E4\uB978 \uAD6C\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uC720\uD615\uC758 MCU \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/non-volatile-memory-overview.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uBE44\uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uD718\uBC1C\uC131 \uC2A4\uD1A0\uB9AC\uC9C0\uB97C \uC120\uD0DD\uD560 \uB54C\uB294 \uB2E4\uC74C\uC744 \uACE0\uB824\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBC00\uB3C4(\uC6A9\uB7C9)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC778\uD130\uD398\uC774\uC2A4 \uC720\uD615(\uBCD1\uB82C/\uC9C1\uB82C)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `BOM(Bill of Material)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "nor-flash"
  }), `NOR \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR \uD50C\uB798\uC2DC\uB294 \uBA54\uBAA8\uB9AC\uC758 \uC5B4\uB5A4 \uC601\uC5ED\uC774\uB4E0 \uB79C\uB364 \uC561\uC138\uC2A4\uAC00 \uAC00\uB2A5\uD55C \uBE44\uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR \uD50C\uB798\uC2DC\uC758 \uBC94\uC704\uB294 \uBCF4\uD1B5 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `128 Mbits`), ` ~ `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `2 Gbits`), `\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4, \uD574\uC0C1\uB3C4\uAC00 480x320\uC774\uACE0 \uC0C9\uC2EC\uB3C4\uAC00 16 bpp\uC778 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uACBD\uC6B0 \uD480 \uC2A4\uD06C\uB9B0 \uBC30\uACBD \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD558\uB824\uBA74 \uCD5C\uB300 300 Kbytes\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uBC84\uD2BC, \uC2AC\uB77C\uC774\uB354, \uC544\uC774\uCF58, \uC0AC\uC6A9 \uAE00\uAF34, \uC5B8\uC5B4 \uC218 \uB4F1\uC5D0 \uD544\uC694\uD55C \uCD94\uAC00 \uBE44\uD2B8\uB9F5\uC740 \uACE0\uB824\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. 256 Mbits(32MB) NOR \uD50C\uB798\uC2DC\uB294 \uACE0\uC720\uD55C \uD480 \uC2A4\uD06C\uB9B0 \uC774\uBBF8\uC9C0\uB97C \uCD5C\uB300 100\uAC1C\uAE4C\uC9C0 \uC800\uC7A5\uD560 \uC218 \uC788\uC73C\uBA70, \uD544\uC694\uD55C \uADF8\uB798\uD53D \uC790\uC0B0\uC758 \uB098\uBA38\uC9C0\uB97C \uCD94\uAC00\uD558\uBA74 \uC800\uC7A5 \uAC1C\uC218\uAC00 \uC801\uC5B4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR \uD50C\uB798\uC2DC\uB294 \uC678\uBD80 \uD50C\uB798\uC2DC\uAC00 \uC77D\uAE30 \uC791\uC5C5\uC744 \uC704\uD574 \uB0B4\uBD80 \uBA54\uBAA8\uB9AC\uCC98\uB7FC \uBCF4\uC5EC\uC9C0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uBA54\uBAA8\uB9AC \uB9E4\uD551`), ` \uBAA8\uB4DC\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBAA8\uB4DC\uC5D0\uC11C\uB294 CPU\uAC00 \uC815\uC9C0\uB41C \uC800\uC804\uB825 \uBAA8\uB4DC\uC5D0\uC11C\uB3C4 \uC2DC\uC2A4\uD15C \uB9C8\uC2A4\uD130(\uC608: DMA, LTDC, DMA2D, GFXMMU \uB610\uB294 SDMMC)\uAC00 \uBA54\uBAA8\uB9AC\uC5D0 \uC790\uCCB4\uC801\uC73C\uB85C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uBAA8\uBC14\uC77C \uBC0F \uC6E8\uC5B4\uB7EC\uBE14 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uAC00\uC7A5 \uC801\uD569\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uC5D0\uB294 \uB2E4\uC591\uD55C \uC778\uD130\uD398\uC774\uC2A4 \uC635\uC158\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBCD1\uB82C NOR \uD50C\uB798\uC2DC(x8 \uB610\uB294 x16 \uC778\uD130\uD398\uC774\uC2A4 \uD3EC\uD568)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Serial NOR \uD50C\uB798\uC2DC(\uC9C1\uB82C \uBA54\uBAA8\uB9AC \uBC0F \uD558\uC774\uD37C\uBC84\uC2A4 \uD50C\uB798\uC2DC\uB97C \uC704\uD55C \uC2F1\uAE00, \uB4C0\uC5BC, \uCFFC\uB4DC \uBC0F \uC625\uD0C0 \uB370\uC774\uD130 \uB77C\uC778)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "serial-nor-flash-memories"
  }), `\uC9C1\uB82C NOR \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C1\uB82C NOR \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uB294 \uADF8\uB798\uD53D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC800\uC7A5\uACF5\uAC04\uC73C\uB85C \uB110\uB9AC \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC720\uD615\uC758 \uBA54\uBAA8\uB9AC\uC5D0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC7A5\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB192\uC740 \uC8FC\uD30C\uC218`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `PCB(Printed Circuit Board) \uBA74\uC801 \uB2E8\uC21C\uD654 \uBC0F \uCD95\uC18C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC8FC\uC18C \uC9C0\uC815 \uAC00\uB2A5 \uC601\uC5ED\uC774 \uCD5C\uB300 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `256 MB`), `\uC778 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `4`), ` ~ `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `12`), `\uAC1C\uC758 \uD540\uC774 \uD544\uC694\uD568`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h5", __spreadValues({}, {
    "id": "nor-single-dual-quad-octo-flash-memories"
  }), `NOR \uC2F1\uAE00, \uB4C0\uC5BC, \uCFFC\uB4DC \uBC0F \uC625\uD0C0 \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NOR \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uB294 \uB2E4\uC591\uD55C \uB370\uC774\uD130 \uB77C\uC778 \uAD6C\uC131\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2F1\uAE00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB4C0\uC5BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uCFFC\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC625\uD0C0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB370\uC774\uD130 \uB77C\uC778\uC774 \uB354 \uB9CE\uC740 \uC9C1\uB82C NOR \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uB85C \uC804\uD658\uD558\uBA74 \uBA54\uBAA8\uB9AC \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC131\uB2A5\uACFC \uB300\uC5ED\uD3ED\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC9C0\uB9CC, STM32 \uC81C\uD488\uC744 \uC5F0\uACB0\uD558\uB294 \uB370 \uD544\uC694\uD55C \uD540\uC758 \uAC1C\uC218\uAC00 \uB354 \uB9CE\uC544\uC9C0\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC5D0\uB294 \uB370\uC774\uD130 \uB77C\uC778\uC758 \uAC1C\uC218\uC5D0 \uB530\uB978 SPI \uBA54\uBAA8\uB9AC\uC5D0 \uB300\uD55C \uAC1C\uC694\uAC00 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/serial-modes.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uC9C1\uB82C \uC778\uD130\uD398\uC774\uC2A4 \uAC1C\uC694"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "parallel-nor-flash-memories"
  }), `\uBCD1\uB82C NOR \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCD1\uB82C NOR \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uB294 \uC131\uB2A5\uACFC \uAD6C\uC131 \uCE21\uBA74\uC5D0\uC11C \uC9C1\uB82C \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uC640 \uB3D9\uC77C\uD55C \uC7A5\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uBCD1\uB82C NOR \uD50C\uB798\uC2DC\uB294 \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uB85C \uAD6C\uC131\uD560 \uC218 \uC788\uC73C\uBA70 \uADF8\uAC83\uC740 \uB9C8\uCE58 \uB0B4\uBD80 \uBA54\uBAA8\uB9AC\uCC98\uB7FC \uC561\uC138\uC2A4\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uBCD1\uB82C NOR \uD50C\uB798\uC2DC\uC640 \uC9C1\uB82C NOR \uD50C\uB798\uC2DC\uB294 \uD540\uC758 \uAC1C\uC218\uC640 PBC\uC758 \uBCF5\uC7A1\uC131\uC5D0\uC11C \uCC28\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Up to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `47 pins`), ` are needed for the NOR flash memory with up to 24 pins for address and 16 pins for data.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "nand-flash-memories"
  }), `NAND \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NAND \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uB294 \uB300\uB7C9\uC758 \uADF8\uB798\uD53D \uC790\uC0B0\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `\uB354 \uBE60\uB978 \uC4F0\uAE30 \uBC0F \uC9C0\uC6B0\uAE30 \uC791\uC5C5`), `\uC744 \uC694\uD558\uB294 \uADF8\uB798\uD53D \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC801\uD569\uD569\uB2C8\uB2E4. The NAND flash memories cannot be configured in a memory mapped mode and as a consequence, the NAND flash memories are `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `not recommended for code execution`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NAND flash ranges between `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `1 Gbits`), ` to `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `512 Gbits`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `NAND \uD50C\uB798\uC2DC\uB97C \uC0AC\uC6A9\uD560 \uB54C\uB294 RAM\uC5D0\uC11C \uCE90\uC2DC\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uAC00 \uC885\uC885 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD574\uC57C \uD604\uC7AC \uC0AC\uC6A9\uB418\uB294 \uADF8\uB798\uD53D \uC790\uC0B0\uC744 RAM\uC73C\uB85C \uC62E\uAE30\uACE0 \uC774\uB97C \uCE90\uC2DC\uC5D0\uC11C \uB04C\uC5B4\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/nand-flash.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "NAND \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "emmc-memories"
  }), `eMMC \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MMC \uD611\uD68C \uADDC\uACA9\uC778 eMMC(Embedded Multi Media Card)\uB294 \uB9C8\uC2A4\uD130 \uD1B5\uD569 \uCEE8\uD2B8\uB864\uB7EC\uC640 \uB354\uBD88\uC5B4 NAND \uD50C\uB798\uC2DC\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. eMMC\uC758 \uD655\uC2E4\uD55C \uC774\uC810 \uC911 \uD558\uB098\uB294 \uC81C\uC870\uC5C5\uCCB4\uAC00 \uC81C\uD488 \uAC1C\uBC1C\uC758 \uB2E4\uB978 \uBD80\uBD84\uC5D0 \uB354 \uB9CE\uC740 \uC2DC\uAC04\uC744 \uD560\uC560\uD558\uC5EC \uC2DC\uC7A5 \uCD9C\uC2DC \uAE30\uAC04\uC744 \uB2E8\uCD95\uD560 \uC218 \uC788\uB3C4\uB85D \uD328\uD0A4\uC9C0\uC5D0\uC11C \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uC5D0 \uB300\uD55C \uD45C\uC900 \uC778\uD130\uD398\uC774\uC2A4\uC640 \uAD00\uB9AC \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uB294 \uCEE8\uD2B8\uB864\uB7EC\uC758 \uD1B5\uD569\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eMMC flash \uD50C\uB798\uC2DC\uC758 \uBC94\uC704\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `2 Gbits`), ` ~ `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `128 Gbits`), `\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eMMC\uB294 NAND\uC640 NOR\uC5D0 \uBE44\uD574 \uB79C\uB364 \uC77D\uAE30 \uC131\uB2A5\uC774 \uBE44\uAD50\uC801 \uB0AE\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774 \uB79C\uB364 \uC77D\uAE30\uC758 \uC18D\uB3C4 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uCE90\uC2DC\uB97C \uCD94\uAC00\uD574\uC57C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `eMMC \uD50C\uB798\uC2DC \uBA54\uBAA8\uB9AC\uC5D0\uB294 \uB370\uC774\uD130\uC5D0 8\uAC1C, \uC81C\uC5B4\uC5D0 2\uAC1C\uB85C, \uCD1D \uCD5C\uB300 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "p"
  }, `10\uAC1C\uC758 \uD540`), `\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/emmc-flash.png",
    noShadow: true,
    width: "500",
    mdxType: "Figure"
  }, "eMMC \uBA54\uBAA8\uB9AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "volatile-memories"
  }), `\uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC678\uBD80 \uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC\uB294 \uB0B4\uBD80 MCU RAM\uC774 \uBD80\uC871\uD55C \uACBD\uC6B0\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC800\uC7A5\uD558\uB294 \uB370 \uC8FC\uB85C \uC0AC\uC6A9\uB418\uBA70, \uACBD\uC6B0\uC5D0 \uB530\uB77C \uBA54\uBAA8\uB9AC \uB9E4\uD551 \uBAA8\uB4DC\uAC00 \uC544\uB2CC \uD50C\uB798\uC2DC\uC5D0\uC11C \uC790\uC0B0\uC744 \uCE90\uC2F1\uD558\uB294 \uB370\uC5D0\uB3C4 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 GUI\uB97C \uC2E4\uD589\uD558\uB294 \uB0B4\uC7A5\uD615 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uACF5\uD1B5\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 SRAM, SDRAM \uBC0F PSRAM\uC744 \uC911\uC810\uC801\uC73C\uB85C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB2E4\uB978 \uBCC0\uD615 \uBC84\uC804\uB3C4 \uCD9C\uC2DC\uB418\uC5B4 \uC788\uC73C\uBA70, \uBA54\uBAA8\uB9AC \uC81C\uC870\uC0AC\uB4E4\uC740 "\uD558\uC774\uD37C RAM", "IoT RAM", "\uC625\uD0C0 RAM"\uC6A9 \uBA54\uBAA8\uB9AC\uC5D0 \uB300\uD574 \uC11C\uB85C \uB2E4\uB978 \uBA85\uBA85 \uCCB4\uACC4\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uC9C0\uC6D0\uD558\uB294 STM32 MCU\uB97C \uCC3E\uC744 \uC218 \uC788\uB2E4\uB294 \uAC83\uC774 \uACF5\uD1B5\uC810\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/volatile-memory-overview.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uD718\uBC1C\uC131 \uBA54\uBAA8\uB9AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC801\uD569\uD55C \uC678\uBD80 RAM\uC744 \uC120\uD0DD\uD558\uB824\uBA74 \uB2E4\uC74C \uC0AC\uD56D\uC744 \uC5FC\uB450\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBC00\uB3C4(\uC6A9\uB7C9)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC131\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC804\uB825 \uC18C\uBAA8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC778\uD130\uD398\uC774\uC2A4/\uD540 \uC218`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../../../basic-concepts/framebuffer#amount-of-framebuffers"
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "sram"
  }), `SRAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SRAM\uC740 \uC804\uC6D0\uC774 \uACF5\uAE09\uB418\uB294 \uB3D9\uC548 \uBE44\uD2B8 \uB370\uC774\uD130\uB97C \uC720\uC9C0\uD558\uB294 \uC815\uC801 \uB79C\uB364 \uC561\uC138\uC2A4 \uBA54\uBAA8\uB9AC\uC785\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C SRAM\uC740 \uC561\uC138\uC2A4 \uC18D\uB3C4\uAC00 \uB354 \uBE60\uB974\uC9C0\uB9CC DRAM\uBCF4\uB2E4 \uAC00\uACA9\uC774 \uB354 \uBE44\uC2F8\uBA70 \uBC00\uB3C4\uB3C4 \uC791\uC2B5\uB2C8\uB2E4. SRAM\uC740 \uC77C\uBC18\uC801\uC73C\uB85C DRAM\uC5D0 \uBE44\uD574 \uB354 \uBE68\uB9AC \uC561\uC138\uC2A4\uAC00 \uAC00\uB2A5\uD558\uBBC0\uB85C \uC560\uB2C8\uBA54\uC774\uC158\uACFC \uD06C\uAE30 \uC870\uC815, \uD68C\uC804 \uB4F1\uC774 \uB354 \uB9CE\uC774 \uD544\uC694\uD55C GUI\uC5D0 \uC801\uD569\uD569\uB2C8\uB2E4. SRAM\uC740 \uB3D9\uAE30 \uBAA8\uB4DC\uC640 \uBE44\uB3D9\uAE30 \uBAA8\uB4DC\uAC00 \uBAA8\uB450 \uC9C0\uC6D0\uB418\uBA70, \uB3D9\uAE30 \uBAA8\uB4DC\uB294 \uB354 \uB192\uC740 \uB300\uC5ED\uD3ED\uC744 \uC81C\uACF5\uD558\uC9C0\uB9CC \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uB354 \uBCF5\uC7A1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "SRAM\uC740 \uB370\uC774\uD130\uC758 \uC800\uC7A5 \uBC0F \uD638\uCD9C\uC774 \uAC00\uB2A5\uD55C nvSRAM\uC774\uB77C\uACE0 \uD558\uB294 \uBE44\uD718\uBC1C\uC131 \uB79C\uB364 \uC561\uC138\uC2A4 \uBA54\uBAA8\uB9AC\uB85C\uB3C4 \uC81C\uACF5\uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "sdram"
  }), `SDRAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SDRAM\uC740 \uB3D9\uC801 \uB79C\uB364 \uC561\uC138\uC2A4 \uBA54\uBAA8\uB9AC\uB85C\uC11C, \uAC01 \uB370\uC774\uD130 \uBE44\uD2B8\uB97C \uCEE4\uD328\uC2DC\uD130\uC5D0 \uC800\uC7A5\uD558\uBBC0\uB85C \uB3D9\uC77C\uD55C \uC591\uC758 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD560 \uB54C SRAM\uBCF4\uB2E4 \uBB3C\uB9AC\uC801 \uACF5\uAC04\uC744 \uC801\uAC8C \uCC28\uC9C0\uD569\uB2C8\uB2E4. \uB610\uD55C \uB370\uC774\uD130\uB97C \uC720\uC9C0\uD558\uAE30 \uC704\uD574 \uACC4\uC18D \uC0C8\uB85C \uACE0\uCE68\uC744 \uD574\uC57C \uD558\uBBC0\uB85C SRAM\uC5D0 \uBE44\uD574 \uC804\uB825 \uC18C\uBAA8\uB7C9\uC774 \uB9CE\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SDRAM \uBC00\uB3C4\uC758 \uBC94\uC704\uB294 \uBCF4\uD1B5 16 Mbit ~ 512 Mbit\uC774\uBA70, 100 ~ 200 MHz\uC758 \uC8FC\uD30C\uC218\uC5D0\uC11C \uC2E4\uD589\uB418\uB294 8\uBE44\uD2B8, 16\uBE44\uD2B8 \uBC0F 32\uBE44\uD2B8 \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4C0\uC5BC \uD504\uB808\uC784 \uBC84\uD37C \uC804\uB7B5\uC5D0\uC11C\uB294 \uCD5C\uB300 18 Mbits\uC758 RAM\uC774 \uD544\uC694\uD558\uBBC0\uB85C, 24 bpp 800*480 \uD574\uC0C1\uB3C4\uB85C \uB450 \uAC1C\uC758 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC800\uC7A5\uD558\uB824\uBA74 32 Mbits SDRAM\uC774 \uAC00\uC7A5 \uC801\uD569\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "psram"
  }), `PSRAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `PSRAM\uC740 SRAM \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD0D1\uC7AC\uD55C DRAM(\uC81C\uC5B4 \uB85C\uC9C1)\uC758 \uB0B4\uBD80 \uAD6C\uC870\uB97C \uAC00\uC9C4 \uC720\uC0AC \uC815\uC801 \uB79C\uB364 \uC561\uC138\uC2A4 \uBA54\uBAA8\uB9AC\uB85C, \uBC00\uB3C4\uB294 \uBCF4\uD1B5 8 ~ 256 Mbits\uC785\uB2C8\uB2E4. PSRAM\uC740 \uAE30\uC874\uC758 SDRAM\uC774\uB098 SRAM\uC5D0 \uBE44\uD574 \uC18D\uB3C4\uAC00 \uBE60\uB974\uACE0 \uC804\uB825 \uC18C\uBAA8\uAC00 \uC801\uB2E4\uB294 \uC7A5\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "additional-memories"
  }), `\uCD94\uAC00 \uBA54\uBAA8\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C8\uB85C \uB098\uC628 \uC625\uD0C0 RAM \uBC0F \uD558\uC774\uD37C RAM \uBA54\uBAA8\uB9AC\uB294 \uC2F1\uAE00 \uBC0F \uB4C0\uC5BC \uB370\uC774\uD130 \uC18D\uB3C4 \uBAA8\uB4DC\uC5D0\uC11C \uC9C1\uB82C 8\uBE44\uD2B8 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB192\uC740 \uCC98\uB9AC \uC18D\uB3C4\uC640 \uC6B0\uC218\uD55C \uD1B5\uD569 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selection-of-external-ram-density"
  }), `\uC678\uBD80 RAM \uBC00\uB3C4 \uC120\uD0DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C(\uB4E4)\uB97C \uC678\uBD80 RAM\uC5D0 \uBC30\uCE58\uD558\uB824\uB294 \uACBD\uC6B0 \uC544\uB798 \uD45C\uC5D0\uC11C \uD604\uC7AC \uCD9C\uC2DC\uB418\uC5B4 \uC788\uB294 \uB2E4\uC591\uD55C RAM \uBC00\uB3C4 \uC815\uBCF4\uB97C \uC0B4\uD3B4\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC678\uC5D0 \uD53D\uC140\uB2F9 1, 2, 4, 8, 16 \uBC0F 24\uBE44\uD2B8(2\uB85C \uB098\uB204\uBA74 \uC2F1\uAE00 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uD544\uC694\uD55C \uBC00\uB3C4\uAC00 \uC0B0\uCD9C\uB428)\uB85C \uC774\uC911 \uD504\uB808\uC784 \uBC84\uD37C \uC124\uC815\uC744 \uC2E4\uD589\uD558\uB294 \uB370 \uD544\uC694\uD55C RAM\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB3C4 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uACBD\uC6B0\uC5D0 \uB530\uB77C \uC2F1\uAE00 \uD504\uB808\uC784 \uBC84\uD37C \uC124\uC815\uC73C\uB85C \uCDA9\uBD84\uD560 \uB54C\uB3C4 \uC788\uACE0, STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC \uC911\uC5D0\uC11C\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uBC30\uCE58\uD560 \uC218 \uC788\uC744 \uB9CC\uD07C \uB0B4\uBD80 RAM\uC774 \uCDA9\uBD84\uD55C \uAC83\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/sdram-octospi-densities.png",
    noShadow: true,
    mdxType: "Figure"
  }, "SDRAM \uBC0F OctoSPI \uBC00\uB3C4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/hardware-selection/external-memories/required-ram-for-double-framebuffer-setup.png",
    noShadow: true,
    mdxType: "Figure"
  }, "\uC774\uC911 \uD504\uB808\uC784 \uBC84\uD37C \uC124\uC815\uC5D0 \uD544\uC694\uD55C RAM"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);