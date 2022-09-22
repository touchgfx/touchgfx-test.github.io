"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[2813],{

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

/***/ 11432:
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
  id: "rendering",
  title: "\uBA54\uC778 \uB8E8\uD504"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "basic-concepts/rendering",
  "id": "basic-concepts/rendering",
  "title": "\uBA54\uC778 \uB8E8\uD504",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/rendering.mdx",
  "sourceDirName": "basic-concepts",
  "slug": "/basic-concepts/rendering",
  "permalink": "/4.20/ko/docs/basic-concepts/rendering",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "rendering",
    "title": "\uBA54\uC778 \uB8E8\uD504"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uADF8\uB798\uD53D \uC5D4\uC9C4",
    "permalink": "/4.20/ko/docs/basic-concepts/graphics-engine"
  },
  "next": {
    "title": "\uC131\uB2A5",
    "permalink": "/4.20/ko/docs/basic-concepts/performance"
  }
};
const assets = {};


const toc = [{
  value: "\uC218\uC9D1",
  id: "collect",
  level: 2
}, {
  value: "\uC5C5\uB370\uC774\uD2B8",
  id: "update",
  level: 2
}, {
  value: "\uC2DC\uAC04 \uAE30\uBC18 \uC5C5\uB370\uC774\uD2B8",
  id: "time-based-updates",
  level: 3
}, {
  value: "\uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC694\uCCAD",
  id: "requesting-a-redraw",
  level: 3
}, {
  value: "\uB80C\uB354\uB9C1",
  id: "render",
  level: 2
}, {
  value: "\uC218\uC2E0 \uB300\uAE30",
  id: "wait",
  level: 2
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C \uCC98\uB9AC",
  id: "handling-the-framebuffers",
  level: 2
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C\uAC00 2\uAC1C\uC77C \uB54C",
  id: "two-framebuffers",
  level: 3
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C\uAC00 1\uAC1C\uC77C \uB54C",
  id: "one-framebuffer",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX \uADF8\uB798\uD53D \uC5D4\uC9C4\uC758 \uC791\uB3D9 \uBC29\uC2DD, \uD2B9\uD788 \uBA54\uC778 \uB8E8\uD504\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uC804\uC5D0\uB3C4 \uC5B8\uAE09\uD588\uC9C0\uB9CC \uADF8\uB798\uD53D \uC5D4\uC9C4\uC758 \uC8FC\uB41C \uC5ED\uD560\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uADF8\uB798\uD53D(UI \uBAA8\uB378)\uC744 \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C \uB80C\uB354\uB9C1\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB80C\uB354\uB9C1 \uD504\uB85C\uC138\uC2A4\uAC00 \uBC18\uBCF5\uB418\uBA74\uC11C \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC774 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle.png",
    noShadow: "true",
    width: 320,
    mdxType: "Figure"
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uB514\uC2A4\uD50C\uB808\uC774 \uD130\uCE58\uB098 \uBC84\uD2BC \uB204\uB984\uACFC \uAC19\uC740 \uC678\uBD80 \uC774\uBCA4\uD2B8\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC218\uC9D1`), `\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uC218\uC9D1\uB41C \uC774\uBCA4\uD2B8\uB294 \uD544\uD130\uB9C1\uC744 \uAC70\uCCD0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC804\uC1A1\uB41C \uC774\uBCA4\uD2B8\uB97C \uC0AC\uC6A9\uD574 UI \uBAA8\uB378\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74  \uC0AC\uC6A9\uC790\uAC00 \uBC84\uD2BC \uC704\uB85C \uD654\uBA74\uC744 \uD130\uCE58\uD560 \uB54C \uBC84\uD2BC\uC774 \uB204\uB984 \uC0C1\uD0DC\uB85C \uBC14\uB00C\uACE0, \uB098\uC911\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uD654\uBA74\uC744 \uB354\uB294 \uD130\uCE58\uD558\uC9C0 \uC54A\uC744 \uB54C \uB2E4\uC2DC \uD574\uC81C \uC0C1\uD0DC\uB85C \uBC14\uB00C\uB294 \uAC83\uC774 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC5C5\uB370\uC774\uD2B8\uB41C \uBAA8\uB378\uC744 \uD504\uB808\uC784\uBC84\uD37C\uB85C \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD504\uB85C\uC138\uC2A4\uAC00 \uACC4\uC18D \uBC18\uBCF5\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784 \uB80C\uB354\uB9C1\uC774 \uB05D\uB098\uACE0 \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uB418\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uADF8\uB798\uD53D\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uC758 \uADF8\uB798\uD53D\uC774 \uAE68\uC9C0\uB294 \uAE00\uB9AC\uCE58(glitch) \uD604\uC0C1\uC744 \uBC29\uC9C0\uD558\uB824\uBA74 \uB514\uC2A4\uD50C\uB808\uC774\uB85C\uC758 \uC804\uC1A1\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uB3D9\uAE30\uD654\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. For some displays the transfers must happen regularly with a minimum time interval. \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC2E0\uD638\uB97C \uBCF4\uB0B4\uBA74 \uBC18\uB4DC\uC2DC \uC804\uC1A1\uC774 \uC77C\uC5B4\uB098\uC57C \uD558\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The graphics engine implements this synchronization by waiting for a "go" signal from the hardware abstraction layer. \uD558\uB4DC\uC6E8\uC5B4 \uCD94\uC0C1\uD654 \uACC4\uCE35\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/touchgfx-hal-development/touchgfx-al-development-introduction"
  }), `\uC5EC\uAE30`), `\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uADF8\uB798\uD53D \uC5D4\uC9C4 \uB0B4\uBD80\uC758 \uBA54\uC778 \uB8E8\uD504\uB97C \uC758\uC0AC \uCF54\uB4DC\uB85C \uBCF4\uBA74 \uB2E4\uC74C\uACFC \uBE44\uC2B7\uD55C \uBAA8\uC2B5\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `while(true) {
    collect();    // Collect events from outside
    update();     // Update the application ui model
    render();     // Render new updated graphics to the framebuffer
    wait();       // Wait for 'go' from display
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2E4\uC81C \uAD6C\uD604\uCCB4\uC5D0\uC11C\uB294 \uCF54\uB4DC\uAC00 \uB354 \uB9CE\uC73C\uBA70, \uC704\uC758 \uC758\uC0AC \uCF54\uB4DC\uB294 \uC5D4\uC9C4\uC758 \uC8FC\uC694 \uBD80\uD488\uC5D0 \uB300\uD55C \uC774\uD574\uB97C \uB3D5\uAE30 \uC704\uD55C \uAC83\uC77C \uBFD0\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC704\uC758 4\uB2E8\uACC4\uC5D0 \uB300\uD574 \uB354 \uC790\uC138\uD788 \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "collect"
  }), `\uC218\uC9D1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC218\uC9D1 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC678\uBD80 \uD658\uACBD\uC758 \uC774\uBCA4\uD2B8\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4. \uC8FC\uB85C \uD130\uCE58 \uC774\uBCA4\uD2B8\uC640 \uBC84\uD2BC\uC774 \uC218\uC9D1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uC218\uC9D1\uB41C \uC774\uBCA4\uD2B8\uB97C \uC0D8\uD50C\uB9C1\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4. \uC6D0\uC2DC \uD130\uCE58 \uC774\uBCA4\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC880 \uB354 \uAD6C\uCCB4\uC801\uC778 \uD130\uCE58 \uC774\uBCA4\uD2B8\uB85C \uBCC0\uD658\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uD074\uB9AD:`), ` \uC0AC\uC6A9\uC790\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC190\uAC00\uB77D\uC73C\uB85C \uB20C\uB800\uAC70\uB098 \uB5BC\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uB4DC\uB798\uADF8:`), ` \uC0AC\uC6A9\uC790\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uD130\uCE58\uD55C \uC0C1\uD0DC\uC5D0\uC11C \uC190\uAC00\uB77D\uC744 \uC6C0\uC9C1\uC600\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC81C\uC2A4\uCC98:`), ` \uC0AC\uC6A9\uC790\uAC00 \uC190\uAC00\uB77D\uC744 \uD55C \uBC29\uD5A5\uC73C\uB85C \uBE60\uB974\uAC8C \uC6C0\uC9C1\uC600\uB2E4\uAC00 \uB5BC\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC81C\uC2A4\uCC98\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `\uC2A4\uC640\uC774\uD504`), `\uB77C\uACE0 \uD558\uBA70, \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uC11C \uC778\uC2DD\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC774\uBCA4\uD2B8\uB294 \uD604\uC7AC \uD65C\uC131\uD654\uB41C UI \uC694\uC18C(\uC704\uC82F \uB4F1)\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB54C \uC5D4\uC9C4\uC774 \uC2E4\uD589`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `(tick)`), ` \uC774\uBCA4\uD2B8\uB3C4 \uC804\uC1A1\uD569\uB2C8\uB2E4. \uC774 \uC774\uBCA4\uD2B8\uB294 \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784(\uB610\uB294 \uC2DC\uAC04 \uC21C\uC11C\uC5D0 \uB530\uB978 \uB2E8\uACC4)\uC744 \uC758\uBBF8\uD558\uBA70, \uB2E4\uB978 \uC678\uBD80 \uC785\uB825\uC774 \uC5C6\uB2E4\uB294 \uAC00\uC815 \uD558\uC5D0 \uD56D\uC0C1 \uC804\uC1A1\uB429\uB2C8\uB2E4. This event is used by applications to drive animations, or other time-based actions like changing to a pause screen after a specific time has elapsed.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "update"
  }), `\uC5C5\uB370\uC774\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5C5\uB370\uC774\uD2B8 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uD568\uAED8 \uC218\uC9D1\uB41C \uC774\uBCA4\uD2B8\uB97C \uBC18\uC601\uD558\uC5EC UI\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uD604\uC7AC \uD65C\uC131\uD654\uB41C \uC2A4\uD06C\uB9B0\uC744 \uC778\uC2DD\uD558\uC5EC \uC774\uBCA4\uD2B8\uB97C \uD574\uB2F9 \uAC1D\uCCB4\uB85C \uC804\uB2EC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAE30\uBCF8\uC801\uC778 \uC6D0\uB9AC\uB294 \uC774\uB807\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uC5D4\uC9C4\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158(UI \uBAA8\uB378\uC758 \uC2A4\uD06C\uB9B0 \uB610\uB294 \uC704\uC82F \uAC1D\uCCB4)\uC5D0\uAC8C \uC774\uBCA4\uD2B8 \uC815\uBCF4\uB97C \uC54C\uB9BD\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uD2B9\uC815 \uC694\uC18C\uB97C \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uC694\uCCAD\uD569\uB2C8\uB2E4. The application does not draw directly as response to the events, it changes the properties of Widgets and requests a redraw of the Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `If for example a Click event occurs, the graphics engine searches the scene model of the Screen object to find the Widget that should receive the event (the topmost widget below the touch point). Some Widgets like Image and TextArea do not wish to receive Click events, so they are disregarded. They also have an empty event handler.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0 \uBC84\uD2BC\uACFC \uAC19\uC740 \uC704\uC82F\uC740 \uD074\uB9AD(\uB204\uB984 \uB610\uB294 \uD574\uC81C) \uC774\uBCA4\uD2B8\uC5D0 \uBC18\uC751\uD569\uB2C8\uB2E4. The Button widget, for example, changes its state to show another image when pressed, and changes the state back again when the touch is released again.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/button-on-image.png",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "\uC774\uBBF8\uC9C0 \uC704\uC82F\uC744 \uBC30\uACBD\uC73C\uB85C \uBC84\uD2BC \uC704\uC82F\uC774 \uC55E\uC5D0 \uD45C\uC2DC\uB41C \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC84\uD2BC\uACFC \uAC19\uC740 \uC704\uC82F\uC758 \uC0C1\uD0DC\uAC00 \uBC14\uB00C\uBA74 \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C\uB3C4 \uB2E4\uC2DC \uADF8\uB824\uC57C \uD569\uB2C8\uB2E4. \uB610\uD55C \uC704\uC82F\uC740 \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C \uC751\uB2F5\uC73C\uB85C \uC774\uB7EC\uD55C \uC0C1\uD0DC \uBCC0\uACBD\uC744 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uAC8C \uB2E4\uC2DC \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4. The graphics engine does not on its own redraw any Widgets based on the collected events. The Widgets keep track of their own internal state (for a Button, what image to draw), and instruct the graphics engine to redraw the part (a rectangle) of the display that is covered by the Widget.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC5ED\uC2DC \uC774\uBCA4\uD2B8\uC5D0 \uBC18\uC751\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uB2E4\uC74C \uC911 \uD55C \uAC00\uC9C0 \uBC29\uBC95\uC73C\uB85C \uBC18\uC751\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Designer\uC758 \uC704\uC82F\uC5D0 \uB300\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "strong"
  }, {
    "href": "../development/ui-development/designer-user-guide/interactions-view"
  }), `\uC778\uD130\uB799\uC158`), `\uC744 \uAD6C\uC131\uD569\uB2C8\uB2E4`), `. \uC608\uB97C \uB4E4\uC5B4 \uBC84\uD2BC\uC744 \uB20C\uB800\uC744 \uB54C \uB2E4\uB978 \uC704\uC82F\uC774 \uD45C\uC2DC\uB418\uB3C4\uB85D \uC778\uD130\uB799\uC158\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC778\uD130\uB799\uC158\uC740 \uBC84\uD2BC \uC704\uC82F\uC774 \uC0C1\uD0DC\uAC00 \uBC14\uB00C\uC5B4 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uAC8C \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uB77C\uACE0 \uC694\uCCAD\uD588\uC744 \uB54C \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC778\uD130\uB799\uC158\uC744 \uC0AC\uC6A9\uD574 \uB2E4\uB978(\uBCF4\uC774\uC9C0 \uC54A\uB294) \uC704\uC82F\uC744 \uD45C\uC2DC\uD560 \uACBD\uC6B0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uB3C4 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uAC8C \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uB3C4\uB85D \uC694\uCCAD\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `\uC2A4\uD06C\uB9B0\uC5D0\uC11C \uC774\uBCA4\uD2B8\uC5D0 \uBC18\uC751\uD569\uB2C8\uB2E4`), `. \uC2A4\uD06C\uB9B0 \uC790\uCCB4\uC5D0\uC11C\uB3C4 \uC774\uBCA4\uD2B8\uC5D0 \uBC18\uC751\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. The event handlers are virtual functions on the Screen class (see list below). \uC774\uB7EC\uD55C \uD568\uC218\uB4E4\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uB2E4\uC2DC \uAD6C\uD604\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. This can e.g. be used to perform an action whenever the user touches the screen (no matter where if the touch is on a Widget).`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2A4\uD06C\uB9B0 \uD074\uB798\uC2A4\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB294 \uD574\uB2F9\uD558\uB294 \uC678\uBD80 \uC774\uBCA4\uD2B8\uAC00 \uC218\uC9D1\uB418\uC5C8\uC744 \uB54C \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uC11C \uD638\uCD9C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "framework/include/touchgfx/Screen.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `
virtual void handleClickEvent(const ClickEvent& event);

virtual void handleDragEvent(const DragEvent& event);

virtual void handleGestureEvent(const GestureEvent& event);

virtual void handleTickEvent();

virtual void handleKeyEvent(uint8_t key);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uC5D0\uB294 C++ \uCF54\uB4DC\uB97C \uBB34\uC5C7\uC774\uB4E0 \uC0BD\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC77C\uBD80 \uC704\uC82F\uC758 \uC0C1\uD0DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uAC70\uB098, \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC804\uC6A9 \uD568\uC218(\uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1)\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "time-based-updates"
  }), `\uC2DC\uAC04 \uAE30\uBC18 \uC5C5\uB370\uC774\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5B4\uB5A4 \uD504\uB808\uC784\uC774\uB4E0 handleTickEvent \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uAC00 \uD638\uCD9C\uB429\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC2DC\uAC04\uC744 \uAE30\uBC18\uC73C\uB85C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uB294 \uAC83\uB3C4 \uC774\uB7EC\uD55C \uD578\uB4E4\uB7EC\uAC00 \uD638\uCD9C\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uD55C \uC608\uB85C, 10\uCD08\uAC00 \uC9C0\uB0AC\uC744 \uB54C \uC704\uC82F\uC774 \uC11C\uC11C\uD788 \uC0AC\uB77C\uC9C0\uB294 \uACBD\uC6B0\uB97C \uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Assuming that we have 60 frames in a second (10 seconds is then 600 ticks), the code could look like:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void handleTickEvent()
{
    Screen1ViewBase::handleTickEvent();     // Call superclass eventhandler
    tickCounter += 1;
    if (tickCounter == 600)
    {
        myWidget.startFadeAnimation(0, 20); // Fade to 0 = invisible in 20 frames
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Model \uD074\uB798\uC2A4\uC5D0\uC11C\uB294 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB3C4 \uD638\uCD9C\uD569\uB2C8\uB2E4. \uC774 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uBA54\uC2DC\uC9C0 \uB300\uAE30\uC5F4\uC744 \uD655\uC778\uD558\uAC70\uB098 GPIO\uB97C \uC0D8\uD50C\uB9C1\uD558\uB294 \uB4F1 \uBC18\uBCF5\uC801\uC778 \uC561\uC158\uC744 \uC2E4\uD589\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Model::tick()
{
    bool b = sampleGPIO_Input1(); // Sample polled IO
    if (b)
    {
        ...
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The eventhandler on a specific Screen subclass is only called when that screen is the active screen. The eventhandler on the Model class is always called (independently of which Screen is active). This makes the Model eventhandler suitable for "application wide" logic.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "requesting-a-redraw"
  }), `\uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC694\uCCAD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uBC84\uD2BC \uC608\uC2DC\uC5D0\uC11C\uB3C4 \uC598\uAE30\uD588\uB4EF\uC774 \uC704\uC82F\uC740 \uC0C1\uD0DC\uAC00 \uBC14\uB00C\uBA74 \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uB3C4\uB85D \uC694\uCCAD\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBA54\uCEE4\uB2C8\uC998\uC744 \uC77C\uCEEC\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uBB34\uD6A8\uD654 \uC601\uC5ED`), `\uC774\uB77C\uACE0 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 \uBC84\uD2BC \uC0C1\uD0DC\uAC00 \uD574\uC81C\uC5D0\uC11C \uB204\uB984\uC73C\uB85C \uBC14\uB00C\uC5B4 \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBC84\uD2BC \uC704\uC82F\uC774 \uCC28\uC9C0\uD558\uB294 \uC601\uC5ED\uC774 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC785\uB2C8\uB2E4. \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uD504\uB808\uC784\uC5D0 \uD544\uC694\uD558\uC5EC \uC694\uCCAD\uC744 \uBC1B\uB294 \uBB34\uD6A8\uD654 \uC601\uC5ED \uBAA9\uB85D\uC744 \uBCF4\uAD00\uD569\uB2C8\uB2E4. \uC774\uBCA4\uD2B8(\uD130\uCE58, \uBC84\uD2BC, \uC2E4\uD589)\uAC00 \uC218\uC9D1\uB420 \uB54C\uB9C8\uB2E4 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC774 1\uAC1C \uC774\uC0C1 \uBC1C\uC0DD\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0 \uB2E4\uC218\uC758 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC774 \uC874\uC7AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2A4\uD06C\uB9B0 \uD074\uB798\uC2A4\uC758 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB3C4 \uC601\uC5ED\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uB3C4\uB85D \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC608\uC5D0\uC11C\uB294 \uBC15\uC2A4\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `invalidate`), ` \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uC5EC \uD504\uB808\uC784 10 \uC774\uD6C4 \uBC15\uC2A4 \uC704\uC82F box1\uC758 \uC0C9\uC0C1\uC744 \uBCC0\uACBD\uD558\uACE0 \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uB3C4\uB85D \uC694\uCCAD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void handleTickEvent()
{
    Screen1ViewBase::handleTickEvent();                          // Call superclass eventhandler
    tickCounter += 1;
    if (tickCounter == 10)
    {
        box1.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00)); // Set color to red
        box1.invalidate();                                       // Request redraw
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC758 \uC608\uC5D0\uC11C \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `handleTickEvent`), ` \uD578\uB4E4\uB7EC\uB97C \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uD638\uCD9C\uD569\uB2C8\uB2E4. \uC774\uD6C4 10\uBC88\uC9F8 \uD504\uB808\uC784\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `box1`), `\uC758 \uC601\uC5ED\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uB3C4\uB85D \uC694\uCCAD\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC694\uCCAD\uC5D0 \uB300\uD55C \uC751\uB2F5\uC73C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `box1`), ` \uC704\uC82F\uC5D0 \uC800\uC7A5\uB41C \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD574 \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C \uD574\uB2F9 \uC601\uC5ED\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uAE30\uB97C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uBCF4\uBA74 \uBC84\uD2BC \uC704\uC82F\uC774 \uC788\uACE0, \uBC30\uACBD \uC774\uBBF8\uC9C0 \uC0C1\uB2E8\uC5D0 \uBC15\uC2A4 \uC704\uC82F\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uBC84\uD2BC\uC5D0 \uB300\uD55C \uC778\uD130\uB799\uC158\uC744 \uC0BD\uC785\uD558\uC5EC \uBC84\uD2BC\uC744 \uB20C\uB800\uC744 \uB54C \uBC15\uC2A4 \uC0C9\uC0C1\uC774 \uBC14\uB00C\uB3C4\uB85D \uC124\uC815\uD558\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD588\uC744 \uB54C \uBC1C\uC0DD\uD558\uB294 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC740 2\uAC1C(\uBE68\uAC04\uC0C9 \uD45C\uC2DC)\uAC00 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/button-and-box.png",
    noShadow: "true",
    width: 480,
    mdxType: "Figure"
  }, "\uBB34\uD6A8\uD654 \uC601\uC5ED 2\uAC1C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC15\uC2A4 \uC601\uC5ED\uC774 \uBB34\uD6A8\uD654\uB418\uBA74\uC11C \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uC0C8\uB85C\uC6B4 \uC0C9\uC0C1\uC774 \uADF8\uB824\uC9D1\uB2C8\uB2E4. \uB610\uD55C \uBC84\uD2BC\uB3C4 \uBB34\uD6A8\uD654\uB418\uC5B4 \uB2E4\uC2DC \uD574\uC81C \uC0C1\uD0DC\uAC00 \uADF8\uB824\uC9C0\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "render"
  }), `\uB80C\uB354\uB9C1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC5D0\uC11C \uC124\uBA85\uD55C \uAC83\uCC98\uB7FC \uC5C5\uB370\uC774\uD2B8 \uB2E8\uACC4\uB97C \uB9C8\uCE58\uBA74 \uB2E4\uC2DC \uADF8\uB824\uC57C \uD560 \uC601\uC5ED, \uC989 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC758 \uBAA9\uB85D\uC774 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uB80C\uB354\uB9C1 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uC774\uB7EC\uD55C \uBAA9\uB85D\uC744 \uD655\uC778\uD558\uACE0 \uD574\uB2F9 \uC601\uC5ED\uC744 \uCC28\uC9C0\uD558\uB294 \uC704\uC82F\uC744 \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB80C\uB354\uB9C1 \uB2E8\uACC4\uB294 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC774\uBBF8 \uC7A5\uBA74 \uBAA8\uB378(UI\uC758 \uC704\uC82F)\uC744 \uC815\uC758\uD558\uC5EC \uC77C\uBD80 \uC601\uC5ED\uC744 \uBB34\uD6A8\uD654\uD588\uAE30 \uB54C\uBB38\uC5D0 \uB098\uBA38\uC9C0\uB294 \uC5D4\uC9C4\uC5D0\uC11C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uBB34\uD6A8\uD654 \uC601\uC5ED\uC744 \uD558\uB098\uC529 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uAC01 \uC601\uC5ED\uB9C8\uB2E4 \uC5D4\uC9C4\uC774 \uC7A5\uBA74 \uBAA8\uB378\uC744 \uC2A4\uCE94\uD558\uC5EC \uC77C\uBD80\uBD84\uC774\uB4E0 \uC804\uCCB4\uB4E0 \uC0C1\uAD00\uC5C6\uC774 \uD574\uB2F9 \uC601\uC5ED\uC774 \uCC28\uC9C0\uD558\uACE0 \uC788\uB294 \uC704\uC82F\uC758 \uBAA9\uB85D\uC744 \uC218\uC9D1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC774\uB807\uAC8C \uC218\uC9D1\uB41C \uC704\uC82F \uBAA9\uB85D\uC744 \uACE0\uB824\uD558\uC5EC \uD574\uB2F9 \uC704\uC82F\uC5D0 \uB300\uD55C draw \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. \uADF8\uB9AC\uAE30 \uC791\uC5C5 \uC21C\uC11C\uB294 \uBC30\uACBD\uC758 \uC704\uC82F\uBD80\uD130 \uC2DC\uC791\uD558\uC5EC \uAC00\uC7A5 \uC55E\uC5D0 \uC788\uB294 \uC704\uC82F\uC73C\uB85C \uB05D\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F\uC758 draw \uBA54\uC18C\uB4DC\uB294 \uD504\uB808\uC784\uBC84\uD37C\uB85C \uADF8\uB9B4 \uB54C \uC0C9\uC0C1 \uB4F1 \uC704\uC82F\uC758 \uC0C1\uD0DC\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC704\uC82F\uC744 \uADF8\uB9AC\uB294 \uB370 \uD544\uC694\uD55C \uC815\uBCF4\uB294 \uBAA8\uB450 \uC5C5\uB370\uC774\uD2B8 \uB2E8\uACC4\uC5D0\uC11C \uC704\uC82F\uC5D0 \uC800\uC7A5\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uB80C\uB354\uB9C1 \uB2E8\uACC4\uC5D0\uC11C \uC774\uB7EC\uD55C \uC815\uBCF4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "wait"
  }), `\uC218\uC2E0 \uB300\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uB2E4\uC74C \uD504\uB808\uC784\uC744 \uC5C5\uB370\uC774\uD2B8 \uBC0F \uB80C\uB354\uB9C1\uD560 \uB54C\uAE4C\uC9C0 \uC2E0\uD638\uB97C \uAE30\uB2E4\uB9BD\uB2C8\uB2E4. \uD504\uB808\uC784\uC744 \uCD5C\uB300\uD55C \uBE60\uB974\uAC8C \uC5F0\uC18D\uD574\uC11C \uB80C\uB354\uB9C1\uD558\uC9C0 \uC54A\uACE0 \uD504\uB808\uC784 \uC0AC\uC774\uC5D0\uC11C \uAE30\uB2E4\uB9AC\uB294 \uB370\uB294 \uB450 \uAC00\uC9C0 \uC774\uC720\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uB80C\uB354\uB9C1\uC740 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4. \uC704\uC5D0\uC11C\uB3C4 \uC5B8\uAE09\uD588\uC9C0\uB9CC \uC77C\uBD80 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C\uB294 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uBC18\uBCF5\uD574\uC11C \uC804\uC1A1\uD574\uC57C \uD569\uB2C8\uB2E4. While this transmission is ongoing, it is not advisable to render arbitrarily to the framebuffer. \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC804\uC1A1 \uD6C4 \uB80C\uB354\uB9C1\uC774 \uC2DC\uC791\uB420 \uB54C\uAE4C\uC9C0 \uC7A0\uC2DC \uC2E0\uD638\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC774\uC720\uB3C4 \uC5EC\uAE30\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC804\uC1A1\uD574\uC57C \uD560 \uB54C\uB294 \uB2E4\uB978 \uB514\uC2A4\uD50C\uB808\uC774\uB4E4\uC774 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uC2E0\uD638\uB97C \uC804\uC1A1\uD569\uB2C8\uB2E4. \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uAE30\uB2E4\uB9AC\uB294 \uC2E0\uD638\uB3C4 \uBC14\uB85C \uC774 \uC2E0\uD638\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", {
    parentName: "li"
  }, `\uD504\uB808\uC784\uC740 \uACE0\uC815\uB41C \uC18D\uB3C4\uB85C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uD504\uB808\uC784\uC744 \uACE0\uC815\uB41C \uC18D\uB3C4\uB85C \uB80C\uB354\uB9C1\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uAC8C \uC720\uC6A9\uD560 \uB54C\uAC00 \uB9CE\uC740\uB370, \uC774\uB294 \uD2B9\uC815 \uC2DC\uAC04 \uB3D9\uC548 \uC9C0\uC18D\uB418\uB294 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uBCF4\uB2E4 \uC27D\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 60Hz \uB514\uC2A4\uD50C\uB808\uC774\uB77C\uBA74 2\uCD08 \uBD84\uB7C9\uC758 \uC560\uB2C8\uBA54\uC774\uC158\uC740 120 \uD504\uB808\uC784 \uD6C4\uC5D0 \uB9C8\uCE58\uB3C4\uB85D \uD504\uB85C\uADF8\uB798\uBC0D\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC2E0\uD638\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC2DC\uAC04\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC6B0\uC120\uC21C\uC704\uAC00 \uB0AE\uC740 \uD504\uB85C\uC138\uC2A4\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC6B0\uC120\uC21C\uC704\uAC00 \uB0AE\uC740 \uD504\uB85C\uC138\uC2A4\uB77C\uACE0 \uD574\uB3C4 \uC77C\uC815 \uC2DC\uC810\uC5D0 \uC774\uB974\uBA74 \uACB0\uAD6D \uC2E4\uD589\uB418\uC5B4\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0 \uC774\uB7EC\uD55C \uBC29\uC2DD\uC73C\uB85C \uB300\uAE30 \uC2DC\uAC04\uC744 \uBB34\uC758\uBBF8\uD558\uAC8C \uC18C\uBE44\uD558\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "handling-the-framebuffers"
  }), `\uD504\uB808\uC784\uBC84\uD37C \uCC98\uB9AC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC5D0\uC11C\uB3C4 \uC598\uAE30\uD588\uC9C0\uB9CC \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uAE30 \uC804\uC5D0 \uBA3C\uC800 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4. \uB610\uD55C \uD504\uB808\uC784\uBC84\uD37C\uB85C \uB80C\uB354\uB9C1\uC744 \uB9C8\uCE5C \uC774\uD6C4\uC5D0\uB294 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uC5C5\uB370\uC774\uD2B8\uB41C \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uD45C\uC2DC\uB418\uB294\uC9C0 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "two-framebuffers"
  }), `\uD504\uB808\uC784\uBC84\uD37C\uAC00 2\uAC1C\uC77C \uB54C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC7A5 \uAC04\uB2E8\uD55C \uAD6C\uC131\uC5D0\uC11C\uB294 2\uAC1C\uC758 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uD504\uB808\uC784\uBC84\uD37C 2\uAC1C\uB97C \uBC88\uAC08\uC544 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD504\uB808\uC784\uC744 \uD504\uB808\uC784\uBC84\uD37C\uB85C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uB294 \uB3D9\uC548 \uB098\uBA38\uC9C0 \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uB418\uC5B4 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uC774\uC911 \uD504\uB808\uC784\uBC84\uD37C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uADF8\uB9BC\uC5D0\uC11C\uB294 \uBCD1\uB82C RGB \uB514\uC2A4\uD50C\uB808\uC774\uAC00 LTDC \uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uC5F0\uACB0\uB418\uC5B4 \uC788\uB2E4\uACE0 \uAC00\uC815\uD569\uB2C8\uB2E4. \uC989, \uC774 \uACBD\uC6B0 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uB97C \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uC804\uC1A1\uD574\uC57C \uD569\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uAC00 2\uAC1C\uC774\uBBC0\uB85C \uADF8\uB798\uD53D \uC5D4\uC9C4\uC740 \uD504\uB808\uC784 \uBC84\uD37C 1\uAC1C\uB97C \uC804\uC1A1\uD558\uB294 \uB3D9\uC548 \uB098\uBA38\uC9C0 \uD504\uB808\uC784\uBC84\uD37C\uB85C \uD504\uB808\uC784\uC744 \uADF8\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9E4\uC6B0 \uD6A8\uACFC\uC801\uC774\uBBC0\uB85C \uAC00\uB2A5\uD558\uB2E4\uBA74 \uC774\uB7EC\uD55C \uAE30\uBC95\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uAE30 \uB54C\uBB38\uC5D0 \uC704 \uADF8\uB9BC\uC758 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC804\uC1A1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC544\uBB34\uAC83\uB3C4 \uC5C5\uB370\uC774\uD2B8\uD558\uC9C0 \uC54A\uB294 \uD504\uB808\uC784\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C\uB294 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC544\uBB34\uAC83\uB3C4 \uB80C\uB354\uB9C1 \uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774\uD6C4 \uD504\uB808\uC784\uC5D0\uC11C\uB3C4 \uB3D9\uC77C\uD55C \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uB2E4\uC2DC \uC804\uC1A1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-no-update.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uD504\uB808\uC784 2\uC5D0\uC11C \uC5C5\uB370\uC774\uD2B8\uAC00 \uC5C6\uC744 \uACBD\uC6B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD504\uB808\uC784 2\uC5D0\uC11C \uC544\uBB34\uAC83\uB3C4 \uADF8\uB9AC\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uD504\uB808\uC784 3\uC5D0\uC11C\uB3C4 \uD504\uB808\uC784\uBC84\uD37C 2\uB97C \uB2E4\uC2DC \uC804\uC1A1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC778 \uBCD1\uB82C RGB \uB514\uC2A4\uD50C\uB808\uC774\uB294 \uD654\uBA74 \uB9AC\uD504\uB808\uC2DC \uBE44\uC728\uC774 \uC57D 60Hz\uC785\uB2C8\uB2E4. This update frequency must be maintained by the microcontroller. \uC774\uB7EC\uD55C \uC5C5\uB370\uC774\uD2B8 \uC8FC\uD30C\uC218\uB294 \uC804\uC1A1\uC774 \uB2E4\uC2DC \uC2DC\uC791\uD558\uAE30 \uC804\uAE4C\uC9C0 \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC744 \uB80C\uB354\uB9C1\uD560 \uC218 \uC788\uB294 \uC2DC\uAC04\uC774 16ms\uB77C\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC0C8 \uD504\uB808\uC784\uC744 \uB80C\uB354\uB9C1\uD560 \uC218 \uC788\uB294 \uC2DC\uAC04\uC774 16ms\uB97C \uCD08\uACFC\uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C\uB294 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC774\uC804\uACFC \uB3D9\uC77C\uD55C \uD504\uB808\uC784\uC744 \uB2E4\uC2DC \uC804\uC1A1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uAE38 \uACBD\uC6B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC7841\uC744 \uB80C\uB354\uB9C1\uD558\uB294 \uB370 16ms \uB118\uAC8C \uAC78\uB9AC\uAE30 \uB54C\uBB38\uC5D0 \uC774\uC804\uC5D0 \uD504\uB808\uC784\uBC84\uD37C1\uB85C \uB80C\uB354\uB9C1\uB41C \uD504\uB808\uC784 0\uC774 \uC7AC\uC804\uC1A1\uB429\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C2\uC758 \uC0C8 \uD504\uB808\uC784\uC740 \uD504\uB808\uC784 3\uC5D0\uC11C \uC804\uC1A1\uB429\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uB97C 2\uAC1C \uC0AC\uC6A9\uD560 \uACBD\uC6B0\uC5D0\uB294 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uAE38\uC5B4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0C8 \uD504\uB808\uC784\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC744 \uB54C\uAE4C\uC9C0 \uC774\uC804 \uD504\uB808\uC784\uC774 \uC7AC\uC804\uC1A1\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "one-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C\uAC00 1\uAC1C\uC77C \uB54C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uC2DC\uC2A4\uD15C\uC5D0\uB294 \uD504\uB808\uC784\uBC84\uD37C\uB97C 1\uAC1C\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uBA54\uBAA8\uB9AC\uAC00 \uD0D1\uC7AC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C\uB294 \uBCD1\uB82C RGB \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uAC00\uC9C0\uACE0 \uC788\uB354\uB77C\uB3C4 \uC5B4\uCA54 \uC218 \uC5C6\uC774 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C1\uC744 \uC804\uC1A1\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB807\uAC8C \uB418\uBA74 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uB514\uC2A4\uD50C\uB808\uC774\uB85C \uB3D9\uC2DC\uC5D0 \uC804\uC1A1\uD558\uB294 \uAC83\uACFC \uB3D9\uC77C\uD55C \uD504\uB808\uC784\uBC84\uD37C\uB85C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD574\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0 \uBB38\uC81C\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC8FC\uC758\uB97C \uAE30\uC6B8\uC774\uC9C0 \uC54A\uC73C\uBA74 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uC774\uC804 \uD504\uB808\uC784\uACFC \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC774 \uB4A4\uC11E\uC778 \uD504\uB808\uC784\uC744 \uD45C\uC2DC\uD560 \uC704\uD5D8\uC774 \uB9E4\uC6B0 \uD07D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `One solution is to hold back the drawing until the transfer is complete and only draw in the time-slot before the transfer starts again. \uD558\uC9C0\uB9CC \uC774\uB807\uAC8C \uD558\uBA74 \uC804\uCCB4 \uD504\uB808\uC784 \uC2DC\uAC04\uC5D0\uC11C \uC804\uC1A1\uC774 \uCC28\uC9C0\uD558\uB294 \uC2DC\uAC04\uC774 \uB9E4\uC6B0 \uD06C\uAE30 \uB54C\uBB38\uC5D0 \uB4DC\uB85C\uC789\uD560 \uC218 \uC788\uB294 \uC2DC\uAC04\uC774 \uB9E4\uC6B0 \uBD80\uC871\uD574\uC9D1\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0\uB3C4 \uB2E4\uC74C \uC804\uC1A1\uC774 \uC2DC\uC791\uB420 \uB54C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uB9C8\uCE58\uC9C0 \uBABB\uD558\uBA74 \uBD88\uC644\uC804\uD55C \uD504\uB808\uC784(\uD2F0\uC5B4\uB9C1)\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uB294 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB354 \uAC00\uB2A5\uC131 \uC788\uB294 \uD574\uACB0\uCC45\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uC758 \uC804\uC1A1\uB7C9\uC744 \uBBF8\uB9AC \uCD94\uC801\uD558\uC5EC \uB80C\uB354\uB9C1\uC744 \uD504\uB808\uC784\uBC84\uD37C\uC5D0\uC11C \uD574\uB2F9\uD558\uB294 \uBD80\uBD84\uC73C\uB85C \uC81C\uD55C\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC804\uC1A1\uC774 \uC9C4\uD589\uB418\uBA74\uC11C \uB80C\uB354\uB9C1 \uC54C\uACE0\uB9AC\uC998\uC5D0 \uB530\uB77C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uC810\uCC28 \uB298\uC5B4\uB098\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC5D4\uC9C4\uC5D0\uB294 \uD504\uB85C\uADF8\uB798\uBA38\uAC00 \uC815\uD655\uD558\uAC8C \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC744 \uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uB294 \uC54C\uACE0\uB9AC\uC998\uB4E4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC544\uB798\uC640 \uAC19\uC774 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uACE0 \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-1fb-normal.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uB2E8\uC77C \uD504\uB808\uC784\uBC84\uD37C\uB294 \uBAA8\uB4E0 \uD504\uB808\uC784\uC5D0\uC11C \uC7AC\uC804\uC1A1\uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uC5D0\uC11C \uC544\uBB34\uAC83\uB3C4 \uC5C5\uB370\uC774\uD2B8\uB418\uC9C0 \uC54A\uC73C\uBA74 \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uADF8\uB300\uB85C \uC7AC\uC804\uC1A1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 16ms\uBCF4\uB2E4 \uAE38\uBA74 \uC7AC\uC804\uC1A1\uC774 \uB2E4\uC2DC \uC2DC\uC791\uB418\uC5B4\uB3C4 \uB80C\uB354\uB9C1\uC774 \uB05D\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/basic-concepts/rendering/engine-cycle-1fb-long-render.png",
    noShadow: "true",
    mdxType: "Figure"
  }, "\uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 \uAE38 \uACBD\uC6B0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC0C1\uD669\uC5D0\uC11C\uB294 \uADF8\uB798\uD53D \uC5D4\uC9C4\uC774 \uC804\uC1A1\uB418\uB294 \uBD80\uBD84\uC774 \uC644\uC804\uD558\uAC8C \uB80C\uB354\uB9C1 \uB418\uB294\uC9C0 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uB514\uC2A4\uD50C\uB808\uC774\uAC00 \uBD88\uC644\uC804\uD55C \uD504\uB808\uC784\uBC84\uD37C\uB97C \uD45C\uC2DC\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uC139\uC158\uC5D0\uC11C\uB294 \uAC01 \uC704\uC82F\uC5D0 \uB530\uB978 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uC139\uC158\uC740 \uD504\uB85C\uADF8\uB798\uBA38\uAC00 \uACE0\uC131\uB2A5 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC1C\uBC1C\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB420 \uAC83\uC785\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);