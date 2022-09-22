"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[8419],{

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

/***/ 45008:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29415);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22425);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93054);
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
  id: "mixins",
  title: "\uBBF9\uC2A4\uC778"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/mixins",
  "id": "development/ui-development/touchgfx-engine-features/mixins",
  "title": "\uBBF9\uC2A4\uC778",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/mixins.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/mixins",
  "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/mixins",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "mixins",
    "title": "\uBBF9\uC2A4\uC778"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uBC31\uC5D4\uB4DC \uD1B5\uC2E0",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/backend-communication"
  },
  "next": {
    "title": "\uD14D\uC2A4\uD2B8 \uBC0F \uD3F0\uD2B8",
    "permalink": "/4.20/ko/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"
  }
};
const assets = {};





const toc = [{
  value: "Move Animator",
  id: "move-animator",
  level: 2
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C Move Animator \uC0AC\uC6A9\uD558\uAE30",
  id: "using-move-animator-in-user-code",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD55C \uCF5C\uBC31 \uAD6C\uD604",
  id: "callback-implementation-in-user-code",
  level: 3
}, {
  value: "API \uCC38\uC870",
  id: "api-reference",
  level: 3
}, {
  value: "Fade Animator",
  id: "fade-animator",
  level: 2
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C Fade Animator \uC0AC\uC6A9\uD558\uAE30",
  id: "using-fade-animator-in-user-code",
  level: 3
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD55C \uCF5C\uBC31 \uAD6C\uD604",
  id: "callback-implementation-in-user-code-1",
  level: 3
}, {
  value: "API \uCC38\uC870",
  id: "api-reference-1",
  level: 3
}, {
  value: "Click Listener",
  id: "clicklistener",
  level: 2
}, {
  value: "\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD55C \uCF5C\uBC31 \uAD6C\uD604",
  id: "callback-implementation-in-user-code-2",
  level: 3
}, {
  value: "API \uCC38\uC870",
  id: "api-reference-2",
  level: 3
}, {
  value: "Draggable",
  id: "draggable",
  level: 2
}, {
  value: "API \uCC38\uC870",
  id: "api-reference-3",
  level: 3
}, {
  value: "Easing Equations",
  id: "easing-equations",
  level: 2
}, {
  value: "Cubic movement",
  id: "easing-cubic",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Mixin(\uC774\uD558 \uBBF9\uC2A4\uC778)\uC774\uB780 \uC608\uB97C \uB4E4\uC5B4 \uC704\uCE58 \uBCC0\uACBD\uC774\uB098 \uC54C\uD30C \uAC12 \uBCC0\uACBD\uC744 \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uC704\uC82F\uC758 \uAE30\uB2A5\uC744 \uD655\uC7A5\uD558\uB294 \uD074\uB798\uC2A4\uB97C \uB9D0\uD569\uB2C8\uB2E4. Move Animator \uBBF9\uC2A4\uC778\uACFC Fade Animator \uBBF9\uC2A4\uC778\uC740 TouchGFX Designer \uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uC704\uCE58 \uBCC0\uACBD\uACFC \uC54C\uD30C \uAC12 \uBCC0\uACBD\uC744 \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD558\uB294 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uB294 \uB370 \uBC18\uB4DC\uC2DC \uD544\uC694\uD569\uB2C8\uB2E4. \uC774 \uB450 \uAC00\uC9C0 \uBBF9\uC2A4\uC778\uC740 TouchGFX Designer\uB97C \uD1B5\uD574, \uD639\uC740 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uC9C1\uC811 \uC704\uC82F\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Move and Fade Animators optionally uses easing equations to detail the progression of the animation. Read more about easing equations in the end of this `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "#easing-equations"
  }), `section`), `.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "move-animator"
  }), `Move Animator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uCE58 \uBCC0\uACBD \uC560\uB2C8\uBA54\uC774\uD130\uB294 \uC704\uC82F\uC774 \uD604\uC7AC \uC704\uCE58\uC5D0\uC11C \uC9C0\uC815\uB41C \uB9C8\uC9C0\uB9C9 \uC704\uCE58\uAE4C\uC9C0 \uC774\uB3D9\uD558\uB294 \uAC83\uC744 \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uBBF9\uC2A4\uC778\uC785\uB2C8\uB2E4. X \uBC0F Y\uCD95 \uBC29\uD5A5\uC758 \uC704\uCE58 \uBCC0\uACBD\uC740 EasingEquation\uC744 \uD1B5\uD574 \uC124\uBA85\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBBF9\uC2A4\uC778\uC740 TouchGFX Designer\uC758 \uD574\uB2F9 \uC704\uC82F \uC18D\uC131\uC744 \uC0AC\uC6A9\uD574 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \u201CMixins\u201D \uC139\uC158\uC5D0\uC11C \uD65C\uC131\uD654\uD558\uBA74 \uC801\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Move Animator \uBBF9\uC2A4\uC778\uC740 \uC704\uC82F\uC758 \uC704\uCE58\uB97C \uBCC0\uACBD\uD558\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\uC0C1\uD638\uC791\uC6A9`), `\uC774 \uC0DD\uC131\uB418\uBA74 \uD574\uB2F9 \uC704\uC82F\uC5D0 \uC790\uB3D9\uC73C\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-move-animator-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC5D0\uC11C \uD65C\uC131\uD654\uB41C Move Animator \uBBF9\uC2A4\uC778"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Move Animator\uB97C \uD65C\uC131\uD654\uD558\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uC0DD\uC131\uB41C \uC704\uC82F\uC758 \uC120\uC5B8 \uC11C\uBA85(signature)\uC774 \uBC14\uB01D\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), `\uC758 Move Animator \uBBF9\uC2A4\uC778\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::MoveAnimator< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-move-animator-in-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C Move Animator \uC0AC\uC6A9\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Move Animator \uBBF9\uC2A4\uC778\uC774 \uC704\uC82F\uC5D0 \uC801\uC6A9\uB418\uBA74 \uD574\uB2F9 \uC704\uC82F\uC774 \uD604\uC7AC \uC704\uCE58\uC5D0\uC11C \uB2E4\uB978 \uC704\uCE58\uB85C \uC774\uB3D9\uD558\uB294 \uAC83\uC744 \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uC0C8 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uB370\uBAA8\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 Box \uC704\uC82F\uC5D0\uC11C Move Animator \uBBF9\uC2A4\uC778\uC744 \uD65C\uC131\uD654\uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startMoveAnimation`), ` \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB429\uB2C8\uB2E4. \uC774 \uBA54\uC18C\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC21C\uC11C\uB85C 5\uAC00\uC9C0 \uC778\uC218\uB97C \uAC16\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `endX: \uBD80\uBAA8\uC640 \uAD00\uB828\uD558\uC5EC \uC704\uC82F\uC774 \uC774\uB3D9\uD574\uC57C \uD558\uB294 X \uC704\uCE58\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `endY: \uBD80\uBAA8\uC640 \uAD00\uB828\uD558\uC5EC \uC704\uC82F\uC774 \uC774\uB3D9\uD574\uC57C \uD558\uB294 Y \uC704\uCE58\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `duration: X\uCD95\uACFC Y\uCD95\uC73C\uB85C \uC774\uB3D9\uD558\uB294 \uB370 \uAC78\uB9AC\uB294 \uC2DC\uAC04(tick)\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `xProgressionEquation: X\uCD95\uC73C\uB85C \uC774\uB3D9\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 EasingEquation\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `yProgressionEquation: Y\uCD95\uC73C\uB85C \uC774\uB3D9\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 EasingEquation\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uB294 X\uCD95\uACFC Y\uCD95\uC5D0\uC11C linear EasingEquation\uC744 \uC0AC\uC6A9\uD558\uC5EC 40tick \uC2DC\uAC04 \uB3D9\uC548 X: 0, Y: 0 \uC88C\uD45C\uB85C \uC774\uB3D9\uD558\uB294 \uC608\uC81C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    box.startMoveAnimation(0, 0, 40, EasingEquations::linearEaseNone, EasingEquations::linearEaseNone);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "callback-implementation-in-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD55C \uCF5C\uBC31 \uAD6C\uD604`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Move Animator \uBBF9\uC2A4\uC778\uC774 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC644\uB8CC\uD558\uBA74 \uCF5C\uBC31\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uCF5C\uBC31\uC744 \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uB370\uBAA8\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 Box \uC704\uC82F\uC5D0\uC11C Move Animator \uBBF9\uC2A4\uC778\uC744 \uD65C\uC131\uD654\uD588\uB2E4\uBA74 \uC774\uC81C Box \uC704\uC82F\uC774 \uC704\uCE58\uD55C \uAE30\uBCF8 \uD074\uB798\uC2A4\uC5D0\uC11C \uC0C1\uC18D\uD558\uB294 \uC2A4\uD06C\uB9B0 \uD5E4\uB354 \uD074\uB798\uC2A4 \uD30C\uC77C\uC5D0 \uCF5C\uBC31 \uC120\uC5B8\uACFC \uC774\uBCA4\uD2B8 \uCC98\uB9AC \uD568\uC218\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-6,9-10}",
    "{5-6,9-10}": true
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    // Declaring callback handler for move animation ended on a Box
    void boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<Box>& comp);

