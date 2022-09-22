"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[1326],{

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

/***/ 78799:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29415);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39130);
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
  id: "widgets-and-containers",
  title: "\uC704\uC82F \uBC0F \uCEE8\uD14C\uC774\uB108"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/working-with-touchgfx/widgets-and-containers",
  "id": "development/ui-development/working-with-touchgfx/widgets-and-containers",
  "title": "\uC704\uC82F \uBC0F \uCEE8\uD14C\uC774\uB108",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",
  "sourceDirName": "development/ui-development/working-with-touchgfx",
  "slug": "/development/ui-development/working-with-touchgfx/widgets-and-containers",
  "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "widgets-and-containers",
    "title": "\uC704\uC82F \uBC0F \uCEE8\uD14C\uC774\uB108"
  },
  "sidebar": "docs",
  "previous": {
    "title": "TouchGFX\uC5D0\uC11C IDE \uC0AC\uC6A9\uD558\uAE30",
    "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"
  },
  "next": {
    "title": "\uC2DC\uBBAC\uB808\uC774\uD130",
    "permalink": "/4.20/ko/docs/development/ui-development/working-with-touchgfx/simulator"
  }
};
const assets = {};



const toc = [{
  value: "\uC704\uC82F",
  id: "widgets",
  level: 2
}, {
  value: "\uCEE8\uD14C\uC774\uB108",
  id: "containers",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBE4C\uB4DC\uD560 \uB54C \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uB450 \uAC00\uC9C0 \uAC1C\uB150\uC778 \uC704\uC82F\uACFC \uCEE8\uD14C\uC774\uB108\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC704\uC82F\uACFC \uCEE8\uD14C\uC774\uB108\uB294 UI\uB97C \uAC1C\uBC1C\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 \uB450 \uAC00\uC9C0 \uBE4C\uB529 \uBE14\uB85D\uC785\uB2C8\uB2E4. \uB458 \uB2E4 TouchGFX\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC0AC\uC804 \uAD6C\uC131\uC694\uC18C\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC9C0\uB9CC \uB3D9\uC2DC\uC5D0 \uAC1C\uBC29\uC131\uB3C4 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uCEE4\uC2A4\uD140 \uAD6C\uD604\uCCB4\uB97C \uC791\uC131\uD558\uB294 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "widgets"
  }), `\uC704\uC82F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC640 TouchGFX Designer \uB3C4\uAD6C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/miscellaneous/text-area"
  }), `\uD14D\uC2A4\uD2B8 \uC601\uC5ED`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/buttons/button"
  }), `\uBC84\uD2BC`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/images/texture-mapper"
  }), `\uD14D\uC2A4\uCC98 \uB9E4\uD37C`), ` \uB4F1 \uC0AC\uC6A9\uC790\uAC00 UI\uB97C \uBE4C\uB4DC\uD560 \uB54C \uC790\uC720\uB86D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC218\uB9CE\uC740 \uD45C\uC900 \uC704\uC82F\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uAE30\uBCF8\uC801\uC73C\uB85C TouchGFX\uC758 \uC704\uC82F\uC740 \uC2A4\uD06C\uB9B0\uC5D0 \uADF8\uB9AC\uAC70\uB098 \uC778\uD130\uB799\uC158\uC774 \uAC00\uB2A5\uD55C \uAC83\uC5D0 \uB300\uD55C \uCD94\uC0C1\uC801 \uC815\uC758\uC77C \uBFD0\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/ui-components/button/widget-appearance.png",
    mdxType: "Figure"
  }, "\uC774\uBBF8\uC9C0 \uC704\uC82F\uC744 \uBC30\uACBD\uC73C\uB85C \uC0AC\uC6A9\uD558\uB294 Button \uC704\uC82F"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer \uC0AC\uC6A9\uC790\uB294 \uC6D0\uD558\uB294 \uC704\uC82F\uC744 \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uD55C \uD6C4 \uAC01 \uC704\uC82F\uBCC4 \uC18D\uC131\uC744 \uD1B5\uD574 \uC704\uC82F\uC744 \uC6D0\uD558\uB294 \uB300\uB85C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TouchGFX\uC5D0\uC11C\uB3C4 \uC81C\uACF5\uD558\uB294 \uAC01\uC885 \uCEE8\uD14C\uC774\uB108\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC704\uC82F\uC744 \uADF8\uB8F9\uC73C\uB85C \uC9C0\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uC6D0\uD55C\uB2E4\uBA74 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `add(widget_instance_name);`), ` \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098, \uD639\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `myContainer.add(widget_instance_name);`), `\uC640 \uAC19\uC740 \uCEE8\uD14C\uC774\uB108 add \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCEE8\uD14C\uC774\uB108\uC5D0 \uC704\uC82F\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uC704\uC82F\uC744 \uCD94\uAC00\uD558\uB294 \uC21C\uC11C\uC5D0 \uB530\uB77C z-\uC21C\uC11C\uAC00 \uACB0\uC815\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB9C8\uC9C0\uB9C9\uC5D0 \uCD94\uAC00\uB418\uB294 \uC704\uC82F\uC774 \uC2A4\uD06C\uB9B0 \uB9E8 \uC55E\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F\uC758 \uC88C\uD45C\uB294 \uD56D\uC0C1 \uB8E8\uD2B8 \uCEE8\uD14C\uC774\uB108(\uC2A4\uD06C\uB9B0)\uB4E0 \uCEE8\uD14C\uC774\uB108\uB4E0 \uC0C1\uAD00\uC5C6\uC774 \uC0C1\uC704 \uB178\uB4DC\uB97C \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC2E0\uC758 \uD2B9\uC815 \uC694\uAC74\uC5D0 \uB530\uB77C \uC704\uC82F\uC744 \uC9C1\uC811 \uC0DD\uC131\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/custom-widgets",
    mdxType: "Link"
  }, "\uCEE4\uC2A4\uD140 \uC704\uC82F \uC139\uC158"), "\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "containers"
  }), `\uCEE8\uD14C\uC774\uB108`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE8\uD14C\uC774\uB108\uB294 TouchGFX\uC5D0\uC11C \uC704\uC82F\uC774\uB098 \uAE30\uD0C0 \uCEE8\uD14C\uC774\uB108 \uAC19\uC740 \uD558\uC704 \uB178\uB4DC\uB97C \uD3EC\uD568\uD560 \uC218 \uC788\uB294 \uAD6C\uC131\uC694\uC18C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uCEE8\uD14C\uC774\uB108\uB294 Widgets \uD0ED\uC758 Containers \uCE74\uD14C\uACE0\uB9AC\uC5D0 \uC788\uC73C\uBA70, \uC704\uC82F\uC744 \uD2B8\uB9AC \uBDF0\uC5D0 \uC788\uB294 \uCEE8\uD14C\uC774\uB108\uB85C \uB4DC\uB798\uADF8\uD558\uBA74 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC704 \uB178\uB4DC\uC758 z-\uC21C\uC11C\uB294 \uD558\uC704 \uB178\uB4DC\uAC00 \uCEE8\uD14C\uC774\uB108\uC5D0 \uCD94\uAC00\uB418\uB294 \uC21C\uC11C\uC5D0 \uB530\uB77C \uACB0\uC815\uB418\uBBC0\uB85C, \uB9C8\uC9C0\uB9C9\uC5D0 \uCD94\uAC00\uB41C \uD558\uC704 \uB178\uB4DC\uAC00 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uB9E8 \uC55E\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX\uC5D0\uC11C \uC704\uC82F\uC758 \uC704\uCE58\uB294 \uC0C1\uC704 \uB178\uB4DC\uB97C \uAE30\uC900\uC73C\uB85C \uC815\uC758\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC0C1\uC704 \uCEE8\uD14C\uC774\uB108\uC758 \uC704\uCE58\uB97C \uBCC0\uACBD\uD558\uBA74 \uD558\uC704 \uB178\uB4DC\uC758 \uC704\uCE58\uB3C4 \uBC14\uB00C\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE8\uD14C\uC774\uB108\uB294 \uBDF0\uD3EC\uD2B8\uC640 \uAC19\uC740 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4. \uB2E4\uC2DC \uB9D0\uD574\uC11C \uD558\uC704 \uB178\uB4DC\uC5D0\uC11C \uCEE8\uD14C\uC774\uB108\uC758 \uAE30\uD558 \uD615\uC0C1\uACFC \uAD50\uCC28\uD558\uB294 \uBD80\uBD84\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uC560\uB2C8\uBA54\uC774\uC158\uC5D0\uC11C\uB294 \uCEE8\uD14C\uC774\uB108\uC758 \uBDF0\uD3EC\uD2B8 \uC885\uD6A1\uBE44\uAC00 \uC5B4\uB5BB\uAC8C \uC791\uC6A9\uD558\uB294\uC9C0 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uBC84\uD2BC\uC774 \uD558\uC704 \uB178\uB4DC\uC778 \uCEE8\uD14C\uC774\uB108\uC758 \uC724\uACFD\uC120\uC774 \uBCF4\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.gif",
    mdxType: "Figure"
  }, "\uBDF0\uD3EC\uD2B8 \uC5ED\uD560\uC744 \uD558\uB294 \uCEE8\uD14C\uC774\uB108"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC790\uC2E0\uC758 \uD2B9\uC815 \uC694\uAC74\uC5D0 \uB530\uB77C \uC790\uC2E0\uB9CC\uC758 \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    to: "../touchgfx-engine-features/custom-containers",
    mdxType: "Link"
  }, "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC139\uC158"), "\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);