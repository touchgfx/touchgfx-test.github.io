"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6174],{

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

/***/ 64843:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Figure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44035);
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82985);
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
  id: "video",
  title: "MJPEG Video"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/video",
  "id": "development/ui-development/touchgfx-engine-features/video",
  "title": "MJPEG Video",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/video.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/video",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/video",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "video",
    "title": "MJPEG Video"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uC5B8\uC5B4 \uBC0F \uBB38\uC790",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"
  },
  "next": {
    "title": "UI Components",
    "permalink": "/4.20/ko/docs/category/ui-components"
  }
};
const assets = {};



const toc = [{
  value: "MJPEG \uBE44\uB514\uC624",
  id: "mjpeg-video",
  level: 2
}, {
  value: "TouchGFX\uC5D0\uC11C \uBE44\uB514\uC624 \uC0AC\uC6A9\uD558\uAE30",
  id: "using-video-with-touchgfx",
  level: 2
}, {
  value: "TouchGFX \uD504\uB85C\uC81D\uD2B8\uC758 \uBE44\uB514\uC624 \uD30C\uC77C",
  id: "video-files-in-a-touchgfx-project",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD55C \uBE44\uB514\uC624 \uD30C\uC77C \uC0AC\uC6A9",
  id: "using-video-files-from-user-code",
  level: 3
}, {
  value: "\uBE44\uB514\uC624\uAC00 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uB294 \uAC1C\uBC1C \uD0A4\uD2B8 \uBAA9\uB85D",
  id: "list-of-video-enabled-development-kits",
  level: 2
}, {
  value: "MJPEG AVI \uD30C\uC77C \uC0DD\uC131\uD558\uAE30",
  id: "creating-mjpeg-avi-files",
  level: 2
}, {
  value: "FFMPEG \uC0AC\uC6A9\uD558\uAE30",
  id: "using-ffmpeg",
  level: 3
}, {
  value: "\uB514\uCF54\uB529 \uC804\uB7B5",
  id: "decoding-strategies",
  level: 2
}, {
  value: "Direct To Frame Buffer",
  id: "direct-to-frame-buffer",
  level: 3
}, {
  value: "Dedicated Buffer",
  id: "dedicated-buffer",
  level: 3
}, {
  value: "Double Buffer",
  id: "double-buffer",
  level: 3
}, {
  value: "\uBE44\uB514\uC624 \uD504\uB808\uC784 \uC18D\uB3C4\uC640 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uD504\uB808\uC784 \uC18D\uB3C4",
  id: "video-frame-rate-and-user-interface-frame-rate",
  level: 3
}, {
  value: "\uAD00\uB828 \uC139\uC158",
  id: "related-articles",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 4.18 \uBC84\uC804\uBD80\uD130 MJPEG \uBE44\uB514\uC624 \uC0AC\uC6A9\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uBE44\uB514\uC624\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC0DD\uB3D9\uAC10 \uB118\uCE58\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAC1C\uBC1C\uD558\uAC70\uB098, \uC9E7\uC740 \uC9C0\uCE68 \uB610\uB294 \uC0AC\uC6A9\uC790 \uAC00\uC774\uB4DC\uB97C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624\uB294 Video \uC704\uC82F\uC744 \uD1B5\uD574 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4. \uC774 \uC704\uC82F\uC740 TouchGFX Designer\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC73C\uBA70, \uB2E4\uB978 \uC704\uC82F\uC73C\uB85C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uCD94\uAC00\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "60%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/designer-1.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC5D0\uC11C Video \uC704\uC82F\uC744 \uC0AC\uC6A9\uD558\uB294 \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uC5D0\uC11C \uBE44\uB514\uC624\uB97C \uB514\uCF54\uB529\uD558\uB824\uBA74 \uC774\uB97C \uC9C0\uC6D0\uD558\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uAC00 \uCD94\uAC00\uB85C \uD544\uC694\uD569\uB2C8\uB2E4. TouchGFX Generator\uC5D0\uC11C \uBE44\uB514\uC624 \uC9C0\uC6D0\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uC774\uB7EC\uD55C \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC190\uC27D\uAC8C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX Board Setup\uC5D0\uC11C \uBE44\uB514\uC624\uAC00 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC73C\uBA74(\uC544\uB798 \uBAA9\uB85D \uCC38\uC870) Run Target(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F6`), `)\uC744 \uB20C\uB7EC \uD0C0\uAC9F\uC5D0\uC11C \uBE44\uB514\uC624\uB97C \uC27D\uAC8C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/stm32f746-1.png",
    mdxType: "Figure"
  }, "STM32F746Discovery\uC5D0\uC11C \uBE44\uB514\uC624 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD558\uB294 \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD0C0\uAC9F \uCF54\uB4DC\uC5D0 \uBE44\uB514\uC624 \uC9C0\uC6D0\uC774 \uC5C6\uC73C\uBA74 \uCEF4\uD30C\uC77C \uB610\uB294 \uB9C1\uCEE4 \uC624\uB958 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "mjpeg-video"
  }), `MJPEG \uBE44\uB514\uC624`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG \uBE44\uB514\uC624\uB294 \uB2E4\uC218\uC758 JPEG \uC774\uBBF8\uC9C0(\uD504\uB808\uC784)\uAC00 \uCEE8\uD14C\uC774\uB108 \uD30C\uC77C(.avi)\uB85C \uC555\uCD95\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. JPEG \uD504\uB808\uC784\uC740 \uC555\uCD95\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uBC14\uB85C \uBCF5\uC0AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB514\uC2A4\uD50C\uB808\uC774\uC5D0 \uD45C\uC2DC\uD558\uB824\uBA74 \uBA3C\uC800 \uAC01 \uD504\uB808\uC784\uC758 \uC555\uCD95\uC744 RGB \uD615\uC2DD(16 \uB610\uB294 24\uBE44\uD2B8)\uC73C\uB85C \uD574\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC555\uCD95 \uD574\uC81C\uB294 \uACC4\uC0B0 \uC6A9\uB7C9\uC744 \uB9CE\uC774 \uCC28\uC9C0\uD558\uAE30 \uB54C\uBB38\uC5D0 RGB \uBE44\uD2B8\uB9F5\uC744 \uC0AC\uC6A9\uD560 \uB54C\uBCF4\uB2E4 \uC131\uB2A5(\uCD08\uB2F9 \uD504\uB808\uC784 \uC218)\uC774 \uD06C\uAC8C \uC800\uD558\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC JPEG \uC555\uCD95\uC740 \uB370\uC774\uD130\uC758 \uD06C\uAE30\uB97C \uD06C\uAC8C \uC904\uC77C \uC218 \uC788\uB2E4\uB294 \uC810\uC5D0\uC11C \uC720\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uC2A4\uD06C\uB9B0\uC0F7\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uBE44\uB514\uC624\uB294 240 x 135 \uD53D\uC140\uC785\uB2C8\uB2E4. \uC774\uB294 16\uBE44\uD2B8 RGB \uD615\uC2DD\uC5D0\uC11C \uAC01 \uD504\uB808\uC784\uC774 240 x 135 x 2 \uBC14\uC774\uD2B8, \uC989 64.800\uBC14\uC774\uD2B8\uB97C \uCC28\uC9C0\uD55C\uB2E4\uB294 \uB73B\uC785\uB2C8\uB2E4. \uC774 \uBE44\uB514\uC624\uC758 \uD504\uB808\uC784 \uC218\uB294 178\uAC1C(\uC57D 7\uCD08 \uBD84\uB7C9)\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBE44\uD2B8\uB9F5\uC73C\uB85C \uC800\uC7A5\uB418\uB294 \uCD1D \uBE44\uB514\uC624 \uD06C\uAE30\uB294 178 x 64,800\uBC14\uC774\uD2B8, \uC989 11,534,400\uBC14\uC774\uD2B8\uC785\uB2C8\uB2E4. MJPEG AVI \uD30C\uC77C\uC758 \uC6A9\uB7C9\uC740 1,242,282\uBC14\uC774\uD2B8\uB85C, \uBE44\uD2B8\uB9F5 \uC6A9\uB7C9\uC758 10.7%\uC5D0 \uBD88\uACFC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG \uBE44\uB514\uC624 \uD30C\uC77C\uC740 \uD06C\uAE30\uAC00 \uC791\uAE30 \uB54C\uBB38\uC5D0 \uC791\uC740 \uBE44\uB514\uC624 \uC2DC\uD000\uC2A4\uC5D0 \uD2B9\uD788 \uC720\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD06C\uAE30\uAC00 \uAC10\uC18C\uD558\uBA74\uC11C \uC555\uCD95 \uC544\uD2F0\uD329\uD2B8(\uC624\uB958)\uB3C4 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uB3D9\uC601\uC0C1\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uC624\uB958\uAC00 \uD754\uD788 \uC6A9\uC778\uB418\uC9C0\uB9CC \uACE0\uB300\uBE44 \uADF8\uB798\uD53D\uC5D0\uC11C\uB294 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 STM32 \uB9C8\uC774\uD06C\uB85C\uCEE8\uD2B8\uB864\uB7EC\uB294 JPEG \uC774\uBBF8\uC9C0\uC5D0 \uB300\uD55C \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uB514\uCF54\uB529\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4(\uC608: STM32F769 \uB610\uB294 STM32H750). \uB355\uBD84\uC5D0 JPEG \uB514\uCF54\uB529 \uC18D\uB3C4\uAC00 \uBE68\uB77C\uC838\uC11C \uAC00\uB2A5\uD55C \uBE44\uB514\uC624 \uD504\uB808\uC784 \uC18D\uB3C4\uB3C4 \uC99D\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `JPEG \uD504\uB808\uC784 \uB514\uCF54\uB529\uC740 16ms\uB97C \uC27D\uAC8C \uB118\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4(MCU \uC18D\uB3C4\uC640 \uBE44\uB514\uC624 \uD574\uC0C1\uB3C4\uC5D0 \uB530\uB77C \uB2E4\uB984). \uC774 \uB9D0\uC740 \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 MJPEG \uBE44\uB514\uC624\uC758 \uB514\uCF54\uB529 \uC18D\uB3C4\uAC00 \uC77C\uBC18\uC801\uC778 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uD504\uB808\uC784 \uC18D\uB3C4\uBCF4\uB2E4 \uB290\uB9AC\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC77C\uBD80 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uC804\uCCB4 \uD504\uB808\uC784 \uC18D\uB3C4\uAC00 \uB514\uCF54\uB529 \uC18D\uB3C4\uB85C \uB5A8\uC5B4\uC9C0\uB354\uB77C\uB3C4 \uAD1C\uCC2E\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uBE44\uB514\uC624\uAC00 \uC608\uB97C \uB4E4\uC5B4 20fps\uC758 \uC18D\uB3C4\uB85C \uC2E4\uD589\uB418\uB354\uB77C\uB3C4 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC758 \uD504\uB808\uC784 \uC18D\uB3C4\uB294 60fps\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uB3C4 \uC788\uB294\uB370, \uBE44\uB514\uC624 \uC606\uC5D0 \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uB41C \uD504\uB85C\uADF8\uB808\uC2A4 \uC6D0\uC774 \uC788\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. \uC774 \uC6D0\uC740 \uBE44\uB514\uC624\uAC00 \uC624\uC9C1 20fps\uC758 \uC18D\uB3C4\uB85C \uC0C8 \uD504\uB808\uC784\uC744 \uD45C\uC2DC\uD558\uB354\uB77C\uB3C4 \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC \uC18D\uB3C4\uB294 60fps\uB97C \uC720\uC9C0\uD560 \uB54C \uAC00\uC7A5 \uC801\uD569\uD558\uAC8C \uBCF4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C \uC5B8\uAE09\uD55C STM32F746 \uC608\uB294 \uAC01 JPEG \uD504\uB808\uC784\uC744 \uBAA8\uB450 \uB514\uCF54\uB529\uD560 \uB54C\uAE4C\uC9C0 18~20ms\uAC00 \uAC78\uB9BD\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-video-with-touchgfx"
  }), `TouchGFX\uC5D0\uC11C \uBE44\uB514\uC624 \uC0AC\uC6A9\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C\uB294 \uBE44\uB514\uC624\uB97C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uC190\uC27D\uAC8C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC138 \uAC00\uC9C0\uB9CC \uC788\uC73C\uBA74 \uB429\uB2C8\uB2E4. Video \uC704\uC82F, VideoController \uADF8\uB9AC\uACE0 MJPEG \uBE44\uB514\uC624 \uD30C\uC77C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Video \uC704\uC82F\uC740 \uC5EC\uB290 \uC704\uC82F\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uBE44\uB514\uC624 \uCEE8\uD2B8\uB864\uB7EC\uB294 \uC804\uCCB4 TouchGFX \uD658\uACBD\uC744 \uAD6C\uC131\uD558\uB294 \uB85C\uC6B0 \uB808\uBCA8 \uC18C\uD504\uD2B8\uC6E8\uC5B4(HAL, \uC6B4\uC601 \uCCB4\uC81C, \uB4DC\uB77C\uC774\uBC84 \uB4F1)\uC758 \uD55C \uBD80\uBD84\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/video-sw-architecture.png",
    mdxType: "Figure"
  }, "\uBE44\uB514\uC624 \uC704\uC82F\uACFC \uBE44\uB514\uC624 \uCEE8\uD2B8\uB864\uB7EC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uCEE8\uD2B8\uB864\uB7EC\uB294 MJPEG \uD30C\uC77C \uB514\uCF54\uB529\uACFC \uBC84\uD37C \uAD00\uB9AC\uB97C \uC81C\uC5B4\uD558\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uB294 \uBAA8\uB4E0 \uC2DC\uBBAC\uB808\uC774\uD130 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uBE44\uB514\uC624 \uCEE8\uD2B8\uB864\uB7EC\uB97C \uC790\uB3D9\uC73C\uB85C \uCD94\uAC00\uD569\uB2C8\uB2E4. \uC774\uC5D0 \uB530\uB77C Video \uC704\uC82F\uC744 \uCD94\uAC00\uD558\uACE0, \uBE44\uB514\uC624 \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uACE0, "Run Simulator"(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F5`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C \uBE44\uB514\uC624\uB97C \uC0AC\uC6A9\uD560 \uB54C\uB3C4 \uD0C0\uAC9F \uD504\uB85C\uC81D\uD2B8\uC5D0 \uBE44\uB514\uC624 \uCEE8\uD2B8\uB864\uB7EC(IAR, Keil, arm-gcc, CubeIDE)\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBE44\uB514\uC624 \uCEE8\uD2B8\uB864\uB7EC\uB294 \uC774\uBBF8 \uC77C\uBD80 TouchGFX Board Specification \uD328\uD0A4\uC9C0(\uC544\uB798 \uBAA9\uB85D \uCC38\uC870)\uC5D0 \uCD94\uAC00\uB418\uC5B4 \uC788\uC9C0\uB9CC \uC5B4\uB5A4 \uD504\uB85C\uC81D\uD2B8\uB4E0\uC9C0 TouchGFX Generator\uB97C \uC0AC\uC6A9\uD574 \uBE44\uB514\uC624 \uC9C0\uC6D0 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator User Guide`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD50C\uB7AB\uD3FC\uC5D0\uC11C \uBE44\uB514\uC624 \uAE30\uB2A5\uC774 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC73C\uBA74 Designer\uC5D0\uC11C \uBE44\uB514\uC624 \uC704\uC82F\uC744 \uC190\uC27D\uAC8C \uCD94\uAC00\uD558\uC5EC \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Designer\uC758 \uBE44\uB514\uC624 \uC704\uC82F \uC0AC\uC6A9 \uBC29\uBC95\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/video"
  }), `\uC5EC\uAE30`), `\uC5D0 \uC790\uC138\uD788 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-files-in-a-touchgfx-project"
  }), `TouchGFX \uD504\uB85C\uC81D\uD2B8\uC758 \uBE44\uB514\uC624 \uD30C\uC77C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uD30C\uC77C\uC744 TouchGFX Designer\uC5D0 \uCD94\uAC00\uD558\uBA74 .avi \uD30C\uC77C\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/vidoes`), ` \uD3F4\uB354\uB85C \uBCF5\uC0AC\uB429\uB2C8\uB2E4. \uCF54\uB4DC\uAC00 \uC0DD\uC131\uB418\uB294 \uACFC\uC815\uC5D0\uC11C \uBE44\uB514\uC624\uAC00 .bin \uD30C\uC77C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/bin`), `\uC5D0, \uADF8\uB9AC\uACE0 .o \uD30C\uC77C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/obj`), `\uC5D0 \uBCF5\uC0AC\uB429\uB2C8\uB2E4. .o \uD30C\uC77C\uACFC .bin \uD30C\uC77C\uC5D0\uB294 \uB3D9\uC77C\uD55C \uB370\uC774\uD130\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC9C0\uB9CC .o \uD30C\uC77C\uC740 ELF \uD615\uC2DD(\uC77C\uBD80 \uCEF4\uD30C\uC77C\uB7EC\uC640 IDE\uC5D0\uC11C \uC120\uD638\uD558\uB294 \uD615\uC2DD)\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB85C\uC81D\uD2B8 \uC5C5\uB370\uC774\uD130\uB294 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD560 \uB54C \uC2E4\uD589\uB418\uC5B4 \uBE44\uB514\uC624 \uD30C\uC77C\uC744 \uD0C0\uAC9F \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uBE44\uB514\uC624 \uD30C\uC77C\uC774 \uC2E4\uD589 \uD30C\uC77C\uC5D0 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC5B4\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD504\uB85C\uADF8\uB798\uBA38\uB294 \uB2E4\uB978 \uBE44\uB514\uC624\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), ` \uD3F4\uB354\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBE44\uB514\uC624\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0\uB3C4 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `generated/videos/include/videos/VideoDatabase.hpp`), ` \uD30C\uC77C\uC5D0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uCEF4\uD30C\uC77C\uB418\uB294 \uBE44\uB514\uC624\uC5D0 \uB300\uD55C \uC0C1\uC9D5\uC801 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `const uint32_t video_SampleVideo1_240x135_bin_length = 1242282;
#ifdef SIMULATOR
extern const uint8_t* video_SampleVideo1_240x135_bin_start;
#else
extern const uint8_t video_SampleVideo1_240x135_bin_start[];
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB7EC\uD55C \uC120\uC5B8 \uD30C\uC77C\uC740 \uBE44\uB514\uC624\uB97C \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB85C Video \uC704\uC82F\uC5D0 \uD560\uB2F9\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-video-files-from-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD55C \uBE44\uB514\uC624 \uD30C\uC77C \uC0AC\uC6A9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBD80 \uD504\uB85C\uC81D\uD2B8\uC758 \uACBD\uC6B0 TouchGFX Designer\uC5D0\uC11C \uBE44\uB514\uC624\uB97C \uC120\uD0DD\uD558\uB294 \uAC83\uB9CC\uC73C\uB85C\uB294 \uBD80\uC871\uD560 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC2DC\uC791\uD560 \uB54C \uC5EC\uB7EC \uAC00\uC9C0 \uBE44\uB514\uC624\uB97C \uC120\uD0DD\uD558\uB824\uB294 \uACBD\uC6B0\uB97C \uAC00\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uBE44\uB514\uC624 \uD30C\uC77C\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/myvideo-in-assets.png",
    mdxType: "Figure"
  }, "\uBE44\uB514\uC624\uB97C assets/videos\uC5D0 \uCD94\uAC00\uD55C \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), ` \uD3F4\uB354\uC5D0 \uCD94\uAC00\uB41C \uBE44\uB514\uC624 \uD30C\uC77C\uC740 \uCF54\uB4DC \uC0DD\uC131 \uC2DC(\uB610\uB294 \uC560\uC14B \uB9CC\uB4E4\uAE30 \uC2E4\uD589 \uC2DC) `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `VideoDatabase.hpp`), `\uC5D0 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `const uint32_t video_myVideo_bin_length = 1242282;
#ifdef SIMULATOR
extern const uint8_t* video_myVideo_bin_start;
#else
extern const uint8_t video_myVideo_bin_start[];
#endif
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC774\uB7EC\uD55C \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uC774\uB7EC\uD55C \uC120\uC5B8 \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD574 \uBE44\uB514\uC624 \uC704\uC82F\uC73C\uB85C \uC601\uC0C1\uC744 \uC7AC\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,12-14}",
    "{2-2,12-14}": true
  }), `#include <gui/screen1_screen/Screen1View.hpp>
