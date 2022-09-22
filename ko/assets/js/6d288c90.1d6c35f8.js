"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[395],{

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

/***/ 56569:
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
  id: "02-cpu-running",
  title: "2. CPU Running",
  sidebar_label: "2. CPU Running"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/02-cpu-running",
  "id": "development/board-bring-up/how-to/02-cpu-running",
  "title": "2. CPU Running",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/02-cpu-running.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/02-cpu-running",
  "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/02-cpu-running",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "id": "02-cpu-running",
    "title": "2. CPU Running",
    "sidebar_label": "2. CPU Running"
  },
  "sidebar": "docs",
  "previous": {
    "title": "1. Create Project",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/01-create-project"
  },
  "next": {
    "title": "3. \uB0B4\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294\uB514\uC2A4\uD50C\uB808\uC774",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/03-display-internal"
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
  value: "\uC2DC\uC2A4\uD15C \uD074\uB85D",
  id: "system-clock",
  level: 3
}, {
  value: "\uD50C\uB798\uC2DC\uC640 RAM\uC758 \uD06C\uAE30 \uBC0F \uC18D\uB3C4",
  id: "flash-and-ram-size-and-speed",
  level: 3
}, {
  value: "\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8",
  id: "linker-script",
  level: 3
}, {
  value: "F7 \uBC0F H7\uC758 \uCE90\uC2DC",
  id: "cache-on-f7-and-h7",
  level: 3
}, {
  value: "TouchGFX\uC758 \uB0B4\uBD80 DCache \uC0C1\uD0DC \uBA38\uC2E0",
  id: "touchgfx-internal-dcache-state-machine",
  level: 4
}, {
  value: "\uCD94\uAC00 \uC790\uB8CC",
  id: "further-readings",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "motivation"
  }), `\uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 MCU \uCF54\uC5B4, \uB0B4\uBD80 RAM \uBC0F \uD50C\uB798\uC2DC\uAC00 \uC6D0\uD558\uB294 \uD074\uB85D \uC18D\uB3C4\uB85C \uC2E4\uD589\uC774 \uB418\uB294\uC9C0 \uD655\uC778\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC5B4\uB5A4 MCU \uC18D\uB3C4\uC5D0\uC11C\uB4E0 \uC2E4\uD589\uC774 \uAC00\uB2A5\uD558\uC9C0\uB9CC, \uD074\uB85D \uAD6C\uC131\uC774 \uC798\uBABB\uB418\uBA74 \uC131\uB2A5\uC774 \uD544\uC694\uD55C \uC218\uC900\uBCF4\uB2E4 \uB0AE\uC544\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCD94\uD6C4 \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5 \uB2E8\uACC4\uC5D0\uC11C \uD2B9\uC815 \uD0C0\uC774\uBC0D \uD30C\uB77C\uBBF8\uD130(\uC608: \uD130\uCE58 \uCEE8\uD2B8\uB864\uB7EC\uB97C \uC704\uD55C I2C \uD074\uB85D)\uB97C \uAD6C\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB294 MCU\uAC00 \uC62C\uBC14\uB978 \uC18D\uB3C4\uB85C \uC2E4\uD589\uB418\uB294\uC9C0 \uD655\uC778\uD558\uC9C0 \uC54A\uACE0\uC11C\uB294 \uBD88\uAC00\uB2A5\uD55C \uC791\uC5C5\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uB300\uD55C \uC2DC\uC2A4\uD15C \uD074\uB85D\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC774 \uD074\uB85D\uC774 \uBD84\uD560\uB418\uC5B4 FCLK \uCF54\uC5B4 \uD074\uB85D\uACFC \uB2E4\uC591\uD55C \uC8FC\uBCC0 \uC7A5\uCE58 \uD074\uB85D(\uC608: APB1 \uC8FC\uBCC0 \uC7A5\uCE58 \uD074\uB85D) \uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\uBAA9\uD45C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC758 \uBAA9\uD45C\uB294 \uD504\uB85C\uC81D\uD2B8\uB97C \uC218\uC815\uD558\uC5EC \uC62C\uBC14\uB978 \uD074\uB85D \uAD6C\uC131\uC744 \uC5BB\uB294 \uAC83\uC785\uB2C8\uB2E4. \uB610\uD55C \uB0B4\uBD80 RAM\uACFC \uD50C\uB798\uC2DC\uAC00 \uC608\uC0C1 \uC18D\uB3C4\uB85C \uC2E4\uD589 \uC911\uC778\uC9C0\uB3C4 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uC139\uC158\uC5D0\uC11C \uD655\uC778\uD574\uC57C \uD560 \uC0AC\uD56D\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `SystemCoreClock \uBCC0\uC218\uC758 \uAC12\uC774 \uC62C\uBC14\uB978\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC6D0\uD558\uB294 \uC8FC\uD30C\uC218\uC5D0\uC11C \uC2E4\uD589\uB418\uB3C4\uB85D \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 RAM\uC774 \uC77D\uAE30 \uAC00\uB2A5\uD55C\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC608\uC0C1 \uC6A9\uB7C9\uC758 \uB0B4\uBD80 RAM\uC744 \uAC00\uC9C0\uACE0 \uC788\uC73C\uBA70, \uC77D\uAE30\uAC00 \uAC00\uB2A5\uD558\uACE0, \uC18D\uB3C4\uAC00 \uCE21\uC815\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 \uD50C\uB798\uC2DC\uAC00 \uC77D\uAE30 \uAC00\uB2A5\uD55C\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC608\uC0C1 \uC6A9\uB7C9\uC758 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uB97C \uAC00\uC9C0\uACE0 \uC788\uC73C\uBA70, \uC77D\uAE30\uAC00 \uAC00\uB2A5\uD558\uACE0, \uC18D\uB3C4\uAC00 \uCE21\uC815\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCE90\uC2DC \uBE44\uD65C\uC131\uD654 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCE90\uC2DC\uAC00 \uBE44\uD65C\uC131\uD654\uB41C \uC0C1\uD0DC\uC5D0\uC11C \uC2DC\uC2A4\uD15C\uC744 \uC2E4\uD589\uD558\uBA74 \uC2DC\uC2A4\uD15C\uC774 \uB35C \uBCF5\uC7A1\uD558\uACE0 \uC774\uD574\uD558\uAE30\uAC00 \uB354 \uC27D\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\uC804\uC81C \uC870\uAC74`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uC804\uC81C \uC870\uAC74\uC785\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD558\uB4DC\uC6E8\uC5B4 \uC0C1\uC758 \uD074\uB85D \uC18C\uC2A4\uC5D0 \uB300\uD55C \uC815\uBCF4. \uBCF4\uD1B5\uC740 \uD06C\uB9AC\uC2A4\uD0C8\uC744 \uC0AC\uC6A9\uD558\uC9C0\uB9CC \uB2E4\uB978 \uC194\uB8E8\uC158\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\uC2E4\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C0\uAE08\uBD80\uD130\uB294 \uD544\uC694\uD55C MCU \uC8FC\uD30C\uC218\uB97C \uC5BB\uAE30 \uC704\uD574 \uD504\uB85C\uC81D\uD2B8\uC758 \uD074\uB85D \uAD6C\uC131\uC744 \uC870\uC815\uD558\uB294 \uB2E8\uACC4\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C, \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC758 \uC77D\uAE30 \uC18D\uB3C4\uB97C \uCE21\uC815\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "system-clock"
  }), `\uC2DC\uC2A4\uD15C \uD074\uB85D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC5D0\uC11C "Clock Configuration" \uD0ED\uC744 \uD074\uB9AD\uD558\uBA74 \uD2B9\uC815 MCU\uC5D0 \uB300\uD55C \uD074\uB85D \uD2B8\uB9AC\uC758 \uAC1C\uC694\uAC00 \uB098\uD0C0\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uD074\uB85D \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC608\uC81C\uC5D0\uC11C\uB294 \uD074\uB85D \uC18C\uC2A4\uB85C HSI\uB97C \uC120\uD0DD\uD588\uC2B5\uB2C8\uB2E4. \uB9CE\uC740 \uD504\uB85C\uC81D\uD2B8\uB4E4\uC774 \uC678\uBD80 \uD06C\uB9AC\uC2A4\uD0C8\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uACE0, \uC801\uC815 \uBD84\uBC30\uAE30(/M) \uC640 \uC99D\uBC30\uAE30(/N) \uAC00 \uD3EC\uD568\uB41C HSE\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uD074\uB85D \uAD6C\uC131\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC124\uBA85\uC740 \uC774 \uAC00\uC774\uB4DC\uC5D0\uC11C \uB2E4\uB8E8\uC9C0 \uC54A\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD074\uB85D \uAD6C\uC131\uC744 \uBCC0\uACBD\uD55C \uD6C4\uC5D0\uB294 STM32CubeMX\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uB2E4\uC2DC \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4(\uC624\uB978\uCABD \uC0C1\uB2E8 \uBAA8\uC11C\uB9AC\uC758 'Generate Code' \uD074\uB9AD).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0DD\uC131\uB41C \uCF54\uB4DC\uB97C \uD1B5\uD574 \uCF54\uC5B4 \uD074\uB85D(HCLK) \uC744 \uB7F0\uD0C0\uC784 \uC2DC \uACC4\uC0B0\uD574\uC11C \uBCC0\uC218\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBCC0\uC218\uB294 \uD074\uB85D \uC0AC\uC774\uD074\uACFC \uCD08(\uC608: \uC2DC\uC791 \uD0C0\uC774\uBA38) \uAC04\uC758 \uC62C\uBC14\uB978 \uC804\uD658\uC744 \uC704\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uBCC0\uC218\uB97C \uB2E4\uC2DC \uACC4\uC0B0\uD558\uB824\uBA74 SystemCoreClockUpdate()\xA0\uD568\uC218\uB97C \uD638\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uC139\uC158\uC5D0\uC11C main.c\uC5D0 \uD638\uCD9C\uC744 \uC0BD\uC785\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SystemCoreClockUpdate"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD568\uC218 \uB9C8\uC9C0\uB9C9\uC5D0 \uC911\uB2E8\uC810\uC744 \uC124\uC815\uD55C \uACBD\uC6B0\uC5D0\uB294 \uAD6C\uC131\uC5D0 \uB530\uB77C \uCF54\uC5B4 \uD074\uB85D\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SystemCoreClock"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14C\uC2A4\uD2B8\uC5D0 \uC788\uC5B4 \uB610 \uB2E4\uB978 \uC911\uC694 \uD3EC\uC778\uD2B8\uB294 \uBC14\uB85C System Timer\uC785\uB2C8\uB2E4. \uC774 \uD0C0\uC774\uBA38\uB294 \uBD84\uD560\uB41C HCLK\uC5D0\uC11C \uC2E4\uD589\uB418\uC5B4 1ms\uB9C8\uB2E4 \uC778\uD130\uB7FD\uD2B8\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB610\uD55C STM32Cube \uD38C\uC6E8\uC5B4\uC5D0\uC11C ms \uB2E8\uC704\uC758 delay\uB97C \uAD6C\uD604\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 \uBA54\uC778 \uB8E8\uD504\uC5D0 5\uCD08\uC758 delay\uB97C \uC0BD\uC785\uD574\uC11C \uC774 \uD0C0\uC774\uBA38\uB97C \uD14C\uC2A4\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2A4\uD1B1\uC6CC\uCE58\uB098 \uC720\uC0AC\uD55C \uC218\uB2E8\uC744 \uC774\uC6A9\uD574 \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uC9C0\uC5F0 \uC2DC\uAC04 \uCE21\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "flash-and-ram-size-and-speed"
  }), `\uD50C\uB798\uC2DC\uC640 RAM\uC758 \uD06C\uAE30 \uBC0F \uC18D\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `System Timer\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBA54\uBAA8\uB9AC\uC758 \uC77D\uAE30 \uC18D\uB3C4\uB97C \uC190\uC27D\uAC8C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. System Timer \uC778\uD130\uB7FD\uD2B8\uB294 \uBC00\uB9AC\uCD08\uB9C8\uB2E4 \uBCC0\uC218\uB97C \uC99D\uAC00\uC2DC\uD0B5\uB2C8\uB2E4. \uCF54\uB4DC \uC870\uAC01 \uC804\uD6C4\uC5D0 \uC774 \uBCC0\uC218\uB97C \uC77D\uC5B4\uC11C \uCF54\uB4DC\uC758 \uC2E4\uD589 \uC2DC\uAC04\uC744 \uCE21\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(1ms\uC758 \uD574\uC0C1\uB3C4\uB85C). \uC774\uB7EC\uD55C \uBC29\uBC95\uC744 \uC774\uC6A9\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC5EC\uB7EC \uB2E4\uB978 \uC704\uCE58\uC5D0\uC11C\uB3C4 \uC2DC\uAC04\uC744 \uCE21\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC624\uC2E4\uB85C\uC2A4\uCF54\uD504 \uAC19\uC740 \uC678\uBD80 \uC7A5\uCE58\uAC00 \uC5C6\uB2E4\uBA74 \uC544\uC8FC \uC815\uD655\uD558\uC9C0\uB294 \uC54A\uB354\uB77C\uB3C4 \uC5B4\uB290 \uC815\uB3C4 \uC815\uD655\uC131\uC744 \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB97C \uC704\uD574\uC11C\uB294 \uBA3C\uC800 \uACB0\uACFC\uB97C \uC800\uC7A5\uD558\uAE30 \uC704\uD55C 2\uAC1C\uC758 \uD718\uBC1C\uC131 \uBCC0\uC218\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uACB0\uACFC\uB97C \uC800\uC7A5\uD558\uC9C0 \uC54A\uC73C\uBA74 \uCEF4\uD30C\uC77C\uB7EC \uCD5C\uC801\uD654 \uACFC\uC815\uC5D0\uC11C \uCE21\uC815 \uC911\uC778 \uCF54\uB4DC\uAC00 \uC81C\uAC70\uB418\uB294 \uACBD\uC6B0\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uCE21\uC815 \uACB0\uACFC\uB97C \uC720\uC9C0\uD558\uB294 \uAE00\uB85C\uBC8C \uD718\uBC1C\uC131 \uBCC0\uC218"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uC5D0\uB294 0x08000000 ~ 0x08020000(128Kb) \uAE4C\uC9C0 \uD50C\uB798\uC2DC\uB97C \uC77D\uACE0 \uCF54\uB4DC\uC758 \uC2E4\uD589 \uC2DC\uAC04\uC744 \uCE21\uC815\uD558\uB294 \uC608\uAC00 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/img-06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uC77D\uAE30 \uB8E8\uD504 \uC2DC\uAC04 \uCE21\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC640 \uAC19\uC740 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uC11C\uB85C \uB2E4\uB978 \uBA54\uBAA8\uB9AC\uC758 \uC18D\uB3C4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. STM32CubeMX\uC5D0 \uC124\uC815\uC774 \uC0DD\uC131\uB418\uBA74 \uC77D\uAE30 \uC18D\uB3C4\uB97C \uCE21\uC815\uD558\uACE0 \uACB0\uACFC\uB97C \uBA54\uBAA8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uD6C4\uC5D0 \uCE21\uC815\uC744 \uBC18\uBCF5\uD574\uC11C \uC218\uD589\uD558\uACE0 \uACB0\uACFC\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.  \uBA54\uBAA8\uB9AC\uC758 \uB300\uC5ED\uD3ED(kb/s \uB2E8\uC704\uC758 \uC77D\uAE30 \uC18D\uB3C4)\uC744 \uCE21\uC815\uD558\uB824\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCE21\uC815\uB41C \uC2DC\uAC04\uACFC \uB370\uC774\uD130\uC758 \uC591\uC744 \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32F429 16MHz \uC5D0\uC11C \uCF54\uB4DC\uB294 12ms\uB9C8\uB2E4 \uC2E4\uD589\uB418\uC5B4 128kb/0.012s(10,666 kb/s) \uC758 \uB0B4\uBD80 \uD50C\uB798\uC2DC(\uC774 \uBA54\uC11C\uB4DC \uC0AC\uC6A9) \uC77D\uAE30 \uC18D\uB3C4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC640 \uB3D9\uC77C\uD55C \uB8E8\uD504\uB97C \uC190\uC27D\uAC8C \uBCC0\uACBD\uD574\uC11C \uBAA8\uB4E0 \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC758 \uD65C\uC131\uD654 \uBC0F \uC77D\uAE30 \uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2DC\uC791 \uC8FC\uC18C\uC640 \uB05D \uC8FC\uC18C\uB9CC \uBC14\uAFB8\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uCF54\uB4DC\uB294 \uB0B4\uBD80 RAM\uB3C4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. F429\uC758 RAM\uC740 \uC8FC\uC18C 0x20000000\uC5D0\uC11C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uCF54\uC5B4 \uCEE4\uD50C\uB4DC \uBA54\uBAA8\uB9AC(CCM, Core Coupled Memory) \uC740 0x10000000\uC5D0\uC11C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uD574\uB2F9 \uBA54\uBAA8\uB9AC \uC8FC\uC18C\uC758 MCU\uB294 \uB370\uC774\uD130 \uC2DC\uD2B8\uC5D0\uC11C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC11C\uB85C \uB2E4\uB978 \uBA54\uBAA8\uB9AC\uB97C \uBA87 \uCC28\uB840 \uCE21\uC815\uD558\uACE0 \uADF8 \uACB0\uACFC\uB97C \uBA54\uBAA8\uD574\uB46C\uC57C \uD569\uB2C8\uB2E4. RAM\uC5D0\uC11C\uB294 \uC77D\uAE30 \uC18D\uB3C4\uC640 \uC4F0\uAE30 \uC18D\uB3C4\uB97C \uBAA8\uB450 \uD14C\uC2A4\uD2B8\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "linker-script"
  }), `\uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610 \uD558\uB098 \uC0B4\uD3B4\uBD10\uC57C \uD560 \uAC83\uC774 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC785\uB2C8\uB2E4. \uC774 \uAD6C\uC131 \uD30C\uC77C\uC740 \uB9C1\uCEE4\uC5D0\uAC8C \uC2DC\uC2A4\uD15C\uC758 RAM \uBC0F \uD50C\uB798\uC2DC \uC8FC\uC18C\uB97C \uC54C\uB824\uC90D\uB2C8\uB2E4. \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uD504\uB85C\uC81D\uD2B8\uC640 \uD568\uAED8 CubeMX\uC5D0\uC11C \uC0DD\uC131\uC774 \uB418\uC9C0\uB9CC, \uAC80\uD1A0 \uD574\uBCF4\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0\uC5D0\uB294 \uCD94\uD6C4\uC5D0 \uD504\uB85C\uC81D\uD2B8\uC758 \uC694\uAD6C\uC5D0 \uB9DE\uAC8C \uC774\uB97C \uC218\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "cache-on-f7-and-h7"
  }), `F7 \uBC0F H7\uC758 \uCE90\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ARM Cortex-M7 \uAE30\uBC18\uC758 STM32F7 \uBC0F STM32H7 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC5D0\uB294 \uB370\uC774\uD130\uC640 \uBA85\uB839\uC5B4 \uCE90\uC2DC\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC548\uC815\uC801\uC778 \uD50C\uB7AB\uD3FC\uC774 \uD655\uBCF4\uB420 \uB54C\uAE4C\uC9C0 \uCD5C\uC18C\uD55C \uB370\uC774\uD130 \uCE90\uC2DC\uB77C\uB3C4 \uBE44\uD65C\uC131\uD654\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130 \uCE90\uC2DC\uB294 \uB9CE\uC740 \uACBD\uC6B0\uC5D0 \uC131\uB2A5\uC744 \uB300\uD3ED \uAC15\uD654\uD558\uC9C0\uB9CC, \uD14C\uC2A4\uD2B8 \uACFC\uC815\uC5D0\uC11C \uBCF5\uC7A1\uC131\uC744 \uCD08\uB798\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC548\uC815\uC801\uC778 \uD50C\uB7AB\uD3FC\uC774 \uD655\uBCF4\uB418\uBA74 \uB370\uC774\uD130 \uCE90\uC2DC\uB97C \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD50C\uB7AB\uD3FC\uC740 \uD574\uB2F9 \uBB38\uC81C\uAC00 \uB370\uC774\uD130 \uCE90\uC2DC \uAD00\uB9AC\uC5D0\uC11C \uBE44\uB86F\uB41C \uAC83\uC778\uC9C0 \uC190\uC27D\uAC8C \uC2DD\uBCC4\uD560 \uC218 \uC788\uB294\uB370, \uC774\uB294 \uCE90\uC2DC \uBB38\uC81C\uAC00 \uC544\uB2C8\uBA74 \uD50C\uB7AB\uD3FC\uC774 \uC81C\uB300\uB85C \uC791\uB3D9\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB370\uC774\uD130 \uCE90\uC2DC\uC758 \uBCF5\uC7A1\uC131\uC740 MCU \uCF54\uC5B4\uAC00 \uCE90\uC2DC\uC5D0 \uB300\uD574 \uC77D\uAE30\uC640 \uC4F0\uAE30\uB97C \uC218\uD589\uD55C\uB2E4\uB294 \uC0AC\uC2E4\uC5D0\uC11C \uBE44\uB86F\uB41C \uAC83\uC785\uB2C8\uB2E4. \uBC18\uBA74\uC5D0 DMA2\uB098 LTDC \uAC19\uC740 \uC8FC\uBCC0 \uC7A5\uCE58\uB4E4\uC740 \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uC9C1\uC811(\uCE90\uC2DC\uC5D0\uC11C\uAC00 \uC544\uB2C8\uB77C) \uC77D\uAE30\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.  \uC774\uB7EC\uD55C \uC774\uC720\uB85C \uC608\uB97C \uB4E4\uC5B4 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uB370\uC774\uD130\uB97C \uAE30\uB85D\uD574\uB3C4 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC77C\uBD80 \uB370\uC774\uD130\uAC00 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294 \uC0C1\uD669\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC65C\uB0D0\uD558\uBA74 \uB370\uC774\uD130\uAC00 \uCE90\uC2DC\uC5D0\uB9CC \uAE30\uB85D\uC774 \uB41C\uB2E4\uB294 \uC810\uC5D0\uC11C LTDC\uAC00 RAM\uC5D0\uC11C \uC0C8 \uB370\uC774\uD130\uB97C \uCC3E\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8\uC758 \uD2B9\uC815 \uC2DC\uC810\uC5D0\uC11C \uCE90\uC2DC\uB97C \uC815\uB9AC(flushing) \uD558\uB294 \uAC83\uB3C4 \uD574\uACB0\uCC45\uC774\uC9C0\uB9CC, \uB098\uC911\uC5D0 \uC774 \uBB38\uC81C\uB97C \uCC98\uB9AC\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `System Core \uC139\uC158\uC758 STM32CubeMX\uC5D0\uC11C \uCE90\uC2DC\uB97C \uBE44\uD65C\uC131\uD654/\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "touchgfx-internal-dcache-state-machine"
  }), `TouchGFX\uC758 \uB0B4\uBD80 DCache \uC0C1\uD0DC \uBA38\uC2E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Engine\uC740 \uD604\uC7AC \uBC0F \uB9C8\uC9C0\uB9C9 \uB80C\uB354\uB9C1 \uC791\uC5C5\uC744 \uCD94\uC801\uD558\uB294\uB370, \uC0C1\uD0DC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `HARDWARE`), `\uC640`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `\xA0SOFTWARE`), ` \uB450 \uAC00\uC9C0\uC785\uB2C8\uB2E4. \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC758 \uB300\uB2E4\uC218\uAC00 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC218\uD589\uB418\uBBC0\uB85C \uCD08\uAE30 \uC0C1\uD0DC\uB294\xA0HARDWARE\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC0C1\uD0DC \uC804\uD658\uC774 \uBC1C\uC0DD\uD558\uBA74 \uC0C1\uD0DC \uBA38\uC2E0\uC740 \uD574\uB2F9\uD558\uB294 \uAC00\uC0C1 \uD568\uC218\uB97C \uD638\uCD9C\uD558\uC5EC \uCE90\uC2DC \uBB34\uD6A8\uD654\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uC0C1\uD0DC\uAC00\xA0HARDWARE\uC5D0\uC11C SOFTWARE\uB85C \uBC14\uB00C\uBA74 \uAC00\uC0C1 \uBA54\uC18C\uB4DC\xA0void touchgfx::HAL::InvalidateCache()\uB97C \uD638\uCD9C\uD558\uACE0, SOFTWARE\uC5D0\uC11C HARDWARE\uB85C \uBC14\uB00C\uBA74 \uAC00\uC0C1 \uBA54\uC11C\uB4DC\xA0void touchgfx::HAL::FlushCache()\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. \uD30C\uC0DD\uB41C HAL \uD074\uB798\uC2A4\uC5D0\uC11C \uC0AC\uC6A9\uC790\uAC00 \uAD6C\uD604\uD560 \uC218 \uC788\uB3C4\uB85D \uC774\uB7EC\uD55C \uB450 \uD568\uC218\uC758 \uAE30\uB2A5\uC774 \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/cpu-running/cm7-cache-invalidation-statemachine.svg",
    noShadow: false,
    mdxType: "Figure"
  }, "TouchGFX Engine\uC758 \uB0B4\uBD80 DCache \uC0C1\uD0DC \uBA38\uC2E0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Generator\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uACBD\uC6B0, \uC774\uB807\uAC8C \uD30C\uC0DD\uB41C \uBA54\uC18C\uB4DC\uB294 DCache \uBB34\uD6A8\uD654\uB97C \uC704\uD55C \uD568\uC218 \uD638\uCD9C\uC744 \uD1B5\uD574 TouchGFXGeneratedHAL \uD074\uB798\uC2A4\uC5D0 \uAD6C\uD604\uC774 \uB418\uAE30 \uB54C\uBB38\uC5D0 \uCD94\uAC00 \uC791\uC5C5\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "further-readings"
  }), `\uCD94\uAC00 \uC790\uB8CC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC5D0 \uB9C1\uD06C\uB41C \uBB38\uC11C\uB4E4\uC5D0\uB294 STM32CubeMX \uBC0F STM32 \uCE90\uC2DC\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC815\uBCF4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",
    mdxType: "Link"
  }, "STM32CubeMX \uC0AC\uC6A9\uC790 \uB9E4\uB274\uC5BC\uC758 \uD074\uB85D \uAD6C\uC131\uC5D0 \uB300\uD55C \uC139\uC158")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",
    mdxType: "Link"
  }, "STM32F7 \uBC0F STM32H7\uC758 Level 1 \uCE90\uC2DC")))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);