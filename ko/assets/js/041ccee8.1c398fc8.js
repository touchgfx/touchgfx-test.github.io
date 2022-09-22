"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9241],{

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

/***/ 85103:
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
  id: "memory-usage",
  title: "\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/memory-usage",
  "id": "basic-concepts/memory-usage",
  "title": "\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/memory-usage.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/memory-usage",
  "permalink": "/4.20/ko/docs/basic-concepts/memory-usage",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "memory-usage",
    "title": "\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC6B4\uC601 \uCCB4\uC81C",
    "permalink": "/4.20/ko/docs/basic-concepts/operating-system"
  },
  "next": {
    "title": "\uAC1C\uBC1C \uD65C\uB3D9 \uC18C\uAC1C",
    "permalink": "/4.20/ko/docs/development/development-introduction"
  }
};
const assets = {};

const toc = [{
  value: "\uC11C\uB860",
  id: "introduction",
  level: 2
}, {
  value: "\uC815\uC801 \uBA54\uBAA8\uB9AC \uD560\uB2F9",
  id: "static-memory-allocation",
  level: 2
}, {
  value: "\uC2A4\uD06C\uB9B0 \uBC0F \uC704\uC82F",
  id: "screens-and-widgets",
  level: 3
}, {
  value: "\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC",
  id: "application-code",
  level: 3
}, {
  value: "\uC560\uC14B",
  id: "assets",
  level: 3
}, {
  value: "\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9 \uD655\uC778",
  id: "checking-memory-usage",
  level: 2
}, {
  value: "\uB0B4\uBD80 RAM",
  id: "internal-ram",
  level: 3
}, {
  value: "\uB0B4\uBD80 \uD50C\uB798\uC2DC",
  id: "internal-flash",
  level: 3
}, {
  value: "\uC678\uC7A5 \uD50C\uB798\uC2DC",
  id: "external-flash",
  level: 3
}, {
  value: "\uC694\uC57D",
  id: "summary",
  level: 3
}, {
  value: "Demo 1",
  id: "demo-1",
  level: 2
}, {
  value: "\uC694\uC57D",
  id: "summary-1",
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
    "id": "introduction"
  }), `\uC11C\uB860`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 4\uAC00\uC9C0 \uC720\uD615\uC758 \uBA54\uBAA8\uB9AC\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBA54\uBAA8\uB9AC \uC720\uD615`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC6A9\uB3C4`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 RAM\uC740 \uBAA8\uB4E0 \uC704\uC82F\uC758 \uC88C\uD45C\uB098 \uC0C9\uC0C1\uACFC \uAC19\uC740 \uAD6C\uC131 \uB370\uC774\uD130\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uD604\uC7AC \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uC77C\uBD80 \uAC1D\uCCB4\uAC00 \uC5EC\uAE30\uC5D0 \uD560\uB2F9\uB429\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), `\uB610\uD55C UI \uC791\uC5C5\uC758 \uB7F0\uD0C0\uC784 \uC2A4\uD0DD\uC744 \uD3EC\uD568\uD574 \uC6B4\uC601 \uCCB4\uC81C \uBA54\uBAA8\uB9AC \uC5ED\uC2DC \uB0B4\uBD80 RAM\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC774\uB098 \uB514\uC2A4\uD50C\uB808\uC774 \uB4DC\uB77C\uC774\uBC84\uC640 \uAC19\uC740 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAD6C\uC131\uC694\uC18C \uB370\uC774\uD130\uB3C4 \uB0B4\uBD80 RAM\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 \uD50C\uB798\uC2DC\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158, TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBC0F \uAE30\uD0C0 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uD504\uB85C\uADF8\uB7A8 \uCF54\uB4DC\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 RAM\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uD504\uB808\uC784\uBC84\uD37C\uB97C \uBE44\uB86F\uD55C \uBE44\uD2B8\uB9F5 \uCE90\uC2DC\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uC7A5 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uC7A5 \uD50C\uB798\uC2DC\uB294 \uC774\uBBF8\uC9C0, \uAE00\uAF34 \uBC0F \uD14D\uC2A4\uD2B8\uB97C \uC800\uC7A5\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "static-memory-allocation"
  }), `\uC815\uC801 \uBA54\uBAA8\uB9AC \uD560\uB2F9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC815\uC801 \uBA54\uBAA8\uB9AC \uD560\uB2F9\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uB294 \uBAA8\uB4E0 \uBA54\uBAA8\uB9AC\uAC00 \uC0AC\uC804\uC5D0 \uD560\uB2F9\uB41C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uB7F0\uD0C0\uC784 \uC2DC TouchGFX\uC5D0\uC11C \uD560\uB2F9\uD558\uB294 \uBA54\uBAA8\uB9AC\uB294 \uC5C6\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uCC98\uC74C\uBD80\uD130 \uBA54\uBAA8\uB9AC \uD06C\uAE30\uC5D0 \uC801\uD569\uD558\uB2E4\uBA74 \uBA54\uBAA8\uB9AC\uAC00 \uBD80\uC871\uD574\uC9C8 \uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "screens-and-widgets"
  }), `\uC2A4\uD06C\uB9B0 \uBC0F \uC704\uC82F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB294 \uB2E4\uC218\uC758 C++ \uD074\uB798\uC2A4\uB97C \uAC1C\uBC1C\uD558\uC5EC \uC0DD\uC131\uB429\uB2C8\uB2E4. \uD074\uB798\uC2A4\uB294 \uC2A4\uD06C\uB9B0\uC744 \uC124\uACC4\uD560 \uB54C TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4. For each screen designed in TouchGFX Designer you automatically get a number of classes (the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/software-architecture/model-view-presenter-design-pattern"
  }), `MVP`), ` architecture). When you show a screen on the display objects of the classes is automatically allocated by TouchGFX in internal RAM.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uD6C4 \uC2A4\uD06C\uB9B0\uC744 \uC804\uD658\uD558\uBA74 \uC774\uC804 \uC2A4\uD06C\uB9B0\uC5D0 \uD560\uB2F9\uB418\uC5C8\uB358 \uAC1D\uCCB4\uB294 \uB354\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uACE0 \uC0C8\uB85C\uC6B4 \uC2A4\uD06C\uB9B0\uC5D0 \uD560\uB2F9\uB418\uB294 \uAC1D\uCCB4\uB9CC \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC0C8\uB85C\uC6B4 \uAC1D\uCCB4\uAC00 \uB0B4\uBD80 RAM\uC5D0\uC11C \uC774\uC804 \uAC1D\uCCB4\uAC00 \uD560\uB2F9\uB418\uC5C8\uB358 \uACF5\uAC04\uC5D0 \uD560\uB2F9\uB429\uB2C8\uB2E4(\uC774\uC804 \uAC1D\uCCB4\uB97C \uB36E\uC5B4\uC501\uB2C8\uB2E4). \uB0B4\uBD80 RAM\uC5D0\uB294 \uD55C \uC2DC\uC810\uC5D0 \uD55C \uC2A4\uD06C\uB9B0\uC758 \uAC1D\uCCB4\uB9CC \uC800\uC7A5\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `C++ \uCEF4\uD30C\uC77C\uB7EC\uB294 \uC815\uC758\uB41C \uD074\uB798\uC2A4\uB97C \uAE30\uC900\uC73C\uB85C \uAC00\uC7A5 \uD070 \uC2A4\uD06C\uB9B0 \uD074\uB798\uC2A4\uC758 \uD06C\uAE30\uB97C \uACC4\uC0B0\uD558\uC5EC \uD574\uB2F9 \uD074\uB798\uC2A4\uC5D0 \uD544\uC694\uD55C \uBA54\uBAA8\uB9AC\uB97C \uD560\uB2F9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uB0B4\uBD80 RAM\uC758 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC2A4\uD06C\uB9B0 \uC218\uAC00 \uC544\uB2C8\uB77C \uAC00\uC7A5 \uD070 \uC2A4\uD06C\uB9B0\uC758 \uD06C\uAE30\uC5D0 \uB530\uB77C \uACB0\uC815\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uAC1D\uCCB4\uB97C \uC704\uD574 \uB530\uB85C \uC124\uC815\uB41C \uBA54\uBAA8\uB9AC\uB97C FrontendHeap\uB77C\uACE0 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "application-code"
  }), `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uB294 \uAC1C\uBC1C\uC790\uAC00 \uC9C1\uC811 \uC791\uC131\uD55C \uD504\uB85C\uADF8\uB7A8 \uCF54\uB4DC, TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uB41C \uCF54\uB4DC, TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uCF54\uB4DC, \uADF8\uB9AC\uACE0 \uAC1C\uBC1C\uC790\uAC00 \uC0AC\uC6A9\uD558\uB294 \uB2E4\uB978 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBB3C\uB860 \uCF54\uB4DC\uB97C \uB9CE\uC774 \uC791\uC131\uD558\uACE0, \uC2A4\uD06C\uB9B0\uC744 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00\uD560\uC218\uB85D \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC758 \uD06C\uAE30\uB3C4 \uC99D\uAC00\uD558\uAC8C \uB429\uB2C8\uB2E4. \uB610\uD55C \uAE30\uB2A5\uC744 \uCC98\uC74C \uC0AC\uC6A9\uD558\uBA74 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uC11C \uAC00\uC838\uC624\uB294 \uCF54\uB4DC\uAC00 \uB9CE\uC544\uC9D1\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uBC84\uD2BC\uC744 \uC2A4\uD06C\uB9B0\uC5D0 \uCC98\uC74C\uC73C\uB85C \uCD94\uAC00\uD558\uBA74 TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uBC84\uD2BC \uCF54\uB4DC\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00\uB418\uC5B4 \uD06C\uAE30\uAC00 \uCEE4\uC9D1\uB2C8\uB2E4. \uC774\uD6C4 \uB450 \uBC88\uC9F8\uBD80\uD130\uB294 \uBC84\uD2BC\uC744 \uD574\uB2F9 \uC2A4\uD06C\uB9B0\uC774\uB098 \uB2E4\uB978 \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uD574\uB3C4 TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uC11C \uCD94\uAC00\uB85C \uAC00\uC838\uC624\uB294 \uCF54\uB4DC\uB294 \uC5C6\uACE0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uAC1C\uBC1C\uC790\uAC00 \uC791\uC131\uD558\uAC70\uB098 TouchGFX Designer\uAC00 \uC0DD\uC131\uD55C \uCF54\uB4DC\uB7C9\uC5D0 \uC758\uD574\uC11C\uB9CC \uC99D\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "assets"
  }), `\uC560\uC14B`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0, \uD14D\uC2A4\uD2B8, \uAE00\uAF34 \uAC19\uC740 \uC560\uC14B(assets)\uC740 C++ \uD30C\uC77C\uB85C \uBCC0\uD658\uB418\uC5B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5F0\uACB0\uB429\uB2C8\uB2E4. \uC560\uC14B \uB370\uC774\uD130\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uC678\uC7A5 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB418\uC9C0\uB9CC \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC800\uC7A5 \uC704\uCE58\uB294 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC81C\uC5B4\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0\uB97C \uCD94\uAC00\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD06C\uAE30\uAC00 \uC774\uBBF8\uC9C0 \uD06C\uAE30\uC5D0 \uBE44\uB840\uD558\uC5EC \uCEE4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8\uB97C \uCD94\uAC00\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD06C\uAE30\uAC00 \uD14D\uC2A4\uD2B8\uC5D0 \uD3EC\uD568\uB41C \uBB38\uC790\uB9C8\uB2E4 2\uBC14\uC774\uD2B8\uC529 \uCEE4\uC9D1\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB3D9\uC77C\uD55C \uBB38\uC790\uC5F4\uC744 \uB450 \uBC88 \uC0AC\uC6A9\uD558\uBA74 \uD55C \uBC88\uB9CC \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE00\uAF34 \uD30C\uC77C\uC5D0\uC11C \uAC00\uC838\uC624\uB294 \uBB38\uC790\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uBB38\uC790\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB300\uBB38\uC790(A~Z)\uB9CC \uC0AC\uC6A9\uD560 \uACBD\uC6B0 \uAE00\uAF34 \uC18C\uBB38\uC790(a~z)\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uC774\uB7EC\uD55C \uBB38\uC790\uAC00 \uD3EC\uD568\uB41C \uD14D\uC2A4\uD2B8\uB97C \uCD94\uAC00\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAE00\uAF34 \uB370\uC774\uD130\uB3C4 \uD06C\uAE30\uAC00 \uC99D\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB418\uB294 \uBB38\uC790\uC758 \uD06C\uAE30\uB294 \uC120\uD0DD\uD55C \uAE00\uAF34 \uD06C\uAE30\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uB530\uB77C\uC11C \uAE00\uAF34\uC774 \uCEE4\uC9C0\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uB3C4 \uCEE4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "checking-memory-usage"
  }), `\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9 \uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD2B9\uC815 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC740 \uB9C1\uCEE4\uC5D0\uC11C \uC0DD\uC131\uB418\uB294 \uB9F5 \uD30C\uC77C\uC744 \uAC80\uC0AC\uD558\uBA74 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC5D0\uC11C\uB294 IAR Embedded Workbench\uC5D0\uC11C \uC0DD\uC131\uB41C \uB9F5 \uD30C\uC77C\uC744 \uAC80\uC0AC\uD569\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0 \uB2E4\uB978 \uCEF4\uD30C\uC77C\uB7EC\uC5D0\uC11C\uB3C4 \uBE44\uC2B7\uD55C \uB9F5 \uD30C\uC77C\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 TouchGFX Designer\uC5D0\uC11C STM32F746Discovery \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0 \uC0AC\uC6A9\uD560 \uBE48 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/memory-usage/create-project-4.17.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uBC15\uC2A4\uC640 \uBC84\uD2BC\uC774 \uD3EC\uD568\uB41C STM32F746 \uD504\uB85C\uC81D\uD2B8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IAR\uC5D0\uC11C \uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8\uB97C \uC5F4\uACE0 IAR\uC774 .MAP \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uB294 \uC18D\uC131\uC744 \uCCB4\uD06C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/memory-usage/enable-map-file.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uB9C1\uCEE4 \uB9F5 \uD30C\uC77C \uC0DD\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IAR\uC5D0\uC11C \uCEF4\uD30C\uC77C\uC744 \uB9C8\uCE58\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `EWARM/STM32F746G_DISCO/List`), ` \uD3F4\uB354\uC5D0\uC11C \uB9C1\uCEE4 \uB9F5 \uD30C\uC77C\uC778 STM32F746G_DISCO.map\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IAR \uB9C1\uCEE4 \uB9F5 \uD30C\uC77C\uC5D0\uB294 \uC27D\uAC8C \uC54C\uC544\uBCFC \uC218 \uC788\uB3C4\uB85D \uC694\uC57D\uB41C \uD14C\uC774\uBE14\uC774 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `MODULE SUMMARY`), `\uB97C \uAC80\uC0C9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `*******************************************************************************
