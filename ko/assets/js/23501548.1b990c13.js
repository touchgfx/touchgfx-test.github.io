"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6547],{

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

/***/ 37793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88678);


const icon = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  viewBox: "0 0 12 16"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
}));
class Tip extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Highlight__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      color: "var(--highlight-color-tip)",
      header: "Tip",
      type: "tip",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (Tip);


/***/ }),

/***/ 60727:
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
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37793);
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70814);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31217);
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
  id: "installation",
  title: "Installation"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "introduction/installation",
  "id": "introduction/installation",
  "title": "Installation",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/installation.mdx",
  "sourceDirName": "introduction",
  "slug": "/introduction/installation",
  "permalink": "/4.20/ko/docs/introduction/installation",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "installation",
    "title": "Installation"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Prerequisites",
    "permalink": "/4.20/ko/docs/introduction/prerequisites"
  },
  "next": {
    "title": "Getting Started",
    "permalink": "/4.20/ko/docs/introduction/getting-started"
  }
};
const assets = {};






const toc = [{
  value: "STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C\uC758 \uD504\uB85C\uD1A0\uD0C0\uC774\uD551",
  id: "prototyping-on-stm32-evaluation-kits",
  level: 2
}, {
  value: "TouchGFX Designer \uC124\uCE58",
  id: "installing-touchgfx-designer",
  level: 3
}, {
  value: "STM32CubeProgrammer \uC124\uCE58",
  id: "installing-stm32cubeprogrammer",
  level: 3
}, {
  value: "STM32 ST-LINK \uC720\uD2F8\uB9AC\uD2F0 \uC124\uCE58",
  id: "installing-stm32-st-link-utility",
  level: 3
}, {
  value: "\uC790\uCCB4 \uC81C\uC791 \uC81C\uD488 \uAC1C\uBC1C",
  id: "custom-product-development",
  level: 2
}, {
  value: "STM32CubeMX\uC5D0 TouchGFX Generator \uC124\uCE58",
  id: "installing-touchgfx-generator-in-stm32cubemx",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD6C\uC131 \uC694\uC18C\uB97C \uD3EC\uD568\uD558\uB294 X-CUBE-TOUCHGFX zip \uD30C\uC77C\uC758 \uD615\uD0DC\uB85C \uBC30\uD3EC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Designer`), ` \xA0- Windows \uAE30\uBC18\uC758 GUI \uBE4C\uB354\uB97C \uD1B5\uD574 UI \uBE4C\uB4DC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Generator`), ` - STM32CubeMX\uB97C \uD1B5\uD574 \uB9DE\uCDA4\uD615 TouchGFX HAL \uC0DD\uC131`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("strong", {
    parentName: "li"
  }, `TouchGFX Engine`), `\xA0- UI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uB3D9\uD558\uB294 TouchGFX C++ \uD504\uB808\uC784\uC6CC\uD06C`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "prototyping-on-stm32-evaluation-kits"
  }), `STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C\uC758 \uD504\uB85C\uD1A0\uD0C0\uC774\uD551`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uB97C \uC0AC\uC6A9\uD574\uC11C STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C \uD504\uB85C\uD1A0\uD0C0\uC774\uD551\uC744 \uC2DC\uB3C4 \uD574\uBCF4\uB824\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#installing-touchgfx-designer"
  }), `TouchGFX Designer \uC124\uCE58`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.\xA0\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-touchgfx-designer"
  }), `TouchGFX Designer \uC124\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/embedded-software/x-cube-touchgfx.html",
    target: "_blank",
    mdxType: "Link"
  }, "ST.com \uACF5\uC2DD \uC6F9\uC0AC\uC774\uD2B8"), "\uC5D0\uC11C \uD558\uB4DC \uB4DC\uB77C\uC774\uBE0C\uB85C X-CUBE-TOUCHGFX\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uB2E4\uC74C \uC555\uCD95\uC744 \uD574\uC81C\uD558\uC2ED\uC2DC\uC624.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/get-software.png",
    mdxType: "Figure"
  }, "St.com\uC5D0\uC11C X-CUBE-TOUCHGFX \uB2E4\uC6B4\uB85C\uB4DC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC555\uCD95\uC774 \uD574\uC81C\uB41C \uD3F4\uB354\uB97C \uC5F4\uBA74 \uC544\uB798 \uACBD\uB85C\uC5D0 TouchGFX .msi \uC124\uCE58 \uD504\uB85C\uADF8\uB7A8\uC774 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Utilities\\PC_Software\\TouchGFXDesigner
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `.msi \uD30C\uC77C\uC744 \uB354\uBE14 \uD074\uB9AD\uD558\uBA74 \uC124\uCE58 \uD504\uB85C\uADF8\uB7A8\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4. \uC9C0\uCE68\uC5D0 \uB530\uB77C \uC124\uCE58 \uD504\uB85C\uC138\uC2A4\uB97C \uC644\uB8CC\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/designer-installation.png",
    mdxType: "Figure"
  }, "TouchGFX Designer \uC124\uCE58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX Designer \uB0B4\uC5D0\uC11C \uC9C1\uC811 \uBCF4\uB4DC\uB97C \uD50C\uB798\uC2F1\uD558\uB824\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB3C4\uAD6C\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeprog.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32CubeProgrammer")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stsw-link004.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32 ST-LINK \uC720\uD2F8\uB9AC\uD2F0")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-stm32cubeprogrammer"
  }), `STM32CubeProgrammer \uC124\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubeprog.html"
  }), `STM32CubeProgrammer download location`), `\uC5D0\uC11C STM32CubeProgrammer\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uD6C4, \uB2E4\uC6B4\uB85C\uB4DC\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.zip`), ` \uD30C\uC77C\uC758 \uC555\uCD95\uC744 \uD574\uC81C\uD558\uACE0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.exe`), ` \uC124\uCE58 \uD504\uB85C\uADF8\uB7A8 \uD30C\uC77C\uC744 \uC2E4\uD589\uD558\uC2ED\uC2DC\uC624. \uC9C0\uCE68\uC5D0 \uB530\uB77C \uC124\uCE58 \uD504\uB85C\uC138\uC2A4\uB97C \uC644\uB8CC\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/cube-programmer-installer.png",
    mdxType: "Figure"
  }, "TouchGFX Designer \uC124\uCE58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "TouchGFX Designer\uC640 Makefiles\uC5D0\uC11C \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uD50C\uB798\uC2F1\uD558\uAE30 \uC704\uD574 STM32CubeProgrammer\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uBC18\uB4DC\uC2DC \uAE30\uBCF8 \uC124\uCE58 \uC704\uCE58\uC5D0 \uC124\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4.\xA0 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-stm32-st-link-utility"
  }), `STM32 ST-LINK \uC720\uD2F8\uB9AC\uD2F0 \uC124\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stsw-link004.html"
  }), `STM32 ST-LINK \uC720\uD2F8\uB9AC\uD2F0 \uC704\uCE58`), `\uC5D0\uC11C STM32 ST-LINK \uC720\uD2F8\uB9AC\uD2F0\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uD6C4, \uB2E4\uC6B4\uB85C\uB4DC\uD55C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `.exe`), ` \uD30C\uC77C\uC744 \uC5F4\uC5B4\uC11C \uC9C0\uCE68\uC5D0 \uB530\uB77C \uC124\uCE58 \uD504\uB85C\uC138\uC2A4\uB97C \uC644\uB8CC\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/st-link-utility-installer.png",
    mdxType: "Figure"
  }, "STM32 ST-LINK \uC720\uD2F8\uB9AC\uD2F0 \uC124\uCE58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "TouchGFX Designer\uC640 Makefiles\uC5D0\uC11C \uB300\uC0C1 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uD50C\uB798\uC2F1\uD558\uAE30 \uC704\uD574 STM32 ST-LINK \uC720\uD2F8\uB9AC\uD2F0\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uBC18\uB4DC\uC2DC \uAE30\uBCF8 \uC124\uCE58 \uC704\uCE58\uC5D0 \uC124\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4. ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "custom-product-development"
  }), `\uC790\uCCB4 \uC81C\uC791 \uC81C\uD488 \uAC1C\uBC1C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `ST \uB514\uC2A4\uD50C\uB808\uC774 \uD0A4\uD2B8\uB098 \uC790\uCCB4\uC801\uC778 \uB9DE\uCDA4\uD615 STM32 \uAE30\uBC18 \uD50C\uB7AB\uD3FC\uC5D0\uC11C TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uB824\uB294 \uACBD\uC6B0\uC5D0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#installing-touchgfx-generator-in-stm32cubemx"
  }), `STM32CubeMX\uC5D0 TouchGFX Generator \uC124\uCE58`), ` \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "installing-touchgfx-generator-in-stm32cubemx"
  }), `STM32CubeMX\uC5D0 TouchGFX Generator \uC124\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "https://www.st.com/en/development-tools/stm32cubemx.html"
  }), `STM32CubeMX`), `\uB97C \uD1B5\uD574 X-CUBE-TOUCHGFX\uB97C \uC124\uCE58\uD558\uB824\uBA74 "Help" \uC544\uB798\uC758 "Manage Embedded Software Packages"\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `(\uC544\uB2C8\uBA74 Alt + U\uB97C \uB204\uB974\uC2ED\uC2DC\uC624)`), `).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/manage-packages.png",
    mdxType: "Figure"
  }, "Help -> Manage embedded software packages"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC6A9 \uD328\uD0A4\uC9C0\uC758 \uCD5C\uC2E0 \uBAA9\uB85D\uC744 \uBCF4\uB824\uBA74 'Refresh'\uB97C \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/refresh.png",
    mdxType: "Figure"
  }, "Refresh\uB97C \uD1B5\uD574 \uAC00\uC6A9 \uD328\uD0A4\uC9C0 \uC5C5\uB370\uC774\uD2B8"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"STMicroelectronics" \uD0ED\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uD654\uBA74\uC744 \uC2A4\uD06C\uB864\uD558\uC5EC 'X-CUBE-TOUCHGFX'\uB97C \uCC3E\uC740 \uB2E4\uC74C \uB178\uB4DC\uB97C \uD655\uC7A5\uD569\uB2C8\uB2E4. "TouchGFX Generator"\uC758 \uD655\uC778\uB780\uC744 \uC120\uD0DD\uD558\uACE0 "Install Now"\uB97C \uD074\uB9AD\uD569\uB2C8\uB2E4. \uC774\uC81C \uD328\uD0A4\uC9C0\uAC00 \uB2E4\uC6B4\uB85C\uB4DC\uB418\uACE0 \uB77C\uC774\uC120\uC2A4 \uACC4\uC57D\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/install-now.png",
    mdxType: "Figure"
  }, "TouchGFX Generator \uD328\uD0A4\uC9C0 \uCC3E\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB77C\uC774\uC120\uC2A4 \uACC4\uC57D\uC744 \uC77D\uACE0 \uB3D9\uC758\uD55C \uD6C4 "Finish"\uB97C \uD074\uB9AD\uD574\uC11C STM32CubeMX \uB0B4\uBD80\uC5D0 TouchGFX Generator\uB97C \uC124\uCE58\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/license-agreement.png",
    mdxType: "Figure"
  }, "\uB77C\uC774\uC120\uC2A4 \uACC4\uC57D \uC218\uB77D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `X-CUBE-TOUCHGFX \uBC30\uD3EC\uD310\uC740 \uC544\uB798 \uACBD\uB85C\uB85C \uC555\uCD95\uC774 \uD574\uC81C\uB429\uB2C8\uB2E4.\xA0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/introduction/installation/package-location.png",
    mdxType: "Figure"
  }, "X-CUBE-TOUCHGFX \uD328\uD0A4\uC9C0\uC758 \uC704\uCE58"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);