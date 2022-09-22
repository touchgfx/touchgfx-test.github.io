"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1587],{

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

/***/ 22697:
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
  id: "performance",
  title: "\uC131\uB2A5"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/performance",
  "id": "basic-concepts/performance",
  "title": "\uC131\uB2A5",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/performance.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/performance",
  "permalink": "/4.20/ko/docs/basic-concepts/performance",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "performance",
    "title": "\uC131\uB2A5"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBA54\uC778 \uB8E8\uD504",
    "permalink": "/4.20/ko/docs/basic-concepts/rendering"
  },
  "next": {
    "title": "\uC6B4\uC601 \uCCB4\uC81C",
    "permalink": "/4.20/ko/docs/basic-concepts/operating-system"
  }
};
const assets = {};


const toc = [{
  value: "\uB80C\uB354\uB9C1 \uC2DC\uAC04 \uCE21\uC815",
  id: "measuring-the-rendering-time",
  level: 2
}, {
  value: "\uC190\uC2E4\uB41C \uD504\uB808\uC784 \uACC4\uC0B0",
  id: "counting-the-lost-frames",
  level: 2
}, {
  value: "\uC190\uC2E4\uB41C \uD504\uB808\uC784 \uBCF4\uC0C1",
  id: "compensating-for-lost-frames",
  level: 3
}, {
  value: "\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uC694\uC778",
  id: "what-affects-the-rendering-time",
  level: 2
}, {
  value: "\uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD558\uB294 \uC2A4\uD06C\uB9B0\uC758 \uC601\uC5ED",
  id: "how-much-of-the-screen-is-updated",
  level: 3
}, {
  value: "\uADF8\uB798\uD53D\uC758 \uACC4\uCE35 \uC218",
  id: "the-number-of-layers-in-the-graphics",
  level: 3
}, {
  value: "\uD53D\uC140 \uB80C\uB354\uB9C1\uC758 \uBCF5\uC7A1\uC131",
  id: "the-complexity-of-rendering-the-pixels",
  level: 3
}, {
  value: "\uB80C\uB354\uB9C1\uC744 \uC9C0\uC6D0\uD558\uB294 \uD558\uB4DC\uC6E8\uC5B4",
  id: "hardware-support-for-rendering",
  level: 3
}, {
  value: "\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uACE0\uB824\uD574\uC57C \uD558\uB294 \uACBD\uC6B0",
  id: "when-should-you-consider-rendering-time",
  level: 2
}, {
  value: "Optimize Performance by Invalidating Content",
  id: "optimize-performance-by-invalidating-content",
  level: 2
}, {
  value: "Example using TextArea::invalidateContent()",
  id: "example-using-textareainvalidatecontent",
  level: 3
}, {
  value: "\uC88B\uC740 \uC131\uB2A5\uC744 \uB2EC\uC131\uD558\uB294 \uD301",
  id: "tips-to-get-good-performance",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uB0B4\uC7A5\uB418\uB294 \uADF8\uB798\uD53D \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC131\uB2A5\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC5D0\uC11C \uC815\uC758\uD558\uB294 \uACE0\uC131\uB2A5\uC774\uB780 \uB192\uC740 \uD504\uB808\uC784 \uC18D\uB3C4\uB97C \uC720\uC9C0\uD558\uBA74\uC11C \uC6D0\uD558\uB294 \uADF8\uB798\uD53D \uD6A8\uACFC\uC640 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uB294 \uAC83\uC744 \uB9D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804 \uC139\uC158\uC5D0\uC11C \uC6B0\uB9AC\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uBA54\uC778 \uB8E8\uD504\uC758 \uC601\uD5A5\uC744 \uC5BC\uB9C8\uB098 \uBC1B\uB294\uC9C0 \uC0B4\uD3B4\uBCF4\uC558\uC2B5\uB2C8\uB2E4. \uBCD1\uB82C RGB \uB514\uC2A4\uD50C\uB808\uC774\uAC00 LTDC\uC5D0 \uC5F0\uACB0\uB418\uC5B4 \uC788\uACE0, \uD504\uB808\uC784\uBC84\uD37C\uAC00 2\uAC1C\uB77C\uACE0 \uB2E4\uC2DC \uD55C \uBC88 \uAC00\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC778 \uC0C1\uD669\uC740 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uC774\uC911 \uD504\uB808\uC784\uBC84\uD37C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uCD08\uB2F9 60\uD68C \uB9AC\uD504\uB808\uC2DC\uB41C\uB2E4\uACE0 \uAC00\uC815\uD588\uC744 \uB54C \uAC01 \uB9AC\uD504\uB808\uC2DC \uC0AC\uC774\uC5D0 \uC57D 16ms\uC758 \uC2DC\uAC04\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4. \uACC4\uC0B0 \uBC29\uBC95\uC740 \uC774\uB807\uC2B5\uB2C8\uB2E4. 1s / 60 = 0.01667s = 16.67ms.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uD504\uB808\uC784\uBC84\uD37C1\uC758 \uC804\uC1A1\uC774 \uC2DC\uC791\uB418\uB294 \uC2DC\uAC04\uC5D0 \uD504\uB808\uC7841\uC744 \uD504\uB808\uC784\uBC84\uD37C2\uB85C \uADF8\uB9AC\uAE30 \uC2DC\uC791\uD569\uB2C8\uB2E4. \uB2E4\uC74C \uC804\uC1A1\uC774 \uC2DC\uC791\uB418\uAE30 \uC804\uC5D0 \uD504\uB808\uC7841 \uB80C\uB354\uB9C1\uC774 \uB05D\uB098\uBA74 \uD504\uB808\uC784\uBC84\uD37C 2\uB97C \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. 16.67ms \uC548\uC5D0 \uB80C\uB354\uB9C1\uC774 \uB05D\uB098\uC9C0 \uC54A\uC73C\uBA74 \uD504\uB808\uC784\uBC84\uD37C 1\uC774 \uB2E4\uC2DC \uC804\uC1A1\uB418\uACE0 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uBCC0\uD568\uC5C6\uC774 \uADF8\uB300\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "16.67ms\uB97C \uBC97\uC5B4\uB098\uB294 \uBA54\uC778 \uB8E8\uD504 \uC2DC\uAC04"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC0C1\uD669\uC744 \uD504\uB808\uC784 \uC190\uC2E4\uC774\uB77C\uACE0 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC218\uC9D1 \uBC0F \uC5C5\uB370\uC774\uD2B8 \uB2E8\uACC4\uC5D0 \uAC78\uB9AC\uB294 \uC2DC\uAC04\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uB9E4\uC6B0 \uC801\uAE30 \uB54C\uBB38\uC5D0(\uC608: 1ms \uBBF8\uB9CC), \uC804\uCCB4 \uBA54\uC778 \uB8E8\uD504 \uC2DC\uAC04\uC744 \uAC10\uC548\uD588\uC744 \uB54C \uB2E4\uC18C \uBB34\uC2DC\uD574\uB3C4 \uBB34\uBC29\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC9C0\uAE08\uBD80\uD130, \uADF8\uB9AC\uACE0 \uC77C\uBC18\uC801\uC73C\uB85C \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uACE0\uB824\uD560 \uB54C\uB294 \uC218\uC9D1 \uB2E8\uACC4\uC640 \uC5C5\uB370\uC774\uD2B8 \uB2E8\uACC4\uB3C4 \uD3EC\uD568\uB41C \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC218\uC758 \uD504\uB808\uC784\uC5D0\uC11C \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uC81C\uD55C \uC2DC\uAC04\uC778 16.67ms\uB97C \uCD08\uACFC\uD560 \uACBD\uC6B0 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uD504\uB808\uC784 \uC18D\uB3C4\uB294 \uCD08\uB2F9 30\uD504\uB808\uC784(fps)\uC774 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uB300\uBD80\uBD84 16.67ms\uBCF4\uB2E4 \uC9E7\uB354\uB77C\uB3C4 \uC77C\uBD80 \uD504\uB808\uC784\uC5D0\uC11C 16.67ms\uBCF4\uB2E4 \uAE38\uBA74 \uD3C9\uADE0 \uD504\uB808\uC784 \uC18D\uB3C4\uB294 60fps\uC5D0 \uAC00\uAE4C\uC6CC\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC560\uB2C8\uBA54\uC774\uC158\uC740 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uBCF4\uC774\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB530\uB77C \uC77C\uBD80 \uC560\uB2C8\uBA54\uC774\uC158 \uB2E8\uACC4\uB294 \uBE60\uB974\uACE0, \uC77C\uBD80\uB294 \uB290\uB9AC\uAC8C \uBCF4\uC77C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD604\uC0C1\uC740 \uBC14\uB78C\uC9C1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uB354 \uAE38\uC5B4\uC9C8 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. 33ms\uB97C \uC870\uAE08\uB9CC \uCD08\uACFC\uD574\uB3C4 \uC138 \uBC88\uC9F8 \uC804\uC1A1\uC5D0\uC11C\uB9CC \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC744 \uC900\uBE44\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 20fps\uB85C \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `FPS`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCD5C\uB300 \uB80C\uB354\uB9C1 \uC2DC\uAC04`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `60`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `16.67ms`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `33.34ms`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `20`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `50.00ms`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `15`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `66.67ms`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uD45C\uB294 \uC77C\uC815 \uD504\uB808\uC784 \uC18D\uB3C4\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uCD5C\uB300 \uB80C\uB354\uB9C1 \uC2DC\uAC04(\uC218\uC9D1 \uBC0F \uC5C5\uB370\uC774\uD2B8 \uB2E8\uACC4 \uD3EC\uD568)\uC744 \uB098\uD0C0\uB0B8 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC131\uB2A5\uC744 \uB192\uC774\uB824\uBA74 \uD504\uB808\uC784 \uC18D\uB3C4\uB97C \uC8FC\uAE30\uC801\uC73C\uB85C \uD655\uC778\uD558\uACE0 \uBAA8\uB2C8\uD130\uB9C1\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC740 \uB450 \uAC00\uC9C0\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB80C\uB354\uB9C1 \uC2DC\uAC04 \uCE21\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC190\uC2E4\uB41C \uD504\uB808\uC784 \uACC4\uC0B0`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "measuring-the-rendering-time"
  }), `\uB80C\uB354\uB9C1 \uC2DC\uAC04 \uCE21\uC815`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCCAB\uC9F8, \uB80C\uB354\uB9C1 \uC2DC\uAC04 \uCE21\uC815\uC740 \uAC00\uC7A5 \uC0C1\uC138\uD55C \uC815\uBCF4\uB97C \uC5BB\uC744 \uC218 \uC788\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC774\uB54C\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uD504\uB808\uC784 \uC804\uC1A1\uBD80\uD130 \uB80C\uB354\uB9C1 \uB2E8\uACC4\uAC00 \uB05D\uB0A0 \uB54C\uAE4C\uC9C0 \uAC78\uB9AC\uB294 \uC2DC\uAC04\uC744 \uCE21\uC815\uD569\uB2C8\uB2E4. \uC218\uC9D1 \uB2E8\uACC4\uAC00 \uC2DC\uC791\uB418\uBA74 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 GPIO \uD074\uB798\uC2A4 \uD568\uC218\uB97C \uD638\uCD9C\uD558\uACE0, \uB80C\uB354\uB9C1 \uB2E8\uACC4\uAC00 \uB05D\uB098\uBA74 \uD55C \uBC88 \uB354 \uD638\uCD9C\uD569\uB2C8\uB2E4. The application defines these function and can hook into them to perform measurements.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE21\uC815\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 \uB450 \uAC00\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC624\uC2E4\uB85C\uC2A4\uCF54\uD504\uC640 \uAC19\uC740 \uC678\uBD80 \uC2DC\uAC04 \uCE21\uC815 \uC7A5\uCE58 \uC0AC\uC6A9: \uC624\uC2E4\uB85C\uC2A4\uCF54\uD504\uB97C \uC0AC\uC6A9\uD574 \uCE21\uC815\uD558\uB824\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `GPIO`), ` \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `set(GPIO_ID)`), ` \uBA54\uC18C\uB4DC\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `clear(GPIO_ID)`), ` \uBA54\uC18C\uB4DC\uB97C \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC624\uC2E4\uB85C\uC2A4\uCF54\uD504\uAC00 \uCD9C\uB825\uC774 \uB192\uC744 \uB54C\uB3C4 \uC2DC\uAC04 \uACBD\uACFC\uC5D0 \uB530\uB978 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uCE21\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB0B4\uBD80 \uD0C0\uC774\uBA38 \uC0AC\uC6A9: sysTick\uACFC \uAC19\uC740 \uB0B4\uBD80 \uD0C0\uC774\uBA38\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4. GPIO::set(RENDER_TIME)\uAC00 \uD638\uCD9C\uB418\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD0C0\uC774\uBA38 \uAC12\uC744 \uBCC0\uC218\uB85C \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uD6C4 clear\uAC00 \uD638\uCD9C\uB418\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD0C0\uC774\uBA38\uB97C \uB2E4\uC2DC \uC77D\uACE0 \uC774\uC804 \uAC12\uC744 \uAC10\uC0B0\uD558\uC5EC \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uAD6C\uD569\uB2C8\uB2E4. \uCE21\uC815 \uD574\uC0C1\uB3C4\uB294 \uD0C0\uC774\uBA38\uC758 \uC18D\uB3C4\uC5D0 \uB530\uB77C \uACB0\uC815\uB429\uB2C8\uB2E4. \uB610\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC5B4\uB5BB\uAC8C\uB4E0 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uD45C\uC2DC\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB54C \uD55C \uAC00\uC9C0 \uBC29\uBC95\uC740 \uAC12\uC744 \uC804\uC5ED \uBCC0\uC218\uB85C \uC800\uC7A5\uD558\uC5EC \uC2A4\uD06C\uB9B0\uC5D0\uC11C TextArea\uC5D0 \uD45C\uC2DC\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uB610\uD55C \uB514\uBC84\uAC70\uB97C \uC0AC\uC6A9\uD574 \uAC12\uC744 \uD655\uC778\uD558\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "counting-the-lost-frames"
  }), `\uC190\uC2E4\uB41C \uD504\uB808\uC784 \uACC4\uC0B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine counts the number of transfers that has occurred during the last collect-update-rendering phase. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC774 \uAC12\uC744 \uD655\uC778\uD558\uC5EC \uD504\uB808\uC784 \uC190\uC2E4\uB85C \uC778\uD574 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uB5A8\uC5B4\uC84C\uB294\uC9C0 \uC5EC\uBD80\uB97C \uC27D\uAC8C \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uACC4\uC0B0\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `HAL`), ` \uD074\uB798\uC2A4\uC5D0\uC11C \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void handleTickEvent() {
  tickCounter += 1;
  if (HAL::getInstance()->getLCDRefreshCount() > 1) {
    //Alert programmer somehow
    ...
  }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "compensating-for-lost-frames"
  }), `\uC190\uC2E4\uB41C \uD504\uB808\uC784 \uBCF4\uC0C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uC190\uC2E4\uC774 \uBC1C\uC0DD\uD558\uC5EC \uC560\uB2C8\uBA54\uC774\uC158 1\uAC1C\uC758 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uB5A8\uC5B4\uC84C\uB2E4\uBA74 \uC5B4\uB290 \uC815\uB3C4\uAE4C\uC9C0\uB294 \uBCF4\uC0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBC29\uBC95\uC740 \uB2E4\uC74C \uC911 \uD55C \uAC00\uC9C0\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB05D\uAE4C\uC9C0 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4 - \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uACC4\uC18D \uC2E4\uD589\uD569\uB2C8\uB2E4. \uC560\uB2C8\uBA54\uC774\uC158 \uC2DC\uAC04\uC774 \uAE38\uC5B4\uC9C8 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uC790\uC8FC \uB04A\uAE38 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC77C\uBD80 \uD504\uB808\uC784\uC744 \uAC74\uB108\uB701\uB2C8\uB2E4 - \uD504\uB808\uC784\uC744 \uAC74\uB108\uB6F0\uC5B4 \uC804\uCCB4 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC608\uC0C1\uBCF4\uB2E4 \uC624\uB798 \uAC78\uB9AC\uC9C0 \uC54A\uAC8C \uC124\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C\uB294 \uD504\uB808\uC784\uC774 \uC190\uC2E4\uB418\uBA74 \uC77C\uBD80 \uD504\uB808\uC784\uC744 \uC790\uB3D9\uC73C\uB85C \uAC74\uB108\uB6F0\uB3C4\uB85D \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uBC29\uBC95\uC740 \uC2E4\uC81C \uD504\uB808\uC784\uB9C8\uB2E4 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uD55C \uBC88 \uC774\uC0C1 \uC2E4\uD589\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC774\uB294 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uBD88\uADDC\uCE59\uD560 \uB54C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uBCF4\uB2E4 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC2E4\uD589\uD558\uB294 \uB370 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "HAL.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void setFrameRateCompensation(bool enabled)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "what-affects-the-rendering-time"
  }), `\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uC694\uC778`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uC694\uC778\uC740 \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uBD80\uBD84\uC758 \uD06C\uAE30, \uACC4\uCE35\uD654 \uC0AC\uC6A9, \uC704\uC82F\uC758 \uBCF5\uC7A1\uC131, \uB80C\uB354\uB9C1 \uC2DC \uD558\uB4DC\uC6E8\uC5B4 \uC9C0\uC6D0 \uB4F1 \uB2E4\uC591\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "how-much-of-the-screen-is-updated"
  }), `\uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD558\uB294 \uC2A4\uD06C\uB9B0\uC758 \uC601\uC5ED`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD560 \uD53D\uC140\uC758 \uC218\uC5D0 \uBE44\uB840\uD569\uB2C8\uB2E4. \uC560\uB2C8\uBA54\uC774\uC158\uC758 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uB108\uBB34 \uAE38\uBA74 \uC560\uB2C8\uBA54\uC774\uC158 \uC601\uC5ED\uC744 \uC904\uC774\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uD68C\uC804\uD558\uB294 \uC774\uBBF8\uC9C0\uAC00 \uC788\uB294\uB370 \uC131\uB2A5\uC774 \uB5A8\uC5B4\uC9C4\uB2E4\uBA74 \uC774\uBBF8\uC9C0\uC758 \uD06C\uAE30\uB97C \uC904\uC5EC\uC11C \uC131\uB2A5\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/reducing-image-size.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uC774\uBBF8\uC9C0\uC758 \uD06C\uAE30\uAC00 \uC904\uBA74 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uB3C4 \uC9E7\uC544\uC9D1\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E8, \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBB34\uD6A8\uD654\uD55C \uC601\uC5ED\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB9AC\uD504\uB808\uC2DC\uAC00 \uC2E4\uC81C\uB85C \uD544\uC694\uD55C \uC601\uC5ED\uB9CC \uBB34\uD6A8\uD654\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uBB34\uD6A8\uD654 \uC601\uC5ED\uC774 \uCEE4\uC9C8\uC218\uB85D \uB80C\uB354\uB9C1 \uC2DC\uAC04\uB3C4 \uAE38\uC5B4\uC9D1\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-number-of-layers-in-the-graphics"
  }), `\uADF8\uB798\uD53D\uC758 \uACC4\uCE35 \uC218`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uADF8\uB798\uD53D\uC740 \uC5EC\uB7EC \uAC00\uC9C0 \uC694\uC18C\uAC00 \uC11C\uB85C \uC2A4\uD0DD\uC744 \uC774\uB8E8\uC5B4 \uAD6C\uC131\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD55C \uAC00\uC9C0 \uC694\uC18C \uC5C5\uB370\uC774\uD2B8\uD558\uBA74 \uC77C\uBC18\uC801\uC73C\uB85C \uBAA8\uB4E0 \uC694\uC18C\uB97C \uB2E4\uC2DC \uADF8\uB824\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB300\uD45C\uC801\uC73C\uB85C \uBC30\uACBD \uC774\uBBF8\uC9C0\uC640 \uD504\uB808\uC784, \uADF8\uB9AC\uACE0 \uC77C\uBD80 \uD14D\uC2A4\uD2B8\uAC00 \uADF8\uB807\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-in-a-frame.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uADF8\uB798\uD53D \uC694\uC18C \uACC4\uCE35\uD654"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB294 \uD22C\uBA85 \uD504\uB808\uC784\uC774 \uBCF4\uC774\uB294 \uC774\uBBF8\uC9C0 \uC704\uC82F \uC704\uC5D0 TextArea \uC704\uC82F\uC744 \uBC30\uCE58\uD55C \uAC83\uC785\uB2C8\uB2E4. \uB450 \uC704\uC82F \uBAA8\uB450 \uBC30\uACBD \uC774\uBBF8\uC9C0 \uC704\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-in-a-frame-designer-4.17.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC758 \uADF8\uB798\uD53D \uC694\uC18C \uACC4\uCE35\uD654"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD574\uACB0\uCC45\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC790\uC8FC \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB610\uD55C \uC720\uC5F0\uC131\uC774 \uB192\uC544\uC11C \uB9E4\uC6B0 \uC26C\uC6B4 \uD574\uACB0\uCC45\uC774\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uD504\uB808\uC784 \uBCC0\uACBD\uC774 \uAC00\uB2A5\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uBC30\uACBD\uC5D0\uC11C \uD504\uB808\uC784\uACFC \uD14D\uC2A4\uD2B8\uB97C \uC774\uB3D9\uC2DC\uD0A4\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8\uAC00 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uC5C5\uB370\uC774\uD2B8\uB418\uC5B4 \uB2E4\uC2DC \uADF8\uB824\uC57C \uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uB798\uD53D \uC5D4\uC9C4\uB3C4 \uBC30\uACBD\uACFC \uD504\uB808\uC784, \uADF8\uB9AC\uACE0 \uC774\uC5B4\uC11C \uC0C8\uB85C\uC6B4 \uD14D\uC2A4\uD2B8\uAE4C\uC9C0 \uB2E4\uC2DC \uADF8\uB824\uC57C \uD569\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C \uD14D\uC2A4\uD2B8\uB97C \uB80C\uB354\uB9C1\uD558\uB294 \uC2DC\uAC04\uB3C4 \uC99D\uAC00\uD558\uAE30 \uB54C\uBB38\uC5D0 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uBB34\uD6A8\uD654 \uC601\uC5ED\uC5D0 \uACC4\uCE35\uC774 \uB9CE\uC744\uC218\uB85D \uB80C\uB354\uB9C1 \uC2DC\uAC04\uB3C4 \uAE38\uC5B4\uC9D1\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "the-complexity-of-rendering-the-pixels"
  }), `\uD53D\uC140 \uB80C\uB354\uB9C1\uC758 \uBCF5\uC7A1\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD53D\uC140\uC774\uB77C\uACE0 \uD574\uC11C \uD504\uB808\uC784\uBC84\uD37C\uB85C \uB80C\uB354\uB9C1\uD558\uB294 \uAC83\uC774 \uB2E4 \uC5B4\uB824\uC6B4 \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uC5B4\uB5A4 \uB80C\uB354\uB9C1\uC774 \uB418\uC5C8\uB4E0\uC9C0 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uD574\uB2F9\uD558\uB294 \uD53D\uC140\uC744 \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uC791\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC791\uC131\uD560 \uD53D\uC140\uC744 \uACC4\uC0B0\uD558\uB294 \uB4DC\uB294 \uC190\uC2E4\uC740 \uAC01\uAE30 \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 Box Widget\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uACE0\uC815\uB41C \uC0C9\uC0C1\uC740 \uAC00\uC7A5 \uB0AE\uC740 \uC190\uC2E4\uC774 \uB4DC\uB294\uB370, \uADF8 \uC774\uC720\uB294 \uD53D\uC140\uC744 \uD55C \uBC88\uB9CC \uACC4\uC0B0\uD558\uBA74 \uBAA8\uB4E0 \uD53D\uC140\uC5D0 \uC7AC\uC0AC\uC6A9\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC989, Box\uB4E4\uC744 \uB9CE\uC774 \uC0AC\uC6A9\uD558\uC5EC \uB9E4\uC6B0 \uB192\uC740 \uC131\uB2A5\uC744 \uC5BB\uB294 \uC148\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uD488\uC9C8\uC774 \uB192\uC9C0 \uC54A\uC744 \uB54C\uB294 \uAD8C\uC7A5\uD558\uC9C0 \uC54A\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0\uB294 \uD53D\uC140 \uACC4\uC0B0\uC5D0 \uB4DC\uB294 \uC190\uC2E4\uC774 \uB450 \uBC88\uC9F8\uB85C \uB0AE\uC740\uB370, \uC774\uB294 \uD53D\uC140\uC774 \uC5B8\uC81C\uB4E0\uC9C0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD615\uC2DD\uC73C\uB85C \uBE44\uD2B8\uB9F5\uC5D0 \uC800\uC7A5\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uD53D\uC140\uC744 \uACC4\uC0B0\uD558\uC5EC \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uC791\uC131\uD558\uB824\uBA74 \uC815\uD655\uD55C \uBE44\uD2B8\uB9F5 \uC704\uCE58\uC5D0\uC11C \uC0C9\uC0C1 \uAC12\uC744 \uAC00\uC838\uC640\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8\uB294 \uBB38\uC790 \uD558\uB098\uB9C8\uB2E4 \uC2E4\uC81C\uB85C \uC791\uC740 \uC774\uBBF8\uC9C0\uB85C \uD45C\uD604\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC190\uC2E4\uC774 \uC774\uBBF8\uC9C0\uC640 \uB9DE\uBA39\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C\uB85C \uC190\uC2E4\uC774 \uB354 \uB192\uC2B5\uB2C8\uB2E4. \uC791\uC740 \uC774\uBBF8\uC9C0\uAC00 \uB108\uBB34 \uB9CE\uC544\uC11C \u201C\uC2DC\uC791-\uC815\uC9C0\u201D \uC190\uC2E4\uC774 \uD06C\uAC8C \uB298\uC5B4\uB098\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uAC01 \uBB38\uC790\uC758 \uC704\uCE58\uB97C \uACC4\uC0B0\uD558\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uADF8\uB807\uC2B5\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8\uB294 \uCD5C\uB300\uD55C \uCDA9\uC2E4\uD558\uAC8C \uBCF4\uC77C \uC218 \uC788\uB3C4\uB85D \uD22C\uBA85\uB3C4\uB97C \uC801\uC6A9\uD558\uC5EC \uC791\uC740 \uC774\uBBF8\uC9C0\uB85C \uD45C\uD604\uB429\uB2C8\uB2E4. \uD22C\uBA85\uB3C4\uC5D0 \uB300\uD55C \uB0B4\uC6A9\uC740 \uC544\uB798\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD68C\uC804\uD558\uAC70\uB098 \uD655\uB300/\uCD95\uC18C\uB41C \uC774\uBBF8\uC9C0\uB294 \uBE44\uC6A9\uC774 \uB354 \uB192\uC2B5\uB2C8\uB2E4. \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uBE44\uD2B8\uB9F5\uC5D0\uC11C \uD53D\uC140 \uAC12\uC744 \uAC00\uC838\uC624\uC9C0\uB9CC \uACC4\uC0B0 \uC2DC\uAC04\uC774 \uB354 \uC624\uB798 \uAC78\uB9AC\uB294\uB370, \uADF8 \uC774\uC720\uB294 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uD655\uB300/\uCD95\uC18C\uC640 \uD68C\uC804\uAE4C\uC9C0 \uACE0\uB824\uD574\uC57C \uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC6D0\uD615\uACFC \uAC19\uC740 \uAE30\uD558\uD559\uC801 \uC694\uC18C\uB294 \uC190\uC2E4\uC774 \uD6E8\uC52C \uB354 \uB192\uC2B5\uB2C8\uB2E4. \uC774\uB54C\uB294 \uBE44\uD2B8\uB9F5\uC5D0\uC11C \uD53D\uC140 \uC0C9\uC0C1\uC744 \uAC00\uC838\uC624\uC9C0 \uBABB\uD574\uC11C \uC6D0\uD615 \uD615\uC0C1\uACFC \uC6D0\uD615\uC758 \uAC01 \uD53D\uC140 \uC0C9\uC0C1\uAE4C\uC9C0 \uBAA8\uB450 \uACC4\uC0B0\uD574\uC57C \uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD22C\uBA85\uB3C4\uAC00 \uC801\uC6A9\uB418\uBA74 \uC694\uC18C\uB97C \uADF8\uB9AC\uB294\uB370 \uB4DC\uB294 \uC190\uC2E4\uC774 \uC99D\uAC00\uD569\uB2C8\uB2E4. \uC77C\uBD80 \uD53D\uC140\uC774 \uBD88\uD22C\uBA85\uD558\uC9C0 \uC54A\uC740 \uC694\uC18C\uB294 \uD22C\uBA85\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uD22C\uBA85 \uC694\uC18C \uB4A4\uC5D0 \uC788\uB294 \uC694\uC18C\uB97C \uBA3C\uC800 \uADF8\uB824\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0 \u201C\uD504\uB808\uC784 \uB0B4 \uD14D\uC2A4\uD2B8\u201D \uC139\uC158\uC5D0\uC11C\uB3C4 \uBCF4\uC558\uB4EF\uC774 \uADF8\uB9AC\uB294 \uC190\uC2E4\uC774 \uC99D\uAC00\uD558\uAC8C \uB429\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uBC30\uACBD \uD53D\uC140\uACFC \uD22C\uBA85 \uC694\uC18C\uC758 \uD53D\uC140\uC744 \uACB0\uD569\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uC791\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACC4\uC0B0 \uACFC\uC815\uC740 \uB2E8\uC21C\uD788 \uC774\uBBF8 \uACC4\uC0B0\uB41C \uD53D\uC140\uC744 \uC791\uC131\uD558\uB294 \uAC83\uBCF4\uB2E4 \uD6E8\uC52C \uB354 \uB9CE\uC740 \uC2DC\uAC04\uC774 \uC18C\uC694\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/box-image-texture-circle.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uBC15\uC2A4, \uC774\uBBF8\uC9C0, \uD68C\uC804 \uC774\uBBF8\uC9C0, \uC6D0\uD615 \uC704\uB294 \uBD88\uD22C\uBA85 \uC694\uC18C\uC774\uACE0, \uC544\uB798\uB294 \uD22C\uBA85 \uC694\uC18C\uC785\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD22C\uBA85 \uC694\uC18C\uB294 \uD56D\uC0C1 \uACC4\uCE35\uC774 \uD558\uB098 \uB354 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uBD88\uD22C\uBA85 \uD53D\uC140\uC774 \uB2E4\uB978 \uBD88\uD22C\uBA85 \uD53D\uC140 \uC704\uC5D0 \uACB9\uCE5C\uB2E4\uACE0 \uD574\uC11C \uBC18\uB4DC\uC2DC \uACC4\uCE35 \uC218\uAC00 \uB298\uC5B4\uB098\uB294 \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uB2E4\uB978 \uBD88\uD22C\uBA85 \uD53D\uC140\uB85C \uACB9\uCE58\uB294 \uD53D\uC140\uC740 \uADF8\uB9AC\uC9C0 \uC54A\uC73C\uB824\uACE0 \uD558\uB294\uB370, \uC774\uB294 \uC18C\uC911\uD55C \uC2DC\uAC04\uC744 \uB0AD\uBE44\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uBB34\uD6A8\uD654 \uC601\uC5ED\uC5D0 \uC190\uC2E4\uC774 \uB192\uC740 \uC694\uC18C\uAC00 \uB9CE\uC744\uC218\uB85D \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uAE38\uC5B4\uC9D1\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC5D0\uC11C\uB3C4 \uC598\uAE30\uD588\uC9C0\uB9CC \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uAE38\uC5B4\uC9C0\uB294 \uC774\uC720\uB294 \uC624\uC9C1 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC5D0 \uD3EC\uD568\uB418\uB294 \uC694\uC18C\uC5D0\uC11C \uBE44\uB86F\uB429\uB2C8\uB2E4. \uBB34\uD6A8\uD654 \uC601\uC5ED \uC678\uBD80\uC758 \uC694\uC18C\uB294 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI \uAD6C\uC131\uC694\uC18C\uC640 \uC131\uB2A5\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/general-ui-component-performance"
  }), `\uC5EC\uAE30`), `\uC5D0\uC11C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "hardware-support-for-rendering"
  }), `\uB80C\uB354\uB9C1\uC744 \uC9C0\uC6D0\uD558\uB294 \uD558\uB4DC\uC6E8\uC5B4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC5D0\uB294 Chrom-ART(\uB610\uB294 DMA2D)\uB77C\uACE0 \uD558\uB294 \uADF8\uB798\uD53D \uAC00\uC18D\uAE30\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294\uB370, \uC774 \uAC00\uC18D\uAE30\uAC00 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC00\uC18D\uAE30\uAC00 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC \uCF54\uC5B4\uC640 \uD568\uAED8 \uC2E4\uD589\uB418\uAE30 \uB54C\uBB38\uC5D0 \uAC00\uC18D\uAE30\uAC00 \uADF8\uB798\uD53D\uC744 \uB80C\uB354\uB9C1\uD558\uB294 \uB3D9\uC548 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB294 \uB2E4\uB978 \uC791\uC5C5\uC744 \uC790\uC720\uB86D\uAC8C \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Chrom-ART\uB294 \uC8FC\uB85C \uC774\uBBF8\uC9C0\uC640 \uD14D\uC2A4\uD2B8\uC5D0 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uAC00\uB2A5\uD55C \uACBD\uC6B0 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "when-should-you-consider-rendering-time"
  }), `\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uACE0\uB824\uD574\uC57C \uD558\uB294 \uACBD\uC6B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uD56D\uC0C1 \uC911\uC694\uD55C \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uB208\uC5D0 \uB744\uAC8C \uB0AE\uC744 \uB54C \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uC2E0\uACBD \uC368\uC57C \uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uC77C\uBD80 \uC2A4\uD06C\uB9B0 \uC601\uC5ED\uC5D0\uC11C \uC560\uB2C8\uBA54\uC774\uC158(\uD68C\uC804\uD558\uB294 \uC544\uC774\uCF58 \uB4F1)\uC744 \uC2E4\uD589\uD558\uAC70\uB098, \uD639\uC740 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uC784\uC758 \uC694\uC18C\uB97C \uC6C0\uC9C1\uC774\uAC70\uB098 \uBC00\uC5B4\uC11C \uC6C0\uC9C1\uC77C \uB54C\uAC00 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. \uB610\uD55C \uC5C5\uB370\uC774\uD2B8 \uC8FC\uD30C\uC218\uAC00 \uB0AE\uC73C\uBA74 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uACE0 \uB2E8\uACC4\uC801\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0\uC5D0\uB3C4 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0 \uC804\uCCB4 \uC2A4\uD06C\uB9B0\uC744 \uC0C8\uB85C\uC6B4 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uD06C\uAC8C \uB5A8\uC5B4\uC9C0\uB354\uB77C\uB3C4 \uBCF4\uD1B5\uC740 \uC0AC\uC6A9\uC790\uC758 \uB208\uC5D0 \uB744\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uADF8 \uC774\uC720\uB294 \uC0AC\uC6A9\uC790\uAC00 \uB80C\uB354\uB9C1 \uC2DC\uC791 \uC2DC\uC810\uC774 \uC544\uB2CC, \uC885\uB8CC \uC2DC\uC810\uC5D0\uB9CC \uC778\uC9C0\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uB450 \uAC00\uC9C0 \uADDC\uCE59\uC740 \uC608\uB97C \uB4E4\uC5B4 \uC6C0\uC9C1\uC774\uB294 \uC560\uB2C8\uBA54\uC774\uC158 \uC694\uC18C\uC5D0\uC11C\uB294 \uACC4\uCE35\uC744 \uC801\uAC8C \uC0AC\uC6A9\uD558\uACE0 \uBCF5\uC7A1\uD55C \uC694\uC18C\uC640 \uC5EC\uB7EC \uACC4\uCE35\uC740 \uC0AC\uC6A9\uC744 \uC790\uC81C\uD574\uC57C \uD55C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uB2E4\uB978 \uC2A4\uD06C\uB9B0 \uC601\uC5ED\uC5D0\uC11C\uB294 \uC774\uB807\uAC8C \uD574\uB3C4 \uBB38\uC81C\uAC00 \uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/clock-and-scrolllist.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uC544\uB0A0\uB85C\uADF8 \uC2DC\uACC4\uC640 \uC2A4\uD06C\uB864 \uBAA9\uB85D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uC608\uB97C \uBCF4\uBA74 \uC67C\uCABD\uC5D0 \uC544\uB0A0\uB85C\uADF8 \uC2DC\uACC4\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC2DC\uACC4 \uBC14\uB298 3\uAC1C\uAC00 \uC791\uACE0 \uAE34 \uC774\uBBF8\uC9C0\uB4E4\uC744 \uB530\uB77C \uD68C\uC804\uD558\uBA74\uC11C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uC774\uB54C\uB294 \uC2DC\uACC4 \uBC14\uB298\uC774 \uACC4\uC18D \uC6C0\uC9C1\uC774\uB294 \uAC83\uC774 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC5D0 \uC77C\uBC18\uC801\uC73C\uB85C \uBB38\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uC2DC\uACC4\uC758 \uC704\uCE58\uB97C \uC62E\uAE34\uB2E4\uBA74 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD558\uC5EC \uBB38\uC81C\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC804\uD558\uB294 \uC774\uBBF8\uC9C0\uB97C \uADF8\uB9B4\uB824\uBA74 \uC2DC\uAC04\uC774 \uC624\uB798 \uAC78\uB9AC\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC624\uB978\uCABD\uC5D0 \uC2A4\uD06C\uB864 \uB9AC\uC2A4\uD2B8\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC22B\uC790 \uBAA9\uB85D\uC744 \uC704\uC544\uB798\uB85C \uC6C0\uC9C1\uC77C \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uBC18\uC751\uD558\uB824\uBA74 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uB192\uC544\uC57C \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774\uB54C\uB294 \uC2A4\uD06C\uB864 \uB9AC\uC2A4\uD2B8 \uC694\uC18C\uC758 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uACE0\uB824\uD558\uAC70\uB098 \uC2A4\uD06C\uB864 \uB9AC\uC2A4\uD2B8\uC758 \uD06C\uAE30\uB97C \uC904\uC5EC\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "optimize-performance-by-invalidating-content"
  }), `Optimize Performance by Invalidating Content`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Normally the entire widget is invalidated, but the graphics engine has the ability to only invalidate the content of a widget, instead of the entire widget. By reducing the area to invalidate, the render time will often be noticeably shorter. The improvement in render time depends on:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `The size of the area covered by the widget content relative to the size of the entire widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `The background widget(s) partly or fully covered by the widget.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The following figures illustrates the concept of invalidating content, by using the TextArea widget as example. Figure 1 shows the entire area of the widget. Figure 2 shows the invalidated area when using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidate()`), `. Figure 3 shows the invalidated area when using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidateContent()`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/text-area-expanded-across-screen.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Figure 1. TextArea spanning across the entire screen width"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/invalidate-example.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Figure 2. Invalidated area (red) when using TextArea::invalidate()"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/invalidate-content-example.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Figure 3. Invalidated area (green) when using TextArea::invalidateContent()"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "example-using-textareainvalidatecontent"
  }), `Example using TextArea::invalidateContent()`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `In cases where the widget is overlapping other widgets, these other widgets will need to be redrawn when the entire TextArea is invalidated using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidate()`), `. By using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidateContent()`), ` instead, we minimize the risk of unnecessary invalidating and redrawing widgets. This is especially true for expensive widgets, e.g. Circle, Gauge, etc.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The figure below illustrates how we avoid invalidating a background widget (Image - ST logo) using `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidateContent()`), `. The background widget would have been invalidated and redrawn if we used `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TextArea::invalidate()`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/performance/invalidate-content-improvement-example.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "Example using TextArea::invalidateContent()"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "tips-to-get-good-performance"
  }), `\uC88B\uC740 \uC131\uB2A5\uC744 \uB2EC\uC131\uD558\uB294 \uD301`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC744 \uB9C8\uCE58\uBA74\uC11C \uC88B\uC740 \uC131\uB2A5\uC744 \uC5BB\uAE30 \uC704\uD55C \uD301\uC744 \uAC04\uB7B5\uD788 \uC54C\uB824\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `Do not redraw unchanged things`), ` Make sure that you do not accidentally invalidate unnecessary parts of the display. This reduces the performance without any benefit.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uD488\uC9C8\uACFC \uC18D\uB3C4\uC758 \uADE0\uD615\uC810\uC744 \uCC3E\uC73C\uC2ED\uC2DC\uC624`), `. \uC694\uC18C\uC758 \uBCF5\uC7A1\uC131\uC744 \uC904\uC774\uBA74 \uC131\uB2A5\uC774 \uAC1C\uC120\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 \uBCF5\uC7A1\uC131\uACFC \uC131\uB2A5\uC758 \uADE0\uD615\uC744 \uC720\uC9C0\uD558\uB294 \uAC83\uC774 \uAD00\uAC74\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uD558\uB4DC\uC6E8\uC5B4 \uAE30\uB2A5\uC744 \uC774\uC6A9\uD558\uC2ED\uC2DC\uC624`), `. \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uAE30\uB2A5(Chrom-ART)\uC744 \uC9C0\uC6D0\uD558\uB294 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uAC00 \uADF8\uB807\uC9C0 \uC54A\uC740 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uBCF4\uB2E4 \uC131\uB2A5\uC774 \uB354 \uB192\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C Chrom-ART\uAC00 \uD3EC\uD568\uB41C \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uACC4\uC0B0\uB41C \uADF8\uB798\uD53D\uC744 \uC774\uBBF8\uC9C0\uB85C \uBCC0\uACBD\uD558\uC2ED\uC2DC\uC624`), `. \uACC4\uC0B0\uB41C \uC6D0\uC740 \uC6D0 \uC774\uBBF8\uC9C0\uBCF4\uB2E4 \uC131\uB2A5\uC774 \uB290\uB9BD\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uC774\uBBF8\uC9C0\uB294 \uB300\uBD80\uBD84\uC758 \uC815\uC801 \uC694\uC18C\uB97C \uB300\uC2E0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uB514\uC2A4\uD50C\uB808\uC774\uC758 \uB9AC\uD504\uB808\uC2DC \uBE44\uC728\uC744 \uC870\uC815\uD558\uC2ED\uC2DC\uC624`), `. \uC774 \uC139\uC158\uC758 \uC11C\uB450\uC5D0\uC11C \uC598\uAE30\uD588\uB2E4\uC2DC\uD53C \uB9AC\uD504\uB808\uC2DC \uBE44\uC728\uC740 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC758 \uCD5C\uB300 \uD55C\uACC4\uC785\uB2C8\uB2E4. \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uB9AC\uD504\uB808\uC2DC \uBE44\uC728\uC744 \uCD08\uACFC\uD558\uBA74 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uB5A8\uC5B4\uC9C0\uAC8C \uB429\uB2C8\uB2E4. \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uB9AC\uD504\uB808\uC2DC \uBE44\uC728\uC744 \uC57D\uAC04 \uCD08\uACFC\uD55C\uB2E4\uBA74 \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uB9AC\uD504\uB808\uC2DC \uBE44\uC728\uC744 \uC608\uB97C \uB4E4\uC5B4 55Hz(18.2ms\uC5D0 \uD574\uB2F9)\uB85C \uB0AE\uCDB0 \uD504\uB808\uC784 \uC18D\uB3C4\uB97C \uB192\uAC8C \uC720\uC9C0\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);