*** MODULE SUMMARY
***

    Module                                   ro code  ro data  rw data
    ------                                   -------  -------  -------
command line/config:
    ------------------------------------------------------------------
    Total:

C:\\TouchGFXProjectsDocumentation\\STM32F746MemoryUsage\\EWARM\\STM32F746G_DISCO\\Obj: [1]
    ApplicationFontProvider.o                              20
    BitmapDatabase.o                              12       40
    Blue_Buttons_Round_Edge_small.o                    40'800
    Blue_Buttons_Round_Edge_small_pressed.o            40'800
    Font_verdana_10_4bpp_0.o                               24
    Font_verdana_20_4bpp_0.o                               72
    Font_verdana_40_4bpp_0.o                              280
    FrontendApplication.o                         46       60
    FrontendApplicationBase.o                    706      816
    GeneratedFont.o                               84       84
    Kerning_verdana_10_4bpp.o                               4
    Kerning_verdana_20_4bpp.o                               4
    Kerning_verdana_40_4bpp.o                               4
    Model.o                                       10
    OSWrappers.o                                 156        1        9
    STM32DMA.o                                   898      176
    STM32TouchController.o                       162       24        4
...
    heap_4.o                                     444            32'792
...
touchgfx_core.a: [7]
    AbstractButton.o                             136
    AbstractPartition.o                            8
    Application.o                              2'218      290       28
    Bitmap.o                                   1'064      604       36
    Box.o                                        108      104
    Button.o                                     276      308
    ConstFont.o                                   62
    Container.o                                  510      396
    DMA.o                                        558      252
    DisplayTransformation.o                      192
    Drawable.o                                   418
    FontManager.o                                 12                 4
    Gestures.o                                   364       60
    HAL.o                                      1'758      544       18
    LCD24bpp.o                                 2'732    1'604       80
    Screen.o                                   1'924      124
    TouchCalibration.o                           252                76
    TypedText.o                                                     14
    ------------------------------------------------------------------
    Total:                                    12'728    4'286      256

    Gaps                                                    4        3
    Linker created                                         36    2'560
