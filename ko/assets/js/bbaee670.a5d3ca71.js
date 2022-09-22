"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6996],{

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

/***/ 65407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function LoopVideo(props) {
  var _a, _b;
  const videoSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.url);
  const width = (_a = props.width) != null ? _a : "100%";
  const height = (_b = props.height) != null ? _b : "100%";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loop-video"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    width,
    height
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: videoSrc,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children));
}
/* harmony default export */ __webpack_exports__["Z"] = (LoopVideo);


/***/ }),

/***/ 82985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

class Shortcut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      className: "shortcut"
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Shortcut);


/***/ }),

/***/ 52016:
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
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82985);
/* harmony import */ var _site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65407);
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
  id: "simulator",
  title: "\uC2DC\uBBAC\uB808\uC774\uD130"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/simulator",
  "id": "development/ui-development/working-with-touchgfx/simulator",
  "title": "\uC2DC\uBBAC\uB808\uC774\uD130",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/simulator.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/simulator",
  "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/simulator",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "simulator",
    "title": "\uC2DC\uBBAC\uB808\uC774\uD130"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC704\uC82F \uBC0F \uCEE8\uD14C\uC774\uB108",
    "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"
  },
  "next": {
    "title": "\uCEF4\uD30C\uC77C \uBC0F \uD50C\uB798\uC2F1",
    "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"
  }
};
const assets = {};



