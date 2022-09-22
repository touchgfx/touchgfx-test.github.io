"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[4863],{

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

/***/ 70814:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
}));
class Caution extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-caution)",
      header: "Caution",
      type: "caution",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Caution);


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

/***/ 98042:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70814);
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
  id: "01-create-project",
  title: "1. Create Project",
  sidebar_label: "1. Create Project"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/01-create-project",
  "id": "development/board-bring-up/how-to/01-create-project",
  "title": "1. Create Project",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/01-create-project.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/01-create-project",
  "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/01-create-project",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "id": "01-create-project",
    "title": "1. Create Project",
    "sidebar_label": "1. Create Project"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uAC1C\uBC1C \uC18C\uAC1C",
    "permalink": "/4.20/ko/docs/development/board-bring-up/board-introduction"
  },
  "next": {
    "title": "2. CPU Running",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/02-cpu-running"
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
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC \uC120\uD0DD",
  id: "user-code-sections",
  level: 3
}, {
  value: "\uCD94\uAC00 \uC790\uB8CC",
  id: "further-reading",
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
  }), `\uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 STM32CubeMX\uB97C \uC0AC\uC6A9\uD574 \uD2B9\uC815 MCU\uC5D0 \uB300\uD55C \uC791\uC5C5 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uD504\uB85C\uC81D\uD2B8\uB294 \uC774 \uC785\uBB38 \uAC00\uC774\uB4DC\uC5D0 \uB098\uC640 \uC788\uB294 \uB098\uBA38\uC9C0 \uB2E8\uACC4\uB4E4\uC758 \uD1A0\uB300\uAC00 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD5A5\uD6C4 \uB2E8\uACC4\uC5D0\uC11C\uB294 STM32CubeMX\uB97C \uC0AC\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uAC1C\uC120\uD558\uACE0, \uD544\uC694\uD55C \uBAA8\uB4E0 \uC8FC\uBCC0 \uC7A5\uCE58\uAC00 \uC791\uB3D9\uD558\uB3C4\uB85D \uCF54\uB4DC\uB97C \uC791\uC131 \uBC0F \uD1B5\uD569\uD560 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD504\uB85C\uC81D\uD2B8\uB294 \uC7A5\uAE30\uAC04 \uC9C0\uC18D \uBC0F \uC720\uC9C0\uB420 \uAC83\uC785\uB2C8\uB2E4. \uC774\uC804 \uB2E8\uACC4\uB85C \uB3CC\uC544\uAC00\uC11C \uB2E4\uC2DC \uC2E4\uD589\uD560 \uC218 \uC788\uB3C4\uB85D \uC11C\uB85C \uB2E4\uB978 \uBC84\uC804\uC758 \uAC00\uC6A9\uC131\uC744 \uC720\uC9C0\uD558\uAE30 \uC704\uD55C \uC804\uB7B5\uC744 \uC774 \uB2E8\uACC4\uC5D0\uC11C \uACB0\uC815\uD574\uC57C\uD569\uB2C8\uB2E4.  \uC0C8 \uD558\uB4DC\uC6E8\uC5B4 \uC0AC\uC6A9\uC774\uB098 \uD558\uB4DC\uC6E8\uC5B4 \uC7AC\uC810\uAC80 \uC911 \uD55C \uAC00\uC9C0 \uBC29\uBC95\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC18C\uADDC\uBAA8 \uD14C\uC2A4\uD2B8 \uD504\uB85C\uADF8\uB7A8\uC774 \uB2E4\uC218 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0\uB294 \uC774 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC88B\uC740 \uC2DC\uC791\uC810\uC774 \uB418\uC5B4 \uC904 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\uBAA9\uD45C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBCF4\uB4DC\uC5D0 \uD50C\uB798\uC2F1\uD574\uC11C \uC2E4\uD589\uD560 \uC218 \uC788\uB294 \uD504\uB85C\uC81D\uD2B8\uB97C  STM32CubeMX\uC5D0 \uC0DD\uC131\uD558\uB294 \uAC83\uC774 \uBAA9\uD45C\uC785\uB2C8\uB2E4. \uB514\uBC84\uAC70 \uAE30\uB2A5\uC744 \uAC16\uCD98 IDE(\uC608: STM32CubeIDE \uB610\uB294 IAR Embedded Workbench)\uAC00 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 MCU\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uB514\uBC84\uAE45 \uBC0F \uC2A4\uD15D \uB514\uBC84\uAE45\uC744 \uD560 \uC218 \uC788\uB294\uC9C0\uB3C4 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uBC84\uAC70\uAC00 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD504\uB85C\uC81D\uD2B8\uC758 \uAC01\uC885 \uC704\uCE58\uC5D0\uC11C \uB514\uBC84\uAE45 \uBA85\uB839\uBB38\uC744 \uCD9C\uB825\uD560 \uBC29\uBC95\uC744 \uCC3E\uC544\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74  \uC2DC\uB9AC\uC5BC \uD3EC\uD2B8\uB97C \uD1B5\uD574 \uCD9C\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
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
  }), `\uD504\uB85C\uC81D\uD2B8\uAC00 IDE\uC5D0\uC11C \uC5F4\uB9BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeMX\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uAC00 \uC62C\uBC14\uB974\uAC8C \uC0DD\uC131\uB418\uC5C8\uAE30 \uB54C\uBB38\uC5D0 \uCD94\uAC00\uC801\uC778 \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5 \uAC1C\uBC1C\uC744 \uC704\uD55C \uC2DC\uC791\uC810\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB85C\uC81D\uD2B8 \uCEF4\uD30C\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB85C\uC81D\uD2B8\uB294 \uB4DC\uB77C\uC774\uBC84\uC5D0\uC11C \uC62C\uBC14\uB974\uAC8C \uC124\uC815\uC774 \uB418\uC5C8\uC73C\uBA70 \uACBD\uB85C\uB97C \uD3EC\uD568\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uCF54\uB4DC\uB97C \uCD94\uAC00\uB85C \uC791\uC131\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8\uB97C \uBC18\uBCF5\uC801\uC73C\uB85C \uC7AC\uCEF4\uD30C\uC77C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC911\uB2E8\uC810\uC5D0 \uB3C4\uB2EC\uD588\uB294\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB85C\uC81D\uD2B8\uB294 \uB514\uBC84\uAE45\uC774 \uAC00\uB2A5\uD558\uBA70, \uC911\uB2E8\uC810\uC5D0\uC11C \uBA48\uCD94\uAC8C \uB429\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8 \uC0C1\uD0DC\uB97C \uAC80\uD1A0\uD558\uC5EC \uC624\uB958\uB97C \uC870\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\uC804\uC81C \uC870\uAC74`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uC804\uC81C \uC870\uAC74\uC785\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32 \uAE30\uBC18 \uBCF4\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB85C\uADF8\uB798\uBC0D/\uB514\uBC84\uAE45 \uC778\uD130\uD398\uC774\uC2A4(ST-LINK, JLINK \uB4F1)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32CubeMX \uC124\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `IDE \uC124\uCE58(STM32CubeIDE, IAR Embedded Workbench, Keil uVision \uB4F1)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\uC2E4\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C STM32CubeMX\uC5D0\uC11C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uB294 \uB2E8\uACC4\uB4E4\uC5D0 \uB300\uD574 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uC608\uC81C\uC5D0\uC11C\uB294 STM32F429 MCU\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uBB3C\uB860 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C MCU\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC758 "Start My Project from MCU"\uC5D0\uC11C  "ACCESS TO MCU SELECTOR"\uB97C \uD074\uB9AD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uC0C8 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uD3C9\uAC00 \uD0A4\uD2B8(\uC608: STM32F429 Discovey \uBCF4\uB4DC)\uB97C \uAE30\uBC18\uC73C\uB85C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4\uAC00 \uD3C9\uAC00 \uD0A4\uD2B8 \uC911 \uD558\uB098\uB97C \uAE30\uBC18\uC73C\uB85C \uC124\uACC4\uB41C \uACBD\uC6B0\uC5D0\uB294 \uC774\uAC83\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C \uD574\uB2F9 MCU\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 STM32F429ZIT6U\uB97C \uC120\uD0DD\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "MCU \uC120\uD0DD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Project Manager" \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC774\uB984\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uBB3C\uB860 \uC0C8 \uD504\uB85C\uC81D\uD2B8\uC758 \uC704\uCE58\uB3C4 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. "Application Structure"\uB85C \uAC00\uC11C "Advanced"\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 "Toolchain / IDE"\uB85C \uAC00\uC11C IDE\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uC608\uC81C\uC5D0\uC11C\uB294 IAR\uC744 \uC120\uD0DD\uD588\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uD504\uB85C\uC81D\uD2B8 \uC774\uB984 \uBC0F IDE \uC124\uC815"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC624\uB978\uCABD \uC0C1\uB2E8 \uBAA8\uC11C\uB9AC\uC758 "Generate Code" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4. \uC120\uD0DD\uD55C MCU \uC81C\uD488\uAD70(F4/F7/H7)\uC5D0\uC11C\uC758 \uCCAB \uBC88\uC9F8 \uD504\uB85C\uC81D\uD2B8\uC778 \uACBD\uC6B0, STM32CubeMX\uB294 \uD574\uB2F9\uB418\uB294 STM32Cube \uD38C\uC6E8\uC5B4 \uD328\uD0A4\uC9C0\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uAC83\uC73C\uB85C \uC790\uB3D9\uC73C\uB85C \uC81C\uC548\uD569\uB2C8\uB2E4. \uCD94\uD6C4 \uC0AC\uC6A9\uC744 \uC704\uD574 \uCD5C\uC2E0 \uBC84\uC804\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB3C4\uB85D \uC774\uB97C \uC218\uB77D\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "STM32CubeMX\uB294 STM32Cube \uD38C\uC6E8\uC5B4\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Open Project"\uB97C \uD074\uB9AD\uD558\uC5EC IDE\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC5FD\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uB428"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "IAR Embedded Workbench\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8 \uC5F4\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC5D0\uC11C \uC0DD\uC131\uB41C \uD504\uB85C\uC81D\uD2B8\uC5D0\uB294 MCU \uACE0\uC720\uC758 \uC2A4\uD0C0\uD2B8\uC5C5 \uCF54\uB4DC, \uC778\uD130\uB7FD\uD2B8 \uD14C\uC774\uBE14, \uC2DC\uC2A4\uD15C \uCD08\uAE30\uD654 \uCF54\uB4DC, MCU\uC758 \uBAA8\uB4E0 \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0 \uB300\uD55C HAL \uB4DC\uB77C\uC774\uBC84\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C IDE\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uCEF4\uD30C\uC77C \uBC0F \uB514\uBC84\uAE45\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. IAR\uC5D0\uC11C Project->Make\uB97C \uD074\uB9AD\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uB97C \uCEF4\uD30C\uC77C\uD558\uACE0, Project->Download and Debug\uB97C \uD074\uB9AD\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uB97C \uB514\uBC84\uAE45\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx07.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "IAR Embedded Workbench\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8 \uB514\uBC84\uAE45"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IAR \uD504\uB85C\uC81D\uD2B8\uB294 STLink \uB514\uBC84\uAC70\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uC124\uC815\uB429\uB2C8\uB2E4. \uB2E4\uB978 \uAC83\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 IDE\uC758 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD55C Debugger \uC18D\uC131\uC744 \uBCC0\uACBD\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/create/cubemx08.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uBA54\uC778 \uB8E8\uD504\uAC00 \uC5F0\uC18D\uC801\uC73C\uB85C \uC2E4\uD589 \uC911"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `While \uBA54\uC778 \uB8E8\uD504\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uC6B4\uC601 \uCCB4\uC81C \uC5C6\uC774 \uC2E4\uD589 \uC911\uC778 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC911\uC694\uD569\uB2C8\uB2E4. \uC911\uB2E8\uC810\uC744 \uC124\uC815\uD558\uC5EC \uB3C4\uB2EC \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uACE0 \uB8E8\uD504\uC5D0 \uCF54\uB4DC\uB97C \uC77C\uBD80 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `IDE\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0B4\uD3B4\uBCF4\uBA74\uC11C \uAD6C\uC870\uB97C \uC775\uD788\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 SystemInit\uC5D0\uC11C \uBA54\uC778 \uB8E8\uD504\uAE4C\uC9C0 \uC0B4\uD3B4\uBCF4\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "user-code-sections"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC \uC120\uD0DD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8 \uD3B8\uC9D1\uC744 \uC2DC\uC791\uD558\uAE30 \uC55E\uC11C STM32CubeMX\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 "User Code \uC139\uC158"\uC758 \uAC1C\uB150\uC744 \uC774\uD574\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8\uC758 Core/Src \uD3F4\uB354\uC5D0 \uC788\uB294 \uBAA8\uB4E0 \uC18C\uC2A4 \uD30C\uC77C\uC740 STM32CubeMX\uC5D0\uC11C \uC0DD\uC131\uB41C \uAC83\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 UART \uD65C\uC131\uD654\uB97C \uC704\uD574 \uB098\uC911\uC5D0 STM32CubeMX\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC131\uC744 \uBCC0\uACBD\uD560 \uB54C \uC774\uB7EC\uD55C \uD30C\uC77C \uC911 \uC77C\uBD80\uAC00 \uB2E4\uC2DC \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC774\uB4E4 \uC911 \uC77C\uBD80 \uD30C\uC77C\uC5D0\uB294 \uC0BD\uC785\uB41C \uCF54\uB4DC\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8\uC77C \uADDC\uCE59\uC744 \uB530\uB974\uC9C0 \uC54A\uB294 \uD55C, STM32CubeMX\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uAC00 \uB2E4\uC2DC \uC0DD\uC131\uB420 \uB54C \uCF54\uB4DC\uAC00 \uC190\uC2E4\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `User Code \uC139\uC158\uC5D0\uC11C\uB9CC \uCF54\uB4DC \uC791\uC131`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `User Code \uC139\uC158 \uBC16\uC5D0\uC11C \uC791\uC131\uD558\uB294 \uBAA8\uB4E0 \uCF54\uB4DC\uB294 STM32CubeMX\uC5D0 \uC758\uD574 \uC0AD\uC81C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD55C \uC608\uB85C Core/Src/main.c\uC758 \uCCAB \uD589\uC744 \uBA87 \uC904 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-5}",
    "{3-5}": true
  }), `int main(void)
{
  /* USER CODE BEGIN 1 */

  /* USER CODE END 1 */


  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();
  ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uC778 \uD568\uC218\uAC00 \uC2DC\uC791\uB420 \uB54C \uC5EC\uAE30\uC5D0 \uCF54\uB4DC\uB97C \uC0BD\uC785\uD558\uB824\uB294 \uACBD\uC6B0\uC5D0\uB294 USER CODE BEGIN 1\uACFC USER CODE END 1 \uC0AC\uC774\uC5D0 \uBC30\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uBE14\uB85D \uBC16\uC5D0 \uCF54\uB4DC\uB97C \uBC30\uCE58\uD558\uBA74 STM32CubeMX\uC5D0 \uC758\uD574 \uC0AD\uC81C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "User Code \uC139\uC158 \uBC16\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC791\uC131\uD574\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uCF54\uB4DC\uB294 STM32CubeMX\uC5D0\uC11C \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB420 \uB54C \uC0AD\uC81C\uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "further-reading"
  }), `\uCD94\uAC00 \uC790\uB8CC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC5D0 \uB9C1\uD06C\uB41C \uBB38\uC11C\uB4E4\uC5D0\uB294 CubeMX\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC815\uBCF4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",
    mdxType: "Link"
  }, "STM32CubeMX \uC0AC\uC6A9\uC790 \uB9E4\uB274\uC5BC")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeide.html#resource",
    mdxType: "Link"
  }, "STM32CubeIDE \uAD00\uB828 \uC790\uB8CC")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",
    mdxType: "Link"
  }, "STM32CubeMX\uC640 STM32Cube\uC5D0 \uAD00\uD55C \uB300\uADDC\uBAA8 \uACF5\uAC1C \uC628\uB77C\uC778 \uAC15\uC88C")))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);