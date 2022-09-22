"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9058],{

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

/***/ 4520:
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
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22425);
/* harmony import */ var _site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31217);
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29415);
/* harmony import */ var _site_components_Note__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93054);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39130);
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
  id: "tutorial-03",
  title: "\uD29C\uD1A0\uB9AC\uC5BC3: \uBA40\uD2F0 \uC2A4\uD06C\uB9B0\uC744 \uC0AC\uC6A9\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-03",
  "id": "tutorials/tutorial-03",
  "title": "\uD29C\uD1A0\uB9AC\uC5BC3: \uBA40\uD2F0 \uC2A4\uD06C\uB9B0\uC744 \uC0AC\uC6A9\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/tutorial-03.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-03",
  "permalink": "/4.20/ko/docs/tutorials/tutorial-03",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-03",
    "title": "\uD29C\uD1A0\uB9AC\uC5BC3: \uBA40\uD2F0 \uC2A4\uD06C\uB9B0\uC744 \uC0AC\uC6A9\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD29C\uD1A0\uB9AC\uC5BC2: \uC790\uC2E0\uB9CC\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0DD\uC131\uD558\uAE30",
    "permalink": "/4.20/ko/docs/tutorials/tutorial-02"
  },
  "next": {
    "title": "\uD29C\uD1A0\uB9AC\uC5BC4: \uCEE4\uC2A4\uD140 \uB3D9\uC791\uC744 \uCD94\uAC00\uD558\uC5EC Scroll Wheel \uC0DD\uC131\uD558\uAE30",
    "permalink": "/4.20/ko/docs/tutorials/tutorial-04"
  }
};
const assets = {};







