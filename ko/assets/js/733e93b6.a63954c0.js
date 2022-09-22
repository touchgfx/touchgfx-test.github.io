"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2649],{

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

/***/ 97868:
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
  id: "03-display-internal",
  title: "3. \uB0B4\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294\uB514\uC2A4\uD50C\uB808\uC774",
  sidebar_label: "3. \uB0B4\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294\uB514\uC2A4\uD50C\uB808\uC774"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/03-display-internal",
  "id": "development/board-bring-up/how-to/03-display-internal",
  "title": "3. \uB0B4\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294\uB514\uC2A4\uD50C\uB808\uC774",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/03-display-internal.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/03-display-internal",
  "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/03-display-internal",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "id": "03-display-internal",
    "title": "3. \uB0B4\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294\uB514\uC2A4\uD50C\uB808\uC774",
    "sidebar_label": "3. \uB0B4\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294\uB514\uC2A4\uD50C\uB808\uC774"
  },
  "sidebar": "docs",
  "previous": {
    "title": "2. CPU Running",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/02-cpu-running"
  },
  "next": {
    "title": "4. External RAM",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/04-enable-external-ram"
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
  value: "\uBCD1\uB82C RGB \uB514\uC2A4\uD50C\uB808\uC774",
  id: "parallel-rgb-displays",
  level: 3
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774 GPIO",
  id: "display-gpio",
  level: 4
}, {
  value: "LTDC \uAD6C\uC131",
  id: "ltdc-configuration",
  level: 4
}, {
  value: "\uD074\uB85D \uAD6C\uC131",
  id: "clock-configuration",
  level: 4
}, {
  value: "\uD504\uB808\uC784 \uBC84\uD37C \uC8FC\uC18C \uC124\uC815",
  id: "setting-the-framebuffer-address",
  level: 4
}, {
  value: "Enabling LTDC interrupt",
  id: "enabling-ltdc-interrupt",
  level: 4
}, {
  value: "\uD504\uB808\uC784\uB960 \uD655\uC778",
  id: "check-the-framerate",
  level: 4
}, {
  value: "SPI \uB514\uC2A4\uD50C\uB808\uC774",
  id: "spi-display",
  level: 3
}, {
  value: "SPI \uAD6C\uC131",
  id: "spi-configuration",
  level: 4
}, {
  value: "\uB514\uC2A4\uD50C\uB808\uC774 \uC0C9\uC0C1 \uD655\uC778",
  id: "checking-the-display-colors",
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
  }), `\uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uB0B4\uBD80 RAM\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uD53D\uC140 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD568\uC73C\uB85C\uC368 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uAD6C\uB3D9\uC2DC\uCF1C\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uB370\uC774\uD130\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD560 \uC218 \uC788\uACE0, \uB514\uC2A4\uD50C\uB808\uC774 \uB0B4\uC6A9\uC744 \uC9C0\uC18D\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uC774\uBBF8\uC9C0 \uB370\uC774\uD130\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC804\uC1A1\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4 \uC5B4\uB5A4 \uC624\uB958\uB3C4 \uC5C6\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC0C8 \uB370\uC774\uD130\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC804\uC1A1\uD560 \uC218 \uC788\uB294\uC9C0 \uD655\uC778\uD560 \uAC83\uC785\uB2C8\uB2E4. \uB610\uD55C \uC804\uC1A1 \uC18D\uB3C4\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD655\uBCF4\uD560 \uC218 \uC788\uB294 \uD504\uB808\uC784\uB960\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uBBC0\uB85C \uC804\uC1A1 \uC18D\uB3C4\uB3C4 \uD568\uAED8 \uCE21\uC815\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804 \uC139\uC158\uC5D0\uC11C \uC54C\uC544\uBCF4\uC558\uB4EF\uC774 \uB0B4\uBD80 RAM\uC740 \uC77D\uAE30\uC640 \uC4F0\uAE30\uAC00 \uBAA8\uB450 \uAC00\uB2A5\uD558\uB2E4\uB294 \uC810\uC5D0\uC11C \uB0B4\uBD80 RAM\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uBC30\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC5EC \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uBC18\uBCF5 \uC804\uC1A1\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/framebuffer"
  }), `\uD504\uB808\uC784 \uBC84\uD37C`), `\uC758 \uD06C\uAE30\uB294 \uC544\uB798 \uACF5\uC2DD\uC5D0 \uB530\uB77C \uACC4\uC0B0\uB41C\uB2E4\uB294 \uC810\uC744 \uAE30\uC5B5\uD558\uC138\uC694:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uB108\uBE44 x \uB192\uC774 x bpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 \uD574\uC0C1\uB3C4\uAC00 480 x 272\uC778 \uC77C\uBC18\uC801\uC778 16\uBE44\uD2B8 \uB514\uC2A4\uD50C\uB808\uC774\uB294 480x272x16/8 \uBC14\uC774\uD2B8, \uC989, 261120 \uBC14\uC774\uD2B8\uC758 \uACF5\uAC04\uC744 \uCC28\uC9C0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uD06C\uAE30\uB85C \uBBF8\uB8E8\uC5B4 \uBCFC \uB54C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uB0B4\uBD80 RAM\uC5D0 \uC800\uC7A5\uD558\uAE30\uC5D0 \uADF8 \uD06C\uAE30\uAC00 \uB108\uBB34 \uD070 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uB2E8\uACC4\uB97C \uAC74\uB108\uB6F0\uBA74 \uC548 \uB429\uB2C8\uB2E4. \uB300\uC2E0\uC5D0 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uC77C\uBD80\uB9CC \uC5C5\uB370\uC774\uD2B8\uD558\uB3C4\uB85D \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC\uB97C \uAD6C\uC131\uD558\uC2ED\uC2DC\uC624. \uC774\uB807\uAC8C \uD558\uBA74 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uD544\uC694\uD55C RAM\uC758 \uC6A9\uB7C9\uC744 \uC870\uC815\uD558\uACE0 \uC774\uB97C \uB0B4\uBD80 RAM\uC5D0 \uB9DE\uCD9C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC720\uD615\uC740 \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1\uC5D0 \uD544\uC694\uD55C \uC124\uC815\uACFC \uCF54\uB4DC\uC5D0 \uC0C1\uB2F9\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uCCAB \uBC88\uC9F8 \uB300\uC0C1\uC73C\uB85C LTDC\uC5D0 \uC5F0\uACB0\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 SPI \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB2E4\uBA74 \uCF54\uB4DC\uAC00 \uC804\uD600 \uB2E4\uB97C \uAC83\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC791\uC5C5\uACFC \uBAA9\uD45C\uB294 \uB611\uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\uBAA9\uD45C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC758 \uBAA9\uD45C\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC804\uC1A1\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uB610\uD55C \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uB0B4\uC6A9\uC744 \uC218\uC815\uD574\uC11C \uACC4\uC18D\uD574\uC11C \uC7AC\uC804\uC1A1\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uB3C4 \uD655\uC778\uD560 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
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
  }), `\uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD45C\uC2DC \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC \uB610\uB294 SPI\uC758 \uAD6C\uC131 \uBC0F \uB3D9\uC791 \uC5EC\uBD80`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC5C5\uB370\uC774\uD2B8\uB41C \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD45C\uC2DC \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB808\uC784 \uBC84\uD37C\uB97C \uBC18\uBCF5\uC801\uC73C\uB85C \uC804\uC1A1\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uACE0 \uC788\uB294\uC9C0 \uC5EC\uBD80`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC0C9\uC0C1\uC774 \uC62C\uBC14\uB978\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `GPIO\uAC00 \uC815\uD655\uD55C\uC9C0 \uC5EC\uBD80(LTDC)\uC640 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uB370\uC774\uD130 \uD615\uC2DD\uC774 \uD504\uB808\uC784 \uBC84\uD37C\uC640 \uC77C\uCE58\uD558\uB294\uC9C0 \uC5EC\uBD80`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB808\uC784\uB960\uC774 \uC62C\uBC14\uB978\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD53D\uC140 \uD074\uB85D\uACFC \uD3EC\uCE58(porch)\uAC00 \uD544\uC694\uD55C \uD504\uB808\uC784\uB960\uC744 \uD655\uBCF4\uD560 \uC218 \uC788\uB3C4\uB85D \uAD6C\uC131\uB418\uC5B4 \uC788\uB294\uC9C0 \uC5EC\uBD80`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\uC804\uC81C \uC870\uAC74`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uC804\uC81C \uC870\uAC74\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB514\uC2A4\uD50C\uB808\uC774 \uC815\uBCF4(\uC77C\uBC18\uC801\uC73C\uB85C \uC81C\uC870\uC0AC \uB370\uC774\uD130 \uC2DC\uD2B8\uC758 \uC815\uBCF4)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `MCU\uC640 \uB514\uC2A4\uD50C\uB808\uC774 \uAC04 \uC5F0\uACB0 \uC815\uBCF4`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\uC2E4\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uC720\uD615\uC5D0 \uB530\uB77C \uD544\uC694\uD55C \uC124\uC815\uC774 \uB2E4\uB985\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC5B4\uB5A4 \uC720\uD615\uC774\uB4E0\uC9C0 \uB0B4\uBD80 RAM\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC62C\uBC14\uB978 \uD06C\uAE30\uB85C \uC804\uC5ED \uBC30\uC5F4\uC744 \uC120\uC5B8\uD558\uAE30\uB9CC \uD558\uBA74 \uAC04\uB2E8\uD558\uAC8C \uBA54\uBAA8\uB9AC\uB97C \uD560\uB2F9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* USER CODE BEGIN PV */
uint16_t framebuffer[480*272];  //16 bpp framebuffer
/* USER CODE END PV */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB0B4\uBD80 RAM\uC758 \uD06C\uAE30\uAC00 \uBC30\uC5F4\uC744 \uC218\uC6A9\uD558\uAE30\uC5D0 \uCDA9\uBD84\uD558\uC9C0 \uC54A\uC73C\uBA74 480x200\uACFC \uAC19\uC774 \uD574\uC0C1\uB3C4\uB97C \uB0AE\uCDB0\uC11C \uBC30\uC5F4\uC744 \uC120\uC5B8\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC804\uC1A1\uD558\uAE30 \uC704\uD55C \uBA54\uC11C\uB4DC\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uC720\uD615\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. \uADF8\uB7FC \uC5B4\uB5BB\uAC8C \uB2E4\uB978\uC9C0 \uC9C0\uAE08\uBD80\uD130 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "parallel-rgb-displays"
  }), `\uBCD1\uB82C RGB \uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MCU\uC5D0\uC11C LTDC \uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uC5F0\uACB0\uB41C \uBCD1\uB82C RGB \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD574 \uBA3C\uC800 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC640 \uAC19\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C \uAD6C\uC131 \uC791\uC5C5\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C GPIO \uC5F0\uACB0 \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LTDC \uCEE8\uD2B8\uB864\uB7EC \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `LTDC \uD53D\uC140 \uD074\uB85D \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB808\uC784 \uBC84\uD37C \uC8FC\uC18C \uC124\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB808\uC784\uB960 \uD655\uC778`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC124\uBA85 \uC608\uC81C\uC5D0\uC11C\uC640 \uAC19\uC774 STM32F746Discovery \uD3C9\uAC00 \uD0A4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uBCF4\uB4DC\uC5D0\uB294 480*272 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uC7A5\uCC29\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "display-gpio"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 GPIO`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uB294 24 BPP \uBAA8\uB4DC\uC5D0\uC11C \uC2E4\uD589\uB418\uBBC0\uB85C LTDC\uC640 \uB514\uC2A4\uD50C\uB808\uC774 \uAC04\uC758 \uC5F0\uACB0\uC744 \uC704\uD574 24\uAC1C\uC758 GPIO\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4. STM32CubeMX\uC5D0 Multimedia -> LTDC -> GPIO Settings \uC544\uB798\uC5D0\uC11C \uAC00\uC7A5 \uC190\uC27D\uAC8C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-01.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uB514\uC2A4\uD50C\uB808\uC774 GPIO \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD53D\uC140 \uC804\uC1A1(\uC608: LTDC_B0)\uC744 \uC704\uD55C 24\uAC1C\uC758 GPIO \uC678\uC5D0 4\uAC1C\uC758 \uB514\uC2A4\uD50C\uB808\uC774 \uC81C\uC5B4 \uC2E0\uD638\uB97C \uD568\uAED8 \uAD6C\uC131\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC2E0\uD638`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD568\uC218`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_CLK`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD53D\uC140 \uD074\uB85D. 24\uAC1C \uB77C\uC778\uC5D0\uC11C \uD53D\uC140\uC744 \uC0D8\uD50C\uB9C1\uD574\uC57C \uD560 \uD0C0\uC774\uBC0D\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC2E0\uD638\uB97C \uC804\uC1A1`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_DE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB370\uC774\uD130 \uD65C\uC131\uD654 \uD65C\uC131\uD654\uB418\uBA74 \uD53D\uC140\uC774 \uC804\uC1A1\uB428`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_HSYNC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC218\uD3C9 \uB3D9\uAE30\uD654 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD53D\uC140 \uB77C\uC778 \uC2DC\uC791\uC810\uC744 \uCC3E\uC744 \uC218 \uC788\uB3C4\uB85D \uD568`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `LTDC_VSYNC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC218\uC9C1 \uB3D9\uAE30\uD654 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD504\uB808\uC784 \uC2DC\uC791\uC810\uC744 \uCC3E\uC744 \uC218 \uC788\uB3C4\uB85D \uD568`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uB4DC\uC6E8\uC5B4 \uC124\uACC4\uB97C \uD655\uC778\uD558\uACE0 \uD574\uB2F9\uD558\uB294 \uAD6C\uC131 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "ltdc-configuration"
  }), `LTDC \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC \uAD6C\uC131\uC740  STM32CubeMX\uC5D0 Multimedia -> LTDC -> Parameter Settings \uC544\uB798\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-02.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "LTDC \uD30C\uB77C\uBBF8\uD130 \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD65C\uC131 \uB108\uBE44\uC640 \uB192\uC774\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uD574\uC0C1\uB3C4\uC5D0 \uB530\uB77C \uACB0\uC815\uB429\uB2C8\uB2E4. \uB3D9\uAE30\uD654 \uD384\uC2A4 \uB108\uBE44\uC640 \uD3EC\uCE58 \uB108\uBE44\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uB370\uC774\uD130 \uC2DC\uD2B8\uC5D0\uC11C \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uB610\uD55C \uC2E0\uD638 \uADF9\uC131\uB3C4 \uD568\uAED8 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uADF8\uB808\uC774\uB85C \uD45C\uC2DC\uB41C \uAC12\uB4E4\uC740 \uB2E4\uB978 \uAC12\uC5D0\uC11C \uACC4\uC0B0\uB429\uB2C8\uB2E4. \uC774\uB4E4 \uAC12\uC740 LTDC \uB808\uC9C0\uC2A4\uD130\uC5D0 \uAE30\uB85D\uB418\uBBC0\uB85C \uCF54\uB4DC\uC5D0\uC11C \uD655\uC778\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C Multimedia -> LTDC -> Layer Settings \uC544\uB798 LTDC \uACC4\uCE35 \uAD6C\uC131\uC73C\uB85C \uC774\uB3D9\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "LTDC \uACC4\uCE35 \uD30C\uB77C\uBBF8\uD130 \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD14C\uC2A4\uD2B8\uB97C \uC704\uD574 TouchGFX\uC5D0\uC11C\uB294 \uBCF4\uD1B5 1\uAC1C\uC758 \uACC4\uCE35\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Layer 0\uC758 \uD574\uC0C1\uB3C4\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD06C\uAE30\uC5D0 \uB9DE\uC544\uC57C \uD569\uB2C8\uB2E4. \uD504\uB808\uC784 \uBC84\uD37C \uC8FC\uC18C\uB294 \uB098\uC911\uC5D0 \uC124\uC815\uD574\uC57C \uD558\uBBC0\uB85C \uC5EC\uAE30\uC11C\uB294 \uC8FC\uC18C\uB97C \uBCC0\uACBD\uD558\uC9C0 \uC54A\uACE0 \uADF8\uB300\uB85C \uB450\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C \uBC30\uC5F4\uC744 \uB514\uC2A4\uD50C\uB808\uC774 \uD574\uC0C1\uB3C4\uBCF4\uB2E4 \uC791\uAC8C \uC120\uC5B8\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD06C\uAE30\uC5D0 \uB9DE\uAC8C \uACC4\uCE35 \uD06C\uAE30\uB97C \uC870\uC815\uD569\uB2C8\uB2E4. LTDC\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uD53D\uC140\uC5D0 \uB300\uD55C \uBC30\uACBD \uC0C9\uC0C1\uC744 \uC804\uC1A1\uD569\uB2C8\uB2E4. \uBC30\uACBD \uC0C9\uC0C1\uC740 \uBE68\uAC04\uC0C9\uCC98\uB7FC \uB208\uC5D0 \uC798 \uB744\uB294 \uC0C9\uC73C\uB85C \uC124\uC815\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4(\uD30C\uB780\uC0C9: 0x00, \uB179\uC0C9: 0x00, \uBE68\uAC04\uC0C9: 0xFF).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "clock-configuration"
  }), `\uD074\uB85D \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD074\uB85D \uAD6C\uC131 \uC5ED\uC2DC \uC911\uC694\uD569\uB2C8\uB2E4. \uD074\uB85D\uC740 \uBAA8\uB4E0 GPIO\uC640 LTDC\uC5D0\uC11C \uD65C\uC131\uD654\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uD53D\uC140 \uD074\uB85D\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD5C8\uC6A9\uB418\uB294 \uBC94\uC704\uC5D0 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-04.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "\uD074\uB85D \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC\uB294 HCLK, PCLK2, LCD_CLK \uB4F1 3\uAC1C\uC758 \uD074\uB85D\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "setting-the-framebuffer-address"
  }), `\uD504\uB808\uC784 \uBC84\uD37C \uC8FC\uC18C \uC124\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uC5D0\uC11C \uACC4\uCE35 0\uC758 \uD504\uB808\uC784 \uBC84\uD37C \uC8FC\uC18C\uB97C 0xC0000000\uB85C \uAD6C\uC131\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uC8FC\uC18C\uB97C \uB0B4\uBD80 RAM\uC758 \uBC30\uC5F4 \uC8FC\uC18C\uB85C \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. STM32Cube \uD38C\uC6E8\uC5B4 HAL \uD568\uC218 \uC911 \uD558\uB098\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC27D\uAC8C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `  /* USER CODE BEGIN 2 */
  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);
  /* USER CODE END 2 */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `HAL \uD568\uC218\uC5D0\uC11C\uB294 \uACC4\uCE35\uC5D0 1, 2\uB77C\uACE0 \uBC88\uD638\uAC00 \uBD99\uC9C0\uB9CC, STM32CubeMX\uC5D0\uC11C\uB294 0, 1\uC774\uB77C\uACE0 \uBD99\uC2B5\uB2C8\uB2E4. \uC544\uB2C8\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `MX_LTDC_Init(void)`), ` \uD568\uC218\uC5D0\uC11C STM32CubeMX\uAC00 \uC0DD\uC131\uD55C \uCF54\uB4DC\uC5D0 \uB530\uB77C LTDC\uAC00 \uC644\uC804\uD788 \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC \uCEE8\uD2B8\uB864\uB7EC\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uBC18\uBCF5 \uC804\uC1A1\uD569\uB2C8\uB2E4. \uD45C\uC2DC\uB418\uB294 \uC774\uBBF8\uC9C0\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uAC12\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uB2E4\uB978 \uAC12 \uB610\uB294 \uD328\uD134\uC744 \uC804\uC1A1\uD574\uBCF4\uC2ED\uC2DC\uC624. \uC608\uB97C \uB4E4\uC5B4 memset\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD504\uB808\uC784 \uBC84\uD37C\uB97C 0xFF\uB85C \uD074\uB9AC\uC5B4\uD574\uC11C \uD770\uC0C9 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC77C\uBD80 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C\uB294 \uBC31\uB77C\uC774\uD2B8\uB97C \uCF1C\uC11C \uD504\uB808\uC784\uC774 \uB208\uC5D0 \uBCF4\uC774\uAC8C \uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "enabling-ltdc-interrupt"
  }), `Enabling LTDC interrupt`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The LTDC controller raises an interrupt for each frame, this interrupt must be enabled in the NVIC (core interrupt controller) to be able to handle the interrupt in your application.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-ltdc-interrupt-config.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "LTDC interrupt configuration"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In the interrupt handler you must reenable the interrupt after each time it fires.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32f7xx_it.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{7}",
    "{7}": true
  }), `void LTDC_IRQHandler(void)
{
  /* USER CODE BEGIN LTDC_IRQn 0 */
  /* USER CODE END LTDC_IRQn 0 */
  HAL_LTDC_IRQHandler(&hltdc);
  /* USER CODE BEGIN LTDC_IRQn 1 */
  HAL_LTDC_ProgramLineEvent(&hltdc,0);
  /* USER CODE END LTDC_IRQn 1 */
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "check-the-framerate"
  }), `\uD504\uB808\uC784\uB960 \uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The LTDC interrupt will be used to drive the application forward. \uB514\uBC84\uAC70\uB97C \uC0AC\uC6A9\uD574 \uC774 \uC778\uD130\uB7FD\uD2B8\uAC00 \uBC1C\uC0DD\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC778\uD130\uB7FD\uD2B8 \uAC04\uC5D0 \uC18C\uC694\uB41C \uC2DC\uAC04\uC740 \uBAA8\uB4E0 \uD53D\uC140 \uBC0F \uD3EC\uCE58\uC5D0 \uB300\uD55C \uD074\uB85D \uC0DD\uC131 \uC2DC\uAC04\uC744 \uD569\uC0B0\uD55C \uAC83\uC785\uB2C8\uB2E4. \uD3EC\uCE58\uB97C \uC870\uC815\uD574\uC11C \uD504\uB808\uC784\uB960\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD3EC\uCE58\uB294 LTDC \uAD6C\uC131\uC758 \uC77C\uBD80\uC600\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC9C0\uC815\uC744 \uD1B5\uD574 Vfp(Vertical Front Porch) \uB97C \uAC1C\uC120\uD558\uC5EC \uD504\uB808\uC784\uB960\uC744 \uB0AE\uCD9C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC778\uD130\uB7FD\uD2B8 \uD578\uB4E4\uB7EC\uC5D0\uC11C HAL_GetTick() \uC744 \uC0AC\uC6A9\uD558\uBA74 \uC190\uC27D\uAC8C \uD504\uB808\uC784\uB960\uC744 \uCE21\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32f7xx_it.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6-8}",
    "{6-8}": true
  }), `volatile int last = 0;
