"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[5114],{

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

/***/ 21853:
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
/* harmony import */ var _site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39487);
/* harmony import */ var _site_components_Tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37793);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93054);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29415);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22425);
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
  id: "tutorial-02",
  title: "\uD29C\uD1A0\uB9AC\uC5BC2: \uC790\uC2E0\uB9CC\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131\uD558\uAE30"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-02",
  "id": "tutorials/tutorial-02",
  "title": "\uD29C\uD1A0\uB9AC\uC5BC2: \uC790\uC2E0\uB9CC\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131\uD558\uAE30",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/tutorial-02.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-02",
  "permalink": "/4.20/ko/docs/tutorials/tutorial-02",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-02",
    "title": "\uD29C\uD1A0\uB9AC\uC5BC2: \uC790\uC2E0\uB9CC\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131\uD558\uAE30"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD29C\uD1A0\uB9AC\uC5BC1: Example \uCCB4\uD5D8\uD558\uAE30",
    "permalink": "/4.20/ko/docs/tutorials/tutorial-01"
  },
  "next": {
    "title": "\uD29C\uD1A0\uB9AC\uC5BC3: \uBA40\uD2F0 \uC2A4\uD06C\uB9B0\uC744 \uC0AC\uC6A9\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158",
    "permalink": "/4.20/ko/docs/tutorials/tutorial-03"
  }
};
const assets = {};







