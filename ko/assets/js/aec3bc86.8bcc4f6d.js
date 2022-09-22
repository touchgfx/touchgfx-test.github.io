"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[6451],{

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

/***/ 41356:
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
  id: "tutorial-05",
  title: "\uD29C\uD1A0\uB9AC\uC5BC5: \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158 \uC0DD\uC131\uD558\uAE30"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "tutorials/tutorial-05",
  "id": "tutorials/tutorial-05",
  "title": "\uD29C\uD1A0\uB9AC\uC5BC5: \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158 \uC0DD\uC131\uD558\uAE30",
  "description": "",
  "source": "@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/tutorial-05.mdx",
  "sourceDirName": "tutorials",
  "slug": "/tutorials/tutorial-05",
  "permalink": "/4.20/ko/docs/tutorials/tutorial-05",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "tutorial-05",
    "title": "\uD29C\uD1A0\uB9AC\uC5BC5: \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uBC0F \uC561\uC158 \uC0DD\uC131\uD558\uAE30"
  },
  "sidebar": "docs",
  "previous": {
    "title": "\uD29C\uD1A0\uB9AC\uC5BC4: \uCEE4\uC2A4\uD140 \uB3D9\uC791\uC744 \uCD94\uAC00\uD558\uC5EC Scroll Wheel \uC0DD\uC131\uD558\uAE30",
    "permalink": "/4.20/ko/docs/tutorials/tutorial-04"
  },
  "next": {
    "title": "AbstractButton",
    "permalink": "/4.20/ko/docs/api/classes/classtouchgfx_1_1_abstract_button"
  }
};
const assets = {};



