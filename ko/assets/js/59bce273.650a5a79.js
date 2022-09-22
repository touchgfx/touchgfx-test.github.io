"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1391],{

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

/***/ 88764:
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
  id: "05-display-external",
  title: "5. \uC678\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294 \uB514\uC2A4\uD50C\uB808\uC774",
  sidebar_label: "5. \uC678\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294 \uB514\uC2A4\uD50C\uB808\uC774"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/board-bring-up/how-to/05-display-external",
  "id": "development/board-bring-up/how-to/05-display-external",
  "title": "5. \uC678\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294 \uB514\uC2A4\uD50C\uB808\uC774",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/05-display-external.mdx",
  "sourceDirName": "development/board-bring-up/how-to",
  "slug": "/development/board-bring-up/how-to/05-display-external",
  "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/05-display-external",
  "draft": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 5,
  "frontMatter": {
    "id": "05-display-external",
    "title": "5. \uC678\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294 \uB514\uC2A4\uD50C\uB808\uC774",
    "sidebar_label": "5. \uC678\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uAC00\uC9C0\uB294 \uB514\uC2A4\uD50C\uB808\uC774"
  },
  "sidebar": "docs",
  "previous": {
    "title": "4. External RAM",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/04-enable-external-ram"
  },
  "next": {
    "title": "6. External addressable flash",
    "permalink": "/4.20/ko/docs/development/board-bring-up/how-to/06-flash-external-addressable"
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
  value: "LTDC \uACC4\uCE35 \uAD6C\uC131",
  id: "ltdc-layer-configuration",
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
  }), `\uAC1C\uC694`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uB0B4\uBD80 RAM\uC5D0\uC11C \uC678\uBD80 RAM\uC73C\uB85C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC774\uB3D9\uC2DC\uD0A4\uACE0 \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uACC4\uC18D \uC804\uC1A1\uD560 \uC218 \uC788\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC678\uBD80 RAM\uC774 \uBCF4\uB4DC \uBE0C\uB9C1\uC5C5\uACFC \uAD00\uB828\uC774 \uC5C6\uB2E4\uBA74 \uC774 \uB2E8\uACC4\uB97C \uAC74\uB108\uB6F0\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC\uAC00 \uC804\uC1A1 \uC18D\uB3C4\uC5D0 \uB300\uD55C \uC77C\uC815 \uC218\uC900\uC758 \uAE30\uB300\uB97C \uAC00\uC9C0\uACE0 \uC788\uB2E4\uB294 \uC810\uC5D0\uC11C \uC774 \uB2E8\uACC4\uC758 \uBAA9\uD45C\uB294 \uC678\uBD80 RAM\uC744 \uC2A4\uD2B8\uB808\uC2A4 \uD14C\uC2A4\uD2B8\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB85C \uC778\uD574 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD754\uD788 \uBC1C\uC0DD\uD558\uB294 \uC624\uB958\uB85C\uB294 \uC678\uBD80 RAM\uC758 \uB300\uC5ED\uD3ED\uC774 \uCDA9\uBD84\uD788 \uB192\uC9C0 \uC54A\uC544\uC11C \uBC1C\uC0DD\uD558\uB294 LTDC \uC5B8\uB354\uB7F0 \uC624\uB958\uB098, RAM\uC774 \uC798\uBABB \uAD6C\uC131\uB418\uC5B4 '\uC0AC\uC591\uC5D0 \uB9DE\uC9C0 \uC54A\uAC8C' \uC2E4\uD589\uB418\uBA74\uC11C \uBC1C\uC0DD\uD558\uB294 \uD53D\uC140 \uC624\uB958\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "goal"
  }), `\uBAA9\uD45C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC758 \uBAA9\uD45C\uB294 \uB0B4\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C \uBC30\uC5F4\uC744 \uC81C\uAC70\uD558\uACE0 \uC678\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "verification"
  }), `\uD655\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uC139\uC158\uC5D0\uC11C \uD655\uC778\uD574\uC57C \uD560 \uC0AC\uD56D\uC785\uB2C8\uB2E4. \uC774\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uB0B4\uBD80 RAM\uC5D0 \uC788\uC744 \uB54C\uC758 \uD655\uC778 \uC0AC\uD56D\uACFC \uBE44\uC2B7\uD558\uC9C0\uB9CC, \uC678\uBD80 \uBA54\uBAA8\uB9AC\uC758 \uC18D\uB3C4\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uB300\uD55C \uD504\uB808\uC784 \uBC84\uD37C \uC804\uC1A1\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uB2E4\uB294 \uC810\uC5D0\uC11C \uB2E4\uC2DC \uD655\uC778\uC744 \uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
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
  }), `\uD504\uB808\uC784\uB960\uC774 \uC62C\uBC14\uB978\uC9C0 \uC5EC\uBD80`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD53D\uC140 \uD074\uB85D\uACFC \uD3EC\uCE58(porch)\uAC00 \uD544\uC694\uD55C \uD504\uB808\uC784\uB960\uC744 \uB2EC\uC131\uD560 \uC218 \uC788\uB3C4\uB85D \uAD6C\uC131\uB418\uC5B4 \uC788\uB294\uC9C0 \uC5EC\uBD80`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prerequisites"
  }), `\uC804\uC81C \uC870\uAC74`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 \uC774 \uB2E8\uACC4\uC5D0 \uB300\uD55C \uC804\uC81C \uC870\uAC74\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC678\uBD80 RAM\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uC8FC\uC18C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "do"
  }), `\uC2E4\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uB450 \uAC00\uC9C0 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC678\uBD80 RAM\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C \uBC30\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC678\uBD80 RAM\uC5D0\uC11C \uC77D\uC5B4\uC62C \uC218 \uC788\uB3C4\uB85D \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC \uC124\uC815`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uBC84\uD37C\uAC00 \uC678\uBD80 RAM\uC5D0 \uC788\uC744 \uB54C\uB294 \uC5EC\uAE30\uC5D0 \uBC30\uC5F4\uC744 \uD560\uB2F9\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC77C\uBC18\uC801\uC785\uB2C8\uB2E4. \uC62C\uBC14\uB978 \uC8FC\uC18C\uB85C \uD3EC\uC778\uD130\uB97C \uC120\uC5B8\uD558\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC678\uBD80 RAM\uC758 \uC8FC\uC18C\uAC00 \uC218\uB3D9\uC73C\uB85C \uC120\uD0DD\uB429\uB2C8\uB2E4. \uC678\uBD80 RAM\uC758 \uC5B4\uB514\uB4E0 \uC8FC\uC18C\uAC00 \uB420 \uC218 \uC788\uC9C0\uB9CC, \uD754\uD788 RAM\uC758 \uC2DC\uC791 \uC8FC\uC18C\uAC00 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint16_t* framebuffer = (uint16_t*)0xC0000000;  //16 bpp framebuffer
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "03-display-internal"
  }), `\uB0B4\uBD80 \uD45C\uC2DC`), ` \uB2E8\uACC4\uC5D0\uC11C \uC0DD\uC131\uD55C \uC18C\uADDC\uBAA8 \uD14C\uC2A4\uD2B8 \uD504\uB85C\uADF8\uB7A8\uC744 \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "ltdc-layer-configuration"
  }), `LTDC \uACC4\uCE35 \uAD6C\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC18\uB4DC\uC2DC LTDC \uACC4\uCE35\uC758 \uAD6C\uC131\uC744 \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uC81C \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uB300\uD55C \uD2B9\uC815 \uC8FC\uC18C\uAC00 \uC0DD\uC131\uB418\uC5C8\uC73C\uBBC0\uB85C CubeMX\uC5D0 \uC774 \uC8FC\uC18C(\uCEEC\uB7EC \uD504\uB808\uC784 \uBC84\uD37C \uC2DC\uC791 \uC8FC\uC18C)\uB97C \uC0BD\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/board-bring-up/display/cubemx-03.png",
    noShadow: false,
    width: "600",
    mdxType: "Figure"
  }, "LTDC \uACC4\uCE35 \uD30C\uB77C\uBBF8\uD130 \uAD6C\uC131"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB85C\uADF8\uB7A8 \uBC0F \uD504\uB808\uC784 \uBC84\uD37C \uC5B4\uB808\uC774\uC5D0\uC11C \uC774 \uB77C\uC778\uC744 \uBC18\uB4DC\uC2DC \uC81C\uAC70\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "main.c"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `  /* USER CODE BEGIN 2 */
  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);
  /* USER CODE END 2 */
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `LTDC \uACC4\uCE35 \uD06C\uAE30\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "03-display-internal"
  }), `03 \uB2E8\uACC4`), `\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uC77C\uBD80\uB9CC \uC5C5\uB370\uC774\uD2B8\uD558\uB3C4\uB85D \uC124\uC815\uB41C \uACBD\uC6B0(\uB0B4\uBD80 RAM\uC758 \uC6A9\uB7C9\uC73C\uB85C \uC778\uD574) \uC5D0\uB294 \uC774\uB97C \uC7AC\uC2E4\uD589\uD574\uC57C \uD569\uB2C8\uB2E4. \uC804\uCCB4 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uD3EC\uD568\uB418\uB3C4\uB85D LTDC \uACC4\uCE35\uC744 \uB2E4\uC2DC \uAD6C\uC131\uD558\uC2ED\uC2DC\uC624.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);