const toc = [{
  value: "1\uB2E8\uACC4: \uC2A4\uD06C\uB9B0 2\uAC1C \uC124\uC815\uD558\uAE30",
  id: "step-1-setting-up-the-two-screens",
  level: 2
}, {
  value: "Screen1 \uC124\uC815\uD558\uAE30",
  id: "setting-up-screen1",
  level: 3
}, {
  value: "Screen2 \uC124\uC815\uD558\uAE30",
  id: "setting-up-screen2",
  level: 3
}, {
  value: "\uC2A4\uD06C\uB9B0 \uC804\uD658",
  id: "switching-between-screens",
  level: 3
}, {
  value: "2\uB2E8\uACC4: \uB370\uC774\uD130 \uC800\uC7A5",
  id: "step-2-saving-data",
  level: 2
}, {
  value: "Model\uC5D0 \uC2DC\uAC04/\uBD84 \uCD94\uAC00\uD558\uAE30",
  id: "adding-hour-and-minute-to-the-model",
  level: 3
}, {
  value: "View\uC5D0\uC11C Model\uC5D0 \uC811\uADFC\uD558\uAE30",
  id: "accessing-the-model-from-the-view",
  level: 3
}, {
  value: "Model\uC758 \uB370\uC774\uD130",
  id: "data-from-the-model",
  level: 3
}, {
  value: "Screen1 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30",
  id: "updating-screen1",
  level: 4
}, {
  value: "Screen2 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30",
  id: "updating-screen2",
  level: 4
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB2E4\uC218\uC758 \uC2A4\uD06C\uB9B0\uC744 \uC0DD\uC131\uD558\uC5EC \uB450 \uC2A4\uD06C\uB9B0 \uC0AC\uC774\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uACF5\uC720\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uC2DC\uACC4\uB97C \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uC5EC \uD55C \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uC2DC\uAC04\uACFC \uBD84\uC744 \uC124\uC815\uD55C \uD6C4 \uC2DC\uACC4\uAC00 \uC788\uB294 \uB2E4\uB978 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uC2DC\uAC04\uC744 \uC804\uB2EC\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C TouchGFX Designer\uC5D0\uC11C \uC2A4\uD06C\uB9B0 \uBCC0\uACBD\uACFC \uAC19\uC740 \uC778\uD130\uB799\uC158\uC5D0 \uB530\uB77C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC774\uBBF8\uC9C0\uB294 \uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(40891)/* ["default"] */ .Z)
  }, "\uB9C1\uD06C"), `\uC5D0\uC11C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uD30C\uC77C\uC744 \uB514\uC2A4\uD06C \uB514\uB809\uD130\uB9AC\uC5D0 \uC555\uCD95 \uD574\uC81C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-1-setting-up-the-two-screens"
  }), `1\uB2E8\uACC4: \uC2A4\uD06C\uB9B0 2\uAC1C \uC124\uC815\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC 2\uC5D0\uC11C \uD55C \uAC83\uCC98\uB7FC \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uADF8\uB798\uD53D\uC774 480x272 \uD574\uC0C1\uB3C4\uC5D0 \uB9DE\uCDB0 \uB2E4\uC2DC \uD55C \uBC88 \uB514\uC790\uC778\uB429\uB2C8\uB2E4. "STM32F746G Discovery Kit"\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uACBD\uC6B0 \uD504\uB85C\uC81D\uD2B8\uB294 \uC774\uB7EC\uD55C \uD574\uC0C1\uB3C4\uB97C \uAC16\uAC8C \uB429\uB2C8\uB2E4. \uB370\uBAA8 \uBCF4\uB4DC\uC758 \uD574\uC0C1\uB3C4\uAC00 \uB2E4\uB97C \uACBD\uC6B0 \uD574\uC0C1\uB3C4\uC5D0 \uB9DE\uCDB0 \uADF8\uB798\uD53D\uC744 \uC218\uC815\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uB370\uBAA8 \uBCF4\uB4DC\uAC00 \uC5C6\uB2E4\uBA74 "\uC2DC\uBBAC\uB808\uC774\uD130" \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF\uC5D0\uC11C \uC0DD\uC131\uD558\uC5EC \uD574\uC0C1\uB3C4\uB97C 480x272\uB85C \uC785\uB825\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-up-screen1"
  }), `Screen1 \uC124\uC815\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCCAB \uBC88\uC9F8\uB85C \uC0DD\uC131\uD558\uB294 \uC2A4\uD06C\uB9B0\uC740 Screen1\uC785\uB2C8\uB2E4. Screen1\uC5D0\uC11C\uB294 \uC2DC\uAC04/\uBD84 \uAC12\uC744 \uC124\uC815\uD558\uC5EC \uC2DC\uACC4\uAC00 \uC788\uB294 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Screen1\uC740 \uC544\uB798\uC640 \uAC19\uC774 \uC6D0\uD558\uB294 \uC2DC\uAC04\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB294 \uD14D\uC2A4\uD2B8 \uBC15\uC2A4 2\uAC1C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uBC15\uC2A4\uC758 \uAC12\uC744 \uC870\uC815\uD560 \uB54C\uB294 \uC704/\uC544\uB798 \uD654\uC0B4\uD45C\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uD6C4 \uC120\uD0DD\uD55C \uAC12\uC744 \uC800\uC7A5\uD558\uC5EC \uC2DC\uACC4\uB85C \uC804\uB2EC\uD560 \uB54C\uB294 \uAC01 \uBC15\uC2A4 \uC544\uB798 \uC788\uB294 Save \uBC84\uD2BC\uC774 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9\uC73C\uB85C Clock \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC2DC\uACC4\uAC00 \uC788\uB294 Screen2\uB85C \uC804\uD658\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uBC30\uACBD\uACFC \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC744 \uC0BD\uC785\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC704\uC82F\uC744 \uC0BD\uC785\uD558\uACE0 \uC544\uB798 \uADF8\uB9BC \uBC0F \uD45C\uC640 \uAC19\uC774 \uC18D\uC131\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-03/screen1-screenshot.png",
    mdxType: "Figure"
  }, "\uBC30\uACBD \uBC0F \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC758 \uC704\uCE58\uAC00 \uAC15\uC870 \uD45C\uC2DC\uB41C Screen1\uC758 \uC2A4\uD06C\uB9B0\uC0F7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uC82F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC18D\uC131`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774\uBBF8\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: background`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 0, Y: 0`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uBBF8\uC9C0: background_Screen1.png`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TextArea`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: textAreaHourCaption`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 86, Y: 46`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `W: 85, H: 24`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: Hour`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 20px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: \uC911\uC559`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Color: #FFABABAB`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TextArea`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: textAreaHour`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 87, Y: 70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `W: 83, H: 50`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: `, `<`, `value`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Wildcard 1:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC640\uC77C\uB4DC\uCE74\uB4DC \uBC84\uD37C \uC0AC\uC6A9: \uC608`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uCD08\uAE30 \uAC12: 00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uBC84\uD37C \uD06C\uAE30: 3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 40px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: \uC911\uC559`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Color: #FFABABAB`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TextArea`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: textAreaMinuteCaption`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 309, Y: 46`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `W: 85, H: 24`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: Minute`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 20px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: \uC911\uC559`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Color: #FFABABAB`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TextArea`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: textAreaMinute`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 311, Y: 70`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `W: 83, H: 50`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: `, `<`, `value`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Wildcard 1:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC640\uC77C\uB4DC\uCE74\uB4DC \uBC84\uD37C \uC0AC\uC6A9: \uC608`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uCD08\uAE30 \uAC12: 00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uBC84\uD37C \uD06C\uAE30: 3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 40px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: \uC911\uC559`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Color: #FFABABAB`)))))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB7F0 \uB2E4\uC74C \uC544\uB798 \uADF8\uB9BC \uBC0F \uD45C\uC640 \uAC19\uC774 \uBC84\uD2BC\uC744 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0BD\uC785\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-03/screen1-screenshot-02.png",
    mdxType: "Figure"
  }, "\uBC84\uD2BC\uC758 \uC704\uCE58\uAC00 \uAC15\uC870 \uD45C\uC2DC\uB41C Screen1\uC758 \uC2A4\uD06C\uB9B0\uC0F7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uC82F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC18D\uC131`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: buttonHourUp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 184, Y: 51`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Image: Up_arrow.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Image: Up_arrow_pressed.png`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: buttonHourDown`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 184, Y: 93`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Image: Down_arrow.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Image: Down_arrow_pressed.png`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: buttonMinuteUp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 266, Y: 51`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Image: Up_arrow.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Image: Up_arrow_pressed.png`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: buttonMinuteDown`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 266, Y: 93`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Image: Down_arrow.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Image: Down_arrow_pressed.png`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB77C\uBCA8 \uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: buttonSaveHour`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 80, Y: 137`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: Save`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 25px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: \uC911\uC559`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Color: #FF424242`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Color: #FFA6A6A6`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Image: btn_round.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Image: btn_round_pressed.png`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB77C\uBCA8 \uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: buttonSaveMinute`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 303, Y: 137`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: Save`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 25px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: \uC911\uC559`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Color: #FF424242`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Color: #FFA6A6A6`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Image: btn_round.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Image: btn_round_pressed.png`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `7`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uB77C\uBCA8 \uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: buttonClock`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 192, Y: 204`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: Clock`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 25px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: \uC911\uC559`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Color: #FF424242`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Color: #FFA6A6A6`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Released Image: btn_round.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Pressed Image: btn_round_pressed.png`)))))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC694\uC18C\uAC00 \uC124\uC815\uB418\uC5C8\uC73C\uBA74 \uC774\uC81C \uC120\uD0DD\uD55C \uAC12\uC744 \uC870\uC815\uD558\uC5EC \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uBC84\uD2BC \uD2B8\uB9AC\uAC70\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC778\uD130\uB799\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC18D\uC131`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC2DC\uAC04 \uC0C1\uD5A5 \uC870\uC815 \uBC84\uD2BC \uD074\uB9AD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Button is clicked`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Clicked Source: buttonHourUp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Call new virtual function`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uD568\uC218 \uC774\uB984: buttonHourUpClicked`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC2DC\uAC04 \uD558\uD5A5 \uC870\uC815 \uBC84\uD2BC \uD074\uB9AD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Button is clicked`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Clicked Source: buttonHourDown`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Call new virtual function`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uD568\uC218 \uC774\uB984: buttonHourDownClicked`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBD84 \uC0C1\uD5A5 \uC870\uC815 \uBC84\uD2BC \uD074\uB9AD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Button is clicked`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Clicked Source: buttonMinuteUp`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Call new virtual function`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uD568\uC218 \uC774\uB984: buttonMinuteUpClicked`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBD84 \uD558\uD5A5 \uC870\uC815 \uBC84\uD2BC \uD074\uB9AD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Button is clicked`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Clicked Source: buttonMinuteDown`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Call new virtual function`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uD568\uC218 \uC774\uB984: buttonMinuteDownClicked`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC2DC\uAC04 \uC800\uC7A5 \uBC84\uD2BC \uD074\uB9AD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Button is clicked`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Clicked Source: buttonSaveHour`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Call new virtual function`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uD568\uC218 \uC774\uB984: buttonSaveHourClicked`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBD84 \uC800\uC7A5 \uBC84\uD2BC \uD074\uB9AD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Button is clicked`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Clicked Source: buttonSaveMinute`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Call new virtual function`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uD568\uC218 \uC774\uB984: buttonSaveMinuteClicked`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"Generate Code" \uB610\uB294 "Run Simulator"\uB97C \uB204\uB974\uBA74 \uC9C0\uC815\uB41C \uAC00\uC0C1 \uD568\uC218\uAC00 Designer\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uBA3C\uC800 \uD654\uC0B4\uD45C \uBC84\uD2BC \uD568\uC218 4\uAC1C\uB97C \uD1B5\uD569\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC2DC\uAC04 \uAC12\uACFC \uBD84 \uAC12\uC744 \uCD94\uC801\uD558\uAE30 \uC704\uD574 \uCE74\uC6B4\uD130 2\uAC1C\uB3C4 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uB2E4\uC74C \uCF54\uB4DC\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