protected:
    // Declaring callback type of MoveAnimator<Box>
    Callback <Screen1View, const touchgfx::MoveAnimator<Box>&> boxMoveAnimationEndedCallback;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C \uCF5C\uBC31 \uC120\uC5B8\uACFC \uC774\uBCA4\uD2B8 \uCC98\uB9AC \uD568\uC218\uB97C View \uAC1D\uCCB4\uB85C \uBC14\uC778\uB529\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-3}",
    "{2-3}": true
  }), `Screen1View::Screen1View() :
  // In constructor for callback, bind to this view object and bind which function to handle the event.
  boxMoveAnimationEndedCallback(this, &Screen1View::boxMoveAnimationEndedHandler) { }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C\uB294 \uC774\uB3D9 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC885\uB8CC\uB418\uC5C8\uC744 \uB54C \uC0AC\uC6A9\uD560 \uCF5C\uBC31\uC744 Box \uC704\uC82F\uC5D0\uAC8C \uC54C\uB824\uC8FC\uB294 \uAC83 \uC785\uB2C8\uB2E4. \uC774 \uC791\uC5C5\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), ` \uD30C\uC77C\uC5D0\uC11C \uC791\uC131\uD558\uBA70, \uD574\uB2F9 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uC804\uD658\uB420 \uB54C\uB9C8\uB2E4 \uCF5C\uBC31\uC774 \uC124\uC815\uB418\uB3C4\uB85D \uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-4}",
    "{3-4}": true
  }), `void Screen1View::setupScreen()
{
  // Add the callback to box
  box.setMoveAnimationEndedAction(boxMoveAnimationEndedCallback);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uCF5C\uBC31\uC744 \uCC98\uB9AC\uD560 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `boxMoveAnimationEndedHandler`), ` \uD568\uC218\uB97C \uAD6C\uD604\uD569\uB2C8\uB2E4. \uD6A8\uACFC\uC801\uC778 \uC5F0\uC2B5\uC774 \uB420 \uC218 \uC788\uB3C4\uB85D \uC704\uCE58 \uBCC0\uACBD \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uB9C8\uCE5C Box\uAC00 \uC2E4\uC81C\uB85C \uD574\uB2F9\uD558\uB294 \u2018box\u2019\uC778\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<touchgfx::Box>& b)
{
    if (&b == &box)
    {
        //Implement what should happen when move animation on 'box' has ended here.
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "api-reference"
  }), `API \uCC38\uC870`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_move_animator",
    mdxType: "Link"
  }, "MoveAnimator \uD074\uB798\uC2A4\uC5D0 \uB300\uD55C API \uCC38\uC870"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "fade-animator"
  }), `Fade Animator`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator\uB294 \uC704\uC82F\uC774 \uC54C\uD30C \uAC12\uC744 \uD604\uC7AC \uAC12\uC5D0\uC11C \uC9C0\uC815\uB41C \uB9C8\uC9C0\uB9C9 \uAC12\uC73C\uB85C \uBCC0\uACBD\uD558\uC5EC \uD398\uC774\uB4DC \uD6A8\uACFC\uB97C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uBBF9\uC2A4\uC778\uC785\uB2C8\uB2E4. \uD398\uC774\uB4DC \uC18D\uB3C4\uB294 EasingEquation\uC744 \uD1B5\uD574 \uC124\uBA85\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC54C\uD30C \uAC12\uC744 \uAD6C\uD604\uD558\uB294 \uC704\uC82F\uC5D0\uC11C\uB9CC Fade Animator \uBBF9\uC2A4\uC778\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../ui-components/containers/container",
    mdxType: "Link"
  }, "\uCEE8\uD14C\uC774\uB108"), "\uCC98\uB7FC \uB2E4\uB978 \uC704\uC82F\uC744 \uD3EC\uD568\uD560 \uC218 \uC788\uB294 \uC704\uC82F\uC774\uB77C\uACE0 \uD574\uC11C Fade Animator \uBBF9\uC2A4\uC778\uC744 \uC804\uBD80 \uC9C0\uC6D0\uD558\uB294 \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBBF9\uC2A4\uC778\uC740 TouchGFX Designer\uC758 \uD574\uB2F9 \uC704\uC82F \uC18D\uC131\uC744 \uC0AC\uC6A9\uD574 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \u201CMixins\u201D \uC139\uC158\uC5D0\uC11C \uD65C\uC131\uD654\uD558\uBA74 \uC801\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator \uBBF9\uC2A4\uC778\uC740 0\uBCF4\uB2E4 \uD070 \uC2DC\uAC04 \uB3D9\uC548 \uC704\uC82F\uC744 \uD398\uC774\uB4DC \uCC98\uB9AC\uD558\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../designer-user-guide/interactions-view"
  }), `\uC0C1\uD638\uC791\uC6A9`), `\uC774 \uCD94\uAC00\uB418\uBA74 \uD574\uB2F9 \uC704\uC82F\uC5D0 \uC790\uB3D9\uC73C\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-fade-animator-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC5D0\uC11C \uD65C\uC131\uD654\uB41C \uD398\uC774\uB4DC \uC560\uB2C8\uBA54\uC774\uD130 \uBBF9\uC2A4\uC778"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator\uB97C \uD65C\uC131\uD654\uD558\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uC0DD\uC131\uB41C \uC704\uC82F\uC758 \uC120\uC5B8 \uC11C\uBA85\uC774 \uBC14\uB01D\uB2C8\uB2E4. \uC5EC\uAE30\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), `\uC758 Fade Animator \uBBF9\uC2A4\uC778\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::FadeAnimator< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-fade-animator-in-user-code"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C Fade Animator \uC0AC\uC6A9\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator \uBBF9\uC2A4\uC778\uC774 \uC704\uC82F\uC5D0 \uC801\uC6A9\uB418\uBA74 \uD574\uB2F9 \uC704\uC82F\uC774 \uC54C\uD30C \uAC12\uC744 \uD604\uC7AC \uC124\uC815\uC5D0\uC11C \uB2E4\uB978 \uC124\uC815\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uC0C8 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uB370\uBAA8\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 Box \uC704\uC82F\uC5D0\uC11C Fade Animator \uBBF9\uC2A4\uC778\uC744 \uD65C\uC131\uD654\uD558\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `startFadeAnimation`), ` \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB429\uB2C8\uB2E4. \uC774 \uBA54\uC18C\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC21C\uC11C\uB85C \uC138 \uAC00\uC9C0 \uC778\uC218\uB97C \uAC16\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `endAlpha: \uC560\uB2C8\uBA54\uC774\uC158 \uC885\uB8CC \uC2DC \uC704\uC82F\uC5D0 \uC124\uC815\uB418\uC5B4\uC57C \uD558\uB294 \uC54C\uD30C \uAC12\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `duration: \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC0C8\uB85C\uC6B4 \uC54C\uD30C \uAC12 \uC124\uC815\uAE4C\uC9C0 \uAC78\uB9AC\uB294 \uC2DC\uAC04(tick)\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `alphaProgressionEquation: \uC54C\uD30C \uAC12 \uBCC0\uACBD \uC18D\uB3C4\uC5D0 \uC0AC\uC6A9\uB418\uB294 EasingEquation\uC785\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798\uB294 linear EasingEquation\uC744 \uC0AC\uC6A9\uD558\uC5EC 40tick \uC2DC\uAC04 \uB3D9\uC548 \uC54C\uD30C \uAC12\uC744 0\uC73C\uB85C \uBCC0\uACBD\uD558\uB294 \uC608\uC81C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    box.startFadeAnimation(0, 40, EasingEquations::linearEaseNone);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `linearEaseNone`), ` easing equation is the default, so you don't have to supply that as argument.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "callback-implementation-in-user-code-1"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD55C \uCF5C\uBC31 \uAD6C\uD604`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Fade Animator \uBBF9\uC2A4\uC778\uC774 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC644\uB8CC\uD558\uBA74 \uCF5C\uBC31\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uCF5C\uBC31\uC744 \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uB370\uBAA8\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 Box \uC704\uC82F\uC5D0\uC11C Fade Animator \uBBF9\uC2A4\uC778\uC744 \uD65C\uC131\uD654\uD588\uB2E4\uBA74 \uC774\uC81C Box \uC704\uC82F\uC774 \uC704\uCE58\uD55C \uAE30\uBCF8 \uD074\uB798\uC2A4\uC5D0\uC11C \uC0C1\uC18D\uD558\uB294 \uC2A4\uD06C\uB9B0 \uD5E4\uB354 \uD074\uB798\uC2A4 \uD30C\uC77C\uC5D0 \uCF5C\uBC31 \uC120\uC5B8\uACFC \uC774\uBCA4\uD2B8 \uCC98\uB9AC \uD568\uC218\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-6,9-10}",
    "{5-6,9-10}": true
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    // Declaring callback handler for fade animation ended on a Box
    void boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<Box>& comp);