const toc = [{
  value: "\uC2E4\uD589 \uBC29\uBC95",
  id: "how-to-run",
  level: 2
}, {
  value: "TouchGFX Designer \uC0AC\uC6A9 \uC2DC",
  id: "using-touchgfx-designer",
  level: 3
}, {
  value: "TouchGFX \uD658\uACBD \uC0AC\uC6A9 \uC2DC",
  id: "using-touchgfx-environment",
  level: 3
}, {
  value: "\uC2DC\uBBAC\uB808\uC774\uD130 \uAE30\uB2A5",
  id: "simulator-features",
  level: 2
}, {
  value: "\uC2DC\uBBAC\uB808\uC774\uD130 \uC804\uC6A9 \uC0AC\uC6A9\uC790 \uCF54\uB4DC",
  id: "simulator-only-user-code",
  level: 2
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C \uC7A0\uAE08 \uBC0F \uC7A0\uAE08 \uD574\uC81C",
  id: "locking-and-unlocking-the-framebuffer",
  level: 2
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C \uC7A0\uAE08",
  id: "locking-the-framebuffer",
  level: 3
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C \uC7A0\uAE08 \uD574\uC81C",
  id: "unlocking-the-framebuffer",
  level: 3
}, {
  value: "\uD504\uB808\uC784\uBC84\uD37C\uC758 \uC7A0\uAE08 \uD574\uC81C\uB97C \uC78A\uC740 \uACBD\uC6B0",
  id: "forgetting-to-unlock-the-framebuffer",
  level: 3
}, {
  value: "\uD06C\uAE30\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uB2E4\uB978 \uD558\uB4DC\uC6E8\uC5B4 \uD504\uB808\uC784 \uBC84\uD37C \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uAE30",
  id: "simulating-hardware-framebuffer-with-a-different-size-than-the-display",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX UI\uB97C \uBE4C\uB4DC\uD558\uB824\uBA74 \uBCF4\uD1B5 UI \uC0AC\uC591\uC5D0 \uB9DE\uAC8C \uC138\uBD80\uC801\uC778 \uADF8\uB798\uD53D\uC744 \uC870\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB54C \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4\uB97C \uBE60\uB974\uAC8C \uC9C4\uD589\uD558\uB824\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD14C\uC2A4\uD2B8 \uBC0F \uB514\uBC84\uAE45 \uC18C\uC694 \uC2DC\uAC04\uC744 \uB2E8\uCD95\uD560 \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uBCF4\uB4DC \uD50C\uB798\uC2F1\uC740 \uBCF4\uD1B5 \uC2DC\uAC04\uC774 \uB9CE\uC774 \uAC78\uB9AC\uAE30 \uB54C\uBB38\uC5D0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC57D\uAC04 \uBCC0\uACBD\uD560 \uB54C\uB9C8\uB2E4 \uC77C\uC77C\uC774 \uD50C\uB798\uC2F1\uC744 \uD55C\uB2E4\uBA74 \uAC1C\uBC1C\uC774 \uC9C0\uC5F0\uB429\uB2C8\uB2E4. TouchGFX PC \uC2DC\uBBAC\uB808\uC774\uD130\uB294 \uAC1C\uBC1C \uB3C4\uAD6C\uC5D0 \uCD94\uAC00\uD558\uC5EC \uC774\uB7EC\uD55C \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 \uB370 \uB9E4\uC6B0 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C PC\uC5D0 \uB9DE\uAC8C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uCEF4\uD30C\uC77C\uD558\uAE30\uB9CC \uD558\uBA74 PC\uC5D0\uC11C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2E4\uD589\uD558\uB294 \uCF54\uB4DC\uB294 \uBCF4\uB4DC \uBE0C\uB9C1 \uC5C5(Board Bring Up) \uCF54\uB4DC\uC640 \uCD94\uC0C1\uD654 \uACC4\uCE35\uC774 \uC544\uB2CC PC\uC5D0 \uB9DE\uAC8C \uC791\uC131\uB41C\uB2E4\uB294 \uC810\uB9CC \uC81C\uC678\uD558\uBA74 \uD0C0\uAC9F \uD558\uB4DC\uC6E8\uC5B4\uC758 \uCF54\uB4DC\uC640 \uC815\uD655\uD788 \uC77C\uCE58\uD569\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uC704\uC82F \uBC30\uCE58, \uC778\uD130\uB799\uC158, \uC560\uB2C8\uBA54\uC774\uC158, \uC0C1\uD0DC \uAE30\uACC4 \uAC19\uC740 \uAC83\uB4E4\uC744 \uB9C8\uCE58 \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uD14C\uC2A4\uD2B8\uD558\uB294 \uAC83\uCC98\uB7FC \uC815\uBC00\uD558\uAC8C \uD14C\uC2A4\uD2B8\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC2EC\uC9C0\uC5B4 Visual Studio\uC640 \uAC19\uC740 IDE\uB97C \uC0AC\uC6A9\uD574 \uCF54\uB4DC\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "debugging"
  }), `\uB514\uBC84\uAE45`), `\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uBB3C\uB860 \uC774\uB54C\uB294 \uC131\uB2A5 \uBD84\uC11D\uC774\uB098 \uC2E4\uC81C \uBC31\uC5D4\uB4DC \uC2DC\uC2A4\uD15C \uC0C1\uD638\uC791\uC6A9\uACFC \uAC19\uC740 \uC791\uC5C5\uC740 \uC0AC\uC6A9\uD558\uB294 \uBCF4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_LoopVideo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    url: "/videos/development/ui-development/working-with-touchgfx/simulator/simulator-example.mp4",
    mdxType: "LoopVideo"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130 \uC608"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "how-to-run"
  }), `\uC2E4\uD589 \uBC29\uBC95`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-touchgfx-designer"
  }), `TouchGFX Designer \uC0AC\uC6A9 \uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD558\uB824\uBA74 \uC624\uB978\uCABD \uC0C1\uB2E8 \uBAA8\uD241\uC774\uC5D0 \uC788\uB294 "Run Simulator" \uBC84\uD2BC\uC744 \uB204\uB974\uAC70\uB098 \uD0A4\uBCF4\uB4DC\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F5`), ` \uD0A4\uB97C \uB204\uB974\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC5D0\uC11C \uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-touchgfx-environment"
  }), `TouchGFX \uD658\uACBD \uC0AC\uC6A9 \uC2DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uD658\uACBD\uC5D0\uC11C \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD558\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX \uD658\uACBD\uC744 \uC5FD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC788\uB294 \uC704\uCE58\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ol", {
    parentName: "li"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uC2DC\uBBAC\uB808\uC774\uD130 \uC804\uC6A9 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uC608\uB97C \uB4E4\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/TouchGFXProjects/MyApplication_1`), `\uC5D0 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, `\uD0C0\uAC9F \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uC608\uB97C \uB4E4\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `C:/TouchGFXProjects/MyApplication_1/TouchGFX/`), `\uC5D0 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC788\uC2B5\uB2C8\uB2E4.`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `make -f simulator/gcc/Makefile -j6`), ` \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uCEF4\uD30C\uC77C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "li"
  }, `./build/bin/simulator.exe`), ` \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBCC0\uACBD\uD560 \uB54C\uB9C8\uB2E4 3~4\uB2E8\uACC4\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-features"
  }), `\uC2DC\uBBAC\uB808\uC774\uD130 \uAE30\uB2A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uB294 \uB9C8\uC6B0\uC2A4 \uC785\uB825\uC744 \uCEA1\uCC98\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4 \uC544\uB798\uC640 \uAC19\uC774 \uC5EC\uB7EC \uAC00\uC9C0 \uC720\uC6A9\uD55C \uAE30\uB2A5\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", {
    "spaces-before": "0"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null, "\uB2E8\uCD95\uD0A4"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", null, "\uAE30\uB2A5")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F1")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uD3EC\uC778\uD130 \uC88C\uD45C \uD45C\uC2DC\uC640 \uD574\uB2F9 \uC88C\uD45C(16\uC9C4\uC218) \uD53D\uC140\uC758 RGB \uC0C9\uC0C1 \uD45C\uC2DC\uB97C \uD65C\uC131\uD654/\uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F2")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uBB34\uD6A8\uD654 \uC601\uC5ED\uC758 \uAC15\uC870 \uD45C\uC2DC\uB97C \uD65C\uC131\uD654/\uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uC2A4\uD06C\uB9B0\uC0F7\uC744 \uC0DD\uC131\uD55C \uD6C4 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", null, "screenshots"), " \uD3F4\uB354\uC5D0 \uD574\uB2F9 \uC774\uBBF8\uC9C0\uB97C \uC800\uC7A5\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "CTRL + F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uB2E4\uC74C \uD504\uB808\uC784 50\uAC1C\uC758 \uC2A4\uD06C\uB9B0\uC0F7\uC744 \uC0DD\uC131\uD55C \uD6C4 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", null, "screenshots"), " \uD3F4\uB354\uC5D0 \uD574\uB2F9 \uC774\uBBF8\uC9C0\uB97C \uC800\uC7A5\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "SHIFT + F3")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uC2A4\uD06C\uB9B0\uC0F7\uC744 \uC0DD\uC131\uD55C \uD6C4 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F4")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uC2DC\uBBAC\uB808\uC774\uD130 \uC2A4\uD0A8\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uC2DC\uBBAC\uB808\uC774\uD130 \uC2A4\uD0A8\uC744 \uD65C\uC131\uD654/\uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("br", null), "\uC2DC\uBBAC\uB808\uC774\uD130 \uC2A4\uD0A8\uC744 \uC0AC\uC6A9\uD558\uC9C0 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("i", null, "\uC54A\uB294"), " \uACBD\uC6B0\uC5D0\uB294 \uCC3D \uACBD\uACC4\uB97C \uD65C\uC131\uD654/\uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F5")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "Sends the application straight back to the startup screen by calling FrontendApplication::changeToStartScreen().")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F9")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uC2E4\uD589 \uC774\uBCA4\uD2B8(tick)\uB97C \uC804\uC1A1\uD558\uC9C0 \uBABB\uD558\uB3C4\uB85D \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC77C\uC2DC \uC911\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uC2DC F9\uB97C \uB204\uB974\uBA74 \uC815\uC0C1\uC801\uC778 \uC2E4\uD589\uC744 \uC7AC\uAC1C\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "F10")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, 'F9\uB97C \uB20C\uB7EC \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC77C\uC2DC \uC911\uC9C0\uD588\uC744 \uB54C\uB3C4 F10\uC744 \uB204\uB974\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uB2E8\uC77C \uC2E4\uD589 \uC774\uBCA4\uD2B8(tick)\uB97C \uC804\uC1A1\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158 "\uC2F1\uAE00 \uC2A4\uD15D"\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.')), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, "ESC")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", null, "\uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uB2EB\uC2B5\uB2C8\uB2E4."))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "simulator-only-user-code"
  }), `\uC2DC\uBBAC\uB808\uC774\uD130 \uC804\uC6A9 \uC0AC\uC6A9\uC790 \uCF54\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC0AC\uC6A9\uD560 \uB54C\uB9CC \uC2E4\uD589\uB418\uC5B4\uC57C \uD558\uB294 \uCF54\uB4DC\uAC00 \uC788\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 C++ \uCF54\uB4DC\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#ifdef SIMULATOR`), `\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#ifdef SIMULATOR
  // Your simulator specific user code here
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uBC84\uADF8 \uD14D\uC2A4\uD2B8\uB97C \uCF58\uC194\uB85C \uCD9C\uB825\uD558\uB824\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_printf`), ` \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 printf\uC640 \uC720\uC0AC\uD55C \uD568\uC218\uB85C\uC11C \uC2DC\uBBAC\uB808\uC774\uD130 \uCF54\uB4DC\uB97C \uBE4C\uB4DC\uD560 \uB54C\uB9CC \uD3EC\uD568\uB418\uAE30 \uB54C\uBB38\uC5D0 \uD0C0\uAC9F \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uC2E4\uD589\uD560 \uACBD\uC6B0\uC5D0\uB294 \uAC04\uC12D\uC744 \uC77C\uC73C\uD0A4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774 \uACBD\uC6B0\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `#ifdef SIMULATOR`), `\uB97C \uC0AC\uC6A9\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `int i = 0;
touchgfx_printf("Application is running through simulator! \\n");
touchgfx_printf("Print our value for integer i = %i \\n", i);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "locking-and-unlocking-the-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C \uC7A0\uAE08 \uBC0F \uC7A0\uAE08 \uD574\uC81C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCF54\uB4DC\uB97C \uC791\uC131\uD574\uC11C \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC9C1\uC811 \uC870\uC791\uD558\uB824\uBA74 \uD53D\uC140 \uB370\uC774\uD130\uB97C \uD504\uB808\uC784\uBC84\uD37C \uBA54\uBAA8\uB9AC\uC5D0 \uC791\uC131\uD558\uAE30 \uC804\uC5D0 \uBA3C\uC800 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC7A0\uAC00\uC57C \uD569\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C \uC7A0\uAE08\uC740 \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uC791\uC131\uD55C \uD6C4 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC7A0\uAE08 \uD574\uC81C\uD558\uB294 \uAC83 \uB9CC\uD07C\uC774\uB098 \uC911\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "locking-the-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C \uC7A0\uAE08`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uB97C \uC7A0\uAE00 \uB54C \uC0AC\uC6A9\uD558\uB294 \uCF54\uB4DC \uC2A4\uB2C8\uD3AB\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `uint16_t* RESTRICT buf = HAL::getInstance()->lockFrameBuffer();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC11C \uC788\uC5C8\uB358 \uC774\uC720\uB4E4 \uB54C\uBB38\uC5D0 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uAC00\uB9AC\uD0A4\uB294 16\uBE44\uD2B8 \uD3EC\uC778\uD130 \uAC12\uC774 \uBC18\uD658\uB429\uB2C8\uB2E4. \uD504\uB808\uC784\uBC84\uD37C\uC5D0 \uB354\uC6B1 \uC27D\uAC8C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uB3C4\uB85D \uD3EC\uC778\uD130\uB97C \uD574\uB2F9\uD558\uB294 \uD3EC\uC778\uD130 \uC720\uD615\uC73C\uB85C \uCE90\uC2A4\uD305\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "unlocking-the-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C \uC7A0\uAE08 \uD574\uC81C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0AC\uC6A9\uD55C \uD6C4 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC7A0\uAE08 \uD574\uC81C\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `HAL::getInstance()->unlockFrameBuffer();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "forgetting-to-unlock-the-framebuffer"
  }), `\uD504\uB808\uC784\uBC84\uD37C\uC758 \uC7A0\uAE08 \uD574\uC81C\uB97C \uC78A\uC740 \uACBD\uC6B0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uBC84\uD37C\uC758 \uC7A0\uAE08 \uD574\uC81C\uB97C \uC78A\uC73C\uBA74 \uD558\uB4DC\uC6E8\uC5B4\uAC00 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC744 \uB54C\uAE4C\uC9C0 \uC791\uB3D9\uC744 \uBA48\uCD94\uACE0 \uACC4\uC18D\uD574\uC11C \uB300\uAE30\uD569\uB2C8\uB2E4. \uC774\uB54C\uB294 TouchGFX \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uD504\uB808\uC784\uBC84\uD37C\uAC00 \uC7A0\uACA8 \uC788\uC744 \uB54C\uB3C4 \uD504\uB808\uC784\uBC84\uD37C\uB97C \uC7A0\uADF8\uB3C4\uB85D \uC694\uCCAD\uD558\uB294 \uAC00\uC815 \uC124\uC815\uBB38(assert)\uC744 \uAC00\uC838\uC624\uBA74 \uC774\uB7EC\uD55C \uC0C1\uD669\uC744 \uAC10\uC9C0\uD558\uB294 \uB370 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4. Microsoft Visual Studio\uC5D0\uC11C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC624\uB958 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/windows-unlock-framebuffer.png",
    mdxType: "Figure"
  }, "\uD504\uB808\uC784\uBC84\uD37C\uB97C \uC7A0\uAE08 \uD574\uC81C\uD558\uC9C0 \uC54A\uC558\uC744 \uB54C \uD45C\uC2DC\uB418\uB294 Windows \uB300\uD654 \uC0C1\uC790"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCF58\uC194 \uD504\uB85C\uADF8\uB7A8\uC5D0\uC11C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC624\uB958 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/simulator/console-unlock-framebuffer.png",
    mdxType: "Figure"
  }, "\uD504\uB808\uC784\uBC84\uD37C\uB97C \uC7A0\uAE08 \uD574\uC81C\uD558\uC9C0 \uC54A\uC558\uC744 \uB54C \uCD9C\uB825\uB418\uB294 \uCF58\uC194 \uBA54\uC2DC\uC9C0"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "simulating-hardware-framebuffer-with-a-different-size-than-the-display"
  }), `\uD06C\uAE30\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uB2E4\uB978 \uD558\uB4DC\uC6E8\uC5B4 \uD504\uB808\uC784 \uBC84\uD37C \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uC124\uC815\uC5D0\uC11C\uB294 \uB514\uC2A4\uD50C\uB808\uC774 \uD06C\uAE30\uAC00 \uC2E4\uC81C \uD558\uB4DC\uC6E8\uC5B4 \uD504\uB808\uC784 \uBC84\uD37C\uBCF4\uB2E4 \uC791\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBB38\uC81C\uB294 \uC2DC\uBBAC\uB808\uC774\uC158\uC5D0\uC11C \uCC98\uB9AC\uD560 \uC218 \uC788\uC73C\uBA70, touchgfx_generic_init()\uB97C \uD638\uCD9C\uD55C \uD6C4 simulator/main.cpp \uD30C\uC77C\uC5D0\uC11C \uBC14\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `touchgfx_generic_init()\uB85C \uC804\uB2EC\uB418\uB294 \uAC00\uB85C\uC640 \uC138\uB85C\uAC00 \uB514\uC2A4\uD50C\uB808\uC774\uC640 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD06C\uAE30\uB97C \uC815\uC758\uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD558\uB4DC\uC6E8\uC5B4 \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD06C\uAE30\uAC00 \uB2E4\uB978 \uACBD\uC6B0\uC5D0\uB294 touchgfx_generic_init() \uD638\uCD9C \uD6C4 setFrameBufferSize()\uB97C \uD638\uCD9C\uD558\uC5EC \uC2E4\uC81C \uD504\uB808\uC784 \uBC84\uD37C\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 SIM_WIDTH=800\uC774\uACE0, SIM_HEIGHT==480\uC778 \uACBD\uC6B0\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC9C0\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::HAL& hal = touchgfx::touchgfx_generic_init<touchgfx::HALSDL2>(dma, lcd, tc, SIM_WIDTH, SIM_HEIGHT, 0, 0);
hal.setFrameBufferSize(832, 480); // Hardware framebuffer is wider
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);