public:
...
    virtual void buttonHourUpClicked();
    virtual void buttonHourDownClicked();
    virtual void buttonMinuteUpClicked();
    virtual void buttonMinuteDownClicked();

protected:
    int16_t hour;
    int16_t minute;
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD654\uC0B4\uD45C\uB97C \uB204\uB974\uBA74 \uD574\uB2F9\uD558\uB294 \uAC12\uC774 \uC2DC\uACC4 \uAC12\uC758 \uBC94\uC704 \uC548\uC5D0 \uB4E4\uB3C4\uB85D \uBC14\uB01D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD568\uC218 4\uAC1C\uC758 \uB85C\uC9C1\uC744 \uB2E4\uC74C\uACFC \uAC19\uC774 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/gui/src/screen1_screen/Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Screen1View::Screen1View()
    : hour(0), minute(0) //clear the new counters
{
}
...
void Screen1View::buttonHourUpClicked()
{
    hour = (hour + 1) % 24; // Keep new value in range 0..23
    Unicode::snprintf(textAreaHourBuffer, TEXTAREAHOUR_SIZE, "%02d", hour);
    textAreaHour.invalidate();
}

void Screen1View::buttonHourDownClicked()
{
    hour = (hour + 24 - 1) % 24; // Keep new value in range 0..23
    Unicode::snprintf(textAreaHourBuffer, TEXTAREAHOUR_SIZE, "%02d", hour);
    textAreaHour.invalidate();
}