#include <videos/VideoDatabase.hpp>

Screen1View::Screen1View()
{
}

void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();

    video.setVideoData(video_myVideo_bin_start, video_myVideo_bin_length);
    video.setWidthHeight(240, 136);
    video.play();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uBE44\uB514\uC624 \uB370\uC774\uD130\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBE44\uB514\uC624\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\uC5D0 \uCD94\uAC00\uD558\uC9C0 \uC54A\uACE0 \uC774\uB7EC\uD55C \uC5F0\uACB0\uC744 \uD53C\uD574\uC11C \uBE44\uB514\uC624\uB97C \uC678\uBD80 \uD50C\uB798\uC2DC\uC758 \uC804\uC6A9 \uC601\uC5ED\uC73C\uB85C \uC9C1\uC811 \uD50C\uB798\uC2F1\uD558\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uB2E4\uC74C\uACFC \uAC19\uC774 \uD50C\uB798\uC2DC \uC8FC\uC18C\uB97C \uC0AC\uC6A9\uD574 \uC8FC\uC18C\uC640 \uAE38\uC774\uB97C \uC804\uB2EC\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::setupScreen()
{
   ...
   video.setVideoData((const uint8_t*)0xA0200000, 1242282);
   ...
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "list-of-video-enabled-development-kits"
  }), `\uBE44\uB514\uC624\uAC00 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uB294 \uAC1C\uBC1C \uD0A4\uD2B8 \uBAA9\uB85D`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uC740 TouchGFX Designer\uC5D0\uC11C \uC81C\uACF5\uB418\uB294 TouchGFX Board Setup \uD328\uD0A4\uC9C0\uC5D0\uC11C \uBE44\uB514\uC624\uAC00 \uAE30\uBCF8\uC801\uC73C\uB85C \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uB294 \uAC1C\uBC1C \uD0A4\uD2B8\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F769Discovery(\uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uB514\uCF54\uB529)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32H750BDiscovery(\uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uB514\uCF54\uB529)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `STM32F746Discovery(\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAE30\uBC18 \uB514\uCF54\uB529)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uB978 \uAC1C\uBC1C \uD0A4\uD2B8\uB098 \uB9DE\uCDA4\uD615 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 TouchGFX Generator\uC5D0\uC11C \uBE44\uB514\uC624 \uC9C0\uC6D0 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "creating-mjpeg-avi-files"
  }), `MJPEG AVI \uD30C\uC77C \uC0DD\uC131\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624\uAC00 MJPEG AVI \uD30C\uC77C\uB85C \uC800\uC7A5\uB418\uB294 \uACBD\uC6B0\uB294 \uB9CE\uC9C0 \uC54A\uC740\uB370, \uADF8 \uC774\uC720\uB294 \uC774 \uD615\uC2DD\uC774 \uD754\uD788 \uC0AC\uC6A9\uB418\uB294 \uBE44\uB514\uC624 \uD615\uC2DD\uC774 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBCF4\uD1B5\uC740 TouchGFX \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574 \uBE44\uB514\uC624 \uD30C\uC77C\uC744 MJPEG \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC608\uB97C \uB4E4\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/FFmpeg"
  }), `FFMPEG`), `\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC27D\uAC8C \uBCC0\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774\uB098 \uC628\uB77C\uC778 \uC11C\uBE44\uC2A4\uB3C4 \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-ffmpeg"
  }), `FFMPEG \uC0AC\uC6A9\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `FFMPEG\uC5D0 \uD544\uC694\uD55C Windows \uBC14\uC774\uB108\uB9AC \uD30C\uC77C\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.gyan.dev/ffmpeg/builds/"
  }), `\uC5EC\uAE30`), `\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uD30C\uC77C\uC778 input.mov\uB97C MJPEG\uB85C \uBCC0\uD658\uD558\uB824\uBA74 \uB2E4\uC74C \uBA85\uB839\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -i input.mov -s 480x272 -vcodec mjpeg -qscale 1 -an output.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `MJPEG \uBE44\uB514\uC624\uB294 output.avi \uD30C\uC77C\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `assets/videos`), `\uB85C \uBCF5\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uACFC \uAC19\uC774 \uAC00\uB85C\uB97C \uD53D\uC140 \uC218(\uC5EC\uAE30\uC5D0\uC11C 480)\uB85C, \uADF8\uB9AC\uACE0 \uC138\uB85C\uB97C '-1'(\uB9C8\uC774\uB108\uC2A4 1)\uB85C \uC9C0\uC815\uD558\uC5EC \uBE44\uB514\uC624\uC758 \uC885\uD6A1\uBE44\uB97C \uC62C\uBC14\uB974\uAC8C \uC720\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -i input.mov -vf scale=480:-1 -vcodec mjpeg -qscale 1 -an output.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C -ss\uB97C \uC0AC\uC6A9\uD574 \uC2DC\uC791 \uC2DC\uAC04\uC744 \uC9C0\uC815\uD558\uACE0, -t \uB610\uB294 -to\uB97C \uC0AC\uC6A9\uD574 \uC9C0\uC18D \uC2DC\uAC04\uC774\uB098 \uC815\uC9C0 \uC2DC\uAC04\uC744 \uC9C0\uC815\uD558\uC5EC \uBE44\uB514\uC624 \uAD6C\uAC04\uC744 \uC808\uB2E8\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -ss 3 -i input.mov -t 3 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uB294:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `ffmpeg -ss 3 -i input.mov -to 5 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC635\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `-s`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uCD9C\uB825 \uBE44\uB514\uC624 \uD574\uC0C1\uB3C4\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-qscale`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1\uBD80\uD130 31\uAE4C\uC9C0(\uC88B\uC74C\uBD80\uD130 \uB098\uC068\uAE4C\uC9C0)\uC758 \uC2A4\uCF00\uC77C \uD488\uC9C8\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-an`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC624\uB514\uC624\uB97C \uC81C\uAC70\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-vf`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD544\uD130 \uADF8\uB798\uD504\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-ss`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC2DC\uC791 \uC2DC\uAC04(\uCD08)\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-t`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC9C0\uC18D \uC2DC\uAC04(\uCD08)\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `-to`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC815\uC9C0 \uC2DC\uAC04(\uCD08)\uC785\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "decoding-strategies"
  }), `\uB514\uCF54\uB529 \uC804\uB7B5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C \uC5B8\uAE09\uD55C \uAC83\uCC98\uB7FC TouchGFX\uC5D0\uC11C \uAC01 MJPEG \uD504\uB808\uC784\uC744 \uD504\uB808\uC784 \uBC84\uD37C\uB85C \uBCF4\uC5EC\uC8FC\uB824\uBA74 \uBA3C\uC800 JPEG\uC5D0\uC11C RGB\uB85C \uBCC0\uD658\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB514\uCF54\uB529\uC740 \uD544\uC694\uD560 \uB54C\uB9C8\uB2E4 \uBE60\uB974\uAC8C, \uD639\uC740 \uB2E4\uC74C \uD504\uB808\uC784\uC744 \uBE44\uB514\uC624 \uBC84\uD37C\uB85C \uBBF8\uB9AC \uB514\uCF54\uB529\uD558\uB294 \uBE44\uB3D9\uAE30 \uBC29\uC2DD\uC73C\uB85C\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB3D9\uAE30\uC2DD \uB514\uCF54\uB529\uC740 UI \uD0DC\uC2A4\uD06C\uAC00 \uC544\uB2CC 2\uCC28 \uD0DC\uC2A4\uD06C\uB85C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uACBD\uC6B0\uC5D0 \uB530\uB77C\uC11C \uB514\uCF54\uB529\uC744 UI \uD0DC\uC2A4\uD06C\uC758 \uADF8\uB9AC\uAC00 \uC791\uC5C5\uACFC \uBCD1\uB82C\uB85C \uC2E4\uD589\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uB294 \uC138 \uAC00\uC9C0 \uC804\uB7B5\uC774 \uC788\uB294\uB370, \uAC01\uAC01 \uC7A5\uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC804\uB7B5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `Direct To Frame Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD544\uC694\uD560 \uB54C\uB9C8\uB2E4 \uD604\uC7AC \uBE44\uB514\uC624 \uD504\uB808\uC784\uC744 \uD504\uB808\uC784 \uBC84\uD37C\uB85C \uBC14\uB85C \uB514\uCF54\uB529\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Dedicated Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB2E4\uC74C \uBE44\uB514\uC624 \uD504\uB808\uC784\uC744 \uBE44\uB514\uC624 \uBC84\uD37C\uB85C \uB514\uCF54\uB529\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uBE44\uB514\uC624 \uBC84\uD37C\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB85C \uBCF5\uC0AC\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Double Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB2E4\uC74C \uBE44\uB514\uC624 \uD504\uB808\uC784\uC744 2\uCC28 \uBE44\uB514\uC624 \uBC84\uD37C\uB85C \uB514\uCF54\uB529\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uB514\uCF54\uB529\uC774 \uC644\uB8CC\uB418\uBA74 \uBE44\uB514\uC624 \uBC84\uD37C\uB97C \uC2A4\uC640\uD551\uD569\uB2C8\uB2E4.`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Designer\uB294 \uC2DC\uBBAC\uB808\uC774\uD130 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD56D\uC0C1 Direct To Frame Buffer \uC804\uB7B5\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uD0C0\uAC9F\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC804\uB7B5\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator`), `\uC5D0\uC11C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC01 \uC804\uB7B5\uC5D0 \uB300\uD55C \uC124\uBA85\uC740 \uC544\uB798\uC5D0\uC11C \uC790\uC138\uD788 \uB2E4\uB8E8\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "direct-to-frame-buffer"
  }), `Direct To Frame Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Direct To Frame Buffer \uC804\uB7B5\uC740 TouchGFX \uC5D4\uC9C4\uC758 \uB80C\uB354\uB9C1 \uB2E8\uACC4(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/rendering#render"
  }), `\uB80C\uB354\uB9C1`), ` \uCC38\uC870)\uC5D0\uC11C JPEG \uD504\uB808\uC784\uC744 \uB514\uCF54\uB529\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/direct-decode.png",
    mdxType: "Figure"
  }, "\uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uBC14\uB85C \uB514\uCF54\uB529\uD558\uB294 \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5C5\uB370\uC774\uD2B8 \uB2E8\uACC4(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../../basic-concepts/rendering#update"
  }), `\uC5C5\uB370\uC774\uD2B8`), ` \uCC38\uC870)\uC5D0\uC11C \uBE44\uB514\uC624 \uC704\uC82F\uC774 \uB2E4\uC74C \uD504\uB808\uC784\uC73C\uB85C\uC758 \uC601\uC0C1 \uC774\uB3D9 \uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4. \uC774\uC5B4\uC9C0\uB294 \uB80C\uB354\uB9C1 \uB2E8\uACC4\uC5D0\uC11C JPEG \uD504\uB808\uC784\uC774 \uD55C \uC904\uC529 "\uB77C\uC778 \uBC84\uD37C"\uB85C \uB514\uCF54\uB529\uB429\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uD53D\uC140\uC774 \uD504\uB808\uC784 \uBC84\uD37C \uD615\uC2DD\uACFC \uB3D9\uC77C\uD558\uAC8C \uBCC0\uD658\uB418\uC5B4 \uD504\uB808\uC784 \uBC84\uD37C\uB85C \uBCF5\uC0AC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uC704\uC82F \uC704\uC5D0 \uB2E4\uB978 \uC704\uC82F\uC774 \uC788\uC73C\uBA74 \uB2E4\uC911 \uBE14\uB85D\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9AC\uAC8C \uB429\uB2C8\uB2E4(\uAC00\uC2DC \uC601\uC5ED\uC774 \uC9C1\uC0AC\uAC01\uD615\uC73C\uB85C \uBD84\uD560\uB428). \uAC01 \uBE14\uB85D\uC744 \uADF8\uB9AC\uAE30 \uC704\uD574\uC11C\uB294 \uBC18\uBCF5\uC801\uC778 \uC555\uCD95 \uC791\uC5C5\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC774\uC720\uB85C \uBC84\uD2BC\uACFC \uAC19\uC740 \uB2E4\uB978 UI \uC694\uC18C\uAC00 \uBE44\uB514\uC624 \uC704\uC5D0 \uC788\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C\uB294 \uB514\uCF54\uB529 \uC2DC\uAC04\uC774 \uB298\uC5B4\uB098\uAE30 \uB54C\uBB38\uC5D0 \uC774\uB7EC\uD55C \uC804\uB7B5\uC774 \uBD80\uC801\uD569\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC18\uBA74, \uCD94\uAC00\uB85C \uC0AC\uC6A9\uB418\uB294 \uBA54\uBAA8\uB9AC\uAC00 \uB9E4\uC6B0 \uC801\uB2E4\uB294 \uC7A5\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "dedicated-buffer"
  }), `Dedicated Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Dedicated Buffer, \uC989 \uB2E8\uC77C \uBC84\uD37C \uB514\uCF54\uB529 \uC804\uB7B5\uC740 \uBA3C\uC800 JPEG \uD504\uB808\uC784\uC744 \uC804\uC6A9 RGB \uBC84\uD37C\uB85C \uB514\uCF54\uB529\uD55C \uD6C4 \uB098\uC911\uC5D0 \uD574\uB2F9 \uBC84\uD37C\uC5D0\uC11C \uD504\uB808\uC784 \uBC84\uD37C\uB85C \uBCF5\uC0AC\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/single-buf-decode.png",
    mdxType: "Figure"
  }, "\uBCC4\uB3C4\uC758 \uBC84\uD37C\uB85C \uB514\uCF54\uB529\uD558\uB294 \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC9C1\uC811 \uC804\uB7B5\uACFC \uB2EC\uB9AC \uC77C\uBC18\uC801\uC778 TouchGFX \uD0DC\uC2A4\uD06C\uAC00 \uC544\uB2CC \uBCC4\uB3C4\uC758 \uD0DC\uC2A4\uD06C\uC5D0\uC11C \uB514\uCF54\uB529\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uBE44\uB514\uC624 \uC704\uC82F\uC774 \uB2E4\uC74C \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uC2E4\uD589 \uC774\uBCA4\uD2B8(tick)\uC5D0 \uB300\uD55C \uC0C8 \uC601\uC0C1 \uD504\uB808\uC784\uC758 \uD45C\uC2DC \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C \uD6C4 \uB514\uCF54\uB529 \uD0DC\uC2A4\uD06C\uC5D0\uAC8C \uB2E4\uC74C \uD504\uB808\uC784\uC744 \uB514\uCF54\uB529\uD558\uB77C\uB294 \uC2E0\uD638\uB97C \uC804\uC1A1\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB514\uCF54\uB529 \uACFC\uC815\uC5D0\uC11C\uB294 \uBE44\uB514\uC624 \uBC84\uD37C\uAC00 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uADF8\uB824\uC9C0\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4(\uBD80\uBD84\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB428). \uB514\uCF54\uB529\uC774 \uC2E4\uD589\uB418\uB294 \uB3D9\uC548\uC5D0\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uCC28\uB2E8\uB418\uC5B4 \uBE44\uB514\uC624 \uC704\uC82F\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uC9C0 \uBABB\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uADF8\uB9AC\uAE30 \uC791\uC5C5\uC774 \uBA3C\uC800 \uC644\uB8CC\uB418\uC5B4\uC57C \uC774\uC5B4\uC11C \uACC4\uC18D\uB429\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uBE44\uB514\uC624\uB97C \uB2E4\uC2DC \uADF8\uB824\uC57C \uD560 \uD544\uC694\uAC00 \uC5C6\uC5B4\uC9C0\uBA74 \uC815\uC0C1\uC801\uC73C\uB85C \uACC4\uC18D \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C8 \uBE44\uB514\uC624\uAC00 \uC644\uC804\uD788 \uB514\uCF54\uB529\uB418\uBA74 \uBE44\uB514\uC624\uB97C \uD504\uB808\uC784 \uBC84\uD37C\uB85C \uB80C\uB354\uB9C1\uD558\uB294 \uBE44\uC6A9\uC774 \uBE44\uD2B8\uB9F5\uC744 \uADF8\uB9AC\uB294 \uBE44\uC6A9(\uB0AE\uC74C)\uACFC \uAC19\uC544\uC9D1\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774\uB7EC\uD55C \uC804\uB7B5\uC5D0\uC11C\uB294 \uBC84\uD2BC\uC774\uB098 \uD14D\uC2A4\uD2B8\uB97C \uBE44\uB514\uC624 \uC704\uC5D0 \uCD94\uAC00\uD558\uB354\uB77C\uB3C4 \uBB38\uC81C\uAC00 \uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uB9CC \uD0DC\uC2A4\uD06C\uC640 \uBE44\uB514\uC624 \uBC84\uD37C\uC5D0\uC11C \uBA54\uBAA8\uB9AC\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uB294 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "double-buffer"
  }), `Double Buffer`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Double Buffer \uB514\uCF54\uB529 \uC804\uB7B5\uC5D0\uB294 RGB \uBC84\uD37C\uAC00 2\uAC1C \uC788\uC2B5\uB2C8\uB2E4. \uB514\uCF54\uB529\uC740 \uB450 \uBC84\uD37C \uC911 \uD558\uB098\uB85C \uC2E4\uD589\uB418\uB294 \uBC18\uBA74 \uB098\uBA38\uC9C0 RGB \uBC84\uD37C\uC5D0\uC11C\uB294 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0 \uB300\uD55C \uB80C\uB354\uB9C1\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/double-buf-decode.png",
    mdxType: "Figure"
  }, "\uBE44\uB514\uC624 \uBC84\uD37C 2\uAC1C\uB85C \uB514\uCF54\uB529\uB418\uB294 \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB808\uC784\uC774 \uB514\uCF54\uB529\uB418\uBA74 \uB514\uCF54\uB529 \uD0DC\uC2A4\uD06C\uB294 UI\uAC00 \uD574\uB2F9 \uBE44\uB514\uC624 \uBC84\uD37C\uB97C \uD45C\uC2DC\uD558\uACE0 \uC774\uC804 \uBC84\uD37C\uB97C \uD574\uC81C\uD560 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uBC84\uD37C\uB97C \uBCC0\uACBD\uD558\uC790\uB9C8\uC790 \uB2E4\uC74C \uD504\uB808\uC784\uC5D0 \uB300\uD55C \uB514\uCF54\uB529\uC774 \uC2DC\uC791\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uB9CC \uC774 \uC804\uB7B5\uC5D0\uC11C\uB294 \uC774\uC804 \uC804\uB7B5\uC5D0 \uBE44\uD574 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC774 \uB450 \uBC30\uAC00 \uB41C\uB2E4\uB294 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "video-frame-rate-and-user-interface-frame-rate"
  }), `\uBE44\uB514\uC624 \uD504\uB808\uC784 \uC18D\uB3C4\uC640 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uD504\uB808\uC784 \uC18D\uB3C4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB514\uCF54\uB529 \uC804\uB7B5\uB9C8\uB2E4 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uD504\uB808\uC784 \uC18D\uB3C4\uC5D0 \uBBF8\uCE58\uB294 \uC601\uD5A5\uC774 \uB2E4\uB985\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uD504\uB808\uC784 \uC18D\uB3C4\uB780 \uD504\uB808\uC784 \uBC84\uD37C\uC5D0\uC11C \uCD08\uB2F9 \uC0DD\uC131\uB418\uB294 (\uC5EC\uB7EC) \uD504\uB808\uC784 \uC218\uB97C \uB9D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Direct to Frame Buffer \uC804\uB7B5\uC5D0\uC11C\uB294 \uBE44\uB514\uC624\uC758 \uB514\uCF54\uB529 \uC18D\uB3C4\uAC00 \uD6A8\uACFC\uC801\uC778 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uD504\uB808\uC784 \uC18D\uB3C4\uC5D0 \uC190\uC27D\uAC8C \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 JPEG \uD504\uB808\uC784 \uD558\uB098\uB97C \uB514\uCF54\uB529\uD558\uB294 \uB370 28ms\uAC00 \uAC78\uB9AC\uB294\uB370, \uC5EC\uAE30\uC11C \uBE44\uB514\uC624 \uD504\uB808\uC784\uC744 \uCD08\uB2F9 20\uAC1C\uC529(20fps) \uD45C\uC2DC\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC2E4\uC81C\uB85C \uCD1D \uB514\uCF54\uB529 \uC2DC\uAC04\uC740 28ms x 20/s, \uC989 560ms/s\uAC00 \uB429\uB2C8\uB2E4.  20fps\uB294 60fps\uC5D0\uC11C 1/3\uD504\uB808\uC784\uB9C8\uB2E4 \uC0C8\uB86D\uAC8C \uC2DC\uC791\uB418\uB294 \uBE44\uB514\uC624 \uD504\uB808\uC784\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C 1/3 UI \uD504\uB808\uC784\uB9C8\uB2E4 \uC0C8 \uBE44\uB514\uC624 \uD504\uB808\uC784\uC744 \uD45C\uC2DC\uD558\uB294 \uC148\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB514\uCF54\uB529 \uC2DC\uAC04\uC774 \uB80C\uB354\uB9C1 \uB2E8\uACC4\uC5D0 \uD3EC\uD568\uB418\uAE30 \uB54C\uBB38\uC5D0 \uD574\uB2F9 \uD504\uB808\uC784\uC744 \uB80C\uB354\uB9C1\uD558\uB294 \uB370 28ms+ \uB098\uBA38\uC9C0 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uB80C\uB354\uB9C1 \uC2DC\uAC04(\uC608: 2ms)\uC774 \uAC78\uB9BD\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uCD1D \uD504\uB808\uC784 \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC774 30ms\uC774\uACE0, 1 tick\uC774 \uC9C0\uB0AC\uC9C0\uB9CC \uB2E4\uC74C tick\uC744 \uC704\uD55C \uC0C8\uB85C\uC6B4 \uD504\uB808\uC784\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uD504\uB808\uC784\uC5D0\uC11C\uB294 \uBE44\uB514\uC624\uB97C \uB514\uCF54\uB529\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uB80C\uB354\uB9C1 \uC18D\uB3C4\uAC00 \uB370 16ms\uB97C \uB118\uC9C0 \uC54A\uC544 \uC81C\uD55C \uC2DC\uAC04\uC744 \uB118\uAE30\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uD6C4 \uB124 \uBC88\uC9F8 tick\uC5D0\uC11C \uB450 \uBC88\uC9F8 \uBE44\uB514\uC624 \uD504\uB808\uC784\uC5D0 \uB300\uD55C \uB514\uCF54\uB529\uC744 \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/direct-video-20fps.png",
    mdxType: "Figure"
  }, "20fps \uBE44\uB514\uC624"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uBE44\uB514\uC624 \uD504\uB808\uC784 \uC18D\uB3C4\uB294 20fps\uC774\uACE0, \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4 \uD504\uB808\uC784 \uC18D\uB3C4\uB294 40\uC785\uB2C8\uB2E4(60 \uC774\uD6C4\uBD80\uD130 \uAC00\uB2A5\uD568).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uACB0\uACFC\uC801\uC73C\uB85C \uBE44\uB514\uC624 \uB514\uCF54\uB529\uC774 \uD504\uB808\uC784 \uC18D\uB3C4\uB97C \uC81C\uD55C\uD558\uAE30 \uB54C\uBB38\uC5D0 60fps\uB85C\uB294 \uB2E4\uB978 UI \uC694\uC18C\uB97C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD558\uC9C0 \uBABB\uD558\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Double Buffer \uB514\uCF54\uB529 \uC804\uB7B5\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uBB38\uC81C\uB97C \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uD56D\uC0C1 \uCD5C\uC2E0 \uD504\uB808\uC784\uC73C\uB85C \uBE44\uB514\uC624 \uBC84\uD37C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB514\uCF54\uB354 \uD0DC\uC2A4\uD06C\uAC00 \uAC00\uB2A5\uD55C \uACBD\uC6B0 \uC774 \uBC84\uD37C\uB97C \uB098\uBA38\uC9C0 \uBC84\uD37C(\uB2E4\uC74C \uD504\uB808\uC784 \uD3EC\uD568)\uC640 \uC2A4\uC640\uD551\uD560 \uC218 \uC788\uC5B4\uC11C \uB80C\uB354\uB9C1 \uC2A4\uB808\uB4DC\uAC00 \uB3D9\uC801\uC73C\uB85C \uADF8\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC2A4\uC640\uD551\uC744 \uB9C8\uCE58\uBA74 \uB514\uCF54\uB529 \uD0DC\uC2A4\uD06C\uAC00 \uB2E4\uC74C \uD504\uB808\uC784\uC758 \uB514\uCF54\uB529\uC744 \uBC14\uB85C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/video/double-video-20fps.png",
    mdxType: "Figure"
  }, "20fps \uBE44\uB514\uC624"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `UI \uD504\uB808\uC784 1\uACFC 2\uC5D0\uC11C\uB294 UI\uAC00 \uB514\uCF54\uB529\uB41C \uCCAB \uBC88\uC9F8 \uBE44\uB514\uC624 \uD504\uB808\uC784\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uD55C\uD3B8 \uB514\uCF54\uB354\uB294 \uD504\uB808\uC784 2\uB97C \uC0DD\uC131 \uC911\uC785\uB2C8\uB2E4. UI \uD504\uB808\uC784 3\uC5D0\uC11C\uB294 \uD504\uB808\uC784 2\uAC00 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uADF8\uB9BC\uC5D0\uB294 \uBCF4\uC774\uC9C0 \uC54A\uC9C0\uB9CC \uB514\uCF54\uB354\uAC00 \uB2E4\uC74C \uD504\uB808\uC784\uC758 \uB514\uCF54\uB529\uC744 \uC790\uC720\uB86D\uAC8C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB530\uB77C\uC11C \uBE44\uB514\uC624 \uB514\uCF54\uB529\uC774 \uC624\uC9C1 2 tick\uB9C8\uB2E4 \uC0C8 \uD504\uB808\uC784\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC9C0\uB9CC \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB294 \uD504\uB808\uC784\uB9C8\uB2E4 \uB2E4\uB978 \uC694\uC18C\uC640 \uD568\uAED8 \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "related-articles"
  }), `\uAD00\uB828 \uC139\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `As mentioned above the video support for target project is configured in the TouchGFX Generator. See the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../../touchgfx-hal-development/touchgfx-generator#video-decoding"
  }), `Generator User Guide`), ` for instructions.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE44\uB514\uC624 \uC704\uC82F\uC740 Designer\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Designer\uC758 \uBE44\uB514\uC624 \uC704\uC82F \uC0AC\uC6A9 \uBC29\uBC95\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/video"
  }), `\uC5EC\uAE30`), `\uC5D0 \uC790\uC138\uD788 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);