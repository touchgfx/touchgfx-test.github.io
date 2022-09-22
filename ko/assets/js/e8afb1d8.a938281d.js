"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6744],{

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

/***/ 99625:
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
/* harmony import */ var _site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29415);
/* harmony import */ var _site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22425);
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
  id: "tutorial-04",
  title: "\uD29C\uD1A0\uB9AC\uC5BC4: \uCEE4\uC2A4\uD140 \uB3D9\uC791\uC744 \uCD94\uAC00\uD558\uC5EC Scroll Wheel \uC0DD\uC131\uD558\uAE30"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-04",
  "id": "tutorials/tutorial-04",
  "title": "\uD29C\uD1A0\uB9AC\uC5BC4: \uCEE4\uC2A4\uD140 \uB3D9\uC791\uC744 \uCD94\uAC00\uD558\uC5EC Scroll Wheel \uC0DD\uC131\uD558\uAE30",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/tutorial-04.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-04",
  "permalink": "/4.20/ko/docs/tutorials/tutorial-04",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-04",
    "title": "\uD29C\uD1A0\uB9AC\uC5BC4: \uCEE4\uC2A4\uD140 \uB3D9\uC791\uC744 \uCD94\uAC00\uD558\uC5EC Scroll Wheel \uC0DD\uC131\uD558\uAE30"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD29C\uD1A0\uB9AC\uC5BC3: \uBA40\uD2F0 \uC2A4\uD06C\uB9B0\uC744 \uC0AC\uC6A9\uD558\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158",
    "permalink": "/4.20/ko/docs/tutorials/tutorial-03"
  },
  "next": {
    "title": "\uD29C\uD1A0\uB9AC\uC5BC5: \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158 \uC0DD\uC131\uD558\uAE30",
    "permalink": "/4.20/ko/docs/tutorials/tutorial-05"
  }
};
const assets = {};





