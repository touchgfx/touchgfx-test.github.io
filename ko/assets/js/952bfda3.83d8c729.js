"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9561],{

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

/***/ 51214:
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
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
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
  id: "graphics-engine",
  title: "\uADF8\uB798\uD53D \uC5D4\uC9C4"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/graphics-engine",
  "id": "basic-concepts/graphics-engine",
  "title": "\uADF8\uB798\uD53D \uC5D4\uC9C4",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/graphics-engine.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/graphics-engine",
  "permalink": "/4.20/ko/docs/basic-concepts/graphics-engine",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "graphics-engine",
    "title": "\uADF8\uB798\uD53D \uC5D4\uC9C4"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD504\uB808\uC784\uBC84\uD37C",
    "permalink": "/4.20/ko/docs/basic-concepts/framebuffer"
  },
  "next": {
    "title": "\uBA54\uC778 \uB8E8\uD504",
    "permalink": "/4.20/ko/docs/basic-concepts/rendering"
  }
};
const assets = {};



const toc = [{
  value: "\uC7A5\uBA74 \uBAA8\uB378",
  id: "scene-model",
  level: 2
}, {
  value: "\uBAA8\uB378 \uC870\uC791",
  id: "manipulate-the-model",
  level: 2
}, {
  value: "\uADF8\uB9AC\uAE30 \uBA85\uB839 \uC2E4\uD589",
  id: "issue-drawing-commands",
  level: 2
}, {
  value: "\uBA54\uC778 \uB8E8\uD504",
  id: "main-loop",
  level: 2
}, {
  value: "\uD50C\uB7AB\uD3FC \uC801\uC751 \uB2A5\uB825",
  id: "platform-adaptibility",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uADF8\uB798\uD53D \uC5D4\uC9C4\uC758 \uC8FC\uB41C \uC5ED\uD560\uC740 \uB0B4\uC7A5\uB41C \uC7A5\uCE58\uC758 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uADF8\uB798\uD53D\uC744 \uB4DC\uB85C\uC789\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0 \uB300\uD55C \uC18C\uAC1C\uC640 \uB354\uBD88\uC5B4 \uC774\uB7EC\uD55C \uBC29\uC2DD\uC744 \uC774\uC6A9\uD558\uB294 \uC774\uC720\uC5D0 \uB300\uD574 \uC54C\uC544\uBD05\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "scene-model"
  }), `\uC7A5\uBA74 \uBAA8\uB378`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uD06C\uAC8C \uB450 \uAC00\uC9C0 \uBC94\uC8FC\uB85C \uB098\uB269\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC989\uC2DC \uBAA8\uB4DC \uADF8\uB798\uD53D \uC5D4\uC9C4`), `\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uADF8\uB798\uD53D\uC744 \uBC14\uB85C \uB4DC\uB85C\uC789\uD560 \uC218 \uC788\uB294 API\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC744 \uC801\uC2DC\uC5D0 \uD638\uCD9C\uD558\uB294 \uAC83\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB2EC\uB824 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC720\uC9C0 \uBAA8\uB4DC \uADF8\uB798\uD53D \uC5D4\uC9C4`), `\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD45C\uC2DC\uB418\uB294 \uADF8\uB798\uD53D \uAD6C\uC131\uC694\uC18C\uC758 \uCD94\uC0C1\uC801 \uBAA8\uB378\uC744 \uC870\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5D4\uC9C4\uC740 \uC774 \uADF8\uB798\uD53D \uAD6C\uC131\uC694\uC18C \uBAA8\uB378\uC744 \uC815\uD655\uD55C \uADF8\uB798\uD53D \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC73C\uB85C \uC801\uC2DC\uC5D0 \uBCC0\uD658\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC720\uC9C0 \uBAA8\uB4DC \uADF8\uB798\uD53D \uC6D0\uB9AC\uB97C \uB530\uB985\uB2C8\uB2E4. \uC989, TouchGFX\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC870\uC791\uD560 \uC218 \uC788\uB294 \uBAA8\uB378\uC744 \uC81C\uACF5\uD558\uACE0, \uC774\uD6C4 \uC870\uC791\uB41C \uBAA8\uB378\uC744 \uCD5C\uC801\uC758 \uB80C\uB354\uB9C1 \uBA54\uC18C\uB4DC \uD638\uCD9C\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/retained-mode-graphics2.svg",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "\uC720\uC9C0 \uBAA8\uB4DC \uADF8\uB798\uD53D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uAC00 \uC720\uC9C0 \uBAA8\uB4DC\uB85C \uC2E4\uD589\uB418\uB294 \uB370 \uB530\uB978 \uC774\uC810\uC5D0\uB294 \uC5EC\uB7EC \uAC00\uC9C0\uAC00 \uC788\uB294\uB370, \uB300\uD45C\uC801\uC778 \uC774\uC810\uC744 \uC608\uB85C \uB4E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC0AC\uC6A9 \uC6A9\uC774\uC131:`), ` \uC720\uC9C0 \uBAA8\uB4DC \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uC0AC\uC6A9\uC774 \uC27D\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uB0B4\uBD80 \uBAA8\uB378\uC5D0 \uB300\uD55C \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uC5EC \uAD6C\uC131\uC694\uC18C\uC758 \uC2A4\uD06C\uB9B0 \uAD6C\uC131 \uBB38\uC81C\uB97C \uD574\uACB0\uD560 \uBFD0, \uC2E4\uC81C \uADF8\uB9AC\uAE30 \uC5F0\uC0B0\uC5D0 \uB300\uD574\uC11C\uB294 \uC2E0\uACBD \uC4F8 \uD544\uC694 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC131\uB2A5:`), ` TouchGFX\uB294 \uC7A5\uBA74 \uBAA8\uB378\uC744 \uBD84\uC11D\uD558\uC5EC \uBAA8\uB378\uC744 \uC2A4\uD06C\uB9B0\uC5D0 \uADF8\uB9B4 \uB54C \uD544\uC694\uD55C \uD638\uCD9C\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. \uC774\uB54C \uC228\uC740 \uAD6C\uC131\uC694\uC18C\uB294 \uC758\uB3C4\uC801\uC73C\uB85C \uADF8\uB9AC\uC9C0 \uC54A\uC73C\uBA70, \uAD6C\uC131\uC694\uC18C\uC5D0\uC11C \uBC14\uB010 \uBD80\uBD84\uB9CC \uADF8\uB824\uC11C \uC804\uC1A1\uD558\uAC70\uB098, \uD504\uB808\uC784\uBC84\uD37C\uB97C \uAD00\uB9AC\uD558\uB294 \uC791\uC5C5 \uB4F1\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC0C1\uD0DC \uAD00\uB9AC:`), ` TouchGFX\uB294 \uC7A5\uBA74 \uBAA8\uB378\uC5D0\uC11C \uD65C\uC131\uD654\uB41C \uBD80\uBD84\uC744 \uCD94\uC801\uD569\uB2C8\uB2E4. \uB355\uBD84\uC5D0 \uC0AC\uC6A9\uC790\uB294 \uC7A5\uBA74 \uBAA8\uB378 \uB0B4\uC6A9\uC744 \uB354\uC6B1 \uC27D\uAC8C \uCD5C\uC801\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uAC00 \uC720\uC9C0 \uBAA8\uB4DC \uADF8\uB798\uD53D \uAE30\uBC95\uC744 \uB530\uB97C \uB54C \uBC1C\uC0DD\uD558\uB294 \uC8FC\uB41C \uB2E8\uC810\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uBA54\uBAA8\uB9AC \uC0AC\uC6A9:`), ` \uC7A5\uBA74 \uBAA8\uB378\uC744 \uB098\uD0C0\uB0B4\uBA74 \uBA54\uBAA8\uB9AC\uB97C \uCC28\uC9C0\uD558\uAC8C \uB429\uB2C8\uB2E4. TouchGFX\uB294 \uC7A5\uBA74 \uBAA8\uB378\uC744 \uBD84\uC11D\uD558\uC5EC \uD574\uB2F9\uD558\uB294 \uB80C\uB354\uB9C1 \uC791\uC5C5\uC744 \uCD5C\uC801\uD654\uD568\uC73C\uB85C\uC368 \uCD08\uB2F9 60\uD504\uB808\uC784\uC73C\uB85C \uB80C\uB354\uB9C1\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4. \uC9C0\uAE08\uAE4C\uC9C0 TouchGFX\uC758 \uC7A5\uBA74 \uBAA8\uB378\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uBA54\uBAA8\uB9AC \uC6A9\uB7C9\uC744 \uC904\uC774\uAE30 \uC704\uD574 \uB9CE\uC740 \uB178\uB825\uC774 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC7A5\uBA74 \uBAA8\uB378\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uBA54\uBAA8\uB9AC\uC758 \uC6A9\uB7C9\uC740 1\uD0AC\uB85C\uBC14\uC774\uD2B8\uC5D0 \uD6E8\uC52C \uBABB \uBBF8\uCE69\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "manipulate-the-model"
  }), `\uBAA8\uB378 \uC870\uC791`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC7A5\uBA74 \uBAA8\uB378\uC740 \uC5EC\uB7EC \uAC00\uC9C0 \uC694\uC18C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/scene-model.svg",
    noShadow: "true",
    width: 280,
    mdxType: "Figure"
  }, "\uC704\uC82F \uD2B8\uB9AC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB378\uC758 \uAC01 \uAD6C\uC131\uC694\uC18C\uB294 \uC5F0\uACB0\uB41C \uBD80\uBAA8 \uAD6C\uC131\uC694\uC18C\uAC00 1\uAC1C\uC529 \uC788\uC2B5\uB2C8\uB2E4. \uBD80\uBAA8 \uAD6C\uC131\uC694\uC18C \uC5ED\uC2DC \uC7A5\uBA74 \uBAA8\uB378\uC758 \uC77C\uBD80\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBAA8\uB378\uC744 \uC77C\uBC18\uC801\uC73C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Tree_(data_structure)"
  }), `\uD2B8\uB9AC`), `\uB77C\uACE0 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC73C\uB85C \uC774\uB7EC\uD55C \uD2B8\uB9AC \uAD6C\uC131\uC694\uC18C\uB97C UI \uAD6C\uC131\uC694\uC18C \uB0B4\uC9C0\uB294 \uC704\uC82F\uC774\uB77C\uACE0 \uCE6D\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAD00\uC810\uC5D0\uC11C \uBD24\uC744 \uB54C, \uD45C\uC2DC\uB418\uB294 \uADF8\uB798\uD53D\uC740 \uC7A5\uBA74 \uBAA8\uB378\uC758 \uC704\uC82F\uC744 \uC124\uC815\uD558\uAC70\uB098 \uC870\uC791\uD588\uC744 \uB54C \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC704\uCE58\uC640 \uC774\uBBF8\uC9C0\uB97C \uC124\uC815\uD558\uC5EC \uBC84\uD2BC\uC744 \uC7A5\uBA74 \uBAA8\uB378\uC5D0 \uCD94\uAC00\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `myButton.setXY(100,50);