----------------------------------------------------------------------
    Grand Total:                              38'676   88'973   42'731
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uD14C\uC774\uBE14\uC5D0\uB294 3\uAC1C\uC758 \uC22B\uC790 \uC5F4\uC774 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `ro code`), `\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `ro data`), `\uB294 \uC77D\uAE30 \uC804\uC6A9\uC73C\uB85C, \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `rw data`), `\uB294 \uC0C1\uC218\uAC00 \uC544\uB2CC \uC77D\uAE30-\uC4F0\uAE30 \uBCC0\uC218\uC774\uBA70 RAM\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14C\uC774\uBE14\uC758 \uD589\uC740 7\uAC1C\uC758 \uBE14\uB85D\uC73C\uB85C \uB098\uB269\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uBE14\uB85D\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9\uB418\uB294 .cpp \uD30C\uC77C\uB4E4\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. \uB2E4\uB984 \uBE14\uB85D 6\uAC1C\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC(.a \uD30C\uC77C)\uB4E4\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9\uC5D0\uB294 TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC("touchgfx_core.a: `, `[7]`, `\u201D \uC139\uC158)\uB97C \uBCF4\uBA74 12,728\uBC14\uC774\uD2B8\uC758 \uCF54\uB4DC\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00\uB41C \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uADF8 \uC678 4,286\uBC14\uC774\uD2B8\uC758 \uC0C1\uC218 \uB370\uC774\uD130 \uD3EC\uD568).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-ram"
  }), `\uB0B4\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC804\uCCB4 \uB0B4\uBD80 RAM \uC0AC\uC6A9\uB7C9\uC744 \uC54C\uACE0 \uC2F6\uB2E4\uBA74 Module Summary \uD14C\uC774\uBE14 \uD558\uB2E8\uC5D0 \uC788\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Grand Total`), ` \uD589\uC744 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uC138 \uBC88\uC7AC \uC5F4\uC774 \uB0B4\uBD80 RAM\uC785\uB2C8\uB2E4. \uC704\uC5D0\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 \uB0B4\uBD80 RAM \uC0AC\uC6A9\uB7C9\uC774 42,731\uBC14\uC774\uD2B8\uC778 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uCD1D \uC0AC\uC6A9\uB7C9\uC744 \uBCF4\uBA74 TouchGFX \uB77C\uC774\uBE0C\uB7EC\uB9AC `, `[7]`, `\uC5D0\uC11C 256\uBC14\uC774\uD2B8\uAC00 \uC0AC\uC6A9\uB41C \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. heap_4.o\uC5D0\uC11C\uB294 32,792\uBC14\uC774\uD2B8\uAC00 \uC0AC\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uC6A9\uB7C9\uC740 FREERTOS\uB97C \uC704\uD574 \uC608\uC57D\uB41C \uB3D9\uC801 \uBA54\uBAA8\uB9AC \uD799\uC785\uB2C8\uB2E4. 32Kb\uB294 \uAE30\uBCF8\uAC12\uC77C \uBFD0\uC774\uBA70, \uD799 \uD06C\uAE30\uB294 STM32CubeMX\uC5D0\uC11C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C TouchGFX \uD504\uB85C\uADF8\uB7A8\uC740 \uC774 \uD799\uC5D0\uC11C \uC77C\uBD80 Kb\uB9CC \uC0AC\uC6A9\uD558\uACE0, \uC8FC\uB85C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uC791\uC5C5\uC5D0 \uC2A4\uD0DD\uC744 \uD560\uB2F9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FrontendHeap\uC744 \uAC80\uC0C9\uD558\uBA74 \uC2A4\uD06C\uB9B0 \uAC1D\uCCB4\uC758 \uD06C\uAE30\uB97C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `FrontendHeap::getInstance()::instance
                        0x2000'95d0   0x240  Data  Gb  TouchGFXConfiguration.o [1]
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uD544\uC694\uD55C \uAC1D\uCCB4\uAC00 \uCC28\uC9C0\uD558\uB294 \uC6A9\uB7C9\uC740 0x240\uBC14\uC774\uD2B8, \uC989 576\uBC14\uC774\uD2B8\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "internal-flash"
  }), `\uB0B4\uBD80 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Grand Total`), ` \uD589\uC744 \uBCF4\uBA74 \uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C 38.676\uBC14\uC774\uD2B8 \uCF54\uB4DC + 88,973\uBC14\uC774\uD2B8 \uB370\uC774\uD130\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uC77C\uBD80\uB9CC \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. 2\uAC1C \uC774\uC0C1\uC758 \uBC84\uD2BC \uC774\uBBF8\uC9C0\uAC00 \uC678\uC7A5 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB0B4\uBD80 \uD50C\uB798\uC2DC\uC5D0 \uC800\uC7A5\uB418\uB294 \uCF54\uB4DC\uC640 \uB370\uC774\uD130\uC758 \uD06C\uAE30\uB97C \uC54C\uACE0 \uC2F6\uB2E4\uBA74 \uBA3C\uC800 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `PLACEMENT SUMMARY`), `(\uC77C\uBD80 \uC815\uBCF4 \uC0AD\uC81C\uB428)\uB97C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `*******************************************************************************
