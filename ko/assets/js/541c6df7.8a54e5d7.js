"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2454],{

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

/***/ 50201:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22425);
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
  id: "operating-system",
  title: "\uC6B4\uC601 \uCCB4\uC81C"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/operating-system",
  "id": "basic-concepts/operating-system",
  "title": "\uC6B4\uC601 \uCCB4\uC81C",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/operating-system.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/operating-system",
  "permalink": "/4.20/ko/docs/basic-concepts/operating-system",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "operating-system",
    "title": "\uC6B4\uC601 \uCCB4\uC81C"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC131\uB2A5",
    "permalink": "/4.20/ko/docs/basic-concepts/performance"
  },
  "next": {
    "title": "\uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9",
    "permalink": "/4.20/ko/docs/basic-concepts/memory-usage"
  }
};
const assets = {};


const toc = [{
  value: "\uC11C\uB860",
  id: "introduction",
  level: 2
}, {
  value: "\uB2E4\uB978 \uC791\uC5C5\uACFC \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uAD50\uCC28 \uC2E4\uD589",
  id: "interleaving-other-tasks-with-the-user-interface",
  level: 3
}, {
  value: "\uC608\uC2DC",
  id: "an-example",
  level: 3
}, {
  value: "RTOS",
  id: "rtos",
  level: 2
}, {
  value: "\uC791\uC5C5 \uD1B5\uC2E0",
  id: "task-communication",
  level: 3
}, {
  value: "\uC778\uD130\uB7FD\uD2B8 \uCC98\uB9AC",
  id: "handling-interrupts",
  level: 3
}, {
  value: "FreeRTOS",
  id: "freertos",
  level: 3
}, {
  value: "TouchGFX OS Wrappers",
  id: "touchgfx-os-wrappers",
  level: 3
}, {
  value: "RTOS \uBBF8\uC0AC\uC6A9",
  id: "no-rtos",
  level: 2
}, {
  value: "Model::tick",
  id: "modeltick",
  level: 3
}, {
  value: "OSWrappers",
  id: "oswrappers",
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
  }), `\uC11C\uB860`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uADF8\uB798\uD53D \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC6B4\uC601 \uCCB4\uC81C \uC0AC\uC6A9\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC784\uBCA0\uB514\uB4DC \uC7A5\uCE58\uB294 \uAC08\uC218\uB85D \uC9C4\uD654\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uC6B4\uC601 \uCCB4\uC81C\uAC00 \uADF8\uB798\uD53D \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uBFD0\uB9CC \uC544\uB2C8\uB77C \uBCF5\uC7A1\uD55C \uC81C\uC5B4 \uC54C\uACE0\uB9AC\uC998\uACFC \uC791\uC5C5\uAE4C\uC9C0 \uCC98\uB9AC\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uBA74 \uBAA8\uD130 \uC81C\uC5B4, \uB370\uC774\uD130 \uC218\uC9D1, \uBCF4\uC548 \uAD00\uB828 \uC791\uC5C5 \uB4F1\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC624\uB298\uB0A0 \uB300\uBD80\uBD84\uC758 \uC7A5\uCE58\uC5D0\uB294 \uB370\uC774\uD130 \uC13C\uD130\uC640\uC758 \uD1B5\uC2E0\uC744 \uC704\uD55C TCP/IP \uAC19\uC740 \uD1B5\uC2E0 \uD504\uB85C\uD1A0\uCF5C \uC2A4\uD0DD\uC774, \uB610\uB294 \uB2E4\uB978 \uB85C\uCEEC \uC7A5\uCE58\uC640\uC758 \uD1B5\uC2E0\uC744 \uC704\uD55C \uBE14\uB8E8\uD22C\uC2A4 \uAC19\uC740 \uBB34\uC120 \uC2A4\uD0DD\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "interleaving-other-tasks-with-the-user-interface"
  }), `\uB2E4\uB978 \uC791\uC5C5\uACFC \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uAD50\uCC28 \uC2E4\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5D0\uADF8 \uD0C0\uC774\uBA38\uC640 \uAC19\uC774 \uADF8\uB798\uD53D \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC640 \uBA87 \uAC00\uC9C0 \uB2E8\uC21C\uD55C \uC9C0\uC6D0 \uC791\uC5C5\uC774 \uD3EC\uD568\uB41C \uC7A5\uCE58\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uCF54\uB4DC\uB97C \uC911\uC2EC\uC73C\uB85C \uC804\uCCB4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC815\uAE30\uC801\uC778 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uC5C5\uB370\uC774\uD2B8\uB97C \uC81C\uC678\uD558\uACE0 \uB2E4\uB978 \uC791\uC5C5\uC744 \uAC70\uC758 \uC218\uD589\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uB2E4\uB978 \uC2E4\uD589 \uC791\uC5C5\uC744 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uCF54\uB4DC\uC5D0 \uC0BD\uC785\uD558\uB294 \uB370 \uBCC4 \uBB38\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uBAA8\uD130 \uC870\uC808\uACFC \uAC19\uC740 \uD0C0\uC774\uBC0D \uC694\uAC74\uACFC \uD568\uAED8 \u201C\uBC31\uADF8\uB77C\uC6B4\uB4DC\uC5D0\uC11C \uC2E4\uD589\u201D\uB418\uB294 \uACE0\uAE09 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD558\uAC8C \uB418\uBA74 \uD0C0\uC774\uBC0D \uC694\uAC74\uC744 \uC9C0\uC6D0\uD558\uB294 \uB3D9\uC2DC\uC5D0 \uB450 \uAC00\uC9C0 \uC791\uC5C5\uC744 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uD1B5\uD569\uD558\uAE30\uAC00 \uC5B4\uB824\uC6CC\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804 \uC139\uC158\uC5D0\uC11C\uB3C4 \uC5B8\uAE09\uD588\uC9C0\uB9CC \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC744 \uB04A\uC784\uC5C6\uC774 \uADF8\uB824\uC11C \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC9C0\uC6D0\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uB2E4\uB978 \uC791\uC5C5\uC744 \uC2E4\uD589\uD558\uB290\uB77C \uADF8\uB9AC\uAE30\uB97C \uBA48\uCD98\uB2E4\uBA74 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uB5A8\uC5B4\uC9C0\uAC8C \uB429\uB2C8\uB2E4. \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uB2E4\uB978 \uC791\uC5C5\uB4E4\uC774 \uD504\uB808\uC784 \uC0AC\uC774\uC5D0, \uC989 \uC720\uD734 \uC2DC\uAC04\uC5D0\uB9CC \uC2E4\uD589\uB41C\uB2E4\uACE0 \uAC00\uC815\uD560 \uACBD\uC6B0 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uBCF5\uC7A1\uD55C \uC7A5\uBA74\uC744 \uB80C\uB354\uB9C1\uD558\uC5EC \uC720\uD734 \uC2DC\uAC04\uC774 \uBE44\uAD50\uC801 \uC801\uC744 \uB54C\uB294 \uB2E4\uB978 \uC791\uC5C5\uB4E4\uC774 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC774\uC720\uB4E4\uB85C \uC778\uD574 UI \uC791\uC5C5\uC744 \uB2E4\uB978 \uBCF5\uC7A1\uD55C \uC791\uC5C5\uACFC \uBC88\uAC08\uC544 \uAC00\uBA70 \uC218\uB3D9\uC73C\uB85C \uC2E4\uD589\uD558\uAE30\uAC00 \uB9E4\uC6B0 \uAE4C\uB2E4\uB86D\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "an-example"
  }), `\uC608\uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C\uBD80\uD130 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uC7A5\uCC29\uB41C \uBE14\uB8E8\uD22C\uC2A4 \uC2A4\uD53C\uCEE4\uB97C \uAC1C\uBC1C\uD55C\uB2E4\uACE0 \uAC00\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uD06C\uAC8C \uC138 \uAC00\uC9C0 \uC791\uC5C5\uC744 \uC218\uD589\uD574\uC57C \uD558\uB294\uB370, \uBC14\uB85C \uADF8\uB798\uD53D \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uC2E4\uD589, \uC2A4\uD53C\uCEE4\uC5D0 \uC74C\uC545 \uC804\uC1A1, \uB2E4\uB978 \uC7A5\uCE58\uC640 \uD1B5\uC2E0\uD560 \uC218 \uC788\uB294 \uBE14\uB8E8\uD22C\uC2A4 \uC2A4\uD0DD \uCC98\uB9AC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uAE30\uBC18 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC544\uD0A4\uD14D\uCC98\uC758 \uC131\uB2A5 \uC800\uD558 \uC5EC\uBD80\uB97C \uC54C\uC544\uBCF4\uB294 \uAC83\uC740 \uC5B4\uB835\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC74C\uC545 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC640 \uBE14\uB80C\uB529\uD55C \uD6C4 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uBC84\uD2BC \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB85C \uC7AC\uC0DD\uC744 \uC2DC\uC791\uD560 \uC218 \uC788\uB3C4\uB85D \uCF54\uB4DC\uB97C \uC0BD\uC785\uD569\uB2C8\uB2E4. \uC774\uC81C \uC74C\uC545\uC744 \uC2DC\uC791\uD558\uB294 \uB3D9\uC548 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uC7A0\uAE41\uB2C8\uB2E4. \uC560\uB2C8\uBA54\uC774\uC158 \uC2E4\uD589\uB3C4 \uC911\uB2E8\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC751\uB2F5\uC740 \uC74C\uC545 \uC791\uC5C5(\uC2DC\uC791, \uC815\uC9C0, \uB2E4\uC74C \uB4F1)\uC774 \uC2E4\uD589\uB418\uB294 \uC2DC\uAC04\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uC774\uB294 \uC77C\uBC18\uC801\uC778 \uBB38\uC81C\uB85C, \uB098\uC911\uC5D0 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB807\uB2E4\uBA74 \uBE14\uB8E8\uD22C\uC2A4\uC5D0\uC11C\uB3C4 \uC74C\uC545\uC744 \uC2DC\uC791\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uC5B4\uB5BB\uAC8C \uB420\uAE4C\uC694? \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB3C4 \uC5B4\uB5A4 \uC2DD\uC73C\uB85C\uB4E0 \uC5EC\uAE30\uC5D0 \uC5F0\uAD00\uB418\uC5B4\uC57C \uD560\uAE4C\uC694?`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uC74C\uC545\uC774 \uBA48\uCD94\uC9C0 \uC54A\uAC8C \uD558\uB824\uBA74 \uC74C\uC545 \uC791\uC5C5\uC5D0 \uC6B0\uC120\uC21C\uC704\uB97C \uC5B4\uB5BB\uAC8C \uBD80\uC5EC\uD574\uC57C \uD560\uAE4C\uC694? \uC774\uC640 \uB3D9\uC2DC\uC5D0 \uC2E4\uD589\uD560 \uC74C\uC545 \uC791\uC5C5\uC774 \uC5C6\uC744 \uB54C\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC2E4\uD589 \uC131\uB2A5\uC744 \uADF9\uB300\uD654\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC791\uC5C5, \uD1B5\uC2E0 \uC218\uB2E8 \uBC0F \uB3D9\uAE30\uD654\uB97C \uBAA8\uB450 \uAC16\uCD98 \uC6B4\uC601 \uCCB4\uC81C\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC774\uB7EC\uD55C \uBB38\uC81C\uB97C \uBAA8\uB450 \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "rtos"
  }), `RTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2E4\uC2DC\uAC04 \uC6B4\uC601 \uCCB4\uC81C(RTOS)\uB294 \uAC04\uB2E8\uD55C \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB85C\uC11C \uB2E4\uC591\uD55C \uC11C\uBE44\uC2A4\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC9C0\uC6D0\uD558\uB294 \uB3D9\uC2DC\uC5D0 \uCEF4\uD4E8\uD305 \uB9AC\uC18C\uC2A4\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC791\uC5C5\uC5D0 \uD560\uB2F9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB3C5\uB9BD\uC801\uC774\uC9C0\uB9CC \uC11C\uB85C \uC5F0\uACC4\uB41C \uC791\uC5C5\uB4E4\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAD6C\uC870\uD654\uB97C \uB9C8\uCE5C \uC791\uC5C5\uB4E4\uC740 \uD544\uC694\uD560 \uB54C \uC6B0\uC120\uC21C\uC704\uC5D0 \uB530\uB77C RTOS\uB97C \uD1B5\uD574 \uD568\uAED8 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC791\uC5C5\uC744 \uB192\uC740 \uC6B0\uC120\uC21C\uC704\uC640 \uB0AE\uC740 \uC6B0\uC120\uC21C\uC704\uB85C \uB098\uB20C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uBE14\uB8E8\uD22C\uC2A4 \uB370\uC774\uD130\uAC00 \uC218\uC2E0\uB418\uBA74 \uB370\uC774\uD130\uB97C \uBC84\uD37C\uC5D0\uC11C \uB9E4\uC6B0 \uBE60\uB974\uAC8C \uC77D\uC5B4\uC640\uC11C \uC6A9\uB7C9\uC774 \uB354 \uD070 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBC84\uD37C\uC5D0 \uC800\uC7A5\uD574\uC57C \uD55C\uB2E4\uACE0 \uAC00\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uB370\uC774\uD130 \uCC98\uB9AC\uAC00 \uC7A0\uC2DC \uC9C0\uC5F0\uB420 \uC218 \uC788\uC9C0\uB9CC \uC774\uB7EC\uD55C \uBC29\uC2DD\uC73C\uB85C \uACB0\uAD6D \uB450 \uAC00\uC9C0 \uBE14\uB8E8\uD22C\uC2A4 \uC791\uC5C5\uC744 \uB9C8\uCE58\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 \uC544\uB798\uC640 \uAC19\uC774 main\uC5D0\uC11C \uB124 \uAC00\uC9C0 \uC791\uC5C5\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int main() {
  ...
  os_start_task(gui_task,      medium_priority);
  os_start_task(music_task,    low_priority);
  os_start_task(bt_comm_task,  high_priority);
  os_start_task(bt_appl_task,  low_priority);
  os_start_scheduler();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC74C\uC545 \uC791\uC5C5\uC5D0\uC11C\uB3C4 \uBE44\uC2B7\uD55C \uBD84\uD560\uC774 \uAC00\uB2A5\uD558\uC5EC \uB370\uC774\uD130\uB97C \uC2A4\uD53C\uCEE4\uC5D0 \uC804\uC1A1\uD558\uB294 \uC791\uC5C5\uC5D0 \uB192\uC740 \uC6B0\uC120\uC21C\uC704\uB97C, \uADF8\uB9AC\uACE0 \uC7AC\uC0DD\uD558\uB294 \uB178\uB798\uB97C \uC81C\uC5B4\uD558\uB294 \uC791\uC5C5\uC774\uB098 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uC54C\uB9BC\uC744 \uC804\uC1A1\uD558\uB294 \uC791\uC5C5\uC5D0 \uB0AE\uC740 \uC6B0\uC120\uC21C\uC704\uB97C \uBD80\uC5EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC640 \uAC19\uC774 \uC6B0\uC120\uC21C\uC704\uB97C \uB2E4\uB974\uAC8C \uC0AC\uC6A9\uD558\uBA74 \uCC98\uB9AC\uD560 \uB370\uC774\uD130\uAC00 \uC788\uC744 \uB54C bt_comm_task\uAC00 \uC2E4\uD589\uB418\uACE0, \uADF8\uB807\uC9C0 \uC54A\uC744 \uB54C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uC791\uC5C5\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uC791\uC5C5\uC774 \uB514\uC2A4\uD50C\uB808\uC774 \uC2E0\uD638\uB97C \uAE30\uB2E4\uB9B4 \uB54C\uB294 \uC6B0\uC120\uC21C\uC704\uAC00 \uB0AE\uC740 \uC791\uC5C5 2\uAC1C\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC6B4\uC601 \uCCB4\uC81C \uC2A4\uCF00\uC904\uB7EC\uAC00 \uC774\uB7EC\uD55C \uC2DC\uAC04 \uBD84\uBC30\uB97C \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC778 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uB514\uC2A4\uD50C\uB808\uC774 \uC2E0\uD638\uB97C \uAE30\uB2E4\uB9B4 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uADF8\uB798\uD53D \uAC00\uC18D\uAE30\uC778 ChromArt\uAC00 \uC694\uC18C \uADF8\uB9AC\uAE30\uB97C \uB9C8\uCE60 \uB54C\uAE4C\uC9C0 \uC8FC\uAE30\uC801\uC73C\uB85C \uAE30\uB2E4\uB9BD\uB2C8\uB2E4. \uC774\uB294 \uC7A0\uAE50\uC529 \uC815\uC9C0\uB418\uB294 \uC77C\uC774 \uB9CE\uACE0, \uC774\uB54C \uC6B0\uC120\uC21C\uC704\uAC00 \uB0AE\uC740 \uC791\uC5C5\uB4E4\uC774 \uC2E4\uD589\uB41C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC6B0\uC120\uC21C\uC704\uAC00 \uB192\uC740 \uC791\uC5C5\uB4E4\uC774 \uAE30\uB2E4\uB9B4 \uB54C \uC6B4\uC601 \uCCB4\uC81C \uC2A4\uCF00\uC904\uB7EC\uAC00 MCU\uB97C \uC790\uB3D9\uC73C\uB85C \uBCC0\uACBD\uD558\uC5EC \uC6B0\uC120\uC21C\uC704\uAC00 \uB0AE\uC740 \uC791\uC5C5\uB4E4\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "task-communication"
  }), `\uC791\uC5C5 \uD1B5\uC2E0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC218\uC758 \uC791\uC5C5\uB4E4\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB294 \uC791\uC5C5 \uC0AC\uC774\uC5D0\uC11C \uC548\uC804\uD558\uAC8C \uD1B5\uC2E0\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uB3C4 \uD544\uC694\uD569\uB2C8\uB2E4. \uAC04\uB2E8\uD55C \uC608\uB85C, \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uC74C\uC545 \uC791\uC5C5\uC73C\uB85C \uD1B5\uC2E0\uD558\uB294 \uACBD\uC6B0\uB97C \uB4E4\uC5B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 \uB2E4\uB978 \uBB34\uC5C7\uBCF4\uB2E4 gui_task\uAC00 \uC74C\uC545 \uC7AC\uC0DD\uC744 \uC2DC\uC791\uD558\uB3C4\uB85D \uC694\uCCAD\uD560 \uB54C\uAE4C\uC9C0 \uC74C\uC545 \uC791\uC5C5\uC774 \uAE30\uB2E4\uB824\uC57C \uD569\uB2C8\uB2E4. \uC774\uB54C\uB294 \uBA54\uC2DC\uC9C0 \uB300\uAE30\uC5F4\uC744 \uC0AC\uC6A9\uD558\uBA74 \uAC04\uB2E8\uD558\uAC8C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uB300\uAE30\uC5F4\uC5D0 \uBA54\uC2DC\uC9C0\uAC00 \uC788\uC744 \uB54C\uAE4C\uC9C0 \uC74C\uC545 \uC791\uC5C5\uC774 \uB300\uAE30\uD569\uB2C8\uB2E4. \uC774\uD6C4 \uBA54\uC2DC\uC9C0\uAC00 \uB300\uAE30\uC5F4\uB85C \uC804\uC1A1\uB418\uACE0 \uC6B0\uC120\uC21C\uC704\uAC00 \uB354\uC6B1 \uB192\uC740 \uC791\uC5C5\uC774 \uC5C6\uC73C\uBA74 \uC2A4\uCF00\uC904\uB7EC\uAC00 \uC74C\uC545 \uC791\uC5C5\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `   ...
   music_task_input_queue = os_create_queue(10); //10 element queue
   ...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C "Play"\uB97C \uB204\uB974\uBA74 \uBA54\uC2DC\uC9C0\uAC00 \uC74C\uC545 \uC791\uC5C5\uC758 \uB300\uAE30\uC5F4\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void ScreenMusic::handlePlayPressed()
{
   os_send_message(music_task_input_queue, play_message);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC74C\uC545 \uC791\uC5C5\uC740 \uB300\uAE30\uC5F4\uC744 \uC77D\uC73C\uBA74\uC11C \uBA54\uC2DC\uC9C0\uB97C \uAE30\uB2E4\uB9BD\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uBA54\uC2DC\uC9C0\uAC00 \uC218\uC2E0\uB420 \uB54C\uAE4C\uC9C0 \uC74C\uC545 \uC791\uC5C5\uC774 \uCC28\uB2E8\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
Message message;
os_receive_message(music_task_input_queue, &message);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uC2DC\uC9C0\uAC00 \uC74C\uC545 \uC791\uC5C5 \uB300\uAE30\uC5F4\uC5D0 \uCD94\uAC00\uB41C \uD6C4\uC5D0\uB3C4 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB294 \uACC4\uC18D \uC2E4\uD589\uB418\uC5B4 \uD504\uB808\uC784\uC744 \uCD5C\uB300\uD55C \uBE60\uB974\uAC8C \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4. \uC7AC\uC0DD \uBA54\uC2DC\uC9C0\uB97C \uBC14\uB85C \uCC98\uB9AC\uD558\uB294 \uB370 \uC2DC\uAC04\uC744 \uC18C\uBE44\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC624\uD788\uB824 \uB80C\uB354\uB9C1\uC774 \uC644\uB8CC\uB418\uC5B4 UI \uC791\uC5C5\uC774 \uB2E4\uC74C \uD504\uB808\uC784\uC744 \uB80C\uB354\uB9C1\uD560 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB9AC\uB294 \uB3D9\uC548 \uC2A4\uCF00\uC904\uB7EC\uAC00 \uC74C\uC545 \uC791\uC5C5\uC73C\uB85C \uBC14\uAFD4 \uC2E4\uD589\uD558\uC5EC \uC218\uC2E0\uB418\uB294 \uBA54\uC2DC\uC9C0\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uB3C4 \uC785\uB825 \uB300\uAE30\uC5F4\uC744 \uBD80\uC5EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC608\uB97C \uB4E4\uC5B4 \uB178\uB798\uAC00 \uB05D\uB0AC\uC744 \uB54C \uC74C\uC545 \uC791\uC5C5\uC774 \uC54C\uB9BC \uBA54\uC2DC\uC9C0\uB97C \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uBA54\uC2DC\uC9C0\uB97C \uAE30\uB2E4\uB9B4 \uD544\uC694\uB294 \uC5C6\uC9C0\uB9CC \uCC28\uB2E8 \uC5C6\uC774 \uBA54\uC2DC\uC9C0 \uC720\uBB34\uB97C \uBE60\uB974\uAC8C \uD655\uC778\uD558\uC5EC \uBA54\uC2DC\uC9C0\uB97C \uC77D\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC124\uC815\uC740 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC791\uC5C5 \uC0AC\uC774\uC5D0 \uB9E4\uC6B0 \uB290\uC2A8\uD55C \uC5F0\uACB0\uC744 \uAD6C\uC131\uD569\uB2C8\uB2E4. \uC2E4\uC81C\uB85C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC74C\uC545 \uC791\uC5C5\uC744 \uD14C\uC2A4\uD2B8\uD558\uAC70\uB098, \uBE14\uB8E8\uD22C\uC2A4 \uC791\uC5C5\uC5D0\uC11C\uB3C4 \uC74C\uC545\uC744 \uC190\uC27D\uAC8C \uC7AC\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "handling-interrupts"
  }), `\uC778\uD130\uB7FD\uD2B8 \uCC98\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC791\uC5C5 \uC911\uC5D0\uB294 \uC778\uD130\uB7FD\uD2B8\uC5D0 \uB300\uD55C \uC751\uB2F5\uC73C\uB85C \uC2E4\uD589\uB418\uB294 \uC791\uC5C5\uB3C4 \uC788\uB294\uB370, \uBE14\uB8E8\uD22C\uC2A4 \uD1B5\uC2E0 \uC791\uC5C5\uB3C4 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uBE14\uB8E8\uD22C\uC2A4 \uCE69\uC5D0 \uC0C8\uB85C\uC6B4 \uD328\uD0A4\uC9C0\uAC00 \uC788\uC744 \uB54C \uBE14\uB8E8\uD22C\uC2A4 \uD1B5\uC2E0 \uC791\uC5C5\uC744 \uC2E4\uD589\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0 \uC778\uD130\uB7FD\uD2B8\uAC00 \uBC1C\uC0DD\uD55C\uB2E4\uACE0 \uAC00\uC815\uD558\uBA74 \uC778\uD130\uB7FD\uD2B8 \uD578\uB4E4\uB7EC\uC5D0\uC11C \uBA54\uC2DC\uC9C0\uB97C \uBCF4\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void BT_DataAvailable_Handler(void)
{
  os_send_message(bt_data_queue, data_available_message);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB300\uAE30\uC5F4 \uC678\uC5D0 \uB2E4\uB978 \uB3D9\uAE30\uD654 \uC11C\uBE44\uC2A4\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC138\uB9C8\uD3EC\uC5B4\uC640 \uBBA4\uD14D\uC2A4\uB3C4 \uC5EC\uB7EC \uC6B4\uC601 \uCCB4\uC81C\uC5D0\uC11C \uBC1C\uACAC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "freertos"
  }), `FreeRTOS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uAC1C\uBC1C \uACFC\uC815\uC5D0\uC11C FreeRTOS \uC6B4\uC601 \uCCB4\uC81C\uB85C \uD14C\uC2A4\uD2B8\uB429\uB2C8\uB2E4. TouchGFX\uB294 \uC694\uAD6C \uC0AC\uD56D\uC774 \uAC70\uC758 \uC5C6\uC5B4\uC11C \uC5EC\uB7EC \uC6B4\uC601 \uCCB4\uC81C\uC5D0\uC11C \uC2E4\uD589\uC774 \uAC00\uB2A5\uD558\uC9C0\uB9CC \uAD6C\uCCB4\uC801\uC778 \uC694\uAC74\uC774 \uC5C6\uB2E4\uBA74 FreeRTOS\uAC00 \uC88B\uC740 \uCD9C\uBC1C\uC810\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS\uB294 \uC0C1\uC6A9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBB34\uB8CC\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uAC04\uB2E8\uD55C \uC6B4\uC601 \uCCB4\uC81C\uC785\uB2C8\uB2E4. \uC774 \uC6B4\uC601 \uCCB4\uC81C\uB294 STM32Cube \uD38C\uC6E8\uC5B4\uC640 \uD568\uAED8 \uC18C\uC2A4 \uCF54\uB4DC\uB85C \uC81C\uACF5\uB418\uBA70, \uC774 \uD38C\uC6E8\uC5B4\uC5D0\uB294 \uC5B8\uC81C\uB4E0\uC9C0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC \uC608\uC81C \uCF54\uB4DC\uB3C4 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FreeRTOS\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uACFC \uB77C\uC774\uC120\uC2A4 \uC870\uAC74\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://www.freertos.org/",
    mdxType: "Link"
  }, `freertos.org`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "touchgfx-os-wrappers"
  }), `TouchGFX OS Wrappers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C FreeRTOS\uC5D0\uC11C \uC2E4\uD589\uB418\uBA70, \uB2E8\uC77C \uBA54\uC2DC\uC9C0 \uB300\uAE30\uC5F4\uC744 \uC0AC\uC6A9\uD574 \uB514\uC2A4\uD50C\uB808\uC774 \uCEE8\uD2B8\uB864\uB7EC\uC640 \uB3D9\uAE30\uD654\uD558\uACE0, \uC138\uB9C8\uD3EC\uC5B4\uB97C \uC0AC\uC6A9\uD574 \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uB97C \uBCF4\uD638\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uAC83\uC744 \uCC98\uB9AC\uD558\uB294 \uAC83\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx/os/OSWrappers.cpp`), `\uC5D0\uC11C \uC815\uC758\uD55C OSWrappers \uD074\uB798\uC2A4\uC785\uB2C8\uB2E4. \uC774 \uD074\uB798\uC2A4\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uBA54\uC18C\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBA54\uC18C\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD45C\uD604`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `signalVSync()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774 \uBA54\uC18C\uB4DC\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uB2E4\uC74C \uD504\uB808\uC784\uC744 \uC704\uD55C \uC900\uBE44\uB97C \uB9C8\uCCE4\uC744 \uB54C \uB514\uC2A4\uD50C\uB808\uC774 \uB4DC\uB77C\uC774\uBC84\uC5D0\uC11C \uD638\uCD9C\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `waitForVSync()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB300\uAE30\uD558\uAE30 \uC704\uD574 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uC11C \uD638\uCD9C\uB418\uBA70, signalVSync\uAC00 \uD638\uCD9C\uB420 \uB54C\uAE4C\uC9C0 \uBC18\uD658\uD574\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `isVSyncAvailable()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `(\uC120\uD0DD \uC0AC\uD56D) VSync\uAC00 \uBC1C\uC0DD\uD558\uBA74 true\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. waitForVSync\uC5D0\uC11C\uC758 \uCC28\uB2E8\uC744 \uBC29\uC9C0\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `signalRenderingDone()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `(\uC120\uD0DD \uC0AC\uD56D) \uB300\uAE30 \uC911\uC778 VSync \uC2E0\uD638\uB97C \uBAA8\uB450 \uC81C\uAC70\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `takeFrameBufferSemaphore()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uADF8\uB798\uD53D \uC5D4\uC9C4\uACFC \uAC00\uC18D\uAE30\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uB300\uD55C \uC9C1\uC811 \uC561\uC138\uC2A4 \uAD8C\uD55C\uC744 \uC5BB\uC744 \uBAA9\uC801\uC73C\uB85C \uD638\uCD9C\uB429\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `giveFrameBufferSemaphore()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC9C1\uC811 \uC561\uC138\uC2A4 \uAD8C\uD55C\uC744 \uB2E4\uC2DC \uD574\uC81C\uD560 \uBAA9\uC801\uC73C\uB85C \uD638\uCD9C\uB429\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE30\uBCF8 \uAD6C\uD604\uCCB4\uB294 \uBA54\uC2DC\uC9C0 \uB300\uAE30\uC5F4\uC744 \uC0AC\uC6A9\uD574 VSync(\uD504\uB808\uC784) \uB3D9\uAE30\uD654\uB97C \uAD6C\uD604\uD569\uB2C8\uB2E4. \uADF8\uB798\uD53D \uC5D4\uC9C4 \uC791\uC5C5\uC740 \uB2E4\uC74C VSync\uAC00 \uC218\uC2E0\uB420 \uB54C\uAE4C\uC9C0 \uB300\uAE30\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 OSWrapper \uD074\uB798\uC2A4\uB294 TouchGFX Generator\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4. Generator\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-generator#real-time-operating-system"
  }), `\uC5EC\uAE30`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "no-rtos"
  }), `RTOS \uBBF8\uC0AC\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC6B4\uC601 \uCCB4\uC81C \uC5C6\uC774\uB3C4 \uC2E4\uD589\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC774\uB54C\uB294 main\uC5D0\uC11C \uC9C1\uC811 \uADF8\uB798\uD53D \uC5D4\uC9C4 \uBA54\uC778 \uB8E8\uD504\uB97C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int main()
{
    ...
    touchgfx::HAL::getInstance()->taskEntry();

    //never returns
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `RTOS\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4\uACE0 \uD574\uC11C TouchGFX\uC758 \uC131\uB2A5\uC774 \uB5A8\uC5B4\uC9C0\uB294 \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uB2E4\uB9CC MCU \uBD80\uD558\uAC00 \uC99D\uAC00\uD558\uC5EC TouchGFX\uC640 \uD568\uAED8 \uB2E4\uB978 \uC791\uC5C5\uC744 \uC2E4\uD589\uD558\uAE30\uAC00 \uB354\uC6B1 \uC5B4\uB824\uC6CC\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C\uB3C4 \uC124\uBA85\uD588\uC9C0\uB9CC \uC774\uB54C\uB294 main\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uC2E4\uD589 \uC911\uC77C \uB54C \uB2E4\uB978 \uC791\uC5C5\uC744 \uC218\uB3D9\uC73C\uB85C \uC2E4\uD589\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "modeltick"
  }), `Model::tick`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD55C \uAC00\uC9C0 \uBC29\uBC95\uC740 \uBAA8\uB4E0 \uD504\uB808\uC784\uB9C8\uB2E4 \uD55C \uBC88\uC529 Model \uD074\uB798\uC2A4\uC5D0\uC11C \uC791\uC5C5 \uD655\uC778\uC744 \uC218\uD589\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Model.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
   //run other tasks here
   music_task_tick();
   bluetooth_task_tick();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBAA8\uB4E0 \uC791\uC5C5\uC774 \uD504\uB808\uC784\uB9C8\uB2E4 \uD55C \uBC88\uC529 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC791\uC5C5 \uC18C\uC694 \uC2DC\uAC04\uC774 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uCD94\uAC00\uB429\uB2C8\uB2E4. \uAC04\uB2E8\uD55C \uBC29\uBC95\uC774\uAE30 \uB54C\uBB38\uC5D0 \uBAA8\uB4E0 \uC791\uC5C5\uC774 \uBE60\uB974\uAC8C \uC885\uB8CC\uB420 \uC218 \uC788\uB294 \uB2E8\uC21C \uC2DC\uC2A4\uD15C\uC774\uB77C\uBA74 \uC218\uC6A9\uD560 \uB9CC\uD55C \uD574\uACB0\uCC45\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "oswrappers"
  }), `OSWrappers`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC678\uC5D0 OSWrappers \uD074\uB798\uC2A4\uC5D0\uC11C \uD6C4\uD06C\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC704\uC5D0\uC11C \uC124\uBA85\uD588\uB4EF\uC774 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uC774\uBCA4\uD2B8\uB97C \uAE30\uB2E4\uB824\uC57C \uD560 \uB54C \uC774 \uD074\uB798\uC2A4\uC5D0\uC11C \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. \uC774\uBCA4\uD2B8\uB97C \uAE30\uB2E4\uB9B4 \uB54C \uB2E4\uC74C\uACFC \uAC19\uC740 \uBA54\uC18C\uB4DC\uB85C \uB2E4\uB978 \uC791\uC5C5\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "OSWrappers.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `static volatile uint8_t vsync_sem = 0;