void Screen1View::buttonMinuteUpClicked()
{
    minute = (minute + 1) % 60; // Keep new value in range 0..59
    Unicode::snprintf(textAreaMinuteBuffer, TEXTAREAMINUTE_SIZE, "%02d", minute);
    textAreaMinute.invalidate();
}

void Screen1View::buttonMinuteDownClicked()
{
    minute = (minute + 60 - 1) % 60; // Keep new value in range 0..59
    Unicode::snprintf(textAreaMinuteBuffer, TEXTAREAMINUTE_SIZE, "%02d", minute);
    textAreaMinute.invalidate();
}
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "setting-up-screen2"
  }), `Screen2 \uC124\uC815\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen2 \uC2A4\uD06C\uB9B0\uC0F7\uC744 \uBCF4\uBA74 Screen1\uC5D0\uC11C \uC800\uC7A5\uD55C \uAC12\uBD80\uD130 \uC2DC\uC791\uB418\uB294 \uC2DC\uACC4\uAC00 \uC788\uC2B5\uB2C8\uB2E4. Screen2\uB294 \uC2DC\uACC4 \uC678\uC5D0\uB3C4 \uC2DC\uACC4\uB97C \uC911\uC2EC\uC73C\uB85C \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uB418\uB294 \uC6D0\uC73C\uB85C \uAD6C\uC131\uB418\uBA70, \uC774 \uC560\uB2C8\uBA54\uC774\uC158\uC73C\uB85C \uC2DC\uACC4\uAC00 \uC791\uB3D9\uD55C\uB2E4\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9\uC73C\uB85C Screen1\uC73C\uB85C \uB3CC\uC544\uAC08 \uC218 \uC788\uB3C4\uB85D \uC2A4\uD06C\uB9B0\uC744 Screen1\uC73C\uB85C \uBCC0\uACBD\uD558\uB294 \uBC84\uD2BC\uC774 \uAD6C\uD604\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-03/screen2-screenshot.png",
    mdxType: "FigureWithPoints"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD55C Screen2\uC758 \uC2A4\uD06C\uB9B0\uC0F7"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8\uB798\uD53D \uC694\uC18C\uB97C Screen2\uC5D0 \uCD94\uAC00\uD558\uB824\uBA74 \uBA3C\uC800 \uC0C8\uB85C\uC6B4 \uC2A4\uD06C\uB9B0\uC744 \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uC544\uB798 \uADF8\uB9BC\uACFC \uAC19\uC774 TouchGFX Designer\uC5D0\uC11C \u201CAdd Screen\u201D \uBC84\uD2BC(1)\uC744 \uC0AC\uC6A9\uD574 \uC0C8\uB85C\uC6B4 \uC2A4\uD06C\uB9B0\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[60, 10]],
    imageSource: "/img/tutorials/tutorial-03/add-screen-4-17.png",
    mdxType: "FigureWithPoints"
  }, "TouchGFX Designer\uC5D0\uC11C Add Screen \uBC84\uD2BC\uC758 \uC704\uCE58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `"screen2"\uB85C \uC804\uD658\uD560 \uB54C \uC2DC\uACC4\uB294 \uC2A4\uD06C\uB9B0 \uC678\uBD80 \uC67C\uCABD\uC5D0\uC11C, \uADF8\uB9AC\uACE0 \uC6D0\uC740 \uC2A4\uD06C\uB9B0 \uC678\uBD80 \uC624\uB978\uCABD\uC5D0\uC11C \uB0B4\uBD80 \uC81C\uC790\uB9AC\uB85C \uC774\uB3D9\uD558\uB3C4\uB85D \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uCC98\uC74C\uC5D0\uB294 \uB450 \uC704\uC82F\uC774 TouchGFX Designer\uC5D0\uC11C \uCE94\uBC84\uC2A4 \uBC14\uAE65\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC544\uB798 \uADF8\uB9BC\uACFC \uD45C\uC5D0 \uB530\uB77C \uC704\uC82F\uC744 \uBC30\uCE58\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-03/screen2-location-of-widgets.png",
    mdxType: "Figure"
  }, "Screen2\uC758 \uC704\uC82F \uC704\uCE58"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uCE58`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC704\uC82F`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC18D\uC131`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC774\uBBF8\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: background`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 0, Y: 0`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uBBF8\uC9C0: background_Screen2.png`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uBC84\uD2BC`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: buttonSettings`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 422, Y: 10`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uD574\uC81C\uB418\uC5C8\uC744 \uB54C \uC774\uBBF8\uC9C0: configuration.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uB20C\uB800\uC744 \uB54C \uC774\uBBF8\uC9C0: configuration.png`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `3`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TextArea`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: textClock`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: -124, Y: 109`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `W: 124, H: 54`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: `, `<`, `hour`, `>`, `:`, `<`, `min`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Wildcard 1:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uCD08\uAE30 \uAC12: 00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC640\uC77C\uB4DC\uCE74\uB4DC \uBC84\uD37C \uC0AC\uC6A9: \uC608`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uBC84\uD37C \uD06C\uAE30: 3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Wildcard 2:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uCD08\uAE30 \uAC12: 00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC640\uC77C\uB4DC\uCE74\uB4DC \uBC84\uD37C \uC0AC\uC6A9: \uC608`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uBC84\uD37C \uD06C\uAE30: 3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 40px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: \uC911\uC559`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Color: #FFABABAB`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `4`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC6D0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: circle`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 479, Y: 36`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `W: 200, H: 200`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Image & Color:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Color: #FFBABABA`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Center Position:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 100, Y: 100`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Start & End Angle:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Start: 0, End: 180`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Radius: 72`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Line Width: 6`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Cap Style: \uC0BC\uAC01\uD615`)))))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBAA8\uB4E0 \uC704\uC82F\uC744 \uCD94\uAC00\uD55C \uC2A4\uD06C\uB9B0\uC740 \uC544\uB798\uC640 \uAC19\uC740 \uBAA8\uC2B5\uC774 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4. TextArea\uC640 \uC6D0\uC740 \uC2A4\uD06C\uB9B0 \uBC16\uC5D0 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-03/screen2-widgets.png",
    mdxType: "FigureWithPoints"
  }, "\uBAA8\uB4E0 \uC704\uC82F\uC774 Screen2\uC5D0 \uCD94\uAC00\uB41C \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "switching-between-screens"
  }), `\uC2A4\uD06C\uB9B0 \uC804\uD658`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC2A4\uD06C\uB9B0 \uC804\uD658 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 Screen1\uC758 Clock \uBC84\uD2BC\uACFC Screen2\uC758 Configuration \uBC84\uD2BC\uC5D0 \uC0C1\uD638\uC791\uC6A9\uC744 \uD560\uB2F9\uD569\uB2C8\uB2E4. \uB610\uD55C Screen2 \uC804\uD658 \uC2DC Screen1\uC5D0\uC11C \uC2A4\uD06C\uB9B0 \uC601\uC5ED \uBC16\uC5D0 \uBC30\uCE58\uB41C \uADF8\uB798\uD53D \uC694\uC18C 2\uAC1C\uB97C \uC81C\uC790\uB9AC\uB85C \uC62E\uAE30\uB824\uACE0 \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uB97C \uC704\uD574 Screen1\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC0C1\uD638\uC791\uC6A9\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC778\uD130\uB799\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC18D\uC131`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `"Screen2"\uB85C \uBCC0\uACBD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Button is clicked`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Clicked Source: buttonClock`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Change screen`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Screen: Screen2`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Transition: Cover`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Transition Direction: North`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen2\uC5D0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC778\uD130\uB799\uC158\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC778\uD130\uB799\uC158`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC18D\uC131`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `"Screen1"\uB85C \uBCC0\uACBD`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Button is clicked`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Clicked Source: buttonSettings`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Change screen`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Screen: Screen1`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Transition: Slide`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Transition Direction: South`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uC6D0\uC744 \uC81C\uC790\uB9AC\uB85C \uC774\uB3D9`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Screen transition ends`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Move widget`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Widget to move: circle`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Position: 140, 36`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Easing: Cubic, Out`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Duration: 750ms`)))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `\uD14D\uC2A4\uD2B8 \uC2DC\uACC4\uB97C \uC81C\uC790\uB9AC\uB85C`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Trigger: Screen transition ends`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Action: Move widget`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Widget to move: textClock`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Position: 178, 109`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Easing: Cubic, Out`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Duration: 750ms`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC778\uD130\uB799\uC158\uC774 \uCD94\uAC00\uB41C \uC2A4\uD06C\uB9B0\uC758 \uBAA8\uC2B5\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-03/move-circle-interaction.png",
    mdxType: "FigureWithPoints"
  }, "\uBAA8\uB4E0 \uC704\uC82F\uC774 Screen2\uC5D0 \uCD94\uAC00\uB41C \uBAA8\uC2B5"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB7F0\uD0C0\uC784\uC5D0\uC11C \uC2DC\uACC4\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uACE0 \uC6D0\uC744 \uC560\uB2C8\uBA54\uC774\uC158 \uCC98\uB9AC\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 \uAC00\uC0C1 \uD568\uC218\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleTickEvent`), `\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleTickEvent`), `\uB294 TouchGFX \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC8FC\uAE30\uC801\uC73C\uB85C(\uAC01 \uD504\uB808\uC784\uC5D0\uC11C) \uD638\uCD9C\uB418\uC5B4 \uD65C\uC131\uD654\uB41C \uC2A4\uD06C\uB9B0\uC758 \uC694\uC18C(\uC5EC\uAE30\uC11C\uB294 \uC2DC\uACC4\uC640 \uC6D0)\uB97C \uB3D9\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen1\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC2DC\uAC04 \uBC0F \uBD84 \uCE74\uC6B4\uD130\uAC00 \uC2DC\uACC4\uB97C \uCD94\uC801\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleTickEvent`), `\uB294 \uC2DC\uACC4 \uC5C5\uB370\uC774\uD2B8\uBCF4\uB2E4 \uB354 \uC790\uC8FC \uD638\uCD9C\uB418\uAE30 \uB54C\uBB38\uC5D0 tickCounter\uB97C \uCD94\uAC00\uD558\uC5EC \uC2DC\uACC4\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uB294 \uC8FC\uAE30 \uC0AC\uC774\uC758 tick \uC218\uB97C \uAD6C\uD569\uB2C8\uB2E4. \uB610\uD55C \uC6D0\uD638\uC758 \uAC01\uB3C4\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uB54C\uB294 addStart \uD568\uC218\uC640 addEnd \uD568\uC218\uAC00 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleTickEvent`), ` \uD568\uC218\uC640 \uBCC0\uC218\uB294 \uC544\uB798\uC640 \uAC19\uC774 Screen2View.hpp\uC5D0 \uCD94\uAC00\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/gui/include/gui/screen2_screen/Screen2View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `public:
...
    virtual void handleTickEvent();

protected:
    int16_t hour;
    int16_t minute;
    int16_t tickCount;
    int16_t addStart;
    int16_t addEnd;
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen2View.cpp`), `\uC5D0 \uCD94\uAC00\uB418\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `handleTickEvent`), ` \uAD6C\uD604\uCCB4\uC640 \uC774\uC5D0 \uB530\uB77C \uC2DC\uACC4\uC640 \uC6D0\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uCF54\uB4DC\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/gui/src/screen2_screen/Screen2View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `Screen2View::Screen2View()
    : hour(0), minute(0), tickCount(0), addStart(1), addEnd(2)
{ }
...
void Screen2View::handleTickEvent()
{
    if (tickCount == 60)
    {
        minute++;
        hour = (hour + (minute / 60)) % 24;
        minute %= 60;

        Unicode::snprintf(textClockBuffer1, TEXTCLOCKBUFFER1_SIZE, "%02d", hour);
        Unicode::snprintf(textClockBuffer2, TEXTCLOCKBUFFER2_SIZE, "%02d", minute);

        textClock.invalidate();

        tickCount = 0;
    }

    if (!textClock.isMoveAnimationRunning())
    {
        tickCount++;
        if (circle.getArcStart() + 340 == circle.getArcEnd())
        {
            addStart = 2;
            addEnd = 1;
        }
        else if (circle.getArcStart() + 20 == circle.getArcEnd())
        {
            addStart = 1;
            addEnd = 2;
        }
        circle.updateArc(circle.getArcStart() + addStart, circle.getArcEnd() + addEnd);
    }
}
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC 2\uC5D0\uC11C \uC0B4\uD3B4\uBCF8 \uAC83\uCC98\uB7FC \uC640\uC77C\uB4DC\uCE74\uB4DC\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uBB38\uC790\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C\uB294 TextArea\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `Wildcard Ranges`), ` \uC5F4\uC5D0 \u201C0~9\u201D\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC774\uBC88 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uC6D0 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uC6D0 \uC704\uC82F\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/shapes/circle",
    mdxType: "Link"
  }, "\uC6D0"), " \uD398\uC774\uC9C0\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-2-saving-data"
  }), `2\uB2E8\uACC4: \uB370\uC774\uD130 \uC800\uC7A5`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBC88\uC5D0\uB294 \uC2A4\uD06C\uB9B0 \uC804\uD658 \uC2DC \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uB294 \uBC29\uBC95\uACFC \uC800\uC7A5\uB41C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 Model-View-Presenter \uC124\uACC4 \uD328\uD134\uC744 \uB530\uB985\uB2C8\uB2E4. \uB530\uB77C\uC11C view(\uC608: \uC2A4\uD06C\uB9B0)\uC5D0\uC11C \uC870\uC791\uB41C \uB370\uC774\uD130\uB97C \uC601\uAD6C\uC801\uC73C\uB85C \uBCF4\uC874\uD558\uB824\uBA74 presenter\uB97C \uD1B5\uD574 Model \uD074\uB798\uC2A4\uB85C \uC804\uC1A1\uD574\uC57C \uD569\uB2C8\uB2E4. Model-View-Presenter \uC124\uACC4 \uD328\uD134\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/software-architecture/model-view-presenter-design-pattern"
  }), `\uBAA8\uB378-\uBDF0-\uD504\uB9AC\uC820\uD130 \uC124\uACC4 \uD328\uD134`), ` \uD398\uC774\uC9C0\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-hour-and-minute-to-the-model"
  }), `Model\uC5D0 \uC2DC\uAC04/\uBD84 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Model\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uB294 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4. \uBC84\uD2BC \uC0C1\uD0DC, \uD604\uC7AC \uD45C\uC2DC\uD560 \uC218 \uC788\uB294 \uC704\uC82F \uB4F1 \uC784\uC2DC \uB370\uC774\uD130\uB294 model\uC5D0 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Model\uC744 \uD1B5\uD574 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uAC70\uB098 \uAC00\uC838\uC624\uB824\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 protected\uAC00 \uC124\uC815\uB41C \uC2DC\uAC04 \uAC12\uACFC \uBD84 \uAC12\uC744 model\uC5D0 \uCD94\uAC00\uD558\uB294 \uB3D9\uC2DC\uC5D0 \uC774\uB7EC\uD55C \uAC12\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB294 \uACF5\uAC1C \uD568\uC218\uB3C4 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/gui/include/gui/model/Model.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
public:
    void saveHour(int16_t saveHour)
    {
        hour = saveHour;
    }

    void saveMinute(int16_t saveMinute)
    {
        minute = saveMinute;
    }

    int16_t getHour()
    {
        return hour;
    }

    int16_t getMinute()
    {
        return minute;
    }

protected:
    int16_t hour;
    int16_t minute;
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Note__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    mdxType: "Note"
  }, "\uC704\uC5D0\uC11C ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "model.hpp"), " \uD30C\uC77C\uC5D0 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "#include <touchgfx/hal/types.hpp>\uB3C4"), " \uD568\uAED8 \uCD94\uAC00\uB418\uC5B4\uC57C\uB9CC int16_t \uC720\uD615\uC744 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_InlineCode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "InlineCode"
  }, "\uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C \uC0DD\uC131\uC790\uC5D0\uC11C \uC2DC\uAC04\uACFC \uBD84\uC744 \uCD08\uAE30\uD654\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/gui/src/model/Model.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
Model::Model() : modelListener(0), hour(0), minute(0)
{
}
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC2A4\uD06C\uB9B0\uC744 \uBCC0\uACBD\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC2DC\uAC04\uACFC \uBD84\uC774 Model\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4(\uC2A4\uD06C\uB9B0\uC5D0 \uC800\uC7A5\uB41C \uB370\uC774\uD130\uB294 \uB2E4\uB978 \uC2A4\uD06C\uB9B0\uC73C\uB85C \uBCC0\uACBD\uD560 \uB54C \uC190\uC2E4\uB429\uB2C8\uB2E4). \uC774\uB294 \uBAA8\uB4E0 presenter\uB4E4\uC774 Model\uC744 \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 Presenter\uC640(\uBC0F view) \uC0AC\uC774\uC5D0 \uC815\uBCF4\uB97C \uACF5\uC720\uD558\uAE30\uC5D0 \uC88B\uC740 \uBC29\uBC95\uC785\uB2C8\uB2E4. Model\uC5D0\uC11C\uB3C4 UI\uAC00 \uD558\uB4DC\uC6E8\uC5B4 \uC8FC\uBCC0 \uC7A5\uCE58\uB098 \uAE30\uD0C0 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBAA8\uB4C8 \uB4F1 \uB098\uBA38\uC9C0 \uC2DC\uC2A4\uD15C\uC5D0 \uC5F0\uACB0\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "accessing-the-model-from-the-view"
  }), `View\uC5D0\uC11C Model\uC5D0 \uC811\uADFC\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C view\uC5D0\uC11C model\uC5D0 \uC800\uC7A5\uB41C \uB370\uC774\uD130\uC5D0 \uC811\uADFC\uD558\uB824\uBA74 presenter\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD568\uC218\uB97C \uC81C\uACF5\uD558\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View`), `\uAC00 model\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uB85C\uB4DC\uD558\uC5EC \uC800\uC7A5\uD560 \uC218 \uC788\uB3C4\uB85D \uD5C8\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1Presenter.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