*** PLACEMENT SUMMARY
***

"A0":  place at address 0x800'0000 { ro section .intvec };
"P1":  place in [from 0x800'0000 to 0x80f'ffff] { ro };
"P2":  place in [from 0x2000'0000 to 0x2004'ffff] { rw };
"P3":  place in [from 0x9000'0000 to 0x90ff'ffff] {
          section ExtFlashSection, section FontFlashSection,
          section TextFlashSection };
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB0B4\uBD80 \uD50C\uB798\uC2DC\uB294 \uC8FC\uC18C\uAC00 0x08000000\uC73C\uB85C \uC2DC\uC791\uB429\uB2C8\uB2E4. \uC704\uC5D0\uC11C\uB294 \uB450 \uC601\uC5ED\uC778 "A0"\uACFC "P1"\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9F5 \uD30C\uC77C\uC744 \uC880 \uB354 \uC790\uC138\uD788 \uBCF4\uBA74 \uB450 \uC601\uC5ED\uC5D0 \uC800\uC7A5\uB41C \uB0B4\uC6A9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-5,15-15}",
    "{5-5,15-15}": true
  }), `  Section                Kind         Address      Size  Object
  -------                ----         -------      ----  ------
"A0":                                             0x1c8
  .intvec                ro code   0x800'0000     0x1c8  startup_stm32f746xx.o [1]
                                 - 0x800'01c8     0x1c8

"P1":                                             0xb05d
  .text                   ro code   0x800'01c8     0x9b8  main.o [1]
  .text                   ro code   0x800'0b80      0x14  memset.o [5]
...
  .text                   ro code   0x800'b17a       0x2  AbstractButton.o [7]
  .rodata                 const     0x800'b17c       0x1  unwind_debug.o [6]
  .rodata                 const     0x800'b17d       0x0  zero_init3.o [5]
  .rodata                 const     0x800'b17d       0x0  lz77_init_single.o [5]
  Initializer bytes       const     0x800'b17d      0xa8  <for P2-1>
                                  - 0x800'b225    0xb05d
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"A0\u201D\uC758 \uC0AC\uC6A9\uB7C9\uC740 0x1c8\uBC14\uC774\uD2B8, \uC989 456\uBC14\uC774\uD2B8\uC774\uACE0, \u201CP1\u201D\uC758 \uC0AC\uC6A9\uB7C9\uC740 0xb05d\uBC14\uC774\uD2B8, \uC989 45,149\uBC14\uC774\uD2B8\uC785\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uB0B4\uBD80 \uD50C\uB798\uC2DC\uC758 \uCD1D \uC0AC\uC6A9\uB7C9\uC740 45,605\uBC14\uC774\uD2B8\uAC00 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "external-flash"
  }), `\uC678\uC7A5 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC678\uC7A5 \uD50C\uB798\uC2DC\uB294 \u201CP3\u201D \uC601\uC5ED\uC785\uB2C8\uB2E4(\uC8FC\uC18C\uAC00 0x90000000\uC73C\uB85C \uC2DC\uC791). \uC774 \uC601\uC5ED\uC758 \uB0B4\uC6A9\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-14}",
    "{14-14}": true
  }), `"P3":                                          0x1'4076
  ExtFlashSection        const    0x9000'0000    0x9f60  Blue_Buttons_Round_Edge_small.o [1]
  ExtFlashSection        const    0x9000'9f60    0x9f60  Blue_Buttons_Round_Edge_small_pressed.o [1]
  FontFlashSection       const    0x9001'3ec0     0x118  Font_verdana_40_4bpp_0.o [1]
  FontFlashSection       const    0x9001'3fd8      0x48  Font_verdana_20_4bpp_0.o [1]
  FontFlashSection       const    0x9001'4020      0x18  Font_verdana_10_4bpp_0.o [1]
  FontFlashSection       const    0x9001'4038      0x10  Table_verdana_10_4bpp.o [1]
  FontFlashSection       const    0x9001'4048      0x10  Table_verdana_20_4bpp.o [1]
  FontFlashSection       const    0x9001'4058      0x10  Table_verdana_40_4bpp.o [1]
  FontFlashSection       const    0x9001'4068       0x4  Kerning_verdana_10_4bpp.o [1]
  FontFlashSection       const    0x9001'406c       0x4  Kerning_verdana_20_4bpp.o [1]
  FontFlashSection       const    0x9001'4070       0x4  Kerning_verdana_40_4bpp.o [1]
  TextFlashSection       const    0x9001'4074       0x2  Texts.o [1]
                                - 0x9001'4076  0x1'4076
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C \uC678\uC7A5 \uD50C\uB798\uC2DC\uC758 \uCD1D \uC0AC\uC6A9\uB7C9\uC740 0x14076\uBC14\uC774\uD2B8, \uC989 82,038\uBC14\uC774\uD2B8\uC785\uB2C8\uB2E4. \uC774 \uC6A9\uB7C9\uC758 \uB300\uBD80\uBD84\uC774 2\uAC1C\uC758 \uBC84\uD2BC \uC774\uBBF8\uC9C0\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4(0x9f60\uBC14\uC774\uD2B8\uC758 2\uBC30 = 40,800\uBC14\uC774\uD2B8). \uB098\uBA38\uC9C0 \uB370\uC774\uD130\uB294 \uAE00\uAF34 3\uAC1C\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC774 \uC608\uC2DC\uC5D0\uC11C\uB294 \uD14D\uC2A4\uD2B8 \uC5C6\uC774 \u2018?\u2019 \uBB38\uC790\uB9CC \uD3EC\uD568\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uAE00\uAF34\uC774 \uC0AC\uC6A9\uD558\uB294 \uACF5\uAC04\uC774 \uB9CE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "summary"
  }), `\uC694\uC57D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC678\uBD80 RAM\uC5D0 \uC800\uC7A5\uB418\uB294 \uB370\uC774\uD130\uB294 \uD504\uB808\uC784\uBC84\uD37C \uBC16\uC5D0 \uC5C6\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBCC0\uC218\uB85C \uC815\uC758\uB418\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uB9C1\uCEE4 \uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD574\uC0C1\uB3C4\uB294 24\uBE44\uD2B8\uC5D0\uC11C 480x272 \uD53D\uC140\uC785\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uB294 2\uAC1C\uC774\uACE0, \uCD1D \uC0AC\uC6A9\uB7C9\uC740 480 `, `*`, ` 272 `, `*`, ` 3 * 2, \uC989 786,360\uBC14\uC774\uD2B8\uAC00 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBA54\uBAA8\uB9AC \uC720\uD615`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC6A9\uB3C4`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `42,731\uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX \uC2A4\uD06C\uB9B0 \uAC1D\uCCB4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `576\uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `45,605\uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX \uD504\uB808\uC784\uC6CC\uD06C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `12.728\uBC14\uC774\uD2B8 \uCF54\uB4DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `786,360\uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uC7A5 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `82,028\uBC14\uC774\uD2B8`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "demo-1"
  }), `Demo 1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610 \uB2E4\uB978 \uC608\uB85C TouchGFX Demo1\uC758 \uC218\uCE58\uAC00 \uC788\uB294\uB370, \uC774\uB294 TouchGFX Designer\uC5D0\uC11C \uCC3E\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 5\uAC1C\uC758 \uC2A4\uD06C\uB9B0\uC744 \uBE44\uB86F\uD574 100\uAC1C \uC774\uC0C1\uC758 \uC774\uBBF8\uC9C0\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/memory-usage/demo1.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "STM32F746 Demo 1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "summary-1"
  }), `\uC694\uC57D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBA54\uBAA8\uB9AC \uC720\uD615`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC6A9\uB3C4`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `51,387\uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX \uC2A4\uD06C\uB9B0 \uAC1D\uCCB4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `10,772\uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB0B4\uBD80 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `187,768\uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TouchGFX \uD504\uB808\uC784\uC6CC\uD06C \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `85,174\uBC14\uC774\uD2B8 \uCF54\uB4DC`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uBD80 RAM`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `786,360\uBC14\uC774\uD2B8`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC678\uC7A5 \uD50C\uB798\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5,281,812\uBC14\uC774\uD2B8`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);