protected:
    // Declaring callback type of FadeAnimator<Box>
    Callback <Screen1View, const touchgfx::FadeAnimator<Box>&> boxFadeAnimationEndedCallback;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C \uCF5C\uBC31 \uC120\uC5B8\uACFC \uC774\uBCA4\uD2B8 \uCC98\uB9AC \uD568\uC218\uB97C View \uAC1D\uCCB4\uB85C \uBC14\uC778\uB529\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-3}",
    "{2-3}": true
  }), `Screen1View::Screen1View() :
  // In constructor for callback, bind to this view object and bind which function to handle the event.
  boxFadeAnimationEndedCallback(this, &Screen1View::boxFadeAnimationEndedHandler) { }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C\uB294 \uC774\uB3D9 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC885\uB8CC\uB418\uC5C8\uC744 \uB54C \uC0AC\uC6A9\uD560 \uCF5C\uBC31\uC744 Box \uC704\uC82F\uC5D0\uAC8C \uC54C\uB824\uC8FC\uB294 \uAC83 \uC785\uB2C8\uB2E4. \uC774 \uC791\uC5C5\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), ` \uD30C\uC77C\uC5D0\uC11C \uC791\uC131\uD558\uBA70, \uD574\uB2F9 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uC804\uD658\uB420 \uB54C\uB9C8\uB2E4 \uCF5C\uBC31\uC774 \uC124\uC815\uB418\uB3C4\uB85D \uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-4}",
    "{3-4}": true
  }), `void Screen1View::setupScreen()
{
  // Add the callback to box
  box.setFadeAnimationEndedAction(boxFadeAnimationEndedCallback);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uCF5C\uBC31\uC744 \uCC98\uB9AC\uD560 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `boxFadeAnimationEndedHandler`), ` \uD568\uC218\uB97C \uAD6C\uD604\uD569\uB2C8\uB2E4. \uD6A8\uACFC\uC801\uC778 \uC5F0\uC2B5\uC774 \uB420 \uC218 \uC788\uB3C4\uB85D Fade Animator\uC744 \uB9C8\uCE5C Box\uAC00 \uC2E4\uC81C\uB85C \uD574\uB2F9\uD558\uB294 \u2018box\u2019\uC778\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<touchgfx::Box>& b)
{
    if (&b == &box)
    {
        //Implement what should happen when fade animation on 'box' has ended here.
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "api-reference-1"
  }), `API \uCC38\uC870`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_fade_animator",
    mdxType: "Link"
  }, "FadeAnimator \uD074\uB798\uC2A4\uC5D0 \uB300\uD55C API \uCC38\uC870"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "clicklistener"
  }), `Click Listener`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click Listener\uB294 \uCF5C\uBC31\uC744 \uC0AC\uC6A9\uD574 \uC704\uC82F\uC744 \uD655\uC7A5\uD558\uC5EC \uC704\uC82F\uC774 \uD130\uCE58 \uC785\uB825\uC5D0 \uC751\uB2F5\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uC815\uD558\uB294 \uBBF9\uC2A4\uC778\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBBF9\uC2A4\uC778\uC740 TouchGFX Designer\uC758 \uD574\uB2F9 \uC704\uC82F \uC18D\uC131\uC744 \uC0AC\uC6A9\uD574 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \u201CMixins\u201D \uC139\uC158\uC5D0\uC11C \uD65C\uC131\uD654\uD558\uBA74 \uC801\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-click-listener-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC5D0\uC11C \uD65C\uC131\uD654\uB41C Click Listener \uBBF9\uC2A4\uC778"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click Listener \uBBF9\uC2A4\uC778\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uC0DD\uC131\uB41C \uC704\uC82F\uC758 \uC120\uC5B8 \uC11C\uBA85\uC774 \uBC14\uB01D\uB2C8\uB2E4. \uC5EC\uAE30\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), `\uC758 Click Listener \uBBF9\uC2A4\uC778\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::ClickListener< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "callback-implementation-in-user-code-2"
  }), `\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD55C \uCF5C\uBC31 \uAD6C\uD604`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Click Listener \uBBF9\uC2A4\uC778\uC774 \uD130\uCE58 \uC774\uBCA4\uD2B8\uB97C \uC218\uC2E0\uD558\uBA74 \uCF5C\uBC31\uC774 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uCF5C\uBC31\uC744 \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uB370\uBAA8\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 Box \uC704\uC82F\uC5D0\uC11C Click Listener \uBBF9\uC2A4\uC778\uC744 \uD65C\uC131\uD654\uD588\uB2E4\uBA74 \uC774\uC81C Box \uC704\uC82F\uC774 \uC704\uCE58\uD55C \uAE30\uBCF8 \uD074\uB798\uC2A4\uC5D0\uC11C \uC0C1\uC18D\uD558\uB294 \uC2A4\uD06C\uB9B0 \uD5E4\uB354 \uD074\uB798\uC2A4 \uD30C\uC77C\uC5D0 \uCF5C\uBC31 \uC120\uC5B8\uACFC \uC774\uBCA4\uD2B8 \uCC98\uB9AC \uD568\uC218\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCF5C\uBC31\uC740 \uBC14\uC778\uB529\uD560 \uD074\uB798\uC2A4 \uC720\uD615, \uCF5C\uBC31\uC774 \uC2DC\uC791\uB418\uB294 \uC704\uC82F, \uADF8\uB9AC\uACE0 \uBC1C\uC0DD\uD558\uB294 \uC774\uBCA4\uD2B8 \uC720\uD615, \uC138 \uAC00\uC9C0\uB97C \uC120\uC5B8\uD574\uC57C \uD569\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View`), `, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `const Box&`), ` \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `const ClickEvent&`), `\uAC00 \uC5EC\uAE30\uC5D0 \uD574\uB2F9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5-6,9-10}",
    "{5-6,9-10}": true
  }), `class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    // Declaring callback handler for Box
    void boxClickHandler(const Box& b, const ClickEvent& e);

protected:
    // Declaring callback type of box and clickEvent
    Callback<Screen1View, const Box&, const ClickEvent&> boxClickedCallback;
};
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C \uCF5C\uBC31 \uC120\uC5B8\uACFC \uC774\uBCA4\uD2B8 \uCC98\uB9AC \uD568\uC218\uB97C View \uAC1D\uCCB4\uB85C \uBC14\uC778\uB529\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-3}",
    "{2-3}": true
  }), `Screen1View::Screen1View() :
    // In constructor for callback, bind to this view object and bind which function to handle the event.
    boxClickedCallback(this, &Screen1View::boxClickHandler) { }
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C\uB294 \uD130\uCE58 \uB418\uC5C8\uC744 \uB54C \uC0AC\uC6A9\uD560 \uCF5C\uBC31\uC744  Box \uC704\uC82F\uC5D0\uAC8C \uC54C\uB824\uC8FC\uB294 \uAC83 \uC785\uB2C8\uB2E4. \uC774 \uC791\uC5C5\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setupScreen()`), ` \uD30C\uC77C\uC5D0\uC11C \uC791\uC131\uD558\uBA70, \uD574\uB2F9 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uC804\uD658\uB420 \uB54C\uB9C8\uB2E4 \uCF5C\uBC31\uC774 \uC124\uC815\uB418\uB3C4\uB85D \uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{3-4}",
    "{3-4}": true
  }), `void Screen1View::setupScreen()
{
    // Add the callback to box
    box.setClickAction(boxClickedCallback);
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uCF5C\uBC31\uC744 \uCC98\uB9AC\uD560 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `boxClickHandler`), ` \uD568\uC218\uB97C \uAD6C\uD604\uD569\uB2C8\uB2E4. \uD6A8\uACFC\uC801\uC778 \uC5F0\uC2B5\uC774 \uB420 \uC218 \uC788\uB3C4\uB85D \uCF5C\uBC31\uC744 \uC2DC\uC791\uD55C Box\uAC00 \uC2E4\uC81C\uB85C \uD574\uB2F9\uD558\uB294 \u2018box\u2019\uC778\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `void Screen1View::boxClickHandler(const Box& b, const ClickEvent& evt)
{
    if (&b == &box)
    {
        //Implement what should happen when 'box' is touched/clicked here.
    }
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "api-reference-2"
  }), `API \uCC38\uC870`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_click_listener",
    mdxType: "Link"
  }, "ClickListener \uD074\uB798\uC2A4\uC5D0 \uB300\uD55C API \uCC38\uC870"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "draggable"
  }), `Draggable`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Draggable\uC740 \uD130\uCE58 \uC785\uB825\uC744 \uD1B5\uD574 \uC704\uC82F\uC744 \uB4DC\uB798\uADF8\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uC815\uD558\uB294 \uBBF9\uC2A4\uC778\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uBBF9\uC2A4\uC778\uC740 TouchGFX Designer\uC758 \uD574\uB2F9 \uC704\uC82F \uC18D\uC131\uC744 \uC0AC\uC6A9\uD574 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \u201CMixins\u201D \uC139\uC158\uC5D0\uC11C \uD65C\uC131\uD654\uD558\uBA74 \uC801\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/mixins-draggable-enabled-4.17.png",
    mdxType: "Figure"
  }, "TouchGFX Designer\uC5D0\uC11C \uD65C\uC131\uD654\uB41C Draggable \uBBF9\uC2A4\uC778"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Draggable \uBBF9\uC2A4\uC778\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uC0DD\uC131\uB41C \uC704\uC82F\uC758 \uC120\uC5B8 \uC11C\uBA85\uC774 \uBC14\uB01D\uB2C8\uB2E4. \uC5EC\uAE30\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../ui-components/shapes/box"
  }), `Box`), `\uC758 Click Listener \uBBF9\uC2A4\uC778\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Draggable< touchgfx::Box > box;
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "api-reference-3"
  }), `API \uCC38\uC870`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_draggable",
    mdxType: "Link"
  }, "Draggable \uD074\uB798\uC2A4\uC5D0 \uB300\uD55C API \uCC38\uC870"))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "easing-equations"
  }), `Easing Equations`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `By default the Move and Fade animations uses a linear progression between two values. For example, if we change an alpha value from 0 to 100 in 50 steps, the alpha value will go through the steps 0, 2, 4, 6, 8, ..., 98, 100. The rate of change will be the same in all steps.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The linear progression can look a bit simple or unnatural, and the UI can often be improved by using another algorithm. TouchGFX comes with 30 algorithms each with different characteristics. The list of all the easing equations can be found in the API reference (see link at the end of this section).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The easing equations are implemented as static functions in the EasingEquations class. These functions can easily be passed to the MoveAnimator when you start an animation:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `    box.startMoveAnimation(0, 0, 40, EasingEquations::cubicEaseIn, EasingEquations::cubicEaseIn);
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The first easing argument is the easing equation used for the movement in x (horizontal), the second for the movement in y. Be aware, if you only pass one function it will be used for the x movement and the linear progression will be used for the y movement.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "easing-cubic"
  }), `Cubic movement`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The Cubic easing equations are popular in user interfaces. It is available in three editions in TouchGFX. It is important to use the correct. The images below shows the three variants. In all cases we have time on the horizontal axis (0-400) and the value of the easing equation upwards (0-200):`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-in.png",
    mdxType: "Figure"
  }, "The cubicEaseIn easing equation. Moving slowly in the beginning, ending fast."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The cubicEaseIn is very good when you animate something that is already visible on the display out of the screen. The slow start looks very natural. It gains speed and get out of the display within a short time.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-out.png",
    mdxType: "Figure"
  }, "The cubicEaseOut easing equation. Moving fast in the beginning, ending slow."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The cubicEaseOut is very good when you animate something in to the screen. It slows down as it approaches the final position, but has a high initial off-screen speed.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/mixins/cubic-ease-inout.png",
    mdxType: "Figure"
  }, "The cubicEaseInOut easing equation. Moving slowly in the beginning, also ending slow."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `The cubicEaseInOut is a combination of the cubicEaseIn and cubicEaseOut. It starts slow and ends slow. This is a natural choice when moving elements on the screen.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `For some short quick movements on screen (like a toggle button), the linear movement can look better because of the simplicity.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../../../api/classes/classtouchgfx_1_1_easing_equations",
    mdxType: "Link"
  }, "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C EasingEquation\uC5D0 \uB300\uD55C API \uCC38\uC870")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "https://easings.net/",
    mdxType: "Link"
  }, "Graphical demonstrations of EasingEquations"))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);