const toc = [{
  value: "1\uB2E8\uACC4: \uBC30\uACBD \uC774\uBBF8\uC9C0 \uC124\uC815\uD558\uAE30",
  id: "step-1-setting-a-background-image",
  level: 2
}, {
  value: "\uC0C8 \uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791\uD558\uAE30",
  id: "starting-a-new-project",
  level: 3
}, {
  value: "\uBC30\uACBD \uC0BD\uC785\uD558\uAE30",
  id: "inserting-a-background",
  level: 3
}, {
  value: "2\uB2E8\uACC4: \uBC84\uD2BC \uCD94\uAC00\uD558\uAE30",
  id: "step-2-adding-buttons",
  level: 2
}, {
  value: "\uBC84\uD2BC \uCD94\uAC00\uD558\uAE30",
  id: "adding-the-buttons",
  level: 3
}, {
  value: "\uBAA8\uC2B5 \uBCC0\uACBD\uD558\uAE30",
  id: "changing-the-look",
  level: 3
}, {
  value: "3\uB2E8\uACC4: \uD14D\uC2A4\uD2B8 \uCD94\uAC00\uD558\uAE30",
  id: "step-3-adding-text",
  level: 2
}, {
  value: "\uD14D\uC2A4\uD2B8 \uBC30\uACBD",
  id: "text-background",
  level: 3
}, {
  value: "\uD14D\uC2A4\uD2B8 \uCD94\uAC00\uD558\uAE30",
  id: "adding-the-text",
  level: 3
}, {
  value: "\uD14D\uC2A4\uD2B8 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C(Typography) \uBCC0\uACBD\uD558\uAE30",
  id: "changing-the-text-typography",
  level: 3
}, {
  value: "\uC640\uC77C\uB4DC\uCE74\uB4DC \uD14D\uC2A4\uD2B8 \uC0AC\uC6A9\uD558\uAE30",
  id: "using-a-wildcard-text",
  level: 3
}, {
  value: "4\uB2E8\uACC4: \uCF54\uB4DC \uCD94\uAC00\uD558\uAE30",
  id: "step-4-adding-code",
  level: 2
}, {
  value: "\uAC00\uC0C1 \uBA54\uC18C\uB4DC \uAD6C\uD604\uD558\uAE30",
  id: "implementing-the-virtual-methods",
  level: 3
}, {
  value: "\uCE74\uC6B4\uD130 \uAC12 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30",
  id: "updating-the-counter-value",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC\uC744 \uB530\uB77C\uD558\uBA74\uC11C TouchGFX\uC758 \uAE30\uBCF8 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC138\uC694. \uAE30\uBCF8 \uC815\uBCF4\uC5D0\uB294 \uC774\uBBF8\uC9C0\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uACFC \uBC84\uD2BC\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC774 \uC18C\uAC1C\uB418\uC5B4 \uC788\uC73C\uBA70, \uD14D\uC2A4\uD2B8\uC640 \uACC4\uC0B0\uB41C \uC22B\uC790\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uB3C4 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uC5EC TouchGFX Designer\uC5D0\uC11C \uC0DD\uC131\uD55C UI\uB97C \uBCF4\uAE30 \uC88B\uAC8C \uB2E4\uB4EC\uC5B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC740 TouchGFX\uC5D0 \uB300\uD574\uC11C\uB294 \uC804\uD600 \uBAA8\uB974\uC9C0\uB9CC \uD504\uB85C\uADF8\uB798\uBC0D\uC5D0 \uB300\uD574\uC11C\uB294 \uB2E4\uC18C \uACBD\uD5D8\uC774 \uC788\uB2E4\uB294 \uAC00\uC815\uC744 \uC804\uC81C\uB85C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-1-setting-a-background-image"
  }), `1\uB2E8\uACC4: \uBC30\uACBD \uC774\uBBF8\uC9C0 \uC124\uC815\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCCAB \uBC88\uC9F8 \uB2E8\uACC4\uC5D0\uC11C\uB294 PNG \uC774\uBBF8\uC9C0\uB97C \uBC30\uACBD\uC73C\uB85C \uC0BD\uC785\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uADF8 \uC804\uC5D0 \uBA3C\uC800 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "starting-a-new-project"
  }), `\uC0C8 \uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8 \uC774\uB984\uC744 "MyApplication1"\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. \uC774 \uD504\uB85C\uC81D\uD2B8\uB294 "STM32F746G Discovery Kit"\uB97C \uAE30\uBC18\uC73C\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uB978 STM32 \uD3C9\uAC00 \uD0A4\uD2B8\uB97C \uAC00\uC9C0\uACE0 \uC788\uB2E4\uBA74 TouchGFX Designer\uC5D0\uC11C \uC81C\uACF5\uB418\uB294 \uBAA9\uB85D\uC744 \uBCF4\uACE0 \uC9C0\uC6D0\uB418\uB294 \uBCF4\uB4DC\uAC00 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uC9C0\uC6D0\uB418\uB294 \uBCF4\uB4DC\uAC00 \uC5C6\uB2E4\uBA74 "Simulator"\uB97C \uC120\uD0DD\uD558\uC5EC Windows \uCEF4\uD4E8\uD130\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uD574\uC0C1\uB3C4\uAC00 480x272\uC778 \uB514\uC2A4\uD50C\uB808\uC774\uC5D0\uC11C \uC720\uD6A8\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD574\uC0C1\uB3C4\uAC00 \uB2E4\uB978 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF\uC744 \uC120\uD0DD\uD558\uBA74 \uADF8\uB798\uD53D\uC774 \uC2A4\uD06C\uB9B0\uC5D0 \uB9DE\uC9C0 \uC54A\uC9C0\uB9CC \uC790\uC2B5\uC11C\uB294 \uB9C8\uCE60 \uC218 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/new-proj-4-17.png",
    mdxType: "Figure"
  }, "STM32F746\uC744 \uC0AC\uC6A9\uD574 \uC0C8 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBE48 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0C8\uB85C \uC0DD\uC131\uD588\uC73C\uB2C8 \uC774\uC81C \uD504\uB85C\uC81D\uD2B8\uB97C \uC218\uC815\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uB2E4\uC218\uC758 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0\uC5D0\uB294 \uC5EC\uB7EC \uC704\uC82F\uC774 \uD3EC\uD568\uB418\uBA70, \uC704\uC82F\uC740 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0\uC740 \uC804\uCCB4 \uB514\uC2A4\uD50C\uB808\uC774\uB97C \uC544\uC6B0\uB974\uBBC0\uB85C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uD55C \uBC88\uC5D0 \uD558\uB098\uC529 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uAC00\uC7A5 \uBA3C\uC800 \uCD08\uAE30 \uC2A4\uD06C\uB9B0\uC758 \uC774\uB984\uC744 \uC544\uB798\uC640 \uAC19\uC774 "Main"\uC73C\uB85C \uBCC0\uACBD\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uC67C\uCABD \uBAA9\uB85D\uC5D0\uC11C \uC2A4\uD06C\uB9B0\uC744 \uC120\uD0DD\uD55C \uD6C4(1) \uC624\uB978\uCABD \uC774\uB984 \uD544\uB4DC\uC5D0\uC11C \uC774\uB984\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4(2). \uADF8 \uBC16\uC5D0 \uC67C\uCABD \uBAA9\uB85D(1)\uC5D0\uC11C \uC2A4\uD06C\uB9B0\uC744 \uB354\uBE14 \uD074\uB9AD\uD558\uAC70\uB098, \uC6B0\uD074\uB9AD\uD558\uC5EC \uC774\uB984\uC744 \uBCC0\uACBD\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[60, 13], [435, 10]],
    imageSource: "/img/tutorials/tutorial-02/change-name-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uC2A4\uD06C\uB9B0 \uC774\uB984 \uBCC0\uACBD\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "inserting-a-background"
  }), `\uBC30\uACBD \uC0BD\uC785\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC77C\uBC18\uC801\uC73C\uB85C \uC2A4\uD06C\uB9B0 \uBC30\uACBD \uC804\uCCB4\uB97C 1\uAC1C \uC774\uC0C1\uC758 \uC704\uC82F\uC73C\uB85C \uB36E\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uBC15\uC2A4\uB098 \uC774\uBBF8\uC9C0 \uC704\uC82F\uB3C4 \uAD1C\uCC2E\uC2B5\uB2C8\uB2E4. \uC704\uC82F\uC73C\uB85C \uB36E\uC9C0 \uC54A\uC73C\uBA74 \uBC30\uACBD\uC774 \uAC80\uC740\uC0C9\uC774 \uB429\uB2C8\uB2E4. \uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uBA3C\uC800 \uD30C\uC77C\uC744 \uAC00\uC838\uC640\uC57C \uD569\uB2C8\uB2E4. TouchGFX\uB294 BMP \uC774\uBBF8\uC9C0\uC640 PNG \uC774\uBBF8\uC9C0\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4(\uBC18\uBA74 TouchGFX Designer\uB294 PNG \uC774\uBBF8\uC9C0\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4). \uB2E4\uB9CC \uD06C\uAE30\uAC00 \uB354 \uC791\uACE0 \uD22C\uBA85\uD55C \uD53D\uC140\uC744 \uC9C0\uC6D0\uD558\uAE30 \uB54C\uBB38\uC5D0 BMP \uD30C\uC77C\uBCF4\uB2E4 PNG \uD30C\uC77C\uC774 \uC8FC\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC774\uBBF8\uC9C0\uB294 \uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(77460)/* ["default"] */ .Z)
  }, "\uB9C1\uD06C"), `\uC5D0\uC11C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uD30C\uC77C\uC744 \uB514\uC2A4\uD06C \uB514\uB809\uD130\uB9AC\uC5D0 \uC555\uCD95 \uD574\uC81C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBC30\uACBD\uC73C\uB85C \uC0AC\uC6A9\uD560 \uD30C\uC77C\uC758 \uC774\uB984\uC740 "background.png"\uC785\uB2C8\uB2E4. \uD30C\uC77C\uC744 \uAC00\uC838\uC624\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Images \uD0ED\uC744 \uC120\uD0DD\uD558\uACE0 "+" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC555\uCD95\uC744 \uD47C \uD3F4\uB354\uB85C \uC774\uB3D9\uD558\uC5EC "background.png" \uD30C\uC77C\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Open\uC744 \uB20C\uB7EC \uAC00\uC838\uC635\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uD30C\uC77C \uD0D0\uC0C9\uAE30\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C Images \uD0ED\uC73C\uB85C, \uD639\uC740 \uCE94\uBC84\uC2A4\uB85C \uC9C1\uC811 \u201C\uB04C\uC5B4\uC640\uC11C\u201D \uD504\uB85C\uC81D\uD2B8\uC5D0 \uAC00\uC838\uC624\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E8, \uD504\uB85C\uC81D\uD2B8\uB85C \uAC00\uC838\uC628 \uC774\uBBF8\uC9C0\uB294 \uBCC0\uD658 \uBC0F \uCEF4\uD30C\uC77C\uB418\uC5B4 \uD50C\uB798\uC2DC \uACF5\uAC04\uC744 \uCC28\uC9C0\uD558\uAC8C \uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD544\uC694\uD55C \uC774\uBBF8\uC9C0\uB9CC \uAC00\uC838\uC640\uC57C \uD569\uB2C8\uB2E4.  \uC67C\uCABD\uC5D0\uC11C "Images" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD55C \uD6C4(1) \uC624\uB978\uCABD\uC5D0\uC11C "+" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC(2) \uC774\uBBF8\uC9C0\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4. TouchGFX Designer\uC5D0\uC11C \uD30C\uC77C \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC5F4\uB9AC\uBA74 \uC5EC\uAE30\uC11C \uB2E4\uC6B4\uB85C\uB4DC\uB41C \uC774\uBBF8\uC9C0\uB85C \uC774\uB3D9\uD558\uC5EC \u201Cbackground.png\u201D \uD30C\uC77C\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[7, 18], [460, 4]],
    imageSource: "/img/tutorials/tutorial-02/image-import-4-17.png",
    mdxType: "FigureWithPoints"
  }, `background.png \uC774\uBBF8\uC9C0 \uAC00\uC838\uC624\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uAC83\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD560 \uC900\uBE44\uB97C \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC774\uBBF8\uC9C0 \uC704\uC82F\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC67C\uCABD\uC5D0\uC11C Canvas \uBC84\uD2BC\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4(1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC704\uC82F \uBAA9\uB85D\uC5D0\uC11C Image \uC704\uC82F\uC744 \uCC3E\uC2B5\uB2C8\uB2E4(2).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uD074\uB9AD\uD558\uC5EC Image \uC704\uC82F\uC744 \uC2A4\uD06C\uB9B0\uC5D0 \uC0BD\uC785\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F \uC774\uB984\uC740 \uC0AC\uC6A9 \uBAA9\uC801\uC744 \uC27D\uAC8C \uC54C \uC218 \uC788\uB294 \uC774\uB984\uC73C\uB85C \uBCC0\uACBD\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 "backgroundImage"\uB85C \uBCC0\uACBD\uD558\uACA0\uC2B5\uB2C8\uB2E4(3).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[7, 2], [270, 18], [440, 10]],
    imageSource: "/img/tutorials/tutorial-02/insert-widget-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\uC774\uBBF8\uC9C0 \uC704\uC82F \uC0BD\uC785\uD558\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704\uC82F\uC744 \uC0BD\uC785\uD558\uBA74 \uC77C\uBC18\uC801\uC73C\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC704\uCE58`), ` \uB610\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC0C9\uC0C1`), `\uACFC \uAC19\uC740 \uC18D\uC131\uC744 \uAD6C\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uC120\uD0DD\uD55C \uC704\uC82F\uC758 \uC18D\uC131\uC740 TouchGFX Designer\uC5D0\uC11C \uC624\uB978\uCABD\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0 \uC704\uC82F\uC740 \uC67C\uCABD\uC5D0 \uD2B8\uB9AC \uBDF0 \uD615\uC2DD\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4(1). \uC5EC\uAE30\uC5D0\uC11C \uC88C\uD45C 0,0\uB3C4 \uC88B\uC9C0\uB9CC Image \uC18D\uC131\uC744 \uBCC0\uACBD\uD558\uC5EC \uC55E\uC5D0\uC11C \uAC00\uC838\uC628 "background.png" \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uACA0\uC2B5\uB2C8\uB2E4. Image \uC18D\uC131(2)\uC744 \uD074\uB9AD\uD558\uACE0 "background.png"\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[55, 20], [435, 75]],
    imageSource: "/img/tutorials/tutorial-02/selecting-image-as-background-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\uAC00\uC838\uC628 \uC774\uBBF8\uC9C0 \uD30C\uC77C\uC744 \uBC30\uACBD\uC73C\uB85C \uC120\uD0DD\uD558\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB85C\uC368 \uC624\uC9C1 \uBC30\uACBD \uC774\uBBF8\uC9C0\uB9CC\uC774 \uC804\uCCB4 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uCC28\uC9C0\uD558\uB294 \uC2A4\uD06C\uB9B0 1\uAC1C\uAC00 \uD3EC\uD568\uB41C \uAC04\uB2E8\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C \uB2E8\uACC4\uB85C \uB118\uC5B4\uAC00\uAE30 \uC804\uC5D0 "Run Simulator" \uBC84\uD2BC\uC744 \uB20C\uB7EC \uD504\uB85C\uC81D\uD2B8\uAC00 \uCEF4\uD30C\uC77C\uB418\uC5B4 \uC815\uC0C1\uC801\uC73C\uB85C \uC2E4\uD589\uB418\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uB2E4\uB9CC \uC544\uC9C1 \uD65C\uC131 \uC704\uC82F\uC744 \uCD94\uAC00\uD558\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC5D0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uC778\uD130\uB799\uC158 \uD560 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-2-adding-buttons"
  }), `2\uB2E8\uACC4: \uBC84\uD2BC \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uBC84\uD2BC 2\uAC1C\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00\uD55C \uD6C4 \uB2E4\uB978 PNG \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD558\uC5EC \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-buttons"
  }), `\uBC84\uD2BC \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `Widgets \uD0ED\uC5D0\uC11C Button \uC704\uC82F\uC744 \uD074\uB9AD\uD558\uC5EC \uBC84\uD2BC\uC744 \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4(1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8 \uC704\uC82F\uC744 \uB9C8\uC6B0\uC2A4\uB85C \uB04C\uC5B4\uC640\uC11C \uC704\uCE58\uB97C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC704\uCE58\uB97C \uBCC0\uACBD\uD560 \uBC84\uD2BC\uC758 \uC88C\uD45C\uB294 x=40, y=60\uC785\uB2C8\uB2E4. \uC624\uB978\uCABD Properties \uD0ED\uC5D0\uC11C \uC704\uCE58\uB97C \uD655\uC778\uD569\uB2C8\uB2E4(2).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC704\uC82F\uC758 \uC774\uB984\uC744 "buttonUp"\uC73C\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `x=40, y=150\uC5D0 Button \uC704\uC82F\uC744 \uD558\uB098 \uB354 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uC774 \uC704\uC82F\uC758 \uC774\uB984\uC744 "buttonDown"\uC73C\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uD504\uB85C\uC81D\uD2B8\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC644\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[265, 18], [435, 25]],
    imageSource: "/img/tutorials/tutorial-02/adding-buttons-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uBC84\uD2BC 2\uAC1C \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `X \uBC0F Y \uC18D\uC131\uC5D0\uC11C \uC791\uC740 \uC704/\uC544\uB798 \uBC84\uD2BC\uC744 \uC0AC\uC6A9\uD574 \uC704\uC82F\uC758 \uC704\uCE58\uB97C \uC815\uBC00\uD558\uAC8C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uCE94\uBC84\uC2A4\uC5D0\uC11C \uBC84\uD2BC \uC704\uC82F\uC744 \uD074\uB9AD\uD558\uC5EC \uC120\uD0DD\uD55C \uD6C4 \uD0A4\uBCF4\uB4DC \uD654\uC0B4\uD45C \uD0A4\uB97C \uC774\uC6A9\uD574 \uC704\uCE58\uB97C \uC870\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "changing-the-look"
  }), `\uBAA8\uC2B5 \uBCC0\uACBD\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uBC84\uD2BC\uC758 \uD615\uD0DC\uB97C \uBC14\uAFD4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uBC84\uD2BC\uC740 \uB450 \uAC1C\uC758 \uC774\uBBF8\uC9C0\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. \uD558\uB098\uB294 \uBC84\uD2BC\uC744 \uB20C\uB800\uC744 \uB54C \uD45C\uC2DC\uB418\uB294 \uC774\uBBF8\uC9C0\uC774\uACE0, \uB098\uBA38\uC9C0 \uD558\uB098\uB294 \uBC84\uD2BC\uC744 \uB204\uB974\uC9C0 \uC54A\uC558\uC744 \uB54C(\uC190\uC744 \uB5D0\uC744 \uB54C) \uD45C\uC2DC\uB418\uB294 \uC774\uBBF8\uC9C0\uC785\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uC704\uC82F\uC740 \uC0AC\uC804 \uC124\uC815\uB41C \uC2A4\uD0C0\uC77C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uC0AC\uC804 \uC124\uC815\uB41C \uC2A4\uD0C0\uC77C\uC774\uB780 \uD2B9\uC815 \uD615\uD0DC\uB97C \uB098\uD0C0\uB0B4\uB294 \uC704\uC82F\uC758 \uD2B9\uC815 \uC18D\uC131 \uAC12\uC744 \uB9D0\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC2A4\uD0C0\uC77C\uC740 \uBE60\uB978 \uD504\uB85C\uD1A0\uD0C0\uC774\uD551\uC5D0 \uC801\uD569\uD558\uC9C0\uB9CC \uC2E4\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD560 \uB54C\uB294 \uC2A4\uD0C0\uC77C\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC804 \uB2E8\uACC4\uC640 \uAC19\uC774 Images \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uC0C1\uB2E8 \uC624\uB978\uCABD \uBAA8\uD241\uC774\uC5D0 \uC788\uB294 "+" \uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD558\uACE0 \uC77C\uBD80 \uC774\uBBF8\uC9C0\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4. \uC774\uBC88\uC5D0\uB294 4\uAC1C\uC758 \uC774\uBBF8\uC9C0, "button_down_pressed.png", "button_down_released.png", "button_up_pressed.png", "button_up_released.png"\uB97C \uAC00\uC838\uC624\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/image-import-2-4-17.png",
    mdxType: "FigureWithPoints"
  }, "4\uAC1C\uC758 \uBC84\uD2BC \uC774\uBBF8\uC9C0 \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBBF8\uC9C0\uB97C 5\uAC1C\uB9CC \uAC00\uC838\uC654\uC9C0\uB9CC \uD504\uB85C\uC81D\uD2B8\uC5D0\uB294 \uCD1D 7\uAC1C\uC758 \uC774\uBBF8\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uB098\uBA38\uC9C0 \uB450 \uAC1C\uC758 \uC774\uBBF8\uC9C0\uB294 \uBC84\uD2BC\uC5D0 \uAE30\uBCF8\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 \uD30C\uB780\uC0C9 \uC774\uBBF8\uC9C0\uB85C, \uB354 \uC774\uC0C1 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA74 \uC790\uB3D9\uC73C\uB85C \uC0AD\uC81C\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCE94\uBC84\uC2A4\uB85C \uB3CC\uC544\uAC00\uC11C "buttonUp" \uBC84\uD2BC\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4. "Released Image" \uC18D\uC131(1)\uACFC "Project\u201D\uB97C \uCC28\uB840\uB300\uB85C \uD074\uB9AD\uD55C \uD6C4(2) \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC815\uD655\uD55C \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4(3). "buttonUp"\uC774\uBBC0\uB85C Released Image \uC18D\uC131\uC5D0\uC11C "button_up_released.png"\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. Pressed Image\uC5D0\uC11C\uB294 "button_up_pressed.png" \uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[440, 75], [390, 90], [425, 124]],
    imageSource: "/img/tutorials/tutorial-02/button-selecting-up-image-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\uBC84\uD2BC \uC774\uBBF8\uC9C0 \uC124\uC815\uD558\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC758 \uCE94\uBC84\uC2A4\uC5D0\uC11C \uBC84\uD2BC\uC758 \uD615\uD0DC\uB97C \uBC14\uB85C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/bitmap-for-button-4-17.png",
    mdxType: "Figure"
  }, "\uBC84\uD2BC \uBE44\uD2B8\uB9F5 \uC124\uC815\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"buttonDown"\uC758 \uACBD\uC6B0\uC5D0\uB294 Released Image\uC5D0\uC11C "button_down_released.png"\uB97C, \uADF8\uB9AC\uACE0 Pressed Image\uC5D0\uC11C\uB294 "button_down_pressed.png"\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uBC84\uD2BC \uC124\uC815\uC744 \uBAA8\uB450 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4. "Run Simulator"\uB97C \uD074\uB9AD\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD574\uBD05\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB450 \uAC1C\uC758 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uBCF4\uACE0 \uC62C\uBC14\uB974\uAC8C \uAD6C\uC131\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-4-17.png",
    mdxType: "Figure"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Tip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "Tip"
  }, "TouchGFX\uC5D0\uC11C \uB300\uBD80\uBD84\uC758 \uC704\uC82F\uC740 \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD574 \uD06C\uAE30\uB97C \uC815\uC758\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC704\uC82F \uD06C\uAE30\uB97C \uC9C1\uC811 \uC870\uC815\uD560 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC774\uC720\uB294 \uC131\uB2A5 \uBB38\uC81C\uC5D0\uC11C \uBE44\uB86F\uB429\uB2C8\uB2E4(", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/general-ui-component-performance",
    mdxType: "Link"
  }, "\uC77C\uBC18 UI \uAD6C\uC131\uC694\uC18C \uC131\uB2A5"), " \uCC38\uC870). \uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC758 \uBC84\uD2BC\uC744 \uC608\uB85C \uB4E4\uC5B4, \uC704\uC82F\uC758 \uD06C\uAE30\uB97C \uBCC0\uACBD\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uBC84\uD2BC\uC758 \uC774\uBBF8\uC9C0 \uC138\uD2B8\uB97C \uC0C8\uB85C \uC0DD\uC131\uD558\uC5EC Released Image\uC640 Pressed Image\uB85C \uC0AC\uC6A9\uD558\uBA74 \uB429\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-3-adding-text"
  }), `3\uB2E8\uACC4: \uD14D\uC2A4\uD2B8 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uB300\uD615 TextArea \uC704\uC82F\uC744 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 \uD14D\uC2A4\uD2B8\uAC00 TextArea \uC704\uC82F\uC744 \uC0AC\uC6A9\uD574 \uD45C\uC2DC\uB418\uC9C0\uB9CC TextArea\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00\uD558\uAE30 \uC804\uC5D0 \uBA3C\uC800 \uC774\uBBF8\uC9C0\uB97C \uD558\uB098 \uB354 \uCD94\uAC00\uD558\uC5EC \uD14D\uC2A4\uD2B8 \uBC30\uACBD\uC744 \uBA4B\uC9C0\uAC8C \uBC14\uAFD4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "text-background"
  }), `\uD14D\uC2A4\uD2B8 \uBC30\uACBD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB2E4\uB978 \uC774\uBBF8\uC9C0 \uD30C\uC77C\uB85C "counter_box.png"\uB97C \uAC00\uC838\uC635\uB2C8\uAC00.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC0C8\uB85C\uC6B4 \uC774\uBBF8\uC9C0 \uC704\uC82F\uC744 \uC0BD\uC785\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC774\uB984\uC744 "textBackground"\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC88C\uD45C\uB97C x=250, y=59\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Image`), ` \uC18D\uC131\uC744 "counter_box"\uB85C \uC124\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/add-background-for-text-4-17.png",
    mdxType: "Figure"
  }, "\uCD94\uAC00\uB41C \uD14D\uC2A4\uD2B8 \uBC30\uACBD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-text"
  }), `\uD14D\uC2A4\uD2B8 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C TextArea \uC704\uC82F\uC744 \uCD94\uAC00\uD560 \uC900\uBE44\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. Widgets / Miscellaneous \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uC5D0\uC11C TextArea \uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4. \uC704\uC82F\uC758 \uC774\uB984\uC744 "textCounter"\uB85C \uBCC0\uACBD\uD55C \uD6C4 \uC704\uCE58\uB97C x=250, y=90\uB85C \uBC14\uAFC9\uB2C8\uB2E4. \uC704\uC82F\uC5D0\uC11C \uB300\uD615 \uD14D\uC2A4\uD2B8\uB97C \uD45C\uC2DC\uD574\uC57C \uD558\uBBC0\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Auto-size`), ` \uC18D\uC131\uC744 \uC120\uD0DD \uD574\uC81C\uD558\uACE0, \uD06C\uAE30\uB294 W=152, H=90\uC73C\uB85C \uACE0\uC815 \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/add-textarea-4-17.png",
    mdxType: "Figure"
  }, "TextArea \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea \uC704\uC82F\uC758 \uAE30\uBCF8 \uC0C9\uC0C1\uC740 \uAC80\uC740\uC0C9\uC73C\uB85C \uBC30\uACBD\uC5D0\uC11C\uB294 \uB2E4\uC18C \uC5B4\uB461\uAC8C \uBCF4\uC785\uB2C8\uB2E4. "textCounter"\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Color`), ` \uC18D\uC131\uC744 \uC120\uD0DD\uD55C \uD6C4 \uC0C9\uC0C1\uC744 \uD770\uC0C9\uC73C\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/text-color-4-17.png",
    mdxType: "Figure"
  }, "\uD14D\uC2A4\uD2B8 \uC0C9\uC0C1 \uBCC0\uACBD\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "changing-the-text-typography"
  }), `\uD14D\uC2A4\uD2B8 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C(Typography) \uBCC0\uACBD\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB354 \uD070 \uC0AC\uC774\uC988\uC758 \uD14D\uC2A4\uD2B8\uB97C \uC6D0\uD55C\uB2E4\uBA74, \uBC29\uBC95\uC740 \uD14D\uC2A4\uD2B8\uC5D0 \uC0AC\uC6A9\uD560 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Typography`), `\uB97C \uBCC0\uACBD\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB780 \uD14D\uC2A4\uD2B8\uC5D0 \uC801\uC6A9\uB418\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uD3F0\uD2B8`), ` (\uC608: Verdana), `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uD06C\uAE30`), `, \uBC0F `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `\uC815\uB82C`), ` (\uC67C\uCABD, \uC624\uB978\uCABD \uB610\uB294 \uC911\uC559)\uC744 \uB9D0\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uC0C1\uB2E8 \uC67C\uCABD\uC5D0 \uC788\uB294 Texts \uD0ED\uC744 \uC120\uD0DD\uD558\uACE0(1), Typographies\uB97C \uD074\uB9AD\uD55C \uB2E4\uC74C(2), "Default" \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC758 \uD06C\uAE30\uB97C 80\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4(3).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[6, 35], [80, 0], [80, 40]],
    imageSource: "/img/tutorials/tutorial-02/typography-size-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\uD14D\uC2A4\uD2B8 \uD06C\uAE30 \uBCC0\uACBD\uD558\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uB2E8 \uC67C\uCABD\uC5D0 \uC788\uB294 "Canvas" \uD0ED\uC744 \uD074\uB9AD\uD558\uC5EC \uC2A4\uD06C\uB9B0\uC73C\uB85C \uB3CC\uC544\uAC00\uBA74 \uC774\uC81C \uD14D\uC2A4\uD2B8\uAC00 \uB354 \uD06C\uAC8C \uBCF4\uC785\uB2C8\uB2E4. \uC2E4\uC81C\uB85C \uC804\uCCB4 \uD14D\uC2A4\uD2B8\uC778 "New Text"\uB97C \uC77D\uC744 \uC218\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Alignment`), ` \uC18D\uC131\uC5D0\uC11C \uC911\uC559 \uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD558\uC5EC \uD14D\uC2A4\uD2B8\uB97C \uAC00\uC6B4\uB370\uB85C \uC815\uB82C\uD569\uB2C8\uB2E4(1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[460, 100]],
    imageSource: "/img/tutorials/tutorial-02/text-alignment-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uD14D\uC2A4\uD2B8 \uC815\uB82C \uBCC0\uACBD\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "using-a-wildcard-text"
  }), `\uC640\uC77C\uB4DC\uCE74\uB4DC \uD14D\uC2A4\uD2B8 \uC0AC\uC6A9\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBC88\uC5D0\uB294 TextArea\uC5D0\uC11C \uBC84\uD2BC\uC744 \uC0AC\uC6A9\uD574 \uBCC0\uACBD\uD560 \uC218 \uC788\uB294 \uC22B\uC790\uB97C \uD45C\uC2DC\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574\uC11C\uB294 "\uC640\uC77C\uB4DC\uCE74\uB4DC"\uB97C \uCD94\uAC00\uD558\uC5EC \uD14D\uC2A4\uD2B8\uB97C \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. \uC640\uC77C\uB4DC\uCE74\uB4DC\uB780 \uD14D\uC2A4\uD2B8\uC5D0\uC11C \uB7F0\uD0C0\uC784 \uC2DC \uC22B\uC790\uC640 \uAC19\uC774 \uB2E4\uB978 \uAC83\uC73C\uB85C \uB300\uCCB4\uD560 \uC218 \uC788\uB294 \uB9C8\uCEE4("`, `<`, `d`, `>`, `")\uB97C \uB9D0\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uC22B\uC790\uB97C \uD45C\uC2DC\uD560 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 \uD14D\uC2A4\uD2B8\uB97C "`, `<`, `d`, `>`, `"\uB85C \uBCC0\uACBD\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB2E4\uB978 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uB3D9\uC801\uC778 \uBD80\uBD84\uC744 \uACE0\uC815 \uD14D\uC2A4\uD2B8\uC640 \uD568\uAED8 \uACB0\uD569\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4(\uC608: "Temperature: `, `<`, `temp`, `>`, ` \xB0C").`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "<...> \uC640\uC77C\uB4DC\uCE74\uB4DC \uAD04\uD638 \uC0AC\uC774\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uD14D\uC2A4\uD2B8\uB294 \uC120\uD0DD \uC0AC\uD56D\uC785\uB2C8\uB2E4. \uC774 \uD14D\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD574 \uCF54\uB4DC \uC791\uC131\uC790 \uB610\uB294 \uBC88\uC5ED\uC790\uC5D0\uAC8C \uC5B4\uB5A4 \uC815\uBCF4\uAC00 \uC640\uC77C\uB4DC\uCE74\uB4DC\uC5D0 \uC0BD\uC785\uB418\uB294\uC9C0 \uC54C\uB9B4 \uC218 \uC788\uC73C\uBA70, \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uBE44\uC6CC\uB458 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD14D\uC2A4\uD2B8\uB97C "`, `<`, `d`, `>`, `"\uB85C \uBCC0\uACBD\uD558\uACE0(1), "Wildcard 1"\uC744 \uD074\uB9AD\uD558\uACE0(2), \uAE30\uBCF8\uAC12\uC744 "0"\uC73C\uB85C \uC124\uC815\uD55C \uD6C4 "Use wildcard buffer"\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[460, 70], [470, 80]],
    imageSource: "/img/tutorials/tutorial-02/wildcard-text-4-17.png",
    mdxType: "FigureWithPoints"
  }, `\uC640\uC77C\uB4DC\uCE74\uB4DC \uD14D\uC2A4\uD2B8 \uAD6C\uC131\uD558\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Run Simulator"\uB97C \uD074\uB9AD\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD574\uBD05\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-2.png",
    mdxType: "Figure"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uD14D\uC2A4\uD2B8 \uBC0F \uAE00\uAF34 \uC0AC\uC6A9\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\uD14D\uC2A4\uD2B8 \uBC0F \uAE00\uAF34"), " \uD398\uC774\uC9C0\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-4-adding-code"
  }), `4\uB2E8\uACC4: \uCF54\uB4DC \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C\uB294 \uC778\uD130\uB799\uC158\uC744 \uD1B5\uD574 \uC561\uC158\uC744 \uBC84\uD2BC\uC5D0 \uC190\uC27D\uAC8C \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC778\uD130\uB799\uC158\uC774 \uD2B8\uB9AC\uAC70(\uC608: \uBC84\uD2BC \uB204\uB984)\uB97C \uC561\uC158(\uC608: \uCF54\uB4DC \uC2E4\uD589, \uC694\uC18C \uC774\uB3D9)\uC5D0 \uC5F0\uACB0\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C1\uB2E8 \uC624\uB978\uCABD \uBAA8\uD241\uC774\uC5D0 \uC788\uB294 Interactions \uD0ED\uC744 \uC120\uD0DD\uD558\uACE0(1) "+" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uC778\uD130\uB799\uC158\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[480, 0]],
    imageSource: "/img/tutorials/tutorial-02/add-interactions-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uC778\uD130\uB799\uC158 \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC5D0\uC11C\uB294 \uBC84\uD2BC\uB9C8\uB2E4 \uD558\uB098\uC529, 2\uAC1C\uC758 \uC778\uD130\uB799\uC158\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uB450 \uC778\uD130\uB799\uC158 \uBAA8\uB450 \uD604\uC7AC \uC2A4\uD06C\uB9B0\uC5D0\uC11C C++ \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uB3C4\uB85D \uC124\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Trigger`), ` \uC18D\uC131\uC744 "Button is clicked"\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Choose clicked source`), ` \uC18D\uC131\uC744 "buttonUp"\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Action`), ` \uC18D\uC131\uC744 "Call new virtual function"\uC73C\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Function Name`), `\uC73C\uB85C "buttonUpClicked"\uB97C \uC785\uB825\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB610\uD55C \uB098\uC911\uC5D0 \uC6A9\uB3C4\uB97C \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D Interaction\uC744 \uC720\uC6A9\uD55C \uC774\uB984\uC73C\uB85C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/configure-interaction-4-17.png",
    mdxType: "Figure"
  }, "\uBC84\uD2BC \uC778\uD130\uB799\uC158 \uAD6C\uC131\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"buttonDown"\uC744 "clicked source"\uB85C \uC124\uC815\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uBE44\uC2B7\uD55C \uC778\uD130\uB799\uC158\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"+"\uB97C \uD074\uB9AD\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uC778\uD130\uB799\uC158\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Trigger`), ` \uC18D\uC131\uC744 "Button is clicked"\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Choose clicked source`), ` \uC18D\uC131\uC744 "buttonDown"\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Action`), ` \uC18D\uC131\uC744 "Call new virtual function"\uC73C\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "li"
  }, `Function Name`), `\uC73C\uB85C "buttonDownClicked"\uB97C \uC785\uB825\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uB610\uD55C \uB098\uC911\uC5D0 \uC6A9\uB3C4\uB97C \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D Interaction\uC744 \uC720\uC6A9\uD55C \uC774\uB984\uC73C\uB85C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Generate Code" \uB610\uB294 "Run Simulator" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 TouchGFX Designer\uAC00 \uC0DD\uC131 \uCF54\uB4DC\uB97C \uC55E\uC5D0\uC11C \uC0DD\uC131\uD55C \uC778\uD130\uB799\uC158\uC5D0\uC11C \uC785\uB825\uD55C \uC815\uBCF4\uB85C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4. \uC774 \uB9D0\uC740 \uD604\uC7AC \uC2A4\uD06C\uB9B0\uC758 view \uAE30\uBCF8 \uD074\uB798\uC2A4\uC5D0\uC11C \uAC00\uC0C1 \uD568\uC218 2\uAC1C\uAC00 \uC0DD\uC131\uB41C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C\uBD80\uD130\uB294 \uC0DD\uC131 \uCF54\uB4DC\uAC00 \uC5B4\uB5BB\uAC8C \uC2E4\uD589\uB418\uB294\uC9C0 \uC880 \uB354 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uD558\uB2E8 \uC624\uB978\uCABD\uC5D0\uC11C "Generate Code"\uB97C \uD074\uB9AD\uD55C \uD6C4 \uD558\uB2E8 \uC67C\uCABD\uC5D0 \uC788\uB294 "Files" \uBC84\uD2BC\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD3F4\uB354\uC5D0 \uD30C\uC77C \uD0D0\uC0C9\uAE30\uAC00 \uB098\uD0C0\uB0A9\uB2C8\uB2E4. \uC544\uB798 \uD3F4\uB354\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/TouchGFX/generated/gui_generated/include/gui_generated/main_screen/`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainViewBase.hpp`), ` \uD30C\uC77C\uC744 \uC5FD\uB2C8\uB2E4. \uC6D0\uD55C\uB2E4\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C \uC911\uC5D0\uC11C 1\uAC1C\uB97C \uC5F4\uACE0 IDE\uC5D0\uC11C \uD30C\uC77C\uC744 \uCC3E\uB294 \uBC29\uBC95\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `IDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C \uACBD\uB85C`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `STM32CubeIDE`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MyApplication1/STM32CubeIDE/.project`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `Visual Studio`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MyApplication1/TouchGFX/simulator/msvs/Application.sln`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `IAR Embedded Workbench 8`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MyApplication1/EWARM/Project.eww`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `KEIL uVision v5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "td"
  }, `MyApplication1/MDK-ARM/STM32F746G_DISCO.uvprojx`))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC774 \uAE30\uBCF8\uC801\uC73C\uB85C \uBAA8\uB450 \uD45C\uC2DC\uB418\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8 \uB3C4\uAD6C \uCCB4\uC778\uC744 \uBCC0\uACBD\uD558\uB824\uBA74 STM32CubeMX \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/working-with-touchgfx/using-ides-with-touchgfx",
    mdxType: "Link"
  }, "TouchGFX\uC5D0\uC11C IDE \uC0AC\uC6A9\uD558\uAE30"), " \uD398\uC774\uC9C0\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC0C8\uB85C\uC6B4 \uAC00\uC0C1 \uBA54\uC18C\uB4DC\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainViewBase`), ` \uD074\uB798\uC2A4\uC758 public \uBD80\uBD84\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uC55E\uC5D0\uC11C \uC0DD\uC131\uD55C \uBA54\uC18C\uB4DC\uB294 \uD604\uC7AC \uAD6C\uD604\uCCB4\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4. \uC774\uC720\uB294 \uD504\uB85C\uADF8\uB798\uBA38\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), ` \uD558\uC704\uD074\uB798\uC2A4\uC5D0\uC11C \uB450 \uBA54\uC18C\uB4DC\uB97C \uC9C1\uC811 \uAD6C\uD604\uD574\uC57C \uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainViewBase.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{24-27,29-32}",
    "{24-27,29-32}": true
  }), `/*********************************************************************************/
/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/
/*********************************************************************************/
#ifndef MAINVIEWBASE_HPP
#define MAINVIEWBASE_HPP

#include <gui/common/FrontendApplication.hpp>
#include <mvp/View.hpp>
#include <gui/main_screen/MainPresenter.hpp>
#include <touchgfx/widgets/Image.hpp>
#include <touchgfx/widgets/Button.hpp>
#include <touchgfx/widgets/TextAreaWithWildcard.hpp>

class MainViewBase : public touchgfx::View<MainPresenter>
{
public:
  MainViewBase();
  virtual ~MainViewBase() {}
  virtual void setupScreen();

   /*
    * Custom Action Handlers
    */
  virtual void buttonUpClicked()
  {
    // Override and implement this function in MainView
  }

  virtual void buttonDownClicked()
  {
    // Override and implement this function in MainView
  }
...

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "implementing-the-virtual-methods"
  }), `\uAC00\uC0C1 \uBA54\uC18C\uB4DC \uAD6C\uD604\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC0AC\uC6A9\uC790\uAC00 \uBC84\uD2BC\uC744 \uB20C\uB800\uC744 \uB54C \uCE74\uC6B4\uD130 \uAC12\uC774 \uBC14\uB00C\uB3C4\uB85D \uB450 \uBA54\uC18C\uB4DC\uB97C \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), ` \uD074\uB798\uC2A4\uC5D0\uC11C \uB450 \uBA54\uC18C\uB4DC\uB97C \uB2E4\uC2DC \uC120\uC5B8\uD569\uB2C8\uB2E4. \uC774 \uD074\uB798\uC2A4\uB294 \uC544\uB798 \uD30C\uC77C\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/TouchGFX/gui/include/gui/main_screen/MainView.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uD30C\uC77C\uC744 \uC5F4\uACE0 \uB450 \uD568\uC218 \uC120\uC5B8\uC744 \uD074\uB798\uC2A4\uC5D0 \uC0BD\uC785\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14,15}",
    "{14,15}": true
  }), `#ifndef MAIN_VIEW_HPP