const toc = [{
  value: "1\uB2E8\uACC4: Custom Container \uC0DD\uC131\uD558\uAE30",
  id: "step-1-creating-a-custom-container",
  level: 2
}, {
  value: "Custom Container\uC5D0 \uC704\uC82F \uCD94\uAC00\uD558\uAE30",
  id: "adding-widgets-to-the-custom-container",
  level: 3
}, {
  value: "\uC2A4\uD06C\uB9B0\uC5D0 Custom Container \uCD94\uAC00\uD558\uAE30",
  id: "adding-the-custom-container-to-a-screen",
  level: 3
}, {
  value: "2\uB2E8\uACC4: Scroll Wheel \uC0DD\uC131\uD558\uAE30",
  id: "step-2-creating-a-scroll-wheel",
  level: 2
}, {
  value: "Scroll Wheel \uC0DD\uC131\uD558\uAE30",
  id: "creating-the-scroll-wheel",
  level: 3
}, {
  value: "Scroll Wheel\uC5D0 \uD56D\uBAA9 \uCD94\uAC00\uD558\uAE30",
  id: "adding-items-to-the-scroll-wheel",
  level: 3
}, {
  value: "3\uB2E8\uACC4: \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C Scroll Wheel\uC5D0 \uCD94\uAC00\uD558\uAE30",
  id: "step-3-adding-user-code-to-scroll-wheel",
  level: 2
}, {
  value: "MenuElement\uC758 \uC774\uBBF8\uC9C0 \uBC0F \uD14D\uC2A4\uD2B8 \uBCC0\uACBD\uD558\uAE30",
  id: "change-image-and-text-in-menuelement",
  level: 3
}, {
  value: "\uC2A4\uD06C\uB864 \uD720 \uD56D\uBAA9 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30",
  id: "update-the-items-in-the-scroll-wheel",
  level: 3
}, {
  value: "4\uB2E8\uACC4: Scroll Wheel\uC5D0 \uCEE4\uC2A4\uD140 \uB3D9\uC791 \uCD94\uAC00\uD558\uAE30",
  id: "step-4-adding-custom-behavior-to-scroll-wheel",
  level: 2
}, {
  value: "MenuElement\uC5D0 \uCEE4\uC2A4\uD140 \uB3D9\uC791 \uCD94\uAC00\uD558\uAE30",
  id: "add-custom-behavior-to-menuelement",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C\uB294 Custom Container\uC640 Scroll Wheel\uC774\uB77C\uB294 \uB450 \uAC00\uC9C0 \uC704\uC82F\uC744 \uC0DD\uC131\uD558\uC5EC \uAD6C\uC131\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. Custom Container\uB294 \uC5EC\uB7EC \uAC00\uC9C0 \uB2E4\uB978 \uC704\uC82F\uC744 \uACB0\uD569\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uC704\uC82F\uC744 \uB9CC\uB4E4 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uC704\uC82F\uC73C\uB85C, \uD574\uB2F9 \uC704\uC82F\uB4E4\uC758 \uD2B9\uC815 \uB3D9\uC791\uC774 Custom Container \uC704\uC82F\uC5D0 \uCD94\uAC00\uB429\uB2C8\uB2E4. Scroll Wheel\uC740 \uB2E4\uC218\uC758 \uC120\uD0DD \uAC00\uB2A5\uD55C \uD56D\uBAA9\uC73C\uB85C \uAD6C\uC131\uB41C \uC2A4\uD06C\uB864 \uBA54\uB274\uB97C \uB9CC\uB4E4 \uB54C \uC0AC\uC6A9\uB418\uB294 \uC704\uC82F\uC785\uB2C8\uB2E4. \uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C\uB3C4 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD558\uC5EC \uC704\uC82F\uC758 \uB3D9\uC791\uC744 \uBCC0\uACBD\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC124\uBA85\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uBC88\uC5D0\uB294 \uB354 \uD070 \uC2A4\uD06C\uB9B0\uC744 \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uD574\uC0C1\uB3C4\uAC00 800x480 \uD53D\uC140\uC778 \uBCF4\uB4DC(\uC608: STM32F469 Discovery)\uC5D0 \uB9DE\uCDB0 \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD558\uAC70\uB098 \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Custom Container \uBC0F Scroll Wheel\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/touchgfx-engine-features/custom-containers"
  }), `Custom Containers`), ` \uD398\uC774\uC9C0\uC640 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/ui-components/containers/scroll-wheel"
  }), `Scroll Wheel`), ` \uD398\uC774\uC9C0\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uADF8\uB798\uD53D\uC740 \uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", {
    target: "_blank",
    href: (__webpack_require__(38197)/* ["default"] */ .Z)
  }, "\uB9C1\uD06C"), `\uC5D0\uC11C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uC14B(assets) \uC544\uB798 \uC774\uBBF8\uC9C0 \uD3F4\uB354\uC5D0 \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uD30C\uC77C\uC758 \uC555\uCD95\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4. \uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0 \uC0AC\uC6A9\uB41C \uD504\uB85C\uC81D\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uD3F4\uB354 \uACBD\uB85C\uB294 MyApplication2\\assets\\images\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-1-creating-a-custom-container"
  }), `1\uB2E8\uACC4: Custom Container \uC0DD\uC131\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC2\uC758 1\uB2E8\uACC4\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C, \uBA3C\uC800 TouchGFX Designer\uB97C \uC0AC\uC6A9\uD574 \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC900\uBE44\uB418\uBA74 TouchGFX Designer\uC758 Screens \uD0ED\uC5D0\uC11C Container \uD0ED\uC73C\uB85C(1) \uC774\uB3D9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[56, 5]],
    imageSource: "/img/tutorials/tutorial-04/selecting-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Custom Container \uBA54\uB274 \uC120\uD0DD"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Custom Container \uC0DD\uC131 \uD0ED\uC740 Screens \uD0ED\uACFC \uC720\uC0AC\uD558\uC5EC \uC0C8\uB85C\uC6B4 Custom Cointainer\uB97C \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC740 \uC0C8\uB85C\uC6B4 \uC2A4\uD06C\uB9B0\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uACFC \uB3D9\uC77C\uD569\uB2C8\uB2E4. Custom Container\uAC00 \uC0DD\uC131\uB418\uBA74 \uC704\uC82F\uC744 \uCD94\uAC00\uD558\uAC70\uB098, Custom Container\uC758 \uD06C\uAE30\uC640 \uC774\uB984\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Container \uD0ED\uC5D0\uC11C "+" \uBC84\uD2BC(1)\uC744 \uC0AC\uC6A9\uD574 \uC0C8\uB85C\uC6B4 Custom Container\uB97C \uC0DD\uC131\uD55C \uD6C4 \uC774\uB984\uC744 "MenuElement"(2)\uB85C, \uAC00\uB85C \uAE38\uC774\uB97C 390\uC73C\uB85C, \uC138\uB85C \uAE38\uC774\uB97C 70\uC73C\uB85C(3) \uBCC0\uACBD\uD569\uB2C8\uB2E4.`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[56, 8], [435, 8], [435, 35]],
    imageSource: "/img/tutorials/tutorial-04/creating-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, `Custom Container \uC0DD\uC131 \uBC0F \uC18D\uC131 \uC124\uC815`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-widgets-to-the-custom-container"
  }), `Custom Container\uC5D0 \uC704\uC82F \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Custom Container\uB97C \uC0DD\uC131\uD558\uACE0 \uC18D\uC131\uC744 \uC124\uC815\uD588\uB2E4\uBA74 \uC774\uC81C \uC704\uC82F\uC744 Custom Container\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C \uC0AC\uC6A9\uB41C Custom Container\uB294 \uC774\uBBF8\uC9C0, \uADF8\uB9AC\uACE0 \uC640\uC77C\uB4DC\uCE74\uB4DC\uAC00 \uD3EC\uD568\uB41C \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC73C\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uD14D\uC2A4\uD2B8\uB97C \uC640\uC77C\uB4DC\uCE74\uB4DC\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards",
    mdxType: "Link"
  }, "\uD14D\uC2A4\uD2B8 \uBC0F \uAE00\uAF34 \uD398\uC774\uC9C0"), "\uC5D0\uC11C \uC640\uC77C\uB4DC\uCE74\uB4DC \uC139\uC158\uC744 \uCC38\uC870\uD558\uC2ED\uC2DC\uC624."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB450 \uC704\uC82F\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uC2DD\uC73C\uB85C \uC0BD\uC785\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("table", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("th", __spreadValues({
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
  }), `\uC774\uBBF8\uC9C0`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: icon`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uBBF8\uC9C0: icon00.png`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 34`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Y: 17`)))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), `TextArea`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("td", __spreadValues({
    parentName: "tr"
  }, {
    "align": null
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uC774\uB984: text`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Location:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `X: 93, Y: 23`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Text: Menu Element `, `<`, `value`, `>`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Wildcard 1:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uCD08\uAE30 \uAC12: 00`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `\uBC84\uD37C \uD06C\uAE30: 3`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Typography: 20px`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Alignment: \uC67C\uCABD`))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Appearance:`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, `Color: #FFFFFFFF`)))))))), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/adding-content-cc-4-17.png",
    mdxType: "Figure"
  }, "Custom Container\uC5D0 \uB0B4\uC6A9 \uCD94\uAC00\uD558\uAE30(TextArea \uC120\uD0DD)"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-the-custom-container-to-a-screen"
  }), `\uC2A4\uD06C\uB9B0\uC5D0 Custom Container \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Going back to the Screens tab, it is now possible to select the "MenuElement" in the widget menu under Custom Container (1). Place a black box as background and add a couple of the created Custom Container on the canvas. Note that you can move the inserted Containers freely on the Screen. The Custom Containers will appear as one element in the Widget list on the left (2).`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[330, 10], [50, 25]],
    imageSource: "/img/tutorials/tutorial-04/inserting-cc-4-17.png",
    mdxType: "FigureWithPoints"
  }, `Custom Container\uB97C \uC704\uC82F\uC73C\uB85C \uC2A4\uD06C\uB9B0\uC5D0 \uC0BD\uC785\uD558\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-2-creating-a-scroll-wheel"
  }), `2\uB2E8\uACC4: Scroll Wheel \uC0DD\uC131\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `2\uB2E8\uACC4\uC5D0\uC11C\uB294 1\uB2E8\uACC4\uC5D0\uC11C \uB9CC\uB4E0 Custom Container\uC778 "MenuElement"\uB97C \uC0AC\uC6A9\uD574 Scroll Wheel\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. 1\uB2E8\uACC4\uC5D0\uC11C \uC124\uBA85\uD588\uB4EF\uC774 Scroll Wheel\uC740 \uB2E4\uC218\uC758 \uC120\uD0DD \uAC00\uB2A5\uD55C \uD56D\uBAA9\uC73C\uB85C \uAD6C\uC131\uB41C \uC2A4\uD06C\uB864 \uBA54\uB274\uB97C \uB9CC\uB4E4 \uB54C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC2A4\uD06C\uB864\uD558\uBA74 \uD720\uC758 \uD56D\uBAA9\uB4E4\uC774 \uB3D9\uC801\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uACE0, \uD55C \uD56D\uBAA9 \uC120\uD0DD\uD558\uBA74 \uAC15\uC870 \uD45C\uC2DC\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC5D0 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD558\uB824\uBA74 \u201C\uD56D\uBAA9 \uD15C\uD50C\uB9BF\u201D\uC73C\uB85C \uC0AC\uC6A9\uD560 Custom Container\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \u201C\uD56D\uBAA9 \uD15C\uD50C\uB9BF\u201D\uC774\uB77C\uB294 \uAC1C\uB150\uC740 Custom Container\uC758 \uC704\uC82F\uC744 \uC2A4\uD06C\uB864 \uD720\uC5D0 \uD3EC\uD568\uB418\uB294 \uD56D\uBAA9\uC744 \uB9CC\uB4E4 \uAE30\uCD08\uB85C \uC0AC\uC6A9\uD558\uB294 \uB370\uC11C \uBE44\uB86F\uB41C \uAC83\uC73C\uB85C, \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD574 \uB7F0\uD0C0\uC784\uC5D0 \uD56D\uBAA9\uC758 \uC704\uC82F\uC744 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "creating-the-scroll-wheel"
  }), `Scroll Wheel \uC0DD\uC131\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC744 \uC0DD\uC131\uD558\uB824\uBA74 \uBA3C\uC800 \uC2A4\uD06C\uB9B0\uC5D0 \uC774\uBBF8 \uC0BD\uC785\uB41C Custom Containers\uB97C \uC81C\uAC70\uD558\uC5EC \uBC30\uACBD\uC5D0 \uAC80\uC740\uC0C9 \uBC15\uC2A4\uB9CC \uB0A8\uACA8\uB461\uB2C8\uB2E4. Containers \uC139\uC158 \uC544\uB798 \uC704\uC82F \uBA54\uB274\uC5D0\uC11C Scroll Wheel\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4(1). Scroll Wheel\uC744 \uC0DD\uC131\uD558\uACE0 Location \uC18D\uC131\uC5D0\uC11C X\uB97C 208, Y\uB97C 45, \uADF8\uB9AC\uACE0 H\uB97C 390\uC73C\uB85C \uC124\uC815\uD55C \uB2E4\uC74C \uC774\uB984\uC744 "scrollWheel"\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[280, 65]],
    imageSource: "/img/tutorials/tutorial-04/insert-sw-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Scroll Wheel\uC744 \uC0BD\uC785\uD558\uACE0 \uC774\uB984 \uBC0F \uC704\uCE58 \uC18D\uC131 \uC124\uC815\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "adding-items-to-the-scroll-wheel"
  }), `Scroll Wheel\uC5D0 \uD56D\uBAA9 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel \uC18D\uC131 "Item Template\u201D \uC544\uB798\uC758 \uB4DC\uB86D\uB2E4\uC6B4 \uBAA9\uB85D\uC744 \uC0AC\uC6A9\uD574 1\uB2E8\uACC4\uC5D0\uC11C \uC0DD\uC131\uD55C "MenuElement"\uB97C "Item Template"\uC73C\uB85C \uC120\uD0DD\uD569\uB2C8\uB2E4(1). Scroll Wheel\uC5D0 \uD3EC\uD568\uB418\uB294 \uD56D\uBAA9 \uC218 \uC5ED\uC2DC "Item Template\u201D \uC544\uB798\uC5D0\uC11C \uC124\uC815\uD569\uB2C8\uB2E4. Set this to 20 items. Since the Scroll Wheel works by having a selected item in focus, setting where the selected item is positioned in the UI, is done by setting "Selected Item Offset" under the property "List Apperance" (2). \uC120\uD0DD\uD55C \uD56D\uBAA9\uC774 Scroll Wheel\uC5D0\uC11C \uAC00\uC6B4\uB370 \uC788\uC5B4\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0 "Selected Item Offset"\uC744 (390-70)/2 = 160\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    points: [[435, 80], [435, 130]],
    imageSource: "/img/tutorials/tutorial-04/add-cc-to-sw-4-17.png",
    mdxType: "FigureWithPoints"
  }, "Custom Container\uB97C Scroll Wheel\uC5D0 \uCD94\uAC00\uD55C \uD6C4 \uC18D\uC131 \uC870\uC815\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `1\uB2E8\uACC4\uC5D0\uC11C \uB2E4\uC6B4\uB85C\uB4DC\uD55C .zip \uD30C\uC77C\uC5D0\uB294 background.png\uC640 overlay.png\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uB450 \uD30C\uC77C\uC740 "scrollWheel\u201D\uC758 \uC601\uC5ED\uC744 \uAC15\uC870 \uD45C\uC2DC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uBA70, \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC774\uBBF8\uC9C0 \uC704\uC82F\uC73C\uB85C \uCD94\uAC00\uB429\uB2C8\uB2E4. \uB450 \uC774\uBBF8\uC9C0 \uC911 \uD558\uB098\uB294 "scrollWheel" \uC601\uC5ED\uC744 \uAC15\uC870\uD558\uC5EC \uD45C\uC2DC\uD558\uB294 \uBC30\uACBD\uC774\uACE0, \uB098\uBA38\uC9C0 \uD558\uB098\uB294 "scrollWheel\u201D\uC758 \uAC00\uC7A5\uC790\uB9AC\uB85C \uC774\uB3D9\uD588\uC744 \uB54C \u201CscrollWheel\u201D\uC758 \uD56D\uBAA9\uC744 \uC228\uAE30\uB294 \uC624\uBC84\uB808\uC774\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `background.png \uC774\uBBF8\uC9C0\uC758 \uC704\uCE58\uB294 X = 205 \uBC0F Y = 45\uC774\uBA70, "scrollWheel" \uB4A4\uC5D0 \uC788\uAE30 \uB54C\uBB38\uC5D0 "scrollWheel"\uC758 \uD56D\uBAA9\uC774 \uBC30\uACBD \uC704\uC5D0 \uADF8\uB824\uC9C0\uAC8C \uB429\uB2C8\uB2E4. overlay.png \uC774\uBBF8\uC9C0\uC758 \uC704\uCE58\uB294 X = 0 \uBC0F Y = 0\uC774\uBA70, "scrollWheel" \uC704\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4. \uC989, \uD56D\uBAA9\uC774 overlay.png \uC544\uB798\uC5D0 \uADF8\uB824\uC9C0\uAC8C \uB418\uAE30 \uB54C\uBB38\uC5D0 overlay.png\uAC00 \uD22C\uBA85\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 \uD56D\uBAA9\uC774 \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uADF8 \uBC16\uC5D0\uB3C4 CTRL-F\uC640 CTRL-B\uB97C \uB204\uB974\uBA74 \uC704\uC82F\uC774 \uC704\uC82F \uBAA9\uB85D\uC5D0\uC11C \uAC01\uAC01 \uC55E\uB4A4\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/graphics-added-4-17.png",
    mdxType: "Figure"
  }, "Scroll Wheel\uC744 \uC0AC\uC6A9\uD574 \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uB41C \uADF8\uB798\uD53D"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC5D0\uC11C "scrollWheel"\uC5D0 \uB300\uD55C \uC815\uC801 \uC18D\uC131\uB9CC \uC870\uC815\uD588\uAE30 \uB54C\uBB38\uC5D0 \uB85C\uC9C1\uC740 \uCD94\uAC00\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD574\uB3C4 20\uAC1C \uD56D\uBAA9\uC73C\uB85C \uAD6C\uC131\uB41C \uC2A4\uD06C\uB864 \uBA54\uB274\uC5D0 \uBAA8\uB450 \uB3D9\uC77C\uD55C \uAC83\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C\uB294 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uD720 \uD56D\uBAA9\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD574 "scrollWheel"\uC5D0 \uB85C\uC9C1\uC744 \uCD94\uAC00\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-3-adding-user-code-to-scroll-wheel"
  }), `3\uB2E8\uACC4: \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C Scroll Wheel\uC5D0 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC55E\uC5D0\uC11C TouchGFX Designer\uC5D0\uC11C ,\u201CscrollWheel\u201D, Scroll Wheel\uC744 \uC0DD\uC131\uD574\uC11C \uAD6C\uC131\uD588\uB2E4\uBA74 \uC774\uBC88\uC5D0\uB294 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD574\uC11C "scrollWheel\u201D \uD56D\uBAA9\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uB85C\uC9C1\uC744 \uC0DD\uC131\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uD720 \uD56D\uBAA9\uC758 \uC704\uCE58\uC5D0 \uB530\uB77C \uB2E4\uB978 \uADF8\uB798\uD53D\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 Designer \uC0DD\uC131 \uCF54\uB4DC\uC640 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uB97C \uD1B5\uD569\uD574\uC57C \uD569\uB2C8\uB2E4. Designer \uCF54\uB4DC\uC640 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC758 \uD1B5\uD569 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("a", __spreadValues({
    parentName: "p"
  }, {
    "href": "../development/ui-development/software-architecture/code-structure"
  }), `\uCF54\uB4DC \uAD6C\uC870 \uD398\uC774\uC9C0`), `\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "change-image-and-text-in-menuelement"
  }), `MenuElement\uC758 \uC774\uBBF8\uC9C0 \uBC0F \uD14D\uC2A4\uD2B8 \uBCC0\uACBD\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Since the items in the Scroll Wheel are based on the Custom Container "MenuElement", created in step 1, user code for changing the icon and updating the wildcard needs to be added to "MenuElement". When a Custom Container is created in the TouchGFX Designer it generates a .hpp and .cpp file with the same name as the Custom Container. \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uAC00 \uD1B5\uD569\uB418\uC5B4\uC57C \uD558\uB294 \uD30C\uC77C\uC774 \uBC14\uB85C \uC774 \uB450 \uD30C\uC77C\uC785\uB2C8\uB2E4. \uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC608\uC2DC\uC5D0\uC11C "MenuElement"\uC5D0 \uC0DD\uC131\uB418\uB294 \uB450 \uD30C\uC77C\uC758 \uC704\uCE58\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication2\\gui\\include\\gui\\containers\\MenuElement.hpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MyApplication2\\gui\\src\\containers\\MenuElement.cpp`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber(int no)`), ` \uD568\uC218\uB97C "MenuElement"\uC5D0 \uCD94\uAC00\uD558\uBA74 \u201CscrollWheel\u201D\uC5D0\uC11C \uD56D\uBAA9\uC758 \uD14D\uC2A4\uD2B8\uC640 \uC544\uC774\uCF58\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `no`), ` \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD574 \uC774\uBBF8\uC9C0 \uC704\uC82F\uC5D0\uC11C \uD45C\uC2DC\uD560 \uC544\uC774\uCF58\uC744 \uACB0\uC815\uD558\uACE0 TextArea \uC704\uC82F\uC758 \uC640\uC77C\uB4DC\uCE74\uB4DC\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `no`), ` \uAC12\uC73C\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TextArea\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC22B\uC790\uAC00 0~9\uC774\uAE30 \uB54C\uBB38\uC5D0 \uAE30\uBCF8 \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC5D0\uC11C\uB3C4 "0~9"\uB97C "\uC640\uC77C\uB4DC\uCE74\uB4DC \uBC94\uC704"\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `F4\uB97C \uB20C\uB7EC TouchGFX Designer\uC5D0\uC11C \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber(int no)`), `\uC758 \uC120\uC5B8\uACFC \uAD6C\uD604\uC740 \uC544\uB798\uC640 \uAC19\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\uC5D0\uC11C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "TouchGFX/gui/include/gui/containers/MenuElement.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{5,15-42}",
    "{5,15-42}": true
  }), `#ifndef MENUELEMENT_HPP
#define MENUELEMENT_HPP

#include <gui_generated/containers/MenuElementBase.hpp>
#include <BitmapDatabase.hpp>

class MenuElement : public MenuElementBase
{
public:
    MenuElement();
    virtual ~MenuElement() {}

    virtual void initialize();

    void setNumber(int no)
    {
        Unicode::itoa(no, textBuffer, TEXT_SIZE, 10);
        switch (no % 7)
        {
        case 0:
        icon.setBitmap(Bitmap(BITMAP_ICON00_ID));
            break;
        case 1:
        icon.setBitmap(Bitmap(BITMAP_ICON01_ID));
            break;
        case 2:
        icon.setBitmap(Bitmap(BITMAP_ICON02_ID));
            break;
        case 3:
        icon.setBitmap(Bitmap(BITMAP_ICON03_ID));
            break;
        case 4:
        icon.setBitmap(Bitmap(BITMAP_ICON04_ID));
            break;
        case 5:
        icon.setBitmap(Bitmap(BITMAP_ICON05_ID));
            break;
        case 6:
        icon.setBitmap(Bitmap(BITMAP_ICON06_ID));
            break;
        }
    }
protected:
};

#endif // MENUELEMENT_HPP

`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC704 \uCF54\uB4DC\uB294 \uBE44\uD2B8\uB9F5 \uC815\uC758\uB97C \uC0AC\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8 \uC774\uBBF8\uC9C0\uB97C \uCC38\uC870\uD569\uB2C8\uB2E4. \uBE44\uD2B8\uB9F5 \uC815\uC758\uB97C \uAC00\uC838\uC624\uB824\uBA74 \uC704\uC640 \uAC19\uC774 "BitmapDatabase.hpp\u201D \uD30C\uC77C\uC744 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCF54\uB4DC\uB97C \uCD94\uAC00\uD558\uC5EC MenuElement\uC758 \uB0B4\uC6A9\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC73C\uBA74 \uC774\uC81C Scroll Wheel \uD56D\uBAA9\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uCF54\uB4DC\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "update-the-items-in-the-scroll-wheel"
  }), `\uC2A4\uD06C\uB864 \uD720 \uD56D\uBAA9 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uB294 Scroll Wheel\uC744 \uB9CC\uB4E4\uBA74\uC11C Screen \uAE30\uBCF8 \uD074\uB798\uC2A4\uC5D0\uC11C \uAC00\uC0C1 \uD568\uC218\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774 \uAC00\uC0C1 \uD568\uC218\uB294 \uC2A4\uD06C\uB864 \uD720\uC5D0 \uC0C8\uB85C\uC6B4 \uD56D\uBAA9\uC774 \uD45C\uC2DC\uB420 \uB54C\uB9C8\uB2E4 \uD638\uCD9C\uB429\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uC774 \uD568\uC218\uB97C \uC7AC\uC815\uC758\uD558\uBA74 \uCF54\uB4DC\uAC00 \uC2A4\uD06C\uB864 \uD720 \uD56D\uBAA9\uACFC \uC0C1\uD638\uC791\uC6A9\uD560 \uC218 \uC788\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD568\uC218\uC758 \uC774\uB984\uC740 Scroll Wheel \uC774\uB984\uC5D0 UpdatedItem\uC774 \uCD94\uAC00\uB418\uC5B4 \uACB0\uC815\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0 \uC0AC\uC6A9\uB41C \uD568\uC218\uC758 \uC774\uB984\uC740 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)`), `\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC5EC\uAE30\uC11C \uB9E4\uAC1C\uBCC0\uC218 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\uB294 \uD604\uC7AC \uC5C5\uB370\uC774\uD2B8 \uC911\uC778 \uD56D\uBAA9\uC744 \uC54C\uB824\uC8FC\uB294 \uC778\uB371\uC2A4 \uAC12\uC774\uACE0, `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `item`), `\uC740 \uD604\uC7AC Scroll Wheel\uC5D0 \uD45C\uC2DC\uB418\uB294 MenuElement \uC778\uC2A4\uD134\uC2A4\uC5D0 \uB300\uD55C \uCC38\uC870\uC785\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), `\uAC00 \uD604\uC7AC \uC5C5\uB370\uC774\uD2B8 \uC911\uC778 \uD56D\uBAA9\uC744 \uC54C\uB824\uC8FC\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setNumber()`), `\uAC00 \uD638\uCD9C\uB418\uC5B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `itemIndex`), ` \uAC12\uC5D0 \uB530\uB77C \uC5C5\uB370\uC774\uD2B8 \uC911\uC778 \uD56D\uBAA9 \uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD569\uB2C8\uB2E4. Scroll Wheel \uD56D\uBAA9\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "Screen1View.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{14-17}",
    "{14-17}": true
  }), `#ifndef SCREEN1VIEW_HPP
