"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9647],{

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

/***/ 93985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": function() { return /* binding */ assets; },
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./components/Figure.js
var Figure = __webpack_require__(44035);
// EXTERNAL MODULE: ./components/Caution.js
var Caution = __webpack_require__(70814);
// EXTERNAL MODULE: ./components/Tip.js
var Tip = __webpack_require__(37793);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/Highlight.js
var Highlight = __webpack_require__(88678);
;// CONCATENATED MODULE: ./components/Try.js


const icon = /* @__PURE__ */ react.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "16",
  viewBox: "0 0 14 16"
}, /* @__PURE__ */ react.createElement("path", {
  fillRule: "evenodd",
  d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
}));
class Try extends react.Component {
  render() {
    return /* @__PURE__ */ react.createElement(Highlight/* default */.Z, {
      color: "var(--highlight-color-try)",
      header: "Things to try",
      type: "try",
      icon
    }, this.props.children);
  }
}
/* harmony default export */ var components_Try = (Try);

// EXTERNAL MODULE: ./components/FurtherReading.js
var FurtherReading = __webpack_require__(29415);
// EXTERNAL MODULE: ./components/InlineCode.js
var InlineCode = __webpack_require__(31217);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./components/CodeHeader.js
var CodeHeader = __webpack_require__(22425);
;// CONCATENATED MODULE: ./docs/development/ui-development/touchgfx-engine-features/custom-widgets.mdx
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
  id: "custom-widgets",
  title: "Custom Widgets"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "development/ui-development/touchgfx-engine-features/custom-widgets",
  "id": "development/ui-development/touchgfx-engine-features/custom-widgets",
  "title": "Custom Widgets",
  "description": "",
  "source": "@site/docs/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",
  "sourceDirName": "development/ui-development/touchgfx-engine-features",
  "slug": "/development/ui-development/touchgfx-engine-features/custom-widgets",
  "permalink": "/4.20/docs/development/ui-development/touchgfx-engine-features/custom-widgets",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "custom-widgets",
    "title": "Custom Widgets"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Caching Bitmaps",
    "permalink": "/4.20/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"
  },
  "next": {
    "title": "Canvas Widgets",
    "permalink": "/4.20/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"
  }
};
const assets = {};








