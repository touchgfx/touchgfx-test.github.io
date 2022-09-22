"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[606],{

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

/***/ 39487:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25026);


function FigureWithPoints(props) {
  const width = props.width;
  const height = props.height;
  const points_array = props.points || [];
  const imgSrc = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.imageSource);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "figure"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: imgSrc,
    target: "_blank"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    width,
    height,
    src: imgSrc
  })), points_array.map(function(point, index) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" },
      viewBox: "0 0 500 500"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      transform: "translate(" + point[0] + ", " + point[1] + ")"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      id: "p1",
      d: "M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",
      fill: "white",
      stroke: "black"
    }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
      x: "11.7",
      y: "9.5",
      "font-size": "x-small",
      "dominant-baseline": "middle",
      "text-anchor": "middle"
    }, index + 1)));
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.children)));
}
/* harmony default export */ __webpack_exports__["Z"] = (FigureWithPoints);


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

/***/ 84167:
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
/* harmony import */ var _site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39487);
/* harmony import */ var _site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82985);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93054);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39130);
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
  id: "tutorial-01",
  title: "\uD29C\uD1A0\uB9AC\uC5BC1: Example \uCCB4\uD5D8\uD558\uAE30"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-01",
  "id": "tutorials/tutorial-01",
  "title": "\uD29C\uD1A0\uB9AC\uC5BC1: Example \uCCB4\uD5D8\uD558\uAE30",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/tutorial-01.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-01",
  "permalink": "/4.20/ko/docs/tutorials/tutorial-01",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-01",
    "title": "\uD29C\uD1A0\uB9AC\uC5BC1: Example \uCCB4\uD5D8\uD558\uAE30"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Tutorials",
    "permalink": "/4.20/ko/docs/category/tutorials"
  },
  "next": {
    "title": "\uD29C\uD1A0\uB9AC\uC5BC2: \uC790\uC2E0\uB9CC\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131\uD558\uAE30",
    "permalink": "/4.20/ko/docs/tutorials/tutorial-02"
  }
};
const assets = {};