#define SCREEN1VIEW_HPP

#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>
#include <gui/screen1_screen/Screen1Presenter.hpp>

class Screen1View : public Screen1ViewBase
{
public:
    Screen1View();
    virtual ~Screen1View() {}
    virtual void setupScreen();
    virtual void tearDownScreen();
    virtual void scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)
    {
        item.setNumber(itemIndex);
    }
protected:
};

#endif // SCREEN1VIEW_HPP
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD558\uBA74 \uC778\uB371\uC2A4 \uAC12\uACFC \uC544\uC774\uCF58\uC774 \uD3EC\uD568\uB41C \uD56D\uBAA9\uC758 \uD14D\uC2A4\uD2B8\uAC00 \uD45C\uC2DC\uB418\uB294 \uD56D\uBAA9\uC5D0 \uB530\uB77C \uBC14\uB01D\uB2C8\uB2E4. \uC544\uB798 \uC774\uBBF8\uC9C0\uB294 \uCF54\uB4DC\uB97C \uAD6C\uD604\uD558\uC5EC \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD55C \uC608\uC2DC\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/running-sim.png",
    mdxType: "Figure"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "step-4-adding-custom-behavior-to-scroll-wheel"
  }), `4\uB2E8\uACC4: Scroll Wheel\uC5D0 \uCEE4\uC2A4\uD140 \uB3D9\uC791 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD29C\uD1A0\uB9AC\uC5BC 4\uC758 \uB9C8\uC9C0\uB9C9 \uB2E8\uACC4\uC5D0\uC11C\uB294 Scroll Wheel\uC5D0 \uCEE4\uC2A4\uD140 \uB3D9\uC791\uC744 \uCD94\uAC00\uD558\uC5EC \uD56D\uBAA9\uC744 \uC2A4\uD06C\uB864\uD560 \uB54C \uC6D0\uD615 \uD328\uD134\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uB9C8\uCE58 \uB2E4\uC774\uC5BC\uCC98\uB7FC \uC6C0\uC9C1\uC774\uB3C4\uB85D \uB9CC\uB4E4\uC5B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h3", __spreadValues({}, {
    "id": "add-custom-behavior-to-menuelement"
  }), `MenuElement\uC5D0 \uCEE4\uC2A4\uD140 \uB3D9\uC791 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `Scroll Wheel\uC5D0 \uD45C\uC2DC\uB418\uB294 \uAC01 \uD56D\uBAA9\uB9C8\uB2E4 \uC774\uBBF8\uC9C0 \uBC0F \uD14D\uC2A4\uD2B8 \uC704\uC82F\uC758 \uAC00\uB85C \uC704\uCE58\uB97C \uBC14\uAFD4\uC8FC\uBA74 \uC2A4\uD06C\uB864 \uD720\uC774 \uB2E4\uC774\uC5BC \uD328\uD134\uC73C\uB85C \uC6C0\uC9C1\uC785\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 "MenuElement"\uC758 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), ` \uD568\uC218\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\uC5D0\uC11C \uC7AC\uC815\uC758\uD569\uB2C8\uB2E4. `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), ` \uD568\uC218\uB294 \uC138\uB85C \uBC29\uD5A5\uC73C\uB85C \uC6C0\uC9C1\uC77C \uB54C\uB9C8\uB2E4 \uD638\uCD9C\uB418\uC5B4 Custom Container\uB97C \uC0C8 \uC704\uCE58\uC5D0 \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uD558\uC9C0\uB9CC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), `\uB97C \uC7AC\uC815\uC758\uD558\uBA74 Scroll Wheel\uC744 \uC2A4\uD06C\uB864\uD560 \uB54C\uB9C8\uB2E4 \uCEE8\uD14C\uC774\uB108 \uB0B4\uC5D0\uC11C \uC774\uBBF8\uC9C0 \uBC0F \uD14D\uC2A4\uD2B8 \uC704\uC82F\uC758 \uC704\uCE58\uB97C \uAC00\uB85C \uBC29\uD5A5\uC73C\uB85C \uBCC0\uACBD\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC774\uBBF8\uC9C0\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `MenuElement.hpp`), `\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), ` \uD568\uC218\uB97C \uC0C8\uB85C \uAD6C\uD604\uD558\uC5EC \uB450 \uC704\uC82F\uC758 \uC704\uCE58\uB97C \uBCC0\uACBD\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD55C \uAC83\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `math.h`), `\uB3C4 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_CodeHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mdxType: "CodeHeader"
  }, "MenuElement.hpp"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp",
    "metastring": "{6,16-39}",
    "{6,16-39}": true
  }), `#ifndef MENUELEMENT_HPP
#define MENUELEMENT_HPP

#include <gui_generated/containers/MenuElementBase.hpp>
#include <BitmapDatabase.hpp>
#include <math.h>

class MenuElement : public MenuElementBase
{
public:
    MenuElement();
    virtual ~MenuElement() {}

    virtual void initialize();

    //Adjusts the position of the text and the icon, based in the calculated offset(x)
    void offset(int16_t x)
    {
        icon.setX(30 + x);
        text.setX(80 + x);
    }

    //The new declaration and implementation of the setY() function
    virtual void setY(int16_t y)
    {
        //set Y as normal
        MenuElementBase::setY(y);

        const int circleRadius = 250;

        //center around middle of background
        y = y + getHeight() / 2 - 390 /2;

        //calculate x
        float x_f = circleRadius - sqrtf((float)((circleRadius * circleRadius) - (y * y)));
        int16_t x = (int16_t)(x_f + 0.5f);

        offset(x);
    }

    ...
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC0C8\uB85C\uC6B4 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setY()`), ` \uD568\uC218\uAC00 \uAD6C\uD604\uB418\uC5B4 \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD558\uBA74 Scroll Wheel\uC774 \uC624\uBC84\uB808\uC774\uC758 \uACE1\uC120\uC744 \uB530\uB77C \uB2E4\uC774\uC5BC \uD328\uD134\uC73C\uB85C \uC6C0\uC9C1\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-04/running-sim-02.png",
    mdxType: "Figure"
  }, "\uC2DC\uBBAC\uB808\uC774\uD130 \uC2E4\uD589\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uAC83\uC73C\uB85C \uD29C\uD1A0\uB9AC\uC5BC4\uB97C \uB9C8\uCE58\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FurtherReading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mdxType: "FurtherReading"
  }, "\uC5EC\uAE30\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uAC1C\uB150\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uACE0 \uC2F6\uB2E4\uBA74 \uC544\uB798 \uD398\uC774\uC9C0\uC5D0\uC11C \uBA87 \uAC00\uC9C0 \uAC1C\uB150\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uB2E4\uB8E8\uACE0 \uC788\uC73C\uB2C8 \uCC38\uC870\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.", /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/ui-components/containers/scroll-wheel",
    mdxType: "Link"
  }, "Scroll Wheel \uD398\uC774\uC9C0"), "\uC5D0\uB294 TouchGFX Designer\uC5D0\uC11C Scroll Wheel\uC744 \uC0DD\uC131\uD558\uC5EC \uAD6C\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uBE44\uB86F\uD574 \uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0\uC11C \uB85C\uC9C1\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC774 \uC124\uBA85\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    to: "../development/ui-development/touchgfx-engine-features/custom-containers",
    mdxType: "Link"
  }, "Custom Container \uD398\uC774\uC9C0"), "\uC5D0\uB294 Custom Container\uC758 \uAC1C\uB150\uACFC \uC0AC\uC6A9 \uBC29\uBC95\uC774 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4."))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 38197:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/files/touchgfx-tutorial-04-fea43cce73bad37b8df3f2deaa9f7bd1.zip");

/***/ })

}]);