const toc = [{
  value: "When to use the custom widget approach",
  id: "when-to-use-the-custom-widget-approach",
  level: 2
}, {
  value: "In TouchGFX Designer",
  id: "in-touchgfx-designer",
  level: 2
}, {
  value: "In code",
  id: "in-code",
  level: 2
}, {
  value: "Your own custom widget",
  id: "your-own-custom-widget",
  level: 3
}, {
  value: "Partial drawing",
  id: "partial-drawing",
  level: 3
}, {
  value: "Solid area",
  id: "solid-area",
  level: 3
}, {
  value: "Example source code",
  id: "example-source-code",
  level: 3
}, {
  value: "Modifying standard widgets/containers",
  id: "modifying-standard-widgetscontainers",
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
  return /* @__PURE__ */ (0,esm/* mdx */.kt)(MDXLayout, __spreadProps(__spreadValues(__spreadValues({}, layoutProps), props), {
    components,
    mdxType: "MDXLayout"
  }), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `When creating applications you may need widgets that are not part of the TouchGFX distribution.
TouchGFX\xA0have a few ways in which you can create your own graphical elements. The simplest way is to use\xA0the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "custom-containers"
  }), `Custom Container approach`), `, where you combine already existing widgets into your own. This article, however, deals with a more advanced approach where you can essentially create a widget that has full control of the framebuffer and thus is able to draw precisely what you want.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "when-to-use-the-custom-widget-approach"
  }), `When to use the custom widget approach`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Creating custom widgets is not the most typical way to create your own widget. The custom container approach is preferable if it suits your needs, but sometimes this approach is not enough. When you need full control of the framebuffer you need to\xA0use the custom widget approach.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `A few examples of widgets that could and should be created using the custom widget approach are:`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `A sepia filter`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `A mandelbrot fractal widget`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `A widget that shows data from a file, for example a gif animation.`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "in-touchgfx-designer"
  }), `In TouchGFX Designer`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `TouchGFX Designer does not currently support the creation of custom widgets. As a result, you will need to write the code for the custom widget manually (refer to the remainder of this article on how to\xA0do this) and then insert the widget in the user code portion of your View.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "in-code"
  }), `In code`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `You\xA0create your own custom widget by extending the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `Widget`), ` class. Doing this requires\xA0a bit more effort on the user's side, but will also give full control of all pixels drawn by the widget.
Your custom widget will not necessarily utilize any existing widgets but instead define how it should be drawn by specifying colors of pixels. The custom widget approach will in general also have a smaller memory footprint, which in some cases is of great importance.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `One example of a custom widget is a QR code widget. This particular widget makes for a good example, so we will walk through how to create it in the following section. In this example, a QR code widget is an NxN\xA0matrix of black and white pixels. The size of the widget and the color of each pixel will be determined at run time and depend on the information in a QR\xA0code data object.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Here are two examples of how a QR\xA0code widget might look:`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-examples.png",
    noShadow: true,
    mdxType: "Figure"
  }, "QR code widget examples"), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "It is possible to create the qr code widget with the custom container approach by having n*n black or white boxes as children of the container. However, this will take up a lot of memory, and will probably not be as efficient or flexible."), /* @__PURE__ */ (0,esm/* mdx */.kt)(Tip/* default */.Z, {
    mdxType: "Tip"
  }, "The standard ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "touchgfx::Button"), " (supplied with the framework) is created as a custom widget, not a custom container. This saves memory per button on your screen."), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "your-own-custom-widget"
  }), `Your own custom widget`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `In order to create your widget that extends the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `Widget`), ` class, you need to describe two things.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `The way your widget is drawn`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `The part of your widget that is solid`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "partial-drawing"
  }), `Partial drawing`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Any widget, and therefore also your custom widget, needs to support partial drawing. This means that your widget should be able to draw only a part of itself.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `This is due to two points. It is often not necessary to redraw the entire screen but only parts of it. The algorithms of TouchGFX might split up the drawing of a screen into multiple partial drawings to minimize the global number of pixels drawn. This partial drawing of a screen, might then ask a widget to only draw itself partially.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `As an example our QR code widget needs to be able to support drawing only the highlighted part of itself.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.png",
    noShadow: true,
    mdxType: "Figure"
  }, "QR code widget partial drawing"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The way to do this in your code is by overriding the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), ` method:`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual void draw(const touchgfx::Rect& invalidatedArea) const
{
    //run through the pixels of the invalidated area
    //draw a black pixel if the qr data object has a value at this position
    //draw a white pixel otherwise
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `invalidatedArea`), ` is the part of the widget that needs to be updated. In our QR code example the invalidated area is the highlighted area. The area is expressed in coordinates relative to the top left corner of the widget.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "It is the responsibility of the widget to draw inside the invalidated area. If you draw outside the invalidated area you will not get overall correct behaviour of your screens."), /* @__PURE__ */ (0,esm/* mdx */.kt)(Tip/* default */.Z, {
    mdxType: "Tip"
  }, "The ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "draw"), " method is ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "const"), " because the optimized drawing algorithm might split up the drawing of a widget into multiple calls to draw. The ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "const"), " assures that the widget is not moved, updated etc. in between these multiple ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "draw"), " executions."), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "solid-area"
  }), `Solid area`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Furthermore, a widget needs to be able to report how large a portion of itself is solid. Solid means that you can not see the things that are behind it on the screen. For instance, a standard red box is completely solid, whereas an image with an alpha value of 50% is completely non solid; you can see everything behind it.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `A solid widget will enable TouchGFX to speed up the drawing process. Since we do not have to draw the widgets below the solid widget, fewer pixels have to be drawn.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `To report the solid area in your code, override the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), ` method.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual Rect getSolidRect() const;
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Our QR code widget will be completely solid. You will not be able to see anything behind the black and white pixels. Therefore, we let the method return a rectangle the full size of the widget:`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `virtual Rect getSolidRect() const
{
    return touchgfx::Rect(0, 0, getWidth(), getHeight());
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("h3", __spreadValues({}, {
    "id": "example-source-code"
  }), `Example source code`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `We end up with an application and a widget looking like this - depending on the data supplied:`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Figure/* default */.Z, {
    imageSource: "/img/development/ui-development/touchgfx-engine-features/qr-screenshot.png",
    noShadow: true,
    mdxType: "Figure"
  }, "QR code widget screenshot"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The complete code of the widget is shown below:`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "gui/include/gui/common/QRCodeWidget.hpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `
#ifndef QR_CODE_WIDGET_HPP
#define QR_CODE_WIDGET_HPP

#include <touchgfx/widgets/Widget.hpp>

class QRCodeWidget : public touchgfx::Widget
{
public:
    QRCodeWidget();

    virtual void draw(const touchgfx::Rect& invalidatedArea) const;
    virtual touchgfx::Rect getSolidRect() const;

    void setQRCodeData(QRCodeData* data);
    void setScale(uint8_t s);

private:
    void updateSize();

    QRCodeData* data;
    uint8_t scale;
};
#endif
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `In the header file, we define the widget as an extension of the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Widget`), ` class. We override the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), ` and `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), ` methods to define how our widget is drawn.
We declare methods for setting the data of the QR code and setting the scaling factor of the QR code.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(CodeHeader/* default */.Z, {
    mdxType: "CodeHeader"
  }, "gui/src/common/QRCodeWidget.cpp"), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <gui/common/QRCodeWidget.hpp>