const toc = [{
  value: "\uCEE4\uC2A4\uD140 \uC561\uC158\uC744 \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uD558\uAE30",
  id: "adding-a-custom-action-to-a-screen",
  level: 2
}, {
  value: "\uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0\uAC8C \uAC12 \uC804\uB2EC\uD558\uAE30",
  id: "passing-a-value-to-a-custom-action",
  level: 2
}, {
  value: "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC0AC\uC6A9\uD558\uAE30",
  id: "using-custom-triggers-in-custom-containers",
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
  }), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `TouchGFX Designer\uC5D0\uC11C\uB294 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uC640 \uC561\uC158\uC744 \uC0AC\uC6A9\uD574 \uC790\uC2E0\uB9CC\uC758 \uC778\uD130\uB799\uC158 \uAD6C\uC131\uC694\uC18C\uB97C \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC2A4\uD06C\uB9B0\uC740 \uAC01\uAC01 TouchGFX Designer\uC5D0\uC11C \uD638\uCD9C\uD558\uAC70\uB098 \uCF54\uB4DC\uB85C \uD638\uCD9C\uD560 \uC218 \uC788\uB294 \uC561\uC158 \uCEEC\uB809\uC158`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `(C++\uC758 void \uBA54\uC18C\uB4DC)`), `\uC73C\uB85C \uAD6C\uC131\uB418\uBA70, \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108 \uC5ED\uC2DC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uBC18\uC751\uD560 \uC218 \uC788\uB294 \uD2B8\uB9AC\uAC70 \uCEEC\uB809\uC158`, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `(C++\uC758 \uCF5C\uBC31\uACFC \uB3D9\uC77C)`), `\uC73C\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C\uB294 \uC774\uB7EC\uD55C \uAE30\uB2A5\uC744 \uC0B4\uD3B4\uBCF4\uBA74\uC11C \uBCF4\uB2E4 \uB9E4\uB044\uB7FD\uACE0 \uB3D9\uC801\uC778 TouchGFX \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uD29C\uD1A0\uB9AC\uC5BC\uB294 \uC2E0\uADDC TouchGFX \uC0AC\uC6A9\uC790\uC5D0\uAC8C\uB294 \uC801\uD569\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC2E0\uADDC \uC0AC\uC6A9\uC790\uB294 \uD29C\uD1A0\uB9AC\uC5BC \uC139\uC158\uC744 \uB098\uC911\uC5D0 \uB2E4\uC2DC \uCC3E\uC544\uBCF4\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "adding-a-custom-action-to-a-screen"
  }), `\uCEE4\uC2A4\uD140 \uC561\uC158\uC744 \uC2A4\uD06C\uB9B0\uC5D0 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC758 \uC8FC\uC81C:`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBC30\uACBD \uBC15\uC2A4\uC640 \uBC84\uD2BC\uC73C\uB85C \uC0C8\uB85C\uC6B4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0DD\uC131\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCEE4\uC2A4\uD140 \uC561\uC158 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBC84\uD2BC\uC744 \uB20C\uB800\uC744 \uB54C \uCEE4\uC2A4\uD140 \uC561\uC158\uC744 \uC0AC\uC6A9\uD574 \uBC30\uACBD\uC0C9 \uBCC0\uACBD\uD558\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 \uD06C\uAE30\uAC00 480x272\uC778 \uBE48 \uC560\uD50C\uB9AC\uCF00\uC774\uC158(\uC608: STM32F746 \uB610\uB294 \uC2DC\uBBAC\uB808\uC774\uD130)\uC744 \uC0C8\uB85C \uC0DD\uC131\uD55C \uD6C4 \uBC30\uACBD\uC73C\uB85C \uC0AC\uC6A9\uD560 \uBC15\uC2A4(\uC774\uD558 \u201C\uBC30\uACBD\u201D)\uC640 \uBC84\uD2BC(\uC774\uD558 "\uBC84\uD2BC")\uC744 \uC0BD\uC785\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \uBAA8\uC2B5\uC774 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 85]],
    imageSource: "/img/tutorials/tutorial-05/white-background-and-button-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uD770\uC0C9 \uBC30\uACBD \uBC15\uC2A4\uC640 \uBC84\uD2BC \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC2A4\uD06C\uB9B0\uC5D0 \uCEE4\uC2A4\uD140 \uC561\uC158\uC744 \uCD94\uAC00\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0\uC758 Properties \uD0ED\uC5D0\uC11C Screen\uC744 \uC120\uD0DD\uD55C \uB2E4\uC74C "Actions" \uADF8\uB8F9\uC5D0 \uC788\uB294 + \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uCD94\uAC00\uB429\uB2C8\uB2E4(\uC704\uC5D0\uC11C 1\uBC88). \uC561\uC158 \uC774\uB984\uC744 "setBackgroundColor"\uB85C \uC9C0\uC815\uD55C \uD6C4 \uC124\uBA85(\uC608: "Sets the background color\u201D)\uC744 \uC785\uB825\uD569\uB2C8\uB2E4. \uC774 \uC561\uC158\uC5D0\uC11C Type\uC740 \uC124\uC815\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/adding-custom-action-to-screen-4-17.png",
    mdxType: "Figure"
  }, "\uC2A4\uD06C\uB9B0\uC5D0 \uC0C8 \uCEE4\uC2A4\uD140 \uC561\uC158 \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `F4\uB97C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Shortcut__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mdxType: "Shortcut"
  }, `\uB20C\uB7EC`), ` \uD504\uB85C\uC81D\uD2B8 \uCF54\uB4DC\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1ViewBase.cpp`), ` \uD30C\uC77C\uC758 \uBE48 \uAD6C\uD604\uCCB4\uC640 \uD568\uAED8 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `TouchGFX/generated/gui_generated/include/gui_generated/screen1_screen/Screen1ViewBase.hpp`), ` \uD30C\uC77C\uC5D0 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor()`), `\uB77C\uACE0 \uD558\uB294 \uAC00\uC0C1 \uBA54\uC18C\uB4DC\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `You can add functionality to this method by overriding it in user code in the `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `Screen1View.cpp`), ` file or by creating interactions through TouchGFX Designer. Let's try out the latter by going to the interactions tab for the screen and adding an interaction that calls our new method when our button is clicked.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/calling-setbackgroundcolor-on-click-4-17.png",
    mdxType: "Figure"
  }, "\uBC84\uD2BC \uD074\uB9AD \uC2DC setBackgroundColor \uD638\uCD9C\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), ` \uD638\uCD9C \uC2DC \uC2E4\uC81C \uC561\uC158\uC744 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 \uB610 \uB2E4\uB978 \uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uCEE4\uC2A4\uD140 \uC561\uC158(1)\uC744 \uD2B8\uB9AC\uAC70\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uBA3C\uC800 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `"Change box color"`), ` \uC561\uC158(2)\uC744 \uC0AC\uC6A9\uD574 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `"setBackgroundColor is called"`), ` \uD2B8\uB9AC\uAC70 \uBC1C\uC0DD \uC2DC \uBC30\uACBD \uBC15\uC2A4 \uC0C9\uC0C1\uC744 \uAC80\uC740\uC0C9\uC73C\uB85C \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[355, 60], [410, 76]],
    imageSource: "/img/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uCEE4\uC2A4\uD140 \uC561\uC158 setBackgroundColor\uC5D0 \uAE30\uB2A5 \uAD6C\uD604\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD558\uACE0 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uBC30\uACBD\uC774 \uAC80\uC740\uC0C9\uC73C\uB85C \uBC14\uB01D\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uCEE4\uC2A4\uD140 \uC561\uC158\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/black-color-result-4-17.png",
    mdxType: "Figure"
  }, "\uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uBC30\uACBD\uC774 \uAC80\uC740\uC0C9\uC73C\uB85C \uBC14\uB01D\uB2C8\uB2E4."), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "passing-a-value-to-a-custom-action"
  }), `\uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0\uAC8C \uAC12 \uC804\uB2EC\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC55E\uC11C \uC0DD\uC131\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBC14\uD0D5\uC73C\uB85C \uB2E4\uC74C\uACFC \uAC19\uC774 \uCEE4\uC2A4\uD140 \uC561\uC158\uC758 \uAC1C\uB150\uC744 \uD655\uC7A5\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `setBackgroundColor \uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uB9E4\uAC1C\uBCC0\uC218 \uCD94\uAC00\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `setBackgroundColor\uC5D0 \uB79C\uB364 \uC0C9\uC0C1 \uC804\uB2EC\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uBC84\uD2BC\uC744 \uB20C\uB800\uC744 \uB54C \uBC30\uACBD\uC744 \uB79C\uB364 \uC0C9\uC0C1\uC73C\uB85C \uBCC0\uACBD\uD558\uAE30`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uAC12\uC744 \uC804\uB2EC\uD574\uC11C \uB3D9\uC801 \uD6A8\uACFC\uB97C \uB192\uC5EC `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), ` \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC7AC\uBBF8\uC788\uAC8C \uAFB8\uBA70\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB098\uC911\uC5D0 \uC0C8\uB85C\uC6B4 Interaction\uC744 \uC124\uC815\uD560 \uC608\uC815\uC774\uBBC0\uB85C \uC2A4\uD06C\uB9B0\uC758 Interactions \uD0ED\uC5D0\uC11C \uAC01 Interaction\uB9C8\uB2E4 x \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uD604\uC7AC \uB450 \uAC00\uC9C0 Interaction\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC2A4\uD06C\uB9B0\uC758 Properties \uD0ED\uC5D0\uC11C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), ` \uCEE4\uC2A4\uD140 \uC561\uC158\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC Type \uD655\uC778\uB780\uC744 \uC120\uD0DD\uD55C \uD6C4 \uC561\uC158\uC5D0 \uC804\uB2EC\uD560 \uB9E4\uAC1C\uBCC0\uC218 \uC720\uD615\uC73C\uB85C \u201Ccolortype\u201D\uC744 \uC785\uB825\uD569\uB2C8\uB2E4(colortype\uC740 \uC0C9\uC0C1\uC744 \uB098\uD0C0\uB0B4\uAE30 \uC704\uD574 TouchGFX\uC5D0\uC11C \uAE30\uBCF8\uC801\uC73C\uB85C \uC81C\uACF5\uB418\uB294 \uC720\uD615\uC785\uB2C8\uB2E4). \uB9E4\uAC1C\uBCC0\uC218\uB294 \uC774\uB984\uC774 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("em", {
    parentName: "p"
  }, `"value"`), `\uB85C \uC9C0\uC815\uB418\uBBC0\uB85C \uC774\uB984\uC744 \uBCC4\uB3C4\uB85C \uC9C0\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/adding-type-to-action-4-17.png",
    mdxType: "Figure"
  }, "\uCEE4\uC2A4\uD140 \uC561\uC158\uC5D0 \uB9E4\uAC1C\uBCC0\uC218 \uC124\uC815\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC0C8\uB86D\uAC8C \uCD94\uAC00\uB41C \uB9E4\uAC1C\uBCC0\uC218 \uC720\uD615\uC744 \uC0AC\uC6A9\uD560 \uC0C1\uD638\uC791\uC6A9\uC744 \uC124\uC815\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD2B8\uB9AC\uAC70\uB294 "setBackgroundColor is called"\uC774\uACE0, \uC561\uC158\uC740 "Execute C++ code"\uC785\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC0AC\uC6A9\uD574 \uBC30\uACBD \uBC15\uC2A4\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD574\uC57C \uD558\uBBC0\uB85C \uC2E4\uD589\uD560 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `background.setColor(value);