myButton.setBitmaps(Bitmap(BITMAP_BUTTON_RELEASED_ID), Bitmap(BITMAP_BUTTON_PRESSED_ID));
add(myButton);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "issue-drawing-commands"
  }), `\uADF8\uB9AC\uAE30 \uBA85\uB839 \uC2E4\uD589`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uACB0\uACFC\uC801\uC73C\uB85C TouchGFX\uB294 \uC7A5\uBA74 \uBAA8\uB378\uC744 \uB80C\uB354\uB9C1\uD560 \uB54C \uADF8\uB9AC\uAE30 API\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4. \uADF8\uB9AC\uAE30 API\uC5D0\uB294 \uBC15\uC2A4, \uC774\uBBF8\uC9C0, \uD14D\uC2A4\uD2B8, \uC120, \uB2E4\uAC01\uD615, \uD14D\uC2A4\uCC98 \uC0BC\uAC01\uD615 \uB4F1 \uADF8\uB798\uD53D \uD504\uB9AC\uBBF8\uD2F0\uBE0C\uB97C \uADF8\uB9B4 \uB54C \uD544\uC694\uD55C \uBA54\uC18C\uB4DC\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 TouchGFX\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/buttons/button",
    mdxType: "Link"
  }, `\uBC84\uD2BC`), ` \uC704\uC82F\uC740 \uB80C\uB354\uB9C1 \uC2DC \uC774\uBBF8\uC9C0 \uADF8\uB9AC\uAE30 \uC704\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap",
    mdxType: "Link"
  }, `drawPartialBitmap \uBA54\uC18C\uB4DC`), `\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C \uBC84\uD2BC \uC704\uC82F\uC744 \uADF8\uB9B4 \uB54C \uC0AC\uC6A9\uB418\uB294 \uC18C\uC2A4 \uCF54\uB4DC\uB294 \uC544\uB798\uC640 \uC720\uC0AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "touchgfx/widgets/button.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Button::draw(const Rect& invalidatedArea) const
{
    // calculate the part of the bitmap to draw
    api.drawPartialBitmap(bitmap, x, y, part, alpha);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "em"
  }, `touchgfx/widgets/button.cpp`), `\uC5D0\uC11C \uC2E4\uC81C \uC18C\uC2A4\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uB294 \uCD5C\uC801\uD654\uB41C \uADF8\uB9AC\uAE30 API \uAD6C\uD604\uCCB4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap",
    mdxType: "Link"
  }, `drawPartialBitmap`), ` \uC778\uC2A4\uD134\uC2A4 \uBA54\uC18C\uB4DC\uB294 \uBE44\uD2B8\uB9F5 \uADF8\uB9AC\uAE30\uB97C \uC704\uD574 \uAE30\uBC18 \uD558\uB4DC\uC6E8\uC5B4(\uAC00\uB2A5\uD55C \uACBD\uC6B0 Chrom-ART)\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uC0C8\uB85C\uC6B4 \uC720\uD615\uC758 \uC704\uC82F\uC744 \uCD94\uAC00\uD558\uC5EC \uC7A5\uBA74 \uBAA8\uB378\uC744 \uD655\uC7A5\uD560 \uB54C\uB294 \uC774\uB7EC\uD55C API \uADF8\uB9AC\uAE30 \uBA54\uC18C\uB4DC\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/custom-widgets",
    mdxType: "Link"
  }, `\uCEE4\uC2A4\uD140 \uC704\uC82F`), `\uC744 \uB9CC\uB4DC\uB294 \uBC29\uBC95\uC740 \uD574\uB2F9 \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB9AC\uAE30 API \uBA54\uC18C\uB4DC\uC758 \uAD6C\uD604\uCCB4\uB294 \uD50C\uB7AB\uD3FC\uC5D0 \uB530\uB77C \uB2E4\uB974\uBA70, \uD2B9\uC815 MCU\uC5D0 \uCD5C\uC801\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "main-loop"
  }), `\uBA54\uC778 \uB8E8\uD504`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC218\uC758 \uAC8C\uC784 \uC5D4\uC9C4\uACFC \uADF8\uB798\uD53D \uC5D4\uC9C4\uC744 \uBE44\uB86F\uD574 \uD2B9\uD788 TouchGFX\uC758 \uC791\uC5C5 \uBC29\uC2DD\uC740 \uBB34\uD55C \uB8E8\uD504\uB77C\uACE0 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC758 \uBA54\uC778 \uB8E8\uD504\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC138 \uAC00\uC9C0 \uC8FC\uC694 \uC791\uC5C5\uC73C\uB85C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC774\uBCA4\uD2B8 \uC218\uC9D1:`), ` \uD130\uCE58 \uC2A4\uD06C\uB9B0, \uBB3C\uB9AC\uC801 \uBC84\uD2BC \uB204\uB984, \uBC31\uC5D4\uB4DC \uC2DC\uC2A4\uD15C\uC758 \uBA54\uC2DC\uC9C0 \uB4F1\uC5D0\uC11C \uC774\uBCA4\uD2B8\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC7A5\uBA74 \uBAA8\uB378 \uC5C5\uB370\uC774\uD2B8:`), ` \uC218\uC9D1\uB41C \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD574 \uBAA8\uB378\uC758 \uC704\uCE58\uC640 \uC560\uB2C8\uBA54\uC774\uC158, \uC0C9\uC0C1, \uC774\uBBF8\uC9C0 \uB4F1\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uC5EC \uBC18\uC751\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC7A5\uBA74 \uBAA8\uB378 \uB80C\uB354\uB9C1:`), ` \uBAA8\uB378\uC5D0\uC11C \uC5C5\uB370\uC774\uD2B8\uB41C \uBD80\uBD84\uC744 \uB2E4\uC2DC \uB4DC\uB85C\uC789\uD558\uC5EC \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD45C\uC2DC\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uC778 \uB8E8\uD504\uB97C \uB3C4\uD45C\uB85C \uB098\uD0C0\uB0B4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/engine-cycle.png",
    noShadow: "true",
    width: 320,
    mdxType: "Figure"
  }, "\uBA54\uC778 \uB8E8\uD504"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA54\uC778 \uB8E8\uD504\uAC00 \uC2E4\uD589\uB420 \uB54C\uB9C8\uB2E4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD55C \uBC88\uC529 \uC2E4\uD589\uB41C\uB2E4\uACE0 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "platform-adaptibility"
  }), `\uD50C\uB7AB\uD3FC \uC801\uC751 \uB2A5\uB825`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 STM32\uC5D0 \uC0BD\uC785\uB418\uB294 \uBAA8\uB4E0 \uAD6C\uC131\uC5D0\uC11C \uC2E4\uD589\uB418\uB3C4\uB85D \uC124\uACC4\uB418\uC5C8\uAE30 \uB54C\uBB38\uC5D0 \uC704\uC5D0\uC11C \uC5B8\uAE09\uD55C \uC791\uC5C5\uB4E4\uB3C4 \uB9DE\uCDA4 \uC124\uC815\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uBCA4\uD2B8 \uC218\uC9D1\uC740 \uC804\uB2F4 \uCD94\uC0C1\uD654 \uACC4\uCE35\uC5D0\uC11C \uCC98\uB9AC\uB429\uB2C8\uB2E4. \uCD94\uC0C1\uD654 \uACC4\uCE35\uC5D0 \uB300\uD55C \uB9DE\uCDA4 \uC124\uC815\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/touchgfx-hal-development/touchgfx-al-development-introduction",
    mdxType: "Link"
  }, `TouchGFX AL \uAC1C\uBC1C`), ` \uC139\uC158\uC5D0 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBAA8\uB378 \uC5C5\uB370\uC774\uD2B8\uB294 \uC804\uC801\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB2EC\uB824 \uC788\uC2B5\uB2C8\uB2E4. \uC5C5\uB370\uC774\uD2B8 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-development-introduction",
    mdxType: "Link"
  }, `UI \uAC1C\uBC1C`), ` \uC139\uC158\uC5D0 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uB300\uD55C \uADF8\uB798\uD53D \uB80C\uB354\uB9C1\uC740 TouchGFX\uC5D0\uC11C \uCC98\uB9AC\uD558\uBA70, \uC77C\uBC18\uC801\uC73C\uB85C \uB9DE\uCDA4 \uC124\uC815\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uC758 \uD53D\uC140\uC744 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD558\uB294 \uC791\uC5C5\uC740 \uD50C\uB7AB\uD3FC\uC5D0 \uB530\uB77C \uB2E4\uB985\uB2C8\uB2E4. \uD50C\uB7AB\uD3FC\uC5D0 \uB530\uB77C \uB9DE\uCDA4 \uC124\uC815\uD558\uB294 \uBC29\uBC95\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/board-bring-up/board-introduction"
  }), `\uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "li"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `TouchGFX AL \uAC1C\uBC1C`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC139\uC158\uC5D0\uC11C TouchGFX\uC758 \uBA54\uC778 \uB8E8\uD504\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC2ED\uC2DC\uC624.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);