QRCodeWidget::QRCodeWidget() :
    data(0),
    scale(1)
{
}

void QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const
{
    if (!data)
    {
        return;
    }

    touchgfx::Rect absolute = getAbsoluteRect();

    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();

    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)
    {
        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)
        {
            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] =
              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;
        }
    }

    touchgfx::HAL::getInstance()->unlockFrameBuffer();
}

touchgfx::Rect QRCodeWidget::getSolidRect() const
{
    return touchgfx::Rect(0, 0, getWidth(), getHeight());
}

void QRCodeWidget::setQRCodeData(QRCodeData* qrCode)
{
    data = qrCode;
    updateSize();
}

void QRCodeWidget::setScale(uint8_t s)
{
    scale = s;
    updateSize();
}

void QRCodeWidget::updateSize()
{
    if (data)
    {
        setWidth(data->getSize() * scale);
        setHeight(data->getSize() * scale);
    }
}
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The source file defines the `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `draw`), ` method. This method steps through each of the pixels in the invalidated area and determines the color of the framebuffer based on the contents of the data object and the scaling factor.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The `, /* @__PURE__ */ (0,esm/* mdx */.kt)("inlineCode", {
    parentName: "p"
  }, `getSolidRect`), ` method reports the widget as completely solid.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "Note that we locked and unlocked the framebuffer as part of our ", /* @__PURE__ */ (0,esm/* mdx */.kt)(InlineCode/* default */.Z, {
    mdxType: "InlineCode"
  }, "draw"), " method. This is to make sure that the DMA is done drawing when we start drawing."), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The code also uses a small class/interface to access the data of the QR code:`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `class QRCodeData
{
public:
    uint8_t getSize();
    bool at(uint8_t x, uint8_t y);
};
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)(FurtherReading/* default */.Z, {
    mdxType: "FurtherReading"
  }, "Download and check out the ", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "/download/widgets/qr-code.zip",
    target: "_blank",
    mdxType: "Link"
  }, "QRCode"), " and ", /* @__PURE__ */ (0,esm/* mdx */.kt)(Link/* default */.Z, {
    to: "/download/widgets/lens.zip",
    target: "_blank",
    mdxType: "Link"
  }, "Lens"), " widgets."), /* @__PURE__ */ (0,esm/* mdx */.kt)(components_Try, {
    mdxType: "Try"
  }, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "Modify the QR code widget such that white pixels are completely transparent."), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "Create a custom widget that displays a sepia filter, a mandelbrot fractal, a gif image or something else."), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", null, "Consider which widgets are most easily done using custom containers and which widgets are most easily realized using the custom widget approach.")), /* @__PURE__ */ (0,esm/* mdx */.kt)("h2", __spreadValues({}, {
    "id": "modifying-standard-widgetscontainers"
  }), `Modifying standard widgets/containers`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The source code for the standard widgets are included when installing TouchGFX. These can also be modified to fit with the needs of an application. The source code for the standard widgets and containers is located in the folder:`), /* @__PURE__ */ (0,esm/* mdx */.kt)("pre", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("code", __spreadValues({
    parentName: "pre"
  }, {}), `Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets
`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `In order to maintain backwards compatibility, the core library contains compiled versions of the standard widgets and containers. It is therefore not necessary to compile these files in your project.`), /* @__PURE__ */ (0,esm/* mdx */.kt)(Caution/* default */.Z, {
    mdxType: "Caution"
  }, "Modifying the standard widgets/containers directly is discouraged"), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The source code is primarily intended as inspiration and a way to learn about the inner workings of TouchGFX widgets. If you want something to behave differently than the standard implementation, it is possible to achieve this by either subclassing or creating custom containers, which is also the
recommended approach.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `The reason for this recommendation is two-fold:`), /* @__PURE__ */ (0,esm/* mdx */.kt)("ul", null, /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `First, you will make it more difficult to upgrade to newer TouchGFX versions, since you must manually merge any changes you did.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("li", {
    parentName: "ul"
  }, `Second, you risk breaking the standard widgets and containers that are dependent on specific behavior.`)), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `Therefore, if it is necessary to modify a standard widget/container, we recommend you take a copy of it, rename it and use that instead of directly modifying the source code.`), /* @__PURE__ */ (0,esm/* mdx */.kt)("p", null, `That being said, you are free to do whatever you judge is right. If you add the source code for a standard widget into your project, your linker will choose this version instead of the one in the core library. As a result, you have access to modification of the standard widgets by adding the source code to your compilation.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);