background.invalidate();
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB450 \uBC88\uC9F8 \uC904\uC5D0\uC11C \uBC30\uACBD\uC744 \uC0C8\uB85C\uC6B4 \uC0C9\uC0C1\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9AC\uAC8C \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/set-color-execute-code-4-17.png",
    mdxType: "Figure"
  }, "\uC804\uB2EC\uB41C \uAC12\uC744 \uC0AC\uC6A9\uD574 \uBC30\uACBD \uC0C9\uC0C1 \uBCC0\uACBD\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD2B8\uB9AC\uAC70\uB97C \uBCF4\uBA74 \uB9E4\uAC1C\uBCC0\uC218\uC758 \uC774\uB984\uACFC \uC720\uD615\uC774 "value : colortype"\uB85C \uD45C\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uBC84\uD2BC \uD074\uB9AD \uC2DC setBackgroundColor\uB97C \uC2E4\uC81C\uB85C \uD638\uCD9C\uD560 \uC778\uD130\uB799\uC158\uC744 \uC124\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uD2B8\uB9AC\uAC70\uAC00 "Button is clicked"\uC774\uACE0, \uC561\uC158\uC774 "Call Screen1 setBackgroundColor"\uC778 \uC778\uD130\uB799\uC158\uC744 \uD558\uB098 \uB354 \uCD94\uAC00\uD55C \uD6C4 \uAC12 \uC18D\uC131\uC5D0 \uC608\uC0C1\uD558\uB294 \uC720\uD615\uC774 \uD45C\uC2DC\uB418\uB294\uC9C0 \uD655\uC778\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `stdlib.h`), `\uC5D0\uC11C \uB09C\uC218 \uC0DD\uC131 \uBA54\uC18C\uB4DC\uC778 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `rand()`), `\uB97C \uC774\uC6A9\uD574 0~255\uC5D0\uC11C \uB09C\uC218 3\uAC1C\uB97C \uAC00\uC838\uC640 \uC0C9\uC0C1\uC744 \uC9C0\uC815\uD558\uC5EC \uB79C\uB364 \uC0C9\uC0C1\uC744 setBackgroundColor\uC5D0\uAC8C \uC804\uB2EC\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `rand()`), `\uC5D0 \uB300\uD55C \uC811\uADFC \uAD8C\uD55C\uC744 \uC5BB\uC73C\uB824\uBA74 \uC774 \uD568\uC218\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uB610\uD55C \uC544\uB798 \uC608\uC640 \uAC19\uC774 TouchGFX Designer\uC5D0\uC11C \uC2A4\uD06C\uB9B0\uACFC \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 include\uB97C \uC9C1\uC811 \uC785\uB825\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC2A4\uD06C\uB9B0\uC758 Properties \uD0ED\uC5D0\uC11C \u201CIncludes\u201D \uADF8\uB8F9 \uC544\uB798\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC785\uB825\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <stdlib.h>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/include-stdlib-4-17.png",
    mdxType: "Figure"
  }, "stdlib\uB97C \uCD94\uAC00\uD558\uC5EC rand()\uC5D0 \uB300\uD55C \uC811\uADFC \uAD8C\uD55C \uC5BB\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C Value \uC18D\uC131\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC785\uB825\uD569\uB2C8\uB2E4(1).`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[355, 110]],
    imageSource: "/img/tutorials/tutorial-05/pass-random-color-to-action-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uBC84\uD2BC \uD074\uB9AD \uC2DC \uB79C\uB364 \uC0C9\uC0C1 \uAC12 \uC804\uB2EC\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD558\uC5EC \uBC84\uD2BC\uC744 \uC5EC\uB7EC \uCC28\uB840 \uB20C\uB7EC\uBD05\uB2C8\uB2E4. \uBC30\uACBD\uC774 \uB79C\uB364 \uC0C9\uC0C1\uC73C\uB85C \uBC14\uB014 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/random-color-result-initial-4-17.png",
    mdxType: "Figure"
  }, "\uBC84\uD2BC \uD074\uB9AD\uC5D0 \uB530\uB978 \uB79C\uB364 \uC0C9\uC0C1 \uACB0\uACFC"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("h2", __spreadValues({}, {
    "id": "using-custom-triggers-in-custom-containers"
  }), `\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC0AC\uC6A9\uD558\uAE30`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uB9C8\uC9C0\uB9C9\uC73C\uB85C Custom Container \uC5ED\uC2DC \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uCEEC\uB809\uC158\uC744 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD655\uC7A5\uD558\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("ul", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ColorEmitter\uB77C\uB294 \uC0C8 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `"colorChanged"\uB77C\uB294 \uC774\uB984\uC758 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB97C ColorEmitter\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `colorChanged \uD2B8\uB9AC\uAC70\uB97C \uC0AC\uC6A9\uD574 \uBC84\uD2BC\uC744 \uB20C\uB800\uC744 \uB54C \uB79C\uB364 \uC0C9\uC0C1 \uC2E0\uD638\uB97C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC804\uC1A1\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `\uC2A4\uD06C\uB9B0\uC5D0\uC11C colorChanged \uD2B8\uB9AC\uAC70 \uC2E0\uD638\uB97C \uC218\uC2E0\uD560 \uC0C1\uD638\uC791\uC6A9\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("li", {
    parentName: "ul"
  }, `ColorEmitter\uC5D0\uC11C \uC804\uC1A1\uD558\uB294 \uC0C9\uC0C1 \uC2E0\uD638\uB97C \uC0AC\uC6A9\uD574 \uBC30\uACBD \uBC15\uC2A4\uC758 \uC0C9\uC0C1\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB97C \uC0AC\uC6A9\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC774\uBCA4\uD2B8\uC5D0 \uC2E0\uD638\uB97C \uC804\uC1A1\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uB54C \uB79C\uB364 \uC0C9\uC0C1\uC744 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `setBackgroundColor`), `\uC5D0 \uC804\uB2EC\uD558\uB294 \uBC84\uD2BC \uC778\uD130\uB799\uC158\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC2A4\uD06C\uB9B0\uC73C\uB85C \uB79C\uB364 \uC0C9\uC0C1\uC744 \uC804\uC1A1\uD558\uC5EC \uC2A4\uD06C\uB9B0\uC774 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uD1B5\uC2E0\uD558\uB294 \uAC12\uC744 \uC0AC\uC6A9\uD558\uB3C4\uB85D \uC124\uC815\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC11C\uB85C \uD1B5\uC2E0\uD558\uB294 \uAC16\uAC00\uC9C0 UI \uAD6C\uC131\uC694\uC18C\uB4E4\uC774 \uB354 \uC791\uACE0 \uC7AC\uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD55C \uAD6C\uC131\uC694\uC18C\uB97C \uB9CC\uB4DC\uB294 \uAC83\uC5D0 \uB300\uD55C \uAC04\uB2E8\uD55C \uC608\uC2DC\uAC00 \uB420 \uAC83\uC785\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uBA3C\uC800 \uC0C8\uB85C\uC6B4 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD558\uC5EC \uC774\uB984\uC744 "ColorEmitter"\uB77C\uACE0 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uBC84\uD2BC\uC744 \uC0BD\uC785\uD558\uACE0 \uC774\uB984\uC744 "button"\uC774\uB77C\uACE0 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \uBAA8\uC2B5\uC774 \uB429\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/color-emitter-custom-container-4-17.png",
    mdxType: "Figure"
  }, "ColorEmitter \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uBC84\uD2BC\uC744 \uD074\uB9AD\uD560 \uB54C\uB9C8\uB2E4 ColorEmitter\uAC00 \uC804\uCCB4 \uD658\uACBD\uC5D0 \uB79C\uB364 \uC0C9\uC0C1\uC744 \uC804\uC1A1\uD558\uB3C4\uB85D \uB9CC\uB4E4\uC5B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uB204\uAD6C\uB4E0\uC9C0 \uC804\uC1A1\uB418\uB294 \uC2E0\uD638\uB97C \uC218\uC2E0\uD558\uC5EC \uD574\uB2F9 \uC0C9\uC0C1\uC744 \uC0AC\uC6A9\uD558\uB3C4\uB85D \uACB0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uD574\uB2F9 \uC0C9\uC0C1\uC744 \uBC30\uACBD\uC0C9\uC73C\uB85C \uC124\uC815\uD558\uC5EC \uC55E\uC5D0\uC11C \uD588\uB358 \uB3D9\uC791\uC744 \uADF8\uB300\uB85C \uB530\uB77C\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0C9\uC0C1\uC744 \uC804\uC1A1\uD558\uB824\uBA74 \uBA3C\uC800 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB97C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 Properties \uD0ED\uC5D0\uC11C "Triggers" \uADF8\uB8F9(1)\uC5D0 \uC788\uB294 + \uBC84\uD2BC\uC744 \uB204\uB985\uB2C8\uB2E4. \uD2B8\uB9AC\uAC70 \uC774\uB984\uC744 "colorChanged"\uB85C \uC9C0\uC815\uD55C \uD6C4 Description\uC5D0 "The color has changed"\uB97C, \uADF8\uB9AC\uACE0 Type\uC5D0 "colortype"\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 78]],
    imageSource: "/img/tutorials/tutorial-05/adding-custom-trigger-to-custom-container-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uCD94\uAC00\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 Interactions \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uC0C8 \uC778\uD130\uB799\uC158\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uD2B8\uB9AC\uAC70\uB85C "Button is clicked"\uB97C, \uADF8\uB9AC\uACE0 \uC561\uC158\uC73C\uB85C "Emit colorChanged\u201D\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uC81C \uB79C\uB364 \uC0C9\uC0C1\uC744 \uC804\uC1A1\uD574\uC57C \uD558\uBBC0\uB85C \uC55E\uC5D0\uC11C Value \uC18D\uC131\uC5D0 \uC0AC\uC6A9\uD588\uB358 \uAC83\uACFC \uB3D9\uC77C\uD55C \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/emitting-color-changed-4-17.png",
    mdxType: "Figure"
  }, "\uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70 \uC804\uC1A1"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uD558\uC9C0\uB9CC \uCC98\uC74C\uC5D0\uB294 \uC774\uB807\uAC8C \uC124\uC815\uD574\uB3C4 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uADF8 \uC774\uC720\uB294 `, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("inlineCode", {
    parentName: "p"
  }, `touchgfx::Color`), ` \uB124\uC784\uC2A4\uD398\uC774\uC2A4\uAC00 \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 \uC790\uB3D9\uC73C\uB85C \uCD94\uAC00\uB418\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774\uC804\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC5D0 include\uB97C \uC785\uB825\uD574\uC57C \uD569\uB2C8\uB2E4. \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uC758 Properties \uD0ED\uC5D0\uC11C \u201CIncludes\u201D \uADF8\uB8F9(1) \uC544\uB798\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC785\uB825\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("pre", null, /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("code", __spreadValues({
    parentName: "pre"
  }, {
    "className": "language-cpp"
  }), `#include <touchgfx/Color.hpp>
`)), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_FigureWithPoints__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    points: [[420, 115]],
    imageSource: "/img/tutorials/tutorial-05/extra-includes-4-17.png",
    mdxType: "FigureWithPoints"
  }, "\uCD94\uAC00 include \uC785\uB825"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC774\uC804 \uBC84\uD2BC\uC744 \uBC29\uAE08 \uC0DD\uC131\uD55C ColorEmitter \uCEE4\uC2A4\uD140 \uCEE8\uD14C\uC774\uB108\uB85C \uBC14\uAFD4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. Screen1\uC744 \uC120\uD0DD\uD558\uC5EC \uC5EC\uAE30\uC5D0 \uC788\uB294 \uBC84\uD2BC\uC744 \uC0AD\uC81C\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC774 \uBC84\uD2BC\uC744 \uC0AC\uC6A9\uD558\uB294 \uC0C1\uD638\uC791\uC6A9\uC5D0\uC11C \uB3C4\uBA54\uC778 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uAC8C \uB429\uB2C8\uB2E4. \uB610\uD55C ColorEmitter\uC5D0 \uC0AC\uC0C8\uB85C \uC0DD\uC131\uD560 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 \uD574\uB2F9 \uC778\uD130\uB799\uC158\uB3C4 \uC0AD\uC81C\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uC81C ColorEmitter \uC778\uC2A4\uD134\uC2A4\uB97C Screen1\uC5D0 \uC0BD\uC785\uD558\uACE0 Screen1\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uC778\uD130\uB799\uC158\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 Trigger\uC5D0 "ColorEmitter colorChanged happens"\uB77C\uB294 \uC635\uC158\uC774 \uBCF4\uC77C \uAC83\uC785\uB2C8\uB2E4. \uC774 \uC635\uC158\uC744 \uC120\uD0DD\uD558\uACE0 Action\uC5D0 "Call Screen1 setBackgroundColor"\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uC81C colorChanged \uC804\uC1A1 \uAC12\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uAC12\uC740 \uC55E\uC11C \uC5B8\uAE09\uD55C \uAC83\uCC98\uB7FC \uC774\uB984\uC774 \uD56D\uC0C1 "value"\uC774\uAE30 \uB54C\uBB38\uC5D0 Value \uC18D\uC131\uC5D0 "value"\uB97C \uC785\uB825\uD569\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/emit-colorchanged-happens-interaction-4-17.png",
    mdxType: "Figure"
  }, "colorChanged \uCEE4\uC2A4\uD140 \uD2B8\uB9AC\uAC70\uB97C \uC218\uC2E0\uD560 \uC778\uD130\uB799\uC158 \uC124\uC815\uD558\uAE30"), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)("p", null, `\uC774\uC81C \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2E4\uD589\uD558\uC5EC \uBC84\uD2BC\uC744 \uB2E4\uC2DC \uB20C\uB7EC\uBD05\uB2C8\uB2E4. \uBC30\uACBD\uC774 \uB79C\uB364 \uC0C9\uC0C1\uC73C\uB85C \uBC14\uB00C\uBA74\uC11C \uB3D9\uC77C\uD55C \uB3D9\uC791\uC774 \uD45C\uC2DC\uB420 \uAC83\uC785\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uBC88\uC5D0\uB294 \uBAA8\uB4E0 \uAE30\uB2A5\uC744 \uC2A4\uD06C\uB9B0\uC5D0\uC11C \uAD6C\uD604\uD558\uC9C0 \uC54A\uACE0, \uB354 \uC791\uACE0 \uC7AC\uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD55C \uAD6C\uC131\uC694\uC18C, \uC77C\uBA85 ColorEmitter\uC640 \uC2A4\uD06C\uB9B0 \uC0AC\uC774\uC5D0\uC11C \uC77C\uC5B4\uB098\uB294 \uD1B5\uC2E0\uC744 \uC131\uACF5\uC801\uC73C\uB85C \uAD6C\uD604\uD588\uC2B5\uB2C8\uB2E4.`), /* @__PURE__ */ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__/* .mdx */ .kt)(_site_components_Figure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    imageSource: "/img/tutorials/tutorial-05/random-color-result-final-4-17.png",
    mdxType: "Figure"
  }, "\uBC84\uD2BC \uD074\uB9AD\uC5D0 \uB530\uB978 \uB79C\uB364 \uC0C9\uC0C1 \uACB0\uACFC"));
}
;
MDXContent.isMDXComponent = true;


/***/ })

}]);