public:
    void saveHour(int16_t hour)
    {
        model->saveHour(hour);
    }

    void saveMinute(int16_t minute)
    {
        model->saveMinute(minute);
    }

    int16_t getHour()
    {
        return model->getHour();
    }

    int16_t getMinute()
    {
        return model->getMinute();
    }
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB610\uD55C Screen2 \uC5ED\uC2DC model\uC5D0 \uC800\uC7A5\uB41C \uB370\uC774\uD130\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uC5B4\uC57C \uD558\uBBC0\uB85C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen2Presenter.hpp`), `\uC5D0 \uB3D9\uC77C\uD55C \uB77C\uC778\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "data-from-the-model"
  }), `Model\uC758 \uB370\uC774\uD130`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Model\uC5D0 \uC800\uC7A5\uB41C \uC2DC\uAC04\uACFC \uBD84\uC5D0 \uC811\uADFC\uD558\uAE30 \uC704\uD55C \uCF54\uB4DC\uAC00 \uC0BD\uC785\uB418\uC5C8\uC73C\uBBC0\uB85C \uC774\uC81C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1`), `\uACFC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen2`), `\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC5EC \uC9C0\uC5ED \uBCC0\uC218\uB9CC \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0 Model\uC5D0\uC11C \uB450 \uAC12\uC744 \uAC00\uC838\uC640\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "updating-screen1"
  }), `Screen1 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB2E4\uC74C\uACFC \uAC19\uC774 Screen1View\uC758 \uC2DC\uAC04\uACFC \uBD84\uC744 model\uC758 \uAC12\uC73C\uB85C \uCD08\uAE30\uD654\uD558\uACE0, TextArea\uC758 \uBC84\uD37C\uB97C \uCD08\uAE30\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6-10}",
    "{6-10}": true
  }), `...