#define MAIN_VIEW_HPP

#include <gui_generated/main_screen/MainViewBase.hpp>
#include <gui/main_screen/MainPresenter.hpp>

class MainView : public MainViewBase
{
public:
  MainView();
  virtual ~MainView() {}
  virtual void setupScreen();
  virtual void tearDownScreen();
  virtual void buttonUpClicked();
  virtual void buttonDownClicked();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uAD6C\uD604\uCCB4\uB97C .cpp \uD30C\uC77C\uC5D0 \uCD94\uAC00\uD558\uC5EC \uB450 \uBA54\uC18C\uB4DC\uB97C \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC758 \uC704\uCE58\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication1/gui/src/main_screen/MainView.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uAD6C\uD604\uCCB4\uC5D0\uC11C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx_printf`), `\uC5D0 \uD638\uCD9C\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD588\uC744 \uB54C \uC5EC\uB7EC \uC904\uC758 \uD14D\uC2A4\uD2B8\uB97C \uCD9C\uB825\uD558\uB294 \uB370 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 utils.hpp\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uD0C0\uAC9F\uC5D0\uC11C \uC2E4\uD589\uD574\uB3C4 \uD0C0\uAC9F\uC5D0 \uBBF8\uCE58\uB294 \uC601\uD5A5\uC740 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{2-2,19-22,24-27}",
    "{2-2,19-22,24-27}": true
  }), `#include <gui/main_screen/MainView.hpp>
#include <touchgfx/utils.hpp>

MainView::MainView()
{

}

void MainView::setupScreen()
{
  MainViewBase::setupScreen();
}

void MainView::tearDownScreen()
{
  MainViewBase::tearDownScreen();
}

void MainView::buttonUpClicked()
{
  touchgfx_printf("buttonUpClicked\\n");
}

void MainView::buttonDownClicked()
{
  touchgfx_printf("buttonDownClicked\\n");
}

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C \uB2E4\uC2DC "Run Simulator"\uB97C \uD074\uB9AD\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uCF54\uB4DC\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4. \uBC84\uD2BC\uC744 \uC5EC\uB7EC \uCC28\uB840 \uD074\uB9AD\uD558\uC5EC \uC778\uD130\uB799\uC158\uACFC \uBA54\uC18C\uB4DC\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC2E4\uD589\uB418\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-3-4-17.png",
    mdxType: "Figure"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589 \uC2DC \uBA54\uC18C\uB4DC \uCD9C\uB825\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "updating-the-counter-value"
  }), `\uCE74\uC6B4\uD130 \uAC12 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC0AC\uC6A9\uC790\uAC00 \uBC84\uD2BC\uC744 \uB20C\uB800\uC744 \uB54C \uCE74\uC6B4\uD130 \uAC12\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uB3C4\uB85D \uC0C8 \uBA54\uC18C\uB4DC\uC5D0\uC11C C++ \uCF54\uB4DC\uB97C \uC791\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uBA3C\uC800 \uC0C8\uB85C\uC6B4 \uC815\uC218 \uBCC0\uC218\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `counter`), `\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MainView`), ` \uD074\uB798\uC2A4\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{17}",
    "{17}": true
  }), `#ifndef MAIN_VIEW_HPP