volatile int diff = 0;
void LTDC_IRQHandler(void)
{
  /* USER CODE BEGIN LTDC_IRQn 0 */
  int now = HAL_GetTick();
  diff = now - last;
  last = now;
  /* USER CODE END LTDC_IRQn 0 */
  HAL_LTDC_IRQHandler(&hltdc);
  ...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCD08\uB2F9 60\uAC1C \uD504\uB808\uC784\uC5D0\uC11C\uB294 \uAC01 \uD504\uB808\uC784 \uAC04\uC5D0 1000ms/60 = 16ms\uC758 \uC2DC\uAC04\uC774 \uD544\uC694\uD558\uB2E4\uB294 \uC810\uC5D0 \uC720\uC758\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "spi-display"
  }), `SPI \uB514\uC2A4\uD50C\uB808\uC774`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C0\uAE08\uBD80\uD130\uB294 SPI \uBC84\uC2A4\uC5D0 \uC5F0\uACB0\uB41C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC640 \uAC19\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C \uAD6C\uC131 \uC791\uC5C5\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `SPI \uC8FC\uBCC0 \uC7A5\uCE58 \uBC0F GPIO \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD074\uB85D \uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD544\uC694\uD55C \uB4DC\uB77C\uC774\uBC84 \uCF54\uB4DC \uC791\uC131 \uB610\uB294 \uAC80\uC0C9`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "spi-configuration"
  }), `SPI \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32CubeMX\uB97C \uC2DC\uC791\uD558\uACE0 SPI\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uC544\uB798 \uADF8\uB9BC\uC740 STM32G081 \uD504\uB85C\uC81D\uD2B8\uC758 \uC608\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-05.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uB370\uC774\uD130 \uC2DC\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 SPI \uD615\uC2DD(\uB370\uC774\uD130 \uD06C\uAE30 \uBC0F \uBE44\uD2B8 \uC21C\uC11C) \uC744 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. 16\uBE44\uD2B8 \uC6CC\uB4DC\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uB9AC\uD2C0 \uC5D4\uB514\uC5B8(Little-endian) \uBC14\uC774\uD2B8 \uC21C\uC11C\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC774 \uD615\uC2DD\uC744 \uC218\uB77D\uD558\uB3C4\uB85D \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. If not, then you have to convert data during transmission. Also pay attention to the clock polarity and clock phase. \uC774\uB4E4\uC740 \uB514\uC2A4\uD50C\uB808\uC774 \uB370\uC774\uD130 \uC2DC\uD2B8\uC5D0 \uC9C0\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SPI \uD074\uB85D(\uBE44\uD2B8 \uC804\uC1A1\uB960) \uC740 FCLK\uC5D0 \uB300\uD55C \uBD84\uBC30\uAE30(divider) \uB85C \uC81C\uC5B4\uB429\uB2C8\uB2E4. \uCD5C\uC18C \uC81C\uC0B0\uAE30\uB294 2\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 MCU\uAC00 64MHz\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uACBD\uC6B0 SPI \uCD5C\uB300 \uBE44\uD2B8 \uC804\uC1A1\uB960\uC740 32MBit/s\uAC00 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `GPIO \uD0ED\uC5D0\uC11C SPI \uC8FC\uBCC0 \uC7A5\uCE58\uC5D0 \uB300\uD574 \uC120\uD0DD\uD55C GPIO\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-06.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI GPIO \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC624\uB978\uCABD\uC758 Pinout \uBCF4\uAE30\uC5D0\uC11C GPIO\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-07.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "SPI GPIO \uC120\uD0DD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uB0A8\uC740 \uC791\uC5C5\uC740 SPI \uCC44\uB110\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uAD6C\uC131\uD558\uACE0 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC804\uC1A1\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. STM32CubeMX cannot generate this code for you, as it depends heavily on the display. For many displays it is necessary to send a sequence of commands and follow a specific power up sequence. \uADF8\uB7F0 \uB2E4\uC74C\uC5D0\uB294 \uBCF4\uD1B5 \uC0C9\uC0C1 \uBAA8\uB4DC\uB97C \uC124\uC815\uD558\uACE0 \uB514\uC2A4\uD50C\uB808\uC774\uB97C ON\uC73C\uB85C \uC804\uD658\uD569\uB2C8\uB2E4. \uC774 \uBAA8\uB4E0 \uC124\uC815\uC740 \uACF5\uAE09\uC5C5\uCCB4\uAC00 \uC81C\uACF5\uD558\uB294 \uB370\uC774\uD130 \uC2DC\uD2B8 \uB610\uB294 \uC608\uC81C\uC5D0 \uC9C0\uC815\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32Cube \uD38C\uC6E8\uC5B4\uC5D0\uB294 SPI \uD1B5\uC2E0\uC744 \uC0AC\uC6A9\uD558\uB294 \uC608\uC81C\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. STM32Cube HAL\uC5D0\uB294 \uB2E4\uC591\uD55C \uD5EC\uD37C \uD568\uC218\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD558\uAE30 \uC704\uD55C \uAE30\uBCF8 \uD568\uC218\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "stm32g0xx_hal_spi.h"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `HAL_StatusTypeDef HAL_SPI_Transmit(SPI_HandleTypeDef *hspi, uint8_t *pData, uint16_t Size, uint32_t Timeout);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD1B5\uC2E0\uC774 \uC548\uC815\uC801\uC73C\uB85C \uC218\uD589\uB420 \uB54C\uAE4C\uC9C0 \uC774\uB7EC\uD55C \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uCD94\uD6C4\uC5D0 \uC804\uC6A9 \uD568\uC218\uB97C \uC791\uC131\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uC131\uB2A5\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `SPI\uB97C \uC778\uC2DD\uD558\uB294 \uC624\uC2E4\uB85C\uC2A4\uCF54\uD504\uB098 SPI to USB logger\uB294 SPI \uB514\uC2A4\uD50C\uB808\uC774 \uB4DC\uB77C\uC774\uBC84\uB97C \uC791\uC131\uD558\uB294 \uB370 \uB9E4\uC6B0 \uC720\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "SPI\uC5D0\uC11C \uB0AE\uC740 \uC8FC\uD30C\uC218\uBD80\uD130 \uC2DC\uC791\uD558\uBA74 \uB178\uC774\uC988 \uBB38\uC81C\uB97C \uBC29\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "checking-the-display-colors"
  }), `\uB514\uC2A4\uD50C\uB808\uC774 \uC0C9\uC0C1 \uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `At this point where you can transmit a framebuffer to the display, it is advisable to thoroughly check the display colors.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uC0C9\uC0C1\uC744 \uAE30\uB85D\uD558\uACE0 \uC721\uC548 \uAC80\uC0AC\uB97C \uD1B5\uD574 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uD655\uC778\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC544\uB798\uC5D0 \uBA87 \uAC00\uC9C0 \uC608\uAC00 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD14C\uC2A4\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC124\uBA85`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBE68\uAC04\uC0C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uBE68\uAC04\uC0C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uB3C4 \uBE68\uAC04\uC0C9\uC774 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB179\uC0C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uB179\uC0C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uB3C4 \uB179\uC0C9\uC774 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD30C\uB780\uC0C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uD30C\uB780\uC0C9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uB3C4 \uD30C\uB780\uC0C9\uC774 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC554\uC0C9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `50% \uBE68\uAC04\uC0C9\uC5D0 \uB300\uD55C \uC554\uC0C9(\uC608: 0x8000)\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC5B4\uB461\uAC8C \uBCF4\uC5EC\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC0C9\uC0C1 \uBCC0\uACBD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB9E4\uCD08\uB9C8\uB2E4 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uBCC0\uACBD\uD558\uC5EC \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uD568\uAED8 \uC5C5\uB370\uC774\uD2B8\uAC00 \uB418\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RGB565 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uCCB4\uACC4\uC5D0 \uB530\uB77C \uC0C9\uC0C1\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t r    = 0xff, g = 0x00, b = 0x00;             // Solid red