void Screen1View::setupScreen()
{
    Screen1ViewBase::setupScreen();

    hour = presenter->getHour();
    minute = presenter->getMinute();

    Unicode::snprintf(textAreaHourBuffer, TEXTAREAHOUR_SIZE, "%02d", hour);
    Unicode::snprintf(textAreaMinuteBuffer, TEXTAREAMINUTE_SIZE, "%02d", minute);
}
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2DC\uAC04/\uBD84 \uAC12\uC744 \uC800\uC7A5\uD558\uAE30 \uC704\uD574 Interactions\uC5D0\uC11C \uC800\uC7A5 \uBC84\uD2BC 2\uAC1C\uC5D0 \uC0DD\uC131\uB41C \uAC00\uC0C1 \uD568\uC218\uAC00 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.hpp`), `\uC5D0 \uAD6C\uD604\uB418\uC5B4 presenter\uB97C \uD1B5\uD574 model\uC5D0 \uAC12\uC744 \uC800\uC7A5\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `...
public:
    virtual void buttonSaveHourClicked()
    {
        presenter->saveHour(hour);
    }

    virtual void buttonSaveMinuteClicked()
    {
        presenter->saveMinute(minute);
    }
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C Screen1\uC774 model\uC5D0\uC11C \uC2DC\uAC04/\uBD84\uC758 \uCD08\uAE30\uAC12\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h4", __spreadValues({}, {
    "id": "updating-screen2"
  }), `Screen2 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen2 \uC5ED\uC2DC \uAC12\uC744 \uBAA8\uB378\uACFC \uB3D9\uAE30\uD654\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Screen1\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uD14D\uC2A4\uD2B8 \uC2DC\uACC4\uC5D0 \uD45C\uC2DC\uB418\uB294 \uCD08\uAE30 \uAC12\uC740 Model\uC5D0 \uC800\uC7A5\uB41C \uB370\uC774\uD130\uC640 \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen2View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6-10}",
    "{6-10}": true
  }), `...
void Screen2View::setupScreen()
{
    Screen2ViewBase::setupScreen();

    hour = presenter->getHour();
    minute = presenter->getMinute();

    Unicode::snprintf(textClockBuffer1, TEXTCLOCKBUFFER1_SIZE, "%02d", hour);
    Unicode::snprintf(textClockBuffer2, TEXTCLOCKBUFFER2_SIZE, "%02d", minute);
}
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uBA74 Model\uC5D0\uC11C \uC2DC\uAC04\uACFC \uBD84\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4. \uC5C5\uB370\uC774\uD2B8\uB41C \uAC12\uC740 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uB098\uAC08 \uB54C(`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1`), `\uC758 \uAD6C\uC131 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD560 \uB54C) Model\uB85C \uB2E4\uC2DC \uC804\uC1A1\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen2View.cpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{4-5}",
    "{4-5}": true
  }), `...
void Screen2View::tearDownScreen()
{
    presenter->saveHour(hour);
    presenter->saveMinute(minute);

    Screen2ViewBase::tearDownScreen();
}
...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uBA74 \uAD6C\uC131 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD558\uAE30 \uC804\uC5D0 \uC5C5\uB370\uC774\uD2B8\uB41C \uC2DC\uAC04/\uBD84 \uAC12\uC774 model\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uAC83\uC73C\uB85C \uAC04\uB2E8\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uC774\uC5D0 \uB530\uB978 \uD29C\uD1A0\uB9AC\uC5BC 3\uC744 \uB9C8\uCE58\uACA0\uC2B5\uB2C8\uB2E4.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 40891:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/touchgfx-tutorial-03-7f5c3433c7eca9d020cc6ba0fd74921d.zip");

/***/ })

}]);