const toc = [{
  value: "\uC2DC\uC791\uD558\uAE30",
  id: "getting-started",
  level: 2
}, {
  value: "TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC0AC\uC6A9\uD574 Example \uC2E4\uD589\uD558\uAE30",
  id: "running-an-example-using-touchgfx-simulator",
  level: 2
}, {
  value: "\uD14C\uB9C8 \uC120\uD0DD\uD558\uAE30",
  id: "selecting-theme",
  level: 3
}, {
  value: "UI \uD15C\uD50C\uB9BF \uC120\uD0DD\uD558\uAE30",
  id: "selecting-a-ui-template",
  level: 3
}, {
  value: "\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uD558\uAE30",
  id: "creating-a-project",
  level: 3
}, {
  value: "TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589\uD558\uAE30",
  id: "running-touchgfx-simulator",
  level: 3
}, {
  value: "STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C Example \uC2E4\uD589\uD558\uAE30",
  id: "running-an-example-on-an-stm32-evaluation-kit",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC\uB97C \uB530\uB77C\uD558\uBA74\uC11C TouchGFX\uC758 \uAE30\uBCF8 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC138\uC694. TouchGFX\uB97C \uC124\uCE58\uD558\uB294 \uBC29\uBC95\uACFC TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130\uC640 STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C \uC81C\uACF5\uB41C Example\uC744 \uC2E4\uD589\uD558\uB294 \uBC29\uBC95\uC744 \uBC30\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "getting-started"
  }), `\uC2DC\uC791\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 TouchGFX Designer\uB97C \uC124\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4. TouchGFX\uC758 \uB2E4\uC6B4\uB85C\uB4DC \uBC0F \uC124\uCE58 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../introduction/installation"
  }), `\uC5EC\uAE30`), `\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "running-an-example-using-touchgfx-simulator"
  }), `TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC0AC\uC6A9\uD574 Example \uC2E4\uD589\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uB294 TouchGFX Designer\uB97C \uD1B5\uD574 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 UI Example\uC774 \uB9CE\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C Example\uB4E4\uC740 \uBAA8\uB450 \uD2B9\uC815 TouchGFX \uC8FC\uC81C \uB610\uB294 \uC704\uC82F\uC744 \uC911\uC2EC\uC73C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uD2B9\uC815 TouchGFX \uC8FC\uC81C\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uB294 \uB370 \uC720\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selecting-theme"
  }), `\uD14C\uB9C8 \uC120\uD0DD\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uB294 \uB77C\uC774\uD2B8\uC640 \uB2E4\uD06C, \uB450 \uAC00\uC9C0 \uC0C9\uC0C1 \uD14C\uB9C8\uAC00 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX Designer\uB97C \uCC98\uC74C \uC2DC\uC791\uD558\uBA74 \uD14C\uB9C8\uB97C \uC120\uD0DD\uD558\uB77C\uB294 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uD14C\uB9C8\uB294 \uB098\uC911\uC5D0 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[270, 172]],
    imageSource: "/img/tutorials/tutorial-01/select-theme.png",
    mdxType: "FigureWithPoints"
  }, "\uD14C\uB9C8 \uC120\uD0DD\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC6D0\uD558\uB294 \uD14C\uB9C8\uB97C \uC120\uD0DD\uD558\uACE0 "OK"\uB97C \uD074\uB9AD\uD569\uB2C8\uB2E4(1). \uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C\uB294 \uB77C\uC774\uD2B8 \uD14C\uB9C8\uB97C \uC0AC\uC6A9\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "selecting-a-ui-template"
  }), `UI \uD15C\uD50C\uB9BF \uC120\uD0DD\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Example\uC740 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uB294 \uCD9C\uBC1C\uC810\uC73C\uB85C, \uD639\uC740 \uCC38\uC870\uC6A9\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Example\uC740 TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC0AC\uC6A9\uD558\uB294 PC\uC5D0\uC11C, STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C, \uD639\uC740 \uB9DE\uCDA4\uD615 STM32 \uAE30\uBC18 \uD558\uB4DC\uC6E8\uC5B4\uC5D0\uC11C\uB3C4 \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Example\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD558\uB824\uBA74 \uC0C1\uB2E8 \uC67C\uCABD \uBAA8\uD241\uC774\uC5D0 \uC788\uB294 "Examples" \uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4.(1)`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[10, 30]],
    imageSource: "/img/tutorials/tutorial-01/select-examples.png",
    mdxType: "FigureWithPoints"
  }, "Example \uC5F4\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0 \uCC3D\uC774 \uC5F4\uB9AC\uBA74\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 UI Example\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[110, 50]],
    imageSource: "/img/tutorials/tutorial-01/all-examples.png",
    mdxType: "FigureWithPoints"
  }, "Example \uC120\uD0DD\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Animated Image Example"\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4(1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 200]],
    imageSource: "/img/tutorials/tutorial-01/animated-image-selected.png",
    mdxType: "FigureWithPoints"
  }, "Animated Image Example\uC774 \uC120\uD0DD\uB41C \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-a-project"
  }), `\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC900\uBE44\uB97C \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uC624\uB978\uCABD\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uC5D0 "MyAnimatedImageExample"\uC774\uB77C\uB294 \uC774\uB984\uC744 \uC9C0\uC815\uD588\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uC800\uC7A5\uD560 \uD3F4\uB354\uB97C \uC120\uD0DD\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4(1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Create"\uB97C \uD074\uB9AD\uD574\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 TouchGFX Designer\uC5D0\uC11C Example\uC744 \uAE30\uBC18\uC73C\uB85C \uC644\uC804\uD55C \uD504\uB85C\uC81D\uD2B8\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131 \uD504\uB85C\uC138\uC2A4\uB294 \uB2E4\uC6B4\uB85C\uB4DC \uC18D\uB3C4\uC5D0 \uB530\uB77C \uC18C\uC694\uB418\uB294 \uC2DC\uAC04\uC774 \uB2E4\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "running-touchgfx-simulator"
  }), `TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C TouchGFX Designer\uAC00 \uACB0\uD569\uB41C \uD504\uB85C\uC81D\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. Windows \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD558\uB824\uBA74 \uD558\uB2E8 \uC624\uB978\uCABD\uC5D0 \uC788\uB294 "Run Simulator" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uAC70\uB098(1), \uD639\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\uD0A4\uBCF4\uB4DC\uC5D0\uC11C`), ` F5\uB97C \uB204\uB985\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[463, 245]],
    imageSource: "/img/tutorials/tutorial-01/the-project-is-ready-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uD504\uB85C\uC81D\uD2B8 \uC900\uBE44 \uC644\uB8CC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0 \uC815\uC2DD Windows \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC81C\uBAA9 \uD45C\uC2DC\uC904\uC5D0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. "Start" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC Example\uACFC \uC778\uD130\uB799\uC158 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    width: "50%",
    imageSource: "/img/tutorials/tutorial-01/the-touchgfx-simulator-4-17.png",
    mdxType: "Figure"
  }, "TouchGFX \uC2DC\uBBAC\uB808\uC774\uD130"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC\uB97C \uC9C4\uD589\uD558\uAE30 \uC804\uC5D0 \uC6D0\uD55C\uB2E4\uBA74 \uBA87 \uAC00\uC9C0 Example\uC744 \uB354 \uCCB4\uD5D8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. File->New\uB97C \uD074\uB9AD\uD55C \uD6C4 \uC774\uC804\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uC0C8\uB85C\uC6B4 UI \uD15C\uD50C\uB9BF\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "running-an-example-on-an-stm32-evaluation-kit"
  }), `STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0\uC11C Example \uC2E4\uD589\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 STM32F746-Disco \uBCF4\uB4DC\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD558\uB294 \uBC29\uBC95\uACFC \uD574\uB2F9 \uBCF4\uB4DC\uC5D0\uC11C TouchGFX Example 1\uAC1C\uB97C \uC2E4\uD589\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uB9CC\uC57D STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uAC00 \uC5C6\uB2E4\uBA74 \uC774 \uB2E8\uACC4\uB294 \uAC74\uB108\uB6F0\uC5B4\uB3C4 \uC88B\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 SMT32 \uD3C9\uAC00 \uD0A4\uD2B8\uB97C \uAC00\uC9C0\uACE0 \uC788\uB2E4\uBA74 \uC9C0\uC6D0\uB418\uB294 \uBCF4\uB4DC \uBAA9\uB85D\uC5D0\uC11C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uB294 \uB2E4\uC591\uD55C STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uC5D0 \uB9DE\uCDB0 \uC0AC\uC804 \uAC1C\uBC1C\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF \uBAA9\uB85D\uC774 \uD568\uAED8 \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD15C\uD50C\uB9BF\uC744 \uAE30\uBC18\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uB824\uBA74 \uBA3C\uC800 \uC0C1\uB2E8 \uC67C\uCABD \uBAA8\uD241\uC774\uC5D0 \uC788\uB294 "Examples" \uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD558\uC5EC TouchGFX Designer\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[10, 30]],
    imageSource: "/img/tutorials/tutorial-01/select-examples.png",
    mdxType: "FigureWithPoints"
  }, "Example\uC5D0\uC11C \uC2DC\uC791\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Animated Image Example"\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4(\uC544\uC9C1 \uC120\uD0DD\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0). "Select Hardware" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uC6D0\uD558\uB294 \uD558\uB4DC\uC6E8\uC5B4\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. \uAE30\uBCF8 "Simulator"\uB294 \uC624\uC9C1 Windows\uC5D0\uC11C\uB9CC \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[70, 10]],
    imageSource: "/img/tutorials/tutorial-01/animated-image-selected.png",
    mdxType: "FigureWithPoints"
  }, "Animated Image Example\uC774 \uC120\uD0DD\uB41C \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C TouchGFX Designer\uC5D0 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD558\uB4DC\uC6E8\uC5B4 \uAD6C\uC131\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[176, 140], [440, 215]],
    imageSource: "/img/tutorials/tutorial-01/select-hardware.png",
    mdxType: "FigureWithPoints"
  }, "Animated Image Example\uC774 \uC120\uD0DD\uB41C \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 STM32F746-Disco \uBCF4\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uAC83\uC774\uBBC0\uB85C "STM32F746G Discovery Kit"(1)\uC640 "Select"\uB97C \uCC28\uB840\uB300\uB85C \uD074\uB9AD\uD569\uB2C8\uB2E4(2).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC900\uBE44\uB97C \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4. \uC6D0\uD55C\uB2E4\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 "MyAnimatedImageExample746"\uC73C\uB85C \uBC14\uAFB8\uACA0\uC2B5\uB2C8\uB2E4. "Create" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uACE0 \uACC4\uC18D \uC9C4\uD589\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[460, 240]],
    imageSource: "/img/tutorials/tutorial-01/create-the-final-project-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB85C\uC81D\uD2B8\uC758 \uD615\uD0DC\uB294 \uC774\uC804 \uB2E8\uACC4\uC5D0\uC11C \uBCF8 \uAC83\uACFC \uC720\uC0AC\uD569\uB2C8\uB2E4. \uC720\uC77C\uD558\uAC8C \uB2E4\uB978 \uC810\uC740 "Run Simulator" \uBC84\uD2BC(2) \uC606\uC5D0 "Run Target"(1) \uBC84\uD2BC\uC774 \uC788\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uBC84\uD2BC(\uB610\uB294 \uD0A4\uBCF4\uB4DC\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `F6`), ` />)\uC744 \uB204\uB974\uBA74 TouchGFX Designer\uAC00 GNU ARM C++-\uCEF4\uD30C\uC77C\uB7EC\uB97C \uC0AC\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uCEF4\uD30C\uC77C\uD55C \uD6C4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD0C0\uAC9F\uC73C\uB85C \uD50C\uB798\uC2F1\uD569\uB2C8\uB2E4. \uC774 \uD504\uB85C\uC138\uC2A4\uB294 \uCEF4\uD4E8\uD130 \uC18D\uB3C4\uC640 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBCF5\uC7A1\uC131\uC5D0 \uB530\uB77C \uC218 \uBD84\uC774 \uC218\uC694\uB420 \uC218 \uC788\uC73C\uBA70 TouchGFX Designer \uD558\uB2E8\uC758 \uC0C1\uD0DC \uD45C\uC2DC\uC904\uC5D0 \uC9C4\uD589 \uC0C1\uD669\uC774 \uCD9C\uB825\uB429\uB2C8\uB2E4. \uADF8 \uBC16\uC5D0 \uBE4C\uB4DC \uBC0F \uD50C\uB798\uC2F1 \uB2E8\uACC4\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uACE0 \uC2F6\uB2E4\uBA74 "Detailed Log"(3)(\uB610\uB294 \uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `CTRL + L`), ` ) \uBC84\uD2BC\uC744 \uB204\uB974\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[480, 250], [465, 250], [100, 250], [0, 240]],
    imageSource: "/img/tutorials/tutorial-01/the-project-is-ready-2-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uD504\uB85C\uC81D\uD2B8 \uC900\uBE44 \uC644\uB8CC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD50C\uB798\uC2F1\uC774 \uC644\uB8CC\uB418\uBA74 TouchGFX Designer\uC758 \uC0C1\uD0DC \uD45C\uC2DC\uC904\uC5D0 "Flashing Done"\uC774\uB77C\uACE0 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC774\uC81C \uBCF4\uB4DC\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC2E4\uD589\uB418\uB294 \uBAA8\uC2B5\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uD0C0\uAC9F\uC73C\uB85C \uD50C\uB798\uC2F1\uD558\uB824\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 STM32CubeProgrammer / ST-Link \uC720\uD2F8\uB9AC\uD2F0\uAC00 \uC124\uCE58\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stm32cubeprog.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32CubeProgrammer")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    to: "https://www.st.com/en/development-tools/stsw-link004.html",
    target: "_blank",
    mdxType: "Link"
  }, "STM32 ST-LINK \uC720\uD2F8\uB9AC\uD2F0")))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uB2E8 \uC67C\uCABD\uC5D0 \uC788\uB294 Files \uBC84\uD2BC(4)\uC744 \uD074\uB9AD\uD558\uBA74 TouchGFX Designer\uC5D0\uC11C \uD30C\uC77C \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC5F4\uB9AC\uBA74\uC11C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uAC00 \uD3EC\uD568\uB41C \uB514\uB809\uD130\uB9AC\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `build\\bin`), `\uC73C\uB85C \uC774\uB3D9\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD30C\uC77C\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-01/the-projects-binary-files.png",
    mdxType: "Figure"
  }, "\uD504\uB85C\uC81D\uD2B8\uC758 \uC774\uC9C4 \uD30C\uC77C"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `target.hex`), ` \uD30C\uC77C\uC740 \uBCF4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uD560 \uC218 \uC788\uB294 STM32 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774\uBA70, TouchGFX Designer\uC5D0\uC11C \uBC29\uAE08 \uBCF4\uB4DC\uB85C \uD504\uB85C\uADF8\uB798\uBC0D\uD55C \uD30C\uC77C\uC774\uAE30\uB3C4 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C STM32CubeProgrammer \uB610\uB294 ST-Link \uC720\uD2F8\uB9AC\uD2F0\uB97C \uC0AC\uC6A9\uD574 \uBCF4\uB4DC\uB97C \uC218\uB3D9\uC73C\uB85C \uD50C\uB798\uC2F1\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/working-with-touchgfx/compiling-and-flashing"
  }), `\uCEF4\uD30C\uC77C \uBC0F \uD50C\uB798\uC2F1 \uD398\uC774\uC9C0`), `\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);