uint16_t col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565
// Put colors into the framebuffer
for(int i = 0; i < W*H; i++)
{
  framebuffer[i] = col;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `24BPP \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uACBD\uC6B0, \uBC14\uC774\uD2B8 \uD3EC\uC778\uD130\uB97C \uC0AC\uC6A9\uD574 \uCF54\uB4DC\uB97C \uBCF4\uB2E4 \uC815\uD655\uD558\uAC8C \uACF5\uC2DD\uD654\uD588\uC2B5\uB2C8\uB2E4(\uC0C9\uC0C1\uC740 BGR \uC21C\uC73C\uB85C \uC800\uC7A5).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint8_t* framebuffer[480*272*3];  //24 bit framebuffer
...
uint8_t *fb = framebuffer;
while(fb < (uint8_t*)(framebuffer + (480*272*3)))
{
  *fb++ = 0x00; // Write blue color and increment pointer by one byte
  *fb++ = 0x00; // Write green color
  *fb++ = 0xFF; // Write red color
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/red-display-test.png",
    noShadow: true,
    width: "600",
    mdxType: "Figure"
  }, "\uC0C9\uC0C1\uC73C\uB85C \uD504\uB808\uC784 \uBC84\uD37C \uD45C\uC2DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Changing the framebuffer every second by using the LTDC line event callback:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `/* USER CODE BEGIN 4 */
uint8_t r = 0x00, g = 0x00, b = 0x00;
uint16_t col = 0;
uint8_t color = 1;
void HAL_LTDC_LineEventCallback(LTDC_HandleTypeDef* hltdc)
{
  static int count = 0;
  count++;
  if (count >= 60)
  {
    count = 0;
      switch (color)
      {
      case 1:
        r = 0xFF; g = 0x00; b = 0x00;
        color = 2;
        break;
      case 2:
        r = 0x00; g = 0xFF; b = 0x00;
        color = 3;
        break;
      case 3:
        r = 0x00; g = 0x00; b = 0xFF;
        color = 1;
        break;
      default:
        break;
    }
    col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565
    // Put colors into the framebuffer
    for(int i = 0; i < W*H; i++)
    {
      framebuffer[i] = col;
    }
  }
}
/* USER CODE END 4 */
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);