#define MAIN_VIEW_HPP

#include <gui_generated/main_screen/MainViewBase.hpp>
#include <gui/main_screen/MainPresenter.hpp>

class MainView : public MainViewBase
{
public:
  MainView();
  virtual ~MainView() {}
  virtual void setupScreen();
  virtual void tearDownScreen();
  virtual void buttonUpClicked();
  virtual void buttonDownClicked();
protected:
  int counter;
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonUpClicked`), ` \uBA54\uC18C\uB4DC\uC5D0\uC11C \uCE74\uC6B4\uD130 \uAC12\uC744 \uB192\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC0C8\uB85C\uC6B4 \uAC12\uC774 \uBB38\uC790\uC5F4\uB85C \uBCC0\uD654\uB418\uC5B4 \uC774\uC804 \uB2E8\uACC4\uC5D0\uC11C TextArea\uC5D0 \uAD6C\uC131\uD55C \uC640\uC77C\uB4DC\uCE74\uB4DC \uBC84\uD37C\uB85C \uBCF5\uC0AC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MainView.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{22-25,32-35}",
    "{22-25,32-35}": true
  }), `#include <gui/main_screen/MainView.hpp>

MainView::MainView()
{

}

void MainView::setupScreen()
{
  MainViewBase::setupScreen();
}

void MainView::tearDownScreen()
{
  MainViewBase::tearDownScreen();
}

void MainView::buttonUpClicked()
{
  touchgfx_printf("buttonUpClicked\\n");

  counter++;
  Unicode::snprintf(textCounterBuffer, TEXTCOUNTER_SIZE, "%d", counter);
  // Invalidate text area, which will result in it being redrawn in next tick.
  textCounter.invalidate();
}

void MainView::buttonDownClicked()
{
  touchgfx_printf("buttonDownClicked\\n");

  counter--;
  Unicode::snprintf(textCounterBuffer, TEXTCOUNTER_SIZE, "%d", counter);
  // Invalidate text area, which will result in it being redrawn in next tick.
  textCounter.invalidate();
}

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea \uC704\uC82F\uC740 Unicode\uB97C \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uD2B9\uBCC4\uD788 Unicode \uBC84\uD37C \uC791\uC131\uC744 \uC9C0\uC6D0\uD558\uB294 snprintf \uD568\uC218\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uC608\uC81C\uB97C \uBCF4\uBA74 \uC5C5\uB370\uC774\uD2B8 \uD6C4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `textCounter`), ` \uC704\uC82F\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `invalidate()`), `\uB97C \uD638\uCD9C\uD588\uC2B5\uB2C8\uB2E4. \uC774\uC720\uB294 \uCE74\uC6B4\uD130 \uAC12\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC744 \uB54C TextArea\uB97C \uB2E4\uC2DC \uADF8\uB9AC\uAE30 \uC704\uD574\uC11C\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9C8\uCE58\uAE30 \uC804\uC5D0 \uD55C \uAC00\uC9C0 \uC791\uC5C5\uC774 \uB354 \uB0A8\uC558\uC2B5\uB2C8\uB2E4. TouchGFX\uC5D0\uB294 \uD544\uC694\uD55C \uBB38\uC790\uB9CC \uD3EC\uD568\uB418\uAE30 \uB54C\uBB38\uC5D0 TouchGFX Designer\uC5D0\uC11C \uBB38\uC790 0~9\uB97C "Default" \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0 \uCD94\uAC00\uD558\uB3C4\uB85D \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uBA3C\uC800 TouchGFX Designer\uB85C \uB3CC\uC544\uAC00\uC11C "Texts" \uD0ED\uACFC "Typographies" \uD0ED\uC744 \uCC28\uB840\uB300\uB85C \uD074\uB9AD\uD569\uB2C8\uB2E4. Default \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC758 "Wildcard Ranges" \uC5F4\uC5D0 \uBC94\uC704 "0-9"\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4(1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[190, 40]],
    imageSource: "/img/tutorials/tutorial-02/set-wildcard-range-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Default \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0\uC11C \uC640\uC77C\uB4DC\uCE74\uB4DC \uBC94\uC704 \uC124\uC815\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C "Run Simulator"\uB97C \uB2E4\uC2DC \uD074\uB9AD\uD558\uACE0 Up \uBC84\uD2BC\uC744 \uC5EC\uB7EC \uCC28\uB840 \uD074\uB9AD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-02/running-the-simulator-4-4-17.png",
    mdxType: "Figure"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD504\uB85C\uADF8\uB7A8\uC774 \uD604\uC7AC\uB97C \uAE30\uC900\uC73C\uB85C \uD558\uAE30 \uB54C\uBB38\uC5D0 \uC74C\uC758 \uC218\uB294 \uC62C\uBC14\uB974\uAC8C \uCC98\uB9AC\uD558\uC9C0 \uBABB\uD569\uB2C8\uB2E4. \uC774 \uBB38\uC81C\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `buttonDownClicked()`), ` \uD568\uC218\uC5D0 guard\uB97C \uC0BD\uC785\uD558\uC5EC \uCE74\uC6B4\uD130\uAC00 0 \uBC11\uC73C\uB85C \uB5A8\uC5B4\uC9C0\uC9C0 \uC54A\uB3C4\uB85D \uC124\uC815\uD558\uAC70\uB098, \uD639\uC740 \uC0AC\uC6A9\uB41C \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0 "-" \uBB38\uC790\uB97C \uCD94\uAC00\uD558\uC5EC \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBC29\uBC95\uC740 Default \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0\uC11C Wildcard Characters \uC140\uC5D0 \uB9C8\uC774\uB108\uC2A4("-") \uBB38\uC790\uB97C \uCD94\uAC00\uD558\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uAC83\uC73C\uB85C \uD29C\uD1A0\uB9AC\uC5BC 2\uB97C \uB9C8\uCE58\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, "\uD14D\uC2A4\uD2B8\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts",
    mdxType: "Link"
  }, "\uD14D\uC2A4\uD2B8 \uBC0F \uAE00\uAF34"), " \uD398\uC774\uC9C0\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.")));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 77460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/touchgfx-tutorial-02-fdc5f18c6ee29e0a96fa608460f4d03a.zip");

/***/ })

}]);