void OSWrappers::signalVSync()
{
    vsync_sem = 1;
}

void OSWrappers::waitForVSync()
{
    vsync_sem = 0; //clear the flag, so we wait for the next vsync
    do {
        // Perform other work while waiting
        music_task_tick();
        bluetooth_task_tick();
    } while(!vsync_sem);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB2E4\uB978 \uC791\uC5C5\uC5D0\uC11C \uD504\uB808\uC784 \uAC04 \uC720\uD734 \uC791\uC5C5\uC744 \uBAA8\uB450 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC9C0\uB9CC \uC791\uC5C5\uC5D0 \uC18C\uC694\uB418\uB294 \uC2DC\uAC04\uC5D0\uB294 \uCC28\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0 OSWrappers::isVSyncAvailable \uD568\uC218\uC640 OSWrappers::signalRenderingDone \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uB2E4\uC218\uC758 while-\uB8E8\uD504\uB97C \uD53C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB450 \uD568\uC218\uB294 \uC6B4\uC601 \uCCB4\uC81C\uAC00 \uC5C6\uB294 \uAD6C\uC131\uC744 \uC120\uD0DD\uD588\uC744 \uB54C TouchGFX Generator\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB54C\uB294 \uC791\uC5C5\uC744 1\uBC00\uB9AC\uCD08 \uC815\uB3C4\uC758 \uB2E8\uACC4\uB85C \uC138\uBD84\uD654\uD558\uC5EC \uB098\uB20C \uC218 \uC788\uB2E4\uB294 \uC810\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC131\uB2A5\uC774 \uB5A8\uC5B4\uC9C0\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);