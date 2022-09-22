"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9797],{

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

/***/ 58890:
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
/* harmony import */ var _site_components_Caution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70814);
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
  id: "updating-to-a-new-touchgfx-version",
  title: "\uC0C8\uB85C\uC6B4 TouchGFX \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uAE30"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "miscellaneous/updating-to-a-new-touchgfx-version",
  "id": "miscellaneous/updating-to-a-new-touchgfx-version",
  "title": "\uC0C8\uB85C\uC6B4 TouchGFX \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uAE30",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/miscellaneous/updating-to-a-new-touchgfx-version.mdx",
  "sourceDirName": "miscellaneous",
  "slug": "/miscellaneous/updating-to-a-new-touchgfx-version",
  "permalink": "/4.20/ko/docs/miscellaneous/updating-to-a-new-touchgfx-version",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "updating-to-a-new-touchgfx-version",
    "title": "\uC0C8\uB85C\uC6B4 TouchGFX \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uAE30"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Miscellaneous",
    "permalink": "/4.20/ko/docs/category/miscellaneous-1"
  },
  "next": {
    "title": "\uC9C0\uC6D0 \uC694\uCCAD",
    "permalink": "/4.20/ko/docs/miscellaneous/getting-help"
  }
};
const assets = {};



const toc = [{
  value: "TouchGFX Generator \uC5C5\uB370\uC774\uD2B8",
  id: "update-touchgfx-generator",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD588\uC744 \uB54C \uC0DD\uC131\uB41C .touchgfx \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131 \uC2DC \uC0AC\uC6A9\uB418\uB294 TouchGFX\uC640 \uBC84\uC804\uC774 \uAC19\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uB2E4\uACE0 \uD5A5\uD6C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC1C\uBC1C\uD560 \uB54C \uD574\uB2F9\uD558\uB294 \uD2B9\uC815 \uBC84\uC804\uC758 TouchGFX\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uB294 \uD558\uC704 \uD638\uD658\uB418\uB3C4\uB85D \uC124\uACC4\uB418\uC5B4 \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 \uAC04\uB2E8\uD55C \uC808\uCC28\uB9CC \uB530\uB974\uBA74 \uC774\uC804 \uBC84\uC804\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uC0C8\uB85C\uC6B4 \uBC84\uC804\uC758 TouchGFX\uB97C \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C8\uB85C \uC124\uCE58\uD55C \uBC84\uC804\uC758 TouchGFX Designer\uB97C \uBA3C\uC800 \uC5F4\uACE0, \uCD5C\uADFC \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB610\uB294 Open \uB300\uD654\uC0C1\uC790\uB97C \uD1B5\uD574 \uC774\uC804 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC5F4\uBA74 \uB429\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD31D\uC5C5 \uCC3D\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup-4-17.png",
    mdxType: "Figure"
  }, "Update \uD31D\uC5C5 \uCC3D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, "\uD31D\uC5C5 \uCC3D\uC5D0\uB3C4 \uBA85\uC2DC\uB418\uC5B4 \uC788\uB4EF\uC774 \uC5C5\uB370\uC774\uD130\uB97C \uC2E4\uD589\uD558\uAE30 \uC804\uC5D0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD56D\uC0C1 \uBC31\uC5C5\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `'Yes'\uB97C \uB204\uB974\uBA74 \uC5C5\uB370\uC774\uD130\uAC00 \uC2DC\uC791\uB429\uB2C8\uB2E4. \uC5C5\uB370\uC774\uD130\uB97C \uB9C8\uCE58\uBA74 TouchGFX Designer\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uC5F4\uB9AC\uACE0, \uC774\uC81C \uC0C8\uB85C\uC6B4 \uBC84\uC804\uC744 \uBC14\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB4DC\uBB3C\uC9C0\uB9CC \uC0C8\uB85C\uC6B4 TouchGFX \uBC84\uC804\uC73C\uB85C \uC644\uC804\uD558\uAC8C \uC5C5\uB370\uC774\uD2B8\uD558\uB824\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC218\uB3D9\uC73C\uB85C \uBCC0\uACBD\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0C8 \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uBA74\uC11C \uCD94\uAC00\uC801\uC778 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "known-issues"
  }), `\uC54C\uB824\uC9C4 \uBB38\uC81C \uC139\uC158`), `\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "update-touchgfx-generator"
  }), `TouchGFX Generator \uC5C5\uB370\uC774\uD2B8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `X-Cube-TouchGFX-4.17.0\uC744 STM32CubeMX 6.2.1\uC5D0 \uC124\uCE58\uD55C \uD6C4, \uD639\uC740 \uB098\uC911\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../introduction/installation#installing-touchgfx-generator-in-stm32cubemx"
  }), `TouchGFX Generator\uB97C STM32CubeMX\uC5D0 \uC124\uCE58\uD558\uAE30`), `\uC5D0 \uB530\uB77C \uC124\uCE58\uD55C \uD6C4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC5F4\uACE0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Software Packs`), ` -> `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Select Components`), `\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4(\uD639\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `Alt + U\uB97C \uB204\uB985\uB2C8\uB2E4.`), `)`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.png",
    mdxType: "Figure"
  }, "Software Pack Component Selector"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Details and warnings \uCC3D\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD560 \uBC84\uC804\uC744 \uC120\uD0DD\uD558\uACE0 Try\uB97C \uB204\uB985\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 STM32CubeMX\uAC00 \uCD94\uC801 \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uC2E4\uD589\uD558\uACE0 \uADF8 \uACB0\uACFC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC774\uB54C \uC77C\uBD80 \uCC38\uC870 \uB9E4\uAC1C\uBCC0\uC218(refparameter)\uB294 \uC0C8 \uBC84\uC804\uC73C\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uC9C0 \uBABB\uD558\uAE30 \uB54C\uBB38\uC5D0 null \uAC12\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. Accept\uB97C \uC120\uD0DD\uD558\uC5EC \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uC800\uC7A5\uD55C \uB2E4\uC74C OK\uB97C \uB20C\uB7EC Software Pack Component Selector \uCC3D\uC744 \uB2EB\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.png",
    mdxType: "Figure"
  }, "Software Pack Component Selector : TouchGFX Generator\uC5D0 \uC0AC\uC6A9\uD560 \uB9E4\uAC1C\uBCC0\uC218 \uB9C8\uC774\uADF8\uB808\uC774\uC158"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C TouchGFX Generator\uAC00 \uC0C8 \uBC84\uC804\uC73C\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uB418\uACE0, \uBCC0\uACBD \uB0B4\uC6A9\uC774 .ioc \uD30C\uC77C\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. STM32CubeMX\uB97C \uC0AC\uC6A9\uD574 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uAE30 \uC804\uC5D0 \uBA3C\uC800 TouchGFX Generator\uC758 \uAD6C\uC131\uC744 \uAC80\uC99D\uD558\uC2ED\uC2DC\uC624. STM32CubeMX\uB97C \uC0AC\uC6A9\uD574 \uCF54\uB4DC \uC0DD\uC131\uC744 \uB9C8\uCCE4\uC73C\uBA74 \uC774\uC81C TouchGFX Designer\uB97C \uC5F4\uC5B4\uC11C UI\uB97C \uAC80\uC99D\uD558\uACE0 \uB098\uC11C TouchGFX Designer\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Caution__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "Caution"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uB9C8\uC774\uADF8\uB808\uC774\uC158\uC740 TouchGFX\uB97C \uC0C8 \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 2\uB2E8\uACC4 \uD504\uB85C\uC138\uC2A4\uC785\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574\uC11C\uB294 STM32CubeMX\uC640 TouchGFX Designer\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "STM32CubeMX\uC5D0\uC11C Generate Code \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 TouchGFX Generator\uC5D0\uC11C \uC81C\uACF5\uB418\uB294 C++ \uCF54\uB4DC\uAC00 \uB514\uC2A4\uD06C\uC5D0 \uBA3C\uC800 \uC791\uC131\uB429\uB2C8\uB2E4.")));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);