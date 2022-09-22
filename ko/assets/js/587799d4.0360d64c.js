"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6432],{

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

/***/ 31217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class InlineCode extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (InlineCode);


/***/ }),

/***/ 42618:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./components/FurtherReading.js
var FurtherReading = __webpack_require__(29415);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/InlineNote.js

class InlineNote extends react.Component {
  render() {
    return /* @__PURE__ */ react.createElement("i", null, this.props.children);
  }
}
/* harmony default export */ var components_InlineNote = (InlineNote);

// EXTERNAL MODULE: ./components/InlineCode.js
var InlineCode = __webpack_require__(31217);
// EXTERNAL MODULE: ./components/CodeHeader.js
var CodeHeader = __webpack_require__(22425);
;// CONCATENATED MODULE: ./i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx
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
  id: "backend-communication",
  title: "\uBC31\uC5D4\uB4DC \uD1B5\uC2E0"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/backend-communication",
  "id": "development/ui-development/touchgfx-engine-features/backend-communication",
  "title": "\uBC31\uC5D4\uB4DC \uD1B5\uC2E0",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/backend-communication",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/backend-communication",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "backend-communication",
    "title": "\uBC31\uC5D4\uB4DC \uD1B5\uC2E0"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBC14\uC774\uB108\uB9AC \uBC88\uC5ED",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"
  },
  "next": {
    "title": "\uBBF9\uC2A4\uC778",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/mixins"
  }
};
const assets = {};





const toc = [{
  value: "Model \uD074\uB798\uC2A4",
  id: "the-model-class",
  level: 2
}, {
  value: "\uC2DC\uC2A4\uD15C \uC5F0\uACB0",
  id: "system-interfacing",
  level: 2
}, {
  value: "GUI Task\uC5D0\uC11C \uC0D8\uD50C\uB9C1\uD558\uAE30",
  id: "sampling-from-gui-task",
  level: 3
}, {
  value: "Secondary Task\uC5D0\uC11C \uC0D8\uD50C\uB9C1\uD558\uAE30",
  id: "sampling-from-secondary-task",
  level: 3
}, {
  value: "\uB370\uC774\uD130\uB97C UI\uB85C \uC804\uB2EC\uD558\uAE30",
  id: "propagating-data-to-ui",
  level: 2
}, {
  value: "\uB370\uC774\uD130\uB97C UI\uC5D0\uC11C \uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uC73C\uB85C \uC804\uC1A1\uD558\uAE30",
  id: "transmitting-data-from-ui-to-surrounding-system",
  level: 2
}, {
  value: "\uC608\uC81C",
  id: "examples",
  level: 2
}, {
  value: "GUI Task\uC5D0\uC11C",
  id: "from-gui-task",
  level: 3
}, {
  value: "\uAE30\uD0C0 Task\uC5D0\uC11C",
  id: "from-other-task",
  level: 3
}, {
  value: "\uB2E4\uC911 Task\uC5D0\uC11C",
  id: "from-multiple-tasks",
  level: 3
}, {
  value: "Task \uBC0F \uC678\uBD80 \uC778\uD130\uB7FD\uD2B8 \uB77C\uC778\uC5D0\uC11C",
  id: "from-task-and-external-interrupt-line",
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
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uB300\uBD80\uBD84\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C UI\uB294 UI \uC678\uC5D0 \uB2E4\uB978 \uC2DC\uC2A4\uD15C\uACFC \uC5B4\uB5A4 \uC2DD\uC73C\uB85C\uB4E0 \uC5F0\uACB0\uB418\uC5B4 \uB370\uC774\uD130\uB97C \uC8FC\uACE0\uBC1B\uC544\uC57C \uD569\uB2C8\uB2E4. \uC774\uB294 \uD558\uB4DC\uC6E8\uC5B4 \uC8FC\uBCC0 \uC7A5\uCE58(\uC13C\uC11C \uB370\uC774\uD130, A/D \uBCC0\uD658, \uC9C1\uB82C \uD1B5\uC2E0 \uB4F1)\uC640 \uC5F0\uACB0\uB420 \uC218\uB3C4 \uC788\uACE0, \uB2E4\uB978 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBAA8\uB4C8\uACFC \uC5F0\uACB0\uB420 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uC5F0\uACB0\uC744 \uAD6C\uD604\uD558\uB294\uB370 \uC788\uC5B4 \uAD8C\uC7A5\uD558\uB294 \uC194\uB8E8\uC158\uC5D0 \uB300\uD574 \uC124\uBA85\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uCCAB \uBC88\uC9F8 \uBC29\uBC95\uC740 \uC8FC\uB85C \uD504\uB85C\uD1A0\uD0C0\uC774\uD551\uC5D0 \uC0AC\uC6A9\uB418\uB294 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `"\uBE60\uB974\uACE0 \uAC04\uD3B8\uD55C(quick-and-dirty)"`), ` \uBC29\uC2DD\uC778 \uBC18\uBA74, `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `\uB450 \uBC88\uC9F8 \uBC29\uBC95`), `\uC740 UI\uB97C \uC2E4\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB2E4\uB978 \uAD6C\uC131 \uC694\uC18C\uB4E4\uACFC \uC544\uD0A4\uD14D\uCC98\uC801\uC73C\uB85C \uC62C\uBC14\uB974\uAC8C \uC5F0\uACB0\uD558\uB294 \uACAC\uACE0\uD55C \uBC29\uBC95\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774 \uC139\uC158 \uB9C8\uC9C0\uB9C9\uC5D0\uB294 \uB450 \uAC00\uC9C0 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uB294 \uC608\uC2DC\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "the-model-class"
  }), `Model \uD074\uB798\uC2A4`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uBAA8\uB4E0 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uB294 \uD558\uB098\uC758 Model \uD074\uB798\uC2A4\uAC00 \uC788\uC2B5\uB2C8\uB2E4. Model \uD074\uB798\uC2A4\uB294 UI \uC0C1\uD0DC \uC815\uBCF4\uB97C \uC800\uC7A5\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4 \uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uACFC \uC5F0\uACB0\uB418\uB294 \uC778\uD130\uD398\uC774\uC2A4 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC591\uCE21 \uD558\uB4DC\uC6E8\uC5B4 \uC8FC\uBCC0 \uC7A5\uCE58 \uBAA8\uB450\uB97C \uCC38\uC870\uD558\uAE30\uB3C4 \uD558\uC9C0\uB9CC \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uB2E4\uB978 OS task\uC640 \uD1B5\uC2E0\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uAC01\uAC01 View \uD074\uB798\uC2A4\uC5D0\uC11C \uB2E4\uB978 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBAA8\uB4C8\uC774\uB098 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uC561\uC138\uC2A4\uD558\uB3C4\uB85D \uC124\uACC4\uD558\uB294 \uAC83\uC740 \uBC14\uB78C\uC9C1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(FurtherReading/* default */.Z, {
    mdxType: "FurtherReading"
  }, "Model\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "../software-architecture/model-view-presenter-design-pattern",
    mdxType: "Link"
  }, "MVP \uD328\uD134\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.")), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Model \uD074\uB798\uC2A4\uB294 \uC774\uB7EC\uD55C \uC778\uD130\uD398\uC774\uC2A4 \uCF54\uB4DC\uB97C \uC0BD\uC785\uD558\uB294 \uB370 \uC801\uD569\uD55C\uB370, \uADF8 \uC774\uC720\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `Model \uD074\uB798\uC2A4\uC5D0\uB294 \uAC01 \uD504\uB808\uC784\uB9C8\uB2E4 \uC790\uB3D9\uC73C\uB85C \uD638\uCD9C\uB418\uB294 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `tick()`), ` \uD568\uC218\uAC00 \uC788\uC5B4\uC11C \uB2E4\uB978 \uD558\uC704 \uBAA8\uB4C8\uC5D0\uC11C \uC218\uC2E0\uB418\uB294 \uC774\uBCA4\uD2B8\uB97C \uCC3E\uC544 \uC5EC\uAE30\uC5D0 \uBC18\uC751\uD558\uB3C4\uB85D \uAD6C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `Model \uD074\uB798\uC2A4\uC5D0\uB294 UI\uC5D0 \uC218\uC2E0\uB41C \uC774\uBCA4\uD2B8\uB97C \uC54C\uB9B4 \uC218 \uC788\uB3C4\uB85D \uD604\uC7AC \uD65C\uC131\uD654\uB41C Presenter\uB97C \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "system-interfacing"
  }), `\uC2DC\uC2A4\uD15C \uC5F0\uACB0`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uACFC \uC5F0\uACB0\uD558\uB294 \uBC29\uBC95\uC740 GUI Task\uC5D0\uC11C \uC9C1\uC811 \uC0D8\uD50C\uB9C1\uD558\uB294 \uAC83\uACFC Secondary Task\uC5D0\uC11C \uC0D8\uD50C\uB9C1\uD558\uB294 \uAC83, \uB450 \uAC00\uC9C0\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-gui-task"
  }), `GUI Task\uC5D0\uC11C \uC0D8\uD50C\uB9C1\uD558\uAE30`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uC744 \uC5F0\uACB0\uD560 \uB54C \uAC00\uC7A5 \uC88B\uC740 \uBC29\uBC95\uC740 \uC0D8\uD50C\uB9C1 \uBE48\uB3C4\uC640 \uC0D8\uD50C\uB9C1 \uC18C\uC694 \uC2DC\uAC04, \uADF8\uB9AC\uACE0 \uC18C\uC694 \uC2DC\uAC04\uC758 \uC911\uC694\uB3C4\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774 \uC138 \uAC00\uC9C0\uC640 \uAD00\uB828\uD558\uC5EC \uC694\uAC74\uC774 \uC5C4\uACA9\uD558\uC9C0 \uC54A\uB2E4\uBA74 \uAC00\uC7A5 \uAC04\uB2E8\uD55C \uBC29\uBC95\uC740 \uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uC744 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \uD568\uC218\uC5D0\uC11C \uBC14\uB85C \uC0D8\uD50C\uB9C1\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC0D8\uD50C\uB9C1 \uBC1C\uC0DD \uBE48\uB3C4\uAC00 \uD504\uB808\uC784 \uC18D\uB3C4(\uC77C\uBC18\uC801\uC73C\uB85C \uC57D 60Hz)\uBCF4\uB2E4 \uB0AE\uC744 \uACBD\uC6B0\uC5D0\uB294 \uCE74\uC6B4\uD130\uB9CC \uCD94\uAC00\uD558\uC5EC N\uBC88\uC9F8 \uC2E4\uD589 \uC774\uBCA4\uD2B8\uC5D0\uC11C\uB9CC \uC0D8\uD50C\uB9C1\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBC29\uC2DD\uC5D0\uC11C\uB294 \uC0D8\uD50C\uB9C1 \uC5F0\uC0B0\uC774 \uB2E4\uC18C \uBE68\uB77C\uC57C \uD569\uB2C8\uB2E4(\uC77C\uBC18\uC801\uC73C\uB85C 1ms \uC774\uD558). \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uD504\uB808\uC784 \uC18D\uB3C4\uC5D0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uAC8C \uB418\uB294\uB370, \uC774\uB294 \uC0D8\uD50C\uB9C1\uC774 GUI task\uC758 context\uC5D0\uC11C \uC774\uB8E8\uC5B4\uC838 \uD504\uB808\uC784 \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uC9C0\uC5F0\uC2DC\uD0A4\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "sampling-from-secondary-task"
  }), `Secondary Task\uC5D0\uC11C \uC0D8\uD50C\uB9C1\uD558\uAE30`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `GUI task\uC758 context\uC5D0\uC11C \uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uACFC \uC9C1\uC811 \uC0C1\uD638\uC791\uC6A9\uD558\uB294 \uCF54\uB4DC\uB97C \uC0BD\uC785\uD558\uB294 \uAC83\uC774 \uBC14\uB78C\uC9C1\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC0D8\uD50C\uB9C1\uC744 \uB2F4\uB2F9\uD558\uB294 OS task\uB97C \uC0C8\uB85C \uC0DD\uC131\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774\uB807\uAC8C \uC0DD\uC131\uB41C task\uB294 \uD2B9\uC815 \uC2DC\uB098\uB9AC\uC624\uC5D0 \uB530\uB77C \uD544\uC694\uD55C \uC2DC\uAC04 \uAC04\uACA9\uC73C\uB85C \uC815\uD655\uD558\uAC8C \uC2E4\uD589\uB418\uB3C4\uB85D \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC694\uAC74\uC5D0 \uB530\uB77C \uC0C8\uB85C\uC6B4 task\uC758 \uC6B0\uC120\uC21C\uC704\uB97C GUI task\uBCF4\uB2E4 \uB0AE\uAC8C \uB610\uB294 \uB192\uAC8C \uD560\uB2F9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC6B0\uC120\uC21C\uC704\uAC00 \uB354 \uB192\uC73C\uBA74 GUI task\uC758 \uC720\uD615\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uC9C0\uC815\uD55C \uC2DC\uAC04\uC5D0 \uC815\uD655\uD558\uAC8C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uB2E8, CPU\uB97C \uC0AC\uC6A9\uD558\uB294 \uD504\uB85C\uC138\uC2A4\uC5D0\uC11C\uB294 UI\uC758 \uD504\uB808\uC784 \uC18D\uB3C4\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uB2E4\uB294 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uBC18\uB300\uB85C \uC0D8\uD50C\uB9C1\uC5D0\uC11C \uC2DC\uAC04\uC774 \uC911\uC694\uD55C \uC694\uC18C\uAC00 \uC544\uB2C8\uB77C\uBA74 GUI task\uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704\uB97C \uB0AE\uAC8C \uD560\uB2F9\uD558\uBA74 \uB429\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 UI \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uC758 \uC0D8\uD50C\uB9C1\uC5D0 \uC758\uD574 \uC601\uD5A5\uC744 \uBC1B\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. GUI task\uB294 \uB80C\uB354\uB9C1 \uB3D9\uC548 \uB300\uAE30 \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4(DMA \uAE30\uBC18 \uD53D\uC140 \uC804\uC1A1\uC774 \uB05D\uB0A0 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB9AC\uB294 \uACBD\uC6B0 \uB4F1). \uB530\uB77C\uC11C \uC6B0\uC120\uC21C\uC704\uAC00 \uB0AE\uC740 task\uB3C4 \uC7A6\uC740 \uC2E4\uD589\uC774 \uAC00\uB2A5\uD558\uBBC0\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uB2E4\uC218\uC77C \uB54C\uB3C4 \uC801\uD569\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `secondary task \uC811\uADFC \uBC29\uC2DD\uC744 \uB530\uB978\uB2E4\uBA74 RTOS\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 task \uAC04 \uBA54\uC2DC\uC9D5 \uC2DC\uC2A4\uD15C\uC744 \uC774\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uBAA8\uB450\uB294 \uC544\uB2C8\uC9C0\uB9CC \uB300\uBD80\uBD84 RTOS\uB294 queue/mail \uBA54\uCEE4\uB2C8\uC998\uC744 \uC9C0\uC6D0\uD558\uC5EC task \uAC04 \uB370\uC774\uD130(\uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uC790 \uC815\uC758 C \uAD6C\uC870\uCCB4, \uBC14\uC774\uD2B8 \uBC30\uC5F4 \uB610\uB294 \uB2E8\uC21C \uC815\uC218) \uC804\uC1A1\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC0C8\uB85C\uC6B4 \uB370\uC774\uD130\uB97C GUI task\uB85C \uC804\uC1A1\uD558\uB824\uBA74 \uD574\uB2F9 UI task\uC5D0 \uB300\uD55C mailbox \uB610\uB294 message queue\uB97C \uC124\uC815\uD55C \uD6C4 \uC774 \uBA54\uC2DC\uC9C0 \uC2DC\uC2A4\uD15C\uC744 \uC0AC\uC6A9\uD574 \uB370\uC774\uD130\uB97C GUI task\uB85C \uBCF4\uB0B4\uBA74 \uB429\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \uD568\uC218\uB97C \uC0AC\uC6A9\uD574 GUI \uC791\uC5C5 \uC218\uC2E0\uD568\uC744 \uD3F4\uB9C1\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uB370\uC774\uD130\uAC00 \uC804\uC1A1\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9CC\uC77C\uC758 \uACBD\uC6B0\uC5D0\uB294 \uB370\uC774\uD130\uB97C \uC77D\uC5B4\uC640\uC11C \uADF8\uC5D0 \uB530\uB77C UI\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "propagating-data-to-ui"
  }), `\uB370\uC774\uD130\uB97C UI\uB85C \uC804\uB2EC\uD558\uAE30`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-gui-task"
  }), `GUI \uC791\uC5C5\uC5D0\uC11C \uC0D8\uD50C\uB9C1\uD558\uAE30`), ` \uB610\uB294 `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#sampling-from-secondary-task"
  }), `\uBCF4\uC870 \uC791\uC5C5\uC5D0\uC11C \uC0D8\uD50C\uB9C1 \uD558\uAE30`), ` \uC911 \uBB34\uC5C7\uC744 \uC0AC\uC6A9\uD558\uB4E0 \uC0C1\uAD00\uC5C6\uC774 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`), ` \uD568\uC218\uB294 GUI \uC791\uC5C5\uC5D0\uC11C UI\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC0C8\uB85C\uC6B4 \uB370\uC774\uD130\uB97C \uD655\uC778\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uC5D0 \uB300\uD55C \uC778\uD130\uD398\uC774\uC2A4 \uC5ED\uD560\uC744 \uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4, \uC55E\uC11C Model \uD074\uB798\uC2A4\uAC00 \uC0C1\uD0DC \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD55C\uB2E4\uACE0 \uC5B8\uAE09\uD55C \uAC83\uC744 \uACE0\uB824\uD574\uBCF4\uBA74 \uC5C5\uB370\uC774\uD2B8\uAC00 \uD544\uC694\uD55C \uC0C1\uD0DC \uBCC0\uC218\uAC00 \uC874\uC7AC\uD560 \uAC00\uB2A5\uC131\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uAC04\uB2E8\uD55C \uC608\uB85C, \uC628\uB3C4 \uC13C\uC11C\uB97C \uC2DC\uC2A4\uD15C\uC5D0 \uC5F0\uACB0\uD558\uC5EC \uD604\uC7AC \uC628\uB3C4\uB97C UI\uC5D0 \uD45C\uC2DC\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uC900\uBE44 \uACFC\uC815\uC5D0\uC11C \uC774\uB7EC\uD55C \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD560 \uC218 \uC788\uB3C4\uB85D Model \uD074\uB798\uC2A4\uB97C \uBCF4\uAC15\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class Model
{
public:
  // Function that allow your Presenters to read current temperature.
  int getCurrentTemperature() const { return currentTemperature; }

  // Called automatically by framework every tick.
  void tick();
  ...
private:
  // Variable storing last received temperature;
  int currentTemperature;
  ...
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC704\uC5D0\uC11C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Presenters`), ` \uAC00 model\uC5D0\uAC8C \uD604\uC7AC \uC628\uB3C4\uB97C \uBB3C\uC5B4\uBCFC \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC628\uB3C4\uB97C \uD45C\uC2DC\uD558\uB294 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uC804\uD658\uD560 \uB54C UI(View)\uC5D0\uC11C \uC628\uB3C4 \uAC12\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC0C8\uB85C\uC6B4 \uC628\uB3C4 \uC815\uBCF4\uAC00 \uC218\uC2E0\uB420 \uB54C UI\uB97C \uB2E4\uC2DC \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uB3C4\uB85D \uB9CC\uB4E4\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC774\uB54C\uB294 Model\uC5D0 \uD604\uC7AC \uD65C\uC131\uD654\uB41C Presenter\uB97C \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC774\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uD3EC\uC778\uD130\uB294 \uC778\uD130\uD398\uC774\uC2A4(`, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `ModelListener`), `) \uC720\uD615\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB530\uB77C \uC801\uD569\uD55C \uC774\uBCA4\uD2B8\uB97C \uBC18\uC601\uD558\uB3C4\uB85D \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "ModelListener.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class ModelListener
{
public:
  // Call this function to notify that temperature has changed.
  // Per default, use an empty implementation so that only those
  // Presenters interested in this specific event need to
  // override this function.
  virtual void notifyTemperatureChanged(int newTemperature) {}
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774\uB85C\uC368 \uC778\uD130\uD398\uC774\uC2A4 \uC5F0\uACB0\uC744 \uB9C8\uCCE4\uC73C\uBBC0\uB85C \uC774\uC81C \uC218\uC2E0\uB418\uB294 "`, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `new temperature`), `" \uC774\uBCA4\uD2B8\uB97C \uC2E4\uC81C\uB85C \uC0D8\uD50C\uB9C1\uD574\uC57C \uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Model::tick`)), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.cpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
  // Pseudo-code for sampling data
  if (OS_Poll(GuiTaskMBox))
  {
    // Here we assume that you have defined a "Message" struct containing type and data,
    // along with some event definitions.
    struct Message msg = OS_Read(GuiTaskMBox);
    if (msg.eventType == EVT_TEMP_CHANGED)
    {
       // We received information that temperature has changed.
       // First, update Model state variable
       currentTemperature = msg.data;

      // Second, notify the currently active Presenter that temperature has changed.
      // The modelListener pointer points to the currently active Presenter.
      if (modelListener != 0)
      {
        modelListener->notifyTemperatureChanged(currentTemperature);
      }
    }
  }
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC704\uC758 \uC811\uADFC \uBC29\uC2DD\uC740 \uB2E4\uC74C \uB450 \uAC00\uC9C0\uB97C \uBCF4\uC7A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ol", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `X `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `currentTemperature`), ` \uBCC0\uC218\uAC00 \uD56D\uC0C1 \uCD5C\uC2E0 \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD558\uAE30 \uB54C\uBB38\uC5D0 Presenter\uAC00 \uC5B8\uC81C\uB4E0\uC9C0 \uD604\uC7AC \uC628\uB3C4\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ol"
  }, `X `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `Presenter`), ` \uC628\uB3C4 \uBCC0\uD654\uB97C \uC989\uC2DC \uC218\uC2E0\uD558\uC5EC \uC801\uC808\uD55C \uC870\uCE58\uB97C \uCDE8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `MVP \uD328\uD134\uC758 \uD55C \uAC00\uC9C0 \uC774\uC810\uC740 \uD604\uC7AC \uD65C\uC131\uD654\uB41C \uC2A4\uD06C\uB9B0\uC5D0 \uB530\uB77C \uC54C\uB9BC\uC744 \uB530\uB85C \uCC98\uB9AC\uD560 \uC218 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uD604\uC7AC \uC628\uB3C4\uC640 \uC544\uBB34 \uAD00\uB828\uC774 \uC5C6\uB294 \uC124\uC815 \uBA54\uB274 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(components_InlineNote, {
    mdxType: "InlineNote"
  }, `(MainMenuPresenter/MainMenuView \uD65C\uC131\uD654 \uB4F1)\uB97C`), ` \uD45C\uC2DC\uD558\uB294 \uB3C4\uC911 \uC628\uB3C4 \uBCC0\uD654 \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD588\uB2E4\uACE0 \uAC00\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC704\uC5D0\uC11C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` \uD568\uC218\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uBE48 \uAD6C\uD604\uCCB4\uB97C \uAC16\uAE30 \uB54C\uBB38\uC5D0 \uC774 \uC54C\uB9BC\uC740 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `MainMenuPresenter\uC5D0\uC11C \uBB34\uC2DC\uB429\uB2C8\uB2E4.`), `. \uBC18\uBA74\uC5D0 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `TemperatureControlPresenter`), ` \uD30C\uC77C\uC744 \uAC00\uC9C0\uACE0 \uC788\uB2E4\uBA74 \uC774 Presenter\uC5D0\uC11C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `notifyTemperatureChanged`), ` \uD568\uC218\uB97C \uC7AC\uC815\uC758\uD558\uACE0 \uD574\uB2F9 View\uC5D0\uAC8C \uC5C5\uB370\uC774\uD2B8\uB41C \uC628\uB3C4\uB97C \uD45C\uC2DC\uD558\uB77C\uACE0 \uC54C\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "TemperatureControlPresenter.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class TemperatureControlPresenter : public ModelListener
{
public:
  // override the empty function.
  virtual void notifyTemperatureChanged(int newTemperature) {
    view.setTemp(newTemperature);
  }
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uBB3C\uB860 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `TemperatureControlView`), ` View \uD074\uB798\uC2A4\uB294 `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setTemp`), ` \uBA54\uC18C\uB4DC\uB97C \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "transmitting-data-from-ui-to-surrounding-system"
  }), `\uB370\uC774\uD130\uB97C UI\uC5D0\uC11C \uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uC73C\uB85C \uC804\uC1A1\uD558\uAE30`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uB370\uC774\uD130/\uC774\uBCA4\uD2B8\uB97C UI\uC5D0\uC11C \uC8FC\uBCC0 \uC2DC\uC2A4\uD15C\uC73C\uB85C \uBCF4\uB0B4\uB294 \uC5ED\uBC29\uD5A5 \uC804\uC1A1\uC740 Model\uC744 \uD1B5\uD574 \uB9E4\uC6B0 \uC720\uC0AC\uD55C \uBC29\uC2DD\uC73C\uB85C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4. \uC704\uC758 \uC608\uC5D0 \uC774\uC5B4\uC11C \uC0C8\uB85C\uC6B4 \uBAA9\uD45C \uC628\uB3C4\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD574\uC57C \uD55C\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 Model\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "Model.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void setNewTargetTemperature(int newTargetTemp)
{
  // Pseudo-code for sending an event to a task responsible for controlling temperature.
  struct Message msg;
  msg.eventType = EVT_SET_TARGET_TEMP;
  msg.data = newTargetTemp;
  OS_Send(SystemTaskMBox, &msg);
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC0AC\uC6A9\uC790\uAC00 UI\uC5D0\uC11C \uBAA9\uD45C \uC628\uB3C4\uB97C \uC0C8\uB85C \uC124\uC815\uD558\uBA74 View\uAC00 Model \uAC1D\uCCB4\uB97C \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130\uAC00 \uC788\uB294 Presenter\uC5D0\uAC8C \uC774\uB97C \uC54C\uB9B4 \uC218 \uC788\uC73C\uBBC0\uB85C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `setNewTargetTemperature\uB97C \uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), ` \uD568\uC218\uC5D0\uC11C \uBC14\uB85C \uC0D8\uD50C\uB9C1\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "examples"
  }), `\uC608\uC81C`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uB2E4\uC74C \uC608\uC81C\uB4E4\uC740 \uBCF4\uB4DC\uBCC4 \uB370\uBAA8(BSD)\uC774\uAE34 \uD558\uC9C0\uB9CC \uC5EC\uAE30\uC5D0 \uB098\uC628 \uCF54\uB4DC \uB300\uBD80\uBD84\uC744 \uB2E4\uB978 \uB370\uBAA8 \uBCF4\uB4DC\uB098 \uB9DE\uCDA4\uD615 \uD558\uB4DC\uC6E8\uC5B4\uC5D0 \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC608\uC81C\uB4E4\uC744 \uC704\uD574 STM32CubeMX\uC5D0\uC11C Task\uC640 Queue\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC0DD\uC131\uB41C Task\uB97C \uCC44\uC6B0\uACE0 \uC0AC\uC6A9\uC790 \uCF54\uB4DC \uC608\uC81C\uB97C `, /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, `main_user.c\uC5D0 \uAD6C\uD604\uD569\uB2C8\uB2E4`), `. \uC608\uC81C\uC5D0\uC11C\uB294 STM32CubeMX BSP \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD574 STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC758 LED, \uC0AC\uC6A9\uC790 \uBC84\uD2BC \uBC0F \uAE30\uD0C0 \uC8FC\uBCC0 \uC7A5\uCE58\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-gui-task"
  }), `GUI Task\uC5D0\uC11C`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC608\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC778 BSD\uB294 \uCD5C\uC2E0 \uBC84\uC804\uC758 TouchGFX Designer\uC5D0\uC11C Demos -> Board Specific Demo -> STM32F46G Discovery kit Control LED from GUI\uB85C \uC774\uB3D9\uD558\uBA74 \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uBC84\uD2BC\uC744 \uC0D8\uD50C\uB9C1\uD558\uACE0 LED\uB97C \uC81C\uC5B4\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4. Model \uD074\uB798\uC2A4\uB294 \uBC84\uD2BC\uC744 \uC0D8\uD50C\uB9C1\uD55C \uD6C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0C1\uD0DC\uC5D0 \uB9DE\uAC8C LED\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-other-task"
  }), `\uAE30\uD0C0 Task\uC5D0\uC11C`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC608\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC778 BSD\uB294 \uCD5C\uC2E0 \uBC84\uC804\uC758 TouchGFX Designer\uC5D0\uC11C Demos -> Board Specific Demo -> STM32H7B3I Evaluation Board Analog Sampler Task\uB85C \uC774\uB3D9\uD558\uBA74 \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uC544\uB0A0\uB85C\uADF8 \uC785\uB825\uC744 \uBCC4\uB3C4\uC758 \uC2A4\uB808\uB4DC\uB85C \uC0D8\uD50C\uB9C1\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4. \uC774 \uC608\uC81C\uC5D0\uC11C\uB294 MVP \uC544\uD0A4\uD14D\uCC98\uB97C \uC0AC\uC6A9\uD574 \uC544\uB0A0\uB85C\uADF8 \uAC12\uC744 View\uC5D0 \uC804\uC1A1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC608\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC778 BSD\uB294 \uCD5C\uC2E0 \uBC84\uC804\uC758 TouchGFX Designer\uC5D0\uC11C Demos -> Board Specific Demo -> STM32F46G Discovery kit Intertask Communication\uC73C\uB85C \uC774\uB3D9\uD558\uBA74 \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 Task \uAC04 \uD1B5\uC2E0\uACFC UI\uC640 \uC8FC\uACE0\uBC1B\uB294 \uC804\uC1A1\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4. \uC774 \uC608\uC81C\uB97C \uCC38\uC870\uD558\uC5EC \uC790\uCCB4 \uD658\uACBD\uC744 \uC124\uC815\uD574\uBCF4\uC2ED\uC2DC\uC624. \uC774 \uC608\uC81C\uC5D0\uC11C\uB294 C \uCF54\uB4DC\uB85C \uAD6C\uD604\uB41C \uBC31\uC5D4\uB4DC \uC2DC\uC2A4\uD15C\uACFC C++ TouchGFX GUI \uC0AC\uC774\uC5D0\uC11C \uD1B5\uC2E0\uD569\uB2C8\uB2E4. \uB610\uD55C FreeRTOS \uC678\uC5D0 STM32F746G-DISCO \uBCF4\uB4DC\uC5D0\uC11C\uB3C4 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-multiple-tasks"
  }), `\uB2E4\uC911 Task\uC5D0\uC11C`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC608\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC778 BSD\uB294 \uCD5C\uC2E0 \uBC84\uC804\uC758 TouchGFX Designer\uC5D0\uC11C Demos -> Board Specific Demo -> STM32F769I Discovery Multitast Communication Demo\uB85C \uC774\uB3D9\uD558\uBA74 \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uBC84\uD2BC \uC0C1\uD0DC\uB97C \uC0D8\uD50C\uB9C1\uD55C \uD6C4 GUI \uBA54\uC2DC\uC9C0 \uB300\uAE30\uC5F4\uC744 \uD1B5\uD574 \uBA54\uC2DC\uC9C0\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBC84\uD2BC\uC744 \uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 3\uAC1C\uC758 FreeRTOS task\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. 1\uAC1C\uB294 GUI \uC6A9\uC774\uACE0, 1\uAC1C\uB294 \uAC01 \uC8FC\uBCC0 \uC7A5\uCE58(LED \uBC0F USER \uBC84\uD2BC) \uC6A9\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "from-task-and-external-interrupt-line"
  }), `Task \uBC0F \uC678\uBD80 \uC778\uD130\uB7FD\uD2B8 \uB77C\uC778\uC5D0\uC11C`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC608\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC778 BSD\uB294 \uCD5C\uC2E0 \uBC84\uC804\uC758 TouchGFX Designer\uC5D0\uC11C Demos -> Board Specific Demo -> STM32F769I Discovery External Interrup Line Demo\uB85C \uC774\uB3D9\uD558\uBA74 \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 STM32F769I-DISCO \uBCF4\uB4DC\uC5D0 \uB9DE\uAC8C \uC124\uACC4\uB418\uC5C8\uC73C\uBA70, LED \uBC0F USER \uBC84\uD2BC\uACFC \uC0C1\uD638\uC791\uC6A9\uD558\uBA74\uC11C C \uCF54\uB4DC\uC640 \uD558\uB4DC\uC6E8\uC5B4 \uC8FC\uBCC0 \uC7A5\uCE58\uB97C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uD1B5\uD569\uD558\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uBC84\uD2BC\uC744 EXTI \uBAA8\uB4DC(\uC678\uBD80 \uC778\uD130\uB7FD\uD2B8 \uB77C\uC778 0)\uB85C \uAD6C\uC131\uD569\uB2C8\uB2E4. \uC778\uD130\uB7FD\uD2B8\uB97C \uC18C\uAC70\uD55C \uD6C4 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC778\uD130\uB7FD\uD2B8\uAC00 \uC218\uC2E0\uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 GPIO \uBAA8\uB4DC\uC640 \uAC19\uC740 \uB3D9\uC791\uC740 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC778\uD130\uB7FD\uD2B8\uAC00 \uC218\uC2E0\uB420 \uB54C\uB9C8\uB2E4 GUI message queue\uB97C \uD1B5\uD574\uC11C\uB9CC \uBA54\uC2DC\uC9C0\uAC00 \uC804\uC1A1\uB418\uBBC0\uB85C \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uD55C \uB2E8\uACC4\uC529 \uCC28\uB840\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 2\uAC1C\uC758 FreeRTOS task\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. 1\uAC1C\uB294 GUI \uC6A9\uC774\uACE0, \uB098\uBA38\uC9C0 1\uAC1C\uB294 LED \uC6A9\uC785\uB2C8\uB2E4. \uC774\uB54C `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#from-multiple-tasks"
  }), `\uB2E4\uC911 task \uB370\uBAA8`), `\uC758 \uBC84\uD2BC \uC791\uC5C5\uC740 \uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC720\uD6A8\uD55C \uC0C1\uD0DC\uB85C \uB0A8\uC544, \uC8FC\uBCC0 \uC7A5\uCE58 \uC0C1\uD638\uC791\uC6A9 \uCF54\uB4DC\uAC00 \uC778\uD130\uB7FD\uD2B8 \uD578\uB4E4\uB7EC\uC5D0 \uC0BD\uC785\uB418\uC5C8\uB2E4\uB294 \uAC83\uC744 \uC608